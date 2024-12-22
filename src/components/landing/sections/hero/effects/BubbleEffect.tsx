interface BubbleProps {
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  left?: number;
}

function Bubble({ size = 'sm', delay = 0, left = 50 }: BubbleProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  return (
    <div
      className={`absolute rounded-full bg-cyan-400/20 animate-bubble ${sizeClasses[size]}`}
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  );
}

export function BubbleEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <Bubble
          key={i}
          size={i % 3 === 0 ? 'lg' : i % 2 === 0 ? 'md' : 'sm'}
          delay={i * 0.5}
          left={20 + Math.random() * 60}
        />
      ))}
    </div>
  );
}