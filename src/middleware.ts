// src/middleware.ts
// Next.js middleware runs before every request.
// next-intl uses it to detect the user's locale and redirect if needed.
// e.g. /about → /en/about (redirects to default locale)

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale,
  // Always include the locale prefix in the URL (/en/, /ur/, /ar/)
  localePrefix: 'always',
});

// Apply middleware to all routes EXCEPT Next.js internals and static files
export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
