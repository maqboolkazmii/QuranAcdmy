// src/components/ui/CourseCard.tsx
//
// ─────────────────────────────────────────────────────────────────────────────
//  🎯 THIS IS YOUR SECOND CODING EXERCISE — See Task 01 checklist.
//
//  Read every comment carefully. Understand the props and the structure.
//  Then implement the parts marked with TODO.
// ─────────────────────────────────────────────────────────────────────────────
//
// PURPOSE:
//   A reusable card component that displays a single Quran course.
//   It will be rendered in a grid on the homepage and Courses page.
//
// WHAT IT SHOULD DISPLAY:
//   • A colored icon area at the top
//   • Course title
//   • Short description
//   • Level badge (Beginner / Intermediate / Advanced)
//   • Age group
//   • Two buttons: "Learn More" and "Book Free Trial"
//
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Users, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Course, CourseLevel } from '@/types';

// ─── Props Interface ──────────────────────────────────────────────────────────

/**
 * CourseCard accepts a single `course` object.
 *
 * TypeScript tip:
 *   Instead of listing many separate props like title, description, level etc.,
 *   we pass the entire Course object. This is cleaner and type-safe.
 *
 * The `Course` type is defined in src/types/index.ts
 */
interface CourseCardProps {
  course: Course;
}

// ─── Helper: Level Badge ──────────────────────────────────────────────────────

/**
 * Returns a Tailwind className string for the coloured level badge.
 *
 * TypeScript tip:
 *   Record<CourseLevel, string> means: an object whose keys are CourseLevel
 *   values and whose values are strings.
 *
 * @param level — 'beginner' | 'intermediate' | 'advanced' | 'all-levels'
 * @returns a Tailwind className string
 */
function getLevelBadgeClass(level: CourseLevel): string {
  const map: Record<CourseLevel, string> = {
    'beginner':     'bg-green-100 text-green-700',
    'intermediate': 'bg-amber-100 text-amber-700',
    'advanced':     'bg-red-100  text-red-700',
    'all-levels':   'bg-blue-100  text-blue-700',
  };
  // If level isn't in the map, fall back to a neutral style.
  return map[level] ?? 'bg-gray-100 text-gray-600';
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * CourseCard
 *
 * A Server Component — no useState/useEffect needed here.
 * But it uses next-intl hooks, which are compatible with Server Components.
 *
 * @param course — the Course object to display
 */
export default function CourseCard({ course }: CourseCardProps) {
  // useTranslations reads from the 'courses' section of our JSON files.
  // t('learnMore') → "Learn More" (en) | "مزید جانیں" (ur) | "اعرف أكثر" (ar)
  const t      = useTranslations('courses');
  const locale = useLocale();

  // TODO (Exercise 1):
  // Use the `getLevelBadgeClass` function to get a className for the level badge.
  // Store it in a variable called `levelClass`.
  //
  // const levelClass = getLevelBadgeClass(course.level);
  const levelClass = getLevelBadgeClass(course.level);

  // TODO (Exercise 2):
  // Build a human-readable label for the level badge using the translation system.
  // t('levels.beginner') → "Beginner" (in English)
  //
  // The key follows the pattern: `levels.${course.level}`
  // But TypeScript won't accept a dynamic key directly — cast it:
  //   t(`levels.${course.level}` as any)
  //
  // const levelLabel = t(`levels.${course.level}` as any);
  const levelLabel = t(`levels.${course.level}` as Parameters<typeof t>[0]);

  return (
    <article
      className={cn(
        'card group flex flex-col h-full',
        // The card grows on hover — a subtle interaction cue.
        'hover:-translate-y-1 transition-transform duration-300'
      )}
    >
      {/* ── Coloured Header Area ── */}
      {/*
        TODO (Exercise 3):
        Add a div here with:
          - Tailwind classes: flex items-center gap-3 p-6 pb-4
          - Inside it, a coloured icon box using course.color as a Tailwind bg class:
              <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl', course.color)}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
          - And the course title in an <h3> tag with font-serif text-xl font-bold text-brand-charcoal
      */}
      <div className="flex items-center gap-3 p-6 pb-4">
        <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl', course.color)}>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-serif text-xl font-bold text-brand-charcoal">
          {course.title}
        </h3>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 gap-4 p-6 pt-2">

        {/* Description */}
        {/*
          TODO (Exercise 4):
          Add a <p> tag with:
            - className: text-sm text-gray-600 leading-relaxed flex-1
            - Content: {course.description}
        */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {course.description}
        </p>

        {/* Meta: Level + Age Group */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Level Badge */}
          <span
            className={cn(
              'inline-block rounded-full px-3 py-1 text-xs font-semibold',
              levelClass
            )}
          >
            {levelLabel}
          </span>

          {/* Age Group Badge */}
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
            <Users className="h-3 w-3" />
            {course.ageGroup}
          </span>
        </div>

        {/* ── Action Buttons ── */}
        {/*
          TODO (Exercise 5):
          Add two Link buttons inside a flex div:
          
          1. "Learn More" — outline style, links to /${locale}/courses/${course.slug}
          2. "Book Free Trial" — primary (gold) style, links to /${locale}/book-trial?course=${course.id}

          Use the btn-outline and btn-gold CSS classes from globals.css.
          Use t('learnMore') and t('bookTrial') for translated button text.
        */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`/${locale}/courses/${course.slug}`}
            className="btn-outline text-sm py-2 flex-1 text-center"
          >
            {t('learnMore')}
          </Link>
          <Link
            href={`/${locale}/book-trial?course=${course.id}`}
            className="btn-gold text-sm py-2 flex-1 text-center"
          >
            {t('bookTrial')}
          </Link>
        </div>

      </div>
    </article>
  );
}
