export const asset = (path) => `/assets/${path}`;

export const products = [
  {
    slug: "single-grain",
    name: "荣帝单一谷物威士忌",
    shortName: "单一谷物",
    line: "轻盈甜润的入门表达",
    image: asset("095052fe-6a69-4cad-af76-ec0bfa034de8.png"),
    original: asset("095052fe-6a69-4cad-af76-ec0bfa034de8.png"),
    volume: "700ml",
    abv: "40%vol",
    style: "单一谷物威士忌",
    cask: "谷物甜感与干净桶香",
    maturity: "稳定熟成",
    flavor: ["香草", "蜂蜜", "谷物甜", "柔顺尾韵"],
    scenes: ["轻松聚饮", "高球", "威士忌入门"],
    color: "amber",
    accent: "from-amber-50 to-orange-50",
    visual: {
      bottle: "#c96922",
      bottleDeep: "#7c2d12",
      cap: "#f97316",
      label: "#d97706",
      box: "#f5c27a",
      boxDeep: "#8a4b16",
      text: "单一谷物"
    },
    contentAngle: "把国产威士忌的第一口做得柔和、好懂、好分享。"
  },
  {
    slug: "zhuoxuan-01",
    name: "荣帝卓选一号单一麦芽威士忌",
    shortName: "卓选一号",
    line: "认识荣帝单一麦芽的第一杯",
    image: asset("495b5704-2f61-46c8-a589-8f0ae1c227db.png"),
    original: asset("495b5704-2f61-46c8-a589-8f0ae1c227db.png"),
    volume: "700ml",
    abv: "40%vol",
    style: "单一麦芽威士忌",
    cask: "四种桶平衡体系",
    maturity: "平衡型熟成",
    flavor: ["青苹果", "香草奶油", "清爽麦芽", "协调层次"],
    scenes: ["礼赠", "初阶品鉴", "朋友小聚"],
    color: "cyan",
    accent: "from-cyan-50 to-sky-50",
    visual: {
      bottle: "#67e8f9",
      bottleDeep: "#0e7490",
      cap: "#7dd3fc",
      label: "#06b6d4",
      box: "#7dd3fc",
      boxDeep: "#0891b2",
      text: "卓选一号"
    },
    contentAngle: "用平衡感降低理解门槛，让消费者进入单一麦芽。"
  },
  {
    slug: "palo-cortado",
    name: "荣帝帕洛科塔多雪莉桶强单一麦芽威士忌",
    shortName: "帕洛科塔多桶强",
    line: "2026 IWSC Bronze Award，88分",
    image: asset("7e916faa-3f9a-4675-8074-3cf1fcd51819.png"),
    original: asset("7e916faa-3f9a-4675-8074-3cf1fcd51819.png"),
    volume: "700ml",
    abv: "60%vol",
    style: "桶强单一麦芽威士忌",
    cask: "3年美国全新白橡木桶 + 3年40年桶龄Palo Cortado雪莉桶",
    maturity: "六年陈酿",
    flavor: ["香草", "焦糖", "烘烤坚果", "蜜饯果干", "黑巧克力"],
    scenes: ["进阶品鉴", "收藏分享", "国际奖项传播"],
    color: "emerald",
    accent: "from-emerald-50 to-teal-50",
    visual: {
      bottle: "#0f766e",
      bottleDeep: "#064e3b",
      cap: "#134e4a",
      label: "#047857",
      box: "#0f766e",
      boxDeep: "#064e3b",
      text: "帕洛科塔多"
    },
    contentAngle: "用少见Palo Cortado桶型讲复杂度，用IWSC背书建立信任。"
  },
  {
    slug: "sherry-three-cask",
    name: "荣帝天成雪莉三桶单一麦芽威士忌",
    shortName: "天成雪莉三桶",
    line: "雪莉桶系的复合甜润",
    image: asset("b3f163b2-9650-48c2-85a5-60a6be1bf1ab.png"),
    original: asset("b3f163b2-9650-48c2-85a5-60a6be1bf1ab.png"),
    volume: "700ml",
    abv: "46%vol",
    style: "单一麦芽威士忌",
    cask: "雪莉三桶复合陈酿",
    maturity: "进阶熟成",
    flavor: ["果干", "焦糖", "坚果", "温润甜香"],
    scenes: ["节日礼赠", "餐后慢饮", "雪莉桶入门"],
    color: "orange",
    accent: "from-orange-50 to-amber-50",
    visual: {
      bottle: "#ea580c",
      bottleDeep: "#9a3412",
      cap: "#fb923c",
      label: "#f97316",
      box: "#fb923c",
      boxDeep: "#c2410c",
      text: "天成雪莉三桶"
    },
    contentAngle: "以三桶结构呈现雪莉桶从甜感到厚度的完整层次。"
  },
  {
    slug: "burgundy-red-wine",
    name: "荣帝勃艮第红酒桶单一麦芽威士忌",
    shortName: "勃艮第红酒桶",
    line: "红果香与单宁结构",
    image: asset("d2dfedcf-bccb-47b5-821a-1a83d68172e1.png"),
    original: asset("d2dfedcf-bccb-47b5-821a-1a83d68172e1.png"),
    volume: "700ml",
    abv: "40%vol",
    style: "单一麦芽威士忌",
    cask: "勃艮第红酒桶",
    maturity: "红酒桶熟成",
    flavor: ["红果", "莓果酸甜", "可可", "柔和单宁"],
    scenes: ["女性用户沟通", "甜感偏好", "佐餐"],
    color: "rose",
    accent: "from-rose-50 to-red-50",
    visual: {
      bottle: "#be123c",
      bottleDeep: "#881337",
      cap: "#9f1239",
      label: "#e11d48",
      box: "#be123c",
      boxDeep: "#7f1d1d",
      text: "勃艮第红酒桶"
    },
    contentAngle: "用红酒桶语言连接葡萄酒用户，突出东方海岸的柔和层次。"
  }
];

