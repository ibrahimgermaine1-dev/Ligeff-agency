# LIGEFF AGENCY — Design System & Build Specification

> Source of truth for the entire Ligeff Agency web build. Every page, every component, every line of copy must answer to this document. If a decision is not covered here, it must not violate any rule that is.

---

## 0. WHO WE ARE

Ligeff Agency is a bespoke digital atelier that sells three things, and only three things, to serious business owners who are tired of slow, expensive, and invisible operations.

We are not a freelance marketplace, we are not a "full-service" generalist shop, and we are not a tech vendor that talks in jargon. We are a small, senior team of specialists who build the three assets that move money in a modern business: operational machines, photorealistic visual assets, and a market presence that owns the answer when buyers ask the question.

The three pillars are the spine of everything you see on this site. Nothing else gets a slot in the navigation, and nothing else gets a page.

---

## 1. THE THREE PILLARS (NON-NEGOTIABLE TAXONOMY)

Every page on the site must organize its offering under one of these three pillars. There is no fourth pillar. There is no "miscellaneous."

### PILLAR 01 — OPERATIONAL EFFICIENCY
- **Offerings:** Custom AI Apps · Advanced Automation Workflows · Intelligent Autonomous Agents
- **Core Value:** Buying back operational time and eliminating human error from business workflows
- **Subpage route:** `/services/operational-efficiency`

### PILLAR 02 — IMMERSIVE VISUAL ASSETS
- **Offerings:** Photorealistic 3D Renders · Interactive Property Walkthroughs (native + AI) · AI Video & High-Fidelity Image Generation
- **Core Value:** Closing the imagination gap to sell high-ticket products and properties before they physically exist
- **Subpage route:** `/services/immersive-visual-assets`

### PILLAR 03 — MARKET DOMINANCE
- **Offerings:** High-End Web Development · Educational Courses · AI SEO · GEO (Generative Engine Optimization)
- **Core Value:** Ensuring the client's business is the first and definitive answer when buyers query AI search engines and traditional platforms
- **Subpage route:** `/services/market-dominance`

---

## 2. TYPE SYSTEM (ANTI-SLOP)

### 2.1 Font Selection

The default UI font is **NOT** Inter, Roboto, Geist, or any of the lazy defaults. We use a high-contrast editorial pairing.

| Role | Font | Why |
|---|---|---|
| Display / Headlines | **Fraunces** (variable serif, opsz + wght + SOFT axis) | High-contrast didone-adjacent serif with personality at display sizes; reads as human-architected, not template |
| Body / UI | **Sora** (geometric grotesque) | Clean, geometric, slightly wider than Inter, distinctive without being trendy |
| Accent / Numerals / Captions | **Sora** (same family, lighter weight, wider tracking) | One body family is enough; do not introduce a third typeface |

Both fonts are loaded via `next/font/google` with `display: swap` and exposed as CSS variables `--font-display` and `--font-sans`.

### 2.2 Type Scale (with intentional contrast)

Dramatic size and weight contrast is mandatory. Body copy sits at 17–18px; the largest headline on the home hero sits at clamp(48px, 9vw, 156px). The ratio between a section headline and the body beneath it should never be less than 3.5x.

| Token | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| `text-display` | clamp(56px, 9vw, 156px) | Fraunces 400 (opsz 144) | -0.02em | 0.92 |
| `text-headline` | clamp(36px, 5vw, 72px) | Fraunces 400 (opsz 96) | -0.015em | 1.0 |
| `text-title` | clamp(24px, 2.4vw, 36px) | Fraunces 500 | -0.01em | 1.1 |
| `text-eyebrow` | 12px | Sora 600 | 0.2em uppercase | 1.0 |
| `text-body` | 17px (1.0625rem) | Sora 400 | 0 | 1.65 |
| `text-body-lg` | 19px (1.1875rem) | Sora 400 | 0 | 1.6 |
| `text-caption` | 13px | Sora 500 | 0.05em | 1.4 |

### 2.3 Forbidden

- Inter, Roboto, Geist, Geist Mono, Poppins, Montserrat, Nunito as primary UI
- Gradient text (clip-path on text with linear-gradient) — banned globally
- `text-shadow` glows on headlines
- All-caps body copy
- Italic body copy (italic is reserved for Fraunces display accents only)

---

## 3. COLOR SYSTEM (PURE WARM MONOCHROME)

The site runs on a **strictly warm** monochrome system. No cool grays, no blue/purple undertones, no neon. Warm grays only, mixed with one structural near-black and one off-white gallery background.

