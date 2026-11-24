window.ICT_MODULES.push({
  id: "p1-a",
  paper: "paper1",
  code: "Module A",
  hours: { zh: "必修 · 約 37 課時", en: "Compulsory · ~37 hrs" },
  title: { zh: "單元 A：資訊處理", en: "Module A: Information Processing" },
  subtitle: {
    zh: "涵蓋數據與資訊、數據有效性檢驗與校驗、二進制補碼、字符編碼、多媒體檔案計算、電子試算表進階函數與基礎數據庫概念。",
    en: "Covers data vs information, data validation & verification, 2's complement, character encoding, multimedia file size calculations, spreadsheet functions, and basic database concepts."
  },
  topics: [
    {
      id: "p1-a-1",
      code: "A1",
      importance: 2,
      title: { zh: "資訊處理簡介與 IPO 週期", en: "Introduction to Information Processing & IPO Cycle" },
      summary: {
        zh: "區分數據、資訊與知識；掌握 IPO 處理週期、批次處理與實時處理，以及 GIGO 概念與資訊質素標準。",
        en: "Distinguish data, information, and knowledge; master IPO cycle, batch vs real-time processing, GIGO, and information quality criteria."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "核心概念辨析", en: "Core Concept Distinctions" },
          items: [
            {
              term: { zh: "數據 (Data)", en: "Data" },
              def: {
                zh: "未經整理或處理的原始事實、數字或符號，本身沒有特定意義。例如：`85, 92, 78`。",
                en: "Raw, unprocessed facts, figures, or symbols with no inherent meaning on their own. E.g. `85, 92, 78`."
              }
            },
            {
              term: { zh: "資訊 (Information)", en: "Information" },
              def: {
                zh: "經過整理、分類、計算或詮釋後具有意義和價值的數據，可用於輔助決策。例如：「6A 班數學測驗平均分為 85 分」。",
                en: "Processed, organised, or structured data that carries meaning and context to support decision-making. E.g. 'Class 6A Math average is 85'."
              }
            },
            {
              term: { zh: "IPO 週期 (Input-Process-Output)", en: "IPO Cycle (Input-Process-Output)" },
              def: {
                zh: "資訊系統基本運作流程：**輸入 (Input) → 處理 (Process) → 輸出 (Output)**，並輔以**儲存 (Storage)** 及**回饋 (Feedback)** 以持續改進系統。",
                en: "Fundamental workflow of information systems: **Input → Process → Output**, supported by **Storage** and **Feedback** loops."
              }
            },
            {
              term: { zh: "GIGO (廢料進，廢料出)", en: "GIGO (Garbage In, Garbage Out)" },
              def: {
                zh: "若輸入系統的數據不準確、不完整或有錯誤，即使處理程式完全正確，輸出的資訊也必然是錯誤和不可靠的。",
                en: "If invalid, inaccurate, or flawed data is entered into a system, the resulting output will inevitably be erroneous regardless of how sound the processing logic is."
              }
            }
          ]
        },
        {
          type: "heading",
          text: { zh: "資訊處理七大階段", en: "Seven Stages of Information Processing" }
        },
        {
          type: "list",
          ordered: true,
          items: [
            { zh: "**數據收集 (Data Collection)**：透過問卷、感應器、條碼掃描器或網上表單獲取原始數據。", en: "**Data Collection**: Gathering raw data via forms, sensors, barcode scanners, or online surveys." },
            { zh: "**數據組織 (Data Organisation)**：將數據分類、排序、編碼及格式標準化，方便系統讀取。", en: "**Data Organisation**: Classifying, sorting, coding, and standardising data structure." },
            { zh: "**數據輸入 (Data Input)**：將數據轉化為電腦可讀形式並輸入系統（人手鍵入、OCR、OMR、NFC 等）。", en: "**Data Input**: Converting data into machine-readable form (typing, OCR, OMR, NFC)." },
            { zh: "**數據處理 (Data Processing)**：對數據進行計算、篩選、彙總、統計及轉換。", en: "**Data Processing**: Calculating, filtering, aggregating, and transforming data into information." },
            { zh: "**數據儲存 (Data Storage)**：將數據與處理結果安全保存於磁碟、SSD 或雲端數據庫。", en: "**Data Storage**: Persisting raw data and results in secondary/cloud storage." },
            { zh: "**數據輸出 (Data Output)**：以螢幕、報表、圖表、語音或列印形式向用戶呈現資訊。", en: "**Data Output**: Presenting information via displays, charts, printed reports, or audio." },
            { zh: "**數據傳輸 (Data Transmission)**：透過網絡將資訊傳送至其他裝置或系統。", en: "**Data Transmission**: Sending processed information across networks to other systems." }
          ]
        },
        {
          type: "table",
          title: { zh: "處理模式比較：批次處理 vs 實時處理", en: "Processing Modes: Batch vs Real-Time Processing" },
          headers: [
            { zh: "比較項目", en: "Aspect" },
            { zh: "批次處理 (Batch Processing)", en: "Batch Processing" },
            { zh: "實時處理 (Real-Time Processing)", en: "Real-Time Processing" }
          ],
          rows: [
            [
              { zh: "運作方式", en: "Mechanism" },
              { zh: "收集一段時間的交易數據後，於特定時段（如深夜）一次過集中處理。", en: "Collects transactions over a period and processes them together as a single batch (often overnight)." },
              { zh: "系統收到輸入後**即時**處理並立即回饋結果，回應延遲極低。", en: "Processes input **immediately** upon arrival and produces instant response/updates." }
            ],
            [
              { zh: "適用場景", en: "Use Cases" },
              { zh: "每月出糧系統、水電煤帳單印製、信用卡月結單、銀行支票結算。", en: "Monthly payroll, utility billing, credit card statements, cheque clearing." },
              { zh: "機票/電影訂座系統、ATM 提款、八達通拍卡、自動駕駛、醫療監護。", en: "Airline/cinema booking, ATM withdrawal, Octopus tap, autonomous driving, medical monitoring." }
            ],
            [
              { zh: "優點與缺點", en: "Pros & Cons" },
              { zh: "善用離峰運算資源、成本低；但數據非最新，無法即時回應。", en: "Efficient use of off-peak CPU resources, lower cost; data is not up-to-the-minute." },
              { zh: "資料永遠最新、避免雙重預訂 (Double booking)；但硬件與網絡成本高，須 24/7 運行。", en: "Always up-to-date, prevents double booking; expensive hardware/network, requires 24/7 uptime." }
            ]
          ]
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "DSE 常見答題關鍵字：優質資訊五大特質", en: "DSE Exam Keywords: 5 Attributes of Good Information" },
          text: {
            zh: "**準確性 (Accuracy)**、**時效性 (Timeliness)**、**完整性 (Completeness)**、**相關性 (Relevance)**、**可靠性 (Reliability)**。回答情境題時須結合題目背景說明（例如：過時的股價喪失**時效性**）。",
            en: "**Accuracy**, **Timeliness**, **Completeness**, **Relevance**, and **Reliability**. Always tie keywords to the exam scenario (e.g., outdated stock prices lack **timeliness**)."
          }
        }
      ]
    },
    {
      id: "p1-a-2",
      code: "A2",
      importance: 3,
      title: { zh: "數據組織、數據有效性檢驗 (Validation) 與校驗 (Verification)", en: "Data Organisation, Validation & Verification" },
      summary: {
        zh: "卷一最高頻考點之一！徹底區分 Validation 與 Verification，熟記全部 9 種有效性檢驗、檢驗數位計算與奇偶校驗。",
        en: "One of the highest-frequency Paper 1 topics! Master Validation vs Verification, all 9 validation checks, check digit weighted calculations, and parity check."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "數據層次結構與檔案存取方式", en: "Data Hierarchy & File Access Methods" }
        },
        {
          type: "diagram",
          title: { zh: "數據層次結構 (Data Hierarchy)", en: "Data Hierarchy" },
          ascii: "Bit (位元 0/1) → Byte (位元組 8 bits) → Field (欄位 e.g. Name) → Record (記錄 e.g. 1 Student) → Table/File (資料表) → Database (數據庫)",
          caption: { zh: "由最小儲存單位逐層組成完整數據庫。", en: "Builds upward from the smallest binary unit to a full database." }
        },
        {
          type: "compare",
          title: { zh: "核心必考區分：數據有效性檢驗 vs 數據校驗", en: "Critical DSE Distinction: Validation vs Verification" },
          leftTitle: { zh: "數據有效性檢驗 (Data Validation)", en: "Data Validation" },
          rightTitle: { zh: "數據校驗 (Data Verification)", en: "Data Verification" },
          rows: [
            {
              aspect: { zh: "目的", en: "Purpose" },
              left: { zh: "檢查輸入數據是否**合理、符合預設規則**（Reasonableness）。", en: "Checks whether input data is **reasonable and conforms to predefined rules**." },
              right: { zh: "檢查輸入或傳輸後的數據是否與**原始來源完全一致**（Transcription accuracy）。", en: "Checks whether entered/transmitted data **exactly matches the original source**." }
            },
            {
              aspect: { zh: "執行者", en: "Performed By" },
              left: { zh: "由電腦程式自動執行。", en: "Automatically performed by computer software." },
              right: { zh: "由人工核對（雙重輸入/視覺檢查）或硬體校驗（奇偶校驗）。", en: "Humans (double entry, visual check) or hardware error check (parity)." }
            },
            {
              aspect: { zh: "能否保證「正確」？", en: "Guarantees Correctness?" },
              left: { zh: "**不能！** 例如正確年齡是 17，誤輸入 18 仍能通過範圍檢查 (0–120)。", en: "**NO!** Typing `18` instead of `17` passes a range check (0–120) even though it is factually wrong." },
              right: { zh: "只保證轉錄無誤；若原始紙本本身就寫錯，校驗也無法發現！", en: "Only ensures faithful copying; cannot catch errors already present in the original source!" }
            }
          ]
        },
        {
          type: "table",
          title: { zh: "九大數據有效性檢驗 (Validation Checks) 詳解", en: "9 Data Validation Checks Explained" },
          headers: [
            { zh: "檢驗名稱", en: "Validation Check" },
            { zh: "檢查規則", en: "Rule Checked" },
            { zh: "DSE 常見例子", en: "Typical DSE Example" }
          ],
          rows: [
            [{ zh: "**存在檢查 (Presence Check)**", en: "**Presence Check**" }, { zh: "確保必填欄位不可留空 (NOT NULL)。", en: "Ensures a mandatory field is not left blank." }, { zh: "註冊表單的「用戶名」或「密碼」不可空白。", en: "Username or Password field cannot be empty." }],
            [{ zh: "**類型檢查 (Type Check)**", en: "**Type Check**" }, { zh: "確保輸入符合指定數據類型（數字/文字/日期）。", en: "Ensures data matches expected data type (numeric, text, date)." }, { zh: "「年齡」欄位不可輸入字母 `abc`。", en: "Age field rejects alphabetic characters `abc`." }],
            [{ zh: "**範圍檢查 (Range Check)**", en: "**Range Check**" }, { zh: "確保數值或日期落在指定上下限之內。", en: "Ensures a number/date falls within upper and lower bounds." }, { zh: "考試分數須介乎 `0` 至 `100`；月份須為 `1` 至 `12`。", en: "Exam mark between `0` and `100`; month between `1` and `12`." }],
            [{ zh: "**長度檢查 (Length Check)**", en: "**Length Check**" }, { zh: "確保字元數目符合固定長度或長度範圍。", en: "Ensures exact number of characters or min/max length." }, { zh: "香港電話號碼必須剛好 8 位數字；密碼至少 8 字元。", en: "HK phone number must be exactly 8 digits; password ≥ 8 chars." }],
            [{ zh: "**格式檢查 (Format Check)**", en: "**Format Check**" }, { zh: "確保輸入符合特定字元排列模式。", en: "Ensures input follows a strict character pattern." }, { zh: "日期 `DD/MM/YYYY`、電郵含 `@`、學號 `S2027-001`。", en: "Date `DD/MM/YYYY`, email containing `@`, Student ID `S2027-001`." }],
            [{ zh: "**固定值 / 查找檢查 (Fixed Value / Lookup)**", en: "**Fixed Value / Lookup Check**" }, { zh: "輸入值必須存在於預設選項清單或資料表中。", en: "Value must match an item in a predefined list/table." }, { zh: "性別只限 `M`/`F`；班別必須是現有班級（常用下拉選單實現）。", en: "Gender limited to `M`/`F`; Class code exists in Class table." }],
            [{ zh: "**一致性檢查 (Consistency Check)**", en: "**Consistency Check**" }, { zh: "跨欄位比對，確保兩個或以上欄位邏輯上沒有矛盾。", en: "Cross-checks two or more fields for logical consistency." }, { zh: "「退房日期」不可早於「入住日期」；「班別 6A」不應出現於「中一生」。", en: "Check-out date cannot precede check-in date; Form 1 student cannot be in Class 6A." }],
            [{ zh: "**唯一性檢查 (Uniqueness Check)**", en: "**Uniqueness Check**" }, { zh: "確保數值在系統中沒有重複（對應主鍵）。", en: "Ensures value does not already exist (Primary Key)." }, { zh: "身份證號碼、學生編號不可與現有記錄重複。", en: "HKID or Student ID must not duplicate an existing record." }],
            [{ zh: "**檢驗數位 (Check Digit)**", en: "**Check Digit**" }, { zh: "利用數學公式（加權總和取餘數）算出額外一位核對碼，專捉**打錯單一數字**或**相鄰數字對調 (Transposition Error)**。", en: "An extra calculated digit (weighted sum modulo) appended to codes to detect **single-digit typos** and **transposition errors** (swapping adjacent digits)." }, { zh: "香港身份證括號內字元、ISBN-10/13 書號、EAN-13 條碼、信用卡號。", en: "HKID bracket digit, ISBN-10/13, EAN-13 barcode, credit card number." }]
          ]
        },
        {
          type: "example",
          title: { zh: "經典計數例題：檢驗數位 (Check Digit) 計算", en: "Worked Example: Weighted Check Digit Calculation" },
          problem: {
            zh: "某學生卡號前 4 位為 `3 5 2 8`，加權值依次為 `5, 4, 3, 2`。檢驗數位 = `(加權總和) mod 11`（若餘數為 10 則用 `'A'`）。求檢驗數位，並說明為何使用加權而非直接相加。",
            en: "A student card prefix is `3 5 2 8` with weights `5, 4, 3, 2`. Check digit = `(weighted sum) mod 11` (use `'A'` if remainder is 10). Find the check digit and explain why weights are used instead of a simple sum."
          },
          solution: {
            zh: "1. 加權總和 = `(3×5) + (5×4) + (2×3) + (8×2) = 15 + 20 + 6 + 16 = 57`\n2. `57 mod 11 = 2`（因 `11 × 5 = 55`，餘 `2`）\n3. 完整卡號為 `35282`。\n**為何必須加權？** 若不加權（純相加），將相鄰兩位對調（如 `3528` 錯寫成 `5328` — **對調錯誤 Transposition Error**），總和不變而無法被偵測！不同位置賦予不同權重後，對調會令加權總和改變，從而被成功捉出。",
            en: "1. Weighted sum = `(3×5) + (5×4) + (2×3) + (8×2) = 15 + 20 + 6 + 16 = 57`\n2. `57 mod 11 = 2` (`11 × 5 = 55`, remainder `2`)\n3. Full code: `35282`.\n**Why weights?** Without distinct positional weights, a **transposition error** (e.g., swapping `35` to `53`) yields the exact same sum and goes undetected! Distinct weights ensure swapping changes the weighted sum."
          }
        },
        {
          type: "heading",
          text: { zh: "三大數據校驗方法 (Data Verification)", en: "Three Data Verification Methods" }
        },
        {
          type: "list",
          items: [
            { zh: "**雙重輸入 (Double Data Entry)**：由兩人（或一人輸入兩次）獨立輸入同一數據，系統自動比對兩次輸入是否完全一致（如設定新密碼輸入兩次）。缺點是費時及增加人力成本。", en: "**Double Data Entry**: Entering data twice (by two operators or twice by one) and letting the system compare them (e.g. 'Confirm Password'). Reliable but time-consuming and costly." },
            { zh: "**視覺檢查 / 校對 (Visual Check / Proofreading)**：用戶目視核對螢幕輸入內容與紙本原稿。成本低但易受人為疲勞影響而遺漏。", en: "**Visual Check / Proofreading**: Manually comparing on-screen input against the source document. Low cost but prone to human oversight/fatigue." },
            { zh: "**奇偶校驗 (Parity Check)**：數據傳輸時於位元組附加 1 個奇偶位元 (Parity Bit)。**偶校驗 (Even Parity)** 使總共 `1` 的數目為雙數；**奇校驗 (Odd Parity)** 使總共 `1` 的數目為單數。\n⚠️ **局限性**：只能**偵測**單數個位元出錯（如 1-bit error），**無法偵測雙數個位元同時出錯**（如 2 bits 同時翻轉），且不能自行修正錯誤（須重傳）。", en: "**Parity Check**: Appends 1 parity bit during transmission. **Even parity** ensures total number of `1`s is even; **Odd parity** ensures total `1`s is odd.\n⚠️ **Limitation**: Detects odd numbers of flipped bits (e.g., 1-bit error) ONLY; **cannot detect an even number of bit errors** (e.g., 2 bits flipped) and cannot auto-correct (requires retransmission)." }
          ]
        }
      ]
    },
    {
      id: "p1-a-3",
      code: "A3",
      importance: 3,
      title: { zh: "數據表示法：進制、二進制補碼、字符編碼與多媒體計算", en: "Data Representation: Number Systems, 2's Complement, Encodings & Multimedia" },
      summary: {
        zh: "卷一必考計算核心！精通二/十/十六進制轉換、8-bit 二進制補碼加減及溢出判斷、ASCII/Big5/GB/UTF-8 亂碼成因、點陣/向量圖、音訊與視訊檔案大小計算。",
        en: "Core Paper 1 calculations! Master Binary/Denary/Hex conversions, 8-bit 2's complement arithmetic & overflow, ASCII/Big5/GB/UTF-8, bitmap vs vector, and multimedia file size formulas."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 儲存單位與進制系統", en: "1. Storage Units & Number Systems" }
        },
        {
          type: "table",
          headers: [
            { zh: "單位", en: "Unit" },
            { zh: "十進制 (SI, 硬碟/網速常用)", en: "Decimal SI (Storage/Network)" },
            { zh: "二進制 (IEC, 記憶體/OS 常用)", en: "Binary IEC (RAM/OS)" }
          ],
          rows: [
            [{ zh: "1 Byte (B)", en: "1 Byte (B)" }, { zh: "8 bits (1 Nibble = 4 bits)", en: "8 bits (1 Nibble = 4 bits)" }, { zh: "8 bits", en: "8 bits" }],
            [{ zh: "KB / KiB", en: "KB / KiB" }, { zh: "1 KB = `10³ = 1,000 B`", en: "1 KB = `10³ = 1,000 B`" }, { zh: "1 KiB = `2¹⁰ = 1,024 B`", en: "1 KiB = `2¹⁰ = 1,024 B`" }],
            [{ zh: "MB / MiB", en: "MB / MiB" }, { zh: "1 MB = `10⁶ B`", en: "1 MB = `10⁶ B`" }, { zh: "1 MiB = `2²⁰ = 1,024 KiB`", en: "1 MiB = `2²⁰ = 1,024 KiB`" }],
            [{ zh: "GB / GiB", en: "GB / GiB" }, { zh: "1 GB = `10⁹ B`", en: "1 GB = `10⁹ B`" }, { zh: "1 GiB = `2³⁰ = 1,024 MiB`", en: "1 GiB = `2³⁰ = 1,024 MiB`" }],
            [{ zh: "TB / TiB", en: "TB / TiB" }, { zh: "1 TB = `10¹² B`", en: "1 TB = `10¹² B`" }, { zh: "1 TiB = `2⁴⁰ = 1,024 GiB`", en: "1 TiB = `2⁴⁰ = 1,024 GiB`" }]
          ]
        },
        {
          type: "callout",
          variant: "tip",
          title: { zh: "為何電腦工程師愛用十六進制 (Hexadecimal)？", en: "Why is Hexadecimal Used in Computing?" },
          text: {
            zh: "每 **1 個十六進制位 (`0–9, A–F`) 剛好對應 4 個二進制位 (4 bits)**，因此能將冗長的二進制字串大幅縮短且極易於轉換，減少人工閱讀出錯。常見用途：MAC 位址 (`A4:5E:60:C1:2B:0F`)、RGB 網頁顏色 (`#2563EB`)、記憶體位址與 Unicode 碼點 (`U+4E2D`)。",
            en: "Each **1 hex digit (`0–9, A–F`) maps cleanly to exactly 4 bits**, making long binary strings compact, human-readable, and trivial to convert. Common uses: MAC addresses, HTML RGB colours (`#2563EB`), memory addresses, and Unicode code points."
          }
        },
        {
          type: "heading",
          text: { zh: "2. 整數表示法與二進制補碼 (Two's Complement)" , en: "2. Integer Representations & Two's Complement" }
        },
        {
          type: "table",
          headers: [
            { zh: "表示法 (以 n-bit 計)", en: "Representation (n-bit)" },
            { zh: "數值範圍 (8-bit 例子)", en: "Range (8-bit example)" },
            { zh: "特點與缺點", en: "Characteristics & Drawbacks" }
          ],
          rows: [
            [
              { zh: "無符號整數 (Unsigned)", en: "Unsigned Integer" },
              { zh: "`0` 至 `2ⁿ - 1`\n(8-bit: `0` 至 `255`)", en: "`0` to `2ⁿ - 1`\n(8-bit: `0` to `255`)" },
              { zh: "只能表示非負整數，不可表示負數。", en: "Non-negative integers only; cannot represent negative numbers." }
            ],
            [
              { zh: "符號與數值 (Sign-and-Magnitude)", en: "Sign-and-Magnitude" },
              { zh: "`-(2ⁿ⁻¹ - 1)` 至 `+(2ⁿ⁻¹ - 1)`\n(8-bit: `-127` 至 `+127`)", en: "`-(2ⁿ⁻¹ - 1)` to `+(2ⁿ⁻¹ - 1)`\n(8-bit: `-127` to `+127`)" },
              { zh: "最高有效位 (MSB) `0`=+、`1`=-。缺點：**有兩個零** (`00000000`=+0, `10000000`=-0)，加減電路複雜。", en: "MSB `0`=+, `1`=-. Drawbacks: **two representations of zero** (`+0` and `-0`), complex arithmetic circuitry." }
            ],
            [
              { zh: "**二進制補碼 (Two's Complement)**", en: "**Two's Complement**" },
              { zh: "`-2ⁿ⁻¹` 至 `+(2ⁿ⁻¹ - 1)`\n(8-bit: **`-128` 至 `+127`**)", en: "`-2ⁿ⁻¹` to `+(2ⁿ⁻¹ - 1)`\n(8-bit: **`-128` to `+127`**)" },
              { zh: "**只有一個零 (`00000000`)**；MSB 權重為 `-2ⁿ⁻¹`（8-bit 為 `-128`）；**減法可直接化為加法 `A - B = A + (-B)`**，大幅簡化 CPU ALU 電路！", en: "**Unique zero (`00000000`)**; MSB has weight `-2ⁿ⁻¹` (`-128` for 8-bit); **subtraction becomes addition `A - B = A + (-B)`**, simplifying ALU hardware!" }
            ]
          ]
        },
        {
          type: "example",
          title: { zh: "8-bit 二進制補碼轉換與溢出 (Overflow) 判斷", en: "8-bit Two's Complement Conversion & Overflow Detection" },
          problem: {
            zh: "(a) 以 8-bit 二進制補碼表示 `-37`。\n(b) 計算 `(+90) + (+60)` 的 8-bit 補碼加法，並解釋是否發生溢出錯誤 (Overflow Error)。",
            en: "(a) Represent `-37` in 8-bit two's complement.\n(b) Compute `(+90) + (+60)` in 8-bit 2's complement and determine if overflow occurs."
          },
          solution: {
            zh: "**(a) 求 `-37`：**\n1. 先寫出 `+37` 的 8-bit 二進制：`0010 0101` (`32 + 4 + 1`)\n2. 全部位元反轉 (1's complement)：`1101 1010`\n3. 加 `1`：`1101 1011`。\n*(驗算：`-128 + 64 + 16 + 8 + 2 + 1 = -37` ✓)*\n\n**(b) `(+90) + (+60)`：**\n`+90 = 0101 1010`\n`+60 = 0011 1100`\n相加 = `1001 0110`（MSB 變成 `1`，解讀為負數 `-106`！）\n**發生溢出錯誤 (Overflow Error)！** 原因：兩個**正數**相加得到**負數**結果，因為正確答案 `+150` 超出了 8-bit 二進制補碼的上限 `+127`。",
            en: "**(a) Find `-37`:**\n1. `+37` in 8-bit binary: `0010 0101` (`32 + 4 + 1`)\n2. Invert all bits (1's complement): `1101 1010`\n3. Add `1`: `1101 1011`.\n*(Check: `-128 + 64 + 16 + 8 + 2 + 1 = -37` ✓)*\n\n**(b) `(+90) + (+60)`:**\n`+90 = 0101 1010`, `+60 = 0011 1100`\nSum = `1001 0110` (MSB became `1`, representing `-106`!)\n**Overflow Error occurred!** Adding two **positive** numbers yielded a **negative** result because `+150` exceeds the 8-bit 2's complement maximum of `+127`."
          }
        },
        {
          type: "callout",
          variant: "trap",
          title: { zh: "⚠️ DSE 溢出判斷黃金陷阱", en: "⚠️ Classic DSE Overflow Trap" },
          text: {
            zh: "**正數 + 負數 永遠不會溢出！** 且最高位有進位 (Carry out) **不代表**溢出（例如 `(-1) + (+1) = 11111111 + 00000001 = (1)00000000`，捨棄進位後得 `0`，完全正確）。\n**只有當「正 + 正 = 負」或「負 + 負 = 正」時才發生溢出！**",
            en: "**Positive + Negative can NEVER overflow!** Also, a carry-out from the MSB does **NOT** necessarily mean overflow (e.g., `(-1) + (+1)` produces carry-out `1` and result `00000000`, which is valid!).\n**Overflow ONLY occurs when `Pos + Pos = Neg` or `Neg + Neg = Pos`!**"
          }
        },
        {
          type: "heading",
          text: { zh: "3. 字符編碼 (Character Encoding) 與條碼/QR Code", en: "3. Character Encodings & Barcodes/QR Codes" }
        },
        {
          type: "table",
          headers: [
            { zh: "編碼標準", en: "Encoding Standard" },
            { zh: "每字元大小", en: "Size per Char" },
            { zh: "涵蓋範圍與特點", en: "Coverage & Key Notes" }
          ],
          rows: [
            [{ zh: "**ASCII**", en: "**ASCII**" }, { zh: "7 bits（擴展 ASCII 為 8 bits / 1 Byte）", en: "7 bits (Extended ASCII: 8 bits / 1 Byte)" }, { zh: "128 個字元（英文字母、數字 `0-9`、標點及控制字元）。記憶基準：`'0'=48`, `'A'=65`, `'a'=97`（大小寫相差 32）。", en: "128 chars (English, digits `0-9`, punctuation, control chars). Anchor values: `'0'=48`, `'A'=65`, `'a'=97` (case diff = 32)." }],
            [{ zh: "**Big5 (大五碼)**", en: "**Big5**" }, { zh: "2 Bytes (16 bits)", en: "2 Bytes (16 bits)" }, { zh: "主要用於香港及台灣的**繁體中文**。不含簡體字或日韓文，欠缺部分香港常用字（需額外 HKSCS 增補字集）。", en: "Mainly **Traditional Chinese** (HK/Taiwan). Cannot represent Simplified Chinese or other scripts; lacks some HK-specific chars without HKSCS." }],
            [{ zh: "**GB2312 / GBK / GB18030**", en: "**GB2312 / GBK / GB18030**" }, { zh: "2 Bytes（GB18030 為 1–4 Bytes）", en: "2 Bytes (GB18030: 1–4 Bytes)" }, { zh: "中國內地**簡體中文**標準。若用 Big5 解碼 GB 檔案（編碼不匹配），就會顯示**亂碼 (Mojibake)**！", en: "Mainland China **Simplified Chinese** standards. Decoding a GB file with Big5 (encoding mismatch) produces **garbled text (Mojibake)**!" }],
            [{ zh: "**Unicode (UTF-8 / UTF-16)**", en: "**Unicode (UTF-8 / UTF-16)**" }, { zh: "UTF-8: 變長 1–4 Bytes（英文 1B、中文通常 3B）\nUTF-16: 2 或 4 Bytes", en: "UTF-8: variable 1–4 Bytes (ASCII 1B, Chinese typically 3B)\nUTF-16: 2 or 4 Bytes" }, { zh: "全球統一字符集，支援超過百萬字元（繁簡中文、日韓、阿拉伯文、Emoji），**同一份文件可同時混排多國語言而不出現亂碼**；UTF-8 向下相容 ASCII。", en: "Universal character set supporting >1M chars (all world scripts + emojis) in **a single document without garbled text**; UTF-8 is backward-compatible with ASCII." }]
          ]
        },
        {
          type: "heading",
          text: { zh: "4. 多媒體數據表示、壓縮與檔案大小計算", en: "4. Multimedia Representation, Compression & File Size" }
        },
        {
          type: "compare",
          title: { zh: "點陣圖 (Bitmap/Raster) vs 向量圖 (Vector)", en: "Bitmap (Raster) vs Vector Graphics" },
          leftTitle: { zh: "點陣圖 (Bitmap: BMP, JPEG, PNG, GIF)", en: "Bitmap (BMP, JPEG, PNG, GIF)" },
          rightTitle: { zh: "向量圖 (Vector: SVG, AI, EPS)", en: "Vector (SVG, AI, EPS)" },
          rows: [
            { aspect: { zh: "組成方式", en: "Composition" }, left: { zh: "由網格狀像素 (Pixels) 組成，每格記錄顏色值。", en: "Grid of pixels, each storing colour values." }, right: { zh: "由數學公式描述的幾何物件（線條、貝茲曲線、座標、填色）組成。", en: "Mathematical equations describing shapes, curves, coordinates, and fills." } },
            { aspect: { zh: "放大效果", en: "Scalability" }, left: { zh: "放大會出現鋸齒/模糊 (**起格 Pixelation**)。", en: "Becomes jagged/blurry (**pixelated**) when enlarged." }, right: { zh: "無限放大仍保持銳利清晰，檔案大小不隨尺寸增加。", en: "Infinitely scalable with crisp edges; file size unaffected by display size." } },
            { aspect: { zh: "適用場景", en: "Best For" }, left: { zh: "自然相片、色彩漸變複雜的影像。", en: "Photographs and complex scenes with rich colour gradients." }, right: { zh: "公司商標 (Logo)、字體、技術工程圖、地圖圖示。", en: "Logos, typography, technical CAD diagrams, UI icons." } }
          ]
        },
        {
          type: "formula",
          title: { zh: "多媒體未壓縮檔案大小核心公式", en: "Uncompressed Multimedia File Size Formulas" },
          formula: "Bitmap (Bytes) = Width × Height × Colour Depth (bits) ÷ 8\nAudio  (Bytes) = Sample Rate (Hz) × Bit Depth (bits) × Channels × Duration (s) ÷ 8\nVideo  (Bytes) = Width × Height × Colour Depth × FPS × Duration (s) ÷ 8  [+ Audio]",
          explain: {
            zh: "**提示**：若題目問「最多可顯示多少種顏色？」答案為 `2^(Colour Depth)`（例：8-bit = 256 色；24-bit True Colour = 16,777,216 色）。音訊中，**取樣率 (Sampling Rate)** 越高、**位元深度 (Bit Depth)** 越高，音質越保真但檔案越大。**MIDI** 只記錄樂器指令與音符（檔案極小），不記錄人聲波形。",
            en: "**Tip**: Max colours = `2^(Colour Depth)` (e.g. 8-bit = 256 colours; 24-bit True Colour = 16.7M). For audio, higher **Sampling Rate** and **Bit Depth** yield higher fidelity but larger files. **MIDI** stores musical instructions/notes (tiny files) rather than recorded sound waves (cannot store vocals)."
          }
        },
        {
          type: "compare",
          title: { zh: "數據壓縮：無損壓縮 vs 有損壓縮", en: "Data Compression: Lossless vs Lossy" },
          leftTitle: { zh: "無損壓縮 (Lossless)", en: "Lossless Compression" },
          rightTitle: { zh: "有損壓縮 (Lossy)", en: "Lossy Compression" },
          rows: [
            { aspect: { zh: "原理與還原", en: "Mechanism" }, left: { zh: "消除數據冗餘（如 RLE 行程長度編碼、Huffman 編碼），解壓後**100% 完美還原原檔**。", en: "Removes statistical redundancy (e.g. RLE, Huffman); decompresses to **exact bit-for-bit original**." }, right: { zh: "永久丟棄人眼或人耳較不敏感的細節，**無法還原**原始數據。", en: "Permanently discards details less perceptible to human eyes/ears; **cannot reconstruct exact original**." } },
            { aspect: { zh: "壓縮率與格式", en: "Ratio & Formats" }, left: { zh: "壓縮率較低。格式：**ZIP, PNG, GIF, FLAC**。必須用於**程式碼、文字檔、醫療影像、資料庫備份**。", en: "Lower compression ratio. Formats: **ZIP, PNG, GIF, FLAC**. Mandatory for **code, text, medical scans, backups**." }, right: { zh: "壓縮率極高（檔案大減）。格式：**JPEG, MP3, AAC, MP4 (H.264/H.265)**。適合網頁圖片、音樂及影片串流。", en: "Much higher compression ratio. Formats: **JPEG, MP3, AAC, MP4 (H.264/H.265)**. Ideal for web photos & streaming." } }
          ]
        }
      ]
    },
    {
      id: "p1-a-4",
      code: "A4",
      importance: 3,
      title: { zh: "數據處理與分析：電子試算表與基礎數據庫", en: "Data Manipulation & Analysis: Spreadsheets & Basic Databases" },
      summary: {
        zh: "卷一乙部必考長題目！掌握相對/絕對儲存格參照、VLOOKUP、IF/AND/OR、COUNTIF/SUMIF、文字函數、樞紐分析表，以及基礎單表 SQL 查詢。",
        en: "Mandatory Paper 1 Section B staple! Master cell referencing, VLOOKUP, IF/AND/OR, COUNTIF/SUMIF, text functions, Pivot Tables, and basic single-table SQL."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 儲存格參照 (Cell Referencing) — 拉動複製必考", en: "1. Cell Referencing — Auto-Fill Mastery" }
        },
        {
          type: "table",
          headers: [
            { zh: "類型", en: "Reference Type" },
            { zh: "寫法", en: "Notation" },
            { zh: "從 `C2` 複製至 `D5`（右移 1 欄、下移 3 列）後的變化", en: "Copied from `C2` to `D5` (+1 col, +3 rows)" }
          ],
          rows: [
            [{ zh: "相對參照 (Relative)", en: "Relative" }, { zh: "`A1`", en: "`A1`" }, { zh: "變為 `B4`（欄與列同時改變）", en: "Becomes `B4` (both col & row shift)" }],
            [{ zh: "絕對參照 (Absolute)", en: "Absolute" }, { zh: "`$A$1`", en: "`$A$1`" }, { zh: "維持 `$A$1`（完全鎖定不變）", en: "Stays `$A$1` (completely locked)" }],
            [{ zh: "混合參照 (Mixed - 鎖欄)", en: "Mixed (Lock Col)" }, { zh: "`$A1`", en: "`$A1`" }, { zh: "變為 `$A4`（欄 A 不變，列號 +3）", en: "Becomes `$A4` (col A fixed, row +3)" }],
            [{ zh: "混合參照 (Mixed - 鎖列)", en: "Mixed (Lock Row)" }, { zh: "`A$1`", en: "`A$1`" }, { zh: "變為 `B$1`（欄 +1，列 1 不變）", en: "Becomes `B$1` (col +1, row 1 fixed)" }]
          ]
        },
        {
          type: "code",
          lang: "spreadsheet",
          title: { zh: "DSE 高頻試算表公式實戰範例", en: "High-Yield HKDSE Spreadsheet Formula Examples" },
          code: "// 1. 根據分數 B2 查表 ($G$2:$H$6 須由小至大排序) 轉為等級 (近似匹配 TRUE)\n=VLOOKUP(B2, $G$2:$H$6, 2, TRUE)\n\n// 2. 根據產品編號 A2 精確查找單價 (無須排序，用 FALSE)\n=VLOOKUP(A2, $J$2:$L$50, 3, FALSE)\n\n// 3. 複合條件判斷：中英數 (B2,C2,D2) 全達 50 分以上才 Pass\n=IF(AND(B2>=50, C2>=50, D2>=50), \"Pass\", \"Fail\")\n\n// 4. 統計 6A 班總分及合格人數\n=SUMIF($A$2:$A$40, \"6A\", $E$2:$E$40)\n=COUNTIF($E$2:$E$40, \">=50\")\n\n// 5. 從電郵地址 A2 (e.g. chan@school.hk) 擷取用戶名\n=LEFT(A2, FIND(\"@\", A2) - 1)\n\n// 6. 計算班內名次 (0 = 分數最高為第 1 名，必須鎖定範圍!)\n=RANK(E2, $E$2:$E$40, 0)",
          note: {
            zh: "留意：若使用 `VLOOKUP(..., TRUE)`，查找表第一欄**必須按升序排列**，它會尋找「小於或等於查找值的最大數值」。",
            en: "Note: With `VLOOKUP(..., TRUE)`, the lookup table's 1st column **must be sorted ascending**; it matches the largest value less than or equal to lookup_value."
          }
        },
        {
          type: "heading",
          text: { zh: "2. 樞紐分析表 (Pivot Table) 與圖表選擇", en: "2. Pivot Tables & Choosing the Right Chart" }
        },
        {
          type: "list",
          items: [
            { zh: "**樞紐分析表 (Pivot Table)**：無需手寫複雜 `SUMIF`/`COUNTIF` 公式，即可動態拖放列 (Rows)、欄 (Columns)、數值 (Values: Sum/Average/Count) 及篩選 (Filters)，快速對大量交易記錄進行**多維度交叉摘要與分析**。", en: "**Pivot Table**: Dynamically summarises large datasets via drag-and-drop Rows, Columns, Values (Sum/Avg/Count), and Filters without manually writing `SUMIF`/`COUNTIF` formulas." },
            { zh: "**目標搜尋 (Goal Seek / What-if Analysis)**：反向推算達致目標結果所需的單一輸入值（例如：期末考需要多少分才能令總平均達 80 分）。", en: "**Goal Seek (What-if Analysis)**: Back-calculates the required input value to achieve a desired output (e.g. score needed on final exam for an 80% average)." },
            { zh: "**圖表類型選擇**：**棒形/柱形圖 (Bar/Column)** 比較不同類別數值；**折線圖 (Line)** 展示隨時間變化的趨勢；**圓形圖 (Pie)** 顯示各部分佔總體的百分比；**散點圖 (Scatter)** 顯示兩個數值變量之間的相關性。", en: "**Chart Selection**: **Bar/Column** compares categories; **Line** shows trends over time; **Pie** shows proportions of a whole (100%); **Scatter** shows correlation between two numeric variables." }
          ]
        },
        {
          type: "heading",
          text: { zh: "3. 試算表 vs 數據庫 & 必修單表 SQL 基礎", en: "3. Spreadsheets vs Databases & Core Single-Table SQL" }
        },
        {
          type: "compare",
          title: { zh: "何時用試算表？何時用數據庫？", en: "When to Use a Spreadsheet vs a Database?" },
          leftTitle: { zh: "電子試算表 (Spreadsheet)", en: "Electronic Spreadsheet" },
          rightTitle: { zh: "關聯式數據庫 (Relational Database)", en: "Relational Database (RDBMS)" },
          rows: [
            { aspect: { zh: "強項", en: "Strengths" }, left: { zh: "快速數學計算、假設分析 (What-if)、圖表製作、適合小型個人數據。", en: "Fast calculations, what-if modelling, charting, small single-user datasets." }, right: { zh: "管理海量結構化數據、**多用戶同時存取 (Concurrency)**、消除數據冗餘、強制參照完整性與細緻權限控制。", en: "Massive structured records, **multi-user concurrency**, eliminates redundancy, enforces referential integrity & fine-grained security." } }
          ]
        },
        {
          type: "code",
          lang: "sql",
          title: { zh: "卷一必修單表 SQL 基礎語法（進階多表見選修 A）", en: "Paper 1 Core Single-Table SQL Basics (Full SQL in Elective A)" },
          code: "-- 查詢 6A 班得分 >= 80 的學生姓名與分數，按分數由高至低排列\nSELECT Name, Score\nFROM STUDENT\nWHERE Class = '6A' AND Score >= 80\nORDER BY Score DESC;\n\n-- 統計全校學生人數與平均分\nSELECT COUNT(*), AVG(Score), MAX(Score), MIN(Score)\nFROM STUDENT;",
          note: {
            zh: "主鍵 (**Primary Key**) 唯一識別每筆記錄（不可重複、不可為空）；外鍵 (**Foreign Key**) 參照另一資料表的主鍵以建立關聯。",
            en: "A **Primary Key** uniquely identifies each record (unique & NOT NULL); a **Foreign Key** references a Primary Key in another table to link tables."
          }
        }
      ]
    }
  ]
});
