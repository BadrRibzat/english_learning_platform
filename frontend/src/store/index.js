import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    lessons: [],
    progress: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    updateProgress(state, { lessonId, progress }) {
      state.progress[lessonId] = progress;
    },
  },
  actions: {
    login({ commit }, credentials) {
      // Implement login logic here
      // On success, commit the user
      commit("setUser", { id: 1, name: "John Doe", email: "john@example.com" });
    },
    logout({ commit }) {
      // Implement logout logic here
      commit("setUser", null);
    },
    fetchLessons({ commit }) {
      // Implement API call to fetch lessons
      const lessons = [
        { id: 1, title: "Basic Greetings", level: "Beginner" },
        { id: 2, title: "Present Simple Tense", level: "Beginner" },
        { id: 3, title: "Asking Questions", level: "Intermediate" },
      ];
      commit("setLessons", lessons);
    },
    updateLessonProgress({ commit }, { lessonId, progress }) {
      commit("updateProgress", { lessonId, progress });
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    userProgress: (state) => state.progress,
  },
});

