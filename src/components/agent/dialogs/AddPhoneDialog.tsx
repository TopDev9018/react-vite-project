import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import { PhoneNumberSearchResults } from './PhoneNumberSearchResults';

interface AddPhoneDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddPhoneDialog({ open, onOpenChange }: AddPhoneDialogProps) {
  const [searchMode, setSearchMode] = useState<'input' | 'results'>('input');
  
  // Mock data for demonstration
  const mockNumbers = [
    { number: "(361) 366-4476", location: "San Diego" },
    { number: "(361) 441-0976", location: "Woodsboro" },
    { number: "(361) 266-8055", location: "Goliad" },
    { number: "(361) 282-4948", location: "Moulton" },
    { number: "(361) 301-3609", location: "Nordheim" },
    { number: "(361) 282-4243", location: "Moulton" },
  ];

  const handleFindNumbers = () => {
    setSearchMode('results');
  };

  const handleSelectNumber = (number: { number: string; location: string }) => {
    console.log('Selected number:', number);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add A Phone Number</DialogTitle>
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

        {searchMode === 'input' ? (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>COUNTRY</Label>
              <Select defaultValue="us">
                <SelectTrigger className="bg-zinc-900 border-zinc-800">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span>
                      United States
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span>
                      United States
                    </div>
                  </SelectItem>
                  <SelectItem value="ca">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇨🇦</span>
                      Canada
                    </div>
                  </SelectItem>
                  <SelectItem value="gb">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇬🇧</span>
                      United Kingdom
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>US AREA CODE</Label>
              <Input 
                placeholder='Optional area code, e.g. "206"'
                className="bg-zinc-900 border-zinc-800"
              />
            </div>

            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              onClick={handleFindNumbers}
            >
              Find available numbers
            </Button>
          </div>
        ) : (
          <PhoneNumberSearchResults 
            numbers={mockNumbers}
            onSelectNumber={handleSelectNumber}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}