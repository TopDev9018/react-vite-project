import { cn } from '@/lib/utils';
import { REFERRAL_SOURCES } from '../../constants/referral-sources';

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
          onClick={() => onChange(source.id)}
          className={cn(
            "flex items-center justify-between p-4 rounded-lg border text-left transition-all duration-300 w-full",
            value === source.id
              ? "bg-cyan-500/10 border-cyan-500 text-cyan-500"
              : "bg-blue-950/50 border-white/10 text-white hover:bg-blue-900/50 hover:border-cyan-500/30"
          )}
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              "text-gray-400",
              value === source.id && "text-cyan-500"
            )}>
              {source.icon}
            </div>
            <span className="text-lg">{source.label}</span>
          </div>
          <div className={cn(
            "w-4 h-4 rounded-full border-2 transition-colors",
            value === source.id
              ? "border-cyan-500 bg-cyan-500"
              : "border-white/30"
          )} />
        </button>
      ))}
    </div>
  );
}