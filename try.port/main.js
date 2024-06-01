!(function () {
  function e(t, n, r) {
    function i(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var l = "function" == typeof require && require;
          if (!s && l) return l(a, !0);
          if (o) return o(a, !0);
          var u = new Error("Cannot find module '" + a + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var c = (n[a] = { exports: {} });
        t[a][0].call(
          c.exports,
          function (e) {
            var n = t[a][1][e];
            return i(n || e);
          },
          c,
          c.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[a].exports;
    }
    for (
      var o = "function" == typeof require && require, a = 0;
      a < r.length;
      a++
    )
      i(r[a]);
    return i;
  }
  return e;
})()(
  {
    1: [
      function (e, t, n) {
        "use strict";
        e("./partials/bodyclass"),
          e("./partials/example"),
          e("./partials/lazyloading"),
          e("./partials/scrollto"),
          e("./partials/pagetransition"),
          e("./partials/photoswipe"),
          e("./partials/waypoints"),
          e("./partials/search"),
          e("./partials/macy"),
          e("./partials/fontfaceobserver"),
          e("./partials/vendor/prismjs"),
          e("./partials/welcome");
      },
      {
        "./partials/bodyclass": 2,
        "./partials/example": 4,
        "./partials/fontfaceobserver": 5,
        "./partials/lazyloading": 6,
        "./partials/macy": 7,
        "./partials/pagetransition": 8,
        "./partials/photoswipe": 9,
        "./partials/scrollto": 10,
        "./partials/search": 11,
        "./partials/vendor/prismjs": 13,
        "./partials/waypoints": 14,
        "./partials/welcome": 15,
      },
    ],
    2: [
      function (e, t, n) {
        "use strict";
        for (
          var r = document.querySelector("body"),
            i = 1e3,
            o = 3e3,
            a = 0,
            s = 1;
          a <= o;

        )
          0 == a
            ? r.classList.add("is_ready")
            : setTimeout(function () {
                r.classList.add("is_now_" + s * i), s++;
              }, a),
            (a += i);
      },
      {},
    ],
    3: [
      function (e, t, n) {
        "use strict";
        var r = function (e, t, n) {
          var r;
          return function () {
            var i = this,
              o = arguments,
              a = function () {
                (r = null), n || e.apply(i, o);
              },
              s = n && !r;
            clearTimeout(r), (r = setTimeout(a, t)), s && e.apply(i, o);
          };
        };
        t.exports = r;
        var i = r(function () {}, 500);
        window.addEventListener("resize", i);
      },
      {},
    ],
    4: [
      function (e, t, n) {
        "use strict";
        console.log("===================="),
          console.log("Made with dh_Boilerplate"),
          console.log(
            "Get it here: https://www.npmjs.com/package/generator-dhboilerplate"
          ),
          console.log("--------------------"),
          console.log("AUTHOR:  David Hellmann"),
          console.log("URL:     https://davidhellmann.com"),
          console.log("====================");
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("fontfaceobserver"),
          o = r(i),
          a = new o["default"]("Droid Serif"),
          s = new o["default"]("Roboto");
        Promise.all([a.load(), s.load()]).then(function () {
          document.documentElement.className += " wf-active";
        });
      },
      { fontfaceobserver: 17 },
    ],
    6: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("lazysizes"),
          o =
            (r(i),
            e("../../../../node_modules/lazysizes/plugins/bgset/ls.bgset.js")),
          a =
            (r(o),
            e(
              "../../../../node_modules/lazysizes/plugins/respimg/ls.respimg.js"
            ));
        r(a);
        (window.lazySizesConfig = window.lazySizesConfig || {}),
          (window.lazySizesConfig.expand = 500),
          (lazySizesConfig.expFactor = 1.7);
      },
      {
        "../../../../node_modules/lazysizes/plugins/bgset/ls.bgset.js": 20,
        "../../../../node_modules/lazysizes/plugins/respimg/ls.respimg.js": 21,
        lazysizes: 19,
      },
    ],
    7: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("macy"),
          o = r(i),
          a = document.querySelector(".instagramFeed__list");
        a &&
          o["default"].init({
            container: ".instagramFeed__list",
            trueOrder: !0,
            waitForImages: !0,
            columns: 3,
            breakAt: { 667: 2, 320: 1 },
          });
      },
      { macy: 22 },
    ],
    8: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i(e) {
          window.location = e;
        }
        var o = e("jquery"),
          a = r(o),
          s = window.location.protocol + "//" + window.location.host;
        (0, a["default"])('a[href^="' + s + '"]:not([href*="#"])').on(
          "click",
          function (e) {
            if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
              var t = (0, a["default"])(this).attr("href");
              e.preventDefault(),
                (0, a["default"])("html").addClass("js_pageTransition"),
                setTimeout(function () {
                  i(t);
                }, 250);
            }
          }
        ),
          (0, a["default"])(window).bind("pageshow", function (e) {
            e.originalEvent.persisted &&
              (0, a["default"])("html").removeClass("js_pageTransition");
          });
      },
      { jquery: 18 },
    ],
    9: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("photoswipe"),
          o = r(i),
          a = e(
            "../../../../node_modules/photoswipe/dist/photoswipe-ui-default"
          ),
          s = r(a),
          l = function (e) {
            for (
              var t = function (e) {
                  for (
                    var t,
                      n,
                      r,
                      i,
                      o = e.childNodes,
                      a = o.length,
                      s = [],
                      l = 0;
                    l < a;
                    l++
                  )
                    (t = o[l]),
                      1 === t.nodeType &&
                        ((n = t.children[0]),
                        (r = n.getAttribute("data-size").split("x")),
                        (i = {
                          src: n.getAttribute("href"),
                          w: parseInt(r[0], 10),
                          h: parseInt(r[1], 10),
                        }),
                        t.children.length > 1 &&
                          (i.title = t.children[1].innerHTML),
                        n.children.length > 0 &&
                          (i.msrc = n.children[0].getAttribute("src")),
                        (i.el = t),
                        s.push(i));
                  return s;
                },
                n = function f(e, t) {
                  return e && (t(e) ? e : f(e.parentNode, t));
                },
                r = function (e) {
                  (e = e || window.event),
                    e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1);
                  var t = e.target || e.srcElement,
                    r = n(t, function (e) {
                      return e.tagName && "FIGURE" === e.tagName.toUpperCase();
                    });
                  if (r) {
                    for (
                      var i,
                        o = r.parentNode,
                        s = r.parentNode.childNodes,
                        l = s.length,
                        u = 0,
                        c = 0;
                      c < l;
                      c++
                    )
                      if (1 === s[c].nodeType) {
                        if (s[c] === r) {
                          i = u;
                          break;
                        }
                        u++;
                      }
                    return i >= 0 && a(i, o), !1;
                  }
                },
                i = function () {
                  var e = window.location.hash.substring(1),
                    t = {};
                  if (e.length < 5) return t;
                  for (var n = e.split("&"), r = 0; r < n.length; r++)
                    if (n[r]) {
                      var i = n[r].split("=");
                      i.length < 2 || (t[i[0]] = i[1]);
                    }
                  return t.gid && (t.gid = parseInt(t.gid, 10)), t;
                },
                a = function (e, n, r, i) {
                  var a,
                    l,
                    u,
                    c = document.querySelectorAll(".pswp")[0];
                  if (
                    ((u = t(n)),
                    (l = {
                      closeEl: !0,
                      captionEl: !1,
                      fullscreenEl: !1,
                      zoomEl: !0,
                      shareEl: !1,
                      counterEl: !0,
                      arrowEl: !0,
                      preloaderEl: !0,
                      galleryUID: n.getAttribute("data-pswp-uid"),
                      getThumbBoundsFn: function (e) {
                        var t = u[e].el.getElementsByTagName("img")[0],
                          n =
                            window.pageYOffset ||
                            document.documentElement.scrollTop,
                          r = t.getBoundingClientRect();
                        return { x: r.left, y: r.top + n, w: r.width };
                      },
                    }),
                    i)
                  )
                    if (l.galleryPIDs) {
                      for (var d = 0; d < u.length; d++)
                        if (u[d].pid == e) {
                          l.index = d;
                          break;
                        }
                    } else l.index = parseInt(e, 10) - 1;
                  else l.index = parseInt(e, 10);
                  isNaN(l.index) ||
                    (r && (l.showAnimationDuration = 0),
                    (a = new o["default"](c, s["default"], u, l)),
                    a.init());
                },
                l = document.querySelectorAll(e),
                u = 0,
                c = l.length;
              u < c;
              u++
            )
              l[u].setAttribute("data-pswp-uid", u + 1), (l[u].onclick = r);
            var d = i();
            d.pid && d.gid && a(d.pid, l[d.gid - 1], !0, !0);
          };
        l(".photoswipeGallery");
      },
      {
        "../../../../node_modules/photoswipe/dist/photoswipe-ui-default": 23,
        photoswipe: 24,
      },
    ],
    10: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("jquery"),
          o = r(i),
          a = e("./debounce"),
          s = r(a),
          l = (0, o["default"])("html, body");
        (0, o["default"])('a[href^="#"]').on("click", function (e) {
          console.log(this);
          var t = (0, o["default"])((0, o["default"])(this).attr("href")),
            n = (0, o["default"])(this).attr("data-delay");
          t.length &&
            (e.preventDefault(),
            "" != n
              ? setTimeout(function () {
                  l.animate({ scrollTop: t.offset().top }, 500, function () {
                    window.location.hash = t.selector;
                  });
                }, n)
              : l.animate({ scrollTop: t.offset().top }, 500, function () {
                  window.location.hash = t.selector;
                }));
        }),
          l.bind(
            "scroll mousedown DOMMouseScroll mousewheel keyup touchmove",
            function () {
              l.stop();
            }
          );
        var u = (0, s["default"])(function () {
          var e = (0, o["default"])("body");
          (0, o["default"])(window).scrollTop() >= 100
            ? e.addClass("is_scrolled--100")
            : e.removeClass("is_scrolled--100");
        }, 500);
        window.addEventListener("scroll", u);
      },
      { "./debounce": 3, jquery: 18 },
    ],
    11: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("jquery"),
          o = r(i);
        (0, o["default"])(".js_searchForm").on("click", function (e) {
          e.preventDefault(),
            (0, o["default"])(".js_searchForm").toggleClass("is_active"),
            (0, o["default"])(".js_searchBox").toggleClass("is_active"),
            (0, o["default"])(".searchForm__input").focus();
        });
      },
      { jquery: 18 },
    ],
    12: [
      function (e, t, n) {
        "use strict";
        !(function () {
          function e(r) {
            if (!r)
              throw new Error("No options passed to Waypoint constructor");
            if (!r.element)
              throw new Error(
                "No element option passed to Waypoint constructor"
              );
            if (!r.handler)
              throw new Error(
                "No handler option passed to Waypoint constructor"
              );
            (this.key = "waypoint-" + t),
              (this.options = e.Adapter.extend({}, e.defaults, r)),
              (this.element = this.options.element),
              (this.adapter = new e.Adapter(this.element)),
              (this.callback = r.handler),
              (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
              (this.enabled = this.options.enabled),
              (this.triggerPoint = null),
              (this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
              })),
              (this.context = e.Context.findOrCreateByElement(
                this.options.context
              )),
              e.offsetAliases[this.options.offset] &&
                (this.options.offset = e.offsetAliases[this.options.offset]),
              this.group.add(this),
              this.context.add(this),
              (n[this.key] = this),
              (t += 1);
          }
          var t = 0,
            n = {};
          (e.prototype.queueTrigger = function (e) {
            this.group.queueTrigger(this, e);
          }),
            (e.prototype.trigger = function (e) {
              this.enabled && this.callback && this.callback.apply(this, e);
            }),
            (e.prototype.destroy = function () {
              this.context.remove(this),
                this.group.remove(this),
                delete n[this.key];
            }),
            (e.prototype.disable = function () {
              return (this.enabled = !1), this;
            }),
            (e.prototype.enable = function () {
              return this.context.refresh(), (this.enabled = !0), this;
            }),
            (e.prototype.next = function () {
              return this.group.next(this);
            }),
            (e.prototype.previous = function () {
              return this.group.previous(this);
            }),
            (e.invokeAll = function (e) {
              var t = [];
              for (var r in n) t.push(n[r]);
              for (var i = 0, o = t.length; i < o; i++) t[i][e]();
            }),
            (e.destroyAll = function () {
              e.invokeAll("destroy");
            }),
            (e.disableAll = function () {
              e.invokeAll("disable");
            }),
            (e.enableAll = function () {
              e.invokeAll("enable");
            }),
            (e.refreshAll = function () {
              e.Context.refreshAll();
            }),
            (e.viewportHeight = function () {
              return (
                window.innerHeight || document.documentElement.clientHeight
              );
            }),
            (e.viewportWidth = function () {
              return document.documentElement.clientWidth;
            }),
            (e.adapters = []),
            (e.defaults = {
              context: window,
              continuous: !0,
              enabled: !0,
              group: "default",
              horizontal: !1,
              offset: 0,
            }),
            (e.offsetAliases = {
              "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
              },
              "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
              },
            }),
            (window.Waypoint = e);
        })(),
          (function () {
            function e(e) {
              window.setTimeout(e, 1e3 / 60);
            }
            function t(e) {
              (this.element = e),
                (this.Adapter = i.Adapter),
                (this.adapter = new this.Adapter(e)),
                (this.key = "waypoint-context-" + n),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                  x: this.adapter.scrollLeft(),
                  y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (e.waypointContextKey = this.key),
                (r[e.waypointContextKey] = this),
                (n += 1),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
            }
            var n = 0,
              r = {},
              i = window.Waypoint,
              o = window.onload;
            (t.prototype.add = function (e) {
              var t = e.options.horizontal ? "horizontal" : "vertical";
              (this.waypoints[t][e.key] = e), this.refresh();
            }),
              (t.prototype.checkEmpty = function () {
                var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                  t = this.Adapter.isEmptyObject(this.waypoints.vertical);
                e && t && (this.adapter.off(".waypoints"), delete r[this.key]);
              }),
              (t.prototype.createThrottledResizeHandler = function () {
                function e() {
                  t.handleResize(), (t.didResize = !1);
                }
                var t = this;
                this.adapter.on("resize.waypoints", function () {
                  t.didResize ||
                    ((t.didResize = !0), i.requestAnimationFrame(e));
                });
              }),
              (t.prototype.createThrottledScrollHandler = function () {
                function e() {
                  t.handleScroll(), (t.didScroll = !1);
                }
                var t = this;
                this.adapter.on("scroll.waypoints", function () {
                  (t.didScroll && !i.isTouch) ||
                    ((t.didScroll = !0), i.requestAnimationFrame(e));
                });
              }),
              (t.prototype.handleResize = function () {
                i.Context.refreshAll();
              }),
              (t.prototype.handleScroll = function () {
                var e = {},
                  t = {
                    horizontal: {
                      newScroll: this.adapter.scrollLeft(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                    },
                    vertical: {
                      newScroll: this.adapter.scrollTop(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                    },
                  };
                for (var n in t) {
                  var r = t[n],
                    i = r.newScroll > r.oldScroll,
                    o = i ? r.forward : r.backward;
                  for (var a in this.waypoints[n]) {
                    var s = this.waypoints[n][a],
                      l = r.oldScroll < s.triggerPoint,
                      u = r.newScroll >= s.triggerPoint,
                      c = l && u,
                      d = !l && !u;
                    (c || d) && (s.queueTrigger(o), (e[s.group.id] = s.group));
                  }
                }
                for (var f in e) e[f].flushTriggers();
                this.oldScroll = {
                  x: t.horizontal.newScroll,
                  y: t.vertical.newScroll,
                };
              }),
              (t.prototype.innerHeight = function () {
                return this.element == this.element.window
                  ? i.viewportHeight()
                  : this.adapter.innerHeight();
              }),
              (t.prototype.remove = function (e) {
                delete this.waypoints[e.axis][e.key], this.checkEmpty();
              }),
              (t.prototype.innerWidth = function () {
                return this.element == this.element.window
                  ? i.viewportWidth()
                  : this.adapter.innerWidth();
              }),
              (t.prototype.destroy = function () {
                var e = [];
                for (var t in this.waypoints)
                  for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
                for (var r = 0, i = e.length; r < i; r++) e[r].destroy();
              }),
              (t.prototype.refresh = function () {
                var e,
                  t = this.element == this.element.window,
                  n = t ? void 0 : this.adapter.offset(),
                  r = {};
                this.handleScroll(),
                  (e = {
                    horizontal: {
                      contextOffset: t ? 0 : n.left,
                      contextScroll: t ? 0 : this.oldScroll.x,
                      contextDimension: this.innerWidth(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                      offsetProp: "left",
                    },
                    vertical: {
                      contextOffset: t ? 0 : n.top,
                      contextScroll: t ? 0 : this.oldScroll.y,
                      contextDimension: this.innerHeight(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                      offsetProp: "top",
                    },
                  });
                for (var o in e) {
                  var a = e[o];
                  for (var s in this.waypoints[o]) {
                    var l,
                      u,
                      c,
                      d,
                      f,
                      p = this.waypoints[o][s],
                      h = p.options.offset,
                      m = p.triggerPoint,
                      g = 0,
                      v = null == m;
                    p.element !== p.element.window &&
                      (g = p.adapter.offset()[a.offsetProp]),
                      "function" == typeof h
                        ? (h = h.apply(p))
                        : "string" == typeof h &&
                          ((h = parseFloat(h)),
                          p.options.offset.indexOf("%") > -1 &&
                            (h = Math.ceil((a.contextDimension * h) / 100))),
                      (l = a.contextScroll - a.contextOffset),
                      (p.triggerPoint = g + l - h),
                      (u = m < a.oldScroll),
                      (c = p.triggerPoint >= a.oldScroll),
                      (d = u && c),
                      (f = !u && !c),
                      !v && d
                        ? (p.queueTrigger(a.backward),
                          (r[p.group.id] = p.group))
                        : !v && f
                        ? (p.queueTrigger(a.forward), (r[p.group.id] = p.group))
                        : v &&
                          a.oldScroll >= p.triggerPoint &&
                          (p.queueTrigger(a.forward),
                          (r[p.group.id] = p.group));
                  }
                }
                return (
                  i.requestAnimationFrame(function () {
                    for (var e in r) r[e].flushTriggers();
                  }),
                  this
                );
              }),
              (t.findOrCreateByElement = function (e) {
                return t.findByElement(e) || new t(e);
              }),
              (t.refreshAll = function () {
                for (var e in r) r[e].refresh();
              }),
              (t.findByElement = function (e) {
                return r[e.waypointContextKey];
              }),
              (window.onload = function () {
                o && o(), t.refreshAll();
              }),
              (i.requestAnimationFrame = function (t) {
                var n =
                  window.requestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  e;
                n.call(window, t);
              }),
              (i.Context = t);
          })(),
          (function () {
            function e(e, t) {
              return e.triggerPoint - t.triggerPoint;
            }
            function t(e, t) {
              return t.triggerPoint - e.triggerPoint;
            }
            function n(e) {
              (this.name = e.name),
                (this.axis = e.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (r[this.axis][this.name] = this);
            }
            var r = { vertical: {}, horizontal: {} },
              i = window.Waypoint;
            (n.prototype.add = function (e) {
              this.waypoints.push(e);
            }),
              (n.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
              }),
              (n.prototype.flushTriggers = function () {
                for (var n in this.triggerQueues) {
                  var r = this.triggerQueues[n],
                    i = "up" === n || "left" === n;
                  r.sort(i ? t : e);
                  for (var o = 0, a = r.length; o < a; o += 1) {
                    var s = r[o];
                    (s.options.continuous || o === r.length - 1) &&
                      s.trigger([n]);
                  }
                }
                this.clearTriggerQueues();
              }),
              (n.prototype.next = function (t) {
                this.waypoints.sort(e);
                var n = i.Adapter.inArray(t, this.waypoints),
                  r = n === this.waypoints.length - 1;
                return r ? null : this.waypoints[n + 1];
              }),
              (n.prototype.previous = function (t) {
                this.waypoints.sort(e);
                var n = i.Adapter.inArray(t, this.waypoints);
                return n ? this.waypoints[n - 1] : null;
              }),
              (n.prototype.queueTrigger = function (e, t) {
                this.triggerQueues[t].push(e);
              }),
              (n.prototype.remove = function (e) {
                var t = i.Adapter.inArray(e, this.waypoints);
                t > -1 && this.waypoints.splice(t, 1);
              }),
              (n.prototype.first = function () {
                return this.waypoints[0];
              }),
              (n.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
              }),
              (n.findOrCreate = function (e) {
                return r[e.axis][e.name] || new n(e);
              }),
              (i.Group = n);
          })(),
          (function () {
            function e(e) {
              this.$element = t(e);
            }
            var t = window.jQuery,
              n = window.Waypoint;
            t.each(
              [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
              ],
              function (t, n) {
                e.prototype[n] = function () {
                  var e = Array.prototype.slice.call(arguments);
                  return this.$element[n].apply(this.$element, e);
                };
              }
            ),
              t.each(["extend", "inArray", "isEmptyObject"], function (n, r) {
                e[r] = t[r];
              }),
              n.adapters.push({ name: "jquery", Adapter: e }),
              (n.Adapter = e);
          })(),
          (function () {
            function e(e) {
              return function () {
                var n = [],
                  r = arguments[0];
                return (
                  e.isFunction(arguments[0]) &&
                    ((r = e.extend({}, arguments[1])),
                    (r.handler = arguments[0])),
                  this.each(function () {
                    var i = e.extend({}, r, { element: this });
                    "string" == typeof i.context &&
                      (i.context = e(this).closest(i.context)[0]),
                      n.push(new t(i));
                  }),
                  n
                );
              };
            }
            var t = window.Waypoint;
            window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
              window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
          })();
      },
      {},
    ],
    13: [
      function (e, t, n) {
        (function (e) {
          "use strict";
          var n =
              "undefined" != typeof window
                ? window
                : "undefined" != typeof WorkerGlobalScope &&
                  self instanceof WorkerGlobalScope
                ? self
                : {},
            r = (function () {
              var e = /\blang(?:uage)?-(\w+)\b/i,
                t = 0,
                r = (n.Prism = {
                  util: {
                    encode: function (e) {
                      return e instanceof i
                        ? new i(e.type, r.util.encode(e.content), e.alias)
                        : "Array" === r.util.type(e)
                        ? e.map(r.util.encode)
                        : e
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                      return Object.prototype.toString
                        .call(e)
                        .match(/\[object (\w+)\]/)[1];
                    },
                    objId: function (e) {
                      return (
                        e.__id ||
                          Object.defineProperty(e, "__id", { value: ++t }),
                        e.__id
                      );
                    },
                    clone: function (e) {
                      var t = r.util.type(e);
                      switch (t) {
                        case "Object":
                          var n = {};
                          for (var i in e)
                            e.hasOwnProperty(i) && (n[i] = r.util.clone(e[i]));
                          return n;
                        case "Array":
                          return (
                            e.map &&
                            e.map(function (e) {
                              return r.util.clone(e);
                            })
                          );
                      }
                      return e;
                    },
                  },
                  languages: {
                    extend: function (e, t) {
                      var n = r.util.clone(r.languages[e]);
                      for (var i in t) n[i] = t[i];
                      return n;
                    },
                    insertBefore: function (e, t, n, i) {
                      i = i || r.languages;
                      var o = i[e];
                      if (2 == arguments.length) {
                        n = arguments[1];
                        for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);
                        return o;
                      }
                      var s = {};
                      for (var l in o)
                        if (o.hasOwnProperty(l)) {
                          if (l == t)
                            for (var a in n)
                              n.hasOwnProperty(a) && (s[a] = n[a]);
                          s[l] = o[l];
                        }
                      return (
                        r.languages.DFS(r.languages, function (t, n) {
                          n === i[e] && t != e && (this[t] = s);
                        }),
                        (i[e] = s)
                      );
                    },
                    DFS: function (e, t, n, i) {
                      i = i || {};
                      for (var o in e)
                        e.hasOwnProperty(o) &&
                          (t.call(e, o, e[o], n || o),
                          "Object" !== r.util.type(e[o]) ||
                          i[r.util.objId(e[o])]
                            ? "Array" !== r.util.type(e[o]) ||
                              i[r.util.objId(e[o])] ||
                              ((i[r.util.objId(e[o])] = !0),
                              r.languages.DFS(e[o], t, o, i))
                            : ((i[r.util.objId(e[o])] = !0),
                              r.languages.DFS(e[o], t, null, i)));
                    },
                  },
                  plugins: {},
                  highlightAll: function (e, t) {
                    var n = {
                      callback: t,
                      selector:
                        'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                    };
                    r.hooks.run("before-highlightall", n);
                    for (
                      var i,
                        o = n.elements || document.querySelectorAll(n.selector),
                        a = 0;
                      (i = o[a++]);

                    )
                      r.highlightElement(i, e === !0, n.callback);
                  },
                  highlightElement: function (t, i, o) {
                    for (var a, s, l = t; l && !e.test(l.className); )
                      l = l.parentNode;
                    l &&
                      ((a = (l.className.match(e) || [, ""])[1].toLowerCase()),
                      (s = r.languages[a])),
                      (t.className =
                        t.className.replace(e, "").replace(/\s+/g, " ") +
                        " language-" +
                        a),
                      (l = t.parentNode),
                      /pre/i.test(l.nodeName) &&
                        (l.className =
                          l.className.replace(e, "").replace(/\s+/g, " ") +
                          " language-" +
                          a);
                    var u = t.textContent,
                      c = { element: t, language: a, grammar: s, code: u };
                    if (
                      (r.hooks.run("before-sanity-check", c),
                      !c.code || !c.grammar)
                    )
                      return (
                        c.code && (c.element.textContent = c.code),
                        void r.hooks.run("complete", c)
                      );
                    if ((r.hooks.run("before-highlight", c), i && n.Worker)) {
                      var d = new Worker(r.filename);
                      (d.onmessage = function (e) {
                        (c.highlightedCode = e.data),
                          r.hooks.run("before-insert", c),
                          (c.element.innerHTML = c.highlightedCode),
                          o && o.call(c.element),
                          r.hooks.run("after-highlight", c),
                          r.hooks.run("complete", c);
                      }),
                        d.postMessage(
                          JSON.stringify({
                            language: c.language,
                            code: c.code,
                            immediateClose: !0,
                          })
                        );
                    } else
                      (c.highlightedCode = r.highlight(
                        c.code,
                        c.grammar,
                        c.language
                      )),
                        r.hooks.run("before-insert", c),
                        (c.element.innerHTML = c.highlightedCode),
                        o && o.call(t),
                        r.hooks.run("after-highlight", c),
                        r.hooks.run("complete", c);
                  },
                  highlight: function (e, t, n) {
                    var o = r.tokenize(e, t);
                    return i.stringify(r.util.encode(o), n);
                  },
                  tokenize: function (e, t) {
                    var n = r.Token,
                      i = [e],
                      o = t.rest;
                    if (o) {
                      for (var a in o) t[a] = o[a];
                      delete t.rest;
                    }
                    e: for (var a in t)
                      if (t.hasOwnProperty(a) && t[a]) {
                        var s = t[a];
                        s = "Array" === r.util.type(s) ? s : [s];
                        for (var l = 0; l < s.length; ++l) {
                          var u = s[l],
                            c = u.inside,
                            d = !!u.lookbehind,
                            f = !!u.greedy,
                            p = 0,
                            h = u.alias;
                          if (f && !u.pattern.global) {
                            var m = u.pattern.toString().match(/[imuy]*$/)[0];
                            u.pattern = RegExp(u.pattern.source, m + "g");
                          }
                          u = u.pattern || u;
                          for (
                            var g = 0, v = 0;
                            g < i.length;
                            v += i[g].length, ++g
                          ) {
                            var y = i[g];
                            if (i.length > e.length) break e;
                            if (!(y instanceof n)) {
                              u.lastIndex = 0;
                              var w = u.exec(y),
                                b = 1;
                              if (!w && f && g != i.length - 1) {
                                if (((u.lastIndex = v), (w = u.exec(e)), !w))
                                  break;
                                for (
                                  var x = w.index + (d ? w[1].length : 0),
                                    C = w.index + w[0].length,
                                    T = g,
                                    k = v,
                                    E = i.length;
                                  E > T && C > k;
                                  ++T
                                )
                                  (k += i[T].length), x >= k && (++g, (v = k));
                                if (i[g] instanceof n || i[T - 1].greedy)
                                  continue;
                                (b = T - g),
                                  (y = e.slice(v, k)),
                                  (w.index -= v);
                              }
                              if (w) {
                                d && (p = w[1].length);
                                var x = w.index + p,
                                  w = w[0].slice(p),
                                  C = x + w.length,
                                  S = y.slice(0, x),
                                  A = y.slice(C),
                                  z = [g, b];
                                S && z.push(S);
                                var _ = new n(
                                  a,
                                  c ? r.tokenize(w, c) : w,
                                  h,
                                  w,
                                  f
                                );
                                z.push(_),
                                  A && z.push(A),
                                  Array.prototype.splice.apply(i, z);
                              }
                            }
                          }
                        }
                      }
                    return i;
                  },
                  hooks: {
                    all: {},
                    add: function (e, t) {
                      var n = r.hooks.all;
                      (n[e] = n[e] || []), n[e].push(t);
                    },
                    run: function (e, t) {
                      var n = r.hooks.all[e];
                      if (n && n.length)
                        for (var i, o = 0; (i = n[o++]); ) i(t);
                    },
                  },
                }),
                i = (r.Token = function (e, t, n, r, i) {
                  (this.type = e),
                    (this.content = t),
                    (this.alias = n),
                    (this.length = 0 | (r || "").length),
                    (this.greedy = !!i);
                });
              if (
                ((i.stringify = function (e, t, n) {
                  if ("string" == typeof e) return e;
                  if ("Array" === r.util.type(e))
                    return e
                      .map(function (n) {
                        return i.stringify(n, t, e);
                      })
                      .join("");
                  var o = {
                    type: e.type,
                    content: i.stringify(e.content, t, n),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: n,
                  };
                  if (
                    ("comment" == o.type && (o.attributes.spellcheck = "true"),
                    e.alias)
                  ) {
                    var a =
                      "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a);
                  }
                  r.hooks.run("wrap", o);
                  var s = Object.keys(o.attributes)
                    .map(function (e) {
                      return (
                        e +
                        '="' +
                        (o.attributes[e] || "").replace(/"/g, "&quot;") +
                        '"'
                      );
                    })
                    .join(" ");
                  return (
                    "<" +
                    o.tag +
                    ' class="' +
                    o.classes.join(" ") +
                    '"' +
                    (s ? " " + s : "") +
                    ">" +
                    o.content +
                    "</" +
                    o.tag +
                    ">"
                  );
                }),
                !n.document)
              )
                return n.addEventListener
                  ? (n.addEventListener(
                      "message",
                      function (e) {
                        var t = JSON.parse(e.data),
                          i = t.language,
                          o = t.code,
                          a = t.immediateClose;
                        n.postMessage(r.highlight(o, r.languages[i], i)),
                          a && n.close();
                      },
                      !1
                    ),
                    n.Prism)
                  : n.Prism;
              var o =
                document.currentScript ||
                [].slice.call(document.getElementsByTagName("script")).pop();
              return (
                o &&
                  ((r.filename = o.src),
                  document.addEventListener &&
                    !o.hasAttribute("data-manual") &&
                    ("loading" !== document.readyState
                      ? window.requestAnimationFrame
                        ? window.requestAnimationFrame(r.highlightAll)
                        : window.setTimeout(r.highlightAll, 16)
                      : document.addEventListener(
                          "DOMContentLoaded",
                          r.highlightAll
                        ))),
                n.Prism
              );
            })();
          "undefined" != typeof t && t.exports && (t.exports = r),
            "undefined" != typeof e && (e.Prism = r),
            (r.languages.markup = {
              comment: /<!--[\w\W]*?-->/,
              prolog: /<\?[\w\W]+?\?>/,
              doctype: /<!DOCTYPE[\w\W]+?>/i,
              cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
              tag: {
                pattern:
                  /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                inside: {
                  tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                  },
                  "attr-value": {
                    pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                    inside: { punctuation: /[=>"']/ },
                  },
                  punctuation: /\/?>/,
                  "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: { namespace: /^[^\s>\/:]+:/ },
                  },
                },
              },
              entity: /&#?[\da-z]{1,8};/i,
            }),
            r.hooks.add("wrap", function (e) {
              "entity" === e.type &&
                (e.attributes.title = e.content.replace(/&amp;/, "&"));
            }),
            (r.languages.xml = r.languages.markup),
            (r.languages.html = r.languages.markup),
            (r.languages.mathml = r.languages.markup),
            (r.languages.svg = r.languages.markup),
            (r.languages.css = {
              comment: /\/\*[\w\W]*?\*\//,
              atrule: {
                pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
                inside: { rule: /@[\w-]+/ },
              },
              url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
              selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
              string: {
                pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              property: /(\b|\B)[\w-]+(?=\s*:)/i,
              important: /\B!important\b/i,
              function: /[-a-z0-9]+(?=\()/i,
              punctuation: /[(){};:]/,
            }),
            (r.languages.css.atrule.inside.rest = r.util.clone(
              r.languages.css
            )),
            r.languages.markup &&
              (r.languages.insertBefore("markup", "tag", {
                style: {
                  pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
                  lookbehind: !0,
                  inside: r.languages.css,
                  alias: "language-css",
                },
              }),
              r.languages.insertBefore(
                "inside",
                "attr-value",
                {
                  "style-attr": {
                    pattern: /\s*style=("|').*?\1/i,
                    inside: {
                      "attr-name": {
                        pattern: /^\s*style/i,
                        inside: r.languages.markup.tag.inside,
                      },
                      punctuation: /^\s*=\s*['"]|['"]\s*$/,
                      "attr-value": { pattern: /.+/i, inside: r.languages.css },
                    },
                    alias: "language-css",
                  },
                },
                r.languages.markup.tag
              )),
            (r.languages.clike = {
              comment: [
                { pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
              ],
              string: {
                pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
              },
              "class-name": {
                pattern:
                  /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
                lookbehind: !0,
                inside: { punctuation: /(\.|\\)/ },
              },
              keyword:
                /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
              boolean: /\b(true|false)\b/,
              function: /[a-z0-9_]+(?=\()/i,
              number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
              operator:
                /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
              punctuation: /[{}[\];(),.:]/,
            }),
            (r.languages.javascript = r.languages.extend("clike", {
              keyword:
                /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
              number:
                /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
              function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
              operator:
                /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/,
            })),
            r.languages.insertBefore("javascript", "keyword", {
              regex: {
                pattern:
                  /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
                lookbehind: !0,
                greedy: !0,
              },
            }),
            r.languages.insertBefore("javascript", "string", {
              "template-string": {
                pattern: /`(?:\\\\|\\?[^\\])*?`/,
                greedy: !0,
                inside: {
                  interpolation: {
                    pattern: /\$\{[^}]+\}/,
                    inside: {
                      "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation",
                      },
                      rest: r.languages.javascript,
                    },
                  },
                  string: /[\s\S]+/,
                },
              },
            }),
            r.languages.markup &&
              r.languages.insertBefore("markup", "tag", {
                script: {
                  pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
                  lookbehind: !0,
                  inside: r.languages.javascript,
                  alias: "language-javascript",
                },
              }),
            (r.languages.js = r.languages.javascript),
            (r.languages.json = {
              property: /"(?:\\.|[^|"])*"(?=\s*:)/gi,
              string: /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
              number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
              punctuation: /[{}[\]);,]/g,
              operator: /:/g,
              boolean: /\b(true|false)\b/gi,
              null: /\bnull\b/gi,
            }),
            (r.languages.jsonp = r.languages.json),
            (r.languages.markdown = r.languages.extend("markup", {})),
            r.languages.insertBefore("markdown", "prolog", {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              code: [
                { pattern: /^(?: {4}|\t).+/m, alias: "keyword" },
                { pattern: /``.+?``|`[^`\n]+`/, alias: "keyword" },
              ],
              title: [
                {
                  pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
                lookbehind: !0,
                inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
              },
              italic: {
                pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
                lookbehind: !0,
                inside: { punctuation: /^[*_]|[*_]$/ },
              },
              url: {
                pattern:
                  /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
                inside: {
                  variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
                },
              },
            }),
            (r.languages.markdown.bold.inside.url = r.util.clone(
              r.languages.markdown.url
            )),
            (r.languages.markdown.italic.inside.url = r.util.clone(
              r.languages.markdown.url
            )),
            (r.languages.markdown.bold.inside.italic = r.util.clone(
              r.languages.markdown.italic
            )),
            (r.languages.markdown.italic.inside.bold = r.util.clone(
              r.languages.markdown.bold
            )),
            (r.languages.php = r.languages.extend("clike", {
              keyword:
                /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
              constant: /\b[A-Z0-9_]{2,}\b/,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
            })),
            r.languages.insertBefore("php", "class-name", {
              "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment",
              },
            }),
            r.languages.insertBefore("php", "keyword", {
              delimiter: /\?>|<\?(?:php)?/i,
              variable: /\$\w+\b/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            r.languages.insertBefore("php", "operator", {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            }),
            r.languages.markup &&
              (r.hooks.add("before-highlight", function (e) {
                "php" === e.language &&
                  ((e.tokenStack = []),
                  (e.backupCode = e.code),
                  (e.code = e.code.replace(
                    /(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,
                    function (t) {
                      return (
                        e.tokenStack.push(t),
                        "{{{PHP" + e.tokenStack.length + "}}}"
                      );
                    }
                  )));
              }),
              r.hooks.add("before-insert", function (e) {
                "php" === e.language &&
                  ((e.code = e.backupCode), delete e.backupCode);
              }),
              r.hooks.add("after-highlight", function (e) {
                if ("php" === e.language) {
                  for (var t, n = 0; (t = e.tokenStack[n]); n++)
                    e.highlightedCode = e.highlightedCode.replace(
                      "{{{PHP" + (n + 1) + "}}}",
                      r.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$")
                    );
                  e.element.innerHTML = e.highlightedCode;
                }
              }),
              r.hooks.add("wrap", function (e) {
                "php" === e.language &&
                  "markup" === e.type &&
                  (e.content = e.content.replace(
                    /(\{\{\{PHP[0-9]+\}\}\})/g,
                    '<span class="token php">$1</span>'
                  ));
              }),
              r.languages.insertBefore("php", "comment", {
                markup: {
                  pattern: /<[^?]\/?(.*?)>/,
                  inside: r.languages.markup,
                },
                php: /\{\{\{PHP[0-9]+\}\}\}/,
              })),
            r.languages.insertBefore("php", "variable", {
              this: /\$this\b/,
              global:
                /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
              scope: {
                pattern: /\b[\w\\]+::/,
                inside: {
                  keyword: /(static|self|parent)/,
                  punctuation: /(::|\\)/,
                },
              },
            }),
            (r.languages.scss = r.languages.extend("css", {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              atrule: {
                pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
                inside: { rule: /@[\w-]+/ },
              },
              url: /(?:[-a-z]+-)*url(?=\()/i,
              selector: {
                pattern:
                  /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
                inside: {
                  parent: { pattern: /&/, alias: "important" },
                  placeholder: /%[-_\w]+/,
                  variable: /\$[-_\w]+|#\{\$[-_\w]+\}/,
                },
              },
            })),
            r.languages.insertBefore("scss", "atrule", {
              keyword: [
                /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
                { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
              ],
            }),
            (r.languages.scss.property = {
              pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
              inside: { variable: /\$[-_\w]+|#\{\$[-_\w]+\}/ },
            }),
            r.languages.insertBefore("scss", "important", {
              variable: /\$[-_\w]+|#\{\$[-_\w]+\}/,
            }),
            r.languages.insertBefore("scss", "function", {
              placeholder: { pattern: /%[-_\w]+/, alias: "selector" },
              statement: {
                pattern: /\B!(?:default|optional)\b/i,
                alias: "keyword",
              },
              boolean: /\b(?:true|false)\b/,
              null: /\bnull\b/,
              operator: {
                pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                lookbehind: !0,
              },
            }),
            (r.languages.scss.atrule.inside.rest = r.util.clone(
              r.languages.scss
            )),
            (r.languages.twig = {
              comment: /\{#[\s\S]*?#\}/,
              tag: {
                pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
                inside: {
                  ld: {
                    pattern: /^(?:\{\{\-?|\{%\-?\s*\w+)/,
                    inside: { punctuation: /^(?:\{\{|\{%)\-?/, keyword: /\w+/ },
                  },
                  rd: {
                    pattern: /\-?(?:%\}|\}\})$/,
                    inside: { punctuation: /.*/ },
                  },
                  string: {
                    pattern: /("|')(?:\\?.)*?\1/,
                    inside: { punctuation: /^['"]|['"]$/ },
                  },
                  keyword: /\b(?:even|if|odd)\b/,
                  boolean: /\b(?:true|false|null)\b/,
                  number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,
                  operator: [
                    {
                      pattern:
                        /(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                      lookbehind: !0,
                    },
                    /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
                  ],
                  property: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
                  punctuation: /[()\[\]{}:.,]/,
                },
              },
              other: {
                pattern: /\S(?:[\s\S]*\S)?/,
                inside: r.languages.markup,
              },
            }),
            !(function () {
              "undefined" != typeof self &&
                self.Prism &&
                self.document &&
                r.hooks.add("complete", function (e) {
                  if (e.code) {
                    var t = e.element.parentNode,
                      n = /\s*\bline-numbers\b\s*/;
                    if (
                      t &&
                      /pre/i.test(t.nodeName) &&
                      (n.test(t.className) || n.test(e.element.className)) &&
                      !e.element.querySelector(".line-numbers-rows")
                    ) {
                      n.test(e.element.className) &&
                        (e.element.className = e.element.className.replace(
                          n,
                          ""
                        )),
                        n.test(t.className) || (t.className += " line-numbers");
                      var r,
                        i = e.code.match(/\n(?!$)/g),
                        o = i ? i.length + 1 : 1,
                        a = new Array(o + 1);
                      (a = a.join("<span></span>")),
                        (r = document.createElement("span")),
                        r.setAttribute("aria-hidden", "true"),
                        (r.className = "line-numbers-rows"),
                        (r.innerHTML = a),
                        t.hasAttribute("data-start") &&
                          (t.style.counterReset =
                            "linenumber " +
                            (parseInt(t.getAttribute("data-start"), 10) - 1)),
                        e.element.appendChild(r);
                    }
                  }
                });
            })(),
            !(function () {
              function e(e) {
                this.defaults = i({}, e);
              }
              function t(e) {
                return e.replace(/-(\w)/g, function (e, t) {
                  return t.toUpperCase();
                });
              }
              function n(e) {
                for (var t = 0, n = 0; n < e.length; ++n)
                  e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
                return e.length + t;
              }
              if ("undefined" != typeof self && self.Prism && self.document) {
                var i =
                  Object.assign ||
                  function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e;
                  };
                (e.prototype = {
                  setDefaults: function (e) {
                    this.defaults = i(this.defaults, e);
                  },
                  normalize: function (e, n) {
                    n = i(this.defaults, n);
                    for (var r in n) {
                      var o = t(r);
                      "normalize" !== r &&
                        "setDefaults" !== o &&
                        n[r] &&
                        this[o] &&
                        (e = this[o].call(this, e, n[r]));
                    }
                    return e;
                  },
                  leftTrim: function (e) {
                    return e.replace(/^\s+/, "");
                  },
                  rightTrim: function (e) {
                    return e.replace(/\s+$/, "");
                  },
                  tabsToSpaces: function (e, t) {
                    return (
                      (t = 0 | t || 4),
                      e.replace(/\t/g, new Array(++t).join(" "))
                    );
                  },
                  spacesToTabs: function (e, t) {
                    return (
                      (t = 0 | t || 4),
                      e.replace(new RegExp(" {" + t + "}", "g"), "\t")
                    );
                  },
                  removeTrailing: function (e) {
                    return e.replace(/\s*?$/gm, "");
                  },
                  removeInitialLineFeed: function (e) {
                    return e.replace(/^(?:\r?\n|\r)/, "");
                  },
                  removeIndent: function (e) {
                    var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                    return t && t[0].length
                      ? (t.sort(function (e, t) {
                          return e.length - t.length;
                        }),
                        t[0].length
                          ? e.replace(new RegExp("^" + t[0], "gm"), "")
                          : e)
                      : e;
                  },
                  indent: function (e, t) {
                    return e.replace(
                      /^[^\S\n\r]*(?=\S)/gm,
                      new Array(++t).join("\t") + "$&"
                    );
                  },
                  breakLines: function (e, t) {
                    t = t === !0 ? 80 : 0 | t || 80;
                    for (var r = e.split("\n"), i = 0; i < r.length; ++i)
                      if (!(n(r[i]) <= t)) {
                        for (
                          var o = r[i].split(/(\s+)/g), a = 0, s = 0;
                          s < o.length;
                          ++s
                        ) {
                          var l = n(o[s]);
                          (a += l), a > t && ((o[s] = "\n" + o[s]), (a = l));
                        }
                        r[i] = o.join("");
                      }
                    return r.join("\n");
                  },
                }),
                  (r.plugins.NormalizeWhitespace = new e({
                    "remove-trailing": !0,
                    "remove-indent": !0,
                    "left-trim": !0,
                    "right-trim": !0,
                  })),
                  r.hooks.add("before-sanity-check", function (e) {
                    var t = e.element.parentNode,
                      n = /\bno-whitespace-normalization\b/;
                    if (
                      !(
                        !e.code ||
                        !t ||
                        "pre" !== t.nodeName.toLowerCase() ||
                        (e.settings &&
                          e.settings["whitespace-normalization"] === !1) ||
                        n.test(t.className) ||
                        n.test(e.element.className)
                      )
                    ) {
                      for (
                        var i = t.childNodes,
                          o = "",
                          a = "",
                          s = !1,
                          l = r.plugins.NormalizeWhitespace,
                          u = 0;
                        u < i.length;
                        ++u
                      ) {
                        var c = i[u];
                        c == e.element
                          ? (s = !0)
                          : "#text" === c.nodeName &&
                            (s ? (a += c.nodeValue) : (o += c.nodeValue),
                            t.removeChild(c),
                            --u);
                      }
                      if (e.element.children.length && r.plugins.KeepMarkup) {
                        var d = o + e.element.innerHTML + a;
                        (e.element.innerHTML = l.normalize(d, e.settings)),
                          (e.code = e.element.textContent);
                      } else
                        (e.code = o + e.code + a),
                          (e.code = l.normalize(e.code, e.settings));
                    }
                  });
              }
            })(),
            console.log("PRISMJS");
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    14: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = e("jquery"),
          o = r(i),
          a = e("animejs"),
          s = r(a),
          l = e("macy"),
          u = r(l),
          c = e("./vendor/jquery.waypoints"),
          d =
            (r(c),
            (0, o["default"])(".js_waypointTrigger").has(
              ".js_waypointElement"
            ));
        (0, o["default"])(d).waypoint({
          handler: function (e) {
            if ("down" === e)
              for (
                var t = function (e, t) {
                    (0, s["default"])({
                      targets: e,
                      translateY: ["100", "0"],
                      duration: 750,
                      opacity: [0, 1],
                      delay: t,
                      easing: "easeOutBack",
                      begin: function () {
                        e.classList.add("is_animated"),
                          e.classList.contains("instagramFeed__item") &&
                            u["default"].recalculate();
                      },
                    });
                  },
                  n = this.element.querySelectorAll(".js_waypointElement"),
                  r = 0;
                r < n.length;
                r++
              ) {
                var i = n[r],
                  o = 80 * r;
                i.classList.contains("is_anime") ||
                  (i.classList.contains("fadeInUp") &&
                    (t(i, o), i.classList.add("is_anime")));
              }
          },
          offset: "90%",
        });
      },
      { "./vendor/jquery.waypoints": 12, animejs: 16, jquery: 18, macy: 22 },
    ],
    15: [
      function (e, t, n) {
        "use strict";
        var r = function () {
          var e = document.querySelector(".js_buzzwordsTrigger");
          e && e.classList.add("is-ready");
          var t = Array.from(document.querySelectorAll(".js_lineTrigger"));
          t &&
            t.forEach(function (e, t) {
              var n = 200 * (t + 1);
              setTimeout(function () {
                e.classList.add("is-ready");
              }, 1e3 + n);
            });
          var n = Array.from(document.querySelectorAll(".js_charTrigger"));
          n &&
            n.forEach(function (e) {
              e.addEventListener(
                "mouseover",
                function () {
                  this.classList.add("jumpingLetter");
                },
                !1
              ),
                e.addEventListener(
                  "animationend",
                  function () {
                    this.classList.remove("jumpingLetter");
                  },
                  !1
                );
            });
        };
        r();
      },
      {},
    ],
    16: [
      function (e, t, n) {
        !(function (e, n) {
          "function" == typeof define && define.amd
            ? define([], n)
            : "object" == typeof t && t.exports
            ? (t.exports = n())
            : (e.anime = n());
        })(this, function () {
          var e,
            t = "1.1.3",
            n = {
              duration: 1e3,
              delay: 0,
              loop: !1,
              autoplay: !0,
              direction: "normal",
              easing: "easeOutElastic",
              elasticity: 400,
              round: !1,
              begin: void 0,
              update: void 0,
              complete: void 0,
            },
            r = [
              "translateX",
              "translateY",
              "translateZ",
              "rotate",
              "rotateX",
              "rotateY",
              "rotateZ",
              "scale",
              "scaleX",
              "scaleY",
              "scaleZ",
              "skewX",
              "skewY",
            ],
            i = "transform",
            o = {
              arr: function (e) {
                return Array.isArray(e);
              },
              obj: function (e) {
                return Object.prototype.toString.call(e).indexOf("Object") > -1;
              },
              svg: function (e) {
                return e instanceof SVGElement;
              },
              dom: function (e) {
                return e.nodeType || o.svg(e);
              },
              num: function (e) {
                return !isNaN(parseInt(e));
              },
              str: function (e) {
                return "string" == typeof e;
              },
              fnc: function (e) {
                return "function" == typeof e;
              },
              und: function (e) {
                return "undefined" == typeof e;
              },
              nul: function (e) {
                return "null" == typeof e;
              },
              hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
              },
              rgb: function (e) {
                return /^rgb/.test(e);
              },
              hsl: function (e) {
                return /^hsl/.test(e);
              },
              col: function (e) {
                return o.hex(e) || o.rgb(e) || o.hsl(e);
              },
            },
            a = (function () {
              var e = {},
                t = ["Quad", "Cubic", "Quart", "Quint", "Expo"],
                n = {
                  Sine: function (e) {
                    return 1 + Math.sin((Math.PI / 2) * e - Math.PI / 2);
                  },
                  Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e);
                  },
                  Elastic: function (e, t) {
                    if (0 === e || 1 === e) return e;
                    var n = 1 - Math.min(t, 998) / 1e3,
                      r = e / 1,
                      i = r - 1,
                      o = (n / (2 * Math.PI)) * Math.asin(1);
                    return -(
                      Math.pow(2, 10 * i) *
                      Math.sin(((i - o) * (2 * Math.PI)) / n)
                    );
                  },
                  Back: function (e) {
                    return e * e * (3 * e - 2);
                  },
                  Bounce: function (e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                    return (
                      1 / Math.pow(4, 3 - n) -
                      7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    );
                  },
                };
              return (
                t.forEach(function (e, t) {
                  n[e] = function (e) {
                    return Math.pow(e, t + 2);
                  };
                }),
                Object.keys(n).forEach(function (t) {
                  var r = n[t];
                  (e["easeIn" + t] = r),
                    (e["easeOut" + t] = function (e, t) {
                      return 1 - r(1 - e, t);
                    }),
                    (e["easeInOut" + t] = function (e, t) {
                      return e < 0.5
                        ? r(2 * e, t) / 2
                        : 1 - r(e * -2 + 2, t) / 2;
                    }),
                    (e["easeOutIn" + t] = function (e, t) {
                      return e < 0.5
                        ? (1 - r(1 - 2 * e, t)) / 2
                        : (r(2 * e - 1, t) + 1) / 2;
                    });
                }),
                (e.linear = function (e) {
                  return e;
                }),
                e
              );
            })(),
            s = function (e) {
              return o.str(e) ? e : e + "";
            },
            l = function (e) {
              return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            },
            u = function (e) {
              if (o.col(e)) return !1;
              try {
                var t = document.querySelectorAll(e);
                return t;
              } catch (n) {
                return !1;
              }
            },
            c = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            },
            d = function (e) {
              return e.reduce(function (e, t) {
                return e.concat(o.arr(t) ? d(t) : t);
              }, []);
            },
            f = function (e) {
              return o.arr(e)
                ? e
                : (o.str(e) && (e = u(e) || e),
                  e instanceof NodeList || e instanceof HTMLCollection
                    ? [].slice.call(e)
                    : [e]);
            },
            p = function (e, t) {
              return e.some(function (e) {
                return e === t;
              });
            },
            h = function (e, t) {
              var n = {};
              return (
                e.forEach(function (e) {
                  var r = JSON.stringify(
                    t.map(function (t) {
                      return e[t];
                    })
                  );
                  (n[r] = n[r] || []), n[r].push(e);
                }),
                Object.keys(n).map(function (e) {
                  return n[e];
                })
              );
            },
            m = function (e) {
              return e.filter(function (e, t, n) {
                return n.indexOf(e) === t;
              });
            },
            g = function (e) {
              var t = {};
              for (var n in e) t[n] = e[n];
              return t;
            },
            v = function (e, t) {
              for (var n in t) e[n] = o.und(e[n]) ? t[n] : e[n];
              return e;
            },
            y = function (e) {
              var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                e = e.replace(t, function (e, t, n, r) {
                  return t + t + n + n + r + r;
                }),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
                r = parseInt(n[1], 16),
                i = parseInt(n[2], 16),
                o = parseInt(n[3], 16);
              return "rgb(" + r + "," + i + "," + o + ")";
            },
            w = function (e) {
              var t,
                n,
                r,
                e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e),
                i = parseInt(e[1]) / 360,
                o = parseInt(e[2]) / 100,
                a = parseInt(e[3]) / 100,
                s = function (e, t, n) {
                  return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? e + 6 * (t - e) * n
                      : n < 0.5
                      ? t
                      : n < 2 / 3
                      ? e + (t - e) * (2 / 3 - n) * 6
                      : e
                  );
                };
              if (0 == o) t = n = r = a;
              else {
                var l = a < 0.5 ? a * (1 + o) : a + o - a * o,
                  u = 2 * a - l;
                (t = s(u, l, i + 1 / 3)),
                  (n = s(u, l, i)),
                  (r = s(u, l, i - 1 / 3));
              }
              return "rgb(" + 255 * t + "," + 255 * n + "," + 255 * r + ")";
            },
            b = function (e) {
              return o.rgb(e) ? e : o.hex(e) ? y(e) : o.hsl(e) ? w(e) : void 0;
            },
            x = function (e) {
              return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(
                e
              )[2];
            },
            C = function (e, t, n) {
              return x(t)
                ? t
                : e.indexOf("translate") > -1
                ? x(n)
                  ? t + x(n)
                  : t + "px"
                : e.indexOf("rotate") > -1 || e.indexOf("skew") > -1
                ? t + "deg"
                : t;
            },
            T = function (e, t) {
              if (t in e.style)
                return getComputedStyle(e).getPropertyValue(l(t)) || "0";
            },
            k = function (e, t) {
              var n = t.indexOf("scale") > -1 ? 1 : 0,
                r = e.style.transform;
              if (!r) return n;
              for (
                var i = /(\w+)\((.+?)\)/g, o = [], a = [], s = [];
                (o = i.exec(r));

              )
                a.push(o[1]), s.push(o[2]);
              var l = s.filter(function (e, n) {
                return a[n] === t;
              });
              return l.length ? l[0] : n;
            },
            E = function (e, t) {
              return o.dom(e) && p(r, t)
                ? "transform"
                : o.dom(e) && (e.getAttribute(t) || (o.svg(e) && e[t]))
                ? "attribute"
                : o.dom(e) && "transform" !== t && T(e, t)
                ? "css"
                : o.nul(e[t]) || o.und(e[t])
                ? void 0
                : "object";
            },
            S = function (e, t) {
              switch (E(e, t)) {
                case "transform":
                  return k(e, t);
                case "css":
                  return T(e, t);
                case "attribute":
                  return e.getAttribute(t);
              }
              return e[t] || 0;
            },
            A = function (e, t, n) {
              if (o.col(t)) return b(t);
              if (x(t)) return t;
              var r = x(x(e.to) ? e.to : e.from);
              return !r && n && (r = x(n)), r ? t + r : t;
            },
            z = function (e) {
              var t = /-?\d*\.?\d+/g;
              return {
                original: e,
                numbers: s(e).match(t) ? s(e).match(t).map(Number) : [0],
                strings: s(e).split(t),
              };
            },
            _ = function (e, t, n) {
              return t.reduce(function (t, r, i) {
                var r = r ? r : n[i - 1];
                return t + e[i - 1] + r;
              });
            },
            N = function (e) {
              var e = e ? d(o.arr(e) ? e.map(f) : f(e)) : [];
              return e.map(function (e, t) {
                return { target: e, id: t };
              });
            },
            D = function (e, t) {
              var r = [];
              for (var i in e)
                if (!n.hasOwnProperty(i) && "targets" !== i) {
                  var a = o.obj(e[i]) ? g(e[i]) : { value: e[i] };
                  (a.name = i), r.push(v(a, t));
                }
              return r;
            },
            I = function (e, t, n, r) {
              var i = f(o.fnc(n) ? n(e, r) : n);
              return {
                from: i.length > 1 ? i[0] : S(e, t),
                to: i.length > 1 ? i[1] : i[0],
              };
            },
            L = function (e, t, n, r) {
              var i = {};
              if ("transform" === n)
                (i.from = e + "(" + C(e, t.from, t.to) + ")"),
                  (i.to = e + "(" + C(e, t.to) + ")");
              else {
                var o = "css" === n ? T(r, e) : void 0;
                (i.from = A(t, t.from, o)), (i.to = A(t, t.to, o));
              }
              return { from: z(i.from), to: z(i.to) };
            },
            O = function (e, t) {
              var n = [];
              return (
                e.forEach(function (r, i) {
                  var a = r.target;
                  return t.forEach(function (t) {
                    var s = E(a, t.name);
                    if (s) {
                      var l = I(a, t.name, t.value, i),
                        u = g(t);
                      (u.animatables = r),
                        (u.type = s),
                        (u.from = L(t.name, l, u.type, a).from),
                        (u.to = L(t.name, l, u.type, a).to),
                        (u.round = o.col(l.from) || u.round ? 1 : 0),
                        (u.delay =
                          (o.fnc(u.delay) ? u.delay(a, i, e.length) : u.delay) /
                          Y.speed),
                        (u.duration =
                          (o.fnc(u.duration)
                            ? u.duration(a, i, e.length)
                            : u.duration) / Y.speed),
                        n.push(u);
                    }
                  });
                }),
                n
              );
            },
            M = function (e, t) {
              var n = O(e, t),
                r = h(n, ["name", "from", "to", "delay", "duration"]);
              return r.map(function (e) {
                var t = g(e[0]);
                return (
                  (t.animatables = e.map(function (e) {
                    return e.animatables;
                  })),
                  (t.totalDuration = t.delay + t.duration),
                  t
                );
              });
            },
            j = function (e, t) {
              e.tweens.forEach(function (n) {
                var r = n.to,
                  i = n.from,
                  o = e.duration - (n.delay + n.duration);
                (n.from = r), (n.to = i), t && (n.delay = o);
              }),
                (e.reversed = !e.reversed);
            },
            F = function (e) {
              return Math.max.apply(
                Math,
                e.map(function (e) {
                  return e.totalDuration;
                })
              );
            },
            P = function (e) {
              return Math.min.apply(
                Math,
                e.map(function (e) {
                  return e.delay;
                })
              );
            },
            R = function (e) {
              var t = [],
                n = [];
              return (
                e.tweens.forEach(function (e) {
                  ("css" !== e.type && "transform" !== e.type) ||
                    (t.push("css" === e.type ? l(e.name) : "transform"),
                    e.animatables.forEach(function (e) {
                      n.push(e.target);
                    }));
                }),
                { properties: m(t).join(", "), elements: m(n) }
              );
            },
            q = function (e) {
              var t = R(e);
              t.elements.forEach(function (e) {
                e.style.willChange = t.properties;
              });
            },
            H = function (e) {
              var t = R(e);
              t.elements.forEach(function (e) {
                e.style.removeProperty("will-change");
              });
            },
            W = function (e) {
              var t = o.str(e) ? u(e)[0] : e;
              return { path: t, value: t.getTotalLength() };
            },
            $ = function (e, t) {
              var n = e.path,
                r = e.value * t,
                i = function (i) {
                  var o = i || 0,
                    a = t > 1 ? e.value + o : r + o;
                  return n.getPointAtLength(a);
                },
                o = i(),
                a = i(-1),
                s = i(1);
              switch (e.name) {
                case "translateX":
                  return o.x;
                case "translateY":
                  return o.y;
                case "rotate":
                  return (180 * Math.atan2(s.y - a.y, s.x - a.x)) / Math.PI;
              }
            },
            B = function (e, t) {
              var n = Math.min(Math.max(t - e.delay, 0), e.duration),
                r = n / e.duration,
                i = e.to.numbers.map(function (t, n) {
                  var i = e.from.numbers[n],
                    o = a[e.easing](r, e.elasticity),
                    s = e.path ? $(e, o) : i + o * (t - i);
                  return (s = e.round ? Math.round(s * e.round) / e.round : s);
                });
              return _(i, e.to.strings, e.from.strings);
            },
            Z = function (t, n) {
              var r;
              (t.currentTime = n), (t.progress = (n / t.duration) * 100);
              for (var o = 0; o < t.tweens.length; o++) {
                var a = t.tweens[o];
                a.currentValue = B(a, n);
                for (
                  var s = a.currentValue, l = 0;
                  l < a.animatables.length;
                  l++
                ) {
                  var u = a.animatables[l],
                    c = u.id,
                    d = u.target,
                    f = a.name;
                  switch (a.type) {
                    case "css":
                      d.style[f] = s;
                      break;
                    case "attribute":
                      d.setAttribute(f, s);
                      break;
                    case "object":
                      d[f] = s;
                      break;
                    case "transform":
                      r || (r = {}), r[c] || (r[c] = []), r[c].push(s);
                  }
                }
              }
              if (r) {
                e || (e = (T(document.body, i) ? "" : "-webkit-") + i);
                for (var o in r)
                  t.animatables[o].target.style[e] = r[o].join(" ");
              }
            },
            U = function (e) {
              var t = {};
              return (
                (t.animatables = N(e.targets)),
                (t.settings = v(e, n)),
                (t.properties = D(e, t.settings)),
                (t.tweens = M(t.animatables, t.properties)),
                (t.duration = t.tweens.length ? F(t.tweens) : e.duration),
                (t.delay = t.tweens.length ? P(t.tweens) : e.delay),
                (t.currentTime = 0),
                (t.progress = 0),
                (t.ended = !1),
                t
              );
            },
            K = [],
            X = 0,
            V = (function () {
              var e = function () {
                  X = requestAnimationFrame(t);
                },
                t = function (t) {
                  if (K.length) {
                    for (var n = 0; n < K.length; n++) K[n].tick(t);
                    e();
                  } else cancelAnimationFrame(X), (X = 0);
                };
              return e;
            })(),
            Y = function (e) {
              var t = U(e),
                n = {};
              return (
                (t.tick = function (e) {
                  (t.ended = !1),
                    n.start || (n.start = e),
                    (n.current = Math.min(
                      Math.max(n.last + e - n.start, 0),
                      t.duration
                    )),
                    Z(t, n.current);
                  var r = t.settings;
                  n.current >= t.delay &&
                    (r.begin && r.begin(t),
                    (r.begin = void 0),
                    r.update && r.update(t)),
                    n.current >= t.duration &&
                      (r.loop
                        ? ((n.start = e),
                          "alternate" === r.direction && j(t, !0),
                          o.num(r.loop) && r.loop--)
                        : ((t.ended = !0),
                          t.pause(),
                          r.complete && r.complete(t)),
                      (n.last = 0));
                }),
                (t.seek = function (e) {
                  Z(t, (e / 100) * t.duration);
                }),
                (t.pause = function () {
                  H(t);
                  var e = K.indexOf(t);
                  e > -1 && K.splice(e, 1);
                }),
                (t.play = function (e) {
                  t.pause(),
                    e && (t = v(U(v(e, t.settings)), t)),
                    (n.start = 0),
                    (n.last = t.ended ? 0 : t.currentTime);
                  var r = t.settings;
                  "reverse" === r.direction && j(t),
                    "alternate" !== r.direction || r.loop || (r.loop = 1),
                    q(t),
                    K.push(t),
                    X || V();
                }),
                (t.restart = function () {
                  t.reversed && j(t), t.pause(), t.seek(0), t.play();
                }),
                t.settings.autoplay && t.play(),
                t
              );
            },
            G = function (e) {
              for (
                var t = d(o.arr(e) ? e.map(f) : f(e)), n = K.length - 1;
                n >= 0;
                n--
              )
                for (var r = K[n], i = r.tweens, a = i.length - 1; a >= 0; a--)
                  for (var s = i[a].animatables, l = s.length - 1; l >= 0; l--)
                    p(t, s[l].target) &&
                      (s.splice(l, 1),
                      s.length || i.splice(a, 1),
                      i.length || r.pause());
            };
          return (
            (Y.version = t),
            (Y.speed = 1),
            (Y.list = K),
            (Y.remove = G),
            (Y.easings = a),
            (Y.getValue = S),
            (Y.path = W),
            (Y.random = c),
            Y
          );
        });
      },
      {},
    ],
    17: [
      function (e, t, n) {
        !(function () {
          function e(e, t) {
            document.addEventListener
              ? e.addEventListener("scroll", t, !1)
              : e.attachEvent("scroll", t);
          }
          function n(e) {
            document.body
              ? e()
              : document.addEventListener
              ? document.addEventListener("DOMContentLoaded", function t() {
                  document.removeEventListener("DOMContentLoaded", t), e();
                })
              : document.attachEvent("onreadystatechange", function n() {
                  ("interactive" != document.readyState &&
                    "complete" != document.readyState) ||
                    (document.detachEvent("onreadystatechange", n), e());
                });
          }
          function r(e) {
            (this.a = document.createElement("div")),
              this.a.setAttribute("aria-hidden", "true"),
              this.a.appendChild(document.createTextNode(e)),
              (this.b = document.createElement("span")),
              (this.c = document.createElement("span")),
              (this.h = document.createElement("span")),
              (this.f = document.createElement("span")),
              (this.g = -1),
              (this.b.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.c.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.f.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
              (this.h.style.cssText =
                "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
              this.b.appendChild(this.h),
              this.c.appendChild(this.f),
              this.a.appendChild(this.b),
              this.a.appendChild(this.c);
          }
          function i(e, t) {
            e.a.style.cssText =
              "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
              t +
              ";";
          }
          function o(e) {
            var t = e.a.offsetWidth,
              n = t + 100;
            return (
              (e.f.style.width = n + "px"),
              (e.c.scrollLeft = n),
              (e.b.scrollLeft = e.b.scrollWidth + 100),
              e.g !== t && ((e.g = t), !0)
            );
          }
          function a(t, n) {
            function r() {
              var e = i;
              o(e) && e.a.parentNode && n(e.g);
            }
            var i = t;
            e(t.b, r), e(t.c, r), o(t);
          }
          function s(e, t) {
            var n = t || {};
            (this.family = e),
              (this.style = n.style || "normal"),
              (this.weight = n.weight || "normal"),
              (this.stretch = n.stretch || "normal");
          }
          function l() {
            if (null === p)
              if (u() && /Apple/.test(window.navigator.vendor)) {
                var e =
                  /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  );
                p = !!e && 603 > parseInt(e[1], 10);
              } else p = !1;
            return p;
          }
          function u() {
            return null === m && (m = !!document.fonts), m;
          }
          function c() {
            if (null === h) {
              var e = document.createElement("div");
              try {
                e.style.font = "condensed 100px sans-serif";
              } catch (t) {}
              h = "" !== e.style.font;
            }
            return h;
          }
          function d(e, t) {
            return [e.style, e.weight, c() ? e.stretch : "", "100px", t].join(
              " "
            );
          }
          var f = null,
            p = null,
            h = null,
            m = null;
          (s.prototype.load = function (e, t) {
            var o = this,
              s = e || "BESbswy",
              c = 0,
              p = t || 3e3,
              h = new Date().getTime();
            return new Promise(function (e, t) {
              if (u() && !l()) {
                var m = new Promise(function (e, t) {
                    function n() {
                      new Date().getTime() - h >= p
                        ? t(Error("" + p + "ms timeout exceeded"))
                        : document.fonts
                            .load(d(o, '"' + o.family + '"'), s)
                            .then(function (t) {
                              1 <= t.length ? e() : setTimeout(n, 25);
                            }, t);
                    }
                    n();
                  }),
                  g = new Promise(function (e, t) {
                    c = setTimeout(function () {
                      t(Error("" + p + "ms timeout exceeded"));
                    }, p);
                  });
                Promise.race([g, m]).then(function () {
                  clearTimeout(c), e(o);
                }, t);
              } else
                n(function () {
                  function n() {
                    var t;
                    (t =
                      (-1 != v && -1 != y) ||
                      (-1 != v && -1 != w) ||
                      (-1 != y && -1 != w)) &&
                      ((t = v != y && v != w && y != w) ||
                        (null === f &&
                          ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                            window.navigator.userAgent
                          )),
                          (f =
                            !!t &&
                            (536 > parseInt(t[1], 10) ||
                              (536 === parseInt(t[1], 10) &&
                                11 >= parseInt(t[2], 10))))),
                        (t =
                          f &&
                          ((v == b && y == b && w == b) ||
                            (v == x && y == x && w == x) ||
                            (v == C && y == C && w == C)))),
                      (t = !t)),
                      t &&
                        (T.parentNode && T.parentNode.removeChild(T),
                        clearTimeout(c),
                        e(o));
                  }
                  function l() {
                    if (new Date().getTime() - h >= p)
                      T.parentNode && T.parentNode.removeChild(T),
                        t(Error("" + p + "ms timeout exceeded"));
                    else {
                      var e = document.hidden;
                      (!0 !== e && void 0 !== e) ||
                        ((v = u.a.offsetWidth),
                        (y = m.a.offsetWidth),
                        (w = g.a.offsetWidth),
                        n()),
                        (c = setTimeout(l, 50));
                    }
                  }
                  var u = new r(s),
                    m = new r(s),
                    g = new r(s),
                    v = -1,
                    y = -1,
                    w = -1,
                    b = -1,
                    x = -1,
                    C = -1,
                    T = document.createElement("div");
                  (T.dir = "ltr"),
                    i(u, d(o, "sans-serif")),
                    i(m, d(o, "serif")),
                    i(g, d(o, "monospace")),
                    T.appendChild(u.a),
                    T.appendChild(m.a),
                    T.appendChild(g.a),
                    document.body.appendChild(T),
                    (b = u.a.offsetWidth),
                    (x = m.a.offsetWidth),
                    (C = g.a.offsetWidth),
                    l(),
                    a(u, function (e) {
                      (v = e), n();
                    }),
                    i(u, d(o, '"' + o.family + '",sans-serif')),
                    a(m, function (e) {
                      (y = e), n();
                    }),
                    i(m, d(o, '"' + o.family + '",serif')),
                    a(g, function (e) {
                      (w = e), n();
                    }),
                    i(g, d(o, '"' + o.family + '",monospace'));
                });
            });
          }),
            "object" == typeof t
              ? (t.exports = s)
              : ((window.FontFaceObserver = s),
                (window.FontFaceObserver.prototype.load = s.prototype.load));
        })();
      },
      {},
    ],
    18: [
      function (e, t, n) {
        (function (e) {
          (function (e, t, n, r, i) {
            !(function (t, n) {
              "object" == typeof e && "object" == typeof e.exports
                ? (e.exports = t.document
                    ? n(t, !0)
                    : function (e) {
                        if (!e.document)
                          throw new Error(
                            "jQuery requires a window with a document"
                          );
                        return n(e);
                      })
                : n(t);
            })("undefined" != typeof window ? window : this, function (e, t) {
              function n(e) {
                var t = !!e && "length" in e && e.length,
                  n = ae.type(e);
                return (
                  "function" !== n &&
                  !ae.isWindow(e) &&
                  ("array" === n ||
                    0 === t ||
                    ("number" == typeof t && t > 0 && t - 1 in e))
                );
              }
              function i(e, t, n) {
                if (ae.isFunction(t))
                  return ae.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n;
                  });
                if (t.nodeType)
                  return ae.grep(e, function (e) {
                    return (e === t) !== n;
                  });
                if ("string" == typeof t) {
                  if (ge.test(t)) return ae.filter(t, e, n);
                  t = ae.filter(t, e);
                }
                return ae.grep(e, function (e) {
                  return ee.call(t, e) > -1 !== n;
                });
              }
              function o(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
              }
              function a(e) {
                var t = {};
                return (
                  ae.each(e.match(Ce) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              }
              function s() {
                Y.removeEventListener("DOMContentLoaded", s),
                  e.removeEventListener("load", s),
                  ae.ready();
              }
              function l() {
                this.expando = ae.expando + l.uid++;
              }
              function u(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                  if (
                    ((r = "data-" + t.replace(_e, "-$&").toLowerCase()),
                    (n = e.getAttribute(r)),
                    "string" == typeof n)
                  ) {
                    try {
                      n =
                        "true" === n ||
                        ("false" !== n &&
                          ("null" === n
                            ? null
                            : +n + "" === n
                            ? +n
                            : ze.test(n)
                            ? ae.parseJSON(n)
                            : n));
                    } catch (i) {}
                    Ae.set(e, t, n);
                  } else n = void 0;
                return n;
              }
              function c(e, t, n, r) {
                var i,
                  o = 1,
                  a = 20,
                  s = r
                    ? function () {
                        return r.cur();
                      }
                    : function () {
                        return ae.css(e, t, "");
                      },
                  l = s(),
                  u = (n && n[3]) || (ae.cssNumber[t] ? "" : "px"),
                  c =
                    (ae.cssNumber[t] || ("px" !== u && +l)) &&
                    De.exec(ae.css(e, t));
                if (c && c[3] !== u) {
                  (u = u || c[3]), (n = n || []), (c = +l || 1);
                  do (o = o || ".5"), (c /= o), ae.style(e, t, c + u);
                  while (o !== (o = s() / l) && 1 !== o && --a);
                }
                return (
                  n &&
                    ((c = +c || +l || 0),
                    (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                    r && ((r.unit = u), (r.start = c), (r.end = i))),
                  i
                );
              }
              function d(e, t) {
                var n =
                  "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : [];
                return void 0 === t || (t && ae.nodeName(e, t))
                  ? ae.merge([e], n)
                  : n;
              }
              function f(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"));
              }
              function p(e, t, n, r, i) {
                for (
                  var o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p = t.createDocumentFragment(),
                    h = [],
                    m = 0,
                    g = e.length;
                  m < g;
                  m++
                )
                  if (((o = e[m]), o || 0 === o))
                    if ("object" === ae.type(o))
                      ae.merge(h, o.nodeType ? [o] : o);
                    else if (Pe.test(o)) {
                      for (
                        a = a || p.appendChild(t.createElement("div")),
                          s = (Me.exec(o) || ["", ""])[1].toLowerCase(),
                          l = Fe[s] || Fe._default,
                          a.innerHTML = l[1] + ae.htmlPrefilter(o) + l[2],
                          c = l[0];
                        c--;

                      )
                        a = a.lastChild;
                      ae.merge(h, a.childNodes),
                        (a = p.firstChild),
                        (a.textContent = "");
                    } else h.push(t.createTextNode(o));
                for (p.textContent = "", m = 0; (o = h[m++]); )
                  if (r && ae.inArray(o, r) > -1) i && i.push(o);
                  else if (
                    ((u = ae.contains(o.ownerDocument, o)),
                    (a = d(p.appendChild(o), "script")),
                    u && f(a),
                    n)
                  )
                    for (c = 0; (o = a[c++]); )
                      je.test(o.type || "") && n.push(o);
                return p;
              }
              function h() {
                return !0;
              }
              function m() {
                return !1;
              }
              function g() {
                try {
                  return Y.activeElement;
                } catch (e) {}
              }
              function v(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                  "string" != typeof n && ((r = r || n), (n = void 0));
                  for (s in t) v(e, s, n, r, t[s], o);
                  return e;
                }
                if (
                  (null == r && null == i
                    ? ((i = n), (r = n = void 0))
                    : null == i &&
                      ("string" == typeof n
                        ? ((i = r), (r = void 0))
                        : ((i = r), (r = n), (n = void 0))),
                  i === !1)
                )
                  i = m;
                else if (!i) return e;
                return (
                  1 === o &&
                    ((a = i),
                    (i = function (e) {
                      return ae().off(e), a.apply(this, arguments);
                    }),
                    (i.guid = a.guid || (a.guid = ae.guid++))),
                  e.each(function () {
                    ae.event.add(this, t, i, r, n);
                  })
                );
              }
              function y(e, t) {
                return ae.nodeName(e, "table") &&
                  ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
                  ? e.getElementsByTagName("tbody")[0] ||
                      e.appendChild(e.ownerDocument.createElement("tbody"))
                  : e;
              }
              function w(e) {
                return (
                  (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
                );
              }
              function b(e) {
                var t = Ze.exec(e.type);
                return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
              }
              function x(e, t) {
                var n, r, i, o, a, s, l, u;
                if (1 === t.nodeType) {
                  if (
                    Se.hasData(e) &&
                    ((o = Se.access(e)), (a = Se.set(t, o)), (u = o.events))
                  ) {
                    delete a.handle, (a.events = {});
                    for (i in u)
                      for (n = 0, r = u[i].length; n < r; n++)
                        ae.event.add(t, i, u[i][n]);
                  }
                  Ae.hasData(e) &&
                    ((s = Ae.access(e)), (l = ae.extend({}, s)), Ae.set(t, l));
                }
              }
              function C(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Oe.test(e.type)
                  ? (t.checked = e.checked)
                  : ("input" !== n && "textarea" !== n) ||
                    (t.defaultValue = e.defaultValue);
              }
              function T(e, t, n, r) {
                t = Q.apply([], t);
                var i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = 0,
                  f = e.length,
                  h = f - 1,
                  m = t[0],
                  g = ae.isFunction(m);
                if (
                  g ||
                  (f > 1 &&
                    "string" == typeof m &&
                    !ie.checkClone &&
                    Be.test(m))
                )
                  return e.each(function (i) {
                    var o = e.eq(i);
                    g && (t[0] = m.call(this, i, o.html())), T(o, t, n, r);
                  });
                if (
                  f &&
                  ((i = p(t, e[0].ownerDocument, !1, e, r)),
                  (o = i.firstChild),
                  1 === i.childNodes.length && (i = o),
                  o || r)
                ) {
                  for (a = ae.map(d(i, "script"), w), s = a.length; c < f; c++)
                    (l = i),
                      c !== h &&
                        ((l = ae.clone(l, !0, !0)),
                        s && ae.merge(a, d(l, "script"))),
                      n.call(e[c], l, c);
                  if (s)
                    for (
                      u = a[a.length - 1].ownerDocument, ae.map(a, b), c = 0;
                      c < s;
                      c++
                    )
                      (l = a[c]),
                        je.test(l.type || "") &&
                          !Se.access(l, "globalEval") &&
                          ae.contains(u, l) &&
                          (l.src
                            ? ae._evalUrl && ae._evalUrl(l.src)
                            : ae.globalEval(l.textContent.replace(Ue, "")));
                }
                return e;
              }
              function k(e, t, n) {
                for (
                  var r, i = t ? ae.filter(t, e) : e, o = 0;
                  null != (r = i[o]);
                  o++
                )
                  n || 1 !== r.nodeType || ae.cleanData(d(r)),
                    r.parentNode &&
                      (n &&
                        ae.contains(r.ownerDocument, r) &&
                        f(d(r, "script")),
                      r.parentNode.removeChild(r));
                return e;
              }
              function E(e, t) {
                var n = ae(t.createElement(e)).appendTo(t.body),
                  r = ae.css(n[0], "display");
                return n.detach(), r;
              }
              function S(e) {
                var t = Y,
                  n = Xe[e];
                return (
                  n ||
                    ((n = E(e, t)),
                    ("none" !== n && n) ||
                      ((Ke = (
                        Ke ||
                        ae("<iframe frameborder='0' width='0' height='0'/>")
                      ).appendTo(t.documentElement)),
                      (t = Ke[0].contentDocument),
                      t.write(),
                      t.close(),
                      (n = E(e, t)),
                      Ke.detach()),
                    (Xe[e] = n)),
                  n
                );
              }
              function A(e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.style;
                return (
                  (n = n || Ge(e)),
                  (a = n ? n.getPropertyValue(t) || n[t] : void 0),
                  ("" !== a && void 0 !== a) ||
                    ae.contains(e.ownerDocument, e) ||
                    (a = ae.style(e, t)),
                  n &&
                    !ie.pixelMarginRight() &&
                    Ye.test(a) &&
                    Ve.test(t) &&
                    ((r = s.width),
                    (i = s.minWidth),
                    (o = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = a),
                    (a = n.width),
                    (s.width = r),
                    (s.minWidth = i),
                    (s.maxWidth = o)),
                  void 0 !== a ? a + "" : a
                );
              }
              function z(e, t) {
                return {
                  get: function () {
                    return e()
                      ? void delete this.get
                      : (this.get = t).apply(this, arguments);
                  },
                };
              }
              function _(e) {
                if (e in it) return e;
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = rt.length;
                  n--;

                )
                  if (((e = rt[n] + t), e in it)) return e;
              }
              function N(e, t, n) {
                var r = De.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
              }
              function D(e, t, n, r, i) {
                for (
                  var o =
                      n === (r ? "border" : "content")
                        ? 4
                        : "width" === t
                        ? 1
                        : 0,
                    a = 0;
                  o < 4;
                  o += 2
                )
                  "margin" === n && (a += ae.css(e, n + Ie[o], !0, i)),
                    r
                      ? ("content" === n &&
                          (a -= ae.css(e, "padding" + Ie[o], !0, i)),
                        "margin" !== n &&
                          (a -= ae.css(e, "border" + Ie[o] + "Width", !0, i)))
                      : ((a += ae.css(e, "padding" + Ie[o], !0, i)),
                        "padding" !== n &&
                          (a += ae.css(e, "border" + Ie[o] + "Width", !0, i)));
                return a;
              }
              function I(e, t, n) {
                var r = !0,
                  i = "width" === t ? e.offsetWidth : e.offsetHeight,
                  o = Ge(e),
                  a = "border-box" === ae.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                  if (
                    ((i = A(e, t, o)),
                    (i < 0 || null == i) && (i = e.style[t]),
                    Ye.test(i))
                  )
                    return i;
                  (r = a && (ie.boxSizingReliable() || i === e.style[t])),
                    (i = parseFloat(i) || 0);
                }
                return (
                  i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
                );
              }
              function L(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
                  (r = e[a]),
                    r.style &&
                      ((o[a] = Se.get(r, "olddisplay")),
                      (n = r.style.display),
                      t
                        ? (o[a] || "none" !== n || (r.style.display = ""),
                          "" === r.style.display &&
                            Le(r) &&
                            (o[a] = Se.access(r, "olddisplay", S(r.nodeName))))
                        : ((i = Le(r)),
                          ("none" === n && i) ||
                            Se.set(
                              r,
                              "olddisplay",
                              i ? n : ae.css(r, "display")
                            )));
                for (a = 0; a < s; a++)
                  (r = e[a]),
                    r.style &&
                      ((t &&
                        "none" !== r.style.display &&
                        "" !== r.style.display) ||
                        (r.style.display = t ? o[a] || "" : "none"));
                return e;
              }
              function O(e, t, n, r, i) {
                return new O.prototype.init(e, t, n, r, i);
              }
              function M() {
                return (
                  e.setTimeout(function () {
                    ot = void 0;
                  }),
                  (ot = ae.now())
                );
              }
              function j(e, t) {
                var n,
                  r = 0,
                  i = { height: e };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                  (n = Ie[r]), (i["margin" + n] = i["padding" + n] = e);
                return t && (i.opacity = i.width = e), i;
              }
              function F(e, t, n) {
                for (
                  var r,
                    i = (q.tweeners[t] || []).concat(q.tweeners["*"]),
                    o = 0,
                    a = i.length;
                  o < a;
                  o++
                )
                  if ((r = i[o].call(n, t, e))) return r;
              }
              function P(e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d = this,
                  f = {},
                  p = e.style,
                  h = e.nodeType && Le(e),
                  m = Se.get(e, "fxshow");
                n.queue ||
                  ((s = ae._queueHooks(e, "fx")),
                  null == s.unqueued &&
                    ((s.unqueued = 0),
                    (l = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || l();
                    })),
                  s.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      s.unqueued--, ae.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                  1 === e.nodeType &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    (u = ae.css(e, "display")),
                    (c =
                      "none" === u
                        ? Se.get(e, "olddisplay") || S(e.nodeName)
                        : u),
                    "inline" === c &&
                      "none" === ae.css(e, "float") &&
                      (p.display = "inline-block")),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    d.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    }));
                for (r in t)
                  if (((i = t[r]), st.exec(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (h ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[r]) continue;
                      h = !0;
                    }
                    f[r] = (m && m[r]) || ae.style(e, r);
                  } else u = void 0;
                if (ae.isEmptyObject(f))
                  "inline" === ("none" === u ? S(e.nodeName) : u) &&
                    (p.display = u);
                else {
                  m
                    ? "hidden" in m && (h = m.hidden)
                    : (m = Se.access(e, "fxshow", {})),
                    o && (m.hidden = !h),
                    h
                      ? ae(e).show()
                      : d.done(function () {
                          ae(e).hide();
                        }),
                    d.done(function () {
                      var t;
                      Se.remove(e, "fxshow");
                      for (t in f) ae.style(e, t, f[t]);
                    });
                  for (r in f)
                    (a = F(h ? m[r] : 0, r, d)),
                      r in m ||
                        ((m[r] = a.start),
                        h &&
                          ((a.end = a.start),
                          (a.start = "width" === r || "height" === r ? 1 : 0)));
                }
              }
              function R(e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((r = ae.camelCase(n)),
                    (i = t[r]),
                    (o = e[n]),
                    ae.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = ae.cssHooks[r]),
                    a && "expand" in a)
                  ) {
                    (o = a.expand(o)), delete e[r];
                    for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
                  } else t[r] = i;
              }
              function q(e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = q.prefilters.length,
                  s = ae.Deferred().always(function () {
                    delete l.elem;
                  }),
                  l = function () {
                    if (i) return !1;
                    for (
                      var t = ot || M(),
                        n = Math.max(0, u.startTime + u.duration - t),
                        r = n / u.duration || 0,
                        o = 1 - r,
                        a = 0,
                        l = u.tweens.length;
                      a < l;
                      a++
                    )
                      u.tweens[a].run(o);
                    return (
                      s.notifyWith(e, [u, o, n]),
                      o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
                    );
                  },
                  u = s.promise({
                    elem: e,
                    props: ae.extend({}, t),
                    opts: ae.extend(
                      !0,
                      { specialEasing: {}, easing: ae.easing._default },
                      n
                    ),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                      var r = ae.Tween(
                        e,
                        u.opts,
                        t,
                        n,
                        u.opts.specialEasing[t] || u.opts.easing
                      );
                      return u.tweens.push(r), r;
                    },
                    stop: function (t) {
                      var n = 0,
                        r = t ? u.tweens.length : 0;
                      if (i) return this;
                      for (i = !0; n < r; n++) u.tweens[n].run(1);
                      return (
                        t
                          ? (s.notifyWith(e, [u, 1, 0]),
                            s.resolveWith(e, [u, t]))
                          : s.rejectWith(e, [u, t]),
                        this
                      );
                    },
                  }),
                  c = u.props;
                for (R(c, u.opts.specialEasing); o < a; o++)
                  if ((r = q.prefilters[o].call(u, e, c, u.opts)))
                    return (
                      ae.isFunction(r.stop) &&
                        (ae._queueHooks(u.elem, u.opts.queue).stop = ae.proxy(
                          r.stop,
                          r
                        )),
                      r
                    );
                return (
                  ae.map(c, F, u),
                  ae.isFunction(u.opts.start) && u.opts.start.call(e, u),
                  ae.fx.timer(
                    ae.extend(l, { elem: e, anim: u, queue: u.opts.queue })
                  ),
                  u
                    .progress(u.opts.progress)
                    .done(u.opts.done, u.opts.complete)
                    .fail(u.opts.fail)
                    .always(u.opts.always)
                );
              }
              function H(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
              }
              function W(e) {
                return function (t, n) {
                  "string" != typeof t && ((n = t), (t = "*"));
                  var r,
                    i = 0,
                    o = t.toLowerCase().match(Ce) || [];
                  if (ae.isFunction(n))
                    for (; (r = o[i++]); )
                      "+" === r[0]
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
                };
              }
              function $(e, t, n, r) {
                function i(s) {
                  var l;
                  return (
                    (o[s] = !0),
                    ae.each(e[s] || [], function (e, s) {
                      var u = s(t, n, r);
                      return "string" != typeof u || a || o[u]
                        ? a
                          ? !(l = u)
                          : void 0
                        : (t.dataTypes.unshift(u), i(u), !1);
                    }),
                    l
                  );
                }
                var o = {},
                  a = e === At;
                return i(t.dataTypes[0]) || (!o["*"] && i("*"));
              }
              function B(e, t) {
                var n,
                  r,
                  i = ae.ajaxSettings.flatOptions || {};
                for (n in t)
                  void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ae.extend(!0, e, r), e;
              }
              function Z(e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      l.unshift(i);
                      break;
                    }
                if (l[0] in n) o = l[0];
                else {
                  for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== l[0] && l.unshift(o), n[o];
              }
              function U(e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  l,
                  u = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o; )
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !l &&
                      r &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                      if (((a = u[l + " " + o] || u["* " + o]), !a))
                        for (i in u)
                          if (
                            ((s = i.split(" ")),
                            s[1] === o &&
                              (a = u[l + " " + s[0]] || u["* " + s[0]]))
                          ) {
                            a === !0
                              ? (a = u[i])
                              : u[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (d) {
                            return {
                              state: "parsererror",
                              error: a
                                ? d
                                : "No conversion from " + l + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              }
              function K(e, t, n, r) {
                var i;
                if (ae.isArray(t))
                  ae.each(t, function (t, i) {
                    n || Dt.test(e)
                      ? r(e, i)
                      : K(
                          e +
                            "[" +
                            ("object" == typeof i && null != i ? t : "") +
                            "]",
                          i,
                          n,
                          r
                        );
                  });
                else if (n || "object" !== ae.type(t)) r(e, t);
                else for (i in t) K(e + "[" + i + "]", t[i], n, r);
              }
              function X(e) {
                return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
              }
              var V = [],
                Y = e.document,
                G = V.slice,
                Q = V.concat,
                J = V.push,
                ee = V.indexOf,
                te = {},
                ne = te.toString,
                re = te.hasOwnProperty,
                ie = {},
                oe = "2.2.4",
                ae = function (e, t) {
                  return new ae.fn.init(e, t);
                },
                se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                le = /^-ms-/,
                ue = /-([\da-z])/gi,
                ce = function (e, t) {
                  return t.toUpperCase();
                };
              (ae.fn = ae.prototype =
                {
                  jquery: oe,
                  constructor: ae,
                  selector: "",
                  length: 0,
                  toArray: function () {
                    return G.call(this);
                  },
                  get: function (e) {
                    return null != e
                      ? e < 0
                        ? this[e + this.length]
                        : this[e]
                      : G.call(this);
                  },
                  pushStack: function (e) {
                    var t = ae.merge(this.constructor(), e);
                    return (t.prevObject = this), (t.context = this.context), t;
                  },
                  each: function (e) {
                    return ae.each(this, e);
                  },
                  map: function (e) {
                    return this.pushStack(
                      ae.map(this, function (t, n) {
                        return e.call(t, n, t);
                      })
                    );
                  },
                  slice: function () {
                    return this.pushStack(G.apply(this, arguments));
                  },
                  first: function () {
                    return this.eq(0);
                  },
                  last: function () {
                    return this.eq(-1);
                  },
                  eq: function (e) {
                    var t = this.length,
                      n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                  },
                  end: function () {
                    return this.prevObject || this.constructor();
                  },
                  push: J,
                  sort: V.sort,
                  splice: V.splice,
                }),
                (ae.extend = ae.fn.extend =
                  function () {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a = arguments[0] || {},
                      s = 1,
                      l = arguments.length,
                      u = !1;
                    for (
                      "boolean" == typeof a &&
                        ((u = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || ae.isFunction(a) || (a = {}),
                        s === l && ((a = this), s--);
                      s < l;
                      s++
                    )
                      if (null != (e = arguments[s]))
                        for (t in e)
                          (n = a[t]),
                            (r = e[t]),
                            a !== r &&
                              (u &&
                              r &&
                              (ae.isPlainObject(r) || (i = ae.isArray(r)))
                                ? (i
                                    ? ((i = !1),
                                      (o = n && ae.isArray(n) ? n : []))
                                    : (o = n && ae.isPlainObject(n) ? n : {}),
                                  (a[t] = ae.extend(u, o, r)))
                                : void 0 !== r && (a[t] = r));
                    return a;
                  }),
                ae.extend({
                  expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
                  isReady: !0,
                  error: function (e) {
                    throw new Error(e);
                  },
                  noop: function () {},
                  isFunction: function (e) {
                    return "function" === ae.type(e);
                  },
                  isArray: Array.isArray,
                  isWindow: function (e) {
                    return null != e && e === e.window;
                  },
                  isNumeric: function (e) {
                    var t = e && e.toString();
                    return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0;
                  },
                  isPlainObject: function (e) {
                    var t;
                    if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e))
                      return !1;
                    if (
                      e.constructor &&
                      !re.call(e, "constructor") &&
                      !re.call(e.constructor.prototype || {}, "isPrototypeOf")
                    )
                      return !1;
                    for (t in e);
                    return void 0 === t || re.call(e, t);
                  },
                  isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                  },
                  type: function (e) {
                    return null == e
                      ? e + ""
                      : "object" == typeof e || "function" == typeof e
                      ? te[ne.call(e)] || "object"
                      : typeof e;
                  },
                  globalEval: function (e) {
                    var t,
                      n = eval;
                    (e = ae.trim(e)),
                      e &&
                        (1 === e.indexOf("use strict")
                          ? ((t = Y.createElement("script")),
                            (t.text = e),
                            Y.head.appendChild(t).parentNode.removeChild(t))
                          : n(e));
                  },
                  camelCase: function (e) {
                    return e.replace(le, "ms-").replace(ue, ce);
                  },
                  nodeName: function (e, t) {
                    return (
                      e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    );
                  },
                  each: function (e, t) {
                    var r,
                      i = 0;
                    if (n(e))
                      for (
                        r = e.length;
                        i < r && t.call(e[i], i, e[i]) !== !1;
                        i++
                      );
                    else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                    return e;
                  },
                  trim: function (e) {
                    return null == e ? "" : (e + "").replace(se, "");
                  },
                  makeArray: function (e, t) {
                    var r = t || [];
                    return (
                      null != e &&
                        (n(Object(e))
                          ? ae.merge(r, "string" == typeof e ? [e] : e)
                          : J.call(r, e)),
                      r
                    );
                  },
                  inArray: function (e, t, n) {
                    return null == t ? -1 : ee.call(t, e, n);
                  },
                  merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                      e[i++] = t[r];
                    return (e.length = i), e;
                  },
                  grep: function (e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                      (r = !t(e[o], o)), r !== s && i.push(e[o]);
                    return i;
                  },
                  map: function (e, t, r) {
                    var i,
                      o,
                      a = 0,
                      s = [];
                    if (n(e))
                      for (i = e.length; a < i; a++)
                        (o = t(e[a], a, r)), null != o && s.push(o);
                    else
                      for (a in e) (o = t(e[a], a, r)), null != o && s.push(o);
                    return Q.apply([], s);
                  },
                  guid: 1,
                  proxy: function (e, t) {
                    var n, r, i;
                    if (
                      ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                      ae.isFunction(e))
                    )
                      return (
                        (r = G.call(arguments, 2)),
                        (i = function () {
                          return e.apply(
                            t || this,
                            r.concat(G.call(arguments))
                          );
                        }),
                        (i.guid = e.guid = e.guid || ae.guid++),
                        i
                      );
                  },
                  now: Date.now,
                  support: ie,
                }),
                "function" == typeof Symbol &&
                  (ae.fn[Symbol.iterator] = V[Symbol.iterator]),
                ae.each(
                  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                  ),
                  function (e, t) {
                    te["[object " + t + "]"] = t.toLowerCase();
                  }
                );
              var de = (function (e) {
                function t(e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    d,
                    p,
                    h = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                  if (
                    ((n = n || []),
                    "string" != typeof e ||
                      !e ||
                      (1 !== m && 9 !== m && 11 !== m))
                  )
                    return n;
                  if (
                    !r &&
                    ((t ? t.ownerDocument || t : q) !== I && D(t),
                    (t = t || I),
                    O)
                  ) {
                    if (11 !== m && (u = ve.exec(e)))
                      if ((i = u[1])) {
                        if (9 === m) {
                          if (!(a = t.getElementById(i))) return n;
                          if (a.id === i) return n.push(a), n;
                        } else if (
                          h &&
                          (a = h.getElementById(i)) &&
                          P(t, a) &&
                          a.id === i
                        )
                          return n.push(a), n;
                      } else {
                        if (u[2])
                          return Q.apply(n, t.getElementsByTagName(e)), n;
                        if (
                          (i = u[3]) &&
                          x.getElementsByClassName &&
                          t.getElementsByClassName
                        )
                          return Q.apply(n, t.getElementsByClassName(i)), n;
                      }
                    if (x.qsa && !Z[e + " "] && (!M || !M.test(e))) {
                      if (1 !== m) (h = t), (p = e);
                      else if ("object" !== t.nodeName.toLowerCase()) {
                        for (
                          (s = t.getAttribute("id"))
                            ? (s = s.replace(we, "\\$&"))
                            : t.setAttribute("id", (s = R)),
                            d = E(e),
                            o = d.length,
                            l = fe.test(s) ? "#" + s : "[id='" + s + "']";
                          o--;

                        )
                          d[o] = l + " " + f(d[o]);
                        (p = d.join(",")),
                          (h = (ye.test(e) && c(t.parentNode)) || t);
                      }
                      if (p)
                        try {
                          return Q.apply(n, h.querySelectorAll(p)), n;
                        } catch (g) {
                        } finally {
                          s === R && t.removeAttribute("id");
                        }
                    }
                  }
                  return A(e.replace(se, "$1"), t, n, r);
                }
                function n() {
                  function e(n, r) {
                    return (
                      t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                      (e[n + " "] = r)
                    );
                  }
                  var t = [];
                  return e;
                }
                function r(e) {
                  return (e[R] = !0), e;
                }
                function i(e) {
                  var t = I.createElement("div");
                  try {
                    return !!e(t);
                  } catch (n) {
                    return !1;
                  } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                  }
                }
                function o(e, t) {
                  for (var n = e.split("|"), r = n.length; r--; )
                    C.attrHandle[n[r]] = t;
                }
                function a(e, t) {
                  var n = t && e,
                    r =
                      n &&
                      1 === e.nodeType &&
                      1 === t.nodeType &&
                      (~t.sourceIndex || K) - (~e.sourceIndex || K);
                  if (r) return r;
                  if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                  return e ? 1 : -1;
                }
                function s(e) {
                  return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e;
                  };
                }
                function l(e) {
                  return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                  };
                }
                function u(e) {
                  return r(function (t) {
                    return (
                      (t = +t),
                      r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                          n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                      })
                    );
                  });
                }
                function c(e) {
                  return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                function d() {}
                function f(e) {
                  for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                  return r;
                }
                function p(e, t, n) {
                  var r = t.dir,
                    i = n && "parentNode" === r,
                    o = W++;
                  return t.first
                    ? function (t, n, o) {
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || i) return e(t, n, o);
                      }
                    : function (t, n, a) {
                        var s,
                          l,
                          u,
                          c = [H, o];
                        if (a) {
                          for (; (t = t[r]); )
                            if ((1 === t.nodeType || i) && e(t, n, a))
                              return !0;
                        } else
                          for (; (t = t[r]); )
                            if (1 === t.nodeType || i) {
                              if (
                                ((u = t[R] || (t[R] = {})),
                                (l = u[t.uniqueID] || (u[t.uniqueID] = {})),
                                (s = l[r]) && s[0] === H && s[1] === o)
                              )
                                return (c[2] = s[2]);
                              if (((l[r] = c), (c[2] = e(t, n, a)))) return !0;
                            }
                      };
                }
                function h(e) {
                  return e.length > 1
                    ? function (t, n, r) {
                        for (var i = e.length; i--; )
                          if (!e[i](t, n, r)) return !1;
                        return !0;
                      }
                    : e[0];
                }
                function m(e, n, r) {
                  for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                  return r;
                }
                function g(e, t, n, r, i) {
                  for (
                    var o, a = [], s = 0, l = e.length, u = null != t;
                    s < l;
                    s++
                  )
                    (o = e[s]) &&
                      ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
                  return a;
                }
                function v(e, t, n, i, o, a) {
                  return (
                    i && !i[R] && (i = v(i)),
                    o && !o[R] && (o = v(o, a)),
                    r(function (r, a, s, l) {
                      var u,
                        c,
                        d,
                        f = [],
                        p = [],
                        h = a.length,
                        v = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!r && t) ? v : g(v, f, e, s, l),
                        w = n ? (o || (r ? e : h || i) ? [] : a) : y;
                      if ((n && n(y, w, s, l), i))
                        for (u = g(w, p), i(u, [], s, l), c = u.length; c--; )
                          (d = u[c]) && (w[p[c]] = !(y[p[c]] = d));
                      if (r) {
                        if (o || e) {
                          if (o) {
                            for (u = [], c = w.length; c--; )
                              (d = w[c]) && u.push((y[c] = d));
                            o(null, (w = []), u, l);
                          }
                          for (c = w.length; c--; )
                            (d = w[c]) &&
                              (u = o ? ee(r, d) : f[c]) > -1 &&
                              (r[u] = !(a[u] = d));
                        }
                      } else (w = g(w === a ? w.splice(h, w.length) : w)), o ? o(null, a, w, l) : Q.apply(a, w);
                    })
                  );
                }
                function y(e) {
                  for (
                    var t,
                      n,
                      r,
                      i = e.length,
                      o = C.relative[e[0].type],
                      a = o || C.relative[" "],
                      s = o ? 1 : 0,
                      l = p(
                        function (e) {
                          return e === t;
                        },
                        a,
                        !0
                      ),
                      u = p(
                        function (e) {
                          return ee(t, e) > -1;
                        },
                        a,
                        !0
                      ),
                      c = [
                        function (e, n, r) {
                          var i =
                            (!o && (r || n !== z)) ||
                            ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                          return (t = null), i;
                        },
                      ];
                    s < i;
                    s++
                  )
                    if ((n = C.relative[e[s].type])) c = [p(h(c), n)];
                    else {
                      if (
                        ((n = C.filter[e[s].type].apply(null, e[s].matches)),
                        n[R])
                      ) {
                        for (r = ++s; r < i && !C.relative[e[r].type]; r++);
                        return v(
                          s > 1 && h(c),
                          s > 1 &&
                            f(
                              e
                                .slice(0, s - 1)
                                .concat({
                                  value: " " === e[s - 2].type ? "*" : "",
                                })
                            ).replace(se, "$1"),
                          n,
                          s < r && y(e.slice(s, r)),
                          r < i && y((e = e.slice(r))),
                          r < i && f(e)
                        );
                      }
                      c.push(n);
                    }
                  return h(c);
                }
                function w(e, n) {
                  var i = n.length > 0,
                    o = e.length > 0,
                    a = function (r, a, s, l, u) {
                      var c,
                        d,
                        f,
                        p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = z,
                        w = r || (o && C.find.TAG("*", u)),
                        b = (H += null == y ? 1 : Math.random() || 0.1),
                        x = w.length;
                      for (
                        u && (z = a === I || a || u);
                        h !== x && null != (c = w[h]);
                        h++
                      ) {
                        if (o && c) {
                          for (
                            d = 0,
                              a || c.ownerDocument === I || (D(c), (s = !O));
                            (f = e[d++]);

                          )
                            if (f(c, a || I, s)) {
                              l.push(c);
                              break;
                            }
                          u && (H = b);
                        }
                        i && ((c = !f && c) && p--, r && m.push(c));
                      }
                      if (((p += h), i && h !== p)) {
                        for (d = 0; (f = n[d++]); ) f(m, v, a, s);
                        if (r) {
                          if (p > 0)
                            for (; h--; ) m[h] || v[h] || (v[h] = Y.call(l));
                          v = g(v);
                        }
                        Q.apply(l, v),
                          u &&
                            !r &&
                            v.length > 0 &&
                            p + n.length > 1 &&
                            t.uniqueSort(l);
                      }
                      return u && ((H = b), (z = y)), m;
                    };
                  return i ? r(a) : a;
                }
                var b,
                  x,
                  C,
                  T,
                  k,
                  E,
                  S,
                  A,
                  z,
                  _,
                  N,
                  D,
                  I,
                  L,
                  O,
                  M,
                  j,
                  F,
                  P,
                  R = "sizzle" + 1 * new Date(),
                  q = e.document,
                  H = 0,
                  W = 0,
                  $ = n(),
                  B = n(),
                  Z = n(),
                  U = function (e, t) {
                    return e === t && (N = !0), 0;
                  },
                  K = 1 << 31,
                  X = {}.hasOwnProperty,
                  V = [],
                  Y = V.pop,
                  G = V.push,
                  Q = V.push,
                  J = V.slice,
                  ee = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                      if (e[n] === t) return n;
                    return -1;
                  },
                  te =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                  ne = "[\\x20\\t\\r\\n\\f]",
                  re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                  ie =
                    "\\[" +
                    ne +
                    "*(" +
                    re +
                    ")(?:" +
                    ne +
                    "*([*^$|!~]?=)" +
                    ne +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    re +
                    "))|)" +
                    ne +
                    "*\\]",
                  oe =
                    ":(" +
                    re +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    ie +
                    ")*)|.*)\\)|)",
                  ae = new RegExp(ne + "+", "g"),
                  se = new RegExp(
                    "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
                    "g"
                  ),
                  le = new RegExp("^" + ne + "*," + ne + "*"),
                  ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                  ce = new RegExp(
                    "=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]",
                    "g"
                  ),
                  de = new RegExp(oe),
                  fe = new RegExp("^" + re + "$"),
                  pe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp(
                      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        ne +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        ne +
                        "*(?:([+-]|)" +
                        ne +
                        "*(\\d+)|))" +
                        ne +
                        "*\\)|)",
                      "i"
                    ),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp(
                      "^" +
                        ne +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        ne +
                        "*((?:-\\d)?\\d*)" +
                        ne +
                        "*\\)|)(?=[^-]|$)",
                      "i"
                    ),
                  },
                  he = /^(?:input|select|textarea|button)$/i,
                  me = /^h\d$/i,
                  ge = /^[^{]+\{\s*\[native \w/,
                  ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                  ye = /[+~]/,
                  we = /'|\\/g,
                  be = new RegExp(
                    "\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)",
                    "ig"
                  ),
                  xe = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n
                      ? t
                      : r < 0
                      ? String.fromCharCode(r + 65536)
                      : String.fromCharCode(
                          (r >> 10) | 55296,
                          (1023 & r) | 56320
                        );
                  },
                  Ce = function () {
                    D();
                  };
                try {
                  Q.apply((V = J.call(q.childNodes)), q.childNodes),
                    V[q.childNodes.length].nodeType;
                } catch (Te) {
                  Q = {
                    apply: V.length
                      ? function (e, t) {
                          G.apply(e, J.call(t));
                        }
                      : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                        },
                  };
                }
                (x = t.support = {}),
                  (k = t.isXML =
                    function (e) {
                      var t = e && (e.ownerDocument || e).documentElement;
                      return !!t && "HTML" !== t.nodeName;
                    }),
                  (D = t.setDocument =
                    function (e) {
                      var t,
                        n,
                        r = e ? e.ownerDocument || e : q;
                      return r !== I && 9 === r.nodeType && r.documentElement
                        ? ((I = r),
                          (L = I.documentElement),
                          (O = !k(I)),
                          (n = I.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                              ? n.addEventListener("unload", Ce, !1)
                              : n.attachEvent && n.attachEvent("onunload", Ce)),
                          (x.attributes = i(function (e) {
                            return (
                              (e.className = "i"), !e.getAttribute("className")
                            );
                          })),
                          (x.getElementsByTagName = i(function (e) {
                            return (
                              e.appendChild(I.createComment("")),
                              !e.getElementsByTagName("*").length
                            );
                          })),
                          (x.getElementsByClassName = ge.test(
                            I.getElementsByClassName
                          )),
                          (x.getById = i(function (e) {
                            return (
                              (L.appendChild(e).id = R),
                              !I.getElementsByName ||
                                !I.getElementsByName(R).length
                            );
                          })),
                          x.getById
                            ? ((C.find.ID = function (e, t) {
                                if (
                                  "undefined" != typeof t.getElementById &&
                                  O
                                ) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                                }
                              }),
                              (C.filter.ID = function (e) {
                                var t = e.replace(be, xe);
                                return function (e) {
                                  return e.getAttribute("id") === t;
                                };
                              }))
                            : (delete C.find.ID,
                              (C.filter.ID = function (e) {
                                var t = e.replace(be, xe);
                                return function (e) {
                                  var n =
                                    "undefined" != typeof e.getAttributeNode &&
                                    e.getAttributeNode("id");
                                  return n && n.value === t;
                                };
                              })),
                          (C.find.TAG = x.getElementsByTagName
                            ? function (e, t) {
                                return "undefined" !=
                                  typeof t.getElementsByTagName
                                  ? t.getElementsByTagName(e)
                                  : x.qsa
                                  ? t.querySelectorAll(e)
                                  : void 0;
                              }
                            : function (e, t) {
                                var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                  for (; (n = o[i++]); )
                                    1 === n.nodeType && r.push(n);
                                  return r;
                                }
                                return o;
                              }),
                          (C.find.CLASS =
                            x.getElementsByClassName &&
                            function (e, t) {
                              if (
                                "undefined" !=
                                  typeof t.getElementsByClassName &&
                                O
                              )
                                return t.getElementsByClassName(e);
                            }),
                          (j = []),
                          (M = []),
                          (x.qsa = ge.test(I.querySelectorAll)) &&
                            (i(function (e) {
                              (L.appendChild(e).innerHTML =
                                "<a id='" +
                                R +
                                "'></a><select id='" +
                                R +
                                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']")
                                  .length &&
                                  M.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length ||
                                  M.push("\\[" + ne + "*(?:value|" + te + ")"),
                                e.querySelectorAll("[id~=" + R + "-]").length ||
                                  M.push("~="),
                                e.querySelectorAll(":checked").length ||
                                  M.push(":checked"),
                                e.querySelectorAll("a#" + R + "+*").length ||
                                  M.push(".#.+[+~]");
                            }),
                            i(function (e) {
                              var t = I.createElement("input");
                              t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length &&
                                  M.push("name" + ne + "*[*^$|!~]?="),
                                e.querySelectorAll(":enabled").length ||
                                  M.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                M.push(",.*:");
                            })),
                          (x.matchesSelector = ge.test(
                            (F =
                              L.matches ||
                              L.webkitMatchesSelector ||
                              L.mozMatchesSelector ||
                              L.oMatchesSelector ||
                              L.msMatchesSelector)
                          )) &&
                            i(function (e) {
                              (x.disconnectedMatch = F.call(e, "div")),
                                F.call(e, "[s!='']:x"),
                                j.push("!=", oe);
                            }),
                          (M = M.length && new RegExp(M.join("|"))),
                          (j = j.length && new RegExp(j.join("|"))),
                          (t = ge.test(L.compareDocumentPosition)),
                          (P =
                            t || ge.test(L.contains)
                              ? function (e, t) {
                                  var n =
                                      9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                  return (
                                    e === r ||
                                    !(
                                      !r ||
                                      1 !== r.nodeType ||
                                      !(n.contains
                                        ? n.contains(r)
                                        : e.compareDocumentPosition &&
                                          16 & e.compareDocumentPosition(r))
                                    )
                                  );
                                }
                              : function (e, t) {
                                  if (t)
                                    for (; (t = t.parentNode); )
                                      if (t === e) return !0;
                                  return !1;
                                }),
                          (U = t
                            ? function (e, t) {
                                if (e === t) return (N = !0), 0;
                                var n =
                                  !e.compareDocumentPosition -
                                  !t.compareDocumentPosition;
                                return n
                                  ? n
                                  : ((n =
                                      (e.ownerDocument || e) ===
                                      (t.ownerDocument || t)
                                        ? e.compareDocumentPosition(t)
                                        : 1),
                                    1 & n ||
                                    (!x.sortDetached &&
                                      t.compareDocumentPosition(e) === n)
                                      ? e === I ||
                                        (e.ownerDocument === q && P(q, e))
                                        ? -1
                                        : t === I ||
                                          (t.ownerDocument === q && P(q, t))
                                        ? 1
                                        : _
                                        ? ee(_, e) - ee(_, t)
                                        : 0
                                      : 4 & n
                                      ? -1
                                      : 1);
                              }
                            : function (e, t) {
                                if (e === t) return (N = !0), 0;
                                var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  s = [e],
                                  l = [t];
                                if (!i || !o)
                                  return e === I
                                    ? -1
                                    : t === I
                                    ? 1
                                    : i
                                    ? -1
                                    : o
                                    ? 1
                                    : _
                                    ? ee(_, e) - ee(_, t)
                                    : 0;
                                if (i === o) return a(e, t);
                                for (n = e; (n = n.parentNode); ) s.unshift(n);
                                for (n = t; (n = n.parentNode); ) l.unshift(n);
                                for (; s[r] === l[r]; ) r++;
                                return r
                                  ? a(s[r], l[r])
                                  : s[r] === q
                                  ? -1
                                  : l[r] === q
                                  ? 1
                                  : 0;
                              }),
                          I)
                        : I;
                    }),
                  (t.matches = function (e, n) {
                    return t(e, null, null, n);
                  }),
                  (t.matchesSelector = function (e, n) {
                    if (
                      ((e.ownerDocument || e) !== I && D(e),
                      (n = n.replace(ce, "='$1']")),
                      x.matchesSelector &&
                        O &&
                        !Z[n + " "] &&
                        (!j || !j.test(n)) &&
                        (!M || !M.test(n)))
                    )
                      try {
                        var r = F.call(e, n);
                        if (
                          r ||
                          x.disconnectedMatch ||
                          (e.document && 11 !== e.document.nodeType)
                        )
                          return r;
                      } catch (i) {}
                    return t(n, I, null, [e]).length > 0;
                  }),
                  (t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== I && D(e), P(e, t);
                  }),
                  (t.attr = function (e, t) {
                    (e.ownerDocument || e) !== I && D(e);
                    var n = C.attrHandle[t.toLowerCase()],
                      r =
                        n && X.call(C.attrHandle, t.toLowerCase())
                          ? n(e, t, !O)
                          : void 0;
                    return void 0 !== r
                      ? r
                      : x.attributes || !O
                      ? e.getAttribute(t)
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                  }),
                  (t.error = function (e) {
                    throw new Error(
                      "Syntax error, unrecognized expression: " + e
                    );
                  }),
                  (t.uniqueSort = function (e) {
                    var t,
                      n = [],
                      r = 0,
                      i = 0;
                    if (
                      ((N = !x.detectDuplicates),
                      (_ = !x.sortStable && e.slice(0)),
                      e.sort(U),
                      N)
                    ) {
                      for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                      for (; r--; ) e.splice(n[r], 1);
                    }
                    return (_ = null), e;
                  }),
                  (T = t.getText =
                    function (e) {
                      var t,
                        n = "",
                        r = 0,
                        i = e.nodeType;
                      if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                          if ("string" == typeof e.textContent)
                            return e.textContent;
                          for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                      } else for (; (t = e[r++]); ) n += T(t);
                      return n;
                    }),
                  (C = t.selectors =
                    {
                      cacheLength: 50,
                      createPseudo: r,
                      match: pe,
                      attrHandle: {},
                      find: {},
                      relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                      },
                      preFilter: {
                        ATTR: function (e) {
                          return (
                            (e[1] = e[1].replace(be, xe)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                              be,
                              xe
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                          );
                        },
                        CHILD: function (e) {
                          return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                              ? (e[3] || t.error(e[0]),
                                (e[4] = +(e[4]
                                  ? e[5] + (e[6] || 1)
                                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                              : e[3] && t.error(e[0]),
                            e
                          );
                        },
                        PSEUDO: function (e) {
                          var t,
                            n = !e[6] && e[2];
                          return pe.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                ? (e[2] = e[4] || e[5] || "")
                                : n &&
                                  de.test(n) &&
                                  (t = E(n, !0)) &&
                                  (t =
                                    n.indexOf(")", n.length - t) - n.length) &&
                                  ((e[0] = e[0].slice(0, t)),
                                  (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                        },
                      },
                      filter: {
                        TAG: function (e) {
                          var t = e.replace(be, xe).toLowerCase();
                          return "*" === e
                            ? function () {
                                return !0;
                              }
                            : function (e) {
                                return (
                                  e.nodeName && e.nodeName.toLowerCase() === t
                                );
                              };
                        },
                        CLASS: function (e) {
                          var t = $[e + " "];
                          return (
                            t ||
                            ((t = new RegExp(
                              "(^|" + ne + ")" + e + "(" + ne + "|$)"
                            )) &&
                              $(e, function (e) {
                                return t.test(
                                  ("string" == typeof e.className &&
                                    e.className) ||
                                    ("undefined" != typeof e.getAttribute &&
                                      e.getAttribute("class")) ||
                                    ""
                                );
                              }))
                          );
                        },
                        ATTR: function (e, n, r) {
                          return function (i) {
                            var o = t.attr(i, e);
                            return null == o
                              ? "!=" === n
                              : !n ||
                                  ((o += ""),
                                  "=" === n
                                    ? o === r
                                    : "!=" === n
                                    ? o !== r
                                    : "^=" === n
                                    ? r && 0 === o.indexOf(r)
                                    : "*=" === n
                                    ? r && o.indexOf(r) > -1
                                    : "$=" === n
                                    ? r && o.slice(-r.length) === r
                                    : "~=" === n
                                    ? (" " + o.replace(ae, " ") + " ").indexOf(
                                        r
                                      ) > -1
                                    : "|=" === n &&
                                      (o === r ||
                                        o.slice(0, r.length + 1) === r + "-"));
                          };
                        },
                        CHILD: function (e, t, n, r, i) {
                          var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                          return 1 === r && 0 === i
                            ? function (e) {
                                return !!e.parentNode;
                              }
                            : function (t, n, l) {
                                var u,
                                  c,
                                  d,
                                  f,
                                  p,
                                  h,
                                  m =
                                    o !== a ? "nextSibling" : "previousSibling",
                                  g = t.parentNode,
                                  v = s && t.nodeName.toLowerCase(),
                                  y = !l && !s,
                                  w = !1;
                                if (g) {
                                  if (o) {
                                    for (; m; ) {
                                      for (f = t; (f = f[m]); )
                                        if (
                                          s
                                            ? f.nodeName.toLowerCase() === v
                                            : 1 === f.nodeType
                                        )
                                          return !1;
                                      h = m =
                                        "only" === e && !h && "nextSibling";
                                    }
                                    return !0;
                                  }
                                  if (
                                    ((h = [a ? g.firstChild : g.lastChild]),
                                    a && y)
                                  ) {
                                    for (
                                      f = g,
                                        d = f[R] || (f[R] = {}),
                                        c =
                                          d[f.uniqueID] || (d[f.uniqueID] = {}),
                                        u = c[e] || [],
                                        p = u[0] === H && u[1],
                                        w = p && u[2],
                                        f = p && g.childNodes[p];
                                      (f =
                                        (++p && f && f[m]) ||
                                        (w = p = 0) ||
                                        h.pop());

                                    )
                                      if (1 === f.nodeType && ++w && f === t) {
                                        c[e] = [H, p, w];
                                        break;
                                      }
                                  } else if (
                                    (y &&
                                      ((f = t),
                                      (d = f[R] || (f[R] = {})),
                                      (c =
                                        d[f.uniqueID] || (d[f.uniqueID] = {})),
                                      (u = c[e] || []),
                                      (p = u[0] === H && u[1]),
                                      (w = p)),
                                    w === !1)
                                  )
                                    for (
                                      ;
                                      (f =
                                        (++p && f && f[m]) ||
                                        (w = p = 0) ||
                                        h.pop()) &&
                                      ((s
                                        ? f.nodeName.toLowerCase() !== v
                                        : 1 !== f.nodeType) ||
                                        !++w ||
                                        (y &&
                                          ((d = f[R] || (f[R] = {})),
                                          (c =
                                            d[f.uniqueID] ||
                                            (d[f.uniqueID] = {})),
                                          (c[e] = [H, w])),
                                        f !== t));

                                    );
                                  return (
                                    (w -= i),
                                    w === r || (w % r === 0 && w / r >= 0)
                                  );
                                }
                              };
                        },
                        PSEUDO: function (e, n) {
                          var i,
                            o =
                              C.pseudos[e] ||
                              C.setFilters[e.toLowerCase()] ||
                              t.error("unsupported pseudo: " + e);
                          return o[R]
                            ? o(n)
                            : o.length > 1
                            ? ((i = [e, e, "", n]),
                              C.setFilters.hasOwnProperty(e.toLowerCase())
                                ? r(function (e, t) {
                                    for (
                                      var r, i = o(e, n), a = i.length;
                                      a--;

                                    )
                                      (r = ee(e, i[a])),
                                        (e[r] = !(t[r] = i[a]));
                                  })
                                : function (e) {
                                    return o(e, 0, i);
                                  })
                            : o;
                        },
                      },
                      pseudos: {
                        not: r(function (e) {
                          var t = [],
                            n = [],
                            i = S(e.replace(se, "$1"));
                          return i[R]
                            ? r(function (e, t, n, r) {
                                for (
                                  var o, a = i(e, null, r, []), s = e.length;
                                  s--;

                                )
                                  (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, r, o) {
                                return (
                                  (t[0] = e),
                                  i(t, null, o, n),
                                  (t[0] = null),
                                  !n.pop()
                                );
                              };
                        }),
                        has: r(function (e) {
                          return function (n) {
                            return t(e, n).length > 0;
                          };
                        }),
                        contains: r(function (e) {
                          return (
                            (e = e.replace(be, xe)),
                            function (t) {
                              return (
                                (t.textContent || t.innerText || T(t)).indexOf(
                                  e
                                ) > -1
                              );
                            }
                          );
                        }),
                        lang: r(function (e) {
                          return (
                            fe.test(e || "") ||
                              t.error("unsupported lang: " + e),
                            (e = e.replace(be, xe).toLowerCase()),
                            function (t) {
                              var n;
                              do
                                if (
                                  (n = O
                                    ? t.lang
                                    : t.getAttribute("xml:lang") ||
                                      t.getAttribute("lang"))
                                )
                                  return (
                                    (n = n.toLowerCase()),
                                    n === e || 0 === n.indexOf(e + "-")
                                  );
                              while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1;
                            }
                          );
                        }),
                        target: function (t) {
                          var n = e.location && e.location.hash;
                          return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                          return e === L;
                        },
                        focus: function (e) {
                          return (
                            e === I.activeElement &&
                            (!I.hasFocus || I.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                          );
                        },
                        enabled: function (e) {
                          return e.disabled === !1;
                        },
                        disabled: function (e) {
                          return e.disabled === !0;
                        },
                        checked: function (e) {
                          var t = e.nodeName.toLowerCase();
                          return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                          );
                        },
                        selected: function (e) {
                          return (
                            e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                          );
                        },
                        empty: function (e) {
                          for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                          return !0;
                        },
                        parent: function (e) {
                          return !C.pseudos.empty(e);
                        },
                        header: function (e) {
                          return me.test(e.nodeName);
                        },
                        input: function (e) {
                          return he.test(e.nodeName);
                        },
                        button: function (e) {
                          var t = e.nodeName.toLowerCase();
                          return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                          );
                        },
                        text: function (e) {
                          var t;
                          return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                              "text" === t.toLowerCase())
                          );
                        },
                        first: u(function () {
                          return [0];
                        }),
                        last: u(function (e, t) {
                          return [t - 1];
                        }),
                        eq: u(function (e, t, n) {
                          return [n < 0 ? n + t : n];
                        }),
                        even: u(function (e, t) {
                          for (var n = 0; n < t; n += 2) e.push(n);
                          return e;
                        }),
                        odd: u(function (e, t) {
                          for (var n = 1; n < t; n += 2) e.push(n);
                          return e;
                        }),
                        lt: u(function (e, t, n) {
                          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                          return e;
                        }),
                        gt: u(function (e, t, n) {
                          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                          return e;
                        }),
                      },
                    }),
                  (C.pseudos.nth = C.pseudos.eq);
                for (b in {
                  radio: !0,
                  checkbox: !0,
                  file: !0,
                  password: !0,
                  image: !0,
                })
                  C.pseudos[b] = s(b);
                for (b in { submit: !0, reset: !0 }) C.pseudos[b] = l(b);
                return (
                  (d.prototype = C.filters = C.pseudos),
                  (C.setFilters = new d()),
                  (E = t.tokenize =
                    function (e, n) {
                      var r,
                        i,
                        o,
                        a,
                        s,
                        l,
                        u,
                        c = B[e + " "];
                      if (c) return n ? 0 : c.slice(0);
                      for (s = e, l = [], u = C.preFilter; s; ) {
                        (r && !(i = le.exec(s))) ||
                          (i && (s = s.slice(i[0].length) || s),
                          l.push((o = []))),
                          (r = !1),
                          (i = ue.exec(s)) &&
                            ((r = i.shift()),
                            o.push({ value: r, type: i[0].replace(se, " ") }),
                            (s = s.slice(r.length)));
                        for (a in C.filter)
                          !(i = pe[a].exec(s)) ||
                            (u[a] && !(i = u[a](i))) ||
                            ((r = i.shift()),
                            o.push({ value: r, type: a, matches: i }),
                            (s = s.slice(r.length)));
                        if (!r) break;
                      }
                      return n ? s.length : s ? t.error(e) : B(e, l).slice(0);
                    }),
                  (S = t.compile =
                    function (e, t) {
                      var n,
                        r = [],
                        i = [],
                        o = Z[e + " "];
                      if (!o) {
                        for (t || (t = E(e)), n = t.length; n--; )
                          (o = y(t[n])), o[R] ? r.push(o) : i.push(o);
                        (o = Z(e, w(i, r))), (o.selector = e);
                      }
                      return o;
                    }),
                  (A = t.select =
                    function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        l,
                        u = "function" == typeof e && e,
                        d = !r && E((e = u.selector || e));
                      if (((n = n || []), 1 === d.length)) {
                        if (
                          ((o = d[0] = d[0].slice(0)),
                          o.length > 2 &&
                            "ID" === (a = o[0]).type &&
                            x.getById &&
                            9 === t.nodeType &&
                            O &&
                            C.relative[o[1].type])
                        ) {
                          if (
                            ((t = (C.find.ID(a.matches[0].replace(be, xe), t) ||
                              [])[0]),
                            !t)
                          )
                            return n;
                          u && (t = t.parentNode),
                            (e = e.slice(o.shift().value.length));
                        }
                        for (
                          i = pe.needsContext.test(e) ? 0 : o.length;
                          i-- && ((a = o[i]), !C.relative[(s = a.type)]);

                        )
                          if (
                            (l = C.find[s]) &&
                            (r = l(
                              a.matches[0].replace(be, xe),
                              (ye.test(o[0].type) && c(t.parentNode)) || t
                            ))
                          ) {
                            if ((o.splice(i, 1), (e = r.length && f(o)), !e))
                              return Q.apply(n, r), n;
                            break;
                          }
                      }
                      return (
                        (u || S(e, d))(
                          r,
                          t,
                          !O,
                          n,
                          !t || (ye.test(e) && c(t.parentNode)) || t
                        ),
                        n
                      );
                    }),
                  (x.sortStable = R.split("").sort(U).join("") === R),
                  (x.detectDuplicates = !!N),
                  D(),
                  (x.sortDetached = i(function (e) {
                    return (
                      1 & e.compareDocumentPosition(I.createElement("div"))
                    );
                  })),
                  i(function (e) {
                    return (
                      (e.innerHTML = "<a href='#'></a>"),
                      "#" === e.firstChild.getAttribute("href")
                    );
                  }) ||
                    o("type|href|height|width", function (e, t, n) {
                      if (!n)
                        return e.getAttribute(
                          t,
                          "type" === t.toLowerCase() ? 1 : 2
                        );
                    }),
                  (x.attributes &&
                    i(function (e) {
                      return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                      );
                    })) ||
                    o("value", function (e, t, n) {
                      if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                    }),
                  i(function (e) {
                    return null == e.getAttribute("disabled");
                  }) ||
                    o(te, function (e, t, n) {
                      var r;
                      if (!n)
                        return e[t] === !0
                          ? t.toLowerCase()
                          : (r = e.getAttributeNode(t)) && r.specified
                          ? r.value
                          : null;
                    }),
                  t
                );
              })(e);
              (ae.find = de),
                (ae.expr = de.selectors),
                (ae.expr[":"] = ae.expr.pseudos),
                (ae.uniqueSort = ae.unique = de.uniqueSort),
                (ae.text = de.getText),
                (ae.isXMLDoc = de.isXML),
                (ae.contains = de.contains);
              var fe = function (e, t, n) {
                  for (
                    var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;

                  )
                    if (1 === e.nodeType) {
                      if (i && ae(e).is(n)) break;
                      r.push(e);
                    }
                  return r;
                },
                pe = function (e, t) {
                  for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                  return n;
                },
                he = ae.expr.match.needsContext,
                me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                ge = /^.[^:#\[\.,]*$/;
              (ae.filter = function (e, t, n) {
                var r = t[0];
                return (
                  n && (e = ":not(" + e + ")"),
                  1 === t.length && 1 === r.nodeType
                    ? ae.find.matchesSelector(r, e)
                      ? [r]
                      : []
                    : ae.find.matches(
                        e,
                        ae.grep(t, function (e) {
                          return 1 === e.nodeType;
                        })
                      )
                );
              }),
                ae.fn.extend({
                  find: function (e) {
                    var t,
                      n = this.length,
                      r = [],
                      i = this;
                    if ("string" != typeof e)
                      return this.pushStack(
                        ae(e).filter(function () {
                          for (t = 0; t < n; t++)
                            if (ae.contains(i[t], this)) return !0;
                        })
                      );
                    for (t = 0; t < n; t++) ae.find(e, i[t], r);
                    return (
                      (r = this.pushStack(n > 1 ? ae.unique(r) : r)),
                      (r.selector = this.selector
                        ? this.selector + " " + e
                        : e),
                      r
                    );
                  },
                  filter: function (e) {
                    return this.pushStack(i(this, e || [], !1));
                  },
                  not: function (e) {
                    return this.pushStack(i(this, e || [], !0));
                  },
                  is: function (e) {
                    return !!i(
                      this,
                      "string" == typeof e && he.test(e) ? ae(e) : e || [],
                      !1
                    ).length;
                  },
                });
              var ve,
                ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                we = (ae.fn.init = function (e, t, n) {
                  var r, i;
                  if (!e) return this;
                  if (((n = n || ve), "string" == typeof e)) {
                    if (
                      ((r =
                        "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                          ? [null, e, null]
                          : ye.exec(e)),
                      !r || (!r[1] && t))
                    )
                      return !t || t.jquery
                        ? (t || n).find(e)
                        : this.constructor(t).find(e);
                    if (r[1]) {
                      if (
                        ((t = t instanceof ae ? t[0] : t),
                        ae.merge(
                          this,
                          ae.parseHTML(
                            r[1],
                            t && t.nodeType ? t.ownerDocument || t : Y,
                            !0
                          )
                        ),
                        me.test(r[1]) && ae.isPlainObject(t))
                      )
                        for (r in t)
                          ae.isFunction(this[r])
                            ? this[r](t[r])
                            : this.attr(r, t[r]);
                      return this;
                    }
                    return (
                      (i = Y.getElementById(r[2])),
                      i && i.parentNode && ((this.length = 1), (this[0] = i)),
                      (this.context = Y),
                      (this.selector = e),
                      this
                    );
                  }
                  return e.nodeType
                    ? ((this.context = this[0] = e), (this.length = 1), this)
                    : ae.isFunction(e)
                    ? void 0 !== n.ready
                      ? n.ready(e)
                      : e(ae)
                    : (void 0 !== e.selector &&
                        ((this.selector = e.selector),
                        (this.context = e.context)),
                      ae.makeArray(e, this));
                });
              (we.prototype = ae.fn), (ve = ae(Y));
              var be = /^(?:parents|prev(?:Until|All))/,
                xe = { children: !0, contents: !0, next: !0, prev: !0 };
              ae.fn.extend({
                has: function (e) {
                  var t = ae(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; e < n; e++)
                      if (ae.contains(this, t[e])) return !0;
                  });
                },
                closest: function (e, t) {
                  for (
                    var n,
                      r = 0,
                      i = this.length,
                      o = [],
                      a =
                        he.test(e) || "string" != typeof e
                          ? ae(e, t || this.context)
                          : 0;
                    r < i;
                    r++
                  )
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (
                        n.nodeType < 11 &&
                        (a
                          ? a.index(n) > -1
                          : 1 === n.nodeType && ae.find.matchesSelector(n, e))
                      ) {
                        o.push(n);
                        break;
                      }
                  return this.pushStack(o.length > 1 ? ae.uniqueSort(o) : o);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? ee.call(ae(e), this[0])
                      : ee.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(
                    ae.uniqueSort(ae.merge(this.get(), ae(e, t)))
                  );
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
                ae.each(
                  {
                    parent: function (e) {
                      var t = e.parentNode;
                      return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function (e) {
                      return fe(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                      return fe(e, "parentNode", n);
                    },
                    next: function (e) {
                      return o(e, "nextSibling");
                    },
                    prev: function (e) {
                      return o(e, "previousSibling");
                    },
                    nextAll: function (e) {
                      return fe(e, "nextSibling");
                    },
                    prevAll: function (e) {
                      return fe(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                      return fe(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                      return fe(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                      return pe((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                      return pe(e.firstChild);
                    },
                    contents: function (e) {
                      return e.contentDocument || ae.merge([], e.childNodes);
                    },
                  },
                  function (e, t) {
                    ae.fn[e] = function (n, r) {
                      var i = ae.map(this, t, n);
                      return (
                        "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = ae.filter(r, i)),
                        this.length > 1 &&
                          (xe[e] || ae.uniqueSort(i),
                          be.test(e) && i.reverse()),
                        this.pushStack(i)
                      );
                    };
                  }
                );
              var Ce = /\S+/g;
              (ae.Callbacks = function (e) {
                e = "string" == typeof e ? a(e) : ae.extend({}, e);
                var t,
                  n,
                  r,
                  i,
                  o = [],
                  s = [],
                  l = -1,
                  u = function () {
                    for (i = e.once, r = t = !0; s.length; l = -1)
                      for (n = s.shift(); ++l < o.length; )
                        o[l].apply(n[0], n[1]) === !1 &&
                          e.stopOnFalse &&
                          ((l = o.length), (n = !1));
                    e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
                  },
                  c = {
                    add: function () {
                      return (
                        o &&
                          (n && !t && ((l = o.length - 1), s.push(n)),
                          (function r(t) {
                            ae.each(t, function (t, n) {
                              ae.isFunction(n)
                                ? (e.unique && c.has(n)) || o.push(n)
                                : n &&
                                  n.length &&
                                  "string" !== ae.type(n) &&
                                  r(n);
                            });
                          })(arguments),
                          n && !t && u()),
                        this
                      );
                    },
                    remove: function () {
                      return (
                        ae.each(arguments, function (e, t) {
                          for (var n; (n = ae.inArray(t, o, n)) > -1; )
                            o.splice(n, 1), n <= l && l--;
                        }),
                        this
                      );
                    },
                    has: function (e) {
                      return e ? ae.inArray(e, o) > -1 : o.length > 0;
                    },
                    empty: function () {
                      return o && (o = []), this;
                    },
                    disable: function () {
                      return (i = s = []), (o = n = ""), this;
                    },
                    disabled: function () {
                      return !o;
                    },
                    lock: function () {
                      return (i = s = []), n || (o = n = ""), this;
                    },
                    locked: function () {
                      return !!i;
                    },
                    fireWith: function (e, n) {
                      return (
                        i ||
                          ((n = n || []),
                          (n = [e, n.slice ? n.slice() : n]),
                          s.push(n),
                          t || u()),
                        this
                      );
                    },
                    fire: function () {
                      return c.fireWith(this, arguments), this;
                    },
                    fired: function () {
                      return !!r;
                    },
                  };
                return c;
              }),
                ae.extend({
                  Deferred: function (e) {
                    var t = [
                        [
                          "resolve",
                          "done",
                          ae.Callbacks("once memory"),
                          "resolved",
                        ],
                        [
                          "reject",
                          "fail",
                          ae.Callbacks("once memory"),
                          "rejected",
                        ],
                        ["notify", "progress", ae.Callbacks("memory")],
                      ],
                      n = "pending",
                      r = {
                        state: function () {
                          return n;
                        },
                        always: function () {
                          return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                          var e = arguments;
                          return ae
                            .Deferred(function (n) {
                              ae.each(t, function (t, o) {
                                var a = ae.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                  var e = a && a.apply(this, arguments);
                                  e && ae.isFunction(e.promise)
                                    ? e
                                        .promise()
                                        .progress(n.notify)
                                        .done(n.resolve)
                                        .fail(n.reject)
                                    : n[o[0] + "With"](
                                        this === r ? n.promise() : this,
                                        a ? [e] : arguments
                                      );
                                });
                              }),
                                (e = null);
                            })
                            .promise();
                        },
                        promise: function (e) {
                          return null != e ? ae.extend(e, r) : r;
                        },
                      },
                      i = {};
                    return (
                      (r.pipe = r.then),
                      ae.each(t, function (e, o) {
                        var a = o[2],
                          s = o[3];
                        (r[o[1]] = a.add),
                          s &&
                            a.add(
                              function () {
                                n = s;
                              },
                              t[1 ^ e][2].disable,
                              t[2][2].lock
                            ),
                          (i[o[0]] = function () {
                            return (
                              i[o[0] + "With"](
                                this === i ? r : this,
                                arguments
                              ),
                              this
                            );
                          }),
                          (i[o[0] + "With"] = a.fireWith);
                      }),
                      r.promise(i),
                      e && e.call(i, i),
                      i
                    );
                  },
                  when: function (e) {
                    var t,
                      n,
                      r,
                      i = 0,
                      o = G.call(arguments),
                      a = o.length,
                      s = 1 !== a || (e && ae.isFunction(e.promise)) ? a : 0,
                      l = 1 === s ? e : ae.Deferred(),
                      u = function (e, n, r) {
                        return function (i) {
                          (n[e] = this),
                            (r[e] =
                              arguments.length > 1 ? G.call(arguments) : i),
                            r === t
                              ? l.notifyWith(n, r)
                              : --s || l.resolveWith(n, r);
                        };
                      };
                    if (a > 1)
                      for (
                        t = new Array(a), n = new Array(a), r = new Array(a);
                        i < a;
                        i++
                      )
                        o[i] && ae.isFunction(o[i].promise)
                          ? o[i]
                              .promise()
                              .progress(u(i, n, t))
                              .done(u(i, r, o))
                              .fail(l.reject)
                          : --s;
                    return s || l.resolveWith(r, o), l.promise();
                  },
                });
              var Te;
              (ae.fn.ready = function (e) {
                return ae.ready.promise().done(e), this;
              }),
                ae.extend({
                  isReady: !1,
                  readyWait: 1,
                  holdReady: function (e) {
                    e ? ae.readyWait++ : ae.ready(!0);
                  },
                  ready: function (e) {
                    (e === !0 ? --ae.readyWait : ae.isReady) ||
                      ((ae.isReady = !0),
                      (e !== !0 && --ae.readyWait > 0) ||
                        (Te.resolveWith(Y, [ae]),
                        ae.fn.triggerHandler &&
                          (ae(Y).triggerHandler("ready"), ae(Y).off("ready"))));
                  },
                }),
                (ae.ready.promise = function (t) {
                  return (
                    Te ||
                      ((Te = ae.Deferred()),
                      "complete" === Y.readyState ||
                      ("loading" !== Y.readyState &&
                        !Y.documentElement.doScroll)
                        ? e.setTimeout(ae.ready)
                        : (Y.addEventListener("DOMContentLoaded", s),
                          e.addEventListener("load", s))),
                    Te.promise(t)
                  );
                }),
                ae.ready.promise();
              var ke = function (e, t, n, r, i, o, a) {
                  var s = 0,
                    l = e.length,
                    u = null == n;
                  if ("object" === ae.type(n)) {
                    i = !0;
                    for (s in n) ke(e, t, s, n[s], !0, o, a);
                  } else if (
                    void 0 !== r &&
                    ((i = !0),
                    ae.isFunction(r) || (a = !0),
                    u &&
                      (a
                        ? (t.call(e, r), (t = null))
                        : ((u = t),
                          (t = function (e, t, n) {
                            return u.call(ae(e), n);
                          }))),
                    t)
                  )
                    for (; s < l; s++)
                      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                  return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
                },
                Ee = function (e) {
                  return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
              (l.uid = 1),
                (l.prototype = {
                  register: function (e, t) {
                    var n = t || {};
                    return (
                      e.nodeType
                        ? (e[this.expando] = n)
                        : Object.defineProperty(e, this.expando, {
                            value: n,
                            writable: !0,
                            configurable: !0,
                          }),
                      e[this.expando]
                    );
                  },
                  cache: function (e) {
                    if (!Ee(e)) return {};
                    var t = e[this.expando];
                    return (
                      t ||
                        ((t = {}),
                        Ee(e) &&
                          (e.nodeType
                            ? (e[this.expando] = t)
                            : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0,
                              }))),
                      t
                    );
                  },
                  set: function (e, t, n) {
                    var r,
                      i = this.cache(e);
                    if ("string" == typeof t) i[t] = n;
                    else for (r in t) i[r] = t[r];
                    return i;
                  },
                  get: function (e, t) {
                    return void 0 === t
                      ? this.cache(e)
                      : e[this.expando] && e[this.expando][t];
                  },
                  access: function (e, t, n) {
                    var r;
                    return void 0 === t ||
                      (t && "string" == typeof t && void 0 === n)
                      ? ((r = this.get(e, t)),
                        void 0 !== r ? r : this.get(e, ae.camelCase(t)))
                      : (this.set(e, t, n), void 0 !== n ? n : t);
                  },
                  remove: function (e, t) {
                    var n,
                      r,
                      i,
                      o = e[this.expando];
                    if (void 0 !== o) {
                      if (void 0 === t) this.register(e);
                      else {
                        ae.isArray(t)
                          ? (r = t.concat(t.map(ae.camelCase)))
                          : ((i = ae.camelCase(t)),
                            t in o
                              ? (r = [t, i])
                              : ((r = i),
                                (r = r in o ? [r] : r.match(Ce) || []))),
                          (n = r.length);
                        for (; n--; ) delete o[r[n]];
                      }
                      (void 0 === t || ae.isEmptyObject(o)) &&
                        (e.nodeType
                          ? (e[this.expando] = void 0)
                          : delete e[this.expando]);
                    }
                  },
                  hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !ae.isEmptyObject(t);
                  },
                });
              var Se = new l(),
                Ae = new l(),
                ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                _e = /[A-Z]/g;
              ae.extend({
                hasData: function (e) {
                  return Ae.hasData(e) || Se.hasData(e);
                },
                data: function (e, t, n) {
                  return Ae.access(e, t, n);
                },
                removeData: function (e, t) {
                  Ae.remove(e, t);
                },
                _data: function (e, t, n) {
                  return Se.access(e, t, n);
                },
                _removeData: function (e, t) {
                  Se.remove(e, t);
                },
              }),
                ae.fn.extend({
                  data: function (e, t) {
                    var n,
                      r,
                      i,
                      o = this[0],
                      a = o && o.attributes;
                    if (void 0 === e) {
                      if (
                        this.length &&
                        ((i = Ae.get(o)),
                        1 === o.nodeType && !Se.get(o, "hasDataAttrs"))
                      ) {
                        for (n = a.length; n--; )
                          a[n] &&
                            ((r = a[n].name),
                            0 === r.indexOf("data-") &&
                              ((r = ae.camelCase(r.slice(5))), u(o, r, i[r])));
                        Se.set(o, "hasDataAttrs", !0);
                      }
                      return i;
                    }
                    return "object" == typeof e
                      ? this.each(function () {
                          Ae.set(this, e);
                        })
                      : ke(
                          this,
                          function (t) {
                            var n, r;
                            if (o && void 0 === t) {
                              if (
                                ((n =
                                  Ae.get(o, e) ||
                                  Ae.get(
                                    o,
                                    e.replace(_e, "-$&").toLowerCase()
                                  )),
                                void 0 !== n)
                              )
                                return n;
                              if (
                                ((r = ae.camelCase(e)),
                                (n = Ae.get(o, r)),
                                void 0 !== n)
                              )
                                return n;
                              if (((n = u(o, r, void 0)), void 0 !== n))
                                return n;
                            } else
                              (r = ae.camelCase(e)),
                                this.each(function () {
                                  var n = Ae.get(this, r);
                                  Ae.set(this, r, t),
                                    e.indexOf("-") > -1 &&
                                      void 0 !== n &&
                                      Ae.set(this, e, t);
                                });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                        );
                  },
                  removeData: function (e) {
                    return this.each(function () {
                      Ae.remove(this, e);
                    });
                  },
                }),
                ae.extend({
                  queue: function (e, t, n) {
                    var r;
                    if (e)
                      return (
                        (t = (t || "fx") + "queue"),
                        (r = Se.get(e, t)),
                        n &&
                          (!r || ae.isArray(n)
                            ? (r = Se.access(e, t, ae.makeArray(n)))
                            : r.push(n)),
                        r || []
                      );
                  },
                  dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ae.queue(e, t),
                      r = n.length,
                      i = n.shift(),
                      o = ae._queueHooks(e, t),
                      a = function () {
                        ae.dequeue(e, t);
                      };
                    "inprogress" === i && ((i = n.shift()), r--),
                      i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)),
                      !r && o && o.empty.fire();
                  },
                  _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                      Se.get(e, n) ||
                      Se.access(e, n, {
                        empty: ae.Callbacks("once memory").add(function () {
                          Se.remove(e, [t + "queue", n]);
                        }),
                      })
                    );
                  },
                }),
                ae.fn.extend({
                  queue: function (e, t) {
                    var n = 2;
                    return (
                      "string" != typeof e && ((t = e), (e = "fx"), n--),
                      arguments.length < n
                        ? ae.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                            var n = ae.queue(this, e, t);
                            ae._queueHooks(this, e),
                              "fx" === e &&
                                "inprogress" !== n[0] &&
                                ae.dequeue(this, e);
                          })
                    );
                  },
                  dequeue: function (e) {
                    return this.each(function () {
                      ae.dequeue(this, e);
                    });
                  },
                  clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                  },
                  promise: function (e, t) {
                    var n,
                      r = 1,
                      i = ae.Deferred(),
                      o = this,
                      a = this.length,
                      s = function () {
                        --r || i.resolveWith(o, [o]);
                      };
                    for (
                      "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                      a--;

                    )
                      (n = Se.get(o[a], e + "queueHooks")),
                        n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t);
                  },
                });
              var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                De = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
                Ie = ["Top", "Right", "Bottom", "Left"],
                Le = function (e, t) {
                  return (
                    (e = t || e),
                    "none" === ae.css(e, "display") ||
                      !ae.contains(e.ownerDocument, e)
                  );
                },
                Oe = /^(?:checkbox|radio)$/i,
                Me = /<([\w:-]+)/,
                je = /^$|\/(?:java|ecma)script/i,
                Fe = {
                  option: [1, "<select multiple='multiple'>", "</select>"],
                  thead: [1, "<table>", "</table>"],
                  col: [2, "<table><colgroup>", "</colgroup></table>"],
                  tr: [2, "<table><tbody>", "</tbody></table>"],
                  td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                  _default: [0, "", ""],
                };
              (Fe.optgroup = Fe.option),
                (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead),
                (Fe.th = Fe.td);
              var Pe = /<|&#?\w+;/;
              !(function () {
                var e = Y.createDocumentFragment(),
                  t = e.appendChild(Y.createElement("div")),
                  n = Y.createElement("input");
                n.setAttribute("type", "radio"),
                  n.setAttribute("checked", "checked"),
                  n.setAttribute("name", "t"),
                  t.appendChild(n),
                  (ie.checkClone = t
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                  (t.innerHTML = "<textarea>x</textarea>"),
                  (ie.noCloneChecked = !!t.cloneNode(!0).lastChild
                    .defaultValue);
              })();
              var Re = /^key/,
                qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                He = /^([^.]*)(?:\.(.+)|)/;
              (ae.event = {
                global: {},
                add: function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m,
                    g = Se.get(e);
                  if (g)
                    for (
                      n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                        n.guid || (n.guid = ae.guid++),
                        (l = g.events) || (l = g.events = {}),
                        (a = g.handle) ||
                          (a = g.handle =
                            function (t) {
                              return "undefined" != typeof ae &&
                                ae.event.triggered !== t.type
                                ? ae.event.dispatch.apply(e, arguments)
                                : void 0;
                            }),
                        t = (t || "").match(Ce) || [""],
                        u = t.length;
                      u--;

                    )
                      (s = He.exec(t[u]) || []),
                        (p = m = s[1]),
                        (h = (s[2] || "").split(".").sort()),
                        p &&
                          ((d = ae.event.special[p] || {}),
                          (p = (i ? d.delegateType : d.bindType) || p),
                          (d = ae.event.special[p] || {}),
                          (c = ae.extend(
                            {
                              type: p,
                              origType: m,
                              data: r,
                              handler: n,
                              guid: n.guid,
                              selector: i,
                              needsContext:
                                i && ae.expr.match.needsContext.test(i),
                              namespace: h.join("."),
                            },
                            o
                          )),
                          (f = l[p]) ||
                            ((f = l[p] = []),
                            (f.delegateCount = 0),
                            (d.setup && d.setup.call(e, r, h, a) !== !1) ||
                              (e.addEventListener && e.addEventListener(p, a))),
                          d.add &&
                            (d.add.call(e, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                          i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                          (ae.event.global[p] = !0));
                },
                remove: function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m,
                    g = Se.hasData(e) && Se.get(e);
                  if (g && (l = g.events)) {
                    for (t = (t || "").match(Ce) || [""], u = t.length; u--; )
                      if (
                        ((s = He.exec(t[u]) || []),
                        (p = m = s[1]),
                        (h = (s[2] || "").split(".").sort()),
                        p)
                      ) {
                        for (
                          d = ae.event.special[p] || {},
                            p = (r ? d.delegateType : d.bindType) || p,
                            f = l[p] || [],
                            s =
                              s[2] &&
                              new RegExp(
                                "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                              ),
                            a = o = f.length;
                          o--;

                        )
                          (c = f[o]),
                            (!i && m !== c.origType) ||
                              (n && n.guid !== c.guid) ||
                              (s && !s.test(c.namespace)) ||
                              (r &&
                                r !== c.selector &&
                                ("**" !== r || !c.selector)) ||
                              (f.splice(o, 1),
                              c.selector && f.delegateCount--,
                              d.remove && d.remove.call(e, c));
                        a &&
                          !f.length &&
                          ((d.teardown &&
                            d.teardown.call(e, h, g.handle) !== !1) ||
                            ae.removeEvent(e, p, g.handle),
                          delete l[p]);
                      } else
                        for (p in l) ae.event.remove(e, p + t[u], n, r, !0);
                    ae.isEmptyObject(l) && Se.remove(e, "handle events");
                  }
                },
                dispatch: function (e) {
                  e = ae.event.fix(e);
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a = [],
                    s = G.call(arguments),
                    l = (Se.get(this, "events") || {})[e.type] || [],
                    u = ae.event.special[e.type] || {};
                  if (
                    ((s[0] = e),
                    (e.delegateTarget = this),
                    !u.preDispatch || u.preDispatch.call(this, e) !== !1)
                  ) {
                    for (
                      a = ae.event.handlers.call(this, e, l), t = 0;
                      (i = a[t++]) && !e.isPropagationStopped();

                    )
                      for (
                        e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) &&
                        !e.isImmediatePropagationStopped();

                      )
                        (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                          ((e.handleObj = o),
                          (e.data = o.data),
                          (r = (
                            (ae.event.special[o.origType] || {}).handle ||
                            o.handler
                          ).apply(i.elem, s)),
                          void 0 !== r &&
                            (e.result = r) === !1 &&
                            (e.preventDefault(), e.stopPropagation()));
                    return (
                      u.postDispatch && u.postDispatch.call(this, e), e.result
                    );
                  }
                },
                handlers: function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a = [],
                    s = t.delegateCount,
                    l = e.target;
                  if (
                    s &&
                    l.nodeType &&
                    ("click" !== e.type || isNaN(e.button) || e.button < 1)
                  )
                    for (; l !== this; l = l.parentNode || this)
                      if (
                        1 === l.nodeType &&
                        (l.disabled !== !0 || "click" !== e.type)
                      ) {
                        for (r = [], n = 0; n < s; n++)
                          (o = t[n]),
                            (i = o.selector + " "),
                            void 0 === r[i] &&
                              (r[i] = o.needsContext
                                ? ae(i, this).index(l) > -1
                                : ae.find(i, this, null, [l]).length),
                            r[i] && r.push(o);
                        r.length && a.push({ elem: l, handlers: r });
                      }
                  return (
                    s < t.length &&
                      a.push({ elem: this, handlers: t.slice(s) }),
                    a
                  );
                },
                props:
                  "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                    " "
                  ),
                fixHooks: {},
                keyHooks: {
                  props: "char charCode key keyCode".split(" "),
                  filter: function (e, t) {
                    return (
                      null == e.which &&
                        (e.which = null != t.charCode ? t.charCode : t.keyCode),
                      e
                    );
                  },
                },
                mouseHooks: {
                  props:
                    "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                      " "
                    ),
                  filter: function (e, t) {
                    var n,
                      r,
                      i,
                      o = t.button;
                    return (
                      null == e.pageX &&
                        null != t.clientX &&
                        ((n = e.target.ownerDocument || Y),
                        (r = n.documentElement),
                        (i = n.body),
                        (e.pageX =
                          t.clientX +
                          ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                          ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                        (e.pageY =
                          t.clientY +
                          ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                          ((r && r.clientTop) || (i && i.clientTop) || 0))),
                      e.which ||
                        void 0 === o ||
                        (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                      e
                    );
                  },
                },
                fix: function (e) {
                  if (e[ae.expando]) return e;
                  var t,
                    n,
                    r,
                    i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                  for (
                    a ||
                      (this.fixHooks[i] = a =
                        qe.test(i)
                          ? this.mouseHooks
                          : Re.test(i)
                          ? this.keyHooks
                          : {}),
                      r = a.props ? this.props.concat(a.props) : this.props,
                      e = new ae.Event(o),
                      t = r.length;
                    t--;

                  )
                    (n = r[t]), (e[n] = o[n]);
                  return (
                    e.target || (e.target = Y),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    a.filter ? a.filter(e, o) : e
                  );
                },
                special: {
                  load: { noBubble: !0 },
                  focus: {
                    trigger: function () {
                      if (this !== g() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin",
                  },
                  blur: {
                    trigger: function () {
                      if (this === g() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                  },
                  click: {
                    trigger: function () {
                      if (
                        "checkbox" === this.type &&
                        this.click &&
                        ae.nodeName(this, "input")
                      )
                        return this.click(), !1;
                    },
                    _default: function (e) {
                      return ae.nodeName(e.target, "a");
                    },
                  },
                  beforeunload: {
                    postDispatch: function (e) {
                      void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                    },
                  },
                },
              }),
                (ae.removeEvent = function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n);
                }),
                (ae.Event = function (e, t) {
                  return this instanceof ae.Event
                    ? (e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            (void 0 === e.defaultPrevented &&
                              e.returnValue === !1)
                              ? h
                              : m))
                        : (this.type = e),
                      t && ae.extend(this, t),
                      (this.timeStamp = (e && e.timeStamp) || ae.now()),
                      void (this[ae.expando] = !0))
                    : new ae.Event(e, t);
                }),
                (ae.Event.prototype = {
                  constructor: ae.Event,
                  isDefaultPrevented: m,
                  isPropagationStopped: m,
                  isImmediatePropagationStopped: m,
                  isSimulated: !1,
                  preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = h),
                      e && !this.isSimulated && e.preventDefault();
                  },
                  stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = h),
                      e && !this.isSimulated && e.stopPropagation();
                  },
                  stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = h),
                      e && !this.isSimulated && e.stopImmediatePropagation(),
                      this.stopPropagation();
                  },
                }),
                ae.each(
                  {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                  },
                  function (e, t) {
                    ae.event.special[e] = {
                      delegateType: t,
                      bindType: t,
                      handle: function (e) {
                        var n,
                          r = this,
                          i = e.relatedTarget,
                          o = e.handleObj;
                        return (
                          (i && (i === r || ae.contains(r, i))) ||
                            ((e.type = o.origType),
                            (n = o.handler.apply(this, arguments)),
                            (e.type = t)),
                          n
                        );
                      },
                    };
                  }
                ),
                ae.fn.extend({
                  on: function (e, t, n, r) {
                    return v(this, e, t, n, r);
                  },
                  one: function (e, t, n, r) {
                    return v(this, e, t, n, r, 1);
                  },
                  off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)
                      return (
                        (r = e.handleObj),
                        ae(e.delegateTarget).off(
                          r.namespace
                            ? r.origType + "." + r.namespace
                            : r.origType,
                          r.selector,
                          r.handler
                        ),
                        this
                      );
                    if ("object" == typeof e) {
                      for (i in e) this.off(i, t, e[i]);
                      return this;
                    }
                    return (
                      (t !== !1 && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                      n === !1 && (n = m),
                      this.each(function () {
                        ae.event.remove(this, e, n, t);
                      })
                    );
                  },
                });
              var We =
                  /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                $e = /<script|<style|<link/i,
                Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ze = /^true\/(.*)/,
                Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
              ae.extend({
                htmlPrefilter: function (e) {
                  return e.replace(We, "<$1></$2>");
                },
                clone: function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.cloneNode(!0),
                    l = ae.contains(e.ownerDocument, e);
                  if (
                    !(
                      ie.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      ae.isXMLDoc(e)
                    )
                  )
                    for (a = d(s), o = d(e), r = 0, i = o.length; r < i; r++)
                      C(o[r], a[r]);
                  if (t)
                    if (n)
                      for (
                        o = o || d(e), a = a || d(s), r = 0, i = o.length;
                        r < i;
                        r++
                      )
                        x(o[r], a[r]);
                    else x(e, s);
                  return (
                    (a = d(s, "script")),
                    a.length > 0 && f(a, !l && d(e, "script")),
                    s
                  );
                },
                cleanData: function (e) {
                  for (
                    var t, n, r, i = ae.event.special, o = 0;
                    void 0 !== (n = e[o]);
                    o++
                  )
                    if (Ee(n)) {
                      if ((t = n[Se.expando])) {
                        if (t.events)
                          for (r in t.events)
                            i[r]
                              ? ae.event.remove(n, r)
                              : ae.removeEvent(n, r, t.handle);
                        n[Se.expando] = void 0;
                      }
                      n[Ae.expando] && (n[Ae.expando] = void 0);
                    }
                },
              }),
                ae.fn.extend({
                  domManip: T,
                  detach: function (e) {
                    return k(this, e, !0);
                  },
                  remove: function (e) {
                    return k(this, e);
                  },
                  text: function (e) {
                    return ke(
                      this,
                      function (e) {
                        return void 0 === e
                          ? ae.text(this)
                          : this.empty().each(function () {
                              (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  append: function () {
                    return T(this, arguments, function (e) {
                      if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                      ) {
                        var t = y(this, e);
                        t.appendChild(e);
                      }
                    });
                  },
                  prepend: function () {
                    return T(this, arguments, function (e) {
                      if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                      ) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild);
                      }
                    });
                  },
                  before: function () {
                    return T(this, arguments, function (e) {
                      this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                  },
                  after: function () {
                    return T(this, arguments, function (e) {
                      this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                    });
                  },
                  empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                      1 === e.nodeType &&
                        (ae.cleanData(d(e, !1)), (e.textContent = ""));
                    return this;
                  },
                  clone: function (e, t) {
                    return (
                      (e = null != e && e),
                      (t = null == t ? e : t),
                      this.map(function () {
                        return ae.clone(this, e, t);
                      })
                    );
                  },
                  html: function (e) {
                    return ke(
                      this,
                      function (e) {
                        var t = this[0] || {},
                          n = 0,
                          r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                          return t.innerHTML;
                        if (
                          "string" == typeof e &&
                          !$e.test(e) &&
                          !Fe[(Me.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                          e = ae.htmlPrefilter(e);
                          try {
                            for (; n < r; n++)
                              (t = this[n] || {}),
                                1 === t.nodeType &&
                                  (ae.cleanData(d(t, !1)), (t.innerHTML = e));
                            t = 0;
                          } catch (i) {}
                        }
                        t && this.empty().append(e);
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  replaceWith: function () {
                    var e = [];
                    return T(
                      this,
                      arguments,
                      function (t) {
                        var n = this.parentNode;
                        ae.inArray(this, e) < 0 &&
                          (ae.cleanData(d(this)), n && n.replaceChild(t, this));
                      },
                      e
                    );
                  },
                }),
                ae.each(
                  {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                  },
                  function (e, t) {
                    ae.fn[e] = function (e) {
                      for (
                        var n, r = [], i = ae(e), o = i.length - 1, a = 0;
                        a <= o;
                        a++
                      )
                        (n = a === o ? this : this.clone(!0)),
                          ae(i[a])[t](n),
                          J.apply(r, n.get());
                      return this.pushStack(r);
                    };
                  }
                );
              var Ke,
                Xe = { HTML: "block", BODY: "block" },
                Ve = /^margin/,
                Ye = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
                Ge = function (t) {
                  var n = t.ownerDocument.defaultView;
                  return (n && n.opener) || (n = e), n.getComputedStyle(t);
                },
                Qe = function (e, t, n, r) {
                  var i,
                    o,
                    a = {};
                  for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
                  i = n.apply(e, r || []);
                  for (o in t) e.style[o] = a[o];
                  return i;
                },
                Je = Y.documentElement;
              !(function () {
                function t() {
                  (s.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (s.innerHTML = ""),
                    Je.appendChild(a);
                  var t = e.getComputedStyle(s);
                  (n = "1%" !== t.top),
                    (o = "2px" === t.marginLeft),
                    (r = "4px" === t.width),
                    (s.style.marginRight = "50%"),
                    (i = "4px" === t.marginRight),
                    Je.removeChild(a);
                }
                var n,
                  r,
                  i,
                  o,
                  a = Y.createElement("div"),
                  s = Y.createElement("div");
                s.style &&
                  ((s.style.backgroundClip = "content-box"),
                  (s.cloneNode(!0).style.backgroundClip = ""),
                  (ie.clearCloneStyle =
                    "content-box" === s.style.backgroundClip),
                  (a.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                  a.appendChild(s),
                  ae.extend(ie, {
                    pixelPosition: function () {
                      return t(), n;
                    },
                    boxSizingReliable: function () {
                      return null == r && t(), r;
                    },
                    pixelMarginRight: function () {
                      return null == r && t(), i;
                    },
                    reliableMarginLeft: function () {
                      return null == r && t(), o;
                    },
                    reliableMarginRight: function () {
                      var t,
                        n = s.appendChild(Y.createElement("div"));
                      return (
                        (n.style.cssText = s.style.cssText =
                          "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (n.style.marginRight = n.style.width = "0"),
                        (s.style.width = "1px"),
                        Je.appendChild(a),
                        (t = !parseFloat(e.getComputedStyle(n).marginRight)),
                        Je.removeChild(a),
                        s.removeChild(n),
                        t
                      );
                    },
                  }));
              })();
              var et = /^(none|table(?!-c[ea]).+)/,
                tt = {
                  position: "absolute",
                  visibility: "hidden",
                  display: "block",
                },
                nt = { letterSpacing: "0", fontWeight: "400" },
                rt = ["Webkit", "O", "Moz", "ms"],
                it = Y.createElement("div").style;
              ae.extend({
                cssHooks: {
                  opacity: {
                    get: function (e, t) {
                      if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n;
                      }
                    },
                  },
                },
                cssNumber: {
                  animationIterationCount: !0,
                  columnCount: !0,
                  fillOpacity: !0,
                  flexGrow: !0,
                  flexShrink: !0,
                  fontWeight: !0,
                  lineHeight: !0,
                  opacity: !0,
                  order: !0,
                  orphans: !0,
                  widows: !0,
                  zIndex: !0,
                  zoom: !0,
                },
                cssProps: { float: "cssFloat" },
                style: function (e, t, n, r) {
                  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                      o,
                      a,
                      s = ae.camelCase(t),
                      l = e.style;
                    return (
                      (t = ae.cssProps[s] || (ae.cssProps[s] = _(s) || s)),
                      (a = ae.cssHooks[t] || ae.cssHooks[s]),
                      void 0 === n
                        ? a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                          ? i
                          : l[t]
                        : ((o = typeof n),
                          "string" === o &&
                            (i = De.exec(n)) &&
                            i[1] &&
                            ((n = c(e, t, i)), (o = "number")),
                          null != n &&
                            n === n &&
                            ("number" === o &&
                              (n +=
                                (i && i[3]) || (ae.cssNumber[s] ? "" : "px")),
                            ie.clearCloneStyle ||
                              "" !== n ||
                              0 !== t.indexOf("background") ||
                              (l[t] = "inherit"),
                            (a &&
                              "set" in a &&
                              void 0 === (n = a.set(e, n, r))) ||
                              (l[t] = n)),
                          void 0)
                    );
                  }
                },
                css: function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s = ae.camelCase(t);
                  return (
                    (t = ae.cssProps[s] || (ae.cssProps[s] = _(s) || s)),
                    (a = ae.cssHooks[t] || ae.cssHooks[s]),
                    a && "get" in a && (i = a.get(e, !0, n)),
                    void 0 === i && (i = A(e, t, r)),
                    "normal" === i && t in nt && (i = nt[t]),
                    "" === n || n
                      ? ((o = parseFloat(i)),
                        n === !0 || isFinite(o) ? o || 0 : i)
                      : i
                  );
                },
              }),
                ae.each(["height", "width"], function (e, t) {
                  ae.cssHooks[t] = {
                    get: function (e, n, r) {
                      if (n)
                        return et.test(ae.css(e, "display")) &&
                          0 === e.offsetWidth
                          ? Qe(e, tt, function () {
                              return I(e, t, r);
                            })
                          : I(e, t, r);
                    },
                    set: function (e, n, r) {
                      var i,
                        o = r && Ge(e),
                        a =
                          r &&
                          D(
                            e,
                            t,
                            r,
                            "border-box" === ae.css(e, "boxSizing", !1, o),
                            o
                          );
                      return (
                        a &&
                          (i = De.exec(n)) &&
                          "px" !== (i[3] || "px") &&
                          ((e.style[t] = n), (n = ae.css(e, t))),
                        N(e, n, a)
                      );
                    },
                  };
                }),
                (ae.cssHooks.marginLeft = z(
                  ie.reliableMarginLeft,
                  function (e, t) {
                    if (t)
                      return (
                        (parseFloat(A(e, "marginLeft")) ||
                          e.getBoundingClientRect().left -
                            Qe(e, { marginLeft: 0 }, function () {
                              return e.getBoundingClientRect().left;
                            })) + "px"
                      );
                  }
                )),
                (ae.cssHooks.marginRight = z(
                  ie.reliableMarginRight,
                  function (e, t) {
                    if (t)
                      return Qe(e, { display: "inline-block" }, A, [
                        e,
                        "marginRight",
                      ]);
                  }
                )),
                ae.each(
                  { margin: "", padding: "", border: "Width" },
                  function (e, t) {
                    (ae.cssHooks[e + t] = {
                      expand: function (n) {
                        for (
                          var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                          r < 4;
                          r++
                        )
                          i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                      },
                    }),
                      Ve.test(e) || (ae.cssHooks[e + t].set = N);
                  }
                ),
                ae.fn.extend({
                  css: function (e, t) {
                    return ke(
                      this,
                      function (e, t, n) {
                        var r,
                          i,
                          o = {},
                          a = 0;
                        if (ae.isArray(t)) {
                          for (r = Ge(e), i = t.length; a < i; a++)
                            o[t[a]] = ae.css(e, t[a], !1, r);
                          return o;
                        }
                        return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t);
                      },
                      e,
                      t,
                      arguments.length > 1
                    );
                  },
                  show: function () {
                    return L(this, !0);
                  },
                  hide: function () {
                    return L(this);
                  },
                  toggle: function (e) {
                    return "boolean" == typeof e
                      ? e
                        ? this.show()
                        : this.hide()
                      : this.each(function () {
                          Le(this) ? ae(this).show() : ae(this).hide();
                        });
                  },
                }),
                (ae.Tween = O),
                (O.prototype = {
                  constructor: O,
                  init: function (e, t, n, r, i, o) {
                    (this.elem = e),
                      (this.prop = n),
                      (this.easing = i || ae.easing._default),
                      (this.options = t),
                      (this.start = this.now = this.cur()),
                      (this.end = r),
                      (this.unit = o || (ae.cssNumber[n] ? "" : "px"));
                  },
                  cur: function () {
                    var e = O.propHooks[this.prop];
                    return e && e.get
                      ? e.get(this)
                      : O.propHooks._default.get(this);
                  },
                  run: function (e) {
                    var t,
                      n = O.propHooks[this.prop];
                    return (
                      this.options.duration
                        ? (this.pos = t =
                            ae.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                            ))
                        : (this.pos = t = e),
                      (this.now = (this.end - this.start) * t + this.start),
                      this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                      n && n.set ? n.set(this) : O.propHooks._default.set(this),
                      this
                    );
                  },
                }),
                (O.prototype.init.prototype = O.prototype),
                (O.propHooks = {
                  _default: {
                    get: function (e) {
                      var t;
                      return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : ((t = ae.css(e.elem, e.prop, "")),
                          t && "auto" !== t ? t : 0);
                    },
                    set: function (e) {
                      ae.fx.step[e.prop]
                        ? ae.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (null == e.elem.style[ae.cssProps[e.prop]] &&
                            !ae.cssHooks[e.prop])
                        ? (e.elem[e.prop] = e.now)
                        : ae.style(e.elem, e.prop, e.now + e.unit);
                    },
                  },
                }),
                (O.propHooks.scrollTop = O.propHooks.scrollLeft =
                  {
                    set: function (e) {
                      e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                    },
                  }),
                (ae.easing = {
                  linear: function (e) {
                    return e;
                  },
                  swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  _default: "swing",
                }),
                (ae.fx = O.prototype.init),
                (ae.fx.step = {});
              var ot,
                at,
                st = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;
              (ae.Animation = ae.extend(q, {
                tweeners: {
                  "*": [
                    function (e, t) {
                      var n = this.createTween(e, t);
                      return c(n.elem, e, De.exec(t), n), n;
                    },
                  ],
                },
                tweener: function (e, t) {
                  ae.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ce));
                  for (var n, r = 0, i = e.length; r < i; r++)
                    (n = e[r]),
                      (q.tweeners[n] = q.tweeners[n] || []),
                      q.tweeners[n].unshift(t);
                },
                prefilters: [P],
                prefilter: function (e, t) {
                  t ? q.prefilters.unshift(e) : q.prefilters.push(e);
                },
              })),
                (ae.speed = function (e, t, n) {
                  var r =
                    e && "object" == typeof e
                      ? ae.extend({}, e)
                      : {
                          complete: n || (!n && t) || (ae.isFunction(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !ae.isFunction(t) && t),
                        };
                  return (
                    (r.duration = ae.fx.off
                      ? 0
                      : "number" == typeof r.duration
                      ? r.duration
                      : r.duration in ae.fx.speeds
                      ? ae.fx.speeds[r.duration]
                      : ae.fx.speeds._default),
                    (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                      ae.isFunction(r.old) && r.old.call(this),
                        r.queue && ae.dequeue(this, r.queue);
                    }),
                    r
                  );
                }),
                ae.fn.extend({
                  fadeTo: function (e, t, n, r) {
                    return this.filter(Le)
                      .css("opacity", 0)
                      .show()
                      .end()
                      .animate({ opacity: t }, e, n, r);
                  },
                  animate: function (e, t, n, r) {
                    var i = ae.isEmptyObject(e),
                      o = ae.speed(t, n, r),
                      a = function () {
                        var t = q(this, ae.extend({}, e), o);
                        (i || Se.get(this, "finish")) && t.stop(!0);
                      };
                    return (
                      (a.finish = a),
                      i || o.queue === !1
                        ? this.each(a)
                        : this.queue(o.queue, a)
                    );
                  },
                  stop: function (e, t, n) {
                    var r = function (e) {
                      var t = e.stop;
                      delete e.stop, t(n);
                    };
                    return (
                      "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                      t && e !== !1 && this.queue(e || "fx", []),
                      this.each(function () {
                        var t = !0,
                          i = null != e && e + "queueHooks",
                          o = ae.timers,
                          a = Se.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                          for (i in a)
                            a[i] && a[i].stop && lt.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                          o[i].elem !== this ||
                            (null != e && o[i].queue !== e) ||
                            (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || ae.dequeue(this, e);
                      })
                    );
                  },
                  finish: function (e) {
                    return (
                      e !== !1 && (e = e || "fx"),
                      this.each(function () {
                        var t,
                          n = Se.get(this),
                          r = n[e + "queue"],
                          i = n[e + "queueHooks"],
                          o = ae.timers,
                          a = r ? r.length : 0;
                        for (
                          n.finish = !0,
                            ae.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length;
                          t--;

                        )
                          o[t].elem === this &&
                            o[t].queue === e &&
                            (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)
                          r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                      })
                    );
                  },
                }),
                ae.each(["toggle", "show", "hide"], function (e, t) {
                  var n = ae.fn[t];
                  ae.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e
                      ? n.apply(this, arguments)
                      : this.animate(j(t, !0), e, r, i);
                  };
                }),
                ae.each(
                  {
                    slideDown: j("show"),
                    slideUp: j("hide"),
                    slideToggle: j("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                  },
                  function (e, t) {
                    ae.fn[e] = function (e, n, r) {
                      return this.animate(t, e, n, r);
                    };
                  }
                ),
                (ae.timers = []),
                (ae.fx.tick = function () {
                  var e,
                    t = 0,
                    n = ae.timers;
                  for (ot = ae.now(); t < n.length; t++)
                    (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
                  n.length || ae.fx.stop(), (ot = void 0);
                }),
                (ae.fx.timer = function (e) {
                  ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop();
                }),
                (ae.fx.interval = 13),
                (ae.fx.start = function () {
                  at || (at = e.setInterval(ae.fx.tick, ae.fx.interval));
                }),
                (ae.fx.stop = function () {
                  e.clearInterval(at), (at = null);
                }),
                (ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (ae.fn.delay = function (t, n) {
                  return (
                    (t = ae.fx ? ae.fx.speeds[t] || t : t),
                    (n = n || "fx"),
                    this.queue(n, function (n, r) {
                      var i = e.setTimeout(n, t);
                      r.stop = function () {
                        e.clearTimeout(i);
                      };
                    })
                  );
                }),
                (function () {
                  var e = Y.createElement("input"),
                    t = Y.createElement("select"),
                    n = t.appendChild(Y.createElement("option"));
                  (e.type = "checkbox"),
                    (ie.checkOn = "" !== e.value),
                    (ie.optSelected = n.selected),
                    (t.disabled = !0),
                    (ie.optDisabled = !n.disabled),
                    (e = Y.createElement("input")),
                    (e.value = "t"),
                    (e.type = "radio"),
                    (ie.radioValue = "t" === e.value);
                })();
              var ut,
                ct = ae.expr.attrHandle;
              ae.fn.extend({
                attr: function (e, t) {
                  return ke(this, ae.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                  return this.each(function () {
                    ae.removeAttr(this, e);
                  });
                },
              }),
                ae.extend({
                  attr: function (e, t, n) {
                    var r,
                      i,
                      o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                      return "undefined" == typeof e.getAttribute
                        ? ae.prop(e, t, n)
                        : ((1 === o && ae.isXMLDoc(e)) ||
                            ((t = t.toLowerCase()),
                            (i =
                              ae.attrHooks[t] ||
                              (ae.expr.match.bool.test(t) ? ut : void 0))),
                          void 0 !== n
                            ? null === n
                              ? void ae.removeAttr(e, t)
                              : i &&
                                "set" in i &&
                                void 0 !== (r = i.set(e, n, t))
                              ? r
                              : (e.setAttribute(t, n + ""), n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : ((r = ae.find.attr(e, t)),
                              null == r ? void 0 : r));
                  },
                  attrHooks: {
                    type: {
                      set: function (e, t) {
                        if (
                          !ie.radioValue &&
                          "radio" === t &&
                          ae.nodeName(e, "input")
                        ) {
                          var n = e.value;
                          return (
                            e.setAttribute("type", t), n && (e.value = n), t
                          );
                        }
                      },
                    },
                  },
                  removeAttr: function (e, t) {
                    var n,
                      r,
                      i = 0,
                      o = t && t.match(Ce);
                    if (o && 1 === e.nodeType)
                      for (; (n = o[i++]); )
                        (r = ae.propFix[n] || n),
                          ae.expr.match.bool.test(n) && (e[r] = !1),
                          e.removeAttribute(n);
                  },
                }),
                (ut = {
                  set: function (e, t, n) {
                    return (
                      t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
                    );
                  },
                }),
                ae.each(
                  ae.expr.match.bool.source.match(/\w+/g),
                  function (e, t) {
                    var n = ct[t] || ae.find.attr;
                    ct[t] = function (e, t, r) {
                      var i, o;
                      return (
                        r ||
                          ((o = ct[t]),
                          (ct[t] = i),
                          (i = null != n(e, t, r) ? t.toLowerCase() : null),
                          (ct[t] = o)),
                        i
                      );
                    };
                  }
                );
              var dt = /^(?:input|select|textarea|button)$/i,
                ft = /^(?:a|area)$/i;
              ae.fn.extend({
                prop: function (e, t) {
                  return ke(this, ae.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                  return this.each(function () {
                    delete this[ae.propFix[e] || e];
                  });
                },
              }),
                ae.extend({
                  prop: function (e, t, n) {
                    var r,
                      i,
                      o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                      return (
                        (1 === o && ae.isXMLDoc(e)) ||
                          ((t = ae.propFix[t] || t), (i = ae.propHooks[t])),
                        void 0 !== n
                          ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : (e[t] = n)
                          : i && "get" in i && null !== (r = i.get(e, t))
                          ? r
                          : e[t]
                      );
                  },
                  propHooks: {
                    tabIndex: {
                      get: function (e) {
                        var t = ae.find.attr(e, "tabindex");
                        return t
                          ? parseInt(t, 10)
                          : dt.test(e.nodeName) ||
                            (ft.test(e.nodeName) && e.href)
                          ? 0
                          : -1;
                      },
                    },
                  },
                  propFix: { for: "htmlFor", class: "className" },
                }),
                ie.optSelected ||
                  (ae.propHooks.selected = {
                    get: function (e) {
                      var t = e.parentNode;
                      return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                      );
                    },
                    set: function (e) {
                      var t = e.parentNode;
                      t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                    },
                  }),
                ae.each(
                  [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                  ],
                  function () {
                    ae.propFix[this.toLowerCase()] = this;
                  }
                );
              var pt = /[\t\r\n\f]/g;
              ae.fn.extend({
                addClass: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    l = 0;
                  if (ae.isFunction(e))
                    return this.each(function (t) {
                      ae(this).addClass(e.call(this, t, H(this)));
                    });
                  if ("string" == typeof e && e)
                    for (t = e.match(Ce) || []; (n = this[l++]); )
                      if (
                        ((i = H(n)),
                        (r =
                          1 === n.nodeType && (" " + i + " ").replace(pt, " ")))
                      ) {
                        for (a = 0; (o = t[a++]); )
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        (s = ae.trim(r)), i !== s && n.setAttribute("class", s);
                      }
                  return this;
                },
                removeClass: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    l = 0;
                  if (ae.isFunction(e))
                    return this.each(function (t) {
                      ae(this).removeClass(e.call(this, t, H(this)));
                    });
                  if (!arguments.length) return this.attr("class", "");
                  if ("string" == typeof e && e)
                    for (t = e.match(Ce) || []; (n = this[l++]); )
                      if (
                        ((i = H(n)),
                        (r =
                          1 === n.nodeType && (" " + i + " ").replace(pt, " ")))
                      ) {
                        for (a = 0; (o = t[a++]); )
                          for (; r.indexOf(" " + o + " ") > -1; )
                            r = r.replace(" " + o + " ", " ");
                        (s = ae.trim(r)), i !== s && n.setAttribute("class", s);
                      }
                  return this;
                },
                toggleClass: function (e, t) {
                  var n = typeof e;
                  return "boolean" == typeof t && "string" === n
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : ae.isFunction(e)
                    ? this.each(function (n) {
                        ae(this).toggleClass(e.call(this, n, H(this), t), t);
                      })
                    : this.each(function () {
                        var t, r, i, o;
                        if ("string" === n)
                          for (
                            r = 0, i = ae(this), o = e.match(Ce) || [];
                            (t = o[r++]);

                          )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                          (void 0 !== e && "boolean" !== n) ||
                            ((t = H(this)),
                            t && Se.set(this, "__className__", t),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                t || e === !1
                                  ? ""
                                  : Se.get(this, "__className__") || ""
                              ));
                      });
                },
                hasClass: function (e) {
                  var t,
                    n,
                    r = 0;
                  for (t = " " + e + " "; (n = this[r++]); )
                    if (
                      1 === n.nodeType &&
                      (" " + H(n) + " ").replace(pt, " ").indexOf(t) > -1
                    )
                      return !0;
                  return !1;
                },
              });
              var ht = /\r/g,
                mt = /[\x20\t\r\n\f]+/g;
              ae.fn.extend({
                val: function (e) {
                  var t,
                    n,
                    r,
                    i = this[0];
                  {
                    if (arguments.length)
                      return (
                        (r = ae.isFunction(e)),
                        this.each(function (n) {
                          var i;
                          1 === this.nodeType &&
                            ((i = r ? e.call(this, n, ae(this).val()) : e),
                            null == i
                              ? (i = "")
                              : "number" == typeof i
                              ? (i += "")
                              : ae.isArray(i) &&
                                (i = ae.map(i, function (e) {
                                  return null == e ? "" : e + "";
                                })),
                            (t =
                              ae.valHooks[this.type] ||
                              ae.valHooks[this.nodeName.toLowerCase()]),
                            (t &&
                              "set" in t &&
                              void 0 !== t.set(this, i, "value")) ||
                              (this.value = i));
                        })
                      );
                    if (i)
                      return (
                        (t =
                          ae.valHooks[i.type] ||
                          ae.valHooks[i.nodeName.toLowerCase()]),
                        t && "get" in t && void 0 !== (n = t.get(i, "value"))
                          ? n
                          : ((n = i.value),
                            "string" == typeof n
                              ? n.replace(ht, "")
                              : null == n
                              ? ""
                              : n)
                      );
                  }
                },
              }),
                ae.extend({
                  valHooks: {
                    option: {
                      get: function (e) {
                        var t = ae.find.attr(e, "value");
                        return null != t
                          ? t
                          : ae.trim(ae.text(e)).replace(mt, " ");
                      },
                    },
                    select: {
                      get: function (e) {
                        for (
                          var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || i < 0,
                            a = o ? null : [],
                            s = o ? i + 1 : r.length,
                            l = i < 0 ? s : o ? i : 0;
                          l < s;
                          l++
                        )
                          if (
                            ((n = r[l]),
                            (n.selected || l === i) &&
                              (ie.optDisabled
                                ? !n.disabled
                                : null === n.getAttribute("disabled")) &&
                              (!n.parentNode.disabled ||
                                !ae.nodeName(n.parentNode, "optgroup")))
                          ) {
                            if (((t = ae(n).val()), o)) return t;
                            a.push(t);
                          }
                        return a;
                      },
                      set: function (e, t) {
                        for (
                          var n,
                            r,
                            i = e.options,
                            o = ae.makeArray(t),
                            a = i.length;
                          a--;

                        )
                          (r = i[a]),
                            (r.selected =
                              ae.inArray(ae.valHooks.option.get(r), o) > -1) &&
                              (n = !0);
                        return n || (e.selectedIndex = -1), o;
                      },
                    },
                  },
                }),
                ae.each(["radio", "checkbox"], function () {
                  (ae.valHooks[this] = {
                    set: function (e, t) {
                      if (ae.isArray(t))
                        return (e.checked = ae.inArray(ae(e).val(), t) > -1);
                    },
                  }),
                    ie.checkOn ||
                      (ae.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                          ? "on"
                          : e.value;
                      });
                });
              var gt = /^(?:focusinfocus|focusoutblur)$/;
              ae.extend(ae.event, {
                trigger: function (t, n, r, i) {
                  var o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d,
                    f = [r || Y],
                    p = re.call(t, "type") ? t.type : t,
                    h = re.call(t, "namespace") ? t.namespace.split(".") : [];
                  if (
                    ((a = s = r = r || Y),
                    3 !== r.nodeType &&
                      8 !== r.nodeType &&
                      !gt.test(p + ae.event.triggered) &&
                      (p.indexOf(".") > -1 &&
                        ((h = p.split(".")), (p = h.shift()), h.sort()),
                      (u = p.indexOf(":") < 0 && "on" + p),
                      (t = t[ae.expando]
                        ? t
                        : new ae.Event(p, "object" == typeof t && t)),
                      (t.isTrigger = i ? 2 : 3),
                      (t.namespace = h.join(".")),
                      (t.rnamespace = t.namespace
                        ? new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                      (t.result = void 0),
                      t.target || (t.target = r),
                      (n = null == n ? [t] : ae.makeArray(n, [t])),
                      (d = ae.event.special[p] || {}),
                      i || !d.trigger || d.trigger.apply(r, n) !== !1))
                  ) {
                    if (!i && !d.noBubble && !ae.isWindow(r)) {
                      for (
                        l = d.delegateType || p,
                          gt.test(l + p) || (a = a.parentNode);
                        a;
                        a = a.parentNode
                      )
                        f.push(a), (s = a);
                      s === (r.ownerDocument || Y) &&
                        f.push(s.defaultView || s.parentWindow || e);
                    }
                    for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                      (t.type = o > 1 ? l : d.bindType || p),
                        (c =
                          (Se.get(a, "events") || {})[t.type] &&
                          Se.get(a, "handle")),
                        c && c.apply(a, n),
                        (c = u && a[u]),
                        c &&
                          c.apply &&
                          Ee(a) &&
                          ((t.result = c.apply(a, n)),
                          t.result === !1 && t.preventDefault());
                    return (
                      (t.type = p),
                      i ||
                        t.isDefaultPrevented() ||
                        (d._default && d._default.apply(f.pop(), n) !== !1) ||
                        !Ee(r) ||
                        (u &&
                          ae.isFunction(r[p]) &&
                          !ae.isWindow(r) &&
                          ((s = r[u]),
                          s && (r[u] = null),
                          (ae.event.triggered = p),
                          r[p](),
                          (ae.event.triggered = void 0),
                          s && (r[u] = s))),
                      t.result
                    );
                  }
                },
                simulate: function (e, t, n) {
                  var r = ae.extend(new ae.Event(), n, {
                    type: e,
                    isSimulated: !0,
                  });
                  ae.event.trigger(r, null, t);
                },
              }),
                ae.fn.extend({
                  trigger: function (e, t) {
                    return this.each(function () {
                      ae.event.trigger(e, t, this);
                    });
                  },
                  triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return ae.event.trigger(e, t, n, !0);
                  },
                }),
                ae.each(
                  "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                    " "
                  ),
                  function (e, t) {
                    ae.fn[t] = function (e, n) {
                      return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                    };
                  }
                ),
                ae.fn.extend({
                  hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                  },
                }),
                (ie.focusin = "onfocusin" in e),
                ie.focusin ||
                  ae.each(
                    { focus: "focusin", blur: "focusout" },
                    function (e, t) {
                      var n = function (e) {
                        ae.event.simulate(t, e.target, ae.event.fix(e));
                      };
                      ae.event.special[t] = {
                        setup: function () {
                          var r = this.ownerDocument || this,
                            i = Se.access(r, t);
                          i || r.addEventListener(e, n, !0),
                            Se.access(r, t, (i || 0) + 1);
                        },
                        teardown: function () {
                          var r = this.ownerDocument || this,
                            i = Se.access(r, t) - 1;
                          i
                            ? Se.access(r, t, i)
                            : (r.removeEventListener(e, n, !0),
                              Se.remove(r, t));
                        },
                      };
                    }
                  );
              var vt = e.location,
                yt = ae.now(),
                wt = /\?/;
              (ae.parseJSON = function (e) {
                return JSON.parse(e + "");
              }),
                (ae.parseXML = function (t) {
                  var n;
                  if (!t || "string" != typeof t) return null;
                  try {
                    n = new e.DOMParser().parseFromString(t, "text/xml");
                  } catch (r) {
                    n = void 0;
                  }
                  return (
                    (n && !n.getElementsByTagName("parsererror").length) ||
                      ae.error("Invalid XML: " + t),
                    n
                  );
                });
              var bt = /#.*$/,
                xt = /([?&])_=[^&]*/,
                Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Tt =
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                kt = /^(?:GET|HEAD)$/,
                Et = /^\/\//,
                St = {},
                At = {},
                zt = "*/".concat("*"),
                _t = Y.createElement("a");
              (_t.href = vt.href),
                ae.extend({
                  active: 0,
                  lastModified: {},
                  etag: {},
                  ajaxSettings: {
                    url: vt.href,
                    type: "GET",
                    isLocal: Tt.test(vt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType:
                      "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                      "*": zt,
                      text: "text/plain",
                      html: "text/html",
                      xml: "application/xml, text/xml",
                      json: "application/json, text/javascript",
                    },
                    contents: {
                      xml: /\bxml\b/,
                      html: /\bhtml/,
                      json: /\bjson\b/,
                    },
                    responseFields: {
                      xml: "responseXML",
                      text: "responseText",
                      json: "responseJSON",
                    },
                    converters: {
                      "* text": String,
                      "text html": !0,
                      "text json": ae.parseJSON,
                      "text xml": ae.parseXML,
                    },
                    flatOptions: { url: !0, context: !0 },
                  },
                  ajaxSetup: function (e, t) {
                    return t
                      ? B(B(e, ae.ajaxSettings), t)
                      : B(ae.ajaxSettings, e);
                  },
                  ajaxPrefilter: W(St),
                  ajaxTransport: W(At),
                  ajax: function (t, n) {
                    function r(t, n, r, s) {
                      var u,
                        d,
                        y,
                        w,
                        x,
                        T = n;
                      2 !== b &&
                        ((b = 2),
                        l && e.clearTimeout(l),
                        (i = void 0),
                        (a = s || ""),
                        (C.readyState = t > 0 ? 4 : 0),
                        (u = (t >= 200 && t < 300) || 304 === t),
                        r && (w = Z(f, C, r)),
                        (w = U(f, w, C, u)),
                        u
                          ? (f.ifModified &&
                              ((x = C.getResponseHeader("Last-Modified")),
                              x && (ae.lastModified[o] = x),
                              (x = C.getResponseHeader("etag")),
                              x && (ae.etag[o] = x)),
                            204 === t || "HEAD" === f.type
                              ? (T = "nocontent")
                              : 304 === t
                              ? (T = "notmodified")
                              : ((T = w.state),
                                (d = w.data),
                                (y = w.error),
                                (u = !y)))
                          : ((y = T),
                            (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                        (C.status = t),
                        (C.statusText = (n || T) + ""),
                        u
                          ? m.resolveWith(p, [d, T, C])
                          : m.rejectWith(p, [C, T, y]),
                        C.statusCode(v),
                        (v = void 0),
                        c &&
                          h.trigger(u ? "ajaxSuccess" : "ajaxError", [
                            C,
                            f,
                            u ? d : y,
                          ]),
                        g.fireWith(p, [C, T]),
                        c &&
                          (h.trigger("ajaxComplete", [C, f]),
                          --ae.active || ae.event.trigger("ajaxStop")));
                    }
                    "object" == typeof t && ((n = t), (t = void 0)),
                      (n = n || {});
                    var i,
                      o,
                      a,
                      s,
                      l,
                      u,
                      c,
                      d,
                      f = ae.ajaxSetup({}, n),
                      p = f.context || f,
                      h =
                        f.context && (p.nodeType || p.jquery)
                          ? ae(p)
                          : ae.event,
                      m = ae.Deferred(),
                      g = ae.Callbacks("once memory"),
                      v = f.statusCode || {},
                      y = {},
                      w = {},
                      b = 0,
                      x = "canceled",
                      C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                          var t;
                          if (2 === b) {
                            if (!s)
                              for (s = {}; (t = Ct.exec(a)); )
                                s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()];
                          }
                          return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                          return 2 === b ? a : null;
                        },
                        setRequestHeader: function (e, t) {
                          var n = e.toLowerCase();
                          return (
                            b || ((e = w[n] = w[n] || e), (y[e] = t)), this
                          );
                        },
                        overrideMimeType: function (e) {
                          return b || (f.mimeType = e), this;
                        },
                        statusCode: function (e) {
                          var t;
                          if (e)
                            if (b < 2) for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                          return this;
                        },
                        abort: function (e) {
                          var t = e || x;
                          return i && i.abort(t), r(0, t), this;
                        },
                      };
                    if (
                      ((m.promise(C).complete = g.add),
                      (C.success = C.done),
                      (C.error = C.fail),
                      (f.url = ((t || f.url || vt.href) + "")
                        .replace(bt, "")
                        .replace(Et, vt.protocol + "//")),
                      (f.type = n.method || n.type || f.method || f.type),
                      (f.dataTypes = ae
                        .trim(f.dataType || "*")
                        .toLowerCase()
                        .match(Ce) || [""]),
                      null == f.crossDomain)
                    ) {
                      u = Y.createElement("a");
                      try {
                        (u.href = f.url),
                          (u.href = u.href),
                          (f.crossDomain =
                            _t.protocol + "//" + _t.host !=
                            u.protocol + "//" + u.host);
                      } catch (T) {
                        f.crossDomain = !0;
                      }
                    }
                    if (
                      (f.data &&
                        f.processData &&
                        "string" != typeof f.data &&
                        (f.data = ae.param(f.data, f.traditional)),
                      $(St, f, n, C),
                      2 === b)
                    )
                      return C;
                    (c = ae.event && f.global),
                      c && 0 === ae.active++ && ae.event.trigger("ajaxStart"),
                      (f.type = f.type.toUpperCase()),
                      (f.hasContent = !kt.test(f.type)),
                      (o = f.url),
                      f.hasContent ||
                        (f.data &&
                          ((o = f.url += (wt.test(o) ? "&" : "?") + f.data),
                          delete f.data),
                        f.cache === !1 &&
                          (f.url = xt.test(o)
                            ? o.replace(xt, "$1_=" + yt++)
                            : o + (wt.test(o) ? "&" : "?") + "_=" + yt++)),
                      f.ifModified &&
                        (ae.lastModified[o] &&
                          C.setRequestHeader(
                            "If-Modified-Since",
                            ae.lastModified[o]
                          ),
                        ae.etag[o] &&
                          C.setRequestHeader("If-None-Match", ae.etag[o])),
                      ((f.data && f.hasContent && f.contentType !== !1) ||
                        n.contentType) &&
                        C.setRequestHeader("Content-Type", f.contentType),
                      C.setRequestHeader(
                        "Accept",
                        f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                          ? f.accepts[f.dataTypes[0]] +
                              ("*" !== f.dataTypes[0]
                                ? ", " + zt + "; q=0.01"
                                : "")
                          : f.accepts["*"]
                      );
                    for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
                    if (
                      f.beforeSend &&
                      (f.beforeSend.call(p, C, f) === !1 || 2 === b)
                    )
                      return C.abort();
                    x = "abort";
                    for (d in { success: 1, error: 1, complete: 1 }) C[d](f[d]);
                    if ((i = $(At, f, n, C))) {
                      if (
                        ((C.readyState = 1),
                        c && h.trigger("ajaxSend", [C, f]),
                        2 === b)
                      )
                        return C;
                      f.async &&
                        f.timeout > 0 &&
                        (l = e.setTimeout(function () {
                          C.abort("timeout");
                        }, f.timeout));
                      try {
                        (b = 1), i.send(y, r);
                      } catch (T) {
                        if (!(b < 2)) throw T;
                        r(-1, T);
                      }
                    } else r(-1, "No Transport");
                    return C;
                  },
                  getJSON: function (e, t, n) {
                    return ae.get(e, t, n, "json");
                  },
                  getScript: function (e, t) {
                    return ae.get(e, void 0, t, "script");
                  },
                }),
                ae.each(["get", "post"], function (e, t) {
                  ae[t] = function (e, n, r, i) {
                    return (
                      ae.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                      ae.ajax(
                        ae.extend(
                          { url: e, type: t, dataType: i, data: n, success: r },
                          ae.isPlainObject(e) && e
                        )
                      )
                    );
                  };
                }),
                (ae._evalUrl = function (e) {
                  return ae.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0,
                  });
                }),
                ae.fn.extend({
                  wrapAll: function (e) {
                    var t;
                    return ae.isFunction(e)
                      ? this.each(function (t) {
                          ae(this).wrapAll(e.call(this, t));
                        })
                      : (this[0] &&
                          ((t = ae(e, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && t.insertBefore(this[0]),
                          t
                            .map(function () {
                              for (var e = this; e.firstElementChild; )
                                e = e.firstElementChild;
                              return e;
                            })
                            .append(this)),
                        this);
                  },
                  wrapInner: function (e) {
                    return ae.isFunction(e)
                      ? this.each(function (t) {
                          ae(this).wrapInner(e.call(this, t));
                        })
                      : this.each(function () {
                          var t = ae(this),
                            n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                        });
                  },
                  wrap: function (e) {
                    var t = ae.isFunction(e);
                    return this.each(function (n) {
                      ae(this).wrapAll(t ? e.call(this, n) : e);
                    });
                  },
                  unwrap: function () {
                    return this.parent()
                      .each(function () {
                        ae.nodeName(this, "body") ||
                          ae(this).replaceWith(this.childNodes);
                      })
                      .end();
                  },
                }),
                (ae.expr.filters.hidden = function (e) {
                  return !ae.expr.filters.visible(e);
                }),
                (ae.expr.filters.visible = function (e) {
                  return (
                    e.offsetWidth > 0 ||
                    e.offsetHeight > 0 ||
                    e.getClientRects().length > 0
                  );
                });
              var Nt = /%20/g,
                Dt = /\[\]$/,
                It = /\r?\n/g,
                Lt = /^(?:submit|button|image|reset|file)$/i,
                Ot = /^(?:input|select|textarea|keygen)/i;
              (ae.param = function (e, t) {
                var n,
                  r = [],
                  i = function (e, t) {
                    (t = ae.isFunction(t) ? t() : null == t ? "" : t),
                      (r[r.length] =
                        encodeURIComponent(e) + "=" + encodeURIComponent(t));
                  };
                if (
                  (void 0 === t &&
                    (t = ae.ajaxSettings && ae.ajaxSettings.traditional),
                  ae.isArray(e) || (e.jquery && !ae.isPlainObject(e)))
                )
                  ae.each(e, function () {
                    i(this.name, this.value);
                  });
                else for (n in e) K(n, e[n], t, i);
                return r.join("&").replace(Nt, "+");
              }),
                ae.fn.extend({
                  serialize: function () {
                    return ae.param(this.serializeArray());
                  },
                  serializeArray: function () {
                    return this.map(function () {
                      var e = ae.prop(this, "elements");
                      return e ? ae.makeArray(e) : this;
                    })
                      .filter(function () {
                        var e = this.type;
                        return (
                          this.name &&
                          !ae(this).is(":disabled") &&
                          Ot.test(this.nodeName) &&
                          !Lt.test(e) &&
                          (this.checked || !Oe.test(e))
                        );
                      })
                      .map(function (e, t) {
                        var n = ae(this).val();
                        return null == n
                          ? null
                          : ae.isArray(n)
                          ? ae.map(n, function (e) {
                              return {
                                name: t.name,
                                value: e.replace(It, "\r\n"),
                              };
                            })
                          : { name: t.name, value: n.replace(It, "\r\n") };
                      })
                      .get();
                  },
                }),
                (ae.ajaxSettings.xhr = function () {
                  try {
                    return new e.XMLHttpRequest();
                  } catch (t) {}
                });
              var Mt = { 0: 200, 1223: 204 },
                jt = ae.ajaxSettings.xhr();
              (ie.cors = !!jt && "withCredentials" in jt),
                (ie.ajax = jt = !!jt),
                ae.ajaxTransport(function (t) {
                  var n, r;
                  if (ie.cors || (jt && !t.crossDomain))
                    return {
                      send: function (i, o) {
                        var a,
                          s = t.xhr();
                        if (
                          (s.open(
                            t.type,
                            t.url,
                            t.async,
                            t.username,
                            t.password
                          ),
                          t.xhrFields)
                        )
                          for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType &&
                          s.overrideMimeType &&
                          s.overrideMimeType(t.mimeType),
                          t.crossDomain ||
                            i["X-Requested-With"] ||
                            (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                          return function () {
                            n &&
                              ((n =
                                r =
                                s.onload =
                                s.onerror =
                                s.onabort =
                                s.onreadystatechange =
                                  null),
                              "abort" === e
                                ? s.abort()
                                : "error" === e
                                ? "number" != typeof s.status
                                  ? o(0, "error")
                                  : o(s.status, s.statusText)
                                : o(
                                    Mt[s.status] || s.status,
                                    s.statusText,
                                    "text" !== (s.responseType || "text") ||
                                      "string" != typeof s.responseText
                                      ? { binary: s.response }
                                      : { text: s.responseText },
                                    s.getAllResponseHeaders()
                                  ));
                          };
                        }),
                          (s.onload = n()),
                          (r = s.onerror = n("error")),
                          void 0 !== s.onabort
                            ? (s.onabort = r)
                            : (s.onreadystatechange = function () {
                                4 === s.readyState &&
                                  e.setTimeout(function () {
                                    n && r();
                                  });
                              }),
                          (n = n("abort"));
                        try {
                          s.send((t.hasContent && t.data) || null);
                        } catch (l) {
                          if (n) throw l;
                        }
                      },
                      abort: function () {
                        n && n();
                      },
                    };
                }),
                ae.ajaxSetup({
                  accepts: {
                    script:
                      "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                  },
                  contents: { script: /\b(?:java|ecma)script\b/ },
                  converters: {
                    "text script": function (e) {
                      return ae.globalEval(e), e;
                    },
                  },
                }),
                ae.ajaxPrefilter("script", function (e) {
                  void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET");
                }),
                ae.ajaxTransport("script", function (e) {
                  if (e.crossDomain) {
                    var t, n;
                    return {
                      send: function (r, i) {
                        (t = ae("<script>")
                          .prop({ charset: e.scriptCharset, src: e.url })
                          .on(
                            "load error",
                            (n = function (e) {
                              t.remove(),
                                (n = null),
                                e && i("error" === e.type ? 404 : 200, e.type);
                            })
                          )),
                          Y.head.appendChild(t[0]);
                      },
                      abort: function () {
                        n && n();
                      },
                    };
                  }
                });
              var Ft = [],
                Pt = /(=)\?(?=&|$)|\?\?/;
              ae.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                  var e = Ft.pop() || ae.expando + "_" + yt++;
                  return (this[e] = !0), e;
                },
              }),
                ae.ajaxPrefilter("json jsonp", function (t, n, r) {
                  var i,
                    o,
                    a,
                    s =
                      t.jsonp !== !1 &&
                      (Pt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                          0 ===
                            (t.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                            ) &&
                          Pt.test(t.data) &&
                          "data");
                  if (s || "jsonp" === t.dataTypes[0])
                    return (
                      (i = t.jsonpCallback =
                        ae.isFunction(t.jsonpCallback)
                          ? t.jsonpCallback()
                          : t.jsonpCallback),
                      s
                        ? (t[s] = t[s].replace(Pt, "$1" + i))
                        : t.jsonp !== !1 &&
                          (t.url +=
                            (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                      (t.converters["script json"] = function () {
                        return a || ae.error(i + " was not called"), a[0];
                      }),
                      (t.dataTypes[0] = "json"),
                      (o = e[i]),
                      (e[i] = function () {
                        a = arguments;
                      }),
                      r.always(function () {
                        void 0 === o ? ae(e).removeProp(i) : (e[i] = o),
                          t[i] &&
                            ((t.jsonpCallback = n.jsonpCallback), Ft.push(i)),
                          a && ae.isFunction(o) && o(a[0]),
                          (a = o = void 0);
                      }),
                      "script"
                    );
                }),
                (ae.parseHTML = function (e, t, n) {
                  if (!e || "string" != typeof e) return null;
                  "boolean" == typeof t && ((n = t), (t = !1)), (t = t || Y);
                  var r = me.exec(e),
                    i = !n && [];
                  return r
                    ? [t.createElement(r[1])]
                    : ((r = p([e], t, i)),
                      i && i.length && ae(i).remove(),
                      ae.merge([], r.childNodes));
                });
              var Rt = ae.fn.load;
              (ae.fn.load = function (e, t, n) {
                if ("string" != typeof e && Rt)
                  return Rt.apply(this, arguments);
                var r,
                  i,
                  o,
                  a = this,
                  s = e.indexOf(" ");
                return (
                  s > -1 && ((r = ae.trim(e.slice(s))), (e = e.slice(0, s))),
                  ae.isFunction(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (i = "POST"),
                  a.length > 0 &&
                    ae
                      .ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                      })
                      .done(function (e) {
                        (o = arguments),
                          a.html(
                            r ? ae("<div>").append(ae.parseHTML(e)).find(r) : e
                          );
                      })
                      .always(
                        n &&
                          function (e, t) {
                            a.each(function () {
                              n.apply(this, o || [e.responseText, t, e]);
                            });
                          }
                      ),
                  this
                );
              }),
                ae.each(
                  [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                  ],
                  function (e, t) {
                    ae.fn[t] = function (e) {
                      return this.on(t, e);
                    };
                  }
                ),
                (ae.expr.filters.animated = function (e) {
                  return ae.grep(ae.timers, function (t) {
                    return e === t.elem;
                  }).length;
                }),
                (ae.offset = {
                  setOffset: function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      l,
                      u,
                      c = ae.css(e, "position"),
                      d = ae(e),
                      f = {};
                    "static" === c && (e.style.position = "relative"),
                      (s = d.offset()),
                      (o = ae.css(e, "top")),
                      (l = ae.css(e, "left")),
                      (u =
                        ("absolute" === c || "fixed" === c) &&
                        (o + l).indexOf("auto") > -1),
                      u
                        ? ((r = d.position()), (a = r.top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                      ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))),
                      null != t.top && (f.top = t.top - s.top + a),
                      null != t.left && (f.left = t.left - s.left + i),
                      "using" in t ? t.using.call(e, f) : d.css(f);
                  },
                }),
                ae.fn.extend({
                  offset: function (e) {
                    if (arguments.length)
                      return void 0 === e
                        ? this
                        : this.each(function (t) {
                            ae.offset.setOffset(this, e, t);
                          });
                    var t,
                      n,
                      r = this[0],
                      i = { top: 0, left: 0 },
                      o = r && r.ownerDocument;
                    if (o)
                      return (
                        (t = o.documentElement),
                        ae.contains(t, r)
                          ? ((i = r.getBoundingClientRect()),
                            (n = X(o)),
                            {
                              top: i.top + n.pageYOffset - t.clientTop,
                              left: i.left + n.pageXOffset - t.clientLeft,
                            })
                          : i
                      );
                  },
                  position: function () {
                    if (this[0]) {
                      var e,
                        t,
                        n = this[0],
                        r = { top: 0, left: 0 };
                      return (
                        "fixed" === ae.css(n, "position")
                          ? (t = n.getBoundingClientRect())
                          : ((e = this.offsetParent()),
                            (t = this.offset()),
                            ae.nodeName(e[0], "html") || (r = e.offset()),
                            (r.top += ae.css(e[0], "borderTopWidth", !0)),
                            (r.left += ae.css(e[0], "borderLeftWidth", !0))),
                        {
                          top: t.top - r.top - ae.css(n, "marginTop", !0),
                          left: t.left - r.left - ae.css(n, "marginLeft", !0),
                        }
                      );
                    }
                  },
                  offsetParent: function () {
                    return this.map(function () {
                      for (
                        var e = this.offsetParent;
                        e && "static" === ae.css(e, "position");

                      )
                        e = e.offsetParent;
                      return e || Je;
                    });
                  },
                }),
                ae.each(
                  { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                  function (e, t) {
                    var n = "pageYOffset" === t;
                    ae.fn[e] = function (r) {
                      return ke(
                        this,
                        function (e, r, i) {
                          var o = X(e);
                          return void 0 === i
                            ? o
                              ? o[t]
                              : e[r]
                            : void (o
                                ? o.scrollTo(
                                    n ? o.pageXOffset : i,
                                    n ? i : o.pageYOffset
                                  )
                                : (e[r] = i));
                        },
                        e,
                        r,
                        arguments.length
                      );
                    };
                  }
                ),
                ae.each(["top", "left"], function (e, t) {
                  ae.cssHooks[t] = z(ie.pixelPosition, function (e, n) {
                    if (n)
                      return (
                        (n = A(e, t)),
                        Ye.test(n) ? ae(e).position()[t] + "px" : n
                      );
                  });
                }),
                ae.each({ Height: "height", Width: "width" }, function (e, t) {
                  ae.each(
                    { padding: "inner" + e, content: t, "": "outer" + e },
                    function (n, r) {
                      ae.fn[r] = function (r, i) {
                        var o =
                            arguments.length && (n || "boolean" != typeof r),
                          a = n || (r === !0 || i === !0 ? "margin" : "border");
                        return ke(
                          this,
                          function (t, n, r) {
                            var i;
                            return ae.isWindow(t)
                              ? t.document.documentElement["client" + e]
                              : 9 === t.nodeType
                              ? ((i = t.documentElement),
                                Math.max(
                                  t.body["scroll" + e],
                                  i["scroll" + e],
                                  t.body["offset" + e],
                                  i["offset" + e],
                                  i["client" + e]
                                ))
                              : void 0 === r
                              ? ae.css(t, n, a)
                              : ae.style(t, n, r, a);
                          },
                          t,
                          o ? r : void 0,
                          o,
                          null
                        );
                      };
                    }
                  );
                }),
                ae.fn.extend({
                  bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                  },
                  unbind: function (e, t) {
                    return this.off(e, null, t);
                  },
                  delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r);
                  },
                  undelegate: function (e, t, n) {
                    return 1 === arguments.length
                      ? this.off(e, "**")
                      : this.off(t, e || "**", n);
                  },
                  size: function () {
                    return this.length;
                  },
                }),
                (ae.fn.andSelf = ae.fn.addBack),
                "function" == typeof r &&
                  r.amd &&
                  r("jquery", [], function () {
                    return ae;
                  });
              var qt = e.jQuery,
                Ht = e.$;
              return (
                (ae.noConflict = function (t) {
                  return (
                    e.$ === ae && (e.$ = Ht),
                    t && e.jQuery === ae && (e.jQuery = qt),
                    ae
                  );
                }),
                t || (e.jQuery = e.$ = ae),
                ae
              );
            }),
              i("undefined" != typeof $ ? $ : window.$);
          }).call(e, void 0, void 0, void 0, void 0, function (e) {
            t.exports = e;
          });
        }).call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      {},
    ],
    19: [
      function (e, t, n) {
        !(function (e, n) {
          var r = n(e, e.document);
          (e.lazySizes = r),
            "object" == typeof t && t.exports && (t.exports = r);
        })(window, function (e, t) {
          "use strict";
          if (t.getElementsByClassName) {
            var n,
              r = t.documentElement,
              i = e.HTMLPictureElement && "sizes" in t.createElement("img"),
              o = "addEventListener",
              a = "getAttribute",
              s = e[o],
              l = e.setTimeout,
              u = e.requestAnimationFrame || l,
              c = /^picture$/i,
              d = ["load", "error", "lazyincluded", "_lazyloaded"],
              f = {},
              p = Array.prototype.forEach,
              h = function (e, t) {
                return (
                  f[t] || (f[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                  f[t].test(e[a]("class") || "") && f[t]
                );
              },
              m = function (e, t) {
                h(e, t) ||
                  e.setAttribute(
                    "class",
                    (e[a]("class") || "").trim() + " " + t
                  );
              },
              g = function (e, t) {
                var n;
                (n = h(e, t)) &&
                  e.setAttribute(
                    "class",
                    (e[a]("class") || "").replace(n, " ")
                  );
              },
              v = function (e, t, n) {
                var r = n ? o : "removeEventListener";
                n && v(e, t),
                  d.forEach(function (n) {
                    e[r](n, t);
                  });
              },
              y = function (e, n, r, i, o) {
                var a = t.createEvent("CustomEvent");
                return (
                  a.initCustomEvent(n, !i, !o, r || {}), e.dispatchEvent(a), a
                );
              },
              w = function (t, r) {
                var o;
                !i && (o = e.picturefill || n.pf)
                  ? o({ reevaluate: !0, elements: [t] })
                  : r && r.src && (t.src = r.src);
              },
              b = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
              },
              x = function (e, t, r) {
                for (
                  r = r || e.offsetWidth;
                  r < n.minSize && t && !e._lazysizesWidth;

                )
                  (r = t.offsetWidth), (t = t.parentNode);
                return r;
              },
              C = function (t) {
                var n,
                  r = 0,
                  i = e.Date,
                  o = function () {
                    (n = !1), (r = i.now()), t();
                  },
                  a = function () {
                    l(o);
                  },
                  s = function () {
                    u(a);
                  };
                return function () {
                  if (!n) {
                    var e = 125 - (i.now() - r);
                    (n = !0), e < 6 && (e = 6), l(s, e);
                  }
                };
              },
              T = (function () {
                var i,
                  d,
                  f,
                  x,
                  T,
                  E,
                  S,
                  A,
                  z,
                  _,
                  N,
                  D,
                  I,
                  L,
                  O,
                  M = /^img$/i,
                  j = /^iframe$/i,
                  F = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                  P = 0,
                  R = 0,
                  q = 0,
                  H = 0,
                  W = function (e) {
                    q--,
                      e && e.target && v(e.target, W),
                      (!e || q < 0 || !e.target) && (q = 0);
                  },
                  $ = function (e, n) {
                    var i,
                      o = e,
                      a =
                        "hidden" == b(t.body, "visibility") ||
                        "hidden" != b(e, "visibility");
                    for (
                      z -= n, D += n, _ -= n, N += n;
                      a && (o = o.offsetParent) && o != t.body && o != r;

                    )
                      (a = (b(o, "opacity") || 1) > 0),
                        a &&
                          "visible" != b(o, "overflow") &&
                          ((i = o.getBoundingClientRect()),
                          (a =
                            N > i.left &&
                            _ < i.right &&
                            D > i.top - 1 &&
                            z < i.bottom + 1));
                    return a;
                  },
                  B = function () {
                    var e, t, o, s, l, u, c, p, h;
                    if ((T = n.loadMode) && q < 8 && (e = i.length)) {
                      (t = 0),
                        H++,
                        null == L &&
                          ("expand" in n ||
                            (n.expand =
                              r.clientHeight > 600
                                ? r.clientWidth > 600
                                  ? 550
                                  : 410
                                : 359),
                          (I = n.expand),
                          (L = I * n.expFactor)),
                        R < L && q < 1 && H > 3 && T > 2
                          ? ((R = L), (H = 0))
                          : (R = T > 1 && H > 2 && q < 6 ? I : P);
                      for (; t < e; t++)
                        if (i[t] && !i[t]._lazyRace)
                          if (F)
                            if (
                              (((p = i[t][a]("data-expand")) && (u = 1 * p)) ||
                                (u = R),
                              h !== u &&
                                ((S = innerWidth + u * O),
                                (A = innerHeight + u),
                                (c = u * -1),
                                (h = u)),
                              (o = i[t].getBoundingClientRect()),
                              (D = o.bottom) >= c &&
                                (z = o.top) <= A &&
                                (N = o.right) >= c * O &&
                                (_ = o.left) <= S &&
                                (D || N || _ || z) &&
                                ((f && q < 3 && !p && (T < 3 || H < 4)) ||
                                  $(i[t], u)))
                            ) {
                              if ((G(i[t]), (l = !0), q > 9)) break;
                            } else
                              !l &&
                                f &&
                                !s &&
                                q < 4 &&
                                H < 4 &&
                                T > 2 &&
                                (d[0] || n.preloadAfterLoad) &&
                                (d[0] ||
                                  (!p &&
                                    (D ||
                                      N ||
                                      _ ||
                                      z ||
                                      "auto" != i[t][a](n.sizesAttr)))) &&
                                (s = d[0] || i[t]);
                          else G(i[t]);
                      s && !l && G(s);
                    }
                  },
                  Z = C(B),
                  U = function (e) {
                    m(e.target, n.loadedClass),
                      g(e.target, n.loadingClass),
                      v(e.target, K);
                  },
                  K = function (e) {
                    (e = { target: e.target }),
                      u(function () {
                        U(e);
                      });
                  },
                  X = function (e, t) {
                    try {
                      e.contentWindow.location.replace(t);
                    } catch (n) {
                      e.src = t;
                    }
                  },
                  V = function (e) {
                    var t,
                      r,
                      i = e[a](n.srcsetAttr);
                    (t = n.customMedia[e[a]("data-media") || e[a]("media")]) &&
                      e.setAttribute("media", t),
                      i && e.setAttribute("srcset", i),
                      t &&
                        ((r = e.parentNode),
                        r.insertBefore(e.cloneNode(), e),
                        r.removeChild(e));
                  },
                  Y = (function () {
                    var e,
                      t = [],
                      n = function () {
                        for (; t.length; ) t.shift()();
                        e = !1;
                      },
                      r = function (r) {
                        t.push(r), e || ((e = !0), u(n));
                      };
                    return { add: r, run: n };
                  })(),
                  G = function (e) {
                    var t,
                      r,
                      i,
                      o,
                      s,
                      d,
                      b,
                      C = M.test(e.nodeName),
                      T = C && (e[a](n.sizesAttr) || e[a]("sizes")),
                      E = "auto" == T;
                    ((!E && f) ||
                      !C ||
                      (!e.src && !e.srcset) ||
                      e.complete ||
                      h(e, n.errorClass)) &&
                      (E && (b = e.offsetWidth),
                      (e._lazyRace = !0),
                      q++,
                      n.rC && (b = n.rC(e, b) || b),
                      Y.add(function () {
                        (s = y(e, "lazybeforeunveil")).defaultPrevented ||
                          (T &&
                            (E
                              ? (k.updateElem(e, !0, b), m(e, n.autosizesClass))
                              : e.setAttribute("sizes", T)),
                          (r = e[a](n.srcsetAttr)),
                          (t = e[a](n.srcAttr)),
                          C &&
                            ((i = e.parentNode),
                            (o = i && c.test(i.nodeName || ""))),
                          (d =
                            s.detail.firesLoad ||
                            ("src" in e && (r || t || o))),
                          (s = { target: e }),
                          d &&
                            (v(e, W, !0),
                            clearTimeout(x),
                            (x = l(W, 2500)),
                            m(e, n.loadingClass),
                            v(e, K, !0)),
                          o && p.call(i.getElementsByTagName("source"), V),
                          r
                            ? e.setAttribute("srcset", r)
                            : t &&
                              !o &&
                              (j.test(e.nodeName) ? X(e, t) : (e.src = t)),
                          (r || o) && w(e, { src: t })),
                          u(function () {
                            e._lazyRace && delete e._lazyRace,
                              g(e, n.lazyClass),
                              (d && !e.complete) || (d ? W(s) : q--, U(s));
                          });
                      }));
                  },
                  Q = function () {
                    if (!f) {
                      if (Date.now() - E < 999) return void l(Q, 999);
                      var e,
                        r = function () {
                          (n.loadMode = 3), Z();
                        };
                      (f = !0),
                        (n.loadMode = 3),
                        t.hidden ? (B(), Y.run()) : Z(),
                        s(
                          "scroll",
                          function () {
                            3 == n.loadMode && (n.loadMode = 2),
                              clearTimeout(e),
                              (e = l(r, 99));
                          },
                          !0
                        );
                    }
                  };
                return {
                  _: function () {
                    (E = Date.now()),
                      (i = t.getElementsByClassName(n.lazyClass)),
                      (d = t.getElementsByClassName(
                        n.lazyClass + " " + n.preloadClass
                      )),
                      (O = n.hFac),
                      s("scroll", Z, !0),
                      s("resize", Z, !0),
                      e.MutationObserver
                        ? new MutationObserver(Z).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                          })
                        : (r[o]("DOMNodeInserted", Z, !0),
                          r[o]("DOMAttrModified", Z, !0),
                          setInterval(Z, 999)),
                      s("hashchange", Z, !0),
                      [
                        "focus",
                        "mouseover",
                        "click",
                        "load",
                        "transitionend",
                        "animationend",
                        "webkitAnimationEnd",
                      ].forEach(function (e) {
                        t[o](e, Z, !0);
                      }),
                      /d$|^c/.test(t.readyState)
                        ? Q()
                        : (s("load", Q),
                          t[o]("DOMContentLoaded", Z),
                          l(Q, 2e4)),
                      Z(i.length > 0);
                  },
                  checkElems: Z,
                  unveil: G,
                };
              })(),
              k = (function () {
                var e,
                  r = function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s = e.parentNode;
                    if (
                      s &&
                      ((n = x(e, s, n)),
                      (a = y(e, "lazybeforesizes", {
                        width: n,
                        dataAttr: !!t,
                      })),
                      !a.defaultPrevented &&
                        ((n = a.detail.width), n && n !== e._lazysizesWidth))
                    ) {
                      if (
                        ((e._lazysizesWidth = n),
                        (n += "px"),
                        e.setAttribute("sizes", n),
                        c.test(s.nodeName || ""))
                      )
                        for (
                          r = s.getElementsByTagName("source"),
                            i = 0,
                            o = r.length;
                          i < o;
                          i++
                        )
                          r[i].setAttribute("sizes", n);
                      a.detail.dataAttr || w(e, a.detail);
                    }
                  },
                  i = function () {
                    var t,
                      n = e.length;
                    if (n) for (t = 0; t < n; t++) r(e[t]);
                  },
                  o = C(i);
                return {
                  _: function () {
                    (e = t.getElementsByClassName(n.autosizesClass)),
                      s("resize", o);
                  },
                  checkElems: o,
                  updateElem: r,
                };
              })(),
              E = function () {
                E.i || ((E.i = !0), k._(), T._());
              };
            return (
              (function () {
                var t,
                  r = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.7,
                    hFac: 0.8,
                    loadMode: 2,
                  };
                n = e.lazySizesConfig || e.lazysizesConfig || {};
                for (t in r) t in n || (n[t] = r[t]);
                (e.lazySizesConfig = n),
                  l(function () {
                    n.init && E();
                  });
              })(),
              {
                cfg: n,
                autoSizer: k,
                loader: T,
                init: E,
                uP: w,
                aC: m,
                rC: g,
                hC: h,
                fire: y,
                gW: x,
              }
            );
          }
        });
      },
      {},
    ],
    20: [
      function (e, t, n) {
        !(function () {
          "use strict";
          if (window.addEventListener) {
            var e,
              t = /\s+/g,
              n = /\s*\|\s+|\s+\|\s*/g,
              r = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,
              i = { contain: 1, cover: 1 },
              o = window.requestAnimationFrame || setTimeout,
              a = function (e) {
                var t =
                  e._bgsetReadCache && "width" in e._bgsetReadCache
                    ? e._bgsetReadCache.width
                    : lazySizes.gW(e, e.parentNode);
                return (
                  (!e._lazysizesWidth || t > e._lazysizesWidth) &&
                    (e._lazysizesWidth = t),
                  e._lazysizesWidth
                );
              },
              s = function (e) {
                var t;
                return (
                  e._bgsetReadCache
                    ? (t = e._bgsetReadCache.bgSize)
                    : ((t = (
                        getComputedStyle(e) || {
                          getPropertyValue: function () {},
                        }
                      ).getPropertyValue("background-size")),
                      !i[t] &&
                        i[e.style.backgroundSize] &&
                        (t = e.style.backgroundSize)),
                  t
                );
              },
              l = function (e, o, a) {
                var l = document.createElement("picture"),
                  u = o.getAttribute(lazySizesConfig.sizesAttr),
                  c = o.getAttribute("data-ratio"),
                  d = o.getAttribute("data-optimumx"),
                  f = s(o);
                !i[f] ||
                  ("auto" != u && u) ||
                  (a.setAttribute("data-parent-fit", f), (u = "auto")),
                  o._lazybgset &&
                    o._lazybgset.parentNode == o &&
                    o.removeChild(o._lazybgset),
                  Object.defineProperty(a, "_lazybgset", {
                    value: o,
                    writable: !0,
                  }),
                  Object.defineProperty(o, "_lazybgset", {
                    value: l,
                    writable: !0,
                  }),
                  (e = e.replace(t, " ").split(n)),
                  (l.style.display = "none"),
                  (a.className = lazySizesConfig.lazyClass),
                  1 != e.length || u || (u = "auto"),
                  e.forEach(function (e) {
                    var t = document.createElement("source");
                    u && "auto" != u && t.setAttribute("sizes", u),
                      e.match(r) &&
                        (t.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1),
                        RegExp.$2 &&
                          t.setAttribute(
                            "media",
                            lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2
                          )),
                      l.appendChild(t);
                  }),
                  u &&
                    (a.setAttribute(lazySizesConfig.sizesAttr, u),
                    o.removeAttribute(lazySizesConfig.sizesAttr),
                    o.removeAttribute("sizes")),
                  d && a.setAttribute("data-optimumx", d),
                  c && a.setAttribute("data-ratio", c),
                  l.appendChild(a),
                  o.appendChild(l);
              },
              u = function (e) {
                if (e.target._lazybgset) {
                  var t = e.target,
                    n = t._lazybgset,
                    r = t.currentSrc || t.src;
                  r && (n.style.backgroundImage = "url(" + r + ")"),
                    t._lazybgsetLoading &&
                      (lazySizes.fire(n, "_lazyloaded", {}, !1, !0),
                      delete t._lazybgsetLoading);
                }
              };
            (window.lazySizesConfig = window.lazySizesConfig || {}),
              (e = window.lazySizesConfig.rC),
              (window.lazySizesConfig.rC = function (t, n) {
                var r;
                return (
                  e && (n = e.apply(this, arguments) || n),
                  t.getAttribute("data-bgset") &&
                    ((r = s(t)),
                    (i[r] || t.getAttribute(lazySizesConfig.sizesAttr)) &&
                      (n = a(t)),
                    (t._bgsetReadCache = { bgSize: r, width: n })),
                  (t._bgsetReadCache && t._bgsetReadCache.width) || n
                );
              }),
              addEventListener("lazybeforeunveil", function (e) {
                var t, n, r;
                !e.defaultPrevented &&
                  (t = e.target.getAttribute("data-bgset")) &&
                  ((r = e.target),
                  (n = document.createElement("img")),
                  (n.alt = ""),
                  (n._lazybgsetLoading = !0),
                  (e.detail.firesLoad = !0),
                  l(t, r, n),
                  (n._bgsetReadCache = r._bgsetReadCache),
                  setTimeout(function () {
                    lazySizes.loader.unveil(n),
                      o(function () {
                        lazySizes.fire(n, "_lazyloaded", {}, !0, !0),
                          n.complete && u({ target: n }),
                          r._bgsetReadCache && delete r._bgsetReadCache,
                          n._bgsetReadCache && delete n._bgsetReadCache;
                      });
                  }));
              }),
              document.addEventListener("load", u, !0),
              document.documentElement.addEventListener(
                "lazybeforesizes",
                function (e) {
                  !e.defaultPrevented &&
                    e.target._lazybgset &&
                    (e.detail.width = a(e.target._lazybgset));
                }
              );
          }
        })();
      },
      {},
    ],
    21: [
      function (e, t, n) {
        !(function (e, t, n) {
          "use strict";
          var r,
            i,
            o = (e.lazySizes && lazySizes.cfg) || e.lazySizesConfig,
            a = t.createElement("img"),
            s = "sizes" in a && "srcset" in a,
            l = /\s+\d+h/g,
            u = Array.prototype.forEach,
            c = function (e) {
              var t = e.getAttribute(lazySizesConfig.srcsetAttr);
              t && e.setAttribute(lazySizesConfig.srcsetAttr, t.replace(l, ""));
            };
          if (
            (o || ((o = {}), (e.lazySizesConfig = o)),
            o.supportsType ||
              (o.supportsType = function (e) {
                return !e;
              }),
            !(e.picturefill || e.respimage || o.pf))
          ) {
            if (e.HTMLPictureElement && s)
              return (
                t.msElementsFromPoint &&
                  (i = navigator.userAgent.match(/Edge\/(\d+)/)) &&
                  i[1] < 15 &&
                  t.addEventListener("lazybeforeunveil", function (e) {
                    var t = e.target.parentNode;
                    t && u.call(t.getElementsByTagName("source"), c),
                      c(e.target);
                  }),
                void (o.pf = function () {})
              );
            (o.pf = function (t) {
              var n, i;
              if (!e.picturefill && !e.respimage)
                for (n = 0, i = t.elements.length; n < i; n++) r(t.elements[n]);
            }),
              (r = (function () {
                var n = function (e, t) {
                    return e.w - t.w;
                  },
                  i = /^\s*\d+px\s*$/,
                  a = function (e) {
                    var t,
                      n,
                      r = e.length,
                      i = e[r - 1],
                      o = 0;
                    for (o; o < r; o++)
                      if (((i = e[o]), (i.d = i.w / e.w), i.d >= e.d)) {
                        !i.cached &&
                          (t = e[o - 1]) &&
                          t.d > e.d - 0.13 * Math.pow(e.d, 2.2) &&
                          ((n = Math.pow(t.d - 0.6, 1.6)),
                          t.cached && (t.d += 0.15 * n),
                          t.d + (i.d - e.d) * n > e.d && (i = t));
                        break;
                      }
                    return i;
                  },
                  u = (function () {
                    var e,
                      t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                      n = /\s/,
                      r = function (t, n, r, i) {
                        e.push({ c: n, u: r, w: 1 * i });
                      };
                    return function (i) {
                      return (
                        (e = []),
                        (i = i.trim()),
                        i.replace(l, "").replace(t, r),
                        e.length ||
                          !i ||
                          n.test(i) ||
                          e.push({ c: i, u: i, w: 99 }),
                        e
                      );
                    };
                  })(),
                  c = function () {
                    c.init ||
                      ((c.init = !0),
                      addEventListener(
                        "resize",
                        (function () {
                          var e,
                            n = t.getElementsByClassName("lazymatchmedia"),
                            i = function () {
                              var e, t;
                              for (e = 0, t = n.length; e < t; e++) r(n[e]);
                            };
                          return function () {
                            clearTimeout(e), (e = setTimeout(i, 66));
                          };
                        })()
                      ));
                  },
                  d = function (t, n) {
                    var r,
                      i =
                        t.getAttribute("srcset") ||
                        t.getAttribute(o.srcsetAttr);
                    !i &&
                      n &&
                      (i = t._lazypolyfill
                        ? t._lazypolyfill._set
                        : t.getAttribute("src") || t.getAttribute(o.srcAttr)),
                      (t._lazypolyfill && t._lazypolyfill._set == i) ||
                        ((r = u(i || "")),
                        n &&
                          t.parentNode &&
                          ((r.isPicture =
                            "PICTURE" == t.parentNode.nodeName.toUpperCase()),
                          r.isPicture &&
                            (e.matchMedia || (e.Modernizr && Modernizr.mq)) &&
                            (lazySizes.aC(t, "lazymatchmedia"), c())),
                        (r._set = i),
                        Object.defineProperty(t, "_lazypolyfill", {
                          value: r,
                          writable: !0,
                        }));
                  },
                  f = function (t) {
                    var n = e.devicePixelRatio || 1,
                      r = lazySizes.getX && lazySizes.getX(t);
                    return Math.min(r || n, 2.5, n);
                  },
                  p = function (t) {
                    return e.matchMedia
                      ? (p = function (e) {
                          return !e || (matchMedia(e) || {}).matches;
                        })(t)
                      : e.Modernizr && Modernizr.mq
                      ? !t || Modernizr.mq(t)
                      : !t;
                  },
                  h = function (e) {
                    var t, r, s, l, u, c, h;
                    if (((l = e), d(l, !0), (u = l._lazypolyfill), u.isPicture))
                      for (
                        r = 0,
                          t = e.parentNode.getElementsByTagName("source"),
                          s = t.length;
                        r < s;
                        r++
                      )
                        if (
                          o.supportsType(t[r].getAttribute("type"), e) &&
                          p(t[r].getAttribute("media"))
                        ) {
                          (l = t[r]), d(l), (u = l._lazypolyfill);
                          break;
                        }
                    return (
                      u.length > 1
                        ? ((h = l.getAttribute("sizes") || ""),
                          (h =
                            (i.test(h) && parseInt(h, 10)) ||
                            lazySizes.gW(e, e.parentNode)),
                          (u.d = f(e)),
                          (!u.w || u.w < h) && ((u.w = h), (c = a(u.sort(n)))))
                        : (c = u[0]),
                      c
                    );
                  },
                  m = function (e) {
                    if (
                      !s ||
                      !e.parentNode ||
                      "PICTURE" == e.parentNode.nodeName.toUpperCase()
                    ) {
                      var t = h(e);
                      t &&
                        t.u &&
                        e._lazypolyfill.cur != t.u &&
                        ((e._lazypolyfill.cur = t.u),
                        (t.cached = !0),
                        e.setAttribute(o.srcAttr, t.u),
                        e.setAttribute("src", t.u));
                    }
                  };
                return (m.parse = u), m;
              })()),
              o.loadedClass &&
                o.loadingClass &&
                !(function () {
                  var e = [];
                  [
                    'img[sizes$="px"][srcset].',
                    "picture > img:not([srcset]).",
                  ].forEach(function (t) {
                    e.push(t + o.loadedClass), e.push(t + o.loadingClass);
                  }),
                    o.pf({ elements: t.querySelectorAll(e.join(", ")) });
                })();
          }
        })(window, document),
          (function (e) {
            "use strict";
            var t,
              n = e.createElement("img");
            !("srcset" in n) ||
              "sizes" in n ||
              window.HTMLPictureElement ||
              ((t = /^picture$/i),
              e.addEventListener("lazybeforeunveil", function (n) {
                var r, i, o, a, s, l, u;
                !n.defaultPrevented &&
                  !lazySizesConfig.noIOSFix &&
                  (r = n.target) &&
                  (o = r.getAttribute(lazySizesConfig.srcsetAttr)) &&
                  (i = r.parentNode) &&
                  ((s = t.test(i.nodeName || "")) ||
                    (a =
                      r.getAttribute("sizes") ||
                      r.getAttribute(lazySizesConfig.sizesAttr))) &&
                  ((l = s ? i : e.createElement("picture")),
                  r._lazyImgSrc ||
                    Object.defineProperty(r, "_lazyImgSrc", {
                      value: e.createElement("source"),
                      writable: !0,
                    }),
                  (u = r._lazyImgSrc),
                  a && u.setAttribute("sizes", a),
                  u.setAttribute(lazySizesConfig.srcsetAttr, o),
                  r.setAttribute("data-pfsrcset", o),
                  r.removeAttribute(lazySizesConfig.srcsetAttr),
                  s || (i.insertBefore(l, r), l.appendChild(r)),
                  l.insertBefore(u, r));
              }));
          })(document);
      },
      {},
    ],
    22: [
      function (e, t, n) {
        !(function (e, r) {
          "function" == typeof define && define.amd
            ? define([], function () {
                return r();
              })
            : "object" == typeof n
            ? (t.exports = r())
            : (e.Macy = r());
        })(this, function () {
          "use strict";
          var e = function (t) {
              var n,
                r = {},
                i = 1,
                o = function (t) {
                  for (n in t)
                    Object.prototype.hasOwnProperty.call(t, n) &&
                      ("[object Object]" ===
                      Object.prototype.toString.call(t[n])
                        ? (r[n] = e(r[n], t[n]))
                        : (r[n] = t[n]));
                };
              for (o(arguments[0]), i = 1; i < arguments.length; i++) {
                var a = arguments[i];
                o(a);
              }
              return r;
            },
            t = {};
          (t.VERSION = "1.1.2"), (t.settings = {});
          var n,
            r,
            i = { columns: 3, margin: 2, trueOrder: !0, waitForImages: !1 },
            o = { options: {} },
            a = function () {
              var e,
                t = document.body.clientWidth;
              for (var n in o.options.breakAt)
                if (t < n) {
                  e = o.options.breakAt[n];
                  break;
                }
              return e || (e = o.options.columns), e;
            },
            s = function (e) {
              e = "undefined" == typeof e || e;
              var t,
                n = a();
              return e
                ? 1 === n
                  ? "100%"
                  : ((t = ((n - 1) * o.options.margin) / n),
                    "calc(" + 100 / n + "% - " + t + "px)")
                : 100 / n;
            },
            l = function () {
              var e = s();
              C(o.elements, function (t, n) {
                (n.style.width = e), (n.style.position = "absolute");
              });
            },
            u = function (e) {
              var t,
                n,
                r = a(),
                i = 0;
              return (
                e++,
                1 === e
                  ? 0
                  : ((t =
                      (o.options.margin - ((r - 1) * o.options.margin) / r) *
                      (e - 1)),
                    (i += s(!1) * (e - 1)),
                    (n = "calc(" + i + "% + " + t + "px)"))
              );
            },
            c = function (e, t, n) {
              var r,
                i = 0;
              if (0 === e) return 0;
              for (var a = 0; a < e; a++)
                (r = parseInt(
                  m(o.elements[n[a]], "height").replace("px", ""),
                  10
                )),
                  (i += isNaN(r) ? 0 : r + o.options.margin);
              return i;
            },
            d = function (e) {
              var t = 0,
                n = [],
                r = [],
                i = [];
              C(o.elements, function (i) {
                t++, t > e && ((t = 1), n.push(r), (r = [])), r.push(i);
              }),
                n.push(r);
              for (var a = 0, s = n.length; a < s; a++)
                for (var l = n[a], u = 0, c = l.length; u < c; u++)
                  (i[u] = "undefined" == typeof i[u] ? [] : i[u]),
                    i[u].push(l[u]);
              (o.rows = i), p(!1);
            },
            f = function (e) {
              for (var t = o.elements, n = [], r = [], i = 0; i < e; i++)
                n[i] = [];
              for (var a = 0; a < t.length; a++) r.push(a);
              for (var s = 0, l = r.length; s < l; s++) {
                var u = h(n);
                (n[u] = "undefined" == typeof n[u] ? [] : n[u]),
                  n[u].push(r[s]);
              }
              (o.rows = n), p(!0);
            },
            p = function (e) {
              e = e || !1;
              for (
                var t = o.elements, n = o.rows, r = 0, i = n.length;
                r < i;
                r++
              )
                for (
                  var a = e ? w(n[r]) : n[r], s = 0, l = a.length;
                  s < l;
                  s++
                ) {
                  var d, f;
                  (d = u(r)),
                    (f = c(s, r, a, e)),
                    (t[a[s]].style.top = f + "px"),
                    (t[a[s]].style.left = d);
                }
            },
            h = function (e) {
              for (var t, n, r, i, a = 0, s = 0, l = e.length; s < l; s++) {
                for (var u = 0; u < e[s].length; u++)
                  (i = parseInt(
                    m(o.elements[e[s][u]], "height").replace("px", ""),
                    10
                  )),
                    (a += isNaN(i) ? 0 : i);
                (r = n),
                  (n = void 0 === n ? a : n > a ? a : n),
                  (void 0 === r || r > n) && (t = s),
                  (a = 0);
              }
              return t;
            },
            m = function (e, t) {
              return window.getComputedStyle(e, null).getPropertyValue(t);
            },
            g = function () {
              for (
                var e = o.rows, t = 0, n = 0, r = 0, i = e.length;
                r < i;
                r++
              ) {
                for (var a = 0; a < e[r].length; a++)
                  (n += parseInt(
                    m(o.elements[e[r][a]], "height").replace("px", ""),
                    10
                  )),
                    (n += 0 !== a ? o.options.margin : 0);
                (t = t < n ? n : t), (n = 0);
              }
              return t;
            },
            v = function () {
              var e = a();
              return 1 === e
                ? ((o.container.style.height = "auto"),
                  void C(o.elements, function (e, t) {
                    t.removeAttribute("style");
                  }))
                : (l(),
                  (o.elements = o.container.children),
                  o.options.trueOrder ? (d(e), void y()) : (f(e), void y()));
            },
            y = function () {
              o.container.style.height = g() + "px";
            },
            w = function (e) {
              for (var t = e, n = t.length - 1, r = 0; r < n; r++)
                for (var i = 0; i < n; i++)
                  if (t[i] > t[i + 1]) {
                    var o = t[i];
                    (t[i] = t[i + 1]), (t[i + 1] = o);
                  }
              return t;
            },
            b = function (e) {
              return document.querySelector(e);
            },
            x = function (e) {
              for (
                var t = document.querySelectorAll(e), n = [], r = t.length - 1;
                r >= 0;
                r--
              )
                null !== t[r].offsetParent && n.unshift(t[r]);
              return n;
            },
            C = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) t(n, e[n]);
            },
            T = function (e, t) {
              (e = e || !1),
                (t = t || !1),
                "function" == typeof e && e(),
                r >= n && "function" == typeof t && t();
            },
            k = function () {
              C(o.container.children, function (e, t) {
                t.removeAttribute("style");
              }),
                o.container.removeAttribute("style"),
                window.removeEventListener("resize", v);
            },
            E = function (e, t) {
              var i = x("img");
              (n = i.length - 1),
                (r = 0),
                C(i, function (i, o) {
                  return o.complete
                    ? (r++, void T(e, t))
                    : (o.addEventListener("load", function () {
                        r++, T(e, t);
                      }),
                      void o.addEventListener("error", function () {
                        n--, T(e, t);
                      }));
                });
            };
          return (
            (t.init = function (t) {
              if (t.container && ((o.container = b(t.container)), o.container))
                return (
                  delete t.container,
                  (o.options = e(i, t)),
                  window.addEventListener("resize", v),
                  (o.container.style.position = "relative"),
                  (o.elements = o.container.children),
                  o.options.waitForImages
                    ? void E(null, function () {
                        v();
                      })
                    : (v(),
                      void E(function () {
                        v();
                      }))
                );
            }),
            (t.recalculate = v),
            (t.onImageLoad = E),
            (t.remove = k),
            t
          );
        });
      },
      {},
    ],
    23: [
      function (e, t, n) {
        !(function (e, r) {
          "function" == typeof define && define.amd
            ? define(r)
            : "object" == typeof n
            ? (t.exports = r())
            : (e.PhotoSwipeUI_Default = r());
        })(this, function () {
          "use strict";
          var e = function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              l,
              u,
              c,
              d,
              f,
              p,
              h,
              m,
              g,
              v,
              y,
              w,
              b,
              x = this,
              C = !1,
              T = !0,
              k = !0,
              E = {
                barsSize: { top: 44, bottom: "auto" },
                closeElClasses: [
                  "item",
                  "caption",
                  "zoom-wrap",
                  "ui",
                  "top-bar",
                ],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function (e, t) {
                  return e.title
                    ? ((t.children[0].innerHTML = e.title), !0)
                    : ((t.children[0].innerHTML = ""), !1);
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [
                  {
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
                  },
                  {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
                  },
                  {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
                  },
                  {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0,
                  },
                ],
                getImageURLForShare: function () {
                  return e.currItem.src || "";
                },
                getPageURLForShare: function () {
                  return window.location.href;
                },
                getTextForShare: function () {
                  return e.currItem.title || "";
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200,
              },
              S = function (e) {
                if (v) return !0;
                (e = e || window.event),
                  g.timeToIdle && g.mouseUsed && !c && j();
                for (
                  var n,
                    r,
                    i = e.target || e.srcElement,
                    o = i.getAttribute("class") || "",
                    a = 0;
                  a < B.length;
                  a++
                )
                  (n = B[a]),
                    n.onTap &&
                      o.indexOf("pswp__" + n.name) > -1 &&
                      (n.onTap(), (r = !0));
                if (r) {
                  e.stopPropagation && e.stopPropagation(), (v = !0);
                  var s = t.features.isOldAndroid ? 600 : 30;
                  y = setTimeout(function () {
                    v = !1;
                  }, s);
                }
              },
              A = function () {
                return (
                  !e.likelyTouchDevice ||
                  g.mouseUsed ||
                  screen.width > g.fitControlsWidth
                );
              },
              z = function (e, n, r) {
                t[(r ? "add" : "remove") + "Class"](e, "pswp__" + n);
              },
              _ = function () {
                var e = 1 === g.getNumItemsFn();
                e !== m && (z(r, "ui--one-slide", e), (m = e));
              },
              N = function () {
                z(l, "share-modal--hidden", k);
              },
              D = function () {
                return (
                  (k = !k),
                  k
                    ? (t.removeClass(l, "pswp__share-modal--fade-in"),
                      setTimeout(function () {
                        k && N();
                      }, 300))
                    : (N(),
                      setTimeout(function () {
                        k || t.addClass(l, "pswp__share-modal--fade-in");
                      }, 30)),
                  k || L(),
                  !1
                );
              },
              I = function (t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return (
                  e.shout("shareLinkClick", t, n),
                  !!n.href &&
                    (!!n.hasAttribute("download") ||
                      (window.open(
                        n.href,
                        "pswp_share",
                        "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                          (window.screen
                            ? Math.round(screen.width / 2 - 275)
                            : 100)
                      ),
                      k || D(),
                      !1))
                );
              },
              L = function () {
                for (
                  var e, t, n, r, i, o = "", a = 0;
                  a < g.shareButtons.length;
                  a++
                )
                  (e = g.shareButtons[a]),
                    (n = g.getImageURLForShare(e)),
                    (r = g.getPageURLForShare(e)),
                    (i = g.getTextForShare(e)),
                    (t = e.url
                      .replace("{{url}}", encodeURIComponent(r))
                      .replace("{{image_url}}", encodeURIComponent(n))
                      .replace("{{raw_image_url}}", n)
                      .replace("{{text}}", encodeURIComponent(i))),
                    (o +=
                      '<a href="' +
                      t +
                      '" target="_blank" class="pswp__share--' +
                      e.id +
                      '"' +
                      (e.download ? "download" : "") +
                      ">" +
                      e.label +
                      "</a>"),
                    g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
                (l.children[0].innerHTML = o), (l.children[0].onclick = I);
              },
              O = function (e) {
                for (var n = 0; n < g.closeElClasses.length; n++)
                  if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0;
              },
              M = 0,
              j = function () {
                clearTimeout(b), (M = 0), c && x.setIdle(!1);
              },
              F = function (e) {
                e = e ? e : window.event;
                var t = e.relatedTarget || e.toElement;
                (t && "HTML" !== t.nodeName) ||
                  (clearTimeout(b),
                  (b = setTimeout(function () {
                    x.setIdle(!0);
                  }, g.timeToIdleOutside)));
              },
              P = function () {
                g.fullscreenEl &&
                  !t.features.isOldAndroid &&
                  (n || (n = x.getFullscreenAPI()),
                  n
                    ? (t.bind(document, n.eventK, x.updateFullscreen),
                      x.updateFullscreen(),
                      t.addClass(e.template, "pswp--supports-fs"))
                    : t.removeClass(e.template, "pswp--supports-fs"));
              },
              R = function () {
                g.preloaderEl &&
                  (q(!0),
                  d("beforeChange", function () {
                    clearTimeout(h),
                      (h = setTimeout(function () {
                        e.currItem && e.currItem.loading
                          ? (!e.allowProgressiveImg() ||
                              (e.currItem.img &&
                                !e.currItem.img.naturalWidth)) &&
                            q(!1)
                          : q(!0);
                      }, g.loadingIndicatorDelay));
                  }),
                  d("imageLoadComplete", function (t, n) {
                    e.currItem === n && q(!0);
                  }));
              },
              q = function (e) {
                p !== e && (z(f, "preloader--active", !e), (p = e));
              },
              H = function (e) {
                var n = e.vGap;
                if (A()) {
                  var a = g.barsSize;
                  if (g.captionEl && "auto" === a.bottom)
                    if (
                      (o ||
                        ((o = t.createEl("pswp__caption pswp__caption--fake")),
                        o.appendChild(t.createEl("pswp__caption__center")),
                        r.insertBefore(o, i),
                        t.addClass(r, "pswp__ui--fit")),
                      g.addCaptionHTMLFn(e, o, !0))
                    ) {
                      var s = o.clientHeight;
                      n.bottom = parseInt(s, 10) || 44;
                    } else n.bottom = a.top;
                  else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                  n.top = a.top;
                } else n.top = n.bottom = 0;
              },
              W = function () {
                g.timeToIdle &&
                  d("mouseUsed", function () {
                    t.bind(document, "mousemove", j),
                      t.bind(document, "mouseout", F),
                      (w = setInterval(function () {
                        M++, 2 === M && x.setIdle(!0);
                      }, g.timeToIdle / 2));
                  });
              },
              $ = function () {
                d("onVerticalDrag", function (e) {
                  T && e < 0.95
                    ? x.hideControls()
                    : !T && e >= 0.95 && x.showControls();
                });
                var e;
                d("onPinchClose", function (t) {
                  T && t < 0.9
                    ? (x.hideControls(), (e = !0))
                    : e && !T && t > 0.9 && x.showControls();
                }),
                  d("zoomGestureEnded", function () {
                    (e = !1), e && !T && x.showControls();
                  });
              },
              B = [
                {
                  name: "caption",
                  option: "captionEl",
                  onInit: function (e) {
                    i = e;
                  },
                },
                {
                  name: "share-modal",
                  option: "shareEl",
                  onInit: function (e) {
                    l = e;
                  },
                  onTap: function () {
                    D();
                  },
                },
                {
                  name: "button--share",
                  option: "shareEl",
                  onInit: function (e) {
                    s = e;
                  },
                  onTap: function () {
                    D();
                  },
                },
                {
                  name: "button--zoom",
                  option: "zoomEl",
                  onTap: e.toggleDesktopZoom,
                },
                {
                  name: "counter",
                  option: "counterEl",
                  onInit: function (e) {
                    a = e;
                  },
                },
                { name: "button--close", option: "closeEl", onTap: e.close },
                {
                  name: "button--arrow--left",
                  option: "arrowEl",
                  onTap: e.prev,
                },
                {
                  name: "button--arrow--right",
                  option: "arrowEl",
                  onTap: e.next,
                },
                {
                  name: "button--fs",
                  option: "fullscreenEl",
                  onTap: function () {
                    n.isFullscreen() ? n.exit() : n.enter();
                  },
                },
                {
                  name: "preloader",
                  option: "preloaderEl",
                  onInit: function (e) {
                    f = e;
                  },
                },
              ],
              Z = function () {
                var e,
                  n,
                  i,
                  o = function (r) {
                    if (r)
                      for (var o = r.length, a = 0; a < o; a++) {
                        (e = r[a]), (n = e.className);
                        for (var s = 0; s < B.length; s++)
                          (i = B[s]),
                            n.indexOf("pswp__" + i.name) > -1 &&
                              (g[i.option]
                                ? (t.removeClass(e, "pswp__element--disabled"),
                                  i.onInit && i.onInit(e))
                                : t.addClass(e, "pswp__element--disabled"));
                      }
                  };
                o(r.children);
                var a = t.getChildByClass(r, "pswp__top-bar");
                a && o(a.children);
              };
            (x.init = function () {
              t.extend(e.options, E, !0),
                (g = e.options),
                (r = t.getChildByClass(e.scrollWrap, "pswp__ui")),
                (d = e.listen),
                $(),
                d("beforeChange", x.update),
                d("doubleTap", function (t) {
                  var n = e.currItem.initialZoomLevel;
                  e.getZoomLevel() !== n
                    ? e.zoomTo(n, t, 333)
                    : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333);
                }),
                d("preventDragEvent", function (e, t, n) {
                  var r = e.target || e.srcElement;
                  r &&
                    r.getAttribute("class") &&
                    e.type.indexOf("mouse") > -1 &&
                    (r.getAttribute("class").indexOf("__caption") > 0 ||
                      /(SMALL|STRONG|EM)/i.test(r.tagName)) &&
                    (n.prevent = !1);
                }),
                d("bindEvents", function () {
                  t.bind(r, "pswpTap click", S),
                    t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                    e.likelyTouchDevice ||
                      t.bind(e.scrollWrap, "mouseover", x.onMouseOver);
                }),
                d("unbindEvents", function () {
                  k || D(),
                    w && clearInterval(w),
                    t.unbind(document, "mouseout", F),
                    t.unbind(document, "mousemove", j),
                    t.unbind(r, "pswpTap click", S),
                    t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                    t.unbind(e.scrollWrap, "mouseover", x.onMouseOver),
                    n &&
                      (t.unbind(document, n.eventK, x.updateFullscreen),
                      n.isFullscreen() &&
                        ((g.hideAnimationDuration = 0), n.exit()),
                      (n = null));
                }),
                d("destroy", function () {
                  g.captionEl &&
                    (o && r.removeChild(o),
                    t.removeClass(i, "pswp__caption--empty")),
                    l && (l.children[0].onclick = null),
                    t.removeClass(r, "pswp__ui--over-close"),
                    t.addClass(r, "pswp__ui--hidden"),
                    x.setIdle(!1);
                }),
                g.showAnimationDuration || t.removeClass(r, "pswp__ui--hidden"),
                d("initialZoomIn", function () {
                  g.showAnimationDuration &&
                    t.removeClass(r, "pswp__ui--hidden");
                }),
                d("initialZoomOut", function () {
                  t.addClass(r, "pswp__ui--hidden");
                }),
                d("parseVerticalMargin", H),
                Z(),
                g.shareEl && s && l && (k = !0),
                _(),
                W(),
                P(),
                R();
            }),
              (x.setIdle = function (e) {
                (c = e), z(r, "ui--idle", e);
              }),
              (x.update = function () {
                T && e.currItem
                  ? (x.updateIndexIndicator(),
                    g.captionEl &&
                      (g.addCaptionHTMLFn(e.currItem, i),
                      z(i, "caption--empty", !e.currItem.title)),
                    (C = !0))
                  : (C = !1),
                  k || D(),
                  _();
              }),
              (x.updateFullscreen = function (r) {
                r &&
                  setTimeout(function () {
                    e.setScrollOffset(0, t.getScrollY());
                  }, 50),
                  t[(n.isFullscreen() ? "add" : "remove") + "Class"](
                    e.template,
                    "pswp--fs"
                  );
              }),
              (x.updateIndexIndicator = function () {
                g.counterEl &&
                  (a.innerHTML =
                    e.getCurrentIndex() +
                    1 +
                    g.indexIndicatorSep +
                    g.getNumItemsFn());
              }),
              (x.onGlobalTap = function (n) {
                n = n || window.event;
                var r = n.target || n.srcElement;
                if (!v)
                  if (n.detail && "mouse" === n.detail.pointerType) {
                    if (O(r)) return void e.close();
                    t.hasClass(r, "pswp__img") &&
                      (1 === e.getZoomLevel() &&
                      e.getZoomLevel() <= e.currItem.fitRatio
                        ? g.clickToCloseNonZoomable && e.close()
                        : e.toggleDesktopZoom(n.detail.releasePoint));
                  } else if (
                    (g.tapToToggleControls &&
                      (T ? x.hideControls() : x.showControls()),
                    g.tapToClose && (t.hasClass(r, "pswp__img") || O(r)))
                  )
                    return void e.close();
              }),
              (x.onMouseOver = function (e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                z(r, "ui--over-close", O(t));
              }),
              (x.hideControls = function () {
                t.addClass(r, "pswp__ui--hidden"), (T = !1);
              }),
              (x.showControls = function () {
                (T = !0), C || x.update(), t.removeClass(r, "pswp__ui--hidden");
              }),
              (x.supportsFullscreen = function () {
                var e = document;
                return !!(
                  e.exitFullscreen ||
                  e.mozCancelFullScreen ||
                  e.webkitExitFullscreen ||
                  e.msExitFullscreen
                );
              }),
              (x.getFullscreenAPI = function () {
                var t,
                  n = document.documentElement,
                  r = "fullscreenchange";
                return (
                  n.requestFullscreen
                    ? (t = {
                        enterK: "requestFullscreen",
                        exitK: "exitFullscreen",
                        elementK: "fullscreenElement",
                        eventK: r,
                      })
                    : n.mozRequestFullScreen
                    ? (t = {
                        enterK: "mozRequestFullScreen",
                        exitK: "mozCancelFullScreen",
                        elementK: "mozFullScreenElement",
                        eventK: "moz" + r,
                      })
                    : n.webkitRequestFullscreen
                    ? (t = {
                        enterK: "webkitRequestFullscreen",
                        exitK: "webkitExitFullscreen",
                        elementK: "webkitFullscreenElement",
                        eventK: "webkit" + r,
                      })
                    : n.msRequestFullscreen &&
                      (t = {
                        enterK: "msRequestFullscreen",
                        exitK: "msExitFullscreen",
                        elementK: "msFullscreenElement",
                        eventK: "MSFullscreenChange",
                      }),
                  t &&
                    ((t.enter = function () {
                      return (
                        (u = g.closeOnScroll),
                        (g.closeOnScroll = !1),
                        "webkitRequestFullscreen" !== this.enterK
                          ? e.template[this.enterK]()
                          : void e.template[this.enterK](
                              Element.ALLOW_KEYBOARD_INPUT
                            )
                      );
                    }),
                    (t.exit = function () {
                      return (g.closeOnScroll = u), document[this.exitK]();
                    }),
                    (t.isFullscreen = function () {
                      return document[this.elementK];
                    })),
                  t
                );
              });
          };
          return e;
        });
      },
      {},
    ],
    24: [
      function (e, t, n) {
        !(function (e, r) {
          "function" == typeof define && define.amd
            ? define(r)
            : "object" == typeof n
            ? (t.exports = r())
            : (e.PhotoSwipe = r());
        })(this, function () {
          "use strict";
          var e = function (e, t, n, r) {
            var i = {
              features: null,
              bind: function (e, t, n, r) {
                var i = (r ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var o = 0; o < t.length; o++) t[o] && e[i](t[o], n, !1);
              },
              isArray: function (e) {
                return e instanceof Array;
              },
              createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n;
              },
              getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop;
              },
              unbind: function (e, t, n) {
                i.bind(e, t, n, !0);
              },
              removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className
                  .replace(n, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "");
              },
              addClass: function (e, t) {
                i.hasClass(e, t) ||
                  (e.className += (e.className ? " " : "") + t);
              },
              hasClass: function (e, t) {
                return (
                  e.className &&
                  new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                );
              },
              getChildByClass: function (e, t) {
                for (var n = e.firstChild; n; ) {
                  if (i.hasClass(n, t)) return n;
                  n = n.nextSibling;
                }
              },
              arraySearch: function (e, t, n) {
                for (var r = e.length; r--; ) if (e[r][n] === t) return r;
                return -1;
              },
              extend: function (e, t, n) {
                for (var r in t)
                  if (t.hasOwnProperty(r)) {
                    if (n && e.hasOwnProperty(r)) continue;
                    e[r] = t[r];
                  }
              },
              easing: {
                sine: {
                  out: function (e) {
                    return Math.sin(e * (Math.PI / 2));
                  },
                  inOut: function (e) {
                    return -(Math.cos(Math.PI * e) - 1) / 2;
                  },
                },
                cubic: {
                  out: function (e) {
                    return --e * e * e + 1;
                  },
                },
              },
              detectFeatures: function () {
                if (i.features) return i.features;
                var e = i.createEl(),
                  t = e.style,
                  n = "",
                  r = {};
                if (
                  ((r.oldIE = document.all && !document.addEventListener),
                  (r.touch = "ontouchstart" in window),
                  window.requestAnimationFrame &&
                    ((r.raf = window.requestAnimationFrame),
                    (r.caf = window.cancelAnimationFrame)),
                  (r.pointerEvent =
                    !!window.PointerEvent || navigator.msPointerEnabled),
                  !r.pointerEvent)
                ) {
                  var o = navigator.userAgent;
                  if (/iP(hone|od)/.test(navigator.platform)) {
                    var a = navigator.appVersion.match(
                      /OS (\d+)_(\d+)_?(\d+)?/
                    );
                    a &&
                      a.length > 0 &&
                      ((a = parseInt(a[1], 10)),
                      a >= 1 && a < 8 && (r.isOldIOSPhone = !0));
                  }
                  var s = o.match(/Android\s([0-9\.]*)/),
                    l = s ? s[1] : 0;
                  (l = parseFloat(l)),
                    l >= 1 &&
                      (l < 4.4 && (r.isOldAndroid = !0),
                      (r.androidVersion = l)),
                    (r.isMobileOpera = /opera mini|opera mobi/i.test(o));
                }
                for (
                  var u,
                    c,
                    d = ["transform", "perspective", "animationName"],
                    f = ["", "webkit", "Moz", "ms", "O"],
                    p = 0;
                  p < 4;
                  p++
                ) {
                  n = f[p];
                  for (var h = 0; h < 3; h++)
                    (u = d[h]),
                      (c =
                        n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u)),
                      !r[u] && c in t && (r[u] = c);
                  n &&
                    !r.raf &&
                    ((n = n.toLowerCase()),
                    (r.raf = window[n + "RequestAnimationFrame"]),
                    r.raf &&
                      (r.caf =
                        window[n + "CancelAnimationFrame"] ||
                        window[n + "CancelRequestAnimationFrame"]));
                }
                if (!r.raf) {
                  var m = 0;
                  (r.raf = function (e) {
                    var t = new Date().getTime(),
                      n = Math.max(0, 16 - (t - m)),
                      r = window.setTimeout(function () {
                        e(t + n);
                      }, n);
                    return (m = t + n), r;
                  }),
                    (r.caf = function (e) {
                      clearTimeout(e);
                    });
                }
                return (
                  (r.svg =
                    !!document.createElementNS &&
                    !!document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "svg"
                    ).createSVGRect),
                  (i.features = r),
                  r
                );
              },
            };
            i.detectFeatures(),
              i.features.oldIE &&
                (i.bind = function (e, t, n, r) {
                  t = t.split(" ");
                  for (
                    var i,
                      o = (r ? "detach" : "attach") + "Event",
                      a = function () {
                        n.handleEvent.call(n);
                      },
                      s = 0;
                    s < t.length;
                    s++
                  )
                    if ((i = t[s]))
                      if ("object" == typeof n && n.handleEvent) {
                        if (r) {
                          if (!n["oldIE" + i]) return !1;
                        } else n["oldIE" + i] = a;
                        e[o]("on" + i, n["oldIE" + i]);
                      } else e[o]("on" + i, n);
                });
            var o = this,
              a = 25,
              s = 3,
              l = {
                allowPanToNext: !0,
                spacing: 0.12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: 0.75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: 0.35,
                panEndFriction: 0.35,
                isClickableElement: function (e) {
                  return "A" === e.tagName;
                },
                getDoubleTapZoom: function (e, t) {
                  return e ? 1 : t.initialZoomLevel < 0.7 ? 1 : 1.33;
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit",
              };
            i.extend(l, r);
            var u,
              c,
              d,
              f,
              p,
              h,
              m,
              g,
              v,
              y,
              w,
              b,
              x,
              C,
              T,
              k,
              E,
              S,
              A,
              z,
              _,
              N,
              D,
              I,
              L,
              O,
              M,
              j,
              F,
              P,
              R,
              q,
              H,
              W,
              $,
              B,
              Z,
              U,
              K,
              X,
              V,
              Y,
              G,
              Q,
              J,
              ee,
              te,
              ne,
              re,
              ie,
              oe,
              ae,
              se,
              le,
              ue,
              ce,
              de,
              fe = function () {
                return { x: 0, y: 0 };
              },
              pe = fe(),
              he = fe(),
              me = fe(),
              ge = {},
              ve = 0,
              ye = {},
              we = fe(),
              be = 0,
              xe = !0,
              Ce = [],
              Te = {},
              ke = !1,
              Ee = function (e, t) {
                i.extend(o, t.publicMethods), Ce.push(e);
              },
              Se = function (e) {
                var t = en();
                return e > t - 1 ? e - t : e < 0 ? t + e : e;
              },
              Ae = {},
              ze = function (e, t) {
                return Ae[e] || (Ae[e] = []), Ae[e].push(t);
              },
              _e = function (e) {
                var t = Ae[e];
                if (t) {
                  var n = Array.prototype.slice.call(arguments);
                  n.shift();
                  for (var r = 0; r < t.length; r++) t[r].apply(o, n);
                }
              },
              Ne = function () {
                return new Date().getTime();
              },
              De = function (e) {
                (ue = e), (o.bg.style.opacity = e * l.bgOpacity);
              },
              Ie = function (e, t, n, r, i) {
                (!ke || (i && i !== o.currItem)) &&
                  (r /= i ? i.fitRatio : o.currItem.fitRatio),
                  (e[N] = b + t + "px, " + n + "px" + x + " scale(" + r + ")");
              },
              Le = function (e) {
                ie &&
                  (e &&
                    (y > o.currItem.fitRatio
                      ? ke || (pn(o.currItem, !1, !0), (ke = !0))
                      : ke && (pn(o.currItem), (ke = !1))),
                  Ie(ie, me.x, me.y, y));
              },
              Oe = function (e) {
                e.container &&
                  Ie(
                    e.container.style,
                    e.initialPosition.x,
                    e.initialPosition.y,
                    e.initialZoomLevel,
                    e
                  );
              },
              Me = function (e, t) {
                t[N] = b + e + "px, 0px" + x;
              },
              je = function (e, t) {
                if (!l.loop && t) {
                  var n = f + (we.x * ve - e) / we.x,
                    r = Math.round(e - wt.x);
                  ((n < 0 && r > 0) || (n >= en() - 1 && r < 0)) &&
                    (e = wt.x + r * l.mainScrollEndFriction);
                }
                (wt.x = e), Me(e, p);
              },
              Fe = function (e, t) {
                var n = bt[e] - ye[e];
                return he[e] + pe[e] + n - n * (t / w);
              },
              Pe = function (e, t) {
                (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
              },
              Re = function (e) {
                (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
              },
              qe = null,
              He = function () {
                qe &&
                  (i.unbind(document, "mousemove", He),
                  i.addClass(e, "pswp--has_mouse"),
                  (l.mouseUsed = !0),
                  _e("mouseUsed")),
                  (qe = setTimeout(function () {
                    qe = null;
                  }, 100));
              },
              We = function () {
                i.bind(document, "keydown", o),
                  R.transform && i.bind(o.scrollWrap, "click", o),
                  l.mouseUsed || i.bind(document, "mousemove", He),
                  i.bind(window, "resize scroll orientationchange", o),
                  _e("bindEvents");
              },
              $e = function () {
                i.unbind(window, "resize scroll orientationchange", o),
                  i.unbind(window, "scroll", v.scroll),
                  i.unbind(document, "keydown", o),
                  i.unbind(document, "mousemove", He),
                  R.transform && i.unbind(o.scrollWrap, "click", o),
                  K && i.unbind(window, m, o),
                  clearTimeout(q),
                  _e("unbindEvents");
              },
              Be = function (e, t) {
                var n = un(o.currItem, ge, e);
                return t && (re = n), n;
              },
              Ze = function (e) {
                return e || (e = o.currItem), e.initialZoomLevel;
              },
              Ue = function (e) {
                return e || (e = o.currItem), e.w > 0 ? l.maxSpreadZoom : 1;
              },
              Ke = function (e, t, n, r) {
                return r === o.currItem.initialZoomLevel
                  ? ((n[e] = o.currItem.initialPosition[e]), !0)
                  : ((n[e] = Fe(e, r)),
                    n[e] > t.min[e]
                      ? ((n[e] = t.min[e]), !0)
                      : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
              },
              Xe = function () {
                if (N) {
                  var t = R.perspective && !I;
                  return (
                    (b = "translate" + (t ? "3d(" : "(")),
                    void (x = R.perspective ? ", 0px)" : ")")
                  );
                }
                (N = "left"),
                  i.addClass(e, "pswp--ie"),
                  (Me = function (e, t) {
                    t.left = e + "px";
                  }),
                  (Oe = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                      n = e.container.style,
                      r = t * e.w,
                      i = t * e.h;
                    (n.width = r + "px"),
                      (n.height = i + "px"),
                      (n.left = e.initialPosition.x + "px"),
                      (n.top = e.initialPosition.y + "px");
                  }),
                  (Le = function () {
                    if (ie) {
                      var e = ie,
                        t = o.currItem,
                        n = t.fitRatio > 1 ? 1 : t.fitRatio,
                        r = n * t.w,
                        i = n * t.h;
                      (e.width = r + "px"),
                        (e.height = i + "px"),
                        (e.left = me.x + "px"),
                        (e.top = me.y + "px");
                    }
                  });
              },
              Ve = function (e) {
                var t = "";
                l.escKey && 27 === e.keyCode
                  ? (t = "close")
                  : l.arrowKeys &&
                    (37 === e.keyCode
                      ? (t = "prev")
                      : 39 === e.keyCode && (t = "next")),
                  t &&
                    (e.ctrlKey ||
                      e.altKey ||
                      e.shiftKey ||
                      e.metaKey ||
                      (e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1),
                      o[t]()));
              },
              Ye = function (e) {
                e &&
                  (Y || V || oe || Z) &&
                  (e.preventDefault(), e.stopPropagation());
              },
              Ge = function () {
                o.setScrollOffset(0, i.getScrollY());
              },
              Qe = {},
              Je = 0,
              et = function (e) {
                Qe[e] && (Qe[e].raf && O(Qe[e].raf), Je--, delete Qe[e]);
              },
              tt = function (e) {
                Qe[e] && et(e), Qe[e] || (Je++, (Qe[e] = {}));
              },
              nt = function () {
                for (var e in Qe) Qe.hasOwnProperty(e) && et(e);
              },
              rt = function (e, t, n, r, i, o, a) {
                var s,
                  l = Ne();
                tt(e);
                var u = function () {
                  if (Qe[e]) {
                    if (((s = Ne() - l), s >= r))
                      return et(e), o(n), void (a && a());
                    o((n - t) * i(s / r) + t), (Qe[e].raf = L(u));
                  }
                };
                u();
              },
              it = {
                shout: _e,
                listen: ze,
                viewportSize: ge,
                options: l,
                isMainScrollAnimating: function () {
                  return oe;
                },
                getZoomLevel: function () {
                  return y;
                },
                getCurrentIndex: function () {
                  return f;
                },
                isDragging: function () {
                  return K;
                },
                isZooming: function () {
                  return ee;
                },
                setScrollOffset: function (e, t) {
                  (ye.x = e), (P = ye.y = t), _e("updateScrollOffset", ye);
                },
                applyZoomPan: function (e, t, n, r) {
                  (me.x = t), (me.y = n), (y = e), Le(r);
                },
                init: function () {
                  if (!u && !c) {
                    var n;
                    (o.framework = i),
                      (o.template = e),
                      (o.bg = i.getChildByClass(e, "pswp__bg")),
                      (M = e.className),
                      (u = !0),
                      (R = i.detectFeatures()),
                      (L = R.raf),
                      (O = R.caf),
                      (N = R.transform),
                      (F = R.oldIE),
                      (o.scrollWrap = i.getChildByClass(
                        e,
                        "pswp__scroll-wrap"
                      )),
                      (o.container = i.getChildByClass(
                        o.scrollWrap,
                        "pswp__container"
                      )),
                      (p = o.container.style),
                      (o.itemHolders = k =
                        [
                          { el: o.container.children[0], wrap: 0, index: -1 },
                          { el: o.container.children[1], wrap: 0, index: -1 },
                          { el: o.container.children[2], wrap: 0, index: -1 },
                        ]),
                      (k[0].el.style.display = k[2].el.style.display = "none"),
                      Xe(),
                      (v = {
                        resize: o.updateSize,
                        orientationchange: function () {
                          clearTimeout(q),
                            (q = setTimeout(function () {
                              ge.x !== o.scrollWrap.clientWidth &&
                                o.updateSize();
                            }, 500));
                        },
                        scroll: Ge,
                        keydown: Ve,
                        click: Ye,
                      });
                    var r =
                      R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                    for (
                      (R.animationName && R.transform && !r) ||
                        (l.showAnimationDuration = l.hideAnimationDuration = 0),
                        n = 0;
                      n < Ce.length;
                      n++
                    )
                      o["init" + Ce[n]]();
                    if (t) {
                      var a = (o.ui = new t(o, i));
                      a.init();
                    }
                    _e("firstUpdate"),
                      (f = f || l.index || 0),
                      (isNaN(f) || f < 0 || f >= en()) && (f = 0),
                      (o.currItem = Jt(f)),
                      (R.isOldIOSPhone || R.isOldAndroid) && (xe = !1),
                      e.setAttribute("aria-hidden", "false"),
                      l.modal &&
                        (xe
                          ? (e.style.position = "fixed")
                          : ((e.style.position = "absolute"),
                            (e.style.top = i.getScrollY() + "px"))),
                      void 0 === P &&
                        (_e("initialLayout"), (P = j = i.getScrollY()));
                    var d = "pswp--open ";
                    for (
                      l.mainClass && (d += l.mainClass + " "),
                        l.showHideOpacity && (d += "pswp--animate_opacity "),
                        d += I ? "pswp--touch" : "pswp--notouch",
                        d += R.animationName ? " pswp--css_animation" : "",
                        d += R.svg ? " pswp--svg" : "",
                        i.addClass(e, d),
                        o.updateSize(),
                        h = -1,
                        be = null,
                        n = 0;
                      n < s;
                      n++
                    )
                      Me((n + h) * we.x, k[n].el.style);
                    F || i.bind(o.scrollWrap, g, o),
                      ze("initialZoomInEnd", function () {
                        o.setContent(k[0], f - 1),
                          o.setContent(k[2], f + 1),
                          (k[0].el.style.display = k[2].el.style.display =
                            "block"),
                          l.focus && e.focus(),
                          We();
                      }),
                      o.setContent(k[1], f),
                      o.updateCurrItem(),
                      _e("afterInit"),
                      xe ||
                        (C = setInterval(function () {
                          Je ||
                            K ||
                            ee ||
                            y !== o.currItem.initialZoomLevel ||
                            o.updateSize();
                        }, 1e3)),
                      i.addClass(e, "pswp--visible");
                  }
                },
                close: function () {
                  u &&
                    ((u = !1),
                    (c = !0),
                    _e("close"),
                    $e(),
                    nn(o.currItem, null, !0, o.destroy));
                },
                destroy: function () {
                  _e("destroy"),
                    Vt && clearTimeout(Vt),
                    e.setAttribute("aria-hidden", "true"),
                    (e.className = M),
                    C && clearInterval(C),
                    i.unbind(o.scrollWrap, g, o),
                    i.unbind(window, "scroll", o),
                    Et(),
                    nt(),
                    (Ae = null);
                },
                panTo: function (e, t, n) {
                  n ||
                    (e > re.min.x
                      ? (e = re.min.x)
                      : e < re.max.x && (e = re.max.x),
                    t > re.min.y
                      ? (t = re.min.y)
                      : t < re.max.y && (t = re.max.y)),
                    (me.x = e),
                    (me.y = t),
                    Le();
                },
                handleEvent: function (e) {
                  (e = e || window.event), v[e.type] && v[e.type](e);
                },
                goTo: function (e) {
                  e = Se(e);
                  var t = e - f;
                  (be = t),
                    (f = e),
                    (o.currItem = Jt(f)),
                    (ve -= t),
                    je(we.x * ve),
                    nt(),
                    (oe = !1),
                    o.updateCurrItem();
                },
                next: function () {
                  o.goTo(f + 1);
                },
                prev: function () {
                  o.goTo(f - 1);
                },
                updateCurrZoomItem: function (e) {
                  if ((e && _e("beforeChange", 0), k[1].el.children.length)) {
                    var t = k[1].el.children[0];
                    ie = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
                  } else ie = null;
                  (re = o.currItem.bounds),
                    (w = y = o.currItem.initialZoomLevel),
                    (me.x = re.center.x),
                    (me.y = re.center.y),
                    e && _e("afterChange");
                },
                invalidateCurrItems: function () {
                  T = !0;
                  for (var e = 0; e < s; e++)
                    k[e].item && (k[e].item.needsUpdate = !0);
                },
                updateCurrItem: function (e) {
                  if (0 !== be) {
                    var t,
                      n = Math.abs(be);
                    if (!(e && n < 2)) {
                      (o.currItem = Jt(f)),
                        (ke = !1),
                        _e("beforeChange", be),
                        n >= s && ((h += be + (be > 0 ? -s : s)), (n = s));
                      for (var r = 0; r < n; r++)
                        be > 0
                          ? ((t = k.shift()),
                            (k[s - 1] = t),
                            h++,
                            Me((h + 2) * we.x, t.el.style),
                            o.setContent(t, f - n + r + 1 + 1))
                          : ((t = k.pop()),
                            k.unshift(t),
                            h--,
                            Me(h * we.x, t.el.style),
                            o.setContent(t, f + n - r - 1 - 1));
                      if (ie && 1 === Math.abs(be)) {
                        var i = Jt(E);
                        i.initialZoomLevel !== y && (un(i, ge), pn(i), Oe(i));
                      }
                      (be = 0),
                        o.updateCurrZoomItem(),
                        (E = f),
                        _e("afterChange");
                    }
                  }
                },
                updateSize: function (t) {
                  if (!xe && l.modal) {
                    var n = i.getScrollY();
                    if (
                      (P !== n && ((e.style.top = n + "px"), (P = n)),
                      !t &&
                        Te.x === window.innerWidth &&
                        Te.y === window.innerHeight)
                    )
                      return;
                    (Te.x = window.innerWidth),
                      (Te.y = window.innerHeight),
                      (e.style.height = Te.y + "px");
                  }
                  if (
                    ((ge.x = o.scrollWrap.clientWidth),
                    (ge.y = o.scrollWrap.clientHeight),
                    Ge(),
                    (we.x = ge.x + Math.round(ge.x * l.spacing)),
                    (we.y = ge.y),
                    je(we.x * ve),
                    _e("beforeResize"),
                    void 0 !== h)
                  ) {
                    for (var r, a, u, c = 0; c < s; c++)
                      (r = k[c]),
                        Me((c + h) * we.x, r.el.style),
                        (u = f + c - 1),
                        l.loop && en() > 2 && (u = Se(u)),
                        (a = Jt(u)),
                        a && (T || a.needsUpdate || !a.bounds)
                          ? (o.cleanSlide(a),
                            o.setContent(r, u),
                            1 === c &&
                              ((o.currItem = a), o.updateCurrZoomItem(!0)),
                            (a.needsUpdate = !1))
                          : r.index === -1 && u >= 0 && o.setContent(r, u),
                        a && a.container && (un(a, ge), pn(a), Oe(a));
                    T = !1;
                  }
                  (w = y = o.currItem.initialZoomLevel),
                    (re = o.currItem.bounds),
                    re && ((me.x = re.center.x), (me.y = re.center.y), Le(!0)),
                    _e("resize");
                },
                zoomTo: function (e, t, n, r, o) {
                  t &&
                    ((w = y),
                    (bt.x = Math.abs(t.x) - me.x),
                    (bt.y = Math.abs(t.y) - me.y),
                    Pe(he, me));
                  var a = Be(e, !1),
                    s = {};
                  Ke("x", a, s, e), Ke("y", a, s, e);
                  var l = y,
                    u = { x: me.x, y: me.y };
                  Re(s);
                  var c = function (t) {
                    1 === t
                      ? ((y = e), (me.x = s.x), (me.y = s.y))
                      : ((y = (e - l) * t + l),
                        (me.x = (s.x - u.x) * t + u.x),
                        (me.y = (s.y - u.y) * t + u.y)),
                      o && o(t),
                      Le(1 === t);
                  };
                  n
                    ? rt("customZoomTo", 0, 1, n, r || i.easing.sine.inOut, c)
                    : c(1);
                },
              },
              ot = 30,
              at = 10,
              st = {},
              lt = {},
              ut = {},
              ct = {},
              dt = {},
              ft = [],
              pt = {},
              ht = [],
              mt = {},
              gt = 0,
              vt = fe(),
              yt = 0,
              wt = fe(),
              bt = fe(),
              xt = fe(),
              Ct = function (e, t) {
                return e.x === t.x && e.y === t.y;
              },
              Tt = function (e, t) {
                return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a;
              },
              kt = function (e, t) {
                return (
                  (mt.x = Math.abs(e.x - t.x)),
                  (mt.y = Math.abs(e.y - t.y)),
                  Math.sqrt(mt.x * mt.x + mt.y * mt.y)
                );
              },
              Et = function () {
                G && (O(G), (G = null));
              },
              St = function () {
                K && ((G = L(St)), Wt());
              },
              At = function () {
                return !(
                  "fit" === l.scaleMode && y === o.currItem.initialZoomLevel
                );
              },
              zt = function (e, t) {
                return (
                  !(!e || e === document) &&
                  !(
                    e.getAttribute("class") &&
                    e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
                  ) &&
                  (t(e) ? e : zt(e.parentNode, t))
                );
              },
              _t = {},
              Nt = function (e, t) {
                return (
                  (_t.prevent = !zt(e.target, l.isClickableElement)),
                  _e("preventDragEvent", e, t, _t),
                  _t.prevent
                );
              },
              Dt = function (e, t) {
                return (
                  (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t
                );
              },
              It = function (e, t, n) {
                (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
              },
              Lt = function (e, t, n) {
                if (e - W > 50) {
                  var r = ht.length > 2 ? ht.shift() : {};
                  (r.x = t), (r.y = n), ht.push(r), (W = e);
                }
              },
              Ot = function () {
                var e = me.y - o.currItem.initialPosition.y;
                return 1 - Math.abs(e / (ge.y / 2));
              },
              Mt = {},
              jt = {},
              Ft = [],
              Pt = function (e) {
                for (; Ft.length > 0; ) Ft.pop();
                return (
                  D
                    ? ((de = 0),
                      ft.forEach(function (e) {
                        0 === de ? (Ft[0] = e) : 1 === de && (Ft[1] = e), de++;
                      }))
                    : e.type.indexOf("touch") > -1
                    ? e.touches &&
                      e.touches.length > 0 &&
                      ((Ft[0] = Dt(e.touches[0], Mt)),
                      e.touches.length > 1 && (Ft[1] = Dt(e.touches[1], jt)))
                    : ((Mt.x = e.pageX),
                      (Mt.y = e.pageY),
                      (Mt.id = ""),
                      (Ft[0] = Mt)),
                  Ft
                );
              },
              Rt = function (e, t) {
                var n,
                  r,
                  i,
                  a,
                  s = 0,
                  u = me[e] + t[e],
                  c = t[e] > 0,
                  d = wt.x + t.x,
                  f = wt.x - pt.x;
                return (
                  (n = u > re.min[e] || u < re.max[e] ? l.panEndFriction : 1),
                  (u = me[e] + t[e] * n),
                  (!l.allowPanToNext && y !== o.currItem.initialZoomLevel) ||
                  (ie
                    ? "h" !== ae ||
                      "x" !== e ||
                      V ||
                      (c
                        ? (u > re.min[e] &&
                            ((n = l.panEndFriction),
                            (s = re.min[e] - u),
                            (r = re.min[e] - he[e])),
                          (r <= 0 || f < 0) && en() > 1
                            ? ((a = d), f < 0 && d > pt.x && (a = pt.x))
                            : re.min.x !== re.max.x && (i = u))
                        : (u < re.max[e] &&
                            ((n = l.panEndFriction),
                            (s = u - re.max[e]),
                            (r = he[e] - re.max[e])),
                          (r <= 0 || f > 0) && en() > 1
                            ? ((a = d), f > 0 && d < pt.x && (a = pt.x))
                            : re.min.x !== re.max.x && (i = u)))
                    : (a = d),
                  "x" !== e)
                    ? void (
                        oe ||
                        Q ||
                        (y > o.currItem.fitRatio && (me[e] += t[e] * n))
                      )
                    : (void 0 !== a && (je(a, !0), (Q = a !== pt.x)),
                      re.min.x !== re.max.x &&
                        (void 0 !== i ? (me.x = i) : Q || (me.x += t.x * n)),
                      void 0 !== a)
                );
              },
              qt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                  if (Qt) return void e.preventDefault();
                  if (!U || "mousedown" !== e.type) {
                    if (
                      (Nt(e, !0) && e.preventDefault(), _e("pointerDown"), D)
                    ) {
                      var t = i.arraySearch(ft, e.pointerId, "id");
                      t < 0 && (t = ft.length),
                        (ft[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
                    }
                    var n = Pt(e),
                      r = n.length;
                    (J = null),
                      nt(),
                      (K && 1 !== r) ||
                        ((K = se = !0),
                        i.bind(window, m, o),
                        (B = ce = le = Z = Q = Y = X = V = !1),
                        (ae = null),
                        _e("firstTouchStart", n),
                        Pe(he, me),
                        (pe.x = pe.y = 0),
                        Pe(ct, n[0]),
                        Pe(dt, ct),
                        (pt.x = we.x * ve),
                        (ht = [{ x: ct.x, y: ct.y }]),
                        (W = H = Ne()),
                        Be(y, !0),
                        Et(),
                        St()),
                      !ee &&
                        r > 1 &&
                        !oe &&
                        !Q &&
                        ((w = y),
                        (V = !1),
                        (ee = X = !0),
                        (pe.y = pe.x = 0),
                        Pe(he, me),
                        Pe(st, n[0]),
                        Pe(lt, n[1]),
                        It(st, lt, xt),
                        (bt.x = Math.abs(xt.x) - me.x),
                        (bt.y = Math.abs(xt.y) - me.y),
                        (te = ne = kt(st, lt)));
                  }
                }
              },
              Ht = function (e) {
                if ((e.preventDefault(), D)) {
                  var t = i.arraySearch(ft, e.pointerId, "id");
                  if (t > -1) {
                    var n = ft[t];
                    (n.x = e.pageX), (n.y = e.pageY);
                  }
                }
                if (K) {
                  var r = Pt(e);
                  if (ae || Y || ee) J = r;
                  else if (wt.x !== we.x * ve) ae = "h";
                  else {
                    var o = Math.abs(r[0].x - ct.x) - Math.abs(r[0].y - ct.y);
                    Math.abs(o) >= at && ((ae = o > 0 ? "h" : "v"), (J = r));
                  }
                }
              },
              Wt = function () {
                if (J) {
                  var e = J.length;
                  if (0 !== e)
                    if (
                      (Pe(st, J[0]),
                      (ut.x = st.x - ct.x),
                      (ut.y = st.y - ct.y),
                      ee && e > 1)
                    ) {
                      if (
                        ((ct.x = st.x),
                        (ct.y = st.y),
                        !ut.x && !ut.y && Ct(J[1], lt))
                      )
                        return;
                      Pe(lt, J[1]), V || ((V = !0), _e("zoomGestureStarted"));
                      var t = kt(st, lt),
                        n = Kt(t);
                      n >
                        o.currItem.initialZoomLevel +
                          o.currItem.initialZoomLevel / 15 && (ce = !0);
                      var r = 1,
                        i = Ze(),
                        a = Ue();
                      if (n < i)
                        if (
                          l.pinchToClose &&
                          !ce &&
                          w <= o.currItem.initialZoomLevel
                        ) {
                          var s = i - n,
                            u = 1 - s / (i / 1.2);
                          De(u), _e("onPinchClose", u), (le = !0);
                        } else
                          (r = (i - n) / i),
                            r > 1 && (r = 1),
                            (n = i - r * (i / 3));
                      else
                        n > a &&
                          ((r = (n - a) / (6 * i)),
                          r > 1 && (r = 1),
                          (n = a + r * i));
                      r < 0 && (r = 0),
                        (te = t),
                        It(st, lt, vt),
                        (pe.x += vt.x - xt.x),
                        (pe.y += vt.y - xt.y),
                        Pe(xt, vt),
                        (me.x = Fe("x", n)),
                        (me.y = Fe("y", n)),
                        (B = n > y),
                        (y = n),
                        Le();
                    } else {
                      if (!ae) return;
                      if (
                        (se &&
                          ((se = !1),
                          Math.abs(ut.x) >= at && (ut.x -= J[0].x - dt.x),
                          Math.abs(ut.y) >= at && (ut.y -= J[0].y - dt.y)),
                        (ct.x = st.x),
                        (ct.y = st.y),
                        0 === ut.x && 0 === ut.y)
                      )
                        return;
                      if ("v" === ae && l.closeOnVerticalDrag && !At()) {
                        (pe.y += ut.y), (me.y += ut.y);
                        var c = Ot();
                        return (
                          (Z = !0), _e("onVerticalDrag", c), De(c), void Le()
                        );
                      }
                      Lt(Ne(), st.x, st.y), (Y = !0), (re = o.currItem.bounds);
                      var d = Rt("x", ut);
                      d || (Rt("y", ut), Re(me), Le());
                    }
                }
              },
              $t = function (e) {
                if (R.isOldAndroid) {
                  if (U && "mouseup" === e.type) return;
                  e.type.indexOf("touch") > -1 &&
                    (clearTimeout(U),
                    (U = setTimeout(function () {
                      U = 0;
                    }, 600)));
                }
                _e("pointerUp"), Nt(e, !1) && e.preventDefault();
                var t;
                if (D) {
                  var n = i.arraySearch(ft, e.pointerId, "id");
                  if (n > -1)
                    if (
                      ((t = ft.splice(n, 1)[0]), navigator.msPointerEnabled)
                    ) {
                      var r = { 4: "mouse", 2: "touch", 3: "pen" };
                      (t.type = r[e.pointerType]),
                        t.type || (t.type = e.pointerType || "mouse");
                    } else t.type = e.pointerType || "mouse";
                }
                var a,
                  s = Pt(e),
                  u = s.length;
                if (("mouseup" === e.type && (u = 0), 2 === u))
                  return (J = null), !0;
                1 === u && Pe(dt, s[0]),
                  0 !== u ||
                    ae ||
                    oe ||
                    (t ||
                      ("mouseup" === e.type
                        ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
                        : e.changedTouches &&
                          e.changedTouches[0] &&
                          (t = {
                            x: e.changedTouches[0].pageX,
                            y: e.changedTouches[0].pageY,
                            type: "touch",
                          })),
                    _e("touchRelease", e, t));
                var c = -1;
                if (
                  (0 === u &&
                    ((K = !1),
                    i.unbind(window, m, o),
                    Et(),
                    ee ? (c = 0) : yt !== -1 && (c = Ne() - yt)),
                  (yt = 1 === u ? Ne() : -1),
                  (a = c !== -1 && c < 150 ? "zoom" : "swipe"),
                  ee &&
                    u < 2 &&
                    ((ee = !1),
                    1 === u && (a = "zoomPointerUp"),
                    _e("zoomGestureEnded")),
                  (J = null),
                  Y || V || oe || Z)
                )
                  if ((nt(), $ || ($ = Bt()), $.calculateSwipeSpeed("x"), Z)) {
                    var d = Ot();
                    if (d < l.verticalDragRange) o.close();
                    else {
                      var f = me.y,
                        p = ue;
                      rt(
                        "verticalDrag",
                        0,
                        1,
                        300,
                        i.easing.cubic.out,
                        function (e) {
                          (me.y = (o.currItem.initialPosition.y - f) * e + f),
                            De((1 - p) * e + p),
                            Le();
                        }
                      ),
                        _e("onVerticalDrag", 1);
                    }
                  } else {
                    if ((Q || oe) && 0 === u) {
                      var h = Ut(a, $);
                      if (h) return;
                      a = "zoomPointerUp";
                    }
                    if (!oe)
                      return "swipe" !== a
                        ? void Xt()
                        : void (!Q && y > o.currItem.fitRatio && Zt($));
                  }
              },
              Bt = function () {
                var e,
                  t,
                  n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (r) {
                      ht.length > 1
                        ? ((e = Ne() - W + 50), (t = ht[ht.length - 2][r]))
                        : ((e = Ne() - H), (t = dt[r])),
                        (n.lastFlickOffset[r] = ct[r] - t),
                        (n.lastFlickDist[r] = Math.abs(n.lastFlickOffset[r])),
                        n.lastFlickDist[r] > 20
                          ? (n.lastFlickSpeed[r] = n.lastFlickOffset[r] / e)
                          : (n.lastFlickSpeed[r] = 0),
                        Math.abs(n.lastFlickSpeed[r]) < 0.1 &&
                          (n.lastFlickSpeed[r] = 0),
                        (n.slowDownRatio[r] = 0.95),
                        (n.slowDownRatioReverse[r] = 1 - n.slowDownRatio[r]),
                        (n.speedDecelerationRatio[r] = 1);
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                      n.backAnimStarted[e] ||
                        (me[e] > re.min[e]
                          ? (n.backAnimDestination[e] = re.min[e])
                          : me[e] < re.max[e] &&
                            (n.backAnimDestination[e] = re.max[e]),
                        void 0 !== n.backAnimDestination[e] &&
                          ((n.slowDownRatio[e] = 0.7),
                          (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                          n.speedDecelerationRatioAbs[e] < 0.05 &&
                            ((n.lastFlickSpeed[e] = 0),
                            (n.backAnimStarted[e] = !0),
                            rt(
                              "bounceZoomPan" + e,
                              me[e],
                              n.backAnimDestination[e],
                              t || 300,
                              i.easing.sine.out,
                              function (t) {
                                (me[e] = t), Le();
                              }
                            ))));
                    },
                    calculateAnimOffset: function (e) {
                      n.backAnimStarted[e] ||
                        ((n.speedDecelerationRatio[e] =
                          n.speedDecelerationRatio[e] *
                          (n.slowDownRatio[e] +
                            n.slowDownRatioReverse[e] -
                            (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                        (n.speedDecelerationRatioAbs[e] = Math.abs(
                          n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                        )),
                        (n.distanceOffset[e] =
                          n.lastFlickSpeed[e] *
                          n.speedDecelerationRatio[e] *
                          n.timeDiff),
                        (me[e] += n.distanceOffset[e]));
                    },
                    panAnimLoop: function () {
                      if (
                        Qe.zoomPan &&
                        ((Qe.zoomPan.raf = L(n.panAnimLoop)),
                        (n.now = Ne()),
                        (n.timeDiff = n.now - n.lastNow),
                        (n.lastNow = n.now),
                        n.calculateAnimOffset("x"),
                        n.calculateAnimOffset("y"),
                        Le(),
                        n.calculateOverBoundsAnimOffset("x"),
                        n.calculateOverBoundsAnimOffset("y"),
                        n.speedDecelerationRatioAbs.x < 0.05 &&
                          n.speedDecelerationRatioAbs.y < 0.05)
                      )
                        return (
                          (me.x = Math.round(me.x)),
                          (me.y = Math.round(me.y)),
                          Le(),
                          void et("zoomPan")
                        );
                    },
                  };
                return n;
              },
              Zt = function (e) {
                return (
                  e.calculateSwipeSpeed("y"),
                  (re = o.currItem.bounds),
                  (e.backAnimDestination = {}),
                  (e.backAnimStarted = {}),
                  Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
                  Math.abs(e.lastFlickSpeed.y) <= 0.05
                    ? ((e.speedDecelerationRatioAbs.x =
                        e.speedDecelerationRatioAbs.y =
                          0),
                      e.calculateOverBoundsAnimOffset("x"),
                      e.calculateOverBoundsAnimOffset("y"),
                      !0)
                    : (tt("zoomPan"), (e.lastNow = Ne()), void e.panAnimLoop())
                );
              },
              Ut = function (e, t) {
                var n;
                oe || (gt = f);
                var r;
                if ("swipe" === e) {
                  var a = ct.x - dt.x,
                    s = t.lastFlickDist.x < 10;
                  a > ot && (s || t.lastFlickOffset.x > 20)
                    ? (r = -1)
                    : a < -ot && (s || t.lastFlickOffset.x < -20) && (r = 1);
                }
                var u;
                r &&
                  ((f += r),
                  f < 0
                    ? ((f = l.loop ? en() - 1 : 0), (u = !0))
                    : f >= en() && ((f = l.loop ? 0 : en() - 1), (u = !0)),
                  (u && !l.loop) || ((be += r), (ve -= r), (n = !0)));
                var c,
                  d = we.x * ve,
                  p = Math.abs(d - wt.x);
                return (
                  n || d > wt.x == t.lastFlickSpeed.x > 0
                    ? ((c =
                        Math.abs(t.lastFlickSpeed.x) > 0
                          ? p / Math.abs(t.lastFlickSpeed.x)
                          : 333),
                      (c = Math.min(c, 400)),
                      (c = Math.max(c, 250)))
                    : (c = 333),
                  gt === f && (n = !1),
                  (oe = !0),
                  _e("mainScrollAnimStart"),
                  rt(
                    "mainScroll",
                    wt.x,
                    d,
                    c,
                    i.easing.cubic.out,
                    je,
                    function () {
                      nt(),
                        (oe = !1),
                        (gt = -1),
                        (n || gt !== f) && o.updateCurrItem(),
                        _e("mainScrollAnimComplete");
                    }
                  ),
                  n && o.updateCurrItem(!0),
                  n
                );
              },
              Kt = function (e) {
                return (1 / ne) * e * w;
              },
              Xt = function () {
                var e = y,
                  t = Ze(),
                  n = Ue();
                y < t ? (e = t) : y > n && (e = n);
                var r,
                  a = 1,
                  s = ue;
                return le && !B && !ce && y < t
                  ? (o.close(), !0)
                  : (le &&
                      (r = function (e) {
                        De((a - s) * e + s);
                      }),
                    o.zoomTo(e, 0, 200, i.easing.cubic.out, r),
                    !0);
              };
            Ee("Gestures", {
              publicMethods: {
                initGestures: function () {
                  var e = function (e, t, n, r, i) {
                    (S = e + t), (A = e + n), (z = e + r), (_ = i ? e + i : "");
                  };
                  (D = R.pointerEvent),
                    D && R.touch && (R.touch = !1),
                    D
                      ? navigator.msPointerEnabled
                        ? e("MSPointer", "Down", "Move", "Up", "Cancel")
                        : e("pointer", "down", "move", "up", "cancel")
                      : R.touch
                      ? (e("touch", "start", "move", "end", "cancel"), (I = !0))
                      : e("mouse", "down", "move", "up"),
                    (m = A + " " + z + " " + _),
                    (g = S),
                    D &&
                      !I &&
                      (I =
                        navigator.maxTouchPoints > 1 ||
                        navigator.msMaxTouchPoints > 1),
                    (o.likelyTouchDevice = I),
                    (v[S] = qt),
                    (v[A] = Ht),
                    (v[z] = $t),
                    _ && (v[_] = v[z]),
                    R.touch &&
                      ((g += " mousedown"),
                      (m += " mousemove mouseup"),
                      (v.mousedown = v[S]),
                      (v.mousemove = v[A]),
                      (v.mouseup = v[z])),
                    I || (l.allowPanToNext = !1);
                },
              },
            });
            var Vt,
              Yt,
              Gt,
              Qt,
              Jt,
              en,
              tn,
              nn = function (t, n, r, a) {
                Vt && clearTimeout(Vt), (Qt = !0), (Gt = !0);
                var s;
                t.initialLayout
                  ? ((s = t.initialLayout), (t.initialLayout = null))
                  : (s = l.getThumbBoundsFn && l.getThumbBoundsFn(f));
                var u = r ? l.hideAnimationDuration : l.showAnimationDuration,
                  c = function () {
                    et("initialZoom"),
                      r
                        ? (o.template.removeAttribute("style"),
                          o.bg.removeAttribute("style"))
                        : (De(1),
                          n && (n.style.display = "block"),
                          i.addClass(e, "pswp--animated-in"),
                          _e("initialZoom" + (r ? "OutEnd" : "InEnd"))),
                      a && a(),
                      (Qt = !1);
                  };
                if (!u || !s || void 0 === s.x)
                  return (
                    _e("initialZoom" + (r ? "Out" : "In")),
                    (y = t.initialZoomLevel),
                    Pe(me, t.initialPosition),
                    Le(),
                    (e.style.opacity = r ? 0 : 1),
                    De(1),
                    void (u
                      ? setTimeout(function () {
                          c();
                        }, u)
                      : c())
                  );
                var p = function () {
                  var n = d,
                    a =
                      !o.currItem.src ||
                      o.currItem.loadError ||
                      l.showHideOpacity;
                  t.miniImg &&
                    (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                    r ||
                      ((y = s.w / t.w),
                      (me.x = s.x),
                      (me.y = s.y - j),
                      (o[a ? "template" : "bg"].style.opacity = 0.001),
                      Le()),
                    tt("initialZoom"),
                    r && !n && i.removeClass(e, "pswp--animated-in"),
                    a &&
                      (r
                        ? i[(n ? "remove" : "add") + "Class"](
                            e,
                            "pswp--animate_opacity"
                          )
                        : setTimeout(function () {
                            i.addClass(e, "pswp--animate_opacity");
                          }, 30)),
                    (Vt = setTimeout(
                      function () {
                        if ((_e("initialZoom" + (r ? "Out" : "In")), r)) {
                          var o = s.w / t.w,
                            l = { x: me.x, y: me.y },
                            d = y,
                            f = ue,
                            p = function (t) {
                              1 === t
                                ? ((y = o), (me.x = s.x), (me.y = s.y - P))
                                : ((y = (o - d) * t + d),
                                  (me.x = (s.x - l.x) * t + l.x),
                                  (me.y = (s.y - P - l.y) * t + l.y)),
                                Le(),
                                a ? (e.style.opacity = 1 - t) : De(f - t * f);
                            };
                          n
                            ? rt(
                                "initialZoom",
                                0,
                                1,
                                u,
                                i.easing.cubic.out,
                                p,
                                c
                              )
                            : (p(1), (Vt = setTimeout(c, u + 20)));
                        } else
                          (y = t.initialZoomLevel),
                            Pe(me, t.initialPosition),
                            Le(),
                            De(1),
                            a ? (e.style.opacity = 1) : De(1),
                            (Vt = setTimeout(c, u + 20));
                      },
                      r ? 25 : 90
                    ));
                };
                p();
              },
              rn = {},
              on = [],
              an = {
                index: 0,
                errorMsg:
                  '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function () {
                  return Yt.length;
                },
              },
              sn = function () {
                return {
                  center: { x: 0, y: 0 },
                  max: { x: 0, y: 0 },
                  min: { x: 0, y: 0 },
                };
              },
              ln = function (e, t, n) {
                var r = e.bounds;
                (r.center.x = Math.round((rn.x - t) / 2)),
                  (r.center.y = Math.round((rn.y - n) / 2) + e.vGap.top),
                  (r.max.x = t > rn.x ? Math.round(rn.x - t) : r.center.x),
                  (r.max.y =
                    n > rn.y ? Math.round(rn.y - n) + e.vGap.top : r.center.y),
                  (r.min.x = t > rn.x ? 0 : r.center.x),
                  (r.min.y = n > rn.y ? e.vGap.top : r.center.y);
              },
              un = function (e, t, n) {
                if (e.src && !e.loadError) {
                  var r = !n;
                  if (
                    (r &&
                      (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                      _e("parseVerticalMargin", e)),
                    (rn.x = t.x),
                    (rn.y = t.y - e.vGap.top - e.vGap.bottom),
                    r)
                  ) {
                    var i = rn.x / e.w,
                      o = rn.y / e.h;
                    e.fitRatio = i < o ? i : o;
                    var a = l.scaleMode;
                    "orig" === a ? (n = 1) : "fit" === a && (n = e.fitRatio),
                      n > 1 && (n = 1),
                      (e.initialZoomLevel = n),
                      e.bounds || (e.bounds = sn());
                  }
                  if (!n) return;
                  return (
                    ln(e, e.w * n, e.h * n),
                    r &&
                      n === e.initialZoomLevel &&
                      (e.initialPosition = e.bounds.center),
                    e.bounds
                  );
                }
                return (
                  (e.w = e.h = 0),
                  (e.initialZoomLevel = e.fitRatio = 1),
                  (e.bounds = sn()),
                  (e.initialPosition = e.bounds.center),
                  e.bounds
                );
              },
              cn = function (e, t, n, r, i, a) {
                t.loadError ||
                  (r &&
                    ((t.imageAppended = !0),
                    pn(t, r, t === o.currItem && ke),
                    n.appendChild(r),
                    a &&
                      setTimeout(function () {
                        t &&
                          t.loaded &&
                          t.placeholder &&
                          ((t.placeholder.style.display = "none"),
                          (t.placeholder = null));
                      }, 500)));
              },
              dn = function (e) {
                (e.loading = !0), (e.loaded = !1);
                var t = (e.img = i.createEl("pswp__img", "img")),
                  n = function () {
                    (e.loading = !1),
                      (e.loaded = !0),
                      e.loadComplete ? e.loadComplete(e) : (e.img = null),
                      (t.onload = t.onerror = null),
                      (t = null);
                  };
                return (
                  (t.onload = n),
                  (t.onerror = function () {
                    (e.loadError = !0), n();
                  }),
                  (t.src = e.src),
                  t
                );
              },
              fn = function (e, t) {
                if (e.src && e.loadError && e.container)
                  return (
                    t && (e.container.innerHTML = ""),
                    (e.container.innerHTML = l.errorMsg.replace(
                      "%url%",
                      e.src
                    )),
                    !0
                  );
              },
              pn = function (e, t, n) {
                if (e.src) {
                  t || (t = e.container.lastChild);
                  var r = n ? e.w : Math.round(e.w * e.fitRatio),
                    i = n ? e.h : Math.round(e.h * e.fitRatio);
                  e.placeholder &&
                    !e.loaded &&
                    ((e.placeholder.style.width = r + "px"),
                    (e.placeholder.style.height = i + "px")),
                    (t.style.width = r + "px"),
                    (t.style.height = i + "px");
                }
              },
              hn = function () {
                if (on.length) {
                  for (var e, t = 0; t < on.length; t++)
                    (e = on[t]),
                      e.holder.index === e.index &&
                        cn(
                          e.index,
                          e.item,
                          e.baseDiv,
                          e.img,
                          !1,
                          e.clearPlaceholder
                        );
                  on = [];
                }
              };
            Ee("Controller", {
              publicMethods: {
                lazyLoadItem: function (e) {
                  e = Se(e);
                  var t = Jt(e);
                  t &&
                    ((!t.loaded && !t.loading) || T) &&
                    (_e("gettingData", e, t), t.src && dn(t));
                },
                initController: function () {
                  i.extend(l, an, !0),
                    (o.items = Yt = n),
                    (Jt = o.getItemAt),
                    (en = l.getNumItemsFn),
                    (tn = l.loop),
                    en() < 3 && (l.loop = !1),
                    ze("beforeChange", function (e) {
                      var t,
                        n = l.preload,
                        r = null === e || e >= 0,
                        i = Math.min(n[0], en()),
                        a = Math.min(n[1], en());
                      for (t = 1; t <= (r ? a : i); t++) o.lazyLoadItem(f + t);
                      for (t = 1; t <= (r ? i : a); t++) o.lazyLoadItem(f - t);
                    }),
                    ze("initialLayout", function () {
                      o.currItem.initialLayout =
                        l.getThumbBoundsFn && l.getThumbBoundsFn(f);
                    }),
                    ze("mainScrollAnimComplete", hn),
                    ze("initialZoomInEnd", hn),
                    ze("destroy", function () {
                      for (var e, t = 0; t < Yt.length; t++)
                        (e = Yt[t]),
                          e.container && (e.container = null),
                          e.placeholder && (e.placeholder = null),
                          e.img && (e.img = null),
                          e.preloader && (e.preloader = null),
                          e.loadError && (e.loaded = e.loadError = !1);
                      on = null;
                    });
                },
                getItemAt: function (e) {
                  return e >= 0 && void 0 !== Yt[e] && Yt[e];
                },
                allowProgressiveImg: function () {
                  return (
                    l.forceProgressiveLoading ||
                    !I ||
                    l.mouseUsed ||
                    screen.width > 1200
                  );
                },
                setContent: function (e, t) {
                  l.loop && (t = Se(t));
                  var n = o.getItemAt(e.index);
                  n && (n.container = null);
                  var r,
                    a = o.getItemAt(t);
                  if (!a) return void (e.el.innerHTML = "");
                  _e("gettingData", t, a), (e.index = t), (e.item = a);
                  var s = (a.container = i.createEl("pswp__zoom-wrap"));
                  if (
                    (!a.src &&
                      a.html &&
                      (a.html.tagName
                        ? s.appendChild(a.html)
                        : (s.innerHTML = a.html)),
                    fn(a),
                    un(a, ge),
                    !a.src || a.loadError || a.loaded)
                  )
                    a.src &&
                      !a.loadError &&
                      ((r = i.createEl("pswp__img", "img")),
                      (r.style.opacity = 1),
                      (r.src = a.src),
                      pn(a, r),
                      cn(t, a, s, r, !0));
                  else {
                    if (
                      ((a.loadComplete = function (n) {
                        if (u) {
                          if (e && e.index === t) {
                            if (fn(n, !0))
                              return (
                                (n.loadComplete = n.img = null),
                                un(n, ge),
                                Oe(n),
                                void (e.index === f && o.updateCurrZoomItem())
                              );
                            n.imageAppended
                              ? !Qt &&
                                n.placeholder &&
                                ((n.placeholder.style.display = "none"),
                                (n.placeholder = null))
                              : R.transform && (oe || Qt)
                              ? on.push({
                                  item: n,
                                  baseDiv: s,
                                  img: n.img,
                                  index: t,
                                  holder: e,
                                  clearPlaceholder: !0,
                                })
                              : cn(t, n, s, n.img, oe || Qt, !0);
                          }
                          (n.loadComplete = null),
                            (n.img = null),
                            _e("imageLoadComplete", t, n);
                        }
                      }),
                      i.features.transform)
                    ) {
                      var c = "pswp__img pswp__img--placeholder";
                      c += a.msrc ? "" : " pswp__img--placeholder--blank";
                      var d = i.createEl(c, a.msrc ? "img" : "");
                      a.msrc && (d.src = a.msrc),
                        pn(a, d),
                        s.appendChild(d),
                        (a.placeholder = d);
                    }
                    a.loading || dn(a),
                      o.allowProgressiveImg() &&
                        (!Gt && R.transform
                          ? on.push({
                              item: a,
                              baseDiv: s,
                              img: a.img,
                              index: t,
                              holder: e,
                            })
                          : cn(t, a, s, a.img, !0, !0));
                  }
                  Gt || t !== f ? Oe(a) : ((ie = s.style), nn(a, r || a.img)),
                    (e.el.innerHTML = ""),
                    e.el.appendChild(s);
                },
                cleanSlide: function (e) {
                  e.img && (e.img.onload = e.img.onerror = null),
                    (e.loaded = e.loading = e.img = e.imageAppended = !1);
                },
              },
            });
            var mn,
              gn = {},
              vn = function (e, t, n) {
                var r = document.createEvent("CustomEvent"),
                  i = {
                    origEvent: e,
                    target: e.target,
                    releasePoint: t,
                    pointerType: n || "touch",
                  };
                r.initCustomEvent("pswpTap", !0, !0, i),
                  e.target.dispatchEvent(r);
              };
            Ee("Tap", {
              publicMethods: {
                initTap: function () {
                  ze("firstTouchStart", o.onTapStart),
                    ze("touchRelease", o.onTapRelease),
                    ze("destroy", function () {
                      (gn = {}), (mn = null);
                    });
                },
                onTapStart: function (e) {
                  e.length > 1 && (clearTimeout(mn), (mn = null));
                },
                onTapRelease: function (e, t) {
                  if (t && !Y && !X && !Je) {
                    var n = t;
                    if (mn && (clearTimeout(mn), (mn = null), Tt(n, gn)))
                      return void _e("doubleTap", n);
                    if ("mouse" === t.type) return void vn(e, t, "mouse");
                    var r = e.target.tagName.toUpperCase();
                    if (
                      "BUTTON" === r ||
                      i.hasClass(e.target, "pswp__single-tap")
                    )
                      return void vn(e, t);
                    Pe(gn, n),
                      (mn = setTimeout(function () {
                        vn(e, t), (mn = null);
                      }, 300));
                  }
                },
              },
            });
            var yn;
            Ee("DesktopZoom", {
              publicMethods: {
                initDesktopZoom: function () {
                  F ||
                    (I
                      ? ze("mouseUsed", function () {
                          o.setupDesktopZoom();
                        })
                      : o.setupDesktopZoom(!0));
                },
                setupDesktopZoom: function (t) {
                  yn = {};
                  var n = "wheel mousewheel DOMMouseScroll";
                  ze("bindEvents", function () {
                    i.bind(e, n, o.handleMouseWheel);
                  }),
                    ze("unbindEvents", function () {
                      yn && i.unbind(e, n, o.handleMouseWheel);
                    }),
                    (o.mouseZoomedIn = !1);
                  var r,
                    a = function () {
                      o.mouseZoomedIn &&
                        (i.removeClass(e, "pswp--zoomed-in"),
                        (o.mouseZoomedIn = !1)),
                        y < 1
                          ? i.addClass(e, "pswp--zoom-allowed")
                          : i.removeClass(e, "pswp--zoom-allowed"),
                        s();
                    },
                    s = function () {
                      r && (i.removeClass(e, "pswp--dragging"), (r = !1));
                    };
                  ze("resize", a),
                    ze("afterChange", a),
                    ze("pointerDown", function () {
                      o.mouseZoomedIn &&
                        ((r = !0), i.addClass(e, "pswp--dragging"));
                    }),
                    ze("pointerUp", s),
                    t || a();
                },
                handleMouseWheel: function (e) {
                  if (y <= o.currItem.fitRatio)
                    return (
                      l.modal &&
                        (!l.closeOnScroll || Je || K
                          ? e.preventDefault()
                          : N &&
                            Math.abs(e.deltaY) > 2 &&
                            ((d = !0), o.close())),
                      !0
                    );
                  if ((e.stopPropagation(), (yn.x = 0), "deltaX" in e))
                    1 === e.deltaMode
                      ? ((yn.x = 18 * e.deltaX), (yn.y = 18 * e.deltaY))
                      : ((yn.x = e.deltaX), (yn.y = e.deltaY));
                  else if ("wheelDelta" in e)
                    e.wheelDeltaX && (yn.x = -0.16 * e.wheelDeltaX),
                      e.wheelDeltaY
                        ? (yn.y = -0.16 * e.wheelDeltaY)
                        : (yn.y = -0.16 * e.wheelDelta);
                  else {
                    if (!("detail" in e)) return;
                    yn.y = e.detail;
                  }
                  Be(y, !0);
                  var t = me.x - yn.x,
                    n = me.y - yn.y;
                  (l.modal ||
                    (t <= re.min.x &&
                      t >= re.max.x &&
                      n <= re.min.y &&
                      n >= re.max.y)) &&
                    e.preventDefault(),
                    o.panTo(t, n);
                },
                toggleDesktopZoom: function (t) {
                  t = t || { x: ge.x / 2 + ye.x, y: ge.y / 2 + ye.y };
                  var n = l.getDoubleTapZoom(!0, o.currItem),
                    r = y === n;
                  (o.mouseZoomedIn = !r),
                    o.zoomTo(r ? o.currItem.initialZoomLevel : n, t, 333),
                    i[(r ? "remove" : "add") + "Class"](e, "pswp--zoomed-in");
                },
              },
            });
            var wn,
              bn,
              xn,
              Cn,
              Tn,
              kn,
              En,
              Sn,
              An,
              zn,
              _n,
              Nn,
              Dn = { history: !0, galleryUID: 1 },
              In = function () {
                return _n.hash.substring(1);
              },
              Ln = function () {
                wn && clearTimeout(wn), xn && clearTimeout(xn);
              },
              On = function () {
                var e = In(),
                  t = {};
                if (e.length < 5) return t;
                var n,
                  r = e.split("&");
                for (n = 0; n < r.length; n++)
                  if (r[n]) {
                    var i = r[n].split("=");
                    i.length < 2 || (t[i[0]] = i[1]);
                  }
                if (l.galleryPIDs) {
                  var o = t.pid;
                  for (t.pid = 0, n = 0; n < Yt.length; n++)
                    if (Yt[n].pid === o) {
                      t.pid = n;
                      break;
                    }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t;
              },
              Mn = function () {
                if ((xn && clearTimeout(xn), Je || K))
                  return void (xn = setTimeout(Mn, 500));
                Cn ? clearTimeout(bn) : (Cn = !0);
                var e = f + 1,
                  t = Jt(f);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = En + "&gid=" + l.galleryUID + "&pid=" + e;
                Sn || (_n.hash.indexOf(n) === -1 && (zn = !0));
                var r = _n.href.split("#")[0] + "#" + n;
                Nn
                  ? "#" + n !== window.location.hash &&
                    history[Sn ? "replaceState" : "pushState"](
                      "",
                      document.title,
                      r
                    )
                  : Sn
                  ? _n.replace(r)
                  : (_n.hash = n),
                  (Sn = !0),
                  (bn = setTimeout(function () {
                    Cn = !1;
                  }, 60));
              };
            Ee("History", {
              publicMethods: {
                initHistory: function () {
                  if ((i.extend(l, Dn, !0), l.history)) {
                    (_n = window.location),
                      (zn = !1),
                      (An = !1),
                      (Sn = !1),
                      (En = In()),
                      (Nn = "pushState" in history),
                      En.indexOf("gid=") > -1 &&
                        ((En = En.split("&gid=")[0]),
                        (En = En.split("?gid=")[0])),
                      ze("afterChange", o.updateURL),
                      ze("unbindEvents", function () {
                        i.unbind(window, "hashchange", o.onHashChange);
                      });
                    var e = function () {
                      (kn = !0),
                        An ||
                          (zn
                            ? history.back()
                            : En
                            ? (_n.hash = En)
                            : Nn
                            ? history.pushState(
                                "",
                                document.title,
                                _n.pathname + _n.search
                              )
                            : (_n.hash = "")),
                        Ln();
                    };
                    ze("unbindEvents", function () {
                      d && e();
                    }),
                      ze("destroy", function () {
                        kn || e();
                      }),
                      ze("firstUpdate", function () {
                        f = On().pid;
                      });
                    var t = En.indexOf("pid=");
                    t > -1 &&
                      ((En = En.substring(0, t)),
                      "&" === En.slice(-1) && (En = En.slice(0, -1))),
                      setTimeout(function () {
                        u && i.bind(window, "hashchange", o.onHashChange);
                      }, 40);
                  }
                },
                onHashChange: function () {
                  return In() === En
                    ? ((An = !0), void o.close())
                    : void (Cn || ((Tn = !0), o.goTo(On().pid), (Tn = !1)));
                },
                updateURL: function () {
                  Ln(), Tn || (Sn ? (wn = setTimeout(Mn, 800)) : Mn());
                },
              },
            }),
              i.extend(o, it);
          };
          return e;
        });
      },
      {},
    ],
  },
  {},
  [1]
);
