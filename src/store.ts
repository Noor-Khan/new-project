import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: 'test@gmail.com',
      password: ''
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    },
  },
  mutations: {
    updateUser: (state, payload) => {
      state.user = Object.assign({}, payload)
    }
  },
  actions: {
    updateUser: ({ commit }, payload) => {
      commit('updateUser', payload)
    },
  }
})
