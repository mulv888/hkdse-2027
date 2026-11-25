/* ==========================================================================
   Paper 2 高分 5** 範文精讀庫（6 篇全真示範：涵蓋 Part B 五大文體 ＋ Part A 短文）
   內置互動亮點標記：
   {{v|詞彙或搭配|評析}} = C1/C2 精準詞彙 (Vocabulary)
   {{s|進階句型|評析}}   = 5** 複雜句型與修辭 (Syntax & Devices)
   {{d|銜接過渡|評析}}   = 組織銜接與論證結構 (Discourse & Structure)
   ========================================================================== */

window.ENG_P2_ESSAYS = [
  {
    id: "essay-lte-ai",
    part: "Part B",
    genre: "Letter to the Editor（致編輯的信）",
    topicTag: "科技與教育 · 2027 大熱議題",
    title: "Embracing AI Responsibly in Hong Kong Classrooms Rather Than Banning It Outright",
    prompt: "Recently, a local school principal wrote to the newspaper proposing a blanket ban on generative AI tools (such as ChatGPT) for all secondary school homework. Write a letter to the editor expressing your views on this proposal. Sign your name as Chris Wong. (Approx. 400–500 words)",
    wordCount: "約 465 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "salutation", text: "Dear Editor," },
      {
        type: "body",
        role: "引言段：交代來信緣由 ＋ 破題定調",
        text: "I am writing in response to the letter published in your columns last week advocating a {{v|blanket ban|全面禁令（精準新聞詞彙）}} on generative artificial intelligence tools in secondary school homework. {{s|Understandable as educators' anxiety over academic integrity may be,|形容詞前置讓步倒裝句（As-concession）取代平庸的 Although...}} I firmly contend that prohibiting AI outright is both {{v|short-sighted|短視的}} and counterproductive; rather, schools should equip students to harness these tools ethically and critically."
      },
      {
        type: "body",
        role: "正文一：論點一（現實裝備與未來競爭力）",
        text: "{{d|First and foremost,|清晰領起核心論點一}} banning AI inside school walls does nothing to prepare young people for the world awaiting them beyond graduation. Across Hong Kong's financial, medical and creative sectors, generative AI is already reshaping daily workflows at an {{v|unprecedented pace|前所未有的速度}}. {{s|Not only does early, guided exposure demystify how algorithms operate, but it also trains students to verify information rather than accept machine output at face value.|Not only... but also 否定倒裝句，同時帶出批判思維深度}} A case in point is using AI chatbots to brainstorm essay counter-arguments or receive instant grammatical feedback before revising drafts independently. {{d|Viewed in this light,|高階總結過渡，回扣主題}} AI serves not as a crutch, but as a personalised tutor that narrows learning gaps for students who cannot afford private tuition."
      },
      {
        type: "body",
        role: "正文二：論點二（從禁止轉向改革評核方式）",
        text: "{{d|Equally compelling is the fact that|名詞化／表語前置句式，優雅替代呆板的 Secondly}} a prohibition merely masks an outdated assessment model. If a take-home assignment can be completed effortlessly with a single prompt, {{s|it is the design of the task—rather than the technology itself—that warrants urgent reform.|It is... rather than... that 強調句（Cleft Sentence），一針見血！}} Educators could place greater weight on in-class writing, oral defences of submitted projects, and process portfolios documenting how ideas evolve. {{s|By shifting the focus from polished final products to transparent thinking processes,|By + V-ing 結構精練帶出因果}} schools can preserve fairness while fostering genuine curiosity."
      },
      {
        type: "body",
        role: "正文三：讓步與精準反駁（5** 必備思辨段）",
        text: "{{d|Admittedly,|經典讓步標記}} proponents of a ban raise a legitimate concern: over-reliance on AI may {{v|erode foundational writing and reasoning skills|侵蝕基礎寫作與推理能力}}. {{d|Plausible as this warning sounds, however,|再次展現高度控場感的讓步反駁銜接}} history offers a reassuring parallel. When electronic calculators entered mathematics classrooms decades ago, critics similarly predicted the demise of numeracy; yet instead of banning calculators, educators established clear boundaries—separating mental arithmetic drills from complex problem-solving. The same principle applies today: structured guidelines, {{v|coupled with|連同（正式書面佳選）}} explicit lessons on plagiarism and AI hallucinations, will cultivate far stronger self-discipline than unenforceable bans that merely drive usage underground."
      },
      {
        type: "body",
        role: "結尾段：重申立場 ＋ 呼籲公眾與當局行動",
        text: "{{d|In conclusion,|簡潔收束}} attempting to insulate students from artificial intelligence is akin to trying to hold back the tide. I hope your newspaper can spark a constructive dialogue urging the Education Bureau and school leaders to invest in teacher training and clear AI literacy frameworks. {{s|Only by teaching our youth to master technology, instead of fearing it, can Hong Kong nurture resilient thinkers ready for tomorrow.|Only by... can... 倒裝金句壓軸收尾！}}"
      },
      { type: "signoff", text: "Yours faithfully,\nChris Wong" }
    ],
    commentary: {
      content: "精準扣緊香港教育實況（補習資源差距、教育局角色、課堂口頭答辯評估改革），並巧妙以「昔日計數機進入數學課室」作歷史類比反駁禁令論，立意遠超一般「AI 好方便／AI 會令人懶惰」的平面寫法。",
      language: "全文零冗詞，靈活穿插形容詞倒裝（Understandable as...）、否定倒裝（Not only does...）、強調句（It is... rather than... that...）及 Only by... 結尾倒裝；詞彙搭配極具報章社評水準（blanket ban, at face value, erode foundational skills, drive usage underground）。",
      organisation: "完全符合 Letter to the Editor 格式（Dear Editor, / 提及 your columns / 呼應 newspaper 角色 / Yours faithfully, Chris Wong）；每段主題句鮮明，段與段之間由「學生未來」➔「評核改革」➔「歷史反駁」層層推進。"
    },
    stealables: [
      { en: "Understandable as [X] may be, I firmly contend that...", zh: "儘管 [X] 可以理解，我堅信……（高階讓步開篇）" },
      { en: "It is [A]—rather than [B]—that warrants urgent reform.", zh: "亟需改革的其實是 [A]，而非 [B]。（強調句精準歸因）" },
      { en: "Viewed in this light, [X] serves not as a crutch, but as a catalyst for...", zh: "從這個角度看，[X] 並非依賴拐杖，而是促進……的催化劑。" },
      { en: "Only by [V-ing], instead of [V-ing], can society nurture...", zh: "唯有透過……而非……，社會才能培育……（萬用壓軸倒裝）" }
    ]
  },

  {
    id: "essay-arg-hustle",
    part: "Part B",
    genre: "Argumentative Essay（議論文）",
    topicTag: "青年與心理健康 · 社會文化",
    title: "Beyond Endless Grind: Why Glorifying 'Hustle Culture' Harms Young People",
    prompt: "Many young people in Hong Kong feel pressured to fill every waking hour with studying, internships and side hustles in pursuit of success. Write an argumentative essay discussing whether 'hustle culture' does more harm than good to today's youth. (Approx. 400–500 words)",
    wordCount: "約 455 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "title", text: "Beyond the Endless Grind: Why Hustle Culture Does More Harm Than Good" },
      {
        type: "body",
        role: "引言段：描繪社會現象 ＋ 亮出鮮明論點",
        text: "In hyper-competitive Hong Kong, busyness has quietly evolved from a necessity into a {{v|badge of honour|榮譽勳章（極具畫面感比喻）}}. From secondary students juggling back-to-back tutorial classes to university graduates glorifying sleepless nights on social media, 'hustle culture'—the relentless pursuit of productivity at all costs—is widely hailed as the surest ladder to success. {{d|Yet beneath this veneer of ambition,|以對比轉折引出核心立場}} I strongly believe that such a mindset ultimately inflicts far more harm than good on young people's well-being and long-term potential."
      },
      {
        type: "body",
        role: "正文一：對身心健康的嚴重代價（焦慮與過勞）",
        text: "{{d|The most immediate casualty of hustle culture is|以具體名詞短語領起段落，遠勝 Firstly}} youth mental health. {{s|Conditioned to equate self-worth solely with grades, résumés and constant output,|過去分詞構句（Past Participle Clause）開篇，凝練有力}} many teenagers experience {{v|pervasive guilt|揮之不去的內疚感}} whenever they pause to rest. Chronic sleep deprivation and unremitting stress do not merely leave students exhausted; they precipitate anxiety disorders, emotional numbness and severe burnout. A recent local youth survey revealed that nearly half of secondary pupils report persistent stress symptoms, a sobering reminder that {{s|no academic accolade can compensate for a fractured mind.|簡短有力的格言式收尾句}}"
      },
      {
        type: "body",
        role: "正文二：窒礙創造力與深度思考（拆解「越忙越成功」迷思）",
        text: "{{d|Equally troubling is the paradox that|以「悖論」切入，展現高階思辨}} perpetual overwork actually undermines the very excellence it claims to cultivate. Genuine creativity and analytical breakthroughs rarely emerge from an overloaded schedule; rather, they require unhurried reflection and room to experiment—and occasionally fail. {{s|When every spare afternoon is colonised by résumé-building drills,|生動動詞 colonised 精準刻畫時間被侵佔}} young people become adept at ticking boxes yet struggle to discover authentic passions. {{d|Consequently,|自然因果推演}} hustle culture risks producing an anxious generation of high-achieving conformists rather than resilient innovators."
      },
      {
        type: "body",
        role: "正文三：讓步反駁（區分「勤奮」與「盲目過勞」）",
        text: "{{d|Of course, advocates of relentless striving argue that|公允呈現反方論點}} grit and perseverance are indispensable in a tight job market, and that early discipline builds character. {{d|While there is undeniable merit in hard work,|精準讓步}} this argument commits a crucial fallacy by conflating healthy diligence with toxic exhaustion. Sustainable ambition is akin to training for a marathon: athletes improve not by sprinting non-stop until they collapse, but by pairing intense effort with deliberate recovery. {{s|Hard work empowers youth only when it is purposeful and balanced;|分號並列強化對比}} when pushed to extremes, it becomes self-defeating."
      },
      {
        type: "body",
        role: "結論段：總結昇華 ＋ 重新定義成功",
        text: "{{d|In the final analysis,|正式議論文結尾標記}} hustle culture sells young people a mirage—promising fulfilment while quietly draining their joy, health and imagination. True progress does not demand that we abandon ambition; instead, it calls on schools, parents and employers to redefine success around sustainable growth rather than sheer exhaustion. {{s|After all, a generation that knows how to rest wisely will always outlast one that burns out early.|首尾呼應的警句式結尾}}"
      }
    ],
    commentary: {
      content: "最大亮點在於沒有一味反對努力，而是在第三正文段精闢區分「Healthy Diligence（健康勤奮）」與「Toxic Exhaustion（有害過勞）」，並以「馬拉松訓練須配搭恢復期」作絕妙比喻，思維成熟度十足 5**。",
      language: "善用精練意象詞彙（badge of honour, veneer of ambition, colonised, mirage, conformists），句式張弛有度（分詞構句、長短句對比、分號平衡結構）。",
      organisation: "Essay 無需稱謂及署名；四段論證緊密銜接：心理代價 ➔ 窒礙創意（悖論視角）➔ 駁論區分勤奮與內耗 ➔ 價值觀昇華，全程零機械式 'Firstly/Secondly/Thirdly'！"
    },
    stealables: [
      { en: "Conditioned to equate self-worth solely with [X], many young people...", zh: "在長期被灌輸將自我價值僅等同於 [X] 的環境下，許多年輕人……" },
      { en: "This argument commits a crucial fallacy by conflating [A] with [B].", zh: "這個論點犯了關鍵謬誤，將 [A] 與 [B] 混為一談。（極強反駁萬用句！）" },
      { en: "Equally troubling is the paradox that [X] actually undermines the very [Y] it claims to cultivate.", zh: "同樣令人憂慮的悖論是，[X] 實際上正在削弱它聲稱要培養的 [Y]。" },
      { en: "In the final analysis, [X] sells society a mirage—promising [A] while quietly draining [B].", zh: "歸根結底，[X] 只是向社會兜售海市蜃樓——承諾 [A]，卻悄悄耗盡 [B]。" }
    ]
  },

  {
    id: "essay-proposal-hub",
    part: "Part B",
    genre: "Proposal（計劃建議書）",
    topicTag: "校園生活與可持續發展",
    title: "Proposal for Transforming the School Rooftop into a 'Green Wellness & Study Hub'",
    prompt: "Your school has an unused rooftop space and the Principal has invited the Student Union to submit a proposal suggesting how to convert it into a meaningful facility for students. Write the proposal explaining your ideas, expected benefits and practical arrangements. (Approx. 400–500 words)",
    wordCount: "約 470 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "title", text: "Proposal for Transforming the School Rooftop into a 'Green Wellness & Study Hub'" },
      { type: "meta", text: "To: Principal Chan   |   From: Chris Wong, Chairperson of the Student Union   |   Date: 10 March 2027" },
      { type: "subhead", text: "1. Introduction and Objectives" },
      {
        type: "body",
        role: "背景痛點 ＋ 計劃目標",
        text: "With senior students facing mounting examination pressure and the school library frequently operating at full capacity, our campus urgently needs a restorative space that balances study and mental rejuvenation. This proposal outlines a {{v|cost-effective and eco-friendly|具成本效益且環保的}} plan to convert our {{v|underutilised|未被充分利用的}} rooftop into a 'Green Wellness & Study Hub'. The initiative seeks to achieve three core objectives: alleviating academic stress, promoting hands-on sustainability education, and strengthening peer connection across forms."
      },
      { type: "subhead", text: "2. Proposed Facilities and Programmes" },
      {
        type: "body",
        role: "具體建議一（硬件分區）＋ 建議二（軟件活動）",
        text: "{{d|First, a Shaded Eco-Study Terrace:|小標題加粗感引出方案一}} We propose installing retractable solar-powered awnings, weather-resistant timber benches and charging stations along the northern side of the rooftop. {{s|Not only would this provide 35 additional study seats during peak exam seasons, but the solar panels would also serve as a living classroom for Physics and Geography lessons.|將設施跨科連結學習，說服力極高！}}\n\n{{d|Second, an Urban Herbal Garden & Recharge Corner:|方案二兼顧環保與減壓}} The southern half can feature modular vertical planters growing mint, rosemary and cherry tomatoes tended by student volunteers. Adjacent beanbags and a quiet reading nook will allow pupils to unwind during lunch recesses. {{s|Bi-weekly 'Unplug & Breathe' peer-led workshops could further transform the corner into a safe harbour for mindfulness.|用情態動詞 could 保持禮貌建議語氣}}"
      },
      { type: "subhead", text: "3. Feasibility, Budget and Safety Management" },
      {
        type: "body",
        role: "5** 致勝段：主動拆解校長最擔心的「錢、安全、人手」問題",
        text: "{{s|Recognising that budget constraints and safety are paramount considerations,|現在分詞構句展現換位思考}} we have designed the hub to be both affordable and low-maintenance. Initial construction costs can be largely offset by applying for the government's Environment and Conservation Fund alongside an alumni 'Sponsor-a-Planter' campaign. {{d|Regarding supervision and safety,|清晰轉入安全與管理}} access will be restricted to recess and after-school hours (12:30–17:30) with heightened safety railings and non-slip flooring. A roster of trained senior prefects and Environmental Club ambassadors will oversee daily upkeep, {{s|thereby minimising any additional administrative burden on teaching staff.|thereby + V-ing 正式公文必殺句型！}}"
      },
      { type: "subhead", text: "4. Conclusion" },
      {
        type: "body",
        role: "總結價值 ＋ 禮貌請求審批",
        text: "{{d|In summary,|簡明總結}} converting the idle rooftop into a Green Wellness & Study Hub represents a {{v|forward-looking investment|具前瞻性的投資}} in both student well-being and environmental stewardship. {{s|Should the School Management Committee grant approval in principle,|Should 省略 if 條件倒裝句，極具商務正式格調！}} the Student Union will gladly coordinate a detailed timeline and student consultation. We earnestly hope this proposal meets with your favourable consideration."
      }
    ],
    commentary: {
      content: "完美示範 5** Proposal 的核心秘訣——「站在決策者（校長）角度思考」：不止提出具創意的軟硬件方案，更將太陽能板連結物理／地理課堂，並主動給出經費來源（環保基金＋校友認捐）、防滑安全圍欄及學生領袖輪值制度（減輕老師負擔），完全切中校方考量。",
      language: "商務與校務正式語氣一絲不苟，善用 underutilised, cost-effective, thereby minimising..., Should the Committee grant approval... 等地道正式結構，語氣禮貌而專業。",
      organisation: "完整呈現標準 Proposal 結構（標題 ➔ To/From/Date ➔ 4 個清晰編號分節），無誤加書信稱謂或 Yours faithfully，極易閱讀。"
    },
    stealables: [
      { en: "Recognising that budget constraints and safety are paramount considerations, we propose...", zh: "鑑於經費限制與安全乃首要考量，我們建議……（展現決策思維）" },
      { en: "... will oversee daily upkeep, thereby minimising any additional burden on teaching staff.", zh: "……將負責日常維護，從而把對教職員的額外負擔減至最低。" },
      { en: "Should the committee grant approval in principle, we will gladly...", zh: "倘委員會原則上批准，我們將樂意……（Should 條件倒裝句）" },
      { en: "We earnestly hope this proposal meets with your favourable consideration.", zh: "我們懇切希望本建議書獲閣下正面考慮。（Proposal 壓軸金句）" }
    ]
  },

  {
    id: "essay-article-crafts",
    part: "Part B",
    genre: "Feature Article（雜誌專題文章）",
    topicTag: "流行文化與本土保育",
    title: "Neon, Bamboo and TikTok: Why Gen Z Is Falling Back in Love with Hong Kong's Dying Crafts",
    prompt: "Write a feature article for a youth lifestyle magazine exploring why many young people in Hong Kong are suddenly taking an interest in traditional local crafts and cultural heritage, and what this trend means for the city. (Approx. 400–500 words)",
    wordCount: "約 460 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "title", text: "Neon, Bamboo and Reels: Why Gen Z Is Falling Back in Love with Hong Kong's Dying Crafts" },
      { type: "byline", text: "By Chris Wong" },
      {
        type: "body",
        role: "雜誌式畫面開場（Hook）＋ 趨勢導入",
        text: "Step inside a cramped workshop tucked away on the fourth floor of a Sham Shui Po {{v|walk-up building|唐樓（地道香港英語詞彙）}} on any Saturday afternoon, and you will witness an unlikely scene. Perched beside a 78-year-old master mahjong carver are six teenagers, eyes narrowed in concentration, chiselling delicate Chinese characters into gleaming acrylic tiles. {{s|Not a single smartphone is being scrolled—except to film a proud thirty-second Reel of the finished tile.|破折號幽默反轉，極具年輕雜誌節奏感！}} Across Hong Kong, a quiet cultural revival is underway: Generation Z is falling head over heels for the city's vanishing traditional crafts."
      },
      { type: "subhead", text: "Craving the Tangible in a Digital Blur" },
      {
        type: "body",
        role: "分析原因一：數碼時代對「實體溫度」的渴望",
        text: "Why would a generation raised on instant streaming and sleek gadgets spend three hours hand-painting porcelain or bending glowing neon glass? {{s|Ask any workshop regular, and one word surfaces repeatedly: authenticity.|設問 ＋ 簡短呼應，展現絕佳專欄語感}} In a fast-paced world dominated by mass-produced goods and fleeting algorithms, crafting something flawed yet uniquely yours feels strangely therapeutic. \"When you weave a bamboo steamer by hand, you slow down and actually feel the hours pass,\" explains 17-year-old student participant Chloe. {{d|In essence,|提煉升華}} traditional craftsmanship offers a rare tactile antidote to digital fatigue."
      },
      { type: "subhead", text: "Old Skills, Fresh Storytelling" },
      {
        type: "body",
        role: "分析原因二：年輕一代與老師傅的跨代共創",
        text: "{{d|Just as crucial is|流暢切換第二大動因}} the creative bridge built by social media and young local designers. Rather than treating heritage as a dusty museum relic behind velvet ropes, youth collectives are collaborating with veteran artisans to reimagine timeless skills for modern tastes—think miniature neon night-lamps, Cantonese calligraphy tote bags, and letterpress bookmarks. Viral short videos showcasing the mesmerising rhythm of an artisan's hands have transformed once-overlooked trades into {{v|cultural badges of identity|文化身份認同標記}}. For many young Hongkongers, learning a heritage craft is no longer merely a weekend hobby; it is a deeply personal way of anchoring themselves to the city's living memory."
      },
      { type: "subhead", text: "From Viral Trend to Lasting Legacy" },
      {
        type: "body",
        role: "前瞻思考：避免淪為三分鐘熱度 ＋ 首尾呼應收結",
        text: "{{d|Admittedly,|專題文章也可自然帶出理性反思}} one-off weekend workshops alone cannot rescue endangered trades from soaring rents and a shortage of full-time apprentices. Yet this surge of youthful curiosity has achieved something priceless: it has restored dignity and visibility to craftspeople whose life's work was once dismissed as obsolete. If schools, cultural institutions and landlords seize this momentum—by offering affordable studio spaces and structured apprenticeships—these crafts need not fade into nostalgia. The next time you stroll past a glowing neon sign or a weathered bamboo workshop, pause for a second: {{s|Hong Kong's oldest stories may just be finding their newest voices.|詩意而充滿希望的雜誌壓軸句！}}"
      }
    ],
    commentary: {
      content: "極富香港在地質感（深水埗唐樓、手雕麻雀、霓虹燈、竹蒸籠），剖析「對抗數碼疲勞（tactile antidote）」、「跨代創意轉化」及「由打卡熱潮走向真正承傳（租金與學徒挑戰）」三個層次，既有雜誌趣味又有深度洞見。",
      language: "完全掌握 Feature Article 的 Semi-formal Journalistic 語感：具畫面感動詞（perched, chiselling, tucked away）、穿插真實感引語（Chloe）、善用破折號與冒號調控節奏，讀來宛如真實《SCMP Young Post》專題。",
      organisation: "大標題用三連意象（Neon, Bamboo and Reels）吸睛，配 By Chris Wong 及三個極具文學感的小標題（絕非死板的 Introduction / Reasons / Conclusion），首尾場景互相呼應。"
    },
    stealables: [
      { en: "Step inside [place] on any Saturday afternoon, and you will witness an unlikely scene.", zh: "任何一個週六下午步入 [某地]，你都會目睹意想不到的一幕。（專題文章神級開場）" },
      { en: "Ask any [participant], and one word surfaces repeatedly: [keyword].", zh: "問任何一位參與者，一個詞總會反覆浮現：[關鍵詞]。（極具雜誌節奏感）" },
      { en: "Rather than treating [X] as a dusty museum relic, young people are reimagining...", zh: "年輕人並未把 [X] 視為蒙塵的博物館古董，而是重新演繹……" },
      { en: "[X] offers a rare tactile antidote to digital fatigue.", zh: "[X] 為數碼疲勞提供了一劑難得的實體解藥。" }
    ]
  },

  {
    id: "essay-speech-attention",
    part: "Part B",
    genre: "Speech（早會演講辭）",
    topicTag: "科技生活與時間管理",
    title: "Reclaiming Our Attention in an Age of Endless Scrolling",
    prompt: "As the Head Prefect of your school, you have been invited to deliver a speech at the morning assembly about how excessive smartphone use is affecting students' focus and daily lives, and to inspire your schoolmates to build healthier digital habits. (Approx. 400–500 words)",
    wordCount: "約 445 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "salutation", text: "Good morning, Principal, teachers and fellow students," },
      {
        type: "body",
        role: "現場舉手互動開場 ＋ 自我介紹 ＋ 破題比喻",
        text: "Before I begin, could I ask for a quick show of hands? How many of you checked your phone within five minutes of waking up this morning? Look around the hall—almost every hand is up, and if I am being completely honest, mine would be too! Today, as your Head Prefect, I am not standing here to lecture you into throwing your smartphones into Victoria Harbour. Rather, I want to talk about something far more precious than any gadget we own: {{v|our undivided attention|我們全神貫注的注意力}}."
      },
      {
        type: "body",
        role: "正文一：生動共鳴（注意力被「碎裂」的日常）",
        text: "Let us pause for a moment and reflect on a scene we all know too well. You sit down at your desk determined to finish a Mathematics worksheet. Five minutes in, a notification chimes. \"Just one quick glance,\" you tell yourself. Before you know it, forty minutes have vanished down a rabbit hole of short videos, and your worksheet is still staring back at you—completely blank. {{s|Sound painfully familiar?|短促設問拉緊聽眾注意力}} Psychologists warn that every interruption forces our brains to pay a 'switching cost'. {{s|We may feel busier than ever, yet we are accomplishing less, sleeping worse, and growing more anxious by the day.|三連排比（Rule of Three）增強演講節奏與氣勢！}}"
      },
      {
        type: "body",
        role: "正文二：進深一層（不只是成績，更是真實人際連結）",
        text: "{{d|Yet the hidden cost goes far beyond unfinished homework.|自然口語過渡，把話題推向情感層面}} Glance around our playground or canteen during lunch recess. Too often, we sit shoulder to shoulder with our closest friends, yet our eyes remain glued to six-inch screens. We tap 'like' on dozens of posts a day, while forgetting the simple warmth of an uninterrupted conversation. Ask yourselves: ten years from now, will you fondly remember the hundredth viral clip you watched tonight, or the laughter you shared with classmates right here in this hall?"
      },
      {
        type: "body",
        role: "正文三：具體可行建議（三個貼地小挑戰，避免說教感）",
        text: "{{d|So, how do we take back the steering wheel?|生活化比喻引出行動方案}} We do not need extreme bans; we simply need intentional habits. Starting tonight, I challenge each of us to try three small shifts. First, {{v|create a phone-free study zone|建立無手機溫習區}}—place your phone in another room for just forty-five minutes while revising. Second, turn off non-essential notifications so that you decide when to check your screen, not an algorithm. Third, declare the last thirty minutes before bed a 'screen-free sanctuary' so your mind can genuinely recharge."
      },
      {
        type: "body",
        role: "壓軸號召 ＋ 乾淨收尾",
        text: "Fellow schoolmates, our smartphones were built to be our servants, never our masters. {{s|Let us put our screens down long enough to look up, focus deeply, and live fully in the moments that truly matter.|排比收束，鏗鏘有力！}} The choice begins with our very next notification. Thank you."
      }
    ],
    commentary: {
      content: "高度貼近中學生日常（做數學功課被短片吸走 40 分鐘、小息並肩而坐卻各自低頭），刻意避免長輩式說教（「I am not standing here to lecture you...」），提出三個極易執行的小習慣，說服力與親和力滿分。",
      language: "演講修辭教科書示範：開場舉手互動、自嘲拉近距離、設問（Sound painfully familiar? / Ask yourselves）、三連排比（accomplishing less, sleeping worse, growing more anxious）及對比金句（servants, never our masters）。",
      organisation: "格式 100% 規範：按尊卑問候 Principal, teachers and fellow students ➔ 明確 Signposting（Before I begin / Let us pause / Yet the hidden cost / So, how do we...）➔ 以 Thank you. 利落收官，絕無書信下款。"
    },
    stealables: [
      { en: "Before I begin, could I ask for a quick show of hands? How many of you...?", zh: "在我開始之前，可否請大家舉個手？有多少位同學……？（演講破冰神句）" },
      { en: "I am not standing here to lecture you into [extreme]; rather, I want to talk about...", zh: "我站在這裏並非要說教叫大家 [極端做法]；相反，我想談談……（瞬間消除聽眾戒心）" },
      { en: "Ask yourselves: ten years from now, will you remember [A], or [B]?", zh: "問問自己：十年後，你會記得 [A]，還是 [B]？（情感張力拉滿）" },
      { en: "Our [tools/devices] were built to be our servants, never our masters.", zh: "我們的工具理應為我們服務，絕非成為我們的主人。（壓軸金句）" }
    ]
  },

  {
    id: "essay-parta-blog",
    part: "Part A",
    genre: "Part A 短文 · Blog Entry（校園網誌）",
    topicTag: "Part A 200 字高分示範",
    title: "How I Stopped Drowning in Revision and Still Kept My Basketball Nights",
    prompt: "You are a Secondary 6 student writing a blog entry for your school website to share with junior students how you balance DSE preparation with extracurricular activities. Include: (1) a challenge you once faced, (2) two practical time-management strategies, and (3) a word of encouragement. (Approx. 200–250 words)",
    wordCount: "約 235 字",
    scores: { C: "7 / 7", L: "7 / 7", O: "7 / 7", total: "21 / 21 (5**)" },
    paragraphs: [
      { type: "meta", text: "15 October 2026   |   Student Life Blog · By Chris Wong (S.6A)" },
      { type: "title", text: "How I Stopped Drowning in Revision—and Still Kept My Basketball Nights!" },
      {
        type: "body",
        role: "親切開場 ＋ 任務點 (1) 曾遇過的困境",
        text: "Hey everyone! Ever felt like you have to choose between acing exams and having an actual life? Believe me, I've been there. Back in S.5, I tried to juggle school basketball team practices with mock exam prep—and ended up {{v|burning the candle at both ends|兩頭燒／日夜操勞（地道習語）}}. After nodding off during an English quiz, I realised sheer willpower wasn't enough; I needed a smarter game plan."
      },
      {
        type: "body",
        role: "任務點 (2) 兩項具體可行的時間管理策略",
        text: "Thankfully, two simple habits completely turned things around for me. {{d|First, I switched to 'time-blocking'.|簡潔明快，Part A 忌拖泥帶水}} Every Sunday night, I map out non-negotiable slots for training first, then slot focused 45-minute study sprints around them. Knowing I have a fixed cut-off time actually stops me from procrastinating! {{d|Second, I learned to make use of 'dead time'.|極具體貼地}} Instead of mindlessly scrolling on the MTR, I now flip through vocabulary flashcards or listen to English podcasts—those spare twenty minutes a day add up fast!"
      },
      {
        type: "body",
        role: "任務點 (3) 鼓勵話語 ＋ 網誌互動收結",
        text: "{{s|Far from hurting my grades,|Far from + V-ing 短小精幹高分結構}} basketball has become my ultimate stress-buster, leaving my mind sharper when I hit the books. So to all our junior schoolmates: don't give up the hobbies that make you smile! Work smart, guard your rest, and trust your pace. Got a favourite study hack of your own? Drop it in the comments below!"
      }
    ],
    commentary: {
      content: "Part A 滿分黃金準則就是「麻雀雖小，五臟俱全」：僅用 235 字便精準且生動地覆蓋全部 3 項指定內容點（真實跌倒經歷 ➔ Time-blocking 與善用車程碎片時間兩招 ➔ 真摯鼓勵），毫無廢話，節省時間留戰 Part B！",
      language: "完美示範 Informal/Semi-formal 網誌語氣：自然使用縮寫（I've, wasn't, don't）、生活化習語與片語動詞（burning the candle at both ends, nodding off, turned things around, hit the books），同時保持 100% 文法精準。",
      organisation: "三段式黃金節奏（困境引入 ➔ 兩大策略 ➔ 反思與互動結尾），完全符合網誌文體，毫無生硬感。"
    },
    stealables: [
      { en: "Believe me, I've been there. Back in S.5, I ended up burning the candle at both ends.", zh: "相信我，我經歷過。中五時我一度搞得兩頭燒精疲力竭。（親切真誠網誌語氣）" },
      { en: "Far from hurting my grades, [hobby] has become my ultimate stress-buster.", zh: "[興趣] 非但沒有拖累我的成績，反而成為我最強的減壓神器。" },
      { en: "Got a favourite [tip] of your own? Drop it in the comments below!", zh: "你也有自己私藏的心得嗎？快在下方留言分享吧！（網誌互動萬用收尾）" }
    ]
  }
];
