import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'

// import { useMainStore } from '@/stores'
import { ref } from 'vue'
import { getItem } from '@/utils/storage'
import { LANG, ZH } from '@/constant'

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

function getLocale() {
  // 默认值
  const locale = ref(ZH)

  if (getItem(LANG)) {
    locale.value = getItem(LANG) === ZH ? 'zh' : 'en'
  }

  return locale.value
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLocale(),
  messages
})

export default i18n
