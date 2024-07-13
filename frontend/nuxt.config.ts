// Updated frontend/nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/styles/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    // Ensure this is the correct module name
    // '@nuxtjs/auth-next',
    '@pinia/nuxt' // Add Pinia module
  ],

  // auth: {
  //   strategies: {
  //     auth0: {
  //       domain: 'YOUR_AUTH0_DOMAIN',
  //       clientId: 'YOUR_AUTH0_CLIENT_ID',
  //       audience: 'https://your-api-identifier.com',
  //       scope: 'openid profile email'
  //     }
  //   }
  // },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js'
  },

  build: {
    extractCSS: true
  },

  compatibilityDate: '2024-07-12'
})