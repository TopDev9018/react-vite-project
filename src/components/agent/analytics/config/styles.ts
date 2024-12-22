import { CHART_COLORS } from './colors';

export const CHART_STYLES = {
  tooltip: {
    contentStyle: {
      backgroundColor: '#18181b',
      border: '1px solid #27272a',
    },
  },
  axis: {
    stroke: CHART_COLORS.neutral,
    fontSize: 12,
  },
  grid: {
    stroke: CHART_COLORS.grid,
    strokeDasharray: '3 3',
  },
} as const;