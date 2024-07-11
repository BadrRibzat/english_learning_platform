// plugins/vuex.js
import { createStore } from 'vuex'
import { defineNuxtPlugin } from '#app'
import auth from '~/store/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const store = createStore({
    modules: {
      auth,
    },
  })

  nuxtApp.vueApp.use(store)
  nuxtApp.provide('store', store)
})

