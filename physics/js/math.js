/* ==========================================================================
   Offline LaTeX-Subset Mathematical Typesetting Engine for HKDSE Physics
   Zero external CDN dependency — renders crisp textbook math offline (file://)
   Supports: \frac, \sqrt, \overline, \vec, \text, \mathrm, Greek letters,
   operators, sub/superscripts (including stacked _{...}^{...}), $...$ & $$...$$
   ========================================================================== */
(function () {
  "use strict";

  const GREEK_AND_SYMBOLS = {
    alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", varepsilon: "ε",
    zeta: "ζ", eta: "η", theta: "θ", vartheta: "ϑ", iota: "ι", kappa: "κ",
    lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", pi: "π", rho: "ρ", sigma: "σ",
    tau: "τ", upsilon: "υ", phi: "φ", varphi: "φ", chi: "χ", psi: "ψ", omega: "ω",
    Gamma: "Γ", Delta: "Δ", Theta: "Θ", Lambda: "Λ", Xi: "Ξ", Pi: "Π",
    Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω",
    times: " × ", cdot: " · ", div: " ÷ ", pm: " ± ", mp: " ∓ ",
    approx: " ≈ ", propto: " ∝ ", sim: " ~ ", equiv: " ≡ ",
    le: " ≤ ", leq: " ≤ ", ge: " ≥ ", geq: " ≥ ", ne: " ≠ ", neq: " ≠ ",
    ll: " ≪ ", gg: " ≫ ",
    rightarrow: " → ", to: " → ", Rightarrow: " ⇒ ", leftarrow: " ← ",
    leftrightarrow: " ↔ ", Leftrightarrow: " ⇔ ",
    uparrow: "↑", downarrow: "↓", updownarrow: "↕", Uparrow: "⇑", Downarrow: "⇓",
    sum: "∑", int: "∫", prod: "∏",
    infty: "∞", partial: "∂", circ: "°", degree: "°",
    prime: "′", perp: "⊥", parallel: "∥", angle: "∠",
    dots: "…", ldots: "…", cdots: "⋯",
    lfloor: "⌊", rfloor: "⌋", lceil: "⌈", rceil: "⌉",
    quad: " ", qquad: "  ", ",": " ", ";": " ", " ": " ",
    "%": "%"
  };

  const UPRIGHT_FUNCS = new Set([
    "sin", "cos", "tan", "cot", "sec", "csc", "arcsin", "arccos", "arctan",
    "ln", "log", "exp", "max", "min", "lim", "eff", "net", "rms", "avg", "total"
  ]);

  function escapeHtml(str) {
    return String(str)
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
      let start = pos + 1;
      for (let i = pos; i < src.length; i++) {
        if (src[i] === "\\" && i + 1 < src.length) {
          i++;
          continue;
        }
        if (src[i] === "{") depth++;
        else if (src[i] === "}") {
          depth--;
          if (depth === 0) {
            return { content: src.slice(start, i), next: i + 1 };
          }
        }
      }
      return { content: src.slice(start), next: src.length };
    }
    if (src[pos] === "\\") {
      let m = src.slice(pos).match(/^\\([A-Za-z]+|[^A-Za-z\s])/);
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

      // Skip stray whitespace except when meaningful
      if (ch === " " || ch === "\t" || ch === "\n") {
        i++;
        continue;
      }

      // Grouped block {...}
      if (ch === "{") {
        const g = readGroup(tex, i);
        out += parseMath(g.content);
        i = g.next;
        continue;
      }

      // Commands \...
      if (ch === "\\") {
        const rest = tex.slice(i + 1);
        const cmdMatch = rest.match(/^([A-Za-z]+|[^A-Za-z\s])/);
        if (!cmdMatch) {
          i++;
          continue;
        }
        const cmd = cmdMatch[1];
        i += 1 + cmd.length;

        if (cmd === "frac" || cmd === "dfrac" || cmd === "tfrac") {
          const num = readGroup(tex, i);
          const den = readGroup(tex, num.next);
          i = den.next;
          out += `<span class="m-frac"><span class="m-num">${parseMath(num.content)}</span><span class="m-den">${parseMath(den.content)}</span></span>`;
          continue;
        }

        if (cmd === "sqrt") {
          let indexHtml = "";
          if (tex[i] === "[") {
            const closeIdx = tex.indexOf("]", i);
            if (closeIdx !== -1) {
              indexHtml = `<sup class="m-root-idx">${parseMath(tex.slice(i + 1, closeIdx))}</sup>`;
              i = closeIdx + 1;
            }
          }
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-sqrt">${indexHtml}<span class="m-rad">√</span><span class="m-radicand">${parseMath(body.content)}</span></span>`;
          continue;
        }

        if (cmd === "overline" || cmd === "bar") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-overline">${parseMath(body.content)}</span>`;
          continue;
        }

        if (cmd === "vec") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-vec">${parseMath(body.content)}</span>`;
          continue;
        }

        if (cmd === "text" || cmd === "mathrm" || cmd === "operatorname" || cmd === "rm") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<span class="m-rm">${escapeHtml(body.content)}</span>`;
          continue;
        }

        if (cmd === "mathbf" || cmd === "textbf" || cmd === "boldsymbol") {
          const body = readGroup(tex, i);
          i = body.next;
          out += `<strong class="m-bf">${parseMath(body.content)}</strong>`;
          continue;
        }

        if (cmd === "mathcal") {
          const body = readGroup(tex, i);
          i = body.next;
          if (body.content.trim() === "E") {
            out += `<span class="m-cal">ℰ</span>`;
          } else {
            out += `<span class="m-cal">${escapeHtml(body.content)}</span>`;
          }
          continue;
        }

        if (cmd === "left" || cmd === "right") {
          while (i < len && tex[i] === " ") i++;
          if (i < len) {
            if (tex[i] === "\\") {
              const dMatch = tex.slice(i + 1).match(/^(lfloor|rfloor|lceil|rceil|\{|\}|\|)/);
              if (dMatch) {
                const tok = dMatch[1];
                const sym = GREEK_AND_SYMBOLS[tok] || tok;
                out += `<span class="m-delim">${escapeHtml(sym)}</span>`;
                i += 1 + tok.length;
                continue;
              }
            } else if (tex[i] === ".") {
              i++;
              continue;
            } else {
              out += `<span class="m-delim">${escapeHtml(tex[i])}</span>`;
              i++;
              continue;
            }
          }
          continue;
        }

        if (cmd === "not") {
          while (i < len && tex[i] === " ") i++;
          if (tex.slice(i).startsWith("\\approx")) {
            out += `<span class="m-op"> ≉ </span>`;
            i += 7;
            continue;
          }
          if (tex[i] === "=") {
            out += `<span class="m-op"> ≠ </span>`;
            i++;
            continue;
          }
          out += `<span class="m-op">¬</span>`;
          continue;
        }

        if (UPRIGHT_FUNCS.has(cmd)) {
          out += `<span class="m-fn">${cmd}</span>`;
          continue;
        }

        if (Object.prototype.hasOwnProperty.call(GREEK_AND_SYMBOLS, cmd)) {
          const sym = GREEK_AND_SYMBOLS[cmd];
          const isOp = sym.startsWith(" ") || sym.endsWith(" ");
          out += isOp
            ? `<span class="m-op">${sym}</span>`
            : `<span class="m-sym">${sym}</span>`;
          continue;
        }

        // Fallback unknown command
        out += `<span class="m-rm">${escapeHtml(cmd)}</span>`;
        continue;
      }

      // Subscript _ and Superscript ^ (handle combined _{a}^{b} or ^{b}_{a})
      if (ch === "_" || ch === "^") {
        let sub = null;
        let sup = null;
        while (i < len && (tex[i] === "_" || tex[i] === "^")) {
          const kind = tex[i];
          const g = readGroup(tex, i + 1);
          if (kind === "_") sub = parseMath(g.content);
          else sup = parseMath(g.content);
          i = g.next;
          while (i < len && tex[i] === " ") i++;
        }
        if (sub !== null && sup !== null) {
          out += `<span class="m-subsup"><span class="m-sup">${sup}</span><span class="m-sub">${sub}</span></span>`;
        } else if (sup !== null) {
          out += `<sup class="m-sup-only">${sup}</sup>`;
        } else if (sub !== null) {
          out += `<sub class="m-sub-only">${sub}</sub>`;
        }
        continue;
      }

      // Operators with comfortable spacing
      if (ch === "=" || ch === "+" || ch === "<" || ch === ">") {
        out += `<span class="m-op"> ${escapeHtml(ch)} </span>`;
        i++;
        continue;
      }
      if (ch === "-") {
        // Unary minus if at start or after = ( [ , + - * / < >
        const prev = out.replace(/<[^>]+>/g, "").trim();
        const isUnary = prev === "" || /[=(,+\-×·÷<≤>≥≈∝→⇒]$/.test(prev);
        out += isUnary ? `<span class="m-unary">−</span>` : `<span class="m-op"> − </span>`;
        i++;
        continue;
      }

      // Numbers (upright)
      if (/[0-9.]/.test(ch)) {
        let j = i;
        while (j < len && /[0-9.]/.test(tex[j])) j++;
        out += `<span class="m-num-lit">${tex.slice(i, j)}</span>`;
        i = j;
        continue;
      }

      // Latin letters (italicized variables)
      if (/[A-Za-z]/.test(ch)) {
        out += `<var class="m-var">${ch}</var>`;
        i++;
        continue;
      }

      // Brackets & punctuation
      out += `<span class="m-punct">${escapeHtml(ch)}</span>`;
      i++;
    }

    return out;
  }

  function renderDisplayMath(tex) {
    return `<div class="math-display"><span class="math-expr">${parseMath(tex.trim())}</span></div>`;
  }

  function renderInlineMath(tex) {
    return `<span class="math-inline"><span class="math-expr">${parseMath(tex.trim())}</span></span>`;
  }

  // Convert rich markdown + $inline$ + $$display$$ math to safe HTML
  function formatRichText(text) {
    if (!text) return "";
    let s = String(text);

    // Protect math blocks first using placeholders so markdown ** / _ don't corrupt LaTeX
    const tokens = [];
    const putToken = (html) => {
      const idx = tokens.length;
      tokens.push(html);
      return `@@MATHTOKEN_${idx}@@`;
    };

    // Display math $$...$$
    s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, expr) => putToken(renderDisplayMath(expr)));
    // Inline math $...$
    s = s.replace(/\$([^$\n]+?)\$/g, (_, expr) => putToken(renderInlineMath(expr)));

    // Escape remaining HTML safely
    s = escapeHtml(s);

    // Inline code `...`
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    // Bold **...**
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // Line breaks
    s = s.replace(/\n/g, "<br>");

    // Restore math tokens
    s = s.replace(/@@MATHTOKEN_(\d+)@@/g, (_, idx) => tokens[Number(idx)]);
    return s;
  }

  window.PHY_MATH = {
    parse: parseMath,
    display: renderDisplayMath,
    inline: renderInlineMath,
    rich: formatRichText
  };
})();
