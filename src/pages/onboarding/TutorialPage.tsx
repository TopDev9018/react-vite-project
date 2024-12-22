import { useNavigate } from 'react-router-dom';
import { OnboardingStep } from './components/OnboardingStep';
import { TutorialBackground } from './components/tutorial/TutorialBackground';

export function TutorialPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/onboarding/referral');
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <TutorialBackground />
      <OnboardingStep
        title="Watch How It Works"
        subtitle="Take a quick tour of our platform's key features"
        onContinue={handleContinue}
        stepIndex={6}
      >
        <div className="relative">
          {/* Glass card effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" />
          
          {/* Content */}
          <div className="relative p-6">
            <div className="aspect-video rounded-lg overflow-hidden bg-blue-950/50 border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/8jH0mvGyZa4?si=vsGOu3Suw1SFEfme"
                title="Platform Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </OnboardingStep>
    </div>
  );
}