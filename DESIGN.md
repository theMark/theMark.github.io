# Design System — Mark Weiss Personal Site

> **Homepage + Timeline: "Quiet column"** (Oct 2026). One narrow column, small type,
> one drawn object at the top. Reference feel: pengzhe.ng. The case studies in `work/`
> still use the older "Aurora" system documented further down, until they're redone.

## Quiet column (index.html, timeline.html, site.css)
- **Idea:** a personal site, not a portfolio pitch. The newest thing that's inspiring me
  sits at the top as a drawing with its line; a short first-person bio; Work as a plain list.
  The Timeline page lists every post, newest first, grouped by month.
- **Layout:** single column, max-width `560px`, 16px side gutter. Sticky top bar: page link
  on the left, a sun / moon icon button for light and dark on the right. Sections separated by space, not boxes.
- **Type:** **Geist** 400/500 at 1.5em/1.4 (24px) for everything, 1.25em on phones
  (`--text`, Mark's pick to match pengzhe.ng, 2026-10-26). No display headlines.
- **Color, dark:** bg `#111214` · ink `#e9e9e6` · soft `#c9c9c5` (the Lately line) ·
  muted `#8f8f8b` · rule `#2a2b2e` · now `#f0a75a` (the "● Now" marker, favicon dot) · focus `#9fc3ff`.
- **Color, light:** bg `#f6f6f3` · ink `#1c1c1b` · soft `#3d3d3a` · muted `#6a6a66` ·
  rule `#d9d9d4` · now `#b25a0c` · focus `#2a62c9`.
- **Mode:** follows the visitor's system setting; the top-bar switch overrides it and is
  remembered (`localStorage.theme`, set as `data-theme` on `<html>`).
- **Art:** each post has a custom flat vector illustration cut out on a transparent ground
  (no frame or box). 300px on the homepage, 128px (96px on phones) on the Timeline.
  (Grainy gradient and paper collage were tried and dropped on 2026-10-26.)
- **Links:** underlines appear on hover; selected filter items get a solid underline.
- **Motion:** none beyond small hover color changes.
- **Homepage order (direction C, 2026-10-26):** who I am comes first; all homepage text is centered (Timeline stays left-aligned). A 300px drawing of the newest post (links to it on the Timeline) → opening line "I'm Mark Weiss, a product designer who builds with AI." → one line, "Lately I keep coming back to <title> by <by>, <lately>. More →" → Work → links. Lyrics and the longer "why" live on the Timeline.
- **Content:** posts live in `posts.js` (see README). Site copy is first person.

---

# Aurora (case-study pages, styles.css)

> "Aurora" — glassmorphism on a slow, drifting aurora mesh. Dark and premium.

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

## Case Study Pages
- **Structure:** narrow reading column (`760px`). Back link → eyebrow (`Case study · 0N of 03`) → year → `h1` → `.case-facts` (Role / Timeline / Platform / Tools) → summary → hero visual → body sections → prev/next nav.
- **Body:** `.case-body section` with a mono teal `h2` (numbered `01 · …`), prose, `→`-bulleted lists, and `.pull` block-quotes (gradient left border).
- **Imagery:** real work shown where it exists. magined uses `.shot-strip` (3-up), a `.ba` before/after pair (tagged), and a `.gallery`. Text-only studies use gradient `.case-hero-image` panels (`hero-1/2/3`).
- **Content is real** (restored from history), not placeholder. `work/magined.html` is the featured case study.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-07 | Adopted "Obsidian" Swiss-dark system | Created via /design-consultation. Chose poster layout over editorial-serif and restraint; dark Swiss over terminal and dev-tool-UI. Cyan → signal red, Inter/JetBrains → Geist. |
| 2026-07-07 | Redesigned to **"Aurora"** | Via /design-shotgun + /frontend-design. Explored 6 high-craft directions (Atelier/Kinetic/Spotlight/Bento/Riso/Aurora); chose Aurora (glassmorphism on animated aurora mesh). Retired signal red → aurora spectrum (iris/teal/rose/amber); Geist → Onest. Now features real magined work imagery; fully responsive + reduced-motion. |
| 2026-10-24 | Homepage + Timeline moved to **"Quiet column"** | Mark asked for something creative, simple and not "AI slop", modelled on pengzhe.ng. Picked layout G (latest object, bio, Work list) + G3 Timeline, with hand-drawn art in three styles behind a Flat / Grainy / Collage switch. Case studies stay on Aurora for now. |
| 2026-10-26 | Homepage simplified (direction C), flat art only, light mode added | Mark: "it's my personal site, people need to know who I am." Picked C from four canvas sketches; chose flat over grainy/collage; asked for 24px type and centered homepage text like pengzhe.ng. |
