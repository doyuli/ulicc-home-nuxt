export default defineAppConfig({
    siteConfig: {
        // 站点名称
        siteName: '阿哦的主页',
        // 站点描述
        siteDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
        // 站点关键词
        siteKeywords: '阿哦的主页,个人站点',
        // 首页头像装饰
        siteLogo: '',
        // 首页域名装饰
        stieDomain: ['example', 'cn'],
        // 页脚icp备案
        author: '阿哦',
        // 页脚icp备案
        icp: '',
        // 建站日期
        siteStart: '',
        // 加载完成控制台输出文本
        consoleText: '启动成功',
    },
    // 站点链接
    webLinks: [
        {
            icon: 'bxl:bootstrap',
            name: '博客',
            link: 'https://b.example.cn/'
        },
        {
            icon: 'bxl:pinterest',
            name: '音乐',
            link: 'https://music.example.cn/'
        },
        {
            icon: 'bxl:pinterest',
            name: 'Caht',
            link: 'https://chat.example.cn'
        },
        {
            icon: 'bxl:linkedin-square',
            name: '关于',
            link: 'https://b.example.cn/custom/about'
        },
        {
            icon: 'bxl:microsoft-teams',
            name: 'Tops',
            link: 'https://o.example.cn/'
        },
        {
            icon: 'bxl:skype',
            name: 'Balance',
            link: 'https://chat.example.cn/balance'
        }
    ],
    // 社交链接
    socialLinks: [
        {
            name: 'Github',
            icon: 'image/icon/github.png',
            tip: '去 Github 看看',
            url: 'https://github.com/example'
        },
        {
            name: "Gitee",
            icon: "image/icon/gitee.png",
            tip: "去 Gitee 看看",
            url: "https://gitee.com/example"
        },
        {
            name: 'Email',
            icon: 'image/icon/email.png',
            tip: '来封 Email ~',
            url: 'example.com'
        },
        {
            name: "Telegram",
            icon: "image/icon/telegram.png",
            tip: "你懂的 ~",
            url: "https://t.me/example"
        },
        {
            name: 'QQ',
            icon: 'image/icon/qq.png',
            tip: '有什么事吗',
            url: 'https://res.abeim.cn/api/qq/?qq=example'
        },
    ]
})
