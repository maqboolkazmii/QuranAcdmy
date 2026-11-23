'use client';
// src/app/[locale]/teachers/page.tsx
// Verified Teachers Directory with Gender Filtering and credential highlights.

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { teachers } from '@/lib/data/teachers';
import type { TeacherGender } from '@/types';
import { cn } from '@/lib/utils';
import {
  UserCheck,
  CheckCircle2,
  Languages,
  ShieldCheck,
  Award,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

type GenderFilter = 'all' | TeacherGender;

export default function TeachersPage() {
  const locale = useLocale();
  const [selectedGender, setSelectedGender] = useState<GenderFilter>('all');

  const filteredTeachers =
    selectedGender === 'all'
      ? teachers
      : teachers.filter((t) => t.gender === selectedGender);

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" /> 100% Certified & Vetted Instructors
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Meet Our Qualified Quran Teachers
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Every teacher at AyatBridge Academy is rigorously vetted, holds verified Islamic teaching credentials (Ijazah / Al-Azhar / Wifaq), and is trained in modern online teaching pedagogy.
            </p>
          </div>

          {/* Gender Filter Pills (Mobbin pattern) */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {[
              { id: 'all', label: `All Teachers (${teachers.length})` },
              {
                id: 'female',
                label: `Female Teachers (${teachers.filter((t) => t.gender === 'female').length})`,
              },
              {
                id: 'male',
                label: `Male Teachers (${teachers.filter((t) => t.gender === 'male').length})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGender(tab.id as GenderFilter)}
                className={cn(
                  'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                  selectedGender === tab.id
                    ? 'bg-brand-primary text-white shadow-brand'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Teachers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="card p-8 border border-gray-100 hover:border-brand-primary/30 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Gender & Exp Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        'text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider',
                        teacher.gender === 'female'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-emerald-100 text-emerald-700'
                      )}
                    >
                      {teacher.gender === 'female' ? 'Female Teacher' : 'Male Teacher'}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {teacher.experience}+ Years Experience
                    </span>
                  </div>

                  {/* Avatar Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-4">
                    <UserCheck className="w-8 h-8 text-brand-primary" />
                  </div>

                  {/* Teacher Name */}
                  <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-2">
                    {teacher.name}
                  </h3>

                  {/* Qualifications */}
                  <div className="space-y-1.5 mb-5">
                    {teacher.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
                    <Languages className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>Speaks: {teacher.languages.join(', ')}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {teacher.bio}
                  </p>
                </div>

                {/* Direct Trial CTA */}
                <Link
                  href={`/${locale}/book-trial?teacher=${teacher.id}&teacherGender=${teacher.gender}`}
                  className="btn-gold w-full text-center text-xs py-3 font-bold shadow-gold block"
                >
                  Book Free Trial with {teacher.name.split(' ')[0]}
                </Link>
              </div>
            ))}
          </div>

          {/* Teacher Recruitment Standards / Quality Assurance Banner */}
          <div className="card p-8 md:p-12 max-w-4xl mx-auto border-2 border-brand-gold/30 bg-white">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                Our Guarantee
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal">
                How We Select & Train Our Teachers
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Only the top 5% of teacher applicants are accepted into AyatBridge Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-brand-ivory">
                <GraduationCap className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <h4 className="font-serif font-bold text-sm text-brand-charcoal mb-1">
                  Verified Islamic Degrees
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Every Ijazah, Sanad, and University certificate is manually authenticated.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-ivory">
                <ShieldCheck className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <h4 className="font-serif font-bold text-sm text-brand-charcoal mb-1">
                  Child Safeguarding
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Strict code of conduct with recorded reference checks and parental oversight.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-ivory">
                <Sparkles className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <h4 className="font-serif font-bold text-sm text-brand-charcoal mb-1">
                  Online Pedagogy Training
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Trained to engage western-born youth with patience, encouragement, and warmth.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
