

<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Professional Communication</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the most important aspect of professional communication?',
  options: ['Formality', 'Clarity', 'Speed'],
  answer: 'Clarity'
};
</script>

