<script setup>
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'

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
</script>

<template>
  <!-- 一级菜单 -->
  <el-menu
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

<style lang="scss" scoped></style>
