import { TooltipProps } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  color: string;
}

export function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg shadow-lg">
      <p className="text-sm font-medium text-white">{label}</p>
      {payload.map((entry, index) => (
        <p 
          key={index} 
          className="text-sm" 
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
}