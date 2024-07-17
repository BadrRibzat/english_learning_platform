<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">
      Welcome to Our English Learning Platform
    </h1>
    <p class="text-lg mb-6">
      Start your journey to mastering English with our comprehensive lessons and
      interactive exercises.
    </p>
    <router-link
      to="/register"
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >Get Started</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
