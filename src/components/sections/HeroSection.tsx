'use client';
// src/components/sections/HeroSection.tsx
// Two-column responsive hero featuring real online class photography and trust cues.

import { useState, useEffect } from 'react';
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
  Video,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { cn, getDirection } from '@/lib/utils';

interface StatProps {
  icon: React.ReactNode;
  value: string;
}

function StatBadge({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2">
      <span className="text-brand-gold">{icon}</span>
      <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">{value}</span>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = getDirection(locale) === 'rtl';

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center',
        'bg-brand-primary bg-geometric-pattern overflow-hidden'
      )}
    >
      {/* Ambient background glow circles */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -end-32 h-[32rem] w-[32rem] rounded-full bg-brand-gold/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -start-32 h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="container-brand relative z-10 pt-28 pb-32">
        <div
          className={cn(
            'transition-all duration-700 ease-out',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── Left Column: Value Proposition & CTAs (Cols 1-7) ── */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-start">

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
                <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
                <span className="text-white/95 text-xs sm:text-sm font-medium">
                  {t('badge')}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15]">
                {t('headline')}{' '}
                <span className="text-brand-gold relative inline-block">
                  {t('headlineAccent')}
                  <svg
                    className="absolute -bottom-2 inset-x-0 w-full text-brand-gold/40"
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
              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('subheadline')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href={`/${locale}/book-trial`}
                  className={cn(
                    'inline-flex items-center gap-2',
                    'bg-brand-gold text-white font-bold',
                    'px-7 py-4 rounded-xl text-sm sm:text-base',
                    'hover:bg-brand-gold-light transition-all duration-200',
                    'shadow-gold hover:shadow-lg hover:-translate-y-0.5',
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
                    'border-2 border-white/40 text-white font-semibold',
                    'px-7 py-4 rounded-xl text-sm sm:text-base',
                    'hover:bg-white/10 hover:border-white/60 transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                  )}
                >
                  {t('ctaSecondary')}
                </Link>
              </div>

              {/* Trust Features Checklist */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-white/80 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Free 30-Min Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" /> Male & Female Teachers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" /> No Credit Card Needed
                </span>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-4">
                <StatBadge icon={<Users className="h-4 w-4" />} value={t('stats.students')} />
                <StatBadge icon={<Globe2 className="h-4 w-4" />} value={t('stats.countries')} />
                <StatBadge icon={<GraduationCap className="h-4 w-4" />} value={t('stats.teachers')} />
                <StatBadge icon={<Star className="h-4 w-4" />} value={t('stats.experience')} />
              </div>

            </div>

            {/* ── Right Column: Hero Real Quran Class Photography (Cols 8-12) ── */}
            <div className="lg:col-span-5 relative flex items-center justify-center">

              {/* Ambient Glow behind image */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-brand-gold/20 rounded-full blur-3xl scale-95"
              />

              {/* Main Image Container */}
              <div className="relative z-10 w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden p-2 group">
                <Image
                  src="/images/hero-quran-class.png"
                  alt="Online Quran class on Google Meet with teacher and young student"
                  width={680}
                  height={520}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Badge 1: Live Class Status (Top Left) */}
                <div className="absolute top-6 start-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-brand border border-gray-100 flex items-center gap-3 animate-fade-in">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center relative">
                    <Video className="w-5 h-5" />
                    <span className="absolute -top-1 -end-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-charcoal">
                      Live 1-on-1 Class
                    </span>
                    <span className="block text-[11px] text-gray-500 font-medium">
                      Google Meet · Interactive
                    </span>
                  </div>
                </div>

                {/* Floating Badge 2: Verified Teacher (Bottom Right) */}
                <div className="absolute bottom-6 end-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-brand border border-gray-100 flex items-center gap-3 animate-fade-in">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-brand-gold flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                      <span className="text-xs font-bold text-brand-charcoal">5.0 Star Rating</span>
                    </div>
                    <span className="block text-[11px] text-gray-500 font-medium">
                      Certified Male & Female Qaris
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Wave Separator ── */}
      <div className="absolute bottom-0 inset-x-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
