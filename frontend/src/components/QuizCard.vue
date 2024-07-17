<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
    <div class="px-6 py-4">
      <h2 class="font-bold text-xl mb-2">{{ title }}</h2>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
    <div class="px-6 py-4">
      <router-link
        :to="link"
        class="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium"
        >Start Quiz</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizCard",
  props: {
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style scoped>
.quiz-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.quiz-card h3 {
  margin-bottom: 5px;
}

.quiz-card p {
  margin-bottom: 10px;
}
</style>
