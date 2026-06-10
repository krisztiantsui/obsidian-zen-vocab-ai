import {
    App, ItemView, Plugin, Setting, TFile, normalizePath,
    PluginSettingTab, MarkdownRenderer, setIcon, addIcon,
    Modal, WorkspaceLeaf, Notice, requestUrl, MarkdownView, Editor
} from 'obsidian';

const VIEW_TYPE = "zen-vocab-ai-view";

// ─── SVG Icons ───────────────────────────────────────────────
const LOTUS_POD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
  <g>
    <g transform="translate(100,100) rotate(0)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(30)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(60)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(90)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(120)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(150)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(180)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(210)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(240)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(270)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(300)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
    <g transform="translate(100,100) rotate(330)"><path d="M0,0 C-13,-29 -26,-43 -21,-67 C-13,-79 -3,-82 0,-79 C4,-82 14,-79 21,-67 C26,-43 13,-29 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="5"/></g>
  </g>
  <g>
    <g transform="translate(100,100) rotate(15)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(60)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(105)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(150)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(195)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(240)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(285)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
    <g transform="translate(100,100) rotate(330)"><path d="M0,0 C-9,-21 -19,-32 -15,-49 C-9,-57 -2,-60 0,-58 C3,-60 10,-57 15,-49 C19,-32 9,-21 0,0 z" fill="none" stroke="var(--vocab-accent-color, currentColor)" stroke-width="4"/></g>
  </g>
  <ellipse cx="100" cy="100" rx="46" ry="42" fill="var(--vocab-primary-color, currentColor)" stroke="none"/>
  <circle cx="100" cy="100" r="7" fill="var(--background-primary)"/>
  <circle cx="126" cy="100" r="6" fill="var(--background-primary)"/>
  <circle cx="118.4" cy="81.6" r="6" fill="var(--background-primary)"/>
  <circle cx="100" cy="74" r="6" fill="var(--background-primary)"/>
  <circle cx="81.6" cy="81.6" r="6" fill="var(--background-primary)"/>
  <circle cx="74" cy="100" r="6" fill="var(--background-primary)"/>
  <circle cx="81.6" cy="118.4" r="6" fill="var(--background-primary)"/>
  <circle cx="100" cy="126" r="6" fill="var(--background-primary)"/>
  <circle cx="118.4" cy="118.4" r="6" fill="var(--background-primary)"/>
</svg>`;

const AI_BOOK_ICON = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  <path d="M12 6v7"/>
  <path d="M9 9h6"/>
</svg>`;

// ─── Settings ────────────────────────────────────────────────
interface ZenVocabAISettings {
    // Vocab bank settings (from ZenVocab)
    storagePath: string;
    sentenceStoragePath: string;
    theme: string;
    fontSize: number;
    themeColors: Record<string, { accent: string; secondary: string }>;
    customThemes: Array<{ id: string; name: string; accent: string; secondary: string; baseTheme: string }>;
    // AI settings (from AI Parser)
    apiKey: string;
    baseUrl: string;
    model: string;
    wordCount: number;
    systemPrompt: string;
    transSystemPrompt: string;
    promptVersion: number;
}

const DEFAULT_SETTINGS: ZenVocabAISettings = {
    storagePath: "Vocab/Vocab_Bank.md",
    sentenceStoragePath: "Vocab/Sentence_Bank.md",
    theme: "frog",
    fontSize: 13,
    themeColors: {
        'frog': { accent: '#ff6b9c', secondary: '#92f7e6' },
        'pond': { accent: '#ff7da7', secondary: '#8be7d5' },
        'dusk': { accent: '#f78db8', secondary: '#7adfcb' }
    },
    customThemes: [],
    apiKey: '',
    baseUrl: 'https://api.deepseek.com',
    model: 'deepseek-chat',
    wordCount: 3,
    systemPrompt: `你是精通认知心理学与记忆术的英语词汇导师。你的唯一使命：让每个单词"长"在学生脑子里，想忘都忘不掉。\n\n【🛑 绝对禁止】不要输出问候语/过渡句/思考过程/客套话。必须直接从"### 💎 核心词汇解析：[word]"开始输出纯净 Markdown！\n\n——\n\n### 💎 核心词汇解析：[word]\n\n## 1. 快速认知\n- **音标：** /IPA/\n- **核心含义：** [最精炼的中文释义，1-2个词]\n- **词性：** [词性]\n- **难度感知：** [这个词让你想到什么？陌生/熟悉？抽象/具体？]\n\n## 2. 词源考古 | 追根溯源\n\n从词根层面拆解这个词的"DNA"，一旦理解了构词逻辑，拼写和含义自然贯通。\n\n- **词根拆解：** [前缀 = X（含义），词根 = Y（含义），后缀 = Z（含义）]\n- **字面意思：** [三个部分拼起来的原始含义]\n- **演变故事：** [这个词在历史上是怎么来的？用 2-3 句话讲一个有趣的词源故事。比如：它来自拉丁语 XXX，原意是 YYY，后来因为 ZZZ 变成了现在的意思。故事越有画面感越好。]\n- **同根家族：** 列出至少 3 个同词根的词，附带中文释义，让学习者一次掌握一组词：\n  - [同根词1] = [中文]\n  - [同根词2] = [中文]\n  - [同根词3] = [中文]\n  - [同根词4] = [中文]\n\n## 3. 多通道记忆工坊 | 选一个最适合你的方法\n\n> 同一个词，提供 4 种不同的记忆路径。不同的人适合不同的方法，你也可以同时用多种方法加深印象。\n\n### 🎭 方法A：荒诞故事法 (Story)\n_适合：喜欢听故事、想象力丰富的人_\n\n编一个极度夸张、荒诞、离奇的小故事，把单词的音、形、义全部编织进去。**故事越离谱，记忆越牢固。** 大脑对反常事件的记忆强度是普通信息的 6-8 倍。\n\n> 📖 **故事：** [写一个 3-5 句的微型故事。要求：① 包含一个具体的角色（可以是动物/物品/人物） ② 有一个荒诞的反转或夸张的情节 ③ 把单词的发音和含义都融进故事里 ④ 让人看完会心一笑或感到惊讶]\n\n### 🎨 方法B：视觉爆破法 (Visual)\n_适合：视觉型学习者、喜欢画画或空间想象的人_\n\n把抽象词汇变成一幅你"能看见"的动态画面。大脑处理图像的速度是文字的 60000 倍。\n\n> 🖼️ **核心画面：** [用 2-3 句话描绘一幅极度夸张的视觉画面。要求：① 有具体的颜色、形状、大小 ② 画面是动态的而非静止的 ③ 夸张到现实中不可能发生 ④ 把单词的含义用视觉隐喻表达出来]\n> \n> 🏰 **记忆宫殿定位：** [把这个画面"放"到一个你熟悉的真实地点。比如："把这幅画面放在你家门口——每次推门，你都会看到……"]\n\n### 🎵 方法C：声音锚定法 (Auditory)\n_适合：听觉型学习者、对声音敏感的人_\n\n利用中文发音和英语发音之间的桥梁，创建一条牢不可破的声音链路。\n\n> 🔊 **谐音桥：** [找一个最接近的中文词语/短句来模拟英语发音。越荒诞越好——「ambulance」→「俺不能死」这种级别的创意。]\n> \n> 🎤 **节奏口诀：** [把单词编成一句押韵的口诀或顺口溜，加上节奏感。例："optimistic 乐观的，opti-mis-tic 哒哒哒，看什么都美美的"]\n> \n> 🎧 **发音拆解：** [把单词按音节切开，每段配一个你已经认识的简单词或拟声词：ad-ven-ture → ad(广告) + ven(温) + ture(车) → 广告里温暖的车=冒险]\n\n### 🏃 方法D：身体编码法 (Kinesthetic)\n_适合：坐不住的人、动手型学习者_\n\n用身体动作、手势或空间位置来编码这个词。身体参与的记忆提取线索最多。\n\n> ✋ **动作锚：** [设计一个具体的、可重复的手势或身体动作。描述清楚怎么做，以及动作和词义之间的关联逻辑]\n> \n> 🗣️ **自言自语句：** [一句你可以对自己说的话，在特定场景下使用。比如每次打开冰箱时说："The fridge is utterly empty. I am devastated."]\n\n## 4. 实战操练\n\n### 🎬 沉浸式例句\n\n- **生活场景：** [在一个常见的生活场景中自然使用这个词]  →  [中文翻译]\n  - 🎯 这个句子适合在 ___ 的情况下说\n- **学术/职场场景：** [在正式语境中使用这个词]  →  [中文翻译]\n  - 🎯 这个句子适合在 ___ 的情况下说\n\n### 🔗 高频搭配网\n\n不要孤立地记单词，要记"谁和谁经常一起出现"。列出至少 3 个高频搭配：\n\n- **[搭配1]** = [中文] — 常用于 ___ 场景\n- **[搭配2]** = [中文] — 常用于 ___ 场景\n- **[搭配3]** = [中文] — 常用于 ___ 场景\n\n### ⚔️ 近义词决斗场\n\n选 2 个最接近的近义词进行对比，帮助精确理解每个词的"个性"。\n\n- **[目标词] vs [近义词A]：** [核心区别用一句话说清]\n  - [目标词] 侧重 ___，例：___\n  - [近义词A] 侧重 ___，例：___\n- **[目标词] vs [近义词B]：** [核心区别用一句话说清]\n  - [目标词] 侧重 ___，例：___\n  - [近义词B] 侧重 ___，例：___\n\n> 💡 **一句话秒记：** 如果只能记住一句话，那就是——[用一句中文，把音、形、义、画面全部浓缩进去，像广告语一样精炼]\n> \n> 🧠 **3秒自测（别偷看上面！）：** [一道填空或造句题，强制学习者主动回忆。如："如果你想说一个人从不吃肉，他是 ___。" 或 "请用这个词描述你今天遇到的一个人/一件事：___"]`,
    transSystemPrompt: `你是资深语言学教授 + 记忆术专家，擅长让学生不仅"看懂"句子，更能"内化"并主动使用。\n\n【🛑 绝对禁止】不要输出问候语/过渡句/思考过程/客套话。必须直接从"### 🌍 【句子翻译】"开始输出纯净 Markdown！\n\n要求：\n1. 自动识别输入语言（中文/英文）\n2. **原文：** 后直接写出原句，不要再套一层加粗\n3. 不要输出占位符括号，直接输出实际内容\n\n### 🌍 【句子翻译】\n- **原文：** [原句内容]\n- **[若输入英文]**\n  - 🇨🇳 **地道意译：** [符合中文习惯的优美翻译]\n  - 🪵 **直译思维：** [保留英语语序的直译，暴露中英思维差异]\n- **[若输入中文]**\n  - 🗣️ **日常沟通：** [自然口语表达]\n  - 🎓 **高级进阶：** [高分/学术地道表达]\n\n### 🎬 **场景化记忆**\n- **使用场景：** [这句话会在什么情境下说？对谁说？什么语气？]\n- **情绪标签：** [正式/随意/幽默/严肃/温暖/讽刺…]\n- **画面钩子：** [用一句话描绘一个你能"看见"的生动场景，让句子有血有肉]\n\n### ⏳ 【时态与语态】\n- **时态判定：** [核心时态语态]\n- **使用逻辑：** [为什么这里用这个时态？背后思维是什么？]\n- **对比感知：** [如果换成另一个时态，意思会怎么变？]\n\n### 🧩 【语法结构拆解】\n- **句子主干：** 主语 + 谓语 + 宾语（用 [] 标注各部分）\n- **修饰链条：** [像剥洋葱一样逐层拆解修饰关系]\n- **特殊结构：** [倒装/虚拟/强调等 — 用"公式"表达]\n\n### 🔗 【核心词汇与地道搭配】\n1. **[词组1]**：(词性) 中文意思\n   - 🔄 **同义替换：** [高级/口语同义词]\n   - 🧠 **记忆锚点：** [拆解/联想/画面 — 怎么记住这个搭配？]\n\n### 🏗️ **句型内化工坊**\n- **万能框架：** [提炼可复用句型，用 ___ 标记可替换位置]\n- **变形练习：** [同一句型换 2 个完全不同场景的造句]\n- **口语速记版：** [如果只能记住一个口语版本，是什么？]\n\n> 💡 **中英思维切换点：** [这句话暴露了中英文思维的哪个关键差异？记住这个差异，以后这类句子都会了]\n> 🧠 **3秒自测：** [遮住原文，只看中文翻译，你能还原出英文吗？试试！]`,
    promptVersion: 2,
};

