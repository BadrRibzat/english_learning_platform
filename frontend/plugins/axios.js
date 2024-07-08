// frontend/plugins/axios.js
export default function ({ $axios, redirect, store }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.dispatch('auth/logout')
      redirect('/login')
    }
  })

  $axios.onRequest((config) => {
    const token = store.state.auth.token
    if (token) {
      config.headers.common.Authorization = `Token ${token}`
    }
    return config
  })
}
