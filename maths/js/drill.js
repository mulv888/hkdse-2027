/* ==========================================================================
   Paper 2 MC 限時實戰刷題引擎（支援按 Topic 篩選、即時秒錶計時、雙解法展示）
   ========================================================================== */

window.MathDrillEngine = (function () {
  var topicFilter = "ALL";
  var answers = {};
  var timerSec = 0;
  var timerRunning = false;
  var timerHandle = null;

  function fmtTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    timerHandle = setInterval(function () {
      timerSec++;
      var el = document.getElementById("drillTimerClock");
      if (el) el.textContent = fmtTime(timerSec);
    }, 1000);
  }

  function stopTimer() {
    timerRunning = false;
    if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  }

  function getTopicLabel(tid) {
    var t = (window.MATH_TOPICS || []).find(function (x) { return x.id === tid; });
    return t ? (t.code + " " + t.zh) : tid;
  }

  function render(container, opts) {
    if (opts && opts.topicId) topicFilter = opts.topicId;
    var list = window.MATH_P2_DRILL || [];
    var filtered = topicFilter === "ALL" ? list : list.filter(function (q) { return q.topicId === topicFilter; });

    var answered = Object.keys(answers).length;
    var correct = 0;
    Object.keys(answers).forEach(function (qid) {
      var item = list.find(function (x) { return x.id === qid; });
      if (item && answers[qid] === item.ans) correct++;
    });
    var avgSec = answered > 0 ? Math.round(timerSec / answered) : 0;

    var rich = window.MATH_TEX.rich;
    var html = "";
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">Paper 2 實戰演練 · 限時速度訓練（DSE 目標 ≤ 100 秒/題）</div>';
    html += '  <h1 class="hero-title">Paper 2 MC 限時刷題與秒殺解析室</h1>';
    html += '  <p class="hero-desc">精選 24 道覆蓋全部 12 大 Topic 的高頻陷阱與 Section B 壓軸 MC。作答後即時展示<strong>「⚡ MC 秒殺法」</strong>與<strong>「📐 嚴謹常規解法」</strong>雙解對比！</p>';
    html += '  <div class="hero-actions">';
    html += '    <span class="badge badge-indigo" style="font-size:0.86rem;padding:6px 12px;">⏱ 計時：<strong id="drillTimerClock" style="font-family:var(--font-mono);margin-left:4px;">' + fmtTime(timerSec) + '</strong></span>';
    html += '    <button class="btn btn-primary" id="toggleTimerBtn">' + (timerRunning ? "⏸ 暫停計時" : "▶ 開始計時操練") + '</button>';
    html += '    <button class="btn" id="resetDrillBtn">重設全部作答與計時</button>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="card">';
    html += '  <div class="card-header">';
    html += '    <h2 class="card-title">即時戰績：答對 ' + correct + ' / ' + answered + ' 題（共 ' + list.length + ' 題）' + (answered > 0 ? ' · 平均耗時 ' + avgSec + ' 秒/題' : '') + '</h2>';
    html += '  </div>';
    html += '  <div class="filter-bar">';
    html += '    <button class="chip-btn ' + (topicFilter === "ALL" ? "active" : "") + '" data-drill-topic="ALL">全部 12 大 Topic (' + list.length + ')</button>';
    (window.MATH_TOPICS || []).forEach(function (t) {
      var cnt = list.filter(function (q) { return q.topicId === t.id; }).length;
      html += '<button class="chip-btn ' + (topicFilter === t.id ? "active" : "") + '" data-drill-topic="' + t.id + '">' + t.code + ' ' + t.zh + ' (' + cnt + ')</button>';
    });
    html += '  </div>';
    html += '</div>';

    filtered.forEach(function (q, idx) {
      var picked = answers[q.id];
      var done = typeof picked === "number";
      var starId = "mc:" + q.id;
      var isStar = window.MathAppAPI && window.MathAppAPI.isStarred(starId);
      html += '<div class="quiz-card" id="drill-' + q.id + '">';
      html += '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
      html += '    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">';
      html += '      <span class="badge badge-teal">#' + (idx + 1) + ' · ' + getTopicLabel(q.topicId) + '</span>';
      html += '      <span class="badge badge-amber">' + q.diff + '</span>';
      if (done) {
        html += picked === q.ans
          ? '<span class="badge badge-emerald">✓ 答對</span>'
          : '<span class="badge badge-crimson">✗ 答錯（正解：' + ["A", "B", "C", "D"][q.ans] + '）</span>';
      }
      html += '    </div>';
      html += '    <button class="btn btn-star ' + (isStar ? "is-active" : "") + '" style="padding:4px 10px;font-size:0.76rem;" data-drill-star="' + starId + '">' + (isStar ? "★ 已入錯題本" : "☆ 收藏錯題") + '</button>';
      html += '  </div>';
      html += '  <div style="font-weight:700;font-size:0.98rem;margin-bottom:10px;">' + rich(q.q) + '</div>';
      q.opts.forEach(function (opt, oIdx) {
        var cls = "quiz-opt";
        if (done) {
          if (oIdx === q.ans) cls += " correct";
          else if (oIdx === picked && picked !== q.ans) cls += " wrong";
        }
        html += '<button class="' + cls + '" data-dqid="' + q.id + '" data-oidx="' + oIdx + '" ' + (done ? "disabled" : "") + '>' + rich(opt) + '</button>';
      });
      if (done) {
        html += '<div class="callout callout-hack" style="margin-top:12px;">';
        html += '  <div class="callout-title">⚡ MC 秒殺絕技（30 秒速解）</div>';
        html += '  <div>' + rich(q.hack) + '</div>';
        html += '</div>';
        html += '<div class="callout callout-info" style="margin-bottom:0;">';
        html += '  <div class="callout-title">📐 嚴謹常規解法</div>';
        html += '  <div>' + rich(q.regular) + '</div>';
        html += '</div>';
      }
      html += '</div>';
    });

    container.innerHTML = html;
    bindEvents(container);
  }

  function bindEvents(container) {
    var tBtn = container.querySelector("#toggleTimerBtn");
    if (tBtn) {
      tBtn.addEventListener("click", function () {
        if (timerRunning) stopTimer(); else startTimer();
        render(container);
      });
    }
    var rBtn = container.querySelector("#resetDrillBtn");
    if (rBtn) {
      rBtn.addEventListener("click", function () {
        stopTimer();
        timerSec = 0;
        answers = {};
        render(container);
      });
    }
    container.querySelectorAll("[data-drill-topic]").forEach(function (b) {
      b.addEventListener("click", function () {
        topicFilter = b.getAttribute("data-drill-topic");
        render(container);
      });
    });
    container.querySelectorAll(".quiz-opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!timerRunning && Object.keys(answers).length === 0) startTimer();
        var qid = b.getAttribute("data-dqid");
        var oidx = parseInt(b.getAttribute("data-oidx"), 10);
        answers[qid] = oidx;
        render(container);
      });
    });
    container.querySelectorAll("[data-drill-star]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (window.MathAppAPI) {
          window.MathAppAPI.toggleStar(b.getAttribute("data-drill-star"));
          render(container);
        }
      });
    });
  }

  return { render: render, setTopic: function (t) { topicFilter = t; } };
})();
