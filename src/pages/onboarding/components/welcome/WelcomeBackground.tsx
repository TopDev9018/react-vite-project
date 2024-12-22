import { Bot, Waves } from 'lucide-react';

export function WelcomeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-1000" />

      {/* Ocean waves */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <div className="absolute inset-0 animate-wave opacity-30">
          <Waves className="w-full h-full text-blue-400" />
        </div>
        <div className="absolute inset-0 animate-wave animation-delay-200 opacity-20">
          <Waves className="w-full h-full text-cyan-400" />
        </div>
      </div>

      {/* Swimming robots */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              transform: i % 2 === 0 ? 'scaleX(-1)' : undefined
            }}
          >
            <Bot className="w-8 h-8 text-cyan-400/30" />
            {/* Swimming motion bubbles */}
            <div className="absolute -bottom-2 space-y-1">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="w-1 h-1 bg-cyan-200/30 rounded-full animate-spray"
                  style={{ 
                    animationDelay: `${j * 0.2}s`,
                    left: `${j * 4}px`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}