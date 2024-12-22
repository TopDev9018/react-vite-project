import { Check } from 'lucide-react';

const features = [
  {
    name: 'Natural Voice Interaction',
    description: 'AI-powered voice agents that sound and respond naturally, creating engaging conversations.'
  },
  {
    name: 'Custom Knowledge Base',
    description: 'Train your agent with your business knowledge, policies, and procedures.'
  },
  {
    name: 'Multi-Channel Support',
    description: 'Deploy your agent across phone, web, and mobile platforms.'
  },
  {
    name: 'Real-time Analytics',
    description: 'Track performance, sentiment analysis, and conversation metrics.'
  },
  {
    name: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows through our API.'
  },
  {
    name: '24/7 Availability',
    description: 'Provide round-the-clock support without increasing overhead.'
  }
];

export function Features() {
  return (
    <div className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to automate customer interactions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our AI voice agents come packed with features to help you provide exceptional service while reducing costs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <Check className="h-5 w-5 flex-none text-cyan-500" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}