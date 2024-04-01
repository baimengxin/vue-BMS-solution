import { login } from '@/api/sys'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import md5 from 'md5'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
  // 其他配置...
  const token = ref(getItem(TOKEN) || '')

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
          console.log(data.data.data.token)
          setToken(data.data.data.token)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  return { token, getLoginFn }
})
