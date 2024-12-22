import { Bot } from 'lucide-react';

interface FloatingBotProps {
  delay: number;
  position: { x: number; y: number };
  size?: number;
}

function FloatingBot({ delay, position, size = 6 }: FloatingBotProps) {
  return (
    <div 
      className="absolute animate-float"
      style={{ 
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`
      }}
    >
      <Bot className={`w-${size} h-${size} text-cyan-500/10`} />
    </div>
  );
}

export function OnboardingBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-1000" />

      {/* Floating robots */}
      <FloatingBot delay={0} position={{ x: 10, y: 20 }} />
      <FloatingBot delay={2} position={{ x: 85, y: 35 }} />
      <FloatingBot delay={4} position={{ x: 15, y: 75 }} />
      <FloatingBot delay={1} position={{ x: 75, y: 15 }} size={8} />
      <FloatingBot delay={3} position={{ x: 25, y: 45 }} size={8} />
      <FloatingBot delay={5} position={{ x: 90, y: 80 }} size={8} />
    </div>
  );
}