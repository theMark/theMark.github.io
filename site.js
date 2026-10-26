// Renders the homepage drawing and the Timeline from posts.js, and runs the
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

  function quoted(post, text) {
    return post.kind === "song" ? "“" + text + "”" : text;
  }

  function byline(post) { return post.by ? post.title + " · " + post.by : post.title; }

  // Homepage: the newest drawing on top, one line about it in the intro.
  var latest = document.getElementById("latest");
  var lately = document.getElementById("lately");
  if (latest && posts.length) {
    var p = posts[0];
    var link = el("a", { href: "timeline.html#" + p.id }, art(p, false, true));
    latest.appendChild(link);
    if (lately) {
      lately.appendChild(document.createTextNode("Lately I keep coming back to "));
      lately.appendChild(el("a", { href: "timeline.html#" + p.id }, p.by ? p.title + " by " + p.by : p.title));
      lately.appendChild(document.createTextNode((p.lately ? ", " + p.lately : "") + ". "));
      lately.appendChild(el("a", { "class": "more", href: "timeline.html" }, "More \u2192"));
    }
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
        ].concat(p.why ? [el("p", { "class": "muted" }, p.why)] : []))
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

  // Light / dark. The <head> already applied a saved choice to avoid a flash.
  var toggle = document.getElementById("theme");
  var dark = window.matchMedia("(prefers-color-scheme: dark)");
  function current() { return root.dataset.theme || (dark.matches ? "dark" : "light"); }
  function label() {
    var next = current() === "dark" ? "light" : "dark";
    toggle.textContent = next === "light" ? "Light" : "Dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
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
