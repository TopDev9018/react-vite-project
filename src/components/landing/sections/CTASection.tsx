import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WalkingRobots } from './cta/WalkingRobots';
import { CTABackground } from './cta/CTABackground';
import { cn } from '@/lib/utils';

export function CTASection() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-16">
      <CTABackground />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative isolate overflow-hidden rounded-3xl">
          {/* Glass card effect */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-16 sm:px-16 rounded-3xl">
            {/* Content */}
            <div className="mx-auto max-w-2xl text-center relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl group">
                <span className="relative inline-block">
                  Ready to transform your business?
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Join thousands of businesses using our AI voice agents to provide exceptional customer service.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className={cn(
                    "w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white",
                    "px-8 py-6 text-lg group transition-all duration-300",
                    "flex items-center justify-center"
                  )}
                  onClick={() => navigate('/onboarding')}
                >
                  Get Started Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className={cn(
                    "w-full sm:w-auto border-blue-300 text-blue-300",
                    "hover:bg-blue-300/10 px-8 py-6 text-lg",
                    "flex items-center justify-center"
                  )}
                >
                  Contact Sales
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Walking robots */}
      <WalkingRobots />
    </div>
  );
}