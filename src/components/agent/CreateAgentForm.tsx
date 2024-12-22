import { useState } from 'react';
import { ChevronRight, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { IdentitySection } from './sections/IdentitySection';
import { BehaviorSection } from './sections/BehaviorSection';
import { KnowledgeSection } from './sections/KnowledgeSection';
import { RoutingSection } from './sections/RoutingSection';
import { ActionsSection } from './sections/ActionsSection';
import { DeployPhoneSection } from './sections/DeployPhoneSection';
import { DeployWebSection } from './sections/DeployWebSection';

interface CreateAgentFormProps {
  onPreviewToggle: () => void;
}

export function CreateAgentForm({ onPreviewToggle }: CreateAgentFormProps) {
  const [step, setStep] = useState('identity');

  return (
    <div className="w-full max-w-[100vw] overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold">YOUR AGENT</h1>
          <Button 
            variant="outline" 
            onClick={onPreviewToggle}
            className="lg:hidden"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-8">
          {/* Navigation */}
          <div className="overflow-x-auto lg:overflow-visible -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
            <div className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
              {[
                { id: 'identity', label: 'Identity' },
                { id: 'behavior', label: 'Behavior' },
                { id: 'knowledge', label: 'Knowledge' },
                { id: 'routing', label: 'Call Routing' },
                { id: 'actions', label: 'Actions' },
                { id: 'deploy-phone', label: 'Deploy · Phone' },
                { id: 'deploy-web', label: 'Deploy · Web' }
              ].map((item) => (
                <Button 
                  key={item.id}
                  variant="ghost" 
                  className={cn(
                    "justify-start whitespace-nowrap px-4 py-2 h-auto",
                    step === item.id && "bg-cyan-500/10 text-cyan-500"
                  )}
                  onClick={() => setStep(item.id)}
                >
                  {item.label}
                  {step === item.id && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className="space-y-8 max-w-3xl mx-auto">
              {step === 'identity' && (
                <IdentitySection onNext={() => setStep('behavior')} />
              )}
              {step === 'behavior' && (
                <BehaviorSection 
                  onNext={() => setStep('knowledge')}
                  onBack={() => setStep('identity')}
                />
              )}
              {step === 'knowledge' && (
                <KnowledgeSection 
                  onNext={() => setStep('routing')}
                  onBack={() => setStep('behavior')}
                />
              )}
              {step === 'routing' && (
                <RoutingSection
                  onNext={() => setStep('actions')}
                  onBack={() => setStep('knowledge')}
                />
              )}
              {step === 'actions' && (
                <ActionsSection 
                  onNext={() => setStep('deploy-phone')}
                  onBack={() => setStep('routing')}
                />
              )}
              {step === 'deploy-phone' && (
                <DeployPhoneSection 
                  onNext={() => setStep('deploy-web')}
                  onBack={() => setStep('actions')}
                />
              )}
              {step === 'deploy-web' && (
                <DeployWebSection 
                  onBack={() => setStep('deploy-phone')}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}