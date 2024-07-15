<!-- components/LoginForm.vue -->
<template>
  <div class="form-container">
    <h2>Login for Level {{ levelId }}</h2>
    <form @submit.prevent="handleSubmit" class="login-form">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit" class="submit-btn">Login</button>
    </form>
    <div class="social-login">
      <button @click="socialLogin('facebook')" class="social-btn facebook">Facebook</button>
      <button @click="socialLogin('instagram')" class="social-btn instagram">Instagram</button>
      <button @click="socialLogin('linkedin')" class="social-btn linkedin">LinkedIn</button>
      <button @click="socialLogin('github')" class="social-btn github">GitHub</button>
      <button @click="socialLogin('tiktok')" class="social-btn tiktok">TikTok</button>
      <button @click="socialLogin('google')" class="social-btn google">Google</button>
    </div>
    <p>Don't have an account? <a @click="navigateToRegister" class="link">Register here</a></p>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

const { auth } = useNuxtApp();

async function login() {
  try {
    await auth.loginWithRedirect();
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

async function logout() {
  try {
    await auth.logout();
  } catch (error) {
    console.error('Error logging out:', error);
  }
}
</script>

<style scoped>
/* Same styles as RegisterForm.vue */
</style>


