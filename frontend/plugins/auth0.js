// frontend/plugins/auth0.js

import { createAuth0Client } from '@auth0/auth0-spa-js'
import { ref } from 'vue'

let auth0Client = null
const isAuthenticated = ref(false)
const user = ref(null)

export const useAuth = () => {
  const initAuth0 = async () => {
    auth0Client = await createAuth0Client({
      domain: 'YOUR_AUTH0_DOMAIN',
      client_id: 'YOUR_AUTH0_CLIENT_ID',
      redirect_uri: window.location.origin,
    })
  }

  const login = async () => {
    await auth0Client.loginWithRedirect()
  }

  const logout = () => {
    auth0Client.logout({
      returnTo: window.location.origin
    })
    isAuthenticated.value = false
    user.value = null
  }

  const handleRedirectCallback = async () => {
    const result = await auth0Client.handleRedirectCallback()
    user.value = await auth0Client.getUser()
    isAuthenticated.value = true
    return result
  }

  const getUser = async () => {
    user.value = await auth0Client.getUser()
    isAuthenticated.value = true
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    handleRedirectCallback,
    getUser,
    initAuth0
  }
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('auth', useAuth())
})

