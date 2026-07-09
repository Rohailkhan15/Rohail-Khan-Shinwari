# CURSOR.md — Rohail's Personal Website

A complete build guide for an AI coding agent (Devin). Follow this exactly. Do not deviate from the stack, structure, or design decisions unless explicitly told to.

---

## Project Overview

A personal website serving as a **portfolio + blog** for Rohail — an AI student, builder, writer, and future founder. The site has a "Synthesized Intelligence" aesthetic: the intersection of a code editor and a literary journal. Bold, nocturnal, technically sophisticated. Not generic. Has a strong personality.

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
"Synthesized Intelligence" — the dual identity of an AI developer and a thoughtful essayist. The aesthetic blends **Minimalism** with **Glassmorphism**. It uses the structural rigor of a code editor — precise alignment, monospaced accents — softened by the atmospheric elegance of a high-end journal. Nocturnal, focused, technically advanced, yet intellectually grounded. Visual depth comes from translucent layers and ultra-fine borders, not heavy ornamentation.

### Color Palette

The entire site is **dark theme**. No light mode.

```
Background base:    #081425  (Deep Slate — the canvas)
Surface:            #152031  (Elevated container)
Surface high:       #1f2a3c  (Cards, nav)
Surface highest:    #2a3548  (Hover states, active)
Surface bright:     #2f3a4c  (Borders, dividers)

Text primary:       #d8e3fb  (Warm off-white — main text)
Text secondary:     #c7c4d7  (Muted text, metadata)

Primary (Electric Indigo):   #c0c1ff  (Accent, links, active states)
Primary container:           #8083ff  (Hover glows, button fills)
Inverse primary:             #494bd6  (Dark indigo for contrast)

Secondary (Warm Parchment):  #c9c6c2  (Long-form body text)
Secondary container:         #474743  (Subtle backgrounds)

Outline:            #908fa0  (Subtle borders)
Outline variant:    #464554  (Card borders — use rgba(255,255,255,0.05) for glass borders)
```

**Usage guide:**
- Page background: `#081425`
- Cards (projects, blog): `#152031` background, `1px border rgba(255,255,255,0.05)`
- Navbar: `#081425` at 80% opacity + `backdrop-blur-md` (glass effect)
- Footer: `#040e1f` (darkest surface) — one unified dark section, no boxes
- Primary CTA buttons: `#8083ff` background, `#ffffff` text, indigo glow on hover
- Ghost/secondary buttons: transparent, `1px border rgba(c0c1ff, 0.3)`, `#c0c1ff` text
- Tags/chips: `rgba(192,193,255,0.1)` background, `#c0c1ff` text, JetBrains Mono, ALL CAPS
- Inputs: `#111c2d` background, `1px border #464554`, border glows to `#c0c1ff` on focus
- Glows: `box-shadow: 0 0 20px rgba(128,131,255,0.15)` for primary elements

### Typography

**Three-tier typographic strategy:**

1. **Headlines — Geist** (Google Fonts or `geist` npm package): Modern, technical, authoritative. Used for all page titles and section headers.
2. **Long-form content — Source Serif 4** (Google Fonts): High-readability serif for blog posts and essays. Gives a "literary journal" feel.
3. **Metadata & accents — JetBrains Mono** (Google Fonts): Used for tags, dates, status badges, code snippets, and small technical labels.

Load all three from Google Fonts in `BaseLayout.astro`:
```
Geist: wght@400;500;600
Source Serif 4: wght@400;600  
JetBrains Mono: wght@400;500
```

### Type Scale (Tailwind)
- Hero heading: `text-5xl md:text-7xl font-semibold tracking-tight` (Geist, letter-spacing: -0.02em)
- Section heading: `text-3xl md:text-4xl font-semibold` (Geist, letter-spacing: -0.01em)
- Card title (portfolio): `text-xl font-semibold` (Geist)
- Card title (blog): `text-xl font-semibold` (Source Serif 4)
- Body text: `text-base leading-relaxed` (Geist for UI, Source Serif 4 at text-[20px] for blog reading)
- Metadata/tags: `text-[13px] font-medium tracking-widest uppercase` (JetBrains Mono)
- Captions: `text-sm` (Geist)

