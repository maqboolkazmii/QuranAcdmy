// src/types/index.ts
// Shared TypeScript types for the AyatBridge Academy project.
// Keep domain types here so they can be imported anywhere without circular deps.

// ─── Locale ──────────────────────────────────────────────────────────────────

export type Locale = 'en' | 'ur' | 'ar';

export interface LocaleConfig {
  code: Locale;
  label: string;        // Native name e.g. "English", "اردو", "العربية"
  dir: 'ltr' | 'rtl';
  flag: string;         // Emoji flag
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Courses ─────────────────────────────────────────────────────────────────

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'all-levels';

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: CourseLevel;
  ageGroup: string;      // e.g. "5+ years" | "Adults" | "All ages"
  classType: ('one-to-one' | 'group')[];
  icon: string;          // Lucide icon name
  color: string;         // Tailwind bg color class
  learningOutcomes?: string[];
  targetAudience?: string[];
  teachingApproach?: string;
  prerequisites?: string;
  duration?: string;
}

// ─── Teachers ────────────────────────────────────────────────────────────────

export type TeacherGender = 'male' | 'female';

export interface Teacher {
  id: string;
  name: string;
  gender: TeacherGender;
  qualifications: string[];
  languages: string[];
  courses: string[];     // Course slugs
  bio: string;
  experience: number;    // Years
  imageUrl?: string;
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  classesPerWeek: number;
  price: number | null;  // null = inquiry-based
  currency: string;      // ISO 4217 e.g. 'GBP' | 'USD' | 'EUR'
  classType: 'one-to-one' | 'group';
  features: string[];
  popular: boolean;
}

// ─── Trial Booking ───────────────────────────────────────────────────────────

export type AgeGroup =
  | '5-8'
  | '9-12'
  | '13-17'
  | '18-25'
  | '26-40'
  | '40+';

export type ClassType = 'one-to-one' | 'group';

export interface TrialBookingFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  ageGroup: AgeGroup;
  courseId: string;
  teacherGender: TeacherGender | 'no-preference';
  classType: ClassType;
  timezone: string;
  preferredDays: string[];
  preferredTime: string;
  message: string;
  // Child safeguarding
  isMinor: boolean;
  guardianConsent: boolean;
}

export interface TrialBookingRecord extends TrialBookingFormData {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;    // ISO 8601
  updatedAt: string;
}
