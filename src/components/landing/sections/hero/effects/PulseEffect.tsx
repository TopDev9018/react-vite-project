import { cn } from '@/lib/utils';

interface PulseEffectProps {
  isActive?: boolean;
  className?: string;
}

export function PulseEffect({ isActive = false, className }: PulseEffectProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 transition-opacity duration-300",
        isActive ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {/* Inner pulse ring */}
      <div className={cn(
        "absolute inset-[-2px] rounded-lg",
        "bg-gradient-to-r from-cyan-500/30 via-cyan-400/30 to-cyan-500/30",
        "animate-[pulse_2s_ease-in-out_infinite]"
      )} />

      {/* Middle pulse ring */}
      <div className={cn(
        "absolute inset-[-4px] rounded-lg",
        "bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-cyan-500/20",
        "animate-[pulse_2s_ease-in-out_infinite]",
        "animation-delay-200"
      )} />

      {/* Outer pulse ring */}
      <div className={cn(
        "absolute inset-[-6px] rounded-lg",
        "bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-cyan-500/10",
        "animate-[pulse_2s_ease-in-out_infinite]",
        "animation-delay-500"
      )} />
    </div>
  );
}