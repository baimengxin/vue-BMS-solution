<script setup>
import { ref } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}

getRoleList()
// 国际化
watchSwitchLang(getRoleList)
</script>

<template>
  <el-card>
    <el-table :data="allRoles" border style="width: 100%">
      <el-table-column :label="$t('msg.role.index')" type="index" width="120"> </el-table-column>
      <el-table-column :label="$t('msg.role.name')" prop="title"> </el-table-column>
      <el-table-column :label="$t('msg.role.desc')" prop="describe"> </el-table-column>
      <el-table-column :label="$t('msg.role.action')" prop="action" width="260">
        <el-button type="primary" size="mini">
          {{ $t('msg.role.assignPermissions') }}
        </el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped></style>
