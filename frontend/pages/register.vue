<!-- frontend/pages/register.vue -->

<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/store/auth'

const username = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()

const register = async () => {
  try {
    await authStore.register(username.value, email.value, password.value)
    navigateTo('/login')
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>
