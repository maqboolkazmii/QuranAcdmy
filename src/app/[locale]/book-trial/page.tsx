// src/app/[locale]/book-trial/page.tsx
// Free Trial Booking Page — the core conversion page of AyatBridge Academy.

import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrialBookingForm from '@/components/forms/TrialBookingForm';
import { ShieldCheck, Video, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Free Trial Class',
  description:
    'Experience our certified male and female Quran teachers with a 100% free 30-minute one-to-one online trial on Google Meet. No credit card required.',
};

export default function BookTrialPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" /> 100% Free · No Payment Required
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Book Your Free Trial Class
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Take your first step towards Quranic excellence. Experience a personalized 30-minute one-to-one class with a qualified teacher on Google Meet.
            </p>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 text-center">
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-center gap-2">
              <Video className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-semibold text-gray-700">Google Meet</span>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold text-gray-700">30 Min Session</span>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-semibold text-gray-700">Certified Tutors</span>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-semibold text-gray-700">Zero Obligation</span>
            </div>
          </div>

          {/* Booking Form (wrapped in Suspense for useSearchParams) */}
          <Suspense fallback={<div className="text-center py-12 text-sm text-gray-500">Loading booking form...</div>}>
            <TrialBookingForm />
          </Suspense>

        </div>
      </main>
      <Footer />
    </>
  );
}
