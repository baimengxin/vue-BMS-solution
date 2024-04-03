<script setup>
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  // router.getRoutes() 返回所有的路由表
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
</script>

<template>
  <!-- 一级菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped></style>
