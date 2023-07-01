import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    port: 9000,
    title: '笔记',
    lang: 'zh-CN',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    plugins: [
        docsearchPlugin({
            rateLimit: 8,
            maxDepth: 10,
            maxUrls: 5000,
            startUrls: ["https://paobuji.github.io/"],
            renderJavaScript: false,
            sitemaps: ["https://paobuji.github.io/sitemap.xml"],
            ignoreCanonicalTo: true,
            discoveryPatterns: ["https://paobuji.github.io/**"],
            schedule: "at 13:39 on Thursday",
            actions: [
                {
                    indexName: "paobujiio",
                    pathsToMatch: ["https://paobuji.github.io/**"],
                    recordExtractor: ({ $, helpers }) => {
                        // @vuepress/theme-default 的选项
                        return helpers.docsearch({
                            recordProps: {
                                lvl0: {
                                    selectors: ".sidebar-heading",
                                    defaultValue: "Documentation",
                                },
                                lvl1: ".theme-default-content h1",
                                lvl2: ".theme-default-content h2",
                                lvl3: ".theme-default-content h3",
                                lvl4: ".theme-default-content h4",
                                lvl5: ".theme-default-content h5",
                                lvl6: ".theme-default-content h6",
                                content: ".theme-default-content p, .theme-default-content li",
                            },
                            indexHeadings: true,
                        });
                    },
                },
            ],
            safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },
            initialIndexSettings: {
                paobujiio: {
                    attributesForFaceting: ["type", "lang", "language", "version"],
                    attributesToRetrieve: [
                        "hierarchy",
                        "content",
                        "anchor",
                        "url",
                        "url_without_anchor",
                        "type",
                    ],
                    attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
                    attributesToSnippet: ["content:10"],
                    camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
                    searchableAttributes: [
                        "unordered(hierarchy_radio_camel.lvl0)",
                        "unordered(hierarchy_radio.lvl0)",
                        "unordered(hierarchy_radio_camel.lvl1)",
                        "unordered(hierarchy_radio.lvl1)",
                        "unordered(hierarchy_radio_camel.lvl2)",
                        "unordered(hierarchy_radio.lvl2)",
                        "unordered(hierarchy_radio_camel.lvl3)",
                        "unordered(hierarchy_radio.lvl3)",
                        "unordered(hierarchy_radio_camel.lvl4)",
                        "unordered(hierarchy_radio.lvl4)",
                        "unordered(hierarchy_radio_camel.lvl5)",
                        "unordered(hierarchy_radio.lvl5)",
                        "unordered(hierarchy_radio_camel.lvl6)",
                        "unordered(hierarchy_radio.lvl6)",
                        "unordered(hierarchy_camel.lvl0)",
                        "unordered(hierarchy.lvl0)",
                        "unordered(hierarchy_camel.lvl1)",
                        "unordered(hierarchy.lvl1)",
                        "unordered(hierarchy_camel.lvl2)",
                        "unordered(hierarchy.lvl2)",
                        "unordered(hierarchy_camel.lvl3)",
                        "unordered(hierarchy.lvl3)",
                        "unordered(hierarchy_camel.lvl4)",
                        "unordered(hierarchy.lvl4)",
                        "unordered(hierarchy_camel.lvl5)",
                        "unordered(hierarchy.lvl5)",
                        "unordered(hierarchy_camel.lvl6)",
                        "unordered(hierarchy.lvl6)",
                        "content",
                    ],
                    distinct: true,
                    attributeForDistinct: "url",
                    customRanking: [
                        "desc(weight.pageRank)",
                        "desc(weight.level)",
                        "asc(weight.position)",
                    ],
                    ranking: [
                        "words",
                        "filters",
                        "typo",
                        "attribute",
                        "proximity",
                        "exact",
                        "custom",
                    ],
                    highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
                    highlightPostTag: "</span>",
                    minWordSizefor1Typo: 3,
                    minWordSizefor2Typos: 7,
                    allowTyposOnNumericTokens: false,
                    minProximity: 1,
                    ignorePlurals: true,
                    advancedSyntax: true,
                    attributeCriteriaComputedByMinProximity: true,
                    removeWordsIfNoResults: "allOptional",
                },
            },
            appId: "XDPYIOVK7C",
            apiKey: "0da95687083b2f44f3eaff73d4dd4143",
            indexName: "paobujiio",
        }),
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        sidebarDepth: 1,
        navbar: [
            {
                text: '英文单词', children: [
                    { text: '学习单词', link: '/word/word' },
                    { text: '日常单词', link: '/word/dailyword' },
                    { text: '日期', link: '/word/date' },
                ]
            },
            {
                text: '目标', children: [
                    { text: '目标1', link: '/needstudy/goal1' },
                    { text: '目标2', link: '/needstudy/goal2' },
                    { text: '无聊时候的目标', link: '/needstudy/goal3' },
                ]
            },
            { text: '剪辑', link: '/tool/montage' }
        ],
        sidebar: [
            {
                text: '写点正经八百的文章',
                collapsible: true,
                children: ['/article/async-await']
            },
            {
                text: '代码片段',
                collapsible: true,
                children: ['/snippet/element', '/snippet/echarts', '/snippet/handsomecode', '/snippet/scattered-snippet']
            },
            {
                text: '前端',
                collapsible: true,
                children: ['/front/scattered-notes']
            },
            {
                text: '后端',
                collapsible: true,
                children: ['/java/java', '/java/linux']
            },
            {
                text: 'NodeJS',
                collapsible: true,
                children: ['/nodejs/nodejs']
            },
            {
                text: 'HTTP协议',
                collapsible: true,
                children: ['/httpprotocol/http']
            },
            {
                text: '编程助手',
                collapsible: true,
                children: ['/tool/tool', '/tool/excellent','/tool/happy', '/tool/web-site']
            },
        ]
    })
})