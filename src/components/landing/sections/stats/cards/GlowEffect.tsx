import { cn } from '@/lib/utils';

export function GlowEffect() {
  return (
    <>
      {/* Corner accents */}
      <div className="absolute top-0 right-0 h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400" />
        <div className="absolute top-4 right-4 h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
        <div className="absolute top-4 right-4 h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400" />
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-cyan-500/10 blur-xl" />
      </div>
    </>
  );
}