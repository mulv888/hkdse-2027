/* ==========================================================================
   Elective E2 (Paper 2 — Book E2): Applied Ecology
   Human Impacts · Air/Water Pollution & Sewage Treatment · Conservation
   ========================================================================== */
window.BIO_UNITS.push({
  id: "e2",
  paper: "elective",
  code: "Elective E2",
  bookRef: "Book E2 · Ch 1–3",
  color: "#65a30d",
  title: { en: "Elective E2: Applied Ecology", zh: "選修 E2：應用生態學" },
  subtitle: {
    en: "Human Population & Resource Overexploitation · Air/Water Pollution, Eutrophication, Bioaccumulation & Sewage Treatment · Conservation & Sustainable Development",
    zh: "人口增長與資源過度開發 · 空氣與水污染、富營養化、生物累積與污水處理 · 保育與可持續發展"
  },
  chapters: [
    {
      id: "e2-ch1",
      code: "E2.1",
      title: { en: "Human Impact on the Environment", zh: "人類對環境的影響" },
      topics: [
        {
          id: "e2-1-1",
          code: "E2.1.1",
          highYield: true,
          title: { en: "Population Growth, Deforestation, Monoculture, Overfishing & Urbanization", zh: "人口增長、濫伐林木、單一耕作、過度捕魚與城市化" },
          summary: {
            en: "Exponential human population growth & industrialization drive **habitat destruction**, **overexploitation of biological resources**, soil degradation, and biodiversity loss.",
            zh: "人口指數增長與工業化導致**生境破壞**、**生物資源過度開發**、土壤退化及生物多樣性銳減。"
          },
          points: [
            {
              en: "**Deforestation Impacts**: (1) **Loss of habitats & biodiversity** (extinction of forest species); (2) **Soil erosion & landslides** (no roots to bind soil, no canopy to intercept heavy rain → topsoil washed into rivers causing silting & flooding); (3) **Loss of soil fertility** (nutrients leached away); (4) **Enhanced global warming** (fewer trees absorbing CO2 via photosynthesis + burning felled trees releases CO2); (5) **Disruption of water cycle** (less transpiration → drier local climate / desertification).",
              zh: "**濫伐林木後果**：棲息地喪失與物種滅絕、**水土流失**與山泥傾瀉（無根固土及樹冠攔雨）、土壤貧瘠、加劇**全球暖化**（固碳減少＋焚林釋 CO2）、破壞水循環。"
            },
            {
              en: "**Intensive Agriculture & Monoculture**: Planting a single genetically uniform crop species over vast areas → (1) **Depletes specific soil minerals** (requires heavy chemical fertilizers → runoff/eutrophication); (2) **Rapid pest & disease outbreaks** (uniform hosts, low predator diversity → heavy pesticide use → bioaccumulation & pest resistance); (3) Reduces biodiversity.",
              zh: "**單一耕作弊端**：耗盡特定土壤礦物質（依賴化肥致富營養化）、易爆發病蟲害（過度依賴農藥致抗藥性與生物放大）、降低生物多樣性。"
            },
            {
              en: "**Overfishing**: Catching fish faster than they can reproduce (trawling damages seabed habitats, small-mesh nets catch **juveniles before sexual maturity** + non-target **by-catch**). Causes collapse of fish stocks & disruption of marine food webs. *Management*: Minimum mesh size, fishing quotas, **fishing moratoria (closed seasons during breeding)**, marine parks/no-take zones, banning bottom trawling (banned in HK waters since 2012!).",
              zh: "**過度捕魚與管理**：拖網破壞海床、細網眼濫捕幼魚致種群崩潰。對策：限制網眼大小、設**休漁期**（繁殖季禁捕）、捕魚配額、設立海岸公園及禁止拖網（香港自 2012 年禁拖網）。"
            }
          ]
        }
      ]
    },
    {
      id: "e2-ch2",
      code: "E2.2",
      title: { en: "Environmental Pollution and Control", zh: "環境污染與控制" },
      topics: [
        {
          id: "e2-2-1",
          code: "E2.2.1",
          highYield: true,
          title: { en: "Water Pollution: Eutrophication, Oxygen Sag Curve, Bioaccumulation & Sewage Treatment", zh: "水污染：富營養化、溶氧下陷曲線、生物累積與污水處理" },
          summary: {
            en: "Discharge of untreated **organic sewage** and **inorganic fertilizers** triggers microbial oxygen depletion (**BOD**), **algal blooms (eutrophication)**, and **biomagnification** of persistent toxins along food chains.",
            zh: "未處理**有機污水**與**化肥**排入水體會引發微生物耗氧（**BOD**）、**藻類大量繁殖（富營養化）**，而難降解毒素則沿食物鏈**生物放大**。"
          },
          diagramIds: ["diag-oxygen-sag"],
          points: [
            {
              en: "**Eutrophication & Algal Bloom / Red Tide (Exact HKEAA Step-by-Step Mechanism!)**:\n1. Excess **nitrates (NO3-) and phosphates (PO43-)** from fertilizers, detergents, or decomposed sewage enter water bodies (**nutrient enrichment**).\n2. Rapid growth & reproduction of surface **algae (algal bloom / red tide)**.\n3. Dense algal mat **blocks sunlight** from penetrating to submerged aquatic plants → submerged plants die (cannot photosynthesize).\n4. Algae themselves soon exhaust nutrients and die.\n5. **Aerobic saprophytic bacteria (decomposers)** multiply rapidly to decompose massive amounts of dead algae & plants, **consuming huge amounts of dissolved oxygen (DO)** via aerobic respiration (high **BOD**).\n6. **Dissolved oxygen drops drastically** → fish and aquatic animals **suffocate and die**! (Some red-tide algae also release **toxins** or clog fish gills!)",
              zh: "**富營養化與紅潮六步滿分機制**：(1) 化肥／污水帶來大量**硝酸鹽與磷酸鹽**；(2) 表層**藻類暴增（藻華／紅潮）**；(3) **遮蔽陽光**致沉水植物死亡；(4) 藻類耗盡養分後大量死亡；(5) **需氧分解細菌**大量繁殖分解屍體，耗盡水中**溶氧（高 BOD）**；(6) 魚類及水生動物**缺氧窒息死亡**。"
            },
            {
              en: "**Oxygen Sag Curve & BOD (Biochemical Oxygen Demand)**: **BOD** measures the amount of dissolved O2 consumed by microorganisms decomposing organic matter over 5 days (higher organic pollution = higher BOD). Downstream from a sewage outfall: **Suspended solids & NH4+ spike** immediately → **aerobic bacteria surge**, consuming O2 so **DO plummets (oxygen sag)** → bacteria oxidize organic N to **NO3-** → once organic matter is depleted, bacteria decline, **algae flourish** (using NO3-) producing O2 by photosynthesis + atmospheric aeration → **DO gradually recovers**.",
              zh: "**溶氧下陷曲線與生化需氧量（BOD）**：排污口下游細菌劇增分解有機物，**溶氧急降**；有機物分解後釋出**硝酸鹽**促藻類生長釋氧加上水面溶氣，下游溶氧逐漸回升。"
            },
            {
              en: "**Bioaccumulation vs Biomagnification (Persistent Toxins: DDT, Mercury, PCBs)**:\n• **Bioaccumulation**: Gradual build-up of **non-biodegradable, fat-soluble** toxins (cannot be broken down or excreted) in the **body tissues of a single organism** over its lifetime.\n• **Biomagnification**: **Progressive increase in toxin concentration** at **successively higher trophic levels** along a food chain — because higher-level consumers eat **large biomass of lower-level prey** to obtain enough energy (only ~10% energy passed up, while nearly 100% of toxin is retained!) → **top predators** (e.g. eagles, dolphins, humans) suffer the highest, lethal toxin concentrations!",
              zh: "**生物累積 vs 生物放大（DDT、重金屬汞）**：**生物累積**指難降解脂溶性毒素在**單一個體**內隨時間積累；**生物放大**指毒素濃度沿食物鏈**逐級大幅遞增**（因能量逐級損耗 90%，高營養級須攝食大量獵物而保留幾乎全部毒素），令**頂級捕食者**中毒最深！"
            },
            {
              en: "**Sewage Treatment Stages**:\n1. **Preliminary / Screening & Grit Removal**: Metal screens remove large solids (plastics, rags); grit channels settle sand.\n2. **Primary Treatment (Physical Sedimentation)**: Sewage rests in primary sedimentation tank → suspended organic solids settle as **primary sludge**.\n3. **Secondary Treatment (Biological — Aerobic)**: Liquid effluent enters **aeration tank (activated sludge)** or **trickling filter**; **aerobic microorganisms** (bacteria & protists) oxidize dissolved/fine organic matter into CO2, H2O & inorganic ions (**greatly lowers BOD!**) → secondary sedimentation settles microbial flocs.\n4. **Sludge Digestion (Anaerobic)**: Sludge digested by **anaerobic bacteria** in digester → produces **biogas (methane, CH4)** as fuel + stabilized **biosolids** (fertilizer/landfill).\n5. **Tertiary Treatment / Disinfection**: Chlorination or **UV irradiation** kills remaining pathogens; chemical removal of NO3-/PO43- if needed.",
              zh: "**污水處理四步驟**：格柵除大固體 → **一級處理（物理沉澱）**去懸浮初沉污泥 → **二級處理（好氧生物處理：活性污泥法／曝氣池）**由需氧微生物分解有機物**大幅降低 BOD** → **污泥厭氧消化**產**沼氣（甲烷）**→ **消毒**（加氯或紫外線殺菌）。"
            }
          ]
        },
        {
          id: "e2-2-2",
          code: "E2.2.2",
          highYield: false,
          title: { en: "Air Pollution, Acid Rain, Greenhouse Effect & EIA", zh: "空氣污染、酸雨、溫室效應與環境影響評估" },
          summary: {
            en: "Combustion of fossil fuels emits **SO2, NOx, particulates (PM2.5/PM10), CO, and CO2**, causing respiratory illnesses, **acid rain**, photochemical smog, and **global warming**.",
            zh: "燃燒化石燃料釋放 **SO2、NOx、懸浮粒子、CO 及 CO2**，引致呼吸道疾病、**酸雨**及**全球暖化**。"
          },
          points: [
            {
              en: "**Acid Rain (pH < 5.6)**: **SO2** (power stations burning coal) and **NOx** (vehicle engines) dissolve in rainwater forming sulphuric & nitric acids → damages leaf cuticle & mesophyll, **leaches essential minerals (Mg2+, Ca2+)** from soil, releases toxic **Al3+** killing fish gills & tree roots, corrodes limestone buildings. *Control*: Low-sulphur fuels, **flue gas desulphurization (scrubbers)**, **catalytic converters** in cars.",
              zh: "**酸雨**：燃煤釋放 **SO2** 與汽車 **NOx** 溶於雨水形成酸雨 → 損葉片、淋溶土壤鎂鈣並釋出有毒鋁離子殺魚毀林。控制：煙氣脫硫、汽車催化轉換器。"
            },
            {
              en: "**Enhanced Greenhouse Effect & Global Warming**: Rising **CO2, CH4, N2O, CFCs** trap outgoing **long-wave infrared radiation** → rising global temperature → **melting polar ice caps & thermal expansion of oceans → sea-level rise** (flooding coastal habitats/wetlands), **coral bleaching**, extreme weather, **shifting species distributions** & pest ranges.",
              zh: "**全球暖化**：溫室氣體（CO2、CH4 等）吸收長波紅外輻射致氣溫上升 → 冰川融化海平面上升、**珊瑚白化**、極端天氣與物種分布遷移。"
            },
            {
              en: "**Environmental Impact Assessment (EIA)**: Statutory process before major infrastructure projects (e.g. bridges, reclamation) to **predict & evaluate potential ecological/pollution impacts** and propose **mitigation measures** (avoid → minimize → compensate, e.g. artificial wetlands) with public consultation.",
              zh: "**環境影響評估（EIA）**：大型基建動工前法定評估程序，預測對生態與環境影響並制定緩解補償措施（避免 → 減低 → 補償）。"
            }
          ]
        }
      ]
    },
    {
      id: "e2-ch3",
      code: "E2.3",
      title: { en: "Conservation and Sustainable Development", zh: "保育與可持續發展" },
      topics: [
        {
          id: "e2-3-1",
          code: "E2.3.1",
          highYield: true,
          title: { en: "Biodiversity, In-Situ vs Ex-Situ Conservation & Sustainable Resource Management", zh: "生物多樣性、就地與異地保育及可持續資源管理" },
          summary: {
            en: "**Biodiversity** spans **genetic, species, and ecosystem diversity**. Effective conservation combines **in-situ** (protecting natural habitats) and **ex-situ** (off-site zoos/seed banks) strategies alongside legislation and **sustainable development**.",
            zh: "**生物多樣性**包括**遺傳、物種及生態系多樣性**。保育結合**就地保育**、**異地保育**、法例管制與**可持續發展**。"
          },
          points: [
            {
              en: "**Why Conserve Biodiversity?**: (1) **Ecological stability** (complex food webs resist disturbance; keystone species maintain balance); (2) **Economic / Utilitarian** (food, timber, **medicines/drugs** from wild plants, ecotourism, gene pool for crop breeding); (3) **Aesthetic & Recreational**; (4) **Ethical** (intrinsic right of species to exist).",
              zh: "**保育四大價值**：生態穩定、經濟與醫藥價值（野生基因庫與新藥來源）、美學與康樂、道德倫理責任。"
            },
            {
              en: "**In-Situ vs Ex-Situ Conservation**:\n• **In-Situ (On-site in natural habitat)**: Country parks, marine parks, nature reserves, **Mai Po Nature Reserve (Ramsar wetland)**, **habitat restoration** (planting native trees, mangrove replanting). *Pros*: Preserves **entire ecosystem & biotic interactions**, allows continued **natural evolution**, accommodates large populations. *Cons*: Hard to enforce against poaching/pollution if habitat is fragmented.\n• **Ex-Situ (Off-site outside natural habitat)**: Zoos (**captive breeding** & reintroduction), botanical gardens, **seed banks** (frozen dormant seeds at low temp/humidity), cryopreservation of gametes/embryos. *Pros*: Protects critically endangered species from immediate extinction/predators, allows scientific study & controlled breeding. *Cons*: **Small gene pool (inbreeding depression)**, animals may lose wild survival/foraging instincts, does NOT protect the natural habitat!",
              zh: "**就地保育 vs 異地保育**：**就地保育**（郊野公園、海岸公園、米埔拉姆薩爾濕地）保留完整生態系及自然演化；**異地保育**（動物園人工繁殖、植物園、**種子庫**）能搶救瀕危物種免即時滅絕，但**基因庫狹窄（近親繁殖）**且未能保存原棲息地。"
            },
            {
              en: "**Legislation & Sustainable Development**: **CITES** (Convention on International Trade in Endangered Species — bans/regulates trade in ivory, shark fins, wild orchids, pangolins); Hong Kong **Wild Animals Protection Ordinance** & **Country Parks Ordinance**. **Sustainable development**: Meeting present needs **without compromising the ability of future generations to meet their own needs** (balancing economic growth, social needs & environmental protection; 4Rs — Reduce, Reuse, Recycle, Replace; renewable energy).",
              zh: "**法例與可持續發展**：**CITES（瀕危野生動植物種國際貿易公約）**管制瀕危貿易；**可持續發展**指滿足當代需求同時**不損害後代滿足其需求的能力**。"
            }
          ]
        }
      ]
    }
  ]
});
