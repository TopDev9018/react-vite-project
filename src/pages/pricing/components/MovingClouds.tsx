import { cn } from '@/lib/utils';

interface CloudProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: 'sm' | 'md' | 'lg';
}

function Cloud({ className, delay = 0, duration = 20, size = 'md' }: CloudProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div 
      className={cn(
        "absolute opacity-10 blur-xl bg-white rounded-full",
        sizeClasses[size],
        "animate-cloud",
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
}

export function MovingClouds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Front layer clouds */}
      <Cloud size="lg" className="top-1/4" delay={0} duration={15} />
      <Cloud size="md" className="top-1/3 -translate-y-12" delay={5} duration={18} />
      <Cloud size="sm" className="top-1/2" delay={2} duration={12} />
      
      {/* Middle layer clouds */}
      <Cloud size="lg" className="top-1/4 translate-y-24" delay={7} duration={20} />
      <Cloud size="md" className="top-2/3" delay={3} duration={16} />
      <Cloud size="sm" className="top-1/3 translate-y-16" delay={8} duration={14} />
      
      {/* Back layer clouds */}
      <Cloud size="lg" className="top-1/2 -translate-y-8" delay={4} duration={22} />
      <Cloud size="md" className="top-3/4" delay={6} duration={19} />
      <Cloud size="sm" className="top-1/4 translate-y-32" delay={1} duration={17} />
    </div>
  );
}