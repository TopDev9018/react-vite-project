import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight, PhoneForwarded } from 'lucide-react';
import { RoutesList } from './routing/RoutesList';
import { AddRouteDialog } from './routing/AddRouteDialog';
import { CallRoute } from '../types/routing';

interface RoutingSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export function RoutingSection({ onNext, onBack }: RoutingSectionProps) {
  const [routes, setRoutes] = useState<CallRoute[]>([]);
  const [isAddingRoute, setIsAddingRoute] = useState(false);

  const handleAddRoute = (route: CallRoute) => {
    setRoutes([...routes, route]);
    setIsAddingRoute(false);
  };

  const handleDeleteRoute = (index: number) => {
    setRoutes(routes.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <PhoneForwarded className="h-5 w-5" />
          <Label>CALL ROUTING</Label>
        </div>
        <p className="text-sm text-gray-400">
          Define how calls should be routed based on caller intent and responses.
        </p>

        <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-8 space-y-6 shadow-lg">
          {routes.length === 0 ? (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                <PhoneForwarded className="h-6 w-6 text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">No call routes configured</h3>
                <p className="text-sm text-gray-400">
                  Add call routes to define how your agent should handle and transfer different types of calls.
                </p>
              </div>
            </div>
          ) : (
            <RoutesList routes={routes} onDelete={handleDeleteRoute} />
          )}

          <Button
            variant="outline"
            className="w-full border-dashed hover:border-zinc-800 hover:bg-zinc-800/50 text-zinc-300 hover:text-white"
            onClick={() => setIsAddingRoute(true)}
          >
            Add Call Route
          </Button>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline"
          onClick={onBack}
          className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-800"
        >
          Back
        </Button>
        <Button 
          className="bg-cyan-500 hover:bg-cyan-600"
          onClick={onNext}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <AddRouteDialog
        open={isAddingRoute}
        onOpenChange={setIsAddingRoute}
        onAdd={handleAddRoute}
      />
    </div>
  );
}