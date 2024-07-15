<!-- frontend/pages/bankform.vue -->
<template>
  <div>
    <Navbar />
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-4">Bank Transfer Form</h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <!-- Add your bank transfer form elements here -->
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Premiume from '../components/PremiumeForm.vue';
</script>
