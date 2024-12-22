import { MOCK_CONVERSATIONS } from '@/lib/mock-data';
import { ConversationItem } from './ConversationItem';

interface ConversationsListProps {
  selectedId: string | null;
  onToggle: (id: string) => void;
}

export function ConversationsList({ selectedId, onToggle }: ConversationsListProps) {
  return (
    <div className="space-y-4">
      {MOCK_CONVERSATIONS.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          isExpanded={selectedId === conversation.id}
          onToggle={() => onToggle(conversation.id)}
        />
      ))}
    </div>
  );
}