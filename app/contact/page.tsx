import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Clock, Send, Phone, Lightbulb, Users } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Contact Form",
      description: "Send us a message using the form below",
      detail: "We'll respond within 24 hours",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      description: "We typically respond within",
      detail: "2-4 business hours",
      action: null
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "Join our engineering community",
      detail: "Connect with fellow engineers",
      action: null
    }
  ];

  const reasons = [
    {
      icon: <Send className="h-5 w-5" />,
      title: "Content Suggestions",
      description: "Have an idea for a topic you'd like us to cover?"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Technical Questions",
      description: "Need clarification on any of our engineering content?"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Partnership Inquiries",
      description: "Interested in collaborating or contributing content?"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "General Feedback",
      description: "Share your thoughts on how we can improve EngineerinGrid"
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
            backgroundImage: "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg')",
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
              Get in Touch
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                We'd Love to Hear From You
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our content? Want to suggest a topic? Or just want to say hello? 
              We're here to help and always excited to connect with fellow engineers and tech enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How to Reach Us"
            description="We're committed to providing excellent support to our engineering community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary">{method.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you as soon as possible"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Reasons to Contact */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-6">
                    What can we help you with?
                  </h3>
                  <div className="space-y-6">
                    {reasons.map((reason, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{reason.title}</h4>
                          <p className="text-muted-foreground text-sm">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    We value your time and aim to respond to all inquiries within 2-4 business hours. 
                    For urgent technical questions, we often respond much faster!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              description="Quick answers to common questions"
            />
            
            <div className="mt-12 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How often do you publish new content?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We publish new articles weekly, covering the latest developments in automotive engineering, 
                    green energy solutions, and immersive technologies. Subscribe to our newsletter to stay updated!
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I suggest topics for future articles?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We love hearing from our community. Use the contact form above to suggest topics 
                    you'd like us to cover. We review all suggestions and often feature reader-requested content.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you accept guest contributions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We welcome contributions from industry experts and experienced engineers. 
                    Contact us with your proposed topic and a brief outline of your expertise in the field.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is all content really free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our content is completely free! We believe high-quality engineering knowledge 
                    should be accessible to everyone. No paywalls, no subscriptions - just premium content at no cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}