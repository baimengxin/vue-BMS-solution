<script setup>
import { generateTitle } from '@/utils/i18n'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon"></svg-icon> -->
  <el-icon><ElementPlus /></el-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<style lang="scss" scoped></style>
