// src/app/[locale]/about/page.tsx
// About Us: Academy Mission, Vision, and Quality Standards.

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Heart,
  Target,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe2,
} from 'lucide-react';

export const metadata = {
  title: 'About Us — Mission & Quality Standards',
  description:
    'Learn about AyatBridge Academy, our mission to connect hearts with the Holy Quran, and our international standards of Islamic online education.',
};

export default async function AboutPage({
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

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <Heart className="w-3.5 h-3.5 fill-brand-primary" /> Dedicated to the Ummah
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Connecting Hearts with the Holy Quran
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              AyatBridge Academy was founded with a singular purpose: to bridge the distance between qualified Quranic scholarship and Muslim families worldwide through compassionate, personalized, and accessible online education.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8 md:p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                Our Mission
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower children, adults, and new Muslims worldwide with the ability to recite, understand, and live by the teachings of the Holy Quran, guided by certified male and female educators who teach with sincerity, patience, and love.
              </p>
            </div>

            <div className="card p-8 md:p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                Our Vision
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become the most trusted international online Quran academy for diaspora Muslim communities in the USA, UK, and Europe, renowned for academic excellence, uncompromising child safeguarding, and genuine student mentorship.
              </p>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="card p-8 md:p-12 border border-gray-100 mb-16">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Our Core Philosophy
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal">
                The AyatBridge Teaching Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Patience & Positive Reinforcement',
                  desc: 'We strictly forbid harshness. Children thrive when encouraged with warmth, du’a, and patience.',
                },
                {
                  title: 'Authentic Sanad & Tajweed',
                  desc: 'All recitation is taught adhering strictly to classical Tajweed rules as transmitted through authentic chains (Sanad).',
                },
                {
                  title: 'Flexible & Family-Centered',
                  desc: 'We understand modern school, work, and sports commitments and accommodate your schedule across all time zones.',
                },
                {
                  title: 'Transparent Progress Tracking',
                  desc: 'Parents receive regular bi-weekly updates on lessons covered, retention strength, and areas for encouragement.',
                },
                {
                  title: 'Female Teacher Guarantee',
                  desc: 'Complete privacy and dedicated female certified teachers for daughters, young children, and adult sisters.',
                },
                {
                  title: 'Child Safeguarding Priority',
                  desc: 'Verified background checks, open parental access to all Google Meet sessions, and recorded class logging.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-brand-ivory">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mb-3" />
                  <h3 className="font-serif font-bold text-base text-brand-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
              Begin Your Family&apos;s Quranic Journey Today
            </h3>
            <p className="text-sm text-gray-500">
              Experience the difference with a 100% free trial class.
            </p>
            <Link href={`/${locale}/book-trial`} className="btn-primary inline-flex items-center gap-2">
              Book Free Trial Class
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
