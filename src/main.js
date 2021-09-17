// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Utils from './lib/utils'
import store from './store'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './assets/css/home.css'
import './mock'


Vue.config.productionTip = false
Vue.use(Utils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
