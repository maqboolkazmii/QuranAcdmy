// src/lib/data/faqs.ts
// Frequently Asked Questions for AyatBridge Academy.

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'trial' | 'classes' | 'teachers' | 'billing';
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the Free Trial Class work?',
    answer:
      'Booking a free trial takes less than 2 minutes. Choose your course, time zone, and preferred teacher gender. We confirm your class time and email you a Google Meet link. You attend your 30-minute one-to-one session with zero obligation to continue.',
    category: 'trial',
  },
  {
    id: 'faq-2',
    question: 'Can I request a female Quran teacher for my child or daughter?',
    answer:
      'Yes, absolutely. We have certified, qualified female teachers available for girls, young children, and female adults. You can select your gender preference right on the booking form.',
    category: 'teachers',
  },
  {
    id: 'faq-3',
    question: 'What platform do you use for online classes?',
    answer:
      'All classes are conducted via Google Meet. It is free, secure, and works seamlessly in any browser without needing to install complicated software. You can join from a PC, laptop, iPad, or mobile phone.',
    category: 'classes',
  },
  {
    id: 'faq-4',
    question: 'What if I need to cancel or reschedule a class?',
    answer:
      'We understand that family life can be unpredictable. Simply notify your teacher or academy coordinator at least 4 hours in advance via WhatsApp, and we will happily reschedule your session at no extra charge.',
    category: 'classes',
  },
  {
    id: 'faq-5',
    question: 'How do monthly fees and payments work?',
    answer:
      'We offer transparent monthly fee plans with no hidden charges and no long-term contracts. Payments can be made easily via bank transfer, debit/credit card, or PayPal after your free trial is completed.',
    category: 'billing',
  },
  {
    id: 'faq-6',
    question: 'What qualifications do your teachers have?',
    answer:
      'All our teachers hold formal Islamic qualifications, including Al-Azhar certifications, Ijazah in Tajweed/Qira\'at, or degrees in Islamic Studies from recognized institutions. Each teacher is thoroughly vetted for teaching pedagogy and background security.',
    category: 'teachers',
  },
];
