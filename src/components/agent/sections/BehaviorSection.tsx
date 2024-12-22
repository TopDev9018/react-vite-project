import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight } from 'lucide-react';

interface BehaviorSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export function BehaviorSection({ onNext, onBack }: BehaviorSectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>AGENT GREETING</Label>
        <p className="text-sm text-gray-400">
          Your agent will say this message to start every conversation.
        </p>
        <Textarea 
          placeholder="e.g. Hey! How may we be of assistance today?"
          className="bg-zinc-900 border-zinc-800 h-32 resize-none focus:ring-cyan-500/20 focus:border-cyan-500/50"
        />
        <div className="text-right text-sm text-gray-400">0/250</div>
      </div>

      <div className="space-y-4">
        <Label>AGENT PROMPT</Label>
        <p className="text-sm text-gray-400">
          Give instructions to your AI about how it should behave and interact with others in conversation.
        </p>
        <Textarea 
          placeholder="e.g. You are a customer support agent. You will try to respond to the user's questions with the best answers given your knowledge. You will never make up information."
          className="bg-zinc-900 border-zinc-800 h-32 resize-none focus:ring-cyan-500/20 focus:border-cyan-500/50"
        />
        <div className="text-right text-sm text-gray-400">0/10000</div>
      </div>

      <div className="space-y-4">
        <Label>AGENT BEHAVIOR</Label>
        <RadioGroup defaultValue="professional" className="space-y-2">
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="professional" id="professional" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="professional" className="flex-1">Professional Use Case</Label>
            <span className="text-sm text-gray-400">Configured for business and professional use.</span>
          </div>
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="character" id="character" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="character" className="flex-1">Character Use Case</Label>
            <span className="text-sm text-gray-400">Configured to assume and impersonate identity.</span>
          </div>
          <div className="flex items-center space-x-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4 data-[state=checked]:border-cyan-500/50 data-[state=checked]:bg-cyan-500/10">
            <RadioGroupItem value="chatty" id="chatty" className="border-zinc-600 text-cyan-500" />
            <Label htmlFor="chatty" className="flex-1">Super Chatty</Label>
            <span className="text-sm text-gray-400">For casual laid-back conversations, like you are talking to a friend.</span>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline"
          onClick={onBack}
          className="bg-[#00A2FF] hover:bg-[#33C3FF] text-white border-transparent hover:border-[#33C3FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00A2FF]/20"
        >
          Back
        </Button>
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