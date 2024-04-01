/**
 * 判断是否为外部资源
 */
export function isExternals(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断当前的值是否是空对象
 * */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
