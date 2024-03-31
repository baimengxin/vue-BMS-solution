import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus 的自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
    // createSvgIconsPlugin({
    //   // 指定需要缓存的图标文件夹
    //   iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    //   // 指定symbolId格式
    //   symbolId: 'icon-[dir]-[name]'

    //   /**
    //    * custom dom id
    //    * @default: __svg__icons__dom__
    //    */
    //   // customDomId: '__svg__icons__dom__'
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
