// plugins/vuex.js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      // The root state
    }
  },
  mutations: {
    // The root mutations
  },
  actions: {
    // The root actions
  },
  modules: {
    // We'll add modules here
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
