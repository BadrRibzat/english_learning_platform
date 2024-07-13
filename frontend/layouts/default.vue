<!-- frontend/layouts/default.vue -->

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
</script>


