import { Footer } from '@/components/layout/Footer';
import { PricingHeader } from '@/pages/pricing/components/PricingHeader';
import { WavesBackground } from '@/pages/pricing/components/WavesBackground';
import { MovingClouds } from '@/pages/pricing/components/MovingClouds';
import { SwimmingRobots } from '@/pages/pricing/components/SwimmingRobots';

export function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="prose prose-invert prose-blue">
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new services.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@seaside.ai
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}