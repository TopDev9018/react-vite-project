import { useTextCarousel } from './hooks/useTextCarousel';
import { RobotPosition } from './constants/robot-phrases';
import { LabelBadge } from './LabelBadge';
import { cn } from '@/lib/utils';

interface CarouselLabelProps {
  position: RobotPosition;
  className?: string;
}

export function CarouselLabel({ position, className }: CarouselLabelProps) {
  const { currentPhrase, totalPhrases, currentIndex } = useTextCarousel(position);

  return (
    <div className={cn("relative", className)}>
      <LabelBadge>
        <div className="relative">
          <span className="inline-block animate-fade-in">
            {currentPhrase}
          </span>
          
          {/* Progress dots */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {[...Array(totalPhrases)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 h-1 rounded-full transition-all duration-300",
                  i === currentIndex 
                    ? "bg-cyan-400" 
                    : "bg-cyan-400/30"
                )}
              />
            ))}
          </div>
        </div>
      </LabelBadge>
    </div>
  );
}