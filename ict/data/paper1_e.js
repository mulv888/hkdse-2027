window.ICT_MODULES.push({
  id: "p1-e",
  paper: "paper1",
  code: "Module E",
  hours: { zh: "必修 · 約 8 課時（精簡高頻重點）", en: "Compulsory · ~8 hrs (High-Yield Core)" },
  title: { zh: "單元 E：資訊及通訊科技對社會的影響", en: "Module E: Social Implications" },
  subtitle: {
    zh: "精準聚焦 DSE 必考社會議題：香港《個人資料(私隱)條例》六大保障原則 (PDPO)、知識產權與授權模式、人體工學與數碼鴻溝，以及 2025+ 新課綱重點——人工智能 (AI) 倫理與新興科技影響。",
    en: "Focused on high-yield DSE issues: Hong Kong PDPO's 6 Data Protection Principles, Intellectual Property & licensing, Ergonomics & Digital Divide, and 2025+ focus on AI Ethics & emerging tech."
  },
  topics: [
    {
      id: "p1-e-1",
      code: "E1",
      importance: 3,
      title: { zh: "私隱保障：香港《個人資料(私隱)條例》(PDPO) 六大原則", en: "Privacy Law: Hong Kong PDPO Six Data Protection Principles" },
      summary: {
        zh: "卷一長題目常客！熟背香港 PDPO 六項保障資料原則 (DPP1–DPP6)，並能套用至具體情境指出哪項原則被違反。",
        en: "Frequent Paper 1 question! Memorise HK PDPO's 6 Data Protection Principles (DPP1–DPP6) and apply them to real scenarios."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "香港《個人資料(私隱)條例》六項保障資料原則 (DPP1–DPP6)", en: "HK Personal Data (Privacy) Ordinance — 6 Data Protection Principles" },
          headers: [
            { zh: "原則", en: "Principle" },
            { zh: "核心規定", en: "Core Requirement" },
            { zh: "常見違規情境例子 (DSE 題型)", en: "Typical Violation Scenario" }
          ],
          rows: [
            [{ zh: "**DPP1：收集目的及方式**", en: "**DPP1: Purpose & Manner of Collection**" }, { zh: "須以合法、公平方式收集，**不得超乎適度 (Not excessive)**，並須告知收集目的及資料轉移對象。", en: "Collect lawfully & fairly, **not excessive** for purpose, and inform data subjects of purpose & transferees." }, { zh: "下載簡單計數機 App 卻強制要求存取通訊錄及身份證號碼。", en: "A simple calculator app forces users to submit HKID and contacts." }],
            [{ zh: "**DPP2：準確性及保留期間**", en: "**DPP2: Accuracy & Retention**" }, { zh: "採取切實步驟確保資料準確，且**保留時間不可超過達致目的實際所需**。", en: "Ensure data accuracy and **do not retain longer than necessary** for original purpose." }, { zh: "活動結束多年仍永久保留所有參加者身份證副本未刪除。", en: "Keeping event participants' HKID copies permanently years after the event." }],
            [{ zh: "**DPP3：資料的使用**", en: "**DPP3: Use of Personal Data**" }, { zh: "除非獲得資料當事人**自願及明示同意 (Prescribed consent)**，否則**不可用於新目的**（特別是直接促銷 Direct Marketing）。", en: "Must **not use data for a new purpose** (e.g. direct marketing) without **explicit consent**." }, { zh: "補習社未經家長同意，將學生電話號碼出售予第三方廣告商。", en: "A tuition centre sells student phone numbers to third-party marketers without consent." }],
            [{ zh: "**DPP4：資料保安**", en: "**DPP4: Data Security**" }, { zh: "採取切實保安措施防止個人資料未獲准許或意外地被查閱、處理、刪除或洩漏。", en: "Take practicable security steps against unauthorised/accidental access, erasure, or leaks." }, { zh: "員工把未加密客戶資料庫存於 USB 並遺失，或伺服器密碼設為 `123456`。", en: "Losing an unencrypted USB of client records, or storing plaintext passwords." }],
            [{ zh: "**DPP5：資訊須在一般情況下可提供**", en: "**DPP5: Openness / Transparency**" }, { zh: "機構須公開其私隱政策、所持個人資料種類及主要用途（如網站上的 Privacy Policy）。", en: "Make privacy policies, types of data held, and main purposes publicly available." }, { zh: "網店收集客戶資料卻完全沒有提供私隱政策聲明。", en: "An e-shop collects customer data without publishing any privacy policy." }],
            [{ zh: "**DPP6：查閱及改正個人資料**", en: "**DPP6: Access & Correction**" }, { zh: "資料當事人有權要求查閱機構持有的自身資料副本，並要求更正不準確的資料。", en: "Individuals have the right to request access to and correction of their own personal data." }, { zh: "公司拒絕會員查閱自己的個人檔案或拒絕修改錯誤地址。", en: "A company refuses a member's request to view or correct their wrong address." }]
          ]
        }
      ]
    },
    {
      id: "p1-e-2",
      code: "E2",
      importance: 3,
      title: { zh: "知識產權 (IP)、軟件授權與 Creative Commons", en: "Intellectual Property (IP), Software Licensing & Creative Commons" },
      summary: {
        zh: "區分版權/專利/商標、免費/共享/開源軟件授權，及 Creative Commons (CC) 四大授權符號。",
        en: "Distinguish Copyright/Patent/Trademark, Freeware/Shareware/Open-Source licenses, and the 4 Creative Commons conditions."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "知識產權與軟件授權類型", en: "Intellectual Property & Software Licenses" },
          items: [
            { term: { zh: "版權 (Copyright)", en: "Copyright" }, def: { zh: "保護原創文學、音樂、藝術、影片及**電腦程式碼**的表達形式。**創作完成即自動生效**，無須註冊！香港《版權條例》允許有限度的「公平處理」(Fair Dealing) 作研究、批評、新聞報道或教學用途。", en: "Protects original literary, artistic, musical works & **source code**. **Automatic upon creation** (no registration needed). HK Copyright Ordinance permits limited 'Fair Dealing' for education/research/news." } },
            { term: { zh: "專利 (Patent) vs 商標 (Trademark)", en: "Patent vs Trademark" }, def: { zh: "**專利**須正式註冊，保護新發明與技術方法；**商標**保護品牌標誌、口號及商業識別符號。", en: "**Patent** (must be registered) protects novel inventions/processes; **Trademark** protects brand logos, names, and slogans." } },
            { term: { zh: "專有軟件 (Proprietary / Closed-Source)", en: "Proprietary Software" }, def: { zh: "原始碼保密，用戶購買使用授權 (License) 但不可修改或再發佈（例：Microsoft Office, Adobe Photoshop）。", en: "Source code kept secret; users buy a license to use without right to modify/redistribute." } },
            { term: { zh: "開源軟件 (Open-Source Software, OSS)", en: "Open-Source Software (OSS)" }, def: { zh: "公開原始碼，容許任何人檢視、修改與再發佈（須遵守如 GPL/MIT 條款）。好處：社群共同審計漏洞、高度客製化、減低授權費（例：Python, Linux, LibreOffice）。", en: "Source code openly available to inspect, modify & share (under GPL/MIT etc.). Benefits: community security audits, customisable, lower license cost (e.g. Python, Linux)." } },
            { term: { zh: "免費軟件 (Freeware) vs 共享軟件 (Shareware)", en: "Freeware vs Shareware" }, def: { zh: "**Freeware** 免費無限期使用，但**仍受版權保護且不公開原始碼**（不可隨意反編譯或轉售）；**Shareware** 提供免費試用期或精簡功能，期滿須付費解鎖完整版。", en: "**Freeware** is free to use indefinitely but **still copyrighted & closed-source**; **Shareware** offers a free trial/limited version requiring payment later." } }
          ]
        },
        {
          type: "table",
          title: { zh: "共享創意授權 (Creative Commons, CC) 四大核心條款", en: "Creative Commons (CC) 4 Core Conditions" },
          headers: [
            { zh: "代碼", en: "Code" },
            { zh: "名稱", en: "Name" },
            { zh: "含義", en: "Meaning" }
          ],
          rows: [
            [{ zh: "`BY`", en: "`BY`" }, { zh: "姓名標示 (Attribution)", en: "Attribution" }, { zh: "使用作品時**必須註明原作者姓名與出處**。", en: "Must **credit the original creator**." }],
            [{ zh: "`NC`", en: "`NC`" }, { zh: "非商業性 (Non-Commercial)", en: "Non-Commercial" }, { zh: "**不得**將作品用於任何商業牟利用途。", en: "May **NOT** use the work for commercial purposes." }],
            [{ zh: "`ND`", en: "`ND`" }, { zh: "禁止改作 (No Derivatives)", en: "No Derivatives" }, { zh: "只可原封不動分享，**不可修改、剪輯或二次創作**。", en: "Must share verbatim; **NO remixing or modifications** allowed." }],
            [{ zh: "`SA`", en: "`SA`" }, { zh: "相同方式分享 (ShareAlike)", en: "ShareAlike" }, { zh: "若修改並衍生成新作品，新作品**必須採用相同的 CC 授權條款**發佈。", en: "Derivative works **must be licensed under identical CC terms**." }]
          ]
        }
      ]
    },
    {
      id: "p1-e-3",
      code: "E3",
      importance: 3,
      title: { zh: "人工智能倫理、新興科技、健康與數碼鴻溝（2025+ 重點）", en: "AI Ethics, Emerging Tech, Health & Digital Divide (2025+ Focus)" },
      summary: {
        zh: "掌握 2025–2027 新課綱大熱考點：AI 與生成式 AI 倫理風險、人體工學、綠色 ICT、數碼鴻溝與科技對就業的影響。",
        en: "Master hot 2025–2027 exam topics: AI & Generative AI ethics, Ergonomics, Green ICT, Digital Divide, and workforce impacts."
      },
      blocks: [
        {
          type: "heading",
          text: { zh: "1. 人工智能 (AI) 與生成式 AI 的社會機遇與倫理風險", en: "1. Artificial Intelligence & Generative AI: Opportunities & Ethical Risks" }
        },
        {
          type: "list",
          items: [
            { zh: "**演算法偏見與歧視 (Algorithmic Bias)**：若 AI 訓練數據本身包含歷史性別/種族偏見，AI 在招聘、貸款審批或人臉辨識上就會放大歧視。", en: "**Algorithmic Bias**: If training datasets contain historical biases, AI amplifies unfair discrimination in hiring, credit scoring, or facial recognition." },
            { zh: "**深度偽造與虛假資訊 (Deepfakes & Misinformation)**：AI 合成逼真的假人聲與假影片，被用於詐騙、勒索及干擾輿論，破壞社會信任。", en: "**Deepfakes & Misinformation**: AI-synthesised fake voices/videos fuel scams, fraud, and disinformation." },
            { zh: "**AI 幻覺與問責性 (Hallucinations & Accountability)**：生成式 AI 可能編造看似合理的錯誤事實；若自動駕駛或 AI 醫療診斷出錯，法律責任歸屬（開發商 vs 用戶）難以界定。", en: "**Hallucinations & Accountability**: GenAI can fabricate plausible-sounding falsehoods; liability when autonomous vehicles or medical AI err is legally complex." },
            { zh: "**版權與數據私隱 (Copyright & Data Privacy)**：未經授權爬取受版權保護的畫作/文章訓練模型引起訴訟；員工把公司機密貼入公眾 AI 聊天機器人可能導致資料外洩。", en: "**Copyright & Privacy**: Scraping copyrighted works for training sparks IP disputes; pasting confidential company data into public chatbots risks data leaks." },
            { zh: "**就業轉型 (Job Displacement & Reskilling)**：重複性文書、客服及基礎工作易被自動化取代，但同時創造 AI 工程、數據分析與監管新職位，社會須加強終身學習與再培訓。", en: "**Workforce Shift**: Repetitive jobs face automation while new roles in AI/data emerge, demanding continuous reskilling." }
          ]
        },
        {
          type: "heading",
          text: { zh: "2. 數碼鴻溝、人體工學與綠色 ICT", en: "2. Digital Divide, Ergonomics & Green ICT" }
        },
        {
          type: "list",
          items: [
            { zh: "**數碼鴻溝 (Digital Divide)**：不同群體（低收入家庭、長者、偏遠地區居民、殘疾人士）在**獲取科技設備/網絡**及**數碼素養 (Digital Literacy)** 上的差距。\n**縮窄措施**：政府提供免費公共 Wi-Fi、資助低收入學生購置平板電腦、長者數碼培訓班、推動網頁無障礙設計。", en: "**Digital Divide**: Inequality in **ICT access** and **digital literacy** across income, age, geography, or disability.\n**Solutions**: Free public Wi-Fi, device subsidies for students, senior digital literacy classes, accessible web/app design." },
            { zh: "**健康與人體工學 (Health & Ergonomics)**：\n• **重複性勞損 (RSI) / 腕管綜合症**：使用人體工學鍵盤滑鼠、保持手腕平直、定時伸展。\n• **電腦視覺綜合症 (眼部疲勞)**：螢幕置於眼平線略下方 50–70cm、防眩光、實踐 **20-20-20 法則**（每 20 分鐘遠眺 20 呎外 20 秒）。\n• **頸背痛**：可調高度座椅、保持正確坐姿、定時站立休息。", en: "**Health & Ergonomics**:\n• **RSI / Carpal Tunnel**: Ergonomic keyboard/mouse, neutral wrists, regular breaks.\n• **Computer Vision Syndrome**: Monitor slightly below eye level 50–70cm away, anti-glare, **20-20-20 rule**.\n• **Back/Neck Strain**: Adjustable chair with lumbar support, proper posture." },
            { zh: "**綠色資訊科技 (Green ICT)**：減低能源消耗（電源休眠管理、高能效數據中心、虛擬化減少實體伺服器數量）、減少電子廢物 (E-waste — 妥善回收重金屬如鉛/汞、延長設備壽命、推行無紙化辦公)。", en: "**Green ICT**: Energy efficiency (sleep modes, virtualised servers, green data centres), e-waste reduction (proper recycling of toxic heavy metals like lead/mercury, extending hardware life, paperless workflows)." }
          ]
        }
      ]
    }
  ]
});
