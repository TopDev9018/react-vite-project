import { Outlet } from 'react-router-dom';
import { Logo } from '@/components/shared/Logo';
import { cn } from '@/lib/utils';
import { useOnboardingProgress } from './hooks/useOnboardingProgress';
import { OnboardingBackground } from './components/OnboardingBackground';

export function OnboardingLayout() {
  const { steps, currentStepIndex } = useOnboardingProgress();

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <OnboardingBackground />

      {/* Left panel - Progress */}
      <div className="hidden lg:flex w-80 border-r border-white/10 p-8 flex-col relative z-10 bg-blue-950/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-12">
          <Logo className="h-8 w-8 text-cyan-400" />
          <span className="text-xl font-bold text-white">Play.ai</span>
        </div>

        <nav className="space-y-1">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={cn(
                "flex items-center gap-3 transition-colors duration-200",
                index === currentStepIndex ? "text-cyan-400" : 
                index < currentStepIndex ? "text-cyan-500/50" : "text-blue-300/30"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200",
                index === currentStepIndex ? "bg-cyan-500/10 border border-cyan-500/50" :
                index < currentStepIndex ? "bg-cyan-500/5" : "bg-blue-950/50"
              )}>
                {index + 1}
              </div>
              <span>{step.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col relative z-10">
        <Outlet />
      </div>
    </div>
  );
}