/**
 * 返回所有子路由
 */
const getChildrenRouters = (routes) => {
  const result = []

  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })

  return result
}

/**
 * 处理脱离层级的路由：某个一级路由为其他子路由，则剔除该一级路由，保留路由层级
 * @param {*} routes router.getRoutes()
 */
export const filterRouters = (routes) => {
  const childrenRoutes = getChildrenRouters(routes)

  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 判断数据是否为空值
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

/**
 * 根据 routes 数据，返回对应 menu 规则数组
 */

export const generateMenus = (routes) => {
  const result = []

  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 chilren && 不存在 meta 直接 return 则直接返回，忽略此路由
    if (isNull(item.meta) && isNull(item.children)) return

    // 存在 children 不存在 meta，进入迭代
    // 则递归调用自身处理子路由，并将结果合并到最终菜单数组中
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }

    // 合并 path 作为跳转路径
    // const routePath = path.resolve(basePath, item.path)
    const routePath = `${item.path}`.replace(/\/+/g, '/')

    // 路由分离之后，存在同名路由的情况，需要单独处理
    let route = result.find((item) => item.path === routePath)

    // 当前路由尚未进入 result
    if (!route) {
      route = { ...item, path: routePath, children: [] }
    }

    // icon 与 title 必须全部存在
    if (route.meta.icon && route.meta.title) {
      // meta 存在生成 route 对象，放入 arr
      result.push(route)
    }

    // 存在 children 进入迭代到 children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })

  return filterName(result)
}

/**
 * 过滤掉多余的路由
 * */
const filterName = (result) => {
  return Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse)
}
