/* ==========================================================================
   Offline Crisp SVG Geometry & Graph Diagram Library for HKDSE Maths
   Adapts seamlessly to Light & Dark themes via CSS variables
   ========================================================================== */

window.MATH_SVG = {
  /* 1. 3D 三角學：斜棱錐與線面角 / 二面角（三垂線定理） */
  trig3d: function () {
    return `
    <div class="svg-figure">
      <svg viewBox="0 0 460 250" width="440" role="img" aria-label="3D Trigonometry Pyramid Diagram">
        <!-- Base plane ABCD (parallelogram perspective) -->
        <polygon points="70,195 270,215 390,155 190,140" fill="var(--svg-fill-teal)" stroke="var(--svg-ink)" stroke-width="1.8"/>
        <!-- Dashed hidden edges -->
        <line x1="210" y1="38" x2="190" y2="140" stroke="var(--svg-muted)" stroke-width="1.5" stroke-dasharray="5,4"/>
        <line x1="210" y1="38" x2="210" y2="176" stroke="var(--svg-red)" stroke-width="2" stroke-dasharray="5,3"/>
        <line x1="210" y1="176" x2="330" y2="185" stroke="var(--svg-blue)" stroke-width="2"/>
        <line x1="210" y1="38" x2="330" y2="185" stroke="var(--svg-amber)" stroke-width="2.2"/>
        <!-- Visible pyramid edges -->
        <line x1="210" y1="38" x2="70" y2="195" stroke="var(--svg-ink)" stroke-width="1.8"/>
        <line x1="210" y1="38" x2="270" y2="215" stroke="var(--svg-ink)" stroke-width="2"/>
        <line x1="210" y1="38" x2="390" y2="155" stroke="var(--svg-ink)" stroke-width="1.8"/>
        <!-- Right angle markers at F and M -->
        <polyline points="210,164 222,165 222,177" fill="none" stroke="var(--svg-red)" stroke-width="1.5"/>
        <polyline points="319,184 324,176 335,177" fill="none" stroke="var(--svg-blue)" stroke-width="1.5"/>
        <!-- Angle arc for dihedral angle VMF -->
        <path d="M 304,183 A 26,26 0 0 1 312,164" fill="none" stroke="var(--svg-amber)" stroke-width="2"/>
        <!-- Points -->
        <circle cx="210" cy="38" r="3.5" fill="var(--svg-red)"/>
        <circle cx="210" cy="176" r="3.5" fill="var(--svg-red)"/>
        <circle cx="330" cy="185" r="3.5" fill="var(--svg-blue)"/>
        <!-- Labels -->
        <text x="206" y="28" fill="var(--svg-ink)" font-size="14" font-weight="700">V (頂點)</text>
        <text x="195" y="192" fill="var(--svg-red)" font-size="13" font-weight="700">F (垂直足)</text>
        <text x="336" y="198" fill="var(--svg-blue)" font-size="13" font-weight="700">M (FM ⊥ BC)</text>
        <text x="54" y="206" fill="var(--svg-ink)" font-size="13" font-weight="700">A</text>
        <text x="268" y="232" fill="var(--svg-ink)" font-size="13" font-weight="700">B</text>
        <text x="396" y="158" fill="var(--svg-ink)" font-size="13" font-weight="700">C</text>
        <text x="180" y="132" fill="var(--svg-muted)" font-size="13" font-weight="700">D</text>
        <text x="284" y="168" fill="var(--svg-amber)" font-size="13" font-weight="700">θ (二面角)</text>
      </svg>
      <div class="svg-caption">三垂線定理黃金模型：VF ⊥ 平面 ABCD 且 FM ⊥ BC ⇒ VM ⊥ BC，故平面 VBC 與底面夾角為 ∠VMF = θ</div>
    </div>`;
  },

  /* 2. 圓方程、弦中點與切線幾何圖 */
  circleTangent: function () {
    return `
    <div class="svg-figure">
      <svg viewBox="0 0 460 250" width="440" role="img" aria-label="Circle Equation, Chord and Tangent">
        <!-- Axes -->
        <line x1="25" y1="210" x2="435" y2="210" stroke="var(--svg-axis)" stroke-width="1.3"/>
        <line x1="65" y1="235" x2="65" y2="18" stroke="var(--svg-axis)" stroke-width="1.3"/>
        <text x="426" y="226" fill="var(--svg-axis)" font-size="12" font-style="italic">x</text>
        <text x="50" y="26" fill="var(--svg-axis)" font-size="12" font-style="italic">y</text>
        <!-- Circle -->
        <circle cx="195" cy="118" r="72" fill="var(--svg-fill-blue)" stroke="var(--svg-blue)" stroke-width="2.2"/>
        <!-- Tangent from external point P(375, 118) -->
        <line x1="375" y1="118" x2="224" y2="52" stroke="var(--svg-red)" stroke-width="2"/>
        <line x1="375" y1="118" x2="224" y2="184" stroke="var(--svg-red)" stroke-width="1.8" stroke-dasharray="5,4"/>
        <!-- Radius to tangent point T & line GP -->
        <line x1="195" y1="118" x2="224" y2="52" stroke="var(--svg-teal)" stroke-width="2"/>
        <line x1="195" y1="118" x2="375" y2="118" stroke="var(--svg-amber)" stroke-width="1.6" stroke-dasharray="4,3"/>
        <!-- Chord AB & perpendicular from G -->
        <line x1="127" y1="95" x2="175" y2="187" stroke="var(--svg-violet)" stroke-width="2"/>
        <line x1="195" y1="118" x2="151" y2="141" stroke="var(--svg-violet)" stroke-width="1.6" stroke-dasharray="4,3"/>
        <!-- Points -->
        <circle cx="195" cy="118" r="4" fill="var(--svg-blue)"/>
        <circle cx="224" cy="52" r="4" fill="var(--svg-red)"/>
        <circle cx="375" cy="118" r="4" fill="var(--svg-red)"/>
        <circle cx="151" cy="141" r="3.5" fill="var(--svg-violet)"/>
        <!-- Labels -->
        <text x="198" y="136" fill="var(--svg-blue)" font-size="13" font-weight="700">G(h, k)</text>
        <text x="220" y="42" fill="var(--svg-red)" font-size="13" font-weight="700">T (切點, GT ⊥ PT)</text>
        <text x="364" y="106" fill="var(--svg-red)" font-size="13" font-weight="700">P(x₀, y₀)</text>
        <text x="196" y="84" fill="var(--svg-teal)" font-size="12" font-weight="700">r</text>
        <text x="282" y="112" fill="var(--svg-amber)" font-size="12" font-weight="700">d = GP</text>
        <text x="108" y="88" fill="var(--svg-violet)" font-size="12" font-weight="700">A</text>
        <text x="172" y="202" fill="var(--svg-violet)" font-size="12" font-weight="700">B</text>
        <text x="130" y="154" fill="var(--svg-violet)" font-size="12" font-weight="700">M (弦中點)</text>
      </svg>
      <div class="svg-caption">圓方程兩大核心直角三角形：① 切線長 PT = √(GP² − r²)；② 半弦長 AM = √(r² − GM²)</div>
    </div>`;
  },

  /* 3. 三角形四心對比示意圖 */
  fourCentres: function () {
    return `
    <div class="svg-figure">
      <svg viewBox="0 0 460 230" width="440" role="img" aria-label="Four Centres of a Triangle">
        <!-- Obtuse/Scalene Triangle -->
        <polygon points="65,190 365,190 155,48" fill="var(--svg-fill-teal)" stroke="var(--svg-ink)" stroke-width="2"/>
        <!-- Circumcircle (dashed) -->
        <circle cx="215" cy="146" r="156" fill="none" stroke="var(--svg-blue)" stroke-width="1.3" stroke-dasharray="5,4" opacity="0.55"/>
        <!-- Incircle -->
        <circle cx="177" cy="143" r="47" fill="var(--svg-fill-amber)" stroke="var(--svg-amber)" stroke-width="1.6"/>
        <!-- Centroid G -->
        <line x1="155" y1="48" x2="215" y2="190" stroke="var(--svg-teal)" stroke-width="1.4" stroke-dasharray="4,3"/>
        <circle cx="195" cy="143" r="4.5" fill="var(--svg-teal)"/>
        <text x="202" y="138" fill="var(--svg-teal)" font-size="12" font-weight="700">G 重心 (2:1)</text>
        <!-- Incentre I -->
        <circle cx="177" cy="143" r="4.5" fill="var(--svg-amber)"/>
        <text x="112" y="160" fill="var(--svg-amber)" font-size="12" font-weight="700">I 內心(內切圓)</text>
        <!-- Orthocentre H -->
        <line x1="155" y1="48" x2="155" y2="190" stroke="var(--svg-red)" stroke-width="1.4" stroke-dasharray="3,3"/>
        <circle cx="155" cy="114" r="4.5" fill="var(--svg-red)"/>
        <text x="86" y="108" fill="var(--svg-red)" font-size="12" font-weight="700">H 垂心(高線)</text>
        <!-- Circumcentre O -->
        <circle cx="215" cy="156" r="4.5" fill="var(--svg-blue)"/>
        <text x="223" y="165" fill="var(--svg-blue)" font-size="12" font-weight="700">O 外心(OA=OB=OC)</text>
        <!-- Vertices -->
        <text x="148" y="38" fill="var(--svg-ink)" font-size="13" font-weight="700">A</text>
        <text x="48" y="200" fill="var(--svg-ink)" font-size="13" font-weight="700">B</text>
        <text x="372" y="200" fill="var(--svg-ink)" font-size="13" font-weight="700">C</text>
      </svg>
      <div class="svg-caption">四心口訣：外心(O)到三頂點等距、內心(I)到三邊等距、重心(G)分中線 2:1、垂心(H)高線垂直對邊（O、G、H 共歐拉線）</div>
    </div>`;
  },

  /* 4. 線性規劃可行區域圖 */
  linearProg: function () {
    return `
    <div class="svg-figure">
      <svg viewBox="0 0 460 240" width="440" role="img" aria-label="Linear Programming Feasible Region">
        <!-- Axes -->
        <line x1="45" y1="205" x2="430" y2="205" stroke="var(--svg-axis)" stroke-width="1.6"/>
        <line x1="45" y1="220" x2="45" y2="20" stroke="var(--svg-axis)" stroke-width="1.6"/>
        <text x="424" y="222" fill="var(--svg-axis)" font-size="12" font-style="italic">x</text>
        <text x="32" y="28" fill="var(--svg-axis)" font-size="12" font-style="italic">y</text>
        <!-- Feasible polygon -->
        <polygon points="85,175 265,175 315,95 165,55 85,115" fill="var(--svg-fill-teal)" stroke="var(--svg-teal)" stroke-width="2.2"/>
        <!-- Objective function sliding parallel lines -->
        <line x1="150" y1="220" x2="365" y2="40" stroke="var(--svg-red)" stroke-width="2" stroke-dasharray="6,4"/>
        <line x1="205" y1="220" x2="405" y2="52" stroke="var(--svg-red)" stroke-width="1.4" stroke-dasharray="4,4" opacity="0.55"/>
        <!-- Vertices -->
        <circle cx="85" cy="175" r="4" fill="var(--svg-teal)"/>
        <circle cx="265" cy="175" r="4" fill="var(--svg-teal)"/>
        <circle cx="315" cy="95" r="5" fill="var(--svg-red)"/>
        <circle cx="165" cy="55" r="4" fill="var(--svg-teal)"/>
        <circle cx="85" cy="115" r="4" fill="var(--svg-teal)"/>
        <text x="324" y="96" fill="var(--svg-red)" font-size="13" font-weight="700">最優頂點 P*(x, y)</text>
        <text x="145" y="132" fill="var(--svg-teal)" font-size="13" font-weight="700">可行區域 R</text>
        <text x="278" y="46" fill="var(--svg-red)" font-size="12" font-weight="700">目標線 P = ax + by</text>
      </svg>
      <div class="svg-caption">線性規劃秒殺原則：線性目標函數 P = ax + by + c 的極大／極小值必出現在可行區域的頂點（若求整數解，則檢視最優頂點附近整數點）</div>
    </div>`;
  },

  /* 5. 平截頭體 Frustum 相似立體圖 */
  frustum: function () {
    return `
    <div class="svg-figure">
      <svg viewBox="0 0 460 240" width="440" role="img" aria-label="Similar Cones and Frustum">
        <!-- Upper removed cone (dashed) -->
        <line x1="230" y1="22" x2="178" y2="96" stroke="var(--svg-muted)" stroke-width="1.6" stroke-dasharray="5,4"/>
        <line x1="230" y1="22" x2="282" y2="96" stroke="var(--svg-muted)" stroke-width="1.6" stroke-dasharray="5,4"/>
        <!-- Frustum body -->
        <polygon points="178,96 282,96 346,192 114,192" fill="var(--svg-fill-amber)" stroke="none"/>
        <line x1="178" y1="96" x2="114" y2="192" stroke="var(--svg-ink)" stroke-width="2.2"/>
        <line x1="282" y1="96" x2="346" y2="192" stroke="var(--svg-ink)" stroke-width="2.2"/>
        <!-- Ellipses -->
        <ellipse cx="230" cy="96" rx="52" ry="13" fill="var(--svg-bg)" stroke="var(--svg-blue)" stroke-width="2"/>
        <ellipse cx="230" cy="192" rx="116" ry="22" fill="var(--svg-fill-amber)" stroke="var(--svg-ink)" stroke-width="2"/>
        <!-- Height lines -->
        <line x1="230" y1="22" x2="230" y2="192" stroke="var(--svg-red)" stroke-width="1.6" stroke-dasharray="4,3"/>
        <line x1="230" y1="96" x2="282" y2="96" stroke="var(--svg-blue)" stroke-width="1.8"/>
        <line x1="230" y1="192" x2="346" y2="192" stroke="var(--svg-teal)" stroke-width="1.8"/>
        <!-- Labels -->
        <text x="236" y="64" fill="var(--svg-red)" font-size="13" font-weight="700">h₁</text>
        <text x="236" y="150" fill="var(--svg-red)" font-size="13" font-weight="700">h₂</text>
        <text x="252" y="90" fill="var(--svg-blue)" font-size="13" font-weight="700">r₁</text>
        <text x="285" y="186" fill="var(--svg-teal)" font-size="13" font-weight="700">r₂</text>
        <text x="355" y="145" fill="var(--svg-amber)" font-size="12" font-weight="700">面積比 = (l₁/l₂)²</text>
        <text x="355" y="165" fill="var(--svg-amber)" font-size="12" font-weight="700">體積比 = (l₁/l₂)³</text>
      </svg>
      <div class="svg-caption">平截頭體 (Frustum) 必勝思維：永遠「補回頂部小圓錐」，善用相似立體邊長比 k、面積比 k²、體積比 k³！</div>
    </div>`;
  }
};
