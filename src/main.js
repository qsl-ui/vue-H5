import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from './filters'
import '@css/init.css'
import '@css/common.css'
import 'amfe-flexible'
import globalComponents from '@/components/globalComponents'
import {
  Button,
  Toast,
  Tabbar, TabbarItem,
  Tab, Tabs,
  List,
  Dialog,
  Field,
  PullRefresh
} from 'vant'

Vue.use(Button)
  .use(Toast)
  .use(Tabbar).use(TabbarItem)
  .use(Tab).use(Tabs)
  .use(List)
  .use(Dialog)
  .use(Field)
  .use(PullRefresh)
Vue.use(globalComponents)

// 注册全局滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
