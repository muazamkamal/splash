(function (e) {
    var r = {};

    function n(t) {
        if (r[t]) return r[t].exports;
        var o = r[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(o.exports, o, o.exports, n);
        o.l = true;
        return o.exports
    }
    n.m = e;
    n.c = r;
    n.d = function (e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, {
            enumerable: true,
            get: t
        })
    };
    n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    n.t = function (e, r) {
        1 & r && (e = n(e));
        if (8 & r) return e;
        if (4 & r && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        n.r(t);
        Object.defineProperty(t, "default", {
            enumerable: true,
            value: e
        });
        if (2 & r && "string" != typeof e)
            for (var o in e) n.d(t, o, function (r) {
                return e[r]
            }.bind(null, o));
        return t
    };
    n.n = function (e) {
        var r = e && e.__esModule ? function r() {
            return e["default"]
        } : function r() {
            return e
        };
        n.d(r, "a", r);
        return r
    };
    n.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    };
    n.p = "https://static.squarespace.com/universal/scripts-compressed/";
    return n(n.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./node_modules/webpack/buildin/global.js": function (e, r) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (1, eval)("this")
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js": function (e, r, n) {
        "use strict";
        n.r(r);
        var t = n("./src/main/webapp/universal/node_modules/cuid/index.js");
        var o = n.n(t);
        var a = "/api/1/wp-rum";
        var i = a + "/record";
        var s = a + "/error";
        var u = a + "/settings";
        var c = function (e) {
            return {
                app: "a",
                data: {
                    __encoding_action__: e,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var l = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var p = {
            abTest: "ab",
            connection: {
                __encoding_action__: l,
                __encoding_key__: "con"
            },
            context: "ctx",
            hash: "h",
            mid: "mid",
            pathname: "p"
        };
        var d = {
            delay: "d",
            eventType: "et"
        };
        var f = {
            eventTime: "t",
            eventType: "et"
        };
        var v = {
            connectEnd: "ce",
            connectStart: "c",
            decodedBodySize: "db",
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            loadEventEnd: "le",
            loadEventStart: "l",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            visibilityStateOnDCL: "v"
        };
        var m = {
            duration: "d",
            name: "n",
            startTime: "st"
        };
        var b = {
            tti: "t"
        };
        var y = {
            firstContentfulPaint: "fcp",
            firstPaint: "fp"
        };
        var w = {
            eventType: "et",
            resourceTiming: "r"
        };
        var _ = Object.keys(d);
        var j = Object.keys(f);
        var h = Object.keys(p);
        var g = Object.keys(v);
        var E = Object.keys(m);
        var O = Object.keys(y);
        var T = Object.keys(b);
        var S = Object.keys(w);
        var x = "userTiming";
        var P = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var C = "DOMContentLoaded";
        var N = "load";
        var M = [C, N];
        var k = "beforeunload";
        var L = "resourcetimingbufferfull";
        var I = ["first-paint", "first-contentful-paint"];
        var R = [N, k, L];
        var A = "ss_ab";
        var B = "SS_MID";
        var D = 2e3;

        function F(e) {
            return "number" === typeof e ? Math.round(e) : e
        }

        function q() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function z() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function U(e, r) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                detail: r
            }))
        }
        Number.isInteger = Number.isInteger || function (e) {
            return "number" === typeof e && isFinite(e) && Math.floor(e) === e
        };

        function H(e, r) {
            var n = {};
            for (var t in e)
                if (t in r) {
                    var o = e[t];
                    var a = r[t];
                    var i = void 0;
                    if ("object" === typeof o) {
                        var s = o.__encoding_action__;
                        o = o.__encoding_key__;
                        if ("object" === typeof s) i = H(s, a);
                        else {
                            if ("function" !== typeof s) throw new Error("Invalid encoding map");
                            i = s(a)
                        }
                    } else i = Number.isInteger(a) ? a.toString(36) : a;
                    n["" + o] = i
                } return n
        }

        function G(e, r) {
            if ("function" === typeof navigator.sendBeacon) {
                var n = navigator.sendBeacon(e, r);
                if (n) return
            }
            var t = new XMLHttpRequest;
            t.open("POST", e, true);
            t.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            t.send(r)
        }

        function V(e) {
            G(s, e)
        }

        function W(e, r) {
            U("onRumCollectorData", r);
            var n = JSON.stringify(H(e, r));
            if (!n) throw new Error("Data is empty");
            G(i, n)
        }
        var X = [];

        function K() {
            return X
        }

        function J(e) {
            X.push(e)
        }

        function Z(e, r, n, t) {
            var o = Object.freeze({
                app: e,
                data: t,
                event: r,
                pageLoadId: n,
                ts: Date.now()
            });
            J(o);
            return o
        }
        var Y = function () {
            function e() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryType = e.eventName;
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = "PerformanceObserver" in window ? "observe" : "gather";
                this.encodeMap = c({});
                this.appName = "";
                this.pageLoadId = ""
            }
            e.prototype.getDeliveryBuffer = function () {
                return this.deliveryBuffer
            };
            e.prototype.getEventName = function () {
                return this.constructor.eventName
            };
            e.prototype.getEntryType = function () {
                return this.entryType
            };
            e.prototype.getGatherEvents = function () {
                return this.gatherEvents
            };
            e.prototype.getSupportType = function () {
                return this.supportType
            };
            e.prototype.shouldFireOnce = function () {
                return this.fireOnce
            };
            e.prototype.observerParse = function (e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.gather = function (e) {
                return e
            };
            e.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.deliver = function () {
                while (this.deliveryBuffer.length) {
                    var e = this.deliveryBuffer.shift();
                    if (e) {
                        var r = Z(this.appName, this.getEventName(), this.pageLoadId, e);
                        W(this.getEncodeMap(), r)
                    }
                }
                this.deliveryBuffer = []
            };
            e.prototype.getEncodeMap = function () {
                return this.encodeMap
            };
            e.prototype.setApp = function (e) {
                this.appName = e;
                return this
            };
            e.prototype.setId = function (e) {
                this.pageLoadId = e;
                return this
            };
            e.eventName = "";
            return e
        }();
        var Q = Y;
        var $ = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var ee = function (e) {
            $(r, e);

            function r() {
                var r = e.call(this) || this;
                r.gatherEvents = P;
                r.fireOnce = true;
                r.encodeMap = c(d);
                q() ? r.supportType = "gather" : r.supportType = "";
                return r
            }
            r.prototype.gather = function (e) {
                var r = e.timeStamp;
                var n = r > 1e12 ? +new Date : window.performance.now();
                var t = Math.max(n - r, 0);
                var o = {
                    delay: t,
                    eventType: e.type
                };
                return o
            };
            r.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(_.reduce(function (r, n) {
                    n in e && (r[n] = F(e[n]));
                    return r
                }, {}));
                return true
            };
            r.eventName = "firstInputDelay";
            return r
        }(Q);
        var re = ee;
        var ne = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var te = function (e) {
            ne(r, e);

            function r() {
                var r = e.call(this) || this;
                r.gatherEvents = P;
                r.fireOnce = true;
                r.encodeMap = c(f);
                q() ? r.supportType = "gather" : r.supportType = "";
                return r
            }
            r.prototype.gather = function (e) {
                var r = window.performance.now();
                var n = {
                    eventTime: r,
                    eventType: e.type
                };
                return n
            };
            r.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(j.reduce(function (r, n) {
                    n in e && (r[n] = F(e[n]));
                    return r
                }, {}));
                return true
            };
            r.eventName = "firstInteraction";
            return r
        }(Q);
        var oe = te;

        function ae(e) {
            var r = {};
            for (var n in e) n in e && (r[n] = e[n]);
            return r
        }
        var ie = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var se = function (e) {
            ie(r, e);

            function r() {
                var r;
                var n = e.call(this) || this;
                n.entryType = "navigation";
                n.gatherEvents = [N];
                n.encodeMap = c(v);
                n.supportLevel = -1;
                n.visibilityStateOnDCL = "";
                r = n.getNavigationLevel(), n.supportType = r[0], n.supportLevel = r[1];
                var t = function () {
                    n.visibilityStateOnDCL = document.visibilityState || ""
                };
                window.addEventListener("DOMContentLoaded", t, {
                    once: true
                });
                return n
            }
            r.prototype.observerParse = function (e) {
                return this.parse(e)
            };
            r.prototype.gather = function () {
                var e;
                e = 1 === this.supportLevel ? window.performance.timing : performance.getEntriesByType("navigation")[0];
                return ae(e)
            };
            r.prototype.gatherParse = function (e) {
                return this.parse(e)
            };
            r.prototype.parse = function (e) {
                if ("navigation" in performance) {
                    e.navigationType = performance.navigation.type;
                    e.redirectCount = performance.navigation.redirectCount
                }
                e.supportLevel = this.supportLevel;
                var r = g.reduce(function (r, n) {
                    n in e && ("number" === typeof e[n] && "navigationStart" !== n && e[n] >= e.navigationStart ? r[n] = F(e[n] - e.navigationStart) : r[n] = F(e[n]));
                    return r
                }, {});
                r.visibilityStateOnDCL = this.visibilityStateOnDCL;
                this.deliveryBuffer.push(r);
                return true
            };
            r.prototype.getNavigationLevel = function () {
                if (window.performance) {
                    if (window.performance.getEntriesByType && void 0 !== window.PerformanceNavigationTiming && window.performance.getEntriesByType(this.entryType)[0] instanceof PerformanceNavigationTiming) return [this.supportType, 2];
                    if (window.performance.timing) return ["gather", 1]
                }
                return ["", -1]
            };
            r.eventName = "navigation";
            return r
        }(Q);
        var ue = se;

        function ce(e) {
            var r = new RegExp("(^| )" + e + "=([^;]+)");
            var n = document.cookie.match(r);
            if (n) return n[2];
            return ""
        }

        function le(e) {
            if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(e);
            return null
        }
        var pe = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();

        function de() {
            if (!window.atob) return null;
            var e = le(A);
            if (e) try {
                return JSON.parse(window.atob(e))
            } catch (e) {
                return null
            }
            return null
        }

        function fe() {
            var e = {};
            var r = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (r) {
                var n = (1e3 * r.downlink).toString();
                e = {
                    downlink: parseInt(n, 10),
                    effectiveType: r.effectiveType,
                    rtt: r.rtt,
                    saveData: r.saveData
                }
            }
            return e
        }
        var ve = function (e) {
            pe(r, e);

            function r() {
                var r = null !== e && e.apply(this, arguments) || this;
                r.requiresContext = true;
                r.gatherEvents = [N];
                r.supportType = "gather";
                r.encodeMap = c(p);
                return r
            }
            r.prototype.gather = function () {
                var e = fe();
                return {
                    abTest: de(),
                    connection: e,
                    context: this.context,
                    hash: window.location.hash || "",
                    mid: ce(B),
                    pathname: window.location.pathname || ""
                }
            };
            r.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(h.reduce(function (r, n) {
                    n in e && (r[n] = e[n]);
                    return r
                }, {}));
                return true
            };
            r.eventName = "pageLoad";
            return r
        }(Q);
        var me = ve;
        var be = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var ye = function (e) {
            be(r, e);

            function r() {
                var r = null !== e && e.apply(this, arguments) || this;
                r.entryType = "paint";
                r.supportType = "observe";
                r.encodeMap = c(y);
                r.paintsRetrieved = [];
                return r
            }
            r.prototype.observerParse = function (e) {
                var r = e.name,
                    n = e.startTime;
                if (I.indexOf(r) < 0) return false;
                this.paintsRetrieved.push(r);
                0 === this.deliveryBuffer.length && this.deliveryBuffer.push(O.reduce(function (r, n) {
                    n in e && (r[n] = e[n]);
                    return r
                }, {}));
                var t = r.replace(/-([a-zA-Z])/g, function (e, r) {
                    var n = r && r.toUpperCase();
                    return n || e
                });
                this.deliveryBuffer[0][t] = F(n);
                if (this.paintsRetrieved.length < I.length) return false;
                return true
            };
            r.eventName = "paint";
            return r
        }(Q);
        var we = ye;
        var _e = n("./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js");
        var je = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var he = function (e) {
            je(r, e);

            function r() {
                var r = e.call(this) || this;
                r.entryType = "longtask";
                r.supportType = "observe";
                r.encodeMap = c(b);
                r.fireOnce = true;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    Object(_e["getFirstConsistentlyInteractive"])().then(function (e) {
                        r.parse({
                            tti: e
                        });
                        r.deliver()
                    })
                } else r.supportType = "";
                return r
            }
            r.prototype.observerParse = function (e) {
                window.__tti && (window.__tti.e = window.__tti.e.concat(e));
                return false
            };
            r.prototype.parse = function (e) {
                this.deliveryBuffer.push(T.reduce(function (r, n) {
                    n in e && (r[n] = F(e[n]));
                    return r
                }, {}))
            };
            r.eventName = "tti";
            return r
        }(Q);
        var ge = he;
        var Ee = function () {
            var e = function (r, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, r) {
                    e.__proto__ = r
                } || function (e, r) {
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                };
                return e(r, n)
            };
            return function (r, n) {
                e(r, n);

                function t() {
                    this.constructor = r
                }
                r.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
        }();
        var Oe = function (e) {
            Ee(r, e);

            function r() {
                var r = e.call(this) || this;
                r.entryType = "measure";
                r.gatherEvents = [x];
                r.encodeMap = c(m);
                z() || (r.supportType = "");
                return r
            }
            r.prototype.observerParse = function (e) {
                return this.parse(e)
            };
            r.prototype.gather = function () {
                var e = window.performance.getEntriesByType("measure").filter(function (e) {
                    return e.name.substr && "rum-" === e.name.substr(0, 4)
                }).map(function (e) {
                    window.performance.clearMeasures(e.name);
                    return ae(e)
                });
                return {
                    userTimingMeasures: e
                }
            };
            r.prototype.gatherParse = function (e) {
                var r = this;
                var n = e.userTimingMeasures;
                n.forEach(function (e) {
                    r.parse(e)
                });
                return true
            };
            r.prototype.parse = function (e) {
                if (e.name.substr && "rum-" === e.name.substr(0, 4)) {
                    var r = E.reduce(function (r, n) {
                        n in e && (r[n] = F(e[n]));
                        return r
                    }, {});
                    this.deliveryBuffer.push(r);
                    return true
                }
                return false
            };
            r.eventName = "user";
            return r
        }(Q);
        var Te = Oe;
        var Se = [re, oe, ue, me, we, ge, Te];

        function xe(e, r, n) {
            "object" === typeof e && "name" in e && (e.name = "RUMError[" + r + "]");
            "object" === typeof e && "message" in e && (e.message += ": " + JSON.stringify(n));
            throw e
        }

        function Pe(e, r) {
            var n = {
                passive: true,
                capture: true
            };

            function t() {
                r(e);
                a()
            }

            function o() {
                a()
            }

            function a() {
                removeEventListener("pointerup", t, n);
                removeEventListener("pointercancel", o, n)
            }
            addEventListener("pointerup", t, n);
            addEventListener("pointercancel", o, n)
        }
        var Ce = function (e, r, n, t) {
            return new(n || (n = Promise))(function (o, a) {
                function i(e) {
                    try {
                        u(t.next(e))
                    } catch (e) {
                        a(e)
                    }
                }

                function s(e) {
                    try {
                        u(t["throw"](e))
                    } catch (e) {
                        a(e)
                    }
                }

                function u(e) {
                    e.done ? o(e.value) : new n(function (r) {
                        r(e.value)
                    }).then(i, s)
                }
                u((t = t.apply(e, r || [])).next())
            })
        };
        var Ne = function (e, r) {
            var n = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                t, o, a, i;
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function s(e) {
                return function (r) {
                    return u([e, r])
                }
            }

            function u(i) {
                if (t) throw new TypeError("Generator is already executing.");
                while (n) try {
                    if (t = 1, o && (a = 2 & i[0] ? o["return"] : i[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, i[1])).done) return a;
                    (o = 0, a) && (i = [2 & i[0], a.value]);
                    switch (i[0]) {
                        case 0:
                        case 1:
                            a = i;
                            break;
                        case 4:
                            n.label++;
                            return {
                                value: i[1],
                                done: false
                            };
                        case 5:
                            n.label++;
                            o = i[1];
                            i = [0];
                            continue;
                        case 7:
                            i = n.ops.pop();
                            n.trys.pop();
                            continue;
                        default:
                            if (!(a = n.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                n = 0;
                                continue
                            }
                            if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                n.label = i[1];
                                break
                            }
                            if (6 === i[0] && n.label < a[1]) {
                                n.label = a[1];
                                a = i;
                                break
                            }
                            if (a && n.label < a[2]) {
                                n.label = a[2];
                                n.ops.push(i);
                                break
                            }
                            a[2] && n.ops.pop();
                            n.trys.pop();
                            continue
                    }
                    i = r.call(e, n)
                } catch (e) {
                    i = [6, e];
                    o = 0
                } finally {
                    t = a = 0
                }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: true
                }
            }
        };

        function Me(e) {
            return e + "-observer"
        }
        var ke = [];
        var Le;
        var Ie = 2e3;

        function Re(e) {
            ke.push(e);
            Le || (Le = window.requestIdleCallback(Ae, {
                timeout: Ie
            }))
        }

        function Ae(e) {
            while ((e.timeRemaining() > 0 || e.didTimeout) && ke.length) {
                var r = ke.shift();
                r && r.deliver()
            }
            Le = ke.length ? window.requestIdleCallback(Ae, {
                timeout: Ie
            }) : void 0
        }

        function Be(e) {
            window.requestIdleCallback ? Re(e) : e.deliver()
        }

        function De(e) {
            return Ce(this, void 0, void 0, function () {
                var r;
                return Ne(this, function (n) {
                    r = e.appName;
                    return [2, new Promise(function (e, n) {
                        var t = new XMLHttpRequest;
                        t.timeout = D;
                        t.onreadystatechange = function (r) {
                            4 === t.readyState && (200 === t.status ? e(JSON.parse(t.response)) : n(t.status))
                        };
                        t.ontimeout = function () {
                            n("Metric settings request timeout")
                        };
                        t.open("GET", u + "/" + r, true);
                        t.send()
                    })]
                })
            })
        }

        function Fe() {
            return "complete" === document.readyState
        }

        function qe(e) {
            return Ce(this, void 0, void 0, function () {
                var r, n, t, a, i, s, u, c, l, p, d, f;
                return Ne(this, function (v) {
                    switch (v.label) {
                        case 0:
                            r = e.enabled, n = void 0 === r || r;
                            if (!n) return [2];
                            return [4, De(e).catch(function (e) {
                                return {}
                            })];
                        case 1:
                            t = v.sent();
                            a = e.appName || "";
                            i = e.context || {};
                            s = o()();
                            u = Se.reduce(function (e, r) {
                                var n = t[r.eventName] || {};
                                var o = n.enabled,
                                    u = void 0 === o || o;
                                if (u) {
                                    var c = (new r).setApp(a).setId(s);
                                    c.requiresContext && (c.context = i);
                                    e.push(c)
                                }
                                return e
                            }, []);
                            c = [];
                            u.forEach(function (e) {
                                var r = e.getSupportType();
                                if ("observe" === r) {
                                    var n = e.getEntryType();
                                    var t = Me(n);
                                    c.push(n);
                                    window.addEventListener(t, function (r) {
                                        var n = r.detail;
                                        var o;
                                        try {
                                            o = e.observerParse(n);
                                            o && Be(e)
                                        } catch (r) {
                                            var a = e.getDeliveryBuffer();
                                            var i = a || n || {};
                                            xe(r, t, i)
                                        }
                                    })
                                } else if ("gather" === r) {
                                    var o = e.getGatherEvents();
                                    var a = e.getEventName();
                                    var i = function (r) {
                                        var n = e.gatherParse(r);
                                        n && Be(e)
                                    };
                                    var s = function (r) {
                                        var n;
                                        try {
                                            n = e.gather(r);
                                            "pointerdown" === n.eventType ? Pe(n, i) : i(n)
                                        } catch (r) {
                                            var t = e.getDeliveryBuffer();
                                            var u = t || n || {};
                                            xe(r, a, u)
                                        }
                                        e.shouldFireOnce() && o.forEach(function (e) {
                                            window.removeEventListener(e, s)
                                        })
                                    };
                                    o.forEach(function (e) {
                                        M.indexOf(e) > -1 && Fe() ? s({}) : window.addEventListener(e, s)
                                    })
                                }
                            });
                            if ("PerformanceObserver" in window) {
                                l = function (e) {
                                    e.forEach(function (e) {
                                        var r = new CustomEvent(Me(e.entryType), {
                                            detail: e.toJSON()
                                        });
                                        window.dispatchEvent(r)
                                    })
                                };
                                p = function (e) {
                                    var r = e.entryType;
                                    return c.indexOf(r) > -1
                                };
                                d = function (e) {
                                    var r = e.entryType;
                                    return "navigation" === r
                                };
                                l(performance.getEntries().filter(function (e) {
                                    return p(e) && !d(e) || Fe() && d(e)
                                }));
                                f = new window.PerformanceObserver(function (e) {
                                    l(e.getEntries())
                                });
                                if (c.length > 0) try {
                                    f.observe({
                                        entryTypes: c
                                    })
                                } catch (e) {}
                            }
                            return [2]
                    }
                })
            })
        }

        function ze(e) {
            if (!Ge()) return;
            var r = "rum-start-" + e;
            window.performance.mark(r)
        }

        function Ue(e) {
            if (!(Ge() && He())) return;
            var r = "rum-start-" + e;
            var n = "rum-end-" + e;
            var t = "rum-" + e;
            window.performance.mark(n);
            try {
                window.performance.measure(t, r, n)
            } catch (e) {
                e instanceof DOMException && window.performance.measure(t, "navigationStart", n)
            }
            var o = window.performance.getEntriesByName(t);
            var a = o[o.length - 1];
            U(x, a);
            return a
        }

        function He() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function Ge() {
            return "mark" in window.performance && "measure" in window.performance
        }
        n.d(r, "default", function () {
            return qe
        });
        n.d(r, "getPerformanceData", function () {
            return K
        });
        n.d(r, "mark", function () {
            return ze
        });
        n.d(r, "measure", function () {
            return Ue
        })
    },
    "./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js": function (e, r, n) {
        e.exports = {
            default: n("./src/main/webapp/universal/node_modules/core-js/library/fn/object/assign.js"),
            __esModule: true
        }
    },
    "./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/freeze.js": function (e, r, n) {
        e.exports = {
            default: n("./src/main/webapp/universal/node_modules/core-js/library/fn/object/freeze.js"),
            __esModule: true
        }
    },
    "./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js": function (e, r, n) {
        "use strict";
        r.__esModule = true;
        var t = n("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/assign.js");
        var o = a(t);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.default = o.default || function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
            }
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/fn/object/assign.js": function (e, r, n) {
        n("./src/main/webapp/universal/node_modules/core-js/library/modules/es6.object.assign.js");
        e.exports = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js").Object.assign
    },
    "./src/main/webapp/universal/node_modules/core-js/library/fn/object/freeze.js": function (e, r, n) {
        n("./src/main/webapp/universal/node_modules/core-js/library/modules/es6.object.freeze.js");
        e.exports = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js").Object.freeze
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_a-function.js": function (e, r) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_an-object.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js");
        e.exports = function (e) {
            if (!t(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_array-includes.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-iobject.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-length.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-absolute-index.js");
        e.exports = function (e) {
            return function (r, n, i) {
                var s = t(r);
                var u = o(s.length);
                var c = a(i, u);
                var l;
                if (e && n != n)
                    while (u > c) {
                        l = s[c++];
                        if (l != l) return true
                    } else
                        for (; u > c; c++)
                            if ((e || c in s) && s[c] === n) return e || c || 0;
                return !e && -1
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_cof.js": function (e, r) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js": function (e, r) {
        var n = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_ctx.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_a-function.js");
        e.exports = function (e, r, n) {
            t(e);
            if (void 0 === r) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(r, n)
                    };
                case 2:
                    return function (n, t) {
                        return e.call(r, n, t)
                    };
                case 3:
                    return function (n, t, o) {
                        return e.call(r, n, t, o)
                    }
            }
            return function () {
                return e.apply(r, arguments)
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_defined.js": function (e, r) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_descriptors.js": function (e, r, n) {
        e.exports = !n("./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_dom-create.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_global.js").document;
        var a = t(o) && t(o.createElement);
        e.exports = function (e) {
            return a ? o.createElement(e) : {}
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_enum-bug-keys.js": function (e, r) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_export.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_ctx.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_hide.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_has.js");
        var u = "prototype";
        var c = function (e, r, n) {
            var l = e & c.F;
            var p = e & c.G;
            var d = e & c.S;
            var f = e & c.P;
            var v = e & c.B;
            var m = e & c.W;
            var b = p ? o : o[r] || (o[r] = {});
            var y = b[u];
            var w = p ? t : d ? t[r] : (t[r] || {})[u];
            var _, j, h;
            p && (n = r);
            for (_ in n) {
                j = !l && w && void 0 !== w[_];
                if (j && s(b, _)) continue;
                h = j ? w[_] : n[_];
                b[_] = p && "function" != typeof w[_] ? n[_] : v && j ? a(h, t) : m && w[_] == h ? function (e) {
                    var r = function (r, n, t) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(r);
                                case 2:
                                    return new e(r, n)
                            }
                            return new e(r, n, t)
                        }
                        return e.apply(this, arguments)
                    };
                    r[u] = e[u];
                    return r
                }(h) : f && "function" == typeof h ? a(Function.call, h) : h;
                if (f) {
                    (b.virtual || (b.virtual = {}))[_] = h;
                    e & c.R && y && !y[_] && i(y, _, h)
                }
            }
        };
        c.F = 1;
        c.G = 2;
        c.S = 4;
        c.P = 8;
        c.B = 16;
        c.W = 32;
        c.U = 64;
        c.R = 128;
        e.exports = c
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js": function (e, r) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return true
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_global.js": function (e, r) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_has.js": function (e, r) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, r) {
            return n.call(e, r)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_hide.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-dp.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_property-desc.js");
        e.exports = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_descriptors.js") ? function (e, r, n) {
            return t.f(e, r, o(1, n))
        } : function (e, r, n) {
            e[r] = n;
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_ie8-dom-define.js": function (e, r, n) {
        e.exports = !n("./src/main/webapp/universal/node_modules/core-js/library/modules/_descriptors.js") && !n("./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js")(function () {
            return 7 != Object.defineProperty(n("./src/main/webapp/universal/node_modules/core-js/library/modules/_dom-create.js")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_iobject.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_cof.js");
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == t(e) ? e.split("") : Object(e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js": function (e, r) {
        e.exports = function (e) {
            return "object" === typeof e ? null !== e : "function" === typeof e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_library.js": function (e, r) {
        e.exports = true
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_meta.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_uid.js")("meta");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_has.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-dp.js").f;
        var s = 0;
        var u = Object.isExtensible || function () {
            return true
        };
        var c = !n("./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js")(function () {
            return u(Object.preventExtensions({}))
        });
        var l = function (e) {
            i(e, t, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        };
        var p = function (e, r) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, t)) {
                if (!u(e)) return "F";
                if (!r) return "E";
                l(e)
            }
            return e[t].i
        };
        var d = function (e, r) {
            if (!a(e, t)) {
                if (!u(e)) return true;
                if (!r) return false;
                l(e)
            }
            return e[t].w
        };
        var f = function (e) {
            c && v.NEED && u(e) && !a(e, t) && l(e);
            return e
        };
        var v = e.exports = {
            KEY: t,
            NEED: false,
            fastKey: p,
            getWeak: d,
            onFreeze: f
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-assign.js": function (e, r, n) {
        "use strict";
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-keys.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-gops.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-pie.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-object.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_iobject.js");
        var u = Object.assign;
        e.exports = !u || n("./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js")(function () {
            var e = {};
            var r = {};
            var n = Symbol();
            var t = "abcdefghijklmnopqrst";
            e[n] = 7;
            t.split("").forEach(function (e) {
                r[e] = e
            });
            return 7 != u({}, e)[n] || Object.keys(u({}, r)).join("") != t
        }) ? function e(r, n) {
            var u = i(r);
            var c = arguments.length;
            var l = 1;
            var p = o.f;
            var d = a.f;
            while (c > l) {
                var f = s(arguments[l++]);
                var v = p ? t(f).concat(p(f)) : t(f);
                var m = v.length;
                var b = 0;
                var y;
                while (m > b) d.call(f, y = v[b++]) && (u[y] = f[y])
            }
            return u
        } : u
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-dp.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_an-object.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_ie8-dom-define.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-primitive.js");
        var i = Object.defineProperty;
        r.f = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function e(r, n, s) {
            t(r);
            n = a(n, true);
            t(s);
            if (o) try {
                return i(r, n, s)
            } catch (e) {}
            if ("get" in s || "set" in s) throw TypeError("Accessors not supported!");
            "value" in s && (r[n] = s.value);
            return r
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-gops.js": function (e, r) {
        r.f = Object.getOwnPropertySymbols
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-keys-internal.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_has.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-iobject.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_array-includes.js")(false);
        var i = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_shared-key.js")("IE_PROTO");
        e.exports = function (e, r) {
            var n = o(e);
            var s = 0;
            var u = [];
            var c;
            for (c in n) c != i && t(n, c) && u.push(c);
            while (r.length > s) t(n, c = r[s++]) && (~a(u, c) || u.push(c));
            return u
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-keys.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-keys-internal.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_enum-bug-keys.js");
        e.exports = Object.keys || function e(r) {
            return t(r, o)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-pie.js": function (e, r) {
        r.f = {}.propertyIsEnumerable
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_object-sap.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_export.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_fails.js");
        e.exports = function (e, r) {
            var n = (o.Object || {})[e] || Object[e];
            var i = {};
            i[e] = r(n);
            t(t.S + t.F * a(function () {
                n(1)
            }), "Object", i)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_property-desc.js": function (e, r) {
        e.exports = function (e, r) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: r
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_shared-key.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_shared.js")("keys");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_uid.js");
        e.exports = function (e) {
            return t[e] || (t[e] = o(e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_shared.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_core.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_global.js");
        var a = "__core-js_shared__";
        var i = o[a] || (o[a] = {});
        (e.exports = function (e, r) {
            return i[e] || (i[e] = void 0 !== r ? r : {})
        })("versions", []).push({
            version: t.version,
            mode: n("./src/main/webapp/universal/node_modules/core-js/library/modules/_library.js") ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-absolute-index.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-integer.js");
        var o = Math.max;
        var a = Math.min;
        e.exports = function (e, r) {
            e = t(e);
            return e < 0 ? o(e + r, 0) : a(e, r)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-integer.js": function (e, r) {
        var n = Math.ceil;
        var t = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? t : n)(e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-iobject.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_iobject.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_defined.js");
        e.exports = function (e) {
            return t(o(e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-length.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_to-integer.js");
        var o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(t(e), 9007199254740991) : 0
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-object.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_defined.js");
        e.exports = function (e) {
            return Object(t(e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_to-primitive.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js");
        e.exports = function (e, r) {
            if (!t(e)) return e;
            var n, o;
            if (r && "function" == typeof (n = e.toString) && !t(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !t(o = n.call(e))) return o;
            if (!r && "function" == typeof (n = e.toString) && !t(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/_uid.js": function (e, r) {
        var n = 0;
        var t = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + t).toString(36))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/es6.object.assign.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_export.js");
        t(t.S + t.F, "Object", {
            assign: n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-assign.js")
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/library/modules/es6.object.freeze.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_is-object.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/library/modules/_meta.js").onFreeze;
        n("./src/main/webapp/universal/node_modules/core-js/library/modules/_object-sap.js")("freeze", function (e) {
            return function r(n) {
                return e && t(n) ? e(o(n)) : n
            }
        })
    },
    "./src/main/webapp/universal/node_modules/cuid/index.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/cuid/lib/fingerprint.browser.js");
        var o = n("./src/main/webapp/universal/node_modules/cuid/lib/pad.js");
        var a = 0,
            i = 4,
            s = 36,
            u = Math.pow(s, i);

        function c() {
            return o((Math.random() * u << 0).toString(s), i)
        }

        function l() {
            a = a < u ? a : 0;
            a++;
            return a - 1
        }

        function p() {
            var e = "c",
                r = (new Date).getTime().toString(s),
                n = o(l().toString(s), i),
                a = t(),
                u = c() + c();
            return e + r + n + a + u
        }
        p.slug = function e() {
            var r = (new Date).getTime().toString(36),
                n = l().toString(36).slice(-4),
                o = t().slice(0, 1) + t().slice(-1),
                a = c().slice(-2);
            return r.slice(-2) + n + o + a
        };
        p.isCuid = function e(r) {
            if ("string" !== typeof r) return false;
            if (r.startsWith("c")) return true;
            return false
        };
        p.isSlug = function e(r) {
            if ("string" !== typeof r) return false;
            var n = r.length;
            if (n >= 7 && n <= 10) return true;
            return false
        };
        p.fingerprint = t;
        e.exports = p
    },
    "./src/main/webapp/universal/node_modules/cuid/lib/fingerprint.browser.js": function (e, r, n) {
        var t = n("./src/main/webapp/universal/node_modules/cuid/lib/pad.js");
        var o = "object" === typeof window ? window : self;
        var a = Object.keys(o).length;
        var i = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
        var s = t((i + navigator.userAgent.length).toString(36) + a.toString(36), 4);
        e.exports = function e() {
            return s
        }
    },
    "./src/main/webapp/universal/node_modules/cuid/lib/pad.js": function (e, r) {
        e.exports = function e(r, n) {
            var t = "000000000" + r;
            return t.substr(t.length - n)
        }
    },
    "./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js": function (e, r, n) {
        (function (n) {
            var t, o;
            (function () {
                var a = "undefined" != typeof window && window === this ? this : "undefined" != typeof n && null != n ? n : this,
                    i = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, n) {
                        e != Array.prototype && e != Object.prototype && (e[r] = n.value)
                    };

                function s() {
                    s = function () {};
                    a.Symbol || (a.Symbol = c)
                }
                var u = 0;

                function c(e) {
                    return "jscomp_symbol_" + (e || "") + u++
                }

                function l() {
                    s();
                    var e = a.Symbol.iterator;
                    e || (e = a.Symbol.iterator = a.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && i(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return p(this)
                        }
                    });
                    l = function () {}
                }

                function p(e) {
                    var r = 0;
                    return d(function () {
                        return r < e.length ? {
                            done: !1,
                            value: e[r++]
                        } : {
                            done: !0
                        }
                    })
                }

                function d(e) {
                    l();
                    e = {
                        next: e
                    };
                    e[a.Symbol.iterator] = function () {
                        return this
                    };
                    return e
                }

                function f(e) {
                    l();
                    var r = e[Symbol.iterator];
                    return r ? r.call(e) : p(e)
                }

                function v(e) {
                    if (!(e instanceof Array)) {
                        e = f(e);
                        for (var r, n = []; !(r = e.next()).done;) n.push(r.value);
                        e = n
                    }
                    return e
                }
                var m = 0;

                function b(e, r) {
                    var n = XMLHttpRequest.prototype.send,
                        t = m++;
                    XMLHttpRequest.prototype.send = function (o) {
                        for (var a = [], i = 0; i < arguments.length; ++i) a[i - 0] = arguments[i];
                        var s = this;
                        e(t);
                        this.addEventListener("readystatechange", function () {
                            4 === s.readyState && r(t)
                        });
                        return n.apply(this, a)
                    }
                }

                function y(e, r) {
                    var n = fetch;
                    fetch = function (t) {
                        for (var o = [], a = 0; a < arguments.length; ++a) o[a - 0] = arguments[a];
                        return new Promise(function (t, a) {
                            var i = m++;
                            e(i);
                            n.apply(null, [].concat(v(o))).then(function (e) {
                                r(i);
                                t(e)
                            }, function (e) {
                                r(e);
                                a(e)
                            })
                        })
                    }
                }
                var w = "img script iframe link audio video source".split(" ");

                function _(e, r) {
                    e = f(e);
                    for (var n = e.next(); !n.done; n = e.next())
                        if (n = n.value, r.includes(n.nodeName.toLowerCase()) || _(n.children, r)) return !0;
                    return !1
                }

                function j(e) {
                    var r = new MutationObserver(function (r) {
                        r = f(r);
                        for (var n = r.next(); !n.done; n = r.next()) n = n.value, "childList" == n.type && _(n.addedNodes, w) ? e(n) : "attributes" == n.type && w.includes(n.target.tagName.toLowerCase()) && e(n)
                    });
                    r.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return r
                }

                function h(e, r) {
                    if (2 < e.length) return performance.now();
                    var n = [];
                    r = f(r);
                    for (var t = r.next(); !t.done; t = r.next()) t = t.value, n.push({
                        timestamp: t.start,
                        type: "requestStart"
                    }), n.push({
                        timestamp: t.end,
                        type: "requestEnd"
                    });
                    r = f(e);
                    for (t = r.next(); !t.done; t = r.next()) n.push({
                        timestamp: t.value,
                        type: "requestStart"
                    });
                    n.sort(function (e, r) {
                        return e.timestamp - r.timestamp
                    });
                    e = e.length;
                    for (r = n.length - 1; 0 <= r; r--) switch (t = n[r], t.type) {
                        case "requestStart":
                            e--;
                            break;
                        case "requestEnd":
                            e++;
                            if (2 < e) return t.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function g(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var r = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function (e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [];
                    r && r.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    b(this.m.bind(this), this.l.bind(this));
                    y(this.m.bind(this), this.l.bind(this));
                    T(this);
                    this.w && (this.h = j(this.B.bind(this)))
                }
                g.prototype.getFirstConsistentlyInteractive = function () {
                    var e = this;
                    return new Promise(function (r) {
                        e.s = r;
                        "complete" == document.readyState ? E(e) : window.addEventListener("load", function () {
                            E(e)
                        })
                    })
                };

                function E(e) {
                    e.i = !0;
                    var r = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                        n = h(e.g, e.b);
                    O(e, Math.max(n + 5e3, r))
                }

                function O(e, r) {
                    !e.i || e.v > r || (clearTimeout(e.j), e.j = setTimeout(function () {
                        var r = performance.timing.navigationStart,
                            n = h(e.g, e.b),
                            r = (window.a && window.a.A ? 1e3 * window.a.A().C - r : 0) || performance.timing.domContentLoadedEventEnd - r;
                        if (e.u) var t = e.u;
                        else performance.timing.domContentLoadedEventEnd ? (t = performance.timing, t = t.domContentLoadedEventEnd - t.navigationStart) : t = null;
                        var o = performance.now();
                        null === t && O(e, Math.max(n + 5e3, o + 1e3));
                        var a = e.a;
                        5e3 > o - n ? n = null : (n = a.length ? a[a.length - 1].end : r, n = 5e3 > o - n ? null : Math.max(n, t));
                        n && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect());
                        O(e, performance.now() + 1e3)
                    }, r - performance.now()), e.v = r)
                }

                function T(e) {
                    e.c = new PerformanceObserver(function (r) {
                        r = f(r.getEntries());
                        for (var n = r.next(); !n.done; n = r.next())
                            if (n = n.value, "resource" === n.entryType && (e.b.push({
                                    start: n.fetchStart,
                                    end: n.responseEnd
                                }), O(e, h(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                var t = n.startTime + n.duration;
                                e.a.push({
                                    start: n.startTime,
                                    end: t
                                });
                                O(e, t + 5e3)
                            }
                    });
                    e.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                g.prototype.m = function (e) {
                    this.f.set(e, performance.now())
                };
                g.prototype.l = function (e) {
                    this.f.delete(e)
                };
                g.prototype.B = function () {
                    O(this, performance.now() + 5e3)
                };
                a.Object.defineProperties(g.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return [].concat(v(this.f.values()))
                        }
                    }
                });
                var S = {
                    getFirstConsistentlyInteractive: function (e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new g(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                e.exports ? e.exports = S : !(t = [], o = function () {
                    return S
                }.apply(r, t), void 0 !== o && (e.exports = o))
            })()
        }).call(this, n("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/packages/enums/PageTypes.js": function (e, r) {
        var n = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = n
    },
    "./src/main/webapp/universal/packages/enums/StatusConstants.js": function (e, r) {
        var n = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12
        };
        e.exports = n
    },
    "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function (e, r, n) {
        "use strict";
        var t = n("./src/main/webapp/universal/node_modules/babel-runtime/helpers/extends.js");
        var o = v(t);
        var a = n("./src/main/webapp/universal/node_modules/babel-runtime/core-js/object/freeze.js");
        var i = v(a);
        var s;
        var u = n("./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js");
        var c = v(u);
        var l = n("./src/main/webapp/universal/packages/enums/StatusConstants.js");
        var p = v(l);
        var d = n("./src/main/webapp/universal/packages/enums/PageTypes.js");
        var f = v(d);

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var b = window.top !== window;
        var y = window.location && window.location.pathname || "";
        var w = !b && 0 === y.indexOf("/config/");
        var _ = m.version || 7;

        function j() {
            return {
                templateId: m.templateId || ""
            }
        }

        function h() {
            var e = m.website,
                r = void 0 === e ? {} : e;
            return {
                authenticUrl: r.authenticUrl || "",
                cloneable: r.cloneable || false,
                developerMode: r.developerMode || false,
                isHstsEnabled: r.isHstsEnabled || false,
                language: r.language || "",
                timeZone: r.timeZone || "",
                websiteId: r.id || "",
                websiteType: r.websiteType || -1
            }
        }

        function g() {
            var e = m.websiteSettings,
                r = void 0 === e ? {} : e;
            return {
                ampEnabled: r.ampEnabled || false
            }
        }

        function E() {
            var e = m.collection,
                r = void 0 === e ? {} : e;
            return {
                collectionType: r.type || -1
            }
        }
        var O = (0, i.default)((s = {}, s[f.default.COMMERCE_CART_V2] = "commerce-cart", s));

        function T() {
            if (!m) return;
            if (w) {
                var e = m.website.siteStatus.value === p.default.INTERNAL;
                var r = m.authenticatedAccount,
                    n = r.createdOn,
                    t = r.id;
                (0, c.default)({
                    appName: "v" + _ + "-config",
                    context: (0, o.default)({}, j(), h(), g(), {
                        isInternal: e,
                        createdOn: n,
                        memberId: t
                    })
                });
                return
            }
            if (window.Squarespace && "SECTION_CONTEXT" in window.Squarespace) {
                (0, c.default)({
                    appName: "v8-user-sites",
                    context: (0, o.default)({
                        websiteId: m.websiteId || "",
                        inFrame: b
                    }, j())
                });
                return
            }
            var a = m.impersonatedSession,
                i = void 0 !== a && a,
                s = m.pageType;
            (0, c.default)({
                appName: O[s] || "v7-user-sites",
                context: (0, o.default)({
                    impersonatedSession: i,
                    pageType: "number" === typeof s ? s : -1,
                    inFrame: b
                }, j(), h(), g(), E())
            })
        }
        T()
    }
});