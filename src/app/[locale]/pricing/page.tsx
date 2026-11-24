// src/app/[locale]/pricing/page.tsx
// Comprehensive Tuition Pricing and Plan Breakdown page.

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { pricingPlans } from '@/lib/data/pricing';
import { Check, ShieldCheck, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Tuition & Pricing Plans',
  description:
    'Transparent, affordable monthly Quran learning packages with no registration fees or hidden costs. Start with a 100% free trial class.',
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Affordable · Flexible · No Long Contracts
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Simple, Transparent Tuition
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Invest in your child&apos;s Akhirah with qualified Quran education. Pay monthly, reschedule easily, and cancel anytime with no penalty.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch pt-4">
            {pricingPlans.map((plan) => (
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
                  <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100">
                    <span className="text-4xl font-bold font-serif text-brand-primary">
                      £{plan.price}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      / month
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
                  href={`/${locale}/book-trial?plan=${plan.id}`}
                  className={cn(
                    'w-full text-center text-sm py-3.5 rounded-xl font-bold transition-all duration-200 block',
                    plan.popular
                      ? 'btn-gold shadow-gold hover:-translate-y-0.5'
                      : 'btn-outline'
                  )}
                >
                  Start with Free Trial
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Inquiries / Custom Plans */}
          <div className="card p-8 md:p-10 max-w-3xl mx-auto text-center border border-gray-100 mb-12">
            <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-2">
              Have 2 or More Children? Family Discounts Available!
            </h3>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6">
              We offer generous sibling discounts (10% to 15% off) for families enrolling multiple students. Inquire directly on WhatsApp to get a custom family package.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}?text=${encodeURIComponent('Assalamu Alaikum, I would like to inquire about family/sibling discounts.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire About Family Discount on WhatsApp
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
