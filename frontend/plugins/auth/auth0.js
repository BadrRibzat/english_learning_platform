// frontend/plugins/auth/auth0.js

import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createAuth0, {
    domain: 'dev-xxxxxxxx.us.auth0.com',
    client_id: 'your-auth0-client-id',
    redirect_uri: 'http://localhost:3000/callback',
  })
})
