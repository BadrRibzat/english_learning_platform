<!--frontend/pages/user/progress.vue-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Learning Progress</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Overall Progress</h2>
        <div class="mb-4">
          <p class="mb-2">Completed Lessons: {{ completedLessons }} / {{ totalLessons }}</p>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${progressPercentage}%` }"></div>
          </div>
        </div>
        <p><strong>Current Level:</strong> {{ currentLevel }}</p>
        <p><strong>XP Points:</strong> {{ xpPoints }}</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul class="space-y-2">
          <li v-for="activity in recentActivities" :key="activity.id" class="flex justify-between items-center">
            <span>{{ activity.description }}</span>
            <span class="text-gray-600">{{ activity.date }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-4">Skill Breakdown</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="skill in skills" :key="skill.name" class="bg-white shadow-md rounded-lg p-4">
          <h3 class="text-lg font-semibold mb-2">{{ skill.name }}</h3>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div class="bg-green-600 h-2.5 rounded-full" :style="{ width: `${skill.progress}%` }"></div>
          </div>
          <p>{{ skill.progress }}% Mastered</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const completedLessons = ref(25)
const totalLessons = ref(100)
const currentLevel = ref('Intermediate')
const xpPoints = ref(1250)

const progressPercentage = computed(() => (completedLessons.value / totalLessons.value) * 100)

const recentActivities = ref([
  { id: 1, description: 'Completed Lesson: Compound Sentences', date: '2023-07-12' },
  { id: 2, description: 'Achieved 100% on Quiz: Verb Tenses', date: '2023-07-11' },
  { id: 3, description: 'Started New Course: Academic Writing', date: '2023-07-10' },
])

const skills = ref([
  { name: 'Grammar', progress: 75 },
  { name: 'Vocabulary', progress: 60 },
  { name: 'Reading', progress: 80 },
  { name: 'Writing', progress: 65 },
])
</script>
