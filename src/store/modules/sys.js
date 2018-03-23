import * as types from '../mutation-types'
import Cookies from 'js-cookie'
import {asyncRouterMap} from '@/router/index'

// initial state
const state = {
  isCollapse: false, // 菜单状态是否收起
  menu: null, // 菜单
  role: null // 角色权限
}

// getters
const getters = {}

// mutations
const mutations = {
  /*
  当前菜单收展状态
  */
  [types.IS_COLLAPSE](state, payload) {
    state.isCollapse = !state.isCollapse
  },
  /*
  通过角色过滤出可展示的菜单
  如果是管理直接赋值
  否则过滤出符合角色的对应菜单
  */
  [types.FILTER_ROLE](state, payload) {
    state.role = payload
    Cookies.set('role', payload)
    if (payload === 'admin') {
      state.menu = asyncRouterMap
    } else {
      let menu = asyncRouterMap.filter(_sub => {
        if (_sub.meta.role.indexOf(payload) !== -1) {
          if (_sub.children) {
            return _sub.children.filter(_item => {
              if (_item.meta.role.indexOf(payload) !== -1) {
                return _item
              }
            })
          } else {
            return _sub
          }
        }
      })
      state.menu = menu
    }
  }
}

// actions
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
