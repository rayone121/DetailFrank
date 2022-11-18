(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const _ of o)
      if (_.type === "childList")
        for (const i of _.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const _ = {};
    return (
      o.integrity && (_.integrity = o.integrity),
      o.referrerpolicy && (_.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (_.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (_.credentials = "omit")
        : (_.credentials = "same-origin"),
      _
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const _ = r(o);
    fetch(o.href, _);
  }
})();
var I,
  p,
  z,
  w,
  W,
  F = {},
  G = [],
  ee = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function V(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function te(t, e, r) {
  var l,
    o,
    _,
    i = {};
  for (_ in e)
    _ == "key" ? (l = e[_]) : _ == "ref" ? (o = e[_]) : (i[_] = e[_]);
  if (
    (arguments.length > 2 &&
      (i.children = arguments.length > 3 ? I.call(arguments, 2) : r),
    typeof t == "function" && t.defaultProps != null)
  )
    for (_ in t.defaultProps) i[_] === void 0 && (i[_] = t.defaultProps[_]);
  return E(t, i, l, o, null);
}
function E(t, e, r, l, o) {
  var _ = {
    type: t,
    props: e,
    key: r,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o == null ? ++z : o,
  };
  return o == null && p.vnode != null && p.vnode(_), _;
}
function C(t) {
  return t.children;
}
function T(t, e) {
  (this.props = t), (this.context = e);
}
function S(t, e) {
  if (e == null) return t.__ ? S(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? S(t) : null;
}
function q(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return q(t);
  }
}
function H(t) {
  ((!t.__d && (t.__d = !0) && w.push(t) && !M.__r++) ||
    W !== p.debounceRendering) &&
    ((W = p.debounceRendering) || setTimeout)(M);
}
function M() {
  for (var t; (M.__r = w.length); )
    (t = w.sort(function (e, r) {
      return e.__v.__b - r.__v.__b;
    })),
      (w = []),
      t.some(function (e) {
        var r, l, o, _, i, f;
        e.__d &&
          ((i = (_ = (r = e).__v).__e),
          (f = r.__P) &&
            ((l = []),
            ((o = b({}, _)).__v = _.__v + 1),
            j(
              f,
              _,
              o,
              r.__n,
              f.ownerSVGElement !== void 0,
              _.__h != null ? [i] : null,
              l,
              i == null ? S(_) : i,
              _.__h
            ),
            X(l, _),
            _.__e != i && q(_)));
      });
}
function K(t, e, r, l, o, _, i, f, u, d) {
  var n,
    h,
    c,
    s,
    a,
    x,
    v,
    y = (l && l.__k) || G,
    k = y.length;
  for (r.__k = [], n = 0; n < e.length; n++)
    if (
      (s = r.__k[n] =
        (s = e[n]) == null || typeof s == "boolean"
          ? null
          : typeof s == "string" || typeof s == "number" || typeof s == "bigint"
          ? E(null, s, null, null, s)
          : Array.isArray(s)
          ? E(C, { children: s }, null, null, null)
          : s.__b > 0
          ? E(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
          : s) != null
    ) {
      if (
        ((s.__ = r),
        (s.__b = r.__b + 1),
        (c = y[n]) === null || (c && s.key == c.key && s.type === c.type))
      )
        y[n] = void 0;
      else
        for (h = 0; h < k; h++) {
          if ((c = y[h]) && s.key == c.key && s.type === c.type) {
            y[h] = void 0;
            break;
          }
          c = null;
        }
      j(t, s, (c = c || F), o, _, i, f, u, d),
        (a = s.__e),
        (h = s.ref) &&
          c.ref != h &&
          (v || (v = []),
          c.ref && v.push(c.ref, null, s),
          v.push(h, s.__c || a, s)),
        a != null
          ? (x == null && (x = a),
            typeof s.type == "function" && s.__k === c.__k
              ? (s.__d = u = J(s, u, t))
              : (u = Q(t, s, c, y, a, u)),
            typeof r.type == "function" && (r.__d = u))
          : u && c.__e == u && u.parentNode != t && (u = S(c));
    }
  for (r.__e = x, n = k; n--; ) y[n] != null && Z(y[n], y[n]);
  if (v) for (n = 0; n < v.length; n++) Y(v[n], v[++n], v[++n]);
}
function J(t, e, r) {
  for (var l, o = t.__k, _ = 0; o && _ < o.length; _++)
    (l = o[_]) &&
      ((l.__ = t),
      (e = typeof l.type == "function" ? J(l, e, r) : Q(r, l, l, o, l.__e, e)));
  return e;
}
function Q(t, e, r, l, o, _) {
  var i, f, u;
  if (e.__d !== void 0) (i = e.__d), (e.__d = void 0);
  else if (r == null || o != _ || o.parentNode == null)
    e: if (_ == null || _.parentNode !== t) t.appendChild(o), (i = null);
    else {
      for (f = _, u = 0; (f = f.nextSibling) && u < l.length; u += 1)
        if (f == o) break e;
      t.insertBefore(o, _), (i = _);
    }
  return i !== void 0 ? i : o.nextSibling;
}
function ne(t, e, r, l, o) {
  var _;
  for (_ in r)
    _ === "children" || _ === "key" || _ in e || U(t, _, null, r[_], l);
  for (_ in e)
    (o && typeof e[_] != "function") ||
      _ === "children" ||
      _ === "key" ||
      _ === "value" ||
      _ === "checked" ||
      r[_] === e[_] ||
      U(t, _, e[_], r[_], l);
}
function $(t, e, r) {
  e[0] === "-"
    ? t.setProperty(e, r)
    : (t[e] =
        r == null ? "" : typeof r != "number" || ee.test(e) ? r : r + "px");
}
function U(t, e, r, l, o) {
  var _;
  e: if (e === "style")
    if (typeof r == "string") t.style.cssText = r;
    else {
      if ((typeof l == "string" && (t.style.cssText = l = ""), l))
        for (e in l) (r && e in r) || $(t.style, e, "");
      if (r) for (e in r) (l && r[e] === l[e]) || $(t.style, e, r[e]);
    }
  else if (e[0] === "o" && e[1] === "n")
    (_ = e !== (e = e.replace(/Capture$/, ""))),
      (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + _] = r),
      r
        ? l || t.addEventListener(e, _ ? R : B, _)
        : t.removeEventListener(e, _ ? R : B, _);
  else if (e !== "dangerouslySetInnerHTML") {
    if (o) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "href" &&
      e !== "list" &&
      e !== "form" &&
      e !== "tabIndex" &&
      e !== "download" &&
      e in t
    )
      try {
        t[e] = r == null ? "" : r;
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && e.indexOf("-") == -1)
        ? t.removeAttribute(e)
        : t.setAttribute(e, r));
  }
}
function B(t) {
  this.l[t.type + !1](p.event ? p.event(t) : t);
}
function R(t) {
  this.l[t.type + !0](p.event ? p.event(t) : t);
}
function j(t, e, r, l, o, _, i, f, u) {
  var d,
    n,
    h,
    c,
    s,
    a,
    x,
    v,
    y,
    k,
    P,
    N,
    O,
    D,
    L,
    g = e.type;
  if (e.constructor !== void 0) return null;
  r.__h != null &&
    ((u = r.__h), (f = e.__e = r.__e), (e.__h = null), (_ = [f])),
    (d = p.__b) && d(e);
  try {
    e: if (typeof g == "function") {
      if (
        ((v = e.props),
        (y = (d = g.contextType) && l[d.__c]),
        (k = d ? (y ? y.props.value : d.__) : l),
        r.__c
          ? (x = (n = e.__c = r.__c).__ = n.__E)
          : ("prototype" in g && g.prototype.render
              ? (e.__c = n = new g(v, k))
              : ((e.__c = n = new T(v, k)),
                (n.constructor = g),
                (n.render = re)),
            y && y.sub(n),
            (n.props = v),
            n.state || (n.state = {}),
            (n.context = k),
            (n.__n = l),
            (h = n.__d = !0),
            (n.__h = []),
            (n._sb = [])),
        n.__s == null && (n.__s = n.state),
        g.getDerivedStateFromProps != null &&
          (n.__s == n.state && (n.__s = b({}, n.__s)),
          b(n.__s, g.getDerivedStateFromProps(v, n.__s))),
        (c = n.props),
        (s = n.state),
        h)
      )
        g.getDerivedStateFromProps == null &&
          n.componentWillMount != null &&
          n.componentWillMount(),
          n.componentDidMount != null && n.__h.push(n.componentDidMount);
      else {
        if (
          (g.getDerivedStateFromProps == null &&
            v !== c &&
            n.componentWillReceiveProps != null &&
            n.componentWillReceiveProps(v, k),
          (!n.__e &&
            n.shouldComponentUpdate != null &&
            n.shouldComponentUpdate(v, n.__s, k) === !1) ||
            e.__v === r.__v)
        ) {
          for (
            n.props = v,
              n.state = n.__s,
              e.__v !== r.__v && (n.__d = !1),
              n.__v = e,
              e.__e = r.__e,
              e.__k = r.__k,
              e.__k.forEach(function (A) {
                A && (A.__ = e);
              }),
              P = 0;
            P < n._sb.length;
            P++
          )
            n.__h.push(n._sb[P]);
          (n._sb = []), n.__h.length && i.push(n);
          break e;
        }
        n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, k),
          n.componentDidUpdate != null &&
            n.__h.push(function () {
              n.componentDidUpdate(c, s, a);
            });
      }
      if (
        ((n.context = k),
        (n.props = v),
        (n.__v = e),
        (n.__P = t),
        (N = p.__r),
        (O = 0),
        "prototype" in g && g.prototype.render)
      ) {
        for (
          n.state = n.__s,
            n.__d = !1,
            N && N(e),
            d = n.render(n.props, n.state, n.context),
            D = 0;
          D < n._sb.length;
          D++
        )
          n.__h.push(n._sb[D]);
        n._sb = [];
      } else
        do
          (n.__d = !1),
            N && N(e),
            (d = n.render(n.props, n.state, n.context)),
            (n.state = n.__s);
        while (n.__d && ++O < 25);
      (n.state = n.__s),
        n.getChildContext != null && (l = b(b({}, l), n.getChildContext())),
        h ||
          n.getSnapshotBeforeUpdate == null ||
          (a = n.getSnapshotBeforeUpdate(c, s)),
        (L = d != null && d.type === C && d.key == null ? d.props.children : d),
        K(t, Array.isArray(L) ? L : [L], e, r, l, o, _, i, f, u),
        (n.base = e.__e),
        (e.__h = null),
        n.__h.length && i.push(n),
        x && (n.__E = n.__ = null),
        (n.__e = !1);
    } else
      _ == null && e.__v === r.__v
        ? ((e.__k = r.__k), (e.__e = r.__e))
        : (e.__e = _e(r.__e, e, r, l, o, _, i, u));
    (d = p.diffed) && d(e);
  } catch (A) {
    (e.__v = null),
      (u || _ != null) &&
        ((e.__e = f), (e.__h = !!u), (_[_.indexOf(f)] = null)),
      p.__e(A, e, r);
  }
}
function X(t, e) {
  p.__c && p.__c(e, t),
    t.some(function (r) {
      try {
        (t = r.__h),
          (r.__h = []),
          t.some(function (l) {
            l.call(r);
          });
      } catch (l) {
        p.__e(l, r.__v);
      }
    });
}
function _e(t, e, r, l, o, _, i, f) {
  var u,
    d,
    n,
    h = r.props,
    c = e.props,
    s = e.type,
    a = 0;
  if ((s === "svg" && (o = !0), _ != null)) {
    for (; a < _.length; a++)
      if (
        (u = _[a]) &&
        "setAttribute" in u == !!s &&
        (s ? u.localName === s : u.nodeType === 3)
      ) {
        (t = u), (_[a] = null);
        break;
      }
  }
  if (t == null) {
    if (s === null) return document.createTextNode(c);
    (t = o
      ? document.createElementNS("http://www.w3.org/2000/svg", s)
      : document.createElement(s, c.is && c)),
      (_ = null),
      (f = !1);
  }
  if (s === null) h === c || (f && t.data === c) || (t.data = c);
  else {
    if (
      ((_ = _ && I.call(t.childNodes)),
      (d = (h = r.props || F).dangerouslySetInnerHTML),
      (n = c.dangerouslySetInnerHTML),
      !f)
    ) {
      if (_ != null)
        for (h = {}, a = 0; a < t.attributes.length; a++)
          h[t.attributes[a].name] = t.attributes[a].value;
      (n || d) &&
        ((n && ((d && n.__html == d.__html) || n.__html === t.innerHTML)) ||
          (t.innerHTML = (n && n.__html) || ""));
    }
    if ((ne(t, c, h, o, f), n)) e.__k = [];
    else if (
      ((a = e.props.children),
      K(
        t,
        Array.isArray(a) ? a : [a],
        e,
        r,
        l,
        o && s !== "foreignObject",
        _,
        i,
        _ ? _[0] : r.__k && S(r, 0),
        f
      ),
      _ != null)
    )
      for (a = _.length; a--; ) _[a] != null && V(_[a]);
    f ||
      ("value" in c &&
        (a = c.value) !== void 0 &&
        (a !== t.value ||
          (s === "progress" && !a) ||
          (s === "option" && a !== h.value)) &&
        U(t, "value", a, h.value, !1),
      "checked" in c &&
        (a = c.checked) !== void 0 &&
        a !== t.checked &&
        U(t, "checked", a, h.checked, !1));
  }
  return t;
}
function Y(t, e, r) {
  try {
    typeof t == "function" ? t(e) : (t.current = e);
  } catch (l) {
    p.__e(l, r);
  }
}
function Z(t, e, r) {
  var l, o;
  if (
    (p.unmount && p.unmount(t),
    (l = t.ref) && ((l.current && l.current !== t.__e) || Y(l, null, e)),
    (l = t.__c) != null)
  ) {
    if (l.componentWillUnmount)
      try {
        l.componentWillUnmount();
      } catch (_) {
        p.__e(_, e);
      }
    (l.base = l.__P = null), (t.__c = void 0);
  }
  if ((l = t.__k))
    for (o = 0; o < l.length; o++)
      l[o] && Z(l[o], e, r || typeof t.type != "function");
  r || t.__e == null || V(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function re(t, e, r) {
  return this.constructor(t, r);
}
function oe(t, e, r) {
  var l, o, _;
  p.__ && p.__(t, e),
    (o = (l = typeof r == "function") ? null : (r && r.__k) || e.__k),
    (_ = []),
    j(
      e,
      (t = ((!l && r) || e).__k = te(C, null, [t])),
      o || F,
      F,
      e.ownerSVGElement !== void 0,
      !l && r ? [r] : o ? null : e.firstChild ? I.call(e.childNodes) : null,
      _,
      !l && r ? r : o ? o.__e : e.firstChild,
      l
    ),
    X(_, t);
}
(I = G.slice),
  (p = {
    __e: function (t, e, r, l) {
      for (var o, _, i; (e = e.__); )
        if ((o = e.__c) && !o.__)
          try {
            if (
              ((_ = o.constructor) &&
                _.getDerivedStateFromError != null &&
                (o.setState(_.getDerivedStateFromError(t)), (i = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(t, l || {}), (i = o.__d)),
              i)
            )
              return (o.__E = o);
          } catch (f) {
            t = f;
          }
      throw t;
    },
  }),
  (z = 0),
  (T.prototype.setState = function (t, e) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = b({}, this.state))),
      typeof t == "function" && (t = t(b({}, r), this.props)),
      t && b(r, t),
      t != null && this.__v && (e && this._sb.push(e), H(this));
  }),
  (T.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), H(this));
  }),
  (T.prototype.render = C),
  (w = []),
  (M.__r = 0);
