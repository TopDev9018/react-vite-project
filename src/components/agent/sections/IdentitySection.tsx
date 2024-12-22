import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight } from 'lucide-react';

interface IdentitySectionProps {
  onNext: () => void;
}

export function IdentitySection({ onNext }: IdentitySectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>NAME</Label>
        <Input 
          placeholder="Give your AI a name..."
          className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <Label>VOICE</Label>
            <Select defaultValue="Aaliyah">
              <SelectTrigger className="bg-zinc-900 border-zinc-800 mt-2 focus:ring-cyan-500/20 focus:border-cyan-500/50">
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
            <Select defaultValue="1.0x">
              <SelectTrigger className="bg-zinc-900 border-zinc-800 mt-2 focus:ring-cyan-500/20 focus:border-cyan-500/50">
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
          className="w-full bg-[#00A2FF] hover:bg-[#33C3FF] text-white border-transparent hover:border-[#33C3FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00A2FF]/20"
        >
          Create a voice clone
        </Button>
      </div>

      <div className="space-y-4">
        <Label>AVATAR</Label>
        <Button 
          variant="outline" 
          className="w-full bg-[#00A2FF] hover:bg-[#33C3FF] text-white border-transparent hover:border-[#33C3FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00A2FF]/20"
        >
          Upload Image
        </Button>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>PRIVACY</Label>
        <RadioGroup defaultValue="public" className="space-y-2">
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="public" id="public" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="public" className="flex-1">Public</Label>
            <span className="text-sm text-gray-400">Anyone can talk to and clone this agent.</span>
          </div>
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="unlisted" id="unlisted" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="unlisted" className="flex-1">Unlisted</Label>
            <span className="text-sm text-gray-400">Only people with the link can talk to this agent.</span>
          </div>
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="private" id="private" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="private" className="flex-1">Private</Label>
            <span className="text-sm text-gray-400">Only you can access this agent.</span>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          className="bg-cyan-500 hover:bg-cyan-600"
          onClick={onNext}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}