import { Bot } from 'lucide-react';

interface BoatProps {
  delay: number;
  position: number;
  direction?: 'left' | 'right';
}

function Boat({ delay, position, direction = 'left' }: BoatProps) {
  return (
    <div 
      className="absolute bottom-8 animate-float"
      style={{ 
        [direction === 'left' ? 'left' : 'right']: `${position}%`,
        animationDelay: `${delay}s`,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
    >
      {/* Boat body */}
      <div className="relative">
        <div className="w-16 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transform -rotate-2" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-50" />
        
        {/* Robot captain */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <Bot className="w-8 h-8 text-white filter drop-shadow-lg" />
        </div>

        {/* Water splash effects */}
        <div className="absolute -right-2 top-2 space-y-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-blue-200 rounded-full animate-spray"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SeaBoats() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden">
      {/* Left to right boats */}
      <Boat delay={0} position={15} />
      <Boat delay={2} position={45} />
      <Boat delay={4} position={75} />
      
      {/* Right to left boats */}
      <Boat delay={1} position={25} direction="right" />
      <Boat delay={3} position={55} direction="right" />
      <Boat delay={5} position={85} direction="right" />
    </div>
  );
}