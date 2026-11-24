// src/components/sections/PricingSection.tsx
// Transparent pricing overview on the homepage.

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { pricingPlans } from '@/lib/data/pricing';

export default function PricingSection() {
  const locale = useLocale();

  return (
    <section className="section-padding bg-white">
      <div className="container-brand">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Affordable & Transparent
          </p>
          <h2 className="section-heading">Simple Monthly Plans</h2>
          <p className="section-subheading mx-auto">
            No registration fees. No long-term commitments. Start with a 100% free trial class before enrolling.
          </p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch pt-4">
          {pricingPlans.map((plan) => (
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
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl font-bold font-serif text-brand-primary">
                    £{plan.price}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    / month
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
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
                href={`/${locale}/book-trial?plan=${plan.id}`}
                className={cn(
                  'w-full text-center text-sm py-3 rounded-xl font-semibold transition-all duration-200',
                  plan.popular
                    ? 'btn-gold shadow-gold hover:-translate-y-0.5'
                    : 'btn-outline'
                )}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Note */}
        <div className="max-w-xl mx-auto rounded-xl bg-brand-ivory p-4 flex items-center justify-center gap-3 text-center text-sm text-gray-600">
          <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
          <span>
            <strong>100% Satisfaction Guarantee:</strong> If you are not satisfied after your first class, request a teacher change or refund without hassle.
          </span>
        </div>

      </div>
    </section>
  );
}
