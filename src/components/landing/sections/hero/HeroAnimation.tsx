import { InteractiveRobot } from './InteractiveRobot';
import { ParticleEffects } from './ParticleEffects';

export function HeroAnimation() {
  return (
    <div className="relative h-32">
      <div className="flex items-center justify-center gap-20 max-w-3xl mx-auto">
        {/* Left Robot */}
        <InteractiveRobot
          position="left"
          delay={0}
          size="md"
        />

        {/* Middle Robot */}
        <InteractiveRobot
          position="middle"
          delay={0.3}
          size="lg"
        />

        {/* Right Robot */}
        <InteractiveRobot
          position="right"
          delay={0.6}
          size="md"
        />
      </div>

      {/* Particle effects */}
      <ParticleEffects count={8} />
    </div>
  );
}