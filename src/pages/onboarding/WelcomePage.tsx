import { WelcomeBackground } from './components/welcome/WelcomeBackground';
import { WelcomeContent } from './components/welcome/WelcomeContent';

export function WelcomePage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <WelcomeBackground />
      <WelcomeContent />
    </div>
  );
}