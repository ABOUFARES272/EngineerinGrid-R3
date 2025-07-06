import { FeaturedTopics } from '@/components/featured-topics';
import { SectionHeading } from '@/components/section-heading';

export default function GreenEnergyPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-green-700/70 z-10" />
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6 text-white">
            Green Energy Solutions
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Discover the future of sustainable energy technology, from solar power systems and grid integration
            to advanced battery storage and energy-efficient smart homes.
          </p>
        </div>
      </section>
      
      {/* Topics section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Green Energy Topics"
            description="Explore resources on renewable energy and sustainable technology solutions."
            align="left"
          />
          
          <FeaturedTopics category="green" className="mt-12" />
        </div>
      </section>
    </div>
  );
}