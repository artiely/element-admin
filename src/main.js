// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
// elementui主要样式
import 'element-ui/lib/theme-chalk/index.css'
// elemnetui边界响应样式
import 'element-ui/lib/theme-chalk/display.css'
// iconfont 字体样式
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/demo.css'
// 自定义覆盖框架样式
import './assets/style/cover.stylus'
import './assets/style/main.stylus'
import VueUI from './package/index'
// import Cookies from 'js-cookie'
import Api from './api'
// 进度条 还有个nprogress
// import VueProgressBar from 'vue-progressbar'
// mock数据
import '@/mock'
// 富文本编辑器
// import tinymce from 'vue-tinymce-editor'
// Vue.component('tinymce', tinymce)
// 国际化
import VueI18n from 'vue-i18n'
// 富文本
import VueQuillEditor from 'vue-quill-editor'
// 国际化
import messages from '@/i18n/index'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// markdown
// import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
// Vue.use(mavonEditor)
Vue.use(window['mavon-editor'])
Vue.use(VueQuillEditor /* { default global options } */)
Vue.use(VueI18n)

Vue.use(Api)
Vue.use(VueUI)
Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false
Vue.config.devtools = true

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: window.localStorage.getItem('lang')
    ? window.localStorage.getItem('lang')
    : 'zh', // set locale
  messages // set locale messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})
