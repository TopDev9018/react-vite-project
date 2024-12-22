import { Search, Users, Facebook, Youtube, Megaphone, HelpCircle } from 'lucide-react';

export const REFERRAL_SOURCES = [
  {
    id: 'search',
    label: 'Internet search',
    icon: <Search className="w-5 h-5" />
  },
  {
    id: 'word-of-mouth',
    label: 'Word of mouth',
    icon: <Users className="w-5 h-5" />
  },
  {
    id: 'social',
    label: 'Facebook/Instagram Ad',
    icon: <Facebook className="w-5 h-5" />
  },
  {
    id: 'youtube',
    label: 'Youtube Ad',
    icon: <Youtube className="w-5 h-5" />
  },
  {
    id: 'advertisement',
    label: 'Other advertisement',
    icon: <Megaphone className="w-5 h-5" />
  },
  {
    id: 'other',
    label: 'Other',
    icon: <HelpCircle className="w-5 h-5" />
  }
] as const;

export type ReferralSourceId = typeof REFERRAL_SOURCES[number]['id'];