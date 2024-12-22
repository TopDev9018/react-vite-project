import { cn } from '@/lib/utils';
import { CALL_VOLUMES } from '../constants/volumes';

interface CallVolumeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function CallVolumeSelector({ value, onChange }: CallVolumeSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {CALL_VOLUMES.map((volume) => (
        <button
          key={volume.id}
          type="button"
          onClick={() => onChange(volume.id)}
          className={cn(
            "flex items-center justify-between p-4 rounded-lg border text-left transition-colors w-full",
            value === volume.id
              ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
              : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
          )}
        >
          <span className="text-lg">{volume.label}</span>
          <div className={cn(
            "w-4 h-4 rounded-full border-2",
            value === volume.id
              ? "border-emerald-500 bg-emerald-500"
              : "border-zinc-600"
          )} />
        </button>
      ))}
    </div>
  );
}