// src/components/sections/HowItWorksSection.tsx
// Server Component — static content, no interactivity needed.

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { UserCircle, CalendarCheck, Video, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Step Data ────────────────────────────────────────────────────────────────

// Each step is an object with: number, icon, title, description.
// We keep this data inline (not in a separate file) because it's small
// and tightly coupled to this one component.

const steps = [
  {
    number: '01',
    icon: UserCircle,
    title: 'Book a Free Trial',
    description:
      'Fill in our simple booking form. Tell us your course preference, schedule and time zone.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'We Confirm Your Class',
    description:
      'Our team reviews your request and assigns a qualified teacher. You receive a confirmation within 24 hours.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Join on Google Meet',
    description:
      'At your scheduled time, join your class through the Google Meet link sent to your email. No app downloads needed.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Start Your Journey',
    description:
      'If you are happy with the trial, enrol in a plan that suits your family. Begin your Quran journey today.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HowItWorksSection() {
  const locale = useLocale();

  return (
    <section className="section-padding bg-white">
      <div className="container-brand">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="section-heading">How Online Classes Work</h2>
          <p className="section-subheading mx-auto">
            From your first visit to your first class — four simple steps.
          </p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center group">

                {/* Connector line between steps (hidden on last step) */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 start-1/2 w-full h-px bg-brand-gold/30 -z-0"
                  />
                )}

                {/* Icon Circle */}
                <div className={cn(
                  'relative z-10 flex h-20 w-20 items-center justify-center rounded-full mb-5',
                  'bg-brand-primary/10 border-2 border-brand-primary/20',
                  'group-hover:bg-brand-primary group-hover:border-brand-primary',
                  'transition-all duration-300'
                )}>
                  <Icon className="h-8 w-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -end-1 h-6 w-6 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href={`/${locale}/book-trial`} className="btn-primary">
            Book Your Free Trial Now
          </Link>
        </div>

      </div>
    </section>
  );
}
