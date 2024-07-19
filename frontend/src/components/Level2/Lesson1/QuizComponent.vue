<!--frontend/src/components/Level2/Lesson1/QuizComponent.vue-->
<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Quiz</h2>
    <div v-for="(question, index) in quiz.questions" :key="index" class="mb-4">
      <p>{{ question.question }}</p>
      <ul class="list-disc pl-5">
        <li v-for="(option, i) in question.options" :key="i">
          <input type="radio" :name="'question' + index" :value="option" />
          {{ option }}
        </li>
      </ul>
    </div>
    <button @click="submitQuiz" class="mt-4 bg-blue-500 text-white px-4 py-2">Submit</button>
  </div>
</template>

<script>
import quizData from '@/content/level2/lesson1/quiz.json';

export default {
  data() {
    return {
      quiz: quizData
    };
  },
  methods: {
    submitQuiz() {
      // Logic for submitting quiz answers
      alert("Quiz submitted!");
    }
  }
};
</script>

<style scoped>
</style>