### Animations & Motion

Unlike the old design that had only one animation, this design is **intentionally animated** to feel alive and sophisticated. All animations should be smooth and purposeful — never distracting.

**Required animations (implement all of these):**

1. **Fade-up on scroll** — All section content (headings, cards, paragraphs) fades up 20px into view as they enter the viewport. Use Intersection Observer. Class: `animate-fade-up`. Stagger cards by 100ms each.

2. **Navbar glass transition** — On page load the navbar is fully transparent. After scrolling 50px it transitions to the frosted glass state (`backdrop-blur-md`, `bg-[#081425]/80`, border-bottom `rgba(255,255,255,0.05)`). Smooth `transition-all duration-300`.

3. **Button hover glow** — Primary buttons get `box-shadow: 0 0 20px rgba(128,131,255,0.35)` on hover. Transition: `transition-shadow duration-300`.

4. **Card lift on hover** — All project and blog cards: `hover:-translate-y-1 hover:border-[rgba(192,193,255,0.2)] transition-all duration-300`. Subtle upward float + border lightens.

5. **Tag hover** — Tags get a slight background brighten: `hover:bg-[rgba(192,193,255,0.2)] transition-colors duration-200`.

6. **Hero gradient pulse** — Behind the hero photo, a radial gradient in `rgba(128,131,255,0.08)` slowly pulses (scale 1 → 1.05 → 1, 4s ease-in-out infinite). CSS keyframe animation.

7. **Active nav indicator** — The current page link in the navbar has a `#c0c1ff` 2px underline that slides in from left on mount.

8. **Section heading accent line** — Section headings have a 2px `#8083ff` underline that animates width from 0 → 100% when the heading enters the viewport. Use Intersection Observer.

9. **Status badge pulse** — Project cards with `status: "building"` show a small pulsing dot (like a live indicator). CSS: `animate-pulse` on a `4px` `#8083ff` circle.

10. **AI Indicator component** — A small pulsating `#c0c1ff` dot with backdrop-blurred tooltip, used to mark AI-assisted content. Pulsates with `animate-ping` at reduced opacity.

**Animation CSS to add to `global.css`:**
```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fade-up 0.5s ease forwards;
}
.animate-fade-up-delay-1 { animation-delay: 100ms; }
.animate-fade-up-delay-2 { animation-delay: 200ms; }
.animate-fade-up-delay-3 { animation-delay: 300ms; }

@keyframes gradient-pulse {
  0%, 100% { transform: scale(1); opacity: 0.08; }
  50%       { transform: scale(1.05); opacity: 0.12; }
}
.animate-gradient-pulse {
  animation: gradient-pulse 4s ease-in-out infinite;
}

@keyframes underline-grow {
  from { width: 0; }
  to   { width: 100%; }
}
.animate-underline-grow {
  animation: underline-grow 0.4s ease forwards;
}
```

### Elevation & Depth (Glassmorphism)

- **Navbar/overlays:** `backdrop-blur-md` + `bg-[#081425]/80` + `border-b border-[rgba(255,255,255,0.05)]`
- **Cards:** `bg-[#152031]` + `border border-[rgba(255,255,255,0.05)]` + `rounded-xl`
- **Floating elements:** `box-shadow: 0 20px 40px rgba(0,0,0,0.4)`
- **Primary action glow:** `box-shadow: 0 0 20px rgba(128,131,255,0.15)` ambient, `0 0 20px rgba(128,131,255,0.35)` on hover

### Border Radius
- Cards: `rounded-xl` (12px — large containers)
- Buttons: `rounded` (4px — architectural precision)
- Tags/badges: `rounded-sm` (2px — technical feel)
- Inputs: `rounded` (4px)
- Images: `rounded-xl`
- Profile photo: `rounded-2xl` (slightly rounded square, not circle)

