// src/i18n/request.ts
// next-intl reads this file to determine the user's locale on each request.
// The function getRequestConfig is called server-side for every page render.

import { getRequestConfig } from 'next-intl/server';

// The locales we support
export const locales = ['en', 'ur', 'ar'] as const;
export type Locale = (typeof locales)[number];

// Default locale when none is specified
export const defaultLocale: Locale = 'en';

// Locales that use right-to-left text direction
export const rtlLocales: Locale[] = ['ur', 'ar'];

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is the locale extracted from the URL segment (e.g. "en")
  const locale = (await requestLocale) as Locale;

  return {
    locale,
    // Dynamically import the correct translation JSON file
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
