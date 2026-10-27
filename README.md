# themark.github.io

Mark Weiss's personal site. Plain HTML, CSS and a little JavaScript, no build step,
served by GitHub Pages from `main`.

## Adding an inspiration post

1. Draw the art in the flat vector style, cut out on a transparent ground.
   Export it as WebP at full size (about 1224px wide) and as a 400px-wide copy.
2. Pick an id like `2026-11-02-some-song` and put both files in
   `assets/inspiration/<id>/` as `flat.webp` and `flat-sm.webp`.
3. Add a block to `posts.js` (the comment at the top lists the fields).
4. Commit and push. The newest post becomes the drawing and the inspiration line on the
   homepage, and the Inspiration page picks it up with a "Now" marker. Kind filters appear once there's more
   than one kind.

## Running locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

`.nojekyll` is committed so GitHub Pages serves the files as they are.
