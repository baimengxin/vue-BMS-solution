<script setup>
import { useMainStore, useThemeStore } from '@/stores'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

// 国际化
const mainStore = useMainStore()
const locale = computed(() => (mainStore.language === 'zh' ? zhCn : en))

// 主题色变更
const themeStore = useThemeStore()
generateNewStyle(themeStore.mainColor).then((newStyleText) => writeNewStyle(newStyleText))
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
