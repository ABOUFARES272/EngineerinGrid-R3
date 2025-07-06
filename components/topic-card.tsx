"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ArrowRight, Clock, BookOpen, Star } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  category: 'automotive' | 'green' | 'immersive';
  slug: string;
  tags?: string[];
  readTime?: string;
  difficulty?: string;
  featured?: boolean;
}

export function TopicCard({ 
  title, 
  description, 
  category, 
  slug, 
  tags = [], 
  readTime, 
  difficulty,
  featured = false 
}: TopicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryStyle = (category: string): string => {
    switch(category) {
      case 'automotive':
        return 'border-l-4 border-blue-600';
      case 'green':
        return 'border-l-4 border-green-500';
      case 'immersive':
        return 'border-l-4 border-purple-600';
      default:
        return 'border-l-4 border-primary';
    }
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <Link href={`/${category}/${slug}`} passHref>
      <Card 
        className={cn(
          "cursor-pointer group transition-all duration-300 hover:border-primary h-full relative",
          getCategoryStyle(category),
          isHovered ? "shadow-lg transform -translate-y-1" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        <CardHeader className={featured ? "pt-12" : ""}>
          <CardTitle className="text-xl font-heading line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3} more
                </Badge>
              )}
            </div>
          )}

          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-3">
              {readTime && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{readTime}</span>
                </div>
              )}
              {difficulty && (
                <Badge className={cn("text-xs", getDifficultyColor(difficulty))}>
                  {difficulty}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-3 w-3" />
              <span className="capitalize">{category}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className={cn(
            "flex items-center text-sm font-medium transition-all w-full justify-between",
            isHovered ? "text-primary" : "text-muted-foreground"
          )}>
            <span>Read article</span>
            <ArrowRight className={cn(
              "h-4 w-4 transition-transform",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}