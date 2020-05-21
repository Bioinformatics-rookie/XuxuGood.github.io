/*
 * iziToast | v1.0.1
 * http://izitoast.marcelodolce.com
 * by Marcelo Dolce.
 */
!function (e, t) {
    "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.iziToast = t(e)
}("undefined" != typeof global ? global : this.window || this.global, function (e) {
    "use strict";

    function t() {
        var e, t = document.createElement("fakeelement"), n = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (e in n) if (void 0 !== t.style[e]) return n[e]
    }

    function n(e) {
        var t = document.createDocumentFragment(), n = document.createElement("div");
        for (n.innerHTML = e; n.firstChild;) t.appendChild(n.firstChild);
        return t
    }

    function i(e, t, n) {
        var s = !1, a = !1, r = !1, d = null, l = e.querySelector("." + o + "-progressbar div"), c = {
            hideEta: null, maxHideTime: null, currentTime: (new Date).getTime(), updateProgress: function () {
                if (s = !!e.classList.contains(o + "-paused"), a = !!e.classList.contains(o + "-reseted"), r = !!e.classList.contains(o + "-closed"), a && (console.log("ok"), clearTimeout(d), l.style.width = "100%", i(e, t, n), e.classList.remove(o + "-reseted")), r && (clearTimeout(d), console.log("closed1"), e.classList.remove(o + "-closed")), !s && !a && !r) {
                    c.currentTime = c.currentTime + 10;
                    var u = (c.hideEta - c.currentTime) / c.maxHideTime * 100;
                    l.style.width = u + "%", (Math.round(u) < 0 || "object" != typeof e) && (clearTimeout(d), n.apply(), console.log("closed2"))
                }
            }
        };
        t.timeout > 0 && (c.maxHideTime = parseFloat(t.timeout), c.hideEta = (new Date).getTime() + c.maxHideTime, d = setInterval(c.updateProgress, 10))
    }

    var o = "iziToast", s = {}, a = !!document.querySelector && !!e.addEventListener,
        r = !!/Mobi/.test(navigator.userAgent), d = 568, l = {}, c = {
            "class": "",
            title: "",
            message: "",
            color: "",
            icon: "",
            iconText: "",
            iconColor: "",
            image: "",
            imageWidth: 50,
            layout: 1,
            balloon: !1,
            close: !0,
            rtl: !1,
            position: "bottomRight",
            target: "",
            timeout: 5e3,
            pauseOnHover: !0,
            resetOnHover: !1,
            progressBar: !0,
            progressBarColor: "",
            animateInside: !0,
            buttons: {},
            transitionIn: "fadeInUp",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeInUp",
            transitionOutMobile: "fadeOutDown",
            onOpen: function () {
            },
            onClose: function () {
            }
        };
    "remove" in Element.prototype || (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this)
    });
    var u = function (e, t, n) {
        if ("[object Object]" === Object.prototype.toString.call(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e); else if (e) for (var o = 0, s = e.length; s > o; o++) t.call(n, e[o], o, e)
    }, p = function (e, t) {
        var n = {};
        return u(e, function (t, i) {
            n[i] = e[i]
        }), u(t, function (e, i) {
            n[i] = t[i]
        }), n
    };
    t();
    return s.destroy = function () {
        u(document.querySelectorAll("." + o + "-wrapper"), function (e, t) {
            e.remove()
        }), u(document.querySelectorAll("." + o), function (e, t) {
            e.remove()
        }), document.removeEventListener(o + "-open", {}, !1), document.removeEventListener(o + "-close", {}, !1), l = {}
    }, s.settings = function (e) {
        a && (s.destroy(), l = e, c = p(c, e || {}))
    }, s.info = function (e) {
        var t = {color: "blue", icon: "ico-info"}, n = p(l, e || {});
        n = p(t, n || {}), this.show(n)
    }, s.success = function (e) {
        var t = {color: "green", icon: "ico-check"}, n = p(l, e || {});
        n = p(t, n || {}), this.show(n)
    }, s.warning = function (e) {
        var t = {color: "yellow", icon: "ico-warning"}, n = p(l, e || {});
        n = p(t, n || {}), this.show(n)
    }, s.error = function (e) {
        var t = {color: "red", icon: "ico-error"}, n = p(l, e || {});
        n = p(t, n || {}), this.show(n)
    }, s.hide = function (e, t) {
        var n = p(c, e || {});
        if ("object" != typeof t && (t = document.querySelector(t)), t.classList.add(o + "-closed"), (n.transitionIn || n.transitionInMobile) && t.classList.remove(n.transitionIn, n.transitionInMobile), n.transitionOut || n.transitionOutMobile) {
            r || window.innerWidth <= d ? n.transitionOutMobile.length > 0 && t.classList.add(n.transitionOutMobile) : n.transitionOut.length > 0 && t.classList.add(n.transitionOut);
            var i = t.parentNode.offsetHeight;
            t.parentNode.style.height = i + "px", t.style.pointerEvents = "none", r || window.innerWidth <= d || (t.parentNode.style.transitionDelay = "0.2s"), setTimeout(function () {
                t.parentNode.style.height = "0px", window.setTimeout(function () {
                    t.parentNode.remove()
                }, 1e3)
            }, 200)
        } else t.parentNode.remove();
        if (n["class"]) try {
            var s;
            window.CustomEvent ? s = new CustomEvent("iziToast-close", {detail: {"class": n["class"]}}) : (s = document.createEvent("CustomEvent"), s.initCustomEvent("iziToast-close", !0, !0, {"class": n["class"]})), document.dispatchEvent(s)
        } catch (a) {
            console.warn(a)
        }
        "undefined" != typeof n.onClose && n.onClose.apply()
    }, s.show = function (e) {
        var t = this, s = p(l, e || {});
        s = p(c, s);
        var a = document.createElement("div");
        a.classList.add(o + "-capsule");
        var m = document.createElement("div");
        if (m.classList.add(o), r || window.innerWidth <= d ? s.transitionInMobile.length > 0 && m.classList.add(s.transitionInMobile) : s.transitionIn.length > 0 && m.classList.add(s.transitionIn), s.rtl && m.classList.add(o + "-rtl"), s.color.length > 0 && ("#" == s.color.substring(0, 1) || "rgb" == s.color.substring(0, 3) || "hsl" == s.color.substring(0, 3) ? m.style.background = s.color : m.classList.add(o + "-color-" + s.color)), s["class"] && m.classList.add(s["class"]), s.image) {
            var h = document.createElement("div");
            h.classList.add(o + "-cover"), h.style.width = s.imageWidth + "px", h.style.backgroundImage = "url(" + s.image + ")", m.appendChild(h)
        }
        var v;
        if (s.close ? (v = document.createElement("button"), v.classList.add(o + "-close"), m.appendChild(v)) : s.rtl ? m.style.paddingLeft = "30px" : m.style.paddingRight = "30px", s.progressBar) {
            var f = document.createElement("div");
            f.classList.add(o + "-progressbar");
            var g = document.createElement("div");
            g.style.background = s.progressBarColor, f.appendChild(g), m.appendChild(f), setTimeout(function () {
                i(m, s, function () {
                    t.hide(s, m)
                })
            }, 300)
        } else s.progressBar === !1 && s.timeout > 0 && setTimeout(function () {
            t.hide(s, m)
        }, s.timeout);
        var y = document.createElement("div");
        if (y.classList.add(o + "-body"), s.image && (s.rtl ? y.style.marginRight = s.imageWidth + 10 + "px" : y.style.marginLeft = s.imageWidth + 10 + "px"), s.icon) {
            var w = document.createElement("i");
            w.setAttribute("class", o + "-icon " + s.icon), s.iconText && w.appendChild(document.createTextNode(s.iconText)), s.rtl ? y.style.paddingRight = "33px" : y.style.paddingLeft = "33px", s.iconColor && (w.style.color = s.iconColor), y.appendChild(w)
        }
        var b = document.createElement("strong");
        b.appendChild(document.createTextNode(s.title));
        var M = document.createElement("br");
        var L = document.createElement("p");
        L.appendChild(document.createTextNode(s.message)), s.layout > 1 && (L.style.width = "100%", m.classList.add(o + "-layout" + s.layout)), s.balloon && m.classList.add(o + "-balloon"), y.appendChild(b),y.appendChild(M), y.appendChild(L);
        var C;
        if (s.buttons.length > 0) {
            C = document.createElement("div"), C.classList.add(o + "-buttons"), L.style.marginRight = "15px";
            var E = 0;
            u(s.buttons, function (e, i) {
                C.appendChild(n(e[0]));
                var o = C.childNodes;
                o[E].addEventListener("click", function (n) {
                    n.preventDefault();
                    var i = e[1];
                    return new i(t, m)
                }), E++
            }), y.appendChild(C)
        }
        m.appendChild(y), a.style.visibility = "hidden", a.style.height = "0px", a.appendChild(m), setTimeout(function () {
            var e = m.offsetHeight, t = m.currentStyle || window.getComputedStyle(m), n = t.marginTop;
            n = n.split("px"), n = parseInt(n[0]);
            var i = t.marginBottom;
            i = i.split("px"), i = parseInt(i[0]), a.style.visibility = "", a.style.height = e + i + n + "px", setTimeout(function () {
                a.style.height = "auto"
            }, 1e3)
        }, 100);
        var T, x = s.position;
        s.target ? (T = document.querySelector(s.target), T.classList.add(o + "-target"), T.appendChild(a)) : (x = r || window.innerWidth <= d ? "bottomLeft" == s.position || "bottomRight" == s.position || "bottomCenter" == s.position ? o + "-wrapper-bottomCenter" : "topLeft" == s.position || "topRight" == s.position || "topCenter" == s.position ? o + "-wrapper-topCenter" : o + "-wrapper-center" : o + "-wrapper-" + x, T = document.querySelector("." + o + "-wrapper." + x), T || (T = document.createElement("div"), T.classList.add(o + "-wrapper"), T.classList.add(x), document.body.appendChild(T)), "topLeft" == s.position || "topCenter" == s.position || "topRight" == s.position ? T.insertBefore(a, T.firstChild) : T.appendChild(a)), s.onOpen.apply();
        try {
            var I;
            window.CustomEvent ? I = new CustomEvent("iziToast-open", {detail: {"class": s["class"]}}) : (I = document.createEvent("CustomEvent"), I.initCustomEvent("iziToast-open", !0, !0, {"class": s["class"]})), document.dispatchEvent(I)
        } catch (O) {
            console.warn(O)
        }
        if (s.animateInside) {
            m.classList.add(o + "-animateInside");
            var M = 200, N = 100, H = 300;
            if ("bounceInLeft" == s.transitionIn && (M = 400, N = 200, H = 400), window.setTimeout(function () {
                b.classList.add("slideIn")
            }, M), window.setTimeout(function () {
                L.classList.add("slideIn")
            }, N), s.icon && window.setTimeout(function () {
                w.classList.add("revealIn")
            }, H), s.buttons.length > 0 && C) {
                var k = 150;
                u(C.childNodes, function (e, t) {
                    window.setTimeout(function () {
                        e.classList.add("revealIn")
                    }, k), k += k
                })
            }
        }
        v && v.addEventListener("click", function (e) {
            e.target;
            t.hide(s, m)
        }), s.pauseOnHover && (m.addEventListener("mouseenter", function (e) {
            this.classList.add(o + "-paused")
        }), m.addEventListener("mouseleave", function (e) {
            this.classList.remove(o + "-paused")
        })), s.resetOnHover && (m.addEventListener("mouseenter", function (e) {
            this.classList.add(o + "-reseted")
        }), m.addEventListener("mouseleave", function (e) {
            this.classList.remove(o + "-reseted")
        }))
    }, s
});