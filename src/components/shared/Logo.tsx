import { ComponentProps } from 'react';
import { Waves } from 'lucide-react';

export function Logo({ className, ...props }: ComponentProps<'svg'>) {
  return <Waves className={className} {...props} />;
}