export const topicsData = [
  // Automotive Topics
  {
    title: "Advanced Battery Systems",
    description: "Comprehensive guide to modern automotive battery technologies, from lithium-ion chemistry to thermal management systems.",
    category: "automotive" as const,
    slug: "advanced-battery-systems",
    tags: ["Battery", "Lithium-ion", "BMS", "Thermal Management"],
    readTime: "12 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "OEM Encyclopedia",
    description: "Comprehensive guide to major automotive manufacturers, their platforms, and technologies.",
    category: "automotive" as const,
    slug: "oem-encyclopedia",
    tags: ["OEM", "Manufacturing", "Platforms", "Technology"],
    readTime: "8 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "Zone EE Architectures",
    description: "Deep dive into modern zonal electrical architectures in vehicles.",
    category: "automotive" as const,
    slug: "zone-ee-architectures",
    tags: ["Electrical", "Architecture", "Zonal", "Automotive"],
    readTime: "12 min read",
    difficulty: "Advanced",
    featured: true,
  },
  {
    title: "ADAS Levels Explained",
    description: "Explore the six levels of driving automation from manual to fully autonomous.",
    category: "automotive" as const,
    slug: "adas-levels",
    tags: ["ADAS", "Autonomous", "Safety", "Automation"],
    readTime: "10 min read",
    difficulty: "Beginner",
    featured: true,
  },
  {
    title: "Battery Platforms Comparison",
    description: "Analysis of leading EV battery platforms and their technical specifications.",
    category: "automotive" as const,
    slug: "battery-platforms",
    tags: ["Battery", "EV", "Platforms", "Comparison"],
    readTime: "15 min read",
    difficulty: "Intermediate",
    featured: false,
  },
  {
    title: "CAN Bus Communication",
    description: "Understanding Controller Area Network protocols in modern vehicles.",
    category: "automotive" as const,
    slug: "can-bus-communication",
    tags: ["CAN Bus", "Communication", "Protocols", "Networking"],
    readTime: "9 min read",
    difficulty: "Advanced",
    featured: false,
  },
  {
    title: "Automotive Cybersecurity",
    description: "Security challenges and solutions in connected vehicle systems.",
    category: "automotive" as const,
    slug: "automotive-cybersecurity",
    tags: ["Cybersecurity", "Connected Cars", "Security", "Protection"],
    readTime: "11 min read",
    difficulty: "Advanced",
    featured: false,
  },
  
  // Green Energy Topics
  {
    title: "How Solar Energy Works",
    description: "Technical explanation of photovoltaic systems and solar power generation.",
    category: "green" as const,
    slug: "solar-energy",
    tags: ["Solar", "Photovoltaic", "Renewable", "Energy"],
    readTime: "7 min read",
    difficulty: "Beginner",
    featured: true,
  },
  {
    title: "EV to Grid Systems",
    description: "Exploring vehicle-to-grid technology and its impact on energy distribution.",
    category: "green" as const,
    slug: "ev-to-grid",
    tags: ["V2G", "Grid", "Electric Vehicles", "Energy Storage"],
    readTime: "13 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "Battery Storage Technologies",
    description: "Comparison of modern energy storage solutions from lithium-ion to flow batteries.",
    category: "green" as const,
    slug: "battery-storage",
    tags: ["Battery", "Storage", "Lithium-ion", "Flow Batteries"],
    readTime: "14 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "Net-Zero Smart Homes",
    description: "Engineering approaches to design and build energy-neutral residential buildings.",
    category: "green" as const,
    slug: "net-zero-homes",
    tags: ["Smart Homes", "Net Zero", "Energy Efficiency", "Sustainability"],
    readTime: "16 min read",
    difficulty: "Advanced",
    featured: false,
  },
  {
    title: "Wind Turbine Technology",
    description: "Modern wind turbine design, efficiency improvements, and grid integration.",
    category: "green" as const,
    slug: "wind-turbine-technology",
    tags: ["Wind Energy", "Turbines", "Grid Integration", "Efficiency"],
    readTime: "12 min read",
    difficulty: "Intermediate",
    featured: false,
  },
  {
    title: "Smart Grid Infrastructure",
    description: "Next-generation electrical grid systems and their intelligent capabilities.",
    category: "green" as const,
    slug: "smart-grid-infrastructure",
    tags: ["Smart Grid", "Infrastructure", "IoT", "Energy Management"],
    readTime: "10 min read",
    difficulty: "Advanced",
    featured: false,
  },
  
  // Immersive Tech Topics
  {
    title: "AR in Automotive Displays",
    description: "How augmented reality is transforming driving experiences and HUD technology.",
    category: "immersive" as const,
    slug: "ar-automotive-displays",
    tags: ["AR", "HUD", "Automotive", "Displays"],
    readTime: "9 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "Virtual Prototyping",
    description: "Using virtual environments for product development and testing.",
    category: "immersive" as const,
    slug: "virtual-prototyping",
    tags: ["VR", "Prototyping", "Development", "Testing"],
    readTime: "11 min read",
    difficulty: "Intermediate",
    featured: true,
  },
  {
    title: "Mixed Reality for Engineers",
    description: "Applications of mixed reality technology in engineering workflows.",
    category: "immersive" as const,
    slug: "mixed-reality-engineering",
    tags: ["Mixed Reality", "Engineering", "Workflows", "Applications"],
    readTime: "13 min read",
    difficulty: "Advanced",
    featured: true,
  },
  {
    title: "Industrial Metaverse",
    description: "How the industrial metaverse differs from consumer applications.",
    category: "immersive" as const,
    slug: "industrial-metaverse",
    tags: ["Metaverse", "Industrial", "Enterprise", "Applications"],
    readTime: "15 min read",
    difficulty: "Advanced",
    featured: false,
  },
  {
    title: "VR Training Systems",
    description: "Virtual reality applications in technical training and skill development.",
    category: "immersive" as const,
    slug: "vr-training-systems",
    tags: ["VR", "Training", "Education", "Skill Development"],
    readTime: "8 min read",
    difficulty: "Beginner",
    featured: false,
  },
  {
    title: "Digital Twin Technology",
    description: "Creating and managing digital replicas of physical systems and processes.",
    category: "immersive" as const,
    slug: "digital-twin-technology",
    tags: ["Digital Twin", "Simulation", "IoT", "Monitoring"],
    readTime: "12 min read",
    difficulty: "Advanced",
    featured: false,
  },
];

// Helper functions for topic management
export function getTopicsByCategory(category: 'automotive' | 'green' | 'immersive') {
  return topicsData.filter(topic => topic.category === category);
}

export function getFeaturedTopics(limit?: number) {
  const featured = topicsData.filter(topic => topic.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getTopicBySlug(slug: string, category?: string) {
  return topicsData.find(topic => 
    topic.slug === slug && (category ? topic.category === category : true)
  );
}

export function getTopicsByTag(tag: string) {
  return topicsData.filter(topic => 
    topic.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function getTopicsByDifficulty(difficulty: 'Beginner' | 'Intermediate' | 'Advanced') {
  return topicsData.filter(topic => topic.difficulty === difficulty);
}

export function getAllTags() {
  const allTags = topicsData.flatMap(topic => topic.tags);
  return [...new Set(allTags)].sort();
}