const le = "./icons8-facebook-circled-3000.41488f83.png",
  se = "./icons8-instagram-3000.54b9343d.png",
  ie = "./icons8-telephone-handset-94.d7d2fbbe.png";
var ce = 0;
function m(t, e, r, l, o) {
  var _,
    i,
    f = {};
  for (i in e) i == "ref" ? (_ = e[i]) : (f[i] = e[i]);
  var u = {
    type: t,
    props: f,
    key: r,
    ref: _,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --ce,
    __source: o,
    __self: l,
  };
  if (typeof t == "function" && (_ = t.defaultProps))
    for (i in _) f[i] === void 0 && (f[i] = _[i]);
  return p.vnode && p.vnode(u), u;
}
function ae() {
  return m(C, {
    children: m("div", {
      className: "App",
      children: [
        m("div", {
          className: "flex justify-center items-center content-center",
          children: m("h1", {
            className:
              "text-gray-100 font-serif flex justify-center text-7xl lg:translate-x-5 font-extrabold mt-10 sm:text-9xl",
            children: "Detail Frank",
          }),
        }),
        m("div", {
          children: m("h1", {
            className:
              "text-gray-100 font-serif flex justify-center lg:translate-x-5 font-extrabold mt-10 sm: text-9xl",
            children: "[WIP]",
          }),
        }),
        m("div", {
          className:
            "flex justify-center font-serif items-center text-4xl text-white font-semibold pt-24",
          children: m("ul", {
            className: "space-y-5",
            children: [
              m("li", {
                className: "transition-colors hover:text-pink-500",
                children: m("div", {
                  className: "flex justify-center items-center",
                  children: [
                    m("img", { className: "h-12 pr-4 translate-x-2", src: se }),
                    m("a", {
                      href: "https://www.instagram.com/detail.frank/",
                      children: "Instagram",
                    }),
                  ],
                }),
              }),
              m("li", {
                className: "transition-colors hover:text-blue-500",
                children: m("div", {
                  className: "flex justify-center items-center",
                  children: [
                    m("img", { className: "h-12 pr-4", src: le }),
                    m("a", {
                      className: "-translate-x-2",
                      href: "https://www.facebook.com/profile.php?id=100086361797680",
                      children: "Facebook",
                    }),
                  ],
                }),
              }),
              m("li", {
                children: m("div", {
                  className: "flex justify-center items-center translate-x-6",
                  children: [
                    m("img", { className: "h-12 pr-4", src: ie }),
                    m("p", {
                      className: "-translate-x-2",
                      children: "0724552359",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
oe(m(ae, {}), document.getElementById("app"));
