<script setup>
import { useMainStore, useThemeStore, useUserStore } from '@/stores'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { watchSwitchLang } from '@/utils/i18n'

// 国际化
const mainStore = useMainStore()
const locale = computed(() => (mainStore.language === 'zh' ? zhCn : en))

// 主题色变更
const themeStore = useThemeStore()
generateNewStyle(themeStore.mainColor).then((newStyleText) => writeNewStyle(newStyleText))

// 个人信息
const userStore = useUserStore()
watchSwitchLang(() => {
  if (userStore.token) {
    userStore.getUserInfoFn()
  }
})
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
