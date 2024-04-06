import { createPinia } from 'pinia'

export * from './modules/user'
export * from './modules/main'
export * from './modules/theme'

const pinia = createPinia()

export default pinia
