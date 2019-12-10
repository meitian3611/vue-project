import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/Reset.css'
Vue.config.productionTip = false

window.isLogin = false // 用作是否登陆过

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
