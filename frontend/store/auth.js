// english_learning_platform/frontend/store/auth.js

const state = () => ({
  user: null,
  token: null,
})

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
}

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await this.$axios.post('/login/', { username, password })
      commit('SET_USER', response.data.user)
      commit('SET_TOKEN', response.data.token)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },
  async register({ commit }, { username, email, password }) {
    try {
      const response = await this.$axios.post('/register/', { username, email, password })
      return response.data
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  },
  logout({ commit }) {
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
  },
}

const getters = {
  isAuthenticated: state => !!state.token,
  isAdmin: state => state.user?.is_staff || false,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

