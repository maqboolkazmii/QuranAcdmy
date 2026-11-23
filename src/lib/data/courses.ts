// src/lib/data/courses.ts
//
// ─── TEACHING NOTE ───────────────────────────────────────────────────────────
// This file contains ONLY data — no React, no JSX, no imports from components.
//
// Why keep data separate from UI?
//
// BAD (data inside component):         GOOD (data in its own file):
// ─────────────────────────────        ──────────────────────────────
// const courses = [...] inside         courses.ts → imported anywhere
// CoursesSection.tsx                   CoursesPage, HomePage, API routes
//                                      all share the SAME source of truth.
//
// If you later connect to Supabase, you replace this file — not every component.
// ─────────────────────────────────────────────────────────────────────────────

import type { Course } from '@/types';

/**
 * All Quran courses offered by AyatBridge Academy.
 *
 * TypeScript tip:
 *   `Course[]` means "an array of Course objects".
 *   TypeScript will show an error if any object is missing a required field.
 */
export const courses: Course[] = [
  {
    id: 'noorani-qaida',
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    description:
      'The perfect starting point for complete beginners. Learn Arabic alphabet, pronunciation rules and letter joining with an experienced teacher.',
    level: 'beginner',
    ageGroup: '5+ years',
    classType: ['one-to-one', 'group'],
    icon: 'BookOpen',
    color: 'bg-emerald-600',
  },
  {
    id: 'quran-reading',
    slug: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    description:
      'Learn to read the Quran fluently from start to finish. Suitable for students who know the Arabic alphabet and want to read full surahs confidently.',
    level: 'beginner',
    ageGroup: 'All ages',
    classType: ['one-to-one', 'group'],
    icon: 'BookMarked',
    color: 'bg-teal-600',
  },
  {
    id: 'tajweed',
    slug: 'tajweed',
    title: 'Quran with Tajweed',
    description:
      'Master the rules of Tajweed — the science of correct Quran recitation. Learn makharij, sifaat, and all major Tajweed rules with practical application.',
    level: 'intermediate',
    ageGroup: '8+ years',
    classType: ['one-to-one'],
    icon: 'Mic2',
    color: 'bg-brand-primary',
  },
  {
    id: 'hifz',
    slug: 'hifz',
    title: 'Quran Memorization (Hifz)',
    description:
      'A structured Hifz programme with daily revision, strong memorisation techniques and regular teacher supervision. For dedicated students at all levels.',
    level: 'advanced',
    ageGroup: '7+ years',
    classType: ['one-to-one'],
    icon: 'Brain',
    color: 'bg-purple-600',
  },
  {
    id: 'islamic-studies',
    slug: 'islamic-studies',
    title: 'Islamic Studies',
    description:
      'Core Islamic knowledge for children and adults — Pillars of Islam, Iman, Islamic manners, Seerah of the Prophet ﷺ and essential fiqh topics.',
    level: 'all-levels',
    ageGroup: 'All ages',
    classType: ['one-to-one', 'group'],
    icon: 'GraduationCap',
    color: 'bg-amber-600',
  },
  {
    id: 'duas-salah',
    slug: 'duas-salah',
    title: 'Daily Duas & Salah',
    description:
      'Learn how to perform Salah correctly, memorise essential daily duas and understand their meanings. Ideal for new Muslims and young children.',
    level: 'beginner',
    ageGroup: 'All ages',
    classType: ['one-to-one', 'group'],
    icon: 'HandHeart',
    color: 'bg-rose-600',
  },
  {
    id: 'quran-translation',
    slug: 'quran-translation',
    title: 'Quran Translation',
    description:
      'Understand the meaning of the Quran in English or Urdu. Build a personal connection with the words of Allah through word-by-word translation.',
    level: 'intermediate',
    ageGroup: '12+ years',
    classType: ['one-to-one', 'group'],
    icon: 'Languages',
    color: 'bg-indigo-600',
  },
  {
    id: 'tafseer',
    slug: 'tafseer',
    title: 'Quran Tafseer',
    description:
      'An in-depth study of the meanings, context and explanations of Quranic verses. Includes asbab al-nuzool and scholarly commentary.',
    level: 'advanced',
    ageGroup: 'Adults',
    classType: ['one-to-one', 'group'],
    icon: 'ScrollText',
    color: 'bg-slate-600',
  },
];

/**
 * Returns only the first N courses — used on the homepage preview.
 * @param count — how many courses to show (default 6)
 */
export function getFeaturedCourses(count = 6): Course[] {
  return courses.slice(0, count);
}
