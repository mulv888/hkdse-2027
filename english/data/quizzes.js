/* ==========================================================================
   2027 HKDSE 英國語文科互動自測題庫 (quizzes.js)
   覆蓋 Paper 2 文體格式與語氣升級、Paper 3A 聆聽干擾項與串字排雷、Paper 4 口試應變與中式英語修正
   ========================================================================== */

window.ENG_QUIZZES = [
  {
    id: "q-p2-1",
    cat: "Paper 2 格式",
    stem: "你在 Paper 2 Part B 寫一篇 Letter to the Editor，上款寫 'Dear Editor,'。以下哪一組下款與結尾最符合 HKDSE 規範？",
    options: [
      "A. Yours sincerely, / Chris Wong",
      "B. Yours faithfully, / Chris Wong",
      "C. Best regards, / Chris",
      "D. Yours Faithfully, / 陳大文（真名）"
    ],
    ans: 1,
    exp: "不知道收件人姓氏（Dear Editor, / Dear Sir/Madam,）一律配 'Yours faithfully,'，注意 faithfully 的 f 必須小寫！且 HKDSE 嚴禁使用真實姓名，應使用題目指定假名（如 Chris Wong）。"
  },
  {
    id: "q-p2-2",
    cat: "Paper 2 格式",
    stem: "撰寫 Morning Assembly Speech（早會演講辭）時，以下哪項做法會直接扣減組織及格式分（Organisation）？",
    options: [
      "A. 開場按尊卑問候：'Good morning, Principal, teachers and fellow students,'",
      "B. 文中使用設問句及 'we / us / fellow schoolmates' 與聽眾互動",
      "C. 文末寫完 'Thank you.' 後，在右下角補上 'Yours sincerely, Chris Wong' 及日期",
      "D. 開篇先以舉手問題吸引全場注意，再簡單自我介紹"
    ],
    ans: 2,
    exp: "演講辭是口頭講稿而非書信！寫完 'Thank you.' 或 'Thank you for listening.' 即全文結束，加上書信祝頌語、署名或日期是最常見的低級格式失分陷阱。"
  },
  {
    id: "q-p2-3",
    cat: "Paper 2 語言升級",
    stem: "以下哪個句子的「虛擬語氣（Subjunctive Mood）」文法 100% 正確，最適合放進 Proposal 或 Letter to the Editor？",
    options: [
      "A. It is imperative that the government expands urban green spaces immediately.",
      "B. It is imperative that the government expand urban green spaces immediately.",
      "C. It is imperative that the government to expand urban green spaces immediately.",
      "D. It is imperative for the government expanding urban green spaces immediately."
    ],
    ans: 1,
    exp: "It is imperative / vital / essential / recommended that + 主詞 + (should) + 原形動詞！即使主詞是第三人稱單數 the government，動詞仍用原形 expand（不加 s）。"
  },
  {
    id: "q-p2-4",
    cat: "Paper 2 語言升級",
    stem: "以下哪一句正確運用了「否定副詞倒裝（Negative Inversion）」衝擊 5** Language 分？",
    options: [
      "A. Not only regular exercise improves health, but it also relieves exam stress.",
      "B. Not only does regular exercise improves health, but it also relieves exam stress.",
      "C. Not only does regular exercise improve health, but it also relieves exam stress.",
      "D. Not only is regular exercise improve health, but it also relieves exam stress."
    ],
    ans: 2,
    exp: "Not only 置於句首時，前半句必須倒裝成「助動詞 does + 主詞 + 原形動詞 improve」（注意動詞不再加 s！），後半句 but it also relieves... 則保持正常語序。"
  },
  {
    id: "q-p2-5",
    cat: "Paper 2 格式",
    stem: "在撰寫 Film / Book Review（影評／書評）的劇情簡介（Synopsis）段落時，標準英語應使用哪種時態？",
    options: [
      "A. 主要使用 Simple Present Tense（Literary Present，如 'The protagonist discovers...'）",
      "B. 必須全程使用 Simple Past Tense（如 'The protagonist discovered...'）",
      "C. 必須全程使用 Future Tense 以免劇透",
      "D. 隨意交替使用過去式與現在式"
    ],
    ans: 0,
    exp: "描述電影、小說或戲劇中的虛構情節，英語慣例使用 Literary Present（一般現在式），例如 'Set in 1980s Kowloon, the story follows a young refugee who...'；同時切記簡介勿超全文 20%，且絕不劇透結局。"
  },
  {
    id: "q-p2-6",
    cat: "Paper 2 格式",
    stem: "以下哪個句式出現在 Formal Complaint Letter 結尾時「沒有」文法錯誤？",
    options: [
      "A. I look forward to hear from you soon.",
      "B. I am looking forward to receive your prompt reply.",
      "C. I look forward to hearing from you at your earliest convenience.",
      "D. I look forward for your prompt reply."
    ],
    ans: 2,
    exp: "look forward to 中的 to 是介詞（preposition），後面必須接動名詞（V-ing: hearing）或名詞（your prompt reply），絕不可接原形動詞 hear / receive！"
  },
  {
    id: "q-p3a-1",
    cat: "Paper 3A 聆聽排雷",
    stem: "【Paper 3A 模擬】錄音說：'We originally set the workshop fee at $150, then lowered it to $120 for early birds, though full-time students only pay half the original price.' 請問全日制學生需繳付多少元？",
    options: [
      "A. HK$150",
      "B. HK$120",
      "C. HK$75",
      "D. HK$60"
    ],
    ans: 2,
    exp: "小心雙重數字干擾！'half the ORIGINAL price' 指的是原價 $150 的一半，即 $75（而非早鳥價 $120 的一半 $60）！考場務必聽清指代對象。"
  },
  {
    id: "q-p3a-2",
    cat: "Paper 3A 聆聽排雷",
    stem: "【Paper 3A 態度推斷】在電台訪問中，受訪者談及新巴士路線時說：'Sure, it looks impressive on paper, but given how congested the tunnel gets every morning, I wouldn't hold my breath.' 她的態度最接近以下哪項？",
    options: [
      "A. Enthusiastic（熱烈支持）",
      "B. Sceptical（抱懷疑態度）",
      "C. Indifferent（漠不關心）",
      "D. Relieved（如釋重負）"
    ],
    ans: 1,
    exp: "'looks impressive on paper'（紙上談兵看似漂亮）加上地道慣用語 'I wouldn't hold my breath'（我不會抱太大期望），明確表達「懷疑／不看好」（Sceptical）。"
  },
  {
    id: "q-p3a-3",
    cat: "Paper 3A 串字地雷",
    stem: "以下哪一組 Paper 3A 高頻詞彙的串字「全部正確」？",
    options: [
      "A. accomodation / questionaire / maintainance",
      "B. accommodation / questionnaire / maintenance",
      "C. accommodation / questionaire / maintenance",
      "D. accomodation / questionnaire / maintainance"
    ],
    ans: 1,
    exp: "牢記三大串字王：accommodation（雙 c 雙 m）、questionnaire（雙 n 加 aire）、maintenance（中段是 ten 而非 tain）！"
  },
  {
    id: "q-p3a-4",
    cat: "Paper 3A 聆聽排雷",
    stem: "【Paper 3A 流程圖順序】錄音說：'Remember to double-check your bibliography before clicking submit—and prior to drafting the essay, you must get your topic approved by Ms. Lam.' 以下哪個是正確先後次序？",
    options: [
      "A. Check bibliography ➔ Submit ➔ Draft essay ➔ Topic approval",
      "B. Topic approval ➔ Draft essay ➔ Check bibliography ➔ Submit",
      "C. Draft essay ➔ Topic approval ➔ Check bibliography ➔ Submit",
      "D. Topic approval ➔ Check bibliography ➔ Draft essay ➔ Submit"
    ],
    ans: 1,
    exp: "破解倒敘陷阱！'prior to drafting' = 起草之前先獲批題目（1. Topic approval ➔ 2. Draft essay）；'before clicking submit' = 遞交之前先查書目（3. Check bibliography ➔ 4. Submit）。"
  },
  {
    id: "q-p4-1",
    cat: "Paper 4 口試策略",
    stem: "在 Paper 4 Group Interaction 中，組員 A 剛提出了一個很貴但未必可行的活動建議。以下哪句回應最能拿高「Communication Strategies」分？",
    options: [
      "A. 'I disagree with you. Your idea is too expensive. Let me tell you my idea...'",
      "B. 'I very agree with your creativity, but no money. Next point please.'",
      "C. 'I really like the creativity behind your idea, Candidate A. Having said that, I wonder if our budget might be a bit tight—could we scale it down slightly?'",
      "D. 保持沉默，等組員 B 講完再直接讀出自己筆記紙上的第二點。"
    ],
    ans: 2,
    exp: "C 完美示範「先讚賞緩衝 ➔ 用 Having said that 委婉提出顧慮 ➔ 給出建設性折衷方案並拋球互動」，展現高度禮貌、思辨與團隊合作精神！"
  },
  {
    id: "q-p4-2",
    cat: "Paper 4 中式英語",
    stem: "以下哪一句「沒有」港生常見的中式英語（Chinglish）錯誤？",
    options: [
      "A. According to my opinion, teenagers should spend less time on short videos.",
      "B. Let's discuss about how to encourage recycling at school.",
      "C. There have a lot of advantages to joining school clubs.",
      "D. From my perspective, joining school clubs brings tremendous social benefits."
    ],
    ans: 3,
    exp: "A 錯在 According to my opinion（應改 In my opinion）；B 錯在 discuss about（discuss 不加 about）；C 錯在 There have（應改 There are）。只有 D 完全地道正確！"
  },
  {
    id: "q-p4-3",
    cat: "Paper 4 連接詞",
    stem: "在 Paper 4 口語討論中，想自然轉折並補充另一角度，以下哪組連接詞聽起來最地道自然（而非死背論文腔）？",
    options: [
      "A. 'Having said that,' / 'On the flip side,'",
      "B. 'Notwithstanding the aforementioned premise,' / 'Heretofore,'",
      "C. 'Henceforth,' / 'Whereas on the contrary,'",
      "D. 'In addition to the above paragraph,' / 'As stated above,'"
    ],
    ans: 0,
    exp: "口語重視自然互動感！'Having said that,' / 'That being said,' / 'On the flip side,' 是極具 5** 氣質的地道口語轉折語；B/C/D 屬於過分生硬的書面或公文語。"
  },
  {
    id: "q-p4-4",
    cat: "Paper 4 口試策略",
    stem: "進行 Paper 4 Part B（1 分鐘 Individual Response）時，考官剛問完一條意見題，以下哪個策略最穩陣奪星？",
    options: [
      "A. 先用 25 秒逐字複述題目拖延時間，剩餘 35 秒才開始講理由",
      "B. 10 秒直接表態 ➔ 20 秒核心理由＋具體香港／個人實例 ➔ 20 秒延伸第二角度或讓步 ➔ 10 秒總結收尾",
      "C. 盡快在 25 秒內一口氣講完五個空泛論點，然後說 'That's all, thank you.' 乾等剩餘 35 秒",
      "D. 每講完一句都說 'Er... actually... I think...' 並低頭死盯桌面"
    ],
    ans: 1,
    exp: "黃金 10-20-20-10 秒結構能確保立場鮮明、例子飽滿有深度、善用整個 1 分鐘同時留有從容收結，絕不會出現「說不完被響鈴打斷」或「25 秒就詞窮冷場」的窘境！"
  }
];
