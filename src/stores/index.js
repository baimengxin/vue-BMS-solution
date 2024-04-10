import { createPinia } from 'pinia'

export * from './modules/user'
export * from './modules/main'
export * from './modules/theme'
export * from './modules/permission'

const pinia = createPinia()

export default pinia
