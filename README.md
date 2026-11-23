# AyatBridge Academy

> **Tagline:** Connecting Hearts with the Holy Quran.

International online Quran education platform — Next.js 15 · TypeScript · Tailwind CSS · Supabase · next-intl.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template
cp .env.example .env.local
# Fill in your Supabase credentials

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
quran/
├── public/                 # Static assets (images, fonts, favicon)
├── src/
│   ├── app/                # Next.js App Router
│   │   └── [locale]/       # Language-prefixed routes (/en, /ur, /ar)
│   ├── components/
│   │   ├── ui/             # Atomic design tokens (Button, Card, Badge…)
│   │   ├── layout/         # Navbar, Footer
│   │   └── sections/       # Page-level sections (Hero, Courses, FAQ…)
│   ├── i18n/               # next-intl configuration
│   ├── lib/                # Utility functions, Supabase client
│   ├── messages/           # Translation JSON files (en, ur, ar)
│   └── types/              # Shared TypeScript types
├── .env.example
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| i18n | next-intl 3 |
| Database | Supabase (PostgreSQL) |
| Hosting | Vercel |
| Icons | Lucide React |
| Version Control | Git / GitHub |

---

## Languages Supported

| Language | Route | Direction |
|---|---|---|
| English | `/en/` | LTR |
| Urdu | `/ur/` | RTL |
| Arabic | `/ar/` | RTL |

---

## Environment Variables

See `.env.example` for all required variables. Never commit `.env.local`.

---

## Development Roadmap

- [x] Phase 1 — Requirements and architecture
- [ ] Phase 2 — Project foundation ← **current**
- [ ] Phase 3 — Design and frontend
- [ ] Phase 4 — Multilingual (i18n + RTL)
- [ ] Phase 5 — Trial booking form
- [ ] Phase 6 — Supabase integration
- [ ] Phase 7 — QA and accessibility
- [ ] Phase 8 — Vercel deployment

---

## Contributing

This project is under active development. See `ROADMAP.md` for the full task list.
