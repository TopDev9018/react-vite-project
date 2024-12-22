import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/shared/Logo';
import { WelcomeAnimation } from './WelcomeAnimation';

export function WelcomeContent() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      {/* Mobile logo */}
      <div className="lg:hidden flex items-center gap-2 mb-12">
        <Logo className="h-12 w-12 text-cyan-400" />
        <span className="text-2xl font-bold text-white">seaside.ai</span>
      </div>

      <div className="max-w-md w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
        <WelcomeAnimation />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome aboard!
            <span className="block text-cyan-400 mt-2">Your AI journey begins here</span>
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Let's set up your AI agent in just a few steps. We'll guide you through the entire process.
          </p>
          <Button 
            className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg group transition-all duration-300"
            size="lg"
            onClick={() => navigate('/onboarding/business')}
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Progress indicator for mobile */}
      <div className="lg:hidden flex items-center gap-2 mt-12">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-300/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-300/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-300/20" />
      </div>
    </div>
  );
}