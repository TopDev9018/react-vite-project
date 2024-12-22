import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PhoneNumber {
  number: string;
  location: string;
}

interface PhoneNumberSearchResultsProps {
  numbers: PhoneNumber[];
  onSelectNumber: (number: PhoneNumber) => void;
}

export function PhoneNumberSearchResults({ numbers, onSelectNumber }: PhoneNumberSearchResultsProps) {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-3">
        {numbers.map((number) => (
          <div
            key={number.number}
            className="flex items-center justify-between rounded-lg bg-zinc-900 border border-zinc-800 p-4"
          >
            <div className="space-y-1">
              <div className="font-medium">{number.number}</div>
              <div className="text-sm text-gray-400">{number.location}</div>
            </div>
            <Button 
              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500"
              onClick={() => onSelectNumber(number)}
            >
              Use Number
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}