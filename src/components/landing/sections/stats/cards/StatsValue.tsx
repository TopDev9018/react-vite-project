import { cn } from '@/lib/utils';

interface StatsValueProps {
  value: string;
}

export function StatsValue({ value }: StatsValueProps) {
  return (
    <div className={cn(
      "text-3xl font-bold text-cyan-300",
      "group-hover:text-cyan-200",
      "transition-colors duration-500",
      "mb-2"
    )}>
      {value}
    </div>
  );
}