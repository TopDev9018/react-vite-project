import { cn } from '@/lib/utils';
import { REFERRAL_SOURCES } from '../constants/referral-sources';

interface ReferralSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function ReferralSelector({ value, onChange }: ReferralSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {REFERRAL_SOURCES.map((source) => (
        <button
          key={source.id}
          type="button"
          onClick={() => onChange(source.id)}
          className={cn(
            "flex items-center justify-between p-4 rounded-lg border text-left transition-colors w-full",
            value === source.id
              ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
              : "bg-zinc-900 border-zinc-800 text-white hover:border-zinc-700"
          )}
        >
          <div className="flex items-center gap-3">
            {source.icon}
            <span className="text-lg">{source.label}</span>
          </div>
          <div className={cn(
            "w-4 h-4 rounded-full border-2",
            value === source.id
              ? "border-emerald-500 bg-emerald-500"
              : "border-zinc-600"
          )} />
        </button>
      ))}
    </div>
  );
}