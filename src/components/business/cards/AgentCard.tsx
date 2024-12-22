import { Button } from '@/components/ui/button';
import { Phone, ChevronRight } from 'lucide-react';

interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  phoneNumber: string;
  training: string[];
}

export function AgentCard({ title, description, image, phoneNumber, training }: AgentCardProps) {
  return (
    <div className="relative group rounded-2xl bg-zinc-900 p-6 hover:bg-zinc-900/80 transition-colors">
      <div className="relative h-[200px] rounded-xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-cyan-500/90 rounded-full px-4 py-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">{phoneNumber}</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="space-y-2 mb-6">
        {training.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            {item}
          </div>
        ))}
      </div>

      <Button className="w-full bg-zinc-800 hover:bg-zinc-700 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
        Use This Template
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}