<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-xl font-bold">
        <router-link to="/">English Learning Platform</router-link>
      </div>
      <div>
        <router-link
          to="/"
          class="text-white px-3 py-2 rounded-md text-sm font-medium"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="text-white px-3 py-2 rounded-md text-sm font-medium"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="text-white px-3 py-2 rounded-md text-sm font-medium"
          >Contact</router-link
        >
        <router-link
          to="/login"
          class="text-white px-3 py-2 rounded-md text-sm font-medium"
          >Login</router-link
        >
        <router-link
          to="/register"
          class="text-white px-3 py-2 rounded-md text-sm font-medium"
          >Register</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
