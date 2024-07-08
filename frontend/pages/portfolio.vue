<!-- frontend/pages/portfolio.vue -->

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4 animate-gradient">Badr Ribzat</h1>
        <p class="text-2xl text-blue-400">Full Stack Developer</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300"
        >
          <h2 class="text-2xl font-semibold mb-4 text-blue-300">
            Contact Information
          </h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <i class="fas fa-envelope mr-3 text-blue-400"></i>
              <a
                href="mailto:badrribzat@gmail.com"
                class="hover:text-blue-300 transition duration-300"
                >{{ sanitizeHTML('badrribzat@gmail.com') }}</a
              >
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-3 text-blue-400"></i>
              <a
                href="tel:+212627764176"
                class="hover:text-blue-300 transition duration-300"
                >{{ sanitizeHTML('+212627764176') }}</a
              >
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-blue-400"></i>
              <span>{{ sanitizeHTML('Morocco') }}</span>
            </li>
          </ul>
        </div>
        <div
          class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300"
        >
          <h2 class="text-2xl font-semibold mb-4 text-blue-300">Projects</h2>
          <ul class="space-y-3">
            <li>
              <nuxt-link
                to="/"
                class="text-blue-400 hover:text-blue-300 transition duration-300 flex items-center"
              >
                <i class="fas fa-project-diagram mr-2"></i>
                {{ sanitizeHTML('English Language Learning Platform') }}
              </nuxt-link>
            </li>
            <!-- Add more projects here -->
          </ul>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-3xl font-semibold mb-6 text-center text-blue-300">
          Skills
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="skill in skills"
            :key="skill"
            class="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:-translate-y-1"
          >
            <div class="text-lg mb-2 font-medium">
              {{ sanitizeHTML(skill) }}
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
              <div
                class="bg-blue-600 h-2.5 rounded-full animate-pulse"
                style="width: 50%"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300"
      >
        <h2 class="text-2xl font-semibold mb-4 text-blue-300">
          Certifications
        </h2>
        <!-- Add certifications here -->
        <p class="text-gray-400">
          {{ sanitizeHTML('Certifications coming soon...') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      skills: [
        'Python3',
        'Flask',
        'Django',
        'MongoDB',
        'JavaScript',
        'ES6',
        'TypeScript',
        'Express.js',
        'Node.js',
        'Vue3',
        'Vuex',
        'Bootstrap',
        'React',
        'Angular',
        'C++',
        'C',
      ],
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
.animate-gradient {
  background: linear-gradient(-45deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-blue-500\/50:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

a,
.text-blue-400 {
  position: relative;
  display: inline-block;
}

a::after,
.text-blue-400::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #60a5fa;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

a:hover::after,
.text-blue-400:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