// ─── Calendar Modal ──────────────────────────────────────────
class VocabCalendarModal extends Modal {
    view: ZenVocabAIView;
    // Modal-level state: which year we're viewing (for month/week drill-down)
    modalYear: number;
    // Modal-level mode: the current drill-down depth
    // 'year' = year picker → 'month' = month grid → 'week' = week list
    modalMode: string;

    constructor(app: App, view: ZenVocabAIView) {
        super(app);
        this.view = view;
        this.modalYear = parseInt(view.filterYear || (window as any).moment().format('YYYY'));
        this.modalMode = view.filterType === 'week' ? 'week' :
                         view.filterType === 'month' ? 'month' : 'year';
    }

    async onOpen() {
        this.contentEl.empty();
        this.contentEl.addClass('vocab-calendar-modal');
        this.view.allVocabsForCalendar = await this.view.plugin.loadVocabs(this.view.currentMode);
        this.renderContent();
    }

    onClose() { this.contentEl.empty(); }

    /** Returns a content area after the header, clearing any previous body */
    bodyEl(): HTMLElement {
        const old = this.contentEl.querySelector('.vocab-calendar-body');
        if (old) old.remove();
        const div = this.contentEl.createDiv({ cls: "vocab-calendar-body" });
        return div;
    }

    /** Build counts keyed by month (YYYY-MM) and by date (YYYY-MM-DD) */
    getCounts() {
        const byMonth: Record<string, number> = {};
        const byDate: Record<string, number> = {};
        const vocabs = this.view.allVocabsForCalendar || [];
        vocabs.forEach((v: any) => {
            if (v.date && v.date !== "早期记录") {
                const monthKey = v.date.substring(0, 7);
                byMonth[monthKey] = (byMonth[monthKey] || 0) + 1;
                byDate[v.date] = (byDate[v.date] || 0) + 1;
            }
        });
        return { byMonth, byDate };
    }

    heatLevel(count: number, thresholds: number[]) {
        for (let i = 0; i < thresholds.length; i++) {
            if (count <= thresholds[i]) return `level-${i}`;
        }
        return `level-${thresholds.length}`;
    }

    renderContent() {
        this.contentEl.empty();

        const header = this.contentEl.createDiv({ cls: "vocab-modal-header" });
        header.createEl("span", { text: "时空罗盘", cls: "vocab-modal-title" });

        const typeSelect = header.createEl("select", { cls: "vocab-filter-select modal-filter-select" });
        typeSelect.add(new Option("全部 | All", "none"));
        typeSelect.add(new Option("已标记 | Marked", "marked"));
        typeSelect.add(new Option("按日 | Day", "date"));
        typeSelect.add(new Option("按周 | Week", "week"));
        typeSelect.add(new Option("按月 | Month", "month"));
        typeSelect.add(new Option("按年 | Year", "year"));
        typeSelect.value = this.modalMode;

        typeSelect.onchange = (e: Event) => {
            const val = (e.target as HTMLSelectElement).value;
            if (val === 'none' || val === 'marked') {
                this.view.filterType = val;
                this.view.render();
                this.close();
                return;
            }
            this.modalMode = val;
            this.view.filterType = val;
            this.view.renderReviewContent();
            this.renderContent();
        };

        if (this.modalMode === 'year') this.renderYearPicker();
        else if (this.modalMode === 'month') this.renderMonthGrid();
        else if (this.modalMode === 'week') this.renderWeekList();
        else if (this.modalMode === 'date') {
            const body = this.bodyEl();
            this.renderCalendarGrid(body);
        }
    }

    // ── Year Picker: grid of whole years ──
    renderYearPicker() {
        const { byMonth } = this.getCounts();
        const byYear: Record<string, number> = {};
        Object.entries(byMonth).forEach(([monthKey, count]) => {
            const y = monthKey.substring(0, 4);
            byYear[y] = (byYear[y] || 0) + count;
        });

        // Figure out the year range: from earliest data to this year + 2
        const currentYear = (window as any).moment().year();
        let minYear = currentYear, maxYear = currentYear;
        Object.keys(byYear).forEach(y => {
            const yn = parseInt(y);
            if (yn < minYear) minYear = yn;
            if (yn > maxYear) maxYear = yn;
        });
        minYear = Math.min(minYear, currentYear - 1);
        maxYear = Math.max(maxYear, currentYear + 2);

        const todayYear = String(currentYear);

        const body = this.bodyEl();

        const grid = body.createDiv({ cls: "vocab-year-month-grid" });
        for (let y = minYear; y <= maxYear; y++) {
            const yearStr = String(y);
            const count = byYear[yearStr] || 0;
            const cell = grid.createDiv({ cls: "vocab-calendar-cell vocab-year-cell" });

            cell.addClass(this.heatLevel(count, [0, 3, 10, 25]));
            if (yearStr === todayYear) cell.addClass('is-today');
            if (y === this.modalYear) cell.addClass('is-selected');

            cell.createSpan({ text: yearStr, cls: "vocab-calendar-date-text" });
            if (count > 0) {
                const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
                dots.createDiv({ cls: "vocab-calendar-dot" });
            }

            cell.onclick = () => {
                this.modalYear = y;
                this.modalMode = 'month';
                this.view.filterYear = yearStr;
                this.view.filterType = 'month';
                this.view.renderReviewContent();
                this.renderContent();
            };
        }
    }

