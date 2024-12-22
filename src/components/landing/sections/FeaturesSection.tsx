import { FeatureCard } from './features/FeatureCard';
import { BackgroundEffects } from './features/BackgroundEffects';
import { SectionHeader } from './features/SectionHeader';
import { FEATURES } from '../data/features';

export function FeaturesSection() {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-24">
      <BackgroundEffects />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader 
          title="Powerful Features"
          subtitle="Everything you need to deliver exceptional customer service"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature}
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}