### Spacing Rhythm
- Sections: `py-20 md:py-[80px]` (80px vertical rhythm)
- Container max-width: `max-w-[1100px] mx-auto px-6`
- Card padding: `p-6`
- Grid gap: `gap-6`
- Gutters: 24px

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
- Sticky, `position: fixed`, full-width
- On load: fully transparent
- After 50px scroll: frosted glass (`backdrop-blur-md`, `bg-[#081425]/80`, bottom border `rgba(255,255,255,0.05)`)
- Logo/name on the left in Geist font, `text-[#d8e3fb]`
- Nav links: `text-[#c7c4d7]`, hover `text-[#c0c1ff]`, active page `text-[#c0c1ff]` with 2px underline
- Mobile: hamburger menu with slide-in drawer from the right, drawer background `#111c2d`
- CTA button far right: `"Let's Connect"` → primary button style → scrolls to footer

---

## Pages — Detailed Breakdown

### 1. Home (`/`)

**Hero section:**
- Full-width section, `min-h-screen`, centered content, `bg-[#081425]`
- Behind the photo: a blurred radial gradient `rgba(128,131,255,0.08)` with `animate-gradient-pulse`
- Layout: photo LEFT (~280px, `rounded-2xl`), content RIGHT
- Right side: monospace label `// rohail` in `#c0c1ff` small text first, then large name in Geist bold, tagline below in `#c7c4d7`, 2-line intro in `#d8e3fb`, then two CTA buttons
- Tagline placeholder: *"Building with AI. Writing what matters."*
- CTA: `View Projects` (primary button — `#8083ff` bg, white text, glow on hover) + `Read Blog` (ghost button — transparent, `1px border rgba(192,193,255,0.3)`, `#c0c1ff` text)
- All hero text animates in with staggered `animate-fade-up`

**Featured Projects (teaser):**
- Section heading: "What I'm Building" with `animate-underline-grow` accent
- Left of heading: small JetBrains Mono label `// 01` in `#c0c1ff`
- Show latest 3 projects as "Code-Dark" cards (see Component spec below)
- Cards animate in with stagger on scroll
- "View all projects →" link in `#c0c1ff` at bottom right

**Latest Writing (teaser):**
- Section heading: "From the Blog"
- Left of heading: small JetBrains Mono label `// 02`
- Show latest 3 blog posts as "Parchment-Dark" cards
- "Read all posts →" link at bottom right

**About teaser:**
- Section heading: "// about"
- 2-column: left is punchy paragraph in `#d8e3fb`, right is list of focus areas in Geist with small `#c0c1ff` bullet indicators
- Focus areas: AI & Machine Learning · Technical Writing · Product Building · Content Creation
- "More about me →" link

---

### 2. About (`/about`)

Sections in order:
1. **Hero:** Large name (Geist, display size), photo to the right (`rounded-2xl`, ~320px), one bold italic statement in Source Serif 4 below the name. Monospace label `// about.me` at the top.
2. **My Story:** 3–4 paragraphs in `text-[#d8e3fb]` Geist (not Source Serif — this is UI copy, not an essay). Covers: AI student at NUTech Islamabad, builder mindset, startups/content/writing interest, long-term goal of building a software company. Honest and forward-looking.
3. **What I Do:** 4 cards in a 2x2 grid. Dark card style (`bg-[#152031]`, `border border-[rgba(255,255,255,0.05)]`, `rounded-xl`). Each card: a monospace icon label, bold title in Geist, short description. Topics: AI & Tech · Writing & Ideas · Building Products · Content Creation. Cards lift on hover.
4. **Currently:** A clean list with `1px bottom dividers in rgba(255,255,255,0.05)`. Each item: category in JetBrains Mono `#c0c1ff` + detail in Geist `#d8e3fb`. Categories: studying · building · reading · thinking.
5. **Reach Me:** Email (styled as a large clickable `mailto:` link) + social icon row. No boxes — clean and minimal.

---

### 3. Projects (`/projects` and `/projects/[slug]`)

Projects are stored as **local Markdown/JSON files** (not Sanity).

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

