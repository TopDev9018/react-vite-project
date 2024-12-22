import { cn } from '@/lib/utils';
import { StatsIcon } from './StatsIcon';
import { StatsValue } from './StatsValue';
import { StatsLabel } from './StatsLabel';
import { GlowEffect } from './GlowEffect';

interface StatsCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatsCard({ value, label, index }: StatsCardProps) {
  return (
    <div 
      className={cn(
        "group relative",
        "transition-all duration-500",
        "hover:transform hover:scale-105"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: `translateY(${index * 10}px)` 
      }}
    >
      {/* Card background with glass effect */}
      <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center p-8">
        <StatsIcon value={value} />
        <StatsValue value={value} />
        <StatsLabel label={label} />
      </div>

      {/* Glow effects */}
      <GlowEffect />
    </div>
  );
}