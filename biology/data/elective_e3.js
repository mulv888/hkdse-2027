/* ==========================================================================
   Elective E3 (Paper 2 — Book E3): Microorganisms and Humans
   Microbiology & Growth Curve · Industrial Uses · Food Preservation & Control
   ========================================================================== */
window.BIO_UNITS.push({
  id: "e3",
  paper: "elective",
  code: "Elective E3",
  bookRef: "Book E3 · Ch 1–3",
  color: "#ea580c",
  title: { en: "Elective E3: Microorganisms and Humans", zh: "選修 E3：微生物與人類" },
  subtitle: {
    en: "Viruses, Bacteria, Fungi & Protists · Microbial Growth Curve & Aseptic Techniques · Fermentation & Bioremediation · Food Spoilage, Sterilization & Antibiotics",
    zh: "病毒、細菌、真菌與原生生物 · 微生物生長曲線與無菌技術 · 工業發酵與生物修復 · 食物防腐、滅菌與抗生素"
  },
  chapters: [
    {
      id: "e3-ch1",
      code: "E3.1",
      title: { en: "Microbiology: Diversity, Growth Curve & Culture Techniques", zh: "微生物多樣性、生長曲線與培養技術" },
      topics: [
        {
          id: "e3-1-1",
          code: "E3.1.1",
          highYield: true,
          title: { en: "Viruses (Lytic Cycle), Bacteria, Fungi, Growth Phases & Measuring Growth", zh: "病毒（裂解周期）、細菌、真菌、生長曲線與量度方法" },
          summary: {
            en: "Microorganisms exhibit vast metabolic diversity. In a closed batch culture, bacteria follow a characteristic **4-phase microbial growth curve** (**Lag → Log → Stationary → Death**).",
            zh: "微生物在封閉分批培養中呈現經典的四階段**微生物生長曲線**（**延滯期 → 對數期 → 穩定期 → 死亡期**）。"
          },
          diagramIds: ["diag-microbial-growth"],
          points: [
            {
              en: "**Viruses (Obligate Intracellular Parasites — Non-cellular!)**: Consist ONLY of **nucleic acid (DNA OR RNA)** enclosed in a **protein coat (capsid)** (some have lipid envelope). **Replication (Lytic Cycle)**: (1) **Attachment** to specific host cell surface receptors; (2) **Entry/Injection** of viral nucleic acid into host cell; (3) **Synthesis** — viral nucleic acid hijacks host ribosomes, enzymes & nucleotides to replicate viral nucleic acid & synthesize viral capsid proteins; (4) **Assembly** of new viral particles; (5) **Release** — host cell **bursts (lysis)** releasing hundreds of new viruses to infect neighbouring cells.",
              zh: "**病毒（非細胞專性細胞內寄生體）**：僅含**核酸（DNA 或 RNA）**及**蛋白質外殼（衣殼）**。**裂解複製五步**：附著受體 → 注入核酸 → 劫持宿主細胞合成病毒核酸與蛋白 → 組裝 → 裂解宿主細胞釋出新病毒。"
            },
            {
              en: "**Four Phases of Microbial Growth Curve (Closed Batch Culture — High-Yield!)**:\n1. **Lag phase**: Little/no increase in cell number; microbes are **adapting to new medium**, synthesizing required **enzymes**, and preparing for DNA replication.\n2. **Log (Exponential) phase**: Maximum constant **rate of binary fission** (doubling time constant) because **nutrients & space are abundant** and toxic wastes are low.\n3. **Stationary phase**: **Rate of reproduction equals rate of death** (net growth = 0) because **nutrients become depleted** and **toxic metabolic wastes** (e.g., acids, ethanol) accumulate.\n4. **Death (Decline) phase**: **Death rate exceeds reproduction rate** due to severe nutrient exhaustion and toxic waste build-up.",
              zh: "**微生物生長曲線四階段（必考！）**：(1) **延滯期**：適應環境並合成所需**酶**，數目幾乎不變；(2) **對數期（指數期）**：養分充裕廢物少，二分裂速率達最大；(3) **穩定期**：養分耗盡、有毒代謝廢物積聚，**繁殖率＝死亡率**；(4) **死亡期**：死亡率大於繁殖率。"
            },
            {
              en: "**Factors Affecting Microbial Growth**: **Temperature** (psychrophiles, mesophiles ~20–45°C [most human pathogens ~37°C], thermophiles), **pH** (bacteria prefer neutral ~pH 7; fungi tolerate acidic ~pH 4–6), **Oxygen** (**obligate aerobes** require O2; **obligate anaerobes** killed by O2; **facultative anaerobes** like yeast/*E. coli* grow with or without O2), **Water availability / Osmotic pressure** (high salt/sugar draws water out of microbes by osmosis, inhibiting growth).",
              zh: "**影響微生物生長因素**：溫度（嗜冷／嗜溫[人體病原體約 37°C]／嗜熱）、pH（細菌偏中性、真菌較耐酸）、氧氣（專性需氧／專性厭氧／兼性厭氧）、水勢／滲透壓。"
            },
            {
              en: "**Aseptic Techniques & Measuring Microbial Growth**:\n• **Aseptic techniques** (prevent contamination of culture & protect worker): **Autoclaving** media/apparatus (steam under high pressure, **121°C for 15–20 min** — kills even heat-resistant bacterial **endospores**!); **flaming** inoculating loop & bottle neck; minimizing lid opening time; sealing Petri dish with tape on two opposite sides (NOT fully sealed around rim → prevents anaerobic pathogen growth!).\n• **Viable Cell Count (Serial Dilution + Spread/Pour Plate → CFU/mL)**: Counts **ONLY living cells** capable of forming colonies; assumes each colony grows from 1 cell (slow — takes 24–48 hrs).\n• **Total Cell Count**: **Haemocytometer** (microscope grid) or **Turbidity / Optical Density (Colorimeter)** — fast, BUT counts **BOTH living AND dead cells** (cannot distinguish!).",
              zh: "**無菌技術與計數比較**：**高壓滅菌鍋（121°C、15–20 分鐘）**可殺死耐熱細菌芽孢；灼燒接種環；培養皿只貼兩側膠紙防缺氧病原菌。**活菌計數**（連續稀釋塗抹平板，CFU/mL）只計活菌但耗時；**總菌計數**（血球計數板或比色計濁度）快速但**無法區分活菌與死菌**！"
            }
          ]
        }
      ]
    },
    {
      id: "e3-ch2",
      code: "E3.2",
      title: { en: "Use of Microorganisms in Food, Industry & Environment", zh: "微生物在食物、工業及環境的應用" },
      topics: [
        {
          id: "e3-2-1",
          code: "E3.2.1",
          highYield: true,
          title: { en: "Food Fermentation, Industrial Fermenters (Penicillin), Biogas & Bioremediation", zh: "食物發酵、工業發酵槽（青黴素）、沼氣與生物修復" },
          summary: {
            en: "Microorganisms are harnessed for **food fermentation** (yeast & lactic acid bacteria), **industrial production** of antibiotics/enzymes in controlled **fermenters**, **biogas**, and **sewage/oil bioremediation**.",
            zh: "人類利用微生物進行**食物發酵**、於精密**工業發酵槽**量產抗生素與酶、生產**沼氣**及**生物修復**污染物。"
          },
          points: [
            {
              en: "**Food Production Examples**:\n• **Beer / Wine Brewing**: Barley malted (amylase converts starch → maltose); **yeast** respires anaerobically producing **ethanol + CO2**.\n• **Bread Making**: Yeast produces **CO2** bubbles trapped in gluten network causing dough to rise; baking kills yeast & evaporates ethanol.\n• **Yoghurt / Cheese**: **Lactic acid bacteria (*Lactobacillus*)** ferment **lactose → lactic acid** → lowers pH → **coagulates/curdles milk proteins (casein)** & preserves yoghurt by inhibiting spoilage bacteria.",
              zh: "**食物發酵**：釀酒（酵母缺氧呼吸產乙醇）、麵包（酵母產 CO2 令麵糰膨脹）、乳酪／芝士（**乳酸菌**將乳糖轉為**乳酸**降 pH 使**酪蛋白凝固**兼防腐）。"
            },
            {
              en: "**Industrial Fermenter Design (High-Yield Diagram/Structure!)**:\n• **Cooling water jacket**: Removes excess **metabolic heat** from respiration to maintain **optimum temperature** (preventing enzyme denaturation!).\n• **Impeller / Stirrer paddles**: Mixes nutrients, microorganisms, heat, and O2 evenly & breaks up air bubbles.\n• **Air sparger + Sterile air filter**: Supplies sterile O2 for aerobic microbes (e.g. *Penicillium*).\n• **pH / Temperature / O2 probes + Acid/Alkali inlet**: Automated negative-feedback control of optimum growth conditions.\n• **Steam inlet**: Sterilizes empty fermenter before batch starts to prevent contaminating microbes competing for nutrients!",
              zh: "**工業發酵槽關鍵組件**：**冷卻水套**（散去呼吸產熱維持最適溫度防酶變性）；**攪拌葉片**（均勻混合養分與氧）；**無菌通氣管**（供應過濾無菌氧）；**pH／溫度探針與酸鹼注入口**；**蒸氣滅菌口**。"
            },
            {
              en: "**Batch vs Continuous Culture (e.g. Penicillin)**: **Penicillin** is a **secondary metabolite** produced by fungus *Penicillium* mainly during the **stationary phase** (when nutrients become slightly limiting) → therefore produced by **batch culture** (closed system run to stationary phase, then harvested & re-sterilized). **Continuous culture** (fresh medium added & culture withdrawn continuously) keeps microbes in **log phase** → ideal for **primary metabolites** (biomass / single-cell protein / enzymes).",
              zh: "**分批培養 vs 連續培養**：**青黴素**屬**次級代謝物**，主要於**穩定期**分泌，故採**分批培養**；初級代謝物或單細胞蛋白需微生物維持**對數期**，宜用**連續培養**。"
            },
            {
              en: "**Biogas & Bioremediation**: **Biogas** (~60% **methane CH4** + CO2) produced by **anaerobic methanogenic bacteria** digesting organic waste/manure/sludge (renewable fuel + reduces waste). **Bioremediation**: Using specialized microbes (e.g. oil-degrading bacteria) to break down oil spills or toxic pollutants into harmless CO2 & H2O.",
              zh: "**沼氣與生物修復**：**產甲烷菌**厭氧分解有機廢物產**甲烷（沼氣）**作再生能源；**生物修復**利用分解石油之細菌清除油污。"
            }
          ]
        }
      ]
    },
    {
      id: "e3-ch3",
      code: "E3.3",
      title: { en: "Harmful Effects & Control of Microorganisms", zh: "微生物的害處與控制" },
      topics: [
        {
          id: "e3-3-1",
          code: "E3.3.1",
          highYield: true,
          title: { en: "Food Spoilage, Preservation Principles, Sterilization vs Disinfection & Antibiotic Assay", zh: "食物變質、防腐原理、滅菌與消毒及抗生素藥敏試驗" },
          summary: {
            en: "**Food preservation** prevents microbial spoilage either by **killing microbes** (heat/radiation) or **inhibiting microbial growth & enzyme activity** (low temp, low water availability, low pH, removing O2).",
            zh: "**食物防腐**透過**殺滅微生物**或**抑制其生長與酶活性**（低溫、脫水、高滲、酸化、隔氧）延長保質期。"
          },
          points: [
            {
              en: "**Food-borne Infection vs Food Poisoning**: **Food-borne infection** (e.g. *Salmonella*): Living pathogens multiply in gut after eating contaminated food (longer incubation). **Food poisoning (intoxication)** (e.g. *Staphylococcus aureus*, *Clostridium botulinum*): Caused by ingesting **pre-formed toxins** secreted into food (rapid onset of vomiting/diarrhoea; heat-stable toxins may survive reheating!).",
              zh: "**食源性感染 vs 食物中毒**：前者為活病原體在腸道繁殖（如沙門氏菌，潛伏期較長）；後者為攝入微生物預先在食物分泌的**毒素**（如金黃葡萄球菌，發病極快）。"
            },
            {
              en: "**Food Preservation Methods & Biological Principles**:\n• **Refrigeration (4°C) / Freezing (−18°C)**: Slows down/inactivates microbial **enzymes** (and freezing locks water as ice) — does **NOT kill** microbes! (Growth resumes on thawing.)\n• **Pasteurization** (e.g. 72°C for 15 s, rapid cooling): Kills **pathogens** & most spoilage microbes while preserving milk flavour & vitamins (spores survive → must refrigerate).\n• **UHT** (135°C for 2–4 s) & **Canning** (high pressure/temp + airtight seal): Kills **all microbes & endospores** → long shelf life at room temp.\n• **Drying / Salting / Sugaring**: Removes water or creates **low water potential** → water leaves microbes by **osmosis** → plasmolysis/dehydration inhibits growth.\n• **Pickling (vinegar)**: **Low pH** denatures microbial enzymes.\n• **Vacuum packing**: Removes **O2** inhibiting **aerobic** spoilage bacteria/fungi (but watch out for anaerobic *C. botulinum*!).",
              zh: "**常見防腐原理**：**冷藏／冷凍**令微生物酶**不活躍**（非殺死）；**巴斯德消毒**殺致病菌保風味（仍須冷藏）；**UHT／罐頭**高溫高壓殺滅一切菌及芽孢；**風乾／鹽醃／糖漬**降低水勢令微生物**滲透失水**；**醋漬**低 pH 令酶變性；**真空包裝**隔絕氧氣抑需氧菌。"
            },
            {
              en: "**Sterilization vs Disinfection vs Antiseptics**: **Sterilization** destroys **ALL microorganisms including endospores** (autoclaving, ionizing radiation). **Disinfectants** (bleach, 70% alcohol) kill most microbes on **non-living surfaces** (too harsh for skin). **Antiseptics** (iodine solution, chlorhexidine) safely inhibit/kill microbes on **living skin/wounds**.",
              zh: "**滅菌 vs 消毒劑 vs 殺菌劑**：**滅菌**消滅包括芽孢在內的所有微生物；**消毒劑**用於無生命表面；**殺菌劑（防腐劑）**可安全用於活體皮膚傷口。"
            },
            {
              en: "**Antibiotic Sensitivity Testing (Disc Diffusion Assay)**: Filter paper discs soaked in different antibiotics placed on agar lawn of target bacteria → incubate → measure **diameter of clear zone (zone of inhibition)** around each disc. **Larger clear zone = more effective antibiotic** (must also consider diffusion rate of antibiotic in agar!). **Control disc**: soaked in sterile distilled water → shows no clear zone.",
              zh: "**抗生素抑菌圈試驗**：將含不同抗生素的濾紙片放於細菌菌苔培養，量度**清晰圈（抑菌圈）直徑**——直徑越大代表抑菌效果越強（對照片浸無菌蒸餾水）。"
            }
          ]
        }
      ]
    }
  ]
});
