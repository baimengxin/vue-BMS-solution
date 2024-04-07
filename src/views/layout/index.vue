<script setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain/index.vue'
import TagsView from '@/components/TagsView/index.vue'
import { useMainStore } from '@/stores'

const store = useMainStore()
</script>

<template>
  <div class="layout-wrapper" :class="[store.sidebarStatus ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧 menu -->
    <Sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: 'var(--menu-bg)' }"
    />

    <div class="main-container">
      <div class="fixed-header">
        <Navbar />

        <!-- tag 栏 -->
        <TagsView id="guide-tags" />
      </div>

      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.layout-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - $sideBarWidth);
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - $hideSideBarWidth);
}
</style>
