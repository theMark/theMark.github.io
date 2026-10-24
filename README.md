# themark.github.io

Mark Weiss's personal site. Plain HTML, CSS and a little JavaScript, no build step,
served by GitHub Pages from `main`.

## Adding an inspiration post

1. Make the art in all three styles (flat vector, grainy gradient, torn paper collage),
   cut out on a transparent ground. Export each as WebP at full size (about 1224px wide)
   and as a 400px-wide copy.
2. Pick an id like `2026-11-02-some-song` and put the six files in
   `assets/inspiration/<id>/`:
   `flat.webp`, `flat-sm.webp`, `grainy.webp`, `grainy-sm.webp`, `collage.webp`, `collage-sm.webp`.
3. Add a block to `posts.js` (the comment at the top lists the fields).
4. Commit and push. The newest post becomes the drawing on the homepage, and the
   Timeline picks it up with a "Now" marker. Kind filters appear once there's more
   than one kind.

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

`.nojekyll` is committed so GitHub Pages serves the files as they are.
