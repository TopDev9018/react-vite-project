import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './components/ChartContainer';
import { CustomTooltip } from './components/CustomTooltip';
import { peakTimeData } from './config/mock-data';
import { CHART_COLORS, CHART_STYLES } from './config/chart-config';

export function PeakTimesChart() {
  return (
    <ChartContainer title="Peak Times">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={peakTimeData}>
          <CartesianGrid {...CHART_STYLES.grid} />
          <XAxis 
            dataKey="time" 
            stroke={CHART_STYLES.axis.stroke}
            fontSize={CHART_STYLES.axis.fontSize}
          />
          <YAxis 
            stroke={CHART_STYLES.axis.stroke}
            fontSize={CHART_STYLES.axis.fontSize}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="calls" 
            fill={CHART_COLORS.primary} 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}