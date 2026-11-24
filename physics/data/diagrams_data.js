/* ==========================================================================
   Essential HKDSE Physics Diagrams & Graphs Metadata & Detailed Explanations
   36 Essential Visuals across Book 1–5, Book E2, Book E3
   ========================================================================== */
window.PHY_DIAGRAMS_DATA = [
  /* ---------- BOOK 1 ---------- */
  {
    id: "diag-heating-curve", book: "book1", kind: "graph",
    title: { zh: "物質加熱曲線（溫度 $T$ 對 時間 $t$）", en: "Heating Curve (Temperature $T$ vs Time $t$)" },
    summary: {
      zh: "以恆定功率 $P$ 加熱純物質（由固態 → 液態 → 氣態）的溫度變化。斜段升溫增加分子動能（$E = mc\\Delta T$），水平平段發生恆溫物態變化增加分子勢能（$E = ml$）。",
      en: "Temperature profile of a pure substance heated at constant power $P$ (solid → liquid → gas). Slanted lines show KE rise ($E=mc\\Delta T$); horizontal plateaus show constant-$T$ phase changes increasing molecular PE ($E=ml$)."
    },
    analysis: {
      zh: "• **斜段斜率** $= \\frac{P}{mc} \\propto \\frac{1}{c}$：斜率越大，比熱容量越小（冰的斜率約為水的 2 倍）。\n• **水平段長度** $\\Delta t = \\frac{ml}{P} \\propto l$：汽化平段（DE）遠長於熔解平段（BC），因 $l_v \\gg l_f$。",
      en: "• **Slope of slanted segments** $= \\frac{P}{mc} \\propto \\frac{1}{c}$: steeper slope = smaller $c$ (ice is twice as steep as water).\n• **Plateau width** $\\Delta t = \\frac{ml}{P} \\propto l$: boiling plateau (DE) is much longer than melting plateau (BC) since $l_v \\gg l_f$."
    },
    exam: {
      zh: "DSE 必考：問「為何 BC / DE 段溫度不變？」必答「吸收的潛熱用於克服分子間吸引力、增加**分子勢能**，分子**平均動能**維持不變」。",
      en: "Exam Q: Why is $T$ constant along BC/DE? State: 'Latent heat absorbed overcomes intermolecular forces to increase **molecular PE**, while **average molecular KE** stays constant.'"
    }
  },
  {
    id: "diag-specific-heat-exp", book: "book1", kind: "apparatus",
    title: { zh: "量度比熱容量 $c$ 與冰的比熔解潛熱 $l_f$（對照裝置）", en: "Measuring Specific Heat Capacity $c$ & $l_f$ of Ice (Control Setup)" },
    summary: {
      zh: "左圖為電熱法測定金屬塊/水比熱容量裝置（絕熱棉、加蓋、油滴熱接觸）；右圖為測定冰的 $l_f$ 必備**對照裝置（Control Setup）**，用以扣除室溫環境傳入的熱量。",
      en: "Left: Electrical method for measuring $c$ (insulation, lid, oil drops for thermal contact). Right: Measuring $l_f$ of ice with an identical unpowered **control setup** to subtract ambient melting."
    },
    analysis: {
      zh: "• **比熱容量實驗**：$c = \\frac{E}{m\\Delta T}$，散熱會令 $\\Delta T$ 偏小，使實驗測得 $c$ **偏大**。\n• **對照裝置公式**：$l_f = \\frac{E}{m_{\\text{exp}} - m_{\\text{ctrl}}}$，必須使用剛開始熔化的 **$0^\\circ\\text{C}$ 碎冰**。",
      en: "• **SHC setup**: Heat loss makes $\\Delta T$ smaller → $c_{\\text{exp}}$ **overestimated**.\n• **Control setup**: $l_f = \\frac{E}{m_{\\text{exp}} - m_{\\text{ctrl}}}$; must use **melting crushed ice at $0^\\circ\\text{C}$**."
    },
    exam: {
      zh: "Paper 1B 實驗題高頻：記得提「關閉電源後繼續記錄達到的最高溫度」及「攪拌令溫度均勻」。",
      en: "Paper 1B Favourite: Always mention 'record the highest temperature reached AFTER switching off' and 'stir gently for uniform temperature'."
    }
  },
  {
    id: "diag-gas-laws", book: "book1", kind: "graph",
    title: { zh: "理想氣體三大定律圖像（Boyle / Charles / Pressure Law）", en: "Ideal Gas Laws Graphs (Boyle's, Charles's & Pressure Law)" },
    summary: {
      zh: "展示波義耳定律（$p$-$V$ 等溫雙曲線與 $p$-$1/V$ 過原點直線）、查理定律（$V$-$T$）及壓強定律（$p$-$T$）的外推絕對零度 $-273^\\circ\\text{C}$。",
      en: "Shows Boyle's Law ($p$-$V$ isotherms & $p$-$1/V$ straight line through origin), Charles's Law ($V$-$T$), and Pressure Law ($p$-$T$) extrapolating to absolute zero $-273^\\circ\\text{C}$."
    },
    analysis: {
      zh: "• **$p$-$V$ 圖**：等溫線越遠離原點，$pV = nRT$ 越大（溫度 $T$ 越高或摩爾數 $n$ 越大）。\n• **$p$-$1/V$ 圖**：斜率 $= nRT$。\n• **$V$-$\\theta$ 與 $p$-$\\theta$ 圖**：所有直線向左延長必相交於橫軸 **$-273^\\circ\\text{C}$**（即 $0\\text{ K}$）。",
      en: "• **$p$-$V$ graph**: Curve farther from origin has higher $nRT$ (higher $T$ or more moles).\n• **$p$-$1/V$ graph**: Slope $= nRT$.\n• **$V$-$\\theta$ & $p$-$\\theta$**: All lines extrapolate to **$-273^\\circ\\text{C}$** ($0\\text{ K}$)."
    },
    exam: {
      zh: "注意橫軸單位是 $^\\circ\\text{C}$ 還是 $\\text{K}$！若橫軸為 $^\\circ\\text{C}$，直線**不穿過原點**，截距在正 $y$ 軸上！",
      en: "Check x-axis unit carefully! With $^\\circ\\text{C}$, the straight line does NOT pass through the origin — only with $\\text{K}$ does it pass through $(0,0)$!"
    }
  },
  {
    id: "diag-kinetic-box", book: "book1", kind: "apparatus",
    title: { zh: "分子動理論：立方體容器分子碰撞模型", en: "Kinetic Theory: Cubic Container Wall-Collision Model" },
    summary: {
      zh: "質量 $m$ 的氣體分子以速度分量 $c_x$ 在邊長 $L$ 的立方體容器內彈性撞擊器壁，從微觀牛頓第二定律推導宏觀氣體壓強 $pV = \\frac{1}{3}Nm\\overline{c^2}$。",
      en: "A molecule of mass $m$ with velocity component $c_x$ collides elastically with wall of cubic box (side $L$), linking Newton's 2nd Law to macroscopic pressure $pV = \\frac{1}{3}Nm\\overline{c^2}$."
    },
    analysis: {
      zh: "• 單次碰撞動量變化：$\\Delta p_x = 2mc_x$；兩次撞擊同壁間隔 $\\Delta t = \\frac{2L}{c_x}$。\n• 因子 $\\frac{1}{3}$ 源自三維空間各向同性隨機運動：$\\overline{c_x^2} = \\overline{c_y^2} = \\overline{c_z^2} = \\frac{1}{3}\\overline{c^2}$。",
      en: "• Momentum change per hit: $\\Delta p_x = 2mc_x$; round-trip time $\\Delta t = 2L/c_x$.\n• Factor $\\frac{1}{3}$ comes from 3D isotropic random motion: $\\overline{c_x^2} = \\frac{1}{3}\\overline{c^2}$."
    },
    exam: {
      zh: "問「為何升溫時壓強上升」必須寫齊兩點：(1) 單次碰撞動量變化增大；(2) 撞擊頻率增加！",
      en: "When explaining pressure rise with $T$, always state BOTH: (1) larger $\\Delta p$ per collision AND (2) higher collision frequency!"
    }
  },

  /* ---------- BOOK 2 ---------- */
  {
    id: "diag-motion-graphs", book: "book2", kind: "graph",
    title: { zh: "運動圖像轉換（$s$-$t$, $v$-$t$, $a$-$t$）與彈跳球 $v$-$t$ 圖", en: "Motion Graphs Trio ($s$-$t$, $v$-$t$, $a$-$t$) & Bouncing Ball $v$-$t$" },
    summary: {
      zh: "上排展示勻加速運動 $s$-$t$（拋物線）、$v$-$t$（斜直線）、$a$-$t$（水平線）的微積分斜率/面積互轉；下排展示經典**彈跳球 $v$-$t$ 圖**。",
      en: "Top: Slope & area conversions among $s$-$t$, $v$-$t$, and $a$-$t$ graphs. Bottom: Classic **bouncing ball $v$-$t$ graph** showing parallel free-flight lines and shrinking rebound speeds."
    },
    analysis: {
      zh: "• **斜率鏈**：$s$-$t$ 斜率 $\\to v$；$v$-$t$ 斜率 $\\to a$。\n• **面積鏈**：$a$-$t$ 面積 $\\to \\Delta v$；$v$-$t$ 有符號面積 $\\to$ 位移 $s$。\n• **彈跳球**：每段空中斜線互相**平行**（斜率同為 $-g$），反彈後波峰遞減，過零點即達最高點！",
      en: "• **Slope chain**: slope of $s$-$t \\to v$; slope of $v$-$t \\to a$.\n• **Area chain**: area of $a$-$t \\to \\Delta v$; signed area of $v$-$t \\to s$.\n• **Bouncing ball**: All flight lines are **parallel** (slope $-g$); zero-crossing = highest point!"
    },
    exam: {
      zh: "DSE 必考畫圖題：記得先標明「取向上為正 / Take upward as positive」，且空中線段必須嚴格平行！",
      en: "Sketching tip: Always declare positive direction and ensure every free-fall segment has the exact same parallel slope!"
    }
  },
  {
    id: "diag-inclined-fbd", book: "book2", kind: "apparatus",
    title: { zh: "斜面隔離體圖（FBD）與靜/動摩擦力圖像", en: "Inclined Plane Free-Body Diagram & Friction vs Applied Force" },
    summary: {
      zh: "左圖精確分解重力 $mg$ 為平行斜面 $mg\\sin\\theta$ 與垂直斜面 $mg\\cos\\theta$（實線為真實力，虛線為分力）；右圖展示外推力增大時靜摩擦力升至上限後跌為恆定動摩擦力。",
      en: "Left: Exact FBD on an inclined plane resolving $mg$ into $mg\\sin\\theta$ and $mg\\cos\\theta$ (dashed). Right: Friction increases linearly with applied force until $f_{s,\\max}$, then drops slightly to constant $f_k$."
    },
    analysis: {
      zh: "• 垂直方向平衡：$R = mg\\cos\\theta$。\n• 下滑時 $f$ 向上，$F_{\\text{net}} = mg\\sin\\theta - f$；上滑時 $f$ 向下！\n• 靜摩擦階段 $f = F_{\\text{app}}$（$45^\\circ$ 直線），滑動後 $f_k$ 與速度無關。",
      en: "• Perpendicular balance: $R = mg\\cos\\theta$.\n• Sliding down: $f$ points up; sliding up: $f$ points down!\n• Static region is a $45^\\circ$ line ($f = F_{\\text{app}}$); kinetic $f_k$ is speed-independent."
    },
    exam: {
      zh: "切勿在真實 FBD 上同時把 $mg$ 與分力畫成同款實線箭嘴，以免被閱卷員視為重複計力扣分！",
      en: "Never draw both $mg$ and its components as solid force arrows on an FBD — draw components dashed or omit them!"
    }
  },
  {
    id: "diag-projectile", book: "book2", kind: "graph",
    title: { zh: "拋體運動軌跡、速度分解與空氣阻力效應", en: "Projectile Trajectory, Velocity Components & Air Resistance" },
    summary: {
      zh: "無空氣阻力時軌跡為對稱拋物線：水平速度 $v_x = u\\cos\\theta$ 恆定，豎直速度 $v_y$ 均勻遞減至頂點變 $0$ 再向下增大；虛線展示有空氣阻力時的較矮、較短且不對稱軌跡。",
      en: "Without air drag, trajectory is a symmetric parabola: $v_x = u\\cos\\theta$ stays constant while $v_y$ drops linearly to $0$ at apex then reverses. Dashed curve shows lower, shorter, asymmetric path with air resistance."
    },
    analysis: {
      zh: "• 最高點：$v_y = 0$，但合速度 $= u\\cos\\theta$（水平），加速度仍為向下 $g$！\n• 對稱性：同高度處速率相同、俯仰角對稱；$\\theta = 45^\\circ$ 達最大射程。\n• 有空氣阻力：下降段比上升段更陡峭。",
      en: "• At apex: $v_y = 0$, speed $= u\\cos\\theta$, acceleration is STILL $g$ downward!\n• Symmetric angles & speeds at equal heights; max range at $45^\\circ$.\n• With air drag: descending branch is steeper than ascending branch."
    },
    exam: {
      zh: "最高點動能不為零！$E_{K,\\text{top}} = \\frac{1}{2}m(u\\cos\\theta)^2 = E_{K,0}\\cos^2\\theta$。",
      en: "KE at apex is NOT zero! $E_{K,\\text{top}} = \\frac{1}{2}m(u\\cos\\theta)^2 = E_{K,0}\\cos^2\\theta$."
    }
  },
  {
    id: "diag-circular-motion", book: "book2", kind: "apparatus",
    title: { zh: "圓周運動兩大經典實例：傾斜彎道與圓錐擺", en: "Circular Motion Classics: Banked Road & Conical Pendulum" },
    summary: {
      zh: "展示如何透過分解斜向真實力（支持力 $R$ 或繩張力 $T$）同時滿足豎直平衡與水平指向圓心的向心力，推導 $\\tan\\theta = \\frac{v^2}{rg}$。",
      en: "Shows resolving tilted real forces ($R$ or $T$) into vertical balance ($mg$) and horizontal centripetal force ($mv^2/r$), yielding $\\tan\\theta = \\frac{v^2}{rg}$."
    },
    analysis: {
      zh: "• **傾斜彎道**：$R\\cos\\theta = mg$，$R\\sin\\theta = \\frac{mv^2}{r}$；注意向心圓心在**水平方向**而非沿斜面！\n• **圓錐擺**：圓半徑為 $r = L\\sin\\theta$（並非擺長 $L$！）。",
      en: "• **Banked road**: Centre of circle is **horizontal**, NOT down the slope!\n• **Conical pendulum**: Circle radius is $r = L\\sin\\theta$, NOT string length $L$!"
    },
    exam: {
      zh: "最大陷阱：傾斜彎道切勿沿斜面建立坐標軸！必須建立**水平（指向圓心）與豎直**坐標軸！",
      en: "Huge Trap: For banked roads, resolve **horizontally & vertically** (NOT along the slope), because acceleration $a_c$ is purely HORIZONTAL!"
    }
  },
  {
    id: "diag-impulse-work", book: "book2", kind: "graph",
    title: { zh: "$F$-$t$ 圖（衝量與緩衝原理）及 $F$-$s$ 圖（功）", en: "$F$-$t$ Graph (Impulse & Cushioning) & $F$-$s$ Graph (Work)" },
    summary: {
      zh: "左圖對比硬地撞擊（高尖峰、短時間）與緩衝墊撞擊（低平峰、長時間），兩者**面積（總衝量 $\\Delta p$）相等**；右圖展示變力 $F$-$s$ 圖下面積代表作功 $W$。",
      en: "Left: Hard vs cushioned impact — equal areas (same impulse $\\Delta p$), but longer $\\Delta t$ drastically cuts peak/average force $F$. Right: Area under $F$-$s$ curve equals work done $W$."
    },
    analysis: {
      zh: "• **$F$-$t$ 圖面積** $= \\text{衝量 } J = \\Delta p = m(v - u)$。\n• 緩衝墊增大 $\\Delta t$、保持面積不變 → 顯著降低平均與峰值撞擊力。\n• **$F$-$s$ 圖面積** $= W = \\Delta E_K$（對淨力而言）。",
      en: "• **Area under $F$-$t$** $= J = \\Delta p$. Cushioning lengthens $\\Delta t$ at constant area → lowers peak/average $F$.\n• **Area under $F$-$s$** $= W$."
    },
    exam: {
      zh: "畫緩衝對比圖時，必須畫出「較矮但較寬」且「面積大致相同」的曲線才能拿滿分！",
      en: "When sketching cushioned vs hard $F$-$t$ graphs, make the cushioned peak **lower and wider** with visibly **equal area**!"
    }
  },
  {
    id: "diag-gravitation", book: "book2", kind: "graph",
    title: { zh: "萬有引力場強度 $g$-$r$ 曲線與圓軌道衛星", en: "Gravitational Field Strength $g$ vs $r$ & Circular Orbit" },
    summary: {
      zh: "在行星外部（$r \\ge R$），引力場強度按平方反比規律衰減：$g = \\frac{GM}{r^2} \\propto \\frac{1}{r^2}$；右側展示衛星以萬有引力充當向心力繞行。",
      en: "Outside a planet ($r \\ge R$), $g = \\frac{GM}{r^2}$ obeys the inverse-square law. Right: Satellite held in circular orbit by gravitational centripetal force."
    },
    analysis: {
      zh: "• 地表 $r = R$ 處 $g = g_0$；距球心 $2R$（即離地高度 $h = R$！）處 $g = \\frac{1}{4}g_0$。\n• 衛星從低軌升至高軌：$r\\uparrow \\Rightarrow v\\downarrow$、$T\\uparrow$、$E_P\\uparrow$、$E_K\\downarrow$。",
      en: "• At $r = 2R$ (altitude $h = R$), $g = g_0/4$.\n• Higher orbit ($r\\uparrow$): $v\\downarrow$, $T\\uparrow$, $E_P\\uparrow$, $E_K\\downarrow$."
    },
    exam: {
      zh: "小心題目給「離地表高度 $h = R$」代表軌道半徑是 $r = R + h = 2R$！",
      en: "Watch wording: 'altitude $h = R$ above surface' means $r = R + h = 2R$!"
    }
  },

  /* ---------- BOOK 3A ---------- */
  {
    id: "diag-wave-graphs", book: "book3a", kind: "graph",
    title: { zh: "波形圖（$y$-$x$）與振動圖（$y$-$t$）及平移法判質點方向", en: "Waveform ($y$-$x$) vs Oscillation ($y$-$t$) & Shift Method" },
    summary: {
      zh: "左圖為 $y$-$x$ 快照（橫軸讀 $\\lambda$），虛線為波向右傳播一小瞬後的波形，直觀判出各質點向上或向下移動；右圖為單一質點 $P$ 的 $y$-$t$ 圖（橫軸讀 $T$）。",
      en: "Left: $y$-$x$ snapshot (gives $\\lambda$); dashed shifted wave shows particle velocity directions instantly. Right: $y$-$t$ oscillation of single particle $P$ (gives $T$)."
    },
    analysis: {
      zh: "• 從左圖看：$P$ 點即將上升（虛線在上方），故右圖 $t=0$ 時 $P$ 的 $y$-$t$ 曲線由 $0$ 向正方向出發！\n• 同相點相距 $\\lambda$；反相點相距 $0.5\\lambda$。",
      en: "• At $t=0$, particle $P$ moves upward (dashed curve above), so its $y$-$t$ graph starts rising into $+y$!\n• In-phase spacing $= \\lambda$; antiphase $= 0.5\\lambda$."
    },
    exam: {
      zh: "先看清楚橫軸是距離 $x$（求 $\\lambda$）還是時間 $t$（求 $T$），再用 $v = f\\lambda = \\lambda/T$ 連繫兩圖！",
      en: "Always check whether the horizontal axis is distance $x$ (gives $\\lambda$) or time $t$ (gives $T$)!"
    }
  },
  {
    id: "diag-tir-refraction", book: "book3a", kind: "apparatus",
    title: { zh: "折射、臨界角、全內反射（TIR）與光纖傳導", en: "Refraction, Critical Angle, Total Internal Reflection & Optical Fibre" },
    summary: {
      zh: "呈現光由光密介質射向光疏介質的三種情況（$\\theta < C$ 折射+弱反射；$\\theta = C$ 掠射 $90^\\circ$；$\\theta > C$ 全內反射），以及光纖內連續全內反射傳播。",
      en: "Three regimes from dense to less dense medium ($\\theta < C$ refraction; $\\theta = C$ grazing $90^\\circ$; $\\theta > C$ TIR), plus light guiding inside an optical fibre ($n_{\\text{core}} > n_{\\text{cladding}}$)."
    },
    analysis: {
      zh: "• 臨界角滿足 $\\sin C = \\frac{n_2}{n_1}$。\n• 光纖纖芯折射率必須大於包層，彎曲半徑不可過小（否則入射角小於 $C$ 導致漏光）。",
      en: "• Critical angle $\\sin C = n_2 / n_1$.\n• Optical fibre requires $n_{\\text{core}} > n_{\\text{cladding}}$ and must not bend too sharply (else $\\theta < C$ and light leaks out)."
    },
    exam: {
      zh: "繪畫光路圖時切記畫出虛線**法線（normal）** 及光線**箭嘴方向**！",
      en: "In ray diagrams, ALWAYS draw dashed **normals** and **arrows** on every ray!"
    }
  },
  {
    id: "diag-lenses-rays", book: "book3a", kind: "apparatus",
    title: { zh: "凸透鏡（實像/放大鏡虛像）、凹透鏡光路與 $1/v$-$1/u$ 圖", en: "Convex & Concave Lens Ray Diagrams & $1/v$ vs $1/u$ Graph" },
    summary: {
      zh: "對比凸透鏡成倒立實像（$u > f$）、凸透鏡放大鏡正立虛像（$u < f$）及凹透鏡正立縮小虛像（任何 $u$）三條標準構圖光線，並附 $1/v$ 對 $1/u$ 直線圖。",
      en: "Compares construction rays for convex lens real image ($u>f$), convex magnifying glass ($u<f$), concave virtual diminished image, plus the $1/v$ vs $1/u$ linear plot."
    },
    analysis: {
      zh: "• **三條必學作圖光線**：(1) 平行主軸 → 過焦點 $F'$；(2) 過光心 $O$ → 直線不偏折；(3) 過焦點 $F$ → 平行主軸出射。\n• 虛光線延伸線及虛像必須用**虛線**繪畫！\n• $\\frac{1}{v}$ 對 $\\frac{1}{u}$ 直線斜率恆為 $-1$，兩軸截距均 $= \\frac{1}{f}$。",
      en: "• **3 Construction Rays**: (1) Parallel to axis → through $F'$; (2) Through optical centre $O$ → straight; (3) Through $F$ → parallel.\n• Draw virtual ray extensions and virtual images **dashed**!\n• $1/v$ vs $1/u$ line has slope $-1$ and both intercepts $= 1/f$."
    },
    exam: {
      zh: "當物體不在光軸上或只給兩條任意入射光，記得用**焦平面（focal plane）** 輔助線技巧！",
      en: "Parallel rays at an oblique angle always converge on the **focal plane**!"
    }
  },
  {
    id: "diag-ripple-tank", book: "book3a", kind: "apparatus",
    title: { zh: "水波槽現象：深淺水折射、狹縫繞射與雙源干涉圖樣", en: "Ripple Tank: Refraction (Deep→Shallow), Diffraction & Two-Source Interference" },
    summary: {
      zh: "左圖示深水進淺水時波長變短且波前偏折；中圖示狹縫寬度 $a \\approx \\lambda$ 時明顯半圓繞射；右圖示兩同相波源疊加出的腹線（實線，相長）與節線（虛線，相消）。",
      en: "Left: Deep-to-shallow refraction ($\\lambda$ shortens, bends towards normal). Centre: Strong diffraction when $a \\approx \\lambda$. Right: Coherent two-source antinodal (constructive) and nodal (destructive) lines."
    },
    analysis: {
      zh: "• 折射時波線（ray）恆垂直於波前（wavefront）；淺水區波前較密（$\\lambda$ 短）。\n• 干涉圖樣中：中央線 $n=0$ 程差 $= 0$ 為相長腹線，兩側交替出現節線（$0.5\\lambda, 1.5\\lambda$）與腹線（$1\\lambda, 2\\lambda$）。",
      en: "• Rays are always perpendicular to wavefronts; shallower water = closer wavefronts.\n• Central line ($\\Delta = 0$) is antinodal; flanked alternately by nodal ($0.5\\lambda, 1.5\\lambda$) and antinodal ($\\lambda, 2\\lambda$) lines."
    },
    exam: {
      zh: "若問「兩源改為反相會如何？」，答案是中央線變為**節線**，所有腹線與節線位置對調！",
      en: "If sources become antiphase, the central line turns into a **nodal line** and all maxima/minima swap!"
    }
  },

  /* ---------- BOOK 3B ---------- */
  {
    id: "diag-young-double-slit", book: "book3b", kind: "apparatus",
    title: { zh: "楊氏雙縫干涉實驗裝置與屏幕光強分佈", en: "Young's Double-Slit Apparatus & Fringe Intensity Pattern" },
    summary: {
      zh: "單色雷射垂直照射間距 $a$ 的雙狹縫，在距離 $D$ 處的屏幕上形成等距明暗條紋（$\\Delta y = \\frac{\\lambda D}{a}$），同時呈現光強隨位置週期性起伏。",
      en: "Monochromatic laser illuminates double slits (spacing $a$), forming equally spaced bright/dark fringes ($\\Delta y = \\lambda D / a$) on a screen at distance $D$, with periodic intensity peaks."
    },
    analysis: {
      zh: "• 條紋間距 $\\Delta y = \\frac{\\lambda D}{a}$。\n• 亮紋程差 $\\Delta = n\\lambda$；暗紋程差 $\\Delta = (n+\\frac{1}{2})\\lambda$。\n• 若用雙色光或白光，中央 $n=0$ 必為各色重疊（白光呈白色中央亮紋）。",
      en: "• Fringe width $\\Delta y = \\lambda D / a$.\n• Bright: $\\Delta = n\\lambda$; Dark: $\\Delta = (n+\\frac{1}{2})\\lambda$.\n• White light produces a white central fringe flanked by violet-inner, red-outer coloured fringes."
    },
    exam: {
      zh: "提高實驗準確度技巧：一次量度 10 個條紋間距的總寬度再除 10，以降低刻度尺百分誤差！",
      en: "Lab accuracy tip: Measure across e.g. 10 fringe spacings and divide by 10 to reduce percentage reading error!"
    }
  },
  {
    id: "diag-diffraction-grating", book: "book3b", kind: "apparatus",
    title: { zh: "衍射光柵光路與白光光譜（$d\\sin\\theta = n\\lambda$）", en: "Diffraction Grating Geometry & White-Light Spectrum" },
    summary: {
      zh: "展示單色光形成極尖銳的第 $0, \\pm 1, \\pm 2$ 級亮點（$y_n = D\\tan\\theta$），以及白光入射時中央為白色、兩側形成紫內紅外的多級光譜。",
      en: "Shows sharp $0, \\pm 1, \\pm 2$ order maxima ($d\\sin\\theta = n\\lambda, y_n = D\\tan\\theta$) and white-light spectra with violet closest to centre and red bent farthest!"
    },
    analysis: {
      zh: "• 相較雙縫：條紋更**明亮**、更**尖銳**、級數間距更**寬闊**。\n• 紅光波長最長 → $\\sin\\theta = \\frac{n\\lambda}{d}$ 最大 → **紅光偏折角大於紫光**（與三稜鏡相反！）。",
      en: "• Compared to double slit: much **brighter**, **sharper**, and **wider apart**.\n• Red has longest $\\lambda$ → **red bends MORE than violet** (opposite to glass prism!)."
    },
    exam: {
      zh: "務必留意屏幕上第 1 級至第 2 級距離比第 0 級至第 1 級**更闊**（因為 $\\tan\\theta$ 隨 $\\theta$ 非線性急增）！",
      en: "Note that the gap from $n=1$ to $n=2$ on a flat screen is WIDER than $n=0$ to $n=1$ because $\\tan\\theta$ grows faster than $\\sin\\theta$!"
    }
  },
  {
    id: "diag-stationary-wave", book: "book3b", kind: "graph",
    title: { zh: "弦上駐波（節點 N、腹點 A、相位與首三諧波）", en: "Stationary Waves (Nodes, Antinodes, Phase & First 3 Harmonics)" },
    summary: {
      zh: "展示兩端固定弦線上的基波（$f_1, L=\\lambda/2$）、第二諧波（$2f_1, L=\\lambda$）與第三諧波（$3f_1, L=3\\lambda/2$），清晰標示節點 N、腹點 A 及同相/反相波環。",
      en: "Shows 1st ($f_1$), 2nd ($2f_1$), and 3rd ($3f_1$) harmonics on a fixed string, clearly marking Nodes (N), Antinodes (A), and in-phase vs antiphase loops."
    },
    analysis: {
      zh: "• 相鄰節點間距 $= \\frac{\\lambda}{2}$；相鄰節點至腹點 $= \\frac{\\lambda}{4}$。\n• 同一波環內所有質點**同相**（不同振幅）；相鄰波環質點**反相**。",
      en: "• N–N distance $= \\lambda/2$; N–A $= \\lambda/4$.\n• Same loop = **in phase**; adjacent loops = **antiphase**."
    },
    exam: {
      zh: "Paper 1A 經典：每隔半週期（$T/2$）駐波倒轉一次；每經 $T/4$ 全弦瞬間變成一條直線（此時所有質點速度達最大，動能最大）！",
      en: "Classic MCQ: Every $T/4$ the entire string momentarily lies flat — at that instant, all particles have maximum speed (max KE)!"
    }
  },
  {
    id: "diag-sound-cro", book: "book3b", kind: "graph",
    title: { zh: "縱波疏密部與位移圖轉換及示波器（CRO）波形", en: "Longitudinal Wave $s$-$x$ (C/R) & CRO Sound Waveforms" },
    summary: {
      zh: "上圖將空氣分子的密部（C）與疏部（R）與位移-距離圖（$s$-$x$）嚴格對齊；下圖對比 CRO 上不同響度（振幅）、音調（頻率）及音色（波形）的聲波。",
      en: "Top: Maps air compressions (C) and rarefactions (R) directly onto the displacement-distance ($s$-$x$) graph. Bottom: CRO traces comparing loudness, pitch, and quality."
    },
    analysis: {
      zh: "• **密部 C**：位於 $s$-$x$ 圖**負斜率過零點**（左粒子向右移、右粒子向左移，向中心擠壓）。\n• **疏部 R**：位於 $s$-$x$ 圖**正斜率過零點**。\n• CRO 週期 $T = \\text{單週格數} \\times \\text{時基（time base）}$。",
      en: "• **Compression (C)**: **negative-slope zero-crossing** on $s$-$x$ graph.\n• **Rarefaction (R)**: **positive-slope zero-crossing**.\n• CRO period $T = (\\text{divs per cycle}) \\times (\\text{time-base setting})$."
    },
    exam: {
      zh: "密部與疏部中心質點的瞬時**位移為零**，但該處**壓強變化最大**！千萬別把波峰誤當成密部！",
      en: "Trap: Centres of C and R have ZERO displacement (NOT at crests/troughs!), while pressure variation is maximum!"
    }
  },

  /* ---------- BOOK 4 ---------- */
  {
    id: "diag-electric-fields", book: "book4", kind: "apparatus",
    title: { zh: "四大基本電場線分佈（點電荷、偶極、同性電荷與平行板）", en: "Electric Field Patterns (Point Charges, Dipole, Like Charges & Parallel Plates)" },
    summary: {
      zh: "並列展示孤立正負電荷、正負偶極子（吸引）、同性正電荷（排斥＋中央中性點 $E=0$）及平行金屬板間勻強電場（$E = V/d$）。",
      en: "Side-by-side patterns of isolated charges, opposite dipole, like positive charges (showing neutral point $E=0$), and uniform parallel-plate field ($E = V/d$)."
    },
    analysis: {
      zh: "• 箭嘴永遠由**正電荷指向負電荷**，切線為正試探電荷受力方向。\n• 同性不等量電荷間的**中性點**位於兩者連線上較靠近**電量較小**的一方。",
      en: "• Arrows point **from $+$ to $-$** (force direction on a $+$ test charge).\n• Neutral point between unequal like charges lies closer to the **smaller** charge."
    },
    exam: {
      zh: "畫平行板電場線時：中間必須畫成**等距、平行、垂直於板面**的直線，最外兩端微向外彎（邊緣效應）！",
      en: "For parallel plates: draw **equally spaced parallel perpendicular lines** inside, slightly curving outward only at edges!"
    }
  },
  {
    id: "diag-iv-graphs", book: "book4", kind: "graph",
    title: { zh: "元件 $I$-$V$ 特性曲線與電源內電阻 $V$-$I$ 圖像", en: "Component $I$-$V$ Characteristics & Internal Resistance $V$-$I$ Graph" },
    summary: {
      zh: "左圖對比歐姆導體（直線）、鎢絲燈泡（斜率漸平，$R$ 升）與二極管（單向導通）；右圖展示電池路端電壓 $V = \\mathcal{E} - Ir$ 直線求電動勢與內電阻。",
      en: "Left: Ohmic resistor, filament lamp ($R$ rises with heating), and semiconductor diode. Right: Terminal p.d. $V = \\mathcal{E} - Ir$ graph extracting e.m.f. and internal resistance."
    },
    analysis: {
      zh: "• 燈泡在任意點的電阻為 $R = \\frac{V}{I}$（非切線斜率倒數！）。\n• $V$-$I$ 圖：**$y$ 截距 $= \\mathcal{E}$**，**斜率 $= -r$**，**$x$ 截距 $= \\mathcal{E}/r$**（短路電流）。",
      en: "• Lamp resistance at any point is $R = V/I$ (NOT $1/\\text{tangent slope}$!).\n• $V$-$I$ plot: **$y$-int $= \\mathcal{E}$**, **slope $= -r$**, **$x$-int $= \\mathcal{E}/r$**."
    },
    exam: {
      zh: "考試有時把 $V$ 放縱軸、$I$ 放橫軸（$V$-$I$ 圖）！畫前先看清兩軸次序，燈泡在 $V$-$I$ 圖中會越向上彎！",
      en: "Always check which axis is $I$ and which is $V$! On a $V$-$I$ plot (V vertical), a filament lamp curves UPWARD!"
    }
  },
  {
    id: "diag-domestic-ring", book: "book4", kind: "apparatus",
    title: { zh: "家居環形電路（Ring Main）與英國三腳插頭安全結構", en: "Domestic Ring Main Circuit & 3-Pin Plug Safety Wiring" },
    summary: {
      zh: "清晰標示配電箱（30 A 斷路器）、火線（棕 L）、中線（藍 N）、地線（黃綠 E）環形並聯多個插座，及三腳插頭內保險絲接於火線、地線接金屬外殼。",
      en: "Shows consumer unit (30 A MCB), Live (Brown), Neutral (Blue), and Earth (Yellow/Green) ring loops feeding parallel sockets, plus 3-pin plug with fuse on Live and Earth to metal case."
    },
    analysis: {
      zh: "• **開關與保險絲必接火線 L**：斷開後電器完全不帶高壓電。\n• **地線較長且粗**：插入插座時最先接通接地並推開安全活門，拔出時最後斷開。\n• **雙重絕緣（回）** 電器無地線（只有 L 與 N 兩線）。",
      en: "• **Switch & fuse ALWAYS on Live (L)** so appliance is dead when off/blown.\n• **Earth pin is longest**: connects earth first and opens live/neutral shutters.\n• **Double-insulated** appliances use only 2 wires (L & N)."
    },
    exam: {
      zh: "解釋地線保護原理必寫三步：(1) 火線誤觸金屬殼 → (2) 低電阻地線引導大電流入地 → (3) **熔斷火線保險絲**切斷電源！",
      en: "Earth wire full-mark chain: (1) Live wire touches metal casing → (2) large fault current flows via low-resistance earth wire → (3) **blows the fuse on Live wire**!"
    }
  },
  {
    id: "diag-magnetic-motor", book: "book4", kind: "apparatus",
    title: { zh: "彈弓磁場（Catapult Field）與簡易直流電動機（DC Motor）", en: "Catapult Magnetic Field & Simple DC Motor" },
    summary: {
      zh: "左圖示載流導線圓形磁場與均勻磁場疊加（一側增強密集、另一側抵消稀疏 → 導線由強場推向弱場）；右圖示直流電動機線圈、磁極、分裂環換向器與碳刷。",
      en: "Left: Catapult field superposition pushes wire from stronger to weaker field region (Fleming's LHR). Right: DC motor with rectangular coil, magnets, carbon brushes, and split-ring commutator."
    },
    analysis: {
      zh: "• 磁力方向由**弗萊明左手定則**決定：$F = BIl\\sin\\theta$。\n• **分裂環換向器**：每轉半圈（豎直位）反轉線圈電流，使力偶轉向恆定。\n• 線圈處於**水平位**時力臂最大 → **力矩最大**；**豎直位**時力矩為零靠慣性轉過。",
      en: "• Force via **Fleming's Left-Hand Rule** ($F = BIl\\sin\\theta$).\n• **Split-ring commutator** reverses coil current every half turn so torque keeps same sense.\n• Max torque when coil is **horizontal**; zero torque when **vertical** (carried past by inertia)."
    },
    exam: {
      zh: "注意區分：電動機用**分裂環換向器（split-ring commutator）**；交流發電機用**兩個完整滑環（slip rings）**！",
      en: "Don't mix up: DC motor uses a **split-ring commutator**; AC generator uses **two complete slip rings**!"
    }
  },
  {
    id: "diag-em-induction", book: "book4", kind: "apparatus",
    title: { zh: "楞次定律（磁鐵進出線圈）與交流發電機（AC Generator）波形", en: "Lenz's Law (Magnet & Solenoid) & AC Generator e.m.f. Waveform" },
    summary: {
      zh: "上圖示條形磁鐵 N 極推進線圈（感應 N 極排斥）與拉出線圈（感應 S 極吸引）；下圖對應線圈旋轉 0°→90°→180°→270°→360° 的正弦感應電動勢波形。",
      en: "Top: Magnet N-pole pushed in (coil induces N to repel) vs pulled out (induces S to attract). Bottom: Sinusoidal AC generator e.m.f. synced with coil orientations through one full turn."
    },
    analysis: {
      zh: "• **楞次定律體現能量守恆**：外力必須克服排斥力/吸引力作機械功，轉化為線圈電能。\n• **交流發電機**：線圈**平行**磁場（$0^\\circ, 180^\\circ$）時 $\\Phi = 0$ 但 $|\\varepsilon|$ **最大**；線圈**垂直**磁場（$90^\\circ, 270^\\circ$）時 $\\Phi$ 最大但 $\\varepsilon = 0$！",
      en: "• **Lenz's Law = Energy Conservation**: Mechanical work done against opposing magnetic force becomes electrical energy.\n• **AC Generator**: Coil **parallel** to $B$ → $\\Phi = 0$ & **$|\\varepsilon|$ MAX**; coil **perpendicular** to $B$ → $\\Phi$ max & **$\\varepsilon = 0$**!"
    },
    exam: {
      zh: "若問磁鐵由上而下**自由穿過**線圈的 $\\varepsilon$-$t$ 圖：第二個反向波峰比第一個**更高更窄**，但兩者**面積相等**！",
      en: "For a magnet falling freely through a coil, the exit e.m.f. pulse is **taller & narrower** (opposite sign), with **equal area**!"
    }
  },
  {
    id: "diag-transformer-grid", book: "book4", kind: "apparatus",
    title: { zh: "理想變壓器（疊片軟鐵芯）與高壓輸電網系統", en: "Transformer Structure (Laminated Core) & High-Voltage Grid Transmission" },
    summary: {
      zh: "左圖示原線圈（$N_p$）、副線圈（$N_s$）與絕緣疊片軟鐵芯；右圖示發電廠 → 升壓變壓器 → 高壓輸電纜（低電流、低 $I^2R$ 損耗）→ 降壓變壓器 → 家居用戶。",
      en: "Left: Primary ($N_p$), secondary ($N_s$) coils on a laminated soft iron core. Right: Power station → step-up transformer → high-V cables (low $I$, tiny $I^2R$ loss) → step-down → homes."
    },
    analysis: {
      zh: "• 疊片軟鐵芯大幅減低**渦電流（eddy currents）** 與磁滯發熱。\n• 電纜損耗 $P_{\\text{loss}} = I^2 R_c = \\frac{P^2 R_c}{V^2}$：升壓 $10\\times \\Rightarrow$ 損耗減為 $1/100$。",
      en: "• Laminated soft iron core minimizes **eddy current** & hysteresis losses.\n• Cable loss $P_{\\text{loss}} = I^2 R_c = P^2 R_c / V^2$: $10\\times$ voltage → $1/100$ loss."
    },
    exam: {
      zh: "高頻問答：為何選用交流電而非直流電供電？因為**變壓器只能升降交流電壓**以實現低損耗遠距離輸電！",
      en: "Why AC over DC for grids? Because **transformers only step AC voltage up/down** efficiently for long-distance transmission!"
    }
  },
  {
    id: "diag-charge-fields", book: "book4", kind: "apparatus",
    title: { zh: "帶電粒子在勻強電場（拋物線）與勻強磁場（圓周）中的運動", en: "Charged Particle Motion in Uniform E-Field (Parabola) vs B-Field (Circle)" },
    summary: {
      zh: "對比正電荷垂直射入勻強電場（受恆定同向電力 → 拋物線加速、動能增加）與垂直射入勻強磁場（受恆垂直於速度的磁力 → 勻速圓周運動、速率與動能不變）。",
      en: "Contrasts a $+$ charge entering perpendicular to a uniform E-field (constant force → parabola, KE increases) vs uniform B-field (force $\\perp v$ → uniform circular motion, KE constant)."
    },
    analysis: {
      zh: "• **電場中**：$a = \\frac{qE}{m}$ 恆定，電場力作正功，動能上升。\n• **磁場中**：$r = \\frac{mv}{BQ}$，磁力永不作功，速率不變；質量越大或速度越快，彎曲半徑 $r$ 越大（偏轉越不明顯）。",
      en: "• **E-field**: Constant $a = qE/m$, electric force does work → KE increases.\n• **B-field**: $r = mv/(BQ)$, zero work done → constant speed; heavier/faster particles trace larger radius $r$."
    },
    exam: {
      zh: "判斷磁場中偏轉方向必用左手定則，並先確認粒子帶正電（質子、$\\alpha$）還是負電（電子、$\\beta$）！",
      en: "Check charge sign before applying Fleming's LHR — reverse middle finger for negative charges ($e^-, \\beta^-$)!"
    }
  },

  /* ---------- BOOK 5 ---------- */
  {
    id: "diag-alpha-beta-gamma", book: "book5", kind: "apparatus",
    title: { zh: "$\\alpha, \\beta, \\gamma$ 射線穿透能力與在電/磁場中的偏轉", en: "Penetrating Power & Field Deflection of α, β, γ Radiations" },
    summary: {
      zh: "左圖示三種射線對紙張、鋁片及厚鉛塊的穿透力；右圖示三者垂直射入勻強電場或磁場時的偏轉方向與曲率大小對比。",
      en: "Left: Absorption of $\\alpha$ (paper), $\\beta$ (few mm Al), and $\\gamma$ (thick Pb). Right: Deflection direction and curvature in uniform E/B field."
    },
    analysis: {
      zh: "• $\\alpha$ 帶正電（$+2e$）但質量極重 → 偏轉幅度**細小**。\n• $\\beta$ 帶負電（$-e$）且質量極輕（$q/m$ 極大）→ 向**相反方向大幅偏轉**！\n• $\\gamma$ 不帶電 → **筆直穿過不偏轉**。",
      en: "• $\\alpha$ ($+2e$, massive) → **slight** deflection.\n• $\\beta$ ($-e$, ultra-light, huge $q/m$) → **large opposite** deflection!\n• $\\gamma$ (neutral) → **undeflected**."
    },
    exam: {
      zh: "畫偏轉圖時必須體現出 **$\\beta$ 彎曲程度遠大於 $\\alpha$** 且方向相反！",
      en: "In sketches, ALWAYS show $\\beta$ curving **much more sharply** than $\\alpha$ in the opposite direction!"
    }
  },
  {
    id: "diag-decay-curve", book: "book5", kind: "graph",
    title: { zh: "放射性指數衰變曲線（含本底校正）與 $\\ln A$-$t$ 線性圖", en: "Exponential Decay Curve (with Background) & $\\ln A$ vs $t$ Graph" },
    summary: {
      zh: "左圖對比實測計數率（漸近線為本底 $B$）與減去本底後的真實指數衰變曲線（每經一個 $t_{1/2}$ 減半）；右圖將衰變定律線性化為 $\\ln A = \\ln A_0 - kt$。",
      en: "Left: Raw count rate approaching background level $B$ vs corrected exponential decay halving every $t_{1/2}$. Right: Linearized $\\ln A = \\ln A_0 - kt$ straight line."
    },
    analysis: {
      zh: "• 必須先從實測曲線減去水平漸近線（本底 $B$），再讀取 $A_0 \\to A_0/2 \\to A_0/4$ 對應的等距時間間隔 $t_{1/2}$。\n• $\\ln A$ 對 $t$ 圖：**斜率 $= -k$**，$y$ 截距 $= \\ln A_0$。",
      en: "• Always subtract horizontal asymptote (background $B$) before reading $t_{1/2}$!\n• $\\ln A$ vs $t$: **slope $= -k$**, $y$-intercept $= \\ln A_0$."
    },
    exam: {
      zh: "由於衰變屬隨機過程，真實數據點會圍繞平滑曲線輕微上下波動（statistical fluctuation），切忌用折線連接各點！",
      en: "Real count-rate data fluctuates randomly around the smooth curve due to random decay — draw a smooth best-fit curve!"
    }
  },
  {
    id: "diag-binding-fission", book: "book5", kind: "graph",
    title: { zh: "核子平均結合能曲線（裂變 vs 聚變）與核連鎖反應", en: "Binding Energy per Nucleon Curve (Fission vs Fusion) & Chain Reaction" },
    summary: {
      zh: "左圖示不同質量數 $A$ 原子核的核子平均結合能（最高峰在 $^{56}\\text{Fe}$），直觀說明為何輕核聚變與重核裂變皆放能；右圖示 $^{235}\\text{U}$ 吸收慢中子引發指數倍增連鎖反應。",
      en: "Left: Binding energy per nucleon peaks at $^{56}\\text{Fe}$, showing why both light-nuclei fusion and heavy-nuclei fission release energy. Right: $^{235}\\text{U}$ fission chain reaction."
    },
    analysis: {
      zh: "• 任何令核子平均結合能**增加**（走向 $^{56}\\text{Fe}$ 峰頂）的核反應均伴隨質量虧損並釋放能量。\n• 聚變斜率遠比裂變陡峭 → 單位核子（每公斤燃料）聚變釋能遠高於裂變！",
      en: "• Any reaction increasing binding energy per nucleon (towards $^{56}\\text{Fe}$) releases energy via mass defect.\n• Steeper rise for light nuclei → fusion releases far more energy per kg than fission!"
    },
    exam: {
      zh: "注意裂變反應方程必須配平質量數與原子序數，且記得左邊有「$+ ^1_0 n$」（入射慢中子）！",
      en: "Always balance both mass number $A$ and atomic number $Z$, including the triggering neutron $^1_0 n$ on the left!"
    }
  },

  /* ---------- BOOK E2 ---------- */
  {
    id: "diag-rutherford", book: "booke2", kind: "apparatus",
    title: { zh: "盧瑟福金箔 $\\alpha$ 粒子散射實驗與原子核軌跡圖", en: "Rutherford's Gold-Foil α-Scattering Apparatus & Nuclear Trajectories" },
    summary: {
      zh: "左圖為真空腔室、$\\alpha$ 源、超薄金箔及可旋轉 ZnS 螢光探測器；右圖微觀呈現絕大部分 $\\alpha$ 粒子直穿空曠空間，僅逼近金核的粒子因強庫侖斥力發生大角度反彈。",
      en: "Left: Vacuum chamber, $\\alpha$-source, ultra-thin gold foil, and rotatable ZnS detector. Right: Microscopic trajectories — most pass undeflected, rare near-head-on hits rebound $>90^\\circ$."
    },
    analysis: {
      zh: "• 直穿（$>99\\%$）→ 原子大多空曠。\n• 小角偏轉 → 原子核帶正電。\n• 大角反彈（$>90^\\circ$）→ 幾乎全部質量與正電荷集中在極微小的原子核內。",
      en: "• Undeflected ($>99\\%$) → mostly empty space.\n• Small deflections → positive nucleus.\n• Backscattering ($>90^\\circ$) → tiny, ultra-dense, positively charged nucleus."
    },
    exam: {
      zh: "Paper 2 選修二最常考「為何用極薄金箔？」與「為何置於真空？」，以及「為何反彈不會由電子引起？」（因電子質量遠輕於 $\\alpha$ 粒子約 7300 倍！）。",
      en: "Why don't electrons deflect $\\alpha$-particles back? Because electrons are ~7300 times lighter than $\\alpha$-particles!"
    }
  },
  {
    id: "diag-photoelectric", book: "booke2", kind: "graph",
    title: { zh: "光電效應兩大核心圖像：$I$-$V$ 曲線與 $K_{\\max}$-$f$ 直線圖", en: "Photoelectric Effect Core Graphs: $I$-$V$ Curves & $K_{\\max}$ vs $f$" },
    summary: {
      zh: "左圖示光電流 $I$ 隨電壓 $V$ 變化：同頻不同光強共用同一截止電勢 $-V_s$ 但飽和電流不同；高頻光截止電勢更大。右圖示不同金屬平行的 $K_{\\max} = hf - \\phi$ 直線。",
      en: "Left: Photocurrent $I$ vs $V$ showing identical $-V_s$ for same $f$ (different intensity) and larger $|V_s|$ for higher $f$. Right: Parallel $K_{\\max} = hf - \\phi$ lines for different metals."
    },
    analysis: {
      zh: "• **$I$-$V$ 圖**：反向電壓達 $-V_s$ 時 $I = 0$（$eV_s = K_{\\max}$）；正向足夠大時全數光電子被收集達 $I_{\\text{sat}}$。\n• **$K_{\\max}$-$f$ 圖**：所有金屬斜率均等於普朗克常數 **$h$**（平行線！）；$x$ 截距 $= f_0$；$y$ 截距 $= -\\phi$。",
      en: "• **$I$-$V$**: Current hits $0$ at $-V_s$ ($eV_s = K_{\\max}$); plateaus at $I_{\\text{sat}}$ under forward voltage.\n• **$K_{\\max}$-$f$**: ALL metals share identical slope **$h$** (parallel!); $x$-int $= f_0$; $y$-int $= -\\phi$."
    },
    exam: {
      zh: "注意：若題目保持**入射光功率 $P$ 不變**而增大頻率 $f$，圖中 $-V_s$ 向左移（變大），但飽和平台 $I_{\\text{sat}}$ 會**向下降低**！",
      en: "Exam killer: Raising $f$ at **fixed incident power $P$** shifts $-V_s$ farther left AND **LOWERS** the saturation plateau $I_{\\text{sat}}$!"
    }
  },
  {
    id: "diag-bohr-levels", book: "booke2", kind: "graph",
    title: { zh: "玻爾氫原子能級圖（萊曼/巴耳末/帕邢系與電離態）", en: "Bohr Hydrogen Energy Level Diagram (Lyman, Balmer & Paschen Series)" },
    summary: {
      zh: "展示氫原子不均勻分佈的量子化能級（$E_n = -13.6/n^2\\text{ eV}$，越往上越密至 $E_\\infty = 0$ 電離線），以及躍遷回 $n=1$（UV）、$n=2$（可見光）、$n=3$（IR）的發射光譜線。",
      en: "Shows converging quantized hydrogen levels ($E_n = -13.6/n^2\\text{ eV}$ up to ionization $0\\text{ eV}$) and downward radiative transitions forming Lyman (UV), Balmer (Visible), and Paschen (IR) series."
    },
    analysis: {
      zh: "• 能級間距隨 $n$ 增大迅速變密（$n=1\\to 2$ 差 $10.2\\text{ eV}$，佔去電離能 $13.6\\text{ eV}$ 的四分之三！）。\n• 箭嘴長度 $\\propto \\Delta E \\propto f \\propto \\frac{1}{\\lambda}$：箭嘴越長，光子波長越短！",
      en: "• Levels crowd closer near $0\\text{ eV}$ ($n=1\\to 2$ jump alone is $10.2\\text{ eV}$!).\n• Arrow length $\\propto \\Delta E \\propto f \\propto 1/\\lambda$: longer arrow = shorter wavelength!"
    },
    exam: {
      zh: "緊記：**向下箭嘴 = 發射光子（發射光譜）**；**向上箭嘴 = 吸收光子/電子碰撞激發**！",
      en: "Downward arrow = photon emission; upward arrow = absorption / excitation!"
    }
  },
  {
    id: "diag-tem-stm", book: "booke2", kind: "apparatus",
    title: { zh: "透射電子顯微鏡（TEM）與掃描隧道顯微鏡（STM）原理對比", en: "TEM vs STM Operating Principles (Magnetic Lenses vs Quantum Tunnelling)" },
    summary: {
      zh: "左圖示 TEM 高壓電子槍 → 磁聚光鏡 → 極薄樣本 → 磁物鏡/投影鏡 → 螢光屏（全程真空）；右圖示 STM 尖銳探針在 $1\\text{ nm}$ 處藉量子穿隧電流掃描導電原子表面。",
      en: "Left: TEM column in vacuum (electron gun, magnetic lenses, ultra-thin specimen, fluorescent screen). Right: STM sharp conducting tip scanning ~$1\\text{ nm}$ above surface using exponential quantum tunnelling current."
    },
    analysis: {
      zh: "• **TEM**：依靠極短德布羅意波長 $\\lambda = \\frac{h}{\\sqrt{2m_e eV}}$ 突破瑞利判據限制，獲超高 2D 解像度。\n• **STM**：**無需透鏡、不靠波動繞射成像**，靠隧道電流對間距 $d$ 的指數敏感度直接描繪 3D 原子表面形貌！",
      en: "• **TEM**: Beats optical diffraction limit via ultra-short de Broglie $\\lambda$.\n• **STM**: Uses NO lenses — relies on exponential sensitivity of quantum tunnelling current to tip-surface gap $d$ for 3D atomic imaging!"
    },
    exam: {
      zh: "對比限制：TEM 須極薄非活體樣本及高真空；STM 樣本表面必須**導電**，且只能探測表面（無法看內部）。",
      en: "Limitations: TEM needs ultra-thin dead samples in vacuum; STM needs **conducting** surfaces and sees surface only."
    }
  },

  /* ---------- BOOK E3 ---------- */
  {
    id: "diag-illumination", book: "booke3", kind: "apparatus",
    title: { zh: "點光源平方反比定律與朗伯餘弦定律幾何圖", en: "Inverse-Square Law & Lambert's Cosine Law Geometry" },
    summary: {
      zh: "展示點光源在距離 $r$ 及 $2r$ 處光束擴散面積變為 $4\\times$（照度降為 $1/4$），以及光線以入射角 $\\theta$ 斜射水平桌面時照度按 $\\cos\\theta$ 衰減的幾何推導。",
      en: "Shows spherical spreading ($2r \\Rightarrow 4A \\Rightarrow E/4$) and oblique incidence geometry at lamp height $h$, offset $x$, angle $\\theta$: $E = \\frac{\\Phi}{4\\pi r^2}\\cos\\theta$."
    },
    analysis: {
      zh: "• 正下方（$x=0, \\theta=0^\\circ$）：照度最大 $E_0 = \\frac{\\Phi}{4\\pi h^2}$。\n• 水平偏移 $x$ 處：$E = \\frac{\\Phi h}{4\\pi (h^2 + x^2)^{3/2}}$。",
      en: "• Directly below ($x=0$): max illuminance $E_0 = \\Phi / (4\\pi h^2)$.\n• At horizontal offset $x$: $E = \\frac{\\Phi h}{4\\pi(h^2 + x^2)^{3/2}}$."
    },
    exam: {
      zh: "切記 $\\theta$ 是光線與受照表面**法線（垂線）** 的夾角，切勿誤用與桌面的夾角！",
      en: "Angle $\\theta$ is ALWAYS measured from the surface **normal**, NOT from the tabletop!"
    }
  },
  {
    id: "diag-heat-pump", book: "booke3", kind: "apparatus",
    title: { zh: "冷氣機 / 熱泵製冷循環與能量流圖（COP）", en: "Air Conditioner / Heat Pump Cycle & Energy Flow Diagram" },
    summary: {
      zh: "完整描繪蒸發器（室內汽化吸熱 $Q_C$）→ 壓縮機（輸入電功 $W$）→ 冷凝器（室外液化放熱 $Q_H = Q_C + W$）→ 膨脹閥（降壓降溫）四步閉合循環。",
      en: "Complete 4-stage loop: Evaporator (indoor vaporization absorbing $Q_C$) → Compressor (electrical work $W$) → Condenser (outdoor condensation releasing $Q_H = Q_C + W$) → Expansion valve."
    },
    analysis: {
      zh: "• 能量守恆：$Q_H = Q_C + W$，故冷氣機室外機排出的熱量**永遠大於**室內抽走的熱量！\n• $\\text{COP}_{\\text{cool}} = \\frac{Q_C}{W}$；$\\text{COP}_{\\text{heat}} = \\frac{Q_H}{W} = \\text{COP}_{\\text{cool}} + 1$。",
      en: "• Energy conservation: $Q_H = Q_C + W$ (outdoor exhaust heat always exceeds indoor cooling!).\n• $\\text{COP}_{\\text{cool}} = Q_C/W$; $\\text{COP}_{\\text{heat}} = Q_H/W = \\text{COP}_{\\text{cool}} + 1$."
    },
    exam: {
      zh: "常考「為何壓縮機必須把製冷劑壓縮升溫？」答：令製冷劑溫度**高於室外空氣溫度**，熱量才能在冷凝器自發散發到室外！",
      en: "Why compress the refrigerant? To raise its temperature **above outdoor air temperature** so heat flows spontaneously out at the condenser!"
    }
  },
  {
    id: "diag-building-wall", book: "booke3", kind: "apparatus",
    title: { zh: "複合牆體 / 雙層玻璃熱傳導溫度分佈與總 $U$ 值", en: "Composite Wall / Double Glazing Temperature Profile & U-Value" },
    summary: {
      zh: "展示熱能由室外高溫 $T_H$ 經混凝土/雙層玻璃空氣夾層傳向室內低溫 $T_C$ 的穩態溫度梯度圖——隔熱越佳（$\\kappa$ 越低、$U$ 越小）的夾層，溫降越陡峭！",
      en: "Steady-state temperature profile across a composite wall / double-glazed window from $T_H$ to $T_C$. Lower conductivity $\\kappa$ (still air layer) causes a much steeper temperature drop!"
    },
    analysis: {
      zh: "• 穩態熱流處處相等：$\\frac{Q}{t} = U_1 A(T_H - T_m) = U_2 A(T_m - T_C) = U_{\\text{total}} A(T_H - T_C)$。\n• 串聯總傳熱系數：$\\frac{1}{U_{\\text{total}}} = \\frac{1}{U_1} + \\frac{1}{U_2}$。",
      en: "• Equal steady heat flow across layers: $U_1(T_H - T_m) = U_2(T_m - T_C)$.\n• Series U-values add inversely: $1/U_{\\text{total}} = 1/U_1 + 1/U_2$."
    },
    exam: {
      zh: "雙層玻璃間空氣層不可過厚（通常 10–16 mm），否則內部會產生**空氣對流**反而削弱隔熱效果！",
      en: "Air gap in double glazing must not be too wide (~10–16 mm), otherwise **convection currents** form inside and worsen heat loss!"
    }
  },
  {
    id: "diag-renewable-pwr", book: "booke3", kind: "apparatus",
    title: { zh: "風力渦輪掃掠模型與壓水式核反應堆（PWR）雙迴路結構", en: "Wind Turbine Swept Column & Pressurized Water Reactor (PWR) Dual-Loop" },
    summary: {
      zh: "左圖示風柱（面積 $A=\\pi r^2$，長 $v\\Delta t$）流經葉片推導 $P = \\frac{1}{2}\\rho A v^3$；右圖示壓水堆燃料棒、控制棒、慢化劑、一迴路高壓水、蒸汽發生器與二迴路渦輪發電機。",
      en: "Left: Air cylinder (area $\\pi r^2$, length $v\\Delta t$) deriving $P = \\frac{1}{2}\\rho Av^3$. Right: PWR core (fuel rods, control rods, water moderator), pressurized primary loop, steam generator & secondary turbine loop."
    },
    analysis: {
      zh: "• **風電**：$P \\propto r^2 v^3$；風速無法降至零，效率低於貝茲極限 $59.3\\%$。\n• **PWR 雙迴路設計**：防止具放射性的反應堆一迴路水接觸外部發電渦輪或洩漏至大海冷卻水。",
      en: "• **Wind**: $P \\propto r^2 v^3$; air cannot stop completely ($\\eta < 59.3\\%$ Betz limit).\n• **PWR Dual Loops**: Isolates radioactive primary coolant from external turbine and condenser cooling water."
    },
    exam: {
      zh: "切勿混淆 PWR 的**慢化劑（水：減慢快中子）** 與**控制棒（硼/鎘：吸收中子控制反應速率）**！",
      en: "Never mix up **moderator** (pressurized water: slows fast neutrons) vs **control rods** (boron/cadmium: absorb neutrons)!"
    }
  }
];
