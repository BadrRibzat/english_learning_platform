// frontend/nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    // Add any other modules that you might be using 
  ],
  
    plugins: ['~/plugins/vuex.js'],
  
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000/api'
    }
  },

  // Vuex configuration
  vuex: {
    strict: false // or true, depending on your preference
  },
  
  // Axios configuration for API calls
  axios: {
    baseURL: 'http://localhost:8000/api',
  },
  
  // Router configuration
  router: {
    middleware: ['auth'] // middleware auth
  },
  
  // Build configuration
  build: {
    transpile: [
      'vuex',
    ],
  },
  
  // Vite configuration for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/variables.scss";'
        }
      }
    }
  },
  
  // Auto-import components
  components: true,
  
  // Client-side rendering
  ssr: false,
  
  compatibilityDate: '2024-07-10'
})

