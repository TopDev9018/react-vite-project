```tsx
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function AvatarUploader() {
  return (
    <div className="space-y-4">
      <Label>AVATAR</Label>
      <Button 
        variant="outline" 
        className="w-full border-zinc-800 hover:bg-cyan-500/10 hover:text-cyan-500 hover:border-cyan-500/50"
      >
        Upload Image
      </Button>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={`avatar-${i}`}
            className="aspect-square rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
```