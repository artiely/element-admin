
![](https://img.shields.io/npm/v/npm.svg)
![](https://img.shields.io/apm/l/vim-mode.svg)
![](https://img.shields.io/node/v/@stdlib/stdlib.svg)
![](https://img.shields.io/badge/style-flat-green.svg?longCache=true&style=flat)
![](https://img.shields.io/badge/code_style-standard-brightgreen.svg)

# vue-admin


ant-design版本 https://github.com/artiely/vue-admin  （推荐）


# feature
1. 菜单权限控制
2. 常用优秀vue生态集成
3. 数据mock

# 项目结构
```
├─build                 // 打包环境
│      
├─config                // 开发部署配置
│      
├─node_modules
│      
├─server                // 服务
│  
├─src                   // 项目源文件
│  │  main.js           // 入口文件
│  ├─api                // 请求接口
│  ├─assets             // 组件静态资源
│  │  └─styles          // 样式
│  ├─utils              // 工具
│  ├─i18n               // 国际化
│  ├─package            // 脱离业务的组件
│  ├─components         // 业务公用的组件
│  ├─layout             // 布局组件
│  ├─views              // 业务组件
│  ├─router             // 路由管理
│  └─store              // 状态管理
│              
├─static                // 业务静态资源
│  └─img
│  .babelrc             // babel配置
│  .editorconfig        // editor配置
│  .gitignore           // git忽略配置
│  .eslintrc.js         // eslint配置
│  .postcssrc.js        // postcss配置
│  index.html           // 项目首页
│  package.json         // 依赖配置
```
## 浏览器支持
IE 9+ （祝你好运）
Firefox（最新）
Chrome（最新）
Safari（最新）
## Build Setup

``` bash
# install dependencies
npm install

# server 用express启了一个简单的服务，用来做登录鉴权
cd server && nodemon index.js

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run dist

```
