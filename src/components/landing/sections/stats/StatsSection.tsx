import { StatsCard } from './cards/StatsCard';
import { BackgroundEffects } from './background/BackgroundEffects';
import { STATS_DATA } from '../../data/stats';

export function StatsSection() {
  return (
    <div className="relative bg-gradient-to-b from-blue-800 to-blue-900 py-16">
      <BackgroundEffects />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS_DATA.map((stat, index) => (
            <StatsCard 
              key={stat.value} 
              {...stat} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}