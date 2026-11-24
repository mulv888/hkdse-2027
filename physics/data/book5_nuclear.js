/* ==========================================================================
   Book 5: Radioactivity and Nuclear Energy (Paper 1 Compulsory Part)
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book5",
  paper: "paper1",
  code: "Book 5",
  color: "#e11d48",
  title: { zh: "Book 5：放射現象和核能", en: "Book 5: Radioactivity and Nuclear Energy" },
  subtitle: {
    zh: "三種電離輻射（α, β, γ）· 放射性衰變與半衰期 · 原子結構與同位素 · 核反應、質能方程、裂變與聚變",
    en: "Ionizing Radiations (α, β, γ) · Radioactive Decay & Half-Life · Atomic Structure · Nuclear Fission & Fusion"
  },
  chapters: [
    {
      id: "b5-ch1",
      code: "Ch 1",
      title: { zh: "電離輻射與放射性衰變", en: "Ionizing Radiations and Radioactive Decay" },
      topics: [
        {
          id: "b5-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "α、β、γ 射線性質比較、探測與場中偏轉", en: "Properties, Detection & Field Deflection of α, β, γ Radiations" },
          summary: {
            zh: "不穩定原子核自發隨機衰變並釋放出三種電離輻射：**$\\alpha$ 粒子（氦核 $^4_2\\text{He}$）**、**$\\beta$ 粒子（高速電子 $^0_{-1}e$）** 及 **$\\gamma$ 射線（高能電磁波）**。",
            en: "Unstable nuclei spontaneously and randomly emit three ionizing radiations: **$\\alpha$-particles ($^4_2\\text{He}$ nuclei)**, **$\\beta$-particles (fast electrons $^0_{-1}e$)**, and **$\\gamma$-rays (high-energy EM waves)**."
          },
          table: {
            headers: [
              { zh: "特性", en: "Property" },
              { zh: "$\\alpha$ 輻射（Alpha）", en: "$\\alpha$-radiation" },
              { zh: "$\\beta$ 輻射（Beta）", en: "$\\beta$-radiation" },
              { zh: "$\\gamma$ 輻射（Gamma）", en: "$\\gamma$-radiation" }
            ],
            rows: [
              [{ zh: "本質與符號", en: "Nature & Symbol" }, { zh: "氦原子核 $^4_2\\text{He}$（2質子+2中子）", en: "Helium nucleus $^4_2\\text{He}$" }, { zh: "高速電子 $^0_{-1}e$（源自核內中子轉為質子）", en: "Fast electron $^0_{-1}e$ (from $n \\to p + e^-$)" }, { zh: "高頻短波電磁波（光子）", en: "High-frequency EM wave (photons)" }],
              [{ zh: "電荷 / 質量", en: "Charge / Mass" }, { zh: "$+2e$ / 重（$\\approx 4\\text{ u}$）", en: "$+2e$ / Heavy ($\\approx 4\\text{ u}$)" }, { zh: "$-e$ / 極輕（$\\approx \\frac{1}{1840}\\text{ u}$）", en: "$-e$ / Very light ($\\approx \\frac{1}{1840}\\text{ u}$)" }, { zh: "$0$（不帶電） / 靜止質量為 $0$", en: "$0$ / Zero rest mass" }],
              [{ zh: "電離能力 Ionizing Power", en: "Ionizing Power" }, { zh: "**最強**（質量大、速度較慢、電荷大）", en: "**Strongest** (massive, slower, $+2e$)" }, { zh: "中等", en: "Moderate" }, { zh: "**最弱**", en: "**Weakest**" }],
              [{ zh: "空氣射程與阻擋物料", en: "Range in Air & Absorber" }, { zh: "數厘米空氣；一張**紙**或表皮即可阻擋", en: "A few cm in air; stopped by **paper**" }, { zh: "數十厘米至數米空氣；數毫米**鋁片（Al）** 阻擋", en: "Tens of cm – few m; stopped by a few mm **aluminium**" }, { zh: "射程極長；須厚**鉛（Pb）** 或厚混凝土大幅衰減（永不完全減為零）", en: "Very long; greatly reduced by thick **lead** / concrete" }],
              [{ zh: "電場 / 磁場偏轉", en: "Deflection in E / B Field" }, { zh: "向負極小幅偏轉（因質量大、荷質比 $q/m$ 小）", en: "Slight deflection towards $-$ plate (small $q/m$)" }, { zh: "向正極**大幅**偏轉（方向與 $\\alpha$ 相反，因 $q/m$ 極大）", en: "**Large** opposite deflection towards $+$ plate (huge $q/m$)" }, { zh: "**完全不偏轉**", en: "**Undeflected**" }],
              [{ zh: "雲室（Cloud Chamber）徑跡", en: "Cloud Chamber Tracks" }, { zh: "粗、直、短、長度相若", en: "Thick, straight, short, similar length" }, { zh: "幼細、曲折（易被空氣分子撞偏）", en: "Thin, twisted/tortuous" }, { zh: "極微弱分散短絲狀", en: "Very faint, wispy, scattered" }]
            ]
          },
          points: [
            {
              zh: "**探測儀器**：(1) **蓋革-米勒計數器（GM counter）**：探測 $\\alpha, \\beta, \\gamma$（必須具極薄雲母窗讓 $\\alpha$ 進入）；因有**本底輻射（background radiation，源自宇宙射線、岩石泥土氡氣等）**，實驗必須先測本底計數率並相減！(2) **照相底片徽章（Film badge）**；(3) **火花計數器**（只探測高電離能力的 $\\alpha$ 粒子！）。",
              en: "**Detectors**: (1) **GM counter** (thin mica window for $\\alpha$; ALWAYS subtract **background count rate** from cosmic rays, radon gas, rocks!); (2) **Photographic film badge**; (3) **Spark counter** (detects strongly ionizing $\\alpha$ only!)."
            },
            {
              zh: "**電離輻射應用**：煙霧探測器（用長半衰期 **$\\alpha$ 源**，煙霧吸收 $\\alpha$ 粒子令電流下降觸發警報）；造紙/金屬箔測厚儀（用 **$\\beta$ 源**，紙越厚穿透率越低）；醫療器材滅菌與癌症放射治療（用強穿透 **$\\gamma$ 源**）；工業/醫學示蹤劑（用短半衰期 $\\gamma$ 或 $\\beta$ 源）。",
              en: "**Applications**: Smoke detector (long-$t_{1/2}$ **$\\alpha$** source); thickness gauge for paper/foil (**$\\beta$** source); sterilization & radiotherapy (**$\\gamma$**); medical tracers (short-$t_{1/2}$ $\\gamma$ source to minimize harm)."
            }
          ],
          diagramIds: ["diag-alpha-beta-gamma"]
        },
        {
          id: "b5-1-2",
          code: "1.2",
          highYield: true,
          title: { zh: "衰變方程、指數衰變規律、半衰期與碳-14 測年", en: "Decay Equations, Exponential Decay Law, Half-Life & Carbon Dating" },
          summary: {
            zh: "放射性衰變是**隨機（random）** 且**自發（spontaneous）** 的過程，不受溫度、壓強或化學狀態影響。未衰變核數 $N$ 與放射強度 $A$ 隨時間指數衰減：$N = N_0 e^{-kt}$，$A = kN$，半衰期 $t_{1/2} = \\frac{\\ln 2}{k}$。",
            en: "Radioactive decay is **random** and **spontaneous** (unaffected by temperature, pressure, or chemical bonding). Undecayed nuclei $N$ and activity $A$ decay exponentially: $N = N_0 e^{-kt}$, $A = kN$, half-life $t_{1/2} = \\frac{\\ln 2}{k}$."
          },
          points: [
            {
              zh: "**核衰變守恆法則（質量數 $A$ 與原子序數 $Z$ 守恆）**：\n• **$\\alpha$ 衰變**：$^A_Z X \\to ^{A-4}_{Z-2} Y + ^4_2\\text{He}$（質量數減 4，質子數減 2）。\n• **$\\beta$ 衰變**：$^A_Z X \\to ^A_{Z+1} Y + ^0_{-1}e$（本質是核內一個中子變質子：$^1_0 n \\to ^1_1 p + ^0_{-1}e$，故質量數不變，質子數加 1！）。\n• **$\\gamma$ 衰變**：$^A_Z X^* \\to ^A_Z X + \\gamma$（激發態核躍遷至基態，$A$ 與 $Z$ 皆不變）。",
              en: "**Decay Conservation ($A$ & $Z$ conserved)**:\n• **$\\alpha$-decay**: $^A_Z X \\to ^{A-4}_{Z-2} Y + ^4_2\\text{He}$.\n• **$\\beta$-decay**: $^A_Z X \\to ^A_{Z+1} Y + ^0_{-1}e$ (a neutron turns into a proton inside the nucleus!).\n• **$\\gamma$-emission**: $^A_Z X^* \\to ^A_Z X + \\gamma$ ($A, Z$ unchanged)."
            },
            {
              zh: "**衰變常數 $k$ 與放射強度 $A$（單位 $\\text{Bq} = \\text{s}^{-1}$）**：\n• 衰變常數 $k$ 是單個原子核在單位時間內發生衰變的概率。\n• $A = -\\frac{dN}{dt} = kN$（**極重要單位檢查**：用 $A = kN$ 求 $\\text{Bq}$ 時，$k$ 的單位必須是 **$\\text{s}^{-1}$**，若半衰期給了年/小時，必須轉成秒！）。\n• 半衰期公式：$N = N_0 \\left(\\frac{1}{2}\\right)^{t / t_{1/2}} = N_0 e^{-kt}$，且 $\\ln A = \\ln A_0 - kt$（畫 $\\ln A$ 對 $t$ 圖得直線，斜率 $= -k$！）。",
              en: "**Decay Constant $k$ & Activity $A$ ($\\text{Bq} = \\text{s}^{-1}$)**:\n• $A = kN$ (**Unit Trap**: for $A$ in $\\text{Bq}$, $k$ MUST be in **$\\text{s}^{-1}$**, converting $t_{1/2}$ from years/days/hours to seconds!).\n• $N = N_0 (\\frac{1}{2})^{t/t_{1/2}} = N_0 e^{-kt}$; plotting $\\ln A$ vs $t$ gives a straight line of **slope $= -k$**!"
            },
            {
              zh: "**本底輻射校正（Background Correction — 必考計算！）**：GM 管量度的是**總計數率 = 放射源校正計數率 + 本底計數率**！求半衰期時，必須先將每個讀數**減去本底計數率 $B$**，再用校正計數率計算！",
              en: "**Background Correction (Must-Do Step!)**: Measured count rate $= A_{\\text{corrected}} + B$. ALWAYS subtract background count rate $B$ from EVERY reading BEFORE finding $t_{1/2}$ or ratios!"
            },
            {
              zh: "**碳-14 測年法（Carbon-14 Dating）**：活生物不斷攝入大氣中含固定比例 $^{14}\\text{C}/^{12}\\text{C}$ 的碳；生物死亡後停止攝取，體內 $^{14}\\text{C}$（$t_{1/2} \\approx 5730\\text{ years}$）開始單純衰變，比較古物與同等質量現生有機物的校正放射強度即可推算年代（限數百年至約 5 萬年內的有機物，不適用於岩石或過於久遠的恐龍化石）。",
              en: "**Carbon-14 Dating**: Living organisms maintain constant $^{14}\\text{C}/^{12}\\text{C}$ ratio; after death, $^{14}\\text{C}$ ($t_{1/2} \\approx 5730\\text{ yr}$) decays without replenishment. Applicable only to organic remains aged ~$500 - 50\\,000$ years (not rocks or dinosaur fossils)."
            }
          ],
          formulaIds: ["f-b5-decay", "f-b5-halflife", "f-b5-activity", "f-b5-half-n"],
          diagramIds: ["diag-decay-curve"],
          trap: {
            zh: "核衰變中**「質量減半」並非整塊樣本消失一半！** 而是未衰變母核數量減半，衰變出來的子核仍留在樣本中（所以樣本總質量幾乎不變，只有**母核數量與放射強度**減半！）。",
            en: "After one half-life, the **sample's total mass does NOT drop by half**! Undecayed parent nuclei halve, but daughter nuclei remain inside the sample!"
          }
        }
      ]
    },
    {
      id: "b5-ch2",
      code: "Ch 2",
      title: { zh: "核能：質能方程、核裂變與核聚變", en: "Nuclear Energy: Mass-Energy, Fission & Fusion" },
      topics: [
        {
          id: "b5-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "質量虧損、愛因斯坦質能方程、核裂變與核聚變", en: "Mass Defect, Einstein's Mass-Energy Equivalence, Fission & Fusion" },
          summary: {
            zh: "任何放能核反應中，生成物的總靜止質量均**略小於**反應物的總靜止質量，減少的質量稱為**質量虧損（mass defect, $\\Delta m$）**，依愛因斯坦質能關係 **$\\Delta E = \\Delta m c^2$** 轉化為巨大核能（主要成為生成粒子的動能及 $\\gamma$ 光子能量）。",
            en: "In any exothermic nuclear reaction, total rest mass of products is slightly **less** than reactants. This **mass defect ($\\Delta m$)** converts into huge energy via Einstein's equation **$\\Delta E = \\Delta m c^2$** (mainly KE of products & $\\gamma$ photons)."
          },
          points: [
            {
              zh: "**兩大核能計算單位捷徑**：\n• 若 $\\Delta m$ 以 $\\text{kg}$ 計：$\\Delta E (\\text{J}) = \\Delta m \\times (3.00 \\times 10^8)^2$。\n• 若 $\\Delta m$ 以原子質量單位 $\\text{u}$ 計（$1\\text{ u} = 1.661 \\times 10^{-27}\\text{ kg}$）：**$1\\text{ u}$ 對應 $931\\text{ MeV}$**！直接用 $\\Delta E (\\text{MeV}) = \\Delta m(\\text{u}) \\times 931$，再乘 $1.60 \\times 10^{-13}$ 轉回焦耳 $\\text{J}$！",
              en: "**Two Calculation Shortcuts**:\n• $\\Delta m$ in $\\text{kg}$: $\\Delta E(\\text{J}) = \\Delta m c^2$.\n• $\\Delta m$ in $\\text{u}$: **$1\\text{ u} \\leftrightarrow 931\\text{ MeV}$**, so $\\Delta E(\\text{MeV}) = \\Delta m(\\text{u}) \\times 931$, then $\\times 1.60 \\times 10^{-13}\\text{ J/MeV}$!"
            },
            {
              zh: "**核裂變（Nuclear Fission）與連鎖反應（Chain Reaction）**：重核（如 $^{235}_{92}\\text{U}$）吸收一個**慢中子（熱中子）** 分裂成兩個較輕子核，並釋放 **2–3 個快中子和約 $200\\text{ MeV}$ 能量**。若鈾燃料達到**臨界質量（critical mass）** 且中子被減速，釋出的中子會誘發更多鈾核裂變，形成**連鎖反應**。\n• 核電廠用**慢化劑（moderator，如水/石墨）** 減慢中子；用**控制棒（control rods，如硼/鎘）** 吸收多餘中子，令每次裂變平均剛好引發 **1 次**新裂變以維持穩定輸出功率。",
              en: "**Nuclear Fission & Chain Reaction**: Heavy nucleus ($^{235}\\text{U}$) absorbs a **slow (thermal) neutron**, splitting into lighter nuclei + **2–3 fast neutrons + ~$200\\text{ MeV}$**. Above **critical mass**, released neutrons trigger a self-sustaining **chain reaction**. Reactors use a **moderator** (water/graphite) to slow neutrons and **control rods** (boron/cadmium) to absorb excess neutrons for steady power."
            },
            {
              zh: "**核聚變（Nuclear Fusion）**：兩個輕核（如氘 $^2_1\\text{H}$ 與氚 $^3_1\\text{H}$）聚合成較重氦核 $^4_2\\text{He}$ 與中子，釋出巨大能量（單位質量釋放能量遠超裂變！），是太陽與恆星的能量來源。\n• **為何核聚變需要極高溫度（$> 10^8\\text{ K}$）與極高壓？** 因為帶正電的輕核之間存在極強的**靜電排斥力（electrostatic repulsion）**，必須具有極高動能才能克服排斥力靠得足夠近，讓短程**強核力（strong nuclear force）** 將它們結合！",
              en: "**Nuclear Fusion**: Light nuclei ($^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0 n$) fuse, releasing far more energy per unit mass than fission (powers stars).\n• **Why extreme temperature ($>10^8\\text{ K}$) & density?** Positively charged nuclei experience huge **electrostatic repulsion** and need enormous KE to get close enough for the short-range **strong nuclear force** to bind them!"
            },
            {
              zh: "**核子平均結合能（Binding Energy per Nucleon）解釋**：中等質量數的鐵-56（$^{56}\\text{Fe}$）最穩定（核子平均結合能最高）。無論重核裂變還是輕核聚變，生成物都更靠近鐵-56、**平均結合能增加**，因此釋放能量！",
              en: "**Binding Energy per Nucleon**: $^{56}\\text{Fe}$ sits at the peak of stability. Both fission (heavy → medium) and fusion (light → medium) move nuclei toward higher binding energy per nucleon, releasing energy!"
            }
          ],
          formulaIds: ["f-b5-emc2", "f-b5-u-mev"],
          diagramIds: ["diag-binding-fission"],
          exam: {
            zh: "計算核反應堆或放射性同位素電池輸出功率時，常考把**質量（$\\text{g}$ 或 $\\text{kg}$）換算成原子核數目 $N$**：$N = \\frac{m}{M} N_A$，再乘每次裂變能量 $\\Delta E$ 與轉換效率 $\\eta$！",
            en: "Reactor power problems frequently combine $N = \\frac{m}{M}N_A$ (number of fissile nuclei) with energy per fission $\\Delta E$ and efficiency $\\eta$: $E_{\\text{out}} = \\eta N \\Delta E$!"
          }
        }
      ]
    }
  ]
});
