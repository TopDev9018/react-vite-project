import { Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsIconProps {
  value: string;
}

export function StatsIcon({ value }: StatsIconProps) {
  const Icon = value.includes('99.9%') ? CheckCircle :
              value.includes('24/7') ? Clock :
              TrendingUp;

  return (
    <div className="mb-4">
      <div className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl",
        "bg-gradient-to-br from-cyan-400/10 to-blue-600/10",
        "border border-white/10 group-hover:border-cyan-500/50",
        "transition-colors duration-500"
      )}>
        <Icon className={cn(
          "h-6 w-6 text-cyan-400 group-hover:text-cyan-300",
          "transition-all duration-500",
          "animate-pulse"
        )} />
      </div>
    </div>
  );
}