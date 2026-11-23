// src/lib/data/pricing.ts
// Transparent monthly and flexible tuition packages.

import type { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    description: 'Perfect for beginners starting Noorani Qaida or slow-paced learners.',
    classesPerWeek: 2,
    price: 35,
    currency: 'GBP',
    classType: 'one-to-one',
    popular: false,
    features: [
      '2 One-to-One Classes / Week (8/mo)',
      '30 Minutes per Class',
      'Flexible Scheduling',
      'Male or Female Teacher',
      'Monthly Progress Report',
      'Recorded Class Assistance',
    ],
  },
  {
    id: 'standard',
    name: 'Standard (Recommended)',
    description: 'Most popular plan for steady Tajweed, Reading and Islamic Studies progress.',
    classesPerWeek: 3,
    price: 49,
    currency: 'GBP',
    classType: 'one-to-one',
    popular: true,
    features: [
      '3 One-to-One Classes / Week (12/mo)',
      '30 Minutes per Class',
      'Priority Time Slots',
      'Male or Female Certified Teacher',
      'Tajweed & Daily Duas Included',
      'Bi-Weekly Progress Updates',
      'Rescheduling with 4h Notice',
    ],
  },
  {
    id: 'intensive',
    name: 'Intensive Hifz / Daily',
    description: 'Designed for serious Quran memorization (Hifz) and accelerated fluency.',
    classesPerWeek: 5,
    price: 75,
    currency: 'GBP',
    classType: 'one-to-one',
    popular: false,
    features: [
      '5 One-to-One Classes / Week (20/mo)',
      '30-45 Minutes per Class',
      'Dedicated Hifz Supervisor',
      'Daily Revision & Sabaq Routine',
      'Weekly Oral Exam & Guidance',
      'Free Access to Islamic Studies',
    ],
  },
];
