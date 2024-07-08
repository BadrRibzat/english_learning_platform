<!-- frontend/pages/register.vue -->

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Register</h1>
    <form class="max-w-md mx-auto" @submit.prevent="register">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2"
          >Username</label
        >
        <input
          id="username"
          v-model="form.username"
          type="text"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Email</label
        >
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Password</label
        >
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        <nuxt-link
          to="/login"
          class="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
        >
          Already have an account?
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.form)
        this.$router.push('/')
      } catch (error) {
        console.error('Registration error:', error)
        this.$toast.error('Failed to register. Please try again.')
      }
    },
  },
  sanitizedHTML() {
    return sanitizeHTML(this.userContent)
  },
}
</script>
