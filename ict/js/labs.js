/* ==========================================================================
   Interactive DSE ICT Revision Labs (Pure JS, Bilingual ZH / EN / BOTH)
   1. Number Systems & 8-bit Two's Complement + Overflow Adder
   2. Multimedia File Size & Bandwidth Calculator
   3. Python Algorithm Step-by-Step Visualizer (Binary Search & 3 Sorts)
   4. Data Structure Simulator (Stack, Circular Queue, Linked List)
   5. SQL-92 Multi-Table Query Playground
   ========================================================================== */

window.ICTLabs = (function () {
  let activeLab = "num";
  let algoState = { frames: [], idx: 0, timer: null, mode: "bubble", arr: [38, 15, 49, 12, 27, 41], target: 27 };
  let dsState = {
    mode: "cqueue",
    stack: { MAX: 5, arr: ["A", "B", null, null, null], top: 1, log: "push('A'); push('B')" },
    cqueue: { MAX: 5, arr: ["P1", "P2", "P3", null, null], front: 0, rear: 2, count: 3, log: "enqueue('P1'); enqueue('P2'); enqueue('P3')" },
    ll: {
      data: ["Ben", "Eva", "Amy", null, null],
      nxt: [1, -1, 0, -1, -1],
      head: 2,
      log: "head = 2 ('Amy' -> 'Ben' -> 'Eva' -> NULL)"
    }
  };
  let activeSqlPreset = 0;

  // Sample DSE Database for SQL Lab
  const DB = {
    STUDENT: [
      { StudID: "S01", Name: "Amy Chan", Class: "6A", Score: 92 },
      { StudID: "S02", Name: "Ben Lee", Class: "6A", Score: 76 },
      { StudID: "S03", Name: "Chloe Ng", Class: "6B", Score: 85 },
      { StudID: "S04", Name: "David Ho", Class: "6B", Score: 48 },
      { StudID: "S05", Name: "Eva Wong", Class: "6A", Score: 88 }
    ],
    COURSE: [
      { CourseID: "C01", Title: "Python Algorithms", Credits: 3 },
      { CourseID: "C02", Title: "SQL Databases", Credits: 3 },
      { CourseID: "C03", Title: "Cybersecurity", Credits: 2 }
    ],
    ENROL: [
      { StudID: "S01", CourseID: "C01", Grade: "A" },
      { StudID: "S01", CourseID: "C02", Grade: "A" },
      { StudID: "S02", CourseID: "C01", Grade: "B" },
      { StudID: "S03", CourseID: "C02", Grade: "A" },
      { StudID: "S03", CourseID: "C03", Grade: "B" },
      { StudID: "S05", CourseID: "C01", Grade: "A" }
    ]
  };

  const SQL_PRESETS = [
    {
      title: { zh: "1. WHERE + ORDER BY（篩選及排序）", en: "1. WHERE + ORDER BY (Filter & Sort)" },
      sql: "SELECT Name, Class, Score\nFROM STUDENT\nWHERE Score >= 80\nORDER BY Score DESC;",
      explain: {
        zh: "執行順序：`FROM STUDENT` → `WHERE Score >= 80` 濾出 3 位高分學生 → `SELECT` 選取欄位 → `ORDER BY Score DESC` 由高至低排序。",
        en: "Execution: `FROM STUDENT` → `WHERE Score >= 80` keeps 3 students → `SELECT` columns → `ORDER BY Score DESC`."
      },
      run: () => DB.STUDENT.filter(s => s.Score >= 80).sort((a, b) => b.Score - a.Score).map(s => ({ Name: s.Name, Class: s.Class, Score: s.Score }))
    },
    {
      title: { zh: "2. GROUP BY + HAVING（分組聚合篩選）", en: "2. GROUP BY + HAVING (Grouped Aggregates)" },
      sql: "SELECT Class, COUNT(*) AS NumStud, AVG(Score) AS AvgScore\nFROM STUDENT\nGROUP BY Class\nHAVING AVG(Score) >= 80;",
      explain: {
        zh: "6A 班平均分 `(92+76+88)/3 = 85.3`，6B 班 `(85+48)/2 = 66.5`。`HAVING` 在分組後只保留平均分 ≥ 80 的 6A 班！",
        en: "6A average = 85.3, 6B average = 66.5. `HAVING` filters groups AFTER grouping, retaining only Class 6A!"
      },
      run: () => {
        const groups = {};
        DB.STUDENT.forEach(s => { (groups[s.Class] = groups[s.Class] || []).push(s.Score); });
        return Object.entries(groups)
          .map(([cls, arr]) => ({ Class: cls, NumStud: arr.length, AvgScore: +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) }))
          .filter(r => r.AvgScore >= 80);
      }
    },
    {
      title: { zh: "3. 三表 INNER JOIN（學生 + 報讀課程）", en: "3. Three-Table INNER JOIN" },
      sql: "SELECT s.Name, c.Title, e.Grade\nFROM STUDENT s\nINNER JOIN ENROL e ON s.StudID = e.StudID\nINNER JOIN COURSE c ON e.CourseID = c.CourseID\nWHERE c.Title LIKE '%Python%';",
      explain: {
        zh: "透過主鍵/外鍵連接 `STUDENT` → `ENROL` → `COURSE`，並用 `LIKE '%Python%'` 找出所有修讀 Python 課程的學生。未報讀的 `David Ho (S04)` 不會出現。",
        en: "Joins `STUDENT` → `ENROL` → `COURSE` via PK/FK keys and filters `LIKE '%Python%'`. Unenrolled `David Ho` is excluded."
      },
      run: () => DB.ENROL
        .map(e => {
          const s = DB.STUDENT.find(x => x.StudID === e.StudID);
          const c = DB.COURSE.find(x => x.CourseID === e.CourseID);
          return { Name: s.Name, Title: c.Title, Grade: e.Grade };
        })
        .filter(r => r.Title.includes("Python"))
    },
    {
      title: { zh: "4. LEFT JOIN + IS NULL（找出 0 報讀學生！）", en: "4. LEFT JOIN + IS NULL (Students with 0 Courses!)" },
      sql: "SELECT s.StudID, s.Name\nFROM STUDENT s\nLEFT JOIN ENROL e ON s.StudID = e.StudID\nWHERE e.StudID IS NULL;",
      explain: {
        zh: "⭐ **DSE 超高頻必考寫法**：`LEFT JOIN` 保留所有學生，未報讀者的右表欄位全為 `NULL`，配 `WHERE e.StudID IS NULL` 精準揪出完全沒選課的 `David Ho (S04)`！",
        en: "⭐ **Classic DSE Pattern**: `LEFT JOIN` retains all students; unmatched right-side fields become `NULL`. Filtering `WHERE e.StudID IS NULL` isolates `David Ho (S04)`!"
      },
      run: () => DB.STUDENT.filter(s => !DB.ENROL.some(e => e.StudID === s.StudID)).map(s => ({ StudID: s.StudID, Name: s.Name }))
    },
    {
      title: { zh: "5. LEFT JOIN + COUNT(e.CourseID) 避坑對比", en: "5. LEFT JOIN + COUNT(e.CourseID) vs COUNT(*) Trap" },
      sql: "SELECT s.Name, COUNT(e.CourseID) AS CorrectCnt, COUNT(*) AS TrapCountStar\nFROM STUDENT s\nLEFT JOIN ENROL e ON s.StudID = e.StudID\nGROUP BY s.StudID, s.Name;",
      explain: {
        zh: "👀 **親眼見證經典陷阱**：注意最後一行 `David Ho`！`COUNT(e.CourseID)` 忽略 NULL 正確得出 **`0`**，但 `COUNT(*)` 卻把 NULL 補齊列錯算成 **`1`**！",
        en: "👀 **See the trap live**: Look at `David Ho`! `COUNT(e.CourseID)` ignores NULL and returns **`0`**, whereas `COUNT(*)` wrongly counts the NULL-padded row as **`1`**!"
      },
      run: () => DB.STUDENT.map(s => {
        const cnt = DB.ENROL.filter(e => e.StudID === s.StudID).length;
        return { Name: s.Name, CorrectCnt: cnt, TrapCountStar: Math.max(1, cnt) };
      })
    },
    {
      title: { zh: "6. 純量子查詢（高於全校平均分）", en: "6. Scalar Subquery (Above School Average)" },
      sql: "SELECT Name, Score\nFROM STUDENT\nWHERE Score > (SELECT AVG(Score) FROM STUDENT);",
      explain: {
        zh: "內層子查詢先算出全校平均分 = `(92+76+85+48+88)/5 = 77.8`，外層再篩出所有高於 `77.8` 的同學。",
        en: "Inner subquery evaluates overall average `77.8`; outer query selects students scoring strictly above `77.8`."
      },
      run: () => {
        const avg = DB.STUDENT.reduce((a, b) => a + b.Score, 0) / DB.STUDENT.length;
        return DB.STUDENT.filter(s => s.Score > avg).map(s => ({ Name: s.Name, Score: s.Score }));
      }
    }
  ];

  // ---------- Helpers ----------
  function toBin8(n) {
    return ((n & 0xff) >>> 0).toString(2).padStart(8, "0");
  }
  function fmtBin(b) {
    return b.slice(0, 4) + " " + b.slice(4);
  }

  // ---------- Algorithm Frame Generator ----------
  function buildAlgoFrames(mode, initArr, target) {
    const frames = [];
    const arr = initArr.slice();
    let comps = 0, swaps = 0;

    if (mode === "bsearch") {
      arr.sort((a, b) => a - b);
      let low = 0, high = arr.length - 1;
      frames.push({ arr: arr.slice(), states: {}, log: `Sorted list ready. Target = ${target}, low = 0, high = ${high}`, comps, swaps });
      let found = -1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        comps++;
        const states = {};
        for (let k = 0; k < arr.length; k++) {
          if (k < low || k > high) states[k] = "dim";
        }
        states[mid] = "mid";
        frames.push({
          arr: arr.slice(),
          states,
          log: `low=${low}, high=${high} -> mid=(${low}+${high})//2 = ${mid} (arr[${mid}]=${arr[mid]} vs target ${target})`,
          comps, swaps
        });
        if (arr[mid] === target) {
          found = mid;
          frames.push({ arr: arr.slice(), states: { ...states, [mid]: "sorted" }, log: `FOUND! arr[${mid}] == ${target} in ${comps} comparison(s).`, comps, swaps });
          break;
        } else if (arr[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      if (found === -1) {
        frames.push({ arr: arr.slice(), states: {}, log: `low (${low}) > high (${high}) -> Return -1 (Not Found after ${comps} comparisons).`, comps, swaps });
      }
      return frames;
    }

    if (mode === "bubble") {
      const n = arr.length;
      const done = {};
      frames.push({ arr: arr.slice(), states: {}, log: "Initial array for Optimized Bubble Sort", comps, swaps });
      for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
          comps++;
          frames.push({ arr: arr.slice(), states: { ...done, [j]: "compare", [j + 1]: "compare" }, log: `Pass ${i + 1}: Compare arr[${j}]=${arr[j]} & arr[${j + 1}]=${arr[j + 1]}`, comps, swaps });
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swaps++;
            swapped = true;
            frames.push({ arr: arr.slice(), states: { ...done, [j]: "swap", [j + 1]: "swap" }, log: `Swap! -> [${arr.join(", ")}]`, comps, swaps });
          }
        }
        done[n - 1 - i] = "sorted";
        if (!swapped) {
          for (let k = 0; k < n; k++) done[k] = "sorted";
          frames.push({ arr: arr.slice(), states: { ...done }, log: `Pass ${i + 1}: swapped == False -> Early exit! Sorted!`, comps, swaps });
          return frames;
        }
      }
      for (let k = 0; k < n; k++) done[k] = "sorted";
      frames.push({ arr: arr.slice(), states: { ...done }, log: `Bubble Sort Complete! Comparisons=${comps}, Swaps=${swaps}`, comps, swaps });
      return frames;
    }

    if (mode === "insertion") {
      const n = arr.length;
      frames.push({ arr: arr.slice(), states: { 0: "sorted" }, log: "Initial: arr[0] is sorted prefix.", comps, swaps });
      for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        frames.push({ arr: arr.slice(), states: { [i]: "mid" }, log: `Pass ${i}: Pick key = arr[${i}] = ${key}`, comps, swaps });
        while (j >= 0 && arr[j] > key) {
          comps++;
          arr[j + 1] = arr[j];
          swaps++;
          frames.push({ arr: arr.slice(), states: { [j]: "compare", [j + 1]: "swap" }, log: `Shift arr[${j}] (${arr[j]}) right to index ${j + 1}`, comps, swaps });
          j--;
        }
        if (j >= 0) comps++;
        arr[j + 1] = key;
        const st = {};
        for (let k = 0; k <= i; k++) st[k] = "sorted";
        frames.push({ arr: arr.slice(), states: st, log: `Insert key=${key} at index ${j + 1} -> [${arr.join(", ")}]`, comps, swaps });
      }
      return frames;
    }

    // Selection sort
    const n = arr.length;
    const done = {};
    frames.push({ arr: arr.slice(), states: {}, log: "Initial array for Selection Sort", comps, swaps });
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        comps++;
        frames.push({ arr: arr.slice(), states: { ...done, [minIdx]: "mid", [j]: "compare" }, log: `Pass ${i + 1}: min_idx=${minIdx} (${arr[minIdx]}), check arr[${j}]=${arr[j]}`, comps, swaps });
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        swaps++;
        frames.push({ arr: arr.slice(), states: { ...done, [i]: "swap", [minIdx]: "swap" }, log: `Swap arr[${i}] with min arr[${minIdx}] -> [${arr.join(", ")}]`, comps, swaps });
      }
      done[i] = "sorted";
    }
    done[n - 1] = "sorted";
    frames.push({ arr: arr.slice(), states: { ...done }, log: `Selection Sort Complete! Comparisons=${comps}, Swaps=${swaps}`, comps, swaps });
    return frames;
  }

  function render(container, bi, esc) {
    if (algoState.timer) { clearInterval(algoState.timer); algoState.timer = null; }

    const tabs = [
      { id: "num", label: { zh: "進制與二進制補碼", en: "Number & 2's Comp" } },
      { id: "media", label: { zh: "多媒體檔案與網速", en: "Media & Bandwidth" } },
      { id: "algo", label: { zh: "Python 算法視覺化", en: "Python Algo Visualizer" } },
      { id: "ds", label: { zh: "Stack / 環形佇列 / 鏈表", en: "Stack / Queue / Linked List" } },
      { id: "sql", label: { zh: "SQL-92 互動查詢室", en: "SQL-92 Playground" } }
    ];

    container.innerHTML = `
      <div class="module-header" style="border-left-color: var(--lab);">
        <div class="module-eyebrow"><span class="paper-tag" style="background:var(--lab-soft);color:var(--lab);">Interactive DSE Labs</span></div>
        <h1>${bi({ zh: "HKDSE ICT 互動計算與視覺化實驗室", en: "HKDSE ICT Interactive Calculation & Visualization Labs" })}</h1>
        <p class="module-sub">${bi({ zh: "親手操作進制補碼溢出、多媒體公式計算、Python 排序搜尋追蹤、環形佇列與鏈結串列指標，以及 SQL 多表查詢結果！", en: "Hands-on labs for 2's complement overflow, multimedia file sizing, Python sorting/searching traces, Circular Queue/Linked List pointers, and SQL-92 multi-table queries!" })}</p>
      </div>
      <div class="lab-tabs">
        ${tabs.map(t => `<button class="lab-tab ${activeLab === t.id ? "active" : ""}" data-lab="${t.id}">${bi(t.label, true)}</button>`).join("")}
      </div>
      <div id="labStage"></div>
    `;

    container.querySelectorAll(".lab-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        activeLab = btn.dataset.lab;
        render(container, bi, esc);
      });
    });

    const stage = container.querySelector("#labStage");
    if (activeLab === "num") renderNumLab(stage, bi);
    else if (activeLab === "media") renderMediaLab(stage, bi);
    else if (activeLab === "algo") renderAlgoLab(stage, bi);
    else if (activeLab === "ds") renderDsLab(stage, bi, esc);
    else if (activeLab === "sql") renderSqlLab(stage, bi, esc);
  }

  // ---------- LAB 1: Number Systems & 8-bit 2's Complement ----------
  function renderNumLab(stage, bi) {
    stage.innerHTML = `
      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "1. 單數轉換器（十進制 ↔ 二進制 ↔ 十六進制 ↔ 8-bit 補碼）", en: "1. Base & 8-bit Two's Complement Converter" })}</h2>
        <div class="lab-grid">
          <div class="field-group">
            <label class="field-label">${bi({ zh: "輸入十進制整數 (-128 至 255)", en: "Enter Denary Integer (-128 to 255)" })}</label>
            <input type="number" id="numInput" class="field-input" value="-37" min="-128" max="255" />
          </div>
        </div>
        <div class="lab-output-grid" id="numOut"></div>
        <div class="viz-log" id="numSteps"></div>
      </div>

      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "2. 8-bit 二進制補碼加法器 & 溢出偵測 (Overflow Detector)", en: "2. 8-bit Two's Complement Adder & Overflow Detector" })}</h2>
        <div class="lab-grid">
          <div class="field-group">
            <label class="field-label">A (-128 ~ +127)</label>
            <input type="number" id="addA" class="field-input" value="90" min="-128" max="127" />
          </div>
          <div class="field-group">
            <label class="field-label">B (-128 ~ +127)</label>
            <input type="number" id="addB" class="field-input" value="60" min="-128" max="127" />
          </div>
        </div>
        <div id="addOut"></div>
      </div>
    `;

    const updateSingle = () => {
      const val = parseInt(stage.querySelector("#numInput").value, 10);
      const out = stage.querySelector("#numOut");
      const steps = stage.querySelector("#numSteps");
      if (isNaN(val) || val < -128 || val > 255) {
        out.innerHTML = `<div class="callout callout-trap">${bi({ zh: "請輸入 -128 至 255 之間的整數。", en: "Please enter an integer between -128 and 255." })}</div>`;
        steps.textContent = "";
        return;
      }
      const uBin = val >= 0 ? fmtBin(toBin8(val)) : "N/A (< 0)";
      const hex = val >= 0 ? "0x" + val.toString(16).toUpperCase().padStart(2, "0") : "0x" + ((val & 0xff) >>> 0).toString(16).toUpperCase().padStart(2, "0") + " (2's)";
      const sm = (val >= -127 && val <= 127)
        ? fmtBin((val < 0 ? "1" : "0") + Math.abs(val).toString(2).padStart(7, "0"))
        : "Out of range (-127..127)";
      const tc = (val >= -128 && val <= 127) ? fmtBin(toBin8(val)) : "Out of range (-128..127)";

      out.innerHTML = `
        <div class="lab-stat"><div class="lab-stat-k">Unsigned 8-bit Binary</div><div class="lab-stat-v">${uBin}</div></div>
        <div class="lab-stat"><div class="lab-stat-k">Hexadecimal (十六進制)</div><div class="lab-stat-v">${hex}</div></div>
        <div class="lab-stat"><div class="lab-stat-k">Sign & Magnitude (符號數值)</div><div class="lab-stat-v">${sm}</div></div>
        <div class="lab-stat"><div class="lab-stat-k">8-bit Two's Complement (補碼)</div><div class="lab-stat-v">${tc}</div></div>
      `;

      if (val < 0 && val >= -128) {
        const pos = toBin8(Math.abs(val));
        const inv = pos.split("").map(b => b === "0" ? "1" : "0").join("");
        const fin = toBin8(val);
        steps.textContent = val === -128
          ? `Special 8-bit minimum: -128 = 1000 0000 (MSB weight = -128)`
          : `Step 1: |${val}| = +${Math.abs(val)} = ${fmtBin(pos)}  →  Step 2 (Invert / 1's Comp): ${fmtBin(inv)}  →  Step 3 (+ 1): ${fmtBin(fin)}`;
      } else {
        steps.textContent = `Check: ${val} = ${val.toString(2)}₂ = ${val.toString(16).toUpperCase()}₁₆`;
      }
    };

    const updateAdder = () => {
      const a = Math.max(-128, Math.min(127, parseInt(stage.querySelector("#addA").value, 10) || 0));
      const b = Math.max(-128, Math.min(127, parseInt(stage.querySelector("#addB").value, 10) || 0));
      const ba = toBin8(a), bb = toBin8(b);
      const rawSum = (a & 0xff) + (b & 0xff);
      const carryOut = rawSum > 255 ? 1 : 0;
      const sumByte = rawSum & 0xff;
      const bsum = toBin8(sumByte);
      const signedRes = sumByte >= 128 ? sumByte - 256 : sumByte;
      const overflow = (a > 0 && b > 0 && signedRes < 0) || (a < 0 && b < 0 && signedRes >= 0);

      stage.querySelector("#addOut").innerHTML = `
        <pre class="diagram-pre">  A (${String(a).padStart(4)}):   ${fmtBin(ba)}
+ B (${String(b).padStart(4)}):   ${fmtBin(bb)}
----------------------------------
Sum (8-bit):  ${fmtBin(bsum)}   (Carry-out = ${carryOut}, Interpreted as signed: ${signedRes})
True Math:    ${a} + (${b}) = ${a + b}</pre>
        <div class="callout ${overflow ? "callout-trap" : "callout-tip"}">
          <div class="callout-title">${overflow ? "⚠️ OVERFLOW ERROR! 發生溢出錯誤！" : "✅ NO OVERFLOW — 運算正確（無溢出）"}</div>
          <div class="callout-body">${overflow
            ? bi({ zh: `兩個同號數相加結果變號，真實和 ${a + b} 超出 8-bit 補碼範圍 [-128, +127]！`, en: `Adding two same-sign numbers flipped the sign bit; true sum ${a + b} is outside [-128, +127]!` })
            : bi({ zh: `結果 ${signedRes} 完全等於真實和 ${a + b}（注意即使 Carry-out=${carryOut} 亦非溢出！）。`, en: `Result ${signedRes} matches true sum ${a + b} (note: carry-out=${carryOut} alone does NOT imply overflow!).` })}
          </div>
        </div>
      `;
    };

    stage.querySelector("#numInput").addEventListener("input", updateSingle);
    stage.querySelector("#addA").addEventListener("input", updateAdder);
    stage.querySelector("#addB").addEventListener("input", updateAdder);
    updateSingle();
    updateAdder();
  }

  // ---------- LAB 2: Multimedia File Size & Bandwidth ----------
  function renderMediaLab(stage, bi) {
    stage.innerHTML = `
      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "多媒體檔案大小 & 網絡下載時間計算機", en: "Multimedia File Size & Download Time Calculator" })}</h2>
        <div class="lab-grid">
          <div class="field-group">
            <label class="field-label">${bi({ zh: "媒體類型", en: "Media Type" })}</label>
            <select id="mType" class="field-select">
              <option value="img">Bitmap Image (點陣圖)</option>
              <option value="aud">Uncompressed Audio (音訊 WAV)</option>
              <option value="vid">Uncompressed Video (視訊)</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">${bi({ zh: "網絡頻寬 (Mbps)", en: "Bandwidth (Mbps)" })}</label>
            <input type="number" id="mBw" class="field-input" value="100" min="1" />
          </div>
        </div>
        <div class="lab-grid" id="mParams"></div>
        <div class="lab-output-grid" id="mOut"></div>
        <div class="viz-log" id="mFormula"></div>
      </div>
    `;

    const renderParams = () => {
      const t = stage.querySelector("#mType").value;
      const p = stage.querySelector("#mParams");
      if (t === "img") {
        p.innerHTML = `
          <div class="field-group"><label class="field-label">Width (px)</label><input id="p1" type="number" class="field-input" value="1920"></div>
          <div class="field-group"><label class="field-label">Height (px)</label><input id="p2" type="number" class="field-input" value="1080"></div>
          <div class="field-group"><label class="field-label">Colour Depth (bits)</label><input id="p3" type="number" class="field-input" value="24"></div>
        `;
      } else if (t === "aud") {
        p.innerHTML = `
          <div class="field-group"><label class="field-label">Sample Rate (Hz)</label><input id="p1" type="number" class="field-input" value="44100"></div>
          <div class="field-group"><label class="field-label">Bit Depth (bits)</label><input id="p2" type="number" class="field-input" value="16"></div>
          <div class="field-group"><label class="field-label">Channels (1=Mono, 2=Stereo)</label><input id="p3" type="number" class="field-input" value="2" min="1" max="8"></div>
          <div class="field-group"><label class="field-label">Duration (seconds)</label><input id="p4" type="number" class="field-input" value="60"></div>
        `;
      } else {
        p.innerHTML = `
          <div class="field-group"><label class="field-label">Width (px)</label><input id="p1" type="number" class="field-input" value="1280"></div>
          <div class="field-group"><label class="field-label">Height (px)</label><input id="p2" type="number" class="field-input" value="720"></div>
          <div class="field-group"><label class="field-label">Colour Depth (bits)</label><input id="p3" type="number" class="field-input" value="24"></div>
          <div class="field-group"><label class="field-label">FPS</label><input id="p4" type="number" class="field-input" value="30"></div>
          <div class="field-group"><label class="field-label">Duration (s)</label><input id="p5" type="number" class="field-input" value="10"></div>
        `;
      }
      p.querySelectorAll("input").forEach(inp => inp.addEventListener("input", calc));
      calc();
    };

    const calc = () => {
      const t = stage.querySelector("#mType").value;
      const bw = Math.max(0.1, parseFloat(stage.querySelector("#mBw").value) || 100);
      let bits = 0, expr = "";
      if (t === "img") {
        const w = +stage.querySelector("#p1").value || 0;
        const h = +stage.querySelector("#p2").value || 0;
        const cd = +stage.querySelector("#p3").value || 0;
        bits = w * h * cd;
        expr = `${w} × ${h} × ${cd} bits ÷ 8 = ${(bits / 8).toLocaleString()} Bytes`;
      } else if (t === "aud") {
        const sr = +stage.querySelector("#p1").value || 0;
        const bd = +stage.querySelector("#p2").value || 0;
        const ch = +stage.querySelector("#p3").value || 0;
        const dur = +stage.querySelector("#p4").value || 0;
        bits = sr * bd * ch * dur;
        expr = `${sr} × ${bd} × ${ch} × ${dur} bits ÷ 8 = ${(bits / 8).toLocaleString()} Bytes`;
      } else {
        const w = +stage.querySelector("#p1").value || 0;
        const h = +stage.querySelector("#p2").value || 0;
        const cd = +stage.querySelector("#p3").value || 0;
        const fps = +stage.querySelector("#p4").value || 0;
        const dur = +stage.querySelector("#p5").value || 0;
        bits = w * h * cd * fps * dur;
        expr = `${w} × ${h} × ${cd} × ${fps} × ${dur} bits ÷ 8 = ${(bits / 8).toLocaleString()} Bytes`;
      }
      const bytes = bits / 8;
      const mbSI = bytes / 1e6;
      const mibIEC = bytes / (1024 * 1024);
      const secs = bits / (bw * 1e6);

      stage.querySelector("#mOut").innerHTML = `
        <div class="lab-stat"><div class="lab-stat-k">Size in Bytes</div><div class="lab-stat-v">${Math.round(bytes).toLocaleString()} B</div></div>
        <div class="lab-stat"><div class="lab-stat-k">MB (SI: ÷ 10⁶)</div><div class="lab-stat-v">${mbSI.toFixed(2)} MB</div></div>
        <div class="lab-stat"><div class="lab-stat-k">MiB (IEC: ÷ 1024²)</div><div class="lab-stat-v">${mibIEC.toFixed(2)} MiB</div></div>
        <div class="lab-stat"><div class="lab-stat-k">Transfer Time @ ${bw} Mbps</div><div class="lab-stat-v">${secs.toFixed(2)} s</div></div>
      `;
      stage.querySelector("#mFormula").textContent = `Formula: ${expr}   |   Time = ${bits.toLocaleString()} bits ÷ (${bw} × 10⁶ bps) = ${secs.toFixed(2)} s`;
    };

    stage.querySelector("#mType").addEventListener("change", renderParams);
    stage.querySelector("#mBw").addEventListener("input", calc);
    renderParams();
  }

  // ---------- LAB 3: Python Algorithm Visualizer ----------
  function renderAlgoLab(stage, bi) {
    if (!algoState.frames.length) {
      algoState.frames = buildAlgoFrames(algoState.mode, algoState.arr, algoState.target);
      algoState.idx = 0;
    }

    stage.innerHTML = `
      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "Python 搜尋與排序演算法步進視覺化", en: "Python Searching & Sorting Step-by-Step Visualizer" })}</h2>
        <div class="lab-grid">
          <div class="field-group">
            <label class="field-label">${bi({ zh: "選擇演算法", en: "Algorithm" })}</label>
            <select id="algoMode" class="field-select">
              <option value="bubble" ${algoState.mode === "bubble" ? "selected" : ""}>Bubble Sort (優化冒泡排序)</option>
              <option value="insertion" ${algoState.mode === "insertion" ? "selected" : ""}>Insertion Sort (插入排序)</option>
              <option value="selection" ${algoState.mode === "selection" ? "selected" : ""}>Selection Sort (選擇排序)</option>
              <option value="bsearch" ${algoState.mode === "bsearch" ? "selected" : ""}>Binary Search (二分搜尋 — 自動排序)</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label">${bi({ zh: "串列數據 (逗號分隔)", en: "List Values (comma-separated)" })}</label>
            <input id="algoArr" class="field-input" value="${algoState.arr.join(", ")}" />
          </div>
          <div class="field-group" id="targetWrap" style="${algoState.mode === "bsearch" ? "" : "display:none"}">
            <label class="field-label">${bi({ zh: "搜尋目標 Target", en: "Search Target" })}</label>
            <input id="algoTarget" type="number" class="field-input" value="${algoState.target}" />
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
          <button class="btn btn-primary btn-sm" id="btnBuild">${bi({ zh: "重設 / 套用", en: "Apply / Reset" }, true)}</button>
          <button class="btn btn-outline btn-sm" id="btnPrev">◀ ${bi({ zh: "上一步", en: "Prev" }, true)}</button>
          <button class="btn btn-outline btn-sm" id="btnNext">${bi({ zh: "下一步", en: "Next" }, true)} ▶</button>
          <button class="btn btn-ec btn-sm" id="btnPlay">▶ ${bi({ zh: "自動播放", en: "Auto Play" }, true)}</button>
          <button class="btn btn-outline btn-sm" id="btnRand">🎲 ${bi({ zh: "隨機陣列", en: "Random" }, true)}</button>
        </div>

        <div class="viz-stage">
          <div class="algo-bars" id="algoBars"></div>
          <div class="viz-log" id="algoLog"></div>
        </div>
      </div>
    `;

    const paint = () => {
      const f = algoState.frames[algoState.idx] || algoState.frames[0];
      const maxVal = Math.max(...f.arr, 1);
      stage.querySelector("#algoBars").innerHTML = f.arr.map((v, i) => {
        const h = Math.max(36, Math.round((v / maxVal) * 150));
        const st = f.states[i] ? `state-${f.states[i]}` : "";
        return `<div class="algo-bar-col"><div class="algo-bar ${st}" style="height:${h}px">${v}</div><div class="algo-idx">[${i}]</div></div>`;
      }).join("");
      stage.querySelector("#algoLog").textContent = `Step ${algoState.idx + 1}/${algoState.frames.length}  |  Comparisons: ${f.comps}  |  Swaps/Shifts: ${f.swaps}\n${f.log}`;
    };

    const rebuild = () => {
      if (algoState.timer) { clearInterval(algoState.timer); algoState.timer = null; }
      algoState.mode = stage.querySelector("#algoMode").value;
      const parsed = stage.querySelector("#algoArr").value.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
      if (parsed.length >= 2 && parsed.length <= 12) algoState.arr = parsed;
      algoState.target = parseInt(stage.querySelector("#algoTarget").value, 10) || 27;
      stage.querySelector("#targetWrap").style.display = algoState.mode === "bsearch" ? "" : "none";
      algoState.frames = buildAlgoFrames(algoState.mode, algoState.arr, algoState.target);
      algoState.idx = 0;
      paint();
    };

    stage.querySelector("#algoMode").addEventListener("change", rebuild);
    stage.querySelector("#btnBuild").addEventListener("click", rebuild);
    stage.querySelector("#btnPrev").addEventListener("click", () => { if (algoState.idx > 0) { algoState.idx--; paint(); } });
    stage.querySelector("#btnNext").addEventListener("click", () => { if (algoState.idx < algoState.frames.length - 1) { algoState.idx++; paint(); } });
    stage.querySelector("#btnRand").addEventListener("click", () => {
      const rnd = Array.from({ length: 7 }, () => Math.floor(Math.random() * 85) + 10);
      stage.querySelector("#algoArr").value = rnd.join(", ");
      stage.querySelector("#algoTarget").value = rnd[Math.floor(Math.random() * rnd.length)];
      rebuild();
    });
    stage.querySelector("#btnPlay").addEventListener("click", () => {
      if (algoState.timer) { clearInterval(algoState.timer); algoState.timer = null; return; }
      if (algoState.idx >= algoState.frames.length - 1) algoState.idx = 0;
      algoState.timer = setInterval(() => {
        if (algoState.idx < algoState.frames.length - 1) { algoState.idx++; paint(); }
        else { clearInterval(algoState.timer); algoState.timer = null; }
      }, 650);
    });

    paint();
  }

  // ---------- LAB 4: Data Structures Simulator ----------
  function renderDsLab(stage, bi, esc) {
    const m = dsState.mode;
    stage.innerHTML = `
      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "選修 C 抽象數據結構模擬器（考評局固定陣列指標版）", en: "Elective C Data Structure Simulator (HKEAA Array-Pointer Model)" })}</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
          <button class="btn btn-sm ${m === "stack" ? "btn-ec" : "btn-outline"}" data-ds="stack">Stack (堆疊 LIFO)</button>
          <button class="btn btn-sm ${m === "cqueue" ? "btn-ec" : "btn-outline"}" data-ds="cqueue">Circular Queue (環形佇列 FIFO)</button>
          <button class="btn btn-sm ${m === "ll" ? "btn-ec" : "btn-outline"}" data-ds="ll">Linked List (平行陣列鏈表)</button>
        </div>
        <div id="dsBody"></div>
      </div>
    `;
    stage.querySelectorAll("[data-ds]").forEach(b => b.addEventListener("click", () => { dsState.mode = b.dataset.ds; renderDsLab(stage, bi, esc); }));

    const body = stage.querySelector("#dsBody");
    if (m === "stack") {
      const st = dsState.stack;
      body.innerHTML = `
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;">
          <input id="dsVal" class="field-input" style="width:130px" placeholder="Value (e.g. C)" value="C" />
          <button class="btn btn-ec btn-sm" id="dsPush">push(val)</button>
          <button class="btn btn-outline btn-sm" id="dsPop">pop()</button>
        </div>
        <div class="viz-stage">
          <div class="slot-row">
            ${st.arr.map((v, i) => `
              <div class="slot-cell ${i <= st.top ? "filled" : ""} ${i === st.top ? "highlight-ptr" : ""}">
                <div class="slot-idx">idx [${i}]</div>
                <div class="slot-val">${i <= st.top ? esc(v) : "—"}</div>
                <div class="slot-ptr">${i === st.top ? "▲ TOP" : ""}</div>
              </div>
            `).join("")}
          </div>
          <div class="viz-log">MAX = ${st.MAX}  |  top = ${st.top}  |  is_empty = ${st.top === -1}  |  is_full = ${st.top === st.MAX - 1}\nLast Action: ${esc(st.log)}</div>
        </div>
      `;
      body.querySelector("#dsPush").addEventListener("click", () => {
        const val = body.querySelector("#dsVal").value.trim() || "X";
        if (st.top === st.MAX - 1) st.log = "⚠️ Stack Overflow! (top == MAX - 1)";
        else { st.top++; st.arr[st.top] = val; st.log = `top += 1 (${st.top}); stack[${st.top}] = '${val}'`; }
        renderDsLab(stage, bi, esc);
      });
      body.querySelector("#dsPop").addEventListener("click", () => {
        if (st.top === -1) st.log = "⚠️ Stack Underflow! (top == -1)";
        else { const out = st.arr[st.top]; st.top--; st.log = `Popped '${out}' -> top -= 1 (${st.top})`; }
        renderDsLab(stage, bi, esc);
      });
    } else if (m === "cqueue") {
      const cq = dsState.cqueue;
      body.innerHTML = `
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;">
          <input id="dsVal" class="field-input" style="width:130px" placeholder="Item (e.g. P4)" value="P${Math.floor(Math.random()*90)+10}" />
          <button class="btn btn-ec btn-sm" id="dsEnq">enqueue(val)</button>
          <button class="btn btn-outline btn-sm" id="dsDeq">dequeue()</button>
        </div>
        <div class="viz-stage">
          <div class="slot-row">
            ${cq.arr.map((v, i) => {
              let active = false;
              for (let k = 0; k < cq.count; k++) if ((cq.front + k) % cq.MAX === i) active = true;
              const ptrs = [];
              if (cq.count > 0 && i === cq.front) ptrs.push("FRONT");
              if (cq.count > 0 && i === cq.rear) ptrs.push("REAR");
              return `
                <div class="slot-cell ${active ? "filled" : ""} ${ptrs.length ? "highlight-ptr" : ""}">
                  <div class="slot-idx">idx [${i}]</div>
                  <div class="slot-val">${active ? esc(v) : "—"}</div>
                  <div class="slot-ptr">${ptrs.join(" / ")}</div>
                </div>
              `;
            }).join("")}
          </div>
          <div class="viz-log">MAX = ${cq.MAX}  |  front = ${cq.front}  |  rear = ${cq.rear}  |  count = ${cq.count}\nWrap Formula: rear = (rear + 1) % ${cq.MAX}  |  front = (front + 1) % ${cq.MAX}\nLast Action: ${esc(cq.log)}</div>
        </div>
      `;
      body.querySelector("#dsEnq").addEventListener("click", () => {
        const val = body.querySelector("#dsVal").value.trim() || "X";
        if (cq.count === cq.MAX) cq.log = "⚠️ Queue Overflow! (count == MAX)";
        else {
          const oldRear = cq.rear;
          cq.rear = (cq.rear + 1) % cq.MAX;
          cq.arr[cq.rear] = val;
          cq.count++;
          cq.log = `rear = (${oldRear} + 1) % ${cq.MAX} = ${cq.rear}; queue[${cq.rear}] = '${val}'; count = ${cq.count}`;
        }
        renderDsLab(stage, bi, esc);
      });
      body.querySelector("#dsDeq").addEventListener("click", () => {
        if (cq.count === 0) cq.log = "⚠️ Queue Underflow! (count == 0)";
        else {
          const out = cq.arr[cq.front];
          const oldFront = cq.front;
          cq.front = (cq.front + 1) % cq.MAX;
          cq.count--;
          cq.log = `Dequeued '${out}'; front = (${oldFront} + 1) % ${cq.MAX} = ${cq.front}; count = ${cq.count}`;
        }
        renderDsLab(stage, bi, esc);
      });
    } else {
      const ll = dsState.ll;
      const chain = [];
      let cur = ll.head, guard = 0;
      while (cur !== -1 && guard++ < 10) { chain.push(`${ll.data[cur]}[${cur}]`); cur = ll.nxt[cur]; }
      body.innerHTML = `
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;">
          <input id="dsVal" class="field-input" style="width:140px" placeholder="Name (e.g. Dan)" value="Dan" />
          <button class="btn btn-ec btn-sm" id="llAddSorted">${bi({ zh: "按字母序插入 (Sorted Insert)", en: "Sorted Insert" }, true)}</button>
          <button class="btn btn-outline btn-sm" id="llDelHead">${bi({ zh: "刪除頭節點 (Delete Head)", en: "Delete Head" }, true)}</button>
          <button class="btn btn-outline btn-sm" id="llReset">${bi({ zh: "重設", en: "Reset" }, true)}</button>
        </div>
        <div class="viz-stage">
          <div style="font-weight:700;margin-bottom:8px;font-family:var(--font-mono);font-size:0.9rem;">
            Logical Traversal: HEAD(${ll.head}) → ${chain.length ? chain.join(" → ") : "(empty)"} → NULL (-1)
          </div>
          <div class="slot-row">
            ${ll.data.map((d, i) => `
              <div class="slot-cell ${d !== null ? "filled" : ""} ${i === ll.head ? "highlight-ptr" : ""}">
                <div class="slot-idx">idx [${i}]</div>
                <div class="slot-val">${d !== null ? esc(d) : "FREE"}</div>
                <div class="slot-ptr">next: ${ll.nxt[i]} ${i === ll.head ? "★HEAD" : ""}</div>
              </div>
            `).join("")}
          </div>
          <div class="viz-log">${esc(ll.log)}</div>
        </div>
      `;
      body.querySelector("#llAddSorted").addEventListener("click", () => {
        const val = body.querySelector("#dsVal").value.trim();
        if (!val) return;
        const freeIdx = ll.data.findIndex(x => x === null);
        if (freeIdx === -1) { ll.log = "⚠️ Array full! No free slot left."; renderDsLab(stage, bi, esc); return; }
        ll.data[freeIdx] = val;
        if (ll.head === -1 || val.toLowerCase() <= ll.data[ll.head].toLowerCase()) {
          ll.nxt[freeIdx] = ll.head;
          ll.head = freeIdx;
          ll.log = `Inserted '${val}' at new HEAD (slot ${freeIdx}): nxt[${freeIdx}]=${ll.nxt[freeIdx]}; head=${freeIdx}`;
        } else {
          let p = ll.head;
          while (ll.nxt[p] !== -1 && ll.data[ll.nxt[p]].toLowerCase() < val.toLowerCase()) p = ll.nxt[p];
          ll.nxt[freeIdx] = ll.nxt[p];
          ll.nxt[p] = freeIdx;
          ll.log = `Inserted '${val}' at slot ${freeIdx} after '${ll.data[p]}'[${p}]: FIRST nxt[${freeIdx}]=${ll.nxt[freeIdx]}, THEN nxt[${p}]=${freeIdx}`;
        }
        renderDsLab(stage, bi, esc);
      });
      body.querySelector("#llDelHead").addEventListener("click", () => {
        if (ll.head === -1) { ll.log = "⚠️ Linked list is already empty."; renderDsLab(stage, bi, esc); return; }
        const oldH = ll.head;
        const name = ll.data[oldH];
        ll.head = ll.nxt[oldH];
        ll.data[oldH] = null;
        ll.nxt[oldH] = -1;
        ll.log = `Deleted HEAD '${name}'[${oldH}]: head = nxt[${oldH}] -> ${ll.head}`;
        renderDsLab(stage, bi, esc);
      });
      body.querySelector("#llReset").addEventListener("click", () => {
        dsState.ll = { data: ["Ben", "Eva", "Amy", null, null], nxt: [1, -1, 0, -1, -1], head: 2, log: "Reset to Amy -> Ben -> Eva" };
        renderDsLab(stage, bi, esc);
      });
    }
  }

  // ---------- LAB 5: SQL-92 Interactive Playground ----------
  function renderSqlLab(stage, bi, esc) {
    const preset = SQL_PRESETS[activeSqlPreset];
    const rows = preset.run();

    const miniTable = (name, data) => {
      const cols = Object.keys(data[0]);
      return `
        <div>
          <div style="font-weight:800;font-size:0.84rem;margin-bottom:5px;color:var(--ea);font-family:var(--font-mono);">${name}</div>
          <div class="table-wrap" style="margin:0;">
            <table class="data-table">
              <thead><tr>${cols.map(c => `<th>${c}</th>`).join("")}</tr></thead>
              <tbody>${data.map(r => `<tr>${cols.map(c => `<td>${esc(String(r[c]))}</td>`).join("")}</tr>`).join("")}</tbody>
            </table>
          </div>
        </div>
      `;
    };

    const resCols = rows.length ? Object.keys(rows[0]) : [];

    stage.innerHTML = `
      <div class="panel">
        <h2 class="panel-title">${bi({ zh: "選修 A SQL-92 實戰查詢室（即時檢視執行結果）", en: "Elective A SQL-92 Live Query Playground" })}</h2>
        <div class="grid-3" style="margin-bottom:18px;">
          ${miniTable("STUDENT (PK: StudID)", DB.STUDENT)}
          ${miniTable("COURSE (PK: CourseID)", DB.COURSE)}
          ${miniTable("ENROL (PK: StudID, CourseID)", DB.ENROL)}
        </div>

        <div class="block-sublabel">${bi({ zh: "點選下列 DSE 必考 SQL 範例即時執行：", en: "Click an exam-style SQL scenario to run live:" })}</div>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px;">
          ${SQL_PRESETS.map((p, idx) => `<button class="btn btn-sm ${idx === activeSqlPreset ? "btn-ea" : "btn-outline"}" data-sql-idx="${idx}">${bi(p.title, true)}</button>`).join("")}
        </div>

        <div class="code-block">
          <div class="code-header">
            <div class="code-header-left"><span class="code-lang-badge lang-sql">SQL-92</span><span class="code-title">${bi(preset.title, true)}</span></div>
          </div>
          <pre class="code-pre">${esc(preset.sql)}</pre>
        </div>

        <div class="callout callout-info">
          <div class="callout-title">💡 ${bi({ zh: "執行原理解析", en: "Query Execution Breakdown" }, true)}</div>
          <div class="callout-body">${bi(preset.explain)}</div>
        </div>

        <div class="block-sublabel">${bi({ zh: `查詢結果 (${rows.length} 筆記錄)：`, en: `Query Output (${rows.length} rows):` })}</div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>${resCols.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>
            <tbody>${rows.map(r => `<tr>${resCols.map(c => `<td><strong>${esc(String(r[c]))}</strong></td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
    `;

    stage.querySelectorAll("[data-sql-idx]").forEach(btn => {
      btn.addEventListener("click", () => {
        activeSqlPreset = parseInt(btn.dataset.sqlIdx, 10);
        renderSqlLab(stage, bi, esc);
      });
    });
  }

  return { render };
})();
