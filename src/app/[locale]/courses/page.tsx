'use client';
// src/app/[locale]/courses/page.tsx
// All Courses Directory with level filtering inspired by modern fintech/neobank categorization.

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/lib/data/courses';
import type { CourseLevel } from '@/types';
import { cn } from '@/lib/utils';
import { BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

type FilterTab = 'all' | CourseLevel;

const TABS: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'All Courses (8)' },
  { id: 'beginner', label: 'Beginners' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'all-levels', label: 'General / All Ages' },
];

export default function CoursesPage() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filteredCourses =
    activeTab === 'all'
      ? courses
      : courses.filter((c) => c.level === activeTab);

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Structured Islamic Syllabi
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Our Quran & Islamic Courses
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              From foundational letter pronunciation to scholarly Tafseer and complete Hifz. Every course is tailored to your family&apos;s schedule and learning pace.
            </p>
          </div>

          {/* Level Filter Tabs (Pill Navigation pattern from Mobbin) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-brand-primary text-white shadow-brand'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Bottom Assistance Banner */}
          <div className="card p-8 md:p-10 max-w-4xl mx-auto bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center justify-center md:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Need Advice?
              </span>
              <h3 className="font-serif text-2xl font-bold">
                Unsure which course is right for you?
              </h3>
              <p className="text-sm text-white/80 max-w-lg">
                Book a free trial assessment class. Our senior Qari will evaluate your current reading level and recommend the best personalized roadmap.
              </p>
            </div>
            <Link
              href={`/${locale}/book-trial`}
              className="btn-gold whitespace-nowrap shadow-gold"
            >
              Book Assessment Trial
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
