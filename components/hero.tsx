import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeLogo } from '@/components/theme-logo';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.2)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/70 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center">
            <ThemeLogo 
              width={400} 
              height={40} 
              className="transition-transform hover:scale-105" 
              priority 
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading mb-6">
            Plug into the Grid
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
              of Innovation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Welcome to EngineerinGrid — your knowledge hub exploring the intersection of automotive innovation, green energy solutions, and immersive technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#categories">
                Explore Topics <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/about">
                About us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract tech background elements */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
    </section>
  );
}