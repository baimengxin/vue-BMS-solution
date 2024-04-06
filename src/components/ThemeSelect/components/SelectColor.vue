<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/stores'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

// 主题色
const store = useThemeStore()
const myColor = ref(store.mainColor)
// 预定义色值
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])

/**
 * 关闭
 */
const closed = () => {
  console.log('取消按钮')
  emits('update:modelValue', false)
}
/**
 * 确定
 * 1. 修改主题色
 * 2. 保存最新的主题色
 * 3. 关闭 dialog
 */
const comfirm = async () => {
  console.log('确定按钮')
  // 2. 保存最新的主题色
  store.setMainColorFn(myColor.value)
  // 3. 关闭 dialog
  closed()
}
</script>

<template>
  <!-- 弹出层 -->
  <el-dialog title="提示" :model-value="modelValue" @close="closed" width="22%">
    <div class="center">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <!-- 取色器 -->
      <el-color-picker v-model="myColor" :predefine="predefineColors"></el-color-picker>
    </div>

    <!-- 底部按钮 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="paimary" @click="comfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
  height: 100px;
  .title {
    margin-bottom: 12px;
  }
}
</style>
