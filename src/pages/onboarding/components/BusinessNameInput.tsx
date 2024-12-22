import { Input } from '@/components/ui/input';

interface BusinessNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function BusinessNameInput({ value, onChange }: BusinessNameInputProps) {
  return (
    <div className="space-y-2">
      <Input
        placeholder="Enter your business name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 bg-blue-950/50 border-white/10 text-lg placeholder:text-blue-200/30 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-colors"
        autoFocus
      />
    </div>
  );
}