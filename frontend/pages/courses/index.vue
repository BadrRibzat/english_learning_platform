<!-- frontend/pages/courses/index.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Available Courses</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white rounded-lg shadow-md p-6"
      >
        <h2 class="text-2xl font-semibold mb-4">
          {{ sanitizeHTML(course.name) }}
        </h2>
        <p class="mb-4">{{ sanitizeHTML(course.description) }}</p>
        <nuxt-link
          :to="`/courses/${course.id}`"
          class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Course
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  computed: {
    ...mapState('courses', ['courses']),
  },
  mounted() {
    this.$store.dispatch('courses/fetchCourses')
  },
  methods: {
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>
