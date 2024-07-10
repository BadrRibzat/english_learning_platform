// frontend/middleware/admin.js

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated || !authStore.isAdmin) {
    return navigateTo('/')
  }
})
