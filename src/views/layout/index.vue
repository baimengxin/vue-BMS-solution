<script setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain/index.vue'
</script>

<template>
  <div class="layout-wrapper">
    <!-- 左侧 menu -->
    <Sidebar class="sidebar-container" :style="{ backgroundColor: 'var(--menu-bg)' }" />

    <div class="main-container">
      <div class="main-header">
        <Navbar />
      </div>

      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.app-wrapper {
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
  width: calc(100% - #{$sideBarWidth});
}
</style>
