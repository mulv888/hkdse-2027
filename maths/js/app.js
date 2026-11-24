/* ==========================================================================
   2027 HKDSE 數學必修奪星寶典 — 主應用程式控制器 (app.js)
   6 大視圖、12 大 Topic 連動分類、分步破題提示與 M/A 詳解、雙語切換、錯題本與全站搜尋
   ========================================================================== */

(function () {
  "use strict";

  var KEY_MASTERED = "dse2027_math_mastered";
  var KEY_BOOKMARKS = "dse2027_math_bookmarks";
  var KEY_THEME = "dse2027_math_theme";
  var KEY_LANG = "dse2027_math_lang";

  var state = {
    view: "overview",
    p2Topic: "ALL",
    p1Topic: "ALL",
    formulaTopic: "ALL",
    lang: localStorage.getItem(KEY_LANG) || "zh",
    mastered: new Set(loadJson(KEY_MASTERED, [])),
    bookmarks: new Set(loadJson(KEY_BOOKMARKS, [])),
    openHints: {},
    openSols: {}
  };

  function loadJson(key, fb) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; }
  }
  function saveSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (e) {}
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function rich(s) {
    return window.MATH_TEX ? window.MATH_TEX.rich(s) : esc(s);
  }
  function topicName(t) {
    if (!t) return "";
    if (state.lang === "en") return t.en;
    if (state.lang === "both") return t.zh + " (" + t.en + ")";
    return t.zh;
  }
  function findTopic(id) {
    return (window.MATH_TOPICS || []).find(function (t) { return t.id === id; });
  }

  /* 追蹤總項數：12 個 Topic 的 P2 技巧 ＋ 13 道 P1 難題 = 25 項 */
  function getTrackableIds() {
    var ids = [];
    (window.MATH_P2_TOPICS || []).forEach(function (t) { ids.push("p2:" + t.topicId); });
    (window.MATH_P1_HARD || []).forEach(function (p) { ids.push("p1:" + p.id); });
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
    if (cEl) cEl.textContent = "已攻克 " + done + " / " + total + " 項";
    if (bEl) bEl.textContent = "★ 錯題收藏 (" + state.bookmarks.size + ")";
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
    if (state.view !== "p2drill") renderMain(false);
  }

  window.MathAppAPI = {
    isStarred: function (id) { return state.bookmarks.has(id); },
    toggleStar: toggleBookmark
  };

  /* ========================================================================
     左側導航欄渲染
     ======================================================================== */
  function renderSidebar() {
    var nav = document.getElementById("sidebarNav");
    if (!nav) return;
    var html = "";

    if (state.view === "overview") {
      html += '<div class="sidebar-group-title">考試總覽導航</div>';
      [
        { id: "ov-papers", n: "01", label: "Paper 1 & 2 比重與配速" },
        { id: "ov-cutoffs", n: "02", label: "Level 4–5** 目標分數線" },
        { id: "ov-calc", n: "03", label: "Casio 計數機 Program 秘笈" },
        { id: "ov-topics", n: "04", label: "12 大 Topic 課題總地圖" }
      ].forEach(function (x) {
        html += '<button class="nav-item" data-scroll-id="' + x.id + '"><span class="nav-item-left"><span class="nav-num">' + x.n + '</span><span class="nav-label">' + esc(x.label) + '</span></span></button>';
      });
    } else if (state.view === "p2skills") {
      html += '<div class="sidebar-group-title">Paper 2 MC 秒殺技巧篩選</div>';
      html += '<button class="nav-item ' + (state.p2Topic === "UNIVERSAL" ? "active" : "") + '" data-p2-topic="UNIVERSAL"><span class="nav-item-left"><span class="nav-num">通法</span><span class="nav-label">八大跨課題秒殺通法</span></span></button>';
      html += '<button class="nav-item ' + (state.p2Topic === "ALL" ? "active" : "") + '" data-p2-topic="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">全部 12 大 Topic 技巧</span></span></button>';
      (window.MATH_TOPICS || []).forEach(function (t) {
        var done = state.mastered.has("p2:" + t.id);
        html += '<button class="nav-item ' + (state.p2Topic === t.id ? "active" : "") + '" data-p2-topic="' + t.id + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + t.code + '</span><span class="nav-label">' + esc(topicName(t)) + '</span></span>';
        html += '  <span class="nav-count">' + (done ? "✓" : "") + '</span>';
        html += '</button>';
      });
    } else if (state.view === "p1hard") {
      html += '<div class="sidebar-group-title">Paper 1 難題按 Topic 分類</div>';
      html += '<button class="nav-item ' + (state.p1Topic === "ALL" ? "active" : "") + '" data-p1-topic="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">全部 ' + (window.MATH_P1_HARD || []).length + ' 道壓軸難題</span></span></button>';
      (window.MATH_TOPICS || []).forEach(function (t) {
        var cnt = (window.MATH_P1_HARD || []).filter(function (p) { return p.topicId === t.id; }).length;
        if (!cnt) return;
        html += '<button class="nav-item ' + (state.p1Topic === t.id ? "active" : "") + '" data-p1-topic="' + t.id + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + t.code + '</span><span class="nav-label">' + esc(topicName(t)) + '</span></span>';
        html += '  <span class="nav-count">' + cnt + '題</span>';
        html += '</button>';
      });
    } else if (state.view === "p2drill") {
      html += '<div class="sidebar-group-title">MC 刷題按 Topic 過濾</div>';
      html += '<button class="nav-item" data-drill-side="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">全部 24 道精選 MC</span></span></button>';
      (window.MATH_TOPICS || []).forEach(function (t) {
        html += '<button class="nav-item" data-drill-side="' + t.id + '"><span class="nav-item-left"><span class="nav-num">' + t.code + '</span><span class="nav-label">' + esc(topicName(t)) + '</span></span></button>';
      });
    } else if (state.view === "formulas") {
      html += '<div class="sidebar-group-title">公式分類速跳</div>';
      html += '<button class="nav-item ' + (state.formulaTopic === "ALL" ? "active" : "") + '" data-fm-topic="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">顯示全部核心公式</span></span></button>';
      (window.MATH_FORMULAS || []).forEach(function (f) {
        var t = findTopic(f.topicId);
        html += '<button class="nav-item ' + (state.formulaTopic === f.topicId ? "active" : "") + '" data-fm-topic="' + f.topicId + '"><span class="nav-item-left"><span class="nav-num">' + (t ? t.code : "") + '</span><span class="nav-label">' + esc(f.title) + '</span></span></button>';
      });
    } else if (state.view === "bookmarks") {
      html += '<div class="sidebar-group-title">我的錯題本與收藏</div>';
      html += '<div style="padding:10px;font-size:0.83rem;color:var(--text-muted);">已收藏 <strong>' + state.bookmarks.size + '</strong> 個重點項目。建議考前兩星期每天重做收藏中的 Paper 1 壓軸與 Paper 2 易錯 MC！</div>';
    }

    nav.innerHTML = html;
    nav.querySelectorAll("[data-scroll-id]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.getAttribute("data-scroll-id"));
        if (el) el.scrollIntoView({ behavior: "smooth" });
        closeMobileDrawer();
      });
    });
    nav.querySelectorAll("[data-p2-topic]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p2Topic = b.getAttribute("data-p2-topic");
        renderSidebar(); renderMain(true); closeMobileDrawer();
      });
    });
    nav.querySelectorAll("[data-p1-topic]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p1Topic = b.getAttribute("data-p1-topic");
        renderSidebar(); renderMain(true); closeMobileDrawer();
      });
    });
    nav.querySelectorAll("[data-drill-side]").forEach(function (b) {
      b.addEventListener("click", function () {
        var main = document.getElementById("mainContent");
        window.MathDrillEngine.render(main, { topicId: b.getAttribute("data-drill-side") });
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMobileDrawer();
      });
    });
    nav.querySelectorAll("[data-fm-topic]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.formulaTopic = b.getAttribute("data-fm-topic");
        renderSidebar(); renderMain(true); closeMobileDrawer();
      });
    });
  }

  /* ========================================================================
     視圖 1：考試總覽與計數機攻略
     ======================================================================== */
  function renderOverview() {
    var m = window.MATH_META;
    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">2027 HKDSE Mathematics Compulsory Part · 5** 奪星攻略</div>';
    html += '  <h1 class="hero-title">2027 HKDSE 數學必修部分全攻略</h1>';
    html += '  <p class="hero-desc">' + rich(m.intro) + '</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn btn-primary" data-jump-view="p2skills">Paper 2 MC 秒殺技巧大全 →</button>';
    html += '    <button class="btn btn-crimson" data-jump-view="p1hard">Paper 1 壓軸難題精練</button>';
    html += '    <button class="btn" data-jump-view="p2drill">Paper 2 限時刷題</button>';
    html += '    <button class="btn" data-jump-view="formulas">5** 核心公式表</button>';
    html += '  </div>';
    html += '</div>';

    /* 試卷結構 */
    html += '<div class="card" id="ov-papers"><div class="card-header"><h2 class="card-title">一、卷一與卷二考評比重及黃金時間分配</h2></div><div class="grid-2">';
    (m.papers || []).forEach(function (p) {
      html += '<div class="stat-box">';
      html += '  <div style="font-size:0.78rem;font-weight:700;color:var(--text-muted);">' + esc(p.duration) + ' · 滿分 ' + esc(p.total) + '</div>';
      html += '  <div class="stat-val">' + esc(p.name) + '（' + esc(p.weight) + '）</div>';
      p.breakdown.forEach(function (b) {
        html += '<div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--border-strong);">';
        html += '  <div style="font-weight:800;font-size:0.88rem;color:var(--indigo);">' + esc(b.part) + '</div>';
        html += '  <div style="font-size:0.78rem;font-weight:700;color:var(--amber);margin:2px 0;">⏱ ' + esc(b.time) + '</div>';
        html += '  <div style="font-size:0.84rem;color:var(--text-secondary);">' + esc(b.tip) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    });
    html += '</div></div>';

    /* 目標分數線 */
    html += '<div class="card" id="ov-cutoffs"><div class="card-header"><h2 class="card-title">二、歷年 HKDSE 數學目標分數線參考（Cut-off Benchmarks）</h2></div>';
    html += '<div class="table-wrap"><table><thead><tr><th>目標等級</th><th>總分百分比參考</th><th>Paper 1 建議目標</th><th>Paper 2 建議目標</th><th>奪星實戰策略</th></tr></thead><tbody>';
    (m.cutoffs || []).forEach(function (c) {
      html += '<tr><td><span class="badge badge-teal">' + esc(c.grade) + '</span></td><td style="font-weight:800;">' + esc(c.pct) + '</td><td>' + esc(c.p1) + '</td><td>' + esc(c.p2) + '</td><td>' + esc(c.note) + '</td></tr>';
    });
    html += '</tbody></table></div></div>';

    /* Casio 計數機攻略 */
    html += '<div class="card" id="ov-calc"><div class="card-header"><h2 class="card-title">三、Casio fx-50FH II / fx-3650P II 必備四大 Program 與內置模式攻略</h2></div>';
    html += '<div class="grid-2">';
    (m.calculatorGuide || []).forEach(function (g) {
      html += '<div class="stat-box">';
      html += '  <div style="font-weight:800;color:var(--teal);margin-bottom:4px;">' + esc(g.name) + '</div>';
      html += '  <div style="font-size:0.84rem;margin-bottom:8px;"><strong>功能：</strong>' + rich(g.use) + '</div>';
      html += '  <div class="callout callout-hack" style="margin:0;padding:8px 12px;font-size:0.82rem;">' + rich(g.usageTip) + '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    /* 12 大 Topic 地圖 */
    html += '<div class="card" id="ov-topics"><div class="card-header"><h2 class="card-title">四、12 大 Topic 課題總地圖（一鍵直達 Paper 2 技巧或 Paper 1 難題）</h2></div>';
    html += '<div class="grid-3">';
    (window.MATH_TOPICS || []).forEach(function (t) {
      var p1Cnt = (window.MATH_P1_HARD || []).filter(function (x) { return x.topicId === t.id; }).length;
      html += '<div class="stat-box">';
      html += '  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;"><span class="badge badge-teal">' + t.code + '</span><span class="badge badge-amber">' + esc(t.section) + '</span></div>';
      html += '  <div style="font-weight:800;font-size:0.96rem;">' + esc(t.zh) + '</div>';
      html += '  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:10px;">' + esc(t.en) + '</div>';
      html += '  <div style="display:flex;gap:6px;flex-wrap:wrap;">';
      html += '    <button class="btn btn-amber" style="padding:4px 9px;font-size:0.76rem;" data-open-p2="' + t.id + '">⚡ P2 秒殺技巧</button>';
      html += '    <button class="btn btn-crimson" style="padding:4px 9px;font-size:0.76rem;" data-open-p1="' + t.id + '">🔥 P1 難題 (' + p1Cnt + ')</button>';
      html += '  </div>';
      html += '</div>';
    });
    html += '</div></div>';
    return html;
  }

  /* ========================================================================
     視圖 2：Paper 2 MC 秒殺技巧（八大通法 ＋ 按 12 大 Topic 分類）
     ======================================================================== */
  function renderP2Skills() {
    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 2 速度與準確率核心 · 75 分鐘攻克 45 題</div>';
    html += '  <h1 class="hero-title">Paper 2 MC 秒殺技巧與做題方法大全</h1>';
    html += '  <p class="hero-desc">先掌握<strong>八大跨課題秒殺通法</strong>，再逐一攻破按 <strong>12 大 Topic</strong> 系統分類的「傳統解法 vs ⚡ MC 秒殺法」與考評局干擾選項陷阱！</p>';
    html += '</div>';

    html += '<div class="filter-bar">';
    html += '  <button class="chip-btn ' + (state.p2Topic === "ALL" ? "active" : "") + '" data-p2-chip="ALL">全部顯示</button>';
    html += '  <button class="chip-btn ' + (state.p2Topic === "UNIVERSAL" ? "active" : "") + '" data-p2-chip="UNIVERSAL">★ 八大跨課題通法</button>';
    (window.MATH_TOPICS || []).forEach(function (t) {
      html += '<button class="chip-btn ' + (state.p2Topic === t.id ? "active" : "") + '" data-p2-chip="' + t.id + '">' + t.code + ' ' + esc(t.zh) + '</button>';
    });
    html += '</div>';

    if (state.p2Topic === "ALL" || state.p2Topic === "UNIVERSAL") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">⚡ 八大跨課題 Paper 2 MC 秒殺通法（Universal MC Hacks）</h2></div>';
      html += '<div class="grid-2">';
      (window.MATH_P2_UNIVERSAL || []).forEach(function (u) {
        html += '<div class="stat-box">';
        html += '  <div style="font-weight:800;font-size:1rem;color:var(--teal);">' + esc(u.name) + '</div>';
        html += '  <div style="font-size:0.77rem;color:var(--text-muted);margin-bottom:8px;">' + esc(u.en) + '</div>';
        html += '  <div style="font-size:0.84rem;margin-bottom:8px;"><strong>適用題型：</strong>' + rich(u.when) + '</div>';
        html += '  <div style="font-size:0.84rem;margin-bottom:8px;"><strong>實戰步驟：</strong><br>' + rich(u.steps) + '</div>';
        html += '  <div class="callout callout-hack" style="margin:0;padding:8px 12px;font-size:0.82rem;">' + rich(u.demo) + '</div>';
        html += '</div>';
      });
      html += '</div></div>';
    }

    if (state.p2Topic !== "UNIVERSAL") {
      var list = state.p2Topic === "ALL"
        ? (window.MATH_P2_TOPICS || [])
        : (window.MATH_P2_TOPICS || []).filter(function (x) { return x.topicId === state.p2Topic; });

      list.forEach(function (tp) {
        var meta = findTopic(tp.topicId);
        var mid = "p2:" + tp.topicId;
        var isDone = state.mastered.has(mid);
        var isStar = state.bookmarks.has(mid);
        html += '<div class="card" id="p2card-' + tp.topicId + '">';
        html += '  <div class="card-header">';
        html += '    <div>';
        html += '      <div style="display:flex;gap:7px;align-items:center;margin-bottom:4px;"><span class="badge badge-teal">' + (meta ? meta.code : "") + '</span><span class="badge badge-amber">' + esc(meta ? meta.section : "") + '</span></div>';
        html += '      <h2 class="card-title">' + esc(topicName(meta)) + '</h2>';
        html += '    </div>';
        html += '    <div style="display:flex;gap:7px;flex-wrap:wrap;">';
        html += '      <button class="btn btn-done ' + (isDone ? "is-active" : "") + '" data-toggle-done="' + mid + '">' + (isDone ? "✓ 已掌握技巧" : "○ 標記掌握") + '</button>';
        html += '      <button class="btn btn-star ' + (isStar ? "is-active" : "") + '" data-toggle-star="' + mid + '">' + (isStar ? "★ 已收藏" : "☆ 收藏") + '</button>';
        html += '      <button class="btn" data-jump-drill="' + tp.topicId + '">去刷本課 MC →</button>';
        html += '    </div>';
        html += '  </div>';
        html += '  <p style="margin:0 0 14px;font-size:0.89rem;color:var(--text-secondary);"><strong>考情分佈：</strong>' + esc(tp.summary) + '</p>';

        (tp.skills || []).forEach(function (sk) {
          html += '<div style="background:var(--bg-paper);border:1px solid var(--border);border-radius:10px;padding:16px 18px;margin-bottom:14px;">';
          html += '  <div style="font-weight:800;font-size:0.98rem;color:var(--indigo);margin-bottom:10px;">' + rich(sk.title) + '</div>';
          html += '  <div class="grid-2">';
          html += '    <div class="callout callout-info" style="margin:0;"><div class="callout-title">🐢 傳統常規痛點</div><div>' + rich(sk.traditional) + '</div></div>';
          html += '    <div class="callout callout-hack" style="margin:0;"><div class="callout-title">⚡ Paper 2 秒殺絕技</div><div>' + rich(sk.hack) + '</div></div>';
          html += '  </div>';
          html += '  <div class="callout callout-trap" style="margin:10px 0 0;"><div class="callout-title">⚠️ 高危失分陷阱</div><div>' + rich(sk.trap) + '</div></div>';
          html += '</div>';
        });
        html += '</div>';
      });
    }
    return html;
  }

  /* ========================================================================
     視圖 3：Paper 1 難題合集與精解（按 Topic 分類 ＋ 兩階段提示與 M/A 詳解）
     ======================================================================== */
  function renderP1ProblemCard(p, idxLabel) {
    var meta = findTopic(p.topicId);
    var pid = "p1:" + p.id;
    var isDone = state.mastered.has(pid);
    var isStar = state.bookmarks.has(pid);
    var showHint = !!state.openHints[p.id];
    var showSol = !!state.openSols[p.id];

    var html = '<div class="problem-card" id="prob-' + p.id + '">';
    html += '  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:8px;">';
    html += '    <div>';
    html += '      <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;">';
    html += '        <span class="badge badge-teal">' + (meta ? meta.code + " " + esc(topicName(meta)) : p.topicId) + '</span>';
    html += '        <span class="badge badge-crimson">' + esc(p.level) + '</span>';
    html += '        <span class="badge badge-amber">' + esc(p.stars) + '</span>';
    html += '      </div>';
    html += '      <h2 style="margin:0;font-size:1.15rem;font-weight:800;">' + esc(idxLabel) + esc(p.title) + '</h2>';
    html += '    </div>';
    html += '    <div style="display:flex;gap:6px;flex-wrap:wrap;">';
    html += '      <button class="btn btn-done ' + (isDone ? "is-active" : "") + '" data-toggle-done="' + pid + '">' + (isDone ? "✓ 已攻克" : "○ 標記已攻克") + '</button>';
    html += '      <button class="btn btn-star ' + (isStar ? "is-active" : "") + '" data-toggle-star="' + pid + '">' + (isStar ? "★ 已入錯題本" : "☆ 加入錯題本") + '</button>';
    html += '    </div>';
    html += '  </div>';

    if (p.diagram && window.MATH_SVG && window.MATH_SVG[p.diagram]) {
      html += window.MATH_SVG[p.diagram]();
    }

    html += '  <div class="problem-stem">' + rich(p.stem) + '</div>';

    html += '  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">';
    html += '    <button class="btn btn-amber" data-toggle-hint="' + p.id + '">' + (showHint ? "🙈 收起破題思路" : "💡 顯示破題思路（不劇透答案）") + '</button>';
    html += '    <button class="btn btn-primary" data-toggle-sol="' + p.id + '">' + (showSol ? "▲ 收起完整評分詳解" : "📝 展開完整步驟與 M/A 給分詳解") + '</button>';
    html += '  </div>';

    if (showHint) {
      html += '<div class="callout callout-hack" style="margin-top:12px;">';
      html += '  <div class="callout-title">💡 破題思維引導</div>';
      html += '  <div>' + rich(p.hint) + '</div>';
      html += '</div>';
    }

    if (showSol) {
      html += '<div style="margin-top:14px;padding-top:12px;border-top:1px dashed var(--border-strong);">';
      html += '  <div style="font-weight:800;color:var(--teal);margin-bottom:8px;">📝 完整步驟與 Marking Scheme 給分要點</div>';
      (p.steps || []).forEach(function (st) {
        html += '<div class="step-block">';
        html += '  <div style="font-weight:800;font-size:0.9rem;margin-bottom:4px;">' + rich(st.label) + '<span class="mark-tag">' + esc(st.marks) + '</span></div>';
        html += '  <div style="font-size:0.9rem;">' + rich(st.body) + '</div>';
        html += '</div>';
      });
      html += '  <div class="callout callout-trap" style="margin-bottom:0;"><div class="callout-title">⚠️ 考評報告常見扣分雷區</div><div>' + rich(p.trap) + '</div></div>';
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function renderP1Hard() {
    var list = window.MATH_P1_HARD || [];
    var filtered = state.p1Topic === "ALL" ? list : list.filter(function (p) { return p.topicId === state.p1Topic; });

    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 1 Section A(2) &amp; Section B 奪星題庫 · 佔全科 65%</div>';
    html += '  <h1 class="hero-title">Paper 1 難題合集練習與 Marking Scheme 精解</h1>';
    html += '  <p class="hero-desc">嚴格按 <strong>12 大 Topic</strong> 分類收錄 13 道高含金量長題目（涵蓋三次多項式實根論證、配方法複合變換、對數線性化、銀行按揭等比數列、條件概率陷阱、四心全貫通、3D 三垂線定理與平截頭體注水）。建議先自己動筆，卡關時點開<strong>「破題思路」</strong>，最後核對<strong>「M/A 步驟給分點」</strong>！</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn" id="expandAllSolsBtn">展開全部解析（方便列印）</button>';
    html += '    <button class="btn" id="collapseAllSolsBtn">收起全部解析（純做題模式）</button>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="filter-bar">';
    html += '  <button class="chip-btn ' + (state.p1Topic === "ALL" ? "active" : "") + '" data-p1-chip="ALL">全部 Topic (' + list.length + ' 題)</button>';
    (window.MATH_TOPICS || []).forEach(function (t) {
      var cnt = list.filter(function (p) { return p.topicId === t.id; }).length;
      if (!cnt) return;
      html += '<button class="chip-btn ' + (state.p1Topic === t.id ? "active" : "") + '" data-p1-chip="' + t.id + '">' + t.code + ' ' + esc(t.zh) + ' (' + cnt + ')</button>';
    });
    html += '</div>';

    filtered.forEach(function (p, i) {
      html += renderP1ProblemCard(p, "難題 " + (i + 1) + "｜");
    });

    return html;
  }

  /* ========================================================================
     視圖 5：5** 核心公式與必背性質速查表
     ======================================================================== */
  function renderFormulas() {
    var list = state.formulaTopic === "ALL"
      ? (window.MATH_FORMULAS || [])
      : (window.MATH_FORMULAS || []).filter(function (f) { return f.topicId === state.formulaTopic; });

    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">考卷不會印出來的 5** 必背武器庫</div>';
    html += '  <h1 class="hero-title">HKDSE 數學核心公式與必背性質總表</h1>';
    html += '  <p class="hero-desc">完整歸納立方和差、韋達定理、對數換底與線性化、圓與軌跡五大形態、四心坐標性質、正餘弦與統計線性變換法則，點擊右上角列印按鈕即可輸出 A4 考前速查紙！</p>';
    html += '</div>';

    list.forEach(function (grp) {
      var meta = findTopic(grp.topicId);
      html += '<div class="card">';
      html += '  <div class="card-header"><h2 class="card-title"><span class="badge badge-teal">' + (meta ? meta.code : "") + '</span> ' + esc(grp.title) + '</h2></div>';
      grp.items.forEach(function (it) {
        html += '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px dashed var(--border);">';
        html += '  <div style="font-weight:800;font-size:0.93rem;color:var(--indigo);margin-bottom:4px;">' + rich(it.name) + '</div>';
        html += window.MATH_TEX.display(it.tex);
        html += '  <div style="font-size:0.85rem;color:var(--text-secondary);">' + rich(it.note) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    });
    return html;
  }

  /* ========================================================================
     視圖 6：錯題本與重點收藏
     ======================================================================== */
  function renderBookmarks() {
    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">個人專屬弱點攻克清單</div>';
    html += '  <h1 class="hero-title">★ 錯題本與重點收藏複習室</h1>';
    html += '  <p class="hero-desc">所有標記了「★ 收藏」的 Paper 1 壓軸難題、Paper 2 MC 易錯題與課題秒殺技巧都會匯集於此，方便考前集中重做！</p>';
    html += '</div>';

    if (state.bookmarks.size === 0) {
      html += '<div class="card"><p style="margin:0;color:var(--text-muted);">目前尚未收藏任何題目或課題技巧。您可以在「Paper 1 難題合集」、「Paper 2 限時刷題」或「Paper 2 秒殺技巧」中點擊「☆ 收藏」加入這裡！</p></div>';
      return html;
    }

    var p1Saved = (window.MATH_P1_HARD || []).filter(function (p) { return state.bookmarks.has("p1:" + p.id); });
    var mcSaved = (window.MATH_P2_DRILL || []).filter(function (q) { return state.bookmarks.has("mc:" + q.id); });
    var p2Saved = (window.MATH_P2_TOPICS || []).filter(function (t) { return state.bookmarks.has("p2:" + t.topicId); });

    if (p1Saved.length) {
      html += '<h2 style="margin:10px 0 14px;font-size:1.15rem;">🔥 已收藏的 Paper 1 壓軸難題（' + p1Saved.length + ' 題）</h2>';
      p1Saved.forEach(function (p, i) { html += renderP1ProblemCard(p, "收藏 #" + (i + 1) + "｜"); });
    }
    if (mcSaved.length) {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">⚡ 已收藏的 Paper 2 易錯 MC（' + mcSaved.length + ' 題）</h2></div>';
      mcSaved.forEach(function (q) {
        html += '<div class="stat-box" style="margin-bottom:12px;">';
        html += '  <div style="font-weight:700;margin-bottom:6px;">' + rich(q.q) + '</div>';
        html += '  <div style="font-size:0.86rem;color:var(--emerald);font-weight:700;margin-bottom:4px;">正解：' + rich(q.opts[q.ans]) + '</div>';
        html += '  <div class="callout callout-hack" style="margin:6px 0 0;padding:8px 12px;font-size:0.84rem;">' + rich(q.hack) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }
    if (p2Saved.length) {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">📘 已收藏的 Paper 2 課題秒殺攻略（' + p2Saved.length + ' 課）</h2></div><div class="filter-bar">';
      p2Saved.forEach(function (t) {
        var meta = findTopic(t.topicId);
        html += '<button class="btn btn-amber" data-open-p2="' + t.topicId + '">' + (meta ? meta.code + " " + esc(meta.zh) : t.topicId) + ' →</button>';
      });
      html += '</div></div>';
    }

    return html;
  }

  /* ========================================================================
     主視圖統籌與事件綁定
     ======================================================================== */
  function renderMain(scrollTop) {
    var main = document.getElementById("mainContent");
    if (!main) return;

    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === state.view);
    });

    if (state.view === "p2drill") {
      window.MathDrillEngine.render(main);
      if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    var html = "";
    if (state.view === "overview") html = renderOverview();
    else if (state.view === "p2skills") html = renderP2Skills();
    else if (state.view === "p1hard") html = renderP1Hard();
    else if (state.view === "formulas") html = renderFormulas();
    else if (state.view === "bookmarks") html = renderBookmarks();

    main.innerHTML = html;
    bindMainEvents(main);
    if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindMainEvents(main) {
    main.querySelectorAll("[data-jump-view]").forEach(function (b) {
      b.addEventListener("click", function () { navigateTo(b.getAttribute("data-jump-view")); });
    });
    main.querySelectorAll("[data-open-p2]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p2Topic = b.getAttribute("data-open-p2");
        navigateTo("p2skills");
      });
    });
    main.querySelectorAll("[data-open-p1]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p1Topic = b.getAttribute("data-open-p1");
        navigateTo("p1hard");
      });
    });
    main.querySelectorAll("[data-jump-drill]").forEach(function (b) {
      b.addEventListener("click", function () {
        window.MathDrillEngine.setTopic(b.getAttribute("data-jump-drill"));
        navigateTo("p2drill");
      });
    });
    main.querySelectorAll("[data-p2-chip]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p2Topic = b.getAttribute("data-p2-chip");
        renderSidebar(); renderMain(false);
      });
    });
    main.querySelectorAll("[data-p1-chip]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.p1Topic = b.getAttribute("data-p1-chip");
        renderSidebar(); renderMain(false);
      });
    });
    main.querySelectorAll("[data-toggle-done]").forEach(function (b) {
      b.addEventListener("click", function () { toggleMastered(b.getAttribute("data-toggle-done")); });
    });
    main.querySelectorAll("[data-toggle-star]").forEach(function (b) {
      b.addEventListener("click", function () { toggleBookmark(b.getAttribute("data-toggle-star")); });
    });
    main.querySelectorAll("[data-toggle-hint]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-toggle-hint");
        state.openHints[id] = !state.openHints[id];
        renderMain(false);
      });
    });
    main.querySelectorAll("[data-toggle-sol]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-toggle-sol");
        state.openSols[id] = !state.openSols[id];
        renderMain(false);
      });
    });

    var expBtn = main.querySelector("#expandAllSolsBtn");
    if (expBtn) {
      expBtn.addEventListener("click", function () {
        (window.MATH_P1_HARD || []).forEach(function (p) { state.openHints[p.id] = true; state.openSols[p.id] = true; });
        renderMain(false);
      });
    }
    var colBtn = main.querySelector("#collapseAllSolsBtn");
    if (colBtn) {
      colBtn.addEventListener("click", function () {
        state.openHints = {}; state.openSols = {};
        renderMain(false);
      });
    }
  }

  function navigateTo(view) {
    state.view = view || "overview";
    renderSidebar();
    renderMain(true);
  }

  /* 全站即時搜尋索引 */
  function buildSearchIndex() {
    var idx = [];
    (window.MATH_P2_UNIVERSAL || []).forEach(function (u) {
      idx.push({ cat: "P2 通法", title: u.name, text: u.when + " " + u.steps + " " + u.demo, go: function () { state.p2Topic = "UNIVERSAL"; navigateTo("p2skills"); } });
    });
    (window.MATH_P2_TOPICS || []).forEach(function (t) {
      var meta = findTopic(t.topicId);
      var txt = t.summary + " " + (t.skills || []).map(function (s) { return s.title + " " + s.hack + " " + s.trap; }).join(" ");
      idx.push({ cat: "P2 技巧", title: (meta ? meta.code + " " + meta.zh + " (" + meta.en + ")" : t.topicId), text: txt, go: function () { state.p2Topic = t.topicId; navigateTo("p2skills"); } });
    });
    (window.MATH_P1_HARD || []).forEach(function (p) {
      var meta = findTopic(p.topicId);
      idx.push({ cat: "P1 難題", title: p.title + "（" + (meta ? meta.zh : "") + "）", text: p.stem + " " + p.hint + " " + p.trap, go: function () { state.p1Topic = p.topicId; state.openSols[p.id] = true; navigateTo("p1hard"); } });
    });
    (window.MATH_FORMULAS || []).forEach(function (f) {
      idx.push({ cat: "核心公式", title: f.title, text: f.items.map(function (i) { return i.name + " " + i.note; }).join(" "), go: function () { state.formulaTopic = f.topicId; navigateTo("formulas"); } });
    });
    return idx;
  }

  function closeMobileDrawer() {
    var sb = document.getElementById("sidebar");
    var bd = document.getElementById("sidebarBackdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.classList.remove("open");
  }

  function init() {
    var savedTheme = localStorage.getItem(KEY_THEME);
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-lang") === state.lang);
      b.addEventListener("click", function () {
        state.lang = b.getAttribute("data-set-lang");
        try { localStorage.setItem(KEY_LANG, state.lang); } catch (e) {}
        document.querySelectorAll(".lang-btn").forEach(function (x) { x.classList.toggle("active", x.getAttribute("data-set-lang") === state.lang); });
        renderSidebar(); renderMain(false);
      });
    });

    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.addEventListener("click", function () { navigateTo(b.getAttribute("data-view")); });
    });

    var brand = document.getElementById("brandLink");
    if (brand) brand.addEventListener("click", function (e) { e.preventDefault(); navigateTo("overview"); });

    var openBm = document.getElementById("openBookmarksBtn");
    if (openBm) openBm.addEventListener("click", function () { navigateTo("bookmarks"); closeMobileDrawer(); });

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem(KEY_THEME, next); } catch (e) {}
      });
    }

    var printBtn = document.getElementById("printBtn");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

    var menuBtn = document.getElementById("mobileMenuBtn");
    var backdrop = document.getElementById("sidebarBackdrop");
    if (menuBtn) menuBtn.addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("open");
      backdrop.classList.toggle("open");
    });
    if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);

    var btt = document.getElementById("backToTop");
    window.addEventListener("scroll", function () { if (btt) btt.classList.toggle("visible", window.scrollY > 360); });
    if (btt) btt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    /* 全站搜尋 */
    var sIndex = buildSearchIndex();
    var sInp = document.getElementById("globalSearch");
    var sRes = document.getElementById("searchResults");
    if (sInp && sRes) {
      sInp.addEventListener("input", function () {
        var q = sInp.value.trim().toLowerCase();
        if (!q) { sRes.hidden = true; return; }
        var hits = sIndex.filter(function (it) {
          return it.title.toLowerCase().indexOf(q) !== -1 || it.text.toLowerCase().indexOf(q) !== -1;
        }).slice(0, 12);
        if (!hits.length) {
          sRes.innerHTML = '<div style="padding:12px;font-size:0.84rem;color:var(--text-muted);">找不到相符內容，請試試搜尋：四心、圓方程、3D、對數、AS、線性規劃、代數字…</div>';
          sRes.hidden = false; return;
        }
        sRes.innerHTML = hits.map(function (h, i) {
          return '<button class="search-item" data-sidx="' + i + '"><div class="search-item-top"><span class="search-cat">' + esc(h.cat) + '</span><span class="search-title">' + esc(h.title) + '</span></div></button>';
        }).join("");
        sRes.hidden = false;
        sRes.querySelectorAll(".search-item").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var c = hits[parseInt(btn.getAttribute("data-sidx"), 10)];
            sRes.hidden = true; sInp.value = "";
            if (c && c.go) c.go();
          });
        });
      });
      document.addEventListener("click", function (e) {
        if (!document.getElementById("searchWrap").contains(e.target)) sRes.hidden = true;
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "/" && document.activeElement !== sInp && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
          e.preventDefault(); sInp.focus();
        } else if (e.key === "l" || e.key === "L") {
          if (!/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
            var order = ["zh", "both", "en"];
            state.lang = order[(order.indexOf(state.lang) + 1) % 3];
            try { localStorage.setItem(KEY_LANG, state.lang); } catch (err) {}
            document.querySelectorAll(".lang-btn").forEach(function (x) { x.classList.toggle("active", x.getAttribute("data-set-lang") === state.lang); });
            renderSidebar(); renderMain(false);
          }
        } else if (e.key === "Escape") { sRes.hidden = true; }
      });
    }

    updateProgressUI();
    renderSidebar();
    renderMain(false);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
