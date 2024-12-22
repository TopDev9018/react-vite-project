```tsx
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VoiceSelectorProps {
  voice: string;
  speed: string;
  onVoiceChange: (value: string) => void;
  onSpeedChange: (value: string) => void;
}

export function VoiceSelector({
  voice,
  speed,
  onVoiceChange,
  onSpeedChange
}: VoiceSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <Label>VOICE</Label>
          <Select value={voice} onValueChange={onVoiceChange}>
            <SelectTrigger className="h-12 bg-zinc-900 border-zinc-800 mt-2 focus:ring-cyan-500/20 focus:border-cyan-500/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Aaliyah">Aaliyah</SelectItem>
              <SelectItem value="Emma">Emma</SelectItem>
              <SelectItem value="James">James</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label>SPEED</Label>
          <Select value={speed} onValueChange={onSpeedChange}>
            <SelectTrigger className="h-12 bg-zinc-900 border-zinc-800 mt-2 focus:ring-cyan-500/20 focus:border-cyan-500/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.8x">0.8x</SelectItem>
              <SelectItem value="1.0x">1.0x</SelectItem>
              <SelectItem value="1.2x">1.2x</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button 
        variant="outline" 
        className="w-full border-zinc-800 hover:bg-cyan-500/10 hover:text-cyan-500 hover:border-cyan-500/50"
      >
        Create a voice clone
      </Button>
    </div>
  );
}
```