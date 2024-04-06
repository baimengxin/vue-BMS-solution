import { defineStore } from 'pinia'
import { ref } from 'vue'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

export const useThemeStore = defineStore('theme', () => {
  // 初始主题色
  const mainColor = ref(getItem(MAIN_COLOR) || DEFAULT_COLOR)

  // 设置主题色
  const setMainColorFn = (newColor) => {
    mainColor.value = newColor
    setItem(MAIN_COLOR, newColor)
  }

  return { mainColor, setMainColorFn }
})
