// src/lib/data/pricing.ts
// Accurate monthly fee structure based on international Islamic academy standards (Al Muntazir model).
// Multi-currency support for USA (USD), UK (GBP), Europe (EUR), and Australia (AUD).

import type { PricingPlan, CurrencyCode } from '@/types';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  region: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', region: 'UK' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', region: 'USA & Global' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', region: 'Europe' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', region: 'Australia' },
};

// ─── Individual Plans (30 Mins / Class) ──────────────────────────────────────
export const individualPlans: PricingPlan[] = [
  {
    id: 'starter-2days',
    name: '2 Days a Week',
    description: 'Ideal for slow-paced beginners starting Noorani Qaida or young toddlers.',
    classesPerWeek: 2,
    classesPerMonth: 8,
    durationMinutes: 30,
    category: 'individual',
    classType: 'one-to-one',
    popular: false,
    prices: {
      GBP: 30,
      USD: 35,
      EUR: 30,
      AUD: 60,
    },
    features: [
      '2 Days / Week (8 Classes / Month)',
      '30 Minutes per Class (4 Hours Total)',
      '1-on-1 Dedicated Male or Female Teacher',
      'Flexible Timing & Rescheduling',
      'Tajweed & Daily Duas Included',
      'Monthly Progress Report',
    ],
  },
  {
    id: 'standard-3days',
    name: '3 Days a Week',
    description: 'Our most popular plan for consistent Tajweed, Reading and Quran fluency.',
    classesPerWeek: 3,
    classesPerMonth: 12,
    durationMinutes: 30,
    category: 'individual',
    classType: 'one-to-one',
    popular: true,
    prices: {
      GBP: 30,
      USD: 40,
      EUR: 37,
      AUD: 67,
    },
    features: [
      '3 Days / Week (12 Classes / Month)',
      '30 Minutes per Class (6 Hours Total)',
      'Priority Time Slots (Morning or Evening)',
      '1-on-1 Certified Islamic Tutor',
      'Noorani Qaida / Tajweed / Islamic Studies',
      'Bi-Weekly Progress Tracking',
      'Rescheduling with 4 Hours Notice',
    ],
  },
  {
    id: 'intensive-5days',
    name: '5 Days a Week (Daily)',
    description: 'Best for Quran Memorization (Hifz) and fast-track Quran recitation.',
    classesPerWeek: 5,
    classesPerMonth: 20,
    durationMinutes: 30,
    category: 'individual',
    classType: 'one-to-one',
    popular: false,
    prices: {
      GBP: 35,
      USD: 50,
      EUR: 40,
      AUD: 75,
    },
    features: [
      '5 Days / Week (20 Classes / Month)',
      '30 Minutes per Class (10 Hours Total)',
      'Daily Supervision & Sabaq / Revision Routine',
      'Dedicated Hifz & Tajweed Specialist',
      'Weekly Oral Examination',
      'Free Access to Islamic Studies & Duas',
    ],
  },
  {
    id: 'weekend-1day',
    name: 'Weekend / 1 Day a Week',
    description: 'Designed for busy school-going children or working adults.',
    classesPerWeek: 1,
    classesPerMonth: 4,
    durationMinutes: 30,
    category: 'individual',
    classType: 'one-to-one',
    popular: false,
    prices: {
      GBP: 25,
      USD: 35,
      EUR: 25,
      AUD: 55,
    },
    features: [
      '1 Day / Week (4 Classes / Month)',
      '30 Minutes per Class (2 Hours Total)',
      'Weekend Time Slots Available',
      'Personalized Learning Speed',
      'Full One-to-One Attention',
    ],
  },
];

// ─── Family Plans (2 Students / 60 Mins / Class) ─────────────────────────────
export const familyPlans: PricingPlan[] = [
  {
    id: 'family-2days',
    name: 'Family 2 Days / Week',
    description: 'Great for siblings sharing learning days at a discounted package.',
    classesPerWeek: 2,
    classesPerMonth: 8,
    durationMinutes: 60,
    category: 'family',
    classType: 'one-to-one',
    popular: false,
    prices: {
      GBP: 50,
      USD: 60,
      EUR: 50,
      AUD: 105,
    },
    features: [
      '2 Students Covered (60 Mins / Day)',
      '2 Days / Week (8 Days / Month | 8 Hours)',
      'Sibling Learning or Separate Sessions',
      'Dedicated Male or Female Teacher',
      'Cost-Effective Sibling Discount',
    ],
  },
  {
    id: 'family-3days',
    name: 'Family 3 Days / Week',
    description: 'Recommended for 2 children learning Quran and Islamic studies together.',
    classesPerWeek: 3,
    classesPerMonth: 12,
    durationMinutes: 60,
    category: 'family',
    classType: 'one-to-one',
    popular: true,
    prices: {
      GBP: 55,
      USD: 70,
      EUR: 70,
      AUD: 120,
    },
    features: [
      '2 Students Covered (60 Mins / Day)',
      '3 Days / Week (12 Days / Month | 12 Hours)',
      'Priority Evening Slots for School Kids',
      'Complete Qaida, Tajweed & Duas Coverage',
      'Save over 25% compared to single plans',
    ],
  },
  {
    id: 'family-5days',
    name: 'Family 5 Days / Week',
    description: 'Intensive daily learning package for 2 siblings or family members.',
    classesPerWeek: 5,
    classesPerMonth: 20,
    durationMinutes: 60,
    category: 'family',
    classType: 'one-to-one',
    popular: false,
    prices: {
      GBP: 70,
      USD: 90,
      EUR: 80,
      AUD: 140,
    },
    features: [
      '2 Students Covered (60 Mins / Day)',
      '5 Days / Week (20 Days / Month | 20 Hours)',
      'Daily Sabaq & Hifz Revision Routine',
      'Comprehensive Islamic Education',
      'Maximum Family Savings',
    ],
  },
];

// Default plans array for simple consumption
export const pricingPlans = individualPlans;
