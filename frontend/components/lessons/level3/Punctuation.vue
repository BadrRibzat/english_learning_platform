

<template>
  <div>
    <h1>Punctuation</h1>
    <Quiz :quiz="quizData" />
  </div>
</template>

<script setup>
import Quiz from '~/components/Quiz.vue';

const quizData = {
  question: 'What punctuation mark is used to indicate a pause?',
  options: ['Comma', 'Period', 'Exclamation Mark'],
  answer: 'Comma'
};
</script>

