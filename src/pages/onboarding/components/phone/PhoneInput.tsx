import { Input } from '@/components/ui/input';
import { formatPhoneNumber } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhoneInput({ value, onChange }: PhoneInputProps) {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');
    if (cleaned.length <= 10) { // Limit to 10 digits
      onChange(cleaned);
    }
  };

  return (
    <Input
      type="tel"
      placeholder="(555) 123-4567"
      value={formatPhoneNumber(value)}
      onChange={handlePhoneChange}
      className="h-12 bg-blue-950/50 border-white/10 text-lg text-white placeholder:text-blue-200/30 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-colors"
    />
  );
}