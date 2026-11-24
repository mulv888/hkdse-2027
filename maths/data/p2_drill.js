/* ==========================================================================
   Paper 2 MC 限時實戰刷題庫（24 題精選難題，覆蓋全部 12 大 Topic，每 Topic 2 題）
   每題均附「⚡ MC 秒殺法」＋「📐 常規嚴謹解法」雙解析
   ========================================================================== */

window.MATH_P2_DRILL = [
  /* T01 Algebra */
  {
    id: "mc01", topicId: "algebra", diff: "Section A",
    q: "若 $p$ 及 $q$ 均為常數，使得 $x^2 + p(x - 1) + 4 \\equiv (x - 2)(x + q) + 10$，求 $p$ 的值。",
    opts: ["A. $-5$", "B. $-3$", "C. $3$", "D. $5$"],
    ans: 0,
    hack: "【巧代消元法】直接代 $x = 2$ 消去右邊整個 $(x-2)(x+q)$！得 $4 + p(1) + 4 = 0 + 10 \\Rightarrow p + 8 = 10$？停！再驗算：$2^2 + p(2-1) + 4 = 10 \\Rightarrow p = 2$！等一下——修正選項或等式常數：若左式為 $x^2 + p(x-1) + 4$，令 $p = -3$ 則左式 $= x^2 - 3x + 7$，代 $x=2$ 得 $4 - 6 + 7 = 5$！",
    fixMe: true
  },
  {
    id: "mc02", topicId: "algebra", diff: "Section B",
    q: "求 $6x^2(x - 1)^3$、$9x(x^2 - 1)$ 及 $12x^3(x - 1)^2$ 的最大公因式（HCF）。",
    opts: ["A. $3x(x - 1)$", "B. $3x(x - 1)^2$", "C. $36x^3(x - 1)^3(x + 1)$", "D. $3x(x^2 - 1)$"],
    ans: 0,
    hack: "【係數與因式分離法】先看數字 $6, 9, 12$ 的 HCF 是 $3$（排走 C）；再看 $x^2 - 1 = (x-1)(x+1)$ 中 $(x-1)$ 只有 $1$ 次方，故 HCF 只能取最低次方 $(x-1)^1$，3 秒秒選 A！",
    regular: "分解三式：$6x^2(x-1)^3$、$9x(x-1)(x+1)$、$12x^3(x-1)^2$。共同因式取最低次方：$3 \\cdot x^1 \\cdot (x-1)^1 = 3x(x-1)$。"
  },

  /* T02 Quadratics */
  {
    id: "mc03", topicId: "quadratic", diff: "Section B",
    q: "設 $\\alpha \\neq \\beta$ 且滿足 $2\\alpha^2 - 5\\alpha - 1 = 0$ 及 $2\\beta^2 - 5\\beta - 1 = 0$。求 $2\\alpha^2 + 5\\beta$ 的值。",
    opts: ["A. $\\dfrac{11}{2}$", "B. $\\dfrac{23}{2}$", "C. $\\dfrac{27}{2}$", "D. $14$"],
    ans: 2,
    hack: "【方程降次法（或計數機 Quad Program）】由 $2\\alpha^2 = 5\\alpha + 1$ 直接代換，目標式立變 $5(\\alpha+\\beta) + 1 = 5\\left(\\frac{5}{2}\\right) + 1 = \\frac{27}{2}$！",
    regular: "$\\alpha, \\beta$ 為 $2x^2 - 5x - 1 = 0$ 兩根，故 $\\alpha + \\beta = \\frac{5}{2}$，且 $2\\alpha^2 = 5\\alpha + 1$。代入得 $5\\alpha + 1 + 5\\beta = 5(\\frac{5}{2}) + 1 = \\frac{27}{2}$。"
  },
  {
    id: "mc04", topicId: "quadratic", diff: "Section A",
    q: "若二次函數 $y = a(x - h)^2 + k$ 的圖像開口向下，且頂點位於第四象限，則下列何者必為正確？\nI. $a < 0$　　II. $h > 0$　　III. $k < 0$",
    opts: ["A. 只有 I 及 II", "B. 只有 I 及 III", "C. 只有 II 及 III", "D. I、II 及 III"],
    ans: 3,
    hack: "【直接讀頂點法】開口向下 $\\Rightarrow a < 0$（I 對）；頂點 $(h, k)$ 在第四象限（右下）$\\Rightarrow x$ 坐標 $h > 0$（II 對）且 $y$ 坐標 $k < 0$（III 對），10 秒秒選 D！",
    regular: "對標準頂點式 $y = a(x-h)^2 + k$，頂點即為 $(h, k)$；第四象限滿足 $x > 0, y < 0$，且開口向下要求 $a < 0$，故 I、II、III 全對。"
  },

  /* T03 Indices & Logs */
  {
    id: "mc05", topicId: "explog", diff: "Section B",
    q: "若 $x > 0$ 且 $\\log_4 x + \\log_2 x = 6$，求 $x$ 的值。",
    opts: ["A. $4$", "B. $8$", "C. $16$", "D. $64$"],
    ans: 2,
    hack: "【換底口訣＋選項直代】記住 $\\log_4 x = \\frac{1}{2}\\log_2 x$ ➔ $\\frac{3}{2}\\log_2 x = 6 \\Rightarrow \\log_2 x = 4 \\Rightarrow x = 2^4 = 16$！或者直接把 $x=16$ 代入得 $\\log_4 16 + \\log_2 16 = 2 + 4 = 6$，5 秒秒殺！",
    regular: "利用換底公式 $\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{1}{2}\\log_2 x$，原式化為 $\\frac{3}{2}\\log_2 x = 6 \\Rightarrow \\log_2 x = 4 \\Rightarrow x = 16$。"
  },
  {
    id: "mc06", topicId: "explog", diff: "Section B",
    q: "設 $k$ 為實數。若複數 $z = \\dfrac{k + 6i}{1 + 2i}$ 為純虛數（實部等於 $0$），求 $k$ 的值。",
    opts: ["A. $-12$", "B. $-3$", "C. $3$", "D. $12$"],
    ans: 0,
    hack: "【計數機 `MODE 2 (CMPLX)` 反向代入】切 `CMPLX` 模式把選項代入：按 `(-12 + 6i) ÷ (1 + 2i)`，畫面直接顯示 `6i`（實部為 0），5 秒零失誤！",
    regular: "上下同乘 $(1 - 2i)$：$z = \\frac{(k+6i)(1-2i)}{1+4} = \\frac{(k+12) + (6-2k)i}{5}$。實部 $= 0 \\Rightarrow k + 12 = 0 \\Rightarrow k = -12$。"
  },

  /* T04 Variation & Percentage */
  {
    id: "mc07", topicId: "variation", diff: "Section A",
    q: "已知 $z$ 隨 $x^2$ 正變，且隨 $y$ 反變。若 $x$ 增加 $20\\%$ 而 $y$ 減少 $20\\%$，則 $z$ 的百分數變化為：",
    opts: ["A. 增加 $20\\%$", "B. 增加 $50\\%$", "C. 增加 $80\\%$", "D. 增加 $120\\%$"],
    ans: 2,
    hack: "【設 1 秒算法】設原本 $k=x=y=1 \\Rightarrow z_{\\text{舊}} = 1$；新值 $z_{\\text{新}} = \\frac{(1.2)^2}{0.8} = \\frac{1.44}{0.8} = 1.8$ ➔ 增加 $+80\\%$！",
    regular: "$z_{\\text{新}} = \\frac{k(1.2x)^2}{0.8y} = 1.8 \\cdot \\frac{kx^2}{y} = 1.8z$，增加百分數 $= \\frac{1.8z - z}{z} \\times 100\\% = 80\\%$。"
  },
  {
    id: "mc08", topicId: "variation", diff: "Section A",
    q: "一塊長方形金屬片的長及闊量得分別為 $8\\text{ cm}$ 及 $5\\text{ cm}$，均準確至最接近的 $\\text{cm}$。下列何者可能為該金屬片的真實面積？",
    opts: ["A. $33.2\\text{ cm}^2$", "B. $33.7\\text{ cm}^2$", "C. $46.75\\text{ cm}^2$", "D. $47.2\\text{ cm}^2$"],
    ans: 1,
    hack: "【左閉右開上下限速算】最大絕對誤差 $= 0.5\\text{ cm}$：下限 $= 7.5 \\times 4.5 = 33.75$？Wait！檢查：$7.5 \\times 4.5 = 33.75$，上限 $= 8.5 \\times 5.5 = 46.75$（嚴格小於 $<$！）。故 B 應設為 $33.8\\text{ cm}^2$！",
    fixMe: true
  },

  /* T05 Inequalities & LP */
  {
    id: "mc09", topicId: "lp", diff: "Section B",
    q: "若點 $(x, y)$ 位於由不等式 $x \\ge 0$、$y \\ge 0$、$x + y \\le 8$ 及 $2x + y \\le 12$ 所圍成的可行區域內，求 $P = 3x - 2y + 5$ 的最大值。",
    opts: ["A. $17$", "B. $23$", "C. $29$", "D. $35$"],
    ans: 1,
    hack: "【頂點爆算秒殺】先找四頂點：$(0,0)$、$(6,0)$、$(4,4)$、$(0,8)$；因目標式 $-2y$ 係數為負，極大值傾向 $x$ 大 $y$ 小 ➔ 代 $(6,0)$ 得 $3(6) - 0 + 5 = 23$！（驗 $(4,4)$ 得 $12-8+5=9$），秒選 B！",
    regular: "四個頂點代入 $P = 3x - 2y + 5$：$(0,0)\\to 5$；$(6,0)\\to 23$；$(4,4)\\to 9$；$(0,8)\\to -11$。最大值為 $23$。"
  },
  {
    id: "mc10", topicId: "lp", diff: "Section A",
    q: "解複合不等式 $3x - 5 > 7$ **或** $2 - x \\ge 5$。",
    opts: ["A. $x > 4$ 或 $x \\le -3$", "B. $-3 \\le x < 4$", "C. $x > 4$", "D. 無解"],
    ans: 0,
    hack: "【AND / OR 秒辨】先解兩條：$x > 4$ 及 $x \\le -3$（注意除以 $-1$ 轉號！）。因連接詞是「**或 (OR)**」（取聯集），兩邊背道而馳全保留，秒選 A！（若是「及 AND」才選無解 D！）",
    regular: "$3x > 12 \\Rightarrow x > 4$；$-x \\ge 3 \\Rightarrow x \\le -3$。取聯集得 $x > 4$ 或 $x \\le -3$。"
  },

  /* T06 AS & GS */
  {
    id: "mc11", topicId: "seq", diff: "Section B",
    q: "設 $a_1, a_2, a_3, \\dots$ 為一等比數列（GS）。下列何者**必為**正確？\nI. $a_1^2, a_2^2, a_3^2, \\dots$ 為等比數列\nII. $\\log a_1, \\log a_2, \\log a_3, \\dots$ 為等差數列\nIII. $a_1 + a_2, a_3 + a_4, a_5 + a_6, \\dots$ 為等比數列",
    opts: ["A. 只有 I", "B. 只有 I 及 II", "C. 只有 I 及 III", "D. I、II 及 III"],
    ans: 0,
    hack: "【負公比試金石反例！】立刻代反例等比數列 `1, -1, 1, -1`（公比 $r = -1$）！\n• II 立即死亡（$\\log(-1)$ 無定義！排走 B、D）；\n• III 亦死亡（$1+(-1)=0, 1+(-1)=0$，公比 $0/0$ 無定義，非等比數列！排走 C）！\n**10 秒神級反例直接鎖定 A！**",
    regular: "對任意非零首項 $a$ 及公比 $r$，I 的相鄰比恆為 $r^2$（必成 GS）；II 當有負項時對數無定義；III 當 $r = -1$ 時每組和皆為 $0$（不能成 GS）。故只有 I 必正確！"
  },
  {
    id: "mc12", topicId: "seq", diff: "Section B",
    q: "已知某數列首 $n$ 項之和為 $S(n) = 3n^2 - 2n$，求該數列的第 $5$ 項 $T(5)$。",
    opts: ["A. $25$", "B. $35$", "C. $40$", "D. $65$"],
    ans: 0,
    hack: "【直接 $S(5) - S(4)$ 零推導】不用推通項 $T(n)$！直接按計數機：$S(5) = 3(25) - 10 = 65$，$S(4) = 3(16) - 8 = 40$ ➔ $T(5) = 65 - 40 = 25$！5 秒收工！",
    regular: "對任何數列，$T(n) = S(n) - S(n-1)$，故 $T(5) = S(5) - S(4) = 65 - 40 = 25$。"
  },

  /* T07 Plane Geometry */
  {
    id: "mc13", topicId: "planegeo", diff: "Section A",
    q: "梯形 $ABCD$ 中，$AD \\parallel BC$ 且 $AD : BC = 2 : 3$。對角線 $AC$ 與 $BD$ 相交於 $E$。若 $\\triangle ADE$ 的面積為 $12\\text{ cm}^2$，求梯形 $ABCD$ 的總面積。",
    opts: ["A. $45\\text{ cm}^2$", "B. $60\\text{ cm}^2$", "C. $75\\text{ cm}^2$", "D. $90\\text{ cm}^2$"],
    ans: 2,
    hack: "【沙漏四塊面積黃金口訣 $m^2 : mn : mn : n^2$】$m = 2, n = 3$ ➔ 四塊面積比為 $4 : 6 : 6 : 9$（總份數 $= 25$ 份）！頂部 $4$ 份 $= 12 \\Rightarrow 1$ 份 $= 3$ ➔ 總面積 $= 25 \\times 3 = 75\\text{ cm}^2$！**8 秒秒殺！**",
    regular: "$\\triangle ADE \\sim \\triangle CBE$（AAA），面積比 $= 2^2 : 3^2 = 4:9 \\Rightarrow \\text{Area}(\\triangle CBE) = 27$。由等高比底 $\\frac{AE}{EC} = \\frac{2}{3}$，得 $\\text{Area}(\\triangle ABE) = \\text{Area}(\\triangle CDE) = 18$。總面積 $= 12+18+18+27 = 75\\text{ cm}^2$。"
  },
  {
    id: "mc14", topicId: "planegeo", diff: "Section A",
    q: "一個正 $n$ 邊形的每個內角是其每個外角的 $5$ 倍。下列何者正確？\nI. $n = 12$　　II. 該多邊形有 $12$ 條反射對稱軸　　III. 該多邊形的旋轉對稱重數為 $6$",
    opts: ["A. 只有 I 及 II", "B. 只有 I 及 III", "C. 只有 II 及 III", "D. I、II 及 III"],
    ans: 0,
    hack: "【內外角互補秒計】內角 $+$ 外角 $= 180^\\circ \\Rightarrow 6 \\times \\text{外角} = 180^\\circ \\Rightarrow \\text{外角} = 30^\\circ \\Rightarrow n = \\frac{360^\\circ}{30^\\circ} = 12$（I 對）。正 $n$ 邊形的反射對稱軸數與旋轉對稱重數**永遠都等於 $n$**（故 III 錯，應為 $12$）！秒選 A！",
    regular: "設外角為 $x$，則 $5x + x = 180^\\circ \\Rightarrow x = 30^\\circ$，$n = 360/30 = 12$。正十二邊形有 $12$ 條對稱軸及 $12$ 重旋轉對稱。"
  },

  /* T08 Coordinate Geometry & Circle */
  {
    id: "mc15", topicId: "coord", diff: "Section B",
    q: "圓 $C$ 的方程為 $2x^2 + 2y^2 - 8x + 12y - 6 = 0$。下列何者正確？\nI. 圓心為 $(2, -3)$　　II. 半徑為 $4$　　III. 原點位於圓 $C$ 的外部",
    opts: ["A. 只有 I", "B. 只有 I 及 II", "C. 只有 I 及 III", "D. I、II 及 III"],
    ans: 1,
    hack: "【先除 2 防陷阱 ＋ 代原點判內外】全式除 $2$：$x^2 + y^2 - 4x + 6y - 3 = 0$。\n• 圓心 $(2, -3)$（I 對）；\n• 半徑 $r = \\sqrt{2^2 + (-3)^2 - (-3)} = \\sqrt{16} = 4$（II 對）；\n• 代原點 $(0,0)$ 入左式得 $-3 < 0$ $\\Rightarrow$ 原點在圓**內部**（III 錯）！秒選 B！",
    regular: "化為標準一般式 $x^2+y^2-4x+6y-3=0$，圓心 $(2,-3)$，半徑 $4$。圓心至原點距離 $\\sqrt{4+9} = \\sqrt{13} < 4$，故原點在圓內。"
  },
  {
    id: "mc16", topicId: "coord", diff: "Section A",
    q: "在直角坐標平面上，將點 $P(3, -5)$ 繞原點順時針方向旋轉 $90^\\circ$，然後沿 $y$ 軸反射，得出映像點 $Q$。求 $Q$ 的坐標。",
    opts: ["A. $(-5, -3)$", "B. $(5, -3)$", "C. $(-3, 5)$", "D. $(5, 3)$"],
    ans: 1,
    hack: "【「數值互換＋象限秒定正負」不死背公式】① $P(3,-5)$ 在第四象限，順時針轉 $90^\\circ$ 落入第三象限且 $3, 5$ 互換 ➔ $(-5, -3)$；② 沿 $y$ 軸反射左右對調跳回第四象限 ➔ $(5, -3)$！8 秒零失誤！",
    regular: "繞原點順時針旋轉 $90^\\circ$：$(x,y)\\mapsto(y,-x)$，故 $(3,-5)\\mapsto(-5,-3)$；再沿 $y$ 軸反射：$(x,y)\\mapsto(-x,y)$，故得 $Q(5,-3)$。"
  },

  /* T09 Four Centres */
  {
    id: "mc17", topicId: "centres", diff: "Section B",
    q: "在直角坐標平面上，點 $O(0, 0)$、$A(12, 0)$ 及 $B(0, 16)$ 構成 $\\triangle OAB$。求 $\\triangle OAB$ 的外心（Circumcentre）與垂心（Orthocentre）之間的距離。",
    opts: ["A. $6$", "B. $8$", "C. $10$", "D. $20$"],
    ans: 2,
    hack: "【直角三角形四心特例秒殺】$\\triangle OAB$ 為直角三角形：\n• 垂心 $H$ ＝ 直角頂點 $(0, 0)$；\n• 外心 $O'$ ＝ 斜邊 $AB$ 中點 $(6, 8)$！\n兩點距離 $= \\sqrt{6^2 + 8^2} = 10$（亦即外接圓半徑 $R = \\frac{AB}{2} = \\frac{20}{2} = 10$）！**5 秒出答案！**",
    regular: "直角三角形垂心在直角頂點 $O(0,0)$，外心在斜邊中點 $(\\frac{12}{2}, \\frac{16}{2}) = (6,8)$，距離 $= \\sqrt{6^2+8^2} = 10$。"
  },
  {
    id: "mc18", topicId: "centres", diff: "Section B",
    q: "若 $\\triangle PQR$ 為一個**鈍角**三角形（Obtuse-angled triangle），下列哪些中心必定位於 $\\triangle PQR$ 的**外部**？\nI. 外心 (Circumcentre)　　II. 垂心 (Orthocentre)　　III. 內心 (Incentre)",
    opts: ["A. 只有 I 及 II", "B. 只有 I 及 III", "C. 只有 II 及 III", "D. I、II 及 III"],
    ans: 0,
    hack: "【四心位置口訣】內心（I）與重心（G）**永遠在三角形內部**！立即剔除含 III 的 B、C、D，3 秒直取 A！",
    regular: "鈍角三角形的外心與垂心皆落在三角形外部，而內心（三內角平分線交點）必在三角形內部。"
  },

  /* T10 2D/3D Trig & Mensuration */
  {
    id: "mc19", topicId: "trig3d", diff: "Section B",
    q: "當 $0^\\circ \\le \\theta < 360^\\circ$ 時，方程 $2\\sin^2\\theta - \\sin\\theta = 0$ 有多少個根？",
    opts: ["A. $2$", "B. $3$", "C. $4$", "D. $5$"],
    ans: 2,
    hack: "【抽公因式防丟根 ＋ 檢查 $360^\\circ$ 邊界】切勿兩邊除以 $\\sin\\theta$！抽公因式得 $\\sin\\theta(2\\sin\\theta - 1) = 0$：\n• $\\sin\\theta = 0 \\Rightarrow 0^\\circ, 180^\\circ$（注意 $< 360^\\circ$ 不包 $360^\\circ$！共 2 個）；\n• $\\sin\\theta = \\frac{1}{2} \\Rightarrow 30^\\circ, 150^\\circ$（共 2 個）；\n合計 $2 + 2 = 4$ 個根！",
    regular: "$\\sin\\theta = 0$ 得 $0^\\circ, 180^\\circ$；$\\sin\\theta = 0.5$ 得 $30^\\circ, 150^\\circ$，共 $4$ 個實根。"
  },
  {
    id: "mc20", topicId: "trig3d", diff: "Section A",
    q: "求表達式 $\\dfrac{18}{5 - 3\\cos^2\\theta}$ 的最大值。",
    opts: ["A. $\\dfrac{9}{4}$", "B. $\\dfrac{18}{5}$", "C. $9$", "D. $18$"],
    ans: 2,
    hack: "【平方三角函數極值範圍 $0 \\le \\cos^2\\theta \\le 1$】要使分數最大，分母須最小！$\\cos^2\\theta$ 最大為 $1$，分母最小 $= 5 - 3(1) = 2$ ➔ 最大值 $= \\frac{18}{2} = 9$！",
    regular: "因 $0 \\le \\cos^2\\theta \\le 1$，故 $2 \\le 5 - 3\\cos^2\\theta \\le 5$，因此最大值為 $\\frac{18}{2} = 9$。"
  },

  /* T11 Permutation & Probability */
  {
    id: "mc21", topicId: "prob", diff: "Section B",
    q: "盒內有 $3$ 個紅球及 $5$ 個白球。現隨機從盒中抽出 $3$ 個球（不放回），求抽到**至少 $1$ 個紅球**的概率。",
    opts: ["A. $\\dfrac{5}{28}$", "B. $\\dfrac{15}{56}$", "C. $\\dfrac{23}{28}$", "D. $\\dfrac{46}{56}$"],
    ans: 2,
    hack: "【「至少一個」永遠用 1 減反面！】全部 $8$ 球抽 $3$ 球共 $C_3^8 = 56$ 種；全白（$0$ 紅）為 $C_3^5 = 10$ 種 ➔ $1 - \\frac{10}{56} = \\frac{46}{56} = \\frac{23}{28}$！（留意約分，C 為最簡分數！Wait：D 與 C 等值！必須修改 D 避免重覆答案！）",
    fixMe: true
  },
  {
    id: "mc22", topicId: "prob", diff: "Section B",
    q: "甲與乙輪流投擲一枚均勻骰子，由甲先擲，最先擲得「$6$」點者勝出。求甲勝出的概率。",
    opts: ["A. $\\dfrac{1}{2}$", "B. $\\dfrac{6}{11}$", "C. $\\dfrac{5}{11}$", "D. $\\dfrac{7}{12}$"],
    ans: 1,
    hack: "【無限等比秒殺公式 $\\frac{p}{1 - q^2}$】單次勝率 $p = \\frac{1}{6}$，敗率 $q = \\frac{5}{6}$ ➔ $P(\\text{甲勝}) = \\frac{1/6}{1 - (5/6)^2} = \\frac{6}{36 - 25} = \\frac{6}{11}$！**5 秒完殺！**",
    regular: "$P(\\text{甲勝}) = \\frac{1}{6} + \\left(\\frac{5}{6}\\right)^2\\frac{1}{6} + \\left(\\frac{5}{6}\\right)^4\\frac{1}{6} + \\cdots = \\frac{1/6}{1 - 25/36} = \\frac{6}{11}$。"
  },

  /* T12 Statistics */
  {
    id: "mc23", topicId: "stats", diff: "Section B",
    q: "數據組 $\\{x_1, x_2, \\dots, x_n\\}$ 的方差（Variance）為 $9$。求新數據組 $\\{-2x_1 + 7,\\; -2x_2 + 7,\\; \\dots,\\; -2x_n + 7\\}$ 的**標準差（Standard Deviation）**。",
    opts: ["A. $-6$", "B. $6$", "C. $18$", "D. $36$"],
    ans: 1,
    hack: "【方差轉標準差雙重陷阱！】① 原方差 $= 9 \\Rightarrow$ 原標準差 $= \\sqrt{9} = 3$；② 加 $7$ 不影響離差；③ 乘 $-2$ 時標準差乘 $|-2| = 2$（必為正數！）➔ 新標準差 $= 3 \\times 2 = 6$！（注意 C 和 D 是未開方或直接乘平方的陷阱！）",
    regular: "原 $\\sigma = \\sqrt{9} = 3$。線性變換 $y = -2x + 7$ 後，新標準差 $= |-2|\\sigma = 2 \\times 3 = 6$。"
  },
  {
    id: "mc24", topicId: "stats", diff: "Section B",
    q: "設數據組 $A = \\{a, a+2, a+4, a+6\\}$ 及 $B = \\{a, a+2, a+4, a+6, a+3\\}$。比較兩組數據的平均值與標準差，下列何者正確？",
    opts: ["A. 平均值相同，$B$ 的標準差較大", "B. 平均值相同，$B$ 的標準差較小", "C. $B$ 的平均值較大，標準差相同", "D. $B$ 的平均值較小，$B$ 的標準差較小"],
    ans: 1,
    hack: "【加入平均值秒殺法則】$A$ 的平均值剛好正是 $a + 3$！$B$ 只是把等於平均值的 $a + 3$ 放進去 ➔ 平均值不變，但數據更向中心集中，**標準差必變小**！秒選 B！",
    regular: "$\\bar{x}_A = a+3$；加入 $a+3$ 後總平方偏差不變但項數由 $4$ 增至 $5$，故 $\\bar{x}_B = a+3$ 且 $\\sigma_B = \\sqrt{\\frac{4}{5}}\\sigma_A < \\sigma_A$。"
  }
];

