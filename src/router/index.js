import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/layout/Home'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        }
      ]
    }
  ]
})
