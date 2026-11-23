'use client';
// src/components/sections/FAQSection.tsx
//
// ─── TEACHING NOTE ───────────────────────────────────────────────────────────
// This is a Client Component ('use client') because we use interactive state:
// `openId` tracks which accordion question is currently expanded.
//
// When a user clicks a question:
// - If it's already open, we set openId = null (collapses it)
// - If it's closed, we set openId = faq.id (expands it)
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqs } from '@/lib/data/faqs';

export default function FAQSection() {
  // State: stores the ID of the opened FAQ item (or null if all closed)
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  function toggleFAQ(id: string) {
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  return (
    <section className="section-padding bg-brand-ivory bg-geometric-pattern">
      <div className="container-brand max-w-4xl">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about our classes, teachers, and free trial process.
          </p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'rounded-2xl transition-all duration-200 overflow-hidden',
                  'border bg-white',
                  isOpen ? 'border-brand-primary shadow-brand' : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {/* Question Button (Toggle Trigger) */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-brand-charcoal text-base md:text-lg pe-4 flex items-center gap-3">
                    <HelpCircle className={cn('w-5 h-5 flex-shrink-0 transition-colors', isOpen ? 'text-brand-primary' : 'text-gray-400')} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180 text-brand-primary'
                    )}
                  />
                </button>

                {/* Animated / Conditional Answer Box */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help card */}
        <div className="rounded-2xl bg-white border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-brand-charcoal text-lg mb-1">
              Have a question not listed here?
            </h4>
            <p className="text-sm text-gray-500">
              Our support team is active 7 days a week on WhatsApp and email.
            </p>
          </div>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
