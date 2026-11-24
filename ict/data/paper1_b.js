window.ICT_MODULES.push({
  id: "p1-b",
  paper: "paper1",
  code: "Module B",
  hours: { zh: "必修 · 約 20 課時", en: "Compulsory · ~20 hrs" },
  title: { zh: "單元 B：電腦系統基礎", en: "Module B: Computer System Fundamentals" },
  subtitle: {
    zh: "深入解析馮紐曼架構、CPU 組件與機器週期、系統匯流排、記憶體階層與虛擬記憶體、儲存裝置比較、作業系統功能與編譯器/直譯器差異。",
    en: "In-depth coverage of Von Neumann architecture, CPU & fetch-decode-execute cycle, system buses, memory hierarchy & virtual memory, storage devices, OS functions, and compilers vs interpreters."
  },
  topics: [
    {
      id: "p1-b-1",
      code: "B1",
      importance: 3,
      title: { zh: "基本機器結構、CPU 與機器週期", en: "Basic Machine Organisation, CPU & Machine Cycle" },
      summary: {
        zh: "掌握儲存程式概念、ALU/CU/五大暫存器職能、三大系統匯流排、提取-解碼-執行四步機器週期及影響 CPU 效能的因素。",
        en: "Master stored-program concept, ALU/CU/5 key registers, 3 system buses, Fetch-Decode-Execute cycle, and CPU performance factors."
      },
      blocks: [
        {
          type: "diagram",
          title: { zh: "馮紐曼架構 (Von Neumann Architecture) 與系統匯流排", en: "Von Neumann Architecture & System Buses" },
          ascii: "+-------------------+        Address Bus (單向 Unidirectional)       +------------------+\n|        CPU        | ---------------------------------------------> |                  |\n|  +-------------+  |        Data Bus (雙向 Bidirectional)             |   Main Memory    |\n|  |  CU  |  ALU |  | <--------------------------------------------> |   (RAM & ROM)    |\n|  +-------------+  |        Control Bus (雙向 Bidirectional)          |  Stores Programs |\n|  | Registers:  |  | <--------------------------------------------> |     & Data       |\n|  | PC,IR,MAR,  |  |                                                +------------------+\n|  | MDR, ACC    |  |\n+-------------------+  <--- Input Devices   |   Output & Secondary Storage --->",
          caption: {
            zh: "**儲存程式概念 (Stored-Program Concept)**：程式指令與數據共同儲存於主記憶體 (RAM) 中，由 CPU 順序提取並執行。",
            en: "**Stored-Program Concept**: Both program instructions and data reside together in Main Memory (RAM) and are fetched sequentially by the CPU."
          }
        },
        {
          type: "keyterms",
          title: { zh: "CPU 內部組件與五大必考暫存器 (Registers)", en: "CPU Components & 5 Essential Registers" },
          items: [
            { term: { zh: "算術邏輯單元 (ALU)", en: "Arithmetic Logic Unit (ALU)" }, def: { zh: "執行所有算術運算 (`+ - × ÷`) 及邏輯比較 (`AND, OR, NOT, >, ==`)。", en: "Performs all arithmetic operations and logical comparisons." } },
            { term: { zh: "控制單元 (CU)", en: "Control Unit (CU)" }, def: { zh: "負責解碼指令並發出控制訊號，協調 CPU、記憶體及 I/O 裝置的運作時序。", en: "Decodes instructions and sends control signals coordinating CPU, memory, and I/O timing." } },
            { term: { zh: "程式計數器 (PC — Program Counter)", en: "Program Counter (PC)" }, def: { zh: "儲存**下一條**即將被提取指令的記憶體位址。每提取一條指令後自動遞增（除非遇上跳轉/分支指令）。", en: "Holds the memory address of the **next** instruction to be fetched. Auto-increments after fetch (unless a branch/jump occurs)." } },
            { term: { zh: "指令暫存器 (IR — Instruction Register)", en: "Instruction Register (IR)" }, def: { zh: "暫存**當前**正在被解碼和執行的指令（包含操作碼 Opcode 與操作數 Operand）。", en: "Holds the **current** instruction being decoded and executed (opcode + operand)." } },
            { term: { zh: "記憶體位址暫存器 (MAR)", en: "Memory Address Register (MAR)" }, def: { zh: "存放 CPU 正準備讀取或寫入的記憶體位址，經**位址匯流排**送往主記憶體。", en: "Stores the address in memory to be read from or written to, sent via the **Address Bus**." } },
            { term: { zh: "記憶體數據暫存器 (MDR)", en: "Memory Data Register (MDR)" }, def: { zh: "暫存從記憶體讀入或準備寫回記憶體的數據或指令，連接**數據匯流排**。", en: "Buffers data/instructions just read from or about to be written to memory via the **Data Bus**." } },
            { term: { zh: "累加器 (ACC — Accumulator)", en: "Accumulator (ACC)" }, def: { zh: "暫存 ALU 的即時運算結果，避免頻繁讀寫較慢的主記憶體。", en: "Temporarily holds intermediate results produced by the ALU." } }
          ]
        },
        {
          type: "heading",
          text: { zh: "機器週期 (Machine Cycle / Fetch-Decode-Execute Cycle)", en: "Machine Cycle (Fetch-Decode-Execute Cycle)" }
        },
        {
          type: "list",
          ordered: true,
          items: [
            { zh: "**1. 提取 (Fetch)**：將 `PC` 的位址複製到 `MAR`；CPU 經位址匯流排通知記憶體讀取該處指令，指令經數據匯流排送入 `MDR`，再複製到 `IR`；同時 `PC` 加 1 指向下一條指令。", en: "**1. Fetch**: Copy address from `PC` to `MAR`; fetch instruction from RAM via Data Bus into `MDR`, then copy to `IR`; increment `PC` to point to the next instruction." },
            { zh: "**2. 解碼 (Decode)**：`CU` 分析 `IR` 中的指令操作碼 (Opcode)，辨識所需操作並找出操作數位置。", en: "**2. Decode**: `CU` interprets the opcode in `IR` to determine the required operation and operands." },
            { zh: "**3. 執行 (Execute)**：`CU` 發出控制訊號，由 `ALU` 執行計算（或從記憶體讀寫數據、更改 `PC` 進行跳轉）。", en: "**3. Execute**: `CU` issues control signals for `ALU` calculation, memory access, or branching (`PC` update)." },
            { zh: "**4. 寫回 (Store / Write-back)**：將運算結果寫入 `ACC` 暫存器或經 `MAR`/`MDR` 寫回主記憶體。", en: "**4. Store / Write-back**: Write execution result to `ACC` or back to RAM via `MAR`/`MDR`." }
          ]
        },
        {
          type: "heading",
          text: { zh: "影響 CPU 效能的五大因素", en: "5 Key Factors Affecting CPU Performance" }
        },
        {
          type: "list",
          items: [
            { zh: "**時脈頻率 (Clock Speed, GHz)**：每秒執行時脈週期的次數（3 GHz = 每秒 30 億次）。越高越快，但耗電與發熱大增。", en: "**Clock Speed (GHz)**: Clock cycles per second (3 GHz = 3 billion cycles/s). Higher is faster but increases heat/power." },
            { zh: "**核心數目 (Number of Cores)**：多核心（如 8-core）可**並行處理 (Parallel Processing)** 多個執行緒，但須軟件支援多工。", en: "**Number of Cores**: Multi-core CPUs execute multiple threads in **parallel** (requires multi-threaded software to benefit)." },
            { zh: "**快取記憶體 (Cache Memory — L1/L2/L3 SRAM)**：位於 CPU 內/旁的高速記憶體，存放常用指令與數據，大幅減少 CPU 等待較慢 RAM 的時間。", en: "**Cache Memory (L1/L2/L3 SRAM)**: Ultra-fast memory storing frequently accessed instructions/data to reduce slow RAM access latency." },
            { zh: "**字長 (Word Size — 32-bit vs 64-bit)**：CPU 單次可處理的位元數及數據匯流排寬度；64-bit 系統可定址超過 4 GB 的記憶體。", en: "**Word Size (32-bit vs 64-bit)**: Bits processed in one operation; 64-bit allows addressing well beyond 4 GB of RAM." },
            { zh: "**匯流排寬度 (Bus Width)**：位址匯流排寬度 `n` bits 決定最大定址空間 `2ⁿ` 個記憶體位置；數據匯流排越寬，單次傳輸數據量越大。", en: "**Bus Width**: `n`-bit Address Bus gives max `2ⁿ` addressable memory locations; wider Data Bus transfers more data per cycle." }
          ]
        }
      ]
    },
    {
      id: "p1-b-2",
      code: "B2",
      importance: 3,
      title: { zh: "記憶體階層、RAM/ROM、虛擬記憶體與輔助儲存", en: "Memory Hierarchy, RAM/ROM, Virtual Memory & Secondary Storage" },
      summary: {
        zh: "比較 RAM、ROM、Cache、虛擬記憶體 (Virtual Memory) 及 HDD vs SSD 優缺點，熟記 RAID 原理。",
        en: "Compare RAM, ROM, Cache, Virtual Memory, HDD vs SSD trade-offs, and RAID fundamentals."
      },
      blocks: [
        {
          type: "diagram",
          title: { zh: "記憶體階層金字塔 (Memory Hierarchy)", en: "Memory Hierarchy Pyramid" },
          ascii: "        /\\          CPU Registers   (最快 Fastest · 容量最小 · 每GB最貴)\n       /  \\         Cache (SRAM L1/L2/L3)\n      /    \\        Main Memory (DRAM / RAM)\n     /      \\       Secondary Storage (NVMe SSD → SATA SSD → HDD)\n    /________\\      Offline / Archival (Optical Disc / Tape / Cloud) (最慢 · 容量最大 · 最便宜)",
          caption: { zh: "越靠近頂端：存取速度越快、容量越小、每 GB 成本越高、多數為易失性。", en: "Higher tier = faster speed, smaller capacity, higher cost per GB, generally volatile." }
        },
        {
          type: "compare",
          title: { zh: "主記憶體：RAM vs ROM", en: "Primary Memory: RAM vs ROM" },
          leftTitle: { zh: "RAM (隨機存取記憶體)", en: "RAM (Random Access Memory)" },
          rightTitle: { zh: "ROM (唯讀記憶體)", en: "ROM (Read-Only Memory)" },
          rows: [
            { aspect: { zh: "易失性 (Volatility)", en: "Volatility" }, left: { zh: "**易失性 (Volatile)**：斷電後所有數據立即消失。", en: "**Volatile**: Loses all stored contents when power is off." }, right: { zh: "**非易失性 (Non-volatile)**：斷電後數據仍永久保留。", en: "**Non-volatile**: Retains contents permanently without power." } },
            { aspect: { zh: "讀寫性質", en: "Read/Write" }, left: { zh: "可隨時高速讀取及寫入。", en: "Both readable and writable at high speed." }, right: { zh: "正常運作時唯讀（Flash ROM/EEPROM 可經特定程序更新韌體）。", en: "Read-only in normal use (Flash/EEPROM allows firmware updates)." } },
            { aspect: { zh: "主要用途", en: "Primary Use" }, left: { zh: "載入作業系統、正在運行的應用程式及處理中的數據。", en: "Holds running OS, active applications, and working data." }, right: { zh: "儲存 **BIOS / UEFI**、開機自檢程式 (POST) 及開機引導程式 (Bootstrap Loader)。", en: "Stores **BIOS / UEFI**, POST routine, and Bootstrap Loader." } }
          ]
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "必考概念：虛擬記憶體 (Virtual Memory) 與過度置換 (Thrashing)", en: "Key Exam Concept: Virtual Memory & Thrashing" },
          text: {
            zh: "當 RAM 容量不足以容納所有開啟中的程式時，作業系統會劃出部分輔助儲存空間（SSD/HDD）作為**虛擬記憶體**，將暫不活躍的記憶體分頁 (Pages) 置換 (Swap/Page out) 到磁碟，騰出 RAM 空間。\n⚠️ **副作用**：輔助儲存比 RAM 慢數百倍，若系統長期 RAM 嚴重不足，不斷頻繁讀寫分頁檔會導致**過度置換 (Thrashing)**，系統急劇變慢！解決方法：**加裝實體 RAM**。",
            en: "When physical RAM is full, the OS allocates secondary storage (HDD/SSD) as **Virtual Memory**, swapping inactive memory pages to disk to free up RAM.\n⚠️ **Drawback**: Secondary storage is orders of magnitude slower than RAM. Excessive paging (**Thrashing**) severely degrades performance! Fix: **Add more physical RAM**."
          }
        },
        {
          type: "compare",
          title: { zh: "輔助儲存比較：傳統硬碟 (HDD) vs 固態硬碟 (SSD)", en: "Secondary Storage: HDD vs SSD" },
          leftTitle: { zh: "HDD (機械硬碟 — 磁碟片)", en: "HDD (Hard Disk Drive — Magnetic)" },
          rightTitle: { zh: "SSD (固態硬碟 — NAND Flash)", en: "SSD (Solid-State Drive — NAND Flash)" },
          rows: [
            { aspect: { zh: "機械部件與防震", en: "Moving Parts & Durability" }, left: { zh: "含高速旋轉磁碟片與讀寫臂；**不耐震動**，摔跌易損毀數據。", en: "Spinning platters & moving read/write heads; **fragile to shock**." }, right: { zh: "**無機械移動部件**；耐震、安靜、耗電量低、體積輕薄（適合手提電腦）。", en: "**No moving parts**; shock-resistant, silent, low power, compact (ideal for laptops)." } },
            { aspect: { zh: "存取速度", en: "Access Speed" }, left: { zh: "較慢，受限於尋道時間 (Seek Time) 及旋轉延遲；需要磁碟重組。", en: "Slower due to seek time & rotational latency; benefits from defragmentation." }, right: { zh: "**極快**（直接電子隨機存取），開機與載入程式快數倍；**切勿進行磁碟重組**（無幫助且損耗寫入壽命！）。", en: "**Extremely fast** random access; **NEVER defragment SSDs** (no benefit and wears out write cycles!)." } },
            { aspect: { zh: "成本與壽命", en: "Cost & Lifespan" }, left: { zh: "每 TB 成本較低，適合大容量冷數據備份。", en: "Lower cost per TB; great for bulk archival storage." }, right: { zh: "每 TB 成本較高；每個 Flash 儲存單元有有限的擦寫次數 (P/E cycles)。", en: "Higher cost per TB; limited program/erase (write) cycles per cell." } }
          ]
        },
        {
          type: "list",
          title: { zh: "RAID 磁碟陣列基礎（伺服器常見考點）", en: "RAID Fundamentals (Server Exam Topic)" },
          items: [
            { zh: "**RAID 0 (資料條帶化 Striping)**：將數據分散寫入多顆硬碟，讀寫速度倍增，總容量 = 全部硬碟之和；但**零容錯能力**（任一硬碟損壞，全部數據遺失）。", en: "**RAID 0 (Striping)**: Splits data across drives for max speed & 100% capacity, but **zero fault tolerance** (1 drive fails → all data lost)." },
            { zh: "**RAID 1 (磁碟鏡像 Mirroring)**：同時將相同數據完整寫入兩顆硬碟。可用容量減半 (50%)，但任一硬碟故障時系統仍可無縫運作。", en: "**RAID 1 (Mirroring)**: Duplicates exact data across 2 drives. 50% usable capacity, high fault tolerance if 1 drive fails." },
            { zh: "**RAID 5 (帶奇偶校驗的條帶化)**：最少 3 顆硬碟，分散儲存數據與奇偶校驗資訊；可用容量為 `(N-1)` 顆，容許任 1 顆硬碟故障並可重建數據。", en: "**RAID 5 (Striping with Distributed Parity)**: Min 3 drives; usable capacity `(N-1)` drives; survives 1 drive failure with data rebuild." }
          ]
        }
      ]
    },
    {
      id: "p1-b-3",
      code: "B3",
      importance: 2,
      title: { zh: "輸入輸出周邊、連接介面與電腦系統分類", en: "I/O Peripherals, Interfaces & Computer Categories" },
      summary: {
        zh: "區分 OCR、OMR、MICR、RFID/NFC 及各類打印機特點，掌握常見傳輸介面與嵌入式系統概念。",
        en: "Distinguish OCR, OMR, MICR, RFID/NFC, printer types, I/O ports, and embedded vs general-purpose systems."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "自動數據收集技術對照 (Auto Data Capture)", en: "Automated Data Capture Technologies" },
          headers: [
            { zh: "技術", en: "Technology" },
            { zh: "運作原理", en: "How It Works" },
            { zh: "典型應用", en: "Typical Application" }
          ],
          rows: [
            [{ zh: "**OMR (光學標記辨識)**", en: "**OMR (Optical Mark Recognition)**" }, { zh: "偵測表格特定格位上的塗黑標記（反光率差異）。極快、準確率極高。", en: "Detects shaded marks in fixed positions via light reflection. Very fast & accurate." }, { zh: "HKDSE 多項選擇題 (MC) 答題紙、六合彩彩票。", en: "HKDSE MC answer sheets, lottery tickets." }],
            [{ zh: "**OCR (光學字元辨識)**", en: "**OCR (Optical Character Recognition)**" }, { zh: "將掃描影像中的印刷或手寫文字轉換為可編輯的電腦文字檔。", en: "Converts scanned images of printed/handwritten text into editable text." }, { zh: "護照/身份證掃描、車牌自動辨識、文件數碼化。", en: "Passport scanning, licence plate recognition, digitising books." }],
            [{ zh: "**MICR (磁墨字元辨識)**", en: "**MICR (Magnetic Ink Character Recognition)**" }, { zh: "讀取含氧化鐵磁性墨水印製的特殊字體；即使蓋章或輕微褶皺仍可準確讀取，防偽力強。", en: "Reads special fonts printed in magnetic ink; readable even when overprinted/creased, tamper-resistant." }, { zh: "銀行支票底部的帳號與支票編號。", en: "Bank cheque numbers & routing codes." }],
            [{ zh: "**RFID / NFC**", en: "**RFID / NFC**" }, { zh: "透過無線電波自動識別標籤晶片，無須光學直線對準 (No line-of-sight needed)；NFC 為極短距 (<4cm) 安全 RFID。", en: "Radio waves identify tags without line-of-sight; NFC is ultra-short-range (<4cm) secure RFID." }, { zh: "八達通卡、圖書館防盜與快速借書、倉庫物流盤點、Apple Pay。", en: "Octopus card, library checkout, warehouse inventory, mobile payments." }]
          ]
        },
        {
          type: "table",
          title: { zh: "打印機比較 (Printers)", en: "Printer Comparison" },
          headers: [
            { zh: "類型", en: "Type" },
            { zh: "特點與優缺點", en: "Features & Pros/Cons" },
            { zh: "適用場景", en: "Best Use" }
          ],
          rows: [
            [{ zh: "**噴墨打印機 (Inkjet)**", en: "**Inkjet**" }, { zh: "機身便宜、彩色相片細膩；但墨盒昂貴、打印較慢、遇水易化。", en: "Low purchase cost, great colour photos; costly ink, slower, water-soluble." }, { zh: "家庭用戶、少量彩色文件與相片。", en: "Home use, low-volume colour photos." }],
            [{ zh: "**雷射打印機 (Laser)**", en: "**Laser**" }, { zh: "使用碳粉 (Toner) 熱壓定影，高速、文字極銳利、大量列印單頁成本最低。", en: "Uses toner + fuser; very fast, crisp text, lowest cost per page at high volume." }, { zh: "學校與辦公室大量文件列印。", en: "Schools & offices (high-volume documents)." }],
            [{ zh: "**熱感打印機 (Thermal)**", en: "**Thermal**" }, { zh: "加熱熱敏紙顯色，無須墨水碳粉、體積小、靜音；但字跡日久受熱會褪色。", en: "Heats coated thermal paper; no ink/toner, compact, quiet; fades over time/heat." }, { zh: "超市收據、排隊籌號、快遞運單。", en: "POS receipts, queue tickets, shipping labels." }],
            [{ zh: "**3D 打印機 (3D Printer)**", en: "**3D Printer**" }, { zh: "逐層堆疊塑膠/樹脂建立立體模型 (Additive Manufacturing)。", en: "Builds 3D physical objects layer by layer (additive manufacturing)." }, { zh: "工業原型設計、醫療義肢、STEM 教學。", en: "Prototyping, prosthetics, STEM education." }]
          ]
        }
      ]
    },
    {
      id: "p1-b-4",
      code: "B4",
      importance: 3,
      title: { zh: "系統軟件、作業系統與語言翻譯程式", en: "System Software, Operating Systems & Language Translators" },
      summary: {
        zh: "熟背作業系統六大核心職能、CLI vs GUI、實用程式，以及編譯器 (Compiler) 與直譯器 (Interpreter — Python 採用!) 的深度對比。",
        en: "Master 6 OS core functions, CLI vs GUI, utility programs, and the exam-favorite Compiler vs Interpreter comparison (Python!)."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 作業系統 (Operating System, OS) 六大職能", en: "1. Six Core Functions of an Operating System" }
        },
        {
          type: "list",
          ordered: true,
          items: [
            { zh: "**程序 / CPU 管理 (Process Management)**：排程分配 CPU 時間片 (Time-slicing)，實現**多工處理 (Multitasking)**，同時運行多個程式。", en: "**Process Management**: Schedules CPU time slices for **multitasking** across running programs." },
            { zh: "**記憶體管理 (Memory Management)**：為程式分配與回收 RAM 空間、防止程式互相覆寫記憶體、管理虛擬記憶體。", en: "**Memory Management**: Allocates/deallocates RAM, isolates process memory, manages virtual memory." },
            { zh: "**檔案管理 (File Management)**：組織資料夾階層、建立/複製/刪除檔案、維護檔案權限及紀錄儲存位置。", en: "**File Management**: Organises folder hierarchies, CRUD file operations, file permissions, and disk allocation." },
            { zh: "**裝置與 I/O 管理 (Device Management)**：透過**驅動程式 (Device Drivers)** 控制硬件，並利用**佇列緩衝 (Spooling)** 協調慢速裝置（如打印機）。", en: "**Device / I/O Management**: Communicates with hardware via **device drivers** and manages **spooling** (e.g. print queue)." },
            { zh: "**用戶介面 (User Interface)**：提供人機互動環境，包括 **GUI**（圖形介面：直覺易學、耗資源）與 **CLI**（命令列介面：指令精準、可批次自動化、資源消耗極低，但須背指令）。", en: "**User Interface**: Provides interaction via **GUI** (intuitive, higher resource use) or **CLI** (fast, scriptable, low overhead, steeper learning curve)." },
            { zh: "**系統保安與帳戶管理 (Security & User Management)**：密碼認證、多用戶權限隔離、檔案存取控制。", en: "**Security & Access Control**: User authentication, multi-user account separation, and access rights." }
          ]
        },
        {
          type: "heading",
          text: { zh: "2. 語言翻譯程式：編譯器 vs 直譯器（高頻考點！）", en: "2. Language Translators: Compiler vs Interpreter (High Frequency!)" }
        },
        {
          type: "compare",
          title: { zh: "編譯器 (Compiler) vs 直譯器 (Interpreter)", en: "Compiler vs Interpreter" },
          leftTitle: { zh: "編譯器 (Compiler)", en: "Compiler" },
          rightTitle: { zh: "直譯器 (Interpreter — 如 Python)", en: "Interpreter (e.g. Python)" },
          rows: [
            { aspect: { zh: "翻譯方式", en: "Translation Method" }, left: { zh: "一次過將**整份原始碼**翻譯成獨立的可執行機器碼檔案（Object/Executable code）。", en: "Translates the **entire source code at once** into a standalone executable machine-code file." }, right: { zh: "執行時**逐行翻譯並立即執行**（Python 會先轉成內部 Bytecode 再由直譯虛擬機執行），不產生獨立執行檔。", en: "Translates and executes code **line by line at runtime** (Python compiles internally to bytecode executed by its VM); no standalone native binary." } },
            { aspect: { zh: "執行速度", en: "Execution Speed" }, left: { zh: "**較快**：發佈後可直接運行機器碼，無須再次翻譯。", en: "**Faster**: Runs native machine code directly without re-translation." }, right: { zh: "**較慢**：每次運行都需要翻譯程式在場解譯。", en: "**Slower**: Translation overhead occurs every time the program runs." } },
            { aspect: { zh: "除錯與開發", en: "Debugging" }, left: { zh: "編譯結束後一次過列出所有語法錯誤，修改後須重新編譯。", en: "Reports all syntax errors after compiling the whole file; requires recompilation after edits." }, right: { zh: "遇到第一條錯誤即停下報錯，**極方便即時測試與除錯**！", en: "Stops immediately at the first error line — **ideal for rapid prototyping and debugging**!" } },
            { aspect: { zh: "源碼保密與跨平台", en: "Source Privacy & Portability" }, left: { zh: "發佈執行檔無須公開原始碼（保護知識產權），但執行檔綁定特定平台 (OS/CPU)。", en: "Protects source code IP when distributing binaries, but binaries are platform-dependent." }, right: { zh: "只要目標電腦安裝對應直譯器即可**跨平台**執行，但通常須提供原始碼。", en: "Highly **cross-platform** wherever the interpreter exists, though source code is generally exposed." } }
          ]
        },
        {
          type: "callout",
          variant: "info",
          title: { zh: "補充：組譯器 (Assembler) 與實用程式 (Utility Programs)", en: "Note: Assembler & Utility Programs" },
          text: {
            zh: "**組譯器 (Assembler)** 用於將低階的組合語言 (Assembly Language) 翻譯成機器碼 (Machine Code)。\n常見**實用程式**包括：防毒軟件、檔案壓縮工具、系統備份工具、磁碟重組程式 (Disk Defragmenter — 僅適用於 HDD，重組分散的磁區以縮短讀寫頭移動時間)。",
            en: "**Assembler** translates low-level Assembly Language into Machine Code.\nKey **Utilities**: Antivirus, File Compression, Backup, Disk Defragmenter (HDD only — rearranges fragmented sectors contiguously to reduce head seek time)."
          }
        }
      ]
    }
  ]
});
