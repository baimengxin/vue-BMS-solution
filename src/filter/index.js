import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'
// dayjs 的语言包
import 'dayjs/locale/zh-cn'
import { useMainStore } from '@/stores'

// 加载相对时间插件
dayjs.extend(rt)
function relativeTime(val) {
  const store = useMainStore()
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs()
    .locale(store.language === 'zh' ? 'zh-cn' : 'en')
    .to(dayjs(val))
}

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  // 判断是否是数字类型
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime
  }
}
