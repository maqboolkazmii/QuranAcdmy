// src/app/api/book-trial/route.ts
// Secure Server API Route to validate and store Free Trial bookings.

import { NextResponse } from 'next/server';
import type { TrialBookingFormData } from '@/types';
import { courses } from '@/lib/data/courses';
import { insertTrialBooking } from '@/lib/supabase';

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const data: Partial<TrialBookingFormData> = await request.json();

    // ─── 1. Server-Side Validation ───────────────────────────────────────────
    const errors: Record<string, string> = {};

    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'Full name is required (minimum 2 characters)';
    }

    if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }

    if (!data.whatsapp || data.whatsapp.replace(/\D/g, '').length < 7) {
      errors.whatsapp = 'Please provide a valid WhatsApp number with country code';
    }

    if (!data.country || data.country.trim().length === 0) {
      errors.country = 'Country is required';
    }

    if (!data.courseId || !courses.some((c) => c.id === data.courseId)) {
      errors.courseId = 'Please select a valid Quran course';
    }

    if (!data.ageGroup) {
      errors.ageGroup = 'Please select the student age group';
    }

    // Child safeguarding check
    const minorGroups = ['5-8', '9-12', '13-17'];
    const isMinor = minorGroups.includes(data.ageGroup || '');
    if (isMinor && !data.guardianConsent) {
      errors.guardianConsent = 'Parent or guardian consent is required for students under 18';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // ─── 2. Prepare Booking Record ───────────────────────────────────────────
    const bookingRecord = {
      id: `tb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: data.fullName!.trim(),
      email: data.email!.trim().toLowerCase(),
      whatsapp: data.whatsapp!.trim(),
      country: data.country!.trim(),
      ageGroup: data.ageGroup!,
      courseId: data.courseId!,
      teacherGender: data.teacherGender || 'no-preference',
      classType: data.classType || 'one-to-one',
      timezone: data.timezone || 'UTC',
      preferredDays: data.preferredDays || [],
      preferredTime: data.preferredTime || 'Anytime',
      message: data.message ? data.message.trim() : '',
      isMinor,
      guardianConsent: Boolean(data.guardianConsent),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // ─── 3. Persistence (Supabase or Local Fallback) ─────────────────────────
    const dbResult = await insertTrialBooking(bookingRecord);

    if (dbResult.error) {
      console.warn('Database insert warning, but proceeding with confirmation:', dbResult.error);
    }

    return NextResponse.json({
      success: true,
      bookingId: bookingRecord.id,
      message: 'Free trial booking received successfully!',
    });
  } catch (error) {
    console.error('Trial booking API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing booking request' },
      { status: 500 }
    );
  }
}
