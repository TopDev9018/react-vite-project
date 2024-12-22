import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './components/ChartContainer';
import { CustomTooltip } from './components/CustomTooltip';
import { callVolumeData } from './config/mock-data';
import { CHART_COLORS } from './config/colors';
import { CHART_STYLES } from './config/styles';

export function CallVolumeChart() {
  return (
    <ChartContainer title="Call Volume">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={callVolumeData}>
          <CartesianGrid {...CHART_STYLES.grid} />
          <XAxis 
            dataKey="date" 
            stroke={CHART_STYLES.axis.stroke}
            fontSize={CHART_STYLES.axis.fontSize}
          />
          <YAxis 
            stroke={CHART_STYLES.axis.stroke}
            fontSize={CHART_STYLES.axis.fontSize}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="inbound" 
            stroke={CHART_COLORS.primary} 
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.primary }}
          />
          <Line 
            type="monotone" 
            dataKey="outbound" 
            stroke={CHART_COLORS.secondary} 
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.secondary }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}