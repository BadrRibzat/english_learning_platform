<!--Updated components/RegisterForm.vue-->
<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label for="name" class="block mb-1">Name</label>
        <input type="text" id="name" v-model="name" required class="w-full border rounded p-2">
      </div>
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input type="email" id="email" v-model="email" required class="w-full border rounded p-2">
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input type="password" id="password" v-model="password" required class="w-full border rounded p-2">
      </div>
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

const name = ref('')
const email = ref('')
const password = ref('')
const { loginWithRedirect } = useAuth0()

const handleRegister = () => {
  // we will typically call an API to register the user
  // For this example, we'll just redirect to the login page
  loginWithRedirect({ screen_hint: 'signup' })
}
</script>
