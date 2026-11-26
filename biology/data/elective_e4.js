/* ==========================================================================
   Elective E4 (Paper 2 — Book E4): Biotechnology
   Recombinant DNA · PCR · Gel Electrophoresis · DNA Fingerprinting · Cloning · GMOs · Bioethics
   ========================================================================== */
window.BIO_UNITS.push({
  id: "e4",
  paper: "elective",
  code: "Elective E4",
  bookRef: "Book E4 · Ch 1–2",
  color: "#9333ea",
  title: { en: "Elective E4: Biotechnology", zh: "選修 E4：生物工程" },
  subtitle: {
    en: "Recombinant DNA Technology · PCR & Gel Electrophoresis · DNA Fingerprinting · Plant Tissue Culture & Cloning · Medical/Agricultural GMOs · Bioethics",
    zh: "重組 DNA 技術 · 聚合酶鏈反應（PCR）與凝膠電泳 · DNA 指紋分析 · 組織培養與複製 · 醫藥與農業應用 · 生物倫理"
  },
  chapters: [
    {
      id: "e4-ch1",
      code: "E4.1",
      title: { en: "Techniques in Modern Biotechnology", zh: "現代生物工程技術" },
      topics: [
        {
          id: "e4-1-1",
          code: "E4.1.1",
          highYield: true,
          title: { en: "Recombinant DNA Technology (Gene Cloning & Selection)", zh: "重組 DNA 技術（基因選殖與篩選）" },
          summary: {
            en: "**Recombinant DNA technology** transfers a specific **gene of interest** (e.g. human insulin gene) into a host organism (e.g. *E. coli* bacteria) using a **vector (plasmid)**, **restriction enzymes**, and **DNA ligase**.",
            zh: "**重組 DNA 技術**利用**載體（質粒）**、**限制酶**及 **DNA 連接酶**，將目標基因（如人胰島素基因）轉入宿主細胞大量表達目標蛋白質。"
          },
          diagramIds: ["diag-recombinant-pcr"],
          points: [
            {
              en: "**Step-by-Step Recombinant DNA Process (Exact 6-Mark Exam Sequence!)**:\n1. **Obtain Gene of Interest**: Isolate directly from donor DNA, OR extract **mRNA** from specialized cells (e.g. pancreatic beta cells) and use **reverse transcriptase** to synthesize **cDNA** (advantage: cDNA contains **NO introns** — bacteria lack splicing machinery to remove eukaryotic introns!).\n2. **Cut DNA & Vector with the SAME Restriction Enzyme**: A **restriction enzyme** recognizes a specific short **palindromic base sequence (restriction site)** and makes staggered cuts on BOTH the target DNA and the **bacterial plasmid (vector)** → produces **complementary sticky ends** (single-stranded overhangs).\n3. **Join to Form Recombinant Plasmid**: Mix cut target gene and cut plasmids → complementary sticky ends anneal by **complementary base pairing (H-bonds)** → **DNA ligase** catalyses formation of covalent **phosphodiester bonds** in the sugar-phosphate backbone → **recombinant plasmid**.\n4. **Transformation (Introduction into Host Bacteria)**: Mix recombinant plasmids with host *E. coli* treated with **CaCl2 + heat shock** (or **electroporation**) to temporarily increase cell membrane permeability so some bacteria take up the plasmid.\n5. **Selection / Screening of Transformed Bacteria**: Use **marker genes** (e.g. **antibiotic resistance genes**, or `lacZ` blue-white screening):\n   • Grow bacteria on agar containing **Antibiotic A (e.g. ampicillin)**: ONLY bacteria that took up a plasmid survive (untransformed bacteria die).\n   • If target gene was inserted **inside Antibiotic B (tetracycline) resistance gene** (**insertional inactivation**): **recombinant bacteria** are resistant to Ampicillin (`Amp^R`) but **sensitive to Tetracycline (`Tet^S`)** (identified via replica plating!).\n6. **Mass Culture & Protein Harvesting**: Culture selected transformed bacteria in **fermenters** → bacteria divide rapidly by binary fission (cloning the gene) and express **human insulin** (identical to native human insulin → no allergic immune rejection, ethical, unlimited supply!).",
              zh: "**重組 DNA 六步滿分步驟**：(1) 獲取目標基因（或由 mRNA 經**逆轉錄酶**製無內含子的 **cDNA**）；(2) 用**同一種限制酶**切割目標基因與**細菌質粒載體**，產生**互補黏性末端**；(3) 藉互補配對結合並以 **DNA 連接酶**接合磷酸骨架成**重組質粒**；(4) 藉 **CaCl2 及熱休克**（或電穿孔）**轉化**入宿主細菌；(5) 利用**抗生素抗性標記基因**（插入失活法）篩選出含重組質粒的轉化菌；(6) 於發酵槽大量培養並提取純化目標蛋白（如人類胰島素）。"
            }
          ],
          trap: {
            en: "ALWAYS explain **WHY the SAME restriction enzyme** must be used for both plasmid and target gene: '**to produce complementary sticky ends so that the target gene and plasmid can join by complementary base pairing**'!",
            zh: "必考問答：為何切割質粒和目標基因必須使用**同一種限制酶**？答：**「以產生互補的黏性末端，使目標基因與質粒能藉互補鹼基配對結合」**！"
          }
        },
        {
          id: "e4-1-2",
          code: "E4.1.2",
          highYield: true,
          title: { en: "PCR (Polymerase Chain Reaction), Gel Electrophoresis & DNA Fingerprinting", zh: "聚合酶鏈反應（PCR）、凝膠電泳與 DNA 指紋分析" },
          summary: {
            en: "**PCR** amplifies tiny traces of DNA exponentially (*in vitro*), **gel electrophoresis** separates DNA fragments by **size**, and **DNA fingerprinting** compares unique banding patterns of **VNTRs/STRs**.",
            zh: "**PCR** 在體外呈指數倍增微量 DNA；**凝膠電泳**按**片段大小**分離 DNA；**DNA 指紋分析**比對每個人獨一無二的條帶圖譜。"
          },
          points: [
            {
              en: "**Polymerase Chain Reaction (PCR) — Ingredients & 3 Thermal Steps**:\n• **Reaction mixture**: Template DNA, **two specific short DNA primers** (mark start/end of target sequence & provide starting point for polymerase), excess **free DNA nucleotides (dNTPs)**, and **heat-stable *Taq* DNA polymerase** (from thermophilic bacterium *Thermus aquaticus* — does **NOT denature at 94–95°C**!).\n• **Step 1 — Denaturation (~94–95°C)**: High temperature breaks **hydrogen bonds** between base pairs → double-stranded DNA separates into **2 single strands**.\n• **Step 2 — Annealing (~50–65°C)**: Temperature lowered so **primers bind** to complementary sequences at ends of target DNA strands.\n• **Step 3 — Extension (~72°C, optimum for *Taq* polymerase)**: *Taq* DNA polymerase synthesizes complementary new DNA strands from primers using free nucleotides.\n• After `n` cycles → `2^n` copies of target DNA! (e.g., 30 cycles > 1 billion copies in hours!)",
              zh: "**PCR 原料與三步熱循環**：原料包括模板 DNA、特異性**引物（primers）**、過量游離 DNA 核苷酸及**耐熱 *Taq* DNA 聚合酶**（95°C 不變性）。三步驟：(1) **變性（~95°C）**打斷氫鍵解開雙鏈；(2) **黏合（~55°C）**引物與模板互補結合；(3) **延伸（~72°C）** *Taq* 聚合酶合成互補新鏈。經 n 循環增至 `2^n` 倍！"
            },
            {
              en: "**Gel Electrophoresis**: DNA samples loaded into wells near the **negative electrode (cathode)** of an agarose gel submerged in buffer. When electric field is applied: DNA molecules carry a **net negative charge** (due to **phosphate groups**) → migrate toward the **positive electrode (anode)**. The gel acts as a molecular sieve: **smaller (shorter) DNA fragments encounter less resistance and migrate faster & further** than larger fragments! A **DNA ladder** (known fragment sizes) is run alongside to estimate fragment sizes. Stained with fluorescent dye & viewed under UV.",
              zh: "**凝膠電泳原理**：DNA 磷酸基帶**負電荷**，於電場中由負極移向**正極**；凝膠起分子篩作用，**越短（越小）的 DNA 片段阻力越小、移動越快越遠**；旁設標準分子尺（DNA ladder）估計長度。"
            },
            {
              en: "**DNA Fingerprinting (Forensics & Paternity Testing)**: Uses **non-coding tandem repeat regions (VNTRs / STRs)** whose repeat lengths vary uniquely among individuals (except **identical twins**, who have identical DNA!). DNA cut with **restriction enzymes** (producing **RFLPs**) or amplified by PCR → separated by **gel electrophoresis** → compared as banding patterns.\n• **Crime scene forensics**: Suspect's bands must **100% match** crime-scene sample bands.\n• **Paternity test rule (Very High-Yield!)**: **Every single band in a child's DNA fingerprint MUST come from either the biological mother OR the biological father!** Eliminate mother's bands first → all remaining bands in the child MUST match the true biological father!",
              zh: "**DNA 指紋分析**：比較非編碼區**串聯重複序列（VNTRs/STRs）**長度差異（除同卵雙生外人人獨一無二）。**親子鑑定鐵律**：**子女的每一條 DNA 條帶必來自生母或生父其中一方**；先扣除與母親吻合條帶，剩餘所有條帶必須全部出現在生父圖譜中！"
            },
            {
              en: "**Plant Tissue Culture & Animal Cloning (SCNT)**:\n• **Plant micropropagation**: Small **explant** cultured on **sterile agar** with nutrients & plant hormones (**auxins & cytokinins**) → divides by mitosis into undifferentiated **callus** → develops into identical **plantlets** (relies on **totipotency** of plant cells). Rapid production of disease-free genetically identical crops.\n• **Somatic Cell Nuclear Transfer (SCNT — Dolly the Sheep)**: (1) Remove nucleus from **unfertilized egg cell** (**enucleation**); (2) Extract **diploid nucleus** from adult **somatic (udder) cell** of donor sheep; (3) Fuse donor nucleus with enucleated egg using electric pulse; (4) Embryo develops by mitosis & implanted into **surrogate mother** → lamb is **genetically identical to the somatic nucleus donor** (NOT egg donor or surrogate!).",
              zh: "**植物組織培養與動物複製（多莉羊）**：植物組織培養利用植物細胞**全能性**，在無菌含激素培養基由外植體經癒傷組織快速繁殖無病克隆苗。**體細胞核轉移（SCNT）**：把供體**二倍體體細胞核**植入**去核卵子**，電擊融合發育後植入代母，後代與**體細胞核供體遺傳完全相同**！"
            }
          ]
        }
      ]
    },
    {
      id: "e4-ch2",
      code: "E4.2",
      title: { en: "Applications & Bioethics of Biotechnology", zh: "生物工程的應用與生物倫理" },
      topics: [
        {
          id: "e4-2-1",
          code: "E4.2.1",
          highYield: true,
          title: { en: "Medicine (Gene Therapy, Stem Cells, Monoclonal Antibodies), GM Crops & Bioethics", zh: "醫學應用（基因治療、幹細胞、單克隆抗體）、基改作物與倫理" },
          summary: {
            en: "Biotechnology revolutionizes **medicine** (recombinant pharmaceuticals, gene therapy, stem cells, monoclonal antibodies) and **agriculture** (GM crops/animals), while raising crucial **biosafety, ecological, and ethical** questions.",
            zh: "生物工程徹底改變**醫學**與**農業**，同時帶來重要的**生物安全、生態與倫理爭議**。"
          },
          points: [
            {
              en: "**Medical Applications**:\n• **Recombinant pharmaceuticals & vaccines**: Human insulin, human growth hormone, blood clotting Factor VIII, Hepatitis B recombinant subunit vaccine (safe — contains only viral surface antigen protein, NO live virus!).\n• **Gene Therapy**: Inserting a **normal functional allele** into a patient's cells (using a modified **harmless viral vector** or **liposome**) to treat genetic disorders (e.g., SCID, cystic fibrosis). **Somatic gene therapy** (targets body cells → **NOT heritable**, often requires repeated treatments as cells die) vs **Germline gene therapy** (targets gametes/zygote → **heritable** to future generations, widely **banned** due to safety & ethical concerns).\n• **Stem Cell Therapy**: Undifferentiated cells capable of self-renewal & differentiation into specialized tissues (treat Parkinson's, diabetes, spinal injury). **Embryonic stem cells** (**pluripotent** — can become almost any cell type, BUT harvesting destroys embryos → major ethical debate!) vs **Adult stem cells** (**multipotent** — fewer types, no embryo destruction, autologous use avoids **immune rejection**!) vs **iPSCs** (reprogrammed adult cells).\n• **Monoclonal Antibodies (Hybridoma Technology)**: Fuse antigen-specific **B lymphocyte** with immortal **myeloma (cancer) cell** → **hybridoma** producing huge amounts of identical, highly specific antibodies → used in **pregnancy test kits (detecting hCG)**, COVID rapid antigen tests, targeted cancer therapy.",
              zh: "**四大醫學應用**：重組蛋白與重組疫苗（如乙肝疫苗不含活病毒更安全）；**基因治療**（以無害病毒載體／脂質體導入正常基因；**體細胞治療**不遺傳但須重複，**生殖細胞治療**會遺傳且具重大倫理爭議而遭禁止）；**幹細胞治療**（**胚胎幹細胞**具多能性但涉毀壞胚胎倫理爭議；**成體幹細胞**分化潛能較窄但自體移植無免疫排斥）；**單克隆抗體**（B 細胞＋骨髓瘤細胞融合成雜交瘤，用於驗孕棒測 hCG 及標靶治癌）。"
            },
            {
              en: "**Agricultural GMOs (Transgenic Crops & Animals)**:\n• **Bt corn / Bt cotton**: Carries bacterial *Bacillus thuringiensis* gene producing Bt toxin killing insect pests → reduces chemical pesticide spraying.\n• **Herbicide-resistant crops** (e.g., Roundup-ready soybean): Farmers spray broad-spectrum herbicide killing weeds without harming crop.\n• **Golden Rice**: Engineered with beta-carotene genes (precursor of **Vitamin A**) to combat night blindness & Vitamin A deficiency.\n• **Transgenic animals (Pharming)**: Transgenic sheep/goats secreting therapeutic human proteins (e.g., alpha-1-antitrypsin, clotting factors) in their **milk** (easy harvesting, eukaryotic post-translational folding!).",
              zh: "**農業基改生物**：**Bt 抗蟲粟米**（減農藥）、**抗除草劑大豆**、**黃金米**（含 β-胡蘿蔔素防維生素 A 缺乏夜盲症）；**轉基因動物製藥**（於乳汁分泌具正確摺疊的人類治療蛋白）。"
            },
            {
              en: "**Biosafety, Ecological & Ethical Concerns (Always Discuss Balanced Arguments in Paper 2!)**:\n• **Ecological / Environmental risks**: Cross-pollination of GM crops with wild relatives → **'superweeds'** resistant to herbicides; Bt toxin may harm **non-target beneficial insects** (bees, monarch butterflies) or trigger evolution of resistant pests; GM monocultures **reduce crop genetic diversity**.\n• **Health & Food safety**: Potential **new allergens** or unknown long-term effects; theoretical transfer of **antibiotic resistance marker genes** to gut bacteria → calls for mandatory **GM food labelling**.\n• **Ethical & Social issues**: Destruction of human embryos for embryonic stem cells; human reproductive cloning & **'designer babies'**; **genetic privacy & discrimination** by insurers/employers; **patenting of genes/GM seeds** creating corporate monopolies hurting poor farmers.",
              zh: "**安全與倫理爭議（卷二論述必備雙面觀點！）**：生態風險（與野草雜交成**超級雜草**、誤殺益蟲、降遺傳多樣性）；健康疑慮（潛在致敏原、抗生素抗性標記基因轉移風險 → 倡議**強制基改標籤**）；倫理社會問題（毀壞人類胚胎、訂製嬰兒、複製人、基因私隱歧視、種子公司專利壟斷）。"
            }
          ]
        }
      ]
    }
  ]
});
