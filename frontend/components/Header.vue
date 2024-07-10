<!-- frontend/components/Header.vue -->

<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/login" v-if="!isLoggedIn">Login</NuxtLink>
      <NuxtLink to="/register" v-if="!isLoggedIn">Register</NuxtLink>
      <a href="#" @click.prevent="logout" v-if="isLoggedIn">Logout</a>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.isAuthenticated)

const logout = () => {
  authStore.logout()
  navigateTo('/')
}
</script>

<style scoped>
header {
  background: #333;
  color: #fff;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-around;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
