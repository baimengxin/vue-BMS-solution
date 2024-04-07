import i18n from '@/i18n'
import { useMainStore } from '@/stores'
import { watch } from 'vue'

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => useMainStore().language,
    () => {
      cbs.forEach((cb) => cb(useMainStore().language))
    }
  )
}
