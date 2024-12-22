import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { BusinessNameInput } from './components/business/BusinessNameInput';
import { BusinessBackground } from './components/business/BusinessBackground';

export function BusinessNamePage() {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState('');

  const handleContinue = () => {
    if (businessName.trim()) {
      navigate('/onboarding/volume');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BusinessBackground />
      <OnboardingStep
        title="What's your business name?"
        subtitle="This will help us personalize your experience"
        onContinue={handleContinue}
        canContinue={!!businessName.trim()}
        stepIndex={2}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <BusinessNameInput
              value={businessName}
              onChange={setBusinessName}
            />
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}