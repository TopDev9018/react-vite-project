import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ChevronRight, Upload, AlertTriangle, Globe, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface KnowledgeSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export function KnowledgeSection({ onNext, onBack }: KnowledgeSectionProps) {
  const [urls, setUrls] = useState<string[]>(['']);

  const addUrl = () => {
    setUrls([...urls, '']);
  };

  const removeUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>AGENT LLM</Label>
          <Button variant="link" className="text-sm text-cyan-500 h-auto p-0">
            Learn more
          </Button>
        </div>
        <p className="text-sm text-gray-400">
          Select the language model that will power your agent's intelligence.
        </p>
        <Select defaultValue="gpt4-mini">
          <SelectTrigger className="bg-zinc-900 border-zinc-800">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt4-mini">GPT 4o mini</SelectItem>
            <SelectItem value="gpt4">GPT-4</SelectItem>
            <SelectItem value="gpt3">GPT-3.5 Turbo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>CUSTOM KNOWLEDGE</Label>
        <p className="text-sm text-gray-400">
          Add your custom knowledge to your agent.
        </p>
        <Textarea 
          placeholder="i.e. The more specialized knowledge and information your agent has, the closer to your expectations they will perform. If you're using an agent for Business, upload things like Business Hours, Answers to Frequently Asked Questions, Customer Service Policies, etc."
          className="bg-zinc-900 border-zinc-800 h-32 resize-none"
        />
        <Button variant="outline" className="w-full">
          <Upload className="mr-2 h-4 w-4" />
          Upload knowledge files
        </Button>
        <p className="text-xs text-gray-400">
          Max 10 files, see below for accepted formats.
          Smaller files have better performance.
          <Button variant="link" className="text-xs text-cyan-500 h-auto p-0 ml-1">
            see full list
          </Button>
        </p>

        {/* URL Section */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-cyan-500" />
            <Label>WEBSITE URLS</Label>
          </div>
          <p className="text-sm text-gray-400">
            Add URLs to websites containing relevant knowledge for your agent.
          </p>
          
          {urls.map((url, index) => (
            <div key={index} className="flex gap-2">
              <Input
                placeholder="https://example.com/docs"
                value={url}
                onChange={(e) => updateUrl(index, e.target.value)}
                className="bg-zinc-900 border-zinc-800 flex-1"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeUrl(index)}
                disabled={urls.length === 1}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <Button
            variant="outline"
            className="w-full border-dashed"
            onClick={addUrl}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add URL
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <Label>GUARDRAILS</Label>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-zinc-900 border border-zinc-800 p-4">
          <div className="space-y-1">
            <p className="font-medium">Force knowledge base answers</p>
            <p className="text-sm text-gray-400">
              Force the agent to reply using only content from the knowledge base instead of general knowledge?
            </p>
          </div>
          <Switch className="data-[state=checked]:bg-cyan-500" />
        </div>
      </div>

      <div className="space-y-4">
        <Label>DYNAMIC CONTEXT</Label>
        <p className="text-sm text-gray-400">
          Enrich your agent with context-aware knowledge.
        </p>
        
        <div className="space-y-4 rounded-lg bg-zinc-900/50 border border-cyan-500/20 p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Current Date & Time</p>
              <p className="text-sm text-gray-400">
                Tell your agent the current date and time
              </p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>
          
          <Select defaultValue="dubai">
            <SelectTrigger className="bg-zinc-900 border-zinc-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai">(GMT+04:00) Dubai</SelectItem>
              <SelectItem value="london">(GMT+00:00) London</SelectItem>
              <SelectItem value="newyork">(GMT-05:00) New York</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg bg-zinc-900/50 border border-cyan-500/20 p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Caller Information</p>
              <p className="text-sm text-gray-400">
                Add knowledge about the user's phone number or email when available
              </p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>
        </div>
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
          onClick={onNext}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}