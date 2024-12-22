import { CountryCodeSelector } from './CountryCodeSelector';
import { PhoneInput } from './PhoneInput';

interface PhoneVerificationFormProps {
  phoneNumber: string;
  countryCode: string;
  onPhoneChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
}

export function PhoneVerificationForm({
  phoneNumber,
  countryCode,
  onPhoneChange,
  onCountryCodeChange
}: PhoneVerificationFormProps) {
  return (
    <div className="space-y-4">
      <CountryCodeSelector 
        value={countryCode} 
        onChange={onCountryCodeChange} 
      />
      <PhoneInput 
        value={phoneNumber} 
        onChange={onPhoneChange} 
      />
    </div>
  );
}