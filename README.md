# ulicc-home-nuxt

> 一个基于 Nuxt 的个人首页站点

## 🎉 功能

- 📱 移动端适配
- ✨ 每日一言
- 🌓 实时天气查看
- 🎵 内置音乐播放器
- 🎨 鼠标中键弹出壁纸展示模式 

## ⚙️ 配置
> 请修改项目 `/.env.example` `/app.config.example.ts` 文件，并去掉 .example 标识

```js
// 站点配置
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
webLinks: [],
// 社交链接
socialLinks: []
```

## 📦️ 运行

> 请尽量拉取最新分支后使用本地构建方式，在线部署的仓库可能更新不及时

```bash
# 运行
npm run dev

# 打包
npm run build

# 生成静态站点
npm run generate

# 本地预览生产版本
npm run preview

# 打包传统 SPA 应用
# 修改 nuxt.config.ts 文件 ssr: false
npm run generate
```
