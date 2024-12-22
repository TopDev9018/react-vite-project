import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { UseCaseSelector } from './components/use-case/UseCaseSelector';
import { AgentBackground } from './components/agent/AgentBackground';

export function UseCasePage() {
  const navigate = useNavigate();
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);

  const handleContinue = () => {
    if (selectedUseCases.length > 0) {
      navigate('/onboarding/phone');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <AgentBackground />
      <OnboardingStep
        title="What do you want to use AI Call Agent for?"
        subtitle="Select all that apply"
        onContinue={handleContinue}
        canContinue={selectedUseCases.length > 0}
        stepIndex={4}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <UseCaseSelector
              value={selectedUseCases}
              onChange={setSelectedUseCases}
            />
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}