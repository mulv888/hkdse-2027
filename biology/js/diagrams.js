/* ==========================================================================
   17 Clean, Bilingual Vector SVG Biological Diagrams
   Dynamically switches labels between EN / EN+繁中 / 繁中 and light/dark mode
   ========================================================================== */
(function () {
  "use strict";

  function lbl(en, zh, lang) {
    if (lang === "zh") return zh;
    if (lang === "both") return `${en} (${zh})`;
    return en;
  }

  function render(id, lang) {
    const t = (en, zh) => lbl(en, zh, lang);
    const s = (x, y, text, opts = {}) => {
      const size = opts.size || 12;
      const weight = opts.bold ? "700" : "500";
      const fill = opts.fill || "var(--svg-ink)";
      const anchor = opts.anchor || "middle";
      return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" font-family="var(--font-sans)">${text}</text>`;
    };

    switch (id) {
      case "diag-membrane": {
        let heads = "";
        for (let i = 0; i < 13; i++) {
          if (i === 3 || i === 4 || i === 8 || i === 9) continue;
          const cx = 55 + i * 44;
          heads += `
            <circle cx="${cx}" cy="92" r="14" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2"/>
            <path d="M${cx-5},106 Q${cx-8},125 ${cx-4},142 M${cx+5},106 Q${cx+8},125 ${cx+4},142" stroke="var(--svg-amber)" stroke-width="2.2" fill="none"/>
            <circle cx="${cx}" cy="196" r="14" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2"/>
            <path d="M${cx-5},182 Q${cx-8},163 ${cx-4},146 M${cx+5},182 Q${cx+8},163 ${cx+4},146" stroke="var(--svg-amber)" stroke-width="2.2" fill="none"/>
          `;
        }
        return `<svg viewBox="0 0 640 280">
          <rect width="640" height="280" fill="var(--svg-bg)"/>
          ${s(320, 26, t("Fluid Mosaic Model of Cell Membrane", "細胞膜的流動鑲嵌模型"), { size: 15, bold: true })}
          ${s(320, 48, t("Extracellular Fluid (Aqueous)", "細胞外液（水環境）"), { size: 11, fill: "var(--svg-muted)" })}
          ${s(320, 262, t("Cytoplasm (Aqueous)", "細胞質（水環境）"), { size: 11, fill: "var(--svg-muted)" })}
          ${heads}
          <!-- Channel Protein -->
          <rect x="172" y="72" width="24" height="144" rx="10" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2.2"/>
          <rect x="218" y="72" width="24" height="144" rx="10" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2.2"/>
          <path d="M207,56 L207,232" stroke="var(--svg-green)" stroke-width="2" stroke-dasharray="5,4"/>
          <polygon points="207,236 202,226 212,226" fill="var(--svg-green)"/>
          ${s(207, 248, t("Channel Protein (ions/polar)", "通道蛋白（離子／極性分子）"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          <!-- Carrier / Glycoprotein -->
          <rect x="394" y="72" width="66" height="144" rx="18" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)" stroke-width="2.2"/>
          <path d="M427,72 L427,54 L415,44 M427,54 L442,44 L452,52" stroke="var(--svg-pink)" stroke-width="2.5" fill="none"/>
          <circle cx="415" cy="44" r="4" fill="var(--svg-pink)"/><circle cx="442" cy="44" r="4" fill="var(--svg-pink)"/><circle cx="452" cy="52" r="4" fill="var(--svg-pink)"/>
          ${s(462, 42, t("Glycoprotein", "糖蛋白"), { size: 10.5, bold: true, fill: "var(--svg-pink)", anchor: "start" })}
          ${s(462, 55, t("(receptor / antigen)", "（受體／細胞識別）"), { size: 9.5, fill: "var(--svg-pink)", anchor: "start" })}
          ${s(427, 148, t("Carrier", "載體"), { size: 11, bold: true, fill: "var(--svg-purple)" })}
          <!-- Labels -->
          ${s(102, 70, t("Hydrophilic head", "親水頭部"), { size: 10.5, fill: "var(--svg-blue)", bold: true })}
          <rect x="44" y="135" width="116" height="19" rx="5" fill="var(--svg-bg)" opacity="0.92" stroke="var(--svg-amber)" stroke-width="1"/>
          ${s(102, 148, t("Hydrophobic tails", "疏水尾部"), { size: 10, fill: "var(--svg-amber)", bold: true })}
          <path d="M555,60 L555,222" stroke="var(--svg-teal)" stroke-width="2"/>
          <polygon points="555,226 550,216 560,216" fill="var(--svg-teal)"/>
          ${s(555, 242, t("O2 / CO2 / Lipids", "O2／CO2／脂溶性"), { size: 10, bold: true, fill: "var(--svg-teal)" })}
        </svg>`;
      }

      case "diag-enzyme":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          <!-- Left: Temperature -->
          ${s(160, 22, t("Effect of Temperature", "溫度對酶活性的影響"), { size: 13, bold: true })}
          <line x1="45" y1="220" x2="295" y2="220" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="45" y1="220" x2="45" y2="42" stroke="var(--svg-axis)" stroke-width="2"/>
          <path d="M50,212 Q145,190 198,66 Q226,80 245,218" fill="none" stroke="var(--svg-green)" stroke-width="3"/>
          <line x1="198" y1="66" x2="198" y2="220" stroke="var(--svg-amber)" stroke-dasharray="4,4" stroke-width="1.5"/>
          ${s(198, 56, t("Optimum Temp", "最適溫度"), { size: 10.5, bold: true, fill: "var(--svg-amber)" })}
          ${s(95, 162, t("Inactive at low T", "低溫不活躍"), { size: 10, fill: "var(--svg-blue)" })}
          ${s(254, 130, t("Denatured!", "高溫變性!"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(170, 244, t("Temperature (°C)", "溫度 (°C)"), { size: 11, fill: "var(--svg-muted)" })}
          ${s(22, 130, t("Rate", "速率"), { size: 11, fill: "var(--svg-muted)" })}

          <!-- Right: Inhibitors -->
          ${s(475, 22, t("Enzyme Inhibition vs [Substrate]", "競爭性 vs 非競爭性抑制"), { size: 13, bold: true })}
          <line x1="355" y1="220" x2="615" y2="220" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="355" y1="220" x2="355" y2="42" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="355" y1="68" x2="605" y2="68" stroke="var(--svg-grid)" stroke-dasharray="4,4"/>
          ${s(344, 72, "Vmax", { size: 10, fill: "var(--svg-muted)", anchor: "end" })}
          <path d="M355,220 Q395,72 600,68" fill="none" stroke="var(--svg-green)" stroke-width="2.8"/>
          <path d="M355,220 Q455,112 600,74" fill="none" stroke="var(--svg-blue)" stroke-width="2.5" stroke-dasharray="7,4"/>
          <path d="M355,220 Q415,154 600,152" fill="none" stroke="var(--svg-red)" stroke-width="2.8"/>
          ${s(528, 56, t("No inhibitor", "無抑制劑"), { size: 10, bold: true, fill: "var(--svg-green)" })}
          ${s(528, 122, t("Competitive (same Vmax)", "競爭性（可克服）"), { size: 9.8, bold: true, fill: "var(--svg-blue)" })}
          ${s(516, 174, t("Non-competitive (lower Vmax)", "非競爭性（不可克服）"), { size: 9.8, bold: true, fill: "var(--svg-red)" })}
          ${s(485, 244, t("Substrate Concentration [S]", "受質濃度 [S]"), { size: 11, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-villus-digestion":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          ${s(320, 24, t("Structure of Intestinal Villus & Absorption Pathways", "小腸絨毛結構與兩大吸收途徑"), { size: 14, bold: true })}
          <!-- Villus outer epithelium -->
          <path d="M120,245 L120,105 Q120,42 185,42 Q250,42 250,105 L250,245" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="3"/>
          <path d="M134,245 L134,110 Q134,58 185,58 Q236,58 236,110 L236,245" fill="var(--svg-bg)" stroke="var(--svg-amber)" stroke-width="1.5"/>
          <!-- Lacteal -->
          <path d="M177,245 L177,92 Q177,78 185,78 Q193,78 193,92 L193,245" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2.2"/>
          <!-- Capillaries -->
          <path d="M150,245 L150,105 Q150,72 185,68 Q220,72 220,105 L220,245" fill="none" stroke="var(--svg-red)" stroke-width="2.5"/>
          <path d="M150,145 Q185,130 220,145 M150,185 Q185,170 220,185" fill="none" stroke="var(--svg-blue)" stroke-width="1.8" stroke-dasharray="4,3"/>
          ${s(62, 85, t("1-cell thick", "單層上皮"), { size: 10.5, bold: true, fill: "var(--svg-amber)" })}
          ${s(62, 100, t("+ microvilli", "+ 微絨毛"), { size: 10, fill: "var(--svg-amber)" })}
          <line x1="95" y1="90" x2="122" y2="90" stroke="var(--svg-amber)" stroke-width="1.5"/>

          <!-- Pathways box right -->
          <rect x="295" y="54" width="320" height="82" rx="10" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="1.8"/>
          ${s(310, 76, t("1. Blood Capillaries (Water-soluble)", "1. 微血管（水溶性養分）"), { size: 12, bold: true, fill: "var(--svg-red)", anchor: "start" })}
          ${s(310, 96, t("Glucose, Amino acids, Vit B/C, Minerals, Water", "葡萄糖、氨基酸、維生素 B/C、礦物質、水"), { size: 10.5, anchor: "start" })}
          ${s(310, 118, t("→ Hepatic Portal Vein → Liver → Heart", "→ 肝門靜脈 → 肝臟 → 心臟"), { size: 11, bold: true, fill: "var(--svg-red)", anchor: "start" })}

          <rect x="295" y="152" width="320" height="82" rx="10" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="1.8"/>
          ${s(310, 174, t("2. Lacteal (Lipid-soluble)", "2. 乳糜管（脂溶性養分）"), { size: 12, bold: true, fill: "var(--svg-green)", anchor: "start" })}
          ${s(310, 194, t("Fatty acids + Glycerol → Lipid droplets + Vit A/D/E/K", "脂肪酸＋甘油重組脂質微滴 ＋ 維生素 A/D/E/K"), { size: 10.5, anchor: "start" })}
          ${s(310, 216, t("→ Lymph Vessels → Subclavian Vein → Blood", "→ 淋巴管 → 鎖骨下靜脈 → 血液循環"), { size: 11, bold: true, fill: "var(--svg-green)", anchor: "start" })}
        </svg>`;

      case "diag-alveolus":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Gas Exchange at Alveolus & Blood Capillary", "氣囊與微血管之間的氣體交換"), { size: 14, bold: true })}
          <!-- Alveolus sac -->
          <circle cx="215" cy="145" r="82" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="3"/>
          <circle cx="215" cy="145" r="74" fill="none" stroke="var(--svg-teal)" stroke-width="2" stroke-dasharray="6,3"/>
          ${s(215, 128, t("Alveolar Air Space", "氣囊內空氣"), { size: 12, bold: true, fill: "var(--svg-blue)" })}
          ${s(215, 148, t("High O2 · Low CO2", "高 O2 · 低 CO2"), { size: 11, fill: "var(--svg-ink)" })}
          ${s(215, 170, t("Thin water film", "薄水膜溶解氣體"), { size: 10, fill: "var(--svg-teal)", bold: true })}
          <!-- Capillary -->
          <path d="M350,48 Q312,145 350,242 L392,242 Q354,145 392,48 Z" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="2.4"/>
          <ellipse cx="358" cy="108" rx="11" ry="7" fill="var(--svg-red)" opacity="0.85"/>
          <ellipse cx="352" cy="148" rx="11" ry="7" fill="var(--svg-red)" opacity="0.85"/>
          <ellipse cx="362" cy="190" rx="11" ry="7" fill="var(--svg-red)" opacity="0.85"/>
          <!-- Diffusion Arrows -->
          <line x1="286" y1="126" x2="342" y2="126" stroke="var(--svg-red)" stroke-width="3"/>
          <polygon points="346,126 336,120 336,132" fill="var(--svg-red)"/>
          ${s(315, 118, "O2", { size: 12, bold: true, fill: "var(--svg-red)" })}
          <line x1="342" y1="166" x2="286" y2="166" stroke="var(--svg-purple)" stroke-width="3"/>
          <polygon points="282,166 292,160 292,172" fill="var(--svg-purple)"/>
          ${s(315, 184, "CO2", { size: 12, bold: true, fill: "var(--svg-purple)" })}
          <!-- Key points right -->
          <rect x="422" y="54" width="200" height="176" rx="10" fill="var(--svg-bg)" stroke="var(--svg-grid)" stroke-width="1.6"/>
          ${s(434, 78, t("4 Key Adaptations:", "四大適應特徵："), { size: 12, bold: true, fill: "var(--svg-green)", anchor: "start" })}
          ${s(434, 104, t("1. Millions → huge SA", "1. 數百萬氣囊 → 極大表面積"), { size: 10.5, anchor: "start" })}
          ${s(434, 128, t("2. 1-cell thick walls", "2. 氣囊及微血管壁單層細胞"), { size: 10.5, anchor: "start" })}
          ${s(434, 152, t("3. Moist water film", "3. 濕潤水膜溶解氣體"), { size: 10.5, anchor: "start" })}
          ${s(434, 176, t("4. Dense capillaries +", "4. 密佈微血管＋持續通氣"), { size: 10.5, anchor: "start" })}
          ${s(446, 193, t("ventilation → steep grad.", "→ 維持陡峭濃度梯度"), { size: 10.5, anchor: "start", fill: "var(--svg-blue)" })}
          ${s(372, 42, t("From Pulmonary Artery", "來自肺動脈（缺氧）"), { size: 10, fill: "var(--svg-blue)", bold: true })}
          ${s(372, 257, t("To Pulmonary Vein (OxyHb)", "往肺靜脈（含氧）"), { size: 10, fill: "var(--svg-red)", bold: true })}
        </svg>`;

      case "diag-heart":
        return `<svg viewBox="0 0 640 275">
          <rect width="640" height="275" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Human Double Circulation & 4-Chambered Heart", "人體雙循環與四腔室心臟"), { size: 14, bold: true })}
          <!-- Lungs top -->
          <rect x="245" y="38" width="150" height="36" rx="18" fill="var(--svg-fill-teal)" stroke="var(--svg-teal)" stroke-width="2"/>
          ${s(320, 61, t("LUNGS (Gas Exchange)", "肺部（氣體交換）"), { size: 11.5, bold: true, fill: "var(--svg-teal)" })}
          <!-- Heart 4 chambers -->
          <rect x="220" y="102" width="96" height="46" rx="8" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2.2"/>
          ${s(268, 129, t("Right Atrium", "右心房"), { size: 11, bold: true, fill: "var(--svg-blue)" })}
          <rect x="324" y="102" width="96" height="46" rx="8" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="2.2"/>
          ${s(372, 129, t("Left Atrium", "左心房"), { size: 11, bold: true, fill: "var(--svg-red)" })}
          <rect x="220" y="156" width="96" height="54" rx="8" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2.5"/>
          ${s(268, 181, t("Right Ventricle", "右心室"), { size: 11, bold: true, fill: "var(--svg-blue)" })}
          ${s(268, 197, t("(thinner wall)", "（壁較薄）"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="324" y="156" width="96" height="54" rx="8" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="4.5"/>
          ${s(372, 181, t("Left Ventricle", "左心室"), { size: 11, bold: true, fill: "var(--svg-red)" })}
          ${s(372, 197, t("(THICKEST wall)", "（壁最厚！）"), { size: 9.5, bold: true, fill: "var(--svg-red)" })}
          <!-- Body bottom -->
          <rect x="225" y="232" width="190" height="34" rx="16" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="2"/>
          ${s(320, 253, t("BODY TISSUES (Respiration)", "全身組織（細胞呼吸）"), { size: 11.5, bold: true, fill: "var(--svg-amber)" })}
          <!-- Circuits -->
          <path d="M220,184 L125,184 L125,56 L245,56" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
          <polygon points="245,56 235,51 235,61" fill="var(--svg-blue)"/>
          ${s(110, 108, t("Pulmonary Artery", "肺動脈"), { size: 10.5, bold: true, fill: "var(--svg-blue)", anchor: "end" })}
          ${s(110, 123, t("(Deoxygenated)", "（缺氧血）"), { size: 9.5, fill: "var(--svg-muted)", anchor: "end" })}

          <path d="M395,56 L515,56 L515,122 L420,122" fill="none" stroke="var(--svg-red)" stroke-width="2.6"/>
          <polygon points="420,122 430,117 430,127" fill="var(--svg-red)"/>
          ${s(528, 86, t("Pulmonary Vein", "肺靜脈"), { size: 10.5, bold: true, fill: "var(--svg-red)", anchor: "start" })}
          ${s(528, 101, t("(Oxygenated)", "（含氧血）"), { size: 9.5, fill: "var(--svg-muted)", anchor: "start" })}

          <path d="M420,186 L515,186 L515,249 L415,249" fill="none" stroke="var(--svg-red)" stroke-width="3"/>
          <polygon points="415,249 425,244 425,254" fill="var(--svg-red)"/>
          ${s(528, 212, t("Aorta (High P)", "主動脈（高壓）"), { size: 10.5, bold: true, fill: "var(--svg-red)", anchor: "start" })}

          <path d="M225,249 L125,249 L125,122 L220,122" fill="none" stroke="var(--svg-blue)" stroke-width="2.6"/>
          <polygon points="220,122 210,117 210,127" fill="var(--svg-blue)"/>
          ${s(110, 214, t("Vena Cava", "大靜脈"), { size: 10.5, bold: true, fill: "var(--svg-blue)", anchor: "end" })}
        </svg>`;

      case "diag-leaf-transpiration":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Dicot Leaf Cross-Section & Transpiration Stream", "雙子葉植物葉片橫切面與蒸騰途徑"), { size: 14, bold: true })}
          <!-- Cuticle & Upper Epidermis -->
          <rect x="60" y="42" width="380" height="10" fill="var(--svg-amber)" opacity="0.5"/>
          <rect x="60" y="52" width="380" height="22" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="1.5"/>
          <!-- Palisade -->
          <rect x="60" y="74" width="380" height="58" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="1.8"/>
          ${s(250, 108, t("Palisade Mesophyll (abundant chloroplasts)", "柵狀葉肉（密佈葉綠體）"), { size: 11.5, bold: true, fill: "var(--svg-green)" })}
          <!-- Spongy + Vein -->
          <rect x="60" y="132" width="380" height="72" fill="var(--svg-bg)" stroke="var(--svg-green)" stroke-width="1.5"/>
          <circle cx="110" cy="168" r="18" fill="var(--svg-fill-green)" stroke="var(--svg-green)"/>
          <circle cx="172" cy="158" r="16" fill="var(--svg-fill-green)" stroke="var(--svg-green)"/>
          <circle cx="385" cy="166" r="18" fill="var(--svg-fill-green)" stroke="var(--svg-green)"/>
          <!-- Vascular Bundle -->
          <circle cx="275" cy="168" r="30" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2"/>
          <line x1="245" y1="168" x2="305" y2="168" stroke="var(--svg-blue)" stroke-width="1.5"/>
          ${s(275, 160, t("Xylem (top)", "木質部(上)"), { size: 10, bold: true, fill: "var(--svg-blue)" })}
          ${s(275, 183, t("Phloem (bot)", "韌皮部(下)"), { size: 10, bold: true, fill: "var(--svg-purple)" })}
          ${s(155, 195, t("Air spaces (gas diffusion)", "氣室（利氣體擴散）"), { size: 10, fill: "var(--svg-muted)" })}
          <!-- Lower Epidermis & Stoma -->
          <rect x="60" y="204" width="140" height="20" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="1.5"/>
          <rect x="240" y="204" width="200" height="20" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="1.5"/>
          <ellipse cx="204" cy="214" rx="8" ry="11" fill="var(--svg-green)"/>
          <ellipse cx="236" cy="214" rx="8" ry="11" fill="var(--svg-green)"/>
          <path d="M220,188 L220,250" stroke="var(--svg-blue)" stroke-width="2.5" stroke-dasharray="4,3"/>
          <polygon points="220,254 215,244 225,244" fill="var(--svg-blue)"/>
          ${s(220, 265, t("H2O vapour diffuses out via Stoma", "水汽經氣孔擴散散失"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          <!-- Right labels -->
          ${s(455, 51, t("← Waxy cuticle (waterproof)", "← 蠟質角質層（防水）"), { size: 10.5, anchor: "start", fill: "var(--svg-amber)", bold: true })}
          ${s(455, 68, t("← Upper epidermis (transparent)", "← 上表皮（透明透光）"), { size: 10.5, anchor: "start" })}
          ${s(455, 108, t("← Main photosynthesis site", "← 主要光合作用層"), { size: 10.5, anchor: "start", fill: "var(--svg-green)", bold: true })}
          ${s(455, 168, t("← Spongy mesophyll + Vein", "← 海綿葉肉＋葉脈"), { size: 10.5, anchor: "start" })}
          ${s(455, 218, t("← Guard cells & Stoma", "← 保衛細胞與氣孔"), { size: 10.5, anchor: "start", fill: "var(--svg-green)", bold: true })}
        </svg>`;

      case "diag-cell-division":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          <!-- Left: Mitosis DNA -->
          ${s(165, 22, t("Mitosis: DNA Content per Cell", "有絲分裂：細胞 DNA 含量"), { size: 13, bold: true, fill: "var(--svg-green)" })}
          <line x1="48" y1="220" x2="292" y2="220" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="48" y1="220" x2="48" y2="46" stroke="var(--svg-axis)" stroke-width="2"/>
          ${s(36, 175, "1x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          ${s(36, 130, "2x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          ${s(36, 65, "4x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          <polyline points="52,130 98,130 148,65 215,65 218,130 285,130" fill="none" stroke="var(--svg-green)" stroke-width="3"/>
          ${s(125, 86, t("DNA rep.", "DNA複製"), { size: 10, fill: "var(--svg-blue)", bold: true })}
          ${s(248, 92, t("Cytokinesis", "細胞質分裂"), { size: 10, fill: "var(--svg-red)", bold: true })}
          ${s(252, 148, t("2x (Diploid)", "2x (二倍體)"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          ${s(170, 245, t("Time", "時間"), { size: 11, fill: "var(--svg-muted)" })}

          <!-- Right: Meiosis DNA -->
          ${s(475, 22, t("Meiosis: DNA Content per Cell", "減數分裂：細胞 DNA 含量"), { size: 13, bold: true, fill: "var(--svg-purple)" })}
          <line x1="358" y1="220" x2="612" y2="220" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="358" y1="220" x2="358" y2="46" stroke="var(--svg-axis)" stroke-width="2"/>
          ${s(348, 175, "1x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          ${s(348, 130, "2x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          ${s(348, 65, "4x", { size: 10, anchor: "end", fill: "var(--svg-muted)" })}
          <polyline points="362,130 398,130 438,65 492,65 495,130 548,130 551,175 606,175" fill="none" stroke="var(--svg-purple)" stroke-width="3"/>
          ${s(494, 52, t("Meiosis I", "減數分裂 I"), { size: 10, bold: true, fill: "var(--svg-purple)" })}
          ${s(552, 118, t("Meiosis II", "減數分裂 II"), { size: 10, bold: true, fill: "var(--svg-red)" })}
          ${s(578, 195, t("1x (Haploid n)", "1x (單倍體 n)"), { size: 10.5, bold: true, fill: "var(--svg-purple)" })}
          ${s(485, 245, t("Time", "時間"), { size: 11, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-reflex-synapse":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Reflex Arc Pathway & Chemical Synapse Transmission", "反射弧路徑與突觸化學傳遞"), { size: 14, bold: true })}
          <!-- Top: Reflex Arc Flow -->
          <rect x="20" y="42" width="102" height="44" rx="8" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="2"/>
          ${s(71, 68, t("Receptor", "感受器"), { size: 11, bold: true })}
          <rect x="148" y="42" width="112" height="44" rx="8" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2"/>
          ${s(204, 62, t("Sensory", "感覺神經元"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(204, 77, t("(Dorsal root)", "(背根)"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="286" y="42" width="106" height="44" rx="8" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)" stroke-width="2"/>
          ${s(339, 62, t("Interneurone", "中間神經元"), { size: 10.5, bold: true, fill: "var(--svg-purple)" })}
          ${s(339, 77, t("(Spinal cord)", "(脊髓灰質)"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="418" y="42" width="102" height="44" rx="8" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2"/>
          ${s(469, 62, t("Motor", "運動神經元"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          ${s(469, 77, t("(Ventral root)", "(腹根)"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="542" y="42" width="84" height="44" rx="8" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="2"/>
          ${s(584, 68, t("Effector", "效應器"), { size: 11, bold: true, fill: "var(--svg-red)" })}
          <line x1="122" y1="64" x2="146" y2="64" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="148,64 140,60 140,68" fill="var(--svg-ink)"/>
          <line x1="260" y1="64" x2="284" y2="64" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="286,64 278,60 278,68" fill="var(--svg-ink)"/>
          <line x1="392" y1="64" x2="416" y2="64" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="418,64 410,60 410,68" fill="var(--svg-ink)"/>
          <line x1="520" y1="64" x2="540" y2="64" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="542,64 534,60 534,68" fill="var(--svg-ink)"/>

          <!-- Bottom: Zoomed Synapse -->
          <rect x="40" y="106" width="560" height="145" rx="12" fill="var(--svg-bg)" stroke="var(--svg-grid)" stroke-width="1.6"/>
          ${s(320, 125, t("Zoomed Synapse (Unidirectional Transmission)", "突觸放大圖（確保單向傳遞）"), { size: 12, bold: true, fill: "var(--svg-purple)" })}
          <path d="M62,162 L210,162 Q252,162 252,190 Q252,218 210,218 L62,218" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2.2"/>
          <circle cx="215" cy="182" r="9" fill="var(--svg-amber)"/><circle cx="230" cy="198" r="9" fill="var(--svg-amber)"/>
          <circle cx="268" cy="176" r="4" fill="var(--svg-red)"/><circle cx="276" cy="190" r="4" fill="var(--svg-red)"/><circle cx="266" cy="204" r="4" fill="var(--svg-red)"/>
          <path d="M365,162 L308,162 Q290,162 290,190 Q290,218 308,218 L365,218" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2.2"/>
          <rect x="285" y="172" width="8" height="10" fill="var(--svg-red)"/><rect x="285" y="196" width="8" height="10" fill="var(--svg-red)"/>
          ${s(145, 194, t("Synaptic Knob (Vesicles)", "突觸小體（小泡）"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(272, 236, t("Synaptic Cleft", "突觸間隙"), { size: 10, bold: true, fill: "var(--svg-red)" })}
          ${s(385, 174, t("1. Vesicles release neurotransmitters", "1. 小泡釋放神經遞質"), { size: 10.5, anchor: "start" })}
          ${s(385, 194, t("2. Diffuse across cleft", "2. 經擴散橫越突觸間隙"), { size: 10.5, anchor: "start" })}
          ${s(385, 214, t("3. Bind specific receptors → new impulse", "3. 結合特定受體引發新脈衝"), { size: 10.5, anchor: "start", fill: "var(--svg-green)", bold: true })}
        </svg>`;

      case "diag-glucose-feedback":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Negative Feedback Control of Blood Glucose", "血糖水平的負反饋調節機制"), { size: 14, bold: true })}
          <!-- Normal Center -->
          <rect x="235" y="114" width="170" height="40" rx="20" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="2.4"/>
          ${s(320, 139, t("Normal Blood Glucose", "正常血糖水平"), { size: 12, bold: true, fill: "var(--svg-green)" })}
          <!-- High Loop Top -->
          <rect x="35" y="42" width="165" height="44" rx="8" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="1.8"/>
          ${s(117, 61, t("Blood Glucose RISES", "血糖上升（如餐後）"), { size: 11, bold: true, fill: "var(--svg-red)" })}
          ${s(117, 77, t("(e.g. after meal)", ""), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="235" y="42" width="170" height="44" rx="8" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="1.8"/>
          ${s(320, 61, t("Pancreas: MORE Insulin", "胰臟：分泌較多胰島素"), { size: 11, bold: true, fill: "var(--svg-blue)" })}
          ${s(320, 77, t("(less glucagon)", "（較少高血糖素）"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="435" y="42" width="180" height="44" rx="8" fill="var(--svg-fill-teal)" stroke="var(--svg-teal)" stroke-width="1.8"/>
          ${s(525, 60, t("Liver/Muscles: Glucose →", "肝及肌：葡萄糖 → 糖原"), { size: 10.5, bold: true, fill: "var(--svg-teal)" })}
          ${s(525, 76, t("Glycogen + More uptake", "＋細胞攝糖氧化↑ → 回降"), { size: 9.5 })}
          <line x1="200" y1="64" x2="233" y2="64" stroke="var(--svg-red)" stroke-width="2"/><polygon points="235,64 227,60 227,68" fill="var(--svg-red)"/>
          <line x1="405" y1="64" x2="433" y2="64" stroke="var(--svg-blue)" stroke-width="2"/><polygon points="435,64 427,60 427,68" fill="var(--svg-blue)"/>
          <path d="M525,86 L525,134 L407,134" fill="none" stroke="var(--svg-green)" stroke-width="2"/><polygon points="405,134 414,129 414,139" fill="var(--svg-green)"/>

          <!-- Low Loop Bottom -->
          <rect x="35" y="182" width="165" height="44" rx="8" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="1.8"/>
          ${s(117, 201, t("Blood Glucose FALLS", "血糖下降（如空腹／運動）"), { size: 11, bold: true, fill: "var(--svg-amber)" })}
          ${s(117, 217, t("(e.g. fasting/exercise)", ""), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="235" y="182" width="170" height="44" rx="8" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)" stroke-width="1.8"/>
          ${s(320, 201, t("Pancreas: MORE Glucagon", "胰臟：分泌較多高血糖素"), { size: 11, bold: true, fill: "var(--svg-purple)" })}
          ${s(320, 217, t("(less insulin)", "（較少胰島素）"), { size: 9.5, fill: "var(--svg-muted)" })}
          <rect x="435" y="182" width="180" height="44" rx="8" fill="var(--svg-fill-teal)" stroke="var(--svg-teal)" stroke-width="1.8"/>
          ${s(525, 200, t("Liver: Glycogen →", "肝臟：糖原分解 → 葡萄糖"), { size: 10.5, bold: true, fill: "var(--svg-teal)" })}
          ${s(525, 216, t("Glucose released → Rises", "釋入血液 → 回升正常"), { size: 9.5 })}
          <line x1="200" y1="204" x2="233" y2="204" stroke="var(--svg-amber)" stroke-width="2"/><polygon points="235,204 227,200 227,208" fill="var(--svg-amber)"/>
          <line x1="405" y1="204" x2="433" y2="204" stroke="var(--svg-purple)" stroke-width="2"/><polygon points="435,204 427,200 427,208" fill="var(--svg-purple)"/>
          <path d="M525,182 L525,140 L407,140" fill="none" stroke="var(--svg-green)" stroke-width="2"/>
        </svg>`;

      case "diag-photosynthesis":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Two Stages of Photosynthesis in Chloroplast", "葉綠體內光合作用兩大階段"), { size: 14, bold: true })}
          <rect x="28" y="38" width="584" height="210" rx="22" fill="var(--svg-fill-green)" opacity="0.45" stroke="var(--svg-green)" stroke-width="2.2"/>
          <!-- Stage 1 -->
          <rect x="52" y="64" width="215" height="162" rx="14" fill="var(--svg-bg)" stroke="var(--svg-green)" stroke-width="2"/>
          ${s(160, 86, t("1. Photochemical Reactions", "1. 光化學反應（須光）"), { size: 12, bold: true, fill: "var(--svg-green)" })}
          ${s(160, 104, t("(Thylakoid membranes / Grana)", "（類囊體膜／基粒）"), { size: 10, fill: "var(--svg-muted)" })}
          ${s(160, 132, t("☀ Light + Chlorophyll", "☀ 光能 ＋ 葉綠素"), { size: 11, bold: true, fill: "var(--svg-amber)" })}
          ${s(160, 156, t("H2O → Photolysis → O2 ↑", "H2O → 光解 → O2 釋出"), { size: 11, bold: true, fill: "var(--svg-blue)" })}
          ${s(160, 180, t("Produces ATP & NADPH", "產生 ATP 及 NADPH"), { size: 11, fill: "var(--svg-ink)" })}
          <!-- Stage 2 -->
          <rect x="368" y="64" width="222" height="162" rx="14" fill="var(--svg-bg)" stroke="var(--svg-purple)" stroke-width="2"/>
          ${s(479, 86, t("2. Calvin Cycle", "2. 卡爾文循環（酶促）"), { size: 12, bold: true, fill: "var(--svg-purple)" })}
          ${s(479, 104, t("(Stroma of Chloroplast)", "（葉綠體基質）"), { size: 10, fill: "var(--svg-muted)" })}
          ${s(479, 132, t("CO2 + 5-C (RuBP) → 3-C (GP)", "CO2 ＋ 5-C → 3-C 化合物"), { size: 10.5, bold: true })}
          ${s(479, 156, t("3-C → Triose Phosphate (3-C)", "耗 ATP/NADPH 還原→磷酸丙糖"), { size: 10.5, fill: "var(--svg-purple)" })}
          ${s(479, 182, t("→ Glucose / Starch / Sucrose", "→ 合成葡萄糖／澱粉／蔗糖"), { size: 11, bold: true, fill: "var(--svg-green)" })}
          ${s(479, 204, t("+ Regenerates 5-C compound", "＋ 再生 5-C 維持循環"), { size: 10, fill: "var(--svg-muted)" })}
          <!-- Coupling arrows -->
          <line x1="268" y1="118" x2="365" y2="118" stroke="var(--svg-red)" stroke-width="2.8"/>
          <polygon points="368,118 358,113 358,123" fill="var(--svg-red)"/>
          ${s(317, 110, "ATP, NADPH", { size: 11, bold: true, fill: "var(--svg-red)" })}
          <line x1="368" y1="172" x2="271" y2="172" stroke="var(--svg-blue)" stroke-width="2.4" stroke-dasharray="5,3"/>
          <polygon points="268,172 278,167 278,177" fill="var(--svg-blue)"/>
          ${s(317, 192, "ADP+Pi, NADP", { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
        </svg>`;

      case "diag-respiration":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Aerobic vs Anaerobic Cellular Respiration", "需氧呼吸與缺氧呼吸全路徑"), { size: 14, bold: true })}
          <!-- Cytoplasm -->
          <rect x="24" y="42" width="185" height="202" rx="12" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="2"/>
          ${s(116, 62, t("Cytoplasm (No O2)", "細胞質（不需氧）"), { size: 11.5, bold: true, fill: "var(--svg-amber)" })}
          ${s(116, 88, t("Glucose (6-C)", "葡萄糖 (6-C)"), { size: 11, bold: true })}
          ${s(116, 108, "↓ " + t("Glycolysis", "糖酵解"), { size: 10.5, fill: "var(--svg-ink)" })}
          ${s(116, 128, t("2 Pyruvate (3-C)", "2 丙酮酸 (3-C)"), { size: 11, bold: true, fill: "var(--svg-red)" })}
          ${s(116, 146, "+ net 2 ATP + 2 NADH", { size: 10, fill: "var(--svg-green)", bold: true })}
          <rect x="36" y="168" width="161" height="64" rx="8" fill="var(--svg-bg)" stroke="var(--svg-red)" stroke-dasharray="4,3"/>
          ${s(116, 186, t("Anaerobic (No O2):", "缺氧分支："), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(116, 204, t("Yeast: Ethanol + CO2", "酵母：乙醇 ＋ CO2"), { size: 10 })}
          ${s(116, 220, t("Muscle: Lactic acid", "肌肉：乳酸（無CO2）"), { size: 10 })}

          <!-- Mitochondrion -->
          <rect x="234" y="42" width="382" height="202" rx="22" fill="var(--svg-fill-blue)" opacity="0.45" stroke="var(--svg-blue)" stroke-width="2.4"/>
          ${s(425, 62, t("Mitochondrion (Aerobic — O2 Present)", "線粒體（需氧呼吸）"), { size: 12, bold: true, fill: "var(--svg-blue)" })}
          <rect x="252" y="78" width="155" height="148" rx="10" fill="var(--svg-bg)" stroke="var(--svg-purple)" stroke-width="1.8"/>
          ${s(329, 98, t("Matrix", "線粒體基質"), { size: 11, bold: true, fill: "var(--svg-purple)" })}
          ${s(329, 122, t("Link Reaction:", "連接反應："), { size: 10.5, bold: true })}
          ${s(329, 138, "Pyruvate → Acetyl-CoA + CO2", { size: 9.5 })}
          ${s(329, 164, t("Krebs Cycle:", "克雷伯氏循環："), { size: 10.5, bold: true })}
          ${s(329, 182, "CO2 + 2 ATP", { size: 10 })}
          ${s(329, 200, "+ NADH & FADH2", { size: 10.5, bold: true, fill: "var(--svg-purple)" })}

          <rect x="430" y="78" width="170" height="148" rx="10" fill="var(--svg-bg)" stroke="var(--svg-green)" stroke-width="2"/>
          ${s(515, 98, t("Inner Membrane (Cristae)", "線粒體內膜（嵴）"), { size: 11, bold: true, fill: "var(--svg-green)" })}
          ${s(515, 124, t("Oxidative Phosphorylation", "氧化磷酸化"), { size: 10.5, bold: true })}
          ${s(515, 148, t("Electron Transport Chain", "電子傳遞鏈"), { size: 10 })}
          ${s(515, 174, t("O2 (final acceptor) → H2O", "O2 最終受體 → H2O"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(515, 202, t("~28–34 ATP (Most ATP!)", "~28–34 ATP（最多能量!）"), { size: 11, bold: true, fill: "var(--svg-red)" })}

          <line x1="209" y1="128" x2="250" y2="128" stroke="var(--svg-blue)" stroke-width="2.5"/><polygon points="252,128 244,124 244,132" fill="var(--svg-blue)"/>
          <line x1="407" y1="150" x2="428" y2="150" stroke="var(--svg-purple)" stroke-width="2.5"/><polygon points="430,150 422,146 422,154" fill="var(--svg-purple)"/>
        </svg>`;

      case "diag-immunity":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Primary vs Secondary Immune Response", "初次與再次免疫反應抗體濃度曲線"), { size: 14, bold: true })}
          <line x1="64" y1="215" x2="600" y2="215" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="64" y1="215" x2="64" y2="42" stroke="var(--svg-axis)" stroke-width="2"/>
          <!-- Primary X -->
          <path d="M98,214 L132,214 Q165,148 190,148 Q225,148 285,204 L340,210" fill="none" stroke="var(--svg-blue)" stroke-width="3"/>
          <!-- Secondary X -->
          <path d="M340,210 L352,208 Q372,56 410,56 Q485,56 592,102" fill="none" stroke="var(--svg-green)" stroke-width="3.4"/>
          <!-- Primary Y (new antigen) -->
          <path d="M340,214 L378,214 Q410,152 435,152 Q470,152 525,205" fill="none" stroke="var(--svg-amber)" stroke-width="2.4" stroke-dasharray="6,3"/>
          <!-- Injection markers -->
          <line x1="98" y1="215" x2="98" y2="226" stroke="var(--svg-red)" stroke-width="2.5"/>
          ${s(98, 240, t("1st exposure (X)", "首次接觸抗原 X"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          <line x1="340" y1="215" x2="340" y2="226" stroke="var(--svg-red)" stroke-width="2.5"/>
          ${s(340, 240, t("2nd exposure (X + new Y)", "再次接觸 X ＋ 新抗原 Y"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          ${s(190, 136, t("Primary (Anti-X)", "初次反應 (抗-X)"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(460, 48, t("Secondary (Anti-X): Faster, Higher, Longer!", "再次反應 (抗-X)：極快、超高、持久!"), { size: 11, bold: true, fill: "var(--svg-green)" })}
          ${s(452, 144, t("Primary (Anti-Y)", "初次反應 (抗-Y)"), { size: 10, bold: true, fill: "var(--svg-amber)" })}
          ${s(24, 130, t("Antibody", "抗體濃度"), { size: 11, fill: "var(--svg-muted)" })}
          ${s(575, 240, t("Time (days)", "時間"), { size: 11, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-nephron":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Structure of Nephron & Urine Formation (E1)", "腎元結構與尿液形成機制 (E1)"), { size: 14, bold: true })}
          <!-- Glomerulus & Bowman's -->
          <path d="M40,95 L105,95" stroke="var(--svg-red)" stroke-width="6"/>
          <path d="M128,74 L185,52" stroke="var(--svg-red)" stroke-width="2.8"/>
          <circle cx="115" cy="95" r="22" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="2.2"/>
          <path d="M120,64 A36,36 0 1,0 120,126" fill="none" stroke="var(--svg-amber)" stroke-width="4"/>
          ${s(68, 82, t("Afferent (Wider)", "入球(較粗)"), { size: 9.5, bold: true, fill: "var(--svg-red)" })}
          ${s(168, 46, t("Efferent (Narrower)", "出球(較幼)"), { size: 9.5, bold: true, fill: "var(--svg-red)" })}
          ${s(112, 146, t("1. Ultrafiltration", "1. 超濾作用"), { size: 10.5, bold: true, fill: "var(--svg-amber)" })}
          ${s(112, 160, t("(High hydrostatic P)", "（高液體靜壓）"), { size: 9.5, fill: "var(--svg-muted)" })}
          <!-- PCT -> Loop -> DCT -> Collecting Duct -->
          <path d="M148,108 Q195,92 225,112 Q255,130 278,108 L278,225 Q298,242 318,225 L318,108 Q355,92 395,112 L462,112 L462,242" fill="none" stroke="var(--svg-teal)" stroke-width="9" stroke-linecap="round"/>
          <path d="M148,108 Q195,92 225,112 Q255,130 278,108 L278,225 Q298,242 318,225 L318,108 Q355,92 395,112 L462,112 L462,242" fill="none" stroke="var(--svg-bg)" stroke-width="5" stroke-linecap="round"/>
          ${s(220, 82, t("2. PCT: 100% Glucose,", "2. 近曲小管：100% 葡萄糖"), { size: 10, bold: true, fill: "var(--svg-green)" })}
          ${s(220, 95, t("Amino acids + ~80% H2O", "氨基酸 ＋ ~80% 水重吸收"), { size: 9.5, fill: "var(--svg-green)" })}
          ${s(298, 256, t("Loop of Henle", "亨利氏套"), { size: 10, bold: true, fill: "var(--svg-teal)" })}
          ${s(385, 92, t("DCT", "遠曲小管"), { size: 10, bold: true, fill: "var(--svg-teal)" })}
          <!-- Collecting Duct + ADH -->
          <rect x="492" y="106" width="132" height="106" rx="10" fill="var(--svg-fill-purple)" stroke="var(--svg-purple)" stroke-width="1.8"/>
          ${s(558, 128, t("3. Collecting Duct", "3. 集尿管"), { size: 11, bold: true, fill: "var(--svg-purple)" })}
          ${s(558, 148, t("More ADH →", "ADH 增加 →"), { size: 10.5, bold: true })}
          ${s(558, 166, t("↑ Permeability to H2O", "對水透性↑"), { size: 10 })}
          ${s(558, 184, t("→ More H2O reabsorbed", "→ 更多水重吸收"), { size: 10, fill: "var(--svg-blue)" })}
          ${s(558, 201, t("→ Concentrated urine", "→ 少量濃尿"), { size: 10, bold: true, fill: "var(--svg-purple)" })}
          <line x1="490" y1="162" x2="470" y2="162" stroke="var(--svg-purple)" stroke-width="2.2"/><polygon points="468,162 476,158 476,166" fill="var(--svg-purple)"/>
          ${s(462, 258, t("Urine → Pelvis → Ureter", "尿液 → 腎盂 → 輸尿管"), { size: 10, bold: true, fill: "var(--svg-amber)" })}
        </svg>`;

      case "diag-menstrual":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Hormonal Control of 28-Day Menstrual Cycle (E1)", "28 天月經周期激素調節圖 (E1)"), { size: 14, bold: true })}
          <!-- Axes -->
          <line x1="56" y1="168" x2="604" y2="168" stroke="var(--svg-axis)" stroke-width="1.8"/>
          <line x1="56" y1="168" x2="56" y2="38" stroke="var(--svg-axis)" stroke-width="1.8"/>
          <!-- Day 14 Ovulation line -->
          <line x1="330" y1="38" x2="330" y2="238" stroke="var(--svg-red)" stroke-dasharray="5,4" stroke-width="1.8"/>
          ${s(330, 35, t("Day 14: Ovulation", "第 14 天：排卵"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          <!-- LH surge -->
          <path d="M58,154 L290,152 Q318,148 330,48 Q342,148 368,154 L600,155" fill="none" stroke="var(--svg-red)" stroke-width="2.6"/>
          <!-- FSH -->
          <path d="M58,144 Q140,124 250,145 Q318,140 330,96 Q348,148 450,152 Q560,152 600,136" fill="none" stroke="var(--svg-blue)" stroke-width="2.2" stroke-dasharray="6,3"/>
          <!-- Oestrogen -->
          <path d="M58,158 Q185,154 292,76 Q326,120 365,134 Q455,104 520,126 Q568,150 600,158" fill="none" stroke="var(--svg-green)" stroke-width="2.6"/>
          <!-- Progesterone -->
          <path d="M58,164 L330,164 Q415,64 475,72 Q545,86 588,160 L600,164" fill="none" stroke="var(--svg-purple)" stroke-width="3"/>
          <!-- Legend -->
          ${s(110, 56, "— LH", { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(175, 56, "-- FSH", { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(265, 56, t("— Oestrogen", "— 雌激素"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          ${s(472, 56, t("— Progesterone (Corpus Luteum)", "— 孕酮（黃體分泌）"), { size: 10.5, bold: true, fill: "var(--svg-purple)" })}
          <!-- Uterine lining strip -->
          <path d="M56,232 L56,204 Q95,224 140,224 Q245,212 330,200 Q450,188 555,192 L600,222 L600,232 Z" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="1.6"/>
          ${s(95, 226, t("Menstruation", "行經"), { size: 9.5, bold: true, fill: "var(--svg-red)" })}
          ${s(455, 214, t("Thick vascular uterine lining", "增厚充血子宮內膜（準備植入）"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(62, 252, "Day 1", { size: 10, fill: "var(--svg-muted)" })}
          ${s(330, 252, "Day 14", { size: 10, bold: true, fill: "var(--svg-red)" })}
          ${s(590, 252, "Day 28", { size: 10, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-oxygen-sag":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("Sewage Discharge: BOD & Dissolved Oxygen Sag Curve (E2)", "河流排污：BOD 與溶氧下陷曲線 (E2)"), { size: 14, bold: true })}
          <line x1="60" y1="215" x2="605" y2="215" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="60" y1="215" x2="60" y2="42" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="150" y1="42" x2="150" y2="215" stroke="var(--svg-red)" stroke-dasharray="5,4" stroke-width="2"/>
          ${s(150, 232, t("Sewage Outfall", "污水排放口"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          <!-- DO sag -->
          <path d="M62,76 L150,76 Q220,198 285,194 Q395,186 490,94 L600,78" fill="none" stroke="var(--svg-blue)" stroke-width="3.2"/>
          <!-- Bacteria / BOD -->
          <path d="M62,196 L148,196 Q190,62 248,66 Q335,76 425,186 L600,196" fill="none" stroke="var(--svg-red)" stroke-width="2.6" stroke-dasharray="7,3"/>
          <!-- Algae / NO3 -->
          <path d="M62,198 L245,198 Q365,186 435,96 Q510,96 600,152" fill="none" stroke="var(--svg-green)" stroke-width="2.6"/>
          ${s(106, 65, t("Dissolved O2", "溶氧量 (DO)"), { size: 10.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(248, 56, t("Bacteria / BOD spike", "需氧細菌 / BOD 飆升"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(285, 208, t("DO Sag (Fish die!)", "溶氧谷底（魚類窒息）"), { size: 10, bold: true, fill: "var(--svg-blue)" })}
          ${s(472, 84, t("Algae / NO3- peak", "硝酸鹽＋藻類增殖"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          ${s(470, 246, t("Distance Downstream →", "下游距離 →"), { size: 11, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-microbial-growth":
        return `<svg viewBox="0 0 640 265">
          <rect width="640" height="265" fill="var(--svg-bg)"/>
          ${s(320, 22, t("4-Phase Microbial Growth Curve in Batch Culture (E3)", "分批培養四階段微生物生長曲線 (E3)"), { size: 14, bold: true })}
          <line x1="65" y1="215" x2="600" y2="215" stroke="var(--svg-axis)" stroke-width="2"/>
          <line x1="65" y1="215" x2="65" y2="42" stroke="var(--svg-axis)" stroke-width="2"/>
          <!-- Dividers -->
          <line x1="160" y1="48" x2="160" y2="215" stroke="var(--svg-grid)" stroke-dasharray="4,4"/>
          <line x1="315" y1="48" x2="315" y2="215" stroke="var(--svg-grid)" stroke-dasharray="4,4"/>
          <line x1="465" y1="48" x2="465" y2="215" stroke="var(--svg-grid)" stroke-dasharray="4,4"/>
          <!-- Viable curve -->
          <path d="M68,188 L158,186 Q210,180 285,72 Q302,66 320,66 L462,66 Q518,74 588,185" fill="none" stroke="var(--svg-green)" stroke-width="3.4"/>
          <!-- Total count dashed -->
          <path d="M462,66 L588,68" fill="none" stroke="var(--svg-amber)" stroke-width="2.4" stroke-dasharray="6,4"/>
          ${s(112, 165, t("1. Lag", "1. 延滯期"), { size: 11, bold: true, fill: "var(--svg-blue)" })}
          ${s(112, 180, t("(synthesizing", "(合成酶適應)"), { size: 9.5, fill: "var(--svg-muted)" })}
          ${s(238, 128, t("2. Log / Exponential", "2. 對數期"), { size: 11, bold: true, fill: "var(--svg-green)" })}
          ${s(238, 144, t("(max division)", "(最快二分裂)"), { size: 9.5, fill: "var(--svg-muted)" })}
          ${s(390, 56, t("3. Stationary", "3. 穩定期"), { size: 11, bold: true, fill: "var(--svg-purple)" })}
          ${s(390, 84, t("Birth = Death", "繁殖＝死亡"), { size: 9.5, fill: "var(--svg-purple)" })}
          ${s(390, 99, t("(Penicillin!)", "(產青黴素!)"), { size: 9.5, bold: true, fill: "var(--svg-red)" })}
          ${s(536, 56, t("Total count (turbidity)", "總菌數（濁度不跌）"), { size: 9.5, bold: true, fill: "var(--svg-amber)" })}
          ${s(534, 154, t("4. Death (Viable)", "4. 死亡期(活菌)"), { size: 10.5, bold: true, fill: "var(--svg-red)" })}
          ${s(28, 130, "log N", { size: 11, bold: true, fill: "var(--svg-muted)" })}
          ${s(335, 242, t("Time", "培養時間"), { size: 11, fill: "var(--svg-muted)" })}
        </svg>`;

      case "diag-recombinant-pcr":
        return `<svg viewBox="0 0 640 270">
          <rect width="640" height="270" fill="var(--svg-bg)"/>
          <!-- Left: Recombinant DNA -->
          ${s(160, 22, t("Recombinant DNA Cloning (E4)", "重組 DNA 基因選殖 (E4)"), { size: 13, bold: true, fill: "var(--svg-purple)" })}
          <circle cx="88" cy="82" r="32" fill="none" stroke="var(--svg-blue)" stroke-width="5"/>
          ${s(88, 86, t("Plasmid", "質粒"), { size: 10, bold: true, fill: "var(--svg-blue)" })}
          <rect x="195" y="72" width="84" height="16" rx="4" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="2"/>
          ${s(237, 64, t("Target Gene", "目標基因"), { size: 10, bold: true, fill: "var(--svg-red)" })}
          ${s(160, 134, t("Cut BOTH with SAME Restriction Enzyme", "用同一種限制酶切割 → 互補黏性末端"), { size: 9.8, bold: true, fill: "var(--svg-amber)" })}
          ${s(160, 152, t("+ Join with DNA Ligase ↓", "＋ DNA 連接酶接合 ↓"), { size: 10.5, bold: true, fill: "var(--svg-green)" })}
          <!-- Recombinant plasmid -->
          <circle cx="160" cy="204" r="38" fill="none" stroke="var(--svg-blue)" stroke-width="5"/>
          <path d="M133,177 A38,38 0 0,1 187,177" fill="none" stroke="var(--svg-red)" stroke-width="6"/>
          ${s(160, 202, t("Recombinant", "重組"), { size: 9.4, bold: true, fill: "var(--svg-purple)" })}
          ${s(160, 214, t("Plasmid", "質粒"), { size: 9.4, bold: true, fill: "var(--svg-purple)" })}
          ${s(160, 254, t("→ Transformation into E. coli + Selection", "→ 轉化大腸桿菌 ＋ 抗性標記篩選"), { size: 10, bold: true, fill: "var(--svg-teal)" })}

          <!-- Right: PCR Cycle -->
          <line x1="322" y1="32" x2="322" y2="255" stroke="var(--svg-grid)" stroke-width="1.5"/>
          ${s(482, 22, t("PCR 3-Step Thermal Cycle (2^n)", "PCR 三步熱循環（指數倍增 2^n）"), { size: 13, bold: true, fill: "var(--svg-red)" })}
          <rect x="355" y="42" width="252" height="54" rx="10" fill="var(--svg-fill-red)" stroke="var(--svg-red)" stroke-width="1.8"/>
          ${s(481, 64, t("1. Denaturation (~95°C)", "1. 變性（~95°C）"), { size: 11.5, bold: true, fill: "var(--svg-red)" })}
          ${s(481, 83, t("Breaks H-bonds → 2 single strands", "打斷氫鍵解開雙鏈 DNA"), { size: 10 })}
          <rect x="355" y="114" width="252" height="54" rx="10" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="1.8"/>
          ${s(481, 136, t("2. Annealing (~55°C)", "2. 黏合（~55°C）"), { size: 11.5, bold: true, fill: "var(--svg-blue)" })}
          ${s(481, 155, t("Specific primers bind to template ends", "特異引物與模板互補結合"), { size: 10 })}
          <rect x="355" y="186" width="252" height="54" rx="10" fill="var(--svg-fill-green)" stroke="var(--svg-green)" stroke-width="1.8"/>
          ${s(481, 208, t("3. Extension (~72°C)", "3. 延伸（~72°C）"), { size: 11.5, bold: true, fill: "var(--svg-green)" })}
          ${s(481, 227, t("Heat-stable Taq polymerase synthesizes DNA", "耐熱 Taq 聚合酶合成互補新鏈"), { size: 10 })}
          <line x1="481" y1="96" x2="481" y2="112" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="481,114 477,107 485,107" fill="var(--svg-ink)"/>
          <line x1="481" y1="168" x2="481" y2="184" stroke="var(--svg-ink)" stroke-width="2"/><polygon points="481,186 477,179 485,179" fill="var(--svg-ink)"/>
          ${s(481, 257, t("Repeat 30 cycles → >1 billion copies!", "重複 30 循環 → 超過 10 億份 DNA！"), { size: 10, bold: true, fill: "var(--svg-purple)" })}
        </svg>`;

      default:
        return `<svg viewBox="0 0 400 120"><rect width="400" height="120" fill="var(--svg-bg)"/><text x="200" y="65" text-anchor="middle" fill="var(--svg-muted)">Diagram: ${id}</text></svg>`;
    }
  }

  window.BIO_DIAGRAMS = { render };
})();
