import { CategoryCard } from './category-card';
import { SectionHeading } from './section-heading';

export function CategoriesSection() {
  const categories = [
    {
      title: "Automotive",
      description: "Explore OEM innovations, EE architectures, ADAS systems, and battery platforms.",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg",
      link: "/automotive",
      category: "automotive" as const,
    },
    {
      title: "Green Energy",
      description: "Discover solar power, EV grid integration, battery technologies, and smart homes.",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
      link: "/green",
      category: "green" as const,
    },
    {
      title: "Immersive Tech",
      description: "Dive into AR displays, virtual prototyping, mixed reality, and industrial metaverse.",
      image: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg",
      link: "/immersive",
      category: "immersive" as const,
    },
  ];

  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Knowledge Categories"
          description="Explore our three main technical domains and discover in-depth resources, guides, and reference materials."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
              category={category.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}