-- ==============================================================================
-- AyatBridge Academy — Initial Database Schema
-- Version: 1.0.0
-- Database: PostgreSQL (Supabase)
-- ==============================================================================

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TRIAL BOOKINGS TABLE (Core MVP Entity)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.trial_bookings (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    country TEXT NOT NULL,
    age_group TEXT NOT NULL,
    course_id TEXT NOT NULL,
    teacher_gender TEXT NOT NULL DEFAULT 'no-preference',
    class_type TEXT NOT NULL DEFAULT 'one-to-one',
    timezone TEXT NOT NULL DEFAULT 'UTC',
    preferred_days TEXT[] DEFAULT '{}',
    preferred_time TEXT DEFAULT 'Anytime',
    message TEXT DEFAULT '',
    is_minor BOOLEAN DEFAULT FALSE,
    guardian_consent BOOLEAN DEFAULT FALSE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    assigned_teacher_id TEXT,
    google_meet_link TEXT,
    admin_notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for fast query performance
CREATE INDEX IF NOT EXISTS idx_trial_bookings_email ON public.trial_bookings(email);
CREATE INDEX IF NOT EXISTS idx_trial_bookings_status ON public.trial_bookings(status);
CREATE INDEX IF NOT EXISTS idx_trial_bookings_created_at ON public.trial_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trial_bookings_course_id ON public.trial_bookings(course_id);

-- ------------------------------------------------------------------------------
-- 2. INQUIRIES TABLE (Contact Form Messages)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT DEFAULT '',
    subject TEXT NOT NULL DEFAULT 'General Inquiry',
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);

-- ------------------------------------------------------------------------------
-- 3. AUTOMATIC UPDATED_AT TRIGGER
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_trial_bookings_updated_at ON public.trial_bookings;
CREATE TRIGGER trigger_trial_bookings_updated_at
BEFORE UPDATE ON public.trial_bookings
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- Strict Security: Never expose student records publicly!
-- ------------------------------------------------------------------------------
ALTER TABLE public.trial_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Policy 1: Service role (Next.js server API) has full access
CREATE POLICY "Service role full access to trial_bookings"
ON public.trial_bookings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Policy 2: Public can only insert new trial booking requests (no public read/update/delete)
CREATE POLICY "Public insert only for trial_bookings"
ON public.trial_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy 3: Public can only insert new inquiries
CREATE POLICY "Public insert only for inquiries"
ON public.inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- End of Migration
