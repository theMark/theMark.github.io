# Design System — Mark Weiss Portfolio

> "Obsidian" — a Swiss/technical poster on near-black. The site is the work sample:
> it has to prove design taste *and* read native to a tech audience (engineers,
> founders, AI builders). Memorable thing: **a designer who ships with AI.**

## Product Context
- **What this is:** Personal portfolio for Mark Weiss — product designer & AI builder.
- **Who it's for:** Hiring managers, founders, and engineers evaluating design + AI-build ability.
- **Space:** Design-engineer / AI-builder personal sites (peers: rauno.me, leerob.com, basement.studio, vercel.com).
- **Project type:** Static single-page site + case-study pages. Plain HTML/CSS, no build step, GitHub Pages.

## Aesthetic Direction
- **Direction:** Swiss / International Typographic Style, dark ("Obsidian").
- **Decoration level:** Minimal — type, hairline rules, and one signal color do all the work. A near-invisible dotted texture gives the dark surface tooth.
- **Mood:** Confident, precise, authored. Poster-first: the homepage first viewport is a statement, not a document.
- **Reference sites:** basement.studio, vercel.com (bold dark grotesque); linear.app (precision).

## Typography
- **Display / masthead:** Geist, weight 800, uppercase, tight tracking (-0.045em), line-height 0.86. Big — `clamp(3.2rem, 13vw, 9rem)`.
- **Body / UI:** Geist, 400–600.
- **Meta / labels / tags / years:** Geist Mono, 400–500, uppercase, letter-spacing ~0.06–0.1em.
- **Loading:** Google Fonts — `Geist:wght@400;500;600;700;800` + `Geist+Mono:wght@400;500`.
- **Rationale:** Geist is the typeface AI tooling itself ships in — quietly on-message for "builds with AI" — and a neutral grotesque is the correct Swiss choice. No serif (deliberately rejected an earlier warm-editorial serif direction).

## Color
- **Approach:** Restrained. Near-black, off-white, and exactly one saturated accent.
- **Background:** `#0a0a0b`  ·  **Panel:** `#141416`  ·  **Panel hover:** `#1a1a1d`
- **Text:** ink `#ededec` · soft `#b7b7b3` · muted `#8b8b88` · faint `#5a5a57`
- **Lines:** hairline `rgba(255,255,255,0.08)` · strong `rgba(255,255,255,0.16)` · rule (2px structural) `#ededec`
- **Accent — signal red `#ff4438`** (soft `rgba(255,68,56,0.12)`, line `rgba(255,68,56,0.35)`).
  - **Why red:** the AI/dev space defaults to blue/cyan/purple. Red reads as design-history confidence, not another tech template. Retired the previous cyan `#67e8f9` (the canonical AI-slop accent).
- **Mode:** Dark only. (Light mode is a possible future addition; not built.)

## Spacing & Layout
- **Container:** max-width `880px`, centered. Gutter `clamp(22px, 6vw, 40px)`.
- **Layout:** Single left-aligned column. Structural 2px rules (`--rule`) separate major zones (meta bar, section labels, footer); 1px hairlines separate list rows.
- **Work rows:** grid `6rem | 1fr | auto` (year · title+desc+tags · arrow). Hover slides content right and reveals a red left edge.
- **Border radius:** small only — 6–7px on chips/buttons, 12px on media. No bubble radius.
- **Density:** comfortable, generous vertical rhythm around the poster.

## Motion
- **Approach:** minimal-functional. One pulsing status dot; hover transitions ~140–180ms; a scaleY reveal on the work-row edge. No scroll choreography.
- **Reduced motion:** all transitions/animations disabled under `prefers-reduced-motion`.

## Signature Details
- Masthead: `DESIGNER / WHO SHIPS` with **SHIPS** in red + a red rule bar.
- Footer aphorism: **TASTE IS THE EDGE.** (EDGE in red).
- Mono meta bar top (name · ● open to work · location) and structural rules throughout.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-07 | Adopted "Obsidian" Swiss-dark system | Created via /design-consultation. Chose poster layout (variant C) over editorial-serif and restraint directions; chose dark Swiss "Obsidian" over terminal and dev-tool-UI iterations. Retired cyan → signal red, Inter/JetBrains → Geist. |
