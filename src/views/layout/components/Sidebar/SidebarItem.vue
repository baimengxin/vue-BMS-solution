<script setup>
import MenuItem from './MenuItem.vue'

defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- 有 children 的 menu 菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
    </template>

    <SidebarItem v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>

  <!-- 没有 children 的 menu 菜单 -->
  <el-menu-item v-else :index="route.path">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>

<style lang="scss" scoped></style>
