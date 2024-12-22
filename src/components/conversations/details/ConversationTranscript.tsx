import { ScrollArea } from '@/components/ui/scroll-area';

interface ConversationTranscriptProps {
  conversationId: string;
}

export function ConversationTranscript({ conversationId }: ConversationTranscriptProps) {
  return (
    <ScrollArea className="h-[400px] rounded-lg border border-zinc-800 bg-zinc-950 p-4 mt-4">
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-20 text-sm text-gray-400">00:{i.toString().padStart(2, '0')}</div>
            <div className="flex-1">
              <div className="font-medium mb-1">
                {i % 2 === 0 ? 'Agent' : 'Customer'}
              </div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}