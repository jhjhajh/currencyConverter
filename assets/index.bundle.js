!function(e) {
    var t = {};
    function a(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, a),
        i.l = !0,
        i.exports
    }
    a.m = e,
    a.c = t,
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (a.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                a.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "",
    a(a.s = 135)
}([function(e, t, a) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, n;
            function i() {
                return t.apply(null, arguments)
            }
            function r(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }
            function s(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }
            function o(e) {
                return void 0 === e
            }
            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }
            function l(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }
            function u(e, t) {
                var a, n = [];
                for (a = 0; a < e.length; ++a)
                    n.push(t(e[a], a));
                return n
            }
            function _(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function m(e, t) {
                for (var a in t)
                    _(t, a) && (e[a] = t[a]);
                return _(t, "toString") && (e.toString = t.toString),
                _(t, "valueOf") && (e.valueOf = t.valueOf),
                e
            }
            function h(e, t, a, n) {
                return Ot(e, t, a, n, !0).utc()
            }
            function c(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }),
                e._pf
            }
            function f(e) {
                if (null == e._isValid) {
                    var t = c(e)
                      , a = n.call(t.parsedDateParts, (function(e) {
                        return null != e
                    }
                    ))
                      , i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                    if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                    null != Object.isFrozen && Object.isFrozen(e))
                        return i;
                    e._isValid = i
                }
                return e._isValid
            }
            function M(e) {
                var t = h(NaN);
                return null != e ? m(c(t), e) : c(t).userInvalidated = !0,
                t
            }
            n = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                    if (n in t && e.call(this, t[n], n, t))
                        return !0;
                return !1
            }
            ;
            var p = i.momentProperties = [];
            function g(e, t) {
                var a, n, i;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                o(t._i) || (e._i = t._i),
                o(t._f) || (e._f = t._f),
                o(t._l) || (e._l = t._l),
                o(t._strict) || (e._strict = t._strict),
                o(t._tzm) || (e._tzm = t._tzm),
                o(t._isUTC) || (e._isUTC = t._isUTC),
                o(t._offset) || (e._offset = t._offset),
                o(t._pf) || (e._pf = c(t)),
                o(t._locale) || (e._locale = t._locale),
                p.length > 0)
                    for (a = 0; a < p.length; a++)
                        o(i = t[n = p[a]]) || (e[n] = i);
                return e
            }
            var y = !1;
            function L(e) {
                g(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === y && (y = !0,
                i.updateOffset(this),
                y = !1)
            }
            function v(e) {
                return e instanceof L || null != e && null != e._isAMomentObject
            }
            function Y(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }
            function k(e) {
                var t = +e
                  , a = 0;
                return 0 !== t && isFinite(t) && (a = Y(t)),
                a
            }
            function b(e, t, a) {
                var n, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), s = 0;
                for (n = 0; n < i; n++)
                    (a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                return s + r
            }
            function D(e) {
                !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function w(e, t) {
                var a = !0;
                return m((function() {
                    if (null != i.deprecationHandler && i.deprecationHandler(null, e),
                    a) {
                        for (var n, r = [], s = 0; s < arguments.length; s++) {
                            if (n = "",
                            "object" == typeof arguments[s]) {
                                for (var o in n += "\n[" + s + "] ",
                                arguments[0])
                                    n += o + ": " + arguments[0][o] + ", ";
                                n = n.slice(0, -2)
                            } else
                                n = arguments[s];
                            r.push(n)
                        }
                        D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                        a = !1
                    }
                    return t.apply(this, arguments)
                }
                ), t)
            }
            var x, T = {};
            function S(e, t) {
                null != i.deprecationHandler && i.deprecationHandler(e, t),
                T[e] || (D(t),
                T[e] = !0)
            }
            function H(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            function j(e, t) {
                var a, n = m({}, e);
                for (a in t)
                    _(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {},
                    m(n[a], e[a]),
                    m(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                for (a in e)
                    _(e, a) && !_(t, a) && s(e[a]) && (n[a] = m({}, n[a]));
                return n
            }
            function P(e) {
                null != e && this.set(e)
            }
            i.suppressDeprecationWarnings = !1,
            i.deprecationHandler = null,
            x = Object.keys ? Object.keys : function(e) {
                var t, a = [];
                for (t in e)
                    _(e, t) && a.push(t);
                return a
            }
            ;
            var O = {};
            function A(e, t) {
                var a = e.toLowerCase();
                O[a] = O[a + "s"] = O[t] = e
            }
            function F(e) {
                return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0
            }
            function W(e) {
                var t, a, n = {};
                for (a in e)
                    _(e, a) && (t = F(a)) && (n[t] = e[a]);
                return n
            }
            var C = {};
            function E(e, t) {
                C[e] = t
            }
            function z(e, t, a) {
                var n = "" + Math.abs(e)
                  , i = t - n.length;
                return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n
            }
            var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
              , R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
              , N = {}
              , V = {};
            function B(e, t, a, n) {
                var i = n;
                "string" == typeof n && (i = function() {
                    return this[n]()
                }
                ),
                e && (V[e] = i),
                t && (V[t[0]] = function() {
                    return z(i.apply(this, arguments), t[1], t[2])
                }
                ),
                a && (V[a] = function() {
                    return this.localeData().ordinal(i.apply(this, arguments), e)
                }
                )
            }
            function J(e, t) {
                return e.isValid() ? (t = U(t, e.localeData()),
                N[t] = N[t] || function(e) {
                    var t, a, n, i = e.match(I);
                    for (t = 0,
                    a = i.length; t < a; t++)
                        V[i[t]] ? i[t] = V[i[t]] : i[t] = (n = i[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                    return function(t) {
                        var n, r = "";
                        for (n = 0; n < a; n++)
                            r += H(i[n]) ? i[n].call(t, e) : i[n];
                        return r
                    }
                }(t),
                N[t](e)) : e.localeData().invalidDate()
            }
            function U(e, t) {
                var a = 5;
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                for (R.lastIndex = 0; a >= 0 && R.test(e); )
                    e = e.replace(R, n),
                    R.lastIndex = 0,
                    a -= 1;
                return e
            }
            var G = /\d/
              , q = /\d\d/
              , K = /\d{3}/
              , $ = /\d{4}/
              , Z = /[+-]?\d{6}/
              , Q = /\d\d?/
              , X = /\d\d\d\d?/
              , ee = /\d\d\d\d\d\d?/
              , te = /\d{1,3}/
              , ae = /\d{1,4}/
              , ne = /[+-]?\d{1,6}/
              , ie = /\d+/
              , re = /[+-]?\d+/
              , se = /Z|[+-]\d\d:?\d\d/gi
              , oe = /Z|[+-]\d\d(?::?\d\d)?/gi
              , de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
              , le = {};
            function ue(e, t, a) {
                le[e] = H(t) ? t : function(e, n) {
                    return e && a ? a : t
                }
            }
            function _e(e, t) {
                return _(le, e) ? le[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, a, n, i) {
                    return t || a || n || i
                }
                ))))
            }
            function me(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var he = {};
            function ce(e, t) {
                var a, n = t;
                for ("string" == typeof e && (e = [e]),
                d(t) && (n = function(e, a) {
                    a[t] = k(e)
                }
                ),
                a = 0; a < e.length; a++)
                    he[e[a]] = n
            }
            function fe(e, t) {
                ce(e, (function(e, a, n, i) {
                    n._w = n._w || {},
                    t(e, n._w, n, i)
                }
                ))
            }
            function Me(e, t, a) {
                null != t && _(he, e) && he[e](t, a._a, a, e)
            }
            var pe = 0
              , ge = 1
              , ye = 2
              , Le = 3
              , ve = 4
              , Ye = 5
              , ke = 6
              , be = 7
              , De = 8;
            function we(e) {
                return xe(e) ? 366 : 365
            }
            function xe(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            B("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }
            )),
            B(0, ["YY", 2], 0, (function() {
                return this.year() % 100
            }
            )),
            B(0, ["YYYY", 4], 0, "year"),
            B(0, ["YYYYY", 5], 0, "year"),
            B(0, ["YYYYYY", 6, !0], 0, "year"),
            A("year", "y"),
            E("year", 1),
            ue("Y", re),
            ue("YY", Q, q),
            ue("YYYY", ae, $),
            ue("YYYYY", ne, Z),
            ue("YYYYYY", ne, Z),
            ce(["YYYYY", "YYYYYY"], pe),
            ce("YYYY", (function(e, t) {
                t[pe] = 2 === e.length ? i.parseTwoDigitYear(e) : k(e)
            }
            )),
            ce("YY", (function(e, t) {
                t[pe] = i.parseTwoDigitYear(e)
            }
            )),
            ce("Y", (function(e, t) {
                t[pe] = parseInt(e, 10)
            }
            )),
            i.parseTwoDigitYear = function(e) {
                return k(e) + (k(e) > 68 ? 1900 : 2e3)
            }
            ;
            var Te, Se = He("FullYear", !0);
            function He(e, t) {
                return function(a) {
                    return null != a ? (Pe(this, e, a),
                    i.updateOffset(this, t),
                    this) : je(this, e)
                }
            }
            function je(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }
            function Pe(e, t, a) {
                e.isValid() && !isNaN(a) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), Oe(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
            }
            function Oe(e, t) {
                if (isNaN(e) || isNaN(t))
                    return NaN;
                var a, n = (t % (a = 12) + a) % a;
                return e += (t - n) / 12,
                1 === n ? xe(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e)
                        return t;
                return -1
            }
            ,
            B("M", ["MM", 2], "Mo", (function() {
                return this.month() + 1
            }
            )),
            B("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e)
            }
            )),
            B("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e)
            }
            )),
            A("month", "M"),
            E("month", 8),
            ue("M", Q),
            ue("MM", Q, q),
            ue("MMM", (function(e, t) {
                return t.monthsShortRegex(e)
            }
            )),
            ue("MMMM", (function(e, t) {
                return t.monthsRegex(e)
            }
            )),
            ce(["M", "MM"], (function(e, t) {
                t[ge] = k(e) - 1
            }
            )),
            ce(["MMM", "MMMM"], (function(e, t, a, n) {
                var i = a._locale.monthsParse(e, n, a._strict);
                null != i ? t[ge] = i : c(a).invalidMonth = e
            }
            ));
            var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
              , Fe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , We = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
            function Ce(e, t, a) {
                var n, i, r, s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    n = 0; n < 12; ++n)
                        r = h([2e3, n]),
                        this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(),
                        this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                return a ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null
            }
            function Ee(e, t) {
                var a;
                if (!e.isValid())
                    return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t))
                        t = k(t);
                    else if (!d(t = e.localeData().monthsParse(t)))
                        return e;
                return a = Math.min(e.date(), Oe(e.year(), t)),
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a),
                e
            }
            function ze(e) {
                return null != e ? (Ee(this, e),
                i.updateOffset(this, !0),
                this) : je(this, "Month")
            }
            var Ie = de
              , Re = de;
            function Ne() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n = [], i = [], r = [];
                for (t = 0; t < 12; t++)
                    a = h([2e3, t]),
                    n.push(this.monthsShort(a, "")),
                    i.push(this.months(a, "")),
                    r.push(this.months(a, "")),
                    r.push(this.monthsShort(a, ""));
                for (n.sort(e),
                i.sort(e),
                r.sort(e),
                t = 0; t < 12; t++)
                    n[t] = me(n[t]),
                    i[t] = me(i[t]);
                for (t = 0; t < 24; t++)
                    r[t] = me(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i")
            }
            function Ve(e, t, a, n, i, r, s) {
                var o;
                return e < 100 && e >= 0 ? (o = new Date(e + 400,t,a,n,i,r,s),
                isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e,t,a,n,i,r,s),
                o
            }
            function Be(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var a = Array.prototype.slice.call(arguments);
                    a[0] = e + 400,
                    t = new Date(Date.UTC.apply(null, a)),
                    isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else
                    t = new Date(Date.UTC.apply(null, arguments));
                return t
            }
            function Je(e, t, a) {
                var n = 7 + t - a;
                return -(7 + Be(e, 0, n).getUTCDay() - t) % 7 + n - 1
            }
            function Ue(e, t, a, n, i) {
                var r, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Je(e, n, i);
                return o <= 0 ? s = we(r = e - 1) + o : o > we(e) ? (r = e + 1,
                s = o - we(e)) : (r = e,
                s = o),
                {
                    year: r,
                    dayOfYear: s
                }
            }
            function Ge(e, t, a) {
                var n, i, r = Je(e.year(), t, a), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return s < 1 ? n = s + qe(i = e.year() - 1, t, a) : s > qe(e.year(), t, a) ? (n = s - qe(e.year(), t, a),
                i = e.year() + 1) : (i = e.year(),
                n = s),
                {
                    week: n,
                    year: i
                }
            }
            function qe(e, t, a) {
                var n = Je(e, t, a)
                  , i = Je(e + 1, t, a);
                return (we(e) - n + i) / 7
            }
            function Ke(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            B("w", ["ww", 2], "wo", "week"),
            B("W", ["WW", 2], "Wo", "isoWeek"),
            A("week", "w"),
            A("isoWeek", "W"),
            E("week", 5),
            E("isoWeek", 5),
            ue("w", Q),
            ue("ww", Q, q),
            ue("W", Q),
            ue("WW", Q, q),
            fe(["w", "ww", "W", "WW"], (function(e, t, a, n) {
                t[n.substr(0, 1)] = k(e)
            }
            )),
            B("d", 0, "do", "day"),
            B("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e)
            }
            )),
            B("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e)
            }
            )),
            B("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e)
            }
            )),
            B("e", 0, 0, "weekday"),
            B("E", 0, 0, "isoWeekday"),
            A("day", "d"),
            A("weekday", "e"),
            A("isoWeekday", "E"),
            E("day", 11),
            E("weekday", 11),
            E("isoWeekday", 11),
            ue("d", Q),
            ue("e", Q),
            ue("E", Q),
            ue("dd", (function(e, t) {
                return t.weekdaysMinRegex(e)
            }
            )),
            ue("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e)
            }
            )),
            ue("dddd", (function(e, t) {
                return t.weekdaysRegex(e)
            }
            )),
            fe(["dd", "ddd", "dddd"], (function(e, t, a, n) {
                var i = a._locale.weekdaysParse(e, n, a._strict);
                null != i ? t.d = i : c(a).invalidWeekday = e
            }
            )),
            fe(["d", "e", "E"], (function(e, t, a, n) {
                t[n] = k(e)
            }
            ));
            var $e = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , Qe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
            function Xe(e, t, a) {
                var n, i, r, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    n = 0; n < 7; ++n)
                        r = h([2e3, 1]).day(n),
                        this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                        this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                return a ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null
            }
            var et = de
              , tt = de
              , at = de;
            function nt() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, a, n, i, r, s = [], o = [], d = [], l = [];
                for (t = 0; t < 7; t++)
                    a = h([2e3, 1]).day(t),
                    n = this.weekdaysMin(a, ""),
                    i = this.weekdaysShort(a, ""),
                    r = this.weekdays(a, ""),
                    s.push(n),
                    o.push(i),
                    d.push(r),
                    l.push(n),
                    l.push(i),
                    l.push(r);
                for (s.sort(e),
                o.sort(e),
                d.sort(e),
                l.sort(e),
                t = 0; t < 7; t++)
                    o[t] = me(o[t]),
                    d[t] = me(d[t]),
                    l[t] = me(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
            }
            function it() {
                return this.hours() % 12 || 12
            }
            function rt(e, t) {
                B(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }
                ))
            }
            function st(e, t) {
                return t._meridiemParse
            }
            B("H", ["HH", 2], 0, "hour"),
            B("h", ["hh", 2], 0, it),
            B("k", ["kk", 2], 0, (function() {
                return this.hours() || 24
            }
            )),
            B("hmm", 0, 0, (function() {
                return "" + it.apply(this) + z(this.minutes(), 2)
            }
            )),
            B("hmmss", 0, 0, (function() {
                return "" + it.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
            }
            )),
            B("Hmm", 0, 0, (function() {
                return "" + this.hours() + z(this.minutes(), 2)
            }
            )),
            B("Hmmss", 0, 0, (function() {
                return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
            }
            )),
            rt("a", !0),
            rt("A", !1),
            A("hour", "h"),
            E("hour", 13),
            ue("a", st),
            ue("A", st),
            ue("H", Q),
            ue("h", Q),
            ue("k", Q),
            ue("HH", Q, q),
            ue("hh", Q, q),
            ue("kk", Q, q),
            ue("hmm", X),
            ue("hmmss", ee),
            ue("Hmm", X),
            ue("Hmmss", ee),
            ce(["H", "HH"], Le),
            ce(["k", "kk"], (function(e, t, a) {
                var n = k(e);
                t[Le] = 24 === n ? 0 : n
            }
            )),
            ce(["a", "A"], (function(e, t, a) {
                a._isPm = a._locale.isPM(e),
                a._meridiem = e
            }
            )),
            ce(["h", "hh"], (function(e, t, a) {
                t[Le] = k(e),
                c(a).bigHour = !0
            }
            )),
            ce("hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[Le] = k(e.substr(0, n)),
                t[ve] = k(e.substr(n)),
                c(a).bigHour = !0
            }
            )),
            ce("hmmss", (function(e, t, a) {
                var n = e.length - 4
                  , i = e.length - 2;
                t[Le] = k(e.substr(0, n)),
                t[ve] = k(e.substr(n, 2)),
                t[Ye] = k(e.substr(i)),
                c(a).bigHour = !0
            }
            )),
            ce("Hmm", (function(e, t, a) {
                var n = e.length - 2;
                t[Le] = k(e.substr(0, n)),
                t[ve] = k(e.substr(n))
            }
            )),
            ce("Hmmss", (function(e, t, a) {
                var n = e.length - 4
                  , i = e.length - 2;
                t[Le] = k(e.substr(0, n)),
                t[ve] = k(e.substr(n, 2)),
                t[Ye] = k(e.substr(i))
            }
            ));
            var ot, dt = He("Hours", !0), lt = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: Fe,
                monthsShort: We,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: $e,
                weekdaysMin: Qe,
                weekdaysShort: Ze,
                meridiemParse: /[ap]\.?m?\.?/i
            }, ut = {}, _t = {};
            function mt(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function ht(t) {
                var n = null;
                if (!ut[t] && void 0 !== e && e && e.exports)
                    try {
                        n = ot._abbr,
                        a(137)("./" + t),
                        ct(n)
                    } catch (e) {}
                return ut[t]
            }
            function ct(e, t) {
                var a;
                return e && ((a = o(t) ? Mt(e) : ft(e, t)) ? ot = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
                ot._abbr
            }
            function ft(e, t) {
                if (null !== t) {
                    var a, n = lt;
                    if (t.abbr = e,
                    null != ut[e])
                        S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        n = ut[e]._config;
                    else if (null != t.parentLocale)
                        if (null != ut[t.parentLocale])
                            n = ut[t.parentLocale]._config;
                        else {
                            if (null == (a = ht(t.parentLocale)))
                                return _t[t.parentLocale] || (_t[t.parentLocale] = []),
                                _t[t.parentLocale].push({
                                    name: e,
                                    config: t
                                }),
                                null;
                            n = a._config
                        }
                    return ut[e] = new P(j(n, t)),
                    _t[e] && _t[e].forEach((function(e) {
                        ft(e.name, e.config)
                    }
                    )),
                    ct(e),
                    ut[e]
                }
                return delete ut[e],
                null
            }
            function Mt(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                !e)
                    return ot;
                if (!r(e)) {
                    if (t = ht(e))
                        return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, a, n, i, r = 0; r < e.length; ) {
                        for (t = (i = mt(e[r]).split("-")).length,
                        a = (a = mt(e[r + 1])) ? a.split("-") : null; t > 0; ) {
                            if (n = ht(i.slice(0, t).join("-")))
                                return n;
                            if (a && a.length >= t && b(i, a, !0) >= t - 1)
                                break;
                            t--
                        }
                        r++
                    }
                    return ot
                }(e)
            }
            function pt(e) {
                var t, a = e._a;
                return a && -2 === c(e).overflow && (t = a[ge] < 0 || a[ge] > 11 ? ge : a[ye] < 1 || a[ye] > Oe(a[pe], a[ge]) ? ye : a[Le] < 0 || a[Le] > 24 || 24 === a[Le] && (0 !== a[ve] || 0 !== a[Ye] || 0 !== a[ke]) ? Le : a[ve] < 0 || a[ve] > 59 ? ve : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[ke] < 0 || a[ke] > 999 ? ke : -1,
                c(e)._overflowDayOfYear && (t < pe || t > ye) && (t = ye),
                c(e)._overflowWeeks && -1 === t && (t = be),
                c(e)._overflowWeekday && -1 === t && (t = De),
                c(e).overflow = t),
                e
            }
            function gt(e, t, a) {
                return null != e ? e : null != t ? t : a
            }
            function yt(e) {
                var t, a, n, r, s, o = [];
                if (!e._d) {
                    for (n = function(e) {
                        var t = new Date(i.now());
                        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                    }(e),
                    e._w && null == e._a[ye] && null == e._a[ge] && function(e) {
                        var t, a, n, i, r, s, o, d;
                        if (null != (t = e._w).GG || null != t.W || null != t.E)
                            r = 1,
                            s = 4,
                            a = gt(t.GG, e._a[pe], Ge(At(), 1, 4).year),
                            n = gt(t.W, 1),
                            ((i = gt(t.E, 1)) < 1 || i > 7) && (d = !0);
                        else {
                            r = e._locale._week.dow,
                            s = e._locale._week.doy;
                            var l = Ge(At(), r, s);
                            a = gt(t.gg, e._a[pe], l.year),
                            n = gt(t.w, l.week),
                            null != t.d ? ((i = t.d) < 0 || i > 6) && (d = !0) : null != t.e ? (i = t.e + r,
                            (t.e < 0 || t.e > 6) && (d = !0)) : i = r
                        }
                        n < 1 || n > qe(a, r, s) ? c(e)._overflowWeeks = !0 : null != d ? c(e)._overflowWeekday = !0 : (o = Ue(a, n, i, r, s),
                        e._a[pe] = o.year,
                        e._dayOfYear = o.dayOfYear)
                    }(e),
                    null != e._dayOfYear && (s = gt(e._a[pe], n[pe]),
                    (e._dayOfYear > we(s) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0),
                    a = Be(s, 0, e._dayOfYear),
                    e._a[ge] = a.getUTCMonth(),
                    e._a[ye] = a.getUTCDate()),
                    t = 0; t < 3 && null == e._a[t]; ++t)
                        e._a[t] = o[t] = n[t];
                    for (; t < 7; t++)
                        e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[Le] && 0 === e._a[ve] && 0 === e._a[Ye] && 0 === e._a[ke] && (e._nextDay = !0,
                    e._a[Le] = 0),
                    e._d = (e._useUTC ? Be : Ve).apply(null, o),
                    r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    e._nextDay && (e._a[Le] = 24),
                    e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
                }
            }
            var Lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
              , Yt = /Z|[+-]\d\d(?::?\d\d)?/
              , kt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
              , bt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
              , Dt = /^\/?Date\((\-?\d+)/i;
            function wt(e) {
                var t, a, n, i, r, s, o = e._i, d = Lt.exec(o) || vt.exec(o);
                if (d) {
                    for (c(e).iso = !0,
                    t = 0,
                    a = kt.length; t < a; t++)
                        if (kt[t][1].exec(d[1])) {
                            i = kt[t][0],
                            n = !1 !== kt[t][2];
                            break
                        }
                    if (null == i)
                        return void (e._isValid = !1);
                    if (d[3]) {
                        for (t = 0,
                        a = bt.length; t < a; t++)
                            if (bt[t][1].exec(d[3])) {
                                r = (d[2] || " ") + bt[t][0];
                                break
                            }
                        if (null == r)
                            return void (e._isValid = !1)
                    }
                    if (!n && null != r)
                        return void (e._isValid = !1);
                    if (d[4]) {
                        if (!Yt.exec(d[4]))
                            return void (e._isValid = !1);
                        s = "Z"
                    }
                    e._f = i + (r || "") + (s || ""),
                    jt(e)
                } else
                    e._isValid = !1
            }
            var xt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
            function Tt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            var St = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function Ht(e) {
                var t, a, n, i, r, s, o, d = xt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    var l = (t = d[4],
                    a = d[3],
                    n = d[2],
                    i = d[5],
                    r = d[6],
                    s = d[7],
                    o = [Tt(t), We.indexOf(a), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)],
                    s && o.push(parseInt(s, 10)),
                    o);
                    if (!function(e, t, a) {
                        return !e || Ze.indexOf(e) === new Date(t[0],t[1],t[2]).getDay() || (c(a).weekdayMismatch = !0,
                        a._isValid = !1,
                        !1)
                    }(d[1], l, e))
                        return;
                    e._a = l,
                    e._tzm = function(e, t, a) {
                        if (e)
                            return St[e];
                        if (t)
                            return 0;
                        var n = parseInt(a, 10)
                          , i = n % 100;
                        return (n - i) / 100 * 60 + i
                    }(d[8], d[9], d[10]),
                    e._d = Be.apply(null, e._a),
                    e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    c(e).rfc2822 = !0
                } else
                    e._isValid = !1
            }
            function jt(e) {
                if (e._f !== i.ISO_8601)
                    if (e._f !== i.RFC_2822) {
                        e._a = [],
                        c(e).empty = !0;
                        var t, a, n, r, s, o = "" + e._i, d = o.length, l = 0;
                        for (n = U(e._f, e._locale).match(I) || [],
                        t = 0; t < n.length; t++)
                            r = n[t],
                            (a = (o.match(_e(r, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && c(e).unusedInput.push(s),
                            o = o.slice(o.indexOf(a) + a.length),
                            l += a.length),
                            V[r] ? (a ? c(e).empty = !1 : c(e).unusedTokens.push(r),
                            Me(r, a, e)) : e._strict && !a && c(e).unusedTokens.push(r);
                        c(e).charsLeftOver = d - l,
                        o.length > 0 && c(e).unusedInput.push(o),
                        e._a[Le] <= 12 && !0 === c(e).bigHour && e._a[Le] > 0 && (c(e).bigHour = void 0),
                        c(e).parsedDateParts = e._a.slice(0),
                        c(e).meridiem = e._meridiem,
                        e._a[Le] = function(e, t, a) {
                            var n;
                            return null == a ? t : null != e.meridiemHour ? e.meridiemHour(t, a) : null != e.isPM ? ((n = e.isPM(a)) && t < 12 && (t += 12),
                            n || 12 !== t || (t = 0),
                            t) : t
                        }(e._locale, e._a[Le], e._meridiem),
                        yt(e),
                        pt(e)
                    } else
                        Ht(e);
                else
                    wt(e)
            }
            function Pt(e) {
                var t = e._i
                  , a = e._f;
                return e._locale = e._locale || Mt(e._l),
                null === t || void 0 === a && "" === t ? M({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                v(t) ? new L(pt(t)) : (l(t) ? e._d = t : r(a) ? function(e) {
                    var t, a, n, i, r;
                    if (0 === e._f.length)
                        return c(e).invalidFormat = !0,
                        void (e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++)
                        r = 0,
                        t = g({}, e),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                        t._f = e._f[i],
                        jt(t),
                        f(t) && (r += c(t).charsLeftOver,
                        r += 10 * c(t).unusedTokens.length,
                        c(t).score = r,
                        (null == n || r < n) && (n = r,
                        a = t));
                    m(e, a || t)
                }(e) : a ? jt(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = Dt.exec(e._i);
                        null === t ? (wt(e),
                        !1 === e._isValid && (delete e._isValid,
                        Ht(e),
                        !1 === e._isValid && (delete e._isValid,
                        i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : r(t) ? (e._a = u(t.slice(0), (function(e) {
                        return parseInt(e, 10)
                    }
                    )),
                    yt(e)) : s(t) ? function(e) {
                        if (!e._d) {
                            var t = W(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                                return e && parseInt(e, 10)
                            }
                            )),
                            yt(e)
                        }
                    }(e) : d(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
                }(e),
                f(e) || (e._d = null),
                e))
            }
            function Ot(e, t, a, n, i) {
                var o, d = {};
                return !0 !== a && !1 !== a || (n = a,
                a = void 0),
                (s(e) && function(e) {
                    if (Object.getOwnPropertyNames)
                        return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t))
                            return !1;
                    return !0
                }(e) || r(e) && 0 === e.length) && (e = void 0),
                d._isAMomentObject = !0,
                d._useUTC = d._isUTC = i,
                d._l = a,
                d._i = e,
                d._f = t,
                d._strict = n,
                (o = new L(pt(Pt(d))))._nextDay && (o.add(1, "d"),
                o._nextDay = void 0),
                o
            }
            function At(e, t, a, n) {
                return Ot(e, t, a, n, !1)
            }
            i.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }
            )),
            i.ISO_8601 = function() {}
            ,
            i.RFC_2822 = function() {}
            ;
            var Ft = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = At.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : M()
            }
            ))
              , Wt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = At.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : M()
            }
            ));
            function Ct(e, t) {
                var a, n;
                if (1 === t.length && r(t[0]) && (t = t[0]),
                !t.length)
                    return At();
                for (a = t[0],
                n = 1; n < t.length; ++n)
                    t[n].isValid() && !t[n][e](a) || (a = t[n]);
                return a
            }
            var Et = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function zt(e) {
                var t = W(e)
                  , a = t.year || 0
                  , n = t.quarter || 0
                  , i = t.month || 0
                  , r = t.week || t.isoWeek || 0
                  , s = t.day || 0
                  , o = t.hour || 0
                  , d = t.minute || 0
                  , l = t.second || 0
                  , u = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === Te.call(Et, t) || null != e[t] && isNaN(e[t]))
                            return !1;
                    for (var a = !1, n = 0; n < Et.length; ++n)
                        if (e[Et[n]]) {
                            if (a)
                                return !1;
                            parseFloat(e[Et[n]]) !== k(e[Et[n]]) && (a = !0)
                        }
                    return !0
                }(t),
                this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60,
                this._days = +s + 7 * r,
                this._months = +i + 3 * n + 12 * a,
                this._data = {},
                this._locale = Mt(),
                this._bubble()
            }
            function It(e) {
                return e instanceof zt
            }
            function Rt(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }
            function Nt(e, t) {
                B(e, 0, 0, (function() {
                    var e = this.utcOffset()
                      , a = "+";
                    return e < 0 && (e = -e,
                    a = "-"),
                    a + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
                }
                ))
            }
            Nt("Z", ":"),
            Nt("ZZ", ""),
            ue("Z", oe),
            ue("ZZ", oe),
            ce(["Z", "ZZ"], (function(e, t, a) {
                a._useUTC = !0,
                a._tzm = Bt(oe, e)
            }
            ));
            var Vt = /([\+\-]|\d\d)/gi;
            function Bt(e, t) {
                var a = (t || "").match(e);
                if (null === a)
                    return null;
                var n = ((a[a.length - 1] || []) + "").match(Vt) || ["-", 0, 0]
                  , i = 60 * n[1] + k(n[2]);
                return 0 === i ? 0 : "+" === n[0] ? i : -i
            }
            function Jt(e, t) {
                var a, n;
                return t._isUTC ? (a = t.clone(),
                n = (v(e) || l(e) ? e.valueOf() : At(e).valueOf()) - a.valueOf(),
                a._d.setTime(a._d.valueOf() + n),
                i.updateOffset(a, !1),
                a) : At(e).local()
            }
            function Ut(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }
            function Gt() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            i.updateOffset = function() {}
            ;
            var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
              , Kt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function $t(e, t) {
                var a, n, i, r, s, o, l = e, u = null;
                return It(e) ? l = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (l = {},
                t ? l[t] = e : l.milliseconds = e) : (u = qt.exec(e)) ? (a = "-" === u[1] ? -1 : 1,
                l = {
                    y: 0,
                    d: k(u[ye]) * a,
                    h: k(u[Le]) * a,
                    m: k(u[ve]) * a,
                    s: k(u[Ye]) * a,
                    ms: k(Rt(1e3 * u[ke])) * a
                }) : (u = Kt.exec(e)) ? (a = "-" === u[1] ? -1 : 1,
                l = {
                    y: Zt(u[2], a),
                    M: Zt(u[3], a),
                    w: Zt(u[4], a),
                    d: Zt(u[5], a),
                    h: Zt(u[6], a),
                    m: Zt(u[7], a),
                    s: Zt(u[8], a)
                }) : null == l ? l = {} : "object" == typeof l && ("from"in l || "to"in l) && (r = At(l.from),
                s = At(l.to),
                i = r.isValid() && s.isValid() ? (s = Jt(s, r),
                r.isBefore(s) ? o = Qt(r, s) : ((o = Qt(s, r)).milliseconds = -o.milliseconds,
                o.months = -o.months),
                o) : {
                    milliseconds: 0,
                    months: 0
                },
                (l = {}).ms = i.milliseconds,
                l.M = i.months),
                n = new zt(l),
                It(e) && _(e, "_locale") && (n._locale = e._locale),
                n
            }
            function Zt(e, t) {
                var a = e && parseFloat(e.replace(",", "."));
                return (isNaN(a) ? 0 : a) * t
            }
            function Qt(e, t) {
                var a = {};
                return a.months = t.month() - e.month() + 12 * (t.year() - e.year()),
                e.clone().add(a.months, "M").isAfter(t) && --a.months,
                a.milliseconds = +t - +e.clone().add(a.months, "M"),
                a
            }
            function Xt(e, t) {
                return function(a, n) {
                    var i;
                    return null === n || isNaN(+n) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    i = a,
                    a = n,
                    n = i),
                    ea(this, $t(a = "string" == typeof a ? +a : a, n), e),
                    this
                }
            }
            function ea(e, t, a, n) {
                var r = t._milliseconds
                  , s = Rt(t._days)
                  , o = Rt(t._months);
                e.isValid() && (n = null == n || n,
                o && Ee(e, je(e, "Month") + o * a),
                s && Pe(e, "Date", je(e, "Date") + s * a),
                r && e._d.setTime(e._d.valueOf() + r * a),
                n && i.updateOffset(e, s || o))
            }
            $t.fn = zt.prototype,
            $t.invalid = function() {
                return $t(NaN)
            }
            ;
            var ta = Xt(1, "add")
              , aa = Xt(-1, "subtract");
            function na(e, t) {
                var a = 12 * (t.year() - e.year()) + (t.month() - e.month())
                  , n = e.clone().add(a, "months");
                return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0
            }
            function ia(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = Mt(e)) && (this._locale = t),
                this)
            }
            i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var ra = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }
            ));
            function sa() {
                return this._locale
            }
            var oa = 1e3
              , da = 60 * oa
              , la = 60 * da
              , ua = 3506328 * la;
            function _a(e, t) {
                return (e % t + t) % t
            }
            function ma(e, t, a) {
                return e < 100 && e >= 0 ? new Date(e + 400,t,a) - ua : new Date(e,t,a).valueOf()
            }
            function ha(e, t, a) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - ua : Date.UTC(e, t, a)
            }
            function ca(e, t) {
                B(0, [e, e.length], 0, t)
            }
            function fa(e, t, a, n, i) {
                var r;
                return null == e ? Ge(this, n, i).year : (t > (r = qe(e, n, i)) && (t = r),
                Ma.call(this, e, t, a, n, i))
            }
            function Ma(e, t, a, n, i) {
                var r = Ue(e, t, a, n, i)
                  , s = Be(r.year, 0, r.dayOfYear);
                return this.year(s.getUTCFullYear()),
                this.month(s.getUTCMonth()),
                this.date(s.getUTCDate()),
                this
            }
            B(0, ["gg", 2], 0, (function() {
                return this.weekYear() % 100
            }
            )),
            B(0, ["GG", 2], 0, (function() {
                return this.isoWeekYear() % 100
            }
            )),
            ca("gggg", "weekYear"),
            ca("ggggg", "weekYear"),
            ca("GGGG", "isoWeekYear"),
            ca("GGGGG", "isoWeekYear"),
            A("weekYear", "gg"),
            A("isoWeekYear", "GG"),
            E("weekYear", 1),
            E("isoWeekYear", 1),
            ue("G", re),
            ue("g", re),
            ue("GG", Q, q),
            ue("gg", Q, q),
            ue("GGGG", ae, $),
            ue("gggg", ae, $),
            ue("GGGGG", ne, Z),
            ue("ggggg", ne, Z),
            fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, a, n) {
                t[n.substr(0, 2)] = k(e)
            }
            )),
            fe(["gg", "GG"], (function(e, t, a, n) {
                t[n] = i.parseTwoDigitYear(e)
            }
            )),
            B("Q", 0, "Qo", "quarter"),
            A("quarter", "Q"),
            E("quarter", 7),
            ue("Q", G),
            ce("Q", (function(e, t) {
                t[ge] = 3 * (k(e) - 1)
            }
            )),
            B("D", ["DD", 2], "Do", "date"),
            A("date", "D"),
            E("date", 9),
            ue("D", Q),
            ue("DD", Q, q),
            ue("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }
            )),
            ce(["D", "DD"], ye),
            ce("Do", (function(e, t) {
                t[ye] = k(e.match(Q)[0])
            }
            ));
            var pa = He("Date", !0);
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            A("dayOfYear", "DDD"),
            E("dayOfYear", 4),
            ue("DDD", te),
            ue("DDDD", K),
            ce(["DDD", "DDDD"], (function(e, t, a) {
                a._dayOfYear = k(e)
            }
            )),
            B("m", ["mm", 2], 0, "minute"),
            A("minute", "m"),
            E("minute", 14),
            ue("m", Q),
            ue("mm", Q, q),
            ce(["m", "mm"], ve);
            var ga = He("Minutes", !1);
            B("s", ["ss", 2], 0, "second"),
            A("second", "s"),
            E("second", 15),
            ue("s", Q),
            ue("ss", Q, q),
            ce(["s", "ss"], Ye);
            var ya, La = He("Seconds", !1);
            for (B("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100)
            }
            )),
            B(0, ["SS", 2], 0, (function() {
                return ~~(this.millisecond() / 10)
            }
            )),
            B(0, ["SSS", 3], 0, "millisecond"),
            B(0, ["SSSS", 4], 0, (function() {
                return 10 * this.millisecond()
            }
            )),
            B(0, ["SSSSS", 5], 0, (function() {
                return 100 * this.millisecond()
            }
            )),
            B(0, ["SSSSSS", 6], 0, (function() {
                return 1e3 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSS", 7], 0, (function() {
                return 1e4 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSSS", 8], 0, (function() {
                return 1e5 * this.millisecond()
            }
            )),
            B(0, ["SSSSSSSSS", 9], 0, (function() {
                return 1e6 * this.millisecond()
            }
            )),
            A("millisecond", "ms"),
            E("millisecond", 16),
            ue("S", te, G),
            ue("SS", te, q),
            ue("SSS", te, K),
            ya = "SSSS"; ya.length <= 9; ya += "S")
                ue(ya, ie);
            function va(e, t) {
                t[ke] = k(1e3 * ("0." + e))
            }
            for (ya = "S"; ya.length <= 9; ya += "S")
                ce(ya, va);
            var Ya = He("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"),
            B("zz", 0, 0, "zoneName");
            var ka = L.prototype;
            function ba(e) {
                return e
            }
            ka.add = ta,
            ka.calendar = function(e, t) {
                var a = e || At()
                  , n = Jt(a, this).startOf("day")
                  , r = i.calendarFormat(this, n) || "sameElse"
                  , s = t && (H(t[r]) ? t[r].call(this, a) : t[r]);
                return this.format(s || this.localeData().calendar(r, this, At(a)))
            }
            ,
            ka.clone = function() {
                return new L(this)
            }
            ,
            ka.diff = function(e, t, a) {
                var n, i, r;
                if (!this.isValid())
                    return NaN;
                if (!(n = Jt(e, this)).isValid())
                    return NaN;
                switch (i = 6e4 * (n.utcOffset() - this.utcOffset()),
                t = F(t)) {
                case "year":
                    r = na(this, n) / 12;
                    break;
                case "month":
                    r = na(this, n);
                    break;
                case "quarter":
                    r = na(this, n) / 3;
                    break;
                case "second":
                    r = (this - n) / 1e3;
                    break;
                case "minute":
                    r = (this - n) / 6e4;
                    break;
                case "hour":
                    r = (this - n) / 36e5;
                    break;
                case "day":
                    r = (this - n - i) / 864e5;
                    break;
                case "week":
                    r = (this - n - i) / 6048e5;
                    break;
                default:
                    r = this - n
                }
                return a ? r : Y(r)
            }
            ,
            ka.endOf = function(e) {
                var t;
                if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid())
                    return this;
                var a = this._isUTC ? ha : ma;
                switch (e) {
                case "year":
                    t = a(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    t = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    t = a(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    t = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    t = a(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    t = this._d.valueOf(),
                    t += la - _a(t + (this._isUTC ? 0 : this.utcOffset() * da), la) - 1;
                    break;
                case "minute":
                    t = this._d.valueOf(),
                    t += da - _a(t, da) - 1;
                    break;
                case "second":
                    t = this._d.valueOf(),
                    t += oa - _a(t, oa) - 1
                }
                return this._d.setTime(t),
                i.updateOffset(this, !0),
                this
            }
            ,
            ka.format = function(e) {
                e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
                var t = J(this, e);
                return this.localeData().postformat(t)
            }
            ,
            ka.from = function(e, t) {
                return this.isValid() && (v(e) && e.isValid() || At(e).isValid()) ? $t({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            ,
            ka.fromNow = function(e) {
                return this.from(At(), e)
            }
            ,
            ka.to = function(e, t) {
                return this.isValid() && (v(e) && e.isValid() || At(e).isValid()) ? $t({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            ,
            ka.toNow = function(e) {
                return this.to(At(), e)
            }
            ,
            ka.get = function(e) {
                return H(this[e = F(e)]) ? this[e]() : this
            }
            ,
            ka.invalidAt = function() {
                return c(this).overflow
            }
            ,
            ka.isAfter = function(e, t) {
                var a = v(e) ? e : At(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
            }
            ,
            ka.isBefore = function(e, t) {
                var a = v(e) ? e : At(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
            }
            ,
            ka.isBetween = function(e, t, a, n) {
                var i = v(e) ? e : At(e)
                  , r = v(t) ? t : At(t);
                return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(i, a) : !this.isBefore(i, a)) && (")" === n[1] ? this.isBefore(r, a) : !this.isAfter(r, a))
            }
            ,
            ka.isSame = function(e, t) {
                var a, n = v(e) ? e : At(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() === n.valueOf() : (a = n.valueOf(),
                this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
            }
            ,
            ka.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }
            ,
            ka.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }
            ,
            ka.isValid = function() {
                return f(this)
            }
            ,
            ka.lang = ra,
            ka.locale = ia,
            ka.localeData = sa,
            ka.max = Wt,
            ka.min = Ft,
            ka.parsingFlags = function() {
                return m({}, c(this))
            }
            ,
            ka.set = function(e, t) {
                if ("object" == typeof e)
                    for (var a = function(e) {
                        var t = [];
                        for (var a in e)
                            t.push({
                                unit: a,
                                priority: C[a]
                            });
                        return t.sort((function(e, t) {
                            return e.priority - t.priority
                        }
                        )),
                        t
                    }(e = W(e)), n = 0; n < a.length; n++)
                        this[a[n].unit](e[a[n].unit]);
                else if (H(this[e = F(e)]))
                    return this[e](t);
                return this
            }
            ,
            ka.startOf = function(e) {
                var t;
                if (void 0 === (e = F(e)) || "millisecond" === e || !this.isValid())
                    return this;
                var a = this._isUTC ? ha : ma;
                switch (e) {
                case "year":
                    t = a(this.year(), 0, 1);
                    break;
                case "quarter":
                    t = a(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    t = a(this.year(), this.month(), 1);
                    break;
                case "week":
                    t = a(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    t = a(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    t = this._d.valueOf(),
                    t -= _a(t + (this._isUTC ? 0 : this.utcOffset() * da), la);
                    break;
                case "minute":
                    t = this._d.valueOf(),
                    t -= _a(t, da);
                    break;
                case "second":
                    t = this._d.valueOf(),
                    t -= _a(t, oa)
                }
                return this._d.setTime(t),
                i.updateOffset(this, !0),
                this
            }
            ,
            ka.subtract = aa,
            ka.toArray = function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            ,
            ka.toObject = function() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            ,
            ka.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            ka.toISOString = function(e) {
                if (!this.isValid())
                    return null;
                var t = !0 !== e
                  , a = t ? this.clone().utc() : this;
                return a.year() < 0 || a.year() > 9999 ? J(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(a, "Z")) : J(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            ,
            ka.inspect = function() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var e = "moment"
                  , t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                t = "Z");
                var a = "[" + e + '("]'
                  , n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                  , i = t + '[")]';
                return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + i)
            }
            ,
            ka.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            ka.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            ,
            ka.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            ka.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            ,
            ka.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            ,
            ka.year = Se,
            ka.isLeapYear = function() {
                return xe(this.year())
            }
            ,
            ka.weekYear = function(e) {
                return fa.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            ,
            ka.isoWeekYear = function(e) {
                return fa.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            ,
            ka.quarter = ka.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }
            ,
            ka.month = ze,
            ka.daysInMonth = function() {
                return Oe(this.year(), this.month())
            }
            ,
            ka.week = ka.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            ,
            ka.isoWeek = ka.isoWeeks = function(e) {
                var t = Ge(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            ,
            ka.weeksInYear = function() {
                var e = this.localeData()._week;
                return qe(this.year(), e.dow, e.doy)
            }
            ,
            ka.isoWeeksInYear = function() {
                return qe(this.year(), 1, 4)
            }
            ,
            ka.date = pa,
            ka.day = ka.days = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                }(e, this.localeData()),
                this.add(e - t, "d")) : t
            }
            ,
            ka.weekday = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }
            ,
            ka.isoWeekday = function(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }
            ,
            ka.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }
            ,
            ka.hour = ka.hours = dt,
            ka.minute = ka.minutes = ga,
            ka.second = ka.seconds = La,
            ka.millisecond = ka.milliseconds = Ya,
            ka.utcOffset = function(e, t, a) {
                var n, r = this._offset || 0;
                if (!this.isValid())
                    return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Bt(oe, e)))
                            return this
                    } else
                        Math.abs(e) < 16 && !a && (e *= 60);
                    return !this._isUTC && t && (n = Ut(this)),
                    this._offset = e,
                    this._isUTC = !0,
                    null != n && this.add(n, "m"),
                    r !== e && (!t || this._changeInProgress ? ea(this, $t(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                    i.updateOffset(this, !0),
                    this._changeInProgress = null)),
                    this
                }
                return this._isUTC ? r : Ut(this)
            }
            ,
            ka.utc = function(e) {
                return this.utcOffset(0, e)
            }
            ,
            ka.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
                e && this.subtract(Ut(this), "m")),
                this
            }
            ,
            ka.parseZone = function() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = Bt(se, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }
            ,
            ka.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? At(e).utcOffset() : 0,
                (this.utcOffset() - e) % 60 == 0)
            }
            ,
            ka.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            ,
            ka.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }
            ,
            ka.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }
            ,
            ka.isUtc = Gt,
            ka.isUTC = Gt,
            ka.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }
            ,
            ka.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            ,
            ka.dates = w("dates accessor is deprecated. Use date instead.", pa),
            ka.months = w("months accessor is deprecated. Use month instead", ze),
            ka.years = w("years accessor is deprecated. Use year instead", Se),
            ka.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e),
                this.utcOffset(e, t),
                this) : -this.utcOffset()
            }
            )),
            ka.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!o(this._isDSTShifted))
                    return this._isDSTShifted;
                var e = {};
                if (g(e, this),
                (e = Pt(e))._a) {
                    var t = e._isUTC ? h(e._a) : At(e._a);
                    this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
                } else
                    this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            ));
            var Da = P.prototype;
            function wa(e, t, a, n) {
                var i = Mt()
                  , r = h().set(n, t);
                return i[a](r, e)
            }
            function xa(e, t, a) {
                if (d(e) && (t = e,
                e = void 0),
                e = e || "",
                null != t)
                    return wa(e, t, a, "month");
                var n, i = [];
                for (n = 0; n < 12; n++)
                    i[n] = wa(e, n, a, "month");
                return i
            }
            function Ta(e, t, a, n) {
                "boolean" == typeof e ? (d(t) && (a = t,
                t = void 0),
                t = t || "") : (a = t = e,
                e = !1,
                d(t) && (a = t,
                t = void 0),
                t = t || "");
                var i, r = Mt(), s = e ? r._week.dow : 0;
                if (null != a)
                    return wa(t, (a + s) % 7, n, "day");
                var o = [];
                for (i = 0; i < 7; i++)
                    o[i] = wa(t, (i + s) % 7, n, "day");
                return o
            }
            Da.calendar = function(e, t, a) {
                var n = this._calendar[e] || this._calendar.sameElse;
                return H(n) ? n.call(t, a) : n
            }
            ,
            Da.longDateFormat = function(e) {
                var t = this._longDateFormat[e]
                  , a = this._longDateFormat[e.toUpperCase()];
                return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, (function(e) {
                    return e.slice(1)
                }
                )),
                this._longDateFormat[e])
            }
            ,
            Da.invalidDate = function() {
                return this._invalidDate
            }
            ,
            Da.ordinal = function(e) {
                return this._ordinal.replace("%d", e)
            }
            ,
            Da.preparse = ba,
            Da.postformat = ba,
            Da.relativeTime = function(e, t, a, n) {
                var i = this._relativeTime[a];
                return H(i) ? i(e, t, a, n) : i.replace(/%d/i, e)
            }
            ,
            Da.pastFuture = function(e, t) {
                var a = this._relativeTime[e > 0 ? "future" : "past"];
                return H(a) ? a(t) : a.replace(/%s/i, t)
            }
            ,
            Da.set = function(e) {
                var t, a;
                for (a in e)
                    H(t = e[a]) ? this[a] = t : this["_" + a] = t;
                this._config = e,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            ,
            Da.months = function(e, t) {
                return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
            }
            ,
            Da.monthsShort = function(e, t) {
                return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ae.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            ,
            Da.monthsParse = function(e, t, a) {
                var n, i, r;
                if (this._monthsParseExact)
                    return Ce.call(this, e, t, a);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                n = 0; n < 12; n++) {
                    if (i = h([2e3, n]),
                    a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
                    a || this._monthsParse[n] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
                    this._monthsParse[n] = new RegExp(r.replace(".", ""),"i")),
                    a && "MMMM" === t && this._longMonthsParse[n].test(e))
                        return n;
                    if (a && "MMM" === t && this._shortMonthsParse[n].test(e))
                        return n;
                    if (!a && this._monthsParse[n].test(e))
                        return n
                }
            }
            ,
            Da.monthsRegex = function(e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Ne.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, "_monthsRegex") || (this._monthsRegex = Re),
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }
            ,
            Da.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (_(this, "_monthsRegex") || Ne.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = Ie),
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            ,
            Da.week = function(e) {
                return Ge(e, this._week.dow, this._week.doy).week
            }
            ,
            Da.firstDayOfYear = function() {
                return this._week.doy
            }
            ,
            Da.firstDayOfWeek = function() {
                return this._week.dow
            }
            ,
            Da.weekdays = function(e, t) {
                var a = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Ke(a, this._week.dow) : e ? a[e.day()] : a
            }
            ,
            Da.weekdaysMin = function(e) {
                return !0 === e ? Ke(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }
            ,
            Da.weekdaysShort = function(e) {
                return !0 === e ? Ke(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }
            ,
            Da.weekdaysParse = function(e, t, a) {
                var n, i, r;
                if (this._weekdaysParseExact)
                    return Xe.call(this, e, t, a);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                n = 0; n < 7; n++) {
                    if (i = h([2e3, 1]).day(n),
                    a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
                    this._weekdaysParse[n] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
                    this._weekdaysParse[n] = new RegExp(r.replace(".", ""),"i")),
                    a && "dddd" === t && this._fullWeekdaysParse[n].test(e))
                        return n;
                    if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e))
                        return n;
                    if (a && "dd" === t && this._minWeekdaysParse[n].test(e))
                        return n;
                    if (!a && this._weekdaysParse[n].test(e))
                        return n
                }
            }
            ,
            Da.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || nt.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = et),
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            ,
            Da.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || nt.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tt),
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            ,
            Da.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || nt.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = at),
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            ,
            Da.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }
            ,
            Da.meridiem = function(e, t, a) {
                return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
            }
            ,
            ct("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }),
            i.lang = w("moment.lang is deprecated. Use moment.locale instead.", ct),
            i.langData = w("moment.langData is deprecated. Use moment.localeData instead.", Mt);
            var Sa = Math.abs;
            function Ha(e, t, a, n) {
                var i = $t(t, a);
                return e._milliseconds += n * i._milliseconds,
                e._days += n * i._days,
                e._months += n * i._months,
                e._bubble()
            }
            function ja(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function Pa(e) {
                return 4800 * e / 146097
            }
            function Oa(e) {
                return 146097 * e / 4800
            }
            function Aa(e) {
                return function() {
                    return this.as(e)
                }
            }
            var Fa = Aa("ms")
              , Wa = Aa("s")
              , Ca = Aa("m")
              , Ea = Aa("h")
              , za = Aa("d")
              , Ia = Aa("w")
              , Ra = Aa("M")
              , Na = Aa("Q")
              , Va = Aa("y");
            function Ba(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var Ja = Ba("milliseconds")
              , Ua = Ba("seconds")
              , Ga = Ba("minutes")
              , qa = Ba("hours")
              , Ka = Ba("days")
              , $a = Ba("months")
              , Za = Ba("years")
              , Qa = Math.round
              , Xa = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            };
            function en(e, t, a, n, i) {
                return i.relativeTime(t || 1, !!a, e, n)
            }
            var tn = Math.abs;
            function an(e) {
                return (e > 0) - (e < 0) || +e
            }
            function nn() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e, t, a = tn(this._milliseconds) / 1e3, n = tn(this._days), i = tn(this._months);
                e = Y(a / 60),
                t = Y(e / 60),
                a %= 60,
                e %= 60;
                var r = Y(i / 12)
                  , s = i %= 12
                  , o = n
                  , d = t
                  , l = e
                  , u = a ? a.toFixed(3).replace(/\.?0+$/, "") : ""
                  , _ = this.asSeconds();
                if (!_)
                    return "P0D";
                var m = _ < 0 ? "-" : ""
                  , h = an(this._months) !== an(_) ? "-" : ""
                  , c = an(this._days) !== an(_) ? "-" : ""
                  , f = an(this._milliseconds) !== an(_) ? "-" : "";
                return m + "P" + (r ? h + r + "Y" : "") + (s ? h + s + "M" : "") + (o ? c + o + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
            }
            var rn = zt.prototype;
            return rn.isValid = function() {
                return this._isValid
            }
            ,
            rn.abs = function() {
                var e = this._data;
                return this._milliseconds = Sa(this._milliseconds),
                this._days = Sa(this._days),
                this._months = Sa(this._months),
                e.milliseconds = Sa(e.milliseconds),
                e.seconds = Sa(e.seconds),
                e.minutes = Sa(e.minutes),
                e.hours = Sa(e.hours),
                e.months = Sa(e.months),
                e.years = Sa(e.years),
                this
            }
            ,
            rn.add = function(e, t) {
                return Ha(this, e, t, 1)
            }
            ,
            rn.subtract = function(e, t) {
                return Ha(this, e, t, -1)
            }
            ,
            rn.as = function(e) {
                if (!this.isValid())
                    return NaN;
                var t, a, n = this._milliseconds;
                if ("month" === (e = F(e)) || "quarter" === e || "year" === e)
                    switch (t = this._days + n / 864e5,
                    a = this._months + Pa(t),
                    e) {
                    case "month":
                        return a;
                    case "quarter":
                        return a / 3;
                    case "year":
                        return a / 12
                    }
                else
                    switch (t = this._days + Math.round(Oa(this._months)),
                    e) {
                    case "week":
                        return t / 7 + n / 6048e5;
                    case "day":
                        return t + n / 864e5;
                    case "hour":
                        return 24 * t + n / 36e5;
                    case "minute":
                        return 1440 * t + n / 6e4;
                    case "second":
                        return 86400 * t + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + n;
                    default:
                        throw new Error("Unknown unit " + e)
                    }
            }
            ,
            rn.asMilliseconds = Fa,
            rn.asSeconds = Wa,
            rn.asMinutes = Ca,
            rn.asHours = Ea,
            rn.asDays = za,
            rn.asWeeks = Ia,
            rn.asMonths = Ra,
            rn.asQuarters = Na,
            rn.asYears = Va,
            rn.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
            }
            ,
            rn._bubble = function() {
                var e, t, a, n, i, r = this._milliseconds, s = this._days, o = this._months, d = this._data;
                return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * ja(Oa(o) + s),
                s = 0,
                o = 0),
                d.milliseconds = r % 1e3,
                e = Y(r / 1e3),
                d.seconds = e % 60,
                t = Y(e / 60),
                d.minutes = t % 60,
                a = Y(t / 60),
                d.hours = a % 24,
                s += Y(a / 24),
                i = Y(Pa(s)),
                o += i,
                s -= ja(Oa(i)),
                n = Y(o / 12),
                o %= 12,
                d.days = s,
                d.months = o,
                d.years = n,
                this
            }
            ,
            rn.clone = function() {
                return $t(this)
            }
            ,
            rn.get = function(e) {
                return e = F(e),
                this.isValid() ? this[e + "s"]() : NaN
            }
            ,
            rn.milliseconds = Ja,
            rn.seconds = Ua,
            rn.minutes = Ga,
            rn.hours = qa,
            rn.days = Ka,
            rn.weeks = function() {
                return Y(this.days() / 7)
            }
            ,
            rn.months = $a,
            rn.years = Za,
            rn.humanize = function(e) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var t = this.localeData()
                  , a = function(e, t, a) {
                    var n = $t(e).abs()
                      , i = Qa(n.as("s"))
                      , r = Qa(n.as("m"))
                      , s = Qa(n.as("h"))
                      , o = Qa(n.as("d"))
                      , d = Qa(n.as("M"))
                      , l = Qa(n.as("y"))
                      , u = i <= Xa.ss && ["s", i] || i < Xa.s && ["ss", i] || r <= 1 && ["m"] || r < Xa.m && ["mm", r] || s <= 1 && ["h"] || s < Xa.h && ["hh", s] || o <= 1 && ["d"] || o < Xa.d && ["dd", o] || d <= 1 && ["M"] || d < Xa.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                    return u[2] = t,
                    u[3] = +e > 0,
                    u[4] = a,
                    en.apply(null, u)
                }(this, !e, t);
                return e && (a = t.pastFuture(+this, a)),
                t.postformat(a)
            }
            ,
            rn.toISOString = nn,
            rn.toString = nn,
            rn.toJSON = nn,
            rn.locale = ia,
            rn.localeData = sa,
            rn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", nn),
            rn.lang = ra,
            B("X", 0, 0, "unix"),
            B("x", 0, 0, "valueOf"),
            ue("x", re),
            ue("X", /[+-]?\d+(\.\d{1,3})?/),
            ce("X", (function(e, t, a) {
                a._d = new Date(1e3 * parseFloat(e, 10))
            }
            )),
            ce("x", (function(e, t, a) {
                a._d = new Date(k(e))
            }
            )),
            i.version = "2.24.0",
            t = At,
            i.fn = ka,
            i.min = function() {
                return Ct("isBefore", [].slice.call(arguments, 0))
            }
            ,
            i.max = function() {
                return Ct("isAfter", [].slice.call(arguments, 0))
            }
            ,
            i.now = function() {
                return Date.now ? Date.now() : +new Date
            }
            ,
            i.utc = h,
            i.unix = function(e) {
                return At(1e3 * e)
            }
            ,
            i.months = function(e, t) {
                return xa(e, t, "months")
            }
            ,
            i.isDate = l,
            i.locale = ct,
            i.invalid = M,
            i.duration = $t,
            i.isMoment = v,
            i.weekdays = function(e, t, a) {
                return Ta(e, t, a, "weekdays")
            }
            ,
            i.parseZone = function() {
                return At.apply(null, arguments).parseZone()
            }
            ,
            i.localeData = Mt,
            i.isDuration = It,
            i.monthsShort = function(e, t) {
                return xa(e, t, "monthsShort")
            }
            ,
            i.weekdaysMin = function(e, t, a) {
                return Ta(e, t, a, "weekdaysMin")
            }
            ,
            i.defineLocale = ft,
            i.updateLocale = function(e, t) {
                if (null != t) {
                    var a, n, i = lt;
                    null != (n = ht(e)) && (i = n._config),
                    t = j(i, t),
                    (a = new P(t)).parentLocale = ut[e],
                    ut[e] = a,
                    ct(e)
                } else
                    null != ut[e] && (null != ut[e].parentLocale ? ut[e] = ut[e].parentLocale : null != ut[e] && delete ut[e]);
                return ut[e]
            }
            ,
            i.locales = function() {
                return x(ut)
            }
            ,
            i.weekdaysShort = function(e, t, a) {
                return Ta(e, t, a, "weekdaysShort")
            }
            ,
            i.normalizeUnits = F,
            i.relativeTimeRounding = function(e) {
                return void 0 === e ? Qa : "function" == typeof e && (Qa = e,
                !0)
            }
            ,
            i.relativeTimeThreshold = function(e, t) {
                return void 0 !== Xa[e] && (void 0 === t ? Xa[e] : (Xa[e] = t,
                "s" === e && (Xa.ss = t - 1),
                !0))
            }
            ,
            i.calendarFormat = function(e, t) {
                var a = e.diff(t, "days", !0);
                return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
            }
            ,
            i.prototype = ka,
            i.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            },
            i
        }()
    }
    ).call(this, a(136)(e))
}
, function(e, t, a) {
    /*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
    e.exports = function(e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
          , a = function(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }((function(e) {
            var a = {};
            for (var n in t)
                t.hasOwnProperty(n) && (a[t[n]] = n);
            var i = e.exports = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            for (var r in i)
                if (i.hasOwnProperty(r)) {
                    if (!("channels"in i[r]))
                        throw new Error("missing channels property: " + r);
                    if (!("labels"in i[r]))
                        throw new Error("missing channel labels property: " + r);
                    if (i[r].labels.length !== i[r].channels)
                        throw new Error("channel and label counts mismatch: " + r);
                    var s = i[r].channels
                      , o = i[r].labels;
                    delete i[r].channels,
                    delete i[r].labels,
                    Object.defineProperty(i[r], "channels", {
                        value: s
                    }),
                    Object.defineProperty(i[r], "labels", {
                        value: o
                    })
                }
            i.rgb.hsl = function(e) {
                var t, a, n = e[0] / 255, i = e[1] / 255, r = e[2] / 255, s = Math.min(n, i, r), o = Math.max(n, i, r), d = o - s;
                return o === s ? t = 0 : n === o ? t = (i - r) / d : i === o ? t = 2 + (r - n) / d : r === o && (t = 4 + (n - i) / d),
                (t = Math.min(60 * t, 360)) < 0 && (t += 360),
                a = (s + o) / 2,
                [t, 100 * (o === s ? 0 : a <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
            }
            ,
            i.rgb.hsv = function(e) {
                var t, a, n, i, r, s = e[0] / 255, o = e[1] / 255, d = e[2] / 255, l = Math.max(s, o, d), u = l - Math.min(s, o, d), _ = function(e) {
                    return (l - e) / 6 / u + .5
                };
                return 0 === u ? i = r = 0 : (r = u / l,
                t = _(s),
                a = _(o),
                n = _(d),
                s === l ? i = n - a : o === l ? i = 1 / 3 + t - n : d === l && (i = 2 / 3 + a - t),
                i < 0 ? i += 1 : i > 1 && (i -= 1)),
                [360 * i, 100 * r, 100 * l]
            }
            ,
            i.rgb.hwb = function(e) {
                var t = e[0]
                  , a = e[1]
                  , n = e[2];
                return [i.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(a, n)) * 100, 100 * (n = 1 - 1 / 255 * Math.max(t, Math.max(a, n)))]
            }
            ,
            i.rgb.cmyk = function(e) {
                var t, a = e[0] / 255, n = e[1] / 255, i = e[2] / 255;
                return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - i))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
            }
            ,
            i.rgb.keyword = function(e) {
                var n = a[e];
                if (n)
                    return n;
                var i, r, s, o = 1 / 0;
                for (var d in t)
                    if (t.hasOwnProperty(d)) {
                        var l = t[d]
                          , u = (r = e,
                        s = l,
                        Math.pow(r[0] - s[0], 2) + Math.pow(r[1] - s[1], 2) + Math.pow(r[2] - s[2], 2));
                        u < o && (o = u,
                        i = d)
                    }
                return i
            }
            ,
            i.keyword.rgb = function(e) {
                return t[e]
            }
            ,
            i.rgb.xyz = function(e) {
                var t = e[0] / 255
                  , a = e[1] / 255
                  , n = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
            }
            ,
            i.rgb.lab = function(e) {
                var t = i.rgb.xyz(e)
                  , a = t[0]
                  , n = t[1]
                  , r = t[2];
                return n /= 100,
                r /= 108.883,
                a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116,
                [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
            }
            ,
            i.hsl.rgb = function(e) {
                var t, a, n, i, r, s = e[0] / 360, o = e[1] / 100, d = e[2] / 100;
                if (0 === o)
                    return [r = 255 * d, r, r];
                t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o),
                i = [0, 0, 0];
                for (var l = 0; l < 3; l++)
                    (n = s + 1 / 3 * -(l - 1)) < 0 && n++,
                    n > 1 && n--,
                    r = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t,
                    i[l] = 255 * r;
                return i
            }
            ,
            i.hsl.hsv = function(e) {
                var t = e[0]
                  , a = e[1] / 100
                  , n = e[2] / 100
                  , i = a
                  , r = Math.max(n, .01);
                return a *= (n *= 2) <= 1 ? n : 2 - n,
                i *= r <= 1 ? r : 2 - r,
                [t, 100 * (0 === n ? 2 * i / (r + i) : 2 * a / (n + a)), (n + a) / 2 * 100]
            }
            ,
            i.hsv.rgb = function(e) {
                var t = e[0] / 60
                  , a = e[1] / 100
                  , n = e[2] / 100
                  , i = Math.floor(t) % 6
                  , r = t - Math.floor(t)
                  , s = 255 * n * (1 - a)
                  , o = 255 * n * (1 - a * r)
                  , d = 255 * n * (1 - a * (1 - r));
                switch (n *= 255,
                i) {
                case 0:
                    return [n, d, s];
                case 1:
                    return [o, n, s];
                case 2:
                    return [s, n, d];
                case 3:
                    return [s, o, n];
                case 4:
                    return [d, s, n];
                case 5:
                    return [n, s, o]
                }
            }
            ,
            i.hsv.hsl = function(e) {
                var t, a, n, i = e[0], r = e[1] / 100, s = e[2] / 100, o = Math.max(s, .01);
                return n = (2 - r) * s,
                a = r * o,
                [i, 100 * (a = (a /= (t = (2 - r) * o) <= 1 ? t : 2 - t) || 0), 100 * (n /= 2)]
            }
            ,
            i.hwb.rgb = function(e) {
                var t, a, n, i, r, s, o, d = e[0] / 360, l = e[1] / 100, u = e[2] / 100, _ = l + u;
                switch (_ > 1 && (l /= _,
                u /= _),
                n = 6 * d - (t = Math.floor(6 * d)),
                0 != (1 & t) && (n = 1 - n),
                i = l + n * ((a = 1 - u) - l),
                t) {
                default:
                case 6:
                case 0:
                    r = a,
                    s = i,
                    o = l;
                    break;
                case 1:
                    r = i,
                    s = a,
                    o = l;
                    break;
                case 2:
                    r = l,
                    s = a,
                    o = i;
                    break;
                case 3:
                    r = l,
                    s = i,
                    o = a;
                    break;
                case 4:
                    r = i,
                    s = l,
                    o = a;
                    break;
                case 5:
                    r = a,
                    s = l,
                    o = i
                }
                return [255 * r, 255 * s, 255 * o]
            }
            ,
            i.cmyk.rgb = function(e) {
                var t = e[0] / 100
                  , a = e[1] / 100
                  , n = e[2] / 100
                  , i = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, a * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))]
            }
            ,
            i.xyz.rgb = function(e) {
                var t, a, n, i = e[0] / 100, r = e[1] / 100, s = e[2] / 100;
                return a = -.9689 * i + 1.8758 * r + .0415 * s,
                n = .0557 * i + -.204 * r + 1.057 * s,
                t = (t = 3.2406 * i + -1.5372 * r + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t,
                a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a,
                n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n,
                [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }
            ,
            i.xyz.lab = function(e) {
                var t = e[0]
                  , a = e[1]
                  , n = e[2];
                return a /= 100,
                n /= 108.883,
                t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116,
                [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }
            ,
            i.lab.xyz = function(e) {
                var t, a, n, i = e[0];
                t = e[1] / 500 + (a = (i + 16) / 116),
                n = a - e[2] / 200;
                var r = Math.pow(a, 3)
                  , s = Math.pow(t, 3)
                  , o = Math.pow(n, 3);
                return a = r > .008856 ? r : (a - 16 / 116) / 7.787,
                t = s > .008856 ? s : (t - 16 / 116) / 7.787,
                n = o > .008856 ? o : (n - 16 / 116) / 7.787,
                [t *= 95.047, a *= 100, n *= 108.883]
            }
            ,
            i.lab.lch = function(e) {
                var t, a = e[0], n = e[1], i = e[2];
                return (t = 360 * Math.atan2(i, n) / 2 / Math.PI) < 0 && (t += 360),
                [a, Math.sqrt(n * n + i * i), t]
            }
            ,
            i.lch.lab = function(e) {
                var t, a = e[0], n = e[1];
                return t = e[2] / 360 * 2 * Math.PI,
                [a, n * Math.cos(t), n * Math.sin(t)]
            }
            ,
            i.rgb.ansi16 = function(e) {
                var t = e[0]
                  , a = e[1]
                  , n = e[2]
                  , r = 1 in arguments ? arguments[1] : i.rgb.hsv(e)[2];
                if (0 === (r = Math.round(r / 50)))
                    return 30;
                var s = 30 + (Math.round(n / 255) << 2 | Math.round(a / 255) << 1 | Math.round(t / 255));
                return 2 === r && (s += 60),
                s
            }
            ,
            i.hsv.ansi16 = function(e) {
                return i.rgb.ansi16(i.hsv.rgb(e), e[2])
            }
            ,
            i.rgb.ansi256 = function(e) {
                var t = e[0]
                  , a = e[1]
                  , n = e[2];
                return t === a && a === n ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(n / 255 * 5)
            }
            ,
            i.ansi16.rgb = function(e) {
                var t = e % 10;
                if (0 === t || 7 === t)
                    return e > 50 && (t += 3.5),
                    [t = t / 10.5 * 255, t, t];
                var a = .5 * (1 + ~~(e > 50));
                return [(1 & t) * a * 255, (t >> 1 & 1) * a * 255, (t >> 2 & 1) * a * 255]
            }
            ,
            i.ansi256.rgb = function(e) {
                if (e >= 232) {
                    var t = 10 * (e - 232) + 8;
                    return [t, t, t]
                }
                var a;
                return e -= 16,
                [Math.floor(e / 36) / 5 * 255, Math.floor((a = e % 36) / 6) / 5 * 255, a % 6 / 5 * 255]
            }
            ,
            i.rgb.hex = function(e) {
                var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
                return "000000".substring(t.length) + t
            }
            ,
            i.hex.rgb = function(e) {
                var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t)
                    return [0, 0, 0];
                var a = t[0];
                3 === t[0].length && (a = a.split("").map((function(e) {
                    return e + e
                }
                )).join(""));
                var n = parseInt(a, 16);
                return [n >> 16 & 255, n >> 8 & 255, 255 & n]
            }
            ,
            i.rgb.hcg = function(e) {
                var t, a = e[0] / 255, n = e[1] / 255, i = e[2] / 255, r = Math.max(Math.max(a, n), i), s = Math.min(Math.min(a, n), i), o = r - s;
                return t = o <= 0 ? 0 : r === a ? (n - i) / o % 6 : r === n ? 2 + (i - a) / o : 4 + (a - n) / o + 4,
                t /= 6,
                [360 * (t %= 1), 100 * o, 100 * (o < 1 ? s / (1 - o) : 0)]
            }
            ,
            i.hsl.hcg = function(e) {
                var t = e[1] / 100
                  , a = e[2] / 100
                  , n = 1
                  , i = 0;
                return (n = a < .5 ? 2 * t * a : 2 * t * (1 - a)) < 1 && (i = (a - .5 * n) / (1 - n)),
                [e[0], 100 * n, 100 * i]
            }
            ,
            i.hsv.hcg = function(e) {
                var t = e[1] / 100
                  , a = e[2] / 100
                  , n = t * a
                  , i = 0;
                return n < 1 && (i = (a - n) / (1 - n)),
                [e[0], 100 * n, 100 * i]
            }
            ,
            i.hcg.rgb = function(e) {
                var t = e[0] / 360
                  , a = e[1] / 100
                  , n = e[2] / 100;
                if (0 === a)
                    return [255 * n, 255 * n, 255 * n];
                var i, r = [0, 0, 0], s = t % 1 * 6, o = s % 1, d = 1 - o;
                switch (Math.floor(s)) {
                case 0:
                    r[0] = 1,
                    r[1] = o,
                    r[2] = 0;
                    break;
                case 1:
                    r[0] = d,
                    r[1] = 1,
                    r[2] = 0;
                    break;
                case 2:
                    r[0] = 0,
                    r[1] = 1,
                    r[2] = o;
                    break;
                case 3:
                    r[0] = 0,
                    r[1] = d,
                    r[2] = 1;
                    break;
                case 4:
                    r[0] = o,
                    r[1] = 0,
                    r[2] = 1;
                    break;
                default:
                    r[0] = 1,
                    r[1] = 0,
                    r[2] = d
                }
                return i = (1 - a) * n,
                [255 * (a * r[0] + i), 255 * (a * r[1] + i), 255 * (a * r[2] + i)]
            }
            ,
            i.hcg.hsv = function(e) {
                var t = e[1] / 100
                  , a = t + e[2] / 100 * (1 - t)
                  , n = 0;
                return a > 0 && (n = t / a),
                [e[0], 100 * n, 100 * a]
            }
            ,
            i.hcg.hsl = function(e) {
                var t = e[1] / 100
                  , a = e[2] / 100 * (1 - t) + .5 * t
                  , n = 0;
                return a > 0 && a < .5 ? n = t / (2 * a) : a >= .5 && a < 1 && (n = t / (2 * (1 - a))),
                [e[0], 100 * n, 100 * a]
            }
            ,
            i.hcg.hwb = function(e) {
                var t = e[1] / 100
                  , a = t + e[2] / 100 * (1 - t);
                return [e[0], 100 * (a - t), 100 * (1 - a)]
            }
            ,
            i.hwb.hcg = function(e) {
                var t = e[1] / 100
                  , a = 1 - e[2] / 100
                  , n = a - t
                  , i = 0;
                return n < 1 && (i = (a - n) / (1 - n)),
                [e[0], 100 * n, 100 * i]
            }
            ,
            i.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }
            ,
            i.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }
            ,
            i.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }
            ,
            i.gray.hsl = i.gray.hsv = function(e) {
                return [0, 0, e[0]]
            }
            ,
            i.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }
            ,
            i.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }
            ,
            i.gray.lab = function(e) {
                return [e[0], 0, 0]
            }
            ,
            i.gray.hex = function(e) {
                var t = 255 & Math.round(e[0] / 100 * 255)
                  , a = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(a.length) + a
            }
            ,
            i.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            }
        }
        ));
        function n(e) {
            var t = function() {
                for (var e = {}, t = Object.keys(a), n = t.length, i = 0; i < n; i++)
                    e[t[i]] = {
                        distance: -1,
                        parent: null
                    };
                return e
            }()
              , n = [e];
            for (t[e].distance = 0; n.length; )
                for (var i = n.pop(), r = Object.keys(a[i]), s = r.length, o = 0; o < s; o++) {
                    var d = r[o]
                      , l = t[d];
                    -1 === l.distance && (l.distance = t[i].distance + 1,
                    l.parent = i,
                    n.unshift(d))
                }
            return t
        }
        function i(e, t) {
            return function(a) {
                return t(e(a))
            }
        }
        function r(e, t) {
            for (var n = [t[e].parent, e], r = a[t[e].parent][e], s = t[e].parent; t[s].parent; )
                n.unshift(t[s].parent),
                r = i(a[t[s].parent][s], r),
                s = t[s].parent;
            return r.conversion = n,
            r
        }
        a.rgb,
        a.hsl,
        a.hsv,
        a.hwb,
        a.cmyk,
        a.xyz,
        a.lab,
        a.lch,
        a.hex,
        a.keyword,
        a.ansi16,
        a.ansi256,
        a.hcg,
        a.apple,
        a.gray;
        var s = {};
        Object.keys(a).forEach((function(e) {
            s[e] = {},
            Object.defineProperty(s[e], "channels", {
                value: a[e].channels
            }),
            Object.defineProperty(s[e], "labels", {
                value: a[e].labels
            });
            var t = function(e) {
                for (var t = n(e), a = {}, i = Object.keys(t), s = i.length, o = 0; o < s; o++) {
                    var d = i[o];
                    null !== t[d].parent && (a[d] = r(d, t))
                }
                return a
            }(e);
            Object.keys(t).forEach((function(a) {
                var n = t[a];
                s[e][a] = function(e) {
                    var t = function(t) {
                        if (null == t)
                            return t;
                        arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                        var a = e(t);
                        if ("object" == typeof a)
                            for (var n = a.length, i = 0; i < n; i++)
                                a[i] = Math.round(a[i]);
                        return a
                    };
                    return "conversion"in e && (t.conversion = e.conversion),
                    t
                }(n),
                s[e][a].raw = function(e) {
                    var t = function(t) {
                        return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)),
                        e(t))
                    };
                    return "conversion"in e && (t.conversion = e.conversion),
                    t
                }(n)
            }
            ))
        }
        ));
        var o = s
          , d = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
          , l = {
            getRgba: u,
            getHsla: _,
            getRgb: function(e) {
                var t = u(e);
                return t && t.slice(0, 3)
            },
            getHsl: function(e) {
                var t = _(e);
                return t && t.slice(0, 3)
            },
            getHwb: m,
            getAlpha: function(e) {
                var t = u(e);
                return t ? t[3] : (t = _(e)) ? t[3] : (t = m(e)) ? t[3] : void 0
            },
            hexString: function(e, t) {
                return t = void 0 !== t && 3 === e.length ? t : e[3],
                "#" + p(e[0]) + p(e[1]) + p(e[2]) + (t >= 0 && t < 1 ? p(Math.round(255 * t)) : "")
            },
            rgbString: function(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? h(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
            },
            rgbaString: h,
            percentString: function(e, t) {
                if (t < 1 || e[3] && e[3] < 1)
                    return c(e, t);
                var a = Math.round(e[0] / 255 * 100)
                  , n = Math.round(e[1] / 255 * 100)
                  , i = Math.round(e[2] / 255 * 100);
                return "rgb(" + a + "%, " + n + "%, " + i + "%)"
            },
            percentaString: c,
            hslString: function(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? f(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            },
            hslaString: f,
            hwbString: function(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
                "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
            },
            keyword: function(e) {
                return g[e.slice(0, 3)]
            }
        };
        function u(e) {
            if (e) {
                var t = [0, 0, 0]
                  , a = 1
                  , n = e.match(/^#([a-fA-F0-9]{3,4})$/i)
                  , i = "";
                if (n) {
                    i = (n = n[1])[3];
                    for (var r = 0; r < t.length; r++)
                        t[r] = parseInt(n[r] + n[r], 16);
                    i && (a = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
                } else if (n = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                    for (i = n[2],
                    n = n[1],
                    r = 0; r < t.length; r++)
                        t[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
                    i && (a = Math.round(parseInt(i, 16) / 255 * 100) / 100)
                } else if (n = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++)
                        t[r] = parseInt(n[r + 1]);
                    a = parseFloat(n[4])
                } else if (n = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (r = 0; r < t.length; r++)
                        t[r] = Math.round(2.55 * parseFloat(n[r + 1]));
                    a = parseFloat(n[4])
                } else if (n = e.match(/(\w+)/)) {
                    if ("transparent" == n[1])
                        return [0, 0, 0, 0];
                    if (!(t = d[n[1]]))
                        return
                }
                for (r = 0; r < t.length; r++)
                    t[r] = M(t[r], 0, 255);
                return a = a || 0 == a ? M(a, 0, 1) : 1,
                t[3] = a,
                t
            }
        }
        function _(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [M(parseInt(t[1]), 0, 360), M(parseFloat(t[2]), 0, 100), M(parseFloat(t[3]), 0, 100), M(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }
        function m(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var a = parseFloat(t[4]);
                    return [M(parseInt(t[1]), 0, 360), M(parseFloat(t[2]), 0, 100), M(parseFloat(t[3]), 0, 100), M(isNaN(a) ? 1 : a, 0, 1)]
                }
            }
        }
        function h(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
        }
        function c(e, t) {
            return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
        }
        function f(e, t) {
            return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
        }
        function M(e, t, a) {
            return Math.min(Math.max(t, e), a)
        }
        function p(e) {
            var t = e.toString(16).toUpperCase();
            return t.length < 2 ? "0" + t : t
        }
        var g = {};
        for (var y in d)
            g[d[y]] = y;
        var L = function(e) {
            return e instanceof L ? e : this instanceof L ? (this.valid = !1,
            this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1
            },
            void ("string" == typeof e ? (t = l.getRgba(e)) ? this.setValues("rgb", t) : (t = l.getHsla(e)) ? this.setValues("hsl", t) : (t = l.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new L(e);
            var t
        };
        L.prototype = {
            isValid: function() {
                return this.valid
            },
            rgb: function() {
                return this.setSpace("rgb", arguments)
            },
            hsl: function() {
                return this.setSpace("hsl", arguments)
            },
            hsv: function() {
                return this.setSpace("hsv", arguments)
            },
            hwb: function() {
                return this.setSpace("hwb", arguments)
            },
            cmyk: function() {
                return this.setSpace("cmyk", arguments)
            },
            rgbArray: function() {
                return this.values.rgb
            },
            hslArray: function() {
                return this.values.hsl
            },
            hsvArray: function() {
                return this.values.hsv
            },
            hwbArray: function() {
                var e = this.values;
                return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
            },
            cmykArray: function() {
                return this.values.cmyk
            },
            rgbaArray: function() {
                var e = this.values;
                return e.rgb.concat([e.alpha])
            },
            hslaArray: function() {
                var e = this.values;
                return e.hsl.concat([e.alpha])
            },
            alpha: function(e) {
                return void 0 === e ? this.values.alpha : (this.setValues("alpha", e),
                this)
            },
            red: function(e) {
                return this.setChannel("rgb", 0, e)
            },
            green: function(e) {
                return this.setChannel("rgb", 1, e)
            },
            blue: function(e) {
                return this.setChannel("rgb", 2, e)
            },
            hue: function(e) {
                return e && (e = (e %= 360) < 0 ? 360 + e : e),
                this.setChannel("hsl", 0, e)
            },
            saturation: function(e) {
                return this.setChannel("hsl", 1, e)
            },
            lightness: function(e) {
                return this.setChannel("hsl", 2, e)
            },
            saturationv: function(e) {
                return this.setChannel("hsv", 1, e)
            },
            whiteness: function(e) {
                return this.setChannel("hwb", 1, e)
            },
            blackness: function(e) {
                return this.setChannel("hwb", 2, e)
            },
            value: function(e) {
                return this.setChannel("hsv", 2, e)
            },
            cyan: function(e) {
                return this.setChannel("cmyk", 0, e)
            },
            magenta: function(e) {
                return this.setChannel("cmyk", 1, e)
            },
            yellow: function(e) {
                return this.setChannel("cmyk", 2, e)
            },
            black: function(e) {
                return this.setChannel("cmyk", 3, e)
            },
            hexString: function() {
                return l.hexString(this.values.rgb)
            },
            rgbString: function() {
                return l.rgbString(this.values.rgb, this.values.alpha)
            },
            rgbaString: function() {
                return l.rgbaString(this.values.rgb, this.values.alpha)
            },
            percentString: function() {
                return l.percentString(this.values.rgb, this.values.alpha)
            },
            hslString: function() {
                return l.hslString(this.values.hsl, this.values.alpha)
            },
            hslaString: function() {
                return l.hslaString(this.values.hsl, this.values.alpha)
            },
            hwbString: function() {
                return l.hwbString(this.values.hwb, this.values.alpha)
            },
            keyword: function() {
                return l.keyword(this.values.rgb, this.values.alpha)
            },
            rgbNumber: function() {
                var e = this.values.rgb;
                return e[0] << 16 | e[1] << 8 | e[2]
            },
            luminosity: function() {
                for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
                    var n = e[a] / 255;
                    t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function(e) {
                var t = this.luminosity()
                  , a = e.luminosity();
                return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
            },
            level: function(e) {
                var t = this.contrast(e);
                return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
            },
            dark: function() {
                var e = this.values.rgb;
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
            },
            light: function() {
                return !this.dark()
            },
            negate: function() {
                for (var e = [], t = 0; t < 3; t++)
                    e[t] = 255 - this.values.rgb[t];
                return this.setValues("rgb", e),
                this
            },
            lighten: function(e) {
                var t = this.values.hsl;
                return t[2] += t[2] * e,
                this.setValues("hsl", t),
                this
            },
            darken: function(e) {
                var t = this.values.hsl;
                return t[2] -= t[2] * e,
                this.setValues("hsl", t),
                this
            },
            saturate: function(e) {
                var t = this.values.hsl;
                return t[1] += t[1] * e,
                this.setValues("hsl", t),
                this
            },
            desaturate: function(e) {
                var t = this.values.hsl;
                return t[1] -= t[1] * e,
                this.setValues("hsl", t),
                this
            },
            whiten: function(e) {
                var t = this.values.hwb;
                return t[1] += t[1] * e,
                this.setValues("hwb", t),
                this
            },
            blacken: function(e) {
                var t = this.values.hwb;
                return t[2] += t[2] * e,
                this.setValues("hwb", t),
                this
            },
            greyscale: function() {
                var e = this.values.rgb
                  , t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                return this.setValues("rgb", [t, t, t]),
                this
            },
            clearer: function(e) {
                var t = this.values.alpha;
                return this.setValues("alpha", t - t * e),
                this
            },
            opaquer: function(e) {
                var t = this.values.alpha;
                return this.setValues("alpha", t + t * e),
                this
            },
            rotate: function(e) {
                var t = this.values.hsl
                  , a = (t[0] + e) % 360;
                return t[0] = a < 0 ? 360 + a : a,
                this.setValues("hsl", t),
                this
            },
            mix: function(e, t) {
                var a = e
                  , n = void 0 === t ? .5 : t
                  , i = 2 * n - 1
                  , r = this.alpha() - a.alpha()
                  , s = ((i * r == -1 ? i : (i + r) / (1 + i * r)) + 1) / 2
                  , o = 1 - s;
                return this.rgb(s * this.red() + o * a.red(), s * this.green() + o * a.green(), s * this.blue() + o * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
            },
            toJSON: function() {
                return this.rgb()
            },
            clone: function() {
                var e, t, a = new L, n = this.values, i = a.values;
                for (var r in n)
                    n.hasOwnProperty(r) && (e = n[r],
                    "[object Array]" === (t = {}.toString.call(e)) ? i[r] = e.slice(0) : "[object Number]" === t ? i[r] = e : console.error("unexpected color value:", e));
                return a
            }
        },
        L.prototype.spaces = {
            rgb: ["red", "green", "blue"],
            hsl: ["hue", "saturation", "lightness"],
            hsv: ["hue", "saturation", "value"],
            hwb: ["hue", "whiteness", "blackness"],
            cmyk: ["cyan", "magenta", "yellow", "black"]
        },
        L.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100]
        },
        L.prototype.getValues = function(e) {
            for (var t = this.values, a = {}, n = 0; n < e.length; n++)
                a[e.charAt(n)] = t[e][n];
            return 1 !== t.alpha && (a.a = t.alpha),
            a
        }
        ,
        L.prototype.setValues = function(e, t) {
            var a, n, i = this.values, r = this.spaces, s = this.maxes, d = 1;
            if (this.valid = !0,
            "alpha" === e)
                d = t;
            else if (t.length)
                i[e] = t.slice(0, e.length),
                d = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (a = 0; a < e.length; a++)
                    i[e][a] = t[e.charAt(a)];
                d = t.a
            } else if (void 0 !== t[r[e][0]]) {
                var l = r[e];
                for (a = 0; a < e.length; a++)
                    i[e][a] = t[l[a]];
                d = t.alpha
            }
            if (i.alpha = Math.max(0, Math.min(1, void 0 === d ? i.alpha : d)),
            "alpha" === e)
                return !1;
            for (a = 0; a < e.length; a++)
                n = Math.max(0, Math.min(s[e][a], i[e][a])),
                i[e][a] = Math.round(n);
            for (var u in r)
                u !== e && (i[u] = o[e][u](i[e]));
            return !0
        }
        ,
        L.prototype.setSpace = function(e, t) {
            var a = t[0];
            return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)),
            this.setValues(e, a),
            this)
        }
        ,
        L.prototype.setChannel = function(e, t, a) {
            var n = this.values[e];
            return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a,
            this.setValues(e, n),
            this)
        }
        ,
        "undefined" != typeof window && (window.Color = L);
        var v, Y = L, k = {
            noop: function() {},
            uid: (v = 0,
            function() {
                return v++
            }
            ),
            isNullOrUndef: function(e) {
                return null == e
            },
            isArray: function(e) {
                if (Array.isArray && Array.isArray(e))
                    return !0;
                var t = Object.prototype.toString.call(e);
                return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
            },
            isObject: function(e) {
                return null !== e && "[object Object]" === Object.prototype.toString.call(e)
            },
            isFinite: function(e) {
                return ("number" == typeof e || e instanceof Number) && isFinite(e)
            },
            valueOrDefault: function(e, t) {
                return void 0 === e ? t : e
            },
            valueAtIndexOrDefault: function(e, t, a) {
                return k.valueOrDefault(k.isArray(e) ? e[t] : e, a)
            },
            callback: function(e, t, a) {
                if (e && "function" == typeof e.call)
                    return e.apply(a, t)
            },
            each: function(e, t, a, n) {
                var i, r, s;
                if (k.isArray(e))
                    if (r = e.length,
                    n)
                        for (i = r - 1; i >= 0; i--)
                            t.call(a, e[i], i);
                    else
                        for (i = 0; i < r; i++)
                            t.call(a, e[i], i);
                else if (k.isObject(e))
                    for (r = (s = Object.keys(e)).length,
                    i = 0; i < r; i++)
                        t.call(a, e[s[i]], s[i])
            },
            arrayEquals: function(e, t) {
                var a, n, i, r;
                if (!e || !t || e.length !== t.length)
                    return !1;
                for (a = 0,
                n = e.length; a < n; ++a)
                    if (i = e[a],
                    r = t[a],
                    i instanceof Array && r instanceof Array) {
                        if (!k.arrayEquals(i, r))
                            return !1
                    } else if (i !== r)
                        return !1;
                return !0
            },
            clone: function(e) {
                if (k.isArray(e))
                    return e.map(k.clone);
                if (k.isObject(e)) {
                    for (var t = {}, a = Object.keys(e), n = a.length, i = 0; i < n; ++i)
                        t[a[i]] = k.clone(e[a[i]]);
                    return t
                }
                return e
            },
            _merger: function(e, t, a, n) {
                var i = t[e]
                  , r = a[e];
                k.isObject(i) && k.isObject(r) ? k.merge(i, r, n) : t[e] = k.clone(r)
            },
            _mergerIf: function(e, t, a) {
                var n = t[e]
                  , i = a[e];
                k.isObject(n) && k.isObject(i) ? k.mergeIf(n, i) : t.hasOwnProperty(e) || (t[e] = k.clone(i))
            },
            merge: function(e, t, a) {
                var n, i, r, s, o, d = k.isArray(t) ? t : [t], l = d.length;
                if (!k.isObject(e))
                    return e;
                for (n = (a = a || {}).merger || k._merger,
                i = 0; i < l; ++i)
                    if (t = d[i],
                    k.isObject(t))
                        for (o = 0,
                        s = (r = Object.keys(t)).length; o < s; ++o)
                            n(r[o], e, t, a);
                return e
            },
            mergeIf: function(e, t) {
                return k.merge(e, t, {
                    merger: k._mergerIf
                })
            },
            extend: Object.assign || function(e) {
                return k.merge(e, [].slice.call(arguments, 1), {
                    merger: function(e, t, a) {
                        t[e] = a[e]
                    }
                })
            }
            ,
            inherits: function(e) {
                var t = this
                  , a = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                    return t.apply(this, arguments)
                }
                  , n = function() {
                    this.constructor = a
                };
                return n.prototype = t.prototype,
                a.prototype = new n,
                a.extend = k.inherits,
                e && k.extend(a.prototype, e),
                a.__super__ = t.prototype,
                a
            },
            _deprecated: function(e, t, a, n) {
                void 0 !== t && console.warn(e + ': "' + a + '" is deprecated. Please use "' + n + '" instead')
            }
        }, b = k;
        k.callCallback = k.callback,
        k.indexOf = function(e, t, a) {
            return Array.prototype.indexOf.call(e, t, a)
        }
        ,
        k.getValueOrDefault = k.valueOrDefault,
        k.getValueAtIndexOrDefault = k.valueAtIndexOrDefault;
        var D = {
            linear: function(e) {
                return e
            },
            easeInQuad: function(e) {
                return e * e
            },
            easeOutQuad: function(e) {
                return -e * (e - 2)
            },
            easeInOutQuad: function(e) {
                return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            },
            easeInCubic: function(e) {
                return e * e * e
            },
            easeOutCubic: function(e) {
                return (e -= 1) * e * e + 1
            },
            easeInOutCubic: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            },
            easeInQuart: function(e) {
                return e * e * e * e
            },
            easeOutQuart: function(e) {
                return -((e -= 1) * e * e * e - 1)
            },
            easeInOutQuart: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            },
            easeInQuint: function(e) {
                return e * e * e * e * e
            },
            easeOutQuint: function(e) {
                return (e -= 1) * e * e * e * e + 1
            },
            easeInOutQuint: function(e) {
                return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            },
            easeInSine: function(e) {
                return 1 - Math.cos(e * (Math.PI / 2))
            },
            easeOutSine: function(e) {
                return Math.sin(e * (Math.PI / 2))
            },
            easeInOutSine: function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            },
            easeInExpo: function(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            },
            easeOutExpo: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            easeInOutExpo: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
            },
            easeInCirc: function(e) {
                return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
            },
            easeOutCirc: function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            },
            easeInOutCirc: function(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            },
            easeInElastic: function(e) {
                var t = 1.70158
                  , a = 0
                  , n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3),
                n < 1 ? (n = 1,
                t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
                -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
            },
            easeOutElastic: function(e) {
                var t = 1.70158
                  , a = 0
                  , n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3),
                n < 1 ? (n = 1,
                t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
                n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
            },
            easeInOutElastic: function(e) {
                var t = 1.70158
                  , a = 0
                  , n = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .45),
                n < 1 ? (n = 1,
                t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n),
                e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
            },
            easeInBack: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            easeOutBack: function(e) {
                var t = 1.70158;
                return (e -= 1) * e * ((t + 1) * e + t) + 1
            },
            easeInOutBack: function(e) {
                var t = 1.70158;
                return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            },
            easeInBounce: function(e) {
                return 1 - D.easeOutBounce(1 - e)
            },
            easeOutBounce: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            easeInOutBounce: function(e) {
                return e < .5 ? .5 * D.easeInBounce(2 * e) : .5 * D.easeOutBounce(2 * e - 1) + .5
            }
        }
          , w = {
            effects: D
        };
        b.easingEffects = D;
        var x = Math.PI
          , T = x / 180
          , S = 2 * x
          , H = x / 2
          , j = x / 4
          , P = 2 * x / 3
          , O = {
            clear: function(e) {
                e.ctx.clearRect(0, 0, e.width, e.height)
            },
            roundedRect: function(e, t, a, n, i, r) {
                if (r) {
                    var s = Math.min(r, i / 2, n / 2)
                      , o = t + s
                      , d = a + s
                      , l = t + n - s
                      , u = a + i - s;
                    e.moveTo(t, d),
                    o < l && d < u ? (e.arc(o, d, s, -x, -H),
                    e.arc(l, d, s, -H, 0),
                    e.arc(l, u, s, 0, H),
                    e.arc(o, u, s, H, x)) : o < l ? (e.moveTo(o, a),
                    e.arc(l, d, s, -H, H),
                    e.arc(o, d, s, H, x + H)) : d < u ? (e.arc(o, d, s, -x, 0),
                    e.arc(o, u, s, 0, x)) : e.arc(o, d, s, -x, x),
                    e.closePath(),
                    e.moveTo(t, a)
                } else
                    e.rect(t, a, n, i)
            },
            drawPoint: function(e, t, a, n, i, r) {
                var s, o, d, l, u, _ = (r || 0) * T;
                if (t && "object" == typeof t && ("[object HTMLImageElement]" === (s = t.toString()) || "[object HTMLCanvasElement]" === s))
                    return e.save(),
                    e.translate(n, i),
                    e.rotate(_),
                    e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height),
                    void e.restore();
                if (!(isNaN(a) || a <= 0)) {
                    switch (e.beginPath(),
                    t) {
                    default:
                        e.arc(n, i, a, 0, S),
                        e.closePath();
                        break;
                    case "triangle":
                        e.moveTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        _ += P,
                        e.lineTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        _ += P,
                        e.lineTo(n + Math.sin(_) * a, i - Math.cos(_) * a),
                        e.closePath();
                        break;
                    case "rectRounded":
                        l = a - (u = .516 * a),
                        o = Math.cos(_ + j) * l,
                        d = Math.sin(_ + j) * l,
                        e.arc(n - o, i - d, u, _ - x, _ - H),
                        e.arc(n + d, i - o, u, _ - H, _),
                        e.arc(n + o, i + d, u, _, _ + H),
                        e.arc(n - d, i + o, u, _ + H, _ + x),
                        e.closePath();
                        break;
                    case "rect":
                        if (!r) {
                            l = Math.SQRT1_2 * a,
                            e.rect(n - l, i - l, 2 * l, 2 * l);
                            break
                        }
                        _ += j;
                    case "rectRot":
                        o = Math.cos(_) * a,
                        d = Math.sin(_) * a,
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + d, i - o),
                        e.lineTo(n + o, i + d),
                        e.lineTo(n - d, i + o),
                        e.closePath();
                        break;
                    case "crossRot":
                        _ += j;
                    case "cross":
                        o = Math.cos(_) * a,
                        d = Math.sin(_) * a,
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o);
                        break;
                    case "star":
                        o = Math.cos(_) * a,
                        d = Math.sin(_) * a,
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o),
                        _ += j,
                        o = Math.cos(_) * a,
                        d = Math.sin(_) * a,
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d),
                        e.moveTo(n + d, i - o),
                        e.lineTo(n - d, i + o);
                        break;
                    case "line":
                        o = Math.cos(_) * a,
                        d = Math.sin(_) * a,
                        e.moveTo(n - o, i - d),
                        e.lineTo(n + o, i + d);
                        break;
                    case "dash":
                        e.moveTo(n, i),
                        e.lineTo(n + Math.cos(_) * a, i + Math.sin(_) * a)
                    }
                    e.fill(),
                    e.stroke()
                }
            },
            _isPointInArea: function(e, t) {
                return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6
            },
            clipArea: function(e, t) {
                e.save(),
                e.beginPath(),
                e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
                e.clip()
            },
            unclipArea: function(e) {
                e.restore()
            },
            lineTo: function(e, t, a, n) {
                var i = a.steppedLine;
                if (i) {
                    if ("middle" === i) {
                        var r = (t.x + a.x) / 2;
                        e.lineTo(r, n ? a.y : t.y),
                        e.lineTo(r, n ? t.y : a.y)
                    } else
                        "after" === i && !n || "after" !== i && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y);
                    e.lineTo(a.x, a.y)
                } else
                    a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
            }
        }
          , A = O;
        b.clear = O.clear,
        b.drawRoundedRectangle = function(e) {
            e.beginPath(),
            O.roundedRect.apply(O, arguments)
        }
        ;
        var F = {
            _set: function(e, t) {
                return b.merge(this[e] || (this[e] = {}), t)
            }
        };
        F._set("global", {
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            defaultLineHeight: 1.2,
            showLines: !0
        });
        var W = F
          , C = b.valueOrDefault
          , E = {
            toLineHeight: function(e, t) {
                var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!a || "normal" === a[1])
                    return 1.2 * t;
                switch (e = +a[2],
                a[3]) {
                case "px":
                    return e;
                case "%":
                    e /= 100
                }
                return t * e
            },
            toPadding: function(e) {
                var t, a, n, i;
                return b.isObject(e) ? (t = +e.top || 0,
                a = +e.right || 0,
                n = +e.bottom || 0,
                i = +e.left || 0) : t = a = n = i = +e || 0,
                {
                    top: t,
                    right: a,
                    bottom: n,
                    left: i,
                    height: t + n,
                    width: i + a
                }
            },
            _parseFont: function(e) {
                var t = W.global
                  , a = C(e.fontSize, t.defaultFontSize)
                  , n = {
                    family: C(e.fontFamily, t.defaultFontFamily),
                    lineHeight: b.options.toLineHeight(C(e.lineHeight, t.defaultLineHeight), a),
                    size: a,
                    style: C(e.fontStyle, t.defaultFontStyle),
                    weight: null,
                    string: ""
                };
                return n.string = function(e) {
                    return !e || b.isNullOrUndef(e.size) || b.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
                }(n),
                n
            },
            resolve: function(e, t, a, n) {
                var i, r, s, o = !0;
                for (i = 0,
                r = e.length; i < r; ++i)
                    if (void 0 !== (s = e[i]) && (void 0 !== t && "function" == typeof s && (s = s(t),
                    o = !1),
                    void 0 !== a && b.isArray(s) && (s = s[a],
                    o = !1),
                    void 0 !== s))
                        return n && !o && (n.cacheable = !1),
                        s
            }
        }
          , z = {
            _factorize: function(e) {
                var t, a = [], n = Math.sqrt(e);
                for (t = 1; t < n; t++)
                    e % t == 0 && (a.push(t),
                    a.push(e / t));
                return n === (0 | n) && a.push(n),
                a.sort((function(e, t) {
                    return e - t
                }
                )).pop(),
                a
            },
            log10: Math.log10 || function(e) {
                var t = Math.log(e) * Math.LOG10E
                  , a = Math.round(t);
                return e === Math.pow(10, a) ? a : t
            }
        }
          , I = z;
        b.log10 = z.log10;
        var R = b
          , N = w
          , V = A
          , B = E
          , J = I
          , U = {
            getRtlAdapter: function(e, t, a) {
                return e ? function(e, t) {
                    return {
                        x: function(a) {
                            return e + e + t - a
                        },
                        setWidth: function(e) {
                            t = e
                        },
                        textAlign: function(e) {
                            return "center" === e ? e : "right" === e ? "left" : "right"
                        },
                        xPlus: function(e, t) {
                            return e - t
                        },
                        leftForLtr: function(e, t) {
                            return e - t
                        }
                    }
                }(t, a) : {
                    x: function(e) {
                        return e
                    },
                    setWidth: function(e) {},
                    textAlign: function(e) {
                        return e
                    },
                    xPlus: function(e, t) {
                        return e + t
                    },
                    leftForLtr: function(e, t) {
                        return e
                    }
                }
            },
            overrideTextDirection: function(e, t) {
                var a, n;
                "ltr" !== t && "rtl" !== t || (n = [(a = e.canvas.style).getPropertyValue("direction"), a.getPropertyPriority("direction")],
                a.setProperty("direction", t, "important"),
                e.prevTextDirection = n)
            },
            restoreTextDirection: function(e) {
                var t = e.prevTextDirection;
                void 0 !== t && (delete e.prevTextDirection,
                e.canvas.style.setProperty("direction", t[0], t[1]))
            }
        };
        R.easing = N,
        R.canvas = V,
        R.options = B,
        R.math = J,
        R.rtl = U;
        var G = function(e) {
            R.extend(this, e),
            this.initialize.apply(this, arguments)
        };
        R.extend(G.prototype, {
            _type: void 0,
            initialize: function() {
                this.hidden = !1
            },
            pivot: function() {
                var e = this;
                return e._view || (e._view = R.extend({}, e._model)),
                e._start = {},
                e
            },
            transition: function(e) {
                var t = this
                  , a = t._model
                  , n = t._start
                  , i = t._view;
                return a && 1 !== e ? (i || (i = t._view = {}),
                n || (n = t._start = {}),
                function(e, t, a, n) {
                    var i, r, s, o, d, l, u, _, m, h = Object.keys(a);
                    for (i = 0,
                    r = h.length; i < r; ++i)
                        if (l = a[s = h[i]],
                        t.hasOwnProperty(s) || (t[s] = l),
                        (o = t[s]) !== l && "_" !== s[0]) {
                            if (e.hasOwnProperty(s) || (e[s] = o),
                            (u = typeof l) == typeof (d = e[s]))
                                if ("string" === u) {
                                    if ((_ = Y(d)).valid && (m = Y(l)).valid) {
                                        t[s] = m.mix(_, n).rgbString();
                                        continue
                                    }
                                } else if (R.isFinite(d) && R.isFinite(l)) {
                                    t[s] = d + (l - d) * n;
                                    continue
                                }
                            t[s] = l
                        }
                }(n, i, a, e),
                t) : (t._view = R.extend({}, a),
                t._start = null,
                t)
            },
            tooltipPosition: function() {
                return {
                    x: this._model.x,
                    y: this._model.y
                }
            },
            hasValue: function() {
                return R.isNumber(this._model.x) && R.isNumber(this._model.y)
            }
        }),
        G.extend = R.inherits;
        var q = G
          , K = q.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        })
          , $ = K;
        Object.defineProperty(K.prototype, "animationObject", {
            get: function() {
                return this
            }
        }),
        Object.defineProperty(K.prototype, "chartInstance", {
            get: function() {
                return this.chart
            },
            set: function(e) {
                this.chart = e
            }
        }),
        W._set("global", {
            animation: {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: R.noop,
                onComplete: R.noop
            }
        });
        var Z = {
            animations: [],
            request: null,
            addAnimation: function(e, t, a, n) {
                var i, r, s = this.animations;
                for (t.chart = e,
                t.startTime = Date.now(),
                t.duration = a,
                n || (e.animating = !0),
                i = 0,
                r = s.length; i < r; ++i)
                    if (s[i].chart === e)
                        return void (s[i] = t);
                s.push(t),
                1 === s.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(e) {
                var t = R.findIndex(this.animations, (function(t) {
                    return t.chart === e
                }
                ));
                -1 !== t && (this.animations.splice(t, 1),
                e.animating = !1)
            },
            requestAnimationFrame: function() {
                var e = this;
                null === e.request && (e.request = R.requestAnimFrame.call(window, (function() {
                    e.request = null,
                    e.startDigest()
                }
                )))
            },
            startDigest: function() {
                this.advance(),
                this.animations.length > 0 && this.requestAnimationFrame()
            },
            advance: function() {
                for (var e, t, a, n, i = this.animations, r = 0; r < i.length; )
                    t = (e = i[r]).chart,
                    a = e.numSteps,
                    n = Math.floor((Date.now() - e.startTime) / e.duration * a) + 1,
                    e.currentStep = Math.min(n, a),
                    R.callback(e.render, [t, e], t),
                    R.callback(e.onAnimationProgress, [e], t),
                    e.currentStep >= a ? (R.callback(e.onAnimationComplete, [e], t),
                    t.animating = !1,
                    i.splice(r, 1)) : ++r
            }
        }
          , Q = R.options.resolve
          , X = ["push", "pop", "shift", "splice", "unshift"];
        function ee(e, t) {
            var a = e._chartjs;
            if (a) {
                var n = a.listeners
                  , i = n.indexOf(t);
                -1 !== i && n.splice(i, 1),
                n.length > 0 || (X.forEach((function(t) {
                    delete e[t]
                }
                )),
                delete e._chartjs)
            }
        }
        var te = function(e, t) {
            this.initialize(e, t)
        };
        R.extend(te.prototype, {
            datasetElementType: null,
            dataElementType: null,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
            initialize: function(e, t) {
                var a = this;
                a.chart = e,
                a.index = t,
                a.linkScales(),
                a.addElements(),
                a._type = a.getMeta().type
            },
            updateIndex: function(e) {
                this.index = e
            },
            linkScales: function() {
                var e = this.getMeta()
                  , t = this.chart
                  , a = t.scales
                  , n = this.getDataset()
                  , i = t.options.scales;
                null !== e.xAxisID && e.xAxisID in a && !n.xAxisID || (e.xAxisID = n.xAxisID || i.xAxes[0].id),
                null !== e.yAxisID && e.yAxisID in a && !n.yAxisID || (e.yAxisID = n.yAxisID || i.yAxes[0].id)
            },
            getDataset: function() {
                return this.chart.data.datasets[this.index]
            },
            getMeta: function() {
                return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function(e) {
                return this.chart.scales[e]
            },
            _getValueScaleId: function() {
                return this.getMeta().yAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getValueScale: function() {
                return this.getScaleForId(this._getValueScaleId())
            },
            _getIndexScale: function() {
                return this.getScaleForId(this._getIndexScaleId())
            },
            reset: function() {
                this._update(!0)
            },
            destroy: function() {
                this._data && ee(this._data, this)
            },
            createMetaDataset: function() {
                var e = this.datasetElementType;
                return e && new e({
                    _chart: this.chart,
                    _datasetIndex: this.index
                })
            },
            createMetaData: function(e) {
                var t = this.dataElementType;
                return t && new t({
                    _chart: this.chart,
                    _datasetIndex: this.index,
                    _index: e
                })
            },
            addElements: function() {
                var e, t, a = this.getMeta(), n = this.getDataset().data || [], i = a.data;
                for (e = 0,
                t = n.length; e < t; ++e)
                    i[e] = i[e] || this.createMetaData(e);
                a.dataset = a.dataset || this.createMetaDataset()
            },
            addElementAndReset: function(e) {
                var t = this.createMetaData(e);
                this.getMeta().data.splice(e, 0, t),
                this.updateElement(t, e, !0)
            },
            buildOrUpdateElements: function() {
                var e, t, a = this, n = a.getDataset(), i = n.data || (n.data = []);
                a._data !== i && (a._data && ee(a._data, a),
                i && Object.isExtensible(i) && (t = a,
                (e = i)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [t]
                    }
                }),
                X.forEach((function(t) {
                    var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1)
                      , n = e[t];
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var t = Array.prototype.slice.call(arguments)
                              , i = n.apply(this, t);
                            return R.each(e._chartjs.listeners, (function(e) {
                                "function" == typeof e[a] && e[a].apply(e, t)
                            }
                            )),
                            i
                        }
                    })
                }
                )))),
                a._data = i),
                a.resyncElements()
            },
            _configure: function() {
                this._config = R.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                    merger: function(e, t, a) {
                        "_meta" !== e && "data" !== e && R._merger(e, t, a)
                    }
                })
            },
            _update: function(e) {
                this._configure(),
                this._cachedDataOpts = null,
                this.update(e)
            },
            update: R.noop,
            transition: function(e) {
                for (var t = this.getMeta(), a = t.data || [], n = a.length, i = 0; i < n; ++i)
                    a[i].transition(e);
                t.dataset && t.dataset.transition(e)
            },
            draw: function() {
                var e = this.getMeta()
                  , t = e.data || []
                  , a = t.length
                  , n = 0;
                for (e.dataset && e.dataset.draw(); n < a; ++n)
                    t[n].draw()
            },
            getStyle: function(e) {
                var t, a = this.getMeta(), n = a.dataset;
                return this._configure(),
                n && void 0 === e ? t = this._resolveDatasetElementOptions(n || {}) : (e = e || 0,
                t = this._resolveDataElementOptions(a.data[e] || {}, e)),
                !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor),
                t
            },
            _resolveDatasetElementOptions: function(e, t) {
                var a, n, i, r, s = this, o = s.chart, d = s._config, l = e.custom || {}, u = o.options.elements[s.datasetElementType.prototype._type] || {}, _ = s._datasetElementOptions, m = {}, h = {
                    chart: o,
                    dataset: s.getDataset(),
                    datasetIndex: s.index,
                    hover: t
                };
                for (a = 0,
                n = _.length; a < n; ++a)
                    i = _[a],
                    r = t ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i,
                    m[i] = Q([l[r], d[r], u[r]], h);
                return m
            },
            _resolveDataElementOptions: function(e, t) {
                var a = this
                  , n = e && e.custom
                  , i = a._cachedDataOpts;
                if (i && !n)
                    return i;
                var r, s, o, d, l = a.chart, u = a._config, _ = l.options.elements[a.dataElementType.prototype._type] || {}, m = a._dataElementOptions, h = {}, c = {
                    chart: l,
                    dataIndex: t,
                    dataset: a.getDataset(),
                    datasetIndex: a.index
                }, f = {
                    cacheable: !n
                };
                if (n = n || {},
                R.isArray(m))
                    for (s = 0,
                    o = m.length; s < o; ++s)
                        h[d = m[s]] = Q([n[d], u[d], _[d]], c, t, f);
                else
                    for (s = 0,
                    o = (r = Object.keys(m)).length; s < o; ++s)
                        h[d = r[s]] = Q([n[d], u[m[d]], u[d], _[d]], c, t, f);
                return f.cacheable && (a._cachedDataOpts = Object.freeze(h)),
                h
            },
            removeHoverStyle: function(e) {
                R.merge(e._model, e.$previousStyle || {}),
                delete e.$previousStyle
            },
            setHoverStyle: function(e) {
                var t = this.chart.data.datasets[e._datasetIndex]
                  , a = e._index
                  , n = e.custom || {}
                  , i = e._model
                  , r = R.getHoverColor;
                e.$previousStyle = {
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor,
                    borderWidth: i.borderWidth
                },
                i.backgroundColor = Q([n.hoverBackgroundColor, t.hoverBackgroundColor, r(i.backgroundColor)], void 0, a),
                i.borderColor = Q([n.hoverBorderColor, t.hoverBorderColor, r(i.borderColor)], void 0, a),
                i.borderWidth = Q([n.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth], void 0, a)
            },
            _removeDatasetHoverStyle: function() {
                var e = this.getMeta().dataset;
                e && this.removeHoverStyle(e)
            },
            _setDatasetHoverStyle: function() {
                var e, t, a, n, i, r, s = this.getMeta().dataset, o = {};
                if (s) {
                    for (r = s._model,
                    i = this._resolveDatasetElementOptions(s, !0),
                    e = 0,
                    t = (n = Object.keys(i)).length; e < t; ++e)
                        o[a = n[e]] = r[a],
                        r[a] = i[a];
                    s.$previousStyle = o
                }
            },
            resyncElements: function() {
                var e = this.getMeta()
                  , t = this.getDataset().data
                  , a = e.data.length
                  , n = t.length;
                n < a ? e.data.splice(n, a - n) : n > a && this.insertElements(a, n - a)
            },
            insertElements: function(e, t) {
                for (var a = 0; a < t; ++a)
                    this.addElementAndReset(e + a)
            },
            onDataPush: function() {
                var e = arguments.length;
                this.insertElements(this.getDataset().data.length - e, e)
            },
            onDataPop: function() {
                this.getMeta().data.pop()
            },
            onDataShift: function() {
                this.getMeta().data.shift()
            },
            onDataSplice: function(e, t) {
                this.getMeta().data.splice(e, t),
                this.insertElements(e, arguments.length - 2)
            },
            onDataUnshift: function() {
                this.insertElements(0, arguments.length)
            }
        }),
        te.extend = R.inherits;
        var ae = te
          , ne = 2 * Math.PI;
        function ie(e, t) {
            var a = t.startAngle
              , n = t.endAngle
              , i = t.pixelMargin
              , r = i / t.outerRadius
              , s = t.x
              , o = t.y;
            e.beginPath(),
            e.arc(s, o, t.outerRadius, a - r, n + r),
            t.innerRadius > i ? (r = i / t.innerRadius,
            e.arc(s, o, t.innerRadius - i, n + r, a - r, !0)) : e.arc(s, o, i, n + Math.PI / 2, a - Math.PI / 2),
            e.closePath(),
            e.clip()
        }
        function re(e, t, a) {
            var n = "inner" === t.borderAlign;
            n ? (e.lineWidth = 2 * t.borderWidth,
            e.lineJoin = "round") : (e.lineWidth = t.borderWidth,
            e.lineJoin = "bevel"),
            a.fullCircles && function(e, t, a, n) {
                var i, r = a.endAngle;
                for (n && (a.endAngle = a.startAngle + ne,
                ie(e, a),
                a.endAngle = r,
                a.endAngle === a.startAngle && a.fullCircles && (a.endAngle += ne,
                a.fullCircles--)),
                e.beginPath(),
                e.arc(a.x, a.y, a.innerRadius, a.startAngle + ne, a.startAngle, !0),
                i = 0; i < a.fullCircles; ++i)
                    e.stroke();
                for (e.beginPath(),
                e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.startAngle + ne),
                i = 0; i < a.fullCircles; ++i)
                    e.stroke()
            }(e, t, a, n),
            n && ie(e, a),
            e.beginPath(),
            e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.endAngle),
            e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
            e.closePath(),
            e.stroke()
        }
        W._set("global", {
            elements: {
                arc: {
                    backgroundColor: W.global.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2,
                    borderAlign: "center"
                }
            }
        });
        var se = q.extend({
            _type: "arc",
            inLabelRange: function(e) {
                var t = this._view;
                return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
            },
            inRange: function(e, t) {
                var a = this._view;
                if (a) {
                    for (var n = R.getAngleFromPoint(a, {
                        x: e,
                        y: t
                    }), i = n.angle, r = n.distance, s = a.startAngle, o = a.endAngle; o < s; )
                        o += ne;
                    for (; i > o; )
                        i -= ne;
                    for (; i < s; )
                        i += ne;
                    var d = i >= s && i <= o
                      , l = r >= a.innerRadius && r <= a.outerRadius;
                    return d && l
                }
                return !1
            },
            getCenterPoint: function() {
                var e = this._view
                  , t = (e.startAngle + e.endAngle) / 2
                  , a = (e.innerRadius + e.outerRadius) / 2;
                return {
                    x: e.x + Math.cos(t) * a,
                    y: e.y + Math.sin(t) * a
                }
            },
            getArea: function() {
                var e = this._view;
                return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            },
            tooltipPosition: function() {
                var e = this._view
                  , t = e.startAngle + (e.endAngle - e.startAngle) / 2
                  , a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                return {
                    x: e.x + Math.cos(t) * a,
                    y: e.y + Math.sin(t) * a
                }
            },
            draw: function() {
                var e, t = this._chart.ctx, a = this._view, n = "inner" === a.borderAlign ? .33 : 0, i = {
                    x: a.x,
                    y: a.y,
                    innerRadius: a.innerRadius,
                    outerRadius: Math.max(a.outerRadius - n, 0),
                    pixelMargin: n,
                    startAngle: a.startAngle,
                    endAngle: a.endAngle,
                    fullCircles: Math.floor(a.circumference / ne)
                };
                if (t.save(),
                t.fillStyle = a.backgroundColor,
                t.strokeStyle = a.borderColor,
                i.fullCircles) {
                    for (i.endAngle = i.startAngle + ne,
                    t.beginPath(),
                    t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                    t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                    t.closePath(),
                    e = 0; e < i.fullCircles; ++e)
                        t.fill();
                    i.endAngle = i.startAngle + a.circumference % ne
                }
                t.beginPath(),
                t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                t.closePath(),
                t.fill(),
                a.borderWidth && re(t, a, i),
                t.restore()
            }
        })
          , oe = R.valueOrDefault
          , de = W.global.defaultColor;
        W._set("global", {
            elements: {
                line: {
                    tension: .4,
                    backgroundColor: de,
                    borderWidth: 3,
                    borderColor: de,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }
            }
        });
        var le = q.extend({
            _type: "line",
            draw: function() {
                var e, t, a, n = this, i = n._view, r = n._chart.ctx, s = i.spanGaps, o = n._children.slice(), d = W.global, l = d.elements.line, u = -1, _ = n._loop;
                if (o.length) {
                    if (n._loop) {
                        for (e = 0; e < o.length; ++e)
                            if (t = R.previousItem(o, e),
                            !o[e]._view.skip && t._view.skip) {
                                o = o.slice(e).concat(o.slice(0, e)),
                                _ = s;
                                break
                            }
                        _ && o.push(o[0])
                    }
                    for (r.save(),
                    r.lineCap = i.borderCapStyle || l.borderCapStyle,
                    r.setLineDash && r.setLineDash(i.borderDash || l.borderDash),
                    r.lineDashOffset = oe(i.borderDashOffset, l.borderDashOffset),
                    r.lineJoin = i.borderJoinStyle || l.borderJoinStyle,
                    r.lineWidth = oe(i.borderWidth, l.borderWidth),
                    r.strokeStyle = i.borderColor || d.defaultColor,
                    r.beginPath(),
                    (a = o[0]._view).skip || (r.moveTo(a.x, a.y),
                    u = 0),
                    e = 1; e < o.length; ++e)
                        a = o[e]._view,
                        t = -1 === u ? R.previousItem(o, e) : o[u],
                        a.skip || (u !== e - 1 && !s || -1 === u ? r.moveTo(a.x, a.y) : R.canvas.lineTo(r, t._view, a),
                        u = e);
                    _ && r.closePath(),
                    r.stroke(),
                    r.restore()
                }
            }
        })
          , ue = R.valueOrDefault
          , _e = W.global.defaultColor;
        function me(e) {
            var t = this._view;
            return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
        }
        W._set("global", {
            elements: {
                point: {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: _e,
                    borderColor: _e,
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }
            }
        });
        var he = q.extend({
            _type: "point",
            inRange: function(e, t) {
                var a = this._view;
                return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
            },
            inLabelRange: me,
            inXRange: me,
            inYRange: function(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
            },
            getCenterPoint: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y,
                    padding: e.radius + e.borderWidth
                }
            },
            draw: function(e) {
                var t = this._view
                  , a = this._chart.ctx
                  , n = t.pointStyle
                  , i = t.rotation
                  , r = t.radius
                  , s = t.x
                  , o = t.y
                  , d = W.global
                  , l = d.defaultColor;
                t.skip || (void 0 === e || R.canvas._isPointInArea(t, e)) && (a.strokeStyle = t.borderColor || l,
                a.lineWidth = ue(t.borderWidth, d.elements.point.borderWidth),
                a.fillStyle = t.backgroundColor || l,
                R.canvas.drawPoint(a, n, r, s, o, i))
            }
        })
          , ce = W.global.defaultColor;
        function fe(e) {
            return e && void 0 !== e.width
        }
        function Me(e) {
            var t, a, n, i, r;
            return fe(e) ? (r = e.width / 2,
            t = e.x - r,
            a = e.x + r,
            n = Math.min(e.y, e.base),
            i = Math.max(e.y, e.base)) : (r = e.height / 2,
            t = Math.min(e.x, e.base),
            a = Math.max(e.x, e.base),
            n = e.y - r,
            i = e.y + r),
            {
                left: t,
                top: n,
                right: a,
                bottom: i
            }
        }
        function pe(e, t, a) {
            return e === t ? a : e === a ? t : e
        }
        function ge(e, t, a) {
            var n, i, r, s, o = e.borderWidth, d = function(e) {
                var t = e.borderSkipped
                  , a = {};
                return t ? (e.horizontal ? e.base > e.x && (t = pe(t, "left", "right")) : e.base < e.y && (t = pe(t, "bottom", "top")),
                a[t] = !0,
                a) : a
            }(e);
            return R.isObject(o) ? (n = +o.top || 0,
            i = +o.right || 0,
            r = +o.bottom || 0,
            s = +o.left || 0) : n = i = r = s = +o || 0,
            {
                t: d.top || n < 0 ? 0 : n > a ? a : n,
                r: d.right || i < 0 ? 0 : i > t ? t : i,
                b: d.bottom || r < 0 ? 0 : r > a ? a : r,
                l: d.left || s < 0 ? 0 : s > t ? t : s
            }
        }
        function ye(e, t, a) {
            var n = null === t
              , i = null === a
              , r = !(!e || n && i) && Me(e);
            return r && (n || t >= r.left && t <= r.right) && (i || a >= r.top && a <= r.bottom)
        }
        W._set("global", {
            elements: {
                rectangle: {
                    backgroundColor: ce,
                    borderColor: ce,
                    borderSkipped: "bottom",
                    borderWidth: 0
                }
            }
        });
        var Le = q.extend({
            _type: "rectangle",
            draw: function() {
                var e = this._chart.ctx
                  , t = this._view
                  , a = function(e) {
                    var t = Me(e)
                      , a = t.right - t.left
                      , n = t.bottom - t.top
                      , i = ge(e, a / 2, n / 2);
                    return {
                        outer: {
                            x: t.left,
                            y: t.top,
                            w: a,
                            h: n
                        },
                        inner: {
                            x: t.left + i.l,
                            y: t.top + i.t,
                            w: a - i.l - i.r,
                            h: n - i.t - i.b
                        }
                    }
                }(t)
                  , n = a.outer
                  , i = a.inner;
                e.fillStyle = t.backgroundColor,
                e.fillRect(n.x, n.y, n.w, n.h),
                n.w === i.w && n.h === i.h || (e.save(),
                e.beginPath(),
                e.rect(n.x, n.y, n.w, n.h),
                e.clip(),
                e.fillStyle = t.borderColor,
                e.rect(i.x, i.y, i.w, i.h),
                e.fill("evenodd"),
                e.restore())
            },
            height: function() {
                var e = this._view;
                return e.base - e.y
            },
            inRange: function(e, t) {
                return ye(this._view, e, t)
            },
            inLabelRange: function(e, t) {
                var a = this._view;
                return fe(a) ? ye(a, e, null) : ye(a, null, t)
            },
            inXRange: function(e) {
                return ye(this._view, e, null)
            },
            inYRange: function(e) {
                return ye(this._view, null, e)
            },
            getCenterPoint: function() {
                var e, t, a = this._view;
                return fe(a) ? (e = a.x,
                t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2,
                t = a.y),
                {
                    x: e,
                    y: t
                }
            },
            getArea: function() {
                var e = this._view;
                return fe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
            },
            tooltipPosition: function() {
                var e = this._view;
                return {
                    x: e.x,
                    y: e.y
                }
            }
        })
          , ve = {}
          , Ye = se
          , ke = le
          , be = he
          , De = Le;
        ve.Arc = Ye,
        ve.Line = ke,
        ve.Point = be,
        ve.Rectangle = De;
        var we = R._deprecated
          , xe = R.valueOrDefault;
        function Te(e, t, a) {
            var n, i, r = a.barThickness, s = t.stackCount, o = t.pixels[e], d = R.isNullOrUndef(r) ? function(e, t) {
                var a, n, i, r, s = e._length;
                for (i = 1,
                r = t.length; i < r; ++i)
                    s = Math.min(s, Math.abs(t[i] - t[i - 1]));
                for (i = 0,
                r = e.getTicks().length; i < r; ++i)
                    n = e.getPixelForTick(i),
                    s = i > 0 ? Math.min(s, Math.abs(n - a)) : s,
                    a = n;
                return s
            }(t.scale, t.pixels) : -1;
            return R.isNullOrUndef(r) ? (n = d * a.categoryPercentage,
            i = a.barPercentage) : (n = r * s,
            i = 1),
            {
                chunk: n / s,
                ratio: i,
                start: o - n / 2
            }
        }
        W._set("bar", {
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }],
                yAxes: [{
                    type: "linear"
                }]
            }
        }),
        W._set("global", {
            datasets: {
                bar: {
                    categoryPercentage: .8,
                    barPercentage: .9
                }
            }
        });
        var Se = ae.extend({
            dataElementType: ve.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function() {
                var e, t, a = this;
                ae.prototype.initialize.apply(a, arguments),
                (e = a.getMeta()).stack = a.getDataset().stack,
                e.bar = !0,
                t = a._getIndexScale().options,
                we("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"),
                we("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"),
                we("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"),
                we("bar chart", a._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"),
                we("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function(e) {
                var t, a, n = this.getMeta().data;
                for (this._ruler = this.getRuler(),
                t = 0,
                a = n.length; t < a; ++t)
                    this.updateElement(n[t], t, e)
            },
            updateElement: function(e, t, a) {
                var n = this
                  , i = n.getMeta()
                  , r = n.getDataset()
                  , s = n._resolveDataElementOptions(e, t);
                e._xScale = n.getScaleForId(i.xAxisID),
                e._yScale = n.getScaleForId(i.yAxisID),
                e._datasetIndex = n.index,
                e._index = t,
                e._model = {
                    backgroundColor: s.backgroundColor,
                    borderColor: s.borderColor,
                    borderSkipped: s.borderSkipped,
                    borderWidth: s.borderWidth,
                    datasetLabel: r.label,
                    label: n.chart.data.labels[t]
                },
                R.isArray(r.data[t]) && (e._model.borderSkipped = null),
                n._updateElementGeometry(e, t, a, s),
                e.pivot()
            },
            _updateElementGeometry: function(e, t, a, n) {
                var i = this
                  , r = e._model
                  , s = i._getValueScale()
                  , o = s.getBasePixel()
                  , d = s.isHorizontal()
                  , l = i._ruler || i.getRuler()
                  , u = i.calculateBarValuePixels(i.index, t, n)
                  , _ = i.calculateBarIndexPixels(i.index, t, l, n);
                r.horizontal = d,
                r.base = a ? o : u.base,
                r.x = d ? a ? o : u.head : _.center,
                r.y = d ? _.center : a ? o : u.head,
                r.height = d ? _.size : void 0,
                r.width = d ? void 0 : _.size
            },
            _getStacks: function(e) {
                var t, a, n = this._getIndexScale(), i = n._getMatchingVisibleMetas(this._type), r = n.options.stacked, s = i.length, o = [];
                for (t = 0; t < s && (a = i[t],
                (!1 === r || -1 === o.indexOf(a.stack) || void 0 === r && void 0 === a.stack) && o.push(a.stack),
                a.index !== e); ++t)
                    ;
                return o
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(e, t) {
                var a = this._getStacks(e)
                  , n = void 0 !== t ? a.indexOf(t) : -1;
                return -1 === n ? a.length - 1 : n
            },
            getRuler: function() {
                var e, t, a = this._getIndexScale(), n = [];
                for (e = 0,
                t = this.getMeta().data.length; e < t; ++e)
                    n.push(a.getPixelForValue(null, e, this.index));
                return {
                    pixels: n,
                    start: a._startPixel,
                    end: a._endPixel,
                    stackCount: this.getStackCount(),
                    scale: a
                }
            },
            calculateBarValuePixels: function(e, t, a) {
                var n, i, r, s, o, d, l, u = this.chart, _ = this._getValueScale(), m = _.isHorizontal(), h = u.data.datasets, c = _._getMatchingVisibleMetas(this._type), f = _._parseValue(h[e].data[t]), M = a.minBarLength, p = _.options.stacked, g = this.getMeta().stack, y = void 0 === f.start ? 0 : f.max >= 0 && f.min >= 0 ? f.min : f.max, L = void 0 === f.start ? f.end : f.max >= 0 && f.min >= 0 ? f.max - f.min : f.min - f.max, v = c.length;
                if (p || void 0 === p && void 0 !== g)
                    for (n = 0; n < v && (i = c[n]).index !== e; ++n)
                        i.stack === g && (r = void 0 === (l = _._parseValue(h[i.index].data[t])).start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min,
                        (f.min < 0 && r < 0 || f.max >= 0 && r > 0) && (y += r));
                return s = _.getPixelForValue(y),
                d = (o = _.getPixelForValue(y + L)) - s,
                void 0 !== M && Math.abs(d) < M && (d = M,
                o = L >= 0 && !m || L < 0 && m ? s - M : s + M),
                {
                    size: d,
                    base: s,
                    head: o,
                    center: o + d / 2
                }
            },
            calculateBarIndexPixels: function(e, t, a, n) {
                var i = "flex" === n.barThickness ? function(e, t, a) {
                    var n, i = t.pixels, r = i[e], s = e > 0 ? i[e - 1] : null, o = e < i.length - 1 ? i[e + 1] : null, d = a.categoryPercentage;
                    return null === s && (s = r - (null === o ? t.end - t.start : o - r)),
                    null === o && (o = r + r - s),
                    n = r - (r - Math.min(s, o)) / 2 * d,
                    {
                        chunk: Math.abs(o - s) / 2 * d / t.stackCount,
                        ratio: a.barPercentage,
                        start: n
                    }
                }(t, a, n) : Te(t, a, n)
                  , r = this.getStackIndex(e, this.getMeta().stack)
                  , s = i.start + i.chunk * r + i.chunk / 2
                  , o = Math.min(xe(n.maxBarThickness, 1 / 0), i.chunk * i.ratio);
                return {
                    base: s - o / 2,
                    head: s + o / 2,
                    center: s,
                    size: o
                }
            },
            draw: function() {
                var e = this.chart
                  , t = this._getValueScale()
                  , a = this.getMeta().data
                  , n = this.getDataset()
                  , i = a.length
                  , r = 0;
                for (R.canvas.clipArea(e.ctx, e.chartArea); r < i; ++r) {
                    var s = t._parseValue(n.data[r]);
                    isNaN(s.min) || isNaN(s.max) || a[r].draw()
                }
                R.canvas.unclipArea(e.ctx)
            },
            _resolveDataElementOptions: function() {
                var e = this
                  , t = R.extend({}, ae.prototype._resolveDataElementOptions.apply(e, arguments))
                  , a = e._getIndexScale().options
                  , n = e._getValueScale().options;
                return t.barPercentage = xe(a.barPercentage, t.barPercentage),
                t.barThickness = xe(a.barThickness, t.barThickness),
                t.categoryPercentage = xe(a.categoryPercentage, t.categoryPercentage),
                t.maxBarThickness = xe(a.maxBarThickness, t.maxBarThickness),
                t.minBarLength = xe(n.minBarLength, t.minBarLength),
                t
            }
        })
          , He = R.valueOrDefault
          , je = R.options.resolve;
        W._set("bubble", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        var a = t.datasets[e.datasetIndex].label || ""
                          , n = t.datasets[e.datasetIndex].data[e.index];
                        return a + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                    }
                }
            }
        });
        var Pe = ae.extend({
            dataElementType: ve.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function(e) {
                var t = this
                  , a = t.getMeta().data;
                R.each(a, (function(a, n) {
                    t.updateElement(a, n, e)
                }
                ))
            },
            updateElement: function(e, t, a) {
                var n = this
                  , i = n.getMeta()
                  , r = e.custom || {}
                  , s = n.getScaleForId(i.xAxisID)
                  , o = n.getScaleForId(i.yAxisID)
                  , d = n._resolveDataElementOptions(e, t)
                  , l = n.getDataset().data[t]
                  , u = n.index
                  , _ = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u)
                  , m = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                e._xScale = s,
                e._yScale = o,
                e._options = d,
                e._datasetIndex = u,
                e._index = t,
                e._model = {
                    backgroundColor: d.backgroundColor,
                    borderColor: d.borderColor,
                    borderWidth: d.borderWidth,
                    hitRadius: d.hitRadius,
                    pointStyle: d.pointStyle,
                    rotation: d.rotation,
                    radius: a ? 0 : d.radius,
                    skip: r.skip || isNaN(_) || isNaN(m),
                    x: _,
                    y: m
                },
                e.pivot()
            },
            setHoverStyle: function(e) {
                var t = e._model
                  , a = e._options
                  , n = R.getHoverColor;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth,
                    radius: t.radius
                },
                t.backgroundColor = He(a.hoverBackgroundColor, n(a.backgroundColor)),
                t.borderColor = He(a.hoverBorderColor, n(a.borderColor)),
                t.borderWidth = He(a.hoverBorderWidth, a.borderWidth),
                t.radius = a.radius + a.hoverRadius
            },
            _resolveDataElementOptions: function(e, t) {
                var a = this
                  , n = a.chart
                  , i = a.getDataset()
                  , r = e.custom || {}
                  , s = i.data[t] || {}
                  , o = ae.prototype._resolveDataElementOptions.apply(a, arguments)
                  , d = {
                    chart: n,
                    dataIndex: t,
                    dataset: i,
                    datasetIndex: a.index
                };
                return a._cachedDataOpts === o && (o = R.extend({}, o)),
                o.radius = je([r.radius, s.r, a._config.radius, n.options.elements.point.radius], d, t),
                o
            }
        })
          , Oe = R.valueOrDefault
          , Ae = Math.PI
          , Fe = 2 * Ae
          , We = Ae / 2;
        W._set("doughnut", {
            animation: {
                animateRotate: !0,
                animateScale: !1
            },
            hover: {
                mode: "single"
            },
            legendCallback: function(e) {
                var t, a, n, i = document.createElement("ul"), r = e.data, s = r.datasets, o = r.labels;
                if (i.setAttribute("class", e.id + "-legend"),
                s.length)
                    for (t = 0,
                    a = s[0].data.length; t < a; ++t)
                        (n = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[t],
                        o[t] && n.appendChild(document.createTextNode(o[t]));
                return i.outerHTML
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                            var i = e.getDatasetMeta(0)
                              , r = i.controller.getStyle(n);
                            return {
                                text: a,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: isNaN(t.datasets[0].data[n]) || i.data[n].hidden,
                                index: n
                            }
                        }
                        )) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, i, r = t.index, s = this.chart;
                    for (a = 0,
                    n = (s.data.datasets || []).length; a < n; ++a)
                        (i = s.getDatasetMeta(a)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
                    s.update()
                }
            },
            cutoutPercentage: 50,
            rotation: -We,
            circumference: Fe,
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        var a = t.labels[e.index]
                          , n = ": " + t.datasets[e.datasetIndex].data[e.index];
                        return R.isArray(a) ? (a = a.slice())[0] += n : a += n,
                        a
                    }
                }
            }
        });
        var Ce = ae.extend({
            dataElementType: ve.Arc,
            linkScales: R.noop,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
            getRingIndex: function(e) {
                for (var t = 0, a = 0; a < e; ++a)
                    this.chart.isDatasetVisible(a) && ++t;
                return t
            },
            update: function(e) {
                var t, a, n, i, r = this, s = r.chart, o = s.chartArea, d = s.options, l = 1, u = 1, _ = 0, m = 0, h = r.getMeta(), c = h.data, f = d.cutoutPercentage / 100 || 0, M = d.circumference, p = r._getRingWeight(r.index);
                if (M < Fe) {
                    var g = d.rotation % Fe
                      , y = (g += g >= Ae ? -Fe : g < -Ae ? Fe : 0) + M
                      , L = Math.cos(g)
                      , v = Math.sin(g)
                      , Y = Math.cos(y)
                      , k = Math.sin(y)
                      , b = g <= 0 && y >= 0 || y >= Fe
                      , D = g <= We && y >= We || y >= Fe + We
                      , w = g <= -We && y >= -We || y >= Ae + We
                      , x = g === -Ae || y >= Ae ? -1 : Math.min(L, L * f, Y, Y * f)
                      , T = w ? -1 : Math.min(v, v * f, k, k * f)
                      , S = b ? 1 : Math.max(L, L * f, Y, Y * f)
                      , H = D ? 1 : Math.max(v, v * f, k, k * f);
                    l = (S - x) / 2,
                    u = (H - T) / 2,
                    _ = -(S + x) / 2,
                    m = -(H + T) / 2
                }
                for (n = 0,
                i = c.length; n < i; ++n)
                    c[n]._options = r._resolveDataElementOptions(c[n], n);
                for (s.borderWidth = r.getMaxBorderWidth(),
                t = (o.right - o.left - s.borderWidth) / l,
                a = (o.bottom - o.top - s.borderWidth) / u,
                s.outerRadius = Math.max(Math.min(t, a) / 2, 0),
                s.innerRadius = Math.max(s.outerRadius * f, 0),
                s.radiusLength = (s.outerRadius - s.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1),
                s.offsetX = _ * s.outerRadius,
                s.offsetY = m * s.outerRadius,
                h.total = r.calculateTotal(),
                r.outerRadius = s.outerRadius - s.radiusLength * r._getRingWeightOffset(r.index),
                r.innerRadius = Math.max(r.outerRadius - s.radiusLength * p, 0),
                n = 0,
                i = c.length; n < i; ++n)
                    r.updateElement(c[n], n, e)
            },
            updateElement: function(e, t, a) {
                var n = this
                  , i = n.chart
                  , r = i.chartArea
                  , s = i.options
                  , o = s.animation
                  , d = (r.left + r.right) / 2
                  , l = (r.top + r.bottom) / 2
                  , u = s.rotation
                  , _ = s.rotation
                  , m = n.getDataset()
                  , h = a && o.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(m.data[t]) * (s.circumference / Fe)
                  , c = a && o.animateScale ? 0 : n.innerRadius
                  , f = a && o.animateScale ? 0 : n.outerRadius
                  , M = e._options || {};
                R.extend(e, {
                    _datasetIndex: n.index,
                    _index: t,
                    _model: {
                        backgroundColor: M.backgroundColor,
                        borderColor: M.borderColor,
                        borderWidth: M.borderWidth,
                        borderAlign: M.borderAlign,
                        x: d + i.offsetX,
                        y: l + i.offsetY,
                        startAngle: u,
                        endAngle: _,
                        circumference: h,
                        outerRadius: f,
                        innerRadius: c,
                        label: R.valueAtIndexOrDefault(m.label, t, i.data.labels[t])
                    }
                });
                var p = e._model;
                a && o.animateRotate || (p.startAngle = 0 === t ? s.rotation : n.getMeta().data[t - 1]._model.endAngle,
                p.endAngle = p.startAngle + p.circumference),
                e.pivot()
            },
            calculateTotal: function() {
                var e, t = this.getDataset(), a = this.getMeta(), n = 0;
                return R.each(a.data, (function(a, i) {
                    e = t.data[i],
                    isNaN(e) || a.hidden || (n += Math.abs(e))
                }
                )),
                n
            },
            calculateCircumference: function(e) {
                var t = this.getMeta().total;
                return t > 0 && !isNaN(e) ? Fe * (Math.abs(e) / t) : 0
            },
            getMaxBorderWidth: function(e) {
                var t, a, n, i, r, s, o, d, l = 0, u = this.chart;
                if (!e)
                    for (t = 0,
                    a = u.data.datasets.length; t < a; ++t)
                        if (u.isDatasetVisible(t)) {
                            e = (n = u.getDatasetMeta(t)).data,
                            t !== this.index && (r = n.controller);
                            break
                        }
                if (!e)
                    return 0;
                for (t = 0,
                a = e.length; t < a; ++t)
                    i = e[t],
                    r ? (r._configure(),
                    s = r._resolveDataElementOptions(i, t)) : s = i._options,
                    "inner" !== s.borderAlign && (o = s.borderWidth,
                    l = (d = s.hoverBorderWidth) > (l = o > l ? o : l) ? d : l);
                return l
            },
            setHoverStyle: function(e) {
                var t = e._model
                  , a = e._options
                  , n = R.getHoverColor;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                },
                t.backgroundColor = Oe(a.hoverBackgroundColor, n(a.backgroundColor)),
                t.borderColor = Oe(a.hoverBorderColor, n(a.borderColor)),
                t.borderWidth = Oe(a.hoverBorderWidth, a.borderWidth)
            },
            _getRingWeightOffset: function(e) {
                for (var t = 0, a = 0; a < e; ++a)
                    this.chart.isDatasetVisible(a) && (t += this._getRingWeight(a));
                return t
            },
            _getRingWeight: function(e) {
                return Math.max(Oe(this.chart.data.datasets[e].weight, 1), 0)
            },
            _getVisibleDatasetWeightTotal: function() {
                return this._getRingWeightOffset(this.chart.data.datasets.length)
            }
        });
        W._set("horizontalBar", {
            hover: {
                mode: "index",
                axis: "y"
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    type: "category",
                    position: "left",
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }]
            },
            elements: {
                rectangle: {
                    borderSkipped: "left"
                }
            },
            tooltips: {
                mode: "index",
                axis: "y"
            }
        }),
        W._set("global", {
            datasets: {
                horizontalBar: {
                    categoryPercentage: .8,
                    barPercentage: .9
                }
            }
        });
        var Ee = Se.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        })
          , ze = R.valueOrDefault
          , Ie = R.options.resolve
          , Re = R.canvas._isPointInArea;
        function Ne(e, t) {
            var a = e && e.options.ticks || {}
              , n = a.reverse
              , i = void 0 === a.min ? t : 0
              , r = void 0 === a.max ? t : 0;
            return {
                start: n ? r : i,
                end: n ? i : r
            }
        }
        function Ve(e, t, a) {
            var n = a / 2
              , i = Ne(e, n)
              , r = Ne(t, n);
            return {
                top: r.end,
                right: i.end,
                bottom: r.start,
                left: i.start
            }
        }
        function Be(e) {
            var t, a, n, i;
            return R.isObject(e) ? (t = e.top,
            a = e.right,
            n = e.bottom,
            i = e.left) : t = a = n = i = e,
            {
                top: t,
                right: a,
                bottom: n,
                left: i
            }
        }
        W._set("line", {
            showLines: !0,
            spanGaps: !1,
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    type: "category",
                    id: "x-axis-0"
                }],
                yAxes: [{
                    type: "linear",
                    id: "y-axis-0"
                }]
            }
        });
        var Je = ae.extend({
            datasetElementType: ve.Line,
            dataElementType: ve.Point,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation"
            },
            update: function(e) {
                var t, a, n = this, i = n.getMeta(), r = i.dataset, s = i.data || [], o = n.chart.options, d = n._config, l = n._showLine = ze(d.showLine, o.showLines);
                for (n._xScale = n.getScaleForId(i.xAxisID),
                n._yScale = n.getScaleForId(i.yAxisID),
                l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension),
                r._scale = n._yScale,
                r._datasetIndex = n.index,
                r._children = s,
                r._model = n._resolveDatasetElementOptions(r),
                r.pivot()),
                t = 0,
                a = s.length; t < a; ++t)
                    n.updateElement(s[t], t, e);
                for (l && 0 !== r._model.tension && n.updateBezierControlPoints(),
                t = 0,
                a = s.length; t < a; ++t)
                    s[t].pivot()
            },
            updateElement: function(e, t, a) {
                var n, i, r = this, s = r.getMeta(), o = e.custom || {}, d = r.getDataset(), l = r.index, u = d.data[t], _ = r._xScale, m = r._yScale, h = s.dataset._model, c = r._resolveDataElementOptions(e, t);
                n = _.getPixelForValue("object" == typeof u ? u : NaN, t, l),
                i = a ? m.getBasePixel() : r.calculatePointY(u, t, l),
                e._xScale = _,
                e._yScale = m,
                e._options = c,
                e._datasetIndex = l,
                e._index = t,
                e._model = {
                    x: n,
                    y: i,
                    skip: o.skip || isNaN(n) || isNaN(i),
                    radius: c.radius,
                    pointStyle: c.pointStyle,
                    rotation: c.rotation,
                    backgroundColor: c.backgroundColor,
                    borderColor: c.borderColor,
                    borderWidth: c.borderWidth,
                    tension: ze(o.tension, h ? h.tension : 0),
                    steppedLine: !!h && h.steppedLine,
                    hitRadius: c.hitRadius
                }
            },
            _resolveDatasetElementOptions: function(e) {
                var t = this
                  , a = t._config
                  , n = e.custom || {}
                  , i = t.chart.options
                  , r = i.elements.line
                  , s = ae.prototype._resolveDatasetElementOptions.apply(t, arguments);
                return s.spanGaps = ze(a.spanGaps, i.spanGaps),
                s.tension = ze(a.lineTension, r.tension),
                s.steppedLine = Ie([n.steppedLine, a.steppedLine, r.stepped]),
                s.clip = Be(ze(a.clip, Ve(t._xScale, t._yScale, s.borderWidth))),
                s
            },
            calculatePointY: function(e, t, a) {
                var n, i, r, s, o, d, l, u = this.chart, _ = this._yScale, m = 0, h = 0;
                if (_.options.stacked) {
                    for (o = +_.getRightValue(e),
                    l = (d = u._getSortedVisibleDatasetMetas()).length,
                    n = 0; n < l && (r = d[n]).index !== a; ++n)
                        i = u.data.datasets[r.index],
                        "line" === r.type && r.yAxisID === _.id && ((s = +_.getRightValue(i.data[t])) < 0 ? h += s || 0 : m += s || 0);
                    return o < 0 ? _.getPixelForValue(h + o) : _.getPixelForValue(m + o)
                }
                return _.getPixelForValue(e)
            },
            updateBezierControlPoints: function() {
                var e, t, a, n, i = this.chart, r = this.getMeta(), s = r.dataset._model, o = i.chartArea, d = r.data || [];
                function l(e, t, a) {
                    return Math.max(Math.min(e, a), t)
                }
                if (s.spanGaps && (d = d.filter((function(e) {
                    return !e._model.skip
                }
                ))),
                "monotone" === s.cubicInterpolationMode)
                    R.splineCurveMonotone(d);
                else
                    for (e = 0,
                    t = d.length; e < t; ++e)
                        a = d[e]._model,
                        n = R.splineCurve(R.previousItem(d, e)._model, a, R.nextItem(d, e)._model, s.tension),
                        a.controlPointPreviousX = n.previous.x,
                        a.controlPointPreviousY = n.previous.y,
                        a.controlPointNextX = n.next.x,
                        a.controlPointNextY = n.next.y;
                if (i.options.elements.line.capBezierPoints)
                    for (e = 0,
                    t = d.length; e < t; ++e)
                        a = d[e]._model,
                        Re(a, o) && (e > 0 && Re(d[e - 1]._model, o) && (a.controlPointPreviousX = l(a.controlPointPreviousX, o.left, o.right),
                        a.controlPointPreviousY = l(a.controlPointPreviousY, o.top, o.bottom)),
                        e < d.length - 1 && Re(d[e + 1]._model, o) && (a.controlPointNextX = l(a.controlPointNextX, o.left, o.right),
                        a.controlPointNextY = l(a.controlPointNextY, o.top, o.bottom)))
            },
            draw: function() {
                var e, t = this.chart, a = this.getMeta(), n = a.data || [], i = t.chartArea, r = t.canvas, s = 0, o = n.length;
                for (this._showLine && (e = a.dataset._model.clip,
                R.canvas.clipArea(t.ctx, {
                    left: !1 === e.left ? 0 : i.left - e.left,
                    right: !1 === e.right ? r.width : i.right + e.right,
                    top: !1 === e.top ? 0 : i.top - e.top,
                    bottom: !1 === e.bottom ? r.height : i.bottom + e.bottom
                }),
                a.dataset.draw(),
                R.canvas.unclipArea(t.ctx)); s < o; ++s)
                    n[s].draw(i)
            },
            setHoverStyle: function(e) {
                var t = e._model
                  , a = e._options
                  , n = R.getHoverColor;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth,
                    radius: t.radius
                },
                t.backgroundColor = ze(a.hoverBackgroundColor, n(a.backgroundColor)),
                t.borderColor = ze(a.hoverBorderColor, n(a.borderColor)),
                t.borderWidth = ze(a.hoverBorderWidth, a.borderWidth),
                t.radius = ze(a.hoverRadius, a.radius)
            }
        })
          , Ue = R.options.resolve;
        W._set("polarArea", {
            scale: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                gridLines: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                ticks: {
                    beginAtZero: !0
                }
            },
            animation: {
                animateRotate: !0,
                animateScale: !0
            },
            startAngle: -.5 * Math.PI,
            legendCallback: function(e) {
                var t, a, n, i = document.createElement("ul"), r = e.data, s = r.datasets, o = r.labels;
                if (i.setAttribute("class", e.id + "-legend"),
                s.length)
                    for (t = 0,
                    a = s[0].data.length; t < a; ++t)
                        (n = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = s[0].backgroundColor[t],
                        o[t] && n.appendChild(document.createTextNode(o[t]));
                return i.outerHTML
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map((function(a, n) {
                            var i = e.getDatasetMeta(0)
                              , r = i.controller.getStyle(n);
                            return {
                                text: a,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: isNaN(t.datasets[0].data[n]) || i.data[n].hidden,
                                index: n
                            }
                        }
                        )) : []
                    }
                },
                onClick: function(e, t) {
                    var a, n, i, r = t.index, s = this.chart;
                    for (a = 0,
                    n = (s.data.datasets || []).length; a < n; ++a)
                        (i = s.getDatasetMeta(a)).data[r].hidden = !i.data[r].hidden;
                    s.update()
                }
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e, t) {
                        return t.labels[e.index] + ": " + e.yLabel
                    }
                }
            }
        });
        var Ge = ae.extend({
            dataElementType: ve.Arc,
            linkScales: R.noop,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
            _getIndexScaleId: function() {
                return this.chart.scale.id
            },
            _getValueScaleId: function() {
                return this.chart.scale.id
            },
            update: function(e) {
                var t, a, n, i = this, r = i.getDataset(), s = i.getMeta(), o = i.chart.options.startAngle || 0, d = i._starts = [], l = i._angles = [], u = s.data;
                for (i._updateRadius(),
                s.count = i.countVisibleElements(),
                t = 0,
                a = r.data.length; t < a; t++)
                    d[t] = o,
                    n = i._computeAngle(t),
                    l[t] = n,
                    o += n;
                for (t = 0,
                a = u.length; t < a; ++t)
                    u[t]._options = i._resolveDataElementOptions(u[t], t),
                    i.updateElement(u[t], t, e)
            },
            _updateRadius: function() {
                var e = this
                  , t = e.chart
                  , a = t.chartArea
                  , n = t.options
                  , i = Math.min(a.right - a.left, a.bottom - a.top);
                t.outerRadius = Math.max(i / 2, 0),
                t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0),
                t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(),
                e.outerRadius = t.outerRadius - t.radiusLength * e.index,
                e.innerRadius = e.outerRadius - t.radiusLength
            },
            updateElement: function(e, t, a) {
                var n = this
                  , i = n.chart
                  , r = n.getDataset()
                  , s = i.options
                  , o = s.animation
                  , d = i.scale
                  , l = i.data.labels
                  , u = d.xCenter
                  , _ = d.yCenter
                  , m = s.startAngle
                  , h = e.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[t])
                  , c = n._starts[t]
                  , f = c + (e.hidden ? 0 : n._angles[t])
                  , M = o.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[t])
                  , p = e._options || {};
                R.extend(e, {
                    _datasetIndex: n.index,
                    _index: t,
                    _scale: d,
                    _model: {
                        backgroundColor: p.backgroundColor,
                        borderColor: p.borderColor,
                        borderWidth: p.borderWidth,
                        borderAlign: p.borderAlign,
                        x: u,
                        y: _,
                        innerRadius: 0,
                        outerRadius: a ? M : h,
                        startAngle: a && o.animateRotate ? m : c,
                        endAngle: a && o.animateRotate ? m : f,
                        label: R.valueAtIndexOrDefault(l, t, l[t])
                    }
                }),
                e.pivot()
            },
            countVisibleElements: function() {
                var e = this.getDataset()
                  , t = this.getMeta()
                  , a = 0;
                return R.each(t.data, (function(t, n) {
                    isNaN(e.data[n]) || t.hidden || a++
                }
                )),
                a
            },
            setHoverStyle: function(e) {
                var t = e._model
                  , a = e._options
                  , n = R.getHoverColor
                  , i = R.valueOrDefault;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                },
                t.backgroundColor = i(a.hoverBackgroundColor, n(a.backgroundColor)),
                t.borderColor = i(a.hoverBorderColor, n(a.borderColor)),
                t.borderWidth = i(a.hoverBorderWidth, a.borderWidth)
            },
            _computeAngle: function(e) {
                var t = this
                  , a = this.getMeta().count
                  , n = t.getDataset()
                  , i = t.getMeta();
                if (isNaN(n.data[e]) || i.data[e].hidden)
                    return 0;
                var r = {
                    chart: t.chart,
                    dataIndex: e,
                    dataset: n,
                    datasetIndex: t.index
                };
                return Ue([t.chart.options.elements.arc.angle, 2 * Math.PI / a], r, e)
            }
        });
        W._set("pie", R.clone(W.doughnut)),
        W._set("pie", {
            cutoutPercentage: 0
        });
        var qe = Ce
          , Ke = R.valueOrDefault;
        W._set("radar", {
            spanGaps: !1,
            scale: {
                type: "radialLinear"
            },
            elements: {
                line: {
                    fill: "start",
                    tension: 0
                }
            }
        });
        var $e = ae.extend({
            datasetElementType: ve.Line,
            dataElementType: ve.Point,
            linkScales: R.noop,
            _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation"
            },
            _getIndexScaleId: function() {
                return this.chart.scale.id
            },
            _getValueScaleId: function() {
                return this.chart.scale.id
            },
            update: function(e) {
                var t, a, n = this, i = n.getMeta(), r = i.dataset, s = i.data || [], o = n.chart.scale, d = n._config;
                for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension),
                r._scale = o,
                r._datasetIndex = n.index,
                r._children = s,
                r._loop = !0,
                r._model = n._resolveDatasetElementOptions(r),
                r.pivot(),
                t = 0,
                a = s.length; t < a; ++t)
                    n.updateElement(s[t], t, e);
                for (n.updateBezierControlPoints(),
                t = 0,
                a = s.length; t < a; ++t)
                    s[t].pivot()
            },
            updateElement: function(e, t, a) {
                var n = this
                  , i = e.custom || {}
                  , r = n.getDataset()
                  , s = n.chart.scale
                  , o = s.getPointPositionForValue(t, r.data[t])
                  , d = n._resolveDataElementOptions(e, t)
                  , l = n.getMeta().dataset._model
                  , u = a ? s.xCenter : o.x
                  , _ = a ? s.yCenter : o.y;
                e._scale = s,
                e._options = d,
                e._datasetIndex = n.index,
                e._index = t,
                e._model = {
                    x: u,
                    y: _,
                    skip: i.skip || isNaN(u) || isNaN(_),
                    radius: d.radius,
                    pointStyle: d.pointStyle,
                    rotation: d.rotation,
                    backgroundColor: d.backgroundColor,
                    borderColor: d.borderColor,
                    borderWidth: d.borderWidth,
                    tension: Ke(i.tension, l ? l.tension : 0),
                    hitRadius: d.hitRadius
                }
            },
            _resolveDatasetElementOptions: function() {
                var e = this
                  , t = e._config
                  , a = e.chart.options
                  , n = ae.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return n.spanGaps = Ke(t.spanGaps, a.spanGaps),
                n.tension = Ke(t.lineTension, a.elements.line.tension),
                n
            },
            updateBezierControlPoints: function() {
                var e, t, a, n, i = this.getMeta(), r = this.chart.chartArea, s = i.data || [];
                function o(e, t, a) {
                    return Math.max(Math.min(e, a), t)
                }
                for (i.dataset._model.spanGaps && (s = s.filter((function(e) {
                    return !e._model.skip
                }
                ))),
                e = 0,
                t = s.length; e < t; ++e)
                    a = s[e]._model,
                    n = R.splineCurve(R.previousItem(s, e, !0)._model, a, R.nextItem(s, e, !0)._model, a.tension),
                    a.controlPointPreviousX = o(n.previous.x, r.left, r.right),
                    a.controlPointPreviousY = o(n.previous.y, r.top, r.bottom),
                    a.controlPointNextX = o(n.next.x, r.left, r.right),
                    a.controlPointNextY = o(n.next.y, r.top, r.bottom)
            },
            setHoverStyle: function(e) {
                var t = e._model
                  , a = e._options
                  , n = R.getHoverColor;
                e.$previousStyle = {
                    backgroundColor: t.backgroundColor,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth,
                    radius: t.radius
                },
                t.backgroundColor = Ke(a.hoverBackgroundColor, n(a.backgroundColor)),
                t.borderColor = Ke(a.hoverBorderColor, n(a.borderColor)),
                t.borderWidth = Ke(a.hoverBorderWidth, a.borderWidth),
                t.radius = Ke(a.hoverRadius, a.radius)
            }
        });
        W._set("scatter", {
            hover: {
                mode: "single"
            },
            scales: {
                xAxes: [{
                    id: "x-axis-1",
                    type: "linear",
                    position: "bottom"
                }],
                yAxes: [{
                    id: "y-axis-1",
                    type: "linear",
                    position: "left"
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return ""
                    },
                    label: function(e) {
                        return "(" + e.xLabel + ", " + e.yLabel + ")"
                    }
                }
            }
        }),
        W._set("global", {
            datasets: {
                scatter: {
                    showLine: !1
                }
            }
        });
        var Ze = {
            bar: Se,
            bubble: Pe,
            doughnut: Ce,
            horizontalBar: Ee,
            line: Je,
            polarArea: Ge,
            pie: qe,
            radar: $e,
            scatter: Je
        };
        function Qe(e, t) {
            return e.native ? {
                x: e.x,
                y: e.y
            } : R.getRelativePosition(e, t)
        }
        function Xe(e, t) {
            var a, n, i, r, s, o, d = e._getSortedVisibleDatasetMetas();
            for (n = 0,
            r = d.length; n < r; ++n)
                for (i = 0,
                s = (a = d[n].data).length; i < s; ++i)
                    (o = a[i])._view.skip || t(o)
        }
        function et(e, t) {
            var a = [];
            return Xe(e, (function(e) {
                e.inRange(t.x, t.y) && a.push(e)
            }
            )),
            a
        }
        function tt(e, t, a, n) {
            var i = Number.POSITIVE_INFINITY
              , r = [];
            return Xe(e, (function(e) {
                if (!a || e.inRange(t.x, t.y)) {
                    var s = e.getCenterPoint()
                      , o = n(t, s);
                    o < i ? (r = [e],
                    i = o) : o === i && r.push(e)
                }
            }
            )),
            r
        }
        function at(e) {
            var t = -1 !== e.indexOf("x")
              , a = -1 !== e.indexOf("y");
            return function(e, n) {
                var i = t ? Math.abs(e.x - n.x) : 0
                  , r = a ? Math.abs(e.y - n.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
            }
        }
        function nt(e, t, a) {
            var n = Qe(t, e);
            a.axis = a.axis || "x";
            var i = at(a.axis)
              , r = a.intersect ? et(e, n) : tt(e, n, !1, i)
              , s = [];
            return r.length ? (e._getSortedVisibleDatasetMetas().forEach((function(e) {
                var t = e.data[r[0]._index];
                t && !t._view.skip && s.push(t)
            }
            )),
            s) : []
        }
        var it = {
            modes: {
                single: function(e, t) {
                    var a = Qe(t, e)
                      , n = [];
                    return Xe(e, (function(e) {
                        if (e.inRange(a.x, a.y))
                            return n.push(e),
                            n
                    }
                    )),
                    n.slice(0, 1)
                },
                label: nt,
                index: nt,
                dataset: function(e, t, a) {
                    var n = Qe(t, e);
                    a.axis = a.axis || "xy";
                    var i = at(a.axis)
                      , r = a.intersect ? et(e, n) : tt(e, n, !1, i);
                    return r.length > 0 && (r = e.getDatasetMeta(r[0]._datasetIndex).data),
                    r
                },
                "x-axis": function(e, t) {
                    return nt(e, t, {
                        intersect: !1
                    })
                },
                point: function(e, t) {
                    return et(e, Qe(t, e))
                },
                nearest: function(e, t, a) {
                    var n = Qe(t, e);
                    a.axis = a.axis || "xy";
                    var i = at(a.axis);
                    return tt(e, n, a.intersect, i)
                },
                x: function(e, t, a) {
                    var n = Qe(t, e)
                      , i = []
                      , r = !1;
                    return Xe(e, (function(e) {
                        e.inXRange(n.x) && i.push(e),
                        e.inRange(n.x, n.y) && (r = !0)
                    }
                    )),
                    a.intersect && !r && (i = []),
                    i
                },
                y: function(e, t, a) {
                    var n = Qe(t, e)
                      , i = []
                      , r = !1;
                    return Xe(e, (function(e) {
                        e.inYRange(n.y) && i.push(e),
                        e.inRange(n.x, n.y) && (r = !0)
                    }
                    )),
                    a.intersect && !r && (i = []),
                    i
                }
            }
        }
          , rt = R.extend;
        function st(e, t) {
            return R.where(e, (function(e) {
                return e.pos === t
            }
            ))
        }
        function ot(e, t) {
            return e.sort((function(e, a) {
                var n = t ? a : e
                  , i = t ? e : a;
                return n.weight === i.weight ? n.index - i.index : n.weight - i.weight
            }
            ))
        }
        function dt(e, t, a, n) {
            return Math.max(e[a], t[a]) + Math.max(e[n], t[n])
        }
        function lt(e, t, a) {
            var n, i, r = a.box, s = e.maxPadding;
            if (a.size && (e[a.pos] -= a.size),
            a.size = a.horizontal ? r.height : r.width,
            e[a.pos] += a.size,
            r.getPadding) {
                var o = r.getPadding();
                s.top = Math.max(s.top, o.top),
                s.left = Math.max(s.left, o.left),
                s.bottom = Math.max(s.bottom, o.bottom),
                s.right = Math.max(s.right, o.right)
            }
            if (n = t.outerWidth - dt(s, e, "left", "right"),
            i = t.outerHeight - dt(s, e, "top", "bottom"),
            n !== e.w || i !== e.h)
                return e.w = n,
                e.h = i,
                a.horizontal ? n !== e.w : i !== e.h
        }
        function ut(e, t) {
            var a = t.maxPadding;
            function n(e) {
                var n = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                return e.forEach((function(e) {
                    n[e] = Math.max(t[e], a[e])
                }
                )),
                n
            }
            return n(e ? ["left", "right"] : ["top", "bottom"])
        }
        function _t(e, t, a) {
            var n, i, r, s, o, d, l = [];
            for (n = 0,
            i = e.length; n < i; ++n)
                (s = (r = e[n]).box).update(r.width || t.w, r.height || t.h, ut(r.horizontal, t)),
                lt(t, a, r) && (d = !0,
                l.length && (o = !0)),
                s.fullWidth || l.push(r);
            return o && _t(l, t, a) || d
        }
        function mt(e, t, a) {
            var n, i, r, s, o = a.padding, d = t.x, l = t.y;
            for (n = 0,
            i = e.length; n < i; ++n)
                s = (r = e[n]).box,
                r.horizontal ? (s.left = s.fullWidth ? o.left : t.left,
                s.right = s.fullWidth ? a.outerWidth - o.right : t.left + t.w,
                s.top = l,
                s.bottom = l + s.height,
                s.width = s.right - s.left,
                l = s.bottom) : (s.left = d,
                s.right = d + s.width,
                s.top = t.top,
                s.bottom = t.top + t.h,
                s.height = s.bottom - s.top,
                d = s.right);
            t.x = d,
            t.y = l
        }
        W._set("global", {
            layout: {
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
        });
        var ht, ct = {
            defaults: {},
            addBox: function(e, t) {
                e.boxes || (e.boxes = []),
                t.fullWidth = t.fullWidth || !1,
                t.position = t.position || "top",
                t.weight = t.weight || 0,
                t._layers = t._layers || function() {
                    return [{
                        z: 0,
                        draw: function() {
                            t.draw.apply(t, arguments)
                        }
                    }]
                }
                ,
                e.boxes.push(t)
            },
            removeBox: function(e, t) {
                var a = e.boxes ? e.boxes.indexOf(t) : -1;
                -1 !== a && e.boxes.splice(a, 1)
            },
            configure: function(e, t, a) {
                for (var n, i = ["fullWidth", "position", "weight"], r = i.length, s = 0; s < r; ++s)
                    n = i[s],
                    a.hasOwnProperty(n) && (t[n] = a[n])
            },
            update: function(e, t, a) {
                if (e) {
                    var n = e.options.layout || {}
                      , i = R.options.toPadding(n.padding)
                      , r = t - i.width
                      , s = a - i.height
                      , o = function(e) {
                        var t = function(e) {
                            var t, a, n, i = [];
                            for (t = 0,
                            a = (e || []).length; t < a; ++t)
                                n = e[t],
                                i.push({
                                    index: t,
                                    box: n,
                                    pos: n.position,
                                    horizontal: n.isHorizontal(),
                                    weight: n.weight
                                });
                            return i
                        }(e)
                          , a = ot(st(t, "left"), !0)
                          , n = ot(st(t, "right"))
                          , i = ot(st(t, "top"), !0)
                          , r = ot(st(t, "bottom"));
                        return {
                            leftAndTop: a.concat(i),
                            rightAndBottom: n.concat(r),
                            chartArea: st(t, "chartArea"),
                            vertical: a.concat(n),
                            horizontal: i.concat(r)
                        }
                    }(e.boxes)
                      , d = o.vertical
                      , l = o.horizontal
                      , u = Object.freeze({
                        outerWidth: t,
                        outerHeight: a,
                        padding: i,
                        availableWidth: r,
                        vBoxMaxWidth: r / 2 / d.length,
                        hBoxMaxHeight: s / 2
                    })
                      , _ = rt({
                        maxPadding: rt({}, i),
                        w: r,
                        h: s,
                        x: i.left,
                        y: i.top
                    }, i);
                    !function(e, t) {
                        var a, n, i;
                        for (a = 0,
                        n = e.length; a < n; ++a)
                            (i = e[a]).width = i.horizontal ? i.box.fullWidth && t.availableWidth : t.vBoxMaxWidth,
                            i.height = i.horizontal && t.hBoxMaxHeight
                    }(d.concat(l), u),
                    _t(d, _, u),
                    _t(l, _, u) && _t(d, _, u),
                    function(e) {
                        var t = e.maxPadding;
                        function a(a) {
                            var n = Math.max(t[a] - e[a], 0);
                            return e[a] += n,
                            n
                        }
                        e.y += a("top"),
                        e.x += a("left"),
                        a("right"),
                        a("bottom")
                    }(_),
                    mt(o.leftAndTop, _, u),
                    _.x += _.w,
                    _.y += _.h,
                    mt(o.rightAndBottom, _, u),
                    e.chartArea = {
                        left: _.left,
                        top: _.top,
                        right: _.left + _.w,
                        bottom: _.top + _.h
                    },
                    R.each(o.chartArea, (function(t) {
                        var a = t.box;
                        rt(a, e.chartArea),
                        a.update(_.w, _.h)
                    }
                    ))
                }
            }
        }, ft = (ht = Object.freeze({
            __proto__: null,
            default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
        })) && ht.default || ht, Mt = "$chartjs", pt = "chartjs-size-monitor", gt = "chartjs-render-monitor", yt = "chartjs-render-animation", Lt = ["animationstart", "webkitAnimationStart"], vt = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };
        function Yt(e, t) {
            var a = R.getStyle(e, t)
              , n = a && a.match(/^(\d+)(\.\d+)?px$/);
            return n ? Number(n[1]) : void 0
        }
        var kt = !!function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("e", null, t)
            } catch (e) {}
            return e
        }() && {
            passive: !0
        };
        function bt(e, t, a) {
            e.addEventListener(t, a, kt)
        }
        function Dt(e, t, a) {
            e.removeEventListener(t, a, kt)
        }
        function wt(e, t, a, n, i) {
            return {
                type: e,
                chart: t,
                native: i || null,
                x: void 0 !== a ? a : null,
                y: void 0 !== n ? n : null
            }
        }
        function xt(e) {
            var t = document.createElement("div");
            return t.className = e || "",
            t
        }
        function Tt(e, t, a) {
            var n, i, r, s, o = e[Mt] || (e[Mt] = {}), d = o.resizer = function(e) {
                var t = xt(pt)
                  , a = xt(pt + "-expand")
                  , n = xt(pt + "-shrink");
                a.appendChild(xt()),
                n.appendChild(xt()),
                t.appendChild(a),
                t.appendChild(n),
                t._reset = function() {
                    a.scrollLeft = 1e6,
                    a.scrollTop = 1e6,
                    n.scrollLeft = 1e6,
                    n.scrollTop = 1e6
                }
                ;
                var i = function() {
                    t._reset(),
                    e()
                };
                return bt(a, "scroll", i.bind(a, "expand")),
                bt(n, "scroll", i.bind(n, "shrink")),
                t
            }((n = function() {
                if (o.resizer) {
                    var n = a.options.maintainAspectRatio && e.parentNode
                      , i = n ? n.clientWidth : 0;
                    t(wt("resize", a)),
                    n && n.clientWidth < i && a.canvas && t(wt("resize", a))
                }
            }
            ,
            r = !1,
            s = [],
            function() {
                s = Array.prototype.slice.call(arguments),
                i = i || this,
                r || (r = !0,
                R.requestAnimFrame.call(window, (function() {
                    r = !1,
                    n.apply(i, s)
                }
                )))
            }
            ));
            !function(e, t) {
                var a = e[Mt] || (e[Mt] = {})
                  , n = a.renderProxy = function(e) {
                    e.animationName === yt && t()
                }
                ;
                R.each(Lt, (function(t) {
                    bt(e, t, n)
                }
                )),
                a.reflow = !!e.offsetParent,
                e.classList.add(gt)
            }(e, (function() {
                if (o.resizer) {
                    var t = e.parentNode;
                    t && t !== d.parentNode && t.insertBefore(d, t.firstChild),
                    d._reset()
                }
            }
            ))
        }
        function St(e) {
            var t = e[Mt] || {}
              , a = t.resizer;
            delete t.resizer,
            function(e) {
                var t = e[Mt] || {}
                  , a = t.renderProxy;
                a && (R.each(Lt, (function(t) {
                    Dt(e, t, a)
                }
                )),
                delete t.renderProxy),
                e.classList.remove(gt)
            }(e),
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        var Ht = {
            disableCSSInjection: !1,
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            _ensureLoaded: function(e) {
                if (!this.disableCSSInjection) {
                    var t = e.getRootNode ? e.getRootNode() : document;
                    !function(e, t) {
                        var a = e[Mt] || (e[Mt] = {});
                        if (!a.containsStyles) {
                            a.containsStyles = !0,
                            t = "/* Chart.js */\n" + t;
                            var n = document.createElement("style");
                            n.setAttribute("type", "text/css"),
                            n.appendChild(document.createTextNode(t)),
                            e.appendChild(n)
                        }
                    }(t.host ? t : document.head, ft)
                }
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]),
                e && e.canvas && (e = e.canvas);
                var a = e && e.getContext && e.getContext("2d");
                return a && a.canvas === e ? (this._ensureLoaded(e),
                function(e, t) {
                    var a = e.style
                      , n = e.getAttribute("height")
                      , i = e.getAttribute("width");
                    if (e[Mt] = {
                        initial: {
                            height: n,
                            width: i,
                            style: {
                                display: a.display,
                                height: a.height,
                                width: a.width
                            }
                        }
                    },
                    a.display = a.display || "block",
                    null === i || "" === i) {
                        var r = Yt(e, "width");
                        void 0 !== r && (e.width = r)
                    }
                    if (null === n || "" === n)
                        if ("" === e.style.height)
                            e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var s = Yt(e, "height");
                            void 0 !== r && (e.height = s)
                        }
                }(e, t),
                a) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[Mt]) {
                    var a = t[Mt].initial;
                    ["height", "width"].forEach((function(e) {
                        var n = a[e];
                        R.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
                    }
                    )),
                    R.each(a.style || {}, (function(e, a) {
                        t.style[a] = e
                    }
                    )),
                    t.width = t.width,
                    delete t[Mt]
                }
            },
            addEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var i = a[Mt] || (a[Mt] = {});
                    bt(n, t, (i.proxies || (i.proxies = {}))[e.id + "_" + t] = function(t) {
                        a(function(e, t) {
                            var a = vt[e.type] || e.type
                              , n = R.getRelativePosition(e, t);
                            return wt(a, t, n.x, n.y, e)
                        }(t, e))
                    }
                    )
                } else
                    Tt(n, a, e)
            },
            removeEventListener: function(e, t, a) {
                var n = e.canvas;
                if ("resize" !== t) {
                    var i = ((a[Mt] || {}).proxies || {})[e.id + "_" + t];
                    i && Dt(n, t, i)
                } else
                    St(n)
            }
        };
        R.addEvent = bt,
        R.removeEvent = Dt;
        var jt = Ht._enabled ? Ht : {
            acquireContext: function(e) {
                return e && e.canvas && (e = e.canvas),
                e && e.getContext("2d") || null
            }
        }
          , Pt = R.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, jt);
        W._set("global", {
            plugins: {}
        });
        var Ot = {
            _plugins: [],
            _cacheId: 0,
            register: function(e) {
                var t = this._plugins;
                [].concat(e).forEach((function(e) {
                    -1 === t.indexOf(e) && t.push(e)
                }
                )),
                this._cacheId++
            },
            unregister: function(e) {
                var t = this._plugins;
                [].concat(e).forEach((function(e) {
                    var a = t.indexOf(e);
                    -1 !== a && t.splice(a, 1)
                }
                )),
                this._cacheId++
            },
            clear: function() {
                this._plugins = [],
                this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(e, t, a) {
                var n, i, r, s, o, d = this.descriptors(e), l = d.length;
                for (n = 0; n < l; ++n)
                    if ("function" == typeof (o = (r = (i = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(i.options),
                    !1 === o.apply(r, s)))
                        return !1;
                return !0
            },
            descriptors: function(e) {
                var t = e.$plugins || (e.$plugins = {});
                if (t.id === this._cacheId)
                    return t.descriptors;
                var a = []
                  , n = []
                  , i = e && e.config || {}
                  , r = i.options && i.options.plugins || {};
                return this._plugins.concat(i.plugins || []).forEach((function(e) {
                    if (-1 === a.indexOf(e)) {
                        var t = e.id
                          , i = r[t];
                        !1 !== i && (!0 === i && (i = R.clone(W.global.plugins[t])),
                        a.push(e),
                        n.push({
                            plugin: e,
                            options: i || {}
                        }))
                    }
                }
                )),
                t.descriptors = n,
                t.id = this._cacheId,
                n
            },
            _invalidate: function(e) {
                delete e.$plugins
            }
        }
          , At = {
            constructors: {},
            defaults: {},
            registerScaleType: function(e, t, a) {
                this.constructors[e] = t,
                this.defaults[e] = R.clone(a)
            },
            getScaleConstructor: function(e) {
                return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
            },
            getScaleDefaults: function(e) {
                return this.defaults.hasOwnProperty(e) ? R.merge({}, [W.scale, this.defaults[e]]) : {}
            },
            updateScaleDefaults: function(e, t) {
                this.defaults.hasOwnProperty(e) && (this.defaults[e] = R.extend(this.defaults[e], t))
            },
            addScalesToLayout: function(e) {
                R.each(e.scales, (function(t) {
                    t.fullWidth = t.options.fullWidth,
                    t.position = t.options.position,
                    t.weight = t.options.weight,
                    ct.addBox(e, t)
                }
                ))
            }
        }
          , Ft = R.valueOrDefault
          , Wt = R.rtl.getRtlAdapter;
        W._set("global", {
            tooltips: {
                enabled: !0,
                custom: null,
                mode: "nearest",
                position: "average",
                intersect: !0,
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleFontColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyFontColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                displayColors: !0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                callbacks: {
                    beforeTitle: R.noop,
                    title: function(e, t) {
                        var a = ""
                          , n = t.labels
                          , i = n ? n.length : 0;
                        if (e.length > 0) {
                            var r = e[0];
                            r.label ? a = r.label : r.xLabel ? a = r.xLabel : i > 0 && r.index < i && (a = n[r.index])
                        }
                        return a
                    },
                    afterTitle: R.noop,
                    beforeBody: R.noop,
                    beforeLabel: R.noop,
                    label: function(e, t) {
                        var a = t.datasets[e.datasetIndex].label || "";
                        return a && (a += ": "),
                        R.isNullOrUndef(e.value) ? a += e.yLabel : a += e.value,
                        a
                    },
                    labelColor: function(e, t) {
                        var a = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                        return {
                            borderColor: a.borderColor,
                            backgroundColor: a.backgroundColor
                        }
                    },
                    labelTextColor: function() {
                        return this._options.bodyFontColor
                    },
                    afterLabel: R.noop,
                    afterBody: R.noop,
                    beforeFooter: R.noop,
                    footer: R.noop,
                    afterFooter: R.noop
                }
            }
        });
        var Ct = {
            average: function(e) {
                if (!e.length)
                    return !1;
                var t, a, n = 0, i = 0, r = 0;
                for (t = 0,
                a = e.length; t < a; ++t) {
                    var s = e[t];
                    if (s && s.hasValue()) {
                        var o = s.tooltipPosition();
                        n += o.x,
                        i += o.y,
                        ++r
                    }
                }
                return {
                    x: n / r,
                    y: i / r
                }
            },
            nearest: function(e, t) {
                var a, n, i, r = t.x, s = t.y, o = Number.POSITIVE_INFINITY;
                for (a = 0,
                n = e.length; a < n; ++a) {
                    var d = e[a];
                    if (d && d.hasValue()) {
                        var l = d.getCenterPoint()
                          , u = R.distanceBetweenPoints(t, l);
                        u < o && (o = u,
                        i = d)
                    }
                }
                if (i) {
                    var _ = i.tooltipPosition();
                    r = _.x,
                    s = _.y
                }
                return {
                    x: r,
                    y: s
                }
            }
        };
        function Et(e, t) {
            return t && (R.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)),
            e
        }
        function zt(e) {
            return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
        }
        function It(e) {
            var t = W.global;
            return {
                xPadding: e.xPadding,
                yPadding: e.yPadding,
                xAlign: e.xAlign,
                yAlign: e.yAlign,
                rtl: e.rtl,
                textDirection: e.textDirection,
                bodyFontColor: e.bodyFontColor,
                _bodyFontFamily: Ft(e.bodyFontFamily, t.defaultFontFamily),
                _bodyFontStyle: Ft(e.bodyFontStyle, t.defaultFontStyle),
                _bodyAlign: e.bodyAlign,
                bodyFontSize: Ft(e.bodyFontSize, t.defaultFontSize),
                bodySpacing: e.bodySpacing,
                titleFontColor: e.titleFontColor,
                _titleFontFamily: Ft(e.titleFontFamily, t.defaultFontFamily),
                _titleFontStyle: Ft(e.titleFontStyle, t.defaultFontStyle),
                titleFontSize: Ft(e.titleFontSize, t.defaultFontSize),
                _titleAlign: e.titleAlign,
                titleSpacing: e.titleSpacing,
                titleMarginBottom: e.titleMarginBottom,
                footerFontColor: e.footerFontColor,
                _footerFontFamily: Ft(e.footerFontFamily, t.defaultFontFamily),
                _footerFontStyle: Ft(e.footerFontStyle, t.defaultFontStyle),
                footerFontSize: Ft(e.footerFontSize, t.defaultFontSize),
                _footerAlign: e.footerAlign,
                footerSpacing: e.footerSpacing,
                footerMarginTop: e.footerMarginTop,
                caretSize: e.caretSize,
                cornerRadius: e.cornerRadius,
                backgroundColor: e.backgroundColor,
                opacity: 0,
                legendColorBackground: e.multiKeyBackground,
                displayColors: e.displayColors,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }
        }
        function Rt(e, t) {
            return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
        }
        function Nt(e) {
            return Et([], zt(e))
        }
        var Vt = q.extend({
            initialize: function() {
                this._model = It(this._options),
                this._lastActive = []
            },
            getTitle: function() {
                var e = this
                  , t = e._options
                  , a = t.callbacks
                  , n = a.beforeTitle.apply(e, arguments)
                  , i = a.title.apply(e, arguments)
                  , r = a.afterTitle.apply(e, arguments)
                  , s = [];
                return s = Et(s, zt(n)),
                s = Et(s, zt(i)),
                s = Et(s, zt(r))
            },
            getBeforeBody: function() {
                return Nt(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function(e, t) {
                var a = this
                  , n = a._options.callbacks
                  , i = [];
                return R.each(e, (function(e) {
                    var r = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    Et(r.before, zt(n.beforeLabel.call(a, e, t))),
                    Et(r.lines, n.label.call(a, e, t)),
                    Et(r.after, zt(n.afterLabel.call(a, e, t))),
                    i.push(r)
                }
                )),
                i
            },
            getAfterBody: function() {
                return Nt(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function() {
                var e = this
                  , t = e._options.callbacks
                  , a = t.beforeFooter.apply(e, arguments)
                  , n = t.footer.apply(e, arguments)
                  , i = t.afterFooter.apply(e, arguments)
                  , r = [];
                return r = Et(r, zt(a)),
                r = Et(r, zt(n)),
                r = Et(r, zt(i))
            },
            update: function(e) {
                var t, a, n, i, r, s, o, d, l, u, _ = this, m = _._options, h = _._model, c = _._model = It(m), f = _._active, M = _._data, p = {
                    xAlign: h.xAlign,
                    yAlign: h.yAlign
                }, g = {
                    x: h.x,
                    y: h.y
                }, y = {
                    width: h.width,
                    height: h.height
                }, L = {
                    x: h.caretX,
                    y: h.caretY
                };
                if (f.length) {
                    c.opacity = 1;
                    var v = []
                      , Y = [];
                    L = Ct[m.position].call(_, f, _._eventPosition);
                    var k = [];
                    for (t = 0,
                    a = f.length; t < a; ++t)
                        k.push((n = f[t],
                        i = void 0,
                        r = void 0,
                        s = void 0,
                        o = void 0,
                        d = void 0,
                        l = void 0,
                        u = void 0,
                        i = n._xScale,
                        r = n._yScale || n._scale,
                        s = n._index,
                        o = n._datasetIndex,
                        d = n._chart.getDatasetMeta(o).controller,
                        l = d._getIndexScale(),
                        u = d._getValueScale(),
                        {
                            xLabel: i ? i.getLabelForIndex(s, o) : "",
                            yLabel: r ? r.getLabelForIndex(s, o) : "",
                            label: l ? "" + l.getLabelForIndex(s, o) : "",
                            value: u ? "" + u.getLabelForIndex(s, o) : "",
                            index: s,
                            datasetIndex: o,
                            x: n._model.x,
                            y: n._model.y
                        }));
                    m.filter && (k = k.filter((function(e) {
                        return m.filter(e, M)
                    }
                    ))),
                    m.itemSort && (k = k.sort((function(e, t) {
                        return m.itemSort(e, t, M)
                    }
                    ))),
                    R.each(k, (function(e) {
                        v.push(m.callbacks.labelColor.call(_, e, _._chart)),
                        Y.push(m.callbacks.labelTextColor.call(_, e, _._chart))
                    }
                    )),
                    c.title = _.getTitle(k, M),
                    c.beforeBody = _.getBeforeBody(k, M),
                    c.body = _.getBody(k, M),
                    c.afterBody = _.getAfterBody(k, M),
                    c.footer = _.getFooter(k, M),
                    c.x = L.x,
                    c.y = L.y,
                    c.caretPadding = m.caretPadding,
                    c.labelColors = v,
                    c.labelTextColors = Y,
                    c.dataPoints = k,
                    y = function(e, t) {
                        var a = e._chart.ctx
                          , n = 2 * t.yPadding
                          , i = 0
                          , r = t.body
                          , s = r.reduce((function(e, t) {
                            return e + t.before.length + t.lines.length + t.after.length
                        }
                        ), 0);
                        s += t.beforeBody.length + t.afterBody.length;
                        var o = t.title.length
                          , d = t.footer.length
                          , l = t.titleFontSize
                          , u = t.bodyFontSize
                          , _ = t.footerFontSize;
                        n += o * l,
                        n += o ? (o - 1) * t.titleSpacing : 0,
                        n += o ? t.titleMarginBottom : 0,
                        n += s * u,
                        n += s ? (s - 1) * t.bodySpacing : 0,
                        n += d ? t.footerMarginTop : 0,
                        n += d * _,
                        n += d ? (d - 1) * t.footerSpacing : 0;
                        var m = 0
                          , h = function(e) {
                            i = Math.max(i, a.measureText(e).width + m)
                        };
                        return a.font = R.fontString(l, t._titleFontStyle, t._titleFontFamily),
                        R.each(t.title, h),
                        a.font = R.fontString(u, t._bodyFontStyle, t._bodyFontFamily),
                        R.each(t.beforeBody.concat(t.afterBody), h),
                        m = t.displayColors ? u + 2 : 0,
                        R.each(r, (function(e) {
                            R.each(e.before, h),
                            R.each(e.lines, h),
                            R.each(e.after, h)
                        }
                        )),
                        m = 0,
                        a.font = R.fontString(_, t._footerFontStyle, t._footerFontFamily),
                        R.each(t.footer, h),
                        {
                            width: i += 2 * t.xPadding,
                            height: n
                        }
                    }(this, c),
                    g = function(e, t, a, n) {
                        var i = e.x
                          , r = e.y
                          , s = e.caretSize
                          , o = e.caretPadding
                          , d = e.cornerRadius
                          , l = a.xAlign
                          , u = a.yAlign
                          , _ = s + o
                          , m = d + o;
                        return "right" === l ? i -= t.width : "center" === l && ((i -= t.width / 2) + t.width > n.width && (i = n.width - t.width),
                        i < 0 && (i = 0)),
                        "top" === u ? r += _ : r -= "bottom" === u ? t.height + _ : t.height / 2,
                        "center" === u ? "left" === l ? i += _ : "right" === l && (i -= _) : "left" === l ? i -= m : "right" === l && (i += m),
                        {
                            x: i,
                            y: r
                        }
                    }(c, y, p = function(e, t) {
                        var a, n, i, r, s, o = e._model, d = e._chart, l = e._chart.chartArea, u = "center", _ = "center";
                        o.y < t.height ? _ = "top" : o.y > d.height - t.height && (_ = "bottom");
                        var m = (l.left + l.right) / 2
                          , h = (l.top + l.bottom) / 2;
                        "center" === _ ? (a = function(e) {
                            return e <= m
                        }
                        ,
                        n = function(e) {
                            return e > m
                        }
                        ) : (a = function(e) {
                            return e <= t.width / 2
                        }
                        ,
                        n = function(e) {
                            return e >= d.width - t.width / 2
                        }
                        ),
                        i = function(e) {
                            return e + t.width + o.caretSize + o.caretPadding > d.width
                        }
                        ,
                        r = function(e) {
                            return e - t.width - o.caretSize - o.caretPadding < 0
                        }
                        ,
                        s = function(e) {
                            return e <= h ? "top" : "bottom"
                        }
                        ,
                        a(o.x) ? (u = "left",
                        i(o.x) && (u = "center",
                        _ = s(o.y))) : n(o.x) && (u = "right",
                        r(o.x) && (u = "center",
                        _ = s(o.y)));
                        var c = e._options;
                        return {
                            xAlign: c.xAlign ? c.xAlign : u,
                            yAlign: c.yAlign ? c.yAlign : _
                        }
                    }(this, y), _._chart)
                } else
                    c.opacity = 0;
                return c.xAlign = p.xAlign,
                c.yAlign = p.yAlign,
                c.x = g.x,
                c.y = g.y,
                c.width = y.width,
                c.height = y.height,
                c.caretX = L.x,
                c.caretY = L.y,
                _._model = c,
                e && m.custom && m.custom.call(_, c),
                _
            },
            drawCaret: function(e, t) {
                var a = this._chart.ctx
                  , n = this._view
                  , i = this.getCaretPosition(e, t, n);
                a.lineTo(i.x1, i.y1),
                a.lineTo(i.x2, i.y2),
                a.lineTo(i.x3, i.y3)
            },
            getCaretPosition: function(e, t, a) {
                var n, i, r, s, o, d, l = a.caretSize, u = a.cornerRadius, _ = a.xAlign, m = a.yAlign, h = e.x, c = e.y, f = t.width, M = t.height;
                if ("center" === m)
                    o = c + M / 2,
                    "left" === _ ? (i = (n = h) - l,
                    r = n,
                    s = o + l,
                    d = o - l) : (i = (n = h + f) + l,
                    r = n,
                    s = o - l,
                    d = o + l);
                else if ("left" === _ ? (n = (i = h + u + l) - l,
                r = i + l) : "right" === _ ? (n = (i = h + f - u - l) - l,
                r = i + l) : (n = (i = a.caretX) - l,
                r = i + l),
                "top" === m)
                    o = (s = c) - l,
                    d = s;
                else {
                    o = (s = c + M) + l,
                    d = s;
                    var p = r;
                    r = n,
                    n = p
                }
                return {
                    x1: n,
                    x2: i,
                    x3: r,
                    y1: s,
                    y2: o,
                    y3: d
                }
            },
            drawTitle: function(e, t, a) {
                var n, i, r, s = t.title, o = s.length;
                if (o) {
                    var d = Wt(t.rtl, t.x, t.width);
                    for (e.x = Rt(t, t._titleAlign),
                    a.textAlign = d.textAlign(t._titleAlign),
                    a.textBaseline = "middle",
                    n = t.titleFontSize,
                    i = t.titleSpacing,
                    a.fillStyle = t.titleFontColor,
                    a.font = R.fontString(n, t._titleFontStyle, t._titleFontFamily),
                    r = 0; r < o; ++r)
                        a.fillText(s[r], d.x(e.x), e.y + n / 2),
                        e.y += n + i,
                        r + 1 === o && (e.y += t.titleMarginBottom - i)
                }
            },
            drawBody: function(e, t, a) {
                var n, i, r, s, o, d, l, u, _ = t.bodyFontSize, m = t.bodySpacing, h = t._bodyAlign, c = t.body, f = t.displayColors, M = 0, p = f ? Rt(t, "left") : 0, g = Wt(t.rtl, t.x, t.width), y = function(t) {
                    a.fillText(t, g.x(e.x + M), e.y + _ / 2),
                    e.y += _ + m
                }, L = g.textAlign(h);
                for (a.textAlign = h,
                a.textBaseline = "middle",
                a.font = R.fontString(_, t._bodyFontStyle, t._bodyFontFamily),
                e.x = Rt(t, L),
                a.fillStyle = t.bodyFontColor,
                R.each(t.beforeBody, y),
                M = f && "right" !== L ? "center" === h ? _ / 2 + 1 : _ + 2 : 0,
                o = 0,
                l = c.length; o < l; ++o) {
                    for (n = c[o],
                    i = t.labelTextColors[o],
                    r = t.labelColors[o],
                    a.fillStyle = i,
                    R.each(n.before, y),
                    d = 0,
                    u = (s = n.lines).length; d < u; ++d) {
                        if (f) {
                            var v = g.x(p);
                            a.fillStyle = t.legendColorBackground,
                            a.fillRect(g.leftForLtr(v, _), e.y, _, _),
                            a.lineWidth = 1,
                            a.strokeStyle = r.borderColor,
                            a.strokeRect(g.leftForLtr(v, _), e.y, _, _),
                            a.fillStyle = r.backgroundColor,
                            a.fillRect(g.leftForLtr(g.xPlus(v, 1), _ - 2), e.y + 1, _ - 2, _ - 2),
                            a.fillStyle = i
                        }
                        y(s[d])
                    }
                    R.each(n.after, y)
                }
                M = 0,
                R.each(t.afterBody, y),
                e.y -= m
            },
            drawFooter: function(e, t, a) {
                var n, i, r = t.footer, s = r.length;
                if (s) {
                    var o = Wt(t.rtl, t.x, t.width);
                    for (e.x = Rt(t, t._footerAlign),
                    e.y += t.footerMarginTop,
                    a.textAlign = o.textAlign(t._footerAlign),
                    a.textBaseline = "middle",
                    n = t.footerFontSize,
                    a.fillStyle = t.footerFontColor,
                    a.font = R.fontString(n, t._footerFontStyle, t._footerFontFamily),
                    i = 0; i < s; ++i)
                        a.fillText(r[i], o.x(e.x), e.y + n / 2),
                        e.y += n + t.footerSpacing
                }
            },
            drawBackground: function(e, t, a, n) {
                a.fillStyle = t.backgroundColor,
                a.strokeStyle = t.borderColor,
                a.lineWidth = t.borderWidth;
                var i = t.xAlign
                  , r = t.yAlign
                  , s = e.x
                  , o = e.y
                  , d = n.width
                  , l = n.height
                  , u = t.cornerRadius;
                a.beginPath(),
                a.moveTo(s + u, o),
                "top" === r && this.drawCaret(e, n),
                a.lineTo(s + d - u, o),
                a.quadraticCurveTo(s + d, o, s + d, o + u),
                "center" === r && "right" === i && this.drawCaret(e, n),
                a.lineTo(s + d, o + l - u),
                a.quadraticCurveTo(s + d, o + l, s + d - u, o + l),
                "bottom" === r && this.drawCaret(e, n),
                a.lineTo(s + u, o + l),
                a.quadraticCurveTo(s, o + l, s, o + l - u),
                "center" === r && "left" === i && this.drawCaret(e, n),
                a.lineTo(s, o + u),
                a.quadraticCurveTo(s, o, s + u, o),
                a.closePath(),
                a.fill(),
                t.borderWidth > 0 && a.stroke()
            },
            draw: function() {
                var e = this._chart.ctx
                  , t = this._view;
                if (0 !== t.opacity) {
                    var a = {
                        width: t.width,
                        height: t.height
                    }
                      , n = {
                        x: t.x,
                        y: t.y
                    }
                      , i = Math.abs(t.opacity < .001) ? 0 : t.opacity
                      , r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                    this._options.enabled && r && (e.save(),
                    e.globalAlpha = i,
                    this.drawBackground(n, t, e, a),
                    n.y += t.yPadding,
                    R.rtl.overrideTextDirection(e, t.textDirection),
                    this.drawTitle(n, t, e),
                    this.drawBody(n, t, e),
                    this.drawFooter(n, t, e),
                    R.rtl.restoreTextDirection(e, t.textDirection),
                    e.restore())
                }
            },
            handleEvent: function(e) {
                var t, a = this, n = a._options;
                return a._lastActive = a._lastActive || [],
                "mouseout" === e.type ? a._active = [] : (a._active = a._chart.getElementsAtEventForMode(e, n.mode, n),
                n.reverse && a._active.reverse()),
                (t = !R.arrayEquals(a._active, a._lastActive)) && (a._lastActive = a._active,
                (n.enabled || n.custom) && (a._eventPosition = {
                    x: e.x,
                    y: e.y
                },
                a.update(!0),
                a.pivot())),
                t
            }
        })
          , Bt = Ct
          , Jt = Vt;
        Jt.positioners = Bt;
        var Ut = R.valueOrDefault;
        function Gt() {
            return R.merge({}, [].slice.call(arguments), {
                merger: function(e, t, a, n) {
                    if ("xAxes" === e || "yAxes" === e) {
                        var i, r, s, o = a[e].length;
                        for (t[e] || (t[e] = []),
                        i = 0; i < o; ++i)
                            s = a[e][i],
                            r = Ut(s.type, "xAxes" === e ? "category" : "linear"),
                            i >= t[e].length && t[e].push({}),
                            !t[e][i].type || s.type && s.type !== t[e][i].type ? R.merge(t[e][i], [At.getScaleDefaults(r), s]) : R.merge(t[e][i], s)
                    } else
                        R._merger(e, t, a, n)
                }
            })
        }
        function qt() {
            return R.merge({}, [].slice.call(arguments), {
                merger: function(e, t, a, n) {
                    var i = t[e] || {}
                      , r = a[e];
                    "scales" === e ? t[e] = Gt(i, r) : "scale" === e ? t[e] = R.merge(i, [At.getScaleDefaults(r.type), r]) : R._merger(e, t, a, n)
                }
            })
        }
        function Kt(e) {
            var t = e.options;
            R.each(e.scales, (function(t) {
                ct.removeBox(e, t)
            }
            )),
            t = qt(W.global, W[e.config.type], t),
            e.options = e.config.options = t,
            e.ensureScalesHaveIDs(),
            e.buildOrUpdateScales(),
            e.tooltip._options = t.tooltips,
            e.tooltip.initialize()
        }
        function $t(e, t, a) {
            var n, i = function(e) {
                return e.id === n
            };
            do {
                n = t + a++
            } while (R.findIndex(e, i) >= 0);
            return n
        }
        function Zt(e) {
            return "top" === e || "bottom" === e
        }
        function Qt(e, t) {
            return function(a, n) {
                return a[e] === n[e] ? a[t] - n[t] : a[e] - n[e]
            }
        }
        W._set("global", {
            elements: {},
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
                onHover: null,
                mode: "nearest",
                intersect: !0,
                animationDuration: 400
            },
            onClick: null,
            maintainAspectRatio: !0,
            responsive: !0,
            responsiveAnimationDuration: 0
        });
        var Xt = function(e, t) {
            return this.construct(e, t),
            this
        };
        R.extend(Xt.prototype, {
            construct: function(e, t) {
                var a = this;
                t = function(e) {
                    var t = (e = e || {}).data = e.data || {};
                    return t.datasets = t.datasets || [],
                    t.labels = t.labels || [],
                    e.options = qt(W.global, W[e.type], e.options || {}),
                    e
                }(t);
                var n = Pt.acquireContext(e, t)
                  , i = n && n.canvas
                  , r = i && i.height
                  , s = i && i.width;
                a.id = R.uid(),
                a.ctx = n,
                a.canvas = i,
                a.config = t,
                a.width = s,
                a.height = r,
                a.aspectRatio = r ? s / r : null,
                a.options = t.options,
                a._bufferedRender = !1,
                a._layers = [],
                a.chart = a,
                a.controller = a,
                Xt.instances[a.id] = a,
                Object.defineProperty(a, "data", {
                    get: function() {
                        return a.config.data
                    },
                    set: function(e) {
                        a.config.data = e
                    }
                }),
                n && i ? (a.initialize(),
                a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            },
            initialize: function() {
                var e = this;
                return Ot.notify(e, "beforeInit"),
                R.retinaScale(e, e.options.devicePixelRatio),
                e.bindEvents(),
                e.options.responsive && e.resize(!0),
                e.initToolTip(),
                Ot.notify(e, "afterInit"),
                e
            },
            clear: function() {
                return R.canvas.clear(this),
                this
            },
            stop: function() {
                return Z.cancelAnimation(this),
                this
            },
            resize: function(e) {
                var t = this
                  , a = t.options
                  , n = t.canvas
                  , i = a.maintainAspectRatio && t.aspectRatio || null
                  , r = Math.max(0, Math.floor(R.getMaximumWidth(n)))
                  , s = Math.max(0, Math.floor(i ? r / i : R.getMaximumHeight(n)));
                if ((t.width !== r || t.height !== s) && (n.width = t.width = r,
                n.height = t.height = s,
                n.style.width = r + "px",
                n.style.height = s + "px",
                R.retinaScale(t, a.devicePixelRatio),
                !e)) {
                    var o = {
                        width: r,
                        height: s
                    };
                    Ot.notify(t, "resize", [o]),
                    a.onResize && a.onResize(t, o),
                    t.stop(),
                    t.update({
                        duration: a.responsiveAnimationDuration
                    })
                }
            },
            ensureScalesHaveIDs: function() {
                var e = this.options
                  , t = e.scales || {}
                  , a = e.scale;
                R.each(t.xAxes, (function(e, a) {
                    e.id || (e.id = $t(t.xAxes, "x-axis-", a))
                }
                )),
                R.each(t.yAxes, (function(e, a) {
                    e.id || (e.id = $t(t.yAxes, "y-axis-", a))
                }
                )),
                a && (a.id = a.id || "scale")
            },
            buildOrUpdateScales: function() {
                var e = this
                  , t = e.options
                  , a = e.scales || {}
                  , n = []
                  , i = Object.keys(a).reduce((function(e, t) {
                    return e[t] = !1,
                    e
                }
                ), {});
                t.scales && (n = n.concat((t.scales.xAxes || []).map((function(e) {
                    return {
                        options: e,
                        dtype: "category",
                        dposition: "bottom"
                    }
                }
                )), (t.scales.yAxes || []).map((function(e) {
                    return {
                        options: e,
                        dtype: "linear",
                        dposition: "left"
                    }
                }
                )))),
                t.scale && n.push({
                    options: t.scale,
                    dtype: "radialLinear",
                    isDefault: !0,
                    dposition: "chartArea"
                }),
                R.each(n, (function(t) {
                    var n = t.options
                      , r = n.id
                      , s = Ut(n.type, t.dtype);
                    Zt(n.position) !== Zt(t.dposition) && (n.position = t.dposition),
                    i[r] = !0;
                    var o = null;
                    if (r in a && a[r].type === s)
                        (o = a[r]).options = n,
                        o.ctx = e.ctx,
                        o.chart = e;
                    else {
                        var d = At.getScaleConstructor(s);
                        if (!d)
                            return;
                        o = new d({
                            id: r,
                            type: s,
                            options: n,
                            ctx: e.ctx,
                            chart: e
                        }),
                        a[o.id] = o
                    }
                    o.mergeTicksOptions(),
                    t.isDefault && (e.scale = o)
                }
                )),
                R.each(i, (function(e, t) {
                    e || delete a[t]
                }
                )),
                e.scales = a,
                At.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
                var e, t, a = this, n = [], i = a.data.datasets;
                for (e = 0,
                t = i.length; e < t; e++) {
                    var r = i[e]
                      , s = a.getDatasetMeta(e)
                      , o = r.type || a.config.type;
                    if (s.type && s.type !== o && (a.destroyDatasetMeta(e),
                    s = a.getDatasetMeta(e)),
                    s.type = o,
                    s.order = r.order || 0,
                    s.index = e,
                    s.controller)
                        s.controller.updateIndex(e),
                        s.controller.linkScales();
                    else {
                        var d = Ze[s.type];
                        if (void 0 === d)
                            throw new Error('"' + s.type + '" is not a chart type.');
                        s.controller = new d(a,e),
                        n.push(s.controller)
                    }
                }
                return n
            },
            resetElements: function() {
                var e = this;
                R.each(e.data.datasets, (function(t, a) {
                    e.getDatasetMeta(a).controller.reset()
                }
                ), e)
            },
            reset: function() {
                this.resetElements(),
                this.tooltip.initialize()
            },
            update: function(e) {
                var t, a, n = this;
                if (e && "object" == typeof e || (e = {
                    duration: e,
                    lazy: arguments[1]
                }),
                Kt(n),
                Ot._invalidate(n),
                !1 !== Ot.notify(n, "beforeUpdate")) {
                    n.tooltip._data = n.data;
                    var i = n.buildOrUpdateControllers();
                    for (t = 0,
                    a = n.data.datasets.length; t < a; t++)
                        n.getDatasetMeta(t).controller.buildOrUpdateElements();
                    n.updateLayout(),
                    n.options.animation && n.options.animation.duration && R.each(i, (function(e) {
                        e.reset()
                    }
                    )),
                    n.updateDatasets(),
                    n.tooltip.initialize(),
                    n.lastActive = [],
                    Ot.notify(n, "afterUpdate"),
                    n._layers.sort(Qt("z", "_idx")),
                    n._bufferedRender ? n._bufferedRequest = {
                        duration: e.duration,
                        easing: e.easing,
                        lazy: e.lazy
                    } : n.render(e)
                }
            },
            updateLayout: function() {
                var e = this;
                !1 !== Ot.notify(e, "beforeLayout") && (ct.update(this, this.width, this.height),
                e._layers = [],
                R.each(e.boxes, (function(t) {
                    t._configure && t._configure(),
                    e._layers.push.apply(e._layers, t._layers())
                }
                ), e),
                e._layers.forEach((function(e, t) {
                    e._idx = t
                }
                )),
                Ot.notify(e, "afterScaleUpdate"),
                Ot.notify(e, "afterLayout"))
            },
            updateDatasets: function() {
                if (!1 !== Ot.notify(this, "beforeDatasetsUpdate")) {
                    for (var e = 0, t = this.data.datasets.length; e < t; ++e)
                        this.updateDataset(e);
                    Ot.notify(this, "afterDatasetsUpdate")
                }
            },
            updateDataset: function(e) {
                var t = this.getDatasetMeta(e)
                  , a = {
                    meta: t,
                    index: e
                };
                !1 !== Ot.notify(this, "beforeDatasetUpdate", [a]) && (t.controller._update(),
                Ot.notify(this, "afterDatasetUpdate", [a]))
            },
            render: function(e) {
                var t = this;
                e && "object" == typeof e || (e = {
                    duration: e,
                    lazy: arguments[1]
                });
                var a = t.options.animation
                  , n = Ut(e.duration, a && a.duration)
                  , i = e.lazy;
                if (!1 !== Ot.notify(t, "beforeRender")) {
                    var r = function(e) {
                        Ot.notify(t, "afterRender"),
                        R.callback(a && a.onComplete, [e], t)
                    };
                    if (a && n) {
                        var s = new $({
                            numSteps: n / 16.66,
                            easing: e.easing || a.easing,
                            render: function(e, t) {
                                var a = R.easing.effects[t.easing]
                                  , n = t.currentStep
                                  , i = n / t.numSteps;
                                e.draw(a(i), i, n)
                            },
                            onAnimationProgress: a.onProgress,
                            onAnimationComplete: r
                        });
                        Z.addAnimation(t, s, n, i)
                    } else
                        t.draw(),
                        r(new $({
                            numSteps: 0,
                            chart: t
                        }));
                    return t
                }
            },
            draw: function(e) {
                var t, a, n = this;
                if (n.clear(),
                R.isNullOrUndef(e) && (e = 1),
                n.transition(e),
                !(n.width <= 0 || n.height <= 0) && !1 !== Ot.notify(n, "beforeDraw", [e])) {
                    for (a = n._layers,
                    t = 0; t < a.length && a[t].z <= 0; ++t)
                        a[t].draw(n.chartArea);
                    for (n.drawDatasets(e); t < a.length; ++t)
                        a[t].draw(n.chartArea);
                    n._drawTooltip(e),
                    Ot.notify(n, "afterDraw", [e])
                }
            },
            transition: function(e) {
                for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t)
                    this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                this.tooltip.transition(e)
            },
            _getSortedDatasetMetas: function(e) {
                var t, a, n = [];
                for (t = 0,
                a = (this.data.datasets || []).length; t < a; ++t)
                    e && !this.isDatasetVisible(t) || n.push(this.getDatasetMeta(t));
                return n.sort(Qt("order", "index")),
                n
            },
            _getSortedVisibleDatasetMetas: function() {
                return this._getSortedDatasetMetas(!0)
            },
            drawDatasets: function(e) {
                var t, a;
                if (!1 !== Ot.notify(this, "beforeDatasetsDraw", [e])) {
                    for (a = (t = this._getSortedVisibleDatasetMetas()).length - 1; a >= 0; --a)
                        this.drawDataset(t[a], e);
                    Ot.notify(this, "afterDatasetsDraw", [e])
                }
            },
            drawDataset: function(e, t) {
                var a = {
                    meta: e,
                    index: e.index,
                    easingValue: t
                };
                !1 !== Ot.notify(this, "beforeDatasetDraw", [a]) && (e.controller.draw(t),
                Ot.notify(this, "afterDatasetDraw", [a]))
            },
            _drawTooltip: function(e) {
                var t = this.tooltip
                  , a = {
                    tooltip: t,
                    easingValue: e
                };
                !1 !== Ot.notify(this, "beforeTooltipDraw", [a]) && (t.draw(),
                Ot.notify(this, "afterTooltipDraw", [a]))
            },
            getElementAtEvent: function(e) {
                return it.modes.single(this, e)
            },
            getElementsAtEvent: function(e) {
                return it.modes.label(this, e, {
                    intersect: !0
                })
            },
            getElementsAtXAxis: function(e) {
                return it.modes["x-axis"](this, e, {
                    intersect: !0
                })
            },
            getElementsAtEventForMode: function(e, t, a) {
                var n = it.modes[t];
                return "function" == typeof n ? n(this, e, a) : []
            },
            getDatasetAtEvent: function(e) {
                return it.modes.dataset(this, e, {
                    intersect: !0
                })
            },
            getDatasetMeta: function(e) {
                var t = this.data.datasets[e];
                t._meta || (t._meta = {});
                var a = t._meta[this.id];
                return a || (a = t._meta[this.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: t.order || 0,
                    index: e
                }),
                a
            },
            getVisibleDatasetCount: function() {
                for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t)
                    this.isDatasetVisible(t) && e++;
                return e
            },
            isDatasetVisible: function(e) {
                var t = this.getDatasetMeta(e);
                return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
            },
            generateLegend: function() {
                return this.options.legendCallback(this)
            },
            destroyDatasetMeta: function(e) {
                var t = this.id
                  , a = this.data.datasets[e]
                  , n = a._meta && a._meta[t];
                n && (n.controller.destroy(),
                delete a._meta[t])
            },
            destroy: function() {
                var e, t, a = this, n = a.canvas;
                for (a.stop(),
                e = 0,
                t = a.data.datasets.length; e < t; ++e)
                    a.destroyDatasetMeta(e);
                n && (a.unbindEvents(),
                R.canvas.clear(a),
                Pt.releaseContext(a.ctx),
                a.canvas = null,
                a.ctx = null),
                Ot.notify(a, "destroy"),
                delete Xt.instances[a.id]
            },
            toBase64Image: function() {
                return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function() {
                var e = this;
                e.tooltip = new Jt({
                    _chart: e,
                    _chartInstance: e,
                    _data: e.data,
                    _options: e.options.tooltips
                },e)
            },
            bindEvents: function() {
                var e = this
                  , t = e._listeners = {}
                  , a = function() {
                    e.eventHandler.apply(e, arguments)
                };
                R.each(e.options.events, (function(n) {
                    Pt.addEventListener(e, n, a),
                    t[n] = a
                }
                )),
                e.options.responsive && (a = function() {
                    e.resize()
                }
                ,
                Pt.addEventListener(e, "resize", a),
                t.resize = a)
            },
            unbindEvents: function() {
                var e = this
                  , t = e._listeners;
                t && (delete e._listeners,
                R.each(t, (function(t, a) {
                    Pt.removeEventListener(e, a, t)
                }
                )))
            },
            updateHoverStyle: function(e, t, a) {
                var n, i, r, s = a ? "set" : "remove";
                for (i = 0,
                r = e.length; i < r; ++i)
                    (n = e[i]) && this.getDatasetMeta(n._datasetIndex).controller[s + "HoverStyle"](n);
                "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + s + "DatasetHoverStyle"]()
            },
            eventHandler: function(e) {
                var t = this
                  , a = t.tooltip;
                if (!1 !== Ot.notify(t, "beforeEvent", [e])) {
                    t._bufferedRender = !0,
                    t._bufferedRequest = null;
                    var n = t.handleEvent(e);
                    a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)),
                    Ot.notify(t, "afterEvent", [e]);
                    var i = t._bufferedRequest;
                    return i ? t.render(i) : n && !t.animating && (t.stop(),
                    t.render({
                        duration: t.options.hover.animationDuration,
                        lazy: !0
                    })),
                    t._bufferedRender = !1,
                    t._bufferedRequest = null,
                    t
                }
            },
            handleEvent: function(e) {
                var t, a = this, n = a.options || {}, i = n.hover;
                return a.lastActive = a.lastActive || [],
                "mouseout" === e.type ? a.active = [] : a.active = a.getElementsAtEventForMode(e, i.mode, i),
                R.callback(n.onHover || n.hover.onHover, [e.native, a.active], a),
                "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active),
                a.lastActive.length && a.updateHoverStyle(a.lastActive, i.mode, !1),
                a.active.length && i.mode && a.updateHoverStyle(a.active, i.mode, !0),
                t = !R.arrayEquals(a.active, a.lastActive),
                a.lastActive = a.active,
                t
            }
        }),
        Xt.instances = {};
        var ea = Xt;
        function ta() {
            throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
        }
        function aa(e) {
            this.options = e || {}
        }
        Xt.Controller = Xt,
        Xt.types = {},
        R.configMerge = qt,
        R.scaleMerge = Gt,
        R.extend(aa.prototype, {
            formats: ta,
            parse: ta,
            format: ta,
            add: ta,
            diff: ta,
            startOf: ta,
            endOf: ta,
            _create: function(e) {
                return e
            }
        }),
        aa.override = function(e) {
            R.extend(aa.prototype, e)
        }
        ;
        var na = {
            _date: aa
        }
          , ia = {
            formatters: {
                values: function(e) {
                    return R.isArray(e) ? e : "" + e
                },
                linear: function(e, t, a) {
                    var n = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                    Math.abs(n) > 1 && e !== Math.floor(e) && (n = e - Math.floor(e));
                    var i = R.log10(Math.abs(n))
                      , r = "";
                    if (0 !== e)
                        if (Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1])) < 1e-4) {
                            var s = R.log10(Math.abs(e))
                              , o = Math.floor(s) - Math.floor(i);
                            o = Math.max(Math.min(o, 20), 0),
                            r = e.toExponential(o)
                        } else {
                            var d = -1 * Math.floor(i);
                            d = Math.max(Math.min(d, 20), 0),
                            r = e.toFixed(d)
                        }
                    else
                        r = "0";
                    return r
                },
                logarithmic: function(e, t, a) {
                    var n = e / Math.pow(10, Math.floor(R.log10(e)));
                    return 0 === e ? "0" : 1 === n || 2 === n || 5 === n || 0 === t || t === a.length - 1 ? e.toExponential() : ""
                }
            }
        }
          , ra = R.isArray
          , sa = R.isNullOrUndef
          , oa = R.valueOrDefault
          , da = R.valueAtIndexOrDefault;
        function la(e, t, a) {
            var n, i = e.getTicks().length, r = Math.min(t, i - 1), s = e.getPixelForTick(r), o = e._startPixel, d = e._endPixel;
            if (!(a && (n = 1 === i ? Math.max(s - o, d - s) : 0 === t ? (e.getPixelForTick(1) - s) / 2 : (s - e.getPixelForTick(r - 1)) / 2,
            (s += r < t ? n : -n) < o - 1e-6 || s > d + 1e-6)))
                return s
        }
        function ua(e, t, a, n) {
            var i, r, s, o, d, l, u, _, m, h, c, f, M, p = a.length, g = [], y = [], L = [];
            for (i = 0; i < p; ++i) {
                if (o = a[i].label,
                d = a[i].major ? t.major : t.minor,
                e.font = l = d.string,
                u = n[l] = n[l] || {
                    data: {},
                    gc: []
                },
                _ = d.lineHeight,
                m = h = 0,
                sa(o) || ra(o)) {
                    if (ra(o))
                        for (r = 0,
                        s = o.length; r < s; ++r)
                            c = o[r],
                            sa(c) || ra(c) || (m = R.measureText(e, u.data, u.gc, m, c),
                            h += _)
                } else
                    m = R.measureText(e, u.data, u.gc, m, o),
                    h = _;
                g.push(m),
                y.push(h),
                L.push(_ / 2)
            }
            function v(e) {
                return {
                    width: g[e] || 0,
                    height: y[e] || 0,
                    offset: L[e] || 0
                }
            }
            return function(e, t) {
                R.each(e, (function(e) {
                    var a, n = e.gc, i = n.length / 2;
                    if (i > t) {
                        for (a = 0; a < i; ++a)
                            delete e.data[n[a]];
                        n.splice(0, i)
                    }
                }
                ))
            }(n, p),
            f = g.indexOf(Math.max.apply(null, g)),
            M = y.indexOf(Math.max.apply(null, y)),
            {
                first: v(0),
                last: v(p - 1),
                widest: v(f),
                highest: v(M)
            }
        }
        function _a(e) {
            return e.drawTicks ? e.tickMarkLength : 0
        }
        function ma(e) {
            var t, a;
            return e.display ? (t = R.options._parseFont(e),
            a = R.options.toPadding(e.padding),
            t.lineHeight + a.height) : 0
        }
        function ha(e, t) {
            return R.extend(R.options._parseFont({
                fontFamily: oa(t.fontFamily, e.fontFamily),
                fontSize: oa(t.fontSize, e.fontSize),
                fontStyle: oa(t.fontStyle, e.fontStyle),
                lineHeight: oa(t.lineHeight, e.lineHeight)
            }), {
                color: R.options.resolve([t.fontColor, e.fontColor, W.global.defaultFontColor])
            })
        }
        function ca(e) {
            var t = ha(e, e.minor);
            return {
                minor: t,
                major: e.major.enabled ? ha(e, e.major) : t
            }
        }
        function fa(e) {
            var t, a, n, i = [];
            for (a = 0,
            n = e.length; a < n; ++a)
                void 0 !== (t = e[a])._index && i.push(t);
            return i
        }
        function Ma(e, t, a, n) {
            var i, r, s, o, d = oa(a, 0), l = Math.min(oa(n, e.length), e.length), u = 0;
            for (t = Math.ceil(t),
            n && (t = (i = n - a) / Math.floor(i / t)),
            o = d; o < 0; )
                u++,
                o = Math.round(d + u * t);
            for (r = Math.max(d, 0); r < l; r++)
                s = e[r],
                r === o ? (s._index = r,
                u++,
                o = Math.round(d + u * t)) : delete s.label
        }
        W._set("scale", {
            display: !0,
            position: "left",
            offset: !1,
            gridLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                drawBorder: !0,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickMarkLength: 10,
                zeroLineWidth: 1,
                zeroLineColor: "rgba(0,0,0,0.25)",
                zeroLineBorderDash: [],
                zeroLineBorderDashOffset: 0,
                offsetGridLines: !1,
                borderDash: [],
                borderDashOffset: 0
            },
            scaleLabel: {
                display: !1,
                labelString: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                beginAtZero: !1,
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                padding: 0,
                reverse: !1,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 0,
                labelOffset: 0,
                callback: ia.formatters.values,
                minor: {},
                major: {}
            }
        });
        var pa = q.extend({
            zeroLineIndex: 0,
            getPadding: function() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            _getLabels: function() {
                var e = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
            },
            mergeTicksOptions: function() {},
            beforeUpdate: function() {
                R.callback(this.options.beforeUpdate, [this])
            },
            update: function(e, t, a) {
                var n, i, r, s, o, d = this, l = d.options.ticks, u = l.sampleSize;
                if (d.beforeUpdate(),
                d.maxWidth = e,
                d.maxHeight = t,
                d.margins = R.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, a),
                d._ticks = null,
                d.ticks = null,
                d._labelSizes = null,
                d._maxLabelLines = 0,
                d.longestLabelWidth = 0,
                d.longestTextCache = d.longestTextCache || {},
                d._gridLineItems = null,
                d._labelItems = null,
                d.beforeSetDimensions(),
                d.setDimensions(),
                d.afterSetDimensions(),
                d.beforeDataLimits(),
                d.determineDataLimits(),
                d.afterDataLimits(),
                d.beforeBuildTicks(),
                s = d.buildTicks() || [],
                (!(s = d.afterBuildTicks(s) || s) || !s.length) && d.ticks)
                    for (s = [],
                    n = 0,
                    i = d.ticks.length; n < i; ++n)
                        s.push({
                            value: d.ticks[n],
                            major: !1
                        });
                return d._ticks = s,
                o = u < s.length,
                r = d._convertTicksToLabels(o ? function(e, t) {
                    for (var a = [], n = e.length / t, i = 0, r = e.length; i < r; i += n)
                        a.push(e[Math.floor(i)]);
                    return a
                }(s, u) : s),
                d._configure(),
                d.beforeCalculateTickRotation(),
                d.calculateTickRotation(),
                d.afterCalculateTickRotation(),
                d.beforeFit(),
                d.fit(),
                d.afterFit(),
                d._ticksToDraw = l.display && (l.autoSkip || "auto" === l.source) ? d._autoSkip(s) : s,
                o && (r = d._convertTicksToLabels(d._ticksToDraw)),
                d.ticks = r,
                d.afterUpdate(),
                d.minSize
            },
            _configure: function() {
                var e, t, a = this, n = a.options.ticks.reverse;
                a.isHorizontal() ? (e = a.left,
                t = a.right) : (e = a.top,
                t = a.bottom,
                n = !n),
                a._startPixel = e,
                a._endPixel = t,
                a._reversePixels = n,
                a._length = t - e
            },
            afterUpdate: function() {
                R.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                R.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth,
                e.left = 0,
                e.right = e.width) : (e.height = e.maxHeight,
                e.top = 0,
                e.bottom = e.height),
                e.paddingLeft = 0,
                e.paddingTop = 0,
                e.paddingRight = 0,
                e.paddingBottom = 0
            },
            afterSetDimensions: function() {
                R.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                R.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: R.noop,
            afterDataLimits: function() {
                R.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                R.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: R.noop,
            afterBuildTicks: function(e) {
                var t = this;
                return ra(e) && e.length ? R.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = R.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks,
                e)
            },
            beforeTickToLabelConversion: function() {
                R.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var e = this.options.ticks;
                this.ticks = this.ticks.map(e.userCallback || e.callback, this)
            },
            afterTickToLabelConversion: function() {
                R.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                R.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var e, t, a, n, i, r, s, o = this, d = o.options, l = d.ticks, u = o.getTicks().length, _ = l.minRotation || 0, m = l.maxRotation, h = _;
                !o._isVisible() || !l.display || _ >= m || u <= 1 || !o.isHorizontal() ? o.labelRotation = _ : (t = (e = o._getLabelSizes()).widest.width,
                a = e.highest.height - e.highest.offset,
                n = Math.min(o.maxWidth, o.chart.width - t),
                t + 6 > (i = d.offset ? o.maxWidth / u : n / (u - 1)) && (i = n / (u - (d.offset ? .5 : 1)),
                r = o.maxHeight - _a(d.gridLines) - l.padding - ma(d.scaleLabel),
                s = Math.sqrt(t * t + a * a),
                h = R.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / i, 1)), Math.asin(Math.min(r / s, 1)) - Math.asin(a / s))),
                h = Math.max(_, Math.min(m, h))),
                o.labelRotation = h)
            },
            afterCalculateTickRotation: function() {
                R.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                R.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var e = this
                  , t = e.minSize = {
                    width: 0,
                    height: 0
                }
                  , a = e.chart
                  , n = e.options
                  , i = n.ticks
                  , r = n.scaleLabel
                  , s = n.gridLines
                  , o = e._isVisible()
                  , d = "bottom" === n.position
                  , l = e.isHorizontal();
                if (l ? t.width = e.maxWidth : o && (t.width = _a(s) + ma(r)),
                l ? o && (t.height = _a(s) + ma(r)) : t.height = e.maxHeight,
                i.display && o) {
                    var u = ca(i)
                      , _ = e._getLabelSizes()
                      , m = _.first
                      , h = _.last
                      , c = _.widest
                      , f = _.highest
                      , M = .4 * u.minor.lineHeight
                      , p = i.padding;
                    if (l) {
                        var g = 0 !== e.labelRotation
                          , y = R.toRadians(e.labelRotation)
                          , L = Math.cos(y)
                          , v = Math.sin(y)
                          , Y = v * c.width + L * (f.height - (g ? f.offset : 0)) + (g ? 0 : M);
                        t.height = Math.min(e.maxHeight, t.height + Y + p);
                        var k, b, D = e.getPixelForTick(0) - e.left, w = e.right - e.getPixelForTick(e.getTicks().length - 1);
                        g ? (k = d ? L * m.width + v * m.offset : v * (m.height - m.offset),
                        b = d ? v * (h.height - h.offset) : L * h.width + v * h.offset) : (k = m.width / 2,
                        b = h.width / 2),
                        e.paddingLeft = Math.max((k - D) * e.width / (e.width - D), 0) + 3,
                        e.paddingRight = Math.max((b - w) * e.width / (e.width - w), 0) + 3
                    } else {
                        var x = i.mirror ? 0 : c.width + p + M;
                        t.width = Math.min(e.maxWidth, t.width + x),
                        e.paddingTop = m.height / 2,
                        e.paddingBottom = h.height / 2
                    }
                }
                e.handleMargins(),
                l ? (e.width = e._length = a.width - e.margins.left - e.margins.right,
                e.height = t.height) : (e.width = t.width,
                e.height = e._length = a.height - e.margins.top - e.margins.bottom)
            },
            handleMargins: function() {
                var e = this;
                e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left),
                e.margins.top = Math.max(e.paddingTop, e.margins.top),
                e.margins.right = Math.max(e.paddingRight, e.margins.right),
                e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
            },
            afterFit: function() {
                R.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                var e = this.options.position;
                return "top" === e || "bottom" === e
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(e) {
                if (sa(e))
                    return NaN;
                if (("number" == typeof e || e instanceof Number) && !isFinite(e))
                    return NaN;
                if (e)
                    if (this.isHorizontal()) {
                        if (void 0 !== e.x)
                            return this.getRightValue(e.x)
                    } else if (void 0 !== e.y)
                        return this.getRightValue(e.y);
                return e
            },
            _convertTicksToLabels: function(e) {
                var t, a, n, i = this;
                for (i.ticks = e.map((function(e) {
                    return e.value
                }
                )),
                i.beforeTickToLabelConversion(),
                t = i.convertTicksToLabels(e) || i.ticks,
                i.afterTickToLabelConversion(),
                a = 0,
                n = e.length; a < n; ++a)
                    e[a].label = t[a];
                return t
            },
            _getLabelSizes: function() {
                var e = this
                  , t = e._labelSizes;
                return t || (e._labelSizes = t = ua(e.ctx, ca(e.options.ticks), e.getTicks(), e.longestTextCache),
                e.longestLabelWidth = t.widest.width),
                t
            },
            _parseValue: function(e) {
                var t, a, n, i;
                return ra(e) ? (t = +this.getRightValue(e[0]),
                a = +this.getRightValue(e[1]),
                n = Math.min(t, a),
                i = Math.max(t, a)) : (t = void 0,
                a = e = +this.getRightValue(e),
                n = e,
                i = e),
                {
                    min: n,
                    max: i,
                    start: t,
                    end: a
                }
            },
            _getScaleLabel: function(e) {
                var t = this._parseValue(e);
                return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
            },
            getLabelForIndex: R.noop,
            getPixelForValue: R.noop,
            getValueForPixel: R.noop,
            getPixelForTick: function(e) {
                var t = this.options.offset
                  , a = this._ticks.length
                  , n = 1 / Math.max(a - (t ? 0 : 1), 1);
                return e < 0 || e > a - 1 ? null : this.getPixelForDecimal(e * n + (t ? n / 2 : 0))
            },
            getPixelForDecimal: function(e) {
                return this._reversePixels && (e = 1 - e),
                this._startPixel + e * this._length
            },
            getDecimalForPixel: function(e) {
                var t = (e - this._startPixel) / this._length;
                return this._reversePixels ? 1 - t : t
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var e = this.min
                  , t = this.max;
                return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
            },
            _autoSkip: function(e) {
                var t, a, n, i, r = this.options.ticks, s = this._length, o = r.maxTicksLimit || s / this._tickSize() + 1, d = r.major.enabled ? function(e) {
                    var t, a, n = [];
                    for (t = 0,
                    a = e.length; t < a; t++)
                        e[t].major && n.push(t);
                    return n
                }(e) : [], l = d.length, u = d[0], _ = d[l - 1];
                if (l > o)
                    return function(e, t, a) {
                        var n, i, r = 0, s = t[0];
                        for (a = Math.ceil(a),
                        n = 0; n < e.length; n++)
                            i = e[n],
                            n === s ? (i._index = n,
                            s = t[++r * a]) : delete i.label
                    }(e, d, l / o),
                    fa(e);
                if (n = function(e, t, a, n) {
                    var i, r, s, o, d = function(e) {
                        var t, a, n = e.length;
                        if (n < 2)
                            return !1;
                        for (a = e[0],
                        t = 1; t < n; ++t)
                            if (e[t] - e[t - 1] !== a)
                                return !1;
                        return a
                    }(e), l = (t.length - 1) / n;
                    if (!d)
                        return Math.max(l, 1);
                    for (s = 0,
                    o = (i = R.math._factorize(d)).length - 1; s < o; s++)
                        if ((r = i[s]) > l)
                            return r;
                    return Math.max(l, 1)
                }(d, e, 0, o),
                l > 0) {
                    for (t = 0,
                    a = l - 1; t < a; t++)
                        Ma(e, n, d[t], d[t + 1]);
                    return i = l > 1 ? (_ - u) / (l - 1) : null,
                    Ma(e, n, R.isNullOrUndef(i) ? 0 : u - i, u),
                    Ma(e, n, _, R.isNullOrUndef(i) ? e.length : _ + i),
                    fa(e)
                }
                return Ma(e, n),
                fa(e)
            },
            _tickSize: function() {
                var e = this.options.ticks
                  , t = R.toRadians(this.labelRotation)
                  , a = Math.abs(Math.cos(t))
                  , n = Math.abs(Math.sin(t))
                  , i = this._getLabelSizes()
                  , r = e.autoSkipPadding || 0
                  , s = i ? i.widest.width + r : 0
                  , o = i ? i.highest.height + r : 0;
                return this.isHorizontal() ? o * a > s * n ? s / a : o / n : o * n < s * a ? o / a : s / n
            },
            _isVisible: function() {
                var e, t, a, n = this.chart, i = this.options.display;
                if ("auto" !== i)
                    return !!i;
                for (e = 0,
                t = n.data.datasets.length; e < t; ++e)
                    if (n.isDatasetVisible(e) && ((a = n.getDatasetMeta(e)).xAxisID === this.id || a.yAxisID === this.id))
                        return !0;
                return !1
            },
            _computeGridLineItems: function(e) {
                var t, a, n, i, r, s, o, d, l, u, _, m, h, c, f, M, p, g = this, y = g.chart, L = g.options, v = L.gridLines, Y = L.position, k = v.offsetGridLines, b = g.isHorizontal(), D = g._ticksToDraw, w = D.length + (k ? 1 : 0), x = _a(v), T = [], S = v.drawBorder ? da(v.lineWidth, 0, 0) : 0, H = S / 2, j = R._alignPixel, P = function(e) {
                    return j(y, e, S)
                };
                for ("top" === Y ? (t = P(g.bottom),
                o = g.bottom - x,
                l = t - H,
                _ = P(e.top) + H,
                h = e.bottom) : "bottom" === Y ? (t = P(g.top),
                _ = e.top,
                h = P(e.bottom) - H,
                o = t + H,
                l = g.top + x) : "left" === Y ? (t = P(g.right),
                s = g.right - x,
                d = t - H,
                u = P(e.left) + H,
                m = e.right) : (t = P(g.left),
                u = e.left,
                m = P(e.right) - H,
                s = t + H,
                d = g.left + x),
                a = 0; a < w; ++a)
                    n = D[a] || {},
                    sa(n.label) && a < D.length || (a === g.zeroLineIndex && L.offset === k ? (c = v.zeroLineWidth,
                    f = v.zeroLineColor,
                    M = v.zeroLineBorderDash || [],
                    p = v.zeroLineBorderDashOffset || 0) : (c = da(v.lineWidth, a, 1),
                    f = da(v.color, a, "rgba(0,0,0,0.1)"),
                    M = v.borderDash || [],
                    p = v.borderDashOffset || 0),
                    void 0 !== (i = la(g, n._index || a, k)) && (r = j(y, i, c),
                    b ? s = d = u = m = r : o = l = _ = h = r,
                    T.push({
                        tx1: s,
                        ty1: o,
                        tx2: d,
                        ty2: l,
                        x1: u,
                        y1: _,
                        x2: m,
                        y2: h,
                        width: c,
                        color: f,
                        borderDash: M,
                        borderDashOffset: p
                    })));
                return T.ticksLength = w,
                T.borderValue = t,
                T
            },
            _computeLabelItems: function() {
                var e, t, a, n, i, r, s, o, d, l, u, _, m = this, h = m.options, c = h.ticks, f = h.position, M = c.mirror, p = m.isHorizontal(), g = m._ticksToDraw, y = ca(c), L = c.padding, v = _a(h.gridLines), Y = -R.toRadians(m.labelRotation), k = [];
                for ("top" === f ? (r = m.bottom - v - L,
                s = Y ? "left" : "center") : "bottom" === f ? (r = m.top + v + L,
                s = Y ? "right" : "center") : "left" === f ? (i = m.right - (M ? 0 : v) - L,
                s = M ? "left" : "right") : (i = m.left + (M ? 0 : v) + L,
                s = M ? "right" : "left"),
                e = 0,
                t = g.length; e < t; ++e)
                    n = (a = g[e]).label,
                    sa(n) || (o = m.getPixelForTick(a._index || e) + c.labelOffset,
                    l = (d = a.major ? y.major : y.minor).lineHeight,
                    u = ra(n) ? n.length : 1,
                    p ? (i = o,
                    _ = "top" === f ? ((Y ? 1 : .5) - u) * l : (Y ? 0 : .5) * l) : (r = o,
                    _ = (1 - u) * l / 2),
                    k.push({
                        x: i,
                        y: r,
                        rotation: Y,
                        label: n,
                        font: d,
                        textOffset: _,
                        textAlign: s
                    }));
                return k
            },
            _drawGrid: function(e) {
                var t = this
                  , a = t.options.gridLines;
                if (a.display) {
                    var n, i, r, s, o, d = t.ctx, l = t.chart, u = R._alignPixel, _ = a.drawBorder ? da(a.lineWidth, 0, 0) : 0, m = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
                    for (r = 0,
                    s = m.length; r < s; ++r)
                        n = (o = m[r]).width,
                        i = o.color,
                        n && i && (d.save(),
                        d.lineWidth = n,
                        d.strokeStyle = i,
                        d.setLineDash && (d.setLineDash(o.borderDash),
                        d.lineDashOffset = o.borderDashOffset),
                        d.beginPath(),
                        a.drawTicks && (d.moveTo(o.tx1, o.ty1),
                        d.lineTo(o.tx2, o.ty2)),
                        a.drawOnChartArea && (d.moveTo(o.x1, o.y1),
                        d.lineTo(o.x2, o.y2)),
                        d.stroke(),
                        d.restore());
                    if (_) {
                        var h, c, f, M, p = _, g = da(a.lineWidth, m.ticksLength - 1, 1), y = m.borderValue;
                        t.isHorizontal() ? (h = u(l, t.left, p) - p / 2,
                        c = u(l, t.right, g) + g / 2,
                        f = M = y) : (f = u(l, t.top, p) - p / 2,
                        M = u(l, t.bottom, g) + g / 2,
                        h = c = y),
                        d.lineWidth = _,
                        d.strokeStyle = da(a.color, 0),
                        d.beginPath(),
                        d.moveTo(h, f),
                        d.lineTo(c, M),
                        d.stroke()
                    }
                }
            },
            _drawLabels: function() {
                var e = this;
                if (e.options.ticks.display) {
                    var t, a, n, i, r, s, o, d, l = e.ctx, u = e._labelItems || (e._labelItems = e._computeLabelItems());
                    for (t = 0,
                    n = u.length; t < n; ++t) {
                        if (s = (r = u[t]).font,
                        l.save(),
                        l.translate(r.x, r.y),
                        l.rotate(r.rotation),
                        l.font = s.string,
                        l.fillStyle = s.color,
                        l.textBaseline = "middle",
                        l.textAlign = r.textAlign,
                        o = r.label,
                        d = r.textOffset,
                        ra(o))
                            for (a = 0,
                            i = o.length; a < i; ++a)
                                l.fillText("" + o[a], 0, d),
                                d += s.lineHeight;
                        else
                            l.fillText(o, 0, d);
                        l.restore()
                    }
                }
            },
            _drawTitle: function() {
                var e = this
                  , t = e.ctx
                  , a = e.options
                  , n = a.scaleLabel;
                if (n.display) {
                    var i, r, s = oa(n.fontColor, W.global.defaultFontColor), o = R.options._parseFont(n), d = R.options.toPadding(n.padding), l = o.lineHeight / 2, u = a.position, _ = 0;
                    if (e.isHorizontal())
                        i = e.left + e.width / 2,
                        r = "bottom" === u ? e.bottom - l - d.bottom : e.top + l + d.top;
                    else {
                        var m = "left" === u;
                        i = m ? e.left + l + d.top : e.right - l - d.top,
                        r = e.top + e.height / 2,
                        _ = m ? -.5 * Math.PI : .5 * Math.PI
                    }
                    t.save(),
                    t.translate(i, r),
                    t.rotate(_),
                    t.textAlign = "center",
                    t.textBaseline = "middle",
                    t.fillStyle = s,
                    t.font = o.string,
                    t.fillText(n.labelString, 0, 0),
                    t.restore()
                }
            },
            draw: function(e) {
                this._isVisible() && (this._drawGrid(e),
                this._drawTitle(),
                this._drawLabels())
            },
            _layers: function() {
                var e = this
                  , t = e.options
                  , a = t.ticks && t.ticks.z || 0
                  , n = t.gridLines && t.gridLines.z || 0;
                return e._isVisible() && a !== n && e.draw === e._draw ? [{
                    z: n,
                    draw: function() {
                        e._drawGrid.apply(e, arguments),
                        e._drawTitle.apply(e, arguments)
                    }
                }, {
                    z: a,
                    draw: function() {
                        e._drawLabels.apply(e, arguments)
                    }
                }] : [{
                    z: a,
                    draw: function() {
                        e.draw.apply(e, arguments)
                    }
                }]
            },
            _getMatchingVisibleMetas: function(e) {
                var t = this
                  , a = t.isHorizontal();
                return t.chart._getSortedVisibleDatasetMetas().filter((function(n) {
                    return (!e || n.type === e) && (a ? n.xAxisID === t.id : n.yAxisID === t.id)
                }
                ))
            }
        });
        pa.prototype._draw = pa.prototype.draw;
        var ga = pa
          , ya = R.isNullOrUndef
          , La = ga.extend({
            determineDataLimits: function() {
                var e, t = this, a = t._getLabels(), n = t.options.ticks, i = n.min, r = n.max, s = 0, o = a.length - 1;
                void 0 !== i && (e = a.indexOf(i)) >= 0 && (s = e),
                void 0 !== r && (e = a.indexOf(r)) >= 0 && (o = e),
                t.minIndex = s,
                t.maxIndex = o,
                t.min = a[s],
                t.max = a[o]
            },
            buildTicks: function() {
                var e = this._getLabels()
                  , t = this.minIndex
                  , a = this.maxIndex;
                this.ticks = 0 === t && a === e.length - 1 ? e : e.slice(t, a + 1)
            },
            getLabelForIndex: function(e, t) {
                var a = this.chart;
                return a.getDatasetMeta(t).controller._getValueScaleId() === this.id ? this.getRightValue(a.data.datasets[t].data[e]) : this._getLabels()[e]
            },
            _configure: function() {
                var e = this
                  , t = e.options.offset
                  , a = e.ticks;
                ga.prototype._configure.call(e),
                e.isHorizontal() || (e._reversePixels = !e._reversePixels),
                a && (e._startValue = e.minIndex - (t ? .5 : 0),
                e._valueRange = Math.max(a.length - (t ? 0 : 1), 1))
            },
            getPixelForValue: function(e, t, a) {
                var n, i, r, s = this;
                return ya(t) || ya(a) || (e = s.chart.data.datasets[a].data[t]),
                ya(e) || (n = s.isHorizontal() ? e.x : e.y),
                (void 0 !== n || void 0 !== e && isNaN(t)) && (i = s._getLabels(),
                e = R.valueOrDefault(n, e),
                t = -1 !== (r = i.indexOf(e)) ? r : t,
                isNaN(t) && (t = e)),
                s.getPixelForDecimal((t - s._startValue) / s._valueRange)
            },
            getPixelForTick: function(e) {
                var t = this.ticks;
                return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
            },
            getValueForPixel: function(e) {
                var t = Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
                return Math.min(Math.max(t, 0), this.ticks.length - 1)
            },
            getBasePixel: function() {
                return this.bottom
            }
        })
          , va = {
            position: "bottom"
        };
        La._defaults = va;
        var Ya = R.noop
          , ka = R.isNullOrUndef
          , ba = ga.extend({
            getRightValue: function(e) {
                return "string" == typeof e ? +e : ga.prototype.getRightValue.call(this, e)
            },
            handleTickRangeOptions: function() {
                var e = this
                  , t = e.options.ticks;
                if (t.beginAtZero) {
                    var a = R.sign(e.min)
                      , n = R.sign(e.max);
                    a < 0 && n < 0 ? e.max = 0 : a > 0 && n > 0 && (e.min = 0)
                }
                var i = void 0 !== t.min || void 0 !== t.suggestedMin
                  , r = void 0 !== t.max || void 0 !== t.suggestedMax;
                void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)),
                void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)),
                i !== r && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1),
                e.min === e.max && (e.max++,
                t.beginAtZero || e.min--)
            },
            getTickLimit: function() {
                var e, t = this.options.ticks, a = t.stepSize, n = t.maxTicksLimit;
                return a ? e = Math.ceil(this.max / a) - Math.floor(this.min / a) + 1 : (e = this._computeTickLimit(),
                n = n || 11),
                n && (e = Math.min(n, e)),
                e
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: Ya,
            buildTicks: function() {
                var e = this
                  , t = e.options.ticks
                  , a = e.getTickLimit()
                  , n = {
                    maxTicks: a = Math.max(2, a),
                    min: t.min,
                    max: t.max,
                    precision: t.precision,
                    stepSize: R.valueOrDefault(t.fixedStepSize, t.stepSize)
                }
                  , i = e.ticks = function(e, t) {
                    var a, n, i, r, s = [], o = e.stepSize, d = o || 1, l = e.maxTicks - 1, u = e.min, _ = e.max, m = e.precision, h = t.min, c = t.max, f = R.niceNum((c - h) / l / d) * d;
                    if (f < 1e-14 && ka(u) && ka(_))
                        return [h, c];
                    (r = Math.ceil(c / f) - Math.floor(h / f)) > l && (f = R.niceNum(r * f / l / d) * d),
                    o || ka(m) ? a = Math.pow(10, R._decimalPlaces(f)) : (a = Math.pow(10, m),
                    f = Math.ceil(f * a) / a),
                    n = Math.floor(h / f) * f,
                    i = Math.ceil(c / f) * f,
                    o && (!ka(u) && R.almostWhole(u / f, f / 1e3) && (n = u),
                    !ka(_) && R.almostWhole(_ / f, f / 1e3) && (i = _)),
                    r = (i - n) / f,
                    r = R.almostEquals(r, Math.round(r), f / 1e3) ? Math.round(r) : Math.ceil(r),
                    n = Math.round(n * a) / a,
                    i = Math.round(i * a) / a,
                    s.push(ka(u) ? n : u);
                    for (var M = 1; M < r; ++M)
                        s.push(Math.round((n + M * f) * a) / a);
                    return s.push(ka(_) ? i : _),
                    s
                }(n, e);
                e.handleDirectionalChanges(),
                e.max = R.max(i),
                e.min = R.min(i),
                t.reverse ? (i.reverse(),
                e.start = e.max,
                e.end = e.min) : (e.start = e.min,
                e.end = e.max)
            },
            convertTicksToLabels: function() {
                var e = this;
                e.ticksAsNumbers = e.ticks.slice(),
                e.zeroLineIndex = e.ticks.indexOf(0),
                ga.prototype.convertTicksToLabels.call(e)
            },
            _configure: function() {
                var e, t = this, a = t.getTicks(), n = t.min, i = t.max;
                ga.prototype._configure.call(t),
                t.options.offset && a.length && (n -= e = (i - n) / Math.max(a.length - 1, 1) / 2,
                i += e),
                t._startValue = n,
                t._endValue = i,
                t._valueRange = i - n
            }
        })
          , Da = {
            position: "left",
            ticks: {
                callback: ia.formatters.linear
            }
        };
        function wa(e, t, a, n) {
            var i, r, s = e.options, o = function(e, t, a) {
                var n = [a.type, void 0 === t && void 0 === a.stack ? a.index : "", a.stack].join(".");
                return void 0 === e[n] && (e[n] = {
                    pos: [],
                    neg: []
                }),
                e[n]
            }(t, s.stacked, a), d = o.pos, l = o.neg, u = n.length;
            for (i = 0; i < u; ++i)
                r = e._parseValue(n[i]),
                isNaN(r.min) || isNaN(r.max) || a.data[i].hidden || (d[i] = d[i] || 0,
                l[i] = l[i] || 0,
                s.relativePoints ? d[i] = 100 : r.min < 0 || r.max < 0 ? l[i] += r.min : d[i] += r.max)
        }
        function xa(e, t, a) {
            var n, i, r = a.length;
            for (n = 0; n < r; ++n)
                i = e._parseValue(a[n]),
                isNaN(i.min) || isNaN(i.max) || t.data[n].hidden || (e.min = Math.min(e.min, i.min),
                e.max = Math.max(e.max, i.max))
        }
        var Ta = ba.extend({
            determineDataLimits: function() {
                var e, t, a, n, i = this, r = i.options, s = i.chart.data.datasets, o = i._getMatchingVisibleMetas(), d = r.stacked, l = {}, u = o.length;
                if (i.min = Number.POSITIVE_INFINITY,
                i.max = Number.NEGATIVE_INFINITY,
                void 0 === d)
                    for (e = 0; !d && e < u; ++e)
                        d = void 0 !== (t = o[e]).stack;
                for (e = 0; e < u; ++e)
                    a = s[(t = o[e]).index].data,
                    d ? wa(i, l, t, a) : xa(i, t, a);
                R.each(l, (function(e) {
                    n = e.pos.concat(e.neg),
                    i.min = Math.min(i.min, R.min(n)),
                    i.max = Math.max(i.max, R.max(n))
                }
                )),
                i.min = R.isFinite(i.min) && !isNaN(i.min) ? i.min : 0,
                i.max = R.isFinite(i.max) && !isNaN(i.max) ? i.max : 1,
                i.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                var e;
                return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = R.options._parseFont(this.options.ticks),
                Math.ceil(this.height / e.lineHeight))
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(e, t) {
                return this._getScaleLabel(this.chart.data.datasets[t].data[e])
            },
            getPixelForValue: function(e) {
                return this.getPixelForDecimal((+this.getRightValue(e) - this._startValue) / this._valueRange)
            },
            getValueForPixel: function(e) {
                return this._startValue + this.getDecimalForPixel(e) * this._valueRange
            },
            getPixelForTick: function(e) {
                var t = this.ticksAsNumbers;
                return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
            }
        })
          , Sa = Da;
        Ta._defaults = Sa;
        var Ha = R.valueOrDefault
          , ja = R.math.log10
          , Pa = {
            position: "left",
            ticks: {
                callback: ia.formatters.logarithmic
            }
        };
        function Oa(e, t) {
            return R.isFinite(e) && e >= 0 ? e : t
        }
        var Aa = ga.extend({
            determineDataLimits: function() {
                var e, t, a, n, i, r, s = this, o = s.options, d = s.chart, l = d.data.datasets, u = s.isHorizontal();
                function _(e) {
                    return u ? e.xAxisID === s.id : e.yAxisID === s.id
                }
                s.min = Number.POSITIVE_INFINITY,
                s.max = Number.NEGATIVE_INFINITY,
                s.minNotZero = Number.POSITIVE_INFINITY;
                var m = o.stacked;
                if (void 0 === m)
                    for (e = 0; e < l.length; e++)
                        if (t = d.getDatasetMeta(e),
                        d.isDatasetVisible(e) && _(t) && void 0 !== t.stack) {
                            m = !0;
                            break
                        }
                if (o.stacked || m) {
                    var h = {};
                    for (e = 0; e < l.length; e++) {
                        var c = [(t = d.getDatasetMeta(e)).type, void 0 === o.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
                        if (d.isDatasetVisible(e) && _(t))
                            for (void 0 === h[c] && (h[c] = []),
                            i = 0,
                            r = (n = l[e].data).length; i < r; i++) {
                                var f = h[c];
                                a = s._parseValue(n[i]),
                                isNaN(a.min) || isNaN(a.max) || t.data[i].hidden || a.min < 0 || a.max < 0 || (f[i] = f[i] || 0,
                                f[i] += a.max)
                            }
                    }
                    R.each(h, (function(e) {
                        if (e.length > 0) {
                            var t = R.min(e)
                              , a = R.max(e);
                            s.min = Math.min(s.min, t),
                            s.max = Math.max(s.max, a)
                        }
                    }
                    ))
                } else
                    for (e = 0; e < l.length; e++)
                        if (t = d.getDatasetMeta(e),
                        d.isDatasetVisible(e) && _(t))
                            for (i = 0,
                            r = (n = l[e].data).length; i < r; i++)
                                a = s._parseValue(n[i]),
                                isNaN(a.min) || isNaN(a.max) || t.data[i].hidden || a.min < 0 || a.max < 0 || (s.min = Math.min(a.min, s.min),
                                s.max = Math.max(a.max, s.max),
                                0 !== a.min && (s.minNotZero = Math.min(a.min, s.minNotZero)));
                s.min = R.isFinite(s.min) ? s.min : null,
                s.max = R.isFinite(s.max) ? s.max : null,
                s.minNotZero = R.isFinite(s.minNotZero) ? s.minNotZero : null,
                this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function() {
                var e = this
                  , t = e.options.ticks;
                e.min = Oa(t.min, e.min),
                e.max = Oa(t.max, e.max),
                e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(ja(e.min)) - 1),
                e.max = Math.pow(10, Math.floor(ja(e.max)) + 1)) : (e.min = 1,
                e.max = 10)),
                null === e.min && (e.min = Math.pow(10, Math.floor(ja(e.max)) - 1)),
                null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(ja(e.min)) + 1) : 10),
                null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(ja(e.max))) : e.minNotZero = 1)
            },
            buildTicks: function() {
                var e = this
                  , t = e.options.ticks
                  , a = !e.isHorizontal()
                  , n = {
                    min: Oa(t.min),
                    max: Oa(t.max)
                }
                  , i = e.ticks = function(e, t) {
                    var a, n, i = [], r = Ha(e.min, Math.pow(10, Math.floor(ja(t.min)))), s = Math.floor(ja(t.max)), o = Math.ceil(t.max / Math.pow(10, s));
                    0 === r ? (a = Math.floor(ja(t.minNotZero)),
                    n = Math.floor(t.minNotZero / Math.pow(10, a)),
                    i.push(r),
                    r = n * Math.pow(10, a)) : (a = Math.floor(ja(r)),
                    n = Math.floor(r / Math.pow(10, a)));
                    var d = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                    do {
                        i.push(r),
                        10 == ++n && (n = 1,
                        d = ++a >= 0 ? 1 : d),
                        r = Math.round(n * Math.pow(10, a) * d) / d
                    } while (a < s || a === s && n < o);
                    var l = Ha(e.max, r);
                    return i.push(l),
                    i
                }(n, e);
                e.max = R.max(i),
                e.min = R.min(i),
                t.reverse ? (a = !a,
                e.start = e.max,
                e.end = e.min) : (e.start = e.min,
                e.end = e.max),
                a && i.reverse()
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(),
                ga.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(e, t) {
                return this._getScaleLabel(this.chart.data.datasets[t].data[e])
            },
            getPixelForTick: function(e) {
                var t = this.tickValues;
                return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
            },
            _getFirstTickValue: function(e) {
                var t = Math.floor(ja(e));
                return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
            },
            _configure: function() {
                var e = this
                  , t = e.min
                  , a = 0;
                ga.prototype._configure.call(e),
                0 === t && (t = e._getFirstTickValue(e.minNotZero),
                a = Ha(e.options.ticks.fontSize, W.global.defaultFontSize) / e._length),
                e._startValue = ja(t),
                e._valueOffset = a,
                e._valueRange = (ja(e.max) - ja(t)) / (1 - a)
            },
            getPixelForValue: function(e) {
                var t = this
                  , a = 0;
                return (e = +t.getRightValue(e)) > t.min && e > 0 && (a = (ja(e) - t._startValue) / t._valueRange + t._valueOffset),
                t.getPixelForDecimal(a)
            },
            getValueForPixel: function(e) {
                var t = this
                  , a = t.getDecimalForPixel(e);
                return 0 === a && 0 === t.min ? 0 : Math.pow(10, t._startValue + (a - t._valueOffset) * t._valueRange)
            }
        })
          , Fa = Pa;
        Aa._defaults = Fa;
        var Wa = R.valueOrDefault
          , Ca = R.valueAtIndexOrDefault
          , Ea = R.options.resolve
          , za = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: ia.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(e) {
                    return e
                }
            }
        };
        function Ia(e) {
            var t = e.ticks;
            return t.display && e.display ? Wa(t.fontSize, W.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
        }
        function Ra(e, t, a, n, i) {
            return e === n || e === i ? {
                start: t - a / 2,
                end: t + a / 2
            } : e < n || e > i ? {
                start: t - a,
                end: t
            } : {
                start: t,
                end: t + a
            }
        }
        function Na(e) {
            return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
        }
        function Va(e, t, a, n) {
            var i, r, s = a.y + n / 2;
            if (R.isArray(t))
                for (i = 0,
                r = t.length; i < r; ++i)
                    e.fillText(t[i], a.x, s),
                    s += n;
            else
                e.fillText(t, a.x, s)
        }
        function Ba(e, t, a) {
            90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
        }
        function Ja(e) {
            return R.isNumber(e) ? e : 0
        }
        var Ua = ba.extend({
            setDimensions: function() {
                var e = this;
                e.width = e.maxWidth,
                e.height = e.maxHeight,
                e.paddingTop = Ia(e.options) / 2,
                e.xCenter = Math.floor(e.width / 2),
                e.yCenter = Math.floor((e.height - e.paddingTop) / 2),
                e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
            },
            determineDataLimits: function() {
                var e = this
                  , t = e.chart
                  , a = Number.POSITIVE_INFINITY
                  , n = Number.NEGATIVE_INFINITY;
                R.each(t.data.datasets, (function(i, r) {
                    if (t.isDatasetVisible(r)) {
                        var s = t.getDatasetMeta(r);
                        R.each(i.data, (function(t, i) {
                            var r = +e.getRightValue(t);
                            isNaN(r) || s.data[i].hidden || (a = Math.min(r, a),
                            n = Math.max(r, n))
                        }
                        ))
                    }
                }
                )),
                e.min = a === Number.POSITIVE_INFINITY ? 0 : a,
                e.max = n === Number.NEGATIVE_INFINITY ? 0 : n,
                e.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / Ia(this.options))
            },
            convertTicksToLabels: function() {
                var e = this;
                ba.prototype.convertTicksToLabels.call(e),
                e.pointLabels = e.chart.data.labels.map((function() {
                    var t = R.callback(e.options.pointLabels.callback, arguments, e);
                    return t || 0 === t ? t : ""
                }
                ))
            },
            getLabelForIndex: function(e, t) {
                return +this.getRightValue(this.chart.data.datasets[t].data[e])
            },
            fit: function() {
                var e = this.options;
                e.display && e.pointLabels.display ? function(e) {
                    var t, a, n, i = R.options._parseFont(e.options.pointLabels), r = {
                        l: 0,
                        r: e.width,
                        t: 0,
                        b: e.height - e.paddingTop
                    }, s = {};
                    e.ctx.font = i.string,
                    e._pointLabelSizes = [];
                    var o, d, l, u = e.chart.data.labels.length;
                    for (t = 0; t < u; t++) {
                        n = e.getPointPosition(t, e.drawingArea + 5),
                        o = e.ctx,
                        d = i.lineHeight,
                        l = e.pointLabels[t],
                        a = R.isArray(l) ? {
                            w: R.longestText(o, o.font, l),
                            h: l.length * d
                        } : {
                            w: o.measureText(l).width,
                            h: d
                        },
                        e._pointLabelSizes[t] = a;
                        var _ = e.getIndexAngle(t)
                          , m = R.toDegrees(_) % 360
                          , h = Ra(m, n.x, a.w, 0, 180)
                          , c = Ra(m, n.y, a.h, 90, 270);
                        h.start < r.l && (r.l = h.start,
                        s.l = _),
                        h.end > r.r && (r.r = h.end,
                        s.r = _),
                        c.start < r.t && (r.t = c.start,
                        s.t = _),
                        c.end > r.b && (r.b = c.end,
                        s.b = _)
                    }
                    e.setReductions(e.drawingArea, r, s)
                }(this) : this.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function(e, t, a) {
                var n = this
                  , i = t.l / Math.sin(a.l)
                  , r = Math.max(t.r - n.width, 0) / Math.sin(a.r)
                  , s = -t.t / Math.cos(a.t)
                  , o = -Math.max(t.b - (n.height - n.paddingTop), 0) / Math.cos(a.b);
                i = Ja(i),
                r = Ja(r),
                s = Ja(s),
                o = Ja(o),
                n.drawingArea = Math.min(Math.floor(e - (i + r) / 2), Math.floor(e - (s + o) / 2)),
                n.setCenterPoint(i, r, s, o)
            },
            setCenterPoint: function(e, t, a, n) {
                var i = this
                  , r = i.width - t - i.drawingArea
                  , s = e + i.drawingArea
                  , o = a + i.drawingArea
                  , d = i.height - i.paddingTop - n - i.drawingArea;
                i.xCenter = Math.floor((s + r) / 2 + i.left),
                i.yCenter = Math.floor((o + d) / 2 + i.top + i.paddingTop)
            },
            getIndexAngle: function(e) {
                var t = this.chart
                  , a = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
                return (a < 0 ? a + 360 : a) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(e) {
                var t = this;
                if (R.isNullOrUndef(e))
                    return NaN;
                var a = t.drawingArea / (t.max - t.min);
                return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
            },
            getPointPosition: function(e, t) {
                var a = this.getIndexAngle(e) - Math.PI / 2;
                return {
                    x: Math.cos(a) * t + this.xCenter,
                    y: Math.sin(a) * t + this.yCenter
                }
            },
            getPointPositionForValue: function(e, t) {
                return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
            },
            getBasePosition: function(e) {
                var t = this.min
                  , a = this.max;
                return this.getPointPositionForValue(e || 0, this.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0)
            },
            _drawGrid: function() {
                var e, t, a, n = this, i = n.ctx, r = n.options, s = r.gridLines, o = r.angleLines, d = Wa(o.lineWidth, s.lineWidth), l = Wa(o.color, s.color);
                if (r.pointLabels.display && function(e) {
                    var t = e.ctx
                      , a = e.options
                      , n = a.pointLabels
                      , i = Ia(a)
                      , r = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max)
                      , s = R.options._parseFont(n);
                    t.save(),
                    t.font = s.string,
                    t.textBaseline = "middle";
                    for (var o = e.chart.data.labels.length - 1; o >= 0; o--) {
                        var d = 0 === o ? i / 2 : 0
                          , l = e.getPointPosition(o, r + d + 5)
                          , u = Ca(n.fontColor, o, W.global.defaultFontColor);
                        t.fillStyle = u;
                        var _ = e.getIndexAngle(o)
                          , m = R.toDegrees(_);
                        t.textAlign = Na(m),
                        Ba(m, e._pointLabelSizes[o], l),
                        Va(t, e.pointLabels[o], l, s.lineHeight)
                    }
                    t.restore()
                }(n),
                s.display && R.each(n.ticks, (function(e, a) {
                    0 !== a && (t = n.getDistanceFromCenterForValue(n.ticksAsNumbers[a]),
                    function(e, t, a, n) {
                        var i, r = e.ctx, s = t.circular, o = e.chart.data.labels.length, d = Ca(t.color, n - 1), l = Ca(t.lineWidth, n - 1);
                        if ((s || o) && d && l) {
                            if (r.save(),
                            r.strokeStyle = d,
                            r.lineWidth = l,
                            r.setLineDash && (r.setLineDash(t.borderDash || []),
                            r.lineDashOffset = t.borderDashOffset || 0),
                            r.beginPath(),
                            s)
                                r.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI);
                            else {
                                i = e.getPointPosition(0, a),
                                r.moveTo(i.x, i.y);
                                for (var u = 1; u < o; u++)
                                    i = e.getPointPosition(u, a),
                                    r.lineTo(i.x, i.y)
                            }
                            r.closePath(),
                            r.stroke(),
                            r.restore()
                        }
                    }(n, s, t, a))
                }
                )),
                o.display && d && l) {
                    for (i.save(),
                    i.lineWidth = d,
                    i.strokeStyle = l,
                    i.setLineDash && (i.setLineDash(Ea([o.borderDash, s.borderDash, []])),
                    i.lineDashOffset = Ea([o.borderDashOffset, s.borderDashOffset, 0])),
                    e = n.chart.data.labels.length - 1; e >= 0; e--)
                        t = n.getDistanceFromCenterForValue(r.ticks.reverse ? n.min : n.max),
                        a = n.getPointPosition(e, t),
                        i.beginPath(),
                        i.moveTo(n.xCenter, n.yCenter),
                        i.lineTo(a.x, a.y),
                        i.stroke();
                    i.restore()
                }
            },
            _drawLabels: function() {
                var e = this
                  , t = e.ctx
                  , a = e.options.ticks;
                if (a.display) {
                    var n, i, r = e.getIndexAngle(0), s = R.options._parseFont(a), o = Wa(a.fontColor, W.global.defaultFontColor);
                    t.save(),
                    t.font = s.string,
                    t.translate(e.xCenter, e.yCenter),
                    t.rotate(r),
                    t.textAlign = "center",
                    t.textBaseline = "middle",
                    R.each(e.ticks, (function(r, d) {
                        (0 !== d || a.reverse) && (n = e.getDistanceFromCenterForValue(e.ticksAsNumbers[d]),
                        a.showLabelBackdrop && (i = t.measureText(r).width,
                        t.fillStyle = a.backdropColor,
                        t.fillRect(-i / 2 - a.backdropPaddingX, -n - s.size / 2 - a.backdropPaddingY, i + 2 * a.backdropPaddingX, s.size + 2 * a.backdropPaddingY)),
                        t.fillStyle = o,
                        t.fillText(r, 0, -n))
                    }
                    )),
                    t.restore()
                }
            },
            _drawTitle: R.noop
        })
          , Ga = za;
        Ua._defaults = Ga;
        var qa = R._deprecated
          , Ka = R.options.resolve
          , $a = R.valueOrDefault
          , Za = Number.MIN_SAFE_INTEGER || -9007199254740991
          , Qa = Number.MAX_SAFE_INTEGER || 9007199254740991
          , Xa = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        }
          , en = Object.keys(Xa);
        function tn(e, t) {
            return e - t
        }
        function an(e) {
            return R.valueOrDefault(e.time.min, e.ticks.min)
        }
        function nn(e) {
            return R.valueOrDefault(e.time.max, e.ticks.max)
        }
        function rn(e, t, a, n) {
            var i = function(e, t, a) {
                for (var n, i, r, s = 0, o = e.length - 1; s >= 0 && s <= o; ) {
                    if (i = e[(n = s + o >> 1) - 1] || null,
                    r = e[n],
                    !i)
                        return {
                            lo: null,
                            hi: r
                        };
                    if (r[t] < a)
                        s = n + 1;
                    else {
                        if (!(i[t] > a))
                            return {
                                lo: i,
                                hi: r
                            };
                        o = n - 1
                    }
                }
                return {
                    lo: r,
                    hi: null
                }
            }(e, t, a)
              , r = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0]
              , s = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1]
              , o = s[t] - r[t]
              , d = o ? (a - r[t]) / o : 0
              , l = (s[n] - r[n]) * d;
            return r[n] + l
        }
        function sn(e, t) {
            var a = e._adapter
              , n = e.options.time
              , i = n.parser
              , r = i || n.format
              , s = t;
            return "function" == typeof i && (s = i(s)),
            R.isFinite(s) || (s = "string" == typeof r ? a.parse(s, r) : a.parse(s)),
            null !== s ? +s : (i || "function" != typeof r || (s = r(t),
            R.isFinite(s) || (s = a.parse(s))),
            s)
        }
        function on(e, t) {
            if (R.isNullOrUndef(t))
                return null;
            var a = e.options.time
              , n = sn(e, e.getRightValue(t));
            return null === n ? n : (a.round && (n = +e._adapter.startOf(n, a.round)),
            n)
        }
        function dn(e, t, a, n) {
            var i, r, s, o = en.length;
            for (i = en.indexOf(e); i < o - 1; ++i)
                if (s = (r = Xa[en[i]]).steps ? r.steps : Qa,
                r.common && Math.ceil((a - t) / (s * r.size)) <= n)
                    return en[i];
            return en[o - 1]
        }
        function ln(e, t, a) {
            var n, i, r = [], s = {}, o = t.length;
            for (n = 0; n < o; ++n)
                s[i = t[n]] = n,
                r.push({
                    value: i,
                    major: !1
                });
            return 0 !== o && a ? function(e, t, a, n) {
                var i, r, s = e._adapter, o = +s.startOf(t[0].value, n), d = t[t.length - 1].value;
                for (i = o; i <= d; i = +s.add(i, 1, n))
                    (r = a[i]) >= 0 && (t[r].major = !0);
                return t
            }(e, r, s, a) : r
        }
        var un = ga.extend({
            initialize: function() {
                this.mergeTicksOptions(),
                ga.prototype.initialize.call(this)
            },
            update: function() {
                var e = this
                  , t = e.options
                  , a = t.time || (t.time = {})
                  , n = e._adapter = new na._date(t.adapters.date);
                return qa("time scale", a.format, "time.format", "time.parser"),
                qa("time scale", a.min, "time.min", "ticks.min"),
                qa("time scale", a.max, "time.max", "ticks.max"),
                R.mergeIf(a.displayFormats, n.formats()),
                ga.prototype.update.apply(e, arguments)
            },
            getRightValue: function(e) {
                return e && void 0 !== e.t && (e = e.t),
                ga.prototype.getRightValue.call(this, e)
            },
            determineDataLimits: function() {
                var e, t, a, n, i, r, s, o = this, d = o.chart, l = o._adapter, u = o.options, _ = u.time.unit || "day", m = Qa, h = Za, c = [], f = [], M = [], p = o._getLabels();
                for (e = 0,
                a = p.length; e < a; ++e)
                    M.push(on(o, p[e]));
                for (e = 0,
                a = (d.data.datasets || []).length; e < a; ++e)
                    if (d.isDatasetVisible(e))
                        if (i = d.data.datasets[e].data,
                        R.isObject(i[0]))
                            for (f[e] = [],
                            t = 0,
                            n = i.length; t < n; ++t)
                                r = on(o, i[t]),
                                c.push(r),
                                f[e][t] = r;
                        else
                            f[e] = M.slice(0),
                            s || (c = c.concat(M),
                            s = !0);
                    else
                        f[e] = [];
                M.length && (m = Math.min(m, M[0]),
                h = Math.max(h, M[M.length - 1])),
                c.length && (c = a > 1 ? function(e) {
                    var t, a, n, i = {}, r = [];
                    for (t = 0,
                    a = e.length; t < a; ++t)
                        i[n = e[t]] || (i[n] = !0,
                        r.push(n));
                    return r
                }(c).sort(tn) : c.sort(tn),
                m = Math.min(m, c[0]),
                h = Math.max(h, c[c.length - 1])),
                m = on(o, an(u)) || m,
                h = on(o, nn(u)) || h,
                m = m === Qa ? +l.startOf(Date.now(), _) : m,
                h = h === Za ? +l.endOf(Date.now(), _) + 1 : h,
                o.min = Math.min(m, h),
                o.max = Math.max(m + 1, h),
                o._table = [],
                o._timestamps = {
                    data: c,
                    datasets: f,
                    labels: M
                }
            },
            buildTicks: function() {
                var e, t, a, n = this, i = n.min, r = n.max, s = n.options, o = s.ticks, d = s.time, l = n._timestamps, u = [], _ = n.getLabelCapacity(i), m = o.source, h = s.distribution;
                for (l = "data" === m || "auto" === m && "series" === h ? l.data : "labels" === m ? l.labels : function(e, t, a, n) {
                    var i, r = e._adapter, s = e.options, o = s.time, d = o.unit || dn(o.minUnit, t, a, n), l = Ka([o.stepSize, o.unitStepSize, 1]), u = "week" === d && o.isoWeekday, _ = t, m = [];
                    if (u && (_ = +r.startOf(_, "isoWeek", u)),
                    _ = +r.startOf(_, u ? "day" : d),
                    r.diff(a, t, d) > 1e5 * l)
                        throw t + " and " + a + " are too far apart with stepSize of " + l + " " + d;
                    for (i = _; i < a; i = +r.add(i, l, d))
                        m.push(i);
                    return i !== a && "ticks" !== s.bounds || m.push(i),
                    m
                }(n, i, r, _),
                "ticks" === s.bounds && l.length && (i = l[0],
                r = l[l.length - 1]),
                i = on(n, an(s)) || i,
                r = on(n, nn(s)) || r,
                e = 0,
                t = l.length; e < t; ++e)
                    (a = l[e]) >= i && a <= r && u.push(a);
                return n.min = i,
                n.max = r,
                n._unit = d.unit || (o.autoSkip ? dn(d.minUnit, n.min, n.max, _) : function(e, t, a, n, i) {
                    var r, s;
                    for (r = en.length - 1; r >= en.indexOf(a); r--)
                        if (s = en[r],
                        Xa[s].common && e._adapter.diff(i, n, s) >= t - 1)
                            return s;
                    return en[a ? en.indexOf(a) : 0]
                }(n, u.length, d.minUnit, n.min, n.max)),
                n._majorUnit = o.major.enabled && "year" !== n._unit ? function(e) {
                    for (var t = en.indexOf(e) + 1, a = en.length; t < a; ++t)
                        if (Xa[en[t]].common)
                            return en[t]
                }(n._unit) : void 0,
                n._table = function(e, t, a, n) {
                    if ("linear" === n || !e.length)
                        return [{
                            time: t,
                            pos: 0
                        }, {
                            time: a,
                            pos: 1
                        }];
                    var i, r, s, o, d, l = [], u = [t];
                    for (i = 0,
                    r = e.length; i < r; ++i)
                        (o = e[i]) > t && o < a && u.push(o);
                    for (u.push(a),
                    i = 0,
                    r = u.length; i < r; ++i)
                        d = u[i + 1],
                        s = u[i - 1],
                        o = u[i],
                        void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
                            time: o,
                            pos: i / (r - 1)
                        });
                    return l
                }(n._timestamps.data, i, r, h),
                n._offsets = function(e, t, a, n, i) {
                    var r, s, o = 0, d = 0;
                    return i.offset && t.length && (r = rn(e, "time", t[0], "pos"),
                    o = 1 === t.length ? 1 - r : (rn(e, "time", t[1], "pos") - r) / 2,
                    s = rn(e, "time", t[t.length - 1], "pos"),
                    d = 1 === t.length ? s : (s - rn(e, "time", t[t.length - 2], "pos")) / 2),
                    {
                        start: o,
                        end: d,
                        factor: 1 / (o + 1 + d)
                    }
                }(n._table, u, 0, 0, s),
                o.reverse && u.reverse(),
                ln(n, u, n._majorUnit)
            },
            getLabelForIndex: function(e, t) {
                var a = this
                  , n = a._adapter
                  , i = a.chart.data
                  , r = a.options.time
                  , s = i.labels && e < i.labels.length ? i.labels[e] : ""
                  , o = i.datasets[t].data[e];
                return R.isObject(o) && (s = a.getRightValue(o)),
                r.tooltipFormat ? n.format(sn(a, s), r.tooltipFormat) : "string" == typeof s ? s : n.format(sn(a, s), r.displayFormats.datetime)
            },
            tickFormatFunction: function(e, t, a, n) {
                var i = this._adapter
                  , r = this.options
                  , s = r.time.displayFormats
                  , o = s[this._unit]
                  , d = this._majorUnit
                  , l = s[d]
                  , u = a[t]
                  , _ = r.ticks
                  , m = d && l && u && u.major
                  , h = i.format(e, n || (m ? l : o))
                  , c = m ? _.major : _.minor
                  , f = Ka([c.callback, c.userCallback, _.callback, _.userCallback]);
                return f ? f(h, t, a) : h
            },
            convertTicksToLabels: function(e) {
                var t, a, n = [];
                for (t = 0,
                a = e.length; t < a; ++t)
                    n.push(this.tickFormatFunction(e[t].value, t, e));
                return n
            },
            getPixelForOffset: function(e) {
                var t = this._offsets
                  , a = rn(this._table, "time", e, "pos");
                return this.getPixelForDecimal((t.start + a) * t.factor)
            },
            getPixelForValue: function(e, t, a) {
                var n = null;
                if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]),
                null === n && (n = on(this, e)),
                null !== n)
                    return this.getPixelForOffset(n)
            },
            getPixelForTick: function(e) {
                var t = this.getTicks();
                return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
            },
            getValueForPixel: function(e) {
                var t = this._offsets
                  , a = this.getDecimalForPixel(e) / t.factor - t.end
                  , n = rn(this._table, "pos", a, "time");
                return this._adapter._create(n)
            },
            _getLabelSize: function(e) {
                var t = this.options.ticks
                  , a = this.ctx.measureText(e).width
                  , n = R.toRadians(this.isHorizontal() ? t.maxRotation : t.minRotation)
                  , i = Math.cos(n)
                  , r = Math.sin(n)
                  , s = $a(t.fontSize, W.global.defaultFontSize);
                return {
                    w: a * i + s * r,
                    h: a * r + s * i
                }
            },
            getLabelWidth: function(e) {
                return this._getLabelSize(e).w
            },
            getLabelCapacity: function(e) {
                var t = this
                  , a = t.options.time
                  , n = a.displayFormats
                  , i = n[a.unit] || n.millisecond
                  , r = t.tickFormatFunction(e, 0, ln(t, [e], t._majorUnit), i)
                  , s = t._getLabelSize(r)
                  , o = Math.floor(t.isHorizontal() ? t.width / s.w : t.height / s.h);
                return t.options.offset && o--,
                o > 0 ? o : 1
            }
        })
          , _n = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                autoSkip: !1,
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        };
        un._defaults = _n;
        var mn = {
            category: La,
            linear: Ta,
            logarithmic: Aa,
            radialLinear: Ua,
            time: un
        }
          , hn = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
        na._date.override("function" == typeof e ? {
            _id: "moment",
            formats: function() {
                return hn
            },
            parse: function(t, a) {
                return "string" == typeof t && "string" == typeof a ? t = e(t, a) : t instanceof e || (t = e(t)),
                t.isValid() ? t.valueOf() : null
            },
            format: function(t, a) {
                return e(t).format(a)
            },
            add: function(t, a, n) {
                return e(t).add(a, n).valueOf()
            },
            diff: function(t, a, n) {
                return e(t).diff(e(a), n)
            },
            startOf: function(t, a, n) {
                return t = e(t),
                "isoWeek" === a ? t.isoWeekday(n).valueOf() : t.startOf(a).valueOf()
            },
            endOf: function(t, a) {
                return e(t).endOf(a).valueOf()
            },
            _create: function(t) {
                return e(t)
            }
        } : {}),
        W._set("global", {
            plugins: {
                filler: {
                    propagate: !0
                }
            }
        });
        var cn = {
            dataset: function(e) {
                var t = e.fill
                  , a = e.chart
                  , n = a.getDatasetMeta(t)
                  , i = n && a.isDatasetVisible(t) && n.dataset._children || []
                  , r = i.length || 0;
                return r ? function(e, t) {
                    return t < r && i[t]._view || null
                }
                : null
            },
            boundary: function(e) {
                var t = e.boundary
                  , a = t ? t.x : null
                  , n = t ? t.y : null;
                return R.isArray(t) ? function(e, a) {
                    return t[a]
                }
                : function(e) {
                    return {
                        x: null === a ? e.x : a,
                        y: null === n ? e.y : n
                    }
                }
            }
        };
        function fn(e, t, a) {
            var n, i = e._model || {}, r = i.fill;
            if (void 0 === r && (r = !!i.backgroundColor),
            !1 === r || null === r)
                return !1;
            if (!0 === r)
                return "origin";
            if (n = parseFloat(r, 10),
            isFinite(n) && Math.floor(n) === n)
                return "-" !== r[0] && "+" !== r[0] || (n = t + n),
                !(n === t || n < 0 || n >= a) && n;
            switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1
            }
        }
        function Mn(e) {
            return (e.el._scale || {}).getPointPositionForValue ? function(e) {
                var t, a, n, i, r, s = e.el._scale, o = s.options, d = s.chart.data.labels.length, l = e.fill, u = [];
                if (!d)
                    return null;
                for (t = o.ticks.reverse ? s.max : s.min,
                a = o.ticks.reverse ? s.min : s.max,
                n = s.getPointPositionForValue(0, t),
                i = 0; i < d; ++i)
                    r = "start" === l || "end" === l ? s.getPointPositionForValue(i, "start" === l ? t : a) : s.getBasePosition(i),
                    o.gridLines.circular && (r.cx = n.x,
                    r.cy = n.y,
                    r.angle = s.getIndexAngle(i) - Math.PI / 2),
                    u.push(r);
                return u
            }(e) : function(e) {
                var t, a = e.el._model || {}, n = e.el._scale || {}, i = e.fill, r = null;
                if (isFinite(i))
                    return null;
                if ("start" === i ? r = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === i ? r = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? r = a.scaleZero : n.getBasePixel && (r = n.getBasePixel()),
                null != r) {
                    if (void 0 !== r.x && void 0 !== r.y)
                        return r;
                    if (R.isFinite(r))
                        return {
                            x: (t = n.isHorizontal()) ? r : null,
                            y: t ? null : r
                        }
                }
                return null
            }(e)
        }
        function pn(e, t, a) {
            var n, i = e[t].fill, r = [t];
            if (!a)
                return i;
            for (; !1 !== i && -1 === r.indexOf(i); ) {
                if (!isFinite(i))
                    return i;
                if (!(n = e[i]))
                    return !1;
                if (n.visible)
                    return i;
                r.push(i),
                i = n.fill
            }
            return !1
        }
        function gn(e) {
            var t = e.fill
              , a = "dataset";
            return !1 === t ? null : (isFinite(t) || (a = "boundary"),
            cn[a](e))
        }
        function yn(e) {
            return e && !e.skip
        }
        function Ln(e, t, a, n, i) {
            var r, s, o, d;
            if (n && i) {
                for (e.moveTo(t[0].x, t[0].y),
                r = 1; r < n; ++r)
                    R.canvas.lineTo(e, t[r - 1], t[r]);
                if (void 0 === a[0].angle)
                    for (e.lineTo(a[i - 1].x, a[i - 1].y),
                    r = i - 1; r > 0; --r)
                        R.canvas.lineTo(e, a[r], a[r - 1], !0);
                else
                    for (s = a[0].cx,
                    o = a[0].cy,
                    d = Math.sqrt(Math.pow(a[0].x - s, 2) + Math.pow(a[0].y - o, 2)),
                    r = i - 1; r > 0; --r)
                        e.arc(s, o, d, a[r].angle, a[r - 1].angle, !0)
            }
        }
        function vn(e, t, a, n, i, r) {
            var s, o, d, l, u, _, m, h, c = t.length, f = n.spanGaps, M = [], p = [], g = 0, y = 0;
            for (e.beginPath(),
            s = 0,
            o = c; s < o; ++s)
                u = a(l = t[d = s % c]._view, d, n),
                _ = yn(l),
                m = yn(u),
                r && void 0 === h && _ && (o = c + (h = s + 1)),
                _ && m ? (g = M.push(l),
                y = p.push(u)) : g && y && (f ? (_ && M.push(l),
                m && p.push(u)) : (Ln(e, M, p, g, y),
                g = y = 0,
                M = [],
                p = []));
            Ln(e, M, p, g, y),
            e.closePath(),
            e.fillStyle = i,
            e.fill()
        }
        var Yn = {
            id: "filler",
            afterDatasetsUpdate: function(e, t) {
                var a, n, i, r, s = (e.data.datasets || []).length, o = t.propagate, d = [];
                for (n = 0; n < s; ++n)
                    r = null,
                    (i = (a = e.getDatasetMeta(n)).dataset) && i._model && i instanceof ve.Line && (r = {
                        visible: e.isDatasetVisible(n),
                        fill: fn(i, n, s),
                        chart: e,
                        el: i
                    }),
                    a.$filler = r,
                    d.push(r);
                for (n = 0; n < s; ++n)
                    (r = d[n]) && (r.fill = pn(d, n, o),
                    r.boundary = Mn(r),
                    r.mapper = gn(r))
            },
            beforeDatasetsDraw: function(e) {
                var t, a, n, i, r, s, o, d = e._getSortedVisibleDatasetMetas(), l = e.ctx;
                for (a = d.length - 1; a >= 0; --a)
                    (t = d[a].$filler) && t.visible && (i = (n = t.el)._view,
                    r = n._children || [],
                    s = t.mapper,
                    o = i.backgroundColor || W.global.defaultColor,
                    s && o && r.length && (R.canvas.clipArea(l, e.chartArea),
                    vn(l, r, s, i, o, n._loop),
                    R.canvas.unclipArea(l)))
            }
        }
          , kn = R.rtl.getRtlAdapter
          , bn = R.noop
          , Dn = R.valueOrDefault;
        function wn(e, t) {
            return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
        }
        W._set("global", {
            legend: {
                display: !0,
                position: "top",
                align: "center",
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function(e, t) {
                    var a = t.datasetIndex
                      , n = this.chart
                      , i = n.getDatasetMeta(a);
                    i.hidden = null === i.hidden ? !n.data.datasets[a].hidden : null,
                    n.update()
                },
                onHover: null,
                onLeave: null,
                labels: {
                    boxWidth: 40,
                    padding: 10,
                    generateLabels: function(e) {
                        var t = e.data.datasets
                          , a = e.options.legend || {}
                          , n = a.labels && a.labels.usePointStyle;
                        return e._getSortedDatasetMetas().map((function(a) {
                            var i = a.controller.getStyle(n ? 0 : void 0);
                            return {
                                text: t[a.index].label,
                                fillStyle: i.backgroundColor,
                                hidden: !e.isDatasetVisible(a.index),
                                lineCap: i.borderCapStyle,
                                lineDash: i.borderDash,
                                lineDashOffset: i.borderDashOffset,
                                lineJoin: i.borderJoinStyle,
                                lineWidth: i.borderWidth,
                                strokeStyle: i.borderColor,
                                pointStyle: i.pointStyle,
                                rotation: i.rotation,
                                datasetIndex: a.index
                            }
                        }
                        ), this)
                    }
                }
            },
            legendCallback: function(e) {
                var t, a, n, i = document.createElement("ul"), r = e.data.datasets;
                for (i.setAttribute("class", e.id + "-legend"),
                t = 0,
                a = r.length; t < a; t++)
                    (n = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[t].backgroundColor,
                    r[t].label && n.appendChild(document.createTextNode(r[t].label));
                return i.outerHTML
            }
        });
        var xn = q.extend({
            initialize: function(e) {
                R.extend(this, e),
                this.legendHitBoxes = [],
                this._hoveredItem = null,
                this.doughnutMode = !1
            },
            beforeUpdate: bn,
            update: function(e, t, a) {
                var n = this;
                return n.beforeUpdate(),
                n.maxWidth = e,
                n.maxHeight = t,
                n.margins = a,
                n.beforeSetDimensions(),
                n.setDimensions(),
                n.afterSetDimensions(),
                n.beforeBuildLabels(),
                n.buildLabels(),
                n.afterBuildLabels(),
                n.beforeFit(),
                n.fit(),
                n.afterFit(),
                n.afterUpdate(),
                n.minSize
            },
            afterUpdate: bn,
            beforeSetDimensions: bn,
            setDimensions: function() {
                var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth,
                e.left = 0,
                e.right = e.width) : (e.height = e.maxHeight,
                e.top = 0,
                e.bottom = e.height),
                e.paddingLeft = 0,
                e.paddingTop = 0,
                e.paddingRight = 0,
                e.paddingBottom = 0,
                e.minSize = {
                    width: 0,
                    height: 0
                }
            },
            afterSetDimensions: bn,
            beforeBuildLabels: bn,
            buildLabels: function() {
                var e = this
                  , t = e.options.labels || {}
                  , a = R.callback(t.generateLabels, [e.chart], e) || [];
                t.filter && (a = a.filter((function(a) {
                    return t.filter(a, e.chart.data)
                }
                ))),
                e.options.reverse && a.reverse(),
                e.legendItems = a
            },
            afterBuildLabels: bn,
            beforeFit: bn,
            fit: function() {
                var e = this
                  , t = e.options
                  , a = t.labels
                  , n = t.display
                  , i = e.ctx
                  , r = R.options._parseFont(a)
                  , s = r.size
                  , o = e.legendHitBoxes = []
                  , d = e.minSize
                  , l = e.isHorizontal();
                if (l ? (d.width = e.maxWidth,
                d.height = n ? 10 : 0) : (d.width = n ? 10 : 0,
                d.height = e.maxHeight),
                n) {
                    if (i.font = r.string,
                    l) {
                        var u = e.lineWidths = [0]
                          , _ = 0;
                        i.textAlign = "left",
                        i.textBaseline = "middle",
                        R.each(e.legendItems, (function(e, t) {
                            var n = wn(a, s) + s / 2 + i.measureText(e.text).width;
                            (0 === t || u[u.length - 1] + n + 2 * a.padding > d.width) && (_ += s + a.padding,
                            u[u.length - (t > 0 ? 0 : 1)] = 0),
                            o[t] = {
                                left: 0,
                                top: 0,
                                width: n,
                                height: s
                            },
                            u[u.length - 1] += n + a.padding
                        }
                        )),
                        d.height += _
                    } else {
                        var m = a.padding
                          , h = e.columnWidths = []
                          , c = e.columnHeights = []
                          , f = a.padding
                          , M = 0
                          , p = 0;
                        R.each(e.legendItems, (function(e, t) {
                            var n = wn(a, s) + s / 2 + i.measureText(e.text).width;
                            t > 0 && p + s + 2 * m > d.height && (f += M + a.padding,
                            h.push(M),
                            c.push(p),
                            M = 0,
                            p = 0),
                            M = Math.max(M, n),
                            p += s + m,
                            o[t] = {
                                left: 0,
                                top: 0,
                                width: n,
                                height: s
                            }
                        }
                        )),
                        f += M,
                        h.push(M),
                        c.push(p),
                        d.width += f
                    }
                    e.width = d.width,
                    e.height = d.height
                } else
                    e.width = d.width = e.height = d.height = 0
            },
            afterFit: bn,
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            draw: function() {
                var e = this
                  , t = e.options
                  , a = t.labels
                  , n = W.global
                  , i = n.defaultColor
                  , r = n.elements.line
                  , s = e.height
                  , o = e.columnHeights
                  , d = e.width
                  , l = e.lineWidths;
                if (t.display) {
                    var u, _ = kn(t.rtl, e.left, e.minSize.width), m = e.ctx, h = Dn(a.fontColor, n.defaultFontColor), c = R.options._parseFont(a), f = c.size;
                    m.textAlign = _.textAlign("left"),
                    m.textBaseline = "middle",
                    m.lineWidth = .5,
                    m.strokeStyle = h,
                    m.fillStyle = h,
                    m.font = c.string;
                    var M = wn(a, f)
                      , p = e.legendHitBoxes
                      , g = function(e, n) {
                        switch (t.align) {
                        case "start":
                            return a.padding;
                        case "end":
                            return e - n;
                        default:
                            return (e - n + a.padding) / 2
                        }
                    }
                      , y = e.isHorizontal();
                    u = y ? {
                        x: e.left + g(d, l[0]),
                        y: e.top + a.padding,
                        line: 0
                    } : {
                        x: e.left + a.padding,
                        y: e.top + g(s, o[0]),
                        line: 0
                    },
                    R.rtl.overrideTextDirection(e.ctx, t.textDirection);
                    var L = f + a.padding;
                    R.each(e.legendItems, (function(t, n) {
                        var h = m.measureText(t.text).width
                          , c = M + f / 2 + h
                          , v = u.x
                          , Y = u.y;
                        _.setWidth(e.minSize.width),
                        y ? n > 0 && v + c + a.padding > e.left + e.minSize.width && (Y = u.y += L,
                        u.line++,
                        v = u.x = e.left + g(d, l[u.line])) : n > 0 && Y + L > e.top + e.minSize.height && (v = u.x = v + e.columnWidths[u.line] + a.padding,
                        u.line++,
                        Y = u.y = e.top + g(s, o[u.line]));
                        var k = _.x(v);
                        !function(e, t, n) {
                            if (!(isNaN(M) || M <= 0)) {
                                m.save();
                                var s = Dn(n.lineWidth, r.borderWidth);
                                if (m.fillStyle = Dn(n.fillStyle, i),
                                m.lineCap = Dn(n.lineCap, r.borderCapStyle),
                                m.lineDashOffset = Dn(n.lineDashOffset, r.borderDashOffset),
                                m.lineJoin = Dn(n.lineJoin, r.borderJoinStyle),
                                m.lineWidth = s,
                                m.strokeStyle = Dn(n.strokeStyle, i),
                                m.setLineDash && m.setLineDash(Dn(n.lineDash, r.borderDash)),
                                a && a.usePointStyle) {
                                    var o = M * Math.SQRT2 / 2
                                      , d = _.xPlus(e, M / 2)
                                      , l = t + f / 2;
                                    R.canvas.drawPoint(m, n.pointStyle, o, d, l, n.rotation)
                                } else
                                    m.fillRect(_.leftForLtr(e, M), t, M, f),
                                    0 !== s && m.strokeRect(_.leftForLtr(e, M), t, M, f);
                                m.restore()
                            }
                        }(k, Y, t),
                        p[n].left = _.leftForLtr(k, p[n].width),
                        p[n].top = Y,
                        function(e, t, a, n) {
                            var i = f / 2
                              , r = _.xPlus(e, M + i)
                              , s = t + i;
                            m.fillText(a.text, r, s),
                            a.hidden && (m.beginPath(),
                            m.lineWidth = 2,
                            m.moveTo(r, s),
                            m.lineTo(_.xPlus(r, n), s),
                            m.stroke())
                        }(k, Y, t, h),
                        y ? u.x += c + a.padding : u.y += L
                    }
                    )),
                    R.rtl.restoreTextDirection(e.ctx, t.textDirection)
                }
            },
            _getLegendItemAt: function(e, t) {
                var a, n, i, r = this;
                if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom)
                    for (i = r.legendHitBoxes,
                    a = 0; a < i.length; ++a)
                        if (e >= (n = i[a]).left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height)
                            return r.legendItems[a];
                return null
            },
            handleEvent: function(e) {
                var t, a = this, n = a.options, i = "mouseup" === e.type ? "click" : e.type;
                if ("mousemove" === i) {
                    if (!n.onHover && !n.onLeave)
                        return
                } else {
                    if ("click" !== i)
                        return;
                    if (!n.onClick)
                        return
                }
                t = a._getLegendItemAt(e.x, e.y),
                "click" === i ? t && n.onClick && n.onClick.call(a, e.native, t) : (n.onLeave && t !== a._hoveredItem && (a._hoveredItem && n.onLeave.call(a, e.native, a._hoveredItem),
                a._hoveredItem = t),
                n.onHover && t && n.onHover.call(a, e.native, t))
            }
        });
        function Tn(e, t) {
            var a = new xn({
                ctx: e.ctx,
                options: t,
                chart: e
            });
            ct.configure(e, a, t),
            ct.addBox(e, a),
            e.legend = a
        }
        var Sn = {
            id: "legend",
            _element: xn,
            beforeInit: function(e) {
                var t = e.options.legend;
                t && Tn(e, t)
            },
            beforeUpdate: function(e) {
                var t = e.options.legend
                  , a = e.legend;
                t ? (R.mergeIf(t, W.global.legend),
                a ? (ct.configure(e, a, t),
                a.options = t) : Tn(e, t)) : a && (ct.removeBox(e, a),
                delete e.legend)
            },
            afterEvent: function(e, t) {
                var a = e.legend;
                a && a.handleEvent(t)
            }
        }
          , Hn = R.noop;
        W._set("global", {
            title: {
                display: !1,
                fontStyle: "bold",
                fullWidth: !0,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            }
        });
        var jn = q.extend({
            initialize: function(e) {
                R.extend(this, e),
                this.legendHitBoxes = []
            },
            beforeUpdate: Hn,
            update: function(e, t, a) {
                var n = this;
                return n.beforeUpdate(),
                n.maxWidth = e,
                n.maxHeight = t,
                n.margins = a,
                n.beforeSetDimensions(),
                n.setDimensions(),
                n.afterSetDimensions(),
                n.beforeBuildLabels(),
                n.buildLabels(),
                n.afterBuildLabels(),
                n.beforeFit(),
                n.fit(),
                n.afterFit(),
                n.afterUpdate(),
                n.minSize
            },
            afterUpdate: Hn,
            beforeSetDimensions: Hn,
            setDimensions: function() {
                var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth,
                e.left = 0,
                e.right = e.width) : (e.height = e.maxHeight,
                e.top = 0,
                e.bottom = e.height),
                e.paddingLeft = 0,
                e.paddingTop = 0,
                e.paddingRight = 0,
                e.paddingBottom = 0,
                e.minSize = {
                    width: 0,
                    height: 0
                }
            },
            afterSetDimensions: Hn,
            beforeBuildLabels: Hn,
            buildLabels: Hn,
            afterBuildLabels: Hn,
            beforeFit: Hn,
            fit: function() {
                var e, t = this, a = t.options, n = t.minSize = {}, i = t.isHorizontal();
                a.display ? (e = (R.isArray(a.text) ? a.text.length : 1) * R.options._parseFont(a).lineHeight + 2 * a.padding,
                t.width = n.width = i ? t.maxWidth : e,
                t.height = n.height = i ? e : t.maxHeight) : t.width = n.width = t.height = n.height = 0
            },
            afterFit: Hn,
            isHorizontal: function() {
                var e = this.options.position;
                return "top" === e || "bottom" === e
            },
            draw: function() {
                var e = this
                  , t = e.ctx
                  , a = e.options;
                if (a.display) {
                    var n, i, r, s = R.options._parseFont(a), o = s.lineHeight, d = o / 2 + a.padding, l = 0, u = e.top, _ = e.left, m = e.bottom, h = e.right;
                    t.fillStyle = R.valueOrDefault(a.fontColor, W.global.defaultFontColor),
                    t.font = s.string,
                    e.isHorizontal() ? (i = _ + (h - _) / 2,
                    r = u + d,
                    n = h - _) : (i = "left" === a.position ? _ + d : h - d,
                    r = u + (m - u) / 2,
                    n = m - u,
                    l = Math.PI * ("left" === a.position ? -.5 : .5)),
                    t.save(),
                    t.translate(i, r),
                    t.rotate(l),
                    t.textAlign = "center",
                    t.textBaseline = "middle";
                    var c = a.text;
                    if (R.isArray(c))
                        for (var f = 0, M = 0; M < c.length; ++M)
                            t.fillText(c[M], 0, f, n),
                            f += o;
                    else
                        t.fillText(c, 0, 0, n);
                    t.restore()
                }
            }
        });
        function Pn(e, t) {
            var a = new jn({
                ctx: e.ctx,
                options: t,
                chart: e
            });
            ct.configure(e, a, t),
            ct.addBox(e, a),
            e.titleBlock = a
        }
        var On = {}
          , An = Yn
          , Fn = Sn
          , Wn = {
            id: "title",
            _element: jn,
            beforeInit: function(e) {
                var t = e.options.title;
                t && Pn(e, t)
            },
            beforeUpdate: function(e) {
                var t = e.options.title
                  , a = e.titleBlock;
                t ? (R.mergeIf(t, W.global.title),
                a ? (ct.configure(e, a, t),
                a.options = t) : Pn(e, t)) : a && (ct.removeBox(e, a),
                delete e.titleBlock)
            }
        };
        for (var Cn in On.filler = An,
        On.legend = Fn,
        On.title = Wn,
        ea.helpers = R,
        function() {
            function e(e, t, a) {
                var n;
                return "string" == typeof e ? (n = parseInt(e, 10),
                -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e,
                n
            }
            function t(e) {
                return null != e && "none" !== e
            }
            function a(a, n, i) {
                var r = document.defaultView
                  , s = R._getParentNode(a)
                  , o = r.getComputedStyle(a)[n]
                  , d = r.getComputedStyle(s)[n]
                  , l = t(o)
                  , u = t(d)
                  , _ = Number.POSITIVE_INFINITY;
                return l || u ? Math.min(l ? e(o, a, i) : _, u ? e(d, s, i) : _) : "none"
            }
            R.where = function(e, t) {
                if (R.isArray(e) && Array.prototype.filter)
                    return e.filter(t);
                var a = [];
                return R.each(e, (function(e) {
                    t(e) && a.push(e)
                }
                )),
                a
            }
            ,
            R.findIndex = Array.prototype.findIndex ? function(e, t, a) {
                return e.findIndex(t, a)
            }
            : function(e, t, a) {
                a = void 0 === a ? e : a;
                for (var n = 0, i = e.length; n < i; ++n)
                    if (t.call(a, e[n], n, e))
                        return n;
                return -1
            }
            ,
            R.findNextWhere = function(e, t, a) {
                R.isNullOrUndef(a) && (a = -1);
                for (var n = a + 1; n < e.length; n++) {
                    var i = e[n];
                    if (t(i))
                        return i
                }
            }
            ,
            R.findPreviousWhere = function(e, t, a) {
                R.isNullOrUndef(a) && (a = e.length);
                for (var n = a - 1; n >= 0; n--) {
                    var i = e[n];
                    if (t(i))
                        return i
                }
            }
            ,
            R.isNumber = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }
            ,
            R.almostEquals = function(e, t, a) {
                return Math.abs(e - t) < a
            }
            ,
            R.almostWhole = function(e, t) {
                var a = Math.round(e);
                return a - t <= e && a + t >= e
            }
            ,
            R.max = function(e) {
                return e.reduce((function(e, t) {
                    return isNaN(t) ? e : Math.max(e, t)
                }
                ), Number.NEGATIVE_INFINITY)
            }
            ,
            R.min = function(e) {
                return e.reduce((function(e, t) {
                    return isNaN(t) ? e : Math.min(e, t)
                }
                ), Number.POSITIVE_INFINITY)
            }
            ,
            R.sign = Math.sign ? function(e) {
                return Math.sign(e)
            }
            : function(e) {
                return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
            }
            ,
            R.toRadians = function(e) {
                return e * (Math.PI / 180)
            }
            ,
            R.toDegrees = function(e) {
                return e * (180 / Math.PI)
            }
            ,
            R._decimalPlaces = function(e) {
                if (R.isFinite(e)) {
                    for (var t = 1, a = 0; Math.round(e * t) / t !== e; )
                        t *= 10,
                        a++;
                    return a
                }
            }
            ,
            R.getAngleFromPoint = function(e, t) {
                var a = t.x - e.x
                  , n = t.y - e.y
                  , i = Math.sqrt(a * a + n * n)
                  , r = Math.atan2(n, a);
                return r < -.5 * Math.PI && (r += 2 * Math.PI),
                {
                    angle: r,
                    distance: i
                }
            }
            ,
            R.distanceBetweenPoints = function(e, t) {
                return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
            }
            ,
            R.aliasPixel = function(e) {
                return e % 2 == 0 ? 0 : .5
            }
            ,
            R._alignPixel = function(e, t, a) {
                var n = e.currentDevicePixelRatio
                  , i = a / 2;
                return Math.round((t - i) * n) / n + i
            }
            ,
            R.splineCurve = function(e, t, a, n) {
                var i = e.skip ? t : e
                  , r = t
                  , s = a.skip ? t : a
                  , o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2))
                  , d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2))
                  , l = o / (o + d)
                  , u = d / (o + d)
                  , _ = n * (l = isNaN(l) ? 0 : l)
                  , m = n * (u = isNaN(u) ? 0 : u);
                return {
                    previous: {
                        x: r.x - _ * (s.x - i.x),
                        y: r.y - _ * (s.y - i.y)
                    },
                    next: {
                        x: r.x + m * (s.x - i.x),
                        y: r.y + m * (s.y - i.y)
                    }
                }
            }
            ,
            R.EPSILON = Number.EPSILON || 1e-14,
            R.splineCurveMonotone = function(e) {
                var t, a, n, i, r, s, o, d, l, u = (e || []).map((function(e) {
                    return {
                        model: e._model,
                        deltaK: 0,
                        mK: 0
                    }
                }
                )), _ = u.length;
                for (t = 0; t < _; ++t)
                    if (!(n = u[t]).model.skip) {
                        if (a = t > 0 ? u[t - 1] : null,
                        (i = t < _ - 1 ? u[t + 1] : null) && !i.model.skip) {
                            var m = i.model.x - n.model.x;
                            n.deltaK = 0 !== m ? (i.model.y - n.model.y) / m : 0
                        }
                        !a || a.model.skip ? n.mK = n.deltaK : !i || i.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2
                    }
                for (t = 0; t < _ - 1; ++t)
                    n = u[t],
                    i = u[t + 1],
                    n.model.skip || i.model.skip || (R.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = i.mK = 0 : (r = n.mK / n.deltaK,
                    s = i.mK / n.deltaK,
                    (d = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (o = 3 / Math.sqrt(d),
                    n.mK = r * o * n.deltaK,
                    i.mK = s * o * n.deltaK)));
                for (t = 0; t < _; ++t)
                    (n = u[t]).model.skip || (a = t > 0 ? u[t - 1] : null,
                    i = t < _ - 1 ? u[t + 1] : null,
                    a && !a.model.skip && (l = (n.model.x - a.model.x) / 3,
                    n.model.controlPointPreviousX = n.model.x - l,
                    n.model.controlPointPreviousY = n.model.y - l * n.mK),
                    i && !i.model.skip && (l = (i.model.x - n.model.x) / 3,
                    n.model.controlPointNextX = n.model.x + l,
                    n.model.controlPointNextY = n.model.y + l * n.mK))
            }
            ,
            R.nextItem = function(e, t, a) {
                return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
            }
            ,
            R.previousItem = function(e, t, a) {
                return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
            }
            ,
            R.niceNum = function(e, t) {
                var a = Math.floor(R.log10(e))
                  , n = e / Math.pow(10, a);
                return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
            }
            ,
            R.requestAnimFrame = "undefined" == typeof window ? function(e) {
                e()
            }
            : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }
            ,
            R.getRelativePosition = function(e, t) {
                var a, n, i = e.originalEvent || e, r = e.target || e.srcElement, s = r.getBoundingClientRect(), o = i.touches;
                o && o.length > 0 ? (a = o[0].clientX,
                n = o[0].clientY) : (a = i.clientX,
                n = i.clientY);
                var d = parseFloat(R.getStyle(r, "padding-left"))
                  , l = parseFloat(R.getStyle(r, "padding-top"))
                  , u = parseFloat(R.getStyle(r, "padding-right"))
                  , _ = parseFloat(R.getStyle(r, "padding-bottom"))
                  , m = s.right - s.left - d - u
                  , h = s.bottom - s.top - l - _;
                return {
                    x: a = Math.round((a - s.left - d) / m * r.width / t.currentDevicePixelRatio),
                    y: n = Math.round((n - s.top - l) / h * r.height / t.currentDevicePixelRatio)
                }
            }
            ,
            R.getConstraintWidth = function(e) {
                return a(e, "max-width", "clientWidth")
            }
            ,
            R.getConstraintHeight = function(e) {
                return a(e, "max-height", "clientHeight")
            }
            ,
            R._calculatePadding = function(e, t, a) {
                return (t = R.getStyle(e, t)).indexOf("%") > -1 ? a * parseInt(t, 10) / 100 : parseInt(t, 10)
            }
            ,
            R._getParentNode = function(e) {
                var t = e.parentNode;
                return t && "[object ShadowRoot]" === t.toString() && (t = t.host),
                t
            }
            ,
            R.getMaximumWidth = function(e) {
                var t = R._getParentNode(e);
                if (!t)
                    return e.clientWidth;
                var a = t.clientWidth
                  , n = a - R._calculatePadding(t, "padding-left", a) - R._calculatePadding(t, "padding-right", a)
                  , i = R.getConstraintWidth(e);
                return isNaN(i) ? n : Math.min(n, i)
            }
            ,
            R.getMaximumHeight = function(e) {
                var t = R._getParentNode(e);
                if (!t)
                    return e.clientHeight;
                var a = t.clientHeight
                  , n = a - R._calculatePadding(t, "padding-top", a) - R._calculatePadding(t, "padding-bottom", a)
                  , i = R.getConstraintHeight(e);
                return isNaN(i) ? n : Math.min(n, i)
            }
            ,
            R.getStyle = function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
            }
            ,
            R.retinaScale = function(e, t) {
                var a = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
                if (1 !== a) {
                    var n = e.canvas
                      , i = e.height
                      , r = e.width;
                    n.height = i * a,
                    n.width = r * a,
                    e.ctx.scale(a, a),
                    n.style.height || n.style.width || (n.style.height = i + "px",
                    n.style.width = r + "px")
                }
            }
            ,
            R.fontString = function(e, t, a) {
                return t + " " + e + "px " + a
            }
            ,
            R.longestText = function(e, t, a, n) {
                var i = (n = n || {}).data = n.data || {}
                  , r = n.garbageCollect = n.garbageCollect || [];
                n.font !== t && (i = n.data = {},
                r = n.garbageCollect = [],
                n.font = t),
                e.font = t;
                var s, o, d, l, u, _ = 0, m = a.length;
                for (s = 0; s < m; s++)
                    if (null != (l = a[s]) && !0 !== R.isArray(l))
                        _ = R.measureText(e, i, r, _, l);
                    else if (R.isArray(l))
                        for (o = 0,
                        d = l.length; o < d; o++)
                            null == (u = l[o]) || R.isArray(u) || (_ = R.measureText(e, i, r, _, u));
                var h = r.length / 2;
                if (h > a.length) {
                    for (s = 0; s < h; s++)
                        delete i[r[s]];
                    r.splice(0, h)
                }
                return _
            }
            ,
            R.measureText = function(e, t, a, n, i) {
                var r = t[i];
                return r || (r = t[i] = e.measureText(i).width,
                a.push(i)),
                r > n && (n = r),
                n
            }
            ,
            R.numberOfLabelLines = function(e) {
                var t = 1;
                return R.each(e, (function(e) {
                    R.isArray(e) && e.length > t && (t = e.length)
                }
                )),
                t
            }
            ,
            R.color = Y ? function(e) {
                return e instanceof CanvasGradient && (e = W.global.defaultColor),
                Y(e)
            }
            : function(e) {
                return console.error("Color.js not found!"),
                e
            }
            ,
            R.getHoverColor = function(e) {
                return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : R.color(e).saturate(.5).darken(.1).rgbString()
            }
        }(),
        ea._adapters = na,
        ea.Animation = $,
        ea.animationService = Z,
        ea.controllers = Ze,
        ea.DatasetController = ae,
        ea.defaults = W,
        ea.Element = q,
        ea.elements = ve,
        ea.Interaction = it,
        ea.layouts = ct,
        ea.platform = Pt,
        ea.plugins = Ot,
        ea.Scale = ga,
        ea.scaleService = At,
        ea.Ticks = ia,
        ea.Tooltip = Jt,
        ea.helpers.each(mn, (function(e, t) {
            ea.scaleService.registerScaleType(t, e, e._defaults)
        }
        )),
        On)
            On.hasOwnProperty(Cn) && ea.plugins.register(On[Cn]);
        ea.platform.initialize();
        var En = ea;
        return "undefined" != typeof window && (window.Chart = ea),
        ea.Chart = ea,
        ea.Legend = On.legend._element,
        ea.Title = On.title._element,
        ea.pluginService = ea.plugins,
        ea.PluginBase = ea.Element.extend({}),
        ea.canvasHelpers = ea.helpers.canvas,
        ea.layoutService = ea.layouts,
        ea.LinearScaleBase = ba,
        ea.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) {
            ea[e] = function(t, a) {
                return new ea(t,ea.helpers.merge(a || {}, {
                    type: e.charAt(0).toLowerCase() + e.slice(1)
                }))
            }
        }
        )),
        En
    }(function() {
        try {
            return a(0)
        } catch (e) {}
    }())
}
, function(e, t, a) {
    /*!
 * money.js / fx() v0.2
 * Copyright 2014 Open Exchange Rates
 *
 * JavaScript library for realtime currency conversion and exchange rate calculation.
 *
 * Freely distributable under the MIT license.
 * Portions of money.js are inspired by or borrowed from underscore.js
 *
 * For details, examples and documentation:
 * http://openexchangerates.github.io/money.js/
 */
    !function(a, n) {
        var i = function(e) {
            return new d(e)
        };
        i.version = "0.2";
        var r = a.fxSetup || {
            rates: {},
            base: ""
        };
        i.rates = r.rates,
        i.base = r.base,
        i.settings = {
            from: r.from || i.base,
            to: r.to || i.base
        };
        var s = i.convert = function(e, t) {
            if ("object" == typeof e && e.length) {
                for (var a = 0; a < e.length; a++)
                    e[a] = s(e[a], t);
                return e
            }
            return (t = t || {}).from || (t.from = i.settings.from),
            t.to || (t.to = i.settings.to),
            e * o(t.to, t.from)
        }
          , o = function(e, t) {
            var a = i.rates;
            if (a[i.base] = 1,
            !a[e] || !a[t])
                throw "fx error";
            return t === i.base ? a[e] : e === i.base ? 1 / a[t] : a[e] * (1 / a[t])
        }
          , d = function(e) {
            "string" == typeof e ? (this._v = parseFloat(e.replace(/[^0-9-.]/g, "")),
            this._fx = e.replace(/([^A-Za-z])/g, "")) : this._v = e
        }
          , l = i.prototype = d.prototype;
        l.convert = function() {
            var e = Array.prototype.slice.call(arguments);
            return e.unshift(this._v),
            s.apply(i, e)
        }
        ,
        l.from = function(e) {
            var t = i(s(this._v, {
                from: e,
                to: i.base
            }));
            return t._fx = i.base,
            t
        }
        ,
        l.to = function(e) {
            return s(this._v, {
                from: this._fx ? this._fx : i.settings.from,
                to: e
            })
        }
        ,
        e.exports && (t = e.exports = i),
        t.fx = i
    }(this)
}
, , function(e, t, a) {
    /*!
 * accounting.js v0.4.1
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
    !function(a, n) {
        var i = {
            version: "0.4.1",
            settings: {
                currency: {
                    symbol: "$",
                    format: "%s%v",
                    decimal: ".",
                    thousand: ",",
                    precision: 2,
                    grouping: 3
                },
                number: {
                    precision: 0,
                    grouping: 3,
                    thousand: ",",
                    decimal: "."
                }
            }
        }
          , r = Array.prototype.map
          , s = Array.isArray
          , o = Object.prototype.toString;
        function d(e) {
            return !!("" === e || e && e.charCodeAt && e.substr)
        }
        function l(e) {
            return s ? s(e) : "[object Array]" === o.call(e)
        }
        function u(e) {
            return e && "[object Object]" === o.call(e)
        }
        function _(e, t) {
            var a;
            for (a in e = e || {},
            t = t || {})
                t.hasOwnProperty(a) && null == e[a] && (e[a] = t[a]);
            return e
        }
        function m(e, t, a) {
            var n, i, s = [];
            if (!e)
                return s;
            if (r && e.map === r)
                return e.map(t, a);
            for (n = 0,
            i = e.length; n < i; n++)
                s[n] = t.call(a, e[n], n, e);
            return s
        }
        function h(e, t) {
            return e = Math.round(Math.abs(e)),
            isNaN(e) ? t : e
        }
        function c(e) {
            var t = i.settings.currency.format;
            return "function" == typeof e && (e = e()),
            d(e) && e.match("%v") ? {
                pos: e,
                neg: e.replace("-", "").replace("%v", "-%v"),
                zero: e
            } : e && e.pos && e.pos.match("%v") ? e : d(t) ? i.settings.currency.format = {
                pos: t,
                neg: t.replace("%v", "-%v"),
                zero: t
            } : t
        }
        var f = i.unformat = i.parse = function(e, t) {
            if (l(e))
                return m(e, (function(e) {
                    return f(e, t)
                }
                ));
            if ("number" == typeof (e = e || 0))
                return e;
            t = t || i.settings.number.decimal;
            var a = new RegExp("[^0-9-" + t + "]",["g"])
              , n = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(a, "").replace(t, "."));
            return isNaN(n) ? 0 : n
        }
          , M = i.toFixed = function(e, t) {
            t = h(t, i.settings.number.precision);
            var a = Math.pow(10, t);
            return (Math.round(i.unformat(e) * a) / a).toFixed(t)
        }
          , p = i.formatNumber = i.format = function(e, t, a, n) {
            if (l(e))
                return m(e, (function(e) {
                    return p(e, t, a, n)
                }
                ));
            e = f(e);
            var r = _(u(t) ? t : {
                precision: t,
                thousand: a,
                decimal: n
            }, i.settings.number)
              , s = h(r.precision)
              , o = e < 0 ? "-" : ""
              , d = parseInt(M(Math.abs(e || 0), s), 10) + ""
              , c = d.length > 3 ? d.length % 3 : 0;
            return o + (c ? d.substr(0, c) + r.thousand : "") + d.substr(c).replace(/(\d{3})(?=\d)/g, "$1" + r.thousand) + (s ? r.decimal + M(Math.abs(e), s).split(".")[1] : "")
        }
          , g = i.formatMoney = function(e, t, a, n, r, s) {
            if (l(e))
                return m(e, (function(e) {
                    return g(e, t, a, n, r, s)
                }
                ));
            e = f(e);
            var o = _(u(t) ? t : {
                symbol: t,
                precision: a,
                thousand: n,
                decimal: r,
                format: s
            }, i.settings.currency)
              , d = c(o.format);
            return (e > 0 ? d.pos : e < 0 ? d.neg : d.zero).replace("%s", o.symbol).replace("%v", p(Math.abs(e), h(o.precision), o.thousand, o.decimal))
        }
        ;
        i.formatColumn = function(e, t, a, n, r, s) {
            if (!e)
                return [];
            var o = _(u(t) ? t : {
                symbol: t,
                precision: a,
                thousand: n,
                decimal: r,
                format: s
            }, i.settings.currency)
              , M = c(o.format)
              , g = M.pos.indexOf("%s") < M.pos.indexOf("%v")
              , y = 0
              , L = m(e, (function(e, t) {
                if (l(e))
                    return i.formatColumn(e, o);
                var a = ((e = f(e)) > 0 ? M.pos : e < 0 ? M.neg : M.zero).replace("%s", o.symbol).replace("%v", p(Math.abs(e), h(o.precision), o.thousand, o.decimal));
                return a.length > y && (y = a.length),
                a
            }
            ));
            return m(L, (function(e, t) {
                return d(e) && e.length < y ? g ? e.replace(o.symbol, o.symbol + new Array(y - e.length + 1).join(" ")) : new Array(y - e.length + 1).join(" ") + e : e
            }
            ))
        }
        ,
        e.exports && (t = e.exports = i),
        t.accounting = i
    }()
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }
          , n = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , i = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , r = function(e) {
            return function(t, a, r, s) {
                var o = n(t)
                  , d = i[e][n(t)];
                return 2 === o && (d = d[a ? 0 : 1]),
                d.replace(/%d/i, t)
            }
        }
          , s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return a[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 0,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }
          , a = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        }
          , n = {
            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
        }
          , i = function(e) {
            return function(t, i, r, s) {
                var o = a(t)
                  , d = n[e][a(t)];
                return 2 === o && (d = d[i ? 0 : 1]),
                d.replace(/%d/i, t)
            }
        }
          , r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: i("s"),
                ss: i("s"),
                m: i("m"),
                mm: i("m"),
                h: i("h"),
                hh: i("h"),
                d: i("d"),
                dd: i("d"),
                M: i("M"),
                MM: i("M"),
                y: i("y"),
                yy: i("y")
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        };
        e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function(e) {
                return "م" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return a[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function(e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function(e) {
                if (0 === e)
                    return e + "-ıncı";
                var a = e % 10;
                return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = +e,
            i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            }[a].split("_"),
            n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }
        e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "дзень",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                case "D":
                    return e + "-га";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }
          , a = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0"
        };
        e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
        }
          , a = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0"
        };
        e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                }(e) : e
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[a], e)
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t
                    }(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
            case "ss":
                return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (a = "a"),
                e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")
          , a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
          , n = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
          , i = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function r(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }
        function s(e, t, a, n) {
            var i = e + " ";
            switch (a) {
            case "s":
                return t || n ? "pár sekund" : "pár sekundami";
            case "ss":
                return t || n ? i + (r(e) ? "sekundy" : "sekund") : i + "sekundami";
            case "m":
                return t ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
                return t || n ? i + (r(e) ? "minuty" : "minut") : i + "minutami";
            case "h":
                return t ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
                return t || n ? i + (r(e) ? "hodiny" : "hodin") : i + "hodinami";
            case "d":
                return t || n ? "den" : "dnem";
            case "dd":
                return t || n ? i + (r(e) ? "dny" : "dní") : i + "dny";
            case "M":
                return t || n ? "měsíc" : "měsícem";
            case "MM":
                return t || n ? i + (r(e) ? "měsíce" : "měsíců") : i + "měsíci";
            case "y":
                return t || n ? "rok" : "rokem";
            case "yy":
                return t || n ? i + (r(e) ? "roky" : "let") : i + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: a,
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: s,
                ss: s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                e + t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
          , a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function(e) {
                return "މފ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 7,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
            },
            isPM: function(e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 6:
                        return "[το προηγούμενο] dddd [{}] LT";
                    default:
                        return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var a, n = this._calendarEl[e], i = t && t.hours();
                return ((a = n)instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)),
                n.replace("{}", i % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
          , a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
          , n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
          , i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? i[a][2] ? i[a][2] : i[a][1] : n ? i[a][0] : i[a][1]
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d päeva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
        }
          , a = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
        };
        e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/[۰-۹]/g, (function(e) {
                    return a[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
          , a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
        function n(e, n, i, r) {
            var s = "";
            switch (i) {
            case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return r ? "sekunnin" : "sekuntia";
            case "m":
                return r ? "minuutin" : "minuutti";
            case "mm":
                s = r ? "minuutin" : "minuuttia";
                break;
            case "h":
                return r ? "tunnin" : "tunti";
            case "hh":
                s = r ? "tunnin" : "tuntia";
                break;
            case "d":
                return r ? "päivän" : "päivä";
            case "dd":
                s = r ? "päivän" : "päivää";
                break;
            case "M":
                return r ? "kuukauden" : "kuukausi";
            case "MM":
                s = r ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return r ? "vuoden" : "vuosi";
            case "yy":
                s = r ? "vuoden" : "vuotta"
            }
            return s = function(e, n) {
                return e < 10 ? n ? a[e] : t[e] : e
            }(e, r) + " " + s
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaður",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
          , a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ga", {
            months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
            monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
            monthsParseExact: !0,
            weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
            weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"],
            weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Amárach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inné aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ó shin",
                s: "cúpla soicind",
                ss: "%d soicind",
                m: "nóiméad",
                mm: "%d nóiméad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "lá",
                dd: "%d lá",
                M: "mí",
                MM: "%d mí",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            monthsParseExact: !0,
            weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka voran", "ek vor"],
                hh: [e + " voranim", e + " voram"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? i[a][0] : i[a][1]
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                case "D":
                    return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦"
        }
          , a = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0"
        };
        e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function(e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function(e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function(e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function(e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n = e + " ";
            switch (a) {
            case "ss":
                return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return n += 1 === e ? "dan" : "dana";
            case "MM":
                return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        function a(e, t, a, n) {
            var i = e;
            switch (a) {
            case "s":
                return n || t ? "néhány másodperc" : "néhány másodperce";
            case "ss":
                return i + (n || t) ? " másodperc" : " másodperce";
            case "m":
                return "egy" + (n || t ? " perc" : " perce");
            case "mm":
                return i + (n || t ? " perc" : " perce");
            case "h":
                return "egy" + (n || t ? " óra" : " órája");
            case "hh":
                return i + (n || t ? " óra" : " órája");
            case "d":
                return "egy" + (n || t ? " nap" : " napja");
            case "dd":
                return i + (n || t ? " nap" : " napja");
            case "M":
                return "egy" + (n || t ? " hónap" : " hónapja");
            case "MM":
                return i + (n || t ? " hónap" : " hónapja");
            case "y":
                return "egy" + (n || t ? " év" : " éve");
            case "yy":
                return i + (n || t ? " év" : " éve")
            }
            return ""
        }
        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }
        e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function(e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(e, t) {
                switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e) {
            return e % 100 == 11 || e % 10 != 1
        }
        function a(e, a, n, i) {
            var r = e + " ";
            switch (n) {
            case "s":
                return a || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
                return t(e) ? r + (a || i ? "sekúndur" : "sekúndum") : r + "sekúnda";
            case "m":
                return a ? "mínúta" : "mínútu";
            case "mm":
                return t(e) ? r + (a || i ? "mínútur" : "mínútum") : a ? r + "mínúta" : r + "mínútu";
            case "hh":
                return t(e) ? r + (a || i ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
            case "d":
                return a ? "dagur" : i ? "dag" : "degi";
            case "dd":
                return t(e) ? a ? r + "dagar" : r + (i ? "daga" : "dögum") : a ? r + "dagur" : r + (i ? "dag" : "degi");
            case "M":
                return a ? "mánuður" : i ? "mánuð" : "mánuði";
            case "MM":
                return t(e) ? a ? r + "mánuðir" : r + (i ? "mánuði" : "mánuðum") : a ? r + "mánuður" : r + (i ? "mánuð" : "mánuði");
            case "y":
                return a || i ? "ár" : "ári";
            case "yy":
                return t(e) ? r + (a || i ? "ár" : "árum") : r + (a || i ? "ár" : "ári")
            }
        }
        e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: "klukkustund",
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日(ddd) HH:mm"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(e) {
                return "午後" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
                },
                lastDay: "[昨日] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function(e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "១",
            2: "២",
            3: "៣",
            4: "៤",
            5: "៥",
            6: "៦",
            7: "៧",
            8: "៨",
            9: "៩",
            0: "០"
        }
          , a = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0"
        };
        e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function(e) {
                return "ល្ងាច" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ព្រឹក" : "ល្ងាច"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function(e) {
                return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦"
        }
          , a = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0"
        };
        e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function(e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function(e) {
                return e + "ನೇ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "일";
                case "M":
                    return e + "월";
                case "w":
                case "W":
                    return e + "주";
                default:
                    return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function(e) {
                return "오후" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "오전" : "오후"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }
          , a = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0"
        }
          , n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", {
            months: n,
            monthsShort: n,
            weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function(e) {
                return /ئێواره‌/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "به‌یانی" : "ئێواره‌"
            },
            calendar: {
                sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                nextDay: "[به‌یانی كاتژمێر] LT",
                nextWeek: "dddd [كاتژمێر] LT",
                lastDay: "[دوێنێ كاتژمێر] LT",
                lastWeek: "dddd [كاتژمێر] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "له‌ %s",
                past: "%s",
                s: "چه‌ند چركه‌یه‌ك",
                ss: "چركه‌ %d",
                m: "یه‌ك خوله‌ك",
                mm: "%d خوله‌ك",
                h: "یه‌ك كاتژمێر",
                hh: "%d كاتژمێر",
                d: "یه‌ك ڕۆژ",
                dd: "%d ڕۆژ",
                M: "یه‌ك مانگ",
                MM: "%d مانگ",
                y: "یه‌ك ساڵ",
                yy: "%d ساڵ"
            },
            preparse: function(e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                    return a[e]
                }
                )).replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                )).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кечээ саат] LT",
                lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? i[a][0] : i[a][1]
        }
        function a(e) {
            if (e = parseInt(e, 10),
            isNaN(e))
                return !1;
            if (e < 0)
                return !0;
            if (e < 10)
                return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return a(0 === t ? e / 10 : t)
            }
            if (e < 1e4) {
                for (; e >= 10; )
                    e /= 10;
                return a(e)
            }
            return a(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                },
                past: function(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d Méint",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(e) {
                return "ທີ່" + e
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        function a(e, t, a, n) {
            return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
        }
        function n(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }
        function i(e) {
            return t[e].split("_")
        }
        function r(e, t, r, s) {
            var o = e + " ";
            return 1 === e ? o + a(0, t, r[0], s) : t ? o + (n(e) ? i(r)[1] : i(r)[0]) : s ? o + i(r)[1] : o + (n(e) ? i(r)[1] : i(r)[2])
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: function(e, t, a, n) {
                    return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                },
                ss: r,
                m: a,
                mm: r,
                h: a,
                hh: r,
                d: a,
                dd: r,
                M: a,
                MM: r,
                y: a,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        function a(e, t, a) {
            return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }
        function n(e, n, i) {
            return e + " " + a(t[i], e, n)
        }
        function i(e, n, i) {
            return a(t[i], e, n)
        }
        e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                },
                ss: n,
                m: i,
                mm: n,
                h: i,
                hh: n,
                d: i,
                dd: n,
                M: i,
                MM: n,
                y: i,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Изминатата] dddd [во] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(e) {
                var t = e % 10
                  , a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && a < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            switch (a) {
            case "s":
                return t ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
                return e + (t ? " секунд" : " секундын");
            case "m":
            case "mm":
                return e + (t ? " минут" : " минутын");
            case "h":
            case "hh":
                return e + (t ? " цаг" : " цагийн");
            case "d":
            case "dd":
                return e + (t ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
                return e + (t ? " сар" : " сарын");
            case "y":
            case "yy":
                return e + (t ? " жил" : " жилийн");
            default:
                return e
            }
        }
        e.defineLocale("mn", {
            months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
            monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY оны MMMMын D",
                LLL: "YYYY оны MMMMын D HH:mm",
                LLLL: "dddd, YYYY оны MMMMын D HH:mm"
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function(e) {
                return "ҮХ" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ҮӨ" : "ҮХ"
            },
            calendar: {
                sameDay: "[Өнөөдөр] LT",
                nextDay: "[Маргааш] LT",
                nextWeek: "[Ирэх] dddd LT",
                lastDay: "[Өчигдөр] LT",
                lastWeek: "[Өнгөрсөн] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s дараа",
                past: "%s өмнө",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + " өдөр";
                default:
                    return e
                }
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        function n(e, t, a, n) {
            var i = "";
            if (t)
                switch (a) {
                case "s":
                    i = "काही सेकंद";
                    break;
                case "ss":
                    i = "%d सेकंद";
                    break;
                case "m":
                    i = "एक मिनिट";
                    break;
                case "mm":
                    i = "%d मिनिटे";
                    break;
                case "h":
                    i = "एक तास";
                    break;
                case "hh":
                    i = "%d तास";
                    break;
                case "d":
                    i = "एक दिवस";
                    break;
                case "dd":
                    i = "%d दिवस";
                    break;
                case "M":
                    i = "एक महिना";
                    break;
                case "MM":
                    i = "%d महिने";
                    break;
                case "y":
                    i = "एक वर्ष";
                    break;
                case "yy":
                    i = "%d वर्षे"
                }
            else
                switch (a) {
                case "s":
                    i = "काही सेकंदां";
                    break;
                case "ss":
                    i = "%d सेकंदां";
                    break;
                case "m":
                    i = "एका मिनिटा";
                    break;
                case "mm":
                    i = "%d मिनिटां";
                    break;
                case "h":
                    i = "एका तासा";
                    break;
                case "hh":
                    i = "%d तासां";
                    break;
                case "d":
                    i = "एका दिवसा";
                    break;
                case "dd":
                    i = "%d दिवसां";
                    break;
                case "M":
                    i = "एका महिन्या";
                    break;
                case "MM":
                    i = "%d महिन्यां";
                    break;
                case "y":
                    i = "एका वर्षा";
                    break;
                case "yy":
                    i = "%d वर्षां"
                }
            return i.replace(/%d/i, e)
        }
        e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
        }
          , a = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0"
        };
        e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }
          , a = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
        };
        e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function(e) {
                return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
          , n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
          , i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, n) {
                return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦"
        }
          , a = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0"
        };
        e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "[ਅਗਲਾ] dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function(e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
          , a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        function n(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }
        function i(e, t, a) {
            var i = e + " ";
            switch (a) {
            case "ss":
                return i + (n(e) ? "sekundy" : "sekund");
            case "m":
                return t ? "minuta" : "minutę";
            case "mm":
                return i + (n(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzinę";
            case "hh":
                return i + (n(e) ? "godziny" : "godzin");
            case "MM":
                return i + (n(e) ? "miesiące" : "miesięcy");
            case "yy":
                return i + (n(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, n) {
                return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W niedzielę o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W środę o] LT";
                    case 6:
                        return "[W sobotę o] LT";
                    default:
                        return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: i,
                y: "rok",
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "),
            e + n + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[a]
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o oră",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lună",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = +e,
            i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[a].split("_"),
            n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }
        var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня, в] LT",
                nextDay: "[Завтра, в] LT",
                lastDay: "[Вчера, в] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В следующее] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В следующий] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В следующую] dddd, [в] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week())
                        return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                    switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd, [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd, [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd, [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: t,
                m: t,
                mm: t,
                h: "час",
                hh: t,
                d: "день",
                dd: t,
                M: "месяц",
                MM: t,
                y: "год",
                yy: t
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-й";
                case "D":
                    return e + "-го";
                case "w":
                case "W":
                    return e + "-я";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
          , a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function(e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
          , a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function n(e) {
            return e > 1 && e < 5
        }
        function i(e, t, a, i) {
            var r = e + " ";
            switch (a) {
            case "s":
                return t || i ? "pár sekúnd" : "pár sekundami";
            case "ss":
                return t || i ? r + (n(e) ? "sekundy" : "sekúnd") : r + "sekundami";
            case "m":
                return t ? "minúta" : i ? "minútu" : "minútou";
            case "mm":
                return t || i ? r + (n(e) ? "minúty" : "minút") : r + "minútami";
            case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
            case "hh":
                return t || i ? r + (n(e) ? "hodiny" : "hodín") : r + "hodinami";
            case "d":
                return t || i ? "deň" : "dňom";
            case "dd":
                return t || i ? r + (n(e) ? "dni" : "dní") : r + "dňami";
            case "M":
                return t || i ? "mesiac" : "mesiacom";
            case "MM":
                return t || i ? r + (n(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
            case "y":
                return t || i ? "rok" : "rokom";
            case "yy":
                return t || i ? r + (n(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: a,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = e + " ";
            switch (a) {
            case "s":
                return t || n ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return i += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami";
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami";
            case "d":
                return t || n ? "en dan" : "enim dnem";
            case "dd":
                return i += 1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi";
            case "M":
                return t || n ? "en mesec" : "enim mesecem";
            case "MM":
                return i += 1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci";
            case "y":
                return t || n ? "eno leto" : "enim letom";
            case "yy":
                return i += 1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            },
            translate: function(e, a, n) {
                var i = t.words[n];
                return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                    case 0:
                        return "[у] [недељу] [у] LT";
                    case 3:
                        return "[у] [среду] [у] LT";
                    case 6:
                        return "[у] [суботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, a) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦"
        }
          , a = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0"
        };
        e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function(e) {
                return e + "வது"
            },
            preparse: function(e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                    return a[e]
                }
                ))
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e]
                }
                ))
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function(e, t, a) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум"
        };
        e.defineLocale("tg", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Имрӯз соати] LT",
                nextDay: "[Пагоҳ соати] LT",
                lastDay: "[Дирӯз соати] LT",
                nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "баъди %s",
                past: "%s пеш",
                s: "якчанд сония",
                m: "як дақиқа",
                mm: "%d дақиқа",
                h: "як соат",
                hh: "%d соат",
                d: "як рӯз",
                dd: "%d рӯз",
                M: "як моҳ",
                MM: "%d моҳ",
                y: "як сол",
                yy: "%d сол"
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function a(e, a, n, i) {
            var r = function(e) {
                var a = Math.floor(e % 1e3 / 100)
                  , n = Math.floor(e % 100 / 10)
                  , i = e % 10
                  , r = "";
                return a > 0 && (r += t[a] + "vatlh"),
                n > 0 && (r += ("" !== r ? " " : "") + t[n] + "maH"),
                i > 0 && (r += ("" !== r ? " " : "") + t[i]),
                "" === r ? "pagh" : r
            }(e);
            switch (n) {
            case "ss":
                return r + " lup";
            case "mm":
                return r + " tup";
            case "hh":
                return r + " rep";
            case "dd":
                return r + " jaj";
            case "MM":
                return r + " jar";
            case "yy":
                return r + " DIS"
            }
        }
        e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                },
                past: function(e) {
                    var t = e;
                    return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                },
                s: "puS lup",
                ss: a,
                m: "wa’ tup",
                mm: a,
                h: "wa’ rep",
                hh: a,
                d: "wa’ jaj",
                dd: a,
                M: "wa’ jar",
                MM: a,
                y: "wa’ DIS",
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(e, a) {
                switch (a) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e)
                        return e + "'ıncı";
                    var n = e % 10;
                    return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a, n) {
            var i = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return n ? i[a][0] : t ? i[a][0] : i[a][1]
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function(e, t, a) {
                return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
            weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "يېرىم كېچە" : n < 900 ? "سەھەر" : n < 1130 ? "چۈشتىن بۇرۇن" : n < 1230 ? "چۈش" : n < 1800 ? "چۈشتىن كېيىن" : "كەچ"
            },
            calendar: {
                sameDay: "[بۈگۈن سائەت] LT",
                nextDay: "[ئەتە سائەت] LT",
                nextWeek: "[كېلەركى] dddd [سائەت] LT",
                lastDay: "[تۆنۈگۈن] LT",
                lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s كېيىن",
                past: "%s بۇرۇن",
                s: "نەچچە سېكونت",
                ss: "%d سېكونت",
                m: "بىر مىنۇت",
                mm: "%d مىنۇت",
                h: "بىر سائەت",
                hh: "%d سائەت",
                d: "بىر كۈن",
                dd: "%d كۈن",
                M: "بىر ئاي",
                MM: "%d ئاي",
                y: "بىر يىل",
                yy: "%d يىل"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "-كۈنى";
                case "w":
                case "W":
                    return e + "-ھەپتە";
                default:
                    return e
                }
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        function t(e, t, a) {
            var n, i;
            return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = +e,
            i = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            }[a].split("_"),
            n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
        }
        function a(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function(e, t) {
                var a = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1)) : e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: a("[Сьогодні "),
                nextDay: a("[Завтра "),
                lastDay: a("[Вчора "),
                nextWeek: a("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return a("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return a("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: t,
                m: t,
                mm: t,
                h: "годину",
                hh: t,
                d: "день",
                dd: t,
                M: "місяць",
                MM: t,
                y: "рік",
                yy: t
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(e, t) {
                switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-й";
                case "D":
                    return e + "-го";
                default:
                    return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
          , a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: a,
            weekdaysShort: a,
            weekdaysMin: a,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function(e) {
                return "شام" === e
            },
            meridiem: function(e, t, a) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function(e) {
                return e.replace(/،/g, ",")
            },
            postformat: function(e) {
                return e.replace(/,/g, "،")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e)
            },
            meridiem: function(e, t, a) {
                return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "周";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0))
}
, function(e, t, a) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function(e, t, a) {
                var n = 100 * e + t;
                return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1130 ? "上午" : n < 1230 ? "中午" : n < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天] LT",
                nextDay: "[明天] LT",
                nextWeek: "[下]dddd LT",
                lastDay: "[昨天] LT",
                lastWeek: "[上]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(e, t) {
                switch (t) {
                case "d":
                case "D":
                case "DDD":
                    return e + "日";
                case "M":
                    return e + "月";
                case "w":
                case "W":
                    return e + "週";
                default:
                    return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    }(a(0))
}
, , , , function(e, t, a) {
    "use strict";
    a.r(t);
    var n = a(1)
      , i = a.n(n)
      , r = a(4)
      , s = a.n(r)
      , o = a(2)
      , d = a.n(o);
    window.addEventListener("load", ()=>{
        const e = document.querySelector(".example")
          , t = document.querySelector(".from.input")
          , a = document.querySelector(".select .from")
          , n = document.querySelector(".fromText")
          , r = document.querySelector(".to.input")
          , o = document.querySelector(".select .to")
          , l = document.querySelector(".toText");
        i.a.defaults.global.animation = !1,
        i.a.defaults.global.defaultColor = "rgba(0,0,0,0)",
        i.a.defaults.global.elements.point.radius = 0,
        i.a.defaults.global.elements.line.fill = !1,
        i.a.defaults.global.legend.position = "bottom",
        i.a.defaults.global.legend.labels.usePointStyle = !0,
        i.a.defaults.global.tooltips.enabled = !1;
        const u = {
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: !1,
                        drawBorder: !1
                    },
                    ticks: {
                        autoSkip: !0,
                        maxTicksLimit: 4
                    },
                    type: "time"
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: !1
                    },
                    ticks: {
                        maxTicksLimit: 4,
                        padding: 10
                    }
                }]
            },
            hover: {
                mode: null
            }
        }
          , _ = (e,t="")=>{
            let a = e < .1 ? 4 : 2;
            return a = e < 1e3 ? a : 0,
            a = Number.isInteger(Number(s.a.toFixed(e, a))) ? 0 : a,
            s.a.formatNumber(e, a, t)
        }
          , m = ()=>{
            n.innerHTML = `1 ${a.options[a.selectedIndex].text} equals`,
            l.innerHTML = `${_(d()(1).from(a.value).to(o.value), ",")} ${o.options[o.selectedIndex].text}`,
            t.oninput(),
            fetch(`https://api.frankfurter.app/1999-01-01..?from=${o.value}&to=${a.value}`).then(e=>e.json()).then(e=>{
                const t = {
                    datasets: [{
                        borderColor: "#209cef",
                        data: Object.keys(e.rates).map(t=>({
                            x: t,
                            y: 1 / e.rates[t][a.value]
                        }))
                    }]
                }
                  , n = document.querySelector(".example .chart").getContext("2d");
                new i.a(n,{
                    type: "line",
                    data: t,
                    options: u
                })
            }
            )
        }
        ;
        fetch("https://api.frankfurter.app/currencies").then(e=>e.json()).then(n=>{
            Object.keys(n).map(e=>({
                code: e,
                name: n[e]
            })).sort((e,t)=>e.name > t.name).forEach(e=>{
                const t = document.createElement("option");
                t.value = e.code,
                t.innerHTML = e.name,
                a.appendChild(t),
                o.appendChild(t.cloneNode(!0))
            }
            ),
            t.oninput = ()=>{
                r.value = d()(t.value).from(a.value).to(o.value),
                r.onchange()
            }
            ,
            t.onchange = ()=>{
                t.value = _(t.value)
            }
            ,
            r.oninput = ()=>{
                t.value = d()(r.value).from(o.value).to(a.value),
                t.onchange()
            }
            ,
            r.onchange = ()=>{
                r.value = _(r.value)
            }
            ,
            a.onchange = m,
            o.onchange = m,
            a.value = "EUR",
            o.value = "USD",
            t.value = 1,
            fetch("https://api.frankfurter.app/latest").then(e=>e.json()).then(e=>{
                d.a.base = e.base,
                d.a.rates = e.rates,
                t.oninput(),
                m()
            }
            ),
            e.style.display = "block"
        }
        )
    }
    )
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, a) {
    var n = {
        "./af": 5,
        "./af.js": 5,
        "./ar": 6,
        "./ar-dz": 7,
        "./ar-dz.js": 7,
        "./ar-kw": 8,
        "./ar-kw.js": 8,
        "./ar-ly": 9,
        "./ar-ly.js": 9,
        "./ar-ma": 10,
        "./ar-ma.js": 10,
        "./ar-sa": 11,
        "./ar-sa.js": 11,
        "./ar-tn": 12,
        "./ar-tn.js": 12,
        "./ar.js": 6,
        "./az": 13,
        "./az.js": 13,
        "./be": 14,
        "./be.js": 14,
        "./bg": 15,
        "./bg.js": 15,
        "./bm": 16,
        "./bm.js": 16,
        "./bn": 17,
        "./bn.js": 17,
        "./bo": 18,
        "./bo.js": 18,
        "./br": 19,
        "./br.js": 19,
        "./bs": 20,
        "./bs.js": 20,
        "./ca": 21,
        "./ca.js": 21,
        "./cs": 22,
        "./cs.js": 22,
        "./cv": 23,
        "./cv.js": 23,
        "./cy": 24,
        "./cy.js": 24,
        "./da": 25,
        "./da.js": 25,
        "./de": 26,
        "./de-at": 27,
        "./de-at.js": 27,
        "./de-ch": 28,
        "./de-ch.js": 28,
        "./de.js": 26,
        "./dv": 29,
        "./dv.js": 29,
        "./el": 30,
        "./el.js": 30,
        "./en-SG": 31,
        "./en-SG.js": 31,
        "./en-au": 32,
        "./en-au.js": 32,
        "./en-ca": 33,
        "./en-ca.js": 33,
        "./en-gb": 34,
        "./en-gb.js": 34,
        "./en-ie": 35,
        "./en-ie.js": 35,
        "./en-il": 36,
        "./en-il.js": 36,
        "./en-nz": 37,
        "./en-nz.js": 37,
        "./eo": 38,
        "./eo.js": 38,
        "./es": 39,
        "./es-do": 40,
        "./es-do.js": 40,
        "./es-us": 41,
        "./es-us.js": 41,
        "./es.js": 39,
        "./et": 42,
        "./et.js": 42,
        "./eu": 43,
        "./eu.js": 43,
        "./fa": 44,
        "./fa.js": 44,
        "./fi": 45,
        "./fi.js": 45,
        "./fo": 46,
        "./fo.js": 46,
        "./fr": 47,
        "./fr-ca": 48,
        "./fr-ca.js": 48,
        "./fr-ch": 49,
        "./fr-ch.js": 49,
        "./fr.js": 47,
        "./fy": 50,
        "./fy.js": 50,
        "./ga": 51,
        "./ga.js": 51,
        "./gd": 52,
        "./gd.js": 52,
        "./gl": 53,
        "./gl.js": 53,
        "./gom-latn": 54,
        "./gom-latn.js": 54,
        "./gu": 55,
        "./gu.js": 55,
        "./he": 56,
        "./he.js": 56,
        "./hi": 57,
        "./hi.js": 57,
        "./hr": 58,
        "./hr.js": 58,
        "./hu": 59,
        "./hu.js": 59,
        "./hy-am": 60,
        "./hy-am.js": 60,
        "./id": 61,
        "./id.js": 61,
        "./is": 62,
        "./is.js": 62,
        "./it": 63,
        "./it-ch": 64,
        "./it-ch.js": 64,
        "./it.js": 63,
        "./ja": 65,
        "./ja.js": 65,
        "./jv": 66,
        "./jv.js": 66,
        "./ka": 67,
        "./ka.js": 67,
        "./kk": 68,
        "./kk.js": 68,
        "./km": 69,
        "./km.js": 69,
        "./kn": 70,
        "./kn.js": 70,
        "./ko": 71,
        "./ko.js": 71,
        "./ku": 72,
        "./ku.js": 72,
        "./ky": 73,
        "./ky.js": 73,
        "./lb": 74,
        "./lb.js": 74,
        "./lo": 75,
        "./lo.js": 75,
        "./lt": 76,
        "./lt.js": 76,
        "./lv": 77,
        "./lv.js": 77,
        "./me": 78,
        "./me.js": 78,
        "./mi": 79,
        "./mi.js": 79,
        "./mk": 80,
        "./mk.js": 80,
        "./ml": 81,
        "./ml.js": 81,
        "./mn": 82,
        "./mn.js": 82,
        "./mr": 83,
        "./mr.js": 83,
        "./ms": 84,
        "./ms-my": 85,
        "./ms-my.js": 85,
        "./ms.js": 84,
        "./mt": 86,
        "./mt.js": 86,
        "./my": 87,
        "./my.js": 87,
        "./nb": 88,
        "./nb.js": 88,
        "./ne": 89,
        "./ne.js": 89,
        "./nl": 90,
        "./nl-be": 91,
        "./nl-be.js": 91,
        "./nl.js": 90,
        "./nn": 92,
        "./nn.js": 92,
        "./pa-in": 93,
        "./pa-in.js": 93,
        "./pl": 94,
        "./pl.js": 94,
        "./pt": 95,
        "./pt-br": 96,
        "./pt-br.js": 96,
        "./pt.js": 95,
        "./ro": 97,
        "./ro.js": 97,
        "./ru": 98,
        "./ru.js": 98,
        "./sd": 99,
        "./sd.js": 99,
        "./se": 100,
        "./se.js": 100,
        "./si": 101,
        "./si.js": 101,
        "./sk": 102,
        "./sk.js": 102,
        "./sl": 103,
        "./sl.js": 103,
        "./sq": 104,
        "./sq.js": 104,
        "./sr": 105,
        "./sr-cyrl": 106,
        "./sr-cyrl.js": 106,
        "./sr.js": 105,
        "./ss": 107,
        "./ss.js": 107,
        "./sv": 108,
        "./sv.js": 108,
        "./sw": 109,
        "./sw.js": 109,
        "./ta": 110,
        "./ta.js": 110,
        "./te": 111,
        "./te.js": 111,
        "./tet": 112,
        "./tet.js": 112,
        "./tg": 113,
        "./tg.js": 113,
        "./th": 114,
        "./th.js": 114,
        "./tl-ph": 115,
        "./tl-ph.js": 115,
        "./tlh": 116,
        "./tlh.js": 116,
        "./tr": 117,
        "./tr.js": 117,
        "./tzl": 118,
        "./tzl.js": 118,
        "./tzm": 119,
        "./tzm-latn": 120,
        "./tzm-latn.js": 120,
        "./tzm.js": 119,
        "./ug-cn": 121,
        "./ug-cn.js": 121,
        "./uk": 122,
        "./uk.js": 122,
        "./ur": 123,
        "./ur.js": 123,
        "./uz": 124,
        "./uz-latn": 125,
        "./uz-latn.js": 125,
        "./uz.js": 124,
        "./vi": 126,
        "./vi.js": 126,
        "./x-pseudo": 127,
        "./x-pseudo.js": 127,
        "./yo": 128,
        "./yo.js": 128,
        "./zh-cn": 129,
        "./zh-cn.js": 129,
        "./zh-hk": 130,
        "./zh-hk.js": 130,
        "./zh-tw": 131,
        "./zh-tw.js": 131
    };
    function i(e) {
        var t = r(e);
        return a(t)
    }
    function r(e) {
        if (!a.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return n[e]
    }
    i.keys = function() {
        return Object.keys(n)
    }
    ,
    i.resolve = r,
    e.exports = i,
    i.id = 137
}
]);
