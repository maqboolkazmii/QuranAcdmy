// src/lib/data/teachers.ts
// Verified teacher profiles for AyatBridge Academy.

import type { Teacher } from '@/types';

export const teachers: Teacher[] = [
  {
    id: 't-1',
    name: 'Qari Muhammad Abdullah',
    gender: 'male',
    qualifications: ['Ijazah in Hafs \'an \'Asim', 'Al-Azhar University Graduate', 'Hafiz-ul-Quran'],
    languages: ['English', 'Arabic', 'Urdu'],
    courses: ['tajweed', 'hifz', 'quran-reading'],
    bio: 'Over 8 years of international online teaching experience with children and adults in the UK and USA. Specialist in Tajweed correction and Hifz memorisation.',
    experience: 8,
  },
  {
    id: 't-2',
    name: 'Ustadha Fatima Al-Zahra',
    gender: 'female',
    qualifications: ['Certified Tajweed Teacher', 'BA in Islamic Studies', 'Hafiza-tul-Quran'],
    languages: ['English', 'Urdu'],
    courses: ['noorani-qaida', 'tajweed', 'islamic-studies'],
    bio: 'Passionate female Quran tutor dedicated to creating a nurturing and patient learning space for young children and female students of all ages.',
    experience: 6,
  },
  {
    id: 't-3',
    name: 'Sheikh Ahmad Al-Mansoor',
    gender: 'male',
    qualifications: ['Sanad in 10 Qira\'at', 'MA in Quranic Exegesis', 'Senior Qari'],
    languages: ['English', 'Arabic'],
    courses: ['tafseer', 'tajweed', 'quran-translation'],
    bio: 'Scholarly instructor with classical training in Tafseer, Arabic grammar, and advanced Tajweed. Teaches both youth and adult learners.',
    experience: 12,
  },
  {
    id: 't-4',
    name: 'Ustadha Maryam Siddiqui',
    gender: 'female',
    qualifications: ['Certified Noorani Qaida Instructor', 'Diploma in Child Pedagogy', 'Hafiza'],
    languages: ['English', 'Urdu'],
    courses: ['noorani-qaida', 'duas-salah', 'quran-reading'],
    bio: 'Specialist in early childhood Quran learning. Uses engaging, step-by-step interactive methods to help beginners build strong foundations.',
    experience: 5,
  },
  {
    id: 't-5',
    name: 'Qari Bilal Hasan',
    gender: 'male',
    qualifications: ['Wifaq-ul-Madaris Al-Arabia Certified', 'Gold Medalist in Qira\'at', 'Hafiz'],
    languages: ['English', 'Urdu', 'Pashto'],
    courses: ['hifz', 'tajweed', 'noorani-qaida'],
    bio: 'Friendly and motivational Hifz mentor who has helped over 40 international students complete full and partial Quran memorization.',
    experience: 9,
  },
  {
    id: 't-6',
    name: 'Ustadha Aisha Farooq',
    gender: 'female',
    qualifications: ['Ijazah in Tajweed & Tarteel', 'MA in Arabic Language', 'Alimah Graduate'],
    languages: ['English', 'Arabic', 'Urdu'],
    courses: ['tajweed', 'quran-translation', 'islamic-studies'],
    bio: 'Specialist in teaching sisters and young Muslim women. Focuses on word-by-word Quran translation and Tajweed beauty.',
    experience: 7,
  },
];

export function getFeaturedTeachers(count = 4): Teacher[] {
  return teachers.slice(0, count);
}
