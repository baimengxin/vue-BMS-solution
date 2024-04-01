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

# 使用 sass

安装

```shell
pnpm i sass -D
```

# 使用 axios

```shell
pnpm i axios
```

# 配置环境变量

创建 两个文件，分别对应 开发状态 和 生产状态

1. `.env.development`
2. `.env.production`

然后 在文件中

```shell
# 标志
VITE_ENV = 'development'

# base api
VITE_VUE_APP_BASE_API = '/api'
```

```shell
# 标志
VITE_ENV = 'production'

# base api
VITE_VUE_APP_BASE_API = '/prod-api'
```

使用 `import.meta.env` 进行访问

```js
console.log(import.meta.env)
console.log(import.meta.env.VITE_VUE_APP_BASE_API)
console.log(import.meta.env.VITE_ENV)
```

# 使用 md5

```shell
pnpm i --save md5
```
