import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers.icode = 'helloqianduanxunlianying'
  return config // 必须返回配置
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // response 代表请求响应后的数据
    const { success, message, data } = response.data

    // 请求成功
    if (success) {
      ElMessage({
        message: message,
        type: 'success'
      })
      return data
    } else {
      // 请求成功，业务失败
      // 1. 提示错误信息
      ElMessage.error(message)

      // 2. 返回错误
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 请求失败
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
