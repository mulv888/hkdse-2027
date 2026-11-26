/* ==========================================================================
   Unit 3 (Compulsory — Book 2/3, Ch 11–18):
   Cell Division, Reproduction, Growth, Sensing, Coordination, Movement & Homeostasis
   ========================================================================== */
window.BIO_UNITS.push({
  id: "u3",
  paper: "compulsory",
  code: "Unit 3",
  bookRef: "Book 2/3 · Ch 11–18",
  color: "#2563eb",
  title: { en: "Unit 3: Cell Division, Reproduction & Coordination", zh: "單元三：細胞分裂、生殖、生長與協調" },
  subtitle: {
    en: "Mitosis & Meiosis · Plant & Human Reproduction · Growth · Eye, Ear & Tropisms · Nervous/Hormonal Control · Movement · Blood Glucose Homeostasis",
    zh: "有絲與減數分裂 · 植物與人類生殖 · 生長發育 · 眼耳與向性 · 神經與激素協調 · 人體運動 · 血糖體內平衡"
  },
  chapters: [
    {
      id: "u3-ch11",
      code: "Ch 11",
      title: { en: "Cell Cycle and Division", zh: "細胞周期與分裂" },
      topics: [
        {
          id: "u3-11-1",
          code: "11.1",
          highYield: true,
          title: { en: "Cell Cycle, Mitosis, Meiosis & Sources of Genetic Variation", zh: "細胞周期、有絲分裂、減數分裂與遺傳變異來源" },
          summary: {
            en: "The **cell cycle** comprises **interphase** (growth & **DNA replication**) followed by **nuclear division** (mitosis or meiosis) and **cytokinesis**. **Mitosis** maintains diploid number (2n) for growth/repair; **meiosis** halves chromosome number (2n → n) to produce genetically varied **gametes**.",
            zh: "**細胞周期**包括**間期**（生長與 **DNA 複製**）、**細胞核分裂**及**細胞質分裂**。**有絲分裂**維持二倍體（2n）供生長修復；**減數分裂**將染色體減半（2n→n）並產生具遺傳變異的**配子**。"
          },
          diagramIds: ["diag-cell-division"],
          points: [
            {
              en: "**Interphase**: Longest stage (~90% of cycle). Cell grows, synthesizes proteins & organelles, and **DNA replicates** so each chromosome becomes two identical **sister chromatids** joined at a **centromere** (still uncoiled as chromatin).",
              zh: "**間期**：佔周期約九成。細胞生長、合成蛋白質及細胞器，並進行 **DNA 複製**，每條染色體形成兩條連於**著絲點**的相同**姊妹染色單體**。"
            },
            {
              en: "**Stages of Mitosis (PMAT)**:\n• **Prophase**: Chromatin condenses into visible **chromosomes** (each 2 sister chromatids); nuclear membrane breaks down; spindle fibres form.\n• **Metaphase**: Chromosomes line up singly along the **equator** of the cell; spindle fibres attach to centromeres.\n• **Anaphase**: Centromeres split; **sister chromatids separate** and are pulled to **opposite poles** by shortening spindle fibres.\n• **Telophase**: Chromosomes uncoil back to chromatin; new nuclear membranes form around each set.\n• **Cytokinesis**: Animal cell — cell membrane **constriction (cleavage furrow)** pinches inward; Plant cell — **cell plate** forms at equator and develops into new cell wall.",
              zh: "**有絲分裂四期（PMAT）**：**前期**（染色質凝縮成染色體、核膜瓦解、紡錘絲形成）→ **中期**（染色體單行排列於**赤道面**）→ **後期**（著絲點分裂，**姊妹染色單體分離**移向兩極）→ **末期**（核膜重建）→ **細胞質分裂**（動物細胞膜內陷縊縮；植物形成**細胞板**）。"
            },
            {
              en: "**Meiosis (Two Divisions: Meiosis I & Meiosis II)**:\n• **Prophase I**: **Homologous chromosomes** pair up (**synapsis** → bivalents) and **crossing over** occurs at chiasmata → **exchange of genetic material between non-sister chromatids** (new allele combinations).\n• **Metaphase I**: Homologous pairs line up along the equator in **independent assortment** (random orientation).\n• **Anaphase I**: **Homologous chromosomes separate** to opposite poles (centromeres do NOT split; chromosome number halved from 2n → n!).\n• **Meiosis II** (like mitosis): **Sister chromatids separate** in Anaphase II → produces **4 genetically different haploid (n) daughter cells**.",
              zh: "**減數分裂（兩次分裂）**：**前期 I** **同源染色體配對**並發生**互換（crossing over）**交換非姊妹染色單體遺傳物質 → **中期 I** 同源染色體隨機排列於赤道面（**獨立分配**）→ **後期 I** **同源染色體分離**（染色體數減半 2n → n）→ **第二次分裂**姊妹染色單體分離，終得 **4 個遺傳不同的單倍體（n）子細胞**。"
            },
            {
              en: "**Three Sources of Genetic Variation in Sexual Reproduction**: (1) **Crossing over** in Prophase I; (2) **Independent assortment** of homologous chromosomes in Metaphase I; (3) **Random fertilization** of gametes.",
              zh: "**有性生殖三大遺傳變異來源**：(1) 前期 I **互換**；(2) 中期 I 同源染色體**獨立分配**；(3) 配子**隨機受精**。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Mitosis", zh: "有絲分裂" },
              { en: "Meiosis", zh: "減數分裂" }
            ],
            rows: [
              [
                { en: "**Number of divisions & daughter cells**", zh: "**分裂次數與子細胞數**" },
                { en: "1 nuclear division → **2** daughter cells", zh: "1 次核分裂 → **2** 個子細胞" },
                { en: "2 nuclear divisions → **4** daughter cells", zh: "2 次核分裂 → **4** 個子細胞" }
              ],
              [
                { en: "**Chromosome number**", zh: "**染色體數目**" },
                { en: "Maintained (**diploid, 2n**, same as parent)", zh: "維持不變（**二倍體 2n**）" },
                { en: "Halved (**haploid, n**, half of parent)", zh: "減半（**單倍體 n**）" }
              ],
              [
                { en: "**Pairing & Crossing over**", zh: "**配對與互換**" },
                { en: "No pairing of homologous chromosomes; no crossing over", zh: "無同源染色體配對及互換" },
                { en: "**Synapsis & crossing over** occur in Prophase I; **independent assortment** in Metaphase I", zh: "前期 I 發生**配對與互換**；中期 I 發生**獨立分配**" }
              ],
              [
                { en: "**Genetic makeup & Role**", zh: "**遺傳組成與意義**" },
                { en: "**Genetically identical** to parent; for **growth, repair, asexual reproduction**", zh: "與親代**遺傳相同**；用於**生長、修復、無性生殖**" },
                { en: "**Genetically different**; produces **gametes** (restores 2n on fertilization & creates genetic variation for evolution)", zh: "**遺傳不同**；產生**配子**，維持世代染色體數恆定並產生變異" }
              ]
            ]
          }
        }
      ]
    },
    {
      id: "u3-ch12",
      code: "Ch 12",
      title: { en: "Reproduction in Flowering Plants", zh: "有花植物的生殖" },
      topics: [
        {
          id: "u3-12-1",
          code: "12.1",
          highYield: true,
          title: { en: "Asexual vs Sexual Reproduction, Pollination, Fertilization & Seed Dispersal", zh: "無性與有性生殖、傳粉、受精與種子散播" },
          summary: {
            en: "Flowering plants reproduce asexually via **vegetative propagation** (fast, genetically identical clones) and sexually via **flowers** (pollination → fertilization → fruit & seed development → dispersal).",
            zh: "有花植物可藉**營養繁殖**行無性生殖（快速且遺傳一致），亦可藉**花朵**行有性生殖（傳粉 → 受精 → 形成果實與種子 → 散播）。"
          },
          points: [
            {
              en: "**Asexual Reproduction (Vegetative Propagation)**: Uses underground **storage organs** — **stem tubers** (potato), **bulbs** (onion — fleshy scale leaves), **corms** (gladiolus — swollen stem base), **rhizomes** (ginger — horizontal underground stem). **Pros**: Only 1 parent needed, rapid colonization, preserves desirable traits in stable environment. **Cons**: **No genetic variation** (susceptible to same disease/environmental change), **overcrowding** & competition near parent.",
              zh: "**營養繁殖**：塊莖（馬鈴薯）、鱗莖（洋蔥）、球莖（劍蘭）、根莖（薑）。優點：單親即可、繁殖快、保留優良性狀；缺點：**無遺傳變異**（易受同病害／環境突變淘汰）、親代附近**過度擁擠**競爭資源。"
            },
            {
              en: "**Insect-pollinated vs Wind-pollinated Flowers**:\n• **Insect-pollinated**: Large, brightly coloured petals, scented, **nectaries**; small amount of **large, heavy, sticky/spiky pollen**; anthers & sticky stigma enclosed **inside** flower.\n• **Wind-pollinated**: Small/dull or no petals, no scent/nectar; **huge amount of small, light, smooth, dry pollen**; long filaments with **anthers hanging outside**; large **feathery stigmas hanging outside** to catch airborne pollen.",
              zh: "**蟲媒花 vs 風媒花**：蟲媒花瓣大鮮豔具香氣與蜜腺、花粉少而重黏刺、雄蕊柱頭藏花內；風媒花細小無蜜腺、花粉極多輕滑乾、花藥及**羽毛狀柱頭**伸出花外。"
            },
            {
              en: "**Self-pollination vs Cross-pollination**: Cross-pollination (between different plants of same species) increases **genetic variation** (better adaptation to changing environments) but depends on external agents (less certain). Self-pollination is more assured & preserves good traits but lowers genetic diversity.",
              zh: "**自花 vs 異花傳粉**：異花傳粉增**遺傳變異**（利於適應環境變化），但依賴傳粉媒介成功率較低。"
            },
            {
              en: "**Fertilization & Fate of Floral Parts**: Pollen grain lands on stigma → absorbs sugary solution → grows a **pollen tube** down style (digesting path with enzymes) through **micropyle** into **ovule** → **male gamete** fuses with **female gamete (ovum)** → diploid **zygote**. Post-fertilization: **zygote → embryo**; **ovule → seed**; **integuments → seed coat (testa)**; **ovary → fruit**; **ovary wall → fruit wall (pericarp)**; petals/stamens/stigma wither and fall off.",
              zh: "**受精與花部去向**：花粉落柱頭萌發**花粉管**經花柱及**珠孔**進入**胚珠**，雄配子與卵融合形成合子。受精後：**合子→胚**、**胚珠→種子**、**珠被→種皮**、**子房→果實**、**子房壁→果皮**。"
            },
            {
              en: "**Significance of Seed Dispersal**: (1) **Reduces overcrowding & intraspecific competition** for light, water, minerals & space; (2) Enables **colonization of new habitats**; (3) Reduces spread of plant diseases.",
              zh: "**種子散播意義**：減少**過度擁擠與種內競爭**（爭光、水、礦物質）、開拓新棲息地、減低病害傳播。"
            }
          ]
        }
      ]
    },
    {
      id: "u3-ch13",
      code: "Ch 13",
      title: { en: "Reproduction in Humans", zh: "人類的生殖" },
      topics: [
        {
          id: "u3-13-1",
          code: "13.1",
          highYield: true,
          title: { en: "Gametes, Fertilization, Placenta Adaptations, Birth & Contraception", zh: "配子、受精、胎盤適應特徵、分娩與避孕方法" },
          summary: {
            en: "Human fertilization occurs in the **oviduct**; the embryo implants in the thickened **uterine lining** and exchanges substances with maternal blood via the **placenta** (with NO mixing of maternal and foetal blood!).",
            zh: "人類受精在**輸卵管**進行；胚胎植入增厚的**子宮內膜**，透過**胎盤**與母體進行物質交換（**母體與胎兒血液不會混合**）。"
          },
          points: [
            {
              en: "**Sperm vs Ovum**: **Sperm** — tiny, motile (flagellum/tail), millions produced continuously, head has haploid nucleus + enzymes to penetrate egg jelly, middle piece packed with **mitochondria** for ATP, little food reserve. **Ovum** — large, spherical, non-motile (moved by cilia & peristalsis in oviduct), usually 1 released/month, abundant **yolk/food reserve** for early embryonic development.",
              zh: "**精子 vs 卵子**：精子細小具尾能游動、中段多**線粒體**供能、頂部具酶助穿入卵；卵子體積大不能自移（靠輸卵管纖毛及蠕動推動）、含豐富營養儲備供早期發育。"
            },
            {
              en: "**Fertilization & Implantation**: Occurs in upper **oviduct** (only 1 sperm nucleus fuses with ovum nucleus; ovum membrane hardens to block other sperms) → diploid **zygote** divides by **mitosis** forming a ball of cells (**embryo**) while moving to uterus → embeds into thick vascularized **uterine lining (implantation)**.",
              zh: "**受精與植入**：在**輸卵管**上段受精（受精後卵膜硬化阻其他精子進入）→ 合子行**有絲分裂**成胚胎並移入子宮**植入**增厚充血的子宮內膜。"
            },
            {
              en: "**Structure & Functions of Placenta & Umbilical Cord (High-Yield)**:\n• **Adaptations**: Numerous finger-like **villi** → **large surface area**; thin membrane separating maternal & foetal blood → **short diffusion distance**; rich capillary networks → maintain **steep concentration gradients**.\n• **Exchange**: Mother → Foetus: **O2, glucose, amino acids, minerals, vitamins, antibodies** (passive immunity!). Foetus → Mother: **CO2, urea**. (Note: **Umbilical artery** carries deoxygenated, high-urea blood FROM foetus to placenta; **umbilical vein** carries oxygenated, nutrient-rich blood TO foetus!)\n• **Why maternal & foetal blood do NOT mix**: (1) Maternal blood pressure is too high → would **burst delicate foetal capillaries**; (2) Prevents immune **agglutination** if blood groups differ; (3) Blocks many pathogens & large harmful molecules (though small molecules like nicotine, alcohol, HIV, rubella virus CAN cross!).\n• **Amniotic fluid**: Acts as **shock absorber**, allows foetal movement, maintains uniform temperature, prevents desiccation, lubricates birth canal when sac breaks.",
              zh: "**胎盤與臍帶（極高頻考點）**：絨毛增表面積、薄壁縮短擴散距離。母→胎：**氧、葡萄糖、氨基酸、抗體**；胎→母：**CO2、尿素**（**臍動脈**帶缺氧高尿素血離胎兒，**臍靜脈**帶含氧多養分血回胎兒）。**不混合原因**：防母體高血壓脹破胎兒微血管、防血型不合凝集、阻隔部分病原體。**羊水**防震、恆溫、防乾燥及分娩時潤滑產道。"
            },
            {
              en: "**Birth Control Methods**: (1) **Rhythm method** (avoid intercourse around ovulation — unreliable); (2) **Barrier** (male/female condom — ONLY method also reducing **STIs**; diaphragm); (3) **Chemical/Hormonal** (contraceptive pills — synthetic oestrogen/progesterone inhibit **FSH & LH** → **prevent ovulation**; spermicides); (4) **IUD** (prevents **implantation**); (5) **Surgical/Permanent** (**vasectomy** — cutting sperm ducts; **tubal ligation** — cutting oviducts; hormones & secondary sexual characteristics unaffected!).",
              zh: "**避孕原理**：安全期（不可靠）；阻隔法（**避孕套**唯一同時預防性病）；**避孕丸**（人工激素抑制 **FSH/LH** → **抑制排卵**）；子宮環（**阻止植入**）；絕育（輸精管／輸卵管結紮，不影響性激素分泌）。"
            }
          ]
        }
      ]
    },
    {
      id: "u3-ch14",
      code: "Ch 14",
      title: { en: "Growth and Development", zh: "生長與發育" },
      topics: [
        {
          id: "u3-14-1",
          code: "14.1",
          highYield: true,
          title: { en: "Seed Germination, Plant Growth Regions & Growth Curves", zh: "種子萌發、植物生長區與生長曲線" },
          summary: {
            en: "**Growth** is a permanent increase in size and **dry mass** resulting from **cell division (mitosis)** and **cell enlargement**; **development** involves **cell differentiation** into specialized tissues.",
            zh: "**生長**指細胞分裂與膨大引起的體積及**乾重**永久增加；**發育**涉及細胞**分化**成具特定功能的組織。"
          },
          points: [
            {
              en: "**Conditions for Seed Germination**: (1) **Water** (softens testa, activates enzymes, medium for reactions, hydrolysis of stored food, cell expansion); (2) **Warmth** (optimum temperature for enzyme activity); (3) **Oxygen** (for **aerobic respiration** releasing ATP for growth). *(Light is generally NOT required for germination until green leaves emerge!)*",
              zh: "**種子萌發三條件**：**水**（軟化種皮、激活酶、水解養分）、**適宜溫度**（利酶活性）、**氧氣**（需氧呼吸供能）。（一般**無需光照**，直至長出綠葉！）"
            },
            {
              en: "**Dry Mass Curve of Germinating Seed / Annual Plant**:\n1. **Stage 1 (Germination before green leaves)**: Dry mass **decreases** because stored food (starch/lipids) in cotyledons is oxidized in **respiration** (CO2 & H2O lost) faster than any synthesis.\n2. **Stage 2 (Green leaves unfold)**: Rate of **photosynthesis > rate of respiration** → net gain of organic matter → dry mass **increases rapidly**.\n3. **Stage 3 (Dispersal of seeds/fruits & leaf senescence)**: Dry mass **decreases** at end of life cycle.",
              zh: "**萌發種子／一年生植物乾重曲線**：階段一（出葉前）儲藏養分經**呼吸作用**消耗 → 乾重**下降**；階段二（展開綠葉）**光合速率 > 呼吸速率** → 乾重**急升**；階段三（種子散播及衰老）→ 乾重下降。"
            },
            {
              en: "**Three Growth Regions at Root/Shoot Tip (Primary Growth)**:\n1. **Region of cell division (apical meristem)**: Small, thin-walled cells with dense cytoplasm & no/small vacuoles dividing actively by **mitosis**.\n2. **Region of elongation**: Cells absorb water by **osmosis** → small vacuoles fuse into a large central vacuole → cells elongate rapidly (main cause of increase in length!).\n3. **Region of differentiation**: Cells develop thickened walls & specialized structures (e.g., root hair cells, xylem vessels, phloem).",
              zh: "**根尖／莖尖三大生長區（初生生長）**：**細胞分裂區（頂端分生組織）**行有絲分裂 → **延長區**細胞滲透吸水、液泡增大令細胞急速拉長（長度增長主因）→ **分化區**分化成根毛、木質部等特化細胞。"
            },
            {
              en: "**Measuring Growth**: **Fresh mass** (non-destructive, easy, BUT fluctuates with water content); **Dry mass** (most accurate measure of organic matter gained, BUT **kills organism** — requires large sample of genetically similar seedlings); **Height/Length** (easy, non-destructive, BUT ignores growth in other dimensions).",
              zh: "**量度生長方法**：鮮重（不殺生但受含水量波動影響）；**乾重**（最準確反映有機物淨增，但須烘乾**殺死生物**）；高度／長度（忽略橫向生長）。"
            }
          ]
        }
      ]
    },
    {
      id: "u3-ch15",
      code: "Ch 15",
      title: { en: "Detecting the Environment", zh: "感應環境" },
      topics: [
        {
          id: "u3-15-1",
          code: "15.1",
          highYield: true,
          title: { en: "Human Eye, Accommodation, Pupil Reflex, Eye Defects & Human Ear", zh: "人眼結構、調節作用、瞳孔反射、視力缺陷與人耳" },
          summary: {
            en: "Sensory organs contain specialized **receptors** that convert external stimuli into **nerve impulses** transmitted to the brain for interpretation.",
            zh: "感覺器官含特化**感受器**，把外界刺激轉化為**神經脈衝**傳至大腦產生感覺。"
          },
          points: [
            {
              en: "**Focusing & Accommodation (High-Yield Table)**: Cornea does most refraction (fixed); **lens** fine-tunes focusing:\n• **Near object**: **Ciliary muscles contract** → **suspensory ligaments slacken (become less taut)** → lens becomes **thicker (more convex)** → greater refraction of diverging light rays → sharp image on **yellow spot (fovea)**.\n• **Distant object**: **Ciliary muscles relax** → **suspensory ligaments tighten (pulled taut)** → lens pulled **thinner (less convex)** → less refraction.",
              zh: "**眼睛視覺調節（極高頻！）**：**看近物** → **睫狀肌收縮** → **懸韌帶鬆弛** → 晶體憑彈性變**厚（更凸）**折射力增強；**看遠物** → **睫狀肌舒張** → **懸韌帶拉緊** → 晶體拉**薄（較扁）**折射力減弱。"
            },
            {
              en: "**Pupil Reflex (Light Intensity Control)**:\n• **Bright light**: **Circular muscles of iris contract**, **radial muscles relax** → pupil **constricts** → reduces light entering eye (prevents damage to retina).\n• **Dim light**: **Radial muscles contract**, **circular muscles relax** → pupil **dilates** → admits more light for clear vision.",
              zh: "**瞳孔反射**：**強光** → 虹膜**環肌收縮、放射肌舒張** → 瞳孔**縮小**（防強光損視網膜）；**弱光** → **放射肌收縮、環肌舒張** → 瞳孔**放大**。"
            },
            {
              en: "**Rods vs Cones & Blind Spot**: **Rods** (high sensitivity, work in **dim light**, black & white vision, distributed across retina periphery). **Cones** (work in **bright light**, **colour vision** — red/green/blue cones — high acuity; concentrated at **yellow spot/fovea**). **Blind spot**: Where **optic nerve** exits retina; has **NO photoreceptors** → no image detected.",
              zh: "**視桿細胞 vs 視錐細胞**：視桿細胞高敏感度負責**弱光**黑白視覺；視錐細胞負責**強光**彩色（紅綠藍三類）及高清晰視覺，集中於**黃點**。**盲點**為視神經出口，**無感光細胞**。"
            },
            {
              en: "**Eye Defects**: **Short sight (myopia)** — eyeball too long or lens too thick → distant image focuses **in front of retina** → corrected by **concave (diverging) lens**. **Long sight (hypermetropia)** — eyeball too short or lens too thin → near image focuses **behind retina** → corrected by **convex (converging) lens**.",
              zh: "**視力缺陷**：**近視**（眼球過長或晶體過厚，遠物成像於視網膜**前** → **凹透鏡**發散矯正）；**遠視**（眼球過短或晶體過薄，近物成像於視網膜**後** → **凸透鏡**會聚矯正）。"
            },
            {
              en: "**Human Ear — Hearing & Balance**: Sound waves → pinna → auditory canal → **eardrum** vibrates → **3 ear bones (ossicles)** **amplify** & transmit vibrations to **oval window** → sets **perilymph/endolymph** in **cochlea** vibrating → stimulates **sensory hair cells** → nerve impulses along **auditory nerve** to auditory centre of cerebrum. **Round window** relieves excess pressure. **Eustachian tube** equalizes air pressure on both sides of eardrum. **Semicircular canals** (3 mutually perpendicular planes) detect **head movements / balance**.",
              zh: "**人耳聽覺與平衡**：聲波震動**鼓膜** → **三塊聽小骨**放大震動傳至**卵圓窗** → 引起**耳蝸**淋巴液震動刺激**感覺毛細胞** → 經聽神經傳大腦。**圓窗**釋放多餘壓力；**耳咽管**平衡鼓膜內外氣壓；**半規管**感應頭部轉動維持平衡。"
            }
          ]
        },
        {
          id: "u3-15-2",
          code: "15.2",
          highYield: true,
          title: { en: "Phototropism in Plants & Auxin Mechanism", zh: "植物的向光性與生長素機制" },
          summary: {
            en: "**Phototropism** is a directional growth response of plants to **unilateral light**, mediated by uneven distribution of the plant hormone **auxin** produced at the shoot apex.",
            zh: "**向光性**是植物對**單側光**的定向生長反應，由莖尖產生的**生長素（auxin）**不均勻分布所調控。"
          },
          points: [
            {
              en: "**Mechanism of Positive Phototropism in Shoots (Exact Exam Explanation)**: (1) **Auxin** is produced at the **shoot tip (coleoptile tip)** and diffuses downwards to the **region of elongation**; (2) Under **unilateral light**, auxin migrates **away from the illuminated side towards the shaded side**; (3) Therefore, the **shaded side has a higher auxin concentration** than the illuminated side; (4) In **shoots**, higher auxin concentration **stimulates faster cell elongation** → shaded side grows faster than illuminated side → shoot **bends towards the light** (advantage: positions leaves for maximum light absorption for photosynthesis!).",
              zh: "**莖正向光性完整機制**：莖尖產生**生長素**向下擴散至延長區；在**單側光**下，生長素移向**背光一側** → 背光側生長素濃度較高 → **高濃度促進莖細胞伸長較快** → 背光側生長快於向光側 → 莖**向光彎曲**（利葉片吸收更多陽光行光合作用）。"
            },
            {
              en: "**Shoot vs Root Sensitivity to Auxin (High-Yield Graph!)**: Roots are **much more sensitive** to auxin than shoots! The same high auxin concentration that **stimulates** shoot growth actually **inhibits** root cell elongation! Therefore, in a root under unilateral light (or horizontal gravity), higher auxin on the shaded/lower side **inhibits** growth → illuminated/upper side grows faster → root bends **away from light (negative phototropism)** / **downwards (positive geotropism)**.",
              zh: "**莖與根對生長素敏感度差異（必考圖表）**：根對生長素敏感得多——同一較高濃度**促進莖生長**但**抑制根生長**！故根在單側光下呈**負向光性**、水平放置呈**正向地性**。"
            },
            {
              en: "**Classic Experiments (Darwin, Boysen-Jensen, Went)**: Decapitating tip → no growth/bending (tip produces growth substance). Covering tip with opaque cap → grows straight up (tip detects light). **Mica plate** (impermeable) on shaded side blocks auxin transport → no bending; **agar block** (permeable) allows auxin diffusion → bends normally! **Clinostat** rotates plant continuously → uniform light/gravity exposure → grows straight (control!).",
              zh: "**經典實驗**：切尖端不長不彎；不透光帽蓋尖端則直長（尖端感光）；**雲母片**阻擋生長素擴散，**瓊脂塊**容許通過；**迴轉器（clinostat）**作對照消除單向刺激。"
            }
          ]
        }
      ]
    },
    {
      id: "u3-ch16",
      code: "Ch 16",
      title: { en: "Coordination in Humans", zh: "人體的協調" },
      topics: [
        {
          id: "u3-16-1",
          code: "16.1",
          highYield: true,
          title: { en: "Neurones, Synapse, Brain, Reflex Arc & Nervous vs Hormonal Coordination", zh: "神經元、突觸、腦部、反射弧及神經與激素協調比較" },
          summary: {
            en: "Human coordination relies on two integrated systems: the **nervous system** (fast, electrical + chemical, localized) and the **endocrine system** (slower, blood-borne hormones, widespread & longer-lasting).",
            zh: "人體協調依賴兩大系統：**神經系統**（快速、電脈衝＋神經遞質、局部短效）及**內分泌系統**（較慢、血液運激素、廣泛長效）。"
          },
          diagramIds: ["diag-reflex-synapse"],
          points: [
            {
              en: "**Three Types of Neurones**: (1) **Sensory neurone** (receptor → CNS; cell body in **dorsal root ganglion**); (2) **Interneurone** (within CNS, connects sensory to motor); (3) **Motor neurone** (CNS → effector [muscle/gland]; cell body in grey matter of CNS). **Myelin sheath** insulates axon & greatly **speeds up nerve impulse transmission**.",
              zh: "**三類神經元**：**感覺神經元**（感受器→中樞，細胞體在背根神經節）、**中間神經元**（中樞內）、**運動神經元**（中樞→效應器）。**髓鞘**具絕緣作用並大幅加快神經脈衝傳導。"
            },
            {
              en: "**Transmission across a Synapse (Exact Step-by-Step Marking Points)**: (1) Nerve impulse arrives at **synaptic knob** of axon ending; (2) Stimulates **synaptic vesicles** to move to & fuse with presynaptic membrane, releasing **neurotransmitters** into the **synaptic cleft**; (3) Neurotransmitters **diffuse** across the synaptic cleft; (4) Bind to **specific receptors** on the **dendron/cell body** of the next neurone → triggers a **new nerve impulse**; (5) Neurotransmitters are rapidly broken down by enzymes/reabsorbed. **Significance**: Ensures **unidirectional transmission** (vesicles only on presynaptic side; receptors only on postsynaptic side) & allows integration from multiple neurones.",
              zh: "**突觸傳遞五步評分重點**：(1) 神經脈衝抵軸突末梢**突觸小體**；(2) 促使**突觸小泡**釋放**神經遞質**至**突觸間隙**；(3) 經**擴散**橫越間隙；(4) 與下一神經元樹突上的**特定受體**結合引發新神經脈衝；(5) 隨即被分解或重吸。意義：確保脈衝**單向傳遞**。"
            },
            {
              en: "**Major Brain Regions**:\n• **Cerebrum**: Highly folded cerebral cortex (large surface area) — **sensory areas** (interpret impulses), **motor areas** (initiate voluntary actions), **association areas** (memory, intelligence, reasoning, learning).\n• **Cerebellum**: Coordinates **muscular movements** & maintains **body balance & posture**.\n• **Medulla oblongata**: Controls **involuntary vital reflex actions** (breathing rate, heart rate, blood pressure, swallowing, coughing, salivation).",
              zh: "**腦部三大區域**：**大腦**（高度摺疊大腦皮層：感覺區、運動區、聯絡區負責記憶思維與隨意動作）；**小腦**（協調肌肉運動與維持**平衡姿勢**）；**延腦**（控制心跳、呼吸、血壓、吞嚥等**不隨意生命反射**）。"
            },
            {
              en: "**Reflex Arc & Withdrawal / Knee-Jerk Reflex**: Pathway: `Receptor → Sensory neurone (via dorsal root) → Interneurone (in spinal cord grey matter; absent in knee-jerk!) → Motor neurone (via ventral root) → Effector`. Reflex actions are **inborn, automatic, fast, stereotyped**, and **protective** (do NOT require conscious thought by cerebrum, though an ascending impulse also informs cerebrum so you feel pain afterwards).",
              zh: "**反射弧**：感受器 → 感覺神經元（經背根）→ 中間神經元（脊髓灰質；膝跳反射無中間神經元！）→ 運動神經元（經腹根）→ 效應器。反射動作**天生、快速、不經大腦意識**，具保護作用。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Nervous Coordination", zh: "神經協調" },
              { en: "Hormonal (Endocrine) Coordination", zh: "激素（內分泌）協調" }
            ],
            rows: [
              [
                { en: "**Nature of message**", zh: "**信息性質**" },
                { en: "Electrical (nerve impulses) + chemical (neurotransmitters at synapses)", zh: "電信息（神經脈衝）＋突觸化學遞質" },
                { en: "Chemical (**hormones** secreted by ductless endocrine glands)", zh: "化學信息（無管內分泌腺分泌之**激素**）" }
              ],
              [
                { en: "**Route & Speed**", zh: "**傳遞途徑與速度**" },
                { en: "Along **neurones**; **very fast**", zh: "沿**神經元**；**極快**" },
                { en: "Transported in **bloodstream**; **slower**", zh: "由**血液**運輸；**較慢**" }
              ],
              [
                { en: "**Target area & Duration**", zh: "**作用範圍與時效**" },
                { en: "**Localized** (specific muscle/gland); **short-lived**", zh: "**局部**特定效應器；**短暫**" },
                { en: "**Widespread** (all target organs with specific receptors); **longer-lasting**", zh: "**廣泛**（具特定受體之靶器官）；**持久**" }
              ]
            ]
          }
        }
      ]
    },
    {
      id: "u3-ch17",
      code: "Ch 17",
      title: { en: "Movement in Humans", zh: "人體的運動" },
      topics: [
        {
          id: "u3-17-1",
          code: "17.1",
          highYield: false,
          title: { en: "Skeleton, Synovial Joints & Antagonistic Muscles", zh: "骨骼、滑液關節與拮抗肌" },
          summary: {
            en: "Human movement results from **skeletal muscles** pulling on **bones** acting as levers across **movable joints**; muscles only **pull** (contract) and work in **antagonistic pairs**.",
            zh: "人體運動靠**骨骼肌**收縮牽拉作為槓桿的**骨骼**繞**關節**轉動；肌肉只能拉不能推，故成對作**拮抗肌**運作。"
          },
          points: [
            {
              en: "**Functions of Skeleton**: Support & body shape, protection of vital organs (skull → brain; rib cage → heart/lungs; vertebral column → spinal cord), movement (attachment surface for muscles), production of blood cells (red bone marrow), mineral storage (Ca2+, PO43-).",
              zh: "**骨骼功能**：支持、保護重要器官、肌肉附著助運動、紅骨髓造血、儲存鈣磷礦物質。"
            },
            {
              en: "**Synovial Joint Structure**: **Cartilage** (smooth, elastic — reduces friction & absorbs shock); **Synovial membrane** secretes **synovial fluid** (lubricates joint & nourishes cartilage); **Ligaments** (tough, **slightly elastic** — hold bone to bone, prevent dislocation while allowing movement); **Tendons** (tough, **inelastic** — attach **muscle to bone** & transmit pulling force efficiently without stretching!).",
              zh: "**滑液關節結構**：**軟骨**（減摩擦及防震）；**滑液**（潤滑並滋養軟骨）；**韌帶**（**微具彈性**，連接骨與骨防脫臼）；**肌腱**（**無彈性**，連接肌肉與骨骼有效傳遞拉力）。"
            },
            {
              en: "**Hinge Joint vs Ball-and-Socket Joint**: **Hinge joint** (elbow, knee) permits movement in **one plane only** (~180°). **Ball-and-socket joint** (shoulder, hip) permits movement in **all planes** (rotation).",
              zh: "**鉸鏈關節 vs 球窩關節**：鉸鏈關節（肘、膝）只容許**單一平面**活動；球窩關節（肩、髖）容許**多平面**旋轉活動。"
            },
            {
              en: "**Antagonistic Muscles (Elbow)**: Bending arm (**flexion**): **biceps (flexor) contracts**, **triceps (extensor) relaxes** → forearm pulled up. Straightening arm (**extension**): **triceps contracts**, **biceps relaxes** → forearm pulled down.",
              zh: "**拮抗肌（手臂）**：屈臂時**二頭肌（屈肌）收縮、三頭肌（伸肌）舒張**；伸臂時**三頭肌收縮、二頭肌舒張**。"
            }
          ]
        }
      ]
    },
    {
      id: "u3-ch18",
      code: "Ch 18",
      title: { en: "Homeostasis", zh: "體內平衡" },
      topics: [
        {
          id: "u3-18-1",
          code: "18.1",
          highYield: true,
          title: { en: "Negative Feedback & Regulation of Blood Glucose Level", zh: "負反饋機制與血糖水平調節" },
          summary: {
            en: "**Homeostasis** is the maintenance of a **relatively constant internal environment** (blood glucose, water content, body temperature, gas content) via **negative feedback**, keeping optimal conditions for **enzyme activity** and cell function.",
            zh: "**體內平衡**指透過**負反饋機制**維持**相對恆定的體內環境**（血糖、水分、體溫、氣體），以確保**酶促反應**及細胞正常運作。"
          },
          diagramIds: ["diag-glucose-feedback"],
          points: [
            {
              en: "**Negative Feedback Mechanism**: A change away from the normal set point is detected by **receptors** → **control centre** triggers **effectors** to produce a response that **reverses/counteracts the initial change**, bringing the level back to normal (once normal, the corrective response stops).",
              zh: "**負反饋機制**：感受器偵測偏離正常值的變化 → 控制中樞指令效應器產生**抵銷原變化**的反應，使指標回穩正常。"
            },
            {
              en: "**When Blood Glucose RISES (e.g. after a carbohydrate-rich meal)**: Detected by **pancreas** → secretes **more insulin** (and less glucagon) into bloodstream → carried to **liver & skeletal muscles** → stimulates: (1) **increased uptake & oxidation (respiration)** of glucose by body cells; (2) **conversion of excess glucose into insoluble glycogen** stored in liver & muscle cells → blood glucose **falls back to normal**.",
              zh: "**血糖上升時（如餐後）**：**胰臟**偵測並分泌**較多胰島素**（較少高血糖素）→ 經血液至肝及肌肉 → 促進細胞攝取並氧化葡萄糖，以及把過剩葡萄糖**轉化為糖原儲存** → 血糖回降正常。"
            },
            {
              en: "**When Blood Glucose FALLS (e.g. fasting or vigorous exercise)**: Detected by **pancreas** → secretes **more glucagon** (and less insulin) → stimulates **liver** (mainly) to **break down stored glycogen into glucose** and release it into blood → blood glucose **rises back to normal**.",
              zh: "**血糖下降時（如空腹或劇烈運動）**：**胰臟**分泌**較多高血糖素**（較少胰島素）→ 刺激肝臟把儲存的**糖原分解為葡萄糖**釋入血液 → 血糖回升正常。"
            },
            {
              en: "**Diabetes Mellitus**: Persistent high blood glucose; kidneys cannot reabsorb all glucose → **glucose appears in urine**. **Type 1** (insulin-dependent; pancreas produces little/no insulin → treated by **insulin injections** — cannot be taken orally because **insulin is a protein** digested by proteases in alimentary canal!). **Type 2** (non-insulin-dependent; body cells become insensitive/resistant to insulin, linked to obesity/lifestyle → managed by diet control, exercise, drugs).",
              zh: "**糖尿病**：持續高血糖致尿中出現葡萄糖。**一型**因胰臟未能分泌足夠胰島素，須**注射胰島素**（不可口服，因胰島素屬**蛋白質**會被消化酶分解！）；**二型**因細胞對胰島素敏感度下降，與肥胖有關。"
            }
          ],
          trap: {
            en: "Spelling lethal trap! **Glycogen** = storage polysaccharide; **Glucagon** = hormone secreted by pancreas that raises blood glucose. Mixing these two up costs full marks in HKDSE!",
            zh: "極高危串字陷阱：**glycogen（糖原，儲能多糖）** vs **glucagon（高血糖素，升糖激素）**，拼錯必失分！"
          }
        }
      ]
    }
  ]
});
