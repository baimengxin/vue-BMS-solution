import SvgIcon from '@/components/SvgIcon/index.vue'

export default async (app) => {
  const svgContext = import.meta.glob('./svg/*.svg')
  const keys = Object.keys(await svgContext)

  keys.forEach(async (key) => {
    const matched = key.match(/([^/]+)\.svg$/)
    if (matched && matched.length > 1) {
      const componentName = matched[1]
      const component = () => import(`./svg/${componentName}.svg`)
      app.component(componentName, (await component()).default)
    }
  })
  // 注册 SvgIcon 组件
  app.component('svg-icon', SvgIcon)
}
