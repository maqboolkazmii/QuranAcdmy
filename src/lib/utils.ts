// src/lib/utils.ts
// Utility functions used throughout the project.

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn() — the standard className helper.
 *
 * Combines multiple class strings safely, resolving Tailwind conflicts.
 *
 * Example:
 *   cn('px-4 py-2', isActive && 'bg-brand-primary', 'px-6')
 *   // → 'py-2 bg-brand-primary px-6'   (px-6 wins over px-4)
 *
 * @param inputs - Any number of class values, booleans, objects, arrays
 * @returns A single merged className string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Returns the correct text-direction attribute value for a locale.
 * Used in <html dir="..."> and RTL-aware components.
 */
export function getDirection(locale: string): 'ltr' | 'rtl' {
  return ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr';
}
