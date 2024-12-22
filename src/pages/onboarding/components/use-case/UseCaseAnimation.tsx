import { CalendarDays } from 'lucide-react';
import { RobotIcon } from '../shared/RobotIcon';
import { IconBackground } from '../shared/IconBackground';
import { AnimatedParticles } from '../shared/AnimatedParticles';
import { generateRandomPositions } from '../../utils/animation';

export function UseCaseAnimation() {
  const particlePositions = generateRandomPositions(3);

  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <IconBackground Icon={CalendarDays} />

      <div className="absolute inset-0 animate-float">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <RobotIcon />
          </div>

          <AnimatedParticles particles={particlePositions} />
        </div>
      </div>
    </div>
  );
}