/* ==========================================================================
   2027 HKDSE 數學必修部分（Compulsory Part）考評總覽、12大 Topic 目錄與計數機攻略
   ========================================================================== */

window.MATH_TOPICS = [
  { id: "algebra",    code: "T01", zh: "代數、多項式與恆等式",       en: "Algebra, Polynomials & Identities",      section: "A(1)/A(2)/B" },
  { id: "quadratic",  code: "T02", zh: "二次方程、函數與圖像變換",   en: "Quadratics, Functions & Transformations", section: "A(2)/B 必考" },
  { id: "explog",     code: "T03", zh: "指數、對數與複數",         en: "Indices, Logarithms & Complex Numbers",  section: "B 必考" },
  { id: "variation",  code: "T04", zh: "變分、百分數、比與估算誤差", en: "Variations, Percentages & Estimation",   section: "A(1)/A(2)" },
  { id: "lp",         code: "T05", zh: "不等式與線性規劃",           en: "Inequalities & Linear Programming",      section: "B 高頻" },
  { id: "seq",        code: "T06", zh: "等差與等比數列 (AS & GS)",   en: "Arithmetic & Geometric Sequences",       section: "B 壓軸常客" },
  { id: "planegeo",   code: "T07", zh: "平面幾何、圓性質與面積比例", en: "Plane Geometry, Circles & Area Ratios",  section: "A(2)/B 必考" },
  { id: "coord",      code: "T08", zh: "坐標幾何、圓方程與軌跡",     en: "Coordinate Geometry, Circles & Locus",   section: "A(2)/B 壓軸" },
  { id: "centres",    code: "T09", zh: "三角形四心專題",             en: "Four Centres of a Triangle",             section: "B 殺手課題" },
  { id: "trig3d",     code: "T10", zh: "2D 與 3D 三角學及求積法",    en: "2D/3D Trigonometry & Mensuration",       section: "A(2)/B 壓軸" },
  { id: "prob",       code: "T11", zh: "排列組合與概率",             en: "Permutation, Combination & Probability", section: "B 必考" },
  { id: "stats",      code: "T12", zh: "統計學與離差度量",           en: "Statistics & Measures of Dispersion",    section: "A(2)/B 必考" }
];

