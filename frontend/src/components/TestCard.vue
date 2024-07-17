<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
    <div class="px-6 py-4">
      <h2 class="font-bold text-xl mb-2">{{ title }}</h2>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
    <div class="px-6 py-4">
      <router-link
        :to="link"
        class="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
        >Start Test</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TestCard",
  props: {
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
