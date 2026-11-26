/* ==========================================================================
   Unit 4 (Compulsory — Book 3/4, Ch 19–24):
   Ecosystems, Photosynthesis, Respiration, Health, Diseases & Body Defence
   ========================================================================== */
window.BIO_UNITS.push({
  id: "u4",
  paper: "compulsory",
  code: "Unit 4",
  bookRef: "Book 3/4 · Ch 19–24",
  color: "#059669",
  title: { en: "Unit 4: Ecosystems, Bioenergetics & Health", zh: "單元四：生態系、生物能量學與健康疾病" },
  subtitle: {
    en: "Ecosystems, Energy Flow & Nutrient Cycles · Photosynthesis · Cellular Respiration · Infectious/Non-infectious Diseases · Immunity",
    zh: "生態系、能量流與物質循環 · 光合作用 · 細胞呼吸 · 傳染與非傳染病 · 身體防禦機制與免疫"
  },
  chapters: [
    {
      id: "u4-ch19",
      code: "Ch 19",
      title: { en: "Ecosystems", zh: "生態系" },
      topics: [
        {
          id: "u4-19-1",
          code: "19.1",
          highYield: true,
          title: { en: "Ecological Concepts, Biotic Interactions & Ecological Succession", zh: "生態概念、生物間關係與生態演替" },
          summary: {
            en: "An **ecosystem** is a self-supporting, dynamic system formed by the **community** of living organisms interacting with each other and with their **abiotic environment**.",
            zh: "**生態系**是由生物**群落**與**非生物環境**相互作用組成的自給動態系統。"
          },
          points: [
            {
              en: "**Levels of Ecological Organization**: **Species** (group of organisms able to interbreed and produce **fertile offspring**) → **Population** (individuals of the *same species* in the same habitat at the same time) → **Community** (all populations of *different species* living & interacting in a habitat) → **Ecosystem** (community + abiotic environment) → **Biosphere**. **Habitat** = place where an organism lives; **Ecological niche** = the **functional role** an organism plays in its habitat (food, trophic level, activity time, interactions).",
              zh: "**生態層次**：**物種**（能交配產生**具生殖能力後代**）→ **種群**（同地同時之同種個體）→ **群落**（棲息地內所有不同物種）→ **生態系**（群落＋非生物環境）。**棲息地**指居住場所；**生態位（niche）**指生物在生態系中的角色與功能。"
            },
            {
              en: "**Five Biotic Relationships**:\n• **Predation (+ / −)**: Predator kills & eats prey; classic lagged **predator–prey oscillation graph** (prey peak precedes predator peak; prey population usually higher than predator).\n• **Competition (− / −)**: Organisms compete for limited resources (food, light, space, mates). **Intraspecific** (same species — most intense because identical niche!) vs **Interspecific** (different species — may lead to competitive exclusion).\n• **Commensalism (+ / 0)**: One benefits, the other is unaffected (e.g., barnacles on whales, remora fish on sharks, epiphytes on trees).\n• **Mutualism (+ / +)**: Both benefit (e.g., **lichen** = algae + fungus; **nitrogen-fixing bacteria** (*Rhizobium*) in legume root nodules; sea anemone & hermit crab/clownfish).\n• **Parasitism (+ / −)**: Parasite lives on/in host and obtains nutrients, harming host (usually without immediately killing it, e.g., tapeworm, lice, mistletoe).",
              zh: "**五大生物間關係**：**捕食（+/−）**（獵物峰值領先捕食者峰值）；**競爭（−/−）**（**種內競爭**因生態位完全重疊而最劇烈）；**偏利共生（+/0）**（藤壺與鯨）；**互利共生（+/+）**（地衣、豆科根瘤菌）；**寄生（+/−）**（條蟲與人體）。"
            },
            {
              en: "**Ecological Succession**: Gradual, directional replacement of one community by another over time as organisms modify the habitat until a stable **climax community** (usually woodland/forest with highest biodiversity & biomass) is reached.\n• **Primary succession**: Starts on **barren rock / newly formed land** with NO soil (e.g., volcanic lava, bare rock). **Pioneer community** = **lichens & mosses** (weather rock, add organic humus when dead to form soil) → grasses → shrubs → woodland (climax). Very slow.\n• **Secondary succession**: Occurs where an existing community was cleared (e.g., **hill fire, abandoned farmland**), **soil, seeds, spores & roots already remain** → skips lichen stage, much **faster**!",
              zh: "**生態演替**：生物群落隨時間逐步改變環境並被新群落取代，最終達致穩定的**頂級群落（林地）**。**原生演替**始於無泥土裸岩，先鋒群落為**地衣及苔蘚**，進程極慢；**次生演替**發生於山火／棄耕地，原有**泥土及種子尚存**，進程快得多。"
            }
          ]
        },
        {
          id: "u4-19-2",
          code: "19.2",
          highYield: true,
          title: { en: "Energy Flow, Ecological Pyramids, Carbon & Nitrogen Cycles & Sampling", zh: "能量流、生態金字塔、碳循環、氮循環與生態取樣" },
          summary: {
            en: "**Energy flows unidirectionally** through ecosystems (lost as heat at each trophic level), whereas **matter (carbon & nitrogen) cycles continuously** via producers, consumers, and **decomposers**.",
            zh: "**能量在生態系中單向流動**並於各營養級以熱能散失；**物質（碳與氮）則藉生產者、消費者與分解者循環往復**。"
          },
          points: [
            {
              en: "**Energy Flow & Why Food Chains Rarely Exceed 4–5 Trophic Levels**: Ultimate energy source = **the Sun**. Only ~1–2% of sunlight is captured by producers; only **~10%** of energy is transferred to the next trophic level. **~90% is lost** at each level via: (1) **Heat lost during respiration**; (2) **Uneaten body parts** (bones, roots); (3) **Undigested food egested in faeces**; (4) **Excretory products (urea)**. Because energy decreases sharply along the chain, little energy remains to support higher trophic levels.",
              zh: "**能量流與食物鏈長度限制**：每營養級僅約 **10%** 能量傳至下一級，約 **90%** 散失於**呼吸作用熱能**、未進食部分、未消化糞便及排泄物，故食物鏈一般不超過 4–5 級。"
            },
            {
              en: "**Pyramid of Numbers vs Pyramid of Biomass**:\n• **Pyramid of numbers**: Counts individuals at each trophic level. Can be **inverted** when producer is huge (1 oak tree → thousands of caterpillars) or with parasites (1 bird → hundreds of fleas).\n• **Pyramid of biomass**: Total **dry mass** of organisms at each level per unit area. Usually upright; can only be temporarily inverted in **aquatic phytoplankton** ecosystems (phytoplankton reproduce extremely rapidly despite small standing biomass!).",
              zh: "**數量金字塔 vs 生物量金字塔**：數量金字塔遇巨樹生產者或寄生鏈會**倒置**；**生物量金字塔**以單位面積總乾重計，較準確反映能量分布（僅海洋浮游植物因繁殖極快可暫時倒置）。"
            },
            {
              en: "**Carbon Cycle**: CO2 removed from atmosphere ONLY by **photosynthesis** (producers). CO2 returned by: (1) **Respiration** of plants, animals & **decomposers** (bacteria/fungi); (2) **Combustion** of fossil fuels & wood. Carbon passed between organisms via **feeding**; dead remains form **fossil fuels** under high pressure/temp over millions of years.",
              zh: "**碳循環**：大氣 CO2 僅由**光合作用**吸收；藉動植物及分解者的**呼吸作用**與化石燃料**燃燒**歸還大氣。"
            },
            {
              en: "**Nitrogen Cycle (4 Essential Microbial Processes — Very High-Yield!)**:\n1. **Nitrogen fixation**: Atmospheric N2 gas → ammonium/organic N by **nitrogen-fixing bacteria** (*Rhizobium* in root nodules of legumes; free-living soil bacteria) or **lightning** (N2 → oxides → NO3-).\n2. **Putrefaction / Ammonification**: **Decomposers** (saprophytic bacteria & fungi) break down proteins/urea in dead organisms & wastes into **ammonium compounds (NH4+)**.\n3. **Nitrification** (aerobic!): **Nitrifying bacteria** oxidize **NH4+ → nitrites (NO2-) → nitrates (NO3-)** (absorbable by plant roots to make amino acids/proteins!).\n4. **Denitrification** (anaerobic — waterlogged/poorly aerated soil!): **Denitrifying bacteria** convert **nitrates (NO3-) → nitrogen gas (N2)** back to atmosphere (reduces soil fertility!).",
              zh: "**氮循環四大微生物過程（極高頻！）**：(1) **固氮作用**（豆科根瘤固氮菌／閃電把 N2 轉為含氮化合物）；(2) **氨化／腐敗作用**（分解者把蛋白質及尿素分解成**銨化合物 NH4+**）；(3) **硝化作用**（需氧！硝化細菌把 NH4+ → NO2- → **硝酸鹽 NO3-** 供植物吸收）；(4) **反硝化作用**（缺氧積水土壤！反硝化細菌把 NO3- 還原回 N2 令土壤貧瘠）。"
            },
            {
              en: "**Ecological Sampling**: **Quadrat** (square frame placed **randomly** to estimate abundance/density/% coverage of immobile organisms like plants/barnacles in uniform habitats); **Line transect / Belt transect** (placed across an **environmental gradient**, e.g. rocky shore from high tide to low tide, to study **zonation/distribution** changes).",
              zh: "**生態取樣**：**樣方（quadrat）**隨機放置以估算均勻生境中不動生物的密度或覆蓋度；**樣線／樣帶（transect）**橫跨**環境梯度**（如石灘高潮至低潮）研究生物分布帶變化。"
            }
          ]
        }
      ]
    },
    {
      id: "u4-ch20",
      code: "Ch 20",
      title: { en: "Photosynthesis", zh: "光合作用" },
      topics: [
        {
          id: "u4-20-1",
          code: "20.1",
          highYield: true,
          title: { en: "Chloroplast, Photochemical Reactions, Calvin Cycle & Limiting Factors", zh: "葉綠體、光化學反應、卡爾文循環與限制因素" },
          summary: {
            en: "**Photosynthesis** converts **light energy** into **chemical energy** in organic molecules (glucose) inside **chloroplasts** in two linked stages: **photochemical reactions** (in thylakoids) and the **Calvin cycle** (in stroma).",
            zh: "**光合作用**在**葉綠體**內將**光能**轉化為葡萄糖的**化學能**，分兩大互連階段：類囊體的**光化學反應**及基質的**卡爾文循環**。"
          },
          eq: "6 CO2 + 6 H2O  —(Light energy, Chlorophyll)→  C6H12O6 + 6 O2",
          diagramIds: ["diag-photosynthesis"],
          points: [
            {
              en: "**Chloroplast Adaptations**: Double membrane; network of flattened sacs (**thylakoids**) stacked into **grana** → **large surface area** holding **chlorophyll** & enzymes for photochemical reactions; gel-like **stroma** contains **enzymes** for Calvin cycle + starch grains & circular DNA.",
              zh: "**葉綠體適應特徵**：類囊體疊成**基粒**大幅增加表面積以承載**葉綠素**進行光化學反應；**基質**含卡爾文循環所需**酶**及澱粉粒。"
            },
            {
              en: "**Stage 1 — Photochemical Reactions (Light-Dependent; occurs in Thylakoid Membranes)**:\n1. **Light absorption & excitation**: Chlorophyll absorbs light energy → electrons are excited to a higher energy level and emitted.\n2. **Photophosphorylation (ATP formation)**: Excited electrons pass down an **electron transport chain**, releasing energy to synthesize **ATP** from `ADP + Pi`.\n3. **Photolysis of water**: Light energy splits water molecules into **hydrogen (H+ & e-)** and **oxygen gas (O2)** (released as by-product into air!). Electrons replace those lost by chlorophyll; hydrogen is accepted by **NADP** to form **NADPH**.\n*Outputs sent to Calvin cycle*: **ATP** and **NADPH**.",
              zh: "**第一階段：光化學反應（類囊體膜，須光）**：(1) 葉綠素吸光激發並釋出高能電子；(2) 電子沿電子傳遞鏈釋能合成 **ATP**；(3) **水的光解**產生**氧氣（副產物釋出）**及氫，由 **NADP** 接受生成 **NADPH**。產物 **ATP 與 NADPH** 送往卡爾文循環。"
            },
            {
              en: "**Stage 2 — Carbon Fixation / Calvin Cycle (Light-Independent; occurs in Stroma)**:\n1. **Carbon dioxide fixation**: CO2 combines with a **5-C compound (RuBP)** (catalysed by enzymes) → forms two molecules of a **3-C compound (GP)**.\n2. **Reduction to Triose Phosphate (3-C)**: Using **ATP** (energy) and **NADPH** (reducing power / hydrogen) from photochemical reactions, the 3-C compound is reduced to **triose phosphate (3-C)**.\n3. **Synthesis of Glucose & Regeneration of 5-C**: Some triose phosphate molecules combine to form **glucose (6-C)** (rapidly converted to **starch** for temporary storage or **sucrose** for translocation, or combined with NO3- to make **amino acids** & lipids). Most triose phosphate molecules use **ATP** to **regenerate the 5-C compound**, keeping the cycle running.",
              zh: "**第二階段：卡爾文循環（基質，酶促反應）**：(1) **固碳**：CO2 與**五碳化合物**結合生成**三碳化合物**；(2) **還原**：消耗光化學反應產生的 **ATP（供能）**及 **NADPH（供氫還原）**生成**磷酸丙糖（三碳）**；(3) 部分合成**葡萄糖**（轉澱粉／蔗糖／氨基酸／脂質），大部分耗 ATP **再生五碳化合物**維持循環。"
            },
            {
              en: "**Limiting Factors (Graph Analysis — High-Yield!)**: The factor in shortest supply that limits the rate of photosynthesis:\n• **Light intensity**: At low light, rate increases linearly (**light is limiting**); at high light, curve **levels off (plateaus)** because **CO2 concentration or temperature** becomes limiting.\n• **CO2 concentration**: Low [CO2] limits Calvin cycle; raising [CO2] raises plateau (used in commercial greenhouses by burning fuel/CO2 enrichment).\n• **Temperature**: Affects **enzyme-controlled Calvin cycle** (NOT photochemical reactions directly!). At low light, raising temperature has little effect (light is limiting); at high light, raising temperature up to optimum greatly increases rate; above optimum, enzymes **denature** → rate plunges.",
              zh: "**限制因素（極高頻圖表題）**：低光強時**光照強度**為限制因素；達平頂後改由 **CO2 濃度或溫度**限制。溫度主要影響酶促**卡爾文循環**（過高溫令酶變性致速率暴跌）。溫室可增 CO2、補光及控溫增產。"
            }
          ],
          exam: {
            en: "CLASSIC EXPERIMENT: **Testing a leaf for starch** — (1) Boil in water (kills cells, stops enzymes, softens cell walls); (2) Boil in **alcohol in hot water bath (turn off Bunsen flame! alcohol is flammable)** to **remove chlorophyll** so colour change is visible; (3) Wash in hot water (softens brittle leaf); (4) Add **iodine solution** (blue-black = starch present). **Destarching**: Keep potted plant in darkness for 48 hours so stored starch is broken down & used before experiment!",
            zh: "經典葉片澱粉試驗：沸水殺細胞 → **關火後隔水酒精煮沸脫去葉綠素** → 熱水軟化 → 滴碘液（藍黑＝含澱粉）。實驗前須**置黑暗 48 小時脫澱粉（destarching）**！"
          }
        }
      ]
    },
    {
      id: "u4-ch21",
      code: "Ch 21",
      title: { en: "Respiration", zh: "呼吸作用" },
      topics: [
        {
          id: "u4-21-1",
          code: "21.1",
          highYield: true,
          title: { en: "ATP, Aerobic Respiration (4 Stages), Anaerobic Respiration & Oxygen Debt", zh: "ATP、需氧呼吸四階段、缺氧呼吸與氧債" },
          summary: {
            en: "**Cellular respiration** is the controlled, enzyme-catalysed breakdown of organic food (glucose) inside living cells to release chemical energy stored in **ATP** (adenosine triphosphate) — the universal energy currency of cells.",
            zh: "**細胞呼吸**是在活細胞內藉酶逐步分解葡萄糖以釋放能量並合成 **ATP**（通用能量貨幣）的過程。"
          },
          eq: "Aerobic: C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + Large ATP (~32–38 ATP)\nYeast Anaerobic: C6H12O6 → 2 C2H5OH + 2 CO2 + 2 ATP  |  Muscle Anaerobic: C6H12O6 → 2 Lactic acid + 2 ATP",
          diagramIds: ["diag-respiration"],
          points: [
            {
              en: "**Role of ATP**: `ADP + Pi + Energy ⇌ ATP + H2O`. ATP acts as an **immediate, mobile, universal energy carrier** linking energy-releasing reactions (respiration) to energy-requiring cellular activities (active transport, muscle contraction, protein synthesis, cell division, nerve impulse transmission).",
              zh: "**ATP 功能**：即時且通用的能量載體，把呼吸釋放的能量供應予主動轉運、肌肉收縮、蛋白質合成、細胞分裂等耗能活動。"
            },
            {
              en: "**Four Stages of Aerobic Respiration (Exact Locations & Products)**:\n1. **Glycolysis** (*Cytoplasm*; does NOT require O2): 1 Glucose (6-C) → **2 Pyruvate (3-C)** + **net 2 ATP** + **2 NADH**.\n2. **Link Reaction** (*Mitochondrial matrix*): Each Pyruvate (3-C) loses CO2 & hydrogen → **Acetyl-CoA (2-C)** + **CO2** + **NADH**.\n3. **Krebs Cycle** (*Mitochondrial matrix*): Acetyl-CoA (2-C) joins 4-C compound → 6-C compound → oxidized back to 4-C compound, releasing **CO2**, **2 ATP** (per glucose), and abundant **NADH & FADH2**.\n4. **Oxidative Phosphorylation / Electron Transport Chain** (*Inner mitochondrial membrane / cristae*; **REQUIRES O2!**): NADH & FADH2 donate H+/electrons to electron carriers → energy released synthesizes **most ATP (~28–34 ATP)**! **Oxygen acts as the final electron & hydrogen acceptor**, combining with H+ and e- to form **water (H2O)**.",
              zh: "**需氧呼吸四階段（緊記場所與產物）**：\n1. **糖酵解**（**細胞質**，不需氧）：1 葡萄糖 → 2 **丙酮酸** ＋ 淨 2 ATP ＋ 2 NADH。\n2. **連接反應**（**線粒體基質**）：丙酮酸 → 乙醯輔酶 A（2-C）＋ CO2 ＋ NADH。\n3. **克雷伯氏循環**（**線粒體基質**）：產生 CO2、少量 ATP 及大量 **NADH / FADH2**。\n4. **氧化磷酸化**（**線粒體內膜／嵴**，**須氧**）：電子沿傳遞鏈釋能合成**絕大部分 ATP**；**氧氣作為最終電子及氫受體**生成 **H2O**。"
            },
            {
              en: "**Anaerobic Respiration**: Occurs solely in **cytoplasm** when O2 is absent/insufficient. Only **glycolysis** produces ATP (**net 2 ATP** per glucose — far less energy because glucose is only **partially broken down**; most energy remains locked in ethanol or lactic acid!). Pyruvate accepts hydrogen from NADH to **regenerate NAD** so glycolysis can continue!\n• **Alcoholic fermentation (yeast & waterlogged plants)**: Pyruvate → **ethanol + CO2** (used in **bread-making** [CO2 makes dough rise; ethanol evaporates during baking] & **brewing**).\n• **Lactic acid fermentation (human skeletal muscles during vigorous exercise)**: Pyruvate → **lactic acid** (NO CO2 produced!). Accumulation of lactic acid lowers pH causing **muscle fatigue & cramps**.",
              zh: "**缺氧呼吸（細胞質）**：葡萄糖**不完全分解**，僅於糖酵解淨產 **2 ATP**（大量能量仍鎖於產物中）；丙酮酸接受 NADH 的氫以**再生 NAD** 維持糖酵解。**酵母／植物**產生**乙醇＋CO2**（製麵包發酵、釀酒）；**人體骨骼肌**劇烈運動時產生**乳酸（無 CO2！）**致肌肉疲勞。"
            },
            {
              en: "**Oxygen Debt & Recovery after Exercise**: **Oxygen debt** is the **extra amount of oxygen required after vigorous exercise** to remove accumulated **lactic acid** (transported in blood to **liver**, where most is converted back into **glycogen/glucose** and part is oxidized to CO2 + H2O). Therefore, **breathing rate/depth and heart rate remain high** even after stopping exercise!",
              zh: "**氧債與運動後恢復**：**氧債**指劇烈運動後額外所需之氧氣，用於在**肝臟**把累積的**乳酸**轉回**糖原**及氧化分解，故運動停下後呼吸與心跳仍暫時維持高水平。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Aerobic Respiration", zh: "需氧呼吸" },
              { en: "Anaerobic Respiration", zh: "缺氧呼吸" }
            ],
            rows: [
              [
                { en: "**Oxygen required?**", zh: "**需要氧氣？**" },
                { en: "Yes", zh: "是" },
                { en: "No", zh: "否" }
              ],
              [
                { en: "**Site in cell**", zh: "**進行場所**" },
                { en: "Cytoplasm & **mitochondria**", zh: "細胞質及**線粒體**" },
                { en: "**Cytoplasm only**", zh: "**僅限細胞質**" }
              ],
              [
                { en: "**Breakdown of glucose & ATP yield**", zh: "**分解程度與能量**" },
                { en: "**Complete** breakdown → **large** amount of ATP (~32–38 ATP/glucose)", zh: "**完全分解** → 釋放**大量**能量" },
                { en: "**Incomplete** breakdown → **small** amount of ATP (2 ATP/glucose)", zh: "**不完全分解** → 釋放**少量**能量（2 ATP）" }
              ],
              [
                { en: "**End products**", zh: "**最終產物**" },
                { en: "CO2 and H2O", zh: "CO2 及 H2O" },
                { en: "Animals: **lactic acid**; Yeast/plants: **ethanol + CO2**", zh: "動物：**乳酸**；酵母／植物：**乙醇＋CO2**" }
              ]
            ]
          }
        }
      ]
    },
    {
      id: "u4-ch22",
      code: "Ch 22–23",
      title: { en: "Personal Health, Infectious & Non-infectious Diseases", zh: "個人健康、傳染病與非傳染病" },
      topics: [
        {
          id: "u4-22-1",
          code: "22.1",
          highYield: true,
          title: { en: "Pathogens, Transmission, Antibiotics, Antibiotic Resistance & Non-infectious Diseases", zh: "病原體、傳播途徑、抗生素與抗藥性及非傳染病" },
          summary: {
            en: "**Health** (WHO) is a state of complete physical, mental and social well-being. **Infectious diseases** are caused by transmissible **pathogens**, whereas **non-infectious diseases** arise from genetic, physiological, or lifestyle factors.",
            zh: "**傳染病**由可傳播的**病原體**引起；**非傳染病**則源於遺傳、生理或生活習慣因素。"
          },
          points: [
            {
              en: "**Pathogens & Modes of Transmission**:\n• **Droplets / Air**: Influenza (virus), COVID-19 (virus), Tuberculosis / TB (bacterium) → prevent by wearing masks, good ventilation, covering sneezes.\n• **Water / Food**: Cholera (bacterium), Gastroenteritis, Hepatitis A (virus) → boil water, cook food thoroughly, wash hands.\n• **Vectors**: **Dengue fever** (virus via *Aedes* mosquito), **Malaria** (*Plasmodium* protist via female *Anopheles* mosquito) → eliminate stagnant water, mosquito nets/repellent.\n• **Direct contact**: Athlete's foot (fungus), Conjunctivitis.\n• **Body fluids / Sexual contact**: **AIDS / HIV** (virus destroys helper T cells → opportunistic infections), **Hepatitis B** (virus) → condoms, screen blood transfusions, do not share needles.",
              zh: "**傳播途徑與例子**：飛沫／空氣（流感、結核病）；水／食物（霍亂、甲肝）；**病媒**（登革熱—伊蚊、瘧疾—按蚊傳播瘧原蟲）；直接接觸（足癬—真菌）；體液／性接觸（愛滋病 HIV、乙肝）。"
            },
            {
              en: "**Antibiotics vs Viruses & Antibiotic Resistance (Very High-Yield!)**:\n• **Antibiotics** (e.g., **penicillin**) target **bacterial structures/processes** (inhibit **bacterial cell wall synthesis**, bacterial protein synthesis, or bacterial enzymes). They are **INEFFECTIVE against viruses** because **viruses are non-cellular** (have NO cell wall, NO ribosomes, NO independent metabolism — they hijack host cells!).\n• **Evolution of Antibiotic-Resistant Bacteria (Natural Selection!)**: Random mutation produces resistant bacteria in population → misuse/incomplete course of antibiotics kills susceptible bacteria while **resistant bacteria survive** → survive & reproduce passing resistance alleles to offspring → proportion of resistant bacteria rises rapidly (**superbugs**, e.g. MRSA). **Prevention**: Finish full prescribed course, do NOT take antibiotics for viral colds/flu, avoid routine overuse in livestock.",
              zh: "**抗生素與抗藥性（必考！）**：抗生素（如青黴素）破壞**細菌細胞壁合成**或細菌代謝，對**病毒無效**（病毒無細胞結構、無細胞壁及核糖體）。濫用或未完成療程會透過**自然選擇**篩選出抗藥性突變菌株並大量繁殖。"
            },
            {
              en: "**Major Non-infectious Diseases**:\n• **Coronary Heart Disease (CHD)**: Fatty deposits (**cholesterol plaques**) build up inside **coronary arteries** (**atherosclerosis**) → lumen narrows → blood clot (**thrombosis**) blocks artery → **reduced O2 & glucose supply to cardiac muscle** → cardiac muscle cells die (**heart attack**). Risk factors: high-saturated-fat/cholesterol diet, smoking, lack of exercise, obesity, stress, high blood pressure.\n• **Cancer**: Uncontrolled **mitotic cell division** caused by **mutations** in genes controlling the cell cycle → forms a **tumour**. **Benign tumour** (slow-growing, encapsulated, does NOT spread) vs **Malignant tumour** (invades surrounding tissues & spreads via blood/lymph to form secondary tumours = **metastasis**). Risk factors: **carcinogens** (tar, UV/X-rays, asbestos, nitrosamines), certain viruses (HPV, HBV), genetics.",
              zh: "**重要非傳染病**：**冠心病**（膽固醇斑塊積聚致**冠狀動脈粥樣硬化**收窄、血栓阻塞 → 心肌缺氧壞死致心臟病發）；**癌症**（調控細胞周期基因突變致**不受控有絲分裂**；良性不擴散，**惡性腫瘤**會經血液／淋巴**轉移**形成繼發性腫瘤）。"
            }
          ]
        }
      ]
    },
    {
      id: "u4-ch24",
      code: "Ch 24",
      title: { en: "Body Defence Mechanisms", zh: "身體的防禦機制" },
      topics: [
        {
          id: "u4-24-1",
          code: "24.1",
          highYield: true,
          title: { en: "Non-specific Defence, Specific Immune Response (B & T Cells) & Vaccination", zh: "非特異性防禦、特異性免疫反應（B/T 細胞）與疫苗接種" },
          summary: {
            en: "The body defends against pathogens via **non-specific defence** (barriers, phagocytosis, inflammation — acts against ALL pathogens immediately) and **specific defence / immunity** (B & T lymphocytes targeting specific **antigens** with **immunological memory**).",
            zh: "身體防禦分**非特異性防禦**（物理化學屏障、吞噬與發炎，對一切病原體即時生效）及**特異性防禦／免疫**（B 與 T 淋巴細胞針對特定**抗原**並產生**免疫記憶**）。"
          },
          diagramIds: ["diag-immunity"],
          points: [
            {
              en: "**Non-specific Defence**:\n• **Physical barriers**: Intact **skin** (tough dead keratinized outer layer), **blood clotting** (seals wounds), **mucus & cilia** in respiratory tract.\n• **Chemical barriers**: **Sebum** (antiseptic), **tears & saliva** (contain **lysozyme** digesting bacterial cell walls), **gastric HCl** (kills ingested bacteria), acidic **vaginal secretions**.\n• **Phagocytosis**: **Phagocytes** squeeze out of capillaries, engulf pathogens into vacuoles, and digest them with hydrolytic enzymes.\n• **Inflammatory response**: Injured tissue/mast cells release histamine → **arterioles dilate** (more blood flow → **redness & warmth**) & **capillary permeability increases** (more plasma & phagocytes leak out → **swelling & pain**, pus = dead phagocytes + bacteria).",
              zh: "**非特異性防禦**：物理屏障（完整皮膚、凝血封傷口、呼吸道黏液纖毛）；化學屏障（皮脂、淚液與唾液**溶菌酶**、胃酸）；**吞噬細胞**吞噬消化；**發炎反應**（小動脈舒張＋微血管透性增高 → 紅、熱、腫、痛，加快白血球到達傷口）。"
            },
            {
              en: "**Specific Defence (Adaptive Immunity) — Exact HKEAA Mechanism**:\n• **Antigen**: Foreign molecule (usually protein/glycoprotein on pathogen surface) that triggers a specific immune response.\n• **Humoral Immune Response (B Lymphocytes)**: Specific **B cells** (whose membrane receptors fit the antigen) are activated (aided by **helper T cells**) → divide by **mitosis** & differentiate into:\n  (1) **Plasma cells**: Secrete large quantities of **specific antibodies** (Y-shaped proteins) into blood → bind specifically to antigens causing **agglutination** (clumping for easier phagocytosis), **lysis**, or **neutralizing toxins** (antitoxins).\n  (2) **Memory B cells**: Persist in bloodstream for years → confer long-term immunity.\n• **Cell-Mediated Immune Response (T Lymphocytes)**: Activated **T cells** divide & differentiate into **Helper T cells** (activate B cells, killer T cells & phagocytes), **Killer T cells** (bind & destroy **virus-infected host cells**, cancer cells & transplanted cells directly by releasing chemicals that punch holes in membranes), and **Memory T cells**.",
              zh: "**特異性免疫機制（極高頻！）**：\n• **體液免疫（B 淋巴細胞）**：辨認特定**抗原**並在**輔助 T 細胞**協助下經有絲分裂分化成**漿細胞**（分泌大量特異性**抗體**，進行**凝集**、溶解病原體或中和毒素）及**記憶 B 細胞**。\n• **細胞免疫（T 淋巴細胞）**：分化為**輔助 T 細胞**（激活 B／殺手 T 細胞）、**殺手 T 細胞**（直接破壞受病毒感染的宿主細胞及癌細胞）及**記憶 T 細胞**。"
            },
            {
              en: "**Primary vs Secondary Immune Response (Graph Marking Points!)**:\nOn **first exposure** (Primary response): **longer lag phase**, **slower rise**, **lower peak** antibody concentration, and **rapid decline** (takes time for specific B cells to be activated & multiply).\nOn **re-exposure to the SAME antigen** (Secondary response): **Memory cells** recognize the antigen immediately and rapidly divide & differentiate into plasma cells → **much shorter lag phase**, **much faster rise**, **much higher peak** antibody level, and **stays high for longer** → pathogens destroyed BEFORE symptoms appear!",
              zh: "**初次 vs 再次免疫反應圖表必背點**：再次接觸**相同抗原**時，**記憶細胞**即時識別並迅速分裂成大量漿細胞，令抗體產生**潛伏期極短、上升極快、峰值高得多且維持更久**，在病徵出現前即消滅病原體！"
            },
            {
              en: "**Vaccination & Active vs Passive Immunity**: **Vaccine** contains **weakened (attenuated) pathogens, killed pathogens, inactivated toxins (toxoids), or purified antigens/mRNA** — stimulates **primary immune response** to produce **memory cells** without causing disease (**artificial active immunity**). **Booster doses** trigger secondary response for higher/longer-lasting immunity.",
              zh: "**疫苗原理**：含減毒／滅活病原體或抗原，誘發初次免疫產生**記憶細胞**而不致病（**人工主動免疫**）；加強劑觸發再次反應提升保護力。"
            }
          ],
          table: {
            headers: [
              { en: "Type of Immunity", zh: "免疫類型" },
              { en: "Source of Antibodies", zh: "抗體來源" },
              { en: "Memory Cells? / Duration", zh: "記憶細胞？／時效" },
              { en: "Examples", zh: "例子" }
            ],
            rows: [
              [
                { en: "**Natural Active**", zh: "**天然主動免疫**" },
                { en: "Produced by **own lymphocytes** after infection", zh: "受感染後由**自身淋巴細胞**產生" },
                { en: "**Yes** / Long-lasting (often lifelong); slow onset", zh: "**有**／持久（常終身）；起效較慢" },
                { en: "Recovery from chickenpox / measles", zh: "患水痘／麻疹康復" }
              ],
              [
                { en: "**Artificial Active**", zh: "**人工主動免疫**" },
                { en: "Produced by **own lymphocytes** after vaccination", zh: "接種疫苗後由**自身**產生" },
                { en: "**Yes** / Long-lasting; slow onset", zh: "**有**／持久；起效較慢" },
                { en: "MMR, Hepatitis B, Polio, COVID-19 vaccines", zh: "乙肝、麻疹、脊髓灰質炎疫苗" }
              ],
              [
                { en: "**Natural Passive**", zh: "**天然被動免疫**" },
                { en: "Ready-made antibodies transferred from **mother**", zh: "從**母體**獲得現成抗體" },
                { en: "**No** / **Immediate** but **short-lived** (antibodies degraded)", zh: "**無**／**即時**生效但**短暫**" },
                { en: "Across **placenta** to foetus; in **breast milk (colostrum)**", zh: "經**胎盤**傳胎兒；經**母乳**傳嬰兒" }
              ],
              [
                { en: "**Artificial Passive**", zh: "**人工被動免疫**" },
                { en: "Injection of ready-made **antibodies / antiserum**", zh: "注射現成**抗體／抗血清**" },
                { en: "**No** / **Immediate** emergency protection; **short-lived**", zh: "**無**／**即時**急救保護但**短暫**" },
                { en: "Tetanus antitoxin / snake antivenom / rabies immunoglobulin", zh: "破傷風抗毒素、抗蛇毒血清" }
              ]
            ]
          }
        }
      ]
    }
  ]
});
