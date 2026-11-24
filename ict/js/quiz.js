/* ==========================================================================
   Interactive Bilingual HKDSE ICT Practice Quiz Engine
   ========================================================================== */

window.ICTQuiz = (function () {
  let filter = "all";
  let answers = {}; // { qid: chosenIndex }

  function render(container, bi, esc, highlightCode) {
    const all = window.ICT_QUIZZES || [];
    const list = filter === "all" ? all : all.filter(q => q.paper === filter);

    const attempted = list.filter(q => answers[q.id] !== undefined).length;
    const correct = list.filter(q => answers[q.id] === q.answer).length;
    const pct = attempted ? Math.round((correct / attempted) * 100) : 0;

    const filters = [
      { id: "all", label: { zh: `全部題目 (${all.length})`, en: `All Questions (${all.length})` } },
      { id: "paper1", label: { zh: `卷一 必修 (${all.filter(q => q.paper === "paper1").length})`, en: `Paper 1 Core (${all.filter(q => q.paper === "paper1").length})` } },
      { id: "electiveA", label: { zh: `選修 A 數據庫 (${all.filter(q => q.paper === "electiveA").length})`, en: `Elective A DB (${all.filter(q => q.paper === "electiveA").length})` } },
      { id: "electiveC", label: { zh: `選修 C Python (${all.filter(q => q.paper === "electiveC").length})`, en: `Elective C Python (${all.filter(q => q.paper === "electiveC").length})` } }
    ];

    container.innerHTML = `
      <div class="module-header" style="border-left-color: var(--quiz);">
        <div class="module-eyebrow"><span class="paper-tag" style="background:var(--quiz-soft);color:var(--quiz);">HKDSE Exam Drills</span></div>
        <h1>${bi({ zh: "2027 DSE ICT 分單元模擬測驗（附中英詳解）", en: "2027 HKDSE ICT Practice Quiz (With Bilingual Explanations)" })}</h1>
        <p class="module-sub">${bi({ zh: "精選卷一、選修 A (SQL / 正規化) 與選修 C (Python 3 / 算法 / 數據結構) 高頻陷阱題，即時批改並顯示詳細解說。", en: "Curated Paper 1, Elective A (SQL / Normalization), and Elective C (Python 3 / Algorithms / Data Structures) trap questions with instant explanations." })}</p>
      </div>

      <div class="quiz-controls">
        <div class="quiz-filter-row">
          ${filters.map(f => `<button class="mod-pill ${filter === f.id ? "active" : ""}" data-qfilter="${f.id}">${bi(f.label, true)}</button>`).join("")}
        </div>
        <button class="btn btn-outline btn-sm" id="resetQuizBtn">↺ ${bi({ zh: "重設作答紀錄", en: "Reset Answers" }, true)}</button>
      </div>

      <div class="quiz-score-banner">
        <div>
          <strong>${bi({ zh: "目前成績", en: "Current Score" }, true)}:</strong>
          <span style="font-family:var(--font-mono);font-size:1.05rem;font-weight:800;color:var(--ea);margin-left:6px;">${correct} / ${attempted}</span>
          <span style="color:var(--text-muted);font-size:0.86rem;margin-left:6px;">(${attempted}/${list.length} ${bi({ zh: "已答", en: "answered" }, true)} · ${pct}%)</span>
        </div>
        <div style="width:180px;" class="progress-track">
          <div class="progress-fill" style="width:${list.length ? Math.round((attempted / list.length) * 100) : 0}%"></div>
        </div>
      </div>

      <div id="quizList">
        ${list.map((q, idx) => renderQuestion(q, idx, bi, esc, highlightCode)).join("")}
      </div>
    `;

    container.querySelectorAll("[data-qfilter]").forEach(btn => {
      btn.addEventListener("click", () => {
        filter = btn.dataset.qfilter;
        render(container, bi, esc, highlightCode);
      });
    });

    container.querySelector("#resetQuizBtn").addEventListener("click", () => {
      list.forEach(q => { delete answers[q.id]; });
      render(container, bi, esc, highlightCode);
    });

    container.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = btn.dataset.qid;
        const optIdx = parseInt(btn.dataset.opt, 10);
        if (answers[qid] !== undefined) return;
        answers[qid] = optIdx;
        render(container, bi, esc, highlightCode);
      });
    });
  }

  function renderQuestion(q, idx, bi, esc, highlightCode) {
    const chosen = answers[q.id];
    const answered = chosen !== undefined;
    const tagClass = q.paper === "electiveA" ? "tag-ea" : q.paper === "electiveC" ? "tag-ec" : "tag-p1";
    const letters = ["A", "B", "C", "D"];
    const codeLang = q.paper === "electiveA" ? "sql" : "python";

    return `
      <div class="quiz-card">
        <div class="quiz-q-header">
          <span class="paper-tag ${tagClass}" style="margin:0;">Q${idx + 1} · ${bi(q.tag, true)}</span>
          ${answered ? `<span style="font-weight:800;font-size:0.84rem;color:${chosen === q.answer ? "var(--ea)" : "#ef4444"}">${chosen === q.answer ? "✓ " + bi({ zh: "答對了！", en: "Correct!" }, true) : "✗ " + bi({ zh: "再留意細節", en: "Review Trap" }, true)}</span>` : ""}
        </div>
        <div class="quiz-q-text">${bi(q.question)}</div>
        ${q.code ? `
          <div class="code-block" style="margin-top:0;margin-bottom:14px;">
            <pre class="code-pre">${highlightCode(q.code, codeLang)}</pre>
          </div>
        ` : ""}
        <div class="quiz-options">
          ${q.options.map((opt, oi) => {
            let cls = "";
            if (answered) {
              if (oi === q.answer) cls = "opt-correct";
              else if (oi === chosen) cls = "opt-wrong";
            }
            return `
              <button class="quiz-opt ${cls}" data-qid="${q.id}" data-opt="${oi}" ${answered ? "disabled" : ""}>
                <span class="opt-letter">${letters[oi]}</span>
                <span>${bi(opt)}</span>
              </button>
            `;
          }).join("")}
        </div>
        ${answered ? `
          <div class="quiz-explain">
            <strong>💡 ${bi({ zh: "詳細解析", en: "Explanation" }, true)}：</strong>
            <div style="margin-top:4px;">${bi(q.explanation)}</div>
          </div>
        ` : ""}
      </div>
    `;
  }

  return { render };
})();
