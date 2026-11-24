/* ==========================================================================
   Book 2: Force and Motion (Paper 1 Compulsory Part)
   ========================================================================== */
window.PHY_BOOKS.push({
  id: "book2",
  paper: "paper1",
  code: "Book 2",
  color: "#2563eb",
  title: { zh: "Book 2：力和運動", en: "Book 2: Force and Motion" },
  subtitle: {
    zh: "運動學與圖像 · 牛頓運動定律 · 力矩與平衡 · 功、能量與功率 · 動量 · 拋體 · 圓周運動 · 萬有引力",
    en: "Kinematics & Graphs · Newton's Laws · Moment & Equilibrium · Work/Energy/Power · Momentum · Projectile · Circular Motion · Gravitation"
  },
  chapters: [
    {
      id: "b2-ch1",
      code: "Ch 1",
      title: { zh: "運動學與運動圖像", en: "Kinematics and Motion Graphs" },
      topics: [
        {
          id: "b2-1-1",
          code: "1.1",
          highYield: true,
          title: { zh: "標量與矢量、運動圖像（s-t, v-t, a-t）與勻加速方程", en: "Scalars vs Vectors, Motion Graphs & SUVAT Equations" },
          summary: {
            zh: "**位移（displacement $s$）、速度（velocity $v$）、加速度（acceleration $a$）** 均為**矢量（vectors）**，兼具大小與方向。運動圖像的**斜率（slope）** 與**線下面積（area）** 是 Paper 1 必考工具；四條勻加速運動方程（SUVAT）只適用於**恆定加速度**直線運動。",
            en: "**Displacement ($s$), velocity ($v$), and acceleration ($a$)** are **vectors** with magnitude and direction. **Slope** and **area** of motion graphs are core Paper 1 tools; the four kinematic equations (SUVAT) apply **only to uniform acceleration** along a straight line."
          },
          points: [
            {
              zh: "**圖像斜率與面積口訣**：\n• $s$-$t$ 圖：**斜率 = 瞬時速度 $v$**（曲線切線斜率）；水平線代表靜止。\n• $v$-$t$ 圖：**斜率 = 加速度 $a$**；**圖線與時間軸所圍有符號面積 = 位移 $s$**（橫軸上方為正位移，下方為負位移；總路程為各面積絕對值之和）。\n• $a$-$t$ 圖：**線下面積 = 速度變化量 $\\Delta v = v - u$**。",
              en: "**Graph Slope & Area Rules**:\n• $s$-$t$ graph: **Slope = instantaneous velocity $v$**; horizontal line = at rest.\n• $v$-$t$ graph: **Slope = acceleration $a$**; **signed area under curve = displacement $s$** (above axis = $+s$, below = $-s$; total distance = sum of $|\\text{areas}|$).\n• $a$-$t$ graph: **Area under curve = change in velocity $\\Delta v = v - u$**."
            },
            {
              zh: "**自由落體與垂直上拋（忽略空氣阻力）**：整個過程加速度恆為向下 $g = 9.81\\text{ m s}^{-2}$（即使在最高點 $v = 0$，**加速度依然是向下 $9.81\\text{ m s}^{-2}$，絕非零！**）。上升時間 = 下降時間，同一高度上升速率 = 下降速率。",
              en: "**Free Fall & Vertical Projection (no air resistance)**: Acceleration is constantly $g = 9.81\\text{ m s}^{-2}$ downwards throughout — **even at the highest point where $v = 0$, $a$ is still $9.81\\text{ m s}^{-2}$ downwards, NOT zero!**"
            },
            {
              zh: "**彈跳球（Bouncing Ball）$v$-$t$ 圖經典考題**：空中下落與上升段均為**平行斜線**（斜率同為 $-g$ 或 $+g$）；觸地反彈瞬間速度急劇反號（極陡斜段）；因非彈性碰撞損失動能，每次反彈後最大速率與高度遞減，落地間隔時間縮短。",
              en: "**Bouncing Ball $v$-$t$ Graph**: Free-flight segments are **parallel straight lines** (same slope $\\pm g$); during brief ground contact $v$ reverses rapidly; due to energy loss on impact, rebound speed, max height, and time between bounces decrease each bounce."
            },
            {
              zh: "**考慮空氣阻力（Terminal Velocity 終端速度）**：物體下落加速時，空氣阻力隨速率增大而增加 → 淨向下力 $mg - f$ 減小 → **加速度 $a$ 減小**（$v$-$t$ 圖斜率變平緩，但速率仍在增加！），直至 $f = mg$ 時 $a = 0$，物體以恆定**終端速度**勻速下落。",
              en: "**With Air Resistance (Terminal Velocity)**: As falling speed rises, air resistance $f$ increases → net downward force $mg - f$ decreases → **$a$ decreases** ($v$-$t$ curve bends flatter while speed still rises!) until $f = mg$, $a = 0$, falling at constant **terminal velocity**."
            }
          ],
          formulaIds: ["f-b2-suvat1", "f-b2-suvat2", "f-b2-suvat3", "f-b2-suvat4"],
          diagramIds: ["diag-motion-graphs"],
          trap: {
            zh: "千萬別把「加速度減小」誤當成「減速（deceleration）」！當 $a$ 與 $v$ 同向但 $a$ 數值變小（如受空氣阻力的下落物體），物體仍在**加速**，只是增速變慢！減速是指 $a$ 與 $v$ 方向相反。",
            en: "Do NOT confuse 'decreasing acceleration' with 'deceleration'! When $a$ has the same direction as $v$ but shrinks in magnitude, the object still **speeds up** (just less rapidly). Deceleration means $a$ opposes $v$."
          }
        }
      ]
    },
    {
      id: "b2-ch2",
      code: "Ch 2",
      title: { zh: "力、牛頓運動定律與平衡", en: "Forces, Newton's Laws and Equilibrium" },
      topics: [
        {
          id: "b2-2-1",
          code: "2.1",
          highYield: true,
          title: { zh: "牛頓三大運動定律、隔離體圖（FBD）與視重", en: "Newton's Three Laws, Free-Body Diagrams & Apparent Weight" },
          summary: {
            zh: "**牛頓第一定律（慣性）** 定義力是改變運動狀態的原因；**第二定律** $F_{\\text{net}} = ma = \\frac{\\Delta p}{\\Delta t}$ 連繫淨力與加速度；**第三定律** 指出作用力與反作用力大小相等、方向相反、**分別作用於兩個不同物體上**且屬同一性質的力。",
            en: "**Newton's 1st Law (Inertia)**: Force changes state of motion; **2nd Law**: $F_{\\text{net}} = ma = \\frac{\\Delta p}{\\Delta t}$; **3rd Law**: Action-reaction pairs are equal in magnitude, opposite in direction, of the same nature, and **act on TWO DIFFERENT bodies**."
          },
          points: [
            {
              zh: "**區分平衡力 vs 作用力與反作用力（極高頻 MC 陷阱）**：置於水平桌面的書本所受「重力 $W$（地球拉書）」與「桌面支持力 $R$（桌面撐書）」作用在**同一物體（書本）** 上，屬於**平衡力（balanced forces）**，**並非**牛頓第三定律力對！重力 $W$ 的反作用力是「書本對地球向上的萬有引力」；支持力 $R$ 的反作用力是「書本壓向桌面的力」。",
              en: "**Balanced Forces vs Action-Reaction Pair (Classic MCQ Trap!)**: Weight $W$ (Earth on book) and Normal reaction $R$ (table on book) act on the **SAME object (book)** → they are **balanced forces**, NOT an action-reaction pair! Reaction to $W$ is book pulling Earth up; reaction to $R$ is book pushing table down."
            },
            {
              zh: "**斜面問題（Inclined Plane）**：將重力 $mg$ 分解為沿斜面向下 $mg\\sin\\theta$ 及垂直斜面向下 $mg\\cos\\theta$。垂直方向平衡得法向反作用力 $R = mg\\cos\\theta$；沿斜面淨力 $F_{\\text{net}} = mg\\sin\\theta - f$（下滑時摩擦力沿斜面向上；上滑時摩擦力沿斜面向下！）。",
              en: "**Inclined Plane**: Resolve weight $mg$ into $mg\\sin\\theta$ (down slope) and $mg\\cos\\theta$ (perpendicular). Perpendicular equilibrium: $R = mg\\cos\\theta$. Along slope: $F_{\\text{net}} = mg\\sin\\theta - f$ (friction opposes relative motion or tendency of motion!)."
            },
            {
              zh: "**升降機內磅秤讀數（視重 Apparent Weight）**：磅秤量度的是人受地板向上的**法向反作用力 $R$**。取向上為正：$R - mg = ma \\Rightarrow R = m(g + a)$。\n• 向上加速或向下減速（$a > 0$）：**超重**（$R > mg$）。\n• 向下加速或向上減速（$a < 0$）：**失重**（$R < mg$）。\n• 勻速或靜止（$a = 0$）：$R = mg$。\n• 鋼纜斷裂自由落體（$a = -g$）：**完全失重**（$R = 0$）。",
              en: "**Apparent Weight in a Lift**: Weighing scale reads the upward **normal reaction $R$**. Taking upward as $+$: $R - mg = ma \\Rightarrow R = m(g + a)$.\n• Accelerating up / decelerating down ($a > 0$): $R > mg$.\n• Accelerating down / decelerating up ($a < 0$): $R < mg$.\n• Constant velocity / rest ($a = 0$): $R = mg$.\n• Free fall ($a = -g$): **Weightlessness** ($R = 0$)."
            },
            {
              zh: "**靜摩擦力 vs 動摩擦力**：靜止物體受外力推動但未移動時，靜摩擦力 $f_s = F_{\\text{applied}}$（隨外力增加至最大靜摩擦力 $f_{s,\\max}$）；一旦開始滑動，動摩擦力 $f_k$ 幾乎恆定且略小於 $f_{s,\\max}$。",
              en: "**Static vs Kinetic Friction**: While stationary, static friction $f_s = F_{\\text{applied}}$ up to $f_{s,\\max}$; once sliding starts, kinetic friction $f_k$ is nearly constant (independent of speed) and slightly smaller than $f_{s,\\max}$."
            },
            {
              zh: "**連接體與滑輪問題（Connected Bodies）**：先將整個系統視為「整體（whole system）」忽略內力（如張力 $T$、接觸力）求出共同加速度 $a$，再隔離單一物體畫 FBD 求出內力 $T$。",
              en: "**Connected Bodies & Pulleys**: Treat the whole system first (internal tensions/contact forces cancel) to find common acceleration $a$, then isolate one body with an FBD to solve for tension $T$ or contact force."
            }
          ],
          formulaIds: ["f-b2-n2l", "f-b2-weight", "f-b2-incline", "f-b2-lift"],
          diagramIds: ["diag-inclined-fbd"],
          exam: {
            zh: "畫隔離體圖（FBD）規矩：只畫**作用於該物體上**的真實外力（重力、法向反作用力、張力、摩擦力），**不可**同時畫出 $mg$ 及其分力 $mg\\sin\\theta, mg\\cos\\theta$（如要畫分力請用虛線標示，切勿把 $ma$ 或離心力畫成真實力！）。",
            en: "FBD Golden Rule: Draw ONLY real external forces acting ON the object. Never draw $ma$ or 'centrifugal force' as a force, and never double-draw both $mg$ and its components as solid arrows!"
          }
        },
        {
          id: "b2-2-2",
          code: "2.2",
          highYield: true,
          title: { zh: "力矩（Moment）、力偶與剛體平衡條件", en: "Moment of a Force, Couple & Rigid Body Equilibrium" },
          summary: {
            zh: "**力矩（Moment / Torque）** 是力產生轉動效應的量度：$\\tau = F d_\\perp = F r \\sin\\theta$（單位 $\\text{N m}$）。剛體處於**完全靜力平衡（static equilibrium）** 須同時滿足兩大條件：**淨力為零**（$\\sum F_x = 0, \\sum F_y = 0$）及 **繞任意轉軸的淨力矩為零**（順時針總力矩 = 逆時針總力矩）。",
            en: "**Moment (Torque)** measures the turning effect of a force: $\\tau = F d_\\perp = F r \\sin\\theta$ (unit: $\\text{N m}$). A rigid body is in **equilibrium** iff: (1) **Net force = 0** ($\\sum F_x = 0, \\sum F_y = 0$) AND (2) **Net moment about ANY pivot = 0** (sum of clockwise moments = sum of anticlockwise moments)."
          },
          points: [
            {
              zh: "**選取支點技巧**：計算力矩時，選擇**未知力（例如鉸鏈力 / 牆壁反作用力）作用線通過的點作為支點（pivot）**，可將該未知力的力臂變為零，直接消元求另一個力！",
              en: "**Pivot Selection Trick**: Take moments about a point where an **unknown force (e.g. hinge reaction)** acts — its perpendicular distance is zero, eliminating it immediately!"
            },
            {
              zh: "**重心（Centre of Gravity, C.G.）與穩定性**：均勻規則物體重心在幾何中心；當重心鉛垂線**超出支撐底面（base area）** 時，重力會產生傾倒力矩使物體翻側。降低重心、增大底面積可提高穩定性。",
              en: "**Centre of Gravity (C.G.) & Stability**: An object topples when the vertical line through its C.G. falls **outside its base of support**, creating a toppling moment. Lower C.G. and wider base increase stability."
            },
            {
              zh: "**三力共點定理（Three-Force Equilibrium）**：若三個非平行共面力令物體平衡，其作用線必**相交於同一點**（常考靠牆梯子或鉸鏈支撐桿問題！）。",
              en: "**Three-Force Equilibrium**: If three non-parallel coplanar forces keep a body in equilibrium, their lines of action must **meet at a single point** (classic ladder/hinged rod exam question!)."
            }
          ],
          formulaIds: ["f-b2-moment"]
        }
      ]
    },
    {
      id: "b2-ch3",
      code: "Ch 3",
      title: { zh: "功、能量、功率與動量", en: "Work, Energy, Power and Momentum" },
      topics: [
        {
          id: "b2-3-1",
          code: "3.1",
          highYield: true,
          title: { zh: "功、動能、重力勢能、能量守恆與機械功率", en: "Work, KE, Gravitational PE, Energy Conservation & Power" },
          summary: {
            zh: "**功（Work Done）** $W = Fs\\cos\\theta$ 是力沿位移方向傳遞的能量（標量，單位 $\\text{J}$）。當力與位移垂直（$\\theta = 90^\\circ$，如勻速圓周向心力、水平搬重物時的重力），**所作的功為零**。**功能定理**：淨力作功 = 動能變化量 $W_{\\text{net}} = \\Delta E_K$。",
            en: "**Work done** $W = Fs\\cos\\theta$ is energy transferred mechanically (scalar, $\\text{J}$). If force $\\perp$ displacement ($\\theta = 90^\\circ$, e.g. centripetal force), **work done = 0**. **Work-Energy Theorem**: $W_{\\text{net}} = \\Delta E_K$."
          },
          points: [
            {
              zh: "**機械能守恆定律（Conservation of Mechanical Energy）**：若只有重力等保守力作功（無摩擦力、空氣阻力或外部推力），物體的**動能與勢能總和守恆**：$\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$。若有摩擦力 $f$ 沿路徑 $s$ 作負功，則損失的機械能轉化為內能：$E_{\\text{initial}} - f s = E_{\\text{final}}$。",
              en: "**Conservation of Mechanical Energy**: When no non-conservative forces (friction/air drag) do work: $\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$. With friction $f$ over distance $s$: $E_{\\text{initial}} - fs = E_{\\text{final}}$ (lost ME becomes internal energy)."
            },
            {
              zh: "**功率（Power）**：作功速率 $P = \\frac{W}{t} = \\frac{\\Delta E}{t}$，對以速率 $v$ 沿施力方向移動的物體，**瞬時功率 $P = Fv$**。例如汽車沿斜面勻速上坡時，牽引力 $F = mg\\sin\\theta + f$，所需功率 $P = (mg\\sin\\theta + f)v$。",
              en: "**Power**: Rate of doing work $P = \\frac{W}{t} = \\frac{\\Delta E}{t}$; for force $F$ along velocity $v$, **instantaneous power $P = Fv$**. For a car climbing a slope at constant $v$: $F = mg\\sin\\theta + f$, so $P = (mg\\sin\\theta + f)v$."
            },
            {
              zh: "**$F$-$s$ 圖像**：力-位移圖像下的有符號面積 = 力所作的功 $W$（亦適用於變力如彈簧彈力 $W = \\frac{1}{2}kx^2$）。",
              en: "**$F$-$s$ Graph**: Area under a Force-Displacement graph equals work done $W$ (valid even for varying forces such as springs!)."
            }
          ],
          formulaIds: ["f-b2-work", "f-b2-ke", "f-b2-pe", "f-b2-power", "f-b2-wet"],
          diagramIds: ["diag-impulse-work"]
        },
        {
          id: "b2-3-2",
          code: "3.2",
          highYield: true,
          title: { zh: "動量、衝量、動量守恆與碰撞類型", en: "Momentum, Impulse, Conservation of Momentum & Collisions" },
          summary: {
            zh: "**線動量（Linear Momentum）** $p = mv$（矢量）；**衝量（Impulse）** $J = F\\Delta t = \\Delta p = mv - mu$，等於 $F$-$t$ 圖像下的面積。當系統所受**淨外力為零**時，系統總動量守恆：$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$。",
            en: "**Linear momentum** $p = mv$ (vector); **Impulse** $J = F\\Delta t = \\Delta p = mv - mu$ = area under $F$-$t$ graph. When **net external force = 0**, total momentum is conserved: $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$."
          },
          points: [
            {
              zh: "**安全氣袋 / 緩衝墊 / 潰縮區原理（Paper 1B 必考解釋題）**：碰撞前後乘客的質量與速度變化相同，故所需**總動量變化量 $\\Delta p$（衝量）相同**。緩衝設計能**延長撞擊接觸時間 $\\Delta t$**，根據 $F = \\frac{\\Delta p}{\\Delta t}$，作用於人體的**平均撞擊力 $F$ 大幅減小**，減輕傷害。",
              en: "**Airbags / Crumple Zones / Crash Mats (Classic Explain Q)**: For the same change in momentum $\\Delta p$ (same impulse), the cushion **lengthens the time of impact $\\Delta t$**. By $F = \\frac{\\Delta p}{\\Delta t}$, the **average impact force $F$ is greatly reduced**."
            },
            {
              zh: "**水流 / 氣流衝擊力（連續流體衝量）**：當密度 $\\rho$、截面積 $A$、速度 $v$ 的水柱垂直射向牆壁後速度變零，每秒撞擊質量 $\\frac{\\Delta m}{\\Delta t} = \\rho A v$，故衝擊力 $F = \\frac{\\Delta m}{\\Delta t} v = \\rho A v^2$（若完全彈性反彈，動量變化加倍，$F = 2\\rho A v^2$！）。",
              en: "**Water Jet Impact Force**: For a jet (density $\\rho$, area $A$, speed $v$) hitting a wall and stopping, mass per second $\\frac{\\Delta m}{\\Delta t} = \\rho A v$, so $F = \\frac{\\Delta m}{\\Delta t} v = \\rho A v^2$ (if rebounding elastically at $-v$, $F = 2\\rho A v^2$!)."
            }
          ],
          table: {
            headers: [
              { zh: "碰撞 / 相互作用類型", en: "Interaction Type" },
              { zh: "總動量（無外力）", en: "Total Momentum (no ext. F)" },
              { zh: "總動能 $E_K$", en: "Total Kinetic Energy" },
              { zh: "特徵與備註", en: "Characteristics" }
            ],
            rows: [
              [{ zh: "完全彈性碰撞 Elastic", en: "Elastic Collision" }, { zh: "**守恆**", en: "**Conserved**" }, { zh: "**守恆**", en: "**Conserved**" }, { zh: "相對接近速率 = 相對遠離速率 ($u_1 - u_2 = v_2 - v_1$)。等質量正向彈性碰撞會交換速度！", en: "Relative speed of approach = separation ($u_1 - u_2 = v_2 - v_1$). Equal masses exchange velocities!" }],
              [{ zh: "非彈性碰撞 Inelastic", en: "Inelastic Collision" }, { zh: "**守恆**", en: "**Conserved**" }, { zh: "**減少**（部分轉為熱與聲能）", en: "**Decreases** (to heat & sound)" }, { zh: "現實中絕大多數宏觀碰撞屬此類", en: "Most real-world macroscopic collisions" }],
              [{ zh: "完全非彈性碰撞 Completely Inelastic", en: "Completely Inelastic" }, { zh: "**守恆**", en: "**Conserved**" }, { zh: "**動能損失最大**", en: "**Max KE lost**" }, { zh: "兩物體碰撞後**黏合一起以共同速度 $v$ 運動**：$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$", en: "Objects **stick together** moving at common velocity $v$: $m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$" }],
              [{ zh: "爆炸 / 反衝 Explosion / Recoil", en: "Explosion / Recoil" }, { zh: "**守恆**（初總動量常為 0）", en: "**Conserved** (often 0 initially)" }, { zh: "**增加**（化學能/彈性能轉為動能）", en: "**Increases** (chemical/elastic PE → KE)" }, { zh: "$0 = m_1 v_1 + m_2 v_2$；輕碎片速率更大、所獲動能亦更大（$E_K = \\frac{p^2}{2m} \\propto \\frac{1}{m}$）！", en: "$0 = m_1 v_1 + m_2 v_2$; lighter fragment gets higher speed AND greater KE ($E_K = \\frac{p^2}{2m} \\propto \\frac{1}{m}$)!" }]
            ]
          },
          formulaIds: ["f-b2-momentum", "f-b2-impulse", "f-b2-com", "f-b2-ke-p"],
          trap: {
            zh: "計算反彈球（如球以 $+10\\text{ m s}^{-1}$ 撞牆後以 $-8\\text{ m s}^{-1}$ 反彈）的動量變化時，**切記矢量符號**！$\\Delta p = m((-8) - 10) = -18m$，大小是 $18m$ 而非 $2m$！",
            en: "Watch vector signs on rebound! If velocity changes from $+10\\text{ m s}^{-1}$ to $-8\\text{ m s}^{-1}$, $\\Delta p = m(-8 - 10) = -18m$, magnitude $18m$, NOT $2m$!"
          }
        }
      ]
    },
    {
      id: "b2-ch4",
      code: "Ch 4",
      title: { zh: "拋體運動、圓周運動與萬有引力", en: "Projectile Motion, Circular Motion & Gravitation" },
      topics: [
        {
          id: "b2-4-1",
          code: "4.1",
          highYield: true,
          title: { zh: "拋體運動（Projectile Motion）", en: "Projectile Motion" },
          summary: {
            zh: "忽略空氣阻力時，拋體運動可分解為兩個**完全獨立**的分運動：**水平方向勻速運動**（$a_x = 0, v_x = u\\cos\\theta$）與**豎直方向勻加速運動**（$a_y = -g, v_y = u\\sin\\theta - gt$），軌跡為拋物線。",
            en: "Neglecting air resistance, projectile motion splits into two **independent** components: **uniform horizontal motion** ($a_x = 0, v_x = u\\cos\\theta$) and **uniformly accelerated vertical motion** ($a_y = -g, v_y = u\\sin\\theta - gt$), tracing a parabola."
          },
          points: [
            {
              zh: "**四大核心推導結果（平地發射至平地，初速 $u$，仰角 $\\theta$）**：\n• 飛行總時間：$T = \\frac{2u\\sin\\theta}{g}$。\n• 最大高度：$H = \\frac{u^2 \\sin^2\\theta}{2g}$（最高點時 $v_y = 0$，但速率仍為 $v_x = u\\cos\\theta \\ne 0$！）。\n• 水平射程：$R = \\frac{u^2 \\sin 2\\theta}{g}$。當 **$\\theta = 45^\\circ$** 時射程最大 $R_{\\max} = \\frac{u^2}{g}$；互餘角度（如 $30^\\circ$ 與 $60^\\circ$）射程相同。\n• 軌跡方程：$y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$。",
              en: "**Key Derived Results (level ground, launch speed $u$, angle $\\theta$)**:\n• Time of flight: $T = \\frac{2u\\sin\\theta}{g}$.\n• Max height: $H = \\frac{u^2\\sin^2\\theta}{2g}$ (at top, $v_y = 0$ but speed $= u\\cos\\theta \\ne 0$!).\n• Horizontal range: $R = \\frac{u^2\\sin 2\\theta}{g}$; max range at **$\\theta = 45^\\circ$**; complementary angles ($\\theta$ and $90^\\circ - \\theta$) yield equal range.\n• Trajectory equation: $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$."
            },
            {
              zh: "**平拋運動（Horizontal Projection）**：水平發射與同高度自由落體的兩球**同時落地**（因兩者初豎直速度均為 $0$ 且豎直加速度均為 $g$，落地時間 $t = \\sqrt{\\frac{2h}{g}}$ 與水平初速無關！）。",
              en: "**Horizontal Projection**: A horizontally projected ball and a dropped ball from the same height hit the ground **simultaneously** ($t = \\sqrt{\\frac{2h}{g}}$, independent of horizontal speed!)."
            },
            {
              zh: "**考慮空氣阻力時的軌跡變化**：最大高度降低、水平射程縮短、軌跡**不再對稱**（下降段比上升段更陡峭，因水平速度持續衰減）。",
              en: "**Effect of Air Resistance**: Lower max height, shorter range, and **asymmetric trajectory** (descending path is steeper than ascending path as $v_x$ continually drops)."
            }
          ],
          formulaIds: ["f-b2-proj-t", "f-b2-proj-h", "f-b2-proj-r", "f-b2-proj-traj"],
          diagramIds: ["diag-projectile"]
        },
        {
          id: "b2-4-2",
          code: "4.2",
          highYield: true,
          title: { zh: "勻速圓周運動與向心力實例分析", en: "Uniform Circular Motion & Centripetal Force Scenarios" },
          summary: {
            zh: "物體以恆定速率 $v$ 沿半徑 $r$ 的圓周運動時，速度**方向不斷改變**，因此必然具有指向圓心的**向心加速度** $a_c = \\frac{v^2}{r} = \\omega^2 r$，以及指向圓心的淨力——**向心力** $F_c = \\frac{mv^2}{r} = m\\omega^2 r$。",
            en: "An object moving at constant speed $v$ in a circle of radius $r$ constantly changes **velocity direction**, requiring **centripetal acceleration** $a_c = \\frac{v^2}{r} = \\omega^2 r$ and net **centripetal force** $F_c = \\frac{mv^2}{r} = m\\omega^2 r$ towards the centre."
          },
          points: [
            {
              zh: "**角速度與線速率關係**：$\\omega = \\frac{\\Delta\\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$（單位 $\\text{rad s}^{-1}$），線速率 $v = r\\omega$。同一剛性轉盤上各點有相同 $\\omega$，但越外圍線速率 $v$ 和向心加速度 $a_c = \\omega^2 r$ 越大。",
              en: "**Angular & Linear Speed**: $\\omega = \\frac{2\\pi}{T} = 2\\pi f$ ($\\text{rad s}^{-1}$), $v = r\\omega$. Points on a rigid rotating disc share the same $\\omega$, while outer points have larger $v$ and $a_c = \\omega^2 r$."
            },
            {
              zh: "**四大經典圓周運動受力分析（必考！）**：\n1. **水平路面轉彎**：靜摩擦力提供向心力 $f = \\frac{mv^2}{r}$；最大安全車速 $v_{\\max} = \\sqrt{\\frac{f_{\\max} r}{m}}$。\n2. **傾斜彎道（Banked Road，無側面摩擦）**：支持力水平分力提供向心力，$R\\sin\\theta = \\frac{mv^2}{r}$ 且 $R\\cos\\theta = mg \\Rightarrow \\tan\\theta = \\frac{v^2}{rg}$！若車速高於設計速率，需要**沿斜面向下**的靜摩擦力補充向心力；若低於設計速率，則摩擦力**沿斜面向上**防止滑向內側。\n3. **圓錐擺（Conical Pendulum）**：繩張力水平分力 $T\\sin\\theta = m\\omega^2 (L\\sin\\theta)$，豎直 $T\\cos\\theta = mg \\Rightarrow \\tan\\theta = \\frac{v^2}{rg}$ 且週期 $T_p = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$（旋轉越快，張角 $\\theta$ 越大，但永不能達到 $90^\\circ$！）。\n4. **飛機轉彎**：機翼傾斜使升力水平分力 $L\\sin\\theta$ 提供向心力，$\\tan\\theta = \\frac{v^2}{rg}$。",
              en: "**Four Classic Circular Motion Cases (High-Yield!)**:\n1. **Flat road turn**: Static friction provides $F_c$: $f = \\frac{mv^2}{r}$.\n2. **Banked road (zero sideways friction)**: $R\\sin\\theta = \\frac{mv^2}{r}$ & $R\\cos\\theta = mg \\Rightarrow \\tan\\theta = \\frac{v^2}{rg}$. Faster than ideal speed → friction acts **down the slope**; slower → friction acts **up the slope**.\n3. **Conical pendulum**: $T\\sin\\theta = m\\omega^2(L\\sin\\theta)$, $T\\cos\\theta = mg \\Rightarrow \\tan\\theta = \\frac{v^2}{rg}$, period $T_p = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$ ($\\theta$ can never reach $90^\\circ$!).\n4. **Banking aircraft**: Lift component $L\\sin\\theta$ provides $F_c$, giving $\\tan\\theta = \\frac{v^2}{rg}$."
            }
          ],
          formulaIds: ["f-b2-omega", "f-b2-fc", "f-b2-banked", "f-b2-conical"],
          diagramIds: ["diag-circular-motion"],
          trap: {
            zh: "**向心力不是一種新的獨立力！** 它是作用在物體上的真實力（如摩擦力、張力、重力、支持力分力）的**指向圓心的合力**。畫 FBD 時絕不可額外畫出「向心力」箭嘴！",
            en: "**Centripetal force is NOT an extra separate force!** It is the **net inward component** of real forces (tension, gravity, normal reaction, friction). Never draw an extra arrow labeled '$F_c$' on an FBD!"
          }
        },
        {
          id: "b2-4-3",
          code: "4.3",
          highYield: true,
          title: { zh: "萬有引力、引力場強度與人造衛星軌道", en: "Universal Gravitation, Field Strength & Satellite Orbits" },
          summary: {
            zh: "**牛頓萬有引力定律**：任意兩個質點間的萬有引力 $F = \\frac{GMm}{r^2}$。對於在圓形軌道運行的衛星，萬有引力充當向心力：$\\frac{GMm}{r^2} = \\frac{mv^2}{r} = m\\omega^2 r$。",
            en: "**Newton's Law of Universal Gravitation**: $F = \\frac{GMm}{r^2}$ between any two point masses. For a satellite in circular orbit, gravity provides the centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r} = m\\omega^2 r$."
          },
          points: [
            {
              zh: "**引力場強度（Gravitational Field Strength, $g$）**：單位質量在該點所受萬有引力，$g = \\frac{F}{m} = \\frac{GM}{r^2}$（在行星表面 $g_0 = \\frac{GM}{R^2}$，故常用代換 **$GM = g_0 R^2$**！在距地表高度 $h$ 處，$r = R + h$，$g = g_0 \\left(\\frac{R}{R+h}\\right)^2$）。",
              en: "**Gravitational Field Strength ($g$)**: Force per unit mass: $g = \\frac{F}{m} = \\frac{GM}{r^2}$. At planet surface $g_0 = \\frac{GM}{R^2}$, giving the vital shortcut **$GM = g_0 R^2$**! At altitude $h$, $r = R + h$."
            },
            {
              zh: "**軌道速率與開普勒第三定律（軌道半徑 $r$ 越大會怎樣？）**：\n• 軌道線速率 $v = \\sqrt{\\frac{GM}{r}}$ → **軌道越高（$r$ 越大），衛星速率越慢！**\n• 軌道週期 $T^2 = \\frac{4\\pi^2}{GM} r^3$（即 $T \\propto r^{3/2}$）→ **軌道越高，週期越長！**\n• 注意：$v$、$\\omega$、$T$ 與 $a_c$ 均**與衛星自身質量 $m$ 無關**，只取決於中心天體質量 $M$ 與軌道半徑 $r$。",
              en: "**Orbital Speed & Kepler's 3rd Law**:\n• Orbital speed $v = \\sqrt{\\frac{GM}{r}}$ → **higher orbit ($r\\uparrow$) means SLOWER speed!**\n• Period: $T^2 = \\frac{4\\pi^2}{GM} r^3$ ($T \\propto r^{3/2}$) → **higher orbit means LONGER period!**\n• Note: $v, \\omega, T, a_c$ are all **independent of satellite mass $m$**."
            },
            {
              zh: "**地球同步衛星（Geostationary Satellite）四大條件**：(1) 軌道週期嚴格等於 $24\\text{ h}$ ($86400\\text{ s}$)；(2) 軌道平面必須在**赤道上空**；(3) 運行方向與地球自轉相同（**由西向東**）；(4) 軌道半徑固定（約 $4.22 \\times 10^7\\text{ m}$，離地約 $35800\\text{ km}$）。",
              en: "**Geostationary Satellite (4 Conditions)**: (1) Period = $24\\text{ h}$ ($86400\\text{ s}$); (2) Orbit directly **above the Equator**; (3) Revolves **west to east** (same sense as Earth's rotation); (4) Fixed orbital radius ($r \\approx 4.22 \\times 10^7\\text{ m}$, altitude $\\approx 35800\\text{ km}$)."
            },
            {
              zh: "**太空人「失重」的真正物理原因**：並非沒有重力！在太空站高度仍有約 $90\\%$ 的地球引力，但太空人與太空站**正以相同向心加速度 $a = g$ 繞地球作自由落體圓周運動**，彼此之間無需法向反作用力（$R = 0$），故感覺失重。",
              en: "**Why Astronauts Feel Weightless**: Gravity is NOT zero (~$90\\%$ of surface $g$ in low Earth orbit)! Both astronaut and spacecraft **free-fall around Earth with the same centripetal acceleration $a = g$**, so normal reaction $R = 0$."
            }
          ],
          formulaIds: ["f-b2-grav", "f-b2-gfield", "f-b2-orbit-v", "f-b2-kepler3"],
          diagramIds: ["diag-gravitation"]
        }
      ]
    }
  ]
});
