import { TopicsGrid } from './topics-grid';

interface FeaturedTopicsProps {
  category?: 'automotive' | 'green' | 'immersive';
  limit?: number;
  className?: string;
}

export function FeaturedTopics({ category, limit, className }: FeaturedTopicsProps) {
  return (
    <TopicsGrid 
      category={category}
      limit={limit}
      className={className}
    />
  );
}