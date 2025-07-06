import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Mail, Cookie, FileText, Calendar, ExternalLink, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy First",
      description: "We collect only what's necessary and protect what we collect"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency",
      description: "Clear information about what data we collect and how we use it"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security",
      description: "Your data is protected with industry-standard security measures"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "No Spam",
      description: "We never sell your email or send unwanted communications"
    }
  ];

  const dataTypes = [
    {
      type: "Email Address",
      purpose: "Newsletter subscriptions and contact form responses",
      retention: "Until you unsubscribe or request deletion",
      icon: <Mail className="h-5 w-5" />
    },
    {
      type: "Analytics Data",
      purpose: "Understanding site usage and improving user experience",
      retention: "26 months (Google Analytics default)",
      icon: <FileText className="h-5 w-5" />
    },
    {
      type: "Contact Information",
      purpose: "Responding to inquiries and support requests",
      retention: "2 years or until resolved",
      icon: <Shield className="h-5 w-5" />
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
            backgroundImage: "url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')",
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
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Your Privacy Matters
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                We Keep It Simple & Secure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              At EngineeringGrid, we believe in transparency. This policy explains how we handle 
              your information when you explore our engineering content and resources.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Effective Date: January 15, 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Privacy Principles"
            description="The core values that guide how we handle your information"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {principle.icon}
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Privacy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-8 mb-12">
                <p className="text-lg leading-relaxed mb-0">
                  At <strong>EngineeringGrid</strong>, we care about your privacy. This page explains how we collect 
                  and use your information when you interact with our content about automotive technologies, 
                  green energy innovations, and immersive tech.
                </p>
              </div>

              {/* Section 1: What We Collect */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <FileText className="h-6 w-6" />
                    1. What We Collect
                  </CardTitle>
                  <CardDescription>
                    We collect only limited information to provide and improve our services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {dataTypes.map((data, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        {data.icon}
                        <h4 className="font-semibold">{data.type}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        <strong>Purpose:</strong> {data.purpose}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Retention:</strong> {data.retention}
                      </p>
                    </div>
                  ))}
                  
                  <div className="bg-muted/50 rounded-lg p-4 mt-6">
                    <h4 className="font-semibold mb-2">Analytics Data Details:</h4>
                    <p className="text-sm text-muted-foreground">
                      Anonymous data such as your browser type, time spent on the site, pages visited, 
                      and general location (country/region only), using tools like Google Analytics. 
                      This helps us understand what content matters to our audience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: How We Use It */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Eye className="h-6 w-6" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>To improve your experience by understanding what content matters to our audience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>To send you updates when we publish new articles, resources, or insights — only if you've subscribed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>To respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>To analyze site performance and optimize our content delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 3: Data Protection */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Lock className="h-6 w-6" />
                    3. We Don't Sell or Share Your Data
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                    <p className="text-green-800 dark:text-green-300 font-medium mb-2">
                      Our Commitment to You:
                    </p>
                    <ul className="space-y-2 text-green-700 dark:text-green-400">
                      <li>• Your email or data is <strong>never sold, rented, or shared</strong> with any third parties</li>
                      <li>• We don't use your data for advertising purposes</li>
                      <li>• We don't create user profiles for marketing</li>
                      <li>• Your information stays with us and our trusted service providers only</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Cookies */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Cookie className="h-6 w-6" />
                    4. Cookies & Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use cookies to track site usage and enhance your experience. Here's what you should know:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Essential Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Required for basic site functionality, remembering your preferences, and security.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors use our site to improve content and performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Your Control:</strong> You can turn off cookies in your browser settings. 
                      Note that disabling cookies may affect some site functionality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Your Rights */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="h-6 w-6" />
                    5. Your Rights & Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">You Have the Right To:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Access your personal data</li>
                        <li>• Correct inaccurate information</li>
                        <li>• Delete your data</li>
                        <li>• Unsubscribe from communications</li>
                        <li>• Export your data</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">How to Exercise Your Rights:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Email unsubscribe links in newsletters</li>
                        <li>• Contact us through our contact form</li>
                        <li>• Clear your browser cookies</li>
                        <li>• Adjust your browser privacy settings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6: Contact */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Mail className="h-6 w-6" />
                    6. Questions About Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    If you have questions about your data or this policy, we're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Badge variant="default" className="cursor-pointer hover:bg-primary/90 px-4 py-2">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Us
                      </Badge>
                    </Link>
                    <Badge variant="outline" className="px-4 py-2">
                      <Clock className="h-4 w-4 mr-2" />
                      Response within 48 hours
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Updates Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Calendar className="h-6 w-6" />
                    7. Policy Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We may update this privacy policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-300 text-sm">
                      <strong>We'll notify you:</strong> Any significant changes will be communicated through 
                      our website banner or newsletter (if you're subscribed). The "Effective Date" at the 
                      top of this page shows when the policy was last updated.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Third-Party Services */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <ExternalLink className="h-6 w-6" />
                    8. Third-Party Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We use trusted third-party services to provide our website functionality:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Google Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        For website analytics and performance monitoring. 
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:underline ml-1">
                          View Google's Privacy Policy
                        </a>
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Formspree</h4>
                      <p className="text-sm text-muted-foreground">
                        For contact form processing and email delivery. 
                        <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:underline ml-1">
                          View Formspree's Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-secondary/20 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">EngineeringGrid Privacy Policy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EngineeringGrid - All rights reserved. 
              Your privacy is protected by this policy and our commitment to data security.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <span>Last Updated: January 15, 2025</span>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}