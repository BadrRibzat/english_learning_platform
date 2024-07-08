<!-- frontend/pages/profile.vue -->

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Your Profile</h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          id="username"
          v-model="profile.username"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          id="email"
          v-model="profile.email"
          type="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="profile-picture"
        >
          Profile Picture
        </label>
        <input
          id="profile-picture"
          type="file"
          accept="image/*"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          @change="handleFileUpload"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="updateProfile"
        >
          Update Profile
        </button>
      </div>
    </div>
    <UserProgress class="mt-8" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserProgress from '~/components/UserProgress.vue'
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  components: {
    UserProgress,
  },
  data() {
    return {
      profile: {
        username: '',
        email: '',
        profile_picture: null,
      },
    }
  },
  computed: {
    ...mapState('auth', ['user']),
  },
  mounted() {
    this.profile.username = this.user.username
    this.profile.email = this.user.email
  },
  methods: {
    handleFileUpload(event) {
      this.profile.profile_picture = event.target.files[0]
    },
    async updateProfile() {
      try {
        const formData = new FormData()
        formData.append('username', this.profile.username)
        formData.append('email', this.profile.email)
        if (this.profile.profile_picture) {
          formData.append('profile_picture', this.profile.profile_picture)
        }

        await this.$axios.patch('/api/auth/user/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        this.$store.commit('auth/SET_USER', {
          ...this.user,
          username: this.profile.username,
          email: this.profile.email,
        })

        this.$toast.success('Profile updated successfully')
      } catch (error) {
        console.error('Error updating profile:', error)
        this.$toast.error('Failed to update profile')
      }
    },
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>
