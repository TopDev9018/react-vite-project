import { Bot } from 'lucide-react';

interface SwimmingBotProps {
  delay: number;
  position: { x: number; y: number };
  direction?: 'left' | 'right';
}

function SwimmingBot({ delay, position, direction = 'left' }: SwimmingBotProps) {
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
      <Bot className="w-8 h-8 text-cyan-400/30 filter drop-shadow-lg" />
      
      {/* Swimming bubbles */}
      <div className="absolute -bottom-2 space-y-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-cyan-200/20 rounded-full animate-spray"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              left: `${i * 4}px`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function AuthBackground() {
  return (
    <>
      {/* Ocean gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800" />
      
      {/* Grid pattern */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated gradient orbs */}
      <div className="fixed -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse" />
      <div className="fixed -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-1000" />

      {/* Swimming robots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <SwimmingBot delay={0} position={{ x: 10, y: 30 }} />
        <SwimmingBot delay={2} position={{ x: 30, y: 60 }} />
        <SwimmingBot delay={4} position={{ x: 70, y: 40 }} />
        <SwimmingBot delay={1} position={{ x: 20, y: 50 }} direction="right" />
        <SwimmingBot delay={3} position={{ x: 50, y: 20 }} direction="right" />
        <SwimmingBot delay={5} position={{ x: 90, y: 70 }} direction="right" />
      </div>
    </>
  );
}