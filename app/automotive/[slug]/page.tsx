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
  const automotiveTopics = topicsData.filter(topic => topic.category === 'automotive');
  
  return automotiveTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug, 'automotive');

  if (!topic) {
    notFound();
  }

  return <TopicContent topic={topic} />;
}