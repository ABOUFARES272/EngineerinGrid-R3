"use client"

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  BookOpen, 
  Star, 
  Download, 
  FileText, 
  ExternalLink,
  Calendar,
  User,
  Tag,
  ArrowLeft,
  Eye,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { topicsData } from '@/lib/data';
import { getTopicContent } from '@/lib/content';
import { ContentSectionComponent } from './content-section';
import { PDFViewer } from './pdf-viewer';

interface Topic {
  title: string;
  description: string;
  category: 'automotive' | 'green' | 'immersive';
  slug: string;
  tags: string[];
  readTime: string;
  difficulty: string;
  featured: boolean;
}

interface TopicContentProps {
  topic: Topic;
}

export function TopicContent({ topic }: TopicContentProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'resources'>('overview');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const topicContent = getTopicContent(topic.slug);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'automotive': return 'from-blue-600 to-blue-800';
      case 'green': return 'from-green-500 to-green-700';
      case 'immersive': return 'from-purple-600 to-indigo-800';
      default: return 'from-blue-600 to-blue-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'automotive': return 'Automotive Engineering';
      case 'green': return 'Green Energy Solutions';
      case 'immersive': return 'Immersive Technology';
      default: return category;
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
    <div>
      {/* Hero section */}
      <section className={cn(
        "relative py-16 md:py-24 overflow-hidden bg-gradient-to-br",
        getCategoryColor(topic.category)
      )}>
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* Back navigation */}
            <div className="mb-6">
              <Link 
                href={`/${topic.category}`}
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {getCategoryName(topic.category)}
              </Link>
            </div>

            {/* Topic header */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {getCategoryName(topic.category)}
                </Badge>
                {topic.featured && (
                  <Badge className="bg-yellow-500 text-yellow-900">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
                {topic.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8">
                {topic.description}
              </p>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{topic.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <Badge className={cn("text-xs", getDifficultyColor(topic.difficulty))}>
                    {topic.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>EngineeringGrid Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Main content */}
              <div className="lg:col-span-3">
                {/* Navigation tabs */}
                <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
                  {[
                    { id: 'overview', label: 'Overview', icon: BookOpen },
                    { id: 'content', label: 'Full Content', icon: FileText },
                    { id: 'resources', label: 'Resources', icon: Download }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                        activeTab === tab.id
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="prose dark:prose-invert max-w-none">
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      {/* Topic overview */}
                      <div>
                        <h2>What You'll Learn</h2>
                        <p>
                          This comprehensive guide will cover the essential aspects of {topic.title.toLowerCase()}, 
                          providing you with both theoretical understanding and practical implementation knowledge.
                        </p>
                        
                        <h3>Key Topics Covered:</h3>
                        <ul>
                          <li>Fundamental concepts and principles</li>
                          <li>Current industry standards and best practices</li>
                          <li>Real-world applications and case studies</li>
                          <li>Future trends and emerging technologies</li>
                          <li>Hands-on examples and implementation guides</li>
                        </ul>

                        <h3>Prerequisites</h3>
                        <p>
                          This content is designed for {topic.difficulty.toLowerCase()} level readers. 
                          {topic.difficulty === 'Beginner' && " No prior experience required - we'll start from the basics."}
                          {topic.difficulty === 'Intermediate' && " Basic understanding of engineering principles recommended."}
                          {topic.difficulty === 'Advanced' && " Strong foundation in engineering concepts and industry experience recommended."}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'content' && (
                    <div className="space-y-8">
                      {topicContent ? (
                        <div className="space-y-6">
                          <h2>Content Sections</h2>
                          {topicContent.sections.map((section) => (
                            <ContentSectionComponent
                              key={section.id}
                              section={section}
                              isExpanded={expandedSections.has(section.id)}
                              onToggle={() => toggleSection(section.id)}
                            />
                          ))}
                        </div>
                      ) : (
                        <Card className="border-2 border-dashed border-orange-300 bg-orange-50 dark:bg-orange-950/20">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                              <FileText className="h-5 w-5" />
                              Full Content In Development
                            </CardTitle>
                            <CardDescription className="text-orange-600 dark:text-orange-400">
                              Our expert team is currently developing comprehensive content for this topic. 
                              The full article will include detailed technical explanations, diagrams, code examples, 
                              and practical implementation guides.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                                <span className="font-medium">Content Progress</span>
                                <Badge variant="secondary">75% Complete</Badge>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Expected completion: End of January 2025
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )}

                  {activeTab === 'resources' && (
                    <div className="space-y-8">
                      <div>
                        <h2>Complete Technical Guide</h2>
                        <p>
                          Download the comprehensive PDF guide that contains all the information about {topic.title.toLowerCase()}. 
                          This single document includes technical fundamentals, implementation strategies, case studies, 
                          and practical examples - everything you need in one convenient resource.
                        </p>
                      </div>

                      {/* Single PDF Resource */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Downloadable Resource
                        </h3>
                        {topicContent?.pdfResource && (
                          <PDFViewer resource={topicContent.pdfResource} />
                        )}
                      </div>

                      {/* External resources */}
                      <div>
                        <h3>External Resources</h3>
                        <div className="space-y-3">
                          {[
                            { title: "Industry Standards Documentation", url: "#", source: "IEEE" },
                            { title: "Technical Specifications", url: "#", source: "ISO" },
                            { title: "Research Papers", url: "#", source: "ResearchGate" }
                          ].map((resource, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <div className="font-medium">{resource.title}</div>
                                <div className="text-sm text-muted-foreground">{resource.source}</div>
                              </div>
                              <Button variant="ghost" size="sm" disabled>
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  
                  {/* Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Tag className="h-4 w-4" />
                        Tags
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {topic.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Share2 className="h-4 w-4" />
                        Share
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          Copy Link
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          Share on LinkedIn
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          Share on Twitter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related topics */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Topics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {topicsData
                          .filter(t => t.category === topic.category && t.slug !== topic.slug)
                          .slice(0, 3)
                          .map((relatedTopic, index) => (
                            <Link 
                              key={index}
                              href={`/${relatedTopic.category}/${relatedTopic.slug}`}
                              className="block p-3 border rounded-lg hover:bg-accent transition-colors"
                            >
                              <div className="font-medium text-sm line-clamp-2">
                                {relatedTopic.title}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {relatedTopic.readTime}
                              </div>
                            </Link>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}