<script setup>
import { ref, watch } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'
import { rolePermission, distributePermission } from '@/api/role'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})

const i18n = useI18n()
const emits = defineEmits(['update:modelValue'])
const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)

const treeRef = ref(null)
// 属性结构配置
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}
// 获取当前用户角色的权限
const getRolePermission = async () => {
  const checkedKeys = await rolePermission(props.roleId)
  // setCheckedKeys 设置目前选中的节点，使用此方法必须设置 node-key 属性
  treeRef.value.setCheckedKeys(checkedKeys)
}

watch(
  () => props.roleId,
  (val) => {
    if (val) getRolePermission()
  }
)

/**
  确定按钮点击事件
 */
const onConfirm = async () => {
  await distributePermission({
    roleId: props.roleId,
    // getCheckedKeys 若节点可用被选中 (show-checkbox 为 true), 它将返回当前选中节点 key 的数组
    permissions: treeRef.value.getCheckedKeys()
  })
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false)
}
</script>

<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <el-tree
      ref="treeRef"
      :data="allPermission"
      show-checkbox
      check-strictly
      node-key="id"
      default-expand-all
      :props="defaultProps"
    >
    </el-tree>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
