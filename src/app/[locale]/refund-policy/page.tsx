// src/app/[locale]/refund-policy/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'AyatBridge Academy tuition refund, satisfaction guarantee, and cancellation policies.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory min-h-screen pt-28 pb-20">
        <div className="container-brand max-w-4xl card p-8 md:p-14 border border-gray-100">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-gray-400 mb-8">Last Updated: November 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">1. 100% Satisfaction Guarantee</h2>
              <p>
                If after your first paid class you are dissatisfied with your teacher or educational experience, you may request a full refund or an immediate teacher change at no extra charge.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">2. Monthly Cancellation</h2>
              <p>
                Tuition packages operate on a flexible monthly basis. There are no lock-in contracts. You may cancel your subscription at any time before your next billing cycle with zero penalty.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-2">3. Teacher Absence Make-Up Policy</h2>
              <p>
                If a teacher cancels or is unavailable for a scheduled class, a make-up class will be scheduled at your convenience, or the lesson fee will be credited to your next billing invoice.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
