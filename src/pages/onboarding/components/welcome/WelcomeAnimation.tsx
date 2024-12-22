import { Bot, Waves } from 'lucide-react';

export function WelcomeAnimation() {
  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      {/* Ocean waves */}
      <div className="absolute inset-x-0 bottom-0 h-20">
        <div className="absolute inset-0 animate-wave opacity-30">
          <Waves className="w-full h-full text-blue-400" />
        </div>
        <div className="absolute inset-0 animate-wave animation-delay-200 opacity-20">
          <Waves className="w-full h-full text-cyan-400" />
        </div>
      </div>

      {/* Robot on a boat */}
      <div className="absolute inset-0 animate-float">
        <div className="relative h-full">
          {/* Boat body */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transform -rotate-3">
            {/* Boat reflection */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm" />
          </div>
          
          {/* Robot captain */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <Bot className="w-16 h-16 text-white filter drop-shadow-lg" />
              {/* Robot glow effect */}
              <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-lg animate-pulse" />
            </div>
          </div>

          {/* Water splash effects */}
          <div className="absolute bottom-8 -right-2 space-y-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-blue-200 rounded-full animate-spray"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  transform: `translateX(${i * 4}px)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}