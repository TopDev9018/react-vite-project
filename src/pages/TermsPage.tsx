import { Footer } from '@/components/layout/Footer';
import { PricingHeader } from '@/pages/pricing/components/PricingHeader';
import { WavesBackground } from '@/pages/pricing/components/WavesBackground';
import { MovingClouds } from '@/pages/pricing/components/MovingClouds';
import { SwimmingRobots } from '@/pages/pricing/components/SwimmingRobots';

export function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="prose prose-invert prose-blue">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using seaside.ai's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>

              <h2>2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
              </p>

              <h2>3. Service Modifications</h2>
              <p>
                We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
              </p>

              <h2>4. Limitation of Liability</h2>
              <p>
                seaside.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2>5. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at legal@seaside.ai
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}