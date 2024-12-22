import { Bot } from 'lucide-react';

interface SwimmingRobotProps {
  delay: number;
  position: number;
  direction: 'left' | 'right';
}

function SwimmingRobot({ delay, position, direction }: SwimmingRobotProps) {
  return (
    <div 
      className="absolute animate-float"
      style={{ 
        [direction]: `${position}%`,
        top: `${30 + Math.random() * 40}%`,
        animationDelay: `${delay}s`,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
    >
      {/* Robot swimmer */}
      <div className="relative">
        <Bot className="w-8 h-8 text-blue-300/50 filter drop-shadow-lg" />
        
        {/* Swimming motion bubbles */}
        <div className="absolute -bottom-2 space-y-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-cyan-200/30 rounded-full animate-spray"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                left: `${i * 4}px`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SwimmingRobots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left to right swimmers */}
      <SwimmingRobot delay={0} position={10} direction="left" />
      <SwimmingRobot delay={2} position={30} direction="left" />
      <SwimmingRobot delay={4} position={70} direction="left" />
      
      {/* Right to left swimmers */}
      <SwimmingRobot delay={1} position={20} direction="right" />
      <SwimmingRobot delay={3} position={50} direction="right" />
      <SwimmingRobot delay={5} position={90} direction="right" />
    </div>
  );
}