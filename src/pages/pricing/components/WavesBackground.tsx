export function WavesBackground() {
  return (
    <>
      {/* Ocean background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2400&auto=format')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-900/90" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-pulse delay-1000" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </>
  );
}