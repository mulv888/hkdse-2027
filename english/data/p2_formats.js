/* ==========================================================================
   Paper 2 不同類型文章格式合集（10 大必考文體 + 稱謂下款矩陣 + 語氣升級對照）
   涵蓋 Part A 及 Part B 全部主流 HKDSE Text Types，附擬真答題紙排版示範
   ========================================================================== */

window.ENG_P2_FORMATS = {
  /* 語氣與書信稱謂下款速查矩陣 */
  registerMatrix: [
    { recipient: "報章編輯（不知姓名）", salutation: "Dear Editor,", signoff: "Yours faithfully,", sender: "Chris Wong", tone: "Formal（嚴謹、具說服力）", note: "HKDSE 最常考！切勿寫 Yours sincerely！" },
    { recipient: "機構負責人／經理／校長（不知姓名）", salutation: "Dear Sir/Madam,", signoff: "Yours faithfully,", sender: "Chris Wong", tone: "Formal（禮貌、客觀專業）", note: "不知姓氏一律配 faithfully。" },
    { recipient: "已知姓氏之收件人（如 Mr. Chan / Ms. Lam）", salutation: "Dear Mr. Chan,", signoff: "Yours sincerely,", sender: "Chris Wong", tone: "Formal / Semi-formal", note: "知姓氏一律配 sincerely（英式不用逗號也可，惟 HKDSE 建議統一加逗號）。" },
    { recipient: "學校同學／公眾讀者（演講辭）", salutation: "Good morning, Principal, teachers and fellow students,", signoff: "Thank you. / Thank you for listening.", sender: "（絕不署名！）", tone: "Semi-formal to Engaging", note: "演講辭結尾寫 Thank you. 即止，切勿畫蛇添足加上 Yours sincerely 或日期！" },
    { recipient: "朋友／筆友／表親（私人書信或電郵）", salutation: "Dear Amy, / Hi Amy,", signoff: "Best wishes, / Take care, / Cheers,", sender: "Chris（只需名字）", tone: "Informal（親切自然）", note: "可使用縮寫（I'm, don't）、感嘆號及地道日常用語。" },
    { recipient: "報告／建議書／專題文章／書評", salutation: "（不設上款稱謂！）", signoff: "（一般不設書信祝頌語；Proposal/Report 視需要可於頁首或文末註明 Prepared by）", sender: "By Chris Wong（文章可放標題下）", tone: "視文體：Report/Proposal 偏 Formal；Article/Review 偏 Semi-formal", note: "切忌把 Proposal 或 Article 寫成書信格式！" }
  ],

  /* 十大核心文體完整格式庫 */
  genres: [
    {
      id: "fmt-lte",
      code: "01",
      name: "Letter to the Editor（致編輯的信）",
      freq: "Part B 超級常客（近十年極高頻）",
      register: "Formal & Persuasive（正式、嚴謹、富社會評論感）",
      summary: "就某項社會議題、新聞報道或早前刊登的讀者來信表達清晰立場，說服報章讀者與公眾關注或支持某項主張。",
      mustHave: ["頂格上款 Dear Editor,", "首段必須交代「回應哪則新聞／議題」並亮明立場", "正文 2–3 段（建議含 1 段 Concession & Rebuttal 讓步反駁）", "結尾呼籲行動或展望未來", "下款必須為 Yours faithfully, ＋ 題目指定假名（如 Chris Wong）"],
      layout: [
        { style: "flush", text: "Dear Editor,", note: "【上款】頂格，切忌寫 Dear Mr. Editor 或加地址日期（除非題目要求）" },
        { style: "body", text: "I am writing in response to the recent article regarding [topic] published in your newspaper on [date] / to express my grave concern over [issue]. While some argue that [opposing view], I firmly believe that [your clear thesis].", note: "【引言段】交代背景／回應文章 ＋ 鮮明立場（Thesis）" },
        { style: "body", text: "First and foremost, [Argument 1 — Topic Sentence]. [Elaboration + Concrete Hong Kong example + Impact].", note: "【正文一】最強論點（PEEL 結構）" },
        { style: "body", text: "Equally compelling is the fact that [Argument 2 — Topic Sentence]. [Elaboration + Evidence/Reasoning].", note: "【正文二】第二核心論點（避免機械寫 Secondly）" },
        { style: "body", text: "Admittedly, sceptics may contend that [Counter-argument]. Valid as this concern may appear on the surface, it overlooks [Rebuttal]. In reality, [Why your stance prevails].", note: "【正文三 · 5** 關鍵】讓步＋精準反駁，立顯思辨深度" },
        { style: "body", text: "In conclusion, [restate thesis in fresh words]. It is high time that the government and the public joined hands to [specific call to action]. Only by doing so can we [inspiring vision].", note: "【結尾段】重申立場 ＋ 具體呼籲（可用 Only by... 倒裝收尾）" },
        { style: "flush", text: "Yours faithfully,", note: "【祝頌語】配 Dear Editor 一律用 Yours faithfully,（f 小寫！）" },
        { style: "flush", text: "Chris Wong", note: "【署名】使用題目指定姓名（若無指定則用 Chris Wong，絕勿寫真名！）" }
      ],
      traps: [
        "❌ 寫成 Yours sincerely,（不知道編輯姓氏必須用 Yours faithfully,）。",
        "❌ 忘記「寫信給報章」的語境，整篇寫得像純粹的課堂 Essay，開首沒提及 newspaper / columns / recent article。",
        "❌ 誤以為編輯能直接立法或改政策，寫成 'I hope you can pass a law...' —— 編輯只能刊登文章引起公眾討論，應寫 'I hope your newspaper can shed light on this issue / urge the authorities to...'。"
      ],
      openers: [
        "I am writing to express my profound concern regarding the escalating issue of...",
        "With reference to the article entitled '...' published in your newspaper last week, I would like to share my perspective on...",
        "I am writing in response to the heated debate over whether..."
      ]
    },
    {
      id: "fmt-formal-letter",
      code: "02",
      name: "Formal Letter / Complaint / Application（正式書信／投訴信／申請信）",
      freq: "Part A & Part B 皆常見",
      register: "Formal, Courteous yet Assertive（禮貌得體、條理清晰、不卑不亢）",
      summary: "用於向校長、機構經理、政府部門或活動主辦單位提出投訴、申請資助／職位、邀請嘉賓或查詢安排。",
      mustHave: ["精準上款（Dear Mr. Chan, 或 Dear Sir/Madam,）", "（選配）Re: 主旨行方便正式公務辨識", "首段開門見山說明寫信目的（I am writing to apply for / complain about / invite...）", "正文按邏輯分點交代細節、證據或要求", "結尾說明期望回覆（I look forward to your prompt reply.）及正確下款"],
      layout: [
        { style: "flush", text: "Dear Mr. Chan,  （或若不知姓氏：Dear Sir/Madam,）", note: "【上款】核對題目有否提供收件人姓氏" },
        { style: "subhead", text: "Re: Complaint Regarding Substandard Service on 12 March / Application for the Youth Ambassador Programme", note: "【主旨行（選配但極加分）】簡明扼要概括事由" },
        { style: "body", text: "I am writing to lodge a formal complaint regarding... / I am writing to express my keen interest in applying for the position of...", note: "【首段】開門見山交代目的及關鍵日期／身份" },
        { style: "body", text: "To begin with, [Detail 1: e.g. what went wrong + specific time/fact, OR relevant qualification/experience].", note: "【正文一】具體事實／資歷佐證（忌情緒化謾罵）" },
        { style: "body", text: "To make matters worse, [Detail 2 for complaint] / Furthermore, my track record in [Skill/Experience] has equipped me with...", note: "【正文二】補充細節或另一核心賣點" },
        { style: "body", text: "Given the inconvenience caused, I would appreciate it if you could [specific remedy: refund / apology / review]. / Should you require any further information, please do not hesitate to contact me. I look forward to hearing from you at your earliest convenience.", note: "【結尾段】明確期望行動 ＋ 禮貌結束語" },
        { style: "flush", text: "Yours sincerely,  （配 Dear Mr. Chan）／ Yours faithfully,  （配 Dear Sir/Madam）", note: "【下款】嚴格對應上款！" },
        { style: "flush", text: "Chris Wong", note: "【署名】若有頭銜可在下一行註明（如 Chairperson, Student Union）" }
      ],
      traps: [
        "❌ 投訴信語氣過於粗魯失禮（如 'Your staff are stupid and useless!'），會重扣 Language & Register 分；即使憤怒也要用克制有力的正式表達（'utterly unacceptable', 'fell far short of expectations'）。",
        "❌ 寫成 'I am looking forward to hear from you' —— 經典文法致命傷！look forward to 後的 to 是介詞，必須接動名詞：'I look forward to hearing from you'。",
        "❌ 在正式書信中使用縮寫（don't, can't, wanna）或口語（a lot of, kids, stuff）。"
      ],
      openers: [
        "I am writing to lodge a formal complaint regarding the disappointing experience I encountered at...",
        "On behalf of the Student Union of Hong Kong Secondary School, I am writing to cordially invite you to...",
        "I am writing to apply for the position of..., as advertised on your official website."
      ]
    },
    {
      id: "fmt-essay",
      code: "03",
      name: "Argumentative Essay（議論文：單邊／雙邊論證）",
      freq: "Part B 核心題型（必練！）",
      register: "Formal & Academic（客觀理性、思辨嚴密、避免過於口語化）",
      summary: "針對爭議性命題（如 'Do you agree?', 'Discuss both sides and give your opinion', 'To what extent...'）建立嚴密邏輯架構，以理服人。",
      mustHave: ["可加精煉標題（非硬性，但加上更具完整感）", "引言段：Hook（大背景引入）➔ 爭議焦點 ➔ 鮮明 Thesis Statement", "正文段每段以清晰 Topic Sentence 領起，按 PEEL（Point-Explain-Example-Link）展開", "必須包含 Counter-argument & Rebuttal（駁論段）以衝擊 Content 6–7 分", "結尾重申核心立場並提出前瞻思考，切勿引入全新未討論的論點"],
      layout: [
        { style: "center", text: "Title: Striking a Balance — Why [Core Thesis] Matters", note: "【標題（選配）】簡潔有力，無需上款稱謂！" },
        { style: "body", text: "[Hook: Broad social trend or striking contrast]. This phenomenon has sparked an intense debate over whether [issue]. While proponents of [Side B] raise valid points, I am firmly convinced that [Thesis Statement] for several compelling reasons.", note: "【引言段】背景勾勒 ➔ 爭議焦點 ➔ 清晰立場" },
        { style: "body", text: "[Topic Sentence 1: Core argument]. [Elaboration explaining WHY/HOW]. A case in point is [specific HK/global example]. Consequently, [Link back to thesis].", note: "【正文一】PEEL 完整示範" },
        { style: "body", text: "Beyond [Keyword from Para 2], [Topic Sentence 2]. [Deep analysis of long-term consequence or secondary stakeholder].", note: "【正文二】用「回扣上段關鍵詞」取代呆板的 Secondly" },
        { style: "body", text: "Granted, detractors might argue that [Fair counter-argument]. However, this line of reasoning fails to take into account [Flaw in counter-argument]. Rather than [extreme], [nuanced rebuttal].", note: "【正文三】高階讓步反駁段（展現多角度思維）" },
        { style: "body", text: "In the final analysis, [Synthesise main arguments without copy-pasting intro]. As society marches forward, [Forward-looking reflection / conditional insight].", note: "【結論段】高度凝練總結 ＋ 昇華餘韻（無下款署名！）" }
      ],
      traps: [
        "❌ 立場搖擺不定（俗稱「騎牆派」）：題目問 'Do you agree?' 卻只各打五十大板而沒給明確判斷；即使是「有條件同意（To a large extent）」，亦必須清楚界定前提條件。",
        "❌ 論點重疊（例如第二段寫「浪費金錢」，第三段寫「增加財政負擔」，本質是同一論點）。建議從不同維度切入（個人心理／經濟成本／社會長遠發展／道德倫理）。",
        "❌ 在 Essay 文末誤加 Yours faithfully 或署名。"
      ],
      openers: [
        "In an era defined by rapid technological upheaval, few issues have ignited as much controversy as whether...",
        "There is no denying that... has become an integral part of modern life; yet whether its merits outweigh its drawbacks remains a subject of fierce contention.",
        "To what extent should...? While opinion remains deeply divided, a closer examination reveals that..."
      ]
    },
    {
      id: "fmt-article",
      code: "04",
      name: "Feature Article / Newsletter Article（專題文章／校刊文章）",
      freq: "Part A & Part B 雙料高頻",
      register: "Semi-formal, Engaging & Vivid（生動活潑、富可讀性、與讀者對話）",
      summary: "刊登於雜誌、報章副刊（Young Post）或校刊的專題文章，既要有觀點深度，亦要具吸引眼球的標題、副標題與鮮活文風。",
      mustHave: ["吸睛大標題（Headline：可用冒號、頭韻、設問或雙關語）", "作者署名（By Chris Wong，放於標題正下方）", "生動開場（場景描寫／設問／生活共鳴／驚人數據，切忌用 'I am writing to...'！）", "2–3 個引人入勝的小標題（Subheadings）分隔主題", "結尾留下思考空間、金句或呼應開頭的「首尾閉環」"],
      layout: [
        { style: "center", text: "Beyond the Screen: Are Teenagers Losing the Art of Real Conversation?", note: "【吸睛標題】切忌沉悶如 'An Article about Smartphones'" },
        { style: "byline", text: "By Chris Wong", note: "【作者署名】置於標題下方（靠左或居中皆可）" },
        { style: "body", text: "Picture this: four friends sitting around a café table in Mong Kok, not a single word spoken, their faces bathed in the pale blue glow of smartphone screens. Sound familiar? You are not alone...", note: "【引言 Hook】畫面感場景切入 ＋ 直接用 you 與讀者對話" },
        { style: "subhead", text: "The Allure of Effortless Connection", note: "【小標題一】簡短醒目，引導閱讀節奏" },
        { style: "body", text: "It is easy to see why digital messaging has taken our generation by storm. With a tap of a thumb, ...", note: "【正文一】結合生動比喻、日常觀察與分析" },
        { style: "subhead", text: "What Gets Lost in Translation", note: "【小標題二】切換層次，深入探討問題或另一面" },
        { style: "body", text: "Yet beneath the convenience lies a quieter cost. Emojis, however expressive, can never replicate the warmth of eye contact or...", note: "【正文二】層次遞進，句式長短交錯增加韻律感" },
        { style: "subhead", text: "Reclaiming the Moment", note: "【小標題三】展望／建議／啟發" },
        { style: "body", text: "The next time you meet your friends for milk tea, try sliding your phone into your bag—face down. You might just rediscover that the best notifications in life don't come from a screen.", note: "【結尾】呼應開頭咖啡店場景，餘韻十足！（切忌寫 Yours sincerely）" }
      ],
      traps: [
        "❌ 用書信開頭寫 Article（如 'Dear Readers, I am writing this article to tell you...'）—— 瞬間暴露文體意識不足！",
        "❌ 小標題流於死板公式（如 'Introduction', 'Body Paragraph 1', 'Conclusion'）—— 專題文章的小標題要有雜誌感與內容提示力。",
        "❌ 語氣過於死板學究氣，或過度口語像聊天記錄（如 'OMG lol'）；黃金平衡是 Semi-formal & Journalistic。"
      ],
      openers: [
        "Picture this: ... Sound all too familiar?",
        "Have you ever wondered why...? Look a little closer, and you may be surprised by what you find.",
        "Walk down any bustling street in Hong Kong today, and one trend is impossible to ignore: ..."
      ]
    },
    {
      id: "fmt-proposal",
      code: "05",
      name: "Proposal（計劃建議書）",
      freq: "Part B 及 Paper 3B 雙重必考王牌文體",
      register: "Formal, Persuasive & Pragmatic（正式、具建設性、重可行性與效益）",
      summary: "向校長、委員會、區議會或公司管理層提出具操作性的活動或改善計劃，說服決策者拍板通過（Approval）。",
      mustHave: ["清晰正式標題（Proposal for [Project Name]）", "（可選）頁首欄位 To / From / Date（增添專業商務／校務真實感）", "清晰功能性小標題：Introduction / Objectives / Proposed Initiatives / Feasibility & Budget / Conclusion", "每個建議須包含「具體做法（What/How）＋ 預期效益（Benefit）」", "主動回應「資源／人手／可行性顧慮」能令 Content 穩上 6–7 分！"],
      layout: [
        { style: "center", text: "Proposal for Launching the 'Green Campus & Wellness Hub'", note: "【正式標題】必須清楚點明建議主題" },
        { style: "meta", text: "To: Principal Chan  |  From: Chris Wong, Chairperson of the Student Union  |  Date: 15 April 2027", note: "【頁首資訊（可選，亦可省略直接由 Introduction 開始）】" },
        { style: "subhead", text: "1. Introduction / Background", note: "【背景與目的】簡述現存問題痛點 ＋ 本建議書目標" },
        { style: "body", text: "In recent years, students at our school have faced mounting academic stress alongside a shortage of tranquil relaxation areas. This proposal outlines a practical, cost-effective initiative to transform the underutilised rooftop into a vibrant 'Green Wellness Hub'.", note: "開篇直擊痛點，建立採納迫切性" },
        { style: "subhead", text: "2. Proposed Initiatives / Action Plan", note: "【核心建議方案】建議分 2–3 個具名子方案（可用小標題或項目符號）" },
        { style: "body", text: "• Eco-Study Zone: Install weather-resistant seating and vertical herb planters... This would not only alleviate overcrowding in the library, but also foster environmental stewardship.\n• Peer-Led Mindfulness Sessions: Host bi-weekly 20-minute guided breathing workshops during lunch breaks...", note: "【黃金寫法】具體措施（Who/When/Where/How）＋ 明確好處（Why it works）" },
        { style: "subhead", text: "3. Feasibility, Budget & Risk Management", note: "【5** 殺手鐧段】主動化解經費、安全或人手疑問！" },
        { style: "body", text: "To ensure financial viability, materials can be sourced through the Quality Education Fund and recycled timber donated by alumni. Moreover, senior prefects will oversee safety on a rota basis, minimising any additional workload for teaching staff.", note: "展現成熟規劃能力，說服力瞬間拉滿" },
        { style: "subhead", text: "4. Conclusion", note: "【總結與尋求批准】重申雙贏效益並禮貌請求審批" },
        { style: "body", text: "In summary, the proposed hub offers a sustainable and affordable remedy to student burnout. We earnestly hope that the school management will grant approval for this initiative and look forward to discussing the implementation details at your convenience.", note: "不需寫 Yours faithfully!（除非題目特別寫 'Write a letter of proposal'）" }
      ],
      traps: [
        "❌ 把 Proposal 寫成「空頭支票」：只寫 'We should hold workshops and promote awareness'，卻沒有任何具體時間、內容、執行細節或經費來源。",
        "❌ 忘記寫小標題（Subheadings）—— Proposal 屬於高度結構化文件，沒有分節小標題會直接損失 Organisation 分數！",
        "❌ 過多使用命令語氣（'You must give us money'），應改用禮貌建議句型（'It is proposed that...', 'The committee may consider...', 'We recommend allocating...'）。"
      ],
      openers: [
        "This proposal aims to outline a comprehensive plan to address... and seek approval from...",
        "In light of the growing need for..., this proposal puts forward three actionable initiatives designed to...",
        "Prepared in response to feedback from..., the following proposal details a feasible strategy for..."
      ]
    },
    {
      id: "fmt-report",
      code: "06",
      name: "Report（調查報告／活動檢討報告）",
      freq: "Part A / Part B / Paper 3B 皆高頻",
      register: "Formal, Objective & Analytical（客觀中立、數據導向、多用被動語態與名詞化）",
      summary: "客觀匯報一項問卷調查結果、實地考察觀察或已完成活動的成效與不足，並基於證據提出改善建議。",
      mustHave: ["正式標題（Report on [Topic / Survey / Event]）", "分節小標題：Introduction / Methodology (or Background) / Findings (or Observations) / Recommendations / Conclusion", "嚴守時態紀律：匯報過去調查／活動用 Past Tense；分析現狀或提出建議用 Present / Modal Verbs (should, could, is recommended)", "客觀描述數據或意見（避免情緒詞與主觀第一人稱 'I feel...'，改用 'The survey revealed that...', 'It was observed that...'）", "切勿加入書信稱謂（Dear...）與祝頌語（Yours...）"],
      layout: [
        { style: "center", text: "Report on Student Eating Habits and Canteen Satisfaction Survey", note: "【正式標題】簡明點出報告範疇" },
        { style: "meta", text: "Prepared for: The School Management Committee  |  Prepared by: Chris Wong, Health Club  |  Date: 20 March 2027", note: "【報告頁首（選配，顯專業度）】" },
        { style: "subhead", text: "1. Introduction", note: "交代報告目的、背景及調查方法（如受訪人數與時間）" },
        { style: "body", text: "This report presents the findings of a school-wide survey conducted between 1 and 10 March 2027, which gathered responses from 420 students to evaluate satisfaction with the school canteen and identify areas for improvement.", note: "【時態注意】調查過程用 Past Tense（conducted, gathered）" },
        { style: "subhead", text: "2. Key Findings", note: "歸納 2–3 項核心發現（切忌純列數字流水帳，要概括趨勢與原因）" },
        { style: "body", text: "• Limited Healthy Options: An overwhelming majority (74%) of respondents expressed dissatisfaction with the scarcity of low-oil, vegetarian dishes.\n• Prolonged Queuing Times: Nearly two-thirds of interviewees reported waiting over 12 minutes during lunch recess due to cash-only payment.", note: "【數據表達】善用 percentage / proportion / majority / disparity" },
        { style: "subhead", text: "3. Recommendations", note: "針對上述 Findings 逐一提出對症下藥的建議（前後對應！）" },
        { style: "body", text: "Based on the above findings, it is recommended that the canteen operator introduce a rotating 'Smart-Choice Menu' featuring nutritious meals. Additionally, adopting contactless e-payment kiosks would substantially streamline lunch-hour traffic.", note: "【語氣】用 it is recommended that + (should) + V（虛擬語氣極加分！）" },
        { style: "subhead", text: "4. Conclusion", note: "簡短收束，展望建議落實後的成效" },
        { style: "body", text: "In summary, while the canteen currently meets basic needs, targeted menu diversification and faster payment systems are essential to safeguarding student well-being.", note: "無需任何書信祝頌語！" }
      ],
      traps: [
        "❌ Findings（發現）與 Recommendations（建議）脫節：前面提到排隊慢，後面卻沒建議怎樣改善排隊，反而寫要裝冷氣。",
        "❌ 把 Report 寫成故事或感性文章（'I was shocked to see so many kids eating fried food!'），嚴重違反客觀正式語氣。",
        "❌ 混淆 Report（回顧已發生的調查／活動，重事實分析）與 Proposal（推銷未發生的未來計劃，重說服拍板）。"
      ],
      openers: [
        "The purpose of this report is to evaluate the effectiveness of... and propose actionable recommendations for future improvement.",
        "This report summarises the key findings of a survey carried out among... regarding...",
        "Commissioned by..., this report investigates the primary causes of... and outlines remedial measures."
      ]
    },
    {
      id: "fmt-speech",
      code: "07",
      name: "Speech / Presentation Script（演講辭／早會分享）",
      freq: "Part A & Part B 熱門文體",
      register: "Engaging, Persuasive & Spoken-friendly（具現場感染力、互動設問、節奏明快）",
      summary: "於早會、畢業禮、論壇、比賽或社區講座上向現場聽眾發表的講稿，重視「聽覺效果」與「與台下互動」。",
      mustHave: ["依尊卑順序問候現場聽眾（Good morning, Principal, teachers and fellow students,）", "開場 15 秒抓注意力（設問／舉手互動／小故事／反差金句）並交代講者身份與講題", "貫穿全文的「聽眾意識」：多用 we / us / you / fellow schoolmates，避免冷冰冰的 'the students'", "口語修辭武器：排比（Tricolon / Rule of Three）、設問（Rhetorical Questions）、短句停頓與過渡提示（Signposting）", "強而有力的收結呼籲 ＋ Thank you.（絕不寫下款署名或日期！）"],
      layout: [
        { style: "flush", text: "Good morning, Principal, teachers and fellow students,", note: "【現場問候】按身份高低排列（若對象是公眾／嘉賓：Ladies and gentlemen, honoured guests,）" },
        { style: "body", text: "Raise your hand if the very first thing you reached for this morning—even before brushing your teeth—was your smartphone. Look around the hall: almost every hand is up, including mine! Today, as Chairperson of the Student Wellness Club, I would like to talk to you about a silent thief living right inside our pockets...", note: "【互動開場】舉手互動 ＋ 自嘲共鳴 ＋ 自我介紹與破題" },
        { style: "body", text: "Let us pause for a moment and ask ourselves: when did our tools start owning us? First, ...", note: "【正文一】用 Let us / Ask yourselves 牽動台下思考" },
        { style: "body", text: "Now, some of you might be thinking, 'Come on, Chris, I need my phone to study!' And you are absolutely right. Yet there is a world of difference between...", note: "【正文二】模擬台下心聲並即時回應，令演講生動自然！" },
        { style: "body", text: "So, where do we go from here? Let us start small: put our phones on 'Do Not Disturb' for one hour tonight, reclaim our focus, and rediscover the joy of being truly present. The power to unplug—and to truly connect—rests in our own hands. Thank you.", note: "【結尾號召】三連排比（Rule of Three）＋ Thank you. 乾淨收官！" }
      ],
      traps: [
        "❌ 頭號低級錯誤：在演講辭結尾寫 'Yours sincerely, Chris Wong' 甚至加上日期 —— 講者正站在台上說話，怎會讀出 'Yours sincerely'！",
        "❌ 寫成沉悶的書面論文（狂用 'Furthermore', 'Consequently', 'The aforementioned factor'），缺乏任何與現場聽眾的眼神／語言互動。",
        "❌ 忘記自我介紹或沒按題目設定的場合問候（例如頒獎禮卻寫 Good morning everyone 而不提及 honoured guests / judges）。"
      ],
      openers: [
        "Good morning, Principal, teachers and fellow students. Before I begin, allow me to ask you a simple question: ...",
        "Ladies and gentlemen, thank you for gathering here today. It is both a privilege and a pleasure to speak to you about...",
        "Imagine waking up tomorrow in a world without... Sounds unthinkable, doesn't it?"
      ]
    },
    {
      id: "fmt-blog",
      code: "08",
      name: "Blog Entry / Social Media Post / Informal Email（網誌／非正式書信與電郵）",
      freq: "Part A 極高頻文體！",
      register: "Informal to Semi-formal, Warm & Personal（親切自然、帶個人色彩與生活感）",
      summary: "分享個人經歷、旅遊見聞、溫習貼士或回覆摯友傾訴，重點在於展現真實親切的「個人聲音（Voice）」並完整回應題目所有要點。",
      mustHave: ["網誌（Blog）：日期 ＋ 活潑標題 ＋ 親切開場（Hey everyone!）＋ 互動結尾（Drop a comment below!）", "非正式電郵（Email）：Subject 行 ＋ Dear Amy, / Hi Amy, ＋ 寒暄 ＋ 正文（切勿漏題目問的問題！）＋ Best wishes, / Cheers, ＋ 名字", "適當使用縮寫（I'm, it's, don't）、生活化片語動詞（phrasal verbs: figure out, chill out, kick off）與生動細節", "即使語氣輕鬆，仍須保持「文法精準」，切勿出現網絡火星文（u, plz, gonna, btw, lol）！"],
      layout: [
        { style: "meta", text: "【網誌示範】12 April 2027   |   Category: Student Life & Tips", note: "網誌可附簡短日期與分類；若為 Email 則寫 Subject: ..." },
        { style: "center", text: "Surviving DSE Season Without Losing Your Mind (Yes, It's Possible!)", note: "【活潑標題】帶括號吐槽或問句極具真實網誌感" },
        { style: "body", text: "Hey everyone! Can you believe we are just months away from DSE? If your desk currently looks like a paper mountain and your coffee intake has doubled, trust me—I've been right there with you!", note: "【親切開場】迅速拉近距離，建立同路人共鳴" },
        { style: "body", text: "Over the past semester, I tried just about every study hack under the sun—some disastrous, others total game-changers. Here are the three habits that genuinely saved my sanity...", note: "【正文過渡】自然引出題目要求的具體建議／經歷" },
        { style: "body", text: "So there you have it! Remember, exam prep is a marathon, not a sprint. What's your go-to stress-buster when revision gets overwhelming? Drop your favourite tips in the comments below—I'd love to hear from you!", note: "【互動結尾】邀請留言互動（若是 Informal Email 則改寫：Write back soon! / Best wishes, Chris）" }
      ],
      traps: [
        "❌ 以為 Informal = 可以不守文法或亂用粗俗俚語（如 'gonna', 'wanna', 'u r', 'OMG!!!'），這些在 HKDSE 一律會被視為不當拼寫扣分！",
        "❌ 在 Informal Email 寫成過分僵硬的公文腔（如 'I am writing to inform you about my holiday'），嚴重違反 Register。",
        "❌ Part A 漏答題目指示的其中一個子問題（例如朋友來信問了 3 件事，你只詳細寫了 2 件事，Content 立即無法上高分）。"
      ],
      openers: [
        "【Blog】Hey guys! Welcome back to my blog. Today I'm super excited to share...",
        "【Informal Email】Hi Amy, It was so lovely hearing from you! Sorry it's taken me a few days to reply—school has been hectic lately...",
        "【Advice Email】Dear Sam, Thanks for opening up to me about... Don't beat yourself up—it's completely normal to feel that way!"
      ]
    },
    {
      id: "fmt-story",
      code: "09",
      name: "Short Story / Narrative Writing（短篇故事／記敘文）",
      freq: "Part B 創意寫作常駐選項",
      register: "Descriptive, Evocative & Literary（畫面感強、情節緊湊、重心理描寫）",
      summary: "圍繞題目設定的開頭句、結尾句、圖片或主題創作完整短篇故事，以生動描寫、衝突轉折及情感共鳴取勝。",
      mustHave: ["完整敘事弧線：Exposition（鋪墊）➔ Inciting Incident（轉折觸發）➔ Rising Action（衝突升級）➔ Climax（高潮）➔ Resolution（餘韻收尾）", "「Show, Don't Tell（以描寫代直白告知）」：不寫 'He was nervous'，改寫 'His palms grew clammy as his fingers drummed relentlessly against the desk'", "精準時態控制：主敘事用 Past Simple / Continuous；交代更早之前的事用 Past Perfect（had + p.p.）；對話引號內按實況用 Present / Future", "正確對話標點規範：每換一位說話者必須另起新段！逗號／句號置於引號內"],
      layout: [
        { style: "center", text: "The Unsent Postcard", note: "【故事標題】簡短留白、富象徵意義" },
        { style: "body", text: "Rain lashed against the grimy window of the Sham Shui Po flat as Mei-ling dusted the top shelf of her grandfather's mahogany cabinet. Just as she reached for the last tin box, a yellowed postcard fluttered to the floorboards.", note: "【開篇鋪墊】天氣氛圍 ＋ 感官細節 ＋ 觸發物件（Hook）" },
        { style: "body", text: "\"Don't throw that away,\" a hoarse voice murmured from the doorway. Mei-ling spun around, her heart thumping against her ribs.", note: "【對話規範】雙引號內用逗號銜接提示語；換人說話即另起一段" },
        { style: "body", text: "Her grandfather's weathered fingers trembled slightly as he traced the faded ink dated 1978. For years, she had assumed his quietness meant distance; now, staring at the trembling handwriting, a sudden warmth swelled in her chest...", note: "【高潮與心理轉折】細膩動作描寫 ＋ Past Perfect（had assumed）回溯" },
        { style: "body", text: "Outside, the storm had thinned to a gentle drizzle. Mei-ling picked up a pen, smiled softly, and knew that some letters are never truly too late.", note: "【餘韻收尾】呼應開篇雨景（由暴雨轉細雨），點題昇華！" }
      ],
      traps: [
        "❌ 「夢醒大法」或「車禍失憶」等極度老土結局（'...and then I woke up and realised it was all a dream'）—— 考官最厭倦的俗套收尾！",
        "❌ 堆砌過多角色與過長跨度（寫了十年人生流水帳），400–500 字短篇故事宜聚焦於「一個核心場景、兩至三個角色、一次深刻心境轉折」。",
        "❌ 時態亂跳（前一句用 walked，下一句突然變成 says 和 runs），以及忘記按題目要求把指定句子原封不動放在開頭或結尾。"
      ],
      openers: [
        "【感官場景切入】The unmistakable scent of roasted chestnuts drifted down the neon-lit alley as...",
        "【懸念對話切入】\"If we miss the last ferry, we're stranded until dawn,\" Leo whispered, glancing anxiously at his watch.",
        "【倒敘懸念切入】Had anyone told me that morning that a misplaced key would alter the course of our friendship, I would have laughed it off."
      ]
    },
    {
      id: "fmt-review",
      code: "10",
      name: "Review（影評／書評／食評／展覽或活動評論）",
      freq: "Part A & Part B 熱門文化消閒文體",
      register: "Semi-formal, Critical yet Lively（生動具品味、褒貶平衡、有理有據）",
      summary: "為雜誌、報紙副刊或校園網撰寫電影、書籍、餐廳、應用程式或展覽評論，向讀者提供具公信力的推介與客觀評價。",
      mustHave: ["吸睛標題（可含書名／片名／店名 ＋ 核心評價語）＋ 評分（如 Rating: 4.5 / 5 ★）", "開篇點明評測對象基本資料（導演／作者／地點／類型）與整體定調（Overall Verdict）", "簡短不劇透的簡介（Spoiler-free Synopsis：注意描述電影／書中情節一律用 Present Simple！）", "平衡點評：詳細分析 2 個突出優點 ＋ 1 個客觀小瑕疵（Balanced Critique 顯專業度！）", "明確結語推介：指出最適合哪類受眾（target audience）"],
      layout: [
        { style: "center", text: "A Feast for Both Heart and Soul: Review of 'Twilight of the Warriors'", note: "【評論標題】含鮮明評價態度 ＋ 評測對象" },
        { style: "meta", text: "By Chris Wong   |   Rating: ★★★★☆ (4.5 / 5)", note: "【作者與評分】增添真實評論專欄質感" },
        { style: "body", text: "Set in the labyrinthine alleyways of 1980s Kowloon Walled City, [Film Title] is far more than a high-octane martial arts spectacle; it is a deeply moving love letter to Hong Kong's resilient spirit.", note: "【開篇定調】背景 ＋ 整體高度評價" },
        { style: "body", text: "The story follows a young refugee who stumbles into the Walled City in search of shelter... (Briefly outline premise using Present Simple without spoiling the ending!)", note: "【不劇透簡介】切記介紹劇情必須用 Present Tense（follows, stumbles）！" },
        { style: "body", text: "Where the film truly shines is its meticulous production design and electrifying choreography... That said, the pacing falters briefly midway through the second act, leaving one supporting character somewhat underdeveloped.", note: "【褒貶平衡】先揚後抑（That said / On the downside），客觀精闢" },
        { style: "body", text: "Minor flaws aside, this gripping masterpiece is an unmissable gem for action enthusiasts and nostalgia lovers alike. Grab a ticket before it leaves the big screen!", note: "【受眾推介】點明目標讀者並給予行動呼籲" }
      ],
      traps: [
        "❌ 全篇都在「複述劇情（Plot Summary）」，從頭講到尾甚至爆雷（Spoilers），卻幾乎沒有「評價分析（Evaluation）」—— Review 核心是評，簡介佔比切勿超過 20%！",
        "❌ 用 Past Tense 描述電影或書本內容（'The hero fought the villain'），英語慣例述評虛構作品情節應使用 Literary Present（'The hero fights...'）。",
        "❌ 一面倒盲讚（'Everything is 100% perfect!'），加上一句細微改善建議（'The only minor drawback is...'）會令文章更客觀可信。"
      ],
      openers: [
        "Few recent releases have captured the public imagination quite like...",
        "Tucked away in a quiet corner of Wan Chai, [Restaurant] promises..., and for the most part, it delivers in style.",
        "If you are searching for a thought-provoking read that lingers long after the final page, look no further than..."
      ]
    }
  ]
};
