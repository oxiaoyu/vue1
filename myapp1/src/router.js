import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('./views/Detail')
      }
    },
    {
      path: '/home',
      alias: '/h',
      name: 'home',
      components: {
        default: () => import('./views/Home'),
        footer: () => import('./components/Footer')
      }
    },
    {
      path: '/kind',
      alias: '/k',
      name: 'kind',
      components: {
        default: () => import('./views/Kind')
      }
    },
    {
      path: '/cart',
      alias: '/c',
      name: 'cart',
      components: {
        default: () => import('./views/Cart.vue'),
        footer: () => import('./components/Footer')
      }
    },
    {
      path: '/User',
      alias: '/u',
      name: 'user',
      components: {
        default: () => import('./views/User.vue'),
        footer: () => import('./components/Footer')
      },
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
