<script setup>
import { ref, watch } from 'vue'
import { roleList } from '@/api/role'
import { userRoles, updateRole } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue', 'updateRole'])
// 所有角色
const allRoleList = ref([])
// 获取所有角色数据的方法
const getListData = async () => {
  allRoleList.value = await roleList()
}
getListData()
watchSwitchLang(getListData)

// 当前用户角色
const userRoleTitleList = ref([])
// 获取当前用户角色
const getUserRoles = async () => {
  const res = await userRoles(props.userId)

  userRoleTitleList.value = res.role.map((item) => item.title)
}
// 监听 id 变化
watch(
  () => props.userId,
  (val) => {
    if (val) getUserRoles()
  }
)

const i18n = useI18n()
/**
 * 确定按钮事件
 * */
const onConfirm = async () => {
  const roles = userRoleTitleList.value.map((title) => {
    return allRoleList.value.find((role) => role.title === title)
  })
  await updateRole(props.userId, roles)
  // // 角色更新成功
  emits('updateRole')
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))

  closed()
}

/**
 * 取消按钮事件
 * */
const closed = () => [emits('update:modelValue', false)]
</script>

<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <el-checkbox-group v-model="userRoleTitleList">
      <el-checkbox v-for="item in allRoleList" :key="item.id" :label="item.title"></el-checkbox>
    </el-checkbox-group>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
