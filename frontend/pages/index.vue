<!--Updated frontend/pages/index.vue -->

<template>
  <div>
    <Navbar />
    <div class="container mx-auto mt-10">
      <h1 class="text-4xl font-bold text-center">Welcome to the English Learning Platform</h1>
      <p class="mt-4 text-center text-gray-600">Start your journey to mastering English today!</p>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>



<!--Updated Styles for frontend/pages/index.vue-->

<style scoped>
.container {
  background-color: #d4d4d8;
  border-radius: 8px;
  box-shadow: 0 4px 8px #134e4a;
  padding: 20px;
}
h1 {
  color: #6b7280;
}
p {
  color: #71717a;
}
</style>

