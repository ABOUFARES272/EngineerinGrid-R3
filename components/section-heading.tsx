import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({ 
  title, 
  description, 
  align = 'center', 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'space-y-4',
      {
        'text-left': align === 'left',
        'text-center': align === 'center',
        'text-right': align === 'right',
      },
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}