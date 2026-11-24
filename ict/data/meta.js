window.ICT_META = {
  ui: {
    siteTitle: { zh: "HKDSE ICT 複習寶典", en: "HKDSE ICT Revision Hub" },
    siteSub: { zh: "2027 DSE · 卷一必修 · 選修 A 數據庫 · 選修 C Python", en: "2027 DSE · Paper 1 · Elective A Databases · Elective C Python" },
    navOverview: { zh: "考試總覽", en: "Overview" },
    navPaper1: { zh: "卷一 必修 (A–E)", en: "Paper 1 Core (A–E)" },
    navElectiveA: { zh: "卷二 選修 A 數據庫", en: "Elective A: Databases" },
    navElectiveC: { zh: "卷二 選修 C 算法與 Python", en: "Elective C: Python & Algos" },
    navLabs: { zh: "互動實驗室", en: "Interactive Labs" },
    navQuiz: { zh: "模擬測驗", en: "Practice Quiz" },
    navCheat: { zh: "考前速查表", en: "Cheat Sheets" },
    masteryProgress: { zh: "溫習掌握進度", en: "Revision Mastery" },
    viewBookmarks: { zh: "★ 收藏知識點", en: "★ Bookmarks" },
    markMastered: { zh: "標記已掌握", en: "Mark Mastered" },
    mastered: { zh: "已掌握 ✓", en: "Mastered ✓" },
    bookmark: { zh: "收藏", en: "Bookmark" },
    bookmarked: { zh: "已收藏 ★", en: "Bookmarked ★" },
    collapse: { zh: "收合", en: "Collapse" },
    expand: { zh: "展開", en: "Expand" },
    expandAll: { zh: "全部展開", en: "Expand All" },
    collapseAll: { zh: "全部收合", en: "Collapse All" },
    copy: { zh: "複製", en: "Copy" },
    copied: { zh: "已複製 ✓", en: "Copied ✓" },
    searchPlaceholder: {
      zh: "搜尋知識點（例如：3NF、JOIN、補碼、二分搜尋、Python、PDPO）...",
      en: "Search topics (e.g., 3NF, JOIN, 2's complement, Binary Search, Python, PDPO)..."
    },
    noResults: { zh: "找不到相符的知識點，請嘗試其他關鍵字。", en: "No matching topics found. Try another keyword." },
    startStudy: { zh: "開始溫習 →", en: "Start Studying →" },
    practiceNow: { zh: "立即做題 →", en: "Practice Now →" }
  },

  overview: {
    heroTitle: {
      zh: "2027 HKDSE 資訊及通訊科技（ICT）全攻略",
      en: "2027 HKDSE Information & Communication Technology (ICT) Complete Guide"
    },
    heroDesc: {
      zh: "專為 2027 年 HKDSE 新課程（2025年起生效）考生打造。全面涵蓋**試卷一必修部分（單元 A 至 E）**、**試卷二選修 A（數據庫）**及**選修 C（算法與程式編寫）**。所有程式範例與演算法實作均**100% 採用 Python 3**（不含 C/C++、Java 或 Pascal），支援一鍵**繁體中文 / English / 中英對照**切換，配合互動實驗室與模擬測驗，助你穩奪 5**！",
      en: "Tailored specifically for 2027 HKDSE ICT candidates under the revamped syllabus (effective from 2025 HKDSE). Covers **Paper 1 Compulsory Part (Modules A–E)**, **Paper 2 Elective A (Databases)**, and **Elective C (Algorithm & Programming)**. All code examples and algorithms are written **100% in Python 3** (no C/C++, Java, or Pascal), with instant **Traditional Chinese / English / Bilingual** switching, interactive labs, and exam-style quizzes."
    },
    assessmentTable: {
      headers: [
        { zh: "評核部分", en: "Component" },
        { zh: "範圍", en: "Scope" },
        { zh: "比重", en: "Weighting" },
        { zh: "考試時間", en: "Duration" },
        { zh: "題型與 2027 備試重點", en: "Format & 2027 Exam Focus" }
      ],
      rows: [
        [
          { zh: "**試卷一（必修部分）**", en: "**Paper 1 (Compulsory Part)**" },
          { zh: "單元 A 資訊處理、單元 B 電腦系統、單元 C 互聯網與保安、單元 D 計算思維與 Python、單元 E 社會影響", en: "Mod A Info Processing, Mod B Computer Systems, Mod C Internet & Security, Mod D Computational Thinking & Python, Mod E Social Implications" },
          { zh: "**55%**", en: "**55%**" },
          { zh: "2 小時", en: "2 hours" },
          { zh: "甲部多項選擇題（MC）+ 乙部結構式長題目。自 2025 新制起，**單元 D 課時倍增至 48 小時**，會直接考核實際 Python 編程及追蹤表！", en: "Section A Multiple Choice + Section B Structured Questions. Since the 2025 syllabus update, **Module D doubled to 48 hours** with direct Python coding & trace table questions!" }
        ],
        [
          { zh: "**試卷二（選修部分）**\n選修 A + 選修 C", en: "**Paper 2 (Elective Part)**\nElective A + Elective C" },
          { zh: "三選二：本網站聚焦 **選修 A（數據庫）** 與 **選修 C（算法與程式編寫 — Python）**", en: "Choose 2 of 3: Focused on **Elective A (Databases)** and **Elective C (Algorithm & Programming — Python)**" },
          { zh: "**25%**", en: "**25%**" },
          { zh: "1 小時 30 分鐘", en: "1 hr 30 min" },
          { zh: "全為結構式題目。選修 A 重點考 **ERD、1NF–3NF 正規化、SQL-92 多表查詢**；選修 C 重點考 **2D List、遞歸、檔案處理、排序/搜尋、堆疊/佇列/環形佇列/鏈結串列（Python）**。", en: "Structured questions only. Elective A tests **ERD, 1NF–3NF Normalization, multi-table SQL-92**; Elective C tests **2D Lists, Recursion, File I/O, Sorting/Searching, Stack/Queue/Circular Queue/Linked List in Python**." }
        ],
        [
          { zh: "**校本評核（SBA）**", en: "**School-Based Assessment (SBA)**" },
          { zh: "設計與開發一個解決現實問題的資訊科技專題（Guided Project）", en: "Design & implementation of a practical ICT project solving a real-life problem" },
          { zh: "**20%**", en: "**20%**" },
          { zh: "校內評核", en: "School-based" },
          { zh: "結合選修專長（如 Python + SQLite 數據庫系統）最易取得高分，留意測試報告與用戶手冊完整性。", en: "Combining Elective A & C (e.g., Python + SQLite database app) scores strongly; ensure thorough test plans and documentation." }
        ]
      ]
    },
    syllabusChanges: [
      {
        zh: "**全面轉向 Python 實戰編程（2025+ 新課綱）**：必修單元 D 改名為《計算思維與程式編寫》，課時由 24 小時大增至 48 小時。雖然考評局於 2025–2027 過渡期仍容許個別語言選項，但 **Python 3** 已成為最主流、最簡潔且無需兼顧舊語言（C/C++/Java/Pascal）的首選，本網站所有編程內容 100% 以 Python 3 編寫。",
        en: "**Full Shift to Practical Python Programming (2025+ Syllabus)**: Core Module D was renamed 'Computational Thinking and Programming' and doubled from 24 to 48 hours. **Python 3** is the modern standard; all programming materials on this site are 100% Python 3 (zero C/C++, Java, or Pascal)."
      },
      {
        zh: "**選修由「四選一」改為「三選二」**：舊制多媒體製作被取消，考生須修讀兩項選修（本溫習網針對 **選修 A 數據庫 + 選修 C 算法與程式編寫** 黃金理科組合，兩科邏輯高度互補）。",
        en: "**Electives Changed from '1 of 4' to '2 of 3'**: Legacy Multimedia was retired; candidates take two electives. This hub targets the high-synergy **Elective A (Databases) + Elective C (Algorithm & Programming)** combination."
      },
      {
        zh: "**加強網絡技術、基礎 HTML/CSS 與網絡安全**：單元 C 課時增至 31 小時，納入網頁基礎製作與系統化的網絡保安（加密、數碼簽署、認證、攻擊防範）。",
        en: "**Strengthened Networking, Basic HTML/CSS & Cybersecurity**: Module C expanded to 31 hours, integrating elementary web authoring and systematic security concepts (encryption, digital signatures, authentication, threat mitigation)."
      },
      {
        zh: "**精簡舊文書操作、新增新興科技與現代數據視野**：刪減重複的文書處理及簡報操作，聚焦試算表函數與基礎數據庫；單元 E 精簡至 8 小時並涵蓋 AI 倫理、私隱條例（PDPO）及知識產權；選修 A 亦引入 NoSQL 與大數據基礎認知。",
        en: "**Streamlined Legacy Office Tools & Added Emerging Tech**: Redundant word-processing/presentation drills were cut to emphasize spreadsheets and databases; Module E focuses on AI ethics, PDPO, and IP; Elective A introduces conceptual NoSQL/Big Data context."
      }
    ]
  },

  cheatsheets: [
    {
      id: "cs-python",
      badge: "Python 3 · Paper 1 & Elective C",
      color: "ec",
      title: { zh: "Python 3 DSE 必背語法速查表（不含 C / Java）", en: "Python 3 HKDSE Essential Syntax Reference (Python Only)" },
      headers: [
        { zh: "類別", en: "Category" },
        { zh: "Python 3 語法 / 範例", en: "Python 3 Syntax / Example" },
        { zh: "說明與 DSE 常見陷阱", en: "Notes & DSE Exam Traps" }
      ],
      rows: [
        [
          { zh: "輸入與輸出", en: "Input & Output" },
          { zh: "`x = int(input('Enter: '))`\n`print(f'{x:.2f}', end=' ')`", en: "`x = int(input('Enter: '))`\n`print(f'{x:.2f}', end=' ')`" },
          { zh: "`input()` **永遠回傳字串 `str`**！做數值運算前必須用 `int()` 或 `float()` 轉換。", en: "`input()` **ALWAYS returns a `str`**! Must cast with `int()` or `float()` before arithmetic." }
        ],
        [
          { zh: "算術運算符", en: "Arithmetic Operators" },
          { zh: "`+` `-` `*` `/` `//` `%` `**`", en: "`+` `-` `*` `/` `//` `%` `**`" },
          { zh: "`7 / 2` 是 `3.5`（永遠浮點）；`7 // 2` 是 `3`（整除）；`7 % 2` 是 `1`（餘數）；`2 ** 3` 是 `8`（次方）。", en: "`7 / 2` is `3.5` (always float); `7 // 2` is `3` (floor div); `7 % 2` is `1` (modulo); `2 ** 3` is `8` (power)." }
        ],
        [
          { zh: "條件與邏輯", en: "Selection & Logic" },
          { zh: "`if a == b and not (c != 0):`\n`elif a < b or b >= 10:`\n`else:`", en: "`if a == b and not (c != 0):`\n`elif a < b or b >= 10:`\n`else:`" },
          { zh: "優先次序：`not` > `and` > `or`。比較相等用 `==`，切勿誤寫單等號 `=`！", en: "Precedence: `not` > `and` > `or`. Equality uses `==`, never single `=`!" }
        ],
        [
          { zh: "循環 `range()`", en: "Loops & `range()`" },
          { zh: "`for i in range(0, n, 1):`\n`for i in range(n-1, -1, -1):`\n`while cond:`", en: "`for i in range(0, n, 1):`\n`for i in range(n-1, -1, -1):`\n`while cond:`" },
          { zh: "`range(start, stop, step)` **不包含 `stop`**！例如 `range(1, 5)` 產生 `1, 2, 3, 4`。", en: "`range(start, stop, step)` is **EXCLUSIVE of `stop`**! E.g. `range(1, 5)` yields `1, 2, 3, 4`." }
        ],
        [
          { zh: "字串操作", en: "String Operations" },
          { zh: "`s[1:4]`, `s[::-1]`, `len(s)`\n`s.upper()`, `s.lower()`, `s.strip()`\n`s.split(',')`, `','.join(lst)`\n`ord('A')`→65, `chr(65)`→`'A'`", en: "`s[1:4]`, `s[::-1]`, `len(s)`\n`s.upper()`, `s.lower()`, `s.strip()`\n`s.split(',')`, `','.join(lst)`\n`ord('A')`→65, `chr(65)`→`'A'`" },
          { zh: "字串是**不可變 (Immutable)** 的，不能寫 `s[0] = 'X'`，須重新組合新字串。", en: "Strings are **immutable**; cannot do `s[0] = 'X'`. Build a new string instead." }
        ],
        [
          { zh: "1D / 2D 串列", en: "1D & 2D Lists" },
          { zh: "`a = [0] * n`\n`g = [[0]*C for _ in range(R)]`\n`a.append(x)`, `a.pop()`, `a.insert(i, x)`", en: "`a = [0] * n`\n`g = [[0]*C for _ in range(R)]`\n`a.append(x)`, `a.pop()`, `a.insert(i, x)`" },
          { zh: "**切勿寫 `[[0]*C]*R`**（會令所有列指向同一記憶體位置）！索引由 `0` 開始，最後一項是 `a[len(a)-1]` 或 `a[-1]`。", en: "**NEVER write `[[0]*C]*R`** (creates aliased row references)! 0-indexed; last item is `a[len(a)-1]` or `a[-1]`." }
        ],
        [
          { zh: "副程式與作用域", en: "Functions & Scope" },
          { zh: "`def calc(x, arr):`\n`    return x * 2`", en: "`def calc(x, arr):`\n`    return x * 2`" },
          { zh: "`int`/`str` 在函數內重新賦值不影響外部；`list` 的原地修改（如 `arr[0]=9`）會影響外部串列！", en: "Reassigning `int`/`str` inside a function does not affect caller; in-place `list` edits (`arr[0]=9`) DO affect caller!" }
        ],
        [
          { zh: "檔案處理 (選修 C)", en: "File I/O (Elective C)" },
          { zh: "`with open('f.txt', 'r') as f:`\n`    for line in f:`\n`        cols = line.strip().split(',')`", en: "`with open('f.txt', 'r') as f:`\n`    for line in f:`\n`        cols = line.strip().split(',')`" },
          { zh: "`'r'` 讀取、`'w'` 覆寫（會清空原內容！）、`'a'` 附加。讀取每行記得 `.strip()` 去除換行符 `\\n`。", en: "`'r'` read, `'w'` write (overwrites existing!), `'a'` append. Always `.strip()` lines to remove trailing `\\n`." }
        ]
      ]
    },
    {
      id: "cs-sql",
      badge: "SQL-92 · Paper 1 & Elective A",
      color: "ea",
      title: { zh: "SQL-92 語法與執行次序速查表", en: "SQL-92 Syntax & Logical Execution Order Reference" },
      headers: [
        { zh: "子句 / 指令", en: "Clause / Command" },
        { zh: "標準語法", en: "Standard Syntax" },
        { zh: "執行次序與必考陷阱", en: "Execution Order & Exam Traps" }
      ],
      rows: [
        [
          { zh: "邏輯執行次序", en: "Logical Execution Order" },
          { zh: "`FROM` → `JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `DISTINCT` → `ORDER BY`", en: "`FROM` → `JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `DISTINCT` → `ORDER BY`" },
          { zh: "**高頻陷阱**：`WHERE` 不能使用聚合函數（如 `SUM`）或 `SELECT` 的別名 `AS`；聚合篩選必須放在 `HAVING`！", en: "**Classic Trap**: `WHERE` cannot use aggregates (`SUM`) or `SELECT` aliases; filter aggregated groups in `HAVING`!" }
        ],
        [
          { zh: "空值與模糊搜尋", en: "NULL & Wildcards" },
          { zh: "`WHERE phone IS NULL`\n`WHERE name LIKE 'Ch%'`\n`WHERE code LIKE 'S___'`", en: "`WHERE phone IS NULL`\n`WHERE name LIKE 'Ch%'`\n`WHERE code LIKE 'S___'`" },
          { zh: "檢查空值必須用 `IS NULL` / `IS NOT NULL`，**嚴禁寫 `= NULL`**！`%` 代表 0 或多個字元，`_` 代表恰好 1 個字元。", en: "Must use `IS NULL` / `IS NOT NULL`, **NEVER `= NULL`**! `%` = 0 or more chars, `_` = exactly 1 char." }
        ],
        [
          { zh: "聚合與分組", en: "Aggregates & Grouping" },
          { zh: "`SELECT dept, COUNT(*), AVG(sal)`\n`FROM EMP GROUP BY dept`\n`HAVING COUNT(*) >= 5`", en: "`SELECT dept, COUNT(*), AVG(sal)`\n`FROM EMP GROUP BY dept`\n`HAVING COUNT(*) >= 5`" },
          { zh: "`COUNT(*)` 計算所有列（含 NULL）；`COUNT(col)` **忽略 NULL**。`SELECT` 中凡非聚合欄位都必須出現在 `GROUP BY`。", en: "`COUNT(*)` counts all rows (including NULLs); `COUNT(col)` **ignores NULLs**. Non-aggregated `SELECT` columns must be in `GROUP BY`." }
        ],
        [
          { zh: "多表連接 JOIN", en: "Multi-Table JOINs" },
          { zh: "`SELECT s.name, c.title`\n`FROM STUDENT s`\n`LEFT JOIN ENROL e ON s.sid = e.sid`", en: "`SELECT s.name, c.title`\n`FROM STUDENT s`\n`LEFT JOIN ENROL e ON s.sid = e.sid`" },
          { zh: "`INNER JOIN` 只保留兩表匹配記錄；`LEFT JOIN` 保留左表全部記錄（右表無匹配補 `NULL`，配 `WHERE e.sid IS NULL` 可找「沒有報讀的學生」）。", en: "`INNER JOIN` keeps matched rows only; `LEFT JOIN` keeps all left rows (`NULL` on right if unmatched — pair with `WHERE e.sid IS NULL` to find 'students with no enrolment')." }
        ],
        [
          { zh: "DML 增刪改", en: "DML (INSERT/UPDATE/DELETE)" },
          { zh: "`INSERT INTO T(c1,c2) VALUES(v1,v2)`\n`UPDATE T SET c1=v1 WHERE id=5`\n`DELETE FROM T WHERE id=5`", en: "`INSERT INTO T(c1,c2) VALUES(v1,v2)`\n`UPDATE T SET c1=v1 WHERE id=5`\n`DELETE FROM T WHERE id=5`" },
          { zh: "`UPDATE` 和 `DELETE` **若忘記寫 `WHERE` 會修改/刪除全表所有記錄**！刪除主表前須考慮參照完整性（外鍵約束）。", en: "Omitting `WHERE` in `UPDATE` / `DELETE` **modifies/deletes EVERY row**! Consider referential integrity before deleting parent rows." }
        ]
      ]
    },
    {
      id: "cs-spreadsheet",
      badge: "Spreadsheet · Paper 1 Module A",
      color: "p1",
      title: { zh: "HKEAA 電子試算表必考函數速查表", en: "HKEAA Electronic Spreadsheet Functions Cheat Sheet" },
      headers: [
        { zh: "函數", en: "Function" },
        { zh: "語法範例", en: "Syntax Example" },
        { zh: "功能與試卷一失分重點", en: "Purpose & Paper 1 Pitfalls" }
      ],
      rows: [
        [
          { zh: "絕對/相對參照", en: "Absolute vs Relative Ref" },
          { zh: "`$A$1` / `$A1` / `A$1` / `A1`", en: "`$A$1` / `$A1` / `A$1` / `A1`" },
          { zh: "橫向或縱向拉動複製公式時，**查找範圍（如 VLOOKUP 第二參數）與固定常數儲存格必須加 `$` 鎖定**！", en: "When copying formulas across rows/cols, **lock lookup ranges (e.g. VLOOKUP table_array) and fixed constant cells with `$`**!" }
        ],
        [
          { zh: "`COUNT` 家族", en: "`COUNT` Family" },
          { zh: "`=COUNT(A1:A10)`\n`=COUNTA(A1:A10)`\n`=COUNTBLANK(A1:A10)`\n`=COUNTIF(A1:A10, \">=50\")`", en: "`=COUNT(A1:A10)`\n`=COUNTA(A1:A10)`\n`=COUNTBLANK(A1:A10)`\n`=COUNTIF(A1:A10, \">=50\")`" },
          { zh: "`COUNT` **只數數值**（忽略文字與空白）；`COUNTA` 數所有非空白儲存格；`COUNTIF` 條件需用雙引號 `\">=50\"`。", en: "`COUNT` counts **numbers only**; `COUNTA` counts all non-empty cells; `COUNTIF` criteria with operators must be quoted `\">=50\"`." }
        ],
        [
          { zh: "`SUMIF`", en: "`SUMIF`" },
          { zh: "`=SUMIF(A2:A20, \"6A\", C2:C20)`", en: "`=SUMIF(A2:A20, \"6A\", C2:C20)`" },
          { zh: "參數次序：`(條件範圍, 條件, [求和範圍])`。若省略第三參數，則對條件範圍本身求和。", en: "Order: `(criteria_range, criteria, [sum_range])`. Sums criteria_range if 3rd arg omitted." }
        ],
        [
          { zh: "`VLOOKUP`", en: "`VLOOKUP`" },
          { zh: "`=VLOOKUP(B2, $E$2:$G$10, 3, FALSE)`", en: "`=VLOOKUP(B2, $E$2:$G$10, 3, FALSE)`" },
          { zh: "永遠在查找表**最左欄**搜尋。第 4 參數：`FALSE` = 精確匹配（無須排序）；`TRUE` = 近似匹配（**最左欄必須由小至大升序排列**，常用於分數轉等級！）。", en: "Always searches **leftmost column**. 4th arg: `FALSE` = exact match (unsorted OK); `TRUE` = approximate match (**leftmost col MUST be sorted ascending**, used for grade bands!)." }
        ],
        [
          { zh: "`IF` / `AND` / `OR`", en: "`IF` / `AND` / `OR`" },
          { zh: "`=IF(AND(B2>=50, C2>=50), \"Pass\", \"Fail\")`", en: "`=IF(AND(B2>=50, C2>=50), \"Pass\", \"Fail\")`" },
          { zh: "Excel 中邏輯函數寫作 `AND(條件1, 條件2)`（前置函數），**不可**寫成 `B2>=50 AND C2>=50`！", en: "Logical functions use prefix notation `AND(c1, c2)`, **NOT** infix `B2>=50 AND C2>=50`!" }
        ],
        [
          { zh: "文字處理函數", en: "Text Functions" },
          { zh: "`=LEFT(A1,3)`, `=RIGHT(A1,2)`\n`=MID(A1,2,4)`, `=LEN(A1)`\n`=FIND(\"@\", A1)`, `=TRIM(A1)`", en: "`=LEFT(A1,3)`, `=RIGHT(A1,2)`\n`=MID(A1,2,4)`, `=LEN(A1)`\n`=FIND(\"@\", A1)`, `=TRIM(A1)`" },
          { zh: "試算表字串位置由 **1 開始**（注意與 Python 的 0 索引不同！）。`MID(字串, 起始位置, 長度)`。", en: "Spreadsheet character positions are **1-based** (unlike Python's 0-based indexing!). `MID(text, start_pos, num_chars)`." }
        ],
        [
          { zh: "`RANK` / `ROUND` / `INT`", en: "`RANK` / `ROUND` / `INT`" },
          { zh: "`=RANK(B2, $B$2:$B$30, 0)`\n`=ROUND(3.146, 2)` → `3.15`\n`=INT(3.9)` → `3`", en: "`=RANK(B2, $B$2:$B$30, 0)`\n`=ROUND(3.146, 2)` → `3.15`\n`=INT(3.9)` → `3`" },
          { zh: "`RANK` 第 3 參數：`0` 或省略 = 降序（分數高排第 1）；`1` = 升序（跑速時間短排第 1）。", en: "`RANK` 3rd arg: `0`/omitted = descending (highest score = rank 1); `1` = ascending (fastest race time = rank 1)." }
        ]
      ]
    },
    {
      id: "cs-formulas",
      badge: "Core Formulas · Paper 1 & Elective C",
      color: "p1",
      title: { zh: "DSE ICT 必背計算公式與複雜度對照表", en: "HKDSE ICT Essential Formulas & Complexity Reference" },
      headers: [
        { zh: "項目", en: "Formula / Concept" },
        { zh: "公式", en: "Formula" },
        { zh: "單位與備註", en: "Units & Notes" }
      ],
      rows: [
        [
          { zh: "點陣圖像檔案大小", en: "Uncompressed Bitmap Size" },
          { zh: "`Width × Height × Colour Depth ÷ 8`", en: "`Width × Height × Colour Depth ÷ 8`" },
          { zh: "結果為 Bytes。24-bit 真彩色 = 3 Bytes/pixel；256 色 = 8 bits/pixel (`2⁸ = 256`)。", en: "Result in Bytes. 24-bit True Color = 3 Bytes/px; 256 colours = 8 bits/px (`2⁸ = 256`)." }
        ],
        [
          { zh: "未壓縮音訊大小", en: "Uncompressed Audio Size" },
          { zh: "`Sample Rate (Hz) × Bit Depth × Channels × Duration (s) ÷ 8`", en: "`Sample Rate (Hz) × Bit Depth × Channels × Duration (s) ÷ 8`" },
          { zh: "單聲道 Mono = 1；立體聲 Stereo = 2。位元率 Bit Rate = `Sample Rate × Bit Depth × Channels` (bps)。", en: "Mono = 1, Stereo = 2. Bit Rate = `Sample Rate × Bit Depth × Channels` (bps)." }
        ],
        [
          { zh: "未壓縮視訊大小", en: "Uncompressed Video Size" },
          { zh: "`Width × Height × Colour Depth × FPS × Duration (s) ÷ 8` (+ Audio)", en: "`Width × Height × Colour Depth × FPS × Duration (s) ÷ 8` (+ Audio)" },
          { zh: "若題目有壓縮比（如 20:1），將未壓縮大小除以 20。", en: "If compression ratio is given (e.g., 20:1), divide uncompressed size by 20." }
        ],
        [
          { zh: "數據傳輸時間", en: "Data Transmission Time" },
          { zh: "`Time (s) = (File Size in Bytes × 8) ÷ Bandwidth (bps)`", en: "`Time (s) = (File Size in Bytes × 8) ÷ Bandwidth (bps)`" },
          { zh: "**最大陷阱**：檔案大小通常給 **MB / Bytes**，但網速頻寬給 **Mbps / bits per second**，必須先 `× 8` 統一為 bits！", en: "**#1 Trap**: File sizes are in **MB / Bytes**, while bandwidth is in **Mbps / bits per second** — always multiply Bytes by `8`!" }
        ],
        [
          { zh: "n 位元二進制補碼範圍", en: "n-bit Two's Complement Range" },
          { zh: "`-2^(n-1)` 至 `+2^(n-1) - 1`", en: "`-2^(n-1)` to `+2^(n-1) - 1`" },
          { zh: "8-bit 補碼：`-128` 至 `+127`；無符號 8-bit：`0` 至 `255`；符號與數值 8-bit：`-127` 至 `+127`。", en: "8-bit 2's comp: `-128` to `+127`; Unsigned 8-bit: `0` to `255`; Sign-magnitude 8-bit: `-127` to `+127`." }
        ],
        [
          { zh: "環形佇列指標移動", en: "Circular Queue Wrap-Around" },
          { zh: "`rear = (rear + 1) % MAX`\n`front = (front + 1) % MAX`", en: "`rear = (rear + 1) % MAX`\n`front = (front + 1) % MAX`" },
          { zh: "利用餘數 `% MAX` 實現環形回繞，徹底解決線性佇列的假溢出（False Overflow）問題。", en: "Uses modulo `% MAX` to wrap indices around, solving Linear Queue's False Overflow." }
        ],
        [
          { zh: "演算法效率比較", en: "Algorithm Efficiency" },
          { zh: "Binary Search: `O(log n)` (最多 `⌊log₂n⌋ + 1` 次)\nLinear Search: `O(n)`\nBubble / Insertion / Selection: `O(n²)`\nMerge Sort: `O(n log n)`", en: "Binary Search: `O(log n)` (max `⌊log₂n⌋ + 1` comps)\nLinear Search: `O(n)`\nBubble / Insertion / Selection: `O(n²)`\nMerge Sort: `O(n log n)`" },
          { zh: "Binary Search 前提：**串列必須已排序**。優化冒泡排序與插入排序在已排序數組上最佳情況為 `O(n)`。", en: "Binary Search precondition: **list MUST be sorted**. Optimized Bubble & Insertion sort achieve `O(n)` best case on sorted data." }
        ]
      ]
    }
  ]
};
