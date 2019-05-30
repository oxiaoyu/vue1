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
        default: () => import('./views/Kind'),
        footer: () => import('./components/Footer')
      }
    },
    {
      path: '/cart',
      alias: '/c',
      name: 'cart',
      components: {
        default: () => import('./views/Cart.vue')
      }
    },
    {
      path: '/user',
      alias: '/u',
      name: 'user',
      components: {
        default: () => import('./views/User.vue'),
        footer: () => import('./components/Footer')
      },
      children: [
        {
          path: 'nologin',
          name: 'nologin',
          component: () => import('./components/user/NoLogin')
        },
        {
          path: 'content',
          name: 'content',
          component: () => import('./components/user/Content')
        }
      ]
    },
    {
      path: '/Login',
      alias: '/L',
      name: 'login',
      components: {
        default: () => import('./views/Login.vue')
      }
    },
    {
      path: '/Register',
      alias: '/R',
      name: 'register',
      components: {
        default: () => import('./views/Register.vue')
      }
    }
  ]
})
