<script setup>
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Writings from './components/Writings.vue'
import Author from './components/Author.vue'
import { ref } from 'vue'

const activeName = ref('feature')
</script>

<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard class="user-card" />
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature />
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
