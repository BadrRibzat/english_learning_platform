<!--Updates frontend/components/LoginForm.vue-->

<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input type="email" id="email" v-model="email" required class="w-full border rounded p-2">
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input type="password" id="password" v-model="password" required class="w-full border rounded p-2">
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth0 } from '@/plugins/auth/auth0'

const email = ref('')
const password = ref('')
const { loginWithRedirect } = useAuth0()

const handleLogin = () => {
  loginWithRedirect()
}
</script>
