'use client';
// src/components/ui/LanguageSwitcher.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  🎯 THIS IS YOUR FIRST CODING EXERCISE — See Task 01 checklist for details.
//
//  Below is the SKELETON of the LanguageSwitcher component.
//  Read the teaching notes, understand the props and structure,
//  then implement the missing parts marked with TODO comments.
// ─────────────────────────────────────────────────────────────────────────────
//
// PURPOSE:
//   A dropdown button that lets the user switch between English, Urdu, Arabic.
//   When clicked, it navigates to the same page in the new locale.
//
// PROPS:
//   compact — boolean (optional, default false)
//             When true: show only the flag emoji (for mobile nav)
//             When false: show flag + language name (for desktop nav)
//
// HOW next-intl LOCALE SWITCHING WORKS:
//   1. We read the current locale with useLocale()          → e.g. 'en'
//   2. We read the current path with usePathname()          → e.g. '/en/courses'
//   3. We build the new path by replacing the locale prefix → '/ar/courses'
//   4. We navigate using router.push(newPath)
//
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LocaleConfig } from '@/types';

// ─── Locale Configuration ─────────────────────────────────────────────────────

/**
 * Configuration for each supported locale.
 *
 * TypeScript interface reminder:
 *   LocaleConfig has: code, label, dir, flag
 *   This array is typed as LocaleConfig[] so TypeScript checks our objects.
 */
const LOCALES: LocaleConfig[] = [
  { code: 'en', label: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ur', label: 'اردو',    dir: 'rtl', flag: '🇵🇰' },
  { code: 'ar', label: 'العربية', dir: 'rtl', flag: '🇸🇦' },
];

// ─── Props Interface ──────────────────────────────────────────────────────────

interface LanguageSwitcherProps {
  /**
   * When true, only show the flag emoji (compact mobile mode).
   * When false (default), show flag + language name.
   */
  compact?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const router   = useRouter();
  const pathname = usePathname();
  const locale   = useLocale();

  // State: is the dropdown open?
  // TODO (Exercise A): Declare a useState variable called `isOpen` (boolean, default false)
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Ref: a reference to the dropdown container element.
  // We use this to detect clicks OUTSIDE the dropdown and close it.
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the config for the currently active locale.
  // Array.find() returns the first element that matches the condition.
  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  // ── Close dropdown when user clicks outside ──────────────────────────────
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If the click was outside our container div, close the dropdown.
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Locale Switch Handler ────────────────────────────────────────────────

  /**
   * Switches the app to a new locale by navigating to the same page
   * with a different locale prefix.
   *
   * Example:
   *   Current path:    /en/courses
   *   Selected locale: ar
   *   New path:        /ar/courses
   *
   * @param newLocale — the locale code to switch to ('en' | 'ur' | 'ar')
   */
  function handleLocaleChange(newLocale: string) {
    // TODO (Exercise B):
    // 1. Remove the current locale prefix from pathname
    //    Hint: pathname is '/en/courses', we want '/courses'
    //    Use: pathname.replace(`/${locale}`, '')
    //
    // 2. Build the new path: `/${newLocale}${pathWithoutLocale}`
    //    But if pathWithoutLocale is empty, use '/' instead.
    //
    // 3. Navigate: router.push(newPath)
    //
    // 4. Close the dropdown: setIsOpen(false)
    //
    // ── IMPLEMENT THIS ──────────────────────────────────────
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
    // ─────────────────────────────────────────────────────────
  }

  return (
    // The `ref` lets us detect outside clicks.
    <div ref={containerRef} className="relative">

      {/* ── Toggle Button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5',
          'text-sm font-medium text-brand-charcoal',
          'hover:bg-gray-100 transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span role="img" aria-label={currentLocale.label}>
          {currentLocale.flag}
        </span>

        {/* TODO (Exercise C):
            Only render the language label when `compact` is false.
            Hint: use a conditional — {!compact && <span>...</span>}
        */}
        {!compact && (
          <span className="hidden sm:inline">{currentLocale.label}</span>
        )}

        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* ── Dropdown Menu ── */}
      {isOpen && (
        <div
          className={cn(
            'absolute top-full mt-1 z-50',
            'w-40 rounded-xl bg-white shadow-brand-lg border border-gray-100',
            'py-1 overflow-hidden',
            // Position dropdown on the correct side for RTL/LTR
            'end-0'
          )}
          role="listbox"
          aria-label="Language options"
        >
          {LOCALES.map((localeOption) => (
            <button
              key={localeOption.code}
              role="option"
              aria-selected={localeOption.code === locale}
              onClick={() => handleLocaleChange(localeOption.code)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5',
                'text-sm transition-colors duration-150',
                'hover:bg-brand-ivory',
                localeOption.code === locale
                  ? 'text-brand-primary font-semibold bg-brand-ivory/60'
                  : 'text-brand-charcoal'
              )}
              // Set the font direction correctly for each option label
              dir={localeOption.dir}
            >
              <span role="img" aria-hidden="true">{localeOption.flag}</span>
              <span>{localeOption.label}</span>
              {/* Show a checkmark next to the active locale */}
              {localeOption.code === locale && (
                <span className="ms-auto text-brand-primary text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
