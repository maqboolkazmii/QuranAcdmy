// src/app/[locale]/page.tsx
// Homepage — Server Component.
// Imports and composes the page sections.

import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* TODO Phase 3: Add CoursesSection, WhyUsSection, TeachersSection,
                          PricingSection, TestimonialsSection, FAQSection, CTASection */}
      </main>
      <Footer />
    </>
  );
}
