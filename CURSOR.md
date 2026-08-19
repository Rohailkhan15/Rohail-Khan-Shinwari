# CURSOR.md — Rohail's Personal Website

Personal portfolio, blog, and product showcase for **Rohail Khan Shinwari**.

## Tech Stack
- **Framework:** Astro (Static Site Output)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + `src/styles/global.css`
- **CMS:** Sanity CMS
- **Deployment:** Vercel

## Design System & Tokens
- **Theme:** Dark theme only (`#0a0f1a` background)
- **Surfaces:** `#0f1624` / `#111827` (Cards), `#060b14` (Footer)
- **Colors:** `#3b82f6` (Primary Blue), `#a78bfa` (Secondary Violet), `#e2e8f0` (Text), `#94a3b8` (Muted)
- **Typography:** Space Grotesk (Headlines/UI), Inter (Body), JetBrains Mono (Code/Badges)

## Layout & Key Behaviors
- **Navbar (`src/components/Navbar.astro`):** Fixed header. Transparent on load → Frosted glass on 50px+ scroll. Active route dot indicator.
- **Footer (`src/components/Footer.astro`):** Unified flat section (`#060b14`). No navigation links. Colorful branded social badges.
- **Animations:** Ambient drifting orbs (`animate-orb-drift`), profile glow pulse (`animate-glow-pulse`), scroll reveals.

## Site Routes
- `/` — Home (Hero, Featured Projects, Latest Blog, Philosophy)
- `/about` — About Me (Story, Focus, Currently, Contact)
- `/projects` & `/projects/[slug]` — Projects showcase
- `/blog` & `/blog/[slug]` — Sanity CMS blog
- `/products` & `/products/[slug]` — Products showcase

## Environment Variables
```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```