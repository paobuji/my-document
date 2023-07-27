import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right';

export default defineUserConfig({
    port: 9000,
    title: '笔记',
    lang: 'zh-CN',
    base: '/my-document/',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    plugins: [vuepressPluginAnchorRight()],
    theme: defaultTheme({
        logo: '/images/logo.png',
        sidebarDepth: 1,
        repo: 'paobuji/my-document',
        navbar: [
            {
                text: '英文单词', children: [
                    { text: '学习单词', link: '/word/word' },
                    { text: '日常单词', link: '/word/dailyword' },
                ]
            },
            {
                text: '代码片段', children: [
                    { text: '代码片段', link: '/snippet/handsomecode' },
                ]
            },
            {
                text: '目标', children: [
                    { text: '目标1', link: '/needstudy/goal1' },
                    { text: '目标2', link: '/needstudy/goal2' },
                    { text: '无聊时候的目标', link: '/needstudy/goal3' },
                    { text: '资源网站', link: '/needstudy/resources' },
                ]
            },
        ],
        sidebar: [
            {
                text: '写点正经八百的文章',
                collapsible: true,
                children: ['/article/async-await', '/article/prototype', '/article/datatype', '/article/unknowncode', '/article/interview']
            },
            {
                text: '代码片段',
                collapsible: true,
                children: ['/snippet/element', '/snippet/echarts', '/snippet/handsomecode', '/snippet/scattered-snippet']
            },
            {
                text: '前端',
                collapsible: true,
                children: ['/front/scattered-notes', '/tool/naming',]
            },
            {
                text: 'react',
                collapsible: true,
                children: ['/react/react', '/react/react-goal']
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
                children: ['/tool/tool', '/tool/happy', '/tool/web-site', '/tool/lifetime', '/tool/excellent', '/tool/majiang']
            },
        ]
    })
})