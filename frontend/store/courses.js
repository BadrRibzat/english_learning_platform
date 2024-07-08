// frontend/store/courses.js

export const state = () => ({
  courses: [],
})

export const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses
  },
}

export const actions = {
  async fetchCourses({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/courses/')
      commit('SET_COURSES', data)
    } catch (error) {
      console.error('Error fetching courses:', error)
    }
  },
}
