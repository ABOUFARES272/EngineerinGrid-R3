import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, BookOpen, Zap, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Premium Content, Zero Cost",
      description: "Every article delivers $10+ worth of professional insights, technical guides, and industry knowledge - completely free.",
      highlight: "$10+ Value Per Post"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Industry Coverage",
      description: "Comprehensive resources across the most in-demand engineering sectors: Automotive, Green Energy, and Immersive Technologies.",
      highlight: "3 Major Industries"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Engineer-First Design",
      description: "Built by engineers, for engineers. Clean interface, technical accuracy, and practical applications you can implement immediately.",
      highlight: "User-Friendly Interface"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Curated content that addresses real-world challenges faced by engineering professionals and students worldwide.",
      highlight: "Real-World Focus"
    }
  ];

  const stats = [
    { number: "100+", label: "Technical Articles" },
    { number: "$1000+", label: "Value Delivered Free" },
    { number: "3", label: "Core Industries" },
    { number: "24/7", label: "Access Available" }
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
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About EngineerinGrid
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Empowering Engineers with
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                Premium Knowledge, Free Access
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that high-quality engineering knowledge should be accessible to everyone. 
              That's why we deliver premium content worth $10+ per article, completely free, 
              with a focus on practical applications and real-world solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Mission"
              description="Democratizing access to premium engineering knowledge across the world's most innovative industries."
            />
            
            <div className="mt-12 prose dark:prose-invert max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-8 mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>EngineerinGrid</strong> was born from a simple observation: the best engineering insights 
                  are often locked behind expensive paywalls or scattered across countless resources. 
                  We're changing that by creating a centralized hub where engineers, students, and innovators 
                  can access premium-quality content without barriers.
                </p>
                <p className="text-lg leading-relaxed">
                  Every piece of content we publish is crafted to deliver real value - the kind of insights 
                  and technical depth you'd typically pay $10 or more to access elsewhere. Our commitment 
                  is to maintain this standard while keeping everything completely free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Makes Us Different"
            description="Four core principles that drive everything we do at EngineerinGrid."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {feature.highlight}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="By the Numbers"
            description="The impact we're making in the engineering community."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industries We Cover"
            description="Deep-dive content across the most dynamic sectors in engineering."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Automotive Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  OEM innovations, EE architectures, ADAS systems, battery platforms, 
                  and the future of mobility technology.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Green Energy Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Solar power systems, EV grid integration, battery storage technologies, 
                  and sustainable smart home innovations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <CardTitle className="text-xl">Immersive Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AR automotive displays, virtual prototyping, mixed reality engineering, 
                  and industrial metaverse applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our Commitment to You"
              description="The promises we make to every engineer who visits EngineerinGrid."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Always Free, Always Valuable</h3>
                  <p className="text-muted-foreground">
                    No paywalls, no subscriptions, no hidden costs. Premium content that delivers 
                    real value, accessible to everyone.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Technically Accurate</h3>
                  <p className="text-muted-foreground">
                    Every article is researched, fact-checked, and reviewed by industry professionals 
                    to ensure accuracy and relevance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Practical Applications</h3>
                  <p className="text-muted-foreground">
                    We focus on knowledge you can actually use - whether you're a student, 
                    professional engineer, or industry leader.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Continuously Updated</h3>
                  <p className="text-muted-foreground">
                    Technology evolves rapidly, and so do we. Our content stays current with 
                    the latest industry developments and innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-6">
              Join the EngineerinGrid Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to access premium engineering knowledge without the premium price tag? 
              Start exploring our comprehensive resources today and discover why thousands 
              of engineers trust EngineerinGrid for their learning and development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#categories" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Start Exploring
              </a>
              <a 
                href="/newsletter" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}