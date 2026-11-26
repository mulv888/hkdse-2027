/* ==========================================================================
   Unit 5 (Compulsory — Book 4, Ch 25–30):
   Basic Genetics, Molecular Genetics, Biodiversity, Evolution & Speciation
   ========================================================================== */
window.BIO_UNITS.push({
  id: "u5",
  paper: "compulsory",
  code: "Unit 5",
  bookRef: "Book 4 · Ch 25–30",
  color: "#7c3aed",
  title: { en: "Unit 5: Genetics, Biodiversity & Evolution", zh: "單元五：遺傳學、生物多樣性與進化" },
  subtitle: {
    en: "Mendelian Genetics, ABO Blood Groups, Sex Linkage & Pedigrees · DNA, Protein Synthesis & Mutations · Classification · Natural Selection & Speciation",
    zh: "孟德爾遺傳、ABO 血型、性連鎖與譜系分析 · DNA、蛋白質合成與突變 · 生物分類 · 自然選擇與物種形成"
  },
  chapters: [
    {
      id: "u5-ch25",
      code: "Ch 25",
      title: { en: "Basic Genetics", zh: "基礎遺傳學" },
      topics: [
        {
          id: "u5-25-1",
          code: "25.1",
          highYield: true,
          title: { en: "Mendelian Inheritance, ABO Codominance, Sex Linkage & Pedigree Deductions", zh: "孟德爾遺傳、ABO 共顯性、性連鎖與譜系推斷" },
          summary: {
            en: "Traits are inherited via **alleles** located at specific **gene loci** on homologous chromosomes. Mastery of **genetic diagrams**, **ABO multiple alleles**, **X-linked traits**, and **pedigree deduction proofs** is essential for Paper 1B.",
            zh: "性狀由同源染色體特定**基因座**上的**等位基因**控制。熟練**遺傳圖解**、**ABO 複等位基因**、**性連鎖**及**譜系推斷寫法**是卷一乙部奪星關鍵。"
          },
          points: [
            {
              en: "**Core Genetic Terms**: **Gene** (DNA segment coding for a polypeptide); **Alleles** (alternative forms of the same gene at the same **locus** on homologous chromosomes); **Homozygous** (`TT` or `tt`); **Heterozygous** (`Tt`); **Dominant allele** (expressed in both homozygous & heterozygous conditions); **Recessive allele** (expressed ONLY in homozygous condition); **Genotype** (genetic makeup); **Phenotype** (observable trait resulting from genotype + environment).",
              zh: "**核心遺傳術語**：**基因**、**等位基因**（同源染色體同一**基因座**上控制同性狀之不同形式）、**純合**、**雜合**、**顯性**、**隱性**、**基因型**、**表現型**。"
            },
            {
              en: "**Mendel's Two Laws & Classic Ratios**:\n• **First Law (Law of Segregation)**: Each trait is controlled by a pair of alleles which **separate during meiosis (Anaphase I)** so each gamete receives only ONE allele. Monohybrid cross `Tt × Tt` → Genotype `1 TT : 2 Tt : 1 tt`; Phenotype **`3 : 1`**.\n• **Test Cross**: Cross an individual showing dominant phenotype (`T_`) with a **homozygous recessive (`tt`)** to determine its genotype (`100% dominant` → `TT`; `1 : 1` → `Tt`).\n• **Second Law (Law of Independent Assortment)**: Alleles of two genes on **different pairs of homologous chromosomes** assort independently during gamete formation (Metaphase I). Dihybrid cross `RrYy × RrYy` → Phenotype **`9 : 3 : 3 : 1`** (if linked on same chromosome, ratio deviates!).",
              zh: "**孟德爾兩大定律**：**分離定律**（減數分裂時等位基因分離入不同配子，單基因雜交 `Tt×Tt` 得 **3:1**）；**測交**（與純合隱性 `tt` 交配測基因型）；**獨立分配定律**（位於不同對同源染色體之兩對基因獨立分配，雙基因雜交 `RrYy×RrYy` 得 **9:3:3:1**）。"
            },
            {
              en: "**Codominance & Multiple Alleles — Human ABO Blood Groups**: Controlled by **3 alleles** (`I^{A}`, `I^{B}`, `i`) at one locus, though any individual carries only 2. `I^{A}` and `I^{B}` are **codominant** (both fully expressed in `I^{A}I^{B}` → Blood Group **AB**); both are dominant over `i`. Genotypes: Group A (`I^{A}I^{A}` or `I^{A}i`), Group B (`I^{B}I^{B}` or `I^{B}i`), Group AB (`I^{A}I^{B}`), Group O (`ii`). *Example*: `I^{A}i × I^{B}i` can produce children of ALL four blood groups (A, B, AB, O) in `1:1:1:1`!",
              zh: "**共顯性與複等位基因（ABO 血型）**：3 個等位基因 `I^{A}`、`I^{B}`、`i`；`I^{A}` 與 `I^{B}` 互為**共顯性**（`I^{A}I^{B}` 表達 AB 型），皆對 `i` 顯性。父母為 `I^{A}i × I^{B}i` 可生出全部四種血型子女！"
            },
            {
              en: "**Sex Determination & X-Linked Recessive Inheritance**: Females = `XX`, Males = `XY` (sperm determines sex — `X` or `Y` in `1:1` ratio!). **Red-green colour blindness** (`X^{B}` normal, `X^{b}` colour-blind) & **haemophilia** (`X^{H}`, `X^{h}`) are carried on the **X chromosome** (Y chromosome lacks the corresponding locus). **Why much more common in males**: Males have **only ONE X chromosome** (`X^{b}Y`), so **a single recessive allele** expresses the disorder; females need **two recessive alleles** (`X^{b}X^{b}`), whereas `X^{B}X^{b}` is a normal **carrier**. *Key rule*: An affected father (`X^{b}Y`) passes `X^{b}` to ALL daughters (never to sons, who receive `Y`!); an affected mother (`X^{b}X^{b}`) passes `X^{b}` to ALL sons (100% affected!).",
              zh: "**性別決定與 X 性連鎖隱性遺傳（色盲、血友病）**：男性 `XY` 只有一條 X 染色體，只需**一個隱性等位基因**即發病（`X^{b}Y`），故男性患病率遠高於女性；女性 `X^{B}X^{b}` 為正常**攜帶者**。患病母親所生兒子必全患病；患病父親不會傳給兒子。"
            },
            {
              en: "**HKEAA Pedigree Deduction Gold Template (4-Mark Full-Credit Proof!)**:\n• **To prove trait is RECESSIVE**: 'Individuals [X] and [Y] are both [normal/unaffected], yet they have an [affected] child [Z]. Since [Z] must have received at least one allele for the trait from a parent, at least one parent must carry the allele without expressing it (heterozygous). Therefore, the normal allele is dominant and the disorder allele is **recessive**.'\n• **To prove trait is DOMINANT**: 'Individuals [X] and [Y] are both [affected], yet they have a [normal] child [Z]... Therefore, the disorder allele is **dominant**.'\n• **To rule out X-linked recessive**: Find an **affected female** who has a **normal father** OR a **normal son**! (If X-linked recessive, affected female `X^{a}X^{a}` MUST inherit `X^{a}` from father → father MUST be affected; and MUST pass `X^{a}` to all sons → all sons MUST be affected. Contradiction → autosomal!)",
              zh: "**考評局譜系推斷滿分模板**：\n• **證隱性**：雙親皆正常卻生出患病子女 → 雙親至少一方為雜合攜帶者而不表現該病 → 致病為**隱性**。\n• **證顯性**：雙親皆患病卻生出正常子女 → 致病為**顯性**。\n• **排除 X 連鎖隱性**：找「**患病女性但父親正常**」或「**患病女性但兒子正常**」即出現矛盾，證屬常染色體遺傳！"
            },
            {
              en: "**Continuous vs Discontinuous Variation**: **Continuous** (height, weight, skin colour, IQ): wide range of intermediate phenotypes, **normal distribution (bell-shaped) curve**, controlled by **polygenes (many genes) + heavily influenced by environment**. **Discontinuous** (ABO blood group, tongue rolling, attached earlobe): distinct non-overlapping categories, **bar chart**, controlled by **one/few genes**, **little/no environmental effect**.",
              zh: "**連續變異 vs 不連續變異**：**連續變異**（身高、體重）呈鐘形正態分布，由**多對基因及環境**共同影響；**不連續變異**（ABO 血型）分界鮮明呈棒形圖，由**單一或少數基因**控制，幾乎不受環境影響。"
            }
          ],
          trap: {
            en: "In HKDSE genetic diagrams, ALWAYS **define your symbols first** (e.g., 'Let B represent the dominant allele for...'), label EVERY row (**Parental phenotypes, Parental genotypes, Gametes [circled], Punnett square/cross, Offspring genotypes, Offspring phenotypes & ratio**), and remember **probability is independent for each birth** ('expected ratio is theoretical; actual sample size is small because fertilization is random').",
            zh: "畫遺傳圖解必須先**定義符號**並標明各行（親代表現型、基因型、配子、子代基因型與表現型比例）；每次生育屬**獨立隨機事件**，實際比例因樣本細小而未必吻合理論比例。"
          }
        }
      ]
    },
    {
      id: "u5-ch26",
      code: "Ch 26–27",
      title: { en: "Molecular Genetics & Mutations", zh: "分子遺傳學與突變" },
      topics: [
        {
          id: "u5-26-1",
          code: "26.1",
          highYield: true,
          title: { en: "DNA Structure, Semi-Conservative Replication, Protein Synthesis & Mutations", zh: "DNA 結構、半保留複製、蛋白質合成與突變" },
          summary: {
            en: "**DNA** is a double helix of complementary nucleotide strands encoding the **triplet genetic code**. Genetic information flows via **Transcription** (DNA → mRNA in nucleus) and **Translation** (mRNA → polypeptide at ribosome).",
            zh: "**DNA** 由兩條互補核苷酸鏈組成雙螺旋，以**三聯密碼**編碼遺傳資訊，透過**轉錄**（核內 DNA→mRNA）及**轉譯**（核糖體 mRNA→多肽）合成蛋白質。"
          },
          points: [
            {
              en: "**DNA Double Helix Structure (Watson & Crick, 1953)**: Two antiparallel **polynucleotide strands** coiled into a **double helix**. Each **nucleotide** = **deoxyribose sugar + phosphate group + nitrogenous base (A, T, C, or G)**. Sugar-phosphate groups form outer backbones; bases project inward and pair via **hydrogen bonds** following **complementary base pairing**: **A pairs with T** (2 H-bonds), **C pairs with G** (3 H-bonds). Thus `%A = %T` and `%C = %G`!",
              zh: "**DNA 雙螺旋結構**：兩條反向平行的**多核苷酸鏈**構成。每核苷酸含**去氧核糖＋磷酸基＋含氮鹼基（A/T/C/G）**。兩鏈藉**互補鹼基配對**以氫鍵連結：**A 配 T、C 配 G**（故 A%=T%、C%=G%）。"
            },
            {
              en: "**Semi-Conservative DNA Replication (occurs during Interphase)**: (1) Double helix unwinds & H-bonds break, separating the two strands; (2) **Each original strand serves as a template**; (3) Free DNA nucleotides align by **complementary base pairing** (A–T, C–G); (4) **DNA polymerase** catalyses joining of adjacent nucleotides to form new sugar-phosphate backbones; (5) Result: **2 identical DNA molecules**, each containing **one original (parental) strand and one newly synthesized strand** (ensures genetic stability across cell divisions).",
              zh: "**DNA 半保留複製（間期進行）**：雙鏈解旋分開 → 兩條舊鏈各自作為**模板** → 游離核苷酸按**互補鹼基配對**排列並由 **DNA 聚合酶**連接成新鏈 → 產生 2 條相同 DNA，各含**一條舊鏈與一條新鏈**。"
            },
            {
              en: "**Genetic Code**: Sequence of **3 bases (a triplet / codon)** on mRNA codes for **1 specific amino acid** (64 codons for 20 amino acids → **degenerate**: some amino acids have >1 codon; includes **start codon AUG** & **stop codons**; **non-overlapping** & **universal** across almost all organisms — enables genetic engineering!).",
              zh: "**遺傳密碼**：mRNA 上每 **3 個鹼基（密碼子）**編碼 **1 個氨基酸**；具簡併性、不重疊及**通用性**（生物工程基礎）。"
            },
            {
              en: "**Protein Synthesis — Transcription & Translation (Exact Marking Steps!)**:\n• **Stage 1: Transcription** (*Nucleus*): DNA double helix unwinds at the gene region; **one strand acts as the template strand**; free **RNA nucleotides** pair complementarily with DNA template (**A–U**, **T–A**, **C–G**, **G–C**) catalysed by **RNA polymerase** → forms single-stranded **mRNA**, which leaves nucleus via **nuclear pores** to cytoplasm.\n• **Stage 2: Translation** (*Ribosome on rER or cytoplasm*): mRNA attaches to **ribosome**; **tRNA** molecules (each carrying a **specific amino acid** at one end and a complementary 3-base **anticodon** at the other) match their anticodons to **mRNA codons** sequentially; **peptide bonds** form between adjacent amino acids → growing **polypeptide chain** is released upon reaching a **stop codon** and **folds into a specific 3D protein**.",
              zh: "**蛋白質合成兩大階段（必考！）**：\n• **轉錄**（**細胞核**）：DNA 局部解旋，以其中一條為模板，游離 RNA 核苷酸按互補配對（**A 配 U**、T 配 A、C 配 G）經 **RNA 聚合酶**合成 **mRNA**，經核孔離開。\n• **轉譯**（**核糖體**）：mRNA 結合核糖體；攜帶特定氨基酸的 **tRNA** 以其**反密碼子**與 mRNA **密碼子**互補配對，相鄰氨基酸以**肽鍵**連接成**多肽鏈**，遇終止密碼子釋出並摺疊成特定三維蛋白質。"
            },
            {
              en: "**Gene Mutations vs Chromosome Mutations**:\n• **Gene mutation**: Sudden, random change in **base sequence of DNA** within a gene:\n  - **Substitution**: One base replaced by another → may change 1 amino acid (e.g. **sickle-cell anaemia**: abnormal haemoglobin distorts RBCs into sickle shape → blocks capillaries & reduces O2 transport) OR **silent mutation** (same amino acid due to degenerate code!).\n  - **Insertion / Deletion** (of 1 or 2 bases): Causes a **frameshift mutation** — alters EVERY downstream triplet codon from the mutation point onwards → drastically different/non-functional protein (much more harmful than substitution!).\n• **Chromosome mutation**: Change in chromosome structure or number (e.g. **Down syndrome** — trisomy 21, 47 chromosomes due to non-disjunction during meiosis).\n• **Mutagens**: Increase mutation rate — **radiation** (UV, X-rays, gamma rays) & **chemicals** (tar, nitrous acid, formaldehyde). Only mutations in **gametes/germ cells** are **heritable**!",
              zh: "**基因突變 vs 染色體突變**：**替代**可能僅改 1 個氨基酸（如**鐮狀細胞性貧血**）或無影響（密碼簡併）；**插入／缺失**導致**移碼突變**，改變其後所有密碼子，影響極大！**染色體突變**如**唐氏綜合症**（第 21 對多一條染色體，共 47 條）。僅發生於**配子**之突變可遺傳。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "DNA", zh: "DNA（去氧核糖核酸）" },
              { en: "RNA (mRNA / tRNA)", zh: "RNA（核糖核酸）" }
            ],
            rows: [
              [
                { en: "**Pentose sugar**", zh: "**五碳糖**" },
                { en: "**Deoxyribose**", zh: "**去氧核糖**" },
                { en: "**Ribose**", zh: "**核糖**" }
              ],
              [
                { en: "**Nitrogenous bases**", zh: "**含氮鹼基**" },
                { en: "A, **T (Thymine)**, C, G", zh: "A、**T（胸腺嘧啶）**、C、G" },
                { en: "A, **U (Uracil)**, C, G", zh: "A、**U（尿嘧啶）**、C、G" }
              ],
              [
                { en: "**Strands & Location**", zh: "**鏈數與位置**" },
                { en: "**Double-stranded** helix; mainly in **nucleus** (cannot leave)", zh: "**雙鏈**螺旋；主要留於**細胞核**" },
                { en: "**Single-stranded**; made in nucleus, acts in **cytoplasm / ribosomes**", zh: "**單鏈**；核內合成，於**細胞質／核糖體**作用" }
              ]
            ]
          }
        }
      ]
    },
    {
      id: "u5-ch28",
      code: "Ch 28",
      title: { en: "Biodiversity and Classification", zh: "生物多樣性與分類" },
      topics: [
        {
          id: "u5-28-1",
          code: "28.1",
          highYield: true,
          title: { en: "Taxonomic Hierarchy, Three Domains, Six Kingdoms, Plants & Vertebrates", zh: "分類階層、三域六界系統、植物與脊椎動物分類" },
          summary: {
            en: "Organisms are classified hierarchically based on **phylogenetic (evolutionary) relationships** (morphological + molecular DNA/amino acid evidence) and named universally via **binomial nomenclature**.",
            zh: "生物按**親緣演化關係**（形態及分子 DNA 證據）分級歸類，並採全球統一的**雙名法**命名。"
          },
          points: [
            {
              en: "**Taxonomic Hierarchy (Broadest → Most Specific)**: **Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species** (*Mnemonic*: **D**ear **K**ing **P**hilip **C**ame **O**ver **F**or **G**ood **S**oup). Moving down → organisms share **more similarities** & **closer phylogenetic relationship**.",
              zh: "**分類階層（大→小）**：**域 → 界 → 門 → 綱 → 目 → 科 → 屬 → 種**。越往下層，生物特徵越相似、親緣關係越近。"
            },
            {
              en: "**Binomial Nomenclature (Linnaeus)**: Scientific name = ***Genus species*** (e.g., *Homo sapiens*). Rules: (1) Always **italicized** when typed (or **underlined separately** when handwritten); (2) **Genus capitalized**, **species lowercase**; (3) Latin/universal — avoids confusion of local common names & indicates close relationships (same genus = closely related).",
              zh: "**雙名法**：*屬名 種名*（如 *Homo sapiens*），印刷用斜體、手寫須分開加底線；屬名首字大寫、種名全小寫。"
            },
            {
              en: "**Three Domains & Six Kingdoms**:\n• **Domain Bacteria** → **Kingdom Eubacteria** (prokaryotic, peptidoglycan cell wall, ubiquitous).\n• **Domain Archaea** → **Kingdom Archaebacteria** (prokaryotic, NO peptidoglycan, extremophiles in hot springs/deep sea; molecularly closer to Eukarya than Eubacteria!).\n• **Domain Eukarya** (true nucleus & membrane-bound organelles) → **4 Kingdoms**: **Protista** (mostly unicellular — *Amoeba*, algae), **Fungi** (chitin cell wall, **saprophytic/heterotrophic**, hyphae/spores, NO chlorophyll), **Plantae** (cellulose cell wall, autotrophic with chlorophyll), **Animalia** (no cell wall, heterotrophic, motile).",
              zh: "**三域六界**：**細菌域**（真細菌界—原核、肽聚糖壁）、**古菌域**（古細菌界—原核極端環境、無肽聚糖、分子親緣更近真核）、**真核域**（原生生物界、真菌界[幾丁質壁、無葉綠素]、植物界、動物界）。"
            },
            {
              en: "**Major Plant Groups**: **Non-vascular plants (Mosses)**: no xylem/phloem, no true roots/stems/leaves, small, damp habitats, **spores**. **Vascular seedless (Ferns)**: have xylem/phloem, true roots/stems/leaves, **spores** on underside of fronds. **Seed plants — Gymnosperms** (conifers/pines): **naked seeds** in **cones**, no flowers/fruits, needle leaves. **Angiosperms (Flowering plants)**: seeds enclosed inside **fruits**, have flowers; divided into **Monocots** (1 cotyledon, **parallel veins**, fibrous roots, floral parts in multiples of 3, scattered vascular bundles) vs **Dicots** (2 cotyledons, **net/branched veins**, taproot, floral parts in 4s/5s, vascular bundles in a ring).",
              zh: "**植物四大類**：**苔蘚**（無維管組織、孢子）；**蕨類**（具維管組織、無種子、孢子）；**裸子植物**（球果裸露種子、無花果）；**被子植物（有花植物）**（果實包種子；分**單子葉**［平行脈、鬚根、1子葉］與**雙子葉**［網狀脈、主根、2子葉］）。"
            },
            {
              en: "**Five Vertebrate Classes**: **Fish** (wet scales, gills, fins, **ectothermic/poikilothermic**, external fertilization); **Amphibians** (moist naked skin, lungs + skin gas exchange, aquatic larvae with gills, ectothermic, external fertilization); **Reptiles** (dry scaly skin, lungs, leathery-shelled eggs, ectothermic, internal fertilization); **Birds** (**feathers**, wings, beak, lungs, hard-shelled eggs, **endothermic/homoiothermic**); **Mammals** (**hair/fur**, **mammary glands** producing milk, diaphragm, external ears/pinnae, endothermic, live birth).",
              zh: "**五類脊椎動物**：魚類（濕鱗、鰓、變溫）、兩棲類（濕潤裸膚、變溫）、爬行類（乾鱗、肺、革質殼卵、變溫）、鳥類（羽毛、恆溫、硬殼卵）、哺乳類（毛髮、乳腺、橫膈膜、恆溫、胎生）。"
            }
          ]
        }
      ]
    },
    {
      id: "u5-ch29",
      code: "Ch 29–30",
      title: { en: "Evolution and Speciation", zh: "進化與物種形成" },
      topics: [
        {
          id: "u5-29-1",
          code: "29.1",
          highYield: true,
          title: { en: "Evidence for Evolution, Natural Selection (Darwin vs Lamarck) & Speciation", zh: "進化證據、自然選擇（達爾文 vs 拉馬克）與物種形成" },
          summary: {
            en: "**Evolution** is the gradual change in **allele frequencies** of populations over generations, driven mainly by **natural selection** (Darwin–Wallace). Prolonged **isolation** between populations can lead to **speciation**.",
            zh: "**進化**是種群**等位基因頻率**跨代逐漸改變的過程，主要由**自然選擇**驅動；長期**隔離**可導致**物種形成**。"
          },
          points: [
            {
              en: "**Evidence for Evolution**:\n1. **Fossil Record**: Shows progression from simple to complex organisms in successive sedimentary rock strata & transitional forms (e.g. *Archaeopteryx* linking reptiles & birds). *Limitations*: **Incomplete** because soft-bodied organisms rarely fossilize, fossils are destroyed by erosion/earthquakes, and many fossils remain undiscovered.\n2. **Homologous Structures** (pentadactyl limb of humans, bats, whales, horses): Same basic bone plan inherited from a **common ancestor**, modified for different functions (**divergent evolution**). (Contrast with **Analogous structures**, e.g. insect wing vs bird wing: similar function but different origin — convergent evolution.)\n3. **Molecular Evidence (Most Objective!)**: Comparing **DNA base sequences** or **amino acid sequences** of conserved proteins (e.g. cytochrome c, haemoglobin). **Fewer differences = more recent common ancestor = closer phylogenetic relationship**.",
              zh: "**進化證據**：(1) **化石紀錄**（由簡單至複雜，但因軟體難成化石及地質破壞而**不完整**）；(2) **同源結構**（五趾肢結構相同源自**共同祖先**，屬趨異進化）；(3) **分子證據**（DNA 鹼基或氨基酸序列差異越少，共同祖先越近、親緣越密切）。"
            },
            {
              en: "**Darwin's Natural Selection — 5-Step HKEAA Marking Scheme Template (Memorize!)**:\n1. **Pre-existing genetic variation** exists among individuals in the population (arising from random **mutations** & sexual reproduction) — some possess a favourable trait (e.g., longer neck / antibiotic resistance / camouflage).\n2. Organisms produce more offspring than the environment can support → **struggle for existence (competition)** & **selection pressure** (e.g., predator, antibiotic, food shortage).\n3. Individuals with the **favourable variation** are better adapted → **higher chance of surviving and reproducing** ('survival of the fittest') than those without it.\n4. They **pass on the favourable alleles** to their offspring.\n5. Over **many generations**, the **proportion (frequency) of the favourable allele** increases in the population.",
              zh: "**達爾文自然選擇五步滿分模板（必背！）**：(1) 種群內**原有遺傳變異**（源於隨機突變與有性生殖）；(2) 面對**選擇壓力**與生存競爭；(3) 具**有利性狀**個體較易**存活並繁殖**；(4) 把**有利等位基因遺傳**給後代；(5) 歷經**多代**，有利等位基因**頻率在種群中上升**。"
            },
            {
              en: "**Why Lamarckism Is Rejected**: Lamarck proposed 'use and disuse' & **inheritance of acquired characteristics** (e.g., giraffes stretching necks during lifetime pass longer necks to offspring). **Refuted** because acquired traits change only **body (somatic) cells**, NOT the **DNA in gametes**, so they CANNOT be inherited!",
              zh: "**拉馬克學說為何被推翻**：「用進廢退」及「後天獲得性狀遺傳」僅影響體細胞，**未改變配子 DNA**，無法遺傳給後代。"
            },
            {
              en: "**Speciation (Formation of New Species — Exact Mechanism)**:\n1. An ancestral population is split into separate subpopulations by **isolation** (commonly **geographical isolation** — ocean, mountain range, river; or **ecological / behavioural isolation**), **preventing interbreeding (gene flow stops)**.\n2. **Different random mutations** arise independently in each subpopulation.\n3. The separated habitats exert **different selection pressures**, so **natural selection** favours different traits in each group → genetic differences accumulate over many generations.\n4. Eventually, even if reunited, the two populations can **no longer interbreed to produce fertile offspring** (**reproductive isolation**) → two distinct **species** have formed!",
              zh: "**物種形成四步機制**：(1) 種群被**地理／生態／行為隔離**阻斷**基因流**（無法交配）；(2) 各亞群各自發生**不同隨機突變**；(3) 面對**不同選擇壓力**經自然選擇朝不同方向演化，遺傳差異累積；(4) 即使重聚亦無法交配產生可育後代（**生殖隔離**）→ 形成新物種！"
            }
          ],
          trap: {
            en: "FATAL EVOLUTION PHRASING TRAP: NEVER say 'bacteria mutated *in order to* resist antibiotics' or 'giraffes evolved long necks *so that* they could reach high leaves'! Mutations are **random and pre-existing BEFORE** the selection pressure; natural selection only **selects** from existing variations!",
            zh: "致命措辭陷阱：**切勿寫「細菌為了抵抗抗生素而突變」**！突變是**隨機且早於選擇壓力存在**的，自然選擇只是篩選既有變異！"
          }
        }
      ]
    }
  ]
});
