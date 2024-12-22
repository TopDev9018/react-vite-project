import { cn } from '@/lib/utils';

export function BackgroundEffects() {
  return (
    <>
      {/* Ocean background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2400&auto=format')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/90 to-blue-900/90" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300/30 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s linear infinite`,
              animationDelay: `-${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Light beam effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent transform -skew-x-12" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </>
  );
}