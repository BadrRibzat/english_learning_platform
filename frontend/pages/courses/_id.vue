<!-- frontend/pages/courses/_id.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">{{ sanitizeHTML(course.name) }}</h1>
    <p class="mb-8">{{ sanitizeHTML(course.description) }}</p>
    <div v-for="level in course.levels" :key="level.id" class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        {{ sanitizeHTML(level.name) }}
      </h2>
      <p class="mb-4">{{ sanitizeHTML(level.description) }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="lesson in level.lessons"
          :key="lesson.id"
          class="bg-white rounded-lg shadow-md p-4"
        >
          <h3 class="text-xl font-semibold mb-2">
            {{ sanitizeHTML(lesson.title) }}
          </h3>
          <p class="mb-4">{{ sanitizeHTML(lesson.description) }}</p>
          <nuxt-link
            :to="`/lessons/${lesson.id}`"
            class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Start Lesson
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/api/courses/${params.id}/`)
    return { course: data }
  },
  methods: {
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>
