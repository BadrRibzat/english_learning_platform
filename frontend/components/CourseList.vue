<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Available Courses</h2>
    <ul>
      <li v-for="course in sanitizedCourses" :key="course.id" class="mb-4">
        <h3 class="text-xl font-semibold">{{ course.name }}</h3>
        <p v-html="course.description"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  computed: {
    ...mapState('courses', ['courses']),
    sanitizedCourses() {
      return this.courses.map((course) => ({
        ...course,
        description: sanitizeHTML(course.description),
      }))
    },
  },
  mounted() {
    this.$store.dispatch('courses/fetchCourses')
  },
}
</script>
