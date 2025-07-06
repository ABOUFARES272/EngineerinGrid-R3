import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold overflow-hidden"
        style={{
          width: size,
          height: size,
        }}
      >
        <BrainCircuit size={size * 0.6} />
      </div>
      <div
        className="absolute top-0 left-0 bg-[#A4FF00] rounded-br-lg"
        style={{
          width: size / 3,
          height: size / 3,
        }}
      />
      <div
        className="absolute bottom-0 right-0 bg-white/20 rounded-tl-lg"
        style={{
          width: size / 4,
          height: size / 4,
        }}
      />
    </div>
  );
}