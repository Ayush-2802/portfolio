(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [158],
  {
    8485: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return o;
        },
      });
      var n = i(2265);
      let r = ({
        color: t = "currentColor",
        direction: e = "left",
        distance: i = "md",
        duration: r = 0.4,
        easing: s = "cubic-bezier(0, 0, 0, 1)",
        hideOutline: o = !0,
        label: a,
        lines: l = 3,
        onToggle: u,
        render: h,
        rounded: c = !1,
        size: d = 32,
        toggle: p,
        toggled: f,
        disabled: m = !1,
        animateOnMount: v = !1,
      }) => {
        let [g, y] = (0, n.useState)(!1),
          [x, b] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          b(!0);
        }, []);
        let P = Math.max(12, Math.min(48, d)),
          w = P / 12,
          S = Math.round(w),
          T =
            P /
            (l *
              (("lg" === i ? 0.25 : "sm" === i ? 0.75 : 0.5) +
                (3 === l ? 1 : 1.25))),
          E = Math.round(T),
          A = S * l + E * (l - 1),
          R = (w - S + (T - E)) / (3 === l ? 1 : 2),
          C = parseFloat(
            (
              P /
                (3 === l
                  ? "lg" === i
                    ? 4.0425
                    : "sm" === i
                    ? 5.1625
                    : 4.6325
                  : "lg" === i
                  ? 6.7875
                  : "sm" === i
                  ? 8.4875
                  : 7.6675) -
              R / (4 / 3)
            ).toFixed(2)
          ),
          M = Math.max(0, r),
          j = {
            cursor: m ? "not-allowed" : "pointer",
            height: "48px",
            position: "relative",
            transition: `${M}s ${s}`,
            userSelect: "none",
            width: "48px",
          },
          V = {
            background: t,
            height: `${S}px`,
            left: `${Math.round((48 - P) / 2)}px`,
            position: "absolute",
          };
        o && (j.outline = "none"), c && (V.borderRadius = "9em");
        let k = p || y,
          O = (() => {
            let t = void 0 !== f ? f : g;
            return v && !x ? !t : t;
          })();
        return h({
          barHeight: S,
          barStyles: V,
          burgerStyles: j,
          easing: s,
          handler: () => {
            k(!O), "function" == typeof u && u(!O);
          },
          isLeft: "left" === e,
          isToggled: O,
          label: a,
          margin: E,
          move: C,
          time: M,
          topOffset: Math.round((48 - A) / 2),
          width: P,
        });
      };
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      let o = (t) =>
        n.createElement(
          r,
          s({}, t, {
            render: (e) =>
              n.createElement(
                "div",
                {
                  className: "hamburger-react",
                  "aria-label": e.label,
                  "aria-expanded": e.isToggled,
                  onClick: t.disabled ? void 0 : e.handler,
                  onKeyUp: t.disabled
                    ? void 0
                    : (t) => "Enter" === t.key && e.handler(),
                  role: "button",
                  style: e.burgerStyles,
                  tabIndex: 0,
                },
                n.createElement(
                  "div",
                  {
                    style: {
                      transition: `${e.time / 2}s ${e.easing} ${
                        e.isToggled ? "0s" : `${e.time / 2}s`
                      }`,
                      transform: `${
                        e.isToggled
                          ? `translateY(${e.barHeight + e.margin}px)`
                          : "none"
                      }`,
                    },
                  },
                  n.createElement("div", {
                    style: {
                      ...e.barStyles,
                      width: `${e.width}px`,
                      top: `${e.topOffset}px`,
                      transition: `${e.time / 2}s ${e.easing} ${
                        e.isToggled ? `${e.time / 2}s` : "0s"
                      }`,
                      transform: `${e.isToggled ? "rotate(45deg)" : "none"}`,
                    },
                  })
                ),
                n.createElement(
                  "div",
                  {
                    style: {
                      transition: `${e.time / 2}s ${e.easing}`,
                      opacity: `${e.isToggled ? "0" : "1"}`,
                    },
                  },
                  n.createElement("div", {
                    style: {
                      ...e.barStyles,
                      width: `${e.width}px`,
                      top: `${e.topOffset + e.barHeight + e.margin}px`,
                      transition: `${e.time / 2}s ${e.easing}`,
                    },
                  })
                ),
                n.createElement(
                  "div",
                  {
                    style: {
                      transition: `${e.time / 2}s ${e.easing} ${
                        e.isToggled ? "0s" : `${e.time / 2}s`
                      }`,
                      transform: `${
                        e.isToggled
                          ? `translateY(-${e.barHeight + e.margin}px)`
                          : "none"
                      }`,
                    },
                  },
                  n.createElement("div", {
                    style: {
                      ...e.barStyles,
                      width: `${e.width}px`,
                      top: `${e.topOffset + 2 * e.barHeight + 2 * e.margin}px`,
                      transition: `${e.time / 2}s ${e.easing} ${
                        e.isToggled ? `${e.time / 2}s` : "0s"
                      }`,
                      transform: `${e.isToggled ? "rotate(-45deg)" : "none"}`,
                    },
                  })
                )
              ),
          })
        );
    },
    9524: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(3997);
      let n = function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4549: function (t, e, i) {
      "use strict";
      function n(t, e, i, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(3997),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8326: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = i(1024),
        r = n._(i(2265)),
        s = i(9121),
        o = i(8664),
        a = i(8130),
        l = i(6681),
        u = i(9524),
        h = i(6304),
        c = i(6313),
        d = i(1581),
        p = i(4549),
        f = i(9872),
        m = i(9706),
        v = new Set();
      function g(t, e, i, n, r, s) {
        if (!s && !(0, o.isLocalURL)(e)) return;
        if (!n.bypassPrefetchedCheck) {
          let r =
              void 0 !== n.locale
                ? n.locale
                : "locale" in t
                ? t.locale
                : void 0,
            s = e + "%" + i + "%" + r;
          if (v.has(s)) return;
          v.add(s);
        }
        let a = s ? t.prefetch(e, r) : t.prefetch(e, i, n);
        Promise.resolve(a).catch((t) => {});
      }
      function y(t) {
        return "string" == typeof t ? t : (0, a.formatUrl)(t);
      }
      let x = r.default.forwardRef(function (t, e) {
          let i, n;
          let {
            href: a,
            as: v,
            children: x,
            prefetch: b = null,
            passHref: P,
            replace: w,
            shallow: S,
            scroll: T,
            locale: E,
            onClick: A,
            onMouseEnter: R,
            onTouchStart: C,
            legacyBehavior: M = !1,
            ...j
          } = t;
          (i = x),
            M &&
              ("string" == typeof i || "number" == typeof i) &&
              (i = r.default.createElement("a", null, i));
          let V = r.default.useContext(h.RouterContext),
            k = r.default.useContext(c.AppRouterContext),
            O = null != V ? V : k,
            D = !V,
            L = !1 !== b,
            F = null === b ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
            { href: $, as: B } = r.default.useMemo(() => {
              if (!V) {
                let t = y(a);
                return { href: t, as: v ? y(v) : t };
              }
              let [t, e] = (0, s.resolveHref)(V, a, !0);
              return { href: t, as: v ? (0, s.resolveHref)(V, v) : e || t };
            }, [V, a, v]),
            I = r.default.useRef($),
            N = r.default.useRef(B);
          M && (n = r.default.Children.only(i));
          let _ = M ? n && "object" == typeof n && n.ref : e,
            [W, U, z] = (0, d.useIntersection)({ rootMargin: "200px" }),
            X = r.default.useCallback(
              (t) => {
                (N.current !== B || I.current !== $) &&
                  (z(), (N.current = B), (I.current = $)),
                  W(t),
                  _ &&
                    ("function" == typeof _
                      ? _(t)
                      : "object" == typeof _ && (_.current = t));
              },
              [B, _, $, z, W]
            );
          r.default.useEffect(() => {
            O && U && L && g(O, $, B, { locale: E }, { kind: F }, D);
          }, [B, $, U, E, L, null == V ? void 0 : V.locale, O, D, F]);
          let H = {
            ref: X,
            onClick(t) {
              M || "function" != typeof A || A(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(t),
                O &&
                  !t.defaultPrevented &&
                  (function (t, e, i, n, s, a, l, u, h) {
                    let { nodeName: c } = t.currentTarget,
                      d = "A" === c.toUpperCase();
                    if (
                      d &&
                      ((function (t) {
                        let e = t.currentTarget,
                          i = e.getAttribute("target");
                        return (
                          (i && "_self" !== i) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        );
                      })(t) ||
                        (!h && !(0, o.isLocalURL)(i)))
                    )
                      return;
                    t.preventDefault();
                    let p = () => {
                      let t = null == l || l;
                      "beforePopState" in e
                        ? e[s ? "replace" : "push"](i, n, {
                            shallow: a,
                            locale: u,
                            scroll: t,
                          })
                        : e[s ? "replace" : "push"](n || i, { scroll: t });
                    };
                    h ? r.default.startTransition(p) : p();
                  })(t, O, $, B, w, S, T, E, D);
            },
            onMouseEnter(t) {
              M || "function" != typeof R || R(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(t),
                O &&
                  (L || !D) &&
                  g(
                    O,
                    $,
                    B,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: F },
                    D
                  );
            },
            onTouchStart(t) {
              M || "function" != typeof C || C(t),
                M &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(t),
                O &&
                  (L || !D) &&
                  g(
                    O,
                    $,
                    B,
                    { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: F },
                    D
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(B)) H.href = B;
          else if (!M || P || ("a" === n.type && !("href" in n.props))) {
            let t = void 0 !== E ? E : null == V ? void 0 : V.locale,
              e =
                (null == V ? void 0 : V.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  B,
                  t,
                  null == V ? void 0 : V.locales,
                  null == V ? void 0 : V.domainLocales
                );
            H.href =
              e ||
              (0, f.addBasePath)(
                (0, u.addLocale)(B, t, null == V ? void 0 : V.defaultLocale)
              );
          }
          return M
            ? r.default.cloneElement(n, H)
            : r.default.createElement("a", { ...j, ...H }, i);
        }),
        b = x;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2389: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          requestIdleCallback: function () {
            return i;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9121: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = i(5991),
        r = i(8130),
        s = i(8137),
        o = i(6681),
        a = i(3997),
        l = i(8664),
        u = i(9289),
        h = i(948);
      function c(t, e, i) {
        let c;
        let d = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
          p = d.match(/^[a-zA-Z]{1,}:\/\//),
          f = p ? d.slice(p[0].length) : d,
          m = f.split("?", 1);
        if ((m[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, o.normalizeRepeatedSlashes)(f);
          d = (p ? p[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(d)) return i ? [d] : d;
        try {
          c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          c = new URL("/", "http://n");
        }
        try {
          let t = new URL(d, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
            let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                i
              );
            o &&
              (e = (0, r.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(i, a),
              }));
          }
          let o =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return i ? [o, e || o] : o;
        } catch (t) {
          return i ? [d] : d;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1581: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = i(2265),
        r = i(2389),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((t) => {
            d.current = t;
          }, []);
        (0, n.useEffect)(() => {
          if (s) {
            if (u || h) return;
            let t = d.current;
            if (t && t.tagName) {
              let n = (function (t, e, i) {
                let {
                  id: n,
                  observer: r,
                  elements: s,
                } = (function (t) {
                  let e;
                  let i = { root: t.root || null, margin: t.rootMargin || "" },
                    n = a.find(
                      (t) => t.root === i.root && t.margin === i.margin
                    );
                  if (n && (e = o.get(n))) return e;
                  let r = new Map(),
                    s = new IntersectionObserver((t) => {
                      t.forEach((t) => {
                        let e = r.get(t.target),
                          i = t.isIntersecting || t.intersectionRatio > 0;
                        e && i && e(i);
                      });
                    }, t);
                  return (
                    (e = { id: i, observer: s, elements: r }),
                    a.push(i),
                    o.set(i, e),
                    e
                  );
                })(i);
                return (
                  s.set(t, e),
                  r.observe(t),
                  function () {
                    if ((s.delete(t), r.unobserve(t), 0 === s.size)) {
                      r.disconnect(), o.delete(n);
                      let t = a.findIndex(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                      t > -1 && a.splice(t, 1);
                    }
                  }
                );
              })(t, (t) => t && c(t), {
                root: null == e ? void 0 : e.current,
                rootMargin: i,
              });
              return n;
            }
          } else if (!h) {
            let t = (0, r.requestIdleCallback)(() => c(!0));
            return () => (0, r.cancelIdleCallback)(t);
          }
        }, [u, i, e, h, d.current]);
        let f = (0, n.useCallback)(() => {
          c(!1);
        }, []);
        return [p, h, f];
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4910: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return i.test(t) ? t.replace(n, "\\$&") : t;
      }
    },
    6304: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(1024),
        r = n._(i(2265)),
        s = r.default.createContext(null);
    },
    8130: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return o;
          },
          urlObjectKeys: function () {
            return a;
          },
          formatWithValidation: function () {
            return l;
          },
        });
      let n = i(8533),
        r = n._(i(5991)),
        s = /https?|ftp|gopher|file/;
      function o(t) {
        let { auth: e, hostname: i } = t,
          n = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : i &&
              ((u = e + (~i.indexOf(":") ? "[" + i + "]" : i)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(r.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          n && !n.endsWith(":") && (n += ":"),
          t.slashes || ((!n || s.test(n)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            n +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(t) {
        return o(t);
      }
    },
    9289: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let n = i(9255),
        r = i(5321);
    },
    948: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(1670),
        r = i(4586);
      function s(t, e, i) {
        let s = "",
          o = (0, r.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: i, optional: n } = a[t],
              r = "[" + (i ? "..." : "") + t + "]";
            return (
              n && (r = (e ? "" : "/") + "[" + r + "]"),
              i && !Array.isArray(e) && (e = [e]),
              (n || t in l) &&
                (s =
                  s.replace(
                    r,
                    i
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    5321: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(4507),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, n.isInterceptionRouteAppPath)(t) &&
            (t = (0, n.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    8664: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(6681),
        r = i(6746);
      function s(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, r.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    8137: function (t, e) {
      "use strict";
      function i(t, e) {
        let i = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (i[n] = t[n]);
          }),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    5991: function (t, e) {
      "use strict";
      function i(t) {
        let e = {};
        return (
          t.forEach((t, i) => {
            void 0 === e[i]
              ? (e[i] = t)
              : Array.isArray(e[i])
              ? e[i].push(t)
              : (e[i] = [e[i], t]);
          }),
          e
        );
      }
      function n(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [i, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(i, n(t)))
              : e.set(i, n(r));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, i) => t.append(i, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
          assign: function () {
            return s;
          },
        });
    },
    1670: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(6681);
      function r(t) {
        let { re: e, groups: i } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(i).forEach((t) => {
              let e = i[t],
                n = r[e.pos];
              void 0 !== n &&
                (o[t] = ~n.indexOf("/")
                  ? n.split("/").map((t) => s(t))
                  : e.repeat
                  ? [s(n)]
                  : s(n));
            }),
            o
          );
        };
      }
    },
    4586: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return c;
          },
          getNamedMiddlewareRegex: function () {
            return d;
          },
        });
      let n = i(4507),
        r = i(4910),
        s = i(9006);
      function o(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let i = t.startsWith("...");
        return i && (t = t.slice(3)), { key: t, repeat: i, optional: e };
      }
      function a(t) {
        let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          i = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && s) {
                let { key: t, optional: n, repeat: l } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: e, optional: n }),
                  e ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: i,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: i } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: i };
      }
      function u(t) {
        let { getSafeRouteKey: e, segment: i, routeKeys: n, keyPrefix: r } = t,
          { key: s, optional: a, repeat: l } = o(i),
          u = s.replace(/\W/g, "");
        r && (u = "" + r + u);
        let h = !1;
        return (
          (0 === u.length || u.length > 30) && (h = !0),
          isNaN(parseInt(u.slice(0, 1))) || (h = !0),
          h && (u = e()),
          r ? (n[u] = "" + r + s) : (n[u] = "" + s),
          l
            ? a
              ? "(?:/(?<" + u + ">.+?))?"
              : "/(?<" + u + ">.+?)"
            : "/(?<" + u + ">[^/]+?)"
        );
      }
      function h(t, e) {
        let i;
        let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((i = 0),
            () => {
              let t = "",
                e = ++i;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((t) => {
              let i = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              return i && s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtI" : void 0,
                  })
                : s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function c(t, e) {
        let i = h(t, e);
        return {
          ...l(t),
          namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
          routeKeys: i.routeKeys,
        };
      }
      function d(t, e) {
        let { parameterizedRoute: i } = a(t),
          { catchAll: n = !0 } = e;
        if ("/" === i) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = h(t, !1);
        return { namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9255: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class i {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let i = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              i.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            i.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              i.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              i.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            i
          );
        }
        _insert(t, e, n) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let r = t[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let i = r.slice(1, -1),
              o = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (o = !0)),
              i.startsWith("...") && ((i = i.substring(3)), (n = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "')."
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "')."
              );
            function s(t, i) {
              if (null !== t && t !== i)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    i +
                    "')."
                );
              e.forEach((t) => {
                if (t === i)
                  throw Error(
                    'You cannot have the same slug name "' +
                      i +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      i +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(i);
            }
            if (n) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                s(this.restSlugName, i), (this.restSlugName = i), (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              s(this.slugName, i), (this.slugName = i), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new i()),
            this.children.get(r)._insert(t.slice(1), e, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(t) {
        let e = new i();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    6681: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          loadGetInitialProps: function () {
            return c;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return f;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          stringifyError: function () {
            return x;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(t) {
        let e,
          i = !1;
        return function () {
          for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
          return i || ((i = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + "//" + e + (i ? ":" + i : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?"),
          i = e[0];
        return (
          i.replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function c(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (i && u(i)) return n;
        if (!n) {
          let e =
            '"' +
            l(t) +
            '.getInitialProps()" should resolve to an object. But found "' +
            n +
            '" instead.';
          throw Error(e);
        }
        return n;
      }
      let d = "undefined" != typeof performance,
        p =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class f extends Error {}
      class m extends Error {}
      class v extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class g extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    622: function (t, e, i) {
      "use strict";
      var n = i(2265),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, i) {
        var n,
          s = {},
          u = null,
          h = null;
        for (n in (void 0 !== i && (u = "" + i),
        void 0 !== e.key && (u = "" + e.key),
        void 0 !== e.ref && (h = e.ref),
        e))
          o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: r,
          type: t,
          key: u,
          ref: h,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = u), (e.jsxs = u);
    },
    7437: function (t, e, i) {
      "use strict";
      t.exports = i(622);
    },
    1396: function (t, e, i) {
      t.exports = i(8326);
    },
    3577: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(2265),
        r = ["mousedown", "touchstart"],
        s = function (t, e, i) {
          void 0 === i && (i = r);
          var s = (0, n.useRef)(e);
          (0, n.useEffect)(
            function () {
              s.current = e;
            },
            [e]
          ),
            (0, n.useEffect)(
              function () {
                for (
                  var e = function (e) {
                      var i = t.current;
                      i && !i.contains(e.target) && s.current(e);
                    },
                    n = 0,
                    r = i;
                  n < r.length;
                  n++
                ) {
                  var o = r[n];
                  !(function (t) {
                    for (var e = [], i = 1; i < arguments.length; i++)
                      e[i - 1] = arguments[i];
                    t && t.addEventListener && t.addEventListener.apply(t, e);
                  })(document, o, e);
                }
                return function () {
                  for (var t = 0, n = i; t < n.length; t++) {
                    var r = n[t];
                    !(function (t) {
                      for (var e = [], i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                      t &&
                        t.removeEventListener &&
                        t.removeEventListener.apply(t, e);
                    })(document, r, e);
                  }
                };
              },
              [i, t]
            );
        };
    },
    2899: function (t, e, i) {
      "use strict";
      i.d(e, {
        v: function () {
          return u;
        },
      });
      var n = i(1085),
        r = i(58),
        s = i(6567),
        o = i(9155);
      let a = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (o.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      var l = i(8194);
      class u {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: o,
            delay: u,
            onComplete: h,
            onUpdate: c,
            isGenerator: d,
          } = this.options;
          if (
            !d &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                l = a(r, e),
                u = a(o, e);
              return (
                (0, s.K)(
                  l === u,
                  `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && n))
              );
            })(t, i, n, o)
          ) {
            if (r.c.current || !u) {
              null == c || c((0, l.$)(t, this.options, e)),
                null == h || h(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(t, e);
          !1 !== p &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...p }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
    },
    3058: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return U;
        },
        y: function () {
          return z;
        },
      });
      var n = i(1085),
        r = i(1356),
        s = i(9815);
      function o(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, s.R)(i - t(n), e - n);
      }
      var a = i(6567),
        l = i(3021);
      function u(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let h = ["duration", "bounce"],
        c = ["stiffness", "damping", "mass"];
      function d(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function p({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let s;
        let p = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: b,
            isResolvedFromDuration: P,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!d(t, c) && d(t, h)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let s, o;
                (0, a.K)(
                  t <= (0, r.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let h = 1 - e;
                (h = (0, l.u)(0.05, 1, h)),
                  (t = (0, l.u)(0.01, 10, (0, r.X)(t))),
                  h < 1
                    ? ((s = (e) => {
                        let n = e * h,
                          r = n * t,
                          s = u(e, h);
                        return 0.001 - ((n - i) / s) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let n = e * h,
                          r = n * t,
                          o = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          a = u(Math.pow(e, 2), h),
                          l = -s(e) + 0.001 > 0 ? -1 : 1;
                        return (l * ((r * i + i - o) * Math.exp(-r))) / a;
                      }))
                    : ((s = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (o = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let c = 5 / t,
                  d = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(s, o, c);
                if (((t = (0, r.w)(t)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(d, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * h * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -(0, r.X)(n.velocity || 0) }),
          w = b || 0,
          S = g / (2 * Math.sqrt(v * y)),
          T = f - p,
          E = (0, r.X)(Math.sqrt(v / y)),
          A = 5 > Math.abs(T);
        if ((i || (i = A ? 0.01 : 2), e || (e = A ? 0.005 : 0.5), S < 1)) {
          let t = u(E, S);
          s = (e) => {
            let i = Math.exp(-S * E * e);
            return (
              f -
              i *
                (((w + S * E * T) / t) * Math.sin(t * e) + T * Math.cos(t * e))
            );
          };
        } else if (1 === S)
          s = (t) => f - Math.exp(-E * t) * (T + (w + E * T) * t);
        else {
          let t = E * Math.sqrt(S * S - 1);
          s = (e) => {
            let i = Math.exp(-S * E * e),
              n = Math.min(t * e, 300);
            return (
              f -
              (i * ((w + S * E * T) * Math.sinh(n) + t * T * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (P && x) || null,
          next: (t) => {
            let n = s(t);
            if (P) m.done = t >= x;
            else {
              let r = w;
              0 !== t && (r = S < 1 ? o(s, t, n) : 0);
              let a = Math.abs(r) <= i,
                l = Math.abs(f - n) <= e;
              m.done = a && l;
            }
            return (m.value = m.done ? f : n), m;
          },
        };
      }
      function f({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: l,
        max: u,
        restDelta: h = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let m = t[0],
          v = { done: !1, value: m },
          g = (t) => (void 0 !== l && t < l) || (void 0 !== u && t > u),
          y = (t) =>
            void 0 === l
              ? u
              : void 0 === u
              ? l
              : Math.abs(l - t) < Math.abs(u - t)
              ? l
              : u,
          x = i * e,
          b = m + x,
          P = void 0 === a ? b : a(b);
        P !== b && (x = P - m);
        let w = (t) => -x * Math.exp(-t / n),
          S = (t) => P + w(t),
          T = (t) => {
            let e = w(t),
              i = S(t);
            (v.done = Math.abs(e) <= h), (v.value = v.done ? P : i);
          },
          E = (t) => {
            g(v.value) &&
              ((d = t),
              (f = p({
                keyframes: [v.value, y(v.value)],
                velocity: o(S, t, v.value),
                damping: r,
                stiffness: s,
                restDelta: h,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (f || void 0 !== d || ((e = !0), T(t), E(t)),
              void 0 !== d && t >= d)
                ? f.next(t - d)
                : (e || T(t), v);
            },
          }
        );
      }
      var m = i(9588);
      let v = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function g(t, e, i, n) {
        if (t === e && i === n) return m.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = v((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : v(r(t), e, n));
      }
      let y = g(0.42, 0, 1, 1),
        x = g(0, 0, 0.58, 1),
        b = g(0.42, 0, 0.58, 1),
        P = (t) => Array.isArray(t) && "number" != typeof t[0];
      var w = i(927),
        S = i(933),
        T = i(484);
      let E = g(0.33, 1.53, 0.69, 0.99),
        A = (0, T.M)(E),
        R = (0, S.o)(A),
        C = {
          linear: m.Z,
          easeIn: y,
          easeInOut: b,
          easeOut: x,
          circIn: w.Z7,
          circInOut: w.X7,
          circOut: w.Bn,
          backIn: A,
          backInOut: R,
          backOut: E,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * A(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        M = (t) => {
          if (Array.isArray(t)) {
            (0, a.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return g(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, a.k)(void 0 !== C[t], `Invalid easing type '${t}'`), C[t])
            : t;
        };
      var j = i(7015),
        V = i(9566),
        k = i(2868);
      function O({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = P(n) ? n.map(M) : M(n),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = (0, k.Y)(0, e, n);
                        t.push((0, V.t)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = (0, j.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || b).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var D = i(2899),
        L = i(4694),
        F = i(7330),
        $ = i(3970),
        B = i(6846);
      let I = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => B.Wi.update(e, !0),
          stop: () => (0, B.Pn)(e),
          now: () =>
            B.frameData.isProcessing ? B.frameData.timestamp : $.X.now(),
        };
      };
      var N = i(8194);
      let _ = { decay: f, inertia: f, tween: O, keyframes: O, spring: p },
        W = (t) => t / 100;
      class U extends D.v {
        constructor({ KeyframeResolver: t = n.e, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: i, motionValue: r, keyframes: s } = this.options,
            o = (t, e) => this.onKeyframesResolved(t, e);
          i && r && r.owner
            ? (this.resolver = r.owner.resolveKeyframes(s, o, i, r))
            : (this.resolver = new t(s, o, i, r)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = _[n] || O;
          l !== O &&
            "number" != typeof t[0] &&
            ((e = (0, L.z)(W, (0, F.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: h,
            resolvedDuration: c,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > h;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let x = this.currentTime,
            b = r;
          if (p) {
            let t = Math.min(this.currentTime, h) / c,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, p + 1));
            let n = !!(e % 2);
            n &&
              ("reverse" === f
                ? ((i = 1 - i), m && (i -= m / c))
                : "mirror" === f && (b = s)),
              (x = (0, l.u)(0, 1, i) * c);
          }
          let P = y ? { done: !1, value: a[0] } : b.next(x);
          o && (P.value = o(P.value));
          let { done: w } = P;
          y ||
            null === u ||
            (w =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            S && void 0 !== n && (P.value = (0, N.$)(a, this.options, n)),
            v && v(P.value),
            S && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = I, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      function z(t) {
        return new U(t);
      }
    },
    8194: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return r;
        },
      });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, r) {
        let s = t.filter(n),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== r ? r : s[o];
      }
    },
    2167: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return y;
        },
      });
      var n = i(7437),
        r = i(2265),
        s = i(538);
      function o() {
        let t = (0, r.useRef)(!1);
        return (
          (0, s.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var a = i(6846),
        l = i(8243),
        u = i(961),
        h = i(5968);
      class c extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: t, isPresent: e }) {
        let i = (0, r.useId)(),
          s = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: a } = (0, r.useContext)(h._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: n, top: r, left: l } = o.current;
            if (e || !s.current || !t || !n) return;
            s.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              a && (u.nonce = a),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${r}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [e]),
          (0, n.jsx)(c, {
            isPresent: e,
            childRef: s,
            sizeRef: o,
            children: r.cloneElement(t, { ref: s }),
          })
        );
      }
      let p = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: s,
        custom: o,
        presenceAffectsLayout: a,
        mode: h,
      }) => {
        let c = (0, u.h)(f),
          p = (0, r.useId)(),
          m = (0, r.useMemo)(
            () => ({
              id: p,
              initial: e,
              isPresent: i,
              custom: o,
              onExitComplete: (t) => {
                for (let e of (c.set(t, !0), c.values())) if (!e) return;
                s && s();
              },
              register: (t) => (c.set(t, !1), () => c.delete(t)),
            }),
            a ? [Math.random()] : [i]
          );
        return (
          (0, r.useMemo)(() => {
            c.forEach((t, e) => c.set(e, !1));
          }, [i]),
          r.useEffect(() => {
            i || c.size || !s || s();
          }, [i]),
          "popLayout" === h &&
            (t = (0, n.jsx)(d, { isPresent: i, children: t })),
          (0, n.jsx)(l.O.Provider, { value: m, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var m = i(781),
        v = i(6567);
      let g = (t) => t.key || "",
        y = ({
          children: t,
          custom: e,
          initial: i = !0,
          onExitComplete: l,
          exitBeforeEnter: u,
          presenceAffectsLayout: h = !0,
          mode: c = "sync",
        }) => {
          var d;
          (0, v.k)(!u, "Replace exitBeforeEnter with mode='wait'");
          let f =
              (0, r.useContext)(m.p).forceRender ||
              (function () {
                let t = o(),
                  [e, i] = (0, r.useState)(0),
                  n = (0, r.useCallback)(() => {
                    t.current && i(e + 1);
                  }, [e]),
                  s = (0, r.useCallback)(() => a.Wi.postRender(n), [n]);
                return [s, e];
              })()[0],
            y = o(),
            x = (function (t) {
              let e = [];
              return (
                r.Children.forEach(t, (t) => {
                  (0, r.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            b = x,
            P = (0, r.useRef)(new Map()).current,
            w = (0, r.useRef)(b),
            S = (0, r.useRef)(new Map()).current,
            T = (0, r.useRef)(!0);
          if (
            ((0, s.L)(() => {
              (T.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let i = g(t);
                    e.set(i, t);
                  });
                })(x, S),
                (w.current = b);
            }),
            (d = () => {
              (T.current = !0), S.clear(), P.clear();
            }),
            (0, r.useEffect)(() => () => d(), []),
            T.current)
          )
            return (0, n.jsx)(n.Fragment, {
              children: b.map((t) =>
                (0, n.jsx)(
                  p,
                  {
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: h,
                    mode: c,
                    children: t,
                  },
                  g(t)
                )
              ),
            });
          b = [...b];
          let E = w.current.map(g),
            A = x.map(g),
            R = E.length;
          for (let t = 0; t < R; t++) {
            let e = E[t];
            -1 !== A.indexOf(e) || P.has(e) || P.set(e, void 0);
          }
          return (
            "wait" === c && P.size && (b = []),
            P.forEach((t, i) => {
              if (-1 !== A.indexOf(i)) return;
              let r = S.get(i);
              if (!r) return;
              let s = E.indexOf(i),
                o = t;
              o ||
                ((o = (0, n.jsx)(
                  p,
                  {
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(i);
                      let t = Array.from(S.keys()).filter(
                        (t) => !A.includes(t)
                      );
                      if (
                        (t.forEach((t) => S.delete(t)),
                        (w.current = x.filter((e) => {
                          let n = g(e);
                          return n === i || t.includes(n);
                        })),
                        !P.size)
                      ) {
                        if (!1 === y.current) return;
                        f(), l && l();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: h,
                    mode: c,
                    children: r,
                  },
                  g(r)
                )),
                P.set(i, o)),
                b.splice(s, 0, o);
            }),
            (b = b.map((t) => {
              let e = t.key;
              return P.has(e)
                ? t
                : (0, n.jsx)(
                    p,
                    {
                      isPresent: !0,
                      presenceAffectsLayout: h,
                      mode: c,
                      children: t,
                    },
                    g(t)
                  );
            })),
            (0, n.jsx)(n.Fragment, {
              children: P.size ? b : b.map((t) => (0, r.cloneElement)(t)),
            })
          );
        };
    },
    781: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)({});
    },
    5968: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    8243: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = (0, n.createContext)(null);
    },
    927: function (t, e, i) {
      "use strict";
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(933),
        r = i(484);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    933: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    484: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    1348: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = i(6101);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let i = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  i = new r(),
                  n = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : i;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (n = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (n = e.order.length))
                      )
                        for (let i = 0; i < n; i++) {
                          let n = e.order[i];
                          a.has(n) && (l.schedule(n), t()), n(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = n.c.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              i && e && ((o = !1), t(h));
          },
          c = () => {
            (i = !0), (o = !0), a.isProcessing || t(h);
          },
          d = s.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || c(), n.schedule(t, e, r))), t
            );
          }, {});
        return {
          schedule: d,
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    6846: function (t, e, i) {
      "use strict";
      i.d(e, {
        Pn: function () {
          return o;
        },
        S6: function () {
          return l;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return a;
        },
      });
      var n = i(9588),
        r = i(1348);
      let {
        schedule: s,
        cancel: o,
        state: a,
        steps: l,
      } = (0, r.Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    3970: function (t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(6101),
        s = i(6846);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    767: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return nI;
        },
      });
      var n,
        r = i(7437),
        s = i(2265),
        o = i(5968);
      let a = (0, s.createContext)({});
      var l = i(8243),
        u = i(538);
      let h = (0, s.createContext)({ strict: !1 }),
        c = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        d = "data-" + c("framerAppearId");
      var p = i(1348);
      let { schedule: f, cancel: m } = (0, p.Z)(queueMicrotask, !1);
      function v(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function g(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function y(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let x = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        b = ["initial", ...x];
      function P(t) {
        return y(t.animate) || b.some((e) => g(t[e]));
      }
      function w(t) {
        return !!(P(t) || t.variants);
      }
      function S(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let T = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        E = {};
      for (let t in T) E[t] = { isEnabled: (e) => T[t].some((t) => !!e[t]) };
      var A = i(6613),
        R = i(781);
      let C = (0, s.createContext)({}),
        M = Symbol.for("motionComponentSymbol"),
        j = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function V(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (j.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let k = {};
      var O = i(9303);
      function D(t, { layout: e, layoutId: i }) {
        return (
          O.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!k[t] || "opacity" === t))
        );
      }
      var L = i(5735);
      let F = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        $ = O._.length;
      var B = i(417);
      let I = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var N = i(2980),
        _ = i(3681);
      let W = { ...N.Rx, transform: Math.round },
        U = {
          borderWidth: _.px,
          borderTopWidth: _.px,
          borderRightWidth: _.px,
          borderBottomWidth: _.px,
          borderLeftWidth: _.px,
          borderRadius: _.px,
          radius: _.px,
          borderTopLeftRadius: _.px,
          borderTopRightRadius: _.px,
          borderBottomRightRadius: _.px,
          borderBottomLeftRadius: _.px,
          width: _.px,
          maxWidth: _.px,
          height: _.px,
          maxHeight: _.px,
          size: _.px,
          top: _.px,
          right: _.px,
          bottom: _.px,
          left: _.px,
          padding: _.px,
          paddingTop: _.px,
          paddingRight: _.px,
          paddingBottom: _.px,
          paddingLeft: _.px,
          margin: _.px,
          marginTop: _.px,
          marginRight: _.px,
          marginBottom: _.px,
          marginLeft: _.px,
          rotate: _.RW,
          rotateX: _.RW,
          rotateY: _.RW,
          rotateZ: _.RW,
          scale: N.bA,
          scaleX: N.bA,
          scaleY: N.bA,
          scaleZ: N.bA,
          skew: _.RW,
          skewX: _.RW,
          skewY: _.RW,
          distance: _.px,
          translateX: _.px,
          translateY: _.px,
          translateZ: _.px,
          x: _.px,
          y: _.px,
          z: _.px,
          perspective: _.px,
          transformPerspective: _.px,
          opacity: N.Fq,
          originX: _.$C,
          originY: _.$C,
          originZ: _.px,
          zIndex: W,
          backgroundPositionX: _.px,
          backgroundPositionY: _.px,
          fillOpacity: N.Fq,
          strokeOpacity: N.Fq,
          numOctaves: W,
        };
      function z(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, B.f)(t)) {
            s[t] = i;
            continue;
          }
          let n = U[t],
            c = I(i, n);
          if (O.G.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  n,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < $; e++) {
                    let i = O._[e];
                    if (void 0 !== t[i]) {
                      let e = F[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, n ? "" : s)) : i && n && (s = "none"),
                    s
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let X = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function H(t, e, i) {
        for (let n in e) (0, L.i)(e[n]) || D(n, i) || (t[n] = e[n]);
      }
      function K(t, e, i) {
        let n = {},
          r = (function (t, e, i) {
            let n = t.style || {},
              r = {};
            return (
              H(r, n, t),
              Object.assign(
                r,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, s.useMemo)(() => {
                    let n = X();
                    return (
                      z(n, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              r
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (n.tabIndex = 0),
          (n.style = r),
          n
        );
      }
      let Y = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function Z(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          Y.has(t)
        );
      }
      let q = (t) => !Z(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (q = (t) => (t.startsWith("on") ? !Z(t) : n(t)));
      } catch (t) {}
      function G(t, e, i) {
        return "string" == typeof t ? t : _.px.transform(e + i * t);
      }
      let Q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        J = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tt(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((z(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: f, dimensions: m } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== r || void 0 !== s || f.transform) &&
            (f.transformOrigin = (function (t, e, i) {
              let n = G(e, t.x, t.width),
                r = G(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? Q : J;
              t[s.offset] = _.px.transform(-n);
              let o = _.px.transform(e),
                a = _.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let te = () => ({ ...X(), attrs: {} }),
        ti = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tn(t, e, i, n) {
        let r = (0, s.useMemo)(() => {
          let i = te();
          return (
            tt(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              ti(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          H(e, t.style, t), (r.style = { ...e, ...r.style });
        }
        return r;
      }
      function tr(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let ts = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function to(t, e, i, n) {
        for (let i in (tr(t, e, void 0, n), e.attrs))
          t.setAttribute(ts.has(i) ? i : c(i), e.attrs[i]);
      }
      function ta(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          ((0, L.i)(r[o]) ||
            (e.style && (0, L.i)(e.style[o])) ||
            D(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function tl(t, e, i) {
        let n = ta(t, e, i);
        for (let i in t)
          if ((0, L.i)(t[i]) || (0, L.i)(e[i])) {
            let e =
              -1 !== O._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i;
            n[e] = t[i];
          }
        return n;
      }
      function tu(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function th(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = tu(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = tu(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      var tc = i(961);
      let td = (t) => Array.isArray(t),
        tp = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tf = (t) => (td(t) ? t[t.length - 1] || 0 : t);
      function tm(t) {
        let e = (0, L.i)(t) ? t.get() : t;
        return tp(e) ? e.toValue() : e;
      }
      let tv = (t) => (e, i) => {
        let n = (0, s.useContext)(a),
          r = (0, s.useContext)(l.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = tm(s[t]);
                  let { initial: o, animate: a } = t,
                    l = P(t),
                    u = w(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial;
                  h = h || !1 === o;
                  let c = h ? a : o;
                  if (c && "boolean" != typeof c && !y(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    e.forEach((e) => {
                      let i = th(t, e);
                      if (!i) return;
                      let { transitionEnd: n, transition: s, ...o } = i;
                      for (let t in o) {
                        let e = o[t];
                        if (Array.isArray(e)) {
                          let t = h ? e.length - 1 : 0;
                          e = e[t];
                        }
                        null !== e && (r[t] = e);
                      }
                      for (let t in n) r[t] = n[t];
                    });
                  }
                  return r;
                })(n, r, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(n, t, o)), o;
            })(t, e, n, r);
        return i ? o() : (0, tc.h)(o);
      };
      var tg = i(6846);
      let ty = {
          useVisualState: tv({
            scrapeMotionValuesFromProps: tl,
            createRenderState: te,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              tg.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tg.Wi.render(() => {
                  tt(
                    i,
                    n,
                    { enableHardwareAcceleration: !1 },
                    ti(e.tagName),
                    t.transformTemplate
                  ),
                    to(e, i);
                });
            },
          }),
        },
        tx = {
          useVisualState: tv({
            scrapeMotionValuesFromProps: ta,
            createRenderState: X,
          }),
        };
      function tb(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tP = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tw(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let tS = (t) => (e) => tP(e) && t(e, tw(e));
      function tT(t, e, i, n) {
        return tb(t, e, tS(i), n);
      }
      var tE = i(4694);
      function tA(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tR = tA("dragHorizontal"),
        tC = tA("dragVertical");
      function tM(t) {
        let e = !1;
        if ("y" === t) e = tC();
        else if ("x" === t) e = tR();
        else {
          let t = tR(),
            i = tC();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tj() {
        let t = tM(!0);
        return !t || (t(), !1);
      }
      class tV {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tk(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return tT(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || tj()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && tg.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tO extends tV {
        mount() {
          this.unmount = (0, tE.z)(tk(this.node, !0), tk(this.node, !1));
        }
        unmount() {}
      }
      class tD extends tV {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tE.z)(
            tb(this.node.current, "focus", () => this.onFocus()),
            tb(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tL = (t, e) => !!e && (t === e || tL(t, e.parentElement));
      var tF = i(9588);
      function t$(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tw(i));
      }
      class tB extends tV {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tF.Z),
            (this.removeEndListeners = tF.Z),
            (this.removeAccessibleListeners = tF.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = tT(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || tL(this.node.current, t.target) ? i : n;
                    s && tg.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tT(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tE.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tb(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tb(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t$("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tg.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    t$("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tb(this.node.current, "blur", () => {
                  this.isPressing &&
                    t$("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tE.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tg.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          this.removeEndListeners(), (this.isPressing = !1);
          let t = this.node.getProps();
          return (
            t.whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tj()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tg.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tT(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tb(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tE.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tI = new WeakMap(),
        tN = new WeakMap(),
        t_ = (t) => {
          let e = tI.get(t.target);
          e && e(t);
        },
        tW = (t) => {
          t.forEach(t_);
        },
        tU = { some: 0, all: 1 };
      class tz extends tV {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : tU[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              tN.has(i) || tN.set(i, {});
              let n = tN.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tW, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              tI.set(t, i),
              n.observe(t),
              () => {
                tI.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node,
            i = ["amount", "margin", "root"].some(
              (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                return (i) => t[i] !== e[i];
              })(t, e)
            );
          i && this.startObserver();
        }
        unmount() {}
      }
      function tX(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function tH(t, e, i) {
        let n = t.getProps();
        return th(n, e, void 0 !== i ? i : n.custom, t);
      }
      var tK = i(1356);
      let tY = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tZ = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tq = { type: "keyframes", duration: 0.8 },
        tG = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tQ = (t, { keyframes: e }) =>
          e.length > 2
            ? tq
            : O.G.has(t)
            ? t.startsWith("scale")
              ? tZ(e[1])
              : tY
            : tG;
      function tJ(t, e) {
        return t[e] || t.default || t;
      }
      var t0 = i(6101),
        t1 = i(58),
        t2 = i(8194),
        t5 = i(3970);
      let t6 = (t) => /^0[^.\s]+$/u.test(t);
      var t3 = i(6567);
      let t8 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        t9 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var t4 = i(9626);
      let t7 = (t) => (e) => e.test(t),
        et = [
          N.Rx,
          _.px,
          _.aQ,
          _.RW,
          _.vw,
          _.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        ee = (t) => et.find(t7(t));
      var ei = i(1085),
        en = i(9155),
        er = i(2038);
      let es = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eo(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(er.KP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = es.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let ea = /\b([a-z-]*)\(.*?\)/gu,
        el = {
          ...en.P,
          getAnimatableNone: (t) => {
            let e = t.match(ea);
            return e ? e.map(eo).join(" ") : t;
          },
        };
      var eu = i(2199);
      let eh = {
          ...U,
          color: eu.$,
          backgroundColor: eu.$,
          outlineColor: eu.$,
          fill: eu.$,
          stroke: eu.$,
          borderColor: eu.$,
          borderTopColor: eu.$,
          borderRightColor: eu.$,
          borderBottomColor: eu.$,
          borderLeftColor: eu.$,
          filter: el,
          WebkitFilter: el,
        },
        ec = (t) => eh[t];
      function ed(t, e) {
        let i = ec(t);
        return (
          i !== el && (i = en.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let ep = new Set(["auto", "none", "0"]);
      class ef extends ei.e {
        constructor(t, e, i, n) {
          super(t, e, i, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, B.t)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, t3.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = t9.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return t8(t) ? parseFloat(t) : t;
                }
                return (0, B.t)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !t4.z2.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = ee(n),
            o = ee(r);
          if (s !== o) {
            if ((0, t4.mP)(s) && (0, t4.mP)(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || t6(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !ep.has(e) &&
                  (0, en.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = ed(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = t4.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = t4.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function em(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var ev = i(2899),
        eg = i(3058);
      let ey = (t) => Array.isArray(t) && "number" == typeof t[0],
        ex = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eb = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ex([0, 0.65, 0.55, 1]),
          circOut: ex([0.55, 0, 1, 0.45]),
          backIn: ex([0.31, 0.01, 0.66, -0.59]),
          backOut: ex([0.33, 1.53, 0.69, 0.99]),
        };
      function eP(t) {
        return ew(t) || eb.easeOut;
      }
      function ew(t) {
        if (t) return ey(t) ? ex(t) : Array.isArray(t) ? t.map(eP) : eb[t];
      }
      let eS = em(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eT = new Set(["opacity", "clipPath", "filter", "transform"]);
      class eE extends ev.v {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new ef(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in eb) ||
                ey(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (t, e) {
                let i = new eg.s({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, l);
            1 === (t = u.keyframes).length && (t[1] = t[0]),
              (r = u.duration),
              (s = u.times),
              (o = u.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = ew(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (h.startTime = t5.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set((0, t2.$)(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, tK.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, tK.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, tK.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tF.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tF.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  ...l
                } = this.options,
                u = new eg.s({
                  ...l,
                  keyframes: i,
                  duration: n,
                  type: r,
                  ease: s,
                  times: o,
                  isGenerator: !0,
                }),
                h = (0, tK.w)(this.time);
              t.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            eS() &&
            i &&
            eT.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let eA = em(() => void 0 !== window.ScrollTimeline);
      class eR {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!eA() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let n = () => {
                    let { currentTime: n } = e,
                      r = null === n ? 0 : n.value,
                      s = r / 100;
                    i !== s && t(s), (i = s);
                  };
                  return tg.Wi.update(n, !0), () => (0, tg.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eC =
        (t, e, i, n = {}, r, s) =>
        (o) => {
          let a = tJ(n, t) || {},
            l = a.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= (0, tK.w)(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : r,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: n,
            staggerDirection: r,
            repeat: s,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...h
          }) {
            return !!Object.keys(h).length;
          })(a) && (h = { ...h, ...tQ(t, h) }),
            h.duration && (h.duration = (0, tK.w)(h.duration)),
            h.repeatDelay && (h.repeatDelay = (0, tK.w)(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
          let c = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (c = !0)),
            (t1.c.current || t0.c.skipAnimations) &&
              ((c = !0), (h.duration = 0), (h.delay = 0)),
            c && !s && void 0 !== e.get())
          ) {
            let t = (0, t2.$)(h.keyframes, a);
            if (void 0 !== t)
              return (
                tg.Wi.update(() => {
                  h.onUpdate(t), h.onComplete();
                }),
                new eR([])
              );
          }
          return !s && eE.supports(h) ? new eE(h) : new eg.s(h);
        };
      function eM(t) {
        return !!((0, L.i)(t) && t.add);
      }
      var ej = i(4101);
      function eV(t) {
        return t.getProps()[d];
      }
      function ek(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          u = t.getValue("willChange");
        n && (o = n);
        let h = [],
          c = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let a = { delay: i, elapsed: 0, ...tJ(o || {}, e) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let i = eV(t);
            if (i) {
              let t = window.HandoffAppearAnimations(i, e, n, tg.Wi);
              null !== t && ((a.elapsed = t), (d = !0));
            }
          }
          n.start(
            eC(
              e,
              n,
              r,
              t.shouldReduceMotion && O.G.has(e) ? { type: !1 } : a,
              t,
              d
            )
          );
          let p = n.animation;
          p && (eM(u) && (u.add(e), p.then(() => u.remove(e))), h.push(p));
        }
        return (
          a &&
            Promise.all(h).then(() => {
              tg.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let i = tH(t, e),
                      {
                        transitionEnd: n = {},
                        transition: r = {},
                        ...s
                      } = i || {};
                    for (let e in (s = { ...s, ...n })) {
                      let i = tf(s[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, ej.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function eO(t, e, i = {}) {
        var n;
        let r = tH(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(ek(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(eD)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              eO(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function eD(t, e) {
        return t.sortNodePosition(e);
      }
      let eL = [...x].reverse(),
        eF = x.length;
      function e$(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class eB extends tV {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if (
                            (t.notify("AnimationStart", e), Array.isArray(e))
                          ) {
                            let r = e.map((e) => eO(t, e, i));
                            n = Promise.all(r);
                          } else if ("string" == typeof e) n = eO(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? tH(t, e, i.custom) : e;
                            n = Promise.all(ek(t, r, i));
                          }
                          return n.then(() => {
                            tg.Wi.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: e$(!0),
                    whileInView: e$(),
                    whileHover: e$(),
                    whileTap: e$(),
                    whileDrag: e$(),
                    whileFocus: e$(),
                    exit: e$(),
                  },
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = tH(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < eF; e++) {
                    var d;
                    let p = eL[e],
                      f = i[p],
                      m = void 0 !== o[p] ? o[p] : a[p],
                      v = g(m),
                      x = p === s ? f.isActive : null;
                    !1 === x && (c = e);
                    let b = m === a[p] && m !== o[p] && v;
                    if (
                      (b && n && t.manuallyAnimateOnMount && (b = !1),
                      (f.protectedKeys = { ...h }),
                      (!f.isActive && null === x) ||
                        (!m && !f.prevProp) ||
                        y(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let P =
                        ((d = f.prevProp),
                        "string" == typeof m
                          ? m !== d
                          : !!Array.isArray(m) && !tX(m, d)),
                      w =
                        P || (p === s && f.isActive && !b && v) || (e > c && v),
                      S = !1,
                      T = Array.isArray(m) ? m : [m],
                      E = T.reduce(r(p), {});
                    !1 === x && (E = {});
                    let { prevResolvedValues: A = {} } = f,
                      R = { ...A, ...E },
                      C = (e) => {
                        (w = !0),
                          u.has(e) && ((S = !0), u.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in R) {
                      let e = E[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        (td(e) && td(i) ? tX(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? C(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                          ? C(t)
                          : u.add(t);
                    }
                    (f.prevProp = m),
                      (f.prevResolvedValues = E),
                      f.isActive && (h = { ...h, ...E }),
                      n && t.blockInitialAnimation && (w = !1),
                      w &&
                        (!b || S) &&
                        l.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), y(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eI = 0;
      class eN extends tV {
        constructor() {
          super(...arguments), (this.id = eI++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let e_ = (t, e) => Math.abs(t - e);
      class eW {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = eX(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = e_(t.x, e.x),
                      n = e_(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = tg.frameData;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eU(e, this.transformPagePoint)),
                tg.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = eX(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eU(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !tP(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = tw(t),
            o = eU(s, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = tg.frameData;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, eX(o, this.history)),
            (this.removeListeners = (0, tE.z)(
              tT(this.contextWindow, "pointermove", this.handlePointerMove),
              tT(this.contextWindow, "pointerup", this.handlePointerUp),
              tT(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tg.Pn)(this.updatePoint);
        }
      }
      function eU(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ez(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eX({ point: t }, e) {
        return {
          point: t,
          delta: ez(t, eH(e)),
          offset: ez(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = eH(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, tK.w)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tK.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function eH(t) {
        return t[t.length - 1];
      }
      var eK = i(2868),
        eY = i(9566);
      function eZ(t) {
        return t.max - t.min;
      }
      function eq(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function eG(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, eY.t)(e.min, e.max, t.origin)),
          (t.scale = eZ(i) / eZ(e)),
          (eq(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, eY.t)(i.min, i.max, t.origin) - t.originPoint),
          (eq(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function eQ(t, e, i, n) {
        eG(t.x, e.x, i.x, n ? n.originX : void 0),
          eG(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function eJ(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + eZ(e));
      }
      function e0(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + eZ(e));
      }
      function e1(t, e, i) {
        e0(t.x, e.x, i.x), e0(t.y, e.y, i.y);
      }
      var e2 = i(3021);
      function e5(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function e6(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function e3(t, e, i) {
        return { min: e8(t, e), max: e8(t, i) };
      }
      function e8(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let e9 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        e4 = () => ({ x: e9(), y: e9() }),
        e7 = () => ({ min: 0, max: 0 }),
        it = () => ({ x: e7(), y: e7() });
      function ie(t) {
        return [t("x"), t("y")];
      }
      function ii({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function ir(t) {
        return void 0 === t || 1 === t;
      }
      function is({ scale: t, scaleX: e, scaleY: i }) {
        return !ir(t) || !ir(e) || !ir(i);
      }
      function io(t) {
        return (
          is(t) ||
          ia(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ia(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function il(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function iu(t, e = 0, i = 1, n, r) {
        (t.min = il(t.min, e, i, n, r)), (t.max = il(t.max, e, i, n, r));
      }
      function ih(t, { x: e, y: i }) {
        iu(t.x, e.translate, e.scale, e.originPoint),
          iu(t.y, i.translate, i.scale, i.originPoint);
      }
      function ic(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function id(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ip(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = (0, eY.t)(t.min, t.max, s);
        iu(t, e[i], e[n], o, e.scale);
      }
      let im = ["x", "scaleX", "originX"],
        iv = ["y", "scaleY", "originY"];
      function ig(t, e) {
        ip(t.x, e, im), ip(t.y, e, iv);
      }
      function iy(t, e) {
        return ii(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ix = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ib = new WeakMap();
      class iP {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = it()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new eW(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tw(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tM(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  ie((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (_.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = eZ(n);
                          e = t * (parseFloat(e) / 100);
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && tg.Wi.postRender(() => r(t, e));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                ie((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ix(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && tg.Wi.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !iw(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, eY.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, eY.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && v(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: e5(t.x, i, r), y: e5(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: e3(t, "left", "right"), y: e3(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              ie((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !v(e)) return !1;
          let n = e.current;
          (0, t3.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = iy(t, i),
                { scroll: r } = e;
              return r && (id(n.x, r.offset.x), id(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: e6((t = r.layout.layoutBox).x, s.x), y: e6(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = ii(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = ie((o) => {
              if (!iw(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(eC(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          ie((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          ie((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps(),
            n = i[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          ie((e) => {
            let { drag: i } = this.getProps();
            if (!iw(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, eY.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!v(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          ie((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = eZ(t),
                  r = eZ(e);
                return (
                  r > n
                    ? (i = (0, eK.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, eK.Y)(t.min, t.max - r, e.min)),
                  (0, e2.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            ie((e) => {
              if (!iw(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, eY.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ib.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tT(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              v(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            i();
          let s = tb(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (ie((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function iw(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class iS extends tV {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tF.Z),
            (this.removeListeners = tF.Z),
            (this.controls = new iP(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tF.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let iT = (t) => (e, i) => {
        t && tg.Wi.postRender(() => t(e, i));
      };
      class iE extends tV {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tF.Z);
        }
        onPointerDown(t) {
          this.session = new eW(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ix(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: iT(t),
            onStart: iT(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && tg.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tT(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let iA = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function iR(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let iC = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!_.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = iR(t, e.target.x),
            n = iR(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      class iM extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(k, iV),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iA.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tg.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            f.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ij(t) {
        let [e, i] = (function () {
            let t = (0, s.useContext)(l.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, s.useId)();
            return (
              (0, s.useEffect)(() => n(r), []),
              !e && i ? [!1, () => i && i(r)] : [!0]
            );
          })(),
          n = (0, s.useContext)(R.p);
        return (0, r.jsx)(iM, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(C),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let iV = {
        borderRadius: {
          ...iC,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: iC,
        borderTopRightRadius: iC,
        borderBottomLeftRadius: iC,
        borderBottomRightRadius: iC,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = en.P.parse(t);
            if (n.length > 5) return t;
            let r = en.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, eY.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var ik = i(7026),
        iO = i(927);
      let iD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iL = iD.length,
        iF = (t) => ("string" == typeof t ? parseFloat(t) : t),
        i$ = (t) => "number" == typeof t || _.px.test(t);
      function iB(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let iI = i_(0, 0.5, iO.Bn),
        iN = i_(0.5, 0.95, tF.Z);
      function i_(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, eK.Y)(t, e, n)));
      }
      function iW(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function iU(t, e) {
        iW(t.x, e.x), iW(t.y, e.y);
      }
      function iz(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function iX(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (_.aQ.test(e)) {
            e = parseFloat(e);
            let t = (0, eY.t)(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = (0, eY.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = iz(t.min, e, i, a, r)),
            (t.max = iz(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let iH = ["x", "scaleX", "originX"],
        iK = ["y", "scaleY", "originY"];
      function iY(t, e, i, n) {
        iX(t.x, e, iH, i ? i.x : void 0, n ? n.x : void 0),
          iX(t.y, e, iK, i ? i.y : void 0, n ? n.y : void 0);
      }
      function iZ(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function iq(t) {
        return iZ(t.x) && iZ(t.y);
      }
      function iG(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function iQ(t) {
        return eZ(t.x) / eZ(t.y);
      }
      var iJ = i(7081);
      class i0 {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, iJ.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, iJ.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function i1(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y,
          o = (null == i ? void 0 : i.z) || 0;
        if (
          ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let {
            transformPerspective: t,
            rotate: e,
            rotateX: r,
            rotateY: s,
            skewX: o,
            skewY: a,
          } = i;
          t && (n = `perspective(${t}px) ${n}`),
            e && (n += `rotate(${e}deg) `),
            r && (n += `rotateX(${r}deg) `),
            s && (n += `rotateY(${s}deg) `),
            o && (n += `skewX(${o}deg) `),
            a && (n += `skewY(${a}deg) `);
        }
        let a = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }
      let i2 = (t, e) => t.depth - e.depth;
      class i5 {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, iJ.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, iJ.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(i2),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let i6 = ["", "X", "Y", "Z"],
        i3 = { visibility: "hidden" },
        i8 = 0,
        i9 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function i4(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function i7({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = i8++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (i9.totalNodes =
                    i9.resolvedTargetDeltas =
                    i9.recalculatedProjection =
                      0),
                  this.nodes.forEach(ni),
                  this.nodes.forEach(nu),
                  this.nodes.forEach(nh),
                  this.nodes.forEach(nn),
                  window.MotionDebug && window.MotionDebug.record(i9);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new i5());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ik.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t5.X.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, tg.Pn)(n), t(s - e));
                      };
                    return tg.Wi.read(n, !0), () => (0, tg.Pn)(n);
                  })(n, 250)),
                  iA.hasAnimatedSinceResize &&
                    ((iA.hasAnimatedSinceResize = !1), this.nodes.forEach(nl));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nv,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !iG(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...tJ(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nl(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tg.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nc),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.HandoffCancelAllAnimations &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return !1;
                  let { visualElement: i } = e.options;
                  return (
                    !!i &&
                    (!!eV(i) ||
                      (!!e.parent &&
                        !e.parent.hasCheckedOptimisedAppear &&
                        t(e.parent)))
                  );
                })(this) &&
                window.HandoffCancelAllAnimations(),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ns);
              return;
            }
            this.isUpdating || this.nodes.forEach(no),
              (this.isUpdating = !1),
              this.nodes.forEach(na),
              this.nodes.forEach(nt),
              this.nodes.forEach(ne),
              this.clearAllSnapshots();
            let e = t5.X.now();
            (tg.frameData.delta = (0, e2.u)(
              0,
              1e3 / 60,
              e - tg.frameData.timestamp
            )),
              (tg.frameData.timestamp = e),
              (tg.frameData.isProcessing = !0),
              tg.S6.update.process(tg.frameData),
              tg.S6.preRender.process(tg.frameData),
              tg.S6.render.process(tg.frameData),
              (tg.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), f.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nr), this.sharedNodes.forEach(nd);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tg.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tg.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = it()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !iq(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || io(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              nx((e = n).x),
              nx(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return it();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (id(e.x, i.offset.x), id(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = it();
            iU(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  iU(e, t);
                  let { scroll: i } = this.root;
                  i && (id(e.x, -i.offset.x), id(e.y, -i.offset.y));
                }
                id(e.x, r.offset.x), id(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = it();
            iU(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ig(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                io(n.latestValues) && ig(i, n.latestValues);
            }
            return io(this.latestValues) && ig(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = it();
            iU(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !io(i.latestValues)) continue;
              is(i.latestValues) && i.updateSnapshot();
              let n = it(),
                r = i.measurePageBox();
              iU(n, r),
                iY(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return io(this.latestValues) && iY(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tg.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = tg.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = it()),
                    (this.relativeTargetOrigin = it()),
                    e1(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    iU(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = it()), (this.targetWithTransforms = it())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      eJ(i.x, n.x, r.x),
                      eJ(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iU(this.target, this.layout.layoutBox),
                      ih(this.target, this.targetDelta))
                    : iU(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = it()),
                      (this.relativeTargetOrigin = it()),
                      e1(this.relativeTargetOrigin, this.target, t.target),
                      iU(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                i9.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              is(this.parent.latestValues) ||
              ia(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tg.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            iU(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ig(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), ih(t, s)),
                    n && io(r.latestValues) && ig(t, r.latestValues));
                }
                (e.x = ic(e.x)), (e.y = ic(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = it()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = e4()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = e4()),
              (this.projectionDeltaWithTransform = e4()));
            let u = this.projectionTransform;
            eQ(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = i1(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              i9.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = e4();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = it(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(nm)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (np(o.x, t.x, n),
                  np(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, c, f;
                  e1(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (c = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    nf(c.x, f.x, a.x, n),
                    nf(c.y, f.y, a.y, n),
                    i &&
                      ((l = this.relativeTarget),
                      (u = i),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = it()),
                    iU(i, this.relativeTarget);
                }
                h &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, eY.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          iI(n)
                        )),
                        (t.opacityExit = (0, eY.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          iN(n)
                        )))
                      : s &&
                        (t.opacity = (0, eY.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < iL; r++) {
                      let s = `border${iD[r]}Radius`,
                        o = iB(e, s),
                        a = iB(i, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || i$(o) === i$(a);
                      l
                        ? ((t[s] = Math.max((0, eY.t)(iF(o), iF(a), n), 0)),
                          (_.aQ.test(a) || _.aQ.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, eY.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tg.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tg.Wi.update(() => {
                (iA.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, L.i)(t) ? t : (0, ej.BX)(t);
                    return n.start(eC("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                nb(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || it();
                let e = eZ(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = eZ(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              iU(e, i),
                ig(e, r),
                eQ(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new i0());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && i4("z", t, n, this.animationValues);
            for (let e = 0; e < i6.length; e++)
              i4(`rotate${i6[e]}`, t, n, this.animationValues),
                i4(`skew${i6[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return i3;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  tm(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tm(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !io(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = i1(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            k)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = k[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? tm(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(ns),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nt(t) {
        t.updateLayout();
      }
      function ne(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? ie((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = eZ(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : nb(r, i.layoutBox, e) &&
              ie((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = eZ(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = e4();
          eQ(o, e, i.layoutBox);
          let a = e4();
          s
            ? eQ(a, t.applyTransform(n, !0), i.measuredBox)
            : eQ(a, e, i.layoutBox);
          let l = !iq(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = it();
                e1(o, i.layoutBox, r.layoutBox);
                let a = it();
                e1(a, e, s.layoutBox),
                  iG(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ni(t) {
        i9.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nn(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nr(t) {
        t.clearSnapshot();
      }
      function ns(t) {
        t.clearMeasurements();
      }
      function no(t) {
        t.isLayoutDirty = !1;
      }
      function na(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nl(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nu(t) {
        t.resolveTargetDelta();
      }
      function nh(t) {
        t.calcProjection();
      }
      function nc(t) {
        t.resetSkewAndRotation();
      }
      function nd(t) {
        t.removeLeadSnapshot();
      }
      function np(t, e, i) {
        (t.translate = (0, eY.t)(e.translate, 0, i)),
          (t.scale = (0, eY.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nf(t, e, i, n) {
        (t.min = (0, eY.t)(e.min, i.min, n)),
          (t.max = (0, eY.t)(e.max, i.max, n));
      }
      function nm(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nv = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ng = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ny = ng("applewebkit/") && !ng("chrome/") ? Math.round : tF.Z;
      function nx(t) {
        (t.min = ny(t.min)), (t.max = ny(t.max));
      }
      function nb(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !eq(iQ(e), iQ(i), 0.2))
        );
      }
      let nP = i7({
          attachResizeListener: (t, e) => tb(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nw = { current: void 0 },
        nS = i7({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nw.current) {
              let t = new nP({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nw.current = t);
            }
            return nw.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nT = { current: null },
        nE = { current: !1 },
        nA = new WeakMap(),
        nR = [...et, eu.$, en.P],
        nC = (t) => nR.find(t7(t)),
        nM = Object.keys(E),
        nj = nM.length,
        nV = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nk = b.length;
      class nO {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, n) =>
            new this.KeyframeResolver(t, e, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = ei.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tg.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = P(e)),
            (this.isVariantNode = w(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] &&
              (0, L.i)(e) &&
              (e.set(a[t], !1), eM(u) && u.add(t));
          }
        }
        mount(t) {
          (this.current = t),
            nA.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nE.current ||
              (function () {
                if (((nE.current = !0), A.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nT.current = t.matches);
                    t.addListener(e), e();
                  } else nT.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nT.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var t;
          for (let t in (nA.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tg.Pn)(this.notifyUpdate),
          (0, tg.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features)
            null === (t = this.features[e]) || void 0 === t || t.unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = O.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tg.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, r) {
          let s, o;
          for (let t = 0; t < nj; t++) {
            let i = nM[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = E[i];
            a && (s = a),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            let {
              layoutId: t,
              layout: i,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            (this.projection = new s(
              this.latestValues,
              e["data-framer-portal-id"]
                ? void 0
                : (function t(e) {
                    if (e)
                      return !1 !== e.options.allowProjection
                        ? e.projection
                        : t(e.parent);
                  })(this.parent)
            )),
              this.projection.setOptions({
                layoutId: t,
                layout: i,
                alwaysMeasureLayout: !!n || (o && v(o)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: "string" == typeof i ? i : "both",
                initialPromotionConfig: r,
                layoutScroll: a,
                layoutRoot: l,
              });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : it();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nV.length; e++) {
            let i = nV[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = "on" + i,
              r = t[n];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if ((0, L.i)(s)) t.addValue(r, s), eM(n) && n.add(r);
              else if ((0, L.i)(o))
                t.addValue(r, (0, ej.BX)(s, { owner: t })),
                  eM(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, ej.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nk; t++) {
            let i = b[t],
              n = this.props[i];
            (g(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ej.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (t8(n) || t6(n))
                ? (n = parseFloat(n))
                : !nC(n) && en.P.test(e) && (n = ed(t, e)),
              this.setBaseTarget(t, (0, L.i)(n) ? n.get() : n)),
            (0, L.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = th(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, L.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ik.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nD extends nO {
        constructor() {
          super(...arguments), (this.KeyframeResolver = ef);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class nL extends nD {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (O.G.has(e)) {
            let t = ec(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, B.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iy(t, e);
        }
        build(t, e, i, n) {
          z(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return ta(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, L.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          tr(t, e, i, n);
        }
      }
      class nF extends nD {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (O.G.has(e)) {
            let t = ec(e);
            return (t && t.default) || 0;
          }
          return (e = ts.has(e) ? e : c(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return it();
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tl(t, e, i);
        }
        build(t, e, i, n) {
          tt(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          to(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = ti(t.tagName)), super.mount(t);
        }
      }
      let n$ = (t, e) =>
          V(t)
            ? new nF(e, { enableHardwareAcceleration: !1 })
            : new nL(e, {
                allowProjection: t !== s.Fragment,
                enableHardwareAcceleration: !0,
              }),
        nB = {
          animation: { Feature: eB },
          exit: { Feature: eN },
          inView: { Feature: tz },
          tap: { Feature: tB },
          focus: { Feature: tD },
          hover: { Feature: tO },
          pan: { Feature: iE },
          drag: { Feature: iS, ProjectionNode: nS, MeasureLayout: ij },
          layout: { ProjectionNode: nS, MeasureLayout: ij },
        },
        nI = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: c,
            }) {
              t &&
                (function (t) {
                  for (let e in t) E[e] = { ...E[e], ...t[e] };
                })(t);
              let p = (0, s.forwardRef)(function (p, m) {
                var y;
                let x;
                let b = {
                    ...(0, s.useContext)(o._),
                    ...p,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, s.useContext)(R.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(p),
                  },
                  { isStatic: w } = b,
                  T = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (P(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || g(e) ? e : void 0,
                          animate: g(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, s.useContext)(a));
                    return (0, s.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [S(e), S(i)]
                    );
                  })(p),
                  E = n(p, w);
                if (!w && A.j) {
                  T.visualElement = (function (t, e, i, n) {
                    let { visualElement: r } = (0, s.useContext)(a),
                      c = (0, s.useContext)(h),
                      p = (0, s.useContext)(l.O),
                      m = (0, s.useContext)(o._).reducedMotion,
                      v = (0, s.useRef)();
                    (n = n || c.renderer),
                      !v.current &&
                        n &&
                        (v.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: m,
                        }));
                    let g = v.current;
                    (0, s.useInsertionEffect)(() => {
                      g && g.update(i, p);
                    });
                    let y = (0, s.useRef)(!!(i[d] && !window.HandoffComplete));
                    return (
                      (0, u.L)(() => {
                        g &&
                          (f.render(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(c, E, b, e);
                  let i = (0, s.useContext)(C),
                    n = (0, s.useContext)(h).strict;
                  T.visualElement &&
                    (x = T.visualElement.loadFeatures(b, n, t, i));
                }
                return (0, r.jsxs)(a.Provider, {
                  value: T,
                  children: [
                    x && T.visualElement
                      ? (0, r.jsx)(x, { visualElement: T.visualElement, ...b })
                      : null,
                    i(
                      c,
                      p,
                      ((y = T.visualElement),
                      (0, s.useCallback)(
                        (t) => {
                          t && E.mount && E.mount(t),
                            y && (t ? y.mount(t) : y.unmount()),
                            m &&
                              ("function" == typeof m
                                ? m(t)
                                : v(m) && (m.current = t));
                        },
                        [y]
                      )),
                      E,
                      w,
                      T.visualElement
                    ),
                  ],
                });
              });
              return (p[M] = c), p;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            let r = V(t) ? ty : tx;
            return {
              ...r,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: r }, o) => {
                  let a = V(e) ? tn : K,
                    l = a(i, r, o, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (q(r) ||
                            (!0 === i && Z(r)) ||
                            (!e && !Z(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = e !== s.Fragment ? { ...u, ...l, ref: n } : {},
                    { children: c } = i,
                    d = (0, s.useMemo)(() => ((0, L.i)(c) ? c.get() : c), [c]);
                  return (0, s.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, nB, n$)
        );
    },
    417: function (t, e, i) {
      "use strict";
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => {
          let e = s(t);
          return !!e && a.test(t.split("/*")[0].trim());
        },
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    9626: function (t, e, i) {
      "use strict";
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(9303),
        r = i(2980),
        s = i(3681);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    9303: function (t, e, i) {
      "use strict";
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
    },
    1085: function (t, e, i) {
      "use strict";
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(9626),
        r = i(6846);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    6101: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    7081: function (t, e, i) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    3021: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    6567: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(9588);
      let r = n.Z,
        s = n.Z;
    },
    7015: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(6567),
        r = i(3021),
        s = i(4694),
        o = i(2868),
        a = i(9588),
        l = i(7330);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, n.k)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          p = d.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return d[i](n);
          };
        return i ? (e) => f((0, r.u)(t[0], t[c - 1], e)) : f;
      }
    },
    6613: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    7330: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return E;
        },
      });
      var n = i(9566),
        r = i(6567);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var o = i(3257),
        a = i(2808),
        l = i(6002);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function p(t) {
        let e = d(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(4694),
        v = i(2199),
        g = i(9155),
        y = i(417);
      let x = new Set(["none", "hidden"]);
      function b(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function P(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
          ? (0, y.t)(t)
            ? u
            : v.$.test(t)
            ? f
            : T
          : Array.isArray(t)
          ? w
          : "object" == typeof t
          ? v.$.test(t)
            ? f
            : S
          : u;
      }
      function w(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => P(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = P(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = g.P.createTransformer(e),
          n = (0, g.V)(t),
          s = (0, g.V)(e),
          o =
            n.indexes.var.length === s.indexes.var.length &&
            n.indexes.color.length === s.indexes.color.length &&
            n.indexes.number.length >= s.indexes.number.length;
        return o
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, m.z)(
                w(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function E(t, e, i) {
        if (
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
        )
          return (0, n.t)(t, e, i);
        let r = P(t);
        return r(t, e);
      }
    },
    9566: function (t, e, i) {
      "use strict";
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    9588: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    4694: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    2868: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    7026: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(7081);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    1356: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    961: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    58: function (t, e, i) {
      "use strict";
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    538: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(2265),
        r = i(6613);
      let s = r.j ? n.useLayoutEffect : n.useEffect;
    },
    9815: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      i.d(e, {
        R: function () {
          return n;
        },
      });
    },
    4101: function (t, e, i) {
      "use strict";
      i.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(7026),
        r = i(9815),
        s = i(3970),
        o = i(6846);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.2.10"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    3257: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return s;
        },
      });
      var n = i(2808),
        r = i(686);
      let s = {
        test: (0, r.i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    6002: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(2980),
        r = i(3681),
        s = i(2038),
        o = i(686);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    2199: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(2038),
        r = i(3257),
        s = i(6002),
        o = i(2808);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    2808: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(3021),
        r = i(2980),
        s = i(2038),
        o = i(686);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    686: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(2038);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    9155: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(2199),
        r = i(2038);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e.replace(
            a,
            (t) => (
              n.$.test(t)
                ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                : t.startsWith("var(")
                ? (r.var.push(u), l.push("var"), i.push(t))
                : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
              ++u,
              "${}"
            )
          ),
          c = h.split("${}");
        return { values: i, split: c, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += n.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t),
              i = h(t);
            return i(e.map(c));
          },
        };
    },
    2980: function (t, e, i) {
      "use strict";
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(3021);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    3681: function (t, e, i) {
      "use strict";
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(2038);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    2038: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
    },
    5735: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    3118: function (t, e, i) {
      "use strict";
      i.d(e, {
        w_: function () {
          return h;
        },
      });
      var n = i(2265),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(r),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var n, r;
                (n = e),
                  (r = i[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var n = i.call(t, e || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : e + "";
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = r);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          n.createElement(
            c,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  n.createElement(e.tag, u({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function c(t) {
        var e = (e) => {
          var i,
            { attr: r, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                n,
                r = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      i[n] = t[n];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                  (i = s[n]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (r[i] = t[i]);
              }
              return r;
            })(t, o),
            c = s || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                r,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (t) => e(t))
          : e(r);
      }
    },
  },
]);
