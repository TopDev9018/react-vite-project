import { cn } from '@/lib/utils';

interface VolumeOptionProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function VolumeOption({ id, label, isSelected, onSelect }: VolumeOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border text-left transition-colors w-full",
        isSelected
          ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
          : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
      )}
    >
      <span className="text-lg">{label}</span>
      <div className={cn(
        "w-4 h-4 rounded-full border-2",
        isSelected
          ? "border-emerald-500 bg-emerald-500"
          : "border-zinc-600"
      )} />
    </button>
  );
}