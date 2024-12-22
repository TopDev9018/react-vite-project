import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ReferralOptionProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

export function ReferralOption({ 
  label, 
  icon, 
  isSelected, 
  onSelect 
}: ReferralOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border text-left transition-colors w-full",
        isSelected
          ? "bg-cyan-500/10 border-cyan-500 text-cyan-500"
          : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "text-gray-400",
          isSelected && "text-cyan-500"
        )}>
          {icon}
        </div>
        <span className="text-lg">{label}</span>
      </div>
      <div className={cn(
        "w-4 h-4 rounded-full border-2",
        isSelected
          ? "border-cyan-500 bg-cyan-500"
          : "border-zinc-600"
      )} />
    </button>
  );
}