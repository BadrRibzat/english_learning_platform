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
      <div>
        <h3 class="text-xl font-semibold mb-2">Learning Progress</h3>
        <p><strong>Completed Lessons:</strong> {{ completedLessons }}</p>
        <p><strong>Current Level:</strong> {{ currentLevel }}</p>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-xl">Loading user profile...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { user } = useAuth0()
const completedLessons = ref(0)
const currentLevel = ref('Beginner')

onMounted(async () => {
  // Here we will fetch the user's learning progress from our backend
  // For this example, we'll use placeholder data
  completedLessons.value = 15
  currentLevel.value = 'Intermediate'
})
</script>
