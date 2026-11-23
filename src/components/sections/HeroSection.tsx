'use client';
// src/components/sections/HeroSection.tsx
//
// ─── TEACHING NOTE ───────────────────────────────────────────────────────────
// This is a Client Component because we use an animation state (useState)
// to fade-in content after mount. Everything else could be a Server Component.
//
// Key concepts demonstrated:
// • useTranslations() — reads strings from en.json / ur.json / ar.json
// • useLocale()       — returns current locale: 'en' | 'ur' | 'ar'
// • useEffect()       — runs side-effects after the component mounts
// • Tailwind classes  — responsive, RTL-aware styling
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, ArrowLeft, Star, Users, Globe2, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getDirection } from '@/lib/utils';

// ─── Stat Card Sub-component ──────────────────────────────────────────────────

interface StatProps {
  icon: React.ReactNode;
  value: string;
}

function StatBadge({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
      <span className="text-brand-gold">{icon}</span>
      <span className="text-white text-sm font-semibold">{value}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  const t = useTranslations('hero');
  const navT = useTranslations('nav');
  const locale = useLocale();
  const isRTL = getDirection(locale) === 'rtl';

  // We use this state to trigger a CSS fade-in after the component mounts.
  // Before mount: visible = false (opacity-0)
  // After mount:  visible = true  (opacity-100 + translateY 0)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay makes the animation feel intentional, not jarring.
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Choose the correct arrow direction based on RTL/LTR
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center',
        'bg-brand-primary bg-geometric-pattern overflow-hidden'
      )}
    >
      {/* ── Decorative background circles ── */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -end-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -start-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      <div className="container-brand relative z-10 py-32">
        <div
          className={cn(
            'transition-all duration-700 ease-out',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Star className="h-4 w-4 text-brand-gold fill-brand-gold" />
            <span className="text-white/90 text-sm font-medium">{t('badge')}</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-3xl mb-6">
            {t('headline')}{' '}
            <span className="text-brand-gold">{t('headlineAccent')}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-10">
            {t('subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href={`/${locale}/book-trial`}
              className={cn(
                'inline-flex items-center gap-2',
                'bg-brand-gold text-white font-semibold',
                'px-7 py-4 rounded-xl text-base',
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
                'px-7 py-4 rounded-xl text-base',
                'hover:bg-white/10 hover:border-white/60 transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
              )}
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-3">
            <StatBadge icon={<Users className="h-4 w-4" />}    value={t('stats.students')} />
            <StatBadge icon={<Globe2 className="h-4 w-4" />}   value={t('stats.countries')} />
            <StatBadge icon={<GraduationCap className="h-4 w-4" />} value={t('stats.teachers')} />
            <StatBadge icon={<Star className="h-4 w-4" />}     value={t('stats.experience')} />
          </div>

        </div>
      </div>

      {/* ── Bottom wave separator ── */}
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
