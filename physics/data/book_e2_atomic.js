/* ==========================================================================
   Book E2: Atomic World (Paper 2 Elective 2)
   Ultra-detailed bilingual HKDSE Physics Elective 2 notes
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "booke2",
  paper: "elective2",
  code: "Book E2",
  color: "#7c3aed",
  title: { zh: "Book E2：原子世界（卷二 選修二）", en: "Book E2: Atomic World (Paper 2 Elective 2)" },
  subtitle: {
    zh: "盧瑟福原子模型 · 光電效應與愛因斯坦方程 · 玻爾氫原子模型與線光譜 · 波粒二象性 · 電子顯微鏡（TEM/STM）與納米科技",
    en: "Rutherford's Model · Photoelectric Effect · Bohr's Model & Line Spectra · Wave-Particle Duality · TEM/STM & Nanotechnology"
  },
  chapters: [
    {
      id: "be2-ch1",
      code: "Ch 1",
      title: { zh: "盧瑟福原子模型與光電效應", en: "Rutherford's Atomic Model & Photoelectric Effect" },
      topics: [
        {
          id: "be2-1-1",
          code: "E2.1",
          highYield: true,
          title: { zh: "盧瑟福 α 粒子散射實驗與經典模型兩大缺陷", en: "Rutherford's α-Scattering Experiment & Limitations of Classical Model" },
          summary: {
            zh: "湯姆遜「葡萄乾布丁模型」無法解釋 $\\alpha$ 粒子的大角度反彈。盧瑟福（Geiger & Marsden）以高速 $\\alpha$ 粒子轟擊極薄金箔，提出**有核原子模型（Nuclear Model）**，但該經典模型仍面臨**原子不穩定**與**無法解釋離散線光譜**兩大危機。",
            en: "Thomson's 'plum-pudding' model failed to explain large-angle $\\alpha$-scattering. Rutherford's gold-foil experiment established the **nuclear model**, yet classical electromagnetism predicted **atomic collapse** and **continuous spectra**, contradicting reality."
          },
          points: [
            {
              zh: "**三大實驗觀察與對應推論（Paper 2 必背滿分對應表！）**：\n1. **絕大部分 $\\alpha$ 粒子直線穿透金箔幾乎無偏轉** → 原子內部**絕大部分是空曠空間**（原子核體積相對整個原子極微小，核直徑 $\\sim 10^{-15}\\text{ m}$ vs 原子直徑 $\\sim 10^{-10}\\text{ m}$）。\n2. **少數 $\\alpha$ 粒子作小角度偏轉** → 原子核帶**正電荷**，與帶正電的 $\\alpha$ 粒子產生靜電排斥力。\n3. **極少數（約 $1/8000$）$\\alpha$ 粒子作超過 $90^\\circ$ 大角度偏轉甚至近乎 $180^\\circ$ 反彈** → 原子的**幾乎全部質量與所有正電荷高度集中在極微小的原子核內**（因金核遠重於 $\\alpha$ 粒子，正面碰撞才可把 $\\alpha$ 粒子彈回！）。",
              en: "**Three Observations & Deductions (Must Memorize!)**:\n1. **Most $\\alpha$-particles pass straight through undeflected** → Atom is **mostly empty space** (nucleus is tiny: $\\sim 10^{-15}\\text{ m}$ vs atom $\\sim 10^{-10}\\text{ m}$).\n2. **A small fraction deflect by small angles** → Nucleus is **positively charged**, repelling $+2e$ $\\alpha$-particles electrostatically.\n3. **Very few ($\\sim 1/8000$) deflect by $>90^\\circ$ or bounce nearly straight back** → Almost **all mass and positive charge are concentrated in an extremely small, dense nucleus**!"
            },
            {
              zh: "**實驗關鍵設計**：(1) **真空腔室**：防止 $\\alpha$ 粒子被空氣分子阻擋/電離；(2) **極薄金箔**：確保 $\\alpha$ 粒子最多只與單層金原子核碰撞（避免多次碰撞或被吸收）；(3) 硫化鋅（ZnS）螢光屏於顯微鏡下觀察閃光。",
              en: "**Experimental Details**: (1) **Evacuated chamber** so air doesn't stop/scatter $\\alpha$-particles; (2) **Extremely thin gold foil** to ensure at most single scattering (no multiple collisions or absorption); (3) Rotatable ZnS fluorescent screen."
            },
            {
              zh: "**最接近距離（Distance of Closest Approach, $r_{\\min}$）估算原子核大小上限**：正面對撞瞬間 $\\alpha$ 粒子動能全數轉為靜電勢能：$\\frac{1}{2}m_\\alpha v^2 = \\frac{Q_{\\text{Au}} q_\\alpha}{4\\pi\\varepsilon_0 r_{\\min}}$（其中 $q_\\alpha = 2e$，$Q_{\\text{Au}} = 79e$）。",
              en: "**Distance of Closest Approach ($r_{\\min}$)**: In a head-on collision, initial KE converts wholly into electrostatic PE: $\\frac{1}{2}m_\\alpha v^2 = \\frac{(Ze)(2e)}{4\\pi\\varepsilon_0 r_{\\min}}$."
            },
            {
              zh: "**盧瑟福模型的兩大經典物理困境（直接催生玻爾模型！）**：\n1. **原子穩定性危機**：環繞原子核作圓周運動的電子具向心加速度；按經典電磁學，加速電荷會不斷輻射電磁波而喪失能量，電子應沿螺旋線於 $\\sim 10^{-11}\\text{ s}$ 內**墜落原子核令原子崩塌**，但實際原子穩定存在！\n2. **光譜矛盾**：螺旋墜落過程中電子旋轉頻率連續增加，經典理論預言應發出**連續光譜（continuous spectrum）**，但實驗觀測到氣體發出**不連續的離散線光譜（discrete line spectrum）**！",
              en: "**Two Fatal Failures of Rutherford's Classical Model**:\n1. **Instability**: Orbiting electrons accelerate centripetally; classically, accelerating charges continuously radiate EM waves, lose energy, and should **spiral into the nucleus** within $\\sim 10^{-11}\\text{ s}$ — yet atoms are stable!\n2. **Spectrum failure**: Continuous spiralling predicts a **continuous spectrum**, contradicting the observed **discrete line spectra**!"
            }
          ],
          formulaIds: ["f-e2-closest"],
          diagramIds: ["diag-rutherford"]
        },
        {
          id: "be2-1-2",
          code: "E2.2",
          highYield: true,
          title: { zh: "光電效應（Photoelectric Effect）、光子與愛因斯坦方程", en: "Photoelectric Effect, Photons & Einstein's Photoelectric Equation" },
          summary: {
            zh: "頻率高於金屬**閾頻率（threshold frequency $f_0$）** 的電磁波照射金屬表面時，會即時逸出光電子。愛因斯坦提出光由能量為 $E = hf = \\frac{hc}{\\lambda}$ 的**光子（Photons）** 組成，建立光電方程：**$K_{\\max} = \\frac{1}{2}m_e v_{\\max}^2 = eV_s = hf - \\phi$**。",
            en: "When EM radiation of frequency $f > f_0$ (**threshold frequency**) strikes a metal surface, photoelectrons are emitted instantaneously. Einstein proposed light consists of **photons** ($E = hf = \\frac{hc}{\\lambda}$), yielding **$K_{\\max} = \\frac{1}{2}m_e v_{\\max}^2 = eV_s = hf - \\phi$**."
          },
          points: [
            {
              zh: "**波動說為何無法解釋光電效應的四大實驗事實（Paper 2 滿分必考！）**：\n1. **存在閾頻率 $f_0$（$f < f_0$ 時無論光強多大皆無光電子）**：經典波動說認為能量取決於光強，只要夠亮或照得夠久，任何頻率都應能打出電子。\n2. **光電子最大動能 $K_{\\max}$（及截止電勢 $V_s$）只取決於頻率 $f$，與光強無關**：波動說錯誤預言光強越大、電場振幅越大，電子動能應越大。\n3. **即時發射（無時間延遲）**：即使光極微弱，只要 $f > f_0$ 便瞬間發射；波動說預言弱光下電子需漫長時間累積能量。\n4. **飽和光電流 $I_{\\text{sat}}$ 與光強成正比（在 $f$ 固定時）**：光子論解釋——在固定頻率 $f$ 下，增強光強 = **增加每秒入射光子數目** → 每秒逸出光電子數目按比例增加 → 飽和電流增加（但單光子能量 $hf$ 不變，故 $V_s$ 與 $K_{\\max}$ 不變！）。",
              en: "**4 Observations Classical Wave Theory Fails to Explain (Must Memorize!)**:\n1. **Threshold frequency $f_0$**: If $f < f_0$, NO emission regardless of intensity (wave theory predicts any $f$ should work if bright enough).\n2. **$K_{\\max}$ (and stopping potential $V_s$) depends ONLY on $f$, NOT intensity**: Wave theory wrongly predicts higher intensity → higher $K_{\\max}$.\n3. **Instantaneous emission (no time lag)**: Even at ultra-low intensity ($f > f_0$), emission is immediate (one-to-one photon-electron interaction).\n4. **Saturation photocurrent $\\propto$ intensity (at fixed $f$)**: Higher intensity = **more photons per second** → more photoelectrons emitted per second (while $hf$ & $V_s$ stay constant)."
            },
            {
              zh: "**核心概念定義**：\n• **逸出功（Work Function, $\\phi$）**：電子從金屬表面逃逸所需的**最小能量**，$\\phi = hf_0 = \\frac{hc}{\\lambda_0}$（只取決於金屬種類；表面電子獲得最大動能 $K_{\\max}$，深層電子因碰撞損耗能量，逸出動能由 $0$ 到 $K_{\\max}$ 不等）。\n• **截止電勢（Stopping Potential, $V_s$）**：施加反向電壓使最大動能光電子剛好無法到達收集極（光電流降為零）的最小反向電壓：$K_{\\max} = eV_s$。",
              en: "**Key Definitions**:\n• **Work Function ($\\phi$)**: **Minimum energy** required to eject an electron from a metal surface: $\\phi = hf_0 = \\frac{hc}{\\lambda_0}$ (characteristic of the metal; electrons below surface lose energy on the way out so emitted KE spans $0$ to $K_{\\max}$).\n• **Stopping Potential ($V_s$)**: Minimum reverse p.d. needed to stop the most energetic photoelectrons ($I = 0$): $K_{\\max} = eV_s$."
            },
            {
              zh: "**兩大核心圖像分析（必須滾瓜爛熟！）**：\n1. **$K_{\\max}$ 對 $f$ 圖（或 $V_s$ 對 $f$ 圖）**：\n   • $K_{\\max} = hf - \\phi$：**斜率 $= h$（所有金屬斜率完全平行相等！）**；$x$ 截距 $= f_0$；$y$ 截距 $= -\\phi$。\n   • $V_s = \\frac{h}{e}f - \\frac{\\phi}{e}$：**斜率 $= \\frac{h}{e}$**；$x$ 截距 $= f_0$；$y$ 截距 $= -\\frac{\\phi}{e}$。\n2. **光電流 $I$ 對收集極電勢 $V$ 圖**：\n   • 同頻率 $f$、不同光強 → **相同截止電勢 $-V_s$**，但高光強有**更高飽和電流 $I_{\\text{sat}}$**。\n   • 不同頻率 $f_2 > f_1$、**相同光強（功率 $P = Nhf$ 相同！）** → 高頻光 $f_2$ 截止電勢 $|V_s|$ **更大**，但因每個光子能量更高，每秒光子數 $N = \\frac{P}{hf}$ **反而較少**，故 $f_2$ 的**飽和電流較低**！（超級 5** 陷阱！）",
              en: "**Two Essential Graphs**:\n1. **$K_{\\max}$ vs $f$ (and $V_s$ vs $f$)**:\n   • $K_{\\max} = hf - \\phi$: **slope $= h$** (parallel lines for ALL metals!); $x$-int $= f_0$; $y$-int $= -\\phi$.\n   • $V_s = \\frac{h}{e}f - \\frac{\\phi}{e}$: **slope $= h/e$**; $x$-int $= f_0$; $y$-int $= -\\phi/e$.\n2. **Photocurrent $I$ vs $V$**:\n   • Same $f$, higher intensity → **same $-V_s$**, **higher $I_{\\text{sat}}$**.\n   • Higher $f$ at **SAME power/intensity** ($P = Nhf$) → **larger $|V_s|$**, BUT **fewer photons/sec ($N = P/hf$)** → **LOWER $I_{\\text{sat}}$**! (Top 5** exam trap!)"
            },
            {
              zh: "**電子伏特（eV）換算**：$1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$。若 $V_s = 2.4\\text{ V}$，則最大動能直接就是 $K_{\\max} = 2.4\\text{ eV} = 2.4 \\times 1.60 \\times 10^{-19}\\text{ J}$！",
              en: "**Electron-Volt Shortcut**: $1\\text{ eV} = 1.60 \\times 10^{-19}\\text{ J}$. If $V_s = 2.4\\text{ V}$, then $K_{\\max} = 2.4\\text{ eV}$ immediately!"
            }
          ],
          formulaIds: ["f-e2-photon", "f-e2-photoelectric", "f-e2-vs-f", "f-e2-photon-rate"],
          diagramIds: ["diag-photoelectric"],
          trap: {
            zh: "超級陷阱：當光束**功率 $P$（或光強 $I$）保持不變**而把單色光頻率 $f$ 提高時，每秒光子數 $N = \\frac{P}{hf}$ 會**減少**，所以飽和光電流會**下降**而非不變！",
            en: "5** Trap: Keeping light **power $P$ (intensity) constant** while increasing frequency $f$ **DECREASES** the photon arrival rate $N = P/(hf)$, so saturation current **DROPS**!"
          }
        }
      ]
    },
    {
      id: "be2-ch2",
      code: "Ch 2",
      title: { zh: "玻爾氫原子模型與原子線光譜", en: "Bohr's Model of Hydrogen & Atomic Line Spectra" },
      topics: [
        {
          id: "be2-2-1",
          code: "E2.3",
          highYield: true,
          title: { zh: "玻爾三大假設、量子化軌道半徑與能級推導", en: "Bohr's Postulates, Quantized Radii & Energy Levels" },
          summary: {
            zh: "玻爾結合經典圓周力學與量子化假設，成功解釋氫原子的穩定性及離散光譜，得出第 $n$ 軌道的能量公式：$E_n = -\\frac{m_e e^4}{8\\varepsilon_0^2 h^2 n^2} = -\\frac{13.6}{n^2}\\text{ eV}$。",
            en: "Bohr combined circular mechanics with quantization postulates to explain hydrogen's stability and line spectra, deriving $E_n = -\\frac{m_e e^4}{8\\varepsilon_0^2 h^2 n^2} = -\\frac{13.6}{n^2}\\text{ eV}$."
          },
          points: [
            {
              zh: "**玻爾三大核心假設（必背！）**：\n1. **定態軌道假設**：電子只能在某些特定的圓形軌道（定態 stationary states）繞核運行，在定態中**不會輻射電磁波**，原子保持穩定。\n2. **角動量量子化假設**：容許軌道的電子角動量必為 $\\frac{h}{2\\pi}$ 的整數倍：**$L = m_e v r = \\frac{nh}{2\\pi}$**（$n = 1, 2, 3\\dots$ 主量子數）。\n3. **頻率條件（能級躍遷）**：當電子從高能級 $E_i$ 躍遷至低能級 $E_f$ 時，釋放一個能量剛好等於能級差的光子：**$hf = \\frac{hc}{\\lambda} = E_i - E_f$**；反之，吸收能量恰為 $E_i - E_f$ 的光子則可激發至高能級。",
              en: "**Bohr's Three Postulates (Must Memorize!)**:\n1. **Stationary orbits**: Electrons orbit only in discrete allowed circular orbits **without radiating EM energy**.\n2. **Angular momentum quantization**: **$m_e v r = \\frac{nh}{2\\pi}$** ($n = 1, 2, 3\\dots$).\n3. **Transition condition**: Jumping from $E_i$ to $E_f$ emits (or absorbs) a single photon of energy **$hf = \\frac{hc}{\\lambda} = |E_i - E_f|$**."
            },
            {
              zh: "**玻爾模型推導結果（比例關係超常考 MC！）**：\n• 軌道半徑：$r_n = \\frac{\\varepsilon_0 h^2}{\\pi m_e e^2} n^2 = a_0 n^2 \\propto n^2$（$a_0 = 5.29 \\times 10^{-11}\\text{ m}$ 為玻爾半徑）。\n• 電子速率：$v_n = \\frac{e^2}{2\\varepsilon_0 h n} \\propto \\frac{1}{n}$（越外層跑得越慢！）。\n• 動能、勢能與總能量（負號代表束縛態！）：$E_K = +\\frac{e^2}{8\\pi\\varepsilon_0 r}$，$E_P = -\\frac{e^2}{4\\pi\\varepsilon_0 r} = -2E_K$，總能量 $E_n = E_K + E_P = -E_K = -\\frac{13.6}{n^2}\\text{ eV}$。\n  → **電子跳到較高能級（$n\\uparrow$）時**：軌道半徑 $r\\uparrow$、**勢能 $E_P\\uparrow$**（更接近 0）、**總能量 $E\\uparrow$**（更接近 0），但**動能 $E_K\\downarrow$**！",
              en: "**Key Scaling Laws (Huge MCQ Favourites!)**:\n• Radius: $r_n = a_0 n^2 \\propto n^2$ ($a_0 = 0.0529\\text{ nm}$).\n• Speed: $v_n \\propto \\frac{1}{n}$ (outer orbits are slower!).\n• Energy relations: $E_K = -E_n > 0$, $E_P = 2E_n < 0$, $E_n = -\\frac{13.6}{n^2}\\text{ eV}$.\n  → **Moving to higher $n$**: $r\\uparrow$, **$E_P\\uparrow$**, **$E_{\\text{total}}\\uparrow$**, while **$E_K\\downarrow$**!"
            },
            {
              zh: "**氫原子能級數值與三大光譜線系**：\n• $E_1 = -13.6\\text{ eV}$（基態 ground state；**電離能 Ionization energy $= 13.6\\text{ eV}$**），$E_2 = -3.40\\text{ eV}$，$E_3 = -1.51\\text{ eV}$，$E_4 = -0.85\\text{ eV}$，$E_\\infty = 0\\text{ eV}$。\n• **萊曼系（Lyman series，躍遷回 $n=1$）**：能量最大 → **紫外線（UV）**。\n• **巴耳末系（Balmer series，躍遷回 $n=2$）**：**可見光（Visible light）**（如 $3\\to 2$ 紅光 $656\\text{ nm}$）。\n• **帕邢系（Paschen series，躍遷回 $n=3$）**：**紅外線（IR）**。\n• **由第 $n$ 激發態可發出的最多不同譜線數目**：$C^n_2 = \\frac{n(n-1)}{2}$（例：大量氫原子處於 $n=4$，最多發出 $\\frac{4\\times 3}{2} = 6$ 條不同波長譜線！）。",
              en: "**Hydrogen Energy Levels & Spectral Series**:\n• $E_1 = -13.6\\text{ eV}$ (ground state; **ionization energy $= 13.6\\text{ eV}$**), $E_2 = -3.40\\text{ eV}$, $E_3 = -1.51\\text{ eV}$, $E_4 = -0.85\\text{ eV}$, $E_\\infty = 0$.\n• **Lyman ($\\to n=1$)**: UV; **Balmer ($\\to n=2$)**: Visible; **Paschen ($\\to n=3$)**: IR.\n• Max number of distinct emission lines from level $n$ (ensemble of atoms): $\\frac{n(n-1)}{2}$."
            },
            {
              zh: "**光子激發 vs 自由電子碰撞激發（超重要分辨！）**：\n• **光子吸收（Absorption）**：光子能量**必須嚴格等於**兩能級之差 $\\Delta E$ 才會被吸收（全有或全無）；除非 $hf \\ge 13.6\\text{ eV}$ 直接把原子電離（多餘能量變為逸出電子動能）。\n• **自由電子碰撞激發（Electron collision）**：入射電子動能只要 **$K \\ge \\Delta E$** 即可把原子激發，碰撞後剩餘能量由入射電子帶走（$K' = K - \\Delta E$）！\n• **吸收光譜為何呈黑線？** 冷氣體原子吸收特定頻率光子後向**四面八方隨機再輻射**，令原入射光方向上該頻率光強大幅減弱，呈現暗線。",
              en: "**Photon vs Electron Excitation (Crucial Distinction!)**:\n• **Photon**: Must have **exact** energy $hf = \\Delta E$ to excite (all-or-nothing), UNLESS $hf \\ge 13.6\\text{ eV}$ (ionizes atom; excess goes to electron KE).\n• **Free electron collision**: Any electron with **$K \\ge \\Delta E$** can excite the atom, keeping leftover energy $K - \\Delta E$!\n• **Dark absorption lines**: Absorbed photons are re-emitted in **all random directions**, depleting the forward beam at those exact wavelengths."
            }
          ],
          formulaIds: ["f-e2-bohr-l", "f-e2-bohr-r", "f-e2-bohr-e", "f-e2-transition"],
          diagramIds: ["diag-bohr-levels"]
        }
      ]
    },
    {
      id: "be2-ch3",
      code: "Ch 3",
      title: { zh: "波粒二象性、電子顯微鏡與納米世界", en: "Wave-Particle Duality, Electron Microscopes & Nanotechnology" },
      topics: [
        {
          id: "be2-3-1",
          code: "E2.4",
          highYield: true,
          title: { zh: "德布羅意物質波、電子繞射、瑞利判據與 TEM / STM", en: "de Broglie Wavelength, Electron Diffraction, Rayleigh Criterion, TEM & STM" },
          summary: {
            zh: "光同時具備波動性（干涉、繞射）與粒子性（光電效應）；德布羅意提出一切運動微粒亦具波動性，**德布羅意波長** $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m_e eV}}$。利用極短波長的高速電子束，電子顯微鏡的解像能力遠超光學顯微鏡！",
            en: "Light has wave-particle duality; de Broglie extended this to matter: **$\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m_e eV}}$**. Extremely short electron wavelengths grant electron microscopes vastly superior resolving power over optical microscopes!"
          },
          points: [
            {
              zh: "**電子繞射實驗（Electron Diffraction）**：經高壓 $V$ 加速的電子束穿過多晶石墨薄片，在螢光屏上呈現**同心圓明暗繞射環**，直接證實電子具波動性！**提高加速電壓 $V$** → 電子動能與動量增大 → **德布羅意波長 $\\lambda$ 變短** → 繞射角減小 → **繞射環半徑縮小**！",
              en: "**Electron Diffraction**: Accelerated electrons passing through polycrystalline graphite form **concentric diffraction rings** on a screen, proving wave nature! **Increasing accelerating voltage $V$** → higher $p$ → **shorter $\\lambda$** → smaller diffraction angle → **rings shrink**!"
            },
            {
              zh: "**瑞利判據（Rayleigh Criterion）與解像能力（Resolving Power）**：透過直徑 $d$ 的圓孔觀察兩個相鄰點光源，剛可分辨的最小角距離為 **$\\theta \\approx \\frac{1.22\\lambda}{d}$**（弧度 $\\text{rad}$）。最小可分辨線距 $s \\approx L\\theta = \\frac{1.22\\lambda L}{d}$。\n• 要提高解像能力（縮小 $\\theta$ 與 $s$）：**縮短波長 $\\lambda$** 或 **增大孔徑直徑 $d$**。\n• 可見光波長約 $400 - 700\\text{ nm}$，故光學顯微鏡無法分辨小於約 $200\\text{ nm}$ 的結構（更看不見約 $0.1\\text{ nm}$ 的原子）。",
              en: "**Rayleigh Criterion & Resolving Power**: Minimum resolvable angular separation through aperture diameter $d$ is **$\\theta \\approx \\frac{1.22\\lambda}{d}$** ($\\text{rad}$); minimum linear separation $s \\approx \\frac{1.22\\lambda L}{d}$.\n• Better resolution (smaller $\\theta$) requires **shorter $\\lambda$** or **larger aperture $d$**.\n• Optical microscopes are diffraction-limited to ~$200\\text{ nm}$ (cannot see ~$0.1\\text{ nm}$ atoms)."
            },
            {
              zh: "**透射電子顯微鏡（TEM）**：利用高壓（如 $100\\text{ kV}$）加速電子得極短 $\\lambda$（可達 $10^{-12}\\text{ m}$ 級），以**磁透鏡（magnetic lenses）** 聚焦電子束穿過**極薄切片樣本**在螢光屏成像（須在**真空**中操作防止空氣散射電子）。優點：解像度極高（約 $0.1\\text{ nm}$）；限制：只能觀察極薄非活體樣本、只能成 2D 黑白像。",
              en: "**Transmission Electron Microscope (TEM)**: Accelerates electrons across high voltage ($\\sim 100\\text{ kV}$) for ultra-short $\\lambda$, focused by **magnetic lenses** through an **ultra-thin specimen** in **vacuum**. Resolution $\\sim 0.1\\text{ nm}$, but limited to thin dead specimens (2D monochrome)."
            },
            {
              zh: "**掃描隧道顯微鏡（STM）核心原理（必考！）**：\n• 以極尖銳的金屬探針靠近**導電樣本**表面約 $1\\text{ nm}$ 並施加小偏壓，電子憑量子力學**量子穿隧效應（quantum tunnelling）** 跨越真空勢壘形成**隧道電流（tunnelling current）**。\n• **隧道電流對探針與表面距離 $d$ 極度敏感（呈指數衰減！）**：距離微增 $0.1\\text{ nm}$，電流可驟降約十倍！\n• **兩種操作模式**：(1) **恆電流模式（Constant-current mode）**：壓電裝置上下調節探針高度以維持電流恆定，記錄高度變化繪出原子級 **3D 表面形貌**（較安全、適合高低起伏較大表面）；(2) **恆高度模式（Constant-height mode）**：高度固定，記錄電流變化（掃描更快，只適合極平坦表面，否則探針易撞毀）。\n• 限制：樣本表面必須**導電**（絕緣體須先鍍上薄導電層）。",
              en: "**Scanning Tunnelling Microscope (STM)**:\n• Sharp conducting tip placed ~$1\\text{ nm}$ above a **conducting sample** with a small bias voltage; electrons cross the vacuum gap via **quantum tunnelling**, creating a **tunnelling current**.\n• **Tunnelling current drops EXPONENTIALLY with gap distance $d$** (tiny $0.1\\text{ nm}$ change alters current dramatically → atomic-scale vertical resolution!).\n• **Modes**: (1) **Constant-current mode** (feedback adjusts tip height via piezoelectric actuator → safe for rougher surfaces, gives 3D topography); (2) **Constant-height mode** (faster, flat surfaces only, risk of crashing tip).\n• Limitation: Sample must be **electrically conducting**."
            }
          ],
          formulaIds: ["f-e2-debroglie", "f-e2-debroglie-v", "f-e2-rayleigh"],
          diagramIds: ["diag-tem-stm"]
        },
        {
          id: "be2-3-2",
          code: "E2.5",
          title: { zh: "探索納米世界（Nanoscale & Nanotechnology）", en: "Probing into the Nano-Scale & Nanotechnology" },
          summary: {
            zh: "**納米尺度（Nano-scale）** 指 $1\\text{ nm}$ 至 $100\\text{ nm}$（$1\\text{ nm} = 10^{-9}\\text{ m}$）。當物質縮小至納米級時，其**表面積與體積之比（Surface-Area-to-Volume Ratio）急劇增大**，配合量子效應，呈現與宏觀塊體截然不同的物理及化學性質。",
            en: "**Nano-scale** spans $1 - 100\\text{ nm}$ ($1\\text{ nm} = 10^{-9}\\text{ m}$). At this scale, the **surface-area-to-volume ratio increases dramatically** alongside quantum effects, producing physical & chemical properties radically different from bulk materials."
          },
          points: [
            {
              zh: "**為何納米材料性質大變？（表面積對體積比計算常考！）**：將邊長 $L$ 的立方體分割成 $N^3$ 個邊長 $L/N$ 的小立方體，總體積不變，但總表面積增為 **$N$ 倍**（對立方體 $\\frac{A}{V} = \\frac{6}{L}$；對球體 $\\frac{A}{V} = \\frac{3}{r}$）！表面原子比例大增導致：\n• **熔點顯著下降**（表面原子鍵結較少，較易掙脫）；\n• **光學性質改變**（例：納米氧化鋅 ZnO 顆粒遠小於可見光波長，不散射可見光而呈透明，卻仍有效吸收紫外線 → 透明防曬霜；納米金粒子依尺寸呈紅/紫色而非金黃色）；\n• **化學反應與催化活性大增**（龐大表面積提供更多反應位點，如納米銀 $\\text{Ag}$ 強效抗菌、納米 $\\text{TiO}_2$ 光觸媒自潔玻璃）；\n• **機械與電學奇蹟**：碳納米管（CNTs）具極高抗拉強度與優異導電/導熱性；荷葉效應（納米微結構超疏水防污塗層）。",
              en: "**Surface-Area-to-Volume Ratio & Novel Properties**: Dividing a cube of side $L$ into $N^3$ smaller cubes keeps volume fixed while multiplying total surface area by **$N$** ($A/V = 6/L$ for cube; $3/r$ for sphere). Consequences:\n• **Lower melting point** (higher fraction of weakly bound surface atoms).\n• **Altered optical properties**: Nano-ZnO is smaller than visible $\\lambda$ → transparent to visible light while absorbing UV (invisible sunscreen); nano-gold appears red/purple.\n• **Higher chemical/catalytic reactivity**: Nano-silver antibacterial, nano-$\\text{TiO}_2$ self-cleaning glass.\n• **Mechanical/surface**: Carbon nanotubes (ultra-strong), lotus-effect superhydrophobic stain-resistant fabrics."
            },
            {
              zh: "**納米科技的潛在風險與安全考量（論述/短答常考）**：納米微粒極微細，能輕易經呼吸道深入肺泡、穿透皮膚屏障甚至血腦屏障進入血液循環，引發炎症或細胞毒性；排入生態系統後亦難以分解與過濾，故須嚴格監管與長期毒性評估。",
              en: "**Health & Environmental Concerns**: Ultra-tiny nanoparticles can be inhaled deep into lungs, penetrate skin or blood-brain barriers causing inflammation/toxicity, and persist in ecosystems without easy filtration — requiring strict regulation."
            }
          ],
          formulaIds: ["f-e2-sav"]
        }
      ]
    }
  ]
});
