<!-- frontend/components/LessonCard.vue -->
<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ lesson.title }}</h3>
      <p class="text-gray-600">{{ lesson.description }}</p>
    </div>
    <div class="bg-blue-500 p-4">
      <nuxt-link :to="`/lessons/${lesson.id}`" class="text-white font-bold hover:underline">
        Start Lesson
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.lesson-card {
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
