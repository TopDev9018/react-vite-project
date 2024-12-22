import { Users, Zap, MessageCircle, Building2, Code2, CreditCard } from '@/components/shared/icons';
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/shared/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function SidebarNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex-1 space-y-2">
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start text-gray-400",
          location.pathname === '/app/create' ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
        )}
        onClick={() => navigate('/app/create')}
      >
        <Logo className="mr-2 h-4 w-4" />
        Create Agent
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start text-gray-400",
          location.pathname === '/app' ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
        )}
        onClick={() => navigate('/app')}
      >
        <Users className="mr-2 h-4 w-4" />
        My Agents
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start text-gray-400",
          location.pathname === '/app/actions' ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
        )}
        onClick={() => navigate('/app/actions')}
      >
        <Zap className="mr-2 h-4 w-4" />
        Actions
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start text-gray-400",
          location.pathname === '/app/conversations' ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
        )}
        onClick={() => navigate('/app/conversations')}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Conversations
      </Button>
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start text-gray-400",
          location.pathname === '/app/business' ? "text-white bg-white/10" : "hover:text-white hover:bg-white/10"
        )}
        onClick={() => navigate('/app/business')}
      >
        <Building2 className="mr-2 h-4 w-4" />
        For Business
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/10"
      >
        <Code2 className="mr-2 h-4 w-4" />
        For Developers
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/10"
      >
        <CreditCard className="mr-2 h-4 w-4" />
        Billing
      </Button>
    </nav>
  );
}