import { ReactNode } from 'react';

interface AuthFormProps {
  children: ReactNode;
}

export function AuthForm({ children }: AuthFormProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm py-8 px-4 shadow-xl rounded-lg border border-white/10 sm:px-10">
      {children}
    </div>
  );
}