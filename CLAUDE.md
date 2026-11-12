# Mark Weiss — Personal site

Static homepage, Inspiration page and case-study pages. Plain HTML/CSS/JS, no build step,
deployed via GitHub Pages at https://themark.github.io.

- `index.html` — homepage: intro, newest inspiration drawing + short why, Work, About, Contact.
- `about.html` — the full About page (linked from the name and "Read more" on the homepage).
- `inspiration.html` — every inspiration post stacked newest first, each like the homepage block.
- `posts.js` — the inspiration posts (data). `site.js` renders them and runs the light / dark switch.
- `site.css` — styles for the homepage, Inspiration page and work pages ("Quiet column").
- `assets/inspiration/<post-id>/` — each post's flat art (`flat.webp` + `flat-sm.webp`).
- `work/*.html` — case-study pages, also "Quiet column" (`../site.css`).

## Design System
Always read `DESIGN.md` before making any visual or UI decision. Every page follows "Quiet column". Do not deviate without
explicit approval. Flag any code that doesn't match `DESIGN.md`.
