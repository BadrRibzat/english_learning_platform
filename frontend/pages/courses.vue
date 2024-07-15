<!-- pages/courses.vue -->
<template>
  <div class="courses-container">
    <h1>English Grammar Courses</h1>
    
    <div v-for="(level, index) in levels" :key="index" class="level-card">
      <h2>{{ level.title }}</h2>
      <p>{{ level.description }}</p>
      <button @click="navigateToRegister(level.id)" class="view-course-btn">View Course</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const levels = [
  {
    id: 1,
    title: "Level 1 - Basics",
    description: "Start your journey with fundamental English grammar concepts including present simple, past simple, present continuous, and future simple tenses."
  },
  {
    id: 2,
    title: "Level 2 - Intermediate",
    description: "Enhance your skills with adjectives, adverbs, comparatives, and superlatives. Perfect for those looking to add depth to their language."
  },
  {
    id: 3,
    title: "Level 3 - Upper Intermediate",
    description: "Dive deeper into complex structures like present perfect, past continuous, modals, and passive voice."
  },
  {
    id: 4,
    title: "Level 4 - Advanced",
    description: "Master advanced concepts including conditional sentences, reported speech, relative clauses, and gerunds."
  },
  {
    id: 5,
    title: "Level 5 - Proficiency",
    description: "Achieve language proficiency with subjunctive mood, inversion and emphasis, advanced modals, and advanced conditionals."
  }
];

const navigateToRegister = (levelId: number) => {
  router.push({ name: 'register', params: { levelId: levelId.toString() } });
};
</script>

<style scoped>
.courses-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.level-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.view-course-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.view-course-btn:hover {
  background-color: #45a049;
}
</style>
