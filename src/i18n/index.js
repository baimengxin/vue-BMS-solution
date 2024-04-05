import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'

import { useMainStore } from '@/stores'

// 确保安装 pinia
import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

// 在用 app.use(pinia) 安装 pinia 插件后，对 useStore() 的任何调用都会正常执行
const app = createApp(App)
app.use(pinia)

function getLanguage() {
  return useMainStore().language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