### 3.1 Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAF7F1` | Page background (warm off-white, gallery feel) |
| `--bg-deep` | `#1A1611` | Dark sections, footer, pre-footer CTA (warm near-black) |
| `--ink` | `#1A1611` | Primary text on light |
| `--ink-2` | `#4A4339` | Secondary text on light (warm dark gray) |
| `--ink-3` | `#7A7060` | Tertiary / caption text on light |
| `--line` | `#E5DCC9` | Hairline dividers, borders on light (warm sand) |
| `--line-strong` | `#1A1611` | Strong dividers on light |
| `--paper` | `#FFFFFF` | Card surface on light (pure white, gallery card) |
| `--bone` | `#F1EBDC` | Slightly darker warm panel on light |
| `--ink-inverse` | `#FAF7F1` | Primary text on dark |
| `--ink-2-inverse` | `#BDB29C` | Secondary text on dark (warm sand gray) |
| `--ink-3-inverse` | `#8A8170` | Tertiary text on dark |
| `--line-inverse` | `#3A332A` | Hairline dividers on dark |

### 3.2 Rules

- **No accent color.** No gold, no bronze, no green. The "accent" is the contrast between `--ink` and `--bg`. If we ever need a single accent, it is the same `--ink` used as a fill on a button.
- **No radial glows.** No `bg-[radial-gradient(...)]` blobs in the background of any section.
- **No gradient buttons.** Solid fills only.
- **Warm-only grays.** Any utility gray from Tailwind's default palette (`zinc`, `neutral`, `stone`) is allowed **only** if it visually matches our warm tokens; `slate`, `gray` (cool), and `cool-gray` are banned.
- **No opacity tints of accent colors.** If we need a tint, we use our own tokens with `oklch` or hex values.

### 3.3 Light/Dark

The site does not have a theme toggle. The default is light (`--bg` background). Dark sections are deliberate, full-bleed design choices inside the light page (e.g., the pre-footer CTA band, the proof anchor on a service page). The dark sections use `--bg-deep` directly via Tailwind classes, not via `.dark` class swapping.

---

## 4. WORDMARK (LIGEFF)

### 4.1 Construction

The wordmark is pure typography. No icon, no abstract mark, no SVG illustration. The name is the asset.

- **System:** Typographic wordmark only
- **Syllable guard:** The letter `G` must always remain uppercase to dictate correct pronunciation (Lee-Jeff). The letter `L` is also uppercase. All other letters are uppercase in the desktop/tablet form, and lowercase `i`, `e`, `f`, `f` in the mobile form.
- **Desktop wordmark:** `LIGEFF AGENCY` — all caps, tracking `0.25em`, Fraunces 500, ~22px
- **Tablet wordmark:** `LIGEFF` — all caps, tracking `0.25em`, Fraunces 500
- **Mobile wordmark:** `LiGeff` — mixed case with the L and G uppercase, Fraunces 500, ~20px
- **Monogram (favicon / safe fallback):** `LG` — Fraunces 600, tracking 0

### 4.2 Color & Protection

- Solid `--ink` on light, solid `--ink-inverse` on dark
- No dropshadows, no filters, no gradients on the wordmark ever
- Protection zone: minimum `1em` padding on all sides of the wordmark bounding box; no layout element, border, or background pattern may overlap it

### 4.3 Implementation

Implement as a responsive React component (`<Wordmark />`) that swaps visible text at breakpoints:
- `hidden md:hidden lg:inline` → full wordmark
- `hidden md:inline lg:hidden` → tablet wordmark
- `inline md:hidden` → mobile wordmark

Use semantic `<a href="/" aria-label="Ligeff Agency — home">` wrapper.

---

## 5. LAYOUT & ASYMMETRY (ANTI-TEMPLATE)

### 5.1 Forbidden patterns

- Three equal cards side by side (the "feature grid" trap)
- Perfectly centered hero with stacked H1 + sub + 2 buttons
- Identical border-radius on every element (default `rounded-xl` everywhere)
- Equal-height, equal-padding sections stacked back to back
- 12-column grids used symmetrically (6/6, 4/4/4)

### 5.2 Required patterns

- **Asymmetric hero:** text column at 7/12, media/proof at 5/12, OR offset 5/7 with intentional white space on one side
- **Staggered timelines:** vertical timelines with intentional offset between odd/even entries (not centered symmetric zig-zag)
- **Varied radii:** buttons = `rounded-none` (sharp); cards = `rounded-none` or `rounded-sm` (2px); image containers = `rounded-none`; only avatar thumbnails and pill tags use `rounded-full`
- **Varied padding:** major sections use `py-32 md:py-48`; subsections inside use `py-12` or `py-16`; do not let every section breathe the same
- **Hairline rules:** use `border-t border-[--line]` as the structural divider between sections, not whitespace alone
- **Editorial numbering:** pillars, sections, and case studies are numbered `01 / 02 / 03` in `text-eyebrow` style, never bullet points

