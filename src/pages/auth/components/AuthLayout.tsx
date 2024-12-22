import { Logo } from '@/components/shared/Logo';
import { ReactNode } from 'react';
import { AuthBackground } from './AuthBackground';
import { AuthTestimonials } from './AuthTestimonials';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800">
      <AuthBackground />
      
      {/* Form Section */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Logo className="h-4 w-4 text-cyan-500" />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="hidden lg:block relative w-1/2">
        <AuthTestimonials />
      </div>
    </div>
  );
}