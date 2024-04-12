//  因为 markdown 或者是 富文本
// 最终都会处理提交事件，所以我们可以把这两件事情合并到一个模块中实现

import { createArticle } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

export const commitArticle = async (data) => {
  const res = await createArticle(data)
  ElMessage.success(i18n.global.t('msg.article.createSuccess'))

  return res
}
