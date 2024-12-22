import { cn } from '@/lib/utils';

interface StatsLabelProps {
  label: string;
}

export function StatsLabel({ label }: StatsLabelProps) {
  return (
    <div className={cn(
      "text-sm text-blue-200",
      "group-hover:text-blue-100",
      "transition-colors duration-500"
    )}>
      {label}
    </div>
  );
}