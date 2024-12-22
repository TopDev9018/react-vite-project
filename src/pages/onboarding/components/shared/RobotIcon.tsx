import { Bot } from 'lucide-react';

interface RobotIconProps {
  size?: number;
  className?: string;
}

export function RobotIcon({ size = 12, className = "text-cyan-400" }: RobotIconProps) {
  return (
    <div className="relative">
      <Bot className={`w-${size} h-${size} ${className} filter drop-shadow-lg`} />
      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-lg animate-pulse" />
    </div>
  );
}