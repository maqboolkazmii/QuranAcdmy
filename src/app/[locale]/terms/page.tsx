// src/app/[locale]/terms/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'AyatBridge Academy terms of service, class attendance, and code of conduct.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory min-h-screen pt-28 pb-20">
        <div className="container-brand max-w-4xl card p-8 md:p-14 border border-gray-100">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-400 mb-8">Last Updated: November 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">1. Acceptance of Terms</h2>
              <p>
                By booking a free trial class or enrolling in an educational package with AyatBridge Academy, you agree to these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">2. Free Trial Policy</h2>
              <p>
                Each new student is entitled to one 30-minute free trial class with no financial commitment. Free trials are subject to teacher availability.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">3. Rescheduling & Missed Classes</h2>
              <p>
                To reschedule a scheduled class, notice must be provided to the academy coordinator at least 4 hours before the class time. Classes missed without advance notice may be forfeited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">4. Code of Islamic Conduct</h2>
              <p>
                Both teachers and students are expected to maintain Islamic etiquette (Adab), respectful speech, and appropriate attire during all video sessions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
