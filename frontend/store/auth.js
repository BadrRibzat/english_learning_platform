// frontend/store/auth.js
import { sanitizeHTML } from '@/sanitizers/sanitize'

export const state = () => ({
  user: null,
  token: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = sanitizeHTML(user)
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
}

export const actions = {
  async login({ commit }, credentials) {
    try {
      const { data } = await this.$axios.post('/api/auth/login/', credentials)
      commit('SET_TOKEN', data.token)
      commit('SET_USER', data)
      localStorage.setItem('token', data.token)
      this.$axios.setToken(data.token, 'Token')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },
  async register({ dispatch }, userData) {
    try {
      await this.$axios.post('/api/auth/register/', userData)
      await dispatch('login', {
        username: userData.username,
        password: userData.password,
      })
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  },
  logout({ commit }) {
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
    localStorage.removeItem('token')
    this.$axios.setToken(false)
  },
}
