// 登录鉴权
// 1. 当用户未登陆时，不允许进入除 login 之外的其他页面。
// 2. 用户登录后，token 未过期之前，不允许进入 login 页面
import router from '@/router'
import { useUserStore } from '@/stores'
import { isEmptyObject } from '@/utils/validate'

// 路由白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  const store = useUserStore()

  // 存在 token，直接进入主页
  if (store.token) {
    // 有 token，还想前往 登录页
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断当前是否已存在用户信息
      // 空对象则返回 true，表示当前没有用户信息
      if (isEmptyObject(store.userInfo)) {
        // 发起用户信息请求
        await store.getUserInfoFn()
      }
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