    // ── Month Grid: 4×3 months of modalYear ──
    renderMonthGrid() {
        const { byMonth } = this.getCounts();
        const currentYear = this.modalYear;
        const todayMonth = (window as any).moment().format('YYYY-MM');

        const body = this.bodyEl();

        // Navigation header
        const calHeader = body.createDiv({ cls: "vocab-calendar-header" });
        const prevBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(prevBtn, "chevron-left");
        prevBtn.onclick = () => { this.modalYear--; this.renderMonthGrid(); };
        calHeader.createSpan({ text: `${currentYear} 年`, cls: "vocab-calendar-title-inline" });
        const nextBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(nextBtn, "chevron-right");
        nextBtn.onclick = () => { this.modalYear++; this.renderMonthGrid(); };

        // Back to year picker
        const backBtn = calHeader.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "返回年份" } });
        setIcon(backBtn, "arrow-up");
        backBtn.onclick = () => { this.modalMode = 'year'; this.renderContent(); };

        const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        const grid = body.createDiv({ cls: "vocab-year-month-grid" });

        for (let m = 0; m < 12; m++) {
            const monthKey = `${currentYear}-${String(m + 1).padStart(2, '0')}`;
            const count = byMonth[monthKey] || 0;
            const cell = grid.createDiv({ cls: "vocab-calendar-cell vocab-month-cell" });

            cell.addClass(this.heatLevel(count, [0, 3, 8, 15]));
            if (monthKey === todayMonth) cell.addClass('is-today');

            cell.createSpan({ text: monthNames[m], cls: "vocab-calendar-date-text" });
            if (count > 0) {
                const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
                dots.createDiv({ cls: "vocab-calendar-dot" });
            }

            cell.onclick = () => {
                this.view.filterMonth = monthKey;
                this.view.filterType = 'month';
                this.view.renderReviewContent();
                this.close();
            };
        }
    }

    // ── Week List: all ISO weeks of modalYear ──
    renderWeekList() {
        const { byDate } = this.getCounts();
        const currentYear = this.modalYear;
        const todayStr = (window as any).moment().format('YYYY-MM-DD');

        const body = this.bodyEl();

        // Navigation header
        const calHeader = body.createDiv({ cls: "vocab-calendar-header" });
        const prevBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(prevBtn, "chevron-left");
        prevBtn.onclick = () => { this.modalYear--; this.renderWeekList(); };
        calHeader.createSpan({ text: `${currentYear} 年 · 周`, cls: "vocab-calendar-title-inline" });
        const nextBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(nextBtn, "chevron-right");
        nextBtn.onclick = () => { this.modalYear++; this.renderWeekList(); };

        // Back to year picker
        const backBtn = calHeader.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "返回年份" } });
        setIcon(backBtn, "arrow-up");
        backBtn.onclick = () => { this.modalMode = 'year'; this.renderContent(); };

        // Generate all ISO weeks in the year
        const weekList = body.createDiv({ cls: "vocab-week-list" });
        const startOfYear = (window as any).moment(`${currentYear}-01-01`);
        // Start from first ISO week that touches this year
        let cursor = startOfYear.clone().startOf('isoWeek');
        const endOfYear = (window as any).moment(`${currentYear}-12-31`);
        const endWeek = endOfYear.clone().endOf('isoWeek');

        while (cursor.isSameOrBefore(endWeek)) {
            const weekStart = cursor.format('YYYY-MM-DD');
            const weekEnd = cursor.clone().endOf('isoWeek').format('YYYY-MM-DD');
            const weekNum = cursor.isoWeek();
            const weekYear = cursor.isoWeekYear();
            // Only show weeks that belong to the selected year (or touch it)
            if (weekYear === currentYear || (cursor.year() === currentYear)) {
                // Count vocab entries in this week
                let weekCount = 0;
                let d = cursor.clone();
                while (d.isSameOrBefore(cursor.clone().endOf('isoWeek'))) {
                    const ds = d.format('YYYY-MM-DD');
                    weekCount += byDate[ds] || 0;
                    d.add(1, 'day');
                }

                const row = weekList.createDiv({ cls: "vocab-week-row" });
                if (weekCount > 0) row.addClass(`level-${Math.min(Math.ceil(weekCount / 2), 4)}`);

                // Week number
                const numEl = row.createDiv({ cls: "vocab-week-num" });
                numEl.createSpan({ text: `W${weekNum}`, cls: "vocab-week-num-text" });

                // Date range
                const rangeEl = row.createDiv({ cls: "vocab-week-range" });
                rangeEl.createSpan({ text: `${weekStart.substring(5)} — ${weekEnd.substring(5)}`, cls: "vocab-week-range-text" });

                // Count badge
                const countEl = row.createDiv({ cls: "vocab-week-count" });
                countEl.createSpan({ text: weekCount > 0 ? `${weekCount}` : '', cls: "vocab-week-count-text" });

                // Check if today falls in this week
                const todayM = (window as any).moment(todayStr);
                if (todayM.isBetween(weekStart, weekEnd, null, '[]')) {
                    row.addClass('is-today-week');
                }

                row.onclick = () => {
                    this.view.filterWeek = weekStart;
                    this.view.filterType = 'week';
                    this.view.renderReviewContent();
                    this.close();
                };
            }
            cursor.add(1, 'week');
        }
    }

    // ─── Legacy: monthly calendar grid (for Day mode) ─────
    renderCalendarGrid(container: HTMLElement) {
        const isWeekMode = this.view.filterType === 'week';
        const isMonthMode = this.view.filterType === 'month';
        const isDateMode = this.view.filterType === 'date';

        let refDate: any;
        if (isWeekMode) refDate = (window as any).moment(this.view.filterWeek || undefined);
        else if (isMonthMode) refDate = (window as any).moment((this.view.filterMonth || (window as any).moment().format('YYYY-MM')) + '-01');
        else refDate = (window as any).moment(this.view.filterDate || undefined);

        const calendarHeader = container.createDiv({ cls: "vocab-calendar-header" });
        const prevBtn = calendarHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(prevBtn, "chevron-left");
        prevBtn.onclick = () => {
            refDate.subtract(1, 'month');
            if (isWeekMode) this.view.filterWeek = refDate.clone().startOf('isoWeek').format('YYYY-MM-DD');
            else if (isMonthMode) this.view.filterMonth = refDate.format('YYYY-MM');
            else this.view.filterDate = refDate.format('YYYY-MM-DD');
            this.view.filterType = isWeekMode ? 'week' : isMonthMode ? 'month' : 'date';
            this.view.renderReviewContent();
            this.renderContent();
        };

        const title = isWeekMode
            ? `${refDate.format('YYYY 年 MM 月')} · 第${refDate.isoWeek()}周`
            : refDate.format('YYYY 年 MM 月');
        calendarHeader.createSpan({ text: title, cls: "vocab-calendar-title-inline" });

        const nextBtn = calendarHeader.createEl("button", { cls: "vocab-btn-icon" });
        setIcon(nextBtn, "chevron-right");
        nextBtn.onclick = () => {
            refDate.add(1, 'month');
            if (isWeekMode) this.view.filterWeek = refDate.clone().startOf('isoWeek').format('YYYY-MM-DD');
            else if (isMonthMode) this.view.filterMonth = refDate.format('YYYY-MM');
            else this.view.filterDate = refDate.format('YYYY-MM-DD');
            this.view.filterType = isWeekMode ? 'week' : isMonthMode ? 'month' : 'date';
            this.view.renderReviewContent();
            this.renderContent();
        };

        const gridWrapper = container.createDiv({ cls: "vocab-calendar-grid-wrapper" });
        const weekHeader = gridWrapper.createDiv({ cls: "vocab-calendar-week-header" });
        ['日', '一', '二', '三', '四', '五', '六'].forEach(day => {
            weekHeader.createSpan({ text: day, cls: "vocab-calendar-week-day" });
        });

        const grid = gridWrapper.createDiv({ cls: "vocab-calendar-grid" });
        const { byDate } = this.getCounts();
        const counts = byDate;

        const startOfMonth = refDate.clone().startOf('month');
        const daysInMonth = startOfMonth.daysInMonth();
        const startDayOfWeek = startOfMonth.day();
        const todayStr = (window as any).moment().format('YYYY-MM-DD');

        for (let i = 0; i < startDayOfWeek; i++) {
            grid.createDiv({ cls: "vocab-calendar-cell is-empty" });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const current = startOfMonth.clone().date(i);
            const dateStr = current.format('YYYY-MM-DD');
            const count = counts[dateStr] || 0;
            const cell = grid.createDiv({ cls: "vocab-calendar-cell" });

            if (count === 0) cell.addClass('level-0');
            else if (count <= 2) cell.addClass('level-1');
            else if (count <= 5) cell.addClass('level-2');
            else if (count <= 10) cell.addClass('level-3');
            else cell.addClass('level-4');

            if (dateStr === todayStr) cell.addClass('is-today');

            cell.createSpan({ text: i.toString(), cls: "vocab-calendar-date-text" });
            if (count > 0) {
                const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
                dots.createDiv({ cls: "vocab-calendar-dot" });
            }

            cell.onclick = () => {
                this.view.filterDate = dateStr;
                this.view.filterType = 'date';
                this.view.renderReviewContent();
                this.close();
            };
        }
    }
}

// ─── Main View ───────────────────────────────────────────────
class ZenVocabAIView extends ItemView {
    plugin: ZenVocabAIPlugin;

    // ── Unified state ──
    currentMode: 'word' | 'sentence' = 'word';
    isAllExpanded = false;
    isWordOnlyMode = false;
    isFocusMode = false;
    filterType = 'none';
    filterDate: string;
    filterMonth: string;
    filterYear: string;
    filterWeek: string;
    searchQuery = "";
    allVocabsForCalendar: any[] = [];

    // AI state
    aiResults: string[] = [];
    isAiBusy = false;

    // DOM refs
    smartTextarea?: HTMLTextAreaElement;
    aiResultsContainer?: HTMLElement;

    constructor(leaf: WorkspaceLeaf, plugin: ZenVocabAIPlugin) {
        super(leaf);
        this.plugin = plugin;
        const today = (window as any).moment();
        this.filterDate = today.format('YYYY-MM-DD');
        this.filterMonth = today.format('YYYY-MM');
        this.filterYear = today.format('YYYY');
        this.filterWeek = today.clone().startOf('isoWeek').format('YYYY-MM-DD');

        this.registerEvent(
            (this.plugin.app.workspace as any).on('vocab-settings-updated', () => this.render())
        );
    }

    getViewType() { return VIEW_TYPE; }
    getDisplayText() { return "忘·言 AI | ZenVocab AI"; }
    getIcon() { return "lotus-pod-icon"; }

    async onOpen() { await this.render(); }

    // ─── Main Render ────────────────────────────────────
    async render() {
        const container = this.contentEl;
        container.empty();
        container.addClass('vocab-view-container');

        if (this.isWordOnlyMode) container.addClass('vocab-word-only-mode');
        else container.removeClass('vocab-word-only-mode');
        if (this.isFocusMode) container.addClass('vocab-focus-mode');
        else container.removeClass('vocab-focus-mode');

        container.style.setProperty('--vocab-base-size', `${this.plugin.settings.fontSize}px`);

        // Unified single-page content
        await this.renderReviewContent(container);
    }

