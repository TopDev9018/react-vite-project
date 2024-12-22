import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function CTASection() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transform your business with AI voice agents
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join thousands of businesses using our AI voice agents to provide exceptional customer service 24/7.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              Get started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Contact sales
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}