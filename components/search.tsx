"use client"

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, ExternalLink, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  searchArticles, 
  getExternalResources, 
  getSuggestedCategory, 
  getSearchSuggestions,
  type SearchResult,
  type ExternalResource 
} from '@/lib/search';
import Link from 'next/link';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [externalResources, setExternalResources] = useState<ExternalResource[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsTimeoutRef = useRef<NodeJS.Timeout>();

  // Handle search
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setExternalResources([]);
      return;
    }

    setIsSearching(true);
    
    // Search internal articles
    const results = searchArticles(query);
    setSearchResults(results);
    
    // Get external resources
    const suggestedCategory = getSuggestedCategory(query);
    const external = getExternalResources(query, suggestedCategory || undefined);
    setExternalResources(external);
    
    setIsSearching(false);
  };

  // Handle input change with debouncing
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    
    // Clear previous timeout
    if (suggestionsTimeoutRef.current) {
      clearTimeout(suggestionsTimeoutRef.current);
    }
    
    // Set new timeout for suggestions
    suggestionsTimeoutRef.current = setTimeout(() => {
      if (value.length >= 2) {
        const newSuggestions = getSearchSuggestions(value);
        setSuggestions(newSuggestions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    performSearch(searchQuery);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    performSearch(suggestion);
  };

  // Handle result click
  const handleResultClick = () => {
    setIsOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    setExternalResources([]);
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'automotive': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'green': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'immersive': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  // Get match type badge
  const getMatchTypeBadge = (matchType: SearchResult['matchType']) => {
    switch(matchType) {
      case 'exact': return <Badge variant="default" className="text-xs">Exact Match</Badge>;
      case 'partial': return <Badge variant="secondary" className="text-xs">Partial Match</Badge>;
      case 'category': return <Badge variant="outline" className="text-xs">Related Topic</Badge>;
      default: return null;
    }
  };

  // Reset search when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSearchResults([]);
      setExternalResources([]);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [isOpen]);

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <SearchIcon className="h-5 w-5" />
            Search EngineerinGrid
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <div className="flex w-full items-center space-x-2">
              <div className="relative flex-1">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search topics, guides, and resources..."
                  value={searchQuery}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="pr-10"
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  </div>
                )}
                
                {/* Search Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 z-50 bg-background border rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground text-sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <SearchIcon className="h-3 w-3 inline mr-2 text-muted-foreground" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button type="submit" disabled={isSearching}>
                Search
              </Button>
            </div>
          </form>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto mt-4 space-y-4">
            {searchQuery && (
              <>
                {/* Internal Results */}
                {searchResults.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold">Articles on EngineerinGrid</h3>
                      <Badge variant="secondary">{searchResults.length}</Badge>
                    </div>
                    <div className="space-y-3">
                      {searchResults.slice(0, 6).map((result, index) => (
                        <Link
                          key={index}
                          href={`/${result.category}/${result.slug}`}
                          onClick={handleResultClick}
                        >
                          <Card className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardHeader className="pb-2">
                              <div className="flex items-start justify-between gap-2">
                                <CardTitle className="text-base leading-tight">
                                  {result.title}
                                </CardTitle>
                                <div className="flex items-center gap-1 flex-shrink-0">
                                  {getMatchTypeBadge(result.matchType)}
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <CardDescription className="text-sm mb-2">
                                {result.description}
                              </CardDescription>
                              <div className="flex items-center justify-between">
                                <Badge className={getCategoryColor(result.category)}>
                                  {result.category}
                                </Badge>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* External Resources */}
                {externalResources.length > 0 && (
                  <>
                    {searchResults.length > 0 && <Separator />}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold">
                          {searchResults.length === 0 
                            ? "We couldn't find that topic, but here are some great resources:" 
                            : "Want to explore more? Check these external resources:"
                          }
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {externalResources.slice(0, 4).map((resource, index) => (
                          <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                              <div className="flex items-start justify-between gap-2">
                                <CardTitle className="text-base leading-tight">
                                  {resource.title}
                                </CardTitle>
                                <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <CardDescription className="text-sm mb-2">
                                {resource.description}
                              </CardDescription>
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-xs">
                                  {resource.source}
                                </Badge>
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 text-sm font-medium"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Visit Site →
                                </a>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* No Results */}
                {searchResults.length === 0 && externalResources.length === 0 && searchQuery && !isSearching && (
                  <div className="text-center py-8">
                    <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground text-sm">
                      Try different keywords or browse our categories to find what you're looking for.
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Initial State */}
            {!searchQuery && (
              <div className="text-center py-8">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Search EngineerinGrid</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find articles on automotive engineering, green energy, and immersive technology.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['ADAS', 'Solar Energy', 'Virtual Reality', 'Battery Technology', 'AR Displays', 'Smart Grid'].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchQuery(term);
                        performSearch(term);
                      }}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}