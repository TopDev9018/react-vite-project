import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlowEffect } from './effects/GlowEffect';

interface RobotIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  isHovered?: boolean;
}

export function RobotIcon({ 
  className, 
  size = 'md', 
  delay = 0,
  isHovered = false
}: RobotIconProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  };

  return (
    <div 
      className={cn(
        "relative transition-all duration-300",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Robot icon with blinking animation */}
      <Bot 
        className={cn(
          "relative z-10",
          "text-white filter drop-shadow-lg",
          "animate-robot-blink",
          "transition-all duration-300",
          "group-hover:text-cyan-100",
          "group-hover:filter",
          "group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]",
          sizeClasses[size]
        )}
        style={{ animationDelay: `${delay}s` }}
      />
      
      {/* Primary glow effect */}
      <GlowEffect 
        intensity="medium"
        color="cyan"
        isHovered={isHovered}
      />
      
      {/* Secondary glow effect */}
      <GlowEffect 
        intensity="low"
        color="blue"
        isHovered={isHovered}
        className="scale-150 opacity-30"
      />
    </div>
  );
}