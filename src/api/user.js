import request from '@/utils/request'

/**
 * 功能
 * */
export const getFeature = () => {
  return request({
    url: '/user/feature'
  })
}

/**
 * 章节
 * */
export const getWritings = () => {
  return request({
    url: '/user/chapter'
  })
}
