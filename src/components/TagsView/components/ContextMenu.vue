<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/stores'

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const router = useRouter()
const store = useMainStore()

// 刷新
const onRefreshClick = () => {
  router.go(0)
}

// 删除右边
const onCloseRightClick = () => {
  store.removeTagsViewFn({
    type: 'right',
    index: props.index
  })
}

// 除自己，全部删除
const onCloseOtherClick = () => {
  store.removeTagsViewFn({
    type: 'other',
    index: props.index
  })
}
</script>

<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">
      {{ $t('msg.tagsView.refresh') }}
    </li>
    <li @click="onCloseRightClick">
      {{ $t('msg.tagsView.closeRight') }}
    </li>
    <li @click="onCloseOtherClick">
      {{ $t('msg.tagsView.closeOther') }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
