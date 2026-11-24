/* ==========================================================================
   Paper 1 難題合集（二）：平面幾何、圓方程與軌跡、三角形四心、3D 三角學與平截頭體
   ========================================================================== */

window.MATH_P1_HARD.push(
  /* 8. T07 平面幾何與圓性質證明 */
  {
    id: "p1-geo-01",
    topicId: "planegeo",
    level: "Section A(2) & B 圓幾何證明 · 9 分",
    stars: "★★★★☆",
    title: "圓切線弦角定理、相似三角形證明與直徑綜合運算",
    stem: "已知 $PT$ 為圓在 $T$ 點的切線，直線 $PAB$ 與圓交於 $A$ 及 $B$ 兩點，其中 $PA = 4\\text{ cm}$ 及 $AB = 5\\text{ cm}$。\n(a) 證明 $\\triangle PAT \\sim \\triangle PTB$。（3 分）\n(b) 求 $PT$ 的長度。（2 分）\n(c) 若 $BT$ 為該圓的直徑，求該圓的半徑及 $AT$ 的長度（答案以根式表示）。（4 分）",
    hint: "① (a) 用 AAA 證明相似：公共角 $\\angle APT = \\angle TPB$ ＋ 交錯弓形角 $\\angle PTA = \\angle PBT$；\n② (b) 用相似三角形對應邊成比例推出著名的切割線定理 $PT^2 = PA \\cdot PB$；\n③ (c) 見直徑 $BT$ 立即標兩個關鍵直角：$\\angle PTB = 90^\\circ$（切線 $\\perp$ 半徑）及 $\\angle BAT = 90^\\circ$（半圓上的圓周角）！",
    steps: [
      { label: "(a) 嚴謹書寫相似三角形證明（必須寫明幾何理由！）", body: "在 $\\triangle PAT$ 與 $\\triangle PTB$ 中：\n• $\\angle APT = \\angle TPB$（公共角 / common angle）\n• $\\angle PTA = \\angle PBT$（交錯弓形的圓周角 / $\\angle$ in alt. segment）\n• $\\angle PAT = \\angle PTB$（三角形內角和 / $\\angle$ sum of $\\triangle$）\n$\\therefore \\triangle PAT \\sim \\triangle PTB$（AAA）。", marks: "2M(理由齊全) + 1A(嚴謹結論)" },
      { label: "(b) 對應邊比例求切線長 $PT$", body: "由 (a)，$\\dfrac{PT}{PB} = \\dfrac{PA}{PT}$（相似三角形的對應邊）。\n其中 $PB = PA + AB = 4 + 5 = 9\\text{ cm}$。\n$$PT^2 = PA \\cdot PB = 4 \\times 9 = 36 \\Rightarrow PT = 6\\text{ cm}$$", marks: "1M + 1A(6 cm)" },
      { label: "(c) 利用兩大直角性質求半徑與 $AT$", body: "因 $BT$ 為直徑且 $PT$ 為切線，故 $\\angle PTB = 90^\\circ$（切線 $\\perp$ 半徑）。\n在直角 $\\triangle PTB$ 中，由畢氏定理：\n$$BT = \\sqrt{PB^2 - PT^2} = \\sqrt{9^2 - 6^2} = \\sqrt{45} = 3\\sqrt{5}\\text{ cm}$$\n$\\therefore$ 圓半徑 $= \\dfrac{3\\sqrt{5}}{2}\\text{ cm}$。\n又由 $\\triangle PAT \\sim \\triangle PTB$，得 $\\dfrac{AT}{TB} = \\dfrac{PA}{PT}$：\n$$AT = \\frac{4}{6} \\times 3\\sqrt{5} = 2\\sqrt{5}\\text{ cm}$$", marks: "1M(∠PTB=90°) + 1A(半徑) + 1M(比例或畢氏) + 1A(2√5)" }
    ],
    trap: "幾何證明題在 DSE 採「層級評分（Case 1 / Case 2 / Case 3）」：若漏寫英文或中文幾何理由（如「交錯弓形的圓周角」），即使全對也最多扣減 1 分！"
  },

  /* 9. T08 坐標幾何、圓方程與軌跡 */
  {
    id: "p1-coord-01",
    topicId: "coord",
    diagram: "circleTangent",
    level: "Section B 坐標壓軸題 · 13 分",
    stars: "★★★★★",
    title: "圓方程建立、動點軌跡幾何描述與圓外切線四邊形面積",
    stem: "圓 $C$ 通過 $A(2, 0)$ 及 $B(8, 0)$ 兩點，且其圓心 $G$ 位於直線 $L: y = x - 1$ 上。\n(a) 求圓心 $G$ 的坐標及圓 $C$ 的一般式方程。（4 分）\n(b) 設動點 $P$ 滿足 $PA = PB$。描述 $P$ 的軌跡（Locus）與線段 $AB$ 的幾何關係，並寫出該軌跡的方程。（2 分）\n(c) 已知圓外一點 $Q(17, 9)$，從 $Q$ 向圓 $C$ 作兩條切線，切點分別為 $S$ 及 $T$。\n　(i) 求切線段 $QS$ 的長度及四邊形 $GQST$ 的面積。（4 分）\n　(ii) 求點 $Q$ 到圓 $C$ 上任意一點的最短距離及最長距離。（3 分）",
    hint: "① (a) 圓心必在弦 $AB$ 的垂直平分線 $x = 5$ 上，聯立 $y = x - 1$ 瞬間秒出圓心 $G$！\n② (b) 幾何描述必須準確寫出關鍵詞「**$AB$ 的垂直平分線**」（只寫垂直線或平分線均會失分！）；\n③ (c) 先算圓心距 $GQ$，利用直角 $\\triangle GQS$（$GS \\perp QS$）一舉秒殺切線長與面積！",
    steps: [
      { label: "(a) 利用弦垂直平分線求圓心 $G$ 與圓方程", body: "因 $GA = GB$，圓心 $G$ 必在 $AB$ 的垂直平分線上：$x = \\frac{2 + 8}{2} = 5$。\n代入 $L: y = x - 1$，得 $y = 5 - 1 = 4$，故圓心 $G = (5, 4)$。\n半徑 $r = GA = \\sqrt{(5 - 2)^2 + (4 - 0)^2} = \\sqrt{9 + 16} = 5$。\n圓 $C$ 方程：$(x - 5)^2 + (y - 4)^2 = 5^2$\n展開得一般式：$$x^2 + y^2 - 10x - 8y + 16 = 0$$", marks: "1M(垂直平分線) + 1A(G) + 1M(半徑5) + 1A(一般式)" },
      { label: "(b) 軌跡幾何描述與方程", body: "$P$ 的軌跡是**線段 $AB$ 的垂直平分線**（perpendicular bisector of $AB$），方程為 $x = 5$。", marks: "1A(幾何描述) + 1A(x=5)" },
      { label: "(c)(i) 切線長與四邊形 $GQST$ 面積", body: "圓心距 $GQ = \\sqrt{(17 - 5)^2 + (9 - 4)^2} = \\sqrt{12^2 + 5^2} = 13$。\n因 $GS \\perp QS$（切線 $\\perp$ 半徑），由畢氏定理：\n$$QS = \\sqrt{GQ^2 - r^2} = \\sqrt{13^2 - 5^2} = 12$$\n四邊形 $GQST$ 由兩個全等直角三角形 $\\triangle GQS$ 與 $\\triangle GQT$ 組成：\n$$\\text{面積} = 2 \\times \\left(\\frac{1}{2} \\times 5 \\times 12\\right) = 60$$", marks: "1M(GQ=13) + 1A(QS=12) + 1M(面積拆分) + 1A(60)" },
      { label: "(c)(ii) 圓外一點至圓周之最短及最長距離", body: "最短距離 $= GQ - r = 13 - 5 = 8$。\n最長距離 $= GQ + r = 13 + 5 = 18$。", marks: "1M + 1A(8) + 1A(18)" }
    ],
    trap: "寫圓方程時務必看清題目要求「標準式」還是「一般式」；一般式必須將常數合併並寫成 `= 0`！"
  },

  /* 10. T09 三角形四心終極壓軸題 */
  {
    id: "p1-centres-01",
    topicId: "centres",
    diagram: "fourCentres",
    level: "Section B 終極四心殺手 · 12 分",
    stars: "★★★★★",
    title: "一題貫通三角形全部四心（重心、外心、垂心、內心）與歐拉線驗證",
    stem: "在直角坐標平面上，$\triangle ABC$ 的三個頂點坐標為 $A(0, 8)$、$B(-6, 0)$ 及 $C(6, 0)$。\n(a) 求 $\\triangle ABC$ 的重心 $G$ 的坐標。（2 分）\n(b) 求 $\\triangle ABC$ 的外心 $O$ 的坐標及外接圓半徑。（3 分）\n(c) 求 $\\triangle ABC$ 的垂心 $H$ 的坐標，並驗證 $OG : GH = 1 : 2$。（4 分）\n(d) 求 $\\triangle ABC$ 的內心 $I$ 的坐標。（3 分）",
    hint: "① 關鍵洞察：$\\triangle ABC$ 關於 $y$ 軸完全對稱（$AB = AC = 10, BC = 12$），因此**全部四心 $G, O, H, I$ 均必定落在 $y$ 軸上（$x = 0$）**！\n② 外心用 $OA = OB$ 列一元一次方程；垂心用 $BH \\perp AC$（斜率積 $=-1$）；內心用面積公式 $\\Delta = \\frac{1}{2}(a+b+c)r$ 秒殺內切圓半徑 $r$！",
    steps: [
      { label: "(a) 重心 $G$（三頂點平均數）", body: "$$G = \\left(\\frac{0 + (-6) + 6}{3},\\; \\frac{8 + 0 + 0}{3}\\right) = \\left(0,\\; \\frac{8}{3}\\right)$$", marks: "1M + 1A" },
      { label: "(b) 外心 $O$（等距條件 $OA = OB$）", body: "由對稱性，設外心 $O = (0, k)$。由 $OA^2 = OB^2$：\n$$(8 - k)^2 = (-6 - 0)^2 + (0 - k)^2 \\Rightarrow 64 - 16k + k^2 = 36 + k^2 \\Rightarrow k = \\frac{28}{16} = \\frac{7}{4}$$\n$\\therefore$ 外心 $O = \\left(0, \\frac{7}{4}\\right)$，外接圓半徑 $R = 8 - \\frac{7}{4} = \\frac{25}{4}$（即 $6.25$）。", marks: "1M(OA=OB) + 1A(O) + 1A(R)" },
      { label: "(c) 垂心 $H$（高線垂直對邊）與歐拉線比例", body: "因 $AO \\perp BC$，高線 $AO$ 在 $y$ 軸上，設 $H = (0, h)$。\n因 $BH \\perp AC$，故 $m_{BH} \\times m_{AC} = -1$：\n$$\\frac{h - 0}{0 - (-6)} \\times \\frac{0 - 8}{6 - 0} = -1 \\Rightarrow \\frac{h}{6} \\times \\left(-\\frac{4}{3}\\right) = -1 \\Rightarrow h = \\frac{9}{2}$$\n$\\therefore H = \\left(0, \\frac{9}{2}\\right)$。\n驗證比例：$OG = \\frac{8}{3} - \\frac{7}{4} = \\frac{11}{12}$，$GH = \\frac{9}{2} - \\frac{8}{3} = \\frac{22}{12}$，故 $OG : GH = 1 : 2$！", marks: "1M(m_BH·m_AC=-1) + 1A(H) + 1M + 1A(驗證1:2)" },
      { label: "(d) 內心 $I$（面積周界公式秒殺內切圓半徑）", body: "計三邊長：$BC = 12$，$AB = AC = \\sqrt{6^2 + 8^2} = 10$，周界 $= 32$，面積 $= \\frac{1}{2}(12)(8) = 48$。\n由對稱性，$I$ 在 $y$ 軸上且至底邊 $BC$（$x$ 軸）距離即為內切圓半徑 $r$，故 $I = (0, r)$。\n由 $\\text{面積} = \\frac{1}{2} \\times \\text{周界} \\times r$：\n$$48 = \\frac{1}{2}(32)r \\Rightarrow r = 3 \\implies I = (0, 3)$$", marks: "1M(三邊與面積) + 1M(面積=½Pr) + 1A(0, 3)" }
    ],
    trap: "很多同學求內心 $I$ 時硬找角平分線方程而算到崩潰——凡有邊落在坐標軸上時，善用 $\\text{面積} = \\frac{1}{2}(a+b+c)r$ 只需 3 行便秒出內心！"
  },

  /* 11. T10 3D 三角學壓軸魔王 */
  {
    id: "p1-3d-01",
    topicId: "trig3d",
    diagram: "trig3d",
    level: "Section B 3D 壓軸魔王 · 13 分",
    stars: "★★★★★",
    title: "斜三角形立體抬起、三垂線定理求二面角與「最大傾角」論證",
    stem: "一塊三角形薄紙板 $ABC$ 滿足 $AB = 13\\text{ cm}$、$BC = 14\\text{ cm}$ 及 $AC = 15\\text{ cm}$。現將邊 $BC$ 固定於水平地面上，並將頂點 $A$ 向上抬起，使 $A$ 距離水平地面的垂直高度 $AF = 6\\sqrt{3}\\text{ cm}$（其中 $F$ 為 $A$ 在水平地面上的垂直投影）。\n(a) 設 $D$ 為 $BC$ 上一點使 $AD \\perp BC$。求 $BD$ 及 $AD$ 的長度。（4 分）\n(b) 求平面 $ABC$ 與水平地面之間的夾角（二面角）。（3 分）\n(c) 求直線 $AB$ 與水平地面之間的夾角（準確至最接近的 $0.1^\\circ$）。（3 分）\n(d) 設點 $P$ 為線段 $BC$ 上的動點。某同學聲稱直線 $AP$ 與水平地面的夾角可以超過 $62^\\circ$。你是否同意？試解釋。（3 分）",
    hint: "① (a) 在 2D 平面 $\\triangle ABC$ 中用餘弦定理求 $\\cos B$，再計 $BD = 13\\cos B$ 與 $AD = 13\\sin B$（或用希羅公式求面積再除底邊！）；\n② (b) **三垂線定理**：$AF \\perp$ 地面且 $AD \\perp BC \\Rightarrow FD \\perp BC$，故二面角正是 $\\angle ADF$！\n③ (d) $\\sin \\angle APF = \\frac{AF}{AP}$——高度 $AF$ 固定，故 $AP$ 越**短**則夾角越**大**！最短距離正是垂線 $AD$！",
    steps: [
      { label: "(a) 餘弦定理（或希羅公式）求高 $AD$ 與 $BD$", body: "在 $\\triangle ABC$ 中，由餘弦定理：\n$$\\cos \\angle ABC = \\frac{13^2 + 14^2 - 15^2}{2(13)(14)} = \\frac{140}{364} = \\frac{5}{13}$$\n因 $AD \\perp BC$：\n$$BD = AB \\cos \\angle ABC = 13 \\times \\frac{5}{13} = 5\\text{ cm}$$\n$$AD = \\sqrt{13^2 - 5^2} = 12\\text{ cm}$$", marks: "1M(餘弦) + 1A(5/13) + 1A(BD=5) + 1A(AD=12)" },
      { label: "(b) 運用三垂線定理求二面角 $\\angle ADF$", body: "因 $AF \\perp$ 水平地面且 $AD \\perp BC$，由三垂線定理知 $FD \\perp BC$，故平面 $ABC$ 與水平地面的夾角為 $\\angle ADF$。\n在直角 $\\triangle ADF$ 中：\n$$\\sin \\angle ADF = \\frac{AF}{AD} = \\frac{6\\sqrt{3}}{12} = \\frac{\\sqrt{3}}{2} \\Rightarrow \\angle ADF = 60^\\circ$$", marks: "1M(指明∠ADF) + 1M(sin比) + 1A(60°)" },
      { label: "(c) 求線面角 $\\angle ABF$", body: "因 $F$ 為 $A$ 在水平地面的垂直投影，直線 $AB$ 與水平地面的夾角為 $\\angle ABF$。\n在直角 $\\triangle ABF$ 中：\n$$\\sin \\angle ABF = \\frac{AF}{AB} = \\frac{6\\sqrt{3}}{13} \\approx 0.79941$$\n$$\\angle ABF \\approx 53.1^\\circ$$", marks: "1M(指明∠ABF) + 1M + 1A(53.1°)" },
      { label: "(d) 最大線面角論證（5** 壓軸必殺技！）", body: "直線 $AP$ 與水平地面的夾角為 $\\angle APF$，滿足 $\\sin \\angle APF = \\dfrac{AF}{AP} = \\dfrac{6\\sqrt{3}}{AP}$。\n當 $P$ 沿 $BC$ 移動時，$AF$ 固定，故當 $AP$ 達至**最小值**時，$\\angle APF$ 達至**最大值**。\n從 $A$ 到線段 $BC$ 的最短距離為垂直線段 $AD = 12\\text{ cm}$，故最大夾角為 $\\angle ADF = 60^\\circ$。\n因 $60^\\circ < 62^\\circ$，夾角不可能超過 $62^\\circ$。$\\therefore$ **不同意**該同學的聲稱。", marks: "1M(sin=AF/AP) + 1M(AP最短=AD) + 1A(60°<62°不同意)" }
    ],
    trap: "3D 三角學最高頻失分陷阱：忘記題目是「垂足 $F$」而誤以為直角在 $D$ 或 $B$！緊記先抽畫 2D 直角 $\\triangle ADF$ 與 $\\triangle ABF$（直角永遠在投影點 $F$！）！"
  },

  /* 12. T10 立體求積・平截頭體注水 */
  {
    id: "p1-mens-01",
    topicId: "trig3d",
    diagram: "frustum",
    level: "Section A(2) 經典求積難題 · 9 分",
    stars: "★★★★☆",
    title: "倒置圓錐平截頭體 (Frustum) 體積比例與注水深度反推",
    stem: "一個倒置直立圓錐容器原底半徑為 $12\\text{ cm}$、高為 $24\\text{ cm}$。現從其底部頂點起計高 $8\\text{ cm}$ 處水平切去小圓錐，並封密切口，製成一個平截頭體（Frustum）容器（高 $16\\text{ cm}$）。\n(a) 求該平截頭體容器的總容量（答案以 $\\pi$ 表示）。（4 分）\n(b) 現將體積為 $\\dfrac{1330}{3}\\pi\\text{ cm}^3$ 的水倒入該平截頭體容器中。\n　(i) 水會否溢出容器？試解釋。（1 分）\n　(ii) 求容器內水面的深度。（4 分）",
    hint: "① 切忌死背複雜平截頭體公式！永遠「**補回底部已切去的小圓錐**」；\n② 小圓錐與大圓錐高之比為 $8 : 24 = 1 : 3$，故體積比為 $(1/3)^3 = 1 : 27$；\n③ (b)(ii) 算水位時，必須把「倒入的水體積 **＋** 底部假想小圓錐體積」合併成一個完整圓錐，再用相似體積立方比反推總高度 $H$，最後**減去 $8\\text{ cm}$**！",
    steps: [
      { label: "(a) 運用相似立體體積立方比求平截頭體容量", body: "原大圓錐體積：$V_{\\text{大}} = \\frac{1}{3}\\pi(12)^2(24) = 1152\\pi\\text{ cm}^3$。\n切去小圓錐與大圓錐高度比 $= 8 : 24 = 1 : 3$，故體積比 $= 1^3 : 3^3 = 1 : 27$：\n$$V_{\\text{小}} = 1152\\pi \\times \\frac{1}{27} = \\frac{128}{3}\\pi\\text{ cm}^3$$\n平截頭體容量 $= V_{\\text{大}} - V_{\\text{小}} = 1152\\pi - \\frac{128}{3}\\pi = \\dfrac{3328}{3}\\pi\\text{ cm}^3$。", marks: "1M(大圓錐) + 1M(1/27比例) + 1M(相減) + 1A" },
      { label: "(b)(i) 判斷是否溢出", body: "因 $\\dfrac{1330}{3}\\pi < \\dfrac{3328}{3}\\pi$，故水**不會**溢出。", marks: "1A" },
      { label: "(b)(ii) 補回小圓錐反推水位深度", body: "設水面距離原圓錐頂點的垂直高度為 $H\\text{ cm}$。\n合併水與假想小圓錐後的完整圓錐體積：\n$$V_{\\text{合}} = \\frac{1330}{3}\\pi + \\frac{128}{3}\\pi = \\frac{1458}{3}\\pi = 486\\pi\\text{ cm}^3$$\n由相似立體體積比：\n$$\\left(\\frac{H}{24}\\right)^3 = \\frac{486\\pi}{1152\\pi} = \\frac{27}{64} \\Rightarrow \\frac{H}{24} = \\frac{3}{4} \\Rightarrow H = 18\\text{ cm}$$\n$\\therefore$ 容器內水面深度 $= 18 - 8 = \\mathbf{10\\text{ cm}}$。", marks: "1M(加水與小錐) + 1M(立方比) + 1A(H=18) + 1A(深度10 cm)" }
    ],
    trap: "經典連環失分點：① 忘記加回底部被切去的小圓錐體積 $\\frac{128}{3}\\pi$ 就直接與大圓錐取立方比；② 算出 $H = 18\\text{ cm}$ 後忘記減去被切去的 $8\\text{ cm}$！"
  }
);
