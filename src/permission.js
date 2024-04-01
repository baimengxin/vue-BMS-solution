// 登录鉴权
// 1. 当用户未登陆时，不允许进入除 login 之外的其他页面。
// 2. 用户登录后，token 未过期之前，不允许进入 login 页面
import router from '@/router'
import { useUserStore } from '@/stores'

// 路由白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach((to, from, next) => {
  const store = useUserStore()
  console.log(store.token)
  // 存在 token，直接进入主页
  if (store.token) {
    // 有 token，还想前往 登录页
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有 token 的情况下，可以进入白名单的路由
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
