<!-- frontend/pages/admin-dashboard.vue -->
<template>
  <div class="container">
    <h1>Admin Dashboard</h1>
    <div class="magical-card">
      <h2>Users</h2>
      <ul>
        <li v-for="user in adminStore.users" :key="user.id">
          {{ user.username }} ({{ user.email }})
        </li>
      </ul>
    </div>
    <div class="magical-card">
      <h2>Lessons</h2>
      <ul>
        <li v-for="lesson in adminStore.lessonData" :key="lesson.id">
          {{ lesson.title }} (Level: {{ lesson.level }})
        </li>
      </ul>
    </div>
    <div class="magical-card">
      <h2>Exercises</h2>
      <ul>
        <li v-for="exercise in adminStore.exerciseData" :key="exercise.id">
          {{ exercise.lesson__title }}: {{ exercise.question }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAdminStore } from '~/store/admin'

const adminStore = useAdminStore()

onMounted(async () => {
  await adminStore.fetchDashboardData()
})

// Define page metadata for middleware handling
definePageMeta({
  middleware: ['auth', 'admin']
})
</script>

