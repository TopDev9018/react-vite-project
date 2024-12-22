import { StatsCard } from './stats/StatsCard';
import { BackgroundEffects } from './stats/BackgroundEffects';
import { STATS_DATA } from '../data/stats';

export function StatsSection() {
  return (
    <div className="relative bg-gradient-to-b from-blue-800 to-blue-900 py-8">
      <BackgroundEffects />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS_DATA.map((stat) => (
            <StatsCard key={stat.value} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}