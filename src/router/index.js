import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/layout/Home'
// import Home1 from '@/layout/Home1'
import Index from '@/views/Index'
import Icon from '@/components/Icon'

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
        },
        {
          path: '/icon',
          name: 'Icon',
          component: Icon
        }
      ]
    }
  ]
})
