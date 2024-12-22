import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@/components/landing/sections/nav/NavLink';

export function PricingHeader() {
  const navigate = useNavigate();

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
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-blue-100 hover:text-white hover:bg-white/10"
              onClick={() => navigate('/login')}
            >
              Sign in
            </Button>
            <Button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => navigate('/signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Frosted glass effect */}
      <div className="absolute inset-0 -z-10 bg-blue-950/50 backdrop-blur-md border-b border-white/10" />
    </nav>
  );
}