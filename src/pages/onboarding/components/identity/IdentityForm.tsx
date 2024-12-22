```tsx
import { NameInput } from './NameInput';
import { VoiceSelector } from './VoiceSelector';
import { AvatarUploader } from './AvatarUploader';
import { PrivacySelector } from './PrivacySelector';

interface IdentityFormProps {
  name: string;
  voice: string;
  speed: string;
  privacy: string;
  onNameChange: (value: string) => void;
  onVoiceChange: (value: string) => void;
  onSpeedChange: (value: string) => void;
  onPrivacyChange: (value: string) => void;
}

export function IdentityForm({
  name,
  voice,
  speed,
  privacy,
  onNameChange,
  onVoiceChange,
  onSpeedChange,
  onPrivacyChange
}: IdentityFormProps) {
  return (
    <div className="space-y-8">
      <NameInput value={name} onChange={onNameChange} />
      
      <VoiceSelector
        voice={voice}
        speed={speed}
        onVoiceChange={onVoiceChange}
        onSpeedChange={onSpeedChange}
      />
      
      <AvatarUploader />
      
      <PrivacySelector value={privacy} onChange={onPrivacyChange} />
    </div>
  );
}
```