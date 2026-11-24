'use client';
// src/app/[locale]/pricing/page.tsx
// Comprehensive Tuition & Monthly Fees Page with Multi-Currency & Family Discounts (Al Muntazir model).

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  individualPlans,
  familyPlans,
  CURRENCIES,
  type CurrencyConfig,
} from '@/lib/data/pricing';
import type { CurrencyCode } from '@/types';
import {
  Check,
  ShieldCheck,
  Users,
  MessageCircle,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const locale = useLocale();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('GBP');
  const [planCategory, setPlanCategory] = useState<'individual' | 'family'>('individual');

  const currentCurrency: CurrencyConfig = CURRENCIES[selectedCurrency];
  const activePlans = planCategory === 'individual' ? individualPlans : familyPlans;

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> 1-Day Free Trial · Zero Registration Fees
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Monthly Quran Tuition Fees
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Transparent, international pricing tailored for families in the USA, UK, Europe, and Australia. Choose an individual plan or take advantage of our family package discounts.
            </p>
          </div>

          {/* Control Bar: Currency Selector + Category Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

            {/* Individual vs Family Toggle */}
            <div className="bg-white p-1.5 rounded-2xl border border-gray-200 flex items-center shadow-sm">
              <button
                onClick={() => setPlanCategory('individual')}
                className={cn(
                  'px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer',
                  planCategory === 'individual'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-gray-600 hover:text-brand-charcoal'
                )}
              >
                1 Student (30 Min / Day)
              </button>
              <button
                onClick={() => setPlanCategory('family')}
                className={cn(
                  'px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                  planCategory === 'family'
                    ? 'bg-brand-gold text-white shadow-sm'
                    : 'text-gray-600 hover:text-brand-charcoal'
                )}
              >
                <Users className="w-4 h-4" />
                Family / 2 Students (60 Min / Day)
              </button>
            </div>

            {/* Currency Selector Pills */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setSelectedCurrency(code)}
                  className={cn(
                    'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer',
                    selectedCurrency === code
                      ? 'bg-brand-primary text-white shadow-sm font-bold'
                      : 'text-gray-500 hover:text-gray-900'
                  )}
                >
                  {CURRENCIES[code].symbol} {code}
                </button>
              ))}
            </div>

          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch pt-4">
            {activePlans.map((plan) => {
              const price = plan.prices[selectedCurrency];

              return (
                <div
                  key={plan.id}
                  className={cn(
                    'card !overflow-visible flex flex-col justify-between p-8 relative transition-all duration-300',
                    plan.popular
                      ? 'border-2 border-brand-gold shadow-brand-lg ring-2 ring-brand-gold/20 -translate-y-2'
                      : 'border border-gray-100 hover:border-brand-primary/20'
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                      ⭐ Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif font-bold text-2xl text-brand-charcoal">
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">
                        {plan.durationMinutes} Min/Day
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-gray-100">
                      <span className="text-4xl font-bold font-serif text-brand-primary">
                        {currentCurrency.symbol}{price}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        / month ({plan.classesPerMonth} classes)
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                          <div className="rounded-full p-0.5 bg-emerald-100 text-brand-primary flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/${locale}/book-trial?plan=${plan.id}&currency=${selectedCurrency}`}
                    className={cn(
                      'w-full text-center text-xs py-3.5 rounded-xl font-bold transition-all duration-200 block shadow-sm',
                      plan.popular
                        ? 'btn-gold shadow-gold hover:-translate-y-0.5'
                        : 'btn-outline'
                    )}
                  >
                    Book 1-Day Free Trial
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Sibling / Large Family Inquiries Box */}
          <div className="card p-8 md:p-10 max-w-3xl mx-auto text-center border border-gray-100 mb-12 bg-white">
            <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-2">
              Have 3 or More Children? Custom Family Packages!
            </h3>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6">
              For families with 3 or more children, we offer additional tiered discounts. Message our coordinator directly on WhatsApp to arrange a personalized monthly tuition schedule.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}?text=${encodeURIComponent('Assalamu Alaikum, I would like to inquire about family packages for 3+ children.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp for Custom Family Quote
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
