```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface PrivacyOption {
  id: string;
  label: string;
  description: string;
}

const PRIVACY_OPTIONS: PrivacyOption[] = [
  {
    id: "public",
    label: "Public",
    description: "Anyone can talk to and clone this agent."
  },
  {
    id: "unlisted",
    label: "Unlisted",
    description: "Only people with the link can talk to this agent."
  },
  {
    id: "private",
    label: "Private",
    description: "Only you can access this agent."
  }
];

interface PrivacySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function PrivacySelector({ value, onChange }: PrivacySelectorProps) {
  return (
    <div className="space-y-4">
      <Label>PRIVACY</Label>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
        {PRIVACY_OPTIONS.map((option) => (
          <div
            key={option.id}
            className={cn(
              "flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4",
              value === option.id && "border-cyan-500/50 bg-cyan-500/10"
            )}
          >
            <RadioGroupItem 
              value={option.id} 
              id={option.id}
              className="border-zinc-600 text-cyan-500 data-[state=checked]:border-cyan-500 data-[state=checked]:bg-cyan-500"
            />
            <div className="flex-1">
              <Label htmlFor={option.id} className={cn(
                "flex-1",
                value === option.id && "text-cyan-500"
              )}>{option.label}</Label>
              <span className={cn(
                "text-sm text-gray-400 block mt-1",
                value === option.id && "text-cyan-500/80"
              )}>{option.description}</span>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
```