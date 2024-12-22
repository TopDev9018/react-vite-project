import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { CallVolumeSelector } from './components/volume/CallVolumeSelector';
import { VolumeBackground } from './components/volume/VolumeBackground';

export function CallVolumePage() {
  const navigate = useNavigate();
  const [selectedVolume, setSelectedVolume] = useState('');

  const handleContinue = () => {
    if (selectedVolume) {
      navigate('/onboarding/agent');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <VolumeBackground />
      <OnboardingStep
        title="How many calls do you get per month?"
        subtitle="A guess is okay!"
        onContinue={handleContinue}
        canContinue={!!selectedVolume}
        stepIndex={3}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <CallVolumeSelector
              value={selectedVolume}
              onChange={setSelectedVolume}
            />
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}