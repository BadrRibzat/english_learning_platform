<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">English Courses</h1>
    <div class="mb-8">
      <label for="level" class="mr-2">Filter by Level:</label>
      <select id="level" v-model="selectedLevel" class="border rounded p-2">
        <option value="">All Levels</option>
        <option v-for="level in levels" :key="level.id" :value="level.id">
          {{ level.title }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="course in filteredCourses" :key="course.id" class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">{{ course.title }}</h2>
        <p class="mb-4">{{ course.description }}</p>
        <p class="mb-4">Level: {{ levels.find(l => l.id === course.levelId).title }}</p>
        <NuxtLink :to="`/courses/${course.id}`" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Course
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const levels = [
  { id: 1, title: 'Beginner' },
  { id: 2, title: 'Intermediate' },
  { id: 3, title: 'Advanced' },
  { id: 4, title: 'Professional' },
  { id: 5, title: 'Academic' },
]

const courses = [
  { id: 1, title: 'Alphabet Basics', description: 'Learn the English alphabet', levelId: 1 },
  { id: 2, title: 'Simple Words', description: 'Build your vocabulary with simple words', levelId: 1 },
  { id: 3, title: 'Compound Sentences', description: 'Learn to form compound sentences', levelId: 2 },
  { id: 4, title: 'Essay Writing', description: 'Master the art of essay writing', levelId: 3 },
  { id: 5, title: 'Business Communication', description: 'Enhance your professional communication skills', levelId: 4 },
  { id: 6, title: 'Academic Writing', description: 'Prepare for academic writing challenges', levelId: 5 },
]

const selectedLevel = ref('')

const filteredCourses = computed(() => {
  if (selectedLevel.value) {
    return courses.filter(course => course.levelId === parseInt(selectedLevel.value))
  }
  return courses
})
</script>
