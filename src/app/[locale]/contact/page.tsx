'use client';
// src/app/[locale]/contact/page.tsx
// Contact Page with direct WhatsApp CTA, email support, and inquiry submission.

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Mail,
  MessageCircle,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: 'General Inquiry',
    message: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    // Simulate inquiry submission
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="bg-brand-ivory bg-geometric-pattern min-h-screen pt-28 pb-20">
        <div className="container-brand">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-brand-primary text-xs font-semibold mb-3">
              <MessageCircle className="w-3.5 h-3.5" /> Fast Response Within 2 Hours
            </span>
            <h1 className="section-heading text-3xl md:text-5xl mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Have questions about courses, teacher assignment, scheduling, or sibling discounts? We are here to help you 7 days a week.
            </p>
          </div>

          {/* Contact Methods Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp */}
            <div className="card p-8 border border-emerald-100 bg-emerald-50/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-1">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Fastest way to reach our academic coordinator. Ideal for quick scheduling or advice.
                </p>
              </div>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447700000000'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="card p-8 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-1">
                  Email Support
                </h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  For formal inquiries, syllabus discussions, or feedback.
                </p>
              </div>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@ayatbridge.academy'}`}
                className="btn-outline text-xs py-2.5 text-center"
              >
                info@ayatbridge.academy
              </a>
            </div>

            {/* Availability */}
            <div className="card p-8 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-1">
                  Support Hours
                </h3>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                  Monday – Sunday: 08:00 to 22:00 (UK / GMT)
                </p>
                <p className="text-xs text-gray-500">
                  Covering USA (EST/PST), UK, and European time zones.
                </p>
              </div>
              <div className="text-xs font-semibold text-brand-primary flex items-center gap-1.5 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Coordinators Online Now</span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="card p-8 md:p-12 max-w-2xl mx-auto border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-2 text-center">
              Send Us a Message
            </h2>
            <p className="text-xs text-gray-500 text-center mb-8">
              Fill out the form below and we will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-brand-primary rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  JazakAllah Khair for reaching out. An academic coordinator will review your inquiry and reply via email or WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abdullah Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Trial Class Question">Trial Class Question</option>
                      <option value="Sibling / Family Discount">Sibling / Family Discount</option>
                      <option value="Teacher Application">Teacher Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you or your family?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm font-bold shadow-brand flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
