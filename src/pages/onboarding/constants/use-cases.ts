export const USE_CASES = [
  { 
    id: 'appointments',
    label: 'Schedule appointments',
    description: 'Let AI handle booking and managing appointments'
  },
  {
    id: 'outbound',
    label: 'Place automated outbound calls',
    description: 'Proactively reach out to customers'
  },
  {
    id: 'contact-info',
    label: 'Gather contact information',
    description: 'Collect and verify customer details'
  },
  {
    id: 'faq',
    label: 'Answer frequently asked questions',
    description: 'Handle common inquiries automatically'
  },
  {
    id: 'integration',
    label: 'Integrate with other software',
    description: 'Connect with your existing tools and systems'
  },
  {
    id: 'routing',
    label: 'Route & transfer calls',
    description: 'Direct calls to the right department or person'
  }
] as const;

export type UseCaseId = typeof USE_CASES[number]['id'];