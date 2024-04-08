<script setup>
import {} from 'vue'
import UploadExcel from '@/components/UploadExcel/index.vue'

/**
 * 数据解析成功之后的回调
 */
const onSuccess = (excelData) => {
  console.log(excelData)
}
</script>

<template>
  <div class="import">
    <UploadExcel :onSuccess="onSuccess" />
  </div>
</template>

<style lang="scss" scoped></style>
