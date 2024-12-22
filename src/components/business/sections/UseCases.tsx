import { AgentCard } from '../cards/AgentCard';
import { AGENT_TEMPLATES } from '../data/agent-templates';

export function UseCases() {
  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AGENT_TEMPLATES.map((template) => (
            <AgentCard key={template.id} {...template} />
          ))}
        </div>
      </div>
    </div>
  );
}