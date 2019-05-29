import Vue from 'vue'
import App from './App.vue'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(mint)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
