import { useNavigate } from 'react-router-dom';
import { RobotLink } from '../constants/robot-links';

export function useRobotNavigation() {
  const navigate = useNavigate();

  const handleNavigation = (link: RobotLink) => {
    if (link.href.startsWith('#')) {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate(link.href);
    }
  };

  return { handleNavigation };
}