import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';
import { CallRoute } from '../../types/routing';

interface AddRouteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (route: CallRoute) => void;
}

export function AddRouteDialog({ open, onOpenChange, onAdd }: AddRouteDialogProps) {
  const [condition, setCondition] = useState('');
  const [response, setResponse] = useState('');
  const [transferTo, setTransferTo] = useState('');

  const handleAdd = () => {
    if (condition && response && transferTo) {
      onAdd({
        condition,
        response,
        transferTo
      });
      setCondition('');
      setResponse('');
      setTransferTo('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add Call Route</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>IF CALLER ASKS</Label>
            <Textarea
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="e.g., If the caller asks about technical support..."
              className="h-24 bg-zinc-900 border-zinc-800 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label>AGENT RESPONSE</Label>
            <Textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="e.g., I'll transfer you to our technical support team..."
              className="h-24 bg-zinc-900 border-zinc-800 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label>TRANSFER TO</Label>
            <Input
              value={transferTo}
              onChange={(e) => setTransferTo(e.target.value)}
              placeholder="e.g., Technical Support Team"
              className="bg-zinc-900 border-zinc-800"
            />
          </div>

          <Button 
            className="w-full bg-cyan-500 hover:bg-cyan-600"
            onClick={handleAdd}
            disabled={!condition || !response || !transferTo}
          >
            Add Route
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}