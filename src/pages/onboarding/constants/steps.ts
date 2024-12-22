export const ONBOARDING_STEPS = [
  { id: 'welcome', label: 'Welcome', path: '/onboarding' },
  { id: 'business', label: 'Business Details', path: '/onboarding/business' },
  { id: 'volume', label: 'Call Volume', path: '/onboarding/volume' },
  { id: 'agent', label: 'Agent Setup', path: '/onboarding/agent' },
  { id: 'phone', label: 'Phone Verification', path: '/onboarding/phone' },
  { id: 'tutorial', label: 'Tutorial', path: '/onboarding/tutorial' },
  { id: 'referral', label: 'Referral', path: '/onboarding/referral' }
] as const;