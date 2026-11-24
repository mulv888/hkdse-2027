/* ==========================================================================
   Book E3: Energy and Use of Energy (Paper 2 Elective 3)
   Ultra-detailed bilingual HKDSE Physics Elective 3 notes
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "booke3",
  paper: "elective3",
  code: "Book E3",
  color: "#059669",
  title: { zh: "Book E3：能量和能源的使用（卷二 選修三）", en: "Book E3: Energy and Use of Energy (Paper 2 Elective 3)" },
  subtitle: {
    zh: "家居用電、照明光度學、無火煮食與冷氣機 COP · 建築物傳熱 U 值與 OTTV · 電動車 · 核能、太陽能、風能與水力發電",
    en: "Domestic Electricity, Lighting, Induction Cooker & Air-Con COP · Building U-Value & OTTV · EVs · Nuclear, Solar, Wind & Hydro Power"
  },
  chapters: [
    {
      id: "be3-ch1",
      code: "Ch 1",
      title: { zh: "家居用電：照明、無火煮食與空調製冷", en: "Electricity at Home: Lighting, Cooking & Air Conditioning" },
      topics: [
        {
          id: "be3-1-1",
          code: "E3.1",
          highYield: true,
          title: { zh: "照明物理學：光通量、照度、平方反比/餘弦定律與發光效率", en: "Lighting: Luminous Flux, Illuminance, Inverse-Square/Cosine Law & Luminous Efficacy" },
          summary: {
            zh: "**光通量（Luminous Flux, $\\Phi$，單位流明 $\\text{lm}$）** 量度人眼對光源所發可見光的總視覺亮度；**照度（Illuminance, $E$，單位勒克斯 $\\text{lx} = \\text{lm m}^{-2}$）** 是單位受照面積接收的光通量。點光源照度滿足 **$E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$**。",
            en: "**Luminous flux ($\\Phi$, in lumens $\\text{lm}$)** measures perceived total visible light output weighted by human eye sensitivity. **Illuminance ($E$, in lux $\\text{lx} = \\text{lm m}^{-2}$)** is flux per unit area. For an isotropic point source: **$E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$**."
          },
          points: [
            {
              zh: "**人眼視感度曲線（Photopic Eye Response）**：人眼對波長約 **$555\\text{ nm}$ 的黃綠光最敏感**，對紅光與紫光敏感度低，對紅外線/紫外線為零！因此即使總輻射功率相同，黃綠光的流明數遠高於紅光或藍光。",
              en: "**Human Eye Sensitivity**: Most sensitive to **yellow-green light at ~$555\\text{ nm}$**; zero sensitivity to IR/UV. Hence two lamps with equal radiant power can have very different luminous fluxes!"
            },
            {
              zh: "**平方反比定律與朗伯餘弦定律（必考計算！）**：對於向各方向均勻發光的點光源，距光源 $r$、法線與光線夾角為 $\\theta$ 的平面上照度為 $E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$。若光源在桌面上方垂直高度 $h$、水平距離 $x$ 處，因 $r = \\sqrt{h^2 + x^2}$ 且 $\\cos\\theta = \\frac{h}{r}$，可得常用推導式：**$E = \\frac{\\Phi h}{4\\pi (h^2 + x^2)^{3/2}}$**！",
              en: "**Inverse-Square & Lambert's Cosine Law**: On a surface at distance $r$ tilted at angle $\\theta$ to the rays, $E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$. For a lamp at vertical height $h$ and horizontal offset $x$, since $\\cos\\theta = h/r$: **$E = \\frac{\\Phi h}{4\\pi(h^2 + x^2)^{3/2}}$**!"
            },
            {
              zh: "**發光效能（Luminous Efficacy）**：$\\text{發光效能} = \\frac{\\Phi}{P}$（單位 **$\\text{lm W}^{-1}$**）。\n• **白熾燈泡（Incandescent）**：電流加熱鎢絲至高溫發光，約 $90\\%$ 能量浪費為紅外線熱能；效能最低（$\\sim 10 - 15\\text{ lm W}^{-1}$），壽命短（$\\sim 1000\\text{ h}$）。\n• **慳電膽 / 螢光燈（CFL / Gas Discharge）**：氣體放電產生紫外線，激發管壁螢光粉發出可見光；效能較高（$\\sim 50 - 70\\text{ lm W}^{-1}$），含微量水銀須妥善回收。\n• **發光二極管（LED）**：半導體電子與電洞復合直接發光，發熱量極低；效能最高（$\\sim 80 - 150+\\text{ lm W}^{-1}$）、壽命最長（$> 25\\,000\\text{ h}$）、不含水銀且即時全亮！",
              en: "**Luminous Efficacy ($\\Phi/P$ in $\\text{lm W}^{-1}$)**:\n• **Incandescent**: Hot tungsten filament wastes ~90% as IR heat; lowest efficacy (~$10-15\\text{ lm W}^{-1}$), short lifespan (~$1000\\text{ h}$).\n• **CFL / Fluorescent**: Mercury vapour discharge emits UV → excites phosphor coating to emit visible light; higher efficacy (~$50-70\\text{ lm W}^{-1}$), contains toxic mercury.\n• **LED**: Electron-hole recombination in semiconductor directly emits light; highest efficacy ($80-150+\\text{ lm W}^{-1}$), longest life, mercury-free, instant full brightness."
            }
          ],
          formulaIds: ["f-e3-illum", "f-e3-illum-cos", "f-e3-efficacy"],
          diagramIds: ["diag-illumination"]
        },
        {
          id: "be3-1-2",
          code: "E3.2",
          highYield: true,
          title: { zh: "無火煮食（電磁爐 vs 微波爐 vs 電熱板）與冷氣機 / 熱泵 COP", en: "Cooking Without Fire (Induction vs Microwave) & Air Conditioner / Heat Pump COP" },
          summary: {
            zh: "**電磁爐（Induction Cooker）** 利用高頻交變磁場在鐵磁性鍋底直接感應**渦電流（eddy currents）** 發熱，終端能源效率高達 $75-85\\%$。**冷氣機 / 熱泵**透過製冷劑蒸發吸熱與冷凝放熱把熱能從低溫處「泵」往高溫處，其效能以**性能系數（COP）** 衡量。",
            en: "**Induction cookers** use high-frequency alternating magnetic fields to induce **eddy currents** directly inside ferromagnetic cookware (high end-use efficiency $75-85\\%$). **Air conditioners / heat pumps** move heat from cold to hot via a refrigerant cycle, rated by **Coefficient of Performance (COP)**."
          },
          points: [
            {
              zh: "**電磁爐運作原理與特性（Paper 2 必背！）**：爐面下銅線圈通入**高頻交流電**（$20-50\\text{ kHz}$）產生快速變化的磁場 → 穿透陶瓷玻璃面板，在**鐵磁性金屬鍋底（如鑄鐵、不鏽鋼）** 內感應出強大**渦電流（eddy currents）** → 因鍋底具電阻而產生焦耳熱（$I^2 R$）直接加熱食物！\n• **為何不能用銅、鋁或玻璃/陶瓷鍋？** 玻璃/陶瓷不導電（無渦電流）；銅和鋁是非磁性且電阻過低，磁通耦合弱且發熱不足。\n• **優點**：熱量直接產生於鍋底，無需先加熱爐面或周圍空氣 → 升溫快、效率高（比電熱板與明火煮食高得多）、爐面較不燙手更安全、無室內廢氣。",
              en: "**Induction Cooker Mechanism**: High-frequency AC in coil beneath glass top produces a rapidly changing B-field → induces **eddy currents** in a **ferromagnetic pot base** (iron/magnetic steel) → $I^2R$ heating directly inside the pot!\n• Glass/ceramic (non-conducting) and aluminium/copper (non-magnetic, too low resistance) do not work.\n• **Advantages**: Direct heating of pot → high efficiency (~$80\\%$), rapid response, cooler stovetop, no indoor combustion fumes."
            },
            {
              zh: "**微波爐（Microwave Oven）**：發出約 $2.45\\text{ GHz}$ 微波，令食物中具極性的**水分子**隨交變電場高速旋轉摩擦生熱（由食物內部表層數厘米直接加熱；但不可放入金屬器皿，因會反射微波並產生電弧火花）。",
              en: "**Microwave Oven**: $2.45\\text{ GHz}$ microwaves rotate polar **water molecules** rapidly, heating food by molecular friction. Never put metal inside (reflects microwaves & causes sparking)."
            },
            {
              zh: "**冷氣機 / 熱泵製冷循環（四核心部件必背！）**：\n1. **蒸發器（Evaporator，室內）**：低壓液態製冷劑**汽化吸熱**（吸收室內潛熱 $Q_C$），冷卻室內空氣。\n2. **壓縮機（Compressor）**：消耗電功 $W$ 將低壓製冷劑氣體壓縮成**高溫高壓氣體**。\n3. **冷凝器（Condenser，室外）**：高溫高壓氣體溫度高於室外空氣，向室外**放熱冷凝成液體**（放出 $Q_H = Q_C + W$！）。\n4. **膨脹閥（Expansion valve）**：令高壓液體降壓膨脹變回低壓低溫液體，重返蒸發器循環。",
              en: "**Air Conditioner / Heat Pump Cycle (4 Parts!)**:\n1. **Evaporator (indoor)**: Low-pressure liquid refrigerant **vaporizes**, absorbing indoor latent heat $Q_C$.\n2. **Compressor**: Does electrical work $W$, compressing gas into **high-pressure, high-temperature vapour**.\n3. **Condenser (outdoor)**: Hot vapour **condenses** into liquid, rejecting heat **$Q_H = Q_C + W$** to outdoors.\n4. **Expansion valve**: Drops pressure & temperature back to low-pressure liquid."
            },
            {
              zh: "**冷氣機製冷量、性能系數（COP）與香港能源標籤**：\n• **製冷量（Cooling Capacity）**：每單位時間從室內抽走的熱量 $\\frac{Q_C}{t}$（單位 $\\text{W}$ 或 $\\text{kW}$；注意製冷量**大於**輸入電功率 $P = \\frac{W}{t}$！）。\n• **製冷性能系數**：$\\text{COP}_{\\text{cooling}} = \\frac{\\text{製冷量}}{\\text{輸入電功率}} = \\frac{Q_C}{W}$（通常為 $2.5 - 4.5$，**大於 1 並不違反能量守恆**，因它只是「搬運」熱能而非將電能直接變冷能！）。\n• **熱泵暖氣模式**：$\\text{COP}_{\\text{heating}} = \\frac{Q_H}{W} = \\frac{Q_C + W}{W} = \\text{COP}_{\\text{cooling}} + 1$（比傳統電暖爐 $\\text{效率}=1$ 慳電數倍！）。\n• **強制性能源效益標籤計劃（MEELS）**：分 **1 至 5 級**，**1 級最節能**！",
              en: "**Cooling Capacity, COP & HK Energy Label**:\n• **Cooling capacity** $= Q_C/t$ (rate of heat removed from room, usually **greater** than input electrical power $P = W/t$!).\n• **$\\text{COP}_{\\text{cooling}} = \\frac{Q_C}{W} = \\frac{\\text{Cooling capacity}}{\\text{Electrical power input}}$** (typically $2.5-4.5$; **$>1$ does NOT violate energy conservation** because heat is pumped, not created!).\n• **Heat pump**: $\\text{COP}_{\\text{heating}} = \\frac{Q_H}{W} = \\text{COP}_{\\text{cooling}} + 1$.\n• **HK Energy Label (MEELS)**: Grades **1 to 5** (**Grade 1 = most energy efficient**)."
            }
          ],
          formulaIds: ["f-e3-eff", "f-e3-cop-cool", "f-e3-cop-heat"],
          diagramIds: ["diag-heat-pump"],
          trap: {
            zh: "超級經典誤區：把**雪櫃門打開**或把整部**冷氣機放進密封房間內**運轉，房間會變冷嗎？**絕對不會，反而會變熱！** 因為向房間排出的熱量 $Q_H = Q_C + W$ 比抽走的熱量 $Q_C$ 多出了壓縮機消耗的電功 $W$，淨輸入房間熱能為 $+W$！",
            en: "Classic Trap: Leaving a fridge door open (or running an air-con wholly inside a sealed room) **HEATS UP** the room! Because heat rejected $Q_H = Q_C + W$ exceeds heat absorbed $Q_C$ by net electrical work $+W$!"
          }
        }
      ]
    },
    {
      id: "be3-ch2",
      code: "Ch 2",
      title: { zh: "建築物與運輸的能源效益", en: "Energy Efficiency in Buildings & Transportation" },
      topics: [
        {
          id: "be3-2-1",
          code: "E3.3",
          highYield: true,
          title: { zh: "熱傳導率、傳熱系數（U-value）、OTTV 與節能建築設計", en: "Thermal Conductivity, U-Value, OTTV & Green Building Design" },
          summary: {
            zh: "穿過牆壁或窗戶的**熱傳導速率**由傅立葉定律決定：$\\frac{Q}{t} = \\frac{\\kappa A (T_H - T_C)}{d} = U A \\Delta T$，當中**傳熱系數（Thermal Transmittance / $U$-value）** $U = \\frac{\\kappa}{d}$（單位 $\\text{W m}^{-2}\\text{ K}^{-1}$）。**$U$ 值越低，隔熱性能越好！**",
            en: "Rate of heat conduction through a wall/window: $\\frac{Q}{t} = \\frac{\\kappa A(T_H - T_C)}{d} = U A \\Delta T$, where **Thermal Transmittance ($U$-value)** $U = \\frac{\\kappa}{d}$ ($\\text{W m}^{-2}\\text{ K}^{-1}$). **Lower $U$-value = better thermal insulation!**"
          },
          points: [
            {
              zh: "**複合牆體與並聯組件（Paper 2 高頻計算！）**：\n• **串聯複合層（如雙層玻璃 = 玻璃 + 空氣夾層 + 玻璃）**：穩態時穿過每層的熱流速率 $\\frac{Q}{t}$ 相等！總傳熱系數滿足倒數相加：**$\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2} + \\dots = \\frac{d_1}{\\kappa_1} + \\frac{d_2}{\\kappa_2} + \\dots$**（因空氣導熱率 $\\kappa$ 極低，夾層空氣大幅降低 $U$ 值！）。\n• **並聯區域（牆身 + 玻璃窗組成外牆）**：總傳熱速率直接相加：$\\left(\\frac{Q}{t}\\right)_{\\text{total}} = (U_{\\text{wall}} A_{\\text{wall}} + U_{\\text{win}} A_{\\text{win}})\\Delta T$。",
              en: "**Composite Walls & Parallel Sections (High-Yield Calc!)**:\n• **Layers in series (e.g. double glazing)**: Steady heat flow $Q/t$ is identical through each layer → **$\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2} + \\dots = \\frac{d_1}{\\kappa_1} + \\frac{d_2}{\\kappa_2} + \\dots$**.\n• **Parallel parts (wall + window)**: Total heat flow adds directly: $\\left(\\frac{Q}{t}\\right)_{\\text{total}} = (U_1 A_1 + U_2 A_2)\\Delta T$."
            },
            {
              zh: "**總熱傳送值（OTTV — Overall Thermal Transfer Value）**：量度大廈外殼（牆與窗）每單位面積從室外傳導及太陽輻射吸收的平均熱流速率（單位 $\\text{W m}^{-2}$）：\n$$\\text{OTTV} = \\frac{\\text{經外牆與窗戶傳入的總熱傳導速率} + \\text{經窗戶射入的太陽輻射熱速率}}{\\text{建築物外殼總面積 } A_{\\text{total}}}$$\n**降低 OTTV 的建築設計**：減小窗牆面積比（WWR）、採用**低輻射鍍膜雙層玻璃（Low-E double glazing）** 反射紅外線及降低 $U$ 值、加裝外遮陽板（shading devices）、使用淺色反光外牆漆、天台綠化與自然通風。",
              en: "**OTTV (Overall Thermal Transfer Value, $\\text{W m}^{-2}$)**: Average rate of heat gain per unit building envelope area (conduction through walls/windows + solar radiation through windows). **Ways to reduce OTTV**: Lower window-to-wall ratio (WWR), **Low-E double glazing** (reflects IR & lowers $U$-value), external sunshades, light-coloured reflective exterior walls, green roofs."
            }
          ],
          formulaIds: ["f-e3-cond", "f-e3-uval", "f-e3-u-series", "f-e3-ottv"],
          diagramIds: ["diag-building-wall"]
        },
        {
          id: "be3-2-2",
          code: "E3.4",
          highYield: true,
          title: { zh: "電動車（EV）、混能車（HEV）與再生制動", en: "Electric Vehicles (EV), Hybrid Vehicles (HEV) & Regenerative Braking" },
          summary: {
            zh: "傳統內燃機（ICE）汽車因熱機卡諾極限與怠速/制動損耗，終端效率僅約 **$15-25\\%$**；**電動車（EV）** 電動馬達效率高達 **$80-90\\%$**，配合**再生制動（regenerative braking）** 回收動能，大幅提升運輸能效並實現路邊零排放。",
            en: "Internal combustion engine (ICE) cars achieve only ~$15-25\\%$ end-use efficiency (waste heat, idling, friction braking). **Electric vehicles (EVs)** achieve ~$80-90\\%$ motor efficiency plus **regenerative braking**, offering zero roadside emissions."
          },
          points: [
            {
              zh: "**再生制動（Regenerative Braking）原理**：減速或落斜時，電動馬達**切換作發電機（generator）模式**，利用車輪動能驅動線圈切割磁感線產生感應電流為電池充電（同時電磁阻尼提供制動力！），大幅減少傳統煞車皮摩擦生熱浪費。",
              en: "**Regenerative Braking**: During braking or downhill driving, the electric motor **operates in reverse as a generator**, converting vehicle KE into electrical energy to recharge the battery while providing braking torque."
            },
            {
              zh: "**電動車 vs 傳統油車全面評估（常考利弊分析！）**：\n• **優點**：終端效率極高（$80-90\\%$ vs $20\\%$）、無怠速浪費（停車即零耗電）、具再生制動、**路邊零廢氣排放**（改善市區空氣質素）、噪音極低。\n• **限制與整體效率考量**：計及燃煤發電廠（$\\sim 35\\%$）+ 輸電損耗（$\\sim 90\\%$）+ 充電效率（$\\sim 85\\%$）後，**整體「由井至輪」（Well-to-Wheel）效率**約 $0.35 \\times 0.90 \\times 0.85 \\times 0.85 \\approx 23\\%$，仍依賴電網清潔度；且電池昂貴、充電時間較長、續航受電池容量限制、廢舊鋰電池回收構成環保挑戰。\n• **混能車（HEV）**：低速/起步用電馬達、高速巡航用高效率區間的引擎並為電池充電，兼顧續航與節能。",
              en: "**EVs vs ICE Vehicles (Balanced Evaluation)**:\n• **Pros**: High end-use efficiency ($80-90\\%$), zero idling loss, regenerative braking, **zero roadside exhaust**, quiet operation.\n• **Cons & Overall Efficiency**: If charged from fossil-fuel power plants (~$35\\%$ thermal eff.), **overall efficiency** drops to ~$23-30\\%$ and emissions merely shift to power stations; battery cost, weight, charging time, range anxiety & battery disposal.\n• **HEV**: Combines electric motor (low speed/stop-start) with ICE running near peak efficiency."
            }
          ]
        }
      ]
    },
    {
      id: "be3-ch3",
      code: "Ch 3",
      title: { zh: "可再生與不可再生能源及發電系統", en: "Renewable & Non-Renewable Energy Sources and Power Generation" },
      topics: [
        {
          id: "be3-3-1",
          code: "E3.5",
          highYield: true,
          title: { zh: "風能、水力發電、太陽能光伏電池與太陽常數", en: "Wind Power, Hydroelectric Power, Solar Constant & Photovoltaic Cells" },
          summary: {
            zh: "可再生能源（太陽能、風能、水力）可自然補充且發電時幾乎無溫室氣體排放。三大必考發電功率公式：**風能 $P = \\frac{1}{2}\\eta\\rho A v^3$**、**水力 $P = \\eta\\rho g h \\frac{V}{t}$**、**太陽能 $P = \\eta I A \\cos\\theta$**。",
            en: "Renewable sources replenish naturally with near-zero operational greenhouse emissions. Three core power equations: **Wind $P = \\frac{1}{2}\\eta\\rho A v^3$**, **Hydro $P = \\eta\\rho g h \\frac{V}{t}$**, and **Solar $P = \\eta I A \\cos\\theta$**."
          },
          points: [
            {
              zh: "**風力發電（Wind Power）**：葉片半徑 $r$ 的掃掠面積 $A = \\pi r^2$。每秒流過空氣質量 $\\frac{m}{t} = \\rho A v$，故風的總動能功率 $P_{\\max} = \\frac{1}{2}\\left(\\frac{m}{t}\\right)v^2 = \\frac{1}{2}\\rho A v^3$！\n• **為何實際效率遠低於 $100\\%$（貝茲極限 Betz Limit $\\le 59.3\\%$）？** 穿過葉片後的空氣**不能完全靜止**（必須保留一定速度流走，讓後方新空氣繼續流入！），加上機械摩擦與發電機熱損耗。\n• **三次方效應**：風速 $v$ 增至 2 倍，風力功率暴增至 **$2^3 = 8$ 倍**！但風速不穩、佔地廣、有噪音及影響鳥類。",
              en: "**Wind Power**: Swept area $A = \\pi r^2$; mass flow rate $\\frac{m}{t} = \\rho A v \\Rightarrow P_{\\max} = \\frac{1}{2}\\rho A v^3$.\n• **Why can't efficiency reach $100\\%$?** Air behind the blades **cannot be brought to a complete stop** (it must move away to let incoming air flow through! Theoretical Betz limit $\\approx 59.3\\%$), plus friction & electrical losses.\n• **Cubic scaling**: Doubling wind speed increases power by **$2^3 = 8\\times$**!"
            },
            {
              zh: "**水力發電（Hydroelectric Power）**：高處水庫落差 $h$ 的水重力勢能轉化為渦輪動能再發電：$P = \\eta \\frac{m}{t} g h = \\eta \\rho g h \\frac{V}{t}$。優點：發電效率極高（$>80\\%$）、可隨時快速開關應對高峰用電（並可作**抽水蓄能**）；缺點：築壩淹沒生態農田、破壞河流生態、受地形及降雨限制。",
              en: "**Hydroelectric Power**: $P = \\eta \\frac{m}{t} g h = \\eta \\rho g h \\frac{V}{t}$. Pros: very high efficiency ($>80\\%$), rapid start-up for peak load (supports pumped storage). Cons: floods habitats/farmland, disrupts river ecosystems, site-dependent."
            },
            {
              zh: "**太陽常數（Solar Constant, $S = 1366\\text{ W m}^{-2}$）與太陽能光伏板（PV Cell）**：\n• **太陽常數**定義為地球大氣層頂端、垂直於太陽光方向的單位面積所接收的太陽輻射功率（$1366\\text{ W m}^{-2}$）。因大氣層雲層反射、散射與吸收，到達地面的實際輻射強度 $I$ 顯著較低（晴朗正午約 $1000\\text{ W m}^{-2}$，隨緯度、季節與太陽高度角 $\\theta$ 變化：$I_{\\text{surface}} = I_0 \\cos\\theta$）。\n• **光伏電池（Solar PV Cell）原理**：p-n 結半導體吸收能量大於能隙的光子產生電子-電洞對，內建電場將電子與電洞分離驅往兩極形成直流電（DC），無轉動部件、壽命長、免維護，但目前商用轉換效率僅約 $15-22\\%$、受晝夜與天氣影響、需大量土地及儲能電池。",
              en: "**Solar Constant ($S = 1366\\text{ W m}^{-2}$) & PV Cells**:\n• **Solar constant**: Solar irradiance on a surface perpendicular to sun's rays at the **top of Earth's atmosphere**. Ground intensity is lower due to **atmospheric absorption, reflection & scattering**, and tilted incidence ($\\cos\\theta$).\n• **PV Cell**: Photons excite electron-hole pairs across a semiconductor p-n junction; built-in field drives DC current directly. Pros: no moving parts, zero operational emissions. Cons: low efficiency (~$15-22\\%$), intermittent (night/clouds), high land & storage needs."
            }
          ],
          formulaIds: ["f-e3-wind", "f-e3-wind-deriv", "f-e3-hydro", "f-e3-solar"],
          diagramIds: ["diag-renewable-pwr"]
        },
        {
          id: "be3-3-2",
          code: "E3.6",
          highYield: true,
          title: { zh: "核能發電（壓水式反應堆 PWR）、化石燃料與環境影響", en: "Nuclear Power (PWR), Fossil Fuels & Environmental Impact" },
          summary: {
            zh: "全球電力仍主要依賴化石燃料（煤、天然氣、石油），但燃燒排放大量 $\\text{CO}_2$ 加劇溫室效應及 $\\text{SO}_2/\\text{NO}_x$ 致酸雨。**壓水式核反應堆（PWR）** 具備極高能量密度與零運行碳排，但面臨核廢料處理與輻射安全挑戰。",
            en: "Fossil fuels still dominate global electricity but emit $\\text{CO}_2$ (global warming) and $\\text{SO}_2/\\text{NO}_x$ (acid rain). **Pressurized Water Reactors (PWR)** deliver ultra-high energy density and zero operational $\\text{CO}_2$, balanced against radioactive waste & safety risks."
          },
          points: [
            {
              zh: "**壓水式反應堆（PWR，如大亞灣核電廠）五大關鍵元件功能（Paper 2 必背！）**：\n1. **燃料棒（Fuel rods）**：含濃縮至約 $3-5\\%$ 的裂變物質 **鈾-235（$^{235}\\text{U}$）**（天然鈾僅含 $0.7\\%$ $^{235}\\text{U}$，無法在輕水堆維持連鎖反應）。\n2. **慢化劑（Moderator，高壓水）**：與快中子彈性碰撞將其**減速為慢中子（熱中子）**，大幅提高被 $^{235}\\text{U}$ 捕獲引發裂變的機率！\n3. **控制棒（Control rods，硼/鎘合金）**：高效**吸收中子**；插入越深吸收越多中子，用以調節反應堆功率或緊急停堆。\n4. **冷卻劑與雙重水迴路（Primary & Secondary Coolant Loops）**：一迴路高壓水維持液態不沸騰，把核熱經**熱交換器（蒸汽發生器）** 傳給二迴路水產生蒸汽推動渦輪發電——**隔離放射性一迴路水與外部渦輪，防止輻射洩漏**！\n5. **生物屏蔽層（Concrete Containment Shell）**：厚鋼筋混凝土防護罩阻隔 $\\gamma$ 射線及中子外洩。",
              en: "**Pressurized Water Reactor (PWR) — 5 Essential Components**:\n1. **Fuel rods**: Enriched uranium (~$3-5\\%$ $^{235}\\text{U}$; natural U has only $0.7\\%$). \n2. **Moderator (pressurized water)**: Slows fast neutrons down to **thermal neutrons**, greatly raising fission probability.\n3. **Control rods (boron/cadmium)**: **Absorb excess neutrons**; lowered deeper to reduce power or shut down.\n4. **Dual coolant loops + Heat exchanger**: Pressurized primary water stays liquid and transfers heat to secondary water to make steam for turbines — **keeps radioactive primary water completely isolated**!\n5. **Containment shell**: Thick reinforced concrete & steel shields $\\gamma$-rays/neutrons."
            },
            {
              zh: "**核能發電 vs 燃煤發電**：\n• $1\\text{ kg}$ $^{235}\\text{U}$ 釋放的能量相當於燃燒約 **$2700$ 公噸煤**（能量密度極高！）。\n• **核能優點**：燃料體積小易運輸、運行不排 $\\text{CO}_2$ 與酸雨氣體、全天候穩定基載供電。\n• **核能缺點**：高放射性核廢料半衰期長達數萬年須深地封存、興建與退役成本極高、熱污染（冷卻水排海）、事故（如切爾諾貝爾、福島）後果災難性。",
              en: "**Nuclear vs Coal**: $1\\text{ kg}$ $^{235}\\text{U}$ $\\approx 2700\\text{ tonnes}$ of coal! Nuclear offers ultra-high energy density, zero operational $\\text{CO}_2$/acid rain, and steady baseload power — vs long-lived radioactive waste disposal, huge capital/decommissioning costs, thermal pollution, and severe accident risk."
            }
          ],
          formulaIds: ["f-e3-binding-fission"],
          diagramIds: ["diag-renewable-pwr"]
        }
      ]
    }
  ]
});
