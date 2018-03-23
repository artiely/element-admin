import Vue from 'vue'
import Vuex from 'vuex'
import sys from './modules/sys'
// import permission from './modules/permission'
import createLogger from 'vuex/dist/logger'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    sys
    // permission
  },
  plugins: [
    createLogger()
    // createPersistedState()
  ]
})

export default store
