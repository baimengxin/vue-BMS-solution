<script setup>
import {} from 'vue'
import UploadExcel from '@/components/UploadExcel/index.vue'
import { USER_RELATIONS, formatDate } from './utils'
import { userBatchImport } from '@/api/user-manage'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const i18n = useI18n()
/**
 * 数据解析成功之后的回调
 */
const onSuccess = async ({ header, results }) => {
  const updateData = generateData(results)
  await userBatchImport(updateData)
  ElMessage.success({
    message: results.length + i18n.t('msg.excel.importSuccess'),
    type: 'success'
  })
  router.push('/user/manage')
}

/**
 * 筛选数据
 */
const generateData = (results) => {
  const arr = []

  results.forEach((item) => {
    const userInfo = {}

    Object.keys(item).forEach((key) => {
      // 对时间进行处理
      if (USER_RELATIONS[key] === 'openTime') {
        userInfo[USER_RELATIONS[key]] = formatDate(item[key])
        return
      }
      userInfo[USER_RELATIONS[key]] = item[key]
    })
    arr.push(userInfo)
  })

  return arr
}
</script>

<template>
  <div class="import">
    <UploadExcel :onSuccess="onSuccess" />
  </div>
</template>

<style lang="scss" scoped></style>
