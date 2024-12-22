import { ParticlesBackground } from '@/components/shared/ParticlesBackground';

export function CTABackground() {
  return (
    <>
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Ocean background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2400&auto=format')] bg-cover bg-center opacity-20" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/95 to-blue-950/95" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      {/* Particles effect */}
      <ParticlesBackground />
    </>
  );
}