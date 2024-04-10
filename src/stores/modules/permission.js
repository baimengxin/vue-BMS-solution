// 专门处理权限路由的模块
import { publicRoutes, privateRoutes } from '@/router'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePermissionStore = defineStore('permission', () => {
  // 路由表：初始拥有静态路由权限
  const routes = ref(publicRoutes)

  // 增加路由
  const setRoutesFn = (newRoutes) => {
    // 在静态路由的基础上增加新路由
    routes.value = [...publicRoutes, ...newRoutes]
  }

  // 根据权限筛选路由
  const filterRoutesFn = (menus) => {
    const arrRoutes = []

    menus.forEach((key) => {
      // 权限名 和 路由的 name 匹配
      arrRoutes.push(...privateRoutes.filter((item) => item.name === key))
    })

    // 最后添加 不匹配路由进入 404
    arrRoutes.push({
      path: '/:catchAll(.*)',
      redirect: '/404'
    })

    setRoutesFn(arrRoutes)

    return arrRoutes
  }

  return { routes, setRoutesFn, filterRoutesFn }
})
