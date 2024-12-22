import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Style utilities
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}