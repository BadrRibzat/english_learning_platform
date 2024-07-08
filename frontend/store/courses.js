// frontend/store/courses.js
import { sanitizeHTML } from '@/sanitizers/sanitize'

export const state = () => ({
  courses: [],
  currentCourse: null,
})

export const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses.map((course) => ({
      ...course,
      name: sanitizeHTML(course.name),
      description: sanitizeHTML(course.description),
    }))
  },
  SET_CURRENT_COURSE(state, course) {
    state.currentCourse = course
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
  async fetchCourse({ commit }, courseId) {
    try {
      const { data } = await this.$axios.get(`/api/courses/${courseId}/`)
      commit('SET_CURRENT_COURSE', data)
    } catch (error) {
      console.error('Error fetching course:', error)
    }
  },
}
