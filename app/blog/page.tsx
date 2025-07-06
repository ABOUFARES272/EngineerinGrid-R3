"use client"

import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  TrendingUp, 
  Bell, 
  ArrowRight, 
  Check,
  Lightbulb,
  Zap,
  Target,
  Clock
} from 'lucide-react';

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  const upcomingFeatures = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Technical Deep Dives",
      description: "In-depth analysis of cutting-edge engineering solutions",
      progress: 85,
      eta: "Late January 2025"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Industry Insights",
      description: "Expert perspectives on automotive, green energy, and immersive tech trends",
      progress: 70,
      eta: "Early February 2025"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Case Studies",
      description: "Real-world engineering challenges and innovative solutions",
      progress: 60,
      eta: "Mid February 2025"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Guest Contributors",
      description: "Industry leaders sharing their expertise and experiences",
      progress: 45,
      eta: "March 2025"
    }
  ];

  const blogStats = [
    { label: "Articles Planned", value: "50+", icon: BookOpen },
    { label: "Expert Contributors", value: "12", icon: Users },
    { label: "Categories", value: "3", icon: TrendingUp },
    { label: "Launch Target", value: "Q1 2025", icon: Calendar }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg')",
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
              Engineering Blog
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                Where Innovation Meets Insight
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're crafting a premium blog experience featuring technical deep dives, industry insights, 
              and expert perspectives on the future of engineering. Get ready for content that goes beyond the surface.
            </p>
            
            {/* Progress indicator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Development Progress</span>
                <span className="text-sm text-primary font-bold">75%</span>
              </div>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">Expected launch: Late January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {blogStats.map((stat, index) => (
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

      {/* Features section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What's Coming"
            description="A sneak peek at the premium content we're preparing for you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Progress</span>
                      <span className="text-primary font-bold">{feature.progress}%</span>
                    </div>
                    <Progress value={feature.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>ETA: {feature.eta}</span>
                      <Badge variant="outline" className="text-xs">
                        In Development
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {!isSubscribed ? (
              <>
                <Bell className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-6">
                  Be the First to Know
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our exclusive early access list and get notified the moment our blog goes live. 
                  Plus, receive a special welcome package with our best engineering resources.
                </p>
                
                <form onSubmit={handleNotifyMe} className="space-y-4">
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
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Notify Me <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </>
            ) : (
              <div className="bg-primary/10 rounded-lg p-8">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">You're on the list!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for joining our early access list. We'll send you an exclusive preview 
                  as soon as our blog is ready to launch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" onClick={() => setIsSubscribed(false)}>
                    Subscribe Another Email
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

      {/* Preview section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Preview: What to Expect"
            description="A glimpse into the type of content we're preparing"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-l-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">Technical Excellence</CardTitle>
                <CardDescription>
                  Deep technical content written by industry experts, covering the latest 
                  innovations in automotive, green energy, and immersive technologies.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Practical Insights</CardTitle>
                <CardDescription>
                  Real-world applications, case studies, and actionable insights you can 
                  apply in your engineering projects and career development.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-lg">Future-Focused</CardTitle>
                <CardDescription>
                  Forward-looking analysis of emerging trends, breakthrough technologies, 
                  and the future direction of engineering innovation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}