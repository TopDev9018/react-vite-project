import { useState } from 'react';
import { CreateAgentForm } from './CreateAgentForm';
import { AgentPreview } from './AgentPreview';

export function CreateAgentPage() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <CreateAgentForm onPreviewToggle={() => setShowPreview(!showPreview)} />
      </div>
      
      {/* Preview Panel - Fixed on mobile, static on desktop */}
      <div className={`
        fixed inset-0 z-50 lg:relative lg:z-0 lg:w-[400px] lg:block
        ${showPreview ? 'block' : 'hidden'}
      `}>
        <div 
          className="absolute inset-0 bg-black/50 lg:hidden" 
          onClick={() => setShowPreview(false)} 
        />
        <div className="absolute right-0 inset-y-0 w-full max-w-[400px] lg:w-full lg:static">
          <AgentPreview onClose={() => setShowPreview(false)} />
        </div>
      </div>
    </div>
  );
}