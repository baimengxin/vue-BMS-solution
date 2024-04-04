// element-plus 国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useMainStore } from '@/stores'

export default (app) => {
  app.use(ElementPlus, {
    locale: useMainStore().language === 'en' ? en : zhCn
  })
}
