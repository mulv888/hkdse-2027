/* ==========================================================================
   2027 HKDSE Physics Practice Quiz Bank (Book 1–5, Book E2, Book E3)
   Authentic DSE-style bilingual MCQs with full worked math solutions
   ========================================================================== */
window.PHY_QUIZZES = [
  {
    id: "q-b1-1", book: "book1",
    q: {
      zh: "一個密封剛性容器內盛有理想氣體，溫度由 $27^\\circ\\text{C}$ 升至 $327^\\circ\\text{C}$。氣體分子的均方根速率 $c_{\\text{rms}}$ 與氣體壓強 $p$ 分別變為原來的多少倍？",
      en: "An ideal gas in a rigid sealed container is heated from $27^\\circ\\text{C}$ to $327^\\circ\\text{C}$. By what factors do the r.m.s. speed $c_{\\text{rms}}$ and pressure $p$ change?"
    },
    options: [
      { zh: "$c_{\\text{rms}}$ 變為 $\\sqrt{2}$ 倍，$p$ 變為 $2$ 倍", en: "$c_{\\text{rms}}$ by $\\sqrt{2}$, $p$ by $2$" },
      { zh: "$c_{\\text{rms}}$ 變為 $2$ 倍，$p$ 變為 $2$ 倍", en: "$c_{\\text{rms}}$ by $2$, $p$ by $2$" },
      { zh: "$c_{\\text{rms}}$ 變為 $\\sqrt{2}$ 倍，$p$ 變為 $4$ 倍", en: "$c_{\\text{rms}}$ by $\\sqrt{2}$, $p$ by $4$" },
      { zh: "$c_{\\text{rms}}$ 變為 $11$ 倍，$p$ 變為 $12$ 倍", en: "$c_{\\text{rms}}$ by $11$, $p$ by $12$" }
    ],
    ans: 0,
    exp: {
      zh: "必須先轉成開氏溫標：$T_1 = 27 + 273 = 300\\text{ K}$，$T_2 = 327 + 273 = 600\\text{ K}$（$T_2 = 2T_1$）。\n• 恆容壓強定律：$p \\propto T \\Rightarrow p$ 變為 **$2$ 倍**。\n• 由 $c_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\propto \\sqrt{T} \\Rightarrow c_{\\text{rms}}$ 變為 **$\\sqrt{2}$ 倍**。",
      en: "Convert to Kelvin first: $T_1 = 300\\text{ K}$, $T_2 = 600\\text{ K}$ ($T_2 = 2T_1$).\n• Constant volume: $p \\propto T \\Rightarrow p$ doubles ($2\\times$).\n• Since $c_{\\text{rms}} \\propto \\sqrt{T} \\Rightarrow c_{\\text{rms}}$ increases by $\\sqrt{2}\\times$."
    }
  },
  {
    id: "q-b1-2", book: "book1",
    q: {
      zh: "測定冰的比熔解潛熱 $l_f$ 時，若學生誤用了 $-10^\\circ\\text{C}$ 的冰而非 $0^\\circ\\text{C}$ 正在熔化的冰，且沒有使用對照裝置，僅考慮「冰初始低於 $0^\\circ\\text{C}$」這一因素對實驗測得 $l_f$ 的影響為何？",
      en: "In measuring $l_f$ of ice, if a student uses ice initially at $-10^\\circ\\text{C}$ instead of melting ice at $0^\\circ\\text{C}$, how does this error alone affect the measured value of $l_f$?"
    },
    options: [
      { zh: "測得 $l_f$ 偏大（因部分電能消耗於將冰升溫至 $0^\\circ\\text{C}$，熔化質量偏小）", en: "Overestimated (some heater energy heats ice to $0^\\circ\\text{C}$, so less ice melts)" },
      { zh: "測得 $l_f$ 偏小（因冰熔化得更快）", en: "Underestimated (ice melts faster)" },
      { zh: "沒有影響（因 $l_f$ 是常數）", en: "No effect ($l_f$ is constant)" },
      { zh: "無法確定，視乎電熱器功率", en: "Cannot be determined" }
    ],
    ans: 0,
    exp: {
      zh: "部分電熱器提供的能量 $E$ 先用來把冰由 $-10^\\circ\\text{C}$ 加熱至 $0^\\circ\\text{C}$，因此實際熔化得到的冰水質量 $\\Delta m$ 比理論值小。代入 $l_f = \\frac{E}{\\Delta m}$，分母偏小令測得 $l_f$ **偏大**！",
      en: "Part of electrical energy $E$ is used to warm ice from $-10^\\circ\\text{C}$ to $0^\\circ\\text{C}$, reducing melted mass $\\Delta m$. By $l_f = E/\\Delta m$, smaller $\\Delta m$ gives an **overestimated** $l_f$."
    }
  },
  {
    id: "q-b2-1", book: "book2",
    q: {
      zh: "一輛質量為 $1200\\text{ kg}$ 的汽車以 $20\\text{ m s}^{-1}$ 駛過半徑為 $100\\text{ m}$ 的光滑傾斜彎道，無需任何側面摩擦力即可安全轉彎。該路面的傾斜角 $\\theta$ 最接近哪個數值？（取 $g = 9.81\\text{ m s}^{-2}$）",
      en: "A $1200\\text{ kg}$ car rounds a frictionless banked curve of radius $100\\text{ m}$ at $20\\text{ m s}^{-1}$ without skidding. What is the banking angle $\\theta$? ($g = 9.81\\text{ m s}^{-2}$)"
    },
    options: [
      { zh: "$11.5^\\circ$", en: "$11.5^\\circ$" },
      { zh: "$22.2^\\circ$", en: "$22.2^\\circ$" },
      { zh: "$32.0^\\circ$", en: "$32.0^\\circ$" },
      { zh: "$45.0^\\circ$", en: "$45.0^\\circ$" }
    ],
    ans: 1,
    exp: {
      zh: "由傾斜彎道推導公式 $\\tan\\theta = \\frac{v^2}{rg} = \\frac{20^2}{100 \\times 9.81} = 0.4077$。\n故 $\\theta = \\arctan(0.4077) \\approx 22.2^\\circ$（留意與汽車質量 $1200\\text{ kg}$ 無關！）。",
      en: "Using ideal banking formula $\\tan\\theta = \\frac{v^2}{rg} = \\frac{400}{981} = 0.4077 \\Rightarrow \\theta \\approx 22.2^\\circ$ (independent of mass!)."
    }
  },
  {
    id: "q-b2-2", book: "book2",
    q: {
      zh: "一顆人造衛星在距地球表面高度 $h = R_E$（$R_E$ 為地球半徑）的圓軌道運行。其軌道上的引力場強度 $g$ 與近地表面軌道（$r \\approx R_E$）衛星相比，以及兩者週期之比 $T / T_0$ 分別為：",
      en: "A satellite orbits at altitude $h = R_E$ above Earth's surface ($R_E$ = Earth radius). Compared to a low-Earth orbit ($r \\approx R_E$), what are its field strength $g$ and period ratio $T / T_0$?"
    },
    options: [
      { zh: "$g = \\frac{1}{4}g_0$，$T / T_0 = 2\\sqrt{2}$", en: "$g = \\frac{1}{4}g_0$, $T / T_0 = 2\\sqrt{2}$" },
      { zh: "$g = \\frac{1}{2}g_0$，$T / T_0 = 2$", en: "$g = \\frac{1}{2}g_0$, $T / T_0 = 2$" },
      { zh: "$g = \\frac{1}{4}g_0$，$T / T_0 = 4$", en: "$g = \\frac{1}{4}g_0$, $T / T_0 = 4$" },
      { zh: "$g = g_0$，$T / T_0 = \\sqrt{2}$", en: "$g = g_0$, $T / T_0 = \\sqrt{2}$" }
    ],
    ans: 0,
    exp: {
      zh: "軌道半徑 $r = R_E + h = 2R_E$。\n• $g \\propto \\frac{1}{r^2} \\Rightarrow g = \\frac{1}{2^2}g_0 = \\frac{1}{4}g_0$。\n• 由開普勒第三定律 $T^2 \\propto r^3 \\Rightarrow \\frac{T}{T_0} = \\left(\\frac{2R_E}{R_E}\\right)^{3/2} = 2^{3/2} = 2\\sqrt{2}$。",
      en: "Orbital radius $r = R_E + h = 2R_E$.\n• $g \\propto 1/r^2 \\Rightarrow g = g_0 / 4$.\n• By Kepler's 3rd Law $T^2 \\propto r^3 \\Rightarrow T/T_0 = 2^{3/2} = 2\\sqrt{2}$."
    }
  },
  {
    id: "q-b3a-1", book: "book3a",
    q: {
      zh: "一塊凸透鏡把發光物體在屏幕上成清晰的實像。若用一塊不透明黑卡紙遮擋透鏡的上半部分，屏幕上的像會發生什麼變化？",
      en: "A convex lens forms a sharp real image of a luminous object on a screen. If the upper half of the lens is covered with opaque black card, what happens to the image?"
    },
    options: [
      { zh: "像依然完整且大小與位置不變，但亮度減半", en: "Complete image of unchanged size & position, but half as bright" },
      { zh: "像的上半部分消失", en: "Top half of the image disappears" },
      { zh: "像的下半部分消失", en: "Bottom half of the image disappears" },
      { zh: "整個像縮小至原本的一半", en: "Entire image shrinks to half size" }
    ],
    ans: 0,
    exp: {
      zh: "物體上每一點都會向整個透鏡表面發出無數光線，被遮住上半部後，下半部透鏡仍可把所有物點的光線匯聚到原本的像點上，因此像完整無缺、位置與大小不變，只是透過的光能量減半使亮度降低。",
      en: "Every point on the object sends rays through ALL parts of the lens. The uncovered half still focuses rays from every point to the exact same image, only dimmer."
    }
  },
  {
    id: "q-b3b-1", book: "book3b",
    q: {
      zh: "波長為 $600\\text{ nm}$ 的單色雷射垂直射向一塊每毫米有 $400$ 條線的衍射光柵。屏幕上最多可見多少個亮點（主極大）？",
      en: "Monochromatic light ($\\lambda = 600\\text{ nm}$) strikes a $400\\text{ lines mm}^{-1}$ diffraction grating normally. What is the maximum total number of bright maxima visible?"
    },
    options: [
      { zh: "$4$", en: "$4$" },
      { zh: "$7$", en: "$7$" },
      { zh: "$9$", en: "$9$" },
      { zh: "$11$", en: "$11$" }
    ],
    ans: 2,
    exp: {
      zh: "光柵間距 $d = \\frac{10^{-3}\\text{ m}}{400} = 2.5 \\times 10^{-6}\\text{ m}$。\n由 $n_{\\max} \\le \\frac{d}{\\lambda} = \\frac{2.5 \\times 10^{-6}}{600 \\times 10^{-9}} = 4.17$，向下取整得 $n_{\\max} = 4$。\n連同中央第 0 級及左右對稱 $\\pm 1, \\pm 2, \\pm 3, \\pm 4$，總亮點數 $= 2(4) + 1 = 9$！",
      en: "$d = 10^{-3}/400 = 2.5 \\times 10^{-6}\\text{ m}$. $d/\\lambda = 4.17 \\Rightarrow n_{\\max} = 4$ (round down). Total maxima $= 2(4) + 1 = 9$!"
    }
  },
  {
    id: "q-b4-1", book: "book4",
    q: {
      zh: "一條電阻為 $R$ 的均勻銅線被均勻拉長至原來的 $3$ 倍長度（體積與溫度不變）。拉長後銅線的電阻變為多少？",
      en: "A uniform copper wire of resistance $R$ is stretched uniformly to $3$ times its original length (constant volume & temperature). What is its new resistance?"
    },
    options: [
      { zh: "$3R$", en: "$3R$" },
      { zh: "$6R$", en: "$6R$" },
      { zh: "$9R$", en: "$9R$" },
      { zh: "$\\frac{1}{3}R$", en: "$\\frac{1}{3}R$" }
    ],
    ans: 2,
    exp: {
      zh: "由於體積 $V = Al$ 守恆，長度增至 $3l$ 時截面積減至 $\\frac{A}{3}$。由 $R = \\frac{\\rho l}{A}$，新電阻 $R' = \\rho\\frac{3l}{A/3} = 9R$！",
      en: "Since volume $Al$ stays constant, tripling length divides cross-section by $3$. Thus $R' = \\rho(3l)/(A/3) = 9R$!"
    }
  },
  {
    id: "q-b4-2", book: "book4",
    q: {
      zh: "發電廠透過總電阻為 $20\\;\\Omega$ 的輸電電纜輸送 $10\\text{ MW}$ 的電功率。若輸電電壓由 $20\\text{ kV}$ 升壓至 $200\\text{ kV}$，電纜的熱功率損耗減為原來的幾分之幾？",
      en: "A power station transmits $10\\text{ MW}$ through cables of total resistance $20\\;\\Omega$. If transmission voltage is stepped up from $20\\text{ kV}$ to $200\\text{ kV}$, by what fraction is cable power loss reduced?"
    },
    options: [
      { zh: "$\\frac{1}{10}$", en: "$\\frac{1}{10}$" },
      { zh: "$\\frac{1}{100}$", en: "$\\frac{1}{100}$" },
      { zh: "$\\frac{1}{20}$", en: "$\\frac{1}{20}$" },
      { zh: "不變", en: "Unchanged" }
    ],
    ans: 1,
    exp: {
      zh: "由推導公式 $P_{\\text{loss}} = I^2 R_c = \\left(\\frac{P}{V}\\right)^2 R_c \\propto \\frac{1}{V^2}$。電壓升至 $10$ 倍，電流降至 $\\frac{1}{10}$，故熱損耗降至 $\\left(\\frac{1}{10}\\right)^2 = \\frac{1}{100}$！",
      en: "Since $P_{\\text{loss}} = (P/V)^2 R_c \\propto 1/V^2$, raising $V$ by $10\\times$ reduces power loss to $1/100$!"
    }
  },
  {
    id: "q-b5-1", book: "book5",
    q: {
      zh: "實驗室測得本底輻射計數率為 $20\\text{ min}^{-1}$。放入某放射源後，初時 GM 計數器讀數為 $180\\text{ min}^{-1}$，經 $12$ 小時後讀數降至 $40\\text{ min}^{-1}$。求該放射源的半衰期。",
      en: "Background count rate is $20\\text{ min}^{-1}$. With a radioactive source, GM counter reads $180\\text{ min}^{-1}$ initially and $40\\text{ min}^{-1}$ after $12\\text{ hours}$. Find the half-life."
    },
    options: [
      { zh: "$3$ 小時", en: "$3\\text{ hours}$" },
      { zh: "$4$ 小時", en: "$4\\text{ hours}$" },
      { zh: "$6$ 小時", en: "$6\\text{ hours}$" },
      { zh: "$8$ 小時", en: "$8\\text{ hours}$" }
    ],
    ans: 1,
    exp: {
      zh: "必須先扣除本底計數率 $20\\text{ min}^{-1}$！\n• 初始校正計數率 $= 180 - 20 = 160\\text{ min}^{-1}$。\n• $12$ 小時後校正計數率 $= 40 - 20 = 20\\text{ min}^{-1}$。\n• $\\frac{20}{160} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$，經歷了 $3$ 個半衰期，故 $t_{1/2} = \\frac{12}{3} = 4\\text{ 小時}$！",
      en: "Subtract background ($20\\text{ min}^{-1}$) first!\n• Initial corrected $= 160\\text{ min}^{-1}$; after $12\\text{ h}$ corrected $= 20\\text{ min}^{-1}$.\n• $20/160 = 1/8 = (1/2)^3 \\Rightarrow 3$ half-lives $\\Rightarrow t_{1/2} = 12/3 = 4\\text{ hours}$!"
    }
  },
  {
    id: "q-e2-1", book: "booke2",
    q: {
      zh: "【選修二 E2】在光電效應實驗中，保持入射單色光束的**總功率 $P$ 不變**，但把光波頻率 $f$ 提高（仍高於閾頻率 $f_0$）。截止電勢 $V_s$ 與飽和光電流 $I_{\\text{sat}}$（假設量子效率不變）會如何變化？",
      en: "[Elective 2] In a photoelectric experiment, incident light **power $P$ is kept constant** while frequency $f$ is increased (with $f > f_0$). How do stopping potential $V_s$ and saturation photocurrent $I_{\\text{sat}}$ change?"
    },
    options: [
      { zh: "$V_s$ 增大，$I_{\\text{sat}}$ 減小", en: "$V_s$ increases, $I_{\\text{sat}}$ decreases" },
      { zh: "$V_s$ 增大，$I_{\\text{sat}}$ 不變", en: "$V_s$ increases, $I_{\\text{sat}}$ unchanged" },
      { zh: "$V_s$ 不變，$I_{\\text{sat}}$ 增大", en: "$V_s$ unchanged, $I_{\\text{sat}}$ increases" },
      { zh: "$V_s$ 減小，$I_{\\text{sat}}$ 減小", en: "$V_s$ decreases, $I_{\\text{sat}}$ decreases" }
    ],
    ans: 0,
    exp: {
      zh: "• 由 $eV_s = hf - \\phi$，頻率 $f$ 增大令單光子能量增大 → **$V_s$ 增大**。\n• 因總功率 $P = \\left(\\frac{N}{t}\\right)hf$ 保持不變，$f$ 增大導致每秒到達的**光子數目 $\\frac{N}{t} = \\frac{P}{hf}$ 減少** → 每秒逸出光電子數減少 → **$I_{\\text{sat}}$ 減小**！（經典 5** 陷阱！）",
      en: "• By $eV_s = hf - \\phi$, higher $f \\Rightarrow$ higher $V_s$.\n• At constant power $P$, photon rate $N/t = P/(hf)$ **decreases** when $f$ increases → fewer photoelectrons per second → **$I_{\\text{sat}}$ decreases**!"
    }
  },
  {
    id: "q-e2-2", book: "booke2",
    q: {
      zh: "【選修二 E2】在透射電子顯微鏡（TEM）中，若把電子槍的加速電壓 $V$ 增加至原來的 $4$ 倍，電子的德布羅意波長 $\\lambda$ 以及由瑞利判據決定的最小可分辨角 $\\theta$ 分別會如何變化？",
      en: "[Elective 2] In a TEM, if the accelerating voltage $V$ is increased to $4$ times its original value, how do the electron de Broglie wavelength $\\lambda$ and minimum resolvable angle $\\theta$ change?"
    },
    options: [
      { zh: "$\\lambda$ 減半，$\\theta$ 減半（解像能力加倍）", en: "$\\lambda$ halves, $\\theta$ halves (resolving power doubles)" },
      { zh: "$\\lambda$ 減至 $\\frac{1}{4}$，$\\theta$ 減至 $\\frac{1}{4}$", en: "$\\lambda$ becomes $1/4$, $\\theta$ becomes $1/4$" },
      { zh: "$\\lambda$ 加倍，$\\theta$ 加倍", en: "$\\lambda$ doubles, $\\theta$ doubles" },
      { zh: "$\\lambda$ 減半，$\\theta$ 加倍", en: "$\\lambda$ halves, $\\theta$ doubles" }
    ],
    ans: 0,
    exp: {
      zh: "由推導式 $\\lambda = \\frac{h}{\\sqrt{2m_e eV}} \\propto \\frac{1}{\\sqrt{V}}$，$V$ 增至 $4$ 倍令 $\\lambda$ 變為 $\\frac{1}{\\sqrt{4}} = \\frac{1}{2}$。\n再由瑞利判據 $\\theta \\approx \\frac{1.22\\lambda}{d} \\propto \\lambda$，$\\theta$ 同步減半（可分辨細節小一半，解像能力提升 2 倍！）。",
      en: "From $\\lambda = \\frac{h}{\\sqrt{2m_e eV}} \\propto V^{-1/2}$, $4V \\Rightarrow \\frac{1}{2}\\lambda$. By Rayleigh criterion $\\theta \\approx 1.22\\lambda/d$, $\\theta$ also halves (double resolving power!)."
    }
  },
  {
    id: "q-e3-1", book: "booke3",
    q: {
      zh: "【選修三 E3】一部冷氣機輸入電功率為 $1.2\\text{ kW}$，其製冷性能系數（COP）為 $3.5$。該冷氣機運作時每秒向室外排放多少熱能？",
      en: "[Elective 3] An air conditioner draws $1.2\\text{ kW}$ electrical power with a cooling COP of $3.5$. At what rate does it reject heat to the outdoors?"
    },
    options: [
      { zh: "$3.0\\text{ kW}$", en: "$3.0\\text{ kW}$" },
      { zh: "$4.2\\text{ kW}$", en: "$4.2\\text{ kW}$" },
      { zh: "$5.4\\text{ kW}$", en: "$5.4\\text{ kW}$" },
      { zh: "$1.2\\text{ kW}$", en: "$1.2\\text{ kW}$" }
    ],
    ans: 2,
    exp: {
      zh: "從室內抽走熱量的速率（製冷量）：$\\frac{Q_C}{t} = \\text{COP} \\times P = 3.5 \\times 1.2 = 4.2\\text{ kW}$。\n由能量守恆，排往室外的總熱流速率 $\\frac{Q_H}{t} = \\frac{Q_C}{t} + P = 4.2 + 1.2 = 5.4\\text{ kW}$！",
      en: "Cooling capacity $Q_C/t = 3.5 \\times 1.2 = 4.2\\text{ kW}$. By energy conservation, heat rejected outdoors $Q_H/t = Q_C/t + P = 4.2 + 1.2 = 5.4\\text{ kW}$!"
    }
  },
  {
    id: "q-e3-2", book: "booke3",
    q: {
      zh: "【選修三 E3】一座風力發電機葉片長 $30\\text{ m}$，當風速為 $8\\text{ m s}^{-1}$ 時輸出電功率為 $250\\text{ kW}$。假設空氣密度與總效率不變，若風速增至 $12\\text{ m s}^{-1}$，輸出電功率變為多少？",
      en: "[Elective 3] A wind turbine (blade length $30\\text{ m}$) outputs $250\\text{ kW}$ at wind speed $8\\text{ m s}^{-1}$. Assuming constant air density and efficiency, find its output power at $12\\text{ m s}^{-1}$."
    },
    options: [
      { zh: "$375\\text{ kW}$", en: "$375\\text{ kW}$" },
      { zh: "$563\\text{ kW}$", en: "$563\\text{ kW}$" },
      { zh: "$844\\text{ kW}$", en: "$844\\text{ kW}$" },
      { zh: "$1000\\text{ kW}$", en: "$1000\\text{ kW}$" }
    ],
    ans: 2,
    exp: {
      zh: "由風電功率公式 $P = \\frac{1}{2}\\eta\\rho A v^3 \\propto v^3$。\n風速比值 $= \\frac{12}{8} = 1.5$，故新功率 $P' = 250 \\times (1.5)^3 = 250 \\times 3.375 = 843.75 \\approx 844\\text{ kW}$！",
      en: "Since $P = \\frac{1}{2}\\eta\\rho A v^3 \\propto v^3$: $P' = 250 \\times (12/8)^3 = 250 \\times 3.375 \\approx 844\\text{ kW}$!"
    }
  },
  {
    id: "q-e3-3", book: "booke3",
    q: {
      zh: "【選修三 E3】一塊雙層玻璃窗由兩層 $U$ 值各為 $100\\text{ W m}^{-2}\\text{ K}^{-1}$ 的玻璃片，中間夾一層 $U$ 值為 $2.5\\text{ W m}^{-2}\\text{ K}^{-1}$ 的靜止空氣構成。求整塊雙層玻璃的總 $U$ 值。",
      en: "[Elective 3] A double-glazed window has two glass panes (each $U = 100\\text{ W m}^{-2}\\text{ K}^{-1}$) separated by a still air layer ($U = 2.5\\text{ W m}^{-2}\\text{ K}^{-1}$). Find the overall $U$-value."
    },
    options: [
      { zh: "$2.38\\text{ W m}^{-2}\\text{ K}^{-1}$", en: "$2.38\\text{ W m}^{-2}\\text{ K}^{-1}$" },
      { zh: "$202.5\\text{ W m}^{-2}\\text{ K}^{-1}$", en: "$202.5\\text{ W m}^{-2}\\text{ K}^{-1}$" },
      { zh: "$34.2\\text{ W m}^{-2}\\text{ K}^{-1}$", en: "$34.2\\text{ W m}^{-2}\\text{ K}^{-1}$" },
      { zh: "$50.0\\text{ W m}^{-2}\\text{ K}^{-1}$", en: "$50.0\\text{ W m}^{-2}\\text{ K}^{-1}$" }
    ],
    ans: 0,
    exp: {
      zh: "由串聯複合層推導公式 $\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_{\\text{air}}} + \\frac{1}{U_2} = \\frac{1}{100} + \\frac{1}{2.5} + \\frac{1}{100} = 0.01 + 0.40 + 0.01 = 0.42$。\n故 $U_{\\text{total}} = \\frac{1}{0.42} \\approx 2.38\\text{ W m}^{-2}\\text{ K}^{-1}$（可見幾乎全部隔熱效果均來自靜止空氣層！）。",
      en: "$\\frac{1}{U_{\\text{total}}} = \\frac{1}{100} + \\frac{1}{2.5} + \\frac{1}{100} = 0.42 \\Rightarrow U_{\\text{total}} = 2.38\\text{ W m}^{-2}\\text{ K}^{-1}$ (nearly all insulation comes from the still air layer!)."
    }
  }
];
