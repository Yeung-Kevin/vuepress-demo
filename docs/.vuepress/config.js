const nav = require('./nav');
module.exports = {
    base: '/vuepress-demo/',
    plugins: {
        // 自动生成 侧边栏 和 导航栏
        "vuepress-plugin-auto-sidebar": {
            nav: true
        },
        // 图片缩放
        '@vuepress/medium-zoom': {
            selector: 'img', // css 选择器
        },
        // 返回顶部
        '@vuepress/back-to-top': true,
        // 时间格式
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                // 不要忘了安装 moment
                const moment = require('moment');
                moment.locale('zh-cn');
                return moment(timestamp).format('lll');
            }
        }
    },
    themeConfig: {
        smoothScroll: true,
        nav: nav,
        lastUpdated: '更新时间',
    }
};