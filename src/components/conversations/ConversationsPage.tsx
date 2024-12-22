import { useState } from 'react';
import { ConversationsList } from './ConversationsList';

export function ConversationsPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setSelectedConversation(selectedConversation === id ? null : id);
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Conversations</h1>
        
        <div className="space-y-4">
          <div className="hidden lg:grid grid-cols-4 gap-4 text-sm font-medium text-gray-400 px-4">
            <div>Agent In Use</div>
            <div>Date</div>
            <div>Duration</div>
            <div>Caller ID</div>
          </div>

          <ConversationsList 
            selectedId={selectedConversation}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
}