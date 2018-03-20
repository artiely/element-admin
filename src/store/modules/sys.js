import * as types from '../mutation-types'
// import api from '@/api/api'
// import Cookies from 'js-cookie'

// initial state
const state = {
  isCollapse: false
}

// getters
const getters = {
}

// mutations
const mutations = {
  [types.IS_COLLAPSE](state, payload) {
    state.isCollapse = !state.isCollapse
  }
}

// actions
const actions = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
