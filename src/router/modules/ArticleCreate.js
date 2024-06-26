import layout from '@/views/layout/index.vue'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleCreate',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/create',
      component: () => import('@/views/article-create/index.vue'),
      meta: {
        title: 'articleCreate',
        icon: 'article-create'
      }
    },
    {
      path: '/article/editor/:id',
      component: () => import('@/views/article-create/index.vue'),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
