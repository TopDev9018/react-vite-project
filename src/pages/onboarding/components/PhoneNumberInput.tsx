import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { COUNTRY_CODES } from '../constants/countries';
import { formatPhoneNumber } from '@/lib/utils';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhoneNumberInput({ value, onChange }: PhoneNumberInputProps) {
  const [countryCode, setCountryCode] = useState('1'); // Default to US

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');
    if (cleaned.length <= 10) { // Limit to 10 digits
      onChange(cleaned);
    }
  };

  return (
    <div className="space-y-4">
      <Select defaultValue={countryCode} onValueChange={setCountryCode}>
        <SelectTrigger className="h-12 bg-zinc-900 border-zinc-800">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {COUNTRY_CODES.find(c => c.code === countryCode)?.flag}
              </span>
              <span>+{countryCode}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {COUNTRY_CODES.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span>{country.name}</span>
                <span className="text-gray-400">+{country.code}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="tel"
        placeholder="(555) 123-4567"
        value={formatPhoneNumber(value)}
        onChange={handlePhoneChange}
        className="h-12 bg-zinc-900 border-zinc-800 text-lg"
      />
    </div>
  );
}