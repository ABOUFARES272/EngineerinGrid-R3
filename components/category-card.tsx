"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'automotive' | 'green' | 'immersive';
}

export function CategoryCard({ title, description, image, link, category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'automotive':
        return 'from-blue-600 to-blue-800';
      case 'green':
        return 'from-green-500 to-green-700';
      case 'immersive':
        return 'from-purple-600 to-indigo-800';
      default:
        return 'from-blue-600 to-blue-800';
    }
  };

  return (
    <Link href={link} passHref>
      <Card 
        className={cn(
          "overflow-hidden cursor-pointer group transition-all duration-300 hover:border-primary h-full",
          isHovered ? "border-primary shadow-lg" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 w-full",
              isHovered ? "scale-110" : "scale-100"
            )}
            priority
          />
          <div className={cn(
            "absolute inset-0 opacity-60 bg-gradient-to-b",
            getCategoryColor(category)
          )} />
        </div>

        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-heading">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="capitalize">{category}</span>
          </div>
        </CardContent>

        <CardFooter>
          <div className={cn(
            "flex items-center text-sm font-medium text-primary transition-all",
            isHovered ? "text-primary" : "text-muted-foreground"
          )}>
            Explore topics
            <ArrowRight className={cn(
              "ml-1 h-4 w-4 transition-transform",
              isHovered ? "translate-x-1" : ""
            )} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}