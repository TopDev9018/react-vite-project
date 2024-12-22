import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
  className?: string;
}

export function AnalyticsCard({ title, value, subtitle, icon, className }: AnalyticsCardProps) {
  return (
    <div className={cn(
      "bg-zinc-900 border border-zinc-800 rounded-xl p-6",
      "hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors",
      "shadow-lg shadow-black/10",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>
        <div className="p-2 bg-zinc-800 rounded-lg shadow-inner">
          {icon}
        </div>
      </div>
    </div>
  );
}