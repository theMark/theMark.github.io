// Renders the homepage drawing and the Inspiration page from posts.js, and runs the
// light / dark switch (follows the system until a visitor picks one).
(function () {
  var root = document.documentElement;
  var KINDS = {
    song: ["Song", "Songs"],
    book: ["Book", "Books"],
    film: ["Film", "Films"],
    outside: ["Outside", "Outside"]
  };
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    [].concat(kids || []).forEach(function (c) {
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  function parseDate(s) {
    var p = s.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function shortDate(d) { return MONTHS[d.getMonth()].slice(0, 3) + " " + d.getDate(); }

  var posts = (window.POSTS || []).slice().sort(function (a, b) {
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });

  function art(post, small, describe) {
    var w = small ? 400 : post.size[0];
    return el("div", { "class": "art" }, el("img", {
      src: "assets/inspiration/" + post.id + "/flat" + (small ? "-sm" : "") + ".webp",
      alt: describe ? post.alt : "",
      width: w, height: Math.round(w * post.size[1] / post.size[0]),
      loading: small ? "lazy" : "eager",
      decoding: "async"
    }));
  }

  // The newest drawing shares a name on both pages, so it moves between them.
  function named(n) { n.style.viewTransitionName = "art"; return n; }

  function quoted(post, text) {
    return post.kind === "song" ? "“" + text + "”" : text;
  }

  function byline(post) { return post.by ? post.title + " · " + post.by : post.title; }

  // The accent comes from the newest drawing, on every page that loads posts.js.
  if (posts.length && posts[0].accent) {
    root.style.setProperty("--accent-dark", posts[0].accent[0]);
    root.style.setProperty("--accent-light", posts[0].accent[1]);
  }

  // Homepage: the newest drawing on top with a "Lately" caption under it.
  var latest = document.getElementById("latest");
  if (latest && posts.length) {
    var p = posts[0];
    var href = "inspiration.html#" + p.id;
    var pic = art(p, true, true);
    // shown at up to 400px: the 400px copy covers most screens, the full art covers sharp ones
    var img = pic.firstChild;
    img.setAttribute("srcset", "assets/inspiration/" + p.id + "/flat-sm.webp 400w, assets/inspiration/" + p.id + "/flat.webp " + p.size[0] + "w");
    img.setAttribute("sizes", "(max-width: 432px) calc(100vw - 32px), 400px");
    img.setAttribute("loading", "eager");
    latest.appendChild(el("a", { "class": "art-link", href: href }, named(pic)));
    latest.appendChild(el("figcaption", {}, el("a", { href: href }, [
      el("span", { "class": "lately" }, "Lately:"),
      " " + quoted(p, p.title) + (p.by ? " by " + p.by : "") + " \u2192"
    ])));
  }

  // Inspiration page: newest first, grouped by month. Every entry looks the same:
  // drawing, title, kind and date, the line, and why it stuck.
  var list = document.getElementById("entries");
  if (list) {
    var lastMonth = null;
    posts.forEach(function (p, i) {
      var d = parseDate(p.date);
      var month = d.getFullYear() + "-" + d.getMonth();
      if (month !== lastMonth) {
        list.appendChild(el("h2", { "class": "month" }, MONTHS[d.getMonth()] + " " + d.getFullYear()));
        lastMonth = month;
      }
      var title = el("h3", {}, byline(p));
      if (i === 0) title.appendChild(el("span", { "class": "now" }, "● Now"));
      list.appendChild(el("article", { "class": "entry", id: p.id }, [
        i === 0 ? named(art(p, true, false)) : art(p, true, false),
        el("div", { "class": "text" }, [
          el("div", {}, [title, el("p", { "class": "muted" }, KINDS[p.kind][0] + " · " + shortDate(d))]),
          el("p", { "class": "line" }, quoted(p, p.excerpt || p.line))
        ].concat(p.why ? [el("p", { "class": "why" }, p.why)] : []))
      ]));
    });
  }

  // Light / dark. The <head> already applied a saved choice to avoid a flash.
  var toggle = document.getElementById("theme");
  var dark = window.matchMedia("(prefers-color-scheme: dark)");
  function current() { return root.dataset.theme || (dark.matches ? "dark" : "light"); }
  var ICONS = {
    // shown in dark mode: a sun, to switch to light
    light: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>',
    // shown in light mode: a moon, to switch to dark
    dark: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>'
  };
  function label() {
    var next = current() === "dark" ? "light" : "dark";
    toggle.innerHTML = ICONS[next];
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
    toggle.title = "Switch to " + next + " mode";
  }
  if (toggle) {
    label();
    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
    if (dark.addEventListener) dark.addEventListener("change", label);
  }
})();
