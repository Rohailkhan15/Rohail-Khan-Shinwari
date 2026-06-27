# CURSOR.md — Rohail's Personal Website

A complete build guide for an AI coding agent (Cursor/Kiro). Follow this exactly. Do not deviate from the stack, structure, or design decisions unless explicitly told to.

---

## Project Overview

A personal website serving as a **portfolio + blog** for Rohail — an AI student, builder, writer, and future founder. The site should feel bold, confident, and personal. It is not a generic dev portfolio. It has a strong personality.

**Primary goals (in order):**
1. Home on the internet — a place that represents who Rohail is
2. Personal brand hub — connects to content creation, writing, and ideas
3. Freelance proof — will be used to attract clients

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro (latest stable) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Blog CMS | Sanity (free tier) |
| Deployment | Vercel (free tier) |
| Language | TypeScript |
| Package manager | npm |

**Do not use:** Next.js, React (standalone), any CSS framework other than Tailwind, any other CMS.

---

## Design System

### Personality
Bold, expressive, calm, techy. Light background (not dark mode). Confident typography. Not minimal — has presence. Not cluttered — has discipline.

### Color Palette

```
--color-bg:        #F7F7F8   /* near-white, slightly cool */
--color-surface:   #FFFFFF   /* cards, panels */
--color-border:    #E2E4E9   /* subtle dividers */
--color-text:      #0F0F10   /* almost black, sharp */
--color-muted:     #6B7280   /* secondary text */
--color-accent:    #2563EB   /* electric blue — primary accent */
--color-accent-2:  #7C3AED   /* violet — secondary accent, used sparingly */
--color-tag:       #EFF6FF   /* light blue for tags/badges */
```

### Typography

- **Display / Headings:** `Space Grotesk` (Google Fonts) — geometric, techy, bold personality
- **Body text:** `Inter` (Google Fonts) — clean, readable, neutral
- **Code blocks / monospace:** `JetBrains Mono` (Google Fonts)

Load all three from Google Fonts in the Astro layout.

### Type Scale (Tailwind)
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Muted/meta: `text-sm text-muted`

### Signature Design Element
The **accent underline** — key headings have a 3px electric blue underline that animates in on scroll (using Tailwind + a simple Intersection Observer). This is the one consistent motion element across the site. Keep all other motion minimal.

### Border Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Tags/badges: `rounded-full`
- Images: `rounded-2xl`

### Spacing rhythm
Use Tailwind's default spacing. Sections get `py-20 md:py-28`. Cards get `p-6`. Consistent gap between grid items: `gap-6`.

---

## Site Structure

```
/                    → Home (Hero + teaser sections)
/about               → About Me (full page)
/projects            → Projects grid
/projects/[slug]     → Single project detail
/blog                → Blog listing
/blog/[slug]         → Single blog post (from Sanity)
/products            → Products page (placeholder for now)
```

### Navigation (top navbar)
Links: `Home` · `About` · `Projects` · `Blog` · `Products`

Navbar behavior:
- Sticky on scroll
- Transparent at top, white with shadow on scroll
- Mobile: hamburger menu with slide-in drawer
- Accent button on far right: `"Let's Connect"` → scrolls to footer contact section

---

## Pages — Detailed Breakdown

### 1. Home (`/`)

**Hero section:**
- Large photo of Rohail on the LEFT (circle or slightly rounded square, ~280px)
- RIGHT side: bold name `Rohail` in display font, then one-line tagline below, then a 2-line intro, then two CTA buttons
- Tagline example (placeholder): *"Building with AI. Writing what matters."*
- CTA buttons: `View Projects` (solid accent) + `Read Blog` (outlined)
- Background: `--color-bg` with a subtle radial gradient behind the photo area using `--color-accent` at 5% opacity

**Featured Projects (teaser):**
- Heading: "What I'm Building"
- Show latest 3 projects as cards
- "View all projects →" link at bottom

**Latest Writing (teaser):**
- Heading: "From the Blog"
- Show latest 3 blog posts fetched from Sanity
- "Read all posts →" link at bottom

**About teaser:**
- 2-column: left is a short punchy paragraph about Rohail, right is a list of current focus areas (e.g. AI, writing, freelancing, building products)
- "More about me →" link

