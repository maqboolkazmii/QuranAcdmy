// src/lib/supabase.ts
// Secure Supabase client utility for AyatBridge Academy.
//
// ─── SECURITY NOTE ───────────────────────────────────────────────────────────
// We NEVER expose the `SUPABASE_SERVICE_ROLE_KEY` to the browser.
// This utility runs strictly in Node.js server environments (Server Actions / API routes).
// ─────────────────────────────────────────────────────────────────────────────

import type { TrialBookingFormData } from '@/types';

interface SupabaseResponse<T> {
  data: T | null;
  error: string | null;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseReady(): boolean {
  return Boolean(
    SUPABASE_URL &&
      !SUPABASE_URL.includes('your-project-ref') &&
      SUPABASE_SERVICE_KEY &&
      !SUPABASE_SERVICE_KEY.includes('your-service-role-key')
  );
}

/**
 * Inserts a new free trial booking record into Supabase PostgreSQL.
 */
export async function insertTrialBooking(booking: Record<string, any>): Promise<SupabaseResponse<any>> {
  if (!isSupabaseReady()) {
    console.log('📌 [DEV MODE: Supabase not configured] Simulated database insert:', booking.id);
    return { data: booking, error: null };
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/trial_bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_SERVICE_KEY!,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify(booking),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Supabase DB error:', errorText);
      return { data: null, error: errorText };
    }

    const data = await res.json();
    return { data, error: null };
  } catch (err: any) {
    console.error('Supabase fetch exception:', err);
    return { data: null, error: err.message || 'Database connection error' };
  }
}