window.MATH_META = {
  intro: "香港中學文憑試（HKDSE）數學必修部分不設校本評核（SBA），100% 由兩份公開試卷決定等級。要衝擊 Level 5 / 5* / 5**，核心戰略是：**Paper 1 甲部(1)+(2) 穩取 65/70 以上保底，乙部重點攻克圓方程、AS/GS、3D 三角學、對數與概率壓軸；Paper 2 則靠秒殺技巧與計數機 Program 在 60 分鐘內鎖定 40–45 題高準確率！**",

  papers: [
    {
      name: "卷一 Paper 1（傳統長問答題）",
      weight: "65%",
      duration: "2 小時 15 分鐘（135 分鐘）",
      total: "105 分",
      breakdown: [
        { part: "甲部(1) Section A(1)（35 分 · 約 9 題）", time: "限時 22–25 分鐘", tip: "基礎送分盤（主項變換、因式分解、指數、不等式、百分數、坐標變換、基本幾何統計），務求零失誤全取 35/35！" },
        { part: "甲部(2) Section A(2)（35 分 · 約 5 題）", time: "限時 38–42 分鐘", tip: "中階拉分盤（多項式除法、變分應用、統計箱形圖、圓方程／軌跡、立體平截頭體求積、圓幾何證明），注意「同意嗎？試解釋」題必須寫清比較數值與結論！" },
        { part: "乙部 Section B（35 分 · 約 5 題）", time: "限時 55 分鐘 ＋ 15 分鐘檢查", tip: "奪星分水嶺（對數／圖像變換、排列組合與概率、等差等比數列與複利、3D 三角學二面角與最大角、坐標幾何圓與四心壓軸）。即使做不完最後一小題，(a)(b) 部分常佔 6–8 分，切勿全題放棄！" }
      ]
    },
    {
      name: "卷二 Paper 2（多項選擇題 MC）",
      weight: "35%",
      duration: "1 小時 15 分鐘（75 分鐘）",
      total: "45 題（每題 1 分）",
      breakdown: [
        { part: "甲部 Section A（第 1–30 題）", time: "目標 30–35 分鐘（平均 1 分鐘/題）", tip: "切忌執着傳統長算式！善用代數字法、計數機 EQN/Program、極端值測試與比例圖形直觀判斷，為乙部爭取充裕時間。" },
        { part: "乙部 Section B（第 31–45 題）", time: "目標 30 分鐘（平均 2 分鐘/題）", tip: "集中考核 HCF/LCM、對數圖像、複數、線性規劃、AS/GS、3D 三角學、圓切線與弦角、四心、排列組合與統計變換——絕大部分均有固定秒殺套路！" },
        { part: "最後覆檢與選項平衡檢查", time: "預留 10 分鐘", tip: "核對答題紙有否填錯行；對完全卡關的 1–2 題，先用排除法刪去必錯選項（I/II/III 題尤為有效），絕不可留空！" }
      ]
    }
  ],

  cutoffs: [
    { grade: "Level 5**", pct: "約 90% – 92%+", p1: "95+ / 105", p2: "42–45 / 45", note: "甲部近滿分，乙部壓軸題能完成大部分並穩取步驟分" },
    { grade: "Level 5*",  pct: "約 83% – 85%",  p1: "87+ / 105", p2: "39–41 / 45", note: "Paper 2 突破 40 題是衝 5* 最高性價比捷徑" },
    { grade: "Level 5",   pct: "約 74% – 76%",  p1: "78+ / 105", p2: "35–38 / 45", note: "甲部穩奪 62+/70，乙部收割前半小題即可穩五" },
    { grade: "Level 4",   pct: "約 58% – 62%",  p1: "62+ / 105", p2: "28–32 / 45", note: "熟練甲部基礎題型＋Paper 2 前 30 題基本盤" }
  ],

  /* Casio fx-50FH II / fx-3650P II 必備四大 Program 與內置神技 */
  calculatorGuide: [
    {
      name: "Program 1：一元二次方程萬能解（含複數根 & 頂點 Vertex）",
      use: "解 $ax^2+bx+c=0$ 實根／複數根、檢查因式分解、極速求二次函數頂點 $(h,k)$ 與判別式 $\\Delta$。",
      usageTip: "【Paper 1 & 2 必裝】Paper 1 寫完公式後直接用 Program 出根並驗算；Paper 2 遇見因式分解題如 $6x^2-7x-20$，按出根 $x=\\frac{5}{2}, -\\frac{4}{3}$ 即反推 $(2x-5)(3x+4)$，3 秒零出錯！"
    },
    {
      name: "Program 2：圓方程與直線交點 / 切線判定（Circle & Line）",
      use: "輸入一般式 $x^2+y^2+Dx+Ey+F=0$ 與直線 $Ax+By+C=0$，自動輸出圓心、半徑、交點坐標（或無交點提示）及中點。",
      usageTip: "【Paper 2 圓方程核武】面對「直線與圓相交於 $P,Q$，求 $PQ$ 中點／弦長」題目，傳統聯立代入要算 3 分鐘，用 Program 15 秒直接爆出 $P, Q$ 坐標再取中點！"
    },
    {
      name: "Program 3：三點求圓方程 / 外心（3 Points → Circle）",
      use: "輸入三點 $(x_1,y_1), (x_2,y_2), (x_3,y_3)$，自動算出過三點的圓方程 $(D,E,F)$、外心坐標 $(h,k)$ 與外接圓半徑 $R$。",
      usageTip: "【四心與坐標壓軸神器】Paper 2 問 $\\triangle ABC$ 外心坐標（Circumcentre）或過三點圓方程時，直接輸入三個頂點坐標即可 10 秒秒殺！"
    },
    {
      name: "Program 4：正弦／餘弦定理與希羅公式（Triangle Solver）",
      use: "輸入 SSS（三邊）自動算三角與面積；輸入 SAS（兩邊及夾角）自動算對邊與其餘兩角。",
      usageTip: "【3D 三角學零失誤救星】Paper 1 3D 題經常連續使用 3–4 次餘弦定理，手動重覆按極易按漏平方或括號，用 Program 既快又可將中間精確值存入 Memory A/B/C！"
    },
    {
      name: "內置 Mode 2 (CMPLX) — 複數秒殺模式",
      use: "直接輸入 $\\frac{a+bi}{c+di}$、$i^{2027}$、$(2-3i)^2$ 等複數運算（按 `ENG` 鍵輸入 `i`）。",
      usageTip: "【Paper 2 必考送分題】切換到 `MODE 2 (CMPLX)`，直接把題目分數輸入（如有未知數 $k$，先設 $k=2$ 代數字測試實部／虛部！），5 秒內必中！"
    },
    {
      name: "內置 CALC / Memory A–F — 方程代入與精確值存儲",
      use: "用 `CALC` 快速將選項數值代入複雜代數式／對數式，並以 `STO` 儲存 3D 三角學中間精確小數。",
      usageTip: "【Paper 1 & 2 零失誤秘訣】3D 長題目切勿用四捨五入的中間答案繼續計餘弦定理！每次算出邊長或角度後按 `SHIFT` + `RCL` 存入 `A / B / C` 記憶鍵，確保最後答案精確至 3 位有效數字！"
    },
    {
      name: "內置 SD (統計模式) & Formula 02/03 (聯立方程)",
      use: "輸入數據即可瞬間求出平均值 $\\bar{x}$、母體標準差 $\\sigma_n$（注意 DSE 永遠用 $x\\sigma_n$，**切勿按錯 $x\\sigma_{n-1}$！**）。",
      usageTip: "【Paper 1 統計零失分鐵律】DSE 數學必修部分只定義母體標準差 $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N}}$，計數機必須選 `$\\sigma_n$`（而非樣本標準差 $s$ 或 $\\sigma_{n-1}$）！"
    }
  ]
};