---

### 2. About (`/about`)

Sections in order:
1. **Hero:** Name, photo (larger), one bold statement about who he is
2. **My Story:** 3–4 paragraphs. Personal, honest, forward-looking. Covers: AI student at NUTech Islamabad, builder mindset, interest in startups/content/writing, long-term goal of building a software company
3. **What I Do:** 4 icon cards — AI & Tech · Writing & Ideas · Building Products · Content Creation
4. **Currently:** A simple list — what he's studying, building, reading, thinking about (update manually)
5. **Reach Me:** Email + social links (see Contact section below)

---

### 3. Projects (`/projects` and `/projects/[slug]`)

Projects are stored as **local Markdown/JSON files** (not Sanity — they don't need a CMS since Rohail will code them in).

Each project has:
```ts
{
  title: string
  slug: string
  description: string        // 1-2 sentences
  longDescription: string    // full detail for project page
  tags: string[]             // e.g. ["AI", "Chrome Extension", "Python"]
  status: "live" | "building" | "concept"
  github?: string
  demo?: string
  image?: string
  featured: boolean
  date: string
}
```

**Projects listing page:**
- Filter bar at top: All · Live · Building · Concept
- Masonry or 3-column grid of project cards
- Each card: image/cover, title, description, tags, status badge, links

**Single project page:**
- Full description
- Tags
- Links (GitHub, Demo)
- Back to projects

**Starter projects to add (placeholders):**
- NexChat Chrome Extension
- ICMS (Integrated Criminal Management System)
- Second Brain System (Obsidian + Discord bot + Groq)
- Smart Arithmetic Processor (DLD PBL)

---

### 4. Blog (`/blog` and `/blog/[slug]`)

Blog content is managed via **Sanity CMS**.

**Sanity schema for blog post:**
```ts
{
  title: string
  slug: { current: string }
  publishedAt: datetime
  excerpt: string            // 1-2 sentence summary
  coverImage: image
  category: "Essay" | "Build Log" | "Research" | "Micro-thought"
  tags: string[]
  body: portableText         // rich text editor in Sanity
  readingTime: number        // calculate from body word count
}
```

**Blog listing page:**
- Filter by category tabs at top
- Cards with: cover image, category badge, title, excerpt, date, reading time
- Clean grid, 2 columns on desktop, 1 on mobile

**Single blog post page:**
- Full-width reading layout, max-width `prose` container
- Table of contents sidebar (desktop only) generated from headings
- Tags at bottom
- "Back to Blog" link
- Social share links (Twitter/X, LinkedIn, copy link)

---

### 5. Products (`/products`)

**Placeholder page for now.** Show a clean "Coming Soon" layout with:
- Heading: "Products"
- Subtext: "Things I'm building for real people. Coming soon."
- Email signup box (just a styled input + button, no backend needed yet — use a `mailto:` link or Formspree free tier)

---

## Contact / Footer

No separate `/contact` page. Contact lives in the **footer** of every page.

Footer sections:
- Left: Name + tagline + "Built with Astro & ☕"
- Center: Nav links
- Right: Contact info

**Contact info to display:**
- Email: (Rohail adds his own)
- Social links with icons (use `lucide-astro` or inline SVGs):
  - LinkedIn
  - GitHub
  - Twitter/X
  - YouTube
  - Facebook

---

## Sanity CMS Setup

1. Create a free Sanity project at `sanity.io`
2. Install Sanity in the Astro project: `npm create sanity@latest`
3. Use `@sanity/client` to fetch posts in Astro pages
4. Use `@portabletext/react` (or Astro equivalent) to render rich text

**Environment variables needed (add to `.env` and Vercel):**
```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

Fetch posts example:
```ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})
```

---

## Astro Project Structure

```
/
├── public/
│   └── images/           ← static images, Rohail's photo goes here
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   ├── HeroSection.astro
│   │   └── SectionHeading.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← wraps all pages (navbar + footer)
│   │   └── BlogLayout.astro    ← for single blog post pages
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── products.astro
│   ├── data/
│   │   └── projects.ts         ← project data stored here
│   ├── lib/
│   │   └── sanity.ts           ← Sanity client config
│   └── styles/
│       └── global.css          ← global styles, CSS variables, font imports
├── sanity/                     ← Sanity studio (if co-located)
├── astro.config.mjs
├── tsconfig.json
└── .env
```

---

## Astro Config

```ts
// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
})
```

---

## Tailwind Theme (v4)

Tailwind v4 has no `tailwind.config.mjs`. All design tokens live in `src/styles/global.css` inside an `@theme` block. Custom colors and fonts become utilities automatically:

| Token | Utility examples |
|---|---|
| `--color-accent` | `bg-accent`, `text-accent`, `border-accent` |
| `--color-accent-2` | `bg-accent-2`, `text-accent-2` |
| `--color-surface` | `bg-surface` |
| `--color-muted` | `text-muted` |
| `--color-bg` | `bg-bg` |
| `--color-border` | `border-border` |
| `--color-text` | `text-text` |
| `--color-tag` | `bg-tag` |
| `--font-display` | `font-display` |
| `--font-body` | `font-body` |
| `--font-mono` | `font-mono` |

Import `global.css` once in `BaseLayout.astro` (or any shared layout) so Tailwind applies site-wide.

---

## Global CSS (`src/styles/global.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap');
@import "tailwindcss";

