"use client"

import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';
import { TopicsGrid } from '@/components/topics-grid';
import { TopicFilters } from '@/components/topic-filters';
import { topicsData, getTopicsByCategory, getTopicsByDifficulty, getTopicsByTag } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Filter, TrendingUp } from 'lucide-react';

export default function TopicsPage() {
  const [filteredTopics, setFilteredTopics] = useState(topicsData);

  const handleFilterChange = (filters: {
    category?: string;
    difficulty?: string;
    tags: string[];
  }) => {
    let filtered = topicsData;

    // Apply category filter
    if (filters.category) {
      filtered = getTopicsByCategory(filters.category as 'automotive' | 'green' | 'immersive');
    }

    // Apply difficulty filter
    if (filters.difficulty) {
      filtered = filtered.filter(topic => topic.difficulty === filters.difficulty);
    }

    // Apply tags filter
    if (filters.tags.length > 0) {
      filtered = filtered.filter(topic =>
        filters.tags.some(tag =>
          topic.tags.some(topicTag =>
            topicTag.toLowerCase().includes(tag.toLowerCase())
          )
        )
      );
    }

    setFilteredTopics(filtered);
  };

  const stats = [
    { label: 'Total Topics', value: topicsData.length, icon: BookOpen },
    { label: 'Categories', value: 3, icon: Filter },
    { label: 'Featured', value: topicsData.filter(t => t.featured).length, icon: TrendingUp },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.3)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <BookOpen className="h-4 w-4 mr-2" />
              All Topics
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Engineering Knowledge Hub
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                Explore All Topics
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover comprehensive resources across automotive engineering, green energy solutions, 
              and immersive technologies. Filter by category, difficulty, or tags to find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="All Engineering Topics"
            description="Browse our complete collection of technical articles and guides"
            align="left"
          />
          
          <div className="mt-12">
            <TopicFilters onFilterChange={handleFilterChange} />
            
            {filteredTopics.length > 0 ? (
              <TopicsGrid 
                topics={filteredTopics}
                className="mt-8"
              />
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No topics found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}