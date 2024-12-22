import { cn } from '@/lib/utils';

interface WaveEffectProps {
  className?: string;
  delay?: number;
}

export function WaveEffect({ className, delay = 0 }: WaveEffectProps) {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
      <svg
        className={cn("w-full opacity-30", className)}
        viewBox="0 0 120 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.4)" />
            <stop offset="50%" stopColor="rgba(34,211,238,0.2)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
          </linearGradient>
        </defs>
        <path
          className="animate-wave"
          style={{ animationDelay: `${delay}s` }}
          fill="url(#waveGradient)"
          d="M 0,10 C 30,12 40,8 60,10 80,12 90,8 120,10 V 20 H 0"
        />
        <path
          className="animate-wave"
          style={{ animationDelay: `${delay + 0.3}s` }}
          fill="url(#waveGradient)"
          fillOpacity="0.5"
          d="M 0,10 C 30,8 40,12 60,10 80,8 90,12 120,10 V 20 H 0"
        />
      </svg>
    </div>
  );
}