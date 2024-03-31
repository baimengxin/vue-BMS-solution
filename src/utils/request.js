import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_API,
  timeout: 5000
})

export default service