**"Code-Dark" project card spec:**
- Background: `#111c2d`
- Border: `1px solid rgba(255,255,255,0.05)`
- Radius: `rounded-xl`
- Title: Geist, `text-[#d8e3fb]`
- Description: Geist, `text-[#c7c4d7]`, `text-sm`
- Tags: JetBrains Mono, ALL CAPS, `text-[11px]`, `bg-[rgba(192,193,255,0.1)]`, `text-[#c0c1ff]`, `px-2 py-0.5 rounded-sm`
- Status badge: JetBrains Mono, ALL CAPS, small
  - `live` → `text-[#86efac]` green, pulsing dot
  - `building` → `text-[#c0c1ff]` indigo, pulsing dot (`animate-pulse`)
  - `concept` → `text-[#c7c4d7]` muted
- Links (GitHub, Demo): icon + text in `#c0c1ff`, hover brighter
- Hover: `hover:-translate-y-1 hover:border-[rgba(192,193,255,0.2)] transition-all duration-300`

**Projects listing page:**
- Filter bar: All · Live · Building · Concept — styled as tabs with JetBrains Mono text, active tab `text-[#c0c1ff]` with bottom border
- 3-column grid (desktop), 1-column (mobile)
- Section heading with `// projects` mono label

**Single project page:**
- Full description, tags, links
- Back to projects arrow link
- Cover image if available (`rounded-xl`)

**Starter placeholder projects:**
- NexChat Chrome Extension
- ICMS (Integrated Criminal Management System)
- Second Brain System (Obsidian + Discord bot + Groq)
- Smart Arithmetic Processor (DLD PBL)

---

### 4. Blog (`/blog` and `/blog/[slug]`)

Blog content is managed via **Sanity CMS**.

**Sanity schema:**
```ts
{
  title: string
  slug: { current: string }
  publishedAt: datetime
  excerpt: string
  coverImage: image
  category: "Essay" | "Build Log" | "Research" | "Micro-thought"
  tags: string[]
  body: portableText
  readingTime: number
}
```

**"Parchment-Dark" blog card spec:**
- Background: `#152031`
- Border: `1px solid rgba(255,255,255,0.05)`
- Radius: `rounded-xl`
- Category badge: JetBrains Mono, ALL CAPS, `bg-[rgba(192,193,255,0.1)]`, `text-[#c0c1ff]`
- Title: **Source Serif 4**, `text-[#d8e3fb]`, `text-xl font-semibold`
- Excerpt: Geist, `text-[#c7c4d7]`, `text-sm`
- Date + reading time: JetBrains Mono, `text-[#908fa0]`, `text-xs`
- Hover: same card lift as project cards

**Blog listing page:**
- Category filter tabs at top (JetBrains Mono, ALL CAPS)
- 2-column grid (desktop), 1-column (mobile)
- `// writing` mono label above heading

**Single blog post page:**
- Body text: **Source Serif 4**, `text-[20px]`, `leading-[1.6]`, `text-[#c9c6c2]` (Warm Parchment)
- Max-width: `max-w-[680px] mx-auto` reading container
- Table of contents sidebar (desktop): sticky left, Geist, `text-sm`, links in `#908fa0` → hover `#c0c1ff`
- Code blocks: JetBrains Mono, `bg-[#111c2d]`, `border border-[rgba(255,255,255,0.05)]`, `rounded`
- Tags at bottom: same tag style as cards
- Back to Blog + social share (Twitter/X, LinkedIn, copy link) at bottom

---

### 5. Products (`/products`)

**Placeholder page.** Clean "Coming Soon":
- `// products` mono label at top
- Heading: "Products" in Geist display size
- Subtext: "Things I'm building for real people. Coming soon." in `#c7c4d7`
- Email capture: dark input (`bg-[#111c2d]`, `border border-[#464554]`, focus glows `#c0c1ff`) + primary button. Use Formspree or `mailto:` link.
- Subtle indigo glow behind the email box for visual interest

---

## Contact / Footer

No separate `/contact` page. The footer is redesigned as a **single unified dark section** — not three separate boxes.

**New footer design:**

```
┌─────────────────────────────────────────────────────────┐
│  bg: #040e1f   border-top: 1px rgba(255,255,255,0.05)  │
│                                                         │
│  Rohail                        [social icons row]       │
│  Building with AI.                                      │
│  Writing what matters.                                  │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  (divider: 1px rgba(255,255,255,0.05))                  │
│                                                         │
│  Home · About · Projects · Blog · Products              │
│                                              © 2025 Rohail │
│  Built with Astro & ☕                                  │
└─────────────────────────────────────────────────────────┘
```

