import j from "dayjs";
import { inject as ut, computed as $, defineComponent as W, openBlock as O, createElementBlock as k, createElementVNode as U, Fragment as Q, renderList as it, unref as E, normalizeStyle as F, renderSlot as A, createTextVNode as st, toDisplayString as X, createCommentVNode as Z, toRefs as tt, ref as T, watch as dt, nextTick as St, createBlock as lt, Teleport as Kt, createVNode as bt, Transition as Qt, withCtx as J, getCurrentScope as Xt, onScopeDispose as Zt, getCurrentInstance as te, onMounted as Ct, useSlots as ee, provide as ot, normalizeClass as ne, withModifiers as ae, mergeProps as re, TransitionGroup as oe } from "vue";
var z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kt = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n();
  })(z, function() {
    return function(o, n) {
      n.prototype.isSameOrBefore = function(f, i) {
        return this.isSame(f, i) || this.isBefore(f, i);
      };
    };
  });
})(kt);
const ie = kt.exports;
var Tt = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n();
  })(z, function() {
    return function(o, n) {
      n.prototype.isSameOrAfter = function(f, i) {
        return this.isSame(f, i) || this.isAfter(f, i);
      };
    };
  });
})(Tt);
const se = Tt.exports;
var Ht = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n();
  })(z, function() {
    return function(o, n, f) {
      n.prototype.isBetween = function(i, a, d, m) {
        var r = f(i), c = f(a), t = (m = m || "()")[0] === "(", u = m[1] === ")";
        return (t ? this.isAfter(r, d) : !this.isBefore(r, d)) && (u ? this.isBefore(c, d) : !this.isAfter(c, d)) || (t ? this.isBefore(r, d) : !this.isAfter(r, d)) && (u ? this.isAfter(c, d) : !this.isBefore(c, d));
      };
    };
  });
})(Ht);
const le = Ht.exports;
var jt = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n();
  })(z, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, f = /\d\d/, i = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, d = {}, m = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, r = function(v) {
      return function(p) {
        this[v] = +p;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(p) {
        if (!p || p === "Z")
          return 0;
        var M = p.match(/([+-]|\d\d)/g), y = 60 * M[1] + (+M[2] || 0);
        return y === 0 ? 0 : M[0] === "+" ? -y : y;
      }(v);
    }], t = function(v) {
      var p = d[v];
      return p && (p.indexOf ? p : p.s.concat(p.f));
    }, u = function(v, p) {
      var M, y = d.meridiem;
      if (y) {
        for (var g = 1; g <= 24; g += 1)
          if (v.indexOf(y(g, 0, p)) > -1) {
            M = g > 12;
            break;
          }
      } else
        M = v === (p ? "pm" : "PM");
      return M;
    }, b = { A: [a, function(v) {
      this.afternoon = u(v, !1);
    }], a: [a, function(v) {
      this.afternoon = u(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [f, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [i, r("seconds")], ss: [i, r("seconds")], m: [i, r("minutes")], mm: [i, r("minutes")], H: [i, r("hours")], h: [i, r("hours")], HH: [i, r("hours")], hh: [i, r("hours")], D: [i, r("day")], DD: [f, r("day")], Do: [a, function(v) {
      var p = d.ordinal, M = v.match(/\d+/);
      if (this.day = M[0], p)
        for (var y = 1; y <= 31; y += 1)
          p(y).replace(/\[|\]/g, "") === v && (this.day = y);
    }], M: [i, r("month")], MM: [f, r("month")], MMM: [a, function(v) {
      var p = t("months"), M = (t("monthsShort") || p.map(function(y) {
        return y.slice(0, 3);
      })).indexOf(v) + 1;
      if (M < 1)
        throw new Error();
      this.month = M % 12 || M;
    }], MMMM: [a, function(v) {
      var p = t("months").indexOf(v) + 1;
      if (p < 1)
        throw new Error();
      this.month = p % 12 || p;
    }], Y: [/[+-]?\d+/, r("year")], YY: [f, function(v) {
      this.year = m(v);
    }], YYYY: [/\d{4}/, r("year")], Z: c, ZZ: c };
    function D(v) {
      var p, M;
      p = v, M = d && d.formats;
      for (var y = (v = p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, L, Y) {
        var S = Y && Y.toUpperCase();
        return L || M[Y] || o[Y] || M[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(C, H, G) {
          return H || G.slice(1);
        });
      })).match(n), g = y.length, w = 0; w < g; w += 1) {
        var s = y[w], _ = b[s], h = _ && _[0], B = _ && _[1];
        y[w] = B ? { regex: h, parser: B } : s.replace(/^\[|\]$/g, "");
      }
      return function(x) {
        for (var L = {}, Y = 0, S = 0; Y < g; Y += 1) {
          var C = y[Y];
          if (typeof C == "string")
            S += C.length;
          else {
            var H = C.regex, G = C.parser, P = x.slice(S), V = H.exec(P)[0];
            G.call(L, V), x = x.replace(V, "");
          }
        }
        return function(N) {
          var I = N.afternoon;
          if (I !== void 0) {
            var q = N.hours;
            I ? q < 12 && (N.hours += 12) : q === 12 && (N.hours = 0), delete N.afternoon;
          }
        }(L), L;
      };
    }
    return function(v, p, M) {
      M.p.customParseFormat = !0, v && v.parseTwoDigitYear && (m = v.parseTwoDigitYear);
      var y = p.prototype, g = y.parse;
      y.parse = function(w) {
        var s = w.date, _ = w.utc, h = w.args;
        this.$u = _;
        var B = h[1];
        if (typeof B == "string") {
          var x = h[2] === !0, L = h[3] === !0, Y = x || L, S = h[2];
          L && (S = h[2]), d = this.$locale(), !x && S && (d = M.Ls[S]), this.$d = function(P, V, N) {
            try {
              if (["x", "X"].indexOf(V) > -1)
                return new Date((V === "X" ? 1e3 : 1) * P);
              var I = D(V)(P), q = I.year, at = I.month, Nt = I.day, Vt = I.hours, qt = I.minutes, Jt = I.seconds, Wt = I.milliseconds, Mt = I.zone, ct = new Date(), ft = Nt || (q || at ? 1 : ct.getDate()), gt = q || ct.getFullYear(), rt = 0;
              q && !at || (rt = at > 0 ? at - 1 : ct.getMonth());
              var mt = Vt || 0, pt = qt || 0, ht = Jt || 0, vt = Wt || 0;
              return Mt ? new Date(Date.UTC(gt, rt, ft, mt, pt, ht, vt + 60 * Mt.offset * 1e3)) : N ? new Date(Date.UTC(gt, rt, ft, mt, pt, ht, vt)) : new Date(gt, rt, ft, mt, pt, ht, vt);
            } catch {
              return new Date("");
            }
          }(s, B, _), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), Y && s != this.format(B) && (this.$d = new Date("")), d = {};
        } else if (B instanceof Array)
          for (var C = B.length, H = 1; H <= C; H += 1) {
            h[1] = B[H - 1];
            var G = M.apply(this, h);
            if (G.isValid()) {
              this.$d = G.$d, this.$L = G.$L, this.init();
              break;
            }
            H === C && (this.$d = new Date(""));
          }
        else
          g.call(this, w);
      };
    };
  });
})(jt);
const ue = jt.exports, $t = Symbol("CHART_ROWS_KEY"), Gt = Symbol("CONFIG_KEY"), It = Symbol("EMIT_BAR_EVENT_KEY"), Rt = Symbol("BAR_CONTAINER_KEY");
function R() {
  const e = ut(Gt);
  if (!e)
    throw Error("Failed to inject config!");
  return e;
}
const At = "YYYY-MM-DD HH:mm";
function et(e = R()) {
  const { chartStart: l, chartEnd: o, barStart: n, barEnd: f, dateFormat: i, locale: a } = e;
  j.locale(a.value);
  const d = $(() => r(l.value)), m = $(() => r(o.value)), r = (t, u) => {
    let b;
    if (u !== void 0 && typeof t != "string" && !(t instanceof Date) && (b = u === "start" ? t[n.value] : t[f.value]), typeof t == "string")
      b = t;
    else if (t instanceof Date)
      return j(t);
    const D = i.value || At;
    return j(b, D, !0);
  };
  return {
    chartStartDayjs: d,
    chartEndDayjs: m,
    toDayjs: r,
    format: (t, u) => u === !1 ? t instanceof Date ? t : j(t).toDate() : (typeof t == "string" || t instanceof Date ? r(t) : t).format(u)
  };
}
var de = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n(j);
  })(z, function(o) {
    function n(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var f = n(o), i = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xEDa", dd: "%d d\xEDas", M: "un mes", MM: "%d meses", y: "un a\xF1o", yy: "%d a\xF1os" }, ordinal: function(a) {
      return a + "\xBA";
    } };
    return f.default.locale(i, null, !0), i;
  });
})(de);
var ce = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n(j);
  })(z, function(o) {
    function n(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var f = n(o), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"), monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(a) {
      return "" + a + (a === 1 ? "er" : "");
    } };
    return f.default.locale(i, null, !0), i;
  });
})(ce);
var fe = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n(j);
  })(z, function(o) {
    function n(m) {
      return m && typeof m == "object" && "default" in m ? m : { default: m };
    }
    var f = n(o), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function a(m, r, c) {
      var t = i[c];
      return Array.isArray(t) && (t = t[r ? 0 : 1]), t.replace("%d", m);
    }
    var d = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(m) {
      return m + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a } };
    return f.default.locale(d, null, !0), d;
  });
})(fe);
var ge = { exports: {} };
(function(e, l) {
  (function(o, n) {
    e.exports = n(j);
  })(z, function(o) {
    function n(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var f = n(o), i = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(a) {
      return "[" + a + (a === 1 || a === 8 || a >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return f.default.locale(i, null, !0), i;
  });
})(ge);
function Ft() {
  const { precision: e, locale: l } = R(), { chartStartDayjs: o, chartEndDayjs: n } = et(), f = $(() => {
    switch (e == null ? void 0 : e.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'"
        );
    }
  }), i = {
    hour: "HH",
    date: "DD/MM",
    day: "DD/MM",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: $(() => {
      const d = [], m = [], r = f.value === "day" ? "date" : f.value, c = e.value;
      let t = o.value.startOf(c);
      const u = n.value.diff(o.value, "minutes", !0);
      let b = 0, D = t[r]();
      for (; t.isBefore(n.value) || t.isSame(n.value); ) {
        if (t[r]() !== D) {
          let g = 0;
          if (d.length === 0)
            g = t.startOf(r).diff(o.value, "minutes", !0) / u * 100;
          else if (t.isSameOrAfter(n.value))
            g = n.value.diff(
              t.subtract(1, r).startOf(r),
              "minutes",
              !0
            ) / u * 100;
          else {
            const s = t.startOf(r), _ = t.subtract(1, r).startOf(r);
            g = s.diff(_, "minutes", !0) / u * 100;
          }
          const w = t.subtract(1, r);
          d.push({
            label: w.format(i[r]),
            value: String(D),
            date: w.toDate(),
            width: String(g) + "%"
          }), b = 0, D = t[r]();
        }
        let M = 0;
        m.length === 0 ? M = t.endOf(c).diff(o.value, "minutes", !0) / u * 100 : t.add(1, c).isSameOrAfter(n.value) ? M = n.value.diff(t.startOf(c), "minutes", !0) / u * 100 : M = t.endOf(c).diff(t.startOf(c), "minutes", !0) / u * 100, m.push({
          label: t.format(i[c]),
          value: String(t[c === "day" ? "date" : c]()),
          date: t.toDate(),
          width: String(M) + "%"
        });
        const y = t;
        t = t.add(1, c), (t.isBefore(n.value) || t.isSame(n.value)) && (b += t.diff(y, "minutes", !0));
      }
      const v = n.value.isSame(n.value.startOf(r)) ? n.value[r]() - 1 : n.value[r]();
      return d.some((M) => M.value === String(v)) || (b += n.value.diff(
        t.subtract(1, c),
        "minutes",
        !0
      ), d.push({
        label: n.value.format(i[r]).toUpperCase(),
        value: String(D),
        date: n.value.toDate(),
        width: `${b / u * 100}%`
      })), { upperUnits: d, lowerUnits: m };
    })
  };
}
const me = { class: "g-timeaxis" }, pe = { class: "g-timeunits-container" }, he = { class: "g-timeunits-container" }, ve = /* @__PURE__ */ W({
  __name: "GGanttTimeaxis",
  setup(e) {
    const { precision: l, colors: o } = R(), { timeaxisUnits: n } = Ft();
    return (f, i) => (O(), k("div", me, [
      U("div", pe, [
        (O(!0), k(Q, null, it(E(n).upperUnits, ({ label: a, value: d, date: m, width: r }, c) => (O(), k("div", {
          key: a,
          class: "g-upper-timeunit",
          style: F({
            background: c % 2 === 0 ? E(o).primary : E(o).secondary,
            color: E(o).text,
            width: r
          })
        }, [
          A(f.$slots, "upper-timeunit", {
            label: a,
            value: d,
            date: m
          }, () => [
            st(X(a), 1)
          ])
        ], 4))), 128))
      ]),
      U("div", he, [
        (O(!0), k(Q, null, it(E(n).lowerUnits, ({ label: a, value: d, date: m, width: r }, c) => (O(), k("div", {
          key: a,
          class: "g-timeunit",
          style: F({
            background: c % 2 === 0 ? E(o).ternary : E(o).quartenary,
            color: E(o).text,
            flexDirection: E(l) === "hour" ? "column" : "row",
            alignItems: E(l) === "hour" ? "" : "center",
            width: r
          })
        }, [
          A(f.$slots, "timeunit", {
            label: a,
            value: d,
            date: m
          }, () => [
            st(X(a), 1)
          ]),
          E(l) === "hour" ? (O(), k("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: F({ background: E(o).text })
          }, null, 4)) : Z("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const _e = { class: "g-grid-container" }, ye = /* @__PURE__ */ W({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: {}
  },
  setup(e) {
    const { colors: l } = R(), { timeaxisUnits: o } = Ft();
    return (n, f) => (O(), k("div", _e, [
      (O(!0), k(Q, null, it(E(o).lowerUnits, ({ label: i, value: a, width: d }) => {
        var m;
        return O(), k("div", {
          key: i,
          class: "g-grid-line",
          style: F({
            width: d,
            background: (m = n.highlightedUnits) != null && m.includes(Number(a)) ? E(l).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const be = "cadetblue", we = /* @__PURE__ */ W({
  __name: "GGanttBarTooltip",
  props: {
    bar: {},
    modelValue: { type: Boolean }
  },
  setup(e) {
    const l = e, o = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, { bar: n } = tt(l), { precision: f, font: i, barStart: a, barEnd: d, rowHeight: m } = R(), r = T("0px"), c = T("0px");
    dt(
      () => l.bar,
      async () => {
        var s;
        await St();
        const p = ((s = n == null ? void 0 : n.value) == null ? void 0 : s.ganttBarConfig.id) || "";
        if (!p)
          return;
        const M = document.getElementById(p), { top: y, left: g } = (M == null ? void 0 : M.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, w = Math.max(g, 10);
        r.value = `${y + m.value - 10}px`, c.value = `${w}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const t = $(() => {
      var p, M;
      return ((M = (p = n == null ? void 0 : n.value) == null ? void 0 : p.ganttBarConfig.style) == null ? void 0 : M.background) || be;
    }), { toDayjs: u } = et(), b = $(() => {
      var p;
      return (p = n.value) == null ? void 0 : p[a.value];
    }), D = $(() => {
      var p;
      return (p = n.value) == null ? void 0 : p[d.value];
    }), v = $(() => {
      if (!(n != null && n.value))
        return "";
      const p = o[f.value], M = u(b.value).format(p), y = u(D.value).format(p);
      return `${M} \u2013 ${y}`;
    });
    return (p, M) => (O(), lt(Kt, { to: "body" }, [
      bt(Qt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: J(() => [
          p.modelValue ? (O(), k("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: F({
              top: r.value,
              left: c.value,
              fontFamily: E(i)
            })
          }, [
            U("div", {
              class: "g-gantt-tooltip-color-dot",
              style: F({ background: t.value })
            }, null, 4),
            A(p.$slots, "default", {
              bar: E(n),
              barStart: b.value,
              barEnd: D.value
            }, () => [
              st(X(v.value), 1)
            ])
          ], 4)) : Z("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
const Bt = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  }
};
var xt;
const nt = typeof window < "u";
nt && ((xt = window == null ? void 0 : window.navigator) == null ? void 0 : xt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(e) {
  return typeof e == "function" ? e() : E(e);
}
function Be(e) {
  return e;
}
function xe(e) {
  return Xt() ? (Zt(e), !0) : !1;
}
function De(e, l = !0) {
  te() ? Ct(e) : l ? e() : St(e);
}
function Ut(e) {
  var l;
  const o = Me(e);
  return (l = o == null ? void 0 : o.$el) != null ? l : o;
}
const Ee = nt ? window : void 0;
nt && window.document;
nt && window.navigator;
nt && window.location;
function Le(e, l = !1) {
  const o = T(), n = () => o.value = Boolean(e());
  return n(), De(n, l), o;
}
const _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yt = "__vueuse_ssr_handlers__";
_t[yt] = _t[yt] || {};
_t[yt];
var Dt = Object.getOwnPropertySymbols, Ye = Object.prototype.hasOwnProperty, Oe = Object.prototype.propertyIsEnumerable, Se = (e, l) => {
  var o = {};
  for (var n in e)
    Ye.call(e, n) && l.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && Dt)
    for (var n of Dt(e))
      l.indexOf(n) < 0 && Oe.call(e, n) && (o[n] = e[n]);
  return o;
};
function Ce(e, l, o = {}) {
  const n = o, { window: f = Ee } = n, i = Se(n, ["window"]);
  let a;
  const d = Le(() => f && "ResizeObserver" in f), m = () => {
    a && (a.disconnect(), a = void 0);
  }, r = dt(() => Ut(e), (t) => {
    m(), d.value && f && t && (a = new ResizeObserver(l), a.observe(t, i));
  }, { immediate: !0, flush: "post" }), c = () => {
    m(), r();
  };
  return xe(c), {
    isSupported: d,
    stop: c
  };
}
function ke(e, l = { width: 0, height: 0 }, o = {}) {
  const n = T(l.width), f = T(l.height);
  return Ce(e, ([i]) => {
    n.value = i.contentRect.width, f.value = i.contentRect.height;
  }, o), dt(() => Ut(e), (i) => {
    n.value = i ? l.width : 0, f.value = i ? l.height : 0;
  }), {
    width: n,
    height: f
  };
}
var Et;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Et || (Et = {}));
var Te = Object.defineProperty, Lt = Object.getOwnPropertySymbols, He = Object.prototype.hasOwnProperty, je = Object.prototype.propertyIsEnumerable, Yt = (e, l, o) => l in e ? Te(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[l] = o, $e = (e, l) => {
  for (var o in l || (l = {}))
    He.call(l, o) && Yt(e, o, l[o]);
  if (Lt)
    for (var o of Lt(l))
      je.call(l, o) && Yt(e, o, l[o]);
  return e;
};
const Ge = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
$e({
  linear: Be
}, Ge);
const Ie = { class: "g-gantt-rows-container" }, Re = /* @__PURE__ */ W({
  __name: "GGanttChart",
  props: {
    chartStart: {},
    chartEnd: {},
    precision: { default: "day" },
    barStart: {},
    barEnd: {},
    dateFormat: { type: [String, Boolean], default: At },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" },
    locale: { default: "fr" }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(e, { emit: l }) {
    const o = e, { width: n, font: f, colorScheme: i } = tt(o), a = ee(), d = $(
      () => typeof i.value != "string" ? i.value : Bt[i.value] || Bt.default
    ), m = () => {
      var w;
      const y = (w = a.default) == null ? void 0 : w.call(a), g = [];
      return y && y.forEach((s) => {
        var _;
        if ((_ = s.props) != null && _.bars) {
          const h = s.props.bars;
          g.push(h);
        } else
          Array.isArray(s.children) && s.children.forEach((h) => {
            var x;
            const B = h;
            if ((x = B == null ? void 0 : B.props) != null && x.bars) {
              const L = B.props.bars;
              g.push(L);
            }
          });
      }), g;
    }, r = T(!1), c = T(!1), t = T(void 0);
    let u;
    const b = (y) => {
      u && clearTimeout(u), u = setTimeout(() => {
        r.value = !0;
      }, 800), t.value = y;
    }, D = () => {
      clearTimeout(u), r.value = !1;
    }, v = (y, g, w, s) => {
      switch (y.type) {
        case "click":
          l("click-bar", { bar: g, e: y, datetime: w });
          break;
        case "mousedown":
          l("mousedown-bar", { bar: g, e: y, datetime: w });
          break;
        case "mouseup":
          l("mouseup-bar", { bar: g, e: y, datetime: w });
          break;
        case "dblclick":
          l("dblclick-bar", { bar: g, e: y, datetime: w });
          break;
        case "mouseenter":
          b(g), l("mouseenter-bar", { bar: g, e: y });
          break;
        case "mouseleave":
          D(), l("mouseleave-bar", { bar: g, e: y });
          break;
        case "dragstart":
          c.value = !0, l("dragstart-bar", { bar: g, e: y });
          break;
        case "drag":
          l("drag-bar", { bar: g, e: y });
          break;
        case "dragend":
          c.value = !1, l("dragend-bar", { bar: g, e: y, movedBars: s });
          break;
        case "contextmenu":
          l("contextmenu-bar", { bar: g, e: y, datetime: w });
          break;
      }
    }, p = T(null), M = ke(p);
    return ot($t, m), ot(Gt, {
      ...tt(o),
      colors: d,
      chartSize: M
    }), ot(It, v), (y, g) => (O(), k("div", {
      ref_key: "ganttChart",
      ref: p,
      class: "g-gantt-chart",
      style: F({ width: E(n), background: d.value.background, fontFamily: E(f) })
    }, [
      y.hideTimeaxis ? Z("", !0) : (O(), lt(ve, { key: 0 }, {
        "upper-timeunit": J(({ label: w, value: s, date: _ }) => [
          A(y.$slots, "upper-timeunit", {
            label: w,
            value: s,
            date: _
          })
        ]),
        timeunit: J(({ label: w, value: s, date: _ }) => [
          A(y.$slots, "timeunit", {
            label: w,
            value: s,
            date: _
          })
        ]),
        _: 3
      })),
      y.grid ? (O(), lt(ye, {
        key: 1,
        "highlighted-units": y.highlightedUnits
      }, null, 8, ["highlighted-units"])) : Z("", !0),
      U("div", Ie, [
        A(y.$slots, "default")
      ]),
      bt(we, {
        "model-value": r.value || c.value,
        bar: t.value
      }, {
        default: J(() => [
          A(y.$slots, "bar-tooltip", { bar: t.value })
        ]),
        _: 3
      }, 8, ["model-value", "bar"])
    ], 4));
  }
});
function wt(e = R()) {
  const { dateFormat: l, chartSize: o } = e, { chartStartDayjs: n, chartEndDayjs: f, toDayjs: i, format: a } = et(e), d = $(() => f.value.diff(n.value, "minutes"));
  return {
    mapTimeToPosition: (c) => {
      const t = o.width.value || 0, u = i(c).diff(n.value, "minutes", !0);
      return Math.ceil(u / d.value * t);
    },
    mapPositionToTime: (c) => {
      const t = o.width.value || 0, u = c / t * d.value;
      return a(n.value.add(u, "minutes"), l.value);
    }
  };
}
function Ot(e, l = () => null, o = () => null, n = R()) {
  const { barStart: f, barEnd: i, pushOnOverlap: a } = n, d = T(!1);
  let m = 0, r;
  const { mapPositionToTime: c } = wt(n), { toDayjs: t } = et(n), u = (g) => {
    const w = document.getElementById(e.ganttBarConfig.id);
    if (!w)
      return;
    switch (m = g.clientX - (w.getBoundingClientRect().left || 0), g.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", r = v;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", r = p;
        break;
      default:
        r = D;
    }
    d.value = !0, window.addEventListener("mousemove", r), window.addEventListener("mouseup", y);
  }, b = () => {
    var s;
    const g = document.getElementById(e.ganttBarConfig.id), w = (s = g == null ? void 0 : g.closest(".g-gantt-row-bars-container")) == null ? void 0 : s.getBoundingClientRect();
    return { barElement: g, barContainer: w };
  }, D = (g) => {
    const { barElement: w, barContainer: s } = b();
    if (!w || !s)
      return;
    const _ = w.getBoundingClientRect().width, h = g.clientX - s.left - m, B = h + _;
    M(h, B) || (e[f.value] = c(h), e[i.value] = c(B), l(g, e));
  }, v = (g) => {
    const { barElement: w, barContainer: s } = b();
    if (!w || !s)
      return;
    const _ = g.clientX - s.left, h = c(_);
    t(h).isSameOrAfter(t(e, "end")) || (e[f.value] = h, l(g, e));
  }, p = (g) => {
    const { barElement: w, barContainer: s } = b();
    if (!w || !s)
      return;
    const _ = g.clientX - s.left, h = c(_);
    t(h).isSameOrBefore(t(e, "start")) || (e[i.value] = h, l(g, e));
  }, M = (g, w) => {
    if (!a.value)
      return !1;
    const s = e.ganttBarConfig.dragLimitLeft, _ = e.ganttBarConfig.dragLimitRight;
    return g && s != null && g < s || w && _ != null && w > _;
  }, y = (g) => {
    d.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", y), o(g, e);
  };
  return {
    isDragging: d,
    initDrag: u
  };
}
function Pt() {
  const e = ut($t);
  if (!e)
    throw Error("Failed to inject getChartRows!");
  return e;
}
function zt() {
  const e = ut(It);
  if (!e)
    throw Error("Failed to inject emitBarEvent!");
  return e;
}
function Ae() {
  const e = R(), l = Pt(), o = zt(), { pushOnOverlap: n, barStart: f, barEnd: i, noOverlap: a, dateFormat: d } = e, m = /* @__PURE__ */ new Map(), { toDayjs: r, format: c } = et(), t = (s, _) => {
    const { initDrag: h } = Ot(s, b, y, e);
    o({ ..._, type: "dragstart" }, s), h(_), g(s);
  }, u = (s, _) => {
    const h = s.ganttBarConfig.bundle;
    h != null && (l().forEach((B) => {
      B.forEach((x) => {
        if (x.ganttBarConfig.bundle === h) {
          const L = x === s ? y : () => null, { initDrag: Y } = Ot(x, b, L, e);
          Y(_), g(x);
        }
      });
    }), o({ ..._, type: "dragstart" }, s));
  }, b = (s, _) => {
    o({ ...s, type: "drag" }, _), D(_);
  }, D = (s) => {
    if (!(n != null && n.value))
      return;
    let _ = s, { overlapBar: h, overlapType: B } = v(_);
    for (; h; ) {
      g(h);
      const x = r(_[f.value]), L = r(_[i.value]), Y = r(h[f.value]), S = r(h[i.value]);
      let C;
      switch (B) {
        case "left":
          C = S.diff(x, "minutes", !0), h[i.value] = c(_[f.value], d.value), h[f.value] = c(
            Y.subtract(C, "minutes"),
            d.value
          );
          break;
        case "right":
          C = L.diff(Y, "minutes", !0), h[f.value] = c(L, d.value), h[i.value] = c(
            S.add(C, "minutes"),
            d.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      h && (B === "left" || B === "right") && p(h, C, B), _ = h, { overlapBar: h, overlapType: B } = v(h);
    }
  }, v = (s) => {
    let _, h, B;
    const x = l().find((H) => H.includes(s)) || [], L = r(s[f.value]), Y = r(s[i.value]);
    return { overlapBar: x.find((H) => {
      if (H === s)
        return !1;
      const G = r(H[f.value]), P = r(H[i.value]);
      return _ = L.isBetween(G, P), h = Y.isBetween(G, P), B = G.isBetween(L, Y) || P.isBetween(L, Y), _ || h || B;
    }), overlapType: _ ? "left" : h ? "right" : B ? "between" : null };
  }, p = (s, _, h) => {
    g(s), s.ganttBarConfig.bundle && l().forEach((B) => {
      B.forEach((x) => {
        x.ganttBarConfig.bundle === s.ganttBarConfig.bundle && x !== s && (g(x), M(x, _, h));
      });
    });
  }, M = (s, _, h) => {
    switch (h) {
      case "left":
        s[f.value] = c(
          r(s, "start").subtract(_, "minutes"),
          d.value
        ), s[i.value] = c(
          r(s, "end").subtract(_, "minutes"),
          d.value
        );
        break;
      case "right":
        s[f.value] = c(
          r(s, "start").add(_, "minutes"),
          d.value
        ), s[i.value] = c(r(s, "end").add(_, "minutes"), d.value);
    }
    D(s);
  }, y = (s, _) => {
    w();
    const h = {
      ...s,
      type: "dragend"
    };
    o(h, _, void 0, new Map(m)), m.clear();
  }, g = (s) => {
    if (!m.has(s)) {
      const _ = s[f.value], h = s[i.value];
      m.set(s, { oldStart: _, oldEnd: h });
    }
  }, w = () => {
    if (n.value || !a.value)
      return;
    let s = !1;
    m.forEach((_, h) => {
      const { overlapBar: B } = v(h);
      B != null && (s = !0);
    }), s && m.forEach(({ oldStart: _, oldEnd: h }, B) => {
      B[f.value] = _, B[i.value] = h;
    });
  };
  return {
    initDragOfBar: t,
    initDragOfBundle: u
  };
}
function Fe() {
  const { pushOnOverlap: e } = R(), l = Pt(), o = (a) => {
    const d = [];
    return a != null && l().forEach((m) => {
      m.forEach((r) => {
        r.ganttBarConfig.bundle === a && d.push(r);
      });
    }), d;
  }, n = (a) => {
    if (!e.value || a.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const m of ["left", "right"]) {
      const r = m, { gapDistanceSoFar: c, bundleBarsAndGapDist: t } = f(
        a,
        0,
        r
      );
      let u = c;
      const b = t;
      if (!b)
        continue;
      for (let v = 0; v < b.length; v++) {
        const p = b[v].bar, M = b[v].gapDistance;
        o(p.ganttBarConfig.bundle).filter(
          (g) => g !== p
        ).forEach((g) => {
          const w = f(g, M, r), s = w.gapDistanceSoFar, _ = w.bundleBarsAndGapDist;
          s != null && (!u || s < u) && (u = s), _.forEach((h) => {
            b.find((B) => B.bar === h.bar) || b.push(h);
          });
        });
      }
      const D = document.getElementById(a.ganttBarConfig.id);
      u != null && r === "left" ? a.ganttBarConfig.dragLimitLeft = D.offsetLeft - u : u != null && r === "right" && (a.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + u);
    }
    o(a.ganttBarConfig.bundle).forEach((m) => {
      m.ganttBarConfig.dragLimitLeft = a.ganttBarConfig.dragLimitLeft, m.ganttBarConfig.dragLimitRight = a.ganttBarConfig.dragLimitRight;
    });
  }, f = (a, d = 0, m) => {
    const r = a.ganttBarConfig.bundle ? [{ bar: a, gapDistance: d }] : [];
    let c = a, t = i(c, m);
    if (m === "left")
      for (; t; ) {
        const u = document.getElementById(c.ganttBarConfig.id), b = document.getElementById(t.ganttBarConfig.id), D = b.offsetLeft + b.offsetWidth;
        if (d += u.offsetLeft - D, t.ganttBarConfig.immobile)
          return { gapDistanceSoFar: d, bundleBarsAndGapDist: r };
        t.ganttBarConfig.bundle && r.push({
          bar: t,
          gapDistance: d
        }), c = t, t = i(t, "left");
      }
    if (m === "right")
      for (; t; ) {
        const u = document.getElementById(c.ganttBarConfig.id), b = document.getElementById(t.ganttBarConfig.id), D = u.offsetLeft + u.offsetWidth;
        if (d += b.offsetLeft - D, t.ganttBarConfig.immobile)
          return { gapDistanceSoFar: d, bundleBarsAndGapDist: r };
        t.ganttBarConfig.bundle && r.push({
          bar: t,
          gapDistance: d
        }), c = t, t = i(t, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: r };
  }, i = (a, d) => {
    const m = document.getElementById(a.ganttBarConfig.id), r = l().find((t) => t.includes(a)) || [];
    let c = [];
    return d === "left" ? c = r.filter((t) => {
      const u = document.getElementById(t.ganttBarConfig.id);
      return u && u.offsetLeft < m.offsetLeft && t.ganttBarConfig.pushOnOverlap !== !1;
    }) : c = r.filter((t) => {
      const u = document.getElementById(t.ganttBarConfig.id);
      return u && u.offsetLeft > m.offsetLeft && t.ganttBarConfig.pushOnOverlap !== !1;
    }), c.length > 0 ? c.reduce((t, u) => {
      const b = document.getElementById(t.ganttBarConfig.id), D = document.getElementById(u.ganttBarConfig.id), v = Math.abs(b.offsetLeft - m.offsetLeft), p = Math.abs(D.offsetLeft - m.offsetLeft);
      return v < p ? t : u;
    }, c[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: n
  };
}
const Ue = ["id"], Pe = { class: "g-gantt-bar-label" }, ze = /* @__PURE__ */ U("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ne = /* @__PURE__ */ U("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ve = /* @__PURE__ */ W({
  __name: "GGanttBar",
  props: {
    bar: {}
  },
  setup(e) {
    const l = e, o = zt(), n = R(), { rowHeight: f } = n, { bar: i } = tt(l), { mapTimeToPosition: a, mapPositionToTime: d } = wt(), { initDragOfBar: m, initDragOfBundle: r } = Ae(), { setDragLimitsOfGanttBar: c } = Fe(), t = T(!1), u = $(() => i.value.ganttBarConfig);
    function b(x) {
      u.value.bundle != null ? r(i.value, x) : m(i.value, x), t.value = !0;
    }
    const D = () => {
      c(i.value), !u.value.immobile && (window.addEventListener("mousemove", b, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", b), t.value = !1;
        },
        { once: !0 }
      ));
    }, v = ut(Rt), p = (x) => {
      var S;
      x.preventDefault(), x.type === "mousedown" && D();
      const L = (S = v == null ? void 0 : v.value) == null ? void 0 : S.getBoundingClientRect();
      if (!L)
        return;
      const Y = d(x.clientX - L.left);
      o(x, i.value, Y);
    }, { barStart: M, barEnd: y, width: g, chartStart: w, chartEnd: s, chartSize: _ } = n, h = T(0), B = T(0);
    return Ct(() => {
      dt(
        [i, g, w, s, _.width],
        () => {
          h.value = a(i.value[M.value]), B.value = a(i.value[y.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (x, L) => (O(), k("div", {
      id: u.value.id,
      class: ne(["g-gantt-bar", u.value.class || ""]),
      style: F({
        ...u.value.style,
        position: "absolute",
        top: `${E(f) * 0.1}px`,
        left: `${h.value}px`,
        width: `${B.value - h.value}px`,
        height: `${E(f) * 0.8}px`,
        zIndex: t.value ? 3 : 2
      }),
      onMousedown: p,
      onClick: p,
      onDblclick: p,
      onMouseenter: p,
      onMouseleave: p,
      onContextmenu: p
    }, [
      U("div", Pe, [
        A(x.$slots, "default", { bar: E(i) }, () => [
          U("div", null, X(u.value.label || ""), 1)
        ])
      ]),
      u.value.hasHandles ? (O(), k(Q, { key: 0 }, [
        ze,
        Ne
      ], 64)) : Z("", !0)
    ], 46, Ue));
  }
});
const qe = /* @__PURE__ */ W({
  __name: "GGanttRow",
  props: {
    label: {},
    bars: {},
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(e, { emit: l }) {
    const o = e, { rowHeight: n, colors: f } = R(), { highlightOnHover: i } = tt(o), a = T(!1), d = $(() => ({
      height: `${n.value}px`,
      background: (i == null ? void 0 : i.value) && a.value ? f.value.hoverHighlight : null
    })), { mapPositionToTime: m } = wt(), r = T(null);
    ot(Rt, r);
    const c = (t) => {
      var v;
      const u = (v = r.value) == null ? void 0 : v.getBoundingClientRect();
      if (!u) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const b = t.clientX - u.left, D = m(b);
      l("drop", { e: t, datetime: D });
    };
    return (t, u) => (O(), k("div", {
      class: "g-gantt-row",
      style: F(d.value),
      onDragover: u[0] || (u[0] = ae((b) => a.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (b) => a.value = !1),
      onDrop: u[2] || (u[2] = (b) => c(b)),
      onMouseover: u[3] || (u[3] = (b) => a.value = !0),
      onMouseleave: u[4] || (u[4] = (b) => a.value = !1)
    }, [
      U("div", {
        class: "g-gantt-row-label",
        style: F({ background: E(f).primary, color: E(f).text })
      }, [
        A(t.$slots, "label", {}, () => [
          st(X(t.label), 1)
        ])
      ], 4),
      U("div", re({
        ref_key: "barContainer",
        ref: r,
        class: "g-gantt-row-bars-container"
      }, t.$attrs), [
        bt(oe, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: J(() => [
            (O(!0), k(Q, null, it(t.bars, (b) => (O(), lt(Ve, {
              key: b.ganttBarConfig.id,
              bar: b
            }, {
              default: J(() => [
                A(t.$slots, "bar-label", { bar: b })
              ]),
              _: 2
            }, 1032, ["bar"]))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
});
function Je() {
  j.extend(ie), j.extend(se), j.extend(le), j.extend(ue);
}
const Xe = {
  install(e, l) {
    Je(), e.component("GGanttChart", Re), e.component("GGanttRow", qe);
  }
};
function K(e, l = "top") {
  if (!e || typeof document > "u")
    return;
  const o = document.head, n = document.createElement("style");
  l === "top" && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.appendChild(document.createTextNode(e));
}
K(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: 5px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-rows-container {
  position: relative;
}
`, "top");
K(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`, "top");
K(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  min-height: 75px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`, "top");
K(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`, "top");
K(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`, "top");
K(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`, "top");
export {
  Re as GGanttChart,
  qe as GGanttRow,
  Xe as default,
  Je as extendDayjs,
  Xe as ganttastic
};
