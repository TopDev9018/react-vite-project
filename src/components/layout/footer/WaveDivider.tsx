import { cn } from '@/lib/utils';

interface WaveDividerProps {
  className?: string;
}

export function WaveDivider({ className }: WaveDividerProps) {
  return (
    <div className={cn(
      "absolute -top-24 left-0 right-0 h-24 overflow-hidden",
      className
    )}>
      {/* Wave SVG */}
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 22L48 24.7C96 27.3 192 32.7 288 32.7C384 32.7 480 27.3 576 27.3C672 27.3 768 32.7 864 29.8C960 27 1056 16 1152 13.5C1248 11 1344 16 1392 18.5L1440 21V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
          className="fill-blue-950"
        />
        <path
          d="M0 27L48 29.7C96 32.3 192 37.7 288 37.7C384 37.7 480 32.3 576 32.3C672 32.3 768 37.7 864 34.8C960 32 1056 21 1152 18.5C1248 16 1344 21 1392 23.5L1440 26V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V27Z"
          className="fill-blue-950/80"
        />
      </svg>

      {/* Glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
}