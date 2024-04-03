<script setup name="Hamburger">
import { useMainStore } from '@/stores'

const store = useMainStore()
const onClick = () => {
  store.changeSidebarStatusFn()
}
</script>

<template>
  <div class="hamburger-container" @click="onClick">
    <el-icon :size="30" class="hamburger">
      <Expand v-if="store.sidebarStatus" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;

  .hamburger {
    display: inline-block;
    vertical-align: middle;
    // width: 20px;
    // height: 20px;
  }
}
</style>
