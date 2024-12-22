import { Hero } from './sections/Hero';
import { UseCases } from './sections/UseCases';
import { Features } from './sections/Features';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { CTASection } from './sections/CTASection';

export function BusinessPage() {
  return (
    <div className="flex-1">
      <Hero />
      <UseCases />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
    </div>
  );
}