<script setup>
import { ref } from 'vue'
import { userDetail } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// 数据相关
const detailData = ref({})
/**
 * 获取用户详情请求
 * */
const getUserDetail = async () => {
  detailData.value = await userDetail(props.id)
}

getUserDetail()
// 国际化
watchSwitchLang(getUserDetail)
</script>

<template>
  <div class="">用户详情</div>
</template>

<style lang="scss" scoped></style>
