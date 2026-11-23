# 🗄️ Database Documentation — AyatBridge Academy
## PostgreSQL with Supabase

This document outlines the database architecture, schema definitions, Row Level Security (RLS) policies, and step-by-step setup guide for connecting Supabase.

---

## 1. Quick Setup Guide (Free Tier)

### Step 1: Create a Free Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and sign in (using GitHub or Email).
2. Click **"New Project"**.
3. Set:
   - **Name:** `ayatbridge-academy`
   - **Database Password:** (Generate a strong password and save it securely)
   - **Region:** Choose a region close to your primary market (e.g. `London (eu-west-2)` or `Frankfurt (eu-central-1)`).
   - **Pricing Plan:** Free tier ($0/month).
4. Click **"Create new project"** (takes ~1-2 minutes to provision).

---

### Step 2: Apply the SQL Schema
1. In your Supabase dashboard, click on the **SQL Editor** icon in the left sidebar (looks like `>_`).
2. Click **"New Query"**.
3. Copy the entire contents of [`supabase/migrations/001_initial_schema.sql`](file:///Users/syedmaqbool/quran/supabase/migrations/001_initial_schema.sql).
4. Paste it into the SQL Editor and click **Run** (or `Cmd + Enter`).
5. You should see `Success. No rows returned`.

---

### Step 3: Copy Your API Keys into `.env.local`
1. In your Supabase dashboard, go to **Project Settings** (gear icon at bottom left) $\rightarrow$ **API**.
2. Find:
   - **Project URL:** e.g. `https://xyzcompany.supabase.co`
   - **anon / public key:** (starts with `eyJ...`)
   - **service_role key:** (click Reveal, starts with `eyJ...`)
3. Open (or create) `/Users/syedmaqbool/quran/.env.local` on your computer:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_WHATSAPP_NUMBER=+447700000000
   NEXT_PUBLIC_CONTACT_EMAIL=info@ayatbridge.academy
   ```
4. Restart your development server (`npm run dev`).

---

## 2. Database Entities

### `trial_bookings` Table
| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `TEXT` | PRIMARY KEY | Unique reference ID (e.g. `tb_1732400000_abcde`) |
| `full_name` | `TEXT` | NOT NULL | Parent or adult student full name |
| `email` | `TEXT` | NOT NULL | Contact email for Google Meet links |
| `whatsapp` | `TEXT` | NOT NULL | International WhatsApp phone number |
| `country` | `TEXT` | NOT NULL | Student's country of residence |
| `age_group` | `TEXT` | NOT NULL | e.g. `5-8`, `9-12`, `13-17`, `18-25`, `26-40`, `40+` |
| `course_id` | `TEXT` | NOT NULL | Foreign key to course (e.g. `tajweed`, `noorani-qaida`) |
| `teacher_gender` | `TEXT` | NOT NULL DEFAULT `'no-preference'` | `'male'`, `'female'`, `'no-preference'` |
| `class_type` | `TEXT` | NOT NULL DEFAULT `'one-to-one'` | `'one-to-one'` or `'group'` |
| `timezone` | `TEXT` | NOT NULL DEFAULT `'UTC'` | Student's local timezone (e.g. `Europe/London`) |
| `preferred_days` | `TEXT[]` | DEFAULT `'{}'` | Array of chosen days (e.g. `{"Monday", "Wednesday"}`) |
| `preferred_time` | `TEXT` | DEFAULT `'Anytime'` | e.g. `'Evening (16:00 – 20:00)'` |
| `message` | `TEXT` | DEFAULT `''` | Student learning goals / prior background |
| `is_minor` | `BOOLEAN`| DEFAULT `false` | True if student is under 18 years |
| `guardian_consent` | `BOOLEAN` | DEFAULT `false` | Safeguarding consent from parent |
| `status` | `TEXT` | NOT NULL DEFAULT `'pending'` | `'pending'`, `'confirmed'`, `'completed'`, `'cancelled'` |
| `assigned_teacher_id` | `TEXT` | NULL | Assigned instructor ID (e.g. `t-1`) |
| `google_meet_link` | `TEXT` | NULL | Google Meet room URL |
| `created_at` | `TIMESTAMPTZ` | DEFAULT `NOW()` | Submission timestamp |
| `updated_at` | `TIMESTAMPTZ` | DEFAULT `NOW()` | Auto-updated via PostgreSQL trigger |

---

## 3. Security & Safeguarding (RLS Policies)

> [!IMPORTANT]
> **Row Level Security (RLS)** is enabled on all tables:
> - **Zero Public Read Access:** Anonymous public users CANNOT query, view, or scrape student booking records.
> - **Public Insert:** Public visitors can ONLY insert their own booking request.
> - **Admin Access:** Only backend code using the `SUPABASE_SERVICE_ROLE_KEY` or authenticated admin users in Supabase Studio can read, edit, confirm, or delete student records.
