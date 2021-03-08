import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // 当输入根节点时@/views/Home会加载到App的<router-view/>
    component: () => import('@/views/Home')
  }
]

const router = new VueRouter({
  routes
})

export default router
