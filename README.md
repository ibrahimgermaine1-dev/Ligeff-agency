# Ligeff Agency

A bespoke digital atelier that builds three things, and only three things, for serious business owners who are tired of slow, expensive, and invisible operations.

- **Pillar 01 — Operational Efficiency:** Custom AI apps, advanced automation, and intelligent autonomous agents that buy back your team's time.
- **Pillar 02 — Immersive Visual Assets:** Photorealistic 3D renders, interactive property walkthroughs, and AI video and image that close the imagination gap.
- **Pillar 03 — Market Dominance:** High-end web development, educational courses, AI SEO, and GEO that make your business the definitive answer when buyers ask.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About (Team) |
| `/services` | Services hub |
| `/services/operational-efficiency` | Pillar 01 subpage |
| `/services/immersive-visual-assets` | Pillar 02 subpage |
| `/services/market-dominance` | Pillar 03 subpage |
| `/portfolio` | Portfolio |
| `/contact` | Contact (working brief form) |

## Stack

- Next.js 16 (App Router) · TypeScript 5
- Tailwind CSS 4 · shadcn/ui primitives
- Fraunces (display serif) + Sora (geometric grotesque) via `next/font/google`
- React Server Actions for the contact form

## Design system

See `design.md` for the full anti-slop specification: type scale, warm-monochrome color tokens, wordmark architecture, copy rules (Dan Kennedy + flowing rhythm, grade-3 vocabulary), and the four-section service subpage architecture (Bleed → Mechanics → Proof Anchor → Logical Math).

## Develop

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint     # ESLint
```

© Ligeff Agency. All rights reserved.
