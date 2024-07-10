<!-- components/NavigationBar.vue -->
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <NuxtLink to="/portfolio">Portfolio</NuxtLink>
    <NuxtLink to="/lessons">Lessons</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/register">Register</NuxtLink>
    <a v-if="isLoggedIn" href="#" @click.prevent="logout">Logout</a>
    <NuxtLink v-if="isAdmin" to="/admin-dashboard">Admin Dashboard</NuxtLink>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isLoggedIn = computed(() => store.getters['auth/isAuthenticated'])
const isAdmin = computed(() => store.getters['auth/isAdmin'])

const logout = () => {
  store.dispatch('auth/logout')
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f9fa;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
