import { Hero } from '@/components/hero';
import { CategoriesSection } from '@/components/categories-section';
import { FeaturedTopics } from '@/components/featured-topics';
import { Newsletter } from '@/components/newsletter';
import { SectionHeading } from '@/components/section-heading';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <CategoriesSection />
      
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Topics"
            description="Explore our most popular resources across all engineering categories."
          />
          
          <FeaturedTopics limit={6} className="mt-12" />
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
}