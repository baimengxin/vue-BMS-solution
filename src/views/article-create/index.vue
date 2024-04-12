<script setup>
import { ref } from 'vue'
import Markdown from './components/Markdown.vue'
import Editor from './components/Editor.vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'

const title = ref('')
const activeName = ref('markdown')

/**
 * markdown 创建文章 成功事件
 * */
const onSuccess = () => {
  // 创建成功后，清空 input 数据
  title.value = ''
}

// 处理编辑相关
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = await articleDetail(articleId)
  // 标题赋值
  title.value = detail.value.title
}

// 只有当用户传入id才执行
if (articleId) {
  getArticleDetail()
}
</script>

<template>
  <div class="article-create">
    <el-card>
      <el-input
        class="title-input"
        :placeholder="$t('msg.article.titlePlaceholder')"
        v-model="title"
        maxlength="20"
        clearable
      />

      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
          <Markdown :title="title" :detail="detail" @onSuccess="onSuccess" />
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <Editor />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
