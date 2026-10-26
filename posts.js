// What's inspiring me. Every post shows on the Timeline; the newest is the
// object at the top of the homepage.
//
// To add a post:
//   1. Render its art in all three styles (flat, grainy, collage), cut out on
//      a transparent ground, plus a 400px-wide "-sm" copy of each.
//   2. Put the six files in assets/inspiration/<id>/ as flat.webp, flat-sm.webp,
//      grainy.webp, grainy-sm.webp, collage.webp, collage-sm.webp.
//   3. Add a block below. Order doesn't matter; posts are sorted by date.
//
// kind:    song | book | film | outside
// line:    the lyric, quote or one line about it
// excerpt: optional shorter line for the Timeline (defaults to line)
// lately:  optional words that finish the homepage line "Lately I keep coming back
//          to <title> by <by>, …"
// why:     what it means to me and why it inspires me, a few sentences, first
//          person (shown on the Timeline)
// alt:     what the drawing shows (the style name is added for you)
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
    lately: "and the line about breaking strings when you play with passion",
    why: "This line has stuck with me for over 20 years. Sometimes when we do something we're passionate about, it's not perfect. Things break. It might not be polished, but we do it anyway. It's like building a prototype: not perfect, not polished, but we build it, and we're passionate about it.",
    alt: "A singer at the mic with eyes shut, a red guitar and an amp stack behind",
    size: [1224, 963]
  }
];
