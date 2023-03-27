import { defineConfig } from "vitepress";
import { inject } from "@vercel/analytics";
const currentYear: number = new Date().getFullYear();
inject();
export default defineConfig({
  title: "ChatGPT 提示语",
  description:
    "欢迎来到 ChatGPT 提示语大全，这里汇集了丰富的 ChatGPT 提示语、创意写作灵感与实用技巧。让我们帮助您激发无限创意，提升写作效率与质量。立即探索吧！",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://cdn.fresns.cn/wiki/chatgpt/logo.png",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "ChatGPT 提示语大全" }],
    ["meta", { property: "og:description", content: "ChatGPT 提示语大全" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://cdn.fresns.cn/wiki/chatgpt/og-image.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://prompts.testcode.icu" }],
  ],

  themeConfig: {
    logo: "https://cdn.fresns.cn/wiki/chatgpt/logo.png",

    nav: [
      { text: "首页", link: "/" },
      {
        text: "提示语",
        link: "/general/translation",
        activeMatch: `^/(general|life|it|cultural)/`,
      },
      { text: "更新日志", link: "/changelog" },
    ],

    sidebar: [
      {
        text: "通用技能",
        collapsed: false,
        items: [
          { text: "翻译", link: "/general/translation" },
          { text: "办公", link: "/general/office" },
          { text: "学习", link: "/general/learn" },
        ],
      },
      {
        text: "生活类",
        collapsed: false,
        items: [
          { text: "聊天", link: "/life/chat" },
          { text: "帮手", link: "/life/helper.md" },
          { text: "旅游", link: "/life/travel" },
        ],
      },
      {
        text: "科技类",
        collapsed: false,
        items: [
          { text: "产品", link: "/it/product" },
          { text: "设计", link: "/it/design" },
          { text: "技术", link: "/it/technology" },
          { text: "运营", link: "/it/operation" },
        ],
      },
      {
        text: "文创类",
        collapsed: false,
        items: [
          { text: "音乐", link: "/cultural/music" },
          { text: "稿件", link: "/cultural/article" },
        ],
      },
      {
        text: "医学类",
        collapsed: false,
        items: [{ text: "医生", link: "/medicine/doctor" }],
      },
    ],

    footer: {
      message: "Released under the CC0-1.0 License.",
      copyright: `Copyright © ${currentYear} <a href="https://bento.me/constself" target="_blank">constself</a>`,
    },

    outlineTitle: "本页导览",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "深色模式",

    editLink: {
      pattern:
        "https://github.com/constself/chatgpt-prompts/blob/main/docs/:path",
      text: "为此页贡献新提示语",
    },

    lastUpdatedText: "最后一次更新",

    docFooter: {
      prev: "上一项",
      next: "下一项",
    },

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/coderselfc" },
      { icon: "github", link: "https://github.com/constself/chgpt-prompts" },
    ],
  },
});
