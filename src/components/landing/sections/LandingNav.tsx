import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/shared/Logo';
import { MainNav } from './nav/MainNav';
import { AuthButtons } from './nav/AuthButtons';

export function LandingNav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-cyan-300" />
            <span className="text-xl font-bold text-white">seaside.ai</span>
          </div>

          {/* Main Navigation */}
          <MainNav />

          {/* Auth Buttons */}
          <AuthButtons />
        </div>
      </div>

      {/* Frosted glass effect */}
      <div className="absolute inset-0 -z-10 bg-blue-950/50 backdrop-blur-md border-b border-white/10" />
    </nav>
  );
}