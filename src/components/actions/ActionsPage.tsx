import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Zap, Plus, Trash2, Info } from 'lucide-react';

export function ActionsPage() {
  const [headers, setHeaders] = useState<{key: string, value: string}[]>([{ key: '', value: '' }]);
  const [queryParams, setQueryParams] = useState<{key: string, value: string}[]>([{ key: '', value: '' }]);

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const addQueryParam = () => {
    setQueryParams([...queryParams, { key: '', value: '' }]);
  };

  const removeQueryParam = (index: number) => {
    setQueryParams(queryParams.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">New Action</h1>
          <p className="text-sm text-gray-400">
            Actions enable agents to interact with external services. Check out our
            <Button variant="link" className="text-cyan-500 h-auto p-0 ml-1">
              quickstart guide
            </Button>
            for an example.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button 
            variant="outline" 
            className="h-auto p-6 border-dashed justify-start bg-cyan-500/5 border-cyan-500/30"
          >
            <div className="p-2 rounded-md bg-cyan-500/10 mr-4">
              <Zap className="h-5 w-5 text-cyan-500" />
            </div>
            Custom
          </Button>
          <Button 
            variant="outline" 
            className="h-auto p-6 border-dashed justify-start"
            disabled
          >
            <img src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_31_2x.png" 
                 alt="Google Calendar"
                 className="w-8 h-8 mr-4" />
            Google Calendar
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>NAME</Label>
            <Input 
              placeholder="Action name"
              className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div className="space-y-2">
            <Label>DESCRIPTION</Label>
            <Textarea 
              placeholder="Action description"
              className="bg-zinc-900 border-zinc-800 min-h-[100px] focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div className="grid grid-cols-[1fr,200px] gap-4">
            <div className="space-y-2">
              <Label>ENDPOINT URL</Label>
              <Input 
                placeholder="Action endpoint url"
                className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label>METHOD</Label>
              <Select defaultValue="GET">
                <SelectTrigger className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="headers" className="w-full">
            <TabsList className="grid grid-cols-4 bg-zinc-900">
              <TabsTrigger value="headers" className="data-[state=active]:bg-cyan-500">Headers</TabsTrigger>
              <TabsTrigger value="body" className="data-[state=active]:bg-cyan-500">Body</TabsTrigger>
              <TabsTrigger value="query" className="data-[state=active]:bg-cyan-500">Query</TabsTrigger>
              <TabsTrigger value="url" className="data-[state=active]:bg-cyan-500">URL</TabsTrigger>
            </TabsList>

            <TabsContent value="headers" className="space-y-4">
              {headers.map((header, index) => (
                <div key={`header-${index}`} className="flex gap-4">
                  <Input 
                    placeholder="Key"
                    className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
                    value={header.key}
                    onChange={(e) => {
                      const newHeaders = [...headers];
                      newHeaders[index].key = e.target.value;
                      setHeaders(newHeaders);
                    }}
                  />
                  <Input 
                    placeholder="Value"
                    className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
                    value={header.value}
                    onChange={(e) => {
                      const newHeaders = [...headers];
                      newHeaders[index].value = e.target.value;
                      setHeaders(newHeaders);
                    }}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeHeader(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-dashed hover:border-cyan-500/50 hover:bg-cyan-500/5"
                onClick={addHeader}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Header
              </Button>
            </TabsContent>

            <TabsContent value="body" className="space-y-4">
              <Textarea 
                placeholder="Request body (JSON)"
                className="bg-zinc-900 border-zinc-800 min-h-[200px] font-mono focus:ring-cyan-500/20 focus:border-cyan-500/50"
              />
            </TabsContent>

            <TabsContent value="query" className="space-y-4">
              {queryParams.map((param, index) => (
                <div key={`param-${index}`} className="flex gap-4">
                  <Input 
                    placeholder="Key"
                    className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
                    value={param.key}
                    onChange={(e) => {
                      const newParams = [...queryParams];
                      newParams[index].key = e.target.value;
                      setQueryParams(newParams);
                    }}
                  />
                  <Input 
                    placeholder="Value"
                    className="bg-zinc-900 border-zinc-800 focus:ring-cyan-500/20 focus:border-cyan-500/50"
                    value={param.value}
                    onChange={(e) => {
                      const newParams = [...queryParams];
                      newParams[index].value = e.target.value;
                      setQueryParams(newParams);
                    }}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeQueryParam(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-dashed hover:border-cyan-500/50 hover:bg-cyan-500/5"
                onClick={addQueryParam}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Query Parameter
              </Button>
            </TabsContent>

            <TabsContent value="url" className="space-y-4">
              <div className="flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 p-4">
                <Info className="h-4 w-4 text-gray-400" />
                <p className="text-sm text-gray-400">
                  URL parameters are defined using curly braces in the endpoint URL. 
                  Example: /api/users/{'{userId}'}/posts/{'{postId}'}
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between rounded-lg bg-zinc-900 border border-zinc-800 p-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>Conversation time parameter</span>
              </div>
              <p className="text-sm text-gray-400">
                Include the conversation time as a parameter in the request
              </p>
            </div>
            <Switch className="data-[state=checked]:bg-cyan-500" />
          </div>

          <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
            Create Action
          </Button>
        </div>
      </div>
    </div>
  );
}