export const storyBlocks = [
  {
    title: "起源",
    kicker: "来自青岛的山海之酿",
    body: "荣帝蒸馏厂坐落于崂山山脉、青岛山海之间。山林与海风交汇，云雾与海洋性气候共同塑造了长期陈年的自然环境。"
  },
  {
    title: "定位",
    kicker: "中国风土单一麦芽",
    body: "以崂山深层地下水、精选谷物、双蒸馏与风味桶管理，探索代表东方海岸的威士忌表达。"
  },
  {
    title: "理念",
    kicker: "时间与自然共同完成",
    body: "荣帝坚持自己发酵、自己蒸馏、自己陈酿，以长期主义理解原料、工艺、橡木桶与时间的关系。"
  }
];

export const processPillars = [
  {
    title: "水源",
    body: "崂山深层地下水历经花岗岩与多层岩系过滤，水质纯净稳定，适合糖化、发酵与蒸馏。",
    tags: ["深层地下水", "矿物结构", "发酵友好"]
  },
  {
    title: "谷物与麦芽",
    body: "以高品质大麦麦芽与精选谷物作为酒体基础，并通过无泥煤、泥煤麦芽比例塑造不同风格。",
    tags: ["大麦麦芽", "精选谷物", "风格控制"]
  },
  {
    title: "酵母与发酵",
    body: "蒸馏酒专用酵母与酿造酵母组合使用，通过周期与温度控制生成更丰富的香气前体。",
    tags: ["慢速发酵", "香气前体", "口感结构"]
  },
  {
    title: "双蒸馏体系",
    body: "酒醪在铜制壶式蒸馏器中完成两次蒸馏，调节酒体轻盈度、油脂感与香气表现。",
    tags: ["铜制壶式", "初馏", "再馏"]
  },
  {
    title: "风味桶系统",
    body: "橡木桶不是终点，而是风味延展之路。不同桶型共同构成多样而复杂的风味基础。",
    tags: ["美国白橡木", "雪莉桶", "红酒桶"]
  },
  {
    title: "调配判断",
    body: "酿酒师持续评估成熟状态与风味表现，在稳定品牌风格的同时呈现层次分明的成品。",
    tags: ["持续品鉴", "桶样记录", "风格稳定"]
  }
];

export const faqs = [
  {
    category: "品牌认知",
    q: "国产威士忌和进口威士忌应该怎么比较？",
    a: "不应只用产地判断品质。更关键的是原料、水源、发酵、蒸馏、陈酿环境和桶管理。荣帝的表达重点是青岛山海风土、崂山深层地下水与自发酵自蒸馏自陈酿体系。",
    operation: "内容角度：用“从青岛到世界”连接中国威士忌的专业化与国际认可。"
  },
  {
    category: "饮用知识",
    q: "40%vol、46%vol和60%vol有什么区别？",
    a: "40%vol更适合轻松饮用与入门沟通；46%vol通常保留更明显的香气和结构；60%vol属于桶强表达，风味集中，适合小口品鉴或少量加水打开香气。",
    operation: "内容角度：按人群拆分入门、进阶、收藏三类话术。"
  },
  {
    category: "保存方式",
    q: "威士忌开瓶后怎么保存？",
    a: "直立放置，避免阳光直射和高温，瓶盖保持密封。开瓶后如果余量较少，建议缩短饮用周期，降低氧化对香气的影响。",
    operation: "内容角度：做成售后知识卡，提升复购前的服务感。"
  },
  {
    category: "产品疑问",
    q: "瓶中出现轻微沉淀物正常吗？",
    a: "在低温、高酒精度或风味物质较丰富的情况下，酒液可能出现轻微絮状或沉淀现象，通常与天然油脂、桶中析出物或温度变化有关。若气味、颜色明显异常，应停止饮用并咨询售后。",
    operation: "内容角度：用专业但不吓人的语气解释“自然风味物质”。"
  },
  {
    category: "桶型理解",
    q: "Palo Cortado为什么值得单独讲？",
    a: "Palo Cortado是相对少见的雪莉风格，兼具Amontillado的坚果优雅与Oloroso的厚重结构。用于单一麦芽陈酿时，更适合作为高阶风味教育内容。",
    operation: "内容角度：把“稀有桶型”转化为专家感和收藏理由。"
  }
];

export const channelTemplates = {
  official: ({ product }) =>
    `从青岛到酒杯：${product.shortName}如何表达荣帝的山海风土？`,
  xhs: ({ product }) =>
    `这瓶${product.shortName}，适合想认真认识国产威士忌的人。\n\n它的关键词不是“刺激”，而是${product.flavor.slice(0, 3).join("、")}。如果你喜欢${product.scenes[0]}，这款会更容易打开。\n\n#荣帝威士忌 #中国威士忌 #单一麦芽 #青岛风土`,
  video: ({ product }) =>
    `镜头1：青岛山海与蒸馏厂环境，旁白“威士忌的风味，先从水和气候开始。”\n镜头2：展示${product.shortName}，字幕“${product.abv}｜${product.volume}｜${product.style}”。\n镜头3：切到风味标签：${product.flavor.join(" / ")}。\n镜头4：收束到饮用场景：“${product.scenes.join("、")}，这就是它最适合被打开的时刻。”`,
  live: ({ product }) =>
    `老板们看这款${product.shortName}，它不是只讲一个口味点，而是讲清楚荣帝的产品结构。它的核心是${product.cask}，入口能感受到${product.flavor.slice(0, 3).join("、")}。如果你是${product.scenes[0]}或者想送一瓶有辨识度的中国威士忌，这款就很合适。`
};
