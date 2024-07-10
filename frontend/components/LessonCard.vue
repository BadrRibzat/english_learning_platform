<!-- frontend/components/LessonCard.vue -->

<template>
  <div class="lesson-card">
    <h3>{{ lesson.title }}</h3>
    <p>Level: {{ lesson.level }}</p>
    <NuxtLink :to="`/lessons/level${lesson.level}/lesson${lesson.order}`" class="btn">Start Lesson</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  lesson: {
    type: Object,
    required: true
  }
})
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
