<!-- frontend/pages/about.vue -->

<template>
  <div>
    <div v-html="sanitizeHTML(userContent)"></div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">About Us</h1>
      <p class="mb-4">
        Welcome to our English Learning Platform! We are dedicated to helping
        students improve their English skills through interactive lessons,
        multimedia flashcards, and engaging quizzes.
      </p>
      <p class="mb-4">
        Our platform is designed to cater to the US school curriculum, providing
        a comprehensive learning experience for students at various levels of
        English proficiency.
      </p>
      <p>
        Whether you're just starting to learn English or looking to refine your
        skills, our platform offers a range of courses and lessons to suit your
        needs.
      </p>
    </div>
  </div>
</template>

<script>
import { sanitizeHTML } from '@/sanitizers/sanitize'

export default {
  data() {
    return {
      userContent: `
        <p>Dynamic content from the backend or user input goes here.</p>
        &lt;script&gt;alert("XSS attack!")&lt;/script&gt;
      `,
    }
  },
  methods: {
    sanitizeHTML,
  },
}
</script>
