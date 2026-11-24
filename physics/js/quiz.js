/* ==========================================================================
   HKDSE Physics Interactive Quiz Engine
   ========================================================================== */
(function () {
  "use strict";

  const state = {
    bookFilter: "all",
    answers: {} // qId -> chosenIdx
  };

  function bi(obj, inline = false) {
    return window.PHY_APP_HELPERS.bi(obj, inline);
  }

  function renderQuizView(container) {
    const books = window.PHY_META.bookCatalog;
    const list = state.bookFilter === "all"
      ? window.PHY_QUIZZES
      : window.PHY_QUIZZES.filter((q) => q.book === state.bookFilter);

    const answered = list.filter((q) => state.answers[q.id] !== undefined);
    const correct = answered.filter((q) => state.answers[q.id] === q.ans);

    container.innerHTML = `
      <div class="page-head">
        <div>
          <span class="hero-kicker">2027 HKDSE Physics · ${bi({ zh: "實戰選擇題庫", en: "Exam-Style Practice" }, true)}</span>
          <h1>${bi({ zh: "模擬測驗（Paper 1 + 選修 E2 & E3）", en: "Practice Quiz (Paper 1 + Electives E2 & E3)" }, true)}</h1>
          <p class="page-head-sub">${bi({ zh: "每題均附完整 DSE 步驟解析與常犯陷阱提醒，支援按課本篩選。", en: "Full worked step-by-step solutions with DSE trap reminders; filterable by Book." })}</p>
        </div>
        <div class="page-head-actions">
          <button class="btn btn-secondary" id="resetQuizBtn">${bi({ zh: "↺ 重置作答", en: "↺ Reset Answers" }, true)}</button>
        </div>
      </div>

      <div class="book-pills" id="quizBookPills">
        <button class="pill-btn ${state.bookFilter === "all" ? "active" : ""}" data-qbook="all">${bi({ zh: "全部課本", en: "All Books" }, true)} (${window.PHY_QUIZZES.length})</button>
        ${books.map((b) => {
          const cnt = window.PHY_QUIZZES.filter((q) => q.book === b.id).length;
          return `<button class="pill-btn ${state.bookFilter === b.id ? "active" : ""}" data-qbook="${b.id}"><span class="pill-dot" style="background:${b.color}"></span>${b.code} (${cnt})</button>`;
        }).join("")}
      </div>

      <div class="section-card" style="padding:0.9rem 1.2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem;">
        <div><strong>${bi({ zh: "當前測驗得分：", en: "Current Score:" }, true)}</strong> <span style="color:var(--p1); font-size:1.15rem; font-weight:800;">${correct.length} / ${answered.length}</span> <span style="color:var(--text-muted); font-size:0.86rem;">(${bi({ zh: `共 ${list.length} 題`, en: `${list.length} questions` }, true)})</span></div>
        <div style="font-size:0.84rem; color:var(--text-muted);">${bi({ zh: "點擊選項即時對答案及檢視詳細推算步驟", en: "Click an option for instant grading & worked explanation" }, true)}</div>
      </div>

      <div id="quizList">
        ${list.map((q, idx) => renderQuestionCard(q, idx)).join("")}
      </div>
    `;

    container.querySelectorAll("[data-qbook]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.bookFilter = btn.dataset.qbook;
        renderQuizView(container);
      });
    });

    const resetBtn = container.querySelector("#resetQuizBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        list.forEach((q) => delete state.answers[q.id]);
        renderQuizView(container);
      });
    }

    container.querySelectorAll(".quiz-opt").forEach((optBtn) => {
      optBtn.addEventListener("click", () => {
        const qId = optBtn.dataset.qid;
        const optIdx = Number(optBtn.dataset.opt);
        if (state.answers[qId] !== undefined) return;
        state.answers[qId] = optIdx;
        renderQuizView(container);
      });
    });
  }

  function renderQuestionCard(q, idx) {
    const bookMeta = window.PHY_META.bookCatalog.find((b) => b.id === q.book);
    const chosen = state.answers[q.id];
    const isAnswered = chosen !== undefined;
    const letters = ["A", "B", "C", "D"];

    return `
      <article class="quiz-card">
        <div class="quiz-q-header">
          <span class="book-tag" style="background:${bookMeta ? bookMeta.color : 'var(--p1)'}">${bookMeta ? bookMeta.code : q.book}</span>
          <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700;">Q${idx + 1}</span>
        </div>
        <div style="font-weight:700; font-size:0.98rem;">${bi(q.q)}</div>
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
            <div style="font-weight:800; margin-bottom:0.3rem;">
              ${chosen === q.ans
                ? bi({ zh: "✓ 答對了！解析如下：", en: "✓ Correct! Explanation:" }, true)
                : bi({ zh: `✗ 正確答案為 ${letters[q.ans]}。詳解：`, en: `✗ Correct answer is ${letters[q.ans]}. Solution:` }, true)}
            </div>
            <div>${bi(q.exp)}</div>
          </div>
        ` : ""}
      </article>
    `;
  }

  window.PHY_QUIZ = {
    render: renderQuizView
  };
})();
