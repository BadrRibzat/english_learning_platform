<template>
  <div>
    <!-- Sanitizing userContent if necessary -->
    <div v-html="sanitizeHTML(userContent)"></div>

    <!-- Navigation Bar -->
    <nav class="bg-gray-900 text-white p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <nuxt-link
          to="/"
          class="text-2xl font-bold hover:text-blue-400 transition duration-300"
        >
          <i class="fas fa-language mr-2"></i>English Learning Platform
        </nuxt-link>
        <div class="space-x-4">
          <!-- Iterating over navItems to create navigation links -->
          <nuxt-link
            v-for="item in navItems"
            :key="item.route"
            :to="item.route"
            class="hover:text-blue-400 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <i :class="item.icon" class="mr-1"></i>{{ item.name }}
          </nuxt-link>

          <!-- Logout button, visible if user is logged in -->
          <button
            v-if="$auth.loggedIn"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
            @click="logout"
          >
            <i class="fas fa-sign-out-alt mr-1"></i>Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      navItems: [
        { name: 'Home', route: '/', icon: 'fas fa-home' },
        { name: 'Courses', route: '/courses', icon: 'fas fa-book' },
        { name: 'Profile', route: '/profile', icon: 'fas fa-user' },
        { name: 'About', route: '/about', icon: 'fas fa-info-circle' },
        { name: 'Contact', route: '/contact', icon: 'fas fa-envelope' },
      ],
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (error) {
        console.error('Logout failed', error)
      }
    },
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}

a,
button {
  position: relative;
  overflow: hidden;
}

a::after,
button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #60a5fa;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

a:hover::after,
button:hover::after {
  transform: scaleX(1);
}
</style>