### 5.3 Container

- Outer container max-width: `max-w-[1440px]` with `px-6 md:px-10 lg:px-16`
- Long-form text columns max-width: `max-w-[68ch]` for readability
- Galleries may use the full container width

---

## 6. MICRO-INTERACTIONS

Every interactive element must have a smooth, intentional transition. Hard snaps are banned.

| Element | Hover state | Easing | Duration |
|---|---|---|---|
| Primary button (dark fill) | background shifts from `--ink` to `--ink-2` | `cubic-bezier(0.22, 1, 0.36, 1)` | 320ms |
| Secondary button (outline) | border thickens, label translates 4px right | same | 280ms |
| Text link | underline grows from left to right via `background-size` | same | 280ms |
| Nav item | underline grows from left to right | same | 240ms |
| Pillar card | subtle translate-y(-2px), no scale, hairline border darkens to `--line-strong` | same | 320ms |
| Image in portfolio | 1.02 scale on hover only after 200ms delay (intent detection) | same | 480ms |

Banned interactions:
- `transform: scale(1.05)` on big cards (cheap effect)
- Drop shadows that appear on hover (material-light effect)
- Color shifts to purple/blue on hover
- Rotate / 3D tilt on hover

---

## 7. COPYWRITING RULES (DAN KENNEDY + FLOWING RHYTHM)

### 7.1 Vocabulary

- Grade 3 English. Use small, heavy, visceral words: **cash, bleed, cost, loss, truth, blind, debt, slow, dead, gone, stuck, shut, run, sell, buy, lose, win, own, first, last, real, fake**
- Banned words (mandatory lint check before publish):
  - `unleash`, `elevate`, `seamlessly`, `transform`, `revolutionize`, `dynamic`, `groundbreaking`, `game-changer`, `gamechanger`, `game-changer`
  - the phrase `in today's digital landscape`
  - the phrase `content ecosystem`
  - the phrase `look no further`
  - the phrase `not just about X, it's about Y` (negative parallelism)
- Banned jargon (do not put on the page; explain the value instead): `utilize`, `optimize`, `paradigm`, `synergy`, `scalable`, `robust`, `cutting-edge`, `leverage`, `best-in-class`, `world-class` (used as a self-description), `state-of-the-art`, `next-generation`, `holistic`, `end-to-end`, `turnkey`

### 7.2 Sentence rhythm

- **Long, flowing, hypnotic sentences.** Use commas, semicolons, em-dashes, and coordinating conjunctions (`and`, `but`, `so`, `while`, `because`, `yet`) to chain ideas and force the reader's eye to keep moving down the line.
- Do not write `Short. Choppy. Sentences. Like this.` Those read like a robot.
- Aim for an average sentence length of 22–32 words in body copy, with deliberate long sentences (35–55 words) at the start of every section to pull the reader in.
- A full stop is allowed only when the idea is genuinely complete, never as a stylistic tic.

### 7.3 Value over features

- Every paragraph must answer one of: **what does the client lose without this?** / **what does the client gain?** / **what is the cash or time math?**
- Never describe the tech stack. Never name the model, the framework, the library, the cloud, the vendor.
- Never write "we use GPT-4" or "we build in React" or "powered by Stable Diffusion." Write what the client keeps in their pocket at the end of the month.

### 7.4 Section flow

Each section, on every page, must follow this rhythm:
1. A long, pain-led opening sentence (the hook)
2. Two to three flowing sentences compounding the cost of inaction
3. A turn: "what we do about it" — written as value, not as a feature list
4. A proof anchor: a number, a quote, a result, a material truth
5. A short, hard close (one sentence, allowed to be punchy here)

---

## 8. SERVICE SUBPAGE ARCHITECTURE (NON-NEGOTIABLE)

Every service subpage (`/services/operational-efficiency`, `/services/immersive-visual-assets`, `/services/market-dominance`) must contain these four sections in this order, with these names visible in the eyebrow text.

### 8.1 THE BLEED (Hero)
Address the specific, cold reality of the business pain or financial drain caused by lacking this service. Long-form, 80–140 words of pure pain copy. No solution yet. End with the pillar name as a quiet eyebrow above the headline.

### 8.2 THE MECHANICS
Our high-end, step-by-step framework for solving it. Written as **value milestones**, not feature lists. Three to five phases, each with:
- A number (`01`, `02`, `03`)
- A milestone title (3–6 words, no jargon)
- A flowing 2–3 sentence paragraph that explains what the client gains at this milestone (not what we do)

