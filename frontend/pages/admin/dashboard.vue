<!--frontend/pages/admin/dashboard.vue-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div v-for="stat in stats" :key="stat.name" class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-2">{{ stat.name }}</h2>
        <p class="text-3xl font-bold">{{ stat.value }}</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Recent User Registrations</h2>
        <ul class="space-y-2">
          <li v-for="user in recentUsers" :key="user.id" class="flex justify-between items-center">
            <span>{{ user.name }}</span>
            <span class="text-gray-600">{{ user.registrationDate }}</span>
          </li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Popular Courses</h2>
        <ul class="space-y-2">
          <li v-for="course in popularCourses" :key="course.id" class="flex justify-between items-center">
            <span>{{ course.name }}</span>
            <span class="text-gray-600">{{ course.enrollments }} enrollments</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { name: 'Total Users', value: 1250 },
  { name: 'Active Courses', value: 25 },
  { name: 'Completed Lessons', value: 15000 },
  { name: 'Average User Score', value: '85%' },
])

const recentUsers = ref([
  { id: 1, name: 'Badr Ribzat', registrationDate: '2023-07-12' },
  { id: 2, name: 'Jane Smith', registrationDate: '2023-07-11' },
  { id: 3, name: 'Bob Johnson', registrationDate: '2023-07-10' },
])

const popularCourses = ref([
  { id: 1, name: 'English Grammar Basics', enrollments: 320 },
  { id: 2, name: 'Business English', enrollments: 280 },
  { id: 3, name: 'IELTS Preparation', enrollments: 250 },
])
</script>
