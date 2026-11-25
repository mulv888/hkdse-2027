/* ==========================================================================
   Paper 3 Part A（聆聽必答部分 · 佔全科 15%）8 大必考題型示例、錄音拆解與排雷指南
   包含擬真錄音原文（支援瀏覽器語音朗讀測試）、SVG 平面圖與趨勢圖、高頻串字陷阱庫
   ========================================================================== */

window.ENG_P3A = {
  overview: {
    weight: "佔全科 15%（Paper 3 總分 30% 之半壁江山，全體考生必答 Tasks 1–4）",
    duration: "約 45 分鐘（連開考前預讀與最後 2 分鐘整理答案時間）",
    difficultyCurve: [
      { task: "Task 1（約 12–15 題）", level: "★☆☆☆☆ 基礎搶分", focus: "填寫表格、人名／日期／價錢／串字、簡易地圖平面圖標註。目標：全對（至多失 1 分）！" },
      { task: "Task 2（約 12–15 題）", level: "★★☆☆☆ 中等應用", focus: "流程圖、分類對比表、勾選題與多項選擇題。開始出現頻繁「改口」與干擾選項。" },
      { task: "Task 3（約 12–15 題）", level: "★★★★☆ 進階思辨", focus: "電台訪談或會議討論；考核說話者態度立場、數據趨勢配對、同義改寫（Paraphrasing）。" },
      { task: "Task 4（約 12–15 題）", level: "★★★★★ 摘星壓軸", focus: "密集筆記填空（Note-taking）＋ 開放式長問答；語速較快、訊息高度濃縮，需極速速記關鍵字。" }
    ],
    preListeningSteps: [
      { step: "1. 預讀 30 秒鎖定「詞性與類別」", detail: "拿到試卷開錄音前，立即在每個空格旁寫下預測詞性（如 n. / adj. / date / $ / verb-ing / plural），例如前面有 'several ___' 必是複數名詞！" },
      { step: "2. 圈畫「題幹限定字眼」與字數限制", detail: "圈出 NOT / ONLY / MOST / MAIN / EXCEPT 及字數上限（如 'ONE word only'），多寫一個字就算對也零分！" },
      { step: "3. 聽「轉折與修正訊號詞」防改口陷阱", detail: "聽到 Actually / Wait / Sorry, I meant / On second thoughts / Scratch that / Originally... but now... 時，筆尖立刻停住準備改答案！" },
      { step: "4. 速記代號（Shorthand）保流暢", detail: "錄音不停頓，切忌為串字停下來漏聽後兩題！先用速記（gov = government, env = environment, ↑ = increase, b/c = because），留待最後 2 分鐘整潔補全串字與文法！" }
    ]
  },

  /* 8 大 Paper 3A 經典題型完整示例 */
  questionTypes: [
    {
      id: "p3a-form",
      code: "Type 01",
      name: "表格填寫與改口／串字陷阱 (Form & Note Completion)",
      tasks: "Task 1 必考",
      difficulty: "基礎必拿滿分",
      strategy: "重點留意：① 說話者說完一個日期／價錢後隨即自我更正；② 區分十幾（-teen，重音在後）與幾十（-ty，重音在前）；③ 名詞單複數（-s/-es）與連字符；④ 專有名詞首字母大寫。",
      transcript: [
        { speaker: "Receptionist", line: "Welcome to the Harbourview Sustainability Expo! Let me register your school group. Is your teacher's surname spelt C-H-A-N?" },
        { speaker: "Student", line: "Oh, actually it's Ms. CHEUNG — that's C-H-E-U-N-G. And we originally booked for 14th November, right?" },
        { speaker: "Receptionist", line: "Let me check... ah, the hall is closed for maintenance that weekend, so we moved your slot forward by a week to 7th November. The standard fee is HK$80 per student, though since you have over twenty pupils, you get the discounted rate of HK$65." },
        { speaker: "Student", line: "Great! Do we need to bring anything besides notebooks?" },
        { speaker: "Receptionist", line: "Yes, please remind everyone to bring a reusable water bottle—disposable cups are strictly banned inside the venue." }
      ],
      questions: [
        { q: "1. Teacher-in-charge: Ms. _______________", a: "Cheung", cue: "干擾項：Receptionist 先猜 Chan，學生用 'actually' 修正為 Cheung（首字母大寫）。" },
        { q: "2. Confirmed Visit Date: _______________", a: "7th November / 7 November / Nov 7", cue: "干擾項：originally booked for 14th November；關鍵句 'moved... forward by a week to 7th November'。" },
        { q: "3. Admission Fee (per student): HK$ _______________", a: "65", cue: "干擾項：standard fee $80；條件觸發 'over twenty pupils -> discounted rate of $65'（題幹已有 HK$，寫 65 即可）。" },
        { q: "4. Mandatory item to bring: a _______________ (max 3 words)", a: "reusable water bottle", cue: "同義改寫：題目問 Mandatory item，錄音說 'remind everyone to bring...'（注意題目已有冠詞 'a'，勿重複寫 'a reusable...'）。" }
      ],
      trapAlert: "極高頻陷阱：「originally / used to / was supposed to」後面出現的永遠是舊資訊（干擾項）！務必聽完後面有沒有「but / however / rescheduled to / moved to」。"
    },
    {
      id: "p3a-map",
      code: "Type 02",
      name: "地圖／平面圖與空間方位標註 (Map & Floor Plan Labelling)",
      tasks: "Task 1 / Task 2 高頻",
      difficulty: "易失方向感",
      strategy: "開錄音前先在圖上找「入口（Entrance / You are here）」及「指南針（N/S/E/W）」！邊聽邊用鉛筆沿路線畫箭咀，熟記空間介詞：opposite（正對面）、adjacent to / next to（緊鄰）、diagonally across（斜對面）、at the far end（最盡頭）、to your immediate left（緊貼左側）。",
      svgType: "floorplan",
      transcript: [
        { speaker: "Guide", line: "Let's walk through the new Community Innovation Centre so you won't get lost. Starting from the Main Entrance at the bottom, walk straight up the Central Corridor." },
        { speaker: "Guide", line: "Immediately on your left, right beside the entrance, is the Information Desk—that's already marked on your map. Just across the corridor on the right-hand side is the Café Corner." },
        { speaker: "Guide", line: "Keep heading north past the Information Desk. On the left side, directly adjacent to the Info Desk, you'll find our 3D Printing Lab. Don't confuse it with the Quiet Reading Pods, which are tucked away in the far top-left corner." },
        { speaker: "Guide", line: "Finally, diagonally across from the 3D Printing Lab—in the upper-right section—sits the Main Auditorium." }
      ],
      questions: [
        { q: "Label [A]（入口右側、與 Information Desk 隔走廊正對）", a: "Café Corner", cue: "方位詞：'across the corridor on the right-hand side'。" },
        { q: "Label [B]（左側中間、緊鄰 Information Desk 北面）", a: "3D Printing Lab", cue: "方位詞：'heading north past Info Desk... directly adjacent to the Info Desk'。" },
        { q: "Label [C]（左上角最深處）", a: "Quiet Reading Pods", cue: "方位詞：'tucked away in the far top-left corner'（tucked away 意指「藏在角落」）。" },
        { q: "Label [D]（右上角、與 3D Printing Lab 斜對面）", a: "Main Auditorium", cue: "方位詞：'diagonally across from the 3D Printing Lab — in the upper-right section'。" }
      ],
      trapAlert: "留意說話者有時會「倒轉講法」或提及舊位置（'The lab used to be on the right, before we relocated it upstairs'）！並切記看清題目要求填「字母（A/B/C）」還是「房間完整名稱」。"
    },
    {
      id: "p3a-flowchart",
      code: "Type 03",
      name: "流程圖與步驟填空 (Flow Chart & Sequence Completion)",
      tasks: "Task 2 / Task 3 常見",
      difficulty: "考驗步驟順序與文法配合",
      strategy: "緊盯錄音中的順序路標詞（First / Prior to that / Once completed / Subsequently / Simultaneously / Before finalising）。特別小心「倒敘陷阱」：錄音說 'Before submitting the form, make sure you get a parent's signature' —— 簽名在遞表**之前**！",
      transcript: [
        { speaker: "Coordinator", line: "Applying for the Green Campus Grant takes just four easy steps. First, form a team of three to five students and pick an environmental issue." },
        { speaker: "Coordinator", line: "Next, draft a two-page action plan with an estimated budget. Oh—before you upload the proposal to the online portal, remember to have your teacher advisor endorse it; otherwise the system will reject it automatically." },
        { speaker: "Coordinator", line: "Shortlisted teams will then be invited to deliver a five-minute pitch to the judging panel. Finally, winning teams receive funding and must submit a short progress photo log at the end of the term." }
      ],
      questions: [
        { q: "Step 1: Form a team (3–5 students) & select an environmental issue.", a: "（已提供示範步驟）", cue: "用來定位錄音開端。" },
        { q: "Step 2: Draft a 2-page action plan including an _______________.", a: "estimated budget", cue: "原句：'with an estimated budget'（注意冠詞 an 提示答案以元音開頭！）。" },
        { q: "Step 3: Obtain endorsement from a _______________ BEFORE uploading online.", a: "teacher advisor", cue: "倒敘陷阱！錄音先提 'before you upload'，再說 'have your teacher advisor endorse it'，順序必須排在 Upload 之前！" },
        { q: "Step 4: Shortlisted teams give a 5-minute _______________; winners later submit a progress photo log.", a: "pitch", cue: "冠詞＋修飾語 'a 5-minute ___' 鎖定單數名詞 pitch。" }
      ],
      trapAlert: "留意題目箭頭（➔）前後的動詞形態是否一致（例如全部步驟用原形動詞祈使句 Submit / Obtain / Deliver），以及冠詞 a / an 的語法線索！"
    },
    {
      id: "p3a-mcq",
      code: "Type 04",
      name: "多項選擇題與干擾項排雷 (Multiple Choice & Distractors)",
      tasks: "Task 2 / Task 3 / Task 4 必考",
      difficulty: "高頻陷阱重災區",
      strategy: "HKDSE Paper 3A 選擇題黃金定律：**「聽到的原詞往往是陷阱，同義改寫才是正解！」** 錄音幾乎會把 A/B/C/D 四個選項全部唸出來，必須用符號在選項旁即場標記（✗ 否決 / ? 猶豫 / ✓ 拍板）。",
      transcript: [
        { speaker: "Host", line: "So Dr. Leung, why did your team decide to cancel the outdoor stargazing camp at Sai Kung this month?" },
        { speaker: "Dr. Leung", line: "Well, many parents assumed it was because of low sign-ups, which couldn't be further from the truth—we actually had a waiting list! Some also worried about the recent ferry fare hike, though our sponsors gladly covered transport. Ultimately, the Observatory forecast persistent dense cloud cover all weekend, meaning students wouldn't see a single star." }
      ],
      questions: [
        {
          q: "Why was the Sai Kung stargazing camp cancelled?\nA. Insufficient student enrolment\nB. Rising ferry transportation costs\nC. Unfavourable weather conditions\nD. Lack of corporate sponsorship",
          a: "C. Unfavourable weather conditions",
          cue: "逐項排雷：A 被 'couldn't be further from the truth—had a waiting list' 否定；B 與 D 被 'sponsors gladly covered transport' 否定；'persistent dense cloud cover' 同義改寫為 C（Unfavourable weather conditions）！"
        }
      ],
      trapAlert: "千萬別一聽到 'low sign-ups' 或 'ferry fare hike' 就衝動選 A 或 B！學會識別否定表達：couldn't be further from the truth / rule out / dismiss / that wasn't the issue / turns out。"
    },
    {
      id: "p3a-matrix",
      code: "Type 05",
      name: "對比表格與勾選題 (Comparison Table & Tick-box Grid)",
      tasks: "Task 2 / Task 3 常見",
      difficulty: "考驗多對象切換專注力",
      strategy: "預讀時橫看「欄目（Columns）」、直看「項目（Rows）」。特別留神「部分否定」或「只適用其一」的字眼：both / neither / whereas / unlike / exclusively for / only available on。",
      transcript: [
        { speaker: "Librarian", line: "Let me compare our two new study apps: FocusLeaf and MindPulse. Both apps offer offline flashcards, which is super handy on the MTR. However, only FocusLeaf lets you block distracting social media apps during study sessions—MindPulse doesn't have that lock feature yet." },
        { speaker: "Student", line: "What about AI essay feedback? Is that free on both?" },
        { speaker: "Librarian", line: "Actually, neither app includes AI grading in the free tier, though MindPulse does offer a live group study room with friends, whereas FocusLeaf is strictly solo-mode." }
      ],
      questions: [
        { q: "Feature 1: Offline flashcards  [ FocusLeaf / MindPulse ]", a: "✓ FocusLeaf  &  ✓ MindPulse（兩者皆勾）", cue: "關鍵詞：'Both apps offer offline flashcards'。" },
        { q: "Feature 2: Social media blocker  [ FocusLeaf / MindPulse ]", a: "✓ FocusLeaf only", cue: "關鍵詞：'only FocusLeaf lets you block...'。" },
        { q: "Feature 3: Free AI essay grading  [ FocusLeaf / MindPulse ]", a: "兩者皆不勾！（Neither）", cue: "陷阱！聽到 'neither app includes... in the free tier' 時，兩個格都必須留空！" },
        { q: "Feature 4: Live group study room  [ FocusLeaf / MindPulse ]", a: "✓ MindPulse only", cue: "關鍵詞：'MindPulse does offer... whereas FocusLeaf is strictly solo-mode'。" }
      ],
      trapAlert: "勾選題最常設下「全不勾（Neither）」與「反轉順序（錄音先講 B 再講 A，表格先列 A 再列 B）」兩大陷阱，下筆前必須核對欄名！"
    },
    {
      id: "p3a-attitude",
      code: "Type 06",
      name: "說話者態度、語氣與立場推斷 (Attitude, Tone & Stance)",
      tasks: "Task 3 / Task 4 奪星關鍵",
      difficulty: "★★★★☆ 進階必考",
      strategy: "不要只看字面，要結合「語氣詞＋轉折語＋抑揚頓挫」！認識 HKDSE 考評局最愛用的態度形容詞家族：正面（enthusiastic / supportive / optimistic）、中立保留（cautiously optimistic / ambivalent / sceptical / doubtful）、負面（dismissive / cynical / frustrated / appalled / sarcastic）。",
      transcript: [
        { speaker: "Interviewer", line: "The district council plans to turn the old market into a high-tech VR theme park within six months. Do you think it will revive local foot traffic?" },
        { speaker: "Shopkeeper", line: "Hmm... well, it certainly looks glossy in their PowerPoint slides, I'll give them that. But six months? They couldn't even fix the leaky roof here in two years! Unless they actually consult the stall owners, I wouldn't hold my breath." }
      ],
      questions: [
        {
          q: "What is the shopkeeper's attitude towards the redevelopment plan?\nA. Enthusiastic   B. Indifferent   C. Sceptical   D. Relieved",
          a: "C. Sceptical（懷疑／持保留質疑態度）",
          cue: "語氣拆解：先微弱讓步（'looks glossy in their PowerPoint slides'，帶反諷），隨即以 'But six months?' 反問並舉漏水屋頂往績質疑，最後用英語地道慣用語 'I wouldn't hold my breath'（我才不會抱太大期望）直接鎖定 Sceptical！"
        }
      ],
      trapAlert: "必背 Paper 3A 態度慣用語：'I wouldn't hold my breath'（不抱期望／懷疑）、'I'm on the fence'（舉棋不定／ambivalent）、'It's easier said than done'（說易行難／doubtful）、'I'm all for it'（全力支持／enthusiastic）、'Beats me'（毫不知情）。"
    },
    {
      id: "p3a-open",
      code: "Type 07",
      name: "開放式短答與同義濃縮 (Open-ended Short Answers & Paraphrasing)",
      tasks: "Task 3 / Task 4 壓軸難點",
      difficulty: "★★★★★ 5** 分水嶺",
      strategy: "切忌逐字硬抄長句子！Task 4 往往把 15 秒口語解說濃縮成 5–8 個字的精煉答案。重點檢查：① 答案有沒有直接回答題幹的 Wh- word（Why / How / What disadvantage）；② 文法能否跟題幹前半句無縫接駁（例如 'To avoid ___' 後須接 V-ing 或名詞）。",
      transcript: [
        { speaker: "Podcast Guest", line: "Many startups fail not because their idea is bad, but because founders fall in love with their first prototype and refuse to listen when customers complain it's too clunky to use. If you don't tweak your product based on honest user feedback early on, you'll burn through your savings before making a single sale." }
      ],
      questions: [
        {
          q: "According to the guest, what is a major mistake made by startup founders? (Complete in max 10 words)",
          a: "Refusing to listen to customer complaints / Ignoring user feedback (to improve their prototype).",
          cue: "去蕪存菁：剔除鋪墊句 'not because their idea is bad'，直取核心動作 'refuse to listen when customers complain / don't tweak based on user feedback'。"
        },
        {
          q: "What financial consequence can this mistake lead to?",
          a: "Running out of / Burning through savings before making any sales.",
          cue: "精準對應題幹 'financial consequence'，把口語 'burn through your savings' 原意保留或改寫為 'exhausting / running out of savings'。"
        }
      ],
      trapAlert: "Task 4 答案切記「寧準勿冗」：寫入與問題無關的干擾細節（例如把 'their idea is bad' 一併抄進去）會令考官判定你未能分辨正誤而倒扣分！"
    },
    {
      id: "p3a-chart",
      code: "Type 08",
      name: "數據圖表與趨勢配對 (Graphic, Bar/Line Chart Matching)",
      tasks: "Task 3 / Task 4 特色視覺題",
      difficulty: "★★★☆☆ 掌握趨勢動詞即秒殺",
      strategy: "預讀 10 秒先掃描各圖的「起點、峰值（Peak）、谷底（Trough）、平穩期（Plateau）及終點」！將錄音中的變化動詞即時對應折線形狀。",
      svgType: "trends",
      transcript: [
        { speaker: "Analyst", line: "Looking at e-book borrowing rates at public libraries over the past five years: uptake climbed steadily between 2022 and 2023, before surging dramatically in 2024 following the launch of the new mobile app. Since then, however, usage has levelled off and remained largely plateaued through 2026." }
      ],
      questions: [
        {
          q: "Which trend graph (Graph A / Graph B / Graph C) accurately represents e-book borrowing rates from 2022 to 2026?",
          a: "Graph B（緩升 ➔ 急飆 Surge ➔ 橫行平穩 Plateau）",
          cue: "三大階段逐一核對：① climbed steadily（溫和上升）；② surging dramatically（陡峭急升）；③ levelled off / plateaued（高位橫行持平）。排除先升後暴跌（Graph A）及反覆波動（Graph C）！"
        }
      ],
      trapAlert: "必認 Paper 3A 趨勢詞庫：surge / skyrocket / soar（急升）；plummet / plunge / slump（暴跌）；fluctuate（反覆波動）；plateau / level off / stabilise（趨於平穩）；rebound / bounce back（反彈回升）。"
    }
  ],

  /* Paper 3A 十大易錯串字與同音字地雷表 */
  spellingTraps: [
    { word: "accommodation", trap: "常少寫一個 c 或 m", tip: "記口訣：兩張床 (cc) ＋ 兩個枕頭 (mm)！" },
    { word: "questionnaire", trap: "漏寫雙 n 或尾字 e", tip: "question + n + aire（法語源字尾）" },
    { word: "committee", trap: "漏寫雙 m / 雙 t / 雙 e", tip: "記口訣：三雙成對 (mm - tt - ee)！" },
    { word: "maintenance", trap: "誤按 maintain 串成 maintainance", tip: "中段是 ten 不是 tain：main-ten-ance" },
    { word: "itinerary", trap: "行程表常少寫 i 或 r", tip: "i-ti-ne-ra-ry（旅遊 Task 1/2 極常考！）" },
    { word: "recommendation", trap: "誤寫雙 c（reccomend）", tip: "單 c 雙 m：re-com-men-da-tion" },
    { word: "environment / government", trap: "忘記讀音較輕的 n", tip: "enviroNment / goverNment（千萬別漏 N！）" },
    { word: "stationary vs stationery", trap: "同音詞混淆", tip: "stationEry（文具，記 E = Envelope 信封）；stationAry（靜止的）" },
    { word: "principal vs principle", trap: "同音詞混淆", tip: "princiPAL（校長，記 PAL = 朋友）；princiPLE（原則，記 rule 結尾 le）" },
    { word: "cancelled / travelling / programme", trap: "英美拼法混用", tip: "HKDSE 統一採用英式英語（雙 l、-our、-re、-ise 保持全卷一致即可）" }
  ]
};
