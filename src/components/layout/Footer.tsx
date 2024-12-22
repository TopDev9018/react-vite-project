import { Logo } from '@/components/shared/Logo';
import { FooterNav } from './footer/FooterNav';
import { FooterBackground } from './footer/FooterBackground';
import { FooterCopyright } from './footer/FooterCopyright';
import { WaveDivider } from './footer/WaveDivider';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-blue-950 to-blue-900 border-t border-white/10">
      {/* Wave divider */}
      <WaveDivider />
      
      {/* Background effects */}
      <FooterBackground />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col items-start justify-between gap-y-12 lg:flex-row">
            {/* Brand */}
            <div className="flex-1">
              <div className="flex items-center gap-2 group">
                <Logo className="h-8 w-8 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                <span className={cn(
                  "text-xl font-bold",
                  "bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400",
                  "bg-clip-text text-transparent",
                  "font-futuristic tracking-wide",
                  "transition-all duration-300",
                  "group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-300",
                  "group-hover:tracking-wider"
                )}>
                  seaside.ai
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-blue-100">
                Transform your business with AI voice agents. Available 24/7, scalable, and customizable.
              </p>
            </div>

            {/* Navigation */}
            <FooterNav />
          </div>

          {/* Copyright */}
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}