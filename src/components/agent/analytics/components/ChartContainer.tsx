import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ChartContainer({ title, children, className }: ChartContainerProps) {
  return (
    <div className={cn(
      "bg-zinc-900 border border-zinc-800 rounded-xl p-6",
      "hover:border-cyan-500/50 transition-colors",
      "shadow-lg shadow-black/10",
      className
    )}>
      <h3 className="text-sm font-medium text-gray-400 mb-6">{title}</h3>
      <div className="h-[300px]">
        {children}
      </div>
    </div>
  );
}