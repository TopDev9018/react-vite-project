import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface RobotProps {
  delay: number;
  position: number;
  direction?: 'left' | 'right';
  onHover?: () => void;
}

function Robot({ delay, position, direction = 'left', onHover }: RobotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(robotRef, { threshold: 0.5 });

  const handleHover = () => {
    setIsHovered(true);
    onHover?.();
  };

  return (
    <div 
      ref={robotRef}
      className={cn(
        "absolute bottom-8 cursor-pointer",
        "transition-all duration-500",
        "opacity-0 translate-y-8",
        isInView && "opacity-100 translate-y-0",
        "group"
      )}
      style={{ 
        [direction === 'left' ? 'left' : 'right']: `${position}%`,
        transitionDelay: `${delay}s`,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined
      }}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Robot body */}
      <div className="relative">
        {/* Holographic platform */}
        <div className={cn(
          "absolute -bottom-4 left-1/2 -translate-x-1/2",
          "w-16 h-2 rounded-full blur-md",
          "bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0",
          "animate-pulse transition-all duration-300",
          isHovered && "via-cyan-400/50 scale-110"
        )} />
        
        {/* Robot icon */}
        <div className={cn(
          "relative transition-all duration-300",
          isHovered && "transform -translate-y-2 rotate-[5deg]"
        )}>
          <Bot className={cn(
            "w-8 h-8 text-cyan-400 filter drop-shadow-lg",
            "transition-all duration-300",
            isHovered && "text-cyan-300 scale-110"
          )} />
          
          {/* Eyes glow effect */}
          <div className={cn(
            "absolute inset-[30%] blur-sm",
            "transition-all duration-300",
            "bg-cyan-400/0",
            isHovered && "bg-cyan-400/50"
          )} />
          
          {/* Hover glow effect */}
          <div className={cn(
            "absolute inset-0 blur-xl",
            "transition-all duration-300",
            "bg-cyan-500/0",
            isHovered && "bg-cyan-500/30"
          )} />
        </div>

        {/* Floating particles */}
        <div className="absolute -bottom-2 left-0 right-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-1 h-1 rounded-full",
                "bg-cyan-200/30 animate-float",
                isHovered && "bg-cyan-300/50"
              )}
              style={{ 
                left: `${25 + i * 25}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FooterRobots() {
  // Robot beep sound
  const playBeep = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden">
      {/* Left to right robots */}
      <Robot delay={0} position={15} onHover={playBeep} />
      <Robot delay={0.2} position={45} onHover={playBeep} />
      <Robot delay={0.4} position={75} onHover={playBeep} />
      
      {/* Right to left robots */}
      <Robot delay={0.1} position={25} direction="right" onHover={playBeep} />
      <Robot delay={0.3} position={55} direction="right" onHover={playBeep} />
      <Robot delay={0.5} position={85} direction="right" onHover={playBeep} />
    </div>
  );
}