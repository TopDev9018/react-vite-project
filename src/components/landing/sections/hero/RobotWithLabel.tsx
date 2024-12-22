import { Bot } from 'lucide-react';
import { LabelBadge } from './LabelBadge';

interface RobotWithLabelProps {
  label: string;
  position: 'left' | 'right' | 'bottom';
}

export function RobotWithLabel({ label, position }: RobotWithLabelProps) {
  return (
    <div className="relative flex items-center">
      {/* Label positioning based on position prop */}
      {position === 'left' && (
        <div className="absolute right-full mr-3 whitespace-nowrap">
          <LabelBadge>{label}</LabelBadge>
        </div>
      )}

      {/* Robot Icon */}
      <div className="relative">
        <Bot className="w-14 h-14 text-white filter drop-shadow-lg" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-lg animate-pulse" />
        
        {/* Bottom Label */}
        {position === 'bottom' && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <LabelBadge>{label}</LabelBadge>
          </div>
        )}
      </div>

      {/* Right Label */}
      {position === 'right' && (
        <div className="absolute left-full ml-3 whitespace-nowrap">
          <LabelBadge>{label}</LabelBadge>
        </div>
      )}
    </div>
  );
}