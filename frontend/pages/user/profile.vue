<!--frontend/pages/user/profile.vue-->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">User Profile</h1>
    <div v-if="user" class="bg-white shadow-md rounded-lg p-6">
      <div class="flex items-center mb-6">
        <img :src="user.picture" :alt="user.name" class="w-20 h-20 rounded-full mr-4">
        <div>
          <h2 class="text-2xl font-semibold">{{ user.name }}</h2>
          <p class="text-gray-600">{{ user.email }}</p>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Account Details</h3>
        <p><strong>User ID:</strong> {{ user.sub }}</p>
        <p><strong>Last Login:</strong> {{ new Date(user.updated_at).toLocaleString() }}</p>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Learning Progress</h3>
        <p><strong>Completed Lessons:</strong> {{ completedLessons }}</p>
        <p><strong>Current Level:</strong> {{ currentLevel }}</p>
        <div class="mt-2">
          <div class="bg-gray-200 rounded-full h-4 w-full">
            <div class="bg-blue-600 rounded-full h-4" :style="{ width: `${progressPercentage}%` }"></div>
          </div>
          <p class="text-sm text-gray-600 mt-1">{{ progressPercentage }}% complete</p>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Achievements</h3>
        <div class="flex flex-wrap">
          <div v-for="achievement in achievements" :key="achievement.id" class="mr-4 mb-4">
            <img :src="achievement.icon" :alt="achievement.name" class="w-12 h-12">
            <p class="text-sm text-center mt-1">{{ achievement.name }}</p>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">Recent Activity</h3>
        <ul class="list-disc pl-5">
          <li v-for="activity in recentActivities" :key="activity.id" class="mb-2">
            {{ activity.description }} - {{ formatDate(activity.date) }}
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Settings</h3>
        <div class="flex items-center">
          <label for="notifications" class="mr-2">Email Notifications:</label>
          <input type="checkbox" id="notifications" v-model="emailNotifications" @change="updateSettings">
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-xl">Loading user profile...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { user } = useAuth0()
const completedLessons = ref(0)
const currentLevel = ref('Beginner')
const totalLessons = ref(100)
const achievements = ref([])
const recentActivities = ref([])
const emailNotifications = ref(true)

const progressPercentage = computed(() => {
  return Math.round((completedLessons.value / totalLessons.value) * 100)
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const updateSettings = async () => {
  // Here you would send the updated settings to your backend
  console.log('Email notifications:', emailNotifications.value)
}

onMounted(async () => {
  // Here we will fetch the user's learning progress from our backend
  // For this example, we'll use placeholder data
  completedLessons.value = 35
  currentLevel.value = 'Intermediate'
  totalLessons.value = 100
  
  achievements.value = [
    { id: 1, name: 'Fast Learner', icon: '/icons/fast-learner.png' },
    { id: 2, name: 'Perfect Score', icon: '/icons/perfect-score.png' },
    { id: 3, name: 'Consistent', icon: '/icons/consistent.png' },
  ]
  
  recentActivities.value = [
    { id: 1, description: 'Completed Lesson: Advanced Grammar', date: '2023-07-13' },
    { id: 2, description: 'Achieved Perfect Score in Quiz', date: '2023-07-12' },
    { id: 3, description: 'Started New Course: Creative Writing', date: '2023-07-10' },
  ]
})
</script>
