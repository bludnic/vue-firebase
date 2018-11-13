import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

import snackbar from './modules/snackbar'
import user from './modules/user'

Vue.use(Vuex)

const state = () => ({
  isFulfilled: false
})

const mutations = {
  setFulfilled (state) {
    state.isFulfilled = true
  }
}

const actions = {
  clientInit ({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      commit('user/setUser', user)
      commit('setFulfilled')
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    snackbar,
    user
  }
})
