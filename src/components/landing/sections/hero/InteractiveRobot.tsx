import { cn } from '@/lib/utils';
import { useState } from 'react';
import { RobotIcon } from './RobotIcon';
import { CarouselLabel } from './CarouselLabel';
import { BubbleEffect, GlowEffect, WaveEffect } from './effects';
import { RobotPosition } from './constants/robot-phrases';
import { ROBOT_LINKS } from './constants/robot-links';
import { useRobotNavigation } from './navigation/useRobotNavigation';
import { RobotTooltip } from './RobotTooltip';

interface InteractiveRobotProps {
  position: RobotPosition;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function InteractiveRobot({ 
  position, 
  delay = 0,
  size = 'md' 
}: InteractiveRobotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { handleNavigation } = useRobotNavigation();
  const link = ROBOT_LINKS[position];
  
  const labelPosition = position === 'left' ? 'right-full mr-3' :
                       position === 'right' ? 'left-full ml-3' :
                       '-bottom-8 left-1/2 -translate-x-1/2';

  return (
    <button 
      onClick={() => handleNavigation(link)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex items-center group cursor-pointer",
        "transition-transform duration-300 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-blue-950 rounded-full"
      )}
      aria-label={link.label}
    >
      <WaveEffect delay={delay} />
      <BubbleEffect />

      <div className="relative">
        <div className={cn(
          "transition-all duration-300 transform",
          "group-hover:rotate-[5deg] group-hover:-translate-y-1",
          "group-active:scale-95"
        )}>
          <RobotIcon 
            size={size} 
            delay={delay}
            isHovered={isHovered}
          />
        </div>
      </div>

      <CarouselLabel 
        position={position} 
        className={cn("absolute whitespace-nowrap", labelPosition)}
      />

      <RobotTooltip label={link.label} />
    </button>
  );
}