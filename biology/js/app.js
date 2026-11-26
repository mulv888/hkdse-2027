/* ==========================================================================
   2027 HKDSE Biology Revision Hub (EMI) — Main SPA Controller
   Default ENG (EN / EN+繁中 / 繁中 toggle via L), Active Recall Blur (R),
   Compulsory U1–U5, Electives E1–E4, Unit Vocabulary Hub, 17 SVG Diagrams & Quiz
   ========================================================================== */
(function () {
  "use strict";

  const STORAGE_KEYS = {
    lang: "dse2027_bio_lang",
    theme: "dse2027_bio_theme",
    mastered: "dse2027_bio_mastered",
    bookmarks: "dse2027_bio_bookmarks"
  };

  const state = {
    view: "overview",         // overview | compulsory | electives | vocab | diagrams | quiz
    activeCoreUnit: "u1",     // u1..u5
    activeElecUnit: "e1",     // e1..e4
    diagramUnit: "all",       // all | u1..e4
    bookmarksOnly: false,
    recallMode: false,
    lang: localStorage.getItem(STORAGE_KEYS.lang) || "en", // EMI default = EN!
    theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
    mastered: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.mastered) || "[]")),
    bookmarks: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || "[]")),
    highlightId: null
  };

  const rich = (str) => window.BIO_TEXT.rich(str);

  // EMI-First Bilingual Renderer: EN appears FIRST, ZH second
  function bi(obj, inline = false) {
    if (!obj) return "";
    if (typeof obj === "string") return rich(obj);
    const enHtml = rich(obj.en || obj.zh || "");
    const zhHtml = rich(obj.zh || obj.en || "");
    if (inline) {
      return `<span class="bi-inline"><span class="bi-en">${enHtml}</span><span class="bi-zh">${zhHtml}</span></span>`;
    }
    return `<div class="bi-wrap"><div class="bi-en">${enHtml}</div><div class="bi-zh">${zhHtml}</div></div>`;
  }

  function uiText(key) {
    const entry = window.BIO_META.ui[key];
    if (!entry) return key;
    if (state.lang === "zh") return entry.zh;
    if (state.lang === "both") return `${entry.en} · ${entry.zh}`;
    return entry.en;
  }

  function saveSets() {
    try {
      localStorage.setItem(STORAGE_KEYS.mastered, JSON.stringify([...state.mastered]));
      localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify([...state.bookmarks]));
    } catch (e) {}
  }

  function getAllTopics() {
    const out = [];
    window.BIO_UNITS.forEach((unit) => {
      unit.chapters.forEach((ch) => {
        ch.topics.forEach((tp) => out.push({ unit, ch, tp }));
      });
    });
    return out;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    try { localStorage.setItem(STORAGE_KEYS.theme, state.theme); } catch (e) {}
  }

  function applyLang() {
    document.documentElement.setAttribute("data-lang", state.lang);
    document.documentElement.setAttribute("lang", state.lang === "zh" ? "zh-Hant" : "en");
    try { localStorage.setItem(STORAGE_KEYS.lang, state.lang); } catch (e) {}

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.setLang === state.lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (window.BIO_META.ui[k]) el.textContent = uiText(k);
    });

    const searchInput = document.getElementById("globalSearch");
    if (searchInput) {
      searchInput.placeholder = state.lang === "zh"
        ? window.BIO_META.ui.searchPlaceholder.zh
        : window.BIO_META.ui.searchPlaceholder.en;
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
    const vCountEl = document.getElementById("vocabMasteryCount");

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (countEl) countEl.textContent = `${done} / ${total}`;
    if (bmBtn) {
      const base = state.lang === "zh" ? "★ 查看收藏" : "★ Bookmarks";
      bmBtn.textContent = `${base} (${state.bookmarks.size})`;
    }
    if (vCountEl && window.BIO_VOCAB_MODULE) {
      vCountEl.textContent = `${window.BIO_VOCAB_MODULE.getMasteredCount()} / ${window.BIO_VOCAB.length}`;
    }
  }

  window.BIO_APP_HELPERS = { bi, uiText, updateProgressUI };

  /* ========================================================================
     Sidebar Navigation
     ======================================================================== */
  function renderSidebar() {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;

    const catalog = window.BIO_META.unitCatalog;
    let html = "";

    if (state.view === "diagrams") {
      html += `<div class="sb-group"><div class="sb-group-title">${bi({ en: "Diagrams by Unit", zh: "按單元瀏覽圖解" }, true)}</div>`;
      html += `<button class="sb-item ${state.diagramUnit === "all" ? "active" : ""}" data-sb-dunit="all">
        <span>${bi({ en: "All 17 Core Diagrams", zh: "全部 17 幅圖解" }, true)}</span>
        <span class="sb-badge">${window.BIO_DIAGRAMS_DATA.length}</span>
      </button>`;
      catalog.forEach((u) => {
        const cnt = window.BIO_DIAGRAMS_DATA.filter((d) => d.unit === u.id).length;
        html += `<button class="sb-item ${state.diagramUnit === u.id ? "active" : ""}" data-sb-dunit="${u.id}">
          <span><span class="pill-dot" style="display:inline-block;margin-right:6px;background:${u.color}"></span>${state.lang === "zh" ? u.shortZh : u.shortEn}</span>
          <span class="sb-badge">${cnt}</span>
        </button>`;
      });
      html += `</div>`;
    } else {
      const groups = [
        { title: { en: "Paper 1 · Compulsory (U1–U5)", zh: "試卷一 · 必修部分 (U1–U5)" }, paper: "compulsory" },
        { title: { en: "Paper 2 · Electives (E1–E4)", zh: "試卷二 · 選修部分 (E1–E4)" }, paper: "elective" }
      ];

      groups.forEach((g) => {
        const unitsInGroup = window.BIO_UNITS.filter((u) => u.paper === g.paper);
        html += `<div class="sb-group"><div class="sb-group-title">${bi(g.title, true)}</div>`;
        unitsInGroup.forEach((u) => {
          const tCount = u.chapters.reduce((s, c) => s + c.topics.length, 0);
          const dCount = u.chapters.reduce((s, c) => s + c.topics.filter((t) => state.mastered.has(t.id)).length, 0);
          const isActive = (state.view === "compulsory" && state.activeCoreUnit === u.id)
            || (state.view === "electives" && state.activeElecUnit === u.id);
          const metaU = catalog.find((c) => c.id === u.id);

          html += `<button class="sb-item ${isActive ? "active" : ""}" data-sb-unit="${u.id}">
            <span><span class="pill-dot" style="display:inline-block;margin-right:6px;background:${u.color}"></span>${state.lang === "zh" ? metaU.shortZh : metaU.shortEn}</span>
            <span class="sb-badge">${dCount}/${tCount}</span>
          </button>`;

          if (isActive) {
            u.chapters.forEach((ch) => {
              ch.topics.forEach((tp) => {
                const mark = state.mastered.has(tp.id) ? "✓ " : "";
                html += `<button class="sb-item sb-sub" data-sb-topic="${tp.id}">
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mark}${tp.code} ${state.lang === "zh" ? tp.title.zh : tp.title.en}</span>
                </button>`;
              });
            });
          }
        });
        html += `</div>`;
      });
    }

    nav.innerHTML = html;

    nav.querySelectorAll("[data-sb-unit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const uid = btn.dataset.sbUnit;
        state.bookmarksOnly = false;
        const unit = window.BIO_UNITS.find((u) => u.id === uid);
        if (unit && unit.paper === "elective") {
          state.activeElecUnit = uid;
          setView("electives");
        } else {
          state.activeCoreUnit = uid;
          setView("compulsory");
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

    nav.querySelectorAll("[data-sb-dunit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.diagramUnit = btn.dataset.sbDunit;
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
    const ov = window.BIO_META.overview;
    const allTopics = getAllTopics();

    container.innerHTML = `
      <section class="hero-card">
        <div class="hero-kicker">🧬 2027 HKDSE Biology · EMI Primary · Compulsory (U1–U5) + All 4 Electives (E1–E4)</div>
        <h1 class="hero-title">${bi(ov.heroTitle)}</h1>
        <div class="hero-desc">${bi(ov.heroDesc)}</div>
        <div class="hero-actions">
          <button class="btn btn-primary" data-go-view="compulsory">${bi({ en: "Study Paper 1 Compulsory →", zh: "溫習卷一必修 →" }, true)}</button>
          <button class="btn btn-elec" data-go-view="electives">${bi({ en: "Paper 2 Electives (E1–E4) →", zh: "卷二選修 E1–E4 →" }, true)}</button>
          <button class="btn btn-vocab" data-go-view="vocab">🔤 ${bi({ en: "Unit Vocabulary Trainer →", zh: "按單元專有名詞庫 →" }, true)}</button>
          <button class="btn btn-diag" data-go-view="diagrams">🔬 ${bi({ en: "17 Core Diagrams →", zh: "17 幅生物圖解 →" }, true)}</button>
          <button class="btn btn-secondary" data-go-view="quiz">📝 ${bi({ en: "Practice Quiz →", zh: "模擬測驗 →" }, true)}</button>
        </div>
      </section>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-num" style="color:var(--core)">5 + 4</div>
          <div class="stat-label">${bi({ en: "5 Compulsory Units (Ch 1–30) + All 4 Electives (E1–E4)", zh: "5 大必修單元（第 1–30 章）＋ 全部 4 選修" }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--elec)">${allTopics.length}</div>
          <div class="stat-label">${bi({ en: "In-Depth Textbook Knowledge Modules", zh: "詳盡雙語核心知識點模塊" }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--vocab)">${window.BIO_VOCAB.length}</div>
          <div class="stat-label">${bi({ en: "Unit-Classified EMI Vocab Terms + 12 Confusing Pairs", zh: "按單元專有名詞 ＋ 12 組易混淆詞" }, true)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-num" style="color:var(--diag)">${window.BIO_DIAGRAMS_DATA.length} + ${window.BIO_QUIZZES.length}</div>
          <div class="stat-label">${bi({ en: "Bilingual SVG Diagrams & Exam MCQs", zh: "雙語高清 SVG 圖解 ＋ 實戰選擇題" }, true)}</div>
        </div>
      </div>

      <!-- Quick Directory: All 9 Units -->
      <section class="section-card">
        <h2>📚 ${bi({ en: "Quick Syllabus Directory (Compulsory U1–U5 & Electives E1–E4)", zh: "全課程單元快速直達（必修 U1–U5 ＆ 選修 E1–E4）" }, true)}</h2>
        <div class="units-grid">
          ${window.BIO_UNITS.map((u) => {
            const tCnt = u.chapters.reduce((s, c) => s + c.topics.length, 0);
            const vCnt = window.BIO_VOCAB.filter((v) => v.unit === u.id).length;
            const dCnt = window.BIO_DIAGRAMS_DATA.filter((d) => d.unit === u.id).length;
            return `
              <button class="unit-card" style="border-top-color:${u.color}" data-open-unit="${u.id}">
                <div class="unit-card-top">
                  <span class="unit-tag" style="background:${u.color}">${u.code}</span>
                  <span style="font-size:0.73rem; color:var(--text-muted); font-weight:700;">${u.bookRef}</span>
                </div>
                <div class="unit-card-title">${bi(u.title, true)}</div>
                <div class="unit-card-desc">${bi(u.subtitle, true)}</div>
                <div class="unit-card-meta">
                  <span>${tCnt} ${bi({ en: "modules", zh: "知識點" }, true)}</span>
                  <span>${vCnt} ${bi({ en: "vocab", zh: "名詞" }, true)} · ${dCnt} ${bi({ en: "figs", zh: "圖" }, true)}</span>
                </div>
              </button>
            `;
          }).join("")}
        </div>
      </section>

      <!-- Assessment Table -->
      <section class="section-card">
        <h2>📋 ${bi({ en: "2027 HKDSE Biology Assessment Framework", zh: "2027 HKDSE 生物科考評架構" }, true)}</h2>
        ${renderTable(ov.assessmentTable)}
      </section>

      <!-- HKEAA Command Words -->
      <section class="section-card">
        <h2>🔑 ${bi({ en: "HKEAA EMI Exam Command Words Guide", zh: "考評局英文指令動詞作答規範" }, true)}</h2>
        ${renderTable(ov.commandWordsTable)}
      </section>

      <!-- 5** EMI Strategies -->
      <section class="section-card">
        <h2>🎯 ${bi({ en: "2027 HKDSE Biology 5** EMI Study & Exam Strategies", zh: "2027 DSE 生物科英文部 5** 奪星攻略" }, true)}</h2>
        <ul class="kp-list">
          ${ov.examTips.map((tip) => `<li>${bi(tip)}</li>`).join("")}
        </ul>
      </section>
    `;

    container.querySelectorAll("[data-go-view]").forEach((b) => {
      b.addEventListener("click", () => setView(b.dataset.goView));
    });
    container.querySelectorAll("[data-open-unit]").forEach((b) => {
      b.addEventListener("click", () => {
        const uid = b.dataset.openUnit;
        const unit = window.BIO_UNITS.find((u) => u.id === uid);
        if (unit && unit.paper === "elective") {
          state.activeElecUnit = uid;
          setView("electives");
        } else {
          state.activeCoreUnit = uid;
          setView("compulsory");
        }
      });
    });
  }

  /* ========================================================================
     View 2 & 3: Compulsory / Electives Unit Notes
     ======================================================================== */
  function renderUnitView(container, paper) {
    if (state.bookmarksOnly) {
      renderBookmarksView(container);
      return;
    }

    const units = window.BIO_UNITS.filter((u) => u.paper === paper);
    const activeId = paper === "elective" ? state.activeElecUnit : state.activeCoreUnit;
    const unit = units.find((u) => u.id === activeId) || units[0];
    const vCnt = window.BIO_VOCAB.filter((v) => v.unit === unit.id).length;
    const dCnt = window.BIO_DIAGRAMS_DATA.filter((d) => d.unit === unit.id).length;

    container.innerHTML = `
      <div class="unit-pills">
        ${units.map((u) => {
          const metaU = window.BIO_META.unitCatalog.find((c) => c.id === u.id);
          return `<button class="pill-btn ${u.id === unit.id ? "active" : ""}" data-switch-unit="${u.id}">
            <span class="pill-dot" style="background:${u.color}"></span>
            ${state.lang === "zh" ? metaU.shortZh : metaU.shortEn}
          </button>`;
        }).join("")}
      </div>

      <div class="page-head">
        <div>
          <span class="unit-tag" style="background:${unit.color}">${unit.code} · ${unit.bookRef} · ${paper === "compulsory" ? "Paper 1 Compulsory" : "Paper 2 Elective"}</span>
          <h1>${bi(unit.title)}</h1>
          <p class="page-head-sub">${bi(unit.subtitle)}</p>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-vocab" data-jump-vunit="${unit.id}">🔤 ${bi({ en: `Unit Vocab (${vCnt})`, zh: `本單元專有名詞 (${vCnt})` }, true)}</button>
          ${dCnt ? `<button class="btn btn-diag" data-jump-dunit="${unit.id}">🔬 ${bi({ en: `Diagrams (${dCnt})`, zh: `圖解 (${dCnt})` }, true)}</button>` : ""}
          <button class="btn btn-secondary" id="expandAllBtn">${uiText("expandAll")}</button>
          <button class="btn btn-secondary" id="collapseAllBtn">${uiText("collapseAll")}</button>
        </div>
      </div>

      ${unit.chapters.map((ch) => `
        <section class="chapter-block" id="${ch.id}">
          <div class="chapter-banner" style="border-left-color:${unit.color}">
            <h2>${ch.code} · ${bi(ch.title, true)}</h2>
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">${ch.topics.length} ${bi({ en: "topics", zh: "課題" }, true)}</span>
          </div>
          ${ch.topics.map((tp) => renderTopicCard(tp, unit)).join("")}
        </section>
      `).join("")}
    `;

    bindUnitEvents(container, paper);
  }

  function renderBookmarksView(container) {
    const saved = getAllTopics().filter(({ tp }) => state.bookmarks.has(tp.id));
    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker">★ ${bi({ en: "Bookmarked Knowledge Points", zh: "已收藏重點知識" }, true)}</span>
          <h1>${bi({ en: "My Bookmarked Biology Topics", zh: "我的生物科重點收藏清單" })}</h1>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-primary" id="exitBookmarksBtn">← ${bi({ en: "Back to Notes", zh: "返回單元筆記" }, true)}</button>
        </div>
      </div>
      ${saved.length === 0
        ? `<div class="section-card" style="text-align:center; padding:2.4rem; color:var(--text-muted);">${bi({ en: "No bookmarked topics yet. Click '☆ Bookmark' on any topic card to save it here!", zh: "尚未收藏任何知識點。點擊任意知識點右上角的「☆ 收藏」即可加入！" })}</div>`
        : saved.map(({ tp, unit }) => renderTopicCard(tp, unit)).join("")}
    `;
    const exitBtn = container.querySelector("#exitBookmarksBtn");
    if (exitBtn) exitBtn.addEventListener("click", () => { state.bookmarksOnly = false; renderMain(); });
    bindUnitEvents(container, "compulsory");
  }

  function renderTopicCard(tp, unit) {
    const isM = state.mastered.has(tp.id);
    const isB = state.bookmarks.has(tp.id);
    const isHi = state.highlightId === `topic-${tp.id}`;
    const linkedDiagrams = (tp.diagramIds || [])
      .map((did) => window.BIO_DIAGRAMS_DATA.find((d) => d.id === did))
      .filter(Boolean);

    return `
      <article class="topic-card ${isM ? "is-mastered" : ""} ${isHi ? "is-highlighted" : ""}" id="topic-${tp.id}">
        <div class="topic-head" data-toggle-topic="${tp.id}">
          <div class="topic-title-wrap">
            <div class="topic-code-row">
              <span class="topic-code" style="color:${unit.color}; background:var(--bg-subtle)">${unit.code} · ${tp.code}</span>
              ${tp.highYield ? `<span class="tag-high">★ ${bi({ en: "High-Yield DSE", zh: "DSE 高頻必考" }, true)}</span>` : ""}
            </div>
            <h3 class="topic-title">${bi(tp.title)}</h3>
          </div>
          <div class="topic-actions">
            <button class="mini-btn ${isM ? "active-master" : ""}" data-master-id="${tp.id}">${isM ? uiText("mastered") : uiText("markMastered")}</button>
            <button class="mini-btn ${isB ? "active-bm" : ""}" data-bm-id="${tp.id}">${isB ? uiText("bookmarked") : uiText("bookmark")}</button>
          </div>
        </div>

        <div class="topic-body">
          <div class="topic-summary">${bi(tp.summary)}</div>

          ${tp.eq ? `<div class="eq-box">${rich(tp.eq)}</div>` : ""}

          ${tp.points && tp.points.length ? `
            <ul class="kp-list">
              ${tp.points.map((pt) => `<li>${bi(pt)}</li>`).join("")}
            </ul>
          ` : ""}

          ${tp.table ? renderTable(tp.table) : ""}

          ${linkedDiagrams.map((d) => `
            <div class="inline-diagram-box">
              <div class="inline-diagram-head">
                <span>🔬 ${bi(d.title, true)}</span>
                <button class="mini-btn" data-zoom-diag="${d.id}">${bi({ en: "Zoom 🔍", zh: "放大檢視 🔍" }, true)}</button>
              </div>
              <div class="inline-diagram-svg" data-zoom-diag="${d.id}">
                ${window.BIO_DIAGRAMS.render(d.id, state.lang)}
              </div>
              <div class="inline-diagram-cap">${bi(d.analysis)}</div>
            </div>
          `).join("")}

          ${tp.tip ? `<div class="callout callout-tip"><div class="callout-title">💡 ${bi({ en: "5** Study Tip", zh: "奪星要訣" }, true)}</div>${bi(tp.tip)}</div>` : ""}
          ${tp.trap ? `<div class="callout callout-trap"><div class="callout-title">⚠️ ${bi({ en: "Common HKDSE Trap", zh: "DSE 常見陷阱" }, true)}</div>${bi(tp.trap)}</div>` : ""}
          ${tp.exam ? `<div class="callout callout-exam"><div class="callout-title">✅ ${bi({ en: "HKEAA Marking Scheme Keywords", zh: "考評局評分關鍵詞" }, true)}</div>${bi(tp.exam)}</div>` : ""}
        </div>
      </article>
    `;
  }

  function bindUnitEvents(container, paper) {
    container.querySelectorAll("[data-switch-unit]").forEach((b) => {
      b.addEventListener("click", () => {
        if (paper === "elective") state.activeElecUnit = b.dataset.switchUnit;
        else state.activeCoreUnit = b.dataset.switchUnit;
        renderMain();
        renderSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    container.querySelectorAll("[data-jump-vunit]").forEach((b) => {
      b.addEventListener("click", () => {
        window.BIO_VOCAB_MODULE.jumpToTerm(null, b.dataset.jumpVunit);
        setView("vocab");
      });
    });

    container.querySelectorAll("[data-jump-dunit]").forEach((b) => {
      b.addEventListener("click", () => {
        state.diagramUnit = b.dataset.jumpDunit;
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

    // Click to reveal blurred keywords in active recall mode
    container.querySelectorAll(".topic-body strong, .topic-body b").forEach((el) => {
      el.addEventListener("click", () => el.classList.toggle("revealed"));
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

    container.querySelectorAll("[data-zoom-diag]").forEach((el) => {
      el.addEventListener("click", () => openDiagramModal(el.dataset.zoomDiag));
    });

    const exp = container.querySelector("#expandAllBtn");
    const col = container.querySelector("#collapseAllBtn");
    if (exp) exp.addEventListener("click", () => container.querySelectorAll(".topic-card").forEach((c) => c.classList.remove("collapsed")));
    if (col) col.addEventListener("click", () => container.querySelectorAll(".topic-card").forEach((c) => c.classList.add("collapsed")));
  }

  /* ========================================================================
     View 5: Core Diagrams Gallery
     ======================================================================== */
  function renderDiagramsView(container) {
    const units = window.BIO_META.unitCatalog;
    const list = state.diagramUnit === "all"
      ? window.BIO_DIAGRAMS_DATA
      : window.BIO_DIAGRAMS_DATA.filter((d) => d.unit === state.diagramUnit);

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker" style="color:var(--diag);background:var(--diag-soft);border-color:var(--diag-border)">
            🔬 ${bi({ en: "17 Bilingual Vector (SVG) Essential Diagrams", zh: "17 幅雙語矢量（SVG）核心生物圖解" }, true)}
          </span>
          <h1>${bi({ en: "HKDSE Biology Core Diagrams, Processes & Graphs", zh: "HKDSE 生物科核心構造圖、過程與曲線圖解大全" })}</h1>
          <p class="page-head-sub">${bi({ en: "All diagram labels update dynamically with the EN / EN+繁中 / 繁中 toggle! Click any diagram to zoom full-screen.", zh: "所有圖解標籤隨頂部中英切換即時變換！點擊任意圖解可開啟全螢幕高清放大檢視。" })}</p>
        </div>
      </div>

      <div class="unit-pills">
        <button class="pill-btn ${state.diagramUnit === "all" ? "active" : ""}" data-dunit="all">${bi({ en: "All Units", zh: "全部單元" }, true)} (${window.BIO_DIAGRAMS_DATA.length})</button>
        ${units.map((u) => {
          const cnt = window.BIO_DIAGRAMS_DATA.filter((d) => d.unit === u.id).length;
          return `<button class="pill-btn ${state.diagramUnit === u.id ? "active" : ""}" data-dunit="${u.id}">
            <span class="pill-dot" style="background:${u.color}"></span>${u.code} (${cnt})
          </button>`;
        }).join("")}
      </div>

      <div class="diagrams-grid">
        ${list.map((d) => {
          const u = units.find((c) => c.id === d.unit);
          return `
            <article class="diagram-card" id="diagcard-${d.id}">
              <div class="diagram-card-head">
                <div>
                  <span class="unit-tag" style="background:${u ? u.color : "var(--diag)"}">${u ? u.code : d.unit}</span>
                  <h3 style="margin:0.35rem 0 0; font-size:1rem;">${bi(d.title, true)}</h3>
                </div>
                <button class="mini-btn" data-zoom-diag="${d.id}">🔍 Zoom</button>
              </div>
              <div class="diagram-svg-wrap" data-zoom-diag="${d.id}">
                ${window.BIO_DIAGRAMS.render(d.id, state.lang)}
              </div>
              <div class="diagram-card-body">
                <div>${bi(d.analysis)}</div>
                <div class="diagram-exam-box"><strong>🎯 ${bi({ en: "Exam Focus:", zh: "考點提示：" }, true)}</strong> ${bi(d.exam, true)}</div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;

    container.querySelectorAll("[data-dunit]").forEach((b) => {
      b.addEventListener("click", () => {
        state.diagramUnit = b.dataset.dunit;
        renderMain();
        renderSidebar();
      });
    });

    container.querySelectorAll("[data-zoom-diag]").forEach((el) => {
      el.addEventListener("click", () => openDiagramModal(el.dataset.zoomDiag));
    });
  }

  /* ========================================================================
     Shared Helpers: Table, Lightbox Modal, Search, Navigation
     ======================================================================== */
  function renderTable(tbl) {
    if (!tbl) return "";
    return `
      <div class="table-wrap">
        <table class="bio-table">
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
    const d = window.BIO_DIAGRAMS_DATA.find((x) => x.id === diagId);
    if (!d) return;
    const modal = document.getElementById("diagramModal");
    document.getElementById("modalTitle").innerHTML = `<h3 style="margin:0; font-size:1.08rem;">${bi(d.title, true)}</h3>`;
    document.getElementById("modalBody").innerHTML = `
      ${window.BIO_DIAGRAMS.render(d.id, state.lang)}
      <div style="margin-top:0.9rem; font-size:0.92rem;">${bi(d.analysis)}</div>
      <div class="diagram-exam-box" style="margin-top:0.65rem;"><strong>🎯 ${bi({ en: "Exam Focus:", zh: "考點提示：" }, true)}</strong> ${bi(d.exam, true)}</div>
    `;
    modal.hidden = false;
  }

  function closeDiagramModal() {
    const modal = document.getElementById("diagramModal");
    if (modal) modal.hidden = true;
  }

  function scrollToElement(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setView(nextView) {
    state.view = nextView;
    state.bookmarksOnly = false;
    document.querySelectorAll(".tab-btn").forEach((t) => {
      t.classList.toggle("active", t.dataset.view === nextView);
    });
    renderMain();
    renderSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderMain() {
    const main = document.getElementById("mainContent");
    if (!main) return;
    if (state.view === "overview") renderOverview(main);
    else if (state.view === "compulsory") renderUnitView(main, "compulsory");
    else if (state.view === "electives") renderUnitView(main, "elective");
    else if (state.view === "vocab") window.BIO_VOCAB_MODULE.render(main);
    else if (state.view === "diagrams") renderDiagramsView(main);
    else if (state.view === "quiz") window.BIO_QUIZ.render(main);
  }

  /* ========================================================================
     Global Instant Search (Topics + Vocabulary + Diagrams)
     ======================================================================== */
  function setupSearch() {
    const input = document.getElementById("globalSearch");
    const box = document.getElementById("searchResults");
    if (!input || !box) return;

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { box.hidden = true; return; }

      const hits = [];
      // 1. Vocabulary terms
      window.BIO_VOCAB.forEach((v) => {
        if (`${v.en} ${v.zh} ${v.defEn} ${v.defZh}`.toLowerCase().includes(q)) {
          hits.push({
            kind: "vocab",
            badge: `Vocab · ${v.unit.toUpperCase()}`,
            title: `${v.en} — ${v.zh}`,
            sub: v.defEn,
            action: () => {
              window.BIO_VOCAB_MODULE.jumpToTerm(v.id, v.unit);
              setView("vocab");
              setTimeout(() => scrollToElement(`vocab-${v.id}`), 80);
            }
          });
        }
      });

      // 2. Syllabus Topics
      getAllTopics().forEach(({ unit, tp }) => {
        const hay = `${tp.title.en} ${tp.title.zh} ${tp.summary.en} ${tp.summary.zh} ${(tp.points || []).map((p) => p.en + " " + p.zh).join(" ")}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            kind: "topic",
            badge: `${unit.code} · ${tp.code}`,
            title: `${tp.title.en} (${tp.title.zh})`,
            sub: tp.summary.en.replace(/\*\*/g, "").slice(0, 120) + "...",
            action: () => {
              state.highlightId = `topic-${tp.id}`;
              if (unit.paper === "elective") {
                state.activeElecUnit = unit.id;
                setView("electives");
              } else {
                state.activeCoreUnit = unit.id;
                setView("compulsory");
              }
              setTimeout(() => scrollToElement(`topic-${tp.id}`), 80);
            }
          });
        }
      });

      // 3. Diagrams
      window.BIO_DIAGRAMS_DATA.forEach((d) => {
        if (`${d.title.en} ${d.title.zh} ${d.analysis.en}`.toLowerCase().includes(q)) {
          hits.push({
            kind: "diag",
            badge: `Diagram · ${d.unit.toUpperCase()}`,
            title: `${d.title.en} (${d.title.zh})`,
            sub: d.analysis.en.replace(/\*\*/g, "").slice(0, 110) + "...",
            action: () => {
              state.diagramUnit = d.unit;
              setView("diagrams");
              setTimeout(() => scrollToElement(`diagcard-${d.id}`), 80);
            }
          });
        }
      });

      const shown = hits.slice(0, 16);
      if (!shown.length) {
        box.innerHTML = `<div style="padding:0.8rem; text-align:center; font-size:0.85rem; color:var(--text-muted);">No matching topics or vocabulary terms.</div>`;
      } else {
        box.innerHTML = shown.map((h, i) => `
          <button class="search-item" data-sidx="${i}">
            <div class="search-item-head">
              <span class="search-kind ${h.kind === "vocab" ? "kind-vocab" : h.kind === "diag" ? "kind-diag" : ""}">${h.badge}</span>
              <span class="search-item-title">${window.BIO_TEXT.escapeHtml(h.title)}</span>
            </div>
            <span class="search-item-sub">${window.BIO_TEXT.escapeHtml(h.sub)}</span>
          </button>
        `).join("");
        box.querySelectorAll("[data-sidx]").forEach((b) => {
          b.addEventListener("click", () => {
            shown[Number(b.dataset.sidx)].action();
            box.hidden = true;
            input.value = "";
          });
        });
      }
      box.hidden = false;
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#searchWrap")) box.hidden = true;
    });
  }

  /* ========================================================================
     Mobile Sidebar & Global Controls / Keyboard Shortcuts
     ======================================================================== */
  function openMobileSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sidebarBackdrop").classList.add("open");
  }
  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarBackdrop").classList.remove("open");
  }

  function init() {
    applyTheme();
    applyLang();

    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    document.getElementById("brandLink").addEventListener("click", (e) => {
      e.preventDefault();
      setView("overview");
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.setLang;
        applyLang();
        renderMain();
        renderSidebar();
      });
    });

    document.getElementById("themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });

    const recallBtn = document.getElementById("recallToggle");
    recallBtn.addEventListener("click", () => {
      state.recallMode = !state.recallMode;
      document.body.classList.toggle("recall-mode", state.recallMode);
      recallBtn.classList.toggle("recall-active", state.recallMode);
    });

    document.getElementById("printBtn").addEventListener("click", () => window.print());

    document.getElementById("filterBookmarksBtn").addEventListener("click", () => {
      state.bookmarksOnly = true;
      if (state.view !== "compulsory" && state.view !== "electives") {
        state.view = "compulsory";
        document.querySelectorAll(".tab-btn").forEach((t) => t.classList.toggle("active", t.dataset.view === "compulsory"));
      }
      renderMain();
      closeMobileSidebar();
    });

    document.getElementById("mobileMenuBtn").addEventListener("click", openMobileSidebar);
    document.getElementById("sidebarBackdrop").addEventListener("click", closeMobileSidebar);
    document.getElementById("closeModalBtn").addEventListener("click", closeDiagramModal);
    document.getElementById("diagramModal").addEventListener("click", (e) => {
      if (e.target.id === "diagramModal") closeDiagramModal();
    });

    const backTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 360));
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Keyboard shortcuts: / search, L cycle language, R toggle recall blur, Esc close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDiagramModal();
        const box = document.getElementById("searchResults");
        if (box) box.hidden = true;
        return;
      }
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.key === "/") {
        e.preventDefault();
        const inp = document.getElementById("globalSearch");
        if (inp) inp.focus();
      } else if (e.key.toLowerCase() === "l") {
        const order = ["en", "both", "zh"];
        state.lang = order[(order.indexOf(state.lang) + 1) % order.length];
        applyLang();
        renderMain();
        renderSidebar();
      } else if (e.key.toLowerCase() === "r") {
        state.recallMode = !state.recallMode;
        document.body.classList.toggle("recall-mode", state.recallMode);
        recallBtn.classList.toggle("recall-active", state.recallMode);
      }
    });

    setupSearch();
    renderMain();
    renderSidebar();
    updateProgressUI();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
