// store/lessons.js

export const state = () => ({
  lessons: []
})

export const mutations = {
  SET_LESSONS(state, lessons) {
    state.lessons = lessons
  }
}

export const actions = {
  async fetchLessons({ commit }) {
    try {
      const response = await this.$axios.get('/lessons/')
      commit('SET_LESSONS', response.data)
    } catch (error) {
      console.error('Fetch lessons error:', error)
    }
  }
}

export const getters = {
  allLessons: state => state.lessons
}
