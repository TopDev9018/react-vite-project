import { Cube, MessageCircle, Clock, FileText, ChevronRight } from '@/components/shared/icons';
import { Button } from "@/components/ui/button";

interface CreateAgentCardProps {
  onClick: () => void;
}

export function CreateAgentCard({ onClick }: CreateAgentCardProps) {
  return (
    <div 
      className="group rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-cyan-500/50 transition-colors cursor-pointer shadow-lg shadow-black/10"
      onClick={onClick}
    >
      <div className="mb-6">
        <Cube className="w-12 h-12 text-cyan-500" />
      </div>
      
      <h2 className="text-xl font-semibold mb-2 text-cyan-500">Create New Agent</h2>
      <p className="text-sm text-gray-400 mb-6">
        Add prompts, tasks, objectives, actions, custom business knowledge and more 
        to your agent. Automate your business. Streamline workflows.
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MessageCircle className="w-4 h-4" />
          — conversations
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          — minutes spoken
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <FileText className="w-4 h-4" />
          — knowledge resources added
        </div>
      </div>

      <Button 
        className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors rounded-lg shadow-lg"
      >
        Create Agent
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}