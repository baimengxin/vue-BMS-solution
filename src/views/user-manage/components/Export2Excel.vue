<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { getUserManageAllList } from '@/api/user-manage'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFilter } from '@/filter'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const i18n = useI18n()
let exportDefaultName = i18n.t('msg.excel.defaultName')
// input 输入框的数据
const excelName = ref('')
excelName.value = exportDefaultName
watchSwitchLang(() => {
  exportDefaultName = i18n.t('msg.excel.defaultName')
  excelName.value = exportDefaultName
})
const loading = ref(false)

const emits = defineEmits(['update:modelValue'])

/**
 * 导出按钮点击事件
 * */
const onConfirm = async () => {
  loading.value = true
  const res = (await getUserManageAllList()).list

  // 导入工具包
  const excel = await import('@/utils/Export2Excel')

  const data = formatJson(USER_RELATIONS, res)
  excel.export_json_to_excel({
    // excel 表头
    header: Object.keys(USER_RELATIONS),
    // excel 数据（二维数组结构）
    data,
    // 文件名称
    filename: excelName.value || exportDefaultName
  })
  closed()
}

/**
 * 该方法将数组转为二维数组
 * */
const formatJson = (headers, rows) => {
  return rows.map((item) => {
    return Object.keys(headers).map((key) => {
      // 角色特别处理
      if (headers[key] === 'role') {
        const roles = item[headers[key]]

        return JSON.stringify(roles.map((role) => role.title))
      }

      // 时间特别处理
      if (headers[key] === 'openTime') {
        return dateFilter(item[headers[key]])
      }

      return item[headers[key]]
    })
  })
}

/**
 * 关闭
 */
const closed = () => {
  loading.value = false
  emits('update:modelValue', false)
}
</script>

<template>
  <el-dialog :title="$t('msg.excel.title')" :model-value="modelValue" @close="closed" width="30%">
    <el-input :placeholder="$t('msg.excel.placeholder')" v-model="excelName" />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{
          $t('msg.excel.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
