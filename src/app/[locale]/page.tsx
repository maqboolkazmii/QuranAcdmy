// src/app/[locale]/page.tsx
// Homepage — Server Component.
// Imports and composes the page sections.

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CoursesSection from '@/components/sections/CoursesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CTASection from '@/components/sections/CTASection';
// WhyUsSection will be imported here after you build it (your exercise below)

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <HowItWorksSection />
        {/* <WhyUsSection /> ← your exercise — uncomment when ready */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
