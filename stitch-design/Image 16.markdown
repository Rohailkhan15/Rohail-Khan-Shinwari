---
name: Technical Humanism
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  content-max-width: 800px
  grid-margin: 24px
  gutter: 24px
---

## Brand & Style
The design system reflects the intersection of high-level engineering and personal creative expression. Designed for a young AI developer, the aesthetic is **High-Presence Minimalism**: it is unapologetically bold yet maintains a professional, systematic rigor.

The visual narrative avoids the clichés of "AI" (no glowing brains or circuit patterns). Instead, it uses **Space Grotesk** to signal a futuristic, technical edge, balanced by the utilitarian clarity of **Inter**. The atmosphere is clean and expansive, utilizing high-contrast typography and intentional "voids" of whitespace to command authority. Abstract gradients and geometric accents provide a sophisticated, energetic backdrop to the technical content.

## Colors
The palette is rooted in a high-clarity neutral base to ensure maximum legibility for long-form blog content and technical documentation. 

- **Primary (Electric Blue):** Used for core actions, focus states, and the signature heading underlines. It represents logic and precision.
- **Secondary (Violet):** Used for accents, gradients, and categorizing specialized AI topics. It adds a layer of creative depth.
- **Neutral Foundation:** The subtle off-white background (`#F7F7F8`) reduces eye strain compared to pure white, while the deep obsidian text (`#0F0F10`) ensures a striking, authoritative contrast.

## Typography
Typography is the primary vehicle for the brand’s personality. 

- **Headlines:** Space Grotesk is used with tight letter-spacing in display sizes to create a "blocky," impactful look. 
- **Underlines:** Every `headline-md` and `headline-sm` that functions as a section title must feature a **3px solid Electric Blue underline** positioned 8px below the baseline, extending exactly the width of the text.
- **Body:** Inter provides a neutral, highly readable experience for blog posts.
- **Mono:** JetBrains Mono is used for code blocks and small metadata labels (e.g., dates, tags), reinforcing the developer persona.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for content readability, centered on the screen.

- **Desktop:** 12-column grid with a 1200px max container. Blog articles are restricted to a 6-column central span (approx. 800px) to maintain optimal line length.
- **Mobile:** 4-column grid with 24px side margins. 
- **Rhythm:** A strict 8px base unit drives all padding and margins. Vertical rhythm is generous; sections are separated by 120px on desktop to allow the "High-Presence" aesthetic to breathe.

## Elevation & Depth
This design system avoids traditional heavy shadows in favor of **Tonal Layers and Crisp Outlines**.

- **Surfaces:** Cards and containers use the `#FFFFFF` surface color against the `#F7F7F8` background.
- **Depth:** Instead of shadows, use a **1px solid border** with a very low-opacity neutral (e.g., `#0F0F10` at 5% alpha) to define card boundaries.
- **Interactivity:** On hover, elements may lift slightly using a subtle, non-blurred offset shadow (e.g., 4px 4px 0px) in a light grey or the primary color to maintain the geometric, "sharp" feel.

## Shapes
The shape language uses a "Mixed Radius" strategy to differentiate between structural containers and interactive elements.

- **Structural Containers:** Project cards and blog post entries use `rounded-2xl` (1.5rem / 24px) to feel modern and sophisticated.
- **Actionable Elements:** Buttons, tags, and chips use a **full pill radius** (`rounded-full`). This contrast makes interactive elements immediately identifiable against the more architectural card shapes.

## Components

### Buttons
- **Primary:** Solid Electric Blue background, white text, pill-shaped. No shadow. On hover, the background shifts to a slightly darker shade or adds the secondary Violet as a subtle 2px border.
- **Secondary:** Transparent background, 2px Electric Blue border, pill-shaped.

### Cards
- White surface, `rounded-2xl`. 
- Content within cards should have generous padding (min 32px).
- Use abstract geometric accents (circles/triangles) in the corner of cards or as background watermarks to add visual interest.

### Tags / Chips
- Pill-shaped, small `label-caps` typography. 
- Use a light tint of the primary or secondary color for the background with high-contrast text.

### Inputs
- Bottom-border only (2px solid) or fully enclosed with `rounded-lg`. 
- Focus state must trigger the 2px Electric Blue border and a subtle background shift.

### Code Blocks
- Use a dark-mode-inspired theme (Deep Navy background) even within the light mode design to create a high-contrast "focal point" for technical content. Use JetBrains Mono exclusively.