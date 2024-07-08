<!-- frontend/pages/lessons/_id.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <LessonDisplay :lesson="sanitizedLesson" />
  </div>
</template>

<script>
import LessonDisplay from '@/components/LessonDisplay.vue'
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  components: {
    LessonDisplay,
  },
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/api/lessons/${params.id}/`)
    // Sanitize lesson data before returning it
    const sanitizedLesson = {
      ...data,
      title: sanitizeHTML(data.title),
      description: sanitizeHTML(data.description),
      // Add more fields as necessary
    }
    return { lesson: sanitizedLesson }
  },
}
</script>
