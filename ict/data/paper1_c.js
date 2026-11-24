window.ICT_MODULES.push({
  id: "p1-c",
  paper: "paper1",
  code: "Module C",
  hours: { zh: "必修 · 約 31 課時（新課綱加重！）", en: "Compulsory · ~31 hrs (Expanded in 2025+!)" },
  title: { zh: "單元 C：互聯網及其應用", en: "Module C: Internet and its Applications" },
  subtitle: {
    zh: "涵蓋電腦網絡與硬體、封包交換、TCP/IP 與 DNS 協定、雲端與物聯網、基礎 HTML5/CSS3 網頁製作，以及系統化的網絡威脅、密碼學與數碼簽署。",
    en: "Covers networking hardware, packet switching, TCP/IP & DNS protocols, Cloud & IoT, elementary HTML5/CSS3 web authoring, and cybersecurity, cryptography & digital signatures."
  },
  topics: [
    {
      id: "p1-c-1",
      code: "C1",
      importance: 3,
      title: { zh: "網絡基礎、拓撲、硬體設備與封包交換", en: "Networking Basics, Topologies, Hardware & Packet Switching" },
      summary: {
        zh: "分辨 LAN/WAN、Client-Server vs P2P、星型拓撲、Switch vs Router 職能差異、傳輸模式及封包交換原理。",
        en: "Distinguish LAN/WAN, Client-Server vs P2P, Star topology, Switch vs Router roles, transmission modes, and packet switching."
      },
      blocks: [
        {
          type: "keyterms",
          title: { zh: "網絡架構與核心設備", en: "Network Models & Hardware Devices" },
          items: [
            { term: { zh: "區域網絡 (LAN) vs 廣域網絡 (WAN)", en: "LAN vs WAN" }, def: { zh: "**LAN** 覆蓋小範圍（如校園、辦公室），高速、由機構自行擁有；**WAN** 橫跨城市/國家（如互聯網），經 ISP 與公共線路連接。", en: "**LAN** spans a small area (school/office), high speed, privately owned; **WAN** spans cities/countries (e.g. Internet) via ISPs." } },
            { term: { zh: "主從式 (Client-Server) vs 點對點 (P2P)", en: "Client-Server vs Peer-to-Peer (P2P)" }, def: { zh: "**Client-Server**：由中央伺服器集中管理資源、備份與保安，但伺服器是單點故障與成本較高；**P2P**：每台電腦平等分享檔案，架設便宜無須中央伺服器，但保安與集中管理較弱。", en: "**Client-Server**: Centralised security, backup, & control, but higher cost & single point of failure; **P2P**: Equal peers share resources cheaply without central server, but weaker security/management." } },
            { term: { zh: "網絡介面卡 (NIC) 與 MAC 位址", en: "NIC & MAC Address" }, def: { zh: "每張 NIC 出廠時燒錄全球唯一的 **48-bit 十六進制物理位址** (如 `00:1A:2B:3C:4D:5E`)，用於**同一 LAN 內部**識別裝置。", en: "Each NIC carries a globally unique **48-bit hex physical address** used to identify devices **within a local LAN**." } },
            { term: { zh: "交換器 (Switch) vs 集線器 (Hub)", en: "Switch vs Hub" }, def: { zh: "**Hub** 盲目廣播訊號至所有埠，易生碰撞且不安全；**Switch** 維護 MAC 位址表，**只將數據精準轉送至目標埠**，大幅提升速度與安全性！", en: "**Hub** broadcasts frames to all ports (collisions & insecure); **Switch** inspects MAC addresses and **forwards only to the intended port**, maximising throughput and security!" } },
            { term: { zh: "路由器 (Router)", en: "Router" }, def: { zh: "連接**不同網絡**（如家居 LAN 與互聯網 WAN），檢視封包的 **IP 位址**並查閱路由表選擇最佳傳送路徑；家用路由器常整合 Switch、WAP、DHCP、NAT 與防火牆功能。", en: "Connects **different networks** (e.g. home LAN to Internet), inspects **IP addresses** & routing tables to forward packets along optimal paths; home routers also bundle NAT, DHCP, WAP & Firewall." } },
            { term: { zh: "無線存取點 (WAP) 與調制解調器 (Modem)", en: "WAP & Modem" }, def: { zh: "**WAP** 提供 Wi-Fi 無線接入並連接至有線 LAN；**Modem** 負責數碼訊號與類比/光纖訊號之間的調制與解調。", en: "**WAP** bridges Wi-Fi clients to a wired LAN; **Modem** modulates/demodulates signals between digital LAN and ISP transmission lines." } }
          ]
        },
        {
          type: "heading",
          text: { zh: "傳輸介質、雙工模式與封包交換 (Packet Switching)", en: "Transmission Media, Duplex Modes & Packet Switching" }
        },
        {
          type: "list",
          items: [
            { zh: "**光纖 (Fibre Optic)** vs **雙絞線 (UTP/Twisted Pair)**：光纖以光脈衝傳送，頻寬極高、傳輸距離長、**完全不受電磁干擾 (EMI)**、極難竊聽，但成本高且佈線脆；UTP 便宜易安裝，適用於室內短距離 (<100m)。", en: "**Fibre Optic** vs **Twisted Pair (UTP)**: Fibre transmits light pulses — ultra-high bandwidth, long distance, **immune to EMI**, hard to tap, but costly; UTP is cheap & flexible for indoor LANs (<100m)." },
            { zh: "**傳輸方向**：**單工 (Simplex)** 單向（廣播電台/鍵盤）；**半雙工 (Half-Duplex)** 雙向但不同時（對講機）；**全雙工 (Full-Duplex)** 同時雙向收發（電話、現代乙太網）。", en: "**Direction**: **Simplex** one-way (radio/keyboard); **Half-Duplex** two-way alternating (walkie-talkie); **Full-Duplex** simultaneous two-way (telephone, switched Ethernet)." },
            { zh: "**封包交換 (Packet Switching)** — 互聯網核心機制：\n1. 發送端將大檔案切割成多個大小固定的**封包 (Packets)**。\n2. 每個封包含有**標頭 (Header)**（來源 IP、目的 IP、**序號 Sequence Number**、校驗碼 Checksum）及**數據載荷 (Payload)**。\n3. 各封包透過路由器**獨立選擇不同路徑**傳送（即使某路線故障仍可自動繞道，容錯力極強且共享頻寬效率高）。\n4. 接收端根據**序號重組**還原完整檔案；若有封包遺失或損毀，要求發送端重傳。", en: "**Packet Switching** — Internet's Core Mechanism:\n1. Sender splits data into small **packets**.\n2. Each packet has a **Header** (Source IP, Dest IP, **Sequence Number**, Checksum) + **Payload**.\n3. Routers forward packets **independently over different paths** (resilient to link failures & maximizes bandwidth sharing).\n4. Receiver **reassembles** packets using sequence numbers and requests retransmission for missing/corrupted packets." }
          ]
        }
      ]
    },
    {
      id: "p1-c-2",
      code: "C2",
      importance: 3,
      title: { zh: "TCP/IP 協定、IP 定址、DNS 與應用層協定", en: "TCP/IP Protocols, IP Addressing, DNS & Application Protocols" },
      summary: {
        zh: "透徹理解 IPv4/IPv6、Public/Private IP 與 NAT、DHCP、TCP vs UDP、DNS 解析流程，以及 HTTP/HTTPS/SMTP/POP3/IMAP。",
        en: "Thoroughly understand IPv4 vs IPv6, Public/Private IP & NAT, DHCP, TCP vs UDP, DNS resolution, and HTTP/HTTPS/SMTP/POP3/IMAP."
      },
      blocks: [
        {
          type: "compare",
          title: { zh: "傳輸層核心對比：TCP vs UDP", en: "Transport Layer: TCP vs UDP" },
          leftTitle: { zh: "TCP (傳輸控制協定)", en: "TCP (Transmission Control Protocol)" },
          rightTitle: { zh: "UDP (用戶數據報協定)", en: "UDP (User Datagram Protocol)" },
          rows: [
            { aspect: { zh: "連接與可靠性", en: "Connection & Reliability" }, left: { zh: "**面向連接**（三次握手 3-way handshake），保證數據**按序、完整、無誤**送達，遺失會自動重傳。", en: "**Connection-oriented** (3-way handshake); guarantees **ordered, reliable** delivery with error checking & retransmission." }, right: { zh: "**無連接**，盡力送出不確認收妥，不保證次序且不重傳。", en: "**Connectionless**; best-effort delivery with no acknowledgements, ordering, or retransmission." } },
            { aspect: { zh: "速度與開銷", en: "Speed & Overhead" }, left: { zh: "標頭開銷較大、延遲稍高。", en: "Higher overhead & latency." }, right: { zh: "**極快、低延遲**、開銷極小。", en: "**Fast, low latency**, minimal overhead." } },
            { aspect: { zh: "典型應用", en: "Use Cases" }, left: { zh: "網頁瀏覽 (HTTP/HTTPS)、電郵 (SMTP/IMAP)、檔案下載 (FTP)、網上銀行。", en: "Web browsing (HTTP/HTTPS), Email, File transfer (FTP), online banking." }, right: { zh: "即時視像會議 (Zoom)、網上遊戲、直播串流、VoIP 語音、DNS 查詢。", en: "Video conferencing, online gaming, live streaming, VoIP, DNS lookups." } }
          ]
        },
        {
          type: "keyterms",
          title: { zh: "IP 定址關鍵詞（卷一常考問答）", en: "IP Addressing Key Concepts" },
          items: [
            { term: { zh: "IPv4 vs IPv6", en: "IPv4 vs IPv6" }, def: { zh: "**IPv4** 為 32-bit（4 組 0–255 十進制，如 `192.168.1.10`，約 43 億個，已枯竭）；**IPv6** 為 128-bit（8 組十六進制，如 `2001:0db8::1`），提供近乎無限位址供 IoT 及全球設備使用。", en: "**IPv4** is 32-bit (4 decimal octets `0–255`, ~4.3B addresses, exhausted); **IPv6** is 128-bit (8 hex groups), providing virtually unlimited addresses for IoT." } },
            { term: { zh: "公用 IP vs 私人 IP 與 NAT", en: "Public vs Private IP & NAT" }, def: { zh: "私人 IP（如 `192.168.x.x`, `10.x.x.x`）僅供 LAN 內部使用、不可在公網路由；路由器透過 **NAT (網絡位址轉換)** 讓多部內網裝置共用**同一個公用 IP** 上網，既節省 IPv4 位址又隱藏內網結構提升安全。", en: "Private IPs (`192.168.x.x`, `10.x.x.x`) are LAN-only; **NAT (Network Address Translation)** lets multiple internal devices share **one Public IP**, conserving IPv4 addresses and hiding internal hosts." } },
            { term: { zh: "DHCP (動態主機配置協定)", en: "DHCP" }, def: { zh: "自動為連入網絡的裝置分配動態 IP 位址、子網掩碼、預設閘道及 DNS 伺服器，省卻手動設定並避免 IP 衝突。（伺服器/打印機則宜用**靜態 IP**！）", en: "Automatically assigns dynamic IP, subnet mask, default gateway & DNS to devices, avoiding IP conflicts. (Servers/printers should use **Static IP**!)" } },
            { term: { zh: "DNS (域名系統)", en: "DNS (Domain Name System)" }, def: { zh: "互聯網的「電話簿」，將人類易記的域名（如 `www.hkeaa.edu.hk`）解析為電腦通訊所需的 **IP 位址**。若 DNS 故障，輸入域名無法上網但直接輸入 IP 仍可連線！", en: "Internet's 'phonebook' translating human-readable domain names (`www.hkeaa.edu.hk`) into **IP addresses**. If DNS fails, domain names fail while direct IP access still works!" } }
          ]
        },
        {
          type: "table",
          title: { zh: "必背應用層協定速覽", en: "Essential Application Layer Protocols" },
          headers: [
            { zh: "協定", en: "Protocol" },
            { zh: "標準埠號", en: "Port" },
            { zh: "用途與考點", en: "Purpose & Exam Focus" }
          ],
          rows: [
            [{ zh: "**HTTP / HTTPS**", en: "**HTTP / HTTPS**" }, { zh: "80 / 443", en: "80 / 443" }, { zh: "傳送網頁資料；**HTTPS** 加入 TLS/SSL 加密與數碼證書驗證，防止竊聽與冒充。", en: "Transfers web pages; **HTTPS** adds TLS/SSL encryption & certificate verification." }],
            [{ zh: "**SMTP**", en: "**SMTP**" }, { zh: "25 / 587", en: "25 / 587" }, { zh: "**發送**電子郵件（用戶端 → 郵件伺服器，及伺服器之間轉寄）。", en: "**Sending** emails (client → mail server, and server-to-server relay)." }],
            [{ zh: "**POP3 vs IMAP**", en: "**POP3 vs IMAP**" }, { zh: "110 / 143", en: "110 / 143" }, { zh: "兩者均用於**接收**電郵。**POP3** 預設下載到本地並從伺服器刪除（不利多裝置）；**IMAP** 保留於伺服器並**多裝置即時同步**已讀狀態與資料夾！", en: "Both **receive** email. **POP3** downloads & removes from server by default; **IMAP** keeps emails on server and **syncs folders/read state across multiple devices**!" }],
            [{ zh: "**FTP / SFTP**", en: "**FTP / SFTP**" }, { zh: "21 / 22", en: "21 / 22" }, { zh: "上下載檔案；**SFTP** 經 SSH 通道全程加密，取代明文傳輸的 FTP。", en: "File transfer; **SFTP** encrypts credentials and data over SSH (unlike plaintext FTP)." }]
          ]
        }
      ]
    },
    {
      id: "p1-c-3",
      code: "C3",
      importance: 2,
      title: { zh: "雲端運算 (Cloud Computing) 與物聯網 (IoT)", en: "Cloud Computing & Internet of Things (IoT)" },
      summary: {
        zh: "區分 IaaS / PaaS / SaaS 三大雲端服務模式、公有/私有/混合雲，以及 IoT 架構與風險。",
        en: "Distinguish IaaS, PaaS, and SaaS models, cloud deployment types, and IoT architecture & risks."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "雲端運算三大服務模式 (IaaS / PaaS / SaaS)", en: "Three Cloud Service Models" },
          headers: [
            { zh: "模式", en: "Model" },
            { zh: "供應商提供", en: "Provider Supplies" },
            { zh: "典型例子", en: "Examples" }
          ],
          rows: [
            [{ zh: "**IaaS (基礎設施即服務)**", en: "**IaaS (Infrastructure)**" }, { zh: "虛擬伺服器 (VM)、儲存空間、網絡資源（用戶自行管 OS 與軟件）。", en: "Virtual machines, storage, networking (user manages OS & apps)." }, { zh: "AWS EC2, Google Compute Engine, Azure VM", en: "AWS EC2, Google Compute Engine, Azure VM" }],
            [{ zh: "**PaaS (平台即服務)**", en: "**PaaS (Platform)**" }, { zh: "開發與執行環境、作業系統、數據庫框架（開發者專注寫程式碼）。", en: "OS, runtime, frameworks & DB platform (developers focus on coding)." }, { zh: "Google App Engine, Heroku, Firebase", en: "Google App Engine, Heroku, Firebase" }],
            [{ zh: "**SaaS (軟件即服務)**", en: "**SaaS (Software)**" }, { zh: "開箱即用的完整網上應用程式，透過瀏覽器直接訂閱使用。", en: "Ready-to-use applications accessed via web browser on subscription." }, { zh: "Google Docs, Microsoft 365, Gmail, Zoom", en: "Google Docs, Microsoft 365, Gmail, Zoom" }]
          ]
        },
        {
          type: "list",
          title: { zh: "雲端運算利弊與物聯網 (IoT) 考點", en: "Cloud Trade-offs & IoT Key Points" },
          items: [
            { zh: "**雲端優點**：隨時隨地跨裝置存取與多人協作、**按需彈性擴展 (Scalability)**、減省前期硬體購買與維護成本、自動備份。", en: "**Cloud Pros**: Anytime/anywhere access & real-time collaboration, **elastic scalability**, lower upfront CapEx, automated backups." },
            { zh: "**雲端風險**：高度依賴穩定互聯網連線、數據存放第三方伺服器引發**私隱與保安顧慮**、**供應商鎖定 (Vendor Lock-in)**、長期訂閱費用。", en: "**Cloud Risks**: Internet dependency, **data privacy/security** on third-party servers, **vendor lock-in**, ongoing subscription fees." },
            { zh: "**物聯網 (IoT)**：將日常物件配備感應器 (Sensors)、微控制器及聯網晶片，自動收集數據並經雲端分析後驅動致動器 (Actuators)（如智能冷氣、醫療穿戴、智慧停車）。**最大風險**：大量 IoT 裝置出廠預設弱密碼且缺乏更新，極易被劫持組成 **殭屍網絡 (Botnet)** 發動 DDoS 攻擊！", en: "**IoT**: Everyday objects embedded with sensors, microcontrollers & connectivity automating sensing → cloud analytics → actuation (smart home/city). **Top risk**: Weak default passwords & unpatched firmware make IoT devices easy targets for **Botnet** DDoS attacks!" }
          ]
        }
      ]
    },
    {
      id: "p1-c-4",
      code: "C4",
      importance: 3,
      title: { zh: "基礎網頁製作：HTML5、CSS3 與無障礙設計", en: "Elementary Web Authoring: HTML5, CSS3 & Accessibility" },
      summary: {
        zh: "2025+ 新課綱單元 C 重點！掌握 HTML5 常用標籤（表格 colspan/rowspan、表單、超連結與相對路徑）、CSS 選擇器優先級與盒模型，以及網頁無障礙原則。",
        en: "Expanded in 2025+ syllabus! Master HTML5 tags (tables colspan/rowspan, forms, relative paths), CSS selectors, specificity & box model, and web accessibility."
      },
      blocks: [
        {
          type: "code",
          lang: "html",
          title: { zh: "HTML5 必考語法結構（語意標籤、表格合併、表單）", en: "Essential HTML5 Structure (Semantics, Tables, Forms)" },
          code: "<!DOCTYPE html>\n<html lang=\"zh-Hant\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HKDSE ICT Notes</title>\n  <link rel=\"stylesheet\" href=\"style.css\"> <!-- 外部樣式表 External CSS -->\n</head>\n<body>\n  <h1>2027 DSE ICT</h1>\n  <p>訪問 <a href=\"https://www.hkeaa.edu.hk\" target=\"_blank\">考評局網站</a></p>\n  <img src=\"images/cpu.png\" alt=\"CPU 架構圖\" width=\"300\">\n\n  <!-- 表格：colspan 橫向合併欄，rowspan 縱向合併列 -->\n  <table border=\"1\">\n    <tr><th colspan=\"2\">成績表</th></tr>\n    <tr><td>Paper 1</td><td>55%</td></tr>\n    <tr><td>Paper 2</td><td>25%</td></tr>\n  </table>\n\n  <!-- 表單 Form：radio 須同 name 才能單選 -->\n  <form action=\"submit.php\" method=\"POST\">\n    <label for=\"uname\">姓名:</label>\n    <input type=\"text\" id=\"uname\" name=\"uname\" required>\n    <input type=\"radio\" name=\"elec\" value=\"A\"> Elective A\n    <input type=\"radio\" name=\"elec\" value=\"C\"> Elective C\n    <input type=\"submit\" value=\"提交\">\n  </form>\n</body>\n</html>",
          note: {
            zh: "**考點**：1) `<img>` 的 `alt` 屬性既可在圖片載入失敗時顯示替代文字，亦供視障人士的**螢幕閱讀器 (Screen Reader)** 朗讀；2) 相對路徑 `../img/a.png` 中 `..` 代表上一層資料夾；3) `GET` 將表單參數附於 URL 暴露（適合搜尋），**`POST` 放在請求主體中（必須用於密碼及敏感資料）**。",
            en: "**Exam Points**: 1) `<img alt>` provides fallback text & supports **screen readers**; 2) `..` in relative paths moves up one parent directory; 3) `GET` exposes params in URL (for searches), while **`POST` sends data in request body (required for passwords/sensitive data)**."
          }
        },
        {
          type: "code",
          lang: "css",
          title: { zh: "CSS3 選擇器、優先級與盒模型 (Box Model)", en: "CSS3 Selectors, Specificity & Box Model" },
          code: "/* 優先級 (Specificity): Inline style > #id > .class > element */\nbody { font-family: sans-serif; color: #1e293b; }   /* 元素選擇器 Element */\n.highlight { background-color: #fef08a; }           /* 類別選擇器 Class (可重用) */\n#main-title { font-size: 28px; text-align: center; }/* ID 選擇器 (頁面內唯一) */\n\n/* 盒模型 Box Model (由內到外): Content → Padding → Border → Margin */\n.card {\n  width: 300px;\n  padding: 16px;            /* 內距：內容與邊框之間 */\n  border: 2px solid #2563eb;/* 邊框 */\n  margin: 20px;             /* 外距：元件與外部其他元件之間 */\n}",
          note: {
            zh: "**為何優先使用外部樣式表 (External CSS `<link>`)？** 只需修改單一 `.css` 檔即可同步更新全站數百頁的外觀，實現**內容 (HTML) 與外觀呈現 (CSS) 分離**，大幅提升維護性且可被瀏覽器快取加速載入。",
            en: "**Why prefer External CSS?** Editing one `.css` file updates styling across the entire site (**separation of content and presentation**), improves maintainability, and allows browser caching."
          }
        },
        {
          type: "callout",
          variant: "tip",
          title: { zh: "響應式設計 (RWD) 與網頁無障礙設計 (Web Accessibility)", en: "Responsive Web Design (RWD) & Web Accessibility" },
          text: {
            zh: "**RWD**：利用 `<meta name=\"viewport\">`、彈性版面 (Flexbox/Grid) 與 CSS Media Queries (`@media (max-width: 640px)` ) 讓同一網頁自動適配手機、平板與桌面螢幕。\n**無障礙設計 (WCAG)**：為圖片加 `alt`、為影片加字幕、提供足夠色彩對比度、**不單靠顏色傳達資訊**（照顧色盲人士）、支援純鍵盤操作及可調整字體大小。",
            en: "**RWD**: Uses viewport meta tag, fluid layouts, and CSS Media Queries so one site adapts seamlessly across phones, tablets, and desktops.\n**Accessibility (WCAG)**: `alt` text for images, video captions, high colour contrast, **never relying on colour alone** to convey meaning, keyboard navigability, and scalable fonts."
          }
        }
      ]
    },
    {
      id: "p1-c-5",
      code: "C5",
      importance: 3,
      title: { zh: "互聯網威脅、密碼學與數碼簽署（超級高頻！）", en: "Cybersecurity Threats, Cryptography & Digital Signatures (Ultra High-Yield!)" },
      summary: {
        zh: "卷一幾乎年年必考長題目！完整涵蓋惡意軟件、釣魚/DDoS/MITM/SQL注入、2FA、對稱 vs 非對稱加密、雜湊函數，以及數碼簽署與數碼證書的精準運作步驟。",
        en: "Tested almost every year in Paper 1! Covers malware, Phishing/DDoS/MITM/SQLi, 2FA, Symmetric vs Asymmetric encryption, Hashing, Digital Signatures, and Digital Certificates."
      },
      blocks: [
        {
          type: "table",
          title: { zh: "常見網絡攻擊與惡意軟件精要", en: "Common Cyber Attacks & Malware" },
          headers: [
            { zh: "威脅名稱", en: "Threat" },
            { zh: "運作特徵", en: "Mechanism" },
            { zh: "防範措施", en: "Countermeasures" }
          ],
          rows: [
            [{ zh: "**病毒 (Virus) vs 蠕蟲 (Worm)**", en: "**Virus vs Worm**" }, { zh: "**病毒**須依附宿主檔案並靠用戶執行才能傳播；**蠕蟲**可**獨立自我複製**並經網絡漏洞自動擴散。", en: "**Virus** attaches to host files & needs user action; **Worm** **self-replicates independently** across networks via vulnerabilities." }, { zh: "更新防毒軟件、及時安裝系統安全修補程式 (Patching)、不開可疑附件。", en: "Updated antivirus, OS security patching, avoid suspicious attachments." }],
            [{ zh: "**木馬 (Trojan) 與勒索軟件 (Ransomware)**", en: "**Trojan & Ransomware**" }, { zh: "**木馬**偽裝成正常軟件誘騙安裝並開後門；**勒索軟件**加密受害者所有檔案並勒索贖金。", en: "**Trojan** disguises as legitimate software to open a backdoor; **Ransomware** encrypts victim's files demanding ransom." }, { zh: "只從官方來源下載；實行 **3-2-1 離線備份策略**（3 份複本、2 種媒介、1 份異地/離線）。", en: "Download only from trusted sources; **3-2-1 offline backups** (3 copies, 2 media, 1 offsite/offline)." }],
            [{ zh: "**網絡釣魚 (Phishing)**", en: "**Phishing**" }, { zh: "社交工程：偽冒銀行/機構電郵或 SMS 誘導受害者登入假網站交出帳密或信用卡資料。", en: "Social engineering via fake emails/SMS luring victims to spoofed sites to steal credentials." }, { zh: "核對真實域名 URL、檢查 HTTPS 證書、啟用 **2FA/MFA**、切勿點擊不明連結。", en: "Verify domain URL, check HTTPS cert, enable **2FA/MFA**, never click suspicious links." }],
            [{ zh: "**DDoS (分散式阻斷服務攻擊)**", en: "**DDoS Attack**" }, { zh: "操控龐大殭屍網絡 (Botnet) 同時向目標伺服器發送海量請求，耗盡頻寬/CPU 令正常用戶無法連線。", en: "Floods target server with massive traffic from a **Botnet**, exhausting bandwidth/CPU so legitimate users are denied service." }, { zh: "部署 DDoS 流量清洗/CDN、防火牆速率限制 (Rate Limiting)、冗餘伺服器。", en: "DDoS scrubbing/CDN, firewall rate limiting, load balancing & redundant servers." }],
            [{ zh: "**中間人攻擊 (MITM)**", en: "**Man-in-the-Middle (MITM)**" }, { zh: "攻擊者暗中攔截通訊雙方之間的數據（常見於未加密公共 Wi-Fi），竊聽甚至篡改內容。", en: "Attacker secretly intercepts and possibly alters communication (common on unsecured public Wi-Fi)." }, { zh: "強制使用 **HTTPS (TLS)** 加密、於公共 Wi-Fi 使用 **VPN**。", en: "Use **HTTPS (TLS)** end-to-end encryption and **VPN** on public Wi-Fi." }],
            [{ zh: "**SQL 注入 (SQL Injection)**", en: "**SQL Injection (SQLi)**" }, { zh: "於網頁輸入欄插入惡意 SQL 片段（如 `' OR '1'='1`），繞過登入或盜取/刪除整個數據庫。", en: "Injecting malicious SQL (e.g. `' OR '1'='1`) into input fields to bypass login or steal/drop database tables." }, { zh: "使用**參數化查詢 (Parameterized Queries / Prepared Statements)** 與嚴格輸入驗證。", en: "Use **Parameterized Queries (Prepared Statements)** and strict input validation." }]
          ]
        },
        {
          type: "heading",
          text: { zh: "密碼學核心：對稱加密、非對稱加密與數碼簽署", en: "Cryptography: Symmetric, Asymmetric Encryption & Digital Signatures" }
        },
        {
          type: "compare",
          title: { zh: "對稱加密 vs 非對稱（公鑰）加密", en: "Symmetric vs Asymmetric (Public-Key) Encryption" },
          leftTitle: { zh: "對稱加密 (Symmetric — e.g. AES)", en: "Symmetric Encryption (e.g. AES)" },
          rightTitle: { zh: "非對稱加密 (Asymmetric — e.g. RSA)", en: "Asymmetric Encryption (e.g. RSA)" },
          rows: [
            { aspect: { zh: "密鑰使用", en: "Keys Used" }, left: { zh: "加密與解密使用**同一把秘密金鑰**。", en: "Uses the **same shared secret key** to encrypt and decrypt." }, right: { zh: "一對數學相關的密鑰：**公鑰 (Public Key)** 公開、**私鑰 (Private Key)** 絕對保密。" , en: "Mathematically linked pair: **Public Key** (shared openly) & **Private Key** (kept strictly secret)." } },
            { aspect: { zh: "保密通訊方式", en: "Confidentiality Flow" }, left: { zh: "雙方須先安全交換同一密鑰（存在**密鑰派發風險**）。", en: "Must securely share the secret key beforehand (**key distribution problem**)." }, right: { zh: "發送方用**接收方的公鑰加密** → 只有擁有對應**接收方私鑰**的人才能解密！", en: "Sender encrypts with **Receiver's Public Key** → ONLY **Receiver's Private Key** can decrypt!" } },
            { aspect: { zh: "運算速度", en: "Speed" }, left: { zh: "**極快**，適合加密海量檔案與網絡串流數據。", en: "**Very fast**; ideal for encrypting bulk data." }, right: { zh: "**較慢**（數學運算複雜），通常用於安全交換對稱工作金鑰 (Session Key) 或數碼簽署。", en: "**Slower**; typically used to securely exchange a symmetric Session Key (e.g. HTTPS TLS handshake) or sign hashes." } }
          ]
        },
        {
          type: "callout",
          variant: "exam",
          title: { zh: "⭐ 卷一必背標準答題步驟：數碼簽署 (Digital Signature) 如何運作？", en: "⭐ Must-Memorise Paper 1 Steps: How a Digital Signature Works" },
          text: {
            zh: "**發送方 (Alice) 簽署：**\n1. 將原始訊息經過**單向雜湊函數 (Hash Function，如 SHA-256)** 產生固定長度的**訊息摘要 (Message Digest / Hash)**。\n2. 使用 **Alice 的私鑰 (Sender's Private Key)** 加密該摘要，形成**數碼簽署**，連同原訊息發送給 Bob。\n\n**接收方 (Bob) 驗證：**\n3. Bob 使用 **Alice 的公鑰 (Sender's Public Key)** 解密數碼簽署，還原摘要 `H1`。\n4. Bob 對收到的原訊息使用相同雜湊函數重新計算摘要 `H2`。\n5. 若 `H1 == H2`，驗證成功！\n\n**提供三大保安保障（缺一不可，請背熟！）：**\n• **認證性 (Authentication)**：確保訊息確由 Alice 發出（只有 Alice 擁有其私鑰）。\n• **完整性 (Integrity)**：確保訊息傳輸中途未曾被篡改（任何 1-bit 改動都會令雜湊值完全不同）。\n• **不可否認性 (Non-repudiation)**：Alice 日後無法抵賴曾發送該訊息。\n*(⚠️ 陷阱：純數碼簽署**不提供保密性 Confidentiality**，因為原訊息本身仍是明文！若要保密須再以 Bob 的公鑰或對稱金鑰加密。)*",
            en: "**Sender (Alice) Signs:**\n1. Pass the message through a **one-way Hash Function (e.g. SHA-256)** to produce a fixed-length **Message Digest**.\n2. Encrypt the digest using **Alice's Private Key** → this is the **Digital Signature**, sent alongside the message.\n\n**Receiver (Bob) Verifies:**\n3. Bob decrypts the signature using **Alice's Public Key** to recover digest `H1`.\n4. Bob hashes the received message himself to compute digest `H2`.\n5. If `H1 == H2`, the signature is valid!\n\n**Guarantees 3 Security Properties (Memorise!):**\n• **Authentication**: Proves Alice sent it (only Alice holds her private key).\n• **Integrity**: Proves the message was not altered in transit.\n• **Non-repudiation**: Alice cannot later deny sending it.\n*(⚠️ Trap: A digital signature alone does **NOT** provide **Confidentiality** — the message itself is unencrypted unless separately encrypted!)*"
          }
        },
        {
          type: "callout",
          variant: "info",
          title: { zh: "數碼證書 (Digital Certificate) 與核證機關 (CA)", en: "Digital Certificate & Certificate Authority (CA)" },
          text: {
            zh: "**問題**：Bob 怎知網上的「Alice 公鑰」不是黑客假冒的？\n**解決**：由受信任的第三方**核證機關 (Certificate Authority, CA)** 核實網站/機構身份後，簽發**數碼證書**（內含機構名稱、其公鑰、有效期及 CA 的數碼簽署）。瀏覽器內置受信任 CA 的公鑰，自動驗證 HTTPS 網站的證書真偽！",
            en: "**Problem**: How does Bob trust that 'Alice's Public Key' isn't forged by an attacker?\n**Solution**: A trusted **Certificate Authority (CA)** verifies identity and issues a **Digital Certificate** binding the entity's identity to its public key, digitally signed by the CA. Browsers use pre-installed CA public keys to validate HTTPS sites!"
          }
        }
      ]
    }
  ]
});
