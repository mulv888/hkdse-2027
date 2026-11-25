/* ==========================================================================
   Paper 4（Speaking 說話能力 · 佔全科 10%）實戰話術庫、口語連接詞與 IR 一分鐘藍圖
   包含：7 大 Group Interaction 場景話術、口語 vs 書面連接詞對照、IR 5 大題型滿分示範、
   港生常見 Chinglish 修正表，以及互動計時模擬抽題庫
   ========================================================================== */

window.ENG_P4 = {
  overview: {
    structure: "10 分鐘備試室閱讀題目及寫筆記卡片（Note Card）➔ Part A 小組討論 Group Interaction（4 人組 8 分鐘；3 人組 6 分鐘）➔ Part B 個人回應 Individual Response（每人限時 1 分鐘）。",
    domains: [
      { name: "Pronunciation & Delivery（發音與表達 · 7 分）", tip: "毋須強求純正英美腔！考官看重：尾音清晰（-s / -ed / -t / -d 不吞音）、重音準確、語調有高低起伏（避免機械唸稿感）及適當停頓眼神接觸。" },
      { name: "Communication Strategies（互動溝通策略 · 7 分）", tip: "GI 奪星核心！切忌「自說自話輪流讀筆記」！每次發言先簡短回應上家（paraphrase + build on），適時邀請沉默組員、眼神掃視全組、自然點頭傾聽。" },
      { name: "Vocabulary & Language Patterns（詞彙與句式 · 7 分）", tip: "多用地道口語片語與精準搭配（e.g. strike a chord, double-edged sword, boil down to），靈活運用條件句與問句，避免卡殼重複 'very good / I think / actually'。" },
      { name: "Ideas & Organisation（內容與組織 · 7 分）", tip: "每次發言善用 P-R-E-E（Point 觀點 ➔ Reason 原因 ➔ Example 貼地例子 ➔ Effect/Link 影響或反問帶出下家），確保討論覆蓋題目全部 3 個 bullet points。" }
    ],
    giTimeline: [
      { phase: "0:00 – 0:45（開場定調）", move: "簡短問候破冰 ➔ 概括題目背景 ➔ 拋出第一個 bullet point 並先給一個簡潔觀點（切忌開頭獨佔 2 分鐘！）。" },
      { phase: "0:45 – 3:30（Bullet Point 1 深入互動）", move: "每人輪流回應並延伸（Agree + Add / Polite Counter），加入貼近香港生活的具體例子，避免空談。" },
      { phase: "3:30 – 6:30（順暢轉入 Bullet Point 2 & 3）", move: "留意時間！主動扮演「推進者」用過渡話術切入第二、第三個討論點，邀請較少發言的組員參與。" },
      { phase: "6:30 – 8:00（權衡收尾與共識）", move: "最後 1 分鐘開始歸納全組觀點（即使未達完全一致，亦可總結「我們一致同意 A，對 B 保留彈性」），優雅結束討論！" }
    ]
  },

  /* Part A 小組討論 7 大實戰場景話術庫（支援 [[...]] 遮蓋背誦與語音試聽） */
  giScenarios: [
    {
      id: "gi-open",
      title: "1. 搶頭啖湯開場與定調 (Opening the Discussion)",
      badge: "Opening",
      coachTip: "開場白控制在 25–35 秒內！語氣自然友善，千萬別用機械句 'Hello everyone, today we are going to discuss...'，試試直接帶入情境並拋球給組員！",
      phrases: [
        { en: "Good afternoon, everyone. Today we're [[putting our heads together]] to decide on [topic]. To [[kick things off]], why don't we look at the first point—[Bullet 1]?", zh: "各位下午好，今天我們一起集思廣益商討 [主題]。不如由第一個重點 [要點一] 開始吧？", level: "自然流暢" },
        { en: "Hi everyone—it's great to be discussing [topic] today, since it's something we can all [[relate to]]. If you don't mind, I'd love to [[get the ball rolling]] by sharing a quick thought on [Bullet 1].", zh: "大家好，今天討論的 [主題] 跟我們都息息相關。如果大家不介意，我想先拋磚引玉分享對 [要點一] 的想法。", level: "5** 破冰神句" },
        { en: "Since we've got [[quite a bit of ground to cover]] in eight minutes, shall we start by [[weighing up]] [Bullet 1] before moving on to [Bullet 2]?", zh: "我們在八分鐘內有不少內容要涵蓋，不如先權衡 [要點一]，再進到 [要點二] 好嗎？", level: "展現領導力" }
      ]
    },
    {
      id: "gi-opinion",
      title: "2. 表達立場與 P-R-E-E 深度闡述 (Stating & Elaborating Ideas)",
      badge: "P-R-E-E",
      coachTip: "告別只會說 'I think...'！改用多樣化的立場導入語，加上 'Take ... for instance' 引出貼地香港例子，立即拉高 Ideas 分數。",
      phrases: [
        { en: "From my perspective, the [[biggest selling point]] of [X] is that...", zh: "從我的角度看，[X] 最大的賣點在於……", level: "推薦活動／方案" },
        { en: "What [[strikes me most]] about [X] is that... [[Take ... for instance]]: ...", zh: "[X] 最令我印象深刻的是……就以……為例：……", level: "舉例延伸" },
        { en: "If you look at [[the bigger picture]], [X] isn't just about [A]—it's really about [B].", zh: "若從更宏觀的角度看，[X] 不只是關乎 [A]，更核心的是 [B]。", level: "5** 昇華觀點" },
        { en: "[[When it comes down to it]], what teenagers genuinely care about is...", zh: "歸根結底，青少年真正在意的是……", level: "地道口語" }
      ]
    },
    {
      id: "gi-build",
      title: "3. 認同並延伸組員觀點 (Agreeing & Building On — 互動滿分秘訣！)",
      badge: "互動核心 ★",
      coachTip: "千萬別說完 'I agree with Candidate A.' 就硬轉講自己的筆記！先用 5 個字複述對方核心詞（Echoing），再順勢加料（Adding a new angle / example），這叫真正的 Interaction！",
      phrases: [
        { en: "[[You've hit the nail on the head]], Candidate A. Building on your point about [keyword], I'd also add that...", zh: "A 同學一針見血！順著你剛才提到的 [關鍵詞]，我還想補充……", level: "高分互動" },
        { en: "[[I couldn't agree more]] with what you just said about [keyword]. In fact, that [[reminds me of]]...", zh: "我完全同意你剛才關於 [關鍵詞] 的看法。事實上，這讓我聯想到……", level: "自然銜接" },
        { en: "That's a [[really insightful angle]]. Taking that idea one step further, we could even...", zh: "這個切入點非常有見地。把這個想法再推前一步，我們甚至可以……", level: "創意拓展" },
        { en: "[[Piggybacking on]] Candidate B's suggestion, what if we combined [Idea 1] with [Idea 2]?", zh: "借用 B 同學的建議，如果我們把 [點子一] 和 [點子二] 結合起來會怎樣？", level: "5** 整合力" }
      ]
    },
    {
      id: "gi-disagree",
      title: "4. 禮貌反駁與多角度切入 (Polite Disagreement & Countering)",
      badge: "思辨對碰",
      coachTip: "切忌直接說 'I disagree with you!' 或 'You are wrong!'——極度不禮貌會倒扣 Communication 分！永遠用「先認同緩衝（Softener）＋ 轉折提出盲點」的雙明治結構。",
      phrases: [
        { en: "[[I totally see where you're coming from]], Candidate C. [[Having said that]], I wonder if we might run into a practical problem with...", zh: "C 同學，我完全明白你的出發點。話雖如此，我想知道我們在……方面會否遇到實際困難？", level: "5** 禮貌拆招" },
        { en: "[[That's certainly a fair point]], especially regarding [X]. Still, [[playing devil's advocate for a second]], what about students who...?", zh: "這確是個公允的觀點，尤其在 [X] 方面。不過容我暫且從反面思考一下：對於那些……的同學又如何？", level: "高階反方視角" },
        { en: "I like the idea [[in theory]], though [[in practice]] it might be a bit tough to pull off because...", zh: "這個構思在理論上很吸引，但實際執行上可能有點難度，因為……", level: "務實反駁" },
        { en: "I'm [[in two minds about]] that—while [Benefit] sounds appealing, the downside is...", zh: "我對這點有點舉棋不定——雖然 [好處] 很吸引，但缺點是……", level: "溫和保留" }
      ]
    },
    {
      id: "gi-rescue",
      title: "5. 澄清、邀請沉默組員與「救場」神句 (Clarifying, Inviting & Rescuing)",
      badge: "救場必背",
      coachTip: "遇上「全場冷場」、「豬隊友講到離題」、「麥霸搶咪」或「自己突然腦袋空白」？以下救場話術能反敗為勝，讓考官對你的溝通應變刮目相看！",
      phrases: [
        { en: "【邀請沉默組員】Candidate D, you've been listening closely—[[we'd love to hear your take on]] this. What do you think about [X]?", zh: "D 同學，你剛才聽得很專心，我們很想聽聽你的看法。你對 [X] 有什麼意見？", level: "加分善意球" },
        { en: "【禮貌打斷麥霸】[[Sorry to jump in for a moment]], Candidate A—that's a great point, and before we lose track of time, maybe we should also hear how everyone feels about [next point]?", zh: "不好意思插一句，A 同學說得很好；趁還有時間，不如我們也聽聽大家對 [下一點] 的想法？", level: "優雅控場" },
        { en: "【聽不懂對方意思】Just to [[make sure we're on the same page]], are you suggesting that we should [paraphrase]?", zh: "為了確保我們理解一致，你的意思是建議我們 [簡短複述] 嗎？", level: "化解誤解" },
        { en: "【自己突然卡殼／說錯】[[Let me rephrase that]]—what I'm really trying to [[get at]] is that...", zh: "讓我換個方式說——我真正想表達的核心是……", level: "零尷尬自救" },
        { en: "【拉回離題討論】That's an interesting side note, though to [[stay focused on our task]], perhaps we should tie it back to [prompt topic].", zh: "這是個有趣的延伸，不過為免偏離主題，不如我們扣回 [題目焦點] 吧。", level: "王者救場" }
      ]
    },
    {
      id: "gi-transition",
      title: "6. 流暢轉場與控時推進 (Transitioning Between Sub-topics)",
      badge: "控時節奏",
      coachTip: "如果前 4 分鐘還卡在第一個 bullet point，一定要主動出手轉場，展現對時間與任務結構的全局掌控！",
      phrases: [
        { en: "It sounds like we've [[covered quite a lot of ground]] on [Point 1]. [[Keeping an eye on the clock]], shall we move on to [Point 2]?", zh: "看來我們在 [要點一] 已經討論得很充分。留意一下時間，不如進入 [要點二] 好嗎？", level: "自然轉場" },
        { en: "[[Speaking of]] [keyword from previous speaker], that actually [[leads us nicely into]] our next question: [Point 2].", zh: "說到 [上家關鍵詞]，這剛好順理成章帶我們進入下一個問題：[要點二]。", level: "5** 無縫轉場" },
        { en: "Before we wrap up [Point 2], there's one last aspect we shouldn't overlook—[Point 3]. Any thoughts?", zh: "在結束 [要點二] 之前，還有最後一個層面不容忽視——[要點三]。大家有想法嗎？", level: "推進全覆蓋" }
      ]
    },
    {
      id: "gi-conclude",
      title: "7. 達致共識與優雅總結 (Reaching Consensus & Wrapping Up)",
      badge: "完美收官",
      coachTip: "未必需要強行達成 100% 單一結論——若時間快到（剩下約 45 秒），概括大家已有的共識＋保留分歧點（'agree to disagree'）已是非常成熟的 5** 收尾！",
      phrases: [
        { en: "[[To pull all our ideas together]], it seems we're largely [[in agreement that]] [Consensus A] is our top priority, while [Consensus B] could serve as a backup.", zh: "綜合我們所有人的想法，看來我們大致同意 [共識 A] 是首要之選，而 [共識 B] 可作後備方案。", level: "總結大將風範" },
        { en: "It looks like we're [[running short on time]], so let's quickly [[recap]] what we've decided: first..., second..., and finally... Does everyone feel happy with that?", zh: "看來時間差不多了，我們快速總結一下剛才的決定：第一……第二……最後……大家都認同嗎？", level: "確認共識" },
        { en: "Even though we have slightly different preferences on [X], I think we can all [[find common ground]] in saying that [shared core value]. Thanks, everyone—great discussion!", zh: "雖然我們在 [X] 上各有偏好，但我相信我們都能在 [共同核心價值] 上找到共識。謝謝大家，很棒的討論！", level: "化解分歧收尾" }
      ]
    }
  ],

  /* 口語專用連接詞總表（自然口語 vs 忌濫用的生硬書面語） */
  connectors: [
    {
      func: "補充延伸 (Adding Ideas)",
      natural: ["On top of that,", "Not to mention...", "Another thing worth bearing in mind is...", "Building on that,"],
      avoid: "切忌每句機械重複 Moreover / Furthermore / Besides",
      example: "On top of that, volunteering helps students pick up soft skills you simply can't learn from textbooks."
    },
    {
      func: "轉折對比 (Contrasting / Softening)",
      natural: ["Having said that,", "That being said,", "On the flip side,", "Mind you,", "Then again,"],
      avoid: "減少過度生硬的 Nevertheless / Conversely / Albeit",
      example: "Online tutorials are super convenient. Having said that, nothing beats asking a teacher face-to-face."
    },
    {
      func: "舉例說明 (Giving Examples)",
      natural: ["Take ... for instance,", "For one thing,", "Think about how...", "A classic example would be..."],
      avoid: "避免永遠只講 For example / Such as",
      example: "Take the recent eco-cup campaign at our school, for instance—students jumped right on board once there was a small discount."
    },
    {
      func: "歸納因果與重點 (Cause, Result & Emphasis)",
      natural: ["Because of this,", "That's precisely why...", "What it really boils down to is...", "At the end of the day,"],
      avoid: "避免書面公文詞 Hence / Thus / Therefore 連發",
      example: "At the end of the day, it really boils down to striking a healthy balance between grades and mental health."
    },
    {
      func: "換句話說與澄清 (Clarifying / Rephrasing)",
      natural: ["To put it simply,", "In other words,", "What I mean by that is...", "Put differently,"],
      avoid: "避免停頓沉默十秒或說 'Er... how to say...'",
      example: "To put it simply, we need guidance rather than strict bans."
    },
    {
      func: "順勢承接話題 (Linking Back to Someone)",
      natural: ["Speaking of which,", "That reminds me of...", "Along those same lines,", "Following on from that,"],
      avoid: "避免生硬跳題 'Now I want to talk about my point'",
      example: "Speaking of tight budgets, we could actually team up with local NGOs to cut costs!"
    }
  ],

  /* Part B Individual Response (1 分鐘個人回應) 黃金結構與五大題型滿分示範 */
  irGuide: {
    formula: [
      { sec: "0:00 – 0:10（10 秒）", stage: "1. Direct Stance（直截表態）", tip: "用清晰的一句話直接回答問題（Yes / No / It depends on...），切忌繞圈或重複唸題目 15 秒！" },
      { sec: "0:10 – 0:32（22 秒）", stage: "2. Main Reason + Concrete Example（核心理由＋生活實例）", tip: "說出最強理由，立刻補上一個具體香港例子或自身經歷（真實感是 IR 奪星密碼！）。" },
      { sec: "0:32 – 0:50（18 秒）", stage: "3. Second Angle or Nuance（延伸第二角度／讓步轉折）", tip: "用 'On top of that...' 或 'Having said that...' 帶出第二層思考，證明思維全面且不詞窮。" },
      { sec: "0:50 – 1:00（10 秒）", stage: "4. Crisp Wrap-up（利落收結）", tip: "用一句話呼應開頭收尾（'So all in all, ...'），在鈴聲響前從容結束！" }
    ],
    types: [
      {
        type: "題型 1：個人經歷類 (Personal Experience)",
        question: "Have you ever taken part in a memorable school event? Why was it special to you?",
        sample: "Definitely—the most memorable event for me was our school's charity night market last winter. First and foremost, it gave me my very first taste of running a real booth from scratch. My classmates and I stayed back after school for two weeks designing eco-friendly tote bags and negotiating with suppliers, which taught me far more about teamwork than any classroom lesson could. On top of that, seeing teachers, alumni and even neighbourhood residents come together to raise over twenty thousand dollars for elderly homes was genuinely heartwarming. Whenever I feel overwhelmed by DSE prep now, I look back on that evening as a reminder of what we can achieve when we work with purpose. So all in all, it wasn't just a fun night—it was a real confidence booster."
      },
      {
        type: "題型 2：觀點表態類 (Opinion / Agree or Disagree)",
        question: "Do you think secondary school students should be allowed to wear casual clothes to school?",
        sample: "Honestly, I'm a bit in two minds, though on balance I'd lean towards keeping school uniforms—with occasional 'dress-casual days'. The main reason is that uniforms act as a great social equaliser. When everyone wears the same outfit, teenagers spend less time worrying about designer brands or peer comparison, and mornings become far less stressful! Having said that, I do understand students' desire to express their individuality. That's precisely why introducing a monthly casual-wear day tied to charity fundraising strikes the smartest middle ground. At the end of the day, keeping uniforms daily while leaving room for periodic self-expression gives us the best of both worlds."
      },
      {
        type: "題型 3：比較選擇類 (Comparison / Preference)",
        question: "Would you rather study alone at home or with friends in a public library?",
        sample: "Personally, I'd choose studying with one or two focused friends at a public library any day of the week. To start with, my bedroom at home is packed with distractions—my bed is literally two steps away, and it's way too tempting to lie down for a 'five-minute break' that turns into an hour! In contrast, being surrounded by other hard-working students in a quiet library creates a subtle sense of accountability that keeps me on track. Plus, having a study buddy means we can quiz each other on tricky Maths questions or swap English essay ideas during short breaks. So as long as I pick disciplined companions, library group study wins hands down for me."
      },
      {
        type: "題型 4：原因與解決方案類 (Causes & Solutions)",
        question: "Why do you think many Hong Kong teenagers don't get enough sleep, and what can be done about it?",
        sample: "I think teen sleep deprivation in Hong Kong really boils down to two things: intense academic pressure and 'revenge bedtime procrastination'. After spending all day in lessons and evening tutorials, many of us finally get free time at 11 p.m.—so we stay up scrolling on our phones just to feel in control of our lives! To tackle this, I believe schools could slightly trim repetitive homework, while we students need to set realistic digital boundaries, like charging our phones outside the bedroom or switching on bedtime reminders. Ultimately, getting enough sleep shouldn't be treated as laziness—it's actually the smartest investment we can make in our focus and mood."
      },
      {
        type: "題型 5：假設與未來展望類 (Hypothetical / Future)",
        question: "If you could introduce one brand-new compulsory subject to Hong Kong secondary schools, what would it be?",
        sample: "If I had the power to add one compulsory subject, it would undoubtedly be 'Practical Life & Financial Literacy'. Right now, we spend years mastering trigonometry and classical essays, yet many graduates enter adulthood without knowing how to budget a monthly salary, read a rental contract, or spot online financial scams. Imagine having just one weekly interactive lesson where students simulate managing living expenses, filing taxes, or practising mental-health first aid! Not only would that ease young adults' anxiety about stepping into society, but it would also bridge the gap between school and real life. To put it simply, teaching students how to thrive beyond exam halls is just as vital as academic excellence."
      }
    ]
  },

  /* 港生 Paper 4 常見中式英語（Chinglish）排雷表 */
  chinglishFixes: [
    { wrong: "I very agree with you.", right: "I completely / totally agree with you. / I couldn't agree more.", note: "agree 是動詞，絕不能用 very 修飾！" },
    { wrong: "There have many people in Hong Kong...", right: "There are many people in Hong Kong... / Hong Kong has...", note: "經典致命文法錯！不可把 There are 與 have 混在一起。" },
    { wrong: "I will tell you my point first.", right: "Let me kick things off by sharing my thoughts on...", note: "avoid 命令式生硬語氣，改用邀請式互動口吻。" },
    { wrong: "According to my opinion, ...", right: "In my opinion, ... / From my perspective, ...", note: "According to 只用於引述「他人或報告」（According to the survey...），絕不配 my opinion！" },
    { wrong: "It is very convenience / It can help us more easily.", right: "It is super convenient / It makes our lives much easier.", note: "分清詞性：convenience (n.) vs convenient (adj.)！" },
    { wrong: "Let's discuss about the first point.", right: "Let's discuss the first point. / Let's talk about the first point.", note: "discuss 是及物動詞，後面直接接名詞，不加 about！" },
    { wrong: "My speaking is finished. Thank you.", right: "So all in all, that's why I feel... (自然語氣收尾即可，IR 也可簡單說 Thank you.)", note: "絕不要說 'My speaking is finished'！" }
  ],

  /* 互動 1 分鐘 IR & 8 分鐘 GI 隨機抽題練習池 */
  practicePrompts: {
    ir: [
      "Do you think AI chatbots are making students lazier or smarter? Explain your view.",
      "Should secondary schools ban smartphones completely during school hours?",
      "What is one skill you wish you had learned earlier in your teenage years, and why?",
      "Do you prefer travelling independently or joining a guided tour? Why?",
      "Is it better for teenagers to have a part-time job during summer holidays, or focus on rest and hobbies?",
      "How has social media changed the way young people make and maintain friendships?",
      "Would you rather live in a bustling city centre like Mong Kok or a quiet outlying island like Lamma Island?",
      "Do you think celebrities and influencers have a responsibility to be good role models for youth?",
      "What do you think is the most effective way for Hong Kong to encourage recycling among young people?",
      "If you received HK$50,000 to improve one aspect of your school, how would you spend it?"
    ],
    gi: [
      {
        title: "Organising a 'Digital Detox Weekend' for Secondary Students",
        bullets: ["What outdoor or offline activities would attract students to join", "Possible challenges in persuading teenagers to give up their phones for 48 hours", "How to promote the event effectively across school"]
      },
      {
        title: "Revitalising Traditional Hong Kong Street Markets for Young Locals & Tourists",
        bullets: ["Why younger generations are visiting wet markets and street stalls less often", "Creative ways to blend heritage charm with modern appeal", "How to avoid driving up rents for existing small vendors"]
      },
      {
        title: "Setting Up a Student Mental Health Peer-Support Programme",
        bullets: ["Common sources of stress faced by senior secondary students today", "What training and boundaries student peer-supporters should have", "How to reduce the stigma around asking for help"]
      },
      {
        title: "Designing a 'Future Skills Week' After Final Exams",
        bullets: ["Which practical workshops (e.g. AI literacy, personal finance, public speaking) are most useful", "Whether alumni or external professionals should be invited as speakers", "How to keep students genuinely engaged rather than treating it as free time"]
      }
    ]
  }
};
