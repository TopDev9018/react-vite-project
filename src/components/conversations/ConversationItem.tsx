import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { formatDistanceToNow } from 'date-fns';
import { ConversationDetails } from './ConversationDetails';

interface ConversationItemProps {
  conversation: {
    id: string;
    agentName: string;
    date: Date;
    duration: string;
    callerId: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export function ConversationItem({ conversation, isExpanded, onToggle }: ConversationItemProps) {
  return (
    <div className="space-y-2 transition-all duration-200">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200",
          "hover:bg-zinc-900/50",
          isExpanded ? "bg-zinc-900 border border-zinc-800" : ""
        )}
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
            <Logo className="w-5 h-5 text-emerald-500" />
          </div>
          <span>{conversation.agentName}</span>
        </div>
        <div className="text-gray-400 sm:text-left text-right">
          {formatDistanceToNow(conversation.date, { addSuffix: true })}
        </div>
        <div className="text-gray-400 hidden sm:block">{conversation.duration}</div>
        <div className="text-gray-400 hidden sm:block">{conversation.callerId}</div>
      </div>

      {isExpanded && (
        <div className="transition-all duration-200 ease-in-out">
          <ConversationDetails
            conversationId={conversation.id}
            onClose={onToggle}
          />
        </div>
      )}
    </div>
  );
}