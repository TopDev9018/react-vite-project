```tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { IdentityForm } from './components/identity/IdentityForm';
import { IdentityAnimation } from './components/identity/IdentityAnimation';

export function IdentityPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [voice, setVoice] = useState('Aaliyah');
  const [speed, setSpeed] = useState('1.0x');
  const [privacy, setPrivacy] = useState('public');

  const handleContinue = () => {
    if (name.trim()) {
      navigate('/onboarding/behavior');
    }
  };

  return (
    <OnboardingStep
      title="Create Your AI Agent"
      subtitle="Give your AI agent a unique identity"
      onContinue={handleContinue}
      canContinue={!!name.trim()}
      stepIndex={1}
    >
      <IdentityAnimation />
      <IdentityForm
        name={name}
        voice={voice}
        speed={speed}
        privacy={privacy}
        onNameChange={setName}
        onVoiceChange={setVoice}
        onSpeedChange={setSpeed}
        onPrivacyChange={setPrivacy}
      />
    </OnboardingStep>
  );
}
```