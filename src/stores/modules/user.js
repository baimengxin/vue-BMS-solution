import { login, getUserInfo } from '@/api/sys'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import md5 from 'md5'
import { getItem, setItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
  // 其他配置...
  const token = ref(getItem(TOKEN) || '')
  // 用户信息
  const userInfo = ref({})

  // 保存 token 的数据
  const setToken = (value) => {
    token.value = value
    setItem(TOKEN, value)
  }

  // 登录请求
  const getLoginFn = (userInfo) => {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username,
        password: md5(password)
      })
        .then((data) => {
          setToken(data.token)
          // 保存登录时间
          setTimeStamp()
          resolve()
          router.push('/')
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // 请求用户信息
  const getUserInfoFn = async () => {
    const res = await getUserInfo()
    // 保存到用户信息
    userInfo.value = res
  }

  /**
   * 退出登录
   * */
  const logoutFn = () => {
    // 清空数据
    token.value = ''
    userInfo.value = {}
    removeAllItem()
    // 返回登录页
    router.push('/login')
  }

  return { token, userInfo, getLoginFn, getUserInfoFn, logoutFn }
})
