window.ICT_QUIZZES = [
  // ================= PAPER 1: MODULE A =================
  {
    id: "q-p1a-1",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 A 資訊處理", en: "Paper 1 · Mod A" },
    question: {
      zh: "一個 8-bit 二進制補碼 (Two's Complement) 系統中，執行 `0110 0100 + 0011 0010` 後，結果為 `1001 0110`。下列哪項敘述最準確？",
      en: "In an 8-bit two's complement system, adding `0110 0100 + 0011 0010` yields `1001 0110`. Which statement is correct?"
    },
    options: [
      { zh: "正確答案為 `+150`，沒有發生溢出錯誤", en: "The exact result is `+150` with no overflow" },
      { zh: "發生溢出錯誤 (Overflow Error)，因兩正數相加超出 8-bit 補碼上限 `+127`", en: "Overflow Error occurs because adding two positives exceeded the `+127` limit" },
      { zh: "結果代表正確的負數 `-106`", en: "The result accurately represents `-106`" },
      { zh: "最高位沒有進位 (Carry-out = 0)，故不會發生溢出", en: "Carry-out is 0 so overflow cannot happen" }
    ],
    answer: 1,
    explanation: {
      zh: "`0110 0100` = `+100`，`0011 0010` = `+50`，數學和為 `+150`。但 8-bit 二進制補碼的範圍是 `-128` 至 `+127`，結果最高位 (MSB) 變成 `1`（變負數），兩正數相加得負數必然發生**溢出錯誤 (Overflow)**！",
      en: "`0110 0100` = `+100` and `0011 0010` = `+50`. The true sum `+150` exceeds the 8-bit 2's complement range (`-128` to `+127`). Adding two positives and getting a negative MSB (`1`) proves **Overflow Error**!"
    }
  },
  {
    id: "q-p1a-2",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 A 資訊處理", en: "Paper 1 · Mod A" },
    question: {
      zh: "學生原訂生日為 `2009-05-12`，但職員打字時誤輸入 `2009-05-21`。下列哪項方法最有可能發現此類錯誤？",
      en: "A student's birth date is `2009-05-12`, but a clerk accidentally types `2009-05-21`. Which check is most likely to catch this error?"
    },
    options: [
      { zh: "範圍檢查 (Range Check)", en: "Range Check" },
      { zh: "格式檢查 (Format Check)", en: "Format Check" },
      { zh: "雙重輸入 (Double Data Entry — 數據校驗)", en: "Double Data Entry (Data Verification)" },
      { zh: "存在檢查 (Presence Check)", en: "Presence Check" }
    ],
    answer: 2,
    explanation: {
      zh: "`2009-05-21` 在格式、類型與範圍上都完全合法，所有**有效性檢驗 (Validation)** 都無法攔截它；必須依靠**數據校驗 (Verification)** 如雙重輸入或視覺核對原稿才能抓出轉錄錯誤。",
      en: "`2009-05-21` is a perfectly valid date, so all **validation** checks pass. Only **verification** (like double data entry or proofreading against the original form) catches transcription errors."
    }
  },
  {
    id: "q-p1a-3",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 A 資訊處理", en: "Paper 1 · Mod A" },
    question: {
      zh: "一段 20 秒的未壓縮**立體聲 (Stereo)** 音訊，取樣率為 `44,000 Hz`，位元深度為 `16 bits`。其未壓縮檔案大小約為多少 Bytes？",
      en: "A 20-second uncompressed **stereo** audio clip has a sampling rate of `44,000 Hz` and bit depth of `16 bits`. What is its file size in Bytes?"
    },
    options: [
      { zh: "1,760,000 Bytes", en: "1,760,000 Bytes" },
      { zh: "3,520,000 Bytes", en: "3,520,000 Bytes" },
      { zh: "28,160,000 Bytes", en: "28,160,000 Bytes" },
      { zh: "880,000 Bytes", en: "880,000 Bytes" }
    ],
    answer: 1,
    explanation: {
      zh: "公式：`取樣率 × 位元深度 × 聲道數 × 秒數 ÷ 8` = `44,000 × 16 × 2 × 20 ÷ 8` = `3,520,000 Bytes`。（切記立體聲 Stereo 須乘以 `2`，最後須 `÷ 8` 由 bits 轉 Bytes！）",
      en: "Formula: `44,000 × 16 × 2 (stereo) × 20 ÷ 8 = 3,520,000 Bytes`. Remember stereo = 2 channels and divide by 8 to convert bits to Bytes!"
    }
  },
  {
    id: "q-p1a-4",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 A 資訊處理", en: "Paper 1 · Mod A" },
    question: {
      zh: "在電子試算表中，若於 `C2` 輸入 `=VLOOKUP(B2, $E$2:$F$6, 2, TRUE)` 以將分數轉換為等級，下列哪項要求必須滿足才能保證結果正確？",
      en: "In a spreadsheet, cell `C2` uses `=VLOOKUP(B2, $E$2:$F$6, 2, TRUE)` to convert scores to grades. What requirement MUST be met?"
    },
    options: [
      { zh: "範圍 `E2:E6` 必須由大至小降序排列", en: "`E2:E6` must be sorted in descending order" },
      { zh: "範圍 `E2:E6` 必須由小至大升序排列", en: "`E2:E6` must be sorted in ascending order" },
      { zh: "分數 `B2` 必須精確等於 `E2:E6` 中某個值", en: "`B2` must exactly match a value in `E2:E6`" },
      { zh: "不能在 `E2:F6` 上加上 `$` 符號", en: "`$` symbols must not be used on `E2:F6`" }
    ],
    answer: 1,
    explanation: {
      zh: "`VLOOKUP` 第四參數為 `TRUE`（近似匹配）時，查找表最左欄 (`E2:E6`) **必須按升序由小至大排列**，並以 `$E$2:$F$6` 鎖定範圍方便向下拉動複製公式。",
      en: "When the 4th argument of `VLOOKUP` is `TRUE` (approximate match), the leftmost lookup column (`E2:E6`) **must be sorted ascending**."
    }
  },
  {
    id: "q-p1a-5",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 A 資訊處理", en: "Paper 1 · Mod A" },
    question: {
      zh: "在偶校驗 (Even Parity) 傳輸中，接收端收到一個 8-bit 數據 `10110010`（含 1 個校驗位）。若傳輸過程中發生了 **2 個位元同時翻轉**，奇偶校驗系統會如何反應？",
      en: "Under Even Parity, a receiver receives `10110010`. If **2 bits were flipped** during transmission, what will the parity check do?"
    },
    options: [
      { zh: "自動定位並修正該 2 個錯誤位元", en: "Automatically locate and correct both flipped bits" },
      { zh: "偵測到錯誤並要求重新傳送", en: "Detect the error and request retransmission" },
      { zh: "無法偵測到錯誤，誤以為數據正確", en: "Fail to detect the error and falsely accept the corrupted byte" },
      { zh: "立即將偶校驗切換為奇校驗", en: "Automatically switch to Odd Parity" }
    ],
    answer: 2,
    explanation: {
      zh: "奇偶校驗的重大局限：翻轉 2 個（或任意偶數個）位元不會改變 `1` 的奇偶性，故系統**無法偵測雙位元錯誤**！",
      en: "Flipping an even number of bits preserves the parity (odd/even count of `1`s), so parity check **cannot detect 2-bit errors**!"
    }
  },

  // ================= PAPER 1: MODULE B =================
  {
    id: "q-p1b-1",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 B 電腦系統", en: "Paper 1 · Mod B" },
    question: {
      zh: "在 CPU 機器週期的提取 (Fetch) 階段中，哪一個暫存器儲存「下一條將被提取指令的記憶體位址」？",
      en: "During the Fetch stage of the machine cycle, which register stores the memory address of the NEXT instruction to be fetched?"
    },
    options: [
      { zh: "指令暫存器 (IR)", en: "Instruction Register (IR)" },
      { zh: "累加器 (ACC)", en: "Accumulator (ACC)" },
      { zh: "程式計數器 (PC)", en: "Program Counter (PC)" },
      { zh: "記憶體數據暫存器 (MDR)", en: "Memory Data Register (MDR)" }
    ],
    answer: 2,
    explanation: {
      zh: "**程式計數器 (PC)** 永遠指向下一條即將提取的指令位址；`IR` 存當前正在解碼/執行的指令；`MDR` 暫存經數據匯流排讀寫的數據。",
      en: "The **Program Counter (PC)** holds the address of the next instruction. `IR` holds the current instruction; `MDR` buffers transferred data."
    }
  },
  {
    id: "q-p1b-2",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 B 電腦系統", en: "Paper 1 · Mod B" },
    question: {
      zh: "當電腦同時開啟過多大型程式，硬碟指示燈狂閃且系統變得極度卡頓（過度置換 Thrashing）。下列哪項硬件升級最能直接解決問題？",
      en: "When too many large apps run simultaneously, the disk thrashes constantly and the PC slows to a crawl. Which upgrade most directly solves thrashing?"
    },
    options: [
      { zh: "增加實體主記憶體 (RAM) 容量", en: "Install more physical RAM" },
      { zh: "對 SSD 執行磁碟重組 (Defragmentation)", en: "Run disk defragmentation on the SSD" },
      { zh: "增加 ROM 的容量", en: "Increase ROM capacity" },
      { zh: "更換更高解像度的顯示器", en: "Upgrade to a higher-resolution monitor" }
    ],
    answer: 0,
    explanation: {
      zh: "過度置換 (Thrashing) 是因為實體 RAM 不足，系統被迫不斷在 RAM 與慢速虛擬記憶體（輔助儲存）之間頻繁交換分頁。加裝實體 RAM 可即時大幅減少分頁置換！（另注意：絕不應重組 SSD！）",
      en: "Thrashing happens when physical RAM is exhausted, forcing constant paging to slow virtual memory on disk. Adding physical RAM directly resolves it! (And never defragment an SSD!)"
    }
  },
  {
    id: "q-p1b-3",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 B 電腦系統", en: "Paper 1 · Mod B" },
    question: {
      zh: "相較於使用編譯器 (Compiler)，使用直譯器 (Interpreter，如 Python) 開發程式的主要優勢為何？",
      en: "Compared with a Compiler, what is a key advantage of using an Interpreter (such as Python) during program development?"
    },
    options: [
      { zh: "程式發佈後的執行速度比編譯後的機器碼更快", en: "Runs faster after distribution than compiled machine code" },
      { zh: "能夠隱藏原始碼以保護商業機密", en: "Hides source code to protect commercial IP" },
      { zh: "逐行翻譯及執行，遇到第一個錯誤即停下，便於快速測試與除錯", en: "Translates and executes line-by-line, stopping at the first error for easy debugging" },
      { zh: "運行時目標電腦完全無須安裝翻譯軟件", en: "Target computer needs no translator installed to run the code" }
    ],
    answer: 2,
    explanation: {
      zh: "直譯器逐行執行、毋須等待整個程式編譯即可即時測試與定位錯誤，極適合開發及教學；A、B、D 均是編譯器的優勢。",
      en: "Interpreters execute line-by-line without a separate build step, making iterative testing and debugging much easier. Options A, B, and D describe compilers."
    }
  },

  // ================= PAPER 1: MODULE C =================
  {
    id: "q-p1c-1",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 C 互聯網與保安", en: "Paper 1 · Mod C" },
    question: {
      zh: "在數碼簽署 (Digital Signature) 流程中，發送方 Alice 應使用哪一把密鑰加密「訊息摘要 (Message Digest)」，以讓接收方 Bob 驗證訊息的來源與完整性？",
      en: "In a Digital Signature scheme, which key does sender Alice use to encrypt the Message Digest so Bob can verify authenticity and integrity?"
    },
    options: [
      { zh: "Bob 的公鑰 (Bob's Public Key)", en: "Bob's Public Key" },
      { zh: "Bob 的私鑰 (Bob's Private Key)", en: "Bob's Private Key" },
      { zh: "Alice 的公鑰 (Alice's Public Key)", en: "Alice's Public Key" },
      { zh: "Alice 的私鑰 (Alice's Private Key)", en: "Alice's Private Key" }
    ],
    answer: 3,
    explanation: {
      zh: "**簽署用「自己（發送方）的私鑰」加密摘要**；接收方 Bob 用「Alice 的公鑰」解密核對。切勿與「保密通訊」（用接收方公鑰加密原文）混淆！",
      en: "**Signing encrypts the hash with the SENDER'S Private Key** (verified with Sender's Public Key). Do not confuse with confidentiality encryption (which uses Receiver's Public Key)!"
    }
  },
  {
    id: "q-p1c-2",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 C 互聯網與保安", en: "Paper 1 · Mod C" },
    question: {
      zh: "一個 60 MB (以 `1 MB = 10⁶ Bytes` 計) 的檔案，透過頻寬為 `24 Mbps` (`24 × 10⁶ bps`) 的連線下載，理論上最少需時多少秒？",
      en: "A 60 MB file (`1 MB = 10⁶ Bytes`) is downloaded over a `24 Mbps` (`24 × 10⁶ bps`) connection. What is the theoretical minimum transfer time?"
    },
    options: [
      { zh: "2.5 秒", en: "2.5 seconds" },
      { zh: "20 秒", en: "20 seconds" },
      { zh: "16 秒", en: "16 seconds" },
      { zh: "480 秒", en: "480 seconds" }
    ],
    answer: 1,
    explanation: {
      zh: "經典單位陷阱！`60 MB = 60 × 8 = 480 Megabits (Mb)`；時間 = `480 Mb ÷ 24 Mbps = 20 秒`！（若忘記 `× 8` 就會中伏選了 2.5 秒！）",
      en: "Classic unit trap! `60 MB = 60 × 8 = 480 Megabits`. Transfer time = `480 Mb ÷ 24 Mbps = 20 seconds`!"
    }
  },
  {
    id: "q-p1c-3",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 C 互聯網與保安", en: "Paper 1 · Mod C" },
    question: {
      zh: "陳同學想同時在手機、平板和手提電腦收發電郵，並希望在一台裝置標記「已讀」或移入資料夾時，其餘裝置立即同步更新。他應選用哪個收信協定？",
      en: "Chan wants to check email across phone, tablet, and laptop with read status and folders synced across all devices. Which incoming protocol should be used?"
    },
    options: [
      { zh: "SMTP", en: "SMTP" },
      { zh: "POP3", en: "POP3" },
      { zh: "IMAP", en: "IMAP" },
      { zh: "DHCP", en: "DHCP" }
    ],
    answer: 2,
    explanation: {
      zh: "**IMAP** 將郵件保留於伺服器並即時雙向同步多裝置的資料夾與已讀狀態；POP3 預設下載並移除伺服器副本；SMTP 用於發信。",
      en: "**IMAP** keeps mail on the server and syncs folders and read/unread flags across multiple devices. POP3 downloads locally; SMTP is for sending."
    }
  },
  {
    id: "q-p1c-4",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 C 互聯網與保安", en: "Paper 1 · Mod C" },
    question: {
      zh: "若學校將局域網內的集線器 (Hub) 全數更換為交換器 (Switch)，最主要的好處是甚麼？",
      en: "What is the primary benefit of replacing network Hubs with Switches in a school LAN?"
    },
    options: [
      { zh: "Switch 可依據 IP 位址連接不同的廣域網絡", en: "Switches connect different WANs using IP addresses" },
      { zh: "Switch 根據 MAC 位址表將數據幀精準傳送至目標埠，減少碰撞並提升頻寬與安全", en: "Switches forward frames selectively via MAC tables to the target port, reducing collisions and improving bandwidth & security" },
      { zh: "Switch 可自動為所有電腦分配公用 IP 位址", en: "Switches automatically assign Public IP addresses to all PCs" },
      { zh: "Switch 能自動加密所有 HTTP 流量為 HTTPS", en: "Switches encrypt all HTTP traffic into HTTPS" }
    ],
    answer: 1,
    explanation: {
      zh: "Hub 盲目向所有埠廣播造成碰撞與竊聽風險；Switch 維護 MAC Table 單播轉發至目標埠。（A 是 Router；C 是 DHCP；D 是 TLS/HTTPS。）",
      en: "Hubs broadcast to all ports (collisions & sniffing risk). Switches read MAC tables to unicast directly to the destination port."
    }
  },

  // ================= PAPER 1: MODULE D (PYTHON 3) =================
  {
    id: "q-p1d-1",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 D Python 編程", en: "Paper 1 · Mod D (Python)" },
    question: {
      zh: "執行以下 Python 程式後，螢幕會輸出甚麼？",
      en: "What is the output of the following Python code?"
    },
    code: "s = 0\nfor i in range(1, 10, 3):\n    if i % 2 == 1:\n        s += i\nprint(s)",
    options: [
      { zh: "8", en: "8" },
      { zh: "12", en: "12" },
      { zh: "15", en: "15" },
      { zh: "22", en: "22" }
    ],
    answer: 0,
    explanation: {
      zh: "`range(1, 10, 3)` 依序產生 `1, 4, 7`（下一個 `10` 不包含！）。檢查奇數 `i % 2 == 1`：`1` (True → `s=1`)，`4` (False)，`7` (True → `s=1+7=8`)。輸出 `8`！",
      en: "`range(1, 10, 3)` produces `1, 4, 7` (`10` is excluded!). Odd values (`i % 2 == 1`) are `1` and `7`, giving `1 + 7 = 8`."
    }
  },
  {
    id: "q-p1d-2",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 D Python 編程", en: "Paper 1 · Mod D (Python)" },
    question: {
      zh: "以下 Python 程式旨在計算用戶輸入兩個數字之和，但輸入 `15` 和 `25` 時卻輸出了 `1525`！這屬於哪類錯誤，成因為何？",
      en: "The Python code below aims to add two numbers, but entering `15` and `25` outputs `1525`! What error type and cause is this?"
    },
    code: "a = input(\"Num 1: \")\nb = input(\"Num 2: \")\nprint(a + b)",
    options: [
      { zh: "語法錯誤 (Syntax Error)：缺少分號", en: "Syntax Error: missing semicolons" },
      { zh: "執行時期錯誤 (Runtime Error)：`+` 不能用於字串", en: "Runtime Error: `+` cannot operate on strings" },
      { zh: "邏輯錯誤 (Logic Error)：`input()` 回傳字串 `str`，`+` 執行了字串串接而非數字相加", en: "Logic Error: `input()` returns `str`, so `+` performs string concatenation instead of numeric addition" },
      { zh: "溢出錯誤 (Overflow Error)：數值超過整數上限", en: "Overflow Error: integer exceeded limit" }
    ],
    answer: 2,
    explanation: {
      zh: "程式語法合法且無崩潰，但結果不符預期，屬**邏輯錯誤**。因為 `input()` 永遠回傳 `str`，應改用 `int(input(...))` 或 `float(input(...))`。",
      en: "The program runs without crashing yet produces the wrong answer → **Logic Error**. `input()` always returns `str`; cast with `int()` or `float()`."
    }
  },
  {
    id: "q-p1d-3",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 D Python 編程", en: "Paper 1 · Mod D (Python)" },
    question: {
      zh: "已知 `'A'` 的 ASCII 碼為 `65`。下列 Python 表達式的結果是甚麼？",
      en: "Given `ord('A') == 65`, what does the Python expression below evaluate to?"
    },
    code: "word = \"ICT2027\"\nprint(word[1:4] + chr(ord('A') + 3))",
    options: [
      { zh: "`ICT2D`", en: "`ICT2D`" },
      { zh: "`CT2D`", en: "`CT2D`" },
      { zh: "`CT2C`", en: "`CT2C`" },
      { zh: "`CT20D`", en: "`CT20D`" }
    ],
    answer: 1,
    explanation: {
      zh: "Python 索引由 0 開始：`word[1:4]` 取索引 `1, 2, 3`（不含 4），即 `'C'`, `'T'`, `'2'` → `\"CT2\"`。`ord('A') + 3 = 68`，`chr(68) = 'D'`。合併得 `\"CT2D\"`。",
      en: "`word[1:4]` slices indices 1, 2, 3 (stop 4 exclusive) → `\"CT2\"`. `chr(65 + 3) = chr(68) = 'D'`. Concatenated: `\"CT2D\"`."
    }
  },
  {
    id: "q-p1d-4",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 D Python 編程", en: "Paper 1 · Mod D (Python)" },
    question: {
      zh: "系統只接受年齡介乎 `12` 至 `18` 歲（包含 12 及 18）的參加者。下列哪組邊界測試數據 (Boundary Test Data) 設計最完善？",
      en: "A system accepts ages `12` to `18` inclusive. Which set of Boundary Test Data is most complete?"
    },
    options: [
      { zh: "`14, 15, 16`", en: "`14, 15, 16`" },
      { zh: "`12, 18`", en: "`12, 18`" },
      { zh: "`11, 12, 18, 19`", en: "`11, 12, 18, 19`" },
      { zh: "`-5, 100, \"abc\"`", en: "`-5, 100, \"abc\"`" }
    ],
    answer: 2,
    explanation: {
      zh: "完善的邊界測試必須同時測試**上下限本身 (`12, 18`)** 及**緊鄰越界的無效值 (`11, 19`)**，才能有效偵測把 `<=` 誤寫成 `<` 的邏輯錯誤！",
      en: "Thorough boundary testing includes both the **exact valid bounds (`12, 18`)** and **immediately out-of-bounds values (`11, 19`)** to catch `<` vs `<=` bugs!"
    }
  },

  // ================= PAPER 1: MODULE E =================
  {
    id: "q-p1e-1",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 E 社會影響", en: "Paper 1 · Mod E" },
    question: {
      zh: "某連鎖健身中心未經會員明示同意，便把會員登記入會時提供的電話號碼轉售予財務公司作電話推銷。這最直接違反香港《個人資料(私隱)條例》(PDPO) 哪一項原則？",
      en: "A gym sells members' phone numbers to a finance company for telemarketing without explicit consent. Which HK PDPO Data Protection Principle is directly violated?"
    },
    options: [
      { zh: "DPP1（收集目的及方式）", en: "DPP1 (Purpose & Manner of Collection)" },
      { zh: "DPP2（準確性及保留期間）", en: "DPP2 (Accuracy & Retention)" },
      { zh: "DPP3（資料的使用）", en: "DPP3 (Use of Personal Data)" },
      { zh: "DPP6（查閱及改正個人資料）", en: "DPP6 (Access & Correction)" }
    ],
    answer: 2,
    explanation: {
      zh: "**DPP3（資料的使用）**明確規定，未經資料當事人自願及明示同意，個人資料不可用於收集原定目的以外的新用途（尤其是直接促銷 Direct Marketing）。",
      en: "**DPP3 (Use of Personal Data)** prohibits using personal data for any new purpose (especially direct marketing) without explicit prescribed consent."
    }
  },
  {
    id: "q-p1e-2",
    paper: "paper1",
    tag: { zh: "卷一 · 單元 E 社會影響", en: "Paper 1 · Mod E" },
    question: {
      zh: "一位設計師將插畫以 `CC BY-NC-ND` 授權發佈。某網店下載該插畫、加上公司標誌並印在 T 恤上出售。該網店違反了哪些授權條款？",
      en: "An artist releases an illustration under `CC BY-NC-ND`. An e-shop edits it by adding a logo and sells it on T-shirts. Which conditions are violated?"
    },
    options: [
      { zh: "只違反 `BY`", en: "Only `BY`" },
      { zh: "違反 `NC`（非商業性）及 `ND`（禁止改作）（如未標示作者亦違反 `BY`）", en: "Violates `NC` (Non-Commercial) and `ND` (No Derivatives) (plus `BY` if uncredited)" },
      { zh: "完全合法，因 CC 授權代表放棄版權", en: "Completely legal because CC waives copyright" },
      { zh: "只違反 `SA`（相同方式分享）", en: "Only `SA` (ShareAlike)" }
    ],
    answer: 1,
    explanation: {
      zh: "印製 T 恤出售違反 `NC`（非商業性）；加上公司標誌改圖違反 `ND`（禁止改作）；CC 並非放棄版權，而是附帶條件的授權！",
      en: "Selling on T-shirts breaches `NC` (Non-Commercial); adding a logo alters the work, breaching `ND` (No Derivatives)."
    }
  },

  // ================= PAPER 2: ELECTIVE A (DATABASES) =================
  {
    id: "q-ea-1",
    paper: "electiveA",
    tag: { zh: "卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A" },
    question: {
      zh: "資料表 `ENROL(StudID, CourseID, StudName, Grade)` 的複合主鍵為 `(StudID, CourseID)`，其中 `StudName` 只由 `StudID` 決定。該表目前處於哪個範式？存在甚麼問題？",
      en: "Table `ENROL(StudID, CourseID, StudName, Grade)` has composite PK `(StudID, CourseID)`, and `StudName` depends solely on `StudID`. What is its current normal form and issue?"
    },
    options: [
      { zh: "已達 3NF，沒有問題", en: "Already in 3NF, no issue" },
      { zh: "處於 2NF，存在傳遞依賴 (Transitive Dependency)", en: "In 2NF; has Transitive Dependency" },
      { zh: "處於 1NF（未達 2NF），存在部分依賴 (Partial Dependency)", en: "In 1NF (violates 2NF); has Partial Dependency" },
      { zh: "未達 1NF，存在重複群組", en: "Violates 1NF; has repeating groups" }
    ],
    answer: 2,
    explanation: {
      zh: "非鍵屬性 `StudName` 只依賴複合主鍵 `(StudID, CourseID)` 的**一部分** (`StudID`)，屬於**部分依賴 (Partial Dependency)**，違反 **2NF**！應把 `STUDENT(StudID, StudName)` 拆出獨立建表。",
      en: "`StudName` depends on only **part** of the composite PK (`StudID`) — a **Partial Dependency** violating **2NF**! Extract `STUDENT(StudID, StudName)`."
    }
  },
  {
    id: "q-ea-2",
    paper: "electiveA",
    tag: { zh: "卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A" },
    question: {
      zh: "資料表 `STAFF(StaffID, StaffName, DeptID, DeptLocation)` 的主鍵為單一欄位 `StaffID`，且已知 `DeptID → DeptLocation`。該表違反了哪一範式？",
      en: "Table `STAFF(StaffID, StaffName, DeptID, DeptLocation)` has single PK `StaffID`, with `DeptID → DeptLocation`. Which normal form does it violate?"
    },
    options: [
      { zh: "違反 1NF", en: "Violates 1NF" },
      { zh: "違反 2NF（存在部分依賴）", en: "Violates 2NF (Partial Dependency)" },
      { zh: "違反 3NF（存在傳遞依賴 `StaffID → DeptID → DeptLocation`）", en: "Violates 3NF (Transitive Dependency `StaffID → DeptID → DeptLocation`)" },
      { zh: "已達 3NF", en: "Already in 3NF" }
    ],
    answer: 2,
    explanation: {
      zh: "單一主鍵的 1NF 表自動符合 2NF。但非鍵屬性 `DeptLocation` 依賴另一個非鍵屬性 `DeptID`，構成**傳遞依賴 (Transitive Dependency)**，違反 **3NF**！須拆出 `DEPT(DeptID, DeptLocation)`。",
      en: "Single-column PK means it automatically satisfies 2NF, but non-key `DeptLocation` depends on non-key `DeptID` → **Transitive Dependency**, violating **3NF**!"
    }
  },
  {
    id: "q-ea-3",
    paper: "electiveA",
    tag: { zh: "卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A" },
    question: {
      zh: "要利用 `LEFT JOIN` 查詢**每一位學生（包括報讀 0 科的學生）**的姓名及報讀科目總數，以下哪條 SQL 語句是**完全正確**的？",
      en: "To list **every student (including those enrolled in 0 courses)** with their total enrolled course count via `LEFT JOIN`, which SQL is **correct**?"
    },
    options: [
      { zh: "`SELECT s.Name, COUNT(*) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`", en: "`SELECT s.Name, COUNT(*) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`" },
      { zh: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`", en: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`" },
      { zh: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s INNER JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`", en: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s INNER JOIN ENROL e ON s.StudID = e.StudID GROUP BY s.StudID, s.Name;`" },
      { zh: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID WHERE COUNT(e.CourseID) >= 0;`", en: "`SELECT s.Name, COUNT(e.CourseID) FROM STUDENT s LEFT JOIN ENROL e ON s.StudID = e.StudID WHERE COUNT(e.CourseID) >= 0;`" }
    ],
    answer: 1,
    explanation: {
      zh: "超級經典 DSE 考題！A 錯在 `COUNT(*)` 會把無報讀學生的 `NULL` 補齊列錯算成 `1`；C 錯在 `INNER JOIN` 直接丟棄了 0 科學生；D 錯在 `WHERE` 不可使用聚合函數 `COUNT`！只有 **B (`COUNT(e.CourseID)`)** 忽略 NULL 正確算出 `0`！",
      en: "Classic DSE trap! Option A wrongly counts NULL-padded rows as `1` via `COUNT(*)`; Option C drops 0-course students via `INNER JOIN`; Option D illegally uses `COUNT` inside `WHERE`. Only **B (`COUNT(e.CourseID)`)** ignores NULLs and returns `0`!"
    }
  },
  {
    id: "q-ea-4",
    paper: "electiveA",
    tag: { zh: "卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A" },
    question: {
      zh: "在關聯式數據庫中，若嘗試在訂單表 `ORDERS` 新增一筆記錄，其 `CustID = 'C999'` 在顧客表 `CUSTOMER` 並不存在，DBMS 拒絕此操作是為了維護哪項完整性？",
      en: "When inserting an `ORDERS` row with `CustID = 'C999'` that does not exist in `CUSTOMER`, which integrity rule causes the DBMS to reject it?"
    },
    options: [
      { zh: "實體完整性 (Entity Integrity)", en: "Entity Integrity" },
      { zh: "參照完整性 (Referential Integrity)", en: "Referential Integrity" },
      { zh: "物理數據獨立性 (Physical Data Independence)", en: "Physical Data Independence" },
      { zh: "值域完整性 (Domain Integrity)", en: "Domain Integrity" }
    ],
    answer: 1,
    explanation: {
      zh: "**參照完整性 (Referential Integrity)** 規定子表任何非空外鍵 (`CustID`) 必須對應父表 (`CUSTOMER`) 中已存在的主鍵值，以防出現孤兒訂單記錄。",
      en: "**Referential Integrity** enforces that every non-null Foreign Key (`CustID`) must reference an existing Primary Key in the parent table (`CUSTOMER`)."
    }
  },
  {
    id: "q-ea-5",
    paper: "electiveA",
    tag: { zh: "卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A" },
    question: {
      zh: "執行以下 SQL 查詢的目的為何？",
      en: "What is the purpose of the SQL query below?"
    },
    code: "SELECT Dept, AVG(Salary) AS AvgSal\nFROM EMP\nWHERE Status = 'Active'\nGROUP BY Dept\nHAVING AVG(Salary) > 30000\nORDER BY AvgSal DESC;",
    options: [
      { zh: "列出所有薪金高於 30,000 的在職員工姓名", en: "List all active employees earning over 30,000" },
      { zh: "計算各部門在職員工的平均薪金，只顯示平均薪金高於 30,000 的部門並按平均薪金由高至低排列", en: "Compute average active-employee salary per department, showing only departments whose average exceeds 30,000, sorted highest first" },
      { zh: "此 SQL 有語法錯誤，因 `ORDER BY` 不可使用別名 `AvgSal`", en: "Syntax error because `ORDER BY` cannot use alias `AvgSal`" },
      { zh: "只計算薪金高於 30,000 的員工之部門平均值", en: "Average only employees who individually earn over 30,000" }
    ],
    answer: 1,
    explanation: {
      zh: "依執行次序：`WHERE` 先濾出在職員工 → `GROUP BY Dept` 按部門分組 → `HAVING AVG(Salary) > 30000` 過濾部門平均薪金 → `SELECT` 產生別名 `AvgSal` → `ORDER BY AvgSal DESC` 最後執行（故可使用別名！）。",
      en: "By execution order: `WHERE` filters active staff → `GROUP BY` groups by dept → `HAVING` filters groups with `AVG > 30000` → `SELECT` defines `AvgSal` → `ORDER BY` sorts descending (aliases allowed in `ORDER BY`!)."
    }
  },

  // ================= PAPER 2: ELECTIVE C (PYTHON 3 & ALGORITHMS) =================
  {
    id: "q-ec-1",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "執行以下 Python 程式碼後，輸出結果是甚麼？",
      en: "What does the following Python code output?"
    },
    code: "g = [[0] * 3] * 2\ng[0][1] = 7\nprint(g)",
    options: [
      { zh: "`[[0, 7, 0], [0, 0, 0]]`", en: "`[[0, 7, 0], [0, 0, 0]]`" },
      { zh: "`[[0, 7, 0], [0, 7, 0]]`", en: "`[[0, 7, 0], [0, 7, 0]]`" },
      { zh: "`[[7, 0, 0], [7, 0, 0]]`", en: "`[[7, 0, 0], [7, 0, 0]]`" },
      { zh: "引發 `IndexError`", en: "Raises `IndexError`" }
    ],
    answer: 1,
    explanation: {
      zh: "`[[0] * 3] * 2` 產生 2 個指向**同一個內部串列**的淺複製參照！改動 `g[0][1]` 會同時改動 `g[1][1]`。正確建立獨立 2D List 應寫 `[[0]*3 for _ in range(2)]`。",
      en: "`[[0] * 3] * 2` creates 2 references aliasing the **same inner list**! Mutating `g[0][1]` mutates `g[1][1]`. Always use `[[0]*3 for _ in range(2)]`."
    }
  },
  {
    id: "q-ec-2",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "追蹤以下 Python 遞歸函數，呼叫 `mystery(12)` 時的完整輸出是甚麼？",
      en: "Trace the recursive Python function below. What does `mystery(12)` print?"
    },
    code: "def mystery(n):\n    if n == 0:\n        return\n    mystery(n // 2)\n    print(n % 2, end=\"\")\n\nmystery(12)",
    options: [
      { zh: "`0011`", en: "`0011`" },
      { zh: "`1100`", en: "`1100`" },
      { zh: "`1010`", en: "`1010`" },
      { zh: "`110`", en: "`110`" }
    ],
    answer: 1,
    explanation: {
      zh: "因 `print` 位於遞歸呼叫**之後**，輸出按 Call Stack 後進先出 (LIFO) 展開：`m(12)`→`m(6)`→`m(3)`→`m(1)`→`m(0)` 返回，依次印出 `1%2=1`, `3%2=1`, `6%2=0`, `12%2=0`，即 `1100`（12 的二進制！）。",
      en: "`print` occurs AFTER the recursive call, so remainders print in LIFO unwinding order: `1`, `1`, `0`, `0` → `1100` (binary for 12!)."
    }
  },
  {
    id: "q-ec-3",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "對一個已按升序排列、包含 `1000` 個不同整數的 Python 串列執行**二分搜尋 (Binary Search)**，在最壞情況下最多需要比較多少次？",
      en: "Performing **Binary Search** on a sorted Python list of `1000` distinct integers requires AT MOST how many comparisons in the worst case?"
    },
    options: [
      { zh: "10 次", en: "10" },
      { zh: "11 次", en: "11" },
      { zh: "500 次", en: "500" },
      { zh: "1000 次", en: "1000" }
    ],
    answer: 0,
    explanation: {
      zh: "因 `2⁹ = 512 < 1000 < 1024 = 2¹⁰`，最多比較次數為 `⌊log₂(1000)⌋ + 1 = 9 + 1 = 10` 次！（每次比較折半：`1000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1`，共 10 次）。",
      en: "Since `2⁹ = 512 < 1000 < 1024 = 2¹⁰`, max comparisons = `⌊log₂(1000)⌋ + 1 = 9 + 1 = 10`!"
    }
  },
  {
    id: "q-ec-4",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "有一個容量 `MAX = 5` 的**環形佇列 (Circular Queue)**，初始 `front = 0, rear = -1, count = 0`。依次執行：入隊 `A, B, C, D` → 出隊 2 次 → 入隊 `E, F`。請問最後 `front` 和 `rear` 指標分別位於哪個索引？",
      en: "A **Circular Queue** (`MAX = 5`) starts with `front = 0, rear = -1, count = 0`. Operations: enqueue `A, B, C, D` → dequeue twice → enqueue `E, F`. What are the final `front` and `rear` indices?"
    },
    options: [
      { zh: "`front = 2, rear = 5`", en: "`front = 2, rear = 5`" },
      { zh: "`front = 2, rear = 0`", en: "`front = 2, rear = 0`" },
      { zh: "`front = 2, rear = 1`", en: "`front = 2, rear = 1`" },
      { zh: "發生 Queue Overflow 無法入隊 `F`", en: "Queue Overflow; cannot enqueue `F`" }
    ],
    answer: 1,
    explanation: {
      zh: "• 入隊 A,B,C,D：`rear` 依序為 `0, 1, 2, 3` (`count=4`)\n• 出隊 2 次 (A, B)：`front` 變為 `0 → 1 → 2` (`count=2`)\n• 入隊 E：`rear = (3 + 1) % 5 = 4` (`count=3`)\n• 入隊 F：`rear = (4 + 1) % 5 = 0` (`count=4`)！\n最終 `front = 2, rear = 0`，成功利用環形回繞避免了假溢出！",
      en: "• Enqueue A,B,C,D: `rear = 3`, `count = 4`\n• Dequeue ×2: `front = 2`, `count = 2`\n• Enqueue E: `rear = (3+1)%5 = 4`\n• Enqueue F: `rear = (4+1)%5 = 0`, `count = 4`.\nFinal: `front = 2, rear = 0`!"
    }
  },
  {
    id: "q-ec-5",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "要在單向鏈結串列中，把新節點 `new_node` 插入於現有節點 `curr` 的**正後方**，以下哪段 Python 指標修改次序才是正確的？",
      en: "To insert `new_node` immediately **after** node `curr` in a Singly Linked List, which pointer update order is correct?"
    },
    options: [
      { zh: "`curr.next = new_node` 然後 `new_node.next = curr.next`", en: "`curr.next = new_node` then `new_node.next = curr.next`" },
      { zh: "`new_node.next = curr.next` 然後 `curr.next = new_node`", en: "`new_node.next = curr.next` then `curr.next = new_node`" },
      { zh: "`new_node.next = curr` 然後 `curr.next = None`", en: "`new_node.next = curr` then `curr.next = None`" },
      { zh: "兩行次序互換結果完全一樣", en: "Order of the two lines does not matter" }
    ],
    answer: 1,
    explanation: {
      zh: "永遠**先連後方 (`new_node.next = curr.next`)，再改前方 (`curr.next = new_node`)**！若顛倒順序 (選項 A)，`curr.next` 已經變成 `new_node`，執行第二行會令 `new_node.next` 指向自己造成死循環並永久遺失後面所有節點！",
      en: "Always set `new_node.next = curr.next` **FIRST**, then `curr.next = new_node`! Reversing (Option A) points `new_node.next` to itself (infinite loop) and drops the rest of the list!"
    }
  },
  {
    id: "q-ec-6",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "對串列 `[5, 2, 8, 1]` 執行由小至大的**冒泡排序 (Bubble Sort)**，完成**第 1 輪 (Pass 1)** 後，串列的內容是甚麼？",
      en: "Sorting `[5, 2, 8, 1]` in ascending order using **Bubble Sort**, what is the list state immediately after **Pass 1**?"
    },
    options: [
      { zh: "`[1, 2, 8, 5]`", en: "`[1, 2, 8, 5]`" },
      { zh: "`[2, 5, 1, 8]`", en: "`[2, 5, 1, 8]`" },
      { zh: "`[2, 1, 5, 8]`", en: "`[2, 1, 5, 8]`" },
      { zh: "`[1, 5, 2, 8]`", en: "`[1, 5, 2, 8]`" }
    ],
    answer: 1,
    explanation: {
      zh: "Pass 1 逐對比較相鄰元素：\n1) `5` vs `2` → 交換 → `[2, 5, 8, 1]`\n2) `5` vs `8` → 不換 → `[2, 5, 8, 1]`\n3) `8` vs `1` → 交換 → **`[2, 5, 1, 8]`**（最大值 `8` 冒到最尾！）。*(註：選項 A `[1, 2, 8, 5]` 是 Selection Sort 的第 1 輪結果！)*",
      en: "Pass 1 adjacent comparisons: (5,2)→swap `[2,5,8,1]`; (5,8)→ok; (8,1)→swap → **`[2, 5, 1, 8]`** (largest `8` bubbled to the end!). *(Note: Option A is Selection Sort Pass 1!)*"
    }
  },
  {
    id: "q-ec-7",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "若 `log.txt` 檔案原本存有 10 行歷史紀錄，現在需要用 Python 在檔案**尾端新增一行紀錄而不刪除舊有紀錄**，應該使用哪個檔案開啟模式？",
      en: "`log.txt` already contains 10 lines of history. Which Python file mode adds a new line at the **end without erasing existing records**?"
    },
    options: [
      { zh: "`open('log.txt', 'r')`", en: "`open('log.txt', 'r')`" },
      { zh: "`open('log.txt', 'w')`", en: "`open('log.txt', 'w')`" },
      { zh: "`open('log.txt', 'a')`", en: "`open('log.txt', 'a')`" },
      { zh: "`open('log.txt', 'x')`", en: "`open('log.txt', 'x')`" }
    ],
    answer: 2,
    explanation: {
      zh: "`'a'` (Append 模式) 保留原有內容並於檔尾續寫；`'w'` 會立即清空原有全部 10 行紀錄！`'x'` 在檔案已存在時會引發 `FileExistsError`。",
      en: "`'a'` (append) preserves existing lines and writes at the end. `'w'` immediately wipes existing contents! `'x'` raises `FileExistsError` if the file exists."
    }
  },
  {
    id: "q-ec-8",
    paper: "electiveC",
    tag: { zh: "卷二 · 選修 C Python 與算法", en: "Paper 2 · Elective C (Python)" },
    question: {
      zh: "追蹤以下涉及參數傳遞的 Python 程式碼，最終輸出的兩行是甚麼？",
      en: "Trace the parameter passing behavior in this Python snippet. What are the two printed lines?"
    },
    code: "def f(x, lst):\n    x += 5\n    lst.append(x)\n    lst = [100]\n\na = 10\nb = [1, 2]\nf(a, b)\nprint(a)\nprint(b)",
    options: [
      { zh: "`15` 和 `[100]`", en: "`15` and `[100]`" },
      { zh: "`10` 和 `[1, 2, 15]`", en: "`10` and `[1, 2, 15]`" },
      { zh: "`10` 和 `[100]`", en: "`10` and `[100]`" },
      { zh: "`10` 和 `[1, 2]`", en: "`10` and `[1, 2]`" }
    ],
    answer: 1,
    explanation: {
      zh: "• `x += 5`：整數不可變，只改區域 `x = 15`，外部 `a` 維持 `10`。\n• `lst.append(x)`：原地修改與外部 `b` 共享的串列，`b` 變成 `[1, 2, 15]`。\n• `lst = [100]`：把區域變數 `lst` 重新指向新列表，**不影響外部 `b`**！故輸出 `10` 與 `[1, 2, 15]`。",
      en: "• `x += 5` rebinds local `x = 15`; caller `a` stays `10`.\n• `lst.append(15)` mutates `b` in-place → `[1, 2, 15]`.\n• `lst = [100]` only rebinds the local reference without touching `b`! Prints `10` and `[1, 2, 15]`."
    }
  }
];
