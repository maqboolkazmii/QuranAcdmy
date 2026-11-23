// src/app/[locale]/privacy-policy/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'AyatBridge Academy privacy policy, student data protection, and child safeguarding standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory min-h-screen pt-28 pb-20">
        <div className="container-brand max-w-4xl card p-8 md:p-14 border border-gray-100">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 mb-8">Last Updated: November 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">1. Introduction</h2>
              <p>
                At AyatBridge Academy, we respect your privacy and are committed to protecting the personal data of our students and their families. This Privacy Policy outlines our practices regarding data collection, usage, and safeguarding in compliance with international privacy regulations (including GDPR and COPPA).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">2. Information We Collect</h2>
              <p>
                We only collect information necessary to deliver quality Quranic education:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Contact details: Parent/student name, email address, WhatsApp telephone number, country of residence.</li>
                <li>Learning preferences: Student age group, selected course, teacher gender preference, preferred scheduling and time zone.</li>
                <li>Communications: Messages submitted via our contact forms or customer support channels.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">3. Child Safeguarding & Parental Consent</h2>
              <p>
                For students under 18 years of age, we strictly require parental or legal guardian consent prior to any class scheduling. Parents always retain the right to observe any Google Meet session and request deletion of their child&apos;s contact records at any time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">4. Data Security</h2>
              <p>
                Student information is stored securely in encrypted databases. We will never sell, lease, or share your contact details with external third-party advertisers or telemarketers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
