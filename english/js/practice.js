/* ==========================================================================
   2027 HKDSE 英文科互動實戰元件 (practice.js)
   包含：Paper 3A SVG 平面圖與趨勢圖、Web Speech 模擬朗讀、Paper 4 計時抽題模擬器、互動自測題庫
   ========================================================================== */

(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ========================================================================
     1. Paper 3A 專屬高清 SVG 圖表（平面圖 Floor Plan & 數據趨勢圖 Trends）
     ======================================================================== */
  function renderFloorplanSVG() {
    return (
      '<div class="svg-figure">' +
      '<svg viewBox="0 0 640 310" width="600" height="290" role="img" aria-label="Community Innovation Centre Floor Plan">' +
      '  <rect x="0" y="0" width="640" height="310" rx="10" fill="var(--svg-bg)"/>' +
      /* Compass N */
      '  <g transform="translate(592, 34)">' +
      '    <circle cx="0" cy="0" r="18" fill="var(--svg-room)" stroke="var(--svg-wall)" stroke-width="1.5"/>' +
      '    <polygon points="0,-13 4,-3 0,-5 -4,-3" fill="var(--svg-crimson)"/>' +
      '    <text x="0" y="10" text-anchor="middle" font-size="11" font-weight="800" fill="var(--svg-text)">N</text>' +
      '  </g>' +
      /* Outer walls */
      '  <rect x="40" y="24" width="510" height="248" rx="6" fill="none" stroke="var(--svg-wall)" stroke-width="3"/>' +
      /* Central Corridor */
      '  <rect x="255" y="26" width="80" height="244" fill="var(--svg-room)" opacity="0.65"/>' +
      '  <text x="295" y="122" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--svg-muted)" transform="rotate(-90 295 122)">CENTRAL CORRIDOR</text>' +
      '  <line x1="295" y1="256" x2="295" y2="230" stroke="var(--svg-accent)" stroke-width="2.5" stroke-dasharray="4 3"/>' +
      '  <polygon points="295,222 290,232 300,232" fill="var(--svg-accent)"/>' +
      /* Left Rooms: C (Top-left), B (Mid-left), Info Desk (Bottom-left) */
      '  <rect x="44" y="28" width="208" height="72" fill="var(--svg-room)" stroke="var(--svg-wall)" stroke-width="1.6"/>' +
      '  <text x="148" y="60" text-anchor="middle" font-size="14" font-weight="800" fill="var(--svg-crimson)">[ C ]</text>' +
      '  <text x="148" y="79" text-anchor="middle" font-size="11" fill="var(--svg-muted)">Far Top-Left Corner</text>' +

      '  <rect x="44" y="104" width="208" height="78" fill="var(--svg-room)" stroke="var(--svg-wall)" stroke-width="1.6"/>' +
      '  <text x="148" y="139" text-anchor="middle" font-size="14" font-weight="800" fill="var(--svg-crimson)">[ B ]</text>' +
      '  <text x="148" y="158" text-anchor="middle" font-size="11" fill="var(--svg-muted)">Adjacent to Info Desk</text>' +

      '  <rect x="44" y="186" width="208" height="82" fill="var(--amber-soft)" stroke="var(--svg-accent)" stroke-width="2"/>' +
      '  <text x="148" y="224" text-anchor="middle" font-size="13" font-weight="800" fill="var(--svg-accent)">Information Desk</text>' +
      '  <text x="148" y="242" text-anchor="middle" font-size="10.5" fill="var(--svg-muted)">(已標示基準地標)</text>' +

      /* Right Rooms: D (Upper-right), A (Bottom-right) */
      '  <rect x="338" y="28" width="208" height="148" fill="var(--svg-room)" stroke="var(--svg-wall)" stroke-width="1.6"/>' +
      '  <text x="442" y="96" text-anchor="middle" font-size="14" font-weight="800" fill="var(--svg-crimson)">[ D ]</text>' +
      '  <text x="442" y="116" text-anchor="middle" font-size="11" fill="var(--svg-muted)">Upper-Right Section</text>' +

      '  <rect x="338" y="180" width="208" height="88" fill="var(--svg-room)" stroke="var(--svg-wall)" stroke-width="1.6"/>' +
      '  <text x="442" y="220" text-anchor="middle" font-size="14" font-weight="800" fill="var(--svg-crimson)">[ A ]</text>' +
      '  <text x="442" y="239" text-anchor="middle" font-size="11" fill="var(--svg-muted)">Across from Info Desk</text>' +

      /* Main Entrance gap */
      '  <rect x="262" y="268" width="66" height="8" fill="var(--svg-bg)"/>' +
      '  <text x="295" y="294" text-anchor="middle" font-size="12" font-weight="800" fill="var(--svg-blue)">▲ MAIN ENTRANCE（起點）</text>' +
      '</svg>' +
      '<div class="svg-caption">Paper 3A Type 02 擬真考題平面圖：預讀時先鎖定入口（Main Entrance）與已知基準地標（Information Desk）</div>' +
      '</div>'
    );
  }

  function renderTrendsSVG() {
    return (
      '<div class="svg-figure">' +
      '<svg viewBox="0 0 660 195" width="640" height="190" role="img" aria-label="Three e-book borrowing trend graphs">' +
      '  <rect x="0" y="0" width="660" height="195" rx="10" fill="var(--svg-bg)"/>' +
      /* Graph A: Rise then Plummet */
      '  <g transform="translate(20, 18)">' +
      '    <rect x="0" y="0" width="190" height="155" rx="8" fill="var(--svg-room)" stroke="var(--border-strong)" stroke-width="1.2"/>' +
      '    <text x="95" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--svg-text)">Graph A</text>' +
      '    <polyline points="26,34 26,126 172,126" fill="none" stroke="var(--svg-wall)" stroke-width="1.5"/>' +
      '    <polyline points="32,108 66,88 100,46 134,92 166,118" fill="none" stroke="var(--svg-crimson)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
      '    <text x="95" y="144" text-anchor="middle" font-size="10.5" fill="var(--svg-muted)">2022 ➔ 2024 Peak ➔ 2026 Drop</text>' +
      '  </g>' +
      /* Graph B: Steady climb -> Surge -> Plateau (Correct) */
      '  <g transform="translate(235, 18)">' +
      '    <rect x="0" y="0" width="190" height="155" rx="8" fill="var(--svg-room)" stroke="var(--svg-emerald)" stroke-width="1.8"/>' +
      '    <text x="95" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--svg-emerald)">Graph B</text>' +
      '    <polyline points="26,34 26,126 172,126" fill="none" stroke="var(--svg-wall)" stroke-width="1.5"/>' +
      '    <polyline points="32,114 66,102 100,50 134,50 166,49" fill="none" stroke="var(--svg-emerald)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '    <text x="95" y="144" text-anchor="middle" font-size="10.5" fill="var(--svg-muted)">Steady ➔ Surge ➔ Plateau</text>' +
      '  </g>' +
      /* Graph C: Fluctuate */
      '  <g transform="translate(450, 18)">' +
      '    <rect x="0" y="0" width="190" height="155" rx="8" fill="var(--svg-room)" stroke="var(--border-strong)" stroke-width="1.2"/>' +
      '    <text x="95" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--svg-text)">Graph C</text>' +
      '    <polyline points="26,34 26,126 172,126" fill="none" stroke="var(--svg-wall)" stroke-width="1.5"/>' +
      '    <polyline points="32,102 62,56 96,104 130,54 166,94" fill="none" stroke="var(--svg-blue)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
      '    <text x="95" y="144" text-anchor="middle" font-size="10.5" fill="var(--svg-muted)">2022–2026 Fluctuating</text>' +
      '  </g>' +
      '</svg>' +
      '<div class="svg-caption">Paper 3A Type 08 數據趨勢配對圖：先看三段形狀差異（急跌 vs 橫行平穩 vs 反覆波動）</div>' +
      '</div>'
    );
  }

  /* ========================================================================
     2. 瀏覽器語音朗讀助手（Web Speech API — 零外部依賴，優先英式語音 en-GB）
     ======================================================================== */
  var currentUtterance = null;
  function speakText(text, onStateChange) {
    if (!("speechSynthesis" in window)) {
      if (window.EngAppToast) window.EngAppToast("此瀏覽器不支援語音合成功能，可直接閱讀原文練習。");
      return;
    }
    var synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
      if (currentUtterance && currentUtterance._srcText === text) {
        currentUtterance = null;
        if (onStateChange) onStateChange(false);
        return;
      }
    }
    var clean = String(text || "")
      .replace(/\[\[|\]\]/g, "")
      .replace(/\{\{[vsd]\|([^|]+)\|[^}]+\}\}/g, "$1");
    var utter = new SpeechSynthesisUtterance(clean);
    utter._srcText = text;
    utter.lang = "en-GB";
    utter.rate = 0.96;
    var voices = synth.getVoices ? synth.getVoices() : [];
    var gb = voices.find(function (v) { return /en[-_]GB/i.test(v.lang); }) ||
             voices.find(function (v) { return /^en/i.test(v.lang); });
    if (gb) utter.voice = gb;
    utter.onend = function () { currentUtterance = null; if (onStateChange) onStateChange(false); };
    utter.onerror = function () { currentUtterance = null; if (onStateChange) onStateChange(false); };
    currentUtterance = utter;
    if (onStateChange) onStateChange(true);
    synth.speak(utter);
  }

  function stopSpeech() {
    if ("speechSynthesis" in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    currentUtterance = null;
  }

  /* ========================================================================
     3. Paper 4 互動口試計時模擬器（1 分鐘 IR & 8 分鐘 GI + 隨機抽題）
     ======================================================================== */
  var timerState = {
    mode: "ir", // "ir" (60s) | "gi" (480s)
    remaining: 60,
    running: false,
    intervalId: null,
    promptIdx: 0
  };

  function formatSec(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function clearTimer() {
    if (timerState.intervalId) {
      clearInterval(timerState.intervalId);
      timerState.intervalId = null;
    }
    timerState.running = false;
  }

  function renderSpeakingStudio(container) {
    if (!container) return;
    var pool = (window.ENG_P4 && window.ENG_P4.practicePrompts) || { ir: [], gi: [] };
    var isIR = timerState.mode === "ir";
    var list = isIR ? pool.ir : pool.gi;
    var item = list[timerState.promptIdx % Math.max(1, list.length)];

    var promptHtml = "";
    if (isIR && item) {
      promptHtml =
        '<div style="font-size:0.76rem;font-weight:800;color:var(--teal);margin-bottom:4px;">PART B · 1-MINUTE INDIVIDUAL RESPONSE PROMPT #' + ((timerState.promptIdx % list.length) + 1) + '</div>' +
        '<div style="font-family:var(--font-serif);font-size:1.05rem;font-weight:700;">' + esc(item) + '</div>' +
        '<div style="font-size:0.8rem;color:var(--text-muted);margin-top:6px;">💡 黃金節奏：10s 直截表態 ➔ 22s 主因＋實例 ➔ 18s 延伸／讓步 ➔ 10s 總結收尾</div>';
    } else if (!isIR && item) {
      promptHtml =
        '<div style="font-size:0.76rem;font-weight:800;color:var(--teal);margin-bottom:4px;">PART A · 8-MINUTE GROUP INTERACTION TOPIC #' + ((timerState.promptIdx % list.length) + 1) + '</div>' +
        '<div style="font-family:var(--font-serif);font-size:1.05rem;font-weight:700;margin-bottom:6px;">' + esc(item.title) + '</div>' +
        '<ul style="margin:0;padding-left:20px;font-size:0.88rem;color:var(--text-secondary);">' +
        item.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
        '</ul>';
    }

    var warnClass = timerState.remaining <= 10 ? " warn" : "";
    container.innerHTML =
      '<div class="timer-studio">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">' +
      '    <div>' +
      '      <span class="badge badge-teal">⏱️ 考場全真口試模擬計時器</span>' +
      '      <h3 style="margin:6px 0 2px;font-size:1.12rem;">Paper 4 實戰抽題與限時訓練室</h3>' +
      '      <div style="font-size:0.82rem;color:var(--text-secondary);">按下「隨機抽題」並開啟計時器，開口練習在最後 10 秒前從容收尾！</div>' +
      '    </div>' +
      '    <div class="timer-clock' + warnClass + '" id="p4Clock">' + formatSec(timerState.remaining) + '</div>' +
      '  </div>' +
      '  <div class="prompt-display">' + promptHtml + '</div>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">' +
      '    <button class="btn ' + (isIR ? "btn-primary" : "") + '" id="btnModeIR">1 分鐘 IR 模式</button>' +
      '    <button class="btn ' + (!isIR ? "btn-primary" : "") + '" id="btnModeGI">8 分鐘 GI 模式</button>' +
      '    <button class="btn btn-navy" id="btnTimerToggle">' + (timerState.running ? "⏸ 暫停計時" : "▶ 開始倒數") + '</button>' +
      '    <button class="btn" id="btnTimerReset">↺ 重設時間</button>' +
      '    <button class="btn" id="btnNextPrompt">🎲 隨機換一題</button>' +
      '  </div>' +
      '</div>';

    var btnIR = container.querySelector("#btnModeIR");
    var btnGI = container.querySelector("#btnModeGI");
    var btnToggle = container.querySelector("#btnTimerToggle");
    var btnReset = container.querySelector("#btnTimerReset");
    var btnNext = container.querySelector("#btnNextPrompt");

    btnIR.addEventListener("click", function () {
      clearTimer();
      timerState.mode = "ir";
      timerState.remaining = 60;
      timerState.promptIdx = 0;
      renderSpeakingStudio(container);
    });
    btnGI.addEventListener("click", function () {
      clearTimer();
      timerState.mode = "gi";
      timerState.remaining = 480;
      timerState.promptIdx = 0;
      renderSpeakingStudio(container);
    });
    btnReset.addEventListener("click", function () {
      clearTimer();
      timerState.remaining = timerState.mode === "ir" ? 60 : 480;
      renderSpeakingStudio(container);
    });
    btnNext.addEventListener("click", function () {
      clearTimer();
      timerState.remaining = timerState.mode === "ir" ? 60 : 480;
      timerState.promptIdx += 1;
      renderSpeakingStudio(container);
    });
    btnToggle.addEventListener("click", function () {
      if (timerState.running) {
        clearTimer();
        renderSpeakingStudio(container);
      } else {
        if (timerState.remaining <= 0) timerState.remaining = timerState.mode === "ir" ? 60 : 480;
        timerState.running = true;
        renderSpeakingStudio(container);
        timerState.intervalId = setInterval(function () {
          timerState.remaining -= 1;
          var clockEl = document.getElementById("p4Clock");
          if (clockEl) {
            clockEl.textContent = formatSec(Math.max(0, timerState.remaining));
            if (timerState.remaining <= 10) clockEl.classList.add("warn");
          }
          if (timerState.remaining <= 0) {
            clearTimer();
            if (window.EngAppToast) window.EngAppToast("⏰ 時間到！Time is up — 請檢視自己能否在鈴響前優雅收結。");
            var host = document.getElementById("p4TimerMount");
            if (host) renderSpeakingStudio(host);
          }
        }, 1000);
      }
    });
  }

  /* ========================================================================
     4. 互動自測題庫引擎（涵蓋 Paper 2 / 3A / 4，支援分類過濾與即時計分詳解）
     ======================================================================== */
  var quizState = {
    filter: "ALL",
    answers: {}
  };

  function renderQuizModule(container) {
    if (!container) return;
    var all = window.ENG_QUIZZES || [];
    var cats = ["ALL", "Paper 2 格式", "Paper 2 語言升級", "Paper 3A 聆聽排雷", "Paper 3A 串字地雷", "Paper 4 口試策略", "Paper 4 中式英語", "Paper 4 連接詞"];
    var list = quizState.filter === "ALL" ? all : all.filter(function (q) { return q.cat === quizState.filter; });

    var answeredCnt = Object.keys(quizState.answers).length;
    var correctCnt = 0;
    all.forEach(function (q) {
      if (quizState.answers[q.id] === q.ans) correctCnt += 1;
    });

    var html = "";
    html += '<div class="card">';
    html += '  <div class="card-header">';
    html += '    <h2 class="card-title">🎯 Paper 2 / 3A / 4 綜合陷阱自測題庫</h2>';
    html += '    <div class="card-actions">';
    html += '      <span class="badge badge-emerald">已答 ' + answeredCnt + ' / ' + all.length + ' · 答對 ' + correctCnt + ' 題</span>';
    html += '      <button class="btn btn-sm" id="resetQuizBtn">↺ 重做全部題目</button>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="filter-bar">';
    cats.forEach(function (c) {
      var label = c === "ALL" ? "全部題目 (" + all.length + ")" : c;
      html += '<button class="chip-btn ' + (quizState.filter === c ? "active" : "") + '" data-qcat="' + esc(c) + '">' + esc(label) + '</button>';
    });
    html += '  </div>';

    list.forEach(function (q, idx) {
      var picked = quizState.answers[q.id];
      var hasAns = picked !== undefined;
      var starred = window.EngAppAPI && window.EngAppAPI.isStarred("quiz:" + q.id);

      html += '<div class="quiz-card">';
      html += '  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">';
      html += '    <span class="badge badge-amber">Q' + (idx + 1) + ' · ' + esc(q.cat) + '</span>';
      html += '    <button class="btn btn-sm btn-star ' + (starred ? "is-active" : "") + '" data-star-id="quiz:' + esc(q.id) + '">' + (starred ? "★ 已收藏錯題" : "☆ 收藏此題") + '</button>';
      html += '  </div>';
      html += '  <div style="font-weight:700;font-size:0.95rem;margin-bottom:10px;">' + esc(q.stem) + '</div>';

      q.options.forEach(function (opt, oi) {
        var cls = "quiz-opt";
        if (hasAns) {
          if (oi === q.ans) cls += " correct";
          else if (oi === picked && picked !== q.ans) cls += " wrong";
        }
        html += '<button class="' + cls + '" data-qid="' + esc(q.id) + '" data-oi="' + oi + '"' + (hasAns ? " disabled" : "") + '>' + esc(opt) + '</button>';
      });

      if (hasAns) {
        var ok = picked === q.ans;
        html += '<div class="callout ' + (ok ? "callout-tip" : "callout-trap") + '" style="margin-top:12px;">';
        html += '  <div class="callout-title">' + (ok ? "✓ 答對了！" : "✗ 踩中陷阱了！正確答案為選項 " + ["A", "B", "C", "D"][q.ans]) + '</div>';
        html += '  <div>' + esc(q.exp) + '</div>';
        html += '</div>';
      }
      html += '</div>';
    });

    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll("[data-qcat]").forEach(function (b) {
      b.addEventListener("click", function () {
        quizState.filter = b.getAttribute("data-qcat");
        renderQuizModule(container);
      });
    });
    container.querySelectorAll("[data-qid]").forEach(function (b) {
      b.addEventListener("click", function () {
        var qid = b.getAttribute("data-qid");
        var oi = parseInt(b.getAttribute("data-oi"), 10);
        quizState.answers[qid] = oi;
        renderQuizModule(container);
      });
    });
    container.querySelectorAll("[data-star-id]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (window.EngAppAPI) window.EngAppAPI.toggleStar(b.getAttribute("data-star-id"));
        renderQuizModule(container);
      });
    });
    var resetBtn = container.querySelector("#resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        quizState.answers = {};
        renderQuizModule(container);
      });
    }
  }

  window.ENG_PRACTICE = {
    renderFloorplanSVG: renderFloorplanSVG,
    renderTrendsSVG: renderTrendsSVG,
    speakText: speakText,
    stopSpeech: stopSpeech,
    renderSpeakingStudio: renderSpeakingStudio,
    clearTimer: clearTimer,
    renderQuizModule: renderQuizModule
  };
})();
