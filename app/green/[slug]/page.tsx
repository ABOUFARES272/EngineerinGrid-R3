import { notFound } from 'next/navigation';
import { topicsData, getTopicBySlug } from '@/lib/data';
import { TopicContent } from '@/components/topic-content';

interface TopicPageProps {
  params: {
    slug: string;
  };
}

// Required for static export
export async function generateStaticParams() {
  const greenTopics = topicsData.filter(topic => topic.category === 'green');
  
  return greenTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug, 'green');

  if (!topic) {
    notFound();
  }

  return <TopicContent topic={topic} />;
}