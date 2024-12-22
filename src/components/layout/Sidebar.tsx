import { Users, Zap, MessageCircle, Building2, Code2, CreditCard, HelpCircle, X } from '@/components/shared/icons';
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/shared/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { UserInfo } from './UserInfo';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black p-6 flex flex-col">
      <div className="mb-8">
        <Logo className="w-10 h-10 text-white" />
      </div>
      
      <SidebarNav />
      <UserInfo />
    </div>
  );
}