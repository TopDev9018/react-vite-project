import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from './components/AuthLayout';
import { AuthForm } from './components/AuthForm';
import { SocialAuth } from './components/SocialAuth';

export function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding');
    }, 1000);
  };

  return (
    <AuthLayout>
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-blue-200">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-cyan-400 hover:text-cyan-300">
          Sign up
        </Link>
      </p>

      <AuthForm>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200">
              Email address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 bg-white/5 border-white/10 text-white focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-200">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 bg-white/5 border-white/10 text-white focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-cyan-400 hover:text-cyan-300">
              Forgot your password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-600"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <SocialAuth mode="login" />
      </AuthForm>
    </AuthLayout>
  );
}