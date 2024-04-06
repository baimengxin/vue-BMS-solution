<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullscreen = ref(false)

// 监听变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

// 切换事件
const onToggle = () => {
  screenfull.toggle()
}

// 监听 screenfull 变化
// 设置侦听器
onMounted(() => {
  screenfull.on('change', change)
})

// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<template>
  <el-icon size="30" @click="onToggle"><FullScreen /></el-icon>
</template>

<style lang="scss" scoped></style>
