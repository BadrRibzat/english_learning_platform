<template>
  <div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-blue-600 text-white p-4">
        <h2 class="text-2xl font-bold">{{ lesson.title }}</h2>
        <p class="text-sm">
          Level {{ lesson.level }} - Lesson {{ lesson.order }}
        </p>
      </div>
      <div class="p-6">
        <div v-html="sanitizedContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sanitizedContent() {
      return sanitizeHTML(this.lesson.content)
    },
  },
  methods: {
    sanitizeHTML,
  },
}
</script>
