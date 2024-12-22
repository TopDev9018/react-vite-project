import { Bot, Building2 } from 'lucide-react';

export function BusinessNameAnimation() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Building silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg">
        <Building2 className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-16 text-blue-400/30" />
      </div>

      {/* Robot with clipboard */}
      <div className="absolute inset-0 animate-float">
        <div className="relative">
          {/* Clipboard */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-24">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-white/10" />
            
            {/* Clipboard lines */}
            <div className="absolute top-8 left-4 right-4 space-y-2">
              <div className="h-1 bg-blue-300/20 rounded-full" />
              <div className="h-1 bg-blue-300/20 rounded-full w-3/4" />
              <div className="h-1 bg-blue-300/20 rounded-full w-1/2" />
            </div>
          </div>

          {/* Robot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <Bot className="w-12 h-12 text-cyan-400 filter drop-shadow-lg" />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/30 rounded-full animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}