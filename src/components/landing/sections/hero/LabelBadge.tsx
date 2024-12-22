interface LabelBadgeProps {
  children: React.ReactNode;
}

export function LabelBadge({ children }: LabelBadgeProps) {
  return (
    <div className="text-sm font-medium text-cyan-200 bg-cyan-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm border border-cyan-400/20 transition-all duration-300 group-hover:text-cyan-100 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      {children}
    </div>
  );
}