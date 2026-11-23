// src/components/sections/CoursesSection.tsx
// Server Component — reads data, renders CourseCards in a grid.
//
// ─── TEACHING NOTE ───────────────────────────────────────────────────────────
// Notice there is NO 'use client' here.
// This is a Server Component — it runs on the server, produces HTML, done.
// No useState, no event listeners needed → keep it as a Server Component
// for better performance (no JavaScript sent to browser for this component).
//
// Key pattern: getFeaturedCourses() returns an array → .map() turns each
// Course object into a <CourseCard /> component.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import CourseCard from '@/components/ui/CourseCard';
import { getFeaturedCourses } from '@/lib/data/courses';

export default function CoursesSection() {
  const t      = useTranslations('courses');
  const locale = useLocale();

  // Get the first 6 courses to preview on the homepage.
  // All 8 courses will appear on the full /courses page.
  const featuredCourses = getFeaturedCourses(6);

  return (
    <section className="section-padding bg-brand-ivory bg-geometric-pattern">
      <div className="container-brand">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            What We Teach
          </p>
          <h2 className="section-heading">{t('heading')}</h2>
          <p className="section-subheading mx-auto">{t('subheading')}</p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* ── Course Cards Grid ── */}
        {/*
          .map() explanation:
          featuredCourses is an array: [course1, course2, course3, ...]
          .map() loops through each item and returns a new array of JSX.
          `key` is required so React can track each card efficiently.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* ── View All Courses Button ── */}
        <div className="text-center">
          <Link
            href={`/${locale}/courses`}
            className="btn-outline inline-flex items-center gap-2 group"
          >
            View All 8 Courses
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
