import { cn } from '@/lib/utils';
import { CALL_VOLUMES } from '../../constants/volumes';

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
            "flex items-center justify-between p-4 rounded-lg border text-left transition-all duration-300 w-full",
            value === volume.id
              ? "bg-cyan-500/10 border-cyan-500 text-cyan-500"
              : "bg-blue-950/50 border-white/10 text-white hover:bg-blue-900/50 hover:border-cyan-500/30"
          )}
        >
          <span className="text-lg">{volume.label}</span>
          <div className={cn(
            "w-4 h-4 rounded-full border-2 transition-colors",
            value === volume.id
              ? "border-cyan-500 bg-cyan-500"
              : "border-white/30"
          )} />
        </button>
      ))}
    </div>
  );
}