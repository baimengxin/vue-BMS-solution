import i18n from '@/i18n'
/**
 * 筛选出可供搜索的路由对象
 * @param routes 路由表
 * @param basePath 基础路径，默认为 /
 * @param prefixTitle
 */
export const generateRoutes = (routes, prefixTitle = []) => {
  let res = []

  // 循环 routes
  for (const route of routes) {
    // 创建包含 path 和 title 的数据
    const data = {
      // 拼接路径
      path: `${route.path}`.replace(/\/+/g, '/'),
      title: [...prefixTitle]
    }

    // 当前存在 meta 时，使用 i18n 国际化，组成新的 title
    // 动态路由不允许被搜索
    // 匹配动态路由的正则
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      res.push(data)
    }

    // 存在 children 时，迭代调用
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.title)

      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes]
      }
    }
  }

  return res
}
