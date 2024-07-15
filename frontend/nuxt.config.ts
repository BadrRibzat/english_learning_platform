export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  plugins: [
    { src: '@/plugins/auth/auth0', mode: 'client' }
  ],

  css: [
    '@/assets/styles/tailwind.css',
  ],

  build: {
    transpile: ['@auth0/auth0-vue']
  },

  app: {
    head: {
      title: 'English Learning Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      auth0Domain: process.env.AUTH0_DOMAIN,
      auth0ClientId: process.env.AUTH0_CLIENT_ID,
      apiUrl: process.env.API_URL
    }
  },

  ssr: false, // Adding this line to disable server-side rendering for Auth0

  compatibilityDate: '2024-07-14',
})

