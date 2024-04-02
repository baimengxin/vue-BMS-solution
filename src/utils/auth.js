import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getItem, setItem } from './storage'

/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  let cuuentTime = Date.now()

  // 获取缓存时间戳
  let timeStamp = getTimeStamp()

  // 当前时间 - 缓存时间 > 设置的过期时间
  // true 就是过期，false 就是没过期
  return cuuentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