    // ─── Review Tab Content ─────────────────────────────
    async renderReviewContent(container?: HTMLElement) {
        const parent = container || this.contentEl;
        // Remove any existing content below the tab bar
        const existing = parent.querySelector('.vocab-review-content, .vocab-ai-content');
        if (existing) existing.remove();

        const reviewContent = parent.createDiv({ cls: "vocab-review-content" });

        // Input area
        const inputArea = reviewContent.createDiv({ cls: "vocab-input-section" });

        // ── Brand header with unified mode toggle ──
        const brandHeader = inputArea.createDiv({ cls: "vocab-brand-header" });

        const titleGroup = brandHeader.createDiv();
        titleGroup.setAttribute("style", "display: flex; align-items: center; gap: 10px; flex-shrink: 0;");

        const iconDiv = titleGroup.createSpan({ cls: "vocab-brand-icon" });
        setIcon(iconDiv, "lotus-pod-icon");

        const textSpan = titleGroup.createSpan({ text: "忘·言 | ZenVocab AI", cls: "vocab-brand-text" });

        // ── Compact mode pill toggle ──
        const modePills = brandHeader.createDiv({ cls: "vocab-mode-pills" });
        const modes = [
            { value: 'word', label: 'Word', title: '手动录入词汇' },
            { value: 'sentence', label: 'Sentence', title: '手动录入句子' },
        ] as const;
        modes.forEach(m => {
            const pill = modePills.createDiv({
                cls: `vocab-mode-pill ${this.currentMode === m.value ? 'is-active' : ''}`,
                attr: { 'aria-label': m.title }
            });
            pill.createSpan({ text: m.label, cls: 'vocab-mode-pill-label' });
            pill.onclick = () => {
                if (this.currentMode !== m.value) {
                    this.currentMode = m.value;
                    this.aiResults = [];
                    this.searchQuery = "";
                    this.render();
                }
            };
        });

        // ── Smart unified textarea ──
        this.smartTextarea = inputArea.createEl("textarea", {
            attr: { placeholder: this.currentMode === 'sentence'
                ? "拾取英语句子、或粘贴段落以 AI 翻译..."
                : "拾取字词、或粘贴段落以 AI 解析..." },
            cls: "vocab-smart-textarea"
        }) as HTMLTextAreaElement;

        const smartTextEl = this.smartTextarea;

        // ── Smart paste handler ──
        smartTextEl.addEventListener('paste', (e: Event) => {
            const ce = e as ClipboardEvent;
            const clipboardData = ce.clipboardData || (window as any).clipboardData;
            if (!clipboardData) return;
            const paste = clipboardData.getData('text');
            if (!paste.includes('\n') && paste.length < 100) return;

            // Multi-line or long paste: try to extract structured data
            if (this.currentMode === 'sentence') {
                if (paste.includes('【句子翻译】')) {
                    e.preventDefault();
                    const lines = paste.split('\n');
                    const origLine = lines.find((l: string) => l.includes('**原文：**'));
                    if (origLine) {
                        smartTextEl.value = origLine.replace(/.*?\*\*原文：\*\*\s*/, '').replace(/\[填入用户输入的原文\]/g, '').trim();
                    }
                }
                return;
            }

            // Word mode: try to extract word from pasted card
            if (paste.includes('\n')) {
                const lines = paste.split('\n');
                const wordLineIndex = lines.findIndex((l: string) => /(单词[：:]|【单词】|目标词\/词组[：:]?|【目标词】)/.test(l));
                if (wordLineIndex !== -1) {
                    e.preventDefault();
                    let rawWord = lines[wordLineIndex].replace(/.*?(单词[：:]|【单词】|目标词\/词组[：:]?|【目标词】)\s*/, '');
                    smartTextEl.value = rawWord.replace(/[*_`]/g, '').trim();
                }
            }
        });

        // ── Unified action bar (search + Parse button) ──
        const actionBar = inputArea.createDiv({ cls: "vocab-input-action-bar" });

        const searchWrapper = actionBar.createDiv({ cls: "vocab-search-wrapper" });
        const searchIconEl = searchWrapper.createDiv({ cls: "vocab-search-icon" });
        setIcon(searchIconEl, "search");

        const searchInput = searchWrapper.createEl("input", {
            attr: { type: "text", placeholder: this.currentMode === 'sentence' ? "检索句子/释义..." : "检索单词/释义..." },
            value: this.searchQuery,
            cls: "vocab-filter-input vocab-search-input"
        });

        // AI Parse button
        const aiBtn = actionBar.createEl("button", {
            text: this.currentMode === 'sentence' ? "Translate" : "Parse",
            cls: "vocab-btn-save vocab-unified-ai-btn"
        });

        // ── AI Parse button handler ──
        aiBtn.onclick = async () => {
            const text = smartTextEl.value.trim();
            if (!text || this.isAiBusy) return;
            this.isAiBusy = true;
            aiBtn.style.opacity = "0.6";
            aiBtn.style.pointerEvents = "none";

            if (this.aiResultsContainer) {
                this.aiResultsContainer.empty();
                this.aiResultsContainer.style.display = "none";
            }
            this.aiResults = [];

            if (this.currentMode === 'word') {
                aiBtn.innerText = "Extracting...";
                try {
                    const words = await this.plugin.extractKeywords(text);
                    let successCount = 0;
                    for (let i = 0; i < words.length; i++) {
                        aiBtn.innerText = `${words[i]} (${i + 1}/${words.length})`;
                        try {
                            const cardMd = await this.plugin.fetchCardParsing(words[i], text);
                            this.aiResults.push(cardMd);
                            this.appendAIResultCard(cardMd);
                            successCount++;
                        } catch { /* skip failed word */ }
                    }
                    if (successCount === 0 && words.length > 0) {
                        new Notice("解析失败，请检查 API 设置");
                    } else if (successCount < words.length) {
                        new Notice(`已解析 ${successCount}/${words.length} 个词汇`);
                    }
                } catch { new Notice("关键词提取失败"); }
                finally {
                    aiBtn.innerText = "Parse";
                    this.isAiBusy = false;
                    aiBtn.style.opacity = "1";
                    aiBtn.style.pointerEvents = "auto";
                }
            } else {
                aiBtn.innerText = "Translating...";
                try {
                    const cardMd = await this.plugin.fetchTranslation(text);
                    this.aiResults.push(cardMd);
                    this.appendAIResultCard(cardMd);
                } catch { new Notice("翻译解析失败"); }
                finally {
                    aiBtn.innerText = "Translate";
                    this.isAiBusy = false;
                    aiBtn.style.opacity = "1";
                    aiBtn.style.pointerEvents = "auto";
                }
            }
        };

        // ── Inline AI results container ──
        this.aiResultsContainer = inputArea.createDiv({ cls: "vocab-ai-results-section" });
        this.aiResultsContainer.style.display = "none";

        reviewContent.createEl("hr", { cls: "vocab-divider vocab-divider-top" });

        // Vocab list section
        this.allVocabsForCalendar = await this.plugin.loadVocabs(this.currentMode);
        const vocabs = this.allVocabsForCalendar;

        // Toolbar
        const headerEl = reviewContent.createDiv({ cls: "vocab-top-bar" });
        headerEl.createEl("span", { text: "温故知新", cls: "vocab-list-title" });
        const toolGroup = headerEl.createDiv({ cls: "vocab-tool-group" });

        const focusBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "沉浸模式 | Focus" } });
        setIcon(focusBtn, this.isFocusMode ? "minimize" : "maximize");
        focusBtn.onclick = () => { this.isFocusMode = !this.isFocusMode; this.render(); };

        const eyeBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "纯享模式 | Word-Only" } });
        setIcon(eyeBtn, this.isWordOnlyMode ? "eye-off" : "eye");
        eyeBtn.onclick = () => { this.isWordOnlyMode = !this.isWordOnlyMode; this.render(); };

        const expandBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "展卷/收拢" } });
        setIcon(expandBtn, "chevrons-up-down");
        expandBtn.onclick = () => {
            this.isAllExpanded = !this.isAllExpanded;
            reviewContent.querySelectorAll('.vocab-meaning').forEach(m => {
                if (this.isAllExpanded) m.classList.remove('is-hidden');
                else m.classList.add('is-hidden');
            });
        };

        const calendarBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "时空罗盘 | Archive Panel" } });
        setIcon(calendarBtn, "calendar-days");
        if (this.filterType !== 'none') calendarBtn.style.color = "var(--vocab-accent-color, magenta)";
        calendarBtn.onclick = () => { new VocabCalendarModal(this.plugin.app, this).open(); };

        const refreshBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "拂尘" } });
        setIcon(refreshBtn, "refresh-cw");
        refreshBtn.onclick = async () => {
            this.searchQuery = "";
            refreshBtn.classList.add("is-spinning");
            setTimeout(async () => { await this.render(); }, 300);
        };

        // Apply filters
        let filteredVocabs = vocabs;
        if (this.filterType !== 'none') {
            filteredVocabs = vocabs.filter((v: any) => {
                if (this.filterType === 'marked') return v.isMarked;
                if (v.date === "早期记录") return false;
                if (this.filterType === 'date') return v.date === this.filterDate;
                if (this.filterType === 'week') {
                    const weekStart = (window as any).moment(this.filterWeek).startOf('isoWeek').format('YYYY-MM-DD');
                    const weekEnd = (window as any).moment(this.filterWeek).endOf('isoWeek').format('YYYY-MM-DD');
                    return v.date >= weekStart && v.date <= weekEnd;
                }
                if (this.filterType === 'month') return v.date.startsWith(this.filterMonth);
                if (this.filterType === 'year') return v.date.startsWith(this.filterYear);
                return true;
            });
        }

        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            filteredVocabs = filteredVocabs.filter((v: any) =>
                v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q)
            );
        }

        // Context header
        let contextTitle = this.currentMode === 'sentence' ? "全部句子" : "全部词汇";
        let emptyMessage = this.currentMode === 'sentence' ? "句库空空，静待落笔。" : "词库空空，静待落笔。";

        if (this.filterType === 'marked') {
            contextTitle = "重点标记";
            emptyMessage = this.currentMode === 'sentence' ? "暂无星标句子，去列表中点亮星星吧。" : "暂无星标词汇，去列表中点亮星星吧。";
        } else if (this.filterType === 'date') {
            contextTitle = `${this.filterDate} 归档`;
            emptyMessage = "这一天尚未落笔。";
        } else if (this.filterType === 'week') {
            const ws = (window as any).moment(this.filterWeek).startOf('isoWeek').format('MM/DD');
            const we = (window as any).moment(this.filterWeek).endOf('isoWeek').format('MM/DD');
            contextTitle = `${ws} - ${we} 周归档`;
            emptyMessage = "本周暂无记录。";
        } else if (this.filterType === 'month') {
            contextTitle = `${this.filterMonth} 月度归档`;
            emptyMessage = "本月暂无记录。";
        } else if (this.filterType === 'year') {
            contextTitle = `${this.filterYear} 年度纵览`;
            emptyMessage = "本年暂无记录。";
        }

        if (this.searchQuery) contextTitle = `检索: "${this.searchQuery}"`;

        const contextHeader = reviewContent.createDiv({ cls: "vocab-context-header" });
        contextHeader.createSpan({ text: contextTitle, cls: "vocab-context-title" });

        const countBadge = contextHeader.createSpan({
            text: `共 ${filteredVocabs.length} ${this.currentMode === 'sentence' ? '句' : '词'}`,
            cls: "vocab-context-count"
        });
        if (this.filterType !== 'none' || this.searchQuery !== '') {
            countBadge.addClass("is-active-filter");
            countBadge.setAttribute("aria-label", "点击清除过滤");
            countBadge.onclick = () => {
                this.filterType = 'none';
                this.searchQuery = '';
                this.render();
            };
        }

        const listEl = reviewContent.createDiv({ cls: "vocab-list" });

        // Client-side search
        searchInput.addEventListener("input", () => {
            this.searchQuery = searchInput.value.trim();
            const q = this.searchQuery.toLowerCase();
            const cards = listEl.querySelectorAll('.vocab-card');
            let visibleCount = 0;

            cards.forEach(card => {
                const searchText = (card as HTMLElement).getAttribute('data-search') || "";
                if (searchText.includes(q)) {
                    (card as HTMLElement).style.display = '';
                    visibleCount++;
                } else {
                    (card as HTMLElement).style.display = 'none';
                }
            });

            const headerTitle = reviewContent.querySelector('.vocab-context-title') as HTMLElement;
            const headerCount = reviewContent.querySelector('.vocab-context-count') as HTMLElement;
            if (headerTitle && headerCount) {
                if (this.searchQuery) {
                    headerTitle.innerText = `检索: "${this.searchQuery}"`;
                    headerCount.addClass("is-active-filter");
                } else {
                    let baseTitle = this.currentMode === 'sentence' ? "全部句子" : "全部词汇";
                    if (this.filterType === 'marked') baseTitle = "重点标记";
                    else if (this.filterType === 'date') baseTitle = `${this.filterDate} 归档`;
                    else if (this.filterType === 'week') { const ws = (window as any).moment(this.filterWeek).startOf('isoWeek').format('MM/DD'); const we = (window as any).moment(this.filterWeek).endOf('isoWeek').format('MM/DD'); baseTitle = `${ws} - ${we} 周归档`; }
                    else if (this.filterType === 'month') baseTitle = `${this.filterMonth} 月度归档`;
                    else if (this.filterType === 'year') baseTitle = `${this.filterYear} 年度纵览`;
                    headerTitle.innerText = baseTitle;
                    if (this.filterType === 'none') headerCount.removeClass("is-active-filter");
                }
                headerCount.innerText = `共 ${cards.length > 0 ? visibleCount : 0} ${this.currentMode === 'sentence' ? '句' : '词'}`;
            }

            let emptyMsg = listEl.querySelector('.vocab-search-empty') as HTMLElement;
            if (visibleCount === 0 && cards.length > 0) {
                if (!emptyMsg) {
                    emptyMsg = listEl.createEl("p", {
                        text: this.currentMode === 'sentence' ? "未能检索到相关句子..." : "未能检索到相关词汇...",
                        cls: "vocab-empty vocab-search-empty"
                    });
                }
                emptyMsg.style.display = 'block';
            } else if (emptyMsg) {
                emptyMsg.style.display = 'none';
            }
        });

        if (filteredVocabs.length === 0) {
            listEl.createEl("p", { text: emptyMessage, cls: "vocab-empty" });
            return;
        }

        // Vocab cards
        filteredVocabs.forEach((item: any) => {
            const card = listEl.createDiv({ cls: "vocab-card" });
            card.setAttribute('data-search', `${item.word} ${item.meaning}`.toLowerCase());

            const cardHeader = card.createDiv({ cls: "vocab-card-header" });
            const titleArea = cardHeader.createDiv({ cls: "vocab-title-area" });

            const { phonetic, shortDef, pos, etymology } = this.extractCardPreview(item.meaning, this.currentMode);

            titleArea.createDiv({ text: item.word, cls: "vocab-word" });
            if (pos || phonetic) {
                const metaRow = titleArea.createDiv({ cls: "vocab-meta-row" });
                if (pos) metaRow.createSpan({ text: pos, cls: "vocab-pos-tag" });
                if (phonetic) metaRow.createSpan({ text: phonetic, cls: "vocab-phonetic-front" });
            }
            if (etymology) titleArea.createDiv({ text: etymology, cls: "vocab-etymology-preview" });
            if (shortDef) titleArea.createDiv({ text: shortDef, cls: "vocab-shortdef-front" });

            const actionArea = cardHeader.createDiv({ cls: "vocab-action-area" });
            const badgeGroup = actionArea.createDiv({ cls: "vocab-badge-group" });
            if (item.date !== "早期记录") badgeGroup.createDiv({ text: item.date, cls: "vocab-date-badge" });

            const btnGroup = actionArea.createDiv({ cls: "vocab-btn-group" });

            // TTS button
            const speakBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-speak", attr: { "aria-label": "聆听发音" } });
            setIcon(speakBtn, "volume-2");
            speakBtn.onclick = (e: Event) => {
                e.stopPropagation();
                const synth = window.speechSynthesis;
                if (!synth) return;
                synth.cancel();
                const utterance = new SpeechSynthesisUtterance(item.word);
                utterance.lang = 'en-US';
                utterance.rate = 0.85;
                utterance.pitch = 1.0;
                synth.speak(utterance);
                speakBtn.style.transform = "scale(1.2)";
                speakBtn.style.color = "var(--vocab-accent-color, magenta)";
                setTimeout(() => { speakBtn.style.transform = ""; speakBtn.style.color = ""; }, 200);
            };

            // Mark button
            const markBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-mark", attr: { "aria-label": item.isMarked ? "取消标记" : "标记重点" } });
            setIcon(markBtn, "star");
            if (item.isMarked) markBtn.addClass("is-marked");
            markBtn.onclick = async (e: Event) => {
                e.stopPropagation();
                await this.plugin.toggleWordMark(item.id, this.currentMode);
                item.isMarked = !item.isMarked;
                if (item.isMarked) {
                    markBtn.classList.add("is-marked");
                    markBtn.setAttribute("aria-label", "取消标记");
                } else {
                    markBtn.classList.remove("is-marked");
                    markBtn.setAttribute("aria-label", "标记重点");
                    if (this.filterType === 'marked') {
                        card.style.opacity = '0.4';
                        card.style.filter = 'grayscale(100%)';
                    }
                }
            };

            // Delete button
            const deleteBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-delete", attr: { "aria-label": this.currentMode === 'sentence' ? "删除句子" : "斩词" } });
            setIcon(deleteBtn, "trash-2");
            deleteBtn.onclick = async (e: Event) => {
                e.stopPropagation();
                const currentScroll = listEl.scrollTop;
                await this.plugin.deleteWord(item.id, this.currentMode);
                await this.render();
                setTimeout(() => {
                    const newListEl = reviewContent.querySelector('.vocab-list');
                    if (newListEl) newListEl.scrollTop = currentScroll;
                }, 15);
            };

            const meaningDiv = card.createDiv({ cls: "vocab-meaning" });
            if (!this.isAllExpanded) meaningDiv.classList.add('is-hidden');
            MarkdownRenderer.renderMarkdown(item.meaning, meaningDiv, '', this.plugin);
            card.onclick = () => {
                const sel = window.getSelection();
                if (sel && sel.type === 'Range') return;
                meaningDiv.classList.toggle('is-hidden');
            };
        });
    }

    // ─── Inline AI Results ─────────────────────────────
    copyToClipboard(text: string) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => new Notice("已复制"));
        } else {
            // Fallback for non-secure contexts
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            new Notice("已复制");
        }
    }

    appendAIResultCard(cardMd: string) {
        if (!this.aiResultsContainer) return;
        this.aiResultsContainer.style.display = "block";

        // Clear empty state if present
        const empty = this.aiResultsContainer.querySelector('.vocab-empty');
        if (empty) empty.remove();

        const card = this.aiResultsContainer.createDiv({ cls: "vocab-card" });
        MarkdownRenderer.renderMarkdown(cardMd, card, '', this.plugin);

        const actionArea = card.createDiv({ cls: "vocab-ai-action-row" });

        const insBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "📥 存入笔记" });
        insBtn.style.cssText = "flex: 1; min-width: 80px;";
        insBtn.onclick = () => this.plugin.insertAtCursor(cardMd);

        const cpBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "📋 复制" });
        cpBtn.style.cssText = "flex: 1; min-width: 80px;";
        cpBtn.onclick = () => this.copyToClipboard(cardMd);

        const bankBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "📚 存入词库" });
        bankBtn.style.cssText = "flex: 1; min-width: 80px;";
        bankBtn.onclick = async () => {
            const { word, cleanMd } = this.extractWordAndCleanCard(cardMd);
            await this.plugin.appendWord(word, cleanMd, this.currentMode);
            bankBtn.innerText = "✅ 已存入";
            bankBtn.style.color = "var(--vocab-accent-color, magenta)";
            new Notice(`"${word}" 已存入${this.currentMode === 'sentence' ? '句库' : '词库'}`);
        };

        card.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // Robust word extraction + conversational-prefix stripping
    extractWordAndCleanCard(cardMd: string): { word: string; cleanMd: string } {
        const lines = cardMd.split('\n');
        let word = "";

        // Validators: reject section headers like 【基本信息】, [Section], etc.
        const isSectionLabel = (w: string) =>
            /[【\[\]]/.test(w) || /^(基本信息|构词法解析|常用搭配|专业领域解析|发音与拼写|含义与语境|易混淆词辨析|固定搭配|语法结构拆解|核心词汇与地道搭配|时态与语态|句子翻译|翻译思维与仿写)$/.test(w);

        // Strategy 1: Find heading with emoji patterns (### 💎/📖/🔤/🌍 **...word...**)
        for (const line of lines) {
            // Match: ### [emoji] **anything：word** or ### [emoji] **word**
            let m = line.match(/^###\s+[^\s]{1,6}\s+\*?\*?(?:.*?[：:]\s*)?\*?\*?(.+?)\*?\*?\s*$/);
            if (m) {
                const candidate = m[1].replace(/[*_`#]/g, '').trim();
                if (candidate && candidate.length > 1 && candidate.length < 80 && !isSectionLabel(candidate)) {
                    word = candidate;
                    break;
                }
            }
            // Match: ### [emoji] word (without bold)
            m = line.match(/^###\s+[^\s]{1,6}\s+(.+?)$/);
            if (m && !word) {
                const candidate = m[1].replace(/[*_`#]/g, '').trim();
                if (candidate && candidate.length < 80 && !isSectionLabel(candidate)) {
                    word = candidate;
                    break;
                }
            }
            // Match: **单词：** word or **目标词/词组：** word (with optional bullet)
            m = line.match(/^[-*]?\s*\*\*(?:单词|目标词(?:\/词组)?|核心词汇?)\s*[：:]\s*\*?\*?\s*(.+?)\s*\*?\*?\s*$/);
            if (m) {
                const candidate = m[1].replace(/[*_`#]/g, '').trim();
                if (candidate && candidate.length < 80 && !isSectionLabel(candidate)) {
                    word = candidate;
                    break;
                }
            }
            // Match: - **原文：** **[sentence]** (Trans AI card)
            m = line.match(/[-*]?\s*\*\*原文[：:]\*\*\s*\*?\*?\s*(.+?)\s*\*?\*?\s*$/);
            if (m) {
                const candidate = m[1].replace(/[*_`#]/g, '').trim();
                if (candidate && candidate.length > 1 && candidate.length < 500 && !isSectionLabel(candidate)) {
                    word = candidate;
                    break;
                }
            }
        }

        // Strategy 2: If still no word, grab first bold phrase (skip common labels)
        if (!word) {
            const skipLabels = /^(原文|单词|目标词|核心词汇|音标|释义|翻译|句子翻译|时态|语法|发音|核心含义)/;
            for (const line of lines) {
                // Match **bold** or *italic* word markers
                const m = line.match(/\*\*(.+?)\*\*/) || line.match(/(?:^|[^*])\*([^*]+?)\*(?:[^*]|$)/);
                if (m) {
                    let candidate = m[1].trim();
                    candidate = candidate.replace(/[*_`#]/g, '').trim();
                    if (candidate.length > 1 && candidate.length < 200 && !skipLabels.test(candidate)) {
                        word = candidate;
                        break;
                    }
                }
            }
        }

        // Strategy 3: Fallback to first meaningful line
        if (!word) {
            const firstLine = lines.find(l => {
                const t = l.trim();
                return t.length > 0 && !t.startsWith('```') && t.length < 200
                    && !/^(好的|没问题|作为|我们开始)/.test(t);
            });
            word = firstLine
                ? firstLine.replace(/^#+\s*/, '').replace(/[*_`]/g, '').trim().substring(0, 80)
                : "未命名";
        }

        // Strip conversational prefix: remove everything before the first heading or bold marker
        let cleanMd = cardMd;
        const headingIdx = lines.findIndex((l: string) => /^#{1,4}\s/.test(l));
        if (headingIdx > 0) {
            // There's conversational text before the first heading — strip it
            cleanMd = lines.slice(headingIdx).join('\n');
        } else {
            // No heading found; try to find first bold marker
            const boldIdx = lines.findIndex((l: string) => /\*\*[^*]+\*\*/.test(l) && l.trim().length > 0);
            if (boldIdx > 0 && boldIdx < 3) {
                cleanMd = lines.slice(boldIdx).join('\n');
            }
        }
        // Also remove common conversational starter patterns
        cleanMd = cleanMd.replace(/^(好的[，,]?\s*没问题[！!]\s*)?作为.*?(导师|助手|AI|语言助手)[，,]?\s*.*?\n/gim, '');
        cleanMd = cleanMd.replace(/^我们开始吧[！!]?\s*\n*/gm, '');
        cleanMd = cleanMd.replace(/^(当然[！!，,]\s*)?我很?高兴(?:为您?|地)?(?:解析|分析|帮助).*?\n/gim, '');
        cleanMd = cleanMd.replace(/^以下是对?[「「]?.+?[」」]?\s*的?(?:详细)?解析[：:]?\s*\n*/gm, '');
        cleanMd = cleanMd.replace(/^让我(?:们|来)(?:一起)?(?:看看|分析|解析).*?\n/gim, '');

        return { word, cleanMd: cleanMd.trim() };
    }

    // ─── Card preview extraction (phonetic + shortDef from raw meaning) ──
    extractCardPreview(meaning: string, mode: 'word' | 'sentence'): { phonetic: string; shortDef: string; pos: string; etymology: string } {
        let phonetic = "", shortDef = "", pos = "", etymology = "";
        const lines = meaning.split('\n');
        const debugPrefix = '[ZenVocab extractCardPreview]';

        // Helper: strip markdown noise from a line
        const clean = (s: string) => s.replace(/[*_`#]/g, '').replace(/^[-*]\s+/, '').trim();

        if (mode === 'sentence') {
            // Sentence: extract translation preview
            const patterns = [
                /(?:地道意译|日常沟通|高级进阶|Casual|Advanced|意译|翻译)[^：:]*[：:]\s*/,
            ];
            for (const line of lines) {
                for (const pat of patterns) {
                    if (pat.test(line)) {
                        const candidate = clean(line.replace(pat, ''));
                        if (candidate && candidate.length > 1) {
                            shortDef = candidate;
                            break;
                        }
                    }
                }
                if (shortDef) break;
            }
            if (!shortDef) {
                // Fallback: first meaningful line after 原文
                let foundYuanwen = false;
                for (const line of lines) {
                    if (/原文[：:]/.test(line)) { foundYuanwen = true; continue; }
                    if (foundYuanwen) {
                        const c = clean(line);
                        if (c.length > 2 && c.length < 200) { shortDef = c; break; }
                    }
                }
            }
            if (!shortDef) {
                // Last resort: first non-empty, non-heading line
                for (const line of lines) {
                    const c = clean(line);
                    if (c && !/^[#🌍⏳🧩🔗>]/.test(line.trim()) && c.length > 2) {
                        shortDef = c.substring(0, 120);
                        break;
                    }
                }
            }
        } else {
            // Word mode: extract phonetic + short definition
            for (let i = 0; i < lines.length; i++) {
                const rawLine = lines[i].trim();
                const line = clean(rawLine);

                // Skip empty, heading, structural lines
                if (!line || /^(###|💎|📖|🔤)/.test(rawLine)) continue;
                if (/^核心词汇解析[：:]/i.test(line)) continue;

                // --- Phonetic extraction ---
                if (!phonetic) {
                    // Pattern 1: **音标：** /gneiss/ or - 发音：/gneiss/ or Pronunciation: /gneiss/
                    let m = rawLine.match(/(?:音标|发音|Phonetics?|Pronunciation|IPA)\s*[*_]*[：:]\s*[*_]*\s*(.+)/i);
                    if (m) { phonetic = clean(m[1]); continue; }

                    // Pattern 2: GB/UK 英/.../ | us/US 美/.../  (dictionary-style)
                    m = rawLine.match(/(?:GB|UK|BrE)\s*(?:英)?\s*\/.+?\/\s*(?:\|\s*)?(?:(?:us|US|AmE)\s*(?:美)?\s*\/.+?\/)?/i);
                    if (m) { phonetic = m[0]; continue; }

                    // Pattern 3: Bare IPA with slashes — /ɡnaɪs/ or /'nævigert/
                    m = rawLine.match(/^[*-]?\s*\/[^/]+\/\s*$/);
                    if (m) { phonetic = clean(m[0]); continue; }

                    // Pattern 4: Any line dominated by IPA /.../ content
                    m = rawLine.match(/\/[^/]{2,40}\//);
                    if (m && rawLine.length < 80 && !/[📖🌍💎🔤]/.test(rawLine)) {
                        // Strip common non-phonetic prefixes when capturing whole line
                        phonetic = clean(rawLine).replace(/^(?:UK|US|GB|BrE|AmE)\s*/i, '');
                        continue;
                    }
                }

                // --- Short definition extraction ---
                if (!shortDef) {
                    // Pattern 1: **核心含义：** xxx or **释义：** xxx or **词义：** xxx
                    let m = rawLine.match(/(?:核心含义|核心词义|词义|释义|意思|中文释义|字义|定义|Definition)\s*[*_]*[：:]\s*(.+)/i);
                    if (m) { shortDef = clean(m[1]); continue; }

                    // Pattern 2: （词性） 含义  e.g. **（名词）** 片麻岩
                    m = line.match(/^[（(][^)）]+[)）]\s*(.+)/);
                    if (m) { shortDef = m[1].trim(); continue; }

                    // Pattern 2b: [词性] 含义  e.g. [adj.] 具体的
                    m = line.match(/^\[[^\]]+\]\s*(.+)/);
                    if (m) { shortDef = m[1].trim(); continue; }

                    // Pattern 3: (词性) 含义 without fullwidth
                    m = line.match(/^\([^)]+\)\s*(.+)/);
                    if (m) { shortDef = m[1].trim(); continue; }

                    // Pattern 3b: English POS prefix  e.g. "adj. 具体的" or "adjective. 具体的"
                    m = line.match(/^(?:adj\.?|adjective|noun\.?|verb\.?|adv\.?|adverb|prep\.?|preposition|conj\.?|conjunction|pron\.?|pronoun|int\.?|interjection)\s*[.．。，,]\s*(.+)/i);
                    if (m) { shortDef = m[1].trim(); continue; }

                    // Pattern 4: Line after phonetic that looks like a definition
                    if (phonetic && i > 0) {
                        // Check current and previous 2 lines for phonetic context
                        let prevHasPhonetic = false;
                        for (let j = Math.max(0, i - 2); j < i; j++) {
                            const prev = clean(lines[j] || "");
                            if (/\/[^/]+\//.test(prev) || /音标/.test(prev) || /发音/.test(prev) || /GB|UK|US|IPA/.test(prev)) {
                                prevHasPhonetic = true;
                                break;
                            }
                        }
                        if (prevHasPhonetic && line.length > 1 && line.length < 200
                            && !/^(音标|发音|拼写|单词结构|词源|固定搭配|例句|常见搭配|易混淆|导师|核心词汇|总结|复习)/.test(line)) {
                            shortDef = line.substring(0, 150);
                            continue;
                        }
                    }
                }

                // --- POS (词性) extraction ---
                if (!pos) {
                    let m = rawLine.match(/(?:词性|POS|Part of Speech)\s*[*_]*[：:]\s*(.+)/i);
                    if (m) { pos = clean(m[1]); continue; }
                }

                // --- Etymology (词源) extraction ---
                if (!etymology) {
                    let m = rawLine.match(/(?:字面意思|词根拆解|单词结构)\s*[*_]*[：:]\s*(.+)/i);
                    if (m) { etymology = clean(m[1]).substring(0, 80); continue; }
                }

                // Stop if we found all four
                if (phonetic && shortDef && pos && etymology) break;
            }

            // Fallback for shortDef: grab first substantive line
            if (!shortDef) {
                for (const rawLine of lines) {
                    const line = clean(rawLine);
                    const trimmedRaw = rawLine.trim();
                    if (line.length > 2 && line.length < 200
                        && !/^(###|音标|发音|拼写|单词结构|词源|固定搭配|例句|常见搭配|导师|核心词汇解析|总结|复习)/.test(line)
                        && !/^[📖🌍💎🔤#]/.test(trimmedRaw)
                        && !/^💎|^📖|^🔤|^🌍/.test(line)
                        && !/^\/[^/]+\/$/.test(line)
                        && !/^[（(][^)）]+[)）]$/.test(line)) {
                        shortDef = line.substring(0, 120);
                        break;
                    }
                }
            }
        }

        if (!phonetic || !shortDef) {
            console.log(`${debugPrefix} mode=${mode} phonetic="${phonetic}" shortDef="${shortDef}" pos="${pos}" etymology="${etymology}"`,
                '| meaning preview:', meaning.substring(0, 300));
        }

        return { phonetic, shortDef, pos, etymology };
    }

}

// ─── Main Plugin ─────────────────────────────────────────────
export default class ZenVocabAIPlugin extends Plugin {
    settings!: ZenVocabAISettings;

    async onload() {
        addIcon('lotus-pod-icon', LOTUS_POD_ICON);
        await this.loadSettings();
        this.applyTheme();

        this.addSettingTab(new ZenVocabSettingTab(this.app, this));
        this.registerView(VIEW_TYPE, (leaf) => new ZenVocabAIView(leaf, this));
        this.addRibbonIcon('lotus-pod-icon', '忘·言 AI | ZenVocab AI', () => { this.activateView(); });
    }

    onunload() {
        document.body.classList.remove('vocab-theme-modern', 'vocab-theme-zen', 'vocab-theme-dao', 'vocab-theme-frog', 'vocab-theme-custom', 'vocab-theme-pond', 'vocab-theme-dusk');
        document.body.style.removeProperty('--vocab-accent-color');
        document.body.style.removeProperty('--vocab-primary-color');
        document.body.style.removeProperty('--vocab-brand-gradient');
    }

    // ─── Theme ──────────────────────────────────────────
    applyTheme() {
        document.body.classList.remove('vocab-theme-modern', 'vocab-theme-zen', 'vocab-theme-dao', 'vocab-theme-frog', 'vocab-theme-custom', 'vocab-theme-pond', 'vocab-theme-dusk');

        const isCustom = this.settings.theme.startsWith('custom-');
        let accent = '#ff6b9c';
        let primary = '#92f7e6';
        let gradient = 'linear-gradient(135deg, #ff6b9c, #92f7e6)';
        let themeSkeletonClass = 'vocab-theme-frog';

        if (isCustom) {
            const themeData = this.settings.customThemes.find(t => t.id === this.settings.theme);
            if (themeData) {
                themeSkeletonClass = `vocab-theme-${themeData.baseTheme || 'frog'}`;
                accent = themeData.accent || accent;
                primary = themeData.secondary || primary;
                gradient = `linear-gradient(135deg, ${primary}, ${accent})`;
            }
        } else {
            themeSkeletonClass = `vocab-theme-${this.settings.theme}`;
            const themeColors = this.settings.themeColors || DEFAULT_SETTINGS.themeColors;
            const currentConfig = themeColors[this.settings.theme] || themeColors['frog'];
            accent = currentConfig.accent;
            primary = currentConfig.secondary;
            gradient = `linear-gradient(135deg, ${primary}, ${accent})`;
        }

        document.body.classList.add(themeSkeletonClass);
        document.body.style.setProperty('--vocab-accent-color', accent);
        document.body.style.setProperty('--vocab-primary-color', primary);
        document.body.style.setProperty('--vocab-brand-gradient', gradient);
    }

    // ─── View Management ────────────────────────────────
    async activateView() {
        const { workspace } = this.app;
        let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
        if (!leaf) {
            leaf = workspace.getRightLeaf(false)!;
            await leaf.setViewState({ type: VIEW_TYPE, active: true });
        }
        workspace.revealLeaf(leaf);
    }

    // ─── Insert at Cursor ───────────────────────────────
    insertAtCursor(content: string) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (view && view.editor) {
            const cursor = view.editor.getCursor();
            view.editor.replaceRange(`\n${content}\n`, cursor);
            new Notice("✅ 已同步到笔记");
        } else {
            // Fallback: try to find any open markdown leaf
            const leaves = this.app.workspace.getLeavesOfType('markdown');
            const activeLeaf = leaves.find(l => l.view instanceof MarkdownView);
            if (activeLeaf && activeLeaf.view instanceof MarkdownView && activeLeaf.view.editor) {
                const ed = activeLeaf.view.editor;
                ed.replaceRange(`\n${content}\n`, ed.getCursor());
                new Notice("✅ 已同步到笔记");
            } else {
                new Notice("⚠️ 请先打开并聚焦一个笔记面板");
            }
        }
    }

    // ─── Vocab Bank CRUD ────────────────────────────────
    async appendWord(word: string, meaning: string, mode = 'word') {
        const path = normalizePath(mode === 'sentence' ? (this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md") : this.settings.storagePath);
        const folder = path.split('/').slice(0, -1).join('/');
        if (folder && !this.app.vault.getAbstractFileByPath(folder)) await this.app.vault.createFolder(folder);
        let file = this.app.vault.getAbstractFileByPath(path);

        const safeWord = word.replace(/\n/g, ' ');
        const safeMeaning = meaning.replace(/\\/g, '\\\\').replace(/\n/g, '');
        const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
        const content = `- ${safeWord} :: ${safeMeaning} :: ${(window as any).moment().format('YYYY-MM-DD')} :: 0 :: ${id}\n`;
        const title = mode === 'sentence' ? '# 句库 | Sentence Bank\n\n' : '# 词库 | Vocab Bank\n\n';

        if (file instanceof TFile) await this.app.vault.append(file, content);
        else await this.app.vault.create(path, `${title}${content}`);
    }

    async loadVocabs(mode = 'word') {
        const path = mode === 'sentence' ? (this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md") : this.settings.storagePath;
        let file = this.app.vault.getAbstractFileByPath(path);
        if (!(file instanceof TFile)) return [];
        const text = await this.app.vault.read(file);
        return text.split('\n').filter((l: string) => l.startsWith('- ') && l.includes(' :: '))
            .map((l: string) => {
                const content = l.substring(2);
                const parts = content.split(' :: ');
                // New format (5 parts): word, meaning, date, marked, id
                // Legacy format (4 parts): word, meaning, date, marked
                if (parts.length >= 5) {
                    const id = parts[parts.length - 1];
                    const isMarked = parts[parts.length - 2];
                    const date = parts[parts.length - 3];
                    const meaning = parts.slice(1, parts.length - 3).join(' :: ');
                    const word = parts[0];
                    return { word, meaning: meaning.replace(/\\\\/g, '\\').replace(//g, '\n'), date, isMarked: isMarked === '1', id };
                } else {
                    // Legacy entry: word :: meaning :: date :: marked
                    const lastSep = content.lastIndexOf(' :: ');
                    const isMarked = lastSep >= 0 ? content.substring(lastSep + 4) : '0';
                    const rest = lastSep >= 0 ? content.substring(0, lastSep) : content;
                    const secondLastSep = rest.lastIndexOf(' :: ');
                    const date = secondLastSep >= 0 ? rest.substring(secondLastSep + 4) : "早期记录";
                    const head = secondLastSep >= 0 ? rest.substring(0, secondLastSep) : rest;
                    const firstSep = head.indexOf(' :: ');
                    const word = firstSep >= 0 ? head.substring(0, firstSep) : head;
                    const meaning = firstSep >= 0 ? head.substring(firstSep + 4) : "";
                    const id = word + '_' + date + '_' + Math.random().toString(36).substring(2, 6);
                    return { word, meaning: meaning.replace(/\\n/g, '\n'), date, isMarked: isMarked === '1', id };
                }
            }).reverse();
    }

    async toggleWordMark(id: string, mode = 'word') {
        const path = mode === 'sentence' ? (this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md") : this.settings.storagePath;
        let file = this.app.vault.getAbstractFileByPath(path);
        if (!(file instanceof TFile)) return;
        let text = await this.app.vault.read(file);
        let lines = text.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('- ') && lines[i].endsWith(` :: ${id}`)) {
                const content = lines[i].substring(2);
                const parts = content.split(' :: ');
                if (parts.length >= 5) {
                    const oldMarked = parts[parts.length - 2];
                    parts[parts.length - 2] = oldMarked === '1' ? '0' : '1';
                    lines[i] = `- ${parts.join(' :: ')}`;
                }
                break;
            }
        }
        await this.app.vault.modify(file, lines.join('\n'));
    }

    async deleteWord(id: string, mode = 'word') {
        const path = mode === 'sentence' ? (this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md") : this.settings.storagePath;
        let file = this.app.vault.getAbstractFileByPath(path);
        if (!(file instanceof TFile)) return;
        let text = await this.app.vault.read(file);
        let lines = text.split('\n').filter((l: string) => {
            if (!l.startsWith('- ')) return true;
            return !l.endsWith(` :: ${id}`);
        });
        await this.app.vault.modify(file, lines.join('\n'));
    }

    // ─── AI API Methods ─────────────────────────────────
    async extractKeywords(text: string): Promise<string[]> {
        const inputWordCount = text.trim().split(/[\s,，.。\n]+/).filter(w => w.length > 0).length;
        const targetWordCount = Math.min(inputWordCount, this.settings.wordCount);
        const response = await requestUrl({
            url: this.getCleanUrl(),
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.settings.apiKey.trim()}` },
            body: JSON.stringify({
                model: this.settings.model,
                messages: [
                    { role: 'system', content: `你是英语词汇专家。从用户输入中提取至多 ${targetWordCount} 个最值得学习的核心词汇。🛑 严格从原文中提取用户实际使用的单词，禁止替换为近义词。仅输出单词，用英文逗号分隔。` },
                    { role: 'user', content: text }
                ]
            })
        });
        return response.json.choices[0].message.content.split(/[,，\n]+/).map((w: string) => w.trim()).filter((w: string) => w.length > 0);
    }

    async fetchCardParsing(word: string, context: string): Promise<string> {
        const response = await requestUrl({
            url: this.getCleanUrl(),
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.settings.apiKey.trim()}` },
            body: JSON.stringify({
                model: this.settings.model,
                max_tokens: 4096,
                temperature: 0.8,
                messages: [
                    { role: 'system', content: this.settings.systemPrompt },
                    { role: 'user', content: `解析：【${word}】\n语境：${context}` }
                ]
            })
        });
        return response.json.choices[0].message.content;
    }

    async fetchTranslation(text: string): Promise<string> {
        const response = await requestUrl({
            url: this.getCleanUrl(), method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.settings.apiKey.trim()}` },
            body: JSON.stringify({
                model: this.settings.model,
                max_tokens: 4096,
                temperature: 0.8,
                messages: [
                    { role: 'system', content: this.settings.transSystemPrompt },
                    { role: 'user', content: `请对以下内容进行深度翻译解析：\n\n${text}` }
                ]
            })
        });
        return response.json.choices[0].message.content;
    }

    getCleanUrl() {
        let url = this.settings.baseUrl.trim();
        if (url.endsWith('/chat/completions')) return url;
        return `${url.replace(/\/$/, '')}/chat/completions`;
    }

    // ─── Settings ───────────────────────────────────────
    async loadSettings() {
        const loadedData = await this.loadData() || {};
        this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData);
        this.settings.themeColors = Object.assign({}, DEFAULT_SETTINGS.themeColors, loadedData.themeColors || {});

        // Auto-update prompts when a new version is shipped
        const CURRENT_PROMPT_VERSION = DEFAULT_SETTINGS.promptVersion;
        if ((loadedData.promptVersion || 0) < CURRENT_PROMPT_VERSION) {
            this.settings.systemPrompt = DEFAULT_SETTINGS.systemPrompt;
            this.settings.transSystemPrompt = DEFAULT_SETTINGS.transSystemPrompt;
            this.settings.promptVersion = CURRENT_PROMPT_VERSION;
            await this.saveSettings();
        }
    }

    async saveSettings() { await this.saveData(this.settings); }
}

// ─── QR Code Donation Modal ──────────────────────────────────
class QRCodeModal extends Modal {
    title: string;
    imgFile: string;

    constructor(app: App, title: string, imgFile: string) {
        super(app);
        this.title = title;
        this.imgFile = imgFile;
    }

    async onOpen() {
        const { contentEl } = this;
        contentEl.empty();
        contentEl.addClass('vocab-qrcode-modal');

        contentEl.createEl('h3', { text: this.title, cls: 'vocab-qrcode-title' });

        const imgWrapper = contentEl.createDiv({ cls: 'vocab-qrcode-img-wrapper' });

        // Read QR image from plugin directory (vault-relative path)
        try {
            const vaultRelativePath = `.obsidian/plugins/obsidian-zen-vocab-ai/${this.imgFile}`;
            const arrayBuffer = await this.app.vault.adapter.readBinary(vaultRelativePath);
            const bytes = new Uint8Array(arrayBuffer);
            const chunks: string[] = [];
            const CHUNK = 8192;
            for (let i = 0; i < bytes.length; i += CHUNK) {
                chunks.push(String.fromCharCode(...bytes.slice(i, i + CHUNK)));
            }
            const base64 = btoa(chunks.join(''));

            imgWrapper.createEl('img', {
                attr: { src: `data:image/png;base64,${base64}`, alt: this.title },
                cls: 'vocab-qrcode-img'
            });
        } catch (e) {
            imgWrapper.createEl('p', {
                text: `无法加载收款码图片 "${this.imgFile}"，请确认文件存在于插件目录下。`,
                cls: 'vocab-qrcode-error'
            });
            console.error('[ZenVocab] QR load error:', e);
        }

        contentEl.createEl('p', {
            text: '请使用对应的 App 扫码赞赏 🙏',
            cls: 'vocab-qrcode-hint'
        });
    }

    onClose() { this.contentEl.empty(); }
}

// ─── Settings Tab ────────────────────────────────────────────
class ZenVocabSettingTab extends PluginSettingTab {
    plugin: ZenVocabAIPlugin;

    constructor(app: App, plugin: ZenVocabAIPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: '忘·言 AI | Settings' });

        // ── Appearance ──────────────────────────────────
        containerEl.createEl('h3', { text: '🎨 主题与外观 | Appearance', cls: 'vocab-settings-header' });

        new Setting(containerEl)
            .setName('主题风格 | Theme Style')
            .addDropdown(drop => {
                drop.addOption('frog', '🐸 小青蛙 | Frog')
                    .addOption('pond', '🌿 薄荷池塘 | Pond')
                    .addOption('dusk', '🌙 夜色池塘 | Dusk');

                this.plugin.settings.customThemes.forEach(t => {
                    drop.addOption(t.id, `自定义 | ${t.name}`);
                });

                drop.setValue(this.plugin.settings.theme)
                    .onChange(async (value) => {
                        this.plugin.settings.theme = value;
                        await this.plugin.saveSettings();
                        this.plugin.applyTheme();
                        this.plugin.app.workspace.trigger('vocab-settings-updated');
                        this.display();
                    });
            });

        const activeTheme = this.plugin.settings.theme;
        const isBuiltIn = !activeTheme.startsWith('custom-');

        if (isBuiltIn) {
            const themeNames: Record<string, string> = {
                'frog': '🐸 小青蛙 | Frog',
                'pond': '🌿 薄荷池塘 | Pond',
                'dusk': '🌙 夜色池塘 | Dusk'
            };

            containerEl.createEl('h4', { text: `${themeNames[activeTheme]} - 主题配色` });

            new Setting(containerEl)
                .setName('主色调 (Accent)')
                .addColorPicker(color => color
                    .setValue(this.plugin.settings.themeColors[activeTheme].accent)
                    .onChange(async v => {
                        this.plugin.settings.themeColors[activeTheme].accent = v;
                        await this.plugin.saveSettings();
                        this.plugin.applyTheme();
                        this.plugin.app.workspace.trigger('vocab-settings-updated');
                    }));

            new Setting(containerEl)
                .setName('辅助色 (Secondary/Primary)')
                .addColorPicker(color => color
                    .setValue(this.plugin.settings.themeColors[activeTheme].secondary)
                    .onChange(async v => {
                        this.plugin.settings.themeColors[activeTheme].secondary = v;
                        await this.plugin.saveSettings();
                        this.plugin.applyTheme();
                        this.plugin.app.workspace.trigger('vocab-settings-updated');
                    }));
        }

        new Setting(containerEl)
            .setName('字体大小 | Font Size')
            .addSlider(slider => slider
                .setLimits(12, 24, 1)
                .setValue(this.plugin.settings.fontSize)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.fontSize = value;
                    await this.plugin.saveSettings();
                    this.plugin.app.workspace.trigger('vocab-settings-updated');
                }));

        containerEl.createEl('h4', { text: '色彩工坊 | Custom Themes' });

        new Setting(containerEl)
            .setName('新增调色板')
            .setDesc('自动继承当前选中主题的配色与动画布局，创建专属主题。')
            .addButton(btn => btn
                .setButtonText('添加主题')
                .onClick(async () => {
                    let currentAccent: string, currentSecondary: string, currentBaseTheme: string;
                    if (activeTheme.startsWith('custom-')) {
                        const t = this.plugin.settings.customThemes.find(x => x.id === activeTheme);
                        currentAccent = t ? t.accent : '#ff6b9c';
                        currentSecondary = t ? t.secondary : '#92f7e6';
                        currentBaseTheme = t && t.baseTheme ? t.baseTheme : 'frog';
                    } else {
                        const t = this.plugin.settings.themeColors[activeTheme];
                        currentAccent = t ? t.accent : '#ff6b9c';
                        currentSecondary = t ? t.secondary : '#92f7e6';
                        currentBaseTheme = activeTheme;
                    }

                    const newId = `custom-${Date.now()}`;
                    this.plugin.settings.customThemes.push({
                        id: newId,
                        name: '新主题',
                        accent: currentAccent,
                        secondary: currentSecondary,
                        baseTheme: currentBaseTheme
                    });

                    this.plugin.settings.theme = newId;
                    await this.plugin.saveSettings();
                    this.plugin.applyTheme();
                    this.display();
                }));

        this.plugin.settings.customThemes.forEach((theme, index) => {
            new Setting(containerEl)
                .setName('自定主题配置')
                .addText(text => text
                    .setPlaceholder('主题名称')
                    .setValue(theme.name)
                    .onChange(async v => {
                        theme.name = v || '未命名';
                        await this.plugin.saveSettings();
                    }))
                .addColorPicker(color => color
                    .setValue(theme.accent)
                    .onChange(async v => {
                        theme.accent = v;
                        await this.plugin.saveSettings();
                        if (this.plugin.settings.theme === theme.id) {
                            this.plugin.applyTheme();
                            this.plugin.app.workspace.trigger('vocab-settings-updated');
                        }
                    }))
                .addColorPicker(color => color
                    .setValue(theme.secondary)
                    .onChange(async v => {
                        theme.secondary = v;
                        await this.plugin.saveSettings();
                        if (this.plugin.settings.theme === theme.id) {
                            this.plugin.applyTheme();
                            this.plugin.app.workspace.trigger('vocab-settings-updated');
                        }
                    }))
                .addExtraButton(btn => btn
                    .setIcon('trash')
                    .setTooltip('删除该主题')
                    .onClick(async () => {
                        this.plugin.settings.customThemes.splice(index, 1);
                        if (this.plugin.settings.theme === theme.id) {
                            this.plugin.settings.theme = 'frog';
                        }
                        await this.plugin.saveSettings();
                        this.plugin.applyTheme();
                        this.display();
                    }));
        });

        // ── Data Storage ────────────────────────────────
        containerEl.createEl('h3', { text: '💾 数据存储 | Data Storage', cls: 'vocab-settings-header' });

        new Setting(containerEl)
            .setName('词汇存储路径 | Vocab Storage Path')
            .addText(text => text
                .setValue(this.plugin.settings.storagePath)
                .onChange(async (value) => {
                    this.plugin.settings.storagePath = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('句子存储路径 | Sentence Storage Path')
            .addText(text => text
                .setValue(this.plugin.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md")
                .onChange(async (value) => {
                    this.plugin.settings.sentenceStoragePath = value;
                    await this.plugin.saveSettings();
                }));

        // ── AI Settings ─────────────────────────────────
        containerEl.createEl('h3', { text: '🤖 AI 设置 | AI Settings', cls: 'vocab-settings-header' });

        new Setting(containerEl)
            .setName('API Key')
            .setDesc('DeepSeek 或其他 OpenAI 兼容 API 的密钥')
            .addText(t => {
                t.setValue(this.plugin.settings.apiKey)
                    .onChange(async v => { this.plugin.settings.apiKey = v; await this.plugin.saveSettings(); });
                t.inputEl.type = 'password';
            });

        new Setting(containerEl)
            .setName('Base URL')
            .setDesc('API 端点地址')
            .addText(t => t.setValue(this.plugin.settings.baseUrl)
                .onChange(async v => { this.plugin.settings.baseUrl = v; await this.plugin.saveSettings(); }));

        new Setting(containerEl)
            .setName('Model')
            .addText(t => t.setValue(this.plugin.settings.model)
                .onChange(async v => { this.plugin.settings.model = v; await this.plugin.saveSettings(); }));

        new Setting(containerEl)
            .setName('提取单词数量')
            .setDesc('每次解析文献段落时提取的核心词汇个数')
            .addDropdown(d => d
                .addOption('3', '3 个 (默认)').addOption('5', '5 个').addOption('8', '8 个').addOption('10', '10 个')
                .setValue(String(this.plugin.settings.wordCount || 3))
                .onChange(async v => {
                    this.plugin.settings.wordCount = Number(v);
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Vocab AI 提示词')
            .setDesc('自定义词汇解析规则 (System Prompt)')
            .addTextArea(t => {
                t.setValue(this.plugin.settings.systemPrompt)
                    .onChange(async v => { this.plugin.settings.systemPrompt = v; await this.plugin.saveSettings(); });
                t.inputEl.rows = 6;
                t.inputEl.style.width = '100%';
            })
            .addExtraButton(btn => btn
                .setIcon('reset')
                .setTooltip('恢复默认提示词')
                .onClick(async () => {
                    this.plugin.settings.systemPrompt = DEFAULT_SETTINGS.systemPrompt;
                    await this.plugin.saveSettings();
                    this.display();
                }));

        new Setting(containerEl)
            .setName('Trans AI 提示词')
            .setDesc('自定义句子翻译解析规则 (System Prompt)')
            .addTextArea(t => {
                t.setValue(this.plugin.settings.transSystemPrompt)
                    .onChange(async v => { this.plugin.settings.transSystemPrompt = v; await this.plugin.saveSettings(); });
                t.inputEl.rows = 10;
                t.inputEl.style.width = '100%';
            })
            .addExtraButton(btn => btn
                .setIcon('reset')
                .setTooltip('恢复默认提示词')
                .onClick(async () => {
                    this.plugin.settings.transSystemPrompt = DEFAULT_SETTINGS.transSystemPrompt;
                    await this.plugin.saveSettings();
                    this.display();
                }));

        // ── Support / Donation ───────────────────────────
        containerEl.createEl('h3', { text: '☕ 支持开发 | Buy Me a Coffee', cls: 'vocab-settings-header' });

        const donateSection = containerEl.createDiv({ cls: 'vocab-donate-section' });
        donateSection.createEl('p', {
            text: '如果 忘·言 AI 对你的英语学习有帮助，请我喝杯咖啡吧 ☕',
            cls: 'vocab-donate-text'
        });

        const btnGroup = donateSection.createDiv({ cls: 'vocab-donate-btn-group' });

        const coffeeBtn = btnGroup.createEl('button', {
            cls: 'vocab-btn-save vocab-donate-btn',
            text: '☕ Buy Me a Coffee'
        });
        coffeeBtn.style.cssText = 'margin-right: 8px;';
        coffeeBtn.onclick = () => {
            window.open('https://buymeacoffee.com/krisztiantsui', '_blank');
        };

        const alipayBtn = btnGroup.createEl('button', {
            cls: 'vocab-btn-save vocab-donate-btn',
            text: '💙 支付宝'
        });
        alipayBtn.style.cssText = 'margin-right: 8px;';
        alipayBtn.onclick = () => {
            new QRCodeModal(this.app, '💙 支付宝赞赏', 'assets/.qrcode-a.png').open();
        };

        const wechatBtn = btnGroup.createEl('button', {
            cls: 'vocab-btn-save vocab-donate-btn',
            text: '💚 微信赞赏'
        });
        wechatBtn.onclick = () => {
            new QRCodeModal(this.app, '💚 微信赞赏', 'assets/.qrcode-w.png').open();
        };

        donateSection.createEl('p', {
            text: '感谢你的支持！每一份心意都是我持续更新的动力 💪',
            cls: 'vocab-donate-thanks'
        });
    }
}
