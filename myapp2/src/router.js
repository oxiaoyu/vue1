import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kind from './views/Kind.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kind',
      name: 'kind',
      component: Kind
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
