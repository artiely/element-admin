import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import Login from '@/views/auth/Login'
import store from '@/store/index'
import lazyLoading from './lazyLoading'
import api from '../api/api'
Vue.use(Router)

let constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: lazyLoading('layout/Home'),
    meta: {
      role: ['admin'],
      auth: true,
      name: '顶级导航',
      icon: 'icon-createtask'
    }
  }
]

const router = new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoading('layout/Home'),
    redirect: '/index',
    meta: {
      role: ['admin', 'guest'],
      auth: true,
      name: '顶级导航',
      icon: 'icon-createtask'
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: lazyLoading('views/Index'),
        meta: {role: ['admin', 'guest'], auth: true, name: '首页'}
      },
      {
        path: '/icon',
        name: 'Icon',
        component: lazyLoading('components/Icon'),
        meta: {role: ['admin', 'guest'], auth: true, name: '字体图标'}
      },
      {
        path: '/dep',
        name: 'Dep',
        component: lazyLoading('views/sys/Dep'),
        meta: {role: ['admin'], auth: true, name: '项目依赖'}
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: lazyLoading('layout/Home'),
    meta: {
      role: ['admin'],
      auth: true,
      name: '系统管理',
      icon: 'icon-createtask'
    },
    redirect: '/index',
    children: [
      {
        path: '/menu',
        name: 'Menu',
        component: lazyLoading('views/sys/Menu'),
        meta: {role: ['admin'], auth: true, name: '菜单管理'}
      }
    ]
  }
]

// 处理登录
router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (!store.state.sys.role && to.path !== '/login') {
    console.log('---routereach')
    api.GET_USER_INFO().then(res => {
      if (res.code === 0) {
        store.commit('FILTER_ROLE', res.role)
        constantRouterMap.push(...store.state.sys.menu)
        router.addRoutes(store.state.sys.menu)
        next(...to)
      } else {
        next({path: '/login', query: {redirect: to.fullPath}})
      }
    })
  }
  if (to.meta.auth) {
    // 登录验证 有token就一定有角色
    let token = Cookies.get('userid')
    // let role = Cookies.get('role')
    if (token) {
      // store.commit('FILTER_ROLE', role)
      // constantRouterMap.push(...store.state.sys.menu)
      // router.addRoutes(store.state.sys.menu)
      console.log('走token')
      next({query: {redirect: to.fullPath}})
    } else {
      next({path: '/login', query: {redirect: to.fullPath}})
    }
  } else {
    next()
  }
})
export default router
