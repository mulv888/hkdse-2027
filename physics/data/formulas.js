/* ==========================================================================
   HKDSE Physics Formula & Derivation Vault (Classified by Book 1–5, E2, E3)
   Distinguishes:
     category: "basic"   (Basic & fundamental formulas; onSheet: true/false)
     category: "derived" (Textbook derived formulas with full step-by-step proof)
   ========================================================================== */
window.PHY_FORMULAS = [
  /* ===================== BOOK 1: HEAT AND GASES ===================== */
  {
    id: "f-b1-kelvin", book: "book1", category: "basic", onSheet: false,
    name: { zh: "開氏與攝氏溫標換算", en: "Kelvin–Celsius Temperature Conversion" },
    eq: "T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273",
    vars: [
      { sym: "$T$", zh: "絕對溫度（開氏）", en: "Absolute temperature", unit: "$\\text{K}$" },
      { sym: "$\\theta$", zh: "攝氏溫度", en: "Celsius temperature", unit: "$^\\circ\\text{C}$" }
    ],
    cond: { zh: "溫差相等：$\\Delta T(\\text{K}) = \\Delta\\theta(^\\circ\\text{C})$；所有氣體定律計算必用 $\\text{K}$。", en: "Temperature changes are equal: $\\Delta T(\\text{K}) = \\Delta\\theta(^\\circ\\text{C})$. Always use $\\text{K}$ in gas laws." }
  },
  {
    id: "f-b1-calib", book: "book1", category: "derived", onSheet: false,
    name: { zh: "線性溫度計校準公式", en: "Linear Thermometer Calibration" },
    eq: "\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100^\\circ\\text{C}",
    vars: [
      { sym: "$X_\\theta, X_0, X_{100}$", zh: "溫度 $\\theta$、$0^\\circ\\text{C}$ 及 $100^\\circ\\text{C}$ 時之測溫量（長度/電阻等）", en: "Thermometric property at $\\theta$, $0^\\circ\\text{C}$ and $100^\\circ\\text{C}$", unit: "視乎 $X$" }
    ],
    steps: [
      { zh: "假設測溫性質 $X$ 隨攝氏溫度 $\\theta$ 線性變化，故單位溫度變化對應的 $X$ 變化恆定：$\\frac{X_\\theta - X_0}{\\theta - 0} = \\frac{X_{100} - X_0}{100 - 0}$。", en: "Assume $X$ varies linearly with $\\theta$, so rate of change is constant: $\\frac{X_\\theta - X_0}{\\theta - 0} = \\frac{X_{100} - X_0}{100 - 0}$." },
      { zh: "整理即得 $\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100^\\circ\\text{C}$。", en: "Rearranging gives $\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100^\\circ\\text{C}$." }
    ],
    cond: { zh: "僅適用於與溫度呈線性關係的測溫性質（如水銀柱長度），不適用於非線性熱敏電阻。", en: "Valid only if $X$ varies linearly with temperature (not valid for non-linear thermistors)." }
  },
  {
    id: "f-b1-hc", book: "book1", category: "basic", onSheet: false,
    name: { zh: "熱容量（Heat Capacity）", en: "Heat Capacity" },
    eq: "E = C\\Delta T, \\quad C = mc",
    vars: [
      { sym: "$C$", zh: "物體熱容量", en: "Heat capacity of object", unit: "$\\text{J }^\\circ\\text{C}^{-1}$" },
      { sym: "$E$", zh: "傳遞的熱能", en: "Thermal energy transferred", unit: "$\\text{J}$" }
    ],
    cond: { zh: "無物態變化時適用；熱容量 $C$ 與物體質量成正比。", en: "Applies when no change of state occurs; $C \\propto m$." }
  },
  {
    id: "f-b1-shc", book: "book1", category: "basic", onSheet: true,
    name: { zh: "比熱容量公式（加熱/冷卻）", en: "Specific Heat Capacity Formula" },
    eq: "E = mc\\Delta T",
    vars: [
      { sym: "$m$", zh: "物質質量", en: "Mass", unit: "$\\text{kg}$" },
      { sym: "$c$", zh: "比熱容量", en: "Specific heat capacity", unit: "$\\text{J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$" },
      { sym: "$\\Delta T$", zh: "溫度變化", en: "Temperature change", unit: "$^\\circ\\text{C}$ / $\\text{K}$" }
    ],
    cond: { zh: "純升溫或降溫（無相變）；電熱器供熱時 $E = Pt$。", en: "No change of state; for electric heating, $E = Pt$." }
  },
  {
    id: "f-b1-lh", book: "book1", category: "basic", onSheet: true,
    name: { zh: "比潛熱公式（物態變化）", en: "Specific Latent Heat Formula" },
    eq: "E = l\\Delta m",
    vars: [
      { sym: "$l$", zh: "比熔解潛熱 $l_f$ 或比汽化潛熱 $l_v$", en: "Specific latent heat ($l_f$ or $l_v$)", unit: "$\\text{J kg}^{-1}$" },
      { sym: "$\\Delta m$", zh: "發生相變的質量", en: "Mass changing state", unit: "$\\text{kg}$" }
    ],
    cond: { zh: "僅用於熔點或沸點的恆溫物態變化（增加分子勢能，分子動能不變）。", en: "Constant-temperature state change only (molecular PE changes, KE constant)." }
  },
  {
    id: "f-b1-power-flow", book: "book1", category: "derived", onSheet: false,
    name: { zh: "流動液體加熱功率公式", en: "Continuous-Flow Heating Power" },
    eq: "P = \\left(\\frac{\\Delta m}{\\Delta t}\\right) c\\Delta T",
    vars: [
      { sym: "$P$", zh: "有效加熱功率", en: "Useful heating power", unit: "$\\text{W}$" },
      { sym: "$\\frac{\\Delta m}{\\Delta t}$", zh: "質量流率（每秒流出質量）", en: "Mass flow rate", unit: "$\\text{kg s}^{-1}$" }
    ],
    steps: [
      { zh: "由比熱容量基本式 $E = mc\\Delta T$ 與功率定義 $P = \\frac{E}{t}$。", en: "Start from $E = mc\\Delta T$ and $P = \\frac{E}{t}$." },
      { zh: "在時間 $\\Delta t$ 內流過質量 $\\Delta m$，兩邊同除 $\\Delta t$ 得 $P = \\frac{\\Delta m}{\\Delta t} c\\Delta T$（若給體積流率 $\\frac{\\Delta V}{\\Delta t}$，代入 $\\Delta m = \\rho\\Delta V$）。", en: "Divide both sides by $\\Delta t$: $P = \\left(\\frac{\\Delta m}{\\Delta t}\\right) c\\Delta T$ (use $\\Delta m = \\rho\\Delta V$ if volume flow rate is given)." }
    ],
    cond: { zh: "適用於即熱式熱水器、冷卻塔及冷氣機送風熱交換計算。", en: "Used for instant water heaters, coolants, and air-con airflow heat transfer." }
  },
  {
    id: "f-b1-mix", book: "book1", category: "derived", onSheet: false,
    name: { zh: "熱混合平衡溫度公式", en: "Method of Mixtures (Thermal Equilibrium)" },
    eq: "T_f = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}",
    vars: [
      { sym: "$T_f$", zh: "最終熱平衡溫度", en: "Final equilibrium temperature", unit: "$^\\circ\\text{C}$" }
    ],
    steps: [
      { zh: "假設無熱量散失至環境，由能量守恆：高溫物體放熱 = 低溫物體吸熱：$m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2)$。", en: "Assuming no heat loss to surroundings: $m_1 c_1(T_1 - T_f) = m_2 c_2(T_f - T_2)$." },
      { zh: "展開並把含 $T_f$ 項移至同側：$(m_1 c_1 + m_2 c_2) T_f = m_1 c_1 T_1 + m_2 c_2 T_2$，相除即得最終溫度。", en: "Collect $T_f$ terms: $(m_1 c_1 + m_2 c_2)T_f = m_1 c_1 T_1 + m_2 c_2 T_2$." }
    ],
    cond: { zh: "無物態變化時適用；若涉及冰水混合，須先檢查冰是否完全熔化（計算 $ml_f$）！", en: "Valid when no state change occurs; for ice-water mixtures, always check whether all ice melts first!" }
  },
  {
    id: "f-b1-curve-slope", book: "book1", category: "derived", onSheet: false,
    name: { zh: "加熱曲線斜率與平段時間", en: "Heating Curve Slope & Plateau Duration" },
    eq: "\\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc}, \\quad \\Delta t_{\\text{plateau}} = \\frac{ml}{P}",
    vars: [
      { sym: "$P$", zh: "恆定加熱功率", en: "Constant heating power", unit: "$\\text{W}$" }
    ],
    steps: [
      { zh: "恆定功率供熱 $E = Pt$。升溫階段：$Pt = mc\\Delta T \\Rightarrow \\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc} \\propto \\frac{1}{c}$。", en: "With constant power $E = Pt$: during heating, $Pt = mc\\Delta T \\Rightarrow \\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc}$." },
      { zh: "物態變化階段：$P\\Delta t = ml \\Rightarrow \\Delta t = \\frac{ml}{P} \\propto l$。", en: "During change of state: $P\\Delta t = ml \\Rightarrow \\Delta t = \\frac{ml}{P}$." }
    ],
    cond: { zh: "假設加熱功率恆定且無散熱；比較同一 $T$-$t$ 圖中固、液、氣三態斜率即可求比熱容量之比。", en: "Assumes constant power & negligible heat loss; steeper slope = smaller $c$." }
  },
  {
    id: "f-b1-ideal", book: "book1", category: "basic", onSheet: true,
    name: { zh: "理想氣體狀態方程", en: "Ideal Gas Equation of State" },
    eq: "pV = nRT = NkT",
    vars: [
      { sym: "$p$", zh: "氣體壓強", en: "Pressure", unit: "$\\text{Pa}$" },
      { sym: "$V$", zh: "氣體體積", en: "Volume", unit: "$\\text{m}^3$" },
      { sym: "$n$", zh: "摩爾數 ($n = N/N_A = m/M$)", en: "Number of moles", unit: "$\\text{mol}$" },
      { sym: "$R$", zh: "摩爾氣體常數 $8.31$", en: "Molar gas constant", unit: "$\\text{J mol}^{-1}\\text{ K}^{-1}$" },
      { sym: "$T$", zh: "絕對溫度", en: "Absolute temperature", unit: "$\\text{K}$" }
    ],
    cond: { zh: "玻爾茲曼常數 $k = R/N_A = 1.38 \\times 10^{-23}\\text{ J K}^{-1}$；所有量必轉 SI 單位！", en: "Boltzmann constant $k = R/N_A$; always convert $p, V, T$ to SI units ($\\text{Pa}, \\text{m}^3, \\text{K}$)." }
  },
  {
    id: "f-b1-boyle", book: "book1", category: "basic", onSheet: false,
    name: { zh: "三大氣體定律（波義耳 / 查理 / 壓強）", en: "Boyle's, Charles's & Pressure Laws" },
    eq: "p_1 V_1 = p_2 V_2 \\; (\\text{const } T), \\quad \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\; (\\text{const } p), \\quad \\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\; (\\text{const } V)",
    vars: [
      { sym: "$p, V, T$", zh: "初態與末態之壓強、體積、絕對溫度", en: "Initial & final pressure, volume, Kelvin temp", unit: "比值可用同單位（$T$ 必用 $\\text{K}$）" }
    ],
    cond: { zh: "僅適用於**固定質量（封閉系統，$n$ 不變）**的理想氣體。", en: "Valid ONLY for a **fixed mass** ($n$ constant) of ideal gas." }
  },
  {
    id: "f-b1-combined", book: "book1", category: "derived", onSheet: false,
    name: { zh: "綜合氣體定律", en: "General (Combined) Gas Law" },
    eq: "\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}",
    vars: [
      { sym: "$n$", zh: "恆定摩爾數", en: "Constant moles", unit: "$\\text{mol}$" }
    ],
    steps: [
      { zh: "由理想氣體方程 $pV = nRT$，移項得 $\\frac{pV}{T} = nR$。", en: "From $pV = nRT$, rearrange to $\\frac{pV}{T} = nR$." },
      { zh: "對固定質量氣體，$nR$ 為常數，故 $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$。", en: "For fixed mass, $nR = \\text{constant}$, hence $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$." }
    ],
    cond: { zh: "只要沒有漏氣或充氣（$n$ 不變），$p$ 和 $V$ 用任何一致單位皆可，但 $T$ 必須用 $\\text{K}$。", en: "Valid when no gas leaks/enters; $T$ MUST be in Kelvin." }
  },
  {
    id: "f-b1-mix-gas", book: "book1", category: "derived", onSheet: false,
    name: { zh: "雙容器連通氣體混合方程", en: "Connecting Two Gas Vessels" },
    eq: "\\frac{p_f (V_1 + V_2)}{T_f} = \\frac{p_1 V_1}{T_1} + \\frac{p_2 V_2}{T_2}",
    vars: [
      { sym: "$p_f, T_f$", zh: "連通平衡後的共同壓強與絕對溫度", en: "Final equilibrium pressure & temp", unit: "$\\text{Pa}, \\text{K}$" }
    ],
    steps: [
      { zh: "打開閥門後系統封閉，總摩爾數守恆：$n_f = n_1 + n_2$。", en: "Conservation of total moles: $n_f = n_1 + n_2$." },
      { zh: "以 $n = \\frac{pV}{RT}$ 代入各項並約去常數 $R$，得 $\\frac{p_f V_f}{T_f} = \\frac{p_1 V_1}{T_1} + \\frac{p_2 V_2}{T_2}$。", en: "Substitute $n = \\frac{pV}{RT}$ and cancel $R$: $\\frac{p_f V_f}{T_f} = \\frac{p_1 V_1}{T_1} + \\frac{p_2 V_2}{T_2}$." },
      { zh: "若過程絕熱且無外界作功，總內能守恆 $U_f = U_1 + U_2 \\Rightarrow \\frac{3}{2}p_f(V_1+V_2) = \\frac{3}{2}p_1 V_1 + \\frac{3}{2}p_2 V_2$，可直接秒求 $p_f = \\frac{p_1 V_1 + p_2 V_2}{V_1 + V_2}$！", en: "If insulated with no work done, internal energy conservation ($U = \\frac{3}{2}pV$) gives $p_f = \\frac{p_1 V_1 + p_2 V_2}{V_1 + V_2}$ directly!" }
    ],
    cond: { zh: "高頻 Paper 1B 壓軸氣體題必備方法！", en: "Essential method for challenging Paper 1B two-bulb gas problems!" }
  },
  {
    id: "f-b1-kt", book: "book1", category: "basic", onSheet: true,
    name: { zh: "分子動理論壓強方程", en: "Kinetic Theory Equation" },
    eq: "pV = \\frac{1}{3}Nm\\overline{c^2}",
    vars: [
      { sym: "$N$", zh: "氣體分子總數", en: "Total number of molecules", unit: "無單位" },
      { sym: "$m$", zh: "單個分子質量", en: "Mass of one molecule", unit: "$\\text{kg}$" },
      { sym: "$\\overline{c^2}$", zh: "分子速率的均方值", en: "Mean square speed", unit: "$\\text{m}^2\\text{ s}^{-2}$" }
    ],
    cond: { zh: "因密度 $\\rho = \\frac{Nm}{V}$，亦可寫成 $p = \\frac{1}{3}\\rho\\overline{c^2}$。", en: "Since density $\\rho = Nm/V$, equivalently $p = \\frac{1}{3}\\rho\\overline{c^2}$." }
  },
  {
    id: "f-b1-kt-deriv", book: "book1", category: "derived", onSheet: false,
    name: { zh: "課本推導：由分子碰撞器壁推導 $pV = \\frac{1}{3}Nm\\overline{c^2}$", en: "Textbook Derivation of Kinetic Theory Equation" },
    eq: "pV = \\frac{1}{3}Nm\\overline{c^2}",
    vars: [
      { sym: "$L$", zh: "立方體容器邊長（$V = L^3$）", en: "Side length of cubic container ($V = L^3$)", unit: "$\\text{m}$" },
      { sym: "$c_x$", zh: "分子沿 $x$ 方向速度分量", en: "$x$-component of molecular velocity", unit: "$\\text{m s}^{-1}$" }
    ],
    steps: [
      { zh: "考慮邊長 $L$ 的立方體容器內一個質量 $m$ 的分子，以速度分量 $c_x$ 垂直彈性撞擊面積為 $L^2$ 的壁面並反彈至 $-c_x$，動量變化大小 $\\Delta p_x = 2mc_x$。", en: "One molecule of mass $m$ hits a wall (area $L^2$) elastically at $c_x$ and rebounds at $-c_x$: momentum change $\\Delta p_x = 2mc_x$." },
      { zh: "分子往返對面壁再回來需時 $\\Delta t = \\frac{2L}{c_x}$，由牛頓第二定律，單個分子施於壁面平均力 $F_1 = \\frac{\\Delta p_x}{\\Delta t} = \\frac{2mc_x}{2L/c_x} = \\frac{mc_x^2}{L}$。", en: "Time between successive hits on same wall is $\\Delta t = \\frac{2L}{c_x}$, so average force $F_1 = \\frac{\\Delta p_x}{\\Delta t} = \\frac{mc_x^2}{L}$." },
      { zh: "對 $N$ 個分子求和：$F_{\\text{total}} = \\frac{m}{L}\\sum c_x^2 = \\frac{Nm\\overline{c_x^2}}{L}$，故壓強 $p = \\frac{F_{\\text{total}}}{L^2} = \\frac{Nm\\overline{c_x^2}}{L^3} = \\frac{Nm\\overline{c_x^2}}{V}$。", en: "Summing over $N$ molecules: $p = \\frac{F}{L^2} = \\frac{Nm\\overline{c_x^2}}{V}$." },
      { zh: "因分子運動完全隨機各向同性，$\\overline{c^2} = \\overline{c_x^2} + \\overline{c_y^2} + \\overline{c_z^2}$ 且 $\\overline{c_x^2} = \\overline{c_y^2} = \\overline{c_z^2} = \\frac{1}{3}\\overline{c^2}$，代入即得 $pV = \\frac{1}{3}Nm\\overline{c^2}$！", en: "By random isotropic motion, $\\overline{c_x^2} = \\overline{c_y^2} = \\overline{c_z^2} = \\frac{1}{3}\\overline{c^2}$, yielding $pV = \\frac{1}{3}Nm\\overline{c^2}$!" }
    ],
    cond: { zh: "課本核心完整推導，熟記每步物理假設（彈性碰撞、忽略分子碰撞彼此、各向同性）。", en: "Classic textbook derivation — know every physical assumption!" }
  },
  {
    id: "f-b1-ke", book: "book1", category: "basic", onSheet: true,
    name: { zh: "理想氣體分子平均動能", en: "Average Molecular Kinetic Energy" },
    eq: "E_K = \\frac{3RT}{2N_A} = \\frac{3}{2}kT",
    vars: [
      { sym: "$E_K$", zh: "單個分子平均平動動能 ($\\frac{1}{2}m\\overline{c^2}$)", en: "Average molecular KE", unit: "$\\text{J}$" }
    ],
    cond: { zh: "僅取決於絕對溫度 $T$，與氣體種類、質量、壓強皆無關！", en: "Depends ONLY on absolute temperature $T$ — identical for all ideal gases at same $T$!" }
  },
  {
    id: "f-b1-crms", book: "book1", category: "derived", onSheet: false,
    name: { zh: "分子均方根速率（r.m.s. Speed）", en: "Root-Mean-Square Speed of Gas Molecules" },
    eq: "c_{\\text{rms}} = \\sqrt{\\overline{c^2}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3p}{\\rho}}",
    vars: [
      { sym: "$M$", zh: "氣體摩爾質量（注意轉 $\\text{kg mol}^{-1}$！）", en: "Molar mass (in $\\text{kg mol}^{-1}$!)", unit: "$\\text{kg mol}^{-1}$" },
      { sym: "$\\rho$", zh: "氣體密度", en: "Gas density", unit: "$\\text{kg m}^{-3}$" }
    ],
    steps: [
      { zh: "結合 $pV = \\frac{1}{3}Nm\\overline{c^2}$ 與 $pV = nRT$，且 $n = \\frac{N}{N_A}$，得 $\\frac{1}{3}Nm\\overline{c^2} = \\frac{N}{N_A}RT$。", en: "Equate $pV = \\frac{1}{3}Nm\\overline{c^2}$ with $pV = nRT = \\frac{N}{N_A}RT$." },
      { zh: "約去 $N$ 並注意到 $m N_A = M$（摩爾質量）：$\\overline{c^2} = \\frac{3RT}{M}$，開平方即得 $c_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$。", en: "Cancel $N$ and note $mN_A = M$: $c_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$." },
      { zh: "同時由 $p = \\frac{1}{3}\\rho\\overline{c^2}$ 亦直接得 $c_{\\text{rms}} = \\sqrt{\\frac{3p}{\\rho}}$。", en: "Also from $p = \\frac{1}{3}\\rho\\overline{c^2}$, $c_{\\text{rms}} = \\sqrt{\\frac{3p}{\\rho}}$." }
    ],
    cond: { zh: "極常見單位陷阱：氧氣 $\\text{O}_2$ 摩爾質量 $M = 0.032\\text{ kg mol}^{-1}$（切勿忘記將 $\\text{g}$ 除 $1000$ 轉 $\\text{kg}$！）。", en: "Unit trap: convert molar mass from $\\text{g mol}^{-1}$ to $\\text{kg mol}^{-1}$ (e.g. $\\text{O}_2$: $0.032\\text{ kg mol}^{-1}$)!" }
  },
  {
    id: "f-b1-internal-u", book: "book1", category: "derived", onSheet: false,
    name: { zh: "單原子理想氣體總內能", en: "Total Internal Energy of Ideal Gas" },
    eq: "U = N E_K = \\frac{3}{2}nRT = \\frac{3}{2}pV",
    vars: [
      { sym: "$U$", zh: "理想氣體總內能", en: "Total internal energy", unit: "$\\text{J}$" }
    ],
    steps: [
      { zh: "理想氣體分子間無作用力，分子勢能為零，故總內能等於 $N$ 個分子的總動能：$U = N \\cdot \\frac{3RT}{2N_A}$。", en: "Zero molecular PE for ideal gas, so $U = N \\cdot \\frac{3RT}{2N_A}$." },
      { zh: "代入 $n = \\frac{N}{N_A}$ 及 $pV = nRT$，得 $U = \\frac{3}{2}nRT = \\frac{3}{2}pV$。", en: "Using $n = N/N_A$ and $pV = nRT$ gives $U = \\frac{3}{2}nRT = \\frac{3}{2}pV$." }
    ],
    cond: { zh: "對恆定摩爾數的理想氣體，內能只與絕對溫度 $T$ 成正比（等溫過程 $\\Delta U = 0$）。", en: "For fixed $n$, $U \\propto T$ only (isothermal change $\\Rightarrow \\Delta U = 0$)." }
  },

  /* ===================== BOOK 2: FORCE AND MOTION ===================== */
  {
    id: "f-b2-suvat1", book: "book2", category: "basic", onSheet: false,
    name: { zh: "勻加速運動方程（一）：速度與時間", en: "Kinematics Eq 1 (Velocity–Time)" },
    eq: "v = u + at",
    vars: [
      { sym: "$u, v$", zh: "初速度、末速度", en: "Initial & final velocity", unit: "$\\text{m s}^{-1}$" },
      { sym: "$a, t$", zh: "恆定加速度、時間", en: "Constant acceleration, time", unit: "$\\text{m s}^{-2}, \\text{s}$" }
    ],
    cond: { zh: "由加速度定義 $a = \\frac{v-u}{t}$ 直接得出；僅適用於恆定加速度！", en: "Directly from $a = (v-u)/t$; constant acceleration only!" }
  },
  {
    id: "f-b2-suvat2", book: "book2", category: "derived", onSheet: false,
    name: { zh: "勻加速運動方程（二）：平均速度位移式", en: "Kinematics Eq 2 (Average Velocity)" },
    eq: "s = \\frac{1}{2}(u + v)t",
    vars: [
      { sym: "$s$", zh: "位移", en: "Displacement", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "勻加速直線運動的 $v$-$t$ 圖為一條斜直線，時間 $0$ 至 $t$ 內圖線下圍成一個梯形。", en: "For constant $a$, the $v$-$t$ graph is a straight line forming a trapezium of height $t$." },
      { zh: "位移等於梯形面積：$s = \\frac{(u + v) \\times t}{2} = \\frac{1}{2}(u + v)t$。", en: "Displacement = trapezium area = $\\frac{1}{2}(u+v)t$." }
    ],
    cond: { zh: "無需知道加速度 $a$ 時使用；注意符號方向。", en: "Useful when $a$ is unknown; preserve vector signs." }
  },
  {
    id: "f-b2-suvat3", book: "book2", category: "derived", onSheet: false,
    name: { zh: "勻加速運動方程（三）：位移與時間", en: "Kinematics Eq 3 (Displacement–Time)" },
    eq: "s = ut + \\frac{1}{2}at^2",
    vars: [
      { sym: "$s, u, a, t$", zh: "位移、初速、加速度、時間", en: "Displacement, initial velocity, acceleration, time", unit: "SI" }
    ],
    steps: [
      { zh: "從方程（一）$v = u + at$ 代入方程（二）$s = \\frac{1}{2}(u + v)t$。", en: "Substitute $v = u + at$ into $s = \\frac{1}{2}(u + v)t$." },
      { zh: "展開化簡：$s = \\frac{1}{2}(u + u + at)t = ut + \\frac{1}{2}at^2$。", en: "Simplify: $s = \\frac{1}{2}(2u + at)t = ut + \\frac{1}{2}at^2$." }
    ],
    cond: { zh: "亦為官方考卷常用基準式（必須滾瓜爛熟，切忌當成變加速通用式）。", en: "Constant acceleration along a straight line only." }
  },
  {
    id: "f-b2-suvat4", book: "book2", category: "derived", onSheet: false,
    name: { zh: "勻加速運動方程（四）：無時間式", en: "Kinematics Eq 4 (Time-Independent)" },
    eq: "v^2 = u^2 + 2as",
    vars: [
      { sym: "$v, u, a, s$", zh: "末速、初速、加速度、位移", en: "Final/initial velocity, acceleration, displacement", unit: "SI" }
    ],
    steps: [
      { zh: "由 $v = u + at$ 解出 $t = \\frac{v - u}{a}$。", en: "From $v = u + at$, isolate $t = \\frac{v - u}{a}$." },
      { zh: "代入 $s = \\frac{1}{2}(u + v)t = \\frac{(v + u)(v - u)}{2a} = \\frac{v^2 - u^2}{2a}$。", en: "Substitute into $s = \\frac{1}{2}(u+v)t = \\frac{v^2 - u^2}{2a}$." },
      { zh: "兩邊乘以 $2a$ 整理得 $v^2 = u^2 + 2as$（煞車距離 $s = \\frac{u^2}{2a} \\propto u^2$！）。", en: "Multiply by $2a$: $v^2 = u^2 + 2as$ (braking distance $s \\propto u^2$!)." }
    ],
    cond: { zh: "超常用於求煞車距離、最大上拋高度及兩倍速度比較題！", en: "Ideal when time $t$ is neither given nor asked." }
  },
  {
    id: "f-b2-n2l", book: "book2", category: "basic", onSheet: true,
    name: { zh: "牛頓第二運動定律", en: "Newton's Second Law of Motion" },
    eq: "F = m\\frac{\\Delta v}{\\Delta t} = \\frac{\\Delta p}{\\Delta t} = ma",
    vars: [
      { sym: "$F$", zh: "物體所受**淨外力（合力）**", en: "**Net** external force", unit: "$\\text{N}$" },
      { sym: "$m, a$", zh: "質量、加速度", en: "Mass, acceleration", unit: "$\\text{kg}, \\text{m s}^{-2}$" }
    ],
    cond: { zh: "$F$ 與 $a$ 永遠方向相同；若質量隨時間變化（如水柱噴射），須用 $F = \\frac{\\Delta p}{\\Delta t}$。", en: "$F$ and $a$ always share direction; use $F = \\Delta p/\\Delta t$ for variable-mass flows." }
  },
  {
    id: "f-b2-weight", book: "book2", category: "basic", onSheet: false,
    name: { zh: "重力（重量）", en: "Weight" },
    eq: "W = mg",
    vars: [
      { sym: "$W$", zh: "重量（向下重力）", en: "Weight", unit: "$\\text{N}$" },
      { sym: "$g$", zh: "重力加速度（地表 $9.81\\text{ m s}^{-2}$）", en: "Gravitational acceleration ($9.81\\text{ m s}^{-2}$)", unit: "$\\text{m s}^{-2}$" }
    ],
    cond: { zh: "質量 $m$ 為標量到處不變；重量 $W$ 為矢量隨引力場 $g$ 改變。", en: "Mass $m$ is invariant scalar; weight $W$ is a vector varying with $g$." }
  },
  {
    id: "f-b2-incline", book: "book2", category: "derived", onSheet: false,
    name: { zh: "斜面受力分解與下滑加速度", en: "Inclined Plane Force Resolution & Acceleration" },
    eq: "R = mg\\cos\\theta, \\quad a = g\\sin\\theta - \\frac{f}{m}",
    vars: [
      { sym: "$\\theta$", zh: "斜面與水平面夾角", en: "Angle of inclination", unit: "$^\\circ$" },
      { sym: "$R, f$", zh: "法向反作用力、沿斜面摩擦力", en: "Normal reaction, friction", unit: "$\\text{N}$" }
    ],
    steps: [
      { zh: "建立平行及垂直斜面兩條正交軸，將豎直向下的重力 $mg$ 分解為沿斜面向下 $mg\\sin\\theta$ 及垂直斜面向下 $mg\\cos\\theta$。", en: "Resolve $mg$ parallel ($mg\\sin\\theta$) and perpendicular ($mg\\cos\\theta$) to the plane." },
      { zh: "垂直方向無加速度：$R - mg\\cos\\theta = 0 \\Rightarrow R = mg\\cos\\theta$。", en: "Perpendicular equilibrium: $R = mg\\cos\\theta$." },
      { zh: "沿斜面向下套用牛頓第二定律：$mg\\sin\\theta - f = ma \\Rightarrow a = g\\sin\\theta - \\frac{f}{m}$（若光滑無摩擦，$a = g\\sin\\theta$，與質量無關！）。", en: "Along slope: $mg\\sin\\theta - f = ma \\Rightarrow a = g\\sin\\theta - f/m$ (smooth plane: $a = g\\sin\\theta$, independent of $m$!)." }
    ],
    cond: { zh: "注意上滑時摩擦力方向反轉為沿斜面向下，此時減速度 $a = -(g\\sin\\theta + f/m)$！", en: "When sliding UP the plane, friction acts DOWN the slope: $a = -(g\\sin\\theta + f/m)$!" }
  },
  {
    id: "f-b2-lift", book: "book2", category: "derived", onSheet: false,
    name: { zh: "升降機視重（磅秤讀數）", en: "Apparent Weight in a Lift" },
    eq: "R = m(g + a)",
    vars: [
      { sym: "$R$", zh: "磅秤施加向上的支持力（視重）", en: "Normal reaction (scale reading)", unit: "$\\text{N}$" },
      { sym: "$a$", zh: "加速度（取向上為正，向下為負）", en: "Acceleration ($+$ upward, $-$ downward)", unit: "$\\text{m s}^{-2}$" }
    ],
    steps: [
      { zh: "人受向上支持力 $R$ 及向下重力 $mg$，取向上為正方向。", en: "Forces on person: upward $R$ and downward $mg$ (take upward positive)." },
      { zh: "由牛頓第二定律：$R - mg = ma \\Rightarrow R = m(g + a)$。", en: "By Newton's 2nd Law: $R - mg = ma \\Rightarrow R = m(g + a)$." }
    ],
    cond: { zh: "向下加速或向上減速時 $a < 0$（失重）；自由落體 $a = -g \\Rightarrow R = 0$。", en: "Accelerating down / decelerating up: $a < 0$; free fall: $a = -g \\Rightarrow R = 0$." }
  },
  {
    id: "f-b2-moment", book: "book2", category: "basic", onSheet: true,
    name: { zh: "力矩公式", en: "Moment of a Force" },
    eq: "\\text{moment} = F \\times d_\\perp = Fr\\sin\\theta",
    vars: [
      { sym: "$d_\\perp$", zh: "支點至力作用線的**垂直距離（力臂）**", en: "**Perpendicular distance** from pivot to line of action", unit: "$\\text{m}$" }
    ],
    cond: { zh: "靜力平衡須同時滿足：淨力 $= 0$ 且 順時針總力矩 $=$ 逆時針總力矩。", en: "Equilibrium requires BOTH $\\sum F = 0$ AND $\\sum \\tau_{\\text{cw}} = \\sum \\tau_{\\text{acw}}$." }
  },
  {
    id: "f-b2-work", book: "book2", category: "basic", onSheet: false,
    name: { zh: "力所作的功", en: "Work Done by a Force" },
    eq: "W = Fs\\cos\\theta",
    vars: [
      { sym: "$\\theta$", zh: "力 $F$ 與位移 $s$ 之間的夾角", en: "Angle between force $F$ and displacement $s$", unit: "$^\\circ$" }
    ],
    cond: { zh: "$\\theta = 90^\\circ$ 時 $W = 0$；$\\theta > 90^\\circ$ 時力作負功（耗散機械能，如摩擦力）。", en: "$W = 0$ if $F \\perp s$; $W < 0$ if force opposes motion (e.g. friction)." }
  },
  {
    id: "f-b2-pe", book: "book2", category: "basic", onSheet: true,
    name: { zh: "重力勢能", en: "Gravitational Potential Energy" },
    eq: "E_P = mgh",
    vars: [
      { sym: "$h$", zh: "相對於零勢能參考面的豎直高度", en: "Vertical height above reference level", unit: "$\\text{m}$" }
    ],
    cond: { zh: "適用於近地勻強引力場（$g$ 恆定）。", en: "Valid near planetary surface where $g$ is uniform." }
  },
  {
    id: "f-b2-ke", book: "book2", category: "basic", onSheet: true,
    name: { zh: "動能", en: "Kinetic Energy" },
    eq: "E_K = \\frac{1}{2}mv^2",
    vars: [
      { sym: "$v$", zh: "物體速率", en: "Speed", unit: "$\\text{m s}^{-1}$" }
    ],
    cond: { zh: "動能為非負標量；速率加倍，動能增為 4 倍。", en: "Always non-negative scalar; doubling speed quadruples KE." }
  },
  {
    id: "f-b2-power", book: "book2", category: "basic", onSheet: true,
    name: { zh: "機械功率", en: "Mechanical Power" },
    eq: "P = \\frac{W}{t} = Fv",
    vars: [
      { sym: "$P$", zh: "功率（$1\\text{ W} = 1\\text{ J s}^{-1}$）", en: "Power", unit: "$\\text{W}$" },
      { sym: "$F$", zh: "沿速度方向的驅動力", en: "Driving force along velocity", unit: "$\\text{N}$" }
    ],
    cond: { zh: "汽車達最高勻速時牽引力等於阻力：$P = f v_{\\max}$。", en: "At max steady speed, driving force equals total resistance: $P = f v_{\\max}$." }
  },
  {
    id: "f-b2-wet", book: "book2", category: "derived", onSheet: false,
    name: { zh: "功能定理（Work-Energy Theorem）", en: "Work-Energy Theorem" },
    eq: "W_{\\text{net}} = F_{\\text{net}} s = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = \\Delta E_K",
    vars: [
      { sym: "$W_{\\text{net}}$", zh: "合力所作的淨功", en: "Net work done by resultant force", unit: "$\\text{J}$" }
    ],
    steps: [
      { zh: "由勻加速方程 $v^2 - u^2 = 2as$，兩邊乘以 $\\frac{1}{2}m$：$\\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = mas$。", en: "Multiply $v^2 - u^2 = 2as$ by $\\frac{1}{2}m$: $\\frac{1}{2}mv^2 - \\frac{1}{2}mu^2 = mas$." },
      { zh: "代入牛頓第二定律 $F_{\\text{net}} = ma$，即得 $W_{\\text{net}} = F_{\\text{net}} s = \\Delta E_K$。", en: "Substitute $F_{\\text{net}} = ma$: $W_{\\text{net}} = \\Delta E_K$." }
    ],
    cond: { zh: "處理有摩擦力滑行或曲面運動（如過山車）極快、無需計算時間與加速度！", en: "Saves time on curved tracks or frictional slides where acceleration varies!" }
  },
  {
    id: "f-b2-momentum", book: "book2", category: "basic", onSheet: false,
    name: { zh: "線動量", en: "Linear Momentum" },
    eq: "p = mv",
    vars: [
      { sym: "$p$", zh: "動量（矢量，與速度同向）", en: "Momentum (vector)", unit: "$\\text{kg m s}^{-1}$ 或 $\\text{N s}$" }
    ],
    cond: { zh: "矢量運算必須先定正方向！", en: "Vector quantity — define a positive direction first!" }
  },
  {
    id: "f-b2-impulse", book: "book2", category: "basic", onSheet: false,
    name: { zh: "衝量與動量定理", en: "Impulse–Momentum Theorem" },
    eq: "J = F\\Delta t = \\Delta p = mv - mu",
    vars: [
      { sym: "$J$", zh: "衝量（等於 $F$-$t$ 圖線下面積）", en: "Impulse (= area under $F$-$t$ graph)", unit: "$\\text{N s}$" }
    ],
    cond: { zh: "對變力衝擊，$F$ 代表撞擊期間的**平均力**。", en: "For varying impact force, $F$ represents the **average force**." }
  },
  {
    id: "f-b2-com", book: "book2", category: "basic", onSheet: false,
    name: { zh: "動量守恆定律", en: "Conservation of Linear Momentum" },
    eq: "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2",
    vars: [
      { sym: "$u_1, u_2, v_1, v_2$", zh: "碰撞前後兩物體速度（帶正負號）", en: "Velocities before & after collision (signed)", unit: "$\\text{m s}^{-1}$" }
    ],
    cond: { zh: "條件：系統所受**淨外力為零**（或內力遠大於外力之瞬間碰撞）。", en: "Valid when **net external force = 0** on the system." }
  },
  {
    id: "f-b2-ke-p", book: "book2", category: "derived", onSheet: false,
    name: { zh: "動能與動量關係式（爆炸分能神技）", en: "Kinetic Energy–Momentum Relation" },
    eq: "E_K = \\frac{p^2}{2m}",
    vars: [
      { sym: "$p, m$", zh: "動量大小、質量", en: "Momentum magnitude, mass", unit: "SI" }
    ],
    steps: [
      { zh: "由 $p = mv$ 得 $v = \\frac{p}{m}$。", en: "From $p = mv$, $v = p/m$." },
      { zh: "代入 $E_K = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\left(\\frac{p}{m}\\right)^2 = \\frac{p^2}{2m}$。", en: "Substitute into $E_K = \\frac{1}{2}mv^2$: $E_K = \\frac{p^2}{2m}$." }
    ],
    cond: { zh: "靜止物體爆炸裂成兩塊時，$p_1 = p_2 \\Rightarrow \\frac{E_{K1}}{E_{K2}} = \\frac{m_2}{m_1}$（輕者分得更多動能！）；亦用於核衰變反衝及德布羅意波長推導！", en: "In recoil/explosion from rest, equal $|p|$ means $E_{K1}/E_{K2} = m_2/m_1$ (lighter fragment gets more KE!)." }
  },
  {
    id: "f-b2-proj-t", book: "book2", category: "derived", onSheet: false,
    name: { zh: "拋體飛行時間（平地至平地）", en: "Projectile Time of Flight (Level Ground)" },
    eq: "T = \\frac{2u\\sin\\theta}{g}",
    vars: [
      { sym: "$u, \\theta$", zh: "發射初速率、仰角", en: "Launch speed, elevation angle", unit: "$\\text{m s}^{-1}, ^\\circ$" }
    ],
    steps: [
      { zh: "取向上為正，豎直初速 $u_y = u\\sin\\theta$，加速度 $a_y = -g$。", en: "Take upward $+$: $u_y = u\\sin\\theta$, $a_y = -g$." },
      { zh: "回到同高度地面時豎直位移 $s_y = 0$，代入 $s_y = u_y t + \\frac{1}{2}a_y t^2$：$0 = (u\\sin\\theta)T - \\frac{1}{2}gT^2$。", en: "Returning to ground ($s_y = 0$): $0 = (u\\sin\\theta)T - \\frac{1}{2}gT^2$." },
      { zh: "捨去 $T = 0$，解得 $T = \\frac{2u\\sin\\theta}{g}$。", en: "Solving for $T > 0$ gives $T = \\frac{2u\\sin\\theta}{g}$." }
    ],
    cond: { zh: "忽略空氣阻力且起點與落點處於同一水平面。", en: "No air resistance; launch & landing at same level." }
  },
  {
    id: "f-b2-proj-h", book: "book2", category: "derived", onSheet: false,
    name: { zh: "拋體最大高度", en: "Projectile Maximum Height" },
    eq: "H = \\frac{u^2 \\sin^2\\theta}{2g}",
    vars: [
      { sym: "$H$", zh: "相對發射點的最大上升高度", en: "Maximum height above launch point", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "最高點豎直分速度 $v_y = 0$，套用 $v_y^2 = u_y^2 + 2a_y s_y$。", en: "At apex $v_y = 0$; apply $v_y^2 = u_y^2 + 2a_y H$." },
      { zh: "$0 = (u\\sin\\theta)^2 - 2gH \\Rightarrow H = \\frac{u^2 \\sin^2\\theta}{2g}$。", en: "$0 = u^2\\sin^2\\theta - 2gH \\Rightarrow H = \\frac{u^2\\sin^2\\theta}{2g}$." }
    ],
    cond: { zh: "在最高點物體速率不為零，而是 $v_x = u\\cos\\theta$。", en: "At max height, speed is still $u\\cos\\theta \\ne 0$." }
  },
  {
    id: "f-b2-proj-r", book: "book2", category: "derived", onSheet: false,
    name: { zh: "拋體水平射程（Range）", en: "Projectile Horizontal Range" },
    eq: "R = \\frac{u^2 \\sin 2\\theta}{g}",
    vars: [
      { sym: "$R$", zh: "水平射程（$\\theta = 45^\\circ$ 時達最大 $u^2/g$）", en: "Horizontal range (max at $45^\\circ$)", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "水平方向無加速，$v_x = u\\cos\\theta$，故 $R = v_x T = (u\\cos\\theta)\\left(\\frac{2u\\sin\\theta}{g}\\right)$。", en: "Uniform horizontal motion: $R = v_x T = (u\\cos\\theta)\\frac{2u\\sin\\theta}{g}$." },
      { zh: "利用三角倍角公式 $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$，即得 $R = \\frac{u^2 \\sin 2\\theta}{g}$。", en: "Using $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$: $R = \\frac{u^2\\sin 2\\theta}{g}$." }
    ],
    cond: { zh: "僅適用於**平地至平地**！若由高崖拋下，切忌直接套用此式，必須拆回水平與豎直分量計算！", en: "Level ground ONLY! From a cliff, solve $x$ and $y$ equations separately!" }
  },
  {
    id: "f-b2-proj-traj", book: "book2", category: "derived", onSheet: false,
    name: { zh: "拋物線軌跡方程", en: "Projectile Trajectory Equation" },
    eq: "y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}",
    vars: [
      { sym: "$(x, y)$", zh: "相對發射點的水平與豎直坐標", en: "Horizontal & vertical coordinates from launch", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "由水平位移 $x = (u\\cos\\theta)t$ 消去時間：$t = \\frac{x}{u\\cos\\theta}$。", en: "From $x = (u\\cos\\theta)t$, solve $t = \\frac{x}{u\\cos\\theta}$." },
      { zh: "代入豎直位移 $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$，化簡得 $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$。", en: "Substitute into $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$ to obtain the parabola." }
    ],
    cond: { zh: "證明忽略空氣阻力下拋體軌跡為二次拋物線。", en: "Proves trajectory is a parabola under uniform $g$." }
  },
  {
    id: "f-b2-omega", book: "book2", category: "basic", onSheet: false,
    name: { zh: "角速度與線速率關係", en: "Angular Speed & Linear Speed" },
    eq: "\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f, \\quad v = r\\omega",
    vars: [
      { sym: "$\\omega$", zh: "角速度", en: "Angular speed", unit: "$\\text{rad s}^{-1}$" },
      { sym: "$r, T, f$", zh: "圓周半徑、週期、頻率", en: "Radius, period, frequency", unit: "$\\text{m}, \\text{s}, \\text{Hz}$" }
    ],
    cond: { zh: "計算時角位移 $\\Delta\\theta$ 必須用弧度 $\\text{rad}$（$1\\text{ rev} = 2\\pi\\text{ rad}$）。", en: "Angles must be in radians ($2\\pi\\text{ rad} = 360^\\circ$)." }
  },
  {
    id: "f-b2-fc", book: "book2", category: "basic", onSheet: true,
    name: { zh: "向心加速度與向心力", en: "Centripetal Acceleration & Force" },
    eq: "a_c = \\frac{v^2}{r} = \\omega^2 r, \\quad F_c = \\frac{mv^2}{r} = m\\omega^2 r",
    vars: [
      { sym: "$F_c$", zh: "指向圓心的淨力（合力）", en: "Net force directed towards centre", unit: "$\\text{N}$" }
    ],
    cond: { zh: "向心力與速度方向永遠垂直，因此**對勻速圓周運動物體不作功**。", en: "Always perpendicular to velocity → does zero work in uniform circular motion." }
  },
  {
    id: "f-b2-banked", book: "book2", category: "derived", onSheet: false,
    name: { zh: "傾斜彎道（無側面摩擦）理想傾角", en: "Ideal Banking Angle (Frictionless Road)" },
    eq: "\\tan\\theta = \\frac{v^2}{rg}",
    vars: [
      { sym: "$\\theta$", zh: "路面與水平面的傾斜角", en: "Banking angle to horizontal", unit: "$^\\circ$" },
      { sym: "$r, v$", zh: "轉彎半徑、設計車速", en: "Turn radius, design speed", unit: "$\\text{m}, \\text{m s}^{-1}$" }
    ],
    steps: [
      { zh: "無側面摩擦時，汽車只受重力 $mg$ 及垂直路面的法向反作用力 $R$。", en: "With zero sideways friction, only $mg$ and normal reaction $R$ act on the car." },
      { zh: "豎直方向平衡：$R\\cos\\theta = mg$ — (1)。", en: "Vertical equilibrium: $R\\cos\\theta = mg$ — (1)." },
      { zh: "水平指向圓心分力提供向心力：$R\\sin\\theta = \\frac{mv^2}{r}$ — (2)。", en: "Horizontal component provides $F_c$: $R\\sin\\theta = \\frac{mv^2}{r}$ — (2)." },
      { zh: "以 (2) ÷ (1) 消去 $R$ 與 $m$，得 $\\tan\\theta = \\frac{v^2}{rg}$（與車質量 $m$ 無關！同樣適用於飛機傾斜轉彎）。", en: "Divide (2) by (1): $\\tan\\theta = \\frac{v^2}{rg}$ (independent of mass $m$! Also applies to banking aircraft)." }
    ],
    cond: { zh: "若實際車速 $v > \\sqrt{rg\\tan\\theta}$，需要沿斜面向下的靜摩擦力防止向外打滑。", en: "If $v > \\sqrt{rg\\tan\\theta}$, downward friction along slope is needed to prevent outward skidding." }
  },
  {
    id: "f-b2-conical", book: "book2", category: "derived", onSheet: false,
    name: { zh: "圓錐擺（Conical Pendulum）週期與張角", en: "Conical Pendulum Period & Angle" },
    eq: "\\cos\\theta = \\frac{g}{\\omega^2 L}, \\quad T_p = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}",
    vars: [
      { sym: "$L, \\theta$", zh: "擺繩長度、擺繩與鉛垂線夾角", en: "String length, angle to vertical", unit: "$\\text{m}, ^\\circ$" }
    ],
    steps: [
      { zh: "水平圓周半徑 $r = L\\sin\\theta$。豎直平衡：$T\\cos\\theta = mg$；水平向心力：$T\\sin\\theta = m\\omega^2 r = m\\omega^2 L\\sin\\theta$。", en: "Radius $r = L\\sin\\theta$. Vertical: $T\\cos\\theta = mg$; horizontal: $T\\sin\\theta = m\\omega^2 L\\sin\\theta$." },
      { zh: "由水平式約去 $\\sin\\theta$ 得 $T = m\\omega^2 L$，代入豎直式：$m\\omega^2 L\\cos\\theta = mg \\Rightarrow \\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$。", en: "Cancel $\\sin\\theta$: $T = m\\omega^2 L$. Substitute into vertical eq: $\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$." },
      { zh: "故週期 $T_p = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$（且因 $\\cos\\theta = \\frac{g}{\\omega^2 L} > 0$，繩子永不可能水平 $\\theta = 90^\\circ$！）。", en: "Period $T_p = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$ ($\\theta$ can never reach $90^\\circ$!)." }
    ],
    cond: { zh: "注意 $\\theta$ 是繩子與**鉛垂線**的夾角！", en: "Here $\\theta$ is measured from the **vertical**!" }
  },
  {
    id: "f-b2-grav", book: "book2", category: "basic", onSheet: true,
    name: { zh: "牛頓萬有引力定律", en: "Newton's Law of Universal Gravitation" },
    eq: "F = \\frac{GMm}{r^2}",
    vars: [
      { sym: "$G$", zh: "萬有引力常數 $6.67 \\times 10^{-11}$", en: "Gravitational constant", unit: "$\\text{N m}^2\\text{ kg}^{-2}$" },
      { sym: "$r$", zh: "兩球體**球心之間的距離**", en: "**Centre-to-centre** separation", unit: "$\\text{m}$" }
    ],
    cond: { zh: "切記 $r = R_{\\text{行星}} + h$（不是離地高度 $h$！）。", en: "Always use centre-to-centre distance $r = R + h$, NOT altitude $h$!" }
  },
  {
    id: "f-b2-gfield", book: "book2", category: "derived", onSheet: false,
    name: { zh: "引力場強度與地表常數代換", en: "Gravitational Field Strength & Surface Shortcut" },
    eq: "g = \\frac{GM}{r^2}, \\quad GM = g_0 R^2",
    vars: [
      { sym: "$g_0, R$", zh: "行星表面引力場強度、行星半徑", en: "Surface $g$, planet radius", unit: "$\\text{m s}^{-2}, \\text{m}$" }
    ],
    steps: [
      { zh: "引力場強度定義為單位質量所受引力：$g = \\frac{F}{m} = \\frac{GMm/r^2}{m} = \\frac{GM}{r^2}$。", en: "Field strength $g = F/m = \\frac{GM}{r^2}$." },
      { zh: "在行星表面 $r = R$ 處，$g_0 = \\frac{GM}{R^2} \\Rightarrow GM = g_0 R^2$（題目沒給 $G$ 和 $M$ 時直接以此代換！）。", en: "At surface ($r = R$), $g_0 = GM/R^2 \\Rightarrow GM = g_0 R^2$ (crucial when $G$ and $M$ aren't given!)." }
    ],
    cond: { zh: "僅適用於球形均勻天體外部（$r \\ge R$）。", en: "Valid outside a uniform spherical body ($r \\ge R$)." }
  },
  {
    id: "f-b2-orbit-v", book: "book2", category: "derived", onSheet: false,
    name: { zh: "圓軌道衛星線速率", en: "Circular Orbital Speed" },
    eq: "v = \\sqrt{\\frac{GM}{r}} = R\\sqrt{\\frac{g_0}{r}}",
    vars: [
      { sym: "$v, r$", zh: "衛星軌道速率、軌道半徑", en: "Orbital speed, orbital radius", unit: "$\\text{m s}^{-1}, \\text{m}$" }
    ],
    steps: [
      { zh: "萬有引力提供圓周運動向心力：$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$。", en: "Gravity provides centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$." },
      { zh: "約去衛星質量 $m$ 與一個 $r$，開平方得 $v = \\sqrt{\\frac{GM}{r}}$。", en: "Cancel $m$ and $r$, take square root: $v = \\sqrt{\\frac{GM}{r}}$." }
    ],
    cond: { zh: "軌道半徑 $r$ 越大，衛星速率越慢（$v \\propto r^{-1/2}$），與衛星質量無關。", en: "Larger orbit radius → slower speed ($v \\propto r^{-1/2}$), independent of satellite mass." }
  },
  {
    id: "f-b2-kepler3", book: "book2", category: "derived", onSheet: false,
    name: { zh: "開普勒第三定律（軌道週期與半徑關係）", en: "Kepler's Third Law (Period–Radius Relation)" },
    eq: "T^2 = \\frac{4\\pi^2}{GM} r^3 \\quad \\Rightarrow \\quad \\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}",
    vars: [
      { sym: "$T, r$", zh: "軌道週期、軌道半徑", en: "Orbital period, radius", unit: "$\\text{s}, \\text{m}$" }
    ],
    steps: [
      { zh: "萬有引力提供向心力：$\\frac{GMm}{r^2} = m\\omega^2 r = m\\left(\\frac{2\\pi}{T}\\right)^2 r$。", en: "Equate gravity to centripetal force: $\\frac{GMm}{r^2} = m\\left(\\frac{2\\pi}{T}\\right)^2 r$." },
      { zh: "約去 $m$ 並整理得 $T^2 = \\frac{4\\pi^2}{GM} r^3$，即同一中心天體的所有衛星皆滿足 $\\frac{T^2}{r^3} = \\text{常數}$。", en: "Cancel $m$ and rearrange: $T^2 = \\frac{4\\pi^2}{GM}r^3 \\Rightarrow T^2 \\propto r^3$." }
    ],
    cond: { zh: "計算地球同步衛星（$T = 86400\\text{ s}$）軌道半徑必用！", en: "Used to derive geostationary orbit radius ($T = 86400\\text{ s}$)." }
  },

  /* ===================== BOOK 3A: WAVE MOTION I ===================== */
  {
    id: "f-b3a-wave", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "基本波動方程", en: "Universal Wave Equation" },
    eq: "v = f\\lambda",
    vars: [
      { sym: "$v$", zh: "波速（只取決於介質）", en: "Wave speed (medium-dependent)", unit: "$\\text{m s}^{-1}$" },
      { sym: "$f, \\lambda$", zh: "頻率（取決於波源）、波長", en: "Frequency (source-dependent), wavelength", unit: "$\\text{Hz}, \\text{m}$" }
    ],
    cond: { zh: "波折射進入另一介質時，$f$ 恆定不變，故 $\\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$。", en: "During refraction, $f$ stays constant, so $v_1/v_2 = \\lambda_1/\\lambda_2$." }
  },
  {
    id: "f-b3a-period", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "頻率與週期關係", en: "Frequency & Period" },
    eq: "f = \\frac{1}{T}",
    vars: [
      { sym: "$T$", zh: "完成一次完整振動所需時間", en: "Period", unit: "$\\text{s}$" }
    ],
    cond: { zh: "從 $y$-$t$ 圖讀出 $T$，從 $y$-$x$ 圖讀出 $\\lambda$。", en: "Read $T$ from $y$-$t$ graph and $\\lambda$ from $y$-$x$ graph." }
  },
  {
    id: "f-b3a-path-diff", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "雙源干涉程差條件（同相波源）", en: "Path Difference Condition (In-Phase Sources)" },
    eq: "\\Delta = |S_1 P - S_2 P| = n\\lambda \\;(\\text{Constructive}) \\;\\text{ / }\\; (n + \\frac{1}{2})\\lambda \\;(\\text{Destructive})",
    vars: [
      { sym: "$n$", zh: "級數整數 $0, 1, 2, \\dots$", en: "Order integer $0, 1, 2, \\dots$", unit: "無單位" }
    ],
    cond: { zh: "若兩波源**反相**，相長與相消條件完全對調！", en: "If sources are in **antiphase**, constructive and destructive conditions swap!" }
  },
  {
    id: "f-b3a-snell", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "斯涅耳折射定律（Snell's Law）", en: "Snell's Law of Refraction" },
    eq: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2",
    vars: [
      { sym: "$n_1, n_2$", zh: "介質 1 與介質 2 的絕對折射率", en: "Refractive indices of media 1 & 2", unit: "無單位" },
      { sym: "$\\theta_1, \\theta_2$", zh: "光線與**法線**的夾角", en: "Angles measured from the **normal**", unit: "$^\\circ$" }
    ],
    cond: { zh: "空氣 / 真空取 $n = 1.00$。", en: "Take $n = 1.00$ for air/vacuum." }
  },
  {
    id: "f-b3a-n", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "折射率與光速/波長關係", en: "Refractive Index, Speed & Wavelength" },
    eq: "n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda_{\\text{med}}}",
    vars: [
      { sym: "$c, v$", zh: "真空光速、介質中光速", en: "Speed of light in vacuum & medium", unit: "$\\text{m s}^{-1}$" }
    ],
    cond: { zh: "所有介質 $n \\ge 1$；$n$ 越大代表光密介質、光速越慢。", en: "$n \\ge 1$; higher $n$ = optically denser = slower light." }
  },
  {
    id: "f-b3a-crit", book: "book3a", category: "derived", onSheet: false,
    name: { zh: "全內反射臨界角（Critical Angle）", en: "Critical Angle for Total Internal Reflection" },
    eq: "\\sin C = \\frac{n_2}{n_1} \\quad (\\text{射向空氣時 } \\sin C = \\frac{1}{n})",
    vars: [
      { sym: "$C$", zh: "臨界角（折射角剛好為 $90^\\circ$ 時之入射角）", en: "Critical angle", unit: "$^\\circ$" }
    ],
    steps: [
      { zh: "由斯涅耳定律 $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$（其中 $n_1 > n_2$）。", en: "Start with Snell's Law $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$ ($n_1 > n_2$)." },
      { zh: "當入射角達臨界角 $\\theta_1 = C$ 時，折射光線沿界面掠射，故 $\\theta_2 = 90^\\circ$（$\\sin 90^\\circ = 1$）。", en: "At critical angle $\\theta_1 = C$, refracted ray skims boundary so $\\theta_2 = 90^\\circ$." },
      { zh: "代入得 $n_1 \\sin C = n_2 \\times 1 \\Rightarrow \\sin C = \\frac{n_2}{n_1}$。", en: "Thus $n_1 \\sin C = n_2 \\Rightarrow \\sin C = \\frac{n_2}{n_1}$." }
    ],
    cond: { zh: "光線必須從光密 ($n_1$) 射向光疏 ($n_2$) 且 $\\theta_1 > C$ 才發生全內反射。", en: "Requires denser ($n_1$) to less dense ($n_2$) medium AND $\\theta_1 > C$." }
  },
  {
    id: "f-b3a-lens", book: "book3a", category: "basic", onSheet: true,
    name: { zh: "薄透鏡公式", en: "Thin Lens Formula" },
    eq: "\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}",
    vars: [
      { sym: "$u, v, f$", zh: "物距、像距、焦距（實正虛負）", en: "Object dist, image dist, focal length (real $+$, virtual $-$)", unit: "$\\text{m}$ 或 $\\text{cm}$" }
    ],
    cond: { zh: "實正負約定：凸透鏡 $f > 0$，凹透鏡 $f < 0$；實像 $v > 0$，虛像 $v < 0$。", en: "Real-is-positive: convex $f>0$, concave $f<0$; real image $v>0$, virtual image $v<0$." }
  },
  {
    id: "f-b3a-mag", book: "book3a", category: "basic", onSheet: false,
    name: { zh: "線性放大率", en: "Linear Magnification" },
    eq: "m = \\frac{h_i}{h_o} = \\frac{|v|}{u}",
    vars: [
      { sym: "$h_i, h_o$", zh: "像高、物高", en: "Image height, object height", unit: "$\\text{cm}$ / $\\text{m}$" }
    ],
    cond: { zh: "由通過光心的相似三角形直接得出；$m > 1$ 放大，$m < 1$ 縮小。", en: "From similar triangles through the optical centre." }
  },
  {
    id: "f-b3a-lens-m", book: "book3a", category: "derived", onSheet: false,
    name: { zh: "放大率與像距/物距線性關係（實驗作圖必考）", en: "Magnification Linear Relations (Lab Graphing)" },
    eq: "m = \\frac{v}{f} - 1, \\quad \\frac{1}{m} = \\frac{u}{f} - 1",
    vars: [
      { sym: "$m, v, u, f$", zh: "實像放大率、像距、物距、焦距", en: "Real-image magnification, $v$, $u$, $f$", unit: "一致長度單位" }
    ],
    steps: [
      { zh: "對實像（$u, v, f > 0$），將薄透鏡公式 $\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$ 兩邊同乘 $v$。", en: "For real image ($u, v, f > 0$), multiply $\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$ by $v$." },
      { zh: "得 $\\frac{v}{u} + 1 = \\frac{v}{f}$，代入 $m = \\frac{v}{u}$ 即得 $m = \\frac{v}{f} - 1$（畫 $m$-$v$ 圖斜率 $= 1/f$）。", en: "Gives $\\frac{v}{u} + 1 = \\frac{v}{f} \\Rightarrow m = \\frac{v}{f} - 1$ (slope of $m$ vs $v$ is $1/f$!)." },
      { zh: "同理兩邊同乘 $u$ 得 $1 + \\frac{u}{v} = \\frac{u}{f} \\Rightarrow \\frac{1}{m} = \\frac{u}{f} - 1$。", en: "Similarly multiplying by $u$ gives $\\frac{1}{m} = \\frac{u}{f} - 1$." }
    ],
    cond: { zh: "常用於 Paper 1B 實驗題求焦距 $f$ 或快速已知放大率求物距/像距！", en: "Super fast for finding $u$ or $v$ when magnification $m$ and $f$ are given!" }
  },

  /* ===================== BOOK 3B: WAVE MOTION II ===================== */
  {
    id: "f-b3b-ydse", book: "book3b", category: "basic", onSheet: true,
    name: { zh: "楊氏雙縫干涉條紋間距", en: "Young's Double-Slit Fringe Separation" },
    eq: "\\Delta y = \\frac{\\lambda D}{a}",
    vars: [
      { sym: "$\\Delta y$", zh: "相鄰亮紋（或相鄰暗紋）中心間距", en: "Fringe separation", unit: "$\\text{m}$" },
      { sym: "$D, a$", zh: "雙縫至屏幕距離、兩狹縫間距", en: "Slit-to-screen distance, slit separation", unit: "$\\text{m}$" }
    ],
    cond: { zh: "僅適用於 $D \\gg a$（小角度近似）；光柵大角度切勿套用！", en: "Valid ONLY when $D \\gg a$ (small angle approximation)." }
  },
  {
    id: "f-b3b-ydse-deriv", book: "book3b", category: "derived", onSheet: false,
    name: { zh: "課本推導：楊氏雙縫條紋間距 $\\Delta y = \\frac{\\lambda D}{a}$", en: "Textbook Derivation of Double-Slit Formula" },
    eq: "\\Delta y = \\frac{\\lambda D}{a}",
    vars: [
      { sym: "$y_n, \\theta$", zh: "第 $n$ 級亮紋離中央距離與偏折角", en: "Position & angle of $n$-th bright fringe", unit: "$\\text{m}, \\text{rad}$" }
    ],
    steps: [
      { zh: "當 $D \\gg a$ 時，兩束光到達屏幕 $P$ 點近乎平行，程差 $\\Delta = S_2 P - S_1 P \\approx a\\sin\\theta$。", en: "For $D \\gg a$, rays are nearly parallel so path difference $\\Delta \\approx a\\sin\\theta$." },
      { zh: "第 $n$ 級亮紋滿足相長干涉條件：$a\\sin\\theta = n\\lambda$。", en: "Constructive interference for $n$-th bright fringe: $a\\sin\\theta = n\\lambda$." },
      { zh: "當 $\\theta$ 極小時，$\\sin\\theta \\approx \\tan\\theta = \\frac{y_n}{D}$，代入得 $a\\frac{y_n}{D} = n\\lambda \\Rightarrow y_n = n\\frac{\\lambda D}{a}$。", en: "Small-angle approximation $\\sin\\theta \\approx \\tan\\theta = y_n/D \\Rightarrow y_n = n\\frac{\\lambda D}{a}$." },
      { zh: "故相鄰兩亮紋間距 $\\Delta y = y_{n+1} - y_n = \\frac{\\lambda D}{a}$。", en: "Hence fringe separation $\\Delta y = y_{n+1} - y_n = \\frac{\\lambda D}{a}$." }
    ],
    cond: { zh: "當 $\\theta$ 很大時條紋間距不再均勻（外側變寬），必須回歸 $a\\sin\\theta = n\\lambda$ 與 $y_n = D\\tan\\theta$。", en: "At large angles, fringes widen outward — revert to $a\\sin\\theta = n\\lambda$ and $y_n = D\\tan\\theta$." }
  },
  {
    id: "f-b3b-grating", book: "book3b", category: "basic", onSheet: true,
    name: { zh: "衍射光柵方程", en: "Diffraction Grating Equation" },
    eq: "d\\sin\\theta = n\\lambda",
    vars: [
      { sym: "$d$", zh: "光柵常數 / 狹縫間距（$d = 1/N$）", en: "Grating spacing ($d = 1/N$)", unit: "$\\text{m}$" },
      { sym: "$\\theta, n$", zh: "第 $n$ 級主極大偏折角、級數（$0,1,2\\dots$）", en: "Diffraction angle, order number", unit: "$^\\circ$, 無單位" }
    ],
    cond: { zh: "光束須垂直入射光柵；本式無小角度近似，適用於任意角度！", en: "Exact for normal incidence at any angle $\\theta$!" }
  },
  {
    id: "f-b3b-grating-nmax", book: "book3b", category: "derived", onSheet: false,
    name: { zh: "光柵最高級數與總亮紋數", en: "Maximum Order & Total Visible Maxima" },
    eq: "n_{\\max} = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor, \\quad N_{\\text{total}} = 2n_{\\max} + 1",
    vars: [
      { sym: "$n_{\\max}$", zh: "最高可見級數（向下取整）", en: "Highest observable order (round down)", unit: "整數" }
    ],
    steps: [
      { zh: "由 $d\\sin\\theta = n\\lambda$ 且數學限制 $\\sin\\theta < 1$（光線不能超過 $90^\\circ$）。", en: "From $d\\sin\\theta = n\\lambda$ and physical bound $\\sin\\theta < 1$ ($\\theta < 90^\\circ$)." },
      { zh: "得 $n < \\frac{d}{\\lambda}$，故取最大整數 $n_{\\max}$；連同中央 $n=0$ 及左右對稱各 $n_{\\max}$ 條，總數為 $2n_{\\max} + 1$。", en: "Hence $n < d/\\lambda$; counting central $0$-th order plus $\\pm 1 \\dots \\pm n_{\\max}$ gives $2n_{\\max}+1$." }
    ],
    cond: { zh: "切記永遠向下取整（例：$d/\\lambda = 3.92 \\Rightarrow n_{\\max} = 3$，總共 7 個亮點）。", en: "Always round DOWN (e.g. $d/\\lambda = 3.92 \\Rightarrow n_{\\max} = 3$, 7 maxima total)." }
  },
  {
    id: "f-b3b-grating-y", book: "book3b", category: "derived", onSheet: false,
    name: { zh: "光柵平直屏幕亮紋精確位置", en: "Exact Fringe Position on Flat Screen" },
    eq: "y_n = D\\tan\\theta, \\quad \\theta = \\arcsin\\left(\\frac{n\\lambda}{d}\\right)",
    vars: [
      { sym: "$y_n, D$", zh: "第 $n$ 級離中央距離、光柵至屏幕距離", en: "Distance from centre, grating-screen distance", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "先由光柵方程求精確角度 $\\sin\\theta = \\frac{n\\lambda}{d}$。", en: "First find exact angle $\\theta = \\arcsin(n\\lambda/d)$." },
      { zh: "由直角三角形幾何關係 $\\tan\\theta = \\frac{y_n}{D}$，得 $y_n = D\\tan\\theta$。", en: "From right-triangle geometry, $y_n = D\\tan\\theta$." }
    ],
    cond: { zh: "因光柵偏折角甚大，**絕不可用 $\\Delta y = \\lambda D / d$ 取代！**", en: "NEVER approximate with $\\lambda D/d$ for diffraction gratings!" }
  },
  {
    id: "f-b3b-standing", book: "book3b", category: "derived", onSheet: false,
    name: { zh: "兩端固定弦上駐波諧波頻率", en: "Stationary Wave Harmonics on Fixed String" },
    eq: "\\lambda_n = \\frac{2L}{n}, \\quad f_n = n\\frac{v}{2L} = nf_1 \\; (n = 1, 2, 3\\dots)",
    vars: [
      { sym: "$L, n$", zh: "弦長、波環數（諧波序數）", en: "String length, number of loops (harmonic)", unit: "$\\text{m}$, 整數" }
    ],
    steps: [
      { zh: "弦的兩端固定必為節點，相鄰節點間距為 $\\frac{\\lambda}{2}$，故弦長 $L$ 必容納整數 $n$ 個半波長：$L = n\\frac{\\lambda_n}{2}$。", en: "Both fixed ends are nodes (N–N spacing $= \\lambda/2$), so $L = n(\\lambda_n/2)$." },
      { zh: "解得 $\\lambda_n = \\frac{2L}{n}$，代入 $f_n = \\frac{v}{\\lambda_n} = n\\frac{v}{2L} = nf_1$。", en: "Thus $\\lambda_n = 2L/n$ and $f_n = v/\\lambda_n = n(v/2L) = nf_1$." }
    ],
    cond: { zh: "$n=1$ 為基音（fundamental），$n=2$ 為第一泛音 / 第二諧波。", en: "$n=1$ is fundamental (1st harmonic); $n=2$ is 2nd harmonic (1st overtone)." }
  },
  {
    id: "f-b3b-echo", book: "book3b", category: "basic", onSheet: false,
    name: { zh: "回聲與聲納測距公式", en: "Echo / Sonar Distance Formula" },
    eq: "d = \\frac{vt}{2}",
    vars: [
      { sym: "$d, t$", zh: "至反射面單程距離、來回總時間", en: "One-way distance, round-trip time", unit: "$\\text{m}, \\text{s}$" }
    ],
    cond: { zh: "別忘記除以 2（聲波走了一來一回共 $2d$）！", en: "Remember to divide by 2 since sound travels a round trip of $2d$!" }
  },

  /* ===================== BOOK 4: ELECTRICITY & MAGNETISM ===================== */
  {
    id: "f-b4-coulomb", book: "book4", category: "basic", onSheet: true,
    name: { zh: "庫侖定律（靜電力）", en: "Coulomb's Law" },
    eq: "F = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 r^2}",
    vars: [
      { sym: "$Q_1, Q_2$", zh: "兩個點電荷電量", en: "Point charges", unit: "$\\text{C}$" },
      { sym: "$\\varepsilon_0$", zh: "真空電容率 $8.85 \\times 10^{-12}$", en: "Permittivity of free space", unit: "$\\text{C}^2\\text{ N}^{-1}\\text{ m}^{-2}$" }
    ],
    cond: { zh: "$\\frac{1}{4\\pi\\varepsilon_0} \\approx 8.99 \\times 10^9\\text{ N m}^2\\text{ C}^{-2}$；同性相斥、異性相吸。", en: "Applies to point charges or spherically symmetric charges in vacuum/air." }
  },
  {
    id: "f-b4-efield-def", book: "book4", category: "basic", onSheet: false,
    name: { zh: "電場強度定義", en: "Definition of Electric Field Strength" },
    eq: "E = \\frac{F}{q} \\quad \\Rightarrow \\quad F = qE",
    vars: [
      { sym: "$E$", zh: "電場強度（矢量）", en: "Electric field strength", unit: "$\\text{N C}^{-1}$ 或 $\\text{V m}^{-1}$" }
    ],
    cond: { zh: "正電荷受力與 $E$ 同向，負電荷受力與 $E$ 反向！", en: "Force on $+$ charge is along $E$; force on $-$ charge is opposite to $E$!" }
  },
  {
    id: "f-b4-efield-pt", book: "book4", category: "basic", onSheet: true,
    name: { zh: "點電荷產生的電場強度", en: "Electric Field Due to a Point Charge" },
    eq: "E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}",
    vars: [
      { sym: "$Q, r$", zh: "場源電荷量、至電荷距離", en: "Source charge, distance", unit: "$\\text{C}, \\text{m}$" }
    ],
    cond: { zh: "多點電荷合電場必須按方向作**矢量疊加**。", en: "Add fields from multiple charges vectorially." }
  },
  {
    id: "f-b4-efield-plate", book: "book4", category: "basic", onSheet: true,
    name: { zh: "平行金屬板間勻強電場", en: "Uniform Electric Field Between Parallel Plates" },
    eq: "E = \\frac{V}{d}",
    vars: [
      { sym: "$V, d$", zh: "兩板間電勢差、板間距", en: "Potential difference, plate separation", unit: "$\\text{V}, \\text{m}$" }
    ],
    cond: { zh: "由 $W = Fd = qEd = qV$ 直接推得，板間除邊緣外電場處處均勻。", en: "Follows from $W = qEd = qV$; uniform everywhere between plates." }
  },
  {
    id: "f-b4-work-q", book: "book4", category: "basic", onSheet: false,
    name: { zh: "電勢差、電功與電荷加速", en: "Potential Difference & Accelerating Charge" },
    eq: "W = QV, \\quad \\frac{1}{2}mv^2 = qV",
    vars: [
      { sym: "$W, Q, V$", zh: "電場作功、電荷量、電勢差", en: "Work done, charge, p.d.", unit: "$\\text{J}, \\text{C}, \\text{V}$" }
    ],
    cond: { zh: "用於電子槍及粒子加速器（亦是 Book E2 德布羅意加速公式起點！）。", en: "Used in electron guns and Book E2 electron diffraction!" }
  },
  {
    id: "f-b4-ohm", book: "book4", category: "basic", onSheet: false,
    name: { zh: "電流與電阻定義（歐姆定律）", en: "Current, Resistance & Ohm's Law" },
    eq: "I = \\frac{Q}{t}, \\quad V = IR",
    vars: [
      { sym: "$I, V, R$", zh: "電流、電勢差、電阻", en: "Current, p.d., resistance", unit: "$\\text{A}, \\text{V}, \\Omega$" }
    ],
    cond: { zh: "$R = V/I$ 永遠是電阻定義；歐姆定律僅指恆溫下 $R$ 為常數（$I \\propto V$）。", en: "$R=V/I$ always defines resistance; Ohm's law holds when $R$ is constant at fixed $T$." }
  },
  {
    id: "f-b4-resistivity", book: "book4", category: "basic", onSheet: true,
    name: { zh: "電阻與電阻率公式", en: "Resistance and Resistivity" },
    eq: "R = \\frac{\\rho l}{A}",
    vars: [
      { sym: "$\\rho$", zh: "材料電阻率", en: "Resistivity", unit: "$\\Omega\\text{ m}$" },
      { sym: "$l, A$", zh: "導體長度、截面積", en: "Length, cross-sectional area", unit: "$\\text{m}, \\text{m}^2$" }
    ],
    cond: { zh: "導體均勻拉長 $k$ 倍（體積不變），新電阻變為 $k^2 R$！", en: "Stretching uniformly to $k\\times$ length multiplies $R$ by $k^2$!" }
  },
  {
    id: "f-b4-series-par", book: "book4", category: "basic", onSheet: true,
    name: { zh: "串聯與並聯等效電阻", en: "Resistors in Series & Parallel" },
    eq: "R_{\\text{series}} = R_1 + R_2, \\quad \\frac{1}{R_{\\text{parallel}}} = \\frac{1}{R_1} + \\frac{1}{R_2}",
    vars: [
      { sym: "$R_1, R_2$", zh: "分電阻值", en: "Individual resistances", unit: "$\\Omega$" }
    ],
    cond: { zh: "兩並聯電阻捷徑 $R_p = \\frac{R_1 R_2}{R_1 + R_2}$；並聯總電阻必**小於**任何單個支路電阻！", en: "Parallel equivalent resistance is ALWAYS smaller than the smallest branch resistor!" }
  },
  {
    id: "f-b4-power", book: "book4", category: "basic", onSheet: true,
    name: { zh: "電功率與焦耳熱", en: "Electrical Power & Heating" },
    eq: "P = IV = I^2 R = \\frac{V^2}{R}, \\quad E = Pt = IVt",
    vars: [
      { sym: "$P, E$", zh: "電功率、電能", en: "Electrical power, energy", unit: "$\\text{W}, \\text{J}$" }
    ],
    cond: { zh: "串聯電路比較功率用 $P = I^2R$（同 $I$）；並聯比較功率用 $P = V^2/R$（同 $V$）！", en: "Use $I^2R$ for series (same $I$), $V^2/R$ for parallel (same $V$)!" }
  },
  {
    id: "f-b4-emf", book: "book4", category: "derived", onSheet: false,
    name: { zh: "電動勢、內電阻與路端電壓方程", en: "e.m.f., Internal Resistance & Terminal p.d." },
    eq: "\\mathcal{E} = I(R + r) \\quad \\Rightarrow \\quad V = \\mathcal{E} - Ir",
    vars: [
      { sym: "$\\mathcal{E}, r$", zh: "電源電動勢、電源內電阻", en: "e.m.f., internal resistance", unit: "$\\text{V}, \\Omega$" },
      { sym: "$V$", zh: "路端電壓（外電路壓降 $IR$）", en: "Terminal p.d. ($IR$)", unit: "$\\text{V}$" }
    ],
    steps: [
      { zh: "由能量守恆：每庫侖電荷從電池獲得總能量 $\\mathcal{E}$ 等於消耗在外電阻 $R$（$V = IR$）與內電阻 $r$（$Ir$）的能量之和：$\\mathcal{E} = IR + Ir$。", en: "By energy conservation per unit charge: $\\mathcal{E} = IR + Ir$." },
      { zh: "以路端電壓 $V = IR$ 代入，得 $V = \\mathcal{E} - Ir$（$V$-$I$ 直線截距 $= \\mathcal{E}$，斜率 $= -r$）。", en: "Since terminal p.d. $V = IR$, we get $V = \\mathcal{E} - Ir$ ($y$-int $= \\mathcal{E}$, slope $= -r$)." }
    ],
    cond: { zh: "開路時 $I = 0 \\Rightarrow V = \\mathcal{E}$；外並聯更多電器使 $I$ 增大時，路端電壓 $V$ 會略為下降！", en: "Open circuit ($I=0$) gives $V = \\mathcal{E}$; higher load current lowers terminal $V$." }
  },
  {
    id: "f-b4-potdiv", book: "book4", category: "derived", onSheet: false,
    name: { zh: "分壓器公式（Potential Divider）", en: "Potential Divider Formula" },
    eq: "V_1 = \\frac{R_1}{R_1 + R_2} V_{\\text{in}}",
    vars: [
      { sym: "$V_1, V_{\\text{in}}$", zh: "電阻 $R_1$ 兩端分壓、總輸入電壓", en: "Voltage across $R_1$, supply voltage", unit: "$\\text{V}$" }
    ],
    steps: [
      { zh: "串聯電阻 $R_1$ 與 $R_2$ 電流相等：$I = \\frac{V_{\\text{in}}}{R_1 + R_2}$。", en: "Series current $I = \\frac{V_{\\text{in}}}{R_1 + R_2}$." },
      { zh: "故 $R_1$ 兩端電壓 $V_1 = IR_1 = \\frac{R_1}{R_1 + R_2} V_{\\text{in}}$。", en: "Hence $V_1 = IR_1 = \\frac{R_1}{R_1 + R_2}V_{\\text{in}}$." }
    ],
    cond: { zh: "串聯分壓與電阻成正比；常用於光敏電阻（LDR）及熱敏電阻感應電路。", en: "Voltage divides proportionally to resistance; core to LDR/thermistor sensor circuits." }
  },
  {
    id: "f-b4-kwh", book: "book4", category: "basic", onSheet: false,
    name: { zh: "千瓦時（一度電）換算", en: "Kilowatt-Hour Conversion" },
    eq: "1\\text{ kW h} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}",
    vars: [
      { sym: "$\\text{kW h}$", zh: "常用商業電能單位", en: "Commercial unit of electrical energy", unit: "$\\text{kW h}$" }
    ],
    cond: { zh: "計算電費：$E(\\text{kW h}) = P(\\text{kW}) \\times t(\\text{h})$。", en: "Electricity cost: multiply $P(\\text{kW}) \\times t(\\text{h}) \\times \\text{rate}$." }
  },
  {
    id: "f-b4-bwire", book: "book4", category: "basic", onSheet: true,
    name: { zh: "長直載流導線磁場", en: "Magnetic Field of Long Straight Wire" },
    eq: "B = \\frac{\\mu_0 I}{2\\pi r}",
    vars: [
      { sym: "$B$", zh: "磁場強度（磁通密度）", en: "Magnetic field strength", unit: "$\\text{T}$" },
      { sym: "$\\mu_0$", zh: "真空磁導率 $4\\pi \\times 10^{-7}$", en: "Permeability of free space", unit: "$\\text{H m}^{-1}$" },
      { sym: "$r$", zh: "距導線的垂直距離", en: "Perpendicular distance from wire", unit: "$\\text{m}$" }
    ],
    cond: { zh: "方向用右手握拳定則；空間多導線合磁場按矢量疊加。", en: "Direction via Right-Hand Grip Rule; superpose vectorially." }
  },
  {
    id: "f-b4-bsol", book: "book4", category: "basic", onSheet: true,
    name: { zh: "長螺線管內部磁場", en: "Magnetic Field Inside Long Solenoid" },
    eq: "B = \\frac{\\mu_0 N I}{l} = \\mu_0 n I",
    vars: [
      { sym: "$N, l, n$", zh: "總匝數、螺線管長度、單位長度匝數 ($N/l$)", en: "Total turns, length, turns per unit length", unit: "無單位, $\\text{m}, \\text{m}^{-1}$" }
    ],
    cond: { zh: "長螺線管內部磁場均勻平行於軸線，兩端出口處磁場約減半。", en: "Uniform inside long solenoid; drops to ~$\\frac{1}{2}$ at ends." }
  },
  {
    id: "f-b4-fbil", book: "book4", category: "basic", onSheet: true,
    name: { zh: "載流導線所受磁力", en: "Magnetic Force on Current-Carrying Wire" },
    eq: "F = BIl\\sin\\theta",
    vars: [
      { sym: "$\\theta$", zh: "電流方向與磁場 $B$ 之夾角", en: "Angle between current and $B$", unit: "$^\\circ$" }
    ],
    cond: { zh: "平行時（$\\theta=0^\\circ$）磁力為零；方向由弗萊明左手定則判定。", en: "Zero force when parallel; direction via Fleming's Left-Hand Rule." }
  },
  {
    id: "f-b4-fbqv", book: "book4", category: "basic", onSheet: true,
    name: { zh: "運動電荷所受磁力（洛倫茲力）", en: "Magnetic Force on Moving Charge" },
    eq: "F = BQv\\sin\\theta",
    vars: [
      { sym: "$Q, v$", zh: "電荷量大小、運動速率", en: "Charge magnitude, speed", unit: "$\\text{C}, \\text{m s}^{-1}$" }
    ],
    cond: { zh: "靜止電荷（$v=0$）不受磁力；磁力永垂直於 $v$，對電荷不作功！", en: "Zero force if stationary; always $\\perp v$ so does zero work!" }
  },
  {
    id: "f-b4-r-mag", book: "book4", category: "derived", onSheet: false,
    name: { zh: "帶電粒子在勻強磁場中的圓軌道半徑與週期", en: "Circular Orbit Radius & Period in Uniform B-Field" },
    eq: "r = \\frac{mv}{BQ}, \\quad T = \\frac{2\\pi m}{BQ}",
    vars: [
      { sym: "$r, T$", zh: "偏轉圓弧半徑、旋轉週期", en: "Orbit radius, cyclotron period", unit: "$\\text{m}, \\text{s}$" }
    ],
    steps: [
      { zh: "帶電粒子垂直射入勻強磁場，$\\sin 90^\\circ = 1$，磁力提供向心力：$BQv = \\frac{mv^2}{r}$。", en: "Perpendicular entry: magnetic force provides centripetal force $BQv = \\frac{mv^2}{r}$." },
      { zh: "約去一個 $v$，解得 $r = \\frac{mv}{BQ}$（動量越大半徑越大）。", en: "Solve for $r$: $r = \\frac{mv}{BQ}$." },
      { zh: "旋轉一圈週期 $T = \\frac{2\\pi r}{v} = \\frac{2\\pi}{v}\\cdot\\frac{mv}{BQ} = \\frac{2\\pi m}{BQ}$（**與速率 $v$ 無關**！）。", en: "Period $T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{BQ}$ (**independent of speed $v$**!)." }
    ],
    cond: { zh: "若粒子先經電勢差 $V$ 加速（$\\frac{1}{2}mv^2 = QV$），則 $r = \\frac{1}{B}\\sqrt{\\frac{2mV}{Q}}$（質譜儀原理！）。", en: "After acceleration across $V$, $r = \\frac{1}{B}\\sqrt{\\frac{2mV}{Q}}$ (mass spectrometer!)." }
  },
  {
    id: "f-b4-parwires", book: "book4", category: "derived", onSheet: false,
    name: { zh: "兩條平行載流導線間的磁力", en: "Magnetic Force Between Two Parallel Wires" },
    eq: "\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}",
    vars: [
      { sym: "$I_1, I_2, r$", zh: "兩導線電流、兩導線間距", en: "Currents in wires 1 & 2, separation", unit: "$\\text{A}, \\text{m}$" }
    ],
    steps: [
      { zh: "導線 1 在導線 2 位置產生的磁場強度為 $B_1 = \\frac{\\mu_0 I_1}{2\\pi r}$（垂直於導線 2）。", en: "Field due to wire 1 at wire 2: $B_1 = \\frac{\\mu_0 I_1}{2\\pi r}$ (perpendicular to wire 2)." },
      { zh: "導線 2 長度 $l$ 所受磁力 $F = B_1 I_2 l = \\frac{\\mu_0 I_1 I_2 l}{2\\pi r}$，即 $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}$。", en: "Force on length $l$ of wire 2: $F = B_1 I_2 l \\Rightarrow \\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}$." }
    ],
    cond: { zh: "同向電流相吸、反向電流相斥；兩導線受力大小永遠相等。", en: "Like currents attract; opposite currents repel; equal force on both wires." }
  },
  {
    id: "f-b4-flux", book: "book4", category: "basic", onSheet: false,
    name: { zh: "磁通量與磁通量鏈結", en: "Magnetic Flux & Flux Linkage" },
    eq: "\\Phi = BA\\cos\\theta, \\quad \\text{Flux linkage} = N\\Phi",
    vars: [
      { sym: "$\\Phi$", zh: "穿過單匝線圈的磁通量", en: "Magnetic flux", unit: "$\\text{Wb}$" },
      { sym: "$\\theta$", zh: "磁場 $B$ 與線圈平面**法線**的夾角", en: "Angle between $B$ and **normal** to coil plane", unit: "$^\\circ$" }
    ],
    cond: { zh: "線圈平面垂直磁場時 $\\theta = 0^\\circ$（$\\Phi$ 最大）；平行時 $\\theta = 90^\\circ$（$\\Phi = 0$）。", en: "Max flux when coil plane $\\perp B$ ($\\theta=0^\\circ$); zero when parallel." }
  },
  {
    id: "f-b4-faraday", book: "book4", category: "basic", onSheet: true,
    name: { zh: "法拉第電磁感應定律", en: "Faraday's Law of Electromagnetic Induction" },
    eq: "\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t}",
    vars: [
      { sym: "$\\varepsilon$", zh: "平均感應電動勢大小", en: "Magnitude of induced e.m.f.", unit: "$\\text{V}$" }
    ],
    cond: { zh: "方向按楞次定律（阻礙磁通量變化）；若感應電動勢隨時間變化，瞬時值等於 $N\\Phi$-$t$ 圖斜率大小！", en: "Direction via Lenz's law; instantaneous $\\varepsilon$ = magnitude of slope of $N\\Phi$-$t$ graph!" }
  },
  {
    id: "f-b4-blv", book: "book4", category: "derived", onSheet: false,
    name: { zh: "運動直導線切割磁感線感應電動勢", en: "Motional e.m.f. in Moving Conductor" },
    eq: "\\varepsilon = Blv",
    vars: [
      { sym: "$l, v$", zh: "導線有效長度、垂直切割速率", en: "Length of rod, speed perpendicular to $B$", unit: "$\\text{m}, \\text{m s}^{-1}$" }
    ],
    steps: [
      { zh: "長 $l$ 金屬棒在時間 $\\Delta t$ 內以速度 $v$ 垂直橫掃距離 $\\Delta x = v\\Delta t$，掃過面積 $\\Delta A = l\\Delta x = lv\\Delta t$。", en: "In time $\\Delta t$, rod moves $\\Delta x = v\\Delta t$, sweeping area $\\Delta A = lv\\Delta t$." },
      { zh: "磁通量變化 $\\Delta\\Phi = B\\Delta A = Blv\\Delta t$，代入法拉第定律（$N=1$）：$\\varepsilon = \\frac{\\Delta\\Phi}{\\Delta t} = Blv$。", en: "Flux change $\\Delta\\Phi = B\\Delta A = Blv\\Delta t \\Rightarrow \\varepsilon = \\frac{\\Delta\\Phi}{\\Delta t} = Blv$." }
    ],
    cond: { zh: "若接成閉合迴路（總電阻 $R$），感應電流 $I = \\frac{Blv}{R}$，所受反向磁阻力 $F = BIl = \\frac{B^2 l^2 v}{R}$！", en: "In closed loop of resistance $R$: $I = Blv/R$, retarding magnetic force $F = B^2 l^2 v / R$!" }
  },
  {
    id: "f-b4-rms", book: "book4", category: "basic", onSheet: false,
    name: { zh: "正弦交流電有效值（r.m.s.）與平均功率", en: "Sinusoidal AC r.m.s. Values & Mean Power" },
    eq: "V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}, \\quad I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}, \\quad \\bar{P} = I_{\\text{rms}} V_{\\text{rms}} = \\frac{1}{2} I_0 V_0",
    vars: [
      { sym: "$V_0, I_0$", zh: "峰值電壓、峰值電流", en: "Peak voltage, peak current", unit: "$\\text{V}, \\text{A}$" }
    ],
    cond: { zh: "僅適用於**正弦交流電**（方波等其他波形須回歸「等效平均功率」定義計算！）。香港 $220\\text{ V}$ 是 r.m.s. 值，峰值為 $220\\sqrt{2} \\approx 311\\text{ V}$！", en: "$1/\\sqrt{2}$ holds ONLY for sinusoidal AC! For square/pulse waves, equate mean power to DC!" }
  },
  {
    id: "f-b4-transformer", book: "book4", category: "basic", onSheet: true,
    name: { zh: "理想變壓器電壓與電流比", en: "Ideal Transformer Equation" },
    eq: "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}",
    vars: [
      { sym: "$N_p, N_s$", zh: "原線圈、副線圈匝數", en: "Primary & secondary turns", unit: "無單位" }
    ],
    cond: { zh: "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$ 假設無漏磁；$V_p I_p = V_s I_s$ 額外假設效率 $100\\%$。", en: "Voltage ratio assumes no flux leakage; current ratio also assumes $100\\%$ efficiency." }
  },
  {
    id: "f-b4-trans-eff", book: "book4", category: "basic", onSheet: false,
    name: { zh: "實際變壓器效率", en: "Real Transformer Efficiency" },
    eq: "\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%",
    vars: [
      { sym: "$\\eta$", zh: "變壓器效率", en: "Efficiency", unit: "$\\%$" }
    ],
    cond: { zh: "非理想變壓器切忌亂用 $\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$！必須用 $P_{\\text{out}} = \\eta P_{\\text{in}}$ 求 $I_p$！", en: "For non-ideal transformers ($\\eta < 100\\%$), NEVER use $I_p/I_s = N_s/N_p$ — use $V_s I_s = \\eta V_p I_p$!" }
  },
  {
    id: "f-b4-grid-loss", book: "book4", category: "derived", onSheet: false,
    name: { zh: "高壓輸電電纜功率損耗推導", en: "Transmission Cable Power Loss" },
    eq: "P_{\\text{loss}} = I^2 R_c = \\left(\\frac{P}{V}\\right)^2 R_c",
    vars: [
      { sym: "$P, V$", zh: "電廠輸送總功率、輸電電壓", en: "Transmitted power, transmission voltage", unit: "$\\text{W}, \\text{V}$" },
      { sym: "$R_c$", zh: "輸電電纜總電阻（來回兩線！）", en: "Total cable resistance (both wires!)", unit: "$\\Omega$" }
    ],
    steps: [
      { zh: "輸電系統以電壓 $V$ 傳送總功率 $P$，電纜內電流 $I = \\frac{P}{V}$。", en: "Current in cables transmitting power $P$ at voltage $V$: $I = P/V$." },
      { zh: "電纜因電阻 $R_c$ 產生的熱功率損耗 $P_{\\text{loss}} = I^2 R_c = \\frac{P^2 R_c}{V^2} \\propto \\frac{1}{V^2}$。", en: "Joule heating loss in cable resistance $R_c$: $P_{\\text{loss}} = I^2 R_c = \\frac{P^2 R_c}{V^2}$." }
    ],
    cond: { zh: "電壓升為 $k$ 倍，損耗功率劇降為 $1/k^2$；注意題目給的是「每條電纜電阻」還是「來回總電阻」！", en: "Watch out whether $R_c$ is given per cable (double it for two-wire loop!) or total." }
  },

  /* ===================== BOOK 5: RADIOACTIVITY & NUCLEAR ===================== */
  {
    id: "f-b5-decay", book: "book5", category: "basic", onSheet: true,
    name: { zh: "放射性指數衰變定律", en: "Law of Radioactive Decay" },
    eq: "N = N_0 e^{-kt}, \\quad A = A_0 e^{-kt}",
    vars: [
      { sym: "$N_0, N$", zh: "初始與時間 $t$ 後的未衰變核數", en: "Initial & remaining undecayed nuclei", unit: "無單位" },
      { sym: "$k$", zh: "衰變常數", en: "Decay constant", unit: "$\\text{s}^{-1}$" }
    ],
    cond: { zh: "取自然對數線性化：$\\ln A = \\ln A_0 - kt$（斜率 $= -k$）。", en: "Linear form: $\\ln A = \\ln A_0 - kt$ (slope $= -k$)." }
  },
  {
    id: "f-b5-halflife", book: "book5", category: "derived", onSheet: true,
    name: { zh: "半衰期與衰變常數關係（含推導）", en: "Half-Life & Decay Constant Relation" },
    eq: "t_{1/2} = \\frac{\\ln 2}{k}",
    vars: [
      { sym: "$t_{1/2}$", zh: "半衰期", en: "Half-life", unit: "$\\text{s}$ / $\\text{yr}$" }
    ],
    steps: [
      { zh: "由半衰期定義，當 $t = t_{1/2}$ 時，未衰變核數減半：$N = \\frac{1}{2}N_0$。", en: "At $t = t_{1/2}$, $N = \\frac{1}{2}N_0$." },
      { zh: "代入 $N = N_0 e^{-kt}$ 得 $\\frac{1}{2} = e^{-k t_{1/2}} \\Rightarrow 2 = e^{k t_{1/2}}$。", en: "Substitute into $N = N_0 e^{-kt}$: $\\frac{1}{2} = e^{-kt_{1/2}} \\Rightarrow e^{kt_{1/2}} = 2$." },
      { zh: "兩邊取自然對數：$k t_{1/2} = \\ln 2 \\Rightarrow t_{1/2} = \\frac{\\ln 2}{k}$。", en: "Take $\\ln$ of both sides: $t_{1/2} = \\frac{\\ln 2}{k}$." }
    ],
    cond: { zh: "$t_{1/2}$ 與 $k$ 必須用對應倒數時間單位（例：$k$ 用 $\\text{s}^{-1}$ 則 $t_{1/2}$ 用 $\\text{s}$）。", en: "Keep time units consistent ($k$ in $\\text{s}^{-1} \\leftrightarrow t_{1/2}$ in $\\text{s}$)." }
  },
  {
    id: "f-b5-activity", book: "book5", category: "basic", onSheet: true,
    name: { zh: "放射強度與未衰變核數關係", en: "Activity and Undecayed Nuclei" },
    eq: "A = kN",
    vars: [
      { sym: "$A$", zh: "放射強度（每秒衰變次數）", en: "Activity (decays per second)", unit: "$\\text{Bq}$ ($\\text{s}^{-1}$)" }
    ],
    cond: { zh: "套用此式求 $\\text{Bq}$ 時，$k$ 必須先轉成 **$\\text{s}^{-1}$**！", en: "$k$ MUST be converted to **$\\text{s}^{-1}$** when using $A$ in $\\text{Bq}$!" }
  },
  {
    id: "f-b5-half-n", book: "book5", category: "derived", onSheet: false,
    name: { zh: "半衰期次數快速計算式", en: "Half-Life Power Form" },
    eq: "N = N_0 \\left(\\frac{1}{2}\\right)^{t / t_{1/2}}, \\quad A = A_0 \\left(\\frac{1}{2}\\right)^{t / t_{1/2}}",
    vars: [
      { sym: "$t / t_{1/2}$", zh: "經歷的半衰期個數", en: "Number of half-lives elapsed", unit: "無單位" }
    ],
    steps: [
      { zh: "由 $k = \\frac{\\ln 2}{t_{1/2}}$ 代入指數律 $N = N_0 e^{-kt} = N_0 e^{-(\\ln 2)(t/t_{1/2})}$。", en: "Substitute $k = \\frac{\\ln 2}{t_{1/2}}$ into $N = N_0 e^{-kt}$." },
      { zh: "因 $e^{-\\ln 2} = \\frac{1}{2}$，即得 $N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$（已衰變核數 $= N_0 - N$！）。", en: "Since $e^{-\\ln 2} = \\frac{1}{2}$, $N = N_0 (\\frac{1}{2})^{t/t_{1/2}}$ (decayed nuclei $= N_0 - N$!)." }
    ],
    cond: { zh: "比指數式更快秒殺選擇題，且不需轉秒數（只要 $t$ 與 $t_{1/2}$ 單位一致）！", en: "Fastest form for MCQs; $t$ and $t_{1/2}$ only need matching units!" }
  },
  {
    id: "f-b5-emc2", book: "book5", category: "basic", onSheet: true,
    name: { zh: "愛因斯坦質能方程", en: "Einstein's Mass–Energy Equivalence" },
    eq: "\\Delta E = \\Delta m c^2",
    vars: [
      { sym: "$\\Delta m$", zh: "質量虧損（反應前總質量 − 反應後總質量）", en: "Mass defect (reactants − products)", unit: "$\\text{kg}$" },
      { sym: "$\\Delta E$", zh: "釋放的核能", en: "Energy released", unit: "$\\text{J}$" }
    ],
    cond: { zh: "計算 $\\Delta m$ 時切記保留題目所給的所有小數位（常達 4–6 位），切勿過早四捨五入！", en: "Keep ALL given decimal places when subtracting masses before rounding!" }
  },
  {
    id: "f-b5-u-mev", book: "book5", category: "derived", onSheet: false,
    name: { zh: "原子質量單位（u）與兆電子伏（MeV）換算", en: "Atomic Mass Unit to MeV Shortcut" },
    eq: "\\Delta E(\\text{MeV}) = \\Delta m(\\text{u}) \\times 931, \\quad 1\\text{ MeV} = 1.60 \\times 10^{-13}\\text{ J}",
    vars: [
      { sym: "$\\text{u}$", zh: "統一原子質量單位 $1.661 \\times 10^{-27}\\text{ kg}$", en: "Atomic mass unit", unit: "$\\text{u}$" }
    ],
    steps: [
      { zh: "將 $1\\text{ u} = 1.661 \\times 10^{-27}\\text{ kg}$ 代入 $\\Delta E = \\Delta m c^2$：$\\Delta E = (1.661 \\times 10^{-27})(3.00 \\times 10^8)^2 = 1.495 \\times 10^{-10}\\text{ J}$。", en: "Substitute $1\\text{ u}$ into $mc^2$: $1.495 \\times 10^{-10}\\text{ J}$." },
      { zh: "除以 $1\\text{ MeV} = 1.60 \\times 10^{-13}\\text{ J}$，即得 $1\\text{ u} \\leftrightarrow 931\\text{ MeV}$（官方數據表有給此數值！）。", en: "Divide by $1.60 \\times 10^{-13}\\text{ J/MeV}$: $1\\text{ u} \\leftrightarrow 931\\text{ MeV}$." }
    ],
    cond: { zh: "若題目以 $\\text{u}$ 給出核質量，直接乘 $931$ 最快最準。", en: "Fastest method when nuclear masses are given in $\\text{u}$." }
  },

  /* ===================== BOOK E2: ATOMIC WORLD ===================== */
  {
    id: "f-e2-closest", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "α 粒子散射最接近距離（估算核半徑上限）", en: "Distance of Closest Approach (Rutherford)" },
    eq: "r_{\\min} = \\frac{2Ze^2}{4\\pi\\varepsilon_0 E_K}",
    vars: [
      { sym: "$Z$", zh: "靶核原子序數（金核 $Z = 79$）", en: "Target atomic number ($Z = 79$ for gold)", unit: "無單位" },
      { sym: "$E_K$", zh: "$\\alpha$ 粒子初始動能", en: "Initial KE of $\\alpha$-particle", unit: "$\\text{J}$" }
    ],
    steps: [
      { zh: "正面對撞原子核瞬間，$\\alpha$ 粒子速度減至零，全部初始動能轉化為靜電勢能。", en: "At momentary rest in head-on collision, initial KE converts wholly to electrostatic PE." },
      { zh: "$E_K = \\frac{Q_{\\text{nucleus}} q_\\alpha}{4\\pi\\varepsilon_0 r_{\\min}} = \\frac{(Ze)(2e)}{4\\pi\\varepsilon_0 r_{\\min}}$，解出 $r_{\\min} = \\frac{2Ze^2}{4\\pi\\varepsilon_0 E_K}$。", en: "$E_K = \\frac{(Ze)(2e)}{4\\pi\\varepsilon_0 r_{\\min}} \\Rightarrow r_{\\min} = \\frac{2Ze^2}{4\\pi\\varepsilon_0 E_K}$." }
    ],
    cond: { zh: "假設金核靜止不動；$r_{\\min}$ 給出金原子核半徑的**上限（upper limit）**。", en: "Assumes heavy nucleus stays stationary; gives an **upper limit** for nuclear radius." }
  },
  {
    id: "f-e2-photon", book: "booke2", category: "basic", onSheet: false,
    name: { zh: "光子能量方程（普朗克-愛因斯坦關係）", en: "Photon Energy Equation" },
    eq: "E = hf = \\frac{hc}{\\lambda}",
    vars: [
      { sym: "$h$", zh: "普朗克常數 $6.63 \\times 10^{-34}$", en: "Planck constant", unit: "$\\text{J s}$" },
      { sym: "$f, \\lambda$", zh: "光頻率、真空波長", en: "Frequency, vacuum wavelength", unit: "$\\text{Hz}, \\text{m}$" }
    ],
    cond: { zh: "速算小技巧：$hc \\approx 1.989 \\times 10^{-25}\\text{ J m} \\approx 1243\\text{ eV nm}$！", en: "Handy check: $hc \\approx 1243\\text{ eV nm}$ (so $620\\text{ nm}$ red photon $\\approx 2.0\\text{ eV}$!)." }
  },
  {
    id: "f-e2-photoelectric", book: "booke2", category: "basic", onSheet: true,
    name: { zh: "愛因斯坦光電方程", en: "Einstein's Photoelectric Equation" },
    eq: "\\frac{1}{2}m_e v_{\\max}^2 = K_{\\max} = eV_s = hf - \\phi",
    vars: [
      { sym: "$\\phi$", zh: "金屬逸出功（$\\phi = hf_0 = \\frac{hc}{\\lambda_0}$）", en: "Work function ($\\phi = hf_0$)", unit: "$\\text{J}$ 或 $\\text{eV}$" },
      { sym: "$V_s$", zh: "截止電勢（遏止電壓）", en: "Stopping potential", unit: "$\\text{V}$" }
    ],
    cond: { zh: "僅當 $f > f_0$（或 $\\lambda < \\lambda_0$）時發生光電發射；計算時注意統一用 $\\text{J}$ 或統一用 $\\text{eV}$！", en: "Requires $f > f_0$ ($\\lambda < \\lambda_0$); never mix $\\text{J}$ and $\\text{eV}$ in the same line!" }
  },
  {
    id: "f-e2-vs-f", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "截止電勢與頻率線性關係（實驗圖像式）", en: "Stopping Potential vs Frequency Graph Equation" },
    eq: "V_s = \\left(\\frac{h}{e}\\right)f - \\frac{\\phi}{e}",
    vars: [
      { sym: "$\\frac{h}{e}$", zh: "$V_s$-$f$ 直線斜率（所有金屬相同！）", en: "Slope of $V_s$-$f$ line (universal for all metals!)", unit: "$\\text{V s}$" }
    ],
    steps: [
      { zh: "由愛因斯坦光電方程 $eV_s = hf - \\phi$，兩邊同除基本電荷 $e$。", en: "Divide $eV_s = hf - \\phi$ by $e$." },
      { zh: "得 $V_s = \\frac{h}{e}f - \\frac{\\phi}{e}$：斜率 $= \\frac{h}{e}$，$x$ 截距 $= f_0$，$y$ 截距 $= -\\frac{\\phi}{e}$。", en: "Gives $V_s = (h/e)f - \\phi/e$: slope $= h/e$, $x$-int $= f_0$, $y$-int $= -\\phi/e$." }
    ],
    cond: { zh: "實驗題極常要求由 $V_s$-$f$ 圖斜率求普朗克常數 $h = \\text{斜率} \\times e$！", en: "Exam favourite: find Planck constant $h = \\text{slope} \\times e$ from $V_s$-$f$ graph!" }
  },
  {
    id: "f-e2-photon-rate", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "光束每秒光子數與最大光電流", en: "Photon Emission Rate & Saturation Photocurrent" },
    eq: "\\frac{N}{t} = \\frac{P}{hf} = \\frac{P\\lambda}{hc}, \\quad I_{\\max} = \\eta_q \\left(\\frac{N}{t}\\right) e",
    vars: [
      { sym: "$P$", zh: "單色光束入射功率（$= \\text{光強} \\times \\text{面積}$）", en: "Incident optical power ($I_{\\text{light}} A$)", unit: "$\\text{W}$" },
      { sym: "$\\eta_q$", zh: "量子效率（每個光子打出電子的比例）", en: "Quantum efficiency (electrons per photon)", unit: "無單位" }
    ],
    steps: [
      { zh: "總入射能量 $E_{\\text{total}} = Pt = N(hf) \\Rightarrow$ 每秒到達光子數 $\\frac{N}{t} = \\frac{P}{hf}$。", en: "Total energy $Pt = N(hf) \\Rightarrow$ photon rate $N/t = P/(hf)$." },
      { zh: "若每 1 個光子逸出 $\\eta_q$ 個電子，飽和光電流 $I = \\frac{Q}{t} = \\eta_q \\frac{N}{t} e$。", en: "With quantum efficiency $\\eta_q$, saturation current $I = \\eta_q (N/t) e$." }
    ],
    cond: { zh: "解釋為何「相同功率下提高頻率 $f$ 反而令飽和電流下降」！", en: "Explains why raising $f$ at **fixed power $P$** REDUCES saturation photocurrent!" }
  },
  {
    id: "f-e2-bohr-l", book: "booke2", category: "basic", onSheet: false,
    name: { zh: "玻爾角動量量子化假設", en: "Bohr's Angular Momentum Quantization" },
    eq: "m_e v r = \\frac{nh}{2\\pi} \\quad (n = 1, 2, 3, \\dots)",
    vars: [
      { sym: "$n$", zh: "主量子數（軌道序數）", en: "Principal quantum number", unit: "正整數" }
    ],
    cond: { zh: "與德布羅意駐波條件 $2\\pi r = n\\lambda = n\\frac{h}{m_e v}$ 完全等價！", en: "Equivalent to de Broglie standing-wave condition $2\\pi r = n\\lambda$!" }
  },
  {
    id: "f-e2-bohr-r", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "課本推導：玻爾氫原子軌道半徑與速率", en: "Textbook Derivation: Bohr Orbit Radius & Speed" },
    eq: "r_n = \\frac{\\varepsilon_0 h^2}{\\pi m_e e^2} n^2 = a_0 n^2, \\quad v_n = \\frac{e^2}{2\\varepsilon_0 h n}",
    vars: [
      { sym: "$a_0$", zh: "第一玻爾半徑（$0.529 \\times 10^{-10}\\text{ m}$）", en: "Bohr radius ($5.29 \\times 10^{-11}\\text{ m}$)", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "庫侖引力提供電子圓周向心力：$\\frac{e^2}{4\\pi\\varepsilon_0 r^2} = \\frac{m_e v^2}{r}$ — (1)。", en: "Coulomb attraction provides centripetal force: $\\frac{e^2}{4\\pi\\varepsilon_0 r^2} = \\frac{m_e v^2}{r}$ — (1)." },
      { zh: "由玻爾角動量量子化假設：$m_e v r = \\frac{nh}{2\\pi} \\Rightarrow v = \\frac{nh}{2\\pi m_e r}$ — (2)。", en: "From quantization $m_e vr = \\frac{nh}{2\\pi} \\Rightarrow v = \\frac{nh}{2\\pi m_e r}$ — (2)." },
      { zh: "將 (2) 代入 (1)：$\\frac{e^2}{4\\pi\\varepsilon_0 r} = m_e\\left(\\frac{n^2 h^2}{4\\pi^2 m_e^2 r^2}\\right)$，解出 $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m_e e^2} \\propto n^2$！", en: "Substitute (2) into (1) and solve for $r_n$: $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m_e e^2} \\propto n^2$!" },
      { zh: "代回 (2) 即得 $v_n = \\frac{e^2}{2\\varepsilon_0 h n} \\propto \\frac{1}{n}$。", en: "Substitute back into (2): $v_n = \\frac{e^2}{2\\varepsilon_0 h n} \\propto 1/n$." }
    ],
    cond: { zh: "Paper 2 選修二最經典的課本推導！必記比例關係 $r_n \\propto n^2$ 與 $v_n \\propto 1/n$！", en: "Signature Book E2 derivation — memorize $r_n \\propto n^2$ and $v_n \\propto 1/n$!" }
  },
  {
    id: "f-e2-bohr-e", book: "booke2", category: "derived", onSheet: true,
    name: { zh: "課本推導：玻爾氫原子總能量公式", en: "Textbook Derivation: Bohr Hydrogen Energy Levels" },
    eq: "E_n = -\\frac{m_e e^4}{8\\varepsilon_0^2 h^2} \\frac{1}{n^2} = -\\frac{13.6}{n^2}\\text{ eV}",
    vars: [
      { sym: "$E_n$", zh: "第 $n$ 軌道的總能量（負值表示束縛態）", en: "Total energy of $n$-th orbit (bound state $<0$)", unit: "$\\text{J}$ 或 $\\text{eV}$" }
    ],
    steps: [
      { zh: "由 $\\frac{m_e v^2}{r} = \\frac{e^2}{4\\pi\\varepsilon_0 r^2}$，電子動能 $E_K = \\frac{1}{2}m_e v^2 = +\\frac{e^2}{8\\pi\\varepsilon_0 r}$。", en: "From centripetal equation, $E_K = \\frac{1}{2}m_e v^2 = +\\frac{e^2}{8\\pi\\varepsilon_0 r}$." },
      { zh: "以無窮遠為零勢能面，靜電勢能 $E_P = -\\frac{e^2}{4\\pi\\varepsilon_0 r} = -2E_K$。", en: "Electrostatic PE (zero at $\\infty$): $E_P = -\\frac{e^2}{4\\pi\\varepsilon_0 r} = -2E_K$." },
      { zh: "總能量 $E_n = E_K + E_P = -\\frac{e^2}{8\\pi\\varepsilon_0 r_n}$。", en: "Total energy $E_n = E_K + E_P = -\\frac{e^2}{8\\pi\\varepsilon_0 r_n}$." },
      { zh: "代入 $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m_e e^2}$，化簡即得 $E_n = -\\frac{m_e e^4}{8\\varepsilon_0^2 h^2 n^2} = -\\frac{13.6}{n^2}\\text{ eV}$！", en: "Substitute $r_n$: $E_n = -\\frac{m_e e^4}{8\\varepsilon_0^2 h^2 n^2} = -\\frac{13.6}{n^2}\\text{ eV}$!" }
    ],
    cond: { zh: "僅精確適用於**氫原子**（及單電子類氫離子）；電離能 $= 0 - (-13.6) = 13.6\\text{ eV}$。", en: "Exact for hydrogen atom; ionization energy from $n=1$ is $13.6\\text{ eV}$." }
  },
  {
    id: "f-e2-transition", book: "booke2", category: "basic", onSheet: false,
    name: { zh: "能級躍遷光子頻率與波長", en: "Spectral Line Transition Formula" },
    eq: "hf = \\frac{hc}{\\lambda} = |E_i - E_f|",
    vars: [
      { sym: "$E_i, E_f$", zh: "初態與末態能級能量（代入此式須先轉成 $\\text{J}$！）", en: "Initial & final level energies (convert to $\\text{J}$!)", unit: "$\\text{J}$" }
    ],
    cond: { zh: "記住 $1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$；能級差越大，發射光子波長越短！", en: "Larger $|\\Delta E|$ → higher $f$ → shorter $\\lambda$." }
  },
  {
    id: "f-e2-debroglie", book: "booke2", category: "basic", onSheet: true,
    name: { zh: "德布羅意物質波波長", en: "de Broglie Wavelength" },
    eq: "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
    vars: [
      { sym: "$p$", zh: "粒子線動量", en: "Linear momentum of particle", unit: "$\\text{kg m s}^{-1}$" }
    ],
    cond: { zh: "一切粒子皆具波動性，但宏觀物體 $p$ 極大導致 $\\lambda$ 極微不可察覺。", en: "Macroscopic objects have tiny unobservable $\\lambda$ because $mv$ is huge." }
  },
  {
    id: "f-e2-debroglie-v", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "加速電壓與電子德布羅意波長關係（TEM / 電子繞射必用）", en: "de Broglie Wavelength via Accelerating Voltage" },
    eq: "\\lambda = \\frac{h}{\\sqrt{2m_e E_K}} = \\frac{h}{\\sqrt{2m_e eV}}",
    vars: [
      { sym: "$V$", zh: "電子槍加速電壓", en: "Accelerating voltage", unit: "$\\text{V}$" }
    ],
    steps: [
      { zh: "電子由靜止經電勢差 $V$ 加速，獲得動能 $E_K = \\frac{1}{2}m_e v^2 = eV$。", en: "Electron accelerated from rest across $V$: $E_K = \\frac{1}{2}m_e v^2 = eV$." },
      { zh: "由 $E_K = \\frac{p^2}{2m_e}$ 得動量 $p = \\sqrt{2m_e E_K} = \\sqrt{2m_e eV}$。", en: "Momentum $p = \\sqrt{2m_e E_K} = \\sqrt{2m_e eV}$." },
      { zh: "代入德布羅意公式 $\\lambda = \\frac{h}{p}$ 即得 $\\lambda = \\frac{h}{\\sqrt{2m_e eV}} \\propto \\frac{1}{\\sqrt{V}}$！", en: "Substitute into $\\lambda = h/p$: $\\lambda = \\frac{h}{\\sqrt{2m_e eV}} \\propto V^{-1/2}$!" }
    ],
    cond: { zh: "電壓增至 4 倍，電子波長減半（繞射環半徑減半、TEM 解像度加倍）！非相對論速率下適用。", en: "Quadrupling $V$ halves $\\lambda$ (halves diffraction ring radius, doubles TEM resolution!)." }
  },
  {
    id: "f-e2-rayleigh", book: "booke2", category: "basic", onSheet: true,
    name: { zh: "瑞利判據（圓孔最小可分辨角）", en: "Rayleigh Criterion for Resolution" },
    eq: "\\theta \\approx \\frac{1.22\\lambda}{d}, \\quad s \\approx L\\theta = \\frac{1.22\\lambda L}{d}",
    vars: [
      { sym: "$\\theta$", zh: "最小可分辨角距離（**弧度 $\\text{rad}$**）", en: "Minimum resolvable angular separation (**radians**)", unit: "$\\text{rad}$" },
      { sym: "$d$", zh: "圓孔 / 物鏡孔徑直徑", en: "Aperture diameter", unit: "$\\text{m}$" },
      { sym: "$s, L$", zh: "兩物點最小線距離、物至孔徑距離", en: "Min linear separation, distance to object", unit: "$\\text{m}$" }
    ],
    cond: { zh: "$\\theta$ 越小代表**解像能力（resolving power）越高**！", en: "Smaller $\\theta$ means **HIGHER resolving power**!" }
  },
  {
    id: "f-e2-sav", book: "booke2", category: "derived", onSheet: false,
    name: { zh: "納米粒子表面積對體積比（SA/V）", en: "Nanoparticle Surface-Area-to-Volume Ratio" },
    eq: "\\left(\\frac{A}{V}\\right)_{\\text{cube}} = \\frac{6}{L}, \\quad \\left(\\frac{A}{V}\\right)_{\\text{sphere}} = \\frac{3}{r}",
    vars: [
      { sym: "$L, r$", zh: "立方體邊長、球體半徑", en: "Cube side length, sphere radius", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "立方體表面積 $A = 6L^2$，體積 $V = L^3 \\Rightarrow \\frac{A}{V} = \\frac{6}{L} \\propto \\frac{1}{L}$。", en: "Cube: $A = 6L^2$, $V = L^3 \\Rightarrow A/V = 6/L$." },
      { zh: "球體表面積 $A = 4\\pi r^2$，體積 $V = \\frac{4}{3}\\pi r^3 \\Rightarrow \\frac{A}{V} = \\frac{3}{r} \\propto \\frac{1}{r}$。", en: "Sphere: $A = 4\\pi r^2$, $V = \\frac{4}{3}\\pi r^3 \\Rightarrow A/V = 3/r$." }
    ],
    cond: { zh: "尺寸縮小 $N$ 倍而總體積不變時，總表面積增大 $N$ 倍！", en: "Shrinking linear size by factor $N$ (fixed total volume) multiplies total surface area by $N$!" }
  },

  /* ===================== BOOK E3: ENERGY & USE OF ENERGY ===================== */
  {
    id: "f-e3-illum", book: "booke3", category: "basic", onSheet: true,
    name: { zh: "點光源照度（平方反比定律）", en: "Illuminance (Inverse-Square Law)" },
    eq: "E = \\frac{\\Phi}{4\\pi r^2}",
    vars: [
      { sym: "$E$", zh: "垂直入射面上的照度", en: "Illuminance on perpendicular surface", unit: "$\\text{lx}$ ($\\text{lm m}^{-2}$)" },
      { sym: "$\\Phi$", zh: "點光源總光通量", en: "Luminous flux", unit: "$\\text{lm}$" },
      { sym: "$r$", zh: "至光源距離", en: "Distance from point source", unit: "$\\text{m}$" }
    ],
    cond: { zh: "假設光源向各方向均勻發光且無反光罩，光線垂直照射表面。", en: "Isotropic point source, rays perpendicular to surface." }
  },
  {
    id: "f-e3-illum-cos", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "斜射照度與桌面點光源推導式（朗伯餘弦定律）", en: "Oblique Illuminance (Lambert's Cosine Law)" },
    eq: "E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta = \\frac{\\Phi h}{4\\pi (h^2 + x^2)^{3/2}}",
    vars: [
      { sym: "$\\theta$", zh: "光線與受照面**法線**夾角", en: "Angle between rays and surface **normal**", unit: "$^\\circ$" },
      { sym: "$h, x$", zh: "燈泡懸掛高度、桌面水平偏移距離", en: "Lamp height, horizontal offset", unit: "$\\text{m}$" }
    ],
    steps: [
      { zh: "光束斜射角度 $\\theta$ 時，相同光通量分散至較大面積 $A' = \\frac{A}{\\cos\\theta}$，故 $E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$。", en: "Tilted incidence spreads flux over $A/\\cos\\theta$, giving $E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$." },
      { zh: "對懸於高度 $h$、水平距離 $x$ 的點，$r = \\sqrt{h^2 + x^2}$ 且 $\\cos\\theta = \\frac{h}{r}$，代入即得 $E = \\frac{\\Phi h}{4\\pi (h^2+x^2)^{3/2}}$！", en: "Since $r = \\sqrt{h^2+x^2}$ and $\\cos\\theta = h/r$: $E = \\frac{\\Phi h}{4\\pi(h^2+x^2)^{3/2}}$!" }
    ],
    cond: { zh: "若房間有多盞燈，桌面某點的總照度等於各燈單獨照度的**標量總和**！", en: "Total illuminance from multiple lamps is the scalar sum of individual illuminances!" }
  },
  {
    id: "f-e3-efficacy", book: "booke3", category: "basic", onSheet: false,
    name: { zh: "光源發光效能（Luminous Efficacy）", en: "Luminous Efficacy" },
    eq: "\\text{Efficacy} = \\frac{\\Phi}{P}",
    vars: [
      { sym: "$\\Phi, P$", zh: "輸出光通量、輸入電功率", en: "Luminous flux, electrical power input", unit: "$\\text{lm}, \\text{W}$" }
    ],
    cond: { zh: "單位為 $\\text{lm W}^{-1}$（非百分比）；LED 最高，白熾燈最低。", en: "Unit: $\\text{lm W}^{-1}$ (NOT a percentage); LED highest, incandescent lowest." }
  },
  {
    id: "f-e3-eff", book: "booke3", category: "basic", onSheet: false,
    name: { zh: "終端能源效率", en: "End-Use Energy Efficiency" },
    eq: "\\eta = \\frac{E_{\\text{useful}}}{E_{\\text{in}}} \\times 100\\% = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\%",
    vars: [
      { sym: "$\\eta$", zh: "能源轉換效率", en: "Energy efficiency", unit: "$\\%$" }
    ],
    cond: { zh: "多階段轉換（如電廠→電網→電動車）之總效率為各階段效率**相乘**：$\\eta_{\\text{overall}} = \\eta_1 \\eta_2 \\eta_3$。", en: "Overall multi-stage efficiency is the **product** $\\eta_1 \\eta_2 \\eta_3$." }
  },
  {
    id: "f-e3-cop-cool", book: "booke3", category: "basic", onSheet: false,
    name: { zh: "冷氣機 / 雪櫃性能系數（COP）", en: "COP of Air Conditioner / Refrigerator" },
    eq: "\\text{COP}_{\\text{cooling}} = \\frac{\\text{Cooling capacity}}{P_{\\text{in}}} = \\frac{Q_C / t}{W / t} = \\frac{Q_C}{W}",
    vars: [
      { sym: "$Q_C / t$", zh: "製冷量（每秒從室內抽走熱量）", en: "Cooling capacity", unit: "$\\text{W}$" },
      { sym: "$W / t$", zh: "壓縮機輸入電功率", en: "Electrical power input", unit: "$\\text{W}$" }
    ],
    cond: { zh: "通常 COP 在 $2.5 - 4.5$ 之間；排出室外熱量為 $Q_H = Q_C + W$。", en: "Typically $2.5 - 4.5$; heat rejected outdoors is $Q_H = Q_C + W$." }
  },
  {
    id: "f-e3-cop-heat", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "熱泵供暖性能系數關係", en: "COP of Heat Pump (Heating Mode)" },
    eq: "\\text{COP}_{\\text{heating}} = \\frac{Q_H}{W} = \\frac{Q_C + W}{W} = \\text{COP}_{\\text{cooling}} + 1",
    vars: [
      { sym: "$Q_H$", zh: "輸入高溫室內的總熱量", en: "Total heat delivered to warm room", unit: "$\\text{J}$" }
    ],
    steps: [
      { zh: "由能量守恆，製冷循環向高溫端排出的總熱量等於低溫吸熱加輸入電功：$Q_H = Q_C + W$。", en: "By energy conservation across the heat pump: $Q_H = Q_C + W$." },
      { zh: "兩邊同除電功 $W$：$\\frac{Q_H}{W} = \\frac{Q_C}{W} + 1 \\Rightarrow \\text{COP}_{\\text{heating}} = \\text{COP}_{\\text{cooling}} + 1$。", en: "Divide by $W$: $\\text{COP}_{\\text{heating}} = \\text{COP}_{\\text{cooling}} + 1$." }
    ],
    cond: { zh: "因此熱泵暖氣的供熱量永遠大於所消耗的電能！", en: "A heat pump always delivers more thermal energy than the electrical energy it consumes!" }
  },
  {
    id: "f-e3-cond", book: "booke3", category: "basic", onSheet: true,
    name: { zh: "熱傳導速率公式（傅立葉定律）", en: "Rate of Energy Transfer by Conduction" },
    eq: "\\frac{Q}{t} = \\frac{\\kappa A (T_H - T_C)}{d}",
    vars: [
      { sym: "$\\kappa$", zh: "材料導熱率（Thermal conductivity）", en: "Thermal conductivity", unit: "$\\text{W m}^{-1}\\text{ K}^{-1}$" },
      { sym: "$A, d$", zh: "傳熱面積、材料厚度", en: "Area, thickness", unit: "$\\text{m}^2, \\text{m}$" }
    ],
    cond: { zh: "$T_H - T_C$ 用 $^\\circ\\text{C}$ 或 $\\text{K}$ 數值相同；穩態時串聯各層 $\\frac{Q}{t}$ 處處相等！", en: "$\\Delta T$ is same in $^\\circ\\text{C}$ or $\\text{K}$; in steady state, $Q/t$ is equal across series layers!" }
  },
  {
    id: "f-e3-uval", book: "booke3", category: "basic", onSheet: true,
    name: { zh: "傳熱系數（U-value）", en: "Thermal Transmittance (U-Value)" },
    eq: "U = \\frac{\\kappa}{d}, \\quad \\frac{Q}{t} = U A (T_H - T_C)",
    vars: [
      { sym: "$U$", zh: "傳熱系數（越低越隔熱！）", en: "U-value (lower = better insulation!)", unit: "$\\text{W m}^{-2}\\text{ K}^{-1}$" }
    ],
    cond: { zh: "建築規格常用 $U$ 值直接表徵整幅牆或整塊雙層玻璃的隔熱效能。", en: "Conveniently describes overall insulating performance of a building component." }
  },
  {
    id: "f-e3-u-series", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "課本推導：雙層複合牆 / 雙層玻璃總 U 值", en: "Textbook Derivation: Composite Wall / Double-Glazing Total U-Value" },
    eq: "\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2} = \\frac{d_1}{\\kappa_1} + \\frac{d_2}{\\kappa_2}",
    vars: [
      { sym: "$U_1, U_2$", zh: "第 1 層與第 2 層各自的 $U$ 值", en: "Individual U-values of layers 1 & 2", unit: "$\\text{W m}^{-2}\\text{ K}^{-1}$" }
    ],
    steps: [
      { zh: "設兩層接觸面穩態溫度為 $T_m$，穩態時通過兩層的熱流速率相等：$P = \\frac{Q}{t} = U_1 A(T_H - T_m) = U_2 A(T_m - T_C)$。", en: "At steady state with interface temp $T_m$: $P = U_1 A(T_H - T_m) = U_2 A(T_m - T_C)$." },
      { zh: "改寫兩式溫差：$T_H - T_m = \\frac{P}{U_1 A}$ 及 $T_m - T_C = \\frac{P}{U_2 A}$。", en: "Rewrite: $T_H - T_m = \\frac{P}{U_1 A}$ and $T_m - T_C = \\frac{P}{U_2 A}$." },
      { zh: "兩式相加消去 $T_m$：$T_H - T_C = \\frac{P}{A}\\left(\\frac{1}{U_1} + \\frac{1}{U_2}\\right)$，對照 $P = U_{\\text{total}} A(T_H - T_C)$ 即得 $\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2}$！", en: "Add equations to eliminate $T_m$: $T_H - T_C = \\frac{P}{A}(\\frac{1}{U_1} + \\frac{1}{U_2}) \\Rightarrow \\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2}$!" }
    ],
    cond: { zh: "求交界溫度 $T_m$ 時直接用 $U_1(T_H - T_m) = U_2(T_m - T_C)$！", en: "To find interface temperature $T_m$, equate $U_1(T_H - T_m) = U_2(T_m - T_C)$!" }
  },
  {
    id: "f-e3-ottv", book: "booke3", category: "basic", onSheet: false,
    name: { zh: "建築物總熱傳送值（OTTV）", en: "Overall Thermal Transfer Value (OTTV)" },
    eq: "\\text{OTTV} = \\frac{P_{\\text{wall}} + P_{\\text{win, cond}} + P_{\\text{win, rad}}}{A_{\\text{wall}} + A_{\\text{win}}}",
    vars: [
      { sym: "$\\text{OTTV}$", zh: "大廈外殼每單位面積平均得熱速率", en: "Average heat gain rate per unit envelope area", unit: "$\\text{W m}^{-2}$" }
    ],
    cond: { zh: "別忘記計算窗戶傳入熱量時包括**熱傳導（$U_{\\text{win}} A_{\\text{win}}\\Delta T$）+ 太陽輻射透射**兩部分！", en: "Windows gain heat by BOTH conduction AND transmitted solar radiation!" }
  },
  {
    id: "f-e3-wind", book: "booke3", category: "basic", onSheet: true,
    name: { zh: "風力發電機最大理論功率", en: "Maximum Power of a Wind Turbine" },
    eq: "P_{\\max} = \\frac{1}{2}\\rho A v^3 = \\frac{1}{2}\\rho (\\pi r^2) v^3",
    vars: [
      { sym: "$\\rho$", zh: "空氣密度（約 $1.2\\text{ kg m}^{-3}$）", en: "Air density (~$1.2\\text{ kg m}^{-3}$)", unit: "$\\text{kg m}^{-3}$" },
      { sym: "$A, r$", zh: "葉片掃掠面積（$\\pi r^2$）、葉片長度", en: "Swept area ($\\pi r^2$), blade length", unit: "$\\text{m}^2, \\text{m}$" },
      { sym: "$v$", zh: "風速", en: "Wind speed", unit: "$\\text{m s}^{-1}$" }
    ],
    cond: { zh: "實際輸出電功率須再乘效率 $\\eta$：$P_{\\text{out}} = \\frac{1}{2}\\eta\\rho A v^3$。", en: "Actual electrical power $P_{\\text{out}} = \\frac{1}{2}\\eta\\rho A v^3$." }
  },
  {
    id: "f-e3-wind-deriv", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "課本推導：風力渦輪機功率 $P = \\frac{1}{2}\\rho A v^3$", en: "Textbook Derivation of Wind Turbine Power" },
    eq: "P = \\frac{1}{2}\\rho A v^3",
    vars: [
      { sym: "$\\Delta t$", zh: "時間間隔", en: "Time interval", unit: "$\\text{s}$" }
    ],
    steps: [
      { zh: "在時間 $\\Delta t$ 內，垂直流過掃掠面積 $A$ 的空氣柱長度為 $l = v\\Delta t$，體積 $\\Delta V = A v\\Delta t$。", en: "In time $\\Delta t$, air column passing area $A$ has volume $\\Delta V = Av\\Delta t$." },
      { zh: "該段空氣柱質量 $\\Delta m = \\rho\\Delta V = \\rho A v\\Delta t$。", en: "Mass of that air: $\\Delta m = \\rho\\Delta V = \\rho Av\\Delta t$." },
      { zh: "該空氣柱攜帶的動能 $\\Delta E_K = \\frac{1}{2}(\\Delta m)v^2 = \\frac{1}{2}(\\rho A v\\Delta t)v^2 = \\frac{1}{2}\\rho A v^3 \\Delta t$。", en: "Kinetic energy of this air: $\\Delta E_K = \\frac{1}{2}(\\rho Av\\Delta t)v^2 = \\frac{1}{2}\\rho Av^3\\Delta t$." },
      { zh: "除以時間 $\\Delta t$ 得最大理論功率 $P = \\frac{\\Delta E_K}{\\Delta t} = \\frac{1}{2}\\rho A v^3$。", en: "Divide by $\\Delta t$: $P = \\frac{1}{2}\\rho A v^3$." }
    ],
    cond: { zh: "此為 Paper 2 選修三幾乎年年必考的標準推導與比例題（$P \\propto r^2 v^3$）！", en: "Top Paper 2 E3 derivation & scaling question ($P \\propto r^2 v^3$)!" }
  },
  {
    id: "f-e3-hydro", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "水力發電輸出功率", en: "Hydroelectric Power Output" },
    eq: "P_{\\text{out}} = \\eta \\left(\\frac{\\Delta m}{\\Delta t}\\right) gh = \\eta \\rho g h \\left(\\frac{\\Delta V}{\\Delta t}\\right)",
    vars: [
      { sym: "$h$", zh: "水庫水面至渦輪機之垂直落差（水頭）", en: "Vertical height drop (head)", unit: "$\\text{m}$" },
      { sym: "$\\frac{\\Delta V}{\\Delta t}$", zh: "體積流率（水密度 $\\rho = 1000\\text{ kg m}^{-3}$）", en: "Volume flow rate ($\\rho = 1000\\text{ kg m}^{-3}$)", unit: "$\\text{m}^3\\text{ s}^{-1}$" }
    ],
    steps: [
      { zh: "時間 $\\Delta t$ 內下落質量 $\\Delta m = \\rho\\Delta V$ 的水失去重力勢能 $\\Delta E_P = (\\Delta m)gh$。", en: "Water of mass $\\Delta m = \\rho\\Delta V$ falling height $h$ loses PE $\\Delta E_P = \\Delta m\\,gh$." },
      { zh: "除以 $\\Delta t$ 並乘總轉換效率 $\\eta$，得 $P_{\\text{out}} = \\eta\\rho g h\\frac{\\Delta V}{\\Delta t}$。", en: "Divide by $\\Delta t$ and multiply by $\\eta$: $P_{\\text{out}} = \\eta\\rho g h(\\Delta V/\\Delta t)$." }
    ],
    cond: { zh: "若同時考慮水流進入渦輪的初動能，可加上 $\\frac{1}{2}\\Delta m\\,v^2$。", en: "Usually initial reservoir speed is negligible so PE dominates." }
  },
  {
    id: "f-e3-solar", book: "booke3", category: "basic", onSheet: false,
    name: { zh: "太陽能電池板發電功率", en: "Solar PV Panel Power Output" },
    eq: "P_{\\text{out}} = \\eta I A \\cos\\theta",
    vars: [
      { sym: "$I$", zh: "到達地面的太陽輻射強度（大氣頂端 $S = 1366\\text{ W m}^{-2}$）", en: "Solar irradiance at panel", unit: "$\\text{W m}^{-2}$" },
      { sym: "$\\theta$", zh: "太陽光線與太陽能板**法線**的夾角", en: "Angle between sunlight and panel **normal**", unit: "$^\\circ$" }
    ],
    cond: { zh: "將板面傾斜使其垂直面向太陽（$\\theta = 0^\\circ$）可獲最大發電量；地球總截面積為圓面積 $\\pi R_E^2$，球表面積為 $4\\pi R_E^2$，故大氣頂端全球平均強度 $= \\frac{S}{4} \\approx 342\\text{ W m}^{-2}$！", en: "Earth intercepts $\\pi R_E^2$ spread over $4\\pi R_E^2$, so global average top-of-atmosphere irradiance $= S/4 \\approx 342\\text{ W m}^{-2}$!" }
  },
  {
    id: "f-e3-binding-fission", book: "booke3", category: "derived", onSheet: false,
    name: { zh: "核電廠燃料消耗與發電功率", en: "Nuclear Power Plant Fuel Consumption & Output" },
    eq: "P_{\\text{elec}} = \\eta \\left(\\frac{m_{\\text{fuel}}}{M}\\right) \\frac{N_A \\Delta E_{\\text{fission}}}{t}",
    vars: [
      { sym: "$m_{\\text{fuel}}, M$", zh: "純 $^{235}\\text{U}$ 消耗質量、摩爾質量（$0.235\\text{ kg mol}^{-1}$）", en: "Mass of pure $^{235}\\text{U}$ consumed, molar mass", unit: "$\\text{kg}, \\text{kg mol}^{-1}$" },
      { sym: "$\\Delta E_{\\text{fission}}$", zh: "單個 $^{235}\\text{U}$ 核裂變釋放能量（$\\sim 200\\text{ MeV}$）", en: "Energy per fission (~$200\\text{ MeV}$)", unit: "$\\text{J}$" }
    ],
    steps: [
      { zh: "純 $^{235}\\text{U}$ 原子核數目 $N = n N_A = \\frac{m_{\\text{fuel}}}{M} N_A$（注意濃縮鈾只含約 $3-5\\%$ $^{235}\\text{U}$！）。", en: "Number of $^{235}\\text{U}$ nuclei: $N = \\frac{m_{\\text{fuel}}}{M}N_A$ (account for enrichment % if total fuel mass is given!)." },
      { zh: "總釋放核熱能 $E_{\\text{thermal}} = N \\Delta E_{\\text{fission}}$，乘熱電轉換效率 $\\eta$ 再除時間 $t$ 即得電功率。", en: "Electrical power $P_{\\text{elec}} = \\eta N \\Delta E_{\\text{fission}} / t$." }
    ],
    cond: { zh: "注意區分**熱功率（Thermal power）**與**輸出電功率（Electrical power）**（典型核電效率 $\\eta \\approx 33\\%$）。", en: "Distinguish **thermal power** vs **electrical output power** (typical $\\eta \\approx 33\\%$)." }
  }
];
