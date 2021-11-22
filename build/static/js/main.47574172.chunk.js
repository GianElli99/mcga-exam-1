(this['webpackJsonpmcga-exam-2'] = this['webpackJsonpmcga-exam-2'] || []).push([
  [0],
  {
    116: function (e, t, n) {},
    142: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        c = n.n(r),
        a = n(31),
        i = n.n(a),
        s = (n(116), n(44)),
        o = n(15),
        u = n(85),
        l = n.n(u),
        d = n(2),
        j = function () {
          return Object(d.jsx)('div', {
            className: l.a.wrapper,
            children: Object(d.jsx)('p', {
              children: 'Made by Gianfranco Elli',
            }),
          });
        },
        p = n(67),
        b = n.n(p),
        O = function () {
          return Object(d.jsx)('div', {
            className: b.a.wrapper,
            children: Object(d.jsx)('h1', {
              className: b.a.title,
              children: "Gian's Products",
            }),
          });
        },
        x = n(86),
        m = n.n(x),
        h = function (e) {
          var t = e.children;
          return Object(d.jsx)('main', {
            className: m.a.mainContent,
            children: t,
          });
        },
        f = n(68),
        v = n.n(f),
        _ = function () {
          return Object(d.jsx)('nav', {
            className: v.a.navBar,
            children: Object(d.jsxs)('ul', {
              className: v.a.list,
              children: [
                Object(d.jsx)('li', {
                  children: Object(d.jsx)(s.b, { to: '..', children: 'Home' }),
                }),
                Object(d.jsx)('li', {
                  children: Object(d.jsx)(s.b, {
                    to: '../products',
                    children: 'Products',
                  }),
                }),
              ],
            }),
          });
        },
        g = n(69),
        P = n.n(g),
        y = function () {
          return Object(d.jsxs)('div', {
            className: P.a.wrapper,
            children: [
              Object(d.jsx)(O, {}),
              Object(d.jsxs)('div', {
                className: P.a.navAndContentWrapper,
                children: [
                  Object(d.jsx)(_, {}),
                  Object(d.jsx)(h, { children: Object(d.jsx)(o.b, {}) }),
                ],
              }),
              Object(d.jsx)(j, {}),
            ],
          });
        },
        N = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)('p', { children: 'Made by: Gianfranco Elli' }),
              Object(d.jsx)('p', { children: "App name: Gian's Products" }),
            ],
          });
        },
        D = n(88),
        C = n(87),
        I = n(18),
        E = n(26),
        T = n.n(E),
        w = n(35),
        k = n.n(w),
        R = n(51),
        S = n(52),
        A = n.n(S),
        L = 'PROD_CREATE_PRODUCT',
        B = 'PROD_UPDATE_PRODUCT',
        U = 'PROD_DELETE_PRODUCT',
        F = 'PROD_SET_ALL_PRODUCTS',
        M = 'PROD_SET_ERROR',
        G = 'PROD_SET_LOADING_TRUE',
        q = 'PROD_SET_CREATE_ACTION',
        W = 'PROD_SET_UPDATE_ACTION',
        H = 'PROD_SET_DELETE_ACTION',
        J = 'PROD_UNSET_ACTION',
        K = function (e) {
          return { type: L, payload: e };
        },
        z = function (e) {
          return { type: B, payload: e };
        },
        V = function (e) {
          return { type: U, payload: e };
        },
        Y = function (e) {
          console.log(e);
          var t = e.join('. ');
          return console.log(t), { type: M, payload: t };
        },
        Q = function () {
          return { type: G };
        },
        X = function () {
          return { type: J };
        },
        Z = function (e) {
          var t = e.product,
            n = t.name,
            r = t.isDigital,
            c = t.price,
            a = Object(I.b)();
          return Object(d.jsxs)('div', {
            className: T.a.container,
            children: [
              Object(d.jsxs)('div', {
                className: T.a.column,
                children: [
                  Object(d.jsx)('span', {
                    className: T.a.title,
                    children: 'Name',
                  }),
                  Object(d.jsx)('span', {
                    className: T.a.content,
                    children: n,
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: T.a.column,
                children: [
                  Object(d.jsx)('span', {
                    className: T.a.title,
                    children: 'Price',
                  }),
                  Object(d.jsx)('span', {
                    className: T.a.content,
                    children: c,
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: T.a.column,
                children: [
                  Object(d.jsx)('span', {
                    className: T.a.title,
                    children: 'Is Digital',
                  }),
                  Object(d.jsx)('span', {
                    className: T.a.content,
                    children: r ? 'Yes' : 'No',
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: T.a.actions,
                children: [
                  Object(d.jsx)(C.a, {
                    className: T.a.editIcon,
                    onClick: function () {
                      return a(
                        (function (e) {
                          return { type: W, payload: e };
                        })(t),
                      );
                    },
                  }),
                  Object(d.jsx)(D.a, {
                    className: T.a.deleteIcon,
                    onClick: function () {
                      return a(
                        (function (e) {
                          return { type: H, payload: e };
                        })(t),
                      );
                    },
                  }),
                ],
              }),
            ],
          });
        },
        $ = function (e) {
          return e.products.map(function (e) {
            return Object(d.jsx)(Z, { product: e }, e._id);
          });
        },
        ee = n(191),
        te = n(194),
        ne = n(89),
        re = n.n(ne),
        ce = n(189),
        ae = n(190),
        ie = n(90),
        se = n.n(ie),
        oe = function (e) {
          var t = e.children,
            n = Object(I.b)();
          return Object(d.jsx)(ae.a, {
            open: !0,
            onClose: function () {
              return n(X());
            },
            children: Object(d.jsx)('div', {
              className: se.a.wrapper,
              children: t,
            }),
          });
        },
        ue = n(93),
        le = n.n(ue),
        de = n(185),
        je = function (e) {
          var t = e.message;
          return Object(d.jsx)(de.a, { severity: 'error', children: t });
        },
        pe = function (e) {
          var t = e.product,
            n = Object(I.b)(),
            r = Object(I.c)(function (e) {
              return e.products;
            }),
            c = r.isLoading,
            a = r.error;
          return Object(d.jsx)(oe, {
            children: Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsx)('h2', {
                  children: 'You are about to delete a Product',
                }),
                a && Object(d.jsx)(je, { message: a }),
                Object(d.jsx)('p', {
                  children: 'This will delete '.concat(t.name, ' permanently.'),
                }),
                Object(d.jsx)('p', { children: 'Are you sure?' }),
                Object(d.jsxs)('div', {
                  className: le.a.actionsContainer,
                  children: [
                    Object(d.jsx)(ce.a, {
                      onClick: function () {
                        return n(X());
                      },
                      variant: 'outlined',
                      children: 'Cancel',
                    }),
                    Object(d.jsx)(ce.a, {
                      onClick: function () {
                        return n(
                          ((e = t._id),
                          (function () {
                            var t = Object(R.a)(
                              k.a.mark(function t(n) {
                                var r, c;
                                return k.a.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            n(Q()),
                                            (t.prev = 1),
                                            (t.next = 4),
                                            A.a.delete(
                                              ''
                                                .concat(
                                                  'https://mgca-test-1.herokuapp.com',
                                                  '/products/',
                                                )
                                                .concat(e),
                                            )
                                          );
                                        case 4:
                                          if (200 !== t.sent.status) {
                                            t.next = 7;
                                            break;
                                          }
                                          return t.abrupt('return', n(V(e)));
                                        case 7:
                                          t.next = 12;
                                          break;
                                        case 9:
                                          return (
                                            (t.prev = 9),
                                            (t.t0 = t.catch(1)),
                                            t.abrupt(
                                              'return',
                                              n(
                                                Y(
                                                  null === t.t0 ||
                                                    void 0 === t.t0 ||
                                                    null ===
                                                      (r = t.t0.response) ||
                                                    void 0 === r ||
                                                    null === (c = r.data) ||
                                                    void 0 === c
                                                    ? void 0
                                                    : c.errors,
                                                ),
                                              ),
                                            )
                                          );
                                        case 12:
                                        case 'end':
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[1, 9]],
                                );
                              }),
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()),
                        );
                        var e;
                      },
                      color: 'error',
                      loading: c,
                      variant: 'contained',
                      children: 'Delete',
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        be = 'CREATE',
        Oe = 'UPDATE',
        xe = 'DELETE',
        me = 'NONE',
        he = n(16),
        fe = n(39),
        ve = n(97),
        _e = n(183),
        ge = ['input', 'meta', 'name', 'required'],
        Pe = function (e) {
          var t = e.input,
            n = e.meta,
            r = e.name,
            c = e.required,
            a = void 0 === c || c,
            i = Object(ve.a)(e, ge);
          return Object(d.jsx)(
            _e.a,
            Object(he.a)(
              Object(he.a)(Object(he.a)({ type: 'text' }, t), i),
              {},
              {
                autoComplete: 'off',
                label: r,
                required: a,
                error: n.error && n.touched,
                helperText: n.touched && n.error,
                size: 'small',
                fullWidth: !0,
                margin: 'normal',
              },
            ),
          );
        },
        ye = n(187),
        Ne = n(94),
        De = n.n(Ne),
        Ce = function (e) {
          return e ? void 0 : 'Required';
        },
        Ie = function (e) {
          return e && e.trim && e.trim();
        },
        Ee = function (e) {
          return isNaN(e) ? 'Must be a number' : void 0;
        },
        Te = function (e) {
          return function (t) {
            return isNaN(t) || t >= e
              ? void 0
              : 'Should be equal or greater than '.concat(e);
          };
        },
        we = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduce(function (t, n) {
              return t || n(e);
            }, void 0);
          };
        },
        ke = function (e) {
          var t = e.initialState,
            n = e.actionText,
            r = e.onFormSubmit,
            c = Object(I.c)(function (e) {
              return e.products;
            }),
            a = c.isLoading,
            i = c.error,
            s = Object(I.b)(),
            o = function () {
              s(X());
            };
          return Object(d.jsx)(oe, {
            children: Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsxs)('h2', { children: [n, ' Technician'] }),
                i && Object(d.jsx)(je, { message: i }),
                Object(d.jsx)(fe.b, {
                  onSubmit: r,
                  initialValues: t,
                  children: function (e) {
                    var t = e.handleSubmit,
                      r = e.submitting,
                      c = e.values;
                    return Object(d.jsxs)('form', {
                      onSubmit: t,
                      children: [
                        Object(d.jsx)('div', {
                          children: Object(d.jsx)(fe.a, {
                            name: 'name',
                            validate: Ce,
                            children: function (e) {
                              var t = e.input,
                                n = e.meta;
                              return Object(d.jsx)(Pe, {
                                input: t,
                                meta: n,
                                name: 'Name',
                              });
                            },
                          }),
                        }),
                        Object(d.jsx)('div', {
                          children: Object(d.jsx)(fe.a, {
                            name: 'shortDescription',
                            validate: Ce,
                            children: function (e) {
                              var t = e.input,
                                n = e.meta;
                              return Object(d.jsx)(Pe, {
                                input: t,
                                meta: n,
                                name: 'Short Description',
                              });
                            },
                          }),
                        }),
                        Object(d.jsx)('div', {
                          children: Object(d.jsx)(fe.a, {
                            name: 'fullDescription',
                            validate: Ce,
                            children: function (e) {
                              var t = e.input,
                                n = e.meta;
                              return Object(d.jsx)(Pe, {
                                input: t,
                                meta: n,
                                name: 'Full Description',
                              });
                            },
                          }),
                        }),
                        Object(d.jsx)('div', {
                          children: Object(d.jsx)(fe.a, {
                            name: 'price',
                            validate: we(Ce, Ee, Te(0)),
                            children: function (e) {
                              var t = e.input,
                                n = e.meta;
                              return Object(d.jsx)(Pe, {
                                input: t,
                                meta: n,
                                name: 'Price',
                              });
                            },
                          }),
                        }),
                        Object(d.jsx)(fe.a, {
                          name: 'isDigital',
                          type: 'checkbox',
                          children: function (e) {
                            var t = e.input;
                            return Object(d.jsxs)('label', {
                              children: [
                                'Is Digital?',
                                Object(d.jsx)(ye.a, Object(he.a)({}, t)),
                              ],
                            });
                          },
                        }),
                        Object(d.jsx)('div', {
                          children: Object(d.jsx)(fe.a, {
                            name: 'weightInKg',
                            validate: we(Ce, Ee, Te(0)),
                            parse: Ie,
                            children: function (e) {
                              var t = e.input,
                                n = e.meta;
                              return Object(d.jsx)(Pe, {
                                input: t,
                                value: c.isDigital ? 0 : t.value,
                                meta: n,
                                name: 'Weight, in KG',
                                disabled: c.isDigital,
                              });
                            },
                          }),
                        }),
                        Object(d.jsxs)('div', {
                          className: De.a.actionsContainer,
                          children: [
                            Object(d.jsx)(ce.a, {
                              disabled: r,
                              color: 'primary',
                              variant: 'contained',
                              disableRipple: !0,
                              type: 'submit',
                              loading: a,
                              onClick: t,
                              children: n,
                            }),
                            Object(d.jsx)(ce.a, {
                              variant: 'outlined',
                              type: 'button',
                              color: 'error',
                              onClick: o,
                              children: 'Cancel',
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                }),
              ],
            }),
          });
        },
        Re = function () {
          var e = Object(I.b)();
          return Object(d.jsx)(oe, {
            children: Object(d.jsx)(ke, {
              initialState: {
                name: '',
                price: '',
                shortDescription: '',
                fullDescription: '',
                isDigital: !1,
                weightInKg: '0',
              },
              actionText: 'Create',
              onFormSubmit: function (t) {
                e(
                  (function (e) {
                    return (function () {
                      var t = Object(R.a)(
                        k.a.mark(function t(n) {
                          var r, c, a;
                          return k.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      n(Q()),
                                      (t.prev = 1),
                                      (t.next = 4),
                                      A.a.post(
                                        ''.concat(
                                          'https://mgca-test-1.herokuapp.com',
                                          '/products',
                                        ),
                                        e,
                                      )
                                    );
                                  case 4:
                                    if (201 !== (r = t.sent).status) {
                                      t.next = 7;
                                      break;
                                    }
                                    return t.abrupt('return', n(K(r.data)));
                                  case 7:
                                    t.next = 12;
                                    break;
                                  case 9:
                                    return (
                                      (t.prev = 9),
                                      (t.t0 = t.catch(1)),
                                      t.abrupt(
                                        'return',
                                        n(
                                          Y(
                                            null === t.t0 ||
                                              void 0 === t.t0 ||
                                              null === (c = t.t0.response) ||
                                              void 0 === c ||
                                              null === (a = c.data) ||
                                              void 0 === a
                                              ? void 0
                                              : a.errors,
                                          ),
                                        ),
                                      )
                                    );
                                  case 12:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[1, 9]],
                          );
                        }),
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t),
                );
              },
            }),
          });
        },
        Se = function (e) {
          var t = e.product,
            n = Object(I.b)();
          return Object(d.jsx)(oe, {
            children: Object(d.jsx)(ke, {
              initialState: t,
              actionText: 'Update',
              onFormSubmit: function (e) {
                n(
                  (function (e) {
                    return (function () {
                      var t = Object(R.a)(
                        k.a.mark(function t(n) {
                          var r, c, a;
                          return k.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      n(Q()),
                                      (t.prev = 1),
                                      (t.next = 4),
                                      A.a.put(
                                        ''
                                          .concat(
                                            'https://mgca-test-1.herokuapp.com',
                                            '/products/',
                                          )
                                          .concat(e._id),
                                        e,
                                      )
                                    );
                                  case 4:
                                    if (200 !== (r = t.sent).status) {
                                      t.next = 7;
                                      break;
                                    }
                                    return t.abrupt('return', n(z(r.data)));
                                  case 7:
                                    t.next = 12;
                                    break;
                                  case 9:
                                    return (
                                      (t.prev = 9),
                                      (t.t0 = t.catch(1)),
                                      t.abrupt(
                                        'return',
                                        n(
                                          Y(
                                            null === t.t0 ||
                                              void 0 === t.t0 ||
                                              null === (c = t.t0.response) ||
                                              void 0 === c ||
                                              null === (a = c.data) ||
                                              void 0 === a
                                              ? void 0
                                              : a.errors,
                                          ),
                                        ),
                                      )
                                    );
                                  case 12:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[1, 9]],
                          );
                        }),
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(e),
                );
              },
            }),
          });
        },
        Ae = function () {
          var e = Object(I.b)(),
            t = Object(I.c)(function (e) {
              return e.products;
            }),
            n = t.isLoading,
            c = t.actionInProgress,
            a = t.selectedProduct,
            i = t.list;
          return (
            Object(r.useEffect)(function () {
              return (
                e(
                  (function () {
                    var e = Object(R.a)(
                      k.a.mark(function e(t) {
                        var n, r, c;
                        return k.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t(Q()),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    A.a.get(
                                      ''.concat(
                                        'https://mgca-test-1.herokuapp.com',
                                        '/products',
                                      ),
                                    )
                                  );
                                case 4:
                                  if (200 !== (n = e.sent).status) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt(
                                    'return',
                                    t(((a = n.data), { type: F, payload: a })),
                                  );
                                case 7:
                                  e.next = 12;
                                  break;
                                case 9:
                                  return (
                                    (e.prev = 9),
                                    (e.t0 = e.catch(1)),
                                    e.abrupt(
                                      'return',
                                      t(
                                        Y(
                                          null === e.t0 ||
                                            void 0 === e.t0 ||
                                            null === (r = e.t0.response) ||
                                            void 0 === r ||
                                            null === (c = r.data) ||
                                            void 0 === c
                                            ? void 0
                                            : c.errors,
                                        ),
                                      ),
                                    )
                                  );
                                case 12:
                                case 'end':
                                  return e.stop();
                              }
                            var a;
                          },
                          e,
                          null,
                          [[1, 9]],
                        );
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
                function () {}
              );
            }, []),
            Object(d.jsxs)('div', {
              children: [
                c === xe && Object(d.jsx)(pe, { product: a }),
                c === be && Object(d.jsx)(Re, {}),
                c === Oe && Object(d.jsx)(Se, { product: a }),
                Object(d.jsx)('h2', { children: 'Products' }),
                Object(d.jsx)(ee.a, {
                  onClick: function () {
                    return e({ type: q });
                  },
                  children: 'New Product',
                }),
                n && Object(d.jsx)(te.a, { className: re.a.progressBar }),
                Object(d.jsx)($, { products: i }),
              ],
            })
          );
        },
        Le = function () {
          return Object(d.jsx)(s.a, {
            children: Object(d.jsx)(o.e, {
              children: Object(d.jsxs)(o.c, {
                path: '/',
                element: Object(d.jsx)(y, {}),
                children: [
                  Object(d.jsx)(o.c, {
                    index: !0,
                    element: Object(d.jsx)(N, {}),
                  }),
                  Object(d.jsx)(o.c, {
                    path: 'products',
                    element: Object(d.jsx)(Ae, {}),
                  }),
                  Object(d.jsx)(o.c, {
                    path: '*',
                    element: Object(d.jsx)(o.a, { to: '/' }),
                  }),
                ],
              }),
            }),
          });
        },
        Be = n(192),
        Ue = n(95),
        Fe = Object(Ue.a)({
          palette: {
            primary: { main: '#ffd740' },
            secondary: { main: '#102541' },
          },
          components: {
            MuiButton: {
              defaultProps: { variant: 'contained', disableRipple: !0 },
            },
          },
        }),
        Me = n(96),
        Ge = n(20),
        qe = {
          list: [],
          error: '',
          isLoading: !1,
          actionInProgress: me,
          selectedProduct: null,
        },
        We = Object(Me.a)({
          reducer: {
            products: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : qe,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case L:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      error: '',
                      list: [].concat(Object(Ge.a)(e.list), [t.payload]),
                      isLoading: !1,
                      actionInProgress: me,
                      selectedProduct: null,
                    },
                  );
                case B:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      error: '',
                      list: e.list.map(function (e) {
                        return e._id === t.payload._id ? t.payload : e;
                      }),
                      isLoading: !1,
                      actionInProgress: me,
                      selectedProduct: null,
                    },
                  );
                case U:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      error: '',
                      list: e.list.filter(function (e) {
                        return e._id !== t.payload;
                      }),
                      isLoading: !1,
                      actionInProgress: me,
                      selectedProduct: null,
                    },
                  );
                case F:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      list: t.payload,
                      error: '',
                      isLoading: !1,
                      actionInProgress: me,
                      selectedProduct: null,
                    },
                  );
                case M:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    { error: t.payload || 'An error ocurred.', isLoading: !1 },
                  );
                case G:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    { isLoading: !0 },
                  );
                case q:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    { actionInProgress: be, error: '', selectedProduct: null },
                  );
                case W:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      actionInProgress: Oe,
                      selectedProduct: Object(he.a)({}, t.payload),
                    },
                  );
                case H:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    {
                      actionInProgress: xe,
                      selectedProduct: Object(he.a)({}, t.payload),
                    },
                  );
                case J:
                  return Object(he.a)(
                    Object(he.a)({}, e),
                    {},
                    { actionInProgress: me, selectedProduct: null, error: '' },
                  );
                default:
                  return e;
              }
            },
          },
        });
      var He = function () {
        return Object(d.jsx)(Be.a, {
          theme: Fe,
          children: Object(d.jsx)(I.a, {
            store: We,
            children: Object(d.jsx)(Le, {}),
          }),
        });
      };
      i.a.render(
        Object(d.jsx)(c.a.StrictMode, { children: Object(d.jsx)(He, {}) }),
        document.getElementById('root'),
      );
    },
    26: function (e, t, n) {
      e.exports = {
        container: 'ProductItem_container__1MaJP',
        column: 'ProductItem_column__1-szH',
        title: 'ProductItem_title__1DVRl',
        content: 'ProductItem_content__3wOJx',
        actions: 'ProductItem_actions__xcG_G',
        editIcon: 'ProductItem_editIcon__2jm0P',
        deleteIcon: 'ProductItem_deleteIcon__1v04k',
      };
    },
    67: function (e, t, n) {
      e.exports = {
        title: 'Header_title__2D3RO',
        wrapper: 'Header_wrapper__2Uu4j',
      };
    },
    68: function (e, t, n) {
      e.exports = {
        navBar: 'NavBar_navBar__1njmH',
        list: 'NavBar_list__Nf0o7',
      };
    },
    69: function (e, t, n) {
      e.exports = {
        navAndContentWrapper: 'MainLayout_navAndContentWrapper__2i-hx',
        wrapper: 'MainLayout_wrapper__2x_mk',
      };
    },
    85: function (e, t, n) {
      e.exports = { wrapper: 'Footer_wrapper__2IvjW' };
    },
    86: function (e, t, n) {
      e.exports = { mainContent: 'MainContent_mainContent__1udyB' };
    },
    89: function (e, t, n) {
      e.exports = { progressBar: 'ProductsScreen_progressBar__3s485' };
    },
    90: function (e, t, n) {
      e.exports = { wrapper: 'BaseDialog_wrapper__2R35J' };
    },
    93: function (e, t, n) {
      e.exports = { actionsContainer: 'ConfirmDelete_actionsContainer__Aj232' };
    },
    94: function (e, t, n) {
      e.exports = { actionsContainer: 'BaseForm_actionsContainer__2qy55' };
    },
  },
  [[142, 1, 2]],
]);
//# sourceMappingURL=main.47574172.chunk.js.map
