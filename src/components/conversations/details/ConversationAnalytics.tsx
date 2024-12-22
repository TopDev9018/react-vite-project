interface ConversationAnalyticsProps {
  conversationId: string;
}

export function ConversationAnalytics({ conversationId }: ConversationAnalyticsProps) {
  return (
    <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Sentiment Analysis</label>
          <div className="h-2 bg-zinc-800 rounded-full">
            <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
          </div>
          <div className="text-sm text-gray-400">75% Positive</div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Topic Distribution</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm">Product Inquiry</div>
              <div className="h-2 bg-zinc-800 rounded-full mt-1">
                <div className="h-full w-1/2 bg-emerald-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="text-sm">Technical Support</div>
              <div className="h-2 bg-zinc-800 rounded-full mt-1">
                <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Response Time</label>
          <div className="font-medium">Average: 2.5 seconds</div>
        </div>
      </div>
    </div>
  );
}