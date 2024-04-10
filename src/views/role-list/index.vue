<script setup>
import { ref } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import DistributePermission from './components/DistributePermission.vue'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}

getRoleList()
// 国际化
watchSwitchLang(getRoleList)

// 分配权限按钮状态
const distributePermissionVisible = ref(false)
const selectRoleId = ref('')
/**
 * 分配权限
 */
const onDistributePermissionClick = (row) => {
  distributePermissionVisible.value = true
  selectRoleId.value = row.id
}
</script>

<template>
  <el-card>
    <el-table :data="allRoles" border style="width: 100%">
      <el-table-column :label="$t('msg.role.index')" type="index" width="120"> </el-table-column>
      <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
      <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
      <el-table-column :label="$t('msg.role.action')" prop="action" width="260" #default="{ row }">
        <el-button
          type="primary"
          size="small"
          @click="onDistributePermissionClick(row)"
          v-permission="['distributePermission']"
        >
          {{ $t('msg.role.assignPermissions') }}
        </el-button>
      </el-table-column>
    </el-table>
  </el-card>

  <DistributePermission v-model="distributePermissionVisible" :roleId="selectRoleId" />
</template>

<style lang="scss" scoped></style>
