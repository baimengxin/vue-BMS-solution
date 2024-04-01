import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入全局样式
import '@/styles/index.scss'

// 导入 svgIcon
import installIcons from '@/icons'
// import 'virtual:svg-icons-register'
import './permission'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(installIcons)

app.mount('#app')
