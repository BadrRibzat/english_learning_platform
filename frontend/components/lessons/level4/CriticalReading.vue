

<template>
  <div>
    <h1>Critical Reading</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What is the purpose of critical reading?',
  options: ['To find errors', 'To understand and evaluate', 'To skim quickly'],
  answer: 'To understand and evaluate'
};
</script>

