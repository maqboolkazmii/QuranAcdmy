# 🚀 Deployment Guide — AyatBridge Academy
## Live Production Deployment on Vercel & GitHub

This guide covers taking AyatBridge Academy from your local computer to **live production on the global internet** using GitHub and Vercel's free tier.

---

## Part 1: Push Code to GitHub

### Step 1: Create a New GitHub Repository
1. Open your browser and go to [https://github.com/new](https://github.com/new).
2. Repository name: `ayatbridge-academy` (or your choice).
3. Set visibility: **Private** (recommended) or **Public**.
4. **Do NOT** initialize with README, .gitignore, or license (we already have all of these locally).
5. Click **"Create repository"**.

### Step 2: Link and Push from your Terminal
Open your Mac Terminal in `/Users/syedmaqbool/quran` and run (replace `YOUR_GITHUB_USERNAME` with your actual username):

```bash
cd /Users/syedmaqbool/quran

# 1. Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ayatbridge-academy.git

# 2. Ensure main branch is selected
git branch -M main

# 3. Push all commits to GitHub
git push -u origin main
```

---

## Part 2: Deploy to Vercel (Free Hosting)

Vercel is the creator of Next.js and provides the fastest, most reliable global CDN hosting for Next.js applications with automated SSL/HTTPS certificates.

### Step 1: Sign Up / Log In to Vercel
1. Go to [https://vercel.com](https://vercel.com).
2. Click **"Sign Up"** and choose **"Continue with GitHub"**.

### Step 2: Import Your Project
1. In your Vercel Dashboard, click **"Add New..."** $\rightarrow$ **"Project"**.
2. Find `ayatbridge-academy` in your GitHub repository list and click **"Import"**.

### Step 3: Configure Environment Variables
Before clicking Deploy, expand the **"Environment Variables"** section and add:

| Key | Example Value | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` | Production domain URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `447700000000` | Academy WhatsApp number |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `info@ayatbridge.academy` | Support email |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xyz.supabase.co` | Supabase project URL (if ready) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJh...` | Supabase anon key (if ready) |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJh...` | Supabase secret key (server only) |

*(Note: Even if Supabase keys are left empty initially, the website will deploy and run smoothly in demo mode!)*

### Step 4: Click Deploy!
Click the blue **"Deploy"** button.
Vercel will:
- Install dependencies
- Build Next.js 15 pages and static assets
- Generate dynamic XML sitemap
- Assign a free production URL (e.g. `https://ayatbridge-academy.vercel.app`)

---

## Part 3: Custom Domain Setup (e.g. `ayatbridge.academy`)

Once your site is live on Vercel:
1. In your Vercel project dashboard, go to **Settings** $\rightarrow$ **Domains**.
2. Type your domain: `ayatbridge.academy` (or your domain from Namecheap / GoDaddy / Cloudflare).
3. Vercel will give you 2 DNS records (A record pointing to `76.76.21.21` or CNAME `cname.vercel-dns.com`).
4. Paste these into your domain registrar's DNS settings.
5. Within a few minutes, Vercel automatically issues a free SSL certificate!
