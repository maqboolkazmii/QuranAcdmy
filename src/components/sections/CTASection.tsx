// src/components/sections/CTASection.tsx
// The final call-to-action banner at the bottom of the homepage.
// Server Component.

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const t      = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-brand-primary py-20">

      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="container-brand relative z-10 text-center">

        {/* Arabic calligraphy decorative text */}
        <p className="font-arabic text-brand-gold/60 text-4xl mb-6" aria-hidden="true">
          بِسْمِ اللَّهِ
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto mb-5">
          {t('heading')}
        </h2>

        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subheading')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Primary CTA */}
          <Link
            href={`/${locale}/book-trial`}
            className="inline-flex items-center gap-2 bg-brand-gold text-white font-semibold px-8 py-4 rounded-xl hover:bg-brand-gold-light transition-all duration-200 shadow-gold hover:-translate-y-0.5"
          >
            {t('button')}
            <ArrowRight className="h-5 w-5" />
          </Link>

          {/* WhatsApp secondary CTA */}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            {t('secondary')}
          </a>
        </div>

      </div>
    </section>
  );
}