### 8.3 THE PROOF ANCHOR
A premium container dedicated to showing material truth. Examples:
- Operational Efficiency: an operational automation map (visual diagram of a before/after workflow)
- Immersive Visual Assets: a photorealistic walkthrough section (full-bleed image grid, before/after slider, or large-format render)
- Market Dominance: a search-visibility proof (before/after SERP comparison, AI-answer placement mockup)

This section uses the dark band (`--bg-deep`) to visually break the page and signal "this is the evidence."

### 8.4 THE LOGICAL MATH
A clear, unassailable breakdown of the economic or operational return on investment. Hard numbers, hard timeframes. Format:
- One-line statement of the math (e.g., "$48,000 / year in recovered operational time")
- A short flowing paragraph explaining how the number was built
- A three-column comparison: cost of doing nothing / cost of doing it cheap / cost of doing it with Ligeff (asymmetric, NOT three equal cards — use a vertical staggered layout)

---

## 9. PAGE ROUTES & NAVIGATION

### 9.1 Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About (Team) |
| `/services` | Services hub |
| `/services/operational-efficiency` | Pillar 01 subpage |
| `/services/immersive-visual-assets` | Pillar 02 subpage |
| `/services/market-dominance` | Pillar 03 subpage |
| `/portfolio` | Portfolio |
| `/contact` | Contact |

### 9.2 Primary navigation

Home · About · Services · Portfolio · Contact

(The service subpages are reached via the Services hub, not from the primary nav. This is intentional — it sells the pillars as a unified strategy, not a menu of à la carte tasks.)

### 9.3 Footer

- Wordmark + one-line positioning statement
- Three column footer: Pillar 01 / Pillar 02 / Pillar 03 (each links to its subpage with a one-line value description)
- Quiet contact line: email + city
- Copyright line: `© {year} Ligeff Agency. All rights reserved.`
- No social icons (we are not chasing likes, we are closing engagements)

---

## 10. IMAGERY POLICY

### 10.1 Banned

- Abstract floating 3D plastic blobs
- Neon geometric shapes floating in space
- Corporate illustrations of people high-fiving, pointing at charts, or holding laptops
- Stock photos of "team meetings" with diverse smiling professionals
- Purple/blue gradient backgrounds
- Random duotone overlays

### 10.2 Required

- For the Immersive Visual Assets pillar: photorealistic 3D architectural interior renders, material-truth product renders, walkthrough stills
- For the Operational Efficiency pillar: editorial close-ups of architectural materials, paper, watch movements, or machinery — anything that conveys precision without showing a screen
- For the Market Dominance pillar: editorial gallery shots, large-format typography, or real screen-rendered search results (mocked up cleanly in our own type system)
- For the About page: editorial black-and-white or warm-monochrome portraits (placeholder until real photography is supplied)

### 10.3 Implementation

Use `next/image` for all images. Use a single shared `AspectRatio` wrapper and `sizes` attribute to keep CLS at zero. Image placeholders during build use a single warm-monochrome gradient from `--bone` to `--paper` so the page reads as a real gallery even before final assets are dropped in.

---

## 11. ACCESSIBILITY & STRUCTURE

- Semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `footer`
- All interactive elements keyboard accessible with visible focus rings (`focus-visible:outline-2 outline-offset-2 outline-[--ink]`)
- All images have descriptive `alt`
- Color contrast meets WCAG AA on every token pair
- The site respects `prefers-reduced-motion` — all Framer Motion entrance animations are disabled or shortened under that preference

---

## 12. BUILD & DEPLOY

- Framework: Next.js 16 (App Router) + TypeScript 5
- Styling: Tailwind CSS 4 (no separate config file — use `@theme` in `globals.css`)
- Components: shadcn/ui primitives as needed; custom components for pillars, mechanics, proof anchors
- Fonts: `next/font/google` for Fraunces and Sora
- Lint: `bun run lint` must pass clean
- Self-verify: every route must be opened in Agent Browser before push
- Repo: `https://github.com/ibrahimgermaine1-dev/Ligeff-agency.git`
- Branch: `main`

---

## 13. THE SINGLE-SENTENCE BRIEF

Build a warm-monochrome, editorial, asymmetric, multipage site for Ligeff Agency that sells three pillars — Operational Efficiency, Immersive Visual Assets, and Market Dominance — in long-flowing grade-3 English that talks about cash and time, never about tech, and that looks like a quiet science museum instead of a SaaS landing page.
