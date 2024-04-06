import { getItem, setItem } from '@/utils/storage'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LANG, ZH } from '@/constant'

export const useMainStore = defineStore('main', () => {
  // 控制左侧菜单栏的状态
  const sidebarStatus = ref(true)
  // 国际化状态
  const language = ref(getItem(LANG) || ZH)

  // 修改左侧菜单的状态
  const changeSidebarStatusFn = () => {
    sidebarStatus.value = !sidebarStatus.value
  }

  // 设置国际化
  const setLanguageFn = (lang) => {
    setItem(LANG, lang)
    language.value = lang
  }

  return { sidebarStatus, language, changeSidebarStatusFn, setLanguageFn }
})
