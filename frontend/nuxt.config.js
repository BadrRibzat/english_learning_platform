// frontend/nuxt.config.js

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'English Learning Platform',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Learn English with our interactive platform',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000/api', // Adjust this to your backend URL
  },

  // Auth module configuration
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Token',
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login/', method: 'post' },
          logout: { url: '/auth/logout/', method: 'post' },
          user: { url: '/auth/user/', method: 'get' },
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Toast module configuration
  toast: {
    position: 'top-center',
    duration: 3000,
  },

  // Router middleware
  router: {
    middleware: ['auth'],
  },

  // Tailwind CSS configuration
  tailwindcss: {
    jit: true,
    // Add any Tailwind CSS configuration here
  },

  // FontAwesome configuration
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // You can extend webpack config here
  },
}
