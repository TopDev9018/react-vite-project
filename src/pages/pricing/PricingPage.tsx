import { PricingHeader } from './components/PricingHeader';
import { PricingHero } from './sections/PricingHero';
import { PricingTiers } from './sections/PricingTiers';
import { PricingFeatures } from './sections/PricingFeatures';
import { PricingFAQ } from './sections/PricingFAQ';
import { Footer } from '@/components/layout/Footer';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <PricingHeader />
      <PricingHero />
      <PricingTiers />
      <PricingFeatures />
      <PricingFAQ />
      <Footer />
    </div>
  );
}