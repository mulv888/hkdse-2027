/* ==========================================================================
   HKDSE Biology Unit-Classified Vocabulary Hub Engine
   4 Modes: Unit Glossary (+ Recall Masks & TTS) · Flashcard Trainer ·
            EMI Spelling & Term Match Drill · Confusing Pairs Alert
   ========================================================================== */
(function () {
  "use strict";

  const STORAGE_KEY = "dse2027_bio_vocab_mastered";
  const STAR_KEY = "dse2027_bio_vocab_starred";

  const vState = {
    mode: "glossary",      // glossary | flashcards | drill | pairs
    unitFilter: "all",     // all | u1..u5 | e1..e4
    statusFilter: "all",   // all | unmastered | mastered | starred | hifreq
    search: "",
    maskEn: false,
    maskZh: false,
    maskDef: false,
    mastered: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")),
    starred: new Set(JSON.parse(localStorage.getItem(STAR_KEY) || "[]")),
    // Flashcard state
    fcFront: "en",         // en | zh
    fcDeck: [],
    fcIdx: 0,
    fcFlipped: false,
    // Drill state
    drillType: "spelling", // spelling | match
    drillList: [],
    drillIdx: 0,
    drillStreak: 0,
    drillCorrect: 0,
    drillTotal: 0,
    drillFeedback: null,
    drillShowHint: false
  };

  function saveVocab() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...vState.mastered]));
      localStorage.setItem(STAR_KEY, JSON.stringify([...vState.starred]));
    } catch (e) {}
    if (window.BIO_APP_HELPERS && window.BIO_APP_HELPERS.updateProgressUI) {
      window.BIO_APP_HELPERS.updateProgressUI();
    }
  }

  function bi(obj, inline) {
    return window.BIO_APP_HELPERS.bi(obj, inline);
  }
  function rich(s) {
    return window.BIO_TEXT.rich(s);
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function getFilteredList() {
    const q = vState.search.trim().toLowerCase();
    return window.BIO_VOCAB.filter((item) => {
      if (vState.unitFilter !== "all" && item.unit !== vState.unitFilter) return false;
      if (vState.statusFilter === "unmastered" && vState.mastered.has(item.id)) return false;
      if (vState.statusFilter === "mastered" && !vState.mastered.has(item.id)) return false;
      if (vState.statusFilter === "starred" && !vState.starred.has(item.id)) return false;
      if (vState.statusFilter === "hifreq" && !item.hi) return false;
      if (q) {
        const hay = `${item.en} ${item.zh} ${item.defEn} ${item.defZh} ${item.ch}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildFlashcardDeck() {
    const pool = getFilteredList();
    vState.fcDeck = pool.length ? pool : window.BIO_VOCAB.slice();
    vState.fcIdx = 0;
    vState.fcFlipped = false;
  }

  function buildDrillDeck() {
    const pool = getFilteredList();
    vState.drillList = shuffle(pool.length >= 4 ? pool : window.BIO_VOCAB);
    vState.drillIdx = 0;
    vState.drillFeedback = null;
    vState.drillShowHint = false;
  }

  function unitMeta(uid) {
    return window.BIO_META.unitCatalog.find((u) => u.id === uid) || { code: uid, color: "#15803d", en: uid, zh: uid };
  }

  function renderVocabView(container) {
    const total = window.BIO_VOCAB.length;
    const masteredCnt = vState.mastered.size;
    const pct = total ? Math.round((masteredCnt / total) * 100) : 0;
    const units = window.BIO_META.unitCatalog;

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker" style="color:var(--vocab);background:var(--vocab-soft);border-color:var(--vocab-border)">
            🔤 ${bi({ en: `${total} Essential HKDSE Biology Terms · Organized by Unit`, zh: `精選 ${total} 個 HKDSE 生物必背專有名詞 · 按單元分類` }, true)}
          </span>
          <h1>${bi({ en: "Unit-Classified Biology Vocabulary Bank (EMI)", zh: "生物科按單元分類專有名詞庫（EMI 記憶特訓）" })}</h1>
          <p class="page-head-sub">${bi({ en: "Master exact UK/HKDSE English spelling, official Traditional Chinese translations, pronunciation (🔊), flashcards, spelling tests & confusing pairs.", zh: "精準掌握課本與考評局標準英文拼寫、香港官方中文譯名、語音發音（🔊）、翻轉字卡、拼寫特訓及易混淆名詞辨析。" })}</p>
        </div>
        <div class="page-head-actions">
          <div class="stat-card" style="padding:0.45rem 0.9rem; display:flex; align-items:center; gap:0.65rem;">
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">${bi({ en: "Mastered", zh: "已熟背" }, true)}</span>
            <strong style="color:var(--vocab); font-size:1.05rem; font-family:var(--font-mono);">${masteredCnt} / ${total} (${pct}%)</strong>
          </div>
        </div>
      </div>

      <!-- Mode Switcher Bar -->
      <div class="vocab-mode-bar">
        <div class="vocab-mode-tabs">
          <button class="filter-chip ${vState.mode === "glossary" ? "active" : ""}" data-vmode="glossary">📖 ${bi({ en: "Unit Glossary", zh: "按單元詞彙表" }, true)}</button>
          <button class="filter-chip ${vState.mode === "flashcards" ? "active" : ""}" data-vmode="flashcards">🃏 ${bi({ en: "Flashcards", zh: "翻轉字卡" }, true)}</button>
          <button class="filter-chip ${vState.mode === "drill" ? "active" : ""}" data-vmode="drill">✍️ ${bi({ en: "EMI Spelling & Match Drill", zh: "英文拼寫／配對特訓" }, true)}</button>
          <button class="filter-chip ${vState.mode === "pairs" ? "active" : ""}" data-vmode="pairs">⚠️ ${bi({ en: `Confusing Pairs (${window.BIO_CONFUSING_PAIRS.length})`, zh: `易混淆專有名詞 (${window.BIO_CONFUSING_PAIRS.length})` }, true)}</button>
        </div>
      </div>

      ${vState.mode !== "pairs" ? `
        <!-- Unit Selector Pills -->
        <div class="unit-pills">
          <button class="pill-btn ${vState.unitFilter === "all" ? "active" : ""}" data-vunit="all">
            ${bi({ en: "All Units", zh: "全部 9 單元" }, true)} (${total})
          </button>
          ${units.map((u) => {
            const cnt = window.BIO_VOCAB.filter((v) => v.unit === u.id).length;
            const mCnt = window.BIO_VOCAB.filter((v) => v.unit === u.id && vState.mastered.has(v.id)).length;
            return `<button class="pill-btn ${vState.unitFilter === u.id ? "active" : ""}" data-vunit="${u.id}">
              <span class="pill-dot" style="background:${u.color}"></span>
              ${u.code} (${mCnt}/${cnt})
            </button>`;
          }).join("")}
        </div>
      ` : ""}

      <div id="vocabStage"></div>
    `;

    container.querySelectorAll("[data-vmode]").forEach((b) => {
      b.addEventListener("click", () => {
        vState.mode = b.dataset.vmode;
        if (vState.mode === "flashcards") buildFlashcardDeck();
        if (vState.mode === "drill") buildDrillDeck();
        renderVocabView(container);
      });
    });

    container.querySelectorAll("[data-vunit]").forEach((b) => {
      b.addEventListener("click", () => {
        vState.unitFilter = b.dataset.vunit;
        if (vState.mode === "flashcards") buildFlashcardDeck();
        if (vState.mode === "drill") buildDrillDeck();
        renderVocabView(container);
      });
    });

    const stage = container.querySelector("#vocabStage");
    if (vState.mode === "glossary") renderGlossary(stage, container);
    else if (vState.mode === "flashcards") renderFlashcards(stage, container);
    else if (vState.mode === "drill") renderDrill(stage, container);
    else renderConfusingPairs(stage);
  }

  function renderGlossary(stage, rootContainer) {
    const list = getFilteredList();
    const maskCls = [
      vState.maskEn ? "mask-en" : "",
      vState.maskZh ? "mask-zh" : "",
      vState.maskDef ? "mask-def" : ""
    ].join(" ");

    // Group visible terms by Unit
    const unitsToShow = vState.unitFilter === "all"
      ? window.BIO_META.unitCatalog
      : window.BIO_META.unitCatalog.filter((u) => u.id === vState.unitFilter);

    stage.innerHTML = `
      <div class="vocab-toolbar">
        <input type="search" id="vocabSearchInput" class="vocab-search" value="${window.BIO_TEXT.escapeHtml(vState.search)}" placeholder="${bi({ en: "Filter English term, Chinese translation, or definition...", zh: "篩選英文名詞、中文譯名或定義..." }, true).replace(/<[^>]+>/g, " ")}" />
        <button class="filter-chip ${vState.statusFilter === "all" ? "active" : ""}" data-vst="all">${bi({ en: "All", zh: "全部" }, true)}</button>
        <button class="filter-chip ${vState.statusFilter === "hifreq" ? "active" : ""}" data-vst="hifreq">🔥 ${bi({ en: "High-Yield", zh: "高頻必考" }, true)}</button>
        <button class="filter-chip ${vState.statusFilter === "unmastered" ? "active" : ""}" data-vst="unmastered">${bi({ en: "Unmastered", zh: "未熟背" }, true)}</button>
        <button class="filter-chip ${vState.statusFilter === "starred" ? "active" : ""}" data-vst="starred">★ ${bi({ en: "Starred", zh: "收藏" }, true)}</button>
      </div>

      <div class="vocab-toolbar" style="margin-top:-0.35rem;">
        <span style="font-size:0.8rem; font-weight:700; color:var(--text-muted);">👁 ${bi({ en: "Recall Mask (hover/click card to peek):", zh: "遮蓋背誦模式（滑過／點擊卡片偷看）：" }, true)}</span>
        <button class="mini-btn ${vState.maskEn ? "active-bm" : ""}" id="maskEnBtn">${bi({ en: "Hide English", zh: "遮蓋英文" }, true)}</button>
        <button class="mini-btn ${vState.maskZh ? "active-bm" : ""}" id="maskZhBtn">${bi({ en: "Hide Chinese", zh: "遮蓋中文" }, true)}</button>
        <button class="mini-btn ${vState.maskDef ? "active-bm" : ""}" id="maskDefBtn">${bi({ en: "Hide Definition", zh: "遮蓋定義" }, true)}</button>
        <span style="margin-left:auto; font-size:0.8rem; color:var(--text-muted); font-weight:700;">${list.length} ${bi({ en: "terms shown", zh: "個專有名詞" }, true)}</span>
      </div>

      <div class="${maskCls}">
        ${list.length === 0
          ? `<div class="section-card" style="text-align:center; padding:2rem; color:var(--text-muted);">${bi({ en: "No matching vocabulary terms found. Try clearing filters.", zh: "找不到符合的專有名詞，請嘗試重設篩選條件。" })}</div>`
          : unitsToShow.map((u) => {
              const items = list.filter((it) => it.unit === u.id);
              if (!items.length) return "";
              const uMastered = items.filter((it) => vState.mastered.has(it.id)).length;
              return `
                <section class="chapter-block" id="vsec-${u.id}">
                  <div class="chapter-banner" style="border-left-color:${u.color}">
                    <h2><span class="unit-tag" style="background:${u.color}; margin-right:8px;">${u.code}</span>${bi({ en: u.en, zh: u.zh }, true)}</h2>
                    <span style="font-size:0.79rem; color:var(--text-muted); font-weight:700;">${uMastered} / ${items.length} ${bi({ en: "mastered", zh: "已熟背" }, true)}</span>
                  </div>
                  <div class="vocab-grid">
                    ${items.map((it) => renderVocabCard(it, u)).join("")}
                  </div>
                </section>
              `;
            }).join("")}
      </div>
    `;

    const sInput = stage.querySelector("#vocabSearchInput");
    if (sInput) {
      sInput.addEventListener("input", () => {
        vState.search = sInput.value;
        renderGlossary(stage, rootContainer);
        const refocus = stage.querySelector("#vocabSearchInput");
        if (refocus) {
          refocus.focus();
          refocus.setSelectionRange(refocus.value.length, refocus.value.length);
        }
      });
    }

    stage.querySelectorAll("[data-vst]").forEach((b) => {
      b.addEventListener("click", () => {
        vState.statusFilter = b.dataset.vst;
        renderGlossary(stage, rootContainer);
      });
    });

    stage.querySelector("#maskEnBtn").addEventListener("click", () => { vState.maskEn = !vState.maskEn; renderGlossary(stage, rootContainer); });
    stage.querySelector("#maskZhBtn").addEventListener("click", () => { vState.maskZh = !vState.maskZh; renderGlossary(stage, rootContainer); });
    stage.querySelector("#maskDefBtn").addEventListener("click", () => { vState.maskDef = !vState.maskDef; renderGlossary(stage, rootContainer); });

    stage.querySelectorAll("[data-tts]").forEach((b) => {
      b.addEventListener("click", (e) => { e.stopPropagation(); speak(b.dataset.tts); });
    });

    stage.querySelectorAll("[data-vmaster]").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = b.dataset.vmaster;
        if (vState.mastered.has(id)) vState.mastered.delete(id);
        else vState.mastered.add(id);
        saveVocab();
        renderVocabView(rootContainer);
      });
    });

    stage.querySelectorAll("[data-vstar]").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = b.dataset.vstar;
        if (vState.starred.has(id)) vState.starred.delete(id);
        else vState.starred.add(id);
        saveVocab();
        renderGlossary(stage, rootContainer);
      });
    });

    stage.querySelectorAll(".vocab-card").forEach((card) => {
      card.addEventListener("click", () => card.classList.toggle("unmasked"));
    });
  }

  function renderVocabCard(it, u) {
    const isM = vState.mastered.has(it.id);
    const isS = vState.starred.has(it.id);
    return `
      <article class="vocab-card ${isM ? "is-mastered" : ""}" id="vocab-${it.id}" style="border-left-color:${isM ? "#10b981" : u.color}">
        <div class="vocab-card-top">
          <div>
            <div class="vocab-en-row">
              <span class="vocab-en">${window.BIO_TEXT.escapeHtml(it.en)}</span>
              <button class="tts-btn" data-tts="${window.BIO_TEXT.escapeHtml(it.en)}" title="Listen pronunciation">🔊</button>
              ${it.hi ? `<span class="tag-high">★</span>` : ""}
            </div>
            <div class="vocab-zh">${window.BIO_TEXT.escapeHtml(it.zh)}</div>
          </div>
          <div style="display:flex; gap:0.25rem;">
            <button class="mini-btn ${isM ? "active-master" : ""}" data-vmaster="${it.id}" title="Mark Mastered">${isM ? "✓" : "○"}</button>
            <button class="mini-btn ${isS ? "active-bm" : ""}" data-vstar="${it.id}" title="Star Term">${isS ? "★" : "☆"}</button>
          </div>
        </div>
        <div class="vocab-def">${bi({ en: it.defEn, zh: it.defZh })}</div>
        ${it.tip ? `<div class="vocab-tip">💡 ${rich(it.tip)}</div>` : ""}
        <div class="vocab-meta-row">
          <span>${u.code} · ${it.ch}</span>
          <span>${isM ? "Mastered ✓" : "Tap to reveal if masked"}</span>
        </div>
      </article>
    `;
  }

  /* ========================================================================
     Mode 2: Interactive Flashcards
     ======================================================================== */
  function renderFlashcards(stage, rootContainer) {
    if (!vState.fcDeck.length) buildFlashcardDeck();
    const card = vState.fcDeck[vState.fcIdx];
    if (!card) return;
    const u = unitMeta(card.unit);
    const isM = vState.mastered.has(card.id);

    stage.innerHTML = `
      <div class="vocab-toolbar" style="justify-content:center;">
        <button class="filter-chip ${vState.fcFront === "en" ? "active" : ""}" data-fcfront="en">Front: English Term → Back: 繁中 + Def</button>
        <button class="filter-chip ${vState.fcFront === "zh" ? "active" : ""}" data-fcfront="zh">Front: 繁中 + Definition → Back: English Term</button>
        <button class="mini-btn" id="fcShuffleBtn">🔀 Shuffle</button>
        <button class="mini-btn" id="fcUnmasteredBtn">🎯 Unmastered Only</button>
      </div>

      <div class="flashcard-stage">
        <div class="flashcard-box" id="flashcardBox">
          <div class="fc-badge-row">
            <span class="unit-tag" style="background:${u.color}">${u.code} · ${card.ch}</span>
            <span class="sb-badge">${vState.fcIdx + 1} / ${vState.fcDeck.length}</span>
            ${isM ? `<span class="tag-high" style="background:var(--tip-bg);color:var(--tip-text);">✓ Mastered</span>` : ""}
          </div>

          ${!vState.fcFlipped ? (
            vState.fcFront === "en" ? `
              <div class="fc-term-main">${window.BIO_TEXT.escapeHtml(card.en)}</div>
              <button class="tts-btn" id="fcSpeakBtn" style="font-size:0.9rem; padding:0.3rem 0.7rem;">🔊 Listen Pronunciation</button>
              <div class="fc-hint">${bi({ en: "Click card (or press Space) to flip & check Chinese translation + textbook definition", zh: "點擊卡片查看中文譯名與課本定義" }, true)}</div>
            ` : `
              <div class="fc-term-sub" style="font-size:1.55rem;">${window.BIO_TEXT.escapeHtml(card.zh)}</div>
              <div class="fc-def">${rich(card.defEn)}</div>
              <div class="fc-hint">${bi({ en: "Think of the exact English HKDSE term, then click to reveal!", zh: "先想出準確英文專有名詞，再點擊翻面核對！" }, true)}</div>
            `
          ) : `
            <div class="fc-term-main">${window.BIO_TEXT.escapeHtml(card.en)} <button class="tts-btn" id="fcSpeakBtn" style="vertical-align:middle;">🔊</button></div>
            <div class="fc-term-sub">${window.BIO_TEXT.escapeHtml(card.zh)}</div>
            <div class="fc-def">${bi({ en: card.defEn, zh: card.defZh })}</div>
            ${card.tip ? `<div class="vocab-tip" style="max-width:540px;">💡 ${rich(card.tip)}</div>` : ""}
          `}
        </div>

        <div class="fc-controls">
          <button class="btn btn-secondary" id="fcPrevBtn">← Prev</button>
          <button class="btn btn-secondary" id="fcFlipBtn">🔄 ${vState.fcFlipped ? "Show Front" : "Flip Card"}</button>
          <button class="btn btn-primary" id="fcMasterBtn">${isM ? "✓ Mastered (Unmark)" : "✓ Got It! Mark Mastered"}</button>
          <button class="btn btn-secondary" id="fcNextBtn">Next →</button>
        </div>
      </div>
    `;

    const speakBtn = stage.querySelector("#fcSpeakBtn");
    if (speakBtn) speakBtn.addEventListener("click", (e) => { e.stopPropagation(); speak(card.en); });

    stage.querySelector("#flashcardBox").addEventListener("click", () => {
      vState.fcFlipped = !vState.fcFlipped;
      renderFlashcards(stage, rootContainer);
    });
    stage.querySelector("#fcFlipBtn").addEventListener("click", () => {
      vState.fcFlipped = !vState.fcFlipped;
      renderFlashcards(stage, rootContainer);
    });
    stage.querySelector("#fcPrevBtn").addEventListener("click", () => {
      vState.fcIdx = (vState.fcIdx - 1 + vState.fcDeck.length) % vState.fcDeck.length;
      vState.fcFlipped = false;
      renderFlashcards(stage, rootContainer);
    });
    stage.querySelector("#fcNextBtn").addEventListener("click", () => {
      vState.fcIdx = (vState.fcIdx + 1) % vState.fcDeck.length;
      vState.fcFlipped = false;
      renderFlashcards(stage, rootContainer);
    });
    stage.querySelector("#fcMasterBtn").addEventListener("click", () => {
      if (vState.mastered.has(card.id)) vState.mastered.delete(card.id);
      else {
        vState.mastered.add(card.id);
        vState.fcIdx = (vState.fcIdx + 1) % vState.fcDeck.length;
        vState.fcFlipped = false;
      }
      saveVocab();
      renderVocabView(rootContainer);
    });
    stage.querySelectorAll("[data-fcfront]").forEach((b) => {
      b.addEventListener("click", () => {
        vState.fcFront = b.dataset.fcfront;
        vState.fcFlipped = false;
        renderFlashcards(stage, rootContainer);
      });
    });
    stage.querySelector("#fcShuffleBtn").addEventListener("click", () => {
      vState.fcDeck = shuffle(vState.fcDeck);
      vState.fcIdx = 0;
      vState.fcFlipped = false;
      renderFlashcards(stage, rootContainer);
    });
    stage.querySelector("#fcUnmasteredBtn").addEventListener("click", () => {
      const um = getFilteredList().filter((it) => !vState.mastered.has(it.id));
      vState.fcDeck = um.length ? shuffle(um) : shuffle(getFilteredList());
      vState.fcIdx = 0;
      vState.fcFlipped = false;
      renderFlashcards(stage, rootContainer);
    });
  }

  /* ========================================================================
     Mode 3: EMI Spelling & Term Match Drill
     ======================================================================== */
  function renderDrill(stage, rootContainer) {
    if (!vState.drillList.length) buildDrillDeck();
    const cur = vState.drillList[vState.drillIdx % vState.drillList.length];
    const u = unitMeta(cur.unit);

    // Prepare 4 MCQ options for match mode
    let options = [];
    if (vState.drillType === "match") {
      const distractors = shuffle(window.BIO_VOCAB.filter((x) => x.id !== cur.id && x.unit === cur.unit))
        .concat(shuffle(window.BIO_VOCAB.filter((x) => x.id !== cur.id && x.unit !== cur.unit)))
        .slice(0, 3);
      options = shuffle([cur, ...distractors]);
    }

    const hintMasked = cur.en.split(" ").map((w) => w[0] + "_".repeat(Math.max(1, w.length - 1))).join(" ");

    stage.innerHTML = `
      <div class="vocab-toolbar" style="justify-content:center;">
        <button class="filter-chip ${vState.drillType === "spelling" ? "active" : ""}" data-dtype="spelling">⌨️ ${bi({ en: "EMI Exact Spelling Challenge", zh: "英文精準拼寫挑戰" }, true)}</button>
        <button class="filter-chip ${vState.drillType === "match" ? "active" : ""}" data-dtype="match">🎯 ${bi({ en: "Quick Term Match (MCQ)", zh: "快速配對選擇題" }, true)}</button>
        <span style="font-size:0.84rem; font-weight:800; color:var(--core); margin-left:0.5rem;">
          Score: ${vState.drillCorrect}/${vState.drillTotal} · 🔥 Streak: ${vState.drillStreak}
        </span>
      </div>

      <div class="drill-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <span class="unit-tag" style="background:${u.color}">${u.code} · ${cur.ch}</span>
          <button class="tts-btn" id="drillSpeakBtn">🔊 Audio Hint</button>
        </div>

        <div style="font-size:1.35rem; font-weight:900; color:var(--vocab); margin-bottom:0.45rem;">${window.BIO_TEXT.escapeHtml(cur.zh)}</div>
        <div style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:0.5rem;">${rich(cur.defEn)}</div>
        <div style="font-size:0.86rem; color:var(--text-muted);">${rich(cur.defZh)}</div>

        ${vState.drillType === "spelling" ? `
          <form id="spellForm" class="spell-input-row">
            <input type="text" id="spellInput" class="spell-input" autocomplete="off" spellcheck="false" placeholder="Type exact HKDSE English biological term..." ${vState.drillFeedback ? "disabled" : ""} />
            ${!vState.drillFeedback
              ? `<button type="submit" class="btn btn-vocab">Check ✓</button>`
              : `<button type="button" class="btn btn-primary" id="nextDrillBtn">Next Term →</button>`}
          </form>
          <div style="margin-top:0.55rem; display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
            <button type="button" class="mini-btn" id="hintBtn">💡 ${vState.drillShowHint ? hintMasked : "Show First-Letter Hint"}</button>
            ${!vState.drillFeedback ? `<button type="button" class="mini-btn" id="revealSpellBtn">Give Up & Reveal</button>` : ""}
          </div>
        ` : `
          <div class="quiz-options" style="margin-top:1rem;">
            ${options.map((opt, idx) => {
              let cls = "quiz-opt";
              if (vState.drillFeedback) {
                if (opt.id === cur.id) cls += " is-correct";
                else if (vState.drillFeedback.chosenId === opt.id) cls += " is-wrong";
              }
              return `<button class="${cls}" data-mopt="${opt.id}" ${vState.drillFeedback ? "disabled" : ""}>
                <span class="quiz-opt-letter">${["A","B","C","D"][idx]}</span>
                <span style="font-weight:700;">${window.BIO_TEXT.escapeHtml(opt.en)}</span>
              </button>`;
            }).join("")}
          </div>
          ${vState.drillFeedback ? `<div style="margin-top:0.9rem; text-align:right;"><button class="btn btn-primary" id="nextDrillBtn">Next Term →</button></div>` : ""}
        `}

        ${vState.drillFeedback ? `
          <div class="callout ${vState.drillFeedback.ok ? "callout-tip" : "callout-trap"}" style="margin-top:0.95rem;">
            <div class="callout-title">${vState.drillFeedback.ok ? "✅ Spot on! Exact HKDSE spelling!" : `❌ Exact term: ${cur.en}`}</div>
            <div><strong>${window.BIO_TEXT.escapeHtml(cur.en)}</strong> (${window.BIO_TEXT.escapeHtml(cur.zh)})${cur.tip ? ` — ${rich(cur.tip)}` : ""}</div>
          </div>
        ` : ""}
      </div>
    `;

    stage.querySelectorAll("[data-dtype]").forEach((b) => {
      b.addEventListener("click", () => {
        vState.drillType = b.dataset.dtype;
        buildDrillDeck();
        renderDrill(stage, rootContainer);
      });
    });

    stage.querySelector("#drillSpeakBtn").addEventListener("click", () => speak(cur.en));

    const nextBtn = stage.querySelector("#nextDrillBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        vState.drillIdx++;
        vState.drillFeedback = null;
        vState.drillShowHint = false;
        renderDrill(stage, rootContainer);
      });
    }

    if (vState.drillType === "spelling") {
      const inp = stage.querySelector("#spellInput");
      if (inp && !vState.drillFeedback) inp.focus();
      const form = stage.querySelector("#spellForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (vState.drillFeedback) return;
        const val = (inp.value || "").trim().toLowerCase().replace(/\s+/g, " ");
        const target = cur.en.trim().toLowerCase();
        const ok = val === target;
        vState.drillTotal++;
        if (ok) {
          vState.drillCorrect++;
          vState.drillStreak++;
          vState.mastered.add(cur.id);
          saveVocab();
        } else {
          vState.drillStreak = 0;
        }
        vState.drillFeedback = { ok };
        renderDrill(stage, rootContainer);
      });
      stage.querySelector("#hintBtn").addEventListener("click", () => {
        vState.drillShowHint = true;
        renderDrill(stage, rootContainer);
      });
      const rev = stage.querySelector("#revealSpellBtn");
      if (rev) {
        rev.addEventListener("click", () => {
          vState.drillTotal++;
          vState.drillStreak = 0;
          vState.drillFeedback = { ok: false };
          renderDrill(stage, rootContainer);
        });
      }
    } else {
      stage.querySelectorAll("[data-mopt]").forEach((b) => {
        b.addEventListener("click", () => {
          if (vState.drillFeedback) return;
          const chosenId = b.dataset.mopt;
          const ok = chosenId === cur.id;
          vState.drillTotal++;
          if (ok) {
            vState.drillCorrect++;
            vState.drillStreak++;
            vState.mastered.add(cur.id);
            saveVocab();
          } else {
            vState.drillStreak = 0;
          }
          vState.drillFeedback = { ok, chosenId };
          renderDrill(stage, rootContainer);
        });
      });
    }
  }

  /* ========================================================================
     Mode 4: High-Risk Confusing Pairs Alert
     ======================================================================== */
  function renderConfusingPairs(stage) {
    stage.innerHTML = `
      <div class="callout callout-trap" style="margin-bottom:1.1rem;">
        <div class="callout-title">⚠️ ${bi({ en: "EMI HKDSE Mark-Saver: Never Mix Up These Look-Alike Biological Terms!", zh: "英文部 DSE 保分警報：考評局最常扣分的易混淆專有名詞！" }, true)}</div>
        ${bi({ en: "Every year, EMI candidates lose marks in Paper 1B & Paper 2 by writing *glucagon* instead of *glycogen*, *urethra* instead of *ureter*, or *stroma* instead of *stoma*. Review these 12 high-risk pairs before every mock exam!", zh: "每年均有大量英文部考生因混淆 *glucagon* 與 *glycogen*、*urethra* 與 *ureter*、*stroma* 與 *stoma* 而白白失分。考前必複習以下 12 組！" })}
      </div>
      <div class="pairs-grid">
        ${window.BIO_CONFUSING_PAIRS.map((p) => `
          <article class="pair-card">
            <div class="pair-title">⚡ ${window.BIO_TEXT.escapeHtml(p.title)}</div>
            ${p.items.map((it) => `
              <div class="pair-item">
                <div style="font-weight:800; color:var(--core); margin-bottom:0.15rem;">${window.BIO_TEXT.escapeHtml(it.term)}</div>
                <div>${bi({ en: it.descEn, zh: it.descZh })}</div>
              </div>
            `).join("")}
          </article>
        `).join("")}
      </div>
    `;
  }

  window.BIO_VOCAB_MODULE = {
    render: renderVocabView,
    getMasteredCount: () => vState.mastered.size,
    jumpToTerm: (termId, unitId) => {
      vState.mode = "glossary";
      vState.unitFilter = unitId || "all";
      vState.statusFilter = "all";
      vState.search = "";
    }
  };
})();
