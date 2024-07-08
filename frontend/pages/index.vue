<!-- frontend/pages/index.vue -->

<template>
  <div>
    <div v-html="sanitizeHTML(userContent)"></div>

    <div class="min-h-screen bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome to English Learning Platform
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <i :class="feature.icon + ' text-4xl text-blue-500 mb-4'"></i>
            <h2 class="text-xl font-semibold mb-2">{{ feature.title }}</h2>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
        <div class="mt-12 text-center">
          <nuxt-link
            to="/courses"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            <i class="fas fa-rocket mr-2"></i>Start Learning Now
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      features: [
        {
          icon: 'fas fa-book',
          title: 'Interactive Lessons',
          description:
            'Engage with our interactive lessons designed to make learning English fun and effective.',
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Track Your Progress',
          description:
            'Monitor your improvement with our comprehensive progress tracking system.',
        },
        {
          icon: 'fas fa-users',
          title: 'Community Support',
          description:
            'Join our community of learners and practice your skills with peers from around the world.',
        },
        {
          icon: 'fas fa-mobile-alt',
          title: 'Learn Anywhere',
          description: 'Access your lessons on any device, anytime, anywhere.',
        },
        {
          icon: 'fas fa-award',
          title: 'Earn Certificates',
          description:
            'Complete courses and earn certificates to showcase your achievements.',
        },
        {
          icon: 'fas fa-headphones',
          title: 'Audio Lessons',
          description:
            'Improve your listening skills with our audio-based lessons and exercises.',
        },
      ],
      userContent: `
        <p>Dynamic content from the backend or user input goes here.</p>
        &lt;script&gt;alert("XSS attack!")&lt;/script&gt;
      `,
    }
  },
  methods: {
    sanitizeHTML(html) {
      return sanitizeHTML(html)
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

h1 {
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.grid > div {
  cursor: pointer;
}

.grid > div:hover i {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
