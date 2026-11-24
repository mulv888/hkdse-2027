/* ==========================================================================
   2027 HKDSE Physics Revision Hub — Main SPA Controller
   Bilingual engine (ZH / BOTH / EN), Paper 1 + E2 + E3, Book-classified
   Formula & Derivation Vault, Bilingual SVG Diagrams Gallery & Search
   ========================================================================== */
(function () {
  "use strict";

  const STORAGE_KEYS = {
    lang: "dse2027_phy_lang",
    theme: "dse2027_phy_theme",
    mastered: "dse2027_phy_mastered",
    bookmarks: "dse2027_phy_bookmarks"
  };

  const state = {
    view: "overview",       // overview | paper1 | elective2 | elective3 | formulas | diagrams | quiz
    activeBook: "book1",    // active Book inside paper1 view
    formulaBook: "all",     // all | book1 .. booke3
    formulaCat: "all",      // all | basic | derived | sheet | mem
    allDerivOpen: true,
    diagramBook: "all",     // all | book1 .. booke3
    diagramKind: "all",     // all | graph | apparatus
    bookmarksOnly: false,
    lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh",
    theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
    mastered: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.mastered) || "[]")),
    bookmarks: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || "[]")),
    highlightId: null
  };

  const rich = (str) => window.PHY_MATH.rich(str);

  // Bilingual renderer supporting zh / en / both
  function bi(obj, inline = false) {
    if (!obj) return "";
    if (typeof obj === "string") return rich(obj);
    const zhHtml = rich(obj.zh || "");
    const enHtml = rich(obj.en || obj.zh || "");
    if (inline) {
      return `<span class="bi-inline"><span class="bi-zh">${zhHtml}</span><span class="bi-en">${enHtml}</span></span>`;
    }
    return `<div class="bi-wrap"><div class="bi-zh">${zhHtml}</div><div class="bi-en">${enHtml}</div></div>`;
  }

  function uiText(key) {
    const entry = window.PHY_META.ui[key];
    if (!entry) return key;
    if (state.lang === "en") return entry.en;
    if (state.lang === "both") return entry.both || `${entry.zh} / ${entry.en}`;
    return entry.zh;
  }

  window.PHY_APP_HELPERS = { bi, uiText };

  function saveSets() {
    localStorage.setItem(STORAGE_KEYS.mastered, JSON.stringify([...state.mastered]));
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify([...state.bookmarks]));
  }

  function getAllTopics() {
    const out = [];
    window.PHY_BOOKS.forEach((book) => {
      book.chapters.forEach((ch) => {
        ch.topics.forEach((tp) => {
          out.push({ book, ch, tp });
        });
      });
    });
    return out;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  }

  function applyLang() {
    document.documentElement.setAttribute("data-lang", state.lang);
    document.documentElement.setAttribute("lang", state.lang === "en" ? "en" : "zh-Hant");
    localStorage.setItem(STORAGE_KEYS.lang, state.lang);

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.setLang === state.lang);
    });

    // Update static data-i18n labels in header/sidebar
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (window.PHY_META.ui[k]) {
        el.textContent = uiText(k);
      }
    });

    const searchInput = document.getElementById("globalSearch");
    if (searchInput) {
      searchInput.placeholder = state.lang === "en"
        ? window.PHY_META.ui.searchPlaceholder.en
        : window.PHY_META.ui.searchPlaceholder.zh;
    }

    updateProgressUI();
  }

  function updateProgressUI() {
    const all = getAllTopics();
    const total = all.length;
    const done = all.filter(({ tp }) => state.mastered.has(tp.id)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    const pctEl = document.getElementById("masteryPct");
    const fillEl = document.getElementById("masteryFill");
    const countEl = document.getElementById("masteryCount");
    const bmBtn = document.getElementById("filterBookmarksBtn");

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (countEl) countEl.textContent = `${done} / ${total}`;
    if (bmBtn) {
      const base = state.lang === "en" ? "★ Bookmarks" : "★ 查看收藏";
      bmBtn.textContent = `${base} (${state.bookmarks.size})`;
    }
  }

  /* ========================================================================
     Sidebar Renderer (Context-Aware per Active Section)
     ======================================================================== */
  function renderSidebar() {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;

    const catalog = window.PHY_META.bookCatalog;
    let html = "";

    if (state.view === "formulas") {
      html += `<div class="sb-group"><div class="sb-group-title">${bi({ zh: "按課本瀏覽公式", en: "Formulas by Book" }, true)}</div>`;
      html += `<button class="sb-item ${state.formulaBook === "all" ? "active" : ""}" data-sb-fbook="all">
        <span>${bi({ zh: "全部 8 冊公式總覽", en: "All 8 Books" }, true)}</span>
        <span class="sb-badge">${window.PHY_FORMULAS.length}</span>
      </button>`;
      catalog.forEach((b) => {
        const cnt = window.PHY_FORMULAS.filter((f) => f.book === b.id).length;
        html += `<button class="sb-item ${state.formulaBook === b.id ? "active" : ""}" data-sb-fbook="${b.id}">
          <span><span class="pill-dot" style="display:inline-block;margin-right:6px;background:${b.color}"></span>${state.lang === "en" ? b.shortEn : b.shortZh}</span>
          <span class="sb-badge">${cnt}</span>
        </button>`;
      });
      html += `</div>`;
    } else if (state.view === "diagrams") {
      html += `<div class="sb-group"><div class="sb-group-title">${bi({ zh: "按課本瀏覽圖表", en: "Diagrams by Book" }, true)}</div>`;
      html += `<button class="sb-item ${state.diagramBook === "all" ? "active" : ""}" data-sb-dbook="all">
        <span>${bi({ zh: "全部核心圖表", en: "All Diagrams" }, true)}</span>
        <span class="sb-badge">${window.PHY_DIAGRAMS_DATA.length}</span>
      </button>`;
      catalog.forEach((b) => {
        const cnt = window.PHY_DIAGRAMS_DATA.filter((d) => d.book === b.id).length;
        html += `<button class="sb-item ${state.diagramBook === b.id ? "active" : ""}" data-sb-dbook="${b.id}">
          <span><span class="pill-dot" style="display:inline-block;margin-right:6px;background:${b.color}"></span>${state.lang === "en" ? b.shortEn : b.shortZh}</span>
          <span class="sb-badge">${cnt}</span>
        </button>`;
      });
      html += `</div>`;
    } else {
      // Syllabus books navigation (Paper 1 + E2 + E3)
      const groups = [
        { title: { zh: "試卷一 · 必修部分", en: "Paper 1 · Compulsory" }, paper: "paper1" },
        { title: { zh: "試卷二 · 選修部分", en: "Paper 2 · Electives" }, paper: "elective" }
      ];

      groups.forEach((g) => {
        const booksInGroup = window.PHY_BOOKS.filter((bk) =>
          g.paper === "paper1" ? bk.paper === "paper1" : bk.paper !== "paper1"
        );
        html += `<div class="sb-group"><div class="sb-group-title">${bi(g.title, true)}</div>`;
        booksInGroup.forEach((bk) => {
          const topicCount = bk.chapters.reduce((acc, c) => acc + c.topics.length, 0);
          const doneCount = bk.chapters.reduce((acc, c) => acc + c.topics.filter((t) => state.mastered.has(t.id)).length, 0);
          const isActiveBook = (state.view === "paper1" && state.activeBook === bk.id)
            || (state.view === "elective2" && bk.id === "booke2")
            || (state.view === "elective3" && bk.id === "booke3");

          html += `<button class="sb-item ${isActiveBook ? "active" : ""}" data-sb-book="${bk.id}">
            <span><span class="pill-dot" style="display:inline-block;margin-right:6px;background:${bk.color}"></span>${bk.code} ${state.lang === "en" ? bk.title.en.replace(/^Book [^:]+:\s*/, "") : bk.title.zh.replace(/^Book [^：]+：/, "")}</span>
            <span class="sb-badge">${doneCount}/${topicCount}</span>
          </button>`;

          if (isActiveBook) {
            bk.chapters.forEach((ch) => {
              ch.topics.forEach((tp) => {
                const m = state.mastered.has(tp.id) ? "✓ " : "";
                html += `<button class="sb-item" style="padding-left:1.65rem; font-size:0.79rem;" data-sb-topic="${tp.id}">
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${m}${tp.code} ${state.lang === "en" ? tp.title.en : tp.title.zh}</span>
                </button>`;
              });
            });
          }
        });
        html += `</div>`;
      });
    }

    nav.innerHTML = html;

    nav.querySelectorAll("[data-sb-book]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bid = btn.dataset.sbBook;
        state.bookmarksOnly = false;
        if (bid === "booke2") setView("elective2");
        else if (bid === "booke3") setView("elective3");
        else {
          state.activeBook = bid;
          setView("paper1");
        }
        closeMobileSidebar();
      });
    });

    nav.querySelectorAll("[data-sb-topic]").forEach((btn) => {
      btn.addEventListener("click", () => {
        scrollToElement(`topic-${btn.dataset.sbTopic}`);
        closeMobileSidebar();
      });
    });

    nav.querySelectorAll("[data-sb-fbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.formulaBook = btn.dataset.sbFbook;
        renderMain();
        renderSidebar();
        closeMobileSidebar();
      });
    });

    nav.querySelectorAll("[data-sb-dbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diagramBook = btn.dataset.sbDbook;
        renderMain();
        renderSidebar();
        closeMobileSidebar();
      });
    });
  }

  /* ========================================================================
     View 1: Overview
     ======================================================================== */
  function renderOverview(container) {
    const ov = window.PHY_META.overview;
    const allTopics = getAllTopics();
    const basicCnt = window.PHY_FORMULAS.filter((f) => f.category === "basic").length;
    const derivCnt = window.PHY_FORMULAS.filter((f) => f.category === "derived").length;

    container.innerHTML = `
      <section class="hero-card">
        <div class="hero-kicker">2027 HKDSE Physics · Paper 1 + Elective 2 & 3 · Bilingual</div>
        <h1 class="hero-title">${bi(ov.heroTitle)}</h1>
        <div class="hero-desc">${bi(ov.heroDesc)}</div>
        <div class="hero-actions">
          <button class="btn btn-primary" data-go-view="paper1">${bi({ zh: "開始溫習卷一必修 →", en: "Study Paper 1 Core →" }, true)}</button>
          <button class="btn btn-formula" data-go-view="formulas">${bi({ zh: "公式與推導寶庫 →", en: "Formulas & Derivations →" }, true)}</button>
          <button class="btn btn-diagram" data-go-view="diagrams">${bi({ zh: "核心圖表與圖像 →", en: "Diagrams & Graphs →" }, true)}</button>
          <button class="btn btn-secondary" data-go-view="quiz">${bi({ zh: "模擬測驗 →", en: "Practice Quiz →" }, true)}</button>
        </div>
      </section>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-num" style="color:var(--p1)">8 Books</div>
          <div class="stat-label">${bi({ zh: "Book 1–5 必修 + E2 原子 + E3 能源", en: "Books 1–5 Core + E2 Atomic + E3 Energy" }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--e2)">${allTopics.length}</div>
          <div class="stat-label">${bi({ zh: "詳盡雙語核心知識模塊", en: "Detailed Bilingual Knowledge Modules" }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--formula)">${window.PHY_FORMULAS.length}</div>
          <div class="stat-label">${bi({ zh: `${basicCnt} 基礎公式 + ${derivCnt} 課本推導`, en: `${basicCnt} Basic + ${derivCnt} Derived Formulas` }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--diagram)">${window.PHY_DIAGRAMS_DATA.length}</div>
          <div class="stat-label">${bi({ zh: "高清雙語 SVG 圖表與圖像", en: "Bilingual Vector Diagrams & Graphs" }, true)}</div>
        </div>
      </div>

      <!-- Book Directory -->
      <section class="section-card">
        <h2>📚 ${bi({ zh: "按課本（Book 1 – Book E3）快速直達", en: "Quick Directory by Textbook (Book 1 – Book E3)" }, true)}</h2>
        <div class="books-grid">
          ${window.PHY_BOOKS.map((bk) => {
            const tCnt = bk.chapters.reduce((s, c) => s + c.topics.length, 0);
            const fCnt = window.PHY_FORMULAS.filter((f) => f.book === bk.id).length;
            const dCnt = window.PHY_DIAGRAMS_DATA.filter((d) => d.book === bk.id).length;
            return `
              <button class="book-card" style="border-top-color:${bk.color}" data-open-book="${bk.id}">
                <div class="book-card-top">
                  <span class="book-tag" style="background:${bk.color}">${bk.code}</span>
                  <span style="font-size:0.74rem; color:var(--text-muted); font-weight:700;">${bk.paper === "paper1" ? "Paper 1" : "Paper 2"}</span>
                </div>
                <div class="book-card-title">${bi(bk.title, true)}</div>
                <div class="book-card-desc">${bi(bk.subtitle, true)}</div>
                <div class="book-card-meta">
                  <span>${tCnt} ${bi({ zh: "知識點", en: "topics" }, true)}</span>
                  <span>${fCnt} ${bi({ zh: "公式", en: "eqs" }, true)} · ${dCnt} ${bi({ zh: "圖表", en: "figs" }, true)}</span>
                </div>
              </button>
            `;
          }).join("")}
        </div>
      </section>

      <!-- Assessment Framework -->
      <section class="section-card">
        <h2>📋 ${bi({ zh: "2027 HKDSE 物理科評核大綱", en: "2027 HKDSE Physics Assessment Framework" }, true)}</h2>
        ${renderTable(ov.assessmentTable)}
      </section>

      <!-- Official Physical Constants -->
      <section class="section-card">
        <h2>🔢 ${bi({ zh: "考評局官方物理常數速查（List of Data）", en: "Official HKEAA Physical Constants (List of Data)" }, true)}</h2>
        ${renderTable(ov.constantsTable)}
      </section>

      <!-- 5** Exam Strategy -->
      <section class="section-card">
        <h2>🎯 ${bi({ zh: "2027 DSE 物理 5** 實戰答題要訣", en: "2027 HKDSE Physics 5** Exam Strategies" }, true)}</h2>
        <ul class="kp-list">
          ${ov.examTips.map((tip) => `<li>${bi(tip)}</li>`).join("")}
        </ul>
      </section>
    `;

    container.querySelectorAll("[data-go-view]").forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.goView));
    });
    container.querySelectorAll("[data-open-book]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bid = btn.dataset.openBook;
        if (bid === "booke2") setView("elective2");
        else if (bid === "booke3") setView("elective3");
        else {
          state.activeBook = bid;
          setView("paper1");
        }
      });
    });
  }

  /* ========================================================================
     View 2–4: Paper 1 / Elective 2 / Elective 3 Book Notes
     ======================================================================== */
  function renderBookView(container, bookId, showPaper1Switcher) {
    if (state.bookmarksOnly) {
      renderBookmarksView(container);
      return;
    }

    const book = window.PHY_BOOKS.find((b) => b.id === bookId) || window.PHY_BOOKS[0];
    const p1Books = window.PHY_BOOKS.filter((b) => b.paper === "paper1");
    const fCount = window.PHY_FORMULAS.filter((f) => f.book === book.id).length;
    const dCount = window.PHY_DIAGRAMS_DATA.filter((d) => d.book === book.id).length;

    container.innerHTML = `
      ${showPaper1Switcher ? `
        <div class="book-pills">
          ${p1Books.map((b) => `
            <button class="pill-btn ${b.id === book.id ? "active" : ""}" data-switch-p1="${b.id}">
              <span class="pill-dot" style="background:${b.color}"></span>
              ${state.lang === "en" ? b.code + " · " + b.title.en.replace(/^Book [^:]+:\s*/, "") : b.title.zh}
            </button>
          `).join("")}
        </div>
      ` : ""}

      <div class="page-head">
        <div>
          <span class="book-tag" style="background:${book.color}">${book.code} · ${book.paper === "paper1" ? "Paper 1 Compulsory" : "Paper 2 Elective"}</span>
          <h1>${bi(book.title)}</h1>
          <p class="page-head-sub">${bi(book.subtitle)}</p>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-secondary" data-jump-fbook="${book.id}">∑ ${bi({ zh: `本冊公式 (${fCount})`, en: `Formulas (${fCount})` }, true)}</button>
          <button class="btn btn-secondary" data-jump-dbook="${book.id}">📈 ${bi({ zh: `本冊圖表 (${dCount})`, en: `Diagrams (${dCount})` }, true)}</button>
          <button class="btn btn-secondary" id="expandAllTopicsBtn">${uiText("expandAll")}</button>
          <button class="btn btn-secondary" id="collapseAllTopicsBtn">${uiText("collapseAll")}</button>
        </div>
      </div>

      ${book.chapters.map((ch) => `
        <section class="chapter-block" id="${ch.id}">
          <div class="chapter-banner" style="border-left-color:${book.color}">
            <h2>${ch.code} · ${bi(ch.title, true)}</h2>
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">${ch.topics.length} ${bi({ zh: "課題", en: "topics" }, true)}</span>
          </div>
          ${ch.topics.map((tp) => renderTopicCard(tp, book)).join("")}
        </section>
      `).join("")}
    `;

    bindBookViewEvents(container);
  }

  function renderBookmarksView(container) {
    const saved = getAllTopics().filter(({ tp }) => state.bookmarks.has(tp.id));
    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker">★ ${bi({ zh: "已收藏重點", en: "Bookmarked Topics" }, true)}</span>
          <h1>${bi({ zh: "我的重點收藏清單", en: "My Bookmarked Knowledge Points" })}</h1>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-primary" id="exitBookmarksBtn">${bi({ zh: "← 返回課本筆記", en: "← Back to Notes" }, true)}</button>
        </div>
      </div>
      ${saved.length === 0
        ? `<div class="section-card" style="text-align:center; padding:2.5rem; color:var(--text-muted);">${bi({ zh: "尚未收藏任何知識點。點擊任意知識點右上角的「收藏」按鈕即可加入！", en: "No bookmarked topics yet. Click 'Bookmark' on any topic card to save it here!" })}</div>`
        : saved.map(({ tp, book }) => renderTopicCard(tp, book)).join("")}
    `;
    const exitBtn = container.querySelector("#exitBookmarksBtn");
    if (exitBtn) {
      exitBtn.addEventListener("click", () => {
        state.bookmarksOnly = false;
        renderMain();
      });
    }
    bindBookViewEvents(container);
  }

  function renderTopicCard(tp, book) {
    const isMastered = state.mastered.has(tp.id);
    const isBm = state.bookmarks.has(tp.id);
    const isHi = state.highlightId === `topic-${tp.id}`;

    // Linked formulas chips
    const linkedFormulas = (tp.formulaIds || [])
      .map((fid) => window.PHY_FORMULAS.find((f) => f.id === fid))
      .filter(Boolean);

    // Linked diagrams
    const linkedDiagrams = (tp.diagramIds || [])
      .map((did) => window.PHY_DIAGRAMS_DATA.find((d) => d.id === did))
      .filter(Boolean);

    return `
      <article class="topic-card ${isMastered ? "is-mastered" : ""} ${isHi ? "is-highlighted" : ""}" id="topic-${tp.id}">
        <div class="topic-head" data-toggle-topic="${tp.id}">
          <div class="topic-title-wrap">
            <div class="topic-code-row">
              <span class="topic-code" style="color:${book.color}; background:var(--bg-subtle)">${book.code} · ${tp.code}</span>
              ${tp.highYield ? `<span class="tag-high">★ ${bi({ zh: "DSE 高頻必考", en: "High-Yield" }, true)}</span>` : ""}
            </div>
            <h3 class="topic-title">${bi(tp.title)}</h3>
          </div>
          <div class="topic-actions">
            <button class="mini-btn ${isMastered ? "active-master" : ""}" data-master-id="${tp.id}">${isMastered ? uiText("mastered") : uiText("markMastered")}</button>
            <button class="mini-btn ${isBm ? "active-bm" : ""}" data-bm-id="${tp.id}">${isBm ? uiText("bookmarked") : uiText("bookmark")}</button>
          </div>
        </div>

        <div class="topic-body">
          <div class="topic-summary">${bi(tp.summary)}</div>

          ${linkedFormulas.length ? `
            <div style="font-size:0.78rem; font-weight:800; color:var(--formula); margin-bottom:0.35rem;">∑ ${bi({ zh: "相關核心公式與推導（點擊跳轉詳解）", en: "Linked Formulas & Derivations (click to inspect)" }, true)}</div>
            <div class="topic-formulas-strip">
              ${linkedFormulas.map((f) => `
                <button class="formula-chip" data-open-formula="${f.id}" data-open-fbook="${f.book}" title="${f.name.zh}">
                  ${window.PHY_MATH.inline(f.eq)}
                  ${f.category === "derived" ? `<span class="f-badge f-badge-derived">${bi({ zh: "推導", en: "Derived" }, true)}</span>` : ""}
                </button>
              `).join("")}
            </div>
          ` : ""}

          ${tp.points && tp.points.length ? `
            <ul class="kp-list">
              ${tp.points.map((pt) => `<li>${bi(pt)}</li>`).join("")}
            </ul>
          ` : ""}

          ${tp.table ? renderTable(tp.table) : ""}

          ${tp.example ? `
            <div class="example-box">
              <div class="example-label">📝 ${bi({ zh: "DSE 精選例題與解題示範", en: "Worked DSE Example" }, true)}</div>
              <div style="font-weight:700; margin-bottom:0.45rem;">${bi({ zh: tp.example.zh.q, en: tp.example.en.q })}</div>
              <div style="border-top:1px dashed var(--formula-border); padding-top:0.45rem;">${bi({ zh: tp.example.zh.sol, en: tp.example.en.sol })}</div>
            </div>
          ` : ""}

          ${linkedDiagrams.map((d) => `
            <div class="inline-diagram-box">
              <div class="inline-diagram-head">
                <span>📈 ${bi(d.title, true)}</span>
                <button class="mini-btn" data-zoom-diag="${d.id}">${bi({ zh: "放大檢視 🔍", en: "Zoom 🔍" }, true)}</button>
              </div>
              <div class="inline-diagram-svg" data-zoom-diag="${d.id}" style="cursor:zoom-in">
                ${window.PHY_DIAGRAMS.render(d.id, state.lang)}
              </div>
              <div class="inline-diagram-cap">${bi(d.analysis)}</div>
            </div>
          `).join("")}

          ${tp.tip ? `<div class="callout callout-tip"><div class="callout-title">💡 ${bi({ zh: "奪星要訣", en: "5** Strategy Tip" }, true)}</div>${bi(tp.tip)}</div>` : ""}
          ${tp.trap ? `<div class="callout callout-trap"><div class="callout-title">⚠️ ${bi({ zh: "DSE 常見陷阱", en: "Common Exam Trap" }, true)}</div>${bi(tp.trap)}</div>` : ""}
          ${tp.exam ? `<div class="callout callout-exam"><div class="callout-title">✅ ${bi({ zh: "考評局得分關鍵詞", en: "HKEAA Marking Keywords" }, true)}</div>${bi(tp.exam)}</div>` : ""}
        </div>
      </article>
    `;
  }

  function bindBookViewEvents(container) {
    container.querySelectorAll("[data-switch-p1]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeBook = btn.dataset.switchP1;
        renderMain();
        renderSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    container.querySelectorAll("[data-jump-fbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.formulaBook = btn.dataset.jumpFbook;
        setView("formulas");
      });
    });

    container.querySelectorAll("[data-jump-dbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diagramBook = btn.dataset.jumpDbook;
        setView("diagrams");
      });
    });

    container.querySelectorAll("[data-toggle-topic]").forEach((head) => {
      head.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        const card = head.closest(".topic-card");
        if (card) card.classList.toggle("collapsed");
      });
    });

    container.querySelectorAll("[data-master-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.masterId;
        if (state.mastered.has(id)) state.mastered.delete(id);
        else state.mastered.add(id);
        saveSets();
        updateProgressUI();
        renderSidebar();
        const card = document.getElementById(`topic-${id}`);
        const now = state.mastered.has(id);
        btn.classList.toggle("active-master", now);
        btn.textContent = now ? uiText("mastered") : uiText("markMastered");
        if (card) card.classList.toggle("is-mastered", now);
      });
    });

    container.querySelectorAll("[data-bm-id]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.bmId;
        if (state.bookmarks.has(id)) state.bookmarks.delete(id);
        else state.bookmarks.add(id);
        saveSets();
        updateProgressUI();
        const now = state.bookmarks.has(id);
        btn.classList.toggle("active-bm", now);
        btn.textContent = now ? uiText("bookmarked") : uiText("bookmark");
      });
    });

    container.querySelectorAll("[data-open-formula]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.formulaBook = btn.dataset.openFbook;
        state.formulaCat = "all";
        state.highlightId = `formula-${btn.dataset.openFormula}`;
        setView("formulas");
        setTimeout(() => scrollToElement(`formula-${btn.dataset.openFormula}`), 60);
      });
    });

    container.querySelectorAll("[data-zoom-diag]").forEach((el) => {
      el.addEventListener("click", () => openDiagramModal(el.dataset.zoomDiag));
    });

    const expAll = container.querySelector("#expandAllTopicsBtn");
    const colAll = container.querySelector("#collapseAllTopicsBtn");
    if (expAll) expAll.addEventListener("click", () => container.querySelectorAll(".topic-card").forEach((c) => c.classList.remove("collapsed")));
    if (colAll) colAll.addEventListener("click", () => container.querySelectorAll(".topic-card").forEach((c) => c.classList.add("collapsed")));
  }

  /* ========================================================================
     View 5: Formulas & Textbook Derivations Vault (Strictly by Book)
     ======================================================================== */
  function renderFormulasView(container) {
    const books = window.PHY_META.bookCatalog;
    const filteredBooks = state.formulaBook === "all"
      ? books
      : books.filter((b) => b.id === state.formulaBook);

    const matchCat = (f) => {
      if (state.formulaCat === "all") return true;
      if (state.formulaCat === "basic") return f.category === "basic";
      if (state.formulaCat === "derived") return f.category === "derived";
      if (state.formulaCat === "sheet") return f.onSheet === true;
      if (state.formulaCat === "mem") return f.onSheet === false;
      return true;
    };

    const totalVisible = window.PHY_FORMULAS.filter((f) =>
      (state.formulaBook === "all" || f.book === state.formulaBook) && matchCat(f)
    ).length;

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker">∑ ${bi({ zh: "按課本（Book 1 – Book E3）分類整理", en: "Organized Strictly by Book 1 – Book E3" }, true)}</span>
          <h1>${bi({ zh: "HKDSE 物理基礎公式與課本推導寶庫", en: "HKDSE Physics Basic Formulas & Textbook Derivations Vault" })}</h1>
          <p class="page-head-sub">${bi({ zh: "清晰區分「考評局官方公式表提供」、「須熟記基礎公式」及「課本完整步驟推導公式」，附符號定義、SI 單位及適用條件。", en: "Clearly separates 'Provided on HKEAA Sheet', 'Must Memorize Basics', and 'Step-by-Step Textbook Derivations' with symbols, SI units & validity conditions." })}</p>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-secondary" id="toggleAllDerivBtn">${state.allDerivOpen ? bi({ zh: "收合所有推導步驟", en: "Collapse All Derivations" }, true) : bi({ zh: "展開所有推導步驟", en: "Expand All Derivations" }, true)}</button>
        </div>
      </div>

      <!-- Book Selector Pills -->
      <div class="book-pills">
        <button class="pill-btn ${state.formulaBook === "all" ? "active" : ""}" data-fbook="all">${bi({ zh: "全部 8 冊", en: "All 8 Books" }, true)} (${window.PHY_FORMULAS.length})</button>
        ${books.map((b) => {
          const cnt = window.PHY_FORMULAS.filter((f) => f.book === b.id).length;
          return `<button class="pill-btn ${state.formulaBook === b.id ? "active" : ""}" data-fbook="${b.id}"><span class="pill-dot" style="background:${b.color}"></span>${b.code} (${cnt})</button>`;
        }).join("")}
      </div>

      <!-- Category Filter Bar -->
      <div class="filter-bar">
        <div class="filter-group">
          ${[
            ["all", { zh: "全部公式", en: "All" }],
            ["basic", { zh: "基礎公式", en: "Basic Only" }],
            ["derived", { zh: "課本推導公式", en: "Textbook Derived" }],
            ["sheet", { zh: "✓ 官方公式表提供", en: "✓ On HKEAA Sheet" }],
            ["mem", { zh: "★ 必須自行熟記", en: "★ Must Memorize" }]
          ].map(([k, lbl]) => `
            <button class="filter-chip ${state.formulaCat === k ? "active" : ""}" data-fcat="${k}">${bi(lbl, true)}</button>
          `).join("")}
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted); font-weight:700;">
          ${bi({ zh: `顯示 ${totalVisible} 條公式`, en: `Showing ${totalVisible} equations` }, true)}
        </div>
      </div>

      ${filteredBooks.map((bk) => {
        const bkFormulas = window.PHY_FORMULAS.filter((f) => f.book === bk.id && matchCat(f));
        if (!bkFormulas.length) return "";
        const basics = bkFormulas.filter((f) => f.category === "basic");
        const deriveds = bkFormulas.filter((f) => f.category === "derived");

        return `
          <section class="chapter-block" id="fsec-${bk.id}">
            <div class="chapter-banner" style="border-left-color:${bk.color}">
              <h2><span class="book-tag" style="background:${bk.color}; margin-right:8px;">${bk.code}</span>${bi({ zh: bk.zh, en: bk.en }, true)}</h2>
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">${basics.length} ${bi({ zh: "基礎", en: "Basic" }, true)} · ${deriveds.length} ${bi({ zh: "推導", en: "Derived" }, true)}</span>
            </div>

            ${basics.length ? `
              <div class="formula-section-head">
                <span style="color:var(--formula); font-weight:900;">●</span>
                <h3>${bi({ zh: "一、基礎與基本定律公式", en: "Part 1: Basic & Fundamental Equations" }, true)}</h3>
              </div>
              <div class="formula-grid">
                ${basics.map((f) => renderFormulaCard(f, bk)).join("")}
              </div>
            ` : ""}

            ${deriveds.length ? `
              <div class="formula-section-head">
                <span style="color:var(--e2); font-weight:900;">◆</span>
                <h3>${bi({ zh: "二、課本推導公式與完整推導步驟", en: "Part 2: Textbook Derived Formulas & Step-by-Step Proofs" }, true)}</h3>
              </div>
              <div class="formula-grid">
                ${deriveds.map((f) => renderFormulaCard(f, bk)).join("")}
              </div>
            ` : ""}
          </section>
        `;
      }).join("")}
    `;

    container.querySelectorAll("[data-fbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.formulaBook = btn.dataset.fbook;
        renderMain();
        renderSidebar();
      });
    });

    container.querySelectorAll("[data-fcat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.formulaCat = btn.dataset.fcat;
        renderMain();
      });
    });

    const toggleAllBtn = container.querySelector("#toggleAllDerivBtn");
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener("click", () => {
        state.allDerivOpen = !state.allDerivOpen;
        renderMain();
      });
    }

    container.querySelectorAll("[data-toggle-deriv]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const box = btn.nextElementSibling;
        if (!box) return;
        const hidden = box.classList.toggle("hidden");
        btn.querySelector(".deriv-toggle-lbl").textContent = hidden ? uiText("showDeriv") : uiText("hideDeriv");
      });
    });
  }

  function renderFormulaCard(f, bk) {
    const isDerived = f.category === "derived";
    const isHi = state.highlightId === `formula-${f.id}`;
    return `
      <article class="formula-card ${isDerived ? "derived-card" : "basic-card"} ${isHi ? "is-highlighted" : ""}" id="formula-${f.id}">
        <div class="formula-card-top">
          <div class="formula-name">${bi(f.name)}</div>
          <div class="formula-badges">
            <span class="f-badge f-badge-book" style="color:${bk.color}">${bk.code}</span>
            ${isDerived ? `<span class="f-badge f-badge-derived">${bi({ zh: "課本推導", en: "Derived" }, true)}</span>` : ""}
            ${f.onSheet
              ? `<span class="f-badge f-badge-sheet">${bi({ zh: "✓ 考評局附表", en: "✓ HKEAA Sheet" }, true)}</span>`
              : `<span class="f-badge f-badge-mem">${bi({ zh: "★ 必背", en: "★ Memorize" }, true)}</span>`}
          </div>
        </div>

        <div class="formula-eq-box">${window.PHY_MATH.inline(f.eq)}</div>

        ${f.vars && f.vars.length ? `
          <div class="formula-vars">
            ${f.vars.map((v) => `
              <div class="formula-var-row">
                <span class="formula-var-sym">${rich(v.sym)}</span>
                <span style="flex:1">${bi({ zh: v.zh, en: v.en }, true)}</span>
                <span style="color:var(--text-muted); font-size:0.78rem; white-space:nowrap;">${rich(v.unit)}</span>
              </div>
            `).join("")}
          </div>
        ` : ""}

        ${f.steps && f.steps.length ? `
          <div class="derivation-box">
            <button class="derivation-toggle" data-toggle-deriv="${f.id}">
              <span>📐 ${bi({ zh: "課本推導步驟", en: "Textbook Derivation" }, true)}</span>
              <span class="deriv-toggle-lbl">${state.allDerivOpen ? uiText("hideDeriv") : uiText("showDeriv")}</span>
            </button>
            <div class="derivation-steps ${state.allDerivOpen ? "" : "hidden"}">
              ${f.steps.map((st, idx) => `
                <div class="deriv-step">
                  <span class="deriv-step-num">${idx + 1}</span>
                  <div style="flex:1">${bi(st)}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        ${f.cond ? `<div class="formula-cond"><strong>${bi({ zh: "條件與考點：", en: "Condition & Note:" }, true)}</strong> ${bi(f.cond, true)}</div>` : ""}
      </article>
    `;
  }

  /* ========================================================================
     View 6: Core Diagrams & Graphs Gallery
     ======================================================================== */
  function renderDiagramsView(container) {
    const books = window.PHY_META.bookCatalog;
    const list = window.PHY_DIAGRAMS_DATA.filter((d) =>
      (state.diagramBook === "all" || d.book === state.diagramBook) &&
      (state.diagramKind === "all" || d.kind === state.diagramKind)
    );

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker">📈 ${bi({ zh: "36 幅雙語矢量（SVG）核心圖表", en: "36 Bilingual Vector (SVG) Essential Visuals" }, true)}</span>
          <h1>${bi({ zh: "HKDSE 物理核心圖表、圖像與裝置解析大全", en: "HKDSE Physics Essential Diagrams, Graphs & Apparatus Gallery" })}</h1>
          <p class="page-head-sub">${bi({ zh: "切換頂部語言時所有圖表內文字自動同步切換中英文！點擊任一圖表可開啟全螢幕高清放大檢視。", en: "All diagram labels switch dynamically with the top language toggle! Click any visual to open full-screen zoom." })}</p>
        </div>
      </div>

      <div class="book-pills">
        <button class="pill-btn ${state.diagramBook === "all" ? "active" : ""}" data-dbook="all">${bi({ zh: "全部課本", en: "All Books" }, true)} (${window.PHY_DIAGRAMS_DATA.length})</button>
        ${books.map((b) => {
          const cnt = window.PHY_DIAGRAMS_DATA.filter((d) => d.book === b.id).length;
          return `<button class="pill-btn ${state.diagramBook === b.id ? "active" : ""}" data-dbook="${b.id}"><span class="pill-dot" style="background:${b.color}"></span>${b.code} (${cnt})</button>`;
        }).join("")}
      </div>

      <div class="filter-bar">
        <div class="filter-group">
          ${[
            ["all", { zh: "全部類型", en: "All Types" }],
            ["graph", { zh: "📉 物理圖像 (Graphs)", en: "📉 Physics Graphs" }],
            ["apparatus", { zh: "🔬 裝置、光路與力圖 (Diagrams)", en: "🔬 Apparatus, Rays & Diagrams" }]
          ].map(([k, lbl]) => `
            <button class="filter-chip ${state.diagramKind === k ? "active" : ""}" data-dkind="${k}">${bi(lbl, true)}</button>
          `).join("")}
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted); font-weight:700;">
          ${bi({ zh: `共 ${list.length} 幅圖表`, en: `${list.length} diagrams` }, true)}
        </div>
      </div>

      <div class="diagrams-grid">
        ${list.map((d) => {
          const bk = books.find((b) => b.id === d.book);
          const isHi = state.highlightId === `diagcard-${d.id}`;
          return `
            <article class="diagram-card ${isHi ? "is-highlighted" : ""}" id="diagcard-${d.id}">
              <div class="diagram-card-head">
                <div>
                  <span class="book-tag" style="background:${bk ? bk.color : 'var(--p1)'}; margin-bottom:4px; display:inline-block;">${bk ? bk.code : d.book} · ${d.kind === "graph" ? bi({ zh: "物理圖像", en: "Graph" }, true) : bi({ zh: "結構 / 原理圖", en: "Diagram" }, true)}</span>
                  <div class="diagram-card-title">${bi(d.title)}</div>
                </div>
                <button class="mini-btn" data-zoom-diag="${d.id}">🔍</button>
              </div>
              <div class="diagram-svg-stage" data-zoom-diag="${d.id}">
                ${window.PHY_DIAGRAMS.render(d.id, state.lang)}
              </div>
              <div class="diagram-card-body">
                <div>${bi(d.summary)}</div>
                <div class="diagram-meta-box">
                  <div style="font-weight:800; margin-bottom:0.25rem; color:var(--p1);">🔎 ${bi({ zh: "圖表關鍵解讀（斜率 / 面積 / 結構）", en: "Key Reading (Slope / Area / Mechanism)" }, true)}</div>
                  ${bi(d.analysis)}
                </div>
                <div class="diagram-exam-box">
                  <strong>🎯 ${bi({ zh: "DSE 必考要點：", en: "DSE Exam Focus:" }, true)}</strong> ${bi(d.exam, true)}
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;

    container.querySelectorAll("[data-dbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diagramBook = btn.dataset.dbook;
        renderMain();
        renderSidebar();
      });
    });
    container.querySelectorAll("[data-dkind]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diagramKind = btn.dataset.dkind;
        renderMain();
      });
    });
    container.querySelectorAll("[data-zoom-diag]").forEach((el) => {
      el.addEventListener("click", () => openDiagramModal(el.dataset.zoomDiag));
    });
  }

  /* ========================================================================
     Shared Table Renderer & Diagram Lightbox Modal
     ======================================================================== */
  function renderTable(tbl) {
    if (!tbl) return "";
    return `
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>${tbl.headers.map((h) => `<th>${bi(h, true)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${tbl.rows.map((r) => `<tr>${r.map((cell) => `<td>${bi(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function openDiagramModal(diagId) {
    const d = window.PHY_DIAGRAMS_DATA.find((x) => x.id === diagId);
    if (!d) return;
    const modal = document.getElementById("diagramModal");
    const titleEl = document.getElementById("modalTitle");
    const bodyEl = document.getElementById("modalBody");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.innerHTML = `<div style="font-weight:800; font-size:1.08rem;">${bi(d.title, true)}</div>`;
    bodyEl.innerHTML = `
      ${window.PHY_DIAGRAMS.render(d.id, state.lang)}
      <div style="margin-bottom:0.8rem;">${bi(d.summary)}</div>
      <div class="diagram-meta-box" style="margin-bottom:0.75rem;">
        <div style="font-weight:800; margin-bottom:0.3rem; color:var(--p1);">🔎 ${bi({ zh: "深度解讀", en: "Detailed Analysis" }, true)}</div>
        ${bi(d.analysis)}
      </div>
      <div class="diagram-exam-box">
        <strong>🎯 ${bi({ zh: "DSE 必考要點：", en: "DSE Exam Focus:" }, true)}</strong> ${bi(d.exam)}
      </div>
    `;
    modal.hidden = false;
  }

  function closeDiagramModal() {
    const modal = document.getElementById("diagramModal");
    if (modal) modal.hidden = true;
  }

  /* ========================================================================
     Global Search across Topics + Formulas + Diagrams
     ======================================================================== */
  function runSearch(query) {
    const box = document.getElementById("searchResults");
    if (!box) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      box.hidden = true;
      return;
    }

    const hits = [];

    // 1. Knowledge points
    getAllTopics().forEach(({ book, tp }) => {
      const blob = [
        book.code, tp.code, tp.title.zh, tp.title.en,
        tp.summary.zh, tp.summary.en,
        ...(tp.points || []).map((p) => `${p.zh} ${p.en}`)
      ].join(" ").toLowerCase();
      if (blob.includes(q)) {
        hits.push({
          kind: "topic",
          badge: book.code,
          title: state.lang === "en" ? tp.title.en : tp.title.zh,
          sub: state.lang === "en" ? tp.title.zh : tp.title.en,
          action: () => {
            state.bookmarksOnly = false;
            state.highlightId = `topic-${tp.id}`;
            if (book.id === "booke2") setView("elective2");
            else if (book.id === "booke3") setView("elective3");
            else {
              state.activeBook = book.id;
              setView("paper1");
            }
            setTimeout(() => scrollToElement(`topic-${tp.id}`), 60);
          }
        });
      }
    });

    // 2. Formulas & Derivations
    window.PHY_FORMULAS.forEach((f) => {
      const blob = [f.book, f.name.zh, f.name.en, f.eq, f.cond ? f.cond.zh + " " + f.cond.en : ""].join(" ").toLowerCase();
      if (blob.includes(q)) {
        const bk = window.PHY_META.bookCatalog.find((b) => b.id === f.book);
        hits.push({
          kind: "formula",
          badge: `${bk ? bk.code : f.book} · ${f.category === "derived" ? "推導" : "公式"}`,
          title: state.lang === "en" ? f.name.en : f.name.zh,
          sub: f.eq.replace(/\\text\{([^}]+)\}/g, "$1"),
          action: () => {
            state.formulaBook = f.book;
            state.formulaCat = "all";
            state.highlightId = `formula-${f.id}`;
            setView("formulas");
            setTimeout(() => scrollToElement(`formula-${f.id}`), 60);
          }
        });
      }
    });

    // 3. Diagrams
    window.PHY_DIAGRAMS_DATA.forEach((d) => {
      const blob = [d.book, d.title.zh, d.title.en, d.summary.zh, d.summary.en, d.analysis.zh].join(" ").toLowerCase();
      if (blob.includes(q)) {
        const bk = window.PHY_META.bookCatalog.find((b) => b.id === d.book);
        hits.push({
          kind: "diagram",
          badge: `${bk ? bk.code : d.book} · 圖表`,
          title: state.lang === "en" ? d.title.en : d.title.zh,
          sub: state.lang === "en" ? d.title.zh : d.title.en,
          action: () => {
            state.diagramBook = d.book;
            state.diagramKind = "all";
            state.highlightId = `diagcard-${d.id}`;
            setView("diagrams");
            setTimeout(() => scrollToElement(`diagcard-${d.id}`), 60);
          }
        });
      }
    });

    const top = hits.slice(0, 14);
    if (!top.length) {
      box.innerHTML = `<div style="padding:0.9rem; text-align:center; color:var(--text-muted); font-size:0.86rem;">${uiText("noResults")}</div>`;
      box.hidden = false;
      return;
    }

    box.innerHTML = top.map((h, i) => `
      <button class="search-item" data-hit="${i}">
        <div class="search-item-head">
          <span class="search-kind kind-${h.kind}">${h.badge}</span>
          <span class="search-item-title">${rich(h.title)}</span>
        </div>
        <div class="search-item-sub">${h.kind === "formula" ? window.PHY_MATH.inline(h.sub) : rich(h.sub)}</div>
      </button>
    `).join("");
    box.hidden = false;

    box.querySelectorAll("[data-hit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        top[Number(btn.dataset.hit)].action();
        box.hidden = true;
        document.getElementById("globalSearch").value = "";
      });
    });
  }

  /* ========================================================================
     Navigation & Helpers
     ======================================================================== */
  function scrollToElement(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("collapsed");
    const y = el.getBoundingClientRect().top + window.scrollY - 124;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  function setView(viewName) {
    state.view = viewName;
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.view === viewName);
    });
    renderSidebar();
    renderMain();
    if (!state.highlightId) window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => { state.highlightId = null; }, 1400);
  }

  function renderMain() {
    const main = document.getElementById("mainContent");
    if (!main) return;
    if (state.view === "overview") renderOverview(main);
    else if (state.view === "paper1") renderBookView(main, state.activeBook, true);
    else if (state.view === "elective2") renderBookView(main, "booke2", false);
    else if (state.view === "elective3") renderBookView(main, "booke3", false);
    else if (state.view === "formulas") renderFormulasView(main);
    else if (state.view === "diagrams") renderDiagramsView(main);
    else if (state.view === "quiz") window.PHY_QUIZ.render(main);
  }

  function closeMobileSidebar() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebarBackdrop")?.classList.remove("open");
  }

  /* ========================================================================
     Bootstrap & Event Listeners
     ======================================================================== */
  function init() {
    applyTheme();
    applyLang();
    renderSidebar();
    renderMain();

    // Primary section tabs
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.bookmarksOnly = false;
        setView(btn.dataset.view);
      });
    });

    // Brand link -> overview
    document.getElementById("brandLink")?.addEventListener("click", (e) => {
      e.preventDefault();
      state.bookmarksOnly = false;
      setView("overview");
    });

    // Language switcher (re-renders views AND SVG diagram labels!)
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.setLang;
        applyLang();
        renderSidebar();
        renderMain();
      });
    });

    // Theme toggle
    document.getElementById("themeToggle")?.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      applyTheme();
    });

    // Print
    document.getElementById("printBtn")?.addEventListener("click", () => window.print());

    // Bookmarks quick filter
    document.getElementById("filterBookmarksBtn")?.addEventListener("click", () => {
      state.bookmarksOnly = !state.bookmarksOnly;
      if (state.bookmarksOnly && !["paper1", "elective2", "elective3"].includes(state.view)) {
        state.view = "paper1";
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === "paper1"));
      }
      renderMain();
      closeMobileSidebar();
    });

    // Mobile drawer
    document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
      document.getElementById("sidebar")?.classList.toggle("open");
      document.getElementById("sidebarBackdrop")?.classList.toggle("open");
    });
    document.getElementById("sidebarBackdrop")?.addEventListener("click", closeMobileSidebar);

    // Search
    const searchInput = document.getElementById("globalSearch");
    searchInput?.addEventListener("input", () => runSearch(searchInput.value));
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#searchWrap")) {
        const res = document.getElementById("searchResults");
        if (res) res.hidden = true;
      }
    });

    // Modal close
    document.getElementById("closeModalBtn")?.addEventListener("click", closeDiagramModal);
    document.getElementById("diagramModal")?.addEventListener("click", (e) => {
      if (e.target.id === "diagramModal") closeDiagramModal();
    });

    // Keyboard shortcuts: / search, L cycle language, Esc close
    document.addEventListener("keydown", (e) => {
      const inInput = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
      if (e.key === "/" && !inInput) {
        e.preventDefault();
        searchInput?.focus();
      } else if ((e.key === "l" || e.key === "L") && !inInput && !e.metaKey && !e.ctrlKey) {
        const order = ["zh", "both", "en"];
        state.lang = order[(order.indexOf(state.lang) + 1) % order.length];
        applyLang();
        renderSidebar();
        renderMain();
      } else if (e.key === "Escape") {
        closeDiagramModal();
        const res = document.getElementById("searchResults");
        if (res) res.hidden = true;
        searchInput?.blur();
      }
    });

    // Back to top
    const btt = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      btt?.classList.toggle("show", window.scrollY > 360);
    });
    btt?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
