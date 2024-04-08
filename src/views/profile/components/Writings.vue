<script setup>
import { getWritings } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'

const writingsData = ref([])
const getWritingsData = async () => {
  writingsData.value = await getWritings()
}

getWritingsData()
watchSwitchLang(getWritingsData)
</script>

<template>
  <el-timeline>
    <el-timeline-item
      v-for="item in writingsData"
      :key="item.id"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<style lang="scss" scoped></style>
