import { cn } from '@/lib/utils';

interface AnimatedPhoneProps {
  className?: string;
}

export function AnimatedPhone({ className }: AnimatedPhoneProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Phone icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-white"
      >
        <path 
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-phone-outline"
        />
        
        {/* Ripple effects */}
        {[...Array(3)].map((_, i) => (
          <circle
            key={i}
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={cn(
              "absolute opacity-0",
              "animate-phone-ripple",
              i === 1 && "animation-delay-200",
              i === 2 && "animation-delay-400"
            )}
          />
        ))}
      </svg>
    </div>
  );
}