// src/app/[locale]/courses/[slug]/page.tsx
// Dynamic Course Detail Page with learning outcomes, methodology, and direct booking CTA.

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { courses, getCourseBySlug } from '@/lib/data/courses';
import {
  CheckCircle2,
  Users,
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Video,
  Award,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.title} — Online Course`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { locale, slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-8 flex items-center gap-2">
            <Link href={`/${locale}`} className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/courses`} className="hover:text-brand-primary">Courses</Link>
            <span>/</span>
            <span className="text-brand-primary font-semibold">{course.title}</span>
          </nav>

          {/* Main Content Layout (2 Column: Main Details + Sticky Booking Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Left 2 Columns: Full Syllabus & Details */}
            <div className="lg:col-span-2 space-y-10">

              {/* Course Hero */}
              <div className="card p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className={cn('px-3 py-1 rounded-full text-xs font-bold uppercase', course.color, 'text-white')}>
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {course.ageGroup}
                  </span>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Key specs badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100 text-xs">
                  <div>
                    <span className="text-gray-400 block mb-0.5">Estimated Duration</span>
                    <span className="font-semibold text-brand-charcoal">{course.duration || 'Flexible'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Class Format</span>
                    <span className="font-semibold text-brand-charcoal">1-on-1 & Small Group</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Platform</span>
                    <span className="font-semibold text-brand-primary">Google Meet</span>
                  </div>
                </div>
              </div>

              {/* What You Will Learn (Outcomes) */}
              {course.learningOutcomes && (
                <div className="card p-8 md:p-10 border border-gray-100">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" /> What You Will Learn
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-brand-ivory p-4 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Teaching Approach & Methodology */}
              {course.teachingApproach && (
                <div className="card p-8 md:p-10 border border-gray-100">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-brand-gold" /> Our Teaching Approach
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {course.teachingApproach}
                  </p>
                </div>
              )}

              {/* Who Is This Course For? */}
              {course.targetAudience && (
                <div className="card p-8 md:p-10 border border-gray-100">
                  <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-brand-primary" /> Who Should Enroll?
                  </h2>
                  <ul className="space-y-3">
                    {course.targetAudience.map((audience, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Right Column: Sticky Quick Booking Card */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="card p-8 border-2 border-brand-primary/20 shadow-brand-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-2">
                  100% Free First Class
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
                  Experience {course.title}
                </h3>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  Book a free 30-minute one-to-one session with a certified teacher before committing to any plan.
                </p>

                <div className="space-y-3 mb-6 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    <span>Male or Female teacher preference</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    <span>Personalized evaluation & roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    <span>No credit card required</span>
                  </div>
                </div>

                <Link
                  href={`/${locale}/book-trial?course=${course.id}`}
                  className="btn-gold w-full text-center py-3.5 text-sm font-bold shadow-gold block mb-4"
                >
                  Book Free Trial for This Course
                </Link>

                <div className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Child safeguarding guaranteed</span>
                </div>
              </div>

              {/* Related Courses Quick Links */}
              <div className="card p-6 border border-gray-100">
                <h4 className="font-serif font-bold text-sm text-brand-charcoal mb-3">
                  Other Popular Courses
                </h4>
                <div className="space-y-2">
                  {courses
                    .filter((c) => c.id !== course.id)
                    .slice(0, 4)
                    .map((other) => (
                      <Link
                        key={other.id}
                        href={`/${locale}/courses/${other.slug}`}
                        className="block text-xs font-medium text-gray-600 hover:text-brand-primary p-2 rounded-lg hover:bg-brand-ivory transition-colors"
                      >
                        {other.title} →
                      </Link>
                    ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
