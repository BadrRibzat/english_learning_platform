// frontend/middleware/auth.js
export default function ({ store, redirect }) {
  if (!store.state.auth.user) {
    return redirect('/login')
  }
}
