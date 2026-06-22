const VIETNAMESE_QA_HOOK =
  "HOOK: Vietnamese UI, prompts, and explanations must be natural, accurate, and idiomatic for Vietnamese learners.";

const i18n = {
  vi: {
    brandSubtitle: "Dành cho người Việt học tiếng Trung",
    review: "Ôn câu sai",
    lang: "中文",
    dashboard: "Bảng học hôm nay",
    todayGoal: "Mục tiêu hôm nay",
    goalText: "Hoàn thành 1 bài học hoặc 1 chủ đề.",
    saved: "Từ đã lưu",
    wrong: "Câu sai",
    streak: "Ngày học",
    xp: "Điểm luyện tập",
    choose: "Chọn lộ trình học",
    chooseSub: "Học theo giáo trình HSK hoặc luyện các chủ đề giao tiếp thường dùng.",
    hskTitle: "Khóa HSK",
    hskSub: "HSK2 đến HSK5, học theo từng bài trong giáo trình.",
    dailyTitle: "Tiếng Trung giao tiếp",
    dailySub: "Tình huống học tập, công việc và đời sống hằng ngày.",
    enter: "Vào học",
    continue: "Tiếp tục",
    path: "Lộ trình",
    hskCourse: "Chọn cấp độ và bài học HSK",
    dailyCourse: "Chọn chủ đề tiếng Trung giao tiếp",
    lesson: "Bài",
    translate: "Việt → Trung",
    dictation: "Nghe viết",
    stageWord: "Từ vựng",
    stagePhrase: "Từ vựng",
    stageSentence: "Câu",
    stageMixed: "Ôn tập",
    prev: "Trước",
    play: "Nghe",
    slow: "Nghe chậm",
    showAnswer: "Đáp án",
    next: "Tiếp",
    mastered: "Đã thuộc",
    favorite: "Lưu",
    translateHint: "Nhìn tiếng Việt, gõ pinyin hoặc chữ Hán.",
    dictationHint: "Nghe tiếng Trung, gõ pinyin hoặc chữ Hán.",
    inputPlaceholder: "Gõ pinyin hoặc chữ Hán",
    good: "Đúng rồi. Tiếp tục nào.",
    continuePrompt: "Nhấn Enter hoặc Space để sang câu tiếp theo",
    bad: "Chưa đúng. Nghe lại tiếng Trung rồi thử tiếp.",
    done: "Hoàn thành!",
    completeTitle: "Bài học hoàn thành",
    completeSub: "Bạn đã hoàn thành mục tiêu hôm nay.",
    backHome: "Về trang chính",
    nextLesson: "Bài tiếp theo",
    teacherPreview: "Bản xem trước cho giáo viên",
    answerTitle: "Nội dung cần nhớ",
    modeLabel: "Chế độ luyện tập",
    topicCount: "chủ đề",
    itemCount: "mục luyện",
    login: "Đăng nhập",
    register: "Đăng ký",
    logout: "Đăng xuất",
    account: "Tài khoản",
    admin: "Admin",
    vocab: "Bộ từ",
    subscriptions: "Gói đăng ký",
    homeTab: "Trang chủ",
    dailyTabNav: "Giao tiếp",
  },
  zh: {
    brandSubtitle: "给越南学生使用的中文练习",
    review: "错题复习",
    lang: "VI",
    dashboard: "今日学习面板",
    todayGoal: "今日学习目标",
    goalText: "完成 1 个 lesson 或 1 个主题。",
    saved: "生词收藏",
    wrong: "错题",
    streak: "连续学习",
    xp: "练习积分",
    choose: "选择学习路径",
    chooseSub: "按 HSK 教材学习，或练习高频生活/职场中文。",
    hskTitle: "HSK课程",
    hskSub: "HSK2 到 HSK5，按教材第几课排列。",
    dailyTitle: "高频汉语",
    dailySub: "学习、工作和生活场景里的常用中文。",
    enter: "进入",
    continue: "继续",
    path: "学习路径",
    hskCourse: "选择HSK等级和课程章节",
    dailyCourse: "选择高频汉语主题",
    lesson: "第",
    translate: "越译中",
    dictation: "听写",
    stageWord: "生词",
    stagePhrase: "生词",
    stageSentence: "句子",
    stageMixed: "混合复习",
    prev: "上一题",
    play: "播放",
    slow: "慢速",
    showAnswer: "答案",
    next: "下一题",
    mastered: "掌握",
    favorite: "收藏",
    translateHint: "看越南语提示，输入拼音或汉字。",
    dictationHint: "听中文语音，输入拼音或汉字。",
    inputPlaceholder: "输入拼音或汉字",
    good: "正确，继续。",
    continuePrompt: "按 Enter / 空格继续",
    bad: "还不对，听一下再试。",
    done: "完成！",
    completeTitle: "Lesson 完成",
    completeSub: "今日目标已完成。",
    backHome: "返回首页",
    nextLesson: "下一课",
    teacherPreview: "老师中文预览",
    answerTitle: "记忆内容",
    modeLabel: "练习模式",
    topicCount: "个主题",
    itemCount: "个练习",
    login: "登录",
    register: "注册",
    logout: "退出登录",
    account: "我的账户",
    admin: "管理员",
    vocab: "生词本",
    subscriptions: "订阅套餐",
    homeTab: "首页",
    dailyTabNav: "交流",
  },
};

const posText = {
  vi: {
    pron: "đại từ",
    noun: "danh từ",
    verb: "động từ",
    adj: "tính từ",
    adv: "phó từ",
    phrase: "từ vựng",
    grammar: "ngữ pháp",
  },
  zh: {
    pron: "代词",
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    adv: "副词",
    phrase: "生词",
    grammar: "语法",
  },
};

const stageKey = {
  word: "stageWord",
  phrase: "stagePhrase",
  sentence: "stageSentence",
  mixed: "stageMixed",
};

function w(text, pinyin, tone, pos, vi) {
  return { text, pinyin, tone, pos, vi };
}

