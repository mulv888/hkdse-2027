/* ==========================================================================
   Unit 2 (Compulsory — Book 1A/1B, Ch 5–10):
   Nutrition, Gas Exchange and Transport in Humans and Plants
   ========================================================================== */
window.BIO_UNITS.push({
  id: "u2",
  paper: "compulsory",
  code: "Unit 2",
  bookRef: "Book 1A/1B · Ch 5–10",
  color: "#0d9488",
  title: { en: "Unit 2: Nutrition, Gas Exchange & Transport", zh: "單元二：營養、氣體交換與物質轉運" },
  subtitle: {
    en: "Food & Food Tests · Human Digestion & Absorption · Human Gas Exchange & Circulation · Plant Nutrition, Transpiration & Transport",
    zh: "食物與食物試驗 · 人體消化與吸收 · 人體氣體交換與循環 · 植物營養、蒸騰、轉運與支持"
  },
  chapters: [
    {
      id: "u2-ch5",
      code: "Ch 5",
      title: { en: "Food and Humans", zh: "食物與人類" },
      topics: [
        {
          id: "u2-5-1",
          code: "5.1",
          highYield: true,
          title: { en: "Seven Food Substances, Deficiency Diseases & Standard Food Tests", zh: "七類食物物質、缺乏症與標準食物試驗" },
          summary: {
            en: "Humans require **7 food substances**: carbohydrates, lipids, proteins (primary/energy-yielding), plus **vitamins, minerals, dietary fibre, and water** (protective/non-energy-yielding). Standard biochemical **food tests** are frequently tested in Paper 1 & SBA.",
            zh: "人類需要**七大食物物質**：碳水化合物、脂質、蛋白質（供能），以及**維生素、礦物質、食用纖維和水**（非供能保護物質）。標準**食物試驗**為卷一及 SBA 常考。"
          },
          table: {
            headers: [
              { en: "Food Substance", zh: "受試物質" },
              { en: "Test & Reagent", zh: "試驗與試劑" },
              { en: "Positive Result", zh: "陽性結果" },
              { en: "Key Exam Note", zh: "考試重點" }
            ],
            rows: [
              [
                { en: "**Reducing sugars** (glucose, maltose, fructose)", zh: "**還原糖**（葡萄糖、麥芽糖等）" },
                { en: "**Benedict's test**: add Benedict's solution & **boil in water bath** (~5 min)", zh: "**本立德試驗**：加本立德溶液並**隔水煮沸**" },
                { en: "Blue solution → **brick-red precipitate** (green/yellow/orange if lower conc.)", zh: "藍色溶液 → **磚紅色沉澱**（濃度越低呈綠／黃／橙）" },
                { en: "**Sucrose gives NEGATIVE result** (non-reducing sugar) unless hydrolysed by acid first.", zh: "**蔗糖屬非還原糖**，直接測試呈陰性（藍色）。" }
              ],
              [
                { en: "**Glucose** (specific)", zh: "**葡萄糖**（專一）" },
                { en: "**Clinistix paper**", zh: "**葡萄糖試紙**" },
                { en: "Pink → **purple**", zh: "粉紅色 → **紫色**" },
                { en: "Specific to glucose only (enzymatic test).", zh: "只對葡萄糖有反應。" }
              ],
              [
                { en: "**Starch**", zh: "**澱粉**" },
                { en: "**Iodine test**: add brown iodine solution", zh: "**碘液試驗**：加棕色碘液" },
                { en: "Brown → **blue-black**", zh: "棕色 → **藍黑色**" },
                { en: "No heating required.", zh: "無須加熱。" }
              ],
              [
                { en: "**Lipids**", zh: "**脂質**" },
                { en: "**Grease spot test** on filter paper (+ organic solvent control)", zh: "**油漬試驗**（加有機溶劑對照）" },
                { en: "**Translucent spot** persists after drying, disappears when dipped in organic solvent", zh: "乾後留有**半透明油漬**，浸有機溶劑後消失" },
                { en: "Water spot dries and disappears completely.", zh: "水漬乾後會完全消失。" }
              ],
              [
                { en: "**Proteins**", zh: "**蛋白質**" },
                { en: "**Albustix paper** (or Biuret test)", zh: "**蛋白試紙**（或雙縮脲試驗）" },
                { en: "Albustix: yellow → **green** (Biuret: blue → violet)", zh: "蛋白試紙：黃 → **綠**" },
                { en: "Test solution must not be strongly alkaline/acidic.", zh: "待測液不可過酸過鹼。" }
              ],
              [
                { en: "**Vitamin C**", zh: "**維生素 C**" },
                { en: "**DCPIP test**: add juice drop by drop into blue DCPIP", zh: "**DCPIP 試驗**：逐滴加入藍色 DCPIP" },
                { en: "Blue DCPIP is **decolourized** (turns colourless)", zh: "藍色 DCPIP **褪色**（變無色）" },
                { en: "**Fewer drops needed = higher Vitamin C concentration** (add slowly without shaking to avoid re-oxidation by O2).", zh: "**所需滴數越少＝維生素 C 濃度越高**；切勿大力搖晃免被氧氣重新氧化。" }
              ]
            ]
          },
          points: [
            {
              en: "**Essential Vitamins & Deficiencies**: **Vitamin A** (lipid-soluble; visual purple in retina & healthy epithelial tissues → deficiency: **night blindness**, dry cornea); **Vitamin C** (water-soluble; connective tissue/collagen synthesis & wound healing → deficiency: **scurvy** / bleeding gums); **Vitamin D** (lipid-soluble; promotes **Ca2+ & PO43- absorption** in intestine → deficiency: **rickets** in children).",
              zh: "**重要維生素**：**維生素 A**（脂溶性，視紫質及上皮健康；缺：**夜盲症**）；**維生素 C**（水溶性，合成結締組織膠原；缺：**壞血病**／牙齦出血）；**維生素 D**（脂溶性，促進腸道吸收鈣磷；缺：**佝僂病**）。"
            },
            {
              en: "**Dietary Fibre (Cellulose)**: Cannot be digested by humans (no cellulase). Adds **bulk** to food → stimulates **peristalsis** → prevents **constipation** and reduces risk of colorectal cancer.",
              zh: "**食用纖維（纖維素）**：人體不能消化，可增加食物體積刺激**腸道蠕動**，預防**便秘**及大腸癌。"
            },
            {
              en: "**Balanced Diet & Energy Requirements**: Energy needs vary with **age** (growing teenagers need more energy & protein/Ca), **sex** (males generally higher metabolic rate & muscle mass), **activity level**, and **body condition** (pregnant/breastfeeding women need extra protein, iron, calcium). Excess energy intake > expenditure → stored as fat → **obesity** (heart disease, diabetes); insufficient intake → breakdown of glycogen, then fat, then muscle protein (**starvation/anorexia**).",
              zh: "**均衡膳食與能量需求**：受**年齡**（發育期青少年需求高）、**性別**、**活動量**及**懷孕／哺乳**影響。攝入大於消耗致**肥胖**；嚴重不足先動用糖原、次動脂肪、最後分解肌肉蛋白質。"
            }
          ]
        }
      ]
    },
    {
      id: "u2-ch6",
      code: "Ch 6",
      title: { en: "Nutrition in Humans", zh: "人體的營養" },
      topics: [
        {
          id: "u2-6-1",
          code: "6.1",
          highYield: true,
          title: { en: "Human Alimentary Canal, Physical & Chemical Digestion", zh: "人體消化道、物理及化學消化" },
          summary: {
            en: "Holozoic nutrition involves five stages: **Ingestion → Digestion → Absorption → Assimilation → Egestion**. **Physical digestion** increases surface area of food for **chemical digestion** (enzymatic hydrolysis) into small, soluble, diffusible molecules.",
            zh: "動物式營養包括五步驟：**攝食 → 消化 → 吸收 → 同化 → 排遺**。**物理消化**增加食物表面積，利於**化學消化**（酶水解）轉為細小可溶分子。"
          },
          points: [
            {
              en: "**Dentition & Tooth Decay**: Four types — **incisors** (biting/cutting), **canines** (tearing), **premolars & molars** (crushing/grinding). Adult dental formula: `2123 / 2123` (32 teeth). Tooth layers: **enamel** (hardest, non-living Ca salts), **dentine** (bone-like living), **pulp cavity** (blood vessels & nerves). **Tooth decay**: plaque bacteria respire sugary food → produce **acid** → dissolves enamel & dentine → reaches pulp cavity (pain).",
              zh: "**牙齒類型與蛀牙**：門齒（切斷）、犬齒（撕裂）、前臼齒及臼齒（磨碎）；成人齒式 `2123/2123`（32顆）。牙菌膜細菌分解糖分產生**酸**溶解琺瑯質與牙本質，侵入髓腔引起牙痛。"
            },
            {
              en: "**Mouth Cavity**: Chewing (physical digestion) + saliva (**salivary amylase** catalyses starch → maltose at ~pH 7; mucus moistens food into a **bolus**). Swallowing: **epiglottis** covers trachea opening to prevent choking; food moves down oesophagus via **peristalsis** (wave-like alternating contraction of circular & longitudinal smooth muscles).",
              zh: "**口腔與食道**：咀嚼＋**唾液澱粉酶**（澱粉→麥芽糖，pH 7）；吞嚥時**會厭**覆蓋氣管防哽塞；食物藉**蠕動**（環肌與縱肌交替收縮）沿食道推進。"
            },
            {
              en: "**Stomach**: Churning (physical) + **gastric juice**: (1) **Pepsin** (protease; proteins → peptides at optimum **pH 2**); (2) **Hydrochloric acid (HCl)** — provides acidic pH 2 for pepsin & **kills most bacteria** in food; (3) **Mucus** — protects stomach wall from self-digestion by pepsin & HCl. Chyme exits via **pyloric sphincter**.",
              zh: "**胃**：攪動＋**胃液**：(1) **胃蛋白酶**（最適 pH 2，蛋白質→肽）；(2) **鹽酸（HCl）**提供酸性環境及**殺菌**；(3) **黏液**保護胃壁免受自身消化。"
            },
            {
              en: "**Duodenum (Small Intestine) — Three Digestive Juices**:\n• **Bile** (made in **liver**, stored in **gall bladder**, released via bile duct; **CONTAINS NO ENZYMES!**): (a) **Bile salts emulsify lipids** into tiny oil droplets → greatly increases **surface area** for lipase action (**physical digestion**); (b) **Alkaline (NaHCO3)** neutralizes acidic chyme from stomach & provides alkaline medium (~pH 8) for pancreatic/intestinal enzymes; (c) Bile pigments (from broken-down haemoglobin) are excreted in faeces.\n• **Pancreatic juice** (alkaline): **pancreatic amylase** (starch → maltose), **proteases / trypsin** (proteins → peptides → amino acids), **pancreatic lipase** (lipids → fatty acids + glycerol).\n• **Intestinal juice** (alkaline; **carbohydrases & proteases embedded in cell membranes of epithelial cells** of villi): **maltase** (maltose → glucose), **sucrase** (sucrose → glucose + fructose), **lactase** (lactose → glucose + galactose), **peptidases** (peptides → amino acids).",
              zh: "**十二指腸三大消化液**：\n• **膽汁**（肝臟製造、膽囊儲存，**不含任何消化酶！**）：**膽鹽乳化脂質**成微細油滴（物理消化，增表面積利脂肪酶）；鹼性中和酸性食糜並提供約 pH 8 鹼性環境。\n• **胰液**：含胰澱粉酶、蛋白酶、脂肪酶。\n• **腸液**：上皮細胞膜上的**碳水化合物酶**（麥芽糖酶、蔗糖酶、乳糖酶）及**蛋白酶**完成最後水解。"
            }
          ],
          trap: {
            en: "**Bile contains NO enzymes!** Emulsification of lipids by bile salts is **physical digestion**, NOT chemical digestion (no covalent bonds are broken — lipids remain lipids, just smaller droplets with larger surface area).",
            zh: "**膽汁不含消化酶！** 膽鹽乳化脂肪屬於**物理消化**而非化學消化（並無打斷化學鍵，只把大油滴分散為微細油滴增大表面積）。"
          }
        },
        {
          id: "u2-6-2",
          code: "6.2",
          highYield: true,
          title: { en: "Absorption in Ileum (Villi), Assimilation & Liver Functions", zh: "迴腸吸收（絨毛）、同化作用與肝臟功能" },
          summary: {
            en: "Digested food is absorbed primarily in the **ileum** via **villi** into blood capillaries (water-soluble nutrients) and **lacteals** (lipids). Absorbed blood nutrients travel via the **hepatic portal vein** to the **liver** before entering general circulation.",
            zh: "已消化食物主要在**迴腸**經**絨毛**吸收：水溶性養分入微血管，脂質入**乳糜管**。血液養分先經**肝門靜脈**送往**肝臟**處理再進入體循環。"
          },
          diagramIds: ["diag-villus-digestion"],
          points: [
            {
              en: "**Structural Adaptations of Ileum & Villi for Absorption (Classic Structure–Function Exam Question)**:\n1. **Very long (~6 m)** → provides long retention time & large surface area.\n2. Inner wall is **highly folded** with millions of finger-like **villi**, and epithelial cells possess **microvilli** (brush border) → **enormously increases surface area** for absorption.\n3. **One-cell-thick epithelium** → **short diffusion distance**.\n4. Rich network of **blood capillaries** & **lacteal** inside each villus → rapidly transports absorbed food away, **maintaining a steep concentration gradient**.\n5. Epithelial cells contain **numerous mitochondria** → provide ATP for **active transport** (glucose & amino acids).\n6. **Peristalsis** & villus movement keep food mixed and in close contact with epithelium.",
              zh: "**迴腸與絨毛適應吸收的特徵**：(1) 管長約 6 米；(2) 內壁高度摺疊、佈滿**絨毛**及上皮細胞**微絨毛** → 大幅增加吸收表面積；(3) **單層上皮細胞** → 縮短擴散距離；(4) 密佈**微血管**與**乳糜管**迅速運走養分以**維持陡峭濃度梯度**；(5) 上皮細胞具大量**線粒體**供應主動轉運能量。"
            },
            {
              en: "**Two Absorption Pathways**:\n• **Into Blood Capillaries** (via diffusion + active transport; water by osmosis): **monosaccharides (glucose), amino acids, water-soluble vitamins (B, C), minerals, water** → **hepatic portal vein** → **liver** → **hepatic vein** → vena cava → heart.\n• **Into Lacteal (Lymphatic System)**: **fatty acids & glycerol** diffuse into epithelial cells → **recombine into lipid droplets** (chylomicrons) → enter **lacteal** (with **fat-soluble vitamins A, D, E, K**) → lymph vessels → **left subclavian vein** near heart.",
              zh: "**兩條吸收途徑**：水溶性養分（單糖、氨基酸、礦物質、維生素 B/C）入**微血管 → 肝門靜脈 → 肝臟**；脂肪酸與甘油於上皮細胞內**重新合成脂質微滴**（連脂溶性維生素 A/D/E/K）進入**乳糜管 → 淋巴管 → 鎖骨下靜脈**進入血液。"
            },
            {
              en: "**Large Intestine (Colon & Rectum)**: Absorbs remaining **water, minerals, and some vitamins** (produced by colon bacteria) from undigested residue → forms semi-solid **faeces**, stored in rectum and egested through anus.",
              zh: "**大腸**：吸收剩餘**水分及礦物質**，把未消化殘渣形成糞便暫存直腸經肛門排遺。"
            },
            {
              en: "**Six Major Functions of the Liver**: (1) **Regulates blood glucose** (stores excess glucose as glycogen under insulin; breaks glycogen down under glucagon); (2) **Deamination** of excess amino acids (amino group `-NH2` converted to **urea** excreted by kidneys; remaining carbon skeleton converted to carbohydrate/fat — body CANNOT store excess amino acids!); (3) **Bile production**; (4) **Stores iron, glycogen & fat-soluble vitamins (A, D)**; (5) **Detoxification** (breaks down alcohol, drugs, toxins); (6) Produces plasma proteins (e.g. fibrinogen) & generates heat.",
              zh: "**肝臟六大功能**：調節血糖（糖原儲存與分解）、過剩氨基酸**脫氨作用**（轉為**尿素**經腎排出）、製造膽汁、儲存鐵與維生素 A/D、**解毒**（分解酒精／藥物）、合成血漿蛋白與產熱。"
            }
          ]
        }
      ]
    },
    {
      id: "u2-ch7",
      code: "Ch 7",
      title: { en: "Gas Exchange in Humans", zh: "人體的氣體交換" },
      topics: [
        {
          id: "u2-7-1",
          code: "7.1",
          highYield: true,
          title: { en: "Respiratory System, Alveolar Adaptations, Ventilation & Gas Transport", zh: "呼吸系統、氣囊適應特徵、通氣機制與氣體運輸" },
          summary: {
            en: "Gas exchange occurs by **diffusion** across the **respiratory surface** (alveoli/air sacs). **Ventilation** (breathing) changes thoracic volume and air pressure to draw fresh air in and expel stale air.",
            zh: "氣體交換藉**擴散作用**在肺內**氣囊（肺泡）**進行；**通氣（呼吸運動）**透過改變胸腔體積與氣壓令空氣進出肺部。"
          },
          diagramIds: ["diag-alveolus"],
          points: [
            {
              en: "**Airway Protection**: Nasal cavity warms, moistens & filters air (hairs + mucus). Trachea & bronchi have **C-shaped cartilage rings** (prevent collapse) and **ciliated epithelial cells + mucus-secreting cells** — mucus traps dust/bacteria; cilia beat upwards to sweep mucus to pharynx to be swallowed or coughed out.",
              zh: "**氣道保護**：鼻腔溫暖濕潤及過濾空氣；氣管與支氣管具 **C 形軟骨環**防止塌陷，內壁**黏液**黏附微粒細菌，**纖毛**向上擺動掃至咽喉吞下或咳出。"
            },
            {
              en: "**Adaptations of Air Sacs (Alveoli) for Gas Exchange**: (1) **Millions of tiny air sacs** → enormous **surface area**; (2) **One-cell-thick** alveolar wall & capillary wall → very **short diffusion distance**; (3) Covered by a thin **water film** → dissolves O2 & CO2 for diffusion; (4) Surrounded by dense **network of blood capillaries** & continuous ventilation → continuously removes O2 & brings CO2, **maintaining steep concentration gradients**.",
              zh: "**氣囊（肺泡）適應特徵**：(1) 數以百萬計 → 極大**表面積**；(2) 氣囊壁及微血管壁均為**單層細胞** → 極短擴散距離；(3) 內壁覆蓋薄**水膜**溶解氣體；(4) 密佈**微血管**及持續通氣 → 維持陡峭**濃度梯度**。"
            },
            {
              en: "**Transport of Gases in Blood**:\n• **Oxygen (O2)**: Mostly (~98%) binds **reversibly** with **haemoglobin** in RBCs to form **oxyhaemoglobin** (bright red) at high [O2] in lungs, and dissociates back into O2 + haemoglobin at low [O2] in respiring tissues.\n• **Carbon dioxide (CO2)**: Mostly (~70%) reacts with water in RBCs (catalysed by **carbonic anhydrase**) → carbonic acid → **hydrogencarbonate ions (HCO3-)** carried in **blood plasma**; ~23% bound to haemoglobin; ~7% dissolved in plasma.",
              zh: "**血液中氣體運輸**：**氧氣**主要在紅血球內與**血紅蛋白**可逆結合成**氧合血紅蛋白**（鮮紅），到低氧組織時解離釋氧；**二氧化碳**主要在紅血球經**碳酸酐酶**轉化為**碳酸氫鹽離子（HCO3-）**溶於**血漿**運輸（約 70%）。"
            },
            {
              en: "**Inhaled vs Exhaled Air**: Inhaled air: ~21% O2, ~0.04% CO2, 78% N2, variable water vapour, lower temp. Exhaled air: **~16% O2**, **~4% CO2**, 78% N2, **saturated water vapour**, **warmer (~37°C)**.",
              zh: "**吸入與呼出空氣比較**：呼出空氣 O2 由 21% 降至 **16%**、CO2 由 0.04% 升至 **4%**、水汽達飽和、溫度較高，氮氣維持 78%。"
            },
            {
              en: "**Effects of Smoking**: **Tar** (carcinogenic → lung cancer; paralyses cilia & stimulates excess mucus → chronic bronchitis; breaks down alveolar walls → **emphysema**, reducing surface area); **Nicotine** (addictive, constricts arterioles → high blood pressure & CHD); **Carbon monoxide (CO)** (binds **irreversibly/much more tightly** to haemoglobin forming carboxyhaemoglobin → lowers O2-carrying capacity).",
              zh: "**吸煙危害**：**焦油**致癌、麻痺纖毛及破壞氣囊壁致**肺氣腫**（減少氣體交換表面積）；**尼古丁**成癮並收縮血管增血壓；**一氧化碳**與血紅蛋白緊密結合降低攜氧能力。"
            }
          ],
          table: {
            headers: [
              { en: "Structure / Event", zh: "結構／事件" },
              { en: "Inhalation (Breathing In)", zh: "吸氣" },
              { en: "Exhalation (Breathing Out)", zh: "呼氣" }
            ],
            rows: [
              [
                { en: "**Intercostal muscles**", zh: "**肋間肌**" },
                { en: "**Contract** → rib cage moves **upwards and outwards**", zh: "**收縮** → 肋骨籃向**上及向外**移" },
                { en: "**Relax** → rib cage moves **downwards and inwards**", zh: "**舒張** → 肋骨籃向**下及向內**移" }
              ],
              [
                { en: "**Diaphragm muscles**", zh: "**橫膈膜肌**" },
                { en: "**Contract** → diaphragm **flattens** (moves downwards)", zh: "**收縮** → 橫膈膜**變平**（下移）" },
                { en: "**Relax** → diaphragm returns to **dome shape** (moves upwards)", zh: "**舒張** → 橫膈膜回復**拱形**（上移）" }
              ],
              [
                { en: "**Thoracic cavity volume**", zh: "**胸腔體積**" },
                { en: "**Increases** → lungs expand", zh: "**增加** → 肺部擴張" },
                { en: "**Decreases** → lungs recoil/compressed", zh: "**減少** → 肺部回縮受壓" }
              ],
              [
                { en: "**Air pressure in lungs**", zh: "**肺內氣壓**" },
                { en: "**Drops below atmospheric pressure** → air rushes **into** lungs", zh: "**低於大氣壓強** → 空氣湧**入**肺部" },
                { en: "**Rises above atmospheric pressure** → air forced **out of** lungs", zh: "**高於大氣壓強** → 空氣壓**出**肺部" }
              ]
            ]
          },
          trap: {
            en: "**Causal order matters!** Do NOT say 'air enters lungs, causing chest to expand'! Write strictly: **muscles contract → thoracic volume increases → lung pressure drops below atmospheric pressure → air is forced into lungs**.",
            zh: "**因果次序切勿倒置！** 必須寫：**肌肉收縮 → 胸腔體積增加 → 肺內氣壓低於大氣壓強 → 空氣壓入肺部**。"
          }
        }
      ]
    },
    {
      id: "u2-ch8",
      code: "Ch 8",
      title: { en: "Transport of Substances in Humans", zh: "人體內物質的轉運" },
      topics: [
        {
          id: "u2-8-1",
          code: "8.1",
          highYield: true,
          title: { en: "Blood Components, Blood Vessels, Heart & Double Circulation", zh: "血液成分、血管、心臟與雙循環" },
          summary: {
            en: "Humans have a **closed double circulatory system** (pulmonary + systemic circulation) driven by a 4-chambered muscular **heart**. Blood transports nutrients, gases, hormones, wastes, heat, and immune cells.",
            zh: "人類具由四腔室肌肉**心臟**驅動的**閉合雙循環系統**（肺循環＋體循環），負責運輸養分、氣體、激素、廢物、熱量及防禦病原體。"
          },
          diagramIds: ["diag-heart"],
          points: [
            {
              en: "**Blood Composition**: **Plasma (~55%)** (90% water + dissolved glucose, amino acids, plasma proteins, HCO3-, urea, hormones, antibodies) + **Blood Cells (~45%)**:\n• **Red Blood Cells (Erythrocytes)**: **biconcave disc shape** (increases surface-area-to-volume ratio & shortens diffusion distance); **no nucleus** when mature (more space for **haemoglobin**); flexible to squeeze through narrow capillaries; made in red bone marrow, destroyed in liver & spleen.\n• **White Blood Cells (Leucocytes)**: have nucleus, larger; **phagocytes** (lobed nucleus, engulf pathogens) & **lymphocytes** (large round nucleus, produce antibodies).\n• **Platelets**: cell fragments without nucleus; initiate **blood clotting** (convert soluble **fibrinogen** into insoluble **fibrin** mesh trapping RBCs → prevents excess blood loss & pathogen entry).",
              zh: "**血液成分**：**血漿（55%）**及**血細胞（45%）**。**紅血球**呈**雙凹圓盤狀**（大表面積體積比）、成熟時**無細胞核**以容納更多**血紅蛋白**；**白血球**（吞噬細胞及淋巴細胞）具核負責防禦；**血小板**啟動**凝血**（纖維蛋白原→不溶性纖維蛋白網）。"
            },
            {
              en: "**Double Circulation**: Blood passes through the heart **twice** in one complete circuit:\n1. **Pulmonary circulation**: Right ventricle → pulmonary artery (deoxygenated) → lungs (oxygenated) → pulmonary vein → left atrium.\n2. **Systemic circulation**: Left ventricle → aorta (oxygenated) → body tissues → venae cavae (deoxygenated) → right atrium.\n**Advantage**: Prevents mixing of oxygenated & deoxygenated blood AND allows systemic blood to be re-pressurized to **high pressure** for fast delivery to body organs while pulmonary blood flows at **lower pressure** (protecting delicate lung capillaries).",
              zh: "**雙循環**：血液完成一周經過心臟兩次（**肺循環**＋**體循環**）。優點：避免含氧血與缺氧血混合，且經肺部降壓後的血液回心再度加壓高速輸送全身，同時肺部保持低壓免損傷肺微血管。"
            },
            {
              en: "**Heart Structure & Valves**: **Left ventricular wall is thicker** than right ventricular wall because it pumps blood over a **longer distance** to the entire body (requires higher pressure), whereas the right ventricle only pumps to nearby lungs. **Septum** separates left & right sides. **Valves** ensure **unidirectional blood flow** (prevent backflow): **bicuspid/mitral valve** (left atrium–ventricle), **tricuspid valve** (right atrium–ventricle) held by **heart tendons (chordae tendineae)** preventing inversion, and **semilunar valves** at base of aorta & pulmonary artery. **Coronary arteries** supply O2 & nutrients to cardiac muscle itself.",
              zh: "**心臟結構與瓣膜**：**左心室壁較右心室厚**，因須產生更大壓力把血液泵送全身較長距離；**二尖瓣（左）**、**三尖瓣（右）**（由心腱索拉住防翻轉）及**半月瓣**確保血液**單向流動**防止倒流；**冠狀動脈**供給心肌氧氣與養分。"
            },
            {
              en: "**Tissue Fluid Formation & Lymphatic System**: At the **arterial end** of capillaries, **blood pressure (hydrostatic pressure)** is high → forces water & small dissolved substances (O2, glucose, amino acids — NOT RBCs or large plasma proteins!) out through capillary walls to form **tissue fluid** bathing cells. At the **venous end**, blood pressure drops below osmotic draw; **water potential of blood is lower** than tissue fluid (due to retained **plasma proteins**) → most water returns to capillaries by **osmosis**. Excess tissue fluid drains into **lymph capillaries** (forming **lymph**), passes through **lymph nodes** (filters pathogens via WBCs), and returns to bloodstream via **subclavian veins** (driven by skeletal muscle contraction & valves).",
              zh: "**組織液形成與淋巴系統**：微血管**動脈端高血壓**迫使水分及小分子濾出（**紅血球及大血漿蛋白不能濾出**）形成**組織液**；**靜脈端**血壓下降且因血漿蛋白保留令血液**水勢較低**，大部分水經**滲透**重回微血管；其餘進入**淋巴管**（經淋巴結過濾）最終回流鎖骨下靜脈。"
            }
          ],
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Artery", zh: "動脈" },
              { en: "Vein", zh: "靜脈" },
              { en: "Capillary", zh: "微血管" }
            ],
            rows: [
              [
                { en: "**Direction of flow**", zh: "**血流方向**" },
                { en: "**Away from** heart", zh: "**離開**心臟" },
                { en: "**Towards** heart", zh: "**返回**心臟" },
                { en: "Arteriole → venule (exchange site)", zh: "連接小動脈與小靜脈（交換場所）" }
              ],
              [
                { en: "**Wall thickness & elasticity**", zh: "**管壁厚度與彈性**" },
                { en: "**Thick** muscular & **elastic** wall (withstands high blood pressure & recoils to maintain continuous flow)", zh: "**厚**肌肉層及**彈性纖維**（承受高血壓並彈性回縮維持連續血流）" },
                { en: "**Thinner** wall, less muscle & elastic tissue", zh: "管壁**較薄**，肌肉及彈性纖維較少" },
                { en: "**One-cell-thick** endothelium (short diffusion distance)", zh: "**單層細胞厚**（縮短擴散距離）" }
              ],
              [
                { en: "**Lumen size**", zh: "**管腔大小**" },
                { en: "Relatively narrow", zh: "相對較窄" },
                { en: "**Large** (reduces resistance to low-pressure flow)", zh: "**較大**（減少低壓血流阻力）" },
                { en: "Very narrow (RBCs pass single file, slowing flow for exchange)", zh: "極窄（紅血球單行慢流利於交換）" }
              ],
              [
                { en: "**Blood pressure & Valves**", zh: "**血壓與瓣膜**" },
                { en: "**High**, pulsatile; **no valves** (except semilunar at heart)", zh: "**高壓**有脈搏；**無瓣膜**（心臟出口除外）" },
                { en: "**Low**, steady; **valves present** to prevent backflow", zh: "**低壓**平穩；**具瓣膜**防止倒流" },
                { en: "Drops from high to low; no valves; huge total cross-sectional area → slowest blood flow", zh: "總橫切面積最大故流速最慢；無瓣膜" }
              ]
            ]
          },
          trap: {
            en: "Do NOT define arteries as 'carrying oxygenated blood'! **Pulmonary artery** carries **deoxygenated blood** and **pulmonary vein** carries **oxygenated blood** (same for umbilical artery/vein). Define by **direction relative to the heart**!",
            zh: "切勿把動脈定義為「運送含氧血」！**肺動脈**運缺氧血、**肺靜脈**運含氧血，必須以**相對心臟的血流方向**定義！"
          }
        }
      ]
    },
    {
      id: "u2-ch9",
      code: "Ch 9",
      title: { en: "Nutrition and Gas Exchange in Plants", zh: "植物的營養與氣體交換" },
      topics: [
        {
          id: "u2-9-1",
          code: "9.1",
          highYield: true,
          title: { en: "Leaf Adaptations, Gas Exchange & Compensation Point", zh: "葉片適應特徵、氣體交換與補償點" },
          summary: {
            en: "Plants are **autotrophs** synthesizing organic food via photosynthesis. Leaves are structurally specialized for maximum light absorption and efficient gas exchange through **stomata**; net gas exchange reverses between day and night.",
            zh: "植物屬**自養生物**，透過光合作用製造有機食物。葉片結構高度適應光能吸收與經**氣孔**進行氣體交換，日夜淨氣體交換方向相反。"
          },
          diagramIds: ["diag-leaf-transpiration"],
          points: [
            {
              en: "**Adaptations of Dicot Leaf for Photosynthesis & Gas Exchange**:\n• **Broad & flat lamina**: large surface area to absorb maximum sunlight & CO2.\n• **Thin leaf blade**: short diffusion distance for gases & light penetrates to all mesophyll layers.\n• **Waxy cuticle**: waterproof (reduces water loss) & transparent (allows light through).\n• **Upper epidermis**: transparent, no chloroplasts (except guard cells) → lets sunlight reach palisade mesophyll.\n• **Palisade mesophyll**: tightly packed cylindrical cells near upper surface packed with **abundant chloroplasts** → maximizes light absorption.\n• **Spongy mesophyll**: loosely packed with **numerous large air spaces** & moist surfaces → allows rapid diffusion of CO2 & O2 throughout leaf.\n• **Stomata** (mostly on lower epidermis in terrestrial dicots): regulate gas exchange & minimize excessive transpiration; opened/closed by **guard cells** (which contain chloroplasts & unevenly thickened inner cell walls).\n• **Vascular bundle (veins)**: **xylem** brings water & minerals; **phloem** exports sucrose; provides mechanical support.",
              zh: "**雙子葉植物葉片適應特徵**：扁平寬闊（大受光面）；葉薄（短擴散距離）；**蠟質角質層**（防水且透明）；**柵狀葉肉**位於上層排列緊密且含**大量葉綠體**；**海綿葉肉**具**大量氣室**利氣體迅速擴散；**氣孔**多在下表皮由具葉綠體的**保衛細胞**控開閉；**葉脈**（木質部輸水、韌皮部輸糖兼支持）。"
            },
            {
              en: "**Net Gas Exchange in Light vs Darkness & Compensation Point**:\n• **In bright light**: Rate of photosynthesis > rate of respiration → **net uptake of CO2** and **net release of O2**.\n• **In darkness**: Photosynthesis stops; only respiration continues → **net uptake of O2** and **net release of CO2**.\n• **Compensation point** (dim light, e.g. dawn/dusk): **Rate of photosynthesis = rate of respiration** → **zero net exchange** of CO2 and O2 with atmosphere (all O2 made is used in respiration; all CO2 made is used in photosynthesis).",
              zh: "**光照與黑暗淨氣體交換及補償點**：強光下光合速率 > 呼吸速率 → **淨吸收 CO2、淨釋放 O2**；黑暗中只行呼吸 → **淨吸 O2、淨放 CO2**；**補償點**（微光下）光合速率＝呼吸速率，與外界**無淨氣體交換**。"
            },
            {
              en: "**Hydrogencarbonate Indicator Colour Scale (High-Yield Experiment)**: Atmospheric CO2 (~0.04%) = **Red**; Higher CO2 (darkness / respiration > photosynthesis) = **Yellow**; Lower CO2 (bright light / photosynthesis > respiration) = **Purple**.",
              zh: "**碳酸氫鹽指示劑顏色變化（常考實驗）**：正常大氣 CO2＝**紅色**；CO2 升高（黑暗／淨釋 CO2）＝**黃色**；CO2 降低（強光／淨吸 CO2）＝**紫色**。"
            }
          ]
        }
      ]
    },
    {
      id: "u2-ch10",
      code: "Ch 10",
      title: { en: "Transpiration, Transport and Support in Plants", zh: "植物的蒸騰、轉運與支持" },
      topics: [
        {
          id: "u2-10-1",
          code: "10.1",
          highYield: true,
          title: { en: "Transpiration, Potometer, Factors & Water Transport Pathway", zh: "蒸騰作用、蒸騰計、環境因素與水分運輸途徑" },
          summary: {
            en: "**Transpiration** is the loss of water vapour from aerial parts of plants (mainly through stomata). It creates **transpiration pull**, the primary driving force drawing water & minerals upward through the **xylem**.",
            zh: "**蒸騰作用**是植物地上部分（主要經氣孔）散失水蒸氣的過程，產生**蒸騰拉力**，驅動水分與礦物質沿**木質部**向上運輸。"
          },
          points: [
            {
              en: "**Process & Pathway of Water Movement**: (1) Water evaporates from moist cell walls of mesophyll cells into air spaces → diffuses out through stomata down a **concentration gradient of water vapour**; (2) Mesophyll cells lose water → **water potential drops** → draws water from adjacent mesophyll cells & **xylem vessels** by **osmosis**; (3) This creates **transpiration pull** (tension) drawing a continuous unbroken column of water up xylem vessels (maintained by **cohesion** between water molecules & **adhesion** to xylem walls); (4) Root xylem water potential drops → water moves across root cortex cells by osmosis → **root hair cells** absorb soil water by **osmosis** (soil water has higher Ψ than root hair cell sap).",
              zh: "**水分運輸全路徑**：葉肉細胞表面水分蒸發至氣室經氣孔擴散散失 → 葉肉細胞**水勢下降** → 藉滲透由鄰近細胞及**木質部**吸水 → 產生**蒸騰拉力**（藉水分子**內聚力**及與管壁**附著力**形成連續水柱）→ 根部木質部水勢下降 → 水經根皮層滲透 → **根毛細胞**藉**滲透作用**由高水勢土壤吸水。"
            },
            {
              en: "**Significance of Transpiration**: (1) Generates **transpiration pull** for water & mineral transport up the plant; (2) **Cooling effect** (evaporation absorbs latent heat, preventing leaf overheating in strong sunlight); (3) Facilitates absorption of water by roots.",
              zh: "**蒸騰作用三大意義**：產生**蒸騰拉力**運輸水分與礦物質、**冷卻葉片**（汽化吸熱防過熱）、促進根部吸水。"
            },
            {
              en: "**Environmental Factors Affecting Transpiration Rate**:\n• **Light intensity ↑**: Stomata open wider for CO2 uptake (larger cross-sectional area for water vapour diffusion) + raises leaf temp → rate **↑**.\n• **Temperature ↑**: Higher evaporation rate & faster diffusion + lowers relative humidity → rate **↑**.\n• **Air movement (wind) ↑**: Blows away humid air shell around leaf → maintains **steeper water vapour concentration gradient** → rate **↑**.\n• **Relative humidity ↑**: Decreases water vapour concentration gradient between air spaces and outside air → rate **↓**.",
              zh: "**影響蒸騰速率四大因素**：**光照↑**（氣孔張開＋升溫）→ 速率↑；**溫度↑**（蒸發及擴散加快）→ 速率↑；**空氣流動↑**（吹走濕氣維持陡峭濃度梯度）→ 速率↑；**相對濕度↑**（減小水汽濃度梯度）→ 速率↓。"
            },
            {
              en: "**Bubble Potometer Precautions**: Cut leafy shoot **under water** (prevents air bubbles blocking xylem vessels); seal joints with Vaseline (airtight). Note: Bubble potometer measures **rate of water uptake**, which only approximately equals transpiration rate (a tiny fraction ~1–2% is used in photosynthesis & cell growth). Weight potometer (with oil layer on water surface to prevent direct evaporation) measures actual transpiration water loss.",
              zh: "**氣泡蒸騰計注意事項**：須在**水底斜切**枝條（防氣泡阻塞木質部）；接口塗凡士林防漏。氣泡蒸騰計實測**吸水速率**（極小部分用於光合及生長）；重量蒸騰計（水面加油層防蒸發）才直測蒸騰失水。"
            }
          ]
        },
        {
          id: "u2-10-2",
          code: "10.2",
          highYield: true,
          title: { en: "Xylem vs Phloem, Vascular Distribution, Translocation & Support", zh: "木質部與韌皮部、維管束分布、輸導與植物支持" },
          summary: {
            en: "**Xylem** transports water & minerals upward (passive) and provides mechanical support; **phloem** translocates organic nutrients (mainly **sucrose** & amino acids) bidirectionally from sources to sinks (active process).",
            zh: "**木質部**向上運輸水分礦物質並提供支持；**韌皮部**雙向輸導有機養分（主要為**蔗糖**及氨基酸），屬消耗能量的主動過程。"
          },
          table: {
            headers: [
              { en: "Feature", zh: "比較項目" },
              { en: "Xylem Vessels", zh: "木質導管（木質部）" },
              { en: "Phloem (Sieve Tubes & Companion Cells)", zh: "韌皮部（篩管與伴細胞）" }
            ],
            rows: [
              [
                { en: "**Living or dead cells?**", zh: "**活／死細胞**" },
                { en: "**Dead, hollow** cells with no cytoplasm or nucleus (low resistance to water flow)", zh: "**死細胞**、中空無細胞質（減低水流阻力）" },
                { en: "**Living** cells: sieve tube elements lack nucleus (more space); **companion cells** have nucleus & abundant **mitochondria** to supply ATP", zh: "**活細胞**：篩管無核；**伴細胞**具核與大量**線粒體**供應能量" }
              ],
              [
                { en: "**End walls & Cell wall**", zh: "**端壁與細胞壁**" },
                { en: "End walls broken down (continuous tube); walls thickened with **lignin** (waterproof, rigid, prevents collapse under tension)", zh: "端壁消失成連續管道；管壁具**木質素**加厚（防水堅硬，防止受張力塌陷）" },
                { en: "Perforated end walls (**sieve plates**); cellulose cell walls (no lignin)", zh: "端壁具小孔（**篩板**）；纖維素壁（無木質素）" }
              ],
              [
                { en: "**Substances & Direction**", zh: "**運輸物質與方向**" },
                { en: "Water & dissolved minerals; **unidirectional (upwards only)**", zh: "水及礦物質；**單向（只向上）**" },
                { en: "Organic nutrients (**sucrose**, amino acids); **bidirectional** (up & down from leaves to growing tips/roots/fruits)", zh: "有機養分（**蔗糖**、氨基酸）；**雙向**（由葉片往生長點／根／果實）" }
              ]
            ]
          },
          points: [
            {
              en: "**Vascular Bundle Arrangement (Dicot)**:\n• **Root**: Central star-shaped **xylem** with **phloem** tucked between the arms (withstands pulling forces).\n• **Stem**: Arranged in a **ring** near periphery — **xylem inside**, **phloem outside**, separated by cambium (resists bending).\n• **Leaf (Midrib/Vein)**: **Xylem on upper side**, **phloem on lower side**.",
              zh: "**雙子葉植物維管束排列**：**根**—中央星形木質部，韌皮部嵌於臂間；**莖**—外圍呈環狀，**木質部在內、韌皮部在外**；**葉**—**木質部在上、韌皮部在下**。"
            },
            {
              en: "**Support in Plants**: (1) **Turgidity of thin-walled parenchyma cells** (primary support in **herbaceous plants** & young seedlings — cells absorb water, press against one another; lose water → wilt); (2) **Rigidity of thick-walled lignified cells** (**xylem vessels** in **woody plants** — remains upright even if water is scarce).",
              zh: "**植物支持方式**：(1) **薄壁細胞膨壓**（**草本植物**及幼苗主要支持，失水即萎蔫）；(2) **木質化厚壁細胞**（**木本植物**的木質導管，缺水仍可直立）。"
            }
          ]
        }
      ]
    }
  ]
});
