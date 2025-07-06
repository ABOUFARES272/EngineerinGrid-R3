import { topicsData } from './data';

export interface SearchResult {
  title: string;
  description: string;
  category: 'automotive' | 'green' | 'immersive';
  slug: string;
  relevanceScore: number;
  matchType: 'exact' | 'partial' | 'fuzzy' | 'category';
}

export interface ExternalResource {
  title: string;
  url: string;
  description: string;
  source: string;
}

// Keywords mapping for better search matching
const categoryKeywords = {
  automotive: [
    'car', 'vehicle', 'auto', 'engine', 'motor', 'drive', 'transmission', 'brake',
    'suspension', 'chassis', 'oem', 'adas', 'autonomous', 'electric vehicle', 'ev',
    'hybrid', 'battery', 'charging', 'tesla', 'ford', 'gm', 'toyota', 'bmw',
    'mercedes', 'audi', 'volkswagen', 'nissan', 'honda', 'hyundai', 'kia',
    'lidar', 'radar', 'camera', 'sensor', 'ecu', 'can bus', 'lin', 'ethernet',
    'infotainment', 'hmi', 'cockpit', 'dashboard', 'steering', 'airbag',
    'safety', 'crash', 'ncap', 'iso26262', 'functional safety', 'cybersecurity'
  ],
  green: [
    'solar', 'wind', 'renewable', 'sustainable', 'clean energy', 'green',
    'photovoltaic', 'pv', 'inverter', 'grid', 'battery storage', 'lithium',
    'energy storage', 'smart grid', 'microgrid', 'power', 'electricity',
    'carbon', 'emission', 'climate', 'environment', 'eco', 'efficiency',
    'led', 'lighting', 'hvac', 'insulation', 'smart home', 'iot',
    'geothermal', 'hydroelectric', 'biomass', 'fuel cell', 'hydrogen',
    'net zero', 'carbon neutral', 'sustainability', 'recycling'
  ],
  immersive: [
    'ar', 'vr', 'mr', 'xr', 'augmented reality', 'virtual reality',
    'mixed reality', 'extended reality', 'metaverse', 'hololens',
    'oculus', 'quest', 'headset', 'hmd', 'display', 'projection',
    '3d', 'simulation', 'modeling', 'cad', 'visualization', 'rendering',
    'unity', 'unreal', 'game engine', 'haptic', 'gesture', 'tracking',
    'motion capture', 'mocap', 'computer vision', 'ai', 'machine learning',
    'digital twin', 'prototype', 'training', 'education', 'collaboration'
  ]
};

