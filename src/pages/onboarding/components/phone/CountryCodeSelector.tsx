import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COUNTRY_CODES } from '../../constants/countries';

interface CountryCodeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function CountryCodeSelector({ value, onChange }: CountryCodeSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-12 bg-blue-950/50 border-white/10 text-white">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {COUNTRY_CODES.find(c => c.code === value)?.flag}
            </span>
            <span>+{value}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {COUNTRY_CODES.map((country, index) => (
          <SelectItem key={`${country.code}-${country.name}-${index}`} value={country.code}>
            <div className="flex items-center gap-2">
              <span className="text-lg">{country.flag}</span>
              <span>{country.name}</span>
              <span className="text-gray-400">+{country.code}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}