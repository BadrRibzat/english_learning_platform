<!--Updated Styles for frontend/pages/index.vue-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Welcome to English Learning Platform</h1>
    <p class="text-xl mb-8">Improve your English skills with our interactive lessons and exercises.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="level in levels" :key="level.id" class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">{{ level.title }}</h2>
        <p class="mb-4">{{ level.description }}</p>
        <NuxtLink :to="`/courses?level=${level.id}`" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Start Learning
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const levels = [
  { id: 1, title: 'Beginner', description: 'Start your English journey here' },
  { id: 2, title: 'Intermediate', description: 'Enhance your language skills' },
  { id: 3, title: 'Advanced', description: 'Master complex language concepts' },
  { id: 4, title: 'Professional', description: 'Polish your business English' },
  { id: 5, title: 'Academic', description: 'Prepare for academic success' },
]
</script>
