/**
 * 存储数据
 */
export const setItem = (key, value) => {
  // 复杂数据类型
  // 转换格式后再存
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  // 简单数据类型
  // 直接存储
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key) => {
  // 1. 不需要转换数据格式的
  const data = window.localStorage.getItem(key)

  try {
    // 2. 需要转换格式的
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
