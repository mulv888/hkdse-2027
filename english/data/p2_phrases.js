/* ==========================================================================
   Paper 2 高分套話、萬用句型公式、L3➔L5** 升呢實驗室與詞彙升級表 (p2_phrases.js)
   支援 [[...]] 關鍵詞遮蓋自測模式（Cloze Recall）及一鍵複製
   ========================================================================== */

window.ENG_P2_PHRASES = {
  /* 一、按文章功能分類的高分萬用套話與例句 */
  categories: [
    {
      id: "phr-open",
      name: "1. 引言破題與亮出立場 (Hooks & Thesis)",
      badge: "Opening",
      items: [
        {
          en: "In an era [[characterised by]] rapid technological upheaval, few issues have [[ignited as much controversy]] as whether...",
          zh: "在科技急劇變革的時代，鮮有議題能像「是否應該……」一樣引發如此激烈的爭議。",
          tag: "Essay / LTE"
        },
        {
          en: "There is [[no denying that]] [X] has become an [[integral part of]] modern life; yet whether its merits outweigh its drawbacks remains [[a subject of fierce contention]].",
          zh: "無可否認，[X] 已成為現代生活不可或缺的一部分；然而其利是否大於弊，至今仍爭論不休。",
          tag: "Essay"
        },
        {
          en: "I am writing [[in response to]] the recent article published in your columns regarding [topic] to [[express my profound concern over]]...",
          zh: "本人謹就貴報日前刊登有關 [主題] 的文章致函，並對……表達深切關注。",
          tag: "Letter to Editor"
        },
        {
          en: "[[Understandable as]] [Group A]'s enthusiasm for [X] may be, I firmly contend that [your stance] [[warrants far greater scrutiny]].",
          zh: "儘管 [A 群體] 對 [X] 的熱衷可以理解，我堅信 [你的立場] 值得更審慎的檢視。",
          tag: "5** 倒裝立論"
        },
        {
          en: "Picture this: [vivid 1-sentence scene]. Sound [[all too familiar]]? You are far from alone.",
          zh: "試想像一下：[生動場景]。聽起來是否似曾相識？你絕非孤例。",
          tag: "Feature Article / Speech"
        }
      ]
    },
    {
      id: "phr-argue",
      name: "2. 提出論點與層層遞進 (Arguments & Progression)",
      badge: "Body PEEL",
      items: [
        {
          en: "[[First and foremost]], [X] plays a [[pivotal role in]] fostering [positive outcome].",
          zh: "首當其衝／最重要的是，[X] 在促進 [正面成果] 方面擔當關鍵角色。",
          tag: "核心論點一"
        },
        {
          en: "[[Equally compelling is the fact that]] [Argument 2], which directly affects [stakeholder].",
          zh: "同樣具說服力的事實是 [論點二]，這直接影響到 [持份者]。（優雅替代 Secondly！）",
          tag: "5** 表語倒裝"
        },
        {
          en: "[[Compounding this issue is]] the lack of [root cause], leaving [group] particularly vulnerable to...",
          zh: "令問題雪上加霜的是缺乏 [根本原因]，令 [群體] 尤其容易受到……衝擊。",
          tag: "問題剖析遞進"
        },
        {
          en: "Beyond [keyword from previous paragraph], [X] also [[exerts a far-reaching influence on]]...",
          zh: "除了 [上段關鍵詞] 之外，[X] 亦對……產生深遠影響。（自然段間銜接！）",
          tag: "段間自然過渡"
        },
        {
          en: "[[Viewed in this light]], [X] should be regarded not as [negative label], but as [[a catalyst for]] [positive change].",
          zh: "從這個角度審視，[X] 不應被視為 [負面標籤]，而應視為推動 [正面轉變] 的催化劑。",
          tag: "深層點題句"
        }
      ]
    },
    {
      id: "phr-cause",
      name: "3. 因果剖析與舉例佐證 (Cause, Effect & Evidence)",
      badge: "Elaboration",
      items: [
        {
          en: "This alarming trend largely [[stems from]] / [[is attributable to]] a combination of [Factor A] and [Factor B].",
          zh: "這股令人憂慮的趨勢很大程度上源於／歸因於 [因素 A] 與 [因素 B] 的共同作用。",
          tag: "高階歸因"
        },
        {
          en: "Left unchecked, this problem is bound to [[exacerbate]] existing social inequalities and [[precipitate]] a wider crisis.",
          zh: "若任其蔓延，此問題勢必加劇現存社會不平等，並引發更廣泛的危機。",
          tag: "後果推演"
        },
        {
          en: "[[A case in point is]] [specific Hong Kong / global example], which [[vividly illustrates how]]...",
          zh: "一個恰當的例子便是 [具體例子]，生動說明了……（比 For example 更具書面氣派！）",
          tag: "精準舉例"
        },
        {
          en: "[[Empirical evidence underscores]] the urgent need to rethink how we approach [topic].",
          zh: "實證研究突顯我們亟需重新審視應對 [主題] 的方式。",
          tag: "學術論證"
        },
        {
          en: "The repercussions of [X] are [[twofold]]: not only does it [Effect 1], but it also [Effect 2].",
          zh: "[X] 帶來的影響有雙重層面：它不但造成 [影響一]，同時亦導致 [影響二]。",
          tag: "雙重後果倒裝"
        }
      ]
    },
    {
      id: "phr-rebut",
      name: "4. 讓步與反駁——衝擊 5** 必殺技 (Concession & Rebuttal)",
      badge: "5** 關鍵",
      items: [
        {
          en: "[[Admittedly]], sceptics may contend that [Counter-argument]. [[Plausible as this view may seem on the surface]], it overlooks [key flaw].",
          zh: "誠然，質疑者可能主張 [反方論點]。儘管此說表面看來言之成理，卻忽略了 [關鍵盲點]。",
          tag: "黃金讓步反駁"
        },
        {
          en: "[[While there is undeniable merit in]] [Opposing point], this line of reasoning [[commits a crucial fallacy by conflating]] [A] with [B].",
          zh: "儘管 [反方觀點] 確有可取之處，這種推論卻犯了關鍵謬誤，將 [A] 與 [B] 混為一談。",
          tag: "邏輯拆招"
        },
        {
          en: "[[Proponents of X are quick to point out that]] [Point]; however, such an optimistic assumption [[fails to hold water when]] tested against reality.",
          zh: "[X] 的支持者常急於指出 [論點]；然而，這種樂觀假設在現實檢驗下卻站不住腳。",
          tag: "有力反擊"
        },
        {
          en: "[[Granted]], implementing [solution] requires substantial upfront investment; [[nevertheless, the long-term cost of inaction]] would be infinitely higher.",
          zh: "誠然，推行 [方案] 需投入可觀前期資金；然而，袖手旁觀的長遠代價將遠遠更高。",
          tag: "成本效益反駁"
        }
      ]
    },
    {
      id: "phr-data",
      name: "5. 數據描述、報告與建議方案 (Report & Proposal)",
      badge: "Report / Proposal",
      items: [
        {
          en: "[[An overwhelming majority]] (over 75%) of respondents [[expressed grave dissatisfaction with]]...",
          zh: "絕大多數（超過 75%）受訪者對……表達強烈不滿。",
          tag: "Report 數據"
        },
        {
          en: "The survey [[revealed a stark disparity between]] [Group A] and [Group B] regarding...",
          zh: "調查揭示 [A 組] 與 [B 組] 在……方面存在顯著差距。",
          tag: "Report 對比"
        },
        {
          en: "To [[mitigate these adverse repercussions]], [[a multi-pronged approach is warranted]].",
          zh: "為減輕這些負面影響，有必要採取多管齊下的策略。",
          tag: "Proposal / Essay 建議"
        },
        {
          en: "[[It is imperative that]] the authorities [[allocate sufficient resources to]] [initiative] rather than relying on piecemeal measures.",
          zh: "當局當務之急是為 [計劃] 撥備充足資源，而非依賴零碎補救措施。（含虛擬語氣！）",
          tag: "虛擬語氣建議"
        },
        {
          en: "A rota of trained student ambassadors will oversee daily operations, [[thereby minimising]] any extra workload for staff.",
          zh: "由受訓學生大使輪值負責日常運作，從而將教職員的額外工作量減至最低。",
          tag: "可行性加分句"
        }
      ]
    },
    {
      id: "phr-close",
      name: "6. 結論收束與壓軸呼籲 (Conclusions & Calls to Action)",
      badge: "Conclusion",
      items: [
        {
          en: "[[In the final analysis]], [restate thesis freshly]. [[It is high time that]] all stakeholders [[joined hands to]]...",
          zh: "歸根結底，[重申立場]。現在正是所有持份者攜手合作……的關鍵時刻。（注意：It is high time that 後接過去式動詞！）",
          tag: "虛擬過去式呼籲"
        },
        {
          en: "[[Only by]] [Action A], rather than [Action B], [[can society strike a sustainable balance between]] [X] and [Y].",
          zh: "唯有透過 [行動 A] 而非 [行動 B]，社會才能在 [X] 與 [Y] 之間取得可持續的平衡。",
          tag: "Only by 壓軸倒裝"
        },
        {
          en: "[[Should the committee grant approval in principle]], we will gladly coordinate a detailed implementation schedule.",
          zh: "倘委員會原則上予以批准，我們將樂意協調詳盡的落實時間表。",
          tag: "Proposal 收尾"
        },
        {
          en: "The choice—and the responsibility—[[rests squarely in our hands]]. Let us act today, before a manageable challenge becomes an irreversible regret.",
          zh: "選擇權與責任正正掌握在我們手中。讓我們今天便採取行動，莫待可控挑戰化為無可挽回的遺憾。",
          tag: "Speech / LTE 感召力收尾"
        }
      ]
    }
  ],

  /* 二、L3 ➔ L5** 句式升呢對比實驗室 */
  upgrades: [
    {
      skill: "1. 否定副詞倒裝（Negative Inversion）",
      l3: "Playing sports not only keeps students healthy, it also helps them reduce exam stress.",
      l5: "Not only does regular exercise fortify students' physical health, but it also serves as a vital buffer against chronic exam stress.",
      why: "將 Not only 提至句首並把助動詞 does 倒裝至主詞前；同時把平庸的 keeps healthy / reduce stress 升級為 fortify / serve as a vital buffer。"
    },
    {
      skill: "2. 分詞構句取代冗長從句（Participle Clauses）",
      l3: "Because teenagers are faced with heavy homework every day, they feel very tired and stressed.",
      l5: "Confronted with an unrelenting workload day after day, many teenagers find themselves trapped in a cycle of exhaustion and anxiety.",
      why: "用過去分詞短語 Confronted with... 壓縮冗長的 Because... 從句，主句更俐落有力，呈現 C2 語法駕馭力。"
    },
    {
      skill: "3. 強調句直指核心（Cleft Sentence: It is... that...）",
      l3: "The real problem is not smartphones, it is poor self-discipline.",
      l5: "It is a lack of digital self-discipline—rather than smartphones themselves—that lies at the heart of the problem.",
      why: "破折號插入對比＋強調句型，在議論文與致編輯的信中極具說服力與社評氣派。"
    },
    {
      skill: "4. 形容詞前置讓步倒裝（Adj + as + S + V）",
      l3: "Although online learning is very convenient, it cannot replace face-to-face teachers.",
      l5: "Convenient as online platforms may be, they can never replicate the empathy and nuanced guidance of a flesh-and-blood teacher.",
      why: "整份卷少用幾次 Although，改以 Convenient as... may be 開句，瞬間令考官在 Language 欄眼前一亮！"
    },
    {
      skill: "5. 虛擬語氣建議句（Subjunctive Mood）",
      l3: "The government should build more parks and educate citizens about mental health.",
      l5: "It is imperative that the government expand urban green spaces and launch sustained public education on mental well-being.",
      why: "在 It is imperative / vital / recommended that 後使用原形動詞（expand / launch，即使主詞是第三人稱單數 government 也不加 s！），是 Proposal 與 Report 的 5** 標誌文法。"
    },
    {
      skill: "6. With 獨立結構描繪畫面（With + O + V-ing / V-ed）",
      l3: "AI is developing very fast, so many traditional jobs may disappear soon.",
      l5: "With generative AI advancing at breakneck speed, numerous routine occupations face the imminent threat of obsolescence.",
      why: "用 With + 名詞 + 現在分詞精練交代大背景，完美取代鬆散的 '...so...' 流水句。"
    }
  ],

  /* 三、告別「萬能膠」平庸詞彙：C1/C2 高頻替換對照表 */
  vocabUpgrades: [
    { basic: "good / helpful", upgrades: ["beneficial", "constructive", "conducive to (+ N/V-ing)", "indispensable", "rewarding"], example: "A quiet environment is conducive to deep concentration." },
    { basic: "bad / harmful", upgrades: ["detrimental (to)", "adverse", "counterproductive", "alarming", "pernicious"], example: "Sleep deprivation has a detrimental impact on memory retention." },
    { basic: "important", upgrades: ["pivotal", "paramount", "imperative", "crucial", "indispensable"], example: "Parental support plays a pivotal role in adolescent resilience." },
    { basic: "very / a lot of", upgrades: ["profoundly", "substantially", "an abundance of", "a myriad of", "overwhelming"], example: "The scheme has substantially lowered campus electricity consumption." },
    { basic: "think / say", upgrades: ["contend", "maintain", "assert", "advocate", "posit"], example: "Critics contend that the policy disproportionately burdens low-income families." },
    { basic: "cause / lead to", upgrades: ["precipitate", "give rise to", "trigger", "exacerbate (加劇)", "stem from (源於)"], example: "Unregulated social media feeds can exacerbate body-image anxiety." },
    { basic: "solve / fix", upgrades: ["alleviate (紓緩)", "mitigate (減輕)", "remedy", "curb (遏止)", "tackle at the root"], example: "Subsidised counselling can alleviate youth distress without stigma." },
    { basic: "many people", upgrades: ["a growing cohort of", "an overwhelming majority", "sceptics / proponents", "commuters / adolescents"], example: "A growing cohort of graduates prioritise work-life balance over prestige." },
    { basic: "make (better / worse)", upgrades: ["bolster / fortify (強化)", "cultivate / foster (培養)", "undermine / erode (削弱)", "streamline (精簡優化)"], example: "Volunteering fosters empathy and strengthens social cohesion." },
    { basic: "change", upgrades: ["transform", "reshape", "revolutionise", "overhaul (徹底改革)", "adapt to"], example: "Remote work has fundamentally reshaped Hong Kong's office culture." }
  ]
};
