/* ==========================================================================
   Bilingual Vector SVG Physics Diagrams & Graphs Engine (36 Essential Visuals)
   Zero dependencies · Theme-aware (Light/Dark) · Dynamic ZH / BOTH / EN labels
   ========================================================================== */
(function () {
  "use strict";

  function mkLabel(lang) {
    return function (zh, en) {
      if (lang === "en") return en;
      if (lang === "both") {
        if (zh === en) return zh;
        // Keep short SVG tags bilingual; keep long panel titles concise inside tight SVG boxes
        // (full bilingual titles & explanations always appear right above/below each diagram)
        return (zh.length + en.length <= 16) ? `${zh} / ${en}` : zh;
      }
      return zh;
    };
  }

  function svgWrap(id, uid, w, h, inner) {
    const p = `${id}-${uid}`;
    const mk = (name, color) =>
      `<marker id="${p}-${name}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M 1 1.5 L 9 5 L 1 8.5 z" fill="${color}"/></marker>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${id}">
      <defs>
        ${mk("ink", "var(--svg-axis)")}
        ${mk("blue", "var(--svg-blue)")}
        ${mk("red", "var(--svg-red)")}
        ${mk("green", "var(--svg-green)")}
        ${mk("amber", "var(--svg-amber)")}
        ${mk("purple", "var(--svg-purple)")}
        ${mk("cyan", "var(--svg-cyan)")}
      </defs>
      <rect x="0" y="0" width="${w}" height="${h}" rx="8" fill="var(--svg-bg)"/>
      ${inner(p)}
    </svg>`;
  }

  const S = {
    tx: (x, y, text, opts = {}) => {
      const anchor = opts.a || "middle";
      const size = opts.s || 11.5;
      const fill = opts.c || "var(--svg-ink)";
      const weight = opts.b ? "700" : "500";
      const italic = opts.i ? ' font-style="italic"' : "";
      return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${italic} font-family="var(--font-sans)">${text}</text>`;
    },
    axis: (p, x0, y0, x1, y1, xl, yl) => `
      <line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="var(--svg-axis)" stroke-width="1.6" marker-end="url(#${p}-ink)"/>
      <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="var(--svg-axis)" stroke-width="1.6" marker-end="url(#${p}-ink)"/>
      ${xl ? S.tx(x1 - 4, y0 + 16, xl, { a: "end", s: 11, b: true }) : ""}
      ${yl ? S.tx(x0 + 6, y1 + 10, yl, { a: "start", s: 11, b: true }) : ""}
    `,
    sinePath: (x0, yMid, width, amp, cycles, phase = 0) => {
      let d = "";
      const steps = 90;
      for (let i = 0; i <= steps; i++) {
        const u = i / steps;
        const x = x0 + u * width;
        const y = yMid - amp * Math.sin(2 * Math.PI * cycles * u + phase);
        d += (i === 0 ? "M" : "L") + `${x.toFixed(1)},${y.toFixed(1)} `;
      }
      return d;
    }
  };

  let uidCounter = 0;

  const RENDERERS = {
    /* 1. Book 1: Heating Curve */
    "diag-heating-curve": (t) => svgWrap("diag-heating-curve", ++uidCounter, 560, 275, (p) => `
      ${S.axis(p, 58, 232, 520, 24, t("時間 t", "Time t"), t("溫度 T (°C)", "Temp T (°C)"))}
      <!-- Dotted reference levels -->
      <line x1="58" y1="168" x2="225" y2="168" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="58" y1="86" x2="435" y2="86" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(52, 172, t("熔點", "m.p."), { a: "end", s: 10.5, c: "var(--svg-blue)" })}
      ${S.tx(52, 90, t("沸點", "b.p."), { a: "end", s: 10.5, c: "var(--svg-red)" })}
      <!-- Main Curve -->
      <polyline points="68,220 122,168 216,168 314,86 446,86 496,36" fill="none" stroke="var(--svg-blue)" stroke-width="3" stroke-linejoin="round"/>
      <!-- Vertices -->
      ${[[68,220,"A"],[122,168,"B"],[216,168,"C"],[314,86,"D"],[446,86,"E"],[496,36,"F"]].map(([x,y,l]) =>
        `<circle cx="${x}" cy="${y}" r="3.6" fill="var(--svg-red)"/>${S.tx(x - 6, y - 9, l, { s: 11, b: true, c: "var(--svg-red)" })}`
      ).join("")}
      <!-- Phase annotations -->
      ${S.tx(102, 206, t("固態", "Solid"), { s: 10.5, c: "var(--svg-muted)" })}
      ${S.tx(169, 156, t("熔解 (E=mlf)", "Melting (mlf)"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(169, 184, t("PE↑, KE不變", "PE↑, KE const"), { s: 10, c: "var(--svg-green)" })}
      ${S.tx(282, 134, t("液態", "Liquid"), { s: 10.5, c: "var(--svg-muted)" })}
      ${S.tx(380, 70, t("沸騰汽化 (E=mlv)", "Boiling (mlv)"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(380, 102, t("平段更長 (lv ≫ lf)", "Longer (lv ≫ lf)"), { s: 10, c: "var(--svg-green)" })}
      ${S.tx(510, 74, t("氣態", "Gas"), { s: 10.2, c: "var(--svg-muted)" })}
      <!-- Slope callout box -->
      <rect x="292" y="160" width="234" height="58" rx="7" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1"/>
      ${S.tx(409, 180, t("斜段斜率 = P / (mc)", "Slope = P / (mc)"), { s: 11, b: true, c: "var(--svg-blue)" })}
      ${S.tx(409, 198, t("冰 c=2100 斜率較水 c=4200 更陡", "Ice (c=2100) steeper than water (4200)"), { s: 10, c: "var(--svg-ink)" })}
      ${S.tx(409, 212, t("斜段：KE↑  |  平段：PE↑", "Slanted: KE↑ | Plateau: PE↑"), { s: 9.8, c: "var(--svg-muted)" })}
    `),

    /* 2. Book 1: SHC & Latent Heat Control Setup */
    "diag-specific-heat-exp": (t) => svgWrap("diag-specific-heat-exp", ++uidCounter, 560, 270, (p) => `
      <!-- Left: SHC Metal Block / Cup -->
      <rect x="16" y="14" width="252" height="242" rx="8" fill="none" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(142, 34, t("比熱容量 c 測定（金屬塊）", "Measuring c (Metal Block)"), { s: 11.5, b: true, c: "var(--svg-blue)" })}
      <!-- Insulation lagging -->
      <rect x="74" y="96" width="136" height="118" rx="6" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)" stroke-width="1.5" stroke-dasharray="5,3"/>
      <!-- Metal cylinder -->
      <rect x="92" y="110" width="100" height="90" rx="4" fill="var(--svg-grid)" stroke="var(--svg-axis)" stroke-width="1.8"/>
      <!-- Heater + Thermometer -->
      <rect x="112" y="84" width="16" height="92" rx="3" fill="var(--svg-red)"/>
      <line x1="120" y1="84" x2="120" y2="54" stroke="var(--svg-red)" stroke-width="2"/>
      <rect x="94" y="44" width="52" height="20" rx="4" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)"/>
      ${S.tx(120, 58, t("焦耳計", "J-meter"), { s: 9.5, b: true })}
      <rect x="158" y="64" width="8" height="114" rx="4" fill="var(--svg-bg)" stroke="var(--svg-blue)" stroke-width="1.5"/>
      <circle cx="162" cy="174" r="5.5" fill="var(--svg-red)"/>
      ${S.tx(184, 78, t("溫度計", "Thermometer"), { a: "start", s: 9.2, c: "var(--svg-blue)" })}
      <line x1="168" y1="80" x2="181" y2="80" stroke="var(--svg-blue)" stroke-width="1"/>
      ${S.tx(142, 232, t("隔熱棉減少散熱 · 滴油改善熱接觸", "Lagging cuts loss · Oil improves contact"), { s: 9.5, c: "var(--svg-muted)" })}
      ${S.tx(142, 247, t("散熱令 ΔT 偏小 → c 偏大", "Heat loss → smaller ΔT → c overestimated"), { s: 9.5, b: true, c: "var(--svg-red)" })}

      <!-- Right: lf Control Setup -->
      <rect x="284" y="14" width="260" height="242" rx="8" fill="none" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(414, 34, t("冰之比熔解潛熱 lf（對照裝置）", "Measuring lf of Ice (Control Setup)"), { s: 11.5, b: true, c: "var(--svg-cyan)" })}
      <!-- Two Funnels + Beakers -->
      ${[[352, t("實驗組 (通電)", "Exp (ON)"), true], [476, t("對照組 (斷電)", "Control (OFF)"), false]].map(([cx, lbl, on]) => `
        <polygon points="${cx-34},74 ${cx+34},74 ${cx+6},134 ${cx-6},134" fill="var(--svg-fill-soft)" stroke="var(--svg-cyan)" stroke-width="1.6"/>
        <rect x="${cx-5}" y="62" width="10" height="58" rx="2" fill="${on ? 'var(--svg-red)' : 'var(--svg-muted)'}"/>
        <circle cx="${cx-14}" cy="86" r="4" fill="var(--svg-bg)" stroke="var(--svg-cyan)"/>
        <circle cx="${cx+14}" cy="90" r="4" fill="var(--svg-bg)" stroke="var(--svg-cyan)"/>
        <circle cx="${cx-8}" cy="102" r="3.5" fill="var(--svg-bg)" stroke="var(--svg-cyan)"/>
        <!-- Beaker -->
        <path d="M${cx-26},154 L${cx-26},208 L${cx+26},208 L${cx+26},154" fill="none" stroke="var(--svg-axis)" stroke-width="1.8"/>
        <rect x="${cx-24}" y="${on ? 174 : 194}" width="48" height="${on ? 32 : 12}" fill="var(--svg-cyan)" opacity="0.35"/>
        ${S.tx(cx, 54, lbl, { s: 10, b: true, c: on ? "var(--svg-red)" : "var(--svg-muted)" })}
        ${S.tx(cx, 224, on ? "m_exp" : "m_ctrl", { s: 10.5, b: true })}
      `).join("")}
      ${S.tx(414, 245, t("lf = E / (m_exp − m_ctrl)（須用 0°C 碎冰）", "lf = E / (m_exp − m_ctrl) (0°C melting ice)"), { s: 9.8, b: true, c: "var(--svg-green)" })}
    `),

    /* 3. Book 1: Gas Laws Trio */
    "diag-gas-laws": (t) => svgWrap("diag-gas-laws", ++uidCounter, 560, 260, (p) => `
      <!-- Panel 1: Boyle p-V -->
      ${S.axis(p, 36, 206, 174, 34, "V", "p")}
      ${S.tx(105, 22, t("波義耳 (恆T)", "Boyle (const T)"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <path d="M 52,58 Q 66,158 164,186" fill="none" stroke="var(--svg-blue)" stroke-width="2.2"/>
      <path d="M 68,46 Q 94,132 168,158" fill="none" stroke="var(--svg-red)" stroke-width="2.2"/>
      ${S.tx(138, 146, "T₂ > T₁", { s: 10, b: true, c: "var(--svg-red)" })}
      ${S.tx(140, 176, "T₁", { s: 10, c: "var(--svg-blue)" })}
      ${S.tx(105, 240, "pV = const", { s: 10.5, b: true })}

      <!-- Panel 2: Boyle p-1/V -->
      ${S.axis(p, 212, 206, 356, 34, "1/V", "p")}
      ${S.tx(284, 22, t("線性化 p vs 1/V", "Linear p vs 1/V"), { s: 11, b: true, c: "var(--svg-purple)" })}
      <line x1="212" y1="206" x2="342" y2="62" stroke="var(--svg-purple)" stroke-width="2.4"/>
      <line x1="212" y1="206" x2="346" y2="122" stroke="var(--svg-blue)" stroke-width="2" stroke-dasharray="5,3"/>
      ${S.tx(310, 62, t("較高 T₂", "Higher T₂"), { s: 9.8, c: "var(--svg-purple)" })}
      ${S.tx(284, 240, t("斜率 = nRT", "Slope = nRT"), { s: 10.5, b: true })}

      <!-- Panel 3: Charles / Pressure Law -->
      <line x1="382" y1="206" x2="544" y2="206" stroke="var(--svg-axis)" stroke-width="1.6" marker-end="url(#${p}-ink)"/>
      <line x1="466" y1="214" x2="466" y2="34" stroke="var(--svg-axis)" stroke-width="1.6" marker-end="url(#${p}-ink)"/>
      ${S.tx(542, 222, "θ (°C)", { a: "end", s: 10.5, b: true })}
      ${S.tx(472, 44, "V / p", { a: "start", s: 10.5, b: true })}
      ${S.tx(466, 22, t("查理 / 壓強定律", "Charles / Pressure"), { s: 11, b: true, c: "var(--svg-green)" })}
      <line x1="396" y1="206" x2="466" y2="146" stroke="var(--svg-green)" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="466" y1="146" x2="536" y2="86" stroke="var(--svg-green)" stroke-width="2.6"/>
      <circle cx="396" cy="206" r="3.8" fill="var(--svg-red)"/>
      ${S.tx(396, 224, "−273°C", { s: 10, b: true, c: "var(--svg-red)" })}
      ${S.tx(466, 240, t("絕對零度 0 K", "Absolute Zero 0 K"), { s: 10.2, b: true, c: "var(--svg-red)" })}
    `),

    /* 4. Book 1: Kinetic Theory Box */
    "diag-kinetic-box": (t) => svgWrap("diag-kinetic-box", ++uidCounter, 560, 260, (p) => `
      <!-- 3D Cube -->
      <polygon points="88,68 238,68 238,214 88,214" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.8"/>
      <polygon points="88,68 134,36 284,36 238,68" fill="var(--svg-fill-soft)" opacity="0.6" stroke="var(--svg-axis)" stroke-width="1.5"/>
      <polygon points="238,68 284,36 284,182 238,214" fill="var(--svg-fill-warm)" stroke="var(--svg-red)" stroke-width="2.2"/>
      <line x1="134" y1="36" x2="134" y2="182" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="134" y1="182" x2="284" y2="182" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="134" y1="182" x2="88" y2="214" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <!-- Molecule colliding with right wall -->
      <circle cx="176" cy="136" r="9" fill="var(--svg-blue)"/>
      <line x1="188" y1="130" x2="248" y2="130" stroke="var(--svg-blue)" stroke-width="2.4" marker-end="url(#${p}-blue)"/>
      <line x1="250" y1="146" x2="190" y2="146" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      ${S.tx(218, 121, "+cx", { s: 11, b: true, c: "var(--svg-blue)" })}
      ${S.tx(218, 163, "−cx", { s: 11, b: true, c: "var(--svg-red)" })}
      ${S.tx(163, 232, "L", { s: 12, b: true, i: true })}
      ${S.tx(272, 114, t("器壁面積 L²", "Wall L²"), { a: "start", s: 10, b: true, c: "var(--svg-red)" })}
      <!-- Step summary panel -->
      <rect x="334" y="34" width="208" height="196" rx="8" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.2"/>
      ${S.tx(438, 58, t("微觀推導四步曲", "4-Step Derivation"), { s: 12, b: true, c: "var(--svg-blue)" })}
      ${S.tx(346, 86, "1. Δpx = 2mcx", { a: "start", s: 11, b: true })}
      ${S.tx(346, 112, "2. Δt = 2L / cx", { a: "start", s: 11, b: true })}
      ${S.tx(346, 138, "3. F₁ = Δpx/Δt = mcx² / L", { a: "start", s: 11, b: true })}
      ${S.tx(346, 166, "4. p = (Nmcx̄²) / L³", { a: "start", s: 11, b: true })}
      ${S.tx(346, 194, t("各向同性: cx̄² = ⅓ c̄²", "Isotropic: cx̄² = ⅓ c̄²"), { a: "start", s: 10.5, c: "var(--svg-green)", b: true })}
      ${S.tx(438, 218, "⇒  pV = ⅓ N m c̄²", { s: 12.5, b: true, c: "var(--svg-red)" })}
    `),

    /* 5. Book 2: Motion Graphs + Bouncing Ball */
    "diag-motion-graphs": (t) => svgWrap("diag-motion-graphs", ++uidCounter, 560, 290, (p) => `
      <!-- Top Row: s-t, v-t, a-t -->
      ${S.axis(p, 36, 116, 166, 22, "t", "s")}
      <path d="M 36,116 Q 100,112 154,32" fill="none" stroke="var(--svg-blue)" stroke-width="2.4"/>
      ${S.tx(102, 18, t("s-t (斜率=v)", "s-t (slope=v)"), { s: 10.5, b: true, c: "var(--svg-blue)" })}

      ${S.axis(p, 214, 116, 348, 22, "t", "v")}
      <polygon points="214,116 334,42 334,116" fill="var(--svg-fill-soft)"/>
      <line x1="214" y1="116" x2="334" y2="42" stroke="var(--svg-purple)" stroke-width="2.4"/>
      ${S.tx(282, 18, t("v-t (斜率=a,面積=s)", "v-t (slope=a,area=s)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      ${S.tx(292, 102, t("面積=s", "Area=s"), { s: 9.8, c: "var(--svg-blue)" })}

      ${S.axis(p, 396, 116, 536, 22, "t", "a")}
      <rect x="396" y="64" width="122" height="52" fill="var(--svg-fill-green)"/>
      <line x1="396" y1="64" x2="518" y2="64" stroke="var(--svg-green)" stroke-width="2.6"/>
      ${S.tx(466, 18, t("a-t (面積=Δv)", "a-t (area=Δv)"), { s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(458, 94, t("面積=Δv", "Area=Δv"), { s: 9.8, c: "var(--svg-green)" })}

      <!-- Bottom: Bouncing Ball v-t -->
      <line x1="48" y1="212" x2="532" y2="212" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="58" y1="274" x2="58" y2="146" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(530, 228, "t", { a: "end", s: 11, b: true })}
      ${S.tx(68, 154, t("v (向上+)", "v (up +)"), { a: "start", s: 10, b: true })}
      ${S.tx(340, 152, t("彈跳球 v-t 圖（空中段平行，斜率 = −g）", "Bouncing Ball v-t (Parallel flight lines, slope = −g)"), { s: 10.2, b: true, c: "var(--svg-red)" })}
      <polyline points="58,212 162,272 172,164 268,260 276,178 352,248 358,188 416,240" fill="none" stroke="var(--svg-red)" stroke-width="2.4"/>
      <circle cx="220" cy="212" r="3.5" fill="var(--svg-blue)"/>
      ${S.tx(236, 203, t("最高點 v=0", "Max height"), { a: "start", s: 9.5, c: "var(--svg-blue)" })}
      ${S.tx(170, 283, t("觸地反彈", "Bounce 1"), { s: 9.5, c: "var(--svg-muted)" })}
      ${S.tx(274, 283, t("反彈 2", "Bounce 2"), { s: 9.5, c: "var(--svg-muted)" })}
    `),

    /* 6. Book 2: Inclined Plane FBD & Friction */
    "diag-inclined-fbd": (t) => svgWrap("diag-inclined-fbd", ++uidCounter, 560, 270, (p) => `
      <!-- Left: Inclined Plane -->
      <polygon points="36,226 276,226 276,92" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.8"/>
      ${S.tx(78, 218, "θ", { s: 12, b: true })}
      <!-- Block centered roughly at (172, 150) tilted -29.2 deg -->
      <g transform="translate(172,150) rotate(-29.2)">
        <rect x="-24" y="-32" width="48" height="32" rx="3" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)" stroke-width="2"/>
        <!-- Normal Reaction R -->
        <line x1="0" y1="-16" x2="0" y2="-84" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
        <!-- Friction f up slope -->
        <line x1="0" y1="-16" x2="66" y2="-16" stroke="var(--svg-purple)" stroke-width="2.4" marker-end="url(#${p}-purple)"/>
        <!-- Dashed components of mg -->
        <line x1="0" y1="-16" x2="0" y2="54" stroke="var(--svg-blue)" stroke-width="1.6" stroke-dasharray="4,3" marker-end="url(#${p}-blue)"/>
        <line x1="0" y1="-16" x2="-52" y2="-16" stroke="var(--svg-blue)" stroke-width="1.6" stroke-dasharray="4,3" marker-end="url(#${p}-blue)"/>
      </g>
      <!-- True vertical Weight mg from (164, 136) straight down -->
      <line x1="164" y1="136" x2="164" y2="220" stroke="var(--svg-red)" stroke-width="2.6" marker-end="url(#${p}-red)"/>
      ${S.tx(128, 72, "R = mg cosθ", { s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(242, 92, t("摩擦力 f", "Friction f"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      ${S.tx(102, 156, "mg sinθ", { s: 10, c: "var(--svg-blue)" })}
      ${S.tx(212, 204, "mg cosθ", { s: 10, c: "var(--svg-blue)" })}
      ${S.tx(152, 218, "mg", { a: "end", s: 11.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(156, 252, t("實線=真實外力  虛線=重力分力", "Solid = Real forces | Dashed = Components"), { s: 9.8, c: "var(--svg-muted)" })}

      <!-- Right: Static vs Kinetic Friction Graph -->
      ${S.axis(p, 326, 224, 536, 36, t("外推力 F", "Applied F"), t("摩擦力 f", "Friction f"))}
      <line x1="326" y1="224" x2="416" y2="84" stroke="var(--svg-blue)" stroke-width="2.5"/>
      <line x1="416" y1="84" x2="424" y2="114" stroke="var(--svg-red)" stroke-width="2.2"/>
      <line x1="424" y1="114" x2="526" y2="114" stroke="var(--svg-green)" stroke-width="2.6"/>
      <line x1="416" y1="84" x2="416" y2="224" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(364, 130, t("靜止", "At rest"), { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(364, 144, "fs = F", { s: 10, c: "var(--svg-blue)" })}
      ${S.tx(416, 74, "fs,max", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(478, 102, t("滑動: fk 恆定", "Sliding: fk const"), { s: 10, b: true, c: "var(--svg-green)" })}
      ${S.tx(434, 248, t("靜摩擦力與動摩擦力變化", "Static vs Kinetic Friction"), { s: 10.2, b: true })}
    `),

    /* 7. Book 2: Projectile Motion */
    "diag-projectile": (t) => svgWrap("diag-projectile", ++uidCounter, 560, 265, (p) => `
      ${S.axis(p, 48, 226, 526, 24, "x", "y")}
      <!-- Ideal parabola -->
      <path d="M 48,226 Q 268,-46 488,226" fill="none" stroke="var(--svg-blue)" stroke-width="2.8"/>
      <!-- Air resistance asymmetric curve -->
      <path d="M 48,226 C 165,85 268,94 348,226" fill="none" stroke="var(--svg-red)" stroke-width="2" stroke-dasharray="6,4"/>
      <!-- Launch vector -->
      <line x1="48" y1="226" x2="114" y2="144" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      ${S.tx(86, 152, "u", { s: 12, b: true, c: "var(--svg-amber)" })}
      ${S.tx(78, 218, "θ", { s: 11, b: true })}
      <!-- Apex point (268, 90) -->
      <circle cx="268" cy="90" r="4.5" fill="var(--svg-blue)"/>
      <line x1="268" y1="90" x2="328" y2="90" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      <line x1="268" y1="90" x2="268" y2="132" stroke="var(--svg-red)" stroke-width="2" marker-end="url(#${p}-red)"/>
      ${S.tx(268, 60, t("最高點: vy = 0, vx = u cosθ", "Apex: vy=0, vx=u cosθ"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(268, 76, "H = u² sin²θ / (2g)", { s: 10, c: "var(--svg-muted)" })}
      ${S.tx(292, 128, "a = g ↓", { a: "start", s: 10, b: true, c: "var(--svg-red)" })}
      <!-- Air resistance label -->
      ${S.tx(332, 168, t("有空氣阻力 (不對稱)", "With air drag (asymmetric)"), { a: "start", s: 10, c: "var(--svg-red)" })}
      <!-- Range bracket -->
      <line x1="48" y1="242" x2="488" y2="242" stroke="var(--svg-axis)" stroke-width="1.2" marker-start="url(#${p}-ink)" marker-end="url(#${p}-ink)"/>
      ${S.tx(268, 258, t("水平射程 R = u² sin2θ / g（θ=45° 最大）", "Range R = u² sin2θ / g (Max at θ=45°)"), { s: 10.5, b: true })}
    `),

    /* 8. Book 2: Circular Motion */
    "diag-circular-motion": (t) => svgWrap("diag-circular-motion", ++uidCounter, 560, 265, (p) => `
      <!-- Left: Banked Road -->
      <rect x="14" y="12" width="260" height="240" rx="8" fill="none" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(144, 32, t("傾斜彎道 (無側面摩擦)", "Banked Road (No Friction)"), { s: 11.5, b: true, c: "var(--svg-blue)" })}
      <polygon points="36,210 250,210 250,132" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.6"/>
      ${S.tx(86, 203, "θ", { s: 11, b: true })}
      <g transform="translate(154,164) rotate(-20)">
        <rect x="-24" y="-22" width="48" height="22" rx="4" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)" stroke-width="2"/>
        <line x1="0" y1="-11" x2="0" y2="-92" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      </g>
      <!-- Components of R from (150, 152) -->
      <line x1="150" y1="152" x2="150" y2="76" stroke="var(--svg-green)" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#${p}-green)"/>
      <line x1="150" y1="152" x2="88" y2="152" stroke="var(--svg-blue)" stroke-width="2.2" stroke-dasharray="4,3" marker-end="url(#${p}-blue)"/>
      <line x1="150" y1="152" x2="150" y2="222" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      ${S.tx(114, 72, "R", { s: 11, b: true, c: "var(--svg-green)" })}
      ${S.tx(184, 88, "R cosθ = mg", { s: 9.5, c: "var(--svg-green)" })}
      ${S.tx(78, 142, "R sinθ = mv²/r", { s: 9.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(168, 224, "mg", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(144, 242, "tanθ = v² / (rg)", { s: 11.5, b: true, c: "var(--svg-blue)" })}

      <!-- Right: Conical Pendulum -->
      <rect x="286" y="12" width="260" height="240" rx="8" fill="none" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(416, 32, t("圓錐擺 (Conical Pendulum)", "Conical Pendulum"), { s: 11.5, b: true, c: "var(--svg-purple)" })}
      <line x1="396" y1="48" x2="436" y2="48" stroke="var(--svg-axis)" stroke-width="3"/>
      <line x1="416" y1="48" x2="416" y2="188" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <!-- Horizontal circle -->
      <ellipse cx="416" cy="184" rx="68" ry="18" fill="none" stroke="var(--svg-blue)" stroke-width="1.6" stroke-dasharray="5,3"/>
      <!-- String & Bob -->
      <line x1="416" y1="48" x2="484" y2="184" stroke="var(--svg-axis)" stroke-width="2"/>
      <circle cx="484" cy="184" r="9" fill="var(--svg-purple)"/>
      <!-- Forces on Bob -->
      <line x1="484" y1="184" x2="452" y2="120" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      <line x1="484" y1="184" x2="484" y2="232" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      <line x1="484" y1="184" x2="430" y2="184" stroke="var(--svg-blue)" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#${p}-blue)"/>
      ${S.tx(428, 92, "θ", { s: 11, b: true })}
      ${S.tx(466, 114, "T", { s: 11, b: true, c: "var(--svg-green)" })}
      ${S.tx(502, 224, "mg", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(416, 212, "r = L sinθ", { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(416, 242, "T_p = 2π√(L cosθ / g)", { s: 11, b: true, c: "var(--svg-purple)" })}
    `),

    /* 9. Book 2: F-t Impulse & F-s Work */
    "diag-impulse-work": (t) => svgWrap("diag-impulse-work", ++uidCounter, 560, 250, (p) => `
      <!-- Left: F-t Impulse Cushioning -->
      ${S.axis(p, 44, 206, 264, 30, "t", "F")}
      ${S.tx(154, 20, t("F-t 圖：面積 = 衝量 J = Δp", "F-t Graph: Area = Impulse Δp"), { s: 11, b: true, c: "var(--svg-red)" })}
      <!-- Hard impact (tall narrow) -->
      <path d="M 62,206 Q 90,34 118,206 Z" fill="var(--svg-red)" opacity="0.22" stroke="var(--svg-red)" stroke-width="2.4"/>
      <!-- Soft cushioned (low wide) -->
      <path d="M 62,206 Q 154,116 246,206 Z" fill="var(--svg-green)" opacity="0.22" stroke="var(--svg-green)" stroke-width="2.4"/>
      ${S.tx(114, 58, t("硬地 (Δt 短, F 极大)", "Hard (short Δt, huge F)"), { a: "start", s: 9.8, b: true, c: "var(--svg-red)" })}
      ${S.tx(198, 146, t("緩衝墊 (Δt 長, F 小)", "Cushion (long Δt, low F)"), { s: 9.8, b: true, c: "var(--svg-green)" })}
      ${S.tx(154, 236, t("兩曲線面積相同（Δp 相同）", "Equal Areas (Same Δp)"), { s: 10, b: true })}

      <!-- Right: F-s Work Done -->
      ${S.axis(p, 318, 206, 536, 30, "s", "F")}
      ${S.tx(428, 20, t("F-s 圖：面積 = 作功 W", "F-s Graph: Area = Work W"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <polygon points="318,206 318,144 432,72 512,72 512,206" fill="var(--svg-fill-soft)"/>
      <polyline points="318,144 432,72 512,72" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
      <line x1="512" y1="72" x2="512" y2="206" stroke="var(--svg-blue)" stroke-dasharray="4,3"/>
      ${S.tx(426, 152, t("面積 = W = ΔEK", "Area = W = ΔEK"), { s: 11, b: true, c: "var(--svg-blue)" })}
      ${S.tx(426, 236, t("適用於恆力及變力（如彈簧）", "Valid for constant & varying forces"), { s: 10, c: "var(--svg-muted)" })}
    `),

    /* 10. Book 2: Gravitation g-r & Orbit */
    "diag-gravitation": (t) => svgWrap("diag-gravitation", ++uidCounter, 560, 255, (p) => `
      <!-- Left: g vs r -->
      ${S.axis(p, 48, 212, 276, 28, "r", "g")}
      ${S.tx(160, 18, t("引力場強度 g = GM / r²", "Field Strength g = GM / r²"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <line x1="100" y1="54" x2="100" y2="212" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="48" y1="54" x2="100" y2="54" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="152" y1="172" x2="152" y2="212" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="48" y1="172" x2="152" y2="172" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <path d="M 100,54 C 118,128 138,162 152,172 C 186,192 224,200 264,204" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
      <circle cx="100" cy="54" r="4" fill="var(--svg-red)"/>
      <circle cx="152" cy="172" r="4" fill="var(--svg-red)"/>
      ${S.tx(42, 58, "g₀", { a: "end", s: 10.5, b: true })}
      ${S.tx(42, 176, "¼g₀", { a: "end", s: 10, b: true })}
      ${S.tx(100, 228, "R", { s: 10.5, b: true })}
      ${S.tx(152, 228, "2R", { s: 10.5, b: true })}
      ${S.tx(204, 228, "3R", { s: 10.5 })}
      ${S.tx(198, 128, "g ∝ 1/r²", { s: 11.5, b: true, c: "var(--svg-blue)" })}

      <!-- Right: Circular Orbit -->
      <circle cx="424" cy="130" r="84" fill="none" stroke="var(--svg-purple)" stroke-width="1.8" stroke-dasharray="5,4"/>
      <circle cx="424" cy="130" r="34" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="2"/>
      ${S.tx(424, 134, t("行星 M", "Planet M"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <!-- Satellite -->
      <circle cx="496" cy="86" r="7" fill="var(--svg-amber)"/>
      <line x1="496" y1="86" x2="452" y2="113" stroke="var(--svg-red)" stroke-width="2.2" marker-end="url(#${p}-red)"/>
      <line x1="496" y1="86" x2="466" y2="38" stroke="var(--svg-green)" stroke-width="2.2" marker-end="url(#${p}-green)"/>
      ${S.tx(466, 118, "F = GMm/r²", { s: 9.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(464, 34, "v = √(GM/r)", { s: 10, b: true, c: "var(--svg-green)" })}
      ${S.tx(424, 236, "T² = (4π² / GM) r³", { s: 11, b: true, c: "var(--svg-purple)" })}
    `),

    /* 11. Book 3A: Wave y-x & y-t */
    "diag-wave-graphs": (t) => svgWrap("diag-wave-graphs", ++uidCounter, 560, 260, (p) => `
      <!-- Left: y-x snapshot -->
      <line x1="36" y1="132" x2="274" y2="132" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="44" y1="216" x2="44" y2="42" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(272, 148, "x", { a: "end", s: 11, b: true })}
      ${S.tx(50, 50, "y", { a: "start", s: 11, b: true })}
      ${S.tx(156, 22, t("y-x 快照（波向右傳播 →）", "y-x Snapshot (travelling →)"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Solid wave & Shifted dashed wave -->
      <path d="${S.sinePath(44, 132, 212, 54, 1.5, 0)}" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
      <path d="${S.sinePath(44, 132, 212, 54, 1.5, -0.35)}" fill="none" stroke="var(--svg-red)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <!-- Particle P at x = 44 + 212/3 = 114.7 -->
      <circle cx="115" cy="132" r="4.5" fill="var(--svg-red)"/>
      <line x1="115" y1="126" x2="115" y2="94" stroke="var(--svg-green)" stroke-width="2.2" marker-end="url(#${p}-green)"/>
      ${S.tx(115, 150, "P (↑)", { s: 10.5, b: true, c: "var(--svg-green)" })}
      <!-- Wavelength bracket -->
      <line x1="79" y1="68" x2="220" y2="68" stroke="var(--svg-purple)" stroke-width="1.5" marker-start="url(#${p}-purple)" marker-end="url(#${p}-purple)"/>
      ${S.tx(150, 62, "λ", { s: 12, b: true, c: "var(--svg-purple)" })}
      ${S.tx(154, 238, t("虛線=下一瞬位置 → 判質點運動方向", "Dashed = next instant → particle velocity"), { s: 9.8, c: "var(--svg-muted)" })}

      <!-- Right: y-t of Particle P -->
      <line x1="308" y1="132" x2="544" y2="132" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="316" y1="216" x2="316" y2="42" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(542, 148, "t", { a: "end", s: 11, b: true })}
      ${S.tx(322, 50, "y", { a: "start", s: 11, b: true })}
      ${S.tx(430, 22, t("質點 P 之 y-t 振動圖", "y-t Graph of Particle P"), { s: 11, b: true, c: "var(--svg-green)" })}
      <path d="${S.sinePath(316, 132, 212, 54, 1.5, 0)}" fill="none" stroke="var(--svg-green)" stroke-width="2.6"/>
      <!-- Period bracket -->
      <line x1="351" y1="68" x2="492" y2="68" stroke="var(--svg-amber)" stroke-width="1.5" marker-start="url(#${p}-amber)" marker-end="url(#${p}-amber)"/>
      ${S.tx(422, 62, "T = 1/f", { s: 11.5, b: true, c: "var(--svg-amber)" })}
      <!-- Amplitude -->
      <line x1="351" y1="132" x2="351" y2="78" stroke="var(--svg-red)" stroke-width="1.5" marker-end="url(#${p}-red)"/>
      ${S.tx(361, 108, "A", { a: "start", s: 11, b: true, c: "var(--svg-red)" })}
      ${S.tx(428, 238, "v = fλ = λ / T", { s: 11, b: true })}
    `),

    /* 12. Book 3A: TIR & Optical Fibre */
    "diag-tir-refraction": (t) => svgWrap("diag-tir-refraction", ++uidCounter, 560, 260, (p) => `
      <!-- Left: 3 regimes -->
      <rect x="20" y="128" width="290" height="114" fill="var(--svg-fill-soft)"/>
      <line x1="20" y1="128" x2="310" y2="128" stroke="var(--svg-axis)" stroke-width="2"/>
      ${S.tx(28, 118, t("光疏 (空氣 n₂=1)", "Air (n₂=1)"), { a: "start", s: 10, c: "var(--svg-muted)" })}
      ${S.tx(28, 144, t("光密 (玻璃 n₁=1.5)", "Glass (n₁=1.5)"), { a: "start", s: 10, b: true, c: "var(--svg-blue)" })}
      <!-- Normal 1 (theta < C) -->
      <line x1="86" y1="54" x2="86" y2="226" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="56" y1="216" x2="86" y2="128" stroke="var(--svg-blue)" stroke-width="2.2" marker-end="url(#${p}-blue)"/>
      <line x1="86" y1="128" x2="132" y2="64" stroke="var(--svg-blue)" stroke-width="2.2" marker-end="url(#${p}-blue)"/>
      ${S.tx(86, 46, "θ < C", { s: 10, b: true })}
      <!-- Normal 2 (theta = C) -->
      <line x1="176" y1="54" x2="176" y2="226" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="126" y1="216" x2="176" y2="128" stroke="var(--svg-amber)" stroke-width="2.2" marker-end="url(#${p}-amber)"/>
      <line x1="176" y1="128" x2="230" y2="128" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      ${S.tx(176, 46, "θ = C (90°)", { s: 10, b: true, c: "var(--svg-amber)" })}
      <!-- Normal 3 (theta > C, TIR) -->
      <line x1="258" y1="54" x2="258" y2="226" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      <line x1="202" y1="212" x2="258" y2="128" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      <line x1="258" y1="128" x2="306" y2="200" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      ${S.tx(264, 46, t("θ > C 全內反射", "θ > C (TIR)"), { s: 10, b: true, c: "var(--svg-red)" })}

      <!-- Right: Optical Fibre -->
      <rect x="334" y="24" width="210" height="218" rx="8" fill="none" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
      ${S.tx(439, 46, t("光纖傳導原理", "Optical Fibre"), { s: 11.5, b: true, c: "var(--svg-purple)" })}
      <!-- Cladding & Core -->
      <rect x="352" y="88" width="174" height="72" rx="6" fill="var(--svg-grid)" opacity="0.6"/>
      <rect x="352" y="102" width="174" height="44" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.4"/>
      <polyline points="346,136 382,102 426,146 470,102 514,146 534,126" fill="none" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      ${S.tx(439, 80, t("外包層 Cladding (低 n)", "Cladding (low n)"), { s: 9.8, c: "var(--svg-muted)" })}
      ${S.tx(439, 178, t("高折射率纖芯 Core (n₁ > n₂)", "High-n Core (n₁ > n₂)"), { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(439, 206, "sin C = n₂ / n₁", { s: 11.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(439, 226, t("每次撞擊均滿足 θ > C", "Every bounce satisfies θ > C"), { s: 9.8, c: "var(--svg-green)" })}
    `),

    /* 13. Book 3A: Convex & Concave Lenses */
    "diag-lenses-rays": (t) => svgWrap("diag-lenses-rays", ++uidCounter, 560, 285, (p) => `
      <!-- Top Left: Convex Real Image (u > f) -->
      ${S.tx(140, 18, t("凸透鏡 (u > 2f 倒立實像)", "Convex Lens (Real Inverted)"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <line x1="16" y1="82" x2="268" y2="82" stroke="var(--svg-axis)" stroke-width="1.2"/>
      <!-- Convex symbol -->
      <line x1="142" y1="30" x2="142" y2="134" stroke="var(--svg-blue)" stroke-width="2.2" marker-start="url(#${p}-blue)" marker-end="url(#${p}-blue)"/>
      <circle cx="96" cy="82" r="2.6" fill="var(--svg-axis)"/>${S.tx(96, 95, "F", { s: 9.5 })}
      <circle cx="188" cy="82" r="2.6" fill="var(--svg-axis)"/>${S.tx(188, 95, "F'", { s: 9.5 })}
      <!-- Object & Image -->
      <line x1="44" y1="82" x2="44" y2="44" stroke="var(--svg-ink)" stroke-width="2.6" marker-end="url(#${p}-ink)"/>
      <line x1="230" y1="82" x2="230" y2="117" stroke="var(--svg-red)" stroke-width="2.6" marker-end="url(#${p}-red)"/>
      <!-- Rays -->
      <polyline points="44,44 142,44 230,117" fill="none" stroke="var(--svg-green)" stroke-width="1.6"/>
      <line x1="44" y1="44" x2="230" y2="117" stroke="var(--svg-amber)" stroke-width="1.6"/>

      <!-- Top Right: Convex Magnifying Glass (u < f) -->
      ${S.tx(420, 18, t("凸透鏡放大鏡 (u < f 正立虛像)", "Convex Magnifier (u < f, Virtual)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <line x1="292" y1="96" x2="544" y2="96" stroke="var(--svg-axis)" stroke-width="1.2"/>
      <line x1="436" y1="34" x2="436" y2="136" stroke="var(--svg-purple)" stroke-width="2.2" marker-start="url(#${p}-purple)" marker-end="url(#${p}-purple)"/>
      <circle cx="376" cy="96" r="2.6" fill="var(--svg-axis)"/>${S.tx(376, 109, "F", { s: 9.5 })}
      <circle cx="496" cy="96" r="2.6" fill="var(--svg-axis)"/>${S.tx(496, 109, "F'", { s: 9.5 })}
      <!-- Object inside F -->
      <line x1="400" y1="96" x2="400" y2="68" stroke="var(--svg-ink)" stroke-width="2.5" marker-end="url(#${p}-ink)"/>
      <!-- Virtual magnified image (dashed) -->
      <line x1="346" y1="96" x2="346" y2="26" stroke="var(--svg-red)" stroke-width="2.4" stroke-dasharray="4,2" marker-end="url(#${p}-red)"/>
      <polyline points="400,68 436,68 524,109" fill="none" stroke="var(--svg-green)" stroke-width="1.5"/>
      <line x1="436" y1="68" x2="346" y2="26" stroke="var(--svg-green)" stroke-width="1.3" stroke-dasharray="4,3"/>
      <line x1="346" y1="26" x2="400" y2="68" stroke="var(--svg-amber)" stroke-width="1.3" stroke-dasharray="4,3"/>
      <line x1="400" y1="68" x2="506" y2="140" stroke="var(--svg-amber)" stroke-width="1.5"/>

      <!-- Bottom Left: Concave Lens -->
      ${S.tx(140, 162, t("凹透鏡（永遠正立縮小虛像）", "Concave Lens (Always Virtual Diminished)"), { s: 10.5, b: true, c: "var(--svg-cyan)" })}
      <line x1="16" y1="226" x2="268" y2="226" stroke="var(--svg-axis)" stroke-width="1.2"/>
      <path d="M 142,174 L 142,272 M 136,180 L 142,174 L 148,180 M 136,266 L 142,272 L 148,266" fill="none" stroke="var(--svg-cyan)" stroke-width="2.2"/>
      <circle cx="88" cy="226" r="2.6" fill="var(--svg-axis)"/>${S.tx(88, 240, "F", { s: 9.5 })}
      <line x1="48" y1="226" x2="48" y2="184" stroke="var(--svg-ink)" stroke-width="2.5" marker-end="url(#${p}-ink)"/>
      <!-- Virtual diminished image -->
      <line x1="108" y1="226" x2="108" y2="210" stroke="var(--svg-red)" stroke-width="2.4" stroke-dasharray="3,2" marker-end="url(#${p}-red)"/>
      <polyline points="48,184 142,184 220,148" fill="none" stroke="var(--svg-green)" stroke-width="1.5"/>
      <line x1="88" y1="226" x2="142" y2="184" stroke="var(--svg-green)" stroke-width="1.3" stroke-dasharray="4,3"/>
      <line x1="48" y1="184" x2="230" y2="265" stroke="var(--svg-amber)" stroke-width="1.5"/>

      <!-- Bottom Right: 1/v vs 1/u graph -->
      ${S.axis(p, 336, 266, 514, 166, "1/u", "1/v")}
      <line x1="336" y1="188" x2="466" y2="266" stroke="var(--svg-blue)" stroke-width="2.5"/>
      ${S.tx(328, 192, "1/f", { a: "end", s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(466, 279, "1/f", { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(456, 204, t("斜率 = −1", "Slope = −1"), { s: 10.5, b: true, c: "var(--svg-red)" })}
    `),

    /* 14. Book 3A: Ripple Tank */
    "diag-ripple-tank": (t) => svgWrap("diag-ripple-tank", ++uidCounter, 560, 250, (p) => `
      <!-- Panel 1: Refraction deep->shallow -->
      <rect x="14" y="14" width="168" height="222" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(98, 32, t("折射 (深→淺水)", "Refraction (Deep→Shallow)"), { s: 10.2, b: true, c: "var(--svg-blue)" })}
      <polygon points="14,132 182,110 182,236 14,236" fill="var(--svg-fill-soft)"/>
      <line x1="14" y1="132" x2="182" y2="110" stroke="var(--svg-axis)" stroke-width="1.6"/>
      ${[50,74,98].map(y => `<line x1="32" y1="${y}" x2="160" y2="${y}" stroke="var(--svg-blue)" stroke-width="2"/>`).join("")}
      ${[146,162,178,194,210].map(y => `<line x1="32" y1="${y}" x2="160" y2="${y-16}" stroke="var(--svg-cyan)" stroke-width="2"/>`).join("")}
      ${S.tx(98, 228, t("v↓, λ↓, f 不變", "v↓, λ↓, f const"), { s: 9.8, b: true, c: "var(--svg-blue)" })}

      <!-- Panel 2: Diffraction -->
      <rect x="196" y="14" width="168" height="222" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(280, 32, t("狹縫繞射 (a ≈ λ)", "Diffraction (a ≈ λ)"), { s: 10.2, b: true, c: "var(--svg-purple)" })}
      ${[54,72,90,108].map(y => `<line x1="216" y1="${y}" x2="344" y2="${y}" stroke="var(--svg-purple)" stroke-width="2"/>`).join("")}
      <line x1="208" y1="124" x2="268" y2="124" stroke="var(--svg-axis)" stroke-width="5"/>
      <line x1="292" y1="124" x2="352" y2="124" stroke="var(--svg-axis)" stroke-width="5"/>
      ${[18,36,54,72].map(r => `<path d="M ${280-r},126 A ${r},${r} 0 0,0 ${280+r},126" fill="none" stroke="var(--svg-purple)" stroke-width="1.8"/>`).join("")}
      ${S.tx(280, 228, t("縫越窄/λ 越長越明顯", "Narrower slit / longer λ"), { s: 9.5, c: "var(--svg-muted)" })}

      <!-- Panel 3: Two-Source Interference -->
      <rect x="378" y="14" width="168" height="222" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(462, 32, t("雙源干涉 (腹線/節線)", "Interference (A & N lines)"), { s: 10.2, b: true, c: "var(--svg-green)" })}
      <circle cx="436" cy="204" r="4.5" fill="var(--svg-red)"/>
      <circle cx="488" cy="204" r="4.5" fill="var(--svg-red)"/>
      ${S.tx(436, 220, "S₁", { s: 9.5, b: true })}${S.tx(488, 220, "S₂", { s: 9.5, b: true })}
      <!-- Central antinodal + nodal + 1st antinodal -->
      <line x1="462" y1="204" x2="462" y2="48" stroke="var(--svg-green)" stroke-width="2.4"/>
      <path d="M 454,198 Q 444,126 424,52" fill="none" stroke="var(--svg-red)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <path d="M 470,198 Q 480,126 500,52" fill="none" stroke="var(--svg-red)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <path d="M 446,196 Q 422,134 390,68" fill="none" stroke="var(--svg-green)" stroke-width="2"/>
      <path d="M 478,196 Q 502,134 534,68" fill="none" stroke="var(--svg-green)" stroke-width="2"/>
      ${S.tx(462, 44, "n=0 (A)", { s: 9, b: true, c: "var(--svg-green)" })}
      ${S.tx(420, 48, "N", { s: 9.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(504, 48, "N", { s: 9.5, b: true, c: "var(--svg-red)" })}
    `),

    /* 15. Book 3B: Young's Double Slit */
    "diag-young-double-slit": (t) => svgWrap("diag-young-double-slit", ++uidCounter, 560, 260, (p) => `
      <!-- Laser source -->
      <rect x="20" y="110" width="66" height="32" rx="4" fill="var(--svg-fill-warm)" stroke="var(--svg-red)" stroke-width="1.8"/>
      ${S.tx(53, 130, t("單色雷射", "Laser"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      <line x1="86" y1="126" x2="154" y2="126" stroke="var(--svg-red)" stroke-width="2.2" marker-end="url(#${p}-red)"/>
      <!-- Double slit plate -->
      <line x1="164" y1="36" x2="164" y2="104" stroke="var(--svg-axis)" stroke-width="4.5"/>
      <line x1="164" y1="112" x2="164" y2="140" stroke="var(--svg-axis)" stroke-width="4.5"/>
      <line x1="164" y1="148" x2="164" y2="216" stroke="var(--svg-axis)" stroke-width="4.5"/>
      ${S.tx(152, 129, "a", { a: "end", s: 11.5, b: true, c: "var(--svg-blue)" })}
      <!-- Rays to screen P -->
      <line x1="164" y1="108" x2="404" y2="76" stroke="var(--svg-red)" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="164" y1="144" x2="404" y2="76" stroke="var(--svg-red)" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="164" y1="126" x2="404" y2="126" stroke="var(--svg-grid)" stroke-dasharray="3,3"/>
      <!-- Distance D -->
      <line x1="164" y1="230" x2="404" y2="230" stroke="var(--svg-axis)" stroke-width="1.4" marker-start="url(#${p}-ink)" marker-end="url(#${p}-ink)"/>
      ${S.tx(284, 248, t("D (D ≫ a)   |   Δy = λD / a", "D (D ≫ a)   |   Δy = λD / a"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Screen & Intensity Profile -->
      <line x1="404" y1="30" x2="404" y2="222" stroke="var(--svg-axis)" stroke-width="3"/>
      <path d="M 404,44 Q 442,52 404,60 Q 456,76 404,92 Q 478,126 404,160 Q 456,176 404,192 Q 442,200 404,208" fill="var(--svg-red)" opacity="0.22" stroke="var(--svg-red)" stroke-width="2.2"/>
      <!-- Δy marker -->
      <line x1="486" y1="76" x2="486" y2="126" stroke="var(--svg-blue)" stroke-width="1.6" marker-start="url(#${p}-blue)" marker-end="url(#${p}-blue)"/>
      ${S.tx(502, 105, "Δy", { a: "start", s: 12, b: true, c: "var(--svg-blue)" })}
      ${S.tx(474, 28, t("光強分佈 (等距明暗紋)", "Equal-spaced Intensity"), { s: 10, b: true })}
    `),

    /* 16. Book 3B: Diffraction Grating */
    "diag-diffraction-grating": (t) => svgWrap("diag-diffraction-grating", ++uidCounter, 560, 260, (p) => `
      <!-- Incoming white light -->
      <line x1="26" y1="130" x2="124" y2="130" stroke="var(--svg-axis)" stroke-width="3" marker-end="url(#${p}-ink)"/>
      ${S.tx(74, 118, t("白光 / 單色光", "White / Mono Light"), { s: 10, b: true })}
      <!-- Grating -->
      <line x1="134" y1="68" x2="134" y2="192" stroke="var(--svg-purple)" stroke-width="4" stroke-dasharray="4,3"/>
      ${S.tx(134, 212, t("光柵間距 d", "Grating d"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <!-- Central 0th order white -->
      <line x1="134" y1="130" x2="430" y2="130" stroke="var(--svg-axis)" stroke-width="2.2"/>
      <!-- 1st order violet (smaller angle) & red (larger angle) -->
      <line x1="134" y1="130" x2="430" y2="86" stroke="var(--svg-purple)" stroke-width="2"/>
      <line x1="134" y1="130" x2="430" y2="48" stroke="var(--svg-red)" stroke-width="2"/>
      <line x1="134" y1="130" x2="430" y2="174" stroke="var(--svg-purple)" stroke-width="2"/>
      <line x1="134" y1="130" x2="430" y2="212" stroke="var(--svg-red)" stroke-width="2"/>
      <!-- Angle theta arc -->
      <path d="M 216,130 A 82,82 0 0,0 212,108" fill="none" stroke="var(--svg-red)" stroke-width="1.6"/>
      ${S.tx(230, 118, "θ", { s: 11, b: true, c: "var(--svg-red)" })}
      <!-- Screen -->
      <line x1="430" y1="24" x2="430" y2="236" stroke="var(--svg-axis)" stroke-width="3"/>
      <!-- Spectrum bands on screen -->
      <rect x="433" y="48" width="12" height="38" fill="url(#${p}-spec1)"/>
      <defs>
        <linearGradient id="${p}-spec1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ef4444"/><stop offset="50%" stop-color="#22c55e"/><stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
        <linearGradient id="${p}-spec2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7c3aed"/><stop offset="50%" stop-color="#22c55e"/><stop offset="100%" stop-color="#ef4444"/>
        </linearGradient>
      </defs>
      <rect x="433" y="174" width="12" height="38" fill="url(#${p}-spec2)"/>
      <circle cx="439" cy="130" r="5" fill="var(--svg-bg)" stroke="var(--svg-axis)" stroke-width="2"/>
      ${S.tx(454, 134, t("n=0 中央白線", "n=0 White"), { a: "start", s: 10, b: true })}
      ${S.tx(454, 54, t("紅光 (θ 最大)", "Red (max θ)"), { a: "start", s: 9.8, b: true, c: "var(--svg-red)" })}
      ${S.tx(454, 90, t("紫光 (θ 較小)", "Violet (min θ)"), { a: "start", s: 9.8, b: true, c: "var(--svg-purple)" })}
      ${S.tx(280, 246, "d sinθ = nλ   |   y_n = D tanθ", { s: 11.5, b: true, c: "var(--svg-blue)" })}
    `),

    /* 17. Book 3B: Stationary Wave Harmonics */
    "diag-stationary-wave": (t) => svgWrap("diag-stationary-wave", ++uidCounter, 560, 275, () => `
      ${[
        [1, 64, t("基頻 f₁ (L = ½λ)", "1st Harmonic f₁ (L = ½λ)"), "var(--svg-blue)"],
        [2, 146, t("第 2 諧波 2f₁ (L = λ)", "2nd Harmonic 2f₁ (L = λ)"), "var(--svg-green)"],
        [3, 226, t("第 3 諧波 3f₁ (L = 3/2 λ)", "3rd Harmonic 3f₁ (L = 3/2 λ)"), "var(--svg-purple)"]
      ].map(([n, y, title, col]) => {
        const x0 = 54, w = 310, amp = 24;
        return `
          <line x1="${x0}" y1="${y}" x2="${x0+w}" y2="${y}" stroke="var(--svg-grid)" stroke-dasharray="4,3"/>
          <path d="${S.sinePath(x0, y, w, amp, n/2, 0)}" fill="none" stroke="${col}" stroke-width="2.4"/>
          <path d="${S.sinePath(x0, y, w, -amp, n/2, 0)}" fill="none" stroke="${col}" stroke-width="1.6" stroke-dasharray="5,3"/>
          ${Array.from({length: n+1}, (_, i) => {
            const nx = x0 + (w / n) * i;
            return `<circle cx="${nx}" cy="${y}" r="4" fill="var(--svg-red)"/>${S.tx(nx, y + 16, "N", { s: 9.5, b: true, c: "var(--svg-red)" })}`;
          }).join("")}
          ${Array.from({length: n}, (_, i) => {
            const ax = x0 + (w / n) * (i + 0.5);
            return S.tx(ax, y - amp - 5, "A", { s: 9.5, b: true, c: col });
          }).join("")}
          ${S.tx(382, y + 4, title, { a: "start", s: 10.5, b: true, c: col })}
        `;
      }).join("")}
      ${S.tx(280, 266, t("同波環質點同相 · 相鄰波環質點反相 · 相鄰 N–N = λ/2", "Same loop = in phase · Adjacent loops = antiphase · N–N = λ/2"), { s: 10, b: true, c: "var(--svg-muted)" })}
    `),

    /* 18. Book 3B: Longitudinal Sound & CRO */
    "diag-sound-cro": (t) => svgWrap("diag-sound-cro", ++uidCounter, 560, 275, (p) => `
      <!-- Top: Air particles C & R + s-x aligned -->
      ${S.tx(280, 18, t("縱波粒子疏密部 (C/R) 與位移圖 s-x 對應關係", "Longitudinal C / R Mapped to Displacement-Distance (s-x) Graph"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Particle dots -->
      ${[58,78,94,106,114,120,126,134,146,162,184,210,236,258,274,286,294,300,306,314,326,342,364,390,416,438,454,466,474,480,486,494].map(x =>
        `<circle cx="${x}" cy="38" r="2.8" fill="var(--svg-axis)"/>`
      ).join("")}
      ${S.tx(120, 56, "C", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(210, 56, "R", { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(300, 56, "C", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(390, 56, "R", { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(480, 56, "C", { s: 10.5, b: true, c: "var(--svg-red)" })}
      <!-- s-x graph aligned so C = negative slope crossing (120, 300, 480) -->
      <line x1="54" y1="106" x2="520" y2="106" stroke="var(--svg-axis)" stroke-width="1.4" marker-end="url(#${p}-ink)"/>
      <line x1="60" y1="146" x2="60" y2="66" stroke="var(--svg-axis)" stroke-width="1.4" marker-end="url(#${p}-ink)"/>
      ${S.tx(518, 120, "x", { a: "end", s: 10, b: true })}
      ${S.tx(48, 76, "+s", { a: "end", s: 9.5, b: true })}
      <path d="${S.sinePath(120, 106, 360, 32, 2, Math.PI)}" fill="none" stroke="var(--svg-blue)" stroke-width="2.4"/>
      <circle cx="120" cy="106" r="4" fill="var(--svg-red)"/>
      <circle cx="210" cy="106" r="4" fill="var(--svg-cyan)"/>
      <circle cx="300" cy="106" r="4" fill="var(--svg-red)"/>
      ${S.tx(300, 148, t("密部 C = 負斜率零點  |  疏部 R = 正斜率零點", "Compression C = neg-slope zero | Rarefaction R = pos-slope zero"), { s: 9.8, b: true, c: "var(--svg-red)" })}

      <!-- Bottom: CRO waveforms -->
      ${[
        [36, t("響度大 (振幅 A↑)", "Louder (A↑)"), S.sinePath(42, 214, 138, 28, 2), "var(--svg-green)"],
        [208, t("音調高 (頻率 f↑)", "Higher Pitch (f↑)"), S.sinePath(214, 214, 138, 16, 4), "var(--svg-amber)"],
        [380, t("不同音色 (波形不同)", "Diff Quality (Waveform)"), "M386,214 L402,192 L416,204 L430,186 L444,236 L458,220 L472,240 L488,192 L502,204 L516,186 L524,214", "var(--svg-purple)"]
      ].map(([x, lbl, d, col]) => `
        <rect x="${x}" y="172" width="150" height="84" rx="6" fill="var(--svg-fill-soft)" stroke="var(--svg-grid)"/>
        <line x1="${x}" y1="214" x2="${x+150}" y2="214" stroke="var(--svg-grid)"/>
        <path d="${d}" fill="none" stroke="${col}" stroke-width="2.2"/>
        ${S.tx(x + 75, 268, lbl, { s: 9.8, b: true, c: col })}
      `).join("")}
    `),

    /* 19. Book 4: Electric Fields */
    "diag-electric-fields": (t) => svgWrap("diag-electric-fields", ++uidCounter, 560, 260, (p) => `
      <!-- 1. Dipole (+ -) -->
      <rect x="12" y="14" width="170" height="232" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(97, 32, t("異性電荷 (偶極子)", "Opposite Charges"), { s: 10.2, b: true, c: "var(--svg-blue)" })}
      <line x1="62" y1="130" x2="130" y2="130" stroke="var(--svg-blue)" stroke-width="1.8" marker-end="url(#${p}-blue)"/>
      <path d="M 56,118 Q 97,56 138,118" fill="none" stroke="var(--svg-blue)" stroke-width="1.6" marker-end="url(#${p}-blue)"/>
      <path d="M 56,142 Q 97,204 138,142" fill="none" stroke="var(--svg-blue)" stroke-width="1.6" marker-end="url(#${p}-blue)"/>
      <path d="M 50,114 Q 97,20 144,114" fill="none" stroke="var(--svg-blue)" stroke-width="1.4" marker-end="url(#${p}-blue)"/>
      <path d="M 50,146 Q 97,240 144,146" fill="none" stroke="var(--svg-blue)" stroke-width="1.4" marker-end="url(#${p}-blue)"/>
      <circle cx="52" cy="130" r="12" fill="var(--svg-red)"/>${S.tx(52, 134, "+", { s: 14, b: true, c: "#fff" })}
      <circle cx="142" cy="130" r="12" fill="var(--svg-blue)"/>${S.tx(142, 134, "−", { s: 14, b: true, c: "#fff" })}

      <!-- 2. Like Charges (+ +) with Neutral Point -->
      <rect x="194" y="14" width="172" height="232" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(280, 32, t("同性電荷與中性點", "Like Charges & Neutral Pt"), { s: 10.2, b: true, c: "var(--svg-red)" })}
      <path d="M 244,118 Q 272,96 272,56" fill="none" stroke="var(--svg-red)" stroke-width="1.6" marker-end="url(#${p}-red)"/>
      <path d="M 244,142 Q 272,164 272,204" fill="none" stroke="var(--svg-red)" stroke-width="1.6" marker-end="url(#${p}-red)"/>
      <path d="M 316,118 Q 288,96 288,56" fill="none" stroke="var(--svg-red)" stroke-width="1.6" marker-end="url(#${p}-red)"/>
      <path d="M 316,142 Q 288,164 288,204" fill="none" stroke="var(--svg-red)" stroke-width="1.6" marker-end="url(#${p}-red)"/>
      <circle cx="280" cy="130" r="4" fill="var(--svg-amber)"/>
      ${S.tx(280, 150, "E = 0", { s: 9.8, b: true, c: "var(--svg-amber)" })}
      <circle cx="236" cy="130" r="12" fill="var(--svg-red)"/>${S.tx(236, 134, "+", { s: 14, b: true, c: "#fff" })}
      <circle cx="324" cy="130" r="12" fill="var(--svg-red)"/>${S.tx(324, 134, "+", { s: 14, b: true, c: "#fff" })}

      <!-- 3. Parallel Plates -->
      <rect x="378" y="14" width="170" height="232" rx="6" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(463, 32, t("平行金屬板勻強電場", "Parallel Plates (Uniform E)"), { s: 10.2, b: true, c: "var(--svg-green)" })}
      <rect x="398" y="64" width="130" height="8" fill="var(--svg-red)"/>
      <rect x="398" y="180" width="130" height="8" fill="var(--svg-blue)"/>
      ${S.tx(463, 58, "+  +  +  +  +  +", { s: 10, b: true, c: "var(--svg-red)" })}
      ${S.tx(463, 202, "−  −  −  −  −  −", { s: 10, b: true, c: "var(--svg-blue)" })}
      ${[416,440,464,488,512].map(x => `<line x1="${x}" y1="74" x2="${x}" y2="176" stroke="var(--svg-green)" stroke-width="1.8" marker-end="url(#${p}-green)"/>`).join("")}
      ${S.tx(463, 228, "E = V / d", { s: 11.5, b: true, c: "var(--svg-green)" })}
    `),

    /* 20. Book 4: I-V Graphs & Internal Resistance */
    "diag-iv-graphs": (t) => svgWrap("diag-iv-graphs", ++uidCounter, 560, 260, (p) => `
      <!-- Left: I-V characteristics -->
      <line x1="42" y1="138" x2="262" y2="138" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="150" y1="226" x2="150" y2="34" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(260, 152, "V", { a: "end", s: 11, b: true })}
      ${S.tx(156, 44, "I", { a: "start", s: 11, b: true })}
      ${S.tx(150, 20, t("元件 I-V 特性曲線", "Component I-V Characteristics"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Ohmic line -->
      <line x1="70" y1="208" x2="230" y2="68" stroke="var(--svg-blue)" stroke-width="2.2"/>
      <!-- Filament lamp S-curve -->
      <path d="M 60,180 Q 112,172 150,138 Q 188,104 244,96" fill="none" stroke="var(--svg-amber)" stroke-width="2.4"/>
      <!-- Diode -->
      <path d="M 62,138 L 178,138 Q 192,138 206,50" fill="none" stroke="var(--svg-red)" stroke-width="2.4"/>
      ${S.tx(212, 48, t("二極管", "Diode"), { a: "start", s: 9.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(236, 70, t("歐姆", "Ohmic"), { a: "start", s: 9.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(224, 114, t("燈泡(R↑)", "Lamp(R↑)"), { s: 9.5, b: true, c: "var(--svg-amber)" })}
      ${S.tx(150, 246, t("任意點電阻 R = V / I", "Resistance at point: R = V / I"), { s: 10, b: true })}

      <!-- Right: V = emf - Ir -->
      ${S.axis(p, 328, 214, 534, 34, "I", "V")}
      ${S.tx(430, 20, t("內電阻圖：V = ℰ − Ir", "Internal Resistance: V = ℰ − Ir"), { s: 11, b: true, c: "var(--svg-purple)" })}
      <line x1="328" y1="68" x2="508" y2="214" stroke="var(--svg-purple)" stroke-width="2.8"/>
      <circle cx="328" cy="68" r="4" fill="var(--svg-red)"/>
      <circle cx="508" cy="214" r="4" fill="var(--svg-green)"/>
      ${S.tx(320, 72, "ℰ", { a: "end", s: 12, b: true, c: "var(--svg-red)" })}
      ${S.tx(508, 232, "ℰ / r", { s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(446, 124, t("斜率 = −r", "Slope = −r"), { s: 11, b: true, c: "var(--svg-purple)" })}
      ${S.tx(430, 248, t("y截距 = 電動勢 ℰ  |  x截距 = 短路電流", "y-int = e.m.f. ℰ | x-int = short-circuit I"), { s: 9.5, c: "var(--svg-muted)" })}
    `),

    /* 21. Book 4: Domestic Ring Main & 3-Pin Plug */
    "diag-domestic-ring": (t) => svgWrap("diag-domestic-ring", ++uidCounter, 560, 265, () => `
      <!-- Left: Ring Main -->
      <rect x="18" y="38" width="76" height="176" rx="6" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.8"/>
      ${S.tx(56, 122, t("配電箱", "Consumer"), { s: 10, b: true })}
      ${S.tx(56, 138, "30 A MCB", { s: 9.5, c: "var(--svg-red)", b: true })}
      <!-- Live Ring (Brown/Amber), Neutral Ring (Blue), Earth Ring (Green) -->
      <rect x="94" y="54" width="218" height="144" rx="14" fill="none" stroke="#b45309" stroke-width="2.4"/>
      <rect x="94" y="68" width="218" height="116" rx="10" fill="none" stroke="var(--svg-blue)" stroke-width="2.2"/>
      <rect x="94" y="82" width="218" height="88" rx="6" fill="none" stroke="var(--svg-green)" stroke-width="2" stroke-dasharray="6,3"/>
      <!-- Sockets -->
      ${[156, 250].map((cx, idx) => `
        <rect x="${cx-24}" y="100" width="48" height="52" rx="6" fill="var(--svg-bg)" stroke="var(--svg-axis)" stroke-width="1.6"/>
        <circle cx="${cx}" cy="114" r="3.5" fill="var(--svg-green)"/>
        <circle cx="${cx-11}" cy="134" r="3.5" fill="var(--svg-blue)"/>
        <circle cx="${cx+11}" cy="134" r="3.5" fill="#b45309"/>
        ${S.tx(cx, 148, t(`插座${idx+1}`, `Socket ${idx+1}`), { s: 8.5, c: "var(--svg-muted)" })}
      `).join("")}
      ${S.tx(200, 24, t("家居環形電路（雙路徑分流）", "Domestic Ring Main (2 Parallel Paths)"), { s: 11, b: true, c: "var(--svg-blue)" })}
      ${S.tx(200, 232, t("棕: 火線 L  ·  藍: 中線 N  ·  黃綠: 地線 E", "Brown: Live · Blue: Neutral · Y/G: Earth"), { s: 9.8, b: true })}

      <!-- Right: 3-Pin Plug -->
      <rect x="342" y="24" width="202" height="222" rx="10" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.6"/>
      ${S.tx(443, 44, t("三腳插頭安全結構", "3-Pin Plug Wiring"), { s: 11, b: true })}
      <!-- Earth Pin (top, longest) -->
      <rect x="435" y="56" width="16" height="32" rx="2" fill="var(--svg-green)"/>
      ${S.tx(460, 74, t("地線 E (最長)", "Earth E"), { a: "start", s: 9.5, b: true, c: "var(--svg-green)" })}
      <!-- Neutral Pin (left) -->
      <rect x="378" y="114" width="24" height="16" rx="2" fill="var(--svg-blue)"/>
      ${S.tx(390, 108, t("中線 N", "Neutral N"), { s: 9.5, b: true, c: "var(--svg-blue)" })}
      <!-- Live Pin + Fuse (right) -->
      <rect x="484" y="114" width="24" height="16" rx="2" fill="#b45309"/>
      <rect x="482" y="138" width="28" height="36" rx="4" fill="var(--svg-bg)" stroke="var(--svg-red)" stroke-width="2"/>
      <line x1="496" y1="138" x2="496" y2="174" stroke="var(--svg-red)" stroke-width="1.6"/>
      ${S.tx(496, 108, t("火線 L", "Live L"), { s: 9.5, b: true, c: "#b45309" })}
      ${S.tx(462, 160, t("保險絲", "Fuse"), { a: "end", s: 10, b: true, c: "var(--svg-red)" })}
      <!-- Cable wires -->
      <path d="M 443,88 L 443,216" fill="none" stroke="var(--svg-green)" stroke-width="2.4" stroke-dasharray="5,3"/>
      <path d="M 390,130 L 390,186 L 436,216" fill="none" stroke="var(--svg-blue)" stroke-width="2.4"/>
      <path d="M 496,174 L 496,192 L 450,216" fill="none" stroke="#b45309" stroke-width="2.4"/>
      <rect x="424" y="212" width="38" height="24" rx="4" fill="var(--svg-axis)"/>
      ${S.tx(443, 228, t("電線夾", "Grip"), { s: 9, c: "#fff", b: true })}
    `),

    /* 22. Book 4: Catapult Field & DC Motor */
    "diag-magnetic-motor": (t) => svgWrap("diag-magnetic-motor", ++uidCounter, 560, 260, (p) => `
      <!-- Left: Catapult Field -->
      <rect x="14" y="14" width="244" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(136, 34, t("彈弓磁場與弗萊明左手定則", "Catapult Field & Fleming's LHR"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <rect x="26" y="76" width="30" height="108" rx="4" fill="var(--svg-red)" opacity="0.85"/>
      ${S.tx(41, 134, "N", { s: 14, b: true, c: "#fff" })}
      <rect x="216" y="76" width="30" height="108" rx="4" fill="var(--svg-blue)" opacity="0.85"/>
      ${S.tx(231, 134, "S", { s: 14, b: true, c: "#fff" })}
      <!-- Bent catapult field lines (stronger below, weaker above -> force UP) -->
      <path d="M 56,96 Q 136,62 216,96" fill="none" stroke="var(--svg-cyan)" stroke-width="1.6" marker-end="url(#${p}-cyan)"/>
      <path d="M 56,124 Q 136,158 216,124" fill="none" stroke="var(--svg-cyan)" stroke-width="1.8" marker-end="url(#${p}-cyan)"/>
      <path d="M 56,144 Q 136,174 216,144" fill="none" stroke="var(--svg-cyan)" stroke-width="1.8" marker-end="url(#${p}-cyan)"/>
      <path d="M 56,164 Q 136,188 216,164" fill="none" stroke="var(--svg-cyan)" stroke-width="1.8" marker-end="url(#${p}-cyan)"/>
      <!-- Wire with current OUT (dot) -->
      <circle cx="136" cy="126" r="11" fill="var(--svg-bg)" stroke="var(--svg-ink)" stroke-width="2"/>
      <circle cx="136" cy="126" r="3.5" fill="var(--svg-ink)"/>
      <!-- Upward force arrow -->
      <line x1="136" y1="112" x2="136" y2="56" stroke="var(--svg-green)" stroke-width="2.8" marker-end="url(#${p}-green)"/>
      ${S.tx(158, 66, t("磁力 F ↑", "Force F ↑"), { a: "start", s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(136, 224, t("下方磁場增強 → 推導線向上", "Stronger below → Pushes wire UP"), { s: 9.8, c: "var(--svg-muted)" })}

      <!-- Right: Simple DC Motor -->
      <rect x="272" y="14" width="274" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(409, 34, t("簡易直流電動機 (DC Motor)", "Simple DC Motor"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <!-- Magnets -->
      <rect x="286" y="76" width="32" height="90" rx="4" fill="var(--svg-red)" opacity="0.85"/>${S.tx(302, 125, "N", { s: 13, b: true, c: "#fff" })}
      <rect x="500" y="76" width="32" height="90" rx="4" fill="var(--svg-blue)" opacity="0.85"/>${S.tx(516, 125, "S", { s: 13, b: true, c: "#fff" })}
      <!-- Tilted coil -->
      <polygon points="348,86 470,86 456,154 362,154" fill="none" stroke="var(--svg-amber)" stroke-width="2.6"/>
      <!-- Forces on sides -->
      <line x1="355" y1="120" x2="355" y2="62" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      <line x1="463" y1="120" x2="463" y2="178" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      ${S.tx(344, 72, "F↑", { a: "end", s: 10, b: true, c: "var(--svg-green)" })}
      ${S.tx(474, 174, "F↓", { a: "start", s: 10, b: true, c: "var(--svg-green)" })}
      <!-- Split-ring commutator -->
      <path d="M 398,176 A 14,14 0 0,0 398,200" fill="none" stroke="var(--svg-purple)" stroke-width="4"/>
      <path d="M 420,176 A 14,14 0 0,1 420,200" fill="none" stroke="var(--svg-purple)" stroke-width="4"/>
      <rect x="374" y="182" width="12" height="12" fill="var(--svg-axis)"/>
      <rect x="432" y="182" width="12" height="12" fill="var(--svg-axis)"/>
      ${S.tx(409, 224, t("分裂環換向器：每半圈反轉電流", "Split-ring commutator reverses I every ½ turn"), { s: 9.8, b: true, c: "var(--svg-purple)" })}
    `),

    /* 23. Book 4: EM Induction Lenz + AC Generator */
    "diag-em-induction": (t) => svgWrap("diag-em-induction", ++uidCounter, 560, 275, (p) => `
      <!-- Top: Lenz's Law -->
      <rect x="16" y="12" width="528" height="106" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(280, 30, t("楞次定律：感應磁極永遠阻礙磁鐵相對運動", "Lenz's Law: Induced Pole Always Opposes Relative Motion"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <!-- Case 1: Push N in -> Repel (N) -->
      <rect x="38" y="54" width="66" height="28" rx="3" fill="var(--svg-fill-warm)" stroke="var(--svg-axis)" stroke-width="1.5"/>
      <rect x="72" y="54" width="32" height="28" fill="var(--svg-red)" opacity="0.85"/>
      ${S.tx(55, 72, "S", { s: 11, b: true })}${S.tx(88, 72, "N", { s: 11, b: true, c: "#fff" })}
      <line x1="108" y1="68" x2="146" y2="68" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      <rect x="156" y="48" width="90" height="40" rx="6" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="2"/>
      ${S.tx(170, 72, "N", { s: 12, b: true, c: "var(--svg-red)" })}${S.tx(232, 72, "S", { s: 12, b: true, c: "var(--svg-blue)" })}
      ${S.tx(148, 106, t("推入 → 感應同名 N 極排斥", "Push in → Induces N (Repels)"), { s: 9.8, b: true, c: "var(--svg-red)" })}

      <!-- Case 2: Pull N out -> Attract (S) -->
      <rect x="304" y="54" width="66" height="28" rx="3" fill="var(--svg-fill-warm)" stroke="var(--svg-axis)" stroke-width="1.5"/>
      <rect x="338" y="54" width="32" height="28" fill="var(--svg-red)" opacity="0.85"/>
      ${S.tx(321, 72, "S", { s: 11, b: true })}${S.tx(354, 72, "N", { s: 11, b: true, c: "#fff" })}
      <line x1="298" y1="68" x2="264" y2="68" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      <rect x="422" y="48" width="90" height="40" rx="6" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="2"/>
      ${S.tx(436, 72, "S", { s: 12, b: true, c: "var(--svg-blue)" })}${S.tx(498, 72, "N", { s: 12, b: true, c: "var(--svg-red)" })}
      ${S.tx(412, 106, t("拉出 → 感應異名 S 極吸引", "Pull out → Induces S (Attracts)"), { s: 9.8, b: true, c: "var(--svg-blue)" })}

      <!-- Bottom: AC Generator e.m.f. vs time -->
      <line x1="48" y1="198" x2="528" y2="198" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="58" y1="258" x2="58" y2="132" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(526, 214, "t", { a: "end", s: 11, b: true })}
      ${S.tx(66, 142, "ε", { a: "start", s: 12, b: true })}
      <path d="${S.sinePath(58, 198, 430, 44, 1, Math.PI/2)}" fill="none" stroke="var(--svg-purple)" stroke-width="2.6"/>
      ${[
        [58, 154, t("平行 B (Φ=0, |ε|最大)", "Parallel (|ε| max)"), "var(--svg-red)"],
        [165, 198, t("垂直 B (ε=0)", "Perp (ε=0)"), "var(--svg-muted)"],
        [273, 242, t("平行 B (反向最大)", "Parallel (−max)"), "var(--svg-red)"],
        [380, 198, t("垂直 B (ε=0)", "Perp (ε=0)"), "var(--svg-muted)"]
      ].map(([x, y, lbl, c]) => `<circle cx="${x}" cy="${y}" r="3.8" fill="${c}"/>${S.tx(x, y < 190 ? y - 10 : y + 18, lbl, { s: 9.2, b: true, c })}`).join("")}
    `),

    /* 24. Book 4: Transformer & Grid Transmission */
    "diag-transformer-grid": (t) => svgWrap("diag-transformer-grid", ++uidCounter, 560, 255, (p) => `
      <!-- Left: Transformer -->
      <rect x="14" y="14" width="214" height="226" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(121, 34, t("疊片軟鐵芯變壓器", "Laminated Core Transformer"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <!-- Core frame -->
      <path d="M 58,64 L 184,64 L 184,186 L 58,186 Z M 84,90 L 84,160 L 158,160 L 158,90 Z" fill="var(--svg-grid)" fill-rule="evenodd" stroke="var(--svg-axis)" stroke-width="1.5"/>
      <!-- Primary coil (left) -->
      ${[92,108,124,140,156].map(y => `<line x1="50" y1="${y}" x2="92" y2="${y-6}" stroke="var(--svg-red)" stroke-width="3"/>`).join("")}
      <!-- Secondary coil (right, more turns) -->
      ${[88,98,108,118,128,138,148,158].map(y => `<line x1="150" y1="${y}" x2="192" y2="${y-5}" stroke="var(--svg-green)" stroke-width="2.6"/>`).join("")}
      ${S.tx(40, 128, "Vp", { a: "end", s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(200, 128, "Vs", { a: "start", s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(121, 212, "Vs / Vp = Ns / Np = Ip / Is", { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(121, 228, t("必須使用交流電 AC", "AC Only"), { s: 9.5, c: "var(--svg-red)" })}

      <!-- Right: Power Grid Flow -->
      <rect x="242" y="14" width="304" height="226" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(394, 34, t("高壓交流輸電網（大幅降低 I²R 損耗）", "High-Voltage AC Grid (Low I²R Loss)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <!-- Flow blocks -->
      ${[
        [256, 78, 66, 44, t("發電廠", "Power Plant"), "25 kV", "var(--svg-amber)"],
        [342, 78, 56, 44, t("升壓", "Step-Up"), "400 kV", "var(--svg-red)"],
        [418, 78, 56, 44, t("降壓", "Step-Down"), "220 V", "var(--svg-green)"],
        [490, 78, 44, 44, t("家居", "Home"), "AC", "var(--svg-blue)"]
      ].map(([x, y, w, h, top, bot, col]) => `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="var(--svg-fill-soft)" stroke="${col}" stroke-width="1.8"/>
        ${S.tx(x+w/2, y+18, top, { s: 9.5, b: true, c: col })}
        ${S.tx(x+w/2, y+34, bot, { s: 9.2, b: true })}
      `).join("")}
      <line x1="322" y1="100" x2="340" y2="100" stroke="var(--svg-axis)" stroke-width="1.8" marker-end="url(#${p}-ink)"/>
      <line x1="398" y1="100" x2="416" y2="100" stroke="var(--svg-red)" stroke-width="2.2" marker-end="url(#${p}-red)"/>
      <line x1="474" y1="100" x2="488" y2="100" stroke="var(--svg-axis)" stroke-width="1.8" marker-end="url(#${p}-ink)"/>
      <!-- Formula callout -->
      <rect x="262" y="144" width="264" height="76" rx="7" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)"/>
      ${S.tx(394, 168, "I = P / V   ⇒   P_loss = I²Rc = (P² / V²) Rc", { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(394, 190, t("電壓 V 提高 10 倍 → 電流減至 1/10", "10× Higher V → 1/10 Current"), { s: 9.8 })}
      ${S.tx(394, 208, t("電纜熱損耗 P_loss 驟降至 1/100！", "Cable Heating Loss Cuts to 1/100!"), { s: 10, b: true, c: "var(--svg-green)" })}
    `),

    /* 25. Book 4: Charged Particle in E vs B field */
    "diag-charge-fields": (t) => svgWrap("diag-charge-fields", ++uidCounter, 560, 250, (p) => `
      <!-- Left: Uniform E-field -> Parabola -->
      <rect x="14" y="14" width="258" height="222" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(143, 34, t("勻強電場：拋物線 (動能增加)", "Uniform E-Field: Parabola (KE↑)"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      <rect x="64" y="54" width="180" height="8" fill="var(--svg-red)"/>
      <rect x="64" y="192" width="180" height="8" fill="var(--svg-blue)"/>
      ${[90,126,162,198,230].map(x => `<line x1="${x}" y1="64" x2="${x}" y2="188" stroke="var(--svg-grid)" stroke-width="1.4" marker-end="url(#${p}-ink)"/>`).join("")}
      <line x1="24" y1="96" x2="64" y2="96" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      <path d="M 64,96 Q 168,98 232,186" fill="none" stroke="var(--svg-red)" stroke-width="2.6" marker-end="url(#${p}-red)"/>
      ${S.tx(38, 86, "+q, v", { s: 10, b: true, c: "var(--svg-amber)" })}
      ${S.tx(146, 222, "F = qE (向下恆力 → 拋物線)", { s: 9.8, b: true, c: "var(--svg-red)" })}

      <!-- Right: Uniform B-field (into page X) -> Circular Arc -->
      <rect x="288" y="14" width="258" height="222" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(417, 34, t("勻強磁場 (× 入紙)：圓弧 (動能不變)", "Uniform B-Field (×): Circle (KE const)"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <rect x="352" y="50" width="176" height="148" rx="6" fill="var(--svg-fill-soft)"/>
      ${[376,416,456,496].flatMap(x => [74,114,154,184].map(y => S.tx(x, y, "×", { s: 12, c: "var(--svg-blue)" }))).join("")}
      <line x1="302" y1="158" x2="352" y2="158" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      <!-- Circular arc curving UP (+q moving right in B into page -> F UP!) -->
      <path d="M 352,158 A 76,76 0 0,0 428,82" fill="none" stroke="var(--svg-green)" stroke-width="2.8" marker-end="url(#${p}-green)"/>
      ${S.tx(322, 148, "+q, v", { s: 10, b: true, c: "var(--svg-amber)" })}
      ${S.tx(417, 222, "r = mv / (BQ)  |  W = 0", { s: 10.5, b: true, c: "var(--svg-green)" })}
    `),

    /* 26. Book 5: Alpha Beta Gamma Absorption & Deflection */
    "diag-alpha-beta-gamma": (t) => svgWrap("diag-alpha-beta-gamma", ++uidCounter, 560, 260, (p) => `
      <!-- Left: Penetration -->
      <rect x="12" y="14" width="278" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(151, 34, t("穿透能力比較", "Penetrating Power"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Absorbers: Paper, Al, Lead -->
      <rect x="108" y="58" width="8" height="142" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)"/>
      <rect x="172" y="58" width="16" height="142" fill="var(--svg-grid)" stroke="var(--svg-axis)"/>
      <rect x="242" y="58" width="32" height="142" fill="var(--svg-muted)" opacity="0.7" stroke="var(--svg-ink)"/>
      ${S.tx(112, 218, t("紙", "Paper"), { s: 9.8, b: true })}
      ${S.tx(180, 218, t("鋁 Al", "Al"), { s: 9.8, b: true })}
      ${S.tx(258, 218, t("厚鉛 Pb", "Lead"), { s: 9.8, b: true })}
      <!-- Rays -->
      <line x1="34" y1="86" x2="106" y2="86" stroke="var(--svg-red)" stroke-width="3" marker-end="url(#${p}-red)"/>
      ${S.tx(54, 78, "α (+2e)", { s: 10, b: true, c: "var(--svg-red)" })}
      <line x1="34" y1="130" x2="170" y2="130" stroke="var(--svg-blue)" stroke-width="2.4" marker-end="url(#${p}-blue)"/>
      ${S.tx(54, 122, "β (−e)", { s: 10, b: true, c: "var(--svg-blue)" })}
      <line x1="34" y1="174" x2="282" y2="174" stroke="var(--svg-green)" stroke-width="2" stroke-dasharray="5,2" marker-end="url(#${p}-green)"/>
      ${S.tx(54, 166, "γ (0)", { s: 10, b: true, c: "var(--svg-green)" })}

      <!-- Right: E-field deflection -->
      <rect x="304" y="14" width="244" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(426, 34, t("在電場中的偏轉幅度對比", "Deflection in Electric Field"), { s: 11, b: true, c: "var(--svg-purple)" })}
      <rect x="356" y="54" width="176" height="8" fill="var(--svg-red)"/>${S.tx(444, 50, "+ + + + +", { s: 10, b: true, c: "var(--svg-red)" })}
      <rect x="356" y="198" width="176" height="8" fill="var(--svg-blue)"/>${S.tx(444, 220, "− − − − −", { s: 10, b: true, c: "var(--svg-blue)" })}
      <!-- Gamma straight -->
      <line x1="316" y1="130" x2="528" y2="130" stroke="var(--svg-green)" stroke-width="2.2" marker-end="url(#${p}-green)"/>
      ${S.tx(516, 122, "γ", { s: 11, b: true, c: "var(--svg-green)" })}
      <!-- Alpha slight downward towards - -->
      <path d="M 356,130 Q 444,138 524,168" fill="none" stroke="var(--svg-red)" stroke-width="2.6" marker-end="url(#${p}-red)"/>
      ${S.tx(496, 180, t("α (微偏)", "α (slight)"), { s: 10, b: true, c: "var(--svg-red)" })}
      <!-- Beta strong upward towards + -->
      <path d="M 356,130 Q 416,120 456,66" fill="none" stroke="var(--svg-blue)" stroke-width="2.4" marker-end="url(#${p}-blue)"/>
      ${S.tx(472, 82, t("β (大偏轉!)", "β (sharp!)"), { s: 10, b: true, c: "var(--svg-blue)" })}
    `),

    /* 27. Book 5: Exponential Decay & ln A vs t */
    "diag-decay-curve": (t) => svgWrap("diag-decay-curve", ++uidCounter, 560, 260, (p) => `
      <!-- Left: Decay with background -->
      ${S.axis(p, 48, 214, 276, 30, "t", "A")}
      ${S.tx(162, 20, t("指數衰變與本底校正", "Exponential Decay & Background"), { s: 10.8, b: true, c: "var(--svg-red)" })}
      <!-- Background asymptote -->
      <line x1="48" y1="186" x2="268" y2="186" stroke="var(--svg-amber)" stroke-width="1.6" stroke-dasharray="5,3"/>
      ${S.tx(244, 179, t("本底 B", "Bg B"), { s: 9.5, b: true, c: "var(--svg-amber)" })}
      <!-- Raw curve -->
      <path d="M 48,46 C 98,118 158,166 264,183" fill="none" stroke="var(--svg-muted)" stroke-width="1.8" stroke-dasharray="4,3"/>
      <!-- Corrected curve -->
      <path d="M 48,74 C 98,146 158,194 264,211" fill="none" stroke="var(--svg-red)" stroke-width="2.6"/>
      <!-- Half-life markers -->
      <line x1="104" y1="144" x2="104" y2="214" stroke="var(--svg-blue)" stroke-dasharray="3,3"/>
      <line x1="160" y1="179" x2="160" y2="214" stroke="var(--svg-blue)" stroke-dasharray="3,3"/>
      ${S.tx(104, 228, "t½", { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(160, 228, "2t½", { s: 10, b: true, c: "var(--svg-blue)" })}
      ${S.tx(42, 78, "A₀", { a: "end", s: 10, b: true, c: "var(--svg-red)" })}
      ${S.tx(42, 148, "½A₀", { a: "end", s: 9.5, c: "var(--svg-blue)" })}

      <!-- Right: ln A vs t -->
      ${S.axis(p, 326, 214, 536, 30, "t", "ln A")}
      ${S.tx(432, 20, t("線性化：ln A = ln A₀ − kt", "Linearized: ln A = ln A₀ − kt"), { s: 10.8, b: true, c: "var(--svg-purple)" })}
      <line x1="326" y1="62" x2="516" y2="196" stroke="var(--svg-purple)" stroke-width="2.6"/>
      ${S.tx(320, 66, "ln A₀", { a: "end", s: 9.8, b: true })}
      ${S.tx(446, 114, t("斜率 = −k", "Slope = −k"), { s: 11, b: true, c: "var(--svg-purple)" })}
      ${S.tx(432, 240, "t½ = ln 2 / k", { s: 11, b: true, c: "var(--svg-green)" })}
    `),

    /* 28. Book 5: Binding Energy Curve & Fission Chain */
    "diag-binding-fission": (t) => svgWrap("diag-binding-fission", ++uidCounter, 560, 260, (p) => `
      <!-- Left: Binding Energy per Nucleon -->
      ${S.axis(p, 46, 212, 286, 30, t("質量數 A", "Mass No. A"), "BE/A")}
      ${S.tx(168, 20, t("核子平均結合能曲線", "Binding Energy / Nucleon"), { s: 10.8, b: true, c: "var(--svg-blue)" })}
      <path d="M 52,196 Q 68,94 114,58 Q 186,66 274,84" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
      <circle cx="114" cy="58" r="4.5" fill="var(--svg-red)"/>
      ${S.tx(114, 48, "⁵⁶Fe (最穩)", { s: 9.8, b: true, c: "var(--svg-red)" })}
      <!-- Fusion arrow -->
      <line x1="62" y1="166" x2="88" y2="96" stroke="var(--svg-green)" stroke-width="2.4" marker-end="url(#${p}-green)"/>
      ${S.tx(96, 146, t("聚變 Fusion", "Fusion"), { s: 9.8, b: true, c: "var(--svg-green)" })}
      <!-- Fission arrow -->
      <line x1="258" y1="98" x2="162" y2="78" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      ${S.tx(222, 118, t("裂變 Fission", "Fission"), { s: 9.8, b: true, c: "var(--svg-amber)" })}
      ${S.tx(262, 74, "²³⁵U", { s: 9.8, b: true })}

      <!-- Right: Fission Chain Reaction -->
      <rect x="302" y="14" width="246" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(425, 34, t("鈾-235 核裂變連鎖反應", "U-235 Chain Reaction"), { s: 10.8, b: true, c: "var(--svg-red)" })}
      <!-- Slow neutron -> U-235 -> 2 daughters + 3 neutrons -->
      <circle cx="320" cy="130" r="4.5" fill="var(--svg-blue)"/>
      <line x1="326" y1="130" x2="362" y2="130" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      <circle cx="384" cy="130" r="16" fill="var(--svg-amber)"/>
      ${S.tx(384, 134, "²³⁵U", { s: 9.5, b: true, c: "#fff" })}
      <!-- Daughters -->
      <line x1="398" y1="118" x2="438" y2="78" stroke="var(--svg-red)" stroke-width="1.8" marker-end="url(#${p}-red)"/>
      <line x1="398" y1="142" x2="438" y2="182" stroke="var(--svg-red)" stroke-width="1.8" marker-end="url(#${p}-red)"/>
      <circle cx="452" cy="68" r="11" fill="var(--svg-purple)"/>${S.tx(452, 72, "Ba", { s: 9, b: true, c: "#fff" })}
      <circle cx="452" cy="192" r="11" fill="var(--svg-purple)"/>${S.tx(452, 196, "Kr", { s: 9, b: true, c: "#fff" })}
      <!-- 3 fast neutrons triggering next U-235 -->
      ${[96, 130, 164].map(y => `
        <line x1="402" y1="130" x2="486" y2="${y}" stroke="var(--svg-blue)" stroke-width="1.6" stroke-dasharray="3,2" marker-end="url(#${p}-blue)"/>
        <circle cx="510" cy="${y}" r="11" fill="var(--svg-amber)" opacity="0.85"/>
        ${S.tx(510, y+3, "U", { s: 9, b: true, c: "#fff" })}
      `).join("")}
      ${S.tx(425, 232, t("慢化劑減速中子 · 控制棒吸收多餘中子", "Moderator slows n · Control rods absorb excess n"), { s: 9.2, b: true, c: "var(--svg-green)" })}
    `),

    /* 29. Book E2: Rutherford Scattering */
    "diag-rutherford": (t) => svgWrap("diag-rutherford", ++uidCounter, 560, 260, (p) => `
      <!-- Left: Experimental Apparatus -->
      <rect x="14" y="14" width="232" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(130, 34, t("真空金箔散射實驗裝置", "Gold Foil Experiment (Vacuum)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <circle cx="136" cy="134" r="76" fill="var(--svg-fill-soft)" stroke="var(--svg-axis)" stroke-width="1.6"/>
      <rect x="26" y="122" width="38" height="24" rx="3" fill="var(--svg-muted)"/>
      ${S.tx(45, 138, "α源", { s: 9.5, b: true, c: "#fff" })}
      <line x1="136" y1="106" x2="136" y2="162" stroke="var(--svg-amber)" stroke-width="4"/>
      ${S.tx(136, 178, t("極薄金箔", "Thin Gold Foil"), { s: 9.5, b: true, c: "var(--svg-amber)" })}
      <line x1="64" y1="134" x2="206" y2="134" stroke="var(--svg-red)" stroke-width="2" marker-end="url(#${p}-red)"/>
      <line x1="136" y1="134" x2="184" y2="86" stroke="var(--svg-red)" stroke-width="1.6" marker-end="url(#${p}-red)"/>
      <line x1="136" y1="134" x2="88" y2="84" stroke="var(--svg-red)" stroke-width="1.4" stroke-dasharray="3,2" marker-end="url(#${p}-red)"/>
      ${S.tx(130, 232, t("可旋轉 ZnS 螢光屏探測", "Rotatable ZnS Screen"), { s: 9.8, c: "var(--svg-muted)" })}

      <!-- Right: Microscopic Nucleus Scattering -->
      <rect x="260" y="14" width="286" height="232" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(403, 34, t("微觀散射軌跡（靜電排斥）", "Microscopic Trajectories"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      <circle cx="428" cy="130" r="14" fill="var(--svg-amber)" stroke="var(--svg-red)" stroke-width="2"/>
      ${S.tx(428, 134, "+79e", { s: 9, b: true, c: "#fff" })}
      <!-- Straight far away -->
      <line x1="274" y1="62" x2="530" y2="62" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      <line x1="274" y1="202" x2="530" y2="202" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      <!-- Medium deflection -->
      <path d="M 274,98 Q 414,98 510,50" fill="none" stroke="var(--svg-purple)" stroke-width="2" marker-end="url(#${p}-purple)"/>
      <path d="M 274,162 Q 414,162 510,210" fill="none" stroke="var(--svg-purple)" stroke-width="2" marker-end="url(#${p}-purple)"/>
      <!-- Backscatter (>90 deg) -->
      <path d="M 274,126 Q 400,126 396,118 Q 392,108 308,82" fill="none" stroke="var(--svg-red)" stroke-width="2.2" marker-end="url(#${p}-red)"/>
      ${S.tx(332, 54, t("絕大部分直穿 (空曠)", "Most straight through"), { s: 9.2, c: "var(--svg-blue)" })}
      ${S.tx(396, 232, t("極少數 >90° 反彈 → 核微小而重", "Rare >90° rebound → Tiny dense nucleus"), { s: 9.5, b: true, c: "var(--svg-red)" })}
    `),

    /* 30. Book E2: Photoelectric Effect Graphs */
    "diag-photoelectric": (t) => svgWrap("diag-photoelectric", ++uidCounter, 560, 265, (p) => `
      <!-- Left: Photocurrent I vs V -->
      <line x1="26" y1="210" x2="266" y2="210" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="156" y1="224" x2="156" y2="34" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(264, 224, "V", { a: "end", s: 10.5, b: true })}
      ${S.tx(162, 44, "I", { a: "start", s: 10.5, b: true })}
      ${S.tx(146, 20, t("光電流 I 對電勢差 V", "Photocurrent I vs p.d. V"), { s: 10.8, b: true, c: "var(--svg-blue)" })}
      <!-- Same f1, High intensity -->
      <path d="M 96,210 C 122,196 144,108 176,84 L 254,84" fill="none" stroke="var(--svg-blue)" stroke-width="2.4"/>
      <!-- Same f1, Low intensity -->
      <path d="M 96,210 C 126,202 146,154 176,142 L 254,142" fill="none" stroke="var(--svg-cyan)" stroke-width="2.2"/>
      <!-- Higher f2 (larger Vs!) -->
      <path d="M 52,210 C 98,194 136,130 176,114 L 254,114" fill="none" stroke="var(--svg-red)" stroke-width="2.2" stroke-dasharray="5,3"/>
      ${S.tx(96, 226, "−Vs1", { s: 9.8, b: true, c: "var(--svg-blue)" })}
      ${S.tx(52, 226, "−Vs2", { s: 9.8, b: true, c: "var(--svg-red)" })}
      ${S.tx(218, 76, t("高光強 (f₁)", "High Int (f₁)"), { s: 9.2, b: true, c: "var(--svg-blue)" })}
      ${S.tx(218, 134, t("低光強 (f₁)", "Low Int (f₁)"), { s: 9.2, c: "var(--svg-cyan)" })}
      ${S.tx(218, 106, t("較高頻 f₂", "Higher f₂"), { s: 9.2, b: true, c: "var(--svg-red)" })}

      <!-- Right: Kmax vs f -->
      <line x1="306" y1="164" x2="538" y2="164" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      <line x1="322" y1="244" x2="322" y2="34" stroke="var(--svg-axis)" stroke-width="1.5" marker-end="url(#${p}-ink)"/>
      ${S.tx(536, 178, "f", { a: "end", s: 10.5, b: true })}
      ${S.tx(328, 44, "K_max", { a: "start", s: 10.5, b: true })}
      ${S.tx(428, 20, t("K_max = hf − φ（所有金屬斜率 = h）", "K_max = hf − φ (All slopes = h)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <!-- Metal A -->
      <line x1="322" y1="208" x2="386" y2="164" stroke="var(--svg-purple)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <line x1="386" y1="164" x2="492" y2="91" stroke="var(--svg-purple)" stroke-width="2.6"/>
      <!-- Metal B (parallel, higher work function) -->
      <line x1="322" y1="234" x2="424" y2="164" stroke="var(--svg-green)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <line x1="424" y1="164" x2="526" y2="94" stroke="var(--svg-green)" stroke-width="2.4"/>
      ${S.tx(386, 178, "f₀A", { s: 9.8, b: true, c: "var(--svg-purple)" })}
      ${S.tx(428, 178, "f₀B", { s: 9.8, b: true, c: "var(--svg-green)" })}
      ${S.tx(316, 212, "−φA", { a: "end", s: 9.5, b: true, c: "var(--svg-purple)" })}
      ${S.tx(316, 238, "−φB", { a: "end", s: 9.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(468, 78, t("平行！斜率 = h", "Parallel! Slope = h"), { s: 9.8, b: true, c: "var(--svg-red)" })}
    `),

    /* 31. Book E2: Bohr Energy Levels */
    "diag-bohr-levels": (t) => svgWrap("diag-bohr-levels", ++uidCounter, 560, 275, (p) => `
      ${S.tx(280, 18, t("玻爾氫原子能級圖（En = −13.6 / n² eV）", "Bohr Hydrogen Energy Levels (En = −13.6 / n² eV)"), { s: 11.2, b: true, c: "var(--svg-purple)" })}
      ${[
        [40, "n = ∞", "0 eV", true],
        [62, "n = 4", "−0.85 eV", false],
        [82, "n = 3", "−1.51 eV", false],
        [124, "n = 2", "−3.40 eV", false],
        [236, "n = 1", "−13.6 eV", false]
      ].map(([y, nLbl, eLbl, dash]) => `
        <line x1="88" y1="${y}" x2="452" y2="${y}" stroke="${dash ? 'var(--svg-red)' : 'var(--svg-axis)'}" stroke-width="${dash ? 1.5 : 2}" ${dash ? 'stroke-dasharray="5,3"' : ''}/>
        ${S.tx(80, y + 4, nLbl, { a: "end", s: 10.5, b: true })}
        ${S.tx(462, y + 4, eLbl, { a: "start", s: 10.5, b: true, c: dash ? "var(--svg-red)" : "var(--svg-ink)" })}
      `).join("")}
      <!-- Lyman (to n=1) UV -->
      <line x1="138" y1="124" x2="138" y2="232" stroke="var(--svg-purple)" stroke-width="2.2" marker-end="url(#${p}-purple)"/>
      <line x1="164" y1="82" x2="164" y2="232" stroke="var(--svg-purple)" stroke-width="2.2" marker-end="url(#${p}-purple)"/>
      <line x1="190" y1="62" x2="190" y2="232" stroke="var(--svg-purple)" stroke-width="2.2" marker-end="url(#${p}-purple)"/>
      ${S.tx(164, 256, t("萊曼系 (UV 紫外)", "Lyman (UV)"), { s: 10, b: true, c: "var(--svg-purple)" })}
      <!-- Balmer (to n=2) Visible -->
      <line x1="268" y1="82" x2="268" y2="120" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      <line x1="296" y1="62" x2="296" y2="120" stroke="var(--svg-cyan)" stroke-width="2.4" marker-end="url(#${p}-cyan)"/>
      ${S.tx(282, 142, t("巴耳末系 (可見光)", "Balmer (Visible)"), { s: 10, b: true, c: "var(--svg-green)" })}
      <!-- Paschen (to n=3) IR -->
      <line x1="382" y1="62" x2="382" y2="79" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      ${S.tx(382, 102, t("帕邢系 (IR 紅外)", "Paschen (IR)"), { s: 9.8, b: true, c: "var(--svg-amber)" })}
      <!-- Ionization upward arrow -->
      <line x1="428" y1="236" x2="428" y2="44" stroke="var(--svg-blue)" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#${p}-blue)"/>
      ${S.tx(424, 178, t("電離能 13.6 eV", "Ionize 13.6 eV"), { a: "end", s: 9.8, b: true, c: "var(--svg-blue)" })}
    `),

    /* 32. Book E2: TEM vs STM */
    "diag-tem-stm": (t) => svgWrap("diag-tem-stm", ++uidCounter, 560, 265, (p) => `
      <!-- Left: TEM -->
      <rect x="14" y="14" width="256" height="236" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(142, 34, t("透射電子顯微鏡 (TEM · 真空)", "TEM (Vacuum Column)"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      <rect x="114" y="44" width="56" height="20" rx="3" fill="var(--svg-red)" opacity="0.85"/>
      ${S.tx(142, 58, t("電子槍", "e⁻ Gun"), { s: 9.5, b: true, c: "#fff" })}
      <!-- Magnetic condenser lens -->
      <ellipse cx="142" cy="88" rx="46" ry="8" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.6"/>
      ${S.tx(206, 92, t("磁聚光鏡", "Condenser"), { a: "start", s: 9, c: "var(--svg-blue)" })}
      <!-- Ultra-thin specimen -->
      <line x1="108" y1="122" x2="176" y2="122" stroke="var(--svg-amber)" stroke-width="3.5"/>
      ${S.tx(184, 126, t("極薄樣本", "Thin Sample"), { a: "start", s: 9.2, b: true, c: "var(--svg-amber)" })}
      <!-- Magnetic objective & projector -->
      <ellipse cx="142" cy="158" rx="46" ry="8" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.6"/>
      ${S.tx(196, 162, t("磁物鏡", "Objective"), { a: "start", s: 9, c: "var(--svg-blue)" })}
      <!-- Electron beam rays -->
      <polygon points="142,64 114,88 128,122 114,158 92,208 192,208 170,158 156,122 170,88" fill="var(--svg-cyan)" opacity="0.22" stroke="var(--svg-cyan)" stroke-width="1.4"/>
      <line x1="80" y1="208" x2="204" y2="208" stroke="var(--svg-green)" stroke-width="4"/>
      ${S.tx(142, 226, t("螢光屏 (2D像 · λ=h/√2meV)", "Screen (2D · Short de Broglie λ)"), { s: 9.4, b: true, c: "var(--svg-green)" })}

      <!-- Right: STM -->
      <rect x="284" y="14" width="262" height="236" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(415, 34, t("掃描隧道顯微鏡 (STM · 3D 原子像)", "STM (Quantum Tunnelling 3D)"), { s: 10.5, b: true, c: "var(--svg-purple)" })}
      <!-- Piezo scanner & Sharp Tip -->
      <rect x="386" y="48" width="58" height="26" rx="4" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)"/>
      ${S.tx(415, 65, t("壓電回饋", "Piezo"), { s: 9.5, b: true, c: "var(--svg-purple)" })}
      <polygon points="400,74 430,74 415,134" fill="var(--svg-muted)" stroke="var(--svg-axis)" stroke-width="1.5"/>
      <!-- Tunnelling gap ~1 nm -->
      <line x1="415" y1="138" x2="415" y2="160" stroke="var(--svg-red)" stroke-width="2" stroke-dasharray="2,2" marker-end="url(#${p}-red)"/>
      ${S.tx(424, 152, t("隧道電流 (d≈1nm)", "Tunnelling I (d≈1nm)"), { a: "start", s: 9.2, b: true, c: "var(--svg-red)" })}
      <!-- Atomic surface row -->
      ${[316,348,380,412,444,476,508].map((x, idx) =>
        `<circle cx="${x}" cy="${idx === 3 ? 174 : 182}" r="14" fill="var(--svg-fill-warm)" stroke="var(--svg-amber)" stroke-width="1.8"/>`
      ).join("")}
      <rect x="298" y="196" width="230" height="16" rx="3" fill="var(--svg-grid)"/>
      ${S.tx(415, 228, t("樣本須導電 · 電流隨距離 d 指數衰減", "Conducting sample · I drops exponentially with d"), { s: 9.3, b: true, c: "var(--svg-purple)" })}
    `),

    /* 33. Book E3: Illumination Inverse-Square & Cosine Law */
    "diag-illumination": (t) => svgWrap("diag-illumination", ++uidCounter, 560, 255, (p) => `
      <!-- Left: Inverse Square spreading -->
      <circle cx="48" cy="128" r="10" fill="var(--svg-amber)"/>
      ${S.tx(48, 152, "Φ", { s: 11, b: true, c: "var(--svg-amber)" })}
      <line x1="58" y1="124" x2="226" y2="66" stroke="var(--svg-amber)" stroke-width="1.6"/>
      <line x1="58" y1="132" x2="226" y2="190" stroke="var(--svg-amber)" stroke-width="1.6"/>
      <rect x="128" y="99" width="16" height="58" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.8"/>
      <rect x="212" y="70" width="24" height="116" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.8"/>
      ${S.tx(136, 90, "r → A", { s: 9.8, b: true, c: "var(--svg-blue)" })}
      ${S.tx(224, 62, "2r → 4A (¼E)", { s: 9.8, b: true, c: "var(--svg-red)" })}
      ${S.tx(140, 228, "E = Φ / (4πr²)", { s: 11, b: true, c: "var(--svg-blue)" })}

      <!-- Right: Desk Lamp Oblique Cosine Law -->
      <line x1="288" y1="196" x2="536" y2="196" stroke="var(--svg-axis)" stroke-width="2.6"/>
      <circle cx="348" cy="64" r="11" fill="var(--svg-amber)"/>
      ${S.tx(348, 44, t("點光源 Φ", "Point Lamp Φ"), { s: 10.5, b: true, c: "var(--svg-amber)" })}
      <!-- Vertical height h -->
      <line x1="348" y1="76" x2="348" y2="196" stroke="var(--svg-blue)" stroke-width="1.8" stroke-dasharray="4,3"/>
      ${S.tx(336, 138, "h", { a: "end", s: 11, b: true, c: "var(--svg-blue)" })}
      <!-- Oblique ray to P -->
      <line x1="354" y1="74" x2="478" y2="196" stroke="var(--svg-red)" stroke-width="2.4" marker-end="url(#${p}-red)"/>
      <!-- Normal at P -->
      <line x1="478" y1="196" x2="478" y2="124" stroke="var(--svg-green)" stroke-width="1.6" stroke-dasharray="4,3"/>
      ${S.tx(462, 152, "θ", { s: 11, b: true, c: "var(--svg-green)" })}
      ${S.tx(428, 128, "r", { s: 11, b: true, c: "var(--svg-red)" })}
      ${S.tx(412, 212, "x", { s: 11, b: true })}
      ${S.tx(418, 236, "E = (Φ / 4πr²) cosθ = Φh / 4π(h²+x²)^(3/2)", { s: 10, b: true, c: "var(--svg-purple)" })}
    `),

    /* 34. Book E3: Heat Pump / Air Conditioner Cycle */
    "diag-heat-pump": (t) => svgWrap("diag-heat-pump", ++uidCounter, 560, 265, (p) => `
      <!-- Indoor Cold Side vs Outdoor Hot Side -->
      <rect x="18" y="18" width="232" height="228" rx="8" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-dasharray="4,3"/>
      ${S.tx(134, 38, t("室內（低溫端 TC）", "Indoors (Cold TC)"), { s: 11, b: true, c: "var(--svg-blue)" })}
      <rect x="310" y="18" width="232" height="228" rx="8" fill="var(--svg-fill-warm)" stroke="var(--svg-red)" stroke-dasharray="4,3"/>
      ${S.tx(426, 38, t("室外（高溫端 TH）", "Outdoors (Hot TH)"), { s: 11, b: true, c: "var(--svg-red)" })}

      <!-- Evaporator (Left) -->
      <rect x="66" y="96" width="130" height="68" rx="8" fill="var(--svg-bg)" stroke="var(--svg-blue)" stroke-width="2.2"/>
      ${S.tx(131, 124, t("蒸發器 Evaporator", "Evaporator"), { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(131, 144, t("液→氣 吸熱 QC", "Liquid→Gas (Absorbs QC)"), { s: 9.5, c: "var(--svg-cyan)" })}
      <!-- Heat QC arrow in -->
      <line x1="28" y1="130" x2="62" y2="130" stroke="var(--svg-blue)" stroke-width="3" marker-end="url(#${p}-blue)"/>
      ${S.tx(44, 118, "QC", { s: 11, b: true, c: "var(--svg-blue)" })}

      <!-- Condenser (Right) -->
      <rect x="364" y="96" width="130" height="68" rx="8" fill="var(--svg-bg)" stroke="var(--svg-red)" stroke-width="2.2"/>
      ${S.tx(429, 124, t("冷凝器 Condenser", "Condenser"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(429, 144, t("氣→液 放熱 QH", "Gas→Liquid (Releases QH)"), { s: 9.5, c: "var(--svg-red)" })}
      <!-- Heat QH arrow out -->
      <line x1="496" y1="130" x2="532" y2="130" stroke="var(--svg-red)" stroke-width="3" marker-end="url(#${p}-red)"/>
      ${S.tx(516, 118, "QH", { s: 11, b: true, c: "var(--svg-red)" })}

      <!-- Compressor (Top Middle) -->
      <rect x="224" y="50" width="112" height="36" rx="18" fill="var(--svg-bg)" stroke="var(--svg-purple)" stroke-width="2.2"/>
      ${S.tx(280, 72, t("壓縮機 (+電功 W)", "Compressor (+W)"), { s: 9.8, b: true, c: "var(--svg-purple)" })}
      <!-- Expansion Valve (Bottom Middle) -->
      <rect x="224" y="176" width="112" height="36" rx="6" fill="var(--svg-bg)" stroke="var(--svg-green)" stroke-width="2"/>
      ${S.tx(280, 198, t("膨脹閥 (降壓降溫)", "Expansion Valve"), { s: 9.8, b: true, c: "var(--svg-green)" })}

      <!-- Loop Pipes -->
      <polyline points="131,96 131,68 220,68" fill="none" stroke="var(--svg-purple)" stroke-width="2.2" marker-end="url(#${p}-purple)"/>
      <polyline points="336,68 429,68 429,92" fill="none" stroke="var(--svg-red)" stroke-width="2.2" marker-end="url(#${p}-red)"/>
      <polyline points="429,164 429,194 340,194" fill="none" stroke="var(--svg-green)" stroke-width="2.2" marker-end="url(#${p}-green)"/>
      <polyline points="224,194 131,194 131,168" fill="none" stroke="var(--svg-blue)" stroke-width="2.2" marker-end="url(#${p}-blue)"/>

      ${S.tx(280, 236, "QH = QC + W   |   COP_cool = QC / W", { s: 11, b: true, c: "var(--svg-ink)" })}
    `),

    /* 35. Book E3: Composite Wall / Double Glazing */
    "diag-building-wall": (t) => svgWrap("diag-building-wall", ++uidCounter, 560, 260, (p) => `
      ${S.tx(280, 20, t("雙層玻璃 / 複合牆穩態溫度分佈與 U 值", "Double Glazing / Composite Wall Temperature Profile & U-Value"), { s: 10.8, b: true, c: "var(--svg-green)" })}
      <!-- Layers: Glass 1 | Still Air Gap | Glass 2 -->
      <rect x="108" y="44" width="44" height="158" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.8"/>
      <rect x="152" y="44" width="126" height="158" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="1.8" stroke-dasharray="4,3"/>
      <rect x="278" y="44" width="44" height="158" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.8"/>
      ${S.tx(130, 218, t("玻璃1", "Glass 1"), { s: 9.8, b: true, c: "var(--svg-blue)" })}
      ${S.tx(215, 218, t("靜止空氣層 (κ極低!)", "Still Air Gap (tiny κ!)"), { s: 10, b: true, c: "var(--svg-green)" })}
      ${S.tx(300, 218, t("玻璃2", "Glass 2"), { s: 9.8, b: true, c: "var(--svg-blue)" })}
      <!-- Temperature profile line -->
      <polyline points="72,66 108,66 152,78 278,166 322,178 360,178" fill="none" stroke="var(--svg-red)" stroke-width="3"/>
      <circle cx="108" cy="66" r="3.8" fill="var(--svg-red)"/>
      <circle cx="152" cy="78" r="3.8" fill="var(--svg-red)"/>
      <circle cx="278" cy="166" r="3.8" fill="var(--svg-red)"/>
      <circle cx="322" cy="178" r="3.8" fill="var(--svg-red)"/>
      ${S.tx(68, 70, t("室外 TH", "Out TH"), { a: "end", s: 10, b: true, c: "var(--svg-red)" })}
      ${S.tx(364, 182, t("室內 TC", "In TC"), { a: "start", s: 10, b: true, c: "var(--svg-blue)" })}
      <!-- Heat flow arrow -->
      <line x1="168" y1="58" x2="258" y2="58" stroke="var(--svg-amber)" stroke-width="2.4" marker-end="url(#${p}-amber)"/>
      ${S.tx(215, 53, "Q/t (恆定)", { s: 9.8, b: true, c: "var(--svg-amber)" })}

      <!-- Formula box on right -->
      <rect x="376" y="48" width="170" height="148" rx="8" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)"/>
      ${S.tx(461, 72, "Q/t = U A ΔT", { s: 11.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(461, 98, "U = κ / d", { s: 11, b: true })}
      ${S.tx(461, 128, "1/U_tot = Σ (d_i / κ_i)", { s: 10.5, b: true, c: "var(--svg-green)" })}
      ${S.tx(461, 156, t("空氣層導熱極差，", "Air gap causes"), { s: 9.5, c: "var(--svg-muted)" })}
      ${S.tx(461, 174, t("絕大溫降在此發生！", "steepest temp drop!"), { s: 9.5, b: true, c: "var(--svg-red)" })}
      ${S.tx(280, 244, t("U 值越低 → 隔熱性能越佳 → 降低冷氣負荷與 OTTV", "Lower U-value = Better insulation = Lower cooling load & OTTV"), { s: 10, b: true, c: "var(--svg-muted)" })}
    `),

    /* 36. Book E3: Wind Turbine & PWR Nuclear Reactor */
    "diag-renewable-pwr": (t) => svgWrap("diag-renewable-pwr", ++uidCounter, 560, 265, (p) => `
      <!-- Left: Wind Turbine Cylinder -->
      <rect x="12" y="14" width="212" height="236" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(118, 34, t("風力發電掃掠風柱", "Wind Turbine Swept Column"), { s: 10.5, b: true, c: "var(--svg-cyan)" })}
      <!-- Swept cylinder -->
      <ellipse cx="78" cy="116" rx="22" ry="50" fill="var(--svg-fill-soft)" stroke="var(--svg-cyan)" stroke-width="2"/>
      <ellipse cx="164" cy="116" rx="22" ry="50" fill="none" stroke="var(--svg-cyan)" stroke-width="1.6" stroke-dasharray="4,3"/>
      <line x1="78" y1="66" x2="164" y2="66" stroke="var(--svg-cyan)" stroke-width="1.5"/>
      <line x1="78" y1="166" x2="164" y2="166" stroke="var(--svg-cyan)" stroke-width="1.5"/>
      <!-- Wind arrows -->
      <line x1="24" y1="100" x2="68" y2="100" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      <line x1="24" y1="132" x2="68" y2="132" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      <!-- Turbine tower & blades -->
      <line x1="78" y1="116" x2="78" y2="210" stroke="var(--svg-axis)" stroke-width="3.5"/>
      <line x1="78" y1="70" x2="78" y2="162" stroke="var(--svg-ink)" stroke-width="3"/>
      <circle cx="78" cy="116" r="5" fill="var(--svg-red)"/>
      ${S.tx(120, 114, "vΔt", { s: 10.5, b: true, c: "var(--svg-blue)" })}
      ${S.tx(118, 190, "A = πr²", { s: 10.2, b: true })}
      ${S.tx(118, 232, "P_max = ½ ρ A v³", { s: 11.5, b: true, c: "var(--svg-green)" })}

      <!-- Right: PWR Dual Loop -->
      <rect x="236" y="14" width="312" height="236" rx="8" fill="none" stroke="var(--svg-grid)"/>
      ${S.tx(392, 34, t("壓水式核反應堆 (PWR 雙迴路隔離)", "Pressurized Water Reactor (PWR Dual-Loop)"), { s: 10.5, b: true, c: "var(--svg-red)" })}
      <!-- Containment & Reactor Core -->
      <rect x="248" y="48" width="122" height="156" rx="10" fill="var(--svg-fill-warm)" stroke="var(--svg-red)" stroke-width="2"/>
      <!-- Fuel & Control Rods -->
      <rect x="264" y="100" width="10" height="66" fill="var(--svg-amber)"/>
      <rect x="288" y="100" width="10" height="66" fill="var(--svg-amber)"/>
      <rect x="276" y="70" width="8" height="58" fill="var(--svg-axis)"/>
      ${S.tx(284, 64, t("控制棒", "Ctrl Rod"), { s: 8.8, b: true })}
      ${S.tx(284, 184, t("堆芯(燃料+慢化劑)", "Core + Moderator"), { s: 8.8, b: true, c: "var(--svg-red)" })}
      <!-- Heat Exchanger / Steam Generator -->
      <rect x="334" y="88" width="28" height="84" rx="5" fill="var(--svg-fill-soft)" stroke="var(--svg-blue)" stroke-width="1.8"/>
      ${S.tx(348, 82, t("熱交換", "HX"), { s: 8.8, b: true, c: "var(--svg-blue)" })}
      <!-- Primary loop (radioactive) -->
      <polyline points="300,112 334,112" fill="none" stroke="var(--svg-red)" stroke-width="2.4"/>
      <polyline points="334,152 300,152" fill="none" stroke="var(--svg-amber)" stroke-width="2.4"/>
      <!-- Secondary Steam Loop -> Turbine -> Generator -->
      <rect x="404" y="72" width="58" height="36" rx="5" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="1.8"/>
      ${S.tx(433, 94, t("渦輪機", "Turbine"), { s: 9.5, b: true, c: "var(--svg-green)" })}
      <rect x="478" y="72" width="56" height="36" rx="5" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)" stroke-width="1.8"/>
      ${S.tx(506, 94, t("發電機", "Gen"), { s: 9.5, b: true, c: "var(--svg-purple)" })}
      <line x1="462" y1="90" x2="478" y2="90" stroke="var(--svg-axis)" stroke-width="2.5"/>
      <!-- Condenser -->
      <rect x="414" y="152" width="76" height="34" rx="5" fill="var(--svg-fill-soft)" stroke="var(--svg-cyan)" stroke-width="1.8"/>
      ${S.tx(452, 173, t("冷凝器(海水)", "Condenser"), { s: 9.2, b: true, c: "var(--svg-cyan)" })}
      <!-- Secondary pipes -->
      <polyline points="362,102 400,102" fill="none" stroke="var(--svg-green)" stroke-width="2.2" marker-end="url(#${p}-green)"/>
      <polyline points="433,108 433,148" fill="none" stroke="var(--svg-cyan)" stroke-width="2" marker-end="url(#${p}-cyan)"/>
      <polyline points="414,168 364,168" fill="none" stroke="var(--svg-blue)" stroke-width="2" marker-end="url(#${p}-blue)"/>
      ${S.tx(392, 232, t("一迴路(高壓放射性水) 與 二迴路(蒸汽渦輪) 完全隔離！", "Radioactive primary water is completely isolated from turbine loop!"), { s: 9.3, b: true, c: "var(--svg-red)" })}
    `)
  };

  window.PHY_DIAGRAMS = {
    render(id, lang) {
      const fn = RENDERERS[id];
      if (!fn) return `<div style="padding:1rem;color:var(--text-muted)">Diagram ${id} not found</div>`;
      return fn(mkLabel(lang || "zh"));
    },
    has(id) {
      return Boolean(RENDERERS[id]);
    }
  };
})();
