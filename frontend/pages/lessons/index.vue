<!-- frontend/pages/lessons/index.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-600">
      English Learning Lessons
    </h1>
    <div v-for="level in 3" :key="level" class="mb-12">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">
        Level {{ level }}: {{ getLevelName(level) }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="lesson in lessonsForLevel(level)"
          :key="lesson.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <div class="bg-blue-600 text-white p-4">
            <h3 class="text-xl font-bold">{{ lesson.title }}</h3>
            <p class="text-sm">Lesson {{ lesson.order }}</p>
          </div>
          <div class="p-4">
            <p class="text-gray-600 mb-4">{{ lesson.description }}</p>
            <nuxt-link
              :to="`/lessons/${lesson.id}`"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Start Lesson
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/lessons/')
    // Sanitize lesson data before returning it
    const sanitizedLessons = data.map((lesson) => ({
      ...lesson,
      title: sanitizeHTML(lesson.title),
      description: sanitizeHTML(lesson.description),
      // Add more fields as necessary
    }))
    return { lessons: sanitizedLessons }
  },
  methods: {
    lessonsForLevel(level) {
      return this.lessons.filter((lesson) => lesson.level === level)
    },
    getLevelName(level) {
      return ['Beginner', 'Intermediate', 'Advanced'][level - 1]
    },
  },
}
</script>
