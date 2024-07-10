<!-- layouts/default.vue -->
<template>
  <div>
    <NavigationBar />
    <slot />
  </div>
</template>

<script setup>
import NavigationBar from '~/components/NavigationBar.vue'
</script>
