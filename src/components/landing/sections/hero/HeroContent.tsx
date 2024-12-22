import { useNavigate } from 'react-router-dom';
import { HeroAnimation } from './HeroAnimation';
import { CTAButton } from './CTAButton';
import { cn } from '@/lib/utils';

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Increased top margin */}
        <div className="relative h-32 mt-16 mb-8">
          <HeroAnimation />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Let AI Handle Your Calls
          <span className="block text-cyan-300 mt-2">While You Enjoy Peace of Mind</span>
        </h1>
        
        <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
          Transform your business communications with intelligent AI voice agents. 
          Available 24/7, handling calls with natural conversation while you focus on what matters most.
        </p>
        
        <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton 
            variant="primary"
            onClick={() => navigate('/onboarding')}
            className="w-full sm:w-auto"
          >
            Start Free Trial
          </CTAButton>
          
          <CTAButton 
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Watch Demo
          </CTAButton>
        </div>
      </div>
    </div>
  );
}