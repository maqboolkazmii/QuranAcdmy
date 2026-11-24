'use client';
// src/components/sections/HeroSection.tsx
// Full-screen cinematic hero with real Islamic study background, gradient overlay, and high-converting CTAs.

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import {
  ArrowRight,
  ArrowLeft,
  Star,
  Users,
  Globe2,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  Video,
} from 'lucide-react';
import { cn, getDirection } from '@/lib/utils';

interface StatProps {
  icon: React.ReactNode;
  value: string;
}

function StatBadge({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2 shadow-sm">
      <span className="text-brand-gold">{icon}</span>
      <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">{value}</span>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = getDirection(locale) === 'rtl';

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── 1. Full-Screen Background Image ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="AyatBridge Academy Online Quran Class Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[80%_center] lg:object-right scale-105"
        />
      </div>

      {/* ── 2. Cinematic Gradient Overlay ── */}
      {/* Base dark tint across the image for text clarity */}
      <div className="absolute inset-0 bg-brand-primary-dark/65 -z-10" />

      {/* Directional gradient: Deep solid emerald on the left side, fading smoothly towards the teacher */}
      <div
        className={cn(
          'absolute inset-0 -z-10',
          isRTL
            ? 'bg-gradient-to-l from-brand-primary-dark/95 via-brand-primary-dark/85 to-transparent'
            : 'bg-gradient-to-r from-brand-primary-dark/95 via-brand-primary-dark/80 to-transparent'
        )}
      />

      {/* Subtle top & bottom shadow gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-primary-dark/80 -z-10" />

      {/* ── 3. Foreground Content (Strictly aligned with Navbar Logo) ── */}
      <div className="container-brand w-full relative z-10 pt-32 pb-28">
        <div className="max-w-xl lg:max-w-[34rem] xl:max-w-[38rem] space-y-6 text-start">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-brand-gold/40 rounded-full px-4 py-1.5 shadow-lg">
            <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
            <span className="text-white font-medium text-xs sm:text-sm tracking-wide">
              {t('badge')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.18] drop-shadow-md text-start">
            {t('headline')}{' '}
            <span className="text-brand-gold relative inline-block">
              {t('headlineAccent')}
              <svg
                className="absolute -bottom-2 inset-x-0 w-full text-brand-gold/50"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2 150 2 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed drop-shadow-sm text-start">
            {t('subheadline')}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4 pt-1">
            <Link
              href={`/${locale}/book-trial`}
              className={cn(
                'inline-flex items-center gap-2',
                'bg-brand-gold text-white font-bold',
                'px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base',
                'hover:bg-brand-gold-light transition-all duration-200',
                'shadow-gold hover:shadow-2xl hover:-translate-y-0.5',
                'focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2'
              )}
            >
              {t('ctaPrimary')}
              <ArrowIcon className="h-5 w-5" />
            </Link>

            <Link
              href={`/${locale}/courses`}
              className={cn(
                'inline-flex items-center gap-2',
                'bg-black/30 backdrop-blur-md border-2 border-white/40 text-white font-semibold',
                'px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm sm:text-base',
                'hover:bg-white/20 hover:border-white/70 transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
              )}
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Trust Value Checklist */}
          <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-white/90 pt-1">
            <span className="flex items-center gap-1.5 drop-shadow">
              <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" /> Free 30-Minute Trial
            </span>
            <span className="flex items-center gap-1.5 drop-shadow">
              <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" /> Male & Female Teachers
            </span>
            <span className="flex items-center gap-1.5 drop-shadow">
              <Video className="w-4 h-4 text-brand-gold flex-shrink-0" /> Live on Google Meet
            </span>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-start gap-2 pt-2">
            <StatBadge icon={<Users className="h-4 w-4" />} value={t('stats.students')} />
            <StatBadge icon={<Globe2 className="h-4 w-4" />} value={t('stats.countries')} />
            <StatBadge icon={<GraduationCap className="h-4 w-4" />} value={t('stats.teachers')} />
            <StatBadge icon={<Star className="h-4 w-4" />} value={t('stats.experience')} />
          </div>

        </div>
      </div>

      {/* ── 4. Elegant Bottom Wave Separator ── */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-16 text-brand-ivory fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,35 C320,70 960,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

    </section>
  );
}
