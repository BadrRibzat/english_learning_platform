<!-- english_learning_platform/frontend/pages/index.vue -->
<template>
  <div class="container">
    <h1>Welcome to the English Learning Platform</h1>
    <p>Start your journey to master the English language today!</p>
    <div v-if="lessons && lessons.length">
      <h2>Available Lessons</h2>
      <div v-for="lesson in lessons" :key="lesson.id">
        <h3>{{ lesson.title }}</h3>
        <p>Level: {{ lesson.level }}</p>
        <NuxtLink :to="`/lessons/level${lesson.level}/lesson${lesson.order}`">Start Lesson</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const lessons = computed(() => store.getters['lessons/lessons'])

onMounted(() => {
  store.dispatch('lessons/fetchLessons')
})
</script>
