<!-- frontend/components/CourseList.vue -->

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Available Courses</h2>
    <ul>
      <li v-for="course in courses" :key="course.id" class="mb-4">
        <h3 class="text-xl font-semibold">{{ course.name }}</h3>
        <p>{{ course.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('courses', ['courses']),
  },
  mounted() {
    this.$store.dispatch('courses/fetchCourses')
  },
}
</script>
