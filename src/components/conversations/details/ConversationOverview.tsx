interface ConversationOverviewProps {
  conversationId: string;
}

export function ConversationOverview({ conversationId }: ConversationOverviewProps) {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Agent</label>
          <div className="font-medium">Customer Support</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Caller ID</label>
          <div className="font-medium">+1 (555) 123-4567</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Duration</label>
          <div className="font-medium">12:34</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Date & Time</label>
          <div className="font-medium">Mar 15, 2024 2:30 PM</div>
        </div>
      </div>
    </div>
  );
}