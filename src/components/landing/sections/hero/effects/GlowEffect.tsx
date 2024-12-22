import { cn } from '@/lib/utils';

interface GlowEffectProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'blue';
  isHovered?: boolean;
}

export function GlowEffect({ 
  className,
  intensity = 'medium',
  color = 'cyan',
  isHovered = false
}: GlowEffectProps) {
  const intensityClasses = {
    low: 'opacity-10',
    medium: 'opacity-20',
    high: 'opacity-30'
  };

  const colorClasses = {
    cyan: 'from-cyan-500 via-cyan-400 to-cyan-500',
    blue: 'from-blue-500 via-blue-400 to-blue-500'
  };

  return (
    <div 
      className={cn(
        "absolute inset-0 -z-10",
        "animate-glow-pulse transition-all duration-300",
        intensityClasses[intensity],
        isHovered && "scale-125",
        className
      )}
    >
      {/* Inner glow */}
      <div className={cn(
        "absolute inset-0 blur-md",
        "bg-gradient-to-r",
        colorClasses[color]
      )} />
      
      {/* Outer glow */}
      <div className={cn(
        "absolute inset-0 blur-xl",
        "bg-gradient-to-r",
        colorClasses[color],
        "opacity-50"
      )} />
    </div>
  );
}