import { Logo } from '@/components/shared/Logo';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <div 
      className="group relative rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50"
      style={{ 
        transitionDelay: `${index * 50}ms`,
        transform: `translateY(${index * 10}px)` 
      }}
    >
      <div className="mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500">
          <Logo className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500" />
        </div>
      </div>

      <h3 className="text-2xl font-bold tracking-wide text-white group-hover:text-cyan-300 transition-colors duration-500 mb-3">
        {title}
      </h3>

      <p className="text-lg leading-relaxed text-blue-100 group-hover:text-blue-50 transition-colors duration-500 font-light">
        {description}
      </p>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400" />
        <div className="absolute top-4 right-4 h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
        <div className="absolute top-4 right-4 h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400" />
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-cyan-500/10 blur-xl" />
      </div>
    </div>
  );
}