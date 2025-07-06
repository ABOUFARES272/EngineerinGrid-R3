"use client"

import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Mail, 
  Calendar, 
  Users, 
  TrendingUp, 
  Bell, 
  ArrowRight, 
  Check,
  Zap,
  BookOpen,
  Download,
  Star,
  Clock,
  Globe,
  Target
} from 'lucide-react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
    setInterests([]);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest]);
    } else {
      setInterests(interests.filter(i => i !== interest));
    }
  };

  const newsletterFeatures = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Weekly Technical Insights",
      description: "Curated engineering content, breakthrough technologies, and industry analysis delivered every Tuesday"
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Exclusive Resources",
      description: "Subscriber-only access to premium guides, calculators, and engineering tools"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Industry Updates",
      description: "Latest developments in automotive, green energy, and immersive technology sectors"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Career Insights",
      description: "Engineering career advice, job market trends, and professional development tips"
    }
  ];

  const interestOptions = [
    { id: 'automotive', label: 'Automotive Engineering', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' },
    { id: 'green', label: 'Green Energy Solutions', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' },
    { id: 'immersive', label: 'Immersive Technology', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' },
    { id: 'career', label: 'Career Development', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' },
    { id: 'tools', label: 'Engineering Tools', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300' },
    { id: 'trends', label: 'Industry Trends', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300' }
  ];

  const newsletterStats = [
    { label: "Launch Target", value: "Feb 2025", icon: Calendar },
    { label: "Content Categories", value: "6", icon: TrendingUp },
    { label: "Weekly Issues", value: "52/year", icon: Mail },
    { label: "Early Subscribers", value: "1,200+", icon: Users }
  ];

  const sampleContent = [
    {
      week: "Week 1",
      title: "The Future of EV Battery Chemistry",
      topics: ["Solid-state batteries", "Charging infrastructure", "Cost analysis"],
      type: "Deep Dive"
    },
    {
      week: "Week 2", 
      title: "AR in Manufacturing: Real-World Applications",
      topics: ["Assembly guidance", "Quality control", "Training systems"],
      type: "Case Study"
    },
    {
      week: "Week 3",
      title: "Smart Grid Integration Challenges",
      topics: ["Renewable integration", "Grid stability", "IoT sensors"],
      type: "Technical Analysis"
    },
    {
      week: "Week 4",
      title: "Engineering Career Spotlight",
      topics: ["Industry interviews", "Skill development", "Market trends"],
      type: "Career Focus"
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
            backgroundImage: "url('https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg')",
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
              Coming February 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Engineering Newsletter
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                Your Weekly Dose of Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of engineers who will receive our weekly newsletter featuring the latest 
              technical insights, industry trends, and exclusive resources. Curated content that matters 
              to your engineering career.
            </p>
            
            {/* Subscriber count preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold text-primary">1,200+</span>
                <span className="text-sm">engineers already signed up</span>
              </div>
              <p className="text-xs text-muted-foreground">Join the waitlist for early access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {newsletterStats.map((stat, index) => (
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

      {/* Newsletter Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What You'll Receive"
            description="Premium content designed specifically for engineering professionals"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {newsletterFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="mt-1">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content Preview */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Sample Content Calendar"
            description="A preview of the type of content you can expect each week"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sampleContent.map((content, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{content.week}</Badge>
                    <Badge className="text-xs">{content.type}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {content.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {!isSubscribed ? (
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl md:text-3xl">Join the Waitlist</CardTitle>
                  <CardDescription className="text-lg">
                    Be among the first to receive our premium engineering newsletter when it launches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="text-center text-lg py-3"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 text-center">What interests you most? (Optional)</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {interestOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={option.id}
                              checked={interests.includes(option.id)}
                              onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                              disabled={isSubmitting}
                            />
                            <label
                              htmlFor={option.id}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full py-3 text-lg">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>Premium content</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="h-4 w-4" />
                        <span>Weekly delivery</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bell className="h-4 w-4" />
                        <span>Unsubscribe anytime</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="text-center py-12">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
                    You're on the list!
                  </h3>
                  <p className="text-green-700 dark:text-green-400 mb-6">
                    Thanks for joining our newsletter waitlist. We'll send you an exclusive preview 
                    before the official launch in February 2025.
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
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Engineers Love Our Approach"
            description="Content that respects your time and expertise"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-l-4 border-blue-600">
              <CardHeader>
                <CardTitle className="text-lg">No Fluff, Just Value</CardTitle>
                <CardDescription>
                  Every newsletter is packed with actionable insights, technical depth, 
                  and practical knowledge you can apply immediately.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Expert Curation</CardTitle>
                <CardDescription>
                  Content is carefully selected and reviewed by industry professionals 
                  to ensure relevance and accuracy.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-purple-600">
              <CardHeader>
                <CardTitle className="text-lg">Career Focused</CardTitle>
                <CardDescription>
                  Beyond technical content, we provide insights that help advance 
                  your engineering career and professional development.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}