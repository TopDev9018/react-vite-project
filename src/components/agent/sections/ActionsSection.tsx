import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight, Zap } from 'lucide-react';

interface ActionsSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export function ActionsSection({ onNext, onBack }: ActionsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          <Label>ACTIONS</Label>
        </div>
        <p className="text-sm text-gray-400">
          Select the action capabilities you'd like your agent to have access to.
        </p>

        <div className="rounded-lg bg-zinc-900 border border-zinc-800 p-8 text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
            <Zap className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">You don't have actions created yet</h3>
            <p className="text-sm text-gray-400">
              Actions are functions that instruct agents what other tools and data sources to interact with. You can create one in the 'Actions' tab.
            </p>
          </div>
          <div className="pt-4">
            <img 
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=400&h=300"
              alt="Actions preview"
              className="rounded-lg border border-zinc-800"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline"
          onClick={onBack}
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