import { Bot } from 'lucide-react';

interface BoatProps {
  delay: number;
  position: number;
}

function Boat({ delay, position }: BoatProps) {
  return (
    <div 
      className="absolute bottom-8 animate-float"
      style={{ 
        left: `${position}%`,
        animationDelay: `${delay}s`,
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

export function RobotBoats() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-32">
      <Boat delay={0} position={15} />
      <Boat delay={2} position={45} />
      <Boat delay={1} position={75} />
    </div>
  );
}