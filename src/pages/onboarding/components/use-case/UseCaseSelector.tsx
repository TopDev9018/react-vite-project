import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { USE_CASES } from '../../constants/use-cases';

interface UseCaseSelectorProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function UseCaseSelector({ value, onChange }: UseCaseSelectorProps) {
  const toggleUseCase = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {USE_CASES.map((useCase) => (
        <button
          key={useCase.id}
          onClick={() => toggleUseCase(useCase.id)}
          className={cn(
            "flex items-start gap-4 p-4 rounded-lg border text-left transition-all duration-300 w-full",
            value.includes(useCase.id)
              ? "bg-cyan-500/10 border-cyan-500"
              : "bg-blue-950/50 border-white/10 hover:bg-blue-900/50 hover:border-cyan-500/30"
          )}
        >
          <div className={cn(
            "w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors",
            value.includes(useCase.id)
              ? "border-cyan-500 bg-cyan-500"
              : "border-white/30"
          )}>
            {value.includes(useCase.id) && <Check className="w-3 h-3 text-black" />}
          </div>
          <div>
            <div className={cn(
              "font-medium text-white",
              value.includes(useCase.id) && "text-cyan-400"
            )}>
              {useCase.label}
            </div>
            <div className={cn(
              "text-sm mt-1 text-blue-100",
              value.includes(useCase.id) && "text-cyan-300"
            )}>
              {useCase.description}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}