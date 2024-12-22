import { Check } from 'lucide-react';

const FEATURES = [
  {
    title: 'Natural Voice AI',
    description: 'AI-powered voice agents that sound and respond naturally, creating engaging conversations.'
  },
  {
    title: 'Custom Knowledge',
    description: 'Train your agent with your business knowledge, policies, and procedures.'
  },
  {
    title: 'Multi-Channel',
    description: 'Deploy your agent across phone, web, and mobile platforms seamlessly.'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track performance, sentiment analysis, and conversation metrics in real-time.'
  },
  {
    title: 'Easy Integration',
    description: 'Connect with your existing tools and workflows through our API.'
  },
  {
    title: '24/7 Availability',
    description: 'Provide round-the-clock support without increasing overhead costs.'
  }
];

export function PricingFeatures() {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">
            Our AI voice agents come packed with features to help you provide exceptional service while reducing costs.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Check className="h-6 w-6 text-cyan-400" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-blue-100">
                  {feature.description}
                </dd>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400" />
                  <div className="absolute top-4 right-4 h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
                  <div className="absolute top-4 right-4 h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400" />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}