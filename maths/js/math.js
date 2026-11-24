/* ==========================================================================
   Offline LaTeX-Subset Mathematical Typesetting Engine for HKDSE Maths
   Zero external CDN — renders fractions, roots, trig, logs, geometry, sets offline
   ========================================================================== */
(function () {
  "use strict";

  const SYMBOLS = {
    alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", theta: "θ",
    lambda: "λ", mu: "μ", pi: "π", rho: "ρ", sigma: "σ", phi: "φ", omega: "ω",
    Delta: "Δ", Theta: "Θ", Pi: "Π", Sigma: "Σ", Omega: "Ω",
    times: " × ", cdot: " · ", div: " ÷ ", pm: " ± ", mp: " ∓ ",
    approx: " ≈ ", equiv: " ≡ ", cong: " ≅ ", sim: " ~ ", propto: " ∝ ",
    le: " ≤ ", leq: " ≤ ", ge: " ≥ ", geq: " ≥ ", ne: " ≠ ", neq: " ≠ ",
    rightarrow: " → ", to: " → ", Rightarrow: " ⇒ ", leftarrow: " ← ",
    leftrightarrow: " ↔ ", Leftrightarrow: " ⇔ ",
    therefore: " ∴ ", because: " ∵ ",
    in: " ∈ ", notin: " ∉ ", cup: " ∪ ", cap: " ∩ ", subset: " ⊂ ",
    sum: "∑", prod: "∏", infty: "∞", circ: "°", degree: "°",
    prime: "′", perp: " ⊥ ", parallel: " ∥ ", angle: "∠", triangle: "△",
    dots: "…", ldots: "…", cdots: "⋯",
    quad: " ", qquad: "  ", ",": " ", ";": " ", " ": " ", "%": "%"
  };

  const FUNCS = new Set([
    "sin", "cos", "tan", "cot", "sec", "csc", "arcsin", "arccos", "arctan",
    "ln", "log", "exp", "max", "min", "lim", "P", "C", "HCF", "LCM", "SD", "IQR"
  ]);

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function readGroup(src, pos) {
    while (pos < src.length && src[pos] === " ") pos++;
    if (pos >= src.length) return { content: "", next: pos };
    if (src[pos] === "{") {
      let depth = 0;
      const start = pos + 1;
      for (let i = pos; i < src.length; i++) {
        if (src[i] === "\\" && i + 1 < src.length) { i++; continue; }
        if (src[i] === "{") depth++;
        else if (src[i] === "}") {
          depth--;
          if (depth === 0) return { content: src.slice(start, i), next: i + 1 };
        }
      }
      return { content: src.slice(start), next: src.length };
    }
    if (src[pos] === "\\") {
      const m = src.slice(pos).match(/^\\([A-Za-z]+|[^A-Za-z\s])/);
      if (m) return { content: m[0], next: pos + m[0].length };
    }
    return { content: src[pos], next: pos + 1 };
  }

  function parseMath(tex) {
    let out = "";
    let i = 0;
    const len = tex.length;

    while (i < len) {
      const ch = tex[i];
      if (ch === " " || ch === "\t" || ch === "\n") { i++; continue; }

      if (ch === "{") {
        const g = readGroup(tex, i);
        out += parseMath(g.content);
        i = g.next;
        continue;
      }

      if (ch === "\\") {
        const m = tex.slice(i + 1).match(/^([A-Za-z]+|[^A-Za-z\s])/);
        if (!m) { i++; continue; }
        const cmd = m[1];
        i += 1 + cmd.length;

        if (cmd === "frac" || cmd === "dfrac" || cmd === "tfrac") {
          const num = readGroup(tex, i);
          const den = readGroup(tex, num.next);
          i = den.next;
          out += `<span class="m-frac"><span class="m-num">${parseMath(num.content)}</span><span class="m-den">${parseMath(den.content)}</span></span>`;
          continue;
        }
        if (cmd === "sqrt") {
          let idxHtml = "";
          if (tex[i] === "[") {
            const closeIdx = tex.indexOf("]", i);
            if (closeIdx !== -1) {
              idxHtml = `<sup class="m-sup-only">${parseMath(tex.slice(i + 1, closeIdx))}</sup>`;
              i = closeIdx + 1;
            }
          }
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-sqrt">${idxHtml}<span class="m-rad">√</span><span class="m-radicand">${parseMath(body.content)}</span></span>`;
          continue;
        }
        if (cmd === "overline" || cmd === "bar") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-overline">${parseMath(body.content)}</span>`;
          continue;
        }
        if (cmd === "text" || cmd === "mathrm" || cmd === "rm") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-rm">${escapeHtml(body.content)}</span>`;
          continue;
        }
        if (cmd === "mathbf" || cmd === "textbf" || cmd === "mathbb") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<strong class="m-bf">${parseMath(body.content)}</strong>`;
          continue;
        }
        if (cmd === "left" || cmd === "right") {
          while (i < len && tex[i] === " ") i++;
          if (i < len) {
            if (tex[i] === ".") { i++; continue; }
            if (tex[i] === "\\") {
              const dm = tex.slice(i + 1).match(/^(\{|\}|\|)/);
              if (dm) { out += escapeHtml(dm[1]); i += 1 + dm[1].length; continue; }
            }
            out += escapeHtml(tex[i]);
            i++;
          }
          continue;
        }
        if (FUNCS.has(cmd)) {
          out += `<span class="m-fn">${cmd}</span>`;
          continue;
        }
        if (Object.prototype.hasOwnProperty.call(SYMBOLS, cmd)) {
          out += SYMBOLS[cmd];
          continue;
        }
        out += `<span class="m-rm">${escapeHtml(cmd)}</span>`;
        continue;
      }

      if (ch === "_" || ch === "^") {
        let sub = null, sup = null;
        while (i < len && (tex[i] === "_" || tex[i] === "^")) {
          const kind = tex[i];
          const g = readGroup(tex, i + 1);
          if (kind === "_") sub = parseMath(g.content);
          else sup = parseMath(g.content);
          i = g.next;
          while (i < len && tex[i] === " ") i++;
        }
        if (sub !== null && sup !== null) {
          out += `<span class="m-subsup"><span>${sup}</span><span>${sub}</span></span>`;
        } else if (sup !== null) {
          out += `<sup class="m-sup-only">${sup}</sup>`;
        } else if (sub !== null) {
          out += `<sub class="m-sub-only">${sub}</sub>`;
        }
        continue;
      }

      if (ch === "=" || ch === "+" || ch === "<" || ch === ">") {
        out += ` ${escapeHtml(ch)} `;
        i++;
        continue;
      }
      if (ch === "-") {
        const prev = out.replace(/<[^>]+>/g, "").trim();
        const isUnary = prev === "" || /[=(,+\-×·÷<≤>≥≈→⇒∠△]$/.test(prev);
        out += isUnary ? "−" : " − ";
        i++;
        continue;
      }
      if (/[0-9.]/.test(ch)) {
        let j = i;
        while (j < len && /[0-9.]/.test(tex[j])) j++;
        out += `<span class="m-num-lit">${tex.slice(i, j)}</span>`;
        i = j;
        continue;
      }
      if (/[A-Za-z]/.test(ch)) {
        out += `<var class="m-var">${ch}</var>`;
        i++;
        continue;
      }
      out += escapeHtml(ch);
      i++;
    }
    return out;
  }

  function display(tex) {
    return `<div class="math-display"><span class="math-expr">${parseMath(String(tex).trim())}</span></div>`;
  }
  function inline(tex) {
    return `<span class="math-inline"><span class="math-expr">${parseMath(String(tex).trim())}</span></span>`;
  }
  function rich(text) {
    if (!text) return "";
    let s = String(text);
    const tokens = [];
    const put = (html) => {
      const idx = tokens.length;
      tokens.push(html);
      return `@@MTOK_${idx}@@`;
    };
    s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, expr) => put(display(expr)));
    s = s.replace(/\$([^$\n]+?)\$/g, (_, expr) => put(inline(expr)));
    s = escapeHtml(s);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\n/g, "<br>");
    s = s.replace(/@@MTOK_(\d+)@@/g, (_, idx) => tokens[Number(idx)]);
    return s;
  }

  window.MATH_TEX = { parse: parseMath, display, inline, rich };
})();
