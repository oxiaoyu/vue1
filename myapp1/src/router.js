import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kind from './views/Kind.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Footer from '@/components/Footer'
import Detail from './views/Detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: Detail
      }
    },
    {
      path: '/',
      alias: '/h',
      name: 'home',
      components: {
        default: Home,
        'footer': Footer
      }
    },
    {
      path: '/kind',
      alias: '/k',
      name: 'kind',
      component: Kind
    },
    {
      path: '/cart',
      alias: '/c',
      name: 'cart',
      component: Cart
    },
    {
      path: '/User',
      alias: '/u',
      name: 'user',
      component: User,
      children: [
        {
          path: 'login',
          name: 'login',
          components: {
            default: () => import('@/components/user/Login')
          }
        },
        {
          path: 'nologin',
          name: 'nologin',
          components: {
            default: () => import('@/components/user/Nologin')
          }
        }
      ]
    }
  ]
})
