<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { generateTitle } from '@/utils/i18n'

const route = useRoute()

// 生成数组结构
const breadcrumbData = ref([])

const getBreadcrumbData = () => {
  // 当前路由的路由表 route.matched
  breadcrumbData.value = route.matched.filter((item) => item.meta && item.meta.title)
}

watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

// 点击跳转
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}
</script>

<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
        <!-- 不可点击 -->
        <span v-if="index === breadcrumbData.length - 1">{{ generateTitle(item.meta.title) }}</span>

        <!-- 可点击 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }

  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，不写死样式
    color: var(--menu-bg);
  }
}
</style>
