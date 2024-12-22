```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <div className="space-y-4">
      <Label>NAME</Label>
      <Input 
        placeholder="Give your AI a name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 bg-zinc-900 border-zinc-800 text-lg focus:ring-cyan-500/20 focus:border-cyan-500/50"
      />
    </div>
  );
}
```