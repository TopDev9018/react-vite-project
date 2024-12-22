import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { PricingHeader } from '@/pages/pricing/components/PricingHeader';
import { WavesBackground } from '@/pages/pricing/components/WavesBackground';
import { MovingClouds } from '@/pages/pricing/components/MovingClouds';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <PricingHeader />
      
      <main className="relative pt-32 pb-24">
        {/* Background Effects */}
        <WavesBackground />
        <MovingClouds />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About seaside.ai
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Building the future of customer interactions with AI voice technology.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="space-y-8 text-blue-100">
              <p>
                seaside.ai was founded with a vision to revolutionize how businesses interact with their customers. Our AI voice agents combine cutting-edge technology with natural language processing to create seamless, human-like conversations.
              </p>
              <p>
                Our team consists of experts in artificial intelligence, natural language processing, and customer experience design. Together, we're building solutions that help businesses provide exceptional service while reducing operational costs.
              </p>
              <p>
                We believe in the power of technology to enhance human connections, not replace them. Our AI voice agents are designed to handle routine interactions efficiently, freeing up human agents to focus on complex cases that require empathy and creative problem-solving.
              </p>
            </div>

            <div className="mt-16">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                Join Our Team
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}