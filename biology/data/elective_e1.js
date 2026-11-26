/* ==========================================================================
   Elective E1 (Paper 2 — Book E1): Human Physiology: Regulation and Control
   Osmoregulation · Thermoregulation · Gas Content & Cardiac Output · Reproduction
   ========================================================================== */
window.BIO_UNITS.push({
  id: "e1",
  paper: "elective",
  code: "Elective E1",
  bookRef: "Book E1 · Ch 1–4",
  color: "#dc2626",
  title: { en: "Elective E1: Human Physiology — Regulation & Control", zh: "選修 E1：人體生理學：調節與控制" },
  subtitle: {
    en: "Water Content (Nephron & ADH) · Body Temperature (Skin & Hypothalamus) · Blood Gases & Cardiac Cycle · Hormonal Control of Menstrual Cycle",
    zh: "水分調節（腎元與 ADH）· 體溫調節（皮膚與下丘腦）· 血氣與心輸出量調節 · 生殖周期的激素控制"
  },
  chapters: [
    {
      id: "e1-ch1",
      code: "E1.1",
      title: { en: "Regulation of Water Content (Osmoregulation)", zh: "水分含量的調節（滲透調節）" },
      topics: [
        {
          id: "e1-1-1",
          code: "E1.1.1",
          highYield: true,
          title: { en: "Kidney, Nephron Structure, Urine Formation & Dialysis Machine", zh: "腎臟、腎元結構、尿液形成與洗腎機" },
          summary: {
            en: "Each kidney contains ~1 million **nephrons** performing **excretion** (removal of urea, excess salts & water) and **osmoregulation** through two key processes: **ultrafiltration** and **selective reabsorption**.",
            zh: "每個腎臟含約百萬個**腎元**，藉**超濾作用**及**重吸收作用**執行**排泄**與**滲透調節**。"
          },
          diagramIds: ["diag-nephron"],
          points: [
            {
              en: "**Nephron Regions**: **Cortex** contains Bowman's capsule, glomerulus, proximal convoluted tubule (PCT) & distal convoluted tubule (DCT); **Medulla** contains loop of Henle & collecting duct; urine drains via **pelvis → ureter → urinary bladder → urethra**.",
              zh: "**腎元分布**：**皮質**含鮑曼氏囊、腎小球、近曲小管及遠曲小管；**髓質**含亨利氏套及集尿管；尿液經**腎盂 → 輸尿管 → 膀胱 → 尿道**排出。"
            },
            {
              en: "**1. Ultrafiltration (Glomerulus → Bowman's Capsule)**: The **afferent arteriole** has a **wider lumen (larger diameter)** than the **efferent arteriole** → creates **high hydrostatic pressure** in the glomerulus! This forces water and **small dissolved molecules** (glucose, amino acids, mineral salts, urea) through the thin porous capillary wall & Bowman's capsule wall into the capsular space forming **glomerular filtrate**. **Large molecules (plasma proteins) and blood cells (RBCs, WBCs, platelets) CANNOT pass through** and remain in blood.",
              zh: "**1. 超濾作用**：**入球小動脈管腔較出球小動脈粗** → 在腎小球產生**高液體靜壓** → 把水及小分子（葡萄糖、氨基酸、礦物質、尿素）濾入鮑曼氏囊形成**腎小球濾液**；**血細胞及大型血漿蛋白不能濾過**。"
            },
            {
              en: "**2. Selective Reabsorption (Along Kidney Tubule → Peritubular Capillaries)**:\n• **Proximal Convoluted Tubule (PCT)** (epithelial cells have **microvilli** for large surface area & **abundant mitochondria** for ATP): **100% of glucose & amino acids** reabsorbed by **diffusion + active transport**; ~80% of Na+/mineral ions by active transport; ~80% of water reabsorbed by **osmosis** (as solute reabsorption raises filtrate water potential above blood).\n• **Loop of Henle & DCT**: Further reabsorption of water and mineral salts.\n• **Collecting Duct**: Final regulated water reabsorption under **ADH** control.\n• **Urea**: Only small fraction diffuses back; because most water is reabsorbed, **urea concentration increases dramatically** (~60×) from filtrate to urine!",
              zh: "**2. 重吸收作用**：**近曲小管**（具**微絨毛**及大量**線粒體**）藉擴散與**主動轉運**重吸收 **100% 葡萄糖及氨基酸**、約 80% 鹽分，並藉**滲透**重吸收約 80% 水分；**集尿管**受 **ADH** 調控作最後水分重吸收；**尿素**大部分留於管腔，因水分大幅重吸收而濃度大增！"
            },
            {
              en: "**Haemodialysis (Dialysis Machine) for Kidney Failure**: Patient's arterial blood flows through **differentially permeable dialysis tubing** immersed in **dialysis fluid** flowing in **counter-current direction** (maintains a steep concentration gradient along the entire tubing!). **Dialysis fluid** is kept at **37°C**, contains **normal blood concentrations of glucose, amino acids & essential salts** (so no net loss of useful nutrients!), and **ZERO urea** (so urea diffuses rapidly out of blood). Blood cells & plasma proteins are too large to cross tubing.",
              zh: "**血液透析（洗腎機）**：血液流經浸於**逆流透析液**（維持整段陡峭濃度梯度）的**差異透性透析管**；透析液維持 **37°C**、含**正常濃度葡萄糖與有用鹽分**（防有用物質流失）且**不含尿素**（令尿素迅速擴散濾出）。"
            }
          ]
        },
        {
          id: "e1-1-2",
          code: "E1.1.2",
          highYield: true,
          title: { en: "Osmoregulation via Antidiuretic Hormone (ADH) — Negative Feedback", zh: "抗利尿激素（ADH）之負反饋滲透調節" },
          summary: {
            en: "Blood **water potential** is continuously monitored by **osmoreceptors in the hypothalamus** and corrected by regulating **ADH** release from the **pituitary gland** acting on the **collecting ducts**.",
            zh: "**下丘腦滲透壓感受器**持續監測血液**水勢**，藉調控**垂體**釋放 **ADH** 改變**集尿管**透水性，以負反饋維持水分平衡。"
          },
          points: [
            {
              en: "**When Blood Water Potential DROPS** (e.g., heavy sweating, salty meal, little water intake):\n1. Detected by **osmoreceptors in the hypothalamus**.\n2. Hypothalamus stimulates the **pituitary gland** to release **MORE ADH** into the bloodstream.\n3. ADH travels via blood to the kidneys and **increases the permeability of the walls of the collecting ducts (and DCT) to water**.\n4. **A larger proportion of water is reabsorbed** from the filtrate into the blood by **osmosis**.\n5. Result: **Smaller volume of more concentrated (hypertonic) urine** is produced; blood water potential **rises back to normal**.",
              zh: "**血液水勢下降時（如劇烈出汗、進食過鹹、缺水）**：下丘腦滲透壓感受器偵測 → 促使**垂體**釋放**較多 ADH** → 增加**集尿管壁對水的透性** → 藉滲透**重吸收較高比例水分** → 排出**少量、較濃尿液**，血液水勢回升正常。"
            },
            {
              en: "**When Blood Water Potential RISES** (e.g., drinking a large volume of pure water):\n1. Detected by osmoreceptors in hypothalamus → **pituitary gland releases LESS ADH**.\n2. Walls of **collecting ducts become LESS permeable to water**.\n3. **A smaller proportion of water is reabsorbed** by osmosis.\n4. Result: **Larger volume of dilute (hypotonic) urine** is produced; blood water potential **falls back to normal**.",
              zh: "**血液水勢上升時（如大量飲水）**：下丘腦偵測 → 垂體釋放**較少 ADH** → 集尿管對水**透性下降** → 重吸收較少水分 → 排出**大量、較稀尿液**，水勢回降正常。"
            },
            {
              en: "**Effect of Alcohol**: Alcohol **inhibits ADH secretion** → collecting ducts stay less permeable to water → copious dilute urine → **dehydration**!",
              zh: "**酒精影響**：酒精**抑制 ADH 分泌** → 集尿管透水性低 → 排出大量稀尿致脫水。"
            }
          ]
        }
      ]
    },
    {
      id: "e1-ch2",
      code: "E1.2",
      title: { en: "Regulation of Body Temperature (Thermoregulation)", zh: "體溫的調節" },
      topics: [
        {
          id: "e1-2-1",
          code: "E1.2.1",
          highYield: true,
          title: { en: "Skin Structure, Hypothalamus Thermoregulatory Centre & Cold vs Hot Responses", zh: "皮膚結構、下丘腦體溫調節中樞及寒冷／炎熱反應" },
          summary: {
            en: "Humans are **endotherms (homoiotherms)** maintaining a constant core body temperature (~37°C) so **enzymes** operate at optimal efficiency regardless of external ambient temperature.",
            zh: "人類屬**恆溫動物**，透過體溫調節維持體核溫度約 37°C，確保體內**酶**在環境溫度變化時仍維持高活性。"
          },
          points: [
            {
              en: "**Detection**: **Thermoreceptors in the skin** detect external temperature changes; **thermoreceptors in the hypothalamus** (thermoregulatory centre) detect temperature changes of the **blood** flowing through the brain. Hypothalamus coordinates nervous & hormonal effectors.",
              zh: "**偵測機制**：**皮膚溫度感受器**偵測外界溫差；**下丘腦體溫調節中樞**直接偵測流經腦部**血液的溫度**並協調神經及激素反應。"
            },
            {
              en: "**Skin Adaptations**: **Epidermis** (outer dead cornified layer waterproof & protective; Malpighian layer with melanin); **Dermis** (sweat glands, **arterioles & shunt vessels**, blood capillaries, hair follicles + **erector muscles**, thermoreceptors); **Subcutaneous fat** (**good thermal insulator** reducing heat loss by conduction + energy reserve).",
              zh: "**皮膚結構**：表皮、真皮（汗腺、**小動脈與分流血管**、毛囊與**豎毛肌**、溫度感受器）、**皮下脂肪**（良好隔熱層減低傳導散熱）。"
            }
          ],
          table: {
            headers: [
              { en: "Mechanism / Effector", zh: "機制／效應器" },
              { en: "In COLD Conditions (Heat Gain ↑, Heat Loss ↓)", zh: "寒冷環境（產熱↑、散熱↓）" },
              { en: "In HOT Conditions (Heat Loss ↑, Heat Gain ↓)", zh: "炎熱環境（散熱↑、產熱↓）" }
            ],
            rows: [
              [
                { en: "**Skin arterioles & Shunt vessels**", zh: "**皮膚小動脈與分流血管**" },
                { en: "**Vasoconstriction** of arterioles supplying skin capillaries (shunt vessels dilate) → **less blood flows near skin surface** → **less heat lost** by conduction, convection & radiation", zh: "表層小動脈**血管收縮**（分流血管舒張）→ 較少血流經皮膚表面 → **減少**傳導、對流、輻射散熱" },
                { en: "**Vasodilation** of arterioles supplying skin capillaries (shunt vessels constrict) → **more blood flows near skin surface** → **more heat lost** by conduction, convection & radiation", zh: "表層小動脈**血管舒張**（分流血管收縮）→ 更多血流經皮膚表面 → **增加**散熱" }
              ],
              [
                { en: "**Sweat glands**", zh: "**汗腺**" },
                { en: "Become **less active** → minimal sweat → less heat loss by evaporation", zh: "活動**減少** → 少排汗 → 減蒸發散熱" },
                { en: "Secrete **more sweat** → **evaporation of sweat absorbs latent heat of vaporization** from skin → cools body *(less effective at high humidity!)*", zh: "分泌**更多汗液** → **汗液蒸發吸收汽化潛熱**降溫（高濕度時效力大減！）" }
              ],
              [
                { en: "**Skeletal muscles & Metabolic rate**", zh: "**骨骼肌與代謝率**" },
                { en: "**Shivering** (involuntary rapid contractions) + higher **adrenaline / thyroxine** → higher **respiration rate** → **more heat generated**", zh: "**顫抖**（不隨意快速收縮）＋ 腎上腺素／甲狀腺素增加 → 呼吸產熱**增加**" },
                { en: "No shivering; **metabolic rate decreases** → less heat generated", zh: "停止顫抖；**代謝率降低**減少產熱" }
              ],
              [
                { en: "**Hair erector muscles**", zh: "**豎毛肌**" },
                { en: "**Contract** → hairs stand upright → traps thicker layer of **still air** (good insulator; effective in furry mammals, minor in humans)", zh: "**收縮** → 毛髮豎起困住較厚**靜止空氣**隔熱（毛髮濃密動物較顯著）" },
                { en: "**Relax** → hairs lie flat → thin air layer → easier heat loss", zh: "**舒張** → 毛髮平伏利散熱" }
              ]
            ]
          },
          trap: {
            en: "NEVER say 'capillaries move closer to the skin surface' or 'capillaries constrict/dilate'! Blood vessels do NOT move, and capillaries lack smooth muscle! Always write: **'arterioles supplying superficial skin capillaries undergo vasodilation / vasoconstriction'**!",
            zh: "切勿寫「微血管移近皮膚表面」或「微血管收縮／舒張」！血管不會移動且微血管無平滑肌，必須寫**「供應皮膚表層微血管的小動脈進行血管舒張／收縮」**！"
          }
        }
      ]
    },
    {
      id: "e1-ch3",
      code: "E1.3",
      title: { en: "Regulation of Gas Content in Blood & Cardiac Output", zh: "血液氣體含量與心輸出量的調節" },
      topics: [
        {
          id: "e1-3-1",
          code: "E1.3.1",
          highYield: true,
          title: { en: "Control of Breathing Rate/Depth, Cardiac Cycle & Exercise Adjustments", zh: "呼吸速率與深度控制、心動周期與運動調節" },
          summary: {
            en: "During exercise, elevated blood **CO2** (lowering blood **pH**) is the primary chemical stimulus driving faster, deeper breathing and increased **cardiac output** (`CO = Heart Rate × Stroke Volume`).",
            zh: "運動時血液 **CO2 上升**（致血液 **pH 下降**）是主要化學刺激，驅動呼吸加快加深及**心輸出量**（心率 × 每搏輸出量）上升。"
          },
          eq: "Cardiac Output (CO) = Heart Rate (beats/min) × Stroke Volume (cm³/beat)",
          points: [
            {
              en: "**Control of Breathing (Exact Chemoreceptor Pathway)**:\n1. Vigorous exercise → skeletal muscles respire faster → **more CO2** released into blood → CO2 reacts with water forming carbonic acid → **blood pH drops**.\n2. Detected by **central chemoreceptors in the medulla oblongata** and **peripheral chemoreceptors in carotid bodies & aortic bodies**.\n3. Impulses sent to **respiratory centre in medulla oblongata** → sends **more frequent nerve impulses** to **intercostal muscles and diaphragm**.\n4. Muscles contract **faster and more forcefully** → **higher breathing rate and greater breathing depth (larger tidal volume)** → removes excess CO2 faster & takes in more O2 → blood pH returns to normal.\n*(Stretch receptors in lungs prevent over-inflation by inhibiting inspiratory centre!)*",
              zh: "**呼吸控制完整路徑**：劇烈運動 → 肌肉釋放更多 **CO2** → 血液 **pH 下降** → 由**延腦中央化學感受器**及**頸動脈體／主動脈體周邊化學感受器**偵測 → **延腦呼吸中樞**發出較頻密神經脈衝往肋間肌與橫膈膜 → 肌肉收縮加快加大 → **呼吸速率與深度均上升**以加速排 CO2 及吸 O2。"
            },
            {
              en: "**Intrinsic Heartbeat & Pacemaker (Myogenic Control)**: Cardiac muscle contracts rhythmically without external nerves (**myogenic**). Impulse sequence: **Sinoatrial (SA) node (pacemaker)** in right atrium wall generates electrical wave → spreads across **both atria** → **atrial systole** → reaches **Atrioventricular (AV) node** (brief delay allows ventricles to fill completely!) → travels down **Bundle of His & Purkinje fibres** to apex & up ventricular walls → **ventricular systole** from bottom upwards (forces blood cleanly into aorta & pulmonary artery!).",
              zh: "**心搏起搏與傳導（肌源性）**：右心房**竇房結（SA node，起搏點）**發出電訊號 → 傳遍兩心房引致**心房收縮** → 抵**房室結（AV node）**（短暫延遲讓心室充分充血）→ 沿希氏束及**浦肯野纖維**由心尖向上傳遍心室壁引致**心室收縮**。"
            },
            {
              en: "**Autonomic Control of Heart Rate & Stroke Volume**: **Cardiovascular centre in medulla oblongata** regulates SA node via **autonomic nervous system**:\n• **Sympathetic nerve** (and **adrenaline**): **Increases heart rate** (faster SA node firing) AND **increases stroke volume** (stronger ventricular contraction) → **cardiac output ↑**.\n• **Parasympathetic nerve (vagus nerve)**: **Decreases heart rate** back to resting level.\n• During exercise: **Vasodilation** of arterioles to skeletal muscles + **vasoconstriction** of arterioles to gut/kidneys redirects blood to working muscles!",
              zh: "**自主神經調節心輸出量**：延腦心血管中樞透過**交感神經**（及腎上腺素）加快心率並增強心肌收縮力提升**每搏輸出量**；**副交感神經（迷走神經）**減慢心率回穩。運動時骨骼肌小動脈舒張、消化道小動脈收縮以重新分配血流。"
            }
          ]
        }
      ]
    },
    {
      id: "e1-ch4",
      code: "E1.4",
      title: { en: "Hormonal Control of Human Reproductive Cycle", zh: "人類生殖周期的激素控制" },
      topics: [
        {
          id: "e1-4-1",
          code: "E1.4.1",
          highYield: true,
          title: { en: "FSH, LH, Oestrogen & Progesterone Feedback Loops in Menstrual Cycle & Pregnancy", zh: "FSH、LH、雌激素與孕酮在月經周期及懷孕中的反饋調節" },
          summary: {
            en: "The 28-day **menstrual cycle** is precisely orchestrated by feedback interactions between **anterior pituitary hormones (FSH, LH)** and **ovarian hormones (oestrogen, progesterone)**.",
            zh: "28 天**月經周期**由**垂體前葉激素（FSH、LH）**與**卵巢激素（雌激素、孕酮）**之間的負／正反饋精確協調。"
          },
          diagramIds: ["diag-menstrual"],
          points: [
            {
              en: "**The Four Key Hormones & Functions**:\n• **FSH (Follicle-Stimulating Hormone)** (*Pituitary*): Stimulates **development & maturation of ovarian follicle** and stimulates follicle cells to secrete **oestrogen**.\n• **Oestrogen** (*Developing follicle & corpus luteum*): Repairs & **thickens uterine lining**; at **low level** exerts **negative feedback** inhibiting FSH/LH; at **high peak level (~Day 12–13)** exerts **POSITIVE feedback** stimulating a huge **LH surge**!\n• **LH (Luteinizing Hormone)** (*Pituitary*): **LH surge triggers ovulation (Day 14)** (rupture of mature Graafian follicle releasing secondary oocyte) AND stimulates remaining ruptured follicle to develop into the **corpus luteum (yellow body)**.\n• **Progesterone** (*Corpus luteum & later placenta*): Maintains & **further thickens/vascularizes uterine lining** (secretory phase ready for implantation); exerts **negative feedback** inhibiting **FSH & LH** (prevents new follicles developing & prevents further ovulation during luteal phase / pregnancy!).",
              zh: "**四大激素與反饋機制（E1 必考圖表！）**：\n• **FSH**（垂體）：促進**卵泡發育成熟**及分泌雌激素。\n• **雌激素**（卵泡）：修復及增厚**子宮內膜**；低水平時負反饋抑制 FSH/LH，**約第 12–13 天達高峰時轉為正反饋**觸發 **LH 急升**！\n• **LH**（垂體）：**LH 峰值觸發第 14 天排卵**，並促使破裂卵泡轉化為**黃體**。\n• **孕酮**（黃體／胎盤）：進一步增厚並維持富血管的子宮內膜，並**負反饋抑制 FSH 與 LH**（防止新卵泡發育與再次排卵）。"
            },
            {
              en: "**If NO Fertilization Occurs (Days 22–28)**: Low LH causes **corpus luteum to degenerate** → **progesterone & oestrogen levels drop sharply** → uterine lining can no longer be maintained & breaks down (**menstruation**, Days 1–5) → negative feedback on pituitary lifted → **FSH rises again** to start next cycle!",
              zh: "**若未受精**：低 LH 致**黃體退化** → 孕酮及雌激素急降 → 子宮內膜脫落（**行經**）→ 解除對垂體抑制 → **FSH 回升**展開新周期。"
            },
            {
              en: "**If Fertilization & Implantation Occur**: Developing embryo secretes **hCG (human chorionic gonadotrophin)** (detected in pregnancy test kits!) → **maintains corpus luteum** so it continues secreting progesterone & oestrogen for first ~3 months → thereafter the **placenta** takes over secreting **progesterone & oestrogen** throughout pregnancy (maintaining uterine lining & preventing ovulation/menstruation).",
              zh: "**若受精植入**：胚胎分泌 **hCG**（驗孕棒檢測目標）維持**黃體**繼續分泌孕酮；約 3 個月後由**胎盤**接手分泌孕酮與雌激素維持懷孕。"
            },
            {
              en: "**Applications**: **Combined oral contraceptive pills** (synthetic oestrogen + progesterone) inhibit FSH & LH by negative feedback → **no follicle maturation & no ovulation**. **Fertility drugs** (FSH / clomiphene) stimulate multiple follicle development (risk of multiple births) & are used in **IVF**.",
              zh: "**醫學應用**：**混合避孕丸**（人工雌激素＋孕酮）藉負反饋抑制 FSH/LH 阻止排卵；**助孕藥物**含 FSH 促排卵（可致多胞胎）用於試管嬰兒（IVF）。"
            }
          ]
        }
      ]
    }
  ]
});
