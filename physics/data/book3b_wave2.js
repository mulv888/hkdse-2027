/* ==========================================================================
   Book 3B: Wave Motion II — Wave Optics, EM Waves, Stationary Waves & Sound
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book3b",
  paper: "paper1",
  code: "Book 3B",
  color: "#0d9488",
  title: { zh: "Book 3B：波動 II（光波、電磁波、駐波與聲波）", en: "Book 3B: Wave Motion II (Light Waves, EM Spectrum, Stationary Waves & Sound)" },
  subtitle: {
    zh: "楊氏雙縫干涉 · 衍射光柵 · 電磁波譜 · 駐波與諧波 · 聲波與示波器",
    en: "Young's Double-Slit · Diffraction Grating · EM Spectrum · Stationary Waves · Sound & CRO"
  },
  chapters: [
    {
      id: "b3b-ch1",
      code: "Ch 1",
      title: { zh: "光的波動本質：雙縫干涉與衍射光柵", en: "Wave Nature of Light: Double-Slit & Diffraction Grating" },
      topics: [
        {
          id: "b3b-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "楊氏雙縫干涉（Young's Double-Slit Experiment）", en: "Young's Double-Slit Interference Experiment" },
          summary: {
            zh: "單色相干光通過雙狹縫後發生繞射並重疊干涉，在遠處屏幕上形成**等間距、交替排列的明暗條紋**。相鄰亮紋（或暗紋）間距（條紋間距）為 $\\Delta y = \\frac{\\lambda D}{a}$（當 $D \\gg a$ 且角度 $\\theta$ 很小時適用）。",
            en: "Monochromatic coherent light diffracts through two narrow slits and interferes to form **equally spaced alternating bright and dark fringes** on a distant screen: fringe separation $\\Delta y = \\frac{\\lambda D}{a}$ (valid for $D \\gg a$, small angle $\\theta$)."
          },
          points: [
            {
              zh: "**為何光需要單縫或雷射（Laser）？** 兩盞獨立燈泡的光源相位不斷隨機突變，屬於**非相干（incoherent）** 光源，無法形成穩定干涉條紋。使用雷射或先經單縫繞射再射向雙縫，可確保雙縫成為同頻同相的**相干波源**。",
              en: "**Why Laser or Single Slit?** Two independent lamps emit waves with randomly changing phase (**incoherent**), producing no steady pattern. A laser (or single slit before double slits) ensures coherent, in-phase sources."
            },
            {
              zh: "**影響條紋間距 $\\Delta y = \\frac{\\lambda D}{a}$ 的因素**：\n• 增大波長 $\\lambda$（如由藍光改用紅光）→ $\\Delta y$ **增大**（條紋變闊）。\n• 增大雙縫至屏幕距離 $D$ → $\\Delta y$ **增大**（但條紋變暗）。\n• 減小雙縫間距 $a$ → $\\Delta y$ **增大**。\n• **整個裝置浸入水中（折射率 $n$）**：光在水中的波長變為 $\\lambda' = \\frac{\\lambda}{n}$ → $\\Delta y$ **縮小至 $\\frac{1}{n}$**！\n• **遮住其中一條狹縫**：雙縫干涉消失，屏幕只剩下極闊的單縫中央亮帶（亮度下降）。",
              en: "**Factors Affecting Fringe Separation $\\Delta y = \\frac{\\lambda D}{a}$**:\n• Longer $\\lambda$ (blue → red) → $\\Delta y$ **increases**.\n• Larger screen distance $D$ → $\\Delta y$ **increases** (fringes dimmer).\n• Smaller slit separation $a$ → $\\Delta y$ **increases**.\n• **Submerged in water ($n$)**: $\\lambda' = \\lambda/n \\Rightarrow \\Delta y$ **shrinks by factor $1/n$**!\n• **Covering one slit**: Interference disappears; only a broad single-slit diffraction pattern remains."
            },
            {
              zh: "**白光雙縫干涉圖樣（DSE 常考！）**：中央第 0 級（程差 $= 0$）所有色光均相長干涉，形成**白色中央亮紋（central white fringe）**；兩側出現少量彩色條紋（因 $\\lambda_{\\text{violet}} < \\lambda_{\\text{red}}$，每級條紋**內側偏紫、外側偏紅**），越遠離中央重疊越多而淡出成均勻白光。",
              en: "**White Light Double-Slit Pattern**: Central fringe ($n=0$, path diff $=0$) is **white**; flanked by a few coloured fringes with **violet on the inner edge and red on the outer edge** ($\\lambda_V < \\lambda_R$), quickly overlapping into uniform white."
            }
          ],
          formulaIds: ["f-b3b-ydse", "f-b3b-ydse-deriv"],
          diagramIds: ["diag-young-double-slit"],
          trap: {
            zh: "題目給「由第 1 條亮紋至第 6 條亮紋的總距離為 $L$」時，中間共有 **$6 - 1 = 5$ 個條紋間距**，而非 6 個！即 $\\Delta y = \\frac{L}{5}$。從中央亮紋（$n=0$）數到第 $n$ 級亮紋則剛好是 $n\\Delta y$。",
            en: "From the 1st bright fringe to the 6th bright fringe there are **$6 - 1 = 5$ spacings**, NOT 6! So $\\Delta y = L/5$. From central max ($n=0$) to the $n$-th order is $n\\Delta y$."
          }
        },
        {
          id: "b3b-1-2",
          code: "1.2",
          highYield: true,
          title: { zh: "衍射光柵（Diffraction Grating）與光譜分析", en: "Diffraction Grating & Spectral Analysis" },
          summary: {
            zh: "**平面透射衍射光柵**刻有大量等距平行極細狹縫（線密度 $N$ 線/mm，光柵間距 $d = \\frac{1}{N}$）。主極大亮紋（Maxima）角度滿足**精確公式** $d\\sin\\theta = n\\lambda$（無需小角近似！）。",
            en: "A **diffraction grating** has thousands of equally spaced parallel slits (grating spacing $d = \\frac{1}{N}$). Principal maxima satisfy the **exact** grating equation $d\\sin\\theta = n\\lambda$ (no small-angle approximation required!)."
          },
          points: [
            {
              zh: "**光柵間距換算（極易出錯）**：若光柵標示「每毫米 300 條線（$300\\text{ lines mm}^{-1}$）」，則 $d = \\frac{1\\text{ mm}}{300} = \\frac{10^{-3}\\text{ m}}{300} = 3.33 \\times 10^{-6}\\text{ m}$。",
              en: "**Grating Spacing Conversion**: For $300\\text{ lines mm}^{-1}$, $d = \\frac{10^{-3}\\text{ m}}{300} = 3.33 \\times 10^{-6}\\text{ m}$."
            },
            {
              zh: "**最高可見級數 $n_{\\max}$ 與總亮點數目**：由於 $\\sin\\theta \\le 1$，故 $n \\le \\frac{d}{\\lambda}$，必須**向下取整（round DOWN）** 得 $n_{\\max}$。屏幕（半圓內）可見總亮紋數目 $= 2n_{\\max} + 1$（包括中央第 0 級及左右對稱各 $n_{\\max}$ 級；若 $\\frac{d}{\\lambda}$ 剛好為整數則 $\\theta = 90^\\circ$ 不能落在平直屏幕上）。",
              en: "**Maximum Order $n_{\\max}$ & Total Maxima**: Since $\\sin\\theta \\le 1$, $n_{\\max} = \\lfloor d/\\lambda \\rfloor$ (**always round DOWN**). Total visible maxima $= 2n_{\\max} + 1$ (central $0$-th order + symmetric $\\pm 1 \\dots \\pm n_{\\max}$)."
            },
            {
              zh: "**光柵相比雙縫的兩大優勢**：(1) 亮紋**更明亮（brighter）**（因光通過成千上萬條縫，總光通量大增）；(2) 亮紋**更尖銳清晰、分得更開（sharper & wider apart）**（微偏離主極大角即迅速相消干涉），大幅提升量度 $\\lambda$ 的精準度！",
              en: "**Grating vs Double-Slit Advantages**: (1) Maxima are much **brighter** (many slits transmit more light); (2) Maxima are much **sharper and wider apart** (slight shift destroys constructive alignment across thousands of slits), enabling high-precision $\\lambda$ measurement."
            },
            {
              zh: "**白光通過光柵（與三稜鏡色散對比！）**：\n• 中央第 0 級（$\\theta = 0$）：**白色亮線**。\n• 第 1、2 級光譜：由 $\\sin\\theta = \\frac{n\\lambda}{d}$，**紅光（$\\lambda$ 最長）偏折角最大、紫光（$\\lambda$ 最短）偏折角最小**——正好與**玻璃三稜鏡色散相反**（三稜鏡中紫光偏折最大）！\n• 高階光譜（如第 2 級紅光與第 3 級紫光）可能發生**光譜重疊（overlapping）**（比較 $2\\lambda_{\\text{red}}$ 與 $3\\lambda_{\\text{violet}}$）。",
              en: "**White Light Grating Spectrum vs Prism**:\n• $n = 0$: **White** central line.\n• $n = 1, 2\\dots$: By $\\sin\\theta = n\\lambda/d$, **RED bends MOST and VIOLET bends LEAST** — **OPPOSITE to a glass prism** (where violet bends most)!\n• Higher orders (e.g. 2nd-order red vs 3rd-order violet) can **overlap** when $2\\lambda_{\\text{red}} > 3\\lambda_{\\text{violet}}$."
            }
          ],
          formulaIds: ["f-b3b-grating", "f-b3b-grating-nmax", "f-b3b-grating-y"],
          diagramIds: ["diag-diffraction-grating"],
          trap: {
            zh: "計算光柵屏幕上第 $n$ 級亮紋與中央的線性距離 $y_n$ 時，**切忌亂用 $\\Delta y = \\frac{\\lambda D}{d}$！** 因為光柵偏折角 $\\theta$ 通常很大（不滿足 $\\sin\\theta \\approx \\tan\\theta$），必須先用 $d\\sin\\theta = n\\lambda$ 求 $\\theta$，再用精確幾何式 **$y_n = D\\tan\\theta$**！",
            en: "NEVER use $\\Delta y = \\lambda D / d$ for diffraction gratings! Angles are large ($\\sin\\theta \\not\\approx \\tan\\theta$). Always find $\\theta$ from $d\\sin\\theta = n\\lambda$, then use exact **$y_n = D\\tan\\theta$**!"
          }
        },
        {
          id: "b3b-1-3",
          code: "1.3",
          title: { zh: "電磁波譜（Electromagnetic Spectrum）", en: "Electromagnetic Spectrum" },
          summary: {
            zh: "所有電磁波均為**橫波**，由相互垂直振盪的電場與磁場組成，無需介質，在真空中皆以相同光速 **$c = 3.00 \\times 10^8\\text{ m s}^{-1}$** 傳播。",
            en: "All electromagnetic waves are **transverse waves** (oscillating perpendicular $\\vec{E}$ and $\\vec{B}$ fields), require no medium, and travel in vacuum at **$c = 3.00 \\times 10^8\\text{ m s}^{-1}$**."
          },
          table: {
            headers: [
              { zh: "波段（按波長由長至短 / 頻率由低至高）", en: "Band (Long $\\lambda$ / Low $f$ → Short $\\lambda$ / High $f$)" },
              { zh: "典型波長範圍", en: "Typical $\\lambda$" },
              { zh: "主要應用與特性", en: "Key Applications & Properties" }
            ],
            rows: [
              [{ zh: "無線電波 Radio waves", en: "Radio waves" }, { zh: "$> 0.1\\text{ m}$", en: "$> 0.1\\text{ m}$" }, { zh: "電台/電視廣播、易繞射繞過山丘建築物", en: "TV/radio broadcasting; diffracts well around hills/buildings" }],
              [{ zh: "微波 Microwaves", en: "Microwaves" }, { zh: "$10^{-3} - 0.1\\text{ m}$", en: "$10^{-3} - 0.1\\text{ m}$" }, { zh: "雷達、衛星通訊（穿透電離層）、微波爐（加熱水分子）", en: "Radar, satellite links (penetrates ionosphere), microwave ovens" }],
              [{ zh: "紅外線 Infra-red (IR)", en: "Infra-red (IR)" }, { zh: "$700\\text{ nm} - 1\\text{ mm}$", en: "$700\\text{ nm} - 1\\text{ mm}$" }, { zh: "遙控器、紅外熱像儀、夜視、光纖通訊", en: "Remote controls, thermal imaging, optical fibres" }],
              [{ zh: "**可見光 Visible light**（紅 700 nm → 紫 400 nm）", en: "**Visible light** (Red 700 nm → Violet 400 nm)" }, { zh: "$400 - 700\\text{ nm}$", en: "$400 - 700\\text{ nm}$" }, { zh: "人類視覺、攝影、光合作用", en: "Human vision, photography, photosynthesis" }],
              [{ zh: "紫外線 Ultra-violet (UV)", en: "Ultra-violet (UV)" }, { zh: "$10 - 400\\text{ nm}$", en: "$10 - 400\\text{ nm}$" }, { zh: "驗鈔（螢光效應）、殺菌消毒、合成維生素 D（過量致癌）", en: "Banknote verification (fluorescence), sterilization, vitamin D" }],
              [{ zh: "X 射線 X-rays", en: "X-rays" }, { zh: "$0.01 - 10\\text{ nm}$", en: "$0.01 - 10\\text{ nm}$" }, { zh: "醫學骨骼造影、機場行李安檢、晶體結構分析（具電離性）", en: "Medical imaging, security scanning, crystallography (ionizing)" }],
              [{ zh: "伽瑪射線 Gamma rays ($\\gamma$)", en: "Gamma rays ($\\gamma$)" }, { zh: "$< 0.01\\text{ nm}$", en: "$< 0.01\\text{ nm}$" }, { zh: "核衰變釋出、放射治療殺滅癌細胞、醫療器材消毒（穿透力最強）", en: "Nuclear decay, radiotherapy, sterilizing instruments (most penetrating)" }]
            ]
          },
          points: [
            {
              zh: "**重要記憶口訣**：**「無微紅可紫 X 伽」**（R-M-I-V-U-X-G）— 波長遞減、頻率遞增、光子能量 $E = hf$ 遞增、穿透力普遍增強！",
              en: "**Mnemonic**: **R**adio – **M**icrowave – **I**R – **V**isible – **U**V – **X**-ray – **G**amma: $\\lambda$ decreases, $f$ and photon energy $E = hf$ increase!"
            }
          ]
        }
      ]
    },
    {
      id: "b3b-ch2",
      code: "Ch 2",
      title: { zh: "駐波與聲波", en: "Stationary Waves and Sound Waves" },
      topics: [
        {
          id: "b3b-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "駐波（Stationary Waves）形成、節點/腹點與弦上諧波", en: "Stationary Waves: Nodes, Antinodes, Phase & Harmonics" },
          summary: {
            zh: "**駐波（Stationary / Standing Wave）** 由兩列**振幅、頻率、波長完全相同**但**傳播方向相反**的行波疊加形成。波形原地振動、**不淨傳遞能量**。",
            en: "A **stationary (standing) wave** forms from the superposition of two waves of **identical amplitude, frequency, and wavelength** travelling in **opposite directions**. The profile does not advance and **no net energy is transferred**."
          },
          points: [
            {
              zh: "**節點（Nodes, N）與腹點（Antinodes, A）**：\n• **節點 N**：永遠靜止（振幅恆為 $0$）；**腹點 A**：振幅最大（$2A_{\\text{progressive}}$）。\n• 相鄰兩個節點（或兩個腹點）間距 $= \\frac{\\lambda}{2}$；相鄰節點與腹點間距 $= \\frac{\\lambda}{4}$。",
              en: "**Nodes (N) & Antinodes (A)**:\n• **Nodes**: permanently zero displacement; **Antinodes**: maximum amplitude ($2A$).\n• Distance between adjacent N–N (or A–A) $= \\frac{\\lambda}{2}$; adjacent N–A $= \\frac{\\lambda}{4}$."
            },
            {
              zh: "**駐波相位規則（DSE 高頻 MC！）**：\n• 位於**同一波環（adjacent nodes 之間）** 的所有質點**完全同相（in phase）**（同時達最高點、同時過平衡位置），只是振幅不同！\n• 位於**相鄰波環（隔著一個節點）** 的質點**完全反相（in antiphase）**！\n• 對比行波：行波所有質點振幅相同，但相鄰質點相位連續變化。",
              en: "**Stationary Wave Phase Rules (High-Yield MCQ!)**:\n• All particles within the **same loop** (between two adjacent nodes) vibrate **in phase** (different amplitudes).\n• Particles in **adjacent loops** (separated by one node) vibrate **in antiphase**!\n• Contrast with progressive waves: all particles have the same amplitude, while phase varies continuously."
            },
            {
              zh: "**兩端固定弦線的共振諧波（長度 $L$）**：兩端必為節點，故 $L = n\\frac{\\lambda_n}{2} \\Rightarrow \\lambda_n = \\frac{2L}{n}$，共振頻率 $f_n = \\frac{v}{\\lambda_n} = n\\frac{v}{2L} = n f_1$（$n = 1, 2, 3\\dots$，其中 $f_1$ 為基頻 fundamental frequency，第 1 泛音 $= 2f_1$）。增加弦張力或換用更幼/更輕的弦會令波速 $v$ 增大、基頻 $f_1$ 上升。",
              en: "**Harmonics on a Stretched String (Fixed Ends, length $L$)**: Both ends are nodes → $L = n\\frac{\\lambda_n}{2} \\Rightarrow f_n = n\\frac{v}{2L} = n f_1$ ($n = 1, 2, 3\\dots$; $f_1$ = fundamental / 1st harmonic). Greater string tension or lighter string increases $v$ and $f_1$."
            }
          ],
          formulaIds: ["f-b3b-standing"],
          diagramIds: ["diag-stationary-wave"]
        },
        {
          id: "b3b-2-2",
          code: "2.2",
          highYield: true,
          title: { zh: "聲波本質、樂音三要素、示波器（CRO）與超聲波", en: "Sound Waves, Musical Notes, CRO Waveforms & Ultrasound" },
          summary: {
            zh: "**聲波（Sound Wave）** 是機械**縱波**，須靠介質傳播（真空中無法傳聲）。聲速取決於介質：$v_{\\text{固體}} > v_{\\text{液體}} > v_{\\text{氣體}}$（常溫空氣約 $340\\text{ m s}^{-1}$；氣溫越高空氣聲速越快）。",
            en: "**Sound** is a mechanical **longitudinal wave** requiring a medium (cannot travel in vacuum). Speed order: $v_{\\text{solid}} > v_{\\text{liquid}} > v_{\\text{gas}}$ (~$340\\text{ m s}^{-1}$ in air at room temperature; faster in warmer air)."
          },
          points: [
            {
              zh: "**縱波位移-距離圖（$s$-$x$ 圖）識別密部（C）與疏部（R）—— 超高頻必考！**：\n設向右位移為正（$+s$）、向左為負（$-s$）：\n• 若某平衡位置（$s = 0$）**左側質點向右移（$+s$）、右側質點向左移（$-s$）**，即圖線由正過零變負（**負斜率零點**），粒子向中央擠壓 → **密部（Compression, C）**（壓強最高）！\n• 若左側向左移（$-s$）、右側向右移（$+s$），即圖線由負過零變正（**正斜率零點**），粒子向兩側散開 → **疏部（Rarefaction, R）**（壓強最低）！",
              en: "**Identifying Compressions (C) & Rarefactions (R) on a Displacement-Distance ($s$-$x$) Graph (Super High-Yield!)**:\nTaking rightward displacement as $+$:\n• At a zero-crossing where left particles shift right ($+$) and right particles shift left ($-$) — **negative slope crossing zero** — particles crowd together → **Compression (C)** (highest pressure)!\n• At a **positive slope zero-crossing**, particles pull apart → **Rarefaction (R)** (lowest pressure)!"
            },
            {
              zh: "**樂音三要素與示波器（CRO）圖象**：\n1. **響度（Loudness）** ↔ **振幅（Amplitude）**（分貝 $\\text{dB}$ 越高越響，每增 $10\\text{ dB}$ 聲強增為 10 倍）。\n2. **音調（Pitch）** ↔ **基頻（Frequency $f$）**（CRO 橫向格數越密、週期 $T$ 越短，音調越高）。\n3. **音色 / 音品（Quality / Timbre）** ↔ **波形形狀（Waveform / 泛音組合）**（鋼琴與小提琴奏同一音符時基頻相同，但波形不同）。",
              en: "**Musical Notes & CRO Display**:\n1. **Loudness** ↔ **Amplitude** (sound intensity level in decibels $\\text{dB}$; $+10\\text{ dB} \\equiv 10\\times$ intensity).\n2. **Pitch** ↔ **Frequency $f$** (shorter period $T$ on CRO time-base = higher pitch).\n3. **Quality (Timbre)** ↔ **Waveform shape** (different harmonic/overtone mixtures)."
            },
            {
              zh: "**人耳聽覺範圍與超聲波**：人耳可聽頻率為 **$20\\text{ Hz} - 20\\text{ kHz}$**；高於 $20\\text{ kHz}$ 為**超聲波（Ultrasound）**（波長短、方向性強、能量較高，用於聲納測距 $d = \\frac{vt}{2}$、胎兒超聲掃描、金屬探傷）。日常聲波波長約數十厘米至數米，與門窗寬度相若，故**繞射明顯**（未見其人先聞其聲）。",
              en: "**Audible Range & Ultrasound**: Humans hear **$20\\text{ Hz} - 20\\text{ kHz}$**. Above $20\\text{ kHz}$ is **ultrasound** (short $\\lambda$, less diffraction → directional beam for sonar $d = \\frac{vt}{2}$, medical scanning, flaw detection). Audible sound has $\\lambda \\sim 0.02 - 17\\text{ m}$, comparable to doorways → strong diffraction!"
            }
          ],
          formulaIds: ["f-b3b-echo"],
          diagramIds: ["diag-sound-cro"]
        }
      ]
    }
  ]
});
