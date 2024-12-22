import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartContainer } from './components/ChartContainer';
import { CustomTooltip } from './components/CustomTooltip';
import { successRateData } from './config/mock-data';
import { CHART_COLORS } from './config/chart-config';

const COLORS = [CHART_COLORS.primary, CHART_COLORS.error, CHART_COLORS.neutral];

export function SuccessRateChart() {
  return (
    <ChartContainer title="Success Rate">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={successRateData}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {successRateData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}