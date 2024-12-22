export const CALL_VOLUMES = [
  { id: '0-100', label: '0 - 100' },
  { id: '101-500', label: '101 - 500' },
  { id: '501-2000', label: '501 - 2,000' },
  { id: '2001-10000', label: '2,001 - 10,000' },
  { id: '10000+', label: '10,000+' }
] as const;

export type CallVolumeId = typeof CALL_VOLUMES[number]['id'];