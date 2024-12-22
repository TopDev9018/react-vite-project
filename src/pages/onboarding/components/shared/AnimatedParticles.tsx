interface ParticlePosition {
  id: string;
  left: number;
  top: number;
  value?: number | string;
}

interface AnimatedParticlesProps {
  particles: ParticlePosition[];
  className?: string;
  renderParticle?: (particle: ParticlePosition) => React.ReactNode;
}

export function AnimatedParticles({ 
  particles, 
  className = "bg-cyan-300/30",
  renderParticle 
}: AnimatedParticlesProps) {
  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute animate-float ${className}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${parseInt(particle.id.split('-')[1]) * 0.5}s`
          }}
        >
          {renderParticle ? renderParticle(particle) : (
            <div className="w-2 h-2 rounded-full" />
          )}
        </div>
      ))}
    </>
  );
}