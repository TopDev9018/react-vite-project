import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Footer } from '@/components/layout/Footer';
import { PricingHeader } from '@/pages/pricing/components/PricingHeader';
import { WavesBackground } from '@/pages/pricing/components/WavesBackground';
import { MovingClouds } from '@/pages/pricing/components/MovingClouds';
import { SwimmingRobots } from '@/pages/pricing/components/SwimmingRobots';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <PricingHeader />
      
      <main className="relative pt-32 pb-24">
        {/* Background Effects */}
        <WavesBackground />
        <MovingClouds />
        <SwimmingRobots />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get in touch with our team. We're here to help.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-100">Name</label>
                <Input 
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:ring-cyan-500/20 focus:border-cyan-500/50" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100">Email</label>
                <Input 
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:ring-cyan-500/20 focus:border-cyan-500/50" 
                  type="email" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100">Subject</label>
                <Input 
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:ring-cyan-500/20 focus:border-cyan-500/50" 
                  placeholder="How can we help?" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100">Message</label>
                <Textarea 
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 min-h-[150px] focus:ring-cyan-500/20 focus:border-cyan-500/50" 
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}