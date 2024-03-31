<script setup>
import { isExternals } from '@/utils/validate.js'
import { computed, defineProps } from 'vue'

const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => isExternals(props.icon))

/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>

  <svg v-else class="svg-icon">
    <use :xlink-href="iconName" />
  </svg>
</template>

<style lang="scss" scoped></style>
