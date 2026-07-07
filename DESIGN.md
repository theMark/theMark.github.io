# Design System — Mark Weiss Portfolio

> "Aurora" — glassmorphism on a slow, drifting aurora mesh. Dark and premium.
> The site is the work sample: it has to prove design taste *and* read native to a
> tech audience (engineers, founders, AI builders). Memorable thing:
> **a designer who ships with AI.**

## Product Context
- **What this is:** Personal portfolio for Mark Weiss — product designer & AI builder.
- **Who it's for:** Hiring managers, founders, and engineers evaluating design + AI-build ability.
- **Space:** Design-engineer / AI-builder personal sites (peers: rauno.me, leerob.com, basement.studio, vercel.com, linear.app).
- **Project type:** Static single-page site + case-study pages. Plain HTML/CSS, no build step, GitHub Pages.

## Aesthetic Direction
- **Direction:** "Aurora" — a premium dark theme built on a living aurora-mesh gradient with frosted-glass surfaces.
- **Decoration level:** Atmospheric. Depth does the work: a drifting mesh of iris/teal/rose/amber light, a dark veil, a fine grain overlay, and translucent glass cards over it.
- **Mood:** Modern, premium, confident, quietly futuristic. The work (magined) is featured, not just listed.
- **Reference feel:** linear.app / vercel.com polish, aurora + glassmorphism, gradient type.

## Typography
- **Display / body:** **Onest** — a clean, slightly characterful grotesk (weights 400–800). Headlines at weight 800, tight tracking (-0.04em). Masthead is fluid: `clamp(3rem, 11vw, 8.5rem)`.
- **Meta / labels / tags / years:** **Geist Mono**, 400–500, uppercase, letter-spacing ~0.1–0.18em.
- **Loading:** Google Fonts — `Onest:wght@400;500;600;700;800` + `Geist+Mono:wght@400;500`.
- **Rationale:** Onest is distinctive without being loud (deliberately avoiding Inter/Geist-default and the overused Space Grotesk). Geist Mono keeps the technical, AI-native register in the meta layer.

## Color
- **Approach:** Dark near-black base, off-white ink, and a four-stop **aurora spectrum** used in gradients, the wordmark, and accents — never as flat fills competing with content.
- **Surfaces:** background `#070810` · glass `rgba(255,255,255,0.045)` · glass-hover `rgba(255,255,255,0.07)`
- **Text:** ink `#eef0f6` · soft `#a9adbe` · muted `#787c8f` · faint `#4f5366`
- **Lines:** hairline `rgba(255,255,255,0.1)` · strong `rgba(255,255,255,0.2)`
- **Aurora spectrum:** iris `#8b7dff` · teal `#4fd7c9` · rose `#ff86c0` · amber `#ffd18a`
  - **Why:** the gradient reads premium and current (Linear/Vercel register) and gives a memorable, ownable palette. Teal is the "live/status" signal; iris→rose drives the wordmark and CTAs.
- **Mode:** Dark only.

## Spacing & Layout
- **Containers:** homepage max-width `1140px`; case studies `760px` (reading measure). Gutter `clamp(20px, 4vw, 52px)`.
- **Background:** one fixed `.bg` element per page (`aria-hidden`) carries the animated aurora mesh + veil + grain, in pure CSS. No per-section markup.
- **Surfaces:** frosted-glass cards (`backdrop-filter: blur(20px)`), 20px radius, hairline borders. The homepage is a centered hero → featured project → 3-up work grid → contact/skills band → aphorism.
- **Work grid:** 3 columns desktop → 1 column ≤900px. Cards lift on hover.
- **Featured project:** magined shown with a real device image (`assets/images/magined/appstore/ba.jpg`) that hover-tilts upright.
- **Border radius:** 16–24px on cards/media; 22–24px pills/buttons.

## Motion
- **Approach:** high-impact page-load reveal + ambient atmosphere. Staggered `rise` fade-ups (`.r` + `.d1…d6`), a 22s aurora `drift`, a pulsing teal status dot, hover lifts (cards) and tilt (device).
- **Reduced motion:** under `prefers-reduced-motion`, all reveals, the aurora drift, the dot pulse, and every transition are disabled.

## Signature Details
- Gradient wordmark: **DESIGNER WHO / SHIPS / WITH AI** with "ships" filled by the iris→teal→rose gradient.
- Featured magined device that tilts upright on hover.
- Footer aphorism: **TASTE IS THE EDGE.** (EDGE in a teal→rose gradient).
- Mono meta bar (name · ● open to work · location) inside a glass pill; gradient primary CTA.
- Favicon: aurora-gradient disc on the near-black base.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-07 | Adopted "Obsidian" Swiss-dark system | Created via /design-consultation. Chose poster layout over editorial-serif and restraint; dark Swiss over terminal and dev-tool-UI. Cyan → signal red, Inter/JetBrains → Geist. |
| 2026-07-07 | Redesigned to **"Aurora"** | Via /design-shotgun + /frontend-design. Explored 6 high-craft directions (Atelier/Kinetic/Spotlight/Bento/Riso/Aurora); chose Aurora (glassmorphism on animated aurora mesh). Retired signal red → aurora spectrum (iris/teal/rose/amber); Geist → Onest. Now features real magined work imagery; fully responsive + reduced-motion. |
