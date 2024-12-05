(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [131],
  {
    3174: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 8184));
    },
    8184: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(7437),
        n = i(8800),
        l = i(3260),
        a = i(7539),
        r = i(1396),
        x = i.n(r),
        c = i(5209),
        o = i(767);
      t.default = () => {
        let e = {
          initial: { opacity: 0, x: 0, y: 20 },
          animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: 0.5,
              type: "spring",
              damping: 15,
              stiffness: 150,
            },
          },
        };
        return (0, s.jsxs)("main", {
          className: "flex flex-col items-center w-screen",
          children: [
            (0, s.jsx)(n.Z, {}),
            (0, s.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center w-screen pt-12 rounded-lg max-w-13xl sm:pt-20 md:pt-32",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col w-screen gap-1 px-4 text-primarytext sm:px-4 md:px-4 sm:text-2xl max-w-10xl",
                  children: [
                    (0, s.jsxs)(o.E.h1, {
                      variants: {
                        initial: { opacity: 0, x: -20 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.3,
                            type: "spring",
                            damping: 15,
                            stiffness: 150,
                          },
                        },
                      },
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      className:
                        "pb-6 text-4xl text-primarytext sm:text-5xl md:text-7xl lg:text-8xl",
                      children: [
                        "Hello! I'm Binil B \uD83D\uDC4B",
                        (0, s.jsx)("br", {}),
                        "Crafting Digital Excellence",
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-end",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "flex-grow border border-bline sm:mt-2 md:mt-3",
                        }),
                        (0, s.jsx)(o.E.div, {
                          variants: {
                            initial: { opacity: 0, x: -80 },
                            animate: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.4,
                                type: "spring",
                                damping: 15,
                                stiffness: 150,
                              },
                            },
                          },
                          initial: "initial",
                          whileInView: "animate",
                          viewport: { once: !0 },
                          className:
                            "absolute flex items-center justify-center p-2 mr-3 rounded-full w-14 h-14 bg-primarytext sm:mr-10 md:mr-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-0",
                          children: (0, s.jsxs)("svg", {
                            width: "120",
                            height: "120",
                            viewBox: "0 0 120 120",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-16 sm:h-20 md:h-28",
                            children: [
                              (0, s.jsx)("circle", {
                                cx: "60",
                                cy: "60",
                                r: "60",
                                fill: "white",
                              }),
                              (0, s.jsxs)("g", {
                                clipPath: "url(#clip0_493_872)",
                                children: [
                                  (0, s.jsx)("path", {
                                    d: "M54.2502 14.2573L53.574 54.702L51.32 53.9197C52.024 52.9596 52.8085 52.064 53.6735 51.2329C54.5034 50.3475 55.4209 49.5979 56.4258 48.9843C60.1666 46.7002 64.1047 45.5075 68.2401 45.4062C72.3405 45.2506 76.1839 46.085 79.7703 47.9094C83.3568 49.7338 86.323 52.4672 88.6688 56.1096C91.1547 59.9694 92.3834 63.9909 92.3549 68.1741C92.3823 72.3232 91.3195 76.229 89.1666 79.8915C87.0695 83.52 84.0668 86.5274 80.1585 88.9138C76.2502 91.3002 72.1063 92.6564 67.7268 92.9825C63.4031 93.2745 59.3014 92.5221 55.4216 90.7253C51.5417 88.9285 48.3764 86.1274 45.9255 82.322C44.7001 80.4192 43.7888 78.4004 43.1917 76.2655C42.6155 74.0421 42.3501 71.8183 42.3955 69.5941L42.1904 21.621L54.2502 14.2573ZM60.7792 58.8236C58.7692 60.0509 57.2347 61.5937 56.1758 63.4522C55.0818 65.2563 54.5225 67.2262 54.4979 69.3621C54.5291 71.4638 55.2274 73.5747 56.5929 75.6949C57.8883 77.7064 59.5008 79.1834 61.4303 80.126C63.3598 81.0687 65.4143 81.4806 67.5936 81.3617C69.7938 81.1545 71.8988 80.4372 73.9088 79.2099C75.863 78.0167 77.387 76.5181 78.481 74.714C79.5399 72.8555 80.0538 70.8754 80.0226 68.7737C80.0473 66.6379 79.3944 64.5371 78.0639 62.4713C76.7334 60.4054 75.1034 58.9012 73.1739 57.9586C71.2444 57.016 69.2075 56.6312 67.0632 56.8044C64.8838 56.9233 62.7891 57.5963 60.7792 58.8236Z",
                                    fill: "#0E100F",
                                  }),
                                  (0, s.jsx)("path", {
                                    d: "M26.1387 29.2971L40.0771 21.0254V59.5385C44.229 54.3409 50.4568 51.1645 57.9697 51.1645C71.9081 51.1645 82.1889 62.0411 82.1889 76.5753C82.1889 91.2057 71.9081 102.178 57.9697 102.178C50.4568 102.178 44.229 99.0021 40.0771 93.8045V100.735H26.1387V29.2971ZM55.5972 61.7523C46.898 61.7523 40.7691 67.8163 40.7691 76.6715C40.7691 85.4305 46.898 91.4944 55.3995 91.4944C63.8021 91.4944 69.5356 85.3343 69.5356 76.6715C69.6345 68.0088 64.2963 61.8486 55.5972 61.7523Z",
                                    fill: "#A374FF",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                  id: "clip0_493_872",
                                  children: (0, s.jsx)("rect", {
                                    width: "64.1584",
                                    height: "89.1089",
                                    fill: "white",
                                    transform: "translate(28.5148 14.2573)",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("main", {
                      className:
                        "flex flex-col items-start justify-center w-screen gap-3 pt-10 md:pt-10 max-w-10xl sm:flex-row",
                      children: [
                        (0, s.jsx)(o.E.h1, {
                          variants: e,
                          initial: "initial",
                          whileInView: "animate",
                          viewport: { once: !0 },
                          className:
                            "max-w-3xl pr-4 text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl",
                          children:
                            "As a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes.",
                        }),
                        (0, s.jsx)("div", { className: "flex-grow" }),
                        (0, s.jsx)(o.E.p, {
                          variants: e,
                          initial: "initial",
                          whileInView: "animate",
                          viewport: { once: !0 },
                          className: "max-w-xs text-sm mr-14 text-primarytext",
                          children:
                            "My proficiency in design, coding, and interaction sets me apart within the domain of software engineering.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(o.E.h1, {
                  variants: {
                    initial: { opacity: 0, x: 0, y: -10 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        delay: 0.5,
                        type: "spring",
                        damping: 15,
                        stiffness: 150,
                      },
                    },
                  },
                  initial: "initial",
                  whileInView: "animate",
                  viewport: { once: !0 },
                  className:
                    "mt-12 text-xl font-medium text-accentv sm:text-2xl md:text-3xl",
                  children: [
                    "I can help you with",
                    (0, s.jsx)("span", {
                      className:
                        "text-6xl transition-all duration-200 ease-in-out animate-ping",
                      children: ".",
                    }),
                  ],
                }),
                (0, s.jsxs)("main", {
                  className: "flex flex-row flex-wrap w-11/12 gap-4",
                  children: [
                    (0, s.jsx)(o.E.div, {
                      variants: {
                        initial: { opacity: 0, x: -20 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.4,
                            type: "spring",
                            damping: 15,
                            stiffness: 150,
                          },
                        },
                      },
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      className: "flex-grow w-64",
                      children: (0, s.jsx)("div", {
                        className: "h-full px-2 pb-10",
                        children: (0, s.jsxs)("div", {
                          className: "relative flex flex-col gap-2",
                          children: [
                            (0, s.jsx)("h1", {
                              className:
                                "py-5 border-b text-md text-placeholder border-bline",
                              children: "01",
                            }),
                            (0, s.jsx)("h1", {
                              className:
                                "py-8 text-xl font-normal text-primarytext sm:text-2xl md:text-3xl lg:text-4xl",
                              children: "Design",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-sm text-primarytext",
                              children: [
                                " ",
                                "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(o.E.div, {
                      variants: {
                        initial: { opacity: 0, x: -20 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.5,
                            type: "spring",
                            damping: 15,
                            stiffness: 150,
                          },
                        },
                      },
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      className: "flex-grow w-64",
                      children: (0, s.jsx)("div", {
                        className: "h-full px-2 pb-10",
                        children: (0, s.jsxs)("div", {
                          className: "relative flex flex-col gap-2",
                          children: [
                            (0, s.jsx)("h1", {
                              className:
                                "py-5 border-b text-md text-placeholder border-bline",
                              children: "02",
                            }),
                            (0, s.jsx)("h1", {
                              className:
                                "py-8 text-xl font-normal text-primarytext sm:text-2xl md:text-3xl lg:text-4xl",
                              children: "Development",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-sm text-primarytext",
                              children: [
                                " ",
                                "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(o.E.div, {
                      variants: {
                        initial: { opacity: 0, x: -20 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: 0.6,
                            type: "spring",
                            damping: 15,
                            stiffness: 150,
                          },
                        },
                      },
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      className: "flex-grow w-64",
                      children: (0, s.jsx)("div", {
                        className: "h-full px-2 pb-10",
                        children: (0, s.jsxs)("div", {
                          className: "relative flex flex-col gap-2",
                          children: [
                            (0, s.jsx)("h1", {
                              className:
                                "py-5 border-b text-md text-placeholder border-bline",
                              children: "03",
                            }),
                            (0, s.jsx)("h1", {
                              className:
                                "py-8 text-xl font-normal text-primarytext sm:text-2xl md:text-3xl lg:text-4xl",
                              children: "The full package",
                            }),
                            (0, s.jsxs)("p", {
                              className: "text-sm text-primarytext",
                              children: [
                                " ",
                                "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "flex flex-col w-screen gap-1 px-4 pb-8 sm:pb-12 text-primarytext max-w-10xl",
                  children: (0, s.jsxs)("div", {
                    className: "flex items-center justify-end",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "flex-grow border border-bline sm:mt-2 md:mt-3",
                      }),
                      (0, s.jsx)(x(), {
                        href: "/ContactMe",
                        children: (0, s.jsx)(c.Z, {
                          children: (0, s.jsx)("button", {
                            className:
                              "flex items-center justify-center py-2 pl-5 pr-3 text-xl font-normal border rounded-full text-primarytext md:text-2xl sm:pl-8 sm:pr-5 sm:py-3 border-bline",
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center justify-center",
                              children: [
                                (0, s.jsx)("h1", {
                                  className: "z-10",
                                  children: "Contact Me",
                                }),
                                (0, s.jsx)("svg", {
                                  className: "z-10",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "48",
                                  height: "48",
                                  viewBox: "0 0 71 71",
                                  fill: "none",
                                  children: (0, s.jsx)("path", {
                                    d: "M42.7668 51.3084C43.6112 52.1734 44.9997 52.1817 45.8544 51.327L60.3412 36.8402C61.1222 36.0592 61.1222 34.7929 60.3412 34.0118L45.8359 19.5065C44.9898 18.6605 43.6168 18.6646 42.7759 19.5158V19.5158C41.9421 20.3597 41.9462 21.7185 42.7851 22.5573L53.509 33.2812H24.6263C23.452 33.2812 22.5 34.2332 22.5 35.4075V35.4075C22.5 36.5819 23.452 37.5338 24.6263 37.5338H53.509L42.7852 48.2577C41.9448 49.098 41.9366 50.458 42.7668 51.3084V51.3084Z",
                                    fill: "#FFFCE1",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(l.Z, {}),
                (0, s.jsx)(a.Z, {}),
              ],
            }),
          ],
        });
      };
    },
    5209: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = i(7437),
        n = i(2265),
        l = i(1690),
        a = i.n(l),
        r = i(2815);
      function x(e) {
        let { children: t } = e,
          i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e = r.ZP.quickTo(i.current, "x", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
              }),
              t = r.ZP.quickTo(i.current, "y", {
                duration: 1,
                ease: "elastic.out(1, 0.3)",
              });
            i.current.addEventListener("mousemove", (s) => {
              let { clientX: n, clientY: l } = s,
                {
                  height: a,
                  width: r,
                  left: x,
                  top: c,
                } = i.current.getBoundingClientRect();
              e(0.35 * (n - (x + r / 2))), t(0.35 * (l - (c + a / 2)));
            }),
              i.current.addEventListener("mouseleave", (i) => {
                e(0), t(0);
              });
          }, []),
          n.cloneElement(t, { ref: i })
        );
      }
      function c(e) {
        let { children: t, backgroundColor: i = "#18A0FB", ...l } = e,
          c = (0, n.useRef)(null),
          o = (0, n.useRef)(null),
          m = null;
        (0, n.useEffect)(() => {
          (o.current = r.ZP.timeline({ paused: !0 })),
            o.current
              .to(
                c.current,
                {
                  top: "-25%",
                  width: "150%",
                  duration: 0.4,
                  ease: "power3.in",
                },
                "enter"
              )
              .to(
                c.current,
                { top: "-150%", width: "125%", duration: 0.25 },
                "exit"
              );
        }, []);
        let d = () => {
            m && clearTimeout(m), o.current.tweenFromTo("enter", "exit");
          },
          p = () => {
            m = setTimeout(() => {
              o.current.play();
            }, 300);
          };
        return (0, s.jsx)(x, {
          children: (0, s.jsxs)("div", {
            className: a().roundedButton,
            style: { overflow: "hidden" },
            onMouseEnter: () => {
              d();
            },
            onMouseLeave: () => {
              p();
            },
            ...l,
            children: [
              t,
              (0, s.jsx)("div", {
                ref: c,
                style: { backgroundColor: i },
                className: a().circle,
              }),
            ],
          }),
        });
      }
    },
    1690: function (e) {
      e.exports = {
        roundedButton: "style_roundedButton__BkVn7",
        circle: "style_circle__2ViAL",
      };
    },
  },
  function (e) {
    e.O(0, [614, 922, 158, 815, 889, 971, 472, 744], function () {
      return e((e.s = 3174));
    }),
      (_N_E = e.O());
  },
]);
