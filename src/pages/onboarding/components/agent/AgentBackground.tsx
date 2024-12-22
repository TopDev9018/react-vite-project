import { cn } from '@/lib/utils';

export function AgentBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Gradient orbs for depth */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-1000" />

      {/* Light rays effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-cyan-500/10 via-cyan-500/5 to-transparent transform -skew-x-12" />
      </div>

      {/* Deep water gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-950/50 to-transparent" />
    </div>
  );
}