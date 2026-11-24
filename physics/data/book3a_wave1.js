/* ==========================================================================
   Book 3A: Wave Motion I — Nature of Waves & Geometrical Optics (Paper 1)
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book3a",
  paper: "paper1",
  code: "Book 3A",
  color: "#0891b2",
  title: { zh: "Book 3A：波動 I（波動性質與幾何光學）", en: "Book 3A: Wave Motion I (Waves & Geometrical Optics)" },
  subtitle: {
    zh: "波的本質與波動圖像 · 水波槽四大現象 · 光的反射與折射 · 全內反射 · 凸透鏡與凹透鏡",
    en: "Nature & Graphs of Waves · Ripple Tank Phenomena · Reflection & Refraction of Light · TIR · Lenses"
  },
  chapters: [
    {
      id: "b3a-ch1",
      code: "Ch 1",
      title: { zh: "波的本質、波動圖像與基本現象", en: "Nature of Waves, Wave Graphs & Wave Phenomena" },
      topics: [
        {
          id: "b3a-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "橫波與縱波、y-x 與 y-t 圖像及質點方向判斷", en: "Transverse vs Longitudinal Waves, y-x & y-t Graphs" },
          summary: {
            zh: "**行波（Travelling / Progressive Wave）** 傳播**能量與振動形態**，而不淨遷移介質質點本身。基本波方程 $v = f\\lambda$；**波速 $v$ 只取決於介質性質**，而**頻率 $f$ 只取決於波源**！",
            en: "A **travelling wave** transfers **energy and disturbance** without net transport of medium particles. Wave equation: $v = f\\lambda$. **Wave speed $v$ depends ONLY on the medium**, while **frequency $f$ depends ONLY on the source**!"
          },
          points: [
            {
              zh: "**橫波（Transverse Wave）**：質點振動方向**垂直**於波傳播方向（例：水波、繩波、所有電磁波），具波峰（crest）與波谷（trough）。\n**縱波（Longitudinal Wave）**：質點振動方向**平行**於波傳播方向（例：聲波、彈簧疏密波），具密部（compression）與疏部（rarefaction）。",
              en: "**Transverse wave**: Particle vibration is **perpendicular** to wave propagation (water, string, all EM waves — crests & troughs).\n**Longitudinal wave**: Particle vibration is **parallel** to wave propagation (sound, slinky — compressions & rarefactions)."
            },
            {
              zh: "**$y$-$x$ 波形圖（Displacement-Distance）vs $y$-$t$ 振動圖（Displacement-Time）**：\n• $y$-$x$ 圖猶如某一時刻的「**快照（snapshot）**」，橫軸讀出**波長 $\\lambda$**。\n• $y$-$t$ 圖追蹤**單一質點**隨時間的振動，橫軸讀出**週期 $T$**（$f = 1/T$）。\n• 兩者縱軸最大值皆為**振幅 $A$**。",
              en: "**$y$-$x$ Graph vs $y$-$t$ Graph**:\n• $y$-$x$ graph is a **snapshot** of all particles at one instant → horizontal peak-to-peak gives **wavelength $\\lambda$**.\n• $y$-$t$ graph tracks **one single particle** over time → horizontal peak-to-peak gives **period $T$** ($f = 1/T$).\n• Both give **amplitude $A$** on the vertical axis."
            },
            {
              zh: "**如何從 $y$-$x$ 圖秒判質點瞬時運動方向（平移法）**：將整個波形沿**波傳播方向微微向前平移一小段 $\\Delta x$** 畫出下一瞬間的虛線波形；原點質點要走到虛線位置，便立刻知道它正在**向上**還是**向下**運動！（波峰與波谷處瞬時速度為零，平衡位置處速率最大！）",
              en: "**Instant Particle Motion Trick (Shift Method)**: Sketch the waveform shifted slightly forward in the **direction of wave travel**. Comparing each particle's current position to the shifted curve immediately shows whether it moves **up** or **down**! (Speed = 0 at crest/trough; max speed at equilibrium position.)"
            },
            {
              zh: "**相位關係（Phase Relationship）**：兩質點相距 $n\\lambda$（$n=1,2,3\\dots$）為**同相（in phase）**（運動狀態完全相同）；相距 $(n - \\frac{1}{2})\\lambda$（如 $0.5\\lambda, 1.5\\lambda$）為**反相（in antiphase）**（位移與速度永遠相反）。",
              en: "**Phase Relationship**: Particles separated by $n\\lambda$ vibrate **in phase**; separated by $(n - \\frac{1}{2})\\lambda$ vibrate **in antiphase** (opposite displacement & velocity at all times)."
            }
          ],
          formulaIds: ["f-b3a-wave", "f-b3a-period"],
          diagramIds: ["diag-wave-graphs"]
        },
        {
          id: "b3a-1-2",
          code: "1.2",
          highYield: true,
          title: { zh: "水波槽四大現象：反射、折射、繞射與干涉", en: "Ripple Tank Phenomena: Reflection, Refraction, Diffraction & Interference" },
          summary: {
            zh: "波傳播時表現出四大普遍特性：**反射（Reflection）**、**折射（Refraction）**、**繞射（Diffraction）** 與**干涉（Interference）**。當中**繞射與干涉是波獨有的特徵**（粒子無法產生）。",
            en: "All waves exhibit four phenomena: **Reflection**, **Refraction**, **Diffraction**, and **Interference**. In particular, **diffraction and interference are signature properties unique to waves**."
          },
          points: [
            {
              zh: "**水波折射（深水 → 淺水）**：水波進入淺水區時**波速 $v$ 減慢**，因波源**頻率 $f$ 不變**，故由 $v = f\\lambda$ 知**波長 $\\lambda$ 縮短**（波前變密），傳播方向**偏向法線（bends towards normal）**；反之淺水進深水則 $v\\uparrow, \\lambda\\uparrow$，偏離法線。",
              en: "**Water Wave Refraction (Deep → Shallow)**: Wave **slows down ($v\\downarrow$)** in shallower water; since **$f$ stays constant**, **$\\lambda$ decreases** (wavefronts closer together) and wave **bends towards the normal**. Reverse for shallow → deep."
            },
            {
              zh: "**繞射（Diffraction）**：波繞過障礙物邊緣或穿過狹縫後向外散開的現象。**繞射程度取決於波長 $\\lambda$ 與縫寬 $a$ 的比值**：當縫寬 **$a \\le \\lambda$**（縫越窄或波長越長）時，繞射最顯著（幾乎呈半圓形波前）。繞射前後 **$v, f, \\lambda$ 均不變**，但能量分散使振幅減小。",
              en: "**Diffraction**: Spreading of waves around obstacles or through gaps. **More pronounced when gap width $a$ is comparable to or smaller than $\\lambda$** (narrower gap or longer $\\lambda$). Note: **$v, f, \\lambda$ are unchanged** during diffraction, though amplitude drops as energy spreads."
            },
            {
              zh: "**疊加原理與雙源干涉（Interference）**：兩列波相遇時，合位移等於各波單獨引起的位移的矢量和（相遇後互不干擾繼續傳播）。若兩波源**相干（coherent：頻率相同且相位差恆定）**，則形成穩定的**相長干涉（constructive，腹線 antinodal lines）** 與**相消干涉（destructive，節線 nodal lines）**。",
              en: "**Superposition & Interference**: Resultant displacement equals vector sum of individual displacements. Two **coherent** sources (same frequency & constant phase difference) produce stationary **antinodal lines** (constructive) and **nodal lines** (destructive)."
            },
            {
              zh: "**程差條件（Path Difference $\\Delta = |S_1 P - S_2 P|$）**：\n• **同相波源（In-phase sources）**：$\\Delta = n\\lambda$ → 相長干涉（振幅 $2A$）；$\\Delta = (n + \\frac{1}{2})\\lambda$ → 相消干涉（振幅 $0$）。\n• **反相波源（Antiphase sources）**：條件正好對調！\n• **干涉條紋 / 腹線數目變化**：增加波源間距 $a$ 或縮短波長 $\\lambda$（提高頻率 $f$），腹線與節線變密（數目增多）。",
              en: "**Path Difference Condition ($\\Delta = |S_1 P - S_2 P|$)**:\n• **In-phase sources**: $\\Delta = n\\lambda$ → constructive; $\\Delta = (n+\\frac{1}{2})\\lambda$ → destructive ($n = 0,1,2\\dots$).\n• **Antiphase sources**: Conditions swap!\n• Increasing source separation $a$ or decreasing $\\lambda$ (higher $f$) packs more nodal/antinodal lines closer together."
            }
          ],
          formulaIds: ["f-b3a-path-diff"],
          diagramIds: ["diag-ripple-tank"]
        }
      ]
    },
    {
      id: "b3a-ch2",
      code: "Ch 2",
      title: { zh: "光的反射、折射與全內反射", en: "Reflection, Refraction & Total Internal Reflection" },
      topics: [
        {
          id: "b3a-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "平面鏡成像、斯涅耳定律（Snell's Law）與全內反射（TIR）", en: "Plane Mirror, Snell's Law & Total Internal Reflection" },
          summary: {
            zh: "光在不同介質界面滿足**斯涅耳定律** $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$，折射率定義為 $n = \\frac{c}{v}$。當光由**光密介質射向光疏介質**且入射角**大於臨界角 $C$** 時，發生**全內反射（Total Internal Reflection）**。",
            en: "At a boundary, light obeys **Snell's Law**: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$, where refractive index $n = \\frac{c}{v}$. When light travels from an **optically denser to less dense medium** with angle of incidence **greater than critical angle $C$**, **Total Internal Reflection (TIR)** occurs."
          },
          points: [
            {
              zh: "**平面鏡成像特性**：虛像（virtual）、正立（erect）、橫向倒置（laterally inverted）、與物等大、**物距 = 像距**，物像連線垂直於鏡面。能看見自己全身所需最小平面鏡高度 = 身高的一半（與離鏡距離無關！）。",
              en: "**Plane Mirror Image**: Virtual, erect, laterally inverted, same size, **object distance = image distance**, line joining object & image $\\perp$ mirror. Minimum mirror height to see full body = half your height (independent of distance!)."
            },
            {
              zh: "**折射率與波速/波長**：$n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda_{\\text{med}}}$（光進入玻璃時 $f$ 不變，$v$ 與 $\\lambda$ 變小）。**色散（Dispersion）**：同一玻璃對**紫光折射率最大**（減速最多、偏折最大、臨界角最小），對**紅光折射率最小**（偏折最小、臨界角最大）！",
              en: "**Refractive Index & Dispersion**: $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda_{\\text{med}}}$ ($f$ constant). In glass, **violet light has highest $n$** (bends most, smallest critical angle $C$) while **red light has lowest $n$** (bends least, largest $C$)."
            },
            {
              zh: "**全內反射兩大必要條件（DSE 必考默寫）**：\n1. 光線必須由**光密介質（較高 $n_1$）** 射向**光疏介質（較低 $n_2$）**；\n2. 入射角 $\\theta_1$ 必須**大於臨界角 $C$**，其中 $\\sin C = \\frac{n_2}{n_1}$（若射向空氣 $n_2 = 1$，則 $\\sin C = \\frac{1}{n}$）。",
              en: "**Two Necessary Conditions for TIR (Must Memorize!)**:\n1. Light travels from an **optically denser ($n_1$) to a less dense ($n_2$) medium**;\n2. Angle of incidence $\\theta_1$ is **greater than critical angle $C$**, where $\\sin C = \\frac{n_2}{n_1}$ (for air, $\\sin C = \\frac{1}{n}$)."
            },
            {
              zh: "**全內反射重要應用**：(1) **光纖通訊（Optical Fibres）**：纖芯折射率高於外層包層（$n_{\\text{core}} > n_{\\text{cladding}}$），高速低損耗傳輸、抗電磁干擾；(2) **直角等腰玻璃稜鏡**（$C \\approx 42^\\circ < 45^\\circ$，用於潛望鏡與雙筒望遠鏡，比鍍銀鏡更清晰且無重影）；(3) 鑽石閃爍（$n \\approx 2.42, C \\approx 24.4^\\circ$ 極小）；(4) **海市蜃樓（Mirage）** 與視深（Apparent depth $\\approx \\frac{\\text{real depth}}{n}$）。",
              en: "**TIR Applications**: (1) **Optical fibres** ($n_{\\text{core}} > n_{\\text{cladding}}$; high bandwidth, low attenuation, immune to EM interference); (2) **45°-90°-45° glass prisms** ($C \\approx 42^\\circ < 45^\\circ$, no double images unlike silvered mirrors); (3) Sparkling diamonds ($n \\approx 2.42, C \\approx 24.4^\\circ$); (4) **Mirages** & apparent depth."
            }
          ],
          formulaIds: ["f-b3a-snell", "f-b3a-n", "f-b3a-crit"],
          diagramIds: ["diag-tir-refraction"],
          trap: {
            zh: "計算入射角與折射角時，必須量度光線與**法線（normal）** 的夾角，切勿誤用光線與介質界面的夾角！另外，即使發生正常折射（$\\theta_1 < C$），界面處亦總會有**部分反射（partial reflection）** 同時發生。",
            en: "Angles in Snell's law are ALWAYS measured from the **normal**, NEVER from the surface! Also note that partial reflection still occurs when $\\theta_1 < C$."
          }
        }
      ]
    },
    {
      id: "b3a-ch3",
      code: "Ch 3",
      title: { zh: "透鏡（Lenses）與透鏡公式", en: "Lenses and the Thin Lens Formula" },
      topics: [
        {
          id: "b3a-3-1",
          code: "3.1",
          highYield: true,
          title: { zh: "凸透鏡與凹透鏡光路圖、放大率與實正負約定", en: "Convex & Concave Lens Ray Diagrams, Magnification & Sign Convention" },
          summary: {
            zh: "**凸透鏡（Convex / Converging lens）** 匯聚光線，焦距 $f > 0$；**凹透鏡（Concave / Diverging lens）** 發散光線，焦距 $f < 0$。薄透鏡成像滿足 $\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$ 及線性放大率 $m = \\frac{h_i}{h_o} = \\frac{|v|}{u}$。",
            en: "**Convex (converging) lens** converges rays ($f > 0$); **Concave (diverging) lens** diverges rays ($f < 0$). Thin lens formula: $\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}$, linear magnification $m = \\frac{h_i}{h_o} = \\frac{|v|}{u}$."
          },
          table: {
            headers: [
              { zh: "透鏡與物距 $u$", en: "Lens & Object Distance $u$" },
              { zh: "像距 $v$ 與位置", en: "Image Position $v$" },
              { zh: "像的性質", en: "Nature of Image" },
              { zh: "常見應用", en: "Application" }
            ],
            rows: [
              [{ zh: "凸透鏡：$u = \\infty$", en: "Convex: $u = \\infty$" }, { zh: "$v = f$（異側焦點）", en: "$v = f$ (opposite side)" }, { zh: "實、倒立、極度縮小", en: "Real, inverted, diminished (point)" }, { zh: "遠物對焦測焦距", en: "Measuring $f$ of distant object" }],
              [{ zh: "凸透鏡：$u > 2f$", en: "Convex: $u > 2f$" }, { zh: "$f < v < 2f$（異側）", en: "$f < v < 2f$" }, { zh: "實、倒立、縮小 ($m < 1$)", en: "Real, inverted, diminished" }, { zh: "照相機、人眼", en: "Camera, human eye" }],
              [{ zh: "凸透鏡：$u = 2f$", en: "Convex: $u = 2f$" }, { zh: "$v = 2f$（異側）", en: "$v = 2f$" }, { zh: "實、倒立、等大 ($m = 1$)", en: "Real, inverted, same size" }, { zh: "1:1 影印機（物像最小距離 $4f$）", en: "Photocopier (min $u+v = 4f$)" }],
              [{ zh: "凸透鏡：$f < u < 2f$", en: "Convex: $f < u < 2f$" }, { zh: "$v > 2f$（異側）", en: "$v > 2f$" }, { zh: "實、倒立、放大 ($m > 1$)", en: "Real, inverted, magnified" }, { zh: "投影機", en: "Projector" }],
              [{ zh: "凸透鏡：$u = f$", en: "Convex: $u = f$" }, { zh: "$v = \\infty$", en: "$v = \\infty$" }, { zh: "平行出射光，於無窮遠成像", en: "Parallel rays; image at infinity" }, { zh: "探照燈、聚光燈", en: "Spotlight" }],
              [{ zh: "凸透鏡：$u < f$", en: "Convex: $u < f$" }, { zh: "同側（$v < 0$，且 $|v| > u$）", en: "Same side ($v < 0$, $|v| > u$)" }, { zh: "**虛、正立、放大** ($m > 1$)", en: "**Virtual, erect, magnified**" }, { zh: "放大鏡（Magnifying glass）", en: "Magnifying glass" }],
              [{ zh: "**凹透鏡（任何 $u$）**", en: "**Concave (any $u$)**" }, { zh: "同側，$0 < |v| < |f|$（$v < 0$）", en: "Same side ($v < 0, |v| < |f|$)" }, { zh: "**永遠虛、正立、縮小** ($m < 1$)", en: "**Always virtual, erect, diminished**" }, { zh: "近視眼鏡、防盜貓眼", en: "Short-sightedness glasses, peephole" }]
            ]
          },
          points: [
            {
              zh: "**實正負約定（Real-is-Positive Convention）**：實物 $u > 0$；實像 $v > 0$，**虛像 $v < 0$**；凸透鏡 $f > 0$，**凹透鏡 $f < 0$**。",
              en: "**Real-is-Positive Sign Convention**: Real object $u > 0$; real image $v > 0$, **virtual image $v < 0$**; convex lens $f > 0$, **concave lens $f < 0$**."
            },
            {
              zh: "**遮擋透鏡一半（經典必考題！）**：若用黑紙遮蓋凸透鏡上半部，**屏幕上的像依然完整呈現，位置與大小完全不變，但亮度減半！** 因為物體每一點皆向整個透鏡表面發出無數光線，下半部透鏡仍可將所有物點匯聚成完整像。",
              en: "**Covering Half a Lens (Classic Exam Q!)**: Covering the top half of a convex lens leaves a **complete image of unchanged size and position, only dimmer (half brightness)**, because rays from every point on the object still pass through the uncovered half!"
            },
            {
              zh: "**$\\frac{1}{v}$ 對 $\\frac{1}{u}$ 線性圖（實驗題必考）**：改寫 $\\frac{1}{v} = -\\frac{1}{u} + \\frac{1}{f}$，圖線為斜率 $-1$ 的直線，**$x$ 截距與 $y$ 截距均等於 $\\frac{1}{f}$**！亦可畫 $m$ 對 $v$ 圖：$m = \\frac{v}{f} - 1$（斜率 $= \\frac{1}{f}$，$x$ 截距 $= f$）。",
              en: "**Linearizing Lens Data**: $\\frac{1}{v} = -\\frac{1}{u} + \\frac{1}{f}$ gives a line of slope $-1$ with both **$x$- and $y$-intercepts $= \\frac{1}{f}$**! Alternatively, $m = \\frac{v}{f} - 1$ has slope $1/f$."
            }
          ],
          formulaIds: ["f-b3a-lens", "f-b3a-mag", "f-b3a-lens-m"],
          diagramIds: ["diag-lenses-rays"],
          tip: {
            zh: "凡看見題目給出「**正立放大像**」，必定是**凸透鏡（$u < f$）的虛像**；「**正立縮小像**」必定是**凹透鏡的虛像**；「**倒立像**」必定是**凸透鏡的實像**！",
            en: "Instant ID rule: **Erect + magnified** → convex lens ($u<f$, virtual); **Erect + diminished** → concave lens (virtual); **Inverted** → convex lens (real)!"
          }
        }
      ]
    }
  ]
});
