<script setup>
import { useMainStore } from '@/stores'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'

const store = useMainStore()
const locale = computed(() => (store.language === 'en' ? en : zhCn))
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
