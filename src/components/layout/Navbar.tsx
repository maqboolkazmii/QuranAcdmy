'use client';
// src/components/layout/Navbar.tsx
//
// ─── TEACHING NOTE ───────────────────────────────────────────────────────────
// 'use client' at the top tells Next.js this component runs in the browser.
// We need this because we use:
//   • useState  — to track mobile menu open/close state
//   • useEffect — to listen for scroll events (adds shadow on scroll)
//   • usePathname — to highlight the active nav link
//
// Server Components cannot use browser APIs or React hooks.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
// LanguageSwitcher temporarily hidden — English only MVP
// import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

// ─── Sub-component: NavLink ───────────────────────────────────────────────────

/**
 * A single navigation link that highlights itself when the route is active.
 *
 * Props:
 *   href   — the page URL to link to (already locale-prefixed)
 *   label  — the visible link text
 *   onClick — optional handler (used to close the mobile menu)
 */
function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();

  // A link is "active" when the current URL starts with the link's href.
  // We exclude the root "/" to avoid every link being active.
  const isActive =
    href !== '/' && pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative text-sm font-medium transition-colors duration-200',
        'after:absolute after:bottom-0 after:start-0 after:h-0.5 after:w-0',
        'after:bg-brand-gold after:transition-all after:duration-300',
        'hover:text-brand-primary hover:after:w-full',
        isActive
          ? 'text-brand-primary after:w-full'
          : 'text-brand-charcoal'
      )}
    >
      {label}
    </Link>
  );
}

// ─── Main Component: Navbar ───────────────────────────────────────────────────

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  // State: is the mobile hamburger menu open?
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State: has the user scrolled down? (used to add a shadow)
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events. When scrollY > 10px, set isScrolled = true.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Cleanup: remove the event listener when this component unmounts.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  // [] means: run this effect only once, on first render.

  // Build locale-prefixed href for each nav item.
  const navItems = [
    { label: t('home'),     href: `/${locale}` },
    { label: t('about'),    href: `/${locale}/about` },
    { label: t('courses'),  href: `/${locale}/courses` },
    { label: t('teachers'), href: `/${locale}/teachers` },
    { label: t('pricing'),  href: `/${locale}/pricing` },
    { label: t('contact'),  href: `/${locale}/contact` },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm',
        'border-b border-gray-100 transition-shadow duration-300',
        isScrolled && 'shadow-brand'
      )}
    >
      <nav className="container-brand flex h-16 items-center justify-between">

        {/* ── Logo ── */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 group"
          aria-label="AyatBridge Academy — Home"
        >
          {/* Icon placeholder — replace with SVG logo in Phase 3 */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="block font-serif font-bold text-brand-primary text-base leading-none">
              AyatBridge
            </span>
            <span className="block text-xs text-brand-gold font-medium tracking-wide">
              Academy
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* ── Desktop Right Actions ── */}
        <div className="hidden md:flex items-center gap-4">
          {/* LanguageSwitcher — will be enabled in Phase 4 (multilingual) */}

          <Link href={`/${locale}/book-trial`} className="btn-primary text-sm py-2">
            {t('freeTrial')}
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <div className="flex md:hidden items-center gap-3">
          {/* LanguageSwitcher compact — enabled in Phase 4 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg text-brand-charcoal hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-4">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <Link
              href={`/${locale}/book-trial`}
              className="btn-primary text-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('freeTrial')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
