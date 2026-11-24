/* ==========================================================================
   互動自測選擇題與十二篇名句默書練習室引擎
   ========================================================================== */

window.ChiQuizEngine = (function () {
  var currentTab = "mc"; // "mc" | "dictation"
  var mcFilter = "全部";
  var userAnswers = {};
  var dictRevealed = {};
  var dictCheckState = {};

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeText(s) {
    return String(s || "")
      .replace(/[\s，。、；：！？「」『』（）()·・,.;:!?]/g, "")
      .trim();
  }

  function render(container, subMode) {
    if (subMode === "mc" || subMode === "dictation") {
      currentTab = subMode;
    }
    var mcList = (window.CHI_QUIZZES && window.CHI_QUIZZES.mc) || [];
    var dictList = (window.CHI_QUIZZES && window.CHI_QUIZZES.dictations) || [];

    var cats = ["全部"];
    mcList.forEach(function (q) {
      if (cats.indexOf(q.cat) === -1) cats.push(q.cat);
    });

    var answeredCount = Object.keys(userAnswers).length;
    var correctCount = 0;
    Object.keys(userAnswers).forEach(function (qid) {
      var item = mcList.find(function (x) { return x.id === qid; });
      if (item && userAnswers[qid] === item.ans) correctCount++;
    });

    var html = '';
    html += '<div class="hero-banner">';
    html += '  <div class="hero-eyebrow">實戰演練 · 即時批改與錯字預警</div>';
    html += '  <h1 class="hero-title">互動自測題庫與十二篇名句默書室</h1>';
    html += '  <p class="hero-desc">先透過 24 道 DSE 高頻陷阱選擇題檢測文言字詞、特殊句式、篇章手法與實用文格式，再挑戰 16 組必背名句默書填空，徹底消滅奪命錯別字！</p>';
    html += '  <div class="hero-actions">';
    html += '    <button class="btn ' + (currentTab === "mc" ? "btn-primary" : "") + '" data-quiz-mode="mc">模擬選擇題自測（' + mcList.length + ' 題）</button>';
    html += '    <button class="btn ' + (currentTab === "dictation" ? "btn-primary" : "") + '" data-quiz-mode="dictation">十二篇名句默書挑戰（' + dictList.length + ' 題）</button>';
    html += '    <button class="btn" id="resetQuizBtn">重設作答紀錄</button>';
    html += '  </div>';
    html += '</div>';

    if (currentTab === "mc") {
      html += '<div class="card">';
      html += '  <div class="card-header">';
      html += '    <h2 class="card-title">模擬選擇題得分統計：' + correctCount + ' / ' + answeredCount + ' 題答對（共 ' + mcList.length + ' 題）</h2>';
      html += '  </div>';
      html += '  <div class="filter-bar">';
      cats.forEach(function (c) {
        html += '<button class="chip-btn ' + (mcFilter === c ? "active" : "") + '" data-mc-cat="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
      });
      html += '  </div>';
      html += '</div>';

      var filtered = mcFilter === "全部" ? mcList : mcList.filter(function (q) { return q.cat === mcFilter; });
      filtered.forEach(function (q, idx) {
        var picked = userAnswers[q.id];
        var isAnswered = typeof picked === "number";
        html += '<div class="quiz-card" id="quiz-' + escapeHtml(q.id) + '">';
        html += '  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">';
        html += '    <span class="badge badge-vermilion">第 ' + (idx + 1) + ' 題 · ' + escapeHtml(q.cat) + '</span>';
        if (isAnswered) {
          html += picked === q.ans
            ? '<span class="badge badge-emerald">✓ 答對</span>'
            : '<span class="badge badge-vermilion">✗ 答錯</span>';
        }
        html += '  </div>';
        html += '  <div style="font-weight:700;font-size:1rem;margin-bottom:10px;">' + escapeHtml(q.q) + '</div>';
        q.opts.forEach(function (opt, oIdx) {
          var cls = "quiz-opt";
          if (isAnswered) {
            if (oIdx === q.ans) cls += " correct";
            else if (oIdx === picked && picked !== q.ans) cls += " wrong";
          }
          html += '<button class="' + cls + '" data-qid="' + escapeHtml(q.id) + '" data-oidx="' + oIdx + '" ' + (isAnswered ? "disabled" : "") + '>' + escapeHtml(opt) + '</button>';
        });
        if (isAnswered) {
          html += '<div class="callout callout-info" style="margin-top:12px;margin-bottom:0;">';
          html += '  <div class="callout-title">評卷解析</div>';
          html += '  <div>' + escapeHtml(q.exp) + '</div>';
          html += '</div>';
        }
        html += '</div>';
      });
    } else {
      html += '<div class="callout callout-exam">';
      html += '  <div class="callout-title">DSE 摘句默寫評分鐵律</div>';
      html += '  <div>卷一甲部摘錄原句題實行<strong>「錯一字即該句 0 分」</strong>（包括通假字不可私改本字、漏寫句末虛詞「也／矣／焉」均會失分）！可直接在輸入框打字核對，或手寫在紙上後點擊「核對原句」自我批改。</div>';
      html += '</div>';

      dictList.forEach(function (d, i) {
        var isRev = !!dictRevealed[d.id];
        var state = dictCheckState[d.id];
        html += '<div class="quiz-card" id="dict-' + escapeHtml(d.id) + '">';
        html += '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
        html += '    <span class="badge badge-jade">默書 #' + (i + 1) + ' · ' + escapeHtml(d.source) + '</span>';
        if (state === "correct") html += '<span class="badge badge-emerald">✓ 完全正確（零錯字！）</span>';
        else if (state === "wrong") html += '<span class="badge badge-vermilion">✗ 有錯漏字，請仔細核對紅字提醒</span>';
        html += '  </div>';
        html += '  <div style="font-family:var(--font-serif);font-size:1.08rem;font-weight:700;margin-bottom:12px;">' + escapeHtml(d.prompt) + '</div>';
        html += '  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">';
        html += '    <input type="text" class="dictation-input" id="input-' + escapeHtml(d.id) + '" placeholder="輸入空格原句（可不打標點）..." value="' + escapeHtml(d._lastVal || "") + '" />';
        html += '    <button class="btn btn-primary" data-dict-check="' + escapeHtml(d.id) + '">核對答案</button>';
        html += '    <button class="btn" data-dict-reveal="' + escapeHtml(d.id) + '">' + (isRev ? "隱藏答案" : "直接顯示原句") + '</button>';
        html += '  </div>';
        if (isRev || state) {
          html += '<div class="callout callout-trap" style="margin-top:12px;margin-bottom:0;">';
          html += '  <div class="callout-title">標準原文：<span style="font-family:var(--font-serif);font-size:1.08rem;">' + escapeHtml(d.answer) + '</span></div>';
          html += '  <div>' + escapeHtml(d.trap) + '</div>';
          html += '</div>';
        }
        html += '</div>';
      });
    }

    container.innerHTML = html;
    bindEvents(container);
  }

  function bindEvents(container) {
    container.querySelectorAll("[data-quiz-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTab = btn.getAttribute("data-quiz-mode");
        render(container);
      });
    });

    var resetBtn = container.querySelector("#resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        userAnswers = {};
        dictRevealed = {};
        dictCheckState = {};
        ((window.CHI_QUIZZES && window.CHI_QUIZZES.dictations) || []).forEach(function (d) { delete d._lastVal; });
        render(container);
      });
    }

    container.querySelectorAll("[data-mc-cat]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        mcFilter = btn.getAttribute("data-mc-cat");
        render(container);
      });
    });

    container.querySelectorAll(".quiz-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qid = btn.getAttribute("data-qid");
        var oidx = parseInt(btn.getAttribute("data-oidx"), 10);
        userAnswers[qid] = oidx;
        render(container);
      });
    });

    container.querySelectorAll("[data-dict-check]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var did = btn.getAttribute("data-dict-check");
        var inp = container.querySelector("#input-" + did);
        var val = inp ? inp.value : "";
        var item = ((window.CHI_QUIZZES && window.CHI_QUIZZES.dictations) || []).find(function (x) { return x.id === did; });
        if (item) {
          item._lastVal = val;
          dictCheckState[did] = normalizeText(val) === normalizeText(item.answer) ? "correct" : "wrong";
          dictRevealed[did] = true;
          render(container);
        }
      });
    });

    container.querySelectorAll("[data-dict-reveal]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var did = btn.getAttribute("data-dict-reveal");
        var inp = container.querySelector("#input-" + did);
        var item = ((window.CHI_QUIZZES && window.CHI_QUIZZES.dictations) || []).find(function (x) { return x.id === did; });
        if (item && inp) item._lastVal = inp.value;
        dictRevealed[did] = !dictRevealed[did];
        render(container);
      });
    });
  }

  return { render: render };
})();
