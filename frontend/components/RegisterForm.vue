<template>
  <form @submit.prevent="submitForm">
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
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    async submitForm() {
      try {
        await this.registerUser({
          username: this.username,
          email: this.email,
          password: this.password
        })
        alert('Registration successful!')
        // Clear the form
        this.username = ''
        this.email = ''
        this.password = ''
      } catch (error) {
        alert('Registration failed: ' + error.response.data.message)
      }
    }
  }
}
</script>
