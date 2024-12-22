import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from './components/AuthLayout';
import { AuthForm } from './components/AuthForm';
import { SocialAuth } from './components/SocialAuth';

export function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const terms = formData.get('terms') as boolean;

    // Check if the user agrees to the terms
    if (!terms) {
      setErrorMessage("You must agree to the terms and privacy policy.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null); // Clear any previous errors

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create account');
      }

      // Redirect to the welcome page after successful signup
      navigate('/onboarding/welcome');
    } catch (error: any) {
      setIsLoading(false);
      setErrorMessage(error.message || 'Something went wrong!');
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        Get started with seaside.ai
      </h2>
      <p className="mt-2 text-center text-sm text-blue-200">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
          Sign in
        </Link>
      </p>

      <AuthForm>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-200">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 bg-white/5 border-white/10 text-white focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200">
              Work Email
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
              autoComplete="new-password"
              required
              className="mt-1 bg-white/5 border-white/10 text-white focus:ring-cyan-500/20 focus:border-cyan-500/50"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500/20"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-blue-200">
              I agree to the{' '}
              <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">
                Privacy Policy
              </Link>
            </label>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center">{errorMessage}</div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-600"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        <SocialAuth mode="signup" />
      </AuthForm>
    </AuthLayout>
  );
}
