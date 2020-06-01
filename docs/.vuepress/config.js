const nav = require('./nav');
const head = require('./config/head_config');
const plugins = require('./config/plugins_config');
module.exports = {
    base: '/vuepress-demo/',
    title: 'Kevin-Blog',
    head: head,
    plugins: plugins,
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        nav: nav,
        lastUpdated: '更新时间',
    }
};