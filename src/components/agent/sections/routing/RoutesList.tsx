import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { CallRoute } from '../../types/routing';

interface RoutesListProps {
  routes: CallRoute[];
  onDelete: (index: number) => void;
}

export function RoutesList({ routes, onDelete }: RoutesListProps) {
  return (
    <div className="space-y-4">
      {routes.map((route, index) => (
        <div 
          key={index}
          className="rounded-lg bg-zinc-800/50 border border-zinc-700 p-4 space-y-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium text-cyan-400">Route {index + 1}</h4>
              <p className="text-sm text-gray-400 mt-1">{route.condition}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(index)}
              className="text-gray-400 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <div>
              <Label className="text-xs text-gray-500">Response</Label>
              <p className="text-sm">{route.response}</p>
            </div>
            <div>
              <Label className="text-xs text-gray-500">Transfer To</Label>
              <p className="text-sm">{route.transferTo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}