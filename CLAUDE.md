# Mark Weiss — Portfolio

Static single-page portfolio + case-study pages. Plain HTML/CSS, no build step,
deployed via GitHub Pages at https://themark.github.io.

- `index.html` — homepage (meta bar, poster masthead, work, skills, contact, footer).
- `styles.css` — the whole design system, token-driven. Shared by all pages.
- `work/*.html` — case-study pages. They inherit `../styles.css`.

## Design System
Always read `DESIGN.md` before making any visual or UI decision. Fonts (Geist /
Geist Mono), colors (near-black + signal red `#ff4438`), spacing, and the Swiss
"Obsidian" aesthetic are defined there. Do not deviate without explicit approval.
Flag any code that doesn't match `DESIGN.md`.
