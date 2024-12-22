import { FooterRobots } from './FooterRobots';

export function FooterBackground() {
  return (
    <div className="absolute inset-0">
      {/* Ocean background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609074489874-043094c78175?q=80&w=2400&auto=format')] bg-cover bg-center opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 to-blue-900/95" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Animated robots */}
      <FooterRobots />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
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
    </div>
  );
}