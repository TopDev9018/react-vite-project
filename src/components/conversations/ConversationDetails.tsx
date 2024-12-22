import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Play, Pause, Download, X, Volume2 } from 'lucide-react';
import { formatDuration } from '@/lib/utils';
import { ConversationOverview } from './details/ConversationOverview';
import { ConversationTranscript } from './details/ConversationTranscript';
import { ConversationClientData } from './details/ConversationClientData';
import { ConversationAnalytics } from './details/ConversationAnalytics';

interface ConversationDetailsProps {
  conversationId: string;
  onClose: () => void;
}

export function ConversationDetails({ conversationId, onClose }: ConversationDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 754; // Mock duration in seconds

  return (
    <div className="mt-4 rounded-lg bg-zinc-900 border border-zinc-800">
      {/* Audio Controls */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-gray-400" />
              <div className="w-[200px] h-1 bg-zinc-800 rounded-full">
                <div 
                  className="h-full bg-cyan-500 rounded-full transition-all duration-200" 
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">
                {formatDuration(currentTime)} / {formatDuration(duration)}
              </span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="ml-4 hidden sm:flex">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="p-4">
        <ScrollArea className="w-full" orientation="horizontal">
          <TabsList className="inline-flex w-full sm:w-auto min-w-full sm:min-w-0 justify-start sm:justify-center p-1 bg-zinc-800 rounded-lg">
            <TabsTrigger value="overview" className="flex-1 sm:flex-none data-[state=active]:bg-cyan-500">
              Overview
            </TabsTrigger>
            <TabsTrigger value="transcription" className="flex-1 sm:flex-none data-[state=active]:bg-cyan-500">
              Transcription
            </TabsTrigger>
            <TabsTrigger value="client-data" className="flex-1 sm:flex-none data-[state=active]:bg-cyan-500">
              Client Data
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1 sm:flex-none data-[state=active]:bg-cyan-500">
              Analytics
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        <TabsContent value="overview">
          <ConversationOverview conversationId={conversationId} />
        </TabsContent>

        <TabsContent value="transcription">
          <ConversationTranscript conversationId={conversationId} />
        </TabsContent>

        <TabsContent value="client-data">
          <ConversationClientData conversationId={conversationId} />
        </TabsContent>

        <TabsContent value="analytics">
          <ConversationAnalytics conversationId={conversationId} />
        </TabsContent>
      </Tabs>

      {/* Mobile download button */}
      <div className="p-4 border-t border-zinc-800 sm:hidden">
        <Button variant="outline" size="sm" className="w-full">
          <Download className="h-4 w-4 mr-2" />
          Download Recording
        </Button>
      </div>
    </div>
  );
}