<script setup>
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { useI18n } from 'vue-i18n'
import steps from './steps'
import { useMainStore } from '@/stores'
import { watch } from 'vue'

const i18n = useI18n()
const store = useMainStore()

let driverObj = driver(steps(i18n))

const onClick = () => {
  driverObj.drive()
}

watch(
  () => store.language,
  () => {
    driverObj = driver(steps(i18n))
  }
)
</script>

<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <el-icon id="guide-start" size="30" @click="onClick"><Guide /></el-icon>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
