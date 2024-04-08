<script setup>
import PanThumb from '@/components/PanThumb/index.vue'
import { useUserStore } from '@/stores'

const store = useUserStore()
</script>

<template>
  <div class="">
    <PanThumb :image="store.userInfo.avatar" :height="'100px'" :width="'100px'">
      <div>Hello</div>
      {{ store.userInfo.title }}
    </PanThumb>
  </div>
</template>

<style lang="scss" scoped></style>