function item(stage, vi, hanzi, words, source = "sample") {
  return {
    stage,
    vi,
    hanzi,
    words,
    source,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function splitHskLessonItems(items = []) {
  const safeItems = Array.isArray(items) ? items : [];
  return {
    word: safeItems.filter((entry) => entry.stage === "word"),
    phrase: safeItems.filter((entry) => entry.stage === "phrase"),
    sentence: safeItems.filter((entry) => entry.stage === "sentence"),
  };
}

function normalizeHskLesson(lessonItem = {}) {
  const sourceItems = Array.isArray(lessonItem.items) ? lessonItem.items : [];
  const splitContent = splitHskLessonItems(sourceItems);
  const content = {
    ...lessonItem.content,
    word: Array.isArray(lessonItem.content?.word) ? lessonItem.content.word : splitContent.word,
    phrase: Array.isArray(lessonItem.content?.phrase) ? lessonItem.content.phrase : splitContent.phrase,
    sentence: Array.isArray(lessonItem.content?.sentence) ? lessonItem.content.sentence : splitContent.sentence,
  };
  const items = sourceItems.length > 0 ? sourceItems : [...content.word, ...content.phrase, ...content.sentence];
  return {
    ...lessonItem,
    items,
    content,
    wordItems: content.word,
    phraseItems: content.phrase,
    sentenceItems: content.sentence,
  };
}

function lesson(id, no, title, items) {
  return normalizeHskLesson({ id, no, title, items });
}

const hskLevels = {
  HSK1: [],
  HSK2: [
    lesson("hsk2-l1", 1, "认识你很高兴", [
      item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
      item("word", "bạn", "你", [w("你", "ni", "nǐ", "pron", "bạn")]),
      item("word", "tôi", "我", [w("我", "wo", "wǒ", "pron", "tôi")]),
      item("word", "quen biết", "认识", [w("认识", "renshi", "rènshi", "verb", "quen biết")]),
      item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
      item("sentence", "Rất vui được gặp bạn.", "认识你很高兴。", [
        w("认识", "renshi", "rènshi", "verb", "quen biết"),
        w("你", "ni", "nǐ", "pron", "bạn"),
        w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui"),
      ]),
      item("mixed", "Tôi rất vui.", "我很高兴。", [w("我", "wo", "wǒ", "pron", "tôi"), w("很高兴", "hen gaoxing", "hěn gāoxìng", "phrase", "rất vui")]),
    ]),
    lesson("hsk2-l2", 2, "今天几号", [
      item("word", "hôm nay", "今天", [w("今天", "jintian", "jīntiān", "noun", "hôm nay")]),
      item("phrase", "mấy giờ", "几点", [w("几", "ji", "jǐ", "pron", "mấy"), w("点", "dian", "diǎn", "noun", "giờ")]),
      item("sentence", "Bây giờ là mấy giờ?", "现在几点？", [w("现在", "xianzai", "xiànzài", "noun", "bây giờ"), w("几点", "ji dian", "jǐ diǎn", "phrase", "mấy giờ")]),
    ]),
    lesson("hsk2-l3", 3, "我想学中文", [
      item("word", "học", "学", [w("学", "xue", "xué", "verb", "học")]),
      item("phrase", "học tiếng Trung", "学中文", [w("学", "xue", "xué", "verb", "học"), w("中文", "zhongwen", "Zhōngwén", "noun", "tiếng Trung")]),
      item("sentence", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
    ]),
  ],
  HSK3: [
    lesson("hsk3-l1", 1, "周末你有什么打算", [
      item("word", "cuối tuần", "周末", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần")]),
      item("phrase", "có dự định", "有打算", [w("有", "you", "yǒu", "verb", "có"), w("打算", "dasuan", "dǎsuàn", "noun", "dự định")]),
      item("sentence", "Cuối tuần bạn có dự định gì?", "周末你有什么打算？", [w("周末", "zhoumo", "zhōumò", "noun", "cuối tuần"), w("你", "ni", "nǐ", "pron", "bạn"), w("有什么打算", "you shenme dasuan", "yǒu shénme dǎsuàn", "phrase", "có dự định gì")]),
    ]),
    lesson("hsk3-l2", 2, "他什么时候回来", [
      item("word", "trở về", "回来", [w("回来", "huilai", "huílái", "verb", "trở về")]),
      item("sentence", "Khi nào anh ấy trở về?", "他什么时候回来？", [w("他", "ta", "tā", "pron", "anh ấy"), w("什么时候", "shenme shihou", "shénme shíhou", "phrase", "khi nào"), w("回来", "huilai", "huílái", "verb", "trở về")]),
    ]),
  ],
  HSK4: [
    lesson("hsk4-l1", 1, "简单的爱情", [
      item("word", "đơn giản", "简单", [w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
      item("sentence", "Tình yêu không đơn giản.", "爱情不简单。", [w("爱情", "aiqing", "àiqíng", "noun", "tình yêu"), w("不", "bu", "bù", "adv", "không"), w("简单", "jiandan", "jiǎndān", "adj", "đơn giản")]),
    ]),
    lesson("hsk4-l2", 2, "真正的朋友", [
      item("word", "thật sự", "真正", [w("真正", "zhenzheng", "zhēnzhèng", "adj", "thật sự")]),
      item("sentence", "Bạn thật sự là bạn của tôi.", "你是真正的朋友。", [w("你", "ni", "nǐ", "pron", "bạn"), w("真正的朋友", "zhenzheng de pengyou", "zhēnzhèng de péngyou", "phrase", "người bạn thật sự")]),
    ]),
  ],
  HSK5: [
    lesson("hsk5-l1", 1, "人生有选择", [
      item("word", "lựa chọn", "选择", [w("选择", "xuanze", "xuǎnzé", "verb", "lựa chọn")]),
      item("sentence", "Trong cuộc sống luôn có lựa chọn.", "人生总有选择。", [w("人生", "rensheng", "rénshēng", "noun", "cuộc sống"), w("总有", "zong you", "zǒng yǒu", "phrase", "luôn có"), w("选择", "xuanze", "xuǎnzé", "noun", "lựa chọn")]),
    ]),
    lesson("hsk5-l2", 2, "工作效率", [
      item("word", "hiệu suất", "效率", [w("效率", "xiaolv", "xiàolǜ", "noun", "hiệu suất")]),
      item("sentence", "Chúng ta cần nâng cao hiệu suất làm việc.", "我们需要提高工作效率。", [w("我们", "women", "wǒmen", "pron", "chúng ta"), w("需要", "xuyao", "xūyào", "verb", "cần"), w("提高", "tigao", "tígāo", "verb", "nâng cao"), w("工作效率", "gongzuo xiaolv", "gōngzuò xiàolǜ", "phrase", "hiệu suất làm việc")]),
    ]),
  ],
  HSK6: [],
};

if (globalThis.lessonContent) {
  Object.entries(globalThis.lessonContent).forEach(([levelKey, lessonMap]) => {
    if (!hskLevels[levelKey]) return;
    Object.entries(lessonMap).forEach(([lessonId, lessonValue]) => {
      const lessonIndex = hskLevels[levelKey].findIndex((entry) => entry.id === lessonId);
      const normalizedLesson = normalizeHskLesson(lessonValue);
      if (lessonIndex >= 0) {
        hskLevels[levelKey][lessonIndex] = normalizedLesson;
      } else {
        hskLevels[levelKey].push(normalizedLesson);
      }
    });
    hskLevels[levelKey].sort((a, b) => (a.no || 0) - (b.no || 0));
  });
}

const dailyThemes = globalThis.highFrequencyTopics || [
  ["greeting", "Hi", "Chào hỏi và giới thiệu", "问候与介绍", "#58cc02"],
  ["interview", "CV", "Phỏng vấn xin việc", "工作面试", "#1cb0f6"],
  ["classroom", "BK", "Học trên lớp", "课堂学习", "#ce82ff"],
  ["travel", "TR", "Du lịch", "旅游", "#ff9600"],
  ["shopping", "SH", "Ăn uống và mua sắm", "点餐购物", "#ff4b4b"],
  ["transport", "GO", "Đi lại", "出行交通", "#00c2a8"],
  ["renting", "HM", "Thuê nhà", "租房生活", "#7c5cff"],
  ["sickleave", "DR", "Ốm đau và xin nghỉ", "生病与请假", "#ff6b9a"],
  ["office", "OF", "Đời sống công sở", "职场生活", "#64748b"],
  ["factory", "FX", "Xưởng sản xuất", "工厂车间", "#a855f7"],
  ["ecommerce", "EC", "Công việc TMĐT", "电商职场", "#f97316"],
  ["relationship", "RL", "Quan hệ thân mật", "亲密关系", "#e11d48"],
].map(([id, icon, vi, zh, color]) => ({
  id,
  icon,
  vi,
  zh,
  color,
  items: [
    item("word", "xin chào", "你好", [w("你好", "ni hao", "nǐ hǎo", "phrase", "xin chào")]),
    item("phrase", "rất vui", "很高兴", [w("很", "hen", "hěn", "adv", "rất"), w("高兴", "gaoxing", "gāoxìng", "adj", "vui")]),
    item("sentence", "Bạn hãy nói chậm một chút.", "请说慢一点儿。", [w("请", "qing", "qǐng", "verb", "xin hãy"), w("说慢一点儿", "shuo man yidianr", "shuō màn yìdiǎnr", "phrase", "nói chậm một chút")]),
    item("mixed", "Tôi muốn học tiếng Trung.", "我想学中文。", [w("我", "wo", "wǒ", "pron", "tôi"), w("想", "xiang", "xiǎng", "verb", "muốn"), w("学中文", "xue zhongwen", "xué Zhōngwén", "phrase", "học tiếng Trung")]),
  ],
}));

const hskTags = {
  "hsk2-l1": { text: "Du lịch", class: "tag-travel", icon: "🌲" },
  "hsk2-l2": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
  "hsk2-l3": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l4": { text: "Công việc", class: "tag-work", icon: "💼" },
  "hsk2-l5": { text: "Mua sắm", class: "tag-shopping", icon: "🛍️" },
  "hsk2-l6": { text: "Ẩm thực", class: "tag-food", icon: "🍜" },
  "hsk2-l7": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l8": { text: "Giao tiếp", class: "tag-chat", icon: "💬" },
  "hsk2-l9": { text: "Học tập", class: "tag-study", icon: "📚" },
  "hsk2-l10": { text: "Thói quen", class: "tag-habit", icon: "🕒" },
};

function getHskTag(lessonId) {
  return hskTags[lessonId] || { text: "Học tập", class: "tag-study", icon: "📚" };
}

function getHskStatusBadge(lessonId) {
  if (lessonId === "hsk2-l1") return `<span class="badge-status badge-new">★ Mới</span>`;
  if (lessonId === "hsk2-l4") return `<span class="badge-status badge-popular">★ Phổ biến</span>`;
  return "";
}

const themeCategories = {
  greeting: ["giao-tiep", "pho-bien"],
  greeting_introduction: ["giao-tiep", "pho-bien"],
  interview: ["cong-viec", "pho-bien"],
  job_interview: ["cong-viec", "pho-bien"],
  classroom: ["hoc-tap"],
  classroom_learning: ["hoc-tap"],
  travel: ["du-lich", "pho-bien"],
  tourism_travel: ["du-lich", "pho-bien"],
  shopping: ["giao-tiep", "pho-bien"],
  dining_shopping: ["giao-tiep", "pho-bien"],
  ordering_shopping: ["giao-tiep", "pho-bien"],
  transport: ["du-lich"],
  transportation: ["du-lich"],
  renting: ["giao-tiep"],
  renting_life: ["giao-tiep"],
  sickleave: ["cong-viec"],
  illness_leave: ["cong-viec"],
  sick_leave: ["cong-viec"],
  office: ["cong-viec"],
  office_life: ["cong-viec"],
  factory: ["cong-viec"],
  factory_workshop: ["cong-viec"],
  ecommerce: ["cong-viec"],
  ecommerce_workplace: ["cong-viec"],
  relationship: ["giao-tiep"],
  close_relationships: ["giao-tiep"],
};

function getThemeIcon(visualType) {
  const icons = {
    chat: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 5.82 2 10.5c0 1.83.69 3.52 1.87 4.88-.17.65-.63 1.95-1.72 2.75-.15.11-.18.31-.07.45.07.09.18.14.3.14.32 0 1.62-.07 3.09-.76 1.45.86 3.12 1.34 4.93 1.34 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm-3.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm3.5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    book: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="15" rx="3"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="6" x2="12" y2="21"/></svg>`,
    cart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    bus: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="8" y1="3" x2="8" y2="9"/><line x1="16" y1="3" x2="16" y2="9"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/><line x1="6" y1="19" x2="6" y2="21"/><line x1="18" y1="19" x2="18" y2="21"/></svg>`,
    home: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clinic: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>`,
    desk: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="8" rx="2"/><path d="M6 14h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/><path d="M5 11v3M19 11v3"/><line x1="12" y1="17" x2="12" y2="20"/><path d="M8 21h8M12 20l-3 2M12 20l3 2"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M22 22H2V10l6 4v-4l6 4v-4l6 4v8zM17 14h2v2h-2v-2zm-5 2h2v2h-2v-2zm-5 0h2v2H7v-2z"/></svg>`,
    shop: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a2 2 0 0 1 4 0v1"/><path d="M11 11V6a2 2 0 0 1 4 0v2"/><path d="M15 11V7a2 2 0 0 1 4 0v4"/><path d="M3 11v2a7 7 0 0 0 14 0v-2"/><path d="M17 11v2a3 3 0 0 0 3 3"/></svg>`,
    plane: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M13 2l7 10-7 10V2z"/></svg>`,
    food: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v8"/><path d="M6 11c0 2.2 1.8 4 4 4h0"/><path d="M10 3v11"/><path d="M18 3c0 5-2 8-4 11v7"/><path d="M18 11V3"/></svg>`,
  };
  return icons[visualType] || `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
}

function iconSvg(name) {
  const icons = {
    pen: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    target: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/><path d="M8 9l4-4 4 3 4-5"/></svg>`,
    badge: `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2l2.6 5.1 5.7.8-4.1 4 1 5.7L12 15l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 2z"/></svg>`,
    "bar-chart": `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 19V12"/><path d="M12 19V7"/><path d="M19 19V4"/></svg>`,
    "arrow-right": `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>`,
    "book-open": `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5A3.5 3.5 0 0 1 6.5 2H21v17H7a4 4 0 0 0-4 4V5.5z"/><path d="M3 19a4 4 0 0 1 4-4h14"/></svg>`,
    letters: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19l5-14 5 14"/><path d="M6 14h6"/><path d="M15 6h6"/><path d="M18 3v13"/><path d="M16 10c1.2 2.8 2.9 4.8 5 6"/></svg>`,
    message: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.6-4.8A8 8 0 1 1 21 12z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>`,
  };
  return icons[name] || getThemeIcon(name);
}

const state = {
  lang: localStorage.getItem("v2-lang") || "vi",
  screen: "home",
  module: "hsk",
  level: "HSK2",
  hskLevelPicker: true,
  hskContentType: "",
  hskPendingLessonId: "",
  dailyContentType: "",
  dailyPendingThemeId: "",
  lessonId: "hsk2-l1",
  themeId: "greeting",
  mode: "translate",
  index: 0,
  activeWord: 0,
  activeInput: "",
  slotProgress: [],
  lastBadInput: "",
  solved: [],
  complete: false,
  score: 0,
  wrong: new Set(JSON.parse(localStorage.getItem("v2-wrong") || "[]")),
  saved: new Set(JSON.parse(localStorage.getItem("v2-saved") || "[]")),
  completed: new Set(JSON.parse(localStorage.getItem("v2-completed") || "[]")),
  hskSearchQuery: "",
  hskFilterTab: "newest",
  dailySearchQuery: "",
  dailyFilterTab: "all",
  vocabSearchQuery: "",
  vocabFilterTab: "all",
  user: JSON.parse(localStorage.getItem("v2-user") || "null"),
  adminUsers: [],
  adminStatus: "",
  adminTab: "users",
};

const $ = (selector) => document.querySelector(selector);
const screens = {
  home: $("#homeScreen"),
  course: $("#courseScreen"),
  practice: $("#practiceScreen"),
  complete: $("#completeScreen"),
  admin: $("#adminScreen"),
  vocab: $("#vocabScreen"),
  subscriptions: $("#subscriptionsScreen"),
};
const t = (key) => i18n[state.lang][key] || i18n.vi[key] || key;
const hskContentTypes = [
  { id: "word", labelVi: "Từ vựng", labelZh: "生词" },
  { id: "sentence", labelVi: "Câu", labelZh: "句子" },
];
function hskContentTypeLabel(type) {
  const entry = hskContentTypes.find((item) => item.id === type);
  if (!entry) return "";
  return state.lang === "vi" ? entry.labelVi : entry.labelZh;
}
function hskAllLessonItems(lessonItem) {
  const items = Array.isArray(lessonItem.items) ? lessonItem.items : [];
  if (items.length > 0) return items;
  return [
    ...(Array.isArray(lessonItem.content?.word) ? lessonItem.content.word : []),
    ...(Array.isArray(lessonItem.content?.phrase) ? lessonItem.content.phrase : []),
    ...(Array.isArray(lessonItem.content?.sentence) ? lessonItem.content.sentence : []),
  ];
}
function chineseCharCount(value) {
  return (String(value || "").match(/[\u4e00-\u9fff]/g) || []).length;
}
function itemChineseText(item = {}) {
  return item.hanzi || item.chinese_text || item.text || "";
}
function learningContentBucket(item = {}) {
  if (item.batch_id === "HF-001" && (item.item_type === "word" || item.item_type === "sentence")) {
    return item.item_type;
  }
  const count = chineseCharCount(itemChineseText(item));
  if (count > 0) return count <= 4 ? "word" : "sentence";
  return item.stage === "sentence" ? "sentence" : "word";
}
function lessonItemsByDisplayType(items = [], type = "") {
  const safeItems = Array.isArray(items) ? items : [];
  if (!type) return safeItems;
  if (type === "word" || type === "sentence") {
    return safeItems.filter((item) => learningContentBucket(item) === type);
  }
  return [];
}
function hskLessonItemsByType(lessonItem, type = state.hskContentType) {
  return lessonItemsByDisplayType(hskAllLessonItems(lessonItem), type);
}
function getHskPendingLesson() {
  return hskLevels[state.level].find((lessonItem) => lessonItem.id === state.hskPendingLessonId) || null;
}
function dailyThemeItemsByType(theme, type = state.dailyContentType) {
  const items = Array.isArray(theme?.items) ? theme.items : [];
  return lessonItemsByDisplayType(items, type);
}
function getDailyPendingTheme() {
  return dailyThemes.find((theme) => theme.id === state.dailyPendingThemeId) || null;
}
const shouldShowTeacherPreview = (currentState) =>
  globalThis.practiceRules?.shouldShowTeacherPreview
    ? globalThis.practiceRules.shouldShowTeacherPreview(currentState)
    : currentState.complete;
const getTeachingPosLabelKey = (rawPos) =>
  globalThis.lessonRuntimeRules?.getTeachingPosLabelKey
    ? globalThis.lessonRuntimeRules.getTeachingPosLabelKey(rawPos)
    : rawPos;
const getPromptSizeVariant = (text) =>
  globalThis.lessonRuntimeRules?.getPromptSizeVariant
    ? globalThis.lessonRuntimeRules.getPromptSizeVariant(text)
    : "normal";

const themeVisuals = {
  greeting: "chat",
  greeting_introduction: "chat",
  interview: "briefcase",
  job_interview: "briefcase",
  classroom: "book",
  classroom_learning: "book",
  travel: "map",
  tourism_travel: "map",
  shopping: "cart",
  dining_shopping: "cart",
  ordering_shopping: "cart",
  transport: "bus",
  transportation: "bus",
  renting: "home",
  renting_life: "home",
  sickleave: "clinic",
  illness_leave: "clinic",
  sick_leave: "clinic",
  office: "desk",
  office_life: "desk",
  factory: "gear",
  factory_workshop: "gear",
  ecommerce: "shop",
  ecommerce_workplace: "shop",
  relationship: "heart",
  close_relationships: "heart",
};

const dailyThemeCardMeta = {
  greeting_introduction: {
    titleVi: "Chào hỏi cơ bản",
    titleZh: "基础问候",
    descVi: "Làm quen, giới thiệu bản thân và chào hỏi thông thường trong đời sống hàng ngày.",
    descZh: "认识新朋友、自我介绍和日常生活中的常用问候。",
    visual: "wave",
  },
  job_interview: {
    titleVi: "Phỏng vấn xin việc",
    titleZh: "工作面试",
    descVi: "Chuẩn bị hồ sơ, giới thiệu bản thân và trả lời các câu hỏi phỏng vấn thường gặp.",
    descZh: "准备简历、自我介绍并回答常见面试问题。",
    visual: "briefcase",
  },
  classroom_learning: {
    titleVi: "Học trên lớp",
    titleZh: "课堂学习",
    descVi: "Giao tiếp với giáo viên, bạn cùng lớp và tham gia các hoạt động học tập hằng ngày.",
    descZh: "与老师、同学交流并参与日常课堂活动。",
    visual: "book",
  },
  travel: {
    titleVi: "Du lịch & Khám phá",
    titleZh: "旅游与探索",
    descVi: "Đặt vé, hỏi đường, đặt phòng khách sạn và xử lý tình huống khi đi du lịch.",
    descZh: "订票、问路、订酒店以及旅行中的常见情景。",
    visual: "plane",
  },
  ordering_shopping: {
    titleVi: "Ẩm thực & Mua sắm",
    titleZh: "餐饮与购物",
    descVi: "Gọi món, thanh toán, mặc cả và mua bán hàng hóa trong đời sống hằng ngày.",
    descZh: "点餐、结账、讨价还价和日常购物交流。",
    visual: "food",
  },
  transportation: {
    titleVi: "Đi lại & Giao thông",
    titleZh: "出行交通",
    descVi: "Hỏi đường, đón xe, mua vé và giao tiếp khi di chuyển trong thành phố.",
    descZh: "问路、乘车、买票以及城市出行交流。",
    visual: "bus",
  },
  renting_life: {
    titleVi: "Thuê nhà & Sinh hoạt",
    titleZh: "租房生活",
    descVi: "Tìm nhà, thương lượng giá thuê và trao đổi các vấn đề sinh hoạt hằng ngày.",
    descZh: "找房、谈租金以及处理日常生活问题。",
    visual: "home",
  },
  sick_leave: {
    titleVi: "Ốm đau & Xin nghỉ",
    titleZh: "生病与请假",
    descVi: "Mô tả triệu chứng, đi khám bệnh và xin nghỉ làm hoặc nghỉ học.",
    descZh: "描述症状、就医以及请假的相关表达。",
    visual: "clinic",
  },
  office_life: {
    titleVi: "Môi trường Công sở",
    titleZh: "职场环境",
    descVi: "Giao tiếp văn phòng, viết email, họp báo cáo và đàm phán thương mại.",
    descZh: "办公室沟通、写邮件、开会汇报和商务洽谈。",
    visual: "briefcase",
  },
  factory_workshop: {
    titleVi: "Xưởng sản xuất",
    titleZh: "工厂车间",
    descVi: "Trao đổi công việc, an toàn lao động và phối hợp trong môi trường nhà máy.",
    descZh: "工厂作业、安全规范与生产协作交流。",
    visual: "gear",
  },
  ecommerce_workplace: {
    titleVi: "Công việc TMĐT",
    titleZh: "电商职场",
    descVi: "Chăm sóc khách hàng, xử lý đơn hàng và giao tiếp trong môi trường thương mại điện tử.",
    descZh: "客户服务、订单处理与电商职场沟通。",
    visual: "shop",
  },
  close_relationships: {
    titleVi: "Hẹn hò & Kết bạn",
    titleZh: "约会与交友",
    descVi: "Thể hiện cảm xúc, rủ đi chơi, tán gẫu và xây dựng các mối quan hệ xã hội.",
    descZh: "表达情感、邀约、闲聊以及建立社交关系。",
    visual: "heart",
  },
};

function getDailyThemeCardMeta(theme) {
  const meta = dailyThemeCardMeta[theme.id];
  const isVi = state.lang === "vi";
  return {
    title: meta ? (isVi ? meta.titleVi : meta.titleZh) : (isVi ? theme.vi : theme.zh),
    desc: meta ? (isVi ? meta.descVi : meta.descZh) : (isVi ? theme.vi : theme.zh),
    visual: meta?.visual || themeVisuals[theme.id] || "chat",
  };
}

function lessonVisualClass(index) {
  return `lesson-visual-${index % 6}`;
}

function themeVisualClass(theme) {
  return `theme-visual-${themeVisuals[theme.id] || "chat"}`;
}

function themeIconLabel(theme) {
  const labels = {
    greeting: "问",
    greeting_introduction: "问",
    interview: "职",
    job_interview: "职",
    classroom: "书",
    classroom_learning: "书",
    travel: "行",
    tourism_travel: "行",
    shopping: "购",
    dining_shopping: "购",
    ordering_shopping: "购",
    transport: "车",
    transportation: "车",
    renting: "家",
    renting_life: "家",
    sickleave: "医",
    illness_leave: "医",
    sick_leave: "医",
    office: "办",
    workplace_life: "办",
    office_life: "办",
    factory: "工",
    factory_workshop: "工",
    ecommerce: "商",
    ecommerce_workplace: "商",
    relationship: "友",
    close_relationship: "友",
    close_relationships: "友",
  };
  return labels[theme.id] || theme.icon;
}

let audioContext;
let activeSpeechAudio = null;
let slowSpeech = false;
let preferredChineseVoice = null;

function currentCollection() {
  if (state.module === "vocab") {
    const items = [...state.saved].map(hanzi => findItemByHanzi(hanzi));
    return {
      id: "vocab",
      no: "",
      title: state.lang === "vi" ? "Bộ từ luyện tập" : "生词本练习",
      items: items.length > 0 ? items : [{ hanzi: "", words: [], vi: "", stage: "word" }]
    };
  }
  if (state.module === "hsk") {
    const lessonItem = hskLevels[state.level].find((entry) => entry.id === state.lessonId);
    if (!lessonItem) return null;
    const contentType = state.hskContentType;
    const lessonItems = hskLessonItemsByType(lessonItem, contentType);
    return {
      ...lessonItem,
      title:
        state.lang === "vi"
          ? `${lessonItem.titleVi || lessonItem.title}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`
          : `${lessonItem.titleZh || lessonItem.title}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`,
      items: lessonItems,
    };
  }
  const theme = dailyThemes.find((itemTheme) => itemTheme.id === state.themeId);
  const contentType = state.dailyContentType;
  return {
    id: theme.id,
    no: "",
    title:
      state.lang === "vi"
        ? `${theme.vi}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`
        : `${theme.zh}${contentType ? ` - ${hskContentTypeLabel(contentType)}` : ""}`,
    items: dailyThemeItemsByType(theme, contentType),
  };
}

function normalizeSegmentPos(pos = "") {
  const value = String(pos || "").trim();
  const map = {
    名词: "noun",
    动词: "verb",
    形容词: "adj",
    代词: "pron",
    副词: "adv",
    功能词: "function",
    noun: "noun",
    verb: "verb",
    adj: "adj",
    pron: "pron",
    adv: "adv",
    function: "function",
  };
  return map[value] || value;
}

const allowedSegmentTypes = new Set(["词", "短语", "功能词块"]);
const allowedSegmentPosLabels = new Set(["名词", "动词", "形容词", "代词", "副词", "功能词"]);
const illegalSegmentPosLabels = new Set(["生词", "关键词", "短语", "word", "phrase", "sentence", "vocab", "keyword"]);
const legacySegmentOverrides = {
  发给我: { segment_type: "短语", pos: "动词" },
  这个岗位: { segment_type: "短语", pos: "名词" },
  工作经验: { segment_type: "短语", pos: "名词" },
  参加面试: { segment_type: "短语", pos: "动词" },
  需要: { segment_type: "词", pos: "动词" },
  一点: { segment_type: "词", pos: "副词" },
};

function segmentWarn(message, segment = {}) {
  console.warn(`[segment-label] ${message}`, {
    id: segment.id || "",
    text: segment.text || "",
  });
}

function segmentPosLabel(rawPos = "") {
  const value = String(rawPos || "").trim();
  const map = {
    名词: "名词",
    动词: "动词",
    形容词: "形容词",
    代词: "代词",
    副词: "副词",
    功能词: "功能词",
    noun: "名词",
    verb: "动词",
    adj: "形容词",
    pron: "代词",
    adv: "副词",
    function: "功能词",
    prep: "功能词",
    particle: "功能词",
    "possessive-pron": "代词",
  };
  return map[value] || value;
}

function inferSegmentType(segment = {}, posLabel = "") {
  const text = String(segment.text || "").trim();
  if (posLabel === "功能词") return "功能词块";
  if (String(segment.pos || "").trim() === "phrase") return "短语";
  if ((text.match(/[\u4e00-\u9fff]/g) || []).length >= 3) return "短语";
  return "词";
}

function normalizeDisplaySegment(segment = {}) {
  const text = String(segment.text || "").trim();
  const override = legacySegmentOverrides[text];
  if (override && !segment.segment_type && !segment.segmentType) {
    return { ...segment, segment_type: override.segment_type, pos: override.pos };
  }
  const posLabel = segmentPosLabel(segment.segmentPos || segment.pos);
  return {
    ...segment,
    segment_type: segment.segment_type || segment.segmentType || inferSegmentType(segment, posLabel),
    pos: posLabel,
  };
}

function displaySegmentLabel(segment = {}) {
  const rawType = String(segment.segment_type || segment.segmentType || "").trim();
  const rawPos = String(segment.pos || "").trim();
  const typeLabel = allowedSegmentTypes.has(rawType) ? rawType : "未标注词块";
  const posLabel = segmentPosLabel(rawPos);

  if (!rawType) segmentWarn("missing segment_type", segment);
  if (!rawPos) {
    segmentWarn("missing pos", segment);
    return `${typeLabel} · 未标注词性`;
  }
  if (!allowedSegmentTypes.has(rawType)) segmentWarn(`invalid segment_type: ${rawType}`, segment);
  if (illegalSegmentPosLabels.has(rawPos) || !allowedSegmentPosLabels.has(posLabel)) {
    segmentWarn(`invalid pos: ${rawPos}`, segment);
    return `${typeLabel} · 词性错误`;
  }
  return `${typeLabel} · ${posLabel}`;
}

function segmentToWord(segment = {}) {
  const pinyin = segment.pinyin || segment.tone || "";
  return {
    text: segment.text || "",
    pinyin,
    tone: pinyin,
    pos: normalizeSegmentPos(segment.pos),
    vi: segment.vietnamese || segment.vi || "",
    segmentType: segment.segment_type || segment.segmentType || "",
    segment_type: segment.segment_type || segment.segmentType || "",
    segmentPos: segment.pos || "",
  };
}

function sentenceSegmentsToWords(item = {}) {
  if (item.stage !== "sentence" || !Array.isArray(item.segments) || item.segments.length === 0) return null;
  return item.segments.map(segmentToWord).filter((word) => word.text && word.pinyin && word.pos);
}

function currentItem() {
  const collection = currentCollection();
  state.index = Math.max(0, Math.min(state.index, collection.items.length - 1));
  const itemNow = collection.items[state.index];
  const sourceWords = sentenceSegmentsToWords(itemNow) || itemNow.words;
  const words = globalThis.practiceAnswerRules?.normalizePracticeWords
    ? globalThis.practiceAnswerRules.normalizePracticeWords(sourceWords)
    : sourceWords;
  return {
    ...itemNow,
    words,
    pinyin: words.map((word) => word.pinyin).join(" "),
    tone: words.map((word) => word.tone).join(" "),
  };
}

function normalizeLatin(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ü/g, "u")
    .replace(/v/g, "u")
    .replace(/[^a-z0-9]/g, "");
}

function normalizeHanzi(value) {
  return String(value || "").replace(/[。？！、，,.!?\s]/g, "");
}

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const BACKEND_DISABLED = false;
const BACKEND_DISABLED_MESSAGE = "Bản Netlify hiện chỉ chạy nội dung học tĩnh, chưa bật đăng nhập.";

const UPGRADE_PLAN_IDS = {
  "1 Tháng": "1m",
  "3 Tháng": "3m",
  "6 Tháng": "6m",
};

async function apiRequest(path, options = {}) {
  if (BACKEND_DISABLED && path.startsWith("/api/")) {
    throw new Error(BACKEND_DISABLED_MESSAGE);
  }

  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error
      || (Array.isArray(data.message) ? data.message[0] : data.message)
      || "Không thể kết nối server.";
    throw new Error(message);
  }
  return data;
}

function formatDateTime(value) {
  if (!value) return "Chưa có";
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatAdminDate(value) {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "N/A";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function isActivePremiumUser(user) {
  const premiumUntil = user?.premiumUntil ? new Date(user.premiumUntil) : null;
  return Boolean(user?.isPremium && (!premiumUntil || premiumUntil.getTime() > Date.now()));
}

function slotPinyinLength(word) {
  return Math.max(1, normalizeLatin(word?.pinyin || "").length);
}

function slotProgressText(index, word) {
  const done = Math.min(state.slotProgress[index] || 0, slotPinyinLength(word));
  return `${done}/${slotPinyinLength(word)}`;
}

function slotProgressPercent(index, word) {
  return `${Math.min(100, Math.round(((state.slotProgress[index] || 0) / slotPinyinLength(word)) * 100))}%`;
}

function getDisplayPosLabel(rawPos) {
  const normalizedPos = normalizeSegmentPos(rawPos);
  const posKey = normalizedPos === "function" ? "function" : getTeachingPosLabelKey(normalizedPos);
  if (!posKey) return "";
  const beginnerPosText = {
    vi: {
      noun: "danh từ",
      verb: "động từ",
      adj: "tính từ",
      adv: "phó từ",
      prep: "giới từ",
      particle: "trợ từ",
      pron: "đại từ",
      "possessive-pron": "đại từ sở hữu",
      phrase: "từ vựng",
    },
    zh: {
      noun: "名词",
      verb: "动词",
      adj: "形容词",
      adv: "副词",
      prep: "介词",
      particle: "助词",
      pron: "代词",
      "possessive-pron": "物主代词",
      phrase: "生词",
    },
  };
  return beginnerPosText[state.lang]?.[posKey] || "";
}

function getSegmentTypeLabel(type = "") {
  const isVi = state.lang === "vi";
  const labels = {
    词: isVi ? "từ" : "词",
    短语: isVi ? "cụm" : "短语",
    功能词块: isVi ? "cụm chức năng" : "功能词块",
  };
  return labels[type] || type;
}

function isMatch(input, expectedPinyin, expectedHanzi) {
  return (
    normalizeLatin(input) === normalizeLatin(expectedPinyin) ||
    normalizeHanzi(input) === normalizeHanzi(expectedHanzi)
  );
}

function classifyActivePinyinInput(value, itemNow = currentItem()) {
  const input = String(value || "").trim();
  if (!input) return { kind: "empty" };
  const activeWord = itemNow.words[state.activeWord] || {};
  const normalizedInput = normalizeLatin(input);
  const normalizedTarget = normalizeLatin(activeWord.pinyin || activeWord.tone || "");
  const normalizedHanziInput = normalizeHanzi(input);
  const normalizedHanziTarget = normalizeHanzi(activeWord.text || "");

  if (normalizedHanziInput && normalizedHanziInput === normalizedHanziTarget) return { kind: "correct" };
  if (!normalizedInput || !normalizedTarget) return { kind: "wrong" };
  if (normalizedInput === normalizedTarget) return { kind: "correct" };
  if (normalizedTarget.startsWith(normalizedInput)) {
    return {
      kind: "progress",
      start: state.activeWord,
      inputLength: normalizedInput.length,
      totalLength: normalizedTarget.length,
    };
  }
  if (normalizedInput.startsWith(normalizedTarget)) return { kind: "extra" };
  return { kind: "wrong" };
}

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <span class="toast-icon">★</span>
    <span class="toast-text">${escapeAttr(message)}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 2200);
}

function saveState() {
  localStorage.setItem("v2-lang", state.lang);
  localStorage.setItem("v2-wrong", JSON.stringify([...state.wrong]));
  localStorage.setItem("v2-saved", JSON.stringify([...state.saved]));
  localStorage.setItem("v2-completed", JSON.stringify([...state.completed]));
  if (state.user) localStorage.setItem("v2-user", JSON.stringify(state.user));
  else localStorage.removeItem("v2-user");
  localStorage.removeItem("v2-admin-key");
}

function isAdminUser() {
  return state.user?.role === "admin";
}

function scrollAppToTop() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function navigatePrimaryTab(target) {
  state.fromRoadmap = false;
  state.dailyPendingThemeId = "";
  state.dailyContentType = "";

  if (target === "home") {
    renderHome();
    setScreen("home");
  } else if (target === "hsk") {
    state.module = "hsk";
    state.hskLevelPicker = true;
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    renderCourse();
    setScreen("course");
  } else if (target === "daily") {
    state.module = "daily";
    state.hskPendingLessonId = "";
    state.hskContentType = "";
    renderCourse();
    setScreen("course");
  } else if (target === "vocab") {
    renderVocab();
    setScreen("vocab");
  } else if (target === "subscriptions") {
    setScreen("subscriptions");
  } else if (target === "account") {
    if (BACKEND_DISABLED) return;
    if (state.user) {
      showAccountPanel();
    } else {
      showModal("login");
    }
  }

  scrollAppToTop();
  $("#mobileMenu")?.classList.remove("active");
}

function setScreen(name) {
  state.screen = name;
  Object.entries(screens).forEach(([key, node]) => node.classList.toggle("hidden", key !== name));
  $("#backBtn").classList.toggle("hidden", name === "home" || name === "course" || name === "admin" || name === "vocab" || name === "subscriptions");

  // Render the global footer outside the screen boundaries
  renderGlobalFooter();
  $("#globalFooter")?.classList.toggle("hidden", name === "subscriptions");

  const appNode = $("#app");
  if (appNode) {
    appNode.className = "app-shell screen-" + name;
  }

  // Highlight active middle navigation items
  const navHsk = $("#navHskBtn");
  const navDaily = $("#navDailyBtn");
  const navVocab = $("#navVocabBtn");
  const navSubscriptions = $("#navSubscriptionsBtn");
  const navAdmin = $("#navAdminBtn");
  const mNavHsk = $("#mobileHskBtn");
  const mNavDaily = $("#mobileDailyBtn");
  const mNavVocab = $("#mobileVocabBtn");
  const mNavSubscriptions = $("#mobileSubscriptionsBtn");
  const mNavAdmin = $("#mobileAdminBtn");

  if (navHsk && navDaily && navVocab && navSubscriptions && navAdmin) {
    navHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    navDaily.classList.toggle("active", name === "course" && state.module === "daily");
    navVocab.classList.toggle("active", name === "vocab");
    navSubscriptions.classList.toggle("active", name === "subscriptions");
    navAdmin.classList.toggle("active", name === "admin");
  }
  if (mNavHsk && mNavDaily && mNavVocab && mNavSubscriptions && mNavAdmin) {
    mNavHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    mNavDaily.classList.toggle("active", name === "course" && state.module === "daily");
    mNavVocab.classList.toggle("active", name === "vocab");
    mNavSubscriptions.classList.toggle("active", name === "subscriptions");
    mNavAdmin.classList.toggle("active", name === "admin");
  }

  const bottomNav = $("#mobileBottomNav");
  const bottomHome = $("#bottomNavHomeBtn");
  const bottomHsk = $("#bottomNavHskBtn");
  const bottomDaily = $("#bottomNavDailyBtn");
  const bottomVocab = $("#bottomNavVocabBtn");
  const bottomSubscriptions = $("#bottomNavSubscriptionsBtn");
  const bottomAccount = $("#bottomNavAccountBtn");
  const showBottomNav = ["home", "course", "vocab", "subscriptions"].includes(name);

  if (bottomNav) {
    bottomNav.classList.toggle("hidden", !showBottomNav);
    document.body.classList.toggle("has-mobile-bottom-nav", showBottomNav);
  }
  if (bottomHome && bottomHsk && bottomDaily && bottomVocab && bottomSubscriptions && bottomAccount) {
    bottomHome.classList.toggle("active", name === "home");
    bottomHsk.classList.toggle("active", name === "course" && state.module === "hsk");
    bottomDaily.classList.toggle("active", name === "course" && state.module === "daily");
    bottomVocab.classList.toggle("active", name === "vocab");
    bottomSubscriptions.classList.toggle("active", name === "subscriptions");
    bottomAccount.classList.remove("active");
    bottomAccount.classList.toggle("hidden", BACKEND_DISABLED);
  }
}

function renderChrome() {
  const isVi = state.lang === "vi";
  document.documentElement.lang = state.lang === "vi" ? "vi" : "zh-CN";
  $("#brandSubtitle").textContent = t("brandSubtitle");
  $("#reviewBtn").textContent = t("review");
  const loginBtn = $("#loginBtn");
  const registerBtn = $("#registerBtn");
  const mobileLoginBtn = $("#mobileLoginBtn");
  const mobileRegisterBtn = $("#mobileRegisterBtn");
  const navAdmin = $("#navAdminBtn");
  const mobileAdmin = $("#mobileAdminBtn");
  const sidebarLoginBtn = $("#sidebarLoginBtn");
  const sidebarRegisterBtn = $("#sidebarRegisterBtn");

  const navHskBtn = $("#navHskBtn");
  const navDailyBtn = $("#navDailyBtn");
  const navVocabBtn = $("#navVocabBtn");
  const navSubscriptionsBtn = $("#navSubscriptionsBtn");
  const mobileHskBtn = $("#mobileHskBtn");
  const mobileDailyBtn = $("#mobileDailyBtn");
  const mobileVocabBtn = $("#mobileVocabBtn");
  const mobileSubscriptionsBtn = $("#mobileSubscriptionsBtn");
  const bottomHomeBtn = $("#bottomNavHomeBtn");
  const bottomHskBtn = $("#bottomNavHskBtn");
  const bottomDailyBtn = $("#bottomNavDailyBtn");
  const bottomVocabBtn = $("#bottomNavVocabBtn");
  const bottomSubscriptionsBtn = $("#bottomNavSubscriptionsBtn");
  const bottomAccountBtn = $("#bottomNavAccountBtn");

  if (navHskBtn) navHskBtn.textContent = t("hskTitle");
  if (navDailyBtn) navDailyBtn.textContent = t("dailyTitle");
  if (navVocabBtn) navVocabBtn.textContent = t("vocab");
  if (navSubscriptionsBtn) navSubscriptionsBtn.textContent = t("subscriptions");

  if (mobileHskBtn) mobileHskBtn.innerHTML = `${t("hskTitle")} <span class="arrow">›</span>`;
  if (mobileDailyBtn) mobileDailyBtn.innerHTML = `${t("dailyTitle")} <span class="arrow">›</span>`;
  if (mobileVocabBtn) mobileVocabBtn.innerHTML = `${t("vocab")} <span class="arrow">›</span>`;
  if (mobileSubscriptionsBtn) mobileSubscriptionsBtn.innerHTML = `${t("subscriptions")} <span class="arrow">›</span>`;

  if (bottomHomeBtn) {
    bottomHomeBtn.querySelector(".mobile-bottom-nav-label").textContent = t("homeTab");
  }
  if (bottomHskBtn) {
    bottomHskBtn.querySelector(".mobile-bottom-nav-label").textContent = t("hskTitle");
  }
  if (bottomDailyBtn) {
    bottomDailyBtn.querySelector(".mobile-bottom-nav-label").textContent = t("dailyTabNav");
  }
  if (bottomVocabBtn) {
    bottomVocabBtn.querySelector(".mobile-bottom-nav-label").textContent = t("vocab");
  }
  if (bottomSubscriptionsBtn) {
    bottomSubscriptionsBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Gói" : "订阅";
  }
  if (bottomAccountBtn) {
    bottomAccountBtn.querySelector(".mobile-bottom-nav-label").textContent = isVi ? "Cá nhân" : "个人";
  }

  const canViewAdmin = !BACKEND_DISABLED && isAdminUser();
  if (navAdmin) {
    navAdmin.textContent = t("admin");
    navAdmin.classList.toggle("hidden", !canViewAdmin);
  }
  if (mobileAdmin) {
    mobileAdmin.innerHTML = `${t("admin")} <span class="arrow">›</span>`;
    mobileAdmin.classList.toggle("hidden", !canViewAdmin);
  }
  const menuToggleBtn = $("#menuToggleBtn");
  if (menuToggleBtn) {
    menuToggleBtn.classList.toggle("hidden", BACKEND_DISABLED || !canViewAdmin);
  }
  [loginBtn, registerBtn, mobileLoginBtn, mobileRegisterBtn, sidebarLoginBtn, sidebarRegisterBtn].forEach((button) => {
    if (!button) return;
    button.classList.toggle("hidden", BACKEND_DISABLED);
  });
  if (BACKEND_DISABLED) return;
  if (state.user) {
    if (loginBtn) loginBtn.textContent = state.user.fullName || t("account");
    if (registerBtn) registerBtn.textContent = t("logout");
    if (mobileLoginBtn) mobileLoginBtn.textContent = state.user.fullName || t("account");
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = t("logout");
  } else {
    if (loginBtn) loginBtn.textContent = t("login");
    if (registerBtn) registerBtn.textContent = t("register");
    if (mobileLoginBtn) mobileLoginBtn.textContent = t("login");
    if (mobileRegisterBtn) mobileRegisterBtn.textContent = t("register");
  }

  if (loginBtn) {
    loginBtn.disabled = false;
    loginBtn.removeAttribute("title");
  }
  if (registerBtn) {
    registerBtn.disabled = false;
    registerBtn.removeAttribute("title");
  }
  if (mobileLoginBtn) {
    mobileLoginBtn.disabled = false;
    mobileLoginBtn.removeAttribute("title");
  }
  if (mobileRegisterBtn) {
    mobileRegisterBtn.disabled = false;
    mobileRegisterBtn.removeAttribute("title");
  }
  if (sidebarLoginBtn) {
    sidebarLoginBtn.disabled = false;
    sidebarLoginBtn.removeAttribute("title");
  }
  if (sidebarRegisterBtn) {
    sidebarRegisterBtn.disabled = false;
    sidebarRegisterBtn.removeAttribute("title");
  }

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.innerHTML = `
      <span class="lang-vi ${state.lang === "vi" ? "active" : ""}">VI</span>
      <span class="lang-divider">|</span>
      <span class="lang-en ${state.lang === "zh" ? "active" : ""}">CN</span>
    `;
  }
}

function getLessonTotalItems(item) {
  if (item.lessonId) {
    for (const level of Object.values(hskLevels)) {
      const found = level.find(l => l.id === item.lessonId);
      if (found) return hskAllLessonItems(found).length;
    }
  } else if (item.themeId) {
    const found = dailyThemes.find(t => t.id === item.themeId);
    if (found) return found.items.length;
  }
  return item.totalItems || 3;
}

const dailyRoadmap = [
  { day: 1, title: "Chào hỏi cơ bản", label: "Cơ bản 1", totalItems: 7, lessonId: "hsk2-l1" },
  { day: 2, title: "Phiên âm Pinyin", label: "Cơ bản", totalItems: 20, lessonId: "hsk2-l2" },
  { day: 3, title: "Từ vựng thông dụng", label: "Cơ bản 3", totalItems: 20, lessonId: "hsk2-l3" },
  { day: 4, title: "Mẫu câu giao tiếp", label: "Màu sắc", totalItems: 4, themeId: "greeting" },
  { day: 5, title: "Giới thiệu công việc", label: "Công việc", totalItems: 20, lessonId: "hsk2-l4" },
  { day: 6, title: "Mua sắm lựa chọn", label: "Lựa chọn", totalItems: 20, lessonId: "hsk2-l5" },
  { day: 7, title: "Ăn uống giao tiếp", label: "Ăn uống", totalItems: 20, lessonId: "hsk2-l6" }
];

function renderRoadmap() {
  if (!screens.roadmap) {
    state.module = "hsk";
    state.hskLevelPicker = true;
    renderCourse();
    setScreen("course");
    return;
  }
  const isVi = state.lang === "vi";
  const completedDaysCount = dailyRoadmap.filter(d => {
    const id = d.lessonId || d.themeId;
    return state.completed.has(id);
  }).length;

  const completedCount = [...state.completed].length;

  screens.roadmap.innerHTML = `
    <div class="roadmap-layout">
      <!-- Left Column: Flowing pathway -->
      <div class="roadmap-panel">
        <div class="roadmap-header-title">
          <h2>${isVi ? "Lộ trình học tập" : "学习路径"}</h2>
          <p>${isVi ? "Hoàn thành mỗi bài học hàng ngày để mở khóa nội dung tiếp theo" : "完成每日课程以解锁下一个内容"}</p>
        </div>
        
        <div class="roadmap-timeline">
          ${dailyRoadmap.map((item, index) => {
    const id = item.lessonId || item.themeId;
    const isCompleted = state.completed.has(id);
    const isCurrentActive = !isCompleted && (index === 0 || state.completed.has(dailyRoadmap[index - 1].lessonId || dailyRoadmap[index - 1].themeId));
    const isLocked = !isCompleted && !isCurrentActive;

    let statusClass = "locked";
    if (isCompleted) statusClass = "done";
    else if (isCurrentActive) statusClass = "active";

    const totalItems = getLessonTotalItems(item);
    const progressText = isCompleted ? `${totalItems}/${totalItems}` : `0/${totalItems}`;

    return `
              <div class="roadmap-timeline-item status-${statusClass}">
                <div class="timeline-node-col">
                  <button class="roadmap-node-circle" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    <div class="node-circle-inner">
                      ${isCompleted ? `<span class="node-star-gold">★</span>` : ""}
                      ${isCurrentActive ? `<span class="node-star-active">★</span>` : ""}
                      ${isLocked ? `
                        <span class="node-icon-locked">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                          </svg>
                        </span>
                      ` : ""}
                    </div>
                  </button>
                </div>
                
                <div class="timeline-content-col">
                  <div class="timeline-meta">
                    <span class="day-badge">${isVi ? `Ngày ${item.day}` : `第 ${item.day} 天`}</span>
                    <span class="progress-info">${progressText} ${isVi ? "câu đã học" : "个句子已学"}</span>
                  </div>
                  <h3 class="lesson-label">${item.label}</h3>
                  <p class="lesson-title">${item.title}</p>
                </div>
                
                <div class="timeline-action-col">
                  <button class="btn-timeline-action ${statusClass}" type="button" data-roadmap-day="${item.day}" data-lesson-id="${item.lessonId || ''}" data-theme-id="${item.themeId || ''}" ${isLocked ? "disabled" : ""}>
                    ${isCompleted ? (isVi ? "Ôn tập" : "复习") : isCurrentActive ? (isVi ? "Học ngay" : "立即学习") : (isVi ? "Chưa mở khóa" : "未解锁")}
                  </button>
                </div>
              </div>
            `;
  }).join("")}
        </div>
      </div>
      
      <!-- Right Column: Sidebar Stats -->
      <aside class="roadmap-sidebar">
        <div class="sidebar-card stats-card">
          <h3>${isVi ? "Thống kê" : "统计"}</h3>
          <div class="stats-underline"></div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper progress-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Tiến độ" : "进度"}</span>
              <strong>${completedDaysCount}/${dailyRoadmap.length} ${isVi ? "ngày" : "天"}</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper lesson-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Bài học hoàn thành" : "完成的课程"}</span>
              <strong>${completedCount}</strong>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon-wrapper streak-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2c1 2 2 3.5 3 5.5s1 3 1 4.5c0 3-2.5 5.5-5.5 5.5S5 15 5 12c0-2.5 2.5-5.5 5-7.5l2-2.5z"/>
              </svg>
            </div>
            <div class="stat-copy">
              <span>${isVi ? "Chuỗi học" : "学习天数"}</span>
              <strong>${completedCount} ${isVi ? "ngày" : "天"}</strong>
            </div>
          </div>
        </div>
        
        <div class="sidebar-card cta-card">
          <div class="cta-info">
            <div class="cta-icon">✍️</div>
            <p>${isVi ? "Hãy đăng ký / đăng nhập để lưu tiến độ học tập của bạn." : "请注册/登录以保存您的学习进度。"}</p>
          </div>
          <button class="btn-sidebar-login" id="sidebarLoginBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">${t("login")}</button>
          <button class="btn-sidebar-register" id="sidebarRegisterBtn" type="button" disabled title="Đăng nhập/Đăng ký tạm thời bị vô hiệu hóa">${t("register")}</button>
        </div>
        
      </aside>
    </div>
  `;
}

async function loadAdminUsers() {
  const isVi = state.lang === "vi";
  if (!isAdminUser()) {
    state.adminStatus = isVi ? "Vui lòng đăng nhập bằng tài khoản admin." : "请使用管理员账户登录。";
    state.adminUsers = [];
    renderAdmin();
    return;
  }

  state.adminStatus = isVi ? "Đang tải danh sách người dùng..." : "正在加载用户列表...";
  renderAdmin();
  try {
    const data = await apiRequest("/api/admin/users", {
      method: "GET",
      headers: {
        "X-Admin-User-Id": state.user?.id || "",
      },
    });
    state.adminUsers = data.users || [];
    state.adminStatus = isVi ? `Đã tải ${state.adminUsers.length} người dùng.` : `已加载 ${state.adminUsers.length} 个用户。`;
  } catch (error) {
    state.adminUsers = [];
    state.adminStatus = error.message;
  }
  renderAdmin();
}

function renderAdmin() {
  const isVi = state.lang === "vi";
  if (!isAdminUser()) {
    screens.admin.innerHTML = `
      <section class="admin-login-screen">
        <form class="admin-login-card" id="adminLoginForm">
          <div class="admin-login-logo">中</div>
          <h1>${isVi ? "Đăng nhập Admin" : "管理员登录"}</h1>
          <p>${isVi ? "Chỉ tài khoản có quyền admin mới có thể truy cập trang quản trị." : "只有管理员账户可以访问控制台。"}</p>
          <label>
            <span>Email</span>
            <input id="adminLoginEmail" type="email" placeholder="admin@huamei.vn" required />
          </label>
          <label>
            <span>${isVi ? "Mật khẩu" : "密码"}</span>
            <input id="adminLoginPassword" type="password" placeholder="••••••••" required />
          </label>
          <p class="admin-login-message ${state.adminStatus ? "error" : ""}">${escapeAttr(state.adminStatus || "")}</p>
          <button type="submit">${isVi ? "Đăng nhập quản trị" : "登录管理后台"}</button>
        </form>
      </section>
    `;
    return;
  }

  const totalUsers = state.adminUsers.length;
  const proUsers = state.adminUsers.filter((user) => user.role === "admin" || isActivePremiumUser(user)).length;
  const vipRate = totalUsers > 0 ? Math.round((proUsers / totalUsers) * 1000) / 10 : 24.8;
  const adminTab = state.adminTab || "users";
  const rows = state.adminUsers.map((user, index) => {
    const initials = String(user.fullName || user.email || "U").split(/\s+/).map(part => part[0]).join("").slice(0, 2).toUpperCase();
    const avatar = index % 3 === 0 ? `assets/review_user_${(index % 3) + 1}.png` : "";
    const currentLevel = user.currentLevel || user.level || "HSK2";
    const hasPremium = isActivePremiumUser(user);
    const plan = hasPremium ? "PREMIUM" : "FREE";
    const displayDuration = hasPremium ? formatAdminDate(user.premiumUntil) : "N/A";
    const duration = user.isPremium ? (isVi ? "Không giới hạn" : "不限") : index % 2 === 0 ? "90 ngày" : "N/A";
    return `
      <tr data-user-id="${escapeAttr(user.id)}">
        <td>
          <div class="admin-user-cell">
            ${avatar ? `<img src="${avatar}" alt="${escapeAttr(user.fullName || user.email)}" />` : `<span>${escapeAttr(initials)}</span>`}
            <div>
              <strong>${escapeAttr(user.fullName || "No name")}</strong>
              <small>ID: ${escapeAttr(String(user.id || "").slice(0, 8).toUpperCase())}</small>
            </div>
          </div>
        </td>
        <td>${escapeAttr(user.email || "")}</td>
        <td><span class="admin-pill level">${escapeAttr(currentLevel)}</span></td>
        <td><span class="admin-pill ${plan.toLowerCase()}">${plan}</span></td>
        <td>
          <div class="admin-duration">
            <strong>${displayDuration}</strong>
            ${duration !== "N/A" ? `<small>${isVi ? "Hết hạn: 12/12/2024" : "到期：2024/12/12"}</small>` : ""}
          </div>
        </td>
        <td>
          <div class="admin-row-actions">
            <button class="admin-edit-user" type="button" aria-label="${isVi ? "Sửa" : "编辑"}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
            </button>
            <button class="admin-more-user" type="button" aria-label="More">⋮</button>
          </div>
          <input type="hidden" data-field="fullName" value="${escapeAttr(user.fullName || "")}" />
          <input type="hidden" data-field="email" value="${escapeAttr(user.email || "")}" />
          <input type="hidden" data-field="role" value="${escapeAttr(user.role || "student")}" />
          <input type="hidden" data-field="currentLevel" value="${escapeAttr(currentLevel)}" />
          <input type="checkbox" data-field="isActive" ${user.isActive ? "checked" : ""} hidden />
        </td>
      </tr>
    `;
  }).join("");

  screens.admin.innerHTML = `
    <div class="admin-console">
      <aside class="admin-sidebar">
        <div class="admin-brand">
          <span>中</span>
          <div><strong>HuaMei</strong><small>ADMIN CONSOLE</small></div>
        </div>
        <nav>
          <button type="button"><span>▦</span>Dashboard</button>
          <button id="adminUsersTabBtn" class="${adminTab === "users" ? "active" : ""}" type="button"><span>👥</span>User Management</button>
          <button id="adminSubscriptionsTabBtn" class="${adminTab === "subscriptions" ? "active" : ""}" type="button"><span>▣</span>Subscription Plans</button>
          <button type="button"><span>▤</span>Content Management</button>
          <button type="button"><span>⚙</span>Settings</button>
        </nav>
        <button class="admin-new-course" type="button">＋ New Course</button>
      </aside>

      <main class="admin-main ${adminTab === "subscriptions" ? "admin-main--subscriptions" : ""}">
        <header class="admin-topbar">
          <div class="admin-search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            <input type="text" placeholder="${isVi ? "Tìm kiếm hệ thống..." : "搜索系统..."}" />
          </div>
          <div class="admin-top-user">
            <span>🔔</span><span>?</span><i></i>
            <div><strong>Admin User</strong><small>Super Admin</small></div>
            <img src="assets/review_user_1.png" alt="Admin" />
          </div>
        </header>

        <section class="admin-title-row">
          <div>
            <h1>${isVi ? "Quản lý người dùng" : "用户管理"}</h1>
            <p><strong>${totalUsers || 0}</strong> ${isVi ? "người dùng đã đăng ký" : "注册用户"} <span>↗ +12% tháng này</span></p>
          </div>
          <button class="admin-add-user" type="button">👥 ${isVi ? "Thêm người dùng mới" : "添加用户"}</button>
        </section>

        <section class="admin-dashboard-grid">
          <div class="admin-filter-panel">
            <div class="admin-filter-search">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
              <input type="text" placeholder="${isVi ? "Tìm theo tên, email hoặc ID..." : "按姓名、邮箱或 ID 搜索..."}" />
            </div>
            <button type="button">${isVi ? "Tất cả cấp độ" : "所有等级"}</button>
            <button type="button">${isVi ? "Tất cả gói" : "所有套餐"}</button>
            <button type="button" class="admin-filter-icon">≡</button>
          </div>
          <aside class="admin-vip-card">
            <span>${isVi ? "Tỷ lệ chuyển đổi VIP" : "VIP 转化率"}</span>
            <strong>${vipRate}%</strong>
            <small>▲ 4% ${isVi ? "so với kỳ trước" : "较上期"}</small>
          </aside>
        </section>

        <section class="admin-users-panel">
          <div class="admin-table-wrap">
            <table class="admin-users-table">
              <thead>
                <tr>
                  <th>${isVi ? "Họ và tên" : "姓名"}</th>
                  <th>Email</th>
                  <th>${isVi ? "Cấp độ" : "等级"}</th>
                  <th>${isVi ? "Gói" : "套餐"}</th>
                  <th>${isVi ? "Thời hạn" : "期限"}</th>
                  <th>${isVi ? "Thao tác" : "操作"}</th>
                </tr>
              </thead>
              <tbody>
                ${rows || `<tr><td colspan="6" class="admin-empty">${escapeAttr(state.adminStatus || (isVi ? "Chưa có dữ liệu người dùng." : "暂无用户数据。"))}</td></tr>`}
              </tbody>
            </table>
          </div>
          <footer class="admin-table-footer">
            <span>${isVi ? `Hiển thị 1 - ${Math.max(totalUsers, 1)} trên ${Math.max(totalUsers, 0)} kết quả` : `显示 ${totalUsers} 个结果`}</span>
            <div><button>‹</button><button class="active">1</button><button>2</button><button>3</button><span>...</span><button>›</button></div>
          </footer>
        </section>

        <section class="admin-subscriptions-panel">
          <iframe
            class="admin-subscriptions-frame"
            src="subscriptions.html"
            title="Quản lý gói đăng ký"
            loading="lazy"></iframe>
        </section>
      </main>
    </div>
  `;
}

function showModal(type) {
  if (BACKEND_DISABLED) {
    showToast(BACKEND_DISABLED_MESSAGE);
    return;
  }
  const modalDiv = document.createElement("div");
  modalDiv.id = "authModal";
  modalDiv.className = "auth-modal-overlay";

  const isLogin = type === "login";
  const isVi = state.lang === "vi";
  modalDiv.innerHTML = `
    <div class="auth-modal-content">
      <button class="auth-modal-close" id="closeAuthModal" type="button">&times;</button>
      <div class="auth-modal-logo">中</div>
      <h2>${isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký tài khoản" : "注册账户")}</h2>
      <p class="auth-modal-sub">${isLogin ? (isVi ? "Chào mừng bạn quay trở lại!" : "欢迎回来！") : (isVi ? "Bắt đầu hành trình học tiếng Trung ngay hôm nay." : "立即开始您的中文学习之旅。")}</p>
      
      <form id="authForm" onsubmit="event.preventDefault();">
        ${!isLogin ? `
        <div class="form-group">
          <label for="authName">${isVi ? "Họ và tên" : "姓名"}</label>
          <input type="text" id="authName" placeholder="${isVi ? "Nguyễn Văn A" : "张三"}" required />
        </div>
        ` : ""}
        <div class="form-group">
          <label for="authEmail">Email</label>
          <input type="email" id="authEmail" placeholder="example@gmail.com" required />
        </div>
        <div class="form-group">
          <label for="authPassword">${isVi ? "Mật khẩu" : "密码"}</label>
          <input type="password" id="authPassword" placeholder="••••••••" required />
        </div>
        ${!isLogin ? `
        <div class="form-group checkbox-group">
          <input type="checkbox" id="authTerms" required />
          <label for="authTerms">${isVi ? "Tôi đồng ý với các điều khoản dịch vụ" : "我同意服务条款"}</label>
        </div>
        ` : ""}
        <p class="auth-form-message" id="authFormMessage" role="status"></p>
        <button type="submit" class="btn-auth-submit">${isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký" : "注册")}</button>
      </form>
      
      <div class="auth-modal-footer">
        <span>${isLogin ? (isVi ? "Chưa có tài khoản?" : "还没有账户？") : (isVi ? "Đã có tài khoản?" : "已有账户？")}</span>
        <button class="btn-auth-switch" id="authSwitchBtn" type="button">${isLogin ? (isVi ? "Đăng ký ngay" : "立即注册") : (isVi ? "Đăng nhập" : "登录")}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  document.getElementById("closeAuthModal").onclick = () => modalDiv.remove();
  modalDiv.onclick = (e) => { if (e.target === modalDiv) modalDiv.remove(); };

  document.getElementById("authSwitchBtn").onclick = () => {
    modalDiv.remove();
    showModal(isLogin ? "register" : "login");
  };

  document.getElementById("authForm").onsubmit = async (e) => {
    e.preventDefault();
    const message = document.getElementById("authFormMessage");
    const submitBtn = modalDiv.querySelector(".btn-auth-submit");
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    const fullName = document.getElementById("authName")?.value.trim();

    message.textContent = "";
    message.className = "auth-form-message";
    submitBtn.disabled = true;
    submitBtn.textContent = isLogin ? (isVi ? "Đang đăng nhập..." : "正在登录...") : (isVi ? "Đang đăng ký..." : "正在注册...");

    try {
      const data = await apiRequest(isLogin ? "/api/login" : "/api/register", {
        method: "POST",
        body: JSON.stringify(isLogin ? { email, password } : { fullName, email, password }),
      });
      state.user = data.user;
      saveState();
      renderChrome();
      message.textContent = isLogin ? (isVi ? "Đăng nhập thành công." : "登录成功。") : (isVi ? "Đăng ký thành công." : "注册成功。");
      message.classList.add("success");
      setTimeout(() => modalDiv.remove(), 500);
    } catch (error) {
      message.textContent = error.message;
      message.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = isLogin ? (isVi ? "Đăng nhập" : "登录") : (isVi ? "Đăng ký" : "注册");
    }
  };
}

function showAccountPanel() {
  if (!state.user) return;
  const isVi = state.lang === "vi";
  const accountDiv = document.createElement("div");
  accountDiv.id = "accountPanel";
  accountDiv.className = "account-panel-overlay";
  const displayName = state.user.fullName || state.user.email || t("account");
  const email = state.user.email || "";
  const joinedDate = state.user.createdAt ? formatDateTime(state.user.createdAt) : (isVi ? "Chưa có dữ liệu" : "暂无数据");
  const currentLevel = state.level || "HSK3";

  accountDiv.innerHTML = `
    <div class="account-panel">
      <button class="account-panel-close" id="closeAccountPanel" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>

      <div class="account-panel-grid">
        <aside class="account-profile-card">
          <div class="account-avatar-wrap">
            <img src="assets/review_user_1.png" alt="${escapeAttr(displayName)}" />
            <span class="account-pro-badge">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12 2l2.4 5.2 5.6.7-4.1 3.9 1 5.6-4.9-2.7-4.9 2.7 1-5.6L4 7.9l5.6-.7L12 2z" />
              </svg>
            </span>
          </div>
          <h3>${escapeAttr(displayName)}</h3>
          <p>${isVi ? "Học viên tích cực" : "积极学员"}</p>
          <div class="account-badges">
            <span>${escapeAttr(currentLevel)}</span>
            <span>${isVi ? "Thành viên Pro" : "Pro 会员"}</span>
          </div>
          <div class="account-streak">
            <div>
              <small>${isVi ? "Ngày học" : "学习天数"}</small>
              <strong>124 ${isVi ? "Ngày" : "天"}</strong>
            </div>
            <span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13 2S5 9 5 15a7 7 0 0 0 14 0c0-3-2-5-4-7 .2 2-1 3-2 3 1-4 0-7 0-9z" />
              </svg>
            </span>
          </div>
        </aside>

        <section class="account-info-card">
          <div class="account-info-header">
            <div>
              <span class="account-info-icon">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <h2>${isVi ? "Thông tin cơ bản" : "基本信息"}</h2>
            </div>
            <em>${isVi ? `Tham gia từ: ${joinedDate}` : `加入时间：${joinedDate}`}</em>
          </div>

          <form id="accountForm" class="account-form">
            <label>
              <span>${isVi ? "Tên hiển thị" : "显示名称"}</span>
              <input id="accountNameInput" type="text" value="${escapeAttr(displayName)}" />
            </label>
            <label>
              <span>Email</span>
              <input id="accountEmailInput" type="email" value="${escapeAttr(email)}" />
            </label>
            <label>
              <span>${isVi ? "Cấp độ hiện tại" : "当前等级"}</span>
              <select id="accountLevelInput">
                ${Object.keys(hskLevels).map(level => `<option value="${level}" ${level === currentLevel ? "selected" : ""}>${level}</option>`).join("")}
              </select>
            </label>
            <label>
              <span>${isVi ? "Ngôn ngữ hiển thị" : "显示语言"}</span>
              <select id="accountLangInput">
                <option value="vi" ${state.lang === "vi" ? "selected" : ""}>Tiếng Việt</option>
                <option value="zh" ${state.lang === "zh" ? "selected" : ""}>中文</option>
              </select>
            </label>
            <div class="account-form-actions">
              <button class="account-save-btn" type="submit">${isVi ? "Lưu thay đổi" : "保存更改"}</button>
              <button class="account-cancel-btn" type="button" id="cancelAccountPanel">${isVi ? "Hủy bỏ" : "取消"}</button>
            </div>
          </form>
        </section>
      </div>

      <section class="account-upgrade-banner">
        <div>
          <h2>${isVi ? "Nâng cấp LingoBloom Pro" : "升级 LingoBloom Pro"}</h2>
          <p>${isVi ? "Mở khóa tất cả bài học HSK nâng cao, học không giới hạn cùng trợ lý AI và nhận chứng chỉ sau mỗi cấp độ." : "解锁高级 HSK 课程、无限学习 AI 助手，并在每个级别后获得证书。"}</p>
        </div>
        <button type="button" class="account-upgrade-btn">
          ${isVi ? "Nâng cấp ngay" : "立即升级"}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </button>
      </section>
    </div>
  `;

  document.body.appendChild(accountDiv);
  const closePanel = () => accountDiv.remove();
  accountDiv.querySelector("#closeAccountPanel").onclick = closePanel;
  accountDiv.querySelector("#cancelAccountPanel").onclick = closePanel;
  accountDiv.onclick = (event) => {
    if (event.target === accountDiv) closePanel();
  };
  accountDiv.querySelector("#accountForm").onsubmit = (event) => {
    event.preventDefault();
    const fullName = accountDiv.querySelector("#accountNameInput").value.trim();
    const emailValue = accountDiv.querySelector("#accountEmailInput").value.trim();
    const nextLevel = accountDiv.querySelector("#accountLevelInput").value;
    const nextLang = accountDiv.querySelector("#accountLangInput").value;
    if (fullName) state.user.fullName = fullName;
    if (emailValue) state.user.email = emailValue;
    state.level = nextLevel;
    state.lang = nextLang;
    saveState();
    renderChrome();
    renderAll();
    showToast(state.lang === "vi" ? "Đã lưu thông tin tài khoản" : "已保存账户信息");
    closePanel();
  };
  accountDiv.querySelector(".account-upgrade-btn").onclick = () => {
    showUpgradePlansModal();
  };
}

function showUpgradePlansModal() {
  const isVi = state.lang === "vi";
  const existing = document.getElementById("upgradePlansModal");
  if (existing) existing.remove();

  const plans = [
    {
      nameVi: "Gói cơ bản",
      nameZh: "基础套餐",
      durationVi: "1 Tháng",
      durationZh: "1 个月",
      price: "149.000đ",
      note: "/tháng",
      discount: "",
      popular: false,
    },
    {
      nameVi: "Tiết kiệm 10%",
      nameZh: "节省 10%",
      durationVi: "3 Tháng",
      durationZh: "3 个月",
      price: "399.000đ",
      note: "Chỉ ~133k / tháng",
      discount: "Phổ biến nhất",
      popular: true,
    },
    {
      nameVi: "Tiết kiệm 20%",
      nameZh: "节省 20%",
      durationVi: "6 Tháng",
      durationZh: "6 个月",
      price: "699.000đ",
      note: "Chỉ ~116k / tháng",
      discount: "",
      popular: false,
    },
  ];
  const benefits = isVi
    ? [
      "Truy cập tất cả khóa học HSK 1-6",
      "Kho từ vựng & cụm từ không giới hạn",
      "Luyện nói cùng AI thông minh",
      "Không quảng cáo làm phiền",
      "Hỗ trợ ưu tiên 24/7",
    ]
    : [
      "访问全部 HSK 1-6 课程",
      "无限词汇与短语库",
      "智能 AI 口语练习",
      "无广告干扰",
      "24/7 优先支持",
    ];

  const modalDiv = document.createElement("div");
  modalDiv.id = "upgradePlansModal";
  modalDiv.className = "upgrade-plans-overlay";
  modalDiv.innerHTML = `
    <div class="upgrade-plans-modal">
      <button class="upgrade-plans-close" id="closeUpgradePlansModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
      <div class="upgrade-plans-heading">
        <span class="upgrade-mobile-pill">PRO</span>
        <h2>${isVi ? "Nâng tầm trải nghiệm học tập cùng" : "升级你的学习体验"}<br>HuaMei<span>Pro</span></h2>
        <h3>${isVi ? "Học tập không giới hạn" : "无限学习"}</h3>
        <p>${isVi ? "Mở khóa toàn bộ tính năng và lộ trình học tập chuyên sâu để làm chủ tiếng Trung nhanh hơn." : "解锁全部功能和深度学习路线，更快掌握中文。"}</p>
      </div>
      <div class="upgrade-plans-grid">
        ${plans.map((plan) => `
          <article class="upgrade-plan-card ${plan.popular ? "popular" : ""}" data-upgrade-plan-card="${escapeAttr(plan.durationVi)}" role="button" tabindex="0">
            ${plan.discount ? `<div class="upgrade-popular-badge">${isVi ? plan.discount : "最受欢迎"}</div>` : ""}
            <div class="upgrade-plan-kicker">${isVi ? plan.nameVi : plan.nameZh}</div>
            <h3>${isVi ? plan.durationVi : plan.durationZh}</h3>
            <div class="upgrade-plan-price">
              <strong>${plan.price}</strong>
              ${!plan.popular ? `<span>${plan.note}</span>` : ""}
            </div>
            ${plan.popular ? `<p class="upgrade-plan-note">${plan.note}</p>` : ""}
            <ul>
              ${benefits.map((benefit) => `
                <li>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.1 13.7-3.6-3.6 1.4-1.4 2.2 2.2 4.8-4.8 1.4 1.4-6.2 6.2z" />
                  </svg>
                  ${benefit}
                </li>
              `).join("")}
            </ul>
            <button class="upgrade-plan-action" type="button" data-upgrade-plan="${escapeAttr(plan.durationVi)}">
              ${isVi ? "Bắt đầu ngay" : "立即开始"}
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
          </article>
        `).join("")}
      </div>
      <section class="upgrade-mobile-benefits">
        <h3>${isVi ? "Đặc quyền Pro" : "Pro 特权"}</h3>
        <ul>
          ${benefits.map((benefit) => `
            <li>
              <span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <strong>${benefit}</strong>
                <small>${isVi ? "Truy cập đầy đủ không giới hạn trong tài khoản của bạn." : "在你的账号中无限访问。"}</small>
              </div>
            </li>
          `).join("")}
        </ul>
      </section>
    </div>
  `;

  document.body.appendChild(modalDiv);
  const closeModal = () => modalDiv.remove();
  modalDiv.querySelector("#closeUpgradePlansModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };
  const selectPlan = (planName) => {
    closeModal();
    showTransferInfoModal(planName);
  };
  modalDiv.addEventListener("click", (event) => {
    const planTarget = event.target.closest("[data-upgrade-plan], [data-upgrade-plan-card]");
    if (!planTarget || !modalDiv.contains(planTarget)) return;
    selectPlan(planTarget.dataset.upgradePlan || planTarget.dataset.upgradePlanCard);
  });
  modalDiv.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const planTarget = event.target.closest("[data-upgrade-plan-card]");
    if (!planTarget || !modalDiv.contains(planTarget)) return;
    event.preventDefault();
    selectPlan(planTarget.dataset.upgradePlanCard);
  });
}

async function showTransferInfoModal(planName) {
  const isVi = state.lang === "vi";
  const planId = UPGRADE_PLAN_IDS[planName];
  const existing = document.getElementById("transferInfoModal");
  if (existing) existing.remove();

  if (!state.user) {
    showToast(isVi ? "Vui lòng đăng nhập để nâng cấp Pro" : "请先登录以升级 Pro");
    showModal("login");
    return;
  }
  if (!planId) {
    showToast(isVi ? "Gói thanh toán không hợp lệ" : "套餐无效");
    return;
  }

  const modalDiv = document.createElement("div");
  modalDiv.id = "transferInfoModal";
  modalDiv.className = "transfer-info-overlay";
  modalDiv.innerHTML = `
    <div class="transfer-info-modal">
      <button class="transfer-info-close" id="closeTransferInfoModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
      <div class="transfer-icon">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      </div>
      <h2>${isVi ? "Thông tin chuyển khoản" : "转账信息"}</h2>
      <p class="transfer-subtitle">${isVi ? "Đang tạo đơn thanh toán..." : "正在创建支付订单..."}</p>
      <div class="transfer-loading-state">
        <div class="transfer-status transfer-status-pending">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2h12M6 22h12M8 2c0 5 8 5 8 10s-8 5-8 10" />
          </svg>
          ${isVi ? "Vui lòng chờ trong giây lát" : "请稍候"}
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  let pollTimer = null;
  const closeModal = () => {
    if (pollTimer) clearInterval(pollTimer);
    modalDiv.remove();
  };
  modalDiv.querySelector("#closeTransferInfoModal").onclick = closeModal;
  modalDiv.onclick = (event) => {
    if (event.target === modalDiv) closeModal();
  };

  let paymentData;
  try {
    paymentData = await apiRequest("/api/payments/orders", {
      method: "POST",
      body: JSON.stringify({
        userId: state.user.id,
        email: state.user.email,
        planId,
      }),
    });
  } catch (error) {
    modalDiv.querySelector(".transfer-subtitle").textContent = isVi
      ? "Không thể tạo đơn thanh toán"
      : "无法创建支付订单";
    modalDiv.querySelector(".transfer-loading-state").innerHTML = `
      <p class="transfer-error-text">${escapeAttr(error.message)}</p>
    `;
    return;
  }

  const { order, bank, qrImageUrl } = paymentData;
  const transferCode = order.transferCode;
  const amount = order.amountLabel;

  modalDiv.querySelector(".transfer-info-modal").innerHTML = `
    <button class="transfer-info-close" id="closeTransferInfoModal" type="button" aria-label="${isVi ? "Đóng" : "关闭"}">&times;</button>
    <div class="transfer-icon">
      <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    </div>
    <h2>${isVi ? "Thông tin chuyển khoản" : "转账信息"}</h2>
    <p class="transfer-subtitle">${isVi ? "Nâng cấp tài khoản PRO để bắt đầu hành trình chinh phục ngôn ngữ" : "升级 PRO 账户，开启语言学习旅程"}</p>

    <div class="transfer-content-grid">
      <div class="transfer-fields">
        <label>
          <span>${isVi ? "Ngân hàng" : "银行"}</span>
          <div class="transfer-field transfer-bank">
            <span></span>
            ${escapeAttr(bank.bankName)}
          </div>
        </label>
        <label>
          <span>${isVi ? "Chủ tài khoản" : "账户名"}</span>
          <div class="transfer-field">${escapeAttr(bank.accountName)}</div>
        </label>
        <label>
          <span>${isVi ? "Số tài khoản" : "账号"}</span>
          <div class="transfer-field transfer-copy-row">
            <span>${escapeAttr(bank.accountNumber)}</span>
            <button type="button" data-copy-transfer="${escapeAttr(bank.accountNumber)}" aria-label="${isVi ? "Sao chép số tài khoản" : "复制账号"}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="10" height="10" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </label>
        <label>
          <span>${isVi ? "Số tiền" : "金额"}</span>
          <div class="transfer-field transfer-amount">${escapeAttr(amount)}</div>
        </label>
        <div class="transfer-note-box">
          <div>
            <span>${isVi ? "Nội dung chuyển khoản" : "转账备注"}</span>
            <strong>${escapeAttr(transferCode)}</strong>
          </div>
          <button type="button" data-copy-transfer="${escapeAttr(transferCode)}">${isVi ? "Sao chép" : "复制"}</button>
        </div>
      </div>

      <div class="transfer-qr-area">
        <div class="transfer-qr-box">
          <img class="transfer-qr-image" src="${escapeAttr(qrImageUrl)}" alt="${isVi ? "Mã QR thanh toán VietQR" : "VietQR 付款码"}" width="220" height="220" />
        </div>
        <p>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z" />
            <path d="M15 15h2v2h-2zM19 15h2v6h-6v-2h4z" />
          </svg>
          ${isVi ? "Quét mã VietQR để thanh toán nhanh" : "扫码快速付款"}
        </p>
        <div class="transfer-status transfer-status-pending" id="transferPaymentStatus">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2h12M6 22h12M8 2c0 5 8 5 8 10s-8 5-8 10" />
          </svg>
          ${isVi ? "Đang chờ thanh toán..." : "等待付款..."}
        </div>
      </div>
    </div>

    <div class="transfer-footer-note">
      <span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      </span>
      <p>${isVi ? "Vui lòng chuyển khoản đúng số tiền và nội dung để SePay tự động kích hoạt gói Pro trong vài phút." : "请按正确金额和备注转账，SePay 将在几分钟内自动激活 Pro 套餐。"}</p>
    </div>
  `;

  modalDiv.querySelector("#closeTransferInfoModal").onclick = closeModal;
  modalDiv.querySelectorAll("[data-copy-transfer]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyTransfer;
      try {
        await navigator.clipboard.writeText(value);
        showToast(isVi ? "Đã sao chép" : "已复制");
      } catch {
        showToast(value);
      }
    });
  });

  const updatePaymentStatus = async () => {
    try {
      const statusData = await apiRequest(
        `/api/payments/orders/${order.id}/status?userId=${encodeURIComponent(state.user.id)}`,
      );
      if (statusData.order.status === "paid") {
        if (pollTimer) clearInterval(pollTimer);
        state.user.isPremium = statusData.premium.isPremium;
        state.user.premiumUntil = statusData.premium.premiumUntil;
        saveState();
        const statusNode = modalDiv.querySelector("#transferPaymentStatus");
        if (statusNode) {
          statusNode.className = "transfer-status transfer-status-success";
          statusNode.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            ${isVi ? "Thanh toán thành công! Gói Pro đã được kích hoạt." : "付款成功！Pro 套餐已激活。"}
          `;
        }
        showToast(isVi ? "Gói Pro đã được kích hoạt!" : "Pro 套餐已激活！");
      }
    } catch {
      // keep polling quietly
    }
  };

  updatePaymentStatus();
  pollTimer = setInterval(updatePaymentStatus, 5000);
}

function showQuitModal() {
  const modalDiv = document.createElement("div");
  modalDiv.id = "quitModal";
  modalDiv.className = "quit-modal-overlay";
  const isVi = state.lang === "vi";

  modalDiv.innerHTML = `
    <div class="quit-modal-content">
      <button class="quit-modal-close" id="closeQuitModal" type="button">&times;</button>
      
      <div class="quit-modal-illustration">
        <svg viewBox="0 0 160 160" width="120" height="120">
          <!-- Antlers -->
          <path d="M50 45 C45 35 48 20 40 15 C38 12 33 15 35 20 C37 25 42 32 46 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M42 27 C35 25 32 18 28 20 C25 22 28 28 35 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <path d="M110 45 C115 35 112 20 120 15 C122 12 127 15 125 20 C123 25 118 32 114 40" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round" fill="none" />
          <path d="M118 27 C125 25 128 18 132 20 C135 22 132 28 125 30" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" fill="none" />
          
          <!-- Ears -->
          <path d="M38 52 C20 50 25 62 36 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          <path d="M122 52 C140 50 135 62 124 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="2" />
          
          <!-- Head / Face -->
          <path d="M45 60 C45 105 55 120 80 120 C105 120 115 105 115 60 C115 45 105 45 80 45 C55 45 45 45 45 60 Z" fill="#ffb03a" stroke="#8b5a2b" stroke-width="3" />
          
          <!-- White belly/snout area -->
          <ellipse cx="80" cy="108" rx="25" ry="12" fill="#ffffff" />
          
          <!-- Nose -->
          <ellipse cx="80" cy="95" rx="5" ry="3.5" fill="#1e293b" />
          
          <!-- Glasses Rim -->
          <circle cx="62" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <circle cx="98" cy="72" r="18" fill="none" stroke="#000000" stroke-width="4" />
          <!-- Glasses Bridge -->
          <path d="M76 72 L84 72" stroke="#000000" stroke-width="4" />
          
          <!-- Sad Eyes inside glasses -->
          <!-- Left Eye -->
          <path d="M58 70 C60 67 64 67 66 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="62" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Right Eye -->
          <path d="M94 70 C96 67 100 67 102 70" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none" />
          <circle cx="98" cy="76" r="2.5" fill="#1e293b" />
          
          <!-- Tears (Blue) -->
          <!-- Left tear -->
          <path d="M62 78 C58 88 56 102 62 108 C64 102 64 88 62 78" fill="#38bdf8" opacity="0.85" />
          <path d="M60 84 C56 94 54 102 58 106 C60 102 60 94 60 84" fill="#38bdf8" opacity="0.6" />
          <!-- Right tear -->
          <path d="M98 78 C102 88 104 102 98 108 C96 102 96 88 98 78" fill="#38bdf8" opacity="0.85" />
          <path d="M100 84 C104 94 106 102 102 106 C100 102 100 94 100 84" fill="#38bdf8" opacity="0.6" />
        </svg>
      </div>
      
      <h2>${isVi ? "Khoan, đừng đi!" : "等一下，别走！"}</h2>
      <p class="quit-modal-sub">${isVi ? "Chỉ còn 2 phút thôi! Bạn có chắc chắn muốn thoát không?" : "只需再学习2分钟！你确定要退出吗？"}</p>
      
      <div class="quit-modal-buttons">
        <button id="btnKeepLearning" class="btn-keep-learning" type="button">${isVi ? "HỌC TIẾP" : "继续学习"}</button>
        <button id="btnQuitLearning" class="btn-quit-learning" type="button">${isVi ? "KẾT THÚC" : "结束"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeModal = () => {
    modalDiv.classList.add("fade-out");
    setTimeout(() => modalDiv.remove(), 200);
  };

  document.getElementById("closeQuitModal").onclick = closeModal;
  document.getElementById("btnKeepLearning").onclick = closeModal;
  modalDiv.onclick = (e) => { if (e.target === modalDiv) closeModal(); };

  document.getElementById("btnQuitLearning").onclick = () => {
    closeModal();
    renderCourse();
    setScreen("course");
  };
}

function renderGlobalFooter() {
  const footerNode = $("#globalFooter");
  if (!footerNode) return;

  const isVi = state.lang === "vi";

  if (state.screen === "home" || state.screen === "roadmap" || state.screen === "course") {
    footerNode.innerHTML = `
        <div class="footer-container">
          <div class="footer-brand-col">
            <div class="footer-logo">
              <div class="footer-logo-circle">中</div>
              <span class="footer-logo-text">${isVi ? "Học Tiếng Trung" : "学习中文"}</span>
            </div>
            <p class="footer-tagline">${isVi ? "Học dễ hiểu - Nhớ lâu - Ứng dụng ngay" : "易学 - 难忘 - 即学即用"}</p>
            <div class="footer-socials">
              <a href="#" class="social-icon social-fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3A4.5 4.5 0 0 0 9 5.5V8z"/></svg>
              </a>
              <a href="#" class="social-icon social-yt" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.3 12 3.3 12 3.3s-7 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.5 9.1.5 9.1.5s7 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              </a>
              <a href="#" class="social-icon social-tt" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.5 2v10c0 1.9-1.6 3.5-3.5 3.5S5.5 13.9 5.5 12s1.6-3.5 3.5-3.5c.5 0 1 .1 1.4.3v-4c-1.4-.6-3-.7-4.5-.4-2.7.6-4.9 2.8-5.3 5.6C.1 16.5 3 20 6.5 20h2c3.9 0 7-3.1 7-7V6.8c1.3.9 2.8 1.4 4.5 1.2V4c-1.8 0-3.3-.9-4.1-2.4l-1.4.4z"/></svg>
              </a>
              <a href="mailto:hello@hoctiengtrung.vn" class="social-icon social-mail" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "KHÁM PHÁ" : "探索"}</h4>
            <ul class="footer-list">
              <li><a href="#" data-footer-nav="course">${isVi ? "Khóa học" : "课程"}</a></li>
              <li><a href="#" data-footer-nav="course">${isVi ? "Lộ trình" : "路线"}</a></li>
              <li><a href="#" data-footer-nav="blog">${isVi ? "Blog" : "博客"}</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "VỀ CHÚNG TÔI" : "关于我们"}</h4>
            <ul class="footer-list">
              <li><a href="#">${isVi ? "Giảng viên" : "讲师"}</a></li>
              <li><a href="#">${isVi ? "Giới thiệu" : "介绍"}</a></li>
              <li><a href="#">${isVi ? "Chính sách" : "政策"}</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-heading">${isVi ? "LIÊN HỆ" : "联系"}</h4>
            <ul class="footer-list footer-contact-list">
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>0988 888 888</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                <span>hello@hoctiengtrung.vn</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${isVi ? "Hà Nội, Việt Nam" : "河内，越南"}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© 2024 ${isVi ? "Học Tiếng Trung. Tất cả quyền được bảo lưu." : "学习中文。版权所有。"}</p>
        </div>
    `;
    footerNode.classList.remove("hidden");
  } else {
    footerNode.innerHTML = "";
    footerNode.classList.add("hidden");
  }

}

function renderHomeTestimonialsHTML(isVi) {
  const items = [
    {
      nameVi: "Nguyễn Hà N.",
      nameZh: "阮荷娜",
      image: "assets/review_user_1.png",
      textVi: "Giáo trình bài bản và có hệ thống. Sau 6 tháng học trên HuaMei, tôi đã tự tin đậu HSK 4 và giao tiếp cơ bản trong công việc.",
      textZh: "课程体系完整又系统。在华美学习六个月后，我顺利通过了 HSK 4，并能在工作中进行基础交流。",
    },
    {
      nameVi: "Trần Anh",
      nameZh: "陈英",
      image: "assets/review_user_2.png",
      textVi: "Các thầy cô rất nhiệt tình, bài học sát thực tế. Mình có thể dùng tiếng Trung trực tiếp trong các cuộc họp công việc.",
      textZh: "老师非常热情，课程内容贴近实际。我现在可以直接用中文参与工作会议。",
    },
    {
      nameVi: "Lê Minh Dũng",
      nameZh: "黎明勇",
      image: "assets/review_user_3.png",
      textVi: "Ứng dụng tiện, có thể học mọi lúc mọi nơi. Kỹ năng viết và giao tiếp của mình tiến bộ rõ rệt chỉ sau vài tháng.",
      textZh: "应用很方便，随时随地都能学习。短短几个月，我的书写和沟通能力就有了明显提升。",
    },
  ];

  return `
    <section class="testimonials-section">
      <div class="testimonials-panel">
        <div class="testimonials-decor testimonials-decor-left" aria-hidden="true">
          <svg viewBox="0 0 120 80" fill="none">
            <path d="M8 58c18-10 34-8 48 4" stroke="rgba(16,163,82,0.14)" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 42c14-8 28-6 40 6" stroke="rgba(16,163,82,0.1)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="testimonials-decor testimonials-decor-right" aria-hidden="true">
          <svg viewBox="0 0 140 160" fill="none">
            <path d="M98 8v18c0 8-6 14-14 14h-4c-8 0-14-6-14-14V8" stroke="#d64545" stroke-width="2"/>
            <rect x="78" y="38" width="24" height="30" rx="4" fill="#ef4444"/>
            <line x1="90" y1="68" x2="90" y2="78" stroke="#d64545" stroke-width="2"/>
            <path d="M118 24c-8 12-18 22-30 30" stroke="#86b38a" stroke-width="2" stroke-linecap="round"/>
            <path d="M124 42c-10 10-20 18-34 24" stroke="#9cc9a0" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse cx="108" cy="88" rx="10" ry="16" fill="#a8d5ab" opacity="0.55"/>
            <ellipse cx="118" cy="104" rx="8" ry="14" fill="#8fc294" opacity="0.45"/>
          </svg>
        </div>

        <h2 class="testimonials-title">
          <span class="testimonials-title-accent">${isVi ? "Bạn nghĩ gì về HuaMei" : "作为语言学习者，您对华美"}</span>${isVi ? " với tư cách là một người học ngôn ngữ?" : "有什么看法？"}
        </h2>
        <div class="testimonials-divider" aria-hidden="true"><span></span></div>

        <div class="testimonials-grid">
          ${items.map((item) => `
            <article class="testimonial-card">
              <div class="testimonial-quote" aria-hidden="true">“</div>
              <div class="testimonial-card-top">
                <img class="testimonial-avatar" src="${item.image}" alt="" loading="lazy" />
                <div class="testimonial-meta">
                  <strong>${isVi ? item.nameVi : item.nameZh}</strong>
                  <div class="testimonial-stars" aria-label="${isVi ? "5 sao" : "5 星"}">★★★★★</div>
                </div>
              </div>
              <p class="testimonial-text">${isVi ? item.textVi : item.textZh}</p>
            </article>
          `).join("")}
        </div>

        <div class="testimonials-dots" aria-hidden="true">
          <span class="is-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const isVi = state.lang === "vi";
  screens.home.innerHTML = `
    <!-- Hero Section -->
    <section class="redesigned-home hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            ${isVi
    ? `Học tiếng Trung<br>dễ dàng cùng<br><span class="hero-highlight">lộ trình rõ ràng<span class="highlight-line" aria-hidden="true"></span></span>`
    : `轻松学习中文<br>搭配清晰<br><span class="hero-highlight">学习路线<span class="highlight-line" aria-hidden="true"></span></span>`}
          </h1>

          <p class="hero-subtitle">
            ${isVi
    ? "Khóa học bài bản cho người mới bắt đầu đến nâng cao, giúp bạn tự tin giao tiếp, học HSK và ứng dụng trong công việc."
    : "从入门到进阶的系统课程，帮助你自信交流、备考 HSK，并应用到工作中。"}
          </p>
          <div class="hero-buttons">
            <button id="heroStartBtn" class="btn-hero-primary" type="button">
              ${isVi ? "Bắt đầu học ngay" : "立即开始学习"} <span class="arrow-icon">›</span>
            </button>
          </div>
        </div>
          <div class="hero-visual-box">
            <div class="hero-visual-bg" aria-hidden="true"></div>
            <div class="hero-media-card">
              <img src="assets/hero_illustration.png" class="hero-main-img" alt="Học tiếng Trung" />
            </div>
        </div>
    </section>

    <!-- Features Section: Vì sao nên học cùng chúng tôi? -->
    <section class="features-section">
        <h2 class="section-title text-center">
          ${isVi ? "Vì sao nên học cùng chúng tôi?" : "为什么选择和我们一起学习？"}
        </h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-wrapper color-route">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 class="feature-title">${isVi ? "Lộ trình rõ ràng" : "清晰的学习路线"}</h3>
            <p class="feature-desc">${isVi ? "Lộ trình khóa học theo từng cấp độ, dễ dàng theo dõi và bứt phá." : "按级别排列的课程路线，易于跟踪和突破。"}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-teacher">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 class="feature-title">${isVi ? "Giảng viên tận tâm" : "用心的讲师"}</h3>
            <p class="feature-desc">${isVi ? "Giảng viên giàu kinh nghiệm, nhiệt tình đồng hành cùng bạn." : "经验丰富的讲师，热情地陪伴着您。"}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-book">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 class="feature-title">${isVi ? "Bài học dễ hiểu" : "通俗易懂的课程"}</h3>
            <p class="feature-desc">${isVi ? "Nội dung tinh gọn, sinh động, dễ hiểu và dễ áp dụng vào thực tế." : "内容精简、生动、易懂，且易于应用到实际中。"}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon-wrapper color-support">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <h3 class="feature-title">${isVi ? "Hỗ trợ 1:1" : "1对1支持"}</h3>
            <p class="feature-desc">${isVi ? "Hỗ trợ riêng từng học viên, giải đáp nhanh chóng, tiến bộ mỗi ngày." : "针对每位学员的专属支持，快速解答，每天都有进步。"}</p>
          </div>
        </div>
    </section>

    ${renderHomeTestimonialsHTML(isVi)}
  `;
}

function renderCourse() {
  if (state.module === "hsk") renderHskCourse();
  else renderDailyCourse();
}

function renderHskLessonListHTML() {
  const isVi = state.lang === "vi";
  let filteredLessons = hskLevels[state.level].map((lessonItem, index) => ({ lessonItem, index }));

  if (state.hskSearchQuery.trim()) {
    const query = normalizeLatin(state.hskSearchQuery.trim());
    filteredLessons = filteredLessons.filter(({ lessonItem }) => {
      const matchNo = `bai ${lessonItem.no}`.includes(query);
      const matchVi = normalizeLatin(lessonItem.titleVi || lessonItem.title).includes(query);
      const matchZh = normalizeLatin(lessonItem.titleZh || lessonItem.title).includes(query);
      return matchNo || matchVi || matchZh;
    });
  }

  if (state.hskFilterTab === "completed") {
    filteredLessons = filteredLessons.filter(({ lessonItem }) => state.completed.has(lessonItem.id));
  }

  return filteredLessons.length > 0 ? filteredLessons.map(({ lessonItem }) => {
    const isCompleted = state.completed.has(lessonItem.id);
    const wordCount = hskLessonItemsByType(lessonItem, "word").length;
    const sentenceCount = hskLessonItemsByType(lessonItem, "sentence").length;

    let progressIndicator = "";
    if (isCompleted) {
      progressIndicator = `<span class="lesson-check-badge">✓</span>`;
    } else if (lessonItem.id === "hsk2-l3") {
      progressIndicator = `
        <div class="lesson-radial-progress">
          <div class="lesson-radial-inner">45%</div>
        </div>
      `;
    }

    return `
      <div class="hsk-lesson-card ${isCompleted ? "completed" : ""}" data-lesson="${lessonItem.id}">
        <div class="hsk-lesson-left">
          <div class="hsk-lesson-number">${lessonItem.no}</div>
          <div class="hsk-lesson-info">
            <h4>${isVi ? `Bài ${lessonItem.no}` : `第 ${lessonItem.no} 课`}</h4>
            <p>${state.lang === "vi" ? (lessonItem.titleVi || lessonItem.title) : (lessonItem.titleZh || lessonItem.title)}</p>
          </div>
        </div>
        
        <div class="hsk-lesson-center">
          ${progressIndicator}
        </div>
        
        <div class="hsk-lesson-right">
          <span class="hsk-items-count hsk-items-count--word">${wordCount} ${isVi ? "từ vựng" : "生词"}</span>
          <span class="hsk-items-count hsk-items-count--phrase">${sentenceCount} ${isVi ? "câu" : "句子"}</span>
          <button class="hsk-lesson-arrow-btn" type="button" aria-label="Luyện tập">›</button>
        </div>
      </div>
    `;
  }).join("") : `
    <div class="hsk-no-results">
      ${isVi ? "Không tìm thấy bài học nào phù hợp." : "未找到符合的课程。"}
    </div>
  `;
}

function renderHskContentTypePickerHTML(lessonItem = getHskPendingLesson()) {
  const isVi = state.lang === "vi";
  if (!lessonItem) return "";
  return `
    <div class="hsk-study-part-grid">
      ${hskContentTypes.map((contentType) => {
        const itemsCount = hskLessonItemsByType(lessonItem, contentType.id).length;
        const active = state.hskContentType === contentType.id;
        const disabled = itemsCount === 0;
        const isWord = contentType.id === "word";
        return `
          <button class="hsk-study-part-card hsk-study-part-card--${isWord ? "word" : "sentence"} ${active ? "active" : ""}" data-hsk-content-type="${contentType.id}" type="button" ${disabled ? "disabled" : ""}>
            <span class="hsk-study-part-copy">
              <strong>${isWord ? (isVi ? "Từ vựng" : "词汇") : (isVi ? "Câu" : "句子")}</strong>
              <small>${itemsCount} ${isWord ? (isVi ? "từ vựng" : "词") : (isVi ? "câu" : "句")}</small>
              <em>${isWord ? `${iconSvg("book-open")} ${isVi ? "Sẵn sàng học" : "准备学习"}` : `${iconSvg("message")} ${itemsCount} ${isVi ? "mục" : "项"}`}</em>
            </span>
            <span class="hsk-study-part-art" aria-hidden="true">
              ${isWord ? `
                <i class="hsk-word-book">生<br>词<br>本</i>
                <i class="hsk-word-card hsk-word-card-main">词<b>cí</b></i>
                <i class="hsk-word-card hsk-word-card-back">旅<b>lǚ</b></i>
              ` : `
                <i class="hsk-sentence-chat">•••</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-a">你去哪儿？</i>
                <i class="hsk-sentence-strip hsk-sentence-strip-b">我去图书馆。</i>
                <i class="hsk-sentence-pencil"></i>
              `}
            </span>
            <span class="hsk-study-part-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

const hskLevelCards = [
  { level: "HSK1", vi: "Sơ cấp 1", zh: "初级 1", descVi: "Giao tiếp sinh hoạt hằng ngày", descZh: "日常生活交流" },
  { level: "HSK2", vi: "Sơ cấp 2", zh: "初级 2", descVi: "Từ vựng và mẫu câu nền tảng", descZh: "基础词汇和句型" },
  { level: "HSK3", vi: "Trung cấp 1", zh: "中级 1", descVi: "Diễn đạt chủ đề quen thuộc", descZh: "表达熟悉话题" },
  { level: "HSK4", vi: "Trung cấp 2", zh: "中级 2", descVi: "Giao tiếp linh hoạt hơn", descZh: "更灵活地交流" },
  { level: "HSK5", vi: "Cao cấp 1", zh: "高级 1", descVi: "Đọc hiểu và thảo luận mở rộng", descZh: "阅读理解与讨论" },
  { level: "HSK6", vi: "Cao cấp 2", zh: "高级 2", descVi: "Nâng cao phản xạ ngôn ngữ", descZh: "提升语言反应" },
];

function renderHskLevelPickerHTML() {
  const isVi = state.lang === "vi";
  return `
    <section class="hsk-level-picker">
      <div class="hsk-level-hero" aria-hidden="true">
        <img src="assets/hsk-level-hero.png" alt="" />
      </div>

      <div class="hsk-level-grid">
        ${hskLevelCards.map((card) => {
    const isActive = card.level === state.level;
    const lessonCount = hskLevels[card.level]?.length || 30;
    const status = isActive ? (isVi ? "Đang học" : "学习中") : (isVi ? "Bắt đầu" : "开始");
    return `
          <button class="hsk-level-card ${isActive ? "active" : ""}" data-level="${card.level}" type="button">
            <span class="hsk-level-card-top">
              <strong>${card.level}</strong>
              <small>${lessonCount} ${isVi ? "bài" : "课"}</small>
            </span>
            <span class="hsk-level-card-title">${isVi ? card.vi : card.zh}</span>
            <span class="hsk-level-card-desc">${isVi ? card.descVi : card.descZh}</span>
            <span class="hsk-level-status"><i>${iconSvg("bar-chart")}</i>${status}</span>
            <span class="hsk-level-arrow" aria-hidden="true">${iconSvg("arrow-right")}</span>
          </button>
        `;
  }).join("")}
      </div>
    </div>
  `;
}

function renderDailyContentTypePickerHTML(theme = getDailyPendingTheme()) {
  const isVi = state.lang === "vi";
  if (!theme) return "";
  return `
    <div class="hsk-content-type-grid">
      ${hskContentTypes.map((contentType) => {
        const itemsCount = dailyThemeItemsByType(theme, contentType.id).length;
        const active = state.dailyContentType === contentType.id;
        const disabled = itemsCount === 0;
        return `
          <button class="hsk-content-type-card ${active ? "active" : ""}" data-daily-content-type="${contentType.id}" type="button" ${disabled ? "disabled" : ""}>
            <span class="hsk-content-type-icon">${contentType.id === "word" ? "字" : "句"}</span>
            <span class="hsk-content-type-copy">
              <strong>${isVi ? contentType.labelVi : contentType.labelZh}</strong>
              <small>${itemsCount} ${isVi ? "mục luyện" : "个练习"}</small>
            </span>
            <span class="arrow-icon">›</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderHskCourse() {
  if (state.hskLevelPicker) {
    screens.course.innerHTML = renderHskLevelPickerHTML();
    return;
  }

  const isVi = state.lang === "vi";
  const totalLessons = hskLevels[state.level].length;
  const completedLessonsInLevel = hskLevels[state.level].filter(l => state.completed.has(l.id)).length;
  const hskProgressPercent = totalLessons > 0 ? Math.round((completedLessonsInLevel / totalLessons) * 100) : 0;
  const totalItemsInLevel = hskLevels[state.level].reduce((acc, l) => acc + hskAllLessonItems(l).length, 0);
  const pendingLesson = getHskPendingLesson();
  const totalWordsInLevel = hskLevels[state.level].reduce((acc, lessonItem) => acc + hskLessonItemsByType(lessonItem, "word").length, 0);
  const totalSentencesInLevel = hskLevels[state.level].reduce((acc, lessonItem) => acc + hskLessonItemsByType(lessonItem, "sentence").length, 0);
  const heroTitle = pendingLesson ? (isVi ? "Chọn phần học" : "选择学习部分") : state.level;
  const heroBackAttr = pendingLesson ? "data-hsk-back-lessons" : "data-hsk-level-back";
  const heroBackLabel = pendingLesson
    ? (isVi ? "Quay lại danh sách bài" : "返回课程列表")
    : (isVi ? "Quay lại chọn cấp độ" : "返回等级选择");

  screens.course.innerHTML = `
    <section class="hsk-lesson-screen">
      <div class="hsk-lesson-hero">
        <button class="hsk-lesson-back-btn" ${heroBackAttr} type="button" aria-label="${heroBackLabel}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1>${heroTitle}</h1>
        <div class="hsk-lesson-hero-art" aria-hidden="true">
          <span class="hsk-lesson-art-card">汉</span>
          <span class="hsk-lesson-art-book">写</span>
          <span class="hsk-lesson-art-pencil"></span>
        </div>
      </div>

      <div class="hsk-lesson-panel">
        ${pendingLesson ? `
          <div class="hsk-study-part-section">
            <div class="hsk-study-part-heading">
              <h2>${state.lang === "vi" ? (pendingLesson.titleVi || pendingLesson.title) : (pendingLesson.titleZh || pendingLesson.title)}</h2>
              <p>${state.level} · ${isVi ? `Bài ${pendingLesson.no}` : `第 ${pendingLesson.no} 课`}</p>
            </div>
            ${renderHskContentTypePickerHTML(pendingLesson)}
          </div>
        ` : `
          <div class="hsk-lesson-panel-header">
            <div class="hsk-lesson-title-group">
              <h2>${isVi ? `Danh sách bài học ${state.level}` : `${state.level} 课程列表`}</h2>
              <div class="hsk-lesson-summary">
                <span><i>${iconSvg("book-open")}</i><strong>${totalLessons}</strong> ${isVi ? "bài học" : "课"}</span>
                <span><i>${iconSvg("letters")}</i><strong>${totalWordsInLevel}</strong> ${isVi ? "từ vựng" : "词"}</span>
                <span><i>${iconSvg("message")}</i><strong>${totalSentencesInLevel}</strong> ${isVi ? "câu" : "句"}</span>
              </div>
            </div>
          </div>

          <div class="hsk-lessons-list hsk-lessons-list--panel">
            ${renderHskLessonListHTML()}
          </div>
        `}
      </div>
    </section>
  `;
  return;

  screens.course.innerHTML = `
    <section class="hsk-course-layout">
      <!-- Left Column: Sidebar -->
      <aside class="hsk-sidebar">
        <div class="hsk-sidebar-header">
          <div class="hsk-header-icon">🏆</div>
          <div class="hsk-header-copy">
            <h2>${t("hskTitle")}</h2>
            <p>${isVi ? "Học theo cấp độ HSK với lộ trình bài bản và hiệu quả." : "按HSK级别学习，提供系统且高效的路线。"}</p>
          </div>
        </div>
        
        <div class="hsk-search-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="hskSearchInput" placeholder="${isVi ? "Tìm kiếm bài học..." : "搜索课程..."}" value="${escapeAttr(state.hskSearchQuery)}" />
        </div>
        
        <div class="hsk-level-section">
          <h3>${isVi ? "Chọn cấp độ" : "选择等级"}</h3>
          <div class="hsk-level-list">
            ${Object.keys(hskLevels).map((level) => {
    const isActive = level === state.level;
    return `
                <button class="hsk-level-btn ${isActive ? "active" : ""}" data-level="${level}" type="button">
                  <span>${level}</span>
                  <span class="arrow-icon">›</span>
                </button>
              `;
  }).join("")}
          </div>
        </div>
        
        <div class="hsk-stats-section">
          <h3>${isVi ? "Thống kê nhanh" : "快速统计"}</h3>
          <div class="hsk-stats-grid">
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-lessons">📚</div>
              <div class="stat-card-info">
                <strong>${totalLessons}</strong>
                <span>${isVi ? "Tổng số bài" : "课程总数"}</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-progress">📊</div>
              <div class="stat-card-info">
                <strong>${hskProgressPercent}%</strong>
                <span>${isVi ? "Tiến độ học" : "学习进度"}</span>
              </div>
            </div>
            
            <div class="hsk-stat-card">
              <div class="stat-card-icon icon-items">✍️</div>
              <div class="stat-card-info">
                <strong>${totalItemsInLevel}</strong>
                <span>${isVi ? "Tổng số mục luyện" : "练习总数"}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <!-- Right Column: Main Content -->
      <section class="hsk-main-content">
        <!-- Banner Recommendation -->
        <div class="hsk-recom-card">
          <div class="recom-target-wrapper">
            <svg viewBox="0 0 100 100" class="banner-target-svg">
              <circle cx="50" cy="50" r="45" fill="#d1fae5" />
              <circle cx="50" cy="50" r="33" fill="none" stroke="#10b981" stroke-width="6" />
              <circle cx="50" cy="50" r="21" fill="none" stroke="#047857" stroke-width="5" />
              <circle cx="50" cy="50" r="10" fill="#0ea855" />
              <line x1="82" y1="18" x2="55" y2="45" stroke="#047857" stroke-width="4" stroke-linecap="round" />
              <polygon points="52,48 57,41 47,44" fill="#047857" />
            </svg>
          </div>
          <div class="hsk-recom-info">
            <h2>${isVi ? "Lộ trình đề xuất hôm nay" : "今日推荐路线"}</h2>
            <p>${isVi ? "Hoàn thành 2-3 bài học để duy trì thói quen học tập hiệu quả." : "完成2-3课以保持高效的学习习惯。"}</p>
            <div class="hsk-recom-meta">
              <span>📖 ${completedLessonsInLevel} / ${totalLessons} ${isVi ? "bài đã học" : "已学课程"}</span>
              <span class="meta-divider">|</span>
              <span>🕒 ~ 20 ${isVi ? "phút" : "分钟"}</span>
            </div>
          </div>
          <button id="hskContinueBtn" class="btn-continue-learn" type="button">
            <span>▶</span> ${isVi ? "Tiếp tục học" : "继续学习"}
          </button>
        </div>
        
        ${pendingLesson ? `
        <div class="hsk-content-type-section">
          <div class="hsk-lessons-header">
            <h2>${isVi ? `Chọn phần học - Bài ${pendingLesson.no}` : `选择学习部分 - 第 ${pendingLesson.no} 课`}</h2>
            <button class="hsk-back-to-lessons-btn" data-hsk-back-lessons type="button">${isVi ? "Danh sách bài" : "课程列表"}</button>
          </div>
          <div class="hsk-selected-lesson-card">
            <strong>${state.lang === "vi" ? (pendingLesson.titleVi || pendingLesson.title) : (pendingLesson.titleZh || pendingLesson.title)}</strong>
            <span>${state.level} · ${isVi ? `Bài ${pendingLesson.no}` : `第 ${pendingLesson.no} 课`}</span>
          </div>
          ${renderHskContentTypePickerHTML(pendingLesson)}
        </div>
        ` : `
        <!-- Lesson List Section -->
        <div class="hsk-lessons-header">
          <h2>${isVi ? `Danh sách bài học ${state.level}` : `${state.level} 课程列表`}</h2>
          <div class="hsk-lessons-actions">
            <div class="hsk-filter-tabs">
              <button class="${state.hskFilterTab === "newest" ? "active" : ""}" data-hsk-filter="newest" type="button">${isVi ? "Mới nhất" : "最新"}</button>
              <button class="${state.hskFilterTab === "popular" ? "active" : ""}" data-hsk-filter="popular" type="button">${isVi ? "Phổ biến" : "热门"}</button>
              <button class="${state.hskFilterTab === "completed" ? "active" : ""}" data-hsk-filter="completed" type="button">${isVi ? "Đã học" : "已学"}</button>
            </div>
            <button class="hsk-filter-settings-btn" type="button" aria-label="Bộ lọc">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hsk-lessons-list">
          ${renderHskLessonListHTML()}
        </div>
        `}
      </section>
    </section>
  `;
}

function renderDailyThemesListHTML() {
  let filteredThemes = dailyThemes;
  const isVi = state.lang === "vi";

  if (state.dailySearchQuery.trim()) {
    const query = normalizeLatin(state.dailySearchQuery.trim());
    filteredThemes = filteredThemes.filter(theme => {
      const meta = getDailyThemeCardMeta(theme);
      return normalizeLatin(meta.title).includes(query) ||
        normalizeLatin(meta.desc).includes(query) ||
        normalizeLatin(theme.vi).includes(query) ||
        normalizeLatin(theme.zh).includes(query);
    });
  }

  if (state.dailyFilterTab !== "all") {
    filteredThemes = filteredThemes.filter(theme => {
      const cats = themeCategories[theme.id] || [];
      return cats.includes(state.dailyFilterTab);
    });
  }

  return filteredThemes.length > 0 ? filteredThemes.map((theme) => {
    const cardMeta = getDailyThemeCardMeta(theme);
    const themeIcon = getThemeIcon(cardMeta.visual);
    const countLabel = isVi ? "Mục luyện" : "个练习";
    return `
      <article class="daily-theme-card" data-theme="${theme.id}">
        <div class="daily-theme-card-top">
          <span class="daily-theme-icon-box" aria-hidden="true">${themeIcon}</span>
          <span class="daily-theme-count-badge">${theme.items.length} ${countLabel}</span>
        </div>
        <h3 class="daily-theme-title">${cardMeta.title}</h3>
        <p class="daily-theme-desc">${cardMeta.desc}</p>
        <button class="daily-theme-enter-btn" type="button">
          ${isVi ? "Vào học" : "开始学习"}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>
          </svg>
        </button>
      </article>
    `;
  }).join("") : `
    <div class="daily-no-results">
      ${isVi ? "Không tìm thấy chủ đề nào phù hợp." : "未找到符合的主题。"}
    </div>
  `;
}

function renderDailyCourse() {
  const isVi = state.lang === "vi";
  const pendingTheme = getDailyPendingTheme();

  screens.course.innerHTML = `
    <section class="daily-course-layout">
      ${pendingTheme ? `
      <div class="hsk-content-type-section">
        <div class="hsk-lessons-header">
          <h2>${isVi ? "Chọn phần học" : "选择学习内容"}</h2>
          <button class="hsk-back-to-lessons-btn" data-daily-back-themes type="button">${isVi ? "Danh sách chủ đề" : "主题列表"}</button>
        </div>
        <div class="hsk-selected-lesson-card">
          <strong>${state.lang === "vi" ? pendingTheme.vi : pendingTheme.zh}</strong>
          <span>${state.lang === "vi" ? pendingTheme.zh : pendingTheme.vi}</span>
        </div>
        ${renderDailyContentTypePickerHTML(pendingTheme)}
      </div>
      ` : `
      <header class="daily-course-header">
        <h1>${isVi ? "Chọn chủ đề giao tiếp" : "选择交流主题"}</h1>
        <p>${isVi
    ? "Khám phá các tình huống giao tiếp thực tế và nâng cao khả năng phản xạ tiếng Trung của bạn qua từng chủ đề cụ thể."
    : "探索真实交流场景，通过具体主题提升你的中文反应能力。"}</p>
      </header>

      <div class="daily-theme-grid">
        ${renderDailyThemesListHTML()}
      </div>
      `}
    </section>
  `;
}

function stopSpeechPlayback() {
  window.speechSynthesis?.cancel();
  if (activeSpeechAudio) {
    activeSpeechAudio.pause();
    activeSpeechAudio.removeAttribute("src");
    activeSpeechAudio.load();
    activeSpeechAudio = null;
  }
}

function browserSpeakText(text, options = {}) {
  const config = globalThis.speechConfig?.getSpeechPlaybackConfig
    ? globalThis.speechConfig.getSpeechPlaybackConfig({
      slow: Boolean(options.slow),
      stage: options.stage || "word",
    })
    : { lang: "zh-CN", rate: 0.98, pitch: 1 };
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = config.lang;
  utterance.voice = preferredChineseVoice || chooseChineseVoice();
  utterance.rate = config.rate;
  utterance.pitch = config.pitch;
  stopSpeechPlayback();
  window.speechSynthesis?.speak(utterance);
}

function formatAudioIndex(index) {
  return String(index + 1).padStart(2, "0");
}

function audioPath(...segments) {
  return segments
    .filter(Boolean)
    .flatMap((segment) => String(segment).split("/").filter(Boolean))
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function getAudioFileName(index, slow = false) {
  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const suffix = slow ? config.slowSuffix || "-slow" : "";
  const extension = config.fileExtension || "mp3";
  return `${formatAudioIndex(index)}${suffix}.${extension}`;
}

function getHskAudioTypeFolder(type) {
  if (type === "word") return "Word";
  if (type === "phrase") return "Phrase";
  if (type === "sentence") return "Phrase";
  return "";
}

function uniqueAudioSources(sources) {
  return sources.filter(Boolean).reduce((result, source) => {
    const expanded = globalThis.runtimeAudio?.expandAudioPathCandidates
      ? globalThis.runtimeAudio.expandAudioPathCandidates(source)
      : [source];
    for (const candidate of expanded) {
      if (candidate && !result.includes(candidate)) result.push(candidate);
    }
    return result;
  }, []);
}

function resolveAudioSource(item, speed = "normal") {
  if (globalThis.runtimeAudio?.resolveAudioSource) {
    return globalThis.runtimeAudio.resolveAudioSource(item, speed);
  }
  if (!item || typeof item !== "object") return "";
  const audio = item.audio && typeof item.audio === "object" ? item.audio : {};
  if (speed === "slow") {
    return item.audio_slow_path || audio.slow || item.slow_audio || item.audioSlow || "";
  }
  return item.audio_normal_path || audio.normal || item.normal_audio || (typeof item.audio === "string" ? item.audio : "");
}

function getLegacyAudioFileNames(index, type, slow = false) {
  const padded = String(index + 1).padStart(3, "0");
  const canonical = type === "phrase" ? "phrase" : "word";
  const prefixes = canonical === "word" ? ["word", "world"] : ["phrase"];
  const suffixes = slow ? ["slow_0.75", "slow"] : ["normal"];
  return prefixes.flatMap((prefix) => suffixes.map((suffix) => `${prefix}_${padded}_${suffix}.mp3`));
}

function getPracticeAudioSources(options = {}) {
  const collection = currentCollection();
  const item = currentItem();
  const slow = Boolean(options.slow);
  const speed = slow ? "slow" : "normal";
  const directSource = resolveAudioSource(item, speed);

  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const fileName = getAudioFileName(state.index, slow);
  const sources = [directSource];
  if (state.module === "hsk" && collection?.id) {
    const typeFolder = getHskAudioTypeFolder(item.stage || state.hskContentType);
    if (typeFolder && collection.no) {
      const levelFolder = state.level;
      const lessonFolder = `${state.level}-L${collection.no}`;
      sources.push(audioPath(config.hskBasePath || "audio/HSK", levelFolder, lessonFolder, typeFolder, fileName));
      for (const legacyName of getLegacyAudioFileNames(state.index, state.hskContentType, slow)) {
        sources.push(audioPath(config.hskBasePath || "audio/HSK", levelFolder, lessonFolder, typeFolder, legacyName));
      }
      return uniqueAudioSources(sources);
    }
    sources.push(audioPath(config.lessonBasePath || "audio/lessons", collection.id, fileName));
    return uniqueAudioSources(sources);
  }
  if (state.module === "daily" && collection?.id) {
    sources.push(audioPath(config.dailyBasePath || "audio/daily", collection.id, fileName));
    return uniqueAudioSources(sources);
  }
  return uniqueAudioSources(sources);
}

function getPracticeAudioSource(options = {}) {
  return getPracticeAudioSources(options)[0] || null;
}

function getVocabAudioSources(text) {
  const config = globalThis.speechConfig?.getLessonAudioConfig?.() || {};
  const extension = config.fileExtension || "mp3";
  return uniqueAudioSources([audioPath(config.vocabBasePath || "audio/vocab", `${text}.${extension}`)]);
}

function getVocabAudioSource(text) {
  return getVocabAudioSources(text)[0] || null;
}

function reportAudioFallback(meta = {}) {
  const attempted = meta.sources || [];
  console.warn("Audio file missing; browser voice fallback is used.", {
    itemId: meta.item?.id || "",
    text: meta.item?.hanzi || meta.text || "",
    speed: meta.speed || "normal",
    attemptedAudioPaths: attempted,
  });
  const message = "Audio file missing. Browser voice fallback is used.";
  if (typeof setInputFeedback === "function" && screens.practice && !screens.practice.classList.contains("hidden")) {
    setInputFeedback("bad", message);
  } else if (typeof showToast === "function") {
    showToast(message);
  }
}

function playAudioSources(sources, fallback, meta = {}) {
  const candidates = uniqueAudioSources(Array.isArray(sources) ? sources : [sources]);
  if (candidates.length === 0) {
    reportAudioFallback({ ...meta, sources: candidates });
    fallback?.();
    return;
  }
  stopSpeechPlayback();
  let cursor = 0;
  const tryNext = () => {
    const source = candidates[cursor];
    if (!source) {
      reportAudioFallback({ ...meta, sources: candidates });
      fallback?.();
      return;
    }
    cursor += 1;
    const audio = new Audio(source);
    let handledFailure = false;
    const handleFailure = () => {
      if (handledFailure) return;
      handledFailure = true;
      if (activeSpeechAudio === audio) activeSpeechAudio = null;
      tryNext();
    };
    activeSpeechAudio = audio;
    audio.onended = () => {
      if (activeSpeechAudio === audio) activeSpeechAudio = null;
    };
    audio.onerror = handleFailure;
    const playPromise = audio.play();
    if (playPromise?.catch) {
      playPromise.catch(handleFailure);
    }
  };
  tryNext();
}

function playAudioSource(source, fallback, meta = {}) {
  playAudioSources([source], fallback, meta);
}

function speakText(text) {
  const sources = getVocabAudioSources(text);
  playAudioSources(sources, () => browserSpeakText(text), { text, speed: "normal", sources });
}

function findItemByHanzi(hanzi) {
  for (const level of Object.values(hskLevels)) {
    for (const lesson of level) {
      const found = lesson.items.find(item => item.hanzi === hanzi);
      if (found) return found;
    }
  }
  for (const theme of dailyThemes) {
    const found = theme.items.find(item => item.hanzi === hanzi);
    if (found) return found;
  }
  for (const level of Object.values(hskLevels)) {
    for (const lesson of level) {
      for (const item of lesson.items) {
        const foundWord = item.words.find(w => w.text === hanzi);
        if (foundWord) {
          return {
            hanzi: foundWord.text,
            pinyin: foundWord.pinyin,
            tone: foundWord.tone,
            vi: foundWord.vi,
            stage: "word"
          };
        }
      }
    }
  }
  return {
    hanzi: hanzi,
    pinyin: "",
    tone: "",
    vi: "Từ đã lưu",
    stage: "word"
  };
}

function getFilteredVocabItems() {
  let savedList = Array.from(state.saved).map(hanzi => {
    const detail = findItemByHanzi(hanzi);
    return { hanzi, ...detail };
  });

  const query = (state.vocabSearchQuery || "").trim().toLowerCase();
  if (query) {
    const normQuery = normalizeLatin(query);
      savedList = savedList.filter(item =>
        item.hanzi.toLowerCase().includes(query) ||
        normalizeLatin(item.vi).includes(normQuery) ||
        normalizeLatin(item.pinyin || item.tone || "").includes(normQuery)
      );
  }

  if (state.vocabFilterTab === "word") {
    savedList = savedList.filter(item => item.stage !== "phrase" && item.stage !== "sentence");
  } else if (state.vocabFilterTab === "phrase") {
    savedList = savedList.filter(item => item.stage === "phrase" || item.stage === "sentence");
  }

  return savedList;
}

function renderVocabListHTML() {
  const isVi = state.lang === "vi";
  const savedList = getFilteredVocabItems();

  if (savedList.length === 0) {
    return `
      <div class="vocab-empty-state">
        ${isVi ? "Chưa có từ nào trong bộ từ hoặc không tìm thấy kết quả phù hợp." : "生词本为空或未找到匹配结果。"}
      </div>
    `;
  }

  return savedList.map(item => {
    const isSentence = item.stage === "sentence";
    const badgeLabel = isSentence ? (isVi ? "CÂU" : "句子") : (isVi ? "TỪ VỰNG" : "生词");

    return `
      <div class="vocab-item-card" data-vocab-hanzi="${escapeAttr(item.hanzi)}">
        <div class="vocab-item-header">
          <span class="vocab-stage-badge stage-${item.stage || 'word'}">${badgeLabel}</span>
          <button class="vocab-delete-btn" type="button" aria-label="${isVi ? "Xóa" : "删除"}">
            &times;
          </button>
        </div>
        <h3 class="vocab-hanzi">${item.hanzi}</h3>
        <p class="vocab-pinyin">${item.tone || item.pinyin || ""}</p>
        <p class="vocab-translation">${item.vi}</p>
        <button class="vocab-speak-btn" type="button" aria-label="${isVi ? "Phát âm" : "朗读"}">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 5L6 9H3v6h3l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
          ${isVi ? "Phát âm" : "朗读"}
        </button>
      </div>
    `;
  }).join("");
}

function renderVocab() {
  const isVi = state.lang === "vi";
  const totalSaved = Array.from(state.saved).length;
  const visibleCount = getFilteredVocabItems().length;
  const visibleTypeLabel = state.vocabFilterTab === "all"
    ? (isVi ? "mục đã lưu" : "个已保存项")
    : state.vocabFilterTab === "phrase"
      ? (isVi ? "cụm từ" : "短语")
      : (isVi ? "từ vựng" : "个词");

  screens.vocab.innerHTML = `
    <div class="vocab-layout">
      <div class="vocab-page-heading">
        <h1>${isVi ? "Từ vựng đã lưu" : "已保存词汇"}</h1>
        <p>${isVi ? "Quản lý và ôn tập các từ vựng bạn đã đánh dấu. Hãy luyện tập thường xuyên để ghi nhớ lâu hơn!" : "管理并复习你收藏的词汇，常常练习会记得更久！"}</p>
      </div>

      <div class="vocab-control-bar">
        <div class="vocab-visible-count">
          ${isVi ? "Đang hiển thị" : "正在显示"} <strong>${visibleCount}</strong> <span>${visibleTypeLabel}</span>
        </div>

        <div class="vocab-type-tabs" aria-label="${isVi ? "Loại mục" : "类型"}">
          <button class="${state.vocabFilterTab === "all" ? "active" : ""}" type="button" data-vocab-filter="all">${isVi ? "Tất cả" : "全部"}</button>
          <button class="${state.vocabFilterTab === "word" ? "active" : ""}" type="button" data-vocab-filter="word">${isVi ? "Từ vựng" : "词汇"}</button>
          <button class="${state.vocabFilterTab === "phrase" ? "active" : ""}" type="button" data-vocab-filter="phrase">${isVi ? "Cụm từ" : "短语"}</button>
        </div>

        <button class="vocab-review-now-btn" type="button" data-vocab-review>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
          </svg>
          ${isVi ? "Ôn tập ngay" : "立即复习"}
        </button>
      </div>

      <div class="vocab-grid">
        ${renderVocabListHTML()}
      </div>
    </div>
  `;
}

function resetPractice() {
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  state.activeWord = 0;
  state.activeInput = "";
  state.slotProgress = itemNow.words.map(() => 0);
  state.lastBadInput = "";
  state.solved = itemNow.words.map(() => false);
  state.complete = false;
  $("#burstLayer").innerHTML = "";
}

function startPractice(options = {}) {
  if (Object.prototype.hasOwnProperty.call(options, "hskContentType")) {
    state.hskContentType = options.hskContentType || "";
  }
  if (Object.prototype.hasOwnProperty.call(options, "dailyContentType")) {
    state.dailyContentType = options.dailyContentType || "";
  }
  if (options.lessonId) {
    state.module = "hsk";
    state.hskLevelPicker = false;
    state.lessonId = options.lessonId;
    state.hskPendingLessonId = "";
    const foundLevel = Object.keys(hskLevels).find((level) => hskLevels[level].some((lessonItem) => lessonItem.id === options.lessonId));
    if (foundLevel) state.level = foundLevel;
  }

  if (options.themeId) {
    state.module = "daily";
    state.themeId = options.themeId;
    state.dailyPendingThemeId = "";
  }
  if (options.module === "vocab") {
    state.module = "vocab";
  }
  state.mode = options.mode || "translate";
  state.index = options.index || 0;
  state.score = 0;
  resetPractice();
  renderPractice();
  setScreen("practice");
  setTimeout(() => {
    speak();
    focusInput();
  }, 100);
}

function renderPractice() {
  const collection = currentCollection();
  const itemNow = currentItem();
  const promptVariant = state.mode === "dictation" ? "dictation" : getPromptSizeVariant(itemNow.vi);
  screens.practice.innerHTML = `
    <header class="practice-top">
      <button id="practiceCloseBtn" class="practice-close-btn" type="button" aria-label="Close">&times;</button>  

      <div class="thin-progress"><span style="width:${((state.index + 1) / collection.items.length) * 100}%"></span></div>
      <div class="mode-switch" aria-label="${t("modeLabel")}">
        <button class="${state.mode === "translate" ? "active" : ""}" data-mode="translate" type="button">${t("translate")}</button>
        <button class="${state.mode === "dictation" ? "active" : ""}" data-mode="dictation" type="button">${t("dictation")}</button>
      </div>
    </header>
          <div class="practice-meta">
        <strong>${collection.title}</strong>
        <span>${state.index + 1}/${collection.items.length}</span>
      </div>
    <section class="practice-layout">
      <section class="exercise-card">
        <span class="stage-pill">${hskContentTypeLabel(learningContentBucket(itemNow))}</span>
        <p>${state.mode === "translate" ? t("translateHint") : t("dictationHint")}</p>
        <h1 class="practice-prompt practice-prompt--${promptVariant}">${state.mode === "dictation" ? "听一听" : itemNow.vi}</h1>
        <div class="slot-row">
          ${itemNow.words.map((word, index) => {
    const active = practiceRules.shouldRenderAnswerInput(state, index);
    const metaLabel = displaySegmentLabel(normalizeDisplaySegment(word));
    return `
              <div class="answer-slot color-${index % 6} ${active ? "active" : ""} ${(state.slotProgress[index] || 0) > 0 ? "progress" : ""} ${state.solved[index] ? "solved" : ""}">
                <div class="slot-line">
                  <i class="slot-progress-fill" style="width:${slotProgressPercent(index, word)}"></i>
                  ${active ? `<input id="answerInput" placeholder="${t("inputPlaceholder")}" autocomplete="off" inputmode="latin" value="${escapeAttr(state.activeInput)}" />` : `<strong>${state.solved[index] ? word.text : ""}</strong><small>${state.solved[index] ? word.tone : ""}</small>`}
                </div>
                ${active && !state.solved[index] ? `<span class="slot-progress-text">${slotProgressText(index, word)}</span>` : ""}
                ${practiceRules.shouldShowSlotMeta(state, index) && metaLabel ? `<span>${metaLabel}</span>` : ""}
              </div>
            `;
  }).join("")
          
    }
       
      </section>
      <aside class="memory-panel ${state.complete ? "ready" : ""}">
        <p class="eyebrow">${t("answerTitle")}</p>
        <strong>${state.complete ? itemNow.hanzi : "?"}</strong>
        <span>${state.complete ? itemNow.tone : itemNow.stage.toUpperCase()}</span>
        <p>${state.complete ? itemNow.vi : state.lang === "vi" ? "Trả lời đúng để mở thẻ ghi nhớ." : "答对后打开记忆卡。"}</p>
        <div>
          ${practiceRules.shouldShowMemoryDetails(state) ? itemNow.words.map((word) => { const metaLabel = displaySegmentLabel(normalizeDisplaySegment(word)); const detailParts = [word.text, word.tone, metaLabel, word.vi].filter(Boolean); return `<em>${detailParts.join(" · ")}</em>`; }).join("") : ""}
        </div>
      </aside>
    </section>
    <footer class="function-dock">
      <button id="prevBtn" type="button" ${state.index === 0 ? "disabled" : ""}><span>◀</span>${t("prev")}</button>
      <button id="playBtn" type="button"><span>▶</span>${t("play")}</button>
      <button id="slowBtn" type="button"><span>◷</span>${t("slow")}</button>
      <button id="saveBtn" class="${state.saved.has(itemNow.hanzi) ? "saved" : ""}" type="button"><span>★</span>${state.saved.has(itemNow.hanzi) ? (state.lang === "vi" ? "Đã lưu" : "已收藏") : t("favorite")}</button>
      <button id="answerBtn" type="button"><span>?</span>${t("showAnswer")}</button>
      <button id="nextBtn" class="primary" type="button"><span>↵</span>${t("next")}</button>
    </footer>
  `;
  focusInput();
}

function focusInput() {
  $("#answerInput")?.focus();
}

function setActiveSlotProgress(match) {
  if (!match || match.kind !== "progress") return;
  state.slotProgress[match.start] = Math.min(match.inputLength, match.totalLength);
  const activeSlot = $(".answer-slot.active");
  const fill = activeSlot?.querySelector(".slot-progress-fill");
  const text = activeSlot?.querySelector(".slot-progress-text");
  const itemNow = currentItem();
  const word = itemNow.words[match.start];
  activeSlot?.classList.add("progress");
  activeSlot?.classList.remove("error");
  if (fill) fill.style.width = slotProgressPercent(match.start, word);
  if (text) text.textContent = slotProgressText(match.start, word);
}

function setInputFeedback(kind, message = "") {
  const feedbackNode = $("#feedback");
  if (!feedbackNode) return;
  feedbackNode.textContent = message;
  feedbackNode.className = `feedback ${kind || ""}`.trim();
}

function handleLiveAnswerInput(value) {
  if (state.complete) return;
  state.activeInput = value;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(value, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  const pinyinState = classifyActivePinyinInput(value, itemNow);

  if (!String(value || "").trim()) {
    state.slotProgress[state.activeWord] = 0;
    state.lastBadInput = "";
    $(".answer-slot.active")?.classList.remove("progress", "error");
    setInputFeedback("", "");
    return;
  }

  if (match?.kind === "full" || match?.kind === "partial") {
    submitAnswer(value);
    return;
  }

  if (match?.kind === "progress" || pinyinState.kind === "progress") {
    setActiveSlotProgress(match?.kind === "progress" ? match : pinyinState);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }

  if (pinyinState.kind === "extra") {
    $(".answer-slot.active")?.classList.remove("error");
    setInputFeedback("warn", state.lang === "vi" ? "Bạn đã gõ thêm nội dung." : "多输入了内容。");
    return;
  }

  $(".answer-slot.active")?.classList.add("error");
  setInputFeedback("bad", state.lang === "vi" ? "Pinyin chưa khớp." : "拼音不匹配。");
  if (state.lastBadInput !== value) {
    playTone("error");
    state.lastBadInput = value;
  }
}

function submitAnswer(value) {
  if (state.complete) {
    nextItem();
    return;
  }
  const itemNow = currentItem();
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return;
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  const pinyinState = classifyActivePinyinInput(answer, itemNow);
  if (match?.kind === "full" || isMatch(answer, itemNow.pinyin, itemNow.hanzi)) {
    state.solved = itemNow.words.map(() => true);
    state.slotProgress = itemNow.words.map((word) => slotPinyinLength(word));
    state.activeInput = "";
    finishItem({ autoAdvance: true });
    return;
  }
  if (match?.kind === "partial" && match.count > 0) {
    const start = Number.isInteger(match.start) ? match.start : state.activeWord;
    for (let index = start; index < Math.min(itemNow.words.length, start + match.count); index += 1) {
      state.solved[index] = true;
      state.slotProgress[index] = slotPinyinLength(itemNow.words[index]);
    }
    state.activeInput = "";
    state.lastBadInput = "";
    playTone("correct");
    const nextUnsolved = state.solved.findIndex((solved) => !solved);
    if (nextUnsolved !== -1) {
      state.activeWord = nextUnsolved;
      renderPractice();
      const remaining = state.solved.filter((solved) => !solved).length;
      const recognized = match.tokenCount || match.count;
      const feedback = state.lang === "vi"
        ? `Đã nhận ${recognized} phần, còn ${remaining} phần.`
        : `已识别 ${recognized} 个，还差 ${remaining} 个。`;
      const feedbackNode = $("#feedback");
      if (feedbackNode) {
        feedbackNode.textContent = feedback;
        feedbackNode.className = "feedback good";
      }
    } else {
      finishItem({ autoAdvance: true });
    }
    return;
  }
  if (match?.kind === "progress") {
    setActiveSlotProgress(match);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }
  if (pinyinState.kind === "progress") {
    setActiveSlotProgress(pinyinState);
    setInputFeedback("good", state.lang === "vi" ? "Đúng rồi, tiếp tục gõ." : "拼音正确，继续输入。");
    return;
  }
  if (pinyinState.kind === "extra") {
    $(".answer-slot.active")?.classList.remove("error");
    setInputFeedback("warn", state.lang === "vi" ? "Bạn đã gõ thêm nội dung." : "多输入了内容。");
    return;
  }
  state.wrong.add(`${currentCollection().id}:${state.index}`);
  saveState();
  $("#feedback").textContent = t("bad");
  $("#feedback").className = "feedback bad";
  playTone("error");
}

function canSubmitCurrentAnswer(value) {
  const answer = value || $("#answerInput")?.value || "";
  if (!answer.trim()) return false;
  const itemNow = currentItem();
  const match = globalThis.practiceAnswerRules?.matchContiguousAnswer
    ? globalThis.practiceAnswerRules.matchContiguousAnswer(answer, itemNow.words, state.activeWord, itemNow.pinyin, itemNow.hanzi)
    : null;
  if (match?.kind === "full" || match?.kind === "partial") return true;
  return isMatch(answer, itemNow.pinyin, itemNow.hanzi);
}

function finishItem(options = {}) {
  state.complete = true;
  state.score += 100;
  renderPractice();
  burst();
  playTone("success");
  if (options.autoAdvance) {
    setTimeout(() => speak(), 360);
  }
}

function prevItem() {
  if (state.index <= 0) return;
  $("#burstLayer").innerHTML = "";
  state.index -= 1;
  resetPractice();
  renderPractice();
  setTimeout(speak, 120);
}

function nextItem() {
  const collection = currentCollection();
  $("#burstLayer").innerHTML = "";
  if (state.index >= collection.items.length - 1) {
    state.completed.add(collection.id);
    saveState();
    renderComplete();
    setScreen("complete");
    return;
  }
  state.index += 1;
  resetPractice();
  renderPractice();
  setTimeout(speak, 120);
}

function showAnswer() {
  state.solved = currentItem().words.map(() => true);
  finishItem();
}

function renderComplete() {
  const collection = currentCollection();
  const isVocab = state.module === "vocab";
  screens.complete.innerHTML = `
    <section class="complete-card">
      <span class="trophy">✓</span>
      <h1>${t("completeTitle")}</h1>
      <p>${t("completeSub")}</p>
      <div class="complete-stats">
        <span><strong>${collection.items.length}</strong>${t("itemCount")}</span>
        <span><strong>${state.score}</strong>XP</span>
        <span><strong>${state.wrong.size}</strong>${t("wrong")}</span>
      </div>
      <div class="complete-actions">
        <button class="secondary" data-complete="home" type="button">${isVocab ? (state.lang === "vi" ? "Về bộ từ" : "返回生词本") : t("backHome")}</button>
        ${isVocab ? "" : `<button class="primary" data-complete="next" type="button">${t("nextLesson")}</button>`}
      </div>
    </section>
  `;
}

function chooseChineseVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  preferredChineseVoice = globalThis.speechConfig?.choosePreferredChineseVoice
    ? globalThis.speechConfig.choosePreferredChineseVoice(voices)
    : voices.find((voice) => voice.lang?.toLowerCase().startsWith("zh")) || null;
  return preferredChineseVoice;
}

function speak() {
  const itemNow = currentItem();
  const playSlow = slowSpeech;
  const sources = getPracticeAudioSources({ slow: playSlow });
  playAudioSources(
    sources,
    () => browserSpeakText(itemNow.hanzi, { slow: playSlow, stage: itemNow.stage }),
    { item: itemNow, speed: playSlow ? "slow" : "normal", sources },
  );
  slowSpeech = false;
}

function ensureAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
}

function playTone(kind) {
  ensureAudio();
  if (!audioContext) return;
  const pattern = globalThis.soundEffects?.getTonePattern
    ? globalThis.soundEffects.getTonePattern(kind)
    : { frequencies: [1250], waveform: "square", volume: 0.012, duration: 0.038, step: 0.034, attack: 0.004 };
  const now = audioContext.currentTime;
  pattern.frequencies.forEach((freq, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * pattern.step;
    osc.type = pattern.waveform;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(pattern.volume, start + pattern.attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + pattern.duration);
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.start(start);
    osc.stop(start + pattern.duration + 0.02);
  });
}

function burst() {
  const layer = $("#burstLayer");
  layer.innerHTML = "";
  for (let i = 0; i < 38; i += 1) {
    const part = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 38;
    const dist = 80 + Math.random() * 140;
    part.className = "particle";
    part.style.left = `${window.innerWidth / 2}px`;
    part.style.top = `${window.innerHeight / 2}px`;
    part.style.setProperty("--x", `${Math.cos(angle) * dist}px`);
    part.style.setProperty("--y", `${Math.sin(angle) * dist}px`);
    layer.appendChild(part);
    part.addEventListener("animationend", () => part.remove());
  }
}

function bindEvents() {
  $("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "vi" ? "zh" : "vi";
    saveState();
    renderAll();
  });
  const menuToggleBtn = $("#menuToggleBtn");
  const mobileMenu = $("#mobileMenu");
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }
  $("#mobileBottomNav")?.addEventListener("click", (event) => {
    const bottomNavBtn = event.target.closest("[data-bottom-nav]");
    if (bottomNavBtn) {
      navigatePrimaryTab(bottomNavBtn.dataset.bottomNav);
    }
  });
  $("#backBtn").addEventListener("click", () => {
    if (state.screen === "practice" || state.screen === "complete") {
      renderCourse();
      setScreen("course");
    } else if (state.screen === "course") {
      if (state.module === "hsk" && !state.hskLevelPicker) {
        state.hskLevelPicker = true;
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        renderCourse();
        return;
      }
      setScreen("home");
    }
  });
  $("#app").addEventListener("submit", (event) => {
    const adminLoginForm = event.target.closest("#adminLoginForm");
    if (!adminLoginForm) return;
    event.preventDefault();
    const email = $("#adminLoginEmail")?.value.trim();
    const password = $("#adminLoginPassword")?.value || "";
    state.adminStatus = state.lang === "vi" ? "Đang kiểm tra tài khoản admin..." : "正在验证管理员账户...";
    renderAdmin();
    apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        if (data.user?.role !== "admin") {
          throw new Error(state.lang === "vi" ? "Tài khoản này không có quyền admin." : "该账户没有管理员权限。");
        }
        state.user = data.user;
        state.adminStatus = "";
        saveState();
        renderChrome();
        renderAdmin();
        loadAdminUsers();
      })
      .catch((error) => {
        state.adminStatus = error.message;
        renderAdmin();
      });
  });
  $("#app").addEventListener("click", (event) => {
    // Mobile menu handlers
    const mobileHskBtn = event.target.closest("#mobileHskBtn");
    if (mobileHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileDailyBtn = event.target.closest("#mobileDailyBtn");
    if (mobileDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileVocabBtn = event.target.closest("#mobileVocabBtn");
    if (mobileVocabBtn) {
      state.fromRoadmap = false;
      renderVocab();
      setScreen("vocab");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileSubscriptionsBtn = event.target.closest("#mobileSubscriptionsBtn");
    if (mobileSubscriptionsBtn) {
      state.fromRoadmap = false;
      setScreen("subscriptions");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const mobileAdminBtn = event.target.closest("#mobileAdminBtn");
    if (mobileAdminBtn) {
      if (BACKEND_DISABLED) {
        showToast(BACKEND_DISABLED_MESSAGE);
        $("#mobileMenu")?.classList.remove("active");
        return;
      }
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const loginBtn = event.target.closest("#loginBtn") || event.target.closest("#mobileLoginBtn") || event.target.closest("#sidebarLoginBtn");
    if (loginBtn) {
      if (BACKEND_DISABLED) {
        showToast(BACKEND_DISABLED_MESSAGE);
        $("#mobileMenu")?.classList.remove("active");
        return;
      }
      if (!state.user) {
        showModal("login");
      } else {
        showAccountPanel();
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }
    const registerBtn = event.target.closest("#registerBtn") || event.target.closest("#mobileRegisterBtn") || event.target.closest("#sidebarRegisterBtn");
    if (registerBtn) {
      if (BACKEND_DISABLED) {
        showToast(BACKEND_DISABLED_MESSAGE);
        $("#mobileMenu")?.classList.remove("active");
        return;
      }
      if (state.user) {
        state.user = null;
        saveState();
        renderChrome();
      } else {
        showModal("register");
      }
      $("#mobileMenu")?.classList.remove("active");
      return;
    }

    // Middle Nav Items Click Handlers
    const navHskBtn = event.target.closest("#navHskBtn");
    if (navHskBtn) {
      state.fromRoadmap = false;
      state.module = "hsk";
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const navDailyBtn = event.target.closest("#navDailyBtn");
    if (navDailyBtn) {
      state.fromRoadmap = false;
      state.module = "daily";
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const navVocabBtn = event.target.closest("#navVocabBtn");
    if (navVocabBtn) {
      state.fromRoadmap = false;
      renderVocab();
      setScreen("vocab");
      return;
    }
    const navSubscriptionsBtn = event.target.closest("#navSubscriptionsBtn");
    if (navSubscriptionsBtn) {
      state.fromRoadmap = false;
      setScreen("subscriptions");
      return;
    }
    const navAdminBtn = event.target.closest("#navAdminBtn");
    if (navAdminBtn) {
      if (BACKEND_DISABLED) {
        showToast(BACKEND_DISABLED_MESSAGE);
        return;
      }
      state.fromRoadmap = false;
      renderAdmin();
      setScreen("admin");
      return;
    }

    const adminLoadUsersBtn = event.target.closest("#adminLoadUsersBtn") || event.target.closest("#adminRefreshBtn");
    if (adminLoadUsersBtn) {
      loadAdminUsers();
      return;
    }

    const adminUsersTabBtn = event.target.closest("#adminUsersTabBtn");
    if (adminUsersTabBtn) {
      state.adminTab = "users";
      renderAdmin();
      return;
    }

    const adminSubscriptionsTabBtn = event.target.closest("#adminSubscriptionsTabBtn");
    if (adminSubscriptionsTabBtn) {
      state.adminTab = "subscriptions";
      renderAdmin();
      return;
    }

    const adminSaveUser = event.target.closest(".admin-save-user");
    if (adminSaveUser) {
      const row = adminSaveUser.closest("[data-user-id]");
      const userId = row.dataset.userId;
      const payload = {
        fullName: row.querySelector('[data-field="fullName"]').value.trim(),
        email: row.querySelector('[data-field="email"]').value.trim(),
        role: row.querySelector('[data-field="role"]').value,
        currentLevel: row.querySelector('[data-field="currentLevel"]')?.value || "HSK2",
        isActive: row.querySelector('[data-field="isActive"]').checked,
      };
      state.adminStatus = state.lang === "vi" ? "Đang lưu thay đổi..." : "正在保存更改...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(userId)}`, {
        method: "PATCH",
        headers: {
          "X-Admin-User-Id": state.user?.id || "",
        },
        body: JSON.stringify(payload),
      })
        .then(() => loadAdminUsers())
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    const adminDeleteUser = event.target.closest(".admin-delete-user");
    if (adminDeleteUser) {
      const row = adminDeleteUser.closest("[data-user-id]");
      const email = row.querySelector('[data-field="email"]').value.trim();
      if (!confirm(state.lang === "vi" ? `Xóa tài khoản ${email}?` : `删除帐户 ${email}?`)) return;
      state.adminStatus = state.lang === "vi" ? "Đang xóa người dùng..." : "正在删除用户...";
      renderAdmin();
      apiRequest(`/api/admin/users/${encodeURIComponent(row.dataset.userId)}`, {
        method: "DELETE",
        headers: {
          "X-Admin-User-Id": state.user?.id || "",
        },
      })
        .then(() => loadAdminUsers())
        .catch((error) => {
          state.adminStatus = error.message;
          renderAdmin();
        });
      return;
    }

    if (event.target.closest("#heroStartBtn")) {
      state.module = "hsk";
      state.hskLevelPicker = true;
      renderCourse();
      setScreen("course");
      return;
    }

    // Roadmap Day clicks
    const roadmapDay = event.target.closest("[data-roadmap-day]");
    if (roadmapDay) {
      const lessonId = roadmapDay.dataset.lessonId;
      const themeId = roadmapDay.dataset.themeId;
      state.fromRoadmap = true;
      if (lessonId) {
        startPractice({ lessonId, mode: "translate", hskContentType: "" });
      } else if (themeId) {
        startPractice({ themeId, mode: "translate" });
      }
      return;
    }

    const benefitBtn = event.target.closest("[data-benefit]");
    if (benefitBtn) {
      const benefitType = benefitBtn.dataset.benefit;
      if (benefitType === "communication") {
        state.module = "daily";
      } else {
        state.module = "hsk";
        state.hskLevelPicker = true;
      }
      state.fromRoadmap = false;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const footerNav = event.target.closest("[data-footer-nav]");
    if (footerNav) {
      event.preventDefault();
      const navType = footerNav.dataset.footerNav;
      if (navType === "course") {
        state.module = "hsk";
        state.hskLevelPicker = true;
        state.fromRoadmap = false;
        state.hskPendingLessonId = "";
        state.hskContentType = "";
        state.dailyPendingThemeId = "";
        state.dailyContentType = "";
        renderCourse();
        setScreen("course");
      } else if (navType === "blog") {
        alert(state.lang === "vi" ? "Tính năng Blog đang được phát triển!" : "博客功能正在开发中！");
      }
      return;
    }

    const quickLesson = event.target.closest("[data-quick-lesson]");
    if (quickLesson) {
      startPractice({ lessonId: quickLesson.dataset.quickLesson, mode: "translate", hskContentType: "" });
      return;
    }
    const moduleBtn = event.target.closest("[data-module]");
    if (moduleBtn) {
      state.module = moduleBtn.dataset.module;
      state.hskLevelPicker = state.module === "hsk";
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderCourse();
      setScreen("course");
      return;
    }
    const levelBtn = event.target.closest("[data-level]");
    if (levelBtn) {
      state.level = levelBtn.dataset.level;
      state.hskLevelPicker = false;
      state.hskContentType = "";
      state.hskPendingLessonId = "";
      renderHskCourse();
      return;
    }
    const hskLevelBackBtn = event.target.closest("[data-hsk-level-back]");
    if (hskLevelBackBtn) {
      state.hskLevelPicker = true;
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      renderHskCourse();
      return;
    }
    const hskBackLessonsBtn = event.target.closest("[data-hsk-back-lessons]");
    if (hskBackLessonsBtn) {
      state.hskPendingLessonId = "";
      state.hskContentType = "";
      renderHskCourse();
      return;
    }
    const hskContentTypeBtn = event.target.closest("[data-hsk-content-type]");
    if (hskContentTypeBtn) {
      state.hskContentType = hskContentTypeBtn.dataset.hskContentType;
      if (state.hskPendingLessonId) {
        startPractice({
          lessonId: state.hskPendingLessonId,
          mode: "translate",
          hskContentType: state.hskContentType,
        });
      } else {
        renderHskCourse();
      }
      return;
    }
    const lessonBtn = event.target.closest("[data-lesson]");
    if (lessonBtn) {
      state.hskPendingLessonId = lessonBtn.dataset.lesson;
      state.hskContentType = "";
      renderHskCourse();
      return;
    }
    const themeBtn = event.target.closest("[data-theme]");
    if (themeBtn) {
      state.dailyPendingThemeId = themeBtn.dataset.theme;
      state.dailyContentType = "";
      renderDailyCourse();
      return;
    }

    const practiceCloseBtn = event.target.closest("#practiceCloseBtn");
    if (practiceCloseBtn) {
      showQuitModal();
      return;
    }
    const modeBtn = event.target.closest("[data-mode]");
    if (modeBtn) {
      state.mode = modeBtn.dataset.mode;
      resetPractice();
      renderPractice();
      if (state.mode === "dictation") speak();
      return;
    }
    if (event.target.closest("#prevBtn")) prevItem();
    if (event.target.closest("#playBtn")) speak();
    if (event.target.closest("#slowBtn")) {
      slowSpeech = true;
      speak();
    }
    if (event.target.closest("#answerBtn")) showAnswer();
    if (event.target.closest("#nextBtn")) nextItem();
    if (event.target.closest("#saveBtn")) {
      const hanzi = currentItem().hanzi;
      const btn = event.target.closest("#saveBtn");
      if (state.saved.has(hanzi)) {
        state.saved.delete(hanzi);
        btn.classList.remove("saved");
        btn.innerHTML = `<span>★</span>${t("favorite")}`;
        showToast(state.lang === "vi" ? "Đã hủy lưu từ vựng" : "已取消收藏生词");
      } else {
        state.saved.add(hanzi);
        btn.classList.add("saved");
        btn.innerHTML = `<span>★</span>${state.lang === "vi" ? "Đã lưu" : "已收藏"}`;
        playTone("correct");
        showToast(state.lang === "vi" ? "Đã lưu từ vựng thành công" : "生词收藏成功");
      }
      saveState();
    }
    const completeBtn = event.target.closest("[data-complete]");
    if (completeBtn) {
      if (completeBtn.dataset.complete === "home") {
        if (state.module === "vocab") {
          renderVocab();
          setScreen("vocab");
        } else if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else {
          renderHome();
          setScreen("home");
        }
      } else {
        if (state.fromRoadmap) {
          renderRoadmap();
          setScreen("roadmap");
        } else {
          renderCourse();
          setScreen("course");
        }
      }
      return;
    }

    // Redesigned HSK course click handlers
    const hskContinueBtn = event.target.closest("#hskContinueBtn");
    if (hskContinueBtn) {
      const incompleteLesson = hskLevels[state.level].find(l => !state.completed.has(l.id)) || hskLevels[state.level][0];
      if (incompleteLesson) {
        state.hskPendingLessonId = incompleteLesson.id;
        state.hskContentType = "";
        renderHskCourse();
      }
      return;
    }

    const hskFilterBtn = event.target.closest("[data-hsk-filter]");
    if (hskFilterBtn) {
      state.hskFilterTab = hskFilterBtn.dataset.hskFilter;
      document.querySelectorAll("[data-hsk-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.hskFilter === state.hskFilterTab);
      });
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
      return;
    }

    // Redesigned daily themes click handlers
    const dailyStartBtn = event.target.closest("#dailyStartBtn");
    if (dailyStartBtn) {
      const firstTheme = dailyThemes.find(t => !state.completed.has(t.id)) || dailyThemes[0];
      if (firstTheme) {
        state.dailyPendingThemeId = firstTheme.id;
        state.dailyContentType = "";
        renderDailyCourse();
      }
      return;
    }

    const dailyBackThemesBtn = event.target.closest("[data-daily-back-themes]");
    if (dailyBackThemesBtn) {
      state.dailyPendingThemeId = "";
      state.dailyContentType = "";
      renderDailyCourse();
      return;
    }

    const dailyContentTypeBtn = event.target.closest("[data-daily-content-type]");
    if (dailyContentTypeBtn) {
      state.dailyContentType = dailyContentTypeBtn.dataset.dailyContentType;
      if (state.dailyPendingThemeId) {
        startPractice({
          themeId: state.dailyPendingThemeId,
          mode: "translate",
          dailyContentType: state.dailyContentType,
        });
      } else {
        renderDailyCourse();
      }
      return;
    }

    const dailyFilterBtn = event.target.closest("[data-daily-filter]");
    if (dailyFilterBtn) {
      state.dailyFilterTab = dailyFilterBtn.dataset.dailyFilter;
      document.querySelectorAll("[data-daily-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.dailyFilter === state.dailyFilterTab);
      });
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
      return;
    }

    const vocabDeleteBtn = event.target.closest(".vocab-delete-btn");
    if (vocabDeleteBtn) {
      const card = vocabDeleteBtn.closest("[data-vocab-hanzi]");
      if (card) {
        const hanzi = card.dataset.vocabHanzi;
        state.saved.delete(hanzi);
        saveState();
        renderVocab();
        showToast(state.lang === "vi" ? "Đã xóa khỏi bộ từ" : "已从生词本删除");
      }
      return;
    }

    const vocabFilterBtn = event.target.closest("[data-vocab-filter]");
    if (vocabFilterBtn) {
      state.vocabFilterTab = vocabFilterBtn.dataset.vocabFilter;
      document.querySelectorAll("[data-vocab-filter]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.vocabFilter === state.vocabFilterTab);
      });
      const gridContainer = $(".vocab-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderVocabListHTML();
      }
      const visibleCount = $(".vocab-visible-count strong");
      if (visibleCount) {
        visibleCount.textContent = getFilteredVocabItems().length;
      }
      const visibleType = $(".vocab-visible-count span");
      if (visibleType) {
        visibleType.textContent = state.vocabFilterTab === "all"
          ? (state.lang === "vi" ? "mục đã lưu" : "个已保存项")
          : state.vocabFilterTab === "phrase"
            ? (state.lang === "vi" ? "cụm từ" : "短语")
            : (state.lang === "vi" ? "từ vựng" : "个词");
      }
      return;
    }

    const vocabReviewBtn = event.target.closest("[data-vocab-review]");
    if (vocabReviewBtn) {
      const items = getFilteredVocabItems();
      if (items.length === 0) {
        showToast(state.lang === "vi" ? "Chưa có từ vựng để ôn tập" : "暂无可复习词汇");
        return;
      }
      const firstHanzi = items[0].hanzi;
      const savedItems = [...state.saved].map(hanzi => findItemByHanzi(hanzi));
      const index = Math.max(0, savedItems.findIndex(item => item.hanzi === firstHanzi));
      state.fromRoadmap = false;
      startPractice({ module: "vocab", index: index, mode: state.mode || "translate" });
      return;
    }

    const vocabSpeakBtn = event.target.closest(".vocab-speak-btn");
    if (vocabSpeakBtn) {
      const card = vocabSpeakBtn.closest("[data-vocab-hanzi]");
      if (card) {
        const hanzi = card.dataset.vocabHanzi;
        speakText(hanzi);
      }
      return;
    }

    const vocabCard = event.target.closest(".vocab-item-card");
    if (vocabCard && !vocabDeleteBtn && !vocabSpeakBtn) {
      const hanzi = vocabCard.dataset.vocabHanzi;
      const items = [...state.saved].map(h => findItemByHanzi(h));
      const index = items.findIndex(item => item.hanzi === hanzi);
      if (index !== -1) {
        state.fromRoadmap = false;
        startPractice({ module: "vocab", index: index, mode: state.mode || "translate" });
      }
      return;
    }
  });
  $("#app").addEventListener("keydown", (event) => {
    if (event.target.id === "answerInput") {
      if (event.key.length === 1 || event.key === "Backspace") playTone("key");
      if (event.key === "Enter") {
        event.preventDefault();
        submitAnswer(event.target.value);
        return;
      }
      if (event.key === " ") {
        const value = event.target.value;
        if (canSubmitCurrentAnswer(value)) {
          event.preventDefault();
          submitAnswer(value);
        }
      }
    }
  });
  $("#app").addEventListener("input", (event) => {
    if (event.target.id === "answerInput") {
      handleLiveAnswerInput(event.target.value);
    }
    if (event.target.id === "hskSearchInput") {
      state.hskSearchQuery = event.target.value;
      const listContainer = $(".hsk-lessons-list");
      if (listContainer) {
        listContainer.innerHTML = renderHskLessonListHTML();
      }
    }
    if (event.target.id === "dailySearchInput") {
      state.dailySearchQuery = event.target.value;
      const gridContainer = $(".daily-theme-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderDailyThemesListHTML();
      }
    }
    if (event.target.id === "vocabSearchInput") {
      state.vocabSearchQuery = event.target.value;
      const gridContainer = $(".vocab-grid");
      if (gridContainer) {
        gridContainer.innerHTML = renderVocabListHTML();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target?.id === "answerInput") return;
    if (state.screen === "practice" && state.complete && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      nextItem();
    }
  });
}

function renderAll() {
  renderChrome();
  renderHome();
  if (state.screen === "course") renderCourse();
  if (state.screen === "practice") renderPractice();
  if (state.screen === "complete") renderComplete();
  if (state.screen === "admin") renderAdmin();
  if (state.screen === "vocab") renderVocab();
}

function init() {
  console.info(VIETNAMESE_QA_HOOK);
  bindEvents();
  renderAll();
  if (window.location.pathname === "/admin") {
    renderAdmin();
    setScreen("admin");
    if (isAdminUser()) {
      loadAdminUsers();
    }
  } else {
    setScreen("home");
  }
}

init();
