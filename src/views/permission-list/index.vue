<script setup>
import { ref } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'

const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
// 国际化
watchSwitchLang(getPermissionList)
</script>

<template>
  <el-card>
    <el-table
      :data="allPermission"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="permissionName" :label="$t('msg.permission.name')" width="200">
      </el-table-column>
      <el-table-column prop="permissionMark" :label="$t('msg.permission.mark')" width="200">
      </el-table-column>
      <el-table-column prop="permissionDesc" :label="$t('msg.permission.desc')"> </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped></style>
