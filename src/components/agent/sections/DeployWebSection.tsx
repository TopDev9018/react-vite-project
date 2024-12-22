import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Wifi, ChevronRight, Copy, ChevronsUpDown, Eye } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';

interface DeployWebSectionProps {
  onBack: () => void;
}

export function DeployWebSection({ onBack }: DeployWebSectionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    styling: false,
    content: false,
    preview: false
  });

  const embedCode = `<script type="text/javascript">
  src="https://unpkg.com/@play-ai/web-embed">
</script>
<script type="text/javascript">
  addEventListener("load", () => {
    PlayAI.open('2kfla3ky5U3f3pJyYwu5');
  });
</script>`;

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wifi className="h-5 w-5" />
          <Label>Deploy Agent To Website</Label>
          <span className="text-xs font-medium bg-cyan-500/10 text-cyan-500 px-2 py-0.5 rounded">
            BETA
          </span>
        </div>
        <p className="text-sm text-gray-400">
          Customize the content and styling of your agent embed.
        </p>

        <div className="space-y-4">
          <Label>EMBED CODE</Label>
          <p className="text-sm text-gray-400">
            Include this code block in your website's <code>&lt;head&gt;</code> section.
          </p>
          <div className="relative">
            <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm font-mono overflow-x-auto">
              {embedCode}
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => navigator.clipboard.writeText(embedCode)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2 py-2">
          <input type="checkbox" className="rounded border-zinc-800 bg-zinc-900" />
          <span className="text-sm">Crawl website</span>
        </div>

        <Collapsible
          open={openSections.styling}
          onOpenChange={() => toggleSection('styling')}
          className="space-y-2"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4" />
              <span>CUSTOMIZE STYLING</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="space-y-4">
              <Label>BUTTON COLOR</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs">Background</Label>
                  <Input type="color" className="h-10 bg-zinc-800" />
                </div>
                <div>
                  <Label className="text-xs">Text</Label>
                  <Input type="color" className="h-10 bg-zinc-800" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label>BUTTON POSITION</Label>
              <div className="grid grid-cols-3 gap-4">
                {['Bottom left', 'Center', 'Bottom right'].map((pos) => (
                  <Button
                    key={pos}
                    variant="outline"
                    className={cn(
                      "h-20 border-dashed",
                      pos === 'Center' && "border-cyan-500 text-cyan-500"
                    )}
                  >
                    {pos}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">BOTTOM SPACING</Label>
                <Input defaultValue="24" className="bg-zinc-800" />
              </div>
              <div>
                <Label className="text-xs">SIDE SPACING</Label>
                <Input defaultValue="24" className="bg-zinc-800" />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openSections.content}
          onOpenChange={() => toggleSection('content')}
          className="space-y-2"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4" />
              <span>CUSTOMIZE CONTENT</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div>
              <Label className="text-xs">BUTTON TEXT</Label>
              <Input defaultValue="Talk to our AI" className="bg-zinc-800 mt-2" />
            </div>
            <div>
              <Label className="text-xs">IN-CONVERSATION HELP TEXT</Label>
              <Input defaultValue="Ask us anything." className="bg-zinc-800 mt-2" />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openSections.preview}
          onOpenChange={() => toggleSection('preview')}
          className="space-y-2"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>PREVIEW YOUR EMBED</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <Label>EMBED PREVIEW</Label>
            <p className="text-sm text-gray-400">
              Preview your agent embed on your website.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="https://your-website.com" 
                className="bg-zinc-800 flex-1"
              />
              <Button variant="outline">
                Preview
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline"
          onClick={onBack}
        >
          Back
        </Button>
        <Button 
          className="bg-cyan-500 hover:bg-cyan-600"
        >
          Create
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}