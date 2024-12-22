import { cn } from '@/lib/utils';

interface StatsCardProps {
  value: string;
  label: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="group relative">
      {/* Card background with glass effect */}
      <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/50 transition-colors" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center p-6">
        <div className="text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
          {value}
        </div>
        <div className="mt-1 text-sm text-blue-200 group-hover:text-blue-100 transition-colors">
          {label}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>
    </div>
  );
}