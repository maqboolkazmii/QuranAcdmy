// src/app/page.tsx
// Root page at "/" — redirects to the default locale.
// Because our middleware handles the redirect, this file is a safety fallback.
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en');
}
