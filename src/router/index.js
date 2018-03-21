import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/layout/Home'
// import Home1 from '@/layout/Home1'
import Index from '@/views/Index'
import Icon from '@/components/Icon'
import Login from '@/views/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
          meta: {
            auth: true,
            name: '首页'
          }
        },
        {
          path: '/icon',
          name: 'Icon',
          component: Icon,
          meta: {
            auth: true,
            name: '字体图标'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
