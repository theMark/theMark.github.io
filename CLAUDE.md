# Mark Weiss — Personal site

Static homepage, Timeline and case-study pages. Plain HTML/CSS/JS, no build step,
deployed via GitHub Pages at https://themark.github.io.

- `index.html` — homepage: newest inspiration drawing + line, bio, Work list, footer links.
- `timeline.html` — every inspiration post, newest first, grouped by month, kind filter.
- `posts.js` — the inspiration posts (data). `site.js` renders them and runs the light / dark switch.
- `site.css` — styles for the homepage and Timeline ("Quiet column").
- `assets/inspiration/<post-id>/` — each post's flat art (`flat.webp` + `flat-sm.webp`).
- `work/*.html` — case-study pages. They still use `../styles.css` ("Aurora").

## Design System
Always read `DESIGN.md` before making any visual or UI decision. The homepage and
Timeline follow "Quiet column"; case studies follow "Aurora". Do not deviate without
explicit approval. Flag any code that doesn't match `DESIGN.md`.