@theme {
  --color-bg: #F7F7F8;
  --color-surface: #FFFFFF;
  --color-border: #E2E4E9;
  --color-text: #0F0F10;
  --color-muted: #6B7280;
  --color-accent: #2563EB;
  --color-accent-2: #7C3AED;
  --color-tag: #EFF6FF;

  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

@layer base {
  body {
    @apply bg-bg text-text font-body;
  }

  h1, h2, h3, h4 {
    @apply font-display;
  }

  code, pre {
    @apply font-mono;
  }
}
```

---

## Environment Variables

All secrets live in `.env` at the project root. Never hardcode keys in source files.

Required variables:
- `PUBLIC_SANITY_PROJECT_ID` — from your Sanity project dashboard
- `PUBLIC_SANITY_DATASET` — set to `production`

`.env` is gitignored. `.env.example` is committed as a reference.
When deploying to Vercel, add these same variables in the Vercel dashboard under Project Settings → Environment Variables.

## Deployment (Vercel)

1. Push project to GitHub
2. Go to vercel.com → Import project from GitHub
3. Framework preset: **Astro**
4. Add environment variables (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`)
5. Deploy — done

For custom domain: add domain in Vercel dashboard → update DNS at your registrar to point to Vercel's nameservers.

---

## Build Order (Follow This Sequence)

Build in this exact order to avoid confusion:

1. `npm create astro@latest` → choose "Empty" template
2. Add Tailwind: `npx astro add tailwind`
3. Set up `global.css` with fonts and CSS variables
4. Build `BaseLayout.astro` (Navbar + Footer shell)
5. Build `Navbar.astro` (with mobile hamburger)
6. Build `Footer.astro` (with contact + social links)
7. Build `index.astro` (Home page — Hero first, then teasers)
8. Build `about.astro`
9. Build `projects/index.astro` + `ProjectCard.astro` with dummy data
10. Build `projects/[slug].astro`
11. Set up Sanity project + schema
12. Connect Sanity client (`src/lib/sanity.ts`)
13. Build `blog/index.astro` + `BlogCard.astro`
14. Build `blog/[slug].astro` with Portable Text rendering
15. Build `products.astro` (placeholder)
16. Mobile responsiveness pass on all pages
17. Deploy to Vercel

---

## Notes for the AI Agent

- Always use Astro components (`.astro` files), not React components, unless a feature requires client-side interactivity (then use `client:load`)
- All Sanity fetches happen at build time using `Astro.fetchContent` or top-level `await` in `.astro` files
- Keep all colors consistent with the design system — do not introduce new colors
- All section headings should use `font-family: display` (Space Grotesk)
- Images should always have `alt` text
- The site must be fully mobile responsive — design mobile-first
- Do not add unnecessary animations — only the accent underline animation is intentional
- Placeholder text and dummy projects/posts should be clearly marked with `// TODO: replace` comments
