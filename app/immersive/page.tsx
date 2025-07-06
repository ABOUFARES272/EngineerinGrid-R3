import { FeaturedTopics } from '@/components/featured-topics';
import { SectionHeading } from '@/components/section-heading';

export default function ImmersiveTechPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-indigo-800/70 z-10" />
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6 text-white">
            Immersive Technology
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Explore the cutting edge of augmented and virtual reality, from automotive displays
            and virtual prototyping to mixed reality engineering and the industrial metaverse.
          </p>
        </div>
      </section>
      
      {/* Topics section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Immersive Tech Topics"
            description="Dive into resources on AR, VR, mixed reality, and metaverse technologies in engineering."
            align="left"
          />
          
          <FeaturedTopics category="immersive" className="mt-12" />
        </div>
      </section>
    </div>
  );
}