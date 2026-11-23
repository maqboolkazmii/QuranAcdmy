'use client';
// src/components/forms/TrialBookingForm.tsx
// Interactive Free Trial Booking Form with step-by-step layout and instant feedback.

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Globe,
  BookOpen,
  Shield,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { courses } from '@/lib/data/courses';
import type { AgeGroup, ClassType, TeacherGender, TrialBookingFormData } from '@/types';

const AGE_GROUPS: { value: AgeGroup; label: string }[] = [
  { value: '5-8', label: '5 – 8 Years (Child)' },
  { value: '9-12', label: '9 – 12 Years (Child)' },
  { value: '13-17', label: '13 – 17 Years (Teen)' },
  { value: '18-25', label: '18 – 25 Years (Young Adult)' },
  { value: '26-40', label: '26 – 40 Years (Adult)' },
  { value: '40+', label: '40+ Years (Adult / Senior)' },
];

const DAYS_LIST = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const TIME_SLOTS = [
  'Morning (08:00 – 12:00)',
  'Afternoon (12:00 – 16:00)',
  'Evening (16:00 – 20:00)',
  'Night (20:00 – 23:00)',
  'Flexible / Any Time',
];

export default function TrialBookingForm() {
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get('course') || courses[0].id;

  // Form State
  const [formData, setFormData] = useState<TrialBookingFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    country: '',
    ageGroup: '9-12',
    courseId: defaultCourse,
    teacherGender: 'no-preference',
    classType: 'one-to-one',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    preferredDays: ['Monday', 'Wednesday', 'Friday'],
    preferredTime: 'Evening (16:00 – 20:00)',
    message: '',
    isMinor: true,
    guardianConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  // Minor detection: under 18
  const isMinor = ['5-8', '9-12', '13-17'].includes(formData.ageGroup);

  function handleDayToggle(day: string) {
    setFormData((prev) => {
      const exists = prev.preferredDays.includes(day);
      return {
        ...prev,
        preferredDays: exists
          ? prev.preferredDays.filter((d) => d !== day)
          : [...prev.preferredDays, day],
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    // Client-side quick check
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (isMinor && !formData.guardianConsent) {
      newErrors.guardianConsent = 'Parent/Guardian consent is required for students under 18';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/book-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, isMinor }),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) setErrors(result.errors);
        else setErrors({ form: result.message || 'Submission failed' });
      } else {
        setIsSuccess(true);
        setBookingId(result.bookingId);
      }
    } catch {
      setErrors({ form: 'Network error. Please try again or message us on WhatsApp directly.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  // ─── Success Confirmation Screen ───────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto border-2 border-brand-primary/30">
        <div className="w-16 h-16 bg-emerald-100 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal mb-3">
          Free Trial Booking Confirmed!
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Alhamdulillah! We have received your booking request for{' '}
          <strong className="text-brand-primary">
            {courses.find((c) => c.id === formData.courseId)?.title}
          </strong>.
        </p>

        {bookingId && (
          <div className="bg-brand-ivory rounded-xl p-3 text-xs text-gray-500 mb-8 inline-block">
            Reference ID: <code className="font-mono font-bold text-brand-charcoal">{bookingId}</code>
          </div>
        )}

        <div className="bg-emerald-50 rounded-2xl p-6 text-left mb-8 space-y-3 border border-emerald-100">
          <h4 className="font-semibold text-brand-primary text-sm flex items-center gap-2">
            <Clock className="w-4 h-4" /> What Happens Next?
          </h4>
          <ol className="list-decimal list-inside text-xs text-gray-600 space-y-2 leading-relaxed">
            <li>Our academic coordinator will review your schedule and time zone.</li>
            <li>We will send a confirmation message to your WhatsApp ({formData.whatsapp}).</li>
            <li>You will receive the Google Meet class link at least 2 hours before class.</li>
          </ol>
        </div>

        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}?text=${encodeURIComponent(`Assalamu Alaikum, I just booked a free trial class (Ref: ${bookingId || 'New'}).`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          Message Coordinator on WhatsApp
        </a>
      </div>
    );
  }

  // ─── Main Booking Form ─────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-10 max-w-3xl mx-auto space-y-8">
      {/* Top Banner */}
      <div className="border-b border-gray-100 pb-6">
        <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
          Book Your 30-Minute Free Trial
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          No credit card required. 100% free one-to-one class on Google Meet.
        </p>
      </div>

      {errors.form && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* ── Section 1: Course & Student Info ── */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> 1. Course & Student Details
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Course Selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Select Quran Course *
            </label>
            <select
              value={formData.courseId}
              onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.level})
                </option>
              ))}
            </select>
            {errors.courseId && <p className="text-xs text-red-600 mt-1">{errors.courseId}</p>}
          </div>

          {/* Age Group */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Student Age Group *
            </label>
            <select
              value={formData.ageGroup}
              onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value as AgeGroup })}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {AGE_GROUPS.map((ag) => (
                <option key={ag.value} value={ag.value}>
                  {ag.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Class Type & Teacher Gender Preference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Class Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['one-to-one', 'group'] as ClassType[]).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData({ ...formData, classType: type })}
                  className={cn(
                    'py-2.5 px-3 rounded-xl border text-xs font-medium capitalize transition-all',
                    formData.classType === type
                      ? 'border-brand-primary bg-emerald-50 text-brand-primary font-bold'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  )}
                >
                  {type === 'one-to-one' ? '1-on-1 Class' : 'Group Class'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Teacher Gender Preference
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'no-preference', label: 'Either' },
                ] as { value: TeacherGender | 'no-preference'; label: string }[]
              ).map((gender) => (
                <button
                  type="button"
                  key={gender.value}
                  onClick={() => setFormData({ ...formData, teacherGender: gender.value })}
                  className={cn(
                    'py-2.5 px-2 rounded-xl border text-xs font-medium transition-all text-center',
                    formData.teacherGender === gender.value
                      ? 'border-brand-primary bg-emerald-50 text-brand-primary font-bold'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  )}
                >
                  {gender.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Preferred Schedule ── */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4" /> 2. Schedule & Availability
        </h4>

        {/* Days Selection */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            Select Preferred Days (Choose 1 or more)
          </label>
          <div className="flex flex-wrap gap-2">
            {DAYS_LIST.map((day) => {
              const isSelected = formData.preferredDays.includes(day);
              return (
                <button
                  type="button"
                  key={day}
                  onClick={() => handleDayToggle(day)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all',
                    isSelected
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {day.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Preferred Time & Timezone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Preferred Time of Day
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {TIME_SLOTS.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Your Time Zone (Detected)
            </label>
            <input
              type="text"
              value={formData.timezone}
              onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              className="w-full rounded-xl border border-gray-300 p-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>
      </div>

      {/* ── Section 3: Contact & Safeguarding ── */}
      <div className="space-y-4 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4" /> 3. Contact Information
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              {isMinor ? 'Parent / Guardian Full Name *' : 'Student Full Name *'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute start-3 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Tariq Mahmood"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-3 ps-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Country of Residence *
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 text-gray-400 absolute start-3 top-3.5" />
              <input
                type="text"
                placeholder="e.g. United Kingdom, USA, Germany"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-3 ps-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              WhatsApp Number (with Country Code) *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute start-3 top-3.5" />
              <input
                type="tel"
                placeholder="e.g. +44 7700 900077"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-3 ps-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            {errors.whatsapp && <p className="text-xs text-red-600 mt-1">{errors.whatsapp}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address (for Google Meet Link) *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute start-3 top-3.5" />
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-gray-300 p-3 ps-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Additional Notes or Learning Goals (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Tell us about the student's prior Quran background or specific goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        {/* Safeguarding Consent Checkbox */}
        {isMinor && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.guardianConsent}
                onChange={(e) => setFormData({ ...formData, guardianConsent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded text-brand-primary focus:ring-brand-primary"
              />
              <span className="text-xs text-amber-900 leading-relaxed">
                <Shield className="w-3.5 h-3.5 inline text-amber-700 me-1" />
                <strong>Parental / Guardian Consent:</strong> I confirm that I am the parent or legal guardian of this student and consent to booking an online Quran trial class on Google Meet.
              </span>
            </label>
            {errors.guardianConsent && (
              <p className="text-xs text-red-600 mt-2 ms-7">{errors.guardianConsent}</p>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold w-full py-4 text-base font-bold shadow-gold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Confirming Your Booking...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Confirm Free Trial Booking</span>
            </>
          )}
        </button>
        <p className="text-center text-xs text-gray-400 mt-3">
          🔒 Your details are 100% private and protected. No spam ever.
        </p>
      </div>
    </form>
  );
}
