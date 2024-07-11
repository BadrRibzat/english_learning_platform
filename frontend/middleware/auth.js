// frontend/middleware/auth.js

import { useStore } from 'vuex'

export default defineNuxtRouteMiddleware((to, from, next) => {
  const store = useStore()
  if (!store.getters['auth/isAuthenticated']) {
    return next('/login')
  }
  next()
})


