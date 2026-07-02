# Mark Weiss — Portfolio

Personal portfolio site: **https://themark.github.io**

Minimal dark design in the spirit of Linear — near-black canvas, Inter typography, a single indigo accent, hairline-bordered cards, and a subtle radial hero glow. Plain HTML, one shared CSS file, and ~30 lines of JS for scroll reveals and the mobile nav. No framework, no build step. Deployed via GitHub Pages.

## Structure

```
index.html              home — hero, selected work, approach, experience, toolkit, contact
work/magined.html       case study 01 — magined (founder & builder)
work/freedom-field.html case study 02 — Freedom Forever field & customer apps
work/internal-ops.html  case study 03 — Freedom Forever internal ops platform
work/metpro.html        case study 04 — MetPro coaching platform
styles.css              the whole design system (home + case studies)
script.js               scroll-reveal + mobile nav (progressive enhancement)
```

## Before applying for jobs

1. **Verify every claim in the case studies.** The narratives were drafted from project summaries — read each `work/*.html` and make sure it matches what actually happened.
2. **Add real numbers.** Each case study has an HTML comment (`TODO(mark)`) marking where adoption / revenue / retention metrics belong, if shareable.
3. **Swap in real screenshots** when ready. Each case study's hero visual and each home project card use an inline SVG "app panel" stand-in — replace the `<svg>` with an `<img>` (recommended: 1600×1000, under 300KB, compress with Squoosh.app).

## Design system quick reference

- Colors, spacing, and radii live in the `:root` block of `styles.css` (e.g. `--accent: #5e6ad2`).
- Fonts: Inter (Google Fonts), loaded per page.
- To retheme, change the CSS variables in one place and every page follows.

## Running locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

## Deploying

```bash
git add .
git commit -m "Update case study"
git push
```

GitHub Pages re-deploys automatically within ~60 seconds. `.nojekyll` is committed so GitHub serves files as-is.
