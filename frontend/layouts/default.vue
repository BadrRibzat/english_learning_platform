<!-- frontend/layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavigationBar />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        © {{ new Date().getFullYear() }} English Learning Platform. All rights
        reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
}
</script>
