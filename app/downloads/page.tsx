"use client"

import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Calculator, 
  Wrench, 
  Zap,
  Bell, 
  ArrowRight, 
  Check,
  Lock,
  Gift,
  Star,
  Clock,
  Users
} from 'lucide-react';

export default function DownloadsPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  const upcomingDownloads = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Engineering Calculators",
      description: "Interactive tools for automotive, green energy, and immersive tech calculations",
      type: "Interactive Tools",
      progress: 80,
      eta: "February 2025",
      premium: false
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Technical Guides Collection",
      description: "Comprehensive PDF guides covering industry standards and best practices",
      type: "PDF Library",
      progress: 65,
      eta: "March 2025",
      premium: true
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Design Templates",
      description: "CAD templates, schematics, and design patterns for rapid prototyping",
      type: "Design Assets",
      progress: 45,
      eta: "April 2025",
      premium: true
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Reference Sheets",
      description: "Quick reference cards for formulas, standards, and troubleshooting",
      type: "Quick Reference",
      progress: 90,
      eta: "Late January 2025",
      premium: false
    }
  ];

  const downloadStats = [
    { label: "Resources Planned", value: "100+", icon: Download },
    { label: "Categories", value: "8", icon: FileText },
    { label: "Free Resources", value: "60%", icon: Gift },
    { label: "Early Access Users", value: "500+", icon: Users }
  ];

  const categories = [
    {
      name: "Automotive Engineering",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      count: "25+ resources"
    },
    {
      name: "Green Energy Solutions", 
      color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      count: "30+ resources"
    },
    {
      name: "Immersive Technology",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300", 
      count: "20+ resources"
    },
    {
      name: "General Engineering",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
      count: "25+ resources"
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')",
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
            <Badge variant="outline" className="mb-4 text-primary border-primary animate-pulse">
              <Clock className="h-4 w-4 mr-2" />
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Engineering Downloads
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                Tools, Guides & Resources
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're building a comprehensive library of engineering resources including calculators, 
              technical guides, design templates, and reference materials. All crafted by experts, 
              many available for free.
            </p>
            
            {/* Progress indicator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Resource Development</span>
                <span className="text-sm text-primary font-bold">70%</span>
              </div>
              <Progress value={70} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">First release: February 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {downloadStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Downloads */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What's Being Prepared"
            description="A preview of the engineering resources we're developing for you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {upcomingDownloads.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 relative">
                {item.premium && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-yellow-900">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}
                <CardHeader className={item.premium ? "pr-20" : ""}>
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="mt-1">{item.description}</CardDescription>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Development Progress</span>
                      <span className="text-primary font-bold">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Expected: {item.eta}</span>
                      <div className="flex items-center gap-1">
                        {item.premium ? (
                          <Lock className="h-3 w-3" />
                        ) : (
                          <Gift className="h-3 w-3" />
                        )}
                        <span>{item.premium ? 'Premium' : 'Free'}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Resource Categories"
            description="Organized collections covering all major engineering domains"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <Badge className={category.color}>
                    {category.count}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {!isSubscribed ? (
              <>
                <Download className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-6">
                  Get Early Access
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our early access program and be among the first to download our premium 
                  engineering resources. Plus, get exclusive access to beta tools and special discounts.
                </p>
                
                <form onSubmit={handleEarlyAccess} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                      disabled={isSubmitting}
                    />
                    <Button type="submit" disabled={isSubmitting} className="sm:px-8">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Early Access <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Gift className="h-4 w-4" />
                      <span>Free resources included</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4" />
                      <span>Beta access</span>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="bg-primary/10 rounded-lg p-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Welcome to Early Access!</h3>
                <p className="text-muted-foreground mb-6">
                  You're now part of our exclusive early access program. We'll notify you as soon as 
                  our first batch of engineering resources is ready for download.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" onClick={() => setIsSubscribed(false)}>
                    Add Another Email
                  </Button>
                  <Button asChild>
                    <a href="/">
                      Explore Current Content
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Our Downloads Will Be Different"
            description="Premium quality resources designed by engineers, for engineers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-l-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">Expert Crafted</CardTitle>
                <CardDescription>
                  Every resource is created and reviewed by industry professionals with years 
                  of hands-on experience in their respective fields.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Practical Focus</CardTitle>
                <CardDescription>
                  Tools and guides designed for real-world application, not just theoretical 
                  knowledge. Ready to use in your projects immediately.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-lg">Always Updated</CardTitle>
                <CardDescription>
                  Resources are regularly updated to reflect the latest industry standards, 
                  technologies, and best practices in engineering.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}