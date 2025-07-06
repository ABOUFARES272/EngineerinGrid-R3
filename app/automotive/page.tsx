import { FeaturedTopics } from '@/components/featured-topics';
import { SectionHeading } from '@/components/section-heading';

export default function AutomotivePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/70 z-10" />
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6 text-white">
            Automotive Engineering
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Explore the latest in automotive technology, from OEM innovations and electrical architectures 
            to advanced driver assistance systems and battery platforms.
          </p>
        </div>
      </section>
      
      {/* Topics section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Automotive Topics"
            description="Dive into comprehensive resources on automotive engineering and technology."
            align="left"
          />
          
          <FeaturedTopics category="automotive" className="mt-12" />
        </div>
      </section>
    </div>
  );
}