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
pnpm i sass sass-loader -D
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

# 使用 vue-i18n

```shell
pnpm add vue-i18n@9
```

# 使用 rgb-hex 和 css-color-function

1. rgb-hex：转换RGB(A)颜色为十六进制
2. css-color-function：在CSS中提出的颜色函数的解析器和转换器

```shell
pnpm i rgb-hex
pnpm i css-color-function
```

# 使用 screenfull 全屏

```shell
pnpm i screenfull
```

# 使用 fuse.js 模糊搜索

```shell
pnpm install --save fuse.js
```

# 使用 driver 引导

```shell
pnpm i driver.js
```

# 使用 dayjs

```shell
pnpm i dayjs
```

# 使用 xlsx

```shell
pnpm i xlsx

```

# 使用 file-saver

```shell
pnpm i file-saver
```
