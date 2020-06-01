module.exports = {
    // 自动生成 侧边栏 和 导航栏
    "vuepress-plugin-auto-sidebar": {
        nav: true
    },
    // 图片缩放
    '@vuepress/medium-zoom': {
        selector: '.theme-default-content img', // css 选择器
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
    },
    // vssue
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: 'Yeung-Kevin', // 远程库的用户名
        repo: 'vuepress-demo', // 远程库的仓库名（即: 存放 项目 或 VuePress 项目的仓库名）
        clientId: '99a76425647b2d055d7c', // 创建 OAuth APP 所提供的 Client ID
        clientSecret: '6e29162f43b9fdb1039160fd111c1359e76bd049',  // 创建 OAuth APP 所提供的 Client Secret
    },
};