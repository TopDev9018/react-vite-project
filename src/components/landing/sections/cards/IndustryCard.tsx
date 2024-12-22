import { Button } from '@/components/ui/button';
import { ChevronRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedPhone } from './AnimatedPhone';

interface IndustryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  phoneNumber: string;
  features: string[];
}

export function IndustryCard({ title, description, image, phoneNumber, features }: IndustryCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white/5 p-2 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
      <div className="relative h-[240px] rounded-xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
        
        {/* Phone badge */}
        <div className="absolute top-4 left-4">
          <div className={cn(
            "flex items-center gap-2",
            "bg-cyan-500/90 backdrop-blur-sm rounded-full px-4 py-2",
            "transition-all duration-300",
            "group-hover:bg-cyan-400/90",
            "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          )}>
            <AnimatedPhone />
            <span className="text-sm font-medium text-white">{phoneNumber}</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-blue-100 mb-4">{description}</p>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-blue-200">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {feature}
            </div>
          ))}
        </div>

        <Button 
          className={cn(
            "w-full bg-white/10 hover:bg-white/20 text-white",
            "group-hover:bg-cyan-500 group-hover:hover:bg-cyan-600 transition-colors"
          )}
        >
          Use This Template
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}