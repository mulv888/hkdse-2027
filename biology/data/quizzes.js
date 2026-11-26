/* ==========================================================================
   HKDSE Biology Exam-Style Bilingual Practice Quiz Bank (All 9 Units)
   36 High-Yield DSE MCQs with HKEAA Marking Explanations
   ========================================================================== */
window.BIO_QUIZZES = [
  // Unit 1
  {
    id: "q-u1-1", unit: "u1",
    q: { en: "Which of the following organelles is present in BOTH prokaryotic bacteria and eukaryotic human cells?", zh: "下列哪種細胞器同時存在於原核細菌及真核人體細胞？" },
    options: [
      { en: "Mitochondrion", zh: "線粒體" },
      { en: "Rough endoplasmic reticulum", zh: "粗糙內質網" },
      { en: "Ribosome", zh: "核糖體" },
      { en: "Nuclear membrane", zh: "核膜" }
    ],
    ans: 2,
    exp: { en: "**Ribosomes** are non-membrane-bound organelles required for protein synthesis, so they occur in BOTH prokaryotes (70S) and eukaryotes (80S). Prokaryotes lack a nuclear membrane, mitochondria, and ER.", zh: "**核糖體**屬無膜細胞器，同時存在於原核與真核細胞以合成蛋白質；原核細胞缺乏核膜、線粒體及內質網。" }
  },
  {
    id: "q-u1-2", unit: "u1",
    q: { en: "Fresh potato strips placed in a 15% sucrose solution decrease in mass after 1 hour. Which explanation uses accurate HKDSE phrasing?", zh: "新鮮馬鈴薯條浸於 15% 蔗糖溶液一小時後質量減少。下列哪項解釋最符合 HKDSE 標準措辭？" },
    options: [
      { en: "Sucrose molecules enter the potato cells by osmosis.", zh: "蔗糖分子藉滲透進入馬鈴薯細胞。" },
      { en: "The sucrose solution has a lower water potential than the potato cells, so there is a net movement of water out of the cells by osmosis.", zh: "蔗糖溶液水勢低於馬鈴薯細胞，故水分子藉滲透淨移出細胞。" },
      { en: "The potato cells burst due to plasmolysis.", zh: "馬鈴薯細胞因質壁分離而脹破。" },
      { en: "Water is pumped out of the cells by active transport.", zh: "水分藉主動轉運泵出細胞。" }
    ],
    ans: 1,
    exp: { en: "Osmosis is strictly the **net movement of water molecules** from **higher water potential** (potato cells) to **lower water potential** (15% sucrose solution) across a differentially permeable membrane.", zh: "滲透必為**水分子**由**高水勢**（馬鈴薯細胞）往**低水勢**（蔗糖液）的淨移動。" }
  },
  {
    id: "q-u1-3", unit: "u1",
    q: { en: "At 0°C, an enzyme-catalysed reaction proceeds very slowly. When the same mixture is warmed to 37°C, the reaction rate rises rapidly. Why?", zh: "某酶促反應在 0°C 時極慢，回溫至 37°C 後速率急升，原因為何？" },
    options: [
      { en: "Denatured enzymes refold at 37°C.", zh: "已變性的酶在 37°C 重新摺疊。" },
      { en: "Low temperature only makes enzymes inactive due to low kinetic energy; warming increases effective collision frequency.", zh: "低溫僅因動能低令酶不活躍而非變性；升溫增加有效碰撞頻率。" },
      { en: "More enzyme molecules are synthesized at 37°C.", zh: "37°C 時合成了更多酶分子。" },
      { en: "Activation energy becomes zero at 37°C.", zh: "37°C 時活化能降為零。" }
    ],
    ans: 1,
    exp: { en: "Low temperature does **NOT denature** enzymes — it only renders them **inactive** because molecules have low kinetic energy. Raising temp increases KE and frequency of effective collisions.", zh: "低溫**不會令酶變性**，只令分子動能低而呈不活躍；升溫後碰撞頻率上升即恢復高活性。" }
  },
  {
    id: "q-u1-4", unit: "u1",
    q: { en: "How can competitive enzyme inhibition be distinguished experimentally from non-competitive inhibition?", zh: "在實驗上如何區分競爭性抑制與非競爭性抑制？" },
    options: [
      { en: "Raising substrate concentration overcomes competitive inhibition to reach the same Vmax, but cannot overcome non-competitive inhibition.", zh: "提高受質濃度可克服競爭性抑制並達至相同最大速率，但無法克服非競爭性抑制。" },
      { en: "Non-competitive inhibitors bind directly to the active site.", zh: "非競爭性抑制劑直接結合於活性部位。" },
      { en: "Competitive inhibition is always irreversible.", zh: "競爭性抑制必為不可逆。" },
      { en: "Lowering temperature overcomes non-competitive inhibition.", zh: "降低溫度可克服非競爭性抑制。" }
    ],
    ans: 0,
    exp: { en: "A competitive inhibitor competes with substrate for the active site, so excess substrate outcompetes it (same Vmax). A non-competitive inhibitor distorts the active site from another binding site, permanently lowering Vmax.", zh: "競爭性抑制劑與受質爭奪活性部位，高受質濃度可克服之；非競爭性抑制劑改變活性部位形狀，無法靠加受質克服。" }
  },

  // Unit 2
  {
    id: "q-u2-1", unit: "u2",
    q: { en: "A food sample gives a negative (blue) result in Benedict's test, a negative (brown) result in iodine test, and turns Albustix paper green. Which substance is definitely present?", zh: "某食物樣本在本立德試驗呈藍色、碘液試驗呈棕色、令蛋白試紙變綠。樣本必含哪種物質？" },
    options: [
      { en: "Glucose", zh: "葡萄糖" },
      { en: "Starch", zh: "澱粉" },
      { en: "Protein", zh: "蛋白質" },
      { en: "Vitamin C", zh: "維生素 C" }
    ],
    ans: 2,
    exp: { en: "Albustix paper turning from yellow to **green** indicates **protein**. Blue Benedict's = no reducing sugar; brown iodine = no starch (sucrose could still be present, as it is non-reducing!).", zh: "蛋白試紙由黃變**綠**代表含**蛋白質**；本立德藍＝無還原糖；碘液棕＝無澱粉。" }
  },
  {
    id: "q-u2-2", unit: "u2",
    q: { en: "Which statement about human bile is CORRECT?", zh: "關於人體膽汁的敘述，何者正確？" },
    options: [
      { en: "Bile is synthesized in the gall bladder and contains lipase.", zh: "膽汁由膽囊製造並含脂肪酶。" },
      { en: "Bile contains no enzymes; bile salts emulsify lipids into tiny droplets to increase surface area for lipase.", zh: "膽汁不含酶；膽鹽把脂質乳化為微細油滴以增大脂肪酶作用表面積。" },
      { en: "Bile hydrolyses lipids chemically into fatty acids and glycerol.", zh: "膽汁把脂質化學水解成脂肪酸及甘油。" },
      { en: "Bile provides an acidic medium in the duodenum.", zh: "膽汁在十二指腸提供酸性環境。" }
    ],
    ans: 1,
    exp: { en: "Bile is made in the **liver**, stored in the gall bladder, and **contains NO enzymes**. Bile salts perform **emulsification** (physical digestion), and NaHCO3 neutralizes acidic chyme.", zh: "膽汁由**肝臟**製造、**不含任何酶**，膽鹽僅進行物理**乳化作用**並以鹼性中和胃酸。" }
  },
  {
    id: "q-u2-3", unit: "u2",
    q: { en: "During inhalation (breathing in), which sequence of events occurs?", zh: "吸氣時以下哪個事件次序正確？" },
    options: [
      { en: "Air enters lungs → thoracic volume increases → diaphragm contracts", zh: "空氣入肺 → 胸腔體積增 → 橫膈膜收縮" },
      { en: "Intercostal muscles & diaphragm contract → thoracic volume increases → lung air pressure drops below atmospheric pressure → air rushes in", zh: "肋間肌及橫膈膜收縮 → 胸腔體積增 → 肺內氣壓低於大氣壓 → 空氣湧入" },
      { en: "Intercostal muscles relax → rib cage moves upwards → lung pressure increases", zh: "肋間肌舒張 → 肋骨籃上升 → 肺壓上升" },
      { en: "Diaphragm becomes dome-shaped → thoracic volume increases", zh: "橫膈膜呈拱形 → 胸腔體積增" }
    ],
    ans: 1,
    exp: { en: "Muscle contraction is the cause: intercostal muscles & diaphragm **contract** → rib cage moves up/out & diaphragm flattens → thoracic volume **increases** → lung pressure **drops below atmospheric pressure** → air enters.", zh: "肌肉收縮為因：肋間肌與橫膈膜收縮 → 胸腔體積增 → 肺壓低於大氣壓 → 空氣壓入。" }
  },
  {
    id: "q-u2-4", unit: "u2",
    q: { en: "Why does the left ventricle have a much thicker muscular wall than the right ventricle?", zh: "為何左心室的肌肉壁較右心室厚得多？" },
    options: [
      { en: "It holds a much larger volume of blood per beat.", zh: "它每次搏動容納較多血液。" },
      { en: "It pumps blood at higher pressure over a much longer distance to the entire body.", zh: "它須產生更高血壓把血液泵送至較長距離的全身各處。" },
      { en: "It receives blood directly from the aorta.", zh: "它直接接收來自主動脈的血液。" },
      { en: "It pumps oxygenated blood which is denser than deoxygenated blood.", zh: "含氧血密度高於缺氧血。" }
    ],
    ans: 1,
    exp: { en: "Both ventricles pump the **same volume** of blood per beat! The left ventricle has thicker muscle solely to generate **higher blood pressure** to pump blood a **longer distance** around the systemic circulation.", zh: "左右心室每次泵出**相同體積**血液；左心室壁較厚只為產生**更大壓力**以推送血液走更長全身路徑。" }
  },
  {
    id: "q-u2-5", unit: "u2",
    q: { en: "Which environmental change DECREASES the rate of transpiration in a potted dicot plant?", zh: "下列哪項環境改變會令盆栽植物的蒸騰速率下降？" },
    options: [
      { en: "Increasing light intensity", zh: "增加光照強度" },
      { en: "Increasing wind speed", zh: "增加風速" },
      { en: "Increasing relative humidity", zh: "增加相對濕度" },
      { en: "Increasing air temperature", zh: "升高氣溫" }
    ],
    ans: 2,
    exp: { en: "Higher **relative humidity** reduces the **water vapour concentration gradient** between the leaf air spaces and the surrounding air, slowing diffusion of water vapour out of stomata.", zh: "較高**相對濕度**減小葉片氣室與外界之間的**水汽濃度梯度**，減慢蒸騰。" }
  },

  // Unit 3
  {
    id: "q-u3-1", unit: "u3",
    q: { en: "During which stage of meiosis does crossing over between non-sister chromatids occur?", zh: "非姊妹染色單體之間的互換（crossing over）發生於減數分裂哪一時期？" },
    options: [
      { en: "Interphase", zh: "間期" },
      { en: "Prophase I", zh: "前期 I" },
      { en: "Metaphase II", zh: "中期 II" },
      { en: "Anaphase I", zh: "後期 I" }
    ],
    ans: 1,
    exp: { en: "In **Prophase I**, homologous chromosomes pair up (synapsis) and **crossing over** exchanges genetic segments between non-sister chromatids, generating new allele combinations.", zh: "在**前期 I** 同源染色體配對（聯會）並發生**互換**，產生新等位基因組合。" }
  },
  {
    id: "q-u3-2", unit: "u3",
    q: { en: "Why does the dry mass of a germinating bean seed initially DECREASE during the first few days in moist soil?", zh: "豆類種子在濕泥萌發首數天內，為何其乾重反而下降？" },
    options: [
      { en: "Water evaporates from the seed coat.", zh: "水分從種皮蒸發。" },
      { en: "Stored organic food is oxidized in respiration to release energy before green leaves develop for photosynthesis.", zh: "長出綠葉行光合作用前，儲藏有機養分經呼吸作用氧化消耗。" },
      { en: "Minerals leach out into the soil.", zh: "礦物質流失至土壤。" },
      { en: "Cell division destroys organic matter.", zh: "細胞分裂消耗有機物。" }
    ],
    ans: 1,
    exp: { en: "Before green leaves unfold, no photosynthesis occurs while stored starch/lipids are respired into CO2 & H2O to provide ATP for growth → dry mass decreases.", zh: "出葉前無法進行光合作用，僅靠呼吸作用消耗儲藏養分釋放能量，故乾重減少。" }
  },
  {
    id: "q-u3-3", unit: "u3",
    q: { en: "When a person shifts focus from a distant mountain to reading a textbook held close to the eyes, what happens to the ciliary muscles and suspensory ligaments?", zh: "當眼睛由遠望山景轉為近看書本時，睫狀肌與懸韌帶如何變化？" },
    options: [
      { en: "Ciliary muscles contract; suspensory ligaments slacken; lens becomes thicker (more convex).", zh: "睫狀肌收縮；懸韌帶鬆弛；晶體變厚（更凸）。" },
      { en: "Ciliary muscles relax; suspensory ligaments tighten; lens becomes thicker.", zh: "睫狀肌舒張；懸韌帶拉緊；晶體變厚。" },
      { en: "Ciliary muscles contract; suspensory ligaments tighten; lens becomes thinner.", zh: "睫狀肌收縮；懸韌帶拉緊；晶體變薄。" },
      { en: "Ciliary muscles relax; suspensory ligaments slacken; lens becomes thinner.", zh: "睫狀肌舒張；懸韌帶鬆弛；晶體變薄。" }
    ],
    ans: 0,
    exp: { en: "For **near objects**: **ciliary muscles contract** → ring narrows → **suspensory ligaments slacken** → elastic lens bulges **thicker (more convex)** to refract diverging light rays more strongly.", zh: "看近物：**睫狀肌收縮 → 懸韌帶鬆弛 → 晶體變厚（更凸）**增強折射。" }
  },
  {
    id: "q-u3-4", unit: "u3",
    q: { en: "Why do shoots show positive phototropism while roots show negative phototropism under unilateral light?", zh: "為何在單側光下莖呈正向光性，而根呈負向光性？" },
    options: [
      { en: "Auxin moves to the illuminated side in roots.", zh: "在根部生長素移向向光側。" },
      { en: "Higher auxin concentration on the shaded side stimulates shoot elongation but INHIBITS root elongation.", zh: "背光側較高濃度的生長素促進莖細胞伸長，卻抑制根細胞伸長。" },
      { en: "Roots do not respond to auxin.", zh: "根對生長素沒有反應。" },
      { en: "Light destroys auxin in roots only.", zh: "光線只破壞根內的生長素。" }
    ],
    ans: 1,
    exp: { en: "Auxin accumulates on the **shaded side** in both shoots and roots. Because **roots are much more sensitive to auxin**, that higher concentration **inhibits** root cell elongation while **stimulating** shoot elongation!", zh: "生長素均聚於背光側，但**根對生長素遠較莖敏感**，同一高濃度促進莖伸長卻**抑制根伸長**！" }
  },
  {
    id: "q-u3-5", unit: "u3",
    q: { en: "Why must Type 1 diabetic patients receive insulin by injection rather than taking insulin pills orally?", zh: "為何一型糖尿病患者須注射胰島素而不能口服？" },
    options: [
      { en: "Insulin is insoluble in stomach acid.", zh: "胰島素不溶於胃酸。" },
      { en: "Insulin is a protein and would be digested by proteases in the alimentary canal before absorption.", zh: "胰島素屬蛋白質，口服會被消化道蛋白酶分解失效。" },
      { en: "Insulin destroys intestinal villi.", zh: "胰島素會破壞小腸絨毛。" },
      { en: "Insulin only acts on skeletal muscles, not the liver.", zh: "胰島素只作用於骨骼肌。" }
    ],
    ans: 1,
    exp: { en: "**Insulin is a protein hormone**. If swallowed, proteases (pepsin, trypsin, peptidases) in the stomach & small intestine would hydrolyse it into amino acids, destroying its hormonal function.", zh: "**胰島素屬蛋白質激素**，口服會在胃及小腸被蛋白酶水解為氨基酸而喪失藥效。" }
  },

  // Unit 4
  {
    id: "q-u4-1", unit: "u4",
    q: { en: "In waterlogged, poorly aerated farm soil, nitrate content drops rapidly. Which bacteria are responsible?", zh: "在積水缺氧的農田土壤中硝酸鹽含量急降，主因是哪類細菌活動？" },
    options: [
      { en: "Nitrogen-fixing bacteria", zh: "固氮細菌" },
      { en: "Nitrifying bacteria", zh: "硝化細菌" },
      { en: "Denitrifying bacteria", zh: "反硝化細菌" },
      { en: "Putrefying bacteria", zh: "腐敗（氨化）細菌" }
    ],
    ans: 2,
    exp: { en: "**Denitrifying bacteria** are **anaerobic** — in waterlogged (oxygen-poor) soil they convert soil nitrates (NO3-) back into atmospheric N2 gas, lowering soil fertility.", zh: "**反硝化細菌**於缺氧積水環境把硝酸鹽還原成氮氣逸失，令土壤變貧瘠。" }
  },
  {
    id: "q-u4-2", unit: "u4",
    q: { en: "During photosynthesis, if light is suddenly turned OFF while CO2 supply continues, what happens immediately to 3-C (GP) and 5-C (RuBP) levels in the stroma?", zh: "光合作用進行期間若突然關燈但繼續供應 CO2，基質內三碳化合物（GP）及五碳化合物（RuBP）濃度會即時如何變化？" },
    options: [
      { en: "3-C increases; 5-C decreases.", zh: "3-C 上升；5-C 下降。" },
      { en: "3-C decreases; 5-C increases.", zh: "3-C 下降；5-C 上升。" },
      { en: "Both increase immediately.", zh: "兩者同時上升。" },
      { en: "Both decrease immediately.", zh: "兩者同時下降。" }
    ],
    ans: 0,
    exp: { en: "Without light, photochemical reactions stop producing **ATP and NADPH**. Thus 3-C (GP) CANNOT be reduced to triose phosphate (so **3-C accumulates**), and **5-C (RuBP)** cannot be regenerated while still being consumed by CO2 fixation (so **5-C drops**)!", zh: "停光後缺乏 **ATP 及 NADPH**，3-C 無法還原而**累積上升**，同時 5-C 繼續固碳但無法再生故**下降**。" }
  },
  {
    id: "q-u4-3", unit: "u4",
    q: { en: "In aerobic respiration, what is the exact role of oxygen?", zh: "在需氧呼吸中，氧氣的準確角色為何？" },
    options: [
      { en: "It splits glucose directly during glycolysis.", zh: "在糖酵解直接分解葡萄糖。" },
      { en: "It combines with carbon to produce CO2 in the Krebs cycle.", zh: "在克雷伯氏循環與碳結合產生 CO2。" },
      { en: "It acts as the final electron and hydrogen acceptor in oxidative phosphorylation to form water.", zh: "在氧化磷酸化作為最終電子及氫受體，結合生成水。" },
      { en: "It converts lactic acid to ethanol.", zh: "把乳酸轉為乙醇。" }
    ],
    ans: 2,
    exp: { en: "In **oxidative phosphorylation** on mitochondrial cristae, **O2 acts as the final electron and hydrogen acceptor** forming H2O. CO2 comes from the carbon and oxygen atoms of glucose/pyruvate in Link reaction & Krebs cycle.", zh: "氧氣於線粒體嵴的**氧化磷酸化**中作**最終電子及氫受體**生成 H2O。" }
  },
  {
    id: "q-u4-4", unit: "u4",
    q: { en: "Why are antibiotics like penicillin ineffective in treating influenza?", zh: "為何青黴素等抗生素對治療流行性感冒無效？" },
    options: [
      { en: "Influenza bacteria have evolved thick capsules.", zh: "流感細菌演化出厚莢膜。" },
      { en: "Influenza is caused by a virus, which is non-cellular and lacks bacterial cell walls and ribosomes targeted by antibiotics.", zh: "流感由病毒引起，病毒非細胞且無抗生素針對的細菌細胞壁及核糖體。" },
      { en: "Antibiotics only boost passive immunity.", zh: "抗生素只增強被動免疫。" },
      { en: "Influenza infects only red blood cells.", zh: "流感只感染紅血球。" }
    ],
    ans: 1,
    exp: { en: "Antibiotics target bacterial structures (such as **peptidoglycan cell wall synthesis**). **Viruses** are non-cellular and hijack host machinery, so antibiotics have NO target to act upon.", zh: "抗生素針對細菌細胞壁合成等過程；**病毒無細胞壁及獨立代謝**，故抗生素無效。" }
  },
  {
    id: "q-u4-5", unit: "u4",
    q: { en: "A newborn baby receives ready-made antibodies from mother's breast milk. What type of immunity is this?", zh: "初生嬰兒從母乳獲得現成抗體，屬於哪類免疫？" },
    options: [
      { en: "Natural active immunity", zh: "天然主動免疫" },
      { en: "Artificial active immunity", zh: "人工主動免疫" },
      { en: "Natural passive immunity", zh: "天然被動免疫" },
      { en: "Artificial passive immunity", zh: "人工被動免疫" }
    ],
    ans: 2,
    exp: { en: "Because ready-made antibodies are transferred **naturally** (via breast milk or placenta) without the baby's own lymphocytes making them (no memory cells), it is **natural passive immunity**.", zh: "非嬰兒自身淋巴細胞製造（無記憶細胞），且循自然途徑由母體獲得，故屬**天然被動免疫**。" }
  },

  // Unit 5
  {
    id: "q-u5-1", unit: "u5",
    q: { en: "A man of blood group A (IAi) marries a woman of blood group B (IBi). What is the probability that their next child has blood group O?", zh: "血型 A 型（IAi）男子與 B 型（IBi）女子結婚，下一胎為 O 型血的機率是多少？" },
    options: [
      { en: "0%", zh: "0%" },
      { en: "25%", zh: "25%" },
      { en: "50%", zh: "50%" },
      { en: "75%", zh: "75%" }
    ],
    ans: 1,
    exp: { en: "Cross `IAi × IBi` yields genotypes `IAIB (AB) : IAi (A) : IBi (B) : ii (O)` in a **1 : 1 : 1 : 1** ratio → **25%** (1/4) chance of blood group O (`ii`).", zh: "`IAi × IBi` 子代基因型比例為 `1 IAIB : 1 IAi : 1 IBi : 1 ii`，故 O 型（`ii`）機率為 **25%**。" }
  },
  {
    id: "q-u5-2", unit: "u5",
    q: { en: "In a pedigree for a recessive genetic trait, an affected woman has a completely normal father. What can be deduced with certainty?", zh: "在某隱性遺傳病譜系中，一名患病女性的父親完全正常。由此可確切推斷什麼？" },
    options: [
      { en: "The trait MUST be X-linked recessive.", zh: "該性狀必為 X 連鎖隱性。" },
      { en: "The trait CANNOT be X-linked recessive; it must be autosomal recessive.", zh: "該性狀不可能是 X 連鎖隱性，必屬常染色體隱性。" },
      { en: "All her sons will be normal.", zh: "她所有兒子均正常。" },
      { en: "Her mother must be affected.", zh: "其母親必定患病。" }
    ],
    ans: 1,
    exp: { en: "If X-linked recessive, an affected female (`XaXa`) MUST receive one `Xa` allele from her father → her father (`XaY`) would HAVE to be affected! Since her father is normal, X-linked recessive is ruled out → **autosomal recessive**.", zh: "若屬 X 連鎖隱性，患病女性（`XaXa`）必從父親遺傳一條 `Xa`，其父（`XaY`）必然患病；今父正常即矛盾，故必屬**常染色體隱性**！" }
  },
  {
    id: "q-u5-3", unit: "u5",
    q: { en: "A DNA template strand has the base sequence `3'-TAC GGA CTT-5'`. What is the complementary mRNA codon sequence produced by transcription?", zh: "某 DNA 模板鏈鹼基序列為 `3'-TAC GGA CTT-5'`，轉錄所得 mRNA 序列為何？" },
    options: [
      { en: "5'-ATG CCT GAA-3'", zh: "5'-ATG CCT GAA-3'" },
      { en: "5'-AUG CCU GAA-3'", zh: "5'-AUG CCU GAA-3'" },
      { en: "5'-UAC GGA CUU-3'", zh: "5'-UAC GGA CUU-3'" },
      { en: "5'-UAG GCU CAA-3'", zh: "5'-UAG GCU CAA-3'" }
    ],
    ans: 1,
    exp: { en: "Complementary base pairing during transcription: `T→A`, `A→U`, `C→G`, `G→C`. Thus `TAC GGA CTT` transcribes to **`AUG CCU GAA`** (remember RNA has **U**, not T!).", zh: "轉錄互補配對：`T→A`、`A→U`、`C→G`、`G→C`，故得 **`AUG CCU GAA`**。" }
  },
  {
    id: "q-u5-4", unit: "u5",
    q: { en: "Which explanation of antibiotic resistance in bacteria correctly reflects Darwin's theory of natural selection?", zh: "下列哪項對細菌產生抗生素抗藥性的解釋正確符合達爾文自然選擇理論？" },
    options: [
      { en: "Bacteria deliberately mutate in order to survive when exposed to antibiotics.", zh: "細菌接觸抗生素後刻意突變以求生存。" },
      { en: "Antibiotics induce beneficial mutations in all exposed bacteria.", zh: "抗生素誘發所有細菌產生有利突變。" },
      { en: "Pre-existing resistant mutants survive antibiotic treatment, reproduce, and pass resistance alleles to offspring, increasing resistance allele frequency.", zh: "原有抗藥突變菌在抗生素選擇壓力下存活繁殖並遺傳抗藥等位基因，令其頻率上升。" },
      { en: "Individual bacteria acquire resistance through use and disuse and pass it on.", zh: "個別細菌因用進廢退獲得抗藥性並遺傳。" }
    ],
    ans: 2,
    exp: { en: "Mutations are **random and pre-existing** before antibiotic exposure! Antibiotics act purely as a **selection pressure** favouring survival & reproduction of already-resistant mutants.", zh: "突變屬**隨機且早已存在**，抗生素只是**選擇壓力**篩選存活繁殖的個體。" }
  },

  // Elective E1
  {
    id: "q-e1-1", unit: "e1",
    q: { en: "In a healthy human kidney, why is the concentration of urea much HIGHER in urine than in glomerular filtrate?", zh: "健康人體內，為何尿液的尿素濃度遠高於腎小球濾液？" },
    options: [
      { en: "Extra urea is actively synthesized by the collecting duct.", zh: "集尿管額外合成大量尿素。" },
      { en: "Most water in the filtrate is reabsorbed back into the blood while most urea remains in the tubule.", zh: "濾液中絕大部分水分被重吸收回血液，而大部分尿素留於腎小管內。" },
      { en: "Urea cannot pass through Bowman's capsule.", zh: "尿素不能通過鮑曼氏囊。" },
      { en: "Glucose is converted into urea in the loop of Henle.", zh: "葡萄糖在亨利氏套轉為尿素。" }
    ],
    ans: 1,
    exp: { en: "~99% of filtered water is reabsorbed along the nephron (PCT, loop of Henle, collecting duct), whereas most urea remains in the lumen → dramatically **concentrating** urea!", zh: "約 99% 水分沿腎小管重吸收，尿素則大多留於管腔，故濃度大幅提升！" }
  },
  {
    id: "q-e1-2", unit: "e1",
    q: { en: "After running a marathon in hot weather without drinking water, how do ADH secretion and collecting duct permeability change?", zh: "炎熱天氣跑馬拉松且未補水後，ADH 分泌量及集尿管對水透性如何變化？" },
    options: [
      { en: "ADH decreases; permeability decreases → large volume of dilute urine.", zh: "ADH 減少；透性下降 → 大量稀尿。" },
      { en: "ADH increases; permeability increases → more water reabsorbed → small volume of concentrated urine.", zh: "ADH 增加；透性上升 → 重吸收較多水分 → 少量濃尿。" },
      { en: "ADH increases; permeability decreases → small volume of dilute urine.", zh: "ADH 增加；透性下降 → 少量稀尿。" },
      { en: "ADH remains unchanged; glomerular filtration stops completely.", zh: "ADH 不變；超濾完全停止。" }
    ],
    ans: 1,
    exp: { en: "Sweating lowers blood water potential → detected by hypothalamus osmoreceptors → pituitary releases **MORE ADH** → collecting duct becomes **MORE permeable to water** → more water reabsorbed by osmosis → **small volume of concentrated urine**.", zh: "出汗致血液水勢下降 → 下丘腦促垂體釋放**更多 ADH** → 集尿管**透水性上升** → 重吸更多水 → **少量濃尿**。" }
  },
  {
    id: "q-e1-3", unit: "e1",
    q: { en: "Which hormonal event directly triggers ovulation on Day 14 of a 28-day menstrual cycle?", zh: "在 28 天月經周期中，哪個激素變化直接觸發第 14 天排卵？" },
    options: [
      { en: "A sharp drop in progesterone", zh: "孕酮急劇下降" },
      { en: "A surge in LH triggered by positive feedback from peak oestrogen", zh: "雌激素高峰經正反饋引發的 LH 急升（峰值）" },
      { en: "Inhibition of FSH by corpus luteum", zh: "黃體抑制 FSH" },
      { en: "Secretion of hCG by the pituitary gland", zh: "垂體分泌 hCG" }
    ],
    ans: 1,
    exp: { en: "High **oestrogen** (~Day 12–13) switches to **positive feedback** on the anterior pituitary, triggering a sharp **LH surge** that causes the mature follicle to rupture (**ovulation** on Day 14).", zh: "排卵前高水平**雌激素**轉為**正反饋**刺激垂體分泌 **LH 急升峰值**，直接觸發排卵。" }
  },

  // Elective E2
  {
    id: "q-e2-1", unit: "e2",
    q: { en: "During eutrophication following fertilizer runoff, what is the DIRECT cause of massive fish deaths?", zh: "化肥流入水體引發富營養化時，導致魚類大量死亡的直接原因為何？" },
    options: [
      { en: "Nitrates poison fish gills directly.", zh: "硝酸鹽直接毒死魚鰓。" },
      { en: "Rapid multiplication of aerobic decomposers decomposing dead algae consumes dissolved oxygen, causing suffocation.", zh: "大量需氧分解細菌分解死藻耗盡水中溶氧，致魚類缺氧窒息。" },
      { en: "Algae consume all carbon dioxide in water.", zh: "藻類耗盡水中二氧化碳。" },
      { en: "Submerged plants release excessive oxygen.", zh: "沉水植物釋放過多氧氣。" }
    ],
    ans: 1,
    exp: { en: "Algal blooms block sunlight → plants & algae die → **aerobic bacteria multiply & respire** decomposing dead organic matter → **dissolved oxygen plummets** → fish suffocate!", zh: "藻華遮光致水草與藻死亡 → **需氧細菌大增分解屍體耗盡溶氧** → 魚類窒息死亡。" }
  },
  {
    id: "q-e2-2", unit: "e2",
    q: { en: "Why do top predators like Chinese White Dolphins accumulate far higher mercury concentrations than plankton?", zh: "為何中華白海豚等頂級捕食者體內的汞濃度遠高於浮游生物？" },
    options: [
      { en: "Dolphins absorb mercury directly through their skin faster than plankton.", zh: "海豚皮膚吸收汞更快。" },
      { en: "Biomagnification: mercury is non-biodegradable and retained while energy is lost at each trophic level, so top predators eat huge prey biomass.", zh: "生物放大：汞難降解且不排出，而能量每級損耗 90%，頂級捕食者攝食大量獵物令濃度逐級倍增。" },
      { en: "Plankton break down mercury via photosynthesis.", zh: "浮游植物可藉光合作用分解汞。" },
      { en: "Mercury evaporates from lower trophic levels.", zh: "汞會從低營養級揮發。" }
    ],
    ans: 1,
    exp: { en: "**Biomagnification**: Because ~90% of energy is lost at each trophic level while persistent toxins (mercury, DDT) cannot be broken down or excreted, higher-level consumers consume large biomass of prey and retain nearly all the toxins.", zh: "**生物放大**：能量逐級損耗而持久性毒素留存體內，高營養級進食大量下級生物致濃度急劇放大。" }
  },
  {
    id: "q-e2-3", unit: "e2",
    q: { en: "What is the main purpose of the aeration tank (activated sludge) during secondary sewage treatment?", zh: "污水二級處理中曝氣池（活性污泥）的主要作用為何？" },
    options: [
      { en: "To filter out plastic bags and grit physically.", zh: "以物理方式隔走膠袋與沙礫。" },
      { en: "To supply O2 so aerobic microorganisms oxidize dissolved organic waste, greatly reducing BOD.", zh: "供應氧氣讓需氧微生物氧化分解有機廢物，大幅降低 BOD。" },
      { en: "To produce methane biogas via anaerobic digestion.", zh: "進行厭氧消化生產甲烷沼氣。" },
      { en: "To sterilize effluent with UV radiation.", zh: "以紫外線消毒放流水。" }
    ],
    ans: 1,
    exp: { en: "Secondary treatment uses **aerobic bacteria & protists** in aerated tanks to oxidize organic matter into CO2, H2O & inorganic salts, drastically **lowering BOD** before discharge.", zh: "二級處理利用曝氣供氧讓好氧微生物分解有機物，**大幅降低 BOD**。" }
  },

  // Elective E3
  {
    id: "q-e3-1", unit: "e3",
    q: { en: "In an industrial batch fermenter producing penicillin, why is a cooling water jacket essential?", zh: "在工業生產青黴素的分批發酵槽中，為何必須配備冷卻水套？" },
    options: [
      { en: "To keep microbes frozen in lag phase.", zh: "把微生物冷凍於延滯期。" },
      { en: "To remove metabolic heat generated by microbial respiration so temperature stays at optimum and enzymes do not denature.", zh: "帶走微生物呼吸產生的熱能，維持最適溫度以防酶變性。" },
      { en: "To supply dissolved oxygen to Penicillium.", zh: "向青黴菌供應溶氧。" },
      { en: "To sterilize the culture medium during fermentation.", zh: "發酵期間為培養基滅菌。" }
    ],
    ans: 1,
    exp: { en: "Rapid microbial respiration releases substantial **heat**; without a **cooling jacket**, overheating would **denature** microbial enzymes and halt penicillin synthesis.", zh: "微生物呼吸釋放大量熱能，**冷卻水套**散熱維持最適溫度防止酶變性。" }
  },
  {
    id: "q-e3-2", unit: "e3",
    q: { en: "When measuring bacterial growth in a closed flask, why does optical density (turbidity) stay high during the Death phase while viable plate count drops sharply?", zh: "封閉培養瓶進入死亡期時，為何比色計濁度仍維持高水平而活菌平板計數卻急降？" },
    options: [
      { en: "Dead bacteria still scatter light, so turbidity measures TOTAL (live + dead) cells, whereas viable count only counts living cells forming colonies.", zh: "死菌仍會散射光線故濁度反映總菌數（活＋死），而活菌計數只計能長成菌落的活菌。" },
      { en: "Bacteria shrink to invisible sizes in the death phase.", zh: "死亡期細菌縮小至不可見。" },
      { en: "Antibiotics make the broth clearer.", zh: "抗生素令培養液變清澈。" },
      { en: "Agar plates kill viable bacteria.", zh: "瓊脂平板會殺死活菌。" }
    ],
    ans: 0,
    exp: { en: "**Turbidity / colorimetry** measures **total cell count** (both living & intact dead cells block light), whereas **viable count (CFU/mL)** counts ONLY **living** cells capable of reproducing.", zh: "**濁度**量度總菌數（死菌亦阻光），**活菌計數**只計具分裂能力的活菌。" }
  },
  {
    id: "q-e3-3", unit: "e3",
    q: { en: "How does salting fish preserve it from rapid bacterial spoilage?", zh: "鹽醃魚類如何防止細菌迅速令其變質？" },
    options: [
      { en: "Salt permanently denatures bacterial DNA.", zh: "食鹽永久令細菌 DNA 變性。" },
      { en: "High salt concentration creates a very low water potential, drawing water out of bacteria by osmosis and inhibiting growth.", zh: "高鹽濃度造成極低水勢，令細菌滲透失水脫水而抑制生長。" },
      { en: "Salt reacts chemically with fish proteins to kill spores.", zh: "食鹽與魚肉蛋白反應殺芽孢。" },
      { en: "Salt blocks oxygen from reaching anaerobic bacteria.", zh: "食鹽阻隔氧氣接觸厭氧菌。" }
    ],
    ans: 1,
    exp: { en: "High salt lowers external **water potential** → water leaves microbial cells by **osmosis** → plasmolysis/dehydration inhibits enzyme activity & microbial reproduction.", zh: "高鹽降低外界水勢 → 微生物藉**滲透作用失水**，抑制酶活性與繁殖。" }
  },

  // Elective E4
  {
    id: "q-e4-1", unit: "e4",
    q: { en: "In recombinant DNA technology, why must the SAME restriction enzyme be used to cut both the target human gene and the bacterial plasmid?", zh: "重組 DNA 技術中，為何必須使用同一種限制酶切割目標人基因與細菌質粒？" },
    options: [
      { en: "To destroy antibiotic resistance genes.", zh: "破壞抗生素抗性基因。" },
      { en: "To produce complementary sticky ends so the target gene and plasmid can join by complementary base pairing.", zh: "產生互補黏性末端，使目標基因與質粒可藉互補鹼基配對結合。" },
      { en: "To catalyse covalent phosphodiester bonds directly.", zh: "直接催化形成共價磷酸二酯鍵。" },
      { en: "To amplify the plasmid exponentially.", zh: "將質粒呈指數倍增。" }
    ],
    ans: 1,
    exp: { en: "The **same restriction enzyme** recognizes the same palindromic site and produces **complementary sticky ends**, enabling the gene and plasmid to anneal via base pairing before **DNA ligase** seals the backbone.", zh: "同一種限制酶產生**互補黏性末端**，讓兩者能藉互補鹼基配對結合，再由 **DNA 連接酶**永久封合。" }
  },
  {
    id: "q-e4-2", unit: "e4",
    q: { en: "Why is Taq DNA polymerase used in PCR instead of normal human DNA polymerase?", zh: "為何 PCR 採用 Taq DNA 聚合酶而非普通人類 DNA 聚合酶？" },
    options: [
      { en: "Taq polymerase works only at 37°C.", zh: "Taq 聚合酶僅於 37°C 運作。" },
      { en: "Taq polymerase is heat-stable and does not denature during the ~95°C denaturation step.", zh: "Taq 聚合酶耐熱，在 ~95°C 變性步驟中不會變性失活。" },
      { en: "Taq polymerase does not require primers.", zh: "Taq 聚合酶無須引物。" },
      { en: "Taq polymerase can separate DNA strands without heating.", zh: "Taq 聚合酶無須加熱即可解開雙鏈。" }
    ],
    ans: 1,
    exp: { en: "PCR repeatedly heats DNA to **~94–95°C** to break H-bonds. Human DNA polymerase would immediately **denature**, whereas ***Taq* polymerase** (from thermophilic bacteria) withstands 95°C and works optimally at ~72°C!", zh: "PCR 每循環均須加熱至 **~95°C** 解鏈，普通酶會立即變性，而耐熱 ***Taq* 聚合酶**不受破壞且於 72°C 高效延伸。" }
  },
  {
    id: "q-e4-3", unit: "e4",
    q: { en: "During gel electrophoresis of DNA fragments, which statement is CORRECT?", zh: "DNA 片段進行凝膠電泳時，以下哪項敘述正確？" },
    options: [
      { en: "DNA fragments are positively charged and migrate toward the cathode (−).", zh: "DNA 帶正電並移向負極。" },
      { en: "Negatively charged DNA fragments migrate toward the anode (+), with SMALLER fragments moving faster and further.", zh: "帶負電 DNA 片段移向正極（+），較短（較小）片段移動更快更遠。" },
      { en: "Larger DNA fragments migrate faster because they have greater mass.", zh: "較大 DNA 片段因質量大而移動更快。" },
      { en: "All DNA fragments migrate at identical speed regardless of length.", zh: "所有片段不論長短速率相同。" }
    ],
    ans: 1,
    exp: { en: "Phosphate groups give DNA a **net negative charge**, pulling it toward the **positive electrode (anode)**. The agarose gel matrix impedes larger fragments more, so **shorter fragments travel further**.", zh: "磷酸基令 DNA 帶**負電**移向**正極**；凝膠阻礙大片段，故**越短片段走得越快越遠**。" }
  }
];
