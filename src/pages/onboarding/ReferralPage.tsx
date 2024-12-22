import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { ReferralSelector } from './components/referral/ReferralSelector';
import { ReferralBackground } from './components/referral/ReferralBackground';

export function ReferralPage() {
  const navigate = useNavigate();
  const [selectedSource, setSelectedSource] = useState('');

  const handleContinue = () => {
    if (selectedSource) {
      navigate('/app');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <ReferralBackground />
      <OnboardingStep
        title="How did you hear about us?"
        subtitle="Help us understand how you found us"
        onContinue={handleContinue}
        canContinue={!!selectedSource}
        stepIndex={7}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <ReferralSelector
              value={selectedSource}
              onChange={setSelectedSource}
            />
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}