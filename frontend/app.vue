<!--fronten/app.vue-->

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/layouts/Navbar.vue'
import Footer from '~/layouts/Footer.vue'
</script>
