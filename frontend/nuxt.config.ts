export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/store.js'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api'
    }
  },
  compatibilityDate: '2024-07-10'
})
