import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: null
  },
  mutations: {
    setState (state, payload) {
      state[payload.property] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
