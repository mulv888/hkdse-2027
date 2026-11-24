/* ==========================================================================
   Book 1: Heat and Gases (Paper 1 Compulsory Part)
   Detailed bilingual HKDSE Physics notes, experiments, traps & examples
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book1",
  paper: "paper1",
  code: "Book 1",
  color: "#ea580c",
  title: { zh: "Book 1：熱和氣體", en: "Book 1: Heat and Gases" },
  subtitle: {
    zh: "溫度、熱與內能 · 熱傳遞過程 · 物態變化 · 氣體定律與分子動理論",
    en: "Temperature, Heat & Internal Energy · Transfer Processes · Change of State · Gas Laws & Kinetic Theory"
  },
  chapters: [
    {
      id: "b1-ch1",
      code: "Ch 1",
      title: { zh: "溫度、熱與內能", en: "Temperature, Heat and Internal Energy" },
      topics: [
        {
          id: "b1-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "溫度、溫標與溫度計校準", en: "Temperature, Temperature Scales & Thermometer Calibration" },
          summary: {
            zh: "**溫度（Temperature）** 是量度物體冷熱程度的物理量，微觀上反映物體內分子的**平均動能（average kinetic energy）**。兩個處於**熱平衡（thermal equilibrium）** 的物體具有相同溫度，彼此之間沒有淨熱傳遞。",
            en: "**Temperature** measures the degree of hotness of a body; microscopically it is a measure of the **average kinetic energy** of its molecules. Two bodies in **thermal equilibrium** have the same temperature and zero net heat flow between them."
          },
          points: [
            {
              zh: "**攝氏溫標（Celsius scale, $^\\circ\\text{C}$）**：以標準大氣壓下純冰熔點（冰點 $0^\\circ\\text{C}$）為下固定點，純水沸點（汽點 $100^\\circ\\text{C}$）為上固定點，中間均分為 100 等份。",
              en: "**Celsius scale ($^\\circ\\text{C}$)**: Lower fixed point = melting point of pure ice ($0^\\circ\\text{C}$); upper fixed point = boiling point of pure water ($100^\\circ\\text{C}$) at standard atmospheric pressure, divided into 100 equal divisions."
            },
            {
              zh: "**開氏溫標 / 絕對溫標（Kelvin / Absolute scale, $\\text{K}$）**：與測溫物質無關，零點為**絕對零度（$0\\text{ K} = -273.15^\\circ\\text{C} \\approx -273^\\circ\\text{C}$）**，此時理想氣體分子動能為零。換算：$T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$，而溫差 $\\Delta T(\\text{K}) = \\Delta\\theta(^\\circ\\text{C})$。",
              en: "**Kelvin (Absolute) scale ($\\text{K}$)**: Independent of thermometric substance. Absolute zero ($0\\text{ K} = -273^\\circ\\text{C}$) is where ideal gas molecules have zero KE. Conversion: $T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273$; temperature change $\\Delta T(\\text{K}) = \\Delta\\theta(^\\circ\\text{C})$."
            },
            {
              zh: "**線性校準公式**：若測溫性質 $X$（如液柱長度 $l$、電阻 $R$、氣體壓強 $p$）隨溫度線性變化，則未知溫度 $\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100^\\circ\\text{C}$。",
              en: "**Linear calibration**: If thermometric property $X$ (liquid column length $l$, resistance $R$, pressure $p$) varies linearly with temperature, $\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100^\\circ\\text{C}$."
            },
            {
              zh: "**溫度計特性比較**：水銀/酒精玻管溫度計（靈敏度靠**幼細毛細管**及**大玻璃泡**提升；反應速度靠**薄玻璃壁**提升）；熱敏電阻溫度計（電阻隨溫度非線性下降，反應快、適合數據記錄儀）；紅外線溫度計（非接觸式，量度紅外輻射強度）。",
              en: "**Thermometer types**: Liquid-in-glass (higher sensitivity via **narrower capillary tube** & **larger bulb**; faster response via **thin glass wall**); Thermistor (non-linear $R$-$T$ drop, fast response, data-logger compatible); Infra-red (non-contact, detects IR radiation intensity)."
            }
          ],
          formulaIds: ["f-b1-kelvin", "f-b1-calib"],
          trap: {
            zh: "寫開氏溫度單位時，只能寫 $\\text{K}$，**絕不可寫 $^\\circ\\text{K}$**！另外，$20^\\circ\\text{C}$ 並非 $10^\\circ\\text{C}$ 的兩倍溫度——必須先轉為開氏溫標（$293\\text{ K}$ vs $283\\text{ K}$）才能作倍數比較！",
            en: "Never write $^\\circ\\text{K}$ — Kelvin is simply $\\text{K}$! Also, $20^\\circ\\text{C}$ is NOT twice as hot as $10^\\circ\\text{C}$ — always convert to Kelvin ($293\\text{ K}$ vs $283\\text{ K}$) before taking ratios!"
          }
        },
        {
          id: "b1-1-2",
          code: "1.2",
          highYield: true,
          title: { zh: "內能、熱與功、熱容量與比熱容量", en: "Internal Energy, Heat, Work, Heat Capacity & Specific Heat Capacity" },
          summary: {
            zh: "**內能（Internal Energy, $U$）** 是物體內所有分子的**微觀分子動能（molecular KE）** 與**微觀分子勢能（molecular PE）** 的總和。**熱（Heat, $Q$）** 則是因溫差而由高溫物體傳遞至低溫物體的能量（過程量，不可說「物體含有多少熱」）。",
            en: "**Internal energy ($U$)** is the sum of the microscopic **molecular kinetic energy** and **molecular potential energy** of all molecules in a body. **Heat ($Q$)** is the energy transferred from a hotter body to a colder body due to temperature difference (a transfer process, NOT stored 'heat content')."
          },
          points: [
            {
              zh: "**改變內能的兩種途徑**：(1) **熱傳遞（Heating）**；(2) **作功（Doing work）**，例如摩擦生熱、壓縮氣體或以電流加熱。對於理想氣體，分子間沒有作用力，故分子勢能為零，內能只取決於溫度及分子數目。",
              en: "**Two ways to change internal energy**: (1) **Heating**; (2) **Doing work** (friction, compressing gas, electrical work). For an ideal gas, intermolecular forces are zero, so molecular PE = 0 and $U$ depends only on temperature and number of molecules."
            },
            {
              zh: "**熱容量（Heat Capacity, $C$）**：使整件物體溫度上升 $1^\\circ\\text{C}$（或 $1\\text{ K}$）所需能量，$C = \\frac{E}{\\Delta T} = mc$，單位 $\\text{J }^\\circ\\text{C}^{-1}$ 或 $\\text{J K}^{-1}$。取決於**物質種類與質量**。",
              en: "**Heat Capacity ($C$)**: Energy required to raise the temperature of the whole object by $1^\\circ\\text{C}$ (or $1\\text{ K}$): $C = \\frac{E}{\\Delta T} = mc$ (unit: $\\text{J }^\\circ\\text{C}^{-1}$ or $\\text{J K}^{-1}$). Depends on **material and mass**."
            },
            {
              zh: "**比熱容量（Specific Heat Capacity, $c$）**：使 **$1\\text{ kg}$** 物質溫度上升 $1^\\circ\\text{C}$ 所需能量，$E = mc\\Delta T$，單位 $\\text{J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$。只取決於**物質種類與物態**（例如水 $4200$，冰 $2100$，銅 $385$）。",
              en: "**Specific Heat Capacity ($c$)**: Energy required to raise the temperature of **$1\\text{ kg}$** of a substance by $1^\\circ\\text{C}$: $E = mc\\Delta T$ (unit: $\\text{J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$). Depends only on **material & state** (water $4200$, ice $2100$, copper $385$)."
            },
            {
              zh: "**水的高比熱容量（$4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$）應用**：吸收大量熱能時溫升細小 → 適合用作汽車引擎冷卻劑、調節沿海氣候（海陸風：日間海風吹向陸地，夜間陸風吹向海洋）、維持人體體溫穩定。",
              en: "**High specific heat capacity of water ($4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$)**: Absorbs/releases large energy with small $\\Delta T$ → ideal engine coolant, moderates coastal climate (daytime sea breeze, nighttime land breeze), stabilizes human body temperature."
            },
            {
              zh: "**混合問題能量守恆（Method of Mixtures）**：假設沒有熱量散失至周圍環境，高溫物體放出的熱量 = 低溫物體吸收的熱量：$m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2)$。若是流動液體（如即熱式熱水器），用功率式 $P = \\frac{m}{t} c \\Delta T$。",
              en: "**Method of Mixtures**: Assuming no heat loss to surroundings, heat lost by hot body = heat gained by cold body: $m_1 c_1 (T_1 - T_f) = m_2 c_2 (T_f - T_2)$. For flowing fluid (instant water heater), use power form $P = \\frac{m}{t} c \\Delta T$."
            },
            {
              zh: "**量度比熱容量實驗注意事項（Paper 1B 必考）**：(1) **發熱器完全浸入**液體或金屬塊孔內（並加數滴油確保良好熱接觸）；(2) 使用**發泡膠杯 / 隔熱棉包裏及加蓋**減少傳導、對流、輻射與蒸發散熱；(3) 測液體時**輕輕攪拌**確保溫度均勻；(4) 關閉電源後**等待並記錄最高溫度**（因發熱器餘熱仍會傳遞給金屬塊/水）。若忽略散熱，實驗測得的 $c_{\\text{exp}} = \\frac{E_{\\text{supplied}}}{m\\Delta T}$ 會**偏大**（因實測 $\\Delta T$ 偏小）。",
              en: "**Measuring $c$ Experiment Precautions (Paper 1B High-Yield)**: (1) **Fully immerse heater** (add a few drops of oil in metal block hole for good thermal contact); (2) Use **polystyrene cup / cotton wool lagging + lid** to reduce conduction, convection, radiation & evaporation losses; (3) **Stir gently** for uniform temperature in liquids; (4) **Record highest temperature reached after switching off** (residual heat still flows from heater). Heat loss causes smaller $\\Delta T$, making measured $c_{\\text{exp}}$ **larger than true value**."
            }
          ],
          formulaIds: ["f-b1-shc", "f-b1-hc", "f-b1-power-flow", "f-b1-mix"],
          diagramIds: ["diag-specific-heat-exp"],
          example: {
            zh: {
              q: "一部功率為 $2.5\\text{ kW}$ 的即熱式電熱水器將 $20^\\circ\\text{C}$ 的冷水加熱至 $45^\\circ\\text{C}$。若效率為 $84\\%$，求每分鐘流出的熱水質量。（$c_{\\text{water}} = 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$）",
              sol: "有用功率 $P_{\\text{useful}} = 0.84 \\times 2500 = 2100\\text{ W}$。\n由 $P_{\\text{useful}} = \\frac{m}{t} c \\Delta T$：\n$$2100 = \\frac{m}{60} \\times 4200 \\times (45 - 20)$$\n$$m = \\frac{2100 \\times 60}{4200 \\times 25} = 1.20\\text{ kg}$$"
            },
            en: {
              q: "A $2.5\\text{ kW}$ instant water heater heats water from $20^\\circ\\text{C}$ to $45^\\circ\\text{C}$ with $84\\%$ efficiency. Find the mass of hot water flowing out per minute. ($c_w = 4200\\text{ J kg}^{-1}\\text{ }^\\circ\\text{C}^{-1}$)",
              sol: "Useful power $P_{\\text{useful}} = 0.84 \\times 2500 = 2100\\text{ W}$.\nUsing $P_{\\text{useful}} = \\frac{m}{t} c \\Delta T$:\n$$2100 = \\frac{m}{60} \\times 4200 \\times (45 - 20)$$\n$$m = \\frac{2100 \\times 60}{4200 \\times 25} = 1.20\\text{ kg}$$"
            }
          },
          exam: {
            zh: "得分關鍵詞：不要寫「散熱使 $c$ 偏大」就停筆，必須寫清楚「部分電熱器提供的能量散失至周圍環境，因此實際吸收的能量小於 $Pt$（或溫升 $\\Delta T$ 較理論值小），代入 $c = \\frac{Pt}{m\\Delta T}$ 導致測得 $c$ 偏大」。",
            en: "Marking Keywords: Explicitly state: 'Some energy supplied by the heater is lost to the surroundings, so $\\Delta T$ is smaller than expected (or energy absorbed $< Pt$); hence $c = \\frac{Pt}{m\\Delta T}$ gives an overestimated value.'"
          }
        }
      ]
    },
    {
      id: "b1-ch2",
      code: "Ch 2",
      title: { zh: "熱傳遞過程", en: "Transfer Processes" },
      topics: [
        {
          id: "b1-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "傳導、對流與輻射（微觀機制與日常應用）", en: "Conduction, Convection and Radiation (Mechanisms & Applications)" },
          summary: {
            zh: "熱量透過三種基本機制由高溫處傳向低溫處：**傳導（Conduction）** 靠粒子振動碰撞及自由電子；**對流（Convection）** 靠流體受熱密度變化而產生宏觀流動；**輻射（Radiation）** 靠電磁波（主要是紅外線），無需介質即可在真空中傳播。",
            en: "Heat transfers via three mechanisms: **Conduction** (molecular vibrations & free electrons), **Convection** (macroscopic fluid movement due to density changes), and **Radiation** (electromagnetic waves, mainly infrared, requiring no medium)."
          },
          table: {
            headers: [
              { zh: "比較項目", en: "Aspect" },
              { zh: "傳導 Conduction", en: "Conduction" },
              { zh: "對流 Convection", en: "Convection" },
              { zh: "輻射 Radiation", en: "Radiation" }
            ],
            rows: [
              [
                { zh: "所需介質", en: "Medium Required" },
                { zh: "固體最佳（金屬 > 非金屬 > 液體 > 氣體），不能在真空進行", en: "Best in solids (metals > non-metals > liquids > gases); not in vacuum" },
                { zh: "只限流體（液體和氣體），不能在固體或真空進行", en: "Fluids only (liquids & gases); not in solids or vacuum" },
                { zh: "**無需介質**，可在真空中以光速 $c$ 傳播", en: "**No medium required**; travels at speed of light $c$ in vacuum" }
              ],
              [
                { zh: "微觀機制", en: "Microscopic Mechanism" },
                { zh: "高溫端原子劇烈振動碰撞鄰近原子；金屬更有大量**自由電子（free electrons）** 高速擴散碰撞傳遞動能，故導熱快", en: "Vigorous atomic vibrations collide with neighbours; metals also have **free electrons** diffusing rapidly to transfer KE" },
                { zh: "流體底部受熱膨脹 → **密度減小而上升**；冷流體密度較大下沉補充，形成**對流（convection current）**", en: "Heated fluid expands → **density decreases & rises**; cooler denser fluid sinks to replace it, forming a **convection current**" },
                { zh: "所有溫度高於 $0\\text{ K}$ 的物體均會發射電磁輻射（紅外線），溫度越高、表面積越大，輻射越強", en: "All bodies above $0\\text{ K}$ emit EM radiation (IR); stronger at higher temperature & larger surface area" }
              ],
              [
                { zh: "關鍵影響因素 / 應用", en: "Key Factors / Applications" },
                { zh: "空氣是極佳隔熱體（羽絨、發泡膠、雙層玻璃困住靜止空氣抑制傳導與對流）；金屬摸上去「較冷」是因導熱快迅速帶走手部熱量", en: "Trapped still air is an excellent insulator (down jacket, foam, double glazing); metal feels colder because it conducts heat rapidly away from hand" },
                { zh: "冷氣機安裝於高處（冷空氣下沉）；電熱水壺發熱線位於底部（熱水上升）；海陸風", en: "Air conditioners mounted high (cool air sinks); kettle heater at bottom (hot water rises); sea & land breezes" },
                { zh: "**啞黑色粗糙表面**是良好吸收體及良好輻射體；**光亮銀色表面**是不良吸收體及不良輻射體（良好反射體）。溫室效應（短波入射，長波紅外線被玻璃/溫室氣體困住）", en: "**Dull black rough surfaces** are good absorbers & emitters; **shiny silvery surfaces** are poor absorbers & emitters (good reflectors). Greenhouse effect (short-wave enters, long-wave IR trapped)" }
              ]
            ]
          },
          points: [
            {
              zh: "**真空保溫瓶（Vacuum Flask）設計全解**：(1) **真空夾層**阻止傳導和對流；(2) **雙層鍍銀玻璃壁**大幅減少輻射；(3) **塑膠/軟木塞及膠底座**減少傳導，並加蓋阻斷熱空氣對流與液體蒸發。",
              en: "**Vacuum Flask Design**: (1) **Vacuum layer** prevents conduction & convection; (2) **Silvery glass surfaces** minimize radiation; (3) **Plastic/cork stopper & support** reduce conduction, while the lid stops convection & evaporation."
            }
          ],
          trap: {
            zh: "切勿寫「熱空氣較輕所以上升」！考評局標準答案必須用**密度（density）**：受熱膨脹 → 體積增加而質量不變 → **密度減小** → 上升。",
            en: "Never say 'hot air is lighter so it rises'! HKEAA requires **density**: heated fluid expands → volume increases while mass stays constant → **density decreases** → rises."
          }
        }
      ]
    },
    {
      id: "b1-ch3",
      code: "Ch 3",
      title: { zh: "物態變化與潛熱", en: "Change of State and Latent Heat" },
      topics: [
        {
          id: "b1-3-1",
          code: "3.1",
          highYield: true,
          title: { zh: "熔解、沸騰、比潛熱與加熱/冷卻曲線", en: "Melting, Boiling, Specific Latent Heat & Heating/Cooling Curves" },
          summary: {
            zh: "物質在熔點或沸點發生**物態變化（change of state）** 時，溫度維持不變。此時吸收的能量稱為**潛熱（Latent Heat）**，全數用於克服分子間吸引力、增加**分子勢能（molecular PE）**，而**分子平均動能（molecular KE）** 不變。",
            en: "During a **change of state** at the melting/boiling point, temperature remains constant. Energy absorbed is **latent heat**, used solely to overcome intermolecular attractions and increase **molecular PE**, while **average molecular KE** remains unchanged."
          },
          points: [
            {
              zh: "**比熔解潛熱（Specific latent heat of fusion, $l_f$）**：$1\\text{ kg}$ 物質於熔點由固態完全變為液態所需能量，$E = l_f \\Delta m$（水：$l_f = 3.34 \\times 10^5\\text{ J kg}^{-1}$）。",
              en: "**Specific latent heat of fusion ($l_f$)**: Energy required to change $1\\text{ kg}$ of solid to liquid at its melting point: $E = l_f \\Delta m$ (water: $3.34 \\times 10^5\\text{ J kg}^{-1}$)."
            },
            {
              zh: "**比汽化潛熱（Specific latent heat of vaporization, $l_v$）**：$1\\text{ kg}$ 物質於沸點由液態完全變為氣態所需能量，$E = l_v \\Delta m$（水：$l_v = 2.26 \\times 10^6\\text{ J kg}^{-1}$）。**為何 $l_v \\gg l_f$？** 因為汽化時分子必須**完全拉開至極遠距離**克服分子引力，且氣體體積大幅膨脹需對大氣壓作功；熔解時分子間距僅微增。亦因此 $100^\\circ\\text{C}$ 蒸氣燙傷遠比 $100^\\circ\\text{C}$ 沸水嚴重（凝結釋出龐大 $l_v$）。",
              en: "**Specific latent heat of vaporization ($l_v$)**: Energy to convert $1\\text{ kg}$ liquid to gas at boiling point: $E = l_v \\Delta m$ (water: $2.26 \\times 10^6\\text{ J kg}^{-1}$). **Why $l_v \\gg l_f$?** Vaporization completely separates molecules against intermolecular forces and does expansion work against atmospheric pressure. Thus $100^\\circ\\text{C}$ steam causes far worse scalds than $100^\\circ\\text{C}$ water (releases huge $l_v$ upon condensing)."
            },
            {
              zh: "**加熱曲線（$T$-$t$ 圖）分析（恆定功率 $P$）**：斜段斜率 $= \\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc}$，因此比熱容量 $c$ 越大，斜線越平緩（冰 $c=2100$ 比水 $c=4200$ 斜率大一倍！）；平段長度 $\\Delta t = \\frac{ml}{P}$，故汽化平段遠長於熔解平段。",
              en: "**Heating Curve ($T$-$t$, constant power $P$)**: Slope of slanted segments $= \\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc}$ (smaller $c$ → steeper slope; ice is twice as steep as water!). Horizontal plateau duration $\\Delta t = \\frac{ml}{P}$ (boiling plateau much longer than melting plateau)."
            },
            {
              zh: "**量度冰的 $l_f$ 對照實驗（Control Setup）**：因室溫高於 $0^\\circ\\text{C}$，周圍環境亦會令冰熔化。必須設置**完全相同的對照裝置**（內有未接通電源的相同發熱器及碎冰），則僅由電熱器熔化的冰質量為 $\\Delta m = m_{\\text{exp}} - m_{\\text{control}}$，從而計算 $l_f = \\frac{E}{m_{\\text{exp}} - m_{\\text{control}}}$。並必須使用**正在熔化的碎冰（$0^\\circ\\text{C}$）**（若用 $-10^\\circ\\text{C}$ 冰，部分電能會先用來升溫令測得 $l_f$ 偏大）。",
              en: "**Measuring $l_f$ of Ice (Control Setup)**: Since room temp $> 0^\\circ\\text{C}$, ambient heat melts ice. An identical **control apparatus** (heater switched off) measures ambient melt $m_{\\text{ctrl}}$, so electric melt is $m_{\\text{exp}} - m_{\\text{ctrl}}$ and $l_f = \\frac{E}{m_{\\text{exp}} - m_{\\text{ctrl}}}$. Use **melting crushed ice at $0^\\circ\\text{C}$** (if ice is below $0^\\circ\\text{C}$, extra energy heats it first → measured $l_f$ overestimated)."
            },
            {
              zh: "**量度水的 $l_v$ 實驗陷阱**：用電子秤直接量度沸水減少的質量 $\\Delta m$，切勿加蓋（否則蒸氣凝結滴回燒杯內，令測得 $\\Delta m$ 偏小 → $l_v$ 偏大！）；若水花濺出則令 $\\Delta m$ 偏大 → $l_v$ 偏小。",
              en: "**Measuring $l_v$ of Water Traps**: Do NOT put a lid on the beaker (steam condenses and drips back → smaller $\\Delta m$ → overestimated $l_v$!); water splashing out causes larger $\\Delta m$ → underestimated $l_v$."
            }
          ],
          formulaIds: ["f-b1-lh", "f-b1-curve-slope"],
          diagramIds: ["diag-heating-curve"],
          table: {
            headers: [
              { zh: "比較項目", en: "Comparison" },
              { zh: "沸騰 Boiling", en: "Boiling" },
              { zh: "蒸發 Evaporation", en: "Evaporation" }
            ],
            rows: [
              [{ zh: "發生溫度", en: "Temperature" }, { zh: "只在特定沸點發生", en: "Only at the boiling point" }, { zh: "在任何低於沸點的溫度皆可發生", en: "Occurs at any temperature below b.p." }],
              [{ zh: "發生位置", en: "Location" }, { zh: "在液體內部各處發生（有氣泡）", en: "Throughout the liquid (bubbles form)" }, { zh: "只在液體表面發生（無氣泡）", en: "Only at the liquid surface (no bubbles)" }],
              [{ zh: "熱源與致冷效應", en: "Energy & Cooling" }, { zh: "須外部持續供熱，溫度維持於沸點", en: "Requires external heat source; $T$ stays at b.p." }, { zh: "高動能表面分子逃逸，留下分子平均動能下降，故產生**蒸發致冷（cooling effect）**", en: "Faster surface molecules escape, lowering average KE of remaining molecules → **cooling effect**" }],
              [{ zh: "加速因素", en: "Rate Factors" }, { zh: "取決於加熱功率", en: "Depends on heating power" }, { zh: "高溫、大表面積、低濕度、強風（吹走表面蒸氣減少凝結回流）", en: "Higher $T$, larger surface area, lower humidity, stronger air flow" }]
            ]
          }
        }
      ]
    },
    {
      id: "b1-ch4",
      code: "Ch 4",
      title: { zh: "氣體定律與分子動理論", en: "Gas Laws and Kinetic Theory" },
      topics: [
        {
          id: "b1-4-1",
          code: "4.1",
          highYield: true,
          title: { zh: "三大氣體定律與理想氣體狀態方程", en: "Gas Laws & Ideal Gas Equation of State" },
          summary: {
            zh: "固定質量的理想氣體，其壓強 $p$、體積 $V$ 與**絕對溫度 $T$（開氏 $\\text{K}$）** 滿足狀態方程 $pV = nRT = NkT$，亦即 $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$。",
            en: "For a fixed mass of ideal gas, pressure $p$, volume $V$, and **absolute temperature $T$ (in Kelvin)** obey the ideal gas equation $pV = nRT = NkT$, giving $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$."
          },
          points: [
            {
              zh: "**波義耳定律（Boyle's Law，恆溫 $T$）**：$p \\propto \\frac{1}{V}$ 或 $p_1 V_1 = p_2 V_2$。$p$-$V$ 圖為雙曲線（等溫線，越遠離原點溫度越高）；$p$-$1/V$ 圖為**穿過原點的直線**。",
              en: "**Boyle's Law (constant $T$)**: $p \\propto \\frac{1}{V}$ or $p_1 V_1 = p_2 V_2$. $p$-$V$ graph is a hyperbola (higher isotherm = higher $T$); $p$ vs $1/V$ is a **straight line through the origin**."
            },
            {
              zh: "**查理定律（Charles's Law，恆壓 $p$）**：$V \\propto T$ 或 $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$。$V$-$\\theta(^\\circ\\text{C})$ 直線向負方向延長與橫軸相交於 **$-273^\\circ\\text{C}$（絕對零度）**；$V$-$T(\\text{K})$ 為穿過原點的直線。",
              en: "**Charles's Law (constant $p$)**: $V \\propto T$ or $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$. $V$-$\\theta(^\\circ\\text{C})$ extrapolates to **$-273^\\circ\\text{C}$** on the temperature axis; $V$-$T(\\text{K})$ passes through the origin."
            },
            {
              zh: "**壓強定律（Pressure Law / Gay-Lussac's Law，恆容 $V$）**：$p \\propto T$ 或 $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$。$p$-$\\theta(^\\circ\\text{C})$ 直線同樣外推至 $-273^\\circ\\text{C}$。",
              en: "**Pressure Law (constant $V$)**: $p \\propto T$ or $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$. $p$-$\\theta(^\\circ\\text{C})$ also extrapolates to $-273^\\circ\\text{C}$."
            },
            {
              zh: "**兩個容器連通 / 氣體混合問題（高頻題型）**：利用**總摩爾數守恆** $n_{\\text{total}} = n_1 + n_2$，代入 $n = \\frac{pV}{RT}$ 得 $\\frac{p_f V_f}{T_f} = \\frac{p_1 V_1}{T_1} + \\frac{p_2 V_2}{T_2}$。若無外部熱傳遞及無作功，由總內能守恆 $U_{\\text{total}} = \\frac{3}{2}nRT$ 可求最終混合溫度 $T_f$！",
              en: "**Connecting Two Vessels / Mixing Gases (High-Yield)**: Use **conservation of moles** $n_{\\text{total}} = n_1 + n_2 \\Rightarrow \\frac{p_f V_f}{T_f} = \\frac{p_1 V_1}{T_1} + \\frac{p_2 V_2}{T_2}$. If thermally insulated with no work done, conservation of total internal energy $U = \\frac{3}{2}nRT = \\frac{3}{2}pV$ also holds!"
            },
            {
              zh: "**真實氣體逼近理想氣體的條件**：**低壓（low pressure）** 與 **高溫（high temperature）**（此時分子間距極大，分子自身體積及分子間引力皆可忽略）。",
              en: "**When Real Gas Approximates Ideal Gas**: At **low pressure** and **high temperature** (large intermolecular spacing → molecular volume and intermolecular attractions become negligible)."
            }
          ],
          formulaIds: ["f-b1-ideal", "f-b1-combined", "f-b1-boyle", "f-b1-mix-gas"],
          diagramIds: ["diag-gas-laws"],
          trap: {
            zh: "運用氣體定律計算時，**溫度必須轉成開氏 $T(\\text{K})$**！而計算 $pV = nRT$ 時，壓強必須用 $\\text{Pa}$、體積必須用 $\\text{m}^3$（切記 $1\\text{ L} = 10^{-3}\\text{ m}^3$，$1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$）。",
            en: "ALWAYS convert temperature to **Kelvin ($\\text{K}$)**! In $pV = nRT$, use SI units: $p$ in $\\text{Pa}$ and $V$ in $\\text{m}^3$ ($1\\text{ L} = 10^{-3}\\text{ m}^3$, $1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$)."
          }
        },
        {
          id: "b1-4-2",
          code: "4.2",
          highYield: true,
          title: { zh: "分子動理論（Kinetic Theory）與均方根速率", en: "Kinetic Theory of Gases & Root-Mean-Square Speed" },
          summary: {
            zh: "分子動理論由微觀分子不斷隨機碰撞容器壁推導出宏觀壓強方程 $pV = \\frac{1}{3}Nm\\overline{c^2}$，並與理想氣體方程結合得出單個分子平均動能 $E_K = \\frac{3RT}{2N_A} = \\frac{3}{2}kT$。",
            en: "Kinetic theory derives macroscopic gas pressure from random elastic molecular collisions with walls: $pV = \\frac{1}{3}Nm\\overline{c^2}$. Combining with $pV = nRT$ yields average molecular KE: $E_K = \\frac{3RT}{2N_A} = \\frac{3}{2}kT$."
          },
          points: [
            {
              zh: "**理想氣體動理論五大基本假設（DSE 常考默寫）**：(1) 氣體由大量不斷作無規律運動的微小分子組成；(2) **分子自身體積**遠小於容器體積（可忽略）；(3) 除碰撞瞬間外，**分子間沒有相互作用力**（故分子勢能為零）；(4) 分子之間及分子與器壁的所有碰撞皆為**完全彈性碰撞（perfectly elastic）**；(5) 碰撞持續時間遠短於兩次碰撞之間的時間間隔。",
              en: "**Five Assumptions of Ideal Gas Kinetic Theory (Often tested!)**: (1) Large number of tiny molecules in continuous random motion; (2) **Volume of molecules** is negligible compared to container volume; (3) **No intermolecular forces** except during collisions (molecular PE = 0); (4) All collisions are **perfectly elastic**; (5) Duration of collision is negligible compared to time between collisions."
            },
            {
              zh: "**布朗運動（Brownian Motion）**：顯微鏡下觀察到空氣中煙粒作無規律的鋸齒狀運動，原因是**更微細、肉眼不可見的空氣分子**從各方向不均勻地高速撞擊煙粒，直接提供分子作無規律熱運動的證據。",
              en: "**Brownian Motion**: Smoke particles viewed under a microscope move in jerky, random paths because **much smaller, invisible air molecules** bombard them unevenly from all directions — direct evidence of random molecular motion."
            },
            {
              zh: "**微觀解釋氣體定律（必背滿分答題模板）**：\n• **波義耳定律（恆 $T$，$V\\downarrow \\Rightarrow p\\uparrow$）**：溫度不變，分子平均動能及均方根速率 $c_{\\text{rms}}$ 不變，每次碰撞傳遞動量不變；但體積縮小使分子數密度增大，分子**撞擊單位面積器壁的頻率增加**，故壓強增大。\n• **壓強定律（恆 $V$，$T\\uparrow \\Rightarrow p\\uparrow$）**：溫度上升，分子平均動能及 $c_{\\text{rms}}$ 增大 → (i) 分子以較高速率撞壁，**每次碰撞動量變化更大**；(ii) 分子往返時間縮短，**撞壁頻率增加** → 單位時間內作用於單位面積的平均力增大，壓強上升。",
              en: "**Microscopic Explanations (Full-Mark HKEAA Template)**:\n• **Boyle's Law (const $T$, $V\\downarrow \\Rightarrow p\\uparrow$)**: Same $T$ → same average KE & $c_{\\text{rms}}$ → same momentum change per collision; smaller $V$ → more molecules per unit volume → **higher frequency of collisions per unit area** → higher $p$.\n• **Pressure Law (const $V$, $T\\uparrow \\Rightarrow p\\uparrow$)**: Higher $T$ → larger average KE & $c_{\\text{rms}}$ → (i) **larger momentum change per collision** AND (ii) **higher collision frequency** with walls → greater average force per unit area → higher $p$."
            },
            {
              zh: "**均方根速率 $c_{\\text{rms}}$ 與摩爾質量 $M$**：由 $\\frac{1}{2}m\\overline{c^2} = \\frac{3RT}{2N_A}$ 可推導 $c_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3p}{\\rho}}$。**同一溫度下，不同氣體分子的平均動能完全相同**，但質量較輕的氣體（如 $\\text{H}_2$、$\\text{He}$）有**更高的 $c_{\\text{rms}}$**！",
              en: "**RMS Speed $c_{\\text{rms}}$ & Molar Mass $M$**: $c_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3p}{\\rho}}$. At the **same temperature, ALL ideal gases have the exact same average molecular KE**, while lighter gases (smaller $M$) have **higher $c_{\\text{rms}}$**!"
            }
          ],
          formulaIds: ["f-b1-kt", "f-b1-ke", "f-b1-kt-deriv", "f-b1-crms", "f-b1-internal-u"],
          diagramIds: ["diag-kinetic-box"],
          tip: {
            zh: "計算理想氣體的**總內能 $U$** 時，記住三條等價捷徑：$U = N \\cdot \\frac{3RT}{2N_A} = \\frac{3}{2}nRT = \\frac{3}{2}pV$！考題若直接給了 $p$ 與 $V$，直接用 $\\frac{3}{2}pV$ 秒殺！",
            en: "Total internal energy of a monatomic ideal gas has three super-handy forms: $U = N E_K = \\frac{3}{2}nRT = \\frac{3}{2}pV$! If $p$ and $V$ are given, $\\frac{3}{2}pV$ solves it instantly!"
          }
        }
      ]
    }
  ]
});
