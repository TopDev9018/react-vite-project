import { Bot } from 'lucide-react';

interface WalkingRobotProps {
  delay: number;
  position: number;
  direction: 'left' | 'right';
}

function WalkingRobot({ delay, position, direction }: WalkingRobotProps) {
  return (
    <div 
      className="absolute bottom-0 animate-float"
      style={{ 
        [direction]: `${position}%`,
        animationDelay: `${delay}s`,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
    >
      <div className="relative">
        {/* Robot */}
        <Bot className="w-10 h-10 text-cyan-400/70 filter drop-shadow-lg" />
        
        {/* Walking effect - legs */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 space-x-1">
          <div className="absolute w-1 h-3 bg-cyan-400/50 rounded animate-[walk_1s_infinite]" 
               style={{ 
                 left: '-2px',
                 animationDelay: '0s',
                 transformOrigin: 'top'
               }} 
          />
          <div className="absolute w-1 h-3 bg-cyan-400/50 rounded animate-[walk_1s_infinite]" 
               style={{ 
                 right: '-2px',
                 animationDelay: '0.5s',
                 transformOrigin: 'top'
               }} 
          />
        </div>
      </div>
    </div>
  );
}

export function WalkingRobots() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-16 overflow-hidden">
      {/* Left to right walkers */}
      <WalkingRobot delay={0} position={10} direction="left" />
      <WalkingRobot delay={2} position={40} direction="left" />
      <WalkingRobot delay={4} position={70} direction="left" />
      
      {/* Right to left walkers */}
      <WalkingRobot delay={1} position={20} direction="right" />
      <WalkingRobot delay={3} position={50} direction="right" />
      <WalkingRobot delay={5} position={80} direction="right" />
    </div>
  );
}