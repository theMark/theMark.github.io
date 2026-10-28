// What's inspiring me. Every post shows on the Inspiration page; the newest is the
// object at the top of the homepage.
//
// To add a post:
//   1. Draw its art in the flat vector style as one complete piece on a transparent ground
//      (nothing cropped or faded at the edges), plus a 400px-wide "-sm" copy.
//   2. Put both in assets/inspiration/<id>/ as flat.webp and flat-sm.webp.
//   3. Add a block below. Order doesn't matter; posts are sorted by date.
//
// kind:    song | book | film | outside
// line:    the lyric, quote or one line about it
// excerpt: optional shorter line for the Inspiration page (defaults to line)
// why:     what it means to me and why it inspires me, a few sentences, first
//          person (shown on the Inspiration page)
// accent:  one color picked from the drawing, [for dark mode, for light mode]. It tints
//          link underlines and the homepage "Lately" label while this is the newest post.
//          The light one has to read as text on #f6f6f3.
// alt:     what the drawing shows
// size:    pixel size of the full art, [width, height]

window.POSTS = [
  {
    id: "2026-10-23-t-and-c",
    kind: "song",
    date: "2026-10-23",
    title: "T and C",
    by: "Thrice",
    line: "Every time I play with passion, I start breaking strings, and my voice cracks when I sing from the heart.",
    excerpt: "…my voice cracks when I sing from the heart.",
    why: "This line has stuck with me for over 20 years. Sometimes when we do something we're passionate about, it's not perfect. Things break. It might not be polished, but we do it anyway. It's like building a prototype: not perfect, not polished, but we build it, and we're passionate about it.",
    accent: ["#f0a75a", "#b25a0c"],
    alt: "A singer at the mic with eyes shut and a red guitar, standing wide in ripped jeans and boots on a small stage beside a cymbal and a full amp stack",
    size: [1259, 1497]
  }
];
