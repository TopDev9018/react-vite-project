import { ParticlesBackground } from '@/components/shared/ParticlesBackground';

export function HeroBackground() {
  return (
    <>
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/80 to-blue-800/80" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Particles effect */}
      <ParticlesBackground />

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-3xl animate-pulse delay-1000" />
    </>
  );
}