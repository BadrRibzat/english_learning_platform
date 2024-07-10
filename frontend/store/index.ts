// english_learning_platform/frontend/store/index.js:

import { createStore } from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000'
})

export const store = createStore({
  state() {
    return {
      users: []
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await api.get('/api/users/')
        commit('setUsers', response.data.users)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async registerUser(_, userData) {
      try {
        await api.post('/api/register/', userData)
      } catch (error) {
        console.error('Error registering user:', error)
        throw error
      }
    }
  }
})
