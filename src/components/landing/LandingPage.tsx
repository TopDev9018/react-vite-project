import { LandingNav } from './sections/LandingNav';
import { HeroSection } from './sections/HeroSection';
import { UseCasesSection } from './sections/UseCasesSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { StatsSection } from './sections/StatsSection';
import { CTASection } from './sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <LandingNav />
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}