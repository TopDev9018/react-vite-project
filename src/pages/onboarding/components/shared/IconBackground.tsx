import { LucideIcon } from 'lucide-react';

interface IconBackgroundProps {
  Icon: LucideIcon;
  className?: string;
}

export function IconBackground({ Icon, className = "text-blue-400/30" }: IconBackgroundProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg">
      <Icon className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-16 ${className}`} />
    </div>
  );
}