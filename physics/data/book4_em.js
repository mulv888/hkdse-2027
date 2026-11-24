/* ==========================================================================
   Book 4: Electricity and Magnetism (Paper 1 Compulsory Part)
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book4",
  paper: "paper1",
  code: "Book 4",
  color: "#4f46e5",
  title: { zh: "Book 4：電和磁", en: "Book 4: Electricity and Magnetism" },
  subtitle: {
    zh: "靜電與電場 · 電路、電阻與內電阻 · 家居用電 · 磁場與磁力 · 電磁感應 · 交流電與變壓器",
    en: "Electrostatics & E-Field · Circuits & Internal Resistance · Domestic Electricity · Magnetism · EM Induction · AC & Transformers"
  },
  chapters: [
    {
      id: "b4-ch1",
      code: "Ch 1",
      title: { zh: "靜電學與電場", en: "Electrostatics and Electric Fields" },
      topics: [
        {
          id: "b4-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "起電方法、庫侖定律與電場強度（點電荷 & 平行板）", en: "Charging, Coulomb's Law & Electric Field Strength" },
          summary: {
            zh: "電荷守恆且量子化（基本電荷 $e = 1.60 \\times 10^{-19}\\text{ C}$）。點電荷間的靜電力服從**庫侖定律** $F = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 r^2}$；電場強度定義為單位正試探電荷所受電場力 $E = \\frac{F}{q}$（單位 $\\text{N C}^{-1}$ 或 $\\text{V m}^{-1}$）。",
            en: "Charge is conserved and quantized ($e = 1.60 \\times 10^{-19}\\text{ C}$). Point charges obey **Coulomb's Law** $F = \\frac{Q_1 Q_2}{4\\pi\\varepsilon_0 r^2}$. Electric field strength is force per unit positive test charge: $E = \\frac{F}{q}$ ($\\text{N C}^{-1}$ or $\\text{V m}^{-1}$)."
          },
          points: [
            {
              zh: "**起電機制**：只有**自由電子（負電荷）** 轉移，質子不會移動！(1) **摩擦起電**（絕緣體間電子轉移）；(2) **感應起電（Charging by induction）** + 接地（Earthing）：以帶正電棒靠近絕緣金屬球 → 電子被吸引到近端 → 觸摸接地時電子從大地流入中和遠端正電 → **先斷開接地，再移走帶電棒** → 金屬球淨帶**負電**！（順序弄反則無淨電荷！）",
              en: "**Charging Mechanisms**: Only **electrons** transfer! In **charging by induction + earthing**: bring $+$-rod near insulated sphere → earth sphere (electrons flow from Earth to neutralize far end) → **remove earth FIRST, then remove rod** → sphere gains net negative charge!"
            },
            {
              zh: "**電場線（Electric Field Lines）規則**：由正電荷出發、指向負電荷；切線方向 = **正電荷**受力方向（負電荷受力相反！）；線越密集表示電場越強；電場線永不相交。兩平行金屬板間形成**勻強電場（uniform field）**（等距平行線，邊緣微彎），$E = \\frac{V}{d}$。",
              en: "**Electric Field Lines**: Start on $+$, end on $-$; tangent shows force direction on a **positive charge**; denser lines = stronger field; never cross. Between parallel plates (separation $d$, p.d. $V$), field is **uniform**: $E = \\frac{V}{d}$."
            },
            {
              zh: "**點電荷電場疊加（矢量相加！）**：由單點電荷產生的電場 $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$。求多個電荷在空間某點的合電場（或**中性點 neutral point** $E_{\\text{net}} = 0$）時，必須先判斷各分電場方向，再進行矢量加減！",
              en: "**Superposition of Electric Fields**: Point charge field $E = \\frac{Q}{4\\pi\\varepsilon_0 r^2}$. Always find directions first and add **vectorially** (especially when locating a **neutral point** where $E_{\\text{net}} = 0$)."
            },
            {
              zh: "**帶電粒子在平行板勻強電場中的運動**：(1) 靜止加速：$qV = \\frac{1}{2}mv^2$；(2) 垂直射入勻強電場：沿垂直電場方向勻速、沿電場方向勻加速（$a = \\frac{qE}{m} = \\frac{qV}{md}$），軌跡如平拋運動為**拋物線（parabola）**！",
              en: "**Charged Particle in Uniform E-Field**: (1) Accelerated from rest: $qV = \\frac{1}{2}mv^2$; (2) Injected perpendicular to field: constant horizontal velocity + constant transverse acceleration $a = \\frac{qE}{m}$ → **parabolic trajectory** (identical to horizontal projectile)!"
            }
          ],
          formulaIds: ["f-b4-coulomb", "f-b4-efield-def", "f-b4-efield-pt", "f-b4-efield-plate", "f-b4-work-q"],
          diagramIds: ["diag-electric-fields", "diag-charge-fields"]
        }
      ]
    },
    {
      id: "b4-ch2",
      code: "Ch 2",
      title: { zh: "電路、電阻、電動勢與家居用電", en: "Electric Circuits, Resistance, e.m.f. & Domestic Electricity" },
      topics: [
        {
          id: "b4-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "電流、電勢差、歐姆定律、電阻率與非歐姆元件", en: "Current, p.d., Ohm's Law, Resistivity & I-V Characteristics" },
          summary: {
            zh: "**電流** $I = \\frac{Q}{t}$；**電勢差（p.d.）** $V = \\frac{W}{Q}$；**電阻**定義為 $R = \\frac{V}{I}$。導體電阻取決於材料電阻率 $\\rho$、長度 $l$ 與截面積 $A$：$R = \\frac{\\rho l}{A}$。",
            en: "**Current** $I = \\frac{Q}{t}$; **Potential difference (p.d.)** $V = \\frac{W}{Q}$; **Resistance** $R = \\frac{V}{I}$. For a uniform wire, $R = \\frac{\\rho l}{A}$."
          },
          points: [
            {
              zh: "**拉長導線陷阱（體積守恆！）**：若將同一條金屬線均勻拉長至原長的 $k$ 倍，因體積 $V = Al$ 不變，截面積縮為 $\\frac{A}{k}$，故新電阻 $R' = \\rho\\frac{kl}{A/k} = k^2 R$（拉長 2 倍，電阻變 **4 倍**！）。",
              en: "**Wire Stretching Trap (Constant Volume!)**: Stretching a wire to $k$ times its length reduces cross-section to $A/k$ (since $Al = \\text{const}$), so $R' = k^2 R$ (doubling length quadruples resistance!)."
            },
            {
              zh: "**四大元件 $I$-$V$ 圖像（必背特徵）**：\n• **定溫金屬導體（歐姆導體）**：穿過原點的直線（$I \\propto V$，電阻恆定）。\n• **鎢絲燈泡（Filament lamp）**：隨 $V$ 增大曲線變平緩 → 因電流增大使燈絲發熱溫度急升，金屬原子振動加劇阻礙電子流動，**電阻 $R = V/I$ 增大**！\n• **半導體二極管（Diode）**：正向偏壓超過約 $0.7\\text{ V}$ 迅速導通，反向偏壓電阻極大幾乎無電流。\n• **熱敏電阻（NTC Thermistor）**：溫度升高時自由載流子數目大增，**電阻反而下降**。",
              en: "**Key $I$-$V$ Graphs**:\n• **Ohmic conductor (constant $T$)**: Straight line through origin.\n• **Filament lamp**: Curve bends flatter at high $V$ — heating increases lattice vibrations → **resistance $R = V/I$ increases**!\n• **Semiconductor diode**: Conducts sharply above ~$0.7\\text{ V}$ forward bias; blocks reverse current.\n• **NTC thermistor**: Higher $T$ frees more charge carriers → **resistance decreases**."
            },
            {
              zh: "**計算非線性元件電阻的超級陷阱**：某工作點 $(V, I)$ 的電阻永遠是該點座標比值 **$R = \\frac{V}{I}$**，**絕不是** $I$-$V$ 曲線切線斜率的倒數！",
              en: "**Non-Ohmic Resistance Trap**: Resistance at point $(V, I)$ is ALWAYS the coordinate ratio **$R = \\frac{V}{I}$**, NEVER $1 / (\\text{tangent slope})$!"
            },
            {
              zh: "**電動勢（e.m.f., $\\mathcal{E}$）與內電阻（Internal Resistance, $r$）**：電源總電動勢 = 路端電壓 + 內電阻壓降：$\\mathcal{E} = V + Ir = I(R + r)$。作路端電壓 $V$ 對電流 $I$ 圖：$V = -rI + \\mathcal{E}$ → **$y$ 截距 = 電動勢 $\\mathcal{E}$**，**斜率 = $-r$**，**$x$ 截距 = 短路電流 $\\mathcal{E}/r$**！",
              en: "**e.m.f. ($\\mathcal{E}$) & Internal Resistance ($r$)**: $\\mathcal{E} = V + Ir = I(R+r)$, so terminal p.d. $V = \\mathcal{E} - Ir$. Plotting $V$ vs $I$: **$y$-intercept $= \\mathcal{E}$**, **slope $= -r$**, **$x$-intercept $=$ short-circuit current $\\mathcal{E}/r$**!"
            },
            {
              zh: "**電表非理想效應（Ammeter-Voltmeter Methods）**：真實安培計有小內阻 $R_A$、真實伏特計有大（非無窮）內阻 $R_V$。\n• **伏特計跨接電阻（內接安培計外接伏特計）**：適合測**小電阻**（$R \\ll R_V$，分流誤差極小；測得 $R_{\\text{meas}} = R \\parallel R_V < R_{\\text{true}}$）。\n• **伏特計跨接電阻與安培計**：適合測**大電阻**（$R \\gg R_A$，安培計分壓誤差極小；測得 $R_{\\text{meas}} = R + R_A > R_{\\text{true}}$）。",
              en: "**Non-Ideal Meter Loading**:\n• Voltmeter directly across $R$: best for **small $R$** ($R \\ll R_V$); gives $R_{\\text{meas}} < R_{\\text{true}}$.\n• Voltmeter across both $R$ and ammeter: best for **large $R$** ($R \\gg R_A$); gives $R_{\\text{meas}} > R_{\\text{true}}$."
            }
          ],
          formulaIds: ["f-b4-ohm", "f-b4-resistivity", "f-b4-series-par", "f-b4-power", "f-b4-emf", "f-b4-potdiv"],
          diagramIds: ["diag-iv-graphs"]
        },
        {
          id: "b4-2-2",
          code: "2.2",
          highYield: true,
          title: { zh: "家居電路、環形電路、安全裝置與電費計算", en: "Domestic Circuits, Ring Main, Electrical Safety & kW h" },
          summary: {
            zh: "香港市電為 **$220\\text{ V}$、$50\\text{ Hz}$ 交流電（AC）**。所有家居電器均以**並聯（parallel）** 連接至電源，使各電器均獲額定 $220\\text{ V}$ 電壓且能獨立開關運作。",
            en: "Hong Kong mains supply is **$220\\text{ V}$, $50\\text{ Hz}$ AC**. Domestic appliances are connected in **parallel** so each receives the rated $220\\text{ V}$ and operates independently."
          },
          points: [
            {
              zh: "**三腳插頭與導線色碼**：\n• **火線（Live wire, L，棕色 Brown）**：電勢在 $\\pm 311\\text{ V}$ 間交變（有效值 $220\\text{ V}$），**保險絲（Fuse）與開關（Switch）必須裝在火線上**！（若裝在中線上，即使斷開開關或熔斷保險絲，電器仍接通高電勢火線，觸摸會觸電！）\n• **中線（Neutral wire, N，藍色 Blue）**：電勢接近 $0\\text{ V}$，構成電流迴路。\n• **地線（Earth wire, E，黃綠間條 Yellow/Green）**：連接金屬外殼至大地。一旦火線鬆脫碰觸金屬外殼，大電流經低電阻地線流向大地，立刻**燒斷火線上的保險絲**切斷電源，保護人體免受觸電！（具塑膠絕緣外殼的**雙重絕緣 Double Insulation** 電器「回」標誌則無需地線。）",
              en: "**3-Pin Plug & Wire Colours**:\n• **Live (L, Brown)**: alternates at $220\\text{ V}$ r.m.s. — **fuse & switch MUST be on the Live wire** so the appliance is completely isolated from high voltage when off/blown!\n• **Neutral (N, Blue)**: at ~$0\\text{ V}$, completes the circuit.\n• **Earth (E, Yellow/Green)**: connects metal casing to earth. If a live wire touches the casing, huge fault current flows to earth, immediately **blowing the fuse**! (**Double-insulated** plastic-case appliances need no earth wire.)"
            },
            {
              zh: "**環形電路（Ring Main Circuit）優勢**：每個插座均有**兩條並聯路徑**連往配電箱，導線所載電流減半 → 可用較幼銅線節省成本，且每處電壓降較小、較不易過熱。",
              en: "**Ring Main Advantage**: Two parallel current paths from consumer unit to every socket → current in cables is halved, allowing thinner cheaper wires and reducing overheating."
            },
            {
              zh: "**電器額定值與千瓦時（kW h）**：若燈泡標示「$220\\text{ V}, 100\\text{ W}$」，其電阻近似固定 $R = \\frac{V^2}{P} = 484\\;\\Omega$；接上 $110\\text{ V}$ 電源時實際功率變為 $\\frac{1}{4}$（$25\\text{ W}$）！串聯時額定功率**較小**（電阻較大）的燈泡反而更亮（$P = I^2 R$）！電能單位：$1\\text{ kW h} = 3.6 \\times 10^6\\text{ J}$。",
              en: "**Rated Power & kW h**: For a '$220\\text{ V}, 100\\text{ W}$' bulb, $R = V^2/P$. At $110\\text{ V}$, actual power drops to $1/4$! Connected in **series**, the bulb with **lower rated power** (higher $R$) glows BRIGHTER ($P = I^2 R$)! $1\\text{ kW h} = 3.6 \\times 10^6\\text{ J}$."
            }
          ],
          formulaIds: ["f-b4-kwh"],
          diagramIds: ["diag-domestic-ring"]
        }
      ]
    },
    {
      id: "b4-ch3",
      code: "Ch 3",
      title: { zh: "電磁學：磁場與磁力", en: "Electromagnetism: Magnetic Fields & Magnetic Forces" },
      topics: [
        {
          id: "b4-3-1",
          code: "3.1",
          highYield: true,
          title: { zh: "電流的磁效應、磁力（F = BIl sinθ, F = BQv sinθ）與直流電動機", en: "Magnetic Fields of Currents, Magnetic Forces & DC Motor" },
          summary: {
            zh: "通電導體周圍產生磁場（用**右手握拳定則 Right-Hand Grip Rule** 判斷）；處於磁場中的通電導線及運動電荷受磁力作用（用**弗萊明左手定則 Fleming's Left-Hand Rule** 判斷）。",
            en: "Currents produce magnetic fields (**Right-Hand Grip Rule**). Current-carrying wires and moving charges in a B-field experience magnetic forces (**Fleming's Left-Hand Rule**)."
          },
          points: [
            {
              zh: "**兩種基本載流導體磁場公式**：\n• 長直導線距 $r$ 處：$B = \\frac{\\mu_0 I}{2\\pi r}$（同心圓磁場線，越遠越疏）。\n• 長螺線管（長度 $l$，總匝數 $N$）內部勻強磁場：$B = \\frac{\\mu_0 N I}{l} = \\mu_0 n I$（插入**軟鐵芯 soft iron core** 可大幅增強磁場且斷電易退磁）。",
              en: "**Magnetic Field Formulas**:\n• Long straight wire at distance $r$: $B = \\frac{\\mu_0 I}{2\\pi r}$.\n• Inside long solenoid (length $l$, turns $N$): $B = \\frac{\\mu_0 NI}{l} = \\mu_0 nI$ (inserting a **soft iron core** greatly intensifies $B$ and demagnetizes easily when switched off)."
            },
            {
              zh: "**兩條平行載流導線間的磁力**：**同向電流互相吸引，反向電流互相排斥！** 單位長度受力 $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}$（兩導線所受磁力大小必然相等、方向相反，屬牛頓第三定律作用力與反作用力對，即使 $I_1 \\ne I_2$！）。",
              en: "**Parallel Current-Carrying Wires**: **Same-direction currents ATTRACT; opposite currents REPEL!** Force per unit length $\\frac{F}{l} = \\frac{\\mu_0 I_1 I_2}{2\\pi r}$ (equal & opposite on both wires even if $I_1 \\ne I_2$!)."
            },
            {
              zh: "**直流電動機（Simple DC Motor）核心原理**：\n• 線圈兩側邊受相反方向磁力形成力偶矩使線圈轉動。\n• **分裂環換向器（Split-ring commutator）** 與碳刷配合：每當線圈轉至豎直位置（每轉半圈 $180^\\circ$），自動**反轉線圈內的電流方向**，確保力矩方向維持一致，令線圈沿**同一方向連續轉動**（到達豎直平衡位靠慣性衝過！）。\n• 增大轉速/力矩方法：增大電流 $I$、增加線圈匝數 $N$、使用更強磁鐵（或弧形磁極提供徑向磁場）、加裝軟鐵芯。",
              en: "**Simple DC Motor**:\n• Opposite magnetic forces on sides create a turning couple.\n• **Split-ring commutator** reverses current in the coil **every half revolution** (at vertical position) so torque stays in the same sense for continuous rotation (inertia carries coil past the vertical gap).\n• Stronger torque: higher $I$, more turns $N$, stronger $B$ (curved poles for radial field), soft iron core."
            },
            {
              zh: "**帶電粒子垂直射入勻強磁場**：磁力 $F = BQv$ 永遠**垂直於速度 $v$** → **磁力對電荷永不作功**，粒子速率與動能不變，並作**勻速圓周運動**！$\\frac{mv^2}{r} = BQv \\Rightarrow r = \\frac{mv}{BQ}$，週期 $T = \\frac{2\\pi m}{BQ}$（週期與速率 $v$ 無關！）。**速度選擇器（Velocity Selector）**：正交電場與磁場平衡 $qE = qvB \\Rightarrow v = \\frac{E}{B}$。",
              en: "**Charged Particle in Uniform B-Field**: $F = BQv \\perp v$ → **magnetic force does ZERO work**, speed & KE stay constant, trajectory is a **circle**: $r = \\frac{mv}{BQ}$, period $T = \\frac{2\\pi m}{BQ}$ (independent of speed!). **Velocity selector**: $qE = qvB \\Rightarrow v = E/B$."
            }
          ],
          formulaIds: ["f-b4-bwire", "f-b4-bsol", "f-b4-fbil", "f-b4-fbqv", "f-b4-r-mag", "f-b4-parwires"],
          diagramIds: ["diag-magnetic-motor", "diag-charge-fields"],
          trap: {
            zh: "運用弗萊明左手定則時，中指指向的是**傳統電流方向（正電荷運動方向）**！若是**電子或負離子**向右移動，中指必須指**向左**！",
            en: "In Fleming's Left-Hand Rule, the middle finger points along **conventional current (direction of POSITIVE charge)**! For **electrons** moving right, point your middle finger LEFT!"
          }
        }
      ]
    },
    {
      id: "b4-ch4",
      code: "Ch 4",
      title: { zh: "電磁感應、交流電與變壓器", en: "Electromagnetic Induction, AC & Transformers" },
      topics: [
        {
          id: "b4-4-1",
          code: "4.1",
          highYield: true,
          title: { zh: "磁通量、法拉第定律、楞次定律與發電機", en: "Magnetic Flux, Faraday's Law, Lenz's Law & Generators" },
          summary: {
            zh: "**法拉第電磁感應定律**：感應電動勢大小與**磁通量鏈結的變化率**成正比：$\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t}$（$\\Phi = BA\\cos\\theta$）。**楞次定律**：感應電流的方向總是產生磁場以**阻礙引起它的磁通量變化**（體現**能量守恆**！）。",
            en: "**Faraday's Law**: Induced e.m.f. equals the rate of change of magnetic flux linkage: $\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t}$ ($\\Phi = BA\\cos\\theta$). **Lenz's Law**: Induced current flows in a direction that **opposes the change in flux producing it** (a direct consequence of **conservation of energy**!)."
          },
          points: [
            {
              zh: "**直導體切割磁場線**：長 $l$ 導體以速度 $v$ 垂直切割磁場 $B$ 時，感應電動勢 $\\varepsilon = Blv$，感應電流方向用**弗萊明右手定則（Fleming's Right-Hand Rule）**（發電機用右手、電動機用左手！）。**注意**：導體必須形成閉合迴路才有感應電流，但**即使斷路兩端仍有感應電動勢 $\\varepsilon$**！",
              en: "**Motional e.m.f.**: A rod of length $l$ cutting $B$ perpendicularly at speed $v$ induces $\\varepsilon = Blv$ (direction by **Fleming's Right-Hand Rule**). Note: **Induced e.m.f. exists even in an open circuit**, while induced current requires a closed loop!"
            },
            {
              zh: "**磁鐵墜落穿過線圈 / 鋁管（經典必考題！）**：\n• 磁鐵進線圈：線圈上端感應出**同名磁極**排斥磁鐵（減速，加速度 $< g$）；\n• 磁鐵出線圈：線圈下端感應出**異名磁極**吸引磁鐵（拉住它，感應電流反向！）。\n• 由於磁鐵下落加速，離開線圈時速率比進入時更快 → 離開時的感應電動勢**波峰更高且持續時間更短**，但進出兩半的 **$\\varepsilon$-$t$ 圖面積相等**（因總磁通量變化 $|\\Delta\\Phi|$ 相同！）。\n• **渦電流（Eddy Currents）與磁阻尼**：磁鐵跌入完整鋁管會因感應渦電流受向上磁阻力而極慢勻速下落（電能轉化為熱能）；若鋁管縱向切開裂縫，無法形成閉合渦電流，磁鐵幾乎自由落體！",
              en: "**Magnet Falling Through Coil / Metal Tube (Classic!)**:\n• Entering: top induces **same pole** to repel; Exiting: bottom induces **opposite pole** to attract (current reverses!).\n• Because magnet speeds up under gravity, exit e.m.f. pulse is **taller and narrower**, yet **areas of both pulses are EQUAL** (same total $|\\Delta\\Phi|$!).\n• **Eddy Currents**: Magnet falls very slowly inside a solid aluminium tube (magnetic braking), but falls freely in a vertically slotted tube (eddy loops broken)."
            },
            {
              zh: "**交流發電機（AC Generator）波形與線圈位置關係（極易搞錯！）**：\n• 線圈平面**平行**於磁場時：穿過線圈的磁通量 $\\Phi = 0$，但兩邊垂直切割磁感線最劇烈，**變化率 $\\frac{\\Delta\\Phi}{\\Delta t}$ 最大 → 感應電動勢 $|\\varepsilon|$ 達最大值**！\n• 線圈平面**垂直**於磁場時：$\\Phi$ 最大，但瞬間平行移動不切割磁感線，**$\\varepsilon = 0$**！\n• 使用**滑環（Slip rings）** 輸出正弦交流電（AC）；改用**分裂環換向器**則輸出脈動直流電（DC）。將線圈轉速加倍（$f \\to 2f$）：輸出波形**頻率加倍（週期減半）且峰值電壓亦加倍**！",
              en: "**AC Generator Orientation vs e.m.f. (Huge Exam Favourite!)**:\n• Coil plane **PARALLEL to $B$**: $\\Phi = 0$, cutting rate MAX → **$|\\varepsilon|$ is MAXIMUM**!\n• Coil plane **PERPENDICULAR to $B$**: $\\Phi$ max, cutting rate 0 → **$\\varepsilon = 0$**!\n• **Slip rings** give sinusoidal AC; **split-ring commutator** gives pulsating DC. Doubling rotation speed **doubles BOTH frequency AND peak e.m.f.**!"
            }
          ],
          formulaIds: ["f-b4-flux", "f-b4-faraday", "f-b4-blv"],
          diagramIds: ["diag-em-induction"]
        },
        {
          id: "b4-4-2",
          code: "4.2",
          highYield: true,
          title: { zh: "交流電有效值（r.m.s.）、變壓器與高壓輸電網", en: "AC r.m.s. Values, Transformers & High-Voltage Grid Transmission" },
          summary: {
            zh: "正弦交流電的**均方根值 / 有效值（r.m.s.）** 定義為在純電阻中產生相同平均熱功率的等效直流值：$V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$，$I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$。理想變壓器滿足 $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$。",
            en: "**Root-mean-square (r.m.s.)** AC value equals the DC value producing the same mean heating power in a resistor: $V_{\\text{rms}} = \\frac{V_0}{\\sqrt{2}}$, $I_{\\text{rms}} = \\frac{I_0}{\\sqrt{2}}$. Ideal transformer: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$."
          },
          points: [
            {
              zh: "**變壓器只適用於交流電（AC）**：直流電產生恆定磁場，磁通量無變化（$\\frac{\\Delta\\Phi}{\\Delta t} = 0$），副線圈無感應電動勢！",
              en: "**Transformers Require AC**: Steady DC produces constant flux ($\\Delta\\Phi/\\Delta t = 0$) → zero secondary e.m.f.!"
            },
            {
              zh: "**變壓器四大能量損耗及改進方法（Paper 1B 必背！）**：\n1. **渦電流損耗（Eddy currents in core）** → 使用**疊片軟鐵芯（laminated soft iron core）**（鐵片間塗絕緣層增大橫向電阻）。\n2. **磁滯損耗（Hysteresis / 磁化退磁生熱）** → 採用**軟鐵（soft iron）** 作鐵芯（易磁化易退磁）。\n3. **線圈焦耳熱損耗（Copper loss, $I^2R$）** → 使用**較粗的低電阻銅線**。\n4. **漏磁損耗（Flux leakage）** → 將原、副線圈緊密繞於同一閉合軟鐵芯上。",
              en: "**4 Transformer Losses & Remedies (Must Memorize!)**:\n1. **Eddy current heating** → **laminated** soft iron core (insulated thin sheets increase resistance).\n2. **Magnetization/demagnetization (hysteresis)** → use **soft iron**.\n3. **Wire heating ($I^2R$)** → thick low-resistance **copper wires**.\n4. **Flux leakage** → wind primary & secondary tightly on a closed soft iron core."
            },
            {
              zh: "**為何採用高壓交流輸電？（DSE 必考推導！）**：發電廠輸出固定總功率 $P$，經升壓變壓器將輸電電壓提升至 $V$，輸電線電流降至 $I = \\frac{P}{V}$。電纜電阻 $R_c$ 的熱功率損耗為 **$P_{\\text{loss}} = I^2 R_c = \\left(\\frac{P}{V}\\right)^2 R_c \\propto \\frac{1}{V^2}$**！電壓提升 10 倍，輸電損耗減至 $\\frac{1}{100}$！",
              en: "**Why High-Voltage AC Transmission?**: For fixed power $P$, stepping voltage up to $V$ cuts cable current to $I = P/V$. Heating power lost in cable resistance $R_c$ is **$P_{\\text{loss}} = I^2 R_c = \\frac{P^2 R_c}{V^2} \\propto \\frac{1}{V^2}$**! Raising $V$ by $10\\times$ slashes power loss to $1/100$!"
            }
          ],
          formulaIds: ["f-b4-rms", "f-b4-transformer", "f-b4-trans-eff", "f-b4-grid-loss"],
          diagramIds: ["diag-transformer-grid"],
          trap: {
            zh: "計算輸電電纜功率損耗時，**絕對不可用 $P_{\\text{loss}} = \\frac{V_{\\text{supply}}^2}{R_c}$！** 因為 $V_{\\text{supply}}$ 是整個輸電系統電壓（包含用戶負載），而非單獨落在電纜兩端的壓降 $V_{\\text{cable}} = IR_c$！永遠用 **$P_{\\text{loss}} = I^2 R_c$**！",
            en: "NEVER compute cable power loss as $V_{\\text{supply}}^2 / R_c$! $V_{\\text{supply}}$ is dropped across cable + load, NOT just the cable. ALWAYS compute $I = P/V$ first, then **$P_{\\text{loss}} = I^2 R_c$**!"
          }
        }
      ]
    }
  ]
});
