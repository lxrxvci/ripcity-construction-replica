/**
 * Agentic PNW preview bridge v4 — VERBATIM copy of
 * ~/.kimi-code/skills/client-porting/references/bridge-v4.js.
 * Do not edit: the bridge is shared across all portal client sites and any
 * change is a portal-side decision with a new bridge version. Injected as the
 * first child of <body> in src/app/layout.tsx (never next/script).
 */
export const PREVIEW_BRIDGE = String.raw`      /* Agentic PNW preview bridge: the client-portal canvas asks for the
         viewport (scroll + size) when the owner marks a spot to change. */
      window.addEventListener("message", function (e) {
        if (e.data && e.data.apnw === "viewport-req" && e.source) {
          e.source.postMessage(
            { apnw: "viewport", scrollY: window.scrollY, w: window.innerWidth, h: window.innerHeight },
            e.origin === "null" ? "*" : e.origin
          );
        }
      });
      /* Instant Mark-spot capture: rasterize the viewport in-page and hand
         it back — no server round trip, no headless browser. */
      window.addEventListener("message", function (e) {
        if (!e.data || e.data.apnw !== "capture-req" || !e.source) return;
        var reply = function (msg) {
          e.source.postMessage(msg, e.origin === "null" ? "*" : e.origin);
        };
        (async function () {
          try {
            var scrollY = window.scrollY;
            var w = window.innerWidth, h = window.innerHeight;
            var scale = Math.min(window.devicePixelRatio || 1, 1.25);

            var css = "";
            for (var i = 0; i < document.styleSheets.length; i++) {
              try {
                var rules = document.styleSheets[i].cssRules;
                for (var j = 0; j < rules.length; j++) css += rules[j].cssText + "\n";
              } catch (err) {}
            }

            var clone = document.documentElement.cloneNode(true);
            clone.querySelectorAll("script,noscript,iframe").forEach(function (n) { n.remove(); });

            var liveImgs = document.querySelectorAll("img");
            var cloneImgs = clone.querySelectorAll("img");
            for (var k = 0; k < cloneImgs.length; k++) {
              var live = liveImgs[k];
              if (!live) continue;
              var r = live.getBoundingClientRect();
              if (r.bottom < 0 || r.top > h || !live.naturalWidth) {
                cloneImgs[k].removeAttribute("src");
                continue;
              }
              try {
                var c = document.createElement("canvas");
                c.width = live.naturalWidth;
                c.height = live.naturalHeight;
                c.getContext("2d").drawImage(live, 0, 0);
                cloneImgs[k].src = c.toDataURL("image/jpeg", 0.72);
              } catch (err) {
                cloneImgs[k].removeAttribute("src");
              }
            }

            var style = document.createElement("style");
            style.textContent = css;
            clone.insertBefore(style, clone.firstChild);

            var xhtml = new XMLSerializer().serializeToString(clone);
            var svg =
              '<svg xmlns="http://www.w3.org/2000/svg" width="' + Math.round(w * scale) + '" height="' + Math.round(h * scale) + '" viewBox="0 0 ' + w + ' ' + h + '">' +
              '<foreignObject x="0" y="' + (-scrollY) + '" width="' + Math.max(w, document.documentElement.scrollWidth) + '" height="' + document.documentElement.scrollHeight + '">' +
              xhtml +
              "</foreignObject></svg>";
            var url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
            var img = new Image();
            img.src = url;
            await img.decode();
            var canvas = document.createElement("canvas");
            canvas.width = Math.round(w * scale);
            canvas.height = Math.round(h * scale);
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);
            reply({ apnw: "capture", ok: true, dataUrl: canvas.toDataURL("image/webp", 0.78) });
          } catch (err) {
            reply({ apnw: "capture", ok: false });
          }
        })();
      });
      /* Inline edit mode: the portal arms this, editable [data-cms] nodes
         outline on hover, clicks report back, previews patch the DOM live. */
      (function () {
        var active = false, hoverEl = null, selEl = null, originals = {}, rectT = null;
        function post(msg) { if (window.parent && window.parent !== window) window.parent.postMessage(msg, "*"); }
        function rectOf(el) {
          var r = el.getBoundingClientRect();
          return { x: r.left, y: r.top, w: r.width, h: r.height };
        }
        function reportRect() {
          if (rectT) return;
          rectT = setTimeout(function () {
            rectT = null;
            if (active && selEl && document.contains(selEl)) {
              post({ apnw: "edit-rect", key: selEl.getAttribute("data-cms"), rect: rectOf(selEl) });
            }
          }, 80);
        }
        var style = document.createElement("style");
        style.textContent = ".apnw-hover{outline:2px solid #2f5f8f !important;outline-offset:2px;cursor:pointer !important}.apnw-selected{outline:2px dashed #2f5f8f !important;outline-offset:2px}";
        document.head.appendChild(style);
        function revert(key) {
          var el = document.querySelector('[data-cms="' + key + '"]');
          if (el && key in originals) {
            if (originals[key].img != null) el.src = originals[key].img;
            else el.textContent = originals[key].text;
            delete originals[key];
          }
        }
        window.addEventListener("message", function (e) {
          var d = e.data || {};
          if (d.apnw === "edit-mode") {
            active = !!d.on;
            document.querySelectorAll(".apnw-hover,.apnw-selected").forEach(function (n) { n.classList.remove("apnw-hover", "apnw-selected"); });
            selEl = null;
            if (!active) Object.keys(originals).forEach(revert);
            post({ apnw: "edit-mode-ack", on: active, v: 4, caps: { rect: true } });
          } else if (d.apnw === "edit-preview" && d.key) {
            var el = document.querySelector('[data-cms="' + d.key + '"]');
            if (!el) return;
            if (!(d.key in originals)) originals[d.key] = { text: el.textContent, img: el.tagName === "IMG" ? el.getAttribute("src") : null };
            if (el.tagName === "IMG") el.src = d.value; else el.textContent = d.value;
          } else if (d.apnw === "edit-revert" && d.key) {
            revert(d.key);
            var el2 = document.querySelector('[data-cms="' + d.key + '"]');
            if (el2) el2.classList.remove("apnw-selected");
            if (selEl && selEl.getAttribute("data-cms") === d.key) selEl = null;
          }
        });
        document.addEventListener("mouseover", function (e) {
          if (!active) return;
          var el = e.target && e.target.closest ? e.target.closest("[data-cms]") : null;
          if (hoverEl && hoverEl !== el) hoverEl.classList.remove("apnw-hover");
          hoverEl = el;
          if (el) el.classList.add("apnw-hover");
        }, true);
        document.addEventListener("click", function (e) {
          if (!active) return;
          var el = e.target && e.target.closest ? e.target.closest("[data-cms]") : null;
          if (!el) return;
          e.preventDefault();
          e.stopPropagation();
          if (selEl) selEl.classList.remove("apnw-selected");
          selEl = el;
          el.classList.add("apnw-selected");
          post({
            apnw: "edit-select",
            key: el.getAttribute("data-cms"),
            tag: el.tagName.toLowerCase(),
            text: el.tagName === "IMG" ? "" : el.textContent,
            imgSrc: el.tagName === "IMG" ? (el.currentSrc || el.src) : null,
            rect: rectOf(el)
          });
        }, true);
        /* While a selection is active, keep the portal's floating UI glued to
           the element: re-report its rect (throttled ~80ms) on scroll/resize. */
        window.addEventListener("scroll", reportRect, { passive: true });
        window.addEventListener("resize", reportRect);
      })();
      /* Throttled scroll reports keep portal markups glued to the content. */
      (function () {
        var t = null;
        window.addEventListener("scroll", function () {
          if (t || !window.parent || window.parent === window) return;
          t = setTimeout(function () {
            t = null;
            window.parent.postMessage({ apnw: "scroll", scrollY: window.scrollY }, "*");
          }, 80);
        }, { passive: true });
      })();
`;
