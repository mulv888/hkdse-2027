/* ==========================================================================
   2027 HKDSE ICT Revision Hub — Core Application Controller
   Handles: Bilingual ZH / BOTH / EN rendering, Sidebar TOC, Global Search,
            Mastery Progress & Bookmarks (localStorage), Dark Mode, Syntax Highlight
   ========================================================================== */

(function () {
  const STORAGE_KEYS = {
    lang: "dse_ict_2027_lang",
    theme: "dse_ict_2027_theme",
    mastered: "dse_ict_2027_mastered",
    bookmarks: "dse_ict_2027_bookmarks"
  };

  const state = {
    lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh", // "zh" | "both" | "en"
    theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
    view: "overview", // overview | paper1 | electiveA | electiveC | labs | quiz | cheatsheets | bookmarks
    activeModuleId: "p1-a",
    mastered: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.mastered) || "[]")),
    bookmarks: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || "[]")),
    collapsedTopics: new Set()
  };

  // ---------- Safe HTML Escaping & Lightweight Inline Markdown ----------
  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmtInline(str) {
    if (!str) return "";
    let s = esc(str);
    // Support safe underline tags <u>...</u> if author used them for PK
    s = s.replace(/&lt;u&gt;(.*?)&lt;\/u&gt;/g, "<u>$1</u>");
    // Inline code `...`
    s = s.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
    // Bold **...**
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // Line breaks
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  // Bilingual renderer: supports "zh" | "en" | "both"
  function bi(obj, inline = false) {
    if (!obj) return "";
    if (typeof obj === "string") return fmtInline(obj);
    const zh = obj.zh || obj.en || "";
    const en = obj.en || obj.zh || "";
    if (state.lang === "zh") return fmtInline(zh);
    if (state.lang === "en") return fmtInline(en);
    if (zh === en) return fmtInline(zh);
    if (inline) {
      return `${fmtInline(zh)}<span class="bi-inline-sep">/</span><span style="opacity:0.78;font-weight:500;">${fmtInline(en)}</span>`;
    }
    return `<span>${fmtInline(zh)}</span><span class="bi-en-sub">${fmtInline(en)}</span>`;
  }

  function plainText(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return `${obj.zh || ""} ${obj.en || ""}`;
  }

  // ---------- Single-Pass Safe Syntax Highlighter (Never Corrupts HTML Tags!) ----------
  function highlightCode(code, lang) {
    const src = String(code || "");
    let regex;
    if (lang === "python") {
      regex = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(def|return|if|elif|else|for|while|in|not|and|or|break|continue|pass|import|from|as|with|try|except|class|global|True|False|None)\b|\b(print|input|int|float|str|bool|len|range|round|ord|chr|open|sum|max|min|sorted|list)\b(?=\()/g;
    } else if (lang === "sql") {
      regex = /(--[^\n]*)|('(?:''|[^'\n])*')|\b(SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY|INNER JOIN|LEFT OUTER JOIN|LEFT JOIN|RIGHT JOIN|JOIN|ON|AS|AND|OR|NOT|IN|IS|NULL|LIKE|BETWEEN|DISTINCT|ASC|DESC|UNION ALL|UNION|EXISTS|CREATE TABLE|ALTER TABLE|DROP TABLE|INSERT INTO|VALUES|UPDATE|SET|DELETE|PRIMARY KEY|FOREIGN KEY|REFERENCES|CHECK|DEFAULT|VARCHAR|CHAR|INT)\b|\b(COUNT|SUM|AVG|MAX|MIN|ROUND|UPPER|LOWER|YEAR|MONTH|LENGTH)\b(?=\()/g;
    } else if (lang === "spreadsheet") {
      regex = /(\/\/[^\n]*)|("(?:[^"\n]*)")|((?!))|\b(VLOOKUP|HLOOKUP|IF|AND|OR|NOT|SUMIF|COUNTIF|COUNT|COUNTA|COUNTBLANK|SUM|AVERAGE|RANK|LEFT|RIGHT|MID|FIND|LEN|ROUND|INT|TRIM|TRUE|FALSE)\b/g;
    } else if (lang === "html" || lang === "css") {
      regex = /(<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/)|("(?:[^"\n]*)")|(<\/?[a-zA-Z0-9!-]+)|((?!))/g;
    } else {
      return esc(src);
    }

    let out = "";
    let last = 0;
    let m;
    while ((m = regex.exec(src)) !== null) {
      if (m.index > last) out += esc(src.slice(last, m.index));
      const full = m[0];
      if (!full) { regex.lastIndex++; continue; }
      if (m[1]) out += `<span class="tok-cmt">${esc(m[1])}</span>`;
      else if (m[2]) out += `<span class="tok-str">${esc(m[2])}</span>`;
      else if (m[3]) out += `<span class="tok-kw">${esc(m[3])}</span>`;
      else if (m[4]) out += `<span class="tok-fn">${esc(m[4])}</span>`;
      else out += esc(full);
      last = regex.lastIndex;
    }
    if (last < src.length) out += esc(src.slice(last));
    return out;
  }

  // ---------- Helpers for All Topics ----------
  function getAllTopics() {
    const res = [];
    (window.ICT_MODULES || []).forEach(mod => {
      mod.topics.forEach(t => res.push({ mod, topic: t }));
    });
    return res;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEYS.lang, state.lang);
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    localStorage.setItem(STORAGE_KEYS.mastered, JSON.stringify([...state.mastered]));
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify([...state.bookmarks]));
  }

  // ---------- Update Chrome / Static UI Labels ----------
  function updateChrome() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.lang = state.lang;

    const ui = window.ICT_META.ui;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (ui[key]) {
        if (key === "viewBookmarks") {
          el.textContent = `${state.lang === "en" ? ui[key].en : ui[key].zh} (${state.bookmarks.size})`;
        } else {
          el.textContent = state.lang === "en" ? ui[key].en : ui[key].zh;
        }
      }
    });

    const searchInp = document.getElementById("globalSearch");
    if (searchInp) {
      searchInp.placeholder = state.lang === "en" ? ui.searchPlaceholder.en : ui.searchPlaceholder.zh;
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.setLang === state.lang);
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === state.view);
    });

    // Update Mastery Progress
    const allTopics = getAllTopics();
    const total = allTopics.length;
    const done = allTopics.filter(x => state.mastered.has(x.topic.id)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("masteryPct").textContent = `${pct}%`;
    document.getElementById("masteryFill").style.width = `${pct}%`;
    document.getElementById("masteryCount").textContent = `${done} / ${total}`;
  }

  // ---------- Render Sidebar Navigation ----------
  function renderSidebar() {
    const nav = document.getElementById("sidebarNav");
    const groups = [
      { paper: "paper1", label: { zh: "試卷一 · 必修部分 (55%)", en: "Paper 1 · Core (55%)" }, cls: "mod-p1" },
      { paper: "electiveA", label: { zh: "試卷二 · 選修 A 數據庫", en: "Paper 2 · Elective A DB" }, cls: "mod-ea" },
      { paper: "electiveC", label: { zh: "試卷二 · 選修 C Python", en: "Paper 2 · Elective C Python" }, cls: "mod-ec" }
    ];

    nav.innerHTML = groups.map(g => {
      const mods = (window.ICT_MODULES || []).filter(m => m.paper === g.paper);
      return `
        <div class="side-group">
          <div class="side-group-title">${state.lang === "en" ? g.label.en : g.label.zh}</div>
          ${mods.map(mod => {
            const isActiveMod = (state.view === g.paper && state.activeModuleId === mod.id);
            const modDone = mod.topics.filter(t => state.mastered.has(t.id)).length;
            return `
              <button class="side-mod-btn ${g.cls} ${isActiveMod ? "active" : ""}" data-open-mod="${mod.id}" data-paper="${g.paper}">
                <span>${state.lang === "en" ? mod.title.en : mod.title.zh}</span>
                <span style="font-size:0.72rem;opacity:0.7;">${modDone}/${mod.topics.length}</span>
              </button>
              <ul class="side-topic-list">
                ${mod.topics.map(t => `
                  <li>
                    <button class="side-topic-btn" data-jump-mod="${mod.id}" data-jump-paper="${g.paper}" data-jump-topic="${t.id}">
                      <span><strong>${t.code}</strong> ${state.lang === "en" ? t.title.en : t.title.zh}</span>
                      <span class="side-check">${state.mastered.has(t.id) ? "✓" : state.bookmarks.has(t.id) ? "★" : ""}</span>
                    </button>
                  </li>
                `).join("")}
              </ul>
            `;
          }).join("")}
        </div>
      `;
    }).join("");

    nav.querySelectorAll("[data-open-mod]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.view = btn.dataset.paper;
        state.activeModuleId = btn.dataset.openMod;
        closeMobileDrawer();
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    nav.querySelectorAll("[data-jump-topic]").forEach(btn => {
      btn.addEventListener("click", () => {
        jumpToTopic(btn.dataset.jumpPaper, btn.dataset.jumpMod, btn.dataset.jumpTopic);
      });
    });
  }

  function jumpToTopic(paper, modId, topicId) {
    state.view = paper;
    state.activeModuleId = modId;
    state.collapsedTopics.delete(topicId);
    closeMobileDrawer();
    renderAll();
    requestAnimationFrame(() => {
      const el = document.getElementById(`topic-${topicId}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ---------- Render Rich Content Block ----------
  function renderBlock(b) {
    switch (b.type) {
      case "heading":
        return `<h3 class="block-heading">${bi(b.text)}</h3>`;
      case "text":
        return `<p class="block-text">${bi(b.text)}</p>`;
      case "list": {
        const tag = b.ordered ? "ol" : "ul";
        return `
          <div class="block-list-wrap">
            ${b.title ? `<div class="block-sublabel">${bi(b.title)}</div>` : ""}
            <${tag} class="block-list">
              ${b.items.map(it => `<li>${bi(it)}</li>`).join("")}
            </${tag}>
          </div>
        `;
      }
      case "keyterms":
        return `
          ${b.title ? `<div class="block-sublabel">${bi(b.title)}</div>` : ""}
          <div class="keyterms-grid">
            ${b.items.map(it => `
              <div class="keyterm-card">
                <div class="keyterm-term">${bi(it.term)}</div>
                <div class="keyterm-def">${bi(it.def)}</div>
              </div>
            `).join("")}
          </div>
        `;
      case "table":
        return `
          ${b.title ? `<div class="block-sublabel">${bi(b.title)}</div>` : ""}
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr>${b.headers.map(h => `<th>${bi(h)}</th>`).join("")}</tr></thead>
              <tbody>
                ${b.rows.map(row => `<tr>${row.map(cell => `<td>${bi(cell)}</td>`).join("")}</tr>`).join("")}
              </tbody>
            </table>
          </div>
        `;
      case "compare":
        return `
          ${b.title ? `<div class="block-sublabel">${bi(b.title)}</div>` : ""}
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>${bi({ zh: "比較項目", en: "Aspect" })}</th>
                  <th>${bi(b.leftTitle)}</th>
                  <th>${bi(b.rightTitle)}</th>
                </tr>
              </thead>
              <tbody>
                ${b.rows.map(r => `
                  <tr>
                    <td><strong>${bi(r.aspect)}</strong></td>
                    <td>${bi(r.left)}</td>
                    <td>${bi(r.right)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      case "formula":
        return `
          <div class="formula-box">
            <div class="formula-title">${bi(b.title)}</div>
            <div class="formula-expr">${esc(b.formula).replace(/\n/g, "<br>")}</div>
            ${b.explain ? `<div class="formula-explain">${bi(b.explain)}</div>` : ""}
          </div>
        `;
      case "code": {
        const langCls = `lang-${b.lang || "python"}`;
        const copyTxt = state.lang === "en" ? window.ICT_META.ui.copy.en : window.ICT_META.ui.copy.zh;
        return `
          <div class="code-block">
            <div class="code-header">
              <div class="code-header-left">
                <span class="code-lang-badge ${langCls}">${esc(b.lang || "code")}</span>
                <span class="code-title">${bi(b.title, true)}</span>
              </div>
              <button class="copy-btn" data-copy-code="${esc(b.code)}">${copyTxt}</button>
            </div>
            <pre class="code-pre">${highlightCode(b.code, b.lang)}</pre>
            ${b.note ? `<div class="code-note">💡 ${bi(b.note)}</div>` : ""}
          </div>
        `;
      }
      case "callout": {
        const icons = { tip: "✅", trap: "⚠️", exam: "⭐", info: "ℹ️" };
        return `
          <div class="callout callout-${b.variant || "info"}">
            <div class="callout-title">${icons[b.variant] || "ℹ️"} ${bi(b.title)}</div>
            <div class="callout-body">${bi(b.text)}</div>
          </div>
        `;
      }
      case "example":
        return `
          <div class="example-box">
            <div class="example-head">📝 ${bi(b.title)}</div>
            <div class="example-body">
              <div class="example-prob">${bi(b.problem)}</div>
              ${b.code ? `<div class="code-block" style="margin:10px 0;"><pre class="code-pre">${highlightCode(b.code, b.lang || "python")}</pre></div>` : ""}
              <div class="example-sol"><strong>${bi({ zh: "標準解題步驟：", en: "Worked Solution:" }, true)}</strong><br>${bi(b.solution)}</div>
            </div>
          </div>
        `;
      case "diagram":
        return `
          <div class="diagram-box">
            <div class="block-sublabel">${bi(b.title)}</div>
            <pre class="diagram-pre">${esc(b.ascii)}</pre>
            ${b.caption ? `<div class="diagram-cap">${bi(b.caption)}</div>` : ""}
          </div>
        `;
      default:
        return "";
    }
  }

  // ---------- Render Topic Card ----------
  function renderTopicCard(mod, topic) {
    const isMastered = state.mastered.has(topic.id);
    const isBookmarked = state.bookmarks.has(topic.id);
    const isCollapsed = state.collapsedTopics.has(topic.id);
    const stars = "★".repeat(topic.importance || 2) + "☆".repeat(3 - (topic.importance || 2));
    const themeCls = mod.paper === "electiveA" ? "theme-ea" : mod.paper === "electiveC" ? "theme-ec" : "";
    const ui = window.ICT_META.ui;

    return `
      <article class="topic-card ${themeCls} ${isMastered ? "mastered" : ""}" id="topic-${topic.id}">
        <div class="topic-head">
          <div class="topic-head-left">
            <div class="topic-meta-row">
              <span class="topic-code">${esc(topic.code)}</span>
              <span class="importance-stars" title="DSE Exam Frequency">${stars}</span>
            </div>
            <h2 class="topic-title">${bi(topic.title)}</h2>
            <p class="topic-summary">${bi(topic.summary)}</p>
          </div>
          <div class="topic-actions">
            <button class="action-chip ${isMastered ? "is-mastered" : ""}" data-toggle-master="${topic.id}">
              ${isMastered ? (state.lang === "en" ? ui.mastered.en : ui.mastered.zh) : (state.lang === "en" ? ui.markMastered.en : ui.markMastered.zh)}
            </button>
            <button class="action-chip ${isBookmarked ? "is-bookmarked" : ""}" data-toggle-bm="${topic.id}">
              ${isBookmarked ? "★" : "☆"}
            </button>
            <button class="action-chip" data-toggle-collapse="${topic.id}">
              ${isCollapsed ? (state.lang === "en" ? ui.expand.en : ui.expand.zh) : (state.lang === "en" ? ui.collapse.en : ui.collapse.zh)}
            </button>
          </div>
        </div>
        <div class="topic-body ${isCollapsed ? "collapsed" : ""}">
          ${topic.blocks.map(renderBlock).join("")}
        </div>
      </article>
    `;
  }

  // ---------- Render Overview View ----------
  function renderOverview(main) {
    const ov = window.ICT_META.overview;
    const allTopics = getAllTopics();
    const dseTarget = new Date("2027-04-20T08:30:00+08:00");
    const daysLeft = Math.max(0, Math.ceil((dseTarget - new Date()) / (1000 * 60 * 60 * 24)));

    main.innerHTML = `
      <section class="hero-card">
        <div class="hero-pill-row">
          <span class="hero-pill">2027 HKDSE ICT</span>
          <span class="hero-pill python-pill">🐍 100% Python 3 · Zero C / Java</span>
          <span class="hero-pill">繁中 / English / 中英對照</span>
        </div>
        <h1 class="hero-title">${bi(ov.heroTitle)}</h1>
        <p class="hero-desc">${bi(ov.heroDesc)}</p>
        <div class="hero-stats">
          <div class="stat-box">
            <div class="stat-val">${daysLeft} ${bi({ zh: "日", en: "days" }, true)}</div>
            <div class="stat-lbl">${bi({ zh: "距 2027 DSE (預計 4 月)", en: "Until 2027 DSE (Est. Apr)" }, true)}</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">${allTopics.length}</div>
            <div class="stat-lbl">${bi({ zh: "詳盡核心知識單元", en: "In-Depth Syllabus Topics" }, true)}</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">5</div>
            <div class="stat-lbl">${bi({ zh: "互動計算/編程/SQL實驗室", en: "Interactive DSE Labs" }, true)}</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">${window.ICT_QUIZZES.length}</div>
            <div class="stat-lbl">${bi({ zh: "精選雙語模擬試題", en: "Bilingual DSE Quiz Qs" }, true)}</div>
          </div>
        </div>
      </section>

      <div class="grid-3">
        <div class="paper-card card-p1">
          <div>
            <span class="paper-tag tag-p1">Paper 1 · 55% · 2 Hours</span>
            <h3>${bi({ zh: "試卷一：必修部分 (單元 A–E)", en: "Paper 1: Compulsory Part (A–E)" })}</h3>
            <p>${bi({ zh: "資訊處理、電腦系統、互聯網與保安 (HTML/CSS)、計算思維與 Python 3 編程 (48課時重頭戲) 及 PDPO/AI 社會影響。", en: "Information Processing, Computer Systems, Internet & Security (HTML/CSS), Computational Thinking & Python 3 (48 hrs), and Social Implications." })}</p>
          </div>
          <button class="btn btn-primary" data-go-paper="paper1" data-go-mod="p1-a">${bi(window.ICT_META.ui.startStudy, true)}</button>
        </div>

        <div class="paper-card card-ea">
          <div>
            <span class="paper-tag tag-ea">Paper 2 · Elective A</span>
            <h3>${bi({ zh: "選修單元 A：數據庫 (Databases)", en: "Elective A: Databases" })}</h3>
            <p>${bi({ zh: "DBMS 三層架構與完整性、ERD 拆解 M:N、1NF–3NF 實戰正規化、SQL-92 多表 JOIN/GROUP BY/子查詢、View/Index 與 NoSQL。", en: "DBMS 3-schema & integrity, ERD M:N conversion, 1NF–3NF normalization, SQL-92 JOIN/GROUP BY/subqueries, Views, Indexes & NoSQL." })}</p>
          </div>
          <button class="btn btn-ea" data-go-paper="electiveA" data-go-mod="ea-all">${bi(window.ICT_META.ui.startStudy, true)}</button>
        </div>

        <div class="paper-card card-ec">
          <div>
            <span class="paper-tag tag-ec">Paper 2 · Elective C · Python 3</span>
            <h3>${bi({ zh: "選修單元 C：算法與程式編寫", en: "Elective C: Algorithm & Programming" })}</h3>
            <p>${bi({ zh: "全 Python 3 實戰：2D 串列、參數傳遞與遞歸、檔案 CSV、二分搜尋與四大排序、堆疊/環形佇列/鏈結串列（雙模式）及事件驅動。", en: "100% Python 3: 2D Lists, Parameter Passing & Recursion, File/CSV I/O, Binary Search & Sorting, Stack/Circular Queue/Linked List, Event-Driven." })}</p>
          </div>
          <button class="btn btn-ec" data-go-paper="electiveC" data-go-mod="ec-all">${bi(window.ICT_META.ui.startStudy, true)}</button>
        </div>
      </div>

      <div class="panel">
        <h2 class="panel-title">📋 ${bi({ zh: "2027 HKDSE ICT 公開評核架構", en: "2027 HKDSE ICT Assessment Framework" })}</h2>
        <div class="table-wrap" style="margin-bottom:0;">
          <table class="data-table">
            <thead><tr>${ov.assessmentTable.headers.map(h => `<th>${bi(h)}</th>`).join("")}</tr></thead>
            <tbody>${ov.assessmentTable.rows.map(r => `<tr>${r.map(c => `<td>${bi(c)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <h2 class="panel-title">🚀 ${bi({ zh: "2025–2027 新課程改革關鍵重點（家長與考生必讀）", en: "Key 2025–2027 Syllabus Reform Highlights" })}</h2>
        <ul class="block-list">
          ${ov.syllabusChanges.map(item => `<li>${bi(item)}</li>`).join("")}
        </ul>
      </div>
    `;

    main.querySelectorAll("[data-go-paper]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.view = btn.dataset.goPaper;
        state.activeModuleId = btn.dataset.goMod;
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  // ---------- Render Paper / Module Notes View ----------
  function renderModuleView(main, paper) {
    const mods = (window.ICT_MODULES || []).filter(m => m.paper === paper);
    let mod = mods.find(m => m.id === state.activeModuleId);
    if (!mod) {
      mod = mods[0];
      state.activeModuleId = mod.id;
    }

    const themeCls = paper === "electiveA" ? "theme-ea" : paper === "electiveC" ? "theme-ec" : "";
    const tagCls = paper === "electiveA" ? "tag-ea" : paper === "electiveC" ? "tag-ec" : "tag-p1";
    const ui = window.ICT_META.ui;

    main.innerHTML = `
      ${mods.length > 1 ? `
        <div class="module-pills-nav">
          ${mods.map(m => `<button class="mod-pill ${m.id === mod.id ? "active" : ""}" data-switch-mod="${m.id}">${state.lang === "en" ? m.title.en : m.title.zh}</button>`).join("")}
        </div>
      ` : ""}

      <div class="module-header ${themeCls}">
        <div class="module-eyebrow">
          <span class="paper-tag ${tagCls}" style="margin:0;">${bi(mod.hours, true)}</span>
          <div style="margin-left:auto;display:flex;gap:6px;">
            <button class="btn btn-outline btn-sm" id="expandAllBtn">${state.lang === "en" ? ui.expandAll.en : ui.expandAll.zh}</button>
            <button class="btn btn-outline btn-sm" id="collapseAllBtn">${state.lang === "en" ? ui.collapseAll.en : ui.collapseAll.zh}</button>
          </div>
        </div>
        <h1>${bi(mod.title)}</h1>
        <p class="module-sub">${bi(mod.subtitle)}</p>
      </div>

      ${mod.topics.map(t => renderTopicCard(mod, t)).join("")}
    `;

    main.querySelectorAll("[data-switch-mod]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeModuleId = btn.dataset.switchMod;
        renderAll();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    main.querySelector("#expandAllBtn").addEventListener("click", () => {
      mod.topics.forEach(t => state.collapsedTopics.delete(t.id));
      renderAll();
    });
    main.querySelector("#collapseAllBtn").addEventListener("click", () => {
      mod.topics.forEach(t => state.collapsedTopics.add(t.id));
      renderAll();
    });

    bindTopicActions(main);
  }

  // ---------- Render Bookmarks View ----------
  function renderBookmarksView(main) {
    const items = getAllTopics().filter(x => state.bookmarks.has(x.topic.id));
    main.innerHTML = `
      <div class="module-header" style="border-left-color: var(--quiz);">
        <h1>★ ${bi({ zh: "我的重點收藏清單", en: "My Bookmarked Topics" })}</h1>
        <p class="module-sub">${bi({ zh: "把較容易混淆或考前想重溫的知識點按 ★ 收藏，考前衝刺一目了然。", en: "Star tricky topics to keep your personal last-minute cram list right here." })}</p>
      </div>
      ${items.length
        ? items.map(x => renderTopicCard(x.mod, x.topic)).join("")
        : `<div class="panel"><p style="margin:0;color:var(--text-muted);">${bi({ zh: "暫未收藏任何知識點。瀏覽筆記時點擊右上角 ☆ 即可加入收藏！", en: "No bookmarked topics yet. Click ☆ on any topic card to save it here!" })}</p></div>`
      }
    `;
    bindTopicActions(main);
  }

  // ---------- Render Cheat Sheets View ----------
  function renderCheatSheets(main) {
    const sheets = window.ICT_META.cheatsheets || [];
    main.innerHTML = `
      <div class="module-header" style="border-left-color: var(--cheat);">
        <div class="module-eyebrow"><span class="paper-tag" style="background:var(--cheat-soft);color:var(--cheat);">Exam Cram Reference</span></div>
        <h1>${bi({ zh: "2027 DSE ICT 考前必背速查表", en: "2027 HKDSE ICT Exam Cheat Sheets" })}</h1>
        <p class="module-sub">${bi({ zh: "整合 Python 3 語法、SQL-92 執行次序與陷阱、電子試算表函數及所有計算公式，支援右上角一鍵列印！", en: "Python 3 syntax, SQL-92 execution order & traps, Spreadsheet functions, and core calculation formulas — print-ready!" })}</p>
      </div>
      ${sheets.map(s => `
        <div class="panel">
          <div style="margin-bottom:10px;"><span class="paper-tag tag-${s.color}" style="margin:0;">${esc(s.badge)}</span></div>
          <h2 class="panel-title">${bi(s.title)}</h2>
          <div class="table-wrap" style="margin-bottom:0;">
            <table class="data-table">
              <thead><tr>${s.headers.map(h => `<th>${bi(h)}</th>`).join("")}</tr></thead>
              <tbody>${s.rows.map(r => `<tr>${r.map(c => `<td>${bi(c)}</td>`).join("")}</tr>`).join("")}</tbody>
            </table>
          </div>
        </div>
      `).join("")}
    `;
  }

  // ---------- Bind Topic Buttons & Code Copy ----------
  function bindTopicActions(root) {
    root.querySelectorAll("[data-toggle-master]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggleMaster;
        if (state.mastered.has(id)) state.mastered.delete(id);
        else state.mastered.add(id);
        saveState();
        renderAll();
      });
    });

    root.querySelectorAll("[data-toggle-bm]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggleBm;
        if (state.bookmarks.has(id)) state.bookmarks.delete(id);
        else state.bookmarks.add(id);
        saveState();
        renderAll();
      });
    });

    root.querySelectorAll("[data-toggle-collapse]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.toggleCollapse;
        if (state.collapsedTopics.has(id)) state.collapsedTopics.delete(id);
        else state.collapsedTopics.add(id);
        renderAll();
      });
    });

    root.querySelectorAll("[data-copy-code]").forEach(btn => {
      btn.addEventListener("click", () => {
        const raw = btn.dataset.copyCode;
        const doneLabel = state.lang === "en" ? window.ICT_META.ui.copied.en : window.ICT_META.ui.copied.zh;
        const origLabel = state.lang === "en" ? window.ICT_META.ui.copy.en : window.ICT_META.ui.copy.zh;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(raw).catch(() => {});
        }
        btn.textContent = doneLabel;
        setTimeout(() => { btn.textContent = origLabel; }, 1400);
      });
    });
  }

  // ---------- Global Bilingual Search ----------
  function initSearch() {
    const inp = document.getElementById("globalSearch");
    const box = document.getElementById("searchResults");

    const runSearch = () => {
      const q = inp.value.trim().toLowerCase();
      if (!q) { box.hidden = true; return; }

      const hits = [];
      getAllTopics().forEach(({ mod, topic }) => {
        const haystack = [
          topic.code,
          plainText(topic.title),
          plainText(topic.summary),
          ...topic.blocks.map(b => JSON.stringify(b))
        ].join(" ").toLowerCase();

        if (haystack.includes(q)) {
          hits.push({ mod, topic });
        }
      });

      if (!hits.length) {
        box.innerHTML = `<div class="search-empty">${state.lang === "en" ? window.ICT_META.ui.noResults.en : window.ICT_META.ui.noResults.zh}</div>`;
      } else {
        box.innerHTML = hits.slice(0, 14).map(({ mod, topic }) => `
          <button class="search-item" data-sr-paper="${mod.paper}" data-sr-mod="${mod.id}" data-sr-topic="${topic.id}">
            <div class="search-item-meta">
              <span>${esc(mod.code)}</span> · <span>${esc(topic.code)}</span>
            </div>
            <div class="search-item-title">${state.lang === "en" ? esc(topic.title.en) : esc(topic.title.zh)}</div>
            <div class="search-item-snippet">${state.lang === "en" ? esc(topic.summary.en) : esc(topic.summary.zh)}</div>
          </button>
        `).join("");

        box.querySelectorAll(".search-item").forEach(btn => {
          btn.addEventListener("click", () => {
            box.hidden = true;
            inp.value = "";
            jumpToTopic(btn.dataset.srPaper, btn.dataset.srMod, btn.dataset.srTopic);
          });
        });
      }
      box.hidden = false;
    };

    inp.addEventListener("input", runSearch);
    inp.addEventListener("focus", () => { if (inp.value.trim()) runSearch(); });
    document.addEventListener("click", (e) => {
      if (!document.getElementById("searchWrap").contains(e.target)) box.hidden = true;
    });
  }

  // ---------- Main Render Orchestrator ----------
  function renderAll() {
    updateChrome();
    renderSidebar();
    const main = document.getElementById("mainContent");
    if (state.view === "overview") renderOverview(main);
    else if (state.view === "paper1" || state.view === "electiveA" || state.view === "electiveC") renderModuleView(main, state.view);
    else if (state.view === "labs") window.ICTLabs.render(main, bi, esc);
    else if (state.view === "quiz") window.ICTQuiz.render(main, bi, esc, highlightCode);
    else if (state.view === "cheatsheets") renderCheatSheets(main);
    else if (state.view === "bookmarks") renderBookmarksView(main);
  }

  // ---------- Mobile Drawer ----------
  function closeMobileDrawer() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarBackdrop").classList.remove("open");
  }

  // ---------- Boot Events ----------
  function init() {
    // Section tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.view = btn.dataset.view;
        if (state.view === "paper1" && !state.activeModuleId.startsWith("p1-")) state.activeModuleId = "p1-a";
        if (state.view === "electiveA") state.activeModuleId = "ea-all";
        if (state.view === "electiveC") state.activeModuleId = "ec-all";
        renderAll();
        window.scrollTo(0, 0);
      });
    });

    // Brand link
    document.getElementById("brandLink").addEventListener("click", (e) => {
      e.preventDefault();
      state.view = "overview";
      renderAll();
      window.scrollTo(0, 0);
    });

    // Language switcher
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.setLang;
        saveState();
        renderAll();
      });
    });

    // Theme toggle
    document.getElementById("themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      saveState();
      updateChrome();
    });

    // Print
    document.getElementById("printBtn").addEventListener("click", () => window.print());

    // Bookmarks view
    document.getElementById("filterBookmarksBtn").addEventListener("click", () => {
      state.view = "bookmarks";
      closeMobileDrawer();
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile drawer
    document.getElementById("mobileMenuBtn").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("open");
      document.getElementById("sidebarBackdrop").classList.toggle("open");
    });
    document.getElementById("sidebarBackdrop").addEventListener("click", closeMobileDrawer);

    // Back to top
    const topBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("show", window.scrollY > 360);
    });
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Keyboard shortcuts: '/' focuses search, 'L' cycles language, 'Esc' closes search/drawer
    document.addEventListener("keydown", (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        document.getElementById("globalSearch").focus();
      } else if ((e.key === "l" || e.key === "L") && tag !== "INPUT" && tag !== "TEXTAREA" && !e.metaKey && !e.ctrlKey) {
        const order = ["zh", "both", "en"];
        state.lang = order[(order.indexOf(state.lang) + 1) % order.length];
        saveState();
        renderAll();
      } else if (e.key === "Escape") {
        document.getElementById("searchResults").hidden = true;
        closeMobileDrawer();
      }
    });

    initSearch();
    renderAll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
