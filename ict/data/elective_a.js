window.ICT_MODULES.push({
  id: "ea-all",
  paper: "electiveA",
  code: "Elective A",
  hours: { zh: "卷二選修 A · 數據庫 (Databases)", en: "Paper 2 Elective A · Databases" },
  title: { zh: "選修單元 A：數據庫 (Databases)", en: "Elective A: Databases" },
  subtitle: {
    zh: "全面涵蓋 DBMS 三層架構與完整性、關聯模型與實體關係圖 (ERD)、1NF–3NF 正規化實戰拆表、SQL-92 進階查詢（多表 JOIN、GROUP BY/HAVING、子查詢、DDL/DML）及數據庫保安與 NoSQL 視野。",
    en: "Complete mastery of DBMS 3-schema architecture & integrity, Relational Model & ERDs, 1NF–3NF Normalization with worked decomposition, advanced SQL-92 (JOINs, GROUP BY/HAVING, Subqueries, DDL/DML), security, and NoSQL overview."
  },
  topics: [
    {
      id: "ea-1",
      code: "EA1",
      importance: 3,
      title: { zh: "數據庫概念、DBMS 三層架構、完整性與 ACID 交易", en: "Database Concepts, 3-Schema Architecture, Integrity & ACID" },
      summary: {
        zh: "理解 DBMS 優於傳統檔案系統的原因、三層抽象架構與程式數據獨立性、三大數據庫完整性、ACID 交易特性及 NoSQL 概念。",
        en: "Understand DBMS vs file-based systems, 3-level abstraction & data independence, 3 integrity rules, ACID transactions, and NoSQL overview."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 數據庫管理系統 (DBMS) 相對傳統檔案系統的五大優勢", en: "1. Five Advantages of DBMS Over Flat File-Based Systems" }
        },
        {
          type: "list",
          items: [
            { zh: "**減少數據冗餘 (Reduced Data Redundancy)**：同一事實（如學生地址）集中存於一處，免卻多檔案重複儲存。", en: "**Reduced Data Redundancy**: Each fact is stored once centrally instead of duplicated across files." },
            { zh: "**提高數據一致性 (Improved Data Consistency)**：消除冗餘後，更新只需修改一次，不會出現「A 檔案已改、B 檔案未改」的矛盾。", en: "**Improved Data Consistency**: Updating a fact in one place prevents conflicting records across departments." },
            { zh: "**程式與數據獨立性 (Program-Data Independence)**：數據結構（Schema）存放於**數據字典 (Data Dictionary / Metadata)**，更改欄位或實體儲存方式時無須重寫應用程式碼。", en: "**Program-Data Independence**: Structure is stored in a **Data Dictionary (Metadata)**; modifying schemas/storage does not break application code." },
            { zh: "**多用戶並發控制 (Concurrency Control)**：支援多名職員同時讀寫，透過**鎖定機制 (Locking)** 避免遺失更新 (Lost Update) 與髒讀。", en: "**Concurrency Control**: Enables simultaneous multi-user access using **locking** to prevent lost updates." },
            { zh: "**強化保安、完整性與備份復原 (Security, Integrity & Recovery)**：集中設定角色權限 (RBAC)、自動強制主鍵/外鍵約束、透過交易日誌 (Transaction Log) 故障復原。", en: "**Security, Integrity & Recovery**: Centralised RBAC permissions, automatic key constraints, and crash recovery via transaction logs." }
          ]
        },
        {
          type: "diagram",
          title: { zh: "ANSI-SPARC 三層數據抽象架構 (Three-Schema Architecture)", en: "Three-Level Data Abstraction Architecture" },
          ascii: "+-----------------+   +-----------------+   +-----------------+\n| External View 1 |   | External View 2 |   | External View 3 |  ← 外層 (External): 不同用戶所見介面/檢視表\n+-----------------+   +-----------------+   +-----------------+     (屏蔽敏感欄位，如教師看不到薪金)\n         \\                     |                     /\n          +--------------------+--------------------+\n                               |\n                 +---------------------------+\n                 |    Conceptual Schema      |  ← 概念層 (Conceptual): 全體邏輯結構 (資料表、欄位、關聯、約束)\n                 +---------------------------+     [邏輯數據獨立性：概念層改動不影響外層 View]\n                               |\n                 +---------------------------+\n                 |     Internal Schema       |  ← 內層 (Internal): 實體磁碟儲存方式、索引 (Index)、壓縮、分割\n                 +---------------------------+     [實體數據獨立性：換 SSD 或加索引不影響概念層與 SQL]",
          caption: {
            zh: "**數據庫管理員 (DBA)** 負責設計架構、監控效能、管理用戶權限、制定備份及災難復原策略。",
            en: "The **Database Administrator (DBA)** manages schema design, performance tuning, user privileges, backups, and disaster recovery."
          }
        },
        {
          type: "keyterms",
          title: { zh: "三大數據庫完整性 (Database Integrity) — 卷二必考定義！", en: "Three Types of Database Integrity (Must-Know Definitions!)" },
          items: [
            { term: { zh: "實體完整性 (Entity Integrity)", en: "Entity Integrity" }, def: { zh: "資料表中每一筆記錄都必須有一個唯一識別碼——**主鍵 (Primary Key) 的任何部分均不可為 `NULL` 且不可重複**。", en: "Every row must be uniquely identifiable — **no part of a Primary Key may be `NULL` or duplicated**." } },
            { term: { zh: "參照完整性 (Referential Integrity)", en: "Referential Integrity" }, def: { zh: "確保資料表之間的關聯有效：**子表中每一個非空外鍵 (Foreign Key) 值，必須存在於對應父表的主鍵中**（禁止「孤兒記錄 Orphan Records」）。\n刪除/更新父表主鍵時可設：`RESTRICT`（拒絕刪除）、`CASCADE`（連鎖刪除/更新子表）或 `SET NULL`。", en: "Keeps table links valid: **every non-null Foreign Key value must match an existing Primary Key in the parent table** (prevents orphan records).\nOn parent delete/update: `RESTRICT`, `CASCADE`, or `SET NULL`." } },
            { term: { zh: "值域完整性 (Domain Integrity)", en: "Domain Integrity" }, def: { zh: "確保欄位所有數值均符合定義的數據類型、範圍與格式約束（如 `CHECK (score BETWEEN 0 AND 100)`、`NOT NULL`、`UNIQUE`）。", en: "Ensures all column values conform to defined data types, ranges, and rules (`CHECK`, `NOT NULL`, `UNIQUE`)." } }
          ]
        },
        {
          type: "callout",
          variant: "info",
          title: { zh: "交易處理 ACID 特性 & 現代非關聯式數據庫 (NoSQL) 視野", en: "ACID Transactions & Modern NoSQL Overview (2025+ Syllabus)" },
          text: {
            zh: "**ACID 特性**（如銀行轉帳：扣 A 帳戶 + 加 B 帳戶）：**A 原子性 (Atomicity)** 全成功或全回滾 `ROLLBACK`；**C 一致性 (Consistency)** 總金額守恆且合乎約束；**I 隔離性 (Isolation)** 並發交易互不干擾；**D 持久性 (Durability)** `COMMIT` 後即使斷電仍永久保存。\n**NoSQL（2025+ 新課綱概念）**：面對海量**非結構化 / 半結構化大數據**（如社交媒體貼文、IoT 日誌、JSON 文件），傳統 RDBMS 固定表格與橫向擴展較受限；NoSQL（文件型如 MongoDB、鍵值型如 Redis、圖形型）提供**彈性結構 (Schema-less)** 與極佳**水平擴展性 (Horizontal Scaling)**。",
            en: "**ACID** (e.g. bank transfer): **Atomicity** (all-or-nothing `COMMIT`/`ROLLBACK`), **Consistency** (preserves all constraints), **Isolation** (concurrent txns don't interfere), **Durability** (persisted after commit).\n**NoSQL (2025+ context)**: Built for massive **unstructured/semi-structured Big Data** (social feeds, JSON, IoT logs) where flexible schemas and **horizontal scaling** outperform rigid RDBMS tables."
          }
        }
      ]
    },
    {
      id: "ea-2",
      code: "EA2",
      importance: 3,
      title: { zh: "關聯模型、各類鍵值 (Keys) 與實體關係圖 (ERD)", en: "Relational Model, Keys & Entity-Relationship Diagrams (ERD)" },
      summary: {
        zh: "精準區分七種鍵值 (Superkey/Candidate/Primary/Composite/Foreign)，熟練繪畫 ERD 與「拆解 M:N 多對多關係」轉換為關聯表結構！",
        en: "Distinguish all key types, draw Chen/Crow's Foot ERDs, and apply exact rules to convert 1:1, 1:N, and M:N relationships into relational schemas."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "關聯模型與七大鍵值 (Keys) 精確定義", en: "Relational Terminology & Key Types" },
          items: [
            { term: { zh: "關聯模型術語", en: "Relational Terms" }, def: { zh: "**Relation** = 資料表 (Table)；**Tuple** = 記錄/列 (Row)；**Attribute** = 欄位/屬性 (Column)；**Degree** = 屬性數目（欄數）；**Cardinality** = 記錄數目（列數）。", en: "**Relation** = Table; **Tuple** = Row/Record; **Attribute** = Column/Field; **Degree** = # of columns; **Cardinality** = # of rows." } },
            { term: { zh: "超鍵 (Superkey) vs 候選鍵 (Candidate Key)", en: "Superkey vs Candidate Key" }, def: { zh: "**超鍵**：任何能唯一識別記錄的屬性集合（可能含多餘欄位，如 `{HKID, Name}`）；**候選鍵**：**極小超鍵**（移除任何一個屬性即喪失唯一性，如 `{HKID}` 或 `{StudentID}`）。", en: "**Superkey**: Any attribute set uniquely identifying a tuple (may have extra cols); **Candidate Key**: A **minimal superkey** (no redundant attributes)." } },
            { term: { zh: "主鍵 (Primary Key) 與替代鍵 (Alternate Key)", en: "Primary Key & Alternate Key" }, def: { zh: "從多個候選鍵中選定一個作為**主鍵 (PK)**；其餘未被選中的候選鍵稱為**替代鍵**（可設 `UNIQUE`）。", en: "One Candidate Key chosen as the **Primary Key (PK)**; remaining Candidate Keys become **Alternate Keys**." } },
            { term: { zh: "複合鍵 (Composite Key) 與代理鍵 (Surrogate Key)", en: "Composite Key & Surrogate Key" }, def: { zh: "**複合鍵**：由兩個或以上屬性共同組成的主鍵（如選課表 `{StudentID, CourseID}`）；**代理鍵**：系統自動產生的無業務意義流水號主鍵（如 `OrderID = 1001, 1002`）。", en: "**Composite Key**: PK composed of 2+ attributes (e.g. `{StudentID, CourseID}`); **Surrogate Key**: System-generated artificial ID (`AutoIncrement`)." } },
            { term: { zh: "外鍵 (Foreign Key, FK)", en: "Foreign Key (FK)" }, def: { zh: "資料表中參照另一資料表（或自身）主鍵的屬性，用於建立資料表關聯並維持參照完整性。**注意：外鍵可以重複，且在可選關係中可為 `NULL`！**", en: "Attribute referencing a Primary Key in another (or same) table to establish links. **Note: FKs CAN repeat and CAN be `NULL` (if optional)!**" } }
          ]
        },
        {
          type: "heading",
          text: { zh: "實體關係圖 (ERD) 轉換為關聯表結構的三大鐵律（卷二必考！）", en: "3 Golden Rules: Converting ERD to Relational Schema (Exam Staple!)" }
        },
        {
          type: "table",
          headers: [
            { zh: "關係基數 (Cardinality)", en: "Relationship Cardinality" },
            { zh: "轉換規則 (ERD → Tables)", en: "Conversion Rule (ERD → Tables)" },
            { zh: "實例示範 (底線=PK, *斜體*=FK)", en: "Example (Underline=PK, FK marked)" }
          ],
          rows: [
            [
              { zh: "**1:1 (一對一)**\n例：每位校長管理一間學校", en: "**1:1 (One-to-One)**\nE.g. Principal manages School" },
              { zh: "將其中一方的主鍵加入另一方作為外鍵（通常放在可選 `0..1` 或從屬方，並設 `UNIQUE`）。", en: "Place one entity's PK as a `UNIQUE` FK in the other table (preferably the optional/dependent side)." },
              { zh: "`SCHOOL(SchoolID, SName, PrincipalID[FK])`", en: "`SCHOOL(SchoolID, SName, PrincipalID[FK])`" }
            ],
            [
              { zh: "**1:N (一對多)**\n例：一個班別有多名學生", en: "**1:N (One-to-Many)**\nE.g. Class has many Students" },
              { zh: "**永遠把「1」方的主鍵加入「多 (N)」方的資料表作為外鍵！**（切勿反過來，否則會出現多值違反 1NF！）", en: "**ALWAYS post the '1'-side PK as a FK into the 'Many (N)'-side table!** (Never the reverse!)" },
              { zh: "`CLASS(ClassID, Room)`\n`STUDENT(StudID, Name, ClassID[FK])`", en: "`CLASS(ClassID, Room)`\n`STUDENT(StudID, Name, ClassID[FK])`" }
            ],
            [
              { zh: "**M:N (多對多)**\n例：學生可選修多科，一科有多名學生", en: "**M:N (Many-to-Many)**\nE.g. Student enrols in Courses" },
              { zh: "**必須拆解為兩個 1:N 關係，並建立一張新的「連接表 / 中介表 (Junction / Associative Table)」**！新表包含兩邊的 PK 作為 FK（組成複合主鍵），並放置屬於該關係的屬性（如成績 `Grade`）。", en: "**MUST decompose into two 1:N links via a new Junction/Associative Table** containing both PKs as FKs (forming a composite PK) plus any relationship attributes (e.g. `Grade`)." },
              { zh: "`STUDENT(StudID, Name)`\n`COURSE(CourseID, Title)`\n`ENROL(StudID[PK,FK], CourseID[PK,FK], Grade)`", en: "`STUDENT(StudID, Name)`\n`COURSE(CourseID, Title)`\n`ENROL(StudID[PK,FK], CourseID[PK,FK], Grade)`" }
            ]
          ]
        },
        {
          type: "diagram",
          title: { zh: "拆解 M:N 多對多關係圖示 (Crow's Foot 鴉足標記)", en: "Decomposing M:N Relationship (Crow's Foot Notation)" },
          ascii: "Before (概念 ERD — 不可直接建表):\n  [ STUDENT ]  >---------<  [ COURSE ]     (M:N)\n\nAfter (拆解為兩組 1:N，新增連接表 ENROL):\n  [ STUDENT ]  ||-------<  [ ENROL ]  >-------||  [ COURSE ]\n   StudID (PK)            StudID (PK, FK)          CourseID (PK)\n   Name                   CourseID (PK, FK)        Title\n                          Grade, EnrolDate         Credits",
          caption: { zh: "記住口訣：看到 M:N，中間加一表，兩頭變 1:N，關係屬性（如 Grade、Quantity）放中間！", en: "Rule of thumb: Break every M:N by inserting a middle table; relationship attributes (e.g. Grade, Qty) belong in that middle table!" }
        }
      ]
    },
    {
      id: "ea-3",
      code: "EA3",
      importance: 3,
      title: { zh: "數據庫正規化 (Normalization: 1NF → 2NF → 3NF) 與反正規化", en: "Database Normalization (1NF → 2NF → 3NF) & Denormalization" },
      summary: {
        zh: "選修 A 最重磅得分題！徹底理解三大數據異常、部分依賴 vs 傳遞依賴，完整演練由 UNF 逐步拆解至 3NF，以及反正規化的取捨。",
        en: "Highest-scoring Elective A topic! Master the 3 update anomalies, partial vs transitive dependencies, full UNF → 3NF walkthrough, and denormalization trade-offs."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "為何要正規化？消除三大數據異常 (Data Anomalies)", en: "Why Normalize? Eliminating the 3 Data Anomalies" },
          items: [
            { term: { zh: "插入異常 (Insertion Anomaly)", en: "Insertion Anomaly" }, def: { zh: "未有相關附屬資料時無法新增獨立實體（例：未有學生報讀某新課程前，無法於單一大表中新增該課程資料）。", en: "Cannot insert a valid new entity without unrelated data (e.g. cannot record a new course until a student enrols)." } },
            { term: { zh: "刪除異常 (Deletion Anomaly)", en: "Deletion Anomaly" }, def: { zh: "刪除某筆記錄時意外連帶遺失其他仍有用的資料（例：刪除某課程最後一名學生的選課記錄時，把該課程名稱與導師資料一併刪光）。", en: "Deleting one record unintentionally wipes out other valuable independent data (e.g. removing the last enrolled student deletes all course info)." } },
            { term: { zh: "更新異常 (Update / Modification Anomaly)", en: "Update Anomaly" }, def: { zh: "同一資料重複出現於多列，修改時若遺漏部分列即造成**數據不一致**（例：陳老師改了電話，卻只改了其中 3 筆記錄，另 2 筆仍留舊電話）。", en: "Redundant copies must all be updated; updating only some rows causes **data inconsistency**." } }
          ]
        },
        {
          type: "table",
          title: { zh: "三大範式定義與檢查口訣 (1NF · 2NF · 3NF)", en: "Normal Forms Summary (1NF · 2NF · 3NF)" },
          headers: [
            { zh: "範式", en: "Normal Form" },
            { zh: "必須滿足條件", en: "Requirements" },
            { zh: "核心檢查與修正動作", en: "Diagnostic & Fix" }
          ],
          rows: [
            [
              { zh: "**1NF (第一範式)**", en: "**1NF (First Normal Form)**" },
              { zh: "1. 每個儲存格只含**單一原子值 (Atomic Value)**（不可存逗號分隔多值）。\n2. 沒有**重複群組 (Repeating Groups)**（如 `Item1, Item2, Item3`）。\n3. 明確選定主鍵 (PK)。", en: "1. Every cell holds a **single atomic value**.\n2. **No repeating groups** (e.g. `Item1, Item2`).\n3. Primary Key defined." },
              { zh: "把重複群組拆出多列或獨立新表，並將主鍵擴展為複合主鍵。", en: "Flatten repeating groups into separate rows/tables with a composite PK." }
            ],
            [
              { zh: "**2NF (第二範式)**", en: "**2NF (Second Normal Form)**" },
              { zh: "滿足 1NF + **消除所有部分依賴 (No Partial Dependency)**：每個非鍵屬性必須**完全依賴於整個主鍵**，不可只依賴複合主鍵的其中一部分！", en: "In 1NF + **NO Partial Dependencies**: every non-key attribute must depend on the **ENTIRE primary key**, never just part of a composite PK." },
              { zh: "💡 **秒殺技巧**：若某資料表的主鍵只是**單一欄位**，則符合 1NF 時**自動符合 2NF**！只須檢查複合主鍵的表，把只依賴部分主鍵的欄位拆成獨立表。", en: "💡 **Shortcut**: A 1NF table with a **single-column PK is automatically in 2NF**! For composite PKs, extract attributes depending on only part of the PK into their own table." }
            ],
            [
              { zh: "**3NF (第三範式)**", en: "**3NF (Third Normal Form)**" },
              { zh: "滿足 2NF + **消除所有傳遞依賴 (No Transitive Dependency)**：任何**非鍵屬性不可依賴另一個非鍵屬性**（`PK → A → B` 不允許！）。", en: "In 2NF + **NO Transitive Dependencies**: no **non-key attribute may depend on another non-key attribute** (`PK → A → B` forbidden!)." },
              { zh: "把決定者 `A` 及其依賴者 `B` 抽出成新表（`A` 為新表 PK），原表保留 `A` 作為外鍵！\n口訣：「**The key, the whole key (2NF), and nothing but the key (3NF)**」。", en: "Extract determinant `A` and dependent `B` into a new table (`A` as PK), keeping `A` as a FK in the original table!\nMantra: **'The key, the whole key (2NF), and nothing but the key (3NF)'**." }
            ]
          ]
        },
        {
          type: "example",
          title: { zh: "⭐ 完整實戰拆表：UNF → 1NF → 2NF → 3NF", en: "⭐ Complete Worked Decomposition: UNF → 1NF → 2NF → 3NF" },
          problem: {
            zh: "現有一張未正規化的訂單表：\n`ORDER_UNF(OrderID, OrderDate, CustID, CustName, CustDistrict, {ProdID, ProdName, UnitPrice, Qty})`\n已知：每位顧客有唯一 `CustID`；每張訂單對應一位顧客；每個產品有唯一 `ProdID` 及對應 `ProdName, UnitPrice`。請逐步正規化至 **3NF**！",
            en: "Given an unnormalized order table:\n`ORDER_UNF(OrderID, OrderDate, CustID, CustName, CustDistrict, {ProdID, ProdName, UnitPrice, Qty})`\nNormalize step-by-step to **3NF**!"
          },
          solution: {
            zh: "**Step 1 — 轉為 1NF**（展開重複群組 `{...}`，複合主鍵為 `OrderID + ProdID`）：\n• `ORDER_1NF(`<u>OrderID</u>`, `<u>ProdID</u>`, OrderDate, CustID, CustName, CustDistrict, ProdName, UnitPrice, Qty)`\n\n**Step 2 — 轉為 2NF**（檢查複合主鍵的**部分依賴**）：\n• `OrderDate, CustID, CustName, CustDistrict` **只依賴 `OrderID`** → 拆出 `ORDERS` 表！\n• `ProdName, UnitPrice` **只依賴 `ProdID`** → 拆出 `PRODUCT` 表！\n• `Qty` 同時依賴 `(OrderID, ProdID)` → 留在 `ORDER_ITEM` 表！\n結果 (2NF)：\n1. `ORDERS(`<u>OrderID</u>`, OrderDate, CustID, CustName, CustDistrict)`\n2. `PRODUCT(`<u>ProdID</u>`, ProdName, UnitPrice)`\n3. `ORDER_ITEM(`<u>OrderID</u>`[FK], `<u>ProdID</u>`[FK], Qty)`\n\n**Step 3 — 轉為 3NF**（檢查非鍵屬性之間的**傳遞依賴**）：\n• 在 `ORDERS` 表中：`OrderID → CustID → (CustName, CustDistrict)`！`CustName` 與 `CustDistrict` 傳遞依賴於非鍵屬性 `CustID` → 拆出 `CUSTOMER` 表！\n**最終 3NF 結構（4 張表）：**\n1. `CUSTOMER(`<u>CustID</u>`, CustName, CustDistrict)`\n2. `ORDERS(`<u>OrderID</u>`, OrderDate, CustID[FK])`\n3. `PRODUCT(`<u>ProdID</u>`, ProdName, UnitPrice)`\n4. `ORDER_ITEM(`<u>OrderID</u>`[FK], `<u>ProdID</u>`[FK], Qty)`",
            en: "**Step 1 — 1NF** (Flatten repeating group; composite PK = `OrderID, ProdID`):\n• `ORDER_1NF(OrderID*, ProdID*, OrderDate, CustID, CustName, CustDistrict, ProdName, UnitPrice, Qty)`\n\n**Step 2 — 2NF** (Remove **Partial Dependencies**):\n• `OrderDate, CustID, CustName, CustDistrict` depend ONLY on `OrderID` → `ORDERS`.\n• `ProdName, UnitPrice` depend ONLY on `ProdID` → `PRODUCT`.\n• `Qty` depends on `(OrderID, ProdID)` → `ORDER_ITEM`.\n\n**Step 3 — 3NF** (Remove **Transitive Dependency** `OrderID → CustID → CustName, CustDistrict`):\n**Final 3NF (4 tables):**\n1. `CUSTOMER(CustID [PK], CustName, CustDistrict)`\n2. `ORDERS(OrderID [PK], OrderDate, CustID [FK])`\n3. `PRODUCT(ProdID [PK], ProdName, UnitPrice)`\n4. `ORDER_ITEM(OrderID [PK,FK], ProdID [PK,FK], Qty)`"
          }
        },
        {
          type: "callout",
          variant: "tip",
          title: { zh: "進階考點：何時要「反正規化」(Denormalization)？", en: "Advanced Question: Why Use Denormalization?" },
          text: {
            zh: "高度正規化（3NF）把數據拆散至大量資料表，查詢報表時須執行多表 `JOIN`，消耗大量 CPU/磁碟 I/O 導致**讀取效能變慢**。\n**反正規化**是在設計中**刻意引入受控冗餘**（例如在 `ORDERS` 表直接多存一個 `TotalAmount` 總金額欄位），以換取**更快的查詢速度**。代價：佔用更多儲存空間、寫入/更新更複雜，且須由程式或觸發器維護一致性。",
            en: "Strict 3NF splits data across many tables, requiring expensive multi-table `JOIN`s that **slow down read-heavy queries/reports**.\n**Denormalization** intentionally introduces controlled redundancy (e.g. storing a pre-calculated `TotalAmount` in `ORDERS`) to **boost query speed**, trading off extra storage and update complexity."
          }
        }
      ]
    },
    {
      id: "ea-4",
      code: "EA4",
      importance: 3,
      title: { zh: "SQL-92 完全攻略：DDL、DML、JOIN、GROUP BY 與子查詢", en: "SQL-92 Mastery: DDL, DML, JOINs, GROUP BY & Subqueries" },
      summary: {
        zh: "選修 A 佔分最高的實戰核心！精通執行次序、各類 JOIN、聚合分組 HAVING、相關子查詢 EXISTS、UNION 及全部考評局高頻失分陷阱。",
        en: "Highest-mark practical core of Elective A! Master execution order, all JOINs, GROUP BY/HAVING, correlated subqueries/EXISTS, UNION, and exam traps."
      },
      blocks: [
        {
          type: "formula",
          title: { zh: "SQL 查詢邏輯執行次序（背熟此行，永不寫錯 WHERE / HAVING / AS！）", en: "SQL Logical Execution Order (Eliminates 80% of SQL Bugs!)" },
          formula: "1. FROM / JOIN  →  2. WHERE  →  3. GROUP BY  →  4. HAVING  →  5. SELECT  →  6. DISTINCT  →  7. ORDER BY",
          explain: {
            zh: "• 因為 `WHERE` (第 2 步) 早於 `GROUP BY` (第 3 步) 與 `SELECT` (第 5 步) 執行，所以 **`WHERE` 中絕不可出現聚合函數 (`SUM/COUNT/AVG`) 或 `SELECT` 定義的欄位別名 (`AS`)**！\n• 對分組後的聚合結果進行篩選，必須用 **`HAVING`** (第 4 步)！\n• `ORDER BY` 最後執行 (第 7 步)，故可使用 `SELECT` 的別名排序。",
            en: "• Since `WHERE` (step 2) runs BEFORE `GROUP BY` (step 3) and `SELECT` (step 5), **`WHERE` can NEVER contain aggregate functions or `SELECT` aliases**!\n• Filter grouped aggregate results using **`HAVING`** (step 4)!\n• `ORDER BY` runs last (step 7), so it CAN reference `SELECT` aliases."
          }
        },
        {
          type: "code",
          lang: "sql",
          title: { zh: "1. DDL 建表約束 & DML 新增/修改/刪除", en: "1. DDL Table Creation Constraints & DML Modifications" },
          code: "-- 建立資料表並強制實體、參照與值域完整性\nCREATE TABLE STUDENT (\n  StudID   CHAR(5) PRIMARY KEY,\n  Name     VARCHAR(50) NOT NULL,\n  Class    VARCHAR(5),\n  Score    INT CHECK (Score BETWEEN 0 AND 100),\n  DeptID   CHAR(3),\n  FOREIGN KEY (DeptID) REFERENCES DEPT(DeptID)\n);\n\n-- 修改表結構與刪除表\nALTER TABLE STUDENT ADD Email VARCHAR(80);\nDROP TABLE TEMP_LOG;\n\n-- DML：新增、更新、刪除 (⚠️ 切勿忘記 WHERE!)\nINSERT INTO STUDENT (StudID, Name, Class, Score)\nVALUES ('S0099', 'Lam Ka Ho', '6A', 88);\n\nUPDATE STUDENT\nSET Score = Score + 5\nWHERE Class = '6A' AND Score <= 95;\n\nDELETE FROM STUDENT\nWHERE StudID = 'S0099';",
          note: {
            zh: "**`CHAR(n)` vs `VARCHAR(n)`**：`CHAR(5)` 固定佔 5 字元空間（適合定長代碼如學號 `S0001`）；`VARCHAR(50)` 變長儲存實際字元數（適合姓名/電郵，節省空間）。",
            en: "**`CHAR(n)` vs `VARCHAR(n)`**: `CHAR(5)` is fixed-length (best for fixed codes like `S0001`); `VARCHAR(50)` is variable-length (saves space for names/emails)."
          }
        },
        {
          type: "code",
          lang: "sql",
          title: { zh: "2. 篩選、分組聚合 (`GROUP BY` + `HAVING`) 與多表連接 (`JOIN`)", en: "2. Filtering, Grouping (`GROUP BY` + `HAVING`) & Multi-Table `JOIN`s" },
          code: "-- (A) 聚合與分組：找出「及格人數 (Score>=50) 達 10 人或以上」的班別及平均分\nSELECT Class, COUNT(*) AS PassCount, AVG(Score) AS AvgScore\nFROM STUDENT\nWHERE Score >= 50            -- 先過濾不及格的「列」\nGROUP BY Class               -- 再按班別分組\nHAVING COUNT(*) >= 10        -- 再過濾人數不足 10 人的「組」\nORDER BY AvgScore DESC;\n\n-- (B) INNER JOIN：只列出已報讀課程的學生與課程名稱\nSELECT s.Name, c.Title, e.Grade\nFROM STUDENT s\nINNER JOIN ENROL e ON s.StudID = e.StudID\nINNER JOIN COURSE c ON e.CourseID = c.CourseID\nWHERE c.Title LIKE '%Python%';\n\n-- (C) LEFT OUTER JOIN + IS NULL (超級高頻考題！找出「完全沒有報讀任何課程」的學生)\nSELECT s.StudID, s.Name\nFROM STUDENT s\nLEFT JOIN ENROL e ON s.StudID = e.StudID\nWHERE e.StudID IS NULL;\n\n-- (D) 自連接 (Self Join)：找出比自己班主任或上司薪金更高的員工\nSELECT e.Name AS EmpName, m.Name AS ManagerName\nFROM EMP e\nINNER JOIN EMP m ON e.ManagerID = m.EmpID\nWHERE e.Salary > m.Salary;",
          note: {
            zh: "**LEFT JOIN 與 COUNT 陷阱**：用 `LEFT JOIN` 統計每位學生報讀了多少科（包括 0 科的學生）時，**必須寫 `COUNT(e.CourseID)` 而非 `COUNT(*)`**！因為 `LEFT JOIN` 為 0 科學生產生的那 1 列中 `e.CourseID` 是 `NULL`，`COUNT(*)` 會錯誤算出 `1`，而 `COUNT(e.CourseID)` 忽略 `NULL` 正確算出 `0`！",
            en: "**LEFT JOIN + COUNT Trap**: When counting courses per student (including students with 0 courses) using `LEFT JOIN`, **MUST write `COUNT(e.CourseID)`, NOT `COUNT(*)`**! `COUNT(*)` counts the NULL-padded unmatched row as `1`, whereas `COUNT(e.CourseID)` ignores NULLs and accurately returns `0`!"
          }
        },
        {
          type: "code",
          lang: "sql",
          title: { zh: "3. 子查詢 (Subqueries)、`EXISTS` 與 `UNION`", en: "3. Subqueries, `EXISTS` & `UNION`" },
          code: "-- (A) 純量子查詢：找出分數高於全校平均分的學生\nSELECT Name, Score\nFROM STUDENT\nWHERE Score > (SELECT AVG(Score) FROM STUDENT);\n\n-- (B) 多列子查詢 (NOT IN / NOT EXISTS)：找出從未借書的會員\nSELECT MemberID, Name\nFROM MEMBER\nWHERE MemberID NOT IN (SELECT MemberID FROM LOAN WHERE MemberID IS NOT NULL);\n\n-- 等價且更安全的相關子查詢 NOT EXISTS：\nSELECT m.MemberID, m.Name\nFROM MEMBER m\nWHERE NOT EXISTS (\n  SELECT 1 FROM LOAN l WHERE l.MemberID = m.MemberID\n);\n\n-- (C) 聯集 UNION (自動去重) vs UNION ALL (保留重複，更快)\nSELECT Name FROM TEACHER\nUNION\nSELECT Name FROM STUDENT;",
          note: {
            zh: "**`NOT IN` 遇上 `NULL` 致命陷阱**：若子查詢結果包含哪怕一個 `NULL`，`x NOT IN (1, 2, NULL)` 永遠不會為真（回傳 0 筆資料）！因此用 `NOT IN` 須過濾 `IS NOT NULL`，或直接改用 `NOT EXISTS` / `LEFT JOIN ... IS NULL`。",
            en: "**`NOT IN` + `NULL` Trap**: If the subquery returns even ONE `NULL`, `NOT IN` evaluates to UNKNOWN and returns 0 rows! Guard with `IS NOT NULL` or prefer `NOT EXISTS` / `LEFT JOIN ... IS NULL`."
          }
        }
      ]
    },
    {
      id: "ea-5",
      code: "EA5",
      importance: 2,
      title: { zh: "數據庫保安、檢視表 (Views)、索引 (Indexes) 與表單報表", en: "Database Security, Views, Indexes, Forms & Reports" },
      summary: {
        zh: "掌握 View 保護私隱的原理、Index 加速查詢的代價、權限管控 (GRANT/REVOKE) 及表單/報表設計原則。",
        en: "Understand Views for privacy, Indexes speed-vs-write trade-off, RBAC (`GRANT`/`REVOKE`), and Forms vs Reports."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "實用數據庫對象與保安機制", en: "Database Objects & Security Mechanisms" },
          items: [
            { term: { zh: "檢視表 (VIEW — 虛擬資料表)", en: "VIEW (Virtual Table)" }, def: { zh: "由一條儲存的 `SELECT` 查詢定義，本身不複製實體數據。\n**兩大好處**：1) **強化私隱保安**（只暴露允許的欄位/列，隱藏薪金或身份證號）；2) **簡化複雜查詢**（封裝多表 `JOIN` 方便反覆使用）。", en: "Virtual table defined by a saved `SELECT` query (no data duplication).\n**2 Benefits**: 1) **Privacy/Security** (hides sensitive cols/rows); 2) **Simplifies complex multi-table joins**." } },
            { term: { zh: "索引 (INDEX)", en: "INDEX" }, def: { zh: "為常用作 `WHERE` / `JOIN` / `ORDER BY` 的欄位建立快速查找結構（如 B-Tree），**大幅加快 `SELECT` 查詢速度**。\n**代價**：佔用額外磁碟空間，且每次 `INSERT`/`UPDATE`/`DELETE` 都須同步更新索引，令**寫入變慢**。", en: "Lookup structure (e.g. B-Tree) on queried columns that **greatly accelerates `SELECT`**.\n**Trade-off**: Extra disk space and **slower `INSERT`/`UPDATE`/`DELETE`** because indexes must also be maintained." } },
            { term: { zh: "表單 (Form) vs 報表 (Report)", en: "Form vs Report" }, def: { zh: "**表單**：供用戶互動式**輸入、修改、查閱**單筆記錄，可內置下拉選單與有效性檢驗減少錯字；**報表**：供**唯讀彙總、分組統計、列印與管理層決策**使用（不可修改原數據）。", en: "**Form**: Interactive UI for **data entry/editing** with validation controls; **Report**: Read-only formatted **summaries, groupings, and printouts** for management decisions." } },
            { term: { zh: "權限管理 (`GRANT` / `REVOKE`)", en: "Access Rights (`GRANT` / `REVOKE`)" }, def: { zh: "遵循**最小權限原則 (Principle of Least Privilege)**，按角色（DBA、職員、唯讀訪客）只授予所需的 `SELECT`/`INSERT`/`UPDATE`/`DELETE` 權限。", en: "Apply **Principle of Least Privilege**, granting only necessary `SELECT`/`INSERT`/`UPDATE`/`DELETE` privileges per role." } }
          ]
        }
      ]
    }
  ]
});
