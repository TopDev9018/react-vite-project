import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

export function ProgressIndicator({ totalSteps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="lg:hidden flex items-center gap-2 mt-12">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-colors duration-200",
            i === currentStep - 1 ? "bg-cyan-400" : 
            i < currentStep - 1 ? "bg-cyan-500/50" : "bg-blue-300/20"
          )}
        />
      ))}
    </div>
  );
}