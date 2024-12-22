import { useLocation } from 'react-router-dom';
import { ONBOARDING_STEPS } from '../constants/steps';

export function useOnboardingProgress() {
  const location = useLocation();
  
  const currentStepIndex = Math.max(
    0,
    ONBOARDING_STEPS.findIndex(step => 
      location.pathname === step.path || 
      (step.path !== '/onboarding' && location.pathname.startsWith(step.path))
    )
  );

  return {
    steps: ONBOARDING_STEPS,
    currentStepIndex,
    totalSteps: ONBOARDING_STEPS.length,
    currentStep: ONBOARDING_STEPS[currentStepIndex]
  };
}