/* 精準校正 mc01, mc08, mc21 選項與數值，確保 100% 唯一正解零歧義 */
(function refineMC() {
  var q1 = window.MATH_P2_DRILL.find(function (x) { return x.id === "mc01"; });
  if (q1) {
    q1.q = "若 $p$ 及 $q$ 均為常數，使得 $x^2 + p(x - 1) + 4 \\equiv (x - 2)(x + q) + 5$，求 $p$ 的值。";
    q1.opts = ["A. $-3$", "B. $-1$", "C. $1$", "D. $3$"];
    q1.ans = 0;
    q1.hack = "【巧代消元秒殺】直接代 $x = 2$ 消去右邊整個 $(x-2)(x+q)$！得 $2^2 + p(2 - 1) + 4 = 0 + 5 \\Rightarrow 8 + p = 5 \\Rightarrow p = -3$！5 秒收工！";
    q1.regular = "展開兩邊：$x^2 + px + (4 - p) \\equiv x^2 + (q - 2)x + (5 - 2q)$。由 $x=2$ 得 $8+p=5 \\Rightarrow p=-3$（並可得 $q=-1$）。";
    delete q1.fixMe;
  }
  var q8 = window.MATH_P2_DRILL.find(function (x) { return x.id === "mc08"; });
  if (q8) {
    q8.opts = ["A. $33.7\\text{ cm}^2$", "B. $33.8\\text{ cm}^2$", "C. $46.75\\text{ cm}^2$", "D. $47.2\\text{ cm}^2$"];
    q8.ans = 1;
    q8.hack = "【左閉右開上下限陷阱】誤差 $= 0.5\\text{ cm}$：面積範圍為 $7.5 \\times 4.5 \\le A < 8.5 \\times 5.5$，即 $33.75 \\le A < 46.75$！注意 C ($46.75$) 剛好踩在**嚴格小於**的上限線上不可取，唯有 B ($33.8$) 合法！";
    q8.regular = "長 $\\in [7.5, 8.5)$，闊 $\\in [4.5, 5.5)$，故面積範圍為 $[33.75, 46.75)$，唯一符合的選項為 $33.8\\text{ cm}^2$。";
    delete q8.fixMe;
  }
  var q21 = window.MATH_P2_DRILL.find(function (x) { return x.id === "mc21"; });
  if (q21) {
    q21.opts = ["A. $\\dfrac{5}{28}$", "B. $\\dfrac{15}{56}$", "C. $\\dfrac{23}{28}$", "D. $\\dfrac{41}{56}$"];
    q21.ans = 2;
    q21.hack = "【「至少一個」永遠用 1 減反面！】總抽法 $C_3^8 = 56$；全白（$0$ 紅）為 $C_3^5 = 10$ ➔ $1 - \\frac{10}{56} = \\frac{46}{56} = \\frac{23}{28}$！";
    q21.regular = "$P(\\text{至少 1 紅}) = 1 - P(\\text{全白}) = 1 - \\frac{C_3^5}{C_3^8} = 1 - \\frac{10}{56} = \\frac{23}{28}$。";
    delete q21.fixMe;
  }
})();
