<!-- frontend/pages/login.vue -->

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
import { useAuthStore } from '~/store/auth'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()

const login = async () => {
  try {
    await authStore.login(username.value, password.value)
    navigateTo('/')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>
