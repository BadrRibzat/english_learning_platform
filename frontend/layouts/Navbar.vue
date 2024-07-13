<!--frontend/components/Navbare.vue-->
<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">English Learning Platform</NuxtLink>
      <div class="space-x-4">
        <NuxtLink to="/courses" class="hover:text-gray-300">Courses</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-300">Contact</NuxtLink>
        <template v-if="isAuthenticated">
          <NuxtLink to="/user/profile" class="hover:text-gray-300">Profile</NuxtLink>
	<NuxtLink to="/portfolio" class="hover:text-gray-300">Portfolio</NuxtLink>
         <button @click="logout" class="hover:text-gray-300">Logout</button>
        </template>
        <template v-else>
          <NuxtLink to="/login" class="hover:text-gray-300">Login</NuxtLink>
          <NuxtLink to="/register" class="hover:text-gray-300">Register</NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated, logout } = useAuth0()
</script>
