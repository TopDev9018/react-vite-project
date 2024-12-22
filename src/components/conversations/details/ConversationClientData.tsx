interface ConversationClientDataProps {
  conversationId: string;
}

export function ConversationClientData({ conversationId }: ConversationClientDataProps) {
  return (
    <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Name</label>
          <div className="font-medium">John Doe</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Email</label>
          <div className="font-medium">john.doe@example.com</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Phone</label>
          <div className="font-medium">+1 (555) 123-4567</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Location</label>
          <div className="font-medium">New York, USA</div>
        </div>
      </div>
    </div>
  );
}