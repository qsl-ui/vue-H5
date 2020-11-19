import Vue from 'vue'
import VueRouter from 'vue-router'

// 自动化部署
const requireComponent = require.context('../views', true, /\.vue$/)
const routes = requireComponent.keys().map(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '')
  // 全局注册组件
  const component = Vue.component(
    componentName.replace(/\//, '-'),
    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
  return {
    path: '/' + componentName,
    name: componentName.replace(/\//, '-'),
    component
  }
})

let notFoundPage = {
  path: '*',
  name: '404',
  component: () => import('@/views/404.vue')
}
routes.push(notFoundPage)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
