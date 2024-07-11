const state = {
  lessons: []
}

const mutations = {
  SET_LESSONS(state, lessons) {
    state.lessons = lessons
  }
}

const actions = {
  async fetchLessons({ commit }) {
    try {
      const response = await fetch('/api/lessons')
      const data = await response.json()
      commit('SET_LESSONS', data)
    } catch (error) {
      console.error('Failed to fetch lessons:', error)
    }
  }
}

const getters = {
  lessons: (state) => state.lessons
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

