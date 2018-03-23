import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import Login from '@/views/auth/Login'
import store from '@/store/index'
import lazyLoading from './lazyLoading'
import api from '../api/api'
import NProgress from 'nprogress'
Vue.use(Router)

let constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    name: 'Top',
    component: lazyLoading('layout/Home1'),
    redirect: '/index',
    meta: {
      role: ['admin', 'guest'],
      auth: true,
      title: '顶级导航',
      icon: 'icon-createtask'
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: lazyLoading('views/Index'),
        meta: {role: ['admin', 'guest'], auth: true, title: '首页'}
      },
      {
        path: '/icon',
        name: 'Icon',
        component: lazyLoading('components/Icon'),
        meta: {role: ['admin', 'guest'], auth: true, title: '字体图标'}
      },
      {
        path: '/dep',
        name: 'Dep',
        component: lazyLoading('views/sys/Dep'),
        meta: {role: ['admin'], auth: true, title: '项目依赖'}
      }
    ]
  },
  {
    path: '/',
    name: 'Sys',
    component: lazyLoading('layout/Home1'),
    meta: {role: ['admin'], auth: true, title: '系统管理', icon: 'icon-manage'},
    redirect: '/index',
    children: [
      {
        path: '/menu',
        name: 'Menu',
        component: lazyLoading('views/sys/Menu'),
        meta: {role: ['admin'], auth: true, title: '菜单管理'}
      }
    ]
  }
]

// 处理登录
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 没有角色并且去的不是登录页 我们拉取角色 如果拉取不到角色 说明没有登录
  if (!store.state.sys.role && to.path !== '/login') {
    api.GET_USER_INFO().then(res => {
      if (res.code === 0) {
        store.commit('FILTER_ROLE', res.role)
        // constantRouterMap.push(...store.state.sys.menu)
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
    if (token) {
      if (to.path === '/login') {
        next({path: '/index'})
      }
      next({query: {redirect: to.fullPath}})
    } else {
      next({path: '/login', query: {redirect: to.fullPath}})
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
export default router
