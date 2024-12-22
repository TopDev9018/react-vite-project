import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { PhoneVerificationForm } from './components/phone/PhoneVerificationForm';
import { PhoneBackground } from './components/phone/PhoneBackground';

export function PhoneVerificationPage() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('1');

  const handleContinue = () => {
    if (phoneNumber.length >= 10) {
      navigate('/onboarding/tutorial');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <PhoneBackground />
      <OnboardingStep
        title="What is the best number to reach you at?"
        subtitle="We'll use this for account verification and important updates"
        onContinue={handleContinue}
        canContinue={phoneNumber.length >= 10}
        stepIndex={5}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <PhoneVerificationForm
              phoneNumber={phoneNumber}
              countryCode={countryCode}
              onPhoneChange={setPhoneNumber}
              onCountryCodeChange={setCountryCode}
            />
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}