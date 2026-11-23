// src/components/layout/Footer.tsx
// Server Component — no browser APIs needed, so no 'use client'.

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { BookOpen, Mail, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: useTranslations('nav')('home'),     href: `/${locale}` },
    { label: useTranslations('nav')('about'),    href: `/${locale}/about` },
    { label: useTranslations('nav')('teachers'), href: `/${locale}/teachers` },
    { label: useTranslations('nav')('pricing'),  href: `/${locale}/pricing` },
    { label: useTranslations('nav')('contact'),  href: `/${locale}/contact` },
  ];

  const courseLinks = [
    { label: 'Noorani Qaida',           href: `/${locale}/courses/noorani-qaida` },
    { label: 'Quran with Tajweed',      href: `/${locale}/courses/tajweed` },
    { label: 'Quran Memorization',      href: `/${locale}/courses/hifz` },
    { label: 'Islamic Studies',         href: `/${locale}/courses/islamic-studies` },
    { label: 'Daily Duas & Salah',      href: `/${locale}/courses/duas-salah` },
  ];

  const legalLinks = [
    { label: t('privacyPolicy'),   href: `/${locale}/privacy-policy` },
    { label: t('termsConditions'), href: `/${locale}/terms` },
    { label: t('refundPolicy'),    href: `/${locale}/refund-policy` },
  ];

  return (
    <footer className="bg-brand-charcoal text-gray-300">

      {/* ── Main Footer Grid ── */}
      <div className="container-brand py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-serif font-bold text-white text-base leading-none">
                  AyatBridge
                </span>
                <span className="block text-xs text-brand-gold font-medium tracking-wide">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t('tagline')}
            </p>
            {/* Contact shortcuts */}
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@ayatbridge.academy'}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@ayatbridge.academy
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('courses')}
            </h3>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-700">
        <div className="container-brand py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} AyatBridge Academy. {t('allRightsReserved')}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            {t('madeWith')}
            <Heart className="h-3 w-3 text-brand-gold fill-brand-gold" />
            for the Ummah
          </p>
        </div>
      </div>

    </footer>
  );
}
