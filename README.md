# 项目简介

改项目是一个后台管理系统 通用解决方案

技术栈为：vue3 + vue-router + piniapnpm install element-plus

# 项目初始化

## 使用 element-plus

安装

```shell
# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

使用 自动导入

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

在 `vite` 中 做如下配置

```js
// vite.config.js

//...
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
```