**Footer implementation details:**
- Background: `#040e1f` (darkest surface)
- Top border: `1px solid rgba(255,255,255,0.05)`
- No boxes or sections — flat, open layout
- Name: Geist, `text-2xl font-semibold`, `text-[#d8e3fb]`
- Tagline below name: `text-[#908fa0]`, Geist
- Social icons: inline row to the RIGHT, icons in `#908fa0` → hover `#c0c1ff` → `transition-colors duration-200`. Icons: LinkedIn, GitHub, Twitter/X, YouTube, Facebook. Use `lucide-astro` or inline SVGs, `size-5`.
- Horizontal divider: `1px rgba(255,255,255,0.05)`
- Bottom row: nav links left, copyright right
- Nav links: `text-[#908fa0]` Geist `text-sm`, hover `text-[#c0c1ff]`
- Copyright + "Built with Astro & ☕": `text-[#464554]` JetBrains Mono `text-xs`
- Email: optional — can be placed above the divider as a small line `hello@rohail.dev` in `#c0c1ff` with a hover underline
- Padding: `py-12 px-6`

---

## Sanity CMS Setup

1. Create a free Sanity project at `sanity.io`
2. Install: `npm create sanity@latest`
3. Use `@sanity/client` to fetch posts in Astro pages at build time
4. Use `@portabletext/astro` for Portable Text rendering

**Environment variables:**
```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

```ts
// src/lib/sanity.ts
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
│   │   ├── SectionHeading.astro
│   │   └── AIIndicator.astro     ← pulsing AI indicator dot
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
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
│   │   └── projects.json         ← local project data
│   ├── lib/
│   │   └── sanity.ts
│   └── styles/
│       └── global.css
├── sanity/
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

No `tailwind.config.mjs`. All tokens live in `src/styles/global.css` in the `@theme` block:

| Token | Utility examples |
|---|---|
| `--color-bg` | `bg-bg` |
| `--color-surface` | `bg-surface` |
| `--color-surface-high` | `bg-surface-high` |
| `--color-on-surface` | `text-on-surface` |
| `--color-on-surface-variant` | `text-on-surface-variant` |
| `--color-primary` | `text-primary`, `bg-primary` |
| `--color-primary-container` | `bg-primary-container` |
| `--color-secondary` | `text-secondary` |
| `--color-outline` | `border-outline` |
| `--font-display` | `font-display` |
| `--font-serif` | `font-serif` |
| `--font-mono` | `font-mono` |

---

## Global CSS (`src/styles/global.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Source+Serif+4:wght@400;600&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  /* Synthesized Intelligence color system */
  --color-bg:                    #081425;
  --color-surface:               #152031;
  --color-surface-low:           #111c2d;
  --color-surface-high:          #1f2a3c;
  --color-surface-highest:       #2a3548;
  --color-surface-bright:        #2f3a4c;
  --color-on-surface:            #d8e3fb;
  --color-on-surface-variant:    #c7c4d7;
  --color-primary:               #c0c1ff;
  --color-primary-container:     #8083ff;
  --color-secondary:             #c9c6c2;
  --color-secondary-container:   #474743;
  --color-outline:               #908fa0;
  --color-outline-variant:       #464554;
  --color-footer-bg:             #040e1f;

  /* Typography */
  --font-display: 'Geist', sans-serif;
  --font-serif:   'Source Serif 4', serif;
  --font-mono:    'JetBrains Mono', monospace;
}

@layer base {
  body {
    background-color: #081425;
    color: #d8e3fb;
    font-family: var(--font-display);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }

  code, pre, kbd {
    font-family: var(--font-mono);
  }
}

/* ── Animations ─────────────────────────────────── */

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up          { animation: fade-up 0.5s ease forwards; }
.animate-fade-up-delay-1  { animation-delay: 100ms; }
.animate-fade-up-delay-2  { animation-delay: 200ms; }
.animate-fade-up-delay-3  { animation-delay: 300ms; }

