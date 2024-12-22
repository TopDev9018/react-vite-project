import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ContinueButtonProps {
  onContinue: () => void;
  disabled?: boolean;
}

export function ContinueButton({ onContinue, disabled = false }: ContinueButtonProps) {
  return (
    <Button 
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 group"
      size="lg"
      onClick={onContinue}
      disabled={disabled}
    >
      Continue
      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
}