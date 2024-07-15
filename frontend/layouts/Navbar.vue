<!--frontend/layouts/Navbar.vue-->
<template>
  <nav class="bg-gray-800 text-white p-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="@/assets/logo.png" alt="Logo" class="h-8 w-auto" />
        <span class="text-xl font-bold">English Learning Platform</span>
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <NuxtLink to="/courses" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">Courses</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">Contact</NuxtLink>
        <NuxtLink to="/portfolio" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">Portfolio</NuxtLink>
        <NuxtLink to="/paypalform" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">PaypalForm</NuxtLink>
        <NuxtLink to="/bankform" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">BankForm</NuxtLink>
        
        <!-- Language Selector -->
        <select v-model="selectedLanguage" @change="changeLanguage" class="bg-gray-700 text-white px-2 py-1 rounded">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>

        <template v-if="isAuthenticated">
          <div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <button class="flex items-center space-x-1 hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">
              <span>{{ user.name }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="showDropdown" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <NuxtLink to="/user/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</NuxtLink>
              <NuxtLink to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</NuxtLink>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          </div>
        </template>
        <template v-else>
          <NuxtLink to="/login" class="hover:text-gray-300 hover:bg-gray-700 px-2 py-1 rounded">Login</NuxtLink>
          <NuxtLink to="/register" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-md">Register</NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated, logout, user } = useAuth0()
const showDropdown = ref(false)
const selectedLanguage = ref('en')

const changeLanguage = () => {
  // Implement language change logic here
  console.log(`Language changed to ${selectedLanguage.value}`)
}
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: #63b3ed; /* light blue color */
}
</style>
