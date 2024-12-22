import { IndustryCard } from './cards/IndustryCard';
import { INDUSTRY_CASES } from '../data/industry-cases';

export function UseCasesSection() {
  return (
    <div id="industries" className="relative bg-gradient-to-b from-blue-800 to-blue-900 py-24 scroll-mt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Discover how businesses are transforming customer service with AI voice agents
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_CASES.map((industry) => (
            <IndustryCard key={industry.id} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
}