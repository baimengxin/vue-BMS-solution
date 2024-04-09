import dayjs from 'dayjs'

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  // 判断是否是数字类型
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
