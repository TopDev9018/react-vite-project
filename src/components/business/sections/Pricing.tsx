import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: '$99',
    description: 'Perfect for small businesses getting started with AI voice agents.',
    features: [
      '1 AI voice agent',
      'Up to 1,000 minutes/month',
      'Basic analytics',
      'Email support',
      'Standard voice models',
      'Web integration'
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: '$299',
    description: 'Ideal for growing businesses with multiple departments.',
    features: [
      'Up to 5 AI voice agents',
      'Up to 5,000 minutes/month',
      'Advanced analytics',
      'Priority support',
      'Premium voice models',
      'Web & phone integration',
      'Custom knowledge base',
      'API access'
    ],
    cta: 'Start free trial',
    featured: true
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: 'Custom',
    description: 'For large organizations requiring custom solutions.',
    features: [
      'Unlimited AI voice agents',
      'Custom minute packages',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom voice models',
      'Full platform integration',
      'Advanced security features',
      'SLA guarantees'
    ],
    cta: 'Contact sales'
  }
];

export function Pricing() {
  return (
    <div className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ${
                tier.featured
                  ? 'bg-cyan-500/5 ring-cyan-500'
                  : 'bg-zinc-900/50 ring-zinc-800'
              }`}
            >
              <h3 className="text-lg font-semibold leading-8 text-white">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className="text-sm font-semibold leading-6 text-gray-400">
                    /month
                  </span>
                )}
              </p>
              <Button
                className={`mt-6 w-full ${
                  tier.featured
                    ? 'bg-cyan-500 hover:bg-cyan-600'
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                {tier.cta}
              </Button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}