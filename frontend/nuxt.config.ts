import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  plugins: [
    '@/plugins/auth/auth0'
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

  compatibilityDate: '2024-07-13'
})
