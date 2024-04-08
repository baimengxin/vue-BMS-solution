<script setup>
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Writings from './components/Writings.vue'
import Author from './components/Author.vue'
import { ref } from 'vue'
import { getFeature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'

const activeName = ref('feature')
const featureData = ref([])
const getFeatureData = async () => {
  featureData.value = await getFeature()
}
getFeatureData()

watchSwitchLang(getFeatureData)
</script>

<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard class="user-card" :features="featureData" />
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <Writings />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <Author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
