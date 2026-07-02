# Mark — Portfolio Site

A minimal, editorial single-page portfolio. Plain HTML and CSS. No build step. Deployed via GitHub Pages.

---

## Deploy in ~5 minutes

### 1. Create the GitHub repo

The repo name **must match your username exactly**:

- Go to https://github.com/new
- Repository name: `theMark.github.io`
- Public
- Don't add a README or .gitignore (this folder already has them)

### 2. Push this folder to that repo

From inside this folder (`theMark.github.io`):

```bash
git remote add origin https://github.com/theMark/theMark.github.io.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

- Repo → Settings → Pages
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Save

### 4. Visit your site

Within 1–2 minutes it goes live at:

**https://themark.github.io**

(GitHub lowercases the URL even though the repo name keeps its capitalization.)

---

## What to edit before applying for jobs

Open `index.html` and search for the following — each is a clearly marked placeholder:

| Placeholder                                 | What it is                            |
| ------------------------------------------- | ------------------------------------- |
| `[Your City]`                               | Your city in the About section       |
| `[your-linkedin]`                           | Your LinkedIn username in the URL    |
| `Project One — Replace with real project name` | Project 1 title                    |
| `Project Two — Replace with real project name` | Project 2 title                    |
| `Project Three — Replace with real project name` | Project 3 title                  |
| The hero paragraph                          | Two-sentence elevator pitch          |
| Each project's `<details>` body             | Problem / What I did / Outcome        |

Email is already set to `wingman42@gmail.com`. GitHub link points at `theMark`.

### Adding project cover images

The cover images right now are CSS gradient placeholders that look intentional. To swap in real screenshots:

1. Add image files to `assets/images/` (e.g., `project-1.jpg`)
2. In `styles.css`, find `.cover-1`, `.cover-2`, `.cover-3` and replace the gradient with:
   ```css
   .cover-1 {
     background: url("assets/images/project-1.jpg") center/cover;
   }
   ```

Recommended image specs: **1600×1000px, JPG, under 300KB each**. Use Squoosh.app to compress.

### Adding your résumé

Drop a PDF at `assets/resume.pdf`. The contact section already links to it.

---

## Running locally

You don't need anything fancy — just open `index.html` in a browser. Or for live reload:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Why this is structured the way it is

- **Single page with anchor links.** Recruiters skim. Every extra click costs viewership. Everything important is on one URL.
- **`<details>`/`<summary>` for case studies.** Native, zero JS, accessible. Click to expand the full story; skim past if you're in a hurry.
- **No build step, no framework.** Less to maintain, faster to load, easier to edit. The whole site is two files plus an image folder.
- **`.nojekyll` is committed.** Without it, GitHub Pages runs Jekyll over your repo and can mangle filenames. With it, GitHub serves files as-is.

---

## Updating later

Just edit, commit, push:

```bash
git add .
git commit -m "Update project two case study"
git push
```

The site re-deploys automatically within ~60 seconds.
