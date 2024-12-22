import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function AuthButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        className="text-blue-100 hover:text-white hover:bg-white/10"
        onClick={() => navigate('/login')}
      >
        Sign in
      </Button>
      <Button 
        className="bg-cyan-500 hover:bg-cyan-600 text-white group transition-all duration-300"
        onClick={() => navigate('/signup')}
      >
        Get Started
        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}