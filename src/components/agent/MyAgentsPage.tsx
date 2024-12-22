import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { CreateAgentCard } from './cards/CreateAgentCard';
import { AnalyticsCard } from './analytics/AnalyticsCard';
import { CallVolumeChart } from './analytics/CallVolumeChart';
import { PeakTimesChart } from './analytics/PeakTimesChart';
import { SuccessRateChart } from './analytics/SuccessRateChart';
import { Clock, PhoneCall, PhoneOutgoing, BarChart } from 'lucide-react';

export function MyAgentsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">My Agents</h1>
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600"
            onClick={() => navigate('/app/create')}
          >
            + Create New Agent
          </Button>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <AnalyticsCard
            title="Duration"
            value="124:45"
            subtitle="Total minutes this month"
            icon={<Clock className="h-5 w-5 text-cyan-500" />}
          />
          <AnalyticsCard
            title="Inbound"
            value="847"
            subtitle="Calls received"
            icon={<PhoneCall className="h-5 w-5 text-cyan-500" />}
          />
          <AnalyticsCard
            title="Outbound"
            value="523"
            subtitle="Calls made"
            icon={<PhoneOutgoing className="h-5 w-5 text-cyan-500" />}
          />
          <AnalyticsCard
            title="Success Rate"
            value="92%"
            subtitle="Call resolution rate"
            icon={<BarChart className="h-5 w-5 text-cyan-500" />}
          />
        </div>

        {/* Create Agent Card */}
        <div className="mb-8">
          <CreateAgentCard onClick={() => navigate('/app/create')} />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CallVolumeChart />
          <PeakTimesChart />
          <SuccessRateChart />
        </div>
      </div>
    </div>
  );
}