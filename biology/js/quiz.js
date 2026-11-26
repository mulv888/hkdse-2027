/* ==========================================================================
   HKDSE Biology Interactive Practice Quiz Engine
   Filterable across all 9 Units (U1–U5 Compulsory + E1–E4 Electives)
   ========================================================================== */
(function () {
  "use strict";

  const qState = {
    unitFilter: "all",
    answers: {}
  };

  function bi(obj, inline) {
    return window.BIO_APP_HELPERS.bi(obj, inline);
  }

  function renderQuizView(container) {
    const units = window.BIO_META.unitCatalog;
    const list = qState.unitFilter === "all"
      ? window.BIO_QUIZZES
      : window.BIO_QUIZZES.filter((q) => q.unit === qState.unitFilter);

    const answered = list.filter((q) => qState.answers[q.id] !== undefined);
    const correct = answered.filter((q) => qState.answers[q.id] === q.ans);

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker" style="color:var(--quiz);background:var(--quiz-soft);border-color:var(--quiz-border)">
            📝 2027 HKDSE Biology · ${bi({ en: "Exam-Style MCQs", zh: "實戰選擇題庫" }, true)}
          </span>
          <h1>${bi({ en: "Practice Quiz (Compulsory U1–U5 + Electives E1–E4)", zh: "模擬測驗（必修 U1–U5 ＋ 選修 E1–E4）" })}</h1>
          <p class="page-head-sub">${bi({ en: "High-yield Paper 1A & Paper 2 concept checks with exact HKEAA marking scheme explanations.", zh: "涵蓋高頻考點與常見陷阱，點擊選項即時核對答案及檢視考評局標準解析。" })}</p>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-secondary" id="resetQuizBtn">↺ ${bi({ en: "Reset Answers", zh: "重置作答" }, true)}</button>
        </div>
      </div>

      <div class="unit-pills">
        <button class="pill-btn ${qState.unitFilter === "all" ? "active" : ""}" data-qunit="all">${bi({ en: "All Units", zh: "全部單元" }, true)} (${window.BIO_QUIZZES.length})</button>
        ${units.map((u) => {
          const cnt = window.BIO_QUIZZES.filter((q) => q.unit === u.id).length;
          return `<button class="pill-btn ${qState.unitFilter === u.id ? "active" : ""}" data-qunit="${u.id}">
            <span class="pill-dot" style="background:${u.color}"></span>${u.code} (${cnt})
          </button>`;
        }).join("")}
      </div>

      <div class="section-card" style="padding:0.85rem 1.2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem;">
        <div>
          <strong>${bi({ en: "Current Score:", zh: "當前測驗得分：" }, true)}</strong>
          <span style="color:var(--core); font-size:1.15rem; font-weight:800; font-family:var(--font-mono); margin-left:6px;">${correct.length} / ${answered.length}</span>
          <span style="color:var(--text-muted); font-size:0.84rem; margin-left:6px;">(${list.length} ${bi({ en: "questions", zh: "題" }, true)})</span>
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted);">${bi({ en: "Click an option for instant grading & bilingual HKEAA explanation", zh: "點擊選項即時批改並顯示雙語評卷詳解" }, true)}</div>
      </div>

      <div>
        ${list.map((q, idx) => renderQuestionCard(q, idx)).join("")}
      </div>
    `;

    container.querySelectorAll("[data-qunit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        qState.unitFilter = btn.dataset.qunit;
        renderQuizView(container);
      });
    });

    const resetBtn = container.querySelector("#resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        list.forEach((q) => delete qState.answers[q.id]);
        renderQuizView(container);
      });
    }

    container.querySelectorAll(".quiz-opt").forEach((optBtn) => {
      optBtn.addEventListener("click", () => {
        const qId = optBtn.dataset.qid;
        const optIdx = Number(optBtn.dataset.opt);
        if (qState.answers[qId] !== undefined) return;
        qState.answers[qId] = optIdx;
        renderQuizView(container);
      });
    });
  }

  function renderQuestionCard(q, idx) {
    const uMeta = window.BIO_META.unitCatalog.find((u) => u.id === q.unit);
    const chosen = qState.answers[q.id];
    const isAnswered = chosen !== undefined;
    const letters = ["A", "B", "C", "D"];

    return `
      <article class="quiz-card">
        <div class="quiz-q-header">
          <span class="unit-tag" style="background:${uMeta ? uMeta.color : "var(--core)"}">${uMeta ? uMeta.code : q.unit}</span>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">Q${idx + 1}</span>
        </div>
        <div style="font-weight:700; font-size:0.97rem;">${bi(q.q)}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => {
            let cls = "quiz-opt";
            if (isAnswered) {
              if (oi === q.ans) cls += " is-correct";
              else if (oi === chosen && oi !== q.ans) cls += " is-wrong";
            }
            return `
              <button class="${cls}" data-qid="${q.id}" data-opt="${oi}" ${isAnswered ? "disabled" : ""}>
                <span class="quiz-opt-letter">${letters[oi]}</span>
                <span>${bi(opt)}</span>
              </button>
            `;
          }).join("")}
        </div>
        ${isAnswered ? `
          <div class="quiz-exp">
            <div style="font-weight:800; margin-bottom:0.28rem;">
              ${chosen === q.ans
                ? bi({ en: "✓ Correct! HKEAA Explanation:", zh: "✓ 答對了！解析如下：" }, true)
                : bi({ en: `✗ Correct answer is ${letters[q.ans]}. Explanation:`, zh: `✗ 正確答案為 ${letters[q.ans]}。詳解：` }, true)}
            </div>
            <div>${bi(q.exp)}</div>
          </div>
        ` : ""}
      </article>
    `;
  }

  window.BIO_QUIZ = { render: renderQuizView };
})();
