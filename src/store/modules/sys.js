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
  [types.IS_COLLAPSE](state, payload) {
    state.isCollapse = !state.isCollapse
  },
  [types.SET_MENU](state, payload) {
    state.menu = payload
    Cookies.set('menu', JSON.stringify(payload))
  },
  [types.FILTER_ROLE](state, payload) {
    state.role = payload
    Cookies.set('role', payload)
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

    console.log('过滤前的menu', asyncRouterMap)
    console.log('过滤的menu', menu)
    state.menu = menu
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
