// store/admin.js

export const state = () => ({
  users: [],
  lessonData: [],
  exerciseData: [],
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_LESSON_DATA(state, lessonData) {
    state.lessonData = lessonData
  },
  SET_EXERCISE_DATA(state, exerciseData) {
    state.exerciseData = exerciseData
  },
}

export const actions = {
  async fetchDashboardData({ commit }) {
    try {
      const response = await this.$axios.get('/admin/dashboard/', {
        headers: {
          'Authorization': `Bearer ${this.state.auth.token}`,
        },
      })
      const data = response.data
      commit('SET_USERS', data.user_data)
      commit('SET_LESSON_DATA', data.lesson_data)
      commit('SET_EXERCISE_DATA', data.exercise_data)
    } catch (error) {
      console.error('Fetch dashboard data error:', error)
      throw error
    }
  },
}
