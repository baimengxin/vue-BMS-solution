<script setup>
import MkEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { onMounted } from 'vue'
import { useMainStore } from '@/stores'
import { watchSwitchLang } from '@/utils/i18n'
import { commitArticle, editArticle } from './commit'
import { watch } from 'vue'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  detail: {
    type: Object
  }
})

const emits = defineEmits(['onSuccess'])

// Editor 实例
let mkEditor
// 处理离开页面切换语言无法获取 dom
let el
onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})

const store = useMainStore()
const initEditor = () => {
  mkEditor = new MkEditor({
    el,
    height: '500px',
    previewStyle: 'vertical',
    language: store.language === 'zh' ? 'zh-CN' : 'en'
  })

  mkEditor.getMarkdown()
}

// 监听语言的变化
watchSwitchLang(() => {
  if (!el) return
  const htmlStr = mkEditor.getHTML()
  mkEditor.destroy()
  initEditor()
  mkEditor.setHTML(htmlStr)
})

// 提交事件
const onSubmitClick = async () => {
  // 判断是否是 编辑文章
  if (props.detail && props.detail._id) {
    // 编辑文章
    await editArticle({
      id: props.detail._id,
      title: props.title,
      content: mkEditor.getHTML()
    })
  } else {
    await commitArticle({
      title: props.title,
      content: mkEditor.getHTML()
    })
  }
  mkEditor.reset()
  emits('onSuccess')
}

// 监听编辑，数据回显
watch(
  () => props.detail,
  (val) => {
    if (val && val.content) {
      mkEditor.setHTML(val.content)
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="markdown-container">
    <!-- 渲染区 -->
    <div id="markdown-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">{{ $t('msg.article.commit') }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.markdown-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
