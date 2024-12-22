import { WavesBackground } from '../components/WavesBackground';
import { SwimmingRobots } from '../components/SwimmingRobots';
import { MovingClouds } from '../components/MovingClouds';

export function PricingHero() {
  return (
    <div className="relative pt-20 pb-16 overflow-hidden">
      <WavesBackground />
      <MovingClouds />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      <SwimmingRobots />
    </div>
  );
}