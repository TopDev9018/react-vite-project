import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface UseCaseOptionProps {
  id: string;
  label: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function UseCaseOption({ 
  label, 
  description, 
  isSelected, 
  onSelect 
}: UseCaseOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg border text-left transition-colors w-full",
        isSelected
          ? "bg-cyan-500/10 border-cyan-500 text-cyan-500"
          : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
      )}
    >
      <div className={cn(
        "w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center flex-shrink-0",
        isSelected
          ? "border-cyan-500 bg-cyan-500"
          : "border-zinc-600"
      )}>
        {isSelected && <Check className="w-3 h-3 text-black" />}
      </div>
      <div>
        <div className="font-medium">{label}</div>
        <div className={cn(
          "text-sm mt-1",
          isSelected ? "text-cyan-500/80" : "text-gray-400"
        )}>
          {description}
        </div>
      </div>
    </button>
  );
}