// src/app/[locale]/layout.tsx
// Root layout for all locale-prefixed routes.
// This component wraps every page in the application.

import type { Metadata } from 'next';
import { Inter, Playfair_Display, Noto_Naskh_Arabic, Noto_Nastaliq_Urdu } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { getDirection } from '@/lib/utils';
import { EducationalOrganizationJsonLd } from '@/components/seo/JsonLd';
import '@/app/globals.css';

// ─── Font Loading ─────────────────────────────────────────────────────────────
// next/font downloads fonts at build time and serves them from your domain.
// This avoids external network requests and improves privacy + performance.

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',    // CSS variable used in tailwind.config.js
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-naskh',
  display: 'swap',
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  variable: '--font-noto-nastaliq',
  display: 'swap',
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
// generateMetadata is called by Next.js for each locale.
// It sets the <title> and <meta> tags for SEO.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: 'AyatBridge Academy — Online Quran Classes',
      // %s is replaced by page-specific titles
      template: '%s | AyatBridge Academy',
    },
    description:
      'Professional online Quran education for children and adults. Qualified male and female teachers. USA, UK & Europe.',
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    ),
    alternates: {
      // Tell search engines about all language versions of this page
      languages: {
        'en': '/en',
        'ur': '/ur',
        'ar': '/ar',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'AyatBridge Academy',
      locale: locale,
    },
  };
}

// ─── Static Params ────────────────────────────────────────────────────────────
// Tells Next.js which locale segments to pre-render at build time.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ─── Layout Component ─────────────────────────────────────────────────────────

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  // Reject any URL that isn't a supported locale (e.g. /xx/...)
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Load the translation messages for this locale (server-side)
  const messages = await getMessages();

  // Determine text direction based on locale
  const dir = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable} ${notoNaskh.variable} ${notoNastaliq.variable}`}
    >
      <body className="bg-white text-brand-charcoal antialiased">
        <EducationalOrganizationJsonLd />
        {/*
          NextIntlClientProvider makes translations available to Client Components.
          Server Components can call useTranslations() directly without this.
        */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
