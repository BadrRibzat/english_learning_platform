// src/store/index.js

import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    lessons: [],
    language: "en", // default language
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getLessons: (state) => state.lessons,
    getLanguage: (state) => state.language,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    setLanguage(state, language) {
      state.language = language;
    },
    addLesson(state, lesson) {
      state.lessons.push(lesson);
    },
  },
  actions: {
    login({ commit }, user) {
      // Simulate login API call
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("setUser", user);
          resolve();
        }, 1000);
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("setUser", null);
          resolve();
        }, 1000);
      });
    },
    fetchLessons({ commit }) {
      // Simulate fetching lessons API call
      return new Promise((resolve) => {
        const lessons = [
          { id: 1, title: "Lesson 1", content: "Content for lesson 1" },
          { id: 2, title: "Lesson 2", content: "Content for lesson 2" },
        ];
        setTimeout(() => {
          commit("setLessons", lessons);
          resolve();
        }, 1000);
      });
    },
    changeLanguage({ commit }, language) {
      commit("setLanguage", language);
    },
  },
  modules: {
    // Add additional modules here if needed
  },
});
