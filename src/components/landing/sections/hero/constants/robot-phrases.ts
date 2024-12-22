export const ROBOT_PHRASES = {
  left: [
    "AI Call Agent",
    "Your virtual assistant",
    "Smart call handling!"
  ],
  middle: [
    "At your service, boss!",
    "Always ready!",
    "Effortless calls!"
  ],
  right: [
    "Your wish, my command!",
    "Just say the word!",
    "Instant solutions!"
  ]
} as const;

export type RobotPosition = keyof typeof ROBOT_PHRASES;