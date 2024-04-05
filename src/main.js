import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores'
import i18n from '@/i18n/index'
// import locale from '@/plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// element-plus 样式
import 'element-plus/dist/index.css'

// 导入全局样式
import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'

// 路由权限
import './permission'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(i18n)
// locale(app)
app.use(installIcons)

app.mount('#app')
