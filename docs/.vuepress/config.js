import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";

export default defineUserConfig({
  port: 9000,
  title: "笔记",
  lang: "zh-CN",
  base: "/my-document/",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  plugins: [],
  theme: defaultTheme({
    logo: "/images/logo.png",
    sidebarDepth: 1,
    repo: "paobuji/my-document",
    editLink: false,
    navbar: [
      {
        text: "学习笔记",
        children: [
          { text: "前端", link: "/front/array" },
          { text: "java", link: "/java/java" },
          { text: "写点可能用的上的文章", link: "/article/async-await" },
          { text: "代码片段", link: "/snippet/element" },
          { text: "react", link: "/react/react" },
        ],
      },
      {
        text: "英文单词",
        children: [
          { text: "单词1", link: "/word/word1" },
          { text: "日常单词", link: "/word/dailyword" },
          { text: "单词2", link: "/word/word2" },
        ],
      },
      {
        text: "代码片段",
        link: "/snippet/handsomecode",
      },
      {
        text: "编程助手",
        link: "/tool/tool",
      },
      {
        text: "目标",
        children: [
          { text: "目标1", link: "/needstudy/goal1" },
          { text: "目标2", link: "/needstudy/goal2" },
          { text: "无聊时候的目标3", link: "/needstudy/goal3" },
          { text: "目标4", link: "/needstudy/goal4" },
          { text: "资源网站", link: "/needstudy/resources" },
        ],
      },
    ],
    sidebar: {
      "/front/": [
        {
          text: "前端",
          children: ["/front/array", "/front/scattered-notes", "/front/naming"],
        },
      ],
      "/java/": [
        {
          text: "后端",
          children: ["/java/java", "/java/linux"],
        },
      ],
      "/article/": [
        {
          text: "写点正经八百的文章",
          children: [
            "/article/interview",
            "/article/async-await",
            "/article/unknowncode",
            "/article/git",
          ],
        },
      ],
      "/snippet": [
        {
          text: "代码片段",
          children: [
            "/snippet/element",
            "/snippet/echarts",
            "/snippet/handsomecode",
            "/snippet/scattered-snippet",
          ],
        },
      ],
      "/react/": [
        {
          text: "react",
          children: ["/react/react", "/react/react-goal"],
        },
      ],
      "/tool/": [
        {
          text: "编程助手",
          children: [
            "/tool/tool",
            "/tool/happy",
            "/tool/lifetime",
            "/tool/sentence",
          ],
        },
      ],
    },
  }),
});
