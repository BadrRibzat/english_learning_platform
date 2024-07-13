

<template>
  <div>
    <h1>Essay Writing</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the structure of an essay?',
  options: ['Introduction, Body, Conclusion', 'Introduction, Main Point, Supporting Details', 'Main Point, Supporting Details, Conclusion'],
  answer: 'Introduction, Body, Conclusion'
};
</script>

