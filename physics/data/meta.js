/* ==========================================================================
   2027 HKDSE Physics — Metadata, UI Dictionary, Constants & Exam Guide
   ========================================================================== */
window.PHY_META = {
  ui: {
    siteTitle: { zh: "HKDSE 物理複習寶典", en: "HKDSE Physics Revision Hub" },
    siteSub: { zh: "2027 DSE · 卷一 (Book 1–5) · 選修 E2 原子世界 · 選修 E3 能源使用", en: "2027 DSE · Paper 1 (Book 1–5) · E2 Atomic World · E3 Energy & Use of Energy" },
    navOverview: { zh: "考試總覽", en: "Overview", both: "總覽 Overview" },
    navPaper1: { zh: "卷一 必修 (Book 1–5)", en: "Paper 1 Core (Book 1–5)", both: "卷一 Paper 1 (Bk 1–5)" },
    navE2: { zh: "卷二 E2 原子世界", en: "Paper 2 E2: Atomic World", both: "E2 原子 Atomic" },
    navE3: { zh: "卷二 E3 能源使用", en: "Paper 2 E3: Energy", both: "E3 能源 Energy" },
    navFormulas: { zh: "公式與推導寶庫", en: "Formulas & Derivations", both: "公式 Formulas" },
    navDiagrams: { zh: "核心圖表與圖像", en: "Diagrams & Graphs", both: "圖表 Diagrams" },
    navQuiz: { zh: "模擬測驗", en: "Practice Quiz", both: "測驗 Quiz" },
    masteryProgress: { zh: "溫習掌握進度", en: "Revision Mastery" },
    viewBookmarks: { zh: "★ 查看收藏", en: "★ Bookmarks" },
    markMastered: { zh: "標記已掌握", en: "Mark Mastered" },
    mastered: { zh: "已掌握 ✓", en: "Mastered ✓" },
    bookmark: { zh: "收藏", en: "Bookmark" },
    bookmarked: { zh: "已收藏 ★", en: "Bookmarked ★" },
    expandAll: { zh: "全部展開", en: "Expand All" },
    collapseAll: { zh: "全部收合", en: "Collapse All" },
    showDeriv: { zh: "展開課本推導步驟 ▾", en: "Show Textbook Derivation ▾" },
    hideDeriv: { zh: "收合推導步驟 ▴", en: "Hide Derivation ▴" },
    searchPlaceholder: {
      zh: "搜尋知識點、公式、圖表（如：光電效應、Lenz、U-value、pV=nRT、繞射）...",
      en: "Search topics, formulas, diagrams (e.g. Photoelectric, Lenz, U-value, Bohr, Diffraction)..."
    },
    noResults: { zh: "找不到相符內容，請嘗試其他中英文關鍵字。", en: "No matching items found. Try another keyword." }
  },

  bookCatalog: [
    { id: "book1", paper: "paper1", code: "Book 1", color: "#ea580c", zh: "熱和氣體", en: "Heat and Gases", shortZh: "Book 1 熱和氣體", shortEn: "Book 1 Heat & Gases" },
    { id: "book2", paper: "paper1", code: "Book 2", color: "#2563eb", zh: "力和運動", en: "Force and Motion", shortZh: "Book 2 力和運動", shortEn: "Book 2 Force & Motion" },
    { id: "book3a", paper: "paper1", code: "Book 3A", color: "#0891b2", zh: "波動 I（波動與光學）", en: "Wave Motion I (Waves & Optics)", shortZh: "Book 3A 波動與光學", shortEn: "Book 3A Waves & Optics" },
    { id: "book3b", paper: "paper1", code: "Book 3B", color: "#0d9488", zh: "波動 II（光波與聲波）", en: "Wave Motion II (Light & Sound)", shortZh: "Book 3B 光波與聲波", shortEn: "Book 3B Light & Sound" },
    { id: "book4", paper: "paper1", code: "Book 4", color: "#4f46e5", zh: "電和磁", en: "Electricity and Magnetism", shortZh: "Book 4 電和磁", shortEn: "Book 4 E&M" },
    { id: "book5", paper: "paper1", code: "Book 5", color: "#e11d48", zh: "放射現象和核能", en: "Radioactivity and Nuclear Energy", shortZh: "Book 5 核能與放射", shortEn: "Book 5 Nuclear" },
    { id: "booke2", paper: "elective2", code: "Book E2", color: "#7c3aed", zh: "原子世界（選修二）", en: "Atomic World (Elective 2)", shortZh: "Book E2 原子世界", shortEn: "Book E2 Atomic World" },
    { id: "booke3", paper: "elective3", code: "Book E3", color: "#059669", zh: "能量和能源的使用（選修三）", en: "Energy and Use of Energy (Elective 3)", shortZh: "Book E3 能源使用", shortEn: "Book E3 Energy" }
  ],

  overview: {
    heroTitle: {
      zh: "2027 HKDSE 物理科（Physics）終極複習指南",
      en: "2027 HKDSE Physics Complete Revision Guide"
    },
    heroDesc: {
      zh: "專為 **2027 年香港中學文憑試（HKDSE）物理科** 考生精心製作。全面覆蓋 **試卷一必修部分（Book 1 至 Book 5）** 及 **試卷二選修二《原子世界》（Book E2）**、**選修三《能量和能源的使用》（Book E3）**。支援一鍵 **繁體中文 / 中英對照 / English** 即時切換（包含圖表標籤同步切換），內置按課本分類的 **基礎公式與完整課本推導寶庫** 及 **30+ 幅高精準核心圖表與圖像解析**，助考生直指 5**！",
      en: "Purpose-built for **2027 HKDSE Physics** candidates. Comprehensively covers **Paper 1 Compulsory Part (Books 1, 2, 3A, 3B, 4, 5)** and **Paper 2 Elective 2 (Atomic World, Book E2)** & **Elective 3 (Energy and Use of Energy, Book E3)**. Features instant **Traditional Chinese / Bilingual / English** switching (including dynamic SVG diagram labels), a **Book-classified Basic Formula & Step-by-Step Textbook Derivation Vault**, and **30+ high-precision essential diagrams & graphs with exam explanations**."
    },
    assessmentTable: {
      headers: [
        { zh: "評核部分", en: "Component" },
        { zh: "考核範圍（對應課本）", en: "Syllabus Scope (Textbooks)" },
        { zh: "佔分比重", en: "Weighting" },
        { zh: "考試時間", en: "Duration" },
        { zh: "卷面結構與奪星策略", en: "Paper Structure & 5** Strategy" }
      ],
      rows: [
        [
          { zh: "**試卷一（必修部分）**\nPaper 1", en: "**Paper 1 (Compulsory Part)**" },
          { zh: "熱和氣體 (Book 1)、力和運動 (Book 2)、波動 I & II (Book 3A/3B)、電和磁 (Book 4)、放射現象和核能 (Book 5)", en: "Heat & Gases (Bk 1), Force & Motion (Bk 2), Wave Motion I & II (Bk 3A/3B), Electricity & Magnetism (Bk 4), Radioactivity & Nuclear Energy (Bk 5)" },
          { zh: "**60%**\n(甲部 21% + 乙部 39%)", en: "**60%**\n(Sec A 21% + Sec B 39%)" },
          { zh: "2 小時 30 分鐘", en: "2 hrs 30 mins" },
          { zh: "甲部：33 題多項選擇題（MC）；乙部：結構式短題、計算題、實驗分析題及 1 題論述題（Essay）。**力學 (Book 2) 與電磁學 (Book 4) 合計常佔超過一半比重！**", en: "Sec A: 33 MCQs; Sec B: Structured, calculation, experimental & 1 essay question. **Mechanics (Bk 2) & E&M (Bk 4) typically account for >50% of Paper 1!**" }
        ],
        [
          { zh: "**試卷二（選修部分）**\nPaper 2 (E2 + E3)", en: "**Paper 2 (Elective Part)**\nElective 2 + Elective 3" },
          { zh: "四選二：聚焦 **選修二：原子世界 (Book E2)** 及 **選修三：能量和能源的使用 (Book E3)**", en: "Choose 2 of 4: Focused on **E2 Atomic World (Bk E2)** and **E3 Energy and Use of Energy (Bk E3)**" },
          { zh: "**20%**\n(每選修各佔 10%)", en: "**20%**\n(10% per elective)" },
          { zh: "1 小時", en: "1 hour" },
          { zh: "每個選修設 8 題多項選擇題（MC）+ 1 題結構式長題目（共 20 分）。每份選修只有約 30 分鐘作答，**必須熟練核心推導與單位換算（如 eV ↔ J、kW h、lm、U-value）！**", en: "Each elective has 8 MCQs + 1 structured question (20 marks total). Only ~30 min per elective — **master key derivations & unit conversions (eV ↔ J, kW h, lm, U-value)!**" }
        ],
        [
          { zh: "**校本評核（SBA）**\nSchool-Based Assessment", en: "**School-Based Assessment (SBA)**" },
          { zh: "中五及中六物理實驗技巧評核及完整實驗報告 / 探究研習", en: "S5–S6 practical skills assessment, lab reports & investigative study" },
          { zh: "**20%**", en: "**20%**" },
          { zh: "校內持續評核", en: "School-based" },
          { zh: "注重繪製線性關係圖（Linearization）、斜率與截距物理意義、有效數字（s.f.）及誤差分析，這些技能同時直接應用於 Paper 1B 實驗題！", en: "Master graph linearization, physical meaning of slope/intercept, significant figures & error analysis — directly tested in Paper 1B too!" }
        ]
      ]
    },
    constantsTable: {
      headers: [
        { zh: "物理常數", en: "Physical Constant" },
        { zh: "符號", en: "Symbol" },
        { zh: "HKDSE 官方考卷數值", en: "Official HKDSE Exam Value" },
        { zh: "常見適用課題", en: "Primary Books" }
      ],
      rows: [
        [{ zh: "重力加速度", en: "Acceleration due to gravity" }, "$g$", "$9.81\\text{ m s}^{-2}$", { zh: "Book 2, E3", en: "Book 2, E3" }],
        [{ zh: "萬有引力常數", en: "Universal gravitational constant" }, "$G$", "$6.67 \\times 10^{-11}\\text{ N m}^2\\text{ kg}^{-2}$", { zh: "Book 2", en: "Book 2" }],
        [{ zh: "摩爾氣體常數", en: "Molar gas constant" }, "$R$", "$8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$", { zh: "Book 1", en: "Book 1" }],
        [{ zh: "阿伏加德羅常數", en: "Avogadro constant" }, "$N_A$", "$6.02 \\times 10^{23}\\text{ mol}^{-1}$", { zh: "Book 1, 5", en: "Book 1, 5" }],
        [{ zh: "真空光速", en: "Speed of light in vacuum" }, "$c$", "$3.00 \\times 10^{8}\\text{ m s}^{-1}$", { zh: "Book 3A, 3B, 5, E2", en: "Book 3A, 3B, 5, E2" }],
        [{ zh: "電子電荷量", en: "Charge of electron" }, "$e$", "$1.60 \\times 10^{-19}\\text{ C}$", { zh: "Book 4, 5, E2", en: "Book 4, 5, E2" }],
        [{ zh: "電子靜止質量", en: "Electron rest mass" }, "$m_e$", "$9.11 \\times 10^{-31}\\text{ kg}$", { zh: "Book 4, 5, E2", en: "Book 4, 5, E2" }],
        [{ zh: "真空電容率", en: "Permittivity of free space" }, "$\\varepsilon_0$", "$8.85 \\times 10^{-12}\\text{ C}^2\\text{ N}^{-1}\\text{ m}^{-2}$", { zh: "Book 4, E2", en: "Book 4, E2" }],
        [{ zh: "真空磁導率", en: "Permeability of free space" }, "$\\mu_0$", "$4\\pi \\times 10^{-7}\\text{ H m}^{-1}$", { zh: "Book 4", en: "Book 4" }],
        [{ zh: "普朗克常數", en: "Planck constant" }, "$h$", "$6.63 \\times 10^{-34}\\text{ J s}$", { zh: "Book E2", en: "Book E2" }],
        [{ zh: "原子質量單位", en: "Atomic mass unit" }, "$\\text{u}$", "$1.661 \\times 10^{-27}\\text{ kg} \\; (\\leftrightarrow 931\\text{ MeV})$", { zh: "Book 5, E3", en: "Book 5, E3" }],
        [{ zh: "斯特藩常數", en: "Stefan constant" }, "$\\sigma$", "$5.67 \\times 10^{-8}\\text{ W m}^{-2}\\text{ K}^{-4}$", { zh: "Book E3", en: "Book E3" }],
        [{ zh: "太陽常數", en: "Solar constant" }, "$S$", "$1366\\text{ W m}^{-2}$", { zh: "Book E3", en: "Book E3" }]
      ]
    },
    examTips: [
      {
        zh: "**有效數字（Significant Figures）**：HKDSE 計算題最終答案通常取 **3 位有效數字（3 s.f.）**（亦普遍接受 2–4 位），但中間運算過程必須保留最少 4–5 位或直接用計數機記憶體（Ans），切勿中途過早四捨五入！",
        en: "**Significant Figures**: Round final numerical answers to **3 s.f.** (2–4 s.f. typically accepted), but keep at least 4–5 s.f. or calculator memory during intermediate steps to avoid rounding errors!"
      },
      {
        zh: "**矢量方向與正負號約定（Sign Conventions）**：處理力學（Book 2）、薄透鏡公式（Book 3A — 實像為正、虛像為負）及電磁感應（Book 4 — 楞次定律）時，必須在開首明確定義正方向（如「取向右為正 / Take rightward as positive」）。",
        en: "**Vectors & Sign Conventions**: Always declare positive directions clearly in Mechanics (Book 2), apply the Real-is-Positive convention in Thin Lens formula (Book 3A), and justify directions explicitly using Lenz's Law / Fleming's Rules (Book 4)."
      },
      {
        zh: "**官方公式表不列變數定義**：考評局附表只印出公式符號，**不附任何符號解釋與單位**，且許多高頻推導式（如最大射程、傾斜彎道、玻爾半徑、德布羅意與加速電壓關係、COP、OTTV）並無列出，必須在「公式與推導寶庫」中熟練推導過程！",
        en: "**HKEAA Sheet Gives No Symbol Definitions**: The official sheet omits variable definitions, SI units, and many derived equations (projectile range, banked road, Bohr radius, de Broglie via accelerating voltage, COP, OTTV). Master them in our Formulas & Derivations Vault!"
      },
      {
        zh: "**解釋題（Explain）必須結合定律與因果鏈**：切忌只寫「因為公式如此」。例如解釋氣體壓強上升，須從分子動理論說明「分子平均動能增加 → 撞擊器壁速率及頻率增加 → 單位時間內傳給器壁的動量變化增大 → 平均撞擊力及壓強上升」。",
        en: "**Causal Chains in 'Explain' Questions**: Never merely state 'by formula'. E.g., for gas pressure rise, explain microscopically: 'higher $T$ → greater average molecular KE & rms speed → harder & more frequent collisions with walls → larger rate of change of momentum per unit area → higher pressure'."
      }
    ]
  }
};