@keyframes gradient-pulse {
  0%, 100% { transform: scale(1);    opacity: 0.08; }
  50%       { transform: scale(1.05); opacity: 0.12; }
}
.animate-gradient-pulse {
  animation: gradient-pulse 4s ease-in-out infinite;
}

@keyframes underline-grow {
  from { width: 0; }
  to   { width: 100%; }
}
.animate-underline-grow {
  animation: underline-grow 0.4s ease forwards;
}

/* ── Glassmorphism helpers ───────────────────────── */
.glass-nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: rgba(8, 20, 37, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-dark {
  background-color: #152031;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.card-dark:hover {
  transform: translateY(-4px);
  border-color: rgba(192, 193, 255, 0.2);
}

.glow-primary {
  box-shadow: 0 0 20px rgba(128, 131, 255, 0.15);
}
.glow-primary:hover {
  box-shadow: 0 0 20px rgba(128, 131, 255, 0.35);
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background-color: rgba(192, 193, 255, 0.1);
  color: #c0c1ff;
  padding: 2px 8px;
  border-radius: 2px;
  transition: background-color 0.2s ease;
}
.tag:hover {
  background-color: rgba(192, 193, 255, 0.2);
}
```

---

## Environment Variables

```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

`.env` is gitignored. `.env.example` is committed as a reference. Add the same vars in Vercel dashboard → Project Settings → Environment Variables.

---

## Deployment (Vercel)

1. Push project to GitHub
2. Vercel → Import from GitHub
3. Framework preset: **Astro**
4. Add environment variables
5. Deploy

Custom domain: add in Vercel dashboard → update DNS at your registrar.

---

## Build Order (Follow This Sequence)

1. `npm create astro@latest` → "Empty" template
2. `npx astro add tailwind`
3. Set up `global.css` with full token + animation system above
4. Build `BaseLayout.astro` (imports global.css, wraps all pages)
5. Build `Navbar.astro` (transparent → glass on scroll, mobile hamburger)
6. Build `Footer.astro` (new unified single-section design)
7. Build `index.astro` — Hero first (with gradient pulse behind photo), then teaser sections
8. Build `about.astro`
9. Build `projects/index.astro` + `ProjectCard.astro` (Code-Dark card style)
10. Build `projects/[slug].astro`
11. Set up Sanity project + schema
12. Connect `src/lib/sanity.ts`
13. Build `blog/index.astro` + `BlogCard.astro` (Parchment-Dark card style)
14. Build `blog/[slug].astro` (Source Serif 4 body, TOC sidebar)
15. Build `products.astro` (placeholder with email input)
16. Add `AIIndicator.astro` component
17. Implement all Intersection Observer animations (fade-up, underline-grow)
18. Mobile responsiveness pass on all pages
19. Deploy to Vercel

---

## Notes for the AI Agent

- **Dark theme only** — no light mode, no toggle. Background is always `#081425`.
- Use Astro components (`.astro` files). Use `client:load` only for interactive JS (hamburger menu, Intersection Observer animations, filter tabs).
- All Sanity fetches happen at **build time** using top-level `await` in `.astro` files.
- The **Geist** font is used for all UI text. **Source Serif 4** is reserved exclusively for blog post body content. **JetBrains Mono** is used only for tags, dates, metadata, code, and small technical labels.
- Section headings always have a `// number` mono prefix label in `#c0c1ff` above them (e.g., `// 01`, `// projects`, `// about`).
- The `card-dark` and `glow-primary` helper classes from `global.css` should be used on cards and primary buttons throughout.
- Images always have `alt` text.
- The site is fully mobile responsive — design mobile-first.
- The footer is **one flat dark section**, not split into three boxes. No `bg-indigo-900/30` boxes. Clean and typographic.
- Placeholder text and dummy data must be marked with `// TODO: replace` comments.
- The navbar scroll behavior (transparent → glass) must use a small `<script>` tag inside the Navbar component with `client:load` or inline `addEventListener('scroll', ...)`.
- All card hover effects (lift + border brighten) are handled by the `.card-dark` CSS class — don't re-implement inline.