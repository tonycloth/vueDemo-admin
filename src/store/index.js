import Vue from 'vue'
import Vuex from 'vuex'

import tab from './modules/tab.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  getters: {
    isCollapse: function (state) {
      return state.isCollapse
    }
  },
  modules: {
    tab
  }
})
