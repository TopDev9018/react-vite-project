import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { StepHeader } from './StepHeader';
import { ContinueButton } from './ContinueButton';
import { ProgressIndicator } from './ProgressIndicator';
import { useOnboardingProgress } from '../hooks/useOnboardingProgress';

interface OnboardingStepProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onContinue: () => void;
  canContinue?: boolean;
  stepIndex: number;
}

export function OnboardingStep({
  title,
  subtitle,
  children,
  onContinue,
  canContinue = true,
  stepIndex
}: OnboardingStepProps) {
  const { totalSteps } = useOnboardingProgress();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
        <StepHeader title={title} subtitle={subtitle} />
        <div className="mt-8 space-y-6">
          {children}
          <ContinueButton onContinue={onContinue} disabled={!canContinue} />
        </div>
      </div>
      <ProgressIndicator totalSteps={totalSteps} currentStep={stepIndex} />
    </div>
  );
}