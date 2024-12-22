import { useState, useEffect } from 'react';
import { ROBOT_PHRASES, RobotPosition } from '../constants/robot-phrases';

export function useTextCarousel(position: RobotPosition) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ROBOT_PHRASES[position];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % phrases.length);
    }, 3000 + Math.random() * 1000); // Random delay between 3-4 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return {
    currentPhrase: phrases[currentIndex],
    totalPhrases: phrases.length,
    currentIndex
  };
}