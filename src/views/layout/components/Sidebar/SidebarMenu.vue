<script setup>
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { useMainStore } from '@/stores'

const router = useRouter()
const routes = computed(() => {
  // router.getRoutes() 返回所有的路由表
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

// 激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})

const mainStore = useMainStore()
// const themeStore = useThemeStore()

// :background-color="'var(--menu-bg)'"
//     :text-color="'var(--menu-text)'"
//     :active-text-color="'var(--menu-active-text)'"
// :background-color="themeStore.setStylesFn('--menu-bg')"
// :text-color="themeStore.setStylesFn('--menu-text')"
// :active-text-color="themeStore.setStylesFn('--menu-active-text')"
</script>

<template>
  <!-- 一级菜单 -->
  <el-menu
    :collapse="!mainStore.sidebarStatus"
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="'var(--menu-bg)'"
    :text-color="'var(--menu-text)'"
    :active-text-color="'var(--menu-active-text)'"
    router
  >
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped>
// :deep(.el-menu) {
//   // --el-menu-bg-color: var(--menu-bg);
// }
</style>
