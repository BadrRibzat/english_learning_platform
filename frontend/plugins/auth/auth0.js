// plugins/auth/auth0.js

import { createAuth0, useAuth0 as _useAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const auth0 = createAuth0({
    domain: runtimeConfig.public.auth0Domain,
    clientId: runtimeConfig.public.auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin + '/callback'
    }
  })

  nuxtApp.vueApp.use(auth0)

  return {
    provide: {
      auth0: auth0,
      useAuth0: _useAuth0
    }
  }
})

