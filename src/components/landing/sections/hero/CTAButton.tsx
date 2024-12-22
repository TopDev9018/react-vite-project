import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { RobotHand } from './RobotHand';
import { PulseEffect } from './effects/PulseEffect';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({ 
  variant = 'primary', 
  children, 
  onClick,
  className,
  fullWidth = false
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Start bounce animation
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  return (
    <div 
      className={cn(
        "relative group",
        fullWidth && "w-full",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse effect */}
      {variant === 'primary' && <PulseEffect isActive={isHovered} />}

      <Button 
        className={cn(
          "relative px-8 py-6 text-lg transition-all duration-300 group",
          fullWidth && "w-full",
          isBouncing && "animate-bounce-soft",
          variant === 'primary' 
            ? "bg-cyan-500 hover:bg-cyan-600 text-white" 
            : "border-blue-300 text-blue-300 hover:bg-blue-300/10"
        )}
        onClick={onClick}
      >
        {children}
        <ChevronRight className={cn(
          "ml-2 h-5 w-5 transition-transform duration-300",
          "group-hover:translate-x-1"
        )} />
      </Button>

      {variant === 'primary' && (
        <RobotHand isHovered={isHovered} />
      )}
    </div>
  );
}