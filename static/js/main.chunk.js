(this.webpackJsonpreactjs = this.webpackJsonpreactjs || []).push([
    [0],
    {
      16: function (e, t, c) {},
      28: function (e, t, c) {
        "use strict";
        c.r(t);
        var s = c(1),
          n = c.n(s),
          a = c(8),
          i = c.n(a),
          l = c(5),
          o = c.n(l),
          r = c(9),
          j = c(2),
          d = (c(16), c(0)),
          h = function (e) {
            var t = e.preloader;
            return Object(d.jsx)("div", {
              className: "preloader",
              style: t ? { display: "block" } : { display: "none" },
              children: Object(d.jsxs)("div", {
                className: "preloader__wrap",
                children: [
                  Object(d.jsxs)("div", {
                    className: "circle-pulse",
                    children: [
                      Object(d.jsx)("div", { className: "circle-pulse__1" }),
                      Object(d.jsx)("div", { className: "circle-pulse__2" }),
                    ],
                  }),
                  Object(d.jsx)("div", {
                    className: "preloader__progress",
                    children: Object(d.jsx)("span", {}),
                  }),
                ],
              }),
            });
          },
          b = c(10),
          m = c.n(b),
          x = function (e) {
            var t = e.logo,
              c = e.name,
              s = e.ctk,
              n = e.stk,
              a = function (e) {
                window.getSelection().removeAllRanges();
                var t = document.createRange();
                t.selectNode(
                  "string" === typeof e ? document.getElementById(e) : e
                ),
                  window.getSelection().addRange(t),
                  document.execCommand("copy"),
                  window.getSelection().removeAllRanges(),
                  m.a.fire({
                    title: "Th\xf4ng b\xe1o",
                    text: "Sao ch\xe9p th\xe0nh c\xf4ng",
                    icon: "success",
                    confirmButtonText: "T\xf4i \u0111\xe3 hi\u1ec3u",
                    confirmButtonColor: "#3085d6",
                  });
              };
            return Object(d.jsx)("div", {
              className: "col-12 col-lg-6",
              children: Object(d.jsxs)("div", {
                className: "case-item",
                children: [
                  Object(d.jsx)("img", {
                    className: "case-item__icon",
                    src: "./assets/images/bank/".concat(t, ".png"),
                    alt: "",
                  }),
                  Object(d.jsxs)("div", {
                    children: [
                      Object(d.jsx)("h3", {
                        className: "title title--h4",
                        children: c,
                      }),
                      Object(d.jsx)("p", {
                        className: "case-item__caption",
                        id: s,
                        onClick: function () {
                          return a(s);
                        },
                        children: s,
                      }),
                      Object(d.jsx)("p", {
                        className: "case-item__caption",
                        id: n,
                        onClick: function () {
                          return a(n);
                        },
                        children: n,
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var g = function () {
            var e = Object(s.useState)(!0),
              t = Object(j.a)(e, 2),
              c = t[0],
              n = t[1],
              a = Object(s.useState)(null),
              i = Object(j.a)(a, 2),
              l = i[0],
              b = i[1],
              m = Object(s.useState)([]),
              g = Object(j.a)(m, 2),
              O = g[0],
              p = g[1],
              u = (function () {
                var e = Object(r.a)(
                  o.a.mark(function e() {
                    return o.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch("https://api.ipify.org?format=json")
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  b(e.ip),
                                    n(!1),
                                    p([
                                      {
                                        logo: "mbbank",
                                        name: "MB Bank",
                                        ctk: "Vũ Đình Việt",
                                        stk: "0961935907",
                                      },
                                      {
                                        logo: "momo",
                                        name: "Momo",
                                        ctk: "Vũ Đình Việt",
                                        stk: "0961935907",
                                      },
                                    ]);
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              Object(s.useEffect)(function () {
                (document.title = "Vũ Đình Việt - Th\xf4ng tin c\xe1 nh\xe2n"),
                  u();
              }, []),
              Object(d.jsxs)("div", {
                children: [
                  Object(d.jsx)(h, { preloader: c }),
                  Object(d.jsxs)("main", {
                    className: "main",
                    children: [
                      Object(d.jsxs)("div", {
                        className: "container gutter-top",
                        children: [
                          Object(d.jsx)("div", {
                            className: "row sticky-parent",
                            children: Object(d.jsxs)("div", {
                              className: "col-12 col-md-12 col-lg-12",
                              children: [
                                Object(d.jsxs)("footer", {
                                  className: "footer",
                                  children: ["IP truy cập : ", l],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
            
          },
          O = function (e) {
            e &&
              e instanceof Function &&
              c
                .e(3)
                .then(c.bind(null, 29))
                .then(function (t) {
                  var c = t.getCLS,
                    s = t.getFID,
                    n = t.getFCP,
                    a = t.getLCP,
                    i = t.getTTFB;
                  c(e), s(e), n(e), a(e), i(e);
                });
          };
        i.a.render(
          Object(d.jsx)(n.a.StrictMode, { children: Object(d.jsx)(g, {}) }),
          document.getElementById("root")
        ),
          O();
      },
    },
    [[28, 1, 2]],
  ]);
  