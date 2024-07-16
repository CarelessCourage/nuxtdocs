import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function percentage(value: number, max: number): number {
  const percentage = (value / max) * 100
  return Math.min(Math.max(percentage, 8), 100) // Ensures the percentage is between 0 and 100
}
