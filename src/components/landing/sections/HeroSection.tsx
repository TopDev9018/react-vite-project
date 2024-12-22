import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}