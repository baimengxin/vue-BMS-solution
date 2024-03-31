/**
 * 判断是否为外部资源
 */
export function isExternals(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
