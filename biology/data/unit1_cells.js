/* ==========================================================================
   Unit 1 (Compulsory — Book 1A, Ch 1–4): Cells and Molecules of Life
   Aligned with HKDSE Biology Syllabus & Oxford Mastering Biology (3rd Ed.)
   ========================================================================== */
window.BIO_UNITS.push({
  id: "u1",
  paper: "compulsory",
  code: "Unit 1",
  bookRef: "Book 1A · Ch 1–4",
  color: "#16a34a",
  title: { en: "Unit 1: Cells and Molecules of Life", zh: "單元一：細胞與生命分子" },
  subtitle: {
    en: "Scientific Method · Molecules of Life · Cell Ultrastructure · Membrane Transport · Enzymes & Metabolism",
    zh: "科學方法 · 生命分子 · 細胞超微結構 · 物質進出細胞膜 · 酶與新陳代謝"
  },
  chapters: [
    {
      id: "u1-ch1",
      code: "Ch 1",
      title: { en: "Introducing Biology & Scientific Method", zh: "生物學入門與科學方法" },
      topics: [
        {
          id: "u1-1-1",
          code: "1.1",
          highYield: true,
          title: { en: "Characteristics of Organisms & Scientific Investigation (NOS)", zh: "生物的特徵與科學探究（科學本質）" },
          summary: {
            en: "All living organisms exhibit seven vital characteristics (**nutrition, respiration, excretion, irritability/sensitivity, movement, growth, reproduction**). Biological knowledge is constructed through the **scientific method** with controlled experiments.",
            zh: "所有生物均具備七大生命特徵（**營養、呼吸作用、排泄、感應性、運動、生長、生殖**）。生物學知識建基於嚴謹的**科學方法**與對照實驗。"
          },
          points: [
            {
              en: "**Seven characteristics of living organisms**: **Nutrition** (obtaining food for energy & growth), **Respiration** (oxidizing food to release energy), **Excretion** (removing *metabolic waste* such as CO2 and urea — NOT faeces/egestion!), **Irritability** (detecting stimuli & responding), **Movement**, **Growth** (permanent increase in size/dry mass & complexity), **Reproduction** (producing offspring to ensure continuity of species).",
              zh: "**七大生物特徵**：**營養**、**呼吸作用**（氧化食物釋放能量）、**排泄**（清除*代謝廢物*如 CO2 及尿素，注意排糞屬排遺而非排泄）、**感應性**、**運動**、**生長**（體積/乾重及複雜度永久增加）、**生殖**（延續物種）。"
            },
            {
              en: "**Steps of Scientific Method**: Making **observations** → Asking a **question** → Proposing a **hypothesis** (testable tentative explanation) → Making a **prediction** → Designing & performing a **controlled experiment** → Analysing results & drawing a **conclusion** (accept/reject/modify hypothesis).",
              zh: "**科學方法步驟**：**觀察** → 提出**問題** → 提出可檢驗的**假說** → 作出**預測** → 設計及進行**對照實驗** → 分析數據並得出**結論**（支持、推翻或修正假說）。"
            },
            {
              en: "**Three Types of Variables**: (1) **Independent variable (IV)** — the single factor deliberately changed; (2) **Dependent variable (DV)** — the factor measured; (3) **Controlled variables** — all other factors kept constant to ensure a **fair test**.",
              zh: "**三類變項**：(1) **自變項（IV）**—刻意改變的單一因素；(2) **應變項（DV）**—量度的結果；(3) **控制變項**—維持不變的其他因素以確保**公平測試**。"
            },
            {
              en: "**Control Set-up vs Experimental Set-up**: Identical in all aspects EXCEPT the factor under investigation is omitted/kept at baseline. Purpose: **to confirm that the observed result is caused solely by the independent variable** and not by other factors.",
              zh: "**對照裝置與實驗裝置**：除待測試的因素外其餘條件完全相同。目的：**確認所觀察到的結果純粹由自變項引起**，而非其他因素所致。"
            },
            {
              en: "**Nature of Science (NOS) in HKDSE**: Scientific knowledge is **tentative** (subject to revision with new evidence), **evidence-based**, involves **creativity & imagination**, relies on **peer review** and **technological advances** (e.g., electron microscopes enabled discovery of organelles).",
              zh: "**科學本質（NOS）**：科學知識具**暫時性**（可隨新證據修正）、建基於實證、需要創意與想像、經同儕評審，並與科技發展相輔相成。"
            }
          ],
          trap: {
            en: "Do NOT confuse **egestion** (removal of undigested food / faeces) with **excretion** (removal of metabolic wastes produced by chemical reactions inside cells, e.g. urea, CO2, excess water/salts). Also, never say a hypothesis is 'proved' — say it is **'supported'** or **'falsified'**!",
            zh: "切勿混淆**排遺（egestion，排出未消化食物殘渣）**與**排泄（excretion，排出細胞代謝廢物）**；實驗結果只能說「**支持（supported）**」而非「證明（proved）」假說！"
          }
        }
      ]
    },
    {
      id: "u1-ch2",
      code: "Ch 2",
      title: { en: "Molecules of Life & The Cell as the Basic Unit of Life", zh: "生命分子與細胞作為生命的基本單位" },
      topics: [
        {
          id: "u1-2-1",
          code: "2.1",
          highYield: true,
          title: { en: "Inorganic & Organic Chemical Constituents of Organisms", zh: "生物的無機與有機化學成分" },
          summary: {
            en: "Organisms consist of **inorganic constituents** (water & inorganic ions) and **organic biomolecules** (carbohydrates, lipids, proteins, nucleic acids), each with specific structural and metabolic roles.",
            zh: "生物由**無機成分**（水及無機離子）與**有機生物分子**（碳水化合物、脂質、蛋白質、核酸）組成，各具特定結構與代謝功能。"
          },
          points: [
            {
              en: "**Water (H2O)** (~70% of cell mass): (1) **Good solvent** for polar/ionic substances → provides medium for chemical reactions & transport (blood plasma, xylem/phloem); (2) **Reactant** in hydrolysis & photosynthesis; (3) **High specific heat capacity** → minimizes body temperature fluctuations (stable aquatic & internal environment); (4) **High latent heat of vaporization** → cooling effect via sweating & transpiration; (5) **Provides turgidity** for support in herbaceous plants & acts as lubricant (synovial fluid, mucus).",
              zh: "**水（H2O）**：(1) **優良溶劑**（提供化學反應介質及運輸介質）；(2) 水解及光合作用的**反應物**；(3) **高比熱容量**（減緩體溫及水生環境溫度波動）；(4) **高汽化潛熱**（出汗與蒸騰具冷卻效應）；(5) 提供植物**膨壓支持**及潤滑作用。"
            },
            {
              en: "**Carbohydrates** (C, H, O; H:O = 2:1): Monosaccharides (glucose, fructose, galactose — soluble, sweet, reducing sugars), Disaccharides (maltose = glu+glu; sucrose = glu+fru [non-reducing!]; lactose = glu+gal — formed by **condensation**, broken by **hydrolysis**), Polysaccharides (starch = plant energy store; glycogen = animal energy store in liver/muscles; cellulose = plant cell wall structural support; all insoluble & osmotically inactive).",
              zh: "**碳水化合物**：單糖（葡萄糖、果糖、半乳糖，皆為還原糖）、雙糖（麥芽糖、蔗糖[**非還原糖**]、乳糖，經**縮合**合成、**水解**分解）、多糖（澱粉為植物儲能、糖原為動物肝肌儲能、纖維素構成植物細胞壁；皆不溶於水且不影響水勢）。"
            },
            {
              en: "**Lipids** (C, H, O; much lower O proportion): **Triglycerides** = 1 glycerol + 3 fatty acids (condensation). Roles: high-density energy reserve (38 kJ/g, twice carbohydrates), subcutaneous thermal insulation, shock absorption around vital organs, solvent for fat-soluble vitamins (A, D, E, K). **Phospholipids** (hydrophilic phosphate head + 2 hydrophobic fatty acid tails) form cell membranes.",
              zh: "**脂質**：**三酸甘油酯**由 1 甘油 ＋ 3 脂肪酸縮合而成（高能儲備 38 kJ/g、皮下保溫、防震保護器官、脂溶性維生素溶劑）。**磷脂**（親水頭＋兩條疏水尾）構成細胞膜。"
            },
            {
              en: "**Proteins** (C, H, O, N, often S): Polymers of **amino acids** joined by **peptide bonds** forming **polypeptides**, folded into specific **3D conformations**. Roles: structural (keratin, collagen, cell membrane), **enzymes**, **antibodies**, **haemoglobin**, some **hormones** (insulin, glucagon), membrane carriers/channels.",
              zh: "**蛋白質**：由**氨基酸**以**肽鍵**連接成**多肽**再摺疊成特定三維形狀。功能包括結構蛋白、**酶**、**抗體**、**血紅蛋白**、部分**激素**（胰島素）及膜載體蛋白。"
            },
            {
              en: "**Nucleic Acids** (C, H, O, N, P): Polymers of **nucleotides** (pentose sugar + phosphate group + nitrogenous base). **DNA** (deoxyribose, double-stranded, A-T/C-G) stores genetic information; **RNA** (ribose, single-stranded, A-U/C-G) participates in protein synthesis.",
              zh: "**核酸**：由**核苷酸**（五碳糖＋磷酸基＋含氮鹼基）組成。**DNA** 儲存遺傳資訊；**RNA** 參與蛋白質合成。"
            }
          ],
          table: {
            headers: [
              { en: "Inorganic Ion", zh: "無機離子" },
              { en: "Key Roles in Plants", zh: "在植物中的主要功能" },
              { en: "Key Roles in Animals / Humans", zh: "在動物／人體中的主要功能" }
            ],
            rows: [
              [
                { en: "**Nitrate (NO3-)**", zh: "**硝酸鹽（NO3-）**" },
                { en: "Source of nitrogen for synthesis of **amino acids / proteins**, nucleic acids & chlorophyll. Deficiency: stunted growth, yellow leaves (chlorosis).", zh: "提供氮合成**氨基酸／蛋白質**、核酸及葉綠素。缺乏：生長受阻、葉片變黃。" },
                { en: "*(Animals obtain nitrogen from dietary proteins)*", zh: "（動物從食物蛋白質攝取氮）" }
              ],
              [
                { en: "**Magnesium (Mg2+)**", zh: "**鎂離子（Mg2+）**" },
                { en: "Essential component of **chlorophyll**; enzyme activator. Deficiency: yellowing between leaf veins (**chlorosis**).", zh: "**葉綠素**的重要組成部分；激活酶。缺乏：葉脈間發黃（缺綠症）。" },
                { en: "Enzyme activator; bone & tooth formation.", zh: "酶激活劑；構成骨骼與牙齒。" }
              ],
              [
                { en: "**Calcium (Ca2+)**", zh: "**鈣離子（Ca2+）**" },
                { en: "Component of plant cell walls (middle lamella).", zh: "構成植物細胞壁。" },
                { en: "Component of **bones & teeth**; essential for **blood clotting**, **muscle contraction**, and synaptic transmission. Deficiency: rickets / osteoporosis.", zh: "構成**骨骼與牙齒**；參與**血液凝固**、**肌肉收縮**及突觸傳遞。缺乏：佝僂病／骨質疏鬆。" }
              ],
              [
                { en: "**Iron (Fe2+)**", zh: "**鐵離子（Fe2+）**" },
                { en: "Catalyst for chlorophyll synthesis.", zh: "催化葉綠素合成。" },
                { en: "Component of **haemoglobin** in red blood cells for carrying oxygen. Deficiency: **anaemia**.", zh: "構成紅血球**血紅蛋白**以攜帶氧氣。缺乏：**貧血**。" }
              ],
              [
                { en: "**Phosphate (PO43-)**", zh: "**磷酸鹽（PO43-）**" },
                { en: "Component of **nucleic acids (DNA/RNA)**, **phospholipids**, and **ATP**.", zh: "構成**核酸**、**磷脂**及 **ATP**。" },
                { en: "Component of **bones & teeth**, nucleic acids, phospholipids, and ATP.", zh: "構成**骨骼牙齒**、核酸、磷脂及 ATP。" }
              ]
            ]
          },
          exam: {
            en: "When explaining why **starch/glycogen** is a good energy store, ALWAYS cite: (1) **Insoluble in water** → does **not lower the water potential** of the cell (no osmotic effect / does not draw water in by osmosis); (2) **Compact** (helical/branched) → stores large amounts of energy in small space; (3) **Easily hydrolysed** to glucose when needed.",
            zh: "解釋為何**澱粉／糖原**適合儲能時必寫：(1) **不溶於水**，故**不會降低細胞水勢**（無滲透影響）；(2) 結構緊密；(3) 需要時易於水解成葡萄糖。"
          }
        },
        {
          id: "u1-2-2",
          code: "2.2",
          highYield: true,
          title: { en: "Microscopy, Cell Ultrastructure & Prokaryotic vs Eukaryotic Cells", zh: "顯微鏡、細胞超微結構及原核與真核細胞" },
          summary: {
            en: "The **Cell Theory** states that all organisms are made of one or more cells, the cell is the basic unit of life, and all cells come from pre-existing cells. **Electron microscopes** reveal subcellular **organelles** not visible under light microscopes.",
            zh: "**細胞學說**指出所有生物由細胞組成、細胞是生命基本單位、所有細胞皆源自既有細胞。**電子顯微鏡**解像度遠高於光學顯微鏡，能顯示細胞器超微結構。"
          },
          eq: "Total Magnification = Eyepiece mag. × Objective mag.   |   Magnification = Image size / Actual size",
          points: [
            {
              en: "**Light Microscope vs Electron Microscope (TEM / SEM)**: Light microscope uses light beams (lower magnification ~1500× & resolution; shows **living specimens** in **colour**). **TEM** (Transmission EM) passes electron beams through ultrathin dead stained sections → 2D internal ultrastructure (up to ~1,000,000×). **SEM** (Scanning EM) scans surface → 3D surface topography (black & white, false-coloured later).",
              zh: "**光學顯微鏡 vs 電子顯微鏡**：光學可用於觀察**活體**及彩色影像，解像度較低；**透射電鏡（TEM）**顯示極薄死標本的二維內部超微結構；**掃描電鏡（SEM）**顯示三維表面結構（皆不可觀察活細胞）。"
            },
            {
              en: "**Low-power vs High-power Objective**: Switching from low to high power → **smaller field of view**, **dimmer image** (adjust diaphragm/condenser), **fewer cells seen** (each appears larger). Image is **inverted** (upside down & laterally reversed): to centre an object at top-left, move the slide **top-left**.",
              zh: "**低倍轉高倍鏡**：視野變小、亮度變暗（須調大光圈）、細胞數目減少但放大。影像上下左右**倒置**：若標本在視野左上方，應向**左上方**移動玻片使其居中。"
            },
            {
              en: "**Key Organelles & Functions**:\n• **Nucleus** (double nuclear membrane with pores, chromatin/DNA): controls cellular activities & protein synthesis.\n• **Rough ER (rER)** (studded with ribosomes): **synthesizes and transports proteins** (abundant in enzyme-/hormone-secreting cells e.g. pancreatic cells).\n• **Smooth ER (sER)** (no ribosomes): **synthesizes and transports lipids** (abundant in steroid-secreting cells & liver).\n• **Ribosomes** (non-membrane-bound): site of **protein synthesis** (translation).\n• **Mitochondrion** (double membrane, inner membrane folded into **cristae** to increase surface area for respiratory enzymes): site of **aerobic respiration** releasing ATP (abundant in muscle, sperm, root hair, epithelial cells).\n• **Chloroplast** (double membrane, **thylakoids/grana** with chlorophyll, **stroma**): site of **photosynthesis** (plants only).\n• **Large central vacuole** (surrounded by tonoplast, contains cell sap): stores water/solutes, maintains **turgidity** for support (plants).\n• **Cell wall** (cellulose in plants, **freely permeable**): protects & gives fixed shape, prevents bursting.",
              zh: "**主要細胞器**：**細胞核**（雙層膜，含 DNA 控制細胞活動）；**粗糙內質網（rER）**（附核糖體，合成及運輸蛋白質）；**光滑內質網（sER）**（合成及運輸脂質）；**核糖體**（無膜，蛋白質合成場所）；**線粒體**（雙層膜，內膜摺疊成嵴以增加表面積，進行**需氧呼吸**產生 ATP）；**葉綠體**（類囊體／基粒與基質，進行**光合作用**）；**大型中央液泡**（維持膨壓支持）；**細胞壁**（纖維素，全透性，防脹破）。"
            },
            {
              en: "**Levels of Organization**: Cell → **Tissue** (group of similar cells working together for a specific function, e.g. xylem, muscle) → **Organ** (different tissues working together, e.g. leaf, heart, stomach) → **System** → **Organism**.",
              zh: "**組織層次**：細胞 → **組織**（相同細胞協作特定功能）→ **器官**（多種組織組成，如葉片、心臟）→ **系統** → **生物體**。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "特徵" },
              { en: "Prokaryotic Cell (e.g. Bacteria)", zh: "原核細胞（如細菌）" },
              { en: "Eukaryotic Cell (Animals, Plants, Fungi, Protists)", zh: "真核細胞（動、植、真菌、原生生物）" }
            ],
            rows: [
              [
                { en: "**True Nucleus**", zh: "**真正細胞核**" },
                { en: "**Absent** (no nuclear membrane); DNA lies free in cytoplasm as a **circular chromosome** (+ plasmids)", zh: "**無**（無核膜）；DNA 為游離在細胞質的**環狀染色體**（及質粒）" },
                { en: "**Present** (bounded by double nuclear membrane); **linear DNA** associated with proteins (chromosomes)", zh: "**有**（具雙層核膜）；**線形 DNA** 與蛋白質結合形成染色體" }
              ],
              [
                { en: "**Membrane-bound Organelles**", zh: "**具膜細胞器**" },
                { en: "**Absent** (no ER, no mitochondria, no chloroplasts)", zh: "**無**（無內質網、線粒體、葉綠體）" },
                { en: "**Present** (ER, mitochondria, vacuole, chloroplasts in plants)", zh: "**有**（內質網、線粒體、液泡、葉綠體等）" }
              ],
              [
                { en: "**Ribosomes**", zh: "**核糖體**" },
                { en: "Present (smaller, 70S; free in cytoplasm)", zh: "有（較小，游離於細胞質）" },
                { en: "Present (larger, 80S; attached to rER or free)", zh: "有（較大，附於 rER 或游離）" }
              ],
              [
                { en: "**Cell Wall**", zh: "**細胞壁**" },
                { en: "Present (made of **peptidoglycan**, NOT cellulose)", zh: "有（由**肽聚糖**構成，非纖維素）" },
                { en: "Plants: **cellulose**; Fungi: **chitin**; Animals: **absent**", zh: "植物：**纖維素**；真菌：幾丁質；動物：**無**" }
              ]
            ]
          },
          trap: {
            en: "In magnification calculations, **convert units first**! `1 mm = 1000 µm`; `1 cm = 10,000 µm`. Also, **ribosomes do NOT have a membrane**, so prokaryotes DO have ribosomes!",
            zh: "計算放大率前**必須統一單位**（`1 mm = 1000 µm`）！此外，**核糖體沒有膜結構**，因此原核細胞是含有核糖體的！"
          }
        }
      ]
    },
    {
      id: "u1-ch3",
      code: "Ch 3",
      title: { en: "Movement of Substances across Cell Membrane", zh: "物質穿越細胞膜的活動" },
      topics: [
        {
          id: "u1-3-1",
          code: "3.1",
          highYield: true,
          title: { en: "Fluid Mosaic Model of Cell Membrane", zh: "細胞膜的流動鑲嵌模型" },
          summary: {
            en: "The cell membrane is **differentially permeable** (selectively permeable), structured according to the **Fluid Mosaic Model** proposed by Singer & Nicolson (1972): a **phospholipid bilayer** with various proteins interspersed throughout.",
            zh: "細胞膜具**差異透性**（選擇透性），結構符合**流動鑲嵌模型**：由**磷脂雙分子層**及鑲嵌其中的各類蛋白質組成。"
          },
          diagramIds: ["diag-membrane"],
          points: [
            {
              en: "**Phospholipid Bilayer**: Each phospholipid has a **hydrophilic** (water-loving) phosphate head facing the aqueous exterior & cytoplasm, and two **hydrophobic** (water-hating) fatty acid tails facing inward. Forms a barrier to polar/water-soluble molecules & ions, while allowing **non-polar / lipid-soluble substances** (O2, CO2, glycerol, fatty acids, vitamins A/D) to dissolve and diffuse across directly.",
              zh: "**磷脂雙分子層**：**親水磷酸頭部**朝向內外水環境，**疏水脂肪酸尾部**朝內相對，阻隔極性分子與離子，但允許**非極性／脂溶性物質**（O2、CO2、脂肪酸等）直接擴散通過。"
            },
            {
              en: "**Why 'Fluid' & Why 'Mosaic'?** **Fluid**: phospholipids and some protein molecules can move laterally within the bilayer → gives membrane flexibility (enables cell growth, phagocytosis, vesicle fusion). **Mosaic**: protein molecules are scattered/interspersed among phospholipids like tiles in a mosaic.",
              zh: "**「流動」與「鑲嵌」意義**：**流動性**指磷脂及部分蛋白可在平面側向移動，令膜具柔韌性（利於吞噬及細胞分裂）；**鑲嵌性**指蛋白質分子散布鑲嵌於磷脂層之間。"
            },
            {
              en: "**Membrane Proteins**: (1) **Channel proteins** — form hydrophilic pores for water-soluble ions/polar molecules (e.g. Na+, K+, glucose, water) to diffuse across; (2) **Carrier proteins** — bind specific solutes & change shape to transport them (facilitated diffusion or **active transport**); (3) **Glycoproteins** (protein + carbohydrate chain) — **cell recognition** (antigens) & **receptors** for hormones/neurotransmitters; (4) **Enzymes** catalysing membrane reactions.",
              zh: "**膜蛋白功能**：(1) **通道蛋白**（提供親水孔道供水溶性離子與極性分子擴散）；(2) **載體蛋白**（結合特定物質並改變形狀，參與促進擴散或**主動轉運**）；(3) **糖蛋白**（**細胞識別**／抗原及激素**受體**）；(4) 催化反應的**酶**。"
            },
            {
              en: "**Effects of Temperature & Organic Solvents on Membrane Permeability**: High temperature (>60°C) **denatures membrane proteins** & increases kinetic energy of phospholipids → membrane damaged & loses differential permeability (e.g. red pigment leaks out of beetroot cells). Organic solvents (ethanol/alcohol) **dissolve the phospholipid bilayer** → pigment leaks out rapidly.",
              zh: "**溫度與有機溶劑對透性影響**：高溫令**膜蛋白變性**及磷脂劇烈運動破壞膜結構；有機溶劑（如乙醇）**溶解磷脂雙分子層**，兩者均使紅菜頭細胞液紅色素滲出。"
            }
          ],
          exam: {
            en: "In HKDSE, always use the official term **'differentially permeable'** (not just 'semi-permeable' for living cell membranes — reserve 'selectively/differentially permeable' for cell membranes, while dialysis tubing is 'differentially permeable' based solely on molecular size).",
            zh: "描述活細胞膜透性時優先使用 **differentially permeable（差異透性）**。"
          }
        },
        {
          id: "u1-3-2",
          code: "3.2",
          highYield: true,
          title: { en: "Diffusion, Osmosis (Water Potential), Active Transport & Phagocytosis", zh: "擴散、滲透（水勢）、主動轉運與吞噬作用" },
          summary: {
            en: "Substances cross cell membranes via **passive processes** (diffusion & osmosis — down a gradient, no ATP) or **active processes** (active transport & phagocytosis — requiring metabolic energy from respiration).",
            zh: "物質透過**被動過程**（擴散與滲透，順梯度不耗能）或**主動過程**（主動轉運與吞噬作用，須消耗呼吸作用產生的能量）進出細胞。"
          },
          points: [
            {
              en: "**Diffusion**: The **net movement** of particles from a region of **higher concentration** to a region of **lower concentration** (down a concentration gradient) due to random thermal motion until equilibrium is reached. Rate increases with: steeper concentration gradient, larger surface area, shorter diffusion distance, higher temperature, smaller molecular size.",
              zh: "**擴散**：粒子因隨機運動由**較高濃度**區域往**較低濃度**區域（順濃度梯度）的**淨移動**，直至達致平衡。"
            },
            {
              en: "**Osmosis (Exact Textbook Definition)**: The **net movement of water molecules** from a region of **higher water potential** to a region of **lower water potential** across a **differentially permeable membrane**.",
              zh: "**滲透（課本標準定義）**：**水分子**透過**差異透性膜**，由**較高水勢**區域往**較低水勢**區域的**淨移動**。"
            },
            {
              en: "**Water Potential (Ψ) Rules**: Pure water has the **highest water potential (Ψ = 0)**. Adding solutes **lowers water potential** (more negative). Thus: **Hypotonic solution** = higher Ψ than cell → water enters cell by osmosis; **Isotonic** = equal Ψ → no net water movement; **Hypertonic** = lower Ψ than cell → water leaves cell by osmosis.",
              zh: "**水勢（Ψ）規律**：純水具**最高水勢（0）**；溶質越多水勢越低。**低滲液**（高水勢）→ 水淨進入細胞；**等滲液**→ 無淨水移動；**高滲液**（低水勢）→ 水淨離開細胞。"
            },
            {
              en: "**Osmosis in Animal vs Plant Cells**:\n• **Animal cell (e.g. RBC)**: In hypotonic solution → swells & **bursts (haemolysis)** because it lacks a cell wall. In hypertonic solution → loses water, shrinks & becomes **crenated (wrinkled)**.\n• **Plant cell**: In hypotonic solution → water enters vacuole, cell swells & pushes cell membrane against rigid cell wall → becomes **turgid** (cell wall prevents bursting). In hypertonic solution → loses water, vacuole shrinks, cell membrane pulls away from cell wall (**plasmolysis**) → becomes **flaccid** (plant wilts).",
              zh: "**動物 vs 植物細胞滲透變化**：動物細胞（無細胞壁）在低滲液吸水脹破（紅血球**溶血**），在高滲液失水皺縮（**皺縮 / crenation**）。植物細胞在低滲液吸水呈**硬脹（turgid）**不致脹破；在高滲液失水出現**質壁分離（plasmolysis）**呈**軟縮（flaccid）**導致萎蔫。"
            },
            {
              en: "**Active Transport**: Movement of substances **against a concentration gradient** (from lower to higher concentration) across a cell membrane using **carrier proteins** and **energy (ATP) from respiration** (e.g., absorption of minerals by root hair cells; absorption of glucose/amino acids in ileum & kidney tubules). Inhibited by **respiratory poisons (cyanide)** or **lack of O2** or **low temperature**.",
              zh: "**主動轉運**：利用**載體蛋白**及**呼吸作用能量（ATP）**，把物質**逆濃度梯度**（低→高）運過細胞膜（如根毛吸收礦物質、小腸及腎小管重吸收葡萄糖）。會受**呼吸毒藥（氰化物）**、缺氧或低溫抑制。"
            },
            {
              en: "**Phagocytosis (Bulk Transport / Endocytosis)**: Uptake of large solid particles (e.g. bacteria by phagocytes, food by *Amoeba*) by infolding/engulfing with the cell membrane to form a **vacuole/phagosome**, requiring **energy (ATP)** and **membrane fluidity**.",
              zh: "**吞噬作用**：細胞膜凹陷包圍大型固體顆粒（如白血球吞噬細菌）形成吞噬泡，消耗能量並依賴細胞膜流動性。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Diffusion", zh: "擴散" },
              { en: "Osmosis", zh: "滲透" },
              { en: "Active Transport", zh: "主動轉運" }
            ],
            rows: [
              [
                { en: "**Substance moved**", zh: "**移動物質**" },
                { en: "Any molecules/ions (solutes, gases)", zh: "任何分子／離子（溶質、氣體）" },
                { en: "**Water molecules only**", zh: "**只限水分子**" },
                { en: "Specific ions/solutes (e.g. glucose, NO3-)", zh: "特定離子／溶質（葡萄糖、礦物質）" }
              ],
              [
                { en: "**Direction**", zh: "**方向**" },
                { en: "Down concentration gradient (high → low)", zh: "順濃度梯度（高 → 低）" },
                { en: "Down water potential gradient (high Ψ → low Ψ)", zh: "順水勢梯度（高水勢 → 低水勢）" },
                { en: "**Against** concentration gradient (low → high)", zh: "**逆**濃度梯度（低 → 高）" }
              ],
              [
                { en: "**Membrane / Carrier**", zh: "**膜與載體**" },
                { en: "Membrane not essential (channel/carrier if facilitated)", zh: "必須有**差異透性膜**" },
                { en: "Requires **differentially permeable membrane**", zh: "必須有**差異透性膜**" },
                { en: "Requires living cell membrane & **specific carrier proteins**", zh: "必須有活細胞膜及**特定載體蛋白**" }
              ],
              [
                { en: "**Energy (ATP) needed?**", zh: "**需要能量？**" },
                { en: "No (passive)", zh: "否（被動）" },
                { en: "No (passive)", zh: "否（被動）" },
                { en: "**Yes (requires ATP from respiration)**", zh: "**是（須呼吸作用提供能量）**" }
              ]
            ]
          },
          trap: {
            en: "In potato-strip osmosis experiments, NEVER say 'water moved from lower sucrose concentration to higher sucrose concentration' without translating into **water potential**! Always write: '**The solution has a higher water potential than the potato cells, so water enters the cells by osmosis down a water potential gradient.**' At 0% change in length/mass, the sucrose concentration equals the **mean water potential** of the potato cells.",
            zh: "馬鈴薯條滲透實驗題切勿只寫「水由低濃度流向高濃度」！評卷參考要求寫出：**「溶液水勢高於馬鈴薯細胞水勢，故水分子藉滲透作用淨進入細胞」**。"
          }
        }
      ]
    },
    {
      id: "u1-ch4",
      code: "Ch 4",
      title: { en: "Enzymes and Metabolism", zh: "酶與新陳代謝" },
      topics: [
        {
          id: "u1-4-1",
          code: "4.1",
          highYield: true,
          title: { en: "Metabolism, Mechanism of Enzyme Action & Properties", zh: "新陳代謝、酶作用機制與特性" },
          summary: {
            en: "**Metabolism** is the sum of all chemical reactions in an organism (**catabolism** + **anabolism**). **Enzymes** are **biological catalysts** (globular proteins) that speed up metabolic reactions by **lowering activation energy** without being permanently changed.",
            zh: "**新陳代謝**是生物體內所有化學反應總和（**分解代謝**＋**合成代謝**）。**酶**是蛋白質性質的**生物催化劑**，透過**降低活化能**加速反應而本身不被消耗。"
          },
          diagramIds: ["diag-enzyme"],
          points: [
            {
              en: "**Catabolism vs Anabolism**: **Catabolism** breaks down complex molecules into simpler ones and **releases energy** (e.g., respiration, digestion). **Anabolism** builds up complex molecules from simpler ones and **requires energy** (e.g., photosynthesis, protein synthesis, glycogen synthesis).",
              zh: "**分解代謝 vs 合成代謝**：**分解代謝**把複雜分子分解為簡單分子並**釋放能量**（如呼吸、消化）；**合成代謝**由簡單分子合成複雜分子並**消耗能量**（如光合作用、蛋白質合成）。"
            },
            {
              en: "**Lock-and-Key Hypothesis**: Each enzyme has a specific 3D **active site** whose shape is **complementary** to only one specific **substrate** molecule. Substrate binds to active site → forms **enzyme–substrate complex** → reaction occurs (lowering activation energy) → **products** leave active site → enzyme is **unchanged and reusable**.",
              zh: "**鎖鑰假說**：酶具特定立體形狀的**活性部位**，只與形狀互補的特定**受質**結合形成**酶—受質複合物**，降低活化能生成產物後釋出，酶恢復原狀可重複使用。"
            },
            {
              en: "**Key Properties of Enzymes**: (1) **Protein in nature** (sensitive to heat & extreme pH); (2) **Specific** in action (active site complementarity); (3) **Biological catalysts** (lower activation energy, speed up reactions); (4) **Reusable** (needed only in small amounts; not used up); (5) Work both intracellularly (e.g. catalase) and extracellularly (e.g. digestive enzymes).",
              zh: "**酶五大特性**：蛋白質本質（對溫度和 pH 敏感）、**專一性**、降低活化能加速反應、**可重複使用**（微量即足夠）、可在細胞內或細胞外發揮作用。"
            }
          ]
        },
        {
          id: "u1-4-2",
          code: "4.2",
          highYield: true,
          title: { en: "Factors Affecting Enzyme Activity, Inhibitors & Applications", zh: "影響酶活性的因素、抑制劑與應用" },
          summary: {
            en: "Enzyme reaction rate depends on **temperature**, **pH**, **substrate concentration**, **enzyme concentration**, and the presence of **inhibitors** (competitive vs non-competitive).",
            zh: "酶促反應速率受**溫度**、**pH 值**、**受質濃度**、**酶濃度**及**抑制劑**（競爭性及非競爭性）影響。"
          },
          points: [
            {
              en: "**Temperature**:\n• **Low temperature (e.g. 0°C)**: Enzymes are **inactive** (NOT denatured!) because molecules have low **kinetic energy**, resulting in fewer effective collisions & fewer enzyme–substrate complexes. Activity is restored on warming.\n• **Rising toward optimum temperature**: Higher KE → faster molecular motion → **higher frequency of effective collisions** → more enzyme–substrate complexes per unit time.\n• **Above optimum temperature**: Excessive thermal vibration breaks weak bonds maintaining the 3D structure → **conformation of active site changes (denaturation — irreversible)** → substrate can no longer fit into active site → reaction rate drops sharply to zero.",
              zh: "**溫度影響**：**低溫**時分子動能低、有效碰撞少，酶呈**不活躍**（**非變性**！回溫可恢復）；升至**最適溫度**前碰撞頻率增高、反應加快；**高於最適溫度**則酶三維結構受破壞、**活性部位變形（不可逆變性）**，受質無法結合，速率急降歸零。"
            },
            {
              en: "**pH**: Each enzyme has an **optimum pH** (e.g., pepsin ~pH 2, salivary amylase ~pH 7, pancreatic lipase/trypsin ~pH 8). Extreme acidic or alkaline pH disrupts ionic/hydrogen bonds → alters active site shape → **denaturation**.",
              zh: "**pH 影響**：每種酶有其**最適 pH**（胃蛋白酶約 pH 2、唾液澱粉酶約 pH 7、胰液酶約 pH 8）。過酸或過鹼皆會破壞三維結構導致**變性**。"
            },
            {
              en: "**Substrate & Enzyme Concentration**: With fixed enzyme concentration, increasing substrate concentration increases reaction rate initially (more frequent collisions; substrate is limiting), then **levels off (plateaus)** at V_{max} when **all active sites are saturated** (enzyme concentration becomes the limiting factor).",
              zh: "**受質與酶濃度**：酶濃度固定時，受質濃度上升初期速率上升；當**所有活性部位飽和**後速率達至平頂（此時酶濃度成為限制因素）。"
            },
            {
              en: "**Enzyme Inhibitors**:\n• **Competitive inhibitor**: Similar shape to substrate → **competes with substrate for the active site**. Effect **CAN be overcome** by increasing substrate concentration (same V_{max} reached at higher [S]).\n• **Non-competitive inhibitor** (e.g. cyanide, heavy metals Hg2+/Pb2+): Binds to a site **other than the active site** → alters 3D shape of active site so substrate cannot bind. Effect **CANNOT be overcome** by adding more substrate (V_{max} permanently lowered).",
              zh: "**酶抑制劑**：**競爭性抑制劑**與受質形狀相似，競爭結合**活性部位**，**可藉提高受質濃度克服**；**非競爭性抑制劑**（如氰化物、重金屬）結合於**活性部位以外位置**令活性部位變形，**無法藉增加受質濃度克服**。"
            },
            {
              en: "**Applications**: Biological washing powders (proteases/lipases work at lower temperatures ~40°C saving energy, avoid boiling water!), meat tenderizers (papain/protease), fruit juice extraction (pectinase breaks down pectin in cell walls), cheese making (rennin), lactose-free milk (lactase).",
              zh: "**日常與工業應用**：生物洗衣粉（蛋白酶／脂肪酶於約 40°C 低溫去污，不可用沸水）、鬆肉粉（木瓜蛋白酶）、果膠酶增加果汁產量、乳糖酶製無乳糖牛奶。"
            }
          ],
          trap: {
            en: "THREE CLASSIC DSE TRAPS: (1) NEVER say 'enzymes are killed at high temperature' — enzymes are **proteins (non-living)**, so say **'denatured'**! (2) Low temperature does **NOT denature** enzymes — they only become **inactive**. (3) Adding **more enzyme** increases the **rate** of reaction, NOT the **total amount of product** (total product depends only on total substrate amount!).",
            zh: "三大必避陷阱：(1) 酶非生物，**不可寫「酶被殺死」**，必須寫「**變性（denatured）**」；(2) 低溫只令酶**不活躍**而非變性；(3) 增加酶濃度只加快**反應速率**，**不會增加產物總量**（產物總量取決於受質總量）。"
          }
        }
      ]
    }
  ]
});
