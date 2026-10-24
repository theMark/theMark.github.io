// Renders the homepage object and the Timeline from posts.js, and runs the
// Flat / Grainy / Collage art switch (remembered per visitor).
(function () {
  var root = document.documentElement;
  var STYLES = { flat: "flat vector", grainy: "grainy gradient", collage: "torn paper collage" };
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

  // Three stacked drawings; CSS shows the one matching data-art on <html>.
  function art(post, small, describe) {
    var w = small ? 400 : post.size[0];
    var h = Math.round(w * post.size[1] / post.size[0]);
    var box = el("div", { "class": "art", style: "aspect-ratio:" + post.size[0] + " / " + post.size[1] });
    Object.keys(STYLES).forEach(function (s) {
      box.appendChild(el("img", {
        "class": s,
        src: "assets/inspiration/" + post.id + "/" + s + (small ? "-sm" : "") + ".webp",
        alt: describe ? post.alt + ", drawn as " + STYLES[s] : "",
        width: w, height: h,
        loading: small ? "lazy" : "eager",
        decoding: "async"
      }));
    });
    return box;
  }

  function quoted(post, text) {
    return post.kind === "song" ? "“" + text + "”" : text;
  }

  function byline(post) { return post.by ? post.title + " · " + post.by : post.title; }

  // Homepage: the newest post.
  var latest = document.getElementById("latest");
  if (latest && posts.length) {
    var p = posts[0];
    var d = parseDate(p.date);
    latest.appendChild(art(p, false, true));
    latest.appendChild(el("blockquote", {}, quoted(p, p.line)));
    latest.appendChild(el("figcaption", {}, [
      el("a", { href: "timeline.html#" + p.id }, byline(p)),
      " · " + shortDate(d) + ", " + d.getFullYear()
    ]));
  }

  // Timeline: newest first, grouped by month, filterable by kind.
  var list = document.getElementById("entries");
  var filters = document.getElementById("kinds");
  if (list) {
    var lastMonth = null;
    posts.forEach(function (p, i) {
      var d = parseDate(p.date);
      var month = d.getFullYear() + "-" + d.getMonth();
      if (month !== lastMonth) {
        list.appendChild(el("h2", { "class": "month", "data-month": month },
          MONTHS[d.getMonth()] + " " + d.getFullYear()));
        lastMonth = month;
      }
      var title = el("h3", {}, byline(p));
      if (i === 0) title.appendChild(el("span", { "class": "now" }, "● Now"));
      list.appendChild(el("article", { "class": "entry", id: p.id, "data-kind": p.kind, "data-month": month }, [
        art(p, true, false),
        el("div", { "class": "text" }, [
          title,
          el("p", { "class": "muted" }, KINDS[p.kind][0] + " · " + shortDate(d)),
          el("p", {}, quoted(p, p.excerpt || p.line))
        ])
      ]));
    });

    // Only offer kinds that have posts.
    var present = Object.keys(KINDS).filter(function (k) {
      return posts.some(function (p) { return p.kind === k; });
    });
    if (filters && present.length > 1) {
      ["all"].concat(present).forEach(function (k) {
        var b = el("button", { type: "button", "data-kind": k, "aria-pressed": String(k === "all") },
          k === "all" ? "All" : KINDS[k][1]);
        b.addEventListener("click", function () { filterBy(k); });
        filters.appendChild(b);
      });
    } else if (filters) {
      filters.hidden = true;
    }
  }

  function filterBy(k) {
    filters.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.kind === k));
    });
    list.querySelectorAll(".entry").forEach(function (e) {
      e.hidden = k !== "all" && e.dataset.kind !== k;
    });
    list.querySelectorAll(".month").forEach(function (m) {
      m.hidden = !list.querySelector('.entry[data-month="' + m.dataset.month + '"]:not([hidden])');
    });
  }

  // Art switch. The <head> already set data-art from storage to avoid a flash.
  function setArt(name) {
    if (!STYLES[name]) name = "flat";
    root.dataset.art = name;
    document.querySelectorAll(".switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.art === name));
    });
    document.querySelectorAll(".art img[alt]:not([alt=''])").forEach(function (img) {
      img.setAttribute("aria-hidden", String(!img.classList.contains(name)));
    });
    try { localStorage.setItem("artStyle", name); } catch (e) {}
  }
  setArt(root.dataset.art);
  document.querySelectorAll(".switch button").forEach(function (b) {
    b.addEventListener("click", function () { setArt(b.dataset.art); });
  });
})();
