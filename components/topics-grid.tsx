import { TopicCard } from './topic-card';
import { topicsData, getTopicsByCategory, getFeaturedTopics } from '@/lib/data';

interface TopicsGridProps {
  category?: 'automotive' | 'green' | 'immersive';
  limit?: number;
  featuredOnly?: boolean;
  className?: string;
  topics?: any[]; // Allow passing custom topics array
}

export function TopicsGrid({ category, limit, featuredOnly = false, className, topics: customTopics }: TopicsGridProps) {
  let topics = customTopics || topicsData;
  
  if (!customTopics) {
    if (featuredOnly) {
      topics = getFeaturedTopics();
    } else if (category) {
      topics = getTopicsByCategory(category);
    }
  }
  
  if (limit) {
    topics = topics.slice(0, limit);
  }

  // Dynamic grid classes based on number of topics
  const getGridClasses = (topicCount: number) => {
    if (topicCount === 1) {
      return "grid grid-cols-1 max-w-md mx-auto gap-6";
    } else if (topicCount === 2) {
      return "grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6";
    } else if (topicCount === 3) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6";
    } else if (topicCount === 4) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";
    } else if (topicCount === 5) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6";
    } else {
      // For 6+ topics, use responsive grid that adapts well
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6";
    }
  };

  return (
    <div className={className}>
      <div className={getGridClasses(topics.length)}>
        {topics.map((topic) => (
          <TopicCard
            key={`${topic.category}-${topic.slug}`}
            title={topic.title}
            description={topic.description}
            category={topic.category}
            slug={topic.slug}
            tags={topic.tags}
            readTime={topic.readTime}
            difficulty={topic.difficulty}
            featured={topic.featured}
          />
        ))}
      </div>
    </div>
  );
}