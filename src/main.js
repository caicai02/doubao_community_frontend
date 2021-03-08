import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//在各个页面引用
Vue.use(Buefy)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
