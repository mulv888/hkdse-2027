/* ==========================================================================
   2027 HKDSE 中國語文複習寶典 — 主應用程式控制器 (app.js)
   視圖路由、十二篇古白對照閱讀器、字詞遮罩自測、全站即時搜尋、進度與收藏記憶
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_DONE = "dse2027_chi_done_v1";
  var STORAGE_STAR = "dse2027_chi_star_v1";
  var STORAGE_THEME = "dse2027_chi_theme_v1";
  var STORAGE_MODE = "dse2027_chi_readmode_v1";

  var state = {
    view: "overview",
    subId: null,
    lexCat: "polysemy",
    lexQuery: "",
    lexMask: false,
    ppYear: "ALL",
    onlyStarred: false,
    doneMap: loadJson(STORAGE_DONE, {}),
    starMap: loadJson(STORAGE_STAR, {})
  };

  function loadJson(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJson(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* 收集所有可追蹤溫習進度的核心單元（16篇經典作品 ＋ 7大實用文 ＋ 2大長文體裁 ＝ 25個核心單元） */
  function getTrackableItems() {
    var list = [];
    (window.CHI_CLASSICS || []).forEach(function (c) {
      list.push({ id: "cls:" + c.id, view: "classics", subId: c.id, label: c.num + " " + c.title });
    });
    ((window.CHI_PRACTICAL && window.CHI_PRACTICAL.genres) || []).forEach(function (g) {
      list.push({ id: "prac:" + g.id, view: "practical", subId: g.id, label: g.name });
    });
    list.push({ id: "p2:narrative", view: "narrative", subId: "top", label: "卷二乙：記敘抒情寫作" });
    list.push({ id: "p2:argumentative", view: "argumentative", subId: "top", label: "卷二乙：議論文思辨寫作" });
    return list;
  }

  function updateProgressUI() {
    var items = getTrackableItems();
    var total = items.length || 1;
    var doneCount = 0;
    var starCount = 0;
    items.forEach(function (it) {
      if (state.doneMap[it.id]) doneCount++;
      if (state.starMap[it.id]) starCount++;
    });
    var pct = Math.round((doneCount / total) * 100);
    var pctEl = document.getElementById("masteryPct");
    var fillEl = document.getElementById("masteryFill");
    var countEl = document.getElementById("masteryCount");
    var starBtn = document.getElementById("filterBookmarksBtn");
    if (pctEl) pctEl.textContent = pct + "%";
    if (fillEl) fillEl.style.width = pct + "%";
    if (countEl) countEl.textContent = "已掌握 " + doneCount + " / " + total + " 單元";
    if (starBtn) {
      starBtn.textContent = (state.onlyStarred ? "★ 顯示全部單元" : "★ 重點收藏 (" + starCount + ")");
    }
  }

  function toggleDone(trackId) {
    state.doneMap[trackId] = !state.doneMap[trackId];
    if (!state.doneMap[trackId]) delete state.doneMap[trackId];
    saveJson(STORAGE_DONE, state.doneMap);
    updateProgressUI();
    renderSidebar();
    renderMain(false);
  }

  function toggleStar(trackId) {
    state.starMap[trackId] = !state.starMap[trackId];
    if (!state.starMap[trackId]) delete state.starMap[trackId];
    saveJson(STORAGE_STAR, state.starMap);
    updateProgressUI();
    renderSidebar();
    renderMain(false);
  }

  function renderTrackButtons(trackId) {
    var isDone = !!state.doneMap[trackId];
    var isStar = !!state.starMap[trackId];
    return (
      '<button class="btn btn-done ' + (isDone ? "is-active" : "") + '" data-toggle-done="' + esc(trackId) + '">' +
      (isDone ? "✓ 已標記掌握" : "○ 標記為已掌握") +
      '</button>' +
      '<button class="btn btn-star ' + (isStar ? "is-active" : "") + '" data-toggle-star="' + esc(trackId) + '">' +
      (isStar ? "★ 已加入重點收藏" : "☆ 加入重點收藏") +
      '</button>'
    );
  }

  /* ========================================================================
     左側導航欄渲染
     ======================================================================== */
  function renderSidebar() {
    var nav = document.getElementById("sidebarNav");
    if (!nav) return;

    if (state.onlyStarred) {
      var items = getTrackableItems().filter(function (it) { return !!state.starMap[it.id]; });
      var sHtml = '<div class="sidebar-group-title">★ 重點收藏清單</div>';
      if (!items.length) {
        sHtml += '<div style="padding:12px 10px;font-size:0.84rem;color:var(--text-muted);">尚未收藏任何單元。可在各篇範文或實用文上方點擊「☆ 加入重點收藏」。</div>';
      } else {
        items.forEach(function (it) {
          sHtml += '<button class="nav-item" data-goto-view="' + esc(it.view) + '" data-goto-sub="' + esc(it.subId) + '">';
          sHtml += '  <span class="nav-item-left"><span class="nav-label">' + esc(it.label) + '</span></span>';
          sHtml += '  <span class="nav-status-icons"><span class="status-star">★</span></span>';
          sHtml += '</button>';
        });
      }
      nav.innerHTML = sHtml;
      bindSidebarEvents(nav);
      return;
    }

    var html = "";
    if (state.view === "overview") {
      html += '<div class="sidebar-group-title">考評總覽導航</div>';
      [
        { id: "sec-papers", label: "2027 試卷比重與時間分配" },
        { id: "sec-heatmap", label: "十二篇歷屆熱度與 2027 預測" },
        { id: "sec-peel", label: "卷一甲部 PEEL 滿分答題法" },
        { id: "sec-comp", label: "五大跨篇章比較高頻專題" }
      ].forEach(function (x, i) {
        html += '<button class="nav-item" data-scroll-id="' + x.id + '"><span class="nav-item-left"><span class="nav-num">0' + (i + 1) + '</span><span class="nav-label">' + esc(x.label) + '</span></span></button>';
      });
      html += '<div class="sidebar-group-title">快速跳轉十二篇範文</div>';
      (window.CHI_CLASSICS || []).forEach(function (c) {
        var tid = "cls:" + c.id;
        html += '<button class="nav-item" data-goto-view="classics" data-goto-sub="' + esc(c.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + esc(c.num) + '</span><span class="nav-label">' + esc(c.title) + '</span></span>';
        html += '  <span class="nav-status-icons">' + (state.doneMap[tid] ? '<span class="status-done">✓</span>' : '') + (state.starMap[tid] ? '<span class="status-star">★</span>' : '') + '</span>';
        html += '</button>';
      });
    } else if (state.view === "classics") {
      var curId = state.subId || (window.CHI_CLASSICS[0] && window.CHI_CLASSICS[0].id);
      html += '<div class="sidebar-group-title">指定文言經典（共12單元／16篇）</div>';
      (window.CHI_CLASSICS || []).forEach(function (c) {
        var tid = "cls:" + c.id;
        var active = curId === c.id ? "active" : "";
        html += '<button class="nav-item ' + active + '" data-goto-view="classics" data-goto-sub="' + esc(c.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">' + esc(c.num) + '</span><span class="nav-label">' + esc(c.title) + '</span></span>';
        html += '  <span class="nav-status-icons">' + (state.doneMap[tid] ? '<span class="status-done">✓</span>' : '') + (state.starMap[tid] ? '<span class="status-star">★</span>' : '') + '</span>';
        html += '</button>';
      });
      html += '<div class="sidebar-group-title">跨篇章比較專區</div>';
      html += '<button class="nav-item ' + (curId === "comparisons" ? "active" : "") + '" data-goto-view="classics" data-goto-sub="comparisons"><span class="nav-item-left"><span class="nav-num">比較</span><span class="nav-label">跨篇章思想與手法總對讀</span></span></button>';
    } else if (state.view === "lexicon") {
      html += '<div class="sidebar-group-title">文言字詞與語法分類</div>';
      [
        { k: "polysemy", n: "01", label: "一詞多義跨篇對照" },
        { k: "loanwords", n: "02", label: "十二篇通假字大全" },
        { k: "archaicShift", n: "03", label: "古今異義奪命陷阱" },
        { k: "wordClass", n: "04", label: "詞類活用精析" },
        { k: "functionWords", n: "05", label: "八大核心文言虛詞" },
        { k: "sentencePatterns", n: "06", label: "四大特殊與固定句式" },
        { k: "allPassageWords", n: "07", label: "十二篇隨文重點字詞總匯" }
      ].forEach(function (item) {
        html += '<button class="nav-item ' + (state.lexCat === item.k ? "active" : "") + '" data-lex-cat="' + item.k + '"><span class="nav-item-left"><span class="nav-num">' + item.n + '</span><span class="nav-label">' + esc(item.label) + '</span></span></button>';
      });
    } else if (state.view === "pastpapers") {
      html += '<div class="sidebar-group-title">卷一甲部歷屆真題年份</div>';
      html += '<button class="nav-item ' + (state.ppYear === "ALL" ? "active" : "") + '" data-pp-year="ALL"><span class="nav-item-left"><span class="nav-num">全部</span><span class="nav-label">2026 – 2018 歷屆總覽</span></span></button>';
      (window.CHI_PASTPAPERS || []).forEach(function (p) {
        var shortY = p.year.indexOf("樣本") !== -1 ? "樣本" : p.year;
        html += '<button class="nav-item ' + (state.ppYear === p.year ? "active" : "") + '" data-pp-year="' + esc(p.year) + '"><span class="nav-item-left"><span class="nav-num">' + esc(shortY) + '</span><span class="nav-label">' + esc(p.year) + ' 試題解析</span></span></button>';
      });
    } else if (state.view === "practical") {
      html += '<div class="sidebar-group-title">卷二甲部：實用文攻略</div>';
      html += '<button class="nav-item" data-scroll-id="prac-rules"><span class="nav-item-left"><span class="nav-num">總綱</span><span class="nav-label">時間分配與奪星鐵律</span></span></button>';
      ((window.CHI_PRACTICAL && window.CHI_PRACTICAL.genres) || []).forEach(function (g, idx) {
        var tid = "prac:" + g.id;
        html += '<button class="nav-item" data-scroll-id="genre-' + esc(g.id) + '">';
        html += '  <span class="nav-item-left"><span class="nav-num">0' + (idx + 1) + '</span><span class="nav-label">' + esc(g.name.replace(/^[一二三四五六七]、/, "")) + '</span></span>';
        html += '  <span class="nav-status-icons">' + (state.doneMap[tid] ? '<span class="status-done">✓</span>' : '') + (state.starMap[tid] ? '<span class="status-star">★</span>' : '') + '</span>';
        html += '</button>';
      });
      html += '<button class="nav-item" data-scroll-id="prac-past"><span class="nav-item-left"><span class="nav-num">真題</span><span class="nav-label">2024–2026 真題拆解</span></span></button>';
    } else if (state.view === "narrative") {
      html += '<div class="sidebar-group-title">記敘抒情文奪星目錄</div>';
      [
        { id: "nar-prompt", label: "近年真題雙類型破題法" },
        { id: "nar-mat", label: "俗套黑名單 vs 5** 選材庫" },
        { id: "nar-blue", label: "1300 字起承轉合黃金比例" },
        { id: "nar-tech", label: "五感描寫與由情入理昇華" }
      ].forEach(function (x, i) {
        html += '<button class="nav-item" data-scroll-id="' + x.id + '"><span class="nav-item-left"><span class="nav-num">0' + (i + 1) + '</span><span class="nav-label">' + esc(x.label) + '</span></span></button>';
      });
    } else if (state.view === "argumentative") {
      html += '<div class="sidebar-group-title">議論文思辨奪星目錄</div>';
      [
        { id: "arg-types", label: "雙觀點與古語題破題公式" },
        { id: "arg-struct", label: "六段式含駁論黃金結構" },
        { id: "arg-methods", label: "七大論證手法實戰要訣" },
        { id: "arg-examples", label: "十二篇範文化用萬用論據庫" }
      ].forEach(function (x, i) {
        html += '<button class="nav-item" data-scroll-id="' + x.id + '"><span class="nav-item-left"><span class="nav-num">0' + (i + 1) + '</span><span class="nav-label">' + esc(x.label) + '</span></span></button>';
      });
    } else if (state.view === "quiz") {
      html += '<div class="sidebar-group-title">互動練習模式</div>';
      html += '<button class="nav-item" data-quiz-jump="mc"><span class="nav-item-left"><span class="nav-num">01</span><span class="nav-label">模擬選擇題自測（24題）</span></span></button>';
      html += '<button class="nav-item" data-quiz-jump="dictation"><span class="nav-item-left"><span class="nav-num">02</span><span class="nav-label">十二篇名句默書挑戰（16題）</span></span></button>';
    }

    nav.innerHTML = html;
    bindSidebarEvents(nav);
  }

  function bindSidebarEvents(nav) {
    nav.querySelectorAll("[data-goto-view]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.onlyStarred = false;
        navigateTo(btn.getAttribute("data-goto-view"), btn.getAttribute("data-goto-sub"));
        closeMobileDrawer();
      });
    });

    nav.querySelectorAll("[data-scroll-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var el = document.getElementById(btn.getAttribute("data-scroll-id"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileDrawer();
      });
    });

    nav.querySelectorAll("[data-lex-cat]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.lexCat = btn.getAttribute("data-lex-cat");
        renderSidebar();
        renderMain(true);
        closeMobileDrawer();
      });
    });

    nav.querySelectorAll("[data-pp-year]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.ppYear = btn.getAttribute("data-pp-year");
        renderSidebar();
        renderMain(true);
        closeMobileDrawer();
      });
    });

    nav.querySelectorAll("[data-quiz-jump]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var main = document.getElementById("mainContent");
        if (window.ChiQuizEngine && main) {
          window.ChiQuizEngine.render(main, btn.getAttribute("data-quiz-jump"));
        }
        closeMobileDrawer();
      });
    });
  }

  /* ========================================================================
     各主視圖渲染函數
     ======================================================================== */
  function renderOverview() {
    var m = window.CHI_META;
    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">2027 考生專屬 · 緊貼考評局精簡新制</div>';
    html += '  <h1 class="hero-title">2027 HKDSE 中國語文科全方位複習寶典</h1>';
    html += '  <p class="hero-desc">' + esc(m.syllabusNote) + '</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn btn-primary" data-goto-view="classics" data-goto-sub="lunyu">開始精讀十二篇範文 →</button>';
    html += '    <button class="btn" data-goto-view="lexicon">查閱文言字詞總合集</button>';
    html += '    <button class="btn" data-goto-view="pastpapers">2018–2026 甲部真題解析</button>';
    html += '    <button class="btn" data-goto-view="practical">卷二實用文格式範本</button>';
    html += '  </div>';
    html += '</div>';

    /* 試卷架構卡片 */
    html += '<div class="card" id="sec-papers">';
    html += '  <div class="card-header"><h2 class="card-title">一、2027 DSE 中國語文科考評架構與時間分配策略</h2></div>';
    html += '  <div class="grid-3">';
    m.papers.forEach(function (p) {
      html += '<div class="stat-box">';
      html += '  <div class="stat-label">' + esc(p.code) + ' · ' + esc(p.duration) + '</div>';
      html += '  <div class="stat-val">' + esc(p.name) + '（' + esc(p.weight) + '）</div>';
      p.parts.forEach(function (pt) {
        html += '<div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--border-strong);">';
        html += '  <div style="font-weight:800;font-size:0.88rem;color:var(--jade);">' + esc(pt.part) + '</div>';
        html += '  <div style="font-size:0.78rem;font-weight:700;color:var(--amber);margin:2px 0;">' + esc(pt.share) + ' ｜ ' + esc(pt.timeTip) + '</div>';
        html += '  <div style="font-size:0.83rem;color:var(--text-secondary);">' + esc(pt.desc) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    });
    html += '  </div>';
    html += '</div>';

    /* 2018-2026 歷年出題熱度與 2027 趨勢預測表 */
    html += '<div class="card" id="sec-heatmap">';
    html += '  <div class="card-header">';
    html += '    <h2 class="card-title">二、十二篇範文歷屆考核分佈（2018–2026）及 2027 出題重點預測</h2>';
    html += '    <span class="badge badge-vermilion">點擊篇名直接進入精讀筆記</span>';
    html += '  </div>';
    html += '  <div class="callout callout-exam" style="margin-top:0;">';
    html += '    <div class="callout-title">2027 考生戰略提示</div>';
    html += '    <div>考評局從不設絕對「免考篇章」（近年極愛跨篇章比較及在第 1 題抽考各篇單字），故<strong>十二篇字詞與主旨必須全面熟讀</strong>；而在長問答押重點上，久未獨立出長題的<strong>《始得西山宴遊記》、《逍遙遊》、《勸學》、《魚我所欲也》、《青玉案・元夕》、《聲聲慢・秋情》</strong>及每年必考的<strong>《論語》</strong>最值得優先深鑽！</div>';
    html += '  </div>';
    html += '  <div class="table-wrap">';
    html += '    <table><thead><tr><th>指定篇章</th><th>2018–2021</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th><th>2026</th><th>2027 備戰重點評估</th></tr></thead><tbody>';
    m.heatmap.forEach(function (row) {
      var jumpId = row.id === "tangshi" ? "shanju" : (row.id === "cisan" ? "qingyuan" : row.id);
      var early = ["2018", "2019", "2020", "2021"].map(function (y) {
        return row.years[y] && row.years[y] !== "—" ? (y.slice(2) + ":" + row.years[y]) : null;
      }).filter(Boolean).join("、") || "—";
      html += '<tr>';
      html += '  <td><button class="text-link-btn" style="font-size:0.9rem;color:var(--vermilion);text-align:left;" data-goto-view="classics" data-goto-sub="' + esc(jumpId) + '">' + esc(row.title) + '</button><div style="font-size:0.75rem;color:var(--text-muted);">' + esc(row.author) + ' · ' + esc(row.genre) + '</div></td>';
      html += '  <td style="font-size:0.8rem;">' + esc(early) + '</td>';
      html += '  <td>' + esc(row.years["2022"]) + '</td>';
      html += '  <td>' + esc(row.years["2023"]) + '</td>';
      html += '  <td>' + esc(row.years["2024"]) + '</td>';
      html += '  <td>' + esc(row.years["2025"]) + '</td>';
      html += '  <td>' + esc(row.years["2026"]) + '</td>';
      html += '  <td style="min-width:240px;font-size:0.83rem;">' + esc(row.forecast2027) + '</td>';
      html += '</tr>';
    });
    html += '    </tbody></table>';
    html += '  </div>';
    html += '</div>';

    /* PEEL 答題黃金框架 */
    html += '<div class="card" id="sec-peel">';
    html += '  <div class="card-header"><h2 class="card-title">三、卷一甲部 4–6 分長問答「PEEL 滿分答題公式」</h2></div>';
    html += '  <div class="grid-4">';
    m.peelGuide.forEach(function (g) {
      html += '<div class="stat-box"><div style="font-weight:800;color:var(--vermilion);margin-bottom:6px;">' + esc(g.step) + '</div><div style="font-size:0.85rem;color:var(--text-secondary);">' + esc(g.detail) + '</div></div>';
    });
    html += '  </div>';
    html += '</div>';

    /* 跨篇章比較總覽 */
    html += '<div id="sec-comp">' + renderComparisonsBlock() + '</div>';
    return html;
  }

  function renderComparisonsBlock() {
    var html = '<div class="card">';
    html += '  <div class="card-header"><h2 class="card-title">跨篇章思想與寫作手法深度對讀專題（攻克高階綜合題）</h2></div>';
    (window.CHI_COMPARISONS || []).forEach(function (comp) {
      html += '<div style="margin-bottom:22px;">';
      html += '  <div style="display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
      html += '    <h3 style="margin:0;font-size:1.05rem;font-family:var(--font-serif);color:var(--jade);">' + esc(comp.title) + '</h3>';
      comp.tags.forEach(function (t) { html += '<span class="badge badge-amber">' + esc(t) + '</span>'; });
      html += '  </div>';
      html += '  <div class="table-wrap"><table><thead><tr><th style="width:130px;">比較維度</th><th>篇章／角度（一）</th><th>篇章／角度（二）</th><th>篇章／角度（三）或綜合小結</th></tr></thead><tbody>';
      comp.rows.forEach(function (r) {
        html += '<tr><td style="font-weight:800;color:var(--vermilion);">' + esc(r.aspect) + '</td><td>' + esc(r.col1) + '</td><td>' + esc(r.col2) + '</td><td>' + esc(r.col3) + '</td></tr>';
      });
      html += '  </tbody></table></div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ========================================================================
     卷一：十二篇範文精讀渲染
     ======================================================================== */
  function renderClassics() {
    if (state.subId === "comparisons") {
      return (
        '<div class="hero-banner">' +
        '  <div class="hero-eyebrow">卷一甲部壓軸題必備 · 融會貫通</div>' +
        '  <h1 class="hero-title">十二篇範文跨篇章主題比較總覽</h1>' +
        '  <p class="hero-desc">近年 DSE 卷一甲部極常將兩篇思想相關或相反的範文並列設問（如 2020 年比較《岳陽樓記》與《論君子》之憂）。熟讀以下五大比較矩陣，考試即能舉一反三！</p>' +
        '</div>' +
        renderComparisonsBlock()
      );
    }

    var list = window.CHI_CLASSICS || [];
    var item = list.find(function (x) { return x.id === state.subId; }) || list[0];
    if (!item) return "<p>載入範文資料中…</p>";
    state.subId = item.id;
    var idx = list.indexOf(item);
    var prev = idx > 0 ? list[idx - 1] : null;
    var next = idx < list.length - 1 ? list[idx + 1] : null;
    var trackId = "cls:" + item.id;

    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:8px;">';
    html += '    <span class="badge badge-vermilion">第 ' + esc(item.num) + ' 篇 · ' + esc(item.era) + '</span>';
    html += '    <span class="badge badge-jade">' + esc(item.genre) + '</span>';
    html += '    <span class="badge badge-amber">' + esc(item.heat) + '</span>';
    html += '    <span class="badge badge-indigo">歷屆考年：' + esc(item.examYears.join("、")) + '</span>';
    html += '  </div>';
    html += '  <h1 class="hero-title">' + esc(item.title) + ' — ' + esc(item.author) + '</h1>';
    html += '  <p class="hero-desc"><strong>寫作背景與題解：</strong>' + esc(item.background) + '</p>';
    html += '  <div class="hero-actions">' + renderTrackButtons(trackId) + '</div>';
    html += '</div>';

    /* 主旨與段落結構總綱 */
    html += '<div class="card">';
    html += '  <div class="card-header"><h2 class="card-title">一、中心主旨與脈絡結構圖解（Marking Scheme 標準關鍵字）</h2></div>';
    html += '  <div class="callout callout-tip" style="margin-top:0;">';
    html += '    <div class="callout-title">全篇主旨精要（背誦級標準表述）</div>';
    html += '    <div>' + esc(item.theme) + '</div>';
    html += '  </div>';
    html += '  <div class="table-wrap"><table><thead><tr><th style="width:240px;">結構層次</th><th>內容大意與論證／敘事推進</th></tr></thead><tbody>';
    (item.structure || []).forEach(function (st) {
      html += '<tr><td style="font-weight:800;color:var(--jade);">' + esc(st.part) + '</td><td>' + esc(st.desc) + '</td></tr>';
    });
    html += '  </tbody></table></div>';
    html += '</div>';

    /* 逐段／逐則／逐聯 原文＋白話對照＋深度批註 */
    html += '<div class="card">';
    html += '  <div class="card-header">';
    html += '    <h2 class="card-title">二、原文・精準語譯・深層考點逐段精讀</h2>';
    html += '    <span style="font-size:0.8rem;color:var(--text-muted);">提示：右上角可切換「背誦默書」模式遮蓋白話語譯自我測試</span>';
    html += '  </div>';
    (item.segments || []).forEach(function (seg) {
      html += '<div class="passage-segment">';
      html += '  <div class="segment-head"><span class="segment-title">' + esc(seg.title) + '</span></div>';
      html += '  <div class="parallel-cols">';
      html += '    <div class="classical-box"><span class="box-tag tag-classical">考評局指定原文</span><div>' + esc(seg.classical).replace(/\n/g, "<br>") + '</div></div>';
      html += '    <div class="vernacular-box" title="點擊可顯示／隱藏語譯"><span class="box-tag tag-vernacular">逐句精準白話語譯</span><div class="vernacular-text">' + esc(seg.vernacular).replace(/\n/g, "<br>") + '</div></div>';
      html += '  </div>';
      html += '  <div class="segment-analysis">' + seg.analysis + '</div>';
      html += '</div>';
    });
    html += '</div>';

    /* 寫作與論證修辭手法 */
    html += '<div class="card">';
    html += '  <div class="card-header"><h2 class="card-title">三、核心寫作手法、論證策略與修辭賞析</h2></div>';
    html += '  <div class="grid-3">';
    (item.techniques || []).forEach(function (t) {
      html += '<div class="stat-box"><div style="font-weight:800;color:var(--vermilion);margin-bottom:6px;">' + esc(t.name) + '</div><div style="font-size:0.87rem;color:var(--text-secondary);">' + esc(t.desc) + '</div></div>';
    });
    html += '  </div>';
    html += '</div>';

    /* 本篇重點文言字詞注釋表 */
    html += '<div class="card">';
    html += '  <div class="card-header"><h2 class="card-title">四、本篇必背重點文言字詞與語法表</h2></div>';
    html += '  <div class="table-wrap"><table><thead><tr><th>重點字詞</th><th>原文例句</th><th>精準注釋與得分要點</th><th>語法類別</th></tr></thead><tbody>';
    (item.keyWords || []).forEach(function (kw) {
      html += '<tr>';
      html += '  <td class="td-word">' + esc(kw.word) + '</td>';
      html += '  <td style="font-family:var(--font-serif);">' + esc(kw.sentence) + '</td>';
      html += '  <td>' + esc(kw.meaning) + '</td>';
      html += '  <td><span class="badge badge-amber">' + esc(kw.type) + '</span></td>';
      html += '</tr>';
    });
    html += '  </tbody></table></div>';
    html += '</div>';

    /* 高頻必考問答示範 */
    html += '<div class="card">';
    html += '  <div class="card-header"><h2 class="card-title">五、DSE 高頻問答題庫與滿分答題示範</h2></div>';
    (item.sampleQA || []).forEach(function (qa) {
      html += '<div class="qa-item">';
      html += '  <div class="qa-q"><span>' + esc(qa.q) + '</span><span class="badge badge-vermilion">評卷參考級示範</span></div>';
      html += '  <div class="qa-a">' + qa.a + '</div>';
      html += '</div>';
    });
    html += '</div>';

    /* 上一篇／下一篇導航 */
    html += '<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px;">';
    if (prev) {
      html += '<button class="btn" data-goto-view="classics" data-goto-sub="' + esc(prev.id) + '">← 上一篇：' + esc(prev.title) + '</button>';
    } else {
      html += '<span></span>';
    }
    if (next) {
      html += '<button class="btn btn-primary" data-goto-view="classics" data-goto-sub="' + esc(next.id) + '">下一篇：' + esc(next.title) + ' →</button>';
    } else {
      html += '<button class="btn btn-primary" data-goto-view="classics" data-goto-sub="comparisons">查看跨篇章比較總覽 →</button>';
    }
    html += '</div>';

    return html;
  }

  /* ========================================================================
     文言字詞與語法總合集渲染
     ======================================================================== */
  function renderLexicon() {
    var lex = window.CHI_LEXICON || {};
    var q = state.lexQuery.trim().toLowerCase();
    var maskCls = state.lexMask ? "mask-meaning is-masked" : "mask-meaning";

    var tabs = [
      { k: "polysemy", label: "一詞多義對照 (" + (lex.polysemy || []).length + "組)" },
      { k: "loanwords", label: "通假字大全 (" + (lex.loanwords || []).length + "組)" },
      { k: "archaicShift", label: "古今異義陷阱 (" + (lex.archaicShift || []).length + "組)" },
      { k: "wordClass", label: "詞類活用 (" + (lex.wordClass || []).length + "組)" },
      { k: "functionWords", label: "八大虛詞全解" },
      { k: "sentencePatterns", label: "四大特殊句式" },
      { k: "allPassageWords", label: "十二篇隨文字詞總匯" }
    ];

    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">卷一甲部保底滿分基石 · 乙部課外文言遷移</div>';
    html += '  <h1 class="hero-title">十二篇範文「文言字詞與語法」總合集</h1>';
    html += '  <p class="hero-desc">全面歸納十二篇範文的一詞多義、通假字、古今異義奪命陷阱、詞類活用、核心虛詞及四大特殊句式。可開啟「遮蓋釋義自測模式」，點擊單格逐一檢驗背誦成果！</p>';
    html += '  <div class="hero-actions">';
    html += '    <input type="search" id="lexSearchInput" class="inline-input" placeholder="篩選字詞或原句（如：師、負、屬、見欺、爪牙）..." value="' + esc(state.lexQuery) + '" />';
    html += '    <button class="btn ' + (state.lexMask ? "btn-primary" : "") + '" id="toggleLexMaskBtn">' + (state.lexMask ? "👁 顯示全部釋義" : "🙈 遮蓋釋義自測模式") + '</button>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="filter-bar">';
    tabs.forEach(function (t) {
      html += '<button class="chip-btn ' + (state.lexCat === t.k ? "active" : "") + '" data-lex-tab="' + t.k + '">' + esc(t.label) + '</button>';
    });
    html += '</div>';

    var matchFn = function (text) {
      return !q || String(text || "").toLowerCase().indexOf(q) !== -1;
    };

    if (state.lexCat === "polysemy") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">一詞多義跨篇總對照（同一字在不同範文中的詞性與詞義演變）</h2></div>';
      (lex.polysemy || []).forEach(function (item) {
        var combined = item.word + " " + item.usages.map(function (u) { return u.source + u.quote + u.meaning; }).join(" ");
        if (!matchFn(combined)) return;
        html += '<div style="margin-bottom:18px;">';
        html += '  <div style="font-family:var(--font-serif);font-size:1.22rem;font-weight:800;color:var(--vermilion);margin-bottom:6px;">【' + esc(item.word) + '】</div>';
        html += '  <div class="table-wrap"><table><thead><tr><th style="width:130px;">出處篇章</th><th>範文原句</th><th style="width:130px;">詞性</th><th>精準解釋</th></tr></thead><tbody>';
        item.usages.forEach(function (u) {
          html += '<tr><td><span class="badge badge-jade">' + esc(u.source) + '</span></td><td style="font-family:var(--font-serif);">' + esc(u.quote) + '</td><td>' + esc(u.pos) + '</td><td class="' + maskCls + '">' + esc(u.meaning) + '</td></tr>';
        });
        html += '  </tbody></table></div></div>';
      });
      html += '</div>';
    } else if (state.lexCat === "loanwords") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">十二篇通假字大全（作答字詞題宜寫明：通「X」，解作……）</h2></div>';
      html += '<div class="table-wrap"><table><thead><tr><th>通假字</th><th>本字</th><th>出處篇章</th><th>範文原句</th><th>精準釋義</th></tr></thead><tbody>';
      (lex.loanwords || []).forEach(function (r) {
        if (!matchFn(r.word + r.loan + r.source + r.quote + r.meaning)) return;
        html += '<tr><td class="td-word">' + esc(r.word) + '</td><td style="font-weight:800;color:var(--amber);">通「' + esc(r.loan) + '」</td><td>' + esc(r.source) + '</td><td style="font-family:var(--font-serif);">' + esc(r.quote) + '</td><td class="' + maskCls + '">' + esc(r.meaning) + '</td></tr>';
      });
      html += '</tbody></table></div></div>';
    } else if (state.lexCat === "archaicShift") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">古今異義奪命陷阱總表（切忌以現代漢語望文生義！）</h2></div>';
      html += '<div class="table-wrap"><table><thead><tr><th>重點詞語</th><th>出處</th><th>範文原句</th><th>✅ 古文正確釋義（得分）</th><th>❌ 現代漢語誤譯（零分陷阱）</th></tr></thead><tbody>';
      (lex.archaicShift || []).forEach(function (r) {
        if (!matchFn(r.word + r.source + r.quote + r.ancient + r.modern)) return;
        html += '<tr><td class="td-word">' + esc(r.word) + '</td><td>' + esc(r.source) + '</td><td style="font-family:var(--font-serif);">' + esc(r.quote) + '</td><td class="' + maskCls + '" style="font-weight:700;color:var(--jade);">' + esc(r.ancient) + '</td><td style="color:var(--text-muted);text-decoration:line-through;">' + esc(r.modern) + '</td></tr>';
      });
      html += '</tbody></table></div></div>';
    } else if (state.lexCat === "wordClass") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">詞類活用精析（名作動、名作狀、形作動、使動、意動）</h2></div>';
      html += '<div class="table-wrap"><table><thead><tr><th>活用字詞</th><th>活用類型</th><th>出處</th><th>範文原句</th><th>句中精準釋義</th></tr></thead><tbody>';
      (lex.wordClass || []).forEach(function (r) {
        if (!matchFn(r.word + r.type + r.source + r.quote + r.meaning)) return;
        html += '<tr><td class="td-word">' + esc(r.word) + '</td><td><span class="badge badge-indigo">' + esc(r.type) + '</span></td><td>' + esc(r.source) + '</td><td style="font-family:var(--font-serif);">' + esc(r.quote) + '</td><td class="' + maskCls + '">' + esc(r.meaning) + '</td></tr>';
      });
      html += '</tbody></table></div></div>';
    } else if (state.lexCat === "functionWords") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">八大必考文言虛詞全解（2022、2025 DSE 語法常客）</h2></div>';
      (lex.functionWords || []).forEach(function (fw) {
        var combined = fw.word + fw.cases.map(function (c) { return c.role + c.ex; }).join(" ");
        if (!matchFn(combined)) return;
        html += '<div style="margin-bottom:18px;"><div style="font-family:var(--font-serif);font-size:1.2rem;font-weight:800;color:var(--vermilion);margin-bottom:6px;">虛詞【' + esc(fw.word) + '】</div>';
        html += '<div class="table-wrap"><table><thead><tr><th style="width:280px;">語法功能與解釋</th><th>十二篇經典例句</th></tr></thead><tbody>';
        fw.cases.forEach(function (c) {
          html += '<tr><td class="' + maskCls + '" style="font-weight:700;">' + esc(c.role) + '</td><td style="font-family:var(--font-serif);">' + esc(c.ex) + '</td></tr>';
        });
        html += '</tbody></table></div></div>';
      });
      html += '</div>';
    } else if (state.lexCat === "sentencePatterns") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">四大文言特殊句式與固定句式專區（對應 2022 倒裝句、2023 被動句真題）</h2></div>';
      (lex.sentencePatterns || []).forEach(function (sp) {
        html += '<div style="margin-bottom:20px;">';
        html += '  <h3 style="margin:0 0 6px;font-family:var(--font-serif);color:var(--jade);">' + esc(sp.category) + '</h3>';
        html += '  <div class="callout callout-info" style="margin:6px 0 10px;">' + esc(sp.rule) + '</div>';
        html += '  <div class="table-wrap"><table><thead><tr><th style="width:120px;">出處</th><th>範文原句</th><th>語法拆解與標準語譯</th></tr></thead><tbody>';
        sp.examples.forEach(function (ex) {
          if (!matchFn(sp.category + ex.source + ex.quote + ex.explain)) return;
          html += '<tr><td><span class="badge badge-jade">' + esc(ex.source) + '</span></td><td style="font-family:var(--font-serif);font-weight:700;">' + esc(ex.quote) + '</td><td class="' + maskCls + '">' + esc(ex.explain) + '</td></tr>';
        });
        html += '  </tbody></table></div></div>';
      });
      html += '</div>';
    } else if (state.lexCat === "allPassageWords") {
      html += '<div class="card"><div class="card-header"><h2 class="card-title">十二篇範文隨文重點字詞大匯總（共 16 篇逐篇速查）</h2></div>';
      (window.CHI_CLASSICS || []).forEach(function (cls) {
        var rows = (cls.keyWords || []).filter(function (kw) {
          return matchFn(cls.title + kw.word + kw.sentence + kw.meaning + kw.type);
        });
        if (!rows.length) return;
        html += '<div style="margin-bottom:20px;">';
        html += '  <h3 style="margin:0 0 8px;font-family:var(--font-serif);color:var(--vermilion);">' + esc(cls.num) + ' · ' + esc(cls.title) + '</h3>';
        html += '  <div class="table-wrap"><table><thead><tr><th style="width:150px;">字詞</th><th>原句</th><th>注釋</th><th style="width:110px;">類別</th></tr></thead><tbody>';
        rows.forEach(function (kw) {
          html += '<tr><td class="td-word">' + esc(kw.word) + '</td><td style="font-family:var(--font-serif);">' + esc(kw.sentence) + '</td><td class="' + maskCls + '">' + esc(kw.meaning) + '</td><td><span class="badge badge-amber">' + esc(kw.type) + '</span></td></tr>';
        });
        html += '  </tbody></table></div></div>';
      });
      html += '</div>';
    }

    return html;
  }

  /* ========================================================================
     卷一甲部：歷屆真題解析 (2018-2026) 渲染
     ======================================================================== */
  function renderPastPapers() {
    var papers = window.CHI_PASTPAPERS || [];
    var filtered = state.ppYear === "ALL" ? papers : papers.filter(function (p) { return p.year === state.ppYear; });

    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">知己知彼 · 掌握考評局 Marking Scheme 給分邏輯</div>';
    html += '  <h1 class="hero-title">卷一甲部：歷屆真題與評卷要點全解析（2018 – 2026）</h1>';
    html += '  <p class="hero-desc">完整收錄自 2018 年重設十二篇指定篇章以來至 2026 年共九屆正式文憑試及官方樣本試卷的甲部核心考點，逐一拆解第 1 題文言字詞陷阱與長問答上品答題示範。</p>';
    html += '</div>';

    html += '<div class="filter-bar">';
    html += '<button class="chip-btn ' + (state.ppYear === "ALL" ? "active" : "") + '" data-pp-chip="ALL">全部年份 (2026–2018)</button>';
    papers.forEach(function (p) {
      html += '<button class="chip-btn ' + (state.ppYear === p.year ? "active" : "") + '" data-pp-chip="' + esc(p.year) + '">' + esc(p.year) + '</button>';
    });
    html += '</div>';

    filtered.forEach(function (p) {
      html += '<div class="card">';
      html += '  <div class="card-header">';
      html += '    <h2 class="card-title">' + esc(p.year) + ' DSE 中文卷一甲部解析</h2>';
      html += '    <span class="badge badge-indigo">' + esc(p.badge) + '</span>';
      html += '  </div>';
      html += '  <div style="margin-bottom:12px;"><strong>當年考核篇章：</strong>';
      p.passages.forEach(function (ps) {
        html += '<span class="badge badge-jade" style="margin-right:6px;">' + esc(ps) + '</span>';
      });
      html += '  </div>';
      html += '  <p style="margin:0 0 14px;color:var(--text-secondary);">' + esc(p.overview) + '</p>';

      /* 第1題字詞釋義真題考點 */
      html += '  <h3 style="font-size:0.96rem;color:var(--amber);margin:14px 0 8px;">📌 重點文言字詞／語法考核點</h3>';
      html += '  <div class="table-wrap"><table><thead><tr><th style="width:260px;">考核字詞與出處</th><th style="width:220px;">評卷參考答案</th><th>失分陷阱與解題技巧</th></tr></thead><tbody>';
      (p.vocabItems || []).forEach(function (v) {
        html += '<tr><td class="td-word" style="white-space:normal;">' + esc(v.word) + '</td><td style="font-weight:800;color:var(--jade);">' + esc(v.ans) + '</td><td>' + esc(v.tip) + '</td></tr>';
      });
      html += '  </tbody></table></div>';

      /* 問答題深度拆解 */
      html += '  <h3 style="font-size:0.96rem;color:var(--vermilion);margin:18px 0 8px;">✍️ 核心問答題拆解與上品參考答案</h3>';
      (p.questions || []).forEach(function (q) {
        html += '<div class="qa-item">';
        html += '  <div class="qa-q"><span>' + esc(q.q) + '</span><span class="badge badge-vermilion">' + esc(q.skill) + '</span></div>';
        html += '  <div class="qa-a">';
        html += '    <div style="margin-bottom:8px;color:var(--amber);font-weight:700;">【審題與失分剖析】' + esc(q.analysis) + '</div>';
        html += '    <div><strong>【滿分答題示範】</strong>' + esc(q.modelAns) + '</div>';
        html += '  </div>';
        html += '</div>';
      });
      html += '</div>';
    });

    return html;
  }

  /* ========================================================================
     卷二甲部：實用文格式與滿分攻略渲染
     ======================================================================== */
  function renderPractical() {
    var pr = window.CHI_PRACTICAL || {};
    var ov = pr.overview || {};
    var html = "";

    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">卷二甲部必答題 · ' + esc(ov.weight) + '</div>';
    html += '  <h1 class="hero-title">卷二甲部：七大實用文原稿紙格式大全與滿分拓展攻略</h1>';
    html += '  <p class="hero-desc">字數要求：' + esc(ov.wordLimit) + '。掌握零失分標準格式、百搭得體套語及「整合＋拓展＋回應疑慮」心法，穩奪卷二 30% 基本盤！</p>';
    html += '</div>';

    /* 時間分配與四大鐵律 */
    html += '<div class="card" id="prac-rules">';
    html += '  <div class="card-header"><h2 class="card-title">一、45 分鐘實戰時間分配與四大奪星鐵律</h2></div>';
    html += '  <div class="grid-2">';
    (ov.timePlan || []).forEach(function (tp) {
      html += '<div class="stat-box"><div style="font-weight:800;color:var(--cyan);margin-bottom:4px;">' + esc(tp.phase) + '</div><div style="font-size:0.86rem;color:var(--text-secondary);">' + esc(tp.detail) + '</div></div>';
    });
    html += '  </div>';
    html += '  <div class="grid-2" style="margin-top:14px;">';
    (ov.goldenRules || []).forEach(function (gr) {
      html += '<div class="callout callout-exam" style="margin:0;"><div class="callout-title">' + esc(gr.title) + '</div><div>' + esc(gr.desc) + '</div></div>';
    });
    html += '  </div>';
    html += '</div>';

    /* 七大實用文體逐一原稿紙視覺化示範 */
    (pr.genres || []).forEach(function (g) {
      var tid = "prac:" + g.id;
      html += '<div class="card" id="genre-' + esc(g.id) + '">';
      html += '  <div class="card-header">';
      html += '    <div><h2 class="card-title">' + esc(g.name) + '</h2><div style="font-size:0.8rem;color:var(--cyan);font-weight:700;margin-top:3px;">' + esc(g.examTag) + '</div></div>';
      html += '    <div style="display:flex;gap:8px;flex-wrap:wrap;">' + renderTrackButtons(tid) + '</div>';
      html += '  </div>';
      html += '  <p style="margin:0 0 12px;font-size:0.9rem;"><strong>語氣與行文要求：</strong>' + esc(g.tone) + '</p>';

      /* 原稿紙格式盒 */
      html += '  <div class="format-sheet">';
      (g.formatLines || []).forEach(function (ln) {
        if (ln.type === "note-only") {
          html += '<div style="font-family:var(--font-sans);font-size:0.83rem;font-weight:700;color:var(--vermilion);padding:6px 4px;">' + esc(ln.text) + '</div>';
        } else {
          var cls = "fmt-line";
          if (ln.type === "center") cls += " center";
          else if (ln.type === "indent") cls += " indent";
          else if (ln.type === "right") cls += " right";
          html += '<div class="' + cls + '"><span>' + esc(ln.text) + '</span>' + (ln.note ? '<span class="fmt-note">' + esc(ln.note) + '</span>' : '') + '</div>';
        }
      });
      html += '  </div>';

      /* 萬用高分套語 */
      html += '  <div style="margin-top:14px;"><strong>✨ 百搭高分句式庫：</strong><ul style="margin:6px 0;padding-left:20px;font-size:0.88rem;">';
      (g.phrases || []).forEach(function (ph) { html += '<li>' + esc(ph) + '</li>'; });
      html += '  </ul></div>';

      html += '  <div class="callout callout-trap" style="margin-bottom:0;"><div class="callout-title">⚠️ 格式扣分死亡陷阱</div><div>' + esc(g.traps) + '</div></div>';
      html += '</div>';
    });

    /* 2024-2026 真題拆解 */
    html += '<div class="card" id="prac-past">';
    html += '  <div class="card-header"><h2 class="card-title">二、2024 – 2026 三屆 DSE 卷二甲部實用文真題拆解</h2></div>';
    (pr.pastTasks || []).forEach(function (pt) {
      html += '<div class="qa-item">';
      html += '  <div class="qa-q"><span>' + esc(pt.year) + ' · ' + esc(pt.genre) + '（指定身分：' + esc(pt.role) + '）</span><span class="badge badge-cyan">真題實戰</span></div>';
      html += '  <div class="qa-a"><div style="margin-bottom:6px;"><strong>【題目任務】</strong>' + esc(pt.task) + '</div><div><strong>【奪星構思藍圖】</strong>' + esc(pt.strategy) + '</div></div>';
      html += '</div>';
    });
    html += '</div>';

    return html;
  }

  /* ========================================================================
     卷二乙部：記敘抒情文奪星技巧渲染
     ======================================================================== */
  function renderNarrative() {
    var nar = window.CHI_NARRATIVE || {};
    var html = "";
    html += '<div class="hero-banner" id="top">';
    html += '  <div class="hero-eyebrow">卷二乙部命題寫作（佔卷二 70%）· 題一／題二主力文體</div>';
    html += '  <h1 class="hero-title">記敘抒情文奪星技巧：從生活細節到哲理昇華</h1>';
    html += '  <p class="hero-desc">' + esc(nar.scoring && nar.scoring.topSecret) + '</p>';
    html += '  <div class="hero-actions">' + renderTrackButtons("p2:narrative") + '</div>';
    html += '</div>';

    html += '<div class="card" id="nar-prompt">';
    html += '  <div class="card-header"><h2 class="card-title">一、2024 – 2026 近年真題兩大題型審題與破題公式</h2></div>';
    (nar.promptTypes || []).forEach(function (pt) {
      html += '<div class="passage-segment">';
      html += '  <div class="segment-title" style="font-size:1.05rem;margin-bottom:6px;">' + esc(pt.type) + '</div>';
      html += '  <div style="font-size:0.84rem;color:var(--plum);font-weight:700;margin-bottom:8px;">歷屆真題例子：' + esc(pt.examples) + '</div>';
      html += '  <div class="callout callout-trap" style="margin:8px 0;">' + esc(pt.trap) + '</div>';
      html += '  <div class="callout callout-tip" style="margin:8px 0 0;">' + esc(pt.formula) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '<div class="card" id="nar-mat">';
    html += '  <div class="card-header"><h2 class="card-title">二、選材避雷針：俗套題材黑名單 vs 5** 生活微觀選材庫</h2></div>';
    html += '  <div class="grid-2">';
    html += '    <div class="callout callout-trap" style="margin:0;"><div class="callout-title">考評報告點名切忌老套選材</div><ul style="margin:6px 0;padding-left:18px;">' + ((nar.materials && nar.materials.cliches) || []).map(function (c) { return '<li style="margin-bottom:6px;">' + esc(c) + '</li>'; }).join("") + '</ul></div>';
    html += '    <div class="callout callout-tip" style="margin:0;"><div class="callout-title">5** 高分新鮮選材方向</div><ul style="margin:6px 0;padding-left:18px;">' + ((nar.materials && nar.materials.freshIdeas) || []).map(function (c) { return '<li style="margin-bottom:6px;">' + esc(c) + '</li>'; }).join("") + '</ul></div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="card" id="nar-blue">';
    html += '  <div class="card-header"><h2 class="card-title">三、1300 字「起・承・轉・合」黃金字數比例與佈局技巧</h2></div>';
    html += '  <div class="grid-2">';
    (nar.blueprint || []).forEach(function (b) {
      html += '<div class="stat-box"><div style="font-weight:800;color:var(--plum);margin-bottom:6px;">' + esc(b.stage) + '</div><div style="font-size:0.87rem;color:var(--text-secondary);">' + esc(b.method) + '</div></div>';
    });
    html += '  </div>';
    html += '</div>';

    html += '<div class="card" id="nar-tech">';
    html += '  <div class="card-header"><h2 class="card-title">四、平庸文筆 vs 5** 示範改寫對照（五感細描・慢鏡頭・環境烘托・哲理昇華）</h2></div>';
    (nar.techniques || []).forEach(function (t) {
      html += '<div class="passage-segment">';
      html += '  <div class="segment-title" style="margin-bottom:10px;">' + esc(t.name) + '</div>';
      html += '  <div class="parallel-cols">';
      html += '    <div class="callout callout-trap" style="margin:0;">' + esc(t.bad) + '</div>';
      html += '    <div class="callout callout-tip" style="margin:0;">' + esc(t.good) + '</div>';
      html += '  </div>';
      html += '</div>';
    });
    html += '</div>';

    return html;
  }

  /* ========================================================================
     卷二乙部：議論文思辨與論證攻略渲染
     ======================================================================== */
  function renderArgumentative() {
    var arg = window.CHI_ARGUMENTATIVE || {};
    var html = "";
    html += '<div class="hero-banner" id="top">';
    html += '  <div class="hero-eyebrow">卷二乙部命題寫作（佔卷二 70%）· 題三思辨主力文體</div>';
    html += '  <h1 class="hero-title">議論文思辨與論證全攻略：雙觀點拆解・駁論・十二篇萬用素材</h1>';
    html += '  <p class="hero-desc">' + esc(arg.corePrinciple) + '</p>';
    html += '  <div class="hero-actions">' + renderTrackButtons("p2:argumentative") + '</div>';
    html += '</div>';

    html += '<div class="card" id="arg-types">';
    html += '  <div class="card-header"><h2 class="card-title">一、三大常考議論文題型破題公式（含 2024–2026 真題示範）</h2></div>';
    (arg.questionTypes || []).forEach(function (qt) {
      html += '<div class="passage-segment">';
      html += '  <div class="segment-title" style="font-size:1.05rem;margin-bottom:4px;">' + esc(qt.type) + '</div>';
      html += '  <div style="font-size:0.84rem;color:var(--indigo);font-weight:700;margin-bottom:8px;">真題實例：' + esc(qt.examples) + '</div>';
      html += '  <div style="font-size:0.9rem;white-space:pre-line;">' + esc(qt.strategy) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '<div class="card" id="arg-struct">';
    html += '  <div class="card-header"><h2 class="card-title">二、5** 議論文六段式黃金結構藍圖（含必勝「駁論段」模板）</h2></div>';
    html += '  <div class="table-wrap"><table><thead><tr><th style="width:290px;">段落與字數配置</th><th>寫作任務與高分句式推進</th></tr></thead><tbody>';
    (arg.structureTemplate || []).forEach(function (s) {
      html += '<tr><td style="font-weight:800;color:var(--vermilion);">' + esc(s.para) + '</td><td>' + esc(s.detail) + '</td></tr>';
    });
    html += '  </tbody></table></div>';
    html += '</div>';

    html += '<div class="card" id="arg-methods">';
    html += '  <div class="card-header"><h2 class="card-title">三、六大論證手法與「敘三議七」裁剪要訣</h2></div>';
    html += '  <div class="grid-3">';
    (arg.methods || []).forEach(function (m) {
      html += '<div class="stat-box"><div style="font-weight:800;color:var(--jade);margin-bottom:6px;">' + esc(m.name) + '</div><div style="font-size:0.86rem;color:var(--text-secondary);">' + esc(m.tip) + '</div></div>';
    });
    html += '  </div>';
    html += '</div>';

    html += '<div class="card" id="arg-examples">';
    html += '  <div class="card-header"><h2 class="card-title">四、「一魚兩吃」：把卷一十二篇範文直接化用為卷二議論文高雅論據！</h2></div>';
    html += '  <div class="callout callout-tip" style="margin-top:0;">把已經背熟的十二篇人物與名句運用於卷二議論文，既有深厚文化底蘊，又免卻額外死背陌生例子的負擔！再配搭一兩個現當代中外例子，古今輝映，穩衝 5**！</div>';
    (arg.classicExamples || []).forEach(function (ex) {
      html += '<div class="qa-item">';
      html += '  <div class="qa-q"><span>' + esc(ex.figure) + '</span><span>' + (ex.themes || []).map(function (t) { return '<span class="badge badge-amber" style="margin-left:4px;">' + esc(t) + '</span>'; }).join("") + '</span></div>';
      html += '  <div class="qa-a">' + esc(ex.usage) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    return html;
  }

  /* ========================================================================
     主視圖統籌渲染與互動綁定
     ======================================================================== */
  function renderMain(scrollTop) {
    var main = document.getElementById("mainContent");
    if (!main) return;

    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === state.view);
    });

    if (state.view === "quiz") {
      if (window.ChiQuizEngine) window.ChiQuizEngine.render(main);
      if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    var html = "";
    if (state.view === "overview") html = renderOverview();
    else if (state.view === "classics") html = renderClassics();
    else if (state.view === "lexicon") html = renderLexicon();
    else if (state.view === "pastpapers") html = renderPastPapers();
    else if (state.view === "practical") html = renderPractical();
    else if (state.view === "narrative") html = renderNarrative();
    else if (state.view === "argumentative") html = renderArgumentative();

    main.innerHTML = html;
    bindMainEvents(main);
    if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindMainEvents(main) {
    main.querySelectorAll("[data-goto-view]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        navigateTo(btn.getAttribute("data-goto-view"), btn.getAttribute("data-goto-sub"));
      });
    });

    main.querySelectorAll("[data-toggle-done]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        toggleDone(btn.getAttribute("data-toggle-done"));
      });
    });

    main.querySelectorAll("[data-toggle-star]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        toggleStar(btn.getAttribute("data-toggle-star"));
      });
    });

    /* 背誦模式下點擊白話框切換顯示 */
    main.querySelectorAll(".vernacular-box").forEach(function (box) {
      box.addEventListener("click", function () {
        box.classList.toggle("revealed");
      });
    });

    /* 字詞合集互動控制 */
    main.querySelectorAll("[data-lex-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.lexCat = btn.getAttribute("data-lex-tab");
        renderSidebar();
        renderMain(false);
      });
    });

    var lexInp = main.querySelector("#lexSearchInput");
    if (lexInp) {
      lexInp.addEventListener("input", function () {
        state.lexQuery = lexInp.value;
        var pos = lexInp.selectionStart;
        renderMain(false);
        var nextInp = document.getElementById("lexSearchInput");
        if (nextInp) {
          nextInp.focus();
          try { nextInp.setSelectionRange(pos, pos); } catch (e) {}
        }
      });
    }

    var maskBtn = main.querySelector("#toggleLexMaskBtn");
    if (maskBtn) {
      maskBtn.addEventListener("click", function () {
        state.lexMask = !state.lexMask;
        renderMain(false);
      });
    }

    main.querySelectorAll(".mask-meaning").forEach(function (cell) {
      cell.addEventListener("click", function () {
        cell.classList.toggle("is-masked");
      });
    });

    /* 歷屆真題年份篩選 */
    main.querySelectorAll("[data-pp-chip]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.ppYear = btn.getAttribute("data-pp-chip");
        renderSidebar();
        renderMain(false);
      });
    });
  }

  function navigateTo(view, subId) {
    state.view = view || "overview";
    if (subId !== undefined) state.subId = subId;
    else if (state.view === "classics" && !state.subId) state.subId = "lunyu";
    renderSidebar();
    renderMain(true);
  }

  /* ========================================================================
     全站即時搜尋引擎（涵蓋十二篇原文、字詞、真題、實用文與長文寫作）
     ======================================================================== */
  function buildSearchIndex() {
    var idx = [];
    (window.CHI_CLASSICS || []).forEach(function (c) {
      var segText = (c.segments || []).map(function (s) { return s.title + " " + s.classical + " " + s.vernacular; }).join(" ");
      var kwText = (c.keyWords || []).map(function (k) { return k.word + " " + k.meaning; }).join(" ");
      idx.push({
        cat: "十二篇範文",
        title: c.num + " " + c.title + "（" + c.author + "）",
        text: c.theme + " " + segText + " " + kwText,
        action: function () { navigateTo("classics", c.id); }
      });
    });

    var lex = window.CHI_LEXICON || {};
    (lex.polysemy || []).forEach(function (p) {
      idx.push({
        cat: "一詞多義",
        title: "文言多義詞：【" + p.word + "】",
        text: p.usages.map(function (u) { return u.source + " " + u.quote + " " + u.meaning; }).join(" ｜ "),
        action: function () { state.lexCat = "polysemy"; state.lexQuery = p.word; navigateTo("lexicon"); }
      });
    });
    (lex.archaicShift || []).forEach(function (a) {
      idx.push({
        cat: "古今異義",
        title: "古今異義陷阱：【" + a.word + "】（" + a.source + "）",
        text: a.quote + " 古義：" + a.ancient + "（誤譯：" + a.modern + "）",
        action: function () { state.lexCat = "archaicShift"; state.lexQuery = a.word; navigateTo("lexicon"); }
      });
    });
    (lex.loanwords || []).forEach(function (l) {
      idx.push({
        cat: "通假字",
        title: "通假字：【" + l.word + "】通「" + l.loan + "」",
        text: l.source + " " + l.quote + " — " + l.meaning,
        action: function () { state.lexCat = "loanwords"; state.lexQuery = l.word; navigateTo("lexicon"); }
      });
    });
    (lex.sentencePatterns || []).forEach(function (sp) {
      idx.push({
        cat: "文言句式",
        title: sp.category,
        text: sp.rule + " " + sp.examples.map(function (e) { return e.quote + " " + e.explain; }).join(" "),
        action: function () { state.lexCat = "sentencePatterns"; state.lexQuery = ""; navigateTo("lexicon"); }
      });
    });

    (window.CHI_PASTPAPERS || []).forEach(function (pp) {
      idx.push({
        cat: "歷屆真題",
        title: pp.year + " DSE 卷一甲部解析",
        text: pp.passages.join(" ") + " " + pp.overview + " " + pp.questions.map(function (q) { return q.q + " " + q.modelAns; }).join(" "),
        action: function () { state.ppYear = pp.year; navigateTo("pastpapers"); }
      });
    });

    ((window.CHI_PRACTICAL && window.CHI_PRACTICAL.genres) || []).forEach(function (g) {
      idx.push({
        cat: "卷二實用文",
        title: g.name,
        text: g.examTag + " " + g.tone + " " + g.traps + " " + (g.phrases || []).join(" "),
        action: function () {
          navigateTo("practical");
          setTimeout(function () {
            var el = document.getElementById("genre-" + g.id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 80);
        }
      });
    });

    idx.push({
      cat: "卷二長文",
      title: "記敘抒情文奪星技巧（雙線結構・五感描寫・由情入理）",
      text: "眼前的甜點 藏在泥土中的寶物 為不完美添色彩 無愧的選擇 欲揚先抑 環境烘托",
      action: function () { navigateTo("narrative"); }
    });
    idx.push({
      cat: "卷二長文",
      title: "議論文思辨攻略（雙觀點比較・駁論模板・十二篇萬用例子）",
      text: "談說話 量力而為 踏出舒適圈 遵守諾言 誠然然而 敘三議七 舉例對比假設論證",
      action: function () { navigateTo("argumentative"); }
    });

    return idx;
  }

  function closeMobileDrawer() {
    var sb = document.getElementById("sidebar");
    var bd = document.getElementById("sidebarBackdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.classList.remove("open");
  }

  /* ========================================================================
     初始化與全局事件綁定
     ======================================================================== */
  function init() {
    /* 恢復主題與閱讀模式 */
    var savedTheme = localStorage.getItem(STORAGE_THEME);
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    var savedMode = localStorage.getItem(STORAGE_MODE);
    if (savedMode === "parallel" || savedMode === "recite") {
      document.documentElement.setAttribute("data-readmode", savedMode);
      document.querySelectorAll(".mode-btn").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-set-mode") === savedMode);
      });
    }

    /* 頂部主分頁切換 */
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.onlyStarred = false;
        navigateTo(btn.getAttribute("data-view"));
      });
    });

    var brand = document.getElementById("brandLink");
    if (brand) {
      brand.addEventListener("click", function (e) {
        e.preventDefault();
        navigateTo("overview");
      });
    }

    /* 古白對照／背誦模式切換 */
    document.querySelectorAll(".mode-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-set-mode");
        document.documentElement.setAttribute("data-readmode", mode);
        try { localStorage.setItem(STORAGE_MODE, mode); } catch (e) {}
        document.querySelectorAll(".mode-btn").forEach(function (b) {
          b.classList.toggle("active", b.getAttribute("data-set-mode") === mode);
        });
      });
    });

    /* 深淺色主題切換 */
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", cur);
        try { localStorage.setItem(STORAGE_THEME, cur); } catch (e) {}
      });
    }

    /* 列印按鈕 */
    var printBtn = document.getElementById("printBtn");
    if (printBtn) {
      printBtn.addEventListener("click", function () { window.print(); });
    }

    /* 收藏篩選 */
    var starFilterBtn = document.getElementById("filterBookmarksBtn");
    if (starFilterBtn) {
      starFilterBtn.addEventListener("click", function () {
        state.onlyStarred = !state.onlyStarred;
        updateProgressUI();
        renderSidebar();
      });
    }

    /* 手機抽屜目錄 */
    var menuBtn = document.getElementById("mobileMenuBtn");
    var backdrop = document.getElementById("sidebarBackdrop");
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("open");
        backdrop.classList.toggle("open");
      });
    }
    if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);

    /* 回到頂部 */
    var btt = document.getElementById("backToTop");
    window.addEventListener("scroll", function () {
      if (btt) btt.classList.toggle("visible", window.scrollY > 360);
    });
    if (btt) {
      btt.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    }

    /* 全站即時搜尋 */
    var searchIndex = buildSearchIndex();
    var searchInp = document.getElementById("globalSearch");
    var searchRes = document.getElementById("searchResults");
    if (searchInp && searchRes) {
      searchInp.addEventListener("input", function () {
        var q = searchInp.value.trim().toLowerCase();
        if (!q) {
          searchRes.hidden = true;
          return;
        }
        var matches = searchIndex.filter(function (it) {
          return it.title.toLowerCase().indexOf(q) !== -1 || it.text.toLowerCase().indexOf(q) !== -1;
        }).slice(0, 12);

        if (!matches.length) {
          searchRes.innerHTML = '<div style="padding:12px;font-size:0.85rem;color:var(--text-muted);">找不到相符知識點，請嘗試搜尋範文名、單字（如「屬、景、急」）或文體（如「建議書、演講辭」）。</div>';
          searchRes.hidden = false;
          return;
        }

        searchRes.innerHTML = matches.map(function (m, i) {
          var pos = m.text.toLowerCase().indexOf(q);
          var start = Math.max(0, pos - 24);
          var snippet = (start > 0 ? "…" : "") + m.text.slice(start, start + 90) + "…";
          return (
            '<button class="search-item" data-sidx="' + i + '">' +
            '  <div class="search-item-top"><span class="search-cat">' + esc(m.cat) + '</span><span class="search-title">' + esc(m.title) + '</span></div>' +
            '  <div class="search-snippet">' + esc(snippet) + '</div>' +
            '</button>'
          );
        }).join("");
        searchRes.hidden = false;

        searchRes.querySelectorAll(".search-item").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var chosen = matches[parseInt(btn.getAttribute("data-sidx"), 10)];
            searchRes.hidden = true;
            searchInp.value = "";
            if (chosen && chosen.action) chosen.action();
          });
        });
      });

      document.addEventListener("click", function (e) {
        if (!document.getElementById("searchWrap").contains(e.target)) {
          searchRes.hidden = true;
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "/" && document.activeElement !== searchInp && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
          e.preventDefault();
          searchInp.focus();
        } else if (e.key === "Escape") {
          searchRes.hidden = true;
        }
      });
    }

    updateProgressUI();
    renderSidebar();
    renderMain(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
