import { HelpCircle, X } from '@/components/shared/icons';
import { Button } from "@/components/ui/button";

export function UserInfo() {
  return (
    <div className="mt-auto space-y-4">
      <div className="bg-zinc-900 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">30 minutes left</span>
          <Button variant="outline" size="sm" className="h-7 text-cyan-500 hover:text-cyan-600">
            Upgrade
          </Button>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <span className="truncate">sanjanb1@gmail.com</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
          <HelpCircle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}