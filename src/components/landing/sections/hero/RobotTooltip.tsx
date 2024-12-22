import { cn } from '@/lib/utils';

interface RobotTooltipProps {
  label: string;
  className?: string;
}

export function RobotTooltip({ label, className }: RobotTooltipProps) {
  return (
    <div className={cn(
      "absolute -bottom-12 left-1/2 -translate-x-1/2",
      "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
      "text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full",
      "border border-cyan-500/20 backdrop-blur-sm",
      className
    )}>
      {label}
    </div>
  );
}