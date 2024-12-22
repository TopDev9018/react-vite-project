import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, ChevronRight, ExternalLink } from 'lucide-react';
import { AddPhoneDialog } from '../dialogs/AddPhoneDialog';

interface DeployPhoneSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export function DeployPhoneSection({ onNext, onBack }: DeployPhoneSectionProps) {
  const [addPhoneOpen, setAddPhoneOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <Label>Deploy Agent To Phone</Label>
        </div>
        <p className="text-sm text-gray-400">
          This number will cost $2.00/mo, in addition to the charges for minutes spoken.{' '}
          <Button variant="link" className="text-cyan-500 h-auto p-0">
            See pricing for more details
            <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </p>

        <Button 
          variant="outline" 
          className="w-full h-auto py-6 border-dashed"
          onClick={() => setAddPhoneOpen(true)}
        >
          <Phone className="mr-2 h-4 w-4" />
          Add a phone number
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <Label>Call Transfer</Label>
        </div>
        <p className="text-sm text-gray-400">
          Purchase a number to enable call transfer.
        </p>

        <Button 
          variant="outline" 
          className="w-full h-auto py-6 border-dashed text-gray-400"
          disabled
        >
          <Phone className="mr-2 h-4 w-4" />
          Add Transfer Number
        </Button>
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

      <AddPhoneDialog
        open={addPhoneOpen}
        onOpenChange={setAddPhoneOpen}
      />
    </div>
  );
}