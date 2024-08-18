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
        e("./partials/welcome");
      },
      {
        "./partials/welcome": 2,
      },
    ],
    2: [
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
  },
  {},
  [1]
);

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawNoise() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const color = Math.random() * 255;
    data[i] = color;
    data[i + 1] = color;
    data[i + 2] = color;
    data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(drawNoise);
}

drawNoise();

// Add class to animate
setTimeout(() => {
  canvas.classList.add("noise-animate");
}, 0);