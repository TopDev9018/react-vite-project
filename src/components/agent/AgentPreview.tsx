import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AgentPreviewProps {
  onClose?: () => void;
}

export function AgentPreview({ onClose }: AgentPreviewProps) {
  return (
    <div className="h-full bg-zinc-900 p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">AGENT PREVIEW</div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="aspect-square rounded-lg bg-zinc-800 flex flex-col items-center justify-center">
        <Logo className="w-12 h-12 text-gray-400 mb-4" />
        <div className="text-lg font-medium">listening...</div>
        <div className="text-3xl font-bold mt-4">0:10</div>
      </div>
    </div>
  );
}