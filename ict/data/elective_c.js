window.ICT_MODULES.push({
  id: "ec-all",
  paper: "electiveC",
  code: "Elective C",
  hours: { zh: "卷二選修 C · 算法與程式編寫（100% Python 3）", en: "Paper 2 Elective C · Algorithm & Programming (100% Python 3)" },
  title: { zh: "選修單元 C：算法與程式編寫（專攻 Python 3）", en: "Elective C: Algorithm & Programming (Python 3 Only)" },
  subtitle: {
    zh: "完全去除 C/C++/Java/Pascal，全線採用 Python 3 精講：巢狀循環與 2D 串列、參數傳遞與遞歸、檔案與 CSV 處理、二分搜尋與四大排序算法及效率分析、堆疊/線性佇列/環形佇列/鏈結串列（陣列指標與類別雙模式）及事件驅動與測試策略。",
    en: "100% Python 3 (zero C/C++/Java/Pascal): Nested loops & 2D lists, parameter passing & recursion, file/CSV I/O, binary search & sorting algorithms with complexity, Stack/Queue/Circular Queue/Linked List (both HKEAA array-pointer & OOP Python styles), event-driven programming, and testing."
  },
  topics: [
    {
      id: "ec-1",
      code: "EC1",
      importance: 3,
      title: { zh: "巢狀循環 (Nested Loops) 與二維串列 (2D Lists / Matrices)", en: "Nested Loops & 2D Lists (Matrices) in Python" },
      summary: {
        zh: "掌握 2D 串列安全初始化、列主序/行主序/對角線遍歷、矩陣轉置、座位表/棋盤題型及記錄結構 (`dict` / `class`)。",
        en: "Master safe 2D list creation, row/column/diagonal traversal, matrix transpose, seating/grid exam problems, and structured records."
      },
      blocks: [
        {
          type: "callout",
          variant: "trap",
          title: { zh: "⚠️ Python 二維串列頭號陷阱：淺複製參照錯誤！", en: "⚠️ #1 Python 2D List Trap: Shallow Reference Aliasing!" },
          text: {
            zh: "❌ **錯誤寫法**：`grid = [[0] * 4] * 3` — 這會令 3 個列全部指向**同一個記憶體串列**！當你修改 `grid[0][1] = 9`，竟然會令 `grid[1][1]` 和 `grid[2][1]` 全變成 `9`！\n✅ **正確寫法**：使用列表生成式 `grid = [[0] * 4 for _ in range(3)]`（每一列獨立建立新串列）。",
            en: "❌ **WRONG**: `grid = [[0] * 4] * 3` — all 3 rows alias the **exact same inner list**! Changing `grid[0][1] = 9` mutates ALL rows!\n✅ **CORRECT**: `grid = [[0] * 4 for _ in range(3)]` (creates an independent list for every row)."
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "2D List 必考操作模板：每列總和、每行總和、對角線與轉置", en: "Essential 2D List Patterns: Row/Col Sums, Diagonals & Transpose" },
          code: "scores = [\n    [80, 75, 90],   # 學生 0 (列 r = 0)\n    [60, 85, 70],   # 學生 1 (列 r = 1)\n    [95, 92, 88]    # 學生 2 (列 r = 2)\n]\nROWS = len(scores)       # 3\nCOLS = len(scores[0])    # 3\n\n# 1. 計算每位學生的總分 (列主序 Row-major: 外層 r，內層 c)\nfor r in range(ROWS):\n    row_sum = 0\n    for c in range(COLS):\n        row_sum += scores[r][c]\n    print(f\"Student {r} total: {row_sum}\")\n\n# 2. 計算每個科目的平均分 (行主序 Column-major: 外層 c，內層 r)\nfor c in range(COLS):\n    col_sum = 0\n    for r in range(ROWS):\n        col_sum += scores[r][c]\n    print(f\"Subject {c} avg: {col_sum / ROWS:.1f}\")\n\n# 3. 矩陣轉置 (Transpose: 行列互換 T[c][r] = M[r][c])\ntransposed = [[scores[r][c] for r in range(ROWS)] for c in range(COLS)]\n\n# 4. 檢查相鄰四格 (上下左右方向向量 — 棋盤/迷宮題常用!)\ndirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]\nr, c = 1, 1\nfor dr, dc in dirs:\n    nr, nc = r + dr, c + dc\n    if 0 <= nr < ROWS and 0 <= nc < COLS:   # 必須先做邊界檢查!\n        print(\"Neighbour:\", scores[nr][nc])",
          note: {
            zh: "在網格/座位表題目中，訪問相鄰格子 `grid[r+dr][c+dc]` 前**必須檢查 `0 <= nr < ROWS and 0 <= nc < COLS`**，否則在邊緣會引發 `IndexError` 或因 Python 負索引 `-1` 繞到對面而造成隱蔽邏輯錯誤！",
            en: "Always check `0 <= nr < ROWS and 0 <= nc < COLS` before accessing neighbours! Negative indices in Python silently wrap around instead of crashing, creating nasty logic bugs!"
          }
        }
      ]
    },
    {
      id: "ec-2",
      code: "EC2",
      importance: 3,
      title: { zh: "進階參數傳遞機制與遞歸 (Parameter Passing & Recursion)", en: "Parameter Passing & Recursion in Python" },
      summary: {
        zh: "精通 Python 不可變 vs 可變物件的參數傳遞行為（對應傳值/傳址概念），以及遞歸兩大要素、呼叫堆疊追蹤與遞歸 vs 迭代取捨。",
        en: "Master immutable vs mutable parameter passing in Python (value vs reference concepts), recursion base/recursive cases, call stack tracing, and recursion vs iteration."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 參數傳遞：傳值 (Pass-by-Value) vs 傳址 (Pass-by-Reference) 在 Python 的表現", en: "1. Pass-by-Value vs Pass-by-Reference Behavior in Python" }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "Python 物件參照傳遞 (Call-by-Object-Reference) 必考追蹤", en: "Tracing Python Parameter Passing (Immutable vs Mutable)" },
          code: "def modify(num, arr):\n    num = num + 10        # int 是不可變 (Immutable) -> 重新綁定區域變數，不改外部!\n    arr[0] = 999          # list 是可變 (Mutable) -> 原地修改，外部串列會同步改變!\n    arr.append(4)\n\na = 5\nmy_list = [1, 2, 3]\nmodify(a, my_list)\nprint(a)        # 5           (未改變 — 類似傳值 Pass-by-Value)\nprint(my_list)  # [999, 2, 3, 4] (已改變 — 類似傳址 Pass-by-Reference)\n\n# 若不想函數修改原串列，須傳入複本 (Shallow Copy)：\nmodify(a, my_list[:])   # 或 my_list.copy()",
          note: {
            zh: "**記憶法則**：傳入 `int / float / str / bool`（不可變）表現如**傳值**；傳入 `list / dict`（可變）並執行原地修改（如 `arr[i]=...`, `.append()`）表現如**傳址**！但如果在函數內寫 `arr = [7, 8]`（整個變數重新指派新列表），則不會影響外部變數。",
            en: "**Rule**: Immutable args (`int`, `float`, `str`, `bool`) behave like **pass-by-value**; mutating mutable args (`list`, `dict`) in-place behaves like **pass-by-reference**! (Rebinding `arr = [7, 8]` creates a new local list without altering the caller)."
          }
        },
        {
          type: "heading",
          text: { zh: "2. 遞歸 (Recursion) 核心原理與呼叫堆疊追蹤", en: "2. Recursion Fundamentals & Call Stack Tracing" }
        },
        {
          type: "list",
          items: [
            { zh: "**定義**：函數直接或間接**呼叫自身**，把大問題拆解成規模更小的同類子問題。", en: "**Definition**: A function calling itself to solve smaller instances of the same problem." },
            { zh: "**兩大必備條件**：1) **基本情況 (Base Case)** — 不再遞歸的終止條件；2) **遞歸情況 (Recursive Case)** — 每次呼叫參數都必須**收斂逼近基本情況**。", en: "**Two Mandatory Parts**: 1) **Base Case** (terminating condition); 2) **Recursive Case** progressing strictly toward the base case." },
            { zh: "**呼叫堆疊 (Call Stack)**：每次遞歸呼叫都會在系統堆疊壓入一個新的堆疊幀 (Stack Frame) 保存參數與返回位址；若漏寫基本情況或深度過大，會觸發**堆疊溢出 (`RecursionError` / Stack Overflow)**！", en: "**Call Stack**: Each call pushes a new stack frame; missing/unreachable base cases trigger **Stack Overflow (`RecursionError`)**!" }
          ]
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "選修 C 四大經典遞歸 Python 範例", en: "4 Classic Elective C Recursion Examples in Python" },
          code: "# 1. 階乘 Factorial: n! = n * (n-1)!, Base: 0! = 1\ndef fact(n):\n    if n <= 1:               # Base Case\n        return 1\n    return n * fact(n - 1)   # Recursive Case\n\n# 2. 費氏數列 Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)   # 注意：重複計算極多，時間複雜度高達 O(2^n)!\n\n# 3. 遞歸將十進制轉二進制 (非常經典的 DSE 輸出次序追蹤題!)\ndef dec_to_bin(n):\n    if n == 0:\n        return\n    dec_to_bin(n // 2)       # 先遞歸，返回時才輸出餘數 -> 自動反序!\n    print(n % 2, end=\"\")\n# 呼叫 dec_to_bin(13) -> 輸出 1101\n\n# 4. 遞歸計算串列總和\ndef list_sum(arr, i=0):\n    if i == len(arr):\n        return 0\n    return arr[i] + list_sum(arr, i + 1)",
          note: {
            zh: "**追蹤 `dec_to_bin(13)` 呼叫堆疊**：`f(13)` → 等 `f(6)` → 等 `f(3)` → 等 `f(1)` → `f(0)` 返回；然後**由內而外逐層展開印出** `1`, `1`, `0`, `1` → 得 `1101`！這正是利用了 Call Stack 的後進先出 (LIFO) 特性。",
            en: "**Tracing `dec_to_bin(13)`**: Calls unwind LIFO from deepest frame back up: prints `1`, `1`, `0`, `1` → `1101`! Always notice whether `print()` is BEFORE (pre-order) or AFTER (reverse/post-order) the recursive call!"
          }
        },
        {
          type: "compare",
          title: { zh: "遞歸 (Recursion) vs 迭代循環 (Iteration)", en: "Recursion vs Iteration" },
          leftTitle: { zh: "遞歸 (Recursion)", en: "Recursion" },
          rightTitle: { zh: "迭代 (Iteration — for/while)", en: "Iteration (for/while loops)" },
          rows: [
            { aspect: { zh: "可讀性與適用問題", en: "Readability & Best Fit" }, left: { zh: "程式碼簡潔優雅，天然適合樹狀結構、分治法 (Merge Sort)、河內塔、迷宮回溯。", en: "Concise and natural for divide-and-conquer (Merge Sort), trees, Tower of Hanoi, backtracking." }, right: { zh: "複雜分治問題改用迭代往往需手動維護額外堆疊，程式碼較冗長。", en: "May require manually managing an explicit stack for tree/divide-and-conquer problems." } },
            { aspect: { zh: "記憶體與執行速度", en: "Memory & Speed" }, left: { zh: "**消耗較多記憶體**（每層呼叫佔用 Call Stack），函數呼叫開銷大、速度較慢，過深會 Stack Overflow。", en: "**Higher memory** (call stack frames), function-call overhead, risk of Stack Overflow." }, right: { zh: "**記憶體消耗極低 `O(1)`**、無函數呼叫開銷、執行速度更快，不會 Stack Overflow。", en: "**Minimal `O(1)` stack space**, faster execution, no Stack Overflow risk." } }
          ]
        }
      ]
    },
    {
      id: "ec-3",
      code: "EC3",
      importance: 3,
      title: { zh: "Python 檔案處理與 CSV 數據讀寫 (File Handling)", en: "File Handling & CSV Processing in Python" },
      summary: {
        zh: "掌握文字檔開啟模式 (`r`/`w`/`a`)、`with open(...)` 上下文管理、逐行讀取與 `.strip()`、解析 CSV 檔案及異常處理 (`try-except`)。",
        en: "Master file modes (`r`/`w`/`a`), `with open()`, line reading & `.strip()`, CSV parsing/writing, and `try-except` error handling."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "Python 檔案開啟模式對照", en: "Python File Open Modes" },
          headers: [
            { zh: "模式", en: "Mode" },
            { zh: "作用", en: "Action" },
            { zh: "檔案不存在時 / 檔案已存在時", en: "If Missing / If Exists" }
          ],
          rows: [
            [{ zh: "`'r'`", en: "`'r'`" }, { zh: "唯讀 (Read)", en: "Read only" }, { zh: "不存在 → 引發 `FileNotFoundError`；存在 → 從開頭讀取。", en: "Missing → `FileNotFoundError`; Exists → reads from start." }],
            [{ zh: "`'w'`", en: "`'w'`" }, { zh: "寫入 (Write — **清空覆寫!**)", en: "Write (**Overwrites!**)" }, { zh: "不存在 → 建立新檔；**存在 → 立即清空原有全部內容！**", en: "Missing → creates file; **Exists → truncates/erases all old content!**" }],
            [{ zh: "`'a'`", en: "`'a'`" }, { zh: "附加 (Append)", en: "Append" }, { zh: "不存在 → 建立新檔；存在 → 保留原內容，在**檔尾**繼續寫入。", en: "Missing → creates file; Exists → keeps content & writes at **end**." }]
          ]
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "選修 C 必考實戰：讀取 CSV 成績檔、計算平均並寫出結果", en: "Elective C Classic: Reading CSV, Processing & Writing Output" },
          code: "# 假設 scores.csv 內容：\n# Name,Math,ICT\n# Amy,85,92\n# Ben,70,88\n\ntry:\n    results = []\n    with open(\"scores.csv\", \"r\", encoding=\"utf-8\") as f:\n        header = f.readline()          # 跳過首行標題列!\n        for line in f:\n            line = line.strip()        # 去除尾端換行符 '\\n' 及多餘空白\n            if line == \"\":             # 防禦性編程：跳過空行\n                continue\n            parts = line.split(\",\")    # ['Amy', '85', '92']\n            name = parts[0]\n            avg = (int(parts[1]) + int(parts[2])) / 2\n            results.append((name, avg))\n\n    # 將結果寫入新檔案 (注意 f.write 不會自動換行，須自行加 '\\n'!)\n    with open(\"report.txt\", \"w\", encoding=\"utf-8\") as out:\n        for name, avg in results:\n            out.write(f\"{name}: {avg:.1f}\\n\")\n\nexcept FileNotFoundError:\n    print(\"Error: scores.csv not found!\")",
          note: {
            zh: "**兩大好習慣**：1) 用 `with open(...) as f:` 離開區塊時會**自動關閉檔案 `f.close()`**，防止檔案鎖定或緩衝區數據未寫入磁碟；2) 記住 `f.write()` 不會自動換行，必須加上 `\\n`！",
            en: "**2 Best Practices**: 1) `with open(...)` **auto-closes** the file even on exceptions, flushing buffers safely; 2) `f.write()` does NOT append a newline automatically — include `\\n`!"
          }
        }
      ]
    },
    {
      id: "ec-4",
      code: "EC4",
      importance: 3,
      title: { zh: "搜尋、排序算法與時間/空間效率分析（Python 3 全實作）", en: "Searching, Sorting Algorithms & Efficiency Analysis (Python 3)" },
      summary: {
        zh: "選修 C 必考核心！精通二分搜尋、冒泡排序（含提早終止優化）、插入排序、選擇排序、合併兩個已排序串列與歸併排序，及 Big-O 比較。",
        en: "Core Elective C algorithms! Master Binary Search, Bubble Sort (standard & early-exit), Insertion Sort, Selection Sort, 2-way Merge & Merge Sort, and Big-O complexity."
      },
      blocks: [
        {
          type: "code",
          lang: "python",
          title: { zh: "1. 二分搜尋 (Binary Search) — 前提：串列必須已排序！", en: "1. Binary Search (Precondition: List MUST Be Sorted!)" },
          code: "# 迭代版 (Iterative Binary Search) — 推薦，空間複雜度 O(1)\ndef binary_search(arr, target):\n    low = 0\n    high = len(arr) - 1\n    while low <= high:                 # ⚠️ 必須是 <= (不可漏等號!)\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid                 # 找到，回傳索引\n        elif arr[mid] < target:\n            low = mid + 1              # 捨棄左半部（含 mid）\n        else:\n            high = mid - 1             # 捨棄右半部（含 mid）\n    return -1                          # 找不到\n\n# 遞歸版 (Recursive Binary Search)\ndef binary_search_rec(arr, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        return binary_search_rec(arr, target, mid + 1, high)\n    else:\n        return binary_search_rec(arr, target, low, mid - 1)",
          note: {
            zh: "**為何二分搜尋極快？** 每次比較都會將搜尋範圍**減半**！對 `n = 1,000,000` 筆已排序資料，線性搜尋最壞需 `1,000,000` 次比較，二分搜尋最多只需 `⌊log₂(1,000,000)⌋ + 1 = 20` 次！",
            en: "**Why so fast?** Each step **halves** the search space! For `1,000,000` sorted items, Linear Search needs up to 1M checks, while Binary Search needs at most `⌊log₂(1,000,000)⌋ + 1 = 20`!"
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "2. 三大基礎排序算法：冒泡 (優化版)、插入、選擇排序", en: "2. Three Core Sorting Algorithms: Optimized Bubble, Insertion & Selection Sort" },
          code: "# (A) 優化冒泡排序 (Optimized Bubble Sort) — 沒有發生交換即提早結束!\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(n - 1 - i):       # 每輪尾端已就位 i 個最大值\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:                  # 已完全有序 -> 提早終止! (最佳 O(n))\n            break\n\n# (B) 插入排序 (Insertion Sort) — 如整理撲克牌，把 key 插入前方已排序區\ndef insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:   # 比 key 大的元素向右移一格\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key                 # 插入正確位置\n\n# (C) 選擇排序 (Selection Sort) — 每輪找未排序區最小值，與前面交換一次\ndef selection_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]",
          note: {
            zh: "**DSE 常見問答**：若將元素**寫入/交換成本極高**（如大型記錄），應選 **Selection Sort**（每輪最多只交換 1 次，總交換次數最多 `n-1` 次）；若資料**幾乎已經排好序**，**Insertion Sort** 或 **Optimized Bubble Sort** 只需 `O(n)` 最快！",
            en: "**Exam Insight**: Choose **Selection Sort** to minimize swaps (at most `n-1` swaps total); choose **Insertion Sort** or **Optimized Bubble Sort** on nearly-sorted data (`O(n)` best case)!"
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "3. 合併兩個已排序串列 (Two-Pointer Merge) 與歸併排序 (Merge Sort)", en: "3. Merging Two Sorted Lists & Merge Sort (O(n log n))" },
          code: "# DSE 超高頻獨立考題：用 O(m + n) 雙指標法合併兩個已升序排列的串列!\ndef merge(left, right):\n    res = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            res.append(left[i]); i += 1\n        else:\n            res.append(right[j]); j += 1\n    # 把其中一邊剩餘元素全部接上\n    res.extend(left[i:])\n    res.extend(right[j:])\n    return res\n\n# 歸併排序 (Merge Sort — 分治法 Divide & Conquer)\ndef merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)",
          note: {
            zh: "**時間與空間權衡 (Time-Space Trade-off)**：Merge Sort 即使在最壞情況仍穩定保持 `O(n log n)`（遠快於 `O(n²)`），但代價是需要額外 `O(n)` 記憶體空間存放暫存串列（非原地排序）。",
            en: "**Time-Space Trade-off**: Merge Sort guarantees `O(n log n)` even in worst case, trading off `O(n)` extra memory space (not in-place)."
          }
        },
        {
          type: "table",
          title: { zh: "搜尋與排序演算法效率總對照表", en: "Algorithm Efficiency Comparison Table" },
          headers: [
            { zh: "演算法", en: "Algorithm" },
            { zh: "最佳時間", en: "Best Time" },
            { zh: "最壞時間", en: "Worst Time" },
            { zh: "額外空間", en: "Extra Space" },
            { zh: "備註 / 前提", en: "Notes / Precondition" }
          ],
          rows: [
            [{ zh: "線性搜尋 Linear Search", en: "Linear Search" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "`O(n)`", en: "`O(n)`" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "無須排序，適用任何串列", en: "Works on unsorted lists" }],
            [{ zh: "二分搜尋 Binary Search", en: "Binary Search" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "`O(log n)`", en: "`O(log n)`" }, { zh: "`O(1)` (迭代)", en: "`O(1)` (iter)" }, { zh: "**必須已排序！**", en: "**List MUST be sorted!**" }],
            [{ zh: "優化冒泡 Bubble Sort", en: "Optimized Bubble" }, { zh: "`O(n)`", en: "`O(n)`" }, { zh: "`O(n²)`", en: "`O(n²)`" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "穩定排序；無優化則最佳亦為 `O(n²)`", en: "Stable; `O(n²)` without early-exit flag" }],
            [{ zh: "插入排序 Insertion Sort", en: "Insertion Sort" }, { zh: "`O(n)`", en: "`O(n)`" }, { zh: "`O(n²)`", en: "`O(n²)`" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "穩定；極適合小陣列或近乎已排序資料", en: "Stable; great for small/nearly-sorted lists" }],
            [{ zh: "選擇排序 Selection Sort", en: "Selection Sort" }, { zh: "`O(n²)`", en: "`O(n²)`" }, { zh: "`O(n²)`", en: "`O(n²)`" }, { zh: "`O(1)`", en: "`O(1)`" }, { zh: "交換次數最少 (最多 `n-1` 次)", en: "Minimises writes/swaps (≤ `n-1`)" }],
            [{ zh: "歸併排序 Merge Sort", en: "Merge Sort" }, { zh: "`O(n log n)`", en: "`O(n log n)`" }, { zh: "`O(n log n)`", en: "`O(n log n)`" }, { zh: "`O(n)`", en: "`O(n)`" }, { zh: "穩定分治排序，需額外空間", en: "Stable divide-and-conquer, extra space" }]
          ]
        }
      ]
    },
    {
      id: "ec-5",
      code: "EC5",
      importance: 3,
      title: { zh: "抽象數據結構：堆疊、佇列、環形佇列與鏈結串列（Python 雙模式）", en: "Abstract Data Structures: Stack, Queue, Circular Queue & Linked List" },
      summary: {
        zh: "選修 C 皇冠級必考重點！同時涵蓋「考評局固定陣列+指標」寫法（應付追蹤題）與「Pythonic 物件/內置」寫法，徹底攻克環形佇列取餘與鏈結串列指標重連次序！",
        en: "Crown jewel of Elective C! Covers BOTH HKEAA fixed-array index-pointer style (for trace tables) and Pythonic style — mastering Circular Queue modulo wrap-around and Linked List pointer relinking!"
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 堆疊 (Stack — LIFO 後進先出)", en: "1. Stack (LIFO — Last In, First Out)" }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "Stack：考評局固定大小陣列指標版 & 經典括號匹配應用", en: "Stack: HKEAA Fixed-Array Pointer Style & Bracket Matching App" },
          code: "# --- 模式 A：考評局固定陣列 + top 指標版 (初值 top = -1) ---\nMAX = 5\nstack = [None] * MAX\ntop = -1\n\ndef is_empty(): return top == -1\ndef is_full():  return top == MAX - 1\n\ndef push(item):\n    global top\n    if is_full():\n        print(\"Stack Overflow!\")\n    else:\n        top += 1             # 先移指標，再放入資料\n        stack[top] = item\n\ndef pop():\n    global top\n    if is_empty():\n        print(\"Stack Underflow!\")\n        return None\n    item = stack[top]        # 先取資料，再降指標\n    top -= 1\n    return item\n\n# --- 模式 B：Pythonic 實戰 — 檢查括號是否平衡 ({[()]}) ---\ndef is_balanced(expr):\n    st = []\n    pairs = {')': '(', ']': '[', '}': '{'}\n    for ch in expr:\n        if ch in \"([{\":\n            st.append(ch)                   # Push\n        elif ch in \")]}\":\n            if not st or st.pop() != pairs[ch]:\n                return False\n    return len(st) == 0                     # 最後堆疊必須為空!",
          note: {
            zh: "**Stack 五大常見應用**：函數呼叫堆疊 (Recursion Call Stack)、文字編輯器復原 (Undo/Redo)、瀏覽器上一頁 (Back)、反轉字串/串列、括號匹配及後綴表達式 (Postfix/RPN) 求值。",
            en: "**5 Classic Stack Apps**: Function Call Stack (Recursion), Undo/Redo, Browser Back history, Reversing sequences, Balanced brackets & Postfix (RPN) evaluation."
          }
        },
        {
          type: "heading",
          text: { zh: "2. 佇列 (Queue — FIFO 先進先出) 與環形佇列 (Circular Queue)", en: "2. Queue (FIFO — First In, First Out) & Circular Queue" }
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "⭐ 必考問答：線性佇列的「假溢出 (False Overflow)」與環形佇列解法", en: "⭐ Classic Exam Q: Linear Queue 'False Overflow' & Circular Queue Solution" },
          text: {
            zh: "**假溢出問題**：在固定大小線性佇列中，經過多次 `enqueue` 和 `dequeue` 後，`rear` 指標到達陣列尾端 `MAX - 1`，即使前面索引 `0, 1, 2` 已經出隊空出，系統仍誤判為「已滿」無法入隊！\n**解法（環形佇列 Circular Queue）**：利用餘數運算 `% MAX` 令指標到達尾端後自動繞回索引 `0`：\n• 入隊：`rear = (rear + 1) % MAX`\n• 出隊：`front = (front + 1) % MAX`\n• 使用變數 `count` 追蹤元素個數：`count == 0` 為空、`count == MAX` 為滿！（或保留 1 格空位：`(rear + 1) % MAX == front` 為滿）。",
            en: "**False Overflow**: In a fixed linear queue, after enqueues & dequeues, `rear` reaches `MAX - 1` so no new item can be added even though empty slots exist at the front!\n**Solution (Circular Queue)**: Wrap pointers via modulo `% MAX`:\n• Enqueue: `rear = (rear + 1) % MAX`\n• Dequeue: `front = (front + 1) % MAX`\n• Track `count` (`0` = empty, `MAX` = full), OR leave 1 slot empty (`(rear + 1) % MAX == front` = full)."
          }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "環形佇列 (Circular Queue) 完整 Python 實作（含 count 計數器）", en: "Complete Circular Queue in Python (with `count` tracker)" },
          code: "MAX = 4\nqueue = [None] * MAX\nfront = 0\nrear = -1\ncount = 0\n\ndef enqueue(item):\n    global rear, count\n    if count == MAX:\n        print(\"Queue Overflow!\")\n    else:\n        rear = (rear + 1) % MAX    # 環形回繞核心公式!\n        queue[rear] = item\n        count += 1\n\ndef dequeue():\n    global front, count\n    if count == 0:\n        print(\"Queue Underflow!\")\n        return None\n    item = queue[front]\n    front = (front + 1) % MAX      # 環形回繞!\n    count -= 1\n    return item",
          note: {
            zh: "**Queue 典型應用**：打印機列印排程 (Print Spooler)、鍵盤緩衝區 (Keyboard Buffer)、CPU 進程排程、訂票排隊系統。*(Python 實務亦可用 `from collections import deque` 以 `O(1)` 執行 `append()` 及 `popleft()`。)*",
            en: "**Queue Apps**: Print Spooler, Keyboard Buffer, CPU Job Scheduling, Ticketing Queues. *(In practical Python, `collections.deque` gives `O(1)` `append()` and `popleft()`.)*"
          }
        },
        {
          type: "heading",
          text: { zh: "3. 單向鏈結串列 (Singly Linked List — 陣列指標版 & 節點類別版)", en: "3. Singly Linked List (HKEAA Array-Pointer & Python Node Class)" }
        },
        {
          type: "code",
          lang: "python",
          title: { zh: "單向鏈結串列：考評局平行陣列 (`data[]`, `next[]`) + Python 類別雙示範", en: "Singly Linked List: HKEAA Parallel Arrays & Python `Node` Class" },
          code: "# === 模式 A：考評局最愛追蹤題格式 — data[] 與 next[] 平行陣列 ===\n# 邏輯順序: \"Amy\" (idx 2) -> \"Ben\" (idx 0) -> \"Eva\" (idx 3) -> None (-1)\ndata = [\"Ben\", \"Dan\", \"Amy\", \"Eva\"]\nnxt  = [3,     -1,    0,     -1]\nhead = 2\n\n# 1. 遍歷 (Traversal)\ncurr = head\nwhile curr != -1:\n    print(data[curr], end=\" -> \")\n    curr = nxt[curr]\nprint(\"NULL\")\n\n# 2. 在 \"Ben\"(idx 0) 後插入 \"Dan\"(已存於空槽 idx 1) — ⚠️ 指標重連次序絕不可錯!\n# 必須「先連新節點指向後方，再改前節點指向新節點」，否則會遺失後半段鏈表!\nnxt[1] = nxt[0]    # Step 1: Dan.next -> Eva (3)\nnxt[0] = 1         # Step 2: Ben.next -> Dan (1)\n\n# 3. 刪除 \"Ben\"(idx 0)：把其前驅 \"Amy\"(idx 2) 的指標直接繞過 Ben 指向 Dan(1)\nnxt[2] = nxt[0]    # Amy.next -> Dan (1)\n\n# === 模式 B：Python 物件導向節點類別 (class Node) ===\nclass Node:\n    def __init__(self, val):\n        self.data = val\n        self.next = None\n\ndef insert_sorted(head, val):\n    new_node = Node(val)\n    # 情況 1：空串列或新值小於等於頭節點 -> 插入成為新 head\n    if head is None or val <= head.data:\n        new_node.next = head\n        return new_node\n    # 情況 2：尋找正確插入位置 (停在目標前一個節點 curr)\n    curr = head\n    while curr.next is not None and curr.next.data < val:\n        curr = curr.next\n    new_node.next = curr.next     # 先接後面!\n    curr.next = new_node          # 再接前面!\n    return head",
          note: {
            zh: "**鏈結串列插入/刪除兩大失分地雷**：1) 插入時若先寫 `curr.next = new_node` 再寫 `new_node.next = curr.next`，會變成新節點**指向自己造成死循環**並永久丟失後半鏈表！永遠**先接後再改前**；2) 切勿忘記處理**在頭節點 `head` 插入或刪除**的特殊情況！",
            en: "**2 Fatal Linked List Traps**: 1) Always link `new_node.next = curr.next` **FIRST** before `curr.next = new_node` (reversing causes a self-loop & loses the rest of the list!); 2) Always handle the **head insertion/deletion** edge case!"
          }
        },
        {
          type: "compare",
          title: { zh: "陣列 (Array / List) vs 鏈結串列 (Linked List) — 必背比較表", en: "Array vs Linked List Comparison" },
          leftTitle: { zh: "陣列 (Array / Python List)", en: "Array (Contiguous)" },
          rightTitle: { zh: "鏈結串列 (Linked List)", en: "Linked List (Node + Pointer)" },
          rows: [
            { aspect: { zh: "隨機存取速度", en: "Random Access" }, left: { zh: "**極快 `O(1)`**：直接以索引 `arr[k]` 讀取（亦因此支援二分搜尋）。", en: "**Instant `O(1)`** direct index access `arr[k]` (supports Binary Search)." }, right: { zh: "**慢 `O(n)`**：必須由 `head` 開始逐個節點順序追蹤指標（不適合二分搜尋）。", en: "**Slow `O(n)`**: Must traverse sequentially from `head` (unsuitable for Binary Search)." } },
            { aspect: { zh: "中間插入 / 刪除", en: "Insert / Delete (Middle)" }, left: { zh: "**慢 `O(n)`**：須將後方所有元素逐格向右或向左搬移 (Shifting)。", en: "**Slow `O(n)`**: Requires shifting subsequent elements." }, right: { zh: "**極快 `O(1)`**（定位後）：只需修改 1–2 個指標，**完全無須搬移數據**！", en: "**Fast `O(1)`** (once positioned): Only updates 1–2 pointers, **zero data shifting**!" } },
            { aspect: { zh: "記憶體使用", en: "Memory Usage" }, left: { zh: "連續記憶體，無指標額外開銷；靜態陣列大小固定易浪費或爆滿。", en: "Contiguous memory, zero pointer overhead; static size can waste or overflow." }, right: { zh: "動態配置按需增長，無須連續空間；但每個節點須額外空間儲存 `next` 指標。", en: "Dynamic growth, non-contiguous memory; extra memory overhead per node for `next` pointers." } }
          ]
        }
      ]
    },
    {
      id: "ec-6",
      code: "EC6",
      importance: 2,
      title: { zh: "事件驅動程式編寫、軟件測試策略與程式維護性", en: "Event-Driven Programming, Testing Strategies & Maintainability" },
      summary: {
        zh: "理解事件驅動模型（GUI 與感應器事件回呼）、單元/整合/系統/用戶驗收測試、黑盒 vs 白盒測試及防禦性編程原則。",
        en: "Understand event-driven programming (GUI/hardware callbacks), Unit/Integration/System/UAT testing, Black-box vs White-box testing, and defensive coding."
      },
      blocks: [
        {
          type: "code",
          lang: "python",
          title: { zh: "事件驅動程式編寫 (Event-Driven Programming — Python `tkinter` 範例)", en: "Event-Driven Programming Example (Python `tkinter`)" },
          code: "import tkinter as tk\n\n# 事件處理函數 (Event Handler / Callback)：只有在「點擊事件」觸發時才執行\ndef on_convert():\n    c = float(entry_c.get())\n    f = c * 9 / 5 + 32\n    lbl_res.config(text=f\"{f:.1f} °F\")\n\nroot = tk.Tk()\nroot.title(\"Temp Converter\")\nentry_c = tk.Entry(root)\nentry_c.pack()\n\n# 綁定按鈕點擊事件 (Bind click event to handler)\nbtn = tk.Button(root, text=\"Convert\", command=on_convert)\nbtn.pack()\nlbl_res = tk.Label(root, text=\"\")\nlbl_res.pack()\n\nroot.mainloop()   # 事件循環 (Event Loop)：持續聆聽滑鼠/鍵盤/感應器事件!",
          note: {
            zh: "**傳統程序式 (Procedural) vs 事件驅動 (Event-Driven)**：程序式由上而下按固定順序執行；事件驅動由**事件循環 (Event Loop)** 持續等待外部事件（按鈕點擊、按鍵、計時器、IoT 溫度感應器超標），觸發對應的**事件處理器 (Event Handler)**，非常適合互動式 App、網頁及硬件介面控制。",
            en: "**Procedural vs Event-Driven**: Procedural runs top-to-bottom in a fixed sequence; Event-Driven runs an **Event Loop** listening for clicks, keypresses, timers, or IoT sensor triggers, invoking registered **Event Handlers**."
          }
        },
        {
          type: "table",
          title: { zh: "軟件測試四階段 & 黑盒/白盒測試", en: "4 Software Testing Levels & Black-Box vs White-Box" },
          headers: [
            { zh: "測試類別", en: "Testing Type" },
            { zh: "測試焦點與執行對象", en: "Focus & Performed By" }
          ],
          rows: [
            [{ zh: "**單元測試 (Unit Testing)**", en: "**Unit Testing**" }, { zh: "由開發者獨立測試每個副程式/函數是否符合預期，可用 Stub/Driver 模擬未完成模組。", en: "Developer tests individual functions/modules in isolation." }],
            [{ zh: "**整合測試 (Integration Testing)**", en: "**Integration Testing**" }, { zh: "將多個已測試模組組合在一起，重點檢查模組之間的**介面與參數傳遞**是否協調。", en: "Combines modules to verify **interfaces and data passing** between them." }],
            [{ zh: "**系統測試 (System Testing)**", en: "**System Testing**" }, { zh: "把整個系統作為整體進行功能、效能、壓力與安全性測試。", en: "Tests the complete integrated system for functionality, load, and security." }],
            [{ zh: "**用戶驗收測試 (UAT)**", en: "**User Acceptance Testing (UAT)**" }, { zh: "由**最終真實用戶/客戶**於接近實際環境中驗證系統是否滿足業務需求並簽收上線。", en: "**End users/clients** validate the system against real-world business requirements before launch." }],
            [{ zh: "**黑盒測試 (Black-Box)**", en: "**Black-Box Testing**" }, { zh: "**不看內部程式碼**，只按規格設計正常/邊界/異常輸入，核對輸出是否正確。", en: "**Ignores internal code**; tests inputs (normal/boundary/abnormal) against expected outputs from specs." }],
            [{ zh: "**白盒測試 (White-Box)**", en: "**White-Box Testing**" }, { zh: "**檢視內部程式碼邏輯**，設計測試用例覆蓋每一條語句 (**Statement Coverage**) 與每一個 `if`/`else` 分支 (**Branch Coverage**)。", en: "**Inspects internal code paths** to achieve **Statement Coverage** and **Branch Coverage** (`if`/`else` paths)." }]
          ]
        }
      ]
    }
  ]
});
