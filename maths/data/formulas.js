/* ==========================================================================
   5** 核心公式與必背性質速查庫（按 12 大 Topic 分類，重點收錄考卷不印的必背公式）
   ========================================================================== */

window.MATH_FORMULAS = [
  {
    topicId: "algebra",
    title: "代數、恆等式與多項式核心公式",
    items: [
      { name: "立方和與立方差（必背！）", tex: "a^3 + b^3 = (a+b)(a^2 - ab + b^2), \\quad a^3 - b^3 = (a-b)(a^2 + ab + b^2)", note: "紙卷不印！常用於 Section A(1) 因式分解及 Paper 2 化簡分式。" },
      { name: "餘式定理與因式定理", tex: "f(x) \\div (mx - n) \\Rightarrow \\text{餘式 } R = f\\left(\\frac{n}{m}\\right)", note: "若 $mx-n$ 為 $f(x)$ 的因式，則 $f(n/m)=0$。留意除式為二次式時，餘式須設為 $Ax+B$！" },
      { name: "多項式 HCF 與 LCM 法則", tex: "\\text{HCF 取公因式最低次方；LCM 取所有因式最高次方}", note: "先將所有多項式徹底因式分解（切勿漏抽數字公因數！）。" }
    ]
  },
  {
    topicId: "quadratic",
    title: "二次方程、判別式與函數變換",
    items: [
      { name: "韋達定理（兩根之和與積）", tex: "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}", note: "高頻衍生式：$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$；$(\\alpha-\\beta)^2 = (\\alpha+\\beta)^2 - 4\\alpha\\beta$。" },
      { name: "頂點式與配方法", tex: "y = a(x-h)^2 + k \\Rightarrow \\text{頂點 } (h,k),\\; \\text{對稱軸 } x = h", note: "由一般式 $ax^2+bx+c$ 速算頂點：$h = -\\frac{b}{2a}$，$k = f(h)$。" },
      { name: "四大圖像變換口訣", tex: "f(x-h)+k \\text{ (右}h\\text{上}k\\text{)};\\; -f(x) \\text{ (沿}x\\text{軸反射)};\\; f(-x) \\text{ (沿}y\\text{軸反射)}", note: "伸縮陷阱：$y = f(kx)$ 為沿 $x$ 軸壓縮為 $\\frac{1}{k}$ 倍（與直覺相反！）；$y = kf(x)$ 則為沿 $y$ 軸拉長 $k$ 倍。" }
    ]
  },
  {
    topicId: "explog",
    title: "指數、對數與線性化轉換",
    items: [
      { name: "對數核心定律與換底公式", tex: "\\log_a(MN) = \\log_a M + \\log_a N, \\quad \\log_a(M^k) = k\\log_a M, \\quad \\log_a b = \\frac{\\log b}{\\log a}", note: "必記定義域：$M>0, N>0, a>0, a \\neq 1$；凡解對數方程後必須代回驗根，捨去令真數 $\\le 0$ 的增根！" },
      { name: "非線性關係化直線（Paper 1 & 2 必考！）", tex: "y = ab^x \\Rightarrow \\log y = (\\log b)x + \\log a; \\quad y = ax^k \\Rightarrow \\log y = k\\log x + \\log a", note: "斜率 $m = \\log b$（或 $k$），縱截距 $c = \\log a$；務必看清座標軸是 $\\log_2, \\log_4$ 還是 $\\log_{10}$！" }
    ]
  },
  {
    topicId: "seq",
    title: "等差數列 (AS) 與等比數列 (GS)",
    items: [
      { name: "等差數列 (AS)", tex: "T(n) = a + (n-1)d, \\quad S(n) = \\frac{n}{2}[2a+(n-1)d] = \\frac{n}{2}(a+l)", note: "性質：$T(n) = S(n) - S(n-1)$；若三數成 AS，則 $2b = a + c$。" },
      { name: "等比數列 (GS) 與無限項之和", tex: "T(n) = ar^{n-1}, \\quad S(n) = \\frac{a(1-r^n)}{1-r}, \\quad S(\\infty) = \\frac{a}{1-r} \\; (|r|<1)", note: "對數變換秘技：若 $a_n$ 為正項 GS，則 $\\log a_n$ 必為 AS！反之若 $b_n$ 為 AS，則 $k^{b_n}$ 必為 GS！" }
    ]
  },
  {
    topicId: "coord",
    title: "坐標幾何、圓方程與軌跡五大形態",
    items: [
      { name: "圓的一般式 → 圓心與半徑", tex: "x^2+y^2+Dx+Ey+F=0 \\Rightarrow G\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right), \\; r = \\sqrt{\\left(\\frac{D}{2}\\right)^2 + \\left(\\frac{E}{2}\\right)^2 - F}", note: "先檢查 $x^2, y^2$ 係數是否為 $1$！若為 $2x^2+2y^2+\\dots$ 必須先全式除以 $2$！" },
      { name: "點到直線距離與切線判別", tex: "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}", note: "$d < r$ 相交兩點；$d = r$ 相切（切線）；$d > r$ 相離。切線長 $PT = \\sqrt{GP^2 - r^2}$。" },
      { name: "軌跡 (Locus) 五大標準幾何描述", tex: "\\text{① 定點定距} \\Rightarrow \\text{圓；② 兩定點等距} \\Rightarrow \\text{垂直平分線；③ 一直線定距} \\Rightarrow \\text{兩平行線}", note: "④ 兩平行線等距 $\\Rightarrow$ 中間平行線；⑤ 兩相交線等距 $\\Rightarrow$ 一對互相垂直的角平分線。答 Paper 1 幾何描述時必須交代圓心／半徑或垂直平分哪條線段！" }
    ]
  },
  {
    topicId: "centres",
    title: "三角形四心性質對照表（5** 必背！）",
    items: [
      { name: "外心 Circumcentre (O)", tex: "\\text{三邊垂直平分線交點} \\Rightarrow OA = OB = OC = R", note: "直角三角形的外心必位於**斜邊中點**！鈍角三角形外心在三角形外部。" },
      { name: "內心 Incentre (I)", tex: "\\text{三內角平分線交點} \\Rightarrow I \\text{ 到三邊距離相等} = r, \\; \\text{面積 } \\Delta = \\frac{1}{2}(a+b+c)r", note: "內心永遠位於三角形**內部**；在直角三角形中，$r = \\frac{a+b-c}{2}$！" },
      { name: "垂心 Orthocentre (H)", tex: "\\text{三條高線交點} \\Rightarrow AH \\perp BC,\\; BH \\perp AC,\\; CH \\perp AB", note: "直角三角形的垂心必位於**直角頂點**！鈍角三角形垂心在三角形外部。" },
      { name: "重心 Centroid (G)", tex: "\\text{三條中線交點} \\Rightarrow G\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)", note: "重心永遠在三角形**內部**，且分每條中線為 $2:1$（頂點到重心 : 重心到中點）。" }
    ]
  },
  {
    topicId: "trig3d",
    title: "2D/3D 三角學與求積核心公式",
    items: [
      { name: "正弦、餘弦、面積與希羅公式", tex: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\quad c^2 = a^2+b^2-2ab\\cos C", note: "面積 $= \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}$，其中半周界 $s = \\frac{a+b+c}{2}$。" },
      { name: "相似圖形與平截頭體比例", tex: "\\frac{A_1}{A_2} = \\left(\\frac{l_1}{l_2}\\right)^2, \\qquad \\frac{V_1}{V_2} = \\left(\\frac{l_1}{l_2}\\right)^3", note: "圓錐曲面面積 $= \\pi r l$（$l$ 為斜高）；球體表面積 $= 4\\pi r^2$，體積 $= \\frac{4}{3}\\pi r^3$。" }
    ]
  },
  {
    topicId: "prob",
    title: "排列組合與概率公式",
    items: [
      { name: "條件概率與獨立事件", tex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}; \\quad \\text{獨立事件 } \\Leftrightarrow P(A \\cap B) = P(A)P(B)", note: "排隊相鄰用「捆綁法」，不相鄰用「插空法」，「至少一個」永遠優先用 $1 - P(\\text{一個都沒有})$！" }
    ]
  },
  {
    topicId: "stats",
    title: "統計數據線性變換 $y = ax + b$ 影響總表",
    items: [
      { name: "集中趨勢（Mean / Median / Mode）", tex: "\\text{新平均數} = a\\bar{x} + b, \\quad \\text{新中位數} = aM + b", note: "加減常數 $b$ 與乘除倍數 $a$ **全部照跟**！" },
      { name: "離差度量（Range / IQR / SD / Variance）", tex: "\\text{新 SD} = |a| \\cdot \\text{舊 SD}, \\quad \\text{新方差 Variance} = a^2 \\cdot \\text{舊方差}", note: "【頭號 MC 必考！】全組數據同加同減常數 $b$，**Range、IQR、SD、Variance 完全不變**；乘以 $a$ 時，SD/Range/IQR 乘以 $|a|$，方差乘以 $a^2$！" },
      { name: "標準分 (Standard Score)", tex: "z = \\frac{x - \\bar{x}}{\\sigma}", note: "全組數據進行線性變換 $y = ax+b$（$a>0$）後，每個數據的標準分 $z$ **保持不變**！" }
    ]
  }
];
