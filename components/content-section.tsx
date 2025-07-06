"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { ContentSection } from '@/lib/content';

interface ContentSectionProps {
  section: ContentSection;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function ContentSectionComponent({ section, isExpanded = false, onToggle }: ContentSectionProps) {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'available': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-orange-600" />;
      case 'coming-soon': return <AlertCircle className="h-4 w-4 text-gray-400" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'available': return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">Available</Badge>;
      case 'in-progress': return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">In Progress</Badge>;
      case 'coming-soon': return <Badge variant="outline">Coming Soon</Badge>;
      default: return <Badge variant="outline">Coming Soon</Badge>;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getStatusIcon(section.status)}
            <div>
              <CardTitle className="text-lg">{section.title}</CardTitle>
              {section.status === 'in-progress' && section.progress && (
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={section.progress} className="h-2 w-32" />
                  <span className="text-sm text-muted-foreground">{section.progress}%</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getStatusBadge(section.status)}
            {section.status === 'available' && onToggle && (
              <Button variant="ghost" size="sm" onClick={onToggle}>
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && section.status === 'available' && (
        <CardContent className="space-y-6">
          {/* Content */}
          {section.content && (
            <div className="prose dark:prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: section.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length;
                    return `<h${level} class="font-bold text-${4-level}xl mt-6 mb-3">`;
                  }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} 
              />
            </div>
          )}
        </CardContent>
      )}
      
      {section.status !== 'available' && (
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">
              {section.status === 'in-progress' ? 'Content In Development' : 'Coming Soon'}
            </p>
            <p className="text-sm">
              {section.status === 'in-progress' 
                ? 'Our expert team is currently developing this section.' 
                : 'This section will be available in a future update.'}
            </p>
            {section.status === 'in-progress' && section.progress && (
              <div className="mt-4 max-w-xs mx-auto">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{section.progress}%</span>
                </div>
                <Progress value={section.progress} className="h-2" />
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}