<script setup>
import { useMainStore } from '@/stores'
import { generateTitle, watchSwitchLang } from '@/utils/i18n'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'

const route = useRoute()

/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }

  return title
}

/**
 * 监听路由变化
 */
const store = useMainStore()
watch(
  route,
  (to) => {
    if (!isTags(to.path)) return

    const { fullPath, meta, name, params, path, query } = to

    store.addTagsViewListFn({
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)

watchSwitchLang(() => {
  store.tagsViewList.forEach((route, index) => {
    store.changeTagsViewFn({
      index,
      tag: {
        ...route,
        title: getTitle(route)
      }
    })
  })
})
</script>

<template>
  <div class="main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
