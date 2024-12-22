import { cn } from '@/lib/utils';
import { useState } from 'react';

interface RobotHandProps {
  className?: string;
  isHovered?: boolean;
}

export function RobotHand({ className, isHovered = false }: RobotHandProps) {
  const [isTapping, setIsTapping] = useState(false);

  // Start tapping animation when hovered
  if (isHovered && !isTapping) {
    setIsTapping(true);
    setTimeout(() => setIsTapping(false), 500); // Reset after animation
  }

  return (
    <div className={cn(
      "absolute -left-16 top-1/2 -translate-y-1/2",
      "transition-all duration-300 transform origin-right",
      isTapping && "animate-tap",
      className
    )}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "text-cyan-400",
          "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]",
          "transition-transform duration-300",
          isHovered && "scale-110"
        )}
      >
        {/* Robot hand SVG paths */}
        <path
          d="M20 16V8.5C20 7.67157 19.3284 7 18.5 7V7C17.6716 7 17 7.67157 17 8.5V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 16V4.5C14 3.67157 13.3284 3 12.5 3V3C11.6716 3 11 3.67157 11 4.5V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 16V8.5C8 7.67157 7.32843 7 6.5 7V7C5.67157 7 5 7.67157 5 8.5V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 16.5C4 18.9853 6.01472 21 8.5 21H16.5C18.9853 21 21 18.9853 21 16.5V14.5C21 14.2239 20.7761 14 20.5 14H4.5C4.22386 14 4 14.2239 4 14.5V16.5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      
      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 bg-cyan-500/20 blur-xl",
        "transition-all duration-300",
        isHovered ? "opacity-100 scale-125" : "opacity-0 scale-100"
      )} />
    </div>
  );
}