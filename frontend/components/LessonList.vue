<template>
  <div class="lesson-list">
    <h2 class="text-2xl font-bold mb-4">Lessons</h2>
    <ul>
      <li v-for="lesson in sanitizedLessons" :key="lesson.id" class="mb-2">
        <nuxt-link
          :to="`/lessons/${lesson.id}`"
          class="text-blue-600 hover:underline"
          v-html="lesson.title"
        ></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  props: {
    lessons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sanitizedLessons() {
      return this.lessons.map((lesson) => ({
        ...lesson,
        title: sanitizeHTML(lesson.title),
      }))
    },
  },
  methods: {
    sanitizeHTML,
  },
}
</script>
