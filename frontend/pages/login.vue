<!-- english_learning_platform/frontend/pages/login.vue -->
<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const login = async () => {
  try {
    await store.dispatch('auth/login', { username: username.value, password: password.value })
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>
