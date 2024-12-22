export function BackgroundEffects() {
  return (
    <>
      {/* Main ocean background image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2400&auto=format')] bg-cover bg-center opacity-30"
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/90 to-blue-950/95" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] rotate-12">
            <div className="absolute inset-0 blur-3xl">
              <div className="absolute inset-0 animate-pulse" style={{
                background: 'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300/20 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjQiIHZpZXdCb3g9IjAgMCAxNDQwIDEyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwQzQ4MCA4MCAxMDAwIDgwIDE0NDAgMFYxMjRIMFYwWiIgZmlsbD0iIzBjNGE2ZSIvPjwvc3ZnPg==')] bg-repeat-x animate-wave" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjQiIHZpZXdCb3g9IjAgMCAxNDQwIDEyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwQzQ4MCA4MCAxMDAwIDgwIDE0NDAgMFYxMjRIMFYwWiIgZmlsbD0iIzBjNGE2ZSIvPjwvc3ZnPg==')] bg-repeat-x animate-wave [animation-delay:0.5s]" />
      </div>
    </>
  );
}