// Fuzzy string matching function
function fuzzyMatch(query: string, target: string): number {
  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();
  
  // Exact match
  if (targetLower.includes(queryLower)) {
    return 1.0;
  }
  
  // Calculate Levenshtein distance for fuzzy matching
  const matrix = Array(queryLower.length + 1).fill(null).map(() => 
    Array(targetLower.length + 1).fill(null)
  );
  
  for (let i = 0; i <= queryLower.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= targetLower.length; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= queryLower.length; i++) {
    for (let j = 1; j <= targetLower.length; j++) {
      const cost = queryLower[i - 1] === targetLower[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const distance = matrix[queryLower.length][targetLower.length];
  const maxLength = Math.max(queryLower.length, targetLower.length);
  return 1 - (distance / maxLength);
}

// Search function
export function searchArticles(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const results: SearchResult[] = [];
  const queryLower = query.toLowerCase().trim();
  
  topicsData.forEach(topic => {
    let relevanceScore = 0;
    let matchType: SearchResult['matchType'] = 'fuzzy';
    
    // Check exact matches in title
    if (topic.title.toLowerCase().includes(queryLower)) {
      relevanceScore += 10;
      matchType = 'exact';
    }
    
    // Check exact matches in description
    if (topic.description.toLowerCase().includes(queryLower)) {
      relevanceScore += 8;
      if (matchType !== 'exact') matchType = 'partial';
    }
    
    // Check fuzzy matches in title
    const titleFuzzy = fuzzyMatch(queryLower, topic.title);
    if (titleFuzzy > 0.6) {
      relevanceScore += titleFuzzy * 6;
      if (matchType === 'fuzzy') matchType = 'partial';
    }
    
    // Check fuzzy matches in description
    const descFuzzy = fuzzyMatch(queryLower, topic.description);
    if (descFuzzy > 0.4) {
      relevanceScore += descFuzzy * 4;
    }
    
    // Check category keywords
    const categoryWords = categoryKeywords[topic.category] || [];
    const queryWords = queryLower.split(/\s+/);
    
    queryWords.forEach(word => {
      categoryWords.forEach(keyword => {
        if (keyword.includes(word) || word.includes(keyword)) {
          relevanceScore += 2;
          if (matchType === 'fuzzy') matchType = 'category';
        }
      });
    });
    
    // Add result if relevance score is above threshold
    if (relevanceScore > 1) {
      results.push({
        title: topic.title,
        description: topic.description,
        category: topic.category,
        slug: topic.slug,
        relevanceScore,
        matchType
      });
    }
  });
  
  // Sort by relevance score
  return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

// Get suggested category based on query
export function getSuggestedCategory(query: string): 'automotive' | 'green' | 'immersive' | null {
  const queryLower = query.toLowerCase();
  let maxScore = 0;
  let suggestedCategory: 'automotive' | 'green' | 'immersive' | null = null;
  
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    let score = 0;
    keywords.forEach(keyword => {
      if (queryLower.includes(keyword) || keyword.includes(queryLower)) {
        score += keyword.length; // Longer keywords get higher scores
      }
    });
    
    if (score > maxScore) {
      maxScore = score;
      suggestedCategory = category as 'automotive' | 'green' | 'immersive';
    }
  });
  
  return maxScore > 0 ? suggestedCategory : null;
}

// External resources for when no internal matches are found
export function getExternalResources(query: string, category?: string): ExternalResource[] {
  const resources: ExternalResource[] = [];
  const queryEncoded = encodeURIComponent(query);
  
  // General engineering resources
  resources.push(
    {
      title: `Search IEEE Xplore for "${query}"`,
      url: `https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=${queryEncoded}`,
      description: "Access peer-reviewed research papers and technical articles from IEEE",
      source: "IEEE Xplore"
    },
    {
      title: `Find "${query}" on ResearchGate`,
      url: `https://www.researchgate.net/search?q=${queryEncoded}`,
      description: "Connect with researchers and access scientific publications",
      source: "ResearchGate"
    },
    {
      title: `Search Google Scholar for "${query}"`,
      url: `https://scholar.google.com/scholar?q=${queryEncoded}`,
      description: "Find scholarly literature across various disciplines",
      source: "Google Scholar"
    }
  );
  
  // Category-specific resources
  if (category === 'automotive' || getSuggestedCategory(query) === 'automotive') {
    resources.push(
      {
        title: `Automotive research on "${query}"`,
        url: `https://www.sae.org/search?q=${queryEncoded}`,
        description: "SAE International - Standards and technical papers for automotive engineering",
        source: "SAE International"
      },
      {
        title: `Auto industry insights on "${query}"`,
        url: `https://www.automotiveworld.com/?s=${queryEncoded}`,
        description: "Latest automotive industry news, analysis, and technical insights",
        source: "Automotive World"
      }
    );
  }
  
  if (category === 'green' || getSuggestedCategory(query) === 'green') {
    resources.push(
      {
        title: `Renewable energy research on "${query}"`,
        url: `https://www.nrel.gov/search/?q=${queryEncoded}`,
        description: "National Renewable Energy Laboratory research and data",
        source: "NREL"
      },
      {
        title: `Green technology insights on "${query}"`,
        url: `https://www.greentechmedia.com/search?q=${queryEncoded}`,
        description: "Clean energy news, analysis, and market intelligence",
        source: "Green Tech Media"
      }
    );
  }
  
  if (category === 'immersive' || getSuggestedCategory(query) === 'immersive') {
    resources.push(
      {
        title: `AR/VR research on "${query}"`,
        url: `https://www.roadtovr.com/?s=${queryEncoded}`,
        description: "Virtual and augmented reality news, reviews, and insights",
        source: "Road to VR"
      },
      {
        title: `Immersive tech papers on "${query}"`,
        url: `https://dl.acm.org/action/doSearch?AllField=${queryEncoded}&expand=all`,
        description: "ACM Digital Library - Computer science and technology research",
        source: "ACM Digital Library"
      }
    );
  }
  
  return resources;
}

// Get search suggestions based on partial input
export function getSearchSuggestions(partialQuery: string): string[] {
  if (partialQuery.length < 2) return [];
  
  const suggestions = new Set<string>();
  const queryLower = partialQuery.toLowerCase();
  
  // Add topic titles that match
  topicsData.forEach(topic => {
    if (topic.title.toLowerCase().includes(queryLower)) {
      suggestions.add(topic.title);
    }
    
    // Add individual words from titles
    topic.title.split(/\s+/).forEach(word => {
      if (word.toLowerCase().startsWith(queryLower) && word.length > 2) {
        suggestions.add(word);
      }
    });
  });
  
  // Add relevant keywords
  Object.values(categoryKeywords).flat().forEach(keyword => {
    if (keyword.toLowerCase().includes(queryLower) && keyword.length > partialQuery.length) {
      suggestions.add(keyword);
    }
  });
  
  return Array.from(suggestions).slice(0, 8);
}