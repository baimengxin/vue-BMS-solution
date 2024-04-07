import { getItem, setItem } from '@/utils/storage'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LANG, ZH, TAGS_VIEW } from '@/constant'

export const useMainStore = defineStore('main', () => {
  // 控制左侧菜单栏的状态
  const sidebarStatus = ref(true)
  // 国际化状态
  const language = ref(getItem(LANG) || ZH)
  // tag 的数据
  const tagsViewList = ref(getItem(TAGS_VIEW) || [])

  // 修改左侧菜单的状态
  const changeSidebarStatusFn = () => {
    sidebarStatus.value = !sidebarStatus.value
  }

  // 设置国际化
  const setLanguageFn = (lang) => {
    setItem(LANG, lang)
    language.value = lang
  }

  // 添加 tags
  const addTagsViewListFn = (tag) => {
    const isFind = tagsViewList.value.find((item) => {
      return item.path === tag.path
    })

    // 处理重复
    if (!isFind) {
      tagsViewList.value.push(tag)
      setItem(TAGS_VIEW, tagsViewList.value)
    }
  }

  // 为指定的 tag 修改 title
  const changeTagsViewFn = ({ index, tag }) => {
    tagsViewList.value[index] = tag
    setItem(TAGS_VIEW, tagsViewList.value)
  }

  /**
   * 删除 tag
   * @param {type: 'other'||'right'||'index', index: index} payload
   */
  const removeTagsViewFn = (payload) => {
    if (payload.type === 'index') {
      tagsViewList.value.splice(payload.index, 1)
    } else if (payload.type === 'other') {
      // 先删右边
      tagsViewList.value.splice(payload.index + 1, tagsViewList.value.length - payload.index + 1)
      // 再删左边
      tagsViewList.value.splice(0, payload.index)
    } else if (payload.type === 'right') {
      tagsViewList.value.splice(payload.index + 1, tagsViewList.value.length - payload.index + 1)
    }
    setItem(TAGS_VIEW, tagsViewList.value)
  }

  return {
    sidebarStatus,
    language,
    tagsViewList,
    changeSidebarStatusFn,
    setLanguageFn,
    addTagsViewListFn,
    changeTagsViewFn,
    removeTagsViewFn
  }
})
