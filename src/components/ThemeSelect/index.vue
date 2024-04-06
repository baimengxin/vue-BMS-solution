<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor.vue'

// 弹出层状态
const selectColorVisible = ref(false)
const handleSetTheme = (command) => {
  selectColorVisible.value = true
}
</script>

<template>
  <!-- 下拉菜单 -->
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <!-- 文字提示 -->
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <el-icon size="30"><Brush /></el-icon>
      </el-tooltip>
    </div>

    <template #dropdown>
      <!-- 下拉列表 -->
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- 展示弹出层 -->
  <div>
    <SelectColor v-model="selectColorVisible" />
  </div>
</template>

<style lang="scss" scoped></style>
