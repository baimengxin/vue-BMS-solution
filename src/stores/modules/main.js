import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  // 控制左侧菜单栏的状态
  const sidebarStatus = ref(true)

  // 修改左侧菜单的状态
  const changeSidebarStatusFn = () => {
    sidebarStatus.value = !sidebarStatus.value
  }

  return { sidebarStatus, changeSidebarStatusFn }
})
