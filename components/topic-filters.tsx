"use client"

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags } from '@/lib/data';
import { Filter, X } from 'lucide-react';

interface TopicFiltersProps {
  onFilterChange: (filters: {
    category?: string;
    difficulty?: string;
    tags: string[];
  }) => void;
}

export function TopicFilters({ onFilterChange }: TopicFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: 'automotive', label: 'Automotive', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' },
    { value: 'green', label: 'Green Energy', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' },
    { value: 'immersive', label: 'Immersive Tech', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' }
  ];

  const difficulties = [
    { value: 'Beginner', label: 'Beginner', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' },
    { value: 'Intermediate', label: 'Intermediate', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' },
    { value: 'Advanced', label: 'Advanced', color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' }
  ];

  const allTags = getAllTags();

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    updateFilters(newCategory, selectedDifficulty, selectedTags);
  };

  const handleDifficultyChange = (difficulty: string) => {
    const newDifficulty = selectedDifficulty === difficulty ? '' : difficulty;
    setSelectedDifficulty(newDifficulty);
    updateFilters(selectedCategory, newDifficulty, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateFilters(selectedCategory, selectedDifficulty, newTags);
  };

  const updateFilters = (category: string, difficulty: string, tags: string[]) => {
    onFilterChange({
      category: category || undefined,
      difficulty: difficulty || undefined,
      tags
    });
  };

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSelectedTags([]);
    onFilterChange({ tags: [] });
  };

  const hasActiveFilters = selectedCategory || selectedDifficulty || selectedTags.length > 0;

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Topics
          </CardTitle>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {showFilters && (
        <CardContent className="space-y-6">
          {/* Category Filter */}
          <div>
            <h4 className="font-medium mb-3">Category</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedCategory === category.value ? '' : category.color
                  }`}
                  onClick={() => handleCategoryChange(category.value)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h4 className="font-medium mb-3">Difficulty</h4>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty.value}
                  variant={selectedDifficulty === difficulty.value ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedDifficulty === difficulty.value ? '' : difficulty.color
                  }`}
                  onClick={() => handleDifficultyChange(difficulty.value)}
                >
                  {difficulty.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="font-medium mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}