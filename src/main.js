// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/style/cover.stylus'
import ViserVue from 'viser-vue'
import VueUI from './package/index'
// import Cookies from 'js-cookie'
import Api from './api'
// import './permission'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'bottom',
  inverse: false
}

Vue.use(VueProgressBar, options)
Vue.use(Api)
Vue.use(VueUI)
Vue.use(ViserVue)
Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
