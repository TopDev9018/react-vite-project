export const CHART_COLORS = {
  primary: '#06b6d4',
  secondary: '#22d3ee',
  error: '#dc2626',
  neutral: '#71717a',
  grid: '#27272a',
} as const;

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