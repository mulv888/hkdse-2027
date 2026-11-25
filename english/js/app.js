/* ==========================================================================
   2027 HKDSE 英國語文科奪星寶典 — 主應用程式控制器 (app.js)
   7 大核心分區、Paper 2 格式／5** 互動標註範文／套話背誦遮蓋、Paper 3A 題型拆解、
   Paper 4 口試話術＋計時抽題、全站搜尋、深淺色主題與本地溫習進度持久化
   ========================================================================== */

(function () {
  "use strict";

  var KEY_MASTERED = "dse2027_eng_mastered";
  var KEY_BOOKMARKS = "dse2027_eng_bookmarks";
  var KEY_THEME = "dse2027_eng_theme";

  var state = {
    view: "overview",
    formatId: "ALL",
    essayId: "essay-lte-ai",
    phraseTab: "bank", // "bank" | "upgrades" | "vocab"
    phraseCat: "ALL",
    p3aId: "ALL",
    p4Section: "gi", // "gi" | "connectors" | "ir" | "chinglish" | "studio"
    practiceTab: "quiz", // "quiz" | "bookmarks"
    highlight5ss: true,
    clozeMode: false,
    openTranscripts: {},
    openAnswers: {},
    activeNoteText: {},
    mastered: new Set(loadJson(KEY_MASTERED, [])),
    bookmarks: new Set(loadJson(KEY_BOOKMARKS, []))
  };

  function loadJson(key, fb) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; }
  }
  function saveSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (e) {}
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Toast 提示 */
  var toastTimer = null;
  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }
  window.EngAppToast = showToast;

  function copyPlain(text) {
    var clean = String(text || "")
      .replace(/\[\[|\]\]/g, "")
      .replace(/\{\{[vsd]\|([^|]+)\|[^}]+\}\}/g, "$1");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(clean).then(function () {
        showToast("✓ 已複製到剪貼簿！");
      }).catch(function () { fallbackCopy(clean); });
    } else {
      fallbackCopy(clean);
    }
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); showToast("✓ 已複製到剪貼簿！"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* Cloze 標記解析：[[phrase]] -> 可點擊揭曉遮蓋 */
  function renderCloze(str) {
    return esc(str).replace(/\[\[([^\]]+)\]\]/g, function (_, inner) {
      return '<span class="cloze-span" title="點擊揭曉／隱藏關鍵搭配">' + inner + "</span>";
    });
  }

  /* 範文 5** 標記解析：{{v|phrase|note}} / {{s|phrase|note}} / {{d|phrase|note}} */
  function renderEssayTokens(str, essayId) {
    var safe = esc(str);
    return safe.replace(/\{\{([vsd])\|([^|]+)\|([^}]+)\}\}/g, function (_, kind, phrase, note) {
      var label = kind === "v" ? "詞彙搭配" : (kind === "s" ? "5** 高階句型" : "銜接結構");
      return (
        '<span class="hl-token hl-' + kind + '" data-eid="' + esc(essayId) + '" data-note="' + esc("【" + label + "】" + phrase + " — " + note) + '" title="' + esc(label + "：" + note) + '">' +
        phrase +
        "</span>"
      );
    });
  }

  /* 進度追蹤：10 文體格式 + 6 範文 + 8 Paper 3A 題型 + 7 Paper 4 GI 場景 = 31 項 */
  function getTrackableIds() {
    var ids = [];
    ((window.ENG_P2_FORMATS && window.ENG_P2_FORMATS.genres) || []).forEach(function (g) { ids.push("fmt:" + g.id); });
    (window.ENG_P2_ESSAYS || []).forEach(function (e) { ids.push("essay:" + e.id); });
    ((window.ENG_P3A && window.ENG_P3A.questionTypes) || []).forEach(function (t) { ids.push("p3a:" + t.id); });
    ((window.ENG_P4 && window.ENG_P4.giScenarios) || []).forEach(function (s) { ids.push("p4:" + s.id); });
    return ids;
  }

  function updateProgressUI() {
    var ids = getTrackableIds();
    var total = ids.length || 1;
    var done = ids.filter(function (id) { return state.mastered.has(id); }).length;
    var pct = Math.round((done / total) * 100);
    var pEl = document.getElementById("masteryPct");
    var fEl = document.getElementById("masteryFill");
    var cEl = document.getElementById("masteryCount");
    var bEl = document.getElementById("openBookmarksBtn");
    if (pEl) pEl.textContent = pct + "%";
    if (fEl) fEl.style.width = pct + "%";
    if (cEl) cEl.textContent = "已掌握 " + done + " / " + total + " 項";
    if (bEl) bEl.textContent = "★ 重點收藏 (" + state.bookmarks.size + ")";
  }

  function toggleMastered(id) {
    if (state.mastered.has(id)) state.mastered.delete(id);
    else state.mastered.add(id);
    saveSet(KEY_MASTERED, state.mastered);
    updateProgressUI();
    renderSidebar();
    renderMain(false);
  }

  function toggleBookmark(id) {
    if (state.bookmarks.has(id)) state.bookmarks.delete(id);
    else state.bookmarks.add(id);
    saveSet(KEY_BOOKMARKS, state.bookmarks);
    updateProgressUI();
    renderSidebar();
    if (state.view !== "practice" || state.practiceTab === "bookmarks") renderMain(false);
  }

  window.EngAppAPI = {
    isStarred: function (id) { return state.bookmarks.has(id); },
    toggleStar: toggleBookmark
  };

  function actionButtons(trackId) {
    var done = state.mastered.has(trackId);
    var starred = state.bookmarks.has(trackId);
    return (
      '<button class="btn btn-sm btn-done ' + (done ? "is-active" : "") + '" data-master="' + esc(trackId) + '">' + (done ? "✓ 已掌握" : "○ 標記掌握") + "</button>" +
      '<button class="btn btn-sm btn-star ' + (starred ? "is-active" : "") + '" data-star="' + esc(trackId) + '">' + (starred ? "★ 已收藏" : "☆ 收藏") + "</button>"
    );
  }

  /* ========================================================================
     左側導航欄渲染
     ======================================================================== */
  function renderSidebar() {
    var nav = document.getElementById("sidebarNav");
    if (!nav) return;
    var html = "";

    if (state.view === "overview") {
      html += '<div class="sidebar-group-title">2027 英文科總覽導航</div>';
      [
        { id: "ov-papers", n: "01", label: "四卷比重與考試架構" },
        { id: "ov-rubric", n: "02", label: "Paper 2 C/L/O 評分拆解" },
        { id: "ov-time", n: "03", label: "Paper 2 兩小時黃金配速" },
        { id: "ov-plan", n: "04", label: "2027 三階段備戰路線圖" }
      ].forEach(function (x) {
        html += '<button class="nav-item" data-scroll-id="' + x.id + '"><span class="nav-item-left"><span class="nav-num">' + x.n + '</span><span class="nav-label">' + esc(x.label) + '</span></span></button>';
      });
    } else if (state.view === "p2formats") {
      html += '<div class="sidebar-group-title">Paper 2 十大文體格式</div>';
      html += '<button class="nav-item ' + (state.formatId === "MATRIX" ? "active" : "") + '" data-fmt="MATRIX"><span class="nav-item-left"><span class="nav-num">速查</span><span class="nav-label">稱謂・下款・語氣總表</span></span></button>';
      html += '<button class="nav-item ' + (state.formatId === "ALL" ? "active" : "") + '" data-fmt="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">顯示全部 10 大文體</span></span></button>';
      ((window.ENG_P2_FORMATS && window.ENG_P2_FORMATS.genres) || []).forEach(function (g) {
        var done = state.mastered.has("fmt:" + g.id);
        html += '<button class="nav-item ' + (state.formatId === g.id ? "active" : "") + '" data-fmt="' + esc(g.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + esc(g.code) + '</span><span class="nav-label">' + esc(g.name) + '</span></span>';
        html += '  <span class="nav-count">' + (done ? "✓" : "") + '</span>';
        html += '</button>';
      });
    } else if (state.view === "p2essays") {
      html += '<div class="sidebar-group-title">6 篇 5** 全真精讀範文</div>';
      (window.ENG_P2_ESSAYS || []).forEach(function (e, i) {
        var done = state.mastered.has("essay:" + e.id);
        html += '<button class="nav-item ' + (state.essayId === e.id ? "active" : "") + '" data-essay="' + esc(e.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + esc(e.part) + '</span><span class="nav-label">' + (i + 1) + ". " + esc(e.genre.split("（")[0]) + '</span></span>';
        html += '  <span class="nav-count">' + (done ? "✓" : "") + '</span>';
        html += '</button>';
      });
    } else if (state.view === "p2phrases") {
      html += '<div class="sidebar-group-title">Paper 2 語言武器庫</div>';
      html += '<button class="nav-item ' + (state.phraseTab === "bank" ? "active" : "") + '" data-ptab="bank"><span class="nav-item-left"><span class="nav-num">套話</span><span class="nav-label">六大功能高分例句庫</span></span></button>';
      html += '<button class="nav-item ' + (state.phraseTab === "upgrades" ? "active" : "") + '" data-ptab="upgrades"><span class="nav-item-left"><span class="nav-num">升呢</span><span class="nav-label">L3 ➔ L5** 六大句型改造</span></span></button>';
      html += '<button class="nav-item ' + (state.phraseTab === "vocab" ? "active" : "") + '" data-ptab="vocab"><span class="nav-item-left"><span class="nav-num">詞彙</span><span class="nav-label">告別平庸字 C1/C2 替換表</span></span></button>';
      if (state.phraseTab === "bank") {
        html += '<div class="sidebar-group-title">按段落功能篩選</div>';
        html += '<button class="nav-item ' + (state.phraseCat === "ALL" ? "active" : "") + '" data-pcat="ALL"><span class="nav-item-left"><span class="nav-num">全</span><span class="nav-label">全部六大類套話</span></span></button>';
        ((window.ENG_P2_PHRASES && window.ENG_P2_PHRASES.categories) || []).forEach(function (c, i) {
          html += '<button class="nav-item ' + (state.phraseCat === c.id ? "active" : "") + '" data-pcat="' + esc(c.id) + '"><span class="nav-item-left"><span class="nav-num">0' + (i + 1) + '</span><span class="nav-label">' + esc(c.name.replace(/^\d+\.\s*/, "")) + '</span></span></button>';
        });
      }
    } else if (state.view === "p3a") {
      html += '<div class="sidebar-group-title">Paper 3A 聆聽攻略</div>';
      html += '<button class="nav-item ' + (state.p3aId === "ALL" ? "active" : "") + '" data-p3a="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">總覽＋全部 8 大題型</span></span></button>';
      html += '<button class="nav-item ' + (state.p3aId === "SPELLING" ? "active" : "") + '" data-p3a="SPELLING"><span class="nav-item-left"><span class="nav-num">地雷</span><span class="nav-label">十大高頻易錯串字表</span></span></button>';
      ((window.ENG_P3A && window.ENG_P3A.questionTypes) || []).forEach(function (t, i) {
        var done = state.mastered.has("p3a:" + t.id);
        html += '<button class="nav-item ' + (state.p3aId === t.id ? "active" : "") + '" data-p3a="' + esc(t.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">T' + (i + 1) + '</span><span class="nav-label">' + esc(t.name.split(" (")[0]) + '</span></span>';
        html += '  <span class="nav-count">' + (done ? "✓" : "") + '</span>';
        html += '</button>';
      });
    } else if (state.view === "p4") {
      html += '<div class="sidebar-group-title">Paper 4 口試五大模塊</div>';
      [
        { key: "gi", n: "GI", label: "Part A 小組討論 7 大話術" },
        { key: "connectors", n: "連接", label: "自然口語連接詞總表" },
        { key: "ir", n: "IR", label: "Part B 一分鐘 5 大題型示範" },
        { key: "chinglish", n: "排雷", label: "港生常見 Chinglish 修正" },
        { key: "studio", n: "計時", label: "互動 1m/8m 抽題計時器" }
      ].forEach(function (s) {
        html += '<button class="nav-item ' + (state.p4Section === s.key ? "active" : "") + '" data-p4sec="' + s.key + '"><span class="nav-item-left"><span class="nav-num">' + s.n + '</span><span class="nav-label">' + esc(s.label) + '</span></span></button>';
      });
    } else if (state.view === "practice") {
      html += '<div class="sidebar-group-title">自測與溫習管理</div>';
      html += '<button class="nav-item ' + (state.practiceTab === "quiz" ? "active" : "") + '" data-prtab="quiz"><span class="nav-item-left"><span class="nav-num">自測</span><span class="nav-label">14 題跨卷陷阱題庫</span></span></button>';
      html += '<button class="nav-item ' + (state.practiceTab === "bookmarks" ? "active" : "") + '" data-prtab="bookmarks"><span class="nav-item-left"><span class="nav-num">★</span><span class="nav-label">我的重點收藏 (' + state.bookmarks.size + ')</span></span></button>';
    }

    nav.innerHTML = html;

    nav.querySelectorAll("[data-scroll-id]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.getAttribute("data-scroll-id"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileSidebar();
      });
    });
    nav.querySelectorAll("[data-fmt]").forEach(function (b) {
      b.addEventListener("click", function () { state.formatId = b.getAttribute("data-fmt"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-essay]").forEach(function (b) {
      b.addEventListener("click", function () { state.essayId = b.getAttribute("data-essay"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-ptab]").forEach(function (b) {
      b.addEventListener("click", function () { state.phraseTab = b.getAttribute("data-ptab"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-pcat]").forEach(function (b) {
      b.addEventListener("click", function () { state.phraseCat = b.getAttribute("data-pcat"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-p3a]").forEach(function (b) {
      b.addEventListener("click", function () { state.p3aId = b.getAttribute("data-p3a"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-p4sec]").forEach(function (b) {
      b.addEventListener("click", function () { state.p4Section = b.getAttribute("data-p4sec"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
    nav.querySelectorAll("[data-prtab]").forEach(function (b) {
      b.addEventListener("click", function () { state.practiceTab = b.getAttribute("data-prtab"); renderSidebar(); renderMain(true); closeMobileSidebar(); });
    });
  }

  /* ========================================================================
     主視圖渲染（7 大核心畫面）
     ======================================================================== */
  function renderMain(scrollTop) {
    if (window.ENG_PRACTICE) {
      window.ENG_PRACTICE.stopSpeech();
      if (state.view !== "p4") window.ENG_PRACTICE.clearTimer();
    }
    var main = document.getElementById("mainContent");
    if (!main) return;

    if (state.view === "overview") main.innerHTML = buildOverviewView();
    else if (state.view === "p2formats") main.innerHTML = buildFormatsView();
    else if (state.view === "p2essays") main.innerHTML = buildEssaysView();
    else if (state.view === "p2phrases") main.innerHTML = buildPhrasesView();
    else if (state.view === "p3a") main.innerHTML = buildP3AView();
    else if (state.view === "p4") main.innerHTML = buildP4View();
    else if (state.view === "practice") main.innerHTML = buildPracticeView();

    bindDynamicEvents(main);
    if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* 1. 總覽視圖 */
  function buildOverviewView() {
    var m = window.ENG_META || {};
    var html = "";
    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">2027 屆 HKDSE 英國語文科專屬 · 線上／離線雙支援</div>';
    html += '  <h1 class="hero-title">' + esc(m.title) + '</h1>';
    html += '  <p class="hero-desc">' + esc(m.examNote) + '</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn btn-primary" data-jump-view="p2formats">📄 Paper 2 十大文體格式</button>';
    html += '    <button class="btn btn-navy" data-jump-view="p2essays">🏆 精讀 6 篇 5** 範文</button>';
    html += '    <button class="btn" data-jump-view="p2phrases">✨ 套話與 L5** 句式升呢</button>';
    html += '    <button class="btn" data-jump-view="p3a">🎧 Paper 3A 聆聽 8 題型</button>';
    html += '    <button class="btn" data-jump-view="p4">🎙️ Paper 4 口試話術＋計時器</button>';
    html += '  </div>';
    html += '</section>';

    html += '<div class="card" id="ov-papers">';
    html += '  <div class="card-header"><h2 class="card-title">📊 2027 HKDSE 英文科四卷比重與核心結構</h2><span class="badge badge-amber">公開試 85% ＋ SBA 15%</span></div>';
    html += '  <div class="grid-2">';
    (m.papers || []).forEach(function (p) {
      html += '<div class="stat-box">';
      html += '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-navy">' + esc(p.code) + '</span><span style="font-size:0.78rem;color:var(--text-muted);font-weight:700;">' + esc(p.duration) + '</span></div>';
      html += '  <div class="stat-val">' + esc(p.weight) + ' · ' + esc(p.name) + '</div>';
      html += '  <p style="margin:6px 0;font-size:0.86rem;color:var(--text-secondary);"><strong>試卷結構：</strong>' + esc(p.structure) + '</p>';
      html += '  <p style="margin:0;font-size:0.84rem;color:var(--text-muted);"><strong>奪星焦點：</strong>' + esc(p.focus) + '</p>';
      html += '</div>';
    });
    html += '  </div>';
    html += '</div>';

    html += '<div class="card" id="ov-rubric">';
    html += '  <div class="card-header"><h2 class="card-title">🎯 Paper 2 寫作三維評分拆解（Content / Language / Organisation 各 7 分）</h2></div>';
    html += '  <div class="table-wrap"><table><thead><tr><th>評分維度</th><th>Level 3–4 常見樽頸</th><th>Level 5*–5** 摘星關鍵</th></tr></thead><tbody>';
    (m.p2Rubric || []).forEach(function (r) {
      html += '<tr><td><strong>' + esc(r.domain) + '</strong></td><td>' + esc(r.l34) + '</td><td style="color:var(--emerald);font-weight:600;">' + esc(r.l5ss) + '</td></tr>';
    });
    html += '  </tbody></table></div>';
    html += '</div>';

    html += '<div class="card" id="ov-time">';
    html += '  <div class="card-header"><h2 class="card-title">⏱️ Paper 2 兩小時（120 分鐘）黃金配速表</h2><span class="badge badge-crimson">切忌在 Part A 超時！</span></div>';
    html += '  <div class="table-wrap"><table><thead><tr><th>時間段</th><th>階段任務</th><th>實戰執行要點</th></tr></thead><tbody>';
    (m.p2TimePlan || []).forEach(function (t) {
      html += '<tr><td style="font-family:var(--font-mono);font-weight:700;white-space:nowrap;">' + esc(t.phase) + '</td><td><strong>' + esc(t.task) + '</strong></td><td>' + esc(t.detail) + '</td></tr>';
    });
    html += '  </tbody></table></div>';
    html += '</div>';

    html += '<div class="card" id="ov-plan">';
    html += '  <div class="card-header"><h2 class="card-title">🗓️ 2027 考生英文三階段備戰路線圖</h2></div>';
    html += '  <div class="grid-3">';
    (m.studyPlan2027 || []).forEach(function (s, idx) {
      html += '<div class="stat-box">';
      html += '  <span class="badge badge-amber">階段 ' + (idx + 1) + '</span>';
      html += '  <h4 style="margin:8px 0 8px;font-size:0.96rem;">' + esc(s.stage) + '</h4>';
      html += '  <ul style="margin:0;padding-left:18px;font-size:0.84rem;color:var(--text-secondary);">' + s.items.map(function (it) { return '<li style="margin-bottom:5px;">' + esc(it) + '</li>'; }).join("") + '</ul>';
      html += '</div>';
    });
    html += '  </div>';
    html += '</div>';
    return html;
  }

  /* 2. Paper 2 文章格式合集視圖 */
  function buildFormatsView() {
    var data = window.ENG_P2_FORMATS || {};
    var genres = data.genres || [];
    var html = "";

    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 2 Writing · Organisation &amp; Register 滿分基石</div>';
    html += '  <h1 class="hero-title">Paper 2 十大必考文章格式合集</h1>';
    html += '  <p class="hero-desc">完整收錄 Letter to the Editor、Formal Letter、Argumentative Essay、Feature Article、Proposal、Report、Speech、Blog/Email、Short Story 與 Review 擬真答題紙排版示範、語氣規範及考場致命陷阱。</p>';
    html += '</section>';

    if (state.formatId === "ALL" || state.formatId === "MATRIX") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">🧭 稱謂・下款・語氣（Register）一秒速查矩陣</h2><span class="badge badge-crimson">錯下款直接扣 Organisation 分！</span></div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>對象 / 文體</th><th>上款 (Salutation)</th><th>下款 (Sign-off)</th><th>署名</th><th>語氣與提醒</th></tr></thead><tbody>';
      (data.registerMatrix || []).forEach(function (r) {
        html += '<tr><td><strong>' + esc(r.recipient) + '</strong></td><td style="font-family:var(--font-serif);">' + esc(r.salutation) + '</td><td style="font-family:var(--font-serif);font-weight:700;color:var(--navy);">' + esc(r.signoff) + '</td><td>' + esc(r.sender) + '</td><td><span class="badge badge-amber" style="margin-bottom:4px;">' + esc(r.tone) + '</span><br/>' + esc(r.note) + '</td></tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    }

    if (state.formatId !== "MATRIX") {
      var list = state.formatId === "ALL" ? genres : genres.filter(function (g) { return g.id === state.formatId; });
      list.forEach(function (g) {
        var tid = "fmt:" + g.id;
        html += '<article class="card" id="' + esc(g.id) + '">';
        html += '  <div class="card-header">';
        html += '    <div>';
        html += '      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:5px;"><span class="badge badge-navy">格式 ' + esc(g.code) + '</span><span class="badge badge-amber">' + esc(g.freq) + '</span><span class="badge badge-emerald">' + esc(g.register) + '</span></div>';
        html += '      <h2 class="card-title">' + esc(g.name) + '</h2>';
        html += '    </div>';
        html += '    <div class="card-actions">' + actionButtons(tid) + '</div>';
        html += '  </div>';
        html += '  <p style="margin:0 0 12px;color:var(--text-secondary);font-size:0.91rem;">' + esc(g.summary) + '</p>';

        html += '  <div class="callout callout-info"><div class="callout-title">✅ 必備格式檢查清單 (Checklist)</div><ul style="margin:4px 0 0;padding-left:18px;">' + g.mustHave.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") + '</ul></div>';

        html += '  <h4 style="margin:14px 0 6px;font-size:0.93rem;">📝 考場標準排版藍圖（左：擬真示範 ｜ 右：格式批註）</h4>';
        html += '  <div class="exam-sheet">';
        g.layout.forEach(function (row) {
          html += '<div class="sheet-row">';
          html += '  <div class="sheet-text s-' + esc(row.style) + '">' + esc(row.text) + '</div>';
          html += '  <div class="sheet-note">' + esc(row.note) + '</div>';
          html += '</div>';
        });
        html += '  </div>';

        html += '  <div class="callout callout-trap"><div class="callout-title">⚠️ 考場常見失分地雷</div><ul style="margin:4px 0 0;padding-left:18px;">' + g.traps.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + '</ul></div>';

        html += '  <div class="callout callout-gold"><div class="callout-title">✨ 該文體萬用開場例句（點擊複製）</div>';
        g.openers.forEach(function (op) {
          html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:6px 0;border-bottom:1px dashed var(--amber-border);">';
          html += '  <span style="font-family:var(--font-serif);font-size:0.92rem;">' + esc(op) + '</span>';
          html += '  <button class="btn btn-sm" data-copy="' + esc(op) + '">複製</button>';
          html += '</div>';
        });
        html += '  </div>';
        html += '</article>';
      });
    }
    return html;
  }

  /* 3. Paper 2 高分 5** 範文視圖 */
  function buildEssaysView() {
    var essays = window.ENG_P2_ESSAYS || [];
    var cur = essays.find(function (e) { return e.id === state.essayId; }) || essays[0];
    if (!cur) return "";

    var html = "";
    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 2 5** Model Essays · 21/21 滿分拆解</div>';
    html += '  <h1 class="hero-title">Paper 2 高分 5** 範文精讀室</h1>';
    html += '  <p class="hero-desc">收錄 6 篇緊貼 2027 香港熱門議題的 Part B 及 Part A 全真 5** 範文。開啟「亮點標註」並點擊彩色句子，即可即時查看考官級詞彙、倒裝句型與銜接結構評析！</p>';
    html += '</section>';

    html += '<div class="filter-bar">';
    essays.forEach(function (e, i) {
      html += '<button class="chip-btn ' + (e.id === cur.id ? "active" : "") + '" data-pick-essay="' + esc(e.id) + '">' + (i + 1) + ". [" + esc(e.part) + "] " + esc(e.genre.split("（")[0]) + '</button>';
    });
    html += '</div>';

    var tid = "essay:" + cur.id;
    var fullEnglish = cur.paragraphs.map(function (p) { return p.text; }).join("\n\n");

    html += '<article class="card">';
    html += '  <div class="card-header">';
    html += '    <div>';
    html += '      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:5px;"><span class="badge badge-crimson">' + esc(cur.scores.total) + '</span><span class="badge badge-navy">' + esc(cur.part) + ' · ' + esc(cur.genre) + '</span><span class="badge badge-amber">' + esc(cur.topicTag) + '</span><span class="badge badge-emerald">' + esc(cur.wordCount) + '</span></div>';
    html += '      <h2 class="card-title">' + esc(cur.title) + '</h2>';
    html += '    </div>';
    html += '    <div class="card-actions">';
    html += '      <button class="btn btn-sm ' + (state.highlight5ss ? "btn-primary" : "") + '" id="toggleHlBtn">' + (state.highlight5ss ? "🔍 隱藏 5** 亮點標註" : "🔍 顯示 5** 亮點標註") + '</button>';
    html += '      <button class="btn btn-sm btn-navy" data-speak-essay="' + esc(cur.id) + '">🔊 朗讀範文</button>';
    html += actionButtons(tid);
    html += '    </div>';
    html += '  </div>';

    html += '  <div class="callout callout-info"><div class="callout-title">📋 模擬題目 (Exam Prompt)</div><div style="font-family:var(--font-serif);">' + esc(cur.prompt) + '</div></div>';

    if (state.highlight5ss) {
      html += '  <div class="hl-legend">';
      html += '    <span style="font-weight:700;color:var(--text-muted);">點擊下方彩色亮點查看解析：</span>';
      html += '    <span class="hl-chip hl-chip-v">琥珀底＝C1/C2 精準詞彙</span>';
      html += '    <span class="hl-chip hl-chip-s">藏青底＝5** 高階句型與修辭</span>';
      html += '    <span class="hl-chip hl-chip-d">翡翠底＝段落銜接與論證結構</span>';
      html += '  </div>';
      html += '  <div class="hl-note-panel" id="hlNotePanel">' + esc(state.activeNoteText[cur.id] || "💡 提示：滑鼠移到或點擊範文中的任何彩色標註片語，這裡會立即顯示 5** 得分原因！") + '</div>';
    }

    html += '  <div class="essay-box ' + (state.highlight5ss ? "hl-on" : "") + '">';
    cur.paragraphs.forEach(function (p) {
      if (p.type === "title") {
        html += '<div class="essay-title-line">' + esc(p.text) + '</div>';
      } else if (p.type === "byline") {
        html += '<div class="essay-byline">' + esc(p.text) + '</div>';
      } else if (p.type === "meta") {
        html += '<div class="essay-meta-bar">' + esc(p.text) + '</div>';
      } else if (p.type === "subhead") {
        html += '<div class="essay-subhead">' + esc(p.text) + '</div>';
      } else if (p.type === "salutation") {
        html += '<div style="font-weight:700;margin-bottom:12px;">' + esc(p.text) + '</div>';
      } else if (p.type === "signoff") {
        html += '<div class="essay-signoff">' + esc(p.text) + '</div>';
      } else {
        html += '<div class="essay-p-wrap">';
        if (p.role) html += '<div class="essay-p-role">' + esc(p.role) + '</div>';
        html += '<div style="white-space:pre-line;">' + renderEssayTokens(p.text, cur.id) + '</div>';
        html += '</div>';
      }
    });
    html += '  </div>';

    /* 考官三維點評 */
    html += '  <h3 style="margin:18px 0 10px;font-size:1.03rem;">🎓 考官級三維拆解（Content / Language / Organisation）</h3>';
    html += '  <div class="grid-3">';
    html += '    <div class="stat-box"><span class="badge badge-crimson">Content · ' + esc(cur.scores.C) + '</span><p style="margin:8px 0 0;font-size:0.85rem;color:var(--text-secondary);">' + esc(cur.commentary.content) + '</p></div>';
    html += '    <div class="stat-box"><span class="badge badge-navy">Language · ' + esc(cur.scores.L) + '</span><p style="margin:8px 0 0;font-size:0.85rem;color:var(--text-secondary);">' + esc(cur.commentary.language) + '</p></div>';
    html += '    <div class="stat-box"><span class="badge badge-emerald">Organisation · ' + esc(cur.scores.O) + '</span><p style="margin:8px 0 0;font-size:0.85rem;color:var(--text-secondary);">' + esc(cur.commentary.organisation) + '</p></div>';
    html += '  </div>';

    /* 可偷師金句表 */
    html += '  <h3 style="margin:18px 0 10px;font-size:1.03rem;">💎 本篇必背「可偷師」5** 萬用金句</h3>';
    (cur.stealables || []).forEach(function (st) {
      html += '<div class="phrase-item">';
      html += '  <div><div class="phrase-en">' + esc(st.en) + '</div><div class="phrase-zh">' + esc(st.zh) + '</div></div>';
      html += '  <div class="phrase-btns"><button class="btn btn-sm" data-copy="' + esc(st.en) + '">複製</button><button class="btn btn-sm" data-speak="' + esc(st.en) + '">🔊</button></div>';
      html += '</div>';
    });

    html += '</article>';
    return html;
  }

  /* 4. Paper 2 常用套話與句式升呢視圖 */
  function buildPhrasesView() {
    var data = window.ENG_P2_PHRASES || {};
    var html = "";

    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 2 Language Booster · 可一鍵切換「背誦遮蓋」自測！</div>';
    html += '  <h1 class="hero-title">Paper 2 常用套話、萬用句型與詞彙升級庫</h1>';
    html += '  <p class="hero-desc">告別重複使用 I think / Firstly / very good！點擊右上方「背誦遮蓋」按鈕即可隱藏高分詞組進行填空默記，或直接點擊「複製」與「🔊 發音」高效吸收。</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn ' + (state.phraseTab === "bank" ? "btn-primary" : "") + '" data-ptab-main="bank">📚 六大功能高分套話庫</button>';
    html += '    <button class="btn ' + (state.phraseTab === "upgrades" ? "btn-primary" : "") + '" data-ptab-main="upgrades">🚀 L3 ➔ L5** 句式升呢對比</button>';
    html += '    <button class="btn ' + (state.phraseTab === "vocab" ? "btn-primary" : "") + '" data-ptab-main="vocab">💎 告別平庸字 C1/C2 替換表</button>';
    html += '  </div>';
    html += '</section>';

    if (state.phraseTab === "bank") {
      var cats = data.categories || [];
      html += '<div class="filter-bar">';
      html += '<button class="chip-btn ' + (state.phraseCat === "ALL" ? "active" : "") + '" data-pcat-main="ALL">全部六大功能</button>';
      cats.forEach(function (c) {
        html += '<button class="chip-btn ' + (state.phraseCat === c.id ? "active" : "") + '" data-pcat-main="' + esc(c.id) + '">' + esc(c.name) + '</button>';
      });
      html += '</div>';

      var list = state.phraseCat === "ALL" ? cats : cats.filter(function (c) { return c.id === state.phraseCat; });
      list.forEach(function (c) {
        html += '<div class="card">';
        html += '  <div class="card-header"><h2 class="card-title">' + esc(c.name) + '</h2><span class="badge badge-amber">' + esc(c.badge) + '</span></div>';
        c.items.forEach(function (it) {
          html += '<div class="phrase-item">';
          html += '  <div>';
          html += '    <span class="badge badge-navy" style="margin-bottom:5px;">' + esc(it.tag) + '</span>';
          html += '    <div class="phrase-en">' + renderCloze(it.en) + '</div>';
          html += '    <div class="phrase-zh">' + esc(it.zh) + '</div>';
          html += '  </div>';
          html += '  <div class="phrase-btns">';
          html += '    <button class="btn btn-sm" data-copy="' + esc(it.en) + '">複製</button>';
          html += '    <button class="btn btn-sm" data-speak="' + esc(it.en) + '">🔊</button>';
          html += '  </div>';
          html += '</div>';
        });
        html += '</div>';
      });
    } else if (state.phraseTab === "upgrades") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">🚀 L3 ➔ L5** 六大黃金句型改造實驗室</h2><span class="badge badge-emerald">每篇作文自然套用 3–4 招即夠摘星</span></div>';
      (data.upgrades || []).forEach(function (u) {
        html += '<div class="upgrade-card">';
        html += '  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px;"><strong style="color:var(--navy);">' + esc(u.skill) + '</strong><button class="btn btn-sm" data-copy="' + esc(u.l5) + '">複製 L5** 示範句</button></div>';
        html += '  <div class="up-row up-l3"><span class="badge badge-crimson" style="margin-right:8px;">L3 原句</span>' + esc(u.l3) + '</div>';
        html += '  <div class="up-row up-l5"><span class="badge badge-emerald" style="margin-right:8px;">L5** 升呢</span>' + esc(u.l5) + '</div>';
        html += '  <div style="font-size:0.84rem;color:var(--text-secondary);margin-top:6px;">💡 <strong>改寫秘訣：</strong>' + esc(u.why) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    } else if (state.phraseTab === "vocab") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">💎 告別「萬能膠」平庸詞彙：C1 / C2 精準升級表</h2><span class="badge badge-amber">寫作與口試通用</span></div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>平庸基礎字（少用）</th><th>5** 高分替換搭配</th><th>考場示範句</th></tr></thead><tbody>';
      (data.vocabUpgrades || []).forEach(function (v) {
        html += '<tr>';
        html += '  <td><span class="badge badge-crimson">' + esc(v.basic) + '</span></td>';
        html += '  <td style="font-family:var(--font-serif);font-weight:700;color:var(--navy);">' + v.upgrades.map(function (w) { return '<span style="display:inline-block;margin:2px 6px 2px 0;">• ' + esc(w) + '</span>'; }).join("") + '</td>';
        html += '  <td style="font-family:var(--font-serif);">' + esc(v.example) + '</td>';
        html += '</tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    }

    return html;
  }

  /* 5. Paper 3A 聆聽題型示例視圖 */
  function buildP3AView() {
    var data = window.ENG_P3A || {};
    var ov = data.overview || {};
    var types = data.questionTypes || [];
    var html = "";

    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 3 Part A Listening · 佔全科 15%（全體考生必答）</div>';
    html += '  <h1 class="hero-title">Paper 3A 聆聽八大題型示例與排雷大全</h1>';
    html += '  <p class="hero-desc">系統拆解 Task 1–4 全部核心考法：表格改口陷阱、SVG 平面圖方位標註、流程圖倒敘、選擇題干擾項排雷、對比勾選、語氣態度推斷、開放長答濃縮及數據趨勢圖配對，更可點擊「🔊 播放模擬錄音」練耳！</p>';
    html += '</section>';

    if (state.p3aId === "ALL") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">📈 Task 1 – Task 4 難度遞增與 30 秒預讀攻略</h2><span class="badge badge-violet">' + esc(ov.duration) + '</span></div>';
      html += '  <div class="grid-4" style="margin-bottom:14px;">';
      (ov.difficultyCurve || []).forEach(function (d) {
        html += '<div class="stat-box"><div style="font-weight:800;font-size:0.9rem;color:var(--violet);">' + esc(d.task) + '</div><div style="font-size:0.78rem;color:var(--amber);font-weight:700;margin:3px 0 6px;">' + esc(d.level) + '</div><div style="font-size:0.82rem;color:var(--text-secondary);">' + esc(d.focus) + '</div></div>';
      });
      html += '  </div>';
      html += '  <div class="grid-2">';
      (ov.preListeningSteps || []).forEach(function (s) {
        html += '<div class="callout callout-info" style="margin:0;"><div class="callout-title">' + esc(s.step) + '</div><div>' + esc(s.detail) + '</div></div>';
      });
      html += '  </div>';
      html += '</div>';
    }

    if (state.p3aId !== "SPELLING") {
      var list = state.p3aId === "ALL" ? types : types.filter(function (t) { return t.id === state.p3aId; });
      list.forEach(function (t) {
        var tid = "p3a:" + t.id;
        var tsOpen = !!state.openTranscripts[t.id];
        var ansOpen = !!state.openAnswers[t.id];
        var audioScript = (t.transcript || []).map(function (l) { return l.line; }).join(" ");

        html += '<article class="card" id="' + esc(t.id) + '">';
        html += '  <div class="card-header">';
        html += '    <div>';
        html += '      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:5px;"><span class="badge badge-violet">' + esc(t.code) + '</span><span class="badge badge-amber">' + esc(t.tasks) + '</span><span class="badge badge-navy">' + esc(t.difficulty) + '</span></div>';
        html += '      <h2 class="card-title">' + esc(t.name) + '</h2>';
        html += '    </div>';
        html += '    <div class="card-actions">' + actionButtons(tid) + '</div>';
        html += '  </div>';

        html += '  <div class="callout callout-info"><div class="callout-title">🎯 破題策略</div><div>' + esc(t.strategy) + '</div></div>';

        if (t.svgType === "floorplan" && window.ENG_PRACTICE) html += window.ENG_PRACTICE.renderFloorplanSVG();
        if (t.svgType === "trends" && window.ENG_PRACTICE) html += window.ENG_PRACTICE.renderTrendsSVG();

        /* 模擬錄音與原文控制列 */
        html += '  <div style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;">';
        html += '    <button class="btn btn-navy btn-sm" data-speak="' + esc(audioScript) + '">🔊 模擬朗讀錄音（純聽力測試）</button>';
        html += '    <button class="btn btn-sm" data-toggle-ts="' + esc(t.id) + '">' + (tsOpen ? "🙈 隱藏錄音原文 (Transcript)" : "📜 展開錄音原文 (Transcript)") + '</button>';
        html += '    <button class="btn btn-primary btn-sm" data-toggle-ans="' + esc(t.id) + '">' + (ansOpen ? "🙈 隱藏答案與訊號詞拆解" : "✅ 核對答案與干擾項拆解") + '</button>';
        html += '  </div>';

        if (tsOpen) {
          html += '<div class="transcript-box">';
          html += '  <div style="font-size:0.75rem;font-weight:800;color:var(--text-muted);margin-bottom:8px;">🎙️ 擬真錄音原文 (MINI-TRANSCRIPT)</div>';
          (t.transcript || []).forEach(function (l) {
            html += '<div class="ts-line"><span class="ts-spk">' + esc(l.speaker) + ':</span><span>' + esc(l.line) + '</span></div>';
          });
          html += '</div>';
        }

        /* 擬真題目清單 */
        html += '  <h4 style="margin:12px 0 8px;font-size:0.93rem;">📝 考卷擬真題目示範</h4>';
        (t.questions || []).forEach(function (qa) {
          html += '<div class="qa-item">';
          html += '  <div class="qa-q">' + esc(qa.q) + '</div>';
          if (ansOpen) {
            html += '<div class="qa-ans-box"><strong>✓ 參考答案：</strong>' + esc(qa.a) + '<br/><span style="color:var(--text-secondary);">🔎 <strong>錄音線索與排雷：</strong>' + esc(qa.cue) + '</span></div>';
          }
          html += '</div>';
        });

        html += '  <div class="callout callout-trap"><div class="callout-title">⚠️ 考評局常設陷阱警告</div><div>' + esc(t.trapAlert) + '</div></div>';
        html += '</article>';
      });
    }

    if (state.p3aId === "ALL" || state.p3aId === "SPELLING") {
      html += '<div class="card" id="p3a-spelling">';
      html += '  <div class="card-header"><h2 class="card-title">✍️ Paper 3A 十大高頻串字與同音字地雷表</h2><span class="badge badge-crimson">Task 1–2 串錯一個字母即零分！</span></div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>高頻必背串字</th><th>考生常犯錯誤</th><th>一秒記憶口訣</th></tr></thead><tbody>';
      (data.spellingTraps || []).forEach(function (sp) {
        html += '<tr><td style="font-family:var(--font-mono);font-weight:800;color:var(--navy);">' + esc(sp.word) + '</td><td style="color:var(--crimson);">' + esc(sp.trap) + '</td><td>' + esc(sp.tip) + '</td></tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    }

    return html;
  }

  /* 6. Paper 4 口試話術、連接詞與計時器視圖 */
  function buildP4View() {
    var data = window.ENG_P4 || {};
    var ov = data.overview || {};
    var html = "";

    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 4 Speaking · 佔全科 10%（Group Interaction + 1-Min IR）</div>';
    html += '  <h1 class="hero-title">Paper 4 口試高分話術、自然連接詞與計時模擬室</h1>';
    html += '  <p class="hero-desc">' + esc(ov.structure) + ' 切記：Paper 4 並非考誰背最多生僻大詞，而是考你能否自然傾聽、有禮貌地互動延伸並有條理地表達觀點！</p>';
    html += '  <div class="hero-actions">';
    [
      { key: "gi", label: "💬 GI 七大場景話術" },
      { key: "connectors", label: "🔗 口語連接詞總表" },
      { key: "ir", label: "🎯 1 分鐘 IR 五大題型" },
      { key: "chinglish", label: "🚫 港生 Chinglish 排雷" },
      { key: "studio", label: "⏱️ 互動計時抽題練習" }
    ].forEach(function (tab) {
      html += '<button class="btn ' + (state.p4Section === tab.key ? "btn-primary" : "") + '" data-p4-main="' + tab.key + '">' + tab.label + '</button>';
    });
    html += '  </div>';
    html += '</section>';

    if (state.p4Section === "gi") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">🏆 四大評分準則（各 7 分，共 28 分）與 8 分鐘控時節奏</h2></div>';
      html += '  <div class="grid-2" style="margin-bottom:14px;">';
      (ov.domains || []).forEach(function (d) {
        html += '<div class="stat-box"><strong style="color:var(--teal);font-size:0.91rem;">' + esc(d.name) + '</strong><p style="margin:6px 0 0;font-size:0.84rem;color:var(--text-secondary);">' + esc(d.tip) + '</p></div>';
      });
      html += '  </div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>8 分鐘 GI 黃金配速</th><th>該階段必做策略</th></tr></thead><tbody>';
      (ov.giTimeline || []).forEach(function (t) {
        html += '<tr><td style="font-family:var(--font-mono);font-weight:700;white-space:nowrap;">' + esc(t.phase) + '</td><td>' + esc(t.move) + '</td></tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';

      (data.giScenarios || []).forEach(function (sc) {
        var tid = "p4:" + sc.id;
        html += '<article class="card" id="' + esc(sc.id) + '">';
        html += '  <div class="card-header">';
        html += '    <div><span class="badge badge-teal" style="margin-bottom:4px;">' + esc(sc.badge) + '</span><h2 class="card-title">' + esc(sc.title) + '</h2></div>';
        html += '    <div class="card-actions">' + actionButtons(tid) + '</div>';
        html += '  </div>';
        html += '  <div class="callout callout-gold"><div class="callout-title">🎤 考官實戰心法</div><div>' + esc(sc.coachTip) + '</div></div>';
        (sc.phrases || []).forEach(function (p) {
          html += '<div class="phrase-item">';
          html += '  <div>';
          html += '    <span class="badge badge-navy" style="margin-bottom:4px;">' + esc(p.level) + '</span>';
          html += '    <div class="phrase-en">' + renderCloze(p.en) + '</div>';
          html += '    <div class="phrase-zh">' + esc(p.zh) + '</div>';
          html += '  </div>';
          html += '  <div class="phrase-btns"><button class="btn btn-sm" data-copy="' + esc(p.en) + '">複製</button><button class="btn btn-sm" data-speak="' + esc(p.en) + '">🔊</button></div>';
          html += '</div>';
        });
        html += '</article>';
      });
    } else if (state.p4Section === "connectors") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">🔗 Paper 4 口語專用連接詞總表（自然對話 vs 生硬論文腔）</h2><span class="badge badge-teal">Spoken Discourse Markers</span></div>';
      html += '  <div class="callout callout-tip"><div class="callout-title">💡 口試高分關鍵差異</div><div>寫 Paper 2 適合用 Furthermore / Consequently / Nevertheless；但講 Paper 4 若每句都講 Furthermore 聽起來像背書！換上以下道地口語連接詞，語感立刻自然流暢兩個檔次！</div></div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>溝通功能</th><th>推薦自然口語連接詞</th><th>避坑提醒</th><th>考場示範句</th></tr></thead><tbody>';
      (data.connectors || []).forEach(function (c) {
        html += '<tr>';
        html += '  <td><strong>' + esc(c.func) + '</strong></td>';
        html += '  <td style="font-family:var(--font-serif);font-weight:700;color:var(--teal);">' + c.natural.map(function (n) { return '<div style="margin-bottom:3px;">• ' + esc(n) + '</div>'; }).join("") + '</td>';
        html += '  <td style="color:var(--crimson);font-size:0.82rem;">' + esc(c.avoid) + '</td>';
        html += '  <td style="font-family:var(--font-serif);">' + esc(c.example) + '<div style="margin-top:5px;"><button class="btn btn-sm" data-speak="' + esc(c.example) + '">🔊 試聽語調</button></div></td>';
        html += '</tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    } else if (state.p4Section === "ir") {
      var ir = data.irGuide || {};
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">⏱️ Part B 一分鐘 Individual Response（10-22-18-10 黃金藍圖）</h2></div>';
      html += '  <div class="grid-4" style="margin-bottom:14px;">';
      (ir.formula || []).forEach(function (f) {
        html += '<div class="stat-box"><span class="badge badge-teal">' + esc(f.sec) + '</span><h4 style="margin:8px 0 4px;font-size:0.9rem;">' + esc(f.stage) + '</h4><div style="font-size:0.82rem;color:var(--text-secondary);">' + esc(f.tip) + '</div></div>';
      });
      html += '  </div>';
      html += '</div>';

      (ir.types || []).forEach(function (tp) {
        html += '<div class="card">';
        html += '  <div class="card-header"><h3 class="card-title">' + esc(tp.type) + '</h3><div class="card-actions"><button class="btn btn-sm btn-navy" data-speak="' + esc(tp.sample) + '">🔊 聽 1 分鐘示範語速</button><button class="btn btn-sm" data-copy="' + esc(tp.sample) + '">複製講稿</button></div></div>';
        html += '  <div class="callout callout-info"><div class="callout-title">❓ 考官提問</div><div style="font-family:var(--font-serif);font-weight:700;">' + esc(tp.question) + '</div></div>';
        html += '  <div class="essay-box" style="margin-bottom:0;padding:16px 20px;font-size:0.96rem;">' + esc(tp.sample) + '</div>';
        html += '</div>';
      });
    } else if (state.p4Section === "chinglish") {
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title">🚫 港生 Paper 4 七大常見中式英語（Chinglish）急救表</h2><span class="badge badge-crimson">出口前先掃雷！</span></div>';
      html += '  <div class="table-wrap"><table><thead><tr><th>❌ 常見扣分講法</th><th>✅ 5** 地道修正</th><th>扣分原因</th></tr></thead><tbody>';
      (data.chinglishFixes || []).forEach(function (cf) {
        html += '<tr><td style="color:var(--crimson);font-family:var(--font-serif);">' + esc(cf.wrong) + '</td><td style="color:var(--emerald);font-weight:700;font-family:var(--font-serif);">' + esc(cf.right) + '</td><td>' + esc(cf.note) + '</td></tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    } else if (state.p4Section === "studio") {
      html += '<div id="p4TimerMount"></div>';
    }

    return html;
  }

  /* 7. 互動自測與收藏室視圖 */
  function buildPracticeView() {
    var html = "";
    html += '<section class="hero-banner">';
    html += '  <div class="hero-eyebrow">Self-Assessment &amp; Bookmarks · 本地自動保存</div>';
    html += '  <h1 class="hero-title">跨卷互動自測題庫與我的重點收藏室</h1>';
    html += '  <p class="hero-desc">即時檢測 Paper 2 格式與高階文法、Paper 3A 改口與串字陷阱、Paper 4 互動禮貌與中式英語排雷，並統一管理你在各頁星標收藏的弱項。</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn ' + (state.practiceTab === "quiz" ? "btn-primary" : "") + '" data-pr-main="quiz">🎯 14 題綜合陷阱自測</button>';
    html += '    <button class="btn ' + (state.practiceTab === "bookmarks" ? "btn-primary" : "") + '" data-pr-main="bookmarks">★ 我的重點收藏 (' + state.bookmarks.size + ')</button>';
    html += '  </div>';
    html += '</section>';

    if (state.practiceTab === "quiz") {
      html += '<div id="engQuizMount"></div>';
    } else {
      html += buildBookmarksPanel();
    }
    return html;
  }

  function buildBookmarksPanel() {
    var items = Array.from(state.bookmarks);
    if (!items.length) {
      return '<div class="card"><div style="text-align:center;padding:28px 12px;color:var(--text-muted);">目前尚未加入任何重點收藏。在任何文體格式、5** 範文、Paper 3A 題型、Paper 4 話術或自測題點擊 <strong>「☆ 收藏」</strong>，考前即可在此集中攻克！</div></div>';
    }
    var html = '<div class="card"><div class="card-header"><h2 class="card-title">★ 我的英文重點收藏清單（' + items.length + ' 項）</h2></div>';
    items.forEach(function (key) {
      var info = resolveBookmarkInfo(key);
      html += '<div class="phrase-item">';
      html += '  <div><span class="badge badge-amber" style="margin-bottom:4px;">' + esc(info.cat) + '</span><div style="font-weight:700;">' + esc(info.title) + '</div></div>';
      html += '  <div class="phrase-btns"><button class="btn btn-sm btn-navy" data-open-bm="' + esc(key) + '">前往溫習</button><button class="btn btn-sm" data-star="' + esc(key) + '">移除</button></div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function resolveBookmarkInfo(key) {
    var parts = key.split(":");
    var kind = parts[0], id = parts.slice(1).join(":");
    if (kind === "fmt") {
      var g = ((window.ENG_P2_FORMATS && window.ENG_P2_FORMATS.genres) || []).find(function (x) { return x.id === id; });
      return { cat: "Paper 2 格式", title: g ? g.name : id };
    }
    if (kind === "essay") {
      var e = (window.ENG_P2_ESSAYS || []).find(function (x) { return x.id === id; });
      return { cat: "Paper 2 5** 範文", title: e ? "[" + e.part + "] " + e.title : id };
    }
    if (kind === "p3a") {
      var t = ((window.ENG_P3A && window.ENG_P3A.questionTypes) || []).find(function (x) { return x.id === id; });
      return { cat: "Paper 3A 題型", title: t ? t.name : id };
    }
    if (kind === "p4") {
      var s = ((window.ENG_P4 && window.ENG_P4.giScenarios) || []).find(function (x) { return x.id === id; });
      return { cat: "Paper 4 口試話術", title: s ? s.title : id };
    }
    if (kind === "quiz") {
      var q = (window.ENG_QUIZZES || []).find(function (x) { return x.id === id; });
      return { cat: "自測錯題", title: q ? q.stem.slice(0, 68) + "…" : id };
    }
    return { cat: "收藏", title: key };
  }

  /* ========================================================================
     動態事件綁定
     ======================================================================== */
  function bindDynamicEvents(root) {
    root.querySelectorAll("[data-jump-view]").forEach(function (b) {
      b.addEventListener("click", function () { switchView(b.getAttribute("data-jump-view")); });
    });
    root.querySelectorAll("[data-master]").forEach(function (b) {
      b.addEventListener("click", function () { toggleMastered(b.getAttribute("data-master")); });
    });
    root.querySelectorAll("[data-star]").forEach(function (b) {
      b.addEventListener("click", function () { toggleBookmark(b.getAttribute("data-star")); });
    });
    root.querySelectorAll("[data-copy]").forEach(function (b) {
      b.addEventListener("click", function () { copyPlain(b.getAttribute("data-copy")); });
    });
    root.querySelectorAll("[data-speak]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (window.ENG_PRACTICE) {
          window.ENG_PRACTICE.speakText(b.getAttribute("data-speak"), function (playing) {
            b.textContent = playing ? "⏹ 停止朗讀" : (b.textContent.indexOf("試聽") >= 0 ? "🔊 試聽語調" : (b.textContent.indexOf("錄音") >= 0 ? "🔊 模擬朗讀錄音（純聽力測試）" : (b.textContent.indexOf("示範") >= 0 ? "🔊 聽 1 分鐘示範語速" : "🔊")));
          });
        }
      });
    });
    root.querySelectorAll("[data-speak-essay]").forEach(function (b) {
      b.addEventListener("click", function () {
        var eid = b.getAttribute("data-speak-essay");
        var cur = (window.ENG_P2_ESSAYS || []).find(function (e) { return e.id === eid; });
        if (!cur || !window.ENG_PRACTICE) return;
        var text = cur.paragraphs.map(function (p) { return p.text; }).join(". ");
        window.ENG_PRACTICE.speakText(text, function (playing) {
          b.textContent = playing ? "⏹ 停止朗讀" : "🔊 朗讀範文";
        });
      });
    });

    /* Cloze 遮蓋單個點擊揭曉 */
    root.querySelectorAll(".cloze-span").forEach(function (sp) {
      sp.addEventListener("click", function () {
        if (state.clozeMode) sp.classList.toggle("revealed");
      });
    });

    /* 範文 5** 標註互動 */
    var toggleHl = root.querySelector("#toggleHlBtn");
    if (toggleHl) {
      toggleHl.addEventListener("click", function () {
        state.highlight5ss = !state.highlight5ss;
        renderMain(false);
      });
    }
    root.querySelectorAll("[data-pick-essay]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.essayId = b.getAttribute("data-pick-essay");
        renderSidebar();
        renderMain(true);
      });
    });
    root.querySelectorAll(".hl-token").forEach(function (tok) {
      var showNote = function () {
        if (!state.highlight5ss) return;
        var note = tok.getAttribute("data-note");
        var eid = tok.getAttribute("data-eid");
        state.activeNoteText[eid] = note;
        var panel = document.getElementById("hlNotePanel");
        if (panel) panel.textContent = note;
      };
      tok.addEventListener("click", showNote);
      tok.addEventListener("mouseenter", showNote);
    });

    /* Phrases tabs & filters */
    root.querySelectorAll("[data-ptab-main]").forEach(function (b) {
      b.addEventListener("click", function () { state.phraseTab = b.getAttribute("data-ptab-main"); renderSidebar(); renderMain(true); });
    });
    root.querySelectorAll("[data-pcat-main]").forEach(function (b) {
      b.addEventListener("click", function () { state.phraseCat = b.getAttribute("data-pcat-main"); renderSidebar(); renderMain(false); });
    });

    /* Paper 3A toggles */
    root.querySelectorAll("[data-toggle-ts]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-toggle-ts");
        state.openTranscripts[id] = !state.openTranscripts[id];
        renderMain(false);
      });
    });
    root.querySelectorAll("[data-toggle-ans]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-toggle-ans");
        state.openAnswers[id] = !state.openAnswers[id];
        renderMain(false);
      });
    });

    /* Paper 4 tabs & timer mount */
    root.querySelectorAll("[data-p4-main]").forEach(function (b) {
      b.addEventListener("click", function () { state.p4Section = b.getAttribute("data-p4-main"); renderSidebar(); renderMain(true); });
    });
    var timerMount = root.querySelector("#p4TimerMount");
    if (timerMount && window.ENG_PRACTICE) {
      window.ENG_PRACTICE.renderSpeakingStudio(timerMount);
    }

    /* Practice tabs & quiz mount */
    root.querySelectorAll("[data-pr-main]").forEach(function (b) {
      b.addEventListener("click", function () { state.practiceTab = b.getAttribute("data-pr-main"); renderSidebar(); renderMain(true); });
    });
    var quizMount = root.querySelector("#engQuizMount");
    if (quizMount && window.ENG_PRACTICE) {
      window.ENG_PRACTICE.renderQuizModule(quizMount);
    }

    /* Bookmark deep-link */
    root.querySelectorAll("[data-open-bm]").forEach(function (b) {
      b.addEventListener("click", function () {
        var key = b.getAttribute("data-open-bm");
        var parts = key.split(":");
        var kind = parts[0], id = parts.slice(1).join(":");
        if (kind === "fmt") { state.formatId = id; switchView("p2formats"); }
        else if (kind === "essay") { state.essayId = id; switchView("p2essays"); }
        else if (kind === "p3a") { state.p3aId = id; switchView("p3a"); }
        else if (kind === "p4") { state.p4Section = "gi"; switchView("p4"); setTimeout(function () { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 60); }
        else if (kind === "quiz") { state.practiceTab = "quiz"; switchView("practice"); }
      });
    });
  }

  /* ========================================================================
     全站即時搜尋（支援快捷鍵 /）
     ======================================================================== */
  var searchIndex = [];
  function buildSearchIndex() {
    searchIndex = [];
    ((window.ENG_P2_FORMATS && window.ENG_P2_FORMATS.genres) || []).forEach(function (g) {
      searchIndex.push({
        cat: "P2 格式",
        title: g.name,
        snippet: g.register + " · " + g.summary,
        hay: (g.name + " " + g.summary + " " + g.register + " " + g.traps.join(" ") + " " + g.openers.join(" ")).toLowerCase(),
        go: function () { state.formatId = g.id; switchView("p2formats"); }
      });
    });
    (window.ENG_P2_ESSAYS || []).forEach(function (e) {
      searchIndex.push({
        cat: "5** 範文",
        title: "[" + e.part + "] " + e.title,
        snippet: e.genre + " · " + e.topicTag,
        hay: (e.title + " " + e.genre + " " + e.topicTag + " " + e.prompt + " " + e.paragraphs.map(function (p) { return p.text; }).join(" ")).toLowerCase(),
        go: function () { state.essayId = e.id; switchView("p2essays"); }
      });
    });
    ((window.ENG_P2_PHRASES && window.ENG_P2_PHRASES.categories) || []).forEach(function (c) {
      c.items.forEach(function (it) {
        searchIndex.push({
          cat: "P2 套話",
          title: it.en.replace(/\[\[|\]\]/g, "").slice(0, 72),
          snippet: it.zh,
          hay: (c.name + " " + it.en + " " + it.zh + " " + it.tag).toLowerCase(),
          go: function () { state.phraseTab = "bank"; state.phraseCat = c.id; switchView("p2phrases"); }
        });
      });
    });
    ((window.ENG_P2_PHRASES && window.ENG_P2_PHRASES.upgrades) || []).forEach(function (u) {
      searchIndex.push({
        cat: "句式升呢",
        title: u.skill,
        snippet: u.l5,
        hay: (u.skill + " " + u.l3 + " " + u.l5 + " " + u.why).toLowerCase(),
        go: function () { state.phraseTab = "upgrades"; switchView("p2phrases"); }
      });
    });
    ((window.ENG_P3A && window.ENG_P3A.questionTypes) || []).forEach(function (t) {
      searchIndex.push({
        cat: "Paper 3A",
        title: t.name,
        snippet: t.tasks + " · " + t.strategy.slice(0, 60),
        hay: (t.name + " " + t.strategy + " " + t.trapAlert + " " + t.transcript.map(function (l) { return l.line; }).join(" ")).toLowerCase(),
        go: function () { state.p3aId = t.id; switchView("p3a"); }
      });
    });
    ((window.ENG_P3A && window.ENG_P3A.spellingTraps) || []).forEach(function (sp) {
      searchIndex.push({
        cat: "3A 串字",
        title: sp.word,
        snippet: sp.tip,
        hay: (sp.word + " " + sp.trap + " " + sp.tip).toLowerCase(),
        go: function () { state.p3aId = "SPELLING"; switchView("p3a"); }
      });
    });
    ((window.ENG_P4 && window.ENG_P4.giScenarios) || []).forEach(function (sc) {
      searchIndex.push({
        cat: "P4 話術",
        title: sc.title,
        snippet: sc.coachTip.slice(0, 65),
        hay: (sc.title + " " + sc.coachTip + " " + sc.phrases.map(function (p) { return p.en + " " + p.zh; }).join(" ")).toLowerCase(),
        go: function () { state.p4Section = "gi"; switchView("p4"); setTimeout(function () { var el = document.getElementById(sc.id); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 60); }
      });
    });
    ((window.ENG_P4 && window.ENG_P4.connectors) || []).forEach(function (c) {
      searchIndex.push({
        cat: "P4 連接詞",
        title: c.func + " — " + c.natural.join(" / "),
        snippet: c.example,
        hay: (c.func + " " + c.natural.join(" ") + " " + c.example + " " + c.avoid).toLowerCase(),
        go: function () { state.p4Section = "connectors"; switchView("p4"); }
      });
    });
  }

  function initSearch() {
    buildSearchIndex();
    var input = document.getElementById("globalSearch");
    var panel = document.getElementById("searchResults");
    if (!input || !panel) return;

    function runQuery() {
      var q = input.value.trim().toLowerCase();
      if (!q) { panel.hidden = true; panel.innerHTML = ""; return; }
      var hits = searchIndex.filter(function (it) { return it.hay.indexOf(q) >= 0; }).slice(0, 12);
      if (!hits.length) {
        panel.innerHTML = '<div style="padding:12px;font-size:0.84rem;color:var(--text-muted);">找不到相關考點，試試搜尋「Editor」「Proposal」「倒裝」「Sceptical」「Having said that」</div>';
        panel.hidden = false;
        return;
      }
      panel.innerHTML = hits.map(function (h, i) {
        return '<button class="search-item" data-hit="' + i + '"><div class="search-item-top"><span class="search-cat">' + esc(h.cat) + '</span><span class="search-title">' + esc(h.title) + '</span></div><div class="search-snippet">' + esc(h.snippet) + '</div></button>';
      }).join("");
      panel.hidden = false;
      panel.querySelectorAll("[data-hit]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var h = hits[parseInt(btn.getAttribute("data-hit"), 10)];
          panel.hidden = true;
          input.value = "";
          if (h && h.go) h.go();
        });
      });
    }

    input.addEventListener("input", runQuery);
    input.addEventListener("focus", runQuery);
    document.addEventListener("click", function (ev) {
      if (!ev.target.closest("#searchWrap")) panel.hidden = true;
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        ev.preventDefault();
        input.focus();
      } else if (ev.key === "Escape") {
        panel.hidden = true;
        input.blur();
      }
    });
  }

  /* ========================================================================
     視圖切換、主題、遮蓋模式與行動版側欄
     ======================================================================== */
  function switchView(view) {
    state.view = view;
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === view);
    });
    renderSidebar();
    renderMain(true);
  }

  function closeMobileSidebar() {
    var sb = document.getElementById("sidebar");
    var bd = document.getElementById("sidebarBackdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.classList.remove("open");
  }

  function initControls() {
    /* Tabs */
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.addEventListener("click", function () { switchView(b.getAttribute("data-view")); });
    });
    var brand = document.getElementById("brandLink");
    if (brand) brand.addEventListener("click", function (e) { e.preventDefault(); switchView("overview"); });

    /* Open Bookmarks button */
    var ob = document.getElementById("openBookmarksBtn");
    if (ob) ob.addEventListener("click", function () { state.practiceTab = "bookmarks"; switchView("practice"); closeMobileSidebar(); });

    /* Cloze Mode Switch */
    document.querySelectorAll("[data-set-cloze]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var on = btn.getAttribute("data-set-cloze") === "on";
        state.clozeMode = on;
        document.documentElement.setAttribute("data-cloze", on ? "on" : "off");
        document.querySelectorAll("[data-set-cloze]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        if (on) showToast("🙈 已開啟「背誦遮蓋」：在套話與口試話術頁點擊黃色遮蓋即可核對！");
      });
    });

    /* Theme Toggle */
    var savedTheme = localStorage.getItem(KEY_THEME);
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem(KEY_THEME, next); } catch (e) {}
      });
    }

    /* Print */
    var printBtn = document.getElementById("printBtn");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

    /* Mobile Drawer */
    var menuBtn = document.getElementById("mobileMenuBtn");
    var sb = document.getElementById("sidebar");
    var bd = document.getElementById("sidebarBackdrop");
    if (menuBtn && sb && bd) {
      menuBtn.addEventListener("click", function () { sb.classList.toggle("open"); bd.classList.toggle("open"); });
      bd.addEventListener("click", closeMobileSidebar);
    }

    /* Back to top */
    var btt = document.getElementById("backToTop");
    if (btt) {
      window.addEventListener("scroll", function () { btt.classList.toggle("visible", window.scrollY > 360); });
      btt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }
  }

  /* 啟動應用程式 */
  document.addEventListener("DOMContentLoaded", function () {
    initControls();
    initSearch();
    updateProgressUI();
    renderSidebar();
    renderMain(false);
  });
})();
