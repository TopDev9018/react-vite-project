import { Bot } from 'lucide-react';

interface SwimmingRobotProps {
  delay: number;
  position: { x: number; y: number };
  direction?: 'left' | 'right';
}

function SwimmingRobot({ delay, position, direction = 'left' }: SwimmingRobotProps) {
  return (
    <div 
      className="absolute animate-float"
      style={{ 
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
    >
      <div className="relative">
        <Bot className="w-8 h-8 text-cyan-400/50 filter drop-shadow-lg" />
        
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
      <SwimmingRobot delay={0} position={{ x: 10, y: 30 }} />
      <SwimmingRobot delay={2} position={{ x: 30, y: 60 }} />
      <SwimmingRobot delay={4} position={{ x: 70, y: 40 }} />
      
      {/* Right to left swimmers */}
      <SwimmingRobot delay={1} position={{ x: 20, y: 50 }} direction="right" />
      <SwimmingRobot delay={3} position={{ x: 50, y: 20 }} direction="right" />
      <SwimmingRobot delay={5} position={{ x: 90, y: 70 }} direction="right" />
    </div>
  );
}