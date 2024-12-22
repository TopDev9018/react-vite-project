import { cn } from '@/lib/utils';
import { RobotIcon } from './RobotIcon';
import { CarouselLabel } from './CarouselLabel';
import { WaveEffect } from './effects/WaveEffect';
import { BubbleEffect } from './effects/BubbleEffect';
import { RobotPosition } from './constants/robot-phrases';

interface FloatingRobotProps {
  position: RobotPosition;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function FloatingRobot({ 
  position, 
  delay = 0,
  size = 'md' 
}: FloatingRobotProps) {
  const labelPosition = position === 'left' ? 'right-full mr-3' :
                       position === 'right' ? 'left-full ml-3' :
                       '-bottom-8 left-1/2 -translate-x-1/2';

  return (
    <div 
      className="relative flex items-center animate-robot-float group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Water effects */}
      <WaveEffect delay={delay} />
      <BubbleEffect />

      {/* Robot Icon with hover effects */}
      <div className="relative transition-transform duration-300 group-hover:scale-110">
        <RobotIcon size={size} delay={delay} />
        {/* Enhanced glow effect on hover */}
        <div className="absolute inset-0 bg-cyan-500/0 blur-xl transition-all duration-300 group-hover:bg-cyan-500/30" />
      </div>

      {/* Carousel Label */}
      <CarouselLabel 
        position={position} 
        className={cn("absolute whitespace-nowrap", labelPosition)}
      />
    </div>
  );
}