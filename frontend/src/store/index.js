// Vue & Vuex store

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level1: {
      lesson1: { completed: false, score: null },
      lesson2: { completed: false, score: null },
      lesson3: { completed: false, score: null },
      lesson4: { completed: false, score: null },
      lesson5: { completed: false, score: null },
    },
    level2: {
      lesson1: { completed: false, score: null },
      lesson2: { completed: false, score: null },
      lesson3: { completed: false, score: null },
      lesson4: { completed: false, score: null },
      lesson5: { completed: false, score: null },
    },
    level3: {
      lesson1: { completed: false, score: null },
      lesson2: { completed: false, score: null },
      lesson3: { completed: false, score: null },
      lesson4: { completed: false, score: null },
      lesson5: { completed: false, score: null },
    },
    level4: {
      lesson1: { completed: false, score: null },
      lesson2: { completed: false, score: null },
      lesson3: { completed: false, score: null },
      lesson4: { completed: false, score: null },
      lesson5: { completed: false, score: null },
    },
    level5: {
      lesson1: { completed: false, score: null },
      lesson2: { completed: false, score: null },
      lesson3: { completed: false, score: null },
      lesson4: { completed: false, score: null },
      lesson5: { completed: false, score: null },
    },
  },
  mutations: {
    completeLesson(state, { level, lesson }) {
      state[level][lesson].completed = true;
    },
    setScore(state, { level, lesson, score }) {
      state[level][lesson].score = score;
    },
  },
  actions: {
    completeLesson({ commit }, payload) {
      commit('completeLesson', payload);
    },
    setScore({ commit }, payload) {
      commit('setScore', payload);
    },
  },
  getters: {
    getLessonStatus: (state) => (level, lesson) => {
      return state[level][lesson];
    },
    getAllLessonsStatus: (state) => (level) => {
      return state[level];
    },
  },
});
