const state = () => ({
  user: null
})

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}
