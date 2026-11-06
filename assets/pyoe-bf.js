/* Pour Your Own Epoxy: Black Friday countdown and code copy.
   Each [data-pyoe-countdown] reads data-start / data-end (ISO dates with timezone offset)
   and moves through three phases: before (counts to start), live (counts to end), ended.
   Staging only: add ?preview=live or ?preview=ended to the URL to force a phase. */
(function () {
  var labels = {
    before: "Black Friday deals open in",
    live: "Sale ends in",
    ended: "This sale has ended. Thanks for a great Black Friday."
  };

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function forcedPhase() {
    try {
      var p = new URLSearchParams(window.location.search).get("preview");
      return p === "live" || p === "ended" || p === "before" ? p : null;
    } catch (e) { return null; }
  }

  function initCountdown(el) {
    var start = new Date(el.getAttribute("data-start")).getTime();
    var end = new Date(el.getAttribute("data-end")).getTime();
    var root = el.closest(".pyoe-bf");
    var label = el.querySelector("[data-label]");
    var nums = {
      d: el.querySelector("[data-d]"), h: el.querySelector("[data-h]"),
      m: el.querySelector("[data-m]"), s: el.querySelector("[data-s]")
    };
    var force = forcedPhase();

    function tick() {
      var now = Date.now();
      var phase = force || (now < start ? "before" : now < end ? "live" : "ended");
      var target = phase === "before" ? start : end;
      if (force === "live" && now >= end) target = now + 3 * 86400000;
      if (force === "before" && now >= start) target = now + 7 * 86400000;
      var diff = Math.max(0, target - now);

      el.setAttribute("data-phase", phase);
      if (root) root.setAttribute("data-sale-phase", phase);
      if (label) label.textContent = el.getAttribute("data-label-" + phase) || labels[phase];

      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      if (nums.d) nums.d.textContent = pad(d);
      if (nums.h) nums.h.textContent = pad(h);
      if (nums.m) nums.m.textContent = pad(m);
      if (nums.s) nums.s.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  function initCopy(btn) {
    btn.addEventListener("click", function () {
      var code = btn.getAttribute("data-code");
      var done = function () {
        var original = btn.getAttribute("data-original") || btn.textContent;
        btn.setAttribute("data-original", original);
        btn.textContent = "Code copied";
        setTimeout(function () { btn.textContent = original; }, 2200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done, done);
      } else {
        var t = document.createElement("textarea");
        t.value = code; document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(t); done();
      }
    });
  }

  function init() {
    document.querySelectorAll("[data-pyoe-countdown]").forEach(initCountdown);
    document.querySelectorAll("[data-pyoe-copy]").forEach(initCopy);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
