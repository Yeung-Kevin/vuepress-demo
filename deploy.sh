#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO> -> 推荐使用
# git push -f git@github.com:<github 用户名>/<远程仓库名>.git master:gh-pages
# github 配置 -> 需要修改的配置
git push -f git@github.com:Yeung-Kevin/vuepress-demo.git master:gh-pages
# gitee（码云） 配置 -> 需要修改的配置
git push -f git@gitee.com:kevin_yhy/vuepress-demo.git master:gh-pages

cd -