import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Conversational Voice A.I. For Your Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Speak the future with A.I. voice assistants. Transform your business operations with intelligent, natural conversations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              Book a demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="link" className="text-cyan-500">
              View pricing
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}