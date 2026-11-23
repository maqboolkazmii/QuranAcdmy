// src/components/sections/TeachersSection.tsx
// Showcases certified male & female teachers on the homepage.

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Award, CheckCircle2, Languages, ArrowRight, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getFeaturedTeachers } from '@/lib/data/teachers';

export default function TeachersSection() {
  const locale = useLocale();
  const teachers = getFeaturedTeachers(4);

  return (
    <section className="section-padding bg-brand-ivory bg-geometric-pattern">
      <div className="container-brand">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Qualified Instructors
          </p>
          <h2 className="section-heading">Meet Our Certified Teachers</h2>
          <p className="section-subheading mx-auto">
            Experienced, verified male and female Quran teachers dedicated to your family&apos;s spiritual and academic growth.
          </p>
          <div className="heading-underline mx-auto mt-5" />
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className={cn(
                'card flex flex-col justify-between p-6',
                'border border-gray-100 hover:border-brand-primary/30 transition-all duration-300'
              )}
            >
              <div>
                {/* Gender Tag & Experience Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={cn(
                      'text-xs font-semibold px-2.5 py-1 rounded-full',
                      teacher.gender === 'female'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-emerald-100 text-emerald-700'
                    )}
                  >
                    {teacher.gender === 'female' ? 'Female Teacher' : 'Male Teacher'}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {teacher.experience}+ yrs exp
                  </span>
                </div>

                {/* Avatar Placeholder / Initial box */}
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-4">
                  <UserCheck className="w-8 h-8 text-brand-primary" />
                </div>

                {/* Teacher Name */}
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                  {teacher.name}
                </h3>

                {/* Qualifications list */}
                <ul className="space-y-1.5 mb-4">
                  {teacher.qualifications.slice(0, 2).map((qual) => (
                    <li key={qual} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>

                {/* Languages */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
                  <Languages className="w-3.5 h-3.5 text-brand-primary" />
                  <span>{teacher.languages.join(', ')}</span>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-4">
                  {teacher.bio}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`/${locale}/book-trial?teacher=${teacher.id}`}
                className="btn-outline w-full text-xs py-2 text-center"
              >
                Book with {teacher.gender === 'female' ? 'Ustadha' : 'Sheikh'}
              </Link>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/teachers`}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore All Instructors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
