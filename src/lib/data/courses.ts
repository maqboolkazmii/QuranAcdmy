// src/lib/data/courses.ts
// Comprehensive course catalog for AyatBridge Academy with full learning syllabi.

import type { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'noorani-qaida',
    slug: 'noorani-qaida',
    title: 'Noorani Qaida',
    description:
      'The foundational course for absolute beginners. Master the Arabic alphabet, correct pronunciation (Makharij), and rules for joining letters.',
    level: 'beginner',
    ageGroup: '4+ years & Adults',
    classType: ['one-to-one', 'group'],
    icon: 'BookOpen',
    color: 'bg-emerald-600',
    duration: '3 to 6 months',
    prerequisites: 'None. Designed for complete beginners with zero Arabic knowledge.',
    learningOutcomes: [
      'Recognise and pronounce all 28 Arabic letters from their exact articulation points (Makharij).',
      'Understand short vowels (Fatha, Kasra, Damma) and Tanween.',
      'Learn compound letters (Murakkabat) and letter connection in words.',
      'Master basic rules of Sukoon, Shaddah, and Madd.',
      'Read short Quranic words and sentences accurately without hesitation.',
    ],
    targetAudience: [
      'Young children starting their Quranic journey.',
      'Adult converts / reverts learning to read Quranic Arabic.',
      'Anyone who struggles with recognizing connected Arabic letters.',
    ],
    teachingApproach:
      'Gentle, repetitive, and positive reinforcement. Male and female teachers use interactive digital Qaida slides with audio playback to make lessons engaging for children.',
  },
  {
    id: 'quran-reading',
    slug: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    description:
      'Transition from basic Qaida to fluent, confident recitation of the entire Holy Quran with proper flow and rhythm.',
    level: 'beginner',
    ageGroup: '6+ years & Adults',
    classType: ['one-to-one', 'group'],
    icon: 'BookMarked',
    color: 'bg-teal-600',
    duration: '6 to 12 months (Full Quran completion)',
    prerequisites: 'Completion of Noorani Qaida or ability to read basic Arabic words.',
    learningOutcomes: [
      'Read the Quran fluently from Surah Al-Fatiha to Surah An-Nas.',
      'Correct common recitation mistakes such as rushing, skipping letters, or mispronouncing vowels.',
      'Learn essential stop and pause signs (Waqf) within Quranic verses.',
      'Build daily Quran reading discipline and confidence.',
    ],
    targetAudience: [
      'Students who finished Qaida and want to read the complete Mushaf.',
      'Adults who learned as children and want to refresh their reading fluency.',
    ],
    teachingApproach:
      'Personalized pacing with daily reading checkpoints. Teachers listen attentively word-by-word, immediately gently correcting mispronunciations.',
  },
  {
    id: 'tajweed',
    slug: 'tajweed',
    title: 'Quran with Tajweed',
    description:
      'Master the theoretical and practical science of Tajweed. Recite the Quran beautifully as it was revealed to Prophet Muhammad ﷺ.',
    level: 'intermediate',
    ageGroup: '8+ years & Adults',
    classType: ['one-to-one'],
    icon: 'Mic2',
    color: 'bg-brand-primary',
    duration: '6 to 9 months',
    prerequisites: 'Ability to read Quran text with reasonable fluency.',
    learningOutcomes: [
      'In-depth mastery of Makharij (points of articulation) and Sifaat (characteristics of letters).',
      'Rules of Noon Saakin and Tanween (Izhar, Idgham, Iqlab, Ikhfa).',
      'Rules of Meem Saakin and Ghunnah rules.',
      'Types and lengths of Madd (elongation) with practical application.',
      'Heavy and light letters (Tafkheem and Tarqeeq) applied naturally during recitation.',
    ],
    targetAudience: [
      'Students aspiring for beautiful, scholarly recitation.',
      'Parents wanting their children to recite with authentic Tajweed rules.',
      'Adults preparing for Quran memorization.',
    ],
    teachingApproach:
      'Ijazah-certified tutors demonstrate vocal acoustics and physical lip/tongue placements using video diagrams and structured drills.',
  },
  {
    id: 'hifz',
    slug: 'hifz',
    title: 'Quran Memorization (Hifz)',
    description:
      'A structured, step-by-step Hifz programme with daily revision, proven memorisation techniques, and regular supervision by Hafiz instructors.',
    level: 'advanced',
    ageGroup: '7+ years & Adults',
    classType: ['one-to-one'],
    icon: 'Brain',
    color: 'bg-purple-600',
    duration: '2 to 3 years (customizable pace: full Quran or selected Surahs)',
    prerequisites: 'Fluent Quran recitation with Tajweed.',
    learningOutcomes: [
      'Memorise the Holy Quran (Full Quran or Juz Amma / selected chapters).',
      'Establish a rock-solid 3-tier revision routine: Sabaq (New), Sabqi (Recent), and Manzil (Distant revision).',
      'Strengthen mental retention and concentration.',
      'Receive a formal completion certificate upon finishing.',
    ],
    targetAudience: [
      'Dedicated children and youth aspiring to become Hafiz / Hafiza.',
      'Busy working professionals wanting to memorize key Surahs (Yaseen, Mulk, Kahf, Waqiah).',
    ],
    teachingApproach:
      'One-to-one daily supervision with individualized memorization targets. Weekly oral examinations ensure old memorization is never forgotten.',
  },
  {
    id: 'islamic-studies',
    slug: 'islamic-studies',
    title: 'Islamic Studies for Kids & Youth',
    description:
      'Comprehensive Islamic curriculum covering Aqeedah, Fiqh, Seerah of the Prophet ﷺ, Islamic history, and noble character/manners (Akhlaq).',
    level: 'all-levels',
    ageGroup: '5 – 16 years',
    classType: ['one-to-one', 'group'],
    icon: 'GraduationCap',
    color: 'bg-amber-600',
    duration: 'Ongoing modular course (Levels 1 to 4)',
    prerequisites: 'None.',
    learningOutcomes: [
      'Understand the 5 Pillars of Islam and 6 Articles of Faith.',
      'Learn stories of the Prophets from Adam (AS) to Prophet Muhammad ﷺ and lessons for daily life.',
      'Practical understanding of Halal and Haram in modern western societies.',
      'Develop strong Islamic identity, empathy, and respect for parents and community.',
    ],
    targetAudience: [
      'Muslim children growing up in the USA, UK, and European diaspora.',
      'Parents seeking structured Islamic education beyond weekend schools.',
    ],
    teachingApproach:
      'Story-based interactive lessons with digital presentation slides, quizzes, and real-life scenarios relevant to growing up in western environments.',
  },
  {
    id: 'duas-salah',
    slug: 'duas-salah',
    title: 'Daily Duas & Salah Mastery',
    description:
      'Learn the step-by-step method of Wudu and Salah with word-by-word meanings, plus essential Sunnah Masnoon Duas for daily routine.',
    level: 'beginner',
    ageGroup: 'All ages',
    classType: ['one-to-one', 'group'],
    icon: 'HandHeart',
    color: 'bg-rose-600',
    duration: '2 to 3 months',
    prerequisites: 'None.',
    learningOutcomes: [
      'Step-by-step practical method of Wudu (ablution) and Tayammum.',
      'Learn all 5 daily prayers (Fard, Sunnah, Witr) with accurate physical postures.',
      'Memorise Tashahhud, Durood-e-Ibrahimi, and Dua-e-Qunoot.',
      'Learn 25+ essential daily Duas (waking up, eating, sleeping, travelling, entering home).',
    ],
    targetAudience: [
      'Children aged 5–12 learning their first prayers.',
      'New Muslims wanting step-by-step guidance on praying Salah with peace of mind.',
    ],
    teachingApproach:
      'Visual demonstration of prayer positions with patient repetition of Arabic text accompanied by plain English explanations.',
  },
  {
    id: 'quran-translation',
    slug: 'quran-translation',
    title: 'Quran Translation & Vocabulary',
    description:
      'Build a direct, personal connection with Allah’s words through word-by-word Quranic Arabic translation and common root words.',
    level: 'intermediate',
    ageGroup: '12+ years & Adults',
    classType: ['one-to-one', 'group'],
    icon: 'Languages',
    color: 'bg-indigo-600',
    duration: '12 to 18 months',
    prerequisites: 'Ability to read Quran.',
    learningOutcomes: [
      'Understand the 85% most frequently occurring words in the Holy Quran.',
      'Directly comprehend verses during Salah without relying solely on translations.',
      'Basic Quranic Arabic grammar rules (verbs, nouns, prepositions).',
      'Word-by-word and running translation of selected Surahs.',
    ],
    targetAudience: [
      'Students who can recite the Quran but want to understand what they are reading.',
      'Adults and university students seeking intellectual engagement with the Quran.',
    ],
    teachingApproach:
      'Vocabulary flashcard method combined with analytical verse-by-verse translation in English or Urdu.',
  },
  {
    id: 'tafseer',
    slug: 'tafseer',
    title: 'Quran Tafseer (Exegesis)',
    description:
      'Scholarly exploration of the deep wisdom, historical context, Asbab al-Nuzool (revelation circumstances), and contemporary life lessons of the Quran.',
    level: 'advanced',
    ageGroup: 'Adults & Mature Youth',
    classType: ['one-to-one', 'group'],
    icon: 'ScrollText',
    color: 'bg-slate-600',
    duration: 'Modular ongoing',
    prerequisites: 'Good comprehension and reading capability.',
    learningOutcomes: [
      'Study classical Tafseer works (Tafseer Ibn Kathir, Ma\'ariful Quran, As-Sa\'di).',
      'Understand the historical and social background of revelations.',
      'Extract practical guidance for family life, ethics, and contemporary challenges.',
      'Deepen spiritual connection and reflection (Tadabbur) upon Allah’s verses.',
    ],
    targetAudience: [
      'Adults wanting deep scholarly reflection.',
      'Community leaders, teachers, and parents.',
    ],
    teachingApproach:
      'University-level discussion-oriented classes led by qualified Al-Azhar or Islamic University graduates.',
  },
];

export function getFeaturedCourses(count = 6): Course[] {
  return courses.slice(0, count);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
