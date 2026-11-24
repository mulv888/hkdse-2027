window.ICT_MODULES.push({
  id: "p1-d",
  paper: "paper1",
  code: "Module D",
  hours: { zh: "必修 · 48 課時（2025+ 倍增核心 · 專攻 Python 3）", en: "Compulsory · 48 hrs (Doubled in 2025+ · Python 3 Only)" },
  title: { zh: "單元 D：計算思維與程式編寫（Python 3）", en: "Module D: Computational Thinking & Programming (Python 3)" },
  subtitle: {
    zh: "2027 DSE 卷一最重磅單元！全面採用 Python 3 講解計算思維、流程圖/偽代碼對照、追蹤表、運算符、控制結構、字串、一維串列、副程式、核心必修算法及測試除錯（完全不含 C/Java）。",
    en: "The heaviest module in 2027 Paper 1! 100% Python 3 covering computational thinking, flowchart/pseudocode mapping, trace tables, operators, control flow, strings, 1D lists, functions, core algorithms, and debugging (no C/Java)."
  },
  topics: [
    {
      id: "p1-d-1",
      code: "D1",
      importance: 3,
      title: { zh: "計算思維、問題分析與模組化設計", en: "Computational Thinking, Problem Analysis & Modular Design" },
      summary: {
        zh: "掌握計算思維四大支柱、IPO 表、由上而下模組化設計與逐步求精，以及程式開發生命週期。",
        en: "Master the 4 pillars of computational thinking, IPO tables, top-down modular design, stepwise refinement, and PDLC."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "計算思維四大支柱 (4 Pillars of Computational Thinking)", en: "Four Pillars of Computational Thinking" },
          items: [
            { term: { zh: "分解 (Decomposition)", en: "Decomposition" }, def: { zh: "將複雜的大問題拆解成若干個較小、易於管理及獨立解決的子問題（例如將校務系統拆分為登入、考勤、成績計算模組）。", en: "Breaking down a complex problem into smaller, manageable, independently solvable sub-problems." } },
            { term: { zh: "模式識別 (Pattern Recognition)", en: "Pattern Recognition" }, def: { zh: "在數據或子問題中找出規律、相似點與重複出現的特徵，以便使用循環或共用函數重用解法。", en: "Identifying recurring trends, similarities, or structures across data/sub-problems so solutions can be reused via loops or functions." } },
            { term: { zh: "抽象化 (Abstraction)", en: "Abstraction" }, def: { zh: "過濾掉無關緊要的細節，只保留解決問題最關鍵的資訊與模型（例如港鐵路線圖忽略實際地理彎曲，只保留站名與轉車站）。", en: "Filtering out irrelevant details to focus only on essential properties needed to model and solve the problem (e.g. MTR transit map)." } },
            { term: { zh: "算法設計 (Algorithm Design)", en: "Algorithm Design" }, def: { zh: "設計清晰、有限步驟、無歧義的指令序列以從輸入求出正確輸出。", en: "Designing a clear, finite, unambiguous step-by-step procedure transforming input into desired output." } }
          ]
        },
        {
          type: "list",
          title: { zh: "模組化設計 (Modular Approach / Top-Down Design) 五大好處（DSE 必背問答）", en: "5 Benefits of Modular / Top-Down Design (Classic DSE Essay Points)" },
          items: [
            { zh: "**易於團隊協作 (Teamwork)**：多名程式員可同步分工開發不同副程式 (Functions)。", en: "**Parallel Teamwork**: Multiple programmers can build different modules concurrently." },
            { zh: "**代碼重用 (Code Reusability)**：常用邏輯（如輸入驗證、計算平均分）封裝成函數後可在不同位置重複呼叫，減少重複編碼。", en: "**Code Reusability**: Reusable functions eliminate duplicate code." },
            { zh: "**易於除錯與測試 (Easier Testing & Debugging)**：可對單一模組進行獨立單元測試 (Unit Testing)，迅速鎖定錯誤範圍。", en: "**Easier Testing & Debugging**: Bugs are isolated and modules can be unit-tested independently." },
            { zh: "**提升可讀性與維護性 (Readability & Maintainability)**：主程式結構清晰；日後修改規則時只需更改對應函數即可。", en: "**Better Readability & Maintainability**: Clean top-level flow; future changes stay localized." },
            { zh: "**降低問題複雜度 (Manageable Complexity)**：透過逐步求精 (Stepwise Refinement) 專注解決細小功能。", en: "**Reduced Complexity**: Stepwise refinement turns overwhelming tasks into simple units." }
          ]
        }
      ]
    },
    {
      id: "p1-d-2",
      code: "D2",
      importance: 3,
      title: { zh: "流程圖、偽代碼與 Python 3 對照及追蹤表 (Trace Table)", en: "Flowcharts, Pseudocode to Python Mapping & Trace Tables" },
      summary: {
        zh: "卷一乙部必考追蹤題！熟記流程圖標準符號、考評局偽代碼與 Python 語法對應，以及零失誤填寫追蹤表的技巧。",
        en: "Mandatory Paper 1 tracing skill! Know flowchart symbols, HKEAA pseudocode-to-Python equivalents, and error-free trace table steps."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "流程圖符號與考評局偽代碼 ↔ Python 3 精準對照", en: "Flowchart Symbols & HKEAA Pseudocode ↔ Python 3 Mapping" },
          headers: [
            { zh: "結構 / 符號", en: "Construct / Symbol" },
            { zh: "考評局偽代碼 (Pseudocode)", en: "HKEAA Pseudocode" },
            { zh: "Python 3 寫法", en: "Python 3 Equivalent" }
          ],
          rows: [
            [{ zh: "起止符 (橢圓 Oval)", en: "Terminator (Oval)" }, { zh: "`START` / `END`", en: "`START` / `END`" }, { zh: "程式開頭與結尾（或 `def` / `return`）", en: "Script start/end (or `def` / `return`)" }],
            [{ zh: "輸入 / 輸出 (平行四邊形)", en: "Input / Output (Parallelogram)" }, { zh: "`INPUT x`\n`OUTPUT y`", en: "`INPUT x`\n`OUTPUT y`" }, { zh: "`x = int(input())`\n`print(y)`", en: "`x = int(input())`\n`print(y)`" }],
            [{ zh: "處理 / 賦值 (矩形 Rectangle)", en: "Process (Rectangle)" }, { zh: "`sum ← sum + x`", en: "`sum ← sum + x`" }, { zh: "`total = total + x` (或 `total += x`)", en: "`total = total + x` (or `total += x`)" }],
            [{ zh: "決策 / 分支 (菱形 Diamond)", en: "Decision (Diamond)" }, { zh: "`IF x >= 50 THEN ... ELSE ... ENDIF`", en: "`IF x >= 50 THEN ... ELSE ... ENDIF`" }, { zh: "`if x >= 50:`\n`    ...`\n`else:`\n`    ...`", en: "`if x >= 50:`\n`    ...`\n`else:`\n`    ...`" }],
            [{ zh: "計數循環 (For Loop)", en: "Count-Controlled Loop" }, { zh: "`FOR i ← 1 TO 5` *(包含 5!)*", en: "`FOR i ← 1 TO 5` *(inclusive of 5!)*" }, { zh: "`for i in range(1, 6):` *(stop 寫 6!)*", en: "`for i in range(1, 6):` *(stop is 6!)*" }],
            [{ zh: "前測條件循環 (While Loop)", en: "Pre-test Loop" }, { zh: "`WHILE n > 0 DO ... ENDWHILE`", en: "`WHILE n > 0 DO ... ENDWHILE`" }, { zh: "`while n > 0:`\n`    ...`", en: "`while n > 0:`\n`    ...`" }],
            [{ zh: "後測條件循環 (Repeat-Until)", en: "Post-test Loop (Repeat-Until)" }, { zh: "`REPEAT ... UNTIL x > 0` *(至少執行 1 次，條件為真時停止)*", en: "`REPEAT ... UNTIL x > 0` *(runs ≥1 time; stops when TRUE)*" }, { zh: "`while True:`\n`    ...`\n`    if x > 0: break`", en: "`while True:`\n`    ...`\n`    if x > 0: break`" }]
          ]
        },
        {
          type: "callout",
          variant: "trap",
          title: { zh: "⚠️ 偽代碼轉換成 Python 兩大極易中伏陷阱！", en: "⚠️ 2 Huge Pseudocode-to-Python Conversion Traps!" },
          text: {
            zh: "1. **`FOR i ← 1 TO N` 是包含 `N` 的**，寫成 Python 必須是 `range(1, N + 1)`！\n2. **偽代碼的 `REPEAT ... UNTIL cond` 是在 `cond` 變為 `True` 時「停止」**；但 Python 的 `while cond:` 是在 `cond` 為 `True` 時「繼續」，改寫成 `while` 時必須將條件**取反 (`not cond`)**！",
            en: "1. **`FOR i ← 1 TO N` INCLUDES `N`** → in Python write `range(1, N + 1)`!\n2. **`REPEAT ... UNTIL cond` STOPS when `cond` is True** → Python `while` CONTINUES when True, so negate the condition or use `while True: ... if cond: break`!"
          }
        },
        {
          type: "example",
          title: { zh: "追蹤表 (Trace Table) 實戰演練", en: "Trace Table Worked Example" },
          problem: {
            zh: "追蹤以下 Python 程式，寫出每次循環後變數 `n`, `d`, `rev` 的值及最終輸出：",
            en: "Dry-run the Python code below, tracing `n`, `d`, `rev` on each iteration and state the final output:"
          },
          lang: "python",
          code: "n = 427\nrev = 0\nwhile n > 0:\n    d = n % 10\n    rev = rev * 10 + d\n    n = n // 10\nprint(rev)",
          solution: {
            zh: "• 初始：`n = 427`, `rev = 0`\n• 第 1 次循環 (`427 > 0` True)：`d = 7`, `rev = 0*10+7 = 7`, `n = 42`\n• 第 2 次循環 (`42 > 0` True)：`d = 2`, `rev = 7*10+2 = 72`, `n = 4`\n• 第 3 次循環 (`4 > 0` True)：`d = 4`, `rev = 72*10+4 = 724`, `n = 0`\n• 第 4 次檢查 (`0 > 0` False) → 離開循環。\n• **最終輸出：`724`**（算法功能：將正整數的各位數字反轉！）。",
            en: "• Init: `n = 427`, `rev = 0`\n• Iter 1 (`427 > 0`): `d = 7`, `rev = 7`, `n = 42`\n• Iter 2 (`42 > 0`): `d = 2`, `rev = 72`, `n = 4`\n• Iter 3 (`4 > 0`): `d = 4`, `rev = 724`, `n = 0`\n• Check (`0 > 0` False) → loop terminates.\n• **Output: `724`** (Purpose: reverses the digits of a positive integer!)."
          }
        }
      ]
    },
    {
      id: "p1-d-3",
      code: "D3",
      importance: 3,
      title: { zh: "Python 3 基礎語法、數據類型、運算符與控制結構", en: "Python 3 Core Syntax, Data Types, Operators & Control Structures" },
      summary: {
        zh: "徹底掌握 Python 3 數據類型與轉型、`//` 與 `%` 整除取餘、邏輯運算符與摩根定律、`if-elif-else` 及 `for`/`while` 循環。",
        en: "Master Python 3 data types & casting, `//` and `%`, boolean logic & De Morgan's Laws, `if-elif-else`, and `for`/`while` loops."
      },
      blocks: [
        {
          type: "code",
          lang: "python",
          title: { zh: "數據類型、轉型、運算符與 I/O 必考重點", en: "Data Types, Casting, Operators & I/O Essentials" },
          code: "# 1. 四大基本數據類型 (Four Core Primitive Types)\nage = 17                 # int   (整數)\nheight = 1.72            # float (浮點數)\nname = \"Chan Tai Man\"    # str   (字串)\nis_passed = True         # bool  (布林值：首字母必須大寫 True / False)\n\n# 2. 輸入永遠回傳 str，須立即轉型！\nscore = int(input(\"Enter score: \"))\nprice = float(input(\"Enter price: \"))\n\n# 3. 算術運算符差異 (Arithmetic Operators)\nprint(17 / 5)    # 3.4   (真除法：結果永遠是 float)\nprint(17 // 5)   # 3     (整除 Floor division)\nprint(17 % 5)    # 2     (餘數 Modulo — 檢查偶數: x % 2 == 0)\nprint(2 ** 4)    # 16    (次方 Exponentiation)\n\n# 4. 格式化輸出 (f-string)\nprint(f\"{name}: {score} marks, ${price:.2f}\")  # 保留 2 位小數",
          note: {
            zh: "**縮排規則 (Indentation)**：Python 使用 **4 個空格縮排**界定程式區塊（不用大括號 `{}`），`if`、`elif`、`else`、`for`、`while`、`def` 行尾**必須有冒號 `:`**！",
            en: "**Indentation**: Python defines code blocks by **4-space indentation** (no `{}` braces), and `if`/`elif`/`else`/`for`/`while`/`def` headers **must end with a colon `:`**!"
          }
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "布林邏輯與德摩根定律 (De Morgan's Laws)", en: "Boolean Logic & De Morgan's Laws" },
          text: {
            zh: "運算優先次序：**括號 `()` > `not` > `and` > `or`**。\n**德摩根定律（化簡 `while` 驗證條件超好用！）**：\n• `not (A and B)` 等價於 `(not A) or (not B)`\n• `not (A or B)` 等價於 `(not A) and (not B)`\n**例子**：分數須在 `0` 至 `100` 之間，否則重輸：\n`while not (0 <= score <= 100):` 等價於 `while score < 0 or score > 100:` *(切勿誤寫 `and`！)*",
            en: "Precedence: **`()` > `not` > `and` > `or`**.\n**De Morgan's Laws (vital for validation loops!):**\n• `not (A and B)` ≡ `(not A) or (not B)`\n• `not (A or B)` ≡ `(not A) and (not B)`\n**Example**: Re-prompt if score not in `0..100`:\n`while not (0 <= score <= 100):` ≡ `while score < 0 or score > 100:` *(Never mistakenly use `and`!)*"
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "選擇結構 (`if-elif-else`) 與循環 (`for` / `while` / 哨兵值)", en: "Selection (`if-elif-else`) & Iteration (`for` / `while` / Sentinel)" },
          code: "# 1. if-elif-else (互斥分支：一旦某條件成立即跳過其餘分支)\nif score >= 85:\n    grade = \"5**\"\nelif score >= 75:   # 隱含 score < 85，無須重複寫 score < 85 and score >= 75\n    grade = \"5\"\nelif score >= 50:\n    grade = \"3\"\nelse:\n    grade = \"U\"\n\n# 2. for 循環各種 range() 用法\nfor i in range(5):           # 0, 1, 2, 3, 4  (共 5 次)\n    pass\nfor i in range(2, 11, 2):    # 2, 4, 6, 8, 10 (步長 +2)\n    pass\nfor i in range(5, 0, -1):    # 5, 4, 3, 2, 1  (倒數)\n    pass\n\n# 3. while 哨兵值循環 (Sentinel-controlled loop：輸入 -1 結束)\ntotal = 0\ncount = 0\nnum = int(input(\"Enter number (-1 to stop): \"))\nwhile num != -1:\n    total += num\n    count += 1\n    num = int(input(\"Enter number (-1 to stop): \"))\nif count > 0:                # 防止除以零 ZeroDivisionError!\n    print(\"Average:\", total / count)",
          note: {
            zh: "留意：使用「先讀第一個輸入 → `while num != -1:` → 迴圈底部再讀下一個輸入」的模式，可以完美避免將哨兵值 `-1` 誤計入 `total` 與 `count`！",
            en: "Notice the 'priming read' pattern (read before `while`, read again at bottom of loop): this prevents the sentinel `-1` from being accidentally added into `total` or `count`!"
          }
        }
      ]
    },
    {
      id: "p1-d-4",
      code: "D4",
      importance: 3,
      title: { zh: "字串操作、一維串列 (1D Lists) 與副程式 (Functions)", en: "Strings, 1D Lists & Subprograms (Functions)" },
      summary: {
        zh: "熟練 Python 0-based 索引、切片 Slicing、ASCII 轉換 `ord()`/`chr()`、1D List 常用方法與平行串列，以及區域/全域變數作用域。",
        en: "Master 0-based indexing, slicing, `ord()`/`chr()`, 1D list operations & parallel lists, and local vs global variable scope."
      },
      blocks: [
        {
          type: "code",
          lang: "python",
          title: { zh: "字串 (String) 必考技巧與凱撒密碼/驗證應用", en: "Essential String Operations & Character Manipulation" },
          code: "s = \"HKDSE2027\"\nprint(len(s))        # 9\nprint(s[0], s[-1])   # 'H', '7' (負索引從尾數起)\nprint(s[0:5])        # 'HKDSE'  (索引 0 到 4，不含 5)\nprint(s[5:])         # '2027'\nprint(s[::-1])       # '7202ESDKH' (一行反轉字串！)\n\n# 常用字串方法 (注意：字串不可變，方法會回傳新字串)\nmsg = \"  Apple,Banana,Cherry  \"\nitems = msg.strip().split(\",\")   # ['Apple', 'Banana', 'Cherry']\njoined = \" - \".join(items)       # 'Apple - Banana - Cherry'\n\n# ASCII 碼轉換 (DSE 加密與字母檢查超高頻考點!)\nprint(ord('A'))                  # 65\nprint(chr(65 + 2))               # 'C'\n# 檢查字串是否全為大寫英文字母：\nch = 'G'\nis_upper_alpha = ('A' <= ch <= 'Z')   # True",
          note: {
            zh: "字串是**不可變的 (Immutable)**：若要替換某位置字元，須用切片重組：`s = s[:2] + 'X' + s[3:]`，絕不能直接寫 `s[2] = 'X'`（會引發 `TypeError`）。",
            en: "Strings are **immutable**: to alter a character, rebuild with slicing `s = s[:2] + 'X' + s[3:]`; writing `s[2] = 'X'` raises a `TypeError`."
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "一維串列 (1D List) 與平行串列 (Parallel Lists)", en: "1D Lists & Parallel Lists in Python" },
          code: "# 初始化固定長度串列 (例如統計 0..9 出現次數的頻率表)\nfreq = [0] * 10\n\n# 常用 List 操作\nmarks = [78, 92, 65, 88]\nmarks.append(95)        # 尾端加入 -> [78, 92, 65, 88, 95]\nmarks.insert(1, 80)     # 於索引 1 插入 -> [78, 80, 92, 65, 88, 95]\nlast = marks.pop()      # 移除並回傳最後一項 (95)\nmarks.remove(65)        # 移除第一個值為 65 的元素\n\n# 平行串列 (Parallel Lists)：同一索引 i 對應同一學生的不同屬性\nnames  = [\"Amy\", \"Ben\", \"Chloe\"]\nscores = [84, 96, 79]\n\n# 找出最高分學生的姓名 (追蹤最大值的索引 max_idx!)\nmax_idx = 0\nfor i in range(1, len(scores)):\n    if scores[i] > scores[max_idx]:\n        max_idx = i\nprint(f\"Top student: {names[max_idx]} ({scores[max_idx]})\")",
          note: {
            zh: "**平行串列考題重點**：當題目問「輸出最高分同學的**姓名**」時，不只要記住 `max_val`，更要記住 **`max_idx`**（或同步更新 `best_name`），才能從 `names[max_idx]` 取得對應姓名！",
            en: "**Parallel Lists Tip**: When asked to output the **name** of the top scorer, track **`max_idx`** so you can look up `names[max_idx]` accurately!"
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "副程式 (Function vs Procedure) 與變數作用域 (Scope)", en: "Subprograms (Functions) & Variable Scope" },
          code: "# 帶回傳值的函數 (Function)\ndef calc_bmi(weight, height):\n    bmi = weight / (height ** 2)   # bmi 是區域變數 (Local variable)\n    return round(bmi, 1)\n\n# 不回傳數值的程序 (Procedure — Python 中自動回傳 None)\ndef print_banner(title):\n    print(\"=\" * 20)\n    print(title)\n    print(\"=\" * 20)\n\n# 作用域示範 (Local vs Global)\nx = 10               # 全域變數 (Global)\ndef demo():\n    x = 99           # 建立新的區域變數 x，不影響外部全域 x!\n    print(\"Inside:\", x)\n\ndemo()               # Inside: 99\nprint(\"Outside:\", x) # Outside: 10",
          note: {
            zh: "**為什麼應盡量使用區域變數與參數，少用全域變數 (`global`)？** 過度依賴全域變數會造成**副作用 (Side Effects)**（不同函數意外互相修改同一變數），令除錯困難並降低函數的獨立性與可重用性。",
            en: "**Why prefer local variables & parameters over `global`?** Global variables cause hidden **side effects** (functions unintentionally overwriting shared state), making debugging harder and reducing reusability."
          }
        }
      ]
    },
    {
      id: "p1-d-5",
      code: "D5",
      importance: 3,
      title: { zh: "卷一必修核心演算法（Python 3 模板）與測試除錯", en: "Paper 1 Core Algorithms (Python 3 Templates) & Testing/Debugging" },
      summary: {
        zh: "必背卷一常用演算法模板（最大值/最小值、線性搜尋、質數、迴文、交換、輸入驗證），並精通三大錯誤類型與邊界測試數據設計。",
        en: "Must-know Paper 1 templates (Max/Min, Linear Search, Prime, Palindrome, Swap, Validation) plus the 3 error types and boundary test data."
      },
      blocks: [
        {
          type: "code",
          lang: "python",
          title: { zh: "卷一必背五大 Python 演算法模板", en: "5 Must-Know Paper 1 Python Algorithm Templates" },
          code: "# 1. 尋找最大值與最小值 (⚠️ 必須以 arr[0] 初始化，切勿初始化為 0！)\ndef find_min_max(arr):\n    mn = arr[0]\n    mx = arr[0]\n    for i in range(1, len(arr)):\n        if arr[i] < mn:\n            mn = arr[i]\n        if arr[i] > mx:\n            mx = arr[i]\n    return mn, mx\n\n# 2. 線性搜尋 (Linear Search) — 找到即提前停止，找不到回傳 -1\ndef linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i\n    return -1\n\n# 3. 交換兩數 (Swap)\na, b = b, a          # Python 專屬簡潔寫法 (或 temp = a; a = b; b = temp)\n\n# 4. 質數判斷 (Prime Check)\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n# 5. 迴文判斷 (Palindrome Check — 雙指標法)\ndef is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True",
          note: {
            zh: "**經典陷阱**：若求全班氣溫最小值時誤寫 `mn = 0`，當所有氣溫皆高於 0°C（如 `[18, 22, 15]`）時，程式會錯誤回傳 `0`！同理求全為負數的陣列最大值時不可寫 `mx = 0`。永遠以 `arr[0]` 初始化！",
            en: "**Classic Trap**: Initializing `mn = 0` fails if all numbers are positive (e.g. `[18, 22, 15]` wrongly returns `0`)! Initializing `mx = 0` fails if all numbers are negative! Always initialize with `arr[0]`!"
          }
        },
        {
          type: "table",
          title: { zh: "三大程式錯誤類型 (Error Types) 必背對照", en: "Three Types of Programming Errors" },
          headers: [
            { zh: "錯誤類型", en: "Error Type" },
            { zh: "成因與發生時機", en: "Cause & Timing" },
            { zh: "Python 例子", en: "Python Example" }
          ],
          rows: [
            [{ zh: "**語法錯誤 (Syntax Error)**", en: "**Syntax Error**" }, { zh: "違反 Python 文法規則；**執行前**即被直譯器攔截拒絕執行。", en: "Violates Python grammar; caught **before execution**." }, { zh: "漏寫冒號 `if x > 0`、縮排不一致、括號未配對、`pritn(x)`（`pritn` 實際在執行該行報 `NameError`）。", en: "Missing `:` in `if x > 0`, bad indentation, unmatched parentheses." }],
            [{ zh: "**執行時期錯誤 (Runtime Error)**", en: "**Runtime Error**" }, { zh: "語法正確，但程式**運行途中**遇上非法操作導致崩潰 (Crash)。", en: "Valid syntax, but crashes **during execution** on an illegal operation." }, { zh: "除以零 `ZeroDivisionError`、索引越界 `IndexError` (`arr[len(arr)]`)、型別轉換失敗 `ValueError` (`int('abc')`)、檔案不存在 `FileNotFoundError`。", en: "`ZeroDivisionError`, `IndexError` (`arr[len(arr)]`), `ValueError` (`int('abc')`), `FileNotFoundError`." }],
            [{ zh: "**邏輯錯誤 (Logic Error)**", en: "**Logic Error**" }, { zh: "程式**順利跑完沒有報錯**，但算出**錯誤結果**；最難發現，須靠測試數據與追蹤表排查！", en: "Runs to completion without crashing, but yields **wrong output**; hardest to detect!" }, { zh: "差一錯誤 `range(1, n)` 漏算 `n`、求平均誤寫 `a + b / 2` 漏括號、條件 `<` 誤寫 `<=`。", en: "Off-by-one `range(1, n)` missing `n`, missing parens `a + b / 2`, using `<` instead of `<=`." }]
          ]
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "設計測試數據 (Test Data) 三大類別（DSE 必考題！）", en: "3 Categories of Test Data (Standard DSE Question!)" },
          text: {
            zh: "假設系統要求輸入合格分數為 `0` 至 `100` 的整數，設計測試用例必須包含：\n1. **正常數據 (Normal / Valid Data)**：範圍內的典型有效值，如 `50`, `75`。\n2. **邊界數據 (Boundary / Extreme Data)**：緊貼上下限的值及剛好越界的值，如 **`-1`, `0`, `1`, `99`, `100`, `101`**（專捉 `<` 與 `<=` 混用的邏輯錯誤！）。\n3. **異常 / 無效數據 (Abnormal / Erroneous Data)**：明顯越界或錯誤類型，如 `-50`, `200`, `\"abc\"`, 空輸入 `\"\"`。",
            en: "For an input accepting integers from `0` to `100`, a thorough test plan must cover:\n1. **Normal (Valid) Data**: Typical values inside the range, e.g. `50`, `75`.\n2. **Boundary (Extreme) Data**: Values right on and adjacent to limits, e.g. **`-1`, `0`, `1`, `99`, `100`, `101`** (catches `<` vs `<=` bugs!).\n3. **Abnormal (Invalid) Data**: Out-of-range or wrong type, e.g. `-50`, `200`, `\"abc\"`, empty input."
          }
        }
      ]
    }
  ]
});
