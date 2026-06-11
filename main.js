"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ZenVocabAIPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var VIEW_TYPE = "zen-vocab-ai-view";
var LOTUS_POD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
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
var DEFAULT_SETTINGS = {
  storagePath: "Vocab/Vocab_Bank.md",
  sentenceStoragePath: "Vocab/Sentence_Bank.md",
  theme: "frog",
  fontSize: 13,
  themeColors: {
    "frog": { accent: "#ff6b9c", secondary: "#92f7e6" },
    "pond": { accent: "#ff7da7", secondary: "#8be7d5" },
    "dusk": { accent: "#f78db8", secondary: "#7adfcb" }
  },
  customThemes: [],
  apiKey: "",
  baseUrl: "https://api.deepseek.com",
  model: "deepseek-chat",
  wordCount: 3,
  systemPrompt: `\u4F60\u662F\u7CBE\u901A\u8BA4\u77E5\u5FC3\u7406\u5B66\u4E0E\u8BB0\u5FC6\u672F\u7684\u82F1\u8BED\u8BCD\u6C47\u5BFC\u5E08\u3002\u4F60\u7684\u552F\u4E00\u4F7F\u547D\uFF1A\u8BA9\u6BCF\u4E2A\u5355\u8BCD"\u957F"\u5728\u5B66\u751F\u8111\u5B50\u91CC\uFF0C\u60F3\u5FD8\u90FD\u5FD8\u4E0D\u6389\u3002

\u3010\u{1F6D1} \u7EDD\u5BF9\u7981\u6B62\u3011\u4E0D\u8981\u8F93\u51FA\u95EE\u5019\u8BED/\u8FC7\u6E21\u53E5/\u601D\u8003\u8FC7\u7A0B/\u5BA2\u5957\u8BDD\u3002\u5FC5\u987B\u76F4\u63A5\u4ECE"### \u{1F48E} \u6838\u5FC3\u8BCD\u6C47\u89E3\u6790\uFF1A[word]"\u5F00\u59CB\u8F93\u51FA\u7EAF\u51C0 Markdown\uFF01

\u2014\u2014

### \u{1F48E} \u6838\u5FC3\u8BCD\u6C47\u89E3\u6790\uFF1A[word]

## 1. \u5FEB\u901F\u8BA4\u77E5
- **\u97F3\u6807\uFF1A** /IPA/
- **\u6838\u5FC3\u542B\u4E49\uFF1A** [\u6700\u7CBE\u70BC\u7684\u4E2D\u6587\u91CA\u4E49\uFF0C1-2\u4E2A\u8BCD]
- **\u8BCD\u6027\uFF1A** [\u8BCD\u6027]
- **\u96BE\u5EA6\u611F\u77E5\uFF1A** [\u8FD9\u4E2A\u8BCD\u8BA9\u4F60\u60F3\u5230\u4EC0\u4E48\uFF1F\u964C\u751F/\u719F\u6089\uFF1F\u62BD\u8C61/\u5177\u4F53\uFF1F]

## 2. \u8BCD\u6E90\u8003\u53E4 | \u8FFD\u6839\u6EAF\u6E90

\u4ECE\u8BCD\u6839\u5C42\u9762\u62C6\u89E3\u8FD9\u4E2A\u8BCD\u7684"DNA"\uFF0C\u4E00\u65E6\u7406\u89E3\u4E86\u6784\u8BCD\u903B\u8F91\uFF0C\u62FC\u5199\u548C\u542B\u4E49\u81EA\u7136\u8D2F\u901A\u3002

- **\u8BCD\u6839\u62C6\u89E3\uFF1A** [\u524D\u7F00 = X\uFF08\u542B\u4E49\uFF09\uFF0C\u8BCD\u6839 = Y\uFF08\u542B\u4E49\uFF09\uFF0C\u540E\u7F00 = Z\uFF08\u542B\u4E49\uFF09]
- **\u5B57\u9762\u610F\u601D\uFF1A** [\u4E09\u4E2A\u90E8\u5206\u62FC\u8D77\u6765\u7684\u539F\u59CB\u542B\u4E49]
- **\u6F14\u53D8\u6545\u4E8B\uFF1A** [\u8FD9\u4E2A\u8BCD\u5728\u5386\u53F2\u4E0A\u662F\u600E\u4E48\u6765\u7684\uFF1F\u7528 2-3 \u53E5\u8BDD\u8BB2\u4E00\u4E2A\u6709\u8DA3\u7684\u8BCD\u6E90\u6545\u4E8B\u3002\u6BD4\u5982\uFF1A\u5B83\u6765\u81EA\u62C9\u4E01\u8BED XXX\uFF0C\u539F\u610F\u662F YYY\uFF0C\u540E\u6765\u56E0\u4E3A ZZZ \u53D8\u6210\u4E86\u73B0\u5728\u7684\u610F\u601D\u3002\u6545\u4E8B\u8D8A\u6709\u753B\u9762\u611F\u8D8A\u597D\u3002]
- **\u540C\u6839\u5BB6\u65CF\uFF1A** \u5217\u51FA\u81F3\u5C11 3 \u4E2A\u540C\u8BCD\u6839\u7684\u8BCD\uFF0C\u9644\u5E26\u4E2D\u6587\u91CA\u4E49\uFF0C\u8BA9\u5B66\u4E60\u8005\u4E00\u6B21\u638C\u63E1\u4E00\u7EC4\u8BCD\uFF1A
  - [\u540C\u6839\u8BCD1] = [\u4E2D\u6587]
  - [\u540C\u6839\u8BCD2] = [\u4E2D\u6587]
  - [\u540C\u6839\u8BCD3] = [\u4E2D\u6587]
  - [\u540C\u6839\u8BCD4] = [\u4E2D\u6587]

## 3. \u591A\u901A\u9053\u8BB0\u5FC6\u5DE5\u574A | \u9009\u4E00\u4E2A\u6700\u9002\u5408\u4F60\u7684\u65B9\u6CD5

> \u540C\u4E00\u4E2A\u8BCD\uFF0C\u63D0\u4F9B 4 \u79CD\u4E0D\u540C\u7684\u8BB0\u5FC6\u8DEF\u5F84\u3002\u4E0D\u540C\u7684\u4EBA\u9002\u5408\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u540C\u65F6\u7528\u591A\u79CD\u65B9\u6CD5\u52A0\u6DF1\u5370\u8C61\u3002

### \u{1F3AD} \u65B9\u6CD5A\uFF1A\u8352\u8BDE\u6545\u4E8B\u6CD5 (Story)
_\u9002\u5408\uFF1A\u559C\u6B22\u542C\u6545\u4E8B\u3001\u60F3\u8C61\u529B\u4E30\u5BCC\u7684\u4EBA_

\u7F16\u4E00\u4E2A\u6781\u5EA6\u5938\u5F20\u3001\u8352\u8BDE\u3001\u79BB\u5947\u7684\u5C0F\u6545\u4E8B\uFF0C\u628A\u5355\u8BCD\u7684\u97F3\u3001\u5F62\u3001\u4E49\u5168\u90E8\u7F16\u7EC7\u8FDB\u53BB\u3002**\u6545\u4E8B\u8D8A\u79BB\u8C31\uFF0C\u8BB0\u5FC6\u8D8A\u7262\u56FA\u3002** \u5927\u8111\u5BF9\u53CD\u5E38\u4E8B\u4EF6\u7684\u8BB0\u5FC6\u5F3A\u5EA6\u662F\u666E\u901A\u4FE1\u606F\u7684 6-8 \u500D\u3002

> \u{1F4D6} **\u6545\u4E8B\uFF1A** [\u5199\u4E00\u4E2A 3-5 \u53E5\u7684\u5FAE\u578B\u6545\u4E8B\u3002\u8981\u6C42\uFF1A\u2460 \u5305\u542B\u4E00\u4E2A\u5177\u4F53\u7684\u89D2\u8272\uFF08\u53EF\u4EE5\u662F\u52A8\u7269/\u7269\u54C1/\u4EBA\u7269\uFF09 \u2461 \u6709\u4E00\u4E2A\u8352\u8BDE\u7684\u53CD\u8F6C\u6216\u5938\u5F20\u7684\u60C5\u8282 \u2462 \u628A\u5355\u8BCD\u7684\u53D1\u97F3\u548C\u542B\u4E49\u90FD\u878D\u8FDB\u6545\u4E8B\u91CC \u2463 \u8BA9\u4EBA\u770B\u5B8C\u4F1A\u5FC3\u4E00\u7B11\u6216\u611F\u5230\u60CA\u8BB6]

### \u{1F3A8} \u65B9\u6CD5B\uFF1A\u89C6\u89C9\u7206\u7834\u6CD5 (Visual)
_\u9002\u5408\uFF1A\u89C6\u89C9\u578B\u5B66\u4E60\u8005\u3001\u559C\u6B22\u753B\u753B\u6216\u7A7A\u95F4\u60F3\u8C61\u7684\u4EBA_

\u628A\u62BD\u8C61\u8BCD\u6C47\u53D8\u6210\u4E00\u5E45\u4F60"\u80FD\u770B\u89C1"\u7684\u52A8\u6001\u753B\u9762\u3002\u5927\u8111\u5904\u7406\u56FE\u50CF\u7684\u901F\u5EA6\u662F\u6587\u5B57\u7684 60000 \u500D\u3002

> \u{1F5BC}\uFE0F **\u6838\u5FC3\u753B\u9762\uFF1A** [\u7528 2-3 \u53E5\u8BDD\u63CF\u7ED8\u4E00\u5E45\u6781\u5EA6\u5938\u5F20\u7684\u89C6\u89C9\u753B\u9762\u3002\u8981\u6C42\uFF1A\u2460 \u6709\u5177\u4F53\u7684\u989C\u8272\u3001\u5F62\u72B6\u3001\u5927\u5C0F \u2461 \u753B\u9762\u662F\u52A8\u6001\u7684\u800C\u975E\u9759\u6B62\u7684 \u2462 \u5938\u5F20\u5230\u73B0\u5B9E\u4E2D\u4E0D\u53EF\u80FD\u53D1\u751F \u2463 \u628A\u5355\u8BCD\u7684\u542B\u4E49\u7528\u89C6\u89C9\u9690\u55BB\u8868\u8FBE\u51FA\u6765]
> 
> \u{1F3F0} **\u8BB0\u5FC6\u5BAB\u6BBF\u5B9A\u4F4D\uFF1A** [\u628A\u8FD9\u4E2A\u753B\u9762"\u653E"\u5230\u4E00\u4E2A\u4F60\u719F\u6089\u7684\u771F\u5B9E\u5730\u70B9\u3002\u6BD4\u5982\uFF1A"\u628A\u8FD9\u5E45\u753B\u9762\u653E\u5728\u4F60\u5BB6\u95E8\u53E3\u2014\u2014\u6BCF\u6B21\u63A8\u95E8\uFF0C\u4F60\u90FD\u4F1A\u770B\u5230\u2026\u2026"]

### \u{1F3B5} \u65B9\u6CD5C\uFF1A\u58F0\u97F3\u951A\u5B9A\u6CD5 (Auditory)
_\u9002\u5408\uFF1A\u542C\u89C9\u578B\u5B66\u4E60\u8005\u3001\u5BF9\u58F0\u97F3\u654F\u611F\u7684\u4EBA_

\u5229\u7528\u4E2D\u6587\u53D1\u97F3\u548C\u82F1\u8BED\u53D1\u97F3\u4E4B\u95F4\u7684\u6865\u6881\uFF0C\u521B\u5EFA\u4E00\u6761\u7262\u4E0D\u53EF\u7834\u7684\u58F0\u97F3\u94FE\u8DEF\u3002

> \u{1F50A} **\u8C10\u97F3\u6865\uFF1A** [\u627E\u4E00\u4E2A\u6700\u63A5\u8FD1\u7684\u4E2D\u6587\u8BCD\u8BED/\u77ED\u53E5\u6765\u6A21\u62DF\u82F1\u8BED\u53D1\u97F3\u3002\u8D8A\u8352\u8BDE\u8D8A\u597D\u2014\u2014\u300Cambulance\u300D\u2192\u300C\u4FFA\u4E0D\u80FD\u6B7B\u300D\u8FD9\u79CD\u7EA7\u522B\u7684\u521B\u610F\u3002]
> 
> \u{1F3A4} **\u8282\u594F\u53E3\u8BC0\uFF1A** [\u628A\u5355\u8BCD\u7F16\u6210\u4E00\u53E5\u62BC\u97F5\u7684\u53E3\u8BC0\u6216\u987A\u53E3\u6E9C\uFF0C\u52A0\u4E0A\u8282\u594F\u611F\u3002\u4F8B\uFF1A"optimistic \u4E50\u89C2\u7684\uFF0Copti-mis-tic \u54D2\u54D2\u54D2\uFF0C\u770B\u4EC0\u4E48\u90FD\u7F8E\u7F8E\u7684"]
> 
> \u{1F3A7} **\u53D1\u97F3\u62C6\u89E3\uFF1A** [\u628A\u5355\u8BCD\u6309\u97F3\u8282\u5207\u5F00\uFF0C\u6BCF\u6BB5\u914D\u4E00\u4E2A\u4F60\u5DF2\u7ECF\u8BA4\u8BC6\u7684\u7B80\u5355\u8BCD\u6216\u62DF\u58F0\u8BCD\uFF1Aad-ven-ture \u2192 ad(\u5E7F\u544A) + ven(\u6E29) + ture(\u8F66) \u2192 \u5E7F\u544A\u91CC\u6E29\u6696\u7684\u8F66=\u5192\u9669]

### \u{1F3C3} \u65B9\u6CD5D\uFF1A\u8EAB\u4F53\u7F16\u7801\u6CD5 (Kinesthetic)
_\u9002\u5408\uFF1A\u5750\u4E0D\u4F4F\u7684\u4EBA\u3001\u52A8\u624B\u578B\u5B66\u4E60\u8005_

\u7528\u8EAB\u4F53\u52A8\u4F5C\u3001\u624B\u52BF\u6216\u7A7A\u95F4\u4F4D\u7F6E\u6765\u7F16\u7801\u8FD9\u4E2A\u8BCD\u3002\u8EAB\u4F53\u53C2\u4E0E\u7684\u8BB0\u5FC6\u63D0\u53D6\u7EBF\u7D22\u6700\u591A\u3002

> \u270B **\u52A8\u4F5C\u951A\uFF1A** [\u8BBE\u8BA1\u4E00\u4E2A\u5177\u4F53\u7684\u3001\u53EF\u91CD\u590D\u7684\u624B\u52BF\u6216\u8EAB\u4F53\u52A8\u4F5C\u3002\u63CF\u8FF0\u6E05\u695A\u600E\u4E48\u505A\uFF0C\u4EE5\u53CA\u52A8\u4F5C\u548C\u8BCD\u4E49\u4E4B\u95F4\u7684\u5173\u8054\u903B\u8F91]
> 
> \u{1F5E3}\uFE0F **\u81EA\u8A00\u81EA\u8BED\u53E5\uFF1A** [\u4E00\u53E5\u4F60\u53EF\u4EE5\u5BF9\u81EA\u5DF1\u8BF4\u7684\u8BDD\uFF0C\u5728\u7279\u5B9A\u573A\u666F\u4E0B\u4F7F\u7528\u3002\u6BD4\u5982\u6BCF\u6B21\u6253\u5F00\u51B0\u7BB1\u65F6\u8BF4\uFF1A"The fridge is utterly empty. I am devastated."]

## 4. \u5B9E\u6218\u64CD\u7EC3

### \u{1F3AC} \u6C89\u6D78\u5F0F\u4F8B\u53E5

- **\u751F\u6D3B\u573A\u666F\uFF1A** [\u5728\u4E00\u4E2A\u5E38\u89C1\u7684\u751F\u6D3B\u573A\u666F\u4E2D\u81EA\u7136\u4F7F\u7528\u8FD9\u4E2A\u8BCD]  \u2192  [\u4E2D\u6587\u7FFB\u8BD1]
  - \u{1F3AF} \u8FD9\u4E2A\u53E5\u5B50\u9002\u5408\u5728 ___ \u7684\u60C5\u51B5\u4E0B\u8BF4
- **\u5B66\u672F/\u804C\u573A\u573A\u666F\uFF1A** [\u5728\u6B63\u5F0F\u8BED\u5883\u4E2D\u4F7F\u7528\u8FD9\u4E2A\u8BCD]  \u2192  [\u4E2D\u6587\u7FFB\u8BD1]
  - \u{1F3AF} \u8FD9\u4E2A\u53E5\u5B50\u9002\u5408\u5728 ___ \u7684\u60C5\u51B5\u4E0B\u8BF4

### \u{1F517} \u9AD8\u9891\u642D\u914D\u7F51

\u4E0D\u8981\u5B64\u7ACB\u5730\u8BB0\u5355\u8BCD\uFF0C\u8981\u8BB0"\u8C01\u548C\u8C01\u7ECF\u5E38\u4E00\u8D77\u51FA\u73B0"\u3002\u5217\u51FA\u81F3\u5C11 3 \u4E2A\u9AD8\u9891\u642D\u914D\uFF1A

- **[\u642D\u914D1]** = [\u4E2D\u6587] \u2014 \u5E38\u7528\u4E8E ___ \u573A\u666F
- **[\u642D\u914D2]** = [\u4E2D\u6587] \u2014 \u5E38\u7528\u4E8E ___ \u573A\u666F
- **[\u642D\u914D3]** = [\u4E2D\u6587] \u2014 \u5E38\u7528\u4E8E ___ \u573A\u666F

### \u2694\uFE0F \u8FD1\u4E49\u8BCD\u51B3\u6597\u573A

\u9009 2 \u4E2A\u6700\u63A5\u8FD1\u7684\u8FD1\u4E49\u8BCD\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u5E2E\u52A9\u7CBE\u786E\u7406\u89E3\u6BCF\u4E2A\u8BCD\u7684"\u4E2A\u6027"\u3002

- **[\u76EE\u6807\u8BCD] vs [\u8FD1\u4E49\u8BCDA]\uFF1A** [\u6838\u5FC3\u533A\u522B\u7528\u4E00\u53E5\u8BDD\u8BF4\u6E05]
  - [\u76EE\u6807\u8BCD] \u4FA7\u91CD ___\uFF0C\u4F8B\uFF1A___
  - [\u8FD1\u4E49\u8BCDA] \u4FA7\u91CD ___\uFF0C\u4F8B\uFF1A___
- **[\u76EE\u6807\u8BCD] vs [\u8FD1\u4E49\u8BCDB]\uFF1A** [\u6838\u5FC3\u533A\u522B\u7528\u4E00\u53E5\u8BDD\u8BF4\u6E05]
  - [\u76EE\u6807\u8BCD] \u4FA7\u91CD ___\uFF0C\u4F8B\uFF1A___
  - [\u8FD1\u4E49\u8BCDB] \u4FA7\u91CD ___\uFF0C\u4F8B\uFF1A___

> \u{1F4A1} **\u4E00\u53E5\u8BDD\u79D2\u8BB0\uFF1A** \u5982\u679C\u53EA\u80FD\u8BB0\u4F4F\u4E00\u53E5\u8BDD\uFF0C\u90A3\u5C31\u662F\u2014\u2014[\u7528\u4E00\u53E5\u4E2D\u6587\uFF0C\u628A\u97F3\u3001\u5F62\u3001\u4E49\u3001\u753B\u9762\u5168\u90E8\u6D53\u7F29\u8FDB\u53BB\uFF0C\u50CF\u5E7F\u544A\u8BED\u4E00\u6837\u7CBE\u70BC]
> 
> \u{1F9E0} **3\u79D2\u81EA\u6D4B\uFF08\u522B\u5077\u770B\u4E0A\u9762\uFF01\uFF09\uFF1A** [\u4E00\u9053\u586B\u7A7A\u6216\u9020\u53E5\u9898\uFF0C\u5F3A\u5236\u5B66\u4E60\u8005\u4E3B\u52A8\u56DE\u5FC6\u3002\u5982\uFF1A"\u5982\u679C\u4F60\u60F3\u8BF4\u4E00\u4E2A\u4EBA\u4ECE\u4E0D\u5403\u8089\uFF0C\u4ED6\u662F ___\u3002" \u6216 "\u8BF7\u7528\u8FD9\u4E2A\u8BCD\u63CF\u8FF0\u4F60\u4ECA\u5929\u9047\u5230\u7684\u4E00\u4E2A\u4EBA/\u4E00\u4EF6\u4E8B\uFF1A___"]`,
  transSystemPrompt: `\u4F60\u662F\u8D44\u6DF1\u8BED\u8A00\u5B66\u6559\u6388 + \u8BB0\u5FC6\u672F\u4E13\u5BB6\uFF0C\u64C5\u957F\u8BA9\u5B66\u751F\u4E0D\u4EC5"\u770B\u61C2"\u53E5\u5B50\uFF0C\u66F4\u80FD"\u5185\u5316"\u5E76\u4E3B\u52A8\u4F7F\u7528\u3002

\u3010\u{1F6D1} \u7EDD\u5BF9\u7981\u6B62\u3011\u4E0D\u8981\u8F93\u51FA\u95EE\u5019\u8BED/\u8FC7\u6E21\u53E5/\u601D\u8003\u8FC7\u7A0B/\u5BA2\u5957\u8BDD\u3002\u5FC5\u987B\u76F4\u63A5\u4ECE"### \u{1F30D} \u3010\u53E5\u5B50\u7FFB\u8BD1\u3011"\u5F00\u59CB\u8F93\u51FA\u7EAF\u51C0 Markdown\uFF01

\u8981\u6C42\uFF1A
1. \u81EA\u52A8\u8BC6\u522B\u8F93\u5165\u8BED\u8A00\uFF08\u4E2D\u6587/\u82F1\u6587\uFF09
2. **\u539F\u6587\uFF1A** \u540E\u76F4\u63A5\u5199\u51FA\u539F\u53E5\uFF0C\u4E0D\u8981\u518D\u5957\u4E00\u5C42\u52A0\u7C97
3. \u4E0D\u8981\u8F93\u51FA\u5360\u4F4D\u7B26\u62EC\u53F7\uFF0C\u76F4\u63A5\u8F93\u51FA\u5B9E\u9645\u5185\u5BB9

### \u{1F30D} \u3010\u53E5\u5B50\u7FFB\u8BD1\u3011
- **\u539F\u6587\uFF1A** [\u539F\u53E5\u5185\u5BB9]
- **[\u82E5\u8F93\u5165\u82F1\u6587]**
  - \u{1F1E8}\u{1F1F3} **\u5730\u9053\u610F\u8BD1\uFF1A** [\u7B26\u5408\u4E2D\u6587\u4E60\u60EF\u7684\u4F18\u7F8E\u7FFB\u8BD1]
  - \u{1FAB5} **\u76F4\u8BD1\u601D\u7EF4\uFF1A** [\u4FDD\u7559\u82F1\u8BED\u8BED\u5E8F\u7684\u76F4\u8BD1\uFF0C\u66B4\u9732\u4E2D\u82F1\u601D\u7EF4\u5DEE\u5F02]
- **[\u82E5\u8F93\u5165\u4E2D\u6587]**
  - \u{1F5E3}\uFE0F **\u65E5\u5E38\u6C9F\u901A\uFF1A** [\u81EA\u7136\u53E3\u8BED\u8868\u8FBE]
  - \u{1F393} **\u9AD8\u7EA7\u8FDB\u9636\uFF1A** [\u9AD8\u5206/\u5B66\u672F\u5730\u9053\u8868\u8FBE]

### \u{1F3AC} **\u573A\u666F\u5316\u8BB0\u5FC6**
- **\u4F7F\u7528\u573A\u666F\uFF1A** [\u8FD9\u53E5\u8BDD\u4F1A\u5728\u4EC0\u4E48\u60C5\u5883\u4E0B\u8BF4\uFF1F\u5BF9\u8C01\u8BF4\uFF1F\u4EC0\u4E48\u8BED\u6C14\uFF1F]
- **\u60C5\u7EEA\u6807\u7B7E\uFF1A** [\u6B63\u5F0F/\u968F\u610F/\u5E7D\u9ED8/\u4E25\u8083/\u6E29\u6696/\u8BBD\u523A\u2026]
- **\u753B\u9762\u94A9\u5B50\uFF1A** [\u7528\u4E00\u53E5\u8BDD\u63CF\u7ED8\u4E00\u4E2A\u4F60\u80FD"\u770B\u89C1"\u7684\u751F\u52A8\u573A\u666F\uFF0C\u8BA9\u53E5\u5B50\u6709\u8840\u6709\u8089]

### \u23F3 \u3010\u65F6\u6001\u4E0E\u8BED\u6001\u3011
- **\u65F6\u6001\u5224\u5B9A\uFF1A** [\u6838\u5FC3\u65F6\u6001\u8BED\u6001]
- **\u4F7F\u7528\u903B\u8F91\uFF1A** [\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u7528\u8FD9\u4E2A\u65F6\u6001\uFF1F\u80CC\u540E\u601D\u7EF4\u662F\u4EC0\u4E48\uFF1F]
- **\u5BF9\u6BD4\u611F\u77E5\uFF1A** [\u5982\u679C\u6362\u6210\u53E6\u4E00\u4E2A\u65F6\u6001\uFF0C\u610F\u601D\u4F1A\u600E\u4E48\u53D8\uFF1F]

### \u{1F9E9} \u3010\u8BED\u6CD5\u7ED3\u6784\u62C6\u89E3\u3011
- **\u53E5\u5B50\u4E3B\u5E72\uFF1A** \u4E3B\u8BED + \u8C13\u8BED + \u5BBE\u8BED\uFF08\u7528 [] \u6807\u6CE8\u5404\u90E8\u5206\uFF09
- **\u4FEE\u9970\u94FE\u6761\uFF1A** [\u50CF\u5265\u6D0B\u8471\u4E00\u6837\u9010\u5C42\u62C6\u89E3\u4FEE\u9970\u5173\u7CFB]
- **\u7279\u6B8A\u7ED3\u6784\uFF1A** [\u5012\u88C5/\u865A\u62DF/\u5F3A\u8C03\u7B49 \u2014 \u7528"\u516C\u5F0F"\u8868\u8FBE]

### \u{1F517} \u3010\u6838\u5FC3\u8BCD\u6C47\u4E0E\u5730\u9053\u642D\u914D\u3011
1. **[\u8BCD\u7EC41]**\uFF1A(\u8BCD\u6027) \u4E2D\u6587\u610F\u601D
   - \u{1F504} **\u540C\u4E49\u66FF\u6362\uFF1A** [\u9AD8\u7EA7/\u53E3\u8BED\u540C\u4E49\u8BCD]
   - \u{1F9E0} **\u8BB0\u5FC6\u951A\u70B9\uFF1A** [\u62C6\u89E3/\u8054\u60F3/\u753B\u9762 \u2014 \u600E\u4E48\u8BB0\u4F4F\u8FD9\u4E2A\u642D\u914D\uFF1F]

### \u{1F3D7}\uFE0F **\u53E5\u578B\u5185\u5316\u5DE5\u574A**
- **\u4E07\u80FD\u6846\u67B6\uFF1A** [\u63D0\u70BC\u53EF\u590D\u7528\u53E5\u578B\uFF0C\u7528 ___ \u6807\u8BB0\u53EF\u66FF\u6362\u4F4D\u7F6E]
- **\u53D8\u5F62\u7EC3\u4E60\uFF1A** [\u540C\u4E00\u53E5\u578B\u6362 2 \u4E2A\u5B8C\u5168\u4E0D\u540C\u573A\u666F\u7684\u9020\u53E5]
- **\u53E3\u8BED\u901F\u8BB0\u7248\uFF1A** [\u5982\u679C\u53EA\u80FD\u8BB0\u4F4F\u4E00\u4E2A\u53E3\u8BED\u7248\u672C\uFF0C\u662F\u4EC0\u4E48\uFF1F]

> \u{1F4A1} **\u4E2D\u82F1\u601D\u7EF4\u5207\u6362\u70B9\uFF1A** [\u8FD9\u53E5\u8BDD\u66B4\u9732\u4E86\u4E2D\u82F1\u6587\u601D\u7EF4\u7684\u54EA\u4E2A\u5173\u952E\u5DEE\u5F02\uFF1F\u8BB0\u4F4F\u8FD9\u4E2A\u5DEE\u5F02\uFF0C\u4EE5\u540E\u8FD9\u7C7B\u53E5\u5B50\u90FD\u4F1A\u4E86]
> \u{1F9E0} **3\u79D2\u81EA\u6D4B\uFF1A** [\u906E\u4F4F\u539F\u6587\uFF0C\u53EA\u770B\u4E2D\u6587\u7FFB\u8BD1\uFF0C\u4F60\u80FD\u8FD8\u539F\u51FA\u82F1\u6587\u5417\uFF1F\u8BD5\u8BD5\uFF01]`,
  promptVersion: 2
};
var VocabCalendarModal = class extends import_obsidian.Modal {
  constructor(app, view) {
    super(app);
    this.view = view;
    this.modalYear = parseInt(view.filterYear || window.moment().format("YYYY"));
    this.modalMode = view.filterType === "week" ? "week" : view.filterType === "month" ? "month" : "year";
  }
  async onOpen() {
    this.contentEl.empty();
    this.contentEl.addClass("vocab-calendar-modal");
    this.view.allVocabsForCalendar = await this.view.plugin.loadVocabs(this.view.currentMode);
    this.renderContent();
  }
  onClose() {
    this.contentEl.empty();
  }
  /** Returns a content area after the header, clearing any previous body */
  bodyEl() {
    const old = this.contentEl.querySelector(".vocab-calendar-body");
    if (old)
      old.remove();
    const div = this.contentEl.createDiv({ cls: "vocab-calendar-body" });
    return div;
  }
  /** Build counts keyed by month (YYYY-MM) and by date (YYYY-MM-DD) */
  getCounts() {
    const byMonth = {};
    const byDate = {};
    const vocabs = this.view.allVocabsForCalendar || [];
    vocabs.forEach((v) => {
      if (v.date && v.date !== "\u65E9\u671F\u8BB0\u5F55") {
        const monthKey = v.date.substring(0, 7);
        byMonth[monthKey] = (byMonth[monthKey] || 0) + 1;
        byDate[v.date] = (byDate[v.date] || 0) + 1;
      }
    });
    return { byMonth, byDate };
  }
  heatLevel(count, thresholds) {
    for (let i = 0; i < thresholds.length; i++) {
      if (count <= thresholds[i])
        return `level-${i}`;
    }
    return `level-${thresholds.length}`;
  }
  renderContent() {
    this.contentEl.empty();
    const header = this.contentEl.createDiv({ cls: "vocab-modal-header" });
    header.createEl("span", { text: "\u65F6\u7A7A\u7F57\u76D8", cls: "vocab-modal-title" });
    const typeSelect = header.createEl("select", { cls: "vocab-filter-select modal-filter-select" });
    typeSelect.add(new Option("\u5168\u90E8 | All", "none"));
    typeSelect.add(new Option("\u5DF2\u6807\u8BB0 | Marked", "marked"));
    typeSelect.add(new Option("\u6309\u65E5 | Day", "date"));
    typeSelect.add(new Option("\u6309\u5468 | Week", "week"));
    typeSelect.add(new Option("\u6309\u6708 | Month", "month"));
    typeSelect.add(new Option("\u6309\u5E74 | Year", "year"));
    typeSelect.value = this.modalMode;
    typeSelect.onchange = (e) => {
      const val = e.target.value;
      if (val === "none" || val === "marked") {
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
    if (this.modalMode === "year")
      this.renderYearPicker();
    else if (this.modalMode === "month")
      this.renderMonthGrid();
    else if (this.modalMode === "week")
      this.renderWeekList();
    else if (this.modalMode === "date") {
      const body = this.bodyEl();
      this.renderCalendarGrid(body);
    }
  }
  // ── Year Picker: grid of whole years ──
  renderYearPicker() {
    const { byMonth } = this.getCounts();
    const byYear = {};
    Object.entries(byMonth).forEach(([monthKey, count]) => {
      const y = monthKey.substring(0, 4);
      byYear[y] = (byYear[y] || 0) + count;
    });
    const currentYear = window.moment().year();
    let minYear = currentYear, maxYear = currentYear;
    Object.keys(byYear).forEach((y) => {
      const yn = parseInt(y);
      if (yn < minYear)
        minYear = yn;
      if (yn > maxYear)
        maxYear = yn;
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
      if (yearStr === todayYear)
        cell.addClass("is-today");
      if (y === this.modalYear)
        cell.addClass("is-selected");
      cell.createSpan({ text: yearStr, cls: "vocab-calendar-date-text" });
      if (count > 0) {
        const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
        dots.createDiv({ cls: "vocab-calendar-dot" });
      }
      cell.onclick = () => {
        this.modalYear = y;
        this.modalMode = "month";
        this.view.filterYear = yearStr;
        this.view.filterType = "month";
        this.view.renderReviewContent();
        this.renderContent();
      };
    }
  }
  // ── Month Grid: 4×3 months of modalYear ──
  renderMonthGrid() {
    const { byMonth } = this.getCounts();
    const currentYear = this.modalYear;
    const todayMonth = window.moment().format("YYYY-MM");
    const body = this.bodyEl();
    const calHeader = body.createDiv({ cls: "vocab-calendar-header" });
    const prevBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(prevBtn, "chevron-left");
    prevBtn.onclick = () => {
      this.modalYear--;
      this.renderMonthGrid();
    };
    calHeader.createSpan({ text: `${currentYear} \u5E74`, cls: "vocab-calendar-title-inline" });
    const nextBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(nextBtn, "chevron-right");
    nextBtn.onclick = () => {
      this.modalYear++;
      this.renderMonthGrid();
    };
    const backBtn = calHeader.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u8FD4\u56DE\u5E74\u4EFD" } });
    (0, import_obsidian.setIcon)(backBtn, "arrow-up");
    backBtn.onclick = () => {
      this.modalMode = "year";
      this.renderContent();
    };
    const monthNames = ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"];
    const grid = body.createDiv({ cls: "vocab-year-month-grid" });
    for (let m = 0; m < 12; m++) {
      const monthKey = `${currentYear}-${String(m + 1).padStart(2, "0")}`;
      const count = byMonth[monthKey] || 0;
      const cell = grid.createDiv({ cls: "vocab-calendar-cell vocab-month-cell" });
      cell.addClass(this.heatLevel(count, [0, 3, 8, 15]));
      if (monthKey === todayMonth)
        cell.addClass("is-today");
      cell.createSpan({ text: monthNames[m], cls: "vocab-calendar-date-text" });
      if (count > 0) {
        const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
        dots.createDiv({ cls: "vocab-calendar-dot" });
      }
      cell.onclick = () => {
        this.view.filterMonth = monthKey;
        this.view.filterType = "month";
        this.view.renderReviewContent();
        this.close();
      };
    }
  }
  // ── Week List: all ISO weeks of modalYear ──
  renderWeekList() {
    const { byDate } = this.getCounts();
    const currentYear = this.modalYear;
    const todayStr = window.moment().format("YYYY-MM-DD");
    const body = this.bodyEl();
    const calHeader = body.createDiv({ cls: "vocab-calendar-header" });
    const prevBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(prevBtn, "chevron-left");
    prevBtn.onclick = () => {
      this.modalYear--;
      this.renderWeekList();
    };
    calHeader.createSpan({ text: `${currentYear} \u5E74 \xB7 \u5468`, cls: "vocab-calendar-title-inline" });
    const nextBtn = calHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(nextBtn, "chevron-right");
    nextBtn.onclick = () => {
      this.modalYear++;
      this.renderWeekList();
    };
    const backBtn = calHeader.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u8FD4\u56DE\u5E74\u4EFD" } });
    (0, import_obsidian.setIcon)(backBtn, "arrow-up");
    backBtn.onclick = () => {
      this.modalMode = "year";
      this.renderContent();
    };
    const weekList = body.createDiv({ cls: "vocab-week-list" });
    const startOfYear = window.moment(`${currentYear}-01-01`);
    let cursor = startOfYear.clone().startOf("isoWeek");
    const endOfYear = window.moment(`${currentYear}-12-31`);
    const endWeek = endOfYear.clone().endOf("isoWeek");
    while (cursor.isSameOrBefore(endWeek)) {
      const weekStart = cursor.format("YYYY-MM-DD");
      const weekEnd = cursor.clone().endOf("isoWeek").format("YYYY-MM-DD");
      const weekNum = cursor.isoWeek();
      const weekYear = cursor.isoWeekYear();
      if (weekYear === currentYear || cursor.year() === currentYear) {
        let weekCount = 0;
        let d = cursor.clone();
        while (d.isSameOrBefore(cursor.clone().endOf("isoWeek"))) {
          const ds = d.format("YYYY-MM-DD");
          weekCount += byDate[ds] || 0;
          d.add(1, "day");
        }
        const row = weekList.createDiv({ cls: "vocab-week-row" });
        if (weekCount > 0)
          row.addClass(`level-${Math.min(Math.ceil(weekCount / 2), 4)}`);
        const numEl = row.createDiv({ cls: "vocab-week-num" });
        numEl.createSpan({ text: `W${weekNum}`, cls: "vocab-week-num-text" });
        const rangeEl = row.createDiv({ cls: "vocab-week-range" });
        rangeEl.createSpan({ text: `${weekStart.substring(5)} \u2014 ${weekEnd.substring(5)}`, cls: "vocab-week-range-text" });
        const countEl = row.createDiv({ cls: "vocab-week-count" });
        countEl.createSpan({ text: weekCount > 0 ? `${weekCount}` : "", cls: "vocab-week-count-text" });
        const todayM = window.moment(todayStr);
        if (todayM.isBetween(weekStart, weekEnd, null, "[]")) {
          row.addClass("is-today-week");
        }
        row.onclick = () => {
          this.view.filterWeek = weekStart;
          this.view.filterType = "week";
          this.view.renderReviewContent();
          this.close();
        };
      }
      cursor.add(1, "week");
    }
  }
  // ─── Legacy: monthly calendar grid (for Day mode) ─────
  renderCalendarGrid(container) {
    const isWeekMode = this.view.filterType === "week";
    const isMonthMode = this.view.filterType === "month";
    const isDateMode = this.view.filterType === "date";
    let refDate;
    if (isWeekMode)
      refDate = window.moment(this.view.filterWeek || void 0);
    else if (isMonthMode)
      refDate = window.moment((this.view.filterMonth || window.moment().format("YYYY-MM")) + "-01");
    else
      refDate = window.moment(this.view.filterDate || void 0);
    const calendarHeader = container.createDiv({ cls: "vocab-calendar-header" });
    const prevBtn = calendarHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(prevBtn, "chevron-left");
    prevBtn.onclick = () => {
      refDate.subtract(1, "month");
      if (isWeekMode)
        this.view.filterWeek = refDate.clone().startOf("isoWeek").format("YYYY-MM-DD");
      else if (isMonthMode)
        this.view.filterMonth = refDate.format("YYYY-MM");
      else
        this.view.filterDate = refDate.format("YYYY-MM-DD");
      this.view.filterType = isWeekMode ? "week" : isMonthMode ? "month" : "date";
      this.view.renderReviewContent();
      this.renderContent();
    };
    const title = isWeekMode ? `${refDate.format("YYYY \u5E74 MM \u6708")} \xB7 \u7B2C${refDate.isoWeek()}\u5468` : refDate.format("YYYY \u5E74 MM \u6708");
    calendarHeader.createSpan({ text: title, cls: "vocab-calendar-title-inline" });
    const nextBtn = calendarHeader.createEl("button", { cls: "vocab-btn-icon" });
    (0, import_obsidian.setIcon)(nextBtn, "chevron-right");
    nextBtn.onclick = () => {
      refDate.add(1, "month");
      if (isWeekMode)
        this.view.filterWeek = refDate.clone().startOf("isoWeek").format("YYYY-MM-DD");
      else if (isMonthMode)
        this.view.filterMonth = refDate.format("YYYY-MM");
      else
        this.view.filterDate = refDate.format("YYYY-MM-DD");
      this.view.filterType = isWeekMode ? "week" : isMonthMode ? "month" : "date";
      this.view.renderReviewContent();
      this.renderContent();
    };
    const gridWrapper = container.createDiv({ cls: "vocab-calendar-grid-wrapper" });
    const weekHeader = gridWrapper.createDiv({ cls: "vocab-calendar-week-header" });
    ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"].forEach((day) => {
      weekHeader.createSpan({ text: day, cls: "vocab-calendar-week-day" });
    });
    const grid = gridWrapper.createDiv({ cls: "vocab-calendar-grid" });
    const { byDate } = this.getCounts();
    const counts = byDate;
    const startOfMonth = refDate.clone().startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();
    const startDayOfWeek = startOfMonth.day();
    const todayStr = window.moment().format("YYYY-MM-DD");
    for (let i = 0; i < startDayOfWeek; i++) {
      grid.createDiv({ cls: "vocab-calendar-cell is-empty" });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const current = startOfMonth.clone().date(i);
      const dateStr = current.format("YYYY-MM-DD");
      const count = counts[dateStr] || 0;
      const cell = grid.createDiv({ cls: "vocab-calendar-cell" });
      if (count === 0)
        cell.addClass("level-0");
      else if (count <= 2)
        cell.addClass("level-1");
      else if (count <= 5)
        cell.addClass("level-2");
      else if (count <= 10)
        cell.addClass("level-3");
      else
        cell.addClass("level-4");
      if (dateStr === todayStr)
        cell.addClass("is-today");
      cell.createSpan({ text: i.toString(), cls: "vocab-calendar-date-text" });
      if (count > 0) {
        const dots = cell.createDiv({ cls: "vocab-calendar-dots" });
        dots.createDiv({ cls: "vocab-calendar-dot" });
      }
      cell.onclick = () => {
        this.view.filterDate = dateStr;
        this.view.filterType = "date";
        this.view.renderReviewContent();
        this.close();
      };
    }
  }
};
var ZenVocabAIView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    // ── Unified state ──
    this.currentMode = "word";
    this.isAllExpanded = false;
    this.isWordOnlyMode = false;
    this.isFocusMode = false;
    this.filterType = "week";
    this.searchQuery = "";
    this.allVocabsForCalendar = [];
    // AI state
    this.aiResults = [];
    this.isAiBusy = false;
    this.plugin = plugin;
    const today = window.moment();
    this.filterDate = today.format("YYYY-MM-DD");
    this.filterMonth = today.format("YYYY-MM");
    this.filterYear = today.format("YYYY");
    this.filterWeek = today.clone().startOf("isoWeek").format("YYYY-MM-DD");
    this.registerEvent(
      this.plugin.app.workspace.on("vocab-settings-updated", () => this.render())
    );
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "\u5FD8\xB7\u8A00 AI | ZenVocab AI";
  }
  getIcon() {
    return "lotus-pod-icon";
  }
  async onOpen() {
    await this.render();
  }
  // ─── Main Render ────────────────────────────────────
  async render() {
    const container = this.contentEl;
    container.empty();
    container.addClass("vocab-view-container");
    if (this.isWordOnlyMode)
      container.addClass("vocab-word-only-mode");
    else
      container.removeClass("vocab-word-only-mode");
    if (this.isFocusMode)
      container.addClass("vocab-focus-mode");
    else
      container.removeClass("vocab-focus-mode");
    const baseSize = this.plugin.settings.fontSize;
    container.style.setProperty("--vocab-base-size", `${baseSize}px`);
    container.style.setProperty("--vocab-font-scale", `${(baseSize / 13).toFixed(4)}`);
    await this.renderReviewContent(container);
  }
  // ─── Review Tab Content ─────────────────────────────
  async renderReviewContent(container) {
    const parent = container || this.contentEl;
    const existing = parent.querySelector(".vocab-review-content, .vocab-ai-content");
    if (existing)
      existing.remove();
    const reviewContent = parent.createDiv({ cls: "vocab-review-content" });
    const inputArea = reviewContent.createDiv({ cls: "vocab-input-section" });
    const brandHeader = inputArea.createDiv({ cls: "vocab-brand-header" });
    const titleGroup = brandHeader.createDiv();
    titleGroup.setAttribute("style", "display: flex; align-items: center; gap: 10px; flex-shrink: 0;");
    const iconDiv = titleGroup.createSpan({ cls: "vocab-brand-icon" });
    (0, import_obsidian.setIcon)(iconDiv, "lotus-pod-icon");
    const textSpan = titleGroup.createSpan({ text: "\u5FD8\xB7\u8A00 | ZenVocab AI", cls: "vocab-brand-text" });
    const modePills = brandHeader.createDiv({ cls: "vocab-mode-pills" });
    const modes = [
      { value: "word", label: "Word", title: "\u624B\u52A8\u5F55\u5165\u8BCD\u6C47" },
      { value: "sentence", label: "Sentence", title: "\u624B\u52A8\u5F55\u5165\u53E5\u5B50" }
    ];
    modes.forEach((m) => {
      const pill = modePills.createDiv({
        cls: `vocab-mode-pill ${this.currentMode === m.value ? "is-active" : ""}`,
        attr: { "aria-label": m.title }
      });
      pill.createSpan({ text: m.label, cls: "vocab-mode-pill-label" });
      pill.onclick = () => {
        if (this.currentMode !== m.value) {
          this.currentMode = m.value;
          this.aiResults = [];
          this.searchQuery = "";
          this.render();
        }
      };
    });
    this.smartTextarea = inputArea.createEl("textarea", {
      attr: { placeholder: this.currentMode === "sentence" ? "\u62FE\u53D6\u82F1\u8BED\u53E5\u5B50\u3001\u6216\u7C98\u8D34\u6BB5\u843D\u4EE5 AI \u7FFB\u8BD1..." : "\u62FE\u53D6\u5B57\u8BCD\u3001\u6216\u7C98\u8D34\u6BB5\u843D\u4EE5 AI \u89E3\u6790..." },
      cls: "vocab-smart-textarea"
    });
    const smartTextEl = this.smartTextarea;
    smartTextEl.addEventListener("paste", (e) => {
      const ce = e;
      const clipboardData = ce.clipboardData || window.clipboardData;
      if (!clipboardData)
        return;
      const paste = clipboardData.getData("text");
      if (!paste.includes("\n") && paste.length < 100)
        return;
      if (this.currentMode === "sentence") {
        if (paste.includes("\u3010\u53E5\u5B50\u7FFB\u8BD1\u3011")) {
          e.preventDefault();
          const lines = paste.split("\n");
          const origLine = lines.find((l) => l.includes("**\u539F\u6587\uFF1A**"));
          if (origLine) {
            smartTextEl.value = origLine.replace(/.*?\*\*原文：\*\*\s*/, "").replace(/\[填入用户输入的原文\]/g, "").trim();
          }
        }
        return;
      }
      if (paste.includes("\n")) {
        const lines = paste.split("\n");
        const wordLineIndex = lines.findIndex((l) => /(单词[：:]|【单词】|目标词\/词组[：:]?|【目标词】)/.test(l));
        if (wordLineIndex !== -1) {
          e.preventDefault();
          let rawWord = lines[wordLineIndex].replace(/.*?(单词[：:]|【单词】|目标词\/词组[：:]?|【目标词】)\s*/, "");
          smartTextEl.value = rawWord.replace(/[*_`]/g, "").trim();
        }
      }
    });
    const actionBar = inputArea.createDiv({ cls: "vocab-input-action-bar" });
    const searchWrapper = actionBar.createDiv({ cls: "vocab-search-wrapper" });
    const searchIconEl = searchWrapper.createDiv({ cls: "vocab-search-icon" });
    (0, import_obsidian.setIcon)(searchIconEl, "search");
    const searchInput = searchWrapper.createEl("input", {
      attr: { type: "text", placeholder: this.currentMode === "sentence" ? "\u68C0\u7D22\u53E5\u5B50/\u91CA\u4E49..." : "\u68C0\u7D22\u5355\u8BCD/\u91CA\u4E49..." },
      value: this.searchQuery,
      cls: "vocab-filter-input vocab-search-input"
    });
    const aiBtn = actionBar.createEl("button", {
      text: this.currentMode === "sentence" ? "Translate" : "Parse",
      cls: "vocab-btn-save vocab-unified-ai-btn"
    });
    aiBtn.onclick = async () => {
      const text = smartTextEl.value.trim();
      if (!text || this.isAiBusy)
        return;
      this.isAiBusy = true;
      aiBtn.style.opacity = "0.6";
      aiBtn.style.pointerEvents = "none";
      if (this.aiResultsContainer) {
        this.aiResultsContainer.empty();
        this.aiResultsContainer.style.display = "none";
      }
      this.aiResults = [];
      if (this.currentMode === "word") {
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
            } catch {
            }
          }
          if (successCount === 0 && words.length > 0) {
            new import_obsidian.Notice("\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API \u8BBE\u7F6E");
          } else if (successCount < words.length) {
            new import_obsidian.Notice(`\u5DF2\u89E3\u6790 ${successCount}/${words.length} \u4E2A\u8BCD\u6C47`);
          }
        } catch {
          new import_obsidian.Notice("\u5173\u952E\u8BCD\u63D0\u53D6\u5931\u8D25");
        } finally {
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
        } catch {
          new import_obsidian.Notice("\u7FFB\u8BD1\u89E3\u6790\u5931\u8D25");
        } finally {
          aiBtn.innerText = "Translate";
          this.isAiBusy = false;
          aiBtn.style.opacity = "1";
          aiBtn.style.pointerEvents = "auto";
        }
      }
    };
    this.aiResultsContainer = inputArea.createDiv({ cls: "vocab-ai-results-section" });
    this.aiResultsContainer.style.display = "none";
    reviewContent.createEl("hr", { cls: "vocab-divider vocab-divider-top" });
    this.allVocabsForCalendar = await this.plugin.loadVocabs(this.currentMode);
    const vocabs = this.allVocabsForCalendar;
    const headerEl = reviewContent.createDiv({ cls: "vocab-top-bar" });
    headerEl.createEl("span", { text: "\u6E29\u6545\u77E5\u65B0", cls: "vocab-list-title" });
    const toolGroup = headerEl.createDiv({ cls: "vocab-tool-group" });
    const focusBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u6C89\u6D78\u6A21\u5F0F | Focus" } });
    (0, import_obsidian.setIcon)(focusBtn, this.isFocusMode ? "minimize" : "maximize");
    focusBtn.onclick = () => {
      this.isFocusMode = !this.isFocusMode;
      this.render();
    };
    const eyeBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u7EAF\u4EAB\u6A21\u5F0F | Word-Only" } });
    (0, import_obsidian.setIcon)(eyeBtn, this.isWordOnlyMode ? "eye-off" : "eye");
    eyeBtn.onclick = () => {
      this.isWordOnlyMode = !this.isWordOnlyMode;
      this.render();
    };
    const expandBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u5C55\u5377/\u6536\u62E2" } });
    (0, import_obsidian.setIcon)(expandBtn, "chevrons-up-down");
    expandBtn.onclick = () => {
      this.isAllExpanded = !this.isAllExpanded;
      reviewContent.querySelectorAll(".vocab-meaning").forEach((m) => {
        if (this.isAllExpanded)
          m.classList.remove("is-hidden");
        else
          m.classList.add("is-hidden");
      });
    };
    const calendarBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u65F6\u7A7A\u7F57\u76D8 | Archive Panel" } });
    (0, import_obsidian.setIcon)(calendarBtn, "calendar-days");
    if (this.filterType !== "none")
      calendarBtn.style.color = "var(--vocab-accent-color, magenta)";
    calendarBtn.onclick = () => {
      new VocabCalendarModal(this.plugin.app, this).open();
    };
    const refreshBtn = toolGroup.createEl("button", { cls: "vocab-btn-icon", attr: { "aria-label": "\u62C2\u5C18" } });
    (0, import_obsidian.setIcon)(refreshBtn, "refresh-cw");
    refreshBtn.onclick = async () => {
      this.searchQuery = "";
      refreshBtn.classList.add("is-spinning");
      setTimeout(async () => {
        await this.render();
      }, 300);
    };
    let filteredVocabs = vocabs;
    if (this.filterType !== "none") {
      filteredVocabs = vocabs.filter((v) => {
        if (this.filterType === "marked")
          return v.isMarked;
        if (v.date === "\u65E9\u671F\u8BB0\u5F55")
          return false;
        if (this.filterType === "date")
          return v.date === this.filterDate;
        if (this.filterType === "week") {
          const weekStart = window.moment(this.filterWeek).startOf("isoWeek").format("YYYY-MM-DD");
          const weekEnd = window.moment(this.filterWeek).endOf("isoWeek").format("YYYY-MM-DD");
          return v.date >= weekStart && v.date <= weekEnd;
        }
        if (this.filterType === "month")
          return v.date.startsWith(this.filterMonth);
        if (this.filterType === "year")
          return v.date.startsWith(this.filterYear);
        return true;
      });
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filteredVocabs = filteredVocabs.filter(
        (v) => v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q)
      );
    }
    let contextTitle = this.currentMode === "sentence" ? "\u5168\u90E8\u53E5\u5B50" : "\u5168\u90E8\u8BCD\u6C47";
    let emptyMessage = this.currentMode === "sentence" ? "\u53E5\u5E93\u7A7A\u7A7A\uFF0C\u9759\u5F85\u843D\u7B14\u3002" : "\u8BCD\u5E93\u7A7A\u7A7A\uFF0C\u9759\u5F85\u843D\u7B14\u3002";
    if (this.filterType === "marked") {
      contextTitle = "\u91CD\u70B9\u6807\u8BB0";
      emptyMessage = this.currentMode === "sentence" ? "\u6682\u65E0\u661F\u6807\u53E5\u5B50\uFF0C\u53BB\u5217\u8868\u4E2D\u70B9\u4EAE\u661F\u661F\u5427\u3002" : "\u6682\u65E0\u661F\u6807\u8BCD\u6C47\uFF0C\u53BB\u5217\u8868\u4E2D\u70B9\u4EAE\u661F\u661F\u5427\u3002";
    } else if (this.filterType === "date") {
      contextTitle = `${this.filterDate} \u5F52\u6863`;
      emptyMessage = "\u8FD9\u4E00\u5929\u5C1A\u672A\u843D\u7B14\u3002";
    } else if (this.filterType === "week") {
      const ws = window.moment(this.filterWeek).startOf("isoWeek").format("MM/DD");
      const we = window.moment(this.filterWeek).endOf("isoWeek").format("MM/DD");
      contextTitle = `${ws} - ${we} \u5468\u5F52\u6863`;
      emptyMessage = "\u672C\u5468\u6682\u65E0\u8BB0\u5F55\u3002";
    } else if (this.filterType === "month") {
      contextTitle = `${this.filterMonth} \u6708\u5EA6\u5F52\u6863`;
      emptyMessage = "\u672C\u6708\u6682\u65E0\u8BB0\u5F55\u3002";
    } else if (this.filterType === "year") {
      contextTitle = `${this.filterYear} \u5E74\u5EA6\u7EB5\u89C8`;
      emptyMessage = "\u672C\u5E74\u6682\u65E0\u8BB0\u5F55\u3002";
    }
    if (this.searchQuery)
      contextTitle = `\u68C0\u7D22: "${this.searchQuery}"`;
    const contextHeader = reviewContent.createDiv({ cls: "vocab-context-header" });
    contextHeader.createSpan({ text: contextTitle, cls: "vocab-context-title" });
    const countBadge = contextHeader.createSpan({
      text: `\u5171 ${filteredVocabs.length} ${this.currentMode === "sentence" ? "\u53E5" : "\u8BCD"}`,
      cls: "vocab-context-count"
    });
    if (this.filterType !== "none" || this.searchQuery !== "") {
      countBadge.addClass("is-active-filter");
      countBadge.setAttribute("aria-label", "\u70B9\u51FB\u6E05\u9664\u8FC7\u6EE4");
      countBadge.onclick = () => {
        this.filterType = "none";
        this.searchQuery = "";
        this.render();
      };
    }
    const listEl = reviewContent.createDiv({ cls: "vocab-list" });
    searchInput.addEventListener("input", () => {
      this.searchQuery = searchInput.value.trim();
      const q = this.searchQuery.toLowerCase();
      const cards = listEl.querySelectorAll(".vocab-card");
      let visibleCount = 0;
      cards.forEach((card) => {
        const searchText = card.getAttribute("data-search") || "";
        if (searchText.includes(q)) {
          card.style.display = "";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });
      const headerTitle = reviewContent.querySelector(".vocab-context-title");
      const headerCount = reviewContent.querySelector(".vocab-context-count");
      if (headerTitle && headerCount) {
        if (this.searchQuery) {
          headerTitle.innerText = `\u68C0\u7D22: "${this.searchQuery}"`;
          headerCount.addClass("is-active-filter");
        } else {
          let baseTitle = this.currentMode === "sentence" ? "\u5168\u90E8\u53E5\u5B50" : "\u5168\u90E8\u8BCD\u6C47";
          if (this.filterType === "marked")
            baseTitle = "\u91CD\u70B9\u6807\u8BB0";
          else if (this.filterType === "date")
            baseTitle = `${this.filterDate} \u5F52\u6863`;
          else if (this.filterType === "week") {
            const ws = window.moment(this.filterWeek).startOf("isoWeek").format("MM/DD");
            const we = window.moment(this.filterWeek).endOf("isoWeek").format("MM/DD");
            baseTitle = `${ws} - ${we} \u5468\u5F52\u6863`;
          } else if (this.filterType === "month")
            baseTitle = `${this.filterMonth} \u6708\u5EA6\u5F52\u6863`;
          else if (this.filterType === "year")
            baseTitle = `${this.filterYear} \u5E74\u5EA6\u7EB5\u89C8`;
          headerTitle.innerText = baseTitle;
          if (this.filterType === "none")
            headerCount.removeClass("is-active-filter");
        }
        headerCount.innerText = `\u5171 ${cards.length > 0 ? visibleCount : 0} ${this.currentMode === "sentence" ? "\u53E5" : "\u8BCD"}`;
      }
      let emptyMsg = listEl.querySelector(".vocab-search-empty");
      if (visibleCount === 0 && cards.length > 0) {
        if (!emptyMsg) {
          emptyMsg = listEl.createEl("p", {
            text: this.currentMode === "sentence" ? "\u672A\u80FD\u68C0\u7D22\u5230\u76F8\u5173\u53E5\u5B50..." : "\u672A\u80FD\u68C0\u7D22\u5230\u76F8\u5173\u8BCD\u6C47...",
            cls: "vocab-empty vocab-search-empty"
          });
        }
        emptyMsg.style.display = "block";
      } else if (emptyMsg) {
        emptyMsg.style.display = "none";
      }
    });
    if (filteredVocabs.length === 0) {
      listEl.createEl("p", { text: emptyMessage, cls: "vocab-empty" });
      return;
    }
    filteredVocabs.forEach((item) => {
      const card = listEl.createDiv({ cls: "vocab-card" });
      card.setAttribute("data-search", `${item.word} ${item.meaning}`.toLowerCase());
      const cardHeader = card.createDiv({ cls: "vocab-card-header" });
      const titleArea = cardHeader.createDiv({ cls: "vocab-title-area" });
      const { phonetic, shortDef, pos, etymology } = this.extractCardPreview(item.meaning, this.currentMode);
      titleArea.createDiv({ text: item.word, cls: "vocab-word" });
      if (pos || phonetic) {
        const metaRow = titleArea.createDiv({ cls: "vocab-meta-row" });
        if (pos)
          metaRow.createSpan({ text: pos, cls: "vocab-pos-tag" });
        if (phonetic)
          metaRow.createSpan({ text: phonetic, cls: "vocab-phonetic-front" });
      }
      if (etymology)
        titleArea.createDiv({ text: etymology, cls: "vocab-etymology-preview" });
      if (shortDef)
        titleArea.createDiv({ text: shortDef, cls: "vocab-shortdef-front" });
      const actionArea = cardHeader.createDiv({ cls: "vocab-action-area" });
      const badgeGroup = actionArea.createDiv({ cls: "vocab-badge-group" });
      if (item.date !== "\u65E9\u671F\u8BB0\u5F55")
        badgeGroup.createDiv({ text: item.date, cls: "vocab-date-badge" });
      const btnGroup = actionArea.createDiv({ cls: "vocab-btn-group" });
      const speakBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-speak", attr: { "aria-label": "\u8046\u542C\u53D1\u97F3" } });
      (0, import_obsidian.setIcon)(speakBtn, "volume-2");
      speakBtn.onclick = (e) => {
        e.stopPropagation();
        const synth = window.speechSynthesis;
        if (!synth)
          return;
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(item.word);
        utterance.lang = "en-US";
        utterance.rate = 0.85;
        utterance.pitch = 1;
        synth.speak(utterance);
        speakBtn.style.transform = "scale(1.2)";
        speakBtn.style.color = "var(--vocab-accent-color, magenta)";
        setTimeout(() => {
          speakBtn.style.transform = "";
          speakBtn.style.color = "";
        }, 200);
      };
      const markBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-mark", attr: { "aria-label": item.isMarked ? "\u53D6\u6D88\u6807\u8BB0" : "\u6807\u8BB0\u91CD\u70B9" } });
      (0, import_obsidian.setIcon)(markBtn, "star");
      if (item.isMarked)
        markBtn.addClass("is-marked");
      markBtn.onclick = async (e) => {
        e.stopPropagation();
        await this.plugin.toggleWordMark(item.id, this.currentMode);
        item.isMarked = !item.isMarked;
        if (item.isMarked) {
          markBtn.classList.add("is-marked");
          markBtn.setAttribute("aria-label", "\u53D6\u6D88\u6807\u8BB0");
        } else {
          markBtn.classList.remove("is-marked");
          markBtn.setAttribute("aria-label", "\u6807\u8BB0\u91CD\u70B9");
          if (this.filterType === "marked") {
            card.style.opacity = "0.4";
            card.style.filter = "grayscale(100%)";
          }
        }
      };
      const deleteBtn = btnGroup.createEl("button", { cls: "vocab-btn-icon vocab-btn-delete", attr: { "aria-label": this.currentMode === "sentence" ? "\u5220\u9664\u53E5\u5B50" : "\u65A9\u8BCD" } });
      (0, import_obsidian.setIcon)(deleteBtn, "trash-2");
      deleteBtn.onclick = async (e) => {
        e.stopPropagation();
        const currentScroll = listEl.scrollTop;
        await this.plugin.deleteWord(item.id, this.currentMode);
        await this.render();
        setTimeout(() => {
          const newListEl = reviewContent.querySelector(".vocab-list");
          if (newListEl)
            newListEl.scrollTop = currentScroll;
        }, 15);
      };
      const meaningDiv = card.createDiv({ cls: "vocab-meaning" });
      if (!this.isAllExpanded)
        meaningDiv.classList.add("is-hidden");
      import_obsidian.MarkdownRenderer.renderMarkdown(item.meaning, meaningDiv, "", this.plugin);
      card.onclick = () => {
        const sel = window.getSelection();
        if (sel && sel.type === "Range")
          return;
        meaningDiv.classList.toggle("is-hidden");
      };
    });
  }
  // ─── Inline AI Results ─────────────────────────────
  copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => new import_obsidian.Notice("\u5DF2\u590D\u5236"));
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      new import_obsidian.Notice("\u5DF2\u590D\u5236");
    }
  }
  appendAIResultCard(cardMd) {
    if (!this.aiResultsContainer)
      return;
    this.aiResultsContainer.style.display = "block";
    const empty = this.aiResultsContainer.querySelector(".vocab-empty");
    if (empty)
      empty.remove();
    const card = this.aiResultsContainer.createDiv({ cls: "vocab-card" });
    import_obsidian.MarkdownRenderer.renderMarkdown(cardMd, card, "", this.plugin);
    const actionArea = card.createDiv({ cls: "vocab-ai-action-row" });
    const insBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "\u{1F4E5} \u5B58\u5165\u7B14\u8BB0" });
    insBtn.style.cssText = "flex: 1; min-width: 80px;";
    insBtn.onclick = () => this.plugin.insertAtCursor(cardMd);
    const cpBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "\u{1F4CB} \u590D\u5236" });
    cpBtn.style.cssText = "flex: 1; min-width: 80px;";
    cpBtn.onclick = () => this.copyToClipboard(cardMd);
    const bankBtn = actionArea.createEl("button", { cls: "vocab-btn-save", text: "\u{1F4DA} \u5B58\u5165\u8BCD\u5E93" });
    bankBtn.style.cssText = "flex: 1; min-width: 80px;";
    bankBtn.onclick = async () => {
      const { word, cleanMd } = this.extractWordAndCleanCard(cardMd);
      await this.plugin.appendWord(word, cleanMd, this.currentMode);
      bankBtn.innerText = "\u2705 \u5DF2\u5B58\u5165";
      bankBtn.style.color = "var(--vocab-accent-color, magenta)";
      new import_obsidian.Notice(`"${word}" \u5DF2\u5B58\u5165${this.currentMode === "sentence" ? "\u53E5\u5E93" : "\u8BCD\u5E93"}`);
    };
    card.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  // Robust word extraction + conversational-prefix stripping
  extractWordAndCleanCard(cardMd) {
    const lines = cardMd.split("\n");
    let word = "";
    const isSectionLabel = (w) => /[【\[\]]/.test(w) || /^(基本信息|构词法解析|常用搭配|专业领域解析|发音与拼写|含义与语境|易混淆词辨析|固定搭配|语法结构拆解|核心词汇与地道搭配|时态与语态|句子翻译|翻译思维与仿写)$/.test(w);
    for (const line of lines) {
      let m = line.match(/^###\s+[^\s]{1,6}\s+\*?\*?(?:.*?[：:]\s*)?\*?\*?(.+?)\*?\*?\s*$/);
      if (m) {
        const candidate = m[1].replace(/[*_`#]/g, "").trim();
        if (candidate && candidate.length > 1 && candidate.length < 80 && !isSectionLabel(candidate)) {
          word = candidate;
          break;
        }
      }
      m = line.match(/^###\s+[^\s]{1,6}\s+(.+?)$/);
      if (m && !word) {
        const candidate = m[1].replace(/[*_`#]/g, "").trim();
        if (candidate && candidate.length < 80 && !isSectionLabel(candidate)) {
          word = candidate;
          break;
        }
      }
      m = line.match(/^[-*]?\s*\*\*(?:单词|目标词(?:\/词组)?|核心词汇?)\s*[：:]\s*\*?\*?\s*(.+?)\s*\*?\*?\s*$/);
      if (m) {
        const candidate = m[1].replace(/[*_`#]/g, "").trim();
        if (candidate && candidate.length < 80 && !isSectionLabel(candidate)) {
          word = candidate;
          break;
        }
      }
      m = line.match(/[-*]?\s*\*\*原文[：:]\*\*\s*\*?\*?\s*(.+?)\s*\*?\*?\s*$/);
      if (m) {
        const candidate = m[1].replace(/[*_`#]/g, "").trim();
        if (candidate && candidate.length > 1 && candidate.length < 500 && !isSectionLabel(candidate)) {
          word = candidate;
          break;
        }
      }
    }
    if (!word) {
      const skipLabels = /^(原文|单词|目标词|核心词汇|音标|释义|翻译|句子翻译|时态|语法|发音|核心含义)/;
      for (const line of lines) {
        const m = line.match(/\*\*(.+?)\*\*/) || line.match(/(?:^|[^*])\*([^*]+?)\*(?:[^*]|$)/);
        if (m) {
          let candidate = m[1].trim();
          candidate = candidate.replace(/[*_`#]/g, "").trim();
          if (candidate.length > 1 && candidate.length < 200 && !skipLabels.test(candidate)) {
            word = candidate;
            break;
          }
        }
      }
    }
    if (!word) {
      const firstLine = lines.find((l) => {
        const t = l.trim();
        return t.length > 0 && !t.startsWith("```") && t.length < 200 && !/^(好的|没问题|作为|我们开始)/.test(t);
      });
      word = firstLine ? firstLine.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim().substring(0, 80) : "\u672A\u547D\u540D";
    }
    let cleanMd = cardMd;
    const headingIdx = lines.findIndex((l) => /^#{1,4}\s/.test(l));
    if (headingIdx > 0) {
      cleanMd = lines.slice(headingIdx).join("\n");
    } else {
      const boldIdx = lines.findIndex((l) => /\*\*[^*]+\*\*/.test(l) && l.trim().length > 0);
      if (boldIdx > 0 && boldIdx < 3) {
        cleanMd = lines.slice(boldIdx).join("\n");
      }
    }
    cleanMd = cleanMd.replace(/^(好的[，,]?\s*没问题[！!]\s*)?作为.*?(导师|助手|AI|语言助手)[，,]?\s*.*?\n/gim, "");
    cleanMd = cleanMd.replace(/^我们开始吧[！!]?\s*\n*/gm, "");
    cleanMd = cleanMd.replace(/^(当然[！!，,]\s*)?我很?高兴(?:为您?|地)?(?:解析|分析|帮助).*?\n/gim, "");
    cleanMd = cleanMd.replace(/^以下是对?[「「]?.+?[」」]?\s*的?(?:详细)?解析[：:]?\s*\n*/gm, "");
    cleanMd = cleanMd.replace(/^让我(?:们|来)(?:一起)?(?:看看|分析|解析).*?\n/gim, "");
    return { word, cleanMd: cleanMd.trim() };
  }
  // ─── Card preview extraction (phonetic + shortDef from raw meaning) ──
  extractCardPreview(meaning, mode) {
    let phonetic = "", shortDef = "", pos = "", etymology = "";
    const lines = meaning.split("\n");
    const debugPrefix = "[ZenVocab extractCardPreview]";
    const clean = (s) => s.replace(/[*_`#]/g, "").replace(/^[-*]\s+/, "").trim();
    if (mode === "sentence") {
      const patterns = [
        /(?:地道意译|日常沟通|高级进阶|Casual|Advanced|意译|翻译)[^：:]*[：:]\s*/
      ];
      for (const line of lines) {
        for (const pat of patterns) {
          if (pat.test(line)) {
            const candidate = clean(line.replace(pat, ""));
            if (candidate && candidate.length > 1) {
              shortDef = candidate;
              break;
            }
          }
        }
        if (shortDef)
          break;
      }
      if (!shortDef) {
        let foundYuanwen = false;
        for (const line of lines) {
          if (/原文[：:]/.test(line)) {
            foundYuanwen = true;
            continue;
          }
          if (foundYuanwen) {
            const c = clean(line);
            if (c.length > 2 && c.length < 200) {
              shortDef = c;
              break;
            }
          }
        }
      }
      if (!shortDef) {
        for (const line of lines) {
          const c = clean(line);
          if (c && !/^[#🌍⏳🧩🔗>]/.test(line.trim()) && c.length > 2) {
            shortDef = c.substring(0, 120);
            break;
          }
        }
      }
    } else {
      for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i].trim();
        const line = clean(rawLine);
        if (!line || /^(###|💎|📖|🔤)/.test(rawLine))
          continue;
        if (/^核心词汇解析[：:]/i.test(line))
          continue;
        if (!phonetic) {
          let m = rawLine.match(/(?:音标|发音|Phonetics?|Pronunciation|IPA)\s*[*_]*[：:]\s*[*_]*\s*(.+)/i);
          if (m) {
            phonetic = clean(m[1]);
            continue;
          }
          m = rawLine.match(/(?:GB|UK|BrE)\s*(?:英)?\s*\/.+?\/\s*(?:\|\s*)?(?:(?:us|US|AmE)\s*(?:美)?\s*\/.+?\/)?/i);
          if (m) {
            phonetic = m[0];
            continue;
          }
          m = rawLine.match(/^[*-]?\s*\/[^/]+\/\s*$/);
          if (m) {
            phonetic = clean(m[0]);
            continue;
          }
          m = rawLine.match(/\/[^/]{2,40}\//);
          if (m && rawLine.length < 80 && !/[📖🌍💎🔤]/.test(rawLine)) {
            phonetic = clean(rawLine).replace(/^(?:UK|US|GB|BrE|AmE)\s*/i, "");
            continue;
          }
        }
        if (!shortDef) {
          let m = rawLine.match(/(?:核心含义|核心词义|词义|释义|意思|中文释义|字义|定义|Definition)\s*[*_]*[：:]\s*(.+)/i);
          if (m) {
            shortDef = clean(m[1]);
            continue;
          }
          m = line.match(/^[（(][^)）]+[)）]\s*(.+)/);
          if (m) {
            shortDef = m[1].trim();
            continue;
          }
          m = line.match(/^\[[^\]]+\]\s*(.+)/);
          if (m) {
            shortDef = m[1].trim();
            continue;
          }
          m = line.match(/^\([^)]+\)\s*(.+)/);
          if (m) {
            shortDef = m[1].trim();
            continue;
          }
          m = line.match(/^(?:adj\.?|adjective|noun\.?|verb\.?|adv\.?|adverb|prep\.?|preposition|conj\.?|conjunction|pron\.?|pronoun|int\.?|interjection)\s*[.．。，,]\s*(.+)/i);
          if (m) {
            shortDef = m[1].trim();
            continue;
          }
          if (phonetic && i > 0) {
            let prevHasPhonetic = false;
            for (let j = Math.max(0, i - 2); j < i; j++) {
              const prev = clean(lines[j] || "");
              if (/\/[^/]+\//.test(prev) || /音标/.test(prev) || /发音/.test(prev) || /GB|UK|US|IPA/.test(prev)) {
                prevHasPhonetic = true;
                break;
              }
            }
            if (prevHasPhonetic && line.length > 1 && line.length < 200 && !/^(音标|发音|拼写|单词结构|词源|固定搭配|例句|常见搭配|易混淆|导师|核心词汇|总结|复习)/.test(line)) {
              shortDef = line.substring(0, 150);
              continue;
            }
          }
        }
        if (!pos) {
          let m = rawLine.match(/(?:词性|POS|Part of Speech)\s*[*_]*[：:]\s*(.+)/i);
          if (m) {
            pos = clean(m[1]);
            continue;
          }
        }
        if (!etymology) {
          let m = rawLine.match(/(?:字面意思|词根拆解|单词结构)\s*[*_]*[：:]\s*(.+)/i);
          if (m) {
            etymology = clean(m[1]).substring(0, 80);
            continue;
          }
        }
        if (phonetic && shortDef && pos && etymology)
          break;
      }
      if (!shortDef) {
        for (const rawLine of lines) {
          const line = clean(rawLine);
          const trimmedRaw = rawLine.trim();
          if (line.length > 2 && line.length < 200 && !/^(###|音标|发音|拼写|单词结构|词源|固定搭配|例句|常见搭配|导师|核心词汇解析|总结|复习)/.test(line) && !/^[📖🌍💎🔤#]/.test(trimmedRaw) && !/^💎|^📖|^🔤|^🌍/.test(line) && !/^\/[^/]+\/$/.test(line) && !/^[（(][^)）]+[)）]$/.test(line)) {
            shortDef = line.substring(0, 120);
            break;
          }
        }
      }
    }
    if (!phonetic || !shortDef) {
      console.log(
        `${debugPrefix} mode=${mode} phonetic="${phonetic}" shortDef="${shortDef}" pos="${pos}" etymology="${etymology}"`,
        "| meaning preview:",
        meaning.substring(0, 300)
      );
    }
    return { phonetic, shortDef, pos, etymology };
  }
};
var ZenVocabAIPlugin = class extends import_obsidian.Plugin {
  async onload() {
    (0, import_obsidian.addIcon)("lotus-pod-icon", LOTUS_POD_ICON);
    await this.loadSettings();
    this.applyTheme();
    this.addSettingTab(new ZenVocabSettingTab(this.app, this));
    this.registerView(VIEW_TYPE, (leaf) => new ZenVocabAIView(leaf, this));
    this.addRibbonIcon("lotus-pod-icon", "\u5FD8\xB7\u8A00 AI | ZenVocab AI", () => {
      this.activateView();
    });
  }
  onunload() {
    document.body.classList.remove("vocab-theme-modern", "vocab-theme-zen", "vocab-theme-dao", "vocab-theme-frog", "vocab-theme-custom", "vocab-theme-pond", "vocab-theme-dusk");
    document.body.style.removeProperty("--vocab-accent-color");
    document.body.style.removeProperty("--vocab-primary-color");
    document.body.style.removeProperty("--vocab-brand-gradient");
  }
  // ─── Theme ──────────────────────────────────────────
  applyTheme() {
    document.body.classList.remove("vocab-theme-modern", "vocab-theme-zen", "vocab-theme-dao", "vocab-theme-frog", "vocab-theme-custom", "vocab-theme-pond", "vocab-theme-dusk");
    const isCustom = this.settings.theme.startsWith("custom-");
    let accent = "#ff6b9c";
    let primary = "#92f7e6";
    let gradient = "linear-gradient(135deg, #ff6b9c, #92f7e6)";
    let themeSkeletonClass = "vocab-theme-frog";
    if (isCustom) {
      const themeData = this.settings.customThemes.find((t) => t.id === this.settings.theme);
      if (themeData) {
        themeSkeletonClass = `vocab-theme-${themeData.baseTheme || "frog"}`;
        accent = themeData.accent || accent;
        primary = themeData.secondary || primary;
        gradient = `linear-gradient(135deg, ${primary}, ${accent})`;
      }
    } else {
      themeSkeletonClass = `vocab-theme-${this.settings.theme}`;
      const themeColors = this.settings.themeColors || DEFAULT_SETTINGS.themeColors;
      const currentConfig = themeColors[this.settings.theme] || themeColors["frog"];
      accent = currentConfig.accent;
      primary = currentConfig.secondary;
      gradient = `linear-gradient(135deg, ${primary}, ${accent})`;
    }
    document.body.classList.add(themeSkeletonClass);
    document.body.style.setProperty("--vocab-accent-color", accent);
    document.body.style.setProperty("--vocab-primary-color", primary);
    document.body.style.setProperty("--vocab-brand-gradient", gradient);
  }
  // ─── View Management ────────────────────────────────
  async activateView() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = workspace.getRightLeaf(false);
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    workspace.revealLeaf(leaf);
  }
  // ─── Insert at Cursor ───────────────────────────────
  insertAtCursor(content) {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view && view.editor) {
      const cursor = view.editor.getCursor();
      view.editor.replaceRange(`
${content}
`, cursor);
      new import_obsidian.Notice("\u2705 \u5DF2\u540C\u6B65\u5230\u7B14\u8BB0");
    } else {
      const leaves = this.app.workspace.getLeavesOfType("markdown");
      const activeLeaf = leaves.find((l) => l.view instanceof import_obsidian.MarkdownView);
      if (activeLeaf && activeLeaf.view instanceof import_obsidian.MarkdownView && activeLeaf.view.editor) {
        const ed = activeLeaf.view.editor;
        ed.replaceRange(`
${content}
`, ed.getCursor());
        new import_obsidian.Notice("\u2705 \u5DF2\u540C\u6B65\u5230\u7B14\u8BB0");
      } else {
        new import_obsidian.Notice("\u26A0\uFE0F \u8BF7\u5148\u6253\u5F00\u5E76\u805A\u7126\u4E00\u4E2A\u7B14\u8BB0\u9762\u677F");
      }
    }
  }
  // ─── Vocab Bank CRUD ────────────────────────────────
  async appendWord(word, meaning, mode = "word") {
    const path = (0, import_obsidian.normalizePath)(mode === "sentence" ? this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md" : this.settings.storagePath);
    const folder = path.split("/").slice(0, -1).join("/");
    if (folder && !this.app.vault.getAbstractFileByPath(folder))
      await this.app.vault.createFolder(folder);
    let file = this.app.vault.getAbstractFileByPath(path);
    const safeWord = word.replace(/\n/g, " ");
    const safeMeaning = meaning.replace(/\\/g, "\\\\").replace(/\n/g, "\uE000");
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
    const content = `- ${safeWord} :: ${safeMeaning} :: ${window.moment().format("YYYY-MM-DD")} :: 0 :: ${id}
`;
    const title = mode === "sentence" ? "# \u53E5\u5E93 | Sentence Bank\n\n" : "# \u8BCD\u5E93 | Vocab Bank\n\n";
    if (file instanceof import_obsidian.TFile)
      await this.app.vault.append(file, content);
    else
      await this.app.vault.create(path, `${title}${content}`);
  }
  async loadVocabs(mode = "word") {
    const path = mode === "sentence" ? this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md" : this.settings.storagePath;
    let file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile))
      return [];
    const text = await this.app.vault.read(file);
    return text.split("\n").filter((l) => l.startsWith("- ") && l.includes(" :: ")).map((l) => {
      const content = l.substring(2);
      const parts = content.split(" :: ");
      if (parts.length >= 5) {
        const id = parts[parts.length - 1];
        const isMarked = parts[parts.length - 2];
        const date = parts[parts.length - 3];
        const meaning = parts.slice(1, parts.length - 3).join(" :: ");
        const word = parts[0];
        return { word, meaning: meaning.replace(/\\\\/g, "\\").replace(//g, "\n"), date, isMarked: isMarked === "1", id };
      } else {
        const lastSep = content.lastIndexOf(" :: ");
        const isMarked = lastSep >= 0 ? content.substring(lastSep + 4) : "0";
        const rest = lastSep >= 0 ? content.substring(0, lastSep) : content;
        const secondLastSep = rest.lastIndexOf(" :: ");
        const date = secondLastSep >= 0 ? rest.substring(secondLastSep + 4) : "\u65E9\u671F\u8BB0\u5F55";
        const head = secondLastSep >= 0 ? rest.substring(0, secondLastSep) : rest;
        const firstSep = head.indexOf(" :: ");
        const word = firstSep >= 0 ? head.substring(0, firstSep) : head;
        const meaning = firstSep >= 0 ? head.substring(firstSep + 4) : "";
        const id = word + "_" + date + "_" + Math.random().toString(36).substring(2, 6);
        return { word, meaning: meaning.replace(/\\n/g, "\n"), date, isMarked: isMarked === "1", id };
      }
    }).reverse();
  }
  async toggleWordMark(id, mode = "word") {
    const path = mode === "sentence" ? this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md" : this.settings.storagePath;
    let file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile))
      return;
    let text = await this.app.vault.read(file);
    let lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("- ") && lines[i].endsWith(` :: ${id}`)) {
        const content = lines[i].substring(2);
        const parts = content.split(" :: ");
        if (parts.length >= 5) {
          const oldMarked = parts[parts.length - 2];
          parts[parts.length - 2] = oldMarked === "1" ? "0" : "1";
          lines[i] = `- ${parts.join(" :: ")}`;
        }
        break;
      }
    }
    await this.app.vault.modify(file, lines.join("\n"));
  }
  async deleteWord(id, mode = "word") {
    const path = mode === "sentence" ? this.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md" : this.settings.storagePath;
    let file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile))
      return;
    let text = await this.app.vault.read(file);
    let lines = text.split("\n").filter((l) => {
      if (!l.startsWith("- "))
        return true;
      return !l.endsWith(` :: ${id}`);
    });
    await this.app.vault.modify(file, lines.join("\n"));
  }
  // ─── AI API Methods ─────────────────────────────────
  async extractKeywords(text) {
    const inputWordCount = text.trim().split(/[\s,，.。\n]+/).filter((w) => w.length > 0).length;
    const targetWordCount = Math.min(inputWordCount, this.settings.wordCount);
    const response = await (0, import_obsidian.requestUrl)({
      url: this.getCleanUrl(),
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.settings.apiKey.trim()}` },
      body: JSON.stringify({
        model: this.settings.model,
        messages: [
          { role: "system", content: `\u4F60\u662F\u82F1\u8BED\u8BCD\u6C47\u4E13\u5BB6\u3002\u4ECE\u7528\u6237\u8F93\u5165\u4E2D\u63D0\u53D6\u81F3\u591A ${targetWordCount} \u4E2A\u6700\u503C\u5F97\u5B66\u4E60\u7684\u6838\u5FC3\u8BCD\u6C47\u3002\u{1F6D1} \u4E25\u683C\u4ECE\u539F\u6587\u4E2D\u63D0\u53D6\u7528\u6237\u5B9E\u9645\u4F7F\u7528\u7684\u5355\u8BCD\uFF0C\u7981\u6B62\u66FF\u6362\u4E3A\u8FD1\u4E49\u8BCD\u3002\u4EC5\u8F93\u51FA\u5355\u8BCD\uFF0C\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\u3002` },
          { role: "user", content: text }
        ]
      })
    });
    return response.json.choices[0].message.content.split(/[,，\n]+/).map((w) => w.trim()).filter((w) => w.length > 0);
  }
  async fetchCardParsing(word, context) {
    const response = await (0, import_obsidian.requestUrl)({
      url: this.getCleanUrl(),
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.settings.apiKey.trim()}` },
      body: JSON.stringify({
        model: this.settings.model,
        max_tokens: 4096,
        temperature: 0.8,
        messages: [
          { role: "system", content: this.settings.systemPrompt },
          { role: "user", content: `\u89E3\u6790\uFF1A\u3010${word}\u3011
\u8BED\u5883\uFF1A${context}` }
        ]
      })
    });
    return response.json.choices[0].message.content;
  }
  async fetchTranslation(text) {
    const response = await (0, import_obsidian.requestUrl)({
      url: this.getCleanUrl(),
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${this.settings.apiKey.trim()}` },
      body: JSON.stringify({
        model: this.settings.model,
        max_tokens: 4096,
        temperature: 0.8,
        messages: [
          { role: "system", content: this.settings.transSystemPrompt },
          { role: "user", content: `\u8BF7\u5BF9\u4EE5\u4E0B\u5185\u5BB9\u8FDB\u884C\u6DF1\u5EA6\u7FFB\u8BD1\u89E3\u6790\uFF1A

${text}` }
        ]
      })
    });
    return response.json.choices[0].message.content;
  }
  getCleanUrl() {
    let url = this.settings.baseUrl.trim();
    if (url.endsWith("/chat/completions"))
      return url;
    return `${url.replace(/\/$/, "")}/chat/completions`;
  }
  // ─── Settings ───────────────────────────────────────
  async loadSettings() {
    const loadedData = await this.loadData() || {};
    this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData);
    this.settings.themeColors = Object.assign({}, DEFAULT_SETTINGS.themeColors, loadedData.themeColors || {});
    const CURRENT_PROMPT_VERSION = DEFAULT_SETTINGS.promptVersion;
    if ((loadedData.promptVersion || 0) < CURRENT_PROMPT_VERSION) {
      this.settings.systemPrompt = DEFAULT_SETTINGS.systemPrompt;
      this.settings.transSystemPrompt = DEFAULT_SETTINGS.transSystemPrompt;
      this.settings.promptVersion = CURRENT_PROMPT_VERSION;
      await this.saveSettings();
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var QRCodeModal = class extends import_obsidian.Modal {
  constructor(app, title, imgFile) {
    super(app);
    this.title = title;
    this.imgFile = imgFile;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("vocab-qrcode-modal");
    contentEl.createEl("h3", { text: this.title, cls: "vocab-qrcode-title" });
    const imgWrapper = contentEl.createDiv({ cls: "vocab-qrcode-img-wrapper" });
    try {
      const vaultRelativePath = `.obsidian/plugins/obsidian-zen-vocab-ai/${this.imgFile}`;
      const arrayBuffer = await this.app.vault.adapter.readBinary(vaultRelativePath);
      const bytes = new Uint8Array(arrayBuffer);
      const chunks = [];
      const CHUNK = 8192;
      for (let i = 0; i < bytes.length; i += CHUNK) {
        chunks.push(String.fromCharCode(...bytes.slice(i, i + CHUNK)));
      }
      const base64 = btoa(chunks.join(""));
      imgWrapper.createEl("img", {
        attr: { src: `data:image/png;base64,${base64}`, alt: this.title },
        cls: "vocab-qrcode-img"
      });
    } catch (e) {
      imgWrapper.createEl("p", {
        text: `\u65E0\u6CD5\u52A0\u8F7D\u6536\u6B3E\u7801\u56FE\u7247 "${this.imgFile}"\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u5B58\u5728\u4E8E\u63D2\u4EF6\u76EE\u5F55\u4E0B\u3002`,
        cls: "vocab-qrcode-error"
      });
      console.error("[ZenVocab] QR load error:", e);
    }
    contentEl.createEl("p", {
      text: "\u8BF7\u4F7F\u7528\u5BF9\u5E94\u7684 App \u626B\u7801\u8D5E\u8D4F \u{1F64F}",
      cls: "vocab-qrcode-hint"
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
var ZenVocabSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "\u5FD8\xB7\u8A00 AI | Settings" });
    containerEl.createEl("h3", { text: "\u{1F3A8} \u4E3B\u9898\u4E0E\u5916\u89C2 | Appearance", cls: "vocab-settings-header" });
    new import_obsidian.Setting(containerEl).setName("\u4E3B\u9898\u98CE\u683C | Theme Style").addDropdown((drop) => {
      drop.addOption("frog", "\u{1F438} \u5C0F\u9752\u86D9 | Frog").addOption("pond", "\u{1F33F} \u8584\u8377\u6C60\u5858 | Pond").addOption("dusk", "\u{1F319} \u591C\u8272\u6C60\u5858 | Dusk");
      this.plugin.settings.customThemes.forEach((t) => {
        drop.addOption(t.id, `\u81EA\u5B9A\u4E49 | ${t.name}`);
      });
      drop.setValue(this.plugin.settings.theme).onChange(async (value) => {
        this.plugin.settings.theme = value;
        await this.plugin.saveSettings();
        this.plugin.applyTheme();
        this.plugin.app.workspace.trigger("vocab-settings-updated");
        this.display();
      });
    });
    const activeTheme = this.plugin.settings.theme;
    const isBuiltIn = !activeTheme.startsWith("custom-");
    if (isBuiltIn) {
      const themeNames = {
        "frog": "\u{1F438} \u5C0F\u9752\u86D9 | Frog",
        "pond": "\u{1F33F} \u8584\u8377\u6C60\u5858 | Pond",
        "dusk": "\u{1F319} \u591C\u8272\u6C60\u5858 | Dusk"
      };
      containerEl.createEl("h4", { text: `${themeNames[activeTheme]} - \u4E3B\u9898\u914D\u8272` });
      new import_obsidian.Setting(containerEl).setName("\u4E3B\u8272\u8C03 (Accent)").addColorPicker((color) => color.setValue(this.plugin.settings.themeColors[activeTheme].accent).onChange(async (v) => {
        this.plugin.settings.themeColors[activeTheme].accent = v;
        await this.plugin.saveSettings();
        this.plugin.applyTheme();
        this.plugin.app.workspace.trigger("vocab-settings-updated");
      }));
      new import_obsidian.Setting(containerEl).setName("\u8F85\u52A9\u8272 (Secondary/Primary)").addColorPicker((color) => color.setValue(this.plugin.settings.themeColors[activeTheme].secondary).onChange(async (v) => {
        this.plugin.settings.themeColors[activeTheme].secondary = v;
        await this.plugin.saveSettings();
        this.plugin.applyTheme();
        this.plugin.app.workspace.trigger("vocab-settings-updated");
      }));
    }
    new import_obsidian.Setting(containerEl).setName("\u5B57\u4F53\u5927\u5C0F | Font Size").addSlider((slider) => slider.setLimits(12, 24, 1).setValue(this.plugin.settings.fontSize).setDynamicTooltip().onChange(async (value) => {
      this.plugin.settings.fontSize = value;
      await this.plugin.saveSettings();
      this.plugin.app.workspace.trigger("vocab-settings-updated");
    }));
    containerEl.createEl("h4", { text: "\u8272\u5F69\u5DE5\u574A | Custom Themes" });
    new import_obsidian.Setting(containerEl).setName("\u65B0\u589E\u8C03\u8272\u677F").setDesc("\u81EA\u52A8\u7EE7\u627F\u5F53\u524D\u9009\u4E2D\u4E3B\u9898\u7684\u914D\u8272\u4E0E\u52A8\u753B\u5E03\u5C40\uFF0C\u521B\u5EFA\u4E13\u5C5E\u4E3B\u9898\u3002").addButton((btn) => btn.setButtonText("\u6DFB\u52A0\u4E3B\u9898").onClick(async () => {
      let currentAccent, currentSecondary, currentBaseTheme;
      if (activeTheme.startsWith("custom-")) {
        const t = this.plugin.settings.customThemes.find((x) => x.id === activeTheme);
        currentAccent = t ? t.accent : "#ff6b9c";
        currentSecondary = t ? t.secondary : "#92f7e6";
        currentBaseTheme = t && t.baseTheme ? t.baseTheme : "frog";
      } else {
        const t = this.plugin.settings.themeColors[activeTheme];
        currentAccent = t ? t.accent : "#ff6b9c";
        currentSecondary = t ? t.secondary : "#92f7e6";
        currentBaseTheme = activeTheme;
      }
      const newId = `custom-${Date.now()}`;
      this.plugin.settings.customThemes.push({
        id: newId,
        name: "\u65B0\u4E3B\u9898",
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
      new import_obsidian.Setting(containerEl).setName("\u81EA\u5B9A\u4E3B\u9898\u914D\u7F6E").addText((text) => text.setPlaceholder("\u4E3B\u9898\u540D\u79F0").setValue(theme.name).onChange(async (v) => {
        theme.name = v || "\u672A\u547D\u540D";
        await this.plugin.saveSettings();
      })).addColorPicker((color) => color.setValue(theme.accent).onChange(async (v) => {
        theme.accent = v;
        await this.plugin.saveSettings();
        if (this.plugin.settings.theme === theme.id) {
          this.plugin.applyTheme();
          this.plugin.app.workspace.trigger("vocab-settings-updated");
        }
      })).addColorPicker((color) => color.setValue(theme.secondary).onChange(async (v) => {
        theme.secondary = v;
        await this.plugin.saveSettings();
        if (this.plugin.settings.theme === theme.id) {
          this.plugin.applyTheme();
          this.plugin.app.workspace.trigger("vocab-settings-updated");
        }
      })).addExtraButton((btn) => btn.setIcon("trash").setTooltip("\u5220\u9664\u8BE5\u4E3B\u9898").onClick(async () => {
        this.plugin.settings.customThemes.splice(index, 1);
        if (this.plugin.settings.theme === theme.id) {
          this.plugin.settings.theme = "frog";
        }
        await this.plugin.saveSettings();
        this.plugin.applyTheme();
        this.display();
      }));
    });
    containerEl.createEl("h3", { text: "\u{1F4BE} \u6570\u636E\u5B58\u50A8 | Data Storage", cls: "vocab-settings-header" });
    new import_obsidian.Setting(containerEl).setName("\u8BCD\u6C47\u5B58\u50A8\u8DEF\u5F84 | Vocab Storage Path").addText((text) => text.setValue(this.plugin.settings.storagePath).onChange(async (value) => {
      this.plugin.settings.storagePath = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("\u53E5\u5B50\u5B58\u50A8\u8DEF\u5F84 | Sentence Storage Path").addText((text) => text.setValue(this.plugin.settings.sentenceStoragePath || "Vocab/Sentence_Bank.md").onChange(async (value) => {
      this.plugin.settings.sentenceStoragePath = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "\u{1F916} AI \u8BBE\u7F6E | AI Settings", cls: "vocab-settings-header" });
    new import_obsidian.Setting(containerEl).setName("API Key").setDesc("DeepSeek \u6216\u5176\u4ED6 OpenAI \u517C\u5BB9 API \u7684\u5BC6\u94A5").addText((t) => {
      t.setValue(this.plugin.settings.apiKey).onChange(async (v) => {
        this.plugin.settings.apiKey = v;
        await this.plugin.saveSettings();
      });
      t.inputEl.type = "password";
    });
    new import_obsidian.Setting(containerEl).setName("Base URL").setDesc("API \u7AEF\u70B9\u5730\u5740").addText((t) => t.setValue(this.plugin.settings.baseUrl).onChange(async (v) => {
      this.plugin.settings.baseUrl = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Model").addText((t) => t.setValue(this.plugin.settings.model).onChange(async (v) => {
      this.plugin.settings.model = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("\u63D0\u53D6\u5355\u8BCD\u6570\u91CF").setDesc("\u6BCF\u6B21\u89E3\u6790\u6587\u732E\u6BB5\u843D\u65F6\u63D0\u53D6\u7684\u6838\u5FC3\u8BCD\u6C47\u4E2A\u6570").addDropdown((d) => d.addOption("3", "3 \u4E2A (\u9ED8\u8BA4)").addOption("5", "5 \u4E2A").addOption("8", "8 \u4E2A").addOption("10", "10 \u4E2A").setValue(String(this.plugin.settings.wordCount || 3)).onChange(async (v) => {
      this.plugin.settings.wordCount = Number(v);
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Vocab AI \u63D0\u793A\u8BCD").setDesc("\u81EA\u5B9A\u4E49\u8BCD\u6C47\u89E3\u6790\u89C4\u5219 (System Prompt)").addTextArea((t) => {
      t.setValue(this.plugin.settings.systemPrompt).onChange(async (v) => {
        this.plugin.settings.systemPrompt = v;
        await this.plugin.saveSettings();
      });
      t.inputEl.rows = 6;
      t.inputEl.style.width = "100%";
    }).addExtraButton((btn) => btn.setIcon("reset").setTooltip("\u6062\u590D\u9ED8\u8BA4\u63D0\u793A\u8BCD").onClick(async () => {
      this.plugin.settings.systemPrompt = DEFAULT_SETTINGS.systemPrompt;
      await this.plugin.saveSettings();
      this.display();
    }));
    new import_obsidian.Setting(containerEl).setName("Trans AI \u63D0\u793A\u8BCD").setDesc("\u81EA\u5B9A\u4E49\u53E5\u5B50\u7FFB\u8BD1\u89E3\u6790\u89C4\u5219 (System Prompt)").addTextArea((t) => {
      t.setValue(this.plugin.settings.transSystemPrompt).onChange(async (v) => {
        this.plugin.settings.transSystemPrompt = v;
        await this.plugin.saveSettings();
      });
      t.inputEl.rows = 10;
      t.inputEl.style.width = "100%";
    }).addExtraButton((btn) => btn.setIcon("reset").setTooltip("\u6062\u590D\u9ED8\u8BA4\u63D0\u793A\u8BCD").onClick(async () => {
      this.plugin.settings.transSystemPrompt = DEFAULT_SETTINGS.transSystemPrompt;
      await this.plugin.saveSettings();
      this.display();
    }));
    containerEl.createEl("h3", { text: "\u2615 \u652F\u6301\u5F00\u53D1 | Buy Me a Coffee", cls: "vocab-settings-header" });
    const donateSection = containerEl.createDiv({ cls: "vocab-donate-section" });
    donateSection.createEl("p", {
      text: "\u5982\u679C \u5FD8\xB7\u8A00 AI \u5BF9\u4F60\u7684\u82F1\u8BED\u5B66\u4E60\u6709\u5E2E\u52A9\uFF0C\u8BF7\u6211\u559D\u676F\u5496\u5561\u5427 \u2615",
      cls: "vocab-donate-text"
    });
    const btnGroup = donateSection.createDiv({ cls: "vocab-donate-btn-group" });
    const coffeeBtn = btnGroup.createEl("button", {
      cls: "vocab-btn-save vocab-donate-btn",
      text: "\u2615 Buy Me a Coffee"
    });
    coffeeBtn.style.cssText = "margin-right: 8px;";
    coffeeBtn.onclick = () => {
      window.open("https://buymeacoffee.com/krisztiantsui", "_blank");
    };
    const alipayBtn = btnGroup.createEl("button", {
      cls: "vocab-btn-save vocab-donate-btn",
      text: "\u{1F499} \u652F\u4ED8\u5B9D"
    });
    alipayBtn.style.cssText = "margin-right: 8px;";
    alipayBtn.onclick = () => {
      new QRCodeModal(this.app, "\u{1F499} \u652F\u4ED8\u5B9D\u8D5E\u8D4F", "assets/.qrcode-a.png").open();
    };
    const wechatBtn = btnGroup.createEl("button", {
      cls: "vocab-btn-save vocab-donate-btn",
      text: "\u{1F49A} \u5FAE\u4FE1\u8D5E\u8D4F"
    });
    wechatBtn.onclick = () => {
      new QRCodeModal(this.app, "\u{1F49A} \u5FAE\u4FE1\u8D5E\u8D4F", "assets/.qrcode-w.png").open();
    };
    donateSection.createEl("p", {
      text: "\u611F\u8C22\u4F60\u7684\u652F\u6301\uFF01\u6BCF\u4E00\u4EFD\u5FC3\u610F\u90FD\u662F\u6211\u6301\u7EED\u66F4\u65B0\u7684\u52A8\u529B \u{1F4AA}",
      cls: "vocab-donate-thanks"
    });
  }
};
