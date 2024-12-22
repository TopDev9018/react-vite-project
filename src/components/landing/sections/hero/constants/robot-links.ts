export const ROBOT_LINKS = {
  left: {
    href: '#industries',
    label: 'Explore Features'
  },
  middle: {
    href: '/pricing',
    label: 'View Pricing'
  },
  right: {
    href: '#demo',
    label: 'Watch Demo'
  }
} as const;

export type RobotLink = typeof ROBOT_LINKS[keyof typeof ROBOT_LINKS];