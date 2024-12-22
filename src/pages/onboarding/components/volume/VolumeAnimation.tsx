import { BarChart } from 'lucide-react';
import { RobotIcon } from '../shared/RobotIcon';
import { IconBackground } from '../shared/IconBackground';
import { AnimatedParticles } from '../shared/AnimatedParticles';
import { generateRandomPositions } from '../../utils/animation';

export function VolumeAnimation() {
  const numberPositions = generateRandomPositions(5, {
    generateValue: () => Math.floor(Math.random() * 100)
  });

  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <IconBackground Icon={BarChart} />

      <div className="absolute inset-0 animate-float">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <RobotIcon />
          </div>

          <AnimatedParticles
            particles={numberPositions}
            className="text-cyan-300/30 font-mono text-sm"
            renderParticle={(particle) => <span>{particle.value}</span>}
          />
        </div>
      </div>
    </div>
  );
}