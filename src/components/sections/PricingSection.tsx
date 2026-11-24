'use client';
// src/components/sections/PricingSection.tsx
// Interactive pricing with currency switching and family discount toggle (Al Muntazir Academy model).

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Check, ShieldCheck, Users, Sparkles, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  individualPlans,
  familyPlans,
  CURRENCIES,
  type CurrencyConfig,
} from '@/lib/data/pricing';
import type { CurrencyCode } from '@/types';

export default function PricingSection() {
  const locale = useLocale();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('GBP');
  const [planCategory, setPlanCategory] = useState<'individual' | 'family'>('individual');

  const currentCurrency: CurrencyConfig = CURRENCIES[selectedCurrency];
  const activePlans = planCategory === 'individual' ? individualPlans.slice(0, 3) : familyPlans;

  return (
    <section className="section-padding bg-white">
      <div className="container-brand">

        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Affordable & Transparent
          </p>
          <h2 className="section-heading">Monthly Quran Tuition Fees</h2>
          <p className="section-subheading mx-auto">
            100% Free 1-Day Trial · No registration fee · Male & female certified teachers · Flexible timing.
          </p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* Control Bar: Currency Selector + Category Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          {/* Individual vs Family Toggle */}
          <div className="bg-brand-ivory p-1.5 rounded-2xl border border-gray-200 flex items-center">
            <button
              onClick={() => setPlanCategory('individual')}
              className={cn(
                'px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer',
                planCategory === 'individual'
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-charcoal'
              )}
            >
              1 Student (30 Min)
            </button>
            <button
              onClick={() => setPlanCategory('family')}
              className={cn(
                'px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5',
                planCategory === 'family'
                  ? 'bg-brand-gold text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-charcoal'
              )}
            >
              <Users className="w-3.5 h-3.5" />
              Family / 2 Students (60 Min)
            </button>
          </div>

          {/* Currency Selector Pills */}
          <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-2xl border border-gray-200">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
              <button
                key={code}
                onClick={() => setSelectedCurrency(code)}
                className={cn(
                  'px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer',
                  selectedCurrency === code
                    ? 'bg-white text-brand-primary shadow-sm border border-gray-200 font-bold'
                    : 'text-gray-500 hover:text-gray-900'
                )}
              >
                {CURRENCIES[code].symbol} {code}
              </button>
            ))}
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch pt-4">
          {activePlans.map((plan) => {
            const price = plan.prices[selectedCurrency];

            return (
              <div
                key={plan.id}
                className={cn(
                  'card !overflow-visible flex flex-col justify-between p-8 relative transition-all duration-300',
                  plan.popular
                    ? 'border-2 border-brand-gold shadow-brand-lg ring-1 ring-brand-gold/20 -translate-y-2'
                    : 'border border-gray-100 hover:border-brand-primary/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-gray-100">
                    <span className="text-4xl font-bold font-serif text-brand-primary">
                      {currentCurrency.symbol}{price}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      / month ({plan.classesPerMonth} classes)
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <div className="rounded-full p-0.5 bg-emerald-100 text-brand-primary flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
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

        {/* Guarantee Note */}
        <div className="max-w-xl mx-auto rounded-xl bg-brand-ivory p-4 flex items-center justify-center gap-3 text-center text-xs text-gray-600 border border-gray-100">
          <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
          <span>
            <strong>100% Satisfaction Guarantee:</strong> Zero risk. Take your free trial class first before making any payment. Cancel or reschedule anytime.
          </span>
        </div>

      </div>
    </section>
